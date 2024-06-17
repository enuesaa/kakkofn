export const searchTextCount = (text: string, search: string): number => {
	if (search === '') {
		return 0
	}
	return text.split(search).length - 1
}
