import { test, expect } from 'vitest'
import { rgbToColorcode, colorcodeToRgb } from './colorcode'

test('rgbToColorcode() convert rgb to colorcode', () => {
	expect(rgbToColorcode('255', '255', '255')).toBe('#ffffff')
	expect(rgbToColorcode('0', '0', '0')).toBe('#000000')
	expect(rgbToColorcode('255', '153', '51')).toBe('#ff9933')
})

test('colorcodeToRgb() convert colorcode to rgb', () => {
	expect(colorcodeToRgb('#ffffff')).toBe('rgb(255, 255, 255)')
	expect(colorcodeToRgb('ffffff')).toBe('rgb(255, 255, 255)')
	expect(colorcodeToRgb('#000000')).toBe('rgb(0, 0, 0)')
	expect(colorcodeToRgb('000000')).toBe('rgb(0, 0, 0)')
	expect(colorcodeToRgb('#ff9933')).toBe('rgb(255, 153, 51)')
	expect(colorcodeToRgb('ff9933')).toBe('rgb(255, 153, 51)')
})
