import { Container } from '@radix-ui/themes'
import styles from './Flow.css'
import { TextInputCard } from './TextInputCard'
import { ArrowDown } from './ArrowDown'
import { CountCard } from './CountCard'
import { ReplaceCard } from './ReplaceCard'

type Props = {
  name: string;
}
export const Flow = ({ name }: Props) => {
  return (
    <Container className={styles.container}>
      <TextInputCard />
      <ArrowDown />
      {name === 'count' && (<CountCard />)}
      {name === 'replace' && (<ReplaceCard />)}
    </Container>
  )
}