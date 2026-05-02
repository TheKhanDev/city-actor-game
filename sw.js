const CACHE_NAME = 'city-actor-v1';
const ASSETS = [
  '/city-actor-game/',
  '/city-actor-game/index.html',
  '/city-actor-game/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});