import { Header } from '@/components/common/Header'
import { Container } from '@radix-ui/themes'
import { useParams } from 'react-router-dom'
import { Flow } from '@/components/flow/Flow'

export default function Page() {
  const { name } = useParams()

  if (name === undefined) {
    return <></>
  }

  return (
    <>
      <Header />
      <Container>
        <Flow name={name} />
      </Container>
    </>
  )
}
