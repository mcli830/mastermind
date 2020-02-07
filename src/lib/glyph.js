export const glyphDictionary = [
  'Ω', // omega
  'β', // beta
  'Ϩ', // coptic hori
  'Ϫ', // coptic gangia
  'Ψ', // psi
  'Ϟ', // koppa
  'λ', // lambda
  'ξ', // xi
]

export const validGlyph = (val) => {
  return typeof val === 'number' && val >= 0 && val < glyphDictionary.length;
}

export const validSelection = (sel) => {
  return sel.every(n => typeof n === 'number' && validGlyph(n));
}
