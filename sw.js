// Service worker SPJ — simpan kulit aplikasi (ikon, halaman pembuka) supaya ikon boleh dibuka dengan cepat
// dan memaparkan mesej "Tiada sambungan internet" jika luar talian. Kandungan SPJ (Apps Script) tidak disimpan di sini.
const CACHE = 'spj-kulit-v1';
const FAIL = ['./', 'index.html', 'manifest.webmanifest', 'ikon-192.png', 'ikon-512.png', 'ikon-maskable-512.png', 'apple-touch-icon.png', 'favicon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FAIL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return; // SPJ/Google tidak disentuh
  e.respondWith(
    fetch(e.request).then(r => {
      const salin = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, salin));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
