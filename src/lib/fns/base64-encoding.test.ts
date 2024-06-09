import { test, expect } from 'vitest'
import { encodeBase64, decodeBase64 } from './base64-encoding'

test('encodeBase64() encodes base64', () => {
  expect(encodeBase64('あああ')).toBe('44GC44GC44GC')
})

test('decodeBase64() decodes base64', () => {
  expect(decodeBase64('44GC44GC44GC')).toBe('あああ')
})
