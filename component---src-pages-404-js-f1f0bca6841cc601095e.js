(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);var n=a(9),r=(a(0),a(153)),i=a(156);e.default=function(){return Object(n.a)(r.a,null,Object(n.a)(i.a,{title:"404: Not found"}),Object(n.a)("h1",null,"NOT FOUND"),Object(n.a)("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(t,e,a){"use strict";a.d(e,"b",function(){return l});var n=a(9),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(34),u=a.n(c);a.d(e,"a",function(){return u.a});a(150);var d=i.a.createContext({}),l=function(t){return Object(n.a)(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},151:function(t){t.exports={data:{site:{siteMetadata:{title:"What's Next?"}}}}},152:function(t,e,a){"use strict";a.r(e);a(56);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(57),c=a(2),u=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},153:function(t,e,a){"use strict";var n=a(9),r=a(151),i=a(0),o=a.n(i),s=a(4),c=a.n(s),u=a(149),d=a(155),l=function(t){var e=t.siteTitle;return Object(n.a)("header",{style:{background:"#edddd4",marginBottom:"1.45rem"}},Object(n.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(n.a)("h1",{style:{margin:0}},Object(n.a)(u.a,{className:"u-url u-uid",to:"http://www.whatsnextforkev.in/",style:{color:"#197278",textDecoration:"none"}},e),Object(n.a)("a",{href:"https://github.com/kevdez",rel:"me"},Object(n.a)(d.a,{color:"#283d3b"})))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var p=l,m=(a(154),function(t){var e=t.children;return Object(n.a)(u.b,{query:"755544856",render:function(t){return Object(n.a)(o.a.Fragment,null,Object(n.a)(p,{siteTitle:t.site.siteMetadata.title}),Object(n.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},Object(n.a)("main",null,e),Object(n.a)("footer",{style:{"font-size":"10px",marginTop:"30px"}},"© ",(new Date).getFullYear(),", Built with"," ",Object(n.a)("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});m.propTypes={children:c.a.node.isRequired};e.a=m},156:function(t,e,a){"use strict";var n=a(9),r=a(157),i=(a(0),a(4)),o=a.n(i),s=a(158),c=a.n(s);function u(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,s=t.title,u=r.data.site,d=e||u.siteMetadata.description;return Object(n.a)(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+u.siteMetadata.title,link:[{rel:"webmention",href:"https://webmention.io/www.whatsnextforkev.in/webmention"},{rel:"pingback",href:"https://webmention.io/www.whatsnextforkev.in/xmlrpc"}],meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=u},157:function(t){t.exports={data:{site:{siteMetadata:{title:"What's Next?",description:"kevin's musings.",author:"Kevin Hernandez @kevdez"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-f1f0bca6841cc601095e.js.map