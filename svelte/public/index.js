import{S as Y,i as z,s as G,e as P,c as O,a as I,d as u,b as p,t as m,g as j,f as g,h as U,o as we,j as q,k as te,l as ne,m as v,n as M,p as N,q as E,r as ke,u as A,v as R,w as T,x as b,y as w,z as x,A as V,B as F,C as h,D as le,E as re,F as Ne,G as J}from"./@smui/common.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}})();const Pe="modulepreload",Oe=function(a){return"/"+a},oe={},K=function(e,l,t){if(!l||l.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(l.map(o=>{if(o=Oe(o),o in oe)return;oe[o]=!0;const f=o.endsWith(".css"),r=f?'[rel="stylesheet"]':"";if(!!t)for(let c=n.length-1;c>=0;c--){const _=n[c];if(_.href===o&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${r}`))return;const i=document.createElement("link");if(i.rel=f?"stylesheet":Pe,f||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),f)return new Promise((c,_)=>{i.addEventListener("load",c),i.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function fe(a,e,l){const t=a.slice();return t[11]=e[l],t}function se(a){let e,l,t,n;function o(s){a[10](s)}var f=a[2];function r(s){let i={$$slots:{default:[Me]},$$scope:{ctx:s}};return s[1]!==void 0&&(i.open=s[1]),{props:i}}return f&&(e=q(f,r(a)),te.push(()=>ne(e,"open",o))),{c(){e&&v(e.$$.fragment),t=M()},l(s){e&&N(e.$$.fragment,s),t=M()},m(s,i){e&&E(e,s,i),p(s,t,i),n=!0},p(s,i){const c={};if(i&16705&&(c.$$scope={dirty:i,ctx:s}),!l&&i&2&&(l=!0,c.open=s[1],ke(()=>l=!1)),f!==(f=s[2])){if(e){j();const _=e;g(_.$$.fragment,1,0,()=>{A(_,1)}),U()}f?(e=q(f,r(s)),te.push(()=>ne(e,"open",o)),v(e.$$.fragment),m(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else f&&e.$set(c)},i(s){n||(e&&m(e.$$.fragment,s),n=!0)},o(s){e&&g(e.$$.fragment,s),n=!1},d(s){s&&u(t),e&&A(e,s)}}}function Be(a){let e;return{c(){e=b("Book")},l(l){e=w(l,"Book")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function ae(a){let e=a[11]+"",l,t,n=a[0][a[11]]+"",o,f;return{c(){l=b(e),t=b(": "),o=b(n),f=P("br")},l(r){l=w(r,e),t=w(r,": "),o=w(r,n),f=O(r,"BR",{})},m(r,s){p(r,l,s),p(r,t,s),p(r,o,s),p(r,f,s)},p(r,s){s&1&&e!==(e=r[11]+"")&&V(l,e),s&1&&n!==(n=r[0][r[11]]+"")&&V(o,n)},d(r){r&&u(l),r&&u(t),r&&u(o),r&&u(f)}}}function Le(a){let e,l=Object.keys(a[0]),t=[];for(let n=0;n<l.length;n+=1)t[n]=ae(fe(a,l,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=M()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=M()},m(n,o){for(let f=0;f<t.length;f+=1)t[f].m(n,o);p(n,e,o)},p(n,o){if(o&1){l=Object.keys(n[0]);let f;for(f=0;f<l.length;f+=1){const r=fe(n,l,f);t[f]?t[f].p(r,o):(t[f]=ae(r),t[f].c(),t[f].m(e.parentNode,e))}for(;f<t.length;f+=1)t[f].d(1);t.length=l.length}},d(n){x(t,n),n&&u(e)}}}function ie(a){let e,l,t,n;var o=a[6];function f(r){return{props:{$$slots:{default:[Ce]},$$scope:{ctx:r}}}}return o&&(e=q(o,f(a)),e.$on("click",a[9])),t=new a[6]({props:{$$slots:{default:[Re]},$$scope:{ctx:a}}}),{c(){e&&v(e.$$.fragment),l=R(),v(t.$$.fragment)},l(r){e&&N(e.$$.fragment,r),l=T(r),N(t.$$.fragment,r)},m(r,s){e&&E(e,r,s),p(r,l,s),E(t,r,s),n=!0},p(r,s){const i={};if(s&16384&&(i.$$scope={dirty:s,ctx:r}),o!==(o=r[6])){if(e){j();const _=e;g(_.$$.fragment,1,0,()=>{A(_,1)}),U()}o?(e=q(o,f(r)),e.$on("click",r[9]),v(e.$$.fragment),m(e.$$.fragment,1),E(e,l.parentNode,l)):e=null}else o&&e.$set(i);const c={};s&16384&&(c.$$scope={dirty:s,ctx:r}),t.$set(c)},i(r){n||(e&&m(e.$$.fragment,r),m(t.$$.fragment,r),n=!0)},o(r){e&&g(e.$$.fragment,r),g(t.$$.fragment,r),n=!1},d(r){e&&A(e,r),r&&u(l),A(t,r)}}}function Se(a){let e;return{c(){e=b("Checkout Book")},l(l){e=w(l,"Checkout Book")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function Ce(a){let e,l;return e=new a[7]({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n&16384&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Ie(a){let e;return{c(){e=b("Close")},l(l){e=w(l,"Close")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function Re(a){let e,l;return e=new a[7]({props:{$$slots:{default:[Ie]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n&16384&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Te(a){let e,l,t=a[6]&&ie(a);return{c(){t&&t.c(),e=M()},l(n){t&&t.l(n),e=M()},m(n,o){t&&t.m(n,o),p(n,e,o),l=!0},p(n,o){n[6]?t?(t.p(n,o),o&64&&m(t,1)):(t=ie(n),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(j(),g(t,1,1,()=>{t=null}),U())},i(n){l||(m(t),l=!0)},o(n){g(t),l=!1},d(n){t&&t.d(n),n&&u(e)}}}function Me(a){let e,l,t,n,o,f;return e=new a[3]({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),t=new a[4]({props:{$$slots:{default:[Le]},$$scope:{ctx:a}}}),o=new a[5]({props:{$$slots:{default:[Te]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment),l=R(),v(t.$$.fragment),n=R(),v(o.$$.fragment)},l(r){N(e.$$.fragment,r),l=T(r),N(t.$$.fragment,r),n=T(r),N(o.$$.fragment,r)},m(r,s){E(e,r,s),p(r,l,s),E(t,r,s),p(r,n,s),E(o,r,s),f=!0},p(r,s){const i={};s&16384&&(i.$$scope={dirty:s,ctx:r}),e.$set(i);const c={};s&16385&&(c.$$scope={dirty:s,ctx:r}),t.$set(c);const _={};s&16705&&(_.$$scope={dirty:s,ctx:r}),o.$set(_)},i(r){f||(m(e.$$.fragment,r),m(t.$$.fragment,r),m(o.$$.fragment,r),f=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),g(o.$$.fragment,r),f=!1},d(r){A(e,r),r&&u(l),A(t,r),r&&u(n),A(o,r)}}}function De(a){let e,l,t=a[2]&&se(a);return{c(){e=P("main"),t&&t.c()},l(n){e=O(n,"MAIN",{});var o=I(e);t&&t.l(o),o.forEach(u)},m(n,o){p(n,e,o),t&&t.m(e,null),l=!0},p(n,[o]){n[2]?t?(t.p(n,o),o&4&&m(t,1)):(t=se(n),t.c(),m(t,1),t.m(e,null)):t&&(j(),g(t,1,1,()=>{t=null}),U())},i(n){l||(m(t),l=!0)},o(n){g(t),l=!1},d(n){n&&u(e),t&&t.d()}}}function He(a,e,l){let{book:t}=e,n=!0,o,f,r,s,i,c,_;we(async()=>{l(8,_=(await K(()=>import("./ClientJWT.js"),[])).getUserFromCookie);let $;$=await K(()=>import("./index2.js"),["index2.js","@smui/common.js","classAdderBuilder.js"]),l(2,o=$.default),l(3,f=$.Title),l(4,r=$.Content),l(5,s=$.Actions),$=await K(()=>import("./index3.js"),["index3.js","@smui/common.js"]),l(6,i=$.default),l(7,c=$.Label)});const d=()=>{fetch("/api/checkoutBook",{method:"POST",body:JSON.stringify({user:_(document.cookie),book:t}),headers:{"Content-Type":"application/json"}}).then($=>$.json()).then($=>{$.message=="Book checked out"&&location.reload()})};function B($){n=$,l(1,n)}return a.$$set=$=>{"book"in $&&l(0,t=$.book)},[t,n,o,f,r,s,i,c,_,d,B]}class je extends Y{constructor(e){super(),z(this,e,He,De,G,{book:0})}}function ce(a,e,l){const t=a.slice();return t[26]=e[l],t}function ue(a,e,l){const t=a.slice();return t[29]=e[l],t}function $e(a,e,l){const t=a.slice();return t[32]=e[l],t}function _e(a){let e,l;return e=new a[6]({props:{stickyHeader:!0,style:"width: 100%;",$$slots:{paginate:[rt],default:[ze]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n[0]&107071|n[1]&16&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Ue(a){let e=a[32]+"",l;return{c(){l=b(e)},l(t){l=w(t,e)},m(t,n){p(t,l,n)},p(t,n){n[0]&1&&e!==(e=t[32]+"")&&V(l,e)},d(t){t&&u(l)}}}function me(a){let e,l;return e=new a[10]({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n[0]&1|n[1]&16&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Ve(a){let e,l,t=Object.keys(a[0][0]),n=[];for(let f=0;f<t.length;f+=1)n[f]=me($e(a,t,f));const o=f=>g(n[f],1,1,()=>{n[f]=null});return{c(){for(let f=0;f<n.length;f+=1)n[f].c();e=M()},l(f){for(let r=0;r<n.length;r+=1)n[r].l(f);e=M()},m(f,r){for(let s=0;s<n.length;s+=1)n[s].m(f,r);p(f,e,r),l=!0},p(f,r){if(r[0]&1){t=Object.keys(f[0][0]);let s;for(s=0;s<t.length;s+=1){const i=$e(f,t,s);n[s]?(n[s].p(i,r),m(n[s],1)):(n[s]=me(i),n[s].c(),m(n[s],1),n[s].m(e.parentNode,e))}for(j(),s=t.length;s<n.length;s+=1)o(s);U()}},i(f){if(!l){for(let r=0;r<t.length;r+=1)m(n[r]);l=!0}},o(f){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)g(n[r]);l=!1},d(f){x(n,f),f&&u(e)}}}function Fe(a){let e,l;return e=new a[9]({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n[0]&1|n[1]&16&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Je(a){let e=JSON.stringify(a[26][a[29]])+"",l;return{c(){l=b(e)},l(t){l=w(t,e)},m(t,n){p(t,l,n)},p(t,n){n[0]&65536&&e!==(e=JSON.stringify(t[26][t[29]])+"")&&V(l,e)},d(t){t&&u(l)}}}function pe(a){let e,l;return e=new a[10]({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n[0]&65536|n[1]&16&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function qe(a){let e,l,t=Object.keys(a[26]),n=[];for(let f=0;f<t.length;f+=1)n[f]=pe(ue(a,t,f));const o=f=>g(n[f],1,1,()=>{n[f]=null});return{c(){for(let f=0;f<n.length;f+=1)n[f].c();e=R()},l(f){for(let r=0;r<n.length;r+=1)n[r].l(f);e=T(f)},m(f,r){for(let s=0;s<n.length;s+=1)n[s].m(f,r);p(f,e,r),l=!0},p(f,r){if(r[0]&65536){t=Object.keys(f[26]);let s;for(s=0;s<t.length;s+=1){const i=ue(f,t,s);n[s]?(n[s].p(i,r),m(n[s],1)):(n[s]=pe(i),n[s].c(),m(n[s],1),n[s].m(e.parentNode,e))}for(j(),s=t.length;s<n.length;s+=1)o(s);U()}},i(f){if(!l){for(let r=0;r<t.length;r+=1)m(n[r]);l=!0}},o(f){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)g(n[r]);l=!1},d(f){x(n,f),f&&u(e)}}}function ge(a){let e,l,t;function n(){return a[23](a[26])}var o=a[9];function f(r){return{props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}}return o&&(e=q(o,f(a)),e.$on("click",n)),{c(){e&&v(e.$$.fragment),l=M()},l(r){e&&N(e.$$.fragment,r),l=M()},m(r,s){e&&E(e,r,s),p(r,l,s),t=!0},p(r,s){a=r;const i={};if(s[0]&65536|s[1]&16&&(i.$$scope={dirty:s,ctx:a}),o!==(o=a[9])){if(e){j();const c=e;g(c.$$.fragment,1,0,()=>{A(c,1)}),U()}o?(e=q(o,f(a)),e.$on("click",n),v(e.$$.fragment),m(e.$$.fragment,1),E(e,l.parentNode,l)):e=null}else o&&e.$set(i)},i(r){t||(e&&m(e.$$.fragment,r),t=!0)},o(r){e&&g(e.$$.fragment,r),t=!1},d(r){r&&u(l),e&&A(e,r)}}}function Ye(a){let e,l,t=a[16],n=[];for(let f=0;f<t.length;f+=1)n[f]=ge(ce(a,t,f));const o=f=>g(n[f],1,1,()=>{n[f]=null});return{c(){for(let f=0;f<n.length;f+=1)n[f].c();e=M()},l(f){for(let r=0;r<n.length;r+=1)n[r].l(f);e=M()},m(f,r){for(let s=0;s<n.length;s+=1)n[s].m(f,r);p(f,e,r),l=!0},p(f,r){if(r[0]&197120){t=f[16];let s;for(s=0;s<t.length;s+=1){const i=ce(f,t,s);n[s]?(n[s].p(i,r),m(n[s],1)):(n[s]=ge(i),n[s].c(),m(n[s],1),n[s].m(e.parentNode,e))}for(j(),s=t.length;s<n.length;s+=1)o(s);U()}},i(f){if(!l){for(let r=0;r<t.length;r+=1)m(n[r]);l=!0}},o(f){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)g(n[r]);l=!1},d(f){x(n,f),f&&u(e)}}}function ze(a){let e,l,t,n;return e=new a[7]({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),t=new a[8]({props:{$$slots:{default:[Ye]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment),l=R(),v(t.$$.fragment)},l(o){N(e.$$.fragment,o),l=T(o),N(t.$$.fragment,o)},m(o,f){E(e,o,f),p(o,l,f),E(t,o,f),n=!0},p(o,f){const r={};f[0]&1|f[1]&16&&(r.$$scope={dirty:f,ctx:o}),e.$set(r);const s={};f[0]&66048|f[1]&16&&(s.$$scope={dirty:f,ctx:o}),t.$set(s)},i(o){n||(m(e.$$.fragment,o),m(t.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),g(t.$$.fragment,o),n=!1},d(o){A(e,o),o&&u(l),A(t,o)}}}function he(a){let e,l,t,n,o,f,r,s;return e=new a[15]({props:{class:"material-icons",action:"first-page",title:"First page",disabled:a[2]===0,$$slots:{default:[Ge]},$$scope:{ctx:a}}}),e.$on("click",a[19]),t=new a[15]({props:{class:"material-icons",action:"prev-page",title:"Prev page",disabled:a[2]===0,$$slots:{default:[Ke]},$$scope:{ctx:a}}}),t.$on("click",a[20]),o=new a[15]({props:{class:"material-icons",action:"next-page",title:"Next page",disabled:a[2]===a[3],$$slots:{default:[We]},$$scope:{ctx:a}}}),o.$on("click",a[21]),r=new a[15]({props:{class:"material-icons",action:"last-page",title:"Last page",disabled:a[2]===a[3],$$slots:{default:[Qe]},$$scope:{ctx:a}}}),r.$on("click",a[22]),{c(){v(e.$$.fragment),l=R(),v(t.$$.fragment),n=R(),v(o.$$.fragment),f=R(),v(r.$$.fragment)},l(i){N(e.$$.fragment,i),l=T(i),N(t.$$.fragment,i),n=T(i),N(o.$$.fragment,i),f=T(i),N(r.$$.fragment,i)},m(i,c){E(e,i,c),p(i,l,c),E(t,i,c),p(i,n,c),E(o,i,c),p(i,f,c),E(r,i,c),s=!0},p(i,c){const _={};c[0]&4&&(_.disabled=i[2]===0),c[1]&16&&(_.$$scope={dirty:c,ctx:i}),e.$set(_);const d={};c[0]&4&&(d.disabled=i[2]===0),c[1]&16&&(d.$$scope={dirty:c,ctx:i}),t.$set(d);const B={};c[0]&12&&(B.disabled=i[2]===i[3]),c[1]&16&&(B.$$scope={dirty:c,ctx:i}),o.$set(B);const $={};c[0]&12&&($.disabled=i[2]===i[3]),c[1]&16&&($.$$scope={dirty:c,ctx:i}),r.$set($)},i(i){s||(m(e.$$.fragment,i),m(t.$$.fragment,i),m(o.$$.fragment,i),m(r.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),g(o.$$.fragment,i),g(r.$$.fragment,i),s=!1},d(i){A(e,i),i&&u(l),A(t,i),i&&u(n),A(o,i),i&&u(f),A(r,i)}}}function Ge(a){let e;return{c(){e=b("first_page")},l(l){e=w(l,"first_page")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function Ke(a){let e;return{c(){e=b("chevron_left")},l(l){e=w(l,"chevron_left")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function We(a){let e;return{c(){e=b("chevron_right")},l(l){e=w(l,"chevron_right")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function Qe(a){let e;return{c(){e=b("last_page")},l(l){e=w(l,"last_page")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function Xe(a){let e,l,t=a[15]&&he(a);return{c(){t&&t.c(),e=M()},l(n){t&&t.l(n),e=M()},m(n,o){t&&t.m(n,o),p(n,e,o),l=!0},p(n,o){n[15]?t?(t.p(n,o),o[0]&32768&&m(t,1)):(t=he(n),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(j(),g(t,1,1,()=>{t=null}),U())},i(n){l||(m(t),l=!0)},o(n){g(t),l=!1},d(n){t&&t.d(n),n&&u(e)}}}function Ze(a){let e;return{c(){e=b("Rows Per Page")},l(l){e=w(l,"Rows Per Page")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function de(a){let e,l,t;function n(f){a[18](f)}let o={variant:"outlined",noLabel:!0,$$slots:{default:[tt]},$$scope:{ctx:a}};return a[1]!==void 0&&(o.value=a[1]),e=new a[13]({props:o}),te.push(()=>ne(e,"value",n)),{c(){v(e.$$.fragment)},l(f){N(e.$$.fragment,f)},m(f,r){E(e,f,r),t=!0},p(f,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:f}),!l&&r[0]&2&&(l=!0,s.value=f[1],ke(()=>l=!1)),e.$set(s)},i(f){t||(m(e.$$.fragment,f),t=!0)},o(f){g(e.$$.fragment,f),t=!1},d(f){A(e,f)}}}function ye(a){let e;return{c(){e=b("5")},l(l){e=w(l,"5")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function xe(a){let e;return{c(){e=b("10")},l(l){e=w(l,"10")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function et(a){let e;return{c(){e=b("15")},l(l){e=w(l,"15")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function tt(a){let e,l,t,n,o,f;return e=new a[14]({props:{value:5,$$slots:{default:[ye]},$$scope:{ctx:a}}}),t=new a[14]({props:{value:10,$$slots:{default:[xe]},$$scope:{ctx:a}}}),o=new a[14]({props:{value:15,$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment),l=R(),v(t.$$.fragment),n=R(),v(o.$$.fragment)},l(r){N(e.$$.fragment,r),l=T(r),N(t.$$.fragment,r),n=T(r),N(o.$$.fragment,r)},m(r,s){E(e,r,s),p(r,l,s),E(t,r,s),p(r,n,s),E(o,r,s),f=!0},p(r,s){const i={};s[1]&16&&(i.$$scope={dirty:s,ctx:r}),e.$set(i);const c={};s[1]&16&&(c.$$scope={dirty:s,ctx:r}),t.$set(c);const _={};s[1]&16&&(_.$$scope={dirty:s,ctx:r}),o.$set(_)},i(r){f||(m(e.$$.fragment,r),m(t.$$.fragment,r),m(o.$$.fragment,r),f=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),g(o.$$.fragment,r),f=!1},d(r){A(e,r),r&&u(l),A(t,r),r&&u(n),A(o,r)}}}function nt(a){let e,l,t,n;e=new a[12]({props:{$$slots:{default:[Ze]},$$scope:{ctx:a}}});let o=a[13]&&de(a);return{c(){v(e.$$.fragment),l=R(),o&&o.c(),t=M()},l(f){N(e.$$.fragment,f),l=T(f),o&&o.l(f),t=M()},m(f,r){E(e,f,r),p(f,l,r),o&&o.m(f,r),p(f,t,r),n=!0},p(f,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:f}),e.$set(s),f[13]?o?(o.p(f,r),r[0]&8192&&m(o,1)):(o=de(f),o.c(),m(o,1),o.m(t.parentNode,t)):o&&(j(),g(o,1,1,()=>{o=null}),U())},i(f){n||(m(e.$$.fragment,f),m(o),n=!0)},o(f){g(e.$$.fragment,f),g(o),n=!1},d(f){A(e,f),f&&u(l),o&&o.d(f),f&&u(t)}}}function lt(a){let e=a[5]+1+"",l,t,n,o,f=a[0].length+"",r;return{c(){l=b(e),t=b("-"),n=b(a[4]),o=b(" of "),r=b(f)},l(s){l=w(s,e),t=w(s,"-"),n=w(s,a[4]),o=w(s," of "),r=w(s,f)},m(s,i){p(s,l,i),p(s,t,i),p(s,n,i),p(s,o,i),p(s,r,i)},p(s,i){i[0]&32&&e!==(e=s[5]+1+"")&&V(l,e),i[0]&16&&V(n,s[4]),i[0]&1&&f!==(f=s[0].length+"")&&V(r,f)},d(s){s&&u(l),s&&u(t),s&&u(n),s&&u(o),s&&u(r)}}}function rt(a){let e,l;return e=new a[11]({props:{slot:"paginate",$$slots:{total:[lt],rowsPerPage:[nt],default:[Xe]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,n){const o={};n[0]&41023|n[1]&16&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function ot(a){let e,l,t=a[6]&&_e(a);return{c(){e=P("main"),t&&t.c()},l(n){e=O(n,"MAIN",{});var o=I(e);t&&t.l(o),o.forEach(u)},m(n,o){p(n,e,o),t&&t.m(e,null),l=!0},p(n,o){n[6]?t?(t.p(n,o),o[0]&64&&m(t,1)):(t=_e(n),t.c(),m(t,1),t.m(e,null)):t&&(j(),g(t,1,1,()=>{t=null}),U())},i(n){l||(m(t),l=!0)},o(n){g(t),l=!1},d(n){n&&u(e),t&&t.d()}}}function ft(a,e,l){let t,n,o,f,{data:r}=e;r.length||(r=[{Error:"No records returned"}]);let s,i,c,_,d,B,$,k,L,D;we(async()=>{let C;C=await K(()=>import("./@smui/common.js").then(ee=>ee.ao),[]),l(6,s=C.default),l(7,i=C.Head),l(8,c=C.Body),l(9,_=C.Row),l(10,d=C.Cell),l(11,B=C.Pagination),l(12,$=C.Label),C=await K(()=>import("./index4.js"),["index4.js","@smui/common.js","classAdderBuilder.js"]),l(13,k=C.default),l(14,L=C.Option),C=await K(()=>import("./@smui/common.js").then(ee=>ee.ap),[]),l(15,D=C.default)});let H=5,S=0;function W(C){new je({target:document.body,props:{book:C}})}function Q(C){H=C,l(1,H)}const X=()=>l(2,S=0),Z=()=>l(2,S--,S),y=()=>l(2,S++,S),Ee=()=>l(2,S=f),Ae=C=>{W(C)};return a.$$set=C=>{"data"in C&&l(0,r=C.data)},a.$$.update=()=>{a.$$.dirty[0]&3&&l(3,f=Math.max(Math.ceil(r.length/H)-1,0)),a.$$.dirty[0]&12&&S>f&&l(2,S=f),a.$$.dirty[0]&6&&l(5,t=S*H),a.$$.dirty[0]&35&&l(4,n=Math.min(t+H,r.length)),a.$$.dirty[0]&49&&l(16,o=r.slice(t,n))},[r,H,S,f,n,t,s,i,c,_,d,B,$,k,L,D,o,W,Q,X,Z,y,Ee,Ae]}class ve extends Y{constructor(e){super(),z(this,e,ft,ot,G,{data:0},null,[-1,-1])}}function st(a){let e,l,t,n,o,f,r,s,i,c,_,d,B;return c=new ve({props:{data:a[0]}}),{c(){e=P("main"),l=P("h1"),t=b("LibraSys"),n=R(),o=P("input"),f=R(),r=P("button"),s=b("Search"),i=R(),v(c.$$.fragment),this.h()},l($){e=O($,"MAIN",{});var k=I(e);l=O(k,"H1",{});var L=I(l);t=w(L,"LibraSys"),L.forEach(u),n=T(k),o=O(k,"INPUT",{type:!0,placeholder:!0}),f=T(k),r=O(k,"BUTTON",{});var D=I(r);s=w(D,"Search"),D.forEach(u),i=T(k),N(c.$$.fragment,k),k.forEach(u),this.h()},h(){F(o,"type","search"),F(o,"placeholder","Search...")},m($,k){p($,e,k),h(e,l),h(l,t),h(e,n),h(e,o),le(o,a[1]),h(e,f),h(e,r),h(r,s),h(e,i),E(c,e,null),_=!0,d||(B=[re(o,"input",a[2]),re(r,"click",a[3])],d=!0)},p($,[k]){k&2&&le(o,$[1]);const L={};k&1&&(L.data=$[0]),c.$set(L)},i($){_||(m(c.$$.fragment,$),_=!0)},o($){g(c.$$.fragment,$),_=!1},d($){$&&u(e),A(c),d=!1,Ne(B)}}}function at(a,e,l){let{data:t}=e,n="";function o(){n=this.value,l(1,n)}const f=()=>location.href=`/search?book=${n}`;return a.$$set=r=>{"data"in r&&l(0,t=r.data)},[t,n,o,f]}class it extends Y{constructor(e){super(),z(this,e,at,st,G,{data:0})}}function ct(a){let e,l,t;return{c(){e=P("main"),l=P("h1"),t=b("About")},l(n){e=O(n,"MAIN",{});var o=I(e);l=O(o,"H1",{});var f=I(l);t=w(f,"About"),f.forEach(u),o.forEach(u)},m(n,o){p(n,e,o),h(e,l),h(l,t)},p:J,i:J,o:J,d(n){n&&u(e)}}}class ut extends Y{constructor(e){super(),z(this,e,null,ct,G,{})}}function be(a){let e,l,t;return{c(){e=P("h1"),l=b("You're an admin!"),t=P("br")},l(n){e=O(n,"H1",{});var o=I(e);l=w(o,"You're an admin!"),o.forEach(u),t=O(n,"BR",{})},m(n,o){p(n,e,o),h(e,l),p(n,t,o)},d(n){n&&u(e),n&&u(t)}}}function $t(a){let e,l,t,n=a[0].fName+"",o,f,r,s,i,c,_,d=JSON.stringify(a[0],null,2)+"",B,$=a[0].isAdmin&&be();return{c(){e=P("main"),l=P("h1"),t=b("Hello, "),o=b(n),f=b("!"),r=P("br"),s=R(),$&&$.c(),i=b(`
    Your details: `),c=P("pre"),_=P("code"),B=b(d)},l(k){e=O(k,"MAIN",{});var L=I(e);l=O(L,"H1",{});var D=I(l);t=w(D,"Hello, "),o=w(D,n),f=w(D,"!"),D.forEach(u),r=O(L,"BR",{}),s=T(L),$&&$.l(L),i=w(L,`
    Your details: `),c=O(L,"PRE",{});var H=I(c);_=O(H,"CODE",{});var S=I(_);B=w(S,d),S.forEach(u),H.forEach(u),L.forEach(u)},m(k,L){p(k,e,L),h(e,l),h(l,t),h(l,o),h(l,f),h(e,r),h(e,s),$&&$.m(e,null),h(e,i),h(e,c),h(c,_),h(_,B)},p(k,[L]){L&1&&n!==(n=k[0].fName+"")&&V(o,n),k[0].isAdmin?$||($=be(),$.c(),$.m(e,i)):$&&($.d(1),$=null),L&1&&d!==(d=JSON.stringify(k[0],null,2)+"")&&V(B,d)},i:J,o:J,d(k){k&&u(e),$&&$.d()}}}function _t(a,e,l){let{data:t}=e;return a.$$set=n=>{"data"in n&&l(0,t=n.data)},[t]}class mt extends Y{constructor(e){super(),z(this,e,_t,$t,G,{data:0})}}function pt(a){let e,l,t,n,o,f,r,s,i,c;return i=new ve({props:{data:a[0]}}),{c(){e=P("main"),l=P("h1"),t=b("Admin panel"),n=R(),o=P("button"),f=b("Create new entry"),r=P("br"),s=R(),v(i.$$.fragment)},l(_){e=O(_,"MAIN",{});var d=I(e);l=O(d,"H1",{});var B=I(l);t=w(B,"Admin panel"),B.forEach(u),n=T(d),o=O(d,"BUTTON",{});var $=I(o);f=w($,"Create new entry"),$.forEach(u),r=O(d,"BR",{}),s=T(d),N(i.$$.fragment,d),d.forEach(u)},m(_,d){p(_,e,d),h(e,l),h(l,t),h(e,n),h(e,o),h(o,f),h(e,r),h(e,s),E(i,e,null),c=!0},p(_,[d]){const B={};d&1&&(B.data=_[0]),i.$set(B)},i(_){c||(m(i.$$.fragment,_),c=!0)},o(_){g(i.$$.fragment,_),c=!1},d(_){_&&u(e),A(i)}}}function gt(a,e,l){let{data:t}=e;return a.$$set=n=>{"data"in n&&l(0,t=n.data)},[t]}class ht extends Y{constructor(e){super(),z(this,e,gt,pt,G,{data:0})}}function dt(a){let e,l,t,n,o,f,r,s,i,c,_,d,B,$,k,L;return{c(){e=P("main"),l=P("div"),t=P("a"),n=b("Home"),o=R(),f=P("a"),r=b("Search"),s=R(),i=P("a"),c=b("Login"),_=R(),d=P("a"),B=b("Profile"),$=R(),k=P("a"),L=b("About"),this.h()},l(D){e=O(D,"MAIN",{});var H=I(e);l=O(H,"DIV",{class:!0});var S=I(l);t=O(S,"A",{href:!0});var W=I(t);n=w(W,"Home"),W.forEach(u),o=T(S),f=O(S,"A",{href:!0});var Q=I(f);r=w(Q,"Search"),Q.forEach(u),s=T(S),i=O(S,"A",{href:!0});var X=I(i);c=w(X,"Login"),X.forEach(u),_=T(S),d=O(S,"A",{href:!0});var Z=I(d);B=w(Z,"Profile"),Z.forEach(u),$=T(S),k=O(S,"A",{href:!0});var y=I(k);L=w(y,"About"),y.forEach(u),S.forEach(u),H.forEach(u),this.h()},h(){F(t,"href","/"),F(f,"href","/search"),F(i,"href","/login"),F(d,"href","/profile"),F(k,"href","/about"),F(l,"class","nav")},m(D,H){p(D,e,H),h(e,l),h(l,t),h(t,n),h(l,o),h(l,f),h(f,r),h(l,s),h(l,i),h(i,c),h(l,_),h(l,d),h(d,B),h(l,$),h(l,k),h(k,L)},p:J,i:J,o:J,d(D){D&&u(e)}}}class bt extends Y{constructor(e){super(),z(this,e,null,dt,G,{})}}function wt(a){let e,l,t,n,o;e=new bt({});var f=a[2][a[0]];function r(s){return{props:{data:s[1]}}}return f&&(t=q(f,r(a))),{c(){v(e.$$.fragment),l=R(),t&&v(t.$$.fragment),n=M()},l(s){N(e.$$.fragment,s),l=T(s),t&&N(t.$$.fragment,s),n=M()},m(s,i){E(e,s,i),p(s,l,i),t&&E(t,s,i),p(s,n,i),o=!0},p(s,[i]){const c={};if(i&2&&(c.data=s[1]),f!==(f=s[2][s[0]])){if(t){j();const _=t;g(_.$$.fragment,1,0,()=>{A(_,1)}),U()}f?(t=q(f,r(s)),v(t.$$.fragment),m(t.$$.fragment,1),E(t,n.parentNode,n)):t=null}else f&&t.$set(c)},i(s){o||(m(e.$$.fragment,s),t&&m(t.$$.fragment,s),o=!0)},o(s){g(e.$$.fragment,s),t&&g(t.$$.fragment,s),o=!1},d(s){A(e,s),s&&u(l),s&&u(n),t&&A(t,s)}}}function kt(a,e,l){let{component:t}=e,{data:n}=e;const o={Search:it,About:ut,Profile:mt,Admin:ht};return a.$$set=f=>{"component"in f&&l(0,t=f.component),"data"in f&&l(1,n=f.data)},[t,n,o]}class vt extends Y{constructor(e){super(),z(this,e,kt,wt,G,{component:0,data:1})}}new vt({target:document.getElementById("app"),hydrate:!0,props:{component:window.__COMP__||"Index",data:window.__DATA__}});
