// Nottilo Launcher – backup su Google Drive (modello: compila le due righe qui sotto)
// Salva e legge il backup dell'app nella tua cartella Drive (sottocartella "Backup Nottilo"),
// tenendo anche le ultime 10 copie precedenti. Solo chi conosce la chiave può leggere o scrivere.

const FOLDER_ID = '';   // facoltativo: l'ID di una tua cartella Drive (vuoto = "Il mio Drive")
const KEY = 'SCEGLI-UNA-CHIAVE-LUNGA';   // inventala tu (almeno 20 caratteri) e scrivila uguale nell'app
const NAME = 'FreeMyTV-backup.json';
const KEEP = 10;

function doGet(e) {
  if (!allowed(e)) return json({ ok: false, error: 'denied' });
  const files = backupFolder().getFilesByName(NAME);
  if (!files.hasNext()) return json({ ok: false, error: 'none' });
  return ContentService.createTextOutput(files.next().getBlob().getDataAsString('UTF-8'))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  if (!allowed(e)) return json({ ok: false, error: 'denied' });
  const body = e.postData && e.postData.contents;
  try {
    if (!JSON.parse(body).prefs) return json({ ok: false, error: 'empty' });
  } catch (err) {
    return json({ ok: false, error: 'invalid' });
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const folder = backupFolder();
    const old = folder.getFilesByName(NAME);
    while (old.hasNext()) {
      const f = old.next();
      f.setName('FreeMyTV-backup ' + Utilities.formatDate(f.getLastUpdated(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH.mm.ss') + '.json');
    }
    folder.createFile(NAME, body, 'application/json');
    const copies = [];
    const all = folder.getFiles();
    while (all.hasNext()) {
      const f = all.next();
      if (f.getName() !== NAME && f.getName().indexOf('FreeMyTV-backup ') === 0) copies.push(f);
    }
    copies.sort(function (a, b) { return b.getLastUpdated() - a.getLastUpdated(); });
    copies.slice(KEEP).forEach(function (f) { f.setTrashed(true); });
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

function allowed(e) {
  return KEY.length >= 20 && KEY !== 'SCEGLI-UNA-CHIAVE-LUNGA' && e && e.parameter && e.parameter.key === KEY;
}

function backupFolder() {
  const parent = FOLDER_ID ? DriveApp.getFolderById(FOLDER_ID) : DriveApp.getRootFolder();
  const it = parent.getFoldersByName('Backup Nottilo');
  return it.hasNext() ? it.next() : parent.createFolder('Backup Nottilo');
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// Per autorizzare lo script la prima volta: seleziona "prova" in alto e premi Esegui.
function prova() {
  Logger.log('Cartella: ' + backupFolder().getName());
}
