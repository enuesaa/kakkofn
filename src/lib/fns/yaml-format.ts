import prettier from 'prettier/standalone'
import * as parserYaml from 'prettier/plugins/yaml'

export async function yamlFormat(text: string): Promise<string> {
  try {
    return prettier.format(text, {
      parser: 'yaml',
      plugins: [parserYaml],
    })
  } catch (e) {}
  
  return ''
}
