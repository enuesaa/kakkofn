import { useParams } from 'react-router-dom'
import { CountCard } from '@/components/flow/CountCard'
import { ReplaceCard } from '@/components/flow/ReplaceCard'
import { JsonFormatCard } from '@/components/flow/JsonFormatCard'
import { Layout } from '@/components/common/Layout'

export default function Page() {
  const { name } = useParams()

  if (name === undefined) {
    return <></>
  }

  return (
    <Layout>
      {name === 'count' && <CountCard />}
      {name === 'replace' && <ReplaceCard />}
      {name === 'jsonformat' && <JsonFormatCard />}
    </Layout>
  )
}
