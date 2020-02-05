export const glyphDictionary = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
]

export const validGlyph = (val) => {
  return typeof val === 'number' && val >= 0 && val < glyphDictionary.length;
}
