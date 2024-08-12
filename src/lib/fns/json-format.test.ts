import { test, expect } from 'vitest'
import { jsonFormat } from './json-format'

test('normal test case of jsonFormat()', () => {
	expect(jsonFormat('{"a":"b"}')).toBe(`{
  "a": "b"
}`)
})
