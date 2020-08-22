importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')

if (workbox)
  console.log("Workbox berhasil dimuat")
else
  console.log("Workbox gagal dimuat")

workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1'},
  { url: '/nav.html', revision: '1'},
  { url: '/css/materialize.min.css', revision: '1'},
  { url: '/js/materialize.min.js', revision: '1'},
  { url: '/js/script.js', revision: '1'},
])
workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'pages'
  })
)

// self.addEventListener("fetch", function(event) {
//   var base_url = "https://readerapi.codepolitan.com/";

//   if (event.request.url.indexOf(base_url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(function(cache) {
//         return fetch(event.request).then(function(response) {
//           cache.put(event.request.url, response.clone());
//           return response;
//         })
//       })
//     );
//   } else {
//     event.respondWith(
//       caches.match(event.request, { ignoreSearch: true }).then(function(response) {
//         return response || fetch (event.request);
//       })
//     )
//   }
// });
