export const glyphDictionary = [
  {
    number: '1',
    greek: 'Ω',
    egyptian: '𓄸',
    animal: '𓅞',
    color: 'white',
  }, {
    number: '2',
    greek: 'β',
    egyptian: '𓌖',
    animal: '𓆚',
    color: 'green',
  }, {
    number: '3',
    greek: 'Φ',
    egyptian: '𓋬',
    animal: '𓃠',
    color: 'pink',
  }, {
    number: '4',
    greek: 'Δ',
    egyptian: '𓁨',
    animal: '𓅃',
    color: 'blue',
  }, {
    number: '5',
    greek: 'Ψ',
    egyptian: '𓆣',
    animal: '𓃰',
    color: 'purple',
  }, {
    number: '6',
    greek: 'Ϟ',
    egyptian: '𓂀',
    animal: '𓃸',
    color: 'yellow',
  }, {
    number: '7',
    greek: 'λ',
    egyptian: '𓃣',
    animal: '𓃬',
    color: 'orange',
  }, {
    number: '8',
    greek: 'ξ',
    egyptian: '𓍦',
    animal: '𓃲',
    color: 'cyan',
  },
]

export const validGlyph = (val) => {
  return typeof val === 'number' && val >= 0 && val < glyphDictionary.length;
}

export const validSelection = (sel) => {
  return sel.every(n => typeof n === 'number' && validGlyph(n));
}
