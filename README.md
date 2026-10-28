# Nottilo

**A free launcher for Fire TV and Android TV.** A clean home screen with your apps, movie and series picks from the services you have, a catalog by genre, and the weather. No ads, no sign-up, no data collected.

<p align="center"><img src="screenshots/home.jpg" alt="Nottilo home screen" width="100%"></p>

<p align="center">
  <a href="https://github.com/vuoshino/Nottilo/releases/latest/download/Nottilo.apk"><img alt="Download Nottilo.apk" src="https://img.shields.io/badge/%E2%AC%87%20Download-Nottilo.apk-1f6feb?style=for-the-badge"></a>
  <a href="https://www.virustotal.com/gui/file/10f7a54ae81edb5f57598a1471a07cc59b8fca19f383a5f478782d71d0a23f74"><img alt="VirusTotal: 0 detections" src="https://img.shields.io/badge/%F0%9F%9B%A1%EF%B8%8F%20VirusTotal-0%20detections-2ea043?style=for-the-badge"></a>
  <a href="https://ko-fi.com/nottilo"><img alt="Support on Ko-fi" src="https://img.shields.io/badge/%E2%98%95%20Support-Ko--fi-FF5E5B?style=for-the-badge"></a>
  <a href="https://paypal.me/costantinishipping"><img alt="Donate with PayPal" src="https://img.shields.io/badge/%F0%9F%92%B3%20Donate-PayPal-0070BA?style=for-the-badge"></a>
  <a href="https://github.com/vuoshino/Nottilo/issues/new/choose"><img alt="Suggest an idea" src="https://img.shields.io/badge/%F0%9F%92%A1%20Ideas%20%26%20bugs-Issues-2ea043?style=for-the-badge"></a>
</p>

<p align="center"><b>Fire TV: open the <i>Downloader</i> app and type <code>4953459</code></b></p>

<p align="center"><b>Nottilo is free and made by one person. If you like it, support it on <a href="https://ko-fi.com/nottilo">Ko‑fi</a> or <a href="https://paypal.me/costantinishipping">PayPal</a> ☕ — every coffee goes into new features.</b><br>
<a href="#italiano">Italiano</a> · <a href="#permissions--security">Permissions &amp; security</a> · <a href="#contribute">How to contribute</a></p>

---

## Features

- **Replaces the Fire TV home screen — with a single command, once.** The Home button opens Nottilo, no root, nothing uninstalled, and one option brings Amazon's home back. [How ↓](#make-nottilo-your-home-button)
- **Picks for tonight** — movies and series from the streaming services available in your country, with poster, plot, length and where to watch.
- **Tabs by mood** — Horror, Mystery, Thriller, Sci‑Fi, plus a YouTube tab with the latest videos of your channels.
- **Catalog by genre** — every title of your services in rows: select *Catalog ›* next to the tabs (or press ≡ on a Fire TV remote). Inside, *"What should I watch tonight?"* picks one for you (≡ on Fire TV rerolls it).
- **Hold OK to mark, rate and save** — learns your taste:
  - **On the home screen and in the catalog:** hold OK on a poster → a menu with *Watched* or *Add to list* (on a watched one: *Mark as not watched*).
  - After *Watched* it asks **"Did you like it?"** 👍 / 👎, and the next picks follow your answer.
- **My list and Continue watching** — with a blue **New episode** badge on the shows you follow when an episode comes out.
- **New on your services** — the latest titles on the apps you have, right under the Top 10 in the catalog.
- **Scores** — IMDb and Rotten Tomatoes (optional OMDb key).
- **Opens titles straight in their app** — Netflix, Prime Video, Disney+… (optional Watchmode key).
- **A greeting that follows your day** — *Good morning*, *Good afternoon*, *Good evening* or *Good night*, with your name.
- **Your city's weather at a glance** — the temperature and sky now, and whether rain is coming today or in the next days (or "no rain this week"). Down in the drawer: hourly forecast, max/min, sunrise and sunset. The city is found from the TV's time zone; the language follows the TV.
- **Works right away** — no account and no key needed: TMDB is built in. Optional keys (scores, direct links, YouTube search) are added from your phone by scanning a QR code, and each one is tested on the spot (✓ / ✗).
- **Free memory in one press** — the *Free memory* shortcut closes the apps left running in the background, so the stick stays fast.
- **Backup** — save your list, watched titles and settings as a file on your phone, or automatically on your own Google Drive.
- **Smooth** — 60 fps animations, made for the remote.
- **Quick guide** — a short tour on first start, and anytime in Settings → *Quick guide*.

