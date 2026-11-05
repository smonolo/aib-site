import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ButtonLink } from '@/components/ui/button-link'
import { aibLocaleHref, localeFromSearchParams } from '@/lib/locale'
import { inlineMarkdown } from '@/lib/markdown-inline'
import { aibSitacCopy } from '@/lib/sitac/copy'
import { absoluteUrl, SITAC_APP_URL } from '@/lib/site'
import { bodyClass, h2Class, pageLeadClass, pageTitleClass } from '@/lib/styles'

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibSitacCopy(locale)
  const canonical = absoluteUrl('/sitac/guide')
  return {
    title: copy.guide.title,
    description: copy.guide.description,
    alternates: {
      canonical,
      languages: {
        it: canonical,
        en: `${canonical}?lang=en`,
      },
    },
    openGraph: {
      title: copy.guide.title,
      description: copy.guide.description,
      url: canonical,
    },
  }
}

async function SitacGuidePageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibSitacCopy(locale)

  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <h1 className={pageTitleClass}>{copy.guide.heading}</h1>
        <p className={pageLeadClass}>{copy.guide.lead}</p>
        <div className="pt-1">
          <ButtonLink href={SITAC_APP_URL} variant="secondary" size="sm">
            {copy.guide.openApp}
          </ButtonLink>
        </div>
      </header>

      {copy.guide.sections.map(section => (
        <section key={section.title} className="space-y-3">
          <h2 className={h2Class}>{section.title}</h2>
          <div className={`space-y-3 ${bodyClass}`}>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: inlineMarkdown(p) }}
              />
            ))}
          </div>
        </section>
      ))}

      <p className={bodyClass}>
        {copy.guide.seeAlsoBefore}{' '}
        <Link
          href={aibLocaleHref('/sitac/privacy', locale)}
          className="aib-link"
        >
          {copy.nav.privacy}
        </Link>{' '}
        {copy.guide.seeAlsoAnd}{' '}
        <Link href={aibLocaleHref('/sitac/terms', locale)} className="aib-link">
          {copy.nav.terms}
        </Link>
        .
      </p>
    </article>
  )
}

export default function SitacGuidePage(props: Props) {
  return (
    <Suspense fallback={null}>
      <SitacGuidePageContent {...props} />
    </Suspense>
  )
}
