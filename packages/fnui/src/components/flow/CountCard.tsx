import { Card, Heading, Text } from '@radix-ui/themes'
import styles from './CountCard.css'
import { useGetWorkflow } from '@/lib/state'
import { countTextLength } from '@enuesaa/kakkofnlib'
import { TextInputCard } from './TextInputCard'
import { ArrowDown } from './ArrowDown'

export const CountCard = () => {
  const workflow = useGetWorkflow()
  const len = countTextLength(workflow.input)

  return (
    <>
      <Heading mb='4'>文字数カウント</Heading>
      <TextInputCard />
      <ArrowDown />
      <Card mt='4' className={styles.card}>
      <Text as='div' size='2' weight='bold'>
        文字数カウント
      </Text>
      <Text as='div' color='gray' size='8' mt='3'>
        {len.toString()}
      </Text>
    </Card>
    </>
  )
}
