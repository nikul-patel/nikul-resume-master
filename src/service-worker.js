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
