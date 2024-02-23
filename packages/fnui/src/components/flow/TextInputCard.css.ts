import { style } from '@vanilla-extract/css'

export default {
  textInputCard: style({
    width: '90%',
    display: 'inline-block',
  }),
  textInputCardLabel: style({
    width: '100px',
    fontSize: '16px',
    textAlign: 'center',
  }),
  textarea: style({
    minHeight: '200px',
  }),
}