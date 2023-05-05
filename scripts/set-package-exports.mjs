import { writeFile } from 'fs/promises'
import { glob } from 'glob'
import PACKAGE from '../package.json' assert { type: 'json' }

PACKAGE.exports = {
  '.': {
    import: './index.js',
    require: {
      default: './index.cjs.js',
      types: './index.d.ts'
    }
  }
}

for (let path of await glob('src/elements/**/*.ts')) {
  let name

  name = path.replace('src/elements/', '').replace('.ts', '')

  PACKAGE.exports[`./elements/${name}.js`] = {
    import: `./elements/${name}.js`,
    require: {
      default: `./elements/${name}.cjs.js`,
      types: `./elements/${name}.d.ts`
    }
  }
}

await writeFile('package.json', JSON.stringify(PACKAGE, null, 2))
