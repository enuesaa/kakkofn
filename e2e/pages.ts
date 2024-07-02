export const realBaseUrl = 'https://kakkofn.dev'
export const localBaseUrl = 'http://localhost:3000'

type Page = {
	name: string
	path: string
}

export const pages: Page[] = [
	{ name: 'top', path: '/' },
	{ name: 'jsonformat', path: '/fns/jsonformat' },
	{ name: 'count', path: '/fns/count' },
	{ name: 'replace', path: '/fns/replace' },
]
