import { Header } from '@/components/common/Header'
import { Workflow } from '@/components/workflow/Workflow'
import { Container } from '@radix-ui/themes'

export default function Page() {
  return (
    <>
      <Header />
      <Container size='4'>
        <Workflow />
      </Container>
    </>
  )
}
