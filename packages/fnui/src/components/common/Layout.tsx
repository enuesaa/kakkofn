import { Box, Flex } from '@radix-ui/themes'
import { Header } from './Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  return (
    <Flex gap='3'>
      <Box grow='0' shrink='0' p='1' style={{width: '200px'}}>
        <Header />
      </Box>
      <Box grow='1' shrink='1' pr='3'>
        {children}
      </Box>
    </Flex>
  )
}
