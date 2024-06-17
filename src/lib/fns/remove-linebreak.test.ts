import { test, expect } from 'vitest'
import { removeLineBreak } from './remove-linebreak'

test('countTextLength() count text length', () => {
	expect(removeLineBreak('あああ\nああ')).toBe('あああああ')
})
