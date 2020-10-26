const VERSION = '1.0.7';
const staticCacheName = 'site-static';
const assets = [
    '/',
    '/static/js/app.js',
    '/static/js/ui.js',
    '/static/js/materialize.min.js',
    '/static/css/styles.css',
    '/static/css/materialize.min.css',
    '/static/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// Listen to install event
self.addEventListener('install', (event) => {
    console.log('[SW] Service worker installed. ver=' + VERSION);
    event.waitUntil(
        caches.open(staticCacheName).then( cache => {
            console.log('Caching shell assets');
            cache.addAll(assets);
        })
    )
});

// Listen to activate event
self.addEventListener('activate', (event) => {
    console.log("[SW] Service worker activated")
});

// Listen to fetch event
self.addEventListener('fetch', (evt) => {
    console.log("[SW] Fetch event", evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);            
        })
    );
});
