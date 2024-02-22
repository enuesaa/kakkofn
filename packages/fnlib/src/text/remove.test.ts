import { describe, expect, it } from 'vitest'
import { removeLineStartsWith, removeLineEndsWith } from './remove'

describe('removeLineStartsWith', () => {
  it('normal', () => {
    expect(
      removeLineStartsWith(
        `aaaaa
bbbaa
cccaa
bbbaa
cccaa`,
        'bbb',
      ),
    ).toStrictEqual(`aaaaa
cccaa
cccaa`)
  })
})

describe('removeLineEndsWith', () => {
  it('normal', () => {
    expect(
      removeLineEndsWith(
        `aaaaa
aabbb
aaccc
aabbb
aaccc`,
        'bbb',
      ),
    ).toStrictEqual(`aaaaa
aaccc
aaccc`)
  })
})
