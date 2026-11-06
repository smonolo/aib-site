import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AppIcon, type AppIconName } from '@/components/icons/app-icon'
import { HubHeroMedia } from '@/components/layout/hub-hero-media'
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
    title: {
      absolute: copy.metaTitle,
    },
    description: copy.metaDescription,
    alternates: {
      canonical,
      languages: {
        it: canonical,
        en: `${canonical}?lang=en`,
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: canonical,
    },
  }
}

function Section({
  children,
  className,
  'aria-labelledby': ariaLabelledBy,
}: {
  children: React.ReactNode
  className?: string
  'aria-labelledby'?: string
}) {
  return (
    <section className={className} aria-labelledby={ariaLabelledBy}>
      <div className="mx-auto w-full max-w-5xl px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:py-24 sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
        {children}
      </div>
    </section>
  )
}

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
    <article className="flex flex-col rounded-aib bg-aib-canvas p-5 sm:p-10 dark:bg-aib-canvas-inverse">
      <AppIcon
        name={icon}
        size={30}
        strokeWidth={1.75}
        className="text-aib-fg dark:text-aib-fg-inverse"
      />
      <h3 className="mt-4 text-[20px] font-bold tracking-[-0.3px] text-aib-fg sm:mt-5 sm:text-[22px] dark:text-aib-fg-inverse">
        {name}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-aib-muted sm:mt-3 dark:text-aib-muted-dark">
        {body}
      </p>
      <ul className="mt-5 space-y-2.5 text-[13px] leading-snug text-aib-muted sm:mt-6 sm:space-y-2 dark:text-aib-muted-dark">
        {highlights.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row sm:flex-wrap sm:pt-8 [&_a]:w-full sm:[&_a]:w-auto">
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
      <section
        className="relative isolate overflow-hidden bg-aib-surface-muted text-aib-fg-inverse dark:bg-aib-canvas-inverse"
        aria-labelledby="hub-hero-heading"
      >
        <HubHeroMedia />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10 dark:from-black/70 dark:via-black/35 dark:to-black/10"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 dark:from-black/45 dark:to-black/20"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(62dvh,34rem)] w-full max-w-5xl flex-col justify-center gap-6 px-[max(1rem,env(safe-area-inset-left))] pt-[calc(env(safe-area-inset-top)+5.25rem)] pr-[max(1rem,env(safe-area-inset-right))] pb-14 sm:min-h-[min(78dvh,44rem)] sm:gap-10 sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:pt-[calc(env(safe-area-inset-top)+7rem)] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pb-24">
          <div className="space-y-2 sm:space-y-3">
            <h1
              id="hub-hero-heading"
              className="text-[clamp(1.375rem,5.2vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.5px] text-white sm:tracking-[-0.6px]"
            >
              {copy.title}
            </h1>
            <p className="max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-[19px]">
              {copy.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap [&_a]:w-full sm:[&_a]:w-auto">
            <ButtonLink
              href={aibLocaleHref(products.camera.path, locale)}
              size="sm"
              className="bg-white text-aib-fg hover:opacity-70 focus-visible:ring-offset-black/50 dark:bg-white dark:text-aib-fg"
            >
              AIB Camera
            </ButtonLink>
            <ButtonLink
              href={aibLocaleHref(products.sitac.path, locale)}
              size="sm"
              className="bg-black/45 text-white backdrop-blur-sm hover:opacity-70 focus-visible:ring-offset-black/50 dark:bg-black/45 dark:text-white"
            >
              AIB SITAC
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section
        className="bg-aib-surface dark:bg-aib-surface-dark"
        aria-labelledby="hub-products-heading"
      >
        <div className="max-w-2xl">
          <h2
            id="hub-products-heading"
            className="text-[26px] font-bold tracking-[-0.35px] text-aib-fg sm:text-[34px] dark:text-aib-fg-inverse"
          >
            {copy.productsTitle}
          </h2>
          <p className="mt-1.5 text-[15px] leading-relaxed text-aib-muted sm:mt-2 sm:text-[16px] dark:text-aib-muted-dark">
            {copy.productsLead}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
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

      <Section
        className="bg-aib-canvas dark:bg-aib-canvas-inverse"
        aria-labelledby="hub-principles-heading"
      >
        <div className="max-w-2xl">
          <h2
            id="hub-principles-heading"
            className="text-[26px] font-bold tracking-[-0.35px] text-aib-fg sm:text-[34px] dark:text-aib-fg-inverse"
          >
            {copy.principlesTitle}
          </h2>
          <p className="mt-1.5 text-[15px] leading-relaxed text-aib-muted sm:mt-2 sm:text-[16px] dark:text-aib-muted-dark">
            {copy.principlesLead}
          </p>
        </div>
        <ul className="mt-12 grid gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8">
          {copy.principles.map(item => (
            <li key={item.title}>
              <AppIcon
                name={item.icon}
                size={30}
                strokeWidth={1.75}
                className="text-aib-fg dark:text-aib-fg-inverse"
              />
              <h3 className="mt-4 text-[18px] font-semibold text-aib-fg sm:mt-5 sm:text-[20px] dark:text-aib-fg-inverse">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-snug text-aib-muted sm:text-[16px] dark:text-aib-muted-dark">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}

export default function HubPage(props: Props) {
  return (
    <div className="flex min-h-dvh flex-col bg-aib-canvas dark:bg-aib-canvas-inverse">
      <SkipLink />
      <SiteHeader overlay />
      <Suspense fallback={null}>
        <HubPageContent {...props} />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
