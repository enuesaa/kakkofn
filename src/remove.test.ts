import { describe, expect, it } from 'vitest'
import { removeLineStartsWith } from './remove'

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