## Screenshots

| | |
| --- | --- |
| ![Home screen](screenshots/home.jpg) | ![Drawer with weather and shortcuts](screenshots/drawer.jpg) |
| **Home** — picks for tonight, weather, your apps | **Drawer** — inputs, Free memory, updates, hourly weather |
| ![Catalog](screenshots/catalog.jpg) | ![My list](screenshots/list.jpg) |
| **Catalog** — scores, where to watch, watched titles | **My list** and picks based on what you liked |
| ![What should I watch tonight?](screenshots/surprise.jpg) | ![Title page](screenshots/title.jpg) |
| **"What should I watch tonight?"** | **Title page** — watch, trailer, another one, my list |

## Requirements

- Amazon Fire TV Stick / Cube (Fire OS 7 or 8), or an Android TV / Google TV with Android 8 or newer.
- Nothing else: no account and no key needed. Optional free keys — [OMDb](https://www.omdbapi.com/apikey.aspx) (IMDb and Rotten Tomatoes scores), [Watchmode](https://api.watchmode.com/) (direct links), YouTube (search) — add extras.

## Install

1. **Developer options:** Settings → My Fire TV → About → press OK on the device name 7 times.
   *(Android TV: Settings → System → About → press* Build *7 times.)*
2. In **Developer options**, turn on **ADB debugging** and allow **unknown apps** for *Downloader*.
3. Open **Downloader** and type the code **`4953459`**
   (or the full link: `https://github.com/vuoshino/Nottilo/releases/latest/download/Nottilo.apk`).
4. Open Nottilo: it's ready, no setup needed. *Optional:* Settings → *Keys and accounts* → scan the **QR code** with your phone to add your name, city or extra keys.
5. **Home button:** Settings → *Home Screen* → *Nottilo*.
   - *Android TV / Google TV:* accept "Allow USB debugging?" (tick *Always allow*).
   - *Fire TV:* Amazon doesn't let apps do this by themselves, so Nottilo shows **one command** to send once from a computer (`adb`) or an Android phone (an app like *Remote ADB Shell*), with your TV's address already filled in. From then on the Home button opens Nottilo.
6. To go back: Settings → *Home Screen* → *Original*. Nothing is uninstalled, no root needed.

## Make Nottilo your Home button

**Android TV / Google TV:** Nottilo → Settings → *Home Screen* → *Nottilo*, accept "Allow USB debugging?" (tick *Always allow*). Done.

> **What changes on Android TV / Google TV — you choose.** Before switching, Nottilo shows exactly what it will do and waits for your *Continue*. To take the Home button it turns off (`pm disable-user`, nothing is uninstalled) **only the TV's original home screen and screensaver** (and Google's setup app on Google TV, which would otherwise take the home back). **Everything else stays on** — including Play Games and YouTube Music. Turning off the TV maker's extra apps (demos, promo channels, store mode, e.g. TCL Channel) is a **separate option, off by default**: Settings → Home Settings → *Turn off the TV maker's extra apps*. Play Store, Google services, remote, Bluetooth, keyboard, settings, inputs, picture and sound are protected and never touched. If turning an app off would erase your saved Wi‑Fi networks, Nottilo stops before changing anything. **Settings → Home Screen → Original brings everything back exactly as it was.** On Fire TV nothing is turned off.

**Fire TV:** Amazon blocks apps from doing it by themselves, so it takes **one command, sent once**. Nottilo shows it on screen with your TV's IP already filled in (Settings → *Home Screen* → *Nottilo*):

```
adb connect YOUR-TV-IP:5555
adb shell pm grant app.nottilo.launcher android.permission.WRITE_SECURE_SETTINGS
```

