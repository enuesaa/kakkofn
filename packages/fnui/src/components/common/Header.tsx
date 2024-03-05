import { Box, Button, Container, Flex, Separator } from '@radix-ui/themes'
import styles from './Header.css'
import { Link } from './Link'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Flex style={{width: '100%'}}>
        <Box style={{width: '200px'}}>
          <Link href='/' className={styles.heading}>kakkofn</Link>
        </Box>
        <Box grow='1' shrink='1'>テキスト加工ツール</Box>
        <Box style={{width: '100px'}}>
          <Button>edit</Button>
        </Box>
      </Flex>
      <Separator size='3' />
    </header>
  )
}
