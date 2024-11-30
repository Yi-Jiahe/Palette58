module.exports = {
  params: {
    // via diameter in mm
    size: 0.8,
    net: undefined
  },
  body: p => {
    const [net_index, net_name] = `${p.net}`.slice(5, -1).split(" ");

    // constrain hole to diameter of 0.3 - 0.4mm, with a minimum annular width of 0.1mm 
    const drill_size = Math.min(0.4, Math.max(p.size - (0.1 * 2), 0.3));
  return `
    (via
      (at ${p.x} ${p.y})
      (size ${p.size})
      (drill ${drill_size})
      (layers "F.Cu" "B.Cu")
      (net ${net_index})
    )
  `
  }
}
