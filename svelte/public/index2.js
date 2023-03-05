import{_ as je,H as ge,M as Ye,S as Qe,i as Xe,s as Ze,O as _e,P as U,ac as x,Q as Z,ad as Se,a as $,e as Y,g as ee,c as Q,b as X,f as v,R as P,h as Re,j as ae,k as z,m as A,V as te,T as pe,U as Je,W as Ce,X as Ee,Y as Ae,Z as ce,o as ve,q as Oe,r as xe,$ as Ie,a0 as $e,a1 as et,ah as ye,a9 as de,aj as De,a2 as w,v as tt,a3 as ne,ai as ie,a4 as nt,a5 as it,a6 as at,n as ot,al as st,a8 as rt,E as lt}from"./@smui/common.js";import{c as se}from"./classAdderBuilder.js";/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ct(e){return e?e.scrollHeight>e.offsetHeight:!1}function dt(e){return e?e.scrollTop===0:!1}function ut(e){return e?Math.ceil(e.scrollHeight-e.scrollTop)===e.clientHeight:!1}function ft(e){var n=new Set;return[].forEach.call(e,function(t){return n.add(t.offsetTop)}),n.size>1}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mt=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(n,t){var a=this;this.cancel(n);var c=requestAnimationFrame(function(f){a.rafIDs.delete(n),t(f)});this.rafIDs.set(n,c)},e.prototype.cancel=function(n){var t=this.rafIDs.get(n);t&&(cancelAnimationFrame(t),this.rafIDs.delete(n))},e.prototype.cancelAll=function(){var n=this;this.rafIDs.forEach(function(t,a){n.cancel(a)})},e.prototype.getQueue=function(){var n=[];return this.rafIDs.forEach(function(t,a){n.push(a)}),n},e}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},j={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},ue={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oe;(function(e){e.POLL_SCROLL_POS="poll_scroll_position",e.POLL_LAYOUT_CHANGE="poll_layout_change"})(oe||(oe={}));var ht=function(e){je(n,e);function n(t){var a=e.call(this,ge(ge({},n.defaultAdapter),t))||this;return a.dialogOpen=!1,a.isFullscreen=!1,a.animationFrame=0,a.animationTimer=0,a.escapeKeyAction=j.CLOSE_ACTION,a.scrimClickAction=j.CLOSE_ACTION,a.autoStackButtons=!0,a.areButtonsStacked=!1,a.suppressDefaultPressSelector=j.SUPPRESS_DEFAULT_PRESS_SELECTOR,a.animFrame=new mt,a.contentScrollHandler=function(){a.handleScrollEvent()},a.windowResizeHandler=function(){a.layout()},a.windowOrientationChangeHandler=function(){a.layout()},a}return Object.defineProperty(n,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){this.adapter.hasClass(l.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(l.FULLSCREEN)},n.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},n.prototype.open=function(t){var a=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(l.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(l.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){a.adapter.addClass(l.OPEN),a.adapter.addBodyClass(l.SCROLL_LOCK),a.layout(),a.animationTimer=setTimeout(function(){a.handleAnimationTimerEnd(),a.adapter.trapFocus(a.adapter.getInitialFocusEl()),a.adapter.notifyOpened()},ue.DIALOG_ANIMATION_OPEN_TIME_MS)})},n.prototype.close=function(t){var a=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(l.CLOSING),this.adapter.removeClass(l.OPEN),this.adapter.removeBodyClass(l.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){a.adapter.releaseFocus(),a.handleAnimationTimerEnd(),a.adapter.notifyClosed(t)},ue.DIALOG_ANIMATION_CLOSE_TIME_MS))},n.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(l.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(l.SURFACE_SCRIM_SHOWN)})},n.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(l.SURFACE_SCRIM_SHOWN),this.adapter.addClass(l.SURFACE_SCRIM_HIDING)},n.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(l.SURFACE_SCRIM_HIDING),this.adapter.removeClass(l.SURFACE_SCRIM_SHOWING)},n.prototype.isOpen=function(){return this.dialogOpen},n.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},n.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},n.prototype.getScrimClickAction=function(){return this.scrimClickAction},n.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},n.prototype.getAutoStackButtons=function(){return this.autoStackButtons},n.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},n.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},n.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},n.prototype.layout=function(){var t=this;this.animFrame.request(oe.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},n.prototype.handleClick=function(t){var a=this.adapter.eventTargetMatches(t.target,j.SCRIM_SELECTOR);if(a&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var c=this.adapter.getActionFromEvent(t);c&&this.close(c)}},n.prototype.handleKeydown=function(t){var a=t.key==="Enter"||t.keyCode===13;if(a){var c=this.adapter.getActionFromEvent(t);if(!c){var f=t.composedPath?t.composedPath()[0]:t.target,_=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(f,this.suppressDefaultPressSelector):!0;a&&_&&this.adapter.clickDefaultButton()}}},n.prototype.handleDocumentKeydown=function(t){var a=t.key==="Escape"||t.keyCode===27;a&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},n.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(oe.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},n.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},n.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(l.OPENING),this.adapter.removeClass(l.CLOSING)},n.prototype.runNextAnimationFrame=function(t){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(t,0)})},n.prototype.detectStackedButtons=function(){this.adapter.removeClass(l.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(l.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},n.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(l.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(l.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},n.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(l.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(l.SCROLL_DIVIDER_HEADER):this.adapter.addClass(l.SCROLL_DIVIDER_HEADER)},n.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(l.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(l.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(l.SCROLL_DIVIDER_FOOTER)},n}(Ye);const{document:gt,window:Le}=at,_t=e=>({}),Te=e=>({});function Fe(e){let n,t,a;return{c(){n=Y("div"),this.h()},l(c){n=Q(c,"DIV",{class:!0}),X(n).forEach(v),this.h()},h(){Re(n,"class","mdc-dialog__surface-scrim")},m(c,f){ae(c,n,f),t||(a=A(n,"transitionend",e[32]),t=!0)},p:ot,d(c){c&&v(n),t=!1,a()}}}function St(e){let n,t,a,c,f,_,L,T,E,F,R,b,h,M,K;const g=e[29].default,m=_e(g,e,e[28],null);let u=e[5]&&Fe(e),O=[{class:_=U({[e[9]]:!0,"mdc-dialog__surface":!0})},{role:"alertdialog"},{"aria-modal":"true"},x(e[19],"surface$")],p={};for(let i=0;i<O.length;i+=1)p=Z(p,O[i]);let I=[{class:L=U({[e[8]]:!0,"mdc-dialog__container":!0})},x(e[19],"container$")],y={};for(let i=0;i<I.length;i+=1)y=Z(y,I[i]);let H=[{class:F=U({[e[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!e[4],"mdc-dialog--fullscreen":e[5],"mdc-dialog--sheet":e[6],"mdc-dialog--no-content-padding":e[7],"smui-dialog--selection":e[3],...e[12]})},{role:"alertdialog"},{"aria-modal":"true"},Se(e[19],["container$","surface$"])],D={};for(let i=0;i<H.length;i+=1)D=Z(D,H[i]);const k=e[29].over,d=_e(k,e,e[28],Te);return{c(){n=$(),t=Y("div"),a=Y("div"),c=Y("div"),m&&m.c(),f=$(),u&&u.c(),T=$(),E=Y("div"),b=$(),d&&d.c(),this.h()},l(i){n=ee(i),t=Q(i,"DIV",{class:!0,role:!0,"aria-modal":!0});var s=X(t);a=Q(s,"DIV",{class:!0});var N=X(a);c=Q(N,"DIV",{class:!0,role:!0,"aria-modal":!0});var C=X(c);m&&m.l(C),f=ee(C),u&&u.l(C),C.forEach(v),N.forEach(v),T=ee(s),E=Q(s,"DIV",{class:!0}),X(E).forEach(v),s.forEach(v),b=ee(i),d&&d.l(i),this.h()},h(){P(c,p),P(a,y),Re(E,"class","mdc-dialog__scrim"),P(t,D)},m(i,s){ae(i,n,s),ae(i,t,s),z(t,a),z(a,c),m&&m.m(c,null),z(c,f),u&&u.m(c,null),z(t,T),z(t,E),e[33](t),ae(i,b,s),d&&d.m(i,s),h=!0,M||(K=[A(Le,"resize",e[30]),A(Le,"orientationchange",e[31]),A(gt.body,"keydown",function(){te(e[10]&&e[10].handleDocumentKeydown.bind(e[10]))&&(e[10]&&e[10].handleDocumentKeydown.bind(e[10])).apply(this,arguments)}),pe(R=Je.call(null,t,e[1])),pe(e[13].call(null,t)),A(t,"SMUIDialog:opening",e[16]),A(t,"SMUIDialog:opened",e[17]),A(t,"SMUIDialog:closed",e[18]),A(t,"click",function(){te(e[10]&&e[10].handleClick.bind(e[10]))&&(e[10]&&e[10].handleClick.bind(e[10])).apply(this,arguments)}),A(t,"keydown",function(){te(e[10]&&e[10].handleKeydown.bind(e[10]))&&(e[10]&&e[10].handleKeydown.bind(e[10])).apply(this,arguments)})],M=!0)},p(i,s){e=i,m&&m.p&&(!h||s[0]&268435456)&&Ce(m,g,e,e[28],h?Ae(g,e[28],s,null):Ee(e[28]),null),e[5]?u?u.p(e,s):(u=Fe(e),u.c(),u.m(c,null)):u&&(u.d(1),u=null),P(c,p=ce(O,[(!h||s[0]&512&&_!==(_=U({[e[9]]:!0,"mdc-dialog__surface":!0})))&&{class:_},{role:"alertdialog"},{"aria-modal":"true"},s[0]&524288&&x(e[19],"surface$")])),P(a,y=ce(I,[(!h||s[0]&256&&L!==(L=U({[e[8]]:!0,"mdc-dialog__container":!0})))&&{class:L},s[0]&524288&&x(e[19],"container$")])),P(t,D=ce(H,[(!h||s[0]&4348&&F!==(F=U({[e[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!e[4],"mdc-dialog--fullscreen":e[5],"mdc-dialog--sheet":e[6],"mdc-dialog--no-content-padding":e[7],"smui-dialog--selection":e[3],...e[12]})))&&{class:F},{role:"alertdialog"},{"aria-modal":"true"},s[0]&524288&&Se(e[19],["container$","surface$"])])),R&&te(R.update)&&s[0]&2&&R.update.call(null,e[1]),d&&d.p&&(!h||s[0]&268435456)&&Ce(d,k,e,e[28],h?Ae(k,e[28],s,_t):Ee(e[28]),Te)},i(i){h||(ve(m,i),ve(d,i),h=!0)},o(i){Oe(m,i),Oe(d,i),h=!1},d(i){i&&v(n),i&&v(t),m&&m.d(i),u&&u.d(),e[33](null),i&&v(b),d&&d.d(i),M=!1,xe(K)}}}function pt(e,n,t){const a=["use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","sheet","noContentPadding","container$class","surface$class","isOpen","setOpen","layout","getElement"];let c=Ie(n,a),f,_,{$$slots:L={},$$scope:T}=n;var E;const{FocusTrap:F}=st,{closest:R,matches:b}=rt,h=$e(et());let{use:M=[]}=n,{class:K=""}=n,{open:g=!1}=n,{selection:m=!1}=n,{escapeKeyAction:u="close"}=n,{scrimClickAction:O="close"}=n,{autoStackButtons:p=!0}=n,{fullscreen:I=!1}=n,{sheet:y=!1}=n,{noContentPadding:H=!1}=n,{container$class:D=""}=n,{surface$class:k=""}=n,d,i,s={},N,C=De(!1);ye(e,C,o=>t(37,_=o));let J=de("SMUI:dialog:aboveFullscreen"),G=(E=de("SMUI:dialog:aboveFullscreenShown"))!==null&&E!==void 0?E:De(!1);ye(e,G,o=>t(27,f=o));let fe=de("SMUI:addLayoutListener"),re,V=[],be=o=>(V.push(o),()=>{const r=V.indexOf(o);r>=0&&V.splice(r,1)});w("SMUI:dialog:actions:reversed",C),w("SMUI:addLayoutListener",be),w("SMUI:dialog:selection",m),w("SMUI:dialog:aboveFullscreen",J||I),w("SMUI:dialog:aboveFullscreenShown",G),y&&w("SMUI:icon-button:context","dialog:sheet"),fe&&(re=fe(he));let le=f;tt(()=>{var o;return N=new F(d,{initialFocusEl:(o=me())!==null&&o!==void 0?o:void 0}),t(10,i=new ht({addBodyClass:r=>document.body.classList.add(r),addClass:He,areButtonsStacked:()=>ft(Ne()),clickDefaultButton:()=>{const r=Be();r&&r.click()},eventTargetMatches:(r,S)=>r?b(r,S):!1,getActionFromEvent:r=>{if(!r.target)return"";const S=R(r.target,"[data-mdc-dialog-action]");return S&&S.getAttribute("data-mdc-dialog-action")},getInitialFocusEl:me,hasClass:Me,isContentScrollable:()=>ct(W()),notifyClosed:r=>{t(0,g=!1),ne(B(),"SMUIDialog:closed",r?{action:r}:{},void 0,!0)},notifyClosing:r=>ne(B(),"SMUIDialog:closing",r?{action:r}:{},void 0,!0),notifyOpened:()=>ne(B(),"SMUIDialog:opened",{},void 0,!0),notifyOpening:()=>ne(B(),"SMUIDialog:opening",{},void 0,!0),releaseFocus:()=>N.releaseFocus(),removeBodyClass:r=>document.body.classList.remove(r),removeClass:ke,reverseButtons:()=>{ie(C,_=!0,_)},trapFocus:()=>N.trapFocus(),registerContentEventHandler:(r,S)=>{const q=W();q instanceof HTMLElement&&q.addEventListener(r,S)},deregisterContentEventHandler:(r,S)=>{const q=W();q instanceof HTMLElement&&q.removeEventListener(r,S)},isScrollableContentAtTop:()=>dt(W()),isScrollableContentAtBottom:()=>ut(W()),registerWindowEventHandler:(r,S)=>{window.addEventListener(r,S)},deregisterWindowEventHandler:(r,S)=>{window.removeEventListener(r,S)}})),i.init(),()=>{i.destroy()}}),nt(()=>{re&&re()});function Me(o){return o in s?s[o]:B().classList.contains(o)}function He(o){s[o]||t(12,s[o]=!0,s)}function ke(o){(!(o in s)||s[o])&&t(12,s[o]=!1,s)}function Ne(){return[].slice.call(d.querySelectorAll(".mdc-dialog__button"))}function Be(){return d.querySelector("[data-mdc-dialog-button-default")}function W(){return d.querySelector(".mdc-dialog__content")}function me(){return d.querySelector("[data-mdc-dialog-initial-focus]")}function Ue(){J&&ie(G,f=!0,f),requestAnimationFrame(()=>{V.forEach(o=>o())})}function Pe(){V.forEach(o=>o())}function we(){J&&ie(G,f=!1,f)}function Ke(){return g}function Ge(o){t(0,g=o)}function he(){return i.layout()}function B(){return d}const Ve=()=>g&&i&&i.layout(),We=()=>g&&i&&i.layout(),qe=()=>i&&i.handleSurfaceScrimTransitionEnd();function ze(o){lt[o?"unshift":"push"](()=>{d=o,t(11,d)})}return e.$$set=o=>{n=Z(Z({},n),it(o)),t(19,c=Ie(n,a)),"use"in o&&t(1,M=o.use),"class"in o&&t(2,K=o.class),"open"in o&&t(0,g=o.open),"selection"in o&&t(3,m=o.selection),"escapeKeyAction"in o&&t(20,u=o.escapeKeyAction),"scrimClickAction"in o&&t(21,O=o.scrimClickAction),"autoStackButtons"in o&&t(4,p=o.autoStackButtons),"fullscreen"in o&&t(5,I=o.fullscreen),"sheet"in o&&t(6,y=o.sheet),"noContentPadding"in o&&t(7,H=o.noContentPadding),"container$class"in o&&t(8,D=o.container$class),"surface$class"in o&&t(9,k=o.surface$class),"$$scope"in o&&t(28,T=o.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&1049600&&i&&i.getEscapeKeyAction()!==u&&i.setEscapeKeyAction(u),e.$$.dirty[0]&2098176&&i&&i.getScrimClickAction()!==O&&i.setScrimClickAction(O),e.$$.dirty[0]&1040&&i&&i.getAutoStackButtons()!==p&&i.setAutoStackButtons(p),e.$$.dirty[0]&16&&(p||ie(C,_=!0,_)),e.$$.dirty[0]&1025&&i&&i.isOpen()!==g&&(g?i.open({isAboveFullscreenDialog:!!J}):i.close()),e.$$.dirty[0]&201327648&&I&&i&&le!==f&&(t(26,le=f),f?i.showSurfaceScrim():i.hideSurfaceScrim())},[g,M,K,m,p,I,y,H,D,k,i,d,s,h,C,G,Ue,Pe,we,c,u,O,Ke,Ge,he,B,le,f,T,L,Ve,We,qe,ze]}class Ct extends Qe{constructor(n){super(),Xe(this,n,pt,St,Ze,{use:1,class:2,open:0,selection:3,escapeKeyAction:20,scrimClickAction:21,autoStackButtons:4,fullscreen:5,sheet:6,noContentPadding:7,container$class:8,surface$class:9,isOpen:22,setOpen:23,layout:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[22]}get setOpen(){return this.$$.ctx[23]}get layout(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}const vt=Ct,Ot=se({class:"mdc-dialog__header",tag:"div",contexts:{"SMUI:icon-button:context":"dialog:header"}}),It=se({class:"mdc-dialog__title",tag:"h2"}),yt=se({class:"mdc-dialog__content",tag:"div"}),Dt=se({class:"mdc-dialog__actions",tag:"div",classMap:{"smui-dialog__actions--reversed":"SMUI:dialog:actions:reversed"},contexts:{"SMUI:button:context":"dialog:action"}});function Lt(e){return e.setAttribute("data-mdc-dialog-initial-focus",""),{destroy(){e.removeAttribute("data-mdc-dialog-initial-focus")}}}export{Dt as Actions,yt as Content,Ot as Header,Lt as InitialFocus,It as Title,vt as default};
