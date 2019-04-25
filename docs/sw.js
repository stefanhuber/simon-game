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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d46ea6586bdfea9ad504b0d39dc0a022"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "c96701f90b693ce29bfb73a9a80803e3"
  },
  {
    "url": "build/app.css",
    "revision": "616f77e0a7c57b78c59276c0baf02982"
  },
  {
    "url": "build/app.js",
    "revision": "4c35f03eeeb24775123b0fe06aeb038f"
  },
  {
    "url": "build/app/1gqqauko.entry.js",
    "revision": "d46a9001492881b0db902facb8306ddc"
  },
  {
    "url": "build/app/1gqqauko.sc.entry.js",
    "revision": "d46a9001492881b0db902facb8306ddc"
  },
  {
    "url": "build/app/app.bwiwakmr.js",
    "revision": "6f08b06a49abc1ae14628f4a8a05c668"
  },
  {
    "url": "build/app/app.fpqtxcuv.js",
    "revision": "16942d5c252f95dbdfbcc71c7069c27b"
  },
  {
    "url": "build/app/b3rpttrr.entry.js",
    "revision": "6f7ae9b6d45169288228c43adef51ab2"
  },
  {
    "url": "build/app/b3rpttrr.sc.entry.js",
    "revision": "6f7ae9b6d45169288228c43adef51ab2"
  },
  {
    "url": "build/app/chunk-3ef12be8.js",
    "revision": "20be84fe77cabf53542796b2438b9c9d"
  },
  {
    "url": "build/app/chunk-4dd0ccc9.js",
    "revision": "6749e4a0729ad0a479147a04d9183685"
  },
  {
    "url": "build/app/chunk-aa648102.es5.js",
    "revision": "904c84377e5451f1a109852f3b8cada8"
  },
  {
    "url": "build/app/chunk-dd967325.es5.js",
    "revision": "5cf4a6599eef237e67dea36763ccb79d"
  },
  {
    "url": "build/app/cmmqhsks.entry.js",
    "revision": "0a6310852912778ac2cfe420880dd8a0"
  },
  {
    "url": "build/app/cmmqhsks.sc.entry.js",
    "revision": "0a6310852912778ac2cfe420880dd8a0"
  },
  {
    "url": "build/app/fwp0yhlk.entry.js",
    "revision": "170f8fd1887f96464f32184988be937b"
  },
  {
    "url": "build/app/fwp0yhlk.sc.entry.js",
    "revision": "170f8fd1887f96464f32184988be937b"
  },
  {
    "url": "build/app/hyuo69l9.entry.js",
    "revision": "1d850eebd2fd9c8f8ba021e41f487f1d"
  },
  {
    "url": "build/app/hyuo69l9.sc.entry.js",
    "revision": "1d850eebd2fd9c8f8ba021e41f487f1d"
  },
  {
    "url": "build/app/jo2ahdac.entry.js",
    "revision": "24edbf6a175a0925ab146992ea47efaf"
  },
  {
    "url": "build/app/jo2ahdac.sc.entry.js",
    "revision": "24edbf6a175a0925ab146992ea47efaf"
  },
  {
    "url": "index.html",
    "revision": "c6c68491f1151bd0b0f670122a788876"
  },
  {
    "url": "manifest.json",
    "revision": "2396fe65d8ed4f29fe92a20e202c9523"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
