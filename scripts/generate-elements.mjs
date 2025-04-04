import { getPascalCaseString, getSnakeCaseString } from '@aracna/core'
import { mkdir, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { basename } from 'path'
import { format } from 'prettier'

const ASSETS = await glob('node_modules/@aracna/icons-feather/assets/*.cjs')

await rm('src/elements', { force: true, recursive: true })
await mkdir('src/elements')

for (let path of ASSETS) {
  let name, cname, ename, ts

  name = basename(path).replace('.cjs', '')
  cname = 'ICON_F_' + getSnakeCaseString(name).toUpperCase()
  ename = 'IconFeather' + getPascalCaseString(name) + 'Element'

  ts = /* HTML */ `
    <script>
      import { ${cname} } from '@aracna/icons-feather/assets/${name}'
      import { defineCustomElement } from '@aracna/web'
      import { IconFeatherElement } from '../icon-feather-element.js'

      declare global {
        interface HTMLElementTagNameMap {
          'icon-feather-${name}': ${ename}
        }
      }

      export class ${ename} extends IconFeatherElement {
        constructor() {
          super()
          this.src = ${cname}
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
}
