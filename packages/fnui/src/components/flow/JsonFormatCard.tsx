import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import styles from './JsonFormatCard.css'
import { useGetWorkflow } from '@/lib/state'
import { CopyButton } from '../common/CopyButton'
import { TextInputCard } from './TextInputCard'
import { ArrowDown } from './ArrowDown'
import { FaArrowRight } from 'react-icons/fa'

const format = (text: string): string => {
  try {
    const parsed = JSON.parse(text)
    const result = JSON.stringify(parsed, null, 2)
    console.log(result)
    return result
  } catch (e) {}

  return ''
}

export const JsonFormatCard = () => {
  const workflow = useGetWorkflow()
  const text = format(workflow.input)

  return (
    <section style={{textAlign: 'center', maxWidth: '1300px'}}>
      <Heading mt='6' m='5'>JSONフォーマット</Heading>
      <Flex>
        <Box flexGrow='1' flexShrink='1'>
          <TextInputCard />
        </Box>
        <Box style={{lineHeight: '200px'}}>
          <FaArrowRight />
        </Box>
        <Box flexGrow='1' flexShrink='1'>
          <Card mt='4' className={styles.card}>
            <Text as='div' size='2' weight='bold' mb='3'>
              JSONフォーマット
            </Text>
            <div style={{position:'absolute', right: '10px', top: '10px'}}>
              <CopyButton text={text} />
            </div>
            <Text as='div' color='gray' size='5' mt='3' style={{padding:'0 10px'}}>
              <pre>
                {text}
              </pre>
            </Text>
          </Card>
        </Box>
      </Flex>     
    </section>
  )
}
