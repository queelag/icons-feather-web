import { getKebabCaseString, getPascalCaseString } from '@aracna/core'
import * as SVGS from '@aracna/icons-feather'
import { appendFile, mkdir, rm, writeFile } from 'fs/promises'
import { format } from 'prettier'

await rm('src/elements', { force: true, recursive: true })
await mkdir('src/elements')
await writeFile('src/index.ts', '')

for (let key in SVGS) {
  let name, ename, ts

  name = getKebabCaseString(key.replace('ICON_FEATHER_', '').toLowerCase())
  ename = 'IconFeather' + getPascalCaseString(name) + 'Element'

  ts = /* HTML */ `
    <script>
      import { ${key} } from '@aracna/icons-feather'
      import { defineCustomElement } from '@aracna/web'
      import { IconFeatherElement } from '../icon-feather-element.js'

      declare global {
        interface HTMLElementTagNameMap {
          'icon-feather-${name}': IconFeatherElement
        }
      }

      export class ${ename} extends IconFeatherElement {
        constructor() {
          super()
          this.src = ${key}
        }
      }

      defineCustomElement('icon-feather-${name}', ${ename})
    </script>
  `

  ts = await format(ts.replace(/<\/?script>/gm, ''), {
    jsxSingleQuote: true,
    parser: 'babel-ts',
    printWidth: 160,
    semi: false,
    singleQuote: true,
    trailingComma: 'none'
  })

  await writeFile(`src/elements/${name}-element.ts`, ts)
  await appendFile('src/index.ts', `export * from './elements/${name}-element.js'\n`)
}
