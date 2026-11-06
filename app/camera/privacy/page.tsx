import type { Metadata } from 'next'
import { Suspense } from 'react'
import { aibCopy } from '@/lib/camera/copy'
import { aibHtml } from '@/lib/camera/html'
import { localeFromSearchParams } from '@/lib/camera/locale'
import { absoluteUrl } from '@/lib/site'
import {
  bodyClass,
  codeClass,
  h2Class,
  h3Class,
  listClass,
  metaClass,
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
  const canonical = absoluteUrl('/camera/privacy')
  return {
    title: copy.privacy.title,
    description: copy.privacy.description,
    alternates: {
      canonical,
      languages: { it: canonical, en: `${canonical}?lang=en` },
    },
    openGraph: {
      title: copy.privacy.title,
      description: copy.privacy.description,
      url: canonical,
    },
  }
}

async function CameraPrivacyPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const logBody = aibHtml(copy.privacy.logBodyHtml, { codeClass, locale })
  const exifBody = aibHtml(copy.privacy.exifBodyHtml, { codeClass, locale })
  const contactsBody = aibHtml(copy.privacy.contactsBodyHtml, { locale })
  const contactsMail = aibHtml(copy.privacy.contactsMailHtml, { locale })

  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className={pageTitleClass}>{copy.privacy.heading}</h1>
        <p className={metaClass}>{copy.privacy.updated}</p>
      </header>

      <div className={`space-y-4 ${bodyClass}`}>
        <p dangerouslySetInnerHTML={{ __html: copy.privacy.intro1Html }} />
        <p>{copy.privacy.intro2}</p>
      </div>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.privacy.summaryTitle}</h2>
        <ul className={listClass}>
          {copy.privacy.summary.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={h2Class}>{copy.privacy.dataTitle}</h2>
        <div className="overflow-x-auto rounded-aib bg-aib-canvas dark:bg-aib-canvas-inverse">
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
                <tr key={row.data}>
                  <td className="border-t border-aib-border px-3.5 py-3 align-top font-medium text-aib-fg dark:border-aib-border-dark dark:text-aib-fg-inverse">
                    {row.data}
                  </td>
                  <td className="border-t border-aib-border px-3.5 py-3 align-top text-aib-muted dark:border-aib-border-dark dark:text-aib-muted-dark">
                    {row.where}
                  </td>
                  <td className="border-t border-aib-border px-3.5 py-3 align-top text-aib-muted dark:border-aib-border-dark dark:text-aib-muted-dark">
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={h3Class}>{copy.privacy.logTitle}</h3>
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: logBody }}
        />

        <h3 className={h3Class}>{copy.privacy.exifTitle}</h3>
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: exifBody }}
        />

        <p
          className={bodyClass}
          dangerouslySetInnerHTML={{ __html: copy.privacy.noBackendHtml }}
        />
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.privacy.permissionsTitle}</h2>
        <ul className={listClass}>
          {copy.privacy.permissions.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>{copy.privacy.shareTitle}</h2>
        <p className={bodyClass}>{copy.privacy.shareBody}</p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>{copy.privacy.minorsTitle}</h2>
        <p className={bodyClass}>{copy.privacy.minorsBody}</p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>{copy.privacy.changesTitle}</h2>
        <p className={bodyClass}>{copy.privacy.changesBody}</p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>{copy.privacy.contactsTitle}</h2>
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: contactsBody }}
        />
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: contactsMail }}
        />
      </section>
    </article>
  )
}

export default function CameraPrivacyPage(props: Props) {
  return (
    <Suspense fallback={null}>
      <CameraPrivacyPageContent {...props} />
    </Suspense>
  )
}
