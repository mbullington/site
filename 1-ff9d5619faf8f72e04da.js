(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{191:function(e,t,n){var r;n(67),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},198:function(e,t){var n;n="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,e.exports=n},199:function(e,t,n){"use strict";n(68),e.exports=Date.now||function(){return(new Date).getTime()}},200:function(e,t,n){n(67),n(134),n(29),n(30),n(13),n(50),n(39),n(133),n(93),n(31),n(92),n(23),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(0)),a=f(n(53)),u=f(n(223)),c=f(n(226)),s=n(228),l=n(215);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var T,d,E,h=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)(function(){return null}),A=(T=h,E=d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach(function(t){var o;n=r({},n,((o={})[t]=e[t],o))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),d.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},204:function(e,t,n){"use strict";n(49),n(92),Object.defineProperty(t,"__esModule",{value:!0}),t.rAF=void 0;var r=a(n(216)),o=a(n(217)),i=n(222);function a(e){return e&&e.__esModule?e:{default:e}}var u=new o.default,c=i.name+"@"+i.version,s=c+": Transition not found - "+i.repository.url,l=c+": callback transition don't look like a valid equation - "+i.repository.url,f=c+": Transition isn't string or Function - "+i.repository.url,p="undefined"!=typeof document?document:{},T="undefined"!=typeof window?window:{},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"scrollTop",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInQuad",a=arguments[5],c=void 0,T="scrollTop"===t?e.scrollTop:e.scrollLeft,d=n-T,E=+new Date,h=!0,A=void 0,m=void 0;if("string"==typeof i||null===i)m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"easeInQuad",t=r.default[e];if(void 0===t)throw new Error(s);return t}(i);else{if("function"!=typeof i)throw new Error(f);m=function(e){if(4!==e.length)throw new Error(l);return e}(i)}c=u.request(function r(){var i=+new Date,s=Math.floor(m(i-E,T,d,o));A&&n===e[t]?(h=!1,a&&(a("animation-cancel"),u.cancel(c))):(e[t]=s,A=s),i>E+o&&(e[t]=n,h=!1,a&&(a("animation-end"),u.cancel(c))),h&&(c=u.request(r))})};T!=={}&&(T.scrollToWithAnimation=d),t.default=d,t.rAF=u},208:function(e,t,n){"use strict";n(209)("link",function(e){return function(t){return e(this,"a","href",t)}})},209:function(e,t,n){var r=n(1),o=n(7),i=n(32),a=/"/g,u=function(e,t,n,r){var o=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},215:function(e,t,n){n(132),n(49),n(29),n(30),n(13),n(50),n(52),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce(function(e,t){return e[o[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},216:function(e,t,n){"use strict";n(92),Object.defineProperty(t,"__esModule",{value:!0}),t.default={linearTween:function(e,t,n,r){return n*e/r+t},easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){return n*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){return e/=r,n*(--e*e*e+1)+t},easeInOutCubic:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){return n*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){return e/=r,-n*(--e*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){return n*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){return e/=r,n*(--e*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},easeOutSine:function(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){return n*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))+t},easeInOutExpo:function(e,t,n,r){return(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:(e--,n/2*(2-Math.pow(2,-10*e))+t)},easeInCirc:function(e,t,n,r){return e/=r,-n*(Math.sqrt(1-e*e)-1)+t},easeOutCirc:function(e,t,n,r){return e/=r,e--,n*Math.sqrt(1-e*e)+t},easeInOutCirc:function(e,t,n,r){return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:(e-=2,n/2*(Math.sqrt(1-e*e)+1)+t)}}},217:function(e,t,n){e.exports=n(218)},218:function(e,t,n){"use strict";var r=n(219),o=n(199),i=n(220),a=n(198),u=r.request,c=r.cancel;function s(e){if(!(this instanceof s))return new s(e);e||(e={}),"number"==typeof e&&(e={frameRate:e}),null!=e.useNative||(e.useNative=!0),this.options=e,this.frameRate=e.frameRate||s.FRAME_RATE,this._frameLength=1e3/this.frameRate,this._isCustomFrameRate=this.frameRate!==s.FRAME_RATE,this._timeoutId=null,this._callbacks={},this._lastTickTime=0,this._tickCounter=0}e.exports=s,s.FRAME_RATE=60,s.shim=function(e){var t=new s(e);return a.requestAnimationFrame=function(e){return t.request(e)},a.cancelAnimationFrame=function(e){return t.cancel(e)},t},s.prototype.request=function(e){var t=this;if(++this._tickCounter,r.supported&&this.options.useNative&&!this._isCustomFrameRate)return u(e);if(!e)throw new TypeError("Not enough arguments");if(null==this._timeoutId){var n=this._frameLength+this._lastTickTime-o();n<0&&(n=0),this._timeoutId=setTimeout(function(){t._lastTickTime=o(),t._timeoutId=null,++t._tickCounter;var e=t._callbacks;for(var n in t._callbacks={},e)e[n]&&(r.supported&&t.options.useNative?u(e[n]):e[n](i.now()))},n)}return this._callbacks[this._tickCounter]=e,this._tickCounter},s.prototype.cancel=function(e){r.supported&&this.options.useNative&&c(e),delete this._callbacks[e]}},219:function(e,t,n){"use strict";n(49);var r=n(198);try{r.top.name,r=r.top}catch(a){}t.request=r.requestAnimationFrame,t.cancel=r.cancelAnimationFrame||r.cancelRequestAnimationFrame,t.supported=!1;for(var o=["Webkit","Moz","ms","O"],i=0;i<o.length&&!t.request;i++)t.request=r[o[i]+"RequestAnimationFrame"],t.cancel=r[o[i]+"CancelAnimationFrame"]||r[o[i]+"CancelRequestAnimationFrame"];t.request&&t.request.call(null,function(){t.supported=!0})},220:function(e,t,n){"use strict";var r=n(199),o=n(221),i=n(198);t.now=function(){return i.performance&&i.performance.now?i.performance.now():r()-o.navigationStart}},221:function(e,t,n){"use strict";var r=n(199);t.navigationStart=r()},222:function(e){e.exports={name:"scrollto-with-animation",version:"4.5.2",author:"David Sancho <dsnxmoreno@gmail.com> (https://github.com/davesnx)",description:"Animated Scroll with requestAnimationFrame. For smooth animate scrollTo defining the easing, running at 60FPS and cross-browser",license:"MIT",main:"lib/index.js",repository:{type:"git",url:"https://github.com/davesnx/scrollto-with-animation"},files:["src","lib","dist","README.md"],keywords:["animation","scrollTo","60fps","cross-browser","requestAnimationFrame","easeInQuad","browserify"],scripts:{clean:"rm -rf dist/* && rm -rf lib/","minify:dev":"NODE_ENV=dev webpack --watch","minify:prod":"NODE_ENV=prod webpack -p","compile:dev":"NODE_ENV=dev babel src --watch --out-dir lib","compile:prod":"NODE_ENV=prod babel src --out-dir lib","test:dev":"NODE_ENV=prod karma start test/karma.config.js --auto-watch",test:"NODE_ENV=prod karma start test/karma.config.js --single-run",build:"npm run clean && npm run compile:prod && npm run minify:prod",prepublish:"npm run build"},"pre-commit":["test"],bugs:{url:"https://github.com/davesnx/scrollto-with-animation/issues"},dependencies:{"animation-frame":"^0.3.0"},devDependencies:{"babel-cli":"^6.9.0","babel-loader":"^6.2.2","babel-preset-es2015":"^6.3.13","babel-preset-stage-2":"^6.3.13","jasmine-core":"^2.3.4","json-loader":"^0.5.4",karma:"^0.13.9","karma-chrome-launcher":"^0.2.1","karma-cli":"0.1.0","karma-coverage":"^0.5.3","karma-jasmine":"^0.3.6","karma-phantomjs-launcher":"^0.2.1","karma-sourcemap-loader":"^0.3.6","karma-spec-reporter":"0.0.22","karma-story-reporter":"^0.3.1","karma-webpack":"^1.7.0",phantomjs:"^1.9.18","pre-push":"^0.1.1",webpack:"^1.12.13"},standard:{parser:"babel-eslint",global:["jasmine","it","describe","beforeEach","afterEach","expect","spyOn"]}}},223:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(31),n(52),n(49),n(133),n(93);var o=n(0),i=r(o),a=r(n(224)),u=r(n(225));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c=[],s=void 0;function l(){s=e(c.map(function(e){return e.props})),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),l()},t.prototype.componentDidUpdate=function(){l()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",f.canUseDOM=a.canUseDOM,f}}},224:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},225:function(e,t,n){n(71),n(29),n(30),n(13),n(50),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},226:function(e,t,n){"use strict";n(49),n(135),n(66),n(97),n(227),n(29),n(30),n(13),n(50),n(67);var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,s,l=r(t),f=r(n);if(l&&f){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,T=n instanceof Date;if(p!=T)return!1;if(p&&T)return t.getTime()==n.getTime();var d=t instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return t.toString()==n.toString();var h=o(t);if((c=h.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,h[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(s=h[u])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},227:function(e,t,n){var r=n(4),o=n(136),i=n(10).f,a=n(95).f,u=n(96),c=n(69),s=r.RegExp,l=s,f=s.prototype,p=/a/g,T=/a/g,d=new s(p)!==p;if(n(8)&&(!d||n(7)(function(){return T[n(3)("match")]=!1,s(p)!=p||s(T)==T||"/a/i"!=s(p,"i")}))){s=function(e,t){var n=this instanceof s,r=u(e),i=void 0===t;return!n&&r&&e.constructor===s&&i?e:o(d?new l(r&&!i?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&i?c.call(e):t),n?this:f,s)};for(var E=function(e){e in s||i(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},h=a(l),A=0;h.length>A;)E(h[A++]);f.constructor=s,s.prototype=f,n(12)(r,"RegExp",s)}n(94)("RegExp")},228:function(e,t,n){(function(e){n(134),n(40),n(68),n(39),n(67),n(31),n(29),n(30),n(13),n(50),n(70),n(52),n(132),n(14),n(23),n(51),n(38),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(0)),a=c(n(98)),u=n(215);function c(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,u.TAG_NAMES.TITLE),n=h(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},d=function(e,t){return t.filter(function(e){return void 0!==e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var o={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],l=(0,a.default)({},o[s],r[s]);o[s]=l}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout(function(){A(e)},0)}),m=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;O(u.TAG_NAMES.BODY,r),O(u.TAG_NAMES.HTML,o),g(p,T);var d={baseTag:R(u.TAG_NAMES.BASE,n),linkTags:R(u.TAG_NAMES.LINK,i),metaTags:R(u.TAG_NAMES.META,a),noscriptTags:R(u.TAG_NAMES.NOSCRIPT,c),scriptTags:R(u.TAG_NAMES.SCRIPT,l),styleTags:R(u.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=d[e].oldTags)}),t&&t(),s(e,E,h)},w=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),O(u.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},M=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=P(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=M(n),i=w(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),i.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t},t)},t.handleClientStateChange=function(e){_&&b(_),e.defer?_=y(function(){S(e,function(){_=null})}):(S(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:I(u.TAG_NAMES.BASE,t,r),bodyAttributes:I(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(u.ATTRIBUTE_NAMES.HTML,o,r),link:I(u.TAG_NAMES.LINK,i,r),meta:I(u.TAG_NAMES.META,a,r),noscript:I(u.TAG_NAMES.NOSCRIPT,c,r),script:I(u.TAG_NAMES.SCRIPT,s,r),style:I(u.TAG_NAMES.STYLE,l,r),title:I(u.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:d([u.TAG_PROPERTIES.HREF],e),bodyAttributes:T(u.ATTRIBUTE_NAMES.BODY,e),defer:h(e,u.HELMET_PROPS.DEFER),encode:h(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n(229))},229:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=1-ff9d5619faf8f72e04da.js.map