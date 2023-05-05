import { getPascalCaseString } from '@aracna/core'
import { appendFile, mkdir, readFile, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

await rm('src/elements', { force: true, recursive: true })
await mkdir('src/elements')
await writeFile('src/index.ts', '')

for (let asset of await glob('assets/*.svg')) {
  let name, ename, svg, ts

  name = asset.replace('assets/', '').replace('.svg', '')
  ename = 'IconFeather' + getPascalCaseString(name) + 'Element'
  svg = await readFile(asset)

  ts = /* HTML */ `
    <script>
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

          this.fill = 'none'
          this.size = 16
          this.src = '${svg}'
          this.stroke = 'inherit'
          this.strokeLineCap = 'round'
          this.strokeLineJoin = 'round'
          this.strokeWidth = '2'
        }

        static styles: CSSResultGroup = [
          super.styles,
          css\`
            :host {
              stroke: black;
            }
          \`
        ]
      }

      defineCustomElement('icon-feather-${name}', ${ename})
    </script>
  `

  ts = format(ts.replace(/<\/?script>/gm, ''), {
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
