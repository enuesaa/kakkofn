import { Header } from '@/components/common/Header'
import { Box, Container, Flex, Tabs, TextArea } from '@radix-ui/themes'

export default function Page() {
  return (
    <>
      <Header />
      <Container size='4'>
        {/* show control menu left size on edit mode */}
        <Flex gap='5' style={{ width: '100%' }}>
          <Box grow='1' shrink='1' style={{ width: '49%' }}>
            <TextArea size='3' style={{minHeight: '350px'}} />
          </Box>
          <Box grow='1' shrink='1' style={{ width: '49%' }}>
            <Flex gap='2'>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>文字数</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}>a</Box>
              <Box grow='1' shrink='1' style={{width: '100px', height: '100px'}}></Box>
            </Flex>
          </Box>
        </Flex>
        bind json
      </Container>
    </>
  )
}
