import fs from 'node:fs/promises'
import { replaceText } from './src/index'

const files = await fs.readdir('.')
console.log(files)

for (const filename of files) {
  const replaced = replaceText(filename, '.mdx', '.md')
  console.log(filename, replaced)
}

// rename here.


// Note: 
// something like `adapter` is needed.
// `adapter` transform request from web, cli, or anotehr.
// 