// Unpolarized SMD capacitor

module.exports = {
  params: {
    designator: 'C',
    // F or B
    side: 'F',
    value: undefined,
    left: undefined,
    right: undefined
  },
  body: p => {
    const pad_x_mm = 0.7;
    const pad_width_mm = 0.9;
    const pad_height_mm = 1.0;

    // ergogen converts extra properties to nets
    const value = `${p.value}`.slice(4, -1).split(" ")[2];
    
    let base = `
  (module Capacitor (layer F.Cu) (tedit 5B24D78E)

      ${p.at /* parametric position */}


    ${'' /* footprint reference */}
    (property "Reference" ${p.ref}
      (at 0 -${pad_height_mm/2 + 1/2}) 
      (layer F.SilkS) 
        (effects 
            (font 
              (size 1 1)
              (thickness 0.15)
          )
        )
      )
		(property "Value" ${value}
			(at 0 ${pad_height_mm/2 + 1/2})
			(layer "F.Fab")
			(effects
				(font
					(size 1 1)
					(thickness 0.15)
				)
			)
		)
      
  `

    base += `
          (pad 1 smd rect (at -${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.left})
          (pad 2 smd rect (at ${pad_x_mm} 0 ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.right})

          `;

    return base + ')';
  }
}