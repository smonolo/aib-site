import type { Metadata } from 'next'
import { Suspense } from 'react'
import { aibCopy } from '@/lib/camera/copy'
import { aibHtml } from '@/lib/camera/html'
import { localeFromSearchParams } from '@/lib/camera/locale'
import { absoluteUrl } from '@/lib/site'
import {
  bodyClass,
  h2Class,
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
  const canonical = absoluteUrl('/camera/terms')
  return {
    title: copy.terms.title,
    description: copy.terms.description,
    alternates: {
      canonical,
      languages: { it: canonical, en: `${canonical}?lang=en` },
    },
    openGraph: {
      title: copy.terms.title,
      description: copy.terms.description,
      url: canonical,
    },
  }
}

async function CameraTermsPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = aibCopy(locale)
  const privacyBody = aibHtml(copy.terms.privacyBodyHtml, { locale })
  const contactsBody = aibHtml(copy.terms.contactsBodyHtml, { locale })
  const contactsMail = aibHtml(copy.terms.contactsMailHtml, { locale })

  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className={pageTitleClass}>{copy.terms.heading}</h1>
        <p className={metaClass}>{copy.terms.updated}</p>
      </header>

      <div className={`space-y-4 ${bodyClass}`}>
        <p dangerouslySetInnerHTML={{ __html: copy.terms.intro1Html }} />
        <p dangerouslySetInnerHTML={{ __html: copy.terms.intro2Html }} />
      </div>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.whoTitle}</h2>
        <p
          className={bodyClass}
          dangerouslySetInnerHTML={{ __html: copy.terms.whoBodyHtml }}
        />
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.purposeTitle}</h2>
        <p
          className={bodyClass}
          dangerouslySetInnerHTML={{ __html: copy.terms.purposeBodyHtml }}
        />
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.allowedTitle}</h2>
        <ul className={listClass}>
          {copy.terms.allowed.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.aimTitle}</h2>
        <p
          className={bodyClass}
          dangerouslySetInnerHTML={{ __html: copy.terms.aimBodyHtml }}
        />
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.asIsTitle}</h2>
        <p
          className={bodyClass}
          dangerouslySetInnerHTML={{ __html: copy.terms.asIsBody1Html }}
        />
        <p
          className={bodyClass}
          dangerouslySetInnerHTML={{ __html: copy.terms.asIsBody2Html }}
        />
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.liabilityTitle}</h2>
        <p className={bodyClass}>{copy.terms.liabilityBody}</p>
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.privacyTitle}</h2>
        <p
          className={richBodyClass}
          dangerouslySetInnerHTML={{ __html: privacyBody }}
        />
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.ipTitle}</h2>
        <p className={bodyClass}>{copy.terms.ipBody}</p>
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.updatesTitle}</h2>
        <p className={bodyClass}>{copy.terms.updatesBody}</p>
      </section>

      <section className="space-y-3">
        <h2 className={h2Class}>{copy.terms.contactsTitle}</h2>
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

export default function CameraTermsPage(props: Props) {
  return (
    <Suspense fallback={null}>
      <CameraTermsPageContent {...props} />
    </Suspense>
  )
}
