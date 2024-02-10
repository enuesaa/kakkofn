import { describe, expect, it } from 'vitest'
import { countTextLength } from './count'

describe('count', () => {
  it('count text', () => {
    expect(countTextLength('aa')).toStrictEqual(2)
  })
})