import { Header } from '@/components/common/Header'
import { Box, Container } from '@radix-ui/themes'
import { Link } from '@/components/common/Link'

export default function Page() {
  return (
    <>
      <Header />
      <Container>
        <Box m='2'>
          <Link href='/fns/count'>文字数カウント</Link>
        </Box>
        <Box m='2'>
          <Link href='/fns/replace'>文字列置き換え</Link>
        </Box>
      </Container>
    </>
  )
}
