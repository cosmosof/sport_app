(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n.n(a),i=n(164),c=n.n(i),o=(n(165),n(170)),u=n.n(o),s=n(0),d=n(153),l=n(162),p=n(175),f=n(76),g=n(163),b=n(158);function y(t){return{type:"PLAYERS_IS_LOADING",isLoading:t}}function m(){var t=c()(["\n  padding: 0 50px;\n  background: #dae3ee;\n  padding: 24px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n"]);return m=function(){return t},t}var h=u.a.Content,j=Object(p.a)(h)(m()),I=function(t){function e(e){var n;return(n=t.call(this,e)||this).render=function(){var t=n.props,e=t.count,a=t.increment,r=(t.simpleAction,t.fetchData,n.state);r.isLoading,r.items,r.hasErrored;return Object(l.c)(g.a,null,Object(l.c)(b.a,{title:"Players Page"}),Object(l.c)(j,null,Object(l.c)("h1",null,"this is a players page"),Object(l.c)("p",null,"Welcome to players page"),Object(l.c)("ul",null,n.props.players&&n.props.players.map(function(t){return Object(l.c)("li",{key:t.id},t.label)})),Object(l.c)("p",null,"Count: ",e),Object(l.c)("button",{onClick:a,style:{backgroundColor:"green"}},"Increment"),Object(l.c)("button",{onClick:function(){return n.props.fetchData("https://5826ed963900d612000138bd.mockapi.io/items")},style:{backgroundColor:"blue"}},"fetch"),Object(l.c)(d.Link,{to:"/"},"Go back to the homepage")))},n.state={items:[],isLoading:!1,hasErrored:!1},n}return r()(e,t),e.prototype.componentDidMount=function(){},e}(s.Component);e.default=Object(f.b)(function(t){return{count:t.simpleReducer.count,players:t.players,hasErrored:t.playersHasErrored,isLoading:t.playersIsLoading}},function(t){return{increment:function(){return t({type:"INCREMENT"})},fetchData:function(e){return t(function(t){return function(e){e(y(!0)),fetch(t).then(function(t){if(!t.ok)throw Error(t.statusText);return e(y(!1)),t}).then(function(t){return t.json()}).then(function(t){return e({type:"PLAYERS_FETCH_DATA_SUCCESS",items:t})}).catch(function(){return e({type:"PLAYERS_FETCH_HAS_ERRORED",hasErrored:!0})})}}(e))}}})(I)},153:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(1),c=n.n(i),o=n(151),u=n.n(o);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return o.withPrefix}),n.d(e,"navigate",function(){return o.navigate}),n.d(e,"push",function(){return o.push}),n.d(e,"replace",function(){return o.replace}),n.d(e,"navigateTo",function(){return o.navigateTo});var s=n(157),d=n.n(s);n.d(e,"PageRenderer",function(){return d.a});var l=n(36);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(t,e,n){var a;t.exports=(a=n(167))&&a.default||a},158:function(t,e,n){"use strict";var a=n(168),r=n(0),i=n.n(r),c=n(1),o=n.n(c),u=n(188),s=n.n(u),d=n(153);function l(t){var e=t.description,n=t.lang,r=t.meta,c=t.keywords,o=t.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l;var p="1025518380"},163:function(t,e,n){"use strict";n(185);var a=n(194),r=n.n(a),i=(n(187),n(180)),c=n.n(i),o=n(164),u=n.n(o),s=(n(165),n(170)),d=n.n(s),l=n(166),p=(n(0),n(1)),f=n.n(p),g=n(153),b=n(162),y=n(175),m=(n(158),n(169)),h=n.n(m);function j(){var t=u()(["\n  height: 100vh;\n"]);return j=function(){return t},t}function I(){var t=u()(["\n  @media (min-width: 480px) {\n    display: none;\n  }\n"]);return I=function(){return t},t}function C(){var t=u()(["\n  font-size: 24px;\n  margin-top: 20px;\n  margin-right: 20px;\n  color: #dae3ee;\n"]);return C=function(){return t},t}function x(){var t=u()(["\n  line-height: 64px;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);return x=function(){return t},t}function O(){var t=u()(["\n  width: 120px;\n  height: 31px;\n  margin: 16px 24px 16px 20px;\n  float: left;\n"]);return O=function(){return t},t}var v=d.a.Header,w=(d.a.Content,d.a.Footer),k=(d.a.Sider,Object(b.b)(O())),P=Object(b.b)(x()),E=Object(b.b)(C()),R=y.a.a(I()),A=Object(b.b)(j()),S=function(t){var e=t.children;return Object(b.c)(g.StaticQuery,{query:"755544856",render:function(t){return Object(b.c)(d.a,{css:A},Object(b.c)(v,{style:{position:"fixed",zIndex:1,width:"100%",padding:"0px",display:"flex",justifyContent:"space-between"}},Object(b.c)(g.Link,{to:"/"},Object(b.c)("img",{src:h.a,alt:"logo",css:k})),Object(b.c)(r.a,{css:P,theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},Object(b.c)(r.a.Item,{key:"1"},Object(b.c)(g.Link,{to:"/"},Object(b.c)(c.a,{type:"home"}),Object(b.c)("span",{className:"nav-text"},"Home"))),Object(b.c)(r.a.Item,{key:"2"},Object(b.c)(g.Link,{to:"/players/"},Object(b.c)(c.a,{type:"team"}),Object(b.c)("span",{className:"nav-text"},"Players"))),Object(b.c)(r.a.Item,{key:"3"},Object(b.c)(g.Link,{to:"/news/"},Object(b.c)(c.a,{type:"read"}),Object(b.c)("span",{className:"nav-text"},"News")))),Object(b.c)(R,{href:"#",onClick:function(){return alert("toggle")}},Object(b.c)(c.a,{type:"menu-unfold",css:E}))),e,Object(b.c)(w,{style:{textAlign:"center"}},"Mustafa Kahraman || Boston ©2019"))},data:l})};S.propTypes={children:f.a.node.isRequired},e.a=S},166:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},167:function(t,e,n){"use strict";n.r(e);n(26);var a=n(0),r=n.n(a),i=n(1),c=n.n(i),o=n(56),u=n(3),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=s},168:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},169:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTkiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxMTkgMzUiPgogIDxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZm9udC1mYW1pbHk9IlBUU2Fucy1OYXJyb3dCb2xkLCBQVCBTYW5zIE5hcnJvdyIgZm9udC1zaXplPSIzNyIgZm9udC1zdHlsZT0iY29uZGVuc2VkIiBmb250LXdlaWdodD0iYm9sZCI+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTExKSI+CiAgICAgIDx0ZXh0IGlkPSJBbnRTcG9ydCI+CiAgICAgICAgPHRzcGFuIHg9IjEuMTUxIiB5PSIzOCIgZmlsbD0iI0RCNEQ0RCI+QW50PC90c3Bhbj4gPHRzcGFuIHg9IjQ3LjA2OSIgeT0iMzgiIGZpbGw9IiNEQUUzRUUiPlNwb3J0PC90c3Bhbj4KICAgICAgPC90ZXh0PgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-players-js-2e5f4d364ef12df99820.js.map