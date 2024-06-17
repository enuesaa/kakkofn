import { test, expect } from 'vitest'
import { searchTextCount } from './search-text-count'

test('searchTextCount() search text and get its count.', () => {
	expect(searchTextCount('あああ', 'あ')).toBe(3)
	expect(searchTextCount('あああ', 'ああ')).toBe(1)
	expect(searchTextCount('あああ', '')).toBe(0)
	expect(searchTextCount('あああ', 'か')).toBe(0)
})
