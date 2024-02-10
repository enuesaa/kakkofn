const removeLineStartsWith = (text: string, prefix: string): string => {
  return text
    .split('\n')
    .filter((s) => !s.startsWith(prefix))
    .join('\n')
}

const removeLineEndsWith = (text: string, suffix: string): string => {
  return text
    .split('\n')
    .filter((s) => !s.endsWith(suffix))
    .join('\n')
}

export { removeLineStartsWith, removeLineEndsWith }
