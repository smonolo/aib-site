import type { AibLocale } from '@/lib/camera/locale'

type Feature = { title: string; body: string }
type DataRow = { data: string; where: string; why: string }

export type AibCopy = {
  nav: {
    homeAria: string
    guide: string
    changelog: string
    privacy: string
    terms: string
    langIt: string
    langEn: string
    langSwitchAria: string
  }
  footer: {
    brand: string
  }
  home: {
    title: string
    description: string
    lead: string
    intro1: string
    intro2Html: string
    featuresLabel: string
    features: Feature[]
    guideTitle: string
    guideBodyHtml: string
    guideLink: string
    guideOr: string
    guidePdf: string
    privacyTitle: string
    privacyBodyHtml: string
    contactsTitle: string
    contactsBodyHtml: string
  }
  guide: {
    title: string
    description: string
    heading: string
    leadHtml: string
    downloadPdf: string
    openPdf: string
    pdfHref: string
    pdfFilename: string
  }
  changelog: {
    title: string
    description: string
    heading: string
    leadHtml: string
  }
  privacy: {
    title: string
    description: string
    heading: string
    updated: string
    intro1Html: string
    intro2: string
    summaryTitle: string
    summary: string[]
    dataTitle: string
    colData: string
    colWhere: string
    colWhy: string
    dataRows: DataRow[]
    logTitle: string
    logBodyHtml: string
    exifTitle: string
    exifBodyHtml: string
    noBackendHtml: string
    permissionsTitle: string
    permissions: string[]
    shareTitle: string
    shareBody: string
    minorsTitle: string
    minorsBody: string
    changesTitle: string
    changesBody: string
    contactsTitle: string
    contactsBodyHtml: string
    contactsMailHtml: string
  }
  terms: {
    title: string
    description: string
    heading: string
    updated: string
    intro1Html: string
    intro2Html: string
    whoTitle: string
    whoBodyHtml: string
    purposeTitle: string
    purposeBodyHtml: string
    allowedTitle: string
    allowed: string[]
    aimTitle: string
    aimBodyHtml: string
    asIsTitle: string
    asIsBody1Html: string
    asIsBody2Html: string
    liabilityTitle: string
    liabilityBody: string
    privacyTitle: string
    privacyBodyHtml: string
    ipTitle: string
    ipBody: string
    updatesTitle: string
    updatesBody: string
    contactsTitle: string
    contactsBodyHtml: string
    contactsMailHtml: string
  }
}

