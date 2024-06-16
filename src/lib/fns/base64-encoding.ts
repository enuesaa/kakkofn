import { Buffer } from 'buffer'

export const encodeBase64 = (text: string): string => {
	return Buffer.from(text).toString('base64')
}

export const decodeBase64 = (text: string): string => {
	return Buffer.from(text, 'base64').toString()
}
