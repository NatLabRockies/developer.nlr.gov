import{n as e,t}from"./c-rolldown-runtime-Bh1tDfsg.js";import{t as n}from"./c-ready-BxZUM5Gb.js";var r=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.Data=r())})(e,(function(){let e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);if(!i.has(n)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(n,r)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}}}))})),i=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.Index={}))})(e,(function(e){let t=`transitionend`,n=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),r=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},a=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return!Number.parseFloat(t)&&!Number.parseFloat(n)?0:(t=t.split(`,`)[0],n=n.split(`,`)[0],(Number.parseFloat(t)+Number.parseFloat(n))*1e3)},o=e=>{e.dispatchEvent(new Event(t))},s=e=>!e||typeof e!=`object`?!1:(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),c=e=>s(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(n(e)):null,l=e=>{if(!s(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},u=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains(`disabled`)?!0:e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled,d=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?d(e.parentNode):null},f=()=>{},p=e=>{e.offsetHeight},m=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,h=[],g=e=>{document.readyState===`loading`?(h.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of h)e()}),h.push(e)):e()},_=()=>document.documentElement.dir===`rtl`,v=e=>{g(()=>{let t=m();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},y=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n;e.defineJQueryPlugin=v,e.execute=y,e.executeAfterTransition=(e,n,r=!0)=>{if(!r){y(e);return}let i=a(n)+5,s=!1,c=({target:r})=>{r===n&&(s=!0,n.removeEventListener(t,c),y(e))};n.addEventListener(t,c),setTimeout(()=>{s||o(n)},i)},e.findShadowRoot=d,e.getElement=c,e.getNextActiveElement=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},e.getTransitionDurationFromElement=a,e.getUID=i,e.getjQuery=m,e.isDisabled=u,e.isElement=s,e.isRTL=_,e.isVisible=l,e.noop=f,e.onDOMContentLoaded=g,e.parseSelector=n,e.reflow=p,e.toType=r,e.triggerTransitionEnd=o,Object.defineProperty(e,Symbol.toStringTag,{value:`Module`})}))})),a=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(i()):typeof define==`function`&&define.amd?define([`../util/index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.EventHandler=r(n.Index))})(e,(function(e){let t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,i={},a=1,o={mouseenter:`mouseover`,mouseleave:`mouseout`},s=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function c(e,t){return t&&`${t}::${a++}`||e.uidEvent||a++}function l(e){let t=c(e);return e.uidEvent=t,i[t]=i[t]||{},i[t]}function u(e,t){return function n(r){return y(r,{delegateTarget:e}),n.oneOff&&v.off(e,r.type,t),t.apply(e,[r])}}function d(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return y(i,{delegateTarget:o}),r.oneOff&&v.off(e,i.type,t,n),n.apply(o,[i])}}function f(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function p(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=_(e);return s.has(a)||(a=e),[r,i,a]}function m(e,n,r,i,a){if(typeof n!=`string`||!e)return;let[s,m,h]=p(n,r,i);n in o&&(m=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(m));let g=l(e),_=g[h]||(g[h]={}),v=f(_,m,s?r:null);if(v){v.oneOff=v.oneOff&&a;return}let y=c(m,n.replace(t,``)),b=s?d(e,r,m):u(e,m);b.delegationSelector=s?r:null,b.callable=m,b.oneOff=a,b.uidEvent=y,_[y]=b,e.addEventListener(h,b,s)}function h(e,t,n,r,i){let a=f(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function g(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&h(e,t,n,o.callable,o.delegationSelector)}function _(e){return e=e.replace(n,``),o[e]||e}let v={on(e,t,n,r){m(e,t,n,r,!1)},one(e,t,n,r){m(e,t,n,r,!0)},off(e,t,n,i){if(typeof t!=`string`||!e)return;let[a,o,s]=p(t,n,i),c=s!==t,u=l(e),d=u[s]||{},f=t.startsWith(`.`);if(o!==void 0){if(!Object.keys(d).length)return;h(e,u,s,o,a?n:null);return}if(f)for(let n of Object.keys(u))g(e,u,n,t.slice(1));for(let[n,i]of Object.entries(d)){let a=n.replace(r,``);(!c||t.includes(a))&&h(e,u,s,i.callable,i.delegationSelector)}},trigger(t,n,r){if(typeof n!=`string`||!t)return null;let i=e.getjQuery(),a=n!==_(n),o=null,s=!0,c=!0,l=!1;a&&i&&(o=i.Event(n,r),i(t).trigger(o),s=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());let u=y(new Event(n,{bubbles:s,cancelable:!0}),r);return l&&u.preventDefault(),c&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function y(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}return v}))})),o=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.Manipulator=r())})(e,(function(){function e(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function t(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};let n={},r=Object.keys(t.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let i of r){let r=i.replace(/^bs/,``);r=r.charAt(0).toLowerCase()+r.slice(1),n[r]=e(t.dataset[i])}return n},getDataAttribute(n,r){return e(n.getAttribute(`data-bs-${t(r)}`))}}}))})),s=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(o(),i()):typeof define==`function`&&define.amd?define([`../dom/manipulator`,`./index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Config=r(n.Manipulator,n.Index))})(e,(function(e,t){class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(n,r){let i=t.isElement(r)?e.getDataAttribute(r,`config`):{};return{...this.constructor.Default,...typeof i==`object`?i:{},...t.isElement(r)?e.getDataAttributes(r):{},...typeof n==`object`?n:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(let[r,i]of Object.entries(n)){let n=e[r],a=t.isElement(n)?`element`:t.toType(n);if(!new RegExp(i).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`)}}}return n}))})),c=t(((e,t)=>{(function(n,o){typeof e==`object`&&t!==void 0?t.exports=o(r(),a(),s(),i()):typeof define==`function`&&define.amd?define([`./dom/data`,`./dom/event-handler`,`./util/config`,`./util/index`],o):(n=typeof globalThis<`u`?globalThis:n||self,n.BaseComponent=o(n.Data,n.EventHandler,n.Config,n.Index))})(e,(function(e,t,n,r){class i extends n{constructor(t,n){super(),t=r.getElement(t),t&&(this._element=t,this._config=this._getConfig(n),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),t.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){r.executeAfterTransition(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(t){return e.get(r.getElement(t),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}return i}))})),l=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(i()):typeof define==`function`&&define.amd?define([`../util/index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.SelectorEngine=r(n.Index))})(e,(function(e){let t=t=>{let n=t.getAttribute(`data-bs-target`);if(!n||n===`#`){let e=t.getAttribute(`href`);if(!e||!e.includes(`#`)&&!e.startsWith(`.`))return null;e.includes(`#`)&&!e.startsWith(`#`)&&(e=`#${e.split(`#`)[1]}`),n=e&&e!==`#`?e.trim():null}return n?n.split(`,`).map(t=>e.parseSelector(t)).join(`,`):null},n={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){let n=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(n,t).filter(t=>!e.isDisabled(t)&&e.isVisible(t))},getSelectorFromElement(e){let r=t(e);return r&&n.findOne(r)?r:null},getElementFromSelector(e){let r=t(e);return r?n.findOne(r):null},getMultipleElementsFromSelector(e){let r=t(e);return r?n.find(r):[]}};return n}))}));t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(c(),a(),l(),i()):typeof define==`function`&&define.amd?define([`./base-component`,`./dom/event-handler`,`./dom/selector-engine`,`./util/index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Collapse=r(n.BaseComponent,n.EventHandler,n.SelectorEngine,n.Index))})(e,(function(e,t,n,r){let i=`.bs.collapse`,a=`show${i}`,o=`shown${i}`,s=`hide${i}`,c=`hidden${i}`,l=`click${i}.data-api`,u=`show`,d=`collapse`,f=`collapsing`,p=`:scope .${d} .${d}`,m=`[data-bs-toggle="collapse"]`,h={parent:null,toggle:!0},g={parent:`(null|element)`,toggle:`boolean`};class _ extends e{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let r=n.find(m);for(let e of r){let t=n.getSelectorFromElement(e),r=n.find(t).filter(e=>e===this._element);t!==null&&r.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return h}static get DefaultType(){return g}static get NAME(){return`collapse`}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(`.collapse.show, .collapse.collapsing`).filter(e=>e!==this._element).map(e=>_.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning||t.trigger(this._element,a).defaultPrevented)return;for(let t of e)t.hide();let n=this._getDimension();this._element.classList.remove(d),this._element.classList.add(f),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let r=()=>{this._isTransitioning=!1,this._element.classList.remove(f),this._element.classList.add(d,u),this._element.style[n]=``,t.trigger(this._element,o)},i=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown()||t.trigger(this._element,s).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,r.reflow(this._element),this._element.classList.add(f),this._element.classList.remove(d,u);for(let e of this._triggerArray){let t=n.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;let i=()=>{this._isTransitioning=!1,this._element.classList.remove(f),this._element.classList.add(d),t.trigger(this._element,c)};this._element.style[e]=``,this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(u)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=r.getElement(e.parent),e}_getDimension(){return this._element.classList.contains(`collapse-horizontal`)?`width`:`height`}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(m);for(let t of e){let e=n.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=n.find(p,this._config.parent);return n.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(`collapsed`,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(e){let t={};return typeof e==`string`&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=_.getOrCreateInstance(this,t);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e]()}})}}return t.on(document,l,m,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of n.getMultipleElementsFromSelector(this))_.getOrCreateInstance(e,{toggle:!1}).toggle()}),r.defineJQueryPlugin(_),_}))}))();var u=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fas`,n=`bars`,r=448,i=512,a=[`navicon`],o=`f0c9`,s=`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faBars=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),d=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fas`,n=`comments`,r=576,i=512,a=[128490,61670],o=`f086`,s=`M384 144c0 97.2-86 176-192 176-26.7 0-52.1-5-75.2-14L35.2 349.2c-9.3 4.9-20.7 3.2-28.2-4.2s-9.2-18.9-4.2-28.2l35.6-67.2C14.3 220.2 0 183.6 0 144 0 46.8 86-32 192-32S384 46.8 384 144zm0 368c-94.1 0-172.4-62.1-188.8-144 120-1.5 224.3-86.9 235.8-202.7 83.3 19.2 145 88.3 145 170.7 0 39.6-14.3 76.2-38.4 105.6l35.6 67.2c4.9 9.3 3.2 20.7-4.2 28.2s-18.9 9.2-28.2 4.2L459.2 498c-23.1 9-48.5 14-75.2 14z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faComments=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),f=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`github`,r=512,i=512,a=[],o=`f09b`,s=`M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faGithub=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),p=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`instagram`,r=448,i=512,a=[],o=`f16d`,s=`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faInstagram=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),m=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`linkedin`,r=448,i=512,a=[],o=`f08c`,s=`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faLinkedin=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),h=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fas`,n=`magnifying-glass`,r=512,i=512,a=[128269,`search`],o=`f002`,s=`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faMagnifyingGlass=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),g=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`square-facebook`,r=448,i=512,a=[`facebook-square`],o=`f082`,s=`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faSquareFacebook=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),_=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`threads`,r=448,i=512,a=[],o=`e618`,s=`M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8 29.2 14.1 50.6 35.2 61.8 61.4 15.7 36.5 17.2 95.8-30.3 143.2-36.2 36.2-80.3 52.5-142.6 53l-.3 0c-70.2-.5-124.1-24.1-160.4-70.2-32.3-41-48.9-98.1-49.5-169.6l0-.5C17 184.3 33.6 127.2 65.9 86.2 102.2 40.1 156.2 16.5 226.4 16l.3 0c70.3 .5 124.9 24 162.3 69.9 18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4-29.2-35.8-73-54.2-130.5-54.6-57 .5-100.1 18.8-128.2 54.4-26.2 33.3-39.8 81.5-40.3 143.2 .5 61.7 14.1 109.9 40.3 143.3 28 35.6 71.2 53.9 128.2 54.4 51.4-.4 85.4-12.6 113.7-40.9 32.3-32.2 31.7-71.8 21.4-95.9-6.1-14.2-17.1-26-31.9-34.9-3.7 26.9-11.8 48.3-24.7 64.8-17.1 21.8-41.4 33.6-72.7 35.3-23.6 1.3-46.3-4.4-63.9-16-20.8-13.8-33-34.8-34.3-59.3-2.5-48.3 35.7-83 95.2-86.4 21.1-1.2 40.9-.3 59.2 2.8-2.4-14.8-7.3-26.6-14.6-35.2-10-11.7-25.6-17.7-46.2-17.8l-.7 0c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1l.8 0c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2 .1 0zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3 25.6-1.4 54.6-11.4 59.5-73.2-13.2-2.9-27.8-4.4-43.4-4.4-4.8 0-9.6 .1-14.4 .4-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faThreads=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),v=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fas`,n=`triangle-exclamation`,r=512,i=512,a=[9888,`exclamation-triangle`,`warning`],o=`f071`,s=`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faTriangleExclamation=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),y=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`x-twitter`,r=448,i=512,a=[],o=`e61b`,s=`M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faXTwitter=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),b=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fas`,n=`xmark`,r=384,i=512,a=[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],o=`f00d`,s=`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faXmark=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),ee=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fab`,n=`youtube`,r=576,i=512,a=[61802],o=`f167`,s=`M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faYoutube=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a})),te=u(),ne=d(),re=f(),ie=p(),ae=m(),oe=h(),se=g(),ce=_(),le=v(),ue=y(),de=b(),fe=ee();function pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function me(e){if(Array.isArray(e))return e}function he(e){if(Array.isArray(e))return pe(e)}function ge(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,De(r.key),r)}}function ve(e,t,n){return t&&_e(e.prototype,t),n&&_e(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ye(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ke(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function x(e,t,n){return(t=De(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function xe(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Se(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?we(Object(n),!0).forEach(function(t){x(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Te(e,t){return me(e)||xe(e,t)||ke(e,t)||Se()}function C(e){return he(e)||be(e)||ke(e)||Ce()}function Ee(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function De(e){var t=Ee(e,`string`);return typeof t==`symbol`?t:t+``}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Oe(e)}function ke(e,t){if(e){if(typeof e==`string`)return pe(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}var Ae=function(){},je={},Me={},Ne=null,Pe={mark:Ae,measure:Ae};try{typeof window<`u`&&(je=window),typeof document<`u`&&(Me=document),typeof MutationObserver<`u`&&(Ne=MutationObserver),typeof performance<`u`&&(Pe=performance)}catch{}var Fe=(je.navigator||{}).userAgent,Ie=Fe===void 0?``:Fe,w=je,T=Me,Le=Ne,Re=Pe;w.document;var E=!!T.documentElement&&!!T.head&&typeof T.addEventListener==`function`&&typeof T.createElement==`function`,ze=~Ie.indexOf(`MSIE`)||~Ie.indexOf(`Trident/`),Be,Ve=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,He=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Ue={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},We={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ge=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],D=`classic`,O=`duotone`,Ke=`sharp`,qe=`sharp-duotone`,Je=`chisel`,Ye=`etch`,Xe=`graphite`,Ze=`jelly`,Qe=`jelly-duo`,$e=`jelly-fill`,et=`notdog`,tt=`notdog-duo`,nt=`slab`,rt=`slab-press`,it=`thumbprint`,at=`utility`,ot=`utility-duo`,st=`utility-fill`,ct=`whiteboard`,lt=`Classic`,ut=`Duotone`,dt=`Sharp`,ft=`Sharp Duotone`,pt=`Chisel`,mt=`Etch`,ht=`Graphite`,gt=`Jelly`,_t=`Jelly Duo`,vt=`Jelly Fill`,yt=`Notdog`,bt=`Notdog Duo`,xt=`Slab`,St=`Slab Press`,Ct=`Thumbprint`,wt=`Utility`,Tt=`Utility Duo`,Et=`Utility Fill`,Dt=`Whiteboard`,Ot=[D,O,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct];Be={},x(x(x(x(x(x(x(x(x(x(Be,D,lt),O,ut),Ke,dt),qe,ft),Je,pt),Ye,mt),Xe,ht),Ze,gt),Qe,_t),$e,vt),x(x(x(x(x(x(x(x(x(Be,et,yt),tt,bt),nt,xt),rt,St),it,Ct),at,wt),ot,Tt),st,Et),ct,Dt);var kt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},At={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},jt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Mt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},Nt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Pt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Ft=[`kit`];x(x({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var It={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Lt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Rt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},zt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Bt,k={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Vt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Bt={},x(x(x(x(x(x(x(x(x(x(Bt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),x(x(x(x(x(x(x(x(x(Bt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),x(x({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ht={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Ut={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Wt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Gt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Vt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Kt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],qt=[1,2,3,4,5,6,7,8,9,10],Jt=qt.concat([11,12,13,14,15,16,17,18,19,20]),Yt=[].concat(C(Object.keys(Ut)),Kt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,k.GROUP,k.SWAP_OPACITY,k.PRIMARY,k.SECONDARY],qt.map(function(e){return`${e}x`}),Jt.map(function(e){return`w-${e}`})),Xt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},A=`___FONT_AWESOME___`,Zt=16,Qt=`fa`,$t=`svg-inline--fa`,j=`data-fa-i2svg`,en=`data-fa-pseudo-element`,tn=`data-fa-pseudo-element-pending`,nn=`data-prefix`,rn=`data-icon`,an=`fontawesome-i2svg`,on=`async`,sn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],cn=[`::before`,`::after`,`:before`,`:after`],ln=function(){try{return!0}catch{return!1}}();function M(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[D]}})}var un=S({},Ue);un[D]=S(S(S(S({},{"fa-duotone":`duotone`}),Ue[D]),Pt.kit),Pt[`kit-duotone`]);var dn=M(un),fn=S({},Mt);fn[D]=S(S(S(S({},{duotone:`fad`}),fn[D]),zt.kit),zt[`kit-duotone`]);var pn=M(fn),mn=S({},Wt);mn[D]=S(S({},mn[D]),Rt.kit);var hn=M(mn),gn=S({},Ht);gn[D]=S(S({},gn[D]),It.kit),M(gn);var _n=Ve,vn=`fa-layers-text`,yn=He;M(S({},kt));var bn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],xn=We,Sn=[].concat(C(Ft),C(Yt)),N=w.FontAwesomeConfig||{};function Cn(e){var t=T.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function wn(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}T&&typeof T.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Te(e,2),n=t[0],r=t[1],i=wn(Cn(n));i!=null&&(N[r]=i)});var Tn={styleDefault:`solid`,familyDefault:D,cssPrefix:Qt,replacementClass:$t,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};N.familyPrefix&&(N.cssPrefix=N.familyPrefix);var P=S(S({},Tn),N);P.autoReplaceSvg||(P.observeMutations=!1);var F={};Object.keys(Tn).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(t){P[e]=t,I.forEach(function(e){return e(F)})},get:function(){return P[e]}})}),Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){P.cssPrefix=e,I.forEach(function(e){return e(F)})},get:function(){return P.cssPrefix}}),w.FontAwesomeConfig=F;var I=[];function En(e){return I.push(e),function(){I.splice(I.indexOf(e),1)}}var L=Zt,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(e){if(!(!e||!E)){var t=T.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=T.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return T.head.insertBefore(t,r),e}}var On=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function kn(){for(var e=12,t=``;e-->0;)t+=On[Math.random()*62|0];return t}function z(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function An(e){return e.classList?z(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function jn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Mn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${jn(e[n])}" `},``).trim()}function B(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Nn(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function Pn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Fn(e){var t=e.transform,n=e.width,r=n===void 0?Zt:n,i=e.height,a=i===void 0?Zt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&ze?c+=`translate(${t.x/L-r/2}em, ${t.y/L-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/L}em), calc(-50% + ${t.y/L}em)) `:c+=`translate(${t.x/L}em, ${t.y/L}em) `,c+=`scale(${t.size/L*(t.flipX?-1:1)}, ${t.size/L*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var In=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ln(){var e=Qt,t=$t,n=F.cssPrefix,r=F.replacementClass,i=In;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Rn=!1;function zn(){F.autoAddCss&&!Rn&&(Dn(Ln()),Rn=!0)}var Bn={mixout:function(){return{dom:{css:Ln,insertCss:zn}}},hooks:function(){return{beforeDOMElementCreation:function(){zn()},beforeI2svg:function(){zn()}}}},V=w||{};V[A]||(V[A]={}),V[A].styles||(V[A].styles={}),V[A].hooks||(V[A].hooks={}),V[A].shims||(V[A].shims=[]);var H=V[A],Vn=[],Hn=function(){T.removeEventListener(`DOMContentLoaded`,Hn),Un=1,Vn.map(function(e){return e()})},Un=!1;E&&(Un=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Un||T.addEventListener(`DOMContentLoaded`,Hn));function Wn(e){E&&(Un?setTimeout(e,0):Vn.push(e))}function U(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?jn(e):`<${t} ${Mn(r)}>${a.map(U).join(``)}</${t}>`}function Gn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},qn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Kn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Jn(e){return C(e).length===1?e.codePointAt(0).toString(16):null}function Yn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Xn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Yn(t);typeof H.hooks.addPack==`function`&&!r?H.hooks.addPack(e,Yn(t)):H.styles[e]=S(S({},H.styles[e]||{}),i),e===`fas`&&Xn(`fa`,t)}var W=H.styles,Zn=H.shims,Qn=Object.keys(hn),$n=Qn.reduce(function(e,t){return e[t]=Object.keys(hn[t]),e},{}),er=null,tr={},nr={},rr={},ir={},ar={};function or(e){return~Sn.indexOf(e)}function sr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!or(i)?i:null}var cr=function(){var e=function(e){return qn(W,function(t,n,r){return t[r]=qn(n,e,{}),t},{})};tr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),nr=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),ar=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in W||F.autoFetchSvg,n=qn(Zn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});rr=n.names,ir=n.unicodes,er=hr(F.styleDefault,{family:F.familyDefault})};En(function(e){er=hr(e.styleDefault,{family:F.familyDefault})}),cr();function lr(e,t){return(tr[e]||{})[t]}function ur(e,t){return(nr[e]||{})[t]}function G(e,t){return(ar[e]||{})[t]}function dr(e){return rr[e]||{prefix:null,iconName:null}}function fr(e){var t=ir[e],n=lr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function K(){return er}var pr=function(){return{prefix:null,iconName:null,rest:[]}};function mr(e){var t=D,n=Qn.reduce(function(e,t){return e[t]=`${F.cssPrefix}-${t}`,e},{});return Ot.forEach(function(r){(e.includes(n[r])||e.some(function(e){return $n[r].includes(e)}))&&(t=r)}),t}function hr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?D:t,r=dn[n][e];if(n===O&&!e)return`fad`;var i=pn[n][e]||pn[n][r],a=e in H.styles?e:null;return i||a||null}function gr(e){var t=[],n=null;return e.forEach(function(e){var r=sr(F.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function _r(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var vr=Gt.concat(Nt);function yr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=_r(e.filter(function(e){return vr.includes(e)})),a=_r(e.filter(function(e){return!vr.includes(e)})),o=Te(i.filter(function(e){return r=e,!Ge.includes(e)}),1)[0],s=o===void 0?null:o,c=mr(i),l=S(S({},gr(a)),{},{prefix:hr(s,{family:c})});return S(S(S({},l),Cr({values:e,family:c,styles:W,config:F,canonical:l,givenPrefix:r})),br(n,r,l))}function br(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?dr(i):{},o=G(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!W.far&&W.fas&&!F.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var xr=Ot.filter(function(e){return e!==D||e!==O}),Sr=Object.keys(Wt).filter(function(e){return e!==D}).map(function(e){return Object.keys(Wt[e])}).flat();function Cr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===O,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&xr.includes(n)&&(Object.keys(s).find(function(e){return Sr.includes(e)})||l.autoFetchSvg)&&(r.prefix=jt.get(n).defaultShortPrefixId,r.iconName=G(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=K()||`fas`),r}var wr=function(){function e(){ge(this,e),this.definitions={}}return ve(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=S(S({},e.definitions[n]||{}),t[n]),Xn(n,t[n]);var r=hn[D][n];r&&Xn(r,t[n]),cr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Tr=[],q={},J={},Er=Object.keys(J);function Dr(e,t){var n=t.mixoutsTo;return Tr=e,q={},Object.keys(J).forEach(function(e){Er.indexOf(e)===-1&&delete J[e]}),Tr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Oe(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){q[e]||(q[e]=[]),q[e].push(r[e])})}e.provides&&e.provides(J)}),n}function Or(e,t){var n=[...arguments].slice(2);return(q[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Y(e){var t=[...arguments].slice(1);(q[e]||[]).forEach(function(e){e.apply(null,t)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return J[e]?J[e].apply(null,t):void 0}function kr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||K();if(t)return t=G(n,t)||t,Gn(Ar.definitions,n,t)||Gn(H.styles,n,t)}var Ar=new wr,Z={noAuto:function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Y(`noAuto`)},config:F,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(Y(`beforeI2svg`,e),X(`pseudoElements2svg`,e),X(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Wn(function(){jr({autoReplaceSvgRoot:t}),Y(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Oe(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=hr(e[0]);return{prefix:n,iconName:G(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${F.cssPrefix}-`)>-1||e.match(_n))){var r=yr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||K(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=K();return{prefix:i,iconName:G(i,e)||e}}}},library:Ar,findIconDefinition:kr,toHtml:U},jr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?T:e;(Object.keys(H.styles).length>0||F.autoFetchSvg)&&E&&F.autoReplaceSvg&&Z.dom.i2svg({node:t})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return U(e)})}}),Object.defineProperty(e,"node",{get:function(){if(E){var t=T.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Nr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Nn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=B(S(S({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Pr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${F.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:S(S({},i),{},{id:o}),children:r}]}]}function Fr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Ir(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[F.replacementClass,a?`${F.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:S(S({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Fr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[j]=``);var _=S(S({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S({},l.styles)}),v=r.found&&n.found?X(`generateAbstractMask`,_)||{children:[],attributes:{}}:X(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Pr(_):Nr(_)}function Lr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=S(S({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[j]=``);var l=S({},a.styles);Nn(i)&&(l.transform=Fn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=B(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Rr(e){var t=e.content,n=e.extra,r=S(S({},n.attributes),{},{class:n.classes.join(` `)}),i=B(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var zr=H.styles;function Br(e){var t=e[0],n=e[1],r=Te(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${F.cssPrefix}-${xn.GROUP}`},children:[{tag:`path`,attributes:{class:`${F.cssPrefix}-${xn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${F.cssPrefix}-${xn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Vr={found:!1,width:512,height:512};function Hr(e,t){!ln&&!F.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Ur(e,t){var n=t;return t===`fa`&&F.styleDefault!==null&&(t=K()),new Promise(function(r,i){if(n===`fa`){var a=dr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(Br(o))}Hr(e,t),r(S(S({},Vr),{},{icon:F.showMissingIcons&&e&&X(`missingIconAbstract`)||{}}))})}var Wr=function(){},Gr=F.measurePerformance&&Re&&Re.mark&&Re.measure?Re:{mark:Wr,measure:Wr},Q=`FA "7.2.0"`,Kr=function(e){return Gr.mark(`${Q} ${e} begins`),function(){return qr(e)}},qr=function(e){Gr.mark(`${Q} ${e} ends`),Gr.measure(`${Q} ${e}`,`${Q} ${e} begins`,`${Q} ${e} ends`)},Jr={begin:Kr,end:qr},Yr=function(){};function Xr(e){return typeof(e.getAttribute?e.getAttribute(j):null)==`string`}function Zr(e){var t=e.getAttribute?e.getAttribute(nn):null,n=e.getAttribute?e.getAttribute(rn):null;return t&&n}function Qr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function $r(){return F.autoReplaceSvg===!0?ii.replace:ii[F.autoReplaceSvg]||ii.replace}function ei(e){return T.createElementNS(`http://www.w3.org/2000/svg`,e)}function ti(e){return T.createElement(e)}function ni(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?ei:ti:t;if(typeof e==`string`)return T.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(ni(e,{ceFn:n}))}),r}function ri(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var ii={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(ni(e),t)}),t.getAttribute(j)===null&&F.keepOriginalSource){var n=T.createComment(ri(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~An(t).indexOf(F.replacementClass))return ii.replace(e);var r=RegExp(`${F.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===F.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return U(e)}).join(`
`);t.setAttribute(j,``),t.innerHTML=a}};function ai(e){e()}function oi(e,t){var n=typeof t==`function`?t:Yr;if(e.length===0)n();else{var r=ai;F.mutateApproach===on&&(r=w.requestAnimationFrame||ai),r(function(){var t=$r(),r=Jr.begin(`mutate`);e.map(t),r(),n()})}}var si=!1;function ci(){si=!0}function li(){si=!1}var $=null;function ui(e){if(Le&&F.observeMutations){var t=e.treeCallback,n=t===void 0?Yr:t,r=e.nodeCallback,i=r===void 0?Yr:r,a=e.pseudoElementsCallback,o=a===void 0?Yr:a,s=e.observeMutationsRoot,c=s===void 0?T:s;$=new Le(function(e){if(!si){var t=K();z(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Xr(e.addedNodes[0])&&(F.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&F.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Xr(e.target)&&~bn.indexOf(e.attributeName))if(e.attributeName===`class`&&Zr(e.target)){var r=yr(An(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(nn,a||t),s&&e.target.setAttribute(rn,s)}else Qr(e.target)&&i(e.target)})}}),E&&$.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function di(){$&&$.disconnect()}function fi(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function pi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=yr(An(e));return i.prefix||=K(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=ur(i.prefix,e.innerText)||lr(i.prefix,Jn(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function mi(e){return z(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function hi(){return{iconName:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pi(e),r=n.iconName,i=n.prefix,a=n.rest,o=mi(e),s=Or(`parseNodeAttributes`,{},e);return S({iconName:r,prefix:i,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?fi(e):[],attributes:o}},s)}var _i=H.styles;function vi(e){var t=F.autoReplaceSvg===`nest`?gi(e,{styleParser:!1}):gi(e);return~t.extra.classes.indexOf(vn)?X(`generateLayersText`,e,t):X(`generateSvgReplacementMutation`,e,t)}function yi(){return[].concat(C(Nt),C(Gt))}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var n=T.documentElement.classList,r=function(e){return n.add(`${an}-${e}`)},i=function(e){return n.remove(`${an}-${e}`)},a=F.autoFetchSvg?yi():Ge.concat(Object.keys(_i));a.includes(`fa`)||a.push(`fa`);var o=[`.${vn}:not([${j}])`].concat(a.map(function(e){return`.${e}:not([${j}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=z(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Jr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=vi(t);n&&e.push(n)}catch(e){ln||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){oi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vi(e).then(function(e){e&&oi([e],t)})}function Si(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:kr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:kr(i||{}),e(r,S(S({},n),{},{mask:i}))}}var Ci=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?R:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Mr(S({type:`icon`},e),function(){return Y(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Ir({icons:{main:Br(v),mask:s?Br(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:S(S({},R),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},wi={mixout:function(){return{icon:Si(Ci)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=bi,e.nodeCallback=xi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?T:t,r=e.callback;return bi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Ur(n,r),o.iconName?Ur(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Te(o,2),u=l[0],d=l[1];t([e,Ir({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=B(a);o.length>0&&(n.style=o);var s;return Nn(i)&&(s=X(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ti={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Mr({type:`layer`},function(){Y(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${F.cssPrefix}-layers`].concat(C(r)).join(` `)},children:n}]})}}}},Ei={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Mr({type:`counter`,content:e},function(){return Y(`beforeDOMElementCreation`,{content:e,params:t}),Rr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${F.cssPrefix}-layers-counter`].concat(C(a))}})})}}}},Di={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?R:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Mr({type:`text`,content:e},function(){return Y(`beforeDOMElementCreation`,{content:e,params:t}),Lr({content:e,transform:S(S({},R),r),extra:{attributes:s,styles:l,classes:[`${F.cssPrefix}-layers-text`].concat(C(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ze){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Lr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Oi=RegExp(`"`,`ug`),ki=[1105920,1112319],Ai=S(S(S(S({},{FontAwesome:{normal:`fas`,400:`fas`}}),At),Xt),Lt),ji=Object.keys(Ai).reduce(function(e,t){return e[t.toLowerCase()]=Ai[t],e},{}),Mi=Object.keys(ji).reduce(function(e,t){var n=ji[t];return e[t]=n[900]||C(Object.entries(n))[0][1],e},{});function Ni(e){return Jn(C(e.replace(Oi,``))[0]||``)}function Pi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Oi,``),r=n.codePointAt(0),i=r>=ki[0]&&r<=ki[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Fi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ji[n]||{})[i]||Mi[n]}function Ii(e,t){var n=`${tn}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=z(e.children).filter(function(e){return e.getAttribute(en)===t})[0],o=w.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(yn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Fi(s,l),p=Ni(d),m=c[0].startsWith(`FontAwesome`),h=Pi(o),g=lr(f,p),_=g;if(m){var v=fr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(nn)!==f||a.getAttribute(rn)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=hi(),b=y.extra;b.attributes[en]=t,Ur(g,f).then(function(i){var a=Ir(S(S({},y),{},{icons:{main:i,mask:pr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=T.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return U(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Li(e){return Promise.all([Ii(e,`::before`),Ii(e,`::after`)])}function Ri(e){return e.parentNode!==document.head&&!~sn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(en)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var zi=function(e){return!!e&&cn.some(function(t){return e.includes(t)})},Bi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=ye(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(zi(a)){var o=cn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(E){var n;if(t)n=e;else if(F.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=ye(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=ye(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=ye(Bi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){F.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=z(n).filter(Ri).map(Li),i=Jr.begin(`searchPseudoElements`);ci(),Promise.all(r).then(function(){i(),li(),e()}).catch(function(){i(),li(),t()})})}}var Hi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Vi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?T:t;F.searchPseudoElements&&Vi(n)}}},Ui=!1,Wi={mixout:function(){return{dom:{unwatch:function(){ci(),Ui=!0}}}},hooks:function(){return{bootstrap:function(){ui(Or(`mutationObserverCallbacks`,{}))},noAuto:function(){di()},watch:function(e){var t=e.observeMutationsRoot;Ui?li():ui(Or(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Gi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ki={mixout:function(){return{parse:{transform:function(e){return Gi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Gi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:S({},a.outer),children:[{tag:`g`,attributes:S({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:S(S({},t.icon.attributes),a.path)}]}]}}}},qi={x:0,y:0,width:`100%`,height:`100%`};function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Yi(e){return e.tag===`g`?e.children:[e]}Dr([Bn,wi,Ti,Ei,Di,Hi,Wi,Ki,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?yr(n.split(` `).map(function(e){return e.trim()})):pr();return r.prefix||=K(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Pn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:S(S({},qi),{},{fill:`white`})},p=c.children?{children:c.children.map(Ji)}:{},m={tag:`g`,attributes:S({},d.inner),children:[Ji(S({tag:c.tag,attributes:S(S({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:S({},d.outer),children:[m]},g=`mask-${a||kn()}`,_=`clip-${a||kn()}`,v={tag:`mask`,attributes:S(S({},qi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Yi(u)},v]};return t.push(y,{tag:`rect`,attributes:S({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},qi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;w.matchMedia&&(t=w.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:S(S({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=S(S({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:S(S({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:S(S({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:S(S({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:S(S({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:S(S({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:S(S({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:S(S({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Z}),Z.noAuto,Z.config;var Xi=Z.library,Zi=Z.dom;Z.parse,Z.findIconDefinition,Z.toHtml;var Qi=Z.icon;Z.layer,Z.text,Z.counter,Xi.add(te.faBars,ne.faComments,re.faGithub,ie.faInstagram,ae.faLinkedin,oe.faMagnifyingGlass,se.faSquareFacebook,ce.faThreads,le.faTriangleExclamation,ue.faXTwitter,de.faXmark,fe.faYoutube),Zi.watch();var $i=t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`fas`,n=`chevron-right`,r=320,i=512,a=[9002],o=`f054`,s=`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faChevronRight=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a}))(),ea={};function ta(e){let t=`${e.prefix}-${e.iconName}`;return ea[t]||(ea[t]=Qi(e,{classes:[`template-auto-icon fa-width-auto`]}).node[0]),ea[t].cloneNode(!0)}function na(e,t){let n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),r=[];for(;n.nextNode();)r.push(n.currentNode);if(r.length===0)return;let i=r[r.length-1],a=i.parentNode,o=i.nodeValue.lastIndexOf(` `),s=o===-1?i:i.splitText(o),c=document.createElement(`span`);c.className=`text-nowrap template-auto-icon-nowrap`,c.appendChild(s),c.appendChild(ta(t)),a.appendChild(c)}function ra(e){na(e,$i.faChevronRight)}function ia(e,t,n){n instanceof Element&&(n.matches(t)&&e.push(n),e.push.apply(e,n.querySelectorAll(t)))}function aa(e,t,n){for(let r=0,i=n.length;r<i;r++)ia(e,t,n[r])}function oa(e,t,n){let r=[],i=function(e){for(let t=0,i=e.length;t<i;t++){let i=e[t];r.indexOf(i)===-1&&(n(e[t]),r.push(i))}};i(document.querySelectorAll(e)),new MutationObserver(function(t){let n=[];for(let r=0,i=t.length;r<i;r++){let i=t[r];i.type===`childList`?aa(n,e,i.addedNodes):i.type===`attributes`&&ia(n,e,i.target)}i(n)}).observe(document,t)}oa(`h1 a[href]:not(.skip-template-auto-icon), h2 a[href]:not(.skip-template-auto-icon), h3 a[href]:not(.skip-template-auto-icon), h4 a[href]:not(.skip-template-auto-icon), h5 a[href]:not(.skip-template-auto-icon), h6 a[href]:not(.skip-template-auto-icon)`,{childList:!0,subtree:!0},ra),(0,e(n(),1).default)(()=>{let e=document.getElementById(`toc`);if(e){let t=document.createElement(`ul`),n=t,r,i;document.querySelectorAll(`main h2, main h3`).forEach(e=>{if(e.id||=e.innerText.toLowerCase().replace(/[^a-z0-9 -]/gi,``).replace(/ /gi,`-`).substr(0,50),r)if(e.tagName>r.tagName){let e=document.createElement(`ul`);i.appendChild(e),n=e}else e.tagName<r.tagName&&(n=n.parentElement.parentElement);let t=document.createElement(`a`);t.href=`#${e.id}`,t.innerText=e.innerText;let a=document.createElement(`li`);a.appendChild(t),n.appendChild(a),r=e,i=a}),t.firstChild&&(e.hidden=!1,e.appendChild(t))}});
//# sourceMappingURL=all-CZ6tAq5i.js.map