(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,e,a){"use strict";a.r(e);var n=a(9),r=(a(0),a(149)),i=function(t){var e=t.post;return Object(n.a)("div",null,Object(n.a)(r.a,{to:e.frontmatter.path},e.frontmatter.title," (",e.frontmatter.date,")"))},o=a(153),c=a(156);a.d(e,"pageQuery",function(){return s});e.default=function(t){var e=t.data.allMarkdownRemark.edges.filter(function(t){return!!t.node.frontmatter.date}).map(function(t){return Object(n.a)(i,{key:t.node.id,post:t.node})});return Object(n.a)(o.a,null,Object(n.a)(c.a,{title:"Home",keywords:["whatsnextforkev.in","application","react","kevdez"]}),Object(n.a)("p",null,"hello. welcome to my site."),Object(n.a)("p",null,"here's my blog post:"),Object(n.a)("div",null,e))};var s="3473231669"},149:function(t,e,a){"use strict";a.d(e,"b",function(){return l});var n=a(9),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(34),d=a.n(s);a.d(e,"a",function(){return d.a});a(150);var u=i.a.createContext({}),l=function(t){return Object(n.a)(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},151:function(t){t.exports={data:{site:{siteMetadata:{title:"What's Next?"}}}}},152:function(t,e,a){"use strict";a.r(e);a(56);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(57),s=a(2),d=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},153:function(t,e,a){"use strict";var n=a(9),r=a(151),i=a(0),o=a.n(i),c=a(4),s=a.n(c),d=a(149),u=a(155),l=function(t){var e=t.siteTitle;return Object(n.a)("header",{style:{background:"#edddd4",marginBottom:"1.45rem"}},Object(n.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(n.a)("h1",{style:{margin:0},className:"h-card"},Object(n.a)(d.a,{to:"/",style:{color:"#197278",textDecoration:"none"}},e),Object(n.a)("a",{href:"https://github.com/kevdez",rel:"me"},Object(n.a)(u.a,{color:"#283d3b"})))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var p=l,m=(a(154),function(t){var e=t.children;return Object(n.a)(d.b,{query:"755544856",render:function(t){return Object(n.a)(o.a.Fragment,null,Object(n.a)(p,{siteTitle:t.site.siteMetadata.title}),Object(n.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},Object(n.a)("main",null,e),Object(n.a)("footer",{style:{"font-size":"10px",marginTop:"30px"}},"© ",(new Date).getFullYear(),", Built with"," ",Object(n.a)("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});m.propTypes={children:s.a.node.isRequired};e.a=m},156:function(t,e,a){"use strict";var n=a(9),r=a(157),i=(a(0),a(4)),o=a.n(i),c=a(158),s=a.n(c);function d(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,c=t.title,d=r.data.site,u=e||d.siteMetadata.description;return Object(n.a)(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+d.siteMetadata.title,link:[{rel:"webmention",href:"https://webmention.io/www.whatsnextforkev.in/webmention"},{rel:"pingback",href:"https://webmention.io/www.whatsnextforkev.in/xmlrpc"}],meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=d},157:function(t){t.exports={data:{site:{siteMetadata:{title:"What's Next?",description:"kevin's musings.",author:"Kevin Hernandez @kevdez"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-dbf93f8af8b0597b6b99.js.map