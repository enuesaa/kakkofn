export const rgbToColorcode = (red: string, green: string, blue: string): string => {
  const rednum = Number(red)
  const greennum = Number(green)
  const bluenum = Number(blue)
  const isValid = (val: number) => !isNaN(val) && 0 <= val && val <= 255

  if (isValid(rednum) && isValid(greennum) && isValid(bluenum)) {
    return `#${rednum.toString(16)}${greennum.toString(16)}${bluenum.toString(16)}`
  }
  return ''
}

export const colorcodeToRgb = (colorcode: string): string => {
  if (colorcode.length === 6) {
    const red = parseInt(colorcode.slice(0, 2), 16)
    const green = parseInt(colorcode.slice(2, 4), 16)
    const blue = parseInt(colorcode.slice(4, 6), 16)
    if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {
      return `rgb(${red}, ${green}, ${blue})`
    }
  } else if (colorcode.length === 7 && colorcode.at(0) === '#') {
    const red = parseInt(colorcode.slice(1, 3), 16)
    const green = parseInt(colorcode.slice(3, 5), 16)
    const blue = parseInt(colorcode.slice(5, 7), 16)
    if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {
      return `rgb(${red}, ${green}, ${blue})`
    }
  }
  return ''
}
