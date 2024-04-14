import { Card } from '@radix-ui/themes'
import styles from './ShowCaseCard.css'

type Props = {
  title: string
}
export const ShowCaseCard = ({ title }: Props) => {
  return <Card className={styles.main}>{title}</Card>
}
