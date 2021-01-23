(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.C=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.u=function(a){this.m=a};
function ra(a,b){a.j={va:b,Ta:!0};a.h=a.l||a.C}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.C};
function sa(a,b,c){a.h=c;return{value:b}}
function ta(a){a.l=0;var b=a.j.va;a.j=null;return b}
function ua(a){this.h=new pa;this.i=a}
function wa(a,b){qa(a.h);var c=a.h.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),ya(a)}a.h.i=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ta)throw b.va;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i["throw"],b,a.h.u):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)x(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.H),reject:g(this.m)}};
b.prototype.H=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.G(g):this.o(g)}};
b.prototype.G=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.S(h,g):this.o(g)};
b.prototype.m=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.R=function(g){var h=this.l();g.fa(h.resolve,h.reject)};
b.prototype.S=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(z){n(z)}}:r}
var l,n,p=new b(function(q,r){l=q;n=r});
this.fa(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.fa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).fa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(z){q[w]=z;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).fa(p(q.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push([d,b[d]]);return c}});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!x(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!x(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&x(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&x(k,g)&&x(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&x(k,g)&&x(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&x(h.i,l))for(var p=0;p<n.length;p++){var q=n[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:p,D:q}}return{id:l,list:n,index:-1,D:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.D),this.h.previous.next=l.D,this.h.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push(b[d]);return c}});
var y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ea(a){if(a&&a!=y)return Fa(a.document);null===Ga&&(Ga=Fa(y.document));return Ga}
var Ha=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Fa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ha.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.oa=void 0;a.getInstance=function(){return a.oa?a.oa:a.oa=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E=Pa:E=Qa;return E.apply(null,arguments)}
function Ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function F(){return Date.now()}
function Sa(a,b){A(a,b,void 0)}
function G(a,b){function c(){}
c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ua,Error);Ua.prototype.name="CustomError";function Va(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ya=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Za=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function bb(a,b){var c=Xa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function cb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function eb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){if(void 0===pb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(c){y.console&&y.console.error(c.message)}pb=a}else pb=a}return pb}
;function rb(a,b){this.h=b===sb?a:""}
m=rb.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.na=!0;m.ka=function(){return 1};
m.toString=function(){return this.h+""};
function tb(a){if(a instanceof rb&&a.constructor===rb)return a.h;Ka(a);return"type_error:TrustedResourceUrl"}
var sb={};var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function vb(a,b){if(b)a=a.replace(wb,"&amp;").replace(xb,"&lt;").replace(yb,"&gt;").replace(zb,"&quot;").replace(Ab,"&#39;").replace(Bb,"&#0;");else{if(!Cb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Bb,"&#0;"))}return a}
var wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Cb=/[\x00&<>"']/;function Db(a,b){return a<b?-1:a>b?1:0}
;function I(a,b){this.h=b===Eb?a:""}
m=I.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.na=!0;m.ka=function(){return 1};
m.toString=function(){return this.h.toString()};
function Fb(a){if(a instanceof I&&a.constructor===I)return a.h;Ka(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof I)return a;a="object"==typeof a&&a.U?a.T():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new I(a,Eb)}
var Eb={},Kb=new I("about:invalid#zClosurez",Eb);var Lb;a:{var Mb=y.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function J(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.h=c===Pb?a:"";this.i=b}
m=Ob.prototype;m.na=!0;m.ka=function(){return this.i};
m.U=!0;m.T=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Pb={};function Qb(a,b){var c=qb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof I?b:Jb(b);a.href=Fb(c)}
function Sb(a,b){a.src=tb(b);var c=Ea(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=vb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function dc(a){dc[" "](a);return a}
dc[" "]=Ia;var ec=J("Opera"),fc=J("Trident")||J("MSIE"),gc=J("Edge"),hc=J("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),ic=-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge");function jc(){var a=y.document;return a?a.documentMode:void 0}
var kc;a:{var lc="",mc=function(){var a=Lb;if(hc)return/rv:([^\);]+)(\)|;)/.exec(a);if(gc)return/Edge\/([\d\.]+)/.exec(a);if(fc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ic)return/WebKit\/(\S+)/.exec(a);if(ec)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mc&&(lc=mc?mc[1]:"");if(fc){var nc=jc();if(null!=nc&&nc>parseFloat(lc)){kc=String(nc);break a}}kc=lc}var oc=kc,qc={},rc;if(y.document&&fc){var sc=jc();rc=sc?sc:parseInt(oc,10)||void 0}else rc=void 0;var tc=rc;var uc=J("Firefox")||J("FxiOS"),vc=cc()||J("iPod"),wc=J("iPad"),xc=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!(cc()||J("iPad")||J("iPod"));var yc={},zc=null;
function Ac(a){var b=3;La(a);void 0===b&&(b=0);if(!zc){zc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));yc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===zc[h]&&(zc[h]=g)}}}b=yc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var Bc=!fc||9<=Number(tc);function Cc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Cc.prototype;m.clone=function(){return new Cc(this.x,this.y)};
m.equals=function(a){return a instanceof Cc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dc(a,b){this.width=a;this.height=b}
m=Dc.prototype;m.clone=function(){return new Dc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Fc(a,b){eb(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Gc.hasOwnProperty(d)?a.setAttribute(Gc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Gc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Hc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Bc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};ob(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Ic(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Fc(f,g));2<d.length&&Jc(e,f,d);return f}
function Jc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||C(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(C(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?cb(f):f,d)}}}
function Ic(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Lc(a){var b=Mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Nc(){var a=[];Lc(function(b){a.push(b)});
return a}
var Mc={Ab:"allow-forms",Bb:"allow-modals",Cb:"allow-orientation-lock",Db:"allow-pointer-lock",Eb:"allow-popups",Fb:"allow-popups-to-escape-sandbox",Gb:"allow-presentation",Hb:"allow-same-origin",Ib:"allow-scripts",Jb:"allow-top-navigation",Kb:"allow-top-navigation-by-user-activation"},Oc=Wa(function(){return Nc()});
function Pc(){var a=Ic(document,"IFRAME"),b={};H(Oc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Rc.apply(null,d):Qc(d)}}
;function L(){this.i=this.i;this.C=this.C}
L.prototype.i=!1;L.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Sc(a,b){a.i?b():(a.C||(a.C=[]),a.C.push(b))}
L.prototype.A=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Tc={};function Uc(a){if(a!==Tc)throw Error("Bad secret");}
;function Vc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var Wc;function Xc(){}
function Yc(a,b){Uc(b);this.h=a}
v(Yc,Xc);Yc.prototype.toString=function(){return this.h.toString()};
var Zc=null===(Wc=Vc())||void 0===Wc?void 0:Wc.emptyHTML;new Yc(null!==Zc&&void 0!==Zc?Zc:"",Tc);var $c;function ad(){}
function bd(a,b){Uc(b);this.h=a}
v(bd,ad);bd.prototype.toString=function(){return this.h.toString()};
var cd=null===($c=Vc())||void 0===$c?void 0:$c.emptyScript;new bd(null!==cd&&void 0!==cd?cd:"",Tc);function dd(){}
function ed(a,b){Uc(b);this.h=a}
v(ed,dd);ed.prototype.toString=function(){return this.h};new ed("about:blank",Tc);new ed("about:invalid#zTSz",Tc);function fd(a){gd();var b=qb();a=b?b.createScriptURL(a):a;return new rb(a,sb)}
var gd=Ia;function hd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function id(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=jd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,kd[c])c=kd[c];else{c=String(c);if(!kd[c]){var f=/function\s+([^\(]+)/m.exec(c);kd[c]=f?f[1]:"[Anonymous]"}c=kd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function jd(a,b){b||(b={});b[ld(a)]=!0;var c=a.stack||"",d=a.qk;d&&!b[ld(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=jd(d,b));return c}
function ld(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var kd={};function md(a){this.h=a||{cookie:""}}
m=md.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.xk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.wa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{wa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var nd=new md("undefined"==typeof document?null:document);var od=(new Date).getTime();function pd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function qd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],z=e[2],D=e[3],ca=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var va=D^w&(z^D);var pc=1518500249}else va=w^z^D,pc=1859775393;else 60>r?(va=w&z|D&(w|z),pc=2400959708):(va=w^z^D,pc=3395469782);va=((p<<5|p>>>27)&4294967295)+va+ca+pc+q[r]&4294967295;ca=D;D=z;z=(w<<30|w>>>2)&4294967295;w=p;p=va}e[0]=e[0]+p&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+z&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+ca&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,z=p.length;w<z;++w)r.push(p.charCodeAt(w));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<q;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)p[q++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Fa:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function rd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),sd(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=sd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function sd(a){var b=qd();b.update(a);return b.Fa().toLowerCase()}
;function td(a){var b=pd(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new md(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new md(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,rd(pd(d),
c,a||null)].join(" "):null}return null}
;function ud(){this.i=[];this.h=-1}
ud.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
ud.prototype.get=function(a){return!!this.i[a]};
function vd(a){-1==a.h&&(a.h=$a(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function wd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
wd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function xd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var yd;
function zd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Ic(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=E(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.sa;c.sa=null;e()}};
return function(e){d.next={sa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Ad(a){y.setTimeout(function(){throw a;},0)}
;function Bd(){this.i=this.h=null}
Bd.prototype.add=function(a,b){var c=Cd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Bd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Cd=new wd(function(){return new Dd},function(a){return a.reset()});
function Dd(){this.next=this.scope=this.h=null}
Dd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Dd.prototype.reset=function(){this.next=this.scope=this.h=null};function Ed(a,b){Fd||Gd();Hd||(Fd(),Hd=!0);Id.add(a,b)}
var Fd;function Gd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Fd=function(){a.then(Jd)}}else Fd=function(){var b=Jd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(yd||(yd=zd()),yd(b)):y.setImmediate(b)}}
var Hd=!1,Id=new Bd;function Jd(){for(var a;a=Id.remove();){try{a.h.call(a.scope)}catch(b){Ad(b)}xd(Cd,a)}Hd=!1}
;function Kd(){this.i=-1}
;function Ld(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
G(Ld,Kd);Ld.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Md(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ld.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Md(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Md(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Md(this,e);f=0;break}}this.j=f;this.m+=b}};
Ld.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Md(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Nd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Od(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Pd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Nd(a).match(/\S+/g)||[],c=0<=Xa(c,b);return c}
function Qd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Pd(a,"inverted-hdpi")&&Od(a,Ya(a.classList?a.classList:Nd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Rd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Sd(){}
Sd.prototype.next=function(){throw Rd;};
Sd.prototype.K=function(){return this};
function Td(a){if(a instanceof Sd)return a;if("function"==typeof a.K)return a.K(!1);if(La(a)){var b=0,c=new Sd;c.next=function(){for(;;){if(b>=a.length)throw Rd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ud(a,b){if(La(a))try{H(a,b,void 0)}catch(c){if(c!==Rd)throw c;}else{a=Td(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Rd)throw c;}}}
function Vd(a){if(La(a))return cb(a);a=Td(a);var b=[];Ud(a,function(c){b.push(c)});
return b}
;function Wd(a,b){this.j={};this.h=[];this.N=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Wd)for(c=Xd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Xd(a){Yd(a);return a.h.concat()}
m=Wd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Zd;Yd(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Zd(a,b){return a===b}
m.isEmpty=function(){return 0==this.i};
m.clear=function(){this.j={};this.N=this.i=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.N++,this.h.length>2*this.i&&Yd(this),!0):!1};
function Yd(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.N++);this.j[a]=b};
m.forEach=function(a,b){for(var c=Xd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Wd(this)};
m.K=function(a){Yd(this);var b=0,c=this.N,d=this,e=new Sd;e.next=function(){if(c!=d.N)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Rd;var f=d.h[b++];return a?f:d.j[f]};
return e};var $d=!fc||9<=Number(tc),ae;
if(ae=fc){var be;if(Object.prototype.hasOwnProperty.call(qc,"9"))be=qc["9"];else{for(var ce=0,de=ub(String(oc)).split("."),ee=ub("9").split("."),fe=Math.max(de.length,ee.length),ge=0;0==ce&&ge<fe;ge++){var he=de[ge]||"",ie=ee[ge]||"";do{var je=/(\d*)(\D*)(.*)/.exec(he)||["","","",""],ke=/(\d*)(\D*)(.*)/.exec(ie)||["","","",""];if(0==je[0].length&&0==ke[0].length)break;ce=Db(0==je[1].length?0:parseInt(je[1],10),0==ke[1].length?0:parseInt(ke[1],10))||Db(0==je[2].length,0==ke[2].length)||Db(je[2],ke[2]);
he=je[3];ie=ke[3]}while(0==ce)}be=qc["9"]=0<=ce}ae=!be}var le=ae,me=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ia,b),y.removeEventListener("test",Ia,b)}catch(c){}return a}();function ne(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
ne.prototype.stopPropagation=function(){this.i=!0};
ne.prototype.preventDefault=function(){this.defaultPrevented=!0};function oe(a,b){ne.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
G(oe,ne);var pe={2:"touch",3:"pen",4:"mouse"};
oe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(hc){a:{try{dc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:pe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&this.preventDefault()};
oe.prototype.stopPropagation=function(){oe.J.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
oe.prototype.preventDefault=function(){oe.J.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,le)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var qe="closure_listenable_"+(1E6*Math.random()|0);var re=0;function se(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ga=e;this.key=++re;this.V=this.ea=!1}
function te(a){a.V=!0;a.listener=null;a.h=null;a.src=null;a.ga=null}
;function ue(a){this.src=a;this.listeners={};this.h=0}
ue.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ve(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new se(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};
ue.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ve(e,b,c,d);return-1<b?(te(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function we(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(te(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ve(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.V&&f.listener==b&&f.capture==!!c&&f.ga==d)return e}return-1}
;var xe="closure_lm_"+(1E6*Math.random()|0),ye={},ze=0;function Ae(a,b,c,d,e){if(d&&d.once)Be(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Ce(c),a&&a[qe]?De(a,b,c,C(d)?!!d.capture:!!d,e):Ee(a,b,c,!1,d,e)}
function Ee(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=Fe(a);h||(a[xe]=h=new ue(a));c=h.add(b,c,d,g,f);if(!c.h){d=Ge();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)me||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(He(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ze++}}
function Ge(){var a=Ie,b=$d?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Be(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else c=Ce(c),a&&a[qe]?a.h.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):Ee(a,b,c,!0,d,e)}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=Ce(c),a&&a[qe])?a.h.remove(String(b),c,d,e):a&&(a=Fe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ve(b,c,d,e)),(c=-1<a?b[a]:null)&&Ke(c))}
function Ke(a){if("number"!==typeof a&&a&&!a.V){var b=a.src;if(b&&b[qe])we(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(He(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ze--;(c=Fe(b))?(we(c,a),0==c.h&&(c.src=null,b[xe]=null)):te(a)}}}
function He(a){return a in ye?ye[a]:ye[a]="on"+a}
function Le(a,b,c,d){var e=!0;if(a=Fe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.V&&(f=Me(f,d),e=e&&!1!==f)}return e}
function Me(a,b){var c=a.listener,d=a.ga||a.src;a.ea&&Ke(a);return c.call(d,b)}
function Ie(a,b){if(a.V)return!0;if(!$d){var c=b||B("window.event"),d=new oe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Le(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Le(c[g],f,!1,d),e=e&&h}return e}return Me(a,new oe(b,this))}
function Fe(a){a=a[xe];return a instanceof ue?a:null}
var Ne="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ce(a){if("function"===typeof a)return a;a[Ne]||(a[Ne]=function(b){return a.handleEvent(b)});
return a[Ne]}
;function Oe(){L.call(this);this.h=new ue(this);this.B=this;this.m=null}
G(Oe,L);Oe.prototype[qe]=!0;Oe.prototype.addEventListener=function(a,b,c,d){Ae(this,a,b,c,d)};
Oe.prototype.removeEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
function Pe(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}c=a.B;e=b;var f=e.type||e;if("string"===typeof e)e=new ne(e,c);else if(e instanceof ne)e.target=e.target||c;else{var g=e;e=new ne(f,c);ob(e,g)}g=!0;if(d)for(var h=d.length-1;!e.i&&0<=h;h--){var k=e.h=d[h];g=Qe(k,f,!0,e)&&g}e.i||(k=e.h=c,g=Qe(k,f,!0,e)&&g,e.i||(g=Qe(k,f,!1,e)&&g));if(d)for(h=0;!e.i&&h<d.length;h++)k=e.h=d[h],g=Qe(k,f,!1,e)&&g}
Oe.prototype.A=function(){Oe.J.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,te(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function De(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Qe(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.V&&g.capture==c){var h=g.listener,k=g.ga||g.src;g.ea&&we(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Re(a){var b=[];Se(new Te,a,b);return b.join("")}
function Te(){}
function Se(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Se(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ue(d,c),c.push(":"),Se(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ue(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ve={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},We=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ue(a,b){b.push('"',a.replace(We,function(c){var d=Ve[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ve[c]=d);return d}),'"')}
;function Xe(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ye(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Ze(b,2,c)},function(c){Ze(b,3,c)})}catch(c){Ze(this,3,c)}}
function $e(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
$e.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var af=new wd(function(){return new $e},function(a){a.reset()});
function bf(a,b,c){var d=af.get();d.i=a;d.onRejected=b;d.context=c;return d}
function cf(a){return new Ye(function(b,c){c(a)})}
Ye.prototype.then=function(a,b,c){return df(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ye.prototype.$goog_Thenable=!0;function ef(a,b){return df(a,null,b,void 0)}
Ye.prototype.cancel=function(a){if(0==this.h){var b=new ff(a);Ed(function(){gf(this,b)},this)}};
function gf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?gf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):hf(c),jf(c,e,3,b)))}a.j=null}else Ze(a,3,b)}
function kf(a,b){a.i||2!=a.h&&3!=a.h||lf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function df(a,b,c,d){var e=bf(null,null,null);e.h=new Ye(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ff?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;kf(a,e);return e.h}
Ye.prototype.B=function(a){this.h=0;Ze(this,2,a)};
Ye.prototype.F=function(a){this.h=0;Ze(this,3,a)};
function Ze(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof Ye){kf(d,bf(e||Ia,f||null,a));var g=!0}else if(Xe(d))d.then(e,f,a),g=!0;else{if(C(d))try{var h=d.then;if("function"===typeof h){mf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,lf(a),3!=b||c instanceof ff||nf(a,c))}}
function mf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function lf(a){a.o||(a.o=!0,Ed(a.C,a))}
function hf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ye.prototype.C=function(){for(var a;a=hf(this);)jf(this,a,this.h,this.u);this.o=!1};
function jf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,of(b,c,d);else try{b.j?b.i.call(b.context):of(b,c,d)}catch(e){pf.call(null,e)}xd(af,b)}
function of(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function nf(a,b){a.m=!0;Ed(function(){a.m&&pf.call(null,b)})}
var pf=Ad;function ff(a){Ua.call(this,a)}
G(ff,Ua);ff.prototype.name="cancel";function M(a){L.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
G(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function qf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=ab(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.W(b)}}
m.W=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ia):(c&&bb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.O=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];rf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.W(c)}}return 0!=e}return!1};
function rf(a,b,c){Ed(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(H(b,this.W,this),delete this.j[a])}else this.h.length=0,this.j={}};
m.A=function(){M.J.A.call(this);this.clear();this.l.length=0};function sf(a){this.h=a}
sf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Re(b))};
sf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
sf.prototype.remove=function(a){this.h.remove(a)};function tf(a){this.h=a}
G(tf,sf);function uf(a){this.data=a}
function vf(a){return void 0===a||a instanceof uf?a:new uf(a)}
tf.prototype.set=function(a,b){tf.J.set.call(this,a,vf(b))};
tf.prototype.i=function(a){a=tf.J.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
tf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function wf(a){this.h=a}
G(wf,tf);wf.prototype.set=function(a,b,c){if(b=vf(b)){if(c){if(c<F()){wf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}wf.J.set.call(this,a,b)};
wf.prototype.i=function(a){var b=wf.J.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())wf.prototype.remove.call(this,a);else return b}};function xf(){}
;function yf(){}
G(yf,xf);yf.prototype.clear=function(){var a=Vd(this.K(!0)),b=this;H(a,function(c){b.remove(c)})};function zf(a){this.h=a}
G(zf,yf);m=zf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.K=function(a){var b=0,c=this.h,d=new Sd;d.next=function(){if(b>=c.length)throw Rd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Af(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(Af,zf);function Bf(a,b){this.i=a;this.h=null;if(fc&&!(9<=Number(tc))){Cf||(Cf=new Wd);this.h=Cf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Cf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
G(Bf,yf);var Df={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Cf=null;function Ef(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Df[b]})}
m=Bf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ef(a),b);Ff(this)};
m.get=function(a){a=this.h.getAttribute(Ef(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ef(a));Ff(this)};
m.K=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Sd;d.next=function(){if(b>=c.length)throw Rd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ff(this)};
function Ff(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Gf(a,b){this.i=a;this.h=b+"::"}
G(Gf,yf);Gf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Gf.prototype.get=function(a){return this.i.get(this.h+a)};
Gf.prototype.remove=function(a){this.i.remove(this.h+a)};
Gf.prototype.K=function(a){var b=this.i.K(!0),c=this,d=new Sd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function Hf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var If=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",If,void 0);function N(a){Hf(If,arguments)}
function O(a,b){return a in If?If[a]:b}
function Jf(){return O("PLAYER_CONFIG",{})}
;var Kf=[];function Lf(a){Kf.forEach(function(b){return b(a)})}
function Mf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nf(b),Lf(b)}}:a}
function Nf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b))}
function Of(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Pf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Pf,void 0);function Qf(a){Hf(Pf,arguments)}
;function P(a){a=Rf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sf(a,b){var c=Rf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Rf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;var Tf=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Tf},void 0);var Uf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Vf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Uf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Wf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",hb,void 0);var Xf=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Xf,void 0);
function Yf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=C(e[4])&&C(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Zf=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function $f(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Yf(a,b,c,d);if(e)return e;e=++Xf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Vf(h);if(!Kc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Vf(h);
h.currentTarget=a;return c.call(a,h)};
g=Mf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Zf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d];return e}
function ag(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Zf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
;var bg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Q(a,b){"function"===typeof a&&(a=Mf(a));return window.setTimeout(a,b)}
function cg(a){window.clearTimeout(a)}
;function dg(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.G=$f(window,"mousemove",E(this.H,this));a=E(this.F,this);"function"===typeof a&&(a=Mf(a));this.I=window.setInterval(a,25)}
G(dg,L);dg.prototype.H=function(a){void 0===a.h&&Wf(a);var b=a.h;void 0===a.i&&Wf(a);this.h=new Cc(b,a.i)};
dg.prototype.F=function(){if(this.h){var a=bg();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
dg.prototype.A=function(){window.clearInterval(this.I);ag(this.G)};function eg(){}
function fg(a,b){return gg(a,1,b)}
;function hg(){eg.apply(this,arguments)}
v(hg,eg);function gg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Q(a,c||0)}
function ig(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):cg(a)}}
hg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ja(hg);hg.getInstance();var jg={};
function kg(a){var b=void 0===a?{}:a;a=void 0===b.La?!0:b.La;b=void 0===b.bb?!1:b.bb;if(null==B("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?F()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&lg();$f(document,"keydown",lg);$f(document,"keyup",lg);$f(document,"mousedown",lg);$f(document,"mouseup",lg);a&&(b?$f(window,"touchmove",function(){mg("touchmove",200)},{passive:!0}):($f(window,"resize",function(){mg("resize",200)}),$f(window,"scroll",function(){mg("scroll",200)})));
new dg(function(){mg("mouse",100)});
$f(document,"touchstart",lg,{passive:!0});$f(document,"touchend",lg,{passive:!0})}}
function mg(a,b){jg[a]||(jg[a]=!0,fg(function(){lg();jg[a]=!1},b))}
function lg(){null==B("_lact",window)&&kg();var a=F();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function ng(){var a=B("_lact",window);return null==a?-1:Math.max(F()-a,0)}
;var og=y.ytPubsubPubsubInstance||new M,pg=y.ytPubsubPubsubSubscribedKeys||{},qg=y.ytPubsubPubsubTopicToKeys||{},rg=y.ytPubsubPubsubIsSynchronous||{};function sg(a,b){var c=tg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){pg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{rg[a]?f():Q(f,0)}catch(g){Nf(g)}},void 0);
pg[d]=!0;qg[a]||(qg[a]=[]);qg[a].push(d);return d}return 0}
function ug(a){var b=tg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete pg[c]}))}
function vg(a,b){var c=tg();c&&c.publish.apply(c,arguments)}
function wg(a){var b=tg();if(b)if(b.clear(a),a)xg(a);else for(var c in qg)xg(c)}
function tg(){return y.ytPubsubPubsubInstance}
function xg(a){qg[a]&&(a=qg[a],H(a,function(b){pg[b]&&delete pg[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.W;M.prototype.publish=M.prototype.O;M.prototype.clear=M.prototype.clear;A("ytPubsubPubsubInstance",og,void 0);A("ytPubsubPubsubTopicToKeys",qg,void 0);A("ytPubsubPubsubIsSynchronous",rg,void 0);A("ytPubsubPubsubSubscribedKeys",pg,void 0);var yg=window,R=yg.ytcsi&&yg.ytcsi.now?yg.ytcsi.now:yg.performance&&yg.performance.timing&&yg.performance.now&&yg.performance.timing.navigationStart?function(){return yg.performance.timing.navigationStart+yg.performance.now()}:function(){return(new Date).getTime()};var zg=Sf("initial_gel_batch_timeout",1E3),Ag=Math.pow(2,16)-1,Bg=null,Cg=0,Dg=void 0,Eg=0,Fg=0,Gg=0,Hg=!0,Ig=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Ig,void 0);var Jg=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Jg,void 0);function Kg(a){a=void 0===a?!1:a;return new Ye(function(b){cg(Eg);cg(Fg);Fg=0;Dg&&Dg.isReady()?(Lg(b,a),Ig.clear()):(Mg(),b())})}
function Mg(){P("web_gel_timeout_cap")&&!Fg&&(Fg=Q(Kg,6E4));cg(Eg);var a=O("LOGGING_BATCH_TIMEOUT",Sf("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Hg&&(a=zg);Eg=Q(Kg,a)}
function Lg(a,b){var c=Dg;b=void 0===b?!1:b;for(var d=Math.round(R()),e=Ig.size,f=u(Ig),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=mb({context:Ng(c.h||Og())});h.events=k;(k=Jg[g])&&Pg(h,g,k);delete Jg[g];Qg(h,d);Rg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Cg=Math.round(R()-d)},
onError:function(){e--;e||a()},
ob:b});Hg=!1}}
function Qg(a,b){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&P("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Ag/2));d++;d>Ag&&(d=1);N("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Bg&&Cg&&P("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Bg,roundtripMs:String(Cg)});Bg=c;Cg=0}}
function Pg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Sg=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Sg,void 0);
function Tg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||R());e[a]=b;a=ng();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.M&&(a=e.context,b=d.M,Sg[b]=b in Sg?Sg[b]+1:0,a.sequence={index:Sg[b],groupKey:b},d.Ga&&delete Sg[d.M]);d=d.L;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Jg[d.token]=a,a=d.token);d=Ig.get(a)||[];Ig.set(a,d);d.push(e);c&&(Dg=new c);c=Sf("web_logging_max_batch")||
100;e=R();d.length>=c?Kg(!0):10<=e-Gg&&(Mg(),Gg=e)}
;function Ug(){var a=Vg;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Wg(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Xg=/^[\w.]*$/,Yg={q:!0,search_query:!0};function Zg(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=$g(g[0]||""),k=$g(g[1]||"");h in d?Array.isArray(d[h])?db(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(q){var l=q,n=g[0],p=String(Zg);l.args=[{key:n,value:g[1],query:a,method:ah==p?"unchanged":p}];Yg.hasOwnProperty(n)||("ReferenceError"===l.name?Of(l):Nf(l))}}return d}
var ah=String(Zg);function bh(a){var b=[];eb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ch(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zg(a,"&")}
function dh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ch(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
function $g(a){return a&&a.match(Xg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function eh(a){var b=fh;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=od;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ca){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(ca){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(ca){}try{var n=h.outerWidth;var p=h.outerHeight}catch(ca){}try{var q=h.innerWidth;var r=h.innerHeight}catch(ca){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,n,p,q,
r];l=b.h.top;try{var w=(l||window).document,z="CSS1Compat"==w.compatMode?w.documentElement:w.body;var D=(new Dc(z.clientWidth,z.clientHeight)).round()}catch(ca){D=new Dc(-12245933,-12245933)}w=D;D={};z=new ud;y.SVGElement&&y.document.createElementNS&&z.set(0);l=Pc();l["allow-top-navigation-by-user-activation"]&&z.set(1);l["allow-popups-to-escape-sandbox"]&&z.set(2);y.crypto&&y.crypto.subtle&&z.set(3);y.TextDecoder&&y.TextEncoder&&z.set(4);z=vd(z);D.bc=z;D.bih=w.height;D.biw=w.width;D.brdim=k.join();
b=b.i;b=(D.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,D.wgl=!!K.WebGLRenderingContext,D);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var fh=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return bh(eh(a))},void 0);var gh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function hh(){if(!gh)return null;var a=gh();return"open"in a?a:null}
function ih(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var jh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
kh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),lh=!1;
function mh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Xb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=P("web_ajax_ignore_global_headers_if_set");for(var f in jh)e=O(jh[f]),!e||!c&&Xb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Xb(a))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=bh(eh(void 0));return b}
function nh(a){var b=window.location.search,c=Xb(a),d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ch(b),f={};H(kh,function(g){e[g]&&(f[g]=e[g])});
return dh(a,f||{},!1)}
function oh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ph(a,b);var d=qh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&cg(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||y;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.onFinish&&b.onFinish.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.onFetchTimeout&&0<b.timeout&&(f=Q(function(){e||(e=!0,cg(f),b.onFetchTimeout.call(b.context||y))},b.timeout))}else rh(a,b)}
function rh(a,b){var c=b.format||"JSON";a=ph(a,b);var d=qh(a,b),e=!1,f=sh(a,function(k){if(!e){e=!0;h&&cg(h);var l=ih(k),n=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)n=th(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Q(function(){e||(e=!0,f.abort(),cg(h),g.call(b.context||y,f))},b.timeout)}return f}
function ph(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=dh(a,d||{},!0));return a}
function qh(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ch(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Zb(e));f=e||f&&!ib(f);!lh&&f&&
"POST"!=b.method&&(lh=!0,Nf(Error("AJAX request with postData should use POST")));return e}
function th(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Of(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?uh(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=vh(g)})}d&&wh(e);
return e}
function wh(a){if(C(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else wh(a[b])}}
function uh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function vh(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function sh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=hh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=nh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=mh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function xh(){return"INNERTUBE_API_KEY"in If&&"INNERTUBE_API_VERSION"in If}
function Og(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),Ma:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Na:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Pa:O("INNERTUBE_CONTEXT_HL",void 0),Oa:O("INNERTUBE_CONTEXT_GL",void 0),Qa:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",Sa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ra:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ng(a){var b={client:{hl:a.Pa,gl:a.Oa,clientName:a.Na,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&P("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(ch(O("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function yh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.nk||O("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().mk:b=td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function zh(a){a=Object.assign({},a);delete a.Authorization;var b=td();if(b){var c=new Ld;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ac(c.digest())}return a}
;function Ah(a,b,c,d){nd.set(""+a,b,{wa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Bh(a){var b=new Af;(b=b.isAvailable()?a?new Gf(b,a):b:null)||(a=new Bf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new wf(a):null;this.i=document.domain||window.location.hostname}
Bh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,F()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Re(b))}catch(f){return}else e=escape(b);Ah(a,e,c,this.i)};
Bh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=nd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;nd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ch;function Dh(){Ch||(Ch=new Bh("yt.innertube"));return Ch}
function Eh(a,b,c,d){if(d)return null;d=Dh().get("nextId",!0)||1;var e=Dh().get("requests",!0)||{};e[d]={method:a,request:b,authState:zh(c),requestTime:Math.round(R())};Dh().set("nextId",d+1,86400,!0);Dh().set("requests",e,86400,!0);return d}
function Fh(a){var b=Dh().get("requests",!0)||{};delete b[a];Dh().set("requests",b,86400,!0)}
function Gh(a){var b=Dh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=zh(yh(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Rg(a,d.method,e,{}));delete b[c]}}Dh().set("requests",b,86400,!0)}}
;function Hh(a,b){this.version=a;this.args=b}
;function Ih(a,b){this.topic=a;this.h=b}
Ih.prototype.toString=function(){return this.topic};var Jh=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.W;M.prototype.publish=M.prototype.O;M.prototype.clear=M.prototype.clear;A("ytPubsub2Pubsub2Instance",Jh,void 0);var Kh=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Kh,void 0);var Lh=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Lh,void 0);var Mh=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Mh,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Nh(a,b){var c=Oh();c&&c.publish.call(c,a.toString(),a,b)}
function Ph(a){var b=Qh,c=Oh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Kh[d])try{if(f&&b instanceof Ih&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.N){var l=new h;h.N=l.version}var n=h.N}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
cb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Nf(p)}},Mh[b.toString()]?B("yt.scheduler.instance")?fg(g):Q(g,0):g())});
Kh[d]=!0;Lh[b.toString()]||(Lh[b.toString()]=[]);Lh[b.toString()].push(d);return d}
function Rh(){var a=Sh,b=Ph(function(c){a.apply(void 0,arguments);Th(b)});
return b}
function Th(a){var b=Oh();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete Kh[c]}))}
function Oh(){return B("ytPubsub2Pubsub2Instance")}
;var Uh=vc||wc;function Vh(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Wh=[],Xh=!1;function Yh(a,b){Xh||(Wh.push({type:"EVENT",eventType:a,payload:b}),10<Wh.length&&Wh.shift())}
;function S(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(S,Error);var Zh={},$h=(Zh.AUTH_INVALID="No user identifier specified.",Zh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Zh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Zh.MISSING_OBJECT_STORE="Object store not created.",Zh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Zh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Zh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Zh);
function ai(a,b,c){b=void 0===b?{}:b;c=void 0===c?$h[a]:c;S.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,ai.prototype);Xh||(Wh.push({type:"ERROR",payload:this}),10<Wh.length&&Wh.shift())}
v(ai,S);function bi(a){ai.call(this,"MISSING_OBJECT_STORE",{tk:a},$h.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,bi.prototype)}
v(bi,ai);function ci(a){if(!a)throw Error();throw a;}
function di(a){return a}
function T(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={P:0};f.P<a.length;f={P:f.P},++f.P)ei(T.resolve(a[f.P]).then(function(g){return function(h){d[g.P]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:di,e=null!==b&&void 0!==b?b:ci;return new T(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){fi(c,c,d,f,g)}),c.onRejected.push(function(){gi(c,c,e,f,g)})):"FULFILLED"===c.state.status?fi(c,c,d,f,g):"REJECTED"===c.state.status&&gi(c,c,e,f,g)})};
function ei(a,b){a.then(void 0,b)}
function fi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?hi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?hi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?hi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ii(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ji(a){return new Promise(function(b,c){ii(a,b,c)})}
function U(a){return new T(function(b,c){ii(a,b,c)})}
;function ki(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function li(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
m=li.prototype;m.add=function(a,b,c){return mi(this,[a],"readwrite",function(d){return ni(d,a).add(b,c)})};
m.clear=function(a){return mi(this,[a],"readwrite",function(b){return ni(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return mi(this,[a],"readonly",function(c){return ni(c,a).count(b)})};
m["delete"]=function(a,b){return mi(this,[a],"readwrite",function(c){return ni(c,a)["delete"](b)})};
m.get=function(a,b){return mi(this,[a],"readwrite",function(c){return ni(c,a).get(b)})};
function mi(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.h.transaction(b,c);d=oi(e,d)["catch"](function(f){var g=a.h.name,h=b.join();f instanceof ai||f instanceof S||("QuotaExceededError"===f.name?f=new ai("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):xc&&"UnknownError"===f.name?f=new ai("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,S.prototype),f.args=[{name:"IdbError",uk:f.name,dbName:g,objectStoreNames:h}]));throw f;});
pi(a,d,b.join(),c);return d}
function pi(a,b,c,d){bc(a,function f(){var g,h,k=this,l,n,p;return Aa(f,function(q){if(1==q.h)return g=Math.round(R()),q.l=2,sa(q,b,4);2!=q.h?(h=Math.round(R()),qi(k,!0,c,h-g),q.h=0,q.l=0):(l=ta(q),n=Math.round(R()),p=n-g,l instanceof ai&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&Yh("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof ai&&"UNKNOWN_ABORT"===l.type&&(Yh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:p,transactionCount:k.transactionCount,dbDuration:n-k.j}),k.i=!0),qi(k,!1,c,p),q.h=0)})})}
function qi(a,b,c,d){Yh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function ri(a){this.h=a}
m=ri.prototype;m.add=function(a,b){return U(this.h.add(a,b))};
m.clear=function(){return U(this.h.clear()).then(function(){})};
m.count=function(a){return U(this.h.count(a))};
function si(a,b){return ti(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
m["delete"]=function(a){return a instanceof IDBKeyRange?si(this,a):U(this.h["delete"](a))};
m.get=function(a){return U(this.h.get(a))};
m.index=function(a){return new ui(this.h.index(a))};
m.getName=function(){return this.h.name};
function ti(a,b,c){a=a.h.openCursor(b.query,b.direction);return vi(a).then(function(d){return ki(d,c)})}
function wi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=ai;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function oi(a,b){var c=new wi(a);return xi(c,b)}
function xi(a,b){var c=new Promise(function(d,e){ei(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
wi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new ai("EXPLICIT_ABORT");};
wi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function ni(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new ri(c),a.i.set(c,d));return d}
function ui(a){this.h=a}
ui.prototype.count=function(a){return U(this.h.count(a))};
ui.prototype["delete"]=function(a){return yi(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
ui.prototype.get=function(a){return U(this.h.get(a))};
ui.prototype.getKey=function(a){return U(this.h.getKey(a))};
function yi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return vi(a).then(function(d){return ki(d,c)})}
function zi(a,b){this.request=a;this.cursor=b}
function vi(a){return U(a).then(function(b){return null===b?null:new zi(a,b)})}
m=zi.prototype;m.advance=function(a){this.cursor.advance(a);return vi(this.request)};
m["continue"]=function(a){this.cursor["continue"](a);return vi(this.request)};
m["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return U(this.cursor.update(a))};function Ai(a,b,c){return bc(this,function e(){var f,g,h,k,l,n,p,q,r,w;return Aa(e,function(z){if(1==z.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.nb,n=g.upgrade,p=g.closed,r=function(){q||(q=new li(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&Yh("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var ca=r(),va=new wi(f.transaction);n&&n(ca,D.oldVersion,D.newVersion,va)}),h&&f.addEventListener("blocked",function(){h()}),sa(z,ji(f),2);
w=z.m;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){Yh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return z["return"](r())})})}
function Bi(a,b){b=void 0===b?{}:b;return bc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return sa(h,ji(e),0)})})}
;function Ci(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Di(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Ai(a,b,c)}
Ci.prototype["delete"]=function(a){a=void 0===a?{}:a;return Bi(this.name,a)};
function Ei(){var a=Fi;if(!a.h){var b=function(){a.h===e&&(a.h=void 0)},c={blocking:function(f){f.close()},
closed:b,nb:b,upgrade:a.options.upgrade},d=function(){return bc(a,function g(){var h=this,k,l,n;return Aa(g,function(p){switch(p.h){case 1:return p.l=2,sa(p,Di(h.name,h.options.version,c),4);case 4:k=p.m;if(!uc){p.h=5;break}a:{var q=u(Object.keys(h.options.Wa));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.h=5;break}if(!uc||h.i){p.h=7;break}h.i=!0;return sa(p,h["delete"](),8);case 8:return p["return"](d());case 7:throw new bi(l);
case 5:return p["return"](k);case 2:n=ta(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p["return"](Di(h.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0})));b();throw n;}})})};
var e=d();a.h=e}return a.h}
;var Fi=new Ci({Wa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Gi(a){return bc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return sa(e,Ei(),2);d=e.m;return e["return"](mi(d,["databases"],"readwrite",function(f){var g=ni(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.h.put(a,void 0)).then(function(){})})}))})})}
function Hi(){return bc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return sa(d,Ei(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Ii;
function Ji(){return bc(this,function b(){var c,d;return Aa(b,function(e){switch(e.h){case 1:var f;if(f=Uh)f=/WebKit\/([0-9]+)/.exec(Lb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!P("ytidb_allow_on_ios_safari_v8_and_v9")||gc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return sa(e,Gi(d),4);case 4:return sa(e,Hi(),5);case 5:return e["return"](!0);case 2:return ta(e),e["return"](!1)}})})}
function Ki(){if(void 0!==Ii)return Ii;Xh=!0;return Ii=Ji().then(function(a){Xh=!1;return a})}
;var Li;function Mi(){Li||(Li=new Bh("yt.offline"));return Li}
;function Ni(){Oe.call(this);this.o=this.u=this.j=!1;this.l=Oi();Pi(this);Qi(this)}
v(Ni,Oe);function Oi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Qi(a){window.addEventListener("online",function(){a.l=!0;a.j&&Pe(a,"ytnetworkstatus-online");Ri(a);if(a.o&&P("offline_error_handling")){var b=Mi().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Nf(d)}Mi().set("errors",{},2592E3,!0)}}})}
function Pi(a){window.addEventListener("offline",function(){a.l=!1;a.j&&Pe(a,"ytnetworkstatus-offline");Ri(a)})}
function Ri(a){a.u&&(Of(new S("NetworkStatusManager state did not match poll",R()-0)),a.u=!1)}
;function Si(a){a=void 0===a?{}:a;Oe.call(this);var b=this;this.l=this.u=0;Ni.h||(Ni.h=new Ni);this.j=Ni.h;this.j.j=!0;a.Ua&&(this.j.o=!0);a.ha?(this.ha=a.ha,De(this.j,"ytnetworkstatus-online",function(){Ti(b,"publicytnetworkstatus-online")}),De(this.j,"ytnetworkstatus-offline",function(){Ti(b,"publicytnetworkstatus-offline")})):(De(this.j,"ytnetworkstatus-online",function(){Pe(b,"publicytnetworkstatus-online")}),De(this.j,"ytnetworkstatus-offline",function(){Pe(b,"publicytnetworkstatus-offline")}))}
v(Si,Oe);function Ti(a,b){a.ha?a.l?(ig(a.u),a.u=fg(function(){a.o!==b&&(Pe(a,b),a.o=b,a.l=R())},a.ha-(R()-a.l))):(Pe(a,b),a.o=b,a.l=R()):Pe(a,b)}
;var Ui;function Vi(a,b){b=void 0===b?{}:b;Ki().then(function(){Ui||(Ui=new Si({Ua:!0}));Ui.j.l!==Oi()&&Of(new S("NetworkStatusManager isOnline does not match window status"));rh(a,b)})}
function Wi(a,b){b=void 0===b?{}:b;Ki().then(function(){rh(a,b)})}
;function Xi(a){var b=this;this.h=null;a?this.h=a:xh()&&(this.h=Og());gg(function(){Gh(b)},0,5E3)}
Xi.prototype.isReady=function(){!this.h&&xh()&&(this.h=Og());return!!this.h};
function Rg(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Of(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new S("innertube xhrclient not ready",b,c,d);Nf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.Qa)&&(g=e);var h=a.h.Sa||!1,k=yh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.Ra&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var n=dh(""+g+e,l||{},!0);Ki().then(function(p){if(d.retry&&P("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(P("networkless_gel")&&!p||!P("networkless_gel"))var q=Eh(b,
c,k,h);if(q){var r=f.onSuccess,w=f.onFetchSuccess;f.onSuccess=function(z,D){Fh(q);r(z,D)};
c.onFetchSuccess=function(z,D){Fh(q);w(z,D)}}}try{P("use_fetch_for_op_xhr")?oh(n,f):P("networkless_gel")&&d.retry?(f.method="POST",!d.ob&&P("nwl_send_fast_on_unload")?Wi(n,f):Vi(n,f)):(f.method="POST",f.postParams||(f.postParams={}),rh(n,f))}catch(z){if("InvalidAccessError"==z.name)q&&(Fh(q),q=0),Of(Error("An extension is blocking network request."));
else throw z;}q&&gg(function(){Gh(a)},0,5E3)})}
;function V(a,b,c){c=void 0===c?{}:c;var d=Xi;O("ytLoggingEventsDefaultDisabled",!1)&&Xi==Xi&&(d=null);Tg(a,b,d,c)}
;var Yi=[{xa:function(a){return"Cannot read property '"+a.key+"'"},
qa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{xa:function(a){return"Cannot call '"+a.key+"'"},
qa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];
function Zi(a){for(var b=u(Yi),c=b.next();!c.done;c=b.next())if(c=c.value,c.qa[a.name])for(var d=u(c.qa[a.name]),e=d.next();!e.done;e=d.next()){var f=e.value;if(e=a.message.match(f.regexp)){a.params["params.error.original"]=e[0];d=f.groups;f={};for(var g=0;g<d.length;g++)f[d[g]]=e[g+1],a.params["params.error."+d[g]]=e[g+1];a.message=c.xa(f);break}}return a}
;function $i(){this.h=[];this.i=[]}
var aj;function bj(){aj||(aj=new $i);return aj}
function cj(a){return"msg="+a.i.length+"&cb="+a.h.length}
;var dj=new M;function ej(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=fj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=fj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function fj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function gj(a,b,c,d){c+="."+a;a=hj(b);d[c]=a;return c.length+a.length}
function hj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
function ij(a,b){var c=id(a),d=c.message||"Unknown Error",e=c.name||"UnknownError",f=c.stack||a.h||"Not available";if(f.startsWith(e+": "+d)){var g=f.split("\n");g.shift();f=g.join("\n")}g=c.lineNumber||"Not available";c=c.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0,k=0;k<a.args.length;k++){var l=a.args[k],n="params."+k;h+=n.length;if(l)if(Array.isArray(l)){var p=b,q=h;for(h=0;h<l.length&&!(l[h]&&(q+=gj(h,l[h],n,p),500<q));h++);h=q}else if("object"===typeof l)for(p in p=
void 0,q=b,l){if(l[p]){var r=p;var w=l[p],z=q;r="string"!==typeof w||"clickTrackingParams"!==r&&"trackingParams"!==r?0:(w=ej(atob(w.replace(/-/g,"+").replace(/_/g,"/"))))?gj(r+".ve",w,n,z):0;h+=r;h+=gj(p,l[p],n,q);if(500<h)break}}else b[n]=hj(l),h+=b[n].length;else b[n]=hj(l),h+=b[n].length;if(500<=h)break}else if(a.hasOwnProperty("params")&&a.params)if(l=a.params,"object"===typeof a.params)for(k in n=0,l){if(l[k]&&(p="params."+k,q=hj(l[k]),b[p]=q,n+=p.length+q.length,500<n))break}else b.params=hj(l);
navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);d={message:d,name:e,lineNumber:g,fileName:c,stack:f,params:b,sampleWeight:1};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);if(void 0!==a.sampleWeight)e=a.sampleWeight;else a:{e=bj();g=u(e.i);for(c=g.next();!c.done;c=g.next())if(c=c.value,d.message&&d.message.match(c.sk)){e=c.weight;break a}e=u(e.h);for(g=e.next();!g.done;g=e.next())if(g=g.value,g.Ea(d)){e=g.weight;break a}e=1}d.sampleWeight=
e;return d}
;var jj=new Set,kj=0,lj=0,mj=0,nj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function oj(a){pj(a,"WARNING")}
function pj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(P("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=kj||(P("kevlar_js_fixes")?
(a=Zi(ij(a,c)),a.params||(a.params={}),c=bj(),a.params["params.errorServiceSignature"]=cj(c),a.params["params.serviceWorker"]="false",a.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length)):a=Zi(ij(a,c)),window.yterr&&"function"===typeof window.yterr&&window.yterr(a),c=0===a.sampleWeight,jj.has(a.message)||c)))){"ERROR"===b?(dj.O("handleError",a),P("record_app_crashed_web")&&0===mj&&1===a.sampleWeight&&(mj++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),
lj++):"WARNING"===b&&dj.O("handleWarning",a);if(P("kevlar_gel_error_routing")){d=b;a:{c=u(nj);for(e=c.next();!e.done;e=c.next())if(Vh(e.value.toLowerCase())){c=!0;break a}c=!1}if(!c){e={stackTrace:a.stack};a.fileName&&(e.filename=a.fileName);c=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(e.lineNumber=Number(c[0]),e.columnNumber=Number(c[1])):e.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",
message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};"ERROR"===d?c.level="ERROR_LEVEL_ERROR":"WARNING"===d&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href};O("FEXP_EXPERIMENTS")&&(e.experimentIds=O("FEXP_EXPERIMENTS"));e.kvPairs=P("kevlar_js_fixes")?[]:[{key:"client.params.errorServiceSignature",value:cj(bj())},{key:"client.params.serviceWorker",value:"false"}];if(f=a.params)for(var g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=
h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=O("SERVER_NAME",void 0);g=O("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));V("clientError",{errorMetadata:e,stackTrace:d,logMessage:c});Kg()}}if(!P("suppress_error_204_logging")){c=a.params||{};b={urlParams:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:a.lineNumber,level:b,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.postParams){a.stack&&(b.postParams.stack=a.stack);d=u(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.postParams["client."+e]=c[e];if(c=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.postParams[e]=c[e];c=O("SERVER_NAME",void 0);d=O("SERVER_VERSION",void 0);c&&d&&(b.postParams["server.name"]=c,b.postParams["server.version"]=d)}rh(O("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}jj.add(a.message);kj++}}
function qj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function rj(a){a&&(a.dataset?a.dataset[sj("loaded")]="true":a.setAttribute("data-loaded","true"))}
function tj(a,b){return a?a.dataset?a.dataset[sj(b)]:a.getAttribute("data-"+b):null}
var uj={};function sj(a){return uj[a]||(uj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var vj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,wj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function xj(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(vj,""),c=c.replace(wj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else yj(a,b,c)}
function yj(a,b,c){c=void 0===c?null:c;var d=zj(a),e=document.getElementById(d),f=e&&tj(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=sg(d,b),b=""+Ma(b),Aj[b]=f),g||(e=Bj(a,d,function(){tj(e,"loaded")||(rj(e),vg(d),Q(Ra(wg,d),0))},c)))}
function Bj(a,b,c,d){d=void 0===d?null:d;var e=Ic(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,fd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Cj(a){a=zj(a);var b=document.getElementById(a);b&&(wg(a),b.parentNode.removeChild(b))}
function Dj(a,b){if(a&&b){var c=""+Ma(b);(c=Aj[c])&&ug(c)}}
function zj(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var Aj={};var Ej=[],Fj=!1;function Gj(){if(!P("disable_ad_status_on_html5_clients")&&(!P("condition_ad_status_fetch_on_consent_cookie_html5_clients")||nd.get("CONSENT","").startsWith("YES+"))&&"1"!=fb(Jf(),"args","privembed")){var a=function(){Fj=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{xj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Ej.push(fg(function(){if(!(Fj||"google_ad_status"in window)){try{Dj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Fj=!0;N("DCLKSTAT",3)}},5E3))}}
function Hj(){return parseInt(O("DCLKSTAT",0),10)}
;function Ij(){this.i=!1;this.h=null}
Ij.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,xj(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Jj(g,c,d,f,h):(Cj(b),oj(new S("Unable to load Botguard","from "+b)))},e)):a&&(e=Ic(document,"SCRIPT"),e.textContent=a,e.nonce=Ea(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Jj(this,c,d,f,a):oj(Error("Unable to load Botguard from JS")))};
function Jj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ia)}catch(f){oj(f)}else{try{a.h=new e(b)}catch(f){oj(f)}c&&c(b)}}
Ij.prototype.dispose=function(){this.h=null};var Kj=new Ij;function Lj(){return!!Kj.h}
function Mj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Kj.h?Kj.h.hot?Kj.h.hot(void 0,void 0,a):Kj.h.invoke(void 0,void 0,a):null}
;var Nj=F().toString();
function Oj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=F();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Nj)for(a=1,b=0;b<Nj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Nj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Pj=y.ytLoggingDocDocumentNonce_||Oj();A("ytLoggingDocDocumentNonce_",Pj,void 0);var Qj={Sd:0,Xb:1,hc:2,Ug:3,Td:4,Tj:5,Hh:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};var Rj=1;function Sj(a){this.h=a}
function Tj(a){return new Sj({trackingParams:a})}
Sj.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Sj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Sj.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Uj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Vj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Wj(a){return O(Vj(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",Wj,void 0);function Xj(a){return(a=Wj(void 0===a?0:a))?new Sj({veType:a,youtubeData:void 0}):null}
function Yj(){var a=O("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=O(Uj(a));if(!b&&!O("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
A("yt_logging_screen.getCurrentCsn",W,void 0);function Zj(a,b,c){var d=Yj();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function ak(a){return Yj()[a]}
A("yt_logging_screen.getCttAuthInfo",ak,void 0);function bk(a,b,c,d){c=void 0===c?0:c;if(a!==O(Uj(c))||b!==O(Vj(c)))if(Zj(a,d,c),N(Uj(c),a),N(Vj(c),b),0==c||P("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Tg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Pj,clientScreenNonce:a},Xi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",bk,void 0);function ck(a){Hh.call(this,1,arguments);this.csn=a}
v(ck,Hh);var Qh=new Ih("screen-created",ck),dk=[],fk=ek,gk=0;function hk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Za(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(ib(e)||!e.trackingParams&&!e.veType)&&oj(Error("Child VE logged with no data"));d={L:ak(b),M:b};"UNDEFINED_CSN"==b?ik("visualElementAttached",c,d):a?Tg("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function jk(a,b){var c=P("use_default_events_client")?void 0:Xi,d={csn:a,ve:b.getAsJson(),eventType:1},e={L:ak(a),M:a};"UNDEFINED_CSN"==a?ik("visualElementShown",d,e):c?Tg("visualElementShown",d,c,e):V("visualElementShown",d,e)}
function kk(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={L:ak(b),M:b};"UNDEFINED_CSN"==b?ik("visualElementGestured",c,d):a?Tg("visualElementGestured",c,a,d):V("visualElementGestured",c,d)}
function ek(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ac(b)}
function ik(a,b,c){dk.push({payloadName:a,payload:b,options:c});gk||(gk=Rh())}
function Sh(a){if(dk){for(var b=u(dk),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Tg(c.payloadName,c.payload,null,c.options));dk.length=0}gk=0}
;function lk(a,b,c){hk(P("use_default_events_client")?void 0:Xi,a,b,[c])}
;var mk={Ub:29434,Wb:3611,Ee:3854,Uf:42993,Ci:4724,jj:96370,pb:27686,qb:85013,rb:23462,tb:42016,ub:62407,vb:26926,sb:43781,wb:51236,xb:79148,yb:50160,zb:77504,Lb:87907,Mb:18630,Nb:54445,Ob:80935,Pb:105675,Qb:37521,Rb:47786,Sb:98349,Tb:6827,Vb:7282,Zb:32276,Yb:76278,ac:93911,cc:106531,dc:27259,ec:27262,fc:27263,ic:21759,jc:27107,kc:62936,lc:49568,mc:38408,nc:80637,oc:68727,pc:68728,qc:80353,sc:80356,tc:74610,uc:45707,wc:83962,xc:83970,yc:46713,zc:89711,Ac:74612,Bc:93265,Cc:74611,Ec:113533,Fc:93252,
Gc:99357,Ic:94521,Jc:114252,Kc:113532,Lc:94522,Hc:94583,Mc:88E3,Nc:93253,Oc:93254,Pc:94387,Qc:94388,Rc:93255,Sc:97424,Dc:72502,Tc:110111,Uc:76019,Wc:117092,Xc:117093,Vc:89431,Yc:110466,Zc:77240,bd:60508,cd:105350,dd:73393,ed:113534,fd:92098,gd:84517,hd:83759,jd:80357,kd:86113,ld:72598,md:72733,nd:107349,od:117429,pd:117430,qd:117259,rd:97615,sd:31402,td:84774,ud:95117,vd:98930,wd:98931,xd:98932,yd:43347,zd:45474,Ad:100352,Bd:84758,Cd:98443,Dd:117985,Ed:74613,Fd:74614,Gd:64502,Hd:74615,Id:74616,Jd:74617,
Kd:77820,Ld:74618,Md:93278,Nd:93274,Od:93275,Pd:93276,Qd:22110,Rd:29433,Ud:82047,Vd:113550,Wd:75836,Xd:75837,Yd:42352,Zd:84512,ae:76065,be:75989,ce:16623,de:32594,ee:27240,ge:32633,he:74858,je:3945,ie:16989,ke:45520,le:25488,me:25492,ne:25494,oe:55760,pe:14057,qe:18451,re:57204,se:57203,te:17897,ue:57205,we:18198,xe:17898,ye:17909,ze:43980,Ae:46220,Be:11721,Ce:49954,De:96369,Fe:56251,Ge:25624,He:16906,Ie:99999,Je:68172,Ke:27068,Le:47973,Me:72773,Ne:26970,Oe:26971,Pe:96805,Qe:17752,Re:73233,Se:109512,
Te:22256,Ue:14115,Ve:22696,We:89278,Xe:89277,Ye:109513,Ze:43278,af:43459,bf:43464,cf:89279,df:43717,ef:55764,ff:22255,gf:89281,hf:40963,jf:43277,kf:43442,lf:91824,mf:96367,nf:36850,pf:72694,qf:37414,rf:36851,sf:73491,tf:54473,uf:43375,vf:46674,wf:32473,xf:72901,yf:72906,zf:50947,Af:50612,Bf:50613,Cf:50942,Df:84938,Ef:84943,Ff:84939,Gf:84941,Hf:84944,If:84940,Jf:84942,Kf:35585,Lf:51926,Mf:79983,Nf:63238,Of:18921,Pf:63241,Qf:57893,Rf:41182,Sf:33424,Tf:22207,Vf:36229,Wf:22206,Xf:22205,Yf:18993,Zf:19001,
ag:18990,cg:18991,dg:18997,eg:18725,fg:19003,gg:36874,hg:44763,jg:33427,kg:67793,lg:22182,mg:37091,ng:34650,og:50617,pg:47261,qg:22287,rg:25144,sg:97917,tg:62397,ug:36961,vg:108035,wg:27426,xg:27857,yg:27846,zg:27854,Ag:69692,Bg:61411,Cg:39299,Dg:38696,Eg:62520,Fg:36382,Gg:108701,Hg:50663,Ig:36387,Jg:14908,Kg:37533,Lg:105443,Mg:61635,Ng:62274,Og:65702,Pg:65703,Qg:65701,Rg:76256,Sg:37671,Tg:49953,Vg:36216,Wg:28237,Xg:39553,Yg:29222,Zg:26107,ah:38050,bh:26108,dh:26109,eh:26110,fh:66881,gh:28236,hh:14586,
ih:57929,jh:74723,kh:44098,lh:44099,mh:23528,nh:61699,oh:59149,ph:101951,qh:97346,rh:118051,sh:95102,uh:64882,vh:63595,wh:63349,xh:95101,yh:75240,zh:27039,Ah:68823,Bh:21537,Ch:83464,Dh:75707,Eh:83113,Fh:101952,Gh:101953,Ih:79610,Jh:24402,Kh:24400,Lh:32925,Mh:57173,Nh:64423,Oh:64424,Ph:33986,Qh:100828,Rh:21409,Sh:11070,Th:11074,Uh:17880,Vh:14001,Xh:30709,Yh:30707,Zh:30711,ai:30710,bi:30708,Wh:26984,ci:63648,di:63649,fi:51879,gi:111059,hi:5754,ii:20445,ji:110386,ki:113746,li:66557,mi:17310,ni:28631,
oi:21589,ri:68012,si:60480,ti:31571,vi:76980,wi:41577,xi:45469,yi:38669,zi:13768,Ai:13777,Bi:62985,Di:59369,Ei:43927,Fi:43928,Gi:12924,Hi:100355,Ji:56219,Ki:27669,Li:10337,Ii:47896,Mi:107598,Ni:96639,Oi:107536,Pi:96661,Qi:96658,Ri:116646,Si:96660,Ti:104443,Ui:96659,Vi:106442,Wi:63667,Xi:63668,Yi:63669,Zi:78314,aj:55761,bj:96368,cj:67374,dj:48992,ej:49956,fj:31961,gj:26388,hj:23811,ij:5E4,kj:47355,lj:47356,mj:37935,nj:45521,oj:21760,pj:83769,qj:49977,rj:49974,sj:93497,tj:93498,uj:34325,vj:115803,wj:100081,
xj:35309,yj:68314,zj:25602,Aj:100339,Bj:59018,Cj:18248,Dj:50625,Ej:9729,Fj:37168,Gj:37169,Hj:21667,Ij:16749,Jj:18635,Kj:39305,Lj:18046,Mj:53969,Nj:8213,Oj:93926,Pj:102852,Qj:110099,Rj:22678,Sj:69076,Uj:100856,Vj:17736,Wj:3832,Xj:55759,Yj:64031,Zj:93044,ak:93045,bk:34388,ck:17657,dk:17655,ek:39579,fk:39578,gk:77448,hk:8196,ik:11357,jk:69877,kk:8197,lk:82039};function nk(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||lb(b);this.assets=a.assets||{};this.attrs=a.attrs||lb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
nk.prototype.clone=function(){var a=new nk,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=lb(c):a[b]=c}return a};function ok(){L.call(this);this.h=[]}
v(ok,L);ok.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Ea)}L.prototype.A.call(this)};var pk=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function qk(a){a=a||"";if(window.spf){var b=a.match(pk);spf.style.load(a,b?b[1]:"",void 0)}else rk(a)}
function rk(a){var b=sk(a),c=document.getElementById(b),d=c&&tj(c,"loaded");d||c&&!d||(c=tk(a,b,function(){tj(c,"loaded")||(rj(c),vg(b),Q(Ra(wg,b),0))}))}
function tk(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=fd(a);d.rel="stylesheet";d.href=tb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sk(a){var b=Ic(document,"A");Rb(b,new I(a,Eb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function uk(a,b,c,d){L.call(this);var e=this;this.u=this.ba=a;this.H=b;this.B=!1;this.api={};this.Z=this.G=null;this.I=new M;Sc(this,Ra(Qc,this.I));this.m={};this.S=this.aa=this.l=this.ja=this.h=null;this.R=!1;this.o=this.F=null;this.ca={};this.Ba=["onReady"];this.ia=null;this.ra=NaN;this.X={};this.j=d;vk(this);this.da("WATCH_LATER_VIDEO_ADDED",this.Xa.bind(this));this.da("WATCH_LATER_VIDEO_REMOVED",this.Ya.bind(this));this.da("onAdAnnounce",this.Da.bind(this));this.Ca=new ok(this);Sc(this,Ra(Qc,
this.Ca));this.Y=0;c?this.Y=Q(function(){e.loadNewVideoConfig(c)},0):d&&(wk(this),xk(this))}
v(uk,L);m=uk.prototype;m.getId=function(){return this.H};
m.loadNewVideoConfig=function(a){if(!this.i){this.Y&&(cg(this.Y),this.Y=0);a instanceof nk||(a=new nk(a));this.ja=a;this.h=a.clone();wk(this);this.aa||(this.aa=yk(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=hd(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=hd(Number(a)||String(a));xk(this);this.B&&zk(this)}};
function wk(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.H,a.j?a.j.rootElementId=a.H:a.h.attrs.id=a.H);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
m.Ia=function(){return this.ja};
function zk(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function Ak(a){var b=!0,c=Bk(a);c&&a.h&&(a=Ck(a),b=tj(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function xk(a){if(!a.i&&!a.R){var b=Ak(a);if(b&&"html5"==(Bk(a)?"html5":null))a.S="html5",a.B||Dk(a);else if(Ek(a),a.S="html5",b&&a.o)a.ba.appendChild(a.o),Dk(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Fk(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.ba,e,a.j);Dk(a)};
a.R=!0;b?a.F():(xj(Ck(a),a.F),(b=a.j?a.j.cssUrl:a.h.assets.css)&&qk(b),Gk(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function Bk(a){var b=Ec(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function Dk(a){if(!a.i){var b=Bk(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.R=!1,!Fk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||Hk(a)):a.ra=Q(function(){Dk(a)},50)}}
function Hk(a){vk(a);a.B=!0;var b=Bk(a);b.addEventListener&&(a.G=Ik(a,b,"addEventListener"));b.removeEventListener&&(a.Z=Ik(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Ik(a,b,e))}for(var f in a.m)a.G(f,a.m[f]);zk(a);a.aa&&a.aa(a.api);a.I.O("onReady",a.api)}
function Ik(a,b,c){var d=b[c];return function(){try{return a.ia=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ia=e,Of(e))}}}
function vk(a){a.B=!1;if(a.Z)for(var b in a.m)a.Z(b,a.m[b]);for(var c in a.X)cg(parseInt(c,10));a.X={};a.G=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.da.bind(a);a.api.removeEventListener=a.eb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ja.bind(a);a.api.getPlayerType=a.Ka.bind(a);a.api.getCurrentVideoConfig=a.Ia.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Va.bind(a)}
m.Va=function(){return this.B};
m.da=function(a,b){var c=this,d=yk(this,b);if(d){if(!(0<=Xa(this.Ba,a)||this.m[a])){var e=Jk(this,a);this.G&&this.G(a,e)}this.I.subscribe(a,d);"onReady"==a&&this.B&&Q(function(){d(c.api)},0)}};
m.eb=function(a,b){if(!this.i){var c=yk(this,b);c&&qf(this.I,a,c)}};
function yk(a,b){var c=b;if("string"==typeof b){if(a.ca[b])return a.ca[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.ca[b]=c}return c?c:null}
function Jk(a,b){var c="ytPlayer"+b+a.H;a.m[b]=c;y[c]=function(d){var e=Q(function(){if(!a.i){a.I.O(b,d);var f=a.X,g=String(e);g in f&&delete f[g]}},0);
jb(a.X,String(e))};
return c}
m.Da=function(a){vg("a11y-announce",a)};
m.Xa=function(a){vg("WATCH_LATER_VIDEO_ADDED",a)};
m.Ya=function(a){vg("WATCH_LATER_VIDEO_REMOVED",a)};
m.Ka=function(){return this.S||(Bk(this)?"html5":null)};
m.Ja=function(){return this.ia};
function Ek(a){a.cancel();vk(a);a.S=null;a.h&&(a.h.loaded=!1);var b=Bk(a);b&&(Ak(a)||!Gk(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.ba;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.F&&Dj(Ck(this),this.F);cg(this.ra);this.R=!1};
m.A=function(){Ek(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){Nf(b)}this.ca=null;for(var a in this.m)y[this.m[a]]=null;this.ja=this.h=this.api=null;delete this.ba;delete this.u;L.prototype.A.call(this)};
function Gk(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Ck(a){return a.j?a.j.jsUrl:a.h.assets.js}
function Fk(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==Zg(c||"","&")[b]}
;var Kk={},Lk="player_uid_"+(1E9*Math.random()>>>0);
function Mk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Ec(d):e=d;d=e;e=Lk+"_"+Ma(d);var f=Kk[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new uk(d,e,a,b);Kk[e]=f;vg("player-added",f.api);Sc(f,Ra(Nk,f));return f.api}
function Nk(a){delete Kk[a.getId()]}
;function Ok(a){a=void 0===a?!1:a;L.call(this);this.h=new M(a);Sc(this,Ra(Qc,this.h))}
G(Ok,L);Ok.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
Ok.prototype.m=function(a,b){this.i||this.h.O.apply(this.h,arguments)};function Pk(a,b,c){Ok.call(this);this.j=a;this.l=b;this.o=c}
v(Pk,Ok);function Qk(a,b,c){if(!a.i){var d=a.j;d.i||a.l!=d.h||(a={id:a.o,command:b},c&&(a.data=c),d.h.postMessage(Re(a),d.l))}}
Pk.prototype.A=function(){this.l=this.j=null;Ok.prototype.A.call(this)};function Rk(a){L.call(this);this.h=a;this.h.subscribe("command",this.za,this);this.j={};this.m=!1}
v(Rk,L);m=Rk.prototype;m.start=function(){this.m||this.i||(this.m=!0,Qk(this.h,"RECEIVING"))};
m.za=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=E(this.gb,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Sk(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=Tk(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=Uk(a,c))&&this.m&&!this.i&&Qk(this.h,a,c))}}};
m.gb=function(a,b){this.m&&!this.i&&Qk(this.h,a,this.la(a,b))};
m.la=function(a,b){if(null!=b)return{value:b}};
function Sk(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
m.A=function(){var a=this.h;a.i||qf(a.h,"command",this.za,this);this.h=null;for(var b in this.j)Sk(this,b);L.prototype.A.call(this)};function Vk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Xk(a)}
function Xk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Yk(a,b,c,d){if(C(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Zk(a,b){Rk.call(this,b);this.l=a;this.start()}
v(Zk,Rk);Zk.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Zk.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function Tk(a,b){switch(a){case "loadVideoById":return b=Xk(b),[b];case "cueVideoById":return b=Xk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Yk(b),[b];case "cuePlaylist":return b=Yk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Uk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Zk.prototype.la=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Rk.prototype.la.call(this,a,b)};
Zk.prototype.A=function(){Rk.prototype.A.call(this);delete this.l};function $k(a,b,c){L.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Xa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v($k,L);$k.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Of(e)}}};
$k.prototype.A=function(){window.removeEventListener("message",this.u);L.prototype.A.call(this)};function al(){var a=this.i=new $k(!!O("WIDGET_ID_ENFORCE")),b=E(this.cb,this);a.m=b;a.o=null;this.i.channel="widget";if(a=O("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
m=al.prototype;m.cb=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,bl(this,a)),this.m[a]=!0)):this.ya(a,b,c)};
m.ya=function(){};
function bl(a,b){return E(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.Ha=function(){this.o=!0;this.sendMessage("initialDelivery",this.ma());this.sendMessage("onReady");H(this.l,this.Aa,this);this.l=[]};
m.ma=function(){return null};
function cl(a,b){a.sendMessage("infoDelivery",b)}
m.Aa=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.i=null};function dl(a){al.call(this);this.h=a;this.j=[];this.addEventListener("onReady",E(this.Za,this));this.addEventListener("onVideoProgress",E(this.kb,this));this.addEventListener("onVolumeChange",E(this.lb,this));this.addEventListener("onApiChange",E(this.fb,this));this.addEventListener("onPlaybackQualityChange",E(this.hb,this));this.addEventListener("onPlaybackRateChange",E(this.ib,this));this.addEventListener("onStateChange",E(this.jb,this));this.addEventListener("onWebglSettingsChanged",E(this.mb,
this))}
v(dl,al);m=dl.prototype;m.ya=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Vk(a)){var d=b;if(C(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Xk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Wk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Yk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Vk(a)&&cl(this,this.ma())}};
m.Za=function(){var a=E(this.Ha,this);this.i.h=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ma=function(){if(!this.h)return null;var a=this.h.getApiInterface();bb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=F()/1E3;return b};
m.jb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());cl(this,a)};
m.hb=function(a){cl(this,{playbackQuality:a})};
m.ib=function(a){cl(this,{playbackRate:a})};
m.fb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.lb=function(){cl(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.kb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());cl(this,a)};
m.mb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};cl(this,a)};
m.dispose=function(){al.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function el(a,b,c){L.call(this);this.h=a;this.l=c;this.m=$f(window,"message",E(this.o,this));this.j=new Pk(this,a,b);Sc(this,Ra(Qc,this.j))}
v(el,L);el.prototype.o=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.m("command",b.command,b.data,a.origin))}};
el.prototype.A=function(){ag(this.m);this.h=null;L.prototype.A.call(this)};function fl(){var a=lb(gl),b;return ef(new Ye(function(c,d){a.onSuccess=function(e){ih(e)?c(e):d(new hl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new hl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new hl("Request timed out","net.timeout",e))};
b=rh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ff&&b.abort();
return cf(c)})}
function hl(a,b,c){Ua.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(hl,Ua);function il(){this.i=0;this.h=null}
il.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Xe(a)?a:jl(a)):2===this.i&&b?(a=b.call(c,this.h),Xe(a)?a:kl(a)):this};
il.prototype.getValue=function(){return this.h};
il.prototype.$goog_Thenable=!0;function kl(a){var b=new il;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function jl(a){var b=new il;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function ll(a){Ua.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ml;this.isTimeout=a instanceof hl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ff}
v(ll,Ua);ll.prototype.name="BiscottiError";function ml(){Ua.call(this,"Biscotti ID is missing from server")}
v(ml,Ua);ml.prototype.name="BiscottiMissingError";var gl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},nl=null;
function Vg(){if(P("disable_biscotti_fetch_on_html5_clients"))return cf(Error("Fetching biscotti ID is disabled."));if(P("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!nd.get("CONSENT","").startsWith("YES+"))return cf(Error("User has not consented - not fetching biscotti id."));if("1"===fb(Jf(),"args","privembed"))return cf(Error("Biscotti ID is not available in private embed mode"));nl||(nl=ef(fl().then(ol),function(a){return pl(2,a)}));
return nl}
function ol(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ml;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ml;a=a.id;Wg(a);nl=jl(a);ql(18E5,2);return a}
function pl(a,b){var c=new ll(b);Wg("");nl=kl(c);0<a&&ql(12E4,a-1);throw c;}
function ql(a,b){Q(function(){ef(fl().then(ol,function(c){return pl(b,c)}),Ia)},a)}
function rl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Vg()}catch(b){return cf(b)}}
;function sl(a){if("1"!==fb(Jf(),"args","privembed")){a&&Ug();try{rl().then(function(){},function(){}),Q(sl,18E5)}catch(b){Nf(b)}}}
;var X=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",X,void 0);function tl(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=nd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
m=tl.prototype;m.get=function(a,b){ul(a);vl(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){ul(a);vl(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
m.remove=function(a){ul(a);vl(a);delete X[a]};
m.save=function(){var a=this.h,b=[],c;for(c in X)b.push(c+"="+encodeURIComponent(String(X[c])));Ah(a,b.join("&"),63072E3,this.i)};
m.clear=function(){for(var a in X)delete X[a]};
function vl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ul(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function wl(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(tl);function xl(){this.i=new Set;this.h=new Set;this.j=new Map}
xl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ja(xl);function yl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!zl(a)||c.some(function(e){return!zl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Al(a,d.value);return a}
function Al(a,b){for(var c in b)if(zl(b[c])){if(c in a&&!zl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Al(a[c],b[c])}else if(Bl(b[c])){if(c in a&&!Bl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Cl(a[c],b[c])}else a[c]=b[c];return a}
function Cl(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,zl(d)?a.push(Al({},d)):Bl(d)?a.push(Cl([],d)):a.push(d);return a}
function zl(a){return"object"===typeof a&&!Array.isArray(a)}
function Bl(a){return"object"===typeof a&&Array.isArray(a)}
;var Dl={},El=0;
function Fl(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Vh("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.U?a.T():String(a),Ib.test(a)?a=new I(a,Eb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new I(a,Eb):null));a=Fb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.na&&(f=a.ka());a=Qb(vb(b&&a.U?a.T():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.h:(Ka(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Re(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)sh(a,b,"POST",e,d);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)sh(a,b,"GET","",d);else{b:{try{var g=new Va({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(z){}f=!1}f?Gl(a)?(b&&b(),f=!0):f=!1:f=!1;f||Hl(a,b)}}
function Gl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Hl(a,b){var c=new Image,d=""+El++;Dl[d]=c;c.onload=c.onerror=function(){b&&Dl[d]&&b();delete Dl[d]};
c.src=a}
;function Il(a,b){Hh.call(this,1,arguments)}
v(Il,Hh);function Jl(a,b){Hh.call(this,1,arguments)}
v(Jl,Hh);var Kl=new Ih("aft-recorded",Il),Ll=new Ih("timing-sent",Jl);var Ml=window;function Nl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Ol=Ml.performance||Ml.mozPerformance||Ml.msPerformance||Ml.webkitPerformance||new Nl;var Pl=!1;E(Ol.clearResourceTimings||Ol.webkitClearResourceTimings||Ol.mozClearResourceTimings||Ol.msClearResourceTimings||Ol.oClearResourceTimings||Ia,Ol);function Ql(a){var b=Rl(a);if(b.aft)return b.aft;a=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Sl(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Sa("ytcsi."+(a||"")+"data_",b));return b}
function Tl(a){a=Sl(a);a.info||(a.info={});return a.info}
function Rl(a){a=Sl(a);a.tick||(a.tick={});return a.tick}
function Ul(a){var b=Sl(a).nonce;b||(b=Oj(),Sl(a).nonce=b);return b}
function Vl(a){var b=Rl(a||""),c=Ql(a);c&&!Pl&&(Nh(Kl,new Il(Math.round(c-b._start),a)),Pl=!0)}
;function Wl(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Xl(a){a=a||"";var b=B("ytcsi.reference");b||(Wl(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Wl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Yl=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Yl,void 0);function Zl(){this.h=0}
function $l(){Zl.h||(Zl.h=new Zl);return Zl.h}
Zl.prototype.tick=function(a,b,c){am(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Zl.prototype.info=function(a,b){var c=Object.keys(a).join("");am(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,V("latencyActionInfo",c))};
Zl.prototype.span=function(a,b){var c=Object.keys(a).join("");am(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a))};
function am(a,b){Yl[b]=Yl[b]||{count:0};var c=Yl[b];c.count++;c.time=R();a.h||(a.h=gg(function(){var d=R(),e;for(e in Yl)Yl[e]&&6E4<d-Yl[e].time&&delete Yl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||oj(c)),!0):!1}
;var Y={},bm=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid=
"requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),cm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),dm={},em=(dm.ccs="CANARY_STATE_",dm.mver="MEASUREMENT_VERSION_",
dm.pis="PLAYER_INITIALIZED_STATE_",dm.yt_pt="LATENCY_PLAYER_",dm.pa="LATENCY_ACTION_",dm.yt_vst="VIDEO_STREAM_TYPE_",dm),fm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function gm(a){return!!O("FORCE_CSI_ON_GEL",!1)||P("csi_on_gel")||!!Sl(a).useGel}
function hm(a){a=Sl(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function im(a,b,c){if(null!==b)if(Tl(c)[a]=b,gm(c)){var d=b;b=hm(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in bm){b=bm[a];0<=Xa(cm,b)&&(d=!!d);a in em&&"string"===typeof d&&(d=em[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=yl({},e)}else 0<=Xa(fm,a)||oj(new S("Unknown label logged with GEL CSI",
a)),f=void 0;f&&gm(c)&&(b=Xl(c||""),yl(b.info,f),b=hm(c),b.gelInfos||(b.gelInfos={}),yl(b.gelInfos,f),c=Ul(c),$l().info(f,c))}else Xl(c||"").info[a]=b}
function jm(a,b,c){var d=Rl(c);if(P("use_first_tick")&&km(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Ol.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Ol.mark(e))}e=b||R();d[a]=e;e=hm(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||R();if(gm(c)){Xl(c||"").tick[a]=b||R();e=Ul(c);if("_start"===a){var f=$l();am(f,"baseline_"+e)||V("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else $l().tick(a,e,b);Vl(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=O((c||"")+"TIMING_ACTION",void 0),e=Rl(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&km("_start")&&Ql(c)))if(Vl(c),c)lm(c);else{f=!0;var g=O("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&lm(c)}Xl(c||"").tick[a]=b||R()}return d[a]}
function km(a,b){var c=Rl(b);return a in c}
function lm(a){if(!gm(a)){var b=Rl(a),c=Tl(a),d=b._start,e=O("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:O((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Ql(a);var h=Rl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Tl(a).yt_pvis&&"youtube"===e&&(im("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=R();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;P("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Sa("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(b||P("always_send_csi_204_with_beacon"))){var r=void 0===r?"":r;Gl(f,r)||Fl(f,void 0,void 0,void 0,r)}else Fl(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);Nh(Ll,new Jl(n.aft+(Number(g)||0),a))}}
var mm=window;mm.ytcsi&&(mm.ytcsi.info=im,mm.ytcsi.tick=jm);function nm(){this.l=[];this.m=[];this.h=[];this.i=!1;this.o=new Map}
function om(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i&&a.j&&a.j();var g=W(c),h=Xj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&hk(a.client,g,h,[Tj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&hk(a.client,g,h,[Tj(d.playerResponse.trackingParams)]))})}
function pm(a,b,c,d){if(a.i&&!d)a.l.push([b,c]);else{var e=W(d);c=c||Xj(d);e&&c&&hk(a.client,e,c,[b])}}
nm.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;kk(this.client,b,Tj(a.clickTrackingParams));return!0};
function qm(a,b,c){c=void 0===c?{}:c;a.i=!0;a.j=function(){rm(a,b,c);var f=Xj(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,pm(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){h=g.value;g=h[0];var k=h[1];if(a.i)a.m.push([g,k]);else{var l=Tj(g);if(h=W())g=a.client,k={csn:h,ve:l.getAsJson(),clientData:k},l={L:ak(h),M:h},"UNDEFINED_CSN"==h?ik("visualElementStateChanged",k,l):g?Tg("visualElementStateChanged",k,g,l):V("visualElementStateChanged",k,l)}}}};
W(c.layer)||a.j();if(c.ua)for(var d=u(c.ua),e=d.next();!e.done;e=d.next())om(a,e.value,c.layer);else pj(Error("Delayed screen needs a data promise."))}
function rm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ab?c.ab:c.layer;var e=W(d);d=Xj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.ta,l=c.L,n=fk(),p={csn:n,pageVe:(new Sj({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&oj(new S("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={L:l,M:n};g?Tg("screenCreated",p,g,k):V("screenCreated",p,k);Nh(Qh,new ck(n));var q=n}catch(r){qj(r,{wk:b,rootVe:d,parentVisualElement:void 0,rk:e,vk:f,ta:c.ta});pj(r);return}bk(q,b,c.layer,c.L);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=P("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Qj));for(f=b.next();!f.done;f=b.next())if(W(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={L:ak(e),M:e,
Ga:f},"UNDEFINED_CSN"==e?ik("visualElementHidden",d,f):b?Tg("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");im("csn",q);xl.getInstance().clear();d=Xj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&jk(q,d);a.i=!1;a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value===c.layer&&d&&pm(a,b,d,c.layer)}
;var Z=null,sm=null,tm=null,um={};function vm(a){var b=a.id;a=a.ve_type;var c=Rj++;a=new Sj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});um[b]=a;b=W();c=Xj();b&&c&&lk(b,c,a)}
function wm(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function xm(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(bk(b,a),a=Xj()))for(var c in um){var d=um[c];d&&lk(b,a,d)}}
function ym(a){um[a.id]=Tj(a.tracking_params)}
function zm(a){var b=W();a=um[a.id];b&&a&&kk(P("use_default_events_client")?void 0:Xi,b,a)}
function Am(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=um[a[c]];d&&jk(b,d)}}
;function Bm(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Xa(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",Ah(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",Ah(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+n;a=a instanceof I?a:Jb(a);c.href=Fb(a)}return!0}
;A("yt.setConfig",N,void 0);A("yt.config.set",N,void 0);A("yt.setMsg",Qf,void 0);A("yt.msgs.set",Qf,void 0);A("yt.logging.errors.log",pj,void 0);
A("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);if(!a){var b=O("PLAYER_VARS",void 0);b&&(a={args:b})}sl(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);if((c=O("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){if(!c.serializedForcedExperimentIds){var d=
window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=ch(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=Mk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=Mk(a);Z.addEventListener("onScreenChanged",xm);Z.addEventListener("onLogClientVeCreated",vm);Z.addEventListener("onLogServerVeCreated",ym);Z.addEventListener("onLogVeClicked",zm);Z.addEventListener("onLogVesShown",Am);Z.addEventListener("onVideoDataChange",
wm);a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?tm=new dl(Z):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(sm=new el(window.parent,a,b),tm=new Zk(Z,sm.j));Gj()},void 0);
var Cm=Mf(function(){jm("ol");var a=tl.getInstance(),b=!!((wl("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Pd(document.body,"exp-invert-logo"))if(c&&!Pd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Pd(d,"inverted-hdpi")){var e=Nd(d);Od(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Pd(document.body,"inverted-hdpi")&&Qd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=wl(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());nm.h||(nm.h=new nm);a=nm.h;c=16623;var f=void 0===f?{}:f;Object.values(mk).includes(c)||(oj(new S("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.ua?qm(a,c,f):rm(a,c,f)}),Dm=Mf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
O("PL_ATT")&&Kj.dispose();for(var a=0,b=Ej.length;a<b;a++)ig(Ej[a]);Ej.length=0;Cj("//static.doubleclick.net/instream/ad_status.js");Fj=!1;N("DCLKSTAT",0);Rc(tm,sm);Z&&(Z.removeEventListener("onScreenChanged",xm),Z.removeEventListener("onLogClientVeCreated",vm),Z.removeEventListener("onLogServerVeCreated",ym),Z.removeEventListener("onLogVeClicked",zm),Z.removeEventListener("onLogVesShown",Am),Z.removeEventListener("onVideoDataChange",wm),Z.destroy());um={}});
window.addEventListener?(window.addEventListener("load",Cm),window.addEventListener("unload",Dm)):window.attachEvent&&(window.attachEvent("onload",Cm),window.attachEvent("onunload",Dm));Sa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Lj);Sa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Mj);Sa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Hj);
Sa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Bm);Sa("yt.util.activity.init",B("yt.util.activity.init")||kg);Sa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||ng);Sa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||lg);}).call(this);
