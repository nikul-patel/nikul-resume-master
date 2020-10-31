importScripts("/precache-manifest.45ac80cbaad5e52377f2694e1eb49cbf.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || [])

// eslint-disable-next-line no-undef
if (workbox)
  console.log(`Yay! Workbox is loaded 🎉`)
else
  console.log(`Boo! Workbox didn't load 😬`)

// eslint-disable-next-line no-undef
workbox.setConfig({ debug: true })
// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

