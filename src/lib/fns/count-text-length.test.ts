import { test, expect } from 'vitest'
import { countTextLength } from './count-text-length'

test('countTextLength() count text length', () => {
  expect(countTextLength('あああ')).toBe(3)
  expect(countTextLength('🍎')).toBe(1)
})
