import{S as W,i as z,s as K,e as P,c as A,a as R,d as u,b as _,t as m,g as V,f as g,h as J,o as te,j as q,k,l as D,m as I,n as w,p as v,q as L,r as S,u as E,v as B,w as M,x as G,y as oe,z as fe,A as re,B as Be,C as ne,D as X,E as Y,F as O,G as F}from"./@smui/common.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();const Oe="modulepreload",Te=function(s){return"/"+s},ie={},y=function(e,n,t){if(!n||n.length===0)return e();const l=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Te(r),r in ie)return;ie[r]=!0;const o=r.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(!!t)for(let c=l.length-1;c>=0;c--){const p=l[c];if(p.href===r&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Oe,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((c,p)=>{a.addEventListener("load",c),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function se(s){let e,n,t;var l=s[6];function r(o){return{props:{open:!0,$$slots:{default:[je]},$$scope:{ctx:o}}}}return l&&(e=q(l,r(s))),{c(){e&&k(e.$$.fragment),n=D()},l(o){e&&I(e.$$.fragment,o),n=D()},m(o,f){e&&w(e,o,f),_(o,n,f),t=!0},p(o,f){const i={};if(f&263231&&(i.$$scope={dirty:f,ctx:o}),l!==(l=o[6])){if(e){V();const a=e;g(a.$$.fragment,1,0,()=>{v(a,1)}),J()}l?(e=q(l,r(o)),k(e.$$.fragment),m(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else l&&e.$set(i)},i(o){t||(e&&m(e.$$.fragment,o),t=!0)},o(o){e&&g(e.$$.fragment,o),t=!1},d(o){o&&u(n),e&&v(e,o)}}}function Ce(s){let e;return{c(){e=E("Book")},l(n){e=B(n,"Book")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function Le(s){let e,n,t,l,r,o,f,i,a,c,p,T,C,d,$,b,j;return{c(){e=E("Code  : "),n=P("input"),t=P("br"),l=E(`
                Name  : `),r=P("input"),o=P("br"),f=E(`
                Genre : `),i=P("input"),a=P("br"),c=E(`
                Author: `),p=P("input"),T=P("br"),C=E(`
                Copies: `),d=P("input"),$=P("br")},l(h){e=B(h,"Code  : "),n=A(h,"INPUT",{}),t=A(h,"BR",{}),l=B(h,`
                Name  : `),r=A(h,"INPUT",{}),o=A(h,"BR",{}),f=B(h,`
                Genre : `),i=A(h,"INPUT",{}),a=A(h,"BR",{}),c=B(h,`
                Author: `),p=A(h,"INPUT",{}),T=A(h,"BR",{}),C=B(h,`
                Copies: `),d=A(h,"INPUT",{}),$=A(h,"BR",{})},m(h,N){_(h,e,N),_(h,n,N),M(n,s[1]),_(h,t,N),_(h,l,N),_(h,r,N),M(r,s[2]),_(h,o,N),_(h,f,N),_(h,i,N),M(i,s[3]),_(h,a,N),_(h,c,N),_(h,p,N),M(p,s[4]),_(h,T,N),_(h,C,N),_(h,d,N),M(d,s[5]),_(h,$,N),b||(j=[G(n,"input",s[12]),G(r,"input",s[13]),G(i,"input",s[14]),G(p,"input",s[15]),G(d,"input",s[16])],b=!0)},p(h,N){N&2&&n.value!==h[1]&&M(n,h[1]),N&4&&r.value!==h[2]&&M(r,h[2]),N&8&&i.value!==h[3]&&M(i,h[3]),N&16&&p.value!==h[4]&&M(p,h[4]),N&32&&d.value!==h[5]&&M(d,h[5])},d(h){h&&u(e),h&&u(n),h&&u(t),h&&u(l),h&&u(r),h&&u(o),h&&u(f),h&&u(i),h&&u(a),h&&u(c),h&&u(p),h&&u(T),h&&u(C),h&&u(d),h&&u($),b=!1,oe(j)}}}function ae(s){let e,n,t,l;var r=s[10];function o(f){return{props:{$$slots:{default:[De]},$$scope:{ctx:f}}}}return r&&(e=q(r,o(s)),e.$on("click",s[17])),t=new s[10]({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){e&&k(e.$$.fragment),n=L(),k(t.$$.fragment)},l(f){e&&I(e.$$.fragment,f),n=S(f),I(t.$$.fragment,f)},m(f,i){e&&w(e,f,i),_(f,n,i),w(t,f,i),l=!0},p(f,i){const a={};if(i&262144&&(a.$$scope={dirty:i,ctx:f}),r!==(r=f[10])){if(e){V();const p=e;g(p.$$.fragment,1,0,()=>{v(p,1)}),J()}r?(e=q(r,o(f)),e.$on("click",f[17]),k(e.$$.fragment),m(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else r&&e.$set(a);const c={};i&262144&&(c.$$scope={dirty:i,ctx:f}),t.$set(c)},i(f){l||(e&&m(e.$$.fragment,f),m(t.$$.fragment,f),l=!0)},o(f){e&&g(e.$$.fragment,f),g(t.$$.fragment,f),l=!1},d(f){e&&v(e,f),f&&u(n),v(t,f)}}}function Se(s){let e;return{c(){e=E("Update")},l(n){e=B(n,"Update")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function De(s){let e,n;return e=new s[11]({props:{$$slots:{default:[Se]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l&262144&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Re(s){let e;return{c(){e=E("Close")},l(n){e=B(n,"Close")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function Ue(s){let e,n;return e=new s[11]({props:{$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l&262144&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Me(s){let e,n,t=s[10]&&ae(s);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,r){t&&t.m(l,r),_(l,e,r),n=!0},p(l,r){l[10]?t?(t.p(l,r),r&1024&&m(t,1)):(t=ae(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(V(),g(t,1,1,()=>{t=null}),J())},i(l){n||(m(t),n=!0)},o(l){g(t),n=!1},d(l){t&&t.d(l),l&&u(e)}}}function je(s){let e,n,t,l,r,o;return e=new s[7]({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),t=new s[8]({props:{$$slots:{default:[Le]},$$scope:{ctx:s}}}),r=new s[9]({props:{$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),n=L(),k(t.$$.fragment),l=L(),k(r.$$.fragment)},l(f){I(e.$$.fragment,f),n=S(f),I(t.$$.fragment,f),l=S(f),I(r.$$.fragment,f)},m(f,i){w(e,f,i),_(f,n,i),w(t,f,i),_(f,l,i),w(r,f,i),o=!0},p(f,i){const a={};i&262144&&(a.$$scope={dirty:i,ctx:f}),e.$set(a);const c={};i&262206&&(c.$$scope={dirty:i,ctx:f}),t.$set(c);const p={};i&263231&&(p.$$scope={dirty:i,ctx:f}),r.$set(p)},i(f){o||(m(e.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),o=!0)},o(f){g(e.$$.fragment,f),g(t.$$.fragment,f),g(r.$$.fragment,f),o=!1},d(f){v(e,f),f&&u(n),v(t,f),f&&u(l),v(r,f)}}}function He(s){let e,n,t=s[6]&&se(s);return{c(){e=P("main"),t&&t.c()},l(l){e=A(l,"MAIN",{});var r=R(e);t&&t.l(r),r.forEach(u)},m(l,r){_(l,e,r),t&&t.m(e,null),n=!0},p(l,[r]){l[6]?t?(t.p(l,r),r&64&&m(t,1)):(t=se(l),t.c(),m(t,1),t.m(e,null)):t&&(V(),g(t,1,1,()=>{t=null}),J())},i(l){n||(m(t),n=!0)},o(l){g(t),n=!1},d(l){l&&u(e),t&&t.d()}}}function Ve(s,e,n){let{book:t}=e,l=t.bID,r=t.bName,o=t.genre,f=t.author,i=t.copyCount,a,c,p,T,C,d;te(async()=>{let H;H=await y(()=>import("./index2.js"),["index2.js","@smui/common.js","classAdderBuilder.js"]),n(6,a=H.default),n(7,c=H.Title),n(8,p=H.Content),n(9,T=H.Actions),H=await y(()=>import("./index3.js"),["index3.js","@smui/common.js"]),n(10,C=H.default),n(11,d=H.Label)});function $(){l=this.value,n(1,l)}function b(){r=this.value,n(2,r)}function j(){o=this.value,n(3,o)}function h(){f=this.value,n(4,f)}function N(){i=this.value,n(5,i)}const Z=()=>{let H={bID:l,bName:r,genre:o,author:f,copyCount:i};fetch("/api/updateBook",{method:"POST",body:JSON.stringify({originalBookID:t.bID,updatedBook:H}),headers:{"Content-Type":"application/json"}}).then(Q=>Q.json()).then(Q=>{console.log(Q),Q.message.startsWith(`Book ${t.bID} updated to: `)&&location.reload()})};return s.$$set=H=>{"book"in H&&n(0,t=H.book)},[t,l,r,o,f,i,a,c,p,T,C,d,$,b,j,h,N,Z]}class Je extends W{constructor(e){super(),z(this,e,Ve,He,K,{book:0})}}function ue(s,e,n){const t=s.slice();return t[12]=e[n],t}function ce(s){let e,n,t,l;function r(i){s[11](i)}var o=s[2];function f(i){let a={$$slots:{default:[tt]},$$scope:{ctx:i}};return i[1]!==void 0&&(a.open=i[1]),{props:a}}return o&&(e=q(o,f(s)),fe.push(()=>re(e,"open",r))),{c(){e&&k(e.$$.fragment),t=D()},l(i){e&&I(e.$$.fragment,i),t=D()},m(i,a){e&&w(e,i,a),_(i,t,a),l=!0},p(i,a){const c={};if(a&32833&&(c.$$scope={dirty:a,ctx:i}),!n&&a&2&&(n=!0,c.open=i[1],Be(()=>n=!1)),o!==(o=i[2])){if(e){V();const p=e;g(p.$$.fragment,1,0,()=>{v(p,1)}),J()}o?(e=q(o,f(i)),fe.push(()=>re(e,"open",r)),k(e.$$.fragment),m(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(i){l||(e&&m(e.$$.fragment,i),l=!0)},o(i){e&&g(e.$$.fragment,i),l=!1},d(i){i&&u(t),e&&v(e,i)}}}function qe(s){let e;return{c(){e=E("Book")},l(n){e=B(n,"Book")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function $e(s){let e=s[12]+"",n,t,l=s[0][s[12]]+"",r,o;return{c(){n=E(e),t=E(": "),r=E(l),o=P("br")},l(f){n=B(f,e),t=B(f,": "),r=B(f,l),o=A(f,"BR",{})},m(f,i){_(f,n,i),_(f,t,i),_(f,r,i),_(f,o,i)},p(f,i){i&1&&e!==(e=f[12]+"")&&X(n,e),i&1&&l!==(l=f[0][f[12]]+"")&&X(r,l)},d(f){f&&u(n),f&&u(t),f&&u(r),f&&u(o)}}}function Ge(s){let e,n=Object.keys(s[0]),t=[];for(let l=0;l<n.length;l+=1)t[l]=$e(ue(s,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=D()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=D()},m(l,r){for(let o=0;o<t.length;o+=1)t[o].m(l,r);_(l,e,r)},p(l,r){if(r&1){n=Object.keys(l[0]);let o;for(o=0;o<n.length;o+=1){const f=ue(l,n,o);t[o]?t[o].p(f,r):(t[o]=$e(f),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},d(l){ne(t,l),l&&u(e)}}}function _e(s){let e,n,t,l,r;const o=[Fe,Ye],f=[];function i(a,c){return location.pathname=="/search"?0:location.pathname=="/admin/books"?1:-1}return~(e=i())&&(n=f[e]=o[e](s)),l=new s[6]({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),{c(){n&&n.c(),t=L(),k(l.$$.fragment)},l(a){n&&n.l(a),t=S(a),I(l.$$.fragment,a)},m(a,c){~e&&f[e].m(a,c),_(a,t,c),w(l,a,c),r=!0},p(a,c){n&&n.p(a,c);const p={};c&32768&&(p.$$scope={dirty:c,ctx:a}),l.$set(p)},i(a){r||(m(n),m(l.$$.fragment,a),r=!0)},o(a){g(n),g(l.$$.fragment,a),r=!1},d(a){~e&&f[e].d(a),a&&u(t),v(l,a)}}}function Ye(s){let e,n,t,l;var r=s[6];function o(f){return{props:{$$slots:{default:[ze]},$$scope:{ctx:f}}}}return r&&(e=q(r,o(s)),e.$on("click",s[10])),t=new s[6]({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),{c(){e&&k(e.$$.fragment),n=L(),k(t.$$.fragment)},l(f){e&&I(e.$$.fragment,f),n=S(f),I(t.$$.fragment,f)},m(f,i){e&&w(e,f,i),_(f,n,i),w(t,f,i),l=!0},p(f,i){const a={};if(i&32768&&(a.$$scope={dirty:i,ctx:f}),r!==(r=f[6])){if(e){V();const p=e;g(p.$$.fragment,1,0,()=>{v(p,1)}),J()}r?(e=q(r,o(f)),e.$on("click",f[10]),k(e.$$.fragment),m(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else r&&e.$set(a);const c={};i&32768&&(c.$$scope={dirty:i,ctx:f}),t.$set(c)},i(f){l||(e&&m(e.$$.fragment,f),m(t.$$.fragment,f),l=!0)},o(f){e&&g(e.$$.fragment,f),g(t.$$.fragment,f),l=!1},d(f){e&&v(e,f),f&&u(n),v(t,f)}}}function Fe(s){let e,n,t;var l=s[6];function r(o){return{props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}}}return l&&(e=q(l,r(s)),e.$on("click",s[9])),{c(){e&&k(e.$$.fragment),n=D()},l(o){e&&I(e.$$.fragment,o),n=D()},m(o,f){e&&w(e,o,f),_(o,n,f),t=!0},p(o,f){const i={};if(f&32768&&(i.$$scope={dirty:f,ctx:o}),l!==(l=o[6])){if(e){V();const a=e;g(a.$$.fragment,1,0,()=>{v(a,1)}),J()}l?(e=q(l,r(o)),e.$on("click",o[9]),k(e.$$.fragment),m(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else l&&e.$set(i)},i(o){t||(e&&m(e.$$.fragment,o),t=!0)},o(o){e&&g(e.$$.fragment,o),t=!1},d(o){o&&u(n),e&&v(e,o)}}}function We(s){let e;return{c(){e=E("Update Book")},l(n){e=B(n,"Update Book")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function ze(s){let e,n;return e=new s[7]({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l&32768&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ke(s){let e;return{c(){e=E("Delete Book")},l(n){e=B(n,"Delete Book")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function Qe(s){let e,n;return e=new s[7]({props:{$$slots:{default:[Ke]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l&32768&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Xe(s){let e;return{c(){e=E("Checkout Book")},l(n){e=B(n,"Checkout Book")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function Ze(s){let e,n;return e=new s[7]({props:{$$slots:{default:[Xe]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l&32768&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function ye(s){let e;return{c(){e=E("Close")},l(n){e=B(n,"Close")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function xe(s){let e,n;return e=new s[7]({props:{$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l&32768&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function et(s){let e,n,t=s[6]&&_e(s);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,r){t&&t.m(l,r),_(l,e,r),n=!0},p(l,r){l[6]?t?(t.p(l,r),r&64&&m(t,1)):(t=_e(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(V(),g(t,1,1,()=>{t=null}),J())},i(l){n||(m(t),n=!0)},o(l){g(t),n=!1},d(l){t&&t.d(l),l&&u(e)}}}function tt(s){let e,n,t,l,r,o;return e=new s[3]({props:{$$slots:{default:[qe]},$$scope:{ctx:s}}}),t=new s[4]({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}}),r=new s[5]({props:{$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),n=L(),k(t.$$.fragment),l=L(),k(r.$$.fragment)},l(f){I(e.$$.fragment,f),n=S(f),I(t.$$.fragment,f),l=S(f),I(r.$$.fragment,f)},m(f,i){w(e,f,i),_(f,n,i),w(t,f,i),_(f,l,i),w(r,f,i),o=!0},p(f,i){const a={};i&32768&&(a.$$scope={dirty:i,ctx:f}),e.$set(a);const c={};i&32769&&(c.$$scope={dirty:i,ctx:f}),t.$set(c);const p={};i&32833&&(p.$$scope={dirty:i,ctx:f}),r.$set(p)},i(f){o||(m(e.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),o=!0)},o(f){g(e.$$.fragment,f),g(t.$$.fragment,f),g(r.$$.fragment,f),o=!1},d(f){v(e,f),f&&u(n),v(t,f),f&&u(l),v(r,f)}}}function nt(s){let e,n,t=s[2]&&ce(s);return{c(){e=P("main"),t&&t.c()},l(l){e=A(l,"MAIN",{});var r=R(e);t&&t.l(r),r.forEach(u)},m(l,r){_(l,e,r),t&&t.m(e,null),n=!0},p(l,[r]){l[2]?t?(t.p(l,r),r&4&&m(t,1)):(t=ce(l),t.c(),m(t,1),t.m(e,null)):t&&(V(),g(t,1,1,()=>{t=null}),J())},i(l){n||(m(t),n=!0)},o(l){g(t),n=!1},d(l){l&&u(e),t&&t.d()}}}function lt(s,e,n){let{book:t}=e,l=!0,r,o,f,i,a,c;te(async()=>{let $;$=await y(()=>import("./index2.js"),["index2.js","@smui/common.js","classAdderBuilder.js"]),n(2,r=$.default),n(3,o=$.Title),n(4,f=$.Content),n(5,i=$.Actions),$=await y(()=>import("./index3.js"),["index3.js","@smui/common.js"]),n(6,a=$.default),n(7,c=$.Label)});function p($){new Je({target:document.body,props:{book:$}})}const T=()=>{fetch("/api/checkoutBook",{method:"POST",body:JSON.stringify({book:t,time:Date.now()}),headers:{"Content-Type":"application/json"}}).then($=>$.json()).then($=>{$.message=="Book checked out"&&location.reload()})},C=()=>{p(t)};function d($){l=$,n(1,l)}return s.$$set=$=>{"book"in $&&n(0,t=$.book)},[t,l,r,o,f,i,a,c,p,T,C,d]}class ft extends W{constructor(e){super(),z(this,e,lt,nt,K,{book:0})}}function pe(s,e,n){const t=s.slice();return t[26]=e[n],t}function me(s,e,n){const t=s.slice();return t[29]=e[n],t}function he(s,e,n){const t=s.slice();return t[32]=e[n],t}function ge(s){let e,n;return e=new s[6]({props:{stickyHeader:!0,style:"width: 100%;",$$slots:{paginate:[Et],default:[ct]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l[0]&107071|l[1]&16&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function rt(s){let e=s[32]+"",n;return{c(){n=E(e)},l(t){n=B(t,e)},m(t,l){_(t,n,l)},p(t,l){l[0]&1&&e!==(e=t[32]+"")&&X(n,e)},d(t){t&&u(n)}}}function de(s){let e,n;return e=new s[10]({props:{$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l[0]&1|l[1]&16&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function ot(s){let e,n,t=Object.keys(s[0][0]),l=[];for(let o=0;o<t.length;o+=1)l[o]=de(he(s,t,o));const r=o=>g(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=D()},l(o){for(let f=0;f<l.length;f+=1)l[f].l(o);e=D()},m(o,f){for(let i=0;i<l.length;i+=1)l[i].m(o,f);_(o,e,f),n=!0},p(o,f){if(f[0]&1){t=Object.keys(o[0][0]);let i;for(i=0;i<t.length;i+=1){const a=he(o,t,i);l[i]?(l[i].p(a,f),m(l[i],1)):(l[i]=de(a),l[i].c(),m(l[i],1),l[i].m(e.parentNode,e))}for(V(),i=t.length;i<l.length;i+=1)r(i);J()}},i(o){if(!n){for(let f=0;f<t.length;f+=1)m(l[f]);n=!0}},o(o){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)g(l[f]);n=!1},d(o){ne(l,o),o&&u(e)}}}function it(s){let e,n;return e=new s[9]({props:{$$slots:{default:[ot]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l[0]&1|l[1]&16&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function st(s){let e=JSON.stringify(s[26][s[29]])+"",n;return{c(){n=E(e)},l(t){n=B(t,e)},m(t,l){_(t,n,l)},p(t,l){l[0]&65536&&e!==(e=JSON.stringify(t[26][t[29]])+"")&&X(n,e)},d(t){t&&u(n)}}}function be(s){let e,n;return e=new s[10]({props:{$$slots:{default:[st]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l[0]&65536|l[1]&16&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function at(s){let e,n,t=Object.keys(s[26]),l=[];for(let o=0;o<t.length;o+=1)l[o]=be(me(s,t,o));const r=o=>g(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=L()},l(o){for(let f=0;f<l.length;f+=1)l[f].l(o);e=S(o)},m(o,f){for(let i=0;i<l.length;i+=1)l[i].m(o,f);_(o,e,f),n=!0},p(o,f){if(f[0]&65536){t=Object.keys(o[26]);let i;for(i=0;i<t.length;i+=1){const a=me(o,t,i);l[i]?(l[i].p(a,f),m(l[i],1)):(l[i]=be(a),l[i].c(),m(l[i],1),l[i].m(e.parentNode,e))}for(V(),i=t.length;i<l.length;i+=1)r(i);J()}},i(o){if(!n){for(let f=0;f<t.length;f+=1)m(l[f]);n=!0}},o(o){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)g(l[f]);n=!1},d(o){ne(l,o),o&&u(e)}}}function ke(s){let e,n,t;function l(){return s[23](s[26])}var r=s[9];function o(f){return{props:{$$slots:{default:[at]},$$scope:{ctx:f}}}}return r&&(e=q(r,o(s)),e.$on("click",l)),{c(){e&&k(e.$$.fragment),n=D()},l(f){e&&I(e.$$.fragment,f),n=D()},m(f,i){e&&w(e,f,i),_(f,n,i),t=!0},p(f,i){s=f;const a={};if(i[0]&65536|i[1]&16&&(a.$$scope={dirty:i,ctx:s}),r!==(r=s[9])){if(e){V();const c=e;g(c.$$.fragment,1,0,()=>{v(c,1)}),J()}r?(e=q(r,o(s)),e.$on("click",l),k(e.$$.fragment),m(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else r&&e.$set(a)},i(f){t||(e&&m(e.$$.fragment,f),t=!0)},o(f){e&&g(e.$$.fragment,f),t=!1},d(f){f&&u(n),e&&v(e,f)}}}function ut(s){let e,n,t=s[16],l=[];for(let o=0;o<t.length;o+=1)l[o]=ke(pe(s,t,o));const r=o=>g(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=D()},l(o){for(let f=0;f<l.length;f+=1)l[f].l(o);e=D()},m(o,f){for(let i=0;i<l.length;i+=1)l[i].m(o,f);_(o,e,f),n=!0},p(o,f){if(f[0]&197120){t=o[16];let i;for(i=0;i<t.length;i+=1){const a=pe(o,t,i);l[i]?(l[i].p(a,f),m(l[i],1)):(l[i]=ke(a),l[i].c(),m(l[i],1),l[i].m(e.parentNode,e))}for(V(),i=t.length;i<l.length;i+=1)r(i);J()}},i(o){if(!n){for(let f=0;f<t.length;f+=1)m(l[f]);n=!0}},o(o){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)g(l[f]);n=!1},d(o){ne(l,o),o&&u(e)}}}function ct(s){let e,n,t,l;return e=new s[7]({props:{$$slots:{default:[it]},$$scope:{ctx:s}}}),t=new s[8]({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),n=L(),k(t.$$.fragment)},l(r){I(e.$$.fragment,r),n=S(r),I(t.$$.fragment,r)},m(r,o){w(e,r,o),_(r,n,o),w(t,r,o),l=!0},p(r,o){const f={};o[0]&1|o[1]&16&&(f.$$scope={dirty:o,ctx:r}),e.$set(f);const i={};o[0]&66048|o[1]&16&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){l||(m(e.$$.fragment,r),m(t.$$.fragment,r),l=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),l=!1},d(r){v(e,r),r&&u(n),v(t,r)}}}function we(s){let e,n,t,l,r,o,f,i;return e=new s[15]({props:{class:"material-icons",action:"first-page",title:"First page",disabled:s[2]===0,$$slots:{default:[$t]},$$scope:{ctx:s}}}),e.$on("click",s[19]),t=new s[15]({props:{class:"material-icons",action:"prev-page",title:"Prev page",disabled:s[2]===0,$$slots:{default:[_t]},$$scope:{ctx:s}}}),t.$on("click",s[20]),r=new s[15]({props:{class:"material-icons",action:"next-page",title:"Next page",disabled:s[2]===s[3],$$slots:{default:[pt]},$$scope:{ctx:s}}}),r.$on("click",s[21]),f=new s[15]({props:{class:"material-icons",action:"last-page",title:"Last page",disabled:s[2]===s[3],$$slots:{default:[mt]},$$scope:{ctx:s}}}),f.$on("click",s[22]),{c(){k(e.$$.fragment),n=L(),k(t.$$.fragment),l=L(),k(r.$$.fragment),o=L(),k(f.$$.fragment)},l(a){I(e.$$.fragment,a),n=S(a),I(t.$$.fragment,a),l=S(a),I(r.$$.fragment,a),o=S(a),I(f.$$.fragment,a)},m(a,c){w(e,a,c),_(a,n,c),w(t,a,c),_(a,l,c),w(r,a,c),_(a,o,c),w(f,a,c),i=!0},p(a,c){const p={};c[0]&4&&(p.disabled=a[2]===0),c[1]&16&&(p.$$scope={dirty:c,ctx:a}),e.$set(p);const T={};c[0]&4&&(T.disabled=a[2]===0),c[1]&16&&(T.$$scope={dirty:c,ctx:a}),t.$set(T);const C={};c[0]&12&&(C.disabled=a[2]===a[3]),c[1]&16&&(C.$$scope={dirty:c,ctx:a}),r.$set(C);const d={};c[0]&12&&(d.disabled=a[2]===a[3]),c[1]&16&&(d.$$scope={dirty:c,ctx:a}),f.$set(d)},i(a){i||(m(e.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),m(f.$$.fragment,a),i=!0)},o(a){g(e.$$.fragment,a),g(t.$$.fragment,a),g(r.$$.fragment,a),g(f.$$.fragment,a),i=!1},d(a){v(e,a),a&&u(n),v(t,a),a&&u(l),v(r,a),a&&u(o),v(f,a)}}}function $t(s){let e;return{c(){e=E("first_page")},l(n){e=B(n,"first_page")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function _t(s){let e;return{c(){e=E("chevron_left")},l(n){e=B(n,"chevron_left")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function pt(s){let e;return{c(){e=E("chevron_right")},l(n){e=B(n,"chevron_right")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function mt(s){let e;return{c(){e=E("last_page")},l(n){e=B(n,"last_page")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function ht(s){let e,n,t=s[15]&&we(s);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,r){t&&t.m(l,r),_(l,e,r),n=!0},p(l,r){l[15]?t?(t.p(l,r),r[0]&32768&&m(t,1)):(t=we(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(V(),g(t,1,1,()=>{t=null}),J())},i(l){n||(m(t),n=!0)},o(l){g(t),n=!1},d(l){t&&t.d(l),l&&u(e)}}}function gt(s){let e;return{c(){e=E("Rows Per Page")},l(n){e=B(n,"Rows Per Page")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function ve(s){let e,n,t;function l(o){s[18](o)}let r={variant:"outlined",noLabel:!0,$$slots:{default:[wt]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.value=s[1]),e=new s[13]({props:r}),fe.push(()=>re(e,"value",l)),{c(){k(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,f){w(e,o,f),t=!0},p(o,f){const i={};f[1]&16&&(i.$$scope={dirty:f,ctx:o}),!n&&f[0]&2&&(n=!0,i.value=o[1],Be(()=>n=!1)),e.$set(i)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){v(e,o)}}}function dt(s){let e;return{c(){e=E("5")},l(n){e=B(n,"5")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function bt(s){let e;return{c(){e=E("10")},l(n){e=B(n,"10")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function kt(s){let e;return{c(){e=E("15")},l(n){e=B(n,"15")},m(n,t){_(n,e,t)},d(n){n&&u(e)}}}function wt(s){let e,n,t,l,r,o;return e=new s[14]({props:{value:5,$$slots:{default:[dt]},$$scope:{ctx:s}}}),t=new s[14]({props:{value:10,$$slots:{default:[bt]},$$scope:{ctx:s}}}),r=new s[14]({props:{value:15,$$slots:{default:[kt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),n=L(),k(t.$$.fragment),l=L(),k(r.$$.fragment)},l(f){I(e.$$.fragment,f),n=S(f),I(t.$$.fragment,f),l=S(f),I(r.$$.fragment,f)},m(f,i){w(e,f,i),_(f,n,i),w(t,f,i),_(f,l,i),w(r,f,i),o=!0},p(f,i){const a={};i[1]&16&&(a.$$scope={dirty:i,ctx:f}),e.$set(a);const c={};i[1]&16&&(c.$$scope={dirty:i,ctx:f}),t.$set(c);const p={};i[1]&16&&(p.$$scope={dirty:i,ctx:f}),r.$set(p)},i(f){o||(m(e.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),o=!0)},o(f){g(e.$$.fragment,f),g(t.$$.fragment,f),g(r.$$.fragment,f),o=!1},d(f){v(e,f),f&&u(n),v(t,f),f&&u(l),v(r,f)}}}function vt(s){let e,n,t,l;e=new s[12]({props:{$$slots:{default:[gt]},$$scope:{ctx:s}}});let r=s[13]&&ve(s);return{c(){k(e.$$.fragment),n=L(),r&&r.c(),t=D()},l(o){I(e.$$.fragment,o),n=S(o),r&&r.l(o),t=D()},m(o,f){w(e,o,f),_(o,n,f),r&&r.m(o,f),_(o,t,f),l=!0},p(o,f){const i={};f[1]&16&&(i.$$scope={dirty:f,ctx:o}),e.$set(i),o[13]?r?(r.p(o,f),f[0]&8192&&m(r,1)):(r=ve(o),r.c(),m(r,1),r.m(t.parentNode,t)):r&&(V(),g(r,1,1,()=>{r=null}),J())},i(o){l||(m(e.$$.fragment,o),m(r),l=!0)},o(o){g(e.$$.fragment,o),g(r),l=!1},d(o){v(e,o),o&&u(n),r&&r.d(o),o&&u(t)}}}function Nt(s){let e=s[5]+1+"",n,t,l,r,o=s[0].length+"",f;return{c(){n=E(e),t=E("-"),l=E(s[4]),r=E(" of "),f=E(o)},l(i){n=B(i,e),t=B(i,"-"),l=B(i,s[4]),r=B(i," of "),f=B(i,o)},m(i,a){_(i,n,a),_(i,t,a),_(i,l,a),_(i,r,a),_(i,f,a)},p(i,a){a[0]&32&&e!==(e=i[5]+1+"")&&X(n,e),a[0]&16&&X(l,i[4]),a[0]&1&&o!==(o=i[0].length+"")&&X(f,o)},d(i){i&&u(n),i&&u(t),i&&u(l),i&&u(r),i&&u(f)}}}function Et(s){let e,n;return e=new s[11]({props:{slot:"paginate",$$slots:{total:[Nt],rowsPerPage:[vt],default:[ht]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const r={};l[0]&41023|l[1]&16&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Bt(s){let e,n,t=s[6]&&ge(s);return{c(){e=P("main"),t&&t.c()},l(l){e=A(l,"MAIN",{});var r=R(e);t&&t.l(r),r.forEach(u)},m(l,r){_(l,e,r),t&&t.m(e,null),n=!0},p(l,r){l[6]?t?(t.p(l,r),r[0]&64&&m(t,1)):(t=ge(l),t.c(),m(t,1),t.m(e,null)):t&&(V(),g(t,1,1,()=>{t=null}),J())},i(l){n||(m(t),n=!0)},o(l){g(t),n=!1},d(l){l&&u(e),t&&t.d()}}}function Pt(s,e,n){let t,l,r,o,{data:f}=e;f.length||(f=[{Error:"No records returned"}]);let i,a,c,p,T,C,d,$,b,j;te(async()=>{let U;U=await y(()=>import("./@smui/common.js").then(le=>le.ao),[]),n(6,i=U.default),n(7,a=U.Head),n(8,c=U.Body),n(9,p=U.Row),n(10,T=U.Cell),n(11,C=U.Pagination),n(12,d=U.Label),U=await y(()=>import("./index4.js"),["index4.js","@smui/common.js","classAdderBuilder.js"]),n(13,$=U.default),n(14,b=U.Option),U=await y(()=>import("./@smui/common.js").then(le=>le.ap),[]),n(15,j=U.default)});let h=5,N=0;function Z(U){new ft({target:document.body,props:{book:U}})}function H(U){h=U,n(1,h)}const Q=()=>n(2,N=0),x=()=>n(2,N--,N),ee=()=>n(2,N++,N),Ae=()=>n(2,N=o),Ie=U=>{switch(location.pathname){case"/search":case"/admin/books":Z(U)}};return s.$$set=U=>{"data"in U&&n(0,f=U.data)},s.$$.update=()=>{s.$$.dirty[0]&3&&n(3,o=Math.max(Math.ceil(f.length/h)-1,0)),s.$$.dirty[0]&12&&N>o&&n(2,N=o),s.$$.dirty[0]&6&&n(5,t=N*h),s.$$.dirty[0]&35&&n(4,l=Math.min(t+h,f.length)),s.$$.dirty[0]&49&&n(16,r=f.slice(t,l))},[f,h,N,o,l,t,i,a,c,p,T,C,d,$,b,j,r,Z,H,Q,x,ee,Ae,Ie]}class Pe extends W{constructor(e){super(),z(this,e,Pt,Bt,K,{data:0},null,[-1,-1])}}function At(s){let e,n,t,l,r,o,f,i,a,c,p,T,C;return c=new Pe({props:{data:s[0]}}),{c(){e=P("main"),n=P("h1"),t=E("LibraSys"),l=L(),r=P("input"),o=L(),f=P("button"),i=E("Search"),a=L(),k(c.$$.fragment),this.h()},l(d){e=A(d,"MAIN",{});var $=R(e);n=A($,"H1",{});var b=R(n);t=B(b,"LibraSys"),b.forEach(u),l=S($),r=A($,"INPUT",{placeholder:!0}),o=S($),f=A($,"BUTTON",{});var j=R(f);i=B(j,"Search"),j.forEach(u),a=S($),I(c.$$.fragment,$),$.forEach(u),this.h()},h(){Y(r,"placeholder","Search...")},m(d,$){_(d,e,$),O(e,n),O(n,t),O(e,l),O(e,r),M(r,s[1]),O(e,o),O(e,f),O(f,i),O(e,a),w(c,e,null),p=!0,T||(C=[G(r,"input",s[2]),G(f,"click",s[3])],T=!0)},p(d,[$]){$&2&&r.value!==d[1]&&M(r,d[1]);const b={};$&1&&(b.data=d[0]),c.$set(b)},i(d){p||(m(c.$$.fragment,d),p=!0)},o(d){g(c.$$.fragment,d),p=!1},d(d){d&&u(e),v(c),T=!1,oe(C)}}}function It(s,e,n){let{data:t}=e,l="";function r(){l=this.value,n(1,l)}const o=()=>location.href=`/search?book=${l}`;return s.$$set=f=>{"data"in f&&n(0,t=f.data)},[t,l,r,o]}class Ot extends W{constructor(e){super(),z(this,e,It,At,K,{data:0})}}function Tt(s){let e,n,t;return{c(){e=P("main"),n=P("h1"),t=E("About")},l(l){e=A(l,"MAIN",{});var r=R(e);n=A(r,"H1",{});var o=R(n);t=B(o,"About"),o.forEach(u),r.forEach(u)},m(l,r){_(l,e,r),O(e,n),O(n,t)},p:F,i:F,o:F,d(l){l&&u(e)}}}class Ct extends W{constructor(e){super(),z(this,e,null,Tt,K,{})}}function Ne(s){let e,n,t;return{c(){e=P("h1"),n=E("You're an admin!"),t=P("br")},l(l){e=A(l,"H1",{});var r=R(e);n=B(r,"You're an admin!"),r.forEach(u),t=A(l,"BR",{})},m(l,r){_(l,e,r),O(e,n),_(l,t,r)},d(l){l&&u(e),l&&u(t)}}}function Lt(s){let e,n,t,l=s[0].fName+"",r,o,f,i,a,c,p,T=JSON.stringify(s[0],null,2)+"",C,d=s[0].isAdmin&&Ne();return{c(){e=P("main"),n=P("h1"),t=E("Hello, "),r=E(l),o=E("!"),f=P("br"),i=L(),d&&d.c(),a=E(`
    Your details: `),c=P("pre"),p=P("code"),C=E(T)},l($){e=A($,"MAIN",{});var b=R(e);n=A(b,"H1",{});var j=R(n);t=B(j,"Hello, "),r=B(j,l),o=B(j,"!"),j.forEach(u),f=A(b,"BR",{}),i=S(b),d&&d.l(b),a=B(b,`
    Your details: `),c=A(b,"PRE",{});var h=R(c);p=A(h,"CODE",{});var N=R(p);C=B(N,T),N.forEach(u),h.forEach(u),b.forEach(u)},m($,b){_($,e,b),O(e,n),O(n,t),O(n,r),O(n,o),O(e,f),O(e,i),d&&d.m(e,null),O(e,a),O(e,c),O(c,p),O(p,C)},p($,[b]){b&1&&l!==(l=$[0].fName+"")&&X(r,l),$[0].isAdmin?d||(d=Ne(),d.c(),d.m(e,a)):d&&(d.d(1),d=null),b&1&&T!==(T=JSON.stringify($[0],null,2)+"")&&X(C,T)},i:F,o:F,d($){$&&u(e),d&&d.d()}}}function St(s,e,n){let{data:t}=e;return s.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class Dt extends W{constructor(e){super(),z(this,e,St,Lt,K,{data:0})}}function Ee(s){let e,n,t,l,r,o,f,i,a,c,p,T,C,d;return{c(){e=P("input"),n=L(),t=P("input"),l=L(),r=P("input"),o=L(),f=P("input"),i=L(),a=P("input"),c=L(),p=P("button"),T=E("Create Book"),this.h()},l($){e=A($,"INPUT",{placeholder:!0}),n=S($),t=A($,"INPUT",{placeholder:!0}),l=S($),r=A($,"INPUT",{placeholder:!0}),o=S($),f=A($,"INPUT",{placeholder:!0}),i=S($),a=A($,"INPUT",{placeholder:!0}),c=S($),p=A($,"BUTTON",{});var b=R(p);T=B(b,"Create Book"),b.forEach(u),this.h()},h(){Y(e,"placeholder","Book ID"),Y(t,"placeholder","Book Name"),Y(r,"placeholder","Genre"),Y(f,"placeholder","Author"),Y(a,"placeholder","Copies")},m($,b){_($,e,b),M(e,s[0]),_($,n,b),_($,t,b),M(t,s[1]),_($,l,b),_($,r,b),M(r,s[2]),_($,o,b),_($,f,b),M(f,s[3]),_($,i,b),_($,a,b),M(a,s[4]),_($,c,b),_($,p,b),O(p,T),C||(d=[G(e,"input",s[6]),G(t,"input",s[7]),G(r,"input",s[8]),G(f,"input",s[9]),G(a,"input",s[10]),G(p,"click",s[11])],C=!0)},p($,b){b&1&&e.value!==$[0]&&M(e,$[0]),b&2&&t.value!==$[1]&&M(t,$[1]),b&4&&r.value!==$[2]&&M(r,$[2]),b&8&&f.value!==$[3]&&M(f,$[3]),b&16&&a.value!==$[4]&&M(a,$[4])},d($){$&&u(e),$&&u(n),$&&u(t),$&&u(l),$&&u(r),$&&u(o),$&&u(f),$&&u(i),$&&u(a),$&&u(c),$&&u(p),C=!1,oe(d)}}}function Rt(s){let e,n=s[5]=="/admin/books"&&Ee(s);return{c(){n&&n.c(),e=D()},l(t){n&&n.l(t),e=D()},m(t,l){n&&n.m(t,l),_(t,e,l)},p(t,[l]){t[5]=="/admin/books"?n?n.p(t,l):(n=Ee(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:F,o:F,d(t){n&&n.d(t),t&&u(e)}}}function Ut(s,e,n){let t="",l="",r="",o="",f="",i;te(async()=>{n(5,i=location.pathname)});function a(){t=this.value,n(0,t)}function c(){l=this.value,n(1,l)}function p(){r=this.value,n(2,r)}function T(){o=this.value,n(3,o)}function C(){f=this.value,n(4,f)}return[t,l,r,o,f,i,a,c,p,T,C,()=>{fetch("/api/createBook",{method:"POST",body:JSON.stringify({book:{bID:t,bName:l,genre:r,author:o,copyCount:f}}),headers:{"Content-Type":"application/json"}}).then(b=>b.json()).then(b=>console.log(b))}]}class Mt extends W{constructor(e){super(),z(this,e,Ut,Rt,K,{})}}function jt(s){let e,n,t,l,r,o,f,i;return r=new Pe({props:{data:s[0]}}),f=new Mt({}),{c(){e=P("main"),n=P("h1"),t=E("Admin panel"),l=L(),k(r.$$.fragment),o=L(),k(f.$$.fragment)},l(a){e=A(a,"MAIN",{});var c=R(e);n=A(c,"H1",{});var p=R(n);t=B(p,"Admin panel"),p.forEach(u),l=S(c),I(r.$$.fragment,c),o=S(c),I(f.$$.fragment,c),c.forEach(u)},m(a,c){_(a,e,c),O(e,n),O(n,t),O(e,l),w(r,e,null),O(e,o),w(f,e,null),i=!0},p(a,[c]){const p={};c&1&&(p.data=a[0]),r.$set(p)},i(a){i||(m(r.$$.fragment,a),m(f.$$.fragment,a),i=!0)},o(a){g(r.$$.fragment,a),g(f.$$.fragment,a),i=!1},d(a){a&&u(e),v(r),v(f)}}}function Ht(s,e,n){let{data:t}=e;return s.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class Vt extends W{constructor(e){super(),z(this,e,Ht,jt,K,{data:0})}}function Jt(s){let e,n,t,l,r,o,f,i,a,c,p,T,C,d,$,b;return{c(){e=P("main"),n=P("div"),t=P("a"),l=E("Home"),r=L(),o=P("a"),f=E("Search"),i=L(),a=P("a"),c=E("Login"),p=L(),T=P("a"),C=E("Profile"),d=L(),$=P("a"),b=E("About"),this.h()},l(j){e=A(j,"MAIN",{});var h=R(e);n=A(h,"DIV",{});var N=R(n);t=A(N,"A",{href:!0});var Z=R(t);l=B(Z,"Home"),Z.forEach(u),r=S(N),o=A(N,"A",{href:!0});var H=R(o);f=B(H,"Search"),H.forEach(u),i=S(N),a=A(N,"A",{href:!0});var Q=R(a);c=B(Q,"Login"),Q.forEach(u),p=S(N),T=A(N,"A",{href:!0});var x=R(T);C=B(x,"Profile"),x.forEach(u),d=S(N),$=A(N,"A",{href:!0});var ee=R($);b=B(ee,"About"),ee.forEach(u),N.forEach(u),h.forEach(u),this.h()},h(){Y(t,"href","/"),Y(o,"href","/search"),Y(a,"href","/login"),Y(T,"href","/profile"),Y($,"href","/about")},m(j,h){_(j,e,h),O(e,n),O(n,t),O(t,l),O(n,r),O(n,o),O(o,f),O(n,i),O(n,a),O(a,c),O(n,p),O(n,T),O(T,C),O(n,d),O(n,$),O($,b)},p:F,i:F,o:F,d(j){j&&u(e)}}}class qt extends W{constructor(e){super(),z(this,e,null,Jt,K,{})}}function Gt(s){let e,n,t,l,r;e=new qt({});var o=s[2][s[0]];function f(i){return{props:{data:i[1]}}}return o&&(t=q(o,f(s))),{c(){k(e.$$.fragment),n=L(),t&&k(t.$$.fragment),l=D()},l(i){I(e.$$.fragment,i),n=S(i),t&&I(t.$$.fragment,i),l=D()},m(i,a){w(e,i,a),_(i,n,a),t&&w(t,i,a),_(i,l,a),r=!0},p(i,[a]){const c={};if(a&2&&(c.data=i[1]),o!==(o=i[2][i[0]])){if(t){V();const p=t;g(p.$$.fragment,1,0,()=>{v(p,1)}),J()}o?(t=q(o,f(i)),k(t.$$.fragment),m(t.$$.fragment,1),w(t,l.parentNode,l)):t=null}else o&&t.$set(c)},i(i){r||(m(e.$$.fragment,i),t&&m(t.$$.fragment,i),r=!0)},o(i){g(e.$$.fragment,i),t&&g(t.$$.fragment,i),r=!1},d(i){v(e,i),i&&u(n),i&&u(l),t&&v(t,i)}}}function Yt(s,e,n){let{component:t}=e,{data:l}=e;const r={Search:Ot,About:Ct,Profile:Dt,Admin:Vt};return s.$$set=o=>{"component"in o&&n(0,t=o.component),"data"in o&&n(1,l=o.data)},[t,l,r]}class Ft extends W{constructor(e){super(),z(this,e,Yt,Gt,K,{component:0,data:1})}}new Ft({target:document.getElementById("app"),hydrate:!0,props:{component:window.__COMP__||"Index",data:window.__DATA__}});
