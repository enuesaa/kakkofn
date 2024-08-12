import { test, expect } from 'vitest'
import { encodeBase64, decodeBase64 } from './base64-encoding'

test('normal test case of encodeBase64()', () => {
	expect(encodeBase64('あああ')).toBe('44GC44GC44GC')
})

test('normal test case of decodeBase64()', () => {
	expect(decodeBase64('44GC44GC44GC')).toBe('あああ')
})
