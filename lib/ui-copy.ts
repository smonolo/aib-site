import type { AibLocale } from '@/lib/locale'

export type UiCopy = {
  skipToContent: string
  productsNav: string
  languageAndTheme: string
  languageLabel: string
  languageSelect: string
  languagesAvailable: string
  themeLabel: string
  themeSelect: string
  themesAvailable: string
  themeSystem: string
  themeLight: string
  themeDark: string
  footerNav: string
  footerContacts: string
  footerUnaffiliated: string
  footerHome: string
  siteTagline: string
  siteDescription: string
  opensInNewTab: string
  cameraSubnav: string
  sitacSubnav: string
  hub: {
    metaTitle: string
    metaDescription: string
    title: string
    description: string
    productsTitle: string
    productsLead: string
    cameraBody: string
    sitacBody: string
    visitSite: string
    guide: string
    openApp: string
    principlesTitle: string
    principlesLead: string
    principles: {
      icon: 'devices' | 'shield' | 'document'
      title: string
      body: string
    }[]
    cameraHighlights: string[]
    sitacHighlights: string[]
    startTitle: string
    startLead: string
    guideCamera: string
    guideSitac: string
    privacyCamera: string
    privacySitac: string
  }
}

const it: UiCopy = {
  skipToContent: 'Vai al contenuto',
  productsNav: 'Prodotti AIB',
  languageAndTheme: 'Lingua e tema',
  languageLabel: 'Lingua',
  languageSelect: 'Seleziona lingua',
  languagesAvailable: 'Lingue disponibili',
  themeLabel: 'Tema',
  themeSelect: 'Seleziona tema',
  themesAvailable: 'Temi disponibili',
  themeSystem: 'Auto',
  themeLight: 'Chiaro',
  themeDark: 'Scuro',
  footerNav: 'Navigazione',
  footerContacts: 'Contatti',
  footerUnaffiliated: 'Non affiliato a enti pubblici.',
  footerHome: 'Home',
  siteTagline: 'Strumenti indipendenti per antincendio boschivo',
  siteDescription:
    'Fotocamera di campo e mappa tattica per antincendio boschivo: AIB Camera e AIB SITAC.',
  opensInNewTab: 'si apre in una nuova scheda',
  cameraSubnav: 'Navigazione secondaria AIB Camera',
  sitacSubnav: 'Navigazione secondaria AIB SITAC',
  hub: {
    metaTitle: 'AIB: strumenti indipendenti per antincendio boschivo',
    metaDescription:
      'Home degli strumenti AIB: AIB Camera e AIB SITAC per antincendio boschivo.',
    title: 'AIB: strumenti indipendenti per il campo',
    description:
      'Fotocamera di campo e mappa tattica per antincendio boschivo: AIB Camera e AIB SITAC.',
    productsTitle: 'I prodotti',
    productsLead:
      'Due strumenti della stessa famiglia: uno sul telefono, uno sul web.',
    cameraBody:
      'Fotocamera di campo con timbro su ogni scatto. Utile per documentare un incendio, condividere la foto o leggere le coordinate a chi risponde (es. 112).',
    sitacBody:
      'Mappa di situazione tattica condivisa: segni con timestamp, stanze con link e timeline per ripercorrere l’intervento.',
    visitSite: 'Vai al sito',
    guide: 'Guida',
    openApp: 'Apri l’app',
    principlesTitle: 'Come sono fatti',
    principlesLead:
      'Stessa famiglia di prodotto: token, interazioni e tono condivisi tra app mobile e web.',
    principles: [
      {
        icon: 'devices',
        title: 'Pensati per il campo',
        body: 'Funzionano su telefono e desktop, anche con rete scarsa. Priorità a chiarezza, velocità e uso in emergenza.',
      },
      {
        icon: 'shield',
        title: 'Sul dispositivo',
        body: 'Dati e scatti restano dove li crei quando possibile. Niente account obbligatori per le funzioni di base.',
      },
      {
        icon: 'document',
        title: 'Documentati',
        body: 'Guide, privacy e termini pubblici. Policy leggibili e aggiornate insieme alle app.',
      },
    ],
    cameraHighlights: [
      'Timbro data/ora/GPS sul JPEG',
      'Punto mirato stimato da distanza + bussola',
      'Galleria e registro scatti sul dispositivo',
      'Offline-first, senza account',
    ],
    sitacHighlights: [
      'Stanze condivise con link',
      'Segni con timestamp e timeline',
      'Password opzionale sulle stanze',
      'Export GeoJSON / PNG',
    ],
    startTitle: 'Da dove partire',
    startLead:
      'Guide e pagine legali sono sul sito marketing; le app non le duplicano.',
    guideCamera: 'Guida Camera',
    guideSitac: 'Guida SITAC',
    privacyCamera: 'Privacy Camera',
    privacySitac: 'Privacy SITAC',
  },
}

