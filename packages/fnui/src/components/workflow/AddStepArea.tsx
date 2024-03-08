import { Box, Flex } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { FaArrowDown } from 'react-icons/fa'

type Props = {
  children: ReactNode,
}
export const AddStepArea = ({ children }: Props) => {
  return (
    <Box mt='3' style={{ fontSize: '25px' }}>
      <Flex>
        <Box grow='0' shrink='0' style={{width: '100px', textAlign: 'center'}}>
          <FaArrowDown />
        </Box>
        <Box grow='1' shrink='1'>
          {children}
        </Box>
      </Flex>
    </Box>
  )
}
