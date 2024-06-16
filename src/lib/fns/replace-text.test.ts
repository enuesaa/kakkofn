import { test, expect } from 'vitest'
import { replaceText } from './replace-text'

test('replaceText() replace text', () => {
	expect(replaceText('あああ', 'あ', 'か')).toBe('かかか')
})
