module.exports = {
  params: {
    designator: 'D',
    value: undefined,
    // F or B
    side: 'F',
    reverse: false,
    SMD: false,
    THT: false,
    from: undefined,
    to: undefined
  },
  body: p => {
    const value = `${p.value}`.slice(4, -1).split(" ")[2];
    
    let pad_x_mm, pad_width_mm, pad_height_mm;
    // // 123
    // pad_x_mm = 1.65;
    // pad_width_mm = 0.9;
    // pad_height_mm = 1.2;

    // 323
    pad_x_mm = 1.055;
    pad_width_mm = 0.590;
    pad_height_mm = 0.450;

    let base = `
  (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
		  (property "Value" ${value}
        (at 0 0) 
        (layer F.Fab)
        (effects
          (font 
            (size 1.27 1.27) 
            (thickness 0.15)
          )
        )
      )
      
      ${''/* diode symbols */}
      (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
      (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
      (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))

  `

    if (p.SMD) {
      if (!p.reverse) {        
        if (p.side == "F") {
          base += `
          (pad 1 smd rect (at -${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.to})
          (pad 2 smd rect (at ${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.from})

          `;
        } else if (p.side == "B") {
          base += `
          (pad 1 smd rect (at -${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers B.Cu B.Paste B.Mask) ${p.to})
          (pad 2 smd rect (at ${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers B.Cu B.Paste B.Mask) ${p.from})

          `;
        } else {
          throw error("params.side should be F or B");
        }
      } else {
        base += `
        (pad 1 smd rect (at -${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.to})
        (pad 2 smd rect (at ${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers B.Cu B.Paste B.Mask) ${p.from})
        (pad 1 smd rect (at -${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers B.Cu B.Paste B.Mask) ${p.to})
        (pad 2 smd rect (at ${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.from})

        `
      }
    }

    if (p.THT) {
      base += `
      ${''/* THT terminals */}
      (pad 1 thru_hole rect (at -3.81 0 ${p.r}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.to})
      (pad 2 thru_hole circle (at 3.81 0 ${p.r}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.from})
      
    `
    }

    return base + ')';
  }
}