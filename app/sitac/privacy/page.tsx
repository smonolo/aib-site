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
  const canonical = absoluteUrl('/sitac/privacy')
  return {
    title: copy.privacy.title,
    description: copy.privacy.description,
    alternates: {
      canonical,
      languages: {
        it: canonical,
        en: `${canonical}?lang=en`,
      },
    },
    openGraph: {
      title: copy.privacy.title,
      description: copy.privacy.description,
      url: canonical,
    },
  }
}

async function SitacPrivacyPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibSitacCopy(locale)

  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className={pageTitleClass}>{copy.privacy.heading}</h1>
        <p className={metaClass}>{copy.privacy.updated}</p>
      </header>

      <p className={bodyClass}>{copy.privacy.intro}</p>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.privacy.summaryTitle}</h2>
        <ul className={listClass}>
          {copy.privacy.summary.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={h2Class}>{copy.privacy.dataTitle}</h2>
        <div className="overflow-x-auto rounded-aib bg-aib-surface dark:bg-aib-surface-dark">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[13px]">
            <thead>
              <tr>
                <th className="border-b border-aib-border px-3.5 py-3 font-semibold text-aib-fg dark:border-aib-border-dark dark:text-aib-fg-inverse">
                  {copy.privacy.colData}
                </th>
                <th className="border-b border-aib-border px-3.5 py-3 font-semibold text-aib-fg dark:border-aib-border-dark dark:text-aib-fg-inverse">
                  {copy.privacy.colWhere}
                </th>
                <th className="border-b border-aib-border px-3.5 py-3 font-semibold text-aib-fg dark:border-aib-border-dark dark:text-aib-fg-inverse">
                  {copy.privacy.colWhy}
                </th>
              </tr>
            </thead>
            <tbody>
              {copy.privacy.dataRows.map(row => (
                <tr
                  key={row.data}
                  className="border-b border-aib-border last:border-b-0 dark:border-aib-border-dark"
                >
                  <td className="px-3.5 py-3 align-top text-aib-muted dark:text-aib-muted-dark">
                    {row.data}
                  </td>
                  <td className="px-3.5 py-3 align-top text-aib-muted dark:text-aib-muted-dark">
                    {row.where}
                  </td>
                  <td className="px-3.5 py-3 align-top text-aib-muted dark:text-aib-muted-dark">
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.privacy.accessTitle}</h2>
        <ul className={listClass}>
          {copy.privacy.access.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.privacy.shareTitle}</h2>
        <p className={bodyClass}>{copy.privacy.shareBody}</p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>{copy.privacy.contactTitle}</h2>
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
            href={aibLocaleHref('/sitac/terms', locale)}
            className="aib-link"
          >
            {copy.nav.terms}
          </Link>
        </p>
      </section>
    </article>
  )
}

export default function SitacPrivacyPage(props: Props) {
  return (
    <Suspense fallback={null}>
      <SitacPrivacyPageContent {...props} />
    </Suspense>
  )
}
