// TODO: 画面で Array をどう表現するか
export const splitText = (text: string, sep: string): string => {
  return text.split(sep).filter(v => v != '').join('\n')
}
