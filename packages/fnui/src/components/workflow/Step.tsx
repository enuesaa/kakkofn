import { Box, Flex, TextArea } from '@radix-ui/themes'
import { TextCountCard } from './TextCountCard'
import { AddCardButton } from './AddCardButton'
import { ReactNode, RefObject } from 'react'

type Props = {
  children: ReactNode
}
export const Step = ({ children }: Props) => {
  return (
    <Flex gap='5' style={{ width: '100%' }}>
      <Box grow='1' shrink='1'>
        {children}
      </Box>
      <Box grow='0' shrink='0' style={{width:'200px'}}>
        <TextCountCard />
        <TextCountCard />
        <AddCardButton />
      </Box>
    </Flex>
  )
}
