import { build } from 'esbuild'
import { glob } from 'glob'

/** @type {import('esbuild').BuildOptions} */
const OPTIONS = {
  logLevel: 'info',
  minify: true
}

/**
 * ESM
 */
build({
  ...OPTIONS,
  entryPoints: await glob('./src/**/*.ts'),
  format: 'esm',
  outdir: 'dist',
  packages: 'external',
  platform: 'neutral'
}).catch(() => process.exit(1))

/**
 * CJS
 */
build({
  ...OPTIONS,
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['@aracna/core', '@aracna/web', '@aracna/web-components', 'dompurify'],
  format: 'cjs',
  outfile: 'dist/index.cjs',
  platform: 'neutral',
  treeShaking: true
}).catch(() => process.exit(1))

/**
 * ELEMENTS
 */
for (let element of await glob('./src/elements/**/*.ts')) {
  /**
   * CJS
   */
  build({
    ...OPTIONS,
    bundle: true,
    entryPoints: [element],
    external: ['@aracna/core', '@aracna/web', '@aracna/web-components', 'dompurify'],
    format: 'cjs',
    outfile: element.replace('src', 'dist').replace('.ts', '.cjs'),
    platform: 'neutral',
    treeShaking: true
  }).catch(() => process.exit(1))

  /**
   * IIFE
   */
  build({
    ...OPTIONS,
    bundle: true,
    entryPoints: [element],
    format: 'iife',
    outfile: element.replace('src', 'dist').replace('.ts', '.iife.js'),
    platform: 'browser',
    treeShaking: true
  }).catch(() => process.exit(1))
}
