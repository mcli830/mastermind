export const glyphDictionary = [
  {
    char: 'Ω',
    color: 'white',
    name: 'omega',
    origin: 'greek',
    href: 'https://en.wikipedia.org/wiki/Omega',
  }, {
    char: 'β',
    color: 'green',
    name: 'beta',
    origin: 'greek',
    href: 'https://en.wikipedia.org/wiki/Beta',
  }, {
    char: 'Ϩ',
    color: 'red',
    name: 'hori',
    origin: 'coptic',
    href: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
  }, {
    char: 'Ϫ',
    color: 'blue',
    name: 'gangia',
    origin: 'coptic',
    href: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
  }, {
    char: 'Ψ',
    color: 'purple',
    name: 'psi',
    origin: 'greek',
    href: 'https://en.wikipedia.org/wiki/Psi_(Greek)',
  }, {
    char: 'Ϟ',
    color: 'yellow',
    name: 'koppa',
    origin: 'greek',
    href: 'https://en.wikipedia.org/wiki/Koppa_(letter)',
  }, {
    char: 'λ',
    color: 'orange',
    name: 'lambda',
    origin: 'greek',
    href: 'https://en.wikipedia.org/wiki/Lambda',
  }, {
    char: 'ξ',
    color: 'cyan',
    name: 'xi',
    origin: 'greek',
    href: 'https://en.wiktionary.org/wiki/%CE%BE%CE%B9#Greek',
  },
]

export const validGlyph = (val) => {
  return typeof val === 'number' && val >= 0 && val < glyphDictionary.length;
}

export const validSelection = (sel) => {
  return sel.every(n => typeof n === 'number' && validGlyph(n));
}
