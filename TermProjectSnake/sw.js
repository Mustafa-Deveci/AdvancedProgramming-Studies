function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  }) 
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  e.respondWith(
    fetch(req, {credentials: 'same-origin'}).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req, {credentials: 'same-origin'}).then(r1 => r1) })
  )
}
self.addEventListener('fetch', fetchCB)
