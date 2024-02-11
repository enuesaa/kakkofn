import { Text } from './datatype'

export const replaceText = (text: Text, from: Text, to: Text): Text => {
  return text.replaceAll(from, to)
}
