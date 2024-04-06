import { Container, Heading } from '@radix-ui/themes'
import styles from './Flow.css'
import { TextInputCard } from './TextInputCard'
import { ArrowDown } from './ArrowDown'
import { CountCard } from './CountCard'
import { ReplaceCard } from './ReplaceCard'
import { JsonFormatCard } from './JsonFormatCard'

type Props = {
  name: string
}
export const Flow = ({ name }: Props) => {
  return (
    <Container className={styles.container}>
      {name === 'count' && <Heading mb='4'>文字数カウント</Heading>}
      {name === 'replace' && <Heading mb='4'>文字列置き換え</Heading>}
      {name === 'jsonformat' && <Heading mb='4'>JSONフォーマット</Heading>}
      <TextInputCard />
      <ArrowDown />
      {name === 'count' && <CountCard />}
      {name === 'replace' && <ReplaceCard />}
      {name === 'jsonformat' && <JsonFormatCard />}
    </Container>
  )
}
