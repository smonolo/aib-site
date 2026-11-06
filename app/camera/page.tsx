import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { aibCopy } from '@/lib/camera/copy'
import { aibHtml } from '@/lib/camera/html'
import {
  aibLocaleHref,
  localeFromSearchParams,
  type AibLocale,
} from '@/lib/camera/locale'
import { absoluteUrl } from '@/lib/site'
import {
  bodyClass,
  h2Class,
  pageLeadClass,
  pageTitleClass,
  richBodyClass,
} from '@/lib/styles'

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const canonical = absoluteUrl('/camera')
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

async function CameraHomePageContent({ searchParams }: Props) {
  const locale: AibLocale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const privacyBody = aibHtml(copy.home.privacyBodyHtml, { locale })
  const contactsBody = aibHtml(copy.home.contactsBodyHtml, { locale })

  return (
    <article className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <h1 className={pageTitleClass}>{copy.home.title}</h1>
        <p className={pageLeadClass}>{copy.home.lead}</p>
      </header>

      <section className={`max-w-3xl space-y-4 ${bodyClass}`}>
        <p>{copy.home.intro1}</p>
        <p dangerouslySetInnerHTML={{ __html: copy.home.intro2Html }} />
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
          <span dangerouslySetInnerHTML={{ __html: copy.home.guideBodyHtml }} />{' '}
          <Link
            href={aibLocaleHref('/camera/guide', locale)}
            className="aib-link"
          >
            {copy.home.guideLink}
          </Link>{' '}
          {copy.home.guideOr}{' '}
          <a href={copy.guide.pdfHref} className="aib-link">
            {copy.home.guidePdf}
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl space-y-2">
        <h2 className={h2Class}>{copy.home.privacyTitle}</h2>
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: privacyBody }}
        />
      </section>

      <section className="max-w-3xl space-y-2">
        <h2 className={h2Class}>{copy.home.contactsTitle}</h2>
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: contactsBody }}
        />
      </section>
    </article>
  )
}

export default function CameraHomePage(props: Props) {
  return (
    <Suspense fallback={null}>
      <CameraHomePageContent {...props} />
    </Suspense>
  )
}
