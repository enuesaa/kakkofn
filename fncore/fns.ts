const countTextLength = (text: string): number => {
  return text.length 
}

const replaceText = (text: string, from: string, to: string): string => {
  return text.replaceAll(from, to)
}

const removeLineStartsWith = (text: string, prefix: string): string => {
  return text.split('\n').filter(s => !s.startsWith(prefix)).join('\n')
}

export {
  countTextLength,
  replaceText,
  removeLineStartsWith,
}
