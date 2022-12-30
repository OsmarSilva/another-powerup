/*! For license information please see powerup-443-52dda86131978157528e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[443],{98443:(t,r,e)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function a(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=s(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}function s(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,r):void 0}}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function l(){l=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new E(n||[]);return o(a,"_invoke",{value:j(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function y(){}function v(){}function d(){}var m={};s(m,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==r&&e.call(b,a)&&(m=b);var w=d.prototype=y.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,r){function i(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){i(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function j(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=p(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=p(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=d,o(w,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(O.prototype),s(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new O(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function p(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function h(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}function y(t,r,e,n){return v.apply(this,arguments)}function v(){return(v=h(l().mark((function t(r,e,n,o){var i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(r);case 2:return(i=t.sent).push(e),t.next=6,r.set(o||"card","shared","notes",JSON.stringify(i));case 6:if(!n){t.next=9;break}return t.next=9,r.closePopup();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,r){return m.apply(this,arguments)}function m(){return(m=h(l().mark((function t(r,e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,r.get(e||"card","shared","notes","[]");case 3:return t.t1=t.sent,t.abrupt("return",t.t0.parse.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=h(l().mark((function t(r){var e,n,o,a,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.cards("all");case 2:e=t.sent,n=[],o=u(e),t.prev=5,s=l().mark((function t(){var e,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.value,t.next=3,d(r,e.id);case 3:o=t.sent,n.push.apply(n,c(o.map((function(t){return i(i({},t),{},{card:e})}))));case 5:case"end":return t.stop()}}),t)})),o.s();case 8:if((a=o.n()).done){t.next=12;break}return t.delegateYield(s(),"t0",10);case 10:t.next=8;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(5),o.e(t.t1);case 17:return t.prev=17,o.f(),t.finish(17);case 20:return t.abrupt("return",n);case 21:case"end":return t.stop()}}),t,null,[[5,14,17,20]])})))).apply(this,arguments)}function w(t,r,e){return x.apply(this,arguments)}function x(){return(x=h(l().mark((function t(r,e,n){var o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(r);case 2:return(o=t.sent).splice(e,1),t.abrupt("return",r.set(n||"card","shared","notes",JSON.stringify(o)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,r){return j.apply(this,arguments)}function j(){return(j=h(l().mark((function t(r,e){var n,o,i,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.cards("all");case 2:n=t.sent,o=u(n),t.prev=4,o.s();case 6:if((i=o.n()).done){t.next=12;break}return a=i.value,t.next=10,r.set(a.id,e,"notes","[]");case 10:t.next=6;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),o.e(t.t0);case 17:return t.prev=17,o.f(),t.finish(17);case 20:return t.next=22,r.alert({message:"Deleted Notes!",display:"info",duration:5});case 22:case"end":return t.stop()}}),t,null,[[4,14,17,20]])})))).apply(this,arguments)}e.d(r,{DI:()=>d,ZM:()=>g,kT:()=>y,lj:()=>w,p6:()=>O}),e(41539),e(88674),e(78783),e(66992),e(33948),e(21249),e(40561),e(69070),e(82526),e(41817),e(32165),e(72443),e(39341),e(73706),e(10408),e(78011),e(30489),e(89554),e(54747),e(68309),e(68304),e(65069),e(47042),e(91038),e(74916),e(79753),e(96649),e(96078),e(9653),e(47941),e(57327),e(38880),e(49337),e(33321)}}]);