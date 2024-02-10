const removeLineStartsWith = (text: string, prefix: string): string => {
  return text.split('\n').filter(s => !s.startsWith(prefix)).join('\n')
}

export {
  removeLineStartsWith,
}
