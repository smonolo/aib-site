import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { DocumentLang } from '@/components/layout/document-lang'
import { themeBootScript } from '@/lib/theme'
import { SITE_ORIGIN } from '@/lib/site'
import { cn } from '@/lib/utils'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: 'AIB. Strumenti per il campo.',
    template: '%s · AIB',
  },
  description:
    'AIB Camera e AIB SITAC: fotocamera di campo e mappa tattica per antincendio boschivo.',
  authors: [{ name: 'Stefano Monolo', url: 'https://smnl.dev' }],
  creator: 'Stefano Monolo',
  icons: {
    icon: '/camera/favicon.png',
    apple: '/camera/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'AIB',
    url: SITE_ORIGIN,
    images: [{ url: '/camera/icon.png' }],
  },
  twitter: {
    card: 'summary',
    site: '@stmonolo',
    creator: '@stmonolo',
    images: ['/camera/icon.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F5' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={cn(
        geistSans.variable,
        geistMono.variable,
        'h-full font-sans antialiased'
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-aib-canvas text-aib-fg antialiased dark:bg-aib-canvas-inverse dark:text-aib-fg-inverse">
        <DocumentLang />
        {children}
      </body>
    </html>
  )
}
