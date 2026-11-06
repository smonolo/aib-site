import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AppIcon, type AppIconName } from '@/components/icons/app-icon'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'
import { ButtonLink } from '@/components/ui/button-link'
import { focusRingClass } from '@/lib/focus'
import { aibLocaleHref, localeFromSearchParams } from '@/lib/locale'
import { absoluteUrl, products, SITAC_APP_URL } from '@/lib/site'
import { uiCopy } from '@/lib/ui-copy'
import { cn } from '@/lib/utils'

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
      <div className="mx-auto w-full max-w-5xl px-[max(1rem,env(safe-area-inset-left))] py-12 pr-[max(1rem,env(safe-area-inset-right))] sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:py-24 sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
        {children}
      </div>
    </section>
  )
}

const startCardLinkClass =
  'bg-aib-surface text-aib-fg dark:bg-aib-surface-dark dark:text-aib-fg-inverse'

function ProductCard({
  icon,
  name,
  body,
  highlights,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  icon: AppIconName
  name: string
  body: string
  highlights: string[]
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
}) {
  return (
    <article className="flex flex-col rounded-aib bg-aib-canvas p-5 sm:p-8 dark:bg-aib-canvas-inverse">
      <AppIcon
        name={icon}
        size={22}
        strokeWidth={1.75}
        className="text-aib-fg dark:text-aib-fg-inverse"
      />
      <h3 className="mt-5 text-[20px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[22px] dark:text-aib-fg-inverse">
        {name}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
        {body}
      </p>
      <ul className="mt-6 space-y-2 text-[13px] leading-snug text-aib-muted dark:text-aib-muted-dark">
        {highlights.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row sm:flex-wrap [&_a]:w-full sm:[&_a]:w-auto">
        <ButtonLink href={primaryHref} size="sm">
          {primaryLabel}
        </ButtonLink>
        <ButtonLink href={secondaryHref} variant="secondary" size="sm">
          {secondaryLabel}
        </ButtonLink>
      </div>
    </article>
  )
}

async function HubPageContent({ searchParams }: Props) {
  const locale = localeFromSearchParams(await searchParams)
  const copy = uiCopy(locale).hub

  return (
    <main
      id="contenuto-principale"
      className={cn('flex-1 outline-none', focusRingClass)}
      tabIndex={-1}
    >
      <Section className="bg-aib-canvas dark:bg-aib-canvas-inverse">
        <div className="flex min-h-[min(62dvh,32rem)] flex-col justify-center gap-8 sm:min-h-[min(72dvh,40rem)] sm:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <h1 className="max-w-2xl text-[32px] leading-[1.12] font-bold tracking-[-0.6px] text-aib-fg sm:text-[48px] sm:leading-[1.1] dark:text-aib-fg-inverse">
              {copy.title}
            </h1>
            <p className="max-w-xl text-[16px] leading-relaxed text-aib-muted sm:text-[19px] dark:text-aib-muted-dark">
              {copy.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap [&_a]:w-full sm:[&_a]:w-auto">
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

      <Section className="bg-aib-surface dark:bg-aib-surface-dark">
        <div className="max-w-2xl">
          <h2 className="text-[24px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[28px] dark:text-aib-fg-inverse">
            {copy.productsTitle}
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
            {copy.productsLead}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <ProductCard
            icon="camera"
            name={products.camera.name}
            body={copy.cameraBody}
            highlights={copy.cameraHighlights}
            primaryHref={aibLocaleHref(products.camera.path, locale)}
            primaryLabel={copy.visitSite}
            secondaryHref={aibLocaleHref('/camera/guide', locale)}
            secondaryLabel={copy.guide}
          />
          <ProductCard
            icon="map"
            name={products.sitac.name}
            body={copy.sitacBody}
            highlights={copy.sitacHighlights}
            primaryHref={aibLocaleHref(products.sitac.path, locale)}
            primaryLabel={copy.visitSite}
            secondaryHref={SITAC_APP_URL}
            secondaryLabel={copy.openApp}
          />
        </div>
      </Section>

      <Section className="bg-aib-canvas dark:bg-aib-canvas-inverse">
        <div className="max-w-2xl">
          <h2 className="text-[24px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[28px] dark:text-aib-fg-inverse">
            {copy.principlesTitle}
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-aib-muted dark:text-aib-muted-dark">
            {copy.principlesLead}
          </p>
        </div>
        <ul className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {copy.principles.map(item => (
            <li key={item.title}>
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

        <div className="mt-12 rounded-aib bg-aib-surface-muted p-5 sm:mt-16 sm:p-8 dark:bg-aib-surface-muted-dark">
          <h2 className="text-[22px] font-bold tracking-[-0.3px] text-aib-fg sm:text-[28px] dark:text-aib-fg-inverse">
            {copy.startTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-aib-muted sm:text-[16px] dark:text-aib-muted-dark">
            {copy.startLead}
          </p>
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap [&_a]:w-full sm:[&_a]:w-auto">
            <ButtonLink
              href={aibLocaleHref('/camera/guide', locale)}
              size="sm"
              className={startCardLinkClass}
            >
              {copy.guideCamera}
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref('/sitac/guide', locale)}
              size="sm"
              className={startCardLinkClass}
            >
              {copy.guideSitac}
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref('/camera/privacy', locale)}
              size="sm"
              className={startCardLinkClass}
            >
              {copy.privacyCamera}
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref('/sitac/privacy', locale)}
              size="sm"
              className={startCardLinkClass}
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
