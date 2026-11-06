import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ButtonLink } from '@/components/ui/button-link'
import { aibLocaleHref, localeFromSearchParams } from '@/lib/locale'
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
  const canonical = absoluteUrl('/sitac')
  return {
    title: copy.home.title,
    description: copy.home.description,
    alternates: {
      canonical,
      languages: {
        it: canonical,
        en: `${canonical}?lang=en`,
      },
    },
    openGraph: {
      title: copy.home.title,
      description: copy.home.description,
      url: canonical,
    },
  }
}

async function SitacHomePageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibSitacCopy(locale)

  return (
    <article className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <h1 className={pageTitleClass}>{copy.home.title}</h1>
        <p className={pageLeadClass}>{copy.home.lead}</p>
        <div className="flex pt-1 [&_a]:w-full sm:[&_a]:w-auto">
          <ButtonLink href={SITAC_APP_URL} size="sm">
            {copy.home.appCta}
          </ButtonLink>
        </div>
      </header>

      <section className={`max-w-3xl space-y-4 ${bodyClass}`}>
        <p>{copy.home.intro1}</p>
        <p>{copy.home.intro2}</p>
      </section>

      <section>
        <p className="mb-3 text-[13px] font-medium text-aib-muted dark:text-aib-muted-dark">
          {copy.home.featuresLabel}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {copy.home.features.map(feature => (
            <li
              key={feature.title}
              className="rounded-aib bg-aib-canvas px-4 py-4 dark:bg-aib-canvas-inverse"
            >
              <p className="text-[15px] font-semibold text-aib-fg dark:text-aib-fg-inverse">
                {feature.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-aib-muted dark:text-aib-muted-dark">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl space-y-2">
        <h2 className={h2Class}>{copy.home.guideTitle}</h2>
        <p className={bodyClass}>
          {copy.home.guideBody}{' '}
          <Link
            href={aibLocaleHref('/sitac/guide', locale)}
            className="aib-link"
          >
            {copy.home.guideLink}
          </Link>
          .
        </p>
      </section>

      <section className="max-w-3xl space-y-2">
        <h2 className={h2Class}>{copy.home.privacyTitle}</h2>
        <p className={bodyClass}>
          {copy.home.privacyBody}{' '}
          <Link
            href={aibLocaleHref('/sitac/privacy', locale)}
            className="aib-link"
          >
            {copy.home.privacyLink}
          </Link>
          .
        </p>
      </section>

      <section className="max-w-3xl space-y-2">
        <h2 className={h2Class}>{copy.home.termsTitle}</h2>
        <p className={bodyClass}>
          {copy.home.termsBody}{' '}
          <Link
            href={aibLocaleHref('/sitac/terms', locale)}
            className="aib-link"
          >
            {copy.home.termsLink}
          </Link>
          .
        </p>
      </section>

      <section className="max-w-3xl space-y-2">
        <h2 className={h2Class}>{copy.home.contactsTitle}</h2>
        <p className={bodyClass}>
          <a href="mailto:stefano@smnl.dev" className="aib-link">
            stefano@smnl.dev
          </a>
        </p>
      </section>
    </article>
  )
}

export default function SitacHomePage(props: Props) {
  return (
    <Suspense fallback={null}>
      <SitacHomePageContent {...props} />
    </Suspense>
  )
}
