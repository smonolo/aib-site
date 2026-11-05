import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { aibLocaleHref, localeFromSearchParams } from '@/lib/locale'
import { aibSitacCopy } from '@/lib/sitac/copy'
import { absoluteUrl } from '@/lib/site'
import {
  bodyClass,
  h2Class,
  listClass,
  metaClass,
  pageTitleClass,
} from '@/lib/styles'

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibSitacCopy(locale)
  const canonical = absoluteUrl('/sitac/terms')
  return {
    title: copy.terms.title,
    description: copy.terms.description,
    alternates: {
      canonical,
      languages: {
        it: canonical,
        en: `${canonical}?lang=en`,
      },
    },
    openGraph: {
      title: copy.terms.title,
      description: copy.terms.description,
      url: canonical,
    },
  }
}

async function SitacTermsPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibSitacCopy(locale)

  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className={pageTitleClass}>{copy.terms.heading}</h1>
        <p className={metaClass}>{copy.terms.updated}</p>
      </header>

      <p className={bodyClass}>{copy.terms.intro}</p>

      <ul className={listClass}>
        {copy.terms.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <section className="space-y-2">
        <h2 className={h2Class}>{copy.terms.contactTitle}</h2>
        <p className={bodyClass}>
          <a href="mailto:stefano@smnl.dev" className="aib-link">
            stefano@smnl.dev
          </a>
          {' · '}
          <a
            href="https://smnl.dev"
            className="aib-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            smnl.dev
          </a>
          {' · '}
          <Link
            href={aibLocaleHref('/sitac/privacy', locale)}
            className="aib-link"
          >
            {copy.nav.privacy}
          </Link>
        </p>
      </section>
    </article>
  )
}

export default function SitacTermsPage(props: Props) {
  return (
    <Suspense fallback={null}>
      <SitacTermsPageContent {...props} />
    </Suspense>
  )
}
