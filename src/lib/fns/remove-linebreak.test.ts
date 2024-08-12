import { test, expect } from 'vitest'
import { removeLineBreak } from './remove-linebreak'

test('removeLineBreak() joins all lines', () => {
	expect(removeLineBreak('あああ\nああ')).toBe('あああああ')
})
