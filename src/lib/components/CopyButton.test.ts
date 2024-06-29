import { render } from '@testing-library/svelte'
import { expect, test } from 'vitest'
import CopyButton from './CopyButton.svelte'

test('CopyButton snapshot', () => {
  const { container } = render(CopyButton)
	expect(container).toMatchSnapshot()
})
