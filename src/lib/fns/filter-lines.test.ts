import { test, expect } from 'vitest'
import { filterLines } from './filter-lines'

test('normal test case of filterLines()', () => {
	expect(filterLines('a\naaa\nbbb', 'a')).toBe('a\naaa')
	expect(filterLines('b\ncbb\ndcd\na\nece\naaa', 'c')).toBe('cbb\ndcd\nece')
})
