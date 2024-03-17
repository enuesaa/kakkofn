import { Card, Heading } from '@radix-ui/themes'
import { AddStepArea } from './AddStepArea'
import { Step } from './Step'
import { Provider } from 'jotai'

export const Workflow = () => {
  return (
    <Provider>
      <Card size='2' my='3' variant='classic'>
        <Heading mb='4'>ワークフロー</Heading>
        <Step />
        <AddStepArea />
      </Card>
    </Provider>
  )
}
