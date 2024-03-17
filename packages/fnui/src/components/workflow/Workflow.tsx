import { Card, Heading } from '@radix-ui/themes'
import { ConvertArea } from './ConvertArea'
import { Provider } from 'jotai'
import { StepInput } from './StepInput'

export const Workflow = () => {
  return (
    <Provider>
      <Card size='2' my='3' variant='classic'>
        <Heading mb='4'>ワークフロー</Heading>
        <StepInput />
        <ConvertArea position={0} />
        <ConvertArea position={1} />
      </Card>
    </Provider>
  )
}
