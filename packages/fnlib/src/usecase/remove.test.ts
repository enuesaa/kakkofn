import { describe, expect, it } from 'vitest'
import { removeLineStartsWith } from './remove'

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
