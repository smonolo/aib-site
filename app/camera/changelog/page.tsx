import type { Metadata } from 'next'
import { Suspense } from 'react'
import { aibChangelogBody } from '@/lib/camera/bodies'
import { aibCopy } from '@/lib/camera/copy'
import { localeFromSearchParams } from '@/lib/camera/locale'
import { absoluteUrl } from '@/lib/site'
import { pageLeadClass, pageTitleClass } from '@/lib/styles'

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const canonical = absoluteUrl('/camera/changelog')
  return {
    title: copy.changelog.title,
    description: copy.changelog.description,
    alternates: {
      canonical,
      languages: { it: canonical, en: `${canonical}?lang=en` },
    },
    openGraph: {
      title: copy.changelog.title,
      description: copy.changelog.description,
      url: canonical,
    },
  }
}

async function CameraChangelogPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const changelogHtml = aibChangelogBody(locale)

  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <h1 className={pageTitleClass}>{copy.changelog.heading}</h1>
        <p
          className={`${pageLeadClass} [&_strong]:font-semibold [&_strong]:text-aib-fg dark:[&_strong]:text-aib-fg-inverse`}
          dangerouslySetInnerHTML={{ __html: copy.changelog.leadHtml }}
        />
      </header>

      <article
        className="aib-prose overflow-hidden rounded-aib bg-aib-canvas px-4 py-6 sm:px-8 sm:py-8 dark:bg-aib-canvas-inverse"
        dangerouslySetInnerHTML={{ __html: changelogHtml }}
      />
    </div>
  )
}

export default function CameraChangelogPage(props: Props) {
  return (
    <Suspense fallback={null}>
      <CameraChangelogPageContent {...props} />
    </Suspense>
  )
}
