(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),a=n("md7G"),c=n("foSv"),i=n("8Bbg"),f=n.n(i),s=n("q1tI"),l=n.n(s),p=n("8Kt/"),d=n.n(p),v=(n("+E3a"),n("DiZ7"),l.a.createElement);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var h=function(t){Object(u.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return v(l.a.Fragment,null,v(d.a,null,v("title",null,"Mark 8"),v("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),v("link",{href:"/fonts/DB Helvethaica X v3.2_1.ttf",rel:"stylesheet"})),v(e,n))}}]),n}(f.a);e.default=h},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=i(n("q1tI")),o=i(n("Xuae")),u=n("lwAK"),a=n("FYa8"),c=n("/0+H");function i(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var c=0,i=l.length;c<i;c++){var f=l[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?u=!1:(p.add(s),r[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function v(t){var e=t.children;return(r.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}))})))}v.rewind=d.rewind;var y=v;e.default=y},B5Ud:function(t,e,n){"use strict";var r=n("vJKn"),o=n("/GRZ"),u=n("i2R6"),a=n("48fX"),c=n("tCBg"),i=n("T0f4"),f=n("qVT1");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var l=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var p=l(n("q1tI")),d=n("g/15");function v(t){return y.apply(this,arguments)}function y(){return(y=f(r.mark((function t(e){var n,o,u;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var h=function(t){a(n,t);var e=s(n);function n(){return o(this,n),e.apply(this,arguments)}return u(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||u?{}:{url:m(e)})))}}]),n}(p.default.Component);function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=h,h.origGetInitialProps=v,h.getInitialProps=v},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),u=n("i2R6"),a=n("48fX"),c=n("tCBg"),i=n("T0f4"),f=n("mPvQ");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(c){a(f,c);var i=s(f);function f(t){var u;return r(this,f),u=i.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),u=n("KckH"),a=n("kG2m");t.exports=function(t){return r(t)||o(t)||u(t)||a()}},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("U8pU"),o=n("JX7q");function u(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[[0,0,2,5,1,3,4]]]);