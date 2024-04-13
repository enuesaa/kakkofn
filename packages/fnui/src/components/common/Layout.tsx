import { Box, Flex } from '@radix-ui/themes'
import { Header } from './Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  return (
    <Flex gap='3'>
      <Box width='120px'>
        <Header />
      </Box>
      <Box flexGrow='1' flexShrink='1' pr='2'>
        {children}
      </Box>
    </Flex>
  )
}
