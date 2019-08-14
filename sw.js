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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.68ca0704.css",
    "revision": "bc9790053f018d95f9a420305c2a3b0a"
  },
  {
    "url": "assets/img/generic-profile.fb2c2b3c.png",
    "revision": "fb2c2b3c5a13daad62ffe053d8777cef"
  },
  {
    "url": "assets/js/app.c9a336b0.js",
    "revision": "585ba755a9f3a666993046b3e8a66543"
  },
  {
    "url": "assets/js/component--404.099ac4c6.js",
    "revision": "cd4f7ca2eb08fe5e0235b17204d14c25"
  },
  {
    "url": "assets/js/component--home.8f4d6587.js",
    "revision": "d70b0420692b4b3f86c7752aa734bec8"
  },
  {
    "url": "assets/js/component--session.99457bcc.js",
    "revision": "fd7f85cab0cd68181119c94723dfe264"
  },
  {
    "url": "assets/js/data/0.fb822acf.js",
    "revision": "1e1eec42cc4da0572d45079a97967c89"
  },
  {
    "url": "assets/js/data/1.80198cc9.js",
    "revision": "8e2dbb9df88eef843066e0d560cdd0aa"
  },
  {
    "url": "assets/js/data/10.a3caa47f.js",
    "revision": "a4099b541f9e4a4eefb2f34e6b0d3f1d"
  },
  {
    "url": "assets/js/data/11.a539daf5.js",
    "revision": "1e15568272f03816f0ea6f3b27de7241"
  },
  {
    "url": "assets/js/data/12.406122a9.js",
    "revision": "f660c9c910ab6e11b73280f0e71c53b2"
  },
  {
    "url": "assets/js/data/13.587b6790.js",
    "revision": "d23e297fb6dcc026dc30d48e3ba04645"
  },
  {
    "url": "assets/js/data/14.22bfcd21.js",
    "revision": "25bbcbb9d1080dc406d11cd09bcb6c3e"
  },
  {
    "url": "assets/js/data/15.469f964d.js",
    "revision": "c96df1c1abb5ba173d4e1ff556e8ea7e"
  },
  {
    "url": "assets/js/data/16.a4fa5de7.js",
    "revision": "185bdafec3d46ce7f32293083b557dea"
  },
  {
    "url": "assets/js/data/17.35ed5201.js",
    "revision": "d9fc3d6ed7a0133bea2241f455f59109"
  },
  {
    "url": "assets/js/data/18.ca37f020.js",
    "revision": "1d855d87d736cc1a1c11da8094838bb7"
  },
  {
    "url": "assets/js/data/19.e7191d7f.js",
    "revision": "9fed05115b1e7f14352d14e8de59e5db"
  },
  {
    "url": "assets/js/data/2.b6e0c4f2.js",
    "revision": "2f93a513baba29fa15adc412962abf47"
  },
  {
    "url": "assets/js/data/20.6e8381f9.js",
    "revision": "f096515d028be0c958b207419dc51190"
  },
  {
    "url": "assets/js/data/21.ba79c942.js",
    "revision": "8d4606a5114b8ef38ab27a681402b762"
  },
  {
    "url": "assets/js/data/22.6721ba19.js",
    "revision": "dba213d642b277b0df41c07c05aa97ef"
  },
  {
    "url": "assets/js/data/23.8789dfef.js",
    "revision": "695161ba15e60223ff7275e90276a6d5"
  },
  {
    "url": "assets/js/data/24.e94c7099.js",
    "revision": "e62616ba4dff92195574ed50ca3d37bc"
  },
  {
    "url": "assets/js/data/25.90dcde9b.js",
    "revision": "49a67d178c7e4b1315ad22ba67b2556d"
  },
  {
    "url": "assets/js/data/26.712ce285.js",
    "revision": "f386916321c0fb454253b33da4fc2571"
  },
  {
    "url": "assets/js/data/27.fc68cf74.js",
    "revision": "3b11255bb9612cf4bf37c7cfd43eaa6b"
  },
  {
    "url": "assets/js/data/28.5eb6c484.js",
    "revision": "0c424b0cd106064899748bbb84fd9eca"
  },
  {
    "url": "assets/js/data/29.70126c1c.js",
    "revision": "f1e01c70225a105d0c17633163c0cee5"
  },
  {
    "url": "assets/js/data/3.9c884588.js",
    "revision": "721944f85bfb598f3afad7a5c3180e1c"
  },
  {
    "url": "assets/js/data/30.3a38123d.js",
    "revision": "ccf0f51e04203aa7b8cf9a8cc0c30087"
  },
  {
    "url": "assets/js/data/31.850088a2.js",
    "revision": "f19f5de7d288479170260bb4716f206e"
  },
  {
    "url": "assets/js/data/32.d07591c9.js",
    "revision": "12c72dcbcc9cd84d8fd5cf9deca4b7f4"
  },
  {
    "url": "assets/js/data/4.81b7e633.js",
    "revision": "ff0587164e91f06f37a020ecf063690d"
  },
  {
    "url": "assets/js/data/5.5d54f3aa.js",
    "revision": "b0186a69dce12cb66044c559df318844"
  },
  {
    "url": "assets/js/data/6.57f4140a.js",
    "revision": "250639a36819c19e8d11b364d464ae4a"
  },
  {
    "url": "assets/js/data/7.8ebe5ba9.js",
    "revision": "96f03883969fd1450bc958906b0ec0b8"
  },
  {
    "url": "assets/js/data/8.d37e4cad.js",
    "revision": "cfb85fc55ff68c07193c19a13b28d60b"
  },
  {
    "url": "assets/js/data/9.f5dbad35.js",
    "revision": "6b52158413b7ca1d51712e11eed1c5c4"
  },
  {
    "url": "assets/js/page-query.f59e176c.js",
    "revision": "8b2ad63f212ccbe016ca111d7a7190b5"
  },
  {
    "url": "assets/manifest/client.json",
    "revision": "399e189a045ddca3f5c02b1f32d27825"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
