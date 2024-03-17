export const replace = (text: string, from: string, to: string) => {
  return text.replaceAll(from, to)
}

export const removeln = (text: string) => {
  return text.replaceAll('\n', '')
}
