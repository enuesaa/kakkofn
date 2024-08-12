import { test, expect } from 'vitest'
import { replaceText } from './replace-text'

test('normal test case of replaceText()', () => {
	expect(replaceText('あああ', 'あ', 'か')).toBe('かかか')
})
