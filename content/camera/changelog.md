<!-- Regenera body HTML: npm run docs:aib-camera-changelog (da apps/site) → assets/changelog.body.html -->

# Novità: AIB Camera

## 1.3.1 (10 novembre 2026)

- **Android / zoom:** i chip 1× / 2× / 4× usano il mapping lineare di expo-camera (`zoom` 0–1 × rapporto massimo assunto ~8×), così 2× e 4× non risultano più quasi identici a 1× / 2× su dispositivi tipici.
- **iOS / zoom:** mapping allineato alla curva esponenziale di expo-camera; logica zoom estratta in `useCameraZoom`.
- **Mappa:** implementazione Leaflet/WebView semplificata; tile HOT con buffer più ampio, caricamento a fine zoom e retry; meno inject GPS durante il pan.
- Pulsante mappa **Mappe** (prima «Apri nelle mappe»).
- Tab bar a vetro scuro semitrasparente (blur + wash scuro, icone chiare); su Android sotto API 31 solo wash opaco (niente blur nativo instabile).
- Galleria Foto: dentro ogni giorno gli scatti sono dal più recente al più vecchio (ultimo scatto in alto a sinistra); «Salva come foto» sulla mappa usa l’ora del salvataggio, non un tick GPS vecchio.

## 1.3.0 (8 novembre 2026)

- **Video** in Fotocamera: commutatore Foto / Video, registrazione fino a **60 s** con microfono opzionale (senza microfono il video è muto).
- Timbro bruciato sull’MP4 (stesso layout delle foto) dopo lo stop; se l’overlay fallisce resta il video senza timbro (serve rebuild nativa con Nitro / video-pipeline).
- Galleria e visualizzatore: poster JPEG (fotogramma o placeholder) + badge Video, riproduzione in-app, condivisione/eliminazione MP4 come per le foto.
- Permessi: microfono e video nella libreria Foto; rebuild nativa richiesta.

## 1.2.2 (8 novembre 2026)

- **Vento attuale** sul timbro (Fotocamera e Mappa): velocità e direzione da Open-Meteo per il punto effettivo (Qui o Mirato).
- Interruttore **Vento** in Configurazione del timbro; cache locale; omesso offline; lo scatto non attende la richiesta di rete.
- Altitudine sul timbro senza suffisso «s.l.m.» (solo metri).
- Luogo sul timbro: wrapping più largo (tipicamente al massimo **2 righe**).
- Etichetta foglio Punta: **Distanza** (senza «(m)»; il suffisso `m` resta sul campo).
- Punto mirato: rimosso il limite di **50 km** su distanza (digitazione e trascinamento mappa).

## 1.2.1 (7 novembre 2026)

- **Mappa** unificata: Leaflet + OpenStreetMap HOT su **iOS e Android** (niente Apple Maps / Google Maps SDK; nessuna API key). Dark mode senza CARTO (i tile CARTO richiedono una chiave dal 2026).
- Mappa più alta con **timbro live** sopra (come in Fotocamera), al posto della scheda testo separata.
- Azioni mappa: **Copia**, **Apri nelle mappe**, **Salva come foto** (mappa + pin + timbro nella galleria in-app, come uno scatto).
- Galleria: **3 colonne** in verticale, **5** in orizzontale.
- Permesso **Foto** chiesto subito dopo la fotocamera (come la posizione), per sincronizzare l’album «AIB Camera».
- Tema chiaro: chrome fotocamera e selezione tab bar più leggibili; chip zoom nero (chiaro) / bianco (scuro).
- **Zoom** Android: mapping corretto sul massimo dello zoom del dispositivo; chip 1× / 2× / 4× e pinch più affidabili.
- **Punto mirato**: preset distanza **1 / 2 / 5 / 10 km**; campo metri libero con suffisso **m**; area di tocco del pin più ampia per trascinarlo.
- **Formato coordinate** in Configurazione del timbro (N/E, decimali, GMS), come per il formato data.

## 1.2.0 (5 novembre 2026)

- **Scheda Mappa**: mappa del punto effettivo (Qui o Mirato), con linee di posizione allineate al timbro, copia/condivisione e apertura nell’app Mappe di sistema.
- Pin rosso del punto mirato **trascinabile** sulla mappa: al rilascio aggiorna metri e direzione dal GPS live.
- Stesso foglio **Punta** da Fotocamera e da Mappa.
- **Visualizzatore foto** con scorrimento tra gli scatti e filmstrip in basso (condivisione ed eliminazione dello scatto corrente).

## 1.1.0 (3 novembre 2026)

- Supporto **rotazione** del dispositivo (portrait e landscape).
- Mirino con bande nere adattive: in orizzontale i controlli passano alle **rail laterali**.
- Direzione bussola sul timbro **corretta** in base all’orientamento dello schermo, così segue la fotocamera anche in landscape.
- Fix della dipendenza `expo-screen-orientation` per le build native.

## 1.0.2 (3 novembre 2026)

- Tab bar flottante **condivisa** su iOS e Android (vetro con `expo-blur`), al posto del liquid glass nativo solo iOS.
- Icone **Solar Linear** unificate su entrambe le piattaforme.
- Icona adaptive Android aggiornata.

## 1.0.1 (29 ottobre 2026)

- **Punto mirato**: distanza (preset o metri liberi) + GPS + bussola per stimare le coordinate di ciò a cui punti; etichetta «Punto mirato (stimato)» sul timbro.
- Interfaccia in **inglese** selezionabile da Impostazioni (default italiano).
- **Termini di utilizzo** pubblicati sul sito.
- Condivisione di **più immagini** dalla galleria.
- Migliorie a GPS/bussola/luogo: filtro accuratezza heading, smoothing circolare, etichetta di luogo più stabile.
- Licenza PolyForm Noncommercial, URL privacy/store e flusso di build/submit locali.

## 1.0.0 (23 ottobre 2026)

Prima versione pubblica.

- Fotocamera di campo con mirino letterbox e **timbro live** (data/ora Europe/Rome, GPS, altitudine, direzione, luogo, testo personalizzato).
- Timbro **bruciato** sul JPEG (Skia) e scrittura EXIF best-effort (ID scatto, GPS, UserComment JSON).
- **Galleria in-app** come fonte di verità; album Foto «AIB Camera» opzionale.
- **Registro scatti** locale (UUID) con esportazione CSV; ID installazione in Impostazioni.
- Impostazioni per i campi del timbro; pinch-to-zoom sul mirino.
- Offline-first, senza account né sync cloud; scatto utilizzabile anche senza GPS.
- Expo SDK 58, icona e splash di brand.
