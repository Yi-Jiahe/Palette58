module.exports = {
  params: {
    designator: 'SW',
    // F or B
    side: 'F',
    value: undefined,
    A: undefined,
    B: undefined
  },
  body: p => {
    const pad_x_mm = 3.00;
    const pad_y_mm = 2.125;
    const pad_width_mm = 2.0;
    const pad_height_mm = 1.5;

    // ergogen converts extra properties to nets
    const value = `${p.value}`.slice(4, -1).split(" ")[2];
    
    let base = `
  (module PushSwitch (layer F.Cu) (tedit 5B24D78E)

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
    
    (pad 1 smd rect (at -${pad_x_mm} -${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.A})
    (pad 2 smd rect (at ${pad_x_mm} -${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.A})
    (pad 3 smd rect (at -${pad_x_mm} ${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.B})
    (pad 4 smd rect (at ${pad_x_mm} ${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers F.Cu F.Paste F.Mask) ${p.B})
  )
  `

    return base;
  }
}