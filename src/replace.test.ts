import { describe, expect, it } from 'vitest'
import { replaceText } from './replace'

describe('replace', () => {
  it('replace text', () => {
    expect(replaceText('aab', 'b', 'a')).toStrictEqual('aaa')
  })
})
