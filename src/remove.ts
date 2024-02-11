
// dry run

type RemoveLineStartsWithParam = {
  text: string
  prefix: string // search str
}
type RemoveLineStartsWithParamResult = {
  text: string
}
const removeLineStartsWith = (text: string, prefix: string): string => {
  // We can split logics of this function, of course, 
  // but we do not want those because it requires us to build logics by your self.
  // logic:
  // - split line
  // - filter matched
  // - join line
  return text
    .split('\n')
    .filter((s) => !s.startsWith(prefix))
    .join('\n')
}


type RemoveLineEndsWithParam = {
  text: string
  suffix: string // search str
}
type RemoveLineEndsWithResult = {
  text: string
}
const removeLineEndsWith = (text: string, suffix: string): string => {
  return text
    .split('\n')
    .filter((s) => !s.endsWith(suffix))
    .join('\n')
}

export { removeLineStartsWith, removeLineEndsWith }
