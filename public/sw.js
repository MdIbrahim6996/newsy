if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>t(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bed047443508f303ddaa6feeafd812a0"},{url:"/_next/static/chunks/183-0f27346a8de46483.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/2443530c-607c6266bca82d0f.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/488-8986c8e24f6e0c60.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/920-b104a7adac00c1f7.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/99b1da55-018c0bef01a1897d.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/app/%5Bcategory%5D/page-0399f8cadb585bad.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/app/layout-69ddeb9de13a378c.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/app/not-found-90ef3eb857335bea.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/app/page-fd7738409402e85f.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/app/search/%5Bquery%5D/page-c0874f157f4ed947.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/app/search/page-2bd7a7269484d886.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/main-947c5edf366a6c46.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/main-app-4cf3622f4068f185.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-96ccb1c344693bbe.js",revision:"h-dDqoJ0gzM9H_517CYtb"},{url:"/_next/static/css/d56d5cca7eef975e.css",revision:"d56d5cca7eef975e"},{url:"/_next/static/h-dDqoJ0gzM9H_517CYtb/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/h-dDqoJ0gzM9H_517CYtb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icon-192x192.png",revision:"88b0ca3ff62dfb18af306157dc386de2"},{url:"/icon-256x256.png",revision:"11f75f3ebdcd1e662aa43948b1157d6d"},{url:"/icon-384x384.png",revision:"51693c96f0a3afd1460bcc463faf0558"},{url:"/icon-512x512.png",revision:"3f7c43541841e626c5a9b0726fd1e8fe"},{url:"/manifest.webmanifest",revision:"25e8c4eae0d411891287554a701f682e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/technology.jpg",revision:"500f33b6cc31a72df342e9820c8175b5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
