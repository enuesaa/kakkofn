type ReplaceTextParam = {
  text: string
  from: string // search str
  to: string // search str
}
type ReplaceTextResult = {
  text: string
}

const replaceText = (text: string, from: string, to: string): string => {
  return text.replaceAll(from, to)
}

export { replaceText }
