self.__precacheManifest = [].concat(self.__precacheManifest || [])

// eslint-disable-next-line no-undef
if (workbox) {
  // eslint-disable-next-line no-undef
  workbox.setConfig({ debug: false })
  // eslint-disable-next-line no-undef
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
}
