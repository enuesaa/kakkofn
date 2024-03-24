import { Box, Flex, TextArea } from '@radix-ui/themes'
import { TextCountCard } from './TextCountCard'
import { AddCardButton } from './AddCardButton'
import { useGetWorkflowStep } from '@/lib/workflow'

type Props = {
  position: number
}
export const StepConvert = ({ position }: Props) => {
  const step = useGetWorkflowStep(position)
  if (step === undefined) {
    return (<></>)
  }
  const text = step.output ?? ''

  return (
    <Flex gap='5' style={{ width: '100%' }}>
      <Box flexGrow='1' flexShrink='1'>
        <TextArea size='3' style={{minHeight: '350px'}} defaultValue={text} />
      </Box>
      <Box width='200px'>
        <TextCountCard />
        <TextCountCard />
        <AddCardButton />
      </Box>
    </Flex>
  )
}
