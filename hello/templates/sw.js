const staticCacheName = 'site-static-v8';
const dynamicCacheName = 'site-dynamic-v1'
const assets = [
    '/',
    '/static/js/app.js',
    '/static/js/ui.js',
    '/static/js/materialize.min.js',
    '/static/css/styles.css',
    '/static/css/materialize.min.css',
    '/static/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
    '/pages/fallback.html'
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
}
// Listen to install event
self.addEventListener('install', (event) => {
    console.log('[SW] Service worker installed');
    event.waitUntil(
        caches.open(staticCacheName).then( cache => {
            console.log('Caching shell assets');
            cache.addAll(assets);
        })
    )
});

// Listen to activate event
self.addEventListener('activate', (evt) => {
    console.log("[SW] Service worker activated");
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

// Listen to fetch event
self.addEventListener('fetch', (evt) => {
    // console.log("[SW] Fetch event", evt)
    // evt.respondWith(
    //     caches.match(evt.request).then(cacheRes => {
    //         return cacheRes || fetch(evt.request).then(fetchRes => {
    //             return caches.open(dynamicCacheName).then(cache => {
    //                 cache.put(evt.request.url, fetchRes.clone());
    //                 limitCacheSize(dynamicCacheName, 15);
    //                 return fetchRes;
    //             })
    //         });
    //     }).catch(() => {
    //         if(evt.request.url.indexOf('.html') > -1){
    //             return caches.match('/pages/fallback.html');
    //         }
    //     })
    // );
});
