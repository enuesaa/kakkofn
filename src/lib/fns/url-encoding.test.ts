import { test, expect } from 'vitest'
import { encodeUrl, decodeUrl } from './url-encoding'

test('encodeUrl() encodes url by percent', () => {
	expect(encodeUrl('あああ')).toBe('%E3%81%82%E3%81%82%E3%81%82')
})

test('decodeUrl() decodes url', () => {
	expect(decodeUrl('%E3%81%82%E3%81%82%E3%81%82')).toBe('あああ')
})
