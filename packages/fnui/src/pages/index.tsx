import { Layout } from '@/components/common/Layout'
import { Link } from '@/components/common/Link'
import { BuildWorkflow } from '@/components/top/BuildWorkflow'
import { ShowCase } from '@/components/top/ShowCase'
import { Box } from '@radix-ui/themes'

export default function Page() {
  return (
    <Layout>
      {/* <ShowCase /> */}
      {/* <BuildWorkflow /> */}
      <Link href='/fns/replace'>
        <Box>文字列置き換え</Box>
      </Link>
      <Link href='/fns/count'>
        <Box>文字数カウント</Box>
      </Link>
      <Link href='/fns/jsonformat'>
        <Box>JSONフォーマット</Box>
      </Link>
    </Layout>
  )
}