const it: AibCopy = {
  nav: {
    homeAria: 'AIB Camera: home',
    guide: 'Guida',
    changelog: 'Novità',
    privacy: 'Privacy',
    terms: 'Termini',
    langIt: 'IT',
    langEn: 'EN',
    langSwitchAria: 'Seleziona lingua',
  },
  footer: {
    brand: 'AIB Camera',
  },
  home: {
    title: 'AIB Camera',
    description:
      'Fotocamera di campo indipendente per chiunque: foto e video geolocalizzati di incendi boschivi (AIB) con timbro data/ora/GPS/luogo, ID EXIF e registro scatti sul dispositivo. Aperta al pubblico, offline, senza account.',
    lead: 'Fotografia di campo per chiunque: anteprima e timbro di data, ora, GPS e luogo su ogni foto o video, con ID locale per i controlli successivi.',
    intro1:
      'AIB Camera è una piccola app mobile per scattare foto e video brevi geolocalizzati timbrati in contesto di antincendio boschivo (AIB) o situazioni simili: quando serve documentare un incendio, condividere lo scatto (WhatsApp, Telegram, Mail, …) oppure leggere coordinate e altri dettagli a chi risponde all’emergenza (ad es. 112), anche senza rete affidabile.',
    intro2Html:
      'Aperta a chiunque: cittadini, volontari o operatori. Offline-first, senza account; creata da un volontario e disponibile al pubblico.',
    featuresLabel: 'Cosa fa',
    features: [
      {
        title: 'Mirino 4:3 e timbro live',
        body: 'Mirino con bande nere in verticale e orizzontale: in verticale flash, punta e timbro in alto, zoom e scatto in basso; commutatore Foto / Video; in orizzontale i controlli passano ai lati. Sul mirino compare lo stesso timbro che verrà bruciato sulla foto o sul video.',
      },
      {
        title: 'Punto mirato',
        body: 'Stesso foglio Punta da Fotocamera (mirino o pressione lunga) o Mappa (icona in alto). Indica la distanza (preset 1 / 2 / 5 / 10 km o metri liberi con suffisso m) e blocca le coordinate stimate da GPS + bussola. Alterna Qui ↔ Mirato; sulla mappa puoi trascinare il pin rosso per aggiornare punto e metri. Sul timbro compare «Punto mirato (stimato)».',
      },
      {
        title: 'Timbro su JPEG e video',
        body: 'Data, ora (Europe/Rome), coordinate (formato N/E, decimali o GMS), altitudine, direzione, vento (se online), luogo e testo personalizzato opzionale stampati sulla foto o, dopo lo stop, sul video (fino a 60 s; microfono opzionale).',
      },
      {
        title: 'Scatto e registrazione rapidi',
        body: 'Puoi scattare in sequenza senza aspettare l’elaborazione del timbro; i video si elaborano dopo lo stop. Per la posizione si usa il fix live (o il punto mirato bloccato) quando disponibile.',
      },
      {
        title: 'EXIF per le macchine',
        body: 'Dopo il timbro l’app scrive Software, ImageUniqueID (UUID), tag GPS e un UserComment JSON quando la build nativa lo supporta.',
      },
      {
        title: 'Scheda Mappa',
        body: 'Mappa alta del punto effettivo con timbro live come in Fotocamera; pallino blu su Qui, pin rosso trascinabile sul Mirato; Leaflet/OpenStreetMap su iOS e Android; stesso foglio Punta; copia, apertura nelle Mappe di sistema, salva mappa come foto timbrata in galleria.',
      },
      {
        title: 'Galleria in-app',
        body: 'Foto e video restano nell’app come fonte di verità. Dal visualizzatore scorri (swipe o filmstrip), riproduci i video, condividi o elimina. Album Foto «AIB Camera» opzionale; eliminando dall’app si rimuove anche quella copia quando possibile.',
      },
      {
        title: 'Registro scatti',
        body: 'Ogni scatto ha un ID locale, data e coordinate. Da Impostazioni vedi versione e ID installazione (tocca per copiare) ed esporti il registro in CSV con install_id: anche dopo aver eliminato foto o video dalla galleria.',
      },
      {
        title: 'Funziona offline',
        body: 'Scatto, video, timbro, galleria, registro scatti e condivisione senza rete. GPS, etichette di luogo e vento (Open-Meteo) sono opzionali e in cache. Su dispositivi limitati (niente EXIF, overlay video, album Foto, font o vibrazione) l’app continua comunque a salvare.',
      },
      {
        title: 'Tutto sul dispositivo',
        body: 'Nessun account, nessun SDK di analytics, nessuna sincronizzazione cloud. Foto, video, impostazioni e registro restano sul dispositivo.',
      },
      {
        title: 'Pronto per l’emergenza',
        body: 'La fotocamera è obbligatoria; posizione e microfono no. Scatto e video restano utilizzabili anche senza fix GPS o audio.',
      },
    ],
    guideTitle: 'Guida operativa',
    guideBodyHtml:
      'Guida per l’uso sul campo: permessi, fotocamera, video, timbro, galleria, registro scatti, limiti e checklist. Leggibile sul web e stampabile in PDF.',
    guideLink: 'Apri la guida',
    guideOr: 'oppure scarica',
    guidePdf: 'guida-operativa.pdf',
    privacyTitle: 'Privacy e termini',
    privacyBodyHtml:
      'Foto, video, impostazioni, registro scatti e posizione restano sul dispositivo. Leggi l’ <a data-aib="privacy">informativa privacy</a> e i <a data-aib="terms">termini di utilizzo</a>.',
    contactsTitle: 'Contatti',
    contactsBodyHtml:
      'Domande sull’app: <a href="mailto:stefano@smnl.dev">stefano@smnl.dev</a>.',
  },
  guide: {
    title: 'Guida operativa: AIB Camera',
    description:
      'Guida operativa in italiano di AIB Camera: permessi, fotocamera, timbro, galleria, registro scatti, limiti e checklist sul campo. Leggibile nel browser e scaricabile in PDF.',
    heading: 'Guida operativa',
    leadHtml:
      'Come funziona AIB Camera sul campo: permessi, scatto, video, timbro, galleria e registro scatti. Versione di riferimento <strong>1.3.0</strong>.',
    downloadPdf: 'Scarica PDF',
    openPdf: 'Apri PDF',
    pdfHref: '/docs/aib-camera-guida-operativa.pdf',
    pdfFilename: 'aib-camera-guida-operativa.pdf',
  },
  changelog: {
    title: 'Novità: AIB Camera',
    description:
      'Registro delle versioni di AIB Camera: cosa è cambiato in ogni rilascio, dalla 1.0.0 alla versione corrente.',
    heading: 'Novità',
    leadHtml:
      'Cosa è cambiato in ogni versione rilasciata. Versione corrente <strong>1.3.0</strong>.',
  },
  privacy: {
    title: 'Informativa privacy: AIB Camera',
    description:
      'Informativa privacy di AIB Camera: app aperta a chiunque. Fotografia di campo sul dispositivo; foto, impostazioni, registro scatti e posizione restano sul telefono.',
    heading: 'Informativa privacy: AIB Camera',
    updated: 'Ultimo aggiornamento: 8 novembre 2026',
    intro1Html:
      'AIB Camera è un’app mobile per la fotografia di campo nell’antincendio boschivo (AIB) e situazioni simili. È aperta a chiunque: utile per scattare foto e video brevi geolocalizzati timbrati, condividerli (WhatsApp, Telegram, …) o leggere coordinate a chi risponde all’emergenza (ad es. 112).',
    intro2:
      'Questa informativa descrive come l’app tratta i dati sul dispositivo.',
    summaryTitle: 'In sintesi',
    summary: [
      'L’app è <strong>offline-first</strong>. Foto, video, impostazioni, galleria in-app e registro scatti restano sul dispositivo.',
      'Non c’è <strong>account</strong>, <strong>SDK di analytics</strong> né <strong>sincronizzazione cloud</strong> gestita dallo sviluppatore.',
      'La <strong>fotocamera</strong> è necessaria per foto e video.',
      'Il <strong>microfono</strong> è opzionale e serve solo all’audio dei video; se negato i video restano muti.',
      'La <strong>posizione</strong> è opzionale e serve a stampare coordinate, altitudine, direzione, vento (se disponibile) e luogo su foto o video, a mostrarli nella scheda <strong>Mappa</strong>, e a scrivere i campi GPS corrispondenti nell’EXIF JPEG o nei metadati video quando possibile. Puoi anche bloccare un <strong>punto mirato</strong> (GPS + bussola + distanza inserita): le coordinate stimate possono sostituire la tua posizione sul timbro e sulla mappa finché non le cancelli.',
      'L’accesso alla <strong>libreria Foto</strong> è opzionale (chiesto subito dopo la fotocamera, come la posizione) e serve a salvare foto e video timbrati nell’album «AIB Camera» e a rimuovere quelle copie quando elimini gli elementi dall’app.',
      'La rete serve per la <strong>geocodifica inversa opzionale</strong> (da GPS a etichetta di luogo), per il <strong>vento attuale opzionale</strong> sul punto del timbro (Open-Meteo: velocità e direzione; in cache sul dispositivo; omesso offline; lo scatto non attende la richiesta) e per i <strong>tile della mappa</strong> (OpenStreetMap HOT via Leaflet su iOS e Android, senza Google Maps) quando apri la scheda Mappa. Etichette di luogo e campioni di vento vicini possono restare in cache per riuso offline. Copiare le coordinate o aprire un link mappe non richiede i tile. Salvare la mappa come foto cattura la vista sullo schermo e applica il timbro sul dispositivo.',
    ],
    dataTitle: 'Dati trattati dall’app',
    colData: 'Dato',
    colWhere: 'Dove resta',
    colWhy: 'Perché',
    dataRows: [
      {
        data: 'Immagine / video dalla fotocamera',
        where: 'Sul dispositivo (archivio app; opzionalmente Libreria Foto)',
        why: 'Scattare e condividere foto e video di campo timbrati',
      },
      {
        data: 'Audio microfono (solo video)',
        where: 'Sul dispositivo dentro l’MP4 se il microfono è consentito',
        why: 'Suono opzionale con i video di campo',
      },
      {
        data: 'Data e ora',
        where:
          'Stampate sul JPEG/MP4 (Europe/Rome); anche EXIF DateTime sulle foto',
        why: 'Contesto operativo sullo scatto',
      },
      {
        data: 'Coordinate GPS, precisione, altitudine, direzione',
        where:
          'Sul dispositivo; sul timbro / EXIF o metadati video se disponibili',
        why: 'Contesto di posizione sullo scatto',
      },
      {
        data: 'Stima punto mirato (distanza + direzione)',
        where:
          'Sul dispositivo (punto sticky di sessione); può comparire su timbro / registro / EXIF GPS',
        why: 'Coordinate di ciò a cui stai puntando, non solo della tua posizione',
      },
      {
        data: 'Vento attuale (velocità, direzione)',
        where:
          'Sul dispositivo; lookup Open-Meteo opzionale con lat/lon; cache locale; solo sul timbro',
        why: 'Contesto meteo sulla foto / mappa',
      },
      {
        data: 'Etichetta di luogo (geocodifica inversa)',
        where:
          'Sul dispositivo; lookup di rete opzionale; cache locale; può comparire in EXIF',
        why: 'Luogo leggibile sul timbro',
      },
      {
        data: 'ID scatto (UUID)',
        where:
          'Sul dispositivo (registro scatti); EXIF ImageUniqueID / UserComment JSON',
        why: 'Identificare le foto scattate con questa app',
      },
      {
        data: 'ID installazione (UUID)',
        where:
          'Sul dispositivo (archivio locale); Impostazioni (tocca per copiare); esportazione CSV',
        why: 'Collegare i CSV del registro scatti a una specifica installazione',
      },
      {
        data: 'Testo personalizzato del timbro',
        where:
          'Sul dispositivo (impostazioni); può comparire in EXIF description / comment',
        why: 'Note opzionali sulla foto',
      },
      {
        data: 'Impostazioni dell’app',
        where: 'Sul dispositivo (archivio locale)',
        why: 'Ricordare le preferenze del timbro e la lingua dell’interfaccia',
      },
      {
        data: 'Vista mappa (opzionale)',
        where:
          'Solo sul dispositivo; tile OpenStreetMap HOT via Leaflet quando online',
        why: 'Mostrare il punto effettivo; copiare le coordinate; salvare la mappa come foto locale',
      },
    ],
    logTitle: 'Registro scatti',
    logBodyHtml:
      'Ogni scatto riuscito viene registrato in un <strong>registro scatti</strong> locale (ID, data/ora e coordinate se disponibili). Il registro resta sul dispositivo anche se elimini la foto dalla galleria in-app o dall’album di sistema. Non viene caricato online. Puoi aprirlo da Impostazioni, copiare un ID per confrontarlo con l’EXIF di un JPEG condiviso, oppure esportare tutto in CSV tramite il foglio di condivisione di sistema. Ogni installazione dell’app ha anche un <strong>ID installazione</strong> (UUID) locale, visibile in Impostazioni. Lì puoi toccare <strong>Versione</strong> o <strong>ID installazione</strong> per copiare il valore. L’ID installazione è scritto nella colonna <code data-aib="code">install_id</code> dei CSV, così i registri di più dispositivi restano distinguibili. Reinstallare l’app genera un nuovo ID. La stringa di versione è solo l’etichetta di build dell’app (non un identificativo di tracciamento).',
    exifTitle: 'Metadati EXIF e video',
    exifBodyHtml:
      'Dopo il timbro visivo sulle foto l’app prova a scrivere tag EXIF standard sul JPEG salvato (ad esempio <code data-aib="code">Software</code>, <code data-aib="code">Artist</code>, <code data-aib="code">ImageUniqueID</code>, campi GPS e un <code data-aib="code">UserComment</code> JSON). Se la build del dispositivo non può scrivere EXIF, la foto resta salvata con il timbro visivo e la voce nel registro scatti. Se anche il compositing del timbro fallisce, resta comunque il JPEG non timbrato nella galleria in-app. Per i video (fino a 60 s) il timbro viene bruciato sull’MP4 dopo lo stop e possono essere scritti metadati limitati del contenitore; se l’overlay fallisce resta il video non timbrato. I video non usano EXIF JPEG.',
    noBackendHtml:
      'Lo sviluppatore <strong>non</strong> gestisce un backend che riceve foto, video, posizione, impostazioni, ID di scatto o ID installazione.',
    permissionsTitle: 'Permessi',
    permissions: [
      '<strong>Fotocamera</strong>: necessaria per foto e video.',
      '<strong>Microfono</strong>: opzionale. Solo per l’audio dei video; se negato la registrazione continua senza suono.',
      '<strong>Posizione (in uso)</strong>: opzionale. Se negata puoi comunque scattare; le righe geo sul timbro risultano non disponibili e i campi GPS EXIF/metadati sono omessi.',
      '<strong>Libreria Foto / media</strong>: opzionale (richiesta subito dopo la fotocamera, come la posizione): salvare foto e video timbrati nell’album «AIB Camera» e rimuovere quelle copie quando li elimini dall’app. La galleria in-app resta la fonte di verità anche se questo permesso è negato.',
    ],
    shareTitle: 'Condivisione',
    shareBody:
      'Se usi il foglio di condivisione di sistema (WhatsApp, Mail, File, ecc.), la foto o il video condiviso (compresi eventuali EXIF o metadati scritti nel file), un CSV del registro scatti o il testo/posizione dalla scheda Mappa lascia l’app secondo le regole dell’app o del servizio che scegli. Aprire un punto in Apple Maps o Google Maps segue le regole di quell’app. Ciò è fuori dal controllo di AIB Camera.',
    minorsTitle: 'Privacy dei minori',
    minorsBody:
      'L’app non è rivolta ai minori e non raccoglie consapevolmente dati personali di minori.',
    changesTitle: 'Modifiche',
    changesBody:
      'Se questa informativa cambia in modo sostanziale, la data di «Ultimo aggiornamento» sopra verrà aggiornata. Continuare a usare l’app dopo un aggiornamento implica l’accettazione dell’informativa rivista.',
    contactsTitle: 'Contatti',
    contactsBodyHtml:
      'Sito dello sviluppatore: <a href="https://smnl.dev/?ref=aib-camera-privacy">smnl.dev</a> · URL informativa: <a data-aib="privacy">aib.smnl.dev/camera/privacy</a> · Termini: <a data-aib="terms">aib.smnl.dev/camera/terms</a>',
    contactsMailHtml:
      'Per domande sulla privacy di AIB Camera: <a href="mailto:stefano@smnl.dev">stefano@smnl.dev</a>.',
  },
  terms: {
    title: 'Termini di utilizzo: AIB Camera',
    description:
      'Termini di utilizzo di AIB Camera: app indipendente non ufficiale, aperta a chiunque, per fotografia di campo AIB. Uso a proprio rischio, senza garanzia e senza affiliazione istituzionale.',
    heading: 'Termini di utilizzo: AIB Camera',
    updated: 'Ultimo aggiornamento: 26 ottobre 2026',
    intro1Html:
      'Questi termini regolano l’uso dell’app mobile <strong>AIB Camera</strong>. Scaricando, installando o usando l’app accetti questi termini. Se non li accetti, non usare l’app.',
    intro2Html:
      'AIB Camera è un progetto <strong>indipendente e non ufficiale</strong> realizzato da un volontario. <strong>Non</strong> è affiliata, approvata né realizzata da Protezione Civile, Vigili del Fuoco, Regione Lombardia o qualsiasi altra istituzione pubblica. Non usare loghi, sigilli o nomi istituzionali nell’app in modo che possano suggerire un’approvazione ufficiale.',
    whoTitle: 'Chi può usarla',
    whoBodyHtml:
      '<strong>Chiunque.</strong> L’app <strong>non</strong> è riservata a una specifica organizzazione, squadra o ruolo professionale (Protezione Civile, Vigili del Fuoco o altri). È disponibile al pubblico. Usi tipici: documentare un incendio boschivo o una situazione simile, condividere la foto timbrata (WhatsApp, Telegram, Mail, …), oppure leggere coordinate e altri dettagli a chi risponde all’emergenza (ad es. 112). Anche volontari e organizzazioni possono usarla se lo desiderano: ciò non la rende esclusiva per loro.',
    purposeTitle: 'A cosa serve l’app',
    purposeBodyHtml:
      'AIB Camera aiuta a scattare foto di campo con data/ora, posizione (se disponibile) e testo personalizzato stampati sul JPEG, più un registro scatti locale. È uno <strong>strumento di supporto</strong> per la documentazione personale e la condivisione: <strong>non</strong> sostituisce procedure ufficiali, moduli, sistemi di comando o archivi istituzionali.',
    allowedTitle: 'Uso consentito',
    allowed: [
      'Usare l’app per fotografia di campo legata a incendi boschivi (AIB) o situazioni simili, nel rispetto della legge applicabile.',
      'Non presentare l’app, le foto o i metadati come documentazione ufficiale o certificata da un’istituzione pubblica.',
      'Non usare l’app per attività illegali, molestie, o per alterare in modo ingannevole coordinate, orari o contesto sulla foto.',
      'Sei responsabile di ciò che scatti, condividi o esporti (foto, EXIF, CSV del registro), comprese destinazione e destinatari.',
    ],
    aimTitle: 'Posizione e punto mirato',
    aimBodyHtml:
      'GPS, bussola, altitudine e luogo dipendono dal dispositivo, dai permessi e dalle condizioni di segnale. La modalità <strong>punto mirato</strong> (distanza + direzione) produce una <strong>stima</strong> a terra lungo la bussola: non è un fix GNSS sul bersaglio e non è certificata. Non basare decisioni di sicurezza o resoconti ufficiali solo su questi valori.',
    asIsTitle: 'Disponibilità e «così com’è»',
    asIsBody1Html:
      'L’app è fornita <strong>«così com’è»</strong> e <strong>«come disponibile»</strong>, senza garanzie di alcun tipo, espresse o implicite, inclusa l’idoneità a uno scopo particolare. In particolare non si garantiscono: continuità del servizio, precisione GPS/bussola/punto mirato, completezza EXIF, salvataggio nell’album Foto, o comportamento identico su tutti i dispositivi.',
    asIsBody2Html:
      'In emergenza l’app punta a restare utilizzabile anche senza rete o GPS, ma <strong>non</strong> sostituisce comunicazioni radio, procedure di sicurezza o giudizi operativi sul campo.',
    liabilityTitle: 'Limitazione di responsabilità',
    liabilityBody:
      'Nei limiti consentiti dalla legge applicabile, lo sviluppatore non è responsabile per danni diretti o indiretti, perdita di dati, decisioni operative errate, o conseguenze derivanti dall’uso o dall’impossibilità di usare AIB Camera: comprese stime di posizione inaccurate o foto condivise verso terzi.',
    privacyTitle: 'Privacy e dati',
    privacyBodyHtml:
      'Il trattamento dei dati sull’app è descritto nell’ <a data-aib="privacy">informativa privacy</a>. In sintesi: elaborazione prevalentemente sul dispositivo, senza account né sincronizzazione cloud gestita dallo sviluppatore.',
    ipTitle: 'Proprietà intellettuale',
    ipBody:
      'L’app, il nome «AIB Camera» come usato qui e i materiali del sito correlati appartengono allo sviluppatore, fatti salvi componenti di terzi (librerie open source, font, ecc.) con le rispettive licenze. Non è concessa alcuna licenza a marchi o segni di istituzioni pubbliche. Il codice sorgente del progetto è disponibile sotto PolyForm Noncommercial License 1.0.0 (uso, modifica e redistribuzione non commerciali). Il nome «AIB Camera», le icone, lo splash e gli altri asset di brand non sono inclusi in quella licenza: non usarli per altre app, store o prodotti senza autorizzazione scritta.',
    updatesTitle: 'Aggiornamenti',
    updatesBody:
      'L’app e questi termini possono cambiare. La data di «Ultimo aggiornamento» verrà rivista in caso di modifiche sostanziali. Continuare a usare l’app dopo un aggiornamento implica l’accettazione dei termini rivisti.',
    contactsTitle: 'Contatti',
    contactsBodyHtml:
      'Sito dello sviluppatore: <a href="https://smnl.dev/?ref=aib-camera-terms">smnl.dev</a> · URL termini: <a data-aib="terms">aib.smnl.dev/camera/terms</a> · Privacy: <a data-aib="privacy">aib.smnl.dev/camera/privacy</a>',
    contactsMailHtml:
      'Domande sui termini o sull’app: <a href="mailto:stefano@smnl.dev">stefano@smnl.dev</a>.',
  },
}

