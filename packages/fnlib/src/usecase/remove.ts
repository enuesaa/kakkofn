import { filterTextsWithPrefix, joinln, splitln } from '@/text/split'

// this is poc code. we can construct this logic on gui
const removeLineStartsWith = (text: string, prefix: string): string => {
  return joinln(filterTextsWithPrefix(splitln(text), prefix))
}

export { removeLineStartsWith }
