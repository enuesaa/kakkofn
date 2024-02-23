import { Container, Separator } from '@radix-ui/themes'
import styles from './Header.css'
import { Link } from './Link'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Container size='4' pt='1' pr='5' pb='2'>
        <Link href='/' className={styles.heading}>
          (fn)
        </Link>
      </Container>
      <Separator size='4' />
    </header>
  )
}
