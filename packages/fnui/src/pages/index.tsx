import { Layout } from '@/components/common/Layout'
import { BuildWorkflow } from '@/components/top/BuildWorkflow'
import { ShowCase } from '@/components/top/ShowCase'

export default function Page() {
  return (  
    <Layout>
      <ShowCase />
      <BuildWorkflow />
    </Layout>
  )
}
