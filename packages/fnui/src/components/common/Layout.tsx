import { Box, Flex } from '@radix-ui/themes'
import { Header } from './Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  return (
    <Flex gap='3'>
      <Box width='200px'>
        <Header />
      </Box>
      <Box flexGrow='1' flexShrink='1' pr='3'>
        {children}
      </Box>
    </Flex>
  )
}
