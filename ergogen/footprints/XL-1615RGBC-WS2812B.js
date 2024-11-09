module.exports = {
    params: {
        designator: 'LED',
        side: 'F',
        din: undefined,
        dout: undefined,
        VCC: { type: 'net', value: 'VCC' },
        GND: { type: 'net', value: 'GND' }
    },
    body: p => {
        const pad_width_mm = 0.80;
        const pad_height_mm = 0.65
        const pad_x_mm = 0.70;
        const pad_y_mm = 0.425;
        const led_width_mm = 1.60;
        const led_height_mm = 1.50;

        return `
  
    (module WS2812B (layer F.Cu) (tedit 53BEE615)

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (property "Reference" "${p.ref}"
            (at 0 0) 
            (layer F.SilkS) 
            ${p.ref_hide} 
            (effects 
                (font 
                    (size 1.27 1.27) 
                    (thickness 0.15)
                )
            )
        )
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_line (start -${led_width_mm / 2} -${led_height_mm / 2}) (end -${led_width_mm / 2} ${led_height_mm / 2}) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -${led_width_mm / 2} ${led_height_mm / 2}) (end ${led_width_mm / 2} ${led_height_mm / 2}) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start ${led_width_mm / 2} ${led_height_mm / 2}) (end ${led_width_mm / 2} -${led_height_mm / 2}) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start ${led_width_mm / 2} -${led_height_mm / 2}) (end -${led_width_mm / 2} -${led_height_mm / 2}) (layer ${p.side}.SilkS) (width 0.15))

        ${'' /* direction indicator */}
        (fp_line (start -0.5 -1) (end -0.5 1) (layer ${p.side}.SilkS) (width 0.15))

        (pad 1 smd rect (at -${pad_x_mm} -${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.dout})
        (pad 2 smd rect (at -${pad_x_mm} ${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND})
        (pad 3 smd rect (at ${pad_x_mm} ${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.din})
        (pad 4 smd rect (at ${pad_x_mm} -${pad_y_mm} ${p.r}) (size ${pad_width_mm} ${pad_height_mm}) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC})
    )
  
  `
    }
}