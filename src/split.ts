type KakkoText = string
type KakkoTexts = string[]

const splitln = ({ text }: { text: KakkoText }): KakkoTexts => {
  return text.split('\n')
}

const joinln = ({ texts }: { texts: KakkoTexts }): KakkoText => {
  return texts.join('\n')
}

const filterTextsWithPrefix = ({ texts, prefix }: { texts: KakkoTexts, prefix: KakkoText }): KakkoTexts => {
  return texts.filter((s) => !s.startsWith(prefix))
}


// this is poc code. we can construct this logic on gui
const removeLineStartsWith = ({ text, prefix }: { text: KakkoText, prefix: KakkoText }): KakkoText => {
  return joinln({ texts: filterTextsWithPrefix({texts: splitln({text}), prefix}) })
}
