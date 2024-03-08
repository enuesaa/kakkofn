import { Box, Button, Card, Flex, Heading, Section, TextArea } from '@radix-ui/themes'
import styles from './Workflow.css'
import { MouseEventHandler, useRef } from 'react'
import { TextCountCard } from './TextCountCard'

export const Workflow = () => {
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
    <Card size='2' my='3' variant='classic'>
      <Heading mb='4'>ワークフロー</Heading>
      <Flex gap='5' style={{ width: '100%' }}>
        <Box grow='1' shrink='1'>
          <TextArea size='3' style={{minHeight: '350px'}} ref={fromRef} />
        </Box>
        <Box grow='0' shrink='0' style={{width:'200px'}}>
          <TextCountCard />
          <TextCountCard />
        </Box>
      </Flex>  
      <Button onClick={handleClick}>改行trim</Button>
      <TextArea placeholder='改行なし' mt='2' style={{height: '300px'}} ref={toRef} />
    </Card>
  )
}