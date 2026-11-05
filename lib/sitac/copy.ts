import type { AibLocale } from '@/lib/locale'

const it = {
  nav: {
    home: 'AIB SITAC',
    homeAria: 'AIB SITAC: home',
    guide: 'Guida',
    privacy: 'Privacy',
    terms: 'Termini',
    openApp: 'Apri l’app',
  },
  footer: {
    brand: 'AIB SITAC',
  },
  home: {
    title: 'AIB SITAC',
    description:
      'Mappa di situazione tattica per incendi boschivi: segni con timestamp, stanze condivise, timeline.',
    lead: 'Mappa di situazione tattica per incendi boschivi.',
    intro1:
      'Disegna simboli, aree e frecce su una mappa condivisa. Ogni segno ha un timestamp così puoi ripercorrere come si è evoluto lo scenario.',
    intro2:
      'Pensato per operatori sul campo; aperto a chiunque. Stanze con link, timeline e export GeoJSON / PNG.',
    featuresLabel: 'Cosa fa',
    features: [
      {
        title: 'Interventi condivisi',
        body: 'Crea una mappa, password opzionale (modificabile dalla sidebar); in home Cerca (ricerca + elenco) o Crea; link da condividere.',
      },
      {
        title: 'Segni con timestamp',
        body: 'Frecce, forme, testo e simboli tattici: storico append-only, con il nome del profilo su ogni aggiunta, spostamento o rimozione.',
      },
      {
        title: 'Scrubber della timeline',
        body: 'Ogni aggiunta, spostamento o rimozione è uno step (con chi l’ha fatto); ?step= nell’URL e in «Copia link»; export GeoJSON o PNG.',
      },
      {
        title: 'Aggiornamenti in tempo reale',
        body: 'Stanze aperte via SSE; stanze con password aggiornate con polling. Usabile su telefono e desktop; tema chiaro/scuro.',
      },
    ],
    appCta: 'Apri l’app',
    guideTitle: 'Guida',
    guideBody:
      'Come creare un intervento, usare cursore e simboli, navigare la timeline e condividere lo step.',
    guideLink: 'Leggi la guida',
    privacyTitle: 'Privacy',
    privacyBody:
      'Metadati, elenco pubblico in home (titolo / data / protetto; centro mappa redatti se protetta) e storico eventi nel database del prodotto. Niente account in v1: accesso = link + password opzionale (hash scrypt; header X-Passphrase). Tema e profilo in localStorage. Tile da HOT OSM. Guida/Privacy/Termini sul sito marketing.',
    privacyLink: 'Informativa privacy',
    termsTitle: 'Termini',
    termsBody:
      'Licenza, responsabilità e limiti d’uso. Non sostituisce i canali di emergenza.',
    termsLink: 'Termini di utilizzo',
    contactsTitle: 'Contatti',
  },
  guide: {
    title: 'AIB SITAC: Guida',
    description:
      'Come usare AIB SITAC: interventi, profilo, simboli, timeline, password ed export.',
    heading: 'Guida',
    lead: 'Guida operativa breve per sala, capisquadra e chiunque usi la mappa. L’interfaccia è in italiano; tema chiaro o scuro (predefinito: sistema).',
    sections: [
      {
        title: '1. Crea o apri un intervento',
        paragraphs: [
          'Dalla home (scheda centrata, senza navbar/footer) scegli **Cerca** per trovare e aprire un intervento esistente (ricerca per titolo, paginazione) oppure **Crea** per uno nuovo (titolo e password opzionale, minimo 4 caratteri se la imposti).',
          'In creazione, se il browser lo consente, la mappa può centrarsi sulla tua posizione; altrimenti usa il centro predefinito.',
          'Apri la stanza dal link o dall’elenco. Se è protetta, vedi la mappa (basemap) con un dialogo password obbligatorio: finché non sblocchi non partono richieste di dettaglio/eventi e gli strumenti restano disattivati. Dopo lo sblocco la password resta in sessionStorage del browser per quella stanza (si chiude con la sessione).',
        ],
      },
      {
        title: '2. Profilo (nome visualizzato)',
        paragraphs: [
          'In home: profilo in basso nella scheda (accanto a Informazioni e al controllo tema). Nella mappa: in fondo alla sidebar, profilo a sinistra e icona tema a destra.',
          'Imposta un nome (es. Sala / Caposquadra); è obbligatorio prima di aggiungere, spostare, modificare o rimuovere segni. Il nome resta in localStorage; quando disegni, sposti, modifichi o elimini un segno viene copiato sull’evento e compare nella timeline.',
        ],
      },
      {
        title: '3. Sidebar: info, segni e azioni',
        paragraphs: [
          'Nella vista mappa non ci sono navbar/footer del sito. Su desktop: sidebar a sinistra e mappa a destra. Su telefono: mappa a tutto schermo e menu (☰) in alto a sinistra che apre la stessa sidebar a cassetto; scegliendo uno strumento il menu si chiude.',
          'Nella sidebar: logo (torna alla home), titolo intervento (lucchetto se protetto), poi «Cursore» e simboli (Freccia / Forma / Testo e tattici non ufficiali). In modalità cursore, tocca un segno per selezionarlo; il tocco sul vuoto deseleziona.',
          'Sotto: impostazioni, «Esporta», «Informazioni» (su aib.smnl.dev/sitac). In fondo: profilo e icona tema. Rinomina/password solo in «Ora».',
        ],
      },
      {
        title: '4. Controlli flottanti in basso',
        paragraphs: [
          'Al centro in basso sulla mappa: nome del tool o del segno selezionato, icona info (apre una finestra con a cosa serve e come si usa), «Termina» / «Annulla» mentre disegni una freccia o una forma, e «Sposta» / «Modifica» / «Elimina» quando hai un segno selezionato («Sposta» = trascina, poi «Termina» per salvare o «Annulla»; «Modifica» = cambia il testo di un’etichetta; «Elimina» con conferma; solo in «Ora», non mentre scrubbi la timeline).',
        ],
      },
      {
        title: '5. Timeline flottante in alto',
        paragraphs: [
          'In alto sulla mappa (su telefono può andare su due righe): ogni aggiunta, spostamento, modifica testo o rimozione è uno step automatico. Usa lo slider, ← →, o «« / »» per inizio/fine (live). Lo step corrente va in ?step= nell’URL; «Copia link» include lo step se stai scrubbando.',
        ],
      },
      {
        title: '6. Collaborazione e password',
        paragraphs: [
          'Stanze senza password: chiunque col link può vedere e modificare; aggiornamenti live via SSE. Se viene aggiunta una password, le connessioni live si chiudono e serve sbloccare.',
          'Stanze con password: la mappa si apre in sola lettura con dialogo password non chiudibile; serve la password per caricare i dati, leggere eventi e modificare; gli aggiornamenti arrivano con polling. Non mettere la password nell’URL.',
        ],
      },
      {
        title: '7. Limiti e buon uso',
        paragraphs: [
          'I segni possono essere stimati o incompleti: usali con giudizio operativo. Non presentare la mappa come prodotto ufficiale.',
          'Per dettagli su dati e condizioni d’uso vedi Privacy e Termini.',
        ],
      },
    ],
    openApp: 'Apri l’app',
    seeAlsoBefore: 'Vedi anche',
    seeAlsoAnd: 'e',
  },
  privacy: {
    title: 'Privacy: AIB SITAC',
    description:
      'Informativa privacy di AIB SITAC: dati in database, niente account, password opzionale.',
    heading: 'Privacy',
    updated: 'Ultimo aggiornamento: 29 ottobre 2026',
    intro:
      'AIB SITAC è uno strumento per mappe di situazione tattica su incendi boschivi: stanze condivise, segni con timestamp e timeline.',
    summaryTitle: 'In sintesi',
    summary: [
      'Metadati dell’intervento e lo storico eventi (segni) sono salvati nel database PostgreSQL del prodotto quando crei o apri una stanza.',
      'L’elenco interventi in home (e l’API di elenco) è pubblico: per ogni stanza compaiono titolo, data di creazione (Europe/Rome), eventuale creatore e se è protetta da password; centro mappa e zoom delle stanze protette non sono esposti nell’elenco. Aprire o vedere i segni resta vincolato al link e, se impostata, alla password.',
      'Niente account in v1: l’accesso è il link dell’intervento e, se impostata, la password.',
      'Nessun SDK analytics incluso di default.',
      'Il nome visualizzato (profilo in home o in mappa) resta in localStorage del browser; alla creazione di un intervento può essere salvato come creatore (createdBy), e quando aggiungi, sposti, modifichi o rimuovi un segno viene copiato sull’evento come actorLabel.',
      'La preferenza di tema (sistema / chiaro / scuro) resta in localStorage se la cambi dal predefinito (sistema).',
      'Le tile della mappa arrivano da server HOT OSM / openstreetmap.fr, che possono vedere IP e coordinate delle tile richieste.',
      'Guida, Privacy e Termini dall’app si aprono sul sito aib.smnl.dev/sitac (niente copie in-app).',
    ],
    dataTitle: 'Dati trattati',
    colData: 'Dato',
    colWhere: 'Dove',
    colWhy: 'Perché',
    dataRows: [
      {
        data: 'Titolo, data creazione, eventuale creatore, indicatore «protetto» (elenco home / API)',
        where: 'Database (+ risposta API pubblica)',
        why: 'Ricerca e apertura stanze dalla home',
      },
      {
        data: 'Centro mappa e zoom iniziale',
        where: 'Database (solo dopo sblocco)',
        why: 'Aprire la stanza al centro giusto; redatti nell’elenco pubblico se protetta',
      },
      {
        data: 'Hash della password (opzionale)',
        where: 'Database',
        why: 'Proteggere lettura/modifica',
      },
      {
        data: 'Eventi mappa (geometrie, simboli, note, timestamp, nome attore)',
        where: 'Database',
        why: 'SITAC collaborativa e timeline',
      },
      {
        data: 'Nome visualizzato (profilo locale)',
        where: 'localStorage del browser',
        why: 'Creatore su nuovi interventi + etichetta sugli eventi',
      },
      {
        data: 'Preferenza tema (sistema / chiaro / scuro)',
        where: 'localStorage del browser',
        why: 'Ricordare il tema UI',
      },
      {
        data: 'Richieste tile mappa (zoom/x/y)',
        where: 'Server tile HOT OSM',
        why: 'Disegnare lo sfondo mappa',
      },
      {
        data: 'Password stanza (dopo lo sblocco)',
        where: 'sessionStorage del browser',
        why: 'Riaprire la stanza nella stessa sessione',
      },
    ],
    accessTitle: 'Accesso e password',
    access: [
      'Stanze aperte (senza password): chiunque col link può vedere e modificare; aggiornamenti live via Server-Sent Events. Se viene aggiunta una password, le connessioni live aperte vengono chiuse e serve sbloccare di nuovo.',
      'Stanze protette: l’UI chiede solo se la stanza è protetta (stesso flag dell’elenco home), poi mostra la shell mappa con dialogo password obbligatorio e non fa altre richieste (dettaglio, eventi, SSE) finché non sblocchi; ogni lettura/scrittura richiede la password solo come header HTTP X-Passphrase (mai nell’URL). L’API conserva un hash scrypt salato e limita i tentativi errati. Cambiare o togliere la password disconnette gli ascoltatori live di quella stanza.',
      'Dopo lo sblocco, la password resta in sessionStorage del browser per quella stanza (si chiude con la sessione); non viene messa nell’URL.',
      'Il nome profilo resta in localStorage; alla creazione può diventare createdBy, sugli eventi compare come actorLabel. La preferenza tema resta in localStorage (chiave aib-sitac-theme) se impostata.',
    ],
    shareTitle: 'Condivisioni ed export',
    shareBody:
      'Export GeoJSON / PNG e link condivisi escono dall’app secondo le regole degli strumenti in cui li salvi o inoltri (chat, email, file).',
    contactTitle: 'Contatto',
  },
  terms: {
    title: 'Termini: AIB SITAC',
    description:
      'Termini di utilizzo di AIB SITAC: strumento non ufficiale, licenza, uso responsabile.',
    heading: 'Termini di utilizzo',
    updated: 'Ultimo aggiornamento: 29 ottobre 2026',
    intro:
      'AIB SITAC è uno strumento di volontariato non ufficiale per la mappa tattica di incendi boschivi. Non sostituisce i numeri di emergenza, i canali ufficiali né i sistemi istituzionali.',
    items: [
      'Lo usi con giudizio operativo: i segni possono essere stimati, incompleti o non aggiornati.',
      'Non presentarlo (né le mappe) come prodotto ufficiale di autorità pubbliche.',
      'Il codice è sotto PolyForm Noncommercial 1.0.0; nome e asset di brand non sono concessi per riuso in altri prodotti.',
      'Il servizio può cambiare, interrompersi o essere ritirato senza preavviso.',
      'Non abusare dell’API (scraping automatico, spam di stanze, tentativi di forzare la password).',
    ],
    contactTitle: 'Contatto',
  },
}

