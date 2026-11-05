import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AppIcon } from '@/components/icons/app-icon'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'
import { ButtonLink } from '@/components/ui/button-link'
import { aibLocaleHref, localeFromSearchParams } from '@/lib/locale'
import { absoluteUrl, products, SITAC_APP_URL } from '@/lib/site'
import { uiCopy } from '@/lib/ui-copy'

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const locale = localeFromSearchParams(await searchParams)
  const copy = uiCopy(locale).hub
  const canonical = absoluteUrl('/')
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical,
      languages: {
        it: canonical,
        en: `${canonical}?lang=en`,
      },
    },
    openGraph: {
      title: 'AIB',
      description: copy.metaDescription,
      url: canonical,
    },
  }
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-5xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
        {children}
      </div>
    </section>
  )
}

async function HubPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = uiCopy(locale).hub

  return (
    <main id="contenuto-principale" className="flex-1" tabIndex={-1}>
      <Section className="bg-aib-canvas py-14 sm:py-24 dark:bg-aib-canvas-inverse">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-[32px] leading-tight font-bold tracking-[-0.5px] text-aib-fg sm:text-[44px] dark:text-aib-fg-inverse">
            {copy.title}
          </h1>
          <p className="text-[17px] leading-relaxed text-aib-muted sm:text-[19px] dark:text-aib-muted-dark">
            {copy.description}
          </p>
          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={aibLocaleHref(products.camera.path, locale)}
              size="sm"
            >
              AIB Camera
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref(products.sitac.path, locale)}
              variant="secondary"
              size="sm"
            >
              AIB SITAC
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="bg-aib-surface py-14 sm:py-24 dark:bg-aib-surface-dark">
        <div className="max-w-2xl">
          <h2 className="text-[24px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[28px] dark:text-aib-fg-inverse">
            {copy.productsTitle}
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
            {copy.productsLead}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <article className="flex flex-col rounded-aib bg-aib-canvas p-7 sm:p-8 dark:bg-aib-canvas-inverse">
            <h3 className="text-[22px] font-bold tracking-[-0.3px] text-aib-fg dark:text-aib-fg-inverse">
              {products.camera.name}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
              {copy.cameraBody}
            </p>
            <ul className="mt-6 list-disc space-y-2.5 pl-5 text-[13px] text-aib-muted marker:text-aib-muted dark:text-aib-muted-dark dark:marker:text-aib-muted-dark">
              {copy.cameraHighlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={aibLocaleHref(products.camera.path, locale)}
                size="sm"
              >
                {copy.visitSite}
              </ButtonLink>
              <ButtonLink
                href={aibLocaleHref('/camera/guide', locale)}
                variant="secondary"
                size="sm"
              >
                {copy.guide}
              </ButtonLink>
            </div>
          </article>

          <article className="flex flex-col rounded-aib bg-aib-canvas p-7 sm:p-8 dark:bg-aib-canvas-inverse">
            <h3 className="text-[22px] font-bold tracking-[-0.3px] text-aib-fg dark:text-aib-fg-inverse">
              {products.sitac.name}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
              {copy.sitacBody}
            </p>
            <ul className="mt-6 list-disc space-y-2.5 pl-5 text-[13px] text-aib-muted marker:text-aib-muted dark:text-aib-muted-dark dark:marker:text-aib-muted-dark">
              {copy.sitacHighlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={aibLocaleHref(products.sitac.path, locale)}
                size="sm"
              >
                {copy.visitSite}
              </ButtonLink>
              <ButtonLink href={SITAC_APP_URL} variant="secondary" size="sm">
                {copy.openApp}
              </ButtonLink>
            </div>
          </article>
        </div>
      </Section>

      <Section className="bg-aib-surface-muted py-14 sm:py-24 dark:bg-aib-surface-muted-dark">
        <div className="max-w-2xl">
          <h2 className="text-[24px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[28px] dark:text-aib-fg-inverse">
            {copy.principlesTitle}
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
            {copy.principlesLead}
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {copy.principles.map(item => (
            <li
              key={item.title}
              className="rounded-aib bg-aib-surface px-5 py-6 dark:bg-aib-surface-dark"
            >
              <AppIcon
                name={item.icon}
                size={22}
                strokeWidth={1.75}
                className="text-aib-fg dark:text-aib-fg-inverse"
              />
              <h3 className="mt-4 text-[16px] font-semibold text-aib-fg dark:text-aib-fg-inverse">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-snug text-aib-muted dark:text-aib-muted-dark">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-aib-canvas py-14 sm:py-24 dark:bg-aib-canvas-inverse">
        <div className="rounded-aib bg-aib-surface px-5 py-7 sm:px-10 sm:py-10 dark:bg-aib-surface-dark">
          <h2 className="text-[24px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[28px] dark:text-aib-fg-inverse">
            {copy.startTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
            {copy.startLead}
          </p>
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={aibLocaleHref('/camera/guide', locale)}
              variant="secondary"
              size="sm"
            >
              {copy.guideCamera}
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref('/sitac/guide', locale)}
              variant="secondary"
              size="sm"
            >
              {copy.guideSitac}
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref('/camera/privacy', locale)}
              variant="secondary"
              size="sm"
            >
              {copy.privacyCamera}
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref('/sitac/privacy', locale)}
              variant="secondary"
              size="sm"
            >
              {copy.privacySitac}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  )
}

export default function HubPage(props: Props) {
  return (
    <div className="flex min-h-dvh flex-col bg-aib-canvas dark:bg-aib-canvas-inverse">
      <SkipLink />
      <SiteHeader />
      <Suspense fallback={null}>
        <HubPageContent {...props} />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
