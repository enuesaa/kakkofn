import { test, expect } from 'vitest'
import { jsonFormat } from './json-format'

test('jsonFormat() count text length', () => {
	expect(jsonFormat('{"a":"b"}')).toBe(`{
  "a": "b"
}`)
})
