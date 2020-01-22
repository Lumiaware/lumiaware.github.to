if ('serviceWorker' in navigator) {
    console.log('Service Worker Supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/js/sw_cached.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log('Service Worker: Error: ' + err));
    });
}
