import { Select } from '@radix-ui/themes'

type Props = {
  value: string
}
export const ConvertSelector = ({ value }: Props) => {
  return (
    <Select.Root defaultValue={value}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value='trimln'>改行trim</Select.Item>
        <Select.Item value='replaceab'>置き換え</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
