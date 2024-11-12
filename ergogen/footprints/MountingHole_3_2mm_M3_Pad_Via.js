
module.exports = {
  nets: {
      net: undefined
  },
  params: {
      class: 'HOLE',
  },
  body: p => `
	(footprint "MountingHole:MountingHole_3.2mm_M3_Pad_Via"
		(layer "F.Cu")
		${p.at}
		(descr "Mounting Hole 3.2mm, M3")
		(tags "mounting hole 3.2mm m3")
		(property "Reference" "REF**"
			(at 0 -4.2 0)
			(layer "F.SilkS")
			(effects
				(font
					(size 1 1)
					(thickness 0.15)
				)
			)
		)
		(property "Value" "MountingHole_3.2mm_M3_Pad_Via"
			(at 0 4.2 0)
			(layer "F.Fab")
			(effects
				(font
					(size 1 1)
					(thickness 0.15)
				)
			)
		)
		(property "Footprint" ""
			(at 0 0 0)
			(unlocked yes)
			(layer "F.Fab")
			(hide yes)
			(effects
				(font
					(size 1.27 1.27)
					(thickness 0.15)
				)
			)
		)
		(property "Datasheet" ""
			(at 0 0 0)
			(unlocked yes)
			(layer "F.Fab")
			(hide yes)
			(effects
				(font
					(size 1.27 1.27)
					(thickness 0.15)
				)
			)
		)
		(property "Description" ""
			(at 0 0 0)
			(unlocked yes)
			(layer "F.Fab")
			(hide yes)
			(effects
				(font
					(size 1.27 1.27)
					(thickness 0.15)
				)
			)
		)
		(attr exclude_from_pos_files exclude_from_bom)
		(fp_circle
			(center 0 0)
			(end 3.2 0)
			(stroke
				(width 0.15)
				(type solid)
			)
			(fill none)
			(layer "Cmts.User")
		)
		(fp_circle
			(center 0 0)
			(end 3.45 0)
			(stroke
				(width 0.05)
				(type solid)
			)
			(fill none)
			(layer "F.CrtYd")
		)
		(fp_text user "\${REFERENCE}"
			(at 0 0 0)
			(layer "F.Fab")
			(effects
				(font
					(size 1 1)
					(thickness 0.15)
				)
			)
		)
		(pad "1" thru_hole circle
			(at -2.4 0)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at -1.697056 -1.697056)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at -1.697056 1.697056)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at 0 -2.4)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at 0 0)
			(size 6.4 6.4)
			(drill 3.2)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
		)
		(pad "1" thru_hole circle
			(at 0 2.4)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at 1.697056 -1.697056)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at 1.697056 1.697056)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
		(pad "1" thru_hole circle
			(at 2.4 0)
			(size 0.8 0.8)
			(drill 0.5)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(zone_connect 2)
		)
	)`
}