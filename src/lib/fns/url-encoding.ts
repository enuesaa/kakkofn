export const encodeUrl = (text: string): string => {
	return encodeURIComponent(text)
}

export const decodeUrl = (text: string): string => {
	return decodeURIComponent(text)
}
