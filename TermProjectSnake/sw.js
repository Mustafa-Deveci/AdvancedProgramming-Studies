async function save(req, resp) {
    try {
        const cache = await caches.open(CACHE);
        cache.put(req, resp.clone());
        return resp;
    } catch (data) {
        return console.log(data);
    }
  }
  function fetchCB(e) { //fetch first
    let req = e.request
    e.respondWith(
      fetch(req).then(r2 => save(req, r2))
      .catch(async () => { const r1 = await caches.match(req);
      return r1; })
    )
  }
  self.addEventListener('fetch', fetchCB)
