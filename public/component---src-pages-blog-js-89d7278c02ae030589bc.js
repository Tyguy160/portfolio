(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{style:{display:"grid",textAlign:"center",alignItems:"center",height:"80vh",fontSize:"2em"}},"Coming soon..."))}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(147),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var l=a(148),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),u=a(1),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147),o=a.n(i);a(152);t.a=function(e){return r.a.createElement("div",{className:e.type},r.a.createElement(o.a,{to:"about",className:"navButton"},"About".toUpperCase()),r.a.createElement(o.a,{to:"contact",className:"navButton"},"Contact".toUpperCase()),r.a.createElement(o.a,{to:"portfolio",className:"navButton"},"Portfolio".toUpperCase()),r.a.createElement(o.a,{to:"blog",className:"navButton"},"Blog".toUpperCase()))}},152:function(e,t,a){},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},155:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(160),s=a.n(u),l=a(149),d=a(147),m=a.n(d),p=(a(155),a(151)),f=function(e){e.siteTitle;return i.a.createElement("div",{className:"head"},i.a.createElement("div",{className:"contents"},i.a.createElement("h1",{className:"home"},i.a.createElement(m.a,{to:"/",className:"home-link"},"Tyler Stephen Maschino")),i.a.createElement("h1",{className:"nav"},i.a.createElement(p.a,{type:"nav-bar"}))))},h=(a(157),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-blog-js-89d7278c02ae030589bc.js.map