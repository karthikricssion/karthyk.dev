(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+T3S":function(n,t,e){"use strict";var i=e("q1tI"),a=e.n(i),r=e("vOnD"),o=e("FFYX");function s(){var n=g(["\n        font-size: 22px;\n    "]);return s=function(){return n},n}function c(){var n=g(["\n        font-size: 21px;\n    "]);return c=function(){return n},n}function l(){var n=g(["\n        font-size: 40px;\n    "]);return l=function(){return n},n}function u(){var n=g(["\n        font-size: 32px;\n    "]);return u=function(){return n},n}function g(n,t){return t||(t=n.slice(0)),n.raw=t,n}var p=r.b.h1.withConfig({displayName:"banner__BannerHead",componentId:"xm2sx8-0"})(["margin:0;font-size:56px;line-height:1.1;hyphens:normal;font-weight:bold;&::first-letter{text-transform:uppercase;}"," ",""],o.a.phone(u()),o.a.tablet(l())),m=r.b.h2.withConfig({displayName:"banner__BannerHeadTwo",componentId:"xm2sx8-1"})(["margin-top:1em;font-weight:bold;margin:24px 0;font-size:24px;line-height:1.3333333333;"," ",""],o.a.phone(c()),o.a.tablet(s()));t.a=function(n){return a.a.createElement("section",{className:"container"},a.a.createElement(p,null,n.pageHeading),a.a.createElement(m,null,n.pageInformation))}},"6Yvb":function(n,t,e){"use strict";t.a={writingList:{"margin-bottom":"32px","line-height":"1.5","margin-top":"64px",a:{"text-decoration":"none","touch-action":"manipulation"}},WritingListTitle:{margin:0,"font-size":"36px","font-weight":"bold","line-height":"1.3333333333","margin-top":"1em","a:hover":{color:"#4ec26e"}},writingListDatePosted:{"font-size":"22px","line-height":"1.8","font-style":"italic"},writingListOverview:{"font-size":"22px","line-height":"1.8"}}},vK1B:function(n,t,e){"use strict";var i=e("q1tI"),a=e.n(i),r=e("Wbzz"),o=e("6Yvb"),s=e("vOnD"),c=e("FFYX");function l(){var n=m(["\n        font-size: 16px;\n    "]);return l=function(){return n},n}function u(){var n=m(["\n        font-size: 16px;\n    "]);return u=function(){return n},n}function g(){var n=m(["\n        font-size: 28px;\n    "]);return g=function(){return n},n}function p(){var n=m(["\n        font-size: 22px;\n    "]);return p=function(){return n},n}function m(n,t){return t||(t=n.slice(0)),n.raw=t,n}var f=s.b.article.withConfig({displayName:"SinglewritingList__WritingListStyle",componentId:"sc-14wc9bw-0"})([""," &:first-child{margin-top:0;}"],o.a.writingList),d=s.b.h2.withConfig({displayName:"SinglewritingList__WritingListTitle",componentId:"sc-14wc9bw-1"})([""," "," ",""],o.a.WritingListTitle,c.a.phone(p()),c.a.tablet(g())),h=s.b.aside.withConfig({displayName:"SinglewritingList__WritingListDatePosted",componentId:"sc-14wc9bw-2"})([""," ",""],o.a.writingListDatePosted,c.a.phone(u())),w=s.b.p.withConfig({displayName:"SinglewritingList__WritingListOverview",componentId:"sc-14wc9bw-3"})([""," ",""],o.a.writingListOverview,c.a.phone(l()));t.a=function(n){return a.a.createElement(a.a.Fragment,null,n.writings.map((function(n,t){var e=n.frontmatter,i=n.timeToRead,o=n.excerpt;return a.a.createElement(f,{key:t},a.a.createElement(d,null,a.a.createElement(r.Link,{to:e.slug},e.title)),a.a.createElement(h,null,a.a.createElement("time",null,e.date," - ",i," min read")),a.a.createElement(r.Link,{to:e.slug},a.a.createElement(w,null,o)))})))}},yKTY:function(n,t,e){"use strict";e.r(t),e.d(t,"query",(function(){return l}));var i=e("q1tI"),a=e.n(i),r=e("I/Ru"),o=e("+T3S"),s=e("vK1B"),c=e("jNNy");t.default=function(n){var t=n.data;return a.a.createElement(r.a,null,a.a.createElement(c.a,{title:"Writings",description:"I use this space to share my thoughts on startups, design thinking, product development, ideas, code and my learnings."}),a.a.createElement(o.a,{pageHeading:"Writings",pageInformation:"I use this space to share my thoughts on startups, design thinking, product development, ideas, code and my learnings."}),a.a.createElement("section",{className:"container"},a.a.createElement(s.a,{writings:t.allMarkdownRemark.nodes})))};var l="1749520542"}}]);
//# sourceMappingURL=component---src-pages-writings-index-js-3b7dfc694a6d0e9b33e4.js.map