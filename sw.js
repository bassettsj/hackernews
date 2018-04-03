importScripts('/hackernews/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-hn",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/hackernews/_nuxt/09ce5118d619ac8cd9f1.js",
    "revision": "b65affde3e04a1054a15f76f233e4753"
  },
  {
    "url": "/hackernews/_nuxt/26dabccc727fedfdc470.js",
    "revision": "d3c0cc5fb25f2afc9a892672b7f5094e"
  },
  {
    "url": "/hackernews/_nuxt/3ddafb5f6cb0a5f1e0c7.js",
    "revision": "792432f798c4b835461d461f7a9e552c"
  },
  {
    "url": "/hackernews/_nuxt/88a470e148616b72182f.js",
    "revision": "b6c40b491abc49c77a5be1629ceafeb6"
  },
  {
    "url": "/hackernews/_nuxt/96003329a80a89d6bb3d.js",
    "revision": "fe865dff74f4708472f92d345ae8b3ab"
  },
  {
    "url": "/hackernews/_nuxt/e42ae3c7c8d67b45d08a.js",
    "revision": "25a29c8f8e6bdd60e204ff29dc700daa"
  }
])


workboxSW.router.registerRoute(new RegExp('/hackernews/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/hackernews/.*'), workboxSW.strategies.networkFirst({}), 'GET')