- **From a computer:** install [Android platform-tools](https://developer.android.com/tools/releases/platform-tools) and run the two lines above.
- **From an Android phone, no computer:** install an ADB app such as *Remote ADB Shell*, connect to `YOUR-TV-IP:5555`, accept the prompt on the TV, then type `pm grant app.nottilo.launcher android.permission.WRITE_SECURE_SETTINGS`.

The moment the command arrives, Nottilo takes over the Home button by itself, and it stays that way after restarts and updates. Keep *ADB debugging* on. To go back: Settings → *Home Screen* → *Original*.

## Updating

**Just press *Check for updates*:** scroll down below your apps to open the drawer, select **Check for updates** and confirm. That's all — no need to download anything again. Nottilo also checks by itself every few hours and asks before installing. Current version: see [download/latest.json](download/latest.json).

## Known issues

- **Fire OS 7** (older Fire TV Sticks): the Home button takes about a second there, because Amazon holds apps back after it. Nottilo covers that moment with its own short opening animation (moon and stars), so you don't see Amazon's home. Fire OS 8 and Android TV are instant.
- Languages: English and Italian are complete; in other languages some newer texts are still in English.

## Privacy

Your keys, name and city stay **on your TV only**. Nottilo has no server and collects nothing. It talks only to TMDB for film data (with Nottilo's built-in key, or yours), to the services you add a key for (OMDb, Watchmode, YouTube), to Open‑Meteo for the weather, and to GitHub for updates.

## Permissions & security

Nottilo's own source code isn't public yet (it's built on the open‑source [Free My TV](https://github.com/simbasjungles/free-my-tv)), so here is exactly what it can do, and how to check the file yourself.

**What it asks for, and why**

| Permission | What it's used for |
| --- | --- |
| Internet, network state | Posters, scores, trailers, weather, update check. |
| Start at boot | Coming back as your home screen after a restart. |
| Close background apps | The **Free memory** button. |
| Read TV channels | The Live TV row, on TVs that have channels. |
| Install apps | Installing a Nottilo update — only after you confirm it. |
| Write secure settings | Granted **only if you run the adb command yourself**. Lets Nottilo keep its Home‑button service switched on after updates and restarts. Nothing else. |
| Accessibility: *Home button* (Fire TV) | Notices only when Amazon's home screen comes to the front, then opens Nottilo. It watches Amazon's launcher only and **cannot read the screen, text or keys**. |
| Accessibility: *Remote buttons* (optional, off by default) | If you turn it on: reads the remote's buttons to open the apps you chose. No screen content, no text. |

- **Android TV:** when *you* choose to make Nottilo your home, it uses the TV's own debugging connection (on the TV itself, never over the internet) to set it and switch off the stock home — after asking. Manufacturer extras are switched off only if you turn that on, and you can switch everything back from Settings.
- **Phone setup:** while the *Keys* screen is open, the TV shows a small page on your Wi‑Fi, protected by a PIN inside the QR code. It stops as soon as you leave that screen.

**Where it connects — and nowhere else**

- TMDB — film data and posters (Nottilo's built-in key, or your own)
- OMDb, Watchmode, YouTube — only if you add your own keys
- Open‑Meteo — the weather for your city
- GitHub — to check for updates
- Google — only if you set up the optional backup, and only to your own Drive

No ads, no analytics, no trackers, no accounts, no Nottilo server.

**Check the APK yourself**

- 🛡️ **[VirusTotal scan of the current APK](https://www.virustotal.com/gui/file/10f7a54ae81edb5f57598a1471a07cc59b8fca19f383a5f478782d71d0a23f74)** — **0 detections** out of about 70 antivirus engines.
- **SHA‑256 of Nottilo 1.2.6:**
  `10f7a54ae81edb5f57598a1471a07cc59b8fca19f383a5f478782d71d0a23f74`  
  Check it with `certutil -hashfile Nottilo.apk SHA256` (Windows) or `shasum -a 256 Nottilo.apk` (Mac, Linux). Each version's value is also in [download/latest.json](download/latest.json).
- **Signing certificate (SHA‑256):**
  `26ed25a1fc9e32bf362c3f0d7b20c77cb24594d9b5a2f610a6de8a8375954eba`  
  Every official Nottilo is signed with this key. Android refuses to update the app with a file signed by anyone else, and Nottilo's updater checks it too.

## Contribute

Nottilo grows with the people who use it. Three ways to help:

| | |
| --- | --- |
| ☕ **[Support it on Ko‑fi](https://ko-fi.com/nottilo)** | A coffee keeps updates coming. No account needed, PayPal or card. |
| 💳 **[Donate with PayPal](https://paypal.me/costantinishipping)** | Straight from your PayPal account. |
| 💡 **[Suggest an idea or report a bug](https://github.com/vuoshino/Nottilo/issues/new/choose)** | Tell what you'd like or what doesn't work: every report makes it better. |
| ⭐ **Star this page** | It helps other people find Nottilo. |

---

## Italiano

**Un launcher gratuito per Fire TV e Android TV.** Una Home pulita con le tue app, consigli di film e serie dai servizi che hai, catalogo per genere e meteo. Niente pubblicità, nessuna registrazione, nessun dato raccolto.

**Su Fire TV: apri Downloader e scrivi `4953459`** · **[⬇ Scarica Nottilo.apk](https://github.com/vuoshino/Nottilo/releases/latest/download/Nottilo.apk)** · **[☕ Sostienilo su Ko‑fi](https://ko-fi.com/nottilo)** · **[💳 Dona con PayPal](https://paypal.me/costantinishipping)** · **[💡 Idee e segnalazioni](https://github.com/vuoshino/Nottilo/issues/new/choose)**

**Cosa fa**
- **Sostituisce la Home della Fire TV con un solo comando, da dare una volta.** Il tasto Home apre Nottilo: niente root, non si disinstalla nulla, e un'opzione riporta la Home di Amazon.
- Consigli per stasera dai servizi di streaming del tuo paese, con locandina, trama, durata e dove guardarli.
- Schede Horror, Mistero, Thriller, Fantascienza e YouTube (gli ultimi video dei tuoi canali, anche senza chiave).
- Catalogo per genere: premi OK su *Catalogo ›* accanto alle schede (sul telecomando Fire TV basta il tasto ≡). Dentro, *"Che film ti va stasera?"* ne sceglie uno per te (≡ su Fire TV ne propone un altro).
- **Tieni premuto OK per segnare, votare e salvare:**
  - **in Home e nel Catalogo**, su una locandina: menu con *Già visto* o *Aggiungi alla lista* (se è già visto: *Segna come non visto*);
  - dopo *Già visto* ti chiede **"Ti è piaciuto?"** 👍 / 👎 e i consigli si adattano ai tuoi gusti.
- La mia lista, Continua a guardare, voti IMDb e Rotten Tomatoes, apertura diretta nell'app giusta.
- **Nuovo episodio:** etichetta blu sulle serie della tua lista quando esce una puntata.
- **Nuovi sui tuoi servizi:** le ultime uscite sulle app che hai, subito sotto la Top 10 nel catalogo.
- **Guida rapida** al primo avvio, e quando vuoi in Impostazioni → *Guida rapida*.
- **Saluto che segue la giornata:** *Buongiorno*, *Buon pomeriggio*, *Buonasera* o *Buonanotte*, con il tuo nome.
- **Meteo della tua città a colpo d'occhio:** temperatura e cielo di adesso, e se pioverà oggi o nei prossimi giorni (oppure "niente pioggia questa settimana"). Nel cassetto: previsioni ora per ora, massima/minima, alba e tramonto. La lingua segue quella del televisore.
- Configurazione dal telefono con un codice QR; ogni chiave viene provata subito.
- **Libera memoria con un tasto:** la scorciatoia *Libera memoria* chiude le app rimaste aperte in background, così la chiavetta resta veloce.
- Backup come file sul telefono o automatico sul tuo Google Drive.

**Installazione:** Opzioni sviluppatore → *Debug ADB* attivo e origini sconosciute per *Downloader* → in Downloader scrivi il codice **`4953459`** → apri Nottilo: funziona subito, senza account né chiavi. Le chiavi facoltative (voti IMDb e Rotten Tomatoes, link diretti, ricerca YouTube) si aggiungono dal telefono in Impostazioni → *Chiavi e account*. 

**Nottilo come Home (tasto Home)**
- *Android TV / Google TV:* Impostazioni → *Schermata Home* → *Nottilo* e accetta il debug USB. Fatto.
- *Fire TV:* serve **un solo comando, una volta sola**. Nottilo te lo mostra già pronto con l'IP del tuo TV (Impostazioni → *Schermata Home* → *Nottilo*):
  ```
  adb connect IP-DEL-TV:5555
  adb shell pm grant app.nottilo.launcher android.permission.WRITE_SECURE_SETTINGS
  ```
  Da computer con gli [Android platform-tools](https://developer.android.com/tools/releases/platform-tools), oppure da telefono Android con un'app ADB come *Remote ADB Shell* (lì scrivi solo la riga `pm grant …`). Appena il comando arriva, Nottilo prende il tasto Home da solo e lo mantiene anche dopo riavvii e aggiornamenti. Tieni attivo il *Debug ADB*.

> **Cosa cambia su Android TV / Google TV: scegli tu.** Prima del cambio Nottilo mostra esattamente cosa farà e aspetta il tuo *Continua*. Per prendere il tasto Home disattiva (`pm disable-user`, non disinstalla nulla) **solo la Home e il salvaschermo originali** (e su Google TV l'app di configurazione Google, che altrimenti si riprenderebbe la Home). **Tutto il resto resta acceso**, compresi Play Giochi e YouTube Music. Spegnere le app extra del produttore (demo, canali promozionali, modalità negozio, per esempio TCL Channel) è un'**opzione a parte, disattivata di default**: Impostazioni → Impostazioni Home → *Spegni le app extra del produttore*. Play Store, servizi Google, telecomando, Bluetooth, tastiera, impostazioni, ingressi, immagine e audio sono protetti e non vengono mai toccati. Se spegnere un'app cancellerebbe le reti Wi‑Fi salvate, Nottilo si ferma prima di cambiare qualsiasi cosa. **Impostazioni → Schermata Home → Originale riporta tutto com'era.** Su Fire TV non viene spento nulla.

**Fire OS 7:** sulle Fire TV Stick più vecchie il tasto Home richiede circa un secondo, perché Amazon trattiene le app subito dopo. Nottilo copre quell'attimo con una sua breve animazione d'apertura (luna e stelle), così la Home di Amazon non si vede. Su Fire OS 8 e Android TV è immediato.

**Aggiornare:** basta premere **Cerca aggiornamenti**. Scendi sotto le tue app per aprire il cassetto, scegli *Cerca aggiornamenti* e conferma: non serve riscaricare nulla. Nottilo controlla anche da solo ogni poche ore e chiede prima di installare.

**Privacy:** chiavi, nome e città restano solo sul televisore. Nottilo non ha server e non raccoglie nulla.

**Permessi e sicurezza:** il codice di Nottilo non è ancora pubblico (nasce dal progetto open source Free My TV), quindi qui sopra, in [Permissions & security](#permissions--security), c'è l'elenco di ogni permesso e del perché serve. In breve: niente pubblicità, statistiche o tracciamento. Si collega solo a TMDB (con la chiave integrata in Nottilo o la tua), a OMDb, Watchmode e YouTube se aggiungi le tue chiavi, Open‑Meteo per il meteo, GitHub per gli aggiornamenti e, se lo attivi, al tuo Google Drive per il backup. Il servizio di accessibilità su Fire TV vede solo quando compare la home di Amazon: non legge lo schermo, i testi o i tasti. Puoi controllare l'APK su **[VirusTotal](https://www.virustotal.com/gui/file/10f7a54ae81edb5f57598a1471a07cc59b8fca19f383a5f478782d71d0a23f74)** e confrontarne l'impronta SHA‑256 con quella indicata sopra.

**Contribuisci al progetto**
- ☕ **[Sostienilo su Ko‑fi](https://ko-fi.com/nottilo)**: Nottilo è gratuito e fatto da una persona sola, ogni caffè diventa nuove funzioni. Senza account, con PayPal o carta.
- 💳 **[Dona con PayPal](https://paypal.me/costantinishipping)**: direttamente dal tuo conto PayPal.
- 💡 **[Proponi un'idea o segnala un problema](https://github.com/vuoshino/Nottilo/issues/new/choose)**: ogni segnalazione lo migliora.
- ⭐ Metti una **stella** a questa pagina: aiuta altre persone a trovarlo.

---

## Credits

- Built on [Free My TV](https://github.com/simbasjungles/free-my-tv) © Free My TV contributors, MIT License — see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
- This product uses the TMDB API but is not endorsed or certified by TMDB.
- Scores from OMDb; streaming links from TMDB and Watchmode (TMDB with Nottilo's built-in key or yours, the others with your own key, each under its own terms); weather from Open‑Meteo.
- QR codes: [QR Code generator](https://www.nayuki.io/page/qr-code-generator-library) by Project Nayuki (MIT). Icons: Material Symbols (Apache 2.0). Font: Inter (SIL OFL 1.1).
- Netflix, Prime Video, Disney+, YouTube, Fire TV and other names belong to their owners. Nottilo is not affiliated with them.

Nottilo is free to download and use. © Nottilo. The app may not be resold or redistributed under another name.
