// Gives every client-side route a real static file in dist/, so GitHub Pages
// answers 200 for a direct request to e.g. /about instead of 404. All asset
// links in index.html are absolute (base: '/'), so this file can live at any
// depth and still load correctly; the SPA router takes over once JS runs.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const html = readFileSync(join(dist, 'index.html'), 'utf8')

const routes = [
  '/work',
  '/about',
  '/career',
  '/contact',
  '/work/revenue-management',
  '/work/frontend-architecture',
]

for (const route of routes) {
  const dir = join(dist, ...route.split('/').filter(Boolean))
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
}

console.log(`postbuild: pre-rendered ${routes.length} static route shells`)
