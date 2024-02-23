import { globalStyle, style } from '@vanilla-extract/css'

const main = style({
  fontSize: '25px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
})

const heading = style({
  color: 'white',
  margin: '0 10px',
  textDecoration: 'none',
})

export default { main, heading }
