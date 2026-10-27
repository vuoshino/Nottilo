# Nottilo

**A free launcher for Fire TV and Android TV.** A clean home screen with your apps, movie and series picks from the services you have, a catalog by genre, and the weather. No ads, no account, no data collected.

**[⬇ Download Nottilo.apk](https://github.com/vuoshino/Nottilo/raw/main/download/Nottilo.apk)** · **[☕ Buy me a coffee](https://ko-fi.com/nottilo)** · [Italiano](#italiano)

---

## Features

- **Picks for tonight** — movies and series from the streaming services available in your country, with poster, plot, length and where to watch.
- **Tabs by mood** — Horror, Mystery, Thriller, Sci‑Fi, plus a YouTube tab with the latest videos of your channels.
- **Catalog by genre** — every title of your services in rows. Press ≡ for *"What should I watch tonight?"*, and ≡ again for another one.
- **Learns your taste** — hold OK on a card: *Watched* or *Add to list*. After *Watched* it asks if you liked it, and the next picks follow.
- **My list and Continue watching.**
- **Scores** — IMDb and Rotten Tomatoes (optional OMDb key).
- **Opens titles straight in their app** — Netflix, Prime Video, Disney+… (optional Watchmode key).
- **Your greeting, your city's weather, your language** — the city is found from the TV's time zone; the language follows the TV.
- **Set up from your phone** — scan the QR code on the TV, paste your keys, done. Each key is tested on the spot (✓ / ✗).
- **Backup** — save your list, watched titles and settings as a file on your phone, or automatically on your own Google Drive.
- **Smooth** — 60 fps animations, made for the remote.

## Requirements

- Amazon Fire TV Stick / Cube (Fire OS 7 or 8), or an Android TV / Google TV with Android 8 or newer.
- A free [TMDB](https://www.themoviedb.org/signup) account for the API key (5 minutes; the app walks you through it).

## Install

1. **Developer options:** Settings → My Fire TV → About → press OK on the device name 7 times.
2. In **Developer options**, turn on **ADB debugging** and allow **unknown apps** for *Downloader*.
3. Open **Downloader** and enter:
   `https://github.com/vuoshino/Nottilo/raw/main/download/Nottilo.apk`
4. Open Nottilo: the welcome screen shows a **QR code**. Scan it with your phone and paste your TMDB key.
5. **Home button:** Settings → *Home Screen* → *Nottilo*.
   - *Android TV / Google TV:* accept "Allow USB debugging?" (tick *Always allow*).
   - *Fire TV:* Amazon doesn't let apps do this by themselves, so Nottilo shows **one command** to send once from a computer (`adb`) or an Android phone (an app like *Remote ADB Shell*), with your TV's address already filled in. From then on the Home button opens Nottilo.
6. To go back: Settings → *Home Screen* → *Original*. Nothing is uninstalled, no root needed.

Updates arrive by themselves from this page: Nottilo asks before installing. Current version: see [download/latest.json](download/latest.json).

## Privacy

Your keys, name and city stay **on your TV only**. Nottilo has no server and collects nothing. It talks only to the services you give a key to (TMDB, OMDb, Watchmode, YouTube), to Open‑Meteo for the weather, and to GitHub for updates.

## Support

Nottilo is free and has no ads. If you enjoy it, **[buy me a coffee on Ko‑fi](https://ko-fi.com/nottilo)** ☕ — it's what keeps updates coming.

---

## Italiano

**Un launcher gratuito per Fire TV e Android TV.** Una Home pulita con le tue app, consigli di film e serie dai servizi che hai, catalogo per genere e meteo. Niente pubblicità, nessun account, nessun dato raccolto.

**[⬇ Scarica Nottilo.apk](https://github.com/vuoshino/Nottilo/raw/main/download/Nottilo.apk)** · **[☕ Offrimi un caffè](https://ko-fi.com/nottilo)**

**Cosa fa**
- Consigli per stasera dai servizi di streaming del tuo paese, con locandina, trama, durata e dove guardarli.
- Schede Horror, Mistero, Thriller, Fantascienza e YouTube (gli ultimi video dei tuoi canali, anche senza chiave).
- Catalogo per genere: premi ≡ per *"Che film ti va stasera?"*, di nuovo ≡ per un altro.
- Tieni premuto OK su un consiglio: *Già visto* o *Aggiungi alla lista*. Dopo *Già visto* ti chiede se ti è piaciuto e i consigli si adattano.
- La mia lista, Continua a guardare, voti IMDb e Rotten Tomatoes, apertura diretta nell'app giusta.
- Saluto con il tuo nome, meteo della tua città, lingua del televisore.
- Configurazione dal telefono con un codice QR; ogni chiave viene provata subito.
- Backup come file sul telefono o automatico sul tuo Google Drive.

**Installazione:** Opzioni sviluppatore → *Debug ADB* attivo e origini sconosciute per *Downloader* → in Downloader inserisci `https://github.com/vuoshino/Nottilo/raw/main/download/Nottilo.apk` → apri Nottilo e inquadra il QR. Per il tasto Home: Impostazioni → *Schermata Home* → *Nottilo* (su Fire TV serve un comando una volta sola, da computer o telefono: Nottilo te lo mostra già pronto).

**Privacy:** chiavi, nome e città restano solo sul televisore. Nottilo non ha server e non raccoglie nulla.

Se ti piace, **[offrimi un caffè su Ko‑fi](https://ko-fi.com/nottilo)** ☕

---

## Credits

- Built on [Free My TV](https://github.com/simbasjungles/free-my-tv) © Free My TV contributors, MIT License — see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
- This product uses the TMDB API but is not endorsed or certified by TMDB.
- Scores from OMDb; streaming links from TMDB and Watchmode; weather from Open‑Meteo — each used with your own key, under its own terms.
- QR codes: [QR Code generator](https://www.nayuki.io/page/qr-code-generator-library) by Project Nayuki (MIT). Icons: Material Symbols (Apache 2.0). Font: Inter (SIL OFL 1.1).
- Netflix, Prime Video, Disney+, YouTube, Fire TV and other names belong to their owners. Nottilo is not affiliated with them.

Nottilo is free to download and use. © Nottilo. The app may not be resold or redistributed under another name.
