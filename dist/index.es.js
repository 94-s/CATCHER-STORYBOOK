import*as e from"react";import r,{useLayoutEffect as t,createContext as n,useContext as o,createElement as a,Fragment as s,forwardRef as c,useRef as i}from"react";import{jsx as l}from"react/jsx-runtime";var u=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy?"production"===process.env.NODE_ENV:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if("production"!==process.env.NODE_ENV){var t=64===e.charCodeAt(0)&&105===e.charCodeAt(1);t&&this._alreadyInsertedOrderInsensitiveRule&&console.error("You're attempting to insert the following rule:\n"+e+"\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."),this._alreadyInsertedOrderInsensitiveRule=this._alreadyInsertedOrderInsensitiveRule||!t}if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{n.insertRule(e,n.cssRules.length)}catch(r){"production"===process.env.NODE_ENV||/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(e)||console.error('There was a problem inserting the following rule: "'+e+'"',r)}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,"production"!==process.env.NODE_ENV&&(this._alreadyInsertedOrderInsensitiveRule=!1)},e}(),f="-ms-",p="-moz-",d="-webkit-",h=Math.abs,m=String.fromCharCode,y=Object.assign;function v(e){return e.trim()}function g(e,r,t){return e.replace(r,t)}function b(e,r){return e.indexOf(r)}function w(e,r){return 0|e.charCodeAt(r)}function E(e,r,t){return e.slice(r,t)}function N(e){return e.length}function _(e){return e.length}function k(e,r){return r.push(e),e}var O=1,S=1,$=0,x=0,C=0,A="";function j(e,r,t,n,o,a,s){return{value:e,root:r,parent:t,type:n,props:o,children:a,line:O,column:S,length:s,return:""}}function D(e,r){return y(j("",null,null,"",null,null,0),e,{length:-e.length},r)}function M(){return C=x>0?w(A,--x):0,S--,10===C&&(S=1,O--),C}function V(){return C=x<$?w(A,x++):0,S++,10===C&&(S=1,O++),C}function P(){return w(A,x)}function T(){return x}function I(e,r){return E(A,e,r)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R(e){return O=S=1,$=N(A=e),x=0,[]}function F(e){return A="",e}function L(e){return v(I(x-1,W(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;(C=P())&&C<33;)V();return z(e)>2||z(C)>3?"":" "}function B(e,r){for(;--r&&V()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return I(e,T()+(r<6&&32==P()&&32==V()))}function W(e){for(;V();)switch(C){case e:return x;case 34:case 39:34!==e&&39!==e&&W(C);break;case 40:41===e&&W(e);break;case 92:V()}return x}function Y(e,r){for(;V()&&e+C!==57&&(e+C!==84||47!==P()););return"/*"+I(r,x-1)+"*"+m(47===e?e:V())}function q(e){for(;!z(P());)V();return I(e,x)}function G(e){return F(U("",null,null,null,[""],e=R(e),0,[0],e))}function U(e,r,t,n,o,a,s,c,i){for(var l=0,u=0,f=s,p=0,d=0,h=0,y=1,v=1,w=1,E=0,_="",O=o,S=a,$=n,x=_;v;)switch(h=E,E=V()){case 40:if(108!=h&&58==x.charCodeAt(f-1)){-1!=b(x+=g(L(E),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:x+=L(E);break;case 9:case 10:case 13:case 32:x+=Z(h);break;case 92:x+=B(T()-1,7);continue;case 47:switch(P()){case 42:case 47:k(J(Y(V(),T()),r,t),i);break;default:x+="/"}break;case 123*y:c[l++]=N(x)*w;case 125*y:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+u:d>0&&N(x)-f&&k(d>32?K(x+";",n,t,f-1):K(g(x," ","")+";",n,t,f-2),i);break;case 59:x+=";";default:if(k($=H(x,r,t,l,u,o,c,_,O=[],S=[],f),a),123===E)if(0===u)U(x,r,$,$,O,a,f,c,S);else switch(p){case 100:case 109:case 115:U(e,$,$,n&&k(H(e,$,$,0,0,o,c,_,o,O=[],f),S),o,S,f,c,n?O:S);break;default:U(x,$,$,$,[""],S,0,c,S)}}l=u=d=0,y=w=1,_=x="",f=s;break;case 58:f=1+N(x),d=h;default:if(y<1)if(123==E)--y;else if(125==E&&0==y++&&125==M())continue;switch(x+=m(E),E*y){case 38:w=u>0?1:(x+="\f",-1);break;case 44:c[l++]=(N(x)-1)*w,w=1;break;case 64:45===P()&&(x+=L(V())),p=P(),u=f=N(_=x+=q(T())),E++;break;case 45:45===h&&2==N(x)&&(y=0)}}return a}function H(e,r,t,n,o,a,s,c,i,l,u){for(var f=o-1,p=0===o?a:[""],d=_(p),m=0,y=0,b=0;m<n;++m)for(var w=0,N=E(e,f+1,f=h(y=s[m])),k=e;w<d;++w)(k=v(y>0?p[w]+" "+N:g(N,/&\f/g,p[w])))&&(i[b++]=k);return j(e,r,t,0===o?"rule":c,i,l,u)}function J(e,r,t){return j(e,r,t,"comm",m(C),E(e,2,-2),0)}function K(e,r,t,n){return j(e,r,t,"decl",E(e,0,n),E(e,n+1,-1),n)}function Q(e,r){switch(function(e,r){return(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3)}(e,r)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+p+e+f+e+e;case 6828:case 4268:return d+e+f+e+e;case 6165:return d+e+f+"flex-"+e+e;case 5187:return d+e+g(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return d+e+f+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return d+e+f+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+f+g(e,"shrink","negative")+e;case 5292:return d+e+f+g(e,"basis","preferred-size")+e;case 6060:return d+"box-"+g(e,"-grow","")+d+e+f+g(e,"grow","positive")+e;case 4554:return d+g(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-r>6)switch(w(e,r+1)){case 109:if(45!==w(e,r+4))break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+p+(108==w(e,r+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch")?Q(g(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==w(e,r+1))break;case 6444:switch(w(e,N(e)-3-(~b(e,"!important")&&10))){case 107:return g(e,":",":"+d)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(45===w(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+f+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return d+e+f+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+f+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+f+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+f+e+e}return e}function X(e,r){for(var t="",n=_(e),o=0;o<n;o++)t+=r(e[o],o,e,r)||"";return t}function ee(e,r,t,n){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+X(e.children,n)+"}";case"rule":e.value=e.props.join(",")}return N(t=X(e.children,n))?e.return=e.value+"{"+t+"}":""}function re(e){var r=_(e);return function(t,n,o,a){for(var s="",c=0;c<r;c++)s+=e[c](t,n,o,a)||"";return s}}function te(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}var ne,oe,ae,se=function(e,r,t){for(var n=0,o=0;n=o,o=P(),38===n&&12===o&&(r[t]=1),!z(o);)V();return I(e,x)},ce=function(e,r){return F(function(e,r){var t=-1,n=44;do{switch(z(n)){case 0:38===n&&12===P()&&(r[t]=1),e[t]+=se(x-1,r,t);break;case 2:e[t]+=L(n);break;case 4:if(44===n){e[++t]=58===P()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=m(n)}}while(n=V());return e}(R(e),r))},ie=new WeakMap,le=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||ie.get(t))&&!n){ie.set(e,!0);for(var o=[],a=ce(r,o),s=t.props,c=0,i=0;c<a.length;c++)for(var l=0;l<s.length;l++,i++)e.props[i]=o[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},ue=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}},fe=function(e){return"comm"===e.type&&e.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason")>-1},pe=function(e){return 105===e.type.charCodeAt(1)&&64===e.type.charCodeAt(0)},de=function(e){e.type="",e.value="",e.return="",e.children="",e.props=""},he=function(e,r,t){pe(e)&&(e.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),de(e)):function(e,r){for(var t=e-1;t>=0;t--)if(!pe(r[t]))return!0;return!1}(r,t)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),de(e)))},me="undefined"!=typeof document,ye=me?void 0:(ne=function(){return te((function(){var e={};return function(r){return e[r]}}))},oe=new WeakMap,function(e){if(oe.has(e))return oe.get(e);var r=ne(e);return oe.set(e,r),r}),ve=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=Q(e.value,e.length);break;case"@keyframes":return X([D(e,{value:g(e.value,"@","@"+d)})],n);case"rule":if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e,r){return(e=r.exec(e))?e[0]:e}(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([D(e,{props:[g(r,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return X([D(e,{props:[g(r,/:(plac\w+)/,":-webkit-input-$1")]}),D(e,{props:[g(r,/:(plac\w+)/,":-moz-$1")]}),D(e,{props:[g(r,/:(plac\w+)/,f+"input-$1")]})],n)}return""}))}}],ge=function(e){var r=e.key;if("production"!==process.env.NODE_ENV&&!r)throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");if(me&&"css"===r){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||ve;if("production"!==process.env.NODE_ENV&&/[^a-z-]/.test(r))throw new Error('Emotion key must only contain lower case alphabetical characters and - but "'+r+'" was passed');var o,a,s={},c=[];me&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)s[r[t]]=!0;c.push(e)})));var i,l=[le,ue];if("production"!==process.env.NODE_ENV&&l.push(function(e){return function(r,t,n){if("rule"===r.type&&!e.compat){var o=r.value.match(/(:first|:nth|:nth-last)-child/g);if(o){for(var a=r.parent===n[0]?n[0].children:n,s=a.length-1;s>=0;s--){var c=a[s];if(c.line<r.line)break;if(c.column<r.column){if(fe(c))return;break}}o.forEach((function(e){console.error('The pseudo class "'+e+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+e.split("-child")[0]+'-of-type".')}))}}}}({get compat(){return g.compat}}),he),me){var f,p=[ee,"production"!==process.env.NODE_ENV?function(e){e.root||(e.return?f.insert(e.return):e.value&&"comm"!==e.type&&f.insert(e.value+"{}"))}:(i=function(e){f.insert(e)},function(e){e.root||(e=e.return)&&i(e)})],d=re(l.concat(n,p));a=function(e,r,t,n){f=t,"production"!==process.env.NODE_ENV&&void 0!==r.map&&(f={insert:function(e){t.insert(e+r.map)}}),X(G(e?e+"{"+r.styles+"}":r.styles),d),n&&(g.inserted[r.name]=!0)}}else{var h=[ee],m=re(l.concat(n,h)),y=ye(n)(r),v=function(e,r){var t=r.name;return void 0===y[t]&&(y[t]=X(G(e?e+"{"+r.styles+"}":r.styles),m)),y[t]};a=function(e,r,t,n){var o=r.name,a=v(e,r);return void 0===g.compat?(n&&(g.inserted[o]=!0),"development"===process.env.NODE_ENV&&void 0!==r.map?a+r.map:a):n?void(g.inserted[o]=a):a}}var g={key:r,sheet:new u({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:a};return g.sheet.hydrate(c),g},be={exports:{}},we={};var Ee,Ne,_e={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ne=be,"production"===process.env.NODE_ENV?Ne.exports=function(){if(ae)return we;ae=1;var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,i=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case r:switch(e=e.type){case i:case l:case n:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case c:case u:case h:case d:case s:return e;default:return p}}case t:return p}}}function w(e){return b(e)===l}return we.AsyncMode=i,we.ConcurrentMode=l,we.ContextConsumer=c,we.ContextProvider=s,we.Element=r,we.ForwardRef=u,we.Fragment=n,we.Lazy=h,we.Memo=d,we.Portal=t,we.Profiler=a,we.StrictMode=o,we.Suspense=f,we.isAsyncMode=function(e){return w(e)||b(e)===i},we.isConcurrentMode=w,we.isContextConsumer=function(e){return b(e)===c},we.isContextProvider=function(e){return b(e)===s},we.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},we.isForwardRef=function(e){return b(e)===u},we.isFragment=function(e){return b(e)===n},we.isLazy=function(e){return b(e)===h},we.isMemo=function(e){return b(e)===d},we.isPortal=function(e){return b(e)===t},we.isProfiler=function(e){return b(e)===a},we.isStrictMode=function(e){return b(e)===o},we.isSuspense=function(e){return b(e)===f},we.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===s||e.$$typeof===c||e.$$typeof===u||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g||e.$$typeof===m)},we.typeOf=b,we}():Ne.exports=(Ee||(Ee=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,i=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case r:var m=e.type;switch(m){case i:case l:case n:case a:case o:case f:return m;default:var y=m&&m.$$typeof;switch(y){case c:case u:case h:case d:case s:return y;default:return p}}case t:return p}}}var w=i,E=l,N=c,_=s,k=r,O=u,S=n,$=h,x=d,C=t,A=a,j=o,D=f,M=!1;function V(e){return b(e)===l}_e.AsyncMode=w,_e.ConcurrentMode=E,_e.ContextConsumer=N,_e.ContextProvider=_,_e.Element=k,_e.ForwardRef=O,_e.Fragment=S,_e.Lazy=$,_e.Memo=x,_e.Portal=C,_e.Profiler=A,_e.StrictMode=j,_e.Suspense=D,_e.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(e)||b(e)===i},_e.isConcurrentMode=V,_e.isContextConsumer=function(e){return b(e)===c},_e.isContextProvider=function(e){return b(e)===s},_e.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},_e.isForwardRef=function(e){return b(e)===u},_e.isFragment=function(e){return b(e)===n},_e.isLazy=function(e){return b(e)===h},_e.isMemo=function(e){return b(e)===d},_e.isPortal=function(e){return b(e)===t},_e.isProfiler=function(e){return b(e)===a},_e.isStrictMode=function(e){return b(e)===o},_e.isSuspense=function(e){return b(e)===f},_e.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===s||e.$$typeof===c||e.$$typeof===u||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g||e.$$typeof===m)},_e.typeOf=b}()),_e);var ke=be.exports,Oe={};Oe[ke.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oe[ke.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var Se="undefined"!=typeof document;function $e(e,r,t){var n="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):n+=t+" "})),n}var xe=function(e,r,t){var n=e.key+"-"+r.name;(!1===t||!1===Se&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=r.styles)},Ce=function(e,r,t){xe(e,r,t);var n=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var o="",a=r;do{var s=e.insert(r===a?"."+n:"",a,e.sheet,!0);Se||void 0===s||(o+=s),a=a.next}while(void 0!==a);if(!Se&&0!==o.length)return o}};var Ae={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",De="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",Me=/[A-Z]|^ms/g,Ve=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pe=function(e){return 45===e.charCodeAt(1)},Te=function(e){return null!=e&&"boolean"!=typeof e},Ie=te((function(e){return Pe(e)?e:e.replace(Me,"-$&").toLowerCase()})),ze=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(Ve,(function(e,r,t){return Ue={name:r,styles:t,next:Ue},r}))}return 1===Ae[e]||Pe(e)||"number"!=typeof r||0===r?r:r+"px"};if("production"!==process.env.NODE_ENV){var Re=/(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,Fe=["normal","none","initial","inherit","unset"],Le=ze,Ze=/^-ms-/,Be=/-(.)/g,We={};ze=function(e,r){if("content"===e&&("string"!=typeof r||-1===Fe.indexOf(r)&&!Re.test(r)&&(r.charAt(0)!==r.charAt(r.length-1)||'"'!==r.charAt(0)&&"'"!==r.charAt(0))))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+r+"\"'`");var t=Le(e,r);return""===t||Pe(e)||-1===e.indexOf("-")||void 0!==We[e]||(We[e]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+e.replace(Ze,"ms-").replace(Be,(function(e,r){return r.toUpperCase()}))+"?")),t}}var Ye="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function qe(e,r,t){if(null==t)return"";if(void 0!==t.__emotion_styles){if("production"!==process.env.NODE_ENV&&"NO_COMPONENT_SELECTOR"===t.toString())throw new Error(Ye);return t}switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return Ue={name:t.name,styles:t.styles,next:Ue},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)Ue={name:n.name,styles:n.styles,next:Ue},n=n.next;var o=t.styles+";";return"production"!==process.env.NODE_ENV&&void 0!==t.map&&(o+=t.map),o}return function(e,r,t){var n="";if(Array.isArray(t))for(var o=0;o<t.length;o++)n+=qe(e,r,t[o])+";";else for(var a in t){var s=t[a];if("object"!=typeof s)null!=r&&void 0!==r[s]?n+=a+"{"+r[s]+"}":Te(s)&&(n+=Ie(a)+":"+ze(a,s)+";");else{if("NO_COMPONENT_SELECTOR"===a&&"production"!==process.env.NODE_ENV)throw new Error(Ye);if(!Array.isArray(s)||"string"!=typeof s[0]||null!=r&&void 0!==r[s[0]]){var c=qe(e,r,s);switch(a){case"animation":case"animationName":n+=Ie(a)+":"+c+";";break;default:"production"!==process.env.NODE_ENV&&"undefined"===a&&console.error(De),n+=a+"{"+c+"}"}}else for(var i=0;i<s.length;i++)Te(s[i])&&(n+=Ie(a)+":"+ze(a,s[i])+";")}}return n}(e,r,t);case"function":if(void 0!==e){var a=Ue,s=t(e);return Ue=a,qe(e,r,s)}"production"!==process.env.NODE_ENV&&console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");break;case"string":if("production"!==process.env.NODE_ENV){var c=[],i=t.replace(Ve,(function(e,r,t){var n="animation"+c.length;return c.push("const "+n+" = keyframes`"+t.replace(/^@keyframes animation-\w+/,"")+"`"),"${"+n+"}"}));c.length&&console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n"+[].concat(c,["`"+i+"`"]).join("\n")+"\n\nYou should wrap it with `css` like this:\n\ncss`"+i+"`")}}if(null==r)return t;var l=r[t];return void 0!==l?l:t}var Ge,Ue,He=/label:\s*([^\s;\n{]+)\s*(;|$)/g;"production"!==process.env.NODE_ENV&&(Ge=/\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);var Je=function(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";Ue=void 0;var a,s=e[0];null==s||void 0===s.raw?(n=!1,o+=qe(t,r,s)):("production"!==process.env.NODE_ENV&&void 0===s[0]&&console.error(je),o+=s[0]);for(var c=1;c<e.length;c++)o+=qe(t,r,e[c]),n&&("production"!==process.env.NODE_ENV&&void 0===s[c]&&console.error(je),o+=s[c]);"production"!==process.env.NODE_ENV&&(o=o.replace(Ge,(function(e){return a=e,""}))),He.lastIndex=0;for(var i,l="";null!==(i=He.exec(o));)l+="-"+i[1];var u=function(e){for(var r,t=0,n=0,o=e.length;o>=4;++n,o-=4)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(o){case 3:t^=(255&e.charCodeAt(n+2))<<16;case 2:t^=(255&e.charCodeAt(n+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(n)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(o)+l;return"production"!==process.env.NODE_ENV?{name:u,styles:o,map:a,next:Ue,toString:function(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}}:{name:u,styles:o,next:Ue}},Ke="undefined"!=typeof document,Qe=function(e){return e()},Xe=!!e.useInsertionEffect&&e.useInsertionEffect,er=Ke&&Xe||Qe,rr=Xe||t,tr="undefined"!=typeof document,nr={}.hasOwnProperty,or=n("undefined"!=typeof HTMLElement?ge({key:"css"}):null);"production"!==process.env.NODE_ENV&&(or.displayName="EmotionCacheContext"),or.Provider;var ar=function(e){return c((function(r,t){var n=o(or);return e(r,n,t)}))};tr||(ar=function(e){return function(r){var t=o(or);return null===t?(t=ge({key:"css"}),a(or.Provider,{value:t},e(r,t))):e(r,t)}});var sr=n({});"production"!==process.env.NODE_ENV&&(sr.displayName="EmotionThemeContext");var cr,ir=function(e){var r=e.split(".");return r[r.length-1]},lr=function(e){var r=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);return r||(r=/^([A-Za-z0-9$.]+)@/.exec(e))?ir(r[1]):void 0},ur=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),fr=function(e){return e.replace(/\$/g,"-")},pr="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",dr="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",hr=function(e,r){if("production"!==process.env.NODE_ENV&&"string"==typeof r.css&&-1!==r.css.indexOf(":"))throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`"+r.css+"`");var t={};for(var n in r)nr.call(r,n)&&(t[n]=r[n]);if(t[pr]=e,"production"!==process.env.NODE_ENV&&r.css&&("object"!=typeof r.css||"string"!=typeof r.css.name||-1===r.css.name.indexOf("-"))){var o=function(e){if(e)for(var r=e.split("\n"),t=0;t<r.length;t++){var n=lr(r[t]);if(n){if(ur.has(n))break;if(/^[A-Z]/.test(n))return fr(n)}}}((new Error).stack);o&&(t[dr]=o)}return t},mr=function(e){var r=e.cache,t=e.serialized,n=e.isStringTag;xe(r,t,n);var o=er((function(){return Ce(r,t,n)}));if(!tr&&void 0!==o){for(var s,c=t.name,i=t.next;void 0!==i;)c+=" "+i.name,i=i.next;return a("style",((s={})["data-emotion"]=r.key+" "+c,s.dangerouslySetInnerHTML={__html:o},s.nonce=r.sheet.nonce,s))}return null},yr=ar((function(e,r,t){var n=e.css;"string"==typeof n&&void 0!==r.registered[n]&&(n=r.registered[n]);var c=e[pr],i=[n],l="";"string"==typeof e.className?l=$e(r.registered,i,e.className):null!=e.className&&(l=e.className+" ");var u=Je(i,void 0,o(sr));if("production"!==process.env.NODE_ENV&&-1===u.name.indexOf("-")){var f=e[dr];f&&(u=Je([u,"label:"+f+";"]))}l+=r.key+"-"+u.name;var p={};for(var d in e)!nr.call(e,d)||"css"===d||d===pr||"production"!==process.env.NODE_ENV&&d===dr||(p[d]=e[d]);return p.ref=t,p.className=l,a(s,null,a(mr,{cache:r,serialized:u,isStringTag:"string"==typeof c}),a(c,p))}));function vr(e,r,t){return nr.call(r,"css")?l(yr,hr(e,r),t):l(e,r,t)}function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},gr.apply(this,arguments)}"production"!==process.env.NODE_ENV&&(yr.displayName="EmotionCssPropInternal");var br,wr;function Er(){return Er=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Er.apply(this,arguments)}var Nr;function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_r.apply(this,arguments)}var kr;function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Or.apply(this,arguments)}var Sr;function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$r.apply(this,arguments)}var xr=Object.freeze({__proto__:null,icAlert:function(r){return e.createElement("svg",gr({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},r),cr||(cr=e.createElement("path",{fill:"currentColor",d:"M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"})))},icCamera:function(r){return e.createElement("svg",Er({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),br||(br=e.createElement("path",{d:"M19.5 19.5h-15A1.5 1.5 0 0 1 3 18V7.5A1.5 1.5 0 0 1 4.5 6h3L9 3.75h6L16.5 6h3A1.5 1.5 0 0 1 21 7.5V18a1.5 1.5 0 0 1-1.5 1.5Z",stroke:"#ABABAB",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),wr||(wr=e.createElement("path",{d:"M12 15.75A3.375 3.375 0 1 0 12 9a3.375 3.375 0 0 0 0 6.75Z",stroke:"#ABABAB",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))},icChecked:function(r){return e.createElement("svg",_r({width:14,height:11,fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),Nr||(Nr=e.createElement("path",{d:"m1.39 4.752 4.341 4.213L12 1.616",stroke:"#fff",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})))},icFlow:function(r){return e.createElement("svg",Or({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},r),kr||(kr=e.createElement("g",{fill:"none",fillRule:"nonzero"},e.createElement("path",{fill:"#79C9FC",d:"M30 29a5 5 0 0 0 5-5c0-9.389-7.611-17-17-17S1 14.611 1 24s7.611 17 17 17c1.333 0 2.645-.153 3.915-.453-2.405-1.215-4.364-2.686-5.87-4.416-1.939-2.228-3.276-5.058-4.016-8.475A7 7 0 1 1 25 24c.001 2.125 2.705 5 5.001 5Z"}),e.createElement("path",{fill:"#FFC445",d:"M18 19a5 5 0 0 0-5 5c0 9.389 7.611 17 17 17s17-7.611 17-17S39.389 7 30 7c-1.333 0-2.645.153-3.915.453 2.405 1.215 4.51 2.569 5.87 4.416C33.937 14.563 37 20.813 37 24a7 7 0 0 1-14 0c-.023-2.344-2.704-5-5-5Z"}))))},icColors:function(r){return e.createElement("svg",$r({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},r),Sr||(Sr=e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("circle",{cx:23.763,cy:16.192,r:13.271,fill:"#FC521F",opacity:.6}),e.createElement("circle",{cx:15.468,cy:32.308,r:13.271,fill:"#66BF3C",opacity:.6}),e.createElement("path",{fill:"#FF5F95",d:"M15.468 19.036c6.075 0 11.197 4.082 12.772 9.653a13.234 13.234 0 0 1-4.477.775c-6.075 0-11.197-4.082-12.772-9.653a13.235 13.235 0 0 1 4.477-.775Z"}),e.createElement("circle",{cx:32.532,cy:32.308,r:13.271,fill:"#1EA7FD",opacity:.6}),e.createElement("path",{fill:"#87E6E5",d:"M24 22.142a13.243 13.243 0 0 1 4.74 10.166c0 4.08-1.842 7.731-4.74 10.166a13.242 13.242 0 0 1-4.74-10.166c0-4.026 1.793-7.634 4.624-10.068Z"}),e.createElement("path",{fill:"#FBD178",d:"M32.532 19.036c1.41 0 2.768.22 4.043.627-1.526 5.647-6.684 9.8-12.812 9.8-1.41 0-2.77-.22-4.044-.627 1.526-5.646 6.684-9.8 12.813-9.8Z"}),e.createElement("path",{fill:"#FFF",d:"m24 22.142.012.01c.163.137.322.277.477.421l-.1-.091c.078.07.155.142.23.214l-.13-.123c.08.074.159.15.237.225l-.106-.102c.07.068.141.136.21.205l-.104-.103c.086.084.171.17.255.256l-.15-.153.227.232c.256.268.501.546.735.835l-.07-.085c.076.091.15.184.223.278l-.153-.193c.07.086.138.173.205.26l-.052-.067.182.239-.13-.171c.068.088.135.178.2.268l-.07-.097c.077.104.153.209.227.315l-.156-.218c.069.094.137.19.203.286l-.047-.068c.058.083.115.167.172.252l-.125-.184a13.27 13.27 0 0 1 .597.949l-.058-.1c.056.096.111.194.165.292L27 25.732a13.23 13.23 0 0 1 .473.907 13.205 13.205 0 0 1 .395.926l-.063-.161c.035.087.07.175.102.264l-.039-.103c.04.103.078.206.115.31l-.076-.207c.04.108.08.217.117.326l-.041-.118.095.279-.054-.16c.039.112.076.225.112.34l-.058-.18c.034.103.067.208.099.313l.065.221-.037.014.036-.014c-.288.104-.582.197-.88.281h.001c-.291.082-.587.154-.886.216l.064-.013c-.149.032-.298.06-.448.087l.384-.074c-.138.03-.277.056-.417.08l.033-.006a13.24 13.24 0 0 1-.465.074l.432-.068c-.156.027-.313.052-.47.073l.038-.005c-.133.019-.266.035-.4.05l.361-.045c-.154.022-.31.04-.466.056l.105-.01a13.34 13.34 0 0 1-.509.045l.404-.035c-.155.016-.31.029-.467.04l.063-.005c-.156.011-.312.02-.47.025l.407-.02c-.144.009-.289.016-.434.021h.027c-.16.005-.322.008-.484.008l-.45-.008a13.436 13.436 0 0 1-.97-.067l.046.004a13.292 13.292 0 0 1-.424-.05l.379.046a13.286 13.286 0 0 1-.455-.057l.076.011a13.245 13.245 0 0 1-.485-.075l.409.064a13.24 13.24 0 0 1-.458-.073l.05.01c-.13-.023-.26-.048-.388-.074l.338.064a13.206 13.206 0 0 1-.458-.089l.12.025a13.188 13.188 0 0 1-.496-.111l.376.086a13.184 13.184 0 0 1-.44-.102l.064.016c-.137-.034-.274-.07-.41-.108l.346.092c-.14-.035-.279-.072-.416-.111l-.398-.12.07-.248c.028-.098.057-.195.088-.292l-.029.093c.04-.133.084-.264.129-.395l-.1.302c.035-.11.07-.218.108-.326v-.001c.13-.376.277-.745.44-1.105l-.08.179a13.2 13.2 0 0 1 .138-.31l-.059.13.113-.244-.054.115c.051-.11.104-.22.158-.328l-.104.213c.05-.105.101-.209.153-.312l-.05.1c.042-.083.083-.165.126-.246a13.432 13.432 0 0 1 .88-1.448l-.117.17c.059-.086.119-.173.18-.259l-.063.09c.053-.077.108-.154.163-.23l-.1.14c.074-.104.149-.207.226-.308l-.126.169a13.327 13.327 0 0 1 1.21-1.432l-.19.198c.074-.079.15-.157.225-.234l-.035.035.196-.197-.161.162c.077-.079.155-.157.235-.234l-.074.072c.067-.066.135-.132.204-.197l-.13.125c.096-.094.194-.186.294-.277l-.164.152c.072-.068.145-.136.22-.202l-.056.05a14.774 14.774 0 0 1 .387-.34l.03-.025Z"}))))}}),Cr=!1,Ar=ar((function(e,r){"production"===process.env.NODE_ENV||Cr||!e.className&&!e.css||(console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),Cr=!0);var t=e.styles,n=Je([t],void 0,o(sr));if(!tr){for(var s,c=n.name,l=n.styles,u=n.next;void 0!==u;)c+=" "+u.name,l+=u.styles,u=u.next;var f=!0===r.compat,p=r.insert("",{name:c,styles:l},r.sheet,f);return f?null:a("style",((s={})["data-emotion"]=r.key+"-global "+c,s.dangerouslySetInnerHTML={__html:p},s.nonce=r.sheet.nonce,s))}var d=i();return rr((function(){var e=r.key+"-global",t=new r.sheet.constructor({key:e,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return r.sheet.tags.length&&(t.before=r.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),t.hydrate([a])),d.current=[t,o],function(){t.flush()}}),[r]),rr((function(){var e=d.current,t=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&Ce(r,n.next,!0),t.tags.length){var o=t.tags[t.tags.length-1].nextElementSibling;t.before=o,t.flush()}r.insert("",n,t,!1)}}),[r,n.name]),null}));function jr(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return Je(r)}"production"!==process.env.NODE_ENV&&(Ar.displayName="EmotionGlobal");var Dr=function e(r){for(var t=r.length,n=0,o="";n<t;n++){var a=r[n];if(null!=a){var s=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))s=e(a);else for(var c in"production"!==process.env.NODE_ENV&&void 0!==a.styles&&void 0!==a.name&&console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."),s="",a)a[c]&&c&&(s&&(s+=" "),s+=c);break;default:s=a}s&&(o&&(o+=" "),o+=s)}}return o};function Mr(e,r,t){var n=[],o=$e(e,n,t);return n.length<2?t:o+r(n)}var Vr=function(e){var r,t=e.cache,n=e.serializedArr,o=er((function(){for(var e="",r=0;r<n.length;r++){var o=Ce(t,n[r],!1);tr||void 0===o||(e+=o)}if(!tr)return e}));return tr||0===o.length?null:a("style",((r={})["data-emotion"]=t.key+" "+n.map((function(e){return e.name})).join(" "),r.dangerouslySetInnerHTML={__html:o},r.nonce=t.sheet.nonce,r))},Pr=ar((function(e,r){var t=!1,n=[],c=function(){if(t&&"production"!==process.env.NODE_ENV)throw new Error("css can only be used during render");for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];var s=Je(o,r.registered);return n.push(s),xe(r,s,!1),r.key+"-"+s.name},i={css:c,cx:function(){if(t&&"production"!==process.env.NODE_ENV)throw new Error("cx can only be used during render");for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return Mr(r.registered,c,Dr(n))},theme:o(sr)},l=e.children(i);return t=!0,a(s,null,a(Vr,{cache:r,serializedArr:n}),l)}));if("production"!==process.env.NODE_ENV&&(Pr.displayName="EmotionClassNames"),"production"!==process.env.NODE_ENV){var Tr="undefined"!=typeof document,Ir="undefined"!=typeof jest;if(Tr&&!Ir){var zr="undefined"!=typeof globalThis?globalThis:Tr?window:global,Rr="__EMOTION_REACT_"+"11.10.4".split(".")[0]+"__";zr[Rr]&&console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."),zr[Rr]=!0}}const Fr=(e,r,t,n)=>jr`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(${e}deg);
  svg {
    width: ${r};
    height: ${t};

    g:first-of-type {
      path,
      circle {
        fill: none;
      }
    }

    path,
    circle {
      fill: ${n};
    }
  }
`,Lr=({icon:e})=>r.createElement(xr[e]),Zr=({icon:e,rotate:r=0,width:t,height:n,color:o="black",className:a})=>vr("div",{css:Fr(r,t,n,o),className:a,children:vr(Lr,{icon:e})});export{Zr as Icon};
//# sourceMappingURL=index.es.js.map