const en = {
  nav: {
    home: 'AIB SITAC',
    homeAria: 'AIB SITAC: home',
    guide: 'Guide',
    privacy: 'Privacy',
    terms: 'Terms',
    openApp: 'Open the app',
  },
  footer: {
    brand: 'AIB SITAC',
  },
  home: {
    title: 'AIB SITAC',
    description:
      'Tactical situation map for wildfires: timestamped marks, shared rooms, timeline.',
    lead: 'Tactical situation map for wildfires.',
    intro1:
      'Draw symbols, areas, and arrows on a shared map. Every mark is timestamped so you can replay how the scenario evolved.',
    intro2:
      'Built for field operators; open to anyone. Rooms with shareable links, timeline, and GeoJSON / PNG export.',
    featuresLabel: 'What it does',
    features: [
      {
        title: 'Shared incidents',
        body: 'Create a map with an optional password (changeable from the sidebar); on home use Search (find + list) or Create; share the link.',
      },
      {
        title: 'Timestamped marks',
        body: 'Arrows, shapes, text, and tactical symbols: append-only history, with your profile name on every add, move, or remove.',
      },
      {
        title: 'Timeline scrubber',
        body: 'Every add, move, or remove is a step (with who did it); ?step= in the URL and in “Copy link”; GeoJSON or PNG export.',
      },
      {
        title: 'Live updates',
        body: 'Open rooms via SSE; password-protected rooms update with polling. Works on phone and desktop; light/dark theme.',
      },
    ],
    appCta: 'Open the app',
    guideTitle: 'Guide',
    guideBody:
      'How to create an incident, use the cursor and symbols, navigate the timeline, and share a step.',
    guideLink: 'Read the guide',
    privacyTitle: 'Privacy',
    privacyBody:
      'Metadata, public home list (title / date / protected; map center redacted when protected) and event history in the product database. No accounts in v1: access = link + optional password (scrypt hash; X-Passphrase header). Theme and profile in localStorage. Tiles from HOT OSM. Guide/Privacy/Terms on the marketing site.',
    privacyLink: 'Privacy policy',
    termsTitle: 'Terms',
    termsBody:
      'License, liability, and use limits. Does not replace emergency channels.',
    termsLink: 'Terms of use',
    contactsTitle: 'Contact',
  },
  guide: {
    title: 'AIB SITAC: Guide',
    description:
      'How to use AIB SITAC: incidents, profile, symbols, timeline, password, and export.',
    heading: 'Guide',
    lead: 'Short operational guide for dispatch, crew leaders, and anyone using the map. The app UI is in Italian; light or dark theme (default: system).',
    sections: [
      {
        title: '1. Create or open an incident',
        paragraphs: [
          'From home (centered card, no site navbar/footer) choose **Search** to find and open an existing incident (search by title, pagination) or **Create** for a new one (title and optional password, minimum 4 characters if you set one).',
          'When creating, if the browser allows it, the map may center on your location; otherwise it uses the default center.',
          'Open the room from the link or the list. If it is protected, you see the map (basemap) with a required password dialog: until you unlock, detail/event requests do not run and tools stay disabled. After unlock, the password stays in the browser’s sessionStorage for that room (cleared when the session ends).',
        ],
      },
      {
        title: '2. Profile (display name)',
        paragraphs: [
          'On home: profile at the bottom of the card (next to Information and the theme control). In the map: at the bottom of the sidebar, profile on the left and theme icon on the right.',
          'Set a name (e.g. Dispatch / Crew lead); it is required before you add, move, edit, or remove marks. The name stays in localStorage; when you draw, move, edit, or delete a mark it is copied onto the event and shown on the timeline.',
        ],
      },
      {
        title: '3. Sidebar: info, marks, and actions',
        paragraphs: [
          'In map view there is no site navbar/footer. On desktop: sidebar on the left and map on the right. On phone: full-screen map and a menu (☰) top left that opens the same drawer sidebar; choosing a tool closes the menu.',
          'In the sidebar: logo (back to home), incident title (lock if protected), then “Cursor” and symbols (Arrow / Shape / Text and unofficial tactical icons). In cursor mode, tap a mark to select it; tap empty space to deselect.',
          'Below: settings, “Export”, “Information” (on aib.smnl.dev/sitac). At the bottom: profile and theme icon. Rename/password only in “Now”.',
        ],
      },
      {
        title: '4. Floating controls at the bottom',
        paragraphs: [
          'Center bottom on the map: name of the tool or selected mark, info icon (opens a window explaining what it does and how to use it), “Finish” / “Cancel” while drawing an arrow or shape, and “Move” / “Edit” / “Delete” when a mark is selected (“Move” = drag, then “Finish” to save or “Cancel”; “Edit” = change label text; “Delete” with confirmation; only in “Now”, not while scrubbing the timeline).',
        ],
      },
      {
        title: '5. Floating timeline at the top',
        paragraphs: [
          'Top of the map (may wrap on two lines on phone): every add, move, text edit, or remove is an automatic step. Use the slider, ← →, or “« / »” for start/end (live). The current step goes in ?step= in the URL; “Copy link” includes the step if you are scrubbing.',
        ],
      },
      {
        title: '6. Collaboration and password',
        paragraphs: [
          'Rooms without a password: anyone with the link can view and edit; live updates via SSE. If a password is added, live connections close and you must unlock again.',
          'Password-protected rooms: the map opens read-only with a non-dismissable password dialog; the password is required to load data, read events, and edit; updates arrive via polling. Do not put the password in the URL.',
        ],
      },
      {
        title: '7. Limits and good practice',
        paragraphs: [
          'Marks may be estimated or incomplete: use them with operational judgment. Do not present the map as an official product.',
          'For details on data and conditions of use, see Privacy and Terms.',
        ],
      },
    ],
    openApp: 'Open the app',
    seeAlsoBefore: 'See also',
    seeAlsoAnd: 'and',
  },
  privacy: {
    title: 'Privacy: AIB SITAC',
    description:
      'AIB SITAC privacy policy: data in the database, no accounts, optional password.',
    heading: 'Privacy',
    updated: 'Last updated: 29 October 2026',
    intro:
      'AIB SITAC is a tool for tactical situation maps on wildfires: shared rooms, timestamped marks, and a timeline.',
    summaryTitle: 'In brief',
    summary: [
      'Incident metadata and event history (marks) are stored in the product PostgreSQL database when you create or open a room.',
      'The incident list on home (and the list API) is public: for each room you see title, creation date (Europe/Rome), optional creator, and whether it is password-protected; map center and zoom for protected rooms are not exposed in the list. Opening or viewing marks still requires the link and, if set, the password.',
      'No accounts in v1: access is the incident link and, if set, the password.',
      'No analytics SDK included by default.',
      'The display name (profile on home or in the map) stays in the browser’s localStorage; when creating an incident it may be saved as creator (createdBy), and when you add, move, edit, or remove a mark it is copied onto the event as actorLabel.',
      'Theme preference (system / light / dark) stays in localStorage if you change it from the default (system).',
      'Map tiles come from HOT OSM / openstreetmap.fr servers, which may see your IP and the coordinates of requested tiles.',
      'Guide, Privacy, and Terms from the app open on aib.smnl.dev/sitac (no in-app copies).',
    ],
    dataTitle: 'Data processed',
    colData: 'Data',
    colWhere: 'Where',
    colWhy: 'Why',
    dataRows: [
      {
        data: 'Title, creation date, optional creator, “protected” indicator (home list / API)',
        where: 'Database (+ public API response)',
        why: 'Search and open rooms from home',
      },
      {
        data: 'Map center and initial zoom',
        where: 'Database (only after unlock)',
        why: 'Open the room at the right center; redacted in the public list if protected',
      },
      {
        data: 'Password hash (optional)',
        where: 'Database',
        why: 'Protect read/write access',
      },
      {
        data: 'Map events (geometries, symbols, notes, timestamps, actor name)',
        where: 'Database',
        why: 'Collaborative SITAC and timeline',
      },
      {
        data: 'Display name (local profile)',
        where: 'Browser localStorage',
        why: 'Creator on new incidents + label on events',
      },
      {
        data: 'Theme preference (system / light / dark)',
        where: 'Browser localStorage',
        why: 'Remember UI theme',
      },
      {
        data: 'Map tile requests (zoom/x/y)',
        where: 'HOT OSM tile server',
        why: 'Draw the map background',
      },
      {
        data: 'Room password (after unlock)',
        where: 'Browser sessionStorage',
        why: 'Reopen the room in the same session',
      },
    ],
    accessTitle: 'Access and password',
    access: [
      'Open rooms (no password): anyone with the link can view and edit; live updates via Server-Sent Events. If a password is added, open live connections are closed and you must unlock again.',
      'Protected rooms: the UI only checks whether the room is protected (same flag as the home list), then shows the map shell with a required password dialog and makes no other requests (detail, events, SSE) until you unlock; every read/write sends the password only as the HTTP X-Passphrase header (never in the URL). The API stores a salted scrypt hash and limits failed attempts. Changing or removing the password disconnects live listeners for that room.',
      'After unlock, the password stays in the browser’s sessionStorage for that room (cleared when the session ends); it is not put in the URL.',
      'The profile name stays in localStorage; on creation it may become createdBy, on events it appears as actorLabel. Theme preference stays in localStorage (key aib-sitac-theme) if set.',
    ],
    shareTitle: 'Sharing and export',
    shareBody:
      'GeoJSON / PNG export and shared links leave the app under the rules of whatever tools you save or forward them to (chat, email, files).',
    contactTitle: 'Contact',
  },
  terms: {
    title: 'Terms: AIB SITAC',
    description:
      'AIB SITAC terms of use: unofficial tool, license, responsible use.',
    heading: 'Terms of use',
    updated: 'Last updated: 29 October 2026',
    intro:
      'AIB SITAC is an unofficial volunteer tool for wildfire tactical mapping. It does not replace emergency numbers, official channels, or institutional systems.',
    items: [
      'Use it with operational judgment: marks may be estimated, incomplete, or out of date.',
      'Do not present it (or the maps) as an official product of public authorities.',
      'The code is under PolyForm Noncommercial 1.0.0; the name and brand assets are not licensed for reuse in other products.',
      'The service may change, stop, or be withdrawn without notice.',
      'Do not abuse the API (automated scraping, room spam, password-guessing attempts).',
    ],
    contactTitle: 'Contact',
  },
}

export type SitacCopy = typeof it

export function aibSitacCopy(locale: AibLocale): SitacCopy {
  return locale === 'en' ? en : it
}
