import { useGetWorkflowStep, useGetWorkflowStepInput, useSetWorkflowStepOutput } from '@/lib/workflow'
import { Box, Button, Flex } from '@radix-ui/themes'
import { MouseEventHandler } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { StepConvert } from './StepConvert'
import { removeln, replace } from '@/lib/convert'

type Props = {
  position: number
}
export const ConvertArea = ({ position }: Props) => {
  const step = useGetWorkflowStep(position)
  const setOutput = useSetWorkflowStepOutput(position)
  const input = useGetWorkflowStepInput(position)

  if (step === undefined) {
    return (<></>)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    //TODO
    if (position > 0) {
      setOutput(replace(input, 'a', 'b'))
    } else {
      setOutput(removeln(input))
    }
  }

  return (
    <>
      <Box mt='3' style={{ fontSize: '25px' }}>
        <Flex>
          <Box width='100px' style={{textAlign: 'center'}}>
            <FaArrowDown />
          </Box>
          <Box flexGrow='1' flexShrink='1'>
            <Button onClick={handleClick}>{step.convert.name}</Button>
          </Box>
        </Flex>
      </Box>
      <StepConvert position={position} />
    </>
  )
}
