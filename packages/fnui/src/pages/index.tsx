import { Layout } from '@/components/common/Layout'
import { Link } from '@/components/common/Link'
import { ShowCase } from '@/components/top/ShowCase'

export default function Page() {
  return (  
    <Layout>
      <ShowCase />
      <Link href={'/workflow'}>workflow builder</Link>
    </Layout>
  )
}
