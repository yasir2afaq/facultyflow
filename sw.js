const CACHE='facultyflow-v35';
const ASSETS=['./','./index.html','./manifest.json','./sw.js','./icon-180.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const isPage=e.request.mode==='navigate'||e.request.destination==='document'||e.request.url.endsWith('/index.html')||e.request.url.endsWith('/');
  if(isPage){
    // Network-first for the app shell itself, so a new deployment is picked
    // up on the very next load instead of requiring a manual cache-name bump
    // and users being stuck on a stale cached copy after every update.
    e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return r}).catch(()=>caches.match(e.request).then(c=>c||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return r}).catch(()=>caches.match('./index.html'))));
});
