(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1/Ks":function(t,e,n){"use strict";n("EU/P")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},"6Yvb":function(t,e,n){"use strict";e.a={writingList:{"margin-bottom":"32px","line-height":"1.5","margin-top":"64px",a:{"text-decoration":"none","touch-action":"manipulation"}},WritingListTitle:{margin:0,"font-size":"36px","font-weight":"bold","line-height":"1.3333333333","margin-top":"1em","a:hover":{color:"#4ec26e"}},writingListDatePosted:{"font-size":"22px","line-height":"1.8","font-style":"italic"},writingListOverview:{"font-size":"22px","line-height":"1.8"}}},HQAx:function(t,e,n){"use strict";var r=n("P8UN"),i=n("ewoU"),a=n("DFzH"),o=n("kiRH"),c=n("nONw"),u=n("ytzU");r(r.P,"Array",{flatMap:function(t){var e,n,r=a(this);return c(t),e=o(r.length),n=u(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n("Dq1/")("flatMap")},I17o:function(t,e,n){"use strict";var r=n("P8UN"),i=n("pTxf"),a=n("CL53"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);r(r.P+r.F*o,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},IVxb:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return S}));var r=n("q1tI"),i=n.n(r),a=n("I/Ru"),o=n("jNNy"),c=n("vOnD"),u=(n("pJf4"),n("FFYX")),l=n("LvDl"),s=n.n(l),f=n("Wbzz"),g=function(t){return i.a.createElement(f.Link,{className:"tags__link",to:"/writings/category/"+s.a.kebabCase(t.category)},t.category)},p=function(t){return i.a.createElement(i.a.Fragment,null,t.tags.map((function(e,n){return i.a.createElement("span",{className:"tags-link-holder",key:n},i.a.createElement(f.Link,{className:"tags__link",to:"/writings/tags/"+s.a.kebabCase(e)},e),t.tags.length>n+1?", ":"")})))};function m(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n        font-size: 16px;\n    "]);return m=function(){return t},t}var d=c.b.aside.withConfig({displayName:"dateAuthor__WritingDetailsTimeAuthor",componentId:"o1b3aq-0"})(["font-size:22px;line-height:1.8;font-style:italic;a{text-decoration:underline !important;&:hover{color:#4ec26e;}}",""],u.a.phone(m())),h=c.b.span.withConfig({displayName:"dateAuthor__TagHolder",componentId:"o1b3aq-1"})(["a{text-decoration:none !important;text-transform:capitalize;}"]),v=function(t){return i.a.createElement(d,null,i.a.createElement("time",null,t.date),i.a.createElement("span",null,", by")," ",i.a.createElement("a",{href:t.author.url},t.author.name),i.a.createElement("br",null),i.a.createElement(h,null,i.a.createElement(g,{category:t.category})," ",": ",i.a.createElement(p,{tags:t.tags})))},w=n("6Yvb");function b(){var t=x(["\n        font-size: 40px;\n    "]);return b=function(){return t},t}function y(){var t=x(["\n        font-size: 32px;\n    "]);return y=function(){return t},t}function x(t,e){return e||(e=t.slice(0)),t.raw=e,t}var E=c.b.article.withConfig({displayName:"writingDetail__WritingListStyle",componentId:"sc-1xddoh2-0"})([""," margin-top:0;"],w.a.writingList),N=c.b.h1.withConfig({displayName:"writingDetail__WritingsHead",componentId:"sc-1xddoh2-1"})(["margin:0;margin-top:32px;font-size:56px;line-height:1.1;hyphens:normal;font-weight:bold;&::first-letter{text-transform:uppercase;}"," ",""],u.a.phone(y()),u.a.tablet(b())),P=function(t){return i.a.createElement(E,null,i.a.createElement(v,{date:t.post.frontmatter.date,author:t.post.frontmatter.author,category:t.post.frontmatter.category,tags:t.post.frontmatter.tags}),i.a.createElement(N,null,t.post.frontmatter.title),i.a.createElement("div",{className:"writing-content",dangerouslySetInnerHTML:{__html:t.post.html}}))},S=(e.default=function(t){var e=t.data.markdownRemark;return i.a.createElement(a.a,null,i.a.createElement(o.a,{title:e.frontmatter.title,description:e.excerpt}),i.a.createElement("section",{className:"container"},i.a.createElement(P,{post:e})))},"1341936292")},"QzX/":function(t,e,n){"use strict";n("EU/P")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},Rw9D:function(t,e,n){"use strict";var r=n("P8UN"),i=n("/+AL");r(r.P+r.F*!n("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},YuTi:function(t,e,n){n("R48M"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZiRl:function(t,e,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},ewoU:function(t,e,n){"use strict";var r=n("tuyV"),i=n("BjK0"),a=n("kiRH"),o=n("ot9L"),c=n("sOol")("isConcatSpreadable");t.exports=function t(e,n,u,l,s,f,g,p){for(var m,d,h=s,v=0,w=!!g&&o(g,p,3);v<l;){if(v in u){if(m=w?w(u[v],v,n):u[v],d=!1,i(m)&&(d=void 0!==(d=m[c])?!!d:r(m)),d&&f>0)h=t(e,n,m,a(m.length),h,f-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=m}h++}v++}return h}},gd4K:function(t,e,n){"use strict";var r=n("1Llc"),i=n("ap2Z");t.exports=function(t){var e=String(i(this)),n="",a=r(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},lizw:function(t,e,n){"use strict";var r=n("P8UN"),i=n("pTxf"),a=n("CL53"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);r(r.P+r.F*o,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},nMRu:function(t,e,n){"use strict";var r=n("P8UN"),i=n("DFzH"),a=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=a(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},pTxf:function(t,e,n){var r=n("kiRH"),i=n("gd4K"),a=n("ap2Z");t.exports=function(t,e,n,o){var c=String(a(t)),u=c.length,l=void 0===n?" ":String(n),s=r(e);if(s<=u||""==l)return c;var f=s-u,g=i.call(l,Math.ceil(f/l.length));return g.length>f&&(g=g.slice(0,f)),o?g+c:c+g}},zTTH:function(t,e,n){"use strict";var r=n("P8UN"),i=n("Wadk")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(a)}}]);
//# sourceMappingURL=component---src-templates-writting-template-js-75447f6fe33694d1722d.js.map