(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(159),o=t(166),l=t(163),i=t(177),s=t(167);t(178);l.b.add(s.d,i.a);var u=function(){var e="https://www.facebook.com/Maschino.Tyler",a="https://www.twitter.com/Tyguy160",t="https://www.github.com/Tyguy160",n="https://www.linkedin.com/in/tylermaschino",c="mailto:tylermaschino@gmail.com";return r.a.createElement("div",{className:"contact"},r.a.createElement("h2",null,"Hit me up."),r.a.createElement("div",{className:"contact-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:e},r.a.createElement("div",{className:"icon-wrapper",style:{backgroundColor:"#1e73be"}},r.a.createElement(o.a,{className:"contact-icon",size:"2x",icon:["fab","facebook-f"]})))),r.a.createElement("li",null,r.a.createElement("a",{href:a},r.a.createElement("div",{className:"icon-wrapper",style:{backgroundColor:"#1da1f2"}},r.a.createElement(o.a,{className:"contact-icon",size:"2x",icon:["fab","twitter"]})))),r.a.createElement("li",null,r.a.createElement("a",{href:t},r.a.createElement("div",{className:"icon-wrapper",style:{backgroundColor:"#333"}},r.a.createElement(o.a,{className:"contact-icon",size:"2x",icon:["fab","github"]})))),r.a.createElement("li",null,r.a.createElement("a",{href:n},r.a.createElement("div",{className:"icon-wrapper",style:{backgroundColor:"#0077b5"}},r.a.createElement(o.a,{className:"contact-icon",size:"2x",icon:["fab","linkedin-in"]})))),r.a.createElement("li",null,r.a.createElement("a",{href:c},r.a.createElement("div",{className:"icon-wrapper",style:{backgroundColor:"#ea4335"}},r.a.createElement(o.a,{className:"contact-icon",size:"2x",icon:"envelope"})))))))};a.default=function(){return r.a.createElement(c.a,null,r.a.createElement(u,null))}},148:function(e,a,t){var n;e.exports=(n=t(150))&&n.default||n},149:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),c=t(4),o=t.n(c),l=t(147),i=t.n(l);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var s=t(27);t.d(a,"waitForRouteChange",function(){return s.c});var u=t(148),m=t.n(u);t.d(a,"PageRenderer",function(){return m.a});var d=t(38);t.d(a,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,a,t){"use strict";t.r(a);t(39);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),l=t(52),i=t(1),s=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({key:a.pathname,location:a,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=s},151:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(147),o=t.n(c);t(152);a.a=function(e){return r.a.createElement("div",{className:e.type},r.a.createElement(o.a,{to:"about",className:"navButton"},"About".toUpperCase()),r.a.createElement(o.a,{to:"contact",className:"navButton"},"Contact".toUpperCase()),r.a.createElement(o.a,{to:"portfolio",className:"navButton"},"Portfolio".toUpperCase()),r.a.createElement(o.a,{to:"blog",className:"navButton"},"Blog".toUpperCase()))}},152:function(e,a,t){},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},155:function(e,a,t){},157:function(e,a,t){},159:function(e,a,t){"use strict";var n=t(154),r=t(0),c=t.n(r),o=t(4),l=t.n(o),i=t(160),s=t.n(i),u=t(149),m=t(147),d=t.n(m),p=(t(155),t(151)),f=function(e){e.siteTitle;return c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"contents"},c.a.createElement("h1",{className:"home"},c.a.createElement(d.a,{to:"/",className:"home-link"},"Tyler Stephen Maschino")),c.a.createElement("h1",{className:"nav"},c.a.createElement(p.a,{type:"nav-bar"}))))},h=(t(157),function(e){var a=e.children;return c.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",null,a))},data:n})});h.propTypes={children:l.a.node.isRequired};a.a=h},178:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-contact-js-841f6019701fa311a1cd.js.map