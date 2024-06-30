export const jsonFormat = (text: string): string => {
	try {
		return JSON.stringify(JSON.parse(text), null, '  ')
	} catch (e) {}

	return ''
}
