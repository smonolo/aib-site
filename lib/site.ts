export const SITE_ORIGIN = 'https://aib.smnl.dev'
export const DEVELOPER_ORIGIN = 'https://smnl.dev'
export const CONTACT_EMAIL = 'stefano@smnl.dev'
export const SITAC_APP_URL = 'https://aib-sitac.smnl.dev'
export const GITHUB_ORG = 'https://github.com/smonolo'

export const site = {
  name: 'AIB',
  tagline: 'Strumenti indipendenti per antincendio boschivo',
  description:
    'Fotocamera di campo e mappa tattica per antincendio boschivo: AIB Camera e AIB SITAC.',
  copyrightYear: 2026,
  email: {
    display: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  credits: {
    author: {
      name: 'Stefano Monolo',
      href: DEVELOPER_ORIGIN,
    },
    repository: {
      label: 'GitHub',
      href: `${GITHUB_ORG}/aib-site`,
    },
    license: {
      label: 'PolyForm Noncommercial 1.0.0',
      href: `${GITHUB_ORG}/aib-site/blob/main/LICENSE`,
    },
  },
} as const

export const products = {
  camera: {
    slug: 'camera',
    path: '/camera',
    name: 'AIB Camera',
    repo: `${GITHUB_ORG}/aib-camera`,
  },
  sitac: {
    slug: 'sitac',
    path: '/sitac',
    name: 'AIB SITAC',
    appUrl: SITAC_APP_URL,
    repo: `${GITHUB_ORG}/aib-sitac`,
  },
} as const

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`
}
