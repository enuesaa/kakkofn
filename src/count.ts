
type CountParam = {
  text: string
}
type CountResult = {
  length: number
}
const countTextLength = (text: string): number => {
  return text.length
}

export { countTextLength }
