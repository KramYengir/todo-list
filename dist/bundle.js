(()=>{"use strict";var e={144:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'*{box-sizing:border-box;margin:0;text-decoration:none;list-style-type:none}body{height:100vh}#container{height:100%;display:grid;grid-template:.1fr 1fr .05fr/.3fr 1fr}header{grid-column:span 2;background-color:#38bdc7;display:flex;justify-content:space-between;align-items:center}header .logo-container{margin-inline:auto;font-size:2rem;color:#fff}header span{color:#fff}nav{display:flex;flex-direction:column;justify-content:space-between;background-color:#60cbd2;padding-top:2rem}nav li{margin-block:1rem;width:100%;transition:all .5s;cursor:pointer}nav li a{color:#fff;font-size:1.5rem}nav li a.active{color:#c74238}nav li:has(a.active){background-color:#fff}nav #project-links-display{display:none}nav #project-links-display.active{display:flex;flex-direction:column;padding-left:1rem}nav #project-links-display.active .add-project-input{display:flex;padding-right:5px}nav #project-links-display.active .add-project-input input{width:10rem;height:1.5rem;border:none;border-radius:5px}nav #project-links-display.active .add-project-input #new-project-btn{color:#fff;border:none;border-radius:5px;background-color:#38bdc7}nav #project-links-display.active .project-link{display:flex;justify-content:space-between;align-items:center;padding-right:5px;margin-block:0}nav #project-links-display.active .project-link .delete-project-btn{display:none;width:1.2rem;height:1.2rem;border:none;border-radius:10px;color:#c74238;background-color:#38bdc7}nav #project-links-display.active .project-link:hover .delete-project-btn,nav #project-links-display.active .project-link:focus .delete-project-btn{display:block}nav #new-todo-btn{width:3rem;height:3rem;margin-inline:auto;margin-bottom:3rem;border:none;border-radius:1000px;background-color:#f5f5f5;box-shadow:1px 3px 4px #38bdc7}nav #new-todo-btn:before{content:"+";font-size:1.5rem;color:#38bdc7}nav #new-todo-btn:hover{transform:scale(1.05)}main{background-color:#f5f5f5}footer{grid-column:span 2;background-color:#38bdc7}#modal-container{position:absolute;width:100vw;height:100vh;display:none;align-items:center;justify-content:center;background-color:rgba(7,6,6,.775)}#modal-container .modal{padding:3rem;background-color:#38bdc7}#modal-container .modal form{display:flex;flex-direction:column;gap:2rem}#modal-container .modal form .input-group{display:flex;flex-direction:column;gap:.2rem}#modal-container .modal form .input-group label{color:#c74238}',""]);const d=i},36:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'.todo-container{display:flex;padding:.5rem .6rem;margin:.4rem;border:1px dashed gray;border-radius:10px;background-color:azure}.todo-container .checkbox{width:2rem}.todo-container .task{margin-right:auto}.todo-container .date{margin-right:auto}.todo-container .date::before{content:"Due: ";color:gray;font-size:.9rem;text-transform:uppercase}.todo-container .priority{margin-right:1rem}.todo-container button{width:2rem;margin-right:.5rem}',""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var s=e[d],u=r.base?s[0]+r.base:s[0],c=o[u]||0,l="".concat(u," ").concat(c);o[u]=c+1;var m=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var h=a(f,r);r.byIndex=d,t.splice(d,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=n(o[i]);t[d].references--}for(var s=r(e,a),u=0;u<o.length;u++){var c=n(o[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),d=n(565),s=n.n(d),u=n(216),c=n.n(u),l=n(589),m=n.n(l),f=n(144),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=n(36),v={};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function y(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===p(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=c(),t()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const T=(()=>{const e=[],t=e=>{const t=new Date((new Date).toJSON().slice(0,10)),n=function(e,t){if(w(2,arguments),!t||"object"!==p(t))return new Date(NaN);var n=t.years?b(t.years):0,r=t.months?b(t.months):0,a=t.weeks?b(t.weeks):0,o=t.days?b(t.days):0,i=t.hours?b(t.hours):0,d=t.minutes?b(t.minutes):0,s=t.seconds?b(t.seconds):0,u=y(e),c=r||n?function(e,t){w(2,arguments);var n=y(e),r=b(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),o=new Date(n.getTime());return o.setMonth(n.getMonth()+r+1,0),a>=o.getDate()?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}(u,r+12*n):u,l=o||a?function(e,t){w(2,arguments);var n=y(e),r=b(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(c,o+7*a):c,m=1e3*(s+60*(d+60*i));return new Date(l.getTime()+m)}(t,{weeks:1});return function(e,t){w(2,arguments);var n=y(e).getTime(),r=y(t.start).getTime(),a=y(t.end).getTime();if(!(r<=a))throw new RangeError("Invalid interval");return n>=r&&n<=a}(new Date(e),{start:t,end:n})};return{createTodo:(t,n,r,a)=>{const o={id:`${performance.now()}${Math.random().toString().slice(5)}`.replace(".",""),task:t,date:n,project:r,priority:a,completed:!1};return e.push(o),console.log(o),o},deleteTodo:t=>{const n=e.findIndex((e=>e.id===t));-1!==n&&todos.splice(n,1)},toggleCompleted:t=>{const n=e.find((e=>e.id===t));n&&(n.completed=!n.completed)},getTodaysTodos:()=>{const t=(new Date).toJSON().slice(0,10),n=e.filter((e=>{if(e.date===t)return e}));return n},getWeeksTodos:()=>{const n=e.filter((e=>{if(t(e.date))return e}));return n},getAllTodos:()=>e,getProjectTodos:t=>{const n=e.filter((e=>{if(e.project===t)return e}));return n},editTodo:(t,n,r,a,o)=>{const i=e.find((e=>e.id===t));i&&(i.task=n,i.date=r,i.project=a,i.priority=o)}}})(),k=T;function x(e){w(1,arguments);var t=y(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function C(e){w(1,arguments);var t=y(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=x(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=x(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var M={};function E(){return M}function D(e,t){var n,r,a,o,i,d,s,u;w(1,arguments);var c=E(),l=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=y(e),f=m.getUTCDay(),h=(f<l?7:0)+f-l;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function S(e,t){var n,r,a,o,i,d,s,u;w(1,arguments);var c=y(e),l=c.getUTCFullYear(),m=E(),f=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(s=m.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,f),h.setUTCHours(0,0,0,0);var g=D(h,t),v=new Date(0);v.setUTCFullYear(l,0,f),v.setUTCHours(0,0,0,0);var p=D(v,t);return c.getTime()>=g.getTime()?l+1:c.getTime()>=p.getTime()?l:l-1}function j(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const P=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return j("yy"===t?r%100:r,t.length)},U=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):j(n+1,2)},N=function(e,t){return j(e.getUTCDate(),t.length)},W=function(e,t){return j(e.getUTCHours()%12||12,t.length)},L=function(e,t){return j(e.getUTCHours(),t.length)},O=function(e,t){return j(e.getUTCMinutes(),t.length)},Y=function(e,t){return j(e.getUTCSeconds(),t.length)},A=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return j(Math.floor(r*Math.pow(10,n-3)),t.length)};var q={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P(e,t)},Y:function(e,t,n,r){var a=S(e,r),o=a>0?a:1-a;return"YY"===t?j(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):j(o,t.length)},R:function(e,t){return j(C(e),t.length)},u:function(e,t){return j(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return j(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return U(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){w(1,arguments);var n=y(e),r=D(n,t).getTime()-function(e,t){var n,r,a,o,i,d,s,u;w(1,arguments);var c=E(),l=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1),m=S(e,t),f=new Date(0);return f.setUTCFullYear(m,0,l),f.setUTCHours(0,0,0,0),D(f,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):j(a,t.length)},I:function(e,t,n){var r=function(e){w(1,arguments);var t=y(e),n=x(t).getTime()-function(e){w(1,arguments);var t=C(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),x(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):j(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):N(e,t)},D:function(e,t,n){var r=function(e){w(1,arguments);var t=y(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):j(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return j(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return j(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return j(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return W(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):L(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):O(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Y(e,t)},S:function(e,t){return A(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return B(a);case"XXXX":case"XX":return F(a);default:return F(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return B(a);case"xxxx":case"xx":return F(a);default:return F(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+I(a,":");default:return"GMT"+F(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+I(a,":");default:return"GMT"+F(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return j(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return j((r._originalDate||e).getTime(),t.length)}};function I(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+j(o,2)}function B(e,t){return e%60==0?(e>0?"-":"+")+j(Math.abs(e)/60,2):F(e,t)}function F(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+j(Math.floor(a/60),2)+n+j(a%60,2)}const z=q;var H=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},Q=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const G={p:Q,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(a,t)).replace("{{time}}",Q(o,t))}};var R=["D","DD"],X=["YY","YYYY"];function J(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Z={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function _(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const $={date:_({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:_({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:_({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var V={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function K(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const ee={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:K({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:K({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:K({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:K({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:K({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function te(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,d=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(s):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(s);return i=e.valueCallback?e.valueCallback(u):u,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(d.length)}}}var ne,re={ordinalNumber:(ne={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(ne.matchPattern);if(!n)return null;var r=n[0],a=e.match(ne.parsePattern);if(!a)return null;var o=ne.valueCallback?ne.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:te({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:te({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:te({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:te({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:te({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ae={code:"en-US",formatDistance:function(e,t,n){var r,a=Z[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:$,formatRelative:function(e,t,n,r){return V[e]},localize:ee,match:re,options:{weekStartsOn:0,firstWeekContainsDate:1}};var oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,de=/^'([^]*?)'?$/,se=/''/g,ue=/[a-zA-Z]/;function ce(e,t,n){var r,a,o,i,d,s,u,c,l,m,f,h,g,v,T,k,x,C;w(2,arguments);var M=String(t),D=E(),S=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:ae,j=b(null!==(o=null!==(i=null!==(d=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(u=n.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==d?d:D.firstWeekContainsDate)&&void 0!==i?i:null===(l=D.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=b(null!==(f=null!==(h=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(T=n.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==g?g:D.weekStartsOn)&&void 0!==h?h:null===(x=D.locale)||void 0===x||null===(C=x.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==f?f:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var U=y(e);if(!function(e){if(w(1,arguments),!function(e){return w(1,arguments),e instanceof Date||"object"===p(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=y(e);return!isNaN(Number(t))}(U))throw new RangeError("Invalid time value");var N=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(U),W=function(e,t){return w(2,arguments),function(e,t){w(2,arguments);var n=y(e).getTime(),r=b(t);return new Date(n+r)}(e,-b(t))}(U,N),L={firstWeekContainsDate:j,weekStartsOn:P,locale:S,_originalDate:U};return M.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,G[t])(e,S.formatLong):e})).join("").match(oe).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(de))?o[1].replace(se,"'"):a;var d,s=z[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(d=r,-1===X.indexOf(d))||J(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==R.indexOf(e)}(r)||J(r,t,String(e)),s(W,r,S.localize,L);if(i.match(ue))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const le=(()=>{const e=e=>{const n=document.createElement("div");n.classList.add("todo-container");const r=document.createElement("input");r.type="checkbox",r.name="completed-checkbox",r.value="false",r.classList.add("checkbox");const a=document.createElement("div");a.textContent=e.task,a.classList.add("task");const o=document.createElement("div");let i=ce(new Date(e.date),"dd-MMM-yyyy");o.textContent=i,o.classList.add("date");const d=document.createElement("div");d.textContent=e.project,d.classList.add("project");const s=document.createElement("button");s.classList.add("edit-button"),s.addEventListener("click",(()=>{ge.openEditTodoModal(e)}));const u=document.createElement("button");return u.classList.add("delete-button"),t(e,n),n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(d),n.appendChild(s),n.appendChild(u),n},t=(e,t)=>{"low"==e.priority?t.style.border="1px solid green":"medium"==e.priority?t.style.border="1px solid orange":t.style.border="1px solid red"};return{buildTodo:e,getArrayOfTodoElements:t=>{const n=[];return t.forEach((t=>{n.push(e(t))})),console.log(n),n}}})(),me=le,fe=(()=>{const e=document.querySelector("main"),t=document.createElement("div");t.textContent="No Todos To Display :(",t.id="no-todos-msg";const n=t=>{s(),t.forEach((t=>{e.appendChild(t)}))},r=()=>{const e=k.getTodaysTodos(),t=me.getArrayOfTodoElements(e);0!=t.length?n(t):d()},a=()=>{const e=k.getWeeksTodos(),t=me.getArrayOfTodoElements(e);0!=t.length?(n(t),console.log(e)):d()},o=()=>{const e=k.getAllTodos(),t=me.getArrayOfTodoElements(e);0!=t.length?(n(t),console.log(e)):d()},i=e=>{const t=k.getProjectTodos(e),r=me.getArrayOfTodoElements(t);0!=r.length?(n(r),console.log(t)):d()},d=()=>{var n;s(),n=t,e.appendChild(n)},s=()=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{loadTodayTodos:r,loadWeekTodos:a,loadAllTodos:o,loadProjectTodos:i,clearContent:s,refresh:()=>{let e=(()=>{let e;return[...document.querySelector("nav").querySelectorAll("a")].forEach((t=>{t.classList.contains("active")&&(e=""===t.id?t.parentNode.id:t.id)})),e})();switch(e){case"today-link":r();break;case"week-link":a();break;case"all-link":o();break;default:i(e),console.log("activeTab= "+e)}}}})(),he=(()=>{let e,t=!1;const n=document.getElementById("modal-container"),r=(document.getElementById("form"),document.getElementById("task")),a=document.getElementById("date"),o=document.getElementById("project"),i=document.getElementById("priority"),d=document.getElementById("confirm-btn"),s=document.getElementById("cancel-btn"),u=()=>{n.style.display="none",t=!1,r.value="",a.value="",i.value="low",fe.refresh()},c=()=>{n.style.display="flex"};return d.addEventListener("click",(n=>{n.preventDefault(),t?(k.createTodo(r.value,a.value,o.value,i.value),console.log("createing new todo")):(k.editTodo(e,r.value,a.value,o.value,i.value),console.log("editing todo")),console.log(t),u()})),s.addEventListener("click",(e=>{e.preventDefault(),u()})),{setIsNewTodo:e=>{t=e},openEditTodoModal:t=>{c(),(e=>{r.value=e.task,a.value=e.date})(t),e=t.id},openModal:c,addProjectOption:e=>{const t=document.createElement("option");t.text=e,t.value=e,o.add(t)}}})(),ge=he,ve=(()=>{const e=document.getElementById("project-links-display");let t=[];return{addNewProjectTab:n=>{const r=(e=>{const n=document.createElement("li");n.classList.add("project-link"),n.id=e;const r=document.createElement("a");r.href="#",r.textContent=e,r.addEventListener("click",(e=>{var t;t=e.target,fe.loadProjectTodos(t.parentNode.id),pe.toggleActiveLinks(t)}));const a=document.createElement("button");return a.textContent="x",a.classList.add("delete-project-btn"),a.addEventListener("click",(()=>{(e=>{let n=t.findIndex((t=>t.id===e.id));-1!==n&&t.splice(n,1),e.remove()})(n)})),n.appendChild(r),n.appendChild(a),t.push(n),n})(n);e.insertBefore(r,e.childNodes[0]),ge.addProjectOption(n)}}})(),pe=(()=>{const e=document.getElementById("today-link"),t=document.getElementById("week-link"),n=document.getElementById("all-link"),r=document.getElementById("projects-link"),a=document.getElementById("project-input"),o=document.getElementById("new-project-btn"),i=document.getElementById("new-todo-btn"),d=[e,t,n,r];e.addEventListener("click",(e=>{s(e.target),fe.loadTodayTodos()})),t.addEventListener("click",(e=>{s(e.target),fe.loadWeekTodos()})),n.addEventListener("click",(e=>{s(e.target),fe.loadAllTodos()})),r.addEventListener("click",(e=>{s(e.target),u()})),o.addEventListener("click",(()=>{const e=a.value;ve.addNewProjectTab(e),a.value=""})),i.addEventListener("click",(()=>{ge.openModal(),ge.setIsNewTodo(!0),console.log(ge.isNewTodo)}));const s=e=>{c().forEach((t=>{t!=e?t.classList.remove("active"):t.classList.add("active")}))},u=()=>{document.getElementById("project-links-display").classList.toggle("active")},c=()=>[...document.querySelector("nav").querySelectorAll("a")];return{getActiveTab:()=>(d.forEach((e=>{e.classList.contains("active")&&(activeTab=e.id)})),console.log("called from main: "+activeTab),activeTab),toggleActiveLinks:s}})()})()})();