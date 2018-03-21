/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "60f50ef416a4bbbfeb03e8a6d5e8da17"
  },
  {
    "url": "build/app/1upjtoxg.es5.js",
    "revision": "ab65fb22ef8f4bfb4103f4b59a2f8a81"
  },
  {
    "url": "build/app/1upjtoxg.js",
    "revision": "9ba26d032acc62740ccfaca32442a534"
  },
  {
    "url": "build/app/app.m9hna5wq.js",
    "revision": "c88d72624f2170fd80f76e8f670e5805"
  },
  {
    "url": "build/app/app.yxrpbav4.js",
    "revision": "1d66fc26fb690594ac61b6224b7cf63e"
  },
  {
    "url": "build/app/chunk1.es5.js",
    "revision": "ddfb3867d26c02eb97567270e3282436"
  },
  {
    "url": "build/app/chunk1.js",
    "revision": "062a09e8f97dc59680f969fc9ab041d8"
  },
  {
    "url": "build/app/d24cxzbj.es5.js",
    "revision": "0154fad878508d7590ca126a21d9f411"
  },
  {
    "url": "build/app/d24cxzbj.js",
    "revision": "f818ddf521723619c1ea1ccf8bebf8ee"
  },
  {
    "url": "build/app/epmpr0ju.es5.js",
    "revision": "a64b74b194f52416203163925c6035f7"
  },
  {
    "url": "build/app/epmpr0ju.js",
    "revision": "ab250137c00979fa8cb73b420dee3edb"
  },
  {
    "url": "build/app/uvwf6qvo.es5.js",
    "revision": "0f148bda4ae64659089b23c5bab2ca14"
  },
  {
    "url": "build/app/uvwf6qvo.js",
    "revision": "602ff8a5d983df93e84ec8268bdae4c3"
  },
  {
    "url": "build/app/yigntril.es5.js",
    "revision": "c3ceef0146bafe8033f0f42646d4cf01"
  },
  {
    "url": "build/app/yigntril.js",
    "revision": "ff6cc8625ee5609f1674d05b40190fd2"
  },
  {
    "url": "index.html",
    "revision": "8eabe1facea104ca34bbce86ad7b7464"
  },
  {
    "url": "manifest.json",
    "revision": "e33a9f39d3f8b2c46d13156237b4e0ae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
