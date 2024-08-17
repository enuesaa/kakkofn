import { test, expect } from 'vitest'
import { repeatText } from './repeat-text'

test('normal test case of repeatText()', () => {
	expect(repeatText('あ', 10)).toBe('ああああああああああ')
})
