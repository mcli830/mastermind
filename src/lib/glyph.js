export const glyphDictionary = [
  {
    char: 'Ω', // omega
    color: 'white',
  }, {
    char: 'β', // beta
    color: 'green',
  }, {
    char: 'Ϩ', // coptic hori
    color: 'red',
  }, {
    char: 'Ϫ', // coptic gangia
    color: 'blue',
  }, {
    char: 'Ψ', // psi
    color: 'purple',
  }, {
    char: 'Ϟ', // koppa
    color: 'yellow',
  }, {
    char: 'λ', // lambda
    color: 'orange',
  }, {
    char: 'ξ', // xi
    color: 'cyan',
  },
]

export const validGlyph = (val) => {
  return typeof val === 'number' && val >= 0 && val < glyphDictionary.length;
}

export const validSelection = (sel) => {
  return sel.every(n => typeof n === 'number' && validGlyph(n));
}
