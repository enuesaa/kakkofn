import { Box, Flex, TextArea } from '@radix-ui/themes'
import { TextCountCard } from './TextCountCard'
import { AddCardButton } from './AddCardButton'

export const Step = () => {
  return (
    <Flex gap='5' style={{ width: '100%' }}>
      <Box grow='1' shrink='1'>
        <TextArea size='3' style={{minHeight: '350px'}} />
      </Box>
      <Box grow='0' shrink='0' style={{width:'200px'}}>
        <TextCountCard />
        <TextCountCard />
        <AddCardButton />
      </Box>
    </Flex>
  )
}
