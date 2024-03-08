import { Header } from '@/components/common/Header'
import { Box, Button, Container, Flex, Tabs, TextArea, TextField } from '@radix-ui/themes'
import { MouseEventHandler, useRef } from 'react'

export default function Page() {
  const fromRef = useRef<HTMLTextAreaElement>(null)
  const toRef = useRef<HTMLTextAreaElement>(null)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (fromRef.current === null || toRef.current === null) {
      return
    }

    toRef.current.value = fromRef.current.value.replaceAll('\n', '')
  }

  return (
    <>
      <Header />
      <Container size='4'>
        <Flex gap='5' style={{ width: '100%' }}>
          <Box grow='1' shrink='1' style={{ width: '49%' }}>
            <TextArea size='3' style={{minHeight: '350px'}} ref={fromRef} />
          </Box>
          <Box grow='1' shrink='1' style={{ width: '49%' }}>
            <Flex gap='2'>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>文字数</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}></Box>
            </Flex>
          </Box>
        </Flex>
        bind json
  
        <Button onClick={handleClick}>改行trim</Button>
        <TextArea placeholder='改行なし' mt='2' style={{height: '300px'}} ref={toRef} />
      </Container>
    </>
  )
}
