(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(152),u=n(155),s=n.n(u),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this.props,"data.site.siteMetadata.title");return i.a.createElement(c.a,{location:this.props.location,title:e},i.a.createElement("h1",null,"Thank you for subscribing."),i.a.createElement("p",null,"You are now confirmed. You can expect to receive emails as I create new content."))},t}(i.a.Component),d="1166987771";t.default=l},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(147),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(149),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},150:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(153),r=n.n(a),o=n(154),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{color:"#0"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}},delete i.a.googleFonts;var c=new r.a(i.a);var u=c.rhythm,s=c.scale},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(51),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(148),u=n(150),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(u.b)(1),{marginBottom:Object(u.a)(1.5),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#0"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},e,r)},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-thanks-js-146c6534f06d20161d8f.js.map