import { Flex, Heading } from '@radix-ui/themes'
import { ShowCaseCard } from './ShowCaseCard'

export const ShowCase = () => {
  return (
    <>
      <Heading style={{margin: '10px 0'}}>ショーケース</Heading>
      <Flex wrap='wrap' gap='5'>
        <ShowCaseCard title='文字数カウント' />
        <ShowCaseCard title='空白削除' />
        <ShowCaseCard title='改行削除' />
        <ShowCaseCard title='Base64 Decode' />
        <ShowCaseCard title='Base64 Encode' />
      </Flex>
    </>
  )
}
