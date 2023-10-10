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
      import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'
      import { css, CSSResultGroup } from 'lit'

      declare global {
        interface HTMLElementTagNameMap {
          'icon-feather-${name}': IconElement
        }
      }

      export class ${ename} extends IconElement {
        constructor() {
          super()

          this.fill = 'inherit'
          this.size = 16
          this.src = ${key}
          this.stroke = 'inherit'
          this.strokeLineCap = 'round'
          this.strokeLineJoin = 'round'
          this.strokeWidth = '2'
        }

        static styles: CSSResultGroup = [
          super.styles,
          css\`
            :host {
              fill: none;
              stroke: black;
            }
          \`
        ]
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
