module.exports = {
  params: {
    net: undefined
  },
  body: p => {
    const [net_index, net_name] = `${p.net}`.slice(5, -1).split(" ");

  return `
    (via
      (at ${p.x} ${p.y})
      (size 0.8)
      (layers "F.Cu" "B.Cu")
      (net ${net_index})
    )
  `
  }
}
