import { Box, Button, Card, Flex, Heading, Section, TextArea } from '@radix-ui/themes'
import { MouseEventHandler, useRef } from 'react'
import { AddStepArea } from './AddStepArea'
import { Step } from './Step'

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
      <Step>
        <TextArea size='3' style={{minHeight: '350px'}} ref={fromRef} />
      </Step>
      <AddStepArea>
        <Button onClick={handleClick}>改行trim</Button>
      </AddStepArea>
      <Step>
        <TextArea size='3' style={{minHeight: '350px'}} ref={toRef} />
      </Step>
    </Card>
  )
}