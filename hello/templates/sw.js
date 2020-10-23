const VERSION = '1.0.2';

self.addEventListener('install', (event) => {
    console.log('beep');
    console.log('[SW] Installing SW version:', VERSION);
});
