export const repeatText = (text: string, count: number): string => {
	return new Array(count).fill(text).join('')
}
