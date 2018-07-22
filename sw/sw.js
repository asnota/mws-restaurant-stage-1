let staticCacheName = 'restaurant-static-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll([
                '/',
                'css/styles.css',
                'data/restaurants.json',
                'img/',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'sw/sw.js'
            ]);
        })
    );
});
