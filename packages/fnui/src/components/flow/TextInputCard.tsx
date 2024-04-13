import { Box, Card, Flex, Text, TextArea } from '@radix-ui/themes'
import styles from './TextInputCard.css'
import { useSetWorkflowInput } from '@/lib/state'
import { KeyboardEventHandler } from 'react'

export const TextInputCard = () => {
  const setWorkflowInput = useSetWorkflowInput()

  const handleInput: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    setWorkflowInput(e.currentTarget.value)
  }

  return (
    <Card mt='4' className={styles.textInputCard}>
      <Text as='div' size='2' weight='bold' mb='3'>
        入力
      </Text>
      <TextArea className={styles.textarea} onKeyUp={handleInput} />
    </Card>
  )
}
