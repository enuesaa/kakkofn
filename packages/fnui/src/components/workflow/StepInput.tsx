import { Box, Flex, TextArea } from '@radix-ui/themes'
import { TextCountCard } from './TextCountCard'
import { AddCardButton } from './AddCardButton'
import { useSetWorkflowInput } from '@/lib/workflow'
import { ChangeEventHandler } from 'react'

export const StepInput = () => {
  const setInputText = useSetWorkflowInput()

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }

  return (
    <Flex gap='5' style={{ width: '100%' }}>
      <Box flexGrow='1' flexShrink='1'>
        <TextArea size='3' style={{minHeight: '350px'}} onChange={handleChange} />
      </Box>
      <Box width='200px'>
        <TextCountCard />
        <TextCountCard />
        <AddCardButton />
      </Box>
    </Flex>
  )
}
