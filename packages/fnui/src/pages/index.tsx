import { Header } from '@/components/common/Header'
import { Box, Container, Tabs, TextArea } from '@radix-ui/themes'

export default function Page() {
  return (
    <>
      <Header />
      <Container>
        <Tabs.Root defaultValue='nothing'>
          <Tabs.List>
            <Tabs.Trigger value='nothing'>free format</Tabs.Trigger>
            <Tabs.Trigger value='json'>JSON</Tabs.Trigger>
            <Tabs.Trigger value='yaml'>YAML</Tabs.Trigger>
            <Tabs.Trigger value='csv'>CSV</Tabs.Trigger>
          </Tabs.List>

          <Box px='4' pt='3' pb='2'>
            <Tabs.Content value='nothing'>
              <TextArea size='3' />
            </Tabs.Content>
            <Tabs.Content value='json'>
              <TextArea size='3' />
            </Tabs.Content>
            <Tabs.Content value='yaml'>
              <TextArea size='3' />
            </Tabs.Content>
            <Tabs.Content value='csv'>
              <TextArea size='3' />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </>
  )
}
