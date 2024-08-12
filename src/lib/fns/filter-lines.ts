export const filterLines = (text: string, searching: string): string => {
  const lines = text.split('\n')
  const filtered = lines.filter(l => l.includes(searching))

  return filtered.join('\n')
}
