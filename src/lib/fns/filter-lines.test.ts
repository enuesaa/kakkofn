import { test, expect } from 'vitest'
import { filterLines } from './filter-lines'

test('filterLines() count text length', () => {
	expect(filterLines('a\naaa\nbbb', 'a')).toBe('a\naaa')
})
