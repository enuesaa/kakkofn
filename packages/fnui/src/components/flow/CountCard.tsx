import { Card, Text } from '@radix-ui/themes'
import styles from './CountCard.css'
import { useGetWorkflow } from '@/lib/state'
import { countTextLength } from '@enuesaa/kakkofnlib'

export const CountCard = () => {
  const workflow = useGetWorkflow()
  const len = countTextLength(workflow.input)

  return (
    <Card mt='4' className={styles.card}>
      <Text as='div' size='2' weight='bold'>
        文字数カウント
      </Text>
      <Text as='div' color='gray' size='8' mt='3'>
        {len.toString()}
      </Text>
    </Card>
  )
}
