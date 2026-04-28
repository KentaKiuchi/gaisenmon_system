const CACHE = 'kaisenmon-v1';
const ASSETS = [
  '/gaisenmon_system/',
  '/gaisenmon_system/index.html',
  '/gaisenmon_system/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
