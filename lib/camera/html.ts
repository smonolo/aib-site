import { aibLocaleHref, type AibLocale } from '@/lib/camera/locale'

const LINK_HREFS: Record<string, string> = {
  privacy: '/camera/privacy',
  terms: '/camera/terms',
}

export function aibHtml(
  html: string,
  extras: { pdfHref?: string; codeClass?: string; locale?: AibLocale } = {}
): string {
  const locale = extras.locale ?? 'it'
  let out = html.replace(
    /<a\s+data-aib="(privacy|terms|pdf)">/g,
    (_, key: string) => {
      const base =
        key === 'pdf' && extras.pdfHref
          ? extras.pdfHref
          : (LINK_HREFS[key] ?? '#')
      const href = key === 'pdf' ? base : aibLocaleHref(base, locale)
      return `<a href="${href}">`
    }
  )
  if (extras.codeClass) {
    out = out.replace(
      /<code\s+data-aib="code">/g,
      `<code class="${extras.codeClass}">`
    )
  }
  return out
}
