import { Text, Texts } from '@/type'

export const splitln = (text: Text): Texts => {
  return text.split('\n')
}

export const joinln = (texts: Texts): Text => {
  return texts.join('\n')
}

export const filterTextsWithPrefix = (texts: Texts, prefix: Text): Texts => {
  return texts.filter((s) => !s.startsWith(prefix))
}
