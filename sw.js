importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'qa-cache',
    precache: 'precache',
    runtime: 'runtime',
  });
  
// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'cache-stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'cache-images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, //cache for one week
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('\.html$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-html',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7 //cache for one week
        }
    })
);
  
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "4be8ebccd973b5847f3621eca467fa84"
  },
  {
    "url": "404/index.html",
    "revision": "4be8ebccd973b5847f3621eca467fa84"
  },
  {
    "url": "AlanKoch/index.html",
    "revision": "fd7222565055d7a5f8998f3940f9faa1"
  },
  {
    "url": "AndrewBirkholz/index.html",
    "revision": "e9576674cd81890e046369574589a5f6"
  },
  {
    "url": "AndrewGriffin/index.html",
    "revision": "43c3a38f2ba102496de6077c88d487c1"
  },
  {
    "url": "AnitaUppalapati/index.html",
    "revision": "9b316ceabe6e1fad4940e3f48a4f9c91"
  },
  {
    "url": "AnneHungate/index.html",
    "revision": "045065ce21f5f4460ed39a795a9a9950"
  },
  {
    "url": "AnnieBhaumik/index.html",
    "revision": "53fcd71a9b13d8c16e65a35ea5f41f6e"
  },
  {
    "url": "assets/css/0.styles.73531cc0.css",
    "revision": "6931a86473140dc98b6b8ce448174ba6"
  },
  {
    "url": "assets/data/1/0aa4e8e9.json",
    "revision": "9d75dad89d81aa5a95384376fea76316"
  },
  {
    "url": "assets/data/1/0f4b35fb.json",
    "revision": "5702be3a18a5cdc88a047bf40fe2797a"
  },
  {
    "url": "assets/data/1/12c859be.json",
    "revision": "6ae2357c03ca8920f0fb8e8d74ce31f5"
  },
  {
    "url": "assets/data/1/15bdc495.json",
    "revision": "9a18390dcc63efeafa1fe6d74a0738e3"
  },
  {
    "url": "assets/data/1/1df2a0fc.json",
    "revision": "9e7f7f0be338d844f18d21e705df9e54"
  },
  {
    "url": "assets/data/1/20fadf7d.json",
    "revision": "188551dbc795ab69b9eba9539fcef1ea"
  },
  {
    "url": "assets/data/1/2260c5e9.json",
    "revision": "8c7dbaac8a3878614d99f8efb4e7d399"
  },
  {
    "url": "assets/data/1/2c8e5836.json",
    "revision": "910288c5b7afd7db0acdc0655cf93710"
  },
  {
    "url": "assets/data/1/2d647158.json",
    "revision": "7e9f54af9ccec53876cee31a911ba723"
  },
  {
    "url": "assets/data/1/2e393c07.json",
    "revision": "7744bf696102a6b7ce94e5ee01872723"
  },
  {
    "url": "assets/data/1/3a8569ce.json",
    "revision": "d1d6e1940b2f0e5ade049c02d7703ec5"
  },
  {
    "url": "assets/data/1/3fac89ed.json",
    "revision": "99af8511cd0a9238d0498c509f1d3bad"
  },
  {
    "url": "assets/data/1/4473a760.json",
    "revision": "08543c086eaecf668ed1abd7d3711ade"
  },
  {
    "url": "assets/data/1/4529805d.json",
    "revision": "3f6771c4446d15871366b97f99f0a420"
  },
  {
    "url": "assets/data/1/483bdbaf.json",
    "revision": "5d534d3e1e1d6f27fa1c3adbaa874007"
  },
  {
    "url": "assets/data/1/554a41b1.json",
    "revision": "df1c98a17f49fc1abfd739d8ff96356d"
  },
  {
    "url": "assets/data/1/5b88710c.json",
    "revision": "636cdc8a02de7b3ed2d6ef7487011daa"
  },
  {
    "url": "assets/data/1/60200c3f.json",
    "revision": "e74c58b7354f78156151ffb0d0f71bda"
  },
  {
    "url": "assets/data/1/63b6ba29.json",
    "revision": "f00887f6b45fcdf07c40d008baf82e46"
  },
  {
    "url": "assets/data/1/653e3d17.json",
    "revision": "7a71c87e4838fa218b4753a61bada5a5"
  },
  {
    "url": "assets/data/1/65c1521f.json",
    "revision": "71b33d3ae769e6af92b86649c0817fb1"
  },
  {
    "url": "assets/data/1/668b0373.json",
    "revision": "47fd3d8e0dd4f3fa79016ab4eb76f5c7"
  },
  {
    "url": "assets/data/1/68ea3d8f.json",
    "revision": "c9b5ad6ae21ebd2c7f1af4ee3070f07c"
  },
  {
    "url": "assets/data/1/77aa6105.json",
    "revision": "ac42f793142ebb7ef661f90670794773"
  },
  {
    "url": "assets/data/1/77d1e40c.json",
    "revision": "9eab0f6593e8d4491118465b71b28947"
  },
  {
    "url": "assets/data/1/936942a2.json",
    "revision": "c3c405b27526b8be674bb349e4df7036"
  },
  {
    "url": "assets/data/1/9f33162a.json",
    "revision": "89446094176cbbf93a37f7eb1c4d3e05"
  },
  {
    "url": "assets/data/1/9f59929c.json",
    "revision": "63cec636183f9457dbe268ecc9195d5a"
  },
  {
    "url": "assets/data/1/a5f84f80.json",
    "revision": "46e5b65d83c689b0f713118da03d7ebc"
  },
  {
    "url": "assets/data/1/aa8331b6.json",
    "revision": "bf919844c0fa1d073544ce23a49fe7ab"
  },
  {
    "url": "assets/data/1/b3e66c24.json",
    "revision": "1a8316a7d6ffab1606db1ea9a01876b5"
  },
  {
    "url": "assets/data/1/b4bffb54.json",
    "revision": "399e8dfcb66b60a8a1e268c6cbcf650d"
  },
  {
    "url": "assets/data/1/d20fb3ce.json",
    "revision": "1d6782f77b8e0ded7ee626e21172f3b1"
  },
  {
    "url": "assets/data/1/da32b2a2.json",
    "revision": "bd9ed565a2bbbed5bfdb395733748eae"
  },
  {
    "url": "assets/img/alan koch.9b3eb6bf.webp",
    "revision": "9b3eb6bf2b99d96e9207df4fa62b99ec"
  },
  {
    "url": "assets/img/andrew griffin.e1ea85cd.webp",
    "revision": "e1ea85cd615f1c109e081ec5b30f4e96"
  },
  {
    "url": "assets/img/anita uppalapati.e965ef53.webp",
    "revision": "e965ef5398b8ab905c6e6e29f59ee1fe"
  },
  {
    "url": "assets/img/annie bhaumik.ddaf9756.webp",
    "revision": "ddaf97560e2b2bd4f7b5da117b98addc"
  },
  {
    "url": "assets/img/david laulusa.58294215.webp",
    "revision": "58294215601d068cb025cae06903bfa5"
  },
  {
    "url": "assets/img/deepika achary.7bf57790.webp",
    "revision": "7bf57790e8548b42ba4e643a51633582"
  },
  {
    "url": "assets/img/dennis colburn.a6237618.webp",
    "revision": "a62376182b7cd2fcd2c2b28f5e28e12a"
  },
  {
    "url": "assets/img/eran kinsbruner.0c6c44df.webp",
    "revision": "0c6c44dfb55eb918b1fad7056f74e449"
  },
  {
    "url": "assets/img/ford arnett.a7dd3c67.webp",
    "revision": "a7dd3c67832e75bb83587a3ec7774de2"
  },
  {
    "url": "assets/img/generic-profile.fb2c2b3c.png",
    "revision": "fb2c2b3c5a13daad62ffe053d8777cef"
  },
  {
    "url": "assets/img/jeff van fleet.5869847c.webp",
    "revision": "5869847c7fd3a362674c5dd552069d85"
  },
  {
    "url": "assets/img/jenna davis.1fbbf970.webp",
    "revision": "1fbbf970d20090a96a544ce3acd8e78e"
  },
  {
    "url": "assets/img/jennifer bonine.831ef5ad.webp",
    "revision": "831ef5adfcc8298e5590e743336cecc8"
  },
  {
    "url": "assets/img/jerren every.b1274102.webp",
    "revision": "b127410285c4f68a67d4b89fea651a00"
  },
  {
    "url": "assets/img/jess lancaster.79e3a948.webp",
    "revision": "79e3a9480883f8d4ed8c231f73b70961"
  },
  {
    "url": "assets/img/joel montvelisky.1e3b26ca.webp",
    "revision": "1e3b26ca501ef0420357dd2e8556c404"
  },
  {
    "url": "assets/img/josh grant.007ca439.webp",
    "revision": "007ca439ba1fbecb800272aa12a06e03"
  },
  {
    "url": "assets/img/joshua russell.791de1ab.webp",
    "revision": "791de1ab9ef7f0645e1881ff02e14ca3"
  },
  {
    "url": "assets/img/kelsey shannahan.a4c3fd16.webp",
    "revision": "a4c3fd16937bcf51f5accc151abe0978"
  },
  {
    "url": "assets/img/kenny gilles.68326eca.webp",
    "revision": "68326ecaef7001cc1a525b3c8dea92ee"
  },
  {
    "url": "assets/img/mark adams.032a1bfa.webp",
    "revision": "032a1bfa71068da8ca54a9b3d85f6131"
  },
  {
    "url": "assets/img/max saperstone.61f8b060.webp",
    "revision": "61f8b0603b1dd4671e302e069a7d9bec"
  },
  {
    "url": "assets/img/mike buening.ca1e245c.webp",
    "revision": "ca1e245ce8f4ebeb6d697eb7700f6230"
  },
  {
    "url": "assets/img/mohamed maktoum yoosuf.8efce5e0.webp",
    "revision": "8efce5e000b97c3de2f3bf91ce5abcd5"
  },
  {
    "url": "assets/img/patrick poulin.3c7710fc.webp",
    "revision": "3c7710fc321eb72d92ba4cd655c4afee"
  },
  {
    "url": "assets/img/paul grizzaffi.0df140d1.webp",
    "revision": "0df140d1046a50d6e7e745dd6605761b"
  },
  {
    "url": "assets/img/raj subrameyer.d9c1e9f4.webp",
    "revision": "d9c1e9f4691e1d4182583a821856dd6d"
  },
  {
    "url": "assets/img/richard strang.79fb4653.webp",
    "revision": "79fb4653ce01a632dda136a7a682d5b4"
  },
  {
    "url": "assets/img/robert fornal.e9c94383.webp",
    "revision": "e9c9438329da9b698a0b41bd9306c6ff"
  },
  {
    "url": "assets/img/ryan quellhorst.1dfeae95.webp",
    "revision": "1dfeae956ff3c09b92fb1266f070e89e"
  },
  {
    "url": "assets/img/sangit patel.6adbdc0d.webp",
    "revision": "6adbdc0d7964cddba6739ab6c3b3ae12"
  },
  {
    "url": "assets/img/srini raghavan ramesh.ee997c5c.webp",
    "revision": "ee997c5cee447ab4fc82215b649017e2"
  },
  {
    "url": "assets/js/app.a0ccbb9d.js",
    "revision": "45bd335441cfab66301157694fe43bcb"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.5aab6ac8.js",
    "revision": "7d27de746154a0e800e1e2f8dbac9513"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.50ebc6fc.js",
    "revision": "c5fa193ad0dac7df7ffc81bcd7599b4d"
  },
  {
    "url": "assets/js/page--src--templates--session-vue.5c92364c.js",
    "revision": "d478761d37addc62035a0b1381b6011f"
  },
  {
    "url": "assets/js/vendors~page--src--templates--session-vue.4bcd118b.js",
    "revision": "5df6ea60be13a501ba65dcf0a42477c6"
  },
  {
    "url": "assets/static/favicon.1539b60.af23d95.png",
    "revision": "14abed9ce0e092b924639ca0ffd03b62"
  },
  {
    "url": "assets/static/favicon.62d22cb.af23d95.png",
    "revision": "b30ee95be125d7dff57231f889ac7c3e"
  },
  {
    "url": "assets/static/favicon.7b22250.af23d95.png",
    "revision": "0ab2d751cb5628b9c426d0af9dd5497f"
  },
  {
    "url": "assets/static/favicon.ac8d93a.af23d95.png",
    "revision": "af49ef7347f7b4eec089a8c8f25fbd65"
  },
  {
    "url": "assets/static/favicon.b9532cc.af23d95.png",
    "revision": "dfc344bbd6ac9f6969c7b87c9068e30a"
  },
  {
    "url": "assets/static/favicon.ce0531f.af23d95.png",
    "revision": "1eac566b8bcb4dde804bf8902c5939c7"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.af23d95.png",
    "revision": "7932a6488b5327c3f5b37153d4f97aa1"
  },
  {
    "url": "assets/static/favicon.f22e9f3.af23d95.png",
    "revision": "9383235b27041f682d1e6ef3fb21f393"
  },
  {
    "url": "BrianBrady/index.html",
    "revision": "241041511e7e2bb5b21a2cc0b2b6bc7e"
  },
  {
    "url": "data.json",
    "revision": "b5d01bdccd463be8ecfd252abcd7dee4"
  },
  {
    "url": "DavidLaulusa/index.html",
    "revision": "51754b15b5bd342b87284263a054e5ba"
  },
  {
    "url": "DeepikaAchary/index.html",
    "revision": "7797e53c02ab7f0f16600c48c62860bb"
  },
  {
    "url": "DennisColburn/index.html",
    "revision": "790bdc0566bf69433460924a8d1f4196"
  },
  {
    "url": "EranKinsbruner/index.html",
    "revision": "1493877283a7feb042425800dc3face3"
  },
  {
    "url": "FordArnett/index.html",
    "revision": "2f930da0abec887adf8b13d738bc48dd"
  },
  {
    "url": "index.html",
    "revision": "8fdc264dc32a12ff4f1ec834df2add32"
  },
  {
    "url": "JeffVanFleet/index.html",
    "revision": "45d871d73a03c8d049377ddc3b9a56e7"
  },
  {
    "url": "JennaDavis/index.html",
    "revision": "30baf29ce77f799f6cec434853f623c0"
  },
  {
    "url": "JerrenEvery/index.html",
    "revision": "0b85c8c076b292da42bca1e657af4131"
  },
  {
    "url": "JessLancaster/index.html",
    "revision": "bce31fb5b8d4a7f8a2d66425ca275084"
  },
  {
    "url": "JoelMontvelisky/index.html",
    "revision": "bdac1e877437cf90b00e947c1c45dbd6"
  },
  {
    "url": "JoshGrant/index.html",
    "revision": "138421b886bec70a761661b2b33bb4b4"
  },
  {
    "url": "JoshuaRussell/index.html",
    "revision": "73af2fa4f8511d42e39bed4adaff5e55"
  },
  {
    "url": "KelseyShannahan/index.html",
    "revision": "f9d130e658d6a4c33f08ae3a154ee5b4"
  },
  {
    "url": "KennyGilles/index.html",
    "revision": "54903485fe4b9b77cbdd2a7306fc8bd2"
  },
  {
    "url": "logo-192.png",
    "revision": "af23d950429ffb54e42245904932783f"
  },
  {
    "url": "logo-512.png",
    "revision": "208031b296f4c82b6b60c0c128871b90"
  },
  {
    "url": "manifest.json",
    "revision": "0e54fb2e2fb47e455a51b4ac4cfb0962"
  },
  {
    "url": "MaxSaperstone/index.html",
    "revision": "50e0ea0f55bf4674a80e03a64350ba98"
  },
  {
    "url": "MohamedMaktoumYoosuf/index.html",
    "revision": "2036a6fa468f14d1ce5e1577f6ef0dd8"
  },
  {
    "url": "PatrickPoulin/index.html",
    "revision": "4df95e39f53bdfdfdee41ffa8efc159f"
  },
  {
    "url": "PaulGrizzaffi/index.html",
    "revision": "1b2b4becc3e4bc9442bfc3481bb345eb"
  },
  {
    "url": "RajSubrameyer/index.html",
    "revision": "82475a328d107363bf22b7630422984b"
  },
  {
    "url": "RichardDouglass/index.html",
    "revision": "d1d8e7f35a20ffcf2e4dd7e771985c89"
  },
  {
    "url": "RichardStrang/index.html",
    "revision": "af9d7874e888345bff0df1bbbaca8d59"
  },
  {
    "url": "RobertFornal/index.html",
    "revision": "2094f85757c1e2b05cf082721edea735"
  },
  {
    "url": "RyanQuellhorst/index.html",
    "revision": "330eee81bc935756cb364c6c74aa354a"
  },
  {
    "url": "ShivaAgolla/index.html",
    "revision": "32fbe7d088a1ea0b354f2ea6e0221b15"
  },
  {
    "url": "SriniRaghavanRamesh/index.html",
    "revision": "0fdd6a906ce79c7bff3f0fc5d3fd5cde"
  },
  {
    "url": "ThomasHaver/index.html",
    "revision": "b95cd41a5a0512655c0e234974ee4c48"
  }
]);