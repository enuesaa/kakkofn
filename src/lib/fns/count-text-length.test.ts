import { test, expect } from 'vitest'
import { countTextLength } from './count-text-length'

test('normal test case of countTextLength()', () => {
	expect(countTextLength('あああ')).toBe(3)
	expect(countTextLength('🍎')).toBe(1)
})
