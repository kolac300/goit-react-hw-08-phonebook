/*! For license information please see 880.f37a5fac.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))n.call(a,l)&&(c[l]=a[l]);if(t){u=t(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(c[u[f]]=a[u[f]])}}return c}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4270:function(e,t,n){"use strict";n.d(t,{q:function(){return le}});var r=n(2007),o=n.n(r),i=n(9475),a=n.n(i),u=n(3967),c=n.n(u),s=n(2791),l=n(1725),f=n.n(l),d="bodyAttributes",p="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(h).map((function(e){return h[e]})),"charset"),m="cssText",v="href",g="http-equiv",T="innerHTML",O="itemprop",w="name",C="property",S="rel",A="src",j="target",E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",P="defer",x="encodeSpecialCharacters",I="onChangeClientState",R="titleTemplate",L=Object.keys(E).reduce((function(e,t){return e[E[t]]=t,e}),{}),_=[h.NOSCRIPT,h.SCRIPT,h.STYLE],N="data-react-helmet",q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=V(e,h.TITLE),n=V(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=V(e,k);return t||r||void 0},U=function(e){return V(e,I)||function(){}},z=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return M({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},W=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==T&&u!==m&&u!==O||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=f()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){G(t)}),0)}}(),Q=function(e){return clearTimeout(e)},$="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:n.g.requestAnimationFrame||G,J="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:n.g.cancelAnimationFrame||Q,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;oe(h.BODY,r),oe(h.HTML,o),re(f,d);var p={baseTag:ie(h.BASE,n),linkTags:ie(h.LINK,i),metaTags:ie(h.META,a),noscriptTags:ie(h.NOSCRIPT,u),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,l)},y={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(b[e]=p[e].oldTags)})),t&&t(),c(e,y,b)},ne=function(e){return Array.isArray(e)?e.join(""):e},re=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ne(e)),oe(h.TITLE,t)},oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(N),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(N):n.getAttribute(N)!==a.join(",")&&n.setAttribute(N,a.join(","))}},ie=function(e,t){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(N,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ae=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[E[n]||n]=e[n],t}),t)},ce=function(e,t,n){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[N]=!0,r),i=ue(n,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=ae(n),i=ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+H(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case p:return{toComponent:function(){return ue(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[N]=!0,r);return Object.keys(t).forEach((function(e){var n=E[e]||e;if(n===T||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===m)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+H(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},se=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,y=e.titleAttributes;return{base:ce(h.BASE,t,r),bodyAttributes:ce(d,n,r),htmlAttributes:ce(p,o,r),link:ce(h.LINK,i,r),meta:ce(h.META,a,r),noscript:ce(h.NOSCRIPT,u,r),script:ce(h.SCRIPT,c,r),style:ce(h.STYLE,s,r),title:ce(h.TITLE,{title:f,titleAttributes:y},r)}},le=function(e){var t,n;return n=t=function(t){function n(){return Z(this,n),B(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!c()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return M({},r,((t={})[n.type]=[].concat(r[n.type]||[],[M({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TITLE:return M({},o,((t={})[r.type]=a,t.titleAttributes=M({},i),t));case h.BODY:return M({},o,{bodyAttributes:M({},i)});case h.HTML:return M({},o,{htmlAttributes:M({},i)})}return M({},o,((n={})[r.type]=M({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=M({},t);return Object.keys(e).forEach((function(t){var r;n=M({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)}(D(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=D(t,["children"]),o=M({},r);return n&&(o=this.mapChildrenToProps(n,o)),s.createElement(e,o)},F(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(a()((function(e){return{baseTag:K([v,j],e),bodyAttributes:z(d,e),defer:V(e,P),encode:V(e,x),htmlAttributes:z(p,e),linkTags:W(h.LINK,[S,v],e),metaTags:W(h.META,[w,b,g,C,O],e),noscriptTags:W(h.NOSCRIPT,[T],e),onChangeClientState:U(e),scriptTags:W(h.SCRIPT,[A,T],e),styleTags:W(h.STYLE,[m],e),title:Y(e),titleAttributes:z(y,e)}}),(function(e){ee&&J(ee),e.defer?ee=$((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));le.renderStatic=le.rewind},3967:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},9475:function(e,t,n){"use strict";var r,o=n(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},7697:function(e,t,n){"use strict";n.d(t,{I:function(){return x}});var r=n(1413),o=n(4925),i=n(9439),a=n(9886),u=n(4591),c=n(7872),s=n(9219),l=n(2996),f=n(1999),d=n(6992),p=n(2791),y=n(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],b=["getRootProps","htmlProps"],m=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),v=(0,i.Z)(m,2),g=v[0],T=v[1],O=(0,a.k)({strict:!1,name:"FormControlContext"}),w=(0,i.Z)(O,2),C=w[0],S=w[1];var A=(0,c.G)((function(e,t){var n=(0,s.jC)("Form",e),a=function(e){var t=e.id,n=e.isRequired,a=e.isInvalid,c=e.isDisabled,s=e.isReadOnly,l=(0,o.Z)(e,h),f=(0,p.useId)(),y=t||"field-".concat(f),b="".concat(y,"-label"),m="".concat(y,"-feedback"),v="".concat(y,"-helptext"),g=(0,p.useState)(!1),T=(0,i.Z)(g,2),O=T[0],w=T[1],C=(0,p.useState)(!1),S=(0,i.Z)(C,2),A=S[0],j=S[1],E=(0,p.useState)(!1),k=(0,i.Z)(E,2),P=k[0],x=k[1],I=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:v},e),{},{ref:(0,u.lq)(t,(function(e){e&&j(!0)}))})}),[v]),R=(0,p.useCallback)((function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},n),{},{ref:o,"data-focus":(0,d.PB)(P),"data-disabled":(0,d.PB)(c),"data-invalid":(0,d.PB)(a),"data-readonly":(0,d.PB)(s),id:null!=(e=n.id)?e:b,htmlFor:null!=(t=n.htmlFor)?t:y})}),[y,c,P,a,s,b]),L=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:m},e),{},{ref:(0,u.lq)(t,(function(e){e&&w(!0)})),"aria-live":"polite"})}),[m]),_=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),l),{},{ref:t,role:"group"})}),[l]),N=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!s,isDisabled:!!c,isFocused:!!P,onFocus:function(){return x(!0)},onBlur:function(){return x(!1)},hasFeedbackText:O,setHasFeedbackText:w,hasHelpText:A,setHasHelpText:j,id:y,labelId:b,feedbackId:m,helpTextId:v,htmlProps:l,getHelpTextProps:I,getErrorMessageProps:L,getRootProps:_,getLabelProps:R,getRequiredIndicatorProps:N}}((0,l.Lr)(e)),c=a.getRootProps,m=(a.htmlProps,(0,o.Z)(a,b)),v=(0,d.cx)("chakra-form-control",e.className);return(0,y.jsx)(C,{value:m,children:(0,y.jsx)(g,{value:n,children:(0,y.jsx)(f.m.div,(0,r.Z)((0,r.Z)({},c({},t)),{},{className:v,__css:n.container}))})})}));A.displayName="FormControl",(0,c.G)((function(e,t){var n=S(),o=T(),i=(0,d.cx)("chakra-form__helper-text",e.className);return(0,y.jsx)(f.m.div,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getHelpTextProps(e,t)),{},{__css:o.helperText,className:i}))})).displayName="FormHelperText";var j=["isDisabled","isInvalid","isReadOnly","isRequired"],E=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function k(e){var t=function(e){var t,n,i,a=S(),u=e.id,c=e.disabled,s=e.readOnly,l=e.required,f=e.isRequired,p=e.isInvalid,y=e.isReadOnly,h=e.isDisabled,b=e.onFocus,m=e.onBlur,v=(0,o.Z)(e,E),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&g.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&g.push(a.helpTextId);return(0,r.Z)((0,r.Z)({},v),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==a?void 0:a.id,isDisabled:null!=(t=null!=c?c:h)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=s?s:y)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(i=null!=l?l:f)?i:null==a?void 0:a.isRequired,isInvalid:null!=p?p:null==a?void 0:a.isInvalid,onFocus:(0,d.v0)(null==a?void 0:a.onFocus,b),onBlur:(0,d.v0)(null==a?void 0:a.onBlur,m)})}(e),n=t.isDisabled,i=t.isInvalid,a=t.isReadOnly,u=t.isRequired,c=(0,o.Z)(t,j);return(0,r.Z)((0,r.Z)({},c),{},{disabled:n,readOnly:a,required:u,"aria-invalid":(0,d.Qm)(i),"aria-required":(0,d.Qm)(u),"aria-readonly":(0,d.Qm)(a)})}var P=["htmlSize"],x=(0,c.G)((function(e,t){var n=e.htmlSize,i=(0,o.Z)(e,P),a=(0,s.jC)("Input",i),u=k((0,l.Lr)(i)),c=(0,d.cx)("chakra-input",e.className);return(0,y.jsx)(f.m.input,(0,r.Z)((0,r.Z)({size:n},u),{},{__css:a.field,ref:t,className:c}))}));x.displayName="Input",x.id="Input"}}]);
//# sourceMappingURL=880.f37a5fac.chunk.js.map