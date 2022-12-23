function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  }) 
  .catch(console.log)
}
function fetchCB(e) {
  let req = e.request;
  e.respondWith(
    fetch(req)
      .then(response => {
        if (!response) {
          throw new Error("No response from server");
        }
        return save(req, response);
      })
      .catch(error => {
        console.error(error);
        return caches.match(req);
      })
  );
}
self.addEventListener('fetch', fetchCB)
