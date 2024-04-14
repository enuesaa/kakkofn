import { Button, Card, Heading, Text, TextField } from '@radix-ui/themes'
import styles from './ReplaceCard.css'
import { useGetWorkflow, useSetWorkflowOuput } from '@/lib/state'
import { replaceText } from '@enuesaa/kakkofnlib'
import { MouseEventHandler, useRef } from 'react'
import { ArrowDown } from './ArrowDown'
import { TextInputCard } from './TextInputCard'

export const ReplaceCard = () => {
  const workflow = useGetWorkflow()
  const setOutput = useSetWorkflowOuput()
  const fromRef = useRef<HTMLInputElement>(null)
  const toRef = useRef<HTMLInputElement>(null)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (fromRef.current === null || toRef.current === null) {
      return
    }

    const result = replaceText(workflow.input, fromRef.current.value, toRef.current.value)
    setOutput(result)
  }

  return (
    <section style={{ textAlign: 'center' }}>
      <Heading mt='7' m='3'>
        JSONフォーマット
      </Heading>
      <TextInputCard />
      <ArrowDown />
      <Card mt='4' className={styles.card}>
        <Text as='div' size='2' weight='bold'>
          文字列置き換え
        </Text>
        <TextField.Root placeholder='from' mt='2' ref={fromRef} />
        <TextField.Root placeholder='to' mt='2' ref={toRef} />
        <Button onClick={handleClick}>置き換え</Button>
        <Text as='div' color='gray' size='8' mt='3'>
          {workflow.output}
        </Text>
      </Card>
    </section>
  )
}
