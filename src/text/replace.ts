import { Text } from '@/type'

export const replaceText = (text: Text, from: Text, to: Text): Text => {
  return text.replaceAll(from, to)
}
