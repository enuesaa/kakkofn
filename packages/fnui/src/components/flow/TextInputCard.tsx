import { Box, Card, Flex, TextArea } from '@radix-ui/themes'
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
      <Flex gap='2'>
        <Box grow='0' shrink='0' mt='4' className={styles.textInputCardLabel}>
          入力
        </Box>
        <Box grow='1' shrink='0'>
          <TextArea className={styles.textarea} onKeyUp={handleInput} />
        </Box>
      </Flex>
    </Card>
  )
}
