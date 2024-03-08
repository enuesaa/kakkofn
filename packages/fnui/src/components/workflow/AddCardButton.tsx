import { Card } from '@radix-ui/themes'
import { FaPlus } from 'react-icons/fa'

export const AddCardButton = () => {
  return (
    <Card mt='0' mb='3' variant='classic' style={{textAlign: 'center'}}>
      <FaPlus />
    </Card>
  )
}
