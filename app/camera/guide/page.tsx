import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ButtonLink } from '@/components/ui/button-link'
import { aibGuideBody } from '@/lib/camera/bodies'
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
  const canonical = absoluteUrl('/camera/guide')
  return {
    title: copy.guide.title,
    description: copy.guide.description,
    alternates: {
      canonical,
      languages: { it: canonical, en: `${canonical}?lang=en` },
    },
    openGraph: {
      title: copy.guide.title,
      description: copy.guide.description,
      url: canonical,
    },
  }
}

async function CameraGuidePageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const guideHtml = aibGuideBody(locale)

  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <h1 className={pageTitleClass}>{copy.guide.heading}</h1>
        <p
          className={`${pageLeadClass} [&_strong]:font-semibold [&_strong]:text-aib-fg dark:[&_strong]:text-aib-fg-inverse`}
          dangerouslySetInnerHTML={{ __html: copy.guide.leadHtml }}
        />
        <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:gap-3 [&_a]:w-full sm:[&_a]:w-auto">
          <ButtonLink
            href={copy.guide.pdfHref}
            download={copy.guide.pdfFilename}
            size="sm"
          >
            {copy.guide.downloadPdf}
          </ButtonLink>
          <ButtonLink
            href={copy.guide.pdfHref}
            external
            variant="secondary"
            size="sm"
          >
            {copy.guide.openPdf}
          </ButtonLink>
        </div>
      </header>

      <article
        className="aib-prose overflow-hidden rounded-aib bg-aib-canvas px-4 py-6 sm:px-8 sm:py-8 dark:bg-aib-canvas-inverse"
        dangerouslySetInnerHTML={{ __html: guideHtml }}
      />
    </div>
  )
}

export default function CameraGuidePage(props: Props) {
  return (
    <Suspense fallback={null}>
      <CameraGuidePageContent {...props} />
    </Suspense>
  )
}
