import { Box, Button, Em, Flex, Separator, Text } from '@radix-ui/themes'
import styles from './Header.css'
import { Link } from './Link'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Text size='1' as='div'>テキスト加工ツール</Text>
      <Link href='/' className={styles.heading}>kakkofn</Link>
      <Separator size='3' />
    </header>
  )
}
