import { describe, expect, it } from 'vitest'
import { countTextLength, replaceText, removeLineStartsWith } from './fns'

describe('count', () => {
  it('count text', () => {
    expect(countTextLength('aa')).toStrictEqual(2)
  })
})

describe('replace', () => {
  it('replace text', () => {
    expect(replaceText('aab', 'b', 'a')).toStrictEqual('aaa')
  })
})

describe('removeLineStartsWith', () => {
  it('normal', () => {
    expect(removeLineStartsWith(`aaa
bbb
ccc
bbb
ccc`, 'bbb')).toStrictEqual(`aaa
ccc
ccc`)
  })
})