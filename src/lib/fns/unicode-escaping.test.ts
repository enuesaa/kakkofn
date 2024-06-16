import { test, expect } from 'vitest'
import { escapeUnicode, unescapeUnicode } from './unicode-escaping'

test('escapeUnicode() escape human-readable string to unicode', () => {
	expect(escapeUnicode('あああ')).toBe('\\u3042\\u3042\\u3042')
})

test('unescapeUnicode() unescape unicode to human-readable string', () => {
	expect(unescapeUnicode('\\u3042\\u3042\\u3042')).toBe('あああ')
})
