import { Container, Separator } from '@radix-ui/themes'
import styles from './Header.css'
import { Link } from './Link'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Link href='/' className={styles.heading}>
        kakkofn
      </Link>
      <Separator size='3' />
    </header>
  )
}
