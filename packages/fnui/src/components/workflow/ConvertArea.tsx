import { useGetWorkflowStep } from '@/lib/workflow'
import { Box, Button, Flex } from '@radix-ui/themes'
import { MouseEventHandler } from 'react'
import { FaArrowDown } from 'react-icons/fa'

type Props = {
  position: number
}
export const ConvertArea = ({ position }: Props) => {
  const step = useGetWorkflowStep(position)

  if (step === undefined) {
    return (<></>)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
  }

  return (
    <Box mt='3' style={{ fontSize: '25px' }}>
      <Flex>
        <Box grow='0' shrink='0' style={{width: '100px', textAlign: 'center'}}>
          <FaArrowDown />
        </Box>
        <Box grow='1' shrink='1'>
          <Button onClick={handleClick}>{step.convert.name}</Button>
        </Box>
      </Flex>
    </Box>
  )
}
