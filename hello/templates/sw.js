const VERSION = '1.0.6';

// Listen to install event
self.addEventListener('install', (event) => {
    console.log('[SW] Service worker installed. ver=' + VERSION);
});

// Listen to activate event
self.addEventListener('activate', (event) => {
    console.log("[SW] Service worker activated")
});

// Listen to fetch event
self.addEventListener('fetch', (event) => {
    console.log("[SW] Fetch event", event)
});
