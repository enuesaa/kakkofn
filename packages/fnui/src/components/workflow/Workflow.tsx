import { Box, Button, Card, Flex, Heading, Section, TextArea } from '@radix-ui/themes'
import { MouseEventHandler, useRef } from 'react'
import { AddStepArea } from './AddStepArea'
import { Step } from './Step'

type FlowUIOptionTextConfig = {
  default: string
  multiline: boolean // default false
}
type FlowUIOptionSelectConfig = {
  default: string
  selection: string[]
}

type FlowUITextOption = {
  type: 'text';
  config: FlowUIOptionTextConfig;
};
type FlowUISelectOption = {
  type: 'select';
  config: FlowUIOptionSelectConfig;
};

type FlowUIOption = {
  name: string;
} & (FlowUITextOption|FlowUISelectOption)

type FlowUIStep = {
  input: 'text'
  options: FlowUIOption
}
type FlowUI = {
  name: string        // display name. allow duplicate
  identifier: string  // id. use this in url.
  steps: FlowUIStep[]
}

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
    </Card>
  )
}