import { test, expect } from 'vitest'
import { countLines } from './count-lines'

test('normal test case of countLines()', () => {
	expect(countLines('あああ')).toBe(1)
	expect(countLines('あああ\nあああ')).toBe(2)
})
