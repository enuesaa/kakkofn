/**
 * @see https://jsprimer.net/basic/string-unicode/
 */
export const escapeUnicode = (text: string): string => {
  let ret = ''
  for (let t of Array.from(text)) {
    for (let i = 0; i < t.length; i++) {
      ret += `\\u${t.charCodeAt(i).toString(16)}`
    }
  }
  return ret
}

export const unescapeUnicode = (text: string): string => {
  if (text === '') {
    return ''
  }

  const codeunits = text.split('\\u')
  // empty string or string which does not startswith `\u`
  codeunits.shift()
  const charcodes = codeunits.map((v) => parseInt(v, 16))

  return String.fromCharCode(...charcodes)
}
