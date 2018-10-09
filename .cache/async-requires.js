// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/TylerMaschino/tyler-stephen-maschino/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/TylerMaschino/tyler-stephen-maschino/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("/Users/TylerMaschino/tyler-stephen-maschino/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contact-js": () => import("/Users/TylerMaschino/tyler-stephen-maschino/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/TylerMaschino/tyler-stephen-maschino/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-portfolio-js": () => import("/Users/TylerMaschino/tyler-stephen-maschino/src/pages/portfolio.js" /* webpackChunkName: "component---src-pages-portfolio-js" */)
}

exports.data = () => import("/Users/TylerMaschino/tyler-stephen-maschino/.cache/data.json")

