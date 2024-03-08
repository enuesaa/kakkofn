import { Box, Button, Em, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import styles from './Header.css'
import { Link } from './Link'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Link href='/' className={styles.headinglink}>
        <Text size='1' as='div'>テキスト加工ツール</Text>
        <Heading as='h1'>kakkofn</Heading>
      </Link>
      <Separator size='3' />
    </header>
  )
}
