import{_ as je,K as ge,M as Ye,S as Xe,i as Ze,s as Je,R as _e,T as U,af as x,U as J,ag as Se,a as $,e as Y,f as ee,c as X,d as Z,h as O,V as P,k as Re,m as ae,n as q,p as A,Y as te,W as Ce,X as Qe,Z as pe,$ as Ee,a0 as Ae,a1 as ce,v as Oe,x as ve,u as xe,a2 as ye,a3 as $e,a4 as et,ak as Ie,ac as de,am as Le,a5 as w,z as tt,a6 as ne,al as ie,a7 as nt,a8 as it,a9 as at,q as ot,ao as st,ab as rt,G as lt}from"./@smui/common.js";import{A as ct}from"./animationframe.js";import{c as se}from"./classAdderBuilder.js";/**
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
 */function dt(e){return e?e.scrollHeight>e.offsetHeight:!1}function ut(e){return e?e.scrollTop===0:!1}function ft(e){return e?Math.ceil(e.scrollHeight-e.scrollTop)===e.clientHeight:!1}function mt(e){var n=new Set;return[].forEach.call(e,function(t){return n.add(t.offsetTop)}),n.size>1}/**
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
 */var oe;(function(e){e.POLL_SCROLL_POS="poll_scroll_position",e.POLL_LAYOUT_CHANGE="poll_layout_change"})(oe||(oe={}));var ht=function(e){je(n,e);function n(t){var o=e.call(this,ge(ge({},n.defaultAdapter),t))||this;return o.dialogOpen=!1,o.isFullscreen=!1,o.animationFrame=0,o.animationTimer=0,o.escapeKeyAction=j.CLOSE_ACTION,o.scrimClickAction=j.CLOSE_ACTION,o.autoStackButtons=!0,o.areButtonsStacked=!1,o.suppressDefaultPressSelector=j.SUPPRESS_DEFAULT_PRESS_SELECTOR,o.animFrame=new ct,o.contentScrollHandler=function(){o.handleScrollEvent()},o.windowResizeHandler=function(){o.layout()},o.windowOrientationChangeHandler=function(){o.layout()},o}return Object.defineProperty(n,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){this.adapter.hasClass(l.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(l.FULLSCREEN)},n.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},n.prototype.open=function(t){var o=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(l.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(l.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){o.adapter.addClass(l.OPEN),o.adapter.addBodyClass(l.SCROLL_LOCK),o.layout(),o.animationTimer=setTimeout(function(){o.handleAnimationTimerEnd(),o.adapter.trapFocus(o.adapter.getInitialFocusEl()),o.adapter.notifyOpened()},ue.DIALOG_ANIMATION_OPEN_TIME_MS)})},n.prototype.close=function(t){var o=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(l.CLOSING),this.adapter.removeClass(l.OPEN),this.adapter.removeBodyClass(l.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){o.adapter.releaseFocus(),o.handleAnimationTimerEnd(),o.adapter.notifyClosed(t)},ue.DIALOG_ANIMATION_CLOSE_TIME_MS))},n.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(l.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(l.SURFACE_SCRIM_SHOWN)})},n.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(l.SURFACE_SCRIM_SHOWN),this.adapter.addClass(l.SURFACE_SCRIM_HIDING)},n.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(l.SURFACE_SCRIM_HIDING),this.adapter.removeClass(l.SURFACE_SCRIM_SHOWING)},n.prototype.isOpen=function(){return this.dialogOpen},n.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},n.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},n.prototype.getScrimClickAction=function(){return this.scrimClickAction},n.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},n.prototype.getAutoStackButtons=function(){return this.autoStackButtons},n.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},n.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},n.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},n.prototype.layout=function(){var t=this;this.animFrame.request(oe.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},n.prototype.handleClick=function(t){var o=this.adapter.eventTargetMatches(t.target,j.SCRIM_SELECTOR);if(o&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var c=this.adapter.getActionFromEvent(t);c&&this.close(c)}},n.prototype.handleKeydown=function(t){var o=t.key==="Enter"||t.keyCode===13;if(o){var c=this.adapter.getActionFromEvent(t);if(!c){var f=t.composedPath?t.composedPath()[0]:t.target,_=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(f,this.suppressDefaultPressSelector):!0;o&&_&&this.adapter.clickDefaultButton()}}},n.prototype.handleDocumentKeydown=function(t){var o=t.key==="Escape"||t.keyCode===27;o&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},n.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(oe.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},n.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},n.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(l.OPENING),this.adapter.removeClass(l.CLOSING)},n.prototype.runNextAnimationFrame=function(t){var o=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){o.animationFrame=0,clearTimeout(o.animationTimer),o.animationTimer=setTimeout(t,0)})},n.prototype.detectStackedButtons=function(){this.adapter.removeClass(l.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(l.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},n.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(l.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(l.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},n.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(l.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(l.SCROLL_DIVIDER_HEADER):this.adapter.addClass(l.SCROLL_DIVIDER_HEADER)},n.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(l.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(l.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(l.SCROLL_DIVIDER_FOOTER)},n}(Ye);const{document:gt,window:Te}=at,_t=e=>({}),De=e=>({});function Fe(e){let n,t,o;return{c(){n=Y("div"),this.h()},l(c){n=X(c,"DIV",{class:!0}),Z(n).forEach(O),this.h()},h(){Re(n,"class","mdc-dialog__surface-scrim")},m(c,f){ae(c,n,f),t||(o=A(n,"transitionend",e[32]),t=!0)},p:ot,d(c){c&&O(n),t=!1,o()}}}function St(e){let n,t,o,c,f,_,T,D,E,F,R,b,h,M,K;const g=e[29].default,m=_e(g,e,e[28],null);let u=e[5]&&Fe(e),v=[{class:_=U({[e[9]]:!0,"mdc-dialog__surface":!0})},{role:"alertdialog"},{"aria-modal":"true"},x(e[19],"surface$")],C={};for(let i=0;i<v.length;i+=1)C=J(C,v[i]);let y=[{class:T=U({[e[8]]:!0,"mdc-dialog__container":!0})},x(e[19],"container$")],I={};for(let i=0;i<y.length;i+=1)I=J(I,y[i]);let k=[{class:F=U({[e[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!e[4],"mdc-dialog--fullscreen":e[5],"mdc-dialog--sheet":e[6],"mdc-dialog--no-content-padding":e[7],"smui-dialog--selection":e[3],...e[12]})},{role:"alertdialog"},{"aria-modal":"true"},Se(e[19],["container$","surface$"])],L={};for(let i=0;i<k.length;i+=1)L=J(L,k[i]);const H=e[29].over,d=_e(H,e,e[28],De);return{c(){n=$(),t=Y("div"),o=Y("div"),c=Y("div"),m&&m.c(),f=$(),u&&u.c(),D=$(),E=Y("div"),b=$(),d&&d.c(),this.h()},l(i){n=ee(i),t=X(i,"DIV",{class:!0,role:!0,"aria-modal":!0});var s=Z(t);o=X(s,"DIV",{class:!0});var N=Z(o);c=X(N,"DIV",{class:!0,role:!0,"aria-modal":!0});var p=Z(c);m&&m.l(p),f=ee(p),u&&u.l(p),p.forEach(O),N.forEach(O),D=ee(s),E=X(s,"DIV",{class:!0}),Z(E).forEach(O),s.forEach(O),b=ee(i),d&&d.l(i),this.h()},h(){P(c,C),P(o,I),Re(E,"class","mdc-dialog__scrim"),P(t,L)},m(i,s){ae(i,n,s),ae(i,t,s),q(t,o),q(o,c),m&&m.m(c,null),q(c,f),u&&u.m(c,null),q(t,D),q(t,E),e[33](t),ae(i,b,s),d&&d.m(i,s),h=!0,M||(K=[A(Te,"resize",e[30]),A(Te,"orientationchange",e[31]),A(gt.body,"keydown",function(){te(e[10]&&e[10].handleDocumentKeydown.bind(e[10]))&&(e[10]&&e[10].handleDocumentKeydown.bind(e[10])).apply(this,arguments)}),Ce(R=Qe.call(null,t,e[1])),Ce(e[13].call(null,t)),A(t,"SMUIDialog:opening",e[16]),A(t,"SMUIDialog:opened",e[17]),A(t,"SMUIDialog:closed",e[18]),A(t,"click",function(){te(e[10]&&e[10].handleClick.bind(e[10]))&&(e[10]&&e[10].handleClick.bind(e[10])).apply(this,arguments)}),A(t,"keydown",function(){te(e[10]&&e[10].handleKeydown.bind(e[10]))&&(e[10]&&e[10].handleKeydown.bind(e[10])).apply(this,arguments)})],M=!0)},p(i,s){e=i,m&&m.p&&(!h||s[0]&268435456)&&pe(m,g,e,e[28],h?Ae(g,e[28],s,null):Ee(e[28]),null),e[5]?u?u.p(e,s):(u=Fe(e),u.c(),u.m(c,null)):u&&(u.d(1),u=null),P(c,C=ce(v,[(!h||s[0]&512&&_!==(_=U({[e[9]]:!0,"mdc-dialog__surface":!0})))&&{class:_},{role:"alertdialog"},{"aria-modal":"true"},s[0]&524288&&x(e[19],"surface$")])),P(o,I=ce(y,[(!h||s[0]&256&&T!==(T=U({[e[8]]:!0,"mdc-dialog__container":!0})))&&{class:T},s[0]&524288&&x(e[19],"container$")])),P(t,L=ce(k,[(!h||s[0]&4348&&F!==(F=U({[e[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!e[4],"mdc-dialog--fullscreen":e[5],"mdc-dialog--sheet":e[6],"mdc-dialog--no-content-padding":e[7],"smui-dialog--selection":e[3],...e[12]})))&&{class:F},{role:"alertdialog"},{"aria-modal":"true"},s[0]&524288&&Se(e[19],["container$","surface$"])])),R&&te(R.update)&&s[0]&2&&R.update.call(null,e[1]),d&&d.p&&(!h||s[0]&268435456)&&pe(d,H,e,e[28],h?Ae(H,e[28],s,_t):Ee(e[28]),De)},i(i){h||(Oe(m,i),Oe(d,i),h=!0)},o(i){ve(m,i),ve(d,i),h=!1},d(i){i&&O(n),i&&O(t),m&&m.d(i),u&&u.d(),e[33](null),i&&O(b),d&&d.d(i),M=!1,xe(K)}}}function Ct(e,n,t){const o=["use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","sheet","noContentPadding","container$class","surface$class","isOpen","setOpen","layout","getElement"];let c=ye(n,o),f,_,{$$slots:T={},$$scope:D}=n;var E;const{FocusTrap:F}=st,{closest:R,matches:b}=rt,h=$e(et());let{use:M=[]}=n,{class:K=""}=n,{open:g=!1}=n,{selection:m=!1}=n,{escapeKeyAction:u="close"}=n,{scrimClickAction:v="close"}=n,{autoStackButtons:C=!0}=n,{fullscreen:y=!1}=n,{sheet:I=!1}=n,{noContentPadding:k=!1}=n,{container$class:L=""}=n,{surface$class:H=""}=n,d,i,s={},N,p=Le(!1);Ie(e,p,a=>t(37,_=a));let Q=de("SMUI:dialog:aboveFullscreen"),G=(E=de("SMUI:dialog:aboveFullscreenShown"))!==null&&E!==void 0?E:Le(!1);Ie(e,G,a=>t(27,f=a));let fe=de("SMUI:addLayoutListener"),re,V=[],be=a=>(V.push(a),()=>{const r=V.indexOf(a);r>=0&&V.splice(r,1)});w("SMUI:dialog:actions:reversed",p),w("SMUI:addLayoutListener",be),w("SMUI:dialog:selection",m),w("SMUI:dialog:aboveFullscreen",Q||y),w("SMUI:dialog:aboveFullscreenShown",G),I&&w("SMUI:icon-button:context","dialog:sheet"),fe&&(re=fe(he));let le=f;tt(()=>{var a;return N=new F(d,{initialFocusEl:(a=me())!==null&&a!==void 0?a:void 0}),t(10,i=new ht({addBodyClass:r=>document.body.classList.add(r),addClass:ke,areButtonsStacked:()=>mt(Ne()),clickDefaultButton:()=>{const r=Be();r&&r.click()},eventTargetMatches:(r,S)=>r?b(r,S):!1,getActionFromEvent:r=>{if(!r.target)return"";const S=R(r.target,"[data-mdc-dialog-action]");return S&&S.getAttribute("data-mdc-dialog-action")},getInitialFocusEl:me,hasClass:Me,isContentScrollable:()=>dt(W()),notifyClosed:r=>{t(0,g=!1),ne(B(),"SMUIDialog:closed",r?{action:r}:{},void 0,!0)},notifyClosing:r=>ne(B(),"SMUIDialog:closing",r?{action:r}:{},void 0,!0),notifyOpened:()=>ne(B(),"SMUIDialog:opened",{},void 0,!0),notifyOpening:()=>ne(B(),"SMUIDialog:opening",{},void 0,!0),releaseFocus:()=>N.releaseFocus(),removeBodyClass:r=>document.body.classList.remove(r),removeClass:He,reverseButtons:()=>{ie(p,_=!0,_)},trapFocus:()=>N.trapFocus(),registerContentEventHandler:(r,S)=>{const z=W();z instanceof HTMLElement&&z.addEventListener(r,S)},deregisterContentEventHandler:(r,S)=>{const z=W();z instanceof HTMLElement&&z.removeEventListener(r,S)},isScrollableContentAtTop:()=>ut(W()),isScrollableContentAtBottom:()=>ft(W()),registerWindowEventHandler:(r,S)=>{window.addEventListener(r,S)},deregisterWindowEventHandler:(r,S)=>{window.removeEventListener(r,S)}})),i.init(),()=>{i.destroy()}}),nt(()=>{re&&re()});function Me(a){return a in s?s[a]:B().classList.contains(a)}function ke(a){s[a]||t(12,s[a]=!0,s)}function He(a){(!(a in s)||s[a])&&t(12,s[a]=!1,s)}function Ne(){return[].slice.call(d.querySelectorAll(".mdc-dialog__button"))}function Be(){return d.querySelector("[data-mdc-dialog-button-default")}function W(){return d.querySelector(".mdc-dialog__content")}function me(){return d.querySelector("[data-mdc-dialog-initial-focus]")}function Ue(){Q&&ie(G,f=!0,f),requestAnimationFrame(()=>{V.forEach(a=>a())})}function Pe(){V.forEach(a=>a())}function we(){Q&&ie(G,f=!1,f)}function Ke(){return g}function Ge(a){t(0,g=a)}function he(){return i.layout()}function B(){return d}const Ve=()=>g&&i&&i.layout(),We=()=>g&&i&&i.layout(),ze=()=>i&&i.handleSurfaceScrimTransitionEnd();function qe(a){lt[a?"unshift":"push"](()=>{d=a,t(11,d)})}return e.$$set=a=>{n=J(J({},n),it(a)),t(19,c=ye(n,o)),"use"in a&&t(1,M=a.use),"class"in a&&t(2,K=a.class),"open"in a&&t(0,g=a.open),"selection"in a&&t(3,m=a.selection),"escapeKeyAction"in a&&t(20,u=a.escapeKeyAction),"scrimClickAction"in a&&t(21,v=a.scrimClickAction),"autoStackButtons"in a&&t(4,C=a.autoStackButtons),"fullscreen"in a&&t(5,y=a.fullscreen),"sheet"in a&&t(6,I=a.sheet),"noContentPadding"in a&&t(7,k=a.noContentPadding),"container$class"in a&&t(8,L=a.container$class),"surface$class"in a&&t(9,H=a.surface$class),"$$scope"in a&&t(28,D=a.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&1049600&&i&&i.getEscapeKeyAction()!==u&&i.setEscapeKeyAction(u),e.$$.dirty[0]&2098176&&i&&i.getScrimClickAction()!==v&&i.setScrimClickAction(v),e.$$.dirty[0]&1040&&i&&i.getAutoStackButtons()!==C&&i.setAutoStackButtons(C),e.$$.dirty[0]&16&&(C||ie(p,_=!0,_)),e.$$.dirty[0]&1025&&i&&i.isOpen()!==g&&(g?i.open({isAboveFullscreenDialog:!!Q}):i.close()),e.$$.dirty[0]&201327648&&y&&i&&le!==f&&(t(26,le=f),f?i.showSurfaceScrim():i.hideSurfaceScrim())},[g,M,K,m,C,y,I,k,L,H,i,d,s,h,p,G,Ue,Pe,we,c,u,v,Ke,Ge,he,B,le,f,D,T,Ve,We,ze,qe]}class pt extends Xe{constructor(n){super(),Ze(this,n,Ct,St,Je,{use:1,class:2,open:0,selection:3,escapeKeyAction:20,scrimClickAction:21,autoStackButtons:4,fullscreen:5,sheet:6,noContentPadding:7,container$class:8,surface$class:9,isOpen:22,setOpen:23,layout:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[22]}get setOpen(){return this.$$.ctx[23]}get layout(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}const vt=pt,yt=se({class:"mdc-dialog__header",tag:"div",contexts:{"SMUI:icon-button:context":"dialog:header"}}),It=se({class:"mdc-dialog__title",tag:"h2"}),Lt=se({class:"mdc-dialog__content",tag:"div"}),Tt=se({class:"mdc-dialog__actions",tag:"div",classMap:{"smui-dialog__actions--reversed":"SMUI:dialog:actions:reversed"},contexts:{"SMUI:button:context":"dialog:action"}});function Dt(e){return e.setAttribute("data-mdc-dialog-initial-focus",""),{destroy(){e.removeAttribute("data-mdc-dialog-initial-focus")}}}export{Tt as Actions,Lt as Content,yt as Header,Dt as InitialFocus,It as Title,vt as default};
