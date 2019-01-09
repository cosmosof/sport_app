(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(t,e,n){"use strict";n.r(e);n(321);var a=n(8),r=n.n(a),i=n(164),o=n.n(i),c=(n(165),n(170)),s=n.n(c),u=n(0),d=n(153),l=n(162),p=n(175),f=n(76),g=n(163),y=n(158);function b(t){return{type:"PLAYERS_IS_LOADING",isLoading:t}}function m(){var t=o()(["\n  padding: 0 50px;\n  background: #dae3ee;\n  padding: 24px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  overflow-y: scroll;\n"]);return m=function(){return t},t}var h=s.a.Content,j=Object(p.a)(h)(m()),O=function(t){function e(e){var n;return(n=t.call(this,e)||this).render=function(){var t=n.props,e=t.count,a=t.increment,r=(t.simpleAction,t.fetchData,n.state);r.isLoading,r.items,r.hasErrored;return Object(l.d)(g.a,null,Object(l.d)(y.a,{title:"Players Page"}),Object(l.d)(j,null,Object(l.d)("h1",null,"this is a players page"),Object(l.d)("p",null,"Welcome to players page"),Object(l.d)("ul",null,n.props.players&&n.props.players.map(function(t){return Object(l.d)("li",{key:t.id},t.name)})),Object(l.d)("p",null,"Count: ",e),Object(l.d)("button",{onClick:a,style:{backgroundColor:"green"}},"Increment"),Object(l.d)("button",{onClick:function(){return n.props.fetchData("https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json")},style:{backgroundColor:"blue"}},"fetch"),Object(l.d)(d.Link,{to:"/"},"Go back to the homepage")))},n.state={items:[],isLoading:!1,hasErrored:!1},n}return r()(e,t),e.prototype.componentDidMount=function(){},e}(u.Component);e.default=Object(f.b)(function(t){return{count:t.simpleReducer.count,players:t.players,hasErrored:t.playersHasErrored,isLoading:t.playersIsLoading}},function(t){return{increment:function(){return t({type:"INCREMENT"})},fetchData:function(e){return t(function(t){return console.log(t),function(e){e(b(!0)),fetch(t).then(function(t){if(!t.ok)throw Error(t.statusText);return e(b(!1)),t}).then(function(t){return t.json()}).then(function(t){return console.log(t.players),e({type:"PLAYERS_FETCH_DATA_SUCCESS",items:t.players})}).catch(function(){return e({type:"PLAYERS_FETCH_HAS_ERRORED",hasErrored:!0})})}}(e))}}})(O)},153:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(151),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(157),d=n.n(u);n.d(e,"PageRenderer",function(){return d.a});var l=n(36);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(t,e,n){var a;t.exports=(a=n(167))&&a.default||a},158:function(t,e,n){"use strict";var a=n(168),r=n(0),i=n.n(r),o=n(1),c=n.n(o),s=n(188),u=n.n(s),d=n(153);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l;var p="1025518380"},163:function(t,e,n){"use strict";n.d(e,"a",function(){return N});n(185);var a=n(194),r=n.n(a),i=(n(187),n(180)),o=n.n(i),c=n(8),s=n.n(c),u=n(164),d=n.n(u),l=(n(165),n(170)),p=n.n(l),f=n(166),g=n(0),y=n.n(g),b=n(1),m=n.n(b),h=n(153),j=n(18),O=n(162),x=n(175),I=(n(158),n(169)),v=n.n(I);function k(){var t=d()(["\n                html,\n                body,\n                #root {\n                  height: 100%;\n                  margin: 0;\n                }\n              "]);return k=function(){return t},t}function C(){var t=d()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return C=function(){return t},t}function w(){var t=d()(["\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  height: 100%;\n  background: #051f48;\n"]);return w=function(){return t},t}function P(){var t=d()(["\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.7;\n"]);return P=function(){return t},t}function E(){var t=d()(["\n  cursor: pointer;\n  @media (min-width: 480px) {\n    display: none;\n  }\n"]);return E=function(){return t},t}function L(){var t=d()(["\n  font-size: 24px;\n  margin-top: 20px;\n  margin-right: 20px;\n  color: #dae3ee;\n"]);return L=function(){return t},t}function S(){var t=d()(["\n  line-height: 64px;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);return S=function(){return t},t}function R(){var t=d()(["\n  width: 50%;\n  height: 50%;\n  margin: 16px 24px 16px 20px;\n  float: left;\n"]);return R=function(){return t},t}var T=p.a.Header,A=(p.a.Content,p.a.Footer),M=(p.a.Sider,Object(O.c)(R())),Z=Object(O.c)(S()),G=Object(O.c)(L()),z=x.a.div(E()),H=x.a.aside(P()),D=x.a.aside(w()),N=(Object(O.c)(C()),function(t){function e(e){var n;return(n=t.call(this,e)||this).state={toggleMenu:!1},n}return s()(e,t),e.prototype.render=function(){var t=this,e=function(){t.setState(function(t){return{toggleMenu:!t.toggleMenu}})},n=function(){t.setState(function(t){return{toggleMenu:!t.toggleMenu}})};return Object(O.d)(h.StaticQuery,{query:"1044757290",render:function(a){return Object(O.d)(y.a.Fragment,null,Object(O.d)(O.a,{styles:Object(O.c)(k())}),Object(O.d)(p.a,{style:{display:"flex",flex:"1",height:"100vh"}},Object(O.d)(T,{style:{position:"fixed",zIndex:1,width:"100%",padding:"0px",display:"flex",justifyContent:"space-between"}},Object(O.d)(h.Link,{to:"/"},Object(O.d)("img",{src:v.a,alt:"logo",css:M})),Object(O.d)(j.Location,null,function(t){var e;switch(t.location.pathname){case"/":e="1";break;case"/players/":e="2";break;case"/news/":e="3"}return Object(O.d)(r.a,{css:Z,theme:"dark",mode:"horizontal",selectedKeys:[e]},Object(O.d)(r.a.Item,{key:"1"},Object(O.d)(h.Link,{to:"/"},Object(O.d)(o.a,{type:"home"}),Object(O.d)("span",{className:"nav-text"},"Home"))),Object(O.d)(r.a.Item,{key:"2"},Object(O.d)(h.Link,{to:"/players/"},Object(O.d)(o.a,{type:"team"}),Object(O.d)("span",{className:"nav-text"},"Players"))),Object(O.d)(r.a.Item,{key:"3"},Object(O.d)(h.Link,{to:"/news/"},Object(O.d)(o.a,{type:"read"}),Object(O.d)("span",{className:"nav-text"},"News"))))}),Object(O.d)(z,{onClick:e},Object(O.d)(o.a,{type:"menu-unfold",css:G}))),t.props.children,t.state.toggleMenu&&Object(O.d)(H,{onClick:n}),t.state.toggleMenu&&Object(O.d)(D,null,Object(O.d)(j.Location,null,function(t){var e;switch(t.location.pathname){case"/":e="1";break;case"/players/":e="2";break;case"/news/":e="3"}return Object(O.d)(r.a,{style:{width:256,paddingTop:20},theme:"dark",selectedKeys:[e],mode:"inline"},Object(O.d)(r.a.Item,{key:"1"},Object(O.d)(h.Link,{to:"/"},Object(O.d)(o.a,{type:"home"}),Object(O.d)("span",{className:"nav-text"},"Home"))),Object(O.d)(r.a.Item,{key:"2"},Object(O.d)(h.Link,{to:"/players/"},Object(O.d)(o.a,{type:"team"}),Object(O.d)("span",{className:"nav-text"},"Players"))),Object(O.d)(r.a.Item,{key:"3"},Object(O.d)(h.Link,{to:"/news/"},Object(O.d)(o.a,{type:"read"}),Object(O.d)("span",{className:"nav-text"},"News"))))})),Object(O.d)(A,{style:{textAlign:"center",color:"#dae3ee"}},"Mustafa Kahraman || Boston ©2019")))},data:f})},e}(g.Component));N.propTypes={children:m.a.node.isRequired}},166:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},167:function(t,e,n){"use strict";n.r(e);n(26);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(56),s=n(3),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},168:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},169:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTkiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxMTkgMzUiPgogIDxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZm9udC1mYW1pbHk9IlBUU2Fucy1OYXJyb3dCb2xkLCBQVCBTYW5zIE5hcnJvdyIgZm9udC1zaXplPSIzNyIgZm9udC1zdHlsZT0iY29uZGVuc2VkIiBmb250LXdlaWdodD0iYm9sZCI+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTExKSI+CiAgICAgIDx0ZXh0IGlkPSJBbnRTcG9ydCI+CiAgICAgICAgPHRzcGFuIHg9IjEuMTUxIiB5PSIzOCIgZmlsbD0iI0RCNEQ0RCI+QW50PC90c3Bhbj4gPHRzcGFuIHg9IjQ3LjA2OSIgeT0iMzgiIGZpbGw9IiNEQUUzRUUiPlNwb3J0PC90c3Bhbj4KICAgICAgPC90ZXh0PgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},321:function(t,e,n){var a=n(27).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(19)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=component---src-pages-players-js-3ed0d3a4b512a9816824.js.map