import { test, expect } from 'vitest'
import { splitText } from './split-text'

test('normal test case of splitText()', () => {
	expect(splitText('a,b,c', ',')).toBe('a\nb\nc')
	expect(splitText('eabc', 'a')).toBe('e\nbc')
	expect(splitText('eaabc', 'a')).toBe('e\nbc')
})
