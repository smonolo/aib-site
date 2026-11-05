import { aibLocaleHref, type AibLocale } from '@/lib/camera/locale'
import { SITE_ORIGIN } from '@/lib/site'

const LINK_HREFS: Record<string, string> = {
  privacy: '/camera/privacy',
  terms: '/camera/terms',
  guide: '/camera/guide',
  changelog: '/camera/changelog',
}

export function aibHtml(
  html: string,
  extras: { pdfHref?: string; codeClass?: string; locale?: AibLocale } = {}
): string {
  const locale = extras.locale ?? 'it'
  let out = html.replace(
    /<a\s+data-aib="(privacy|terms|guide|changelog|pdf)">/g,
    (_, key: string) => {
      const base =
        key === 'pdf' && extras.pdfHref
          ? extras.pdfHref
          : (LINK_HREFS[key] ?? '#')
      const href = key === 'pdf' ? base : aibLocaleHref(base, locale)
      return `<a href="${href}">`
    }
  )

  out = out.replace(
    new RegExp(
      `href=(["'])(?:${SITE_ORIGIN})?(/camera/(?:privacy|terms|guide|changelog))\\1`,
      'g'
    ),
    (_, quote: string, path: string) =>
      `href=${quote}${aibLocaleHref(path, locale)}${quote}`
  )

  if (extras.codeClass) {
    out = out.replace(
      /<code\s+data-aib="code">/g,
      `<code class="${extras.codeClass}">`
    )
  }
  return out
}
