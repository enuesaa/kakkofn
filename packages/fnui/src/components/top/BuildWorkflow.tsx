import { Button, Heading, Section } from '@radix-ui/themes'
import { Link } from '../common/Link'

export const BuildWorkflow = () => {
  return (
    <Section>
      <Heading style={{ margin: '10px 0' }}>Workflow Builder</Heading>
      <Link href='/workflow' asChild>
        <Button style={{ cursor: 'pointer' }}>Build Workflow</Button>
      </Link>
    </Section>
  )
}
