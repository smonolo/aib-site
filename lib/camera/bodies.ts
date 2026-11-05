import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { AibLocale } from '@/lib/camera/locale'

const bodiesDir = join(process.cwd(), 'content/camera/bodies')

function readBody(name: string): string {
  return readFileSync(join(bodiesDir, name), 'utf8')
}

export function aibGuideBody(locale: AibLocale): string {
  return locale === 'en'
    ? readBody('field-guide.body.html')
    : readBody('guida-operativa.body.html')
}

export function aibChangelogBody(locale: AibLocale): string {
  return locale === 'en'
    ? readBody('changelog.en.body.html')
    : readBody('changelog.body.html')
}
