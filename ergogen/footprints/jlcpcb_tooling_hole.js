module.exports = {
  params: {},
  body: p => {
    return `
  (module ToolingHole (layer F.Cu) (tedit 5B24D78E)

    ${p.at /* parametric position */}


    ${'' /* footprint reference */}
    (property "Reference" ${p.ref}
      (at 0 0) 
      (layer F.SilkS) 
      hide
      (effects 
        (font 
          (size 1 1)
          (thickness 0.15)
        )
      )
    )
		(property "Value" ""
			(at 0 0)
			(layer "F.Fab")
      hide
			(effects
				(font
					(size 1 1)
					(thickness 0.15)
				)
			)
		)

    (pad "1" thru_hole circle 
      (at 0 0) 
      (size 1.152 1.152) 
      (drill 1.152) 
      (layers *.Cu *.SilkS *.Mask) 
			(remove_unused_layers no)
			(zone_connect 2)
    )
  )
  `
  }
}