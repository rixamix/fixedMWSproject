var cacheName = 'appCache';




 self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.open(cacheName).then(function(cache){
      return cache.match(event.request).then(function(response){
        return response || fetch(event.request).then(function(response){
          cache.put(event.request, response.clone());
        });
      });
    })
  );
});
