import { Header } from '@/components/common/Header'
import { Container } from '@radix-ui/themes'
import { useParams } from 'react-router-dom'
import { CountCard } from '@/components/flow/CountCard'
import { ReplaceCard } from '@/components/flow/ReplaceCard'
import { JsonFormatCard } from '@/components/flow/JsonFormatCard'

export default function Page() {
  const { name } = useParams()

  if (name === undefined) {
    return <></>
  }

  return (
    <>
      <Header />
      <Container style={{textAlign: 'center'}}>
        {name === 'count' && <CountCard />}
        {name === 'replace' && <ReplaceCard />}
        {name === 'jsonformat' && <JsonFormatCard />}
      </Container>
    </>
  )
}