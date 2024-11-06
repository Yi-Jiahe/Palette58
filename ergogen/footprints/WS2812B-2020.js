module.exports = {
  params: {
      designator: 'LED',
      side: 'F',
      din: undefined,
      dout: undefined,
      VCC: {type: 'net', value: 'VCC'},
      GND: {type: 'net', value: 'GND'}
  },
  body: p => `
  
      (module WS2812B (layer F.Cu) (tedit 53BEE615)

          ${p.at /* parametric position */}

          ${'' /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

          (fp_line (start -1 -1) (end -1 1) (layer ${p.side}.SilkS) (width 0.15))
          (fp_line (start -1 1) (end 1 1) (layer ${p.side}.SilkS) (width 0.15))
          (fp_line (start 1 1) (end 1 -1) (layer ${p.side}.SilkS) (width 0.15))
          (fp_line (start 1 -1) (end -1 -1) (layer ${p.side}.SilkS) (width 0.15))

          (fp_line (start -0.5 -1) (end -0.5 1) (layer ${p.side}.SilkS) (width 0.15))

          (pad 1 smd rect (at -0.915 -0.550 ${p.r}) (size 0.7 0.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.dout})
          (pad 2 smd rect (at -0.915 0.550 ${p.r}) (size 0.7 0.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND})
          (pad 3 smd rect (at 0.915 0.550 ${p.r}) (size 0.7 0.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.din})
          (pad 4 smd rect (at 0.915 -0.550 ${p.r}) (size 0.7 0.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC})
      )
  
  `
}