const en: AibCopy = {
  nav: {
    homeAria: 'AIB Camera: home',
    guide: 'Guide',
    changelog: 'Changelog',
    privacy: 'Privacy',
    terms: 'Terms',
    langIt: 'IT',
    langEn: 'EN',
    langSwitchAria: 'Select language',
  },
  footer: {
    brand: 'AIB Camera',
  },
  home: {
    title: 'AIB Camera',
    description:
      'Independent field camera for anyone: geotagged wildfire (AIB) photos and videos with date/time/GPS/place stamp, capture ID and on-device capture log. Public, offline, no account.',
    lead: 'Field photography for anyone: live preview and a date, time, GPS and place stamp on every photo or video, with a local ID for later checks.',
    intro1:
      'AIB Camera is a small mobile app for stamped, geotagged photos and short videos in wildfire (AIB) and similar situations: when you need to document a fire, share the shot (WhatsApp, Telegram, Mail, …), or read coordinates and other details to emergency responders (e.g. 112), even without a reliable network.',
    intro2Html:
      'Open to anyone: citizens, volunteers, or operators. Offline-first, no account; made by a volunteer and available to the public.',
    featuresLabel: 'What it does',
    features: [
      {
        title: '4:3 viewfinder and live stamp',
        body: 'Viewfinder with black letterbox bands in portrait and landscape: portrait keeps flash, aim, and stamp settings on top with zoom and shutter below; Photo / Video toggle; landscape moves controls to the side rails. The viewfinder shows the same stamp that will be burned into the photo or video.',
      },
      {
        title: 'Aimed target',
        body: 'Same Aim sheet from Camera (chrome or press-and-hold) or Map (header icon). Enter a distance (presets 1 / 2 / 5 / 10 km or custom meters with an m suffix) and lock estimated coordinates from GPS + compass. Toggle Me ↔ Target; on the map you can drag the red pin to update the point and meters. Stamp shows “Aimed target (estimated)”.',
      },
      {
        title: 'Stamp on JPEG and video',
        body: 'Date, time (Europe/Rome), coordinates (N/E, decimal, or DMS format), altitude, heading, wind (when online), place, and optional custom text printed on the photo or, after stop, on the video (up to 60 s; optional microphone).',
      },
      {
        title: 'Fast shutter and recording',
        body: 'Shoot in sequence without waiting for stamp processing; videos stamp after stop. Position uses the live fix (or locked aimed target) when available.',
      },
      {
        title: 'EXIF for machines',
        body: 'After stamping photos, the app writes Software, ImageUniqueID (UUID), GPS tags, and a JSON UserComment when the native build supports it.',
      },
      {
        title: 'Map tab',
        body: 'Tall map of the effective point with the same live stamp as Camera; blue puck for Me, draggable red pin for Aimed; Leaflet/OpenStreetMap on iOS and Android; same Aim sheet; copy, open in system Maps, save map as a stamped in-app photo.',
      },
      {
        title: 'In-app gallery',
        body: 'Photos and videos stay in the app as the source of truth. The viewer lets you swipe or use the filmstrip, play videos, then share or delete. Optional Photos album “AIB Camera”; deleting in-app also removes that copy when possible.',
      },
      {
        title: 'Capture log',
        body: 'Each shot gets a local ID, date, and coordinates. In Settings you see version and install ID (tap to copy) and export the log as CSV with install_id: even after deleting photos or videos from the gallery.',
      },
      {
        title: 'Works offline',
        body: 'Capture, video, stamp, gallery, capture log, and share without a network. GPS, place labels, and wind (Open-Meteo) are optional and cached. On constrained devices (no EXIF, video overlay, Photos album, fonts, or haptics) the app still saves.',
      },
      {
        title: 'All on-device',
        body: 'No account, no analytics SDK, no cloud sync. Photos, videos, settings, and the log stay on the device.',
      },
      {
        title: 'Emergency-ready',
        body: 'Camera is required; location and microphone are not. You can still shoot and record without a GPS fix or audio.',
      },
    ],
    guideTitle: 'Field guide',
    guideBodyHtml:
      'Field guide covering permissions, camera, video, stamp, gallery, capture log, limits, and checklist. Readable on the web and printable as PDF.',
    guideLink: 'Open the guide',
    guideOr: 'or download',
    guidePdf: 'field-guide.pdf',
    privacyTitle: 'Privacy and terms',
    privacyBodyHtml:
      'Photos, videos, settings, capture log, and location stay on the device. Read the <a data-aib="privacy">privacy policy</a> and the <a data-aib="terms">terms of use</a>.',
    contactsTitle: 'Contact',
    contactsBodyHtml:
      'Questions about the app: <a href="mailto:stefano@smnl.dev">stefano@smnl.dev</a>.',
  },
  guide: {
    title: 'Field guide: AIB Camera',
    description:
      'AIB Camera field guide in English: permissions, camera, stamp, gallery, capture log, limits, and field checklist. Readable in the browser and downloadable as PDF.',
    heading: 'Field guide',
    leadHtml:
      'How AIB Camera works in the field: permissions, capture, video, stamp, gallery, and capture log. Reference version <strong>1.3.0</strong>.',
    downloadPdf: 'Download PDF',
    openPdf: 'Open PDF',
    pdfHref: '/docs/aib-camera-field-guide.pdf',
    pdfFilename: 'aib-camera-field-guide.pdf',
  },
  changelog: {
    title: 'Changelog: AIB Camera',
    description:
      'AIB Camera release notes: what changed in each version, from 1.0.0 to the current release.',
    heading: 'Changelog',
    leadHtml:
      'What changed in each released version. Current version <strong>1.3.0</strong>.',
  },
  privacy: {
    title: 'Privacy policy: AIB Camera',
    description:
      'AIB Camera privacy policy: app open to anyone. On-device field photography; photos, settings, capture log, and location stay on the phone.',
    heading: 'Privacy policy: AIB Camera',
    updated: 'Last updated: 8 November 2026',
    intro1Html:
      'AIB Camera is a mobile app for field photography in wildfire response (AIB) and similar situations. It is open to anyone: useful for stamped, geotagged photos and short videos, sharing them (WhatsApp, Telegram, …), or reading coordinates to emergency responders (e.g. 112).',
    intro2: 'This policy describes how the app handles data on the device.',
    summaryTitle: 'In short',
    summary: [
      'The app is <strong>offline-first</strong>. Photos, videos, settings, in-app gallery, and capture log stay on the device.',
      'There is no <strong>account</strong>, <strong>analytics SDK</strong>, or developer-managed <strong>cloud sync</strong>.',
      'The <strong>camera</strong> is required for photos and videos.',
      'The <strong>microphone</strong> is optional and used only for video sound; if denied, videos are silent.',
      '<strong>Location</strong> is optional and is used to print coordinates, altitude, heading, wind (when available), and place on photos or videos, show them on the <strong>Map</strong> tab, and write matching GPS EXIF JPEG or video metadata fields when possible. You can also lock an <strong>aimed target</strong> (GPS + compass + entered distance): estimated coordinates can replace your position on the stamp and map until you clear them.',
      '<strong>Photos library</strong> access is optional (requested early after Camera, like Location) and is used to save stamped photos and videos into the “AIB Camera” album and remove those copies when you delete items in the app.',
      'Network is used for optional <strong>reverse geocoding</strong> (GPS → place label), optional <strong>current wind</strong> for the stamp point (Open-Meteo: speed and direction; cached on device; omitted offline; capture never waits on the request), and for <strong>map tiles</strong> (OpenStreetMap HOT via Leaflet on iOS and Android: not Google Maps) when you open the Map tab. Nearby place labels and wind samples may stay cached for offline reuse. Copying coordinates or opening a maps link does not require map tiles. Saving the map as a photo captures the on-screen view and stamps it on device.',
    ],
    dataTitle: 'Data processed by the app',
    colData: 'Data',
    colWhere: 'Where it stays',
    colWhy: 'Why',
    dataRows: [
      {
        data: 'Camera image / video',
        where: 'On device (app storage; optionally Photos library)',
        why: 'Capture and share stamped field photos and videos',
      },
      {
        data: 'Microphone audio (video only)',
        where: 'On device inside the MP4 when mic is allowed',
        why: 'Optional sound with field video',
      },
      {
        data: 'Date and time',
        where:
          'Printed on the JPEG/MP4 (Europe/Rome); also EXIF DateTime on photos',
        why: 'Operational context on the capture',
      },
      {
        data: 'GPS coordinates, accuracy, altitude, heading',
        where: 'On device; on stamp / EXIF or video metadata when available',
        why: 'Location context on the capture',
      },
      {
        data: 'Aimed-target estimate (distance + heading)',
        where:
          'On device (session sticky point); may appear on stamp / log / EXIF GPS',
        why: 'Coordinates of what you are pointing at, not only your position',
      },
      {
        data: 'Current wind (speed, direction)',
        where:
          'On device; optional Open-Meteo lookup with lat/lon; local cache; stamp only',
        why: 'Weather context on the photo / map stamp',
      },
      {
        data: 'Place label (reverse geocode)',
        where:
          'On device; optional network lookup; local cache; may appear in EXIF',
        why: 'Human-readable place on the stamp',
      },
      {
        data: 'Capture ID (UUID)',
        where: 'On device (capture log); EXIF ImageUniqueID / UserComment JSON',
        why: 'Identify photos taken with this app',
      },
      {
        data: 'Install ID (UUID)',
        where: 'On device (local storage); Settings (tap to copy); CSV export',
        why: 'Tie capture-log CSVs to a specific installation',
      },
      {
        data: 'Custom stamp text',
        where: 'On device (settings); may appear in EXIF description / comment',
        why: 'Optional notes on the photo',
      },
      {
        data: 'App settings',
        where: 'On device (local storage)',
        why: 'Remember stamp preferences and UI language',
      },
      {
        data: 'Map view (optional)',
        where:
          'On device only; OpenStreetMap HOT tiles via Leaflet when online',
        why: 'Show the effective point; copy coordinates; save map as a local photo',
      },
    ],
    logTitle: 'Capture log',
    logBodyHtml:
      'Each successful shot is recorded in a local <strong>capture log</strong> (ID, date/time, and coordinates when available). The log stays on the device even if you delete the photo from the in-app gallery or system album. It is not uploaded. You can open it from Settings, copy an ID to compare with EXIF on a shared JPEG, or export everything as CSV via the system share sheet. Each app install also has a local <strong>install ID</strong> (UUID), shown in Settings. There you can tap <strong>Version</strong> or <strong>Install ID</strong> to copy the value. The install ID is written in the <code data-aib="code">install_id</code> CSV column so logs from multiple devices stay distinguishable. Reinstalling the app creates a new ID. The version string is only the app build label (not a tracking identifier).',
    exifTitle: 'EXIF and video metadata',
    exifBodyHtml:
      'After the visual stamp on photos, the app tries to write standard EXIF tags on the saved JPEG (for example <code data-aib="code">Software</code>, <code data-aib="code">Artist</code>, <code data-aib="code">ImageUniqueID</code>, GPS fields, and a JSON <code data-aib="code">UserComment</code>). If the device build cannot write EXIF, the photo remains saved with the visual stamp and the capture-log entry. If stamp compositing also fails, the unstamped JPEG still remains in the in-app gallery. For videos (up to 60 s) the stamp is burned into the MP4 after stop and limited container metadata may be written; if overlay fails, the unstamped clip is kept. Videos do not use JPEG EXIF.',
    noBackendHtml:
      'The developer does <strong>not</strong> run a backend that receives photos, videos, location, settings, capture IDs, or install IDs.',
    permissionsTitle: 'Permissions',
    permissions: [
      '<strong>Camera</strong>: required for photos and videos.',
      '<strong>Microphone</strong>: optional. Only for video sound; if denied, recording continues without audio.',
      '<strong>Location (while using)</strong>: optional. If denied you can still shoot; geo lines on the stamp show unavailable and GPS EXIF/metadata fields are omitted.',
      '<strong>Photos / media library</strong>: optional (prompted early after Camera, like Location): save stamped photos and videos to the “AIB Camera” album and remove those copies when you delete them in the app. The in-app gallery remains the source of truth even if this permission is denied.',
    ],
    shareTitle: 'Sharing',
    shareBody:
      'If you use the system share sheet (WhatsApp, Mail, Files, etc.), the shared photo or video (including any EXIF or metadata written into the file), a capture-log CSV, or location text from the Map tab leaves the app under the rules of the app or service you choose. Opening a point in Apple Maps or Google Maps follows that app’s rules. That is outside AIB Camera’s control.',
    minorsTitle: 'Children’s privacy',
    minorsBody:
      'The app is not directed at children and does not knowingly collect personal data from minors.',
    changesTitle: 'Changes',
    changesBody:
      'If this policy changes in a material way, the “Last updated” date above will be revised. Continuing to use the app after an update means you accept the revised policy.',
    contactsTitle: 'Contact',
    contactsBodyHtml:
      'Developer site: <a href="https://smnl.dev/?ref=aib-camera-privacy">smnl.dev</a> · Policy URL: <a data-aib="privacy">aib.smnl.dev/camera/privacy</a> · Terms: <a data-aib="terms">aib.smnl.dev/camera/terms</a>',
    contactsMailHtml:
      'Privacy questions about AIB Camera: <a href="mailto:stefano@smnl.dev">stefano@smnl.dev</a>.',
  },
  terms: {
    title: 'Terms of use: AIB Camera',
    description:
      'AIB Camera terms of use: independent unofficial app, open to anyone, for AIB field photography. Use at your own risk, as-is, with no institutional affiliation.',
    heading: 'Terms of use: AIB Camera',
    updated: 'Last updated: 26 October 2026',
    intro1Html:
      'These terms govern use of the <strong>AIB Camera</strong> mobile app. By downloading, installing, or using the app you accept these terms. If you do not accept them, do not use the app.',
    intro2Html:
      'AIB Camera is an <strong>independent, unofficial</strong> project made by a volunteer. It is <strong>not</strong> affiliated with, endorsed by, or built by Civil Protection, the Fire Service, Regione Lombardia, or any other public institution. Do not use institutional logos, seals, or names in the app in a way that could suggest official endorsement.',
    whoTitle: 'Who may use it',
    whoBodyHtml:
      '<strong>Anyone.</strong> The app is <strong>not</strong> limited to a specific organization, crew, or professional role (Civil Protection, Fire Service, or others). It is available to the public. Typical uses: document a wildfire or similar situation, share the stamped photo (WhatsApp, Telegram, Mail, …), or read coordinates and other details to emergency responders (e.g. 112). Volunteers and organizations may also use it if they wish: that does not make it exclusive to them.',
    purposeTitle: 'What the app is for',
    purposeBodyHtml:
      'AIB Camera helps you take field photos with date/time, location (when available), and custom text printed on the JPEG, plus a local capture log. It is a <strong>support tool</strong> for personal documentation and sharing: it does <strong>not</strong> replace official procedures, forms, command systems, or institutional archives.',
    allowedTitle: 'Allowed use',
    allowed: [
      'Use the app for field photography related to wildfires (AIB) or similar situations, in compliance with applicable law.',
      'Do not present the app, photos, or metadata as official or institutionally certified documentation.',
      'Do not use the app for illegal activity, harassment, or to deceptively alter coordinates, times, or context on the photo.',
      'You are responsible for what you capture, share, or export (photos, EXIF, log CSV), including destination and recipients.',
    ],
    aimTitle: 'Location and aimed target',
    aimBodyHtml:
      'GPS, compass, altitude, and place depend on the device, permissions, and signal conditions. <strong>Aimed target</strong> mode (distance + heading) produces a ground <strong>estimate</strong> along the compass: it is not a GNSS fix on the target and is not certified. Do not base safety decisions or official reports solely on these values.',
    asIsTitle: 'Availability and “as is”',
    asIsBody1Html:
      'The app is provided <strong>“as is”</strong> and <strong>“as available”</strong>, without warranties of any kind, express or implied, including fitness for a particular purpose. In particular there is no guarantee of: continuity of service, GPS/compass/aimed-target accuracy, EXIF completeness, Photos album save, or identical behavior on all devices.',
    asIsBody2Html:
      'In emergencies the app aims to remain usable without network or GPS, but it does <strong>not</strong> replace radio communications, safety procedures, or operational judgment in the field.',
    liabilityTitle: 'Limitation of liability',
    liabilityBody:
      'To the extent permitted by applicable law, the developer is not liable for direct or indirect damages, data loss, wrong operational decisions, or consequences arising from use of or inability to use AIB Camera: including inaccurate position estimates or photos shared with third parties.',
    privacyTitle: 'Privacy and data',
    privacyBodyHtml:
      'How the app handles data is described in the <a data-aib="privacy">privacy policy</a>. In short: mostly on-device processing, with no account or developer-managed cloud sync.',
    ipTitle: 'Intellectual property',
    ipBody:
      'The app, the name “AIB Camera” as used here, and related site materials belong to the developer, subject to third-party components (open-source libraries, fonts, etc.) under their licenses. No license is granted to trademarks or marks of public institutions. Source code of this project is available under the PolyForm Noncommercial License 1.0.0 (noncommercial use, modification, and redistribution). The “AIB Camera” name, icons, splash art, and other brand assets are not included in that license: do not use them for other apps, stores, or products without written permission.',
    updatesTitle: 'Updates',
    updatesBody:
      'The app and these terms may change. The “Last updated” date will be revised for material changes. Continuing to use the app after an update means you accept the revised terms.',
    contactsTitle: 'Contact',
    contactsBodyHtml:
      'Developer site: <a href="https://smnl.dev/?ref=aib-camera-terms">smnl.dev</a> · Terms URL: <a data-aib="terms">aib.smnl.dev/camera/terms</a> · Privacy: <a data-aib="privacy">aib.smnl.dev/camera/privacy</a>',
    contactsMailHtml:
      'Questions about the terms or the app: <a href="mailto:stefano@smnl.dev">stefano@smnl.dev</a>.',
  },
}

const catalogs: Record<AibLocale, AibCopy> = { it, en }

export function aibCopy(locale: AibLocale): AibCopy {
  return catalogs[locale] ?? catalogs.it
}
