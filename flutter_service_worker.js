'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9db6844eea6132f011b5e8c1823d36bc",
"index.html": "6ef85a8e4fd59f52c6cdf292611a75c4",
"/": "6ef85a8e4fd59f52c6cdf292611a75c4",
"main.dart.js": "b6274552425724b5adcbc0a29cc6cd82",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "136e12116b3e949226eeee18f55c478a",
".git/config": "69c24159a44f943ff09c0c7ad198e7a9",
".git/objects/3e/5d83140598a1c8d0155220fdf89c6495ba17ad": "cf2915c8651272334faebdcdcb8ae105",
".git/objects/50/ccaae4449b9d33d99565bf0edcd7e52fc6d882": "4f9fb7f5d3155662c56dd74d95770159",
".git/objects/9b/632b3ef5bf4cbdadde96e7a9d544ba47365e80": "786f4d1b3186694754a08282c84ac87e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/51/2af82cdf72f235e5f8127b7c0dfc02b2b0b93c": "1a9189ec2bfa3b759205c44c81837b58",
".git/objects/58/fee963b5d00592e4ae446ec16c1b1753fa2b7f": "2e98a8eecc855cd0ffead0adb161fce8",
".git/objects/05/f7a73cf1cddf420b165da98fdc516f37944f23": "05cd5caade51e401fb7df3821d0d0867",
".git/objects/9d/e607acb0056031feaed1ae685778c2ce325a5c": "2e5b01f03e342fe7a9d683e349e57731",
".git/objects/d7/4977472c96be4ad79b66cf7057ccf0ded31a6a": "b84d0e79b7246346560ef105bfe216a0",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/df/0c8cb700ba43b653a936af24aae9ae830a7e5b": "ece4752f57c9e2ec4746125be37a1f3a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2722fdedca3489b5cb3921ccd2f7f4a56daa73": "778b72950d7e15ca062233c1155733d5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/b2656746bcd81ba7f04c3e0331f901f6b03070": "901af81be3f8bbd58abbf1d0d5ab3697",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/cfce4d86363fe77193237b82037cdccd70cdef": "0c41a88b306c6e00c6796883e76cf528",
".git/objects/c8/6a8c372f5e050bcf7fc7f3d0ea9abeb4ba8988": "f325d64f496d593850446a6974880709",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/8b15a582887a507bc4872ceeee0d042c7c08fb": "14561a8ef67351144239fa829840c145",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/ff22b6754722bd11784c955a4bf54ffb272abb": "98a03e2744696becf57c83c4a2b25c1a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3a597b4ccd3278c5d75fd77f4e308b9f044ff7": "c5353d2191eab039f53b677285ad1706",
".git/objects/9a/631ce1e7c21f507c82540c54517b57a72f96e7": "53239ff74fc26d9dec9f331d76c3e4ee",
".git/objects/5d/e65ce0dedcb4f6df8c4638c85571fbd858808b": "56f97acd1da91c73d577761eb071a5ce",
".git/objects/96/c0a84b2f395b8cb4ef422b167c0886cd110cff": "7b14f99ea8e6a7f06de88ebf19d421e1",
".git/objects/96/ddf0003d64c4c3c2d5d3ff119de17c548c0410": "1c0f0dd6e97a8a91b258d2ebe0a3faf1",
".git/objects/30/33308a695ab4efa60441c23f2c18aaa94c568f": "b24945e1772cf4c26f94eff7c8f3dd6d",
".git/objects/5e/8afae5e6a75f7b20b7fc4c05d71bff306cde6f": "cc9000a36754af0e1e9d4f8043081778",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6c/5df186ce360ded7e75d327f2beeae220aef534": "a5d67f3b9aeab35f5f01444d45ff741f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/a7/6b8d808db518d1db6b4b5629fa6dfde4eae5f5": "e9a6926e2cae353854976012e2fe209f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/56b5952dbd3b7bcf84cfe8b5849d441759d02d": "56f7ea7d89a7862d200f66b97df750a7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/fc32726b508f07352c40cafa4c11567e30b5bb": "cfef1a19fb659b847a43657682d3c314",
".git/objects/cc/edd8f59658e74c88a8e3650206170a9e951e27": "50e990bfef2df1e639d7738b5d9d9b7c",
".git/objects/cc/5278285731abc2f21ffa1186100bebfde9ddf4": "78ba0c01a83a68aeecb8258cc499f97a",
".git/objects/e6/e444787d105f21c7f400852975b6bf138e7c64": "639f6e407020fb114e8cb8de72e5ed3b",
".git/objects/e6/5b018dc528a41b830e19cb121aa5f8d1dfe84f": "c0add393d4786d0e9def4a295068fa55",
".git/objects/e6/99f25697f977e06e28317d91723ac10d8fc4d0": "bef88415ddcad3e1ec614fb0bee7f676",
".git/objects/c2/dc45c1cc085279068683a5aa7f7b49e3ca5e27": "a6b39bd38fee0e2ec10125d81954f5e3",
".git/objects/e7/2a5eb99d64fcec6e99d21c77de5e836f96bbfa": "bf8c194063b1eb0b6311f9a24a295b64",
".git/objects/e0/63327b15543d38a099ebda7f705589cd257d23": "b42af805b0a4d9eac8a9822146551d37",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/7b77f8e4aee80fc30ecbd848c76879c338de42": "b22bba1189dc95bb54f0b48fdb4c969a",
".git/objects/4a/a4d9838e507f122aa132db82ab89f33ea3ea4c": "f23cf9c13fe61c7f2b10bf2036aea370",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/bf2c4d91ade571fc71f35b5bd52386965e28df": "949c61239a8f353a5646f9532add8821",
".git/objects/13/09c990427d125f57a3a47ce921f081e43807f6": "c681f1006f2796d8d3631748a8b9b622",
".git/objects/7a/876e28e8e43ac9ab91fe361228c5e4c4e5253e": "114ff34728e0f86c1797838dc98996df",
".git/objects/14/5ada4ef7af77f0f87047b5423106c8fb622166": "2b34d987ba52988710b3cb4d90a7e8c1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d497675cdf177c127d69a96303ade193",
".git/logs/refs/heads/main": "a7b2700b3a01ddf3037b3d65a3447849",
".git/logs/refs/remotes/origin/main": "0ab2f7787a4fa3e8b48065dc6ade8fbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "501e8ce8fa1ce33aa1bd0aac39711ecf",
".git/refs/remotes/origin/main": "501e8ce8fa1ce33aa1bd0aac39711ecf",
".git/index": "02b4f386e9dc47ebc01d79f989e09074",
".git/COMMIT_EDITMSG": "2466f5790ebefc08ff371f634e4bdbba",
".git/FETCH_HEAD": "85141846fec3679dfe93978bcd2c327a",
"assets/AssetManifest.json": "0106c31c6e2193286b837580929286ca",
"assets/NOTICES": "6c1e8ee5cbd87074d024056d0c386058",
"assets/FontManifest.json": "0b85fae6fe26731f2bd0f7b060b635b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/home.svg": "4c8f96601d092561561e73ad832c7817",
"assets/assets/svg/bg.svg": "602e5993a6803be8f71cb88bc3d953d5",
"assets/assets/images/uiux.png": "4c564e2e91a64b75474f8b4c7218eef4",
"assets/assets/images/web.png": "c9ec582236116ac611811c8a87d684f2",
"assets/assets/images/mobile.png": "3acc7c6ae977a19ede2f8b0a305160b8",
"assets/assets/images/about.png": "38124eff9c4a7904b847e2a828e5f4b9",
"assets/assets/fonts/Roboto-Medium.ttf": "b21ffa747200921845e38910b8ea97c0",
"assets/assets/fonts/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/assets/fonts/Roboto-Bold.ttf": "fb6210739c4993c1a86f812e6502e471",
"assets/assets/fonts/Roboto-Thin.ttf": "ad0fb8cf3e91768b11388432acb16ca3",
"assets/assets/fonts/Roboto-Black.ttf": "56aa07e4f2f764e31cb09d8ad1362808",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