const en: UiCopy = {
  skipToContent: 'Skip to content',
  productsNav: 'AIB products',
  languageAndTheme: 'Language and theme',
  languageLabel: 'Language',
  languageSelect: 'Select language',
  languagesAvailable: 'Available languages',
  themeLabel: 'Theme',
  themeSelect: 'Select theme',
  themesAvailable: 'Available themes',
  themeSystem: 'Auto',
  themeLight: 'Light',
  themeDark: 'Dark',
  footerNav: 'Navigation',
  footerContacts: 'Contact',
  footerUnaffiliated: 'Not affiliated with public agencies.',
  footerHome: 'Home',
  siteTagline: 'Independent tools for wildfire response',
  siteDescription:
    'Field camera and tactical map for wildfire response: AIB Camera and AIB SITAC.',
  opensInNewTab: 'opens in a new tab',
  cameraSubnav: 'AIB Camera secondary navigation',
  sitacSubnav: 'AIB SITAC secondary navigation',
  hub: {
    metaTitle: 'AIB: independent tools for wildfire response',
    metaDescription:
      'Home of the AIB tools: AIB Camera and AIB SITAC for wildfire response.',
    title: 'AIB: independent tools for the field',
    description:
      'Field camera and tactical map for wildfire response: AIB Camera and AIB SITAC.',
    productsTitle: 'Products',
    productsLead:
      'Two tools in the same product family: one on the phone, one on the web.',
    cameraBody:
      'Field camera with a stamp on every shot. Useful to document a fire, share the photo, or read coordinates to responders (e.g. 112).',
    sitacBody:
      'Shared tactical situation map: marks with timestamps, linkable rooms, and a timeline to replay the incident.',
    visitSite: 'Visit site',
    guide: 'Guide',
    openApp: 'Open app',
    principlesTitle: 'How they’re built',
    principlesLead:
      'Same product family: shared tokens, interactions, and tone across mobile and web.',
    principles: [
      {
        icon: 'devices',
        title: 'Built for the field',
        body: 'Work on phone and desktop, even on poor networks. Priority on clarity, speed, and emergency use.',
      },
      {
        icon: 'shield',
        title: 'On device',
        body: 'Data and shots stay where you create them when possible. No required accounts for core features.',
      },
      {
        icon: 'document',
        title: 'Documented',
        body: 'Public guides, privacy, and terms. Policies you can read, kept in sync with the apps.',
      },
    ],
    cameraHighlights: [
      'Date/time/GPS stamp on the JPEG',
      'Aimed point estimated from distance + compass',
      'On-device gallery and capture log',
      'Offline-first, no account',
    ],
    sitacHighlights: [
      'Shared rooms via link',
      'Marks with timestamps and timeline',
      'Optional room password',
      'GeoJSON / PNG export',
    ],
    startTitle: 'Where to start',
    startLead:
      'Guides and legal pages live on the marketing site; the apps do not duplicate them.',
    guideCamera: 'Camera guide',
    guideSitac: 'SITAC guide',
    privacyCamera: 'Camera privacy',
    privacySitac: 'SITAC privacy',
  },
}

const catalogs: Record<AibLocale, UiCopy> = { it, en }

export function uiCopy(locale: AibLocale): UiCopy {
  return catalogs[locale] ?? catalogs.it
}
