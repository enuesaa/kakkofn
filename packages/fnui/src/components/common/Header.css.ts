import { style } from '@vanilla-extract/css'

export default {
  main: style({
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '0 0 10px 0'
  }),
  headinglink: style({
    color: 'var(--white-a10)',
    textDecoration: 'none'
  })
}
