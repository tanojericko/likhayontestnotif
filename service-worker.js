const CACHE_NAME = 'srtf-simulator-v1';
const ASSETS = [
    '/likhayontestnotif/',
    '/likhayontestnotif/index.html',
    '/likhayontestnotif/bootstrap.min.css',
    '/likhayontestnotif/styles.css',
    '/likhayontestnotif/script.js',
    'likhayontestnotif/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});


