(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ud(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function hd(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Je(s)?sA(s):hd(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Je(t))return t;if(Be(t))return t}}const eA=/;(?![^(]*\))/g,tA=/:([^]+)/,nA=/\/\*.*?\*\//gs;function sA(t){const e={};return t.replace(nA,"").split(eA).forEach(n=>{if(n){const s=n.split(tA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yn(t){let e="";if(Je(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const s=Yn(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rA=ud(iA);function T_(t){return!!t||t===""}const Ro=t=>Je(t)?t:t==null?"":oe(t)||Be(t)&&(t.toString===S_||!le(t.toString))?JSON.stringify(t,C_,2):String(t),C_=(t,e)=>e&&e.__v_isRef?C_(t,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:I_(e)?{[`Set(${e.size})`]:[...e.values()]}:Be(e)&&!oe(e)&&!R_(e)?String(e):e,Me={},Di=[],gn=()=>{},oA=()=>!1,aA=/^on[^a-z]/,Pl=t=>aA.test(t),dd=t=>t.startsWith("onUpdate:"),Ut=Object.assign,fd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lA=Object.prototype.hasOwnProperty,we=(t,e)=>lA.call(t,e),oe=Array.isArray,Mi=t=>xl(t)==="[object Map]",I_=t=>xl(t)==="[object Set]",le=t=>typeof t=="function",Je=t=>typeof t=="string",pd=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",A_=t=>Be(t)&&le(t.then)&&le(t.catch),S_=Object.prototype.toString,xl=t=>S_.call(t),cA=t=>xl(t).slice(8,-1),R_=t=>xl(t)==="[object Object]",md=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Aa=ud(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uA=/-(\w)/g,Hi=Nl(t=>t.replace(uA,(e,n)=>n?n.toUpperCase():"")),hA=/\B([A-Z])/g,ai=Nl(t=>t.replace(hA,"-$1").toLowerCase()),k_=Nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gc=Nl(t=>t?`on${k_(t)}`:""),no=(t,e)=>!Object.is(t,e),Sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ja=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xp;const dA=()=>Xp||(Xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Gt;class O_{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function P_(t){return new O_(t)}function fA(t,e=Gt){e&&e.active&&e.effects.push(t)}function pA(){return Gt}function mA(t){Gt&&Gt.cleanups.push(t)}const gd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},x_=t=>(t.w&Ts)>0,N_=t=>(t.n&Ts)>0,gA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ts},yA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];x_(i)&&!N_(i)?i.delete(t):e[n++]=i,i.w&=~Ts,i.n&=~Ts}e.length=n}},Ku=new WeakMap;let Fr=0,Ts=1;const Gu=30;let cn;const Ws=Symbol(""),Qu=Symbol("");class yd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fA(this,s)}run(){if(!this.active)return this.fn();let e=cn,n=ys;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,ys=!0,Ts=1<<++Fr,Fr<=Gu?gA(this):Jp(this),this.fn()}finally{Fr<=Gu&&yA(this),Ts=1<<--Fr,cn=this.parent,ys=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(Jp(this),this.onStop&&this.onStop(),this.active=!1)}}function Jp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ys=!0;const D_=[];function ur(){D_.push(ys),ys=!1}function hr(){const t=D_.pop();ys=t===void 0?!0:t}function Zt(t,e,n){if(ys&&cn){let s=Ku.get(t);s||Ku.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=gd()),M_(i)}}function M_(t,e){let n=!1;Fr<=Gu?N_(t)||(t.n|=Ts,n=!x_(t)):n=!t.has(cn),n&&(t.add(cn),cn.deps.push(t))}function Xn(t,e,n,s,i,r){const o=Ku.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=qa(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?md(n)&&a.push(o.get("length")):(a.push(o.get(Ws)),Mi(t)&&a.push(o.get(Qu)));break;case"delete":oe(t)||(a.push(o.get(Ws)),Mi(t)&&a.push(o.get(Qu)));break;case"set":Mi(t)&&a.push(o.get(Ws));break}if(a.length===1)a[0]&&Yu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Yu(gd(l))}}function Yu(t,e){const n=oe(t)?t:[...t];for(const s of n)s.computed&&Zp(s);for(const s of n)s.computed||Zp(s)}function Zp(t,e){(t!==cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _A=ud("__proto__,__v_isRef,__isVue"),L_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pd)),wA=_d(),vA=_d(!1,!0),bA=_d(!0),em=EA();function EA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ie(this);for(let r=0,o=this.length;r<o;r++)Zt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ur();const s=Ie(this)[e].apply(this,n);return hr(),s}}),t}function _d(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?UA:V_:e?B_:$_).get(s))return s;const o=oe(s);if(!t&&o&&we(em,i))return Reflect.get(em,i,r);const a=Reflect.get(s,i,r);return(pd(i)?L_.has(i):_A(i))||(t||Zt(s,"get",i),e)?a:pt(a)?o&&md(i)?a:a.value:Be(a)?t?j_(a):ko(a):a}}const TA=F_(),CA=F_(!0);function F_(t=!1){return function(n,s,i,r){let o=n[s];if(Wi(o)&&pt(o)&&!pt(i))return!1;if(!t&&(!Ha(i)&&!Wi(i)&&(o=Ie(o),i=Ie(i)),!oe(n)&&pt(o)&&!pt(i)))return o.value=i,!0;const a=oe(n)&&md(s)?Number(s)<n.length:we(n,s),l=Reflect.set(n,s,i,r);return n===Ie(r)&&(a?no(i,o)&&Xn(n,"set",s,i):Xn(n,"add",s,i)),l}}function IA(t,e){const n=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Xn(t,"delete",e,void 0),s}function AA(t,e){const n=Reflect.has(t,e);return(!pd(e)||!L_.has(e))&&Zt(t,"has",e),n}function SA(t){return Zt(t,"iterate",oe(t)?"length":Ws),Reflect.ownKeys(t)}const U_={get:wA,set:TA,deleteProperty:IA,has:AA,ownKeys:SA},RA={get:bA,set(t,e){return!0},deleteProperty(t,e){return!0}},kA=Ut({},U_,{get:vA,set:CA}),wd=t=>t,Dl=t=>Reflect.getPrototypeOf(t);function aa(t,e,n=!1,s=!1){t=t.__v_raw;const i=Ie(t),r=Ie(e);n||(e!==r&&Zt(i,"get",e),Zt(i,"get",r));const{has:o}=Dl(i),a=s?wd:n?Td:so;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function la(t,e=!1){const n=this.__v_raw,s=Ie(n),i=Ie(t);return e||(t!==i&&Zt(s,"has",t),Zt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ca(t,e=!1){return t=t.__v_raw,!e&&Zt(Ie(t),"iterate",Ws),Reflect.get(t,"size",t)}function tm(t){t=Ie(t);const e=Ie(this);return Dl(e).has.call(e,t)||(e.add(t),Xn(e,"add",t,t)),this}function nm(t,e){e=Ie(e);const n=Ie(this),{has:s,get:i}=Dl(n);let r=s.call(n,t);r||(t=Ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?no(e,o)&&Xn(n,"set",t,e):Xn(n,"add",t,e),this}function sm(t){const e=Ie(this),{has:n,get:s}=Dl(e);let i=n.call(e,t);i||(t=Ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Xn(e,"delete",t,void 0),r}function im(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Xn(t,"clear",void 0,void 0),n}function ua(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Ie(o),l=e?wd:t?Td:so;return!t&&Zt(a,"iterate",Ws),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ha(t,e,n){return function(...s){const i=this.__v_raw,r=Ie(i),o=Mi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?wd:e?Td:so;return!e&&Zt(r,"iterate",l?Qu:Ws),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function as(t){return function(...e){return t==="delete"?!1:this}}function OA(){const t={get(r){return aa(this,r)},get size(){return ca(this)},has:la,add:tm,set:nm,delete:sm,clear:im,forEach:ua(!1,!1)},e={get(r){return aa(this,r,!1,!0)},get size(){return ca(this)},has:la,add:tm,set:nm,delete:sm,clear:im,forEach:ua(!1,!0)},n={get(r){return aa(this,r,!0)},get size(){return ca(this,!0)},has(r){return la.call(this,r,!0)},add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear"),forEach:ua(!0,!1)},s={get(r){return aa(this,r,!0,!0)},get size(){return ca(this,!0)},has(r){return la.call(this,r,!0)},add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ha(r,!1,!1),n[r]=ha(r,!0,!1),e[r]=ha(r,!1,!0),s[r]=ha(r,!0,!0)}),[t,n,e,s]}const[PA,xA,NA,DA]=OA();function vd(t,e){const n=e?t?DA:NA:t?xA:PA;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(we(n,i)&&i in s?n:s,i,r)}const MA={get:vd(!1,!1)},LA={get:vd(!1,!0)},FA={get:vd(!0,!1)},$_=new WeakMap,B_=new WeakMap,V_=new WeakMap,UA=new WeakMap;function $A(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BA(t){return t.__v_skip||!Object.isExtensible(t)?0:$A(cA(t))}function ko(t){return Wi(t)?t:bd(t,!1,U_,MA,$_)}function VA(t){return bd(t,!1,kA,LA,B_)}function j_(t){return bd(t,!0,RA,FA,V_)}function bd(t,e,n,s,i){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=BA(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Li(t){return Wi(t)?Li(t.__v_raw):!!(t&&t.__v_isReactive)}function Wi(t){return!!(t&&t.__v_isReadonly)}function Ha(t){return!!(t&&t.__v_isShallow)}function q_(t){return Li(t)||Wi(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Ed(t){return ja(t,"__v_skip",!0),t}const so=t=>Be(t)?ko(t):t,Td=t=>Be(t)?j_(t):t;function H_(t){ys&&cn&&(t=Ie(t),M_(t.dep||(t.dep=gd())))}function W_(t,e){t=Ie(t),t.dep&&Yu(t.dep)}function pt(t){return!!(t&&t.__v_isRef===!0)}function At(t){return K_(t,!1)}function z_(t){return K_(t,!0)}function K_(t,e){return pt(t)?t:new jA(t,e)}class jA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:so(e)}get value(){return H_(this),this._value}set value(e){const n=this.__v_isShallow||Ha(e)||Wi(e);e=n?e:Ie(e),no(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:so(e),W_(this))}}function vt(t){return pt(t)?t.value:t}const qA={get:(t,e,n)=>vt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pt(i)&&!pt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function G_(t){return Li(t)?t:new Proxy(t,qA)}var Q_;class HA{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Q_]=!1,this._dirty=!0,this.effect=new yd(e,()=>{this._dirty||(this._dirty=!0,W_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Ie(this);return H_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Q_="__v_isReadonly";function WA(t,e,n=!1){let s,i;const r=le(t);return r?(s=t,i=gn):(s=t.get,i=t.set),new HA(s,i,r||!i,n)}function _s(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ml(r,e,n)}return i}function yn(t,e,n,s){if(le(t)){const r=_s(t,e,n,s);return r&&A_(r)&&r.catch(o=>{Ml(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(yn(t[r],e,n,s));return i}function Ml(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){_s(l,null,10,[t,o,a]);return}}zA(t,n,i,s)}function zA(t,e,n,s=!0){console.error(t)}let io=!1,Xu=!1;const Ct=[];let An=0;const Fi=[];let Bn=null,Us=0;const Y_=Promise.resolve();let Cd=null;function X_(t){const e=Cd||Y_;return t?e.then(this?t.bind(this):t):e}function KA(t){let e=An+1,n=Ct.length;for(;e<n;){const s=e+n>>>1;ro(Ct[s])<t?e=s+1:n=s}return e}function Id(t){(!Ct.length||!Ct.includes(t,io&&t.allowRecurse?An+1:An))&&(t.id==null?Ct.push(t):Ct.splice(KA(t.id),0,t),J_())}function J_(){!io&&!Xu&&(Xu=!0,Cd=Y_.then(ew))}function GA(t){const e=Ct.indexOf(t);e>An&&Ct.splice(e,1)}function QA(t){oe(t)?Fi.push(...t):(!Bn||!Bn.includes(t,t.allowRecurse?Us+1:Us))&&Fi.push(t),J_()}function rm(t,e=io?An+1:0){for(;e<Ct.length;e++){const n=Ct[e];n&&n.pre&&(Ct.splice(e,1),e--,n())}}function Z_(t){if(Fi.length){const e=[...new Set(Fi)];if(Fi.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((n,s)=>ro(n)-ro(s)),Us=0;Us<Bn.length;Us++)Bn[Us]();Bn=null,Us=0}}const ro=t=>t.id==null?1/0:t.id,YA=(t,e)=>{const n=ro(t)-ro(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ew(t){Xu=!1,io=!0,Ct.sort(YA);const e=gn;try{for(An=0;An<Ct.length;An++){const n=Ct[An];n&&n.active!==!1&&_s(n,null,14)}}finally{An=0,Ct.length=0,Z_(),io=!1,Cd=null,(Ct.length||Fi.length)&&ew()}}function XA(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Me;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[u]||Me;p&&(i=n.map(g=>Je(g)?g.trim():g)),h&&(i=n.map(qa))}let a,l=s[a=Gc(e)]||s[a=Gc(Hi(e))];!l&&r&&(l=s[a=Gc(ai(e))]),l&&yn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(c,t,6,i)}}function tw(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!le(t)){const l=c=>{const u=tw(c,e,!0);u&&(a=!0,Ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Be(t)&&s.set(t,null),null):(oe(r)?r.forEach(l=>o[l]=null):Ut(o,r),Be(t)&&s.set(t,o),o)}function Ll(t,e){return!t||!Pl(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,ai(e))||we(t,e))}let rn=null,Fl=null;function Wa(t){const e=rn;return rn=t,Fl=t&&t.type.__scopeId||null,e}function nw(t){Fl=t}function sw(){Fl=null}function JA(t,e=rn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fm(-1);const r=Wa(e);let o;try{o=t(...i)}finally{Wa(r),s._d&&fm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:p,setupState:g,ctx:y,inheritAttrs:v}=t;let E,A;const x=Wa(t);try{if(n.shapeFlag&4){const S=i||s;E=In(u.call(S,S,h,r,g,p,y)),A=l}else{const S=e;E=In(S.length>1?S(r,{attrs:l,slots:a,emit:c}):S(r,null)),A=e.props?l:ZA(l)}}catch(S){Hr.length=0,Ml(S,t,1),E=at(Js)}let R=E;if(A&&v!==!1){const S=Object.keys(A),{shapeFlag:H}=R;S.length&&H&7&&(o&&S.some(dd)&&(A=eS(A,o)),R=Ki(R,A))}return n.dirs&&(R=Ki(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),E=R,Wa(x),E}const ZA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pl(n))&&((e||(e={}))[n]=t[n]);return e},eS=(t,e)=>{const n={};for(const s in t)(!dd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tS(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?om(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Ll(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?om(s,o,c):!0:!!o;return!1}function om(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ll(n,r))return!0}return!1}function nS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sS=t=>t.__isSuspense;function iS(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):QA(t)}function Ra(t,e){if(dt){let n=dt.provides;const s=dt.parent&&dt.parent.provides;s===n&&(n=dt.provides=Object.create(s)),n[t]=e}}function Qt(t,e,n=!1){const s=dt||rn;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&le(e)?e.call(s.proxy):e}}function rS(t,e){return Ad(t,null,{flush:"post"})}const da={};function zs(t,e,n){return Ad(t,e,n)}function Ad(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Me){const a=dt;let l,c=!1,u=!1;if(pt(t)?(l=()=>t.value,c=Ha(t)):Li(t)?(l=()=>t,s=!0):oe(t)?(u=!0,c=t.some(R=>Li(R)||Ha(R)),l=()=>t.map(R=>{if(pt(R))return R.value;if(Li(R))return Bs(R);if(le(R))return _s(R,a,2)})):le(t)?e?l=()=>_s(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),yn(t,a,3,[p])}:l=gn,e&&s){const R=l;l=()=>Bs(R())}let h,p=R=>{h=A.onStop=()=>{_s(R,a,4)}},g;if(ao)if(p=gn,e?n&&yn(e,a,3,[l(),u?[]:void 0,p]):l(),i==="sync"){const R=YS();g=R.__watcherHandles||(R.__watcherHandles=[])}else return gn;let y=u?new Array(t.length).fill(da):da;const v=()=>{if(!!A.active)if(e){const R=A.run();(s||c||(u?R.some((S,H)=>no(S,y[H])):no(R,y)))&&(h&&h(),yn(e,a,3,[R,y===da?void 0:u&&y[0]===da?[]:y,p]),y=R)}else A.run()};v.allowRecurse=!!e;let E;i==="sync"?E=v:i==="post"?E=()=>Bt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),E=()=>Id(v));const A=new yd(l,E);e?n?v():y=A.run():i==="post"?Bt(A.run.bind(A),a&&a.suspense):A.run();const x=()=>{A.stop(),a&&a.scope&&fd(a.scope.effects,A)};return g&&g.push(x),x}function oS(t,e,n){const s=this.proxy,i=Je(t)?t.includes(".")?iw(s,t):()=>s[t]:t.bind(s,s);let r;le(e)?r=e:(r=e.handler,n=e);const o=dt;Gi(this);const a=Ad(i,r.bind(s),n);return o?Gi(o):Ks(),a}function iw(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Bs(t,e){if(!Be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pt(t))Bs(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)Bs(t[n],e);else if(I_(t)||Mi(t))t.forEach(n=>{Bs(n,e)});else if(R_(t))for(const n in t)Bs(t[n],e);return t}function vn(t){return le(t)?{setup:t,name:t.name}:t}const ka=t=>!!t.type.__asyncLoader,rw=t=>t.type.__isKeepAlive;function aS(t,e){ow(t,"a",e)}function lS(t,e){ow(t,"da",e)}function ow(t,e,n=dt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ul(e,s,n),n){let i=n.parent;for(;i&&i.parent;)rw(i.parent.vnode)&&cS(s,e,n,i),i=i.parent}}function cS(t,e,n,s){const i=Ul(e,t,s,!0);Rd(()=>{fd(s[e],i)},n)}function Ul(t,e,n=dt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ur(),Gi(n);const a=yn(e,n,t,o);return Ks(),hr(),a});return s?i.unshift(r):i.push(r),r}}const is=t=>(e,n=dt)=>(!ao||t==="sp")&&Ul(t,(...s)=>e(...s),n),uS=is("bm"),Sd=is("m"),hS=is("bu"),dS=is("u"),fS=is("bum"),Rd=is("um"),aw=is("sp"),pS=is("rtg"),mS=is("rtc");function gS(t,e=dt){Ul("ec",t,e)}function yS(t,e){const n=rn;if(n===null)return t;const s=jl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Me]=e[r];o&&(le(o)&&(o={mounted:o,updated:o}),o.deep&&Bs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ns(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ur(),yn(l,n,8,[t.el,a,t,e]),hr())}}const _S=Symbol();function wS(t,e,n,s){let i;const r=n&&n[s];if(oe(t)||Je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Be(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Ju=t=>t?_w(t)?jl(t)||t.proxy:Ju(t.parent):null,qr=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ju(t.parent),$root:t=>Ju(t.root),$emit:t=>t.emit,$options:t=>kd(t),$forceUpdate:t=>t.f||(t.f=()=>Id(t.update)),$nextTick:t=>t.n||(t.n=X_.bind(t.proxy)),$watch:t=>oS.bind(t)}),Yc=(t,e)=>t!==Me&&!t.__isScriptSetup&&we(t,e),vS={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Yc(s,e))return o[e]=1,s[e];if(i!==Me&&we(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&we(c,e))return o[e]=3,r[e];if(n!==Me&&we(n,e))return o[e]=4,n[e];Zu&&(o[e]=0)}}const u=qr[e];let h,p;if(u)return e==="$attrs"&&Zt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Me&&we(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,we(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Yc(i,e)?(i[e]=n,!0):s!==Me&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Me&&we(t,o)||Yc(e,o)||(a=r[0])&&we(a,o)||we(s,o)||we(qr,o)||we(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Zu=!0;function bS(t){const e=kd(t),n=t.proxy,s=t.ctx;Zu=!1,e.beforeCreate&&am(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:y,activated:v,deactivated:E,beforeDestroy:A,beforeUnmount:x,destroyed:R,unmounted:S,render:H,renderTracked:j,renderTriggered:he,errorCaptured:Ae,serverPrefetch:et,expose:Ee,inheritAttrs:tt,components:ze,directives:qt,filters:Ve}=e;if(c&&ES(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ke in o){const fe=o[ke];le(fe)&&(s[ke]=fe.bind(n))}if(i){const ke=i.call(n,n);Be(ke)&&(t.data=ko(ke))}if(Zu=!0,r)for(const ke in r){const fe=r[ke],ct=le(fe)?fe.bind(n,n):le(fe.get)?fe.get.bind(n,n):gn,bn=!le(fe)&&le(fe.set)?fe.set.bind(n):gn,yt=un({get:ct,set:bn});Object.defineProperty(s,ke,{enumerable:!0,configurable:!0,get:()=>yt.value,set:nt=>yt.value=nt})}if(a)for(const ke in a)lw(a[ke],s,n,ke);if(l){const ke=le(l)?l.call(n):l;Reflect.ownKeys(ke).forEach(fe=>{Ra(fe,ke[fe])})}u&&am(u,t,"c");function Se(ke,fe){oe(fe)?fe.forEach(ct=>ke(ct.bind(n))):fe&&ke(fe.bind(n))}if(Se(uS,h),Se(Sd,p),Se(hS,g),Se(dS,y),Se(aS,v),Se(lS,E),Se(gS,Ae),Se(mS,j),Se(pS,he),Se(fS,x),Se(Rd,S),Se(aw,et),oe(Ee))if(Ee.length){const ke=t.exposed||(t.exposed={});Ee.forEach(fe=>{Object.defineProperty(ke,fe,{get:()=>n[fe],set:ct=>n[fe]=ct})})}else t.exposed||(t.exposed={});H&&t.render===gn&&(t.render=H),tt!=null&&(t.inheritAttrs=tt),ze&&(t.components=ze),qt&&(t.directives=qt)}function ES(t,e,n=gn,s=!1){oe(t)&&(t=eh(t));for(const i in t){const r=t[i];let o;Be(r)?"default"in r?o=Qt(r.from||i,r.default,!0):o=Qt(r.from||i):o=Qt(r),pt(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function am(t,e,n){yn(oe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function lw(t,e,n,s){const i=s.includes(".")?iw(n,s):()=>n[s];if(Je(t)){const r=e[t];le(r)&&zs(i,r)}else if(le(t))zs(i,t.bind(n));else if(Be(t))if(oe(t))t.forEach(r=>lw(r,e,n,s));else{const r=le(t.handler)?t.handler.bind(n):e[t.handler];le(r)&&zs(i,r,t)}}function kd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>za(l,c,o,!0)),za(l,e,o)),Be(e)&&r.set(e,l),l}function za(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&za(t,r,n,!0),i&&i.forEach(o=>za(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=TS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TS={data:lm,props:Ms,emits:Ms,methods:Ms,computed:Ms,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ms,directives:Ms,watch:IS,provide:lm,inject:CS};function lm(t,e){return e?t?function(){return Ut(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function CS(t,e){return Ms(eh(t),eh(e))}function eh(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?Ut(Ut(Object.create(null),t),e):e}function IS(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const s in e)n[s]=Mt(t[s],e[s]);return n}function AS(t,e,n,s=!1){const i={},r={};ja(r,Bl,1),t.propsDefaults=Object.create(null),cw(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:VA(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function SS(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Ll(t.emitsOptions,p))continue;const g=e[p];if(l)if(we(r,p))g!==r[p]&&(r[p]=g,c=!0);else{const y=Hi(p);i[y]=th(l,a,y,g,t,!1)}else g!==r[p]&&(r[p]=g,c=!0)}}}else{cw(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!we(e,h)&&((u=ai(h))===h||!we(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=th(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!we(e,h)&&!0)&&(delete r[h],c=!0)}c&&Xn(t,"set","$attrs")}function cw(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Aa(l))continue;const c=e[l];let u;i&&we(i,u=Hi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ll(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Ie(n),c=a||Me;for(let u=0;u<r.length;u++){const h=r[u];n[h]=th(i,l,h,c[h],t,!we(c,h))}}return o}function th(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&le(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Gi(i),s=c[n]=l.call(null,e),Ks())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ai(n))&&(s=!0))}return s}function uw(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!le(t)){const u=h=>{l=!0;const[p,g]=uw(h,e,!0);Ut(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Be(t)&&s.set(t,Di),Di;if(oe(r))for(let u=0;u<r.length;u++){const h=Hi(r[u]);cm(h)&&(o[h]=Me)}else if(r)for(const u in r){const h=Hi(u);if(cm(h)){const p=r[u],g=o[h]=oe(p)||le(p)?{type:p}:Object.assign({},p);if(g){const y=dm(Boolean,g.type),v=dm(String,g.type);g[0]=y>-1,g[1]=v<0||y<v,(y>-1||we(g,"default"))&&a.push(h)}}}const c=[o,a];return Be(t)&&s.set(t,c),c}function cm(t){return t[0]!=="$"}function um(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hm(t,e){return um(t)===um(e)}function dm(t,e){return oe(e)?e.findIndex(n=>hm(n,t)):le(e)&&hm(e,t)?0:-1}const hw=t=>t[0]==="_"||t==="$stable",Od=t=>oe(t)?t.map(In):[In(t)],RS=(t,e,n)=>{if(e._n)return e;const s=JA((...i)=>Od(e(...i)),n);return s._c=!1,s},dw=(t,e,n)=>{const s=t._ctx;for(const i in t){if(hw(i))continue;const r=t[i];if(le(r))e[i]=RS(i,r,s);else if(r!=null){const o=Od(r);e[i]=()=>o}}},fw=(t,e)=>{const n=Od(e);t.slots.default=()=>n},kS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),ja(e,"_",n)):dw(e,t.slots={})}else t.slots={},e&&fw(t,e);ja(t.slots,Bl,1)},OS=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ut(i,e),!n&&a===1&&delete i._):(r=!e.$stable,dw(e,i)),o=e}else e&&(fw(t,e),o={default:1});if(r)for(const a in i)!hw(a)&&!(a in o)&&delete i[a]};function pw(){return{app:null,config:{isNativeTag:oA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let PS=0;function xS(t,e){return function(s,i=null){le(s)||(s=Object.assign({},s)),i!=null&&!Be(i)&&(i=null);const r=pw(),o=new Set;let a=!1;const l=r.app={_uid:PS++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:XS,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&le(c.install)?(o.add(c),c.install(l,...u)):le(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const p=at(s,i);return p.appContext=r,u&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,jl(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function nh(t,e,n,s,i=!1){if(oe(t)){t.forEach((p,g)=>nh(p,e&&(oe(e)?e[g]:e),n,s,i));return}if(ka(s)&&!i)return;const r=s.shapeFlag&4?jl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Je(c)?(u[c]=null,we(h,c)&&(h[c]=null)):pt(c)&&(c.value=null)),le(l))_s(l,a,12,[o,u]);else{const p=Je(l),g=pt(l);if(p||g){const y=()=>{if(t.f){const v=p?we(h,l)?h[l]:u[l]:l.value;i?oe(v)&&fd(v,r):oe(v)?v.includes(r)||v.push(r):p?(u[l]=[r],we(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,we(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Bt(y,n)):y()}}}const Bt=iS;function NS(t){return DS(t)}function DS(t,e){const n=dA();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=gn,insertStaticContent:y}=t,v=(_,b,C,k=null,T=null,D=null,U=!1,L=null,N=!!b.dynamicChildren)=>{if(_===b)return;_&&!Or(_,b)&&(k=B(_),nt(_,T,D,!0),_=null),b.patchFlag===-2&&(N=!1,b.dynamicChildren=null);const{type:O,ref:G,shapeFlag:W}=b;switch(O){case $l:E(_,b,C,k);break;case Js:A(_,b,C,k);break;case Oa:_==null&&x(b,C,k,U);break;case ln:ze(_,b,C,k,T,D,U,L,N);break;default:W&1?H(_,b,C,k,T,D,U,L,N):W&6?qt(_,b,C,k,T,D,U,L,N):(W&64||W&128)&&O.process(_,b,C,k,T,D,U,L,N,te)}G!=null&&T&&nh(G,_&&_.ref,D,b||_,!b)},E=(_,b,C,k)=>{if(_==null)s(b.el=a(b.children),C,k);else{const T=b.el=_.el;b.children!==_.children&&c(T,b.children)}},A=(_,b,C,k)=>{_==null?s(b.el=l(b.children||""),C,k):b.el=_.el},x=(_,b,C,k)=>{[_.el,_.anchor]=y(_.children,b,C,k,_.el,_.anchor)},R=({el:_,anchor:b},C,k)=>{let T;for(;_&&_!==b;)T=p(_),s(_,C,k),_=T;s(b,C,k)},S=({el:_,anchor:b})=>{let C;for(;_&&_!==b;)C=p(_),i(_),_=C;i(b)},H=(_,b,C,k,T,D,U,L,N)=>{U=U||b.type==="svg",_==null?j(b,C,k,T,D,U,L,N):et(_,b,T,D,U,L,N)},j=(_,b,C,k,T,D,U,L)=>{let N,O;const{type:G,props:W,shapeFlag:q,transition:Z,dirs:ue}=_;if(N=_.el=o(_.type,D,W&&W.is,W),q&8?u(N,_.children):q&16&&Ae(_.children,N,null,k,T,D&&G!=="foreignObject",U,L),ue&&Ns(_,null,k,"created"),W){for(const ve in W)ve!=="value"&&!Aa(ve)&&r(N,ve,null,W[ve],D,_.children,k,T,V);"value"in W&&r(N,"value",null,W.value),(O=W.onVnodeBeforeMount)&&Cn(O,k,_)}he(N,_,_.scopeId,U,k),ue&&Ns(_,null,k,"beforeMount");const Re=(!T||T&&!T.pendingBranch)&&Z&&!Z.persisted;Re&&Z.beforeEnter(N),s(N,b,C),((O=W&&W.onVnodeMounted)||Re||ue)&&Bt(()=>{O&&Cn(O,k,_),Re&&Z.enter(N),ue&&Ns(_,null,k,"mounted")},T)},he=(_,b,C,k,T)=>{if(C&&g(_,C),k)for(let D=0;D<k.length;D++)g(_,k[D]);if(T){let D=T.subTree;if(b===D){const U=T.vnode;he(_,U,U.scopeId,U.slotScopeIds,T.parent)}}},Ae=(_,b,C,k,T,D,U,L,N=0)=>{for(let O=N;O<_.length;O++){const G=_[O]=L?hs(_[O]):In(_[O]);v(null,G,b,C,k,T,D,U,L)}},et=(_,b,C,k,T,D,U)=>{const L=b.el=_.el;let{patchFlag:N,dynamicChildren:O,dirs:G}=b;N|=_.patchFlag&16;const W=_.props||Me,q=b.props||Me;let Z;C&&Ds(C,!1),(Z=q.onVnodeBeforeUpdate)&&Cn(Z,C,b,_),G&&Ns(b,_,C,"beforeUpdate"),C&&Ds(C,!0);const ue=T&&b.type!=="foreignObject";if(O?Ee(_.dynamicChildren,O,L,C,k,ue,D):U||fe(_,b,L,null,C,k,ue,D,!1),N>0){if(N&16)tt(L,b,W,q,C,k,T);else if(N&2&&W.class!==q.class&&r(L,"class",null,q.class,T),N&4&&r(L,"style",W.style,q.style,T),N&8){const Re=b.dynamicProps;for(let ve=0;ve<Re.length;ve++){const je=Re[ve],Wt=W[je],ie=q[je];(ie!==Wt||je==="value")&&r(L,je,Wt,ie,T,_.children,C,k,V)}}N&1&&_.children!==b.children&&u(L,b.children)}else!U&&O==null&&tt(L,b,W,q,C,k,T);((Z=q.onVnodeUpdated)||G)&&Bt(()=>{Z&&Cn(Z,C,b,_),G&&Ns(b,_,C,"updated")},k)},Ee=(_,b,C,k,T,D,U)=>{for(let L=0;L<b.length;L++){const N=_[L],O=b[L],G=N.el&&(N.type===ln||!Or(N,O)||N.shapeFlag&70)?h(N.el):C;v(N,O,G,null,k,T,D,U,!0)}},tt=(_,b,C,k,T,D,U)=>{if(C!==k){if(C!==Me)for(const L in C)!Aa(L)&&!(L in k)&&r(_,L,C[L],null,U,b.children,T,D,V);for(const L in k){if(Aa(L))continue;const N=k[L],O=C[L];N!==O&&L!=="value"&&r(_,L,O,N,U,b.children,T,D,V)}"value"in k&&r(_,"value",C.value,k.value)}},ze=(_,b,C,k,T,D,U,L,N)=>{const O=b.el=_?_.el:a(""),G=b.anchor=_?_.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:Z}=b;Z&&(L=L?L.concat(Z):Z),_==null?(s(O,C,k),s(G,C,k),Ae(b.children,C,G,T,D,U,L,N)):W>0&&W&64&&q&&_.dynamicChildren?(Ee(_.dynamicChildren,q,C,T,D,U,L),(b.key!=null||T&&b===T.subTree)&&mw(_,b,!0)):fe(_,b,C,G,T,D,U,L,N)},qt=(_,b,C,k,T,D,U,L,N)=>{b.slotScopeIds=L,_==null?b.shapeFlag&512?T.ctx.activate(b,C,k,U,N):Ve(b,C,k,T,D,U,N):Ht(_,b,N)},Ve=(_,b,C,k,T,D,U)=>{const L=_.component=HS(_,k,T);if(rw(_)&&(L.ctx.renderer=te),WS(L),L.asyncDep){if(T&&T.registerDep(L,Se),!_.el){const N=L.subTree=at(Js);A(null,N,b,C)}return}Se(L,_,b,C,T,D,U)},Ht=(_,b,C)=>{const k=b.component=_.component;if(tS(_,b,C))if(k.asyncDep&&!k.asyncResolved){ke(k,b,C);return}else k.next=b,GA(k.update),k.update();else b.el=_.el,k.vnode=b},Se=(_,b,C,k,T,D,U)=>{const L=()=>{if(_.isMounted){let{next:G,bu:W,u:q,parent:Z,vnode:ue}=_,Re=G,ve;Ds(_,!1),G?(G.el=ue.el,ke(_,G,U)):G=ue,W&&Sa(W),(ve=G.props&&G.props.onVnodeBeforeUpdate)&&Cn(ve,Z,G,ue),Ds(_,!0);const je=Qc(_),Wt=_.subTree;_.subTree=je,v(Wt,je,h(Wt.el),B(Wt),_,T,D),G.el=je.el,Re===null&&nS(_,je.el),q&&Bt(q,T),(ve=G.props&&G.props.onVnodeUpdated)&&Bt(()=>Cn(ve,Z,G,ue),T)}else{let G;const{el:W,props:q}=b,{bm:Z,m:ue,parent:Re}=_,ve=ka(b);if(Ds(_,!1),Z&&Sa(Z),!ve&&(G=q&&q.onVnodeBeforeMount)&&Cn(G,Re,b),Ds(_,!0),W&&ce){const je=()=>{_.subTree=Qc(_),ce(W,_.subTree,_,T,null)};ve?b.type.__asyncLoader().then(()=>!_.isUnmounted&&je()):je()}else{const je=_.subTree=Qc(_);v(null,je,C,k,_,T,D),b.el=je.el}if(ue&&Bt(ue,T),!ve&&(G=q&&q.onVnodeMounted)){const je=b;Bt(()=>Cn(G,Re,je),T)}(b.shapeFlag&256||Re&&ka(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&Bt(_.a,T),_.isMounted=!0,b=C=k=null}},N=_.effect=new yd(L,()=>Id(O),_.scope),O=_.update=()=>N.run();O.id=_.uid,Ds(_,!0),O()},ke=(_,b,C)=>{b.component=_;const k=_.vnode.props;_.vnode=b,_.next=null,SS(_,b.props,k,C),OS(_,b.children,C),ur(),rm(),hr()},fe=(_,b,C,k,T,D,U,L,N=!1)=>{const O=_&&_.children,G=_?_.shapeFlag:0,W=b.children,{patchFlag:q,shapeFlag:Z}=b;if(q>0){if(q&128){bn(O,W,C,k,T,D,U,L,N);return}else if(q&256){ct(O,W,C,k,T,D,U,L,N);return}}Z&8?(G&16&&V(O,T,D),W!==O&&u(C,W)):G&16?Z&16?bn(O,W,C,k,T,D,U,L,N):V(O,T,D,!0):(G&8&&u(C,""),Z&16&&Ae(W,C,k,T,D,U,L,N))},ct=(_,b,C,k,T,D,U,L,N)=>{_=_||Di,b=b||Di;const O=_.length,G=b.length,W=Math.min(O,G);let q;for(q=0;q<W;q++){const Z=b[q]=N?hs(b[q]):In(b[q]);v(_[q],Z,C,null,T,D,U,L,N)}O>G?V(_,T,D,!0,!1,W):Ae(b,C,k,T,D,U,L,N,W)},bn=(_,b,C,k,T,D,U,L,N)=>{let O=0;const G=b.length;let W=_.length-1,q=G-1;for(;O<=W&&O<=q;){const Z=_[O],ue=b[O]=N?hs(b[O]):In(b[O]);if(Or(Z,ue))v(Z,ue,C,null,T,D,U,L,N);else break;O++}for(;O<=W&&O<=q;){const Z=_[W],ue=b[q]=N?hs(b[q]):In(b[q]);if(Or(Z,ue))v(Z,ue,C,null,T,D,U,L,N);else break;W--,q--}if(O>W){if(O<=q){const Z=q+1,ue=Z<G?b[Z].el:k;for(;O<=q;)v(null,b[O]=N?hs(b[O]):In(b[O]),C,ue,T,D,U,L,N),O++}}else if(O>q)for(;O<=W;)nt(_[O],T,D,!0),O++;else{const Z=O,ue=O,Re=new Map;for(O=ue;O<=q;O++){const Nt=b[O]=N?hs(b[O]):In(b[O]);Nt.key!=null&&Re.set(Nt.key,O)}let ve,je=0;const Wt=q-ue+1;let ie=!1,na=0;const Ps=new Array(Wt);for(O=0;O<Wt;O++)Ps[O]=0;for(O=Z;O<=W;O++){const Nt=_[O];if(je>=Wt){nt(Nt,T,D,!0);continue}let nn;if(Nt.key!=null)nn=Re.get(Nt.key);else for(ve=ue;ve<=q;ve++)if(Ps[ve-ue]===0&&Or(Nt,b[ve])){nn=ve;break}nn===void 0?nt(Nt,T,D,!0):(Ps[nn-ue]=O+1,nn>=na?na=nn:ie=!0,v(Nt,b[nn],C,null,T,D,U,L,N),je++)}const Ir=ie?MS(Ps):Di;for(ve=Ir.length-1,O=Wt-1;O>=0;O--){const Nt=ue+O,nn=b[Nt],En=Nt+1<G?b[Nt+1].el:k;Ps[O]===0?v(null,nn,C,En,T,D,U,L,N):ie&&(ve<0||O!==Ir[ve]?yt(nn,C,En,2):ve--)}}},yt=(_,b,C,k,T=null)=>{const{el:D,type:U,transition:L,children:N,shapeFlag:O}=_;if(O&6){yt(_.component.subTree,b,C,k);return}if(O&128){_.suspense.move(b,C,k);return}if(O&64){U.move(_,b,C,te);return}if(U===ln){s(D,b,C);for(let W=0;W<N.length;W++)yt(N[W],b,C,k);s(_.anchor,b,C);return}if(U===Oa){R(_,b,C);return}if(k!==2&&O&1&&L)if(k===0)L.beforeEnter(D),s(D,b,C),Bt(()=>L.enter(D),T);else{const{leave:W,delayLeave:q,afterLeave:Z}=L,ue=()=>s(D,b,C),Re=()=>{W(D,()=>{ue(),Z&&Z()})};q?q(D,ue,Re):Re()}else s(D,b,C)},nt=(_,b,C,k=!1,T=!1)=>{const{type:D,props:U,ref:L,children:N,dynamicChildren:O,shapeFlag:G,patchFlag:W,dirs:q}=_;if(L!=null&&nh(L,null,C,_,!0),G&256){b.ctx.deactivate(_);return}const Z=G&1&&q,ue=!ka(_);let Re;if(ue&&(Re=U&&U.onVnodeBeforeUnmount)&&Cn(Re,b,_),G&6)P(_.component,C,k);else{if(G&128){_.suspense.unmount(C,k);return}Z&&Ns(_,null,b,"beforeUnmount"),G&64?_.type.remove(_,b,C,T,te,k):O&&(D!==ln||W>0&&W&64)?V(O,b,C,!1,!0):(D===ln&&W&384||!T&&G&16)&&V(N,b,C),k&&os(_)}(ue&&(Re=U&&U.onVnodeUnmounted)||Z)&&Bt(()=>{Re&&Cn(Re,b,_),Z&&Ns(_,null,b,"unmounted")},C)},os=_=>{const{type:b,el:C,anchor:k,transition:T}=_;if(b===ln){gi(C,k);return}if(b===Oa){S(_);return}const D=()=>{i(C),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(_.shapeFlag&1&&T&&!T.persisted){const{leave:U,delayLeave:L}=T,N=()=>U(C,D);L?L(_.el,D,N):N()}else D()},gi=(_,b)=>{let C;for(;_!==b;)C=p(_),i(_),_=C;i(b)},P=(_,b,C)=>{const{bum:k,scope:T,update:D,subTree:U,um:L}=_;k&&Sa(k),T.stop(),D&&(D.active=!1,nt(U,_,b,C)),L&&Bt(L,b),Bt(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},V=(_,b,C,k=!1,T=!1,D=0)=>{for(let U=D;U<_.length;U++)nt(_[U],b,C,k,T)},B=_=>_.shapeFlag&6?B(_.component.subTree):_.shapeFlag&128?_.suspense.next():p(_.anchor||_.el),z=(_,b,C)=>{_==null?b._vnode&&nt(b._vnode,null,null,!0):v(b._vnode||null,_,b,null,null,null,C),rm(),Z_(),b._vnode=_},te={p:v,um:nt,m:yt,r:os,mt:Ve,mc:Ae,pc:fe,pbc:Ee,n:B,o:t};let _e,ce;return e&&([_e,ce]=e(te)),{render:z,hydrate:_e,createApp:xS(z,_e)}}function Ds({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mw(t,e,n=!1){const s=t.children,i=e.children;if(oe(s)&&oe(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=hs(i[r]),a.el=o.el),n||mw(o,a)),a.type===$l&&(a.el=o.el)}}function MS(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const LS=t=>t.__isTeleport,ln=Symbol(void 0),$l=Symbol(void 0),Js=Symbol(void 0),Oa=Symbol(void 0),Hr=[];let dn=null;function We(t=!1){Hr.push(dn=t?null:[])}function FS(){Hr.pop(),dn=Hr[Hr.length-1]||null}let oo=1;function fm(t){oo+=t}function gw(t){return t.dynamicChildren=oo>0?dn||Di:null,FS(),oo>0&&dn&&dn.push(t),t}function Lt(t,e,n,s,i,r){return gw(St(t,e,n,s,i,r,!0))}function zi(t,e,n,s,i){return gw(at(t,e,n,s,i,!0))}function sh(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const Bl="__vInternal",yw=({key:t})=>t!=null?t:null,Pa=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||pt(t)||le(t)?{i:rn,r:t,k:e,f:!!n}:t:null;function St(t,e=null,n=null,s=0,i=null,r=t===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yw(e),ref:e&&Pa(e),scopeId:Fl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rn};return a?(Pd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),oo>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const at=US;function US(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_S)&&(t=Js),sh(t)){const a=Ki(t,e,!0);return n&&Pd(a,n),oo>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(t)]=a:dn.push(a)),a.patchFlag|=-2,a}if(QS(t)&&(t=t.__vccOpts),e){e=$S(e);let{class:a,style:l}=e;a&&!Je(a)&&(e.class=Yn(a)),Be(l)&&(q_(l)&&!oe(l)&&(l=Ut({},l)),e.style=hd(l))}const o=Je(t)?1:sS(t)?128:LS(t)?64:Be(t)?4:le(t)?2:0;return St(t,e,n,s,i,o,r,!0)}function $S(t){return t?q_(t)||Bl in t?Ut({},t):t:null}function Ki(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?VS(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yw(a),ref:e&&e.ref?n&&i?oe(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ln?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ki(t.ssContent),ssFallback:t.ssFallback&&Ki(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function BS(t=" ",e=0){return at($l,null,t,e)}function pm(t="",e=!1){return e?(We(),zi(Js,null,t)):at(Js,null,t)}function In(t){return t==null||typeof t=="boolean"?at(Js):oe(t)?at(ln,null,t.slice()):typeof t=="object"?hs(t):at($l,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ki(t)}function Pd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Pd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Bl in e)?e._ctx=rn:i===3&&rn&&(rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:rn},n=32):(e=String(e),s&64?(n=16,e=[BS(e)]):n=8);t.children=e,t.shapeFlag|=n}function VS(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yn([e.class,s.class]));else if(i==="style")e.style=hd([e.style,s.style]);else if(Pl(i)){const r=e[i],o=s[i];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Cn(t,e,n,s=null){yn(t,e,7,[n,s])}const jS=pw();let qS=0;function HS(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||jS,r={uid:qS++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new O_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uw(s,i),emitsOptions:tw(s,i),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=XA.bind(null,r),t.ce&&t.ce(r),r}let dt=null;const Vl=()=>dt||rn,Gi=t=>{dt=t,t.scope.on()},Ks=()=>{dt&&dt.scope.off(),dt=null};function _w(t){return t.vnode.shapeFlag&4}let ao=!1;function WS(t,e=!1){ao=e;const{props:n,children:s}=t.vnode,i=_w(t);AS(t,n,i,e),kS(t,s);const r=i?zS(t,e):void 0;return ao=!1,r}function zS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ed(new Proxy(t.ctx,vS));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?GS(t):null;Gi(t),ur();const r=_s(s,t,0,[t.props,i]);if(hr(),Ks(),A_(r)){if(r.then(Ks,Ks),e)return r.then(o=>{mm(t,o,e)}).catch(o=>{Ml(o,t,0)});t.asyncDep=r}else mm(t,r,e)}else ww(t,e)}function mm(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=G_(e)),ww(t,n)}let gm;function ww(t,e,n){const s=t.type;if(!t.render){if(!e&&gm&&!s.render){const i=s.template||kd(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ut(Ut({isCustomElement:r,delimiters:a},o),l);s.render=gm(i,c)}}t.render=s.render||gn}Gi(t),ur(),bS(t),hr(),Ks()}function KS(t){return new Proxy(t.attrs,{get(e,n){return Zt(t,"get","$attrs"),e[n]}})}function GS(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=KS(t))},slots:t.slots,emit:t.emit,expose:e}}function jl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(G_(Ed(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qr)return qr[n](t)},has(e,n){return n in e||n in qr}}))}function QS(t){return le(t)&&"__vccOpts"in t}const un=(t,e)=>WA(t,e,ao);function vw(t,e,n){const s=arguments.length;return s===2?Be(e)&&!oe(e)?sh(e)?at(t,null,[e]):at(t,e):at(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sh(n)&&(n=[n]),at(t,e,n))}const bw=Symbol(""),YS=()=>Qt(bw),XS="3.2.45",JS="http://www.w3.org/2000/svg",$s=typeof document<"u"?document:null,ym=$s&&$s.createElement("template"),ZS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?$s.createElementNS(JS,t):$s.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>$s.createTextNode(t),createComment:t=>$s.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$s.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ym.innerHTML=s?`<svg>${t}</svg>`:t;const a=ym.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function eR(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tR(t,e,n){const s=t.style,i=Je(n);if(n&&!i){for(const r in n)ih(s,r,n[r]);if(e&&!Je(e))for(const r in e)n[r]==null&&ih(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const _m=/\s*!important$/;function ih(t,e,n){if(oe(n))n.forEach(s=>ih(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=nR(t,e);_m.test(n)?t.setProperty(ai(s),n.replace(_m,""),"important"):t[s]=n}}const wm=["Webkit","Moz","ms"],Xc={};function nR(t,e){const n=Xc[e];if(n)return n;let s=Hi(e);if(s!=="filter"&&s in t)return Xc[e]=s;s=k_(s);for(let i=0;i<wm.length;i++){const r=wm[i]+s;if(r in t)return Xc[e]=r}return e}const vm="http://www.w3.org/1999/xlink";function sR(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vm,e.slice(6,e.length)):t.setAttributeNS(vm,e,n);else{const r=rA(e);n==null||r&&!T_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function iR(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=T_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ai(t,e,n,s){t.addEventListener(e,n,s)}function rR(t,e,n,s){t.removeEventListener(e,n,s)}function oR(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=aR(e);if(s){const c=r[e]=uR(s,i);Ai(t,a,c,l)}else o&&(rR(t,a,o,l),r[e]=void 0)}}const bm=/(?:Once|Passive|Capture)$/;function aR(t){let e;if(bm.test(t)){e={};let s;for(;s=t.match(bm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ai(t.slice(2)),e]}let Jc=0;const lR=Promise.resolve(),cR=()=>Jc||(lR.then(()=>Jc=0),Jc=Date.now());function uR(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yn(hR(s,n.value),e,5,[s])};return n.value=t,n.attached=cR(),n}function hR(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Em=/^on[a-z]/,dR=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?eR(t,s,i):e==="style"?tR(t,n,s):Pl(e)?dd(e)||oR(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fR(t,e,s,i))?iR(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sR(t,e,s,i))};function fR(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Em.test(e)&&le(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Em.test(e)&&Je(n)?!1:e in t}function pR(t){const e=Vl();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>oh(r,i))},s=()=>{const i=t(e.proxy);rh(e.subTree,i),n(i)};rS(s),Sd(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Rd(()=>i.disconnect())})}function rh(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{rh(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)oh(t.el,e);else if(t.type===ln)t.children.forEach(n=>rh(n,e));else if(t.type===Oa){let{el:n,anchor:s}=t;for(;n&&(oh(n,e),n!==s);)n=n.nextSibling}}function oh(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Tm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Sa(e,n):e};function mR(t){t.target.composing=!0}function Cm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gR={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Tm(i);const r=s||i.props&&i.props.type==="number";Ai(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=qa(a)),t._assign(a)}),n&&Ai(t,"change",()=>{t.value=t.value.trim()}),e||(Ai(t,"compositionstart",mR),Ai(t,"compositionend",Cm),Ai(t,"change",Cm))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Tm(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&qa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},yR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Im=(t,e)=>n=>{if(!("key"in n))return;const s=ai(n.key);if(e.some(i=>i===s||yR[i]===s))return t(n)},_R=Ut({patchProp:dR},ZS);let Am;function wR(){return Am||(Am=NS(_R))}const vR=(...t)=>{const e=wR().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=bR(s);if(!i)return;const r=e._component;!le(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function bR(t){return Je(t)?document.querySelector(t):t}var ER=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const TR=Symbol();var Sm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sm||(Sm={}));function CR(){const t=P_(!0),e=t.run(()=>At({}));let n=[],s=[];const i=Ed({install(r){i._a=r,r.provide(TR,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!ER?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ew=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",dr=t=>Ew?Symbol(t):"_vr_"+t,IR=dr("rvlm"),Rm=dr("rvd"),ql=dr("r"),xd=dr("rl"),ah=dr("rvl"),Si=typeof window<"u";function AR(t){return t.__esModule||Ew&&t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Zc(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const Wr=()=>{},SR=/\/$/,RR=t=>t.replace(SR,"");function eu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=xR(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function kR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function km(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Qi(e.matched[s],n.matched[i])&&Tw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PR(t[n],e[n]))return!1;return!0}function PR(t,e){return Array.isArray(t)?Om(t,e):Array.isArray(e)?Om(e,t):t===e}function Om(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function xR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var lo;(function(t){t.pop="pop",t.push="push"})(lo||(lo={}));var zr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zr||(zr={}));function NR(t){if(!t)if(Si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RR(t)}const DR=/^[^#]+#/;function MR(t,e){return t.replace(DR,"#")+e}function LR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function FR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=LR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pm(t,e){return(history.state?history.state.position-e:-1)+t}const lh=new Map;function UR(t,e){lh.set(t,e)}function $R(t){const e=lh.get(t);return lh.delete(t),e}let BR=()=>location.protocol+"//"+location.host;function Cw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),km(l,"")}return km(n,t)+s+i}function VR(t,e,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const g=Cw(t,location),y=n.value,v=e.value;let E=0;if(p){if(n.value=g,e.value=p,o&&o===y){o=null;return}E=v?p.position-v.position:0}else s(g);i.forEach(A=>{A(n.value,y,{delta:E,type:lo.pop,direction:E?E>0?zr.forward:zr.back:zr.unknown})})};function l(){o=n.value}function c(p){i.push(p);const g=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return r.push(g),g}function u(){const{history:p}=window;!p.state||p.replaceState(Pe({},p.state,{scroll:Hl()}),"")}function h(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function xm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Hl():null}}function jR(t){const{history:e,location:n}=window,s={value:Cw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:BR()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=Pe({},e.state,xm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Pe({},i.value,e.state,{forward:l,scroll:Hl()});r(u.current,u,!0);const h=Pe({},xm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function qR(t){t=NR(t);const e=jR(t),n=VR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Pe({location:"",base:t,go:s,createHref:MR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function HR(t){return typeof t=="string"||t&&typeof t=="object"}function Iw(t){return typeof t=="string"||typeof t=="symbol"}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Aw=dr("nf");var Nm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nm||(Nm={}));function Yi(t,e){return Pe(new Error,{type:t,[Aw]:!0},e)}function cs(t,e){return t instanceof Error&&Aw in t&&(e==null||!!(t.type&e))}const Dm="[^/]+?",WR={sensitive:!1,strict:!1,start:!0,end:!0},zR=/[.+*?^${}()[\]/\\]/g;function KR(t,e){const n=Pe({},WR,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const p=c[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(zR,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:v,optional:E,regexp:A}=p;r.push({name:y,repeatable:v,optional:E});const x=A||Dm;if(x!==Dm){g+=10;try{new RegExp(`(${x})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+S.message)}}let R=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(R=E&&c.length<2?`(?:/${R})`:"/"+R),E&&(R+="?"),i+=R,g+=20,E&&(g+=-8),v&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",y=r[p-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:v,optional:E}=g,A=y in c?c[y]:"";if(Array.isArray(A)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(A)?A.join("/"):A;if(!x)if(E)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function GR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function QR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=GR(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const YR={type:0,value:""},XR=/[a-zA-Z0-9_]/;function JR(t){if(!t)return[[]];if(t==="/")return[[YR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:XR.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ZR(t,e,n){const s=KR(JR(t.path),n),i=Pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ek(t,e){const n=[],s=new Map;e=Lm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,p){const g=!p,y=nk(u);y.aliasOf=p&&p.record;const v=Lm(e,u),E=[y];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of R)E.push(Pe({},y,{components:p?p.record.components:y.components,path:S,aliasOf:p?p.record:y}))}let A,x;for(const R of E){const{path:S}=R;if(h&&S[0]!=="/"){const H=h.record.path,j=H[H.length-1]==="/"?"":"/";R.path=h.record.path+(S&&j+S)}if(A=ZR(R,h,v),p?p.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&u.name&&!Mm(A)&&o(u.name)),"children"in y){const H=y.children;for(let j=0;j<H.length;j++)r(H[j],A,p&&p.children[j])}p=p||A,l(A)}return x?()=>{o(x)}:Wr}function o(u){if(Iw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&QR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Sw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Mm(u)&&s.set(u.record.name,u)}function c(u,h){let p,g={},y,v;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw Yi(1,{location:u});v=p.record.name,g=Pe(tk(h.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),y=p.stringify(g)}else if("path"in u)y=u.path,p=n.find(x=>x.re.test(y)),p&&(g=p.parse(y),v=p.record.name);else{if(p=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!p)throw Yi(1,{location:u,currentLocation:h});v=p.record.name,g=Pe({},h.params,u.params),y=p.stringify(g)}const E=[];let A=p;for(;A;)E.unshift(A.record),A=A.parent;return{name:v,path:y,params:g,matched:E,meta:ik(E)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function tk(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function nk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:sk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function sk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Mm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ik(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Lm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Sw(t,e){return e.children.some(n=>n===t||Sw(t,n))}const Rw=/#/g,rk=/&/g,ok=/\//g,ak=/=/g,lk=/\?/g,kw=/\+/g,ck=/%5B/g,uk=/%5D/g,Ow=/%5E/g,hk=/%60/g,Pw=/%7B/g,dk=/%7C/g,xw=/%7D/g,fk=/%20/g;function Nd(t){return encodeURI(""+t).replace(dk,"|").replace(ck,"[").replace(uk,"]")}function pk(t){return Nd(t).replace(Pw,"{").replace(xw,"}").replace(Ow,"^")}function ch(t){return Nd(t).replace(kw,"%2B").replace(fk,"+").replace(Rw,"%23").replace(rk,"%26").replace(hk,"`").replace(Pw,"{").replace(xw,"}").replace(Ow,"^")}function mk(t){return ch(t).replace(ak,"%3D")}function gk(t){return Nd(t).replace(Rw,"%23").replace(lk,"%3F")}function yk(t){return t==null?"":gk(t).replace(ok,"%2F")}function Ka(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function _k(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(kw," "),o=r.indexOf("="),a=Ka(o<0?r:r.slice(0,o)),l=o<0?null:Ka(r.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fm(t){let e="";for(let n in t){const s=t[n];if(n=mk(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&ch(r)):[s&&ch(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function wk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function Pr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ds(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Yi(4,{from:n,to:e})):h instanceof Error?a(h):HR(h)?a(Yi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function tu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(vk(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ds(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=AR(c)?c.default:c;r.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ds(p,n,s,r,o)()}))}}return i}function vk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Um(t){const e=Qt(ql),n=Qt(xd),s=un(()=>e.resolve(vt(t.to))),i=un(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(Qi.bind(null,u));if(p>-1)return p;const g=$m(l[c-2]);return c>1&&$m(u)===g&&h[h.length-1].path!==g?h.findIndex(Qi.bind(null,l[c-2])):p}),r=un(()=>i.value>-1&&Ck(n.params,s.value.params)),o=un(()=>i.value>-1&&i.value===n.matched.length-1&&Tw(n.params,s.value.params));function a(l={}){return Tk(l)?e[vt(t.replace)?"replace":"push"](vt(t.to)).catch(Wr):Promise.resolve()}return{route:s,href:un(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const bk=vn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Um,setup(t,{slots:e}){const n=ko(Um(t)),{options:s}=Qt(ql),i=un(()=>({[Bm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:vw("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ek=bk;function Tk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ck(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function $m(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bm=(t,e,n)=>t!=null?t:e!=null?e:n,Ik=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Qt(ah),i=un(()=>t.route||s.value),r=Qt(Rm,0),o=un(()=>i.value.matched[r]);Ra(Rm,r+1),Ra(IR,o),Ra(ah,i);const a=At();return zs(()=>[a.value,o.value,t.name],([l,c,u],[h,p,g])=>{c&&(c.instances[u]=l,p&&p!==c&&l&&l===h&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),l&&c&&(!p||!Qi(c,p)||!h)&&(c.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=i.value,c=o.value,u=c&&c.components[t.name],h=t.name;if(!u)return Vm(n.default,{Component:u,route:l});const p=c.props[t.name],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=vw(u,Pe({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(c.instances[h]=null)},ref:a}));return Vm(n.default,{Component:v,route:l})||v}}});function Vm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nw=Ik;function Ak(t){const e=ek(t.routes,t),n=t.parseQuery||_k,s=t.stringifyQuery||Fm,i=t.history,r=Pr(),o=Pr(),a=Pr(),l=z_(ls);let c=ls;Si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zc.bind(null,P=>""+P),h=Zc.bind(null,yk),p=Zc.bind(null,Ka);function g(P,V){let B,z;return Iw(P)?(B=e.getRecordMatcher(P),z=V):z=P,e.addRoute(z,B)}function y(P){const V=e.getRecordMatcher(P);V&&e.removeRoute(V)}function v(){return e.getRoutes().map(P=>P.record)}function E(P){return!!e.getRecordMatcher(P)}function A(P,V){if(V=Pe({},V||l.value),typeof P=="string"){const _=eu(n,P,V.path),b=e.resolve({path:_.path},V),C=i.createHref(_.fullPath);return Pe(_,b,{params:p(b.params),hash:Ka(_.hash),redirectedFrom:void 0,href:C})}let B;if("path"in P)B=Pe({},P,{path:eu(n,P.path,V.path).path});else{const _=Pe({},P.params);for(const b in _)_[b]==null&&delete _[b];B=Pe({},P,{params:h(P.params)}),V.params=h(V.params)}const z=e.resolve(B,V),te=P.hash||"";z.params=u(p(z.params));const _e=kR(s,Pe({},P,{hash:pk(te),path:z.path})),ce=i.createHref(_e);return Pe({fullPath:_e,hash:te,query:s===Fm?wk(P.query):P.query||{}},z,{redirectedFrom:void 0,href:ce})}function x(P){return typeof P=="string"?eu(n,P,l.value.path):Pe({},P)}function R(P,V){if(c!==P)return Yi(8,{from:V,to:P})}function S(P){return he(P)}function H(P){return S(Pe(x(P),{replace:!0}))}function j(P){const V=P.matched[P.matched.length-1];if(V&&V.redirect){const{redirect:B}=V;let z=typeof B=="function"?B(P):B;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=x(z):{path:z},z.params={}),Pe({query:P.query,hash:P.hash,params:P.params},z)}}function he(P,V){const B=c=A(P),z=l.value,te=P.state,_e=P.force,ce=P.replace===!0,_=j(B);if(_)return he(Pe(x(_),{state:te,force:_e,replace:ce}),V||B);const b=B;b.redirectedFrom=V;let C;return!_e&&OR(s,z,B)&&(C=Yi(16,{to:b,from:z}),bn(z,z,!0,!1)),(C?Promise.resolve(C):et(b,z)).catch(k=>cs(k)?cs(k,2)?k:ct(k):ke(k,b,z)).then(k=>{if(k){if(cs(k,2))return he(Pe(x(k.to),{state:te,force:_e,replace:ce}),V||b)}else k=tt(b,z,!0,ce,te);return Ee(b,z,k),k})}function Ae(P,V){const B=R(P,V);return B?Promise.reject(B):Promise.resolve()}function et(P,V){let B;const[z,te,_e]=Sk(P,V);B=tu(z.reverse(),"beforeRouteLeave",P,V);for(const _ of z)_.leaveGuards.forEach(b=>{B.push(ds(b,P,V))});const ce=Ae.bind(null,P,V);return B.push(ce),Ei(B).then(()=>{B=[];for(const _ of r.list())B.push(ds(_,P,V));return B.push(ce),Ei(B)}).then(()=>{B=tu(te,"beforeRouteUpdate",P,V);for(const _ of te)_.updateGuards.forEach(b=>{B.push(ds(b,P,V))});return B.push(ce),Ei(B)}).then(()=>{B=[];for(const _ of P.matched)if(_.beforeEnter&&!V.matched.includes(_))if(Array.isArray(_.beforeEnter))for(const b of _.beforeEnter)B.push(ds(b,P,V));else B.push(ds(_.beforeEnter,P,V));return B.push(ce),Ei(B)}).then(()=>(P.matched.forEach(_=>_.enterCallbacks={}),B=tu(_e,"beforeRouteEnter",P,V),B.push(ce),Ei(B))).then(()=>{B=[];for(const _ of o.list())B.push(ds(_,P,V));return B.push(ce),Ei(B)}).catch(_=>cs(_,8)?_:Promise.reject(_))}function Ee(P,V,B){for(const z of a.list())z(P,V,B)}function tt(P,V,B,z,te){const _e=R(P,V);if(_e)return _e;const ce=V===ls,_=Si?history.state:{};B&&(z||ce?i.replace(P.fullPath,Pe({scroll:ce&&_&&_.scroll},te)):i.push(P.fullPath,te)),l.value=P,bn(P,V,B,ce),ct()}let ze;function qt(){ze=i.listen((P,V,B)=>{const z=A(P),te=j(z);if(te){he(Pe(te,{replace:!0}),z).catch(Wr);return}c=z;const _e=l.value;Si&&UR(Pm(_e.fullPath,B.delta),Hl()),et(z,_e).catch(ce=>cs(ce,12)?ce:cs(ce,2)?(he(ce.to,z).then(_=>{cs(_,20)&&!B.delta&&B.type===lo.pop&&i.go(-1,!1)}).catch(Wr),Promise.reject()):(B.delta&&i.go(-B.delta,!1),ke(ce,z,_e))).then(ce=>{ce=ce||tt(z,_e,!1),ce&&(B.delta?i.go(-B.delta,!1):B.type===lo.pop&&cs(ce,20)&&i.go(-1,!1)),Ee(z,_e,ce)}).catch(Wr)})}let Ve=Pr(),Ht=Pr(),Se;function ke(P,V,B){ct(P);const z=Ht.list();return z.length?z.forEach(te=>te(P,V,B)):console.error(P),Promise.reject(P)}function fe(){return Se&&l.value!==ls?Promise.resolve():new Promise((P,V)=>{Ve.add([P,V])})}function ct(P){return Se||(Se=!P,qt(),Ve.list().forEach(([V,B])=>P?B(P):V()),Ve.reset()),P}function bn(P,V,B,z){const{scrollBehavior:te}=t;if(!Si||!te)return Promise.resolve();const _e=!B&&$R(Pm(P.fullPath,0))||(z||!B)&&history.state&&history.state.scroll||null;return X_().then(()=>te(P,V,_e)).then(ce=>ce&&FR(ce)).catch(ce=>ke(ce,P,V))}const yt=P=>i.go(P);let nt;const os=new Set;return{currentRoute:l,addRoute:g,removeRoute:y,hasRoute:E,getRoutes:v,resolve:A,options:t,push:S,replace:H,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ht.add,isReady:fe,install(P){const V=this;P.component("RouterLink",Ek),P.component("RouterView",Nw),P.config.globalProperties.$router=V,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(l)}),Si&&!nt&&l.value===ls&&(nt=!0,S(i.location).catch(te=>{}));const B={};for(const te in ls)B[te]=un(()=>l.value[te]);P.provide(ql,V),P.provide(xd,ko(B)),P.provide(ah,l);const z=P.unmount;os.add(P),P.unmount=function(){os.delete(P),os.size<1&&(c=ls,ze&&ze(),l.value=ls,nt=!1,Se=!1),z()}}}}function Ei(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Sk(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Qi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Qi(c,l))||i.push(l))}return[n,s,i]}function Rk(){return Qt(ql)}function kk(){return Qt(xd)}const Ok=vn({__name:"App",setup(t){return(e,n)=>(We(),zi(vt(Nw)))}}),Pk="modulepreload",xk=function(t){return"/"+t},jm={},Nk=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=xk(r),r in jm)return;jm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Pk,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Dk=["textContent"],Mk=vn({__name:"MessageAvatar",props:{text:{type:String,required:!0},type:{type:String,required:!0}},setup(t){return(e,n)=>(We(),Lt("div",{class:Yn(["avatar",{another:t.type==="another",me:t.type==="me"}])},[St("span",{textContent:Ro(t.text.toUpperCase()),class:"avatarText"},null,8,Dk)],2))}});const li=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},qm=li(Mk,[["__scopeId","data-v-c25d1a1b"]]),Lk={class:"messageBoxContainer"},Fk=["textContent"],Uk=vn({__name:"MessageBox",props:{text:{type:String,required:!0},type:{type:String,required:!0},showAvatar:{type:Boolean,default:!0},username:{type:String,required:!0}},setup(t){return(e,n)=>(We(),Lt("div",Lk,[t.type==="another"&&t.showAvatar?(We(),zi(qm,{key:0,text:t.username,style:{"grid-column":"1"},type:t.type},null,8,["text","type"])):pm("",!0),St("div",{class:Yn({messageBoxAnother:t.type==="another",messageBoxMe:t.type==="me",withoutAvatar:!t.showAvatar})},[St("span",{textContent:Ro(t.text),style:{"font-size":"14px"}},null,8,Fk)],2),t.type==="me"&&t.showAvatar?(We(),zi(qm,{key:1,text:t.username,style:{"grid-column":"1"},type:t.type},null,8,["text","type"])):pm("",!0)]))}});const $k=li(Uk,[["__scopeId","data-v-a82f4b59"]]),Bk=["width","height"],Vk=["stroke"],jk=St("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",keyTimes:"0;1",values:"0 50 50;360 50 50"},null,-1),qk=[jk],Dw=vn({__name:"SpinnerReactor",props:{theme:{type:String,default:"light",validator:t=>["light","dark","primary"].includes(t)},size:{type:Number,default:25}},setup(t){return(e,n)=>(We(),Lt("div",null,[(We(),Lt("svg",{style:{margin:"0px auto",background:"none",display:"block","shape-rendering":"auto"},width:`${t.size}px`,height:`${t.size}px`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},[St("circle",{cx:"50",cy:"50",r:"32","stroke-width":"8",stroke:t.theme==="light"?"#ffffff":t.theme==="primary"?"#CC014D":"#5C5C5C","stroke-dasharray":"50.26548245743669 50.26548245743669",fill:"none","stroke-linecap":"round"},qk,8,Vk)],8,Bk))]))}}),Hk={key:1,style:{display:"flex","align-items":"center","justify-content":"center"}},Wk=["textContent"],zk=vn({__name:"RoundedButton",props:{loading:{type:Boolean,default:!1},pSize:{type:String,default:"xs",validator:t=>["xs","sm","md","lg"].includes(t)},text:{type:String,default:void 0},icon:{type:String,default:"fas fa-plus"},iconColor:{type:String,default:"#999999"},backgroundColor:{type:String,default:"#FEFEFE"}},emits:["click"],setup(t){return pR(e=>({64596320:t.iconColor,"0d40d9ea":t.backgroundColor})),(e,n)=>(We(),Lt("button",{class:Yn([[t.pSize],"rounded-button"]),onClick:n[0]||(n[0]=s=>e.$emit("click"))},[t.loading?(We(),zi(Dw,{key:0,theme:"dark"})):(We(),Lt("div",Hk,[t.text?(We(),Lt("span",{key:0,textContent:Ro(t.text)},null,8,Wk)):(We(),Lt("i",{key:1,class:Yn(t.icon)},null,2))]))],2))}});const Kk=li(zk,[["__scopeId","data-v-a8ce6c5c"]]),Gk={class:"relative rounded-md shadow-sm w-full"},Qk=["placeholder","disabled"],Yk=vn({__name:"TextInput",props:{placeholder:{type:String,default:""},text:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["click","keyupEnter","update:text","keyupEsc"],setup(t,{expose:e,emit:n}){const s=t,i=At(s.text),r=At(null);return zs(i,o=>n("update:text",o)),zs(()=>s.text,()=>i.value=s.text),e({textInput:r}),(o,a)=>(We(),Lt("div",{class:"w-full flex flex-col items-top",onClick:a[3]||(a[3]=l=>o.$emit("click"))},[St("div",Gk,[yS(St("input",{ref_key:"textInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),autocomplete:"off",type:"text",class:"text-input",placeholder:t.placeholder,disabled:t.disabled,onKeyup:[a[1]||(a[1]=Im(l=>o.$emit("keyupEnter"),["enter"])),a[2]||(a[2]=Im(l=>o.$emit("keyupEsc"),["esc"]))]},null,40,Qk),[[gR,i.value]])])]))}});const Mw=li(Yk,[["__scopeId","data-v-99fae188"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw fr(e)},fr=function(t){return new Error("Firebase Database ("+Lw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xk=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),s.push(n[u],n[h],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const p=r<<2|a>>4;if(s.push(p),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Uw=function(t){const e=Fw(t);return Wl.encodeByteArray(e,!0)},Ga=function(t){return Uw(t).replace(/\./g,"")},Qa=function(t){try{return Wl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){return $w(void 0,t)}function $w(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zk(n)||(t[n]=$w(t[n],e[n]));return t}function Zk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=()=>eO().__FIREBASE_DEFAULTS__,nO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qa(t[1]);return e&&JSON.parse(e)},Dd=()=>{try{return tO()||nO()||sO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bw=t=>{var e,n;return(n=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iO=t=>{const e=Bw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rO=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config},Vw=t=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function aO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lO(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qw(){return Lw.NODE_ADMIN===!0}function Hw(){try{return typeof indexedDB=="object"}catch{return!1}}function cO(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uO,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?hO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,s)}}function hO(t,e){return t.replace(dO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const dO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){return JSON.parse(t)}function ft(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=uo(Qa(r[0])||""),n=uo(Qa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},fO=function(t){const e=Ww(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pO=function(t){const e=Ww(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function uh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ya(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Xa(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Hm(r)&&Hm(o)){if(!Xa(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const p=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function gO(t,e){const n=new yO(t,e);return n.subscribe.bind(n)}class yO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_O(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=nu),i.error===void 0&&(i.error=nu),i.complete===void 0&&(i.complete=nu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _O(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nu(){}function wO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,$(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new co;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TO(e))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ls){return this.instances.has(e)}getOptions(e=Ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:EO(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ls){return this.component?this.component.multipleInstances?e:Ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EO(t){return t===Ls?void 0:t}function TO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const IO={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},AO=be.INFO,SO={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},RO=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=SO[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=AO,this._logHandler=RO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const kO=(t,e)=>e.some(n=>t instanceof n);let Wm,zm;function OO(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PO(){return zm||(zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zw=new WeakMap,hh=new WeakMap,Kw=new WeakMap,su=new WeakMap,Ld=new WeakMap;function xO(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ws(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zw.set(n,t)}).catch(()=>{}),Ld.set(e,t),e}function NO(t){if(hh.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DO(t){dh=t(dh)}function MO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(iu(this),e,...n);return Kw.set(s,e.sort?e.sort():[e]),ws(s)}:PO().includes(t)?function(...e){return t.apply(iu(this),e),ws(zw.get(this))}:function(...e){return ws(t.apply(iu(this),e))}}function LO(t){return typeof t=="function"?MO(t):(t instanceof IDBTransaction&&NO(t),kO(t,OO())?new Proxy(t,dh):t)}function ws(t){if(t instanceof IDBRequest)return xO(t);if(su.has(t))return su.get(t);const e=LO(t);return e!==t&&(su.set(t,e),Ld.set(e,t)),e}const iu=t=>Ld.get(t);function FO(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ws(o.result),l.oldVersion,l.newVersion,ws(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const UO=["get","getKey","getAll","getAllKeys","count"],$O=["put","add","delete","clear"],ru=new Map;function Km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ru.get(e))return ru.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$O.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||UO.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ru.set(e,r),r}DO(t=>({...t,get:(e,n,s)=>Km(e,n)||t.get(e,n,s),has:(e,n)=>!!Km(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VO(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function VO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fh="@firebase/app",Gm="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Oo("@firebase/app"),jO="@firebase/app-compat",qO="@firebase/analytics-compat",HO="@firebase/analytics",WO="@firebase/app-check-compat",zO="@firebase/app-check",KO="@firebase/auth",GO="@firebase/auth-compat",QO="@firebase/database",YO="@firebase/database-compat",XO="@firebase/functions",JO="@firebase/functions-compat",ZO="@firebase/installations",e1="@firebase/installations-compat",t1="@firebase/messaging",n1="@firebase/messaging-compat",s1="@firebase/performance",i1="@firebase/performance-compat",r1="@firebase/remote-config",o1="@firebase/remote-config-compat",a1="@firebase/storage",l1="@firebase/storage-compat",c1="@firebase/firestore",u1="@firebase/firestore-compat",h1="firebase",d1="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="[DEFAULT]",f1={[fh]:"fire-core",[jO]:"fire-core-compat",[HO]:"fire-analytics",[qO]:"fire-analytics-compat",[zO]:"fire-app-check",[WO]:"fire-app-check-compat",[KO]:"fire-auth",[GO]:"fire-auth-compat",[QO]:"fire-rtdb",[YO]:"fire-rtdb-compat",[XO]:"fire-fn",[JO]:"fire-fn-compat",[ZO]:"fire-iid",[e1]:"fire-iid-compat",[t1]:"fire-fcm",[n1]:"fire-fcm-compat",[s1]:"fire-perf",[i1]:"fire-perf-compat",[r1]:"fire-rc",[o1]:"fire-rc-compat",[a1]:"fire-gcs",[l1]:"fire-gcs-compat",[c1]:"fire-fst",[u1]:"fire-fst-compat","fire-js":"fire-js",[h1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,mh=new Map;function p1(t,e){try{t.container.addComponent(e)}catch(n){Zs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(mh.has(e))return Zs.debug(`There were multiple attempts to register component ${e}.`),!1;mh.set(e,t);for(const n of Ja.values())p1(n,t);return!0}function Fd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vs=new pr("app","Firebase",m1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=d1;function Gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ph,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw vs.create("bad-app-name",{appName:String(i)});if(n||(n=rO()),!n)throw vs.create("no-options");const r=Ja.get(i);if(r){if(Xa(n,r.options)&&Xa(s,r.config))return r;throw vs.create("duplicate-app",{appName:i})}const o=new CO(i);for(const l of mh.values())o.addComponent(l);const a=new g1(n,s,o);return Ja.set(i,a),a}function Ud(t=ph){const e=Ja.get(t);if(!e&&t===ph)return Gw();if(!e)throw vs.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let i=(s=f1[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zs.warn(a.join(" "));return}xn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="firebase-heartbeat-database",_1=1,ho="firebase-heartbeat-store";let ou=null;function Qw(){return ou||(ou=FO(y1,_1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}}).catch(t=>{throw vs.create("idb-open",{originalErrorMessage:t.message})})),ou}async function w1(t){try{return(await Qw()).transaction(ho).objectStore(ho).get(Yw(t))}catch(e){if(e instanceof Fn)Zs.warn(e.message);else{const n=vs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zs.warn(n.message)}}}async function Qm(t,e){try{const s=(await Qw()).transaction(ho,"readwrite");return await s.objectStore(ho).put(e,Yw(t)),s.done}catch(n){if(n instanceof Fn)Zs.warn(n.message);else{const s=vs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zs.warn(s.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=1024,b1=30*24*60*60*1e3;class E1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=b1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ym(),{heartbeatsToSend:n,unsentEntries:s}=T1(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ym(){return new Date().toISOString().substring(0,10)}function T1(t,e=v1){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class C1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hw()?cO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await w1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){xn(new wn("platform-logger",e=>new BO(e),"PRIVATE")),xn(new wn("heartbeat",e=>new E1(e),"PRIVATE")),Yt(fh,Gm,t),Yt(fh,Gm,"esm2017"),Yt("fire-js","")}I1("");var A1="firebase",S1="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(A1,S1,"app");var R1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,$d=$d||{},se=R1||self;function Za(){}function Kl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Po(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function k1(t){return Object.prototype.hasOwnProperty.call(t,au)&&t[au]||(t[au]=++O1)}var au="closure_uid_"+(1e9*Math.random()>>>0),O1=0;function P1(t,e,n){return t.call.apply(t.bind,arguments)}function x1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=P1:kt=x1,kt.apply(null,arguments)}function fa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Rs(){this.s=this.s,this.o=this.o}var N1=0;Rs.prototype.s=!1;Rs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),N1!=0)&&k1(this)};Rs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Jm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var D1=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",Za,e),se.removeEventListener("test",Za,e)}catch{}return t}();function el(t){return/^[\s\xa0]*$/.test(t)}var Zm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lu(t,e){return t<e?-1:t>e?1:0}function Gl(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return Gl().indexOf(t)!=-1}function Vd(t){return Vd[" "](t),t}Vd[" "]=Za;function M1(t){var e=U1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var L1=Sn("Opera"),Ji=Sn("Trident")||Sn("MSIE"),Jw=Sn("Edge"),gh=Jw||Ji,Zw=Sn("Gecko")&&!(Gl().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),F1=Gl().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function ev(){var t=se.document;return t?t.documentMode:void 0}var tl;e:{var cu="",uu=function(){var t=Gl();if(Zw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jw)return/Edge\/([\d\.]+)/.exec(t);if(Ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(F1)return/WebKit\/(\S+)/.exec(t);if(L1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uu&&(cu=uu?uu[1]:""),Ji){var hu=ev();if(hu!=null&&hu>parseFloat(cu)){tl=String(hu);break e}}tl=cu}var U1={};function $1(){return M1(function(){let t=0;const e=Zm(String(tl)).split("."),n=Zm("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=lu(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||lu(i[2].length==0,r[2].length==0)||lu(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var yh;if(se.document&&Ji){var eg=ev();yh=eg||parseInt(tl,10)||void 0}else yh=void 0;var B1=yh;function fo(t,e){if(Ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zw){e:{try{Vd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:V1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fo.X.h.call(this)}}gt(fo,Ot);var V1={2:"touch",3:"pen",4:"mouse"};fo.prototype.h=function(){fo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xo="closure_listenable_"+(1e6*Math.random()|0),j1=0;function q1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++j1,this.ba=this.ea=!1}function Ql(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function tv(t){const e={};for(const n in t)e[n]=t[n];return e}const tg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<tg.length;r++)n=tg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yl(t){this.src=t,this.g={},this.h=0}Yl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=wh(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new q1(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function _h(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Xw(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ql(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var qd="closure_lm_"+(1e6*Math.random()|0),du={};function sv(t,e,n,s,i){if(s&&s.once)return rv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)sv(t,e[r],n,s,i);return null}return n=zd(n),t&&t[xo]?t.N(e,n,Po(s)?!!s.capture:!!s,i):iv(t,e,n,!1,s,i)}function iv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Po(i)?!!i.capture:!!i,a=Wd(t);if(a||(t[qd]=a=new Yl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=H1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)D1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(av(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function H1(){function t(n){return e.call(t.src,t.listener,n)}const e=W1;return t}function rv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)rv(t,e[r],n,s,i);return null}return n=zd(n),t&&t[xo]?t.O(e,n,Po(s)?!!s.capture:!!s,i):iv(t,e,n,!0,s,i)}function ov(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ov(t,e[r],n,s,i);else s=Po(s)?!!s.capture:!!s,n=zd(n),t&&t[xo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=wh(r,n,s,i),-1<n&&(Ql(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wh(e,n,s,i)),(n=-1<t?e[t]:null)&&Hd(n))}function Hd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xo])_h(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(av(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wd(e))?(_h(n,t),n.h==0&&(n.src=null,e[qd]=null)):Ql(t)}}}function av(t){return t in du?du[t]:du[t]="on"+t}function W1(t,e){if(t.ba)t=!0;else{e=new fo(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Hd(t),t=n.call(s,e)}return t}function Wd(t){return t=t[qd],t instanceof Yl?t:null}var fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function zd(t){return typeof t=="function"?t:(t[fu]||(t[fu]=function(e){return t.handleEvent(e)}),t[fu])}function lt(){Rs.call(this),this.i=new Yl(this),this.P=this,this.I=null}gt(lt,Rs);lt.prototype[xo]=!0;lt.prototype.removeEventListener=function(t,e,n,s){ov(this,t,e,n,s)};function mt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ot(e,t);else if(e instanceof Ot)e.target=e.target||t;else{var i=e;e=new Ot(s,t),nv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=pa(o,s,!0,e)&&i}if(o=e.g=t,i=pa(o,s,!0,e)&&i,i=pa(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=pa(o,s,!1,e)&&i}lt.prototype.M=function(){if(lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ql(n[s]);delete t.g[e],t.h--}}this.I=null};lt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};lt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function pa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&_h(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Kd=se.JSON.stringify;function z1(){var t=uv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class K1{constructor(){this.h=this.g=null}add(e,n){const s=lv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new G1,t=>t.reset());class G1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Q1(t){se.setTimeout(()=>{throw t},0)}function cv(t,e){vh||Y1(),bh||(vh(),bh=!0),uv.add(t,e)}var vh;function Y1(){var t=se.Promise.resolve(void 0);vh=function(){t.then(X1)}}var bh=!1,uv=new K1;function X1(){for(var t;t=z1();){try{t.h.call(t.g)}catch(n){Q1(n)}var e=lv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bh=!1}function Xl(t,e){lt.call(this),this.h=t||1,this.g=e||se,this.j=kt(this.lb,this),this.l=Date.now()}gt(Xl,lt);K=Xl.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mt(this,"tick"),this.ca&&(Gd(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}K.M=function(){Xl.X.M.call(this),Gd(this),delete this.g};function Qd(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function hv(t){t.g=Qd(()=>{t.g=null,t.i&&(t.i=!1,hv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class J1 extends Rs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hv(this)}M(){super.M(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(t){Rs.call(this),this.h=t,this.g={}}gt(po,Rs);var ng=[];function dv(t,e,n,s){Array.isArray(n)||(n&&(ng[0]=n.toString()),n=ng);for(var i=0;i<n.length;i++){var r=sv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function fv(t){jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hd(e)},t),t.g={}}po.prototype.M=function(){po.X.M.call(this),fv(this)};po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jl(){this.g=!0}Jl.prototype.Aa=function(){this.g=!1};function Z1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eP(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nP(t,n)+(s?" "+s:"")})}function tP(t,e){t.info(function(){return"TIMEOUT: "+e})}Jl.prototype.info=function(){};function nP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kd(n)}catch{return e}}var ui={},sg=null;function Zl(){return sg=sg||new lt}ui.Pa="serverreachability";function pv(t){Ot.call(this,ui.Pa,t)}gt(pv,Ot);function mo(t){const e=Zl();mt(e,new pv(e))}ui.STAT_EVENT="statevent";function mv(t,e){Ot.call(this,ui.STAT_EVENT,t),this.stat=e}gt(mv,Ot);function Ft(t){const e=Zl();mt(e,new mv(e,t))}ui.Qa="timingevent";function gv(t,e){Ot.call(this,ui.Qa,t),this.size=e}gt(gv,Ot);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var ec={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},yv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yd(){}Yd.prototype.h=null;function ig(t){return t.h||(t.h=t.i())}function _v(){}var Do={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xd(){Ot.call(this,"d")}gt(Xd,Ot);function Jd(){Ot.call(this,"c")}gt(Jd,Ot);var Eh;function tc(){}gt(tc,Yd);tc.prototype.g=function(){return new XMLHttpRequest};tc.prototype.i=function(){return{}};Eh=new tc;function Mo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new po(this),this.O=sP,t=gh?125:void 0,this.T=new Xl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wv}function wv(){this.i=null,this.g="",this.h=!1}var sP=45e3,Th={},nl={};K=Mo.prototype;K.setTimeout=function(t){this.O=t};function Ch(t,e,n){t.K=1,t.v=sc(Jn(e)),t.s=n,t.P=!0,vv(t,null)}function vv(t,e){t.F=Date.now(),Lo(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Rv(n.i,"t",s),t.C=0,n=t.l.H,t.h=new wv,t.g=Qv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new J1(kt(t.La,t,t.g),t.N)),dv(t.S,t.g,"readystatechange",t.ib),e=t.H?tv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),mo(),Z1(t.j,t.u,t.A,t.m,t.U,t.s)}K.ib=function(t){t=t.target;const e=this.L;e&&Vn(t)==3?e.l():this.La(t)};K.La=function(t){try{if(t==this.g)e:{const u=Vn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||gh||this.g&&(this.h.h||this.g.fa()||lg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?mo(3):mo(2)),nc(this);var n=this.g.aa();this.Y=n;t:if(bv(this)){var s=lg(this.g);t="";var i=s.length,r=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vs(this),Kr(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,eP(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!el(a)){var c=a;break t}}c=null}if(n=c)Oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ih(this,n);else{this.i=!1,this.o=3,Ft(12),Vs(this),Kr(this);break e}}this.P?(Ev(this,u,o),gh&&this.i&&u==3&&(dv(this.S,this.T,"tick",this.hb),this.T.start())):(Oi(this.j,this.m,o,null),Ih(this,o)),u==4&&Vs(this),this.i&&!this.I&&(u==4?Wv(this.l,this):(this.i=!1,Lo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ft(12)):(this.o=0,Ft(13)),Vs(this),Kr(this)}}}catch{}finally{}};function bv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ev(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=iP(t,n),i==nl){e==4&&(t.o=4,Ft(14),s=!1),Oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Th){t.o=4,Ft(15),Oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Oi(t.j,t.m,i,null),Ih(t,i);bv(t)&&i!=nl&&i!=Th&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ft(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),of(e),e.K=!0,Ft(11))):(Oi(t.j,t.m,n,"[Invalid Chunked Response]"),Vs(t),Kr(t))}K.hb=function(){if(this.g){var t=Vn(this.g),e=this.g.fa();this.C<e.length&&(nc(this),Ev(this,t,e),this.i&&t!=4&&Lo(this))}};function iP(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?nl:(n=Number(e.substring(n,s)),isNaN(n)?Th:(s+=1,s+n>e.length?nl:(e=e.substr(s,n),t.C=s+n,e)))}K.cancel=function(){this.I=!0,Vs(this)};function Lo(t){t.V=Date.now()+t.O,Tv(t,t.O)}function Tv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=No(kt(t.gb,t),e)}function nc(t){t.B&&(se.clearTimeout(t.B),t.B=null)}K.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tP(this.j,this.A),this.K!=2&&(mo(),Ft(17)),Vs(this),this.o=2,Kr(this)):Tv(this,this.V-t)};function Kr(t){t.l.G==0||t.I||Wv(t.l,t)}function Vs(t){nc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gd(t.T),fv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ih(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ah(n.h,t))){if(!t.J&&Ah(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)rl(n),oc(n);else break e;rf(n),Ft(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=No(kt(n.cb,n),6e3));if(1>=Pv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else js(n,11)}else if((t.J||n.g==t)&&rl(n),!el(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zd(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Ue(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gv(s,s.H?s.ka:null,s.V),o.J){xv(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(nc(a),Lo(a)),s.g=o}else qv(s);0<n.i.length&&ac(n)}else c[0]!="stop"&&c[0]!="close"||js(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?js(n,7):sf(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}mo(4)}catch{}}function rP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function oP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Cv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oP(t),s=rP(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Iv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gs){this.h=e!==void 0?e:t.h,sl(this,t.j),this.s=t.s,this.g=t.g,il(this,t.m),this.l=t.l,e=t.i;var n=new go;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),rg(this,n),this.o=t.o}else t&&(n=String(t).match(Iv))?(this.h=!!e,sl(this,n[1]||"",!0),this.s=Ur(n[2]||""),this.g=Ur(n[3]||"",!0),il(this,n[4]),this.l=Ur(n[5]||"",!0),rg(this,n[6]||"",!0),this.o=Ur(n[7]||"")):(this.h=!!e,this.i=new go(null,this.h))}Gs.prototype.toString=function(){var t=[],e=this.j;e&&t.push($r(e,og,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($r(e,og,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($r(n,n.charAt(0)=="/"?uP:cP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$r(n,dP)),t.join("")};function Jn(t){return new Gs(t)}function sl(t,e,n){t.j=n?Ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function il(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rg(t,e,n){e instanceof go?(t.i=e,fP(t.i,t.h)):(n||(e=$r(e,hP)),t.i=new go(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function sc(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $r(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var og=/[#\/\?@]/g,cP=/[#\?:]/g,uP=/[#\?]/g,hP=/[#\?@]/g,dP=/#/g;function go(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ks(t){t.g||(t.g=new Map,t.h=0,t.i&&aP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=go.prototype;K.add=function(t,e){ks(this),this.i=null,t=gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Av(t,e){ks(t),e=gr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sv(t,e){return ks(t),e=gr(t,e),t.g.has(e)}K.forEach=function(t,e){ks(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};K.oa=function(){ks(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};K.W=function(t){ks(this);let e=[];if(typeof t=="string")Sv(this,t)&&(e=e.concat(this.g.get(gr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return ks(this),this.i=null,t=gr(this,t),Sv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Rv(t,e,n){Av(t,e),0<n.length&&(t.i=null,t.g.set(gr(t,e),Bd(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fP(t,e){e&&!t.j&&(ks(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Av(this,s),Rv(this,i,n))},t)),t.j=e}var pP=class{constructor(t,e){this.h=t,this.g=e}};function kv(t){this.l=t||mP,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ga&&se.g.Ga()&&se.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mP=10;function Ov(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pv(t){return t.h?1:t.g?t.g.size:0}function Ah(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zd(t,e){t.g?t.g.add(e):t.h=e}function xv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kv.prototype.cancel=function(){if(this.i=Nv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bd(t.i)}function ef(){}ef.prototype.stringify=function(t){return se.JSON.stringify(t,void 0)};ef.prototype.parse=function(t){return se.JSON.parse(t,void 0)};function gP(){this.g=new ef}function yP(t,e,n){const s=n||"";try{Cv(t,function(i,r){let o=i;Po(i)&&(o=Kd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function _P(t,e){const n=new Jl;if(se.Image){const s=new Image;s.onload=fa(ma,n,s,"TestLoadImage: loaded",!0,e),s.onerror=fa(ma,n,s,"TestLoadImage: error",!1,e),s.onabort=fa(ma,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=fa(ma,n,s,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ma(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fo(t){this.l=t.ac||null,this.j=t.jb||!1}gt(Fo,Yd);Fo.prototype.g=function(){return new ic(this.l,this.j)};Fo.prototype.i=function(t){return function(){return t}}({});function ic(t,e){lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(ic,lt);var tf=0;K=ic.prototype;K.open=function(t,e){if(this.readyState!=tf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yo(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||se).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Uo(this)),this.readyState=tf};K.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yo(this)),this.g&&(this.readyState=3,yo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Dv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}K.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Uo(this):yo(this),this.readyState==3&&Dv(this)}};K.Va=function(t){this.g&&(this.response=this.responseText=t,Uo(this))};K.Ua=function(t){this.g&&(this.response=t,Uo(this))};K.ga=function(){this.g&&Uo(this)};function Uo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yo(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wP=se.JSON.parse;function He(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mv,this.K=this.L=!1}gt(He,lt);var Mv="",vP=/^https?$/i,bP=["POST","PUT"];K=He.prototype;K.Ka=function(t){this.L=t};K.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Eh.g(),this.C=this.u?ig(this.u):ig(Eh),this.g.onreadystatechange=kt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ag(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=Xw(bP,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Uv(this),0<this.B&&((this.K=EP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.qa,this)):this.A=Qd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ag(this,r)}};function EP(t){return Ji&&$1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.qa=function(){typeof $d<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function ag(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lv(t),rc(t)}function Lv(t){t.D||(t.D=!0,mt(t,"complete"),mt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),rc(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0)),He.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?Fv(this):this.fb())};K.fb=function(){Fv(this)};function Fv(t){if(t.h&&typeof $d<"u"&&(!t.C[1]||Vn(t)!=4||t.aa()!=2)){if(t.v&&Vn(t)==4)Qd(t.Ha,0,t);else if(mt(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Iv)[1]||null;if(!i&&se.self&&se.self.location){var r=se.self.location.protocol;i=r.substr(0,r.length-1)}s=!vP.test(i?i.toLowerCase():"")}n=s}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<Vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Lv(t)}}finally{rc(t)}}}}function rc(t,e){if(t.g){Uv(t);const n=t.g,s=t.C[0]?Za:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Uv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}K.aa=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wP(e)}};function lg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Mv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $v(t){let e="";return jd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$v(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function xr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bv(t){this.Ca=0,this.i=[],this.j=new Jl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xr("baseRetryDelayMs",5e3,t),this.bb=xr("retryDelaySeedMs",1e4,t),this.$a=xr("forwardChannelMaxRetries",2,t),this.ta=xr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kv(t&&t.concurrentRequestLimit),this.Fa=new gP,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=Bv.prototype;K.ma=8;K.G=1;function sf(t){if(Vv(t),t.G==3){var e=t.U++,n=Jn(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),$o(t,n),e=new Mo(t,t.j,e,void 0),e.K=2,e.v=sc(Jn(n)),n=!1,se.navigator&&se.navigator.sendBeacon&&(n=se.navigator.sendBeacon(e.v.toString(),"")),!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qv(e.l,null),e.g.da(e.v)),e.F=Date.now(),Lo(e)}Kv(t)}function oc(t){t.g&&(of(t),t.g.cancel(),t.g=null)}function Vv(t){oc(t),t.u&&(se.clearTimeout(t.u),t.u=null),rl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function ac(t){Ov(t.h)||t.m||(t.m=!0,cv(t.Ja,t),t.C=0)}function TP(t,e){return Pv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=No(kt(t.Ja,t,e),zv(t,t.C)),t.C++,!0)}K.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Mo(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=tv(r),nv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jv(this,i,e),n=Jn(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),$o(this,n),r&&(this.N?e="headers="+encodeURIComponent(String($v(r)))+"&"+e:this.o&&nf(n,this.o,r)),Zd(this.h,i),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),i.Z=!0,Ch(i,n,null)):Ch(i,n,e),this.G=2}}else this.G==3&&(t?cg(this,t):this.i.length==0||Ov(this.h)||cg(this))};function cg(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);Ue(s,"SID",t.I),Ue(s,"RID",n),Ue(s,"AID",t.T),$o(t,s),t.o&&t.s&&nf(s,t.o,t.s),n=new Mo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=jv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zd(t.h,n),Ch(n,s,e)}function $o(t,e){t.ia&&jd(t.ia,function(n,s){Ue(e,s,n)}),t.l&&Cv({},function(n,s){Ue(e,s,n)})}function jv(t,e,n){n=Math.min(t.i.length,n);var s=t.l?kt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{yP(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function qv(t){t.g||t.u||(t.Z=1,cv(t.Ia,t),t.A=0)}function rf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=No(kt(t.Ia,t),zv(t,t.A)),t.A++,!0)}K.Ia=function(){if(this.u=null,Hv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=No(kt(this.eb,this),t)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ft(10),oc(this),Hv(this))};function of(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function Hv(t){t.g=new Mo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),$o(t,e),t.o&&t.s&&nf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=sc(Jn(e)),n.s=null,n.P=!0,vv(n,t)}K.cb=function(){this.v!=null&&(this.v=null,oc(this),rf(this),Ft(19))};function rl(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function Wv(t,e){var n=null;if(t.g==e){rl(t),of(t),t.g=null;var s=2}else if(Ah(t.h,e))n=e.D,xv(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Zl(),mt(s,new gv(s,n)),ac(t)}else qv(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&TP(t,e)||s==2&&rf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:js(t,5);break;case 4:js(t,10);break;case 3:js(t,6);break;default:js(t,2)}}}function zv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function js(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=kt(t.kb,t);n||(n=new Gs("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||sl(n,"https"),sc(n)),_P(n.toString(),s)}else Ft(2);t.G=0,t.l&&t.l.va(e),Kv(t),Vv(t)}K.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function Kv(t){if(t.G=0,t.la=[],t.l){const e=Nv(t.h);(e.length!=0||t.i.length!=0)&&(Jm(t.la,e),Jm(t.la,t.i),t.h.i.length=0,Bd(t.i),t.i.length=0),t.l.ua()}}function Gv(t,e,n){var s=n instanceof Gs?Jn(n):new Gs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),il(s,s.m);else{var i=se.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Gs(null,void 0);s&&sl(r,s),e&&(r.g=e),i&&il(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ue(s,n,e),Ue(s,"VER",t.ma),$o(t,s),s}function Qv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new He(new Fo({jb:!0})):new He(t.ra),e.Ka(t.H),e}function Yv(){}K=Yv.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function ol(){if(Ji&&!(10<=Number(B1)))throw Error("Environmental error: no available transport.")}ol.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){lt.call(this),this.g=new Bv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!el(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!el(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}gt(tn,lt);tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gv(t,null,t.V),ac(t)};tn.prototype.close=function(){sf(this.g)};tn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kd(t),t=n);e.i.push(new pP(e.ab++,t)),e.G==3&&ac(e)};tn.prototype.M=function(){this.g.l=null,delete this.j,sf(this.g),delete this.g,tn.X.M.call(this)};function Xv(t){Xd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(Xv,Xd);function Jv(){Jd.call(this),this.status=1}gt(Jv,Jd);function yr(t){this.g=t}gt(yr,Yv);yr.prototype.xa=function(){mt(this.g,"a")};yr.prototype.wa=function(t){mt(this.g,new Xv(t))};yr.prototype.va=function(t){mt(this.g,new Jv)};yr.prototype.ua=function(){mt(this.g,"b")};ol.prototype.createWebChannel=ol.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;ec.NO_ERROR=0;ec.TIMEOUT=8;ec.HTTP_ERROR=6;yv.COMPLETE="complete";_v.EventType=Do;Do.OPEN="a";Do.CLOSE="b";Do.ERROR="c";Do.MESSAGE="d";lt.prototype.listen=lt.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.Oa;He.prototype.getLastErrorCode=He.prototype.Ea;He.prototype.getStatus=He.prototype.aa;He.prototype.getResponseJson=He.prototype.Sa;He.prototype.getResponseText=He.prototype.fa;He.prototype.send=He.prototype.da;He.prototype.setWithCredentials=He.prototype.Ka;var CP=function(){return new ol},IP=function(){return Zl()},pu=ec,AP=yv,SP=ui,ug={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},RP=Fo,ga=_v,kP=He;const hg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Oo("@firebase/firestore");function dg(){return ei.logLevel}function Q(t,...e){if(ei.logLevel<=be.DEBUG){const n=e.map(af);ei.debug(`Firestore (${_r}): ${t}`,...n)}}function Zn(t,...e){if(ei.logLevel<=be.ERROR){const n=e.map(af);ei.error(`Firestore (${_r}): ${t}`,...n)}}function Sh(t,...e){if(ei.logLevel<=be.WARN){const n=e.map(af);ei.warn(`Firestore (${_r}): ${t}`,...n)}}function af(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function Ne(t,e){t||ee()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class PP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xP{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new Zv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new _t(e)}}class NP{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class DP{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new NP(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LP{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.A=n.token,new MP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=FP(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Te(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Qe(0,0))}static max(){return new re(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,s){n===void 0?n=0:n>e.length&&ee(),s===void 0?s=e.length-n:s>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends _o{construct(e,n,s){return new $e(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const UP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends _o{construct(e,n,s){return new It(e,n,s)}static isValidIdentifier(e){return UP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J($e.fromString(e))}static fromName(e){return new J($e.fromString(e).popFirst(5))}static empty(){return new J($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new $e(e.slice()))}}function $P(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new Cs(i,J.empty(),e)}function BP(t){return new Cs(t.readTime,t.key,-1)}class Cs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Cs(re.min(),J.empty(),-1)}static max(){return new Cs(re.max(),J.empty(),-1)}}function VP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==jP)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,s)=>{n(e)})}static reject(e){return new F((n,s)=>{s(e)})}static waitFor(e){return new F((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=F.resolve(!1);for(const s of e)n=n.next(i=>i?F.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new F((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new F((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}lf.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return t==null}function al(t){return t===0&&1/t==-1/0}function WP(t){return typeof t=="number"&&Number.isInteger(t)&&!al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const zP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=zP.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function er(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sb(t){const e=t.mapValue.fields.__previous_value__;return nb(e)?sb(e):e}function vo(t){const e=Is(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nb(t)?4:KP(t)?9007199254740991:10:ee()}function Nn(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Is(s.timestampValue),o=Is(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return er(s.bytesValue).isEqual(er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ge(s.doubleValue),o=Ge(i.doubleValue);return r===o?al(r)===al(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(fg(r)!==fg(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Nn(r[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function bo(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function tr(t,e){if(t===e)return 0;const n=ti(t),s=ti(e);if(n!==s)return Te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ge(i.integerValue||i.doubleValue),a=Ge(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pg(t.timestampValue,e.timestampValue);case 4:return pg(vo(t),vo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,r){const o=er(i),a=er(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Te(o[l],a[l]);if(c!==0)return c}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Te(Ge(i.latitude),Ge(r.latitude));return o!==0?o:Te(Ge(i.longitude),Ge(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=tr(o[l],a[l]);if(c)return c}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ya.mapValue&&r===ya.mapValue)return 0;if(i===ya.mapValue)return 1;if(r===ya.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Te(a[u],c[u]);if(h!==0)return h;const p=tr(o[a[u]],l[c[u]]);if(p!==0)return p}return Te(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ee()}}function pg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Is(t),s=Is(e),i=Te(n.seconds,s.seconds);return i!==0?i:Te(n.nanos,s.nanos)}function nr(t){return Rh(t)}function Rh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Is(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?er(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Rh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Rh(s.fields[a])}`;return r+"}"}(t.mapValue):ee();var e,n}function kh(t){return!!t&&"integerValue"in t}function cf(t){return!!t&&"arrayValue"in t}function mg(t){return!!t&&"nullValue"in t}function gg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Gr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Gr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.position=e,this.inclusive=n}}function yg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=J.comparator(J.fromName(o.referenceValue),n.key):s=tr(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function _g(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{}class Ye extends ib{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QP(e,n,s):n==="array-contains"?new JP(e,s):n==="in"?new ZP(e,s):n==="not-in"?new ex(e,s):n==="array-contains-any"?new tx(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new YP(e,s):new XP(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(tr(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.matchesComparison(tr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dn extends ib{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Dn(e,n)}matches(e){return rb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function rb(t){return t.op==="and"}function ob(t){return GP(t)&&rb(t)}function GP(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Oh(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+nr(t.value);if(ob(t))return t.filters.map(e=>Oh(e)).join(",");{const e=t.filters.map(n=>Oh(n)).join(",");return`${t.op}(${e})`}}function ab(t,e){return t instanceof Ye?function(n,s){return s instanceof Ye&&n.op===s.op&&n.field.isEqual(s.field)&&Nn(n.value,s.value)}(t,e):t instanceof Dn?function(n,s){return s instanceof Dn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ab(r,s.filters[o]),!0):!1}(t,e):void ee()}function lb(t){return t instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${nr(e.value)}`}(t):t instanceof Dn?function(e){return e.op.toString()+" {"+e.getFilters().map(lb).join(" ,")+"}"}(t):"Filter"}class QP extends Ye{constructor(e,n,s){super(e,n,s),this.key=J.fromName(s.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class YP extends Ye{constructor(e,n){super(e,"in",n),this.keys=cb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XP extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=cb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>J.fromName(s.referenceValue))}class JP extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&bo(n.arrayValue,this.value)}}class ZP extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class ex extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bo(this.value.arrayValue,n)}}class tx extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bo(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function nx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ht.RED,this.left=i!=null?i:ht.EMPTY,this.right=r!=null?r:ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ht(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Xe(It.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gr(n)}setAll(e){let n=It.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Gr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){wr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new sn(Gr(this.value))}}function ub(t){const e=[];return wr(t.fields,(n,s)=>{const i=new It([n]);if(xa(s)){const r=ub(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,re.min(),re.min(),re.min(),sn.empty(),0)}static newFoundDocument(e,n,s,i){return new bt(e,1,n,re.min(),s,i,0)}static newNoDocument(e,n){return new bt(e,2,n,re.min(),re.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,re.min(),re.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function vg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sx(t,e,n,s,i,r,o)}function uf(t){const e=ae(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Oh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),e.ft=n}return e.ft}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ab(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_g(t.startAt,e.startAt)&&_g(t.endAt,e.endAt)}function Ph(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function ix(t,e,n,s,i,r,o,a){return new cc(t,e,n,s,i,r,o,a)}function uc(t){return new cc(t)}function bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ox(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ax(t){return t.collectionGroup!==null}function Ui(t){const e=ae(t);if(e.dt===null){e.dt=[];const n=ox(e),s=rx(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Qr(n)),e.dt.push(new Qr(It.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qr(It.keyField(),r))}}}return e.dt}function es(t){const e=ae(t);if(!e._t)if(e.limitType==="F")e._t=vg(e.path,e.collectionGroup,Ui(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ui(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Qr(r.field,o))}const s=e.endAt?new ll(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ll(e.startAt.position,e.startAt.inclusive):null;e._t=vg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function xh(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return hf(es(t),es(e))&&t.limitType===e.limitType}function hb(t){return`${uf(es(t))}|lt:${t.limitType}`}function Nh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>lb(s)).join(", ")}]`),lc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),`Target(${n})`}(es(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):J.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ui(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=yg(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ui(n),s)||n.endAt&&!function(i,r,o){const a=yg(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ui(n),s))}(t,e)}function lx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function db(t){return(e,n)=>{let s=!1;for(const i of Ui(t)){const r=cx(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function cx(t,e,n){const s=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?tr(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function pb(t){return{integerValue:""+t}}function ux(t,e){return WP(e)?pb(e):fb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this._=void 0}}function hx(t,e,n){return t instanceof cl?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Eo?gb(t,e):t instanceof To?yb(t,e):function(s,i){const r=mb(s,i),o=Eg(r)+Eg(s.gt);return kh(r)&&kh(s.gt)?pb(o):fb(s.yt,o)}(t,e)}function dx(t,e,n){return t instanceof Eo?gb(t,e):t instanceof To?yb(t,e):n}function mb(t,e){return t instanceof ul?kh(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class cl extends fc{}class Eo extends fc{constructor(e){super(),this.elements=e}}function gb(t,e){const n=_b(e);for(const s of t.elements)n.some(i=>Nn(i,s))||n.push(s);return{arrayValue:{values:n}}}class To extends fc{constructor(e){super(),this.elements=e}}function yb(t,e){let n=_b(e);for(const s of t.elements)n=n.filter(i=>!Nn(i,s));return{arrayValue:{values:n}}}class ul extends fc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Eg(t){return Ge(t.integerValue||t.doubleValue)}function _b(t){return cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fx(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Eo&&s instanceof Eo||n instanceof To&&s instanceof To?Zi(n.elements,s.elements,Nn):n instanceof ul&&s instanceof ul?Nn(n.gt,s.gt):n instanceof cl&&s instanceof cl}(t.transform,e.transform)}class px{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function wb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bb(t.key,Kn.none()):new jo(t.key,t.data,Kn.none());{const n=t.data,s=sn.empty();let i=new Xe(It.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new hi(t.key,s,new fn(i.toArray()),Kn.none())}}function mx(t,e,n){t instanceof jo?function(s,i,r){const o=s.value.clone(),a=Cg(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(s,i,r){if(!Na(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Cg(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vb(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Yr(t,e,n,s){return t instanceof jo?function(i,r,o,a){if(!Na(i.precondition,r))return o;const l=i.value.clone(),c=Ig(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof hi?function(i,r,o,a){if(!Na(i.precondition,r))return o;const l=Ig(i.fieldTransforms,a,r),c=r.data;return c.setAll(vb(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Na(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function gx(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=mb(s.transform,i||null);r!=null&&(n===null&&(n=sn.empty()),n.set(s.field,r))}return n||null}function Tg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Zi(n,s,(i,r)=>fx(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jo extends pc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends pc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Cg(t,e,n){const s=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,dx(o,a,n[i]))}return s}function Ig(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,hx(r,o,e))}return s}class bb extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yx extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,me;function wx(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Eb(t){if(t===void 0)return Zn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ke.OK:return M.OK;case Ke.CANCELLED:return M.CANCELLED;case Ke.UNKNOWN:return M.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return M.INTERNAL;case Ke.UNAVAILABLE:return M.UNAVAILABLE;case Ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ke.NOT_FOUND:return M.NOT_FOUND;case Ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ke.ABORTED:return M.ABORTED;case Ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ke.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(me=Ke||(Ke={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return tb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=new Ze(J.comparator);function ts(){return vx}const Tb=new Ze(J.comparator);function Br(...t){let e=Tb;for(const n of t)e=e.insert(n.key,n);return e}function Cb(t){let e=Tb;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qs(){return Xr()}function Ib(){return Xr()}function Xr(){return new vr(t=>t.toString(),(t,e)=>t.isEqual(e))}const bx=new Ze(J.comparator),Ex=new Xe(J.comparator);function de(...t){let e=Ex;for(const n of t)e=e.add(n);return e}const Tx=new Xe(Te);function Ab(){return Tx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new mc(re.min(),i,Ab(),ts(),de())}}class qo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new qo(s,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Sb{constructor(e,n){this.targetId=e,this.Et=n}}class Rb{constructor(e,n,s=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ag{constructor(){this.At=0,this.Rt=Rg(),this.bt=xt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=de(),n=de(),s=de();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ee()}}),new qo(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Rg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Cx{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=ts(),this.qt=Sg(),this.Ut=new Xe(Te)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ph(r))if(s===0){const o=new J(r.path);this.Qt(n,o,bt.newNoDocument(o,re.min()))}else Ne(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ph(a.target)){const l=new J(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,bt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=de();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new mc(e,n,this.Ut,this.Lt,s);return this.Lt=ts(),this.qt=Sg(),this.Ut=new Xe(Te),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Ag,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Xe(Te),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Ag),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Sg(){return new Ze(J.comparator)}function Rg(){return new Ze(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ax=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Sx=(()=>({and:"AND",or:"OR"}))();class Rx{constructor(e,n){this.databaseId=e,this.wt=n}}function hl(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kb(t,e){return t.wt?e.toBase64():e.toUint8Array()}function kx(t,e){return hl(t,e.toTimestamp())}function kn(t){return Ne(!!t),re.fromTimestamp(function(e){const n=Is(e);return new Qe(n.seconds,n.nanos)}(t))}function df(t,e){return function(n){return new $e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ob(t){const e=$e.fromString(t);return Ne(Db(e)),e}function Dh(t,e){return df(t.databaseId,e.path)}function mu(t,e){const n=Ob(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Pb(n))}function Mh(t,e){return df(t.databaseId,e)}function Ox(t){const e=Ob(t);return e.length===4?$e.emptyPath():Pb(e)}function Lh(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pb(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kg(t,e,n){return{name:Dh(t,e),fields:n.value.mapValue.fields}}function Px(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.wt?(Ne(c===void 0||typeof c=="string"),xt.fromBase64String(c||"")):(Ne(c===void 0||c instanceof Uint8Array),xt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?M.UNKNOWN:Eb(l.code);return new X(c,l.message||"")}(o);n=new Rb(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mu(t,s.document.name),r=kn(s.document.updateTime),o=s.document.createTime?kn(s.document.createTime):re.min(),a=new sn({mapValue:{fields:s.document.fields}}),l=bt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Da(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mu(t,s.document),r=s.readTime?kn(s.readTime):re.min(),o=bt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mu(t,s.document),r=s.removedTargetIds||[];n=new Da([],r,i,null)}else{if(!("filter"in e))return ee();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new _x(i),o=s.targetId;n=new Sb(o,r)}}return n}function xx(t,e){let n;if(e instanceof jo)n={update:kg(t,e.key,e.value)};else if(e instanceof bb)n={delete:Dh(t,e.key)};else if(e instanceof hi)n={update:kg(t,e.key,e.data),updateMask:Vx(e.fieldMask)};else{if(!(e instanceof yx))return ee();n={verify:Dh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof cl)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Eo)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof To)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ul)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw ee()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function Nx(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?kn(s.updateTime):kn(i);return r.isEqual(re.min())&&(r=kn(i)),new px(r,s.transformResults||[])}(n,e))):[]}function Dx(t,e){return{documents:[Mh(t,e.path)]}}function Mx(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Mh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Nb(Dn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Ri(u.field),direction:Ux(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.wt||lc(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Lx(t){let e=Ox(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=xb(u);return h instanceof Dn&&ob(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Qr(ki(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,lc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,p=u.values||[];return new ll(p,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,p=u.values||[];return new ll(p,h)}(n.endAt)),ix(e,i,o,r,a,"F",l,c)}function Fx(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ki(e.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ki(e.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ki(e.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ki(e.unaryFilter.field);return Ye.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(e){return Ye.create(ki(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dn.create(e.compositeFilter.filters.map(n=>xb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(t):ee()}function Ux(t){return Ix[t]}function $x(t){return Ax[t]}function Bx(t){return Sx[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function ki(t){return It.fromServerFormat(t.fieldPath)}function Nb(t){return t instanceof Ye?function(e){if(e.op==="=="){if(gg(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NAN"}};if(mg(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(gg(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NAN"}};if(mg(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(e.field),op:$x(e.op),value:e.value}}}(t):t instanceof Dn?function(e){const n=e.getFilters().map(s=>Nb(s));return n.length===1?n[0]:{compositeFilter:{op:Bx(e.op),filters:n}}}(t):ee()}function Vx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Db(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&mx(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Yr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Yr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ib();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=wb(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,s)=>Tg(n,s))&&Zi(this.baseMutations,e.baseMutations,(n,s)=>Tg(n,s))}}class ff{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ne(e.mutations.length===s.length);let i=bx;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ff(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,s,i,r=re.min(),o=re.min(),a=xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.ie=e}}function Wx(t){const e=Lx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.Je=new Kx}addToCollectionParentIndex(e,n){return this.Je.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Cs.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Cs.min())}updateCollectionGroup(e,n,s){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Kx{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Xe($e.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Xe($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sr(0)}static vn(){return new sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.changes=new vr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?F.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Yr(s.mutation,i,fn.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,de()).next(()=>s))}getLocalViewOfDocuments(e,n,s=de()){const i=qs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Br();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,de()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=Xr(),a=Xr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof hi)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Yr(u.mutation,c,u.mutation.getFieldMask(),Qe.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Qx(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Xr();let i=new Ze((o,a)=>o-a),r=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||fn.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||de()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Ib();u.forEach(p=>{if(!r.has(p)){const g=wb(n.get(p),s.get(p));g!==null&&h.set(p,g),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return F.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ax(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):F.resolve(qs());let a=-1,l=r;return o.next(c=>F.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?F.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,de())).next(u=>({batchId:a,changes:Cb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(s=>{let i=Br();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Br();return this.indexManager.getCollectionParents(e,i).next(o=>F.forEach(o,a=>{const l=function(c,u){return new cc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,bt.newInvalidDocument(c)))});let o=Br();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Yr(c.mutation,l,fn.empty(),Qe.now()),dc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return F.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:kn(s.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Wx(s.bundledQuery),readTime:kn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.overlays=new Ze(J.comparator),this.es=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qs();return F.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),F.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),F.resolve()}getOverlaysForCollection(e,n,s){const i=qs(),r=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=qs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=qs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return F.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new qx(n,s));let r=this.es.get(n);r===void 0&&(r=de(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.ns=new Xe(it.ss),this.rs=new Xe(it.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new it(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new it(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new J(new $e([])),s=new it(n,e),i=new it(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new J(new $e([])),s=new it(n,e),i=new it(n,e+1);let r=de();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new it(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class it{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return J.comparator(e.key,n.key)||Te(e._s,n._s)}static os(e,n){return Te(e._s,n._s)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Xe(it.ss)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jx(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new it(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Xe(Te);return n.forEach(i=>{const r=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),F.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;J.isDocumentKey(r)||(r=r.child(""));const o=new it(new J(r),0);let a=new Xe(Te);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),F.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return F.forEach(n.mutations,i=>{const r=new it(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new it(n,0),i=this.gs.firstAfterOrEqual(s);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.Es=e,this.docs=new Ze(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return F.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():bt.newInvalidDocument(i))}),F.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ts();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VP(BP(u),s)<=0||(i.has(u.key)||dc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ee()}As(e,n){return F.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new tN(this)}getSize(e){return F.resolve(this.size)}}class tN extends Gx{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),F.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.persistence=e,this.Rs=new vr(n=>uf(n),hf),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new pf,this.targetCount=0,this.vs=sr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),F.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Dn(n),F.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(r).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return F.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),F.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),F.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return F.resolve(s)}containsKey(e,n){return F.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new lf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new nN(this),this.indexManager=new zx,this.remoteDocumentCache=function(s){return new eN(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Hx(n),this.Ns=new Xx(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Zx(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){Q("MemoryPersistence","Starting transaction:",e);const i=new iN(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return F.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class iN extends qP{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Fs=new pf,this.$s=null}static Bs(e){return new mf(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),F.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),F.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Ls,s=>{const i=J.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return F.or([()=>F.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=de(),i=de();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new gf(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(bg(n))return F.resolve(null);let s=es(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xh(n,null,"F"),s=es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=de(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,xh(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return bg(n)||i.isEqual(re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(dg()<=be.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nh(n)),this.Bi(e,o,n,$P(i,-1)))})}Fi(e,n){let s=new Xe(db(e));return n.forEach((i,r)=>{dc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return dg()<=be.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Nh(n)),this.Ni.getDocumentsMatchingQuery(e,n,Cs.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ze(Te),this.Ui=new vr(r=>uf(r),hf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yx(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function aN(t,e,n,s){return new oN(t,e,n,s)}async function Mb(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=de();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function lN(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let p=F.resolve();return h.forEach(g=>{p=p.next(()=>c.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);Ne(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=de();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Lb(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function cN(t,e){const n=ae(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let g=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(xt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),i=i.insert(h,g),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,g,u)&&a.push(n.Cs.updateTargetData(r,g))});let l=ts(),c=de();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(uN(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(re.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return F.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.qi=i,r))}function uN(t,e,n){let s=de(),i=de();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function hN(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dN(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,F.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Qs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Fh(t,e,n){const s=ae(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Og(t,e,n){const s=ae(t);let i=re.min(),r=de();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ae(a),h=u.Ui.get(c);return h!==void 0?F.resolve(u.qi.get(h)):u.Cs.getTargetData(l,c)}(s,o,es(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?r:de())).next(a=>(fN(s,lx(e),a),{documents:a,Hi:r})))}function fN(t,e,n){let s=t.Ki.get(e)||re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Pg{constructor(){this.activeTargetIds=Ab()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pN{constructor(){this.Lr=new Pg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Pg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);Q("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(Q("RestConnection","Received: ",l),l),l=>{throw Sh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+_r,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=gN[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new kP;a.setWithCredentials(!0),a.listenOnce(AP.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case pu.NO_ERROR:const c=a.getResponseJson();Q("Connection","XHR received:",JSON.stringify(c)),r(c);break;case pu.TIMEOUT:Q("Connection",'RPC "'+e+'" timed out'),o(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case pu.HTTP_ERROR:const u=a.getStatus();if(Q("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(p.status);o(new X(g,p.message))}else o(new X(M.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new X(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{Q("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=CP(),o=IP(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RP({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");Q("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const p=new yN({Hr:y=>{h?Q("Connection","Not sending because WebChannel is closed:",y):(u||(Q("Connection","Opening WebChannel transport."),c.open(),u=!0),Q("Connection","WebChannel sending:",y),c.send(y))},Jr:()=>c.close()}),g=(y,v,E)=>{y.listen(v,A=>{try{E(A)}catch(x){setTimeout(()=>{throw x},0)}})};return g(c,ga.EventType.OPEN,()=>{h||Q("Connection","WebChannel transport opened.")}),g(c,ga.EventType.CLOSE,()=>{h||(h=!0,Q("Connection","WebChannel transport closed"),p.io())}),g(c,ga.EventType.ERROR,y=>{h||(h=!0,Sh("Connection","WebChannel transport errored:",y),p.io(new X(M.UNAVAILABLE,"The operation could not be completed")))}),g(c,ga.EventType.MESSAGE,y=>{var v;if(!h){const E=y.data[0];Ne(!!E);const A=E,x=A.error||((v=A[0])===null||v===void 0?void 0:v.error);if(x){Q("Connection","WebChannel received error:",x);const R=x.status;let S=function(j){const he=Ke[j];if(he!==void 0)return Eb(he)}(R),H=x.message;S===void 0&&(S=M.INTERNAL,H="Unknown error status: "+R+" with message "+x.message),h=!0,p.io(new X(S,H)),c.close()}else Q("Connection","WebChannel received:",E),p.ro(E)}}),g(o,SP.STAT_EVENT,y=>{y.stat===ug.PROXY?Q("Connection","Detected buffering proxy"):y.stat===ug.NOPROXY&&Q("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function gu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new Rx(t,!0)}class Fb{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Fb(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new X(M.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wN extends Ub{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Px(this.yt,e),s=function(i){if(!("targetChange"in i))return re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?re.min():r.readTime?kn(r.readTime):re.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Lh(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ph(a)?{documents:Dx(i,a)}:{query:Mx(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=kb(i,r.resumeToken):r.snapshotVersion.compareTo(re.min())>0&&(o.readTime=hl(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Fx(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Lh(this.yt),n.removeTarget=e,this.Bo(n)}}class vN extends Ub{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Nx(e.writeResults,e.commitTime),s=kn(e.commitTime);return this.listener.Zo(s,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Lh(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>xx(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(M.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new X(M.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class EN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Zn(n),this.ou=!1):Q("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{di(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ae(a);l._u.add(4),await Ho(l),l.gu.set("Unknown"),l._u.delete(4),await yc(l)}(this))})}),this.gu=new EN(s,i)}}async function yc(t){if(di(t))for(const e of t.wu)await e(!0)}async function Ho(t){for(const e of t.wu)await e(!1)}function $b(t,e){const n=ae(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wf(n)?_f(n):br(n).ko()&&yf(n,e))}function Bb(t,e){const n=ae(t),s=br(n);n.du.delete(e),s.ko()&&Vb(n,e),n.du.size===0&&(s.ko()?s.Fo():di(n)&&n.gu.set("Unknown"))}function yf(t,e){t.yu.Ot(e.targetId),br(t).zo(e)}function Vb(t,e){t.yu.Ot(e),br(t).Ho(e)}function _f(t){t.yu=new Cx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),br(t).start(),t.gu.uu()}function wf(t){return di(t)&&!br(t).No()&&t.du.size>0}function di(t){return ae(t)._u.size===0}function jb(t){t.yu=void 0}async function CN(t){t.du.forEach((e,n)=>{yf(t,e)})}async function IN(t,e){jb(t),wf(t)?(t.gu.hu(e),_f(t)):t.gu.set("Unknown")}async function AN(t,e,n){if(t.gu.set("Online"),e instanceof Rb&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await dl(t,s)}else if(e instanceof Da?t.yu.Kt(e):e instanceof Sb?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(re.min()))try{const s=await Lb(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(xt.EMPTY_BYTE_STRING,l.snapshotVersion)),Vb(i,a);const c=new Qs(l.target,a,1,l.sequenceNumber);yf(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){Q("RemoteStore","Failed to raise snapshot:",s),await dl(t,s)}}async function dl(t,e,n){if(!Vo(e))throw e;t._u.add(1),await Ho(t),t.gu.set("Offline"),n||(n=()=>Lb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await yc(t)})}function qb(t,e){return e().catch(n=>dl(t,n,e))}async function _c(t){const e=ae(t),n=As(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;SN(e);)try{const i=await hN(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,RN(e,i)}catch(i){await dl(e,i)}Hb(e)&&Wb(e)}function SN(t){return di(t)&&t.fu.length<10}function RN(t,e){t.fu.push(e);const n=As(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Hb(t){return di(t)&&!As(t).No()&&t.fu.length>0}function Wb(t){As(t).start()}async function kN(t){As(t).eu()}async function ON(t){const e=As(t);for(const n of t.fu)e.Xo(n.mutations)}async function PN(t,e,n){const s=t.fu.shift(),i=ff.from(s,e,n);await qb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _c(t)}async function xN(t,e){e&&As(t).Yo&&await async function(n,s){if(i=s.code,wx(i)&&i!==M.ABORTED){const r=n.fu.shift();As(n).Mo(),await qb(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await _c(n)}var i}(t,e),Hb(t)&&Wb(t)}async function Ng(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const s=di(n);n._u.add(3),await Ho(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await yc(n)}async function NN(t,e){const n=ae(t);e?(n._u.delete(2),await yc(n)):e||(n._u.add(2),await Ho(n),n.gu.set("Unknown"))}function br(t){return t.pu||(t.pu=function(e,n,s){const i=ae(e);return i.su(),new wN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:CN.bind(null,t),Zr:IN.bind(null,t),Wo:AN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),wf(t)?_f(t):t.gu.set("Unknown")):(await t.pu.stop(),jb(t))})),t.pu}function As(t){return t.Iu||(t.Iu=function(e,n,s){const i=ae(e);return i.su(),new vN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:kN.bind(null,t),Zr:xN.bind(null,t),tu:ON.bind(null,t),Zo:PN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await _c(t)):(await t.Iu.stop(),t.fu.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new vf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Vo(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(n,s)=>e(n,s)||J.comparator(n.key,s.key):(n,s)=>J.comparator(n.key,s.key),this.keyedMap=Br(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $i;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Tu=new Ze(J.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ir{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ir(e,n,$i.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.Au=void 0,this.listeners=[]}}class MN{constructor(){this.queries=new vr(e=>hb(e),hc),this.onlineState="Unknown",this.Ru=new Set}}async function Ef(t,e){const n=ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new DN),i)try{r.Au=await n.onListen(s)}catch(o){const a=bf(o,`Initialization of query '${Nh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Cf(n)}async function Tf(t,e){const n=ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function LN(t,e){const n=ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Cf(n)}function FN(t,e,n){const s=ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Cf(t){t.Ru.forEach(e=>{e.next()})}class If{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ir(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.key=e}}class Kb{constructor(e){this.key=e}}class UN{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=de(),this.mutatedKeys=de(),this.Gu=db(e),this.Qu=new $i(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Dg,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),g=dc(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;p&&g?p.data.isEqual(g.data)?y!==v&&(s.track({type:3,doc:g}),E=!0):this.Hu(p,g)||(s.track({type:2,doc:g}),E=!0,(l&&this.Gu(g,l)>0||c&&this.Gu(g,c)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),E=!0):p&&!g&&(s.track({type:1,doc:p}),E=!0,(l||c)&&(a=!0)),E&&(g?(o=o.add(g),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,u)=>function(h,p){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return g(h)-g(p)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new ir(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Dg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=de(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Kb(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new zb(s))}),n}tc(e){this.qu=e.Hi,this.Ku=de();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ir.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class $N{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BN{constructor(e){this.key=e,this.nc=!1}}class VN{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new vr(a=>hb(a),hc),this.rc=new Map,this.oc=new Set,this.uc=new Ze(J.comparator),this.cc=new Map,this.ac=new pf,this.hc={},this.lc=new Map,this.fc=sr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function jN(t,e){const n=JN(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await dN(n.localStore,es(e));n.isPrimaryClient&&$b(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await qN(n,e,s,a==="current",o.resumeToken)}return i}async function qN(t,e,n,s,i){t._c=(h,p,g)=>async function(y,v,E,A){let x=v.view.Wu(E);x.$i&&(x=await Og(y.localStore,v.query,!1).then(({documents:H})=>v.view.Wu(H,x)));const R=A&&A.targetChanges.get(v.targetId),S=v.view.applyChanges(x,y.isPrimaryClient,R);return Lg(y,v.targetId,S.Xu),S.snapshot}(t,h,p,g);const r=await Og(t.localStore,e,!0),o=new UN(e,r.Hi),a=o.Wu(r.documents),l=qo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Lg(t,n,c.Xu);const u=new $N(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function HN(t,e){const n=ae(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!hc(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Bb(n.remoteStore,s.targetId),Uh(n,s.targetId)}).catch(Bo)):(Uh(n,s.targetId),await Fh(n.localStore,s.targetId,!0))}async function WN(t,e,n){const s=ZN(t);try{const i=await function(r,o){const a=ae(r),l=Qe.now(),c=o.reduce((p,g)=>p.add(g.key),de());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=ts(),y=de();return a.Gi.getEntries(p,c).next(v=>{g=v,g.forEach((E,A)=>{A.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(v=>{u=v;const E=[];for(const A of o){const x=gx(A,u.get(A.key).overlayedDocument);x!=null&&E.push(new hi(A.key,x,ub(x.value.mapValue),Kn.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(p,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Cb(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ze(Te)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Wo(s,i.changes),await _c(s.remoteStore)}catch(i){const r=bf(i,"Failed to persist write");n.reject(r)}}async function Gb(t,e){const n=ae(t);try{const s=await cN(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Ne(o.nc):i.removedDocuments.size>0&&(Ne(o.nc),o.nc=!1))}),await Wo(n,s,e)}catch(s){await Bo(s)}}function Mg(t,e,n){const s=ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ae(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&Cf(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zN(t,e,n){const s=ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ze(J.comparator);o=o.insert(r,bt.newNoDocument(r,re.min()));const a=de().add(r),l=new mc(re.min(),new Map,new Xe(Te),o,a);await Gb(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Af(s)}else await Fh(s.localStore,e,!1).then(()=>Uh(s,e,n)).catch(Bo)}async function KN(t,e){const n=ae(t),s=e.batch.batchId;try{const i=await lN(n.localStore,e);Yb(n,s,null),Qb(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Wo(n,i)}catch(i){await Bo(i)}}async function GN(t,e,n){const s=ae(t);try{const i=await function(r,o){const a=ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ne(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Yb(s,e,n),Qb(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Wo(s,i)}catch(i){await Bo(i)}}function Qb(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Yb(t,e,n){const s=ae(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Uh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Xb(t,s)})}function Xb(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Bb(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Af(t))}function Lg(t,e,n){for(const s of n)s instanceof zb?(t.ac.addReference(s.key,e),QN(t,s)):s instanceof Kb?(Q("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Xb(t,s.key)):ee()}function QN(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(Q("SyncEngine","New document in limbo: "+n),t.oc.add(s),Af(t))}function Af(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new J($e.fromString(e)),s=t.fc.next();t.cc.set(s,new BN(n)),t.uc=t.uc.insert(n,s),$b(t.remoteStore,new Qs(es(uc(n.path)),s,2,lf.at))}}async function Wo(t,e,n){const s=ae(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=gf.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,l){const c=ae(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>F.forEach(l,h=>F.forEach(h.Si,p=>c.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>F.forEach(h.Di,p=>c.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!Vo(u))throw u;Q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const p=c.qi.get(h),g=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(g);c.qi=c.qi.insert(h,y)}}}(s.localStore,r))}async function YN(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const s=await Mb(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new X(M.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wo(n,s.ji)}}function XN(t,e){const n=ae(t),s=n.cc.get(e);if(s&&s.nc)return de().add(s.key);{let i=de();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function JN(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zN.bind(null,e),e.sc.Wo=LN.bind(null,e.eventManager),e.sc.wc=FN.bind(null,e.eventManager),e}function ZN(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GN.bind(null,e),e}class eD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=gc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return aN(this.persistence,new rN,e.initialUser,this.yt)}yc(e){return new sN(mf.Bs,this.yt)}gc(e){return new pN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YN.bind(null,this.syncEngine),await NN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new MN}createDatastore(e){const n=gc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new _N(i));var i;return function(r,o,a,l){return new bN(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Mg(this.syncEngine,a,0),o=xg.C()?new xg:new mN,new TN(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new VN(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ae(e);Q("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ho(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nD(t,e,n,s){if(e===!0&&s===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fg(t){if(!J.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ug(t){if(J.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sf(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;class Bg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OP;switch(n.type){case"gapi":const s=n.client;return new DP(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$g.get(e);n&&(Q("ComponentProvider","Removing Datastore"),$g.delete(e),n.terminate())}(this),Promise.resolve()}}function sD(t,e,n,s={}){var i;const r=(t=Gn(t,wc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Sh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=_t.MOCK_USER;else{o=oO(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new _t(l)}t._authCredentials=new PP(new Zv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class zo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zo(this.firestore,e,this._query)}}class bs extends zo{constructor(e,n,s){super(e,n,uc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new J(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function iD(t,e,...n){if(t=en(t),Jb("collection","path",e),t instanceof wc){const s=$e.fromString(e,...n);return Ug(s),new bs(t,null,s)}{if(!(t instanceof Xt||t instanceof bs))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child($e.fromString(e,...n));return Ug(s),new bs(t.firestore,null,s)}}function rD(t,e,...n){if(t=en(t),arguments.length===1&&(e=eb.R()),Jb("doc","path",e),t instanceof wc){const s=$e.fromString(e,...n);return Fg(s),new Xt(t,null,new J(s))}{if(!(t instanceof Xt||t instanceof bs))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child($e.fromString(e,...n));return Fg(s),new Xt(t.firestore,t instanceof bs?t.converter:null,new J(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=eb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=bf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function aD(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Mb(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cD(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Ng(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ng(e.remoteStore,r)),t.onlineComponents=e}async function cD(t){return t.offlineComponents||(Q("FirestoreClient","Using default OfflineComponentProvider"),await aD(t,new eD)),t.offlineComponents}async function Zb(t){return t.onlineComponents||(Q("FirestoreClient","Using default OnlineComponentProvider"),await lD(t,new tD)),t.onlineComponents}function uD(t){return Zb(t).then(e=>e.syncEngine)}async function fl(t){const e=await Zb(t),n=e.eventManager;return n.onListen=jN.bind(null,e.syncEngine),n.onUnlisten=HN.bind(null,e.syncEngine),n}function hD(t,e,n={}){const s=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Rf({next:h=>{r.enqueueAndForget(()=>Tf(i,u));const p=h.docs.has(o);!p&&h.fromCache?l.reject(new X(M.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&a&&a.source==="server"?l.reject(new X(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new If(uc(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Ef(i,u)}(await fl(t),t.asyncQueue,e,n,s)),s.promise}function dD(t,e,n={}){const s=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Rf({next:h=>{r.enqueueAndForget(()=>Tf(i,u)),h.fromCache&&a.source==="server"?l.reject(new X(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new If(o,c,{includeMetadataChanges:!0,Nu:!0});return Ef(i,u)}(await fl(t),t.asyncQueue,e,n,s)),s.promise}class fD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Fb(this,"async_queue_retry"),this.Wc=()=>{const n=gu();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=gu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new zn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Vo(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Vg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class rr extends wc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new fD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||e0(this),this._firestoreClient.terminate()}}function pD(t,e){const n=typeof t=="object"?t:Ud(),s=typeof t=="string"?t:e||"(default)",i=Fd(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=iO("firestore");r&&sD(i,...r)}return i}function vc(t){return t._firestoreClient||e0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function e0(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new HP(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new oD(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new or(xt.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new or(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=/^__.*__$/;class gD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new jo(e,this.data,n,this.fieldTransforms)}}function n0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Of{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return pl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(n0(this.sa)&&mD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class yD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||gc(e)}da(e,n,s,i=!1){return new Of({sa:e,methodName:n,fa:s,path:It.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function _D(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new yD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wD(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);o0("Data must be an object, but it was:",o,s);const a=i0(s,o);let l,c;if(r.merge)l=new fn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const p=vD(e,h,n);if(!o.contains(p))throw new X(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ED(u,p)||u.push(p)}l=new fn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new gD(new sn(a),l,c)}function s0(t,e){if(r0(t=en(t)))return o0("Unsupported field value:",e,t),i0(t,e);if(t instanceof t0)return function(n,s){if(!n0(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=s0(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=en(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ux(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Qe.fromDate(n);return{timestampValue:hl(s.yt,i)}}if(n instanceof Qe){const i=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hl(s.yt,i)}}if(n instanceof bc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof or)return{bytesValue:kb(s.yt,n._byteString)};if(n instanceof Xt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:df(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Sf(n)}`)}(t,e)}function i0(t,e){const n={};return tb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(s,i)=>{const r=s0(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function r0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof bc||t instanceof or||t instanceof Xt||t instanceof t0)}function o0(t,e,n){if(!r0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Sf(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function vD(t,e,n){if((e=en(e))instanceof kf)return e._internalPath;if(typeof e=="string")return a0(t,e);throw pl("Field path arguments must be of type string or ",t,!1,void 0,n)}const bD=new RegExp("[~\\*/\\[\\]]");function a0(t,e,n){if(e.search(bD)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kf(...e.split("."))._internalPath}catch{throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new X(M.INVALID_ARGUMENT,a+t+l)}function ED(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(c0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TD extends l0{data(){return super.data()}}function c0(t,e){return typeof e=="string"?a0(t,e):e instanceof kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CD{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const s={};return wr(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new bc(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=sb(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=Is(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=$e.fromString(e);Ne(Db(s));const i=new wo(s.get(1),s.get(3)),r=new J(s.popFirst(5));return i.isEqual(n)||Zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h0 extends l0{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(c0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ma extends h0{data(e={}){return super.data(e)}}class d0{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ma(this._firestore,this._userDataWriter,s.key,s,new Vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ma(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ma(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:AD(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){t=Gn(t,Xt);const e=Gn(t.firestore,rr);return hD(vc(e),t._key).then(n=>p0(e,t,n))}class Pf extends CD{constructor(e){super(),this.firestore=e}convertBytes(e){return new or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function SD(t){t=Gn(t,zo);const e=Gn(t.firestore,rr),n=vc(e),s=new Pf(e);return u0(t._query),dD(n,t._query).then(i=>new d0(e,s,t,i))}function RD(t,e){const n=Gn(t.firestore,rr),s=rD(t),i=ID(t.converter,e);return kD(n,[wD(_D(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Kn.exists(!1))]).then(()=>s)}function xf(t,...e){var n,s,i;t=en(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Vg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Xt)c=Gn(t.firestore,rr),u=uc(t._key.path),l={next:h=>{e[o]&&e[o](p0(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Gn(t,zo);c=Gn(h.firestore,rr),u=h._query;const p=new Pf(c);l={next:g=>{e[o]&&e[o](new d0(c,p,h,g))},error:e[o+1],complete:e[o+2]},u0(t._query)}return function(h,p,g,y){const v=new Rf(y),E=new If(p,v,g);return h.asyncQueue.enqueueAndForget(async()=>Ef(await fl(h),E)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>Tf(await fl(h),E))}}(vc(c),u,a,l)}function kD(t,e){return function(n,s){const i=new zn;return n.asyncQueue.enqueueAndForget(async()=>WN(await uD(n),s,i)),i.promise}(vc(t),e)}function p0(t,e,n){const s=n.docs.get(e._key),i=new Pf(t);return new h0(t,i,e._key,s,new Vr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){_r=n})(ci),xn(new wn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new rr(new xP(n.getProvider("auth-internal")),new LP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yt(hg,"3.8.3",t),Yt(hg,"3.8.3","esm2017")})();const m0=Gw({apiKey:"AIzaSyD_5rsCj6486e0sbMrzyCAzQzfFSy9sfXE",authDomain:"chatty-app-chatgpt.firebaseapp.com",projectId:"chatty-app-chatgpt",storageBucket:"chatty-app-chatgpt.appspot.com",messagingSenderId:"308459373169",appId:"1:308459373169:web:bccbfde64226f0cd58d1d0"}),OD=pD(m0),jg=iD(OD,"messages");function Nf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function g0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PD=g0,y0=new pr("auth","Firebase",g0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Oo("@firebase/auth");function La(t,...e){qg.logLevel<=be.ERROR&&qg.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,...e){throw Df(t,...e)}function On(t,...e){return Df(t,...e)}function xD(t,e,n){const s=Object.assign(Object.assign({},PD()),{[e]:n});return new pr("auth","Firebase",s).create(e,{appName:t.name})}function Df(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return y0.create(t,...e)}function ne(t,e,...n){if(!t)throw Df(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw La(e),new Error(e)}function ss(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;function qn(t){ss(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(ss(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e){const n=Fd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Xa(r,e!=null?e:{}))return i;ns(i,"already-initialized")}return n.initialize({options:e})}function DD(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MD(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MD()||aO()||"connection"in navigator)?navigator.onLine:!0}function FD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,ss(n>e,"Short delay should be less than long delay!"),this.isMobile=Md()||jw()}get(){return LD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){ss(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new Ko(3e4,6e4);function BD(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ec(t,e,n,s,i={}){return w0(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=mr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),_0.fetch()(v0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function w0(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},UD),e);try{const i=new jD(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wa(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xD(t,u,c);ns(t,u)}}catch(i){if(i instanceof Fn)throw i;ns(t,"network-request-failed")}}async function VD(t,e,n,s,i={}){const r=await Ec(t,e,n,s,i);return"mfaPendingCredential"in r&&ns(t,"multi-factor-auth-required",{_serverResponse:r}),r}function v0(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Mf(t.config,i):`${t.config.apiScheme}://${i}`}class jD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),$D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=On(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(t,e){return Ec(t,"POST","/v1/accounts:delete",e)}async function HD(t,e){return Ec(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WD(t,e=!1){const n=en(t),s=await n.getIdToken(e),i=Lf(s);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Jr(yu(i.auth_time)),issuedAtTime:Jr(yu(i.iat)),expirationTime:Jr(yu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yu(t){return Number(t)*1e3}function Lf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qa(n);return i?JSON.parse(i):(La("Failed to decode base64 JWT payload"),null)}catch(i){return La("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zD(t){const e=Lf(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fn&&KD(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function KD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jr(this.lastLoginAt),this.creationTime=Jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Co(t,HD(n,{idToken:s}));ne(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?XD(r.providerUserInfo):[],a=YD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new b0(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function QD(t){const e=en(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YD(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function XD(t){return t.map(e=>{var{providerId:n}=e,s=Nf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e){const n=await w0(t,{},async()=>{const s=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=v0(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await JD(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Io;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ys{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new b0(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WD(this,e)}reload(){return QD(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Co(this,qD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:S,isAnonymous:H,providerData:j,stsTokenManager:he}=n;ne(R&&he,e,"internal-error");const Ae=Io.fromJSON(this.name,he);ne(typeof R=="string",e,"internal-error"),us(h,e.name),us(p,e.name),ne(typeof S=="boolean",e,"internal-error"),ne(typeof H=="boolean",e,"internal-error"),us(g,e.name),us(y,e.name),us(v,e.name),us(E,e.name),us(A,e.name),us(x,e.name);const et=new Ys({uid:R,auth:e,email:p,emailVerified:S,displayName:h,isAnonymous:H,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:Ae,createdAt:A,lastLoginAt:x});return j&&Array.isArray(j)&&(et.providerData=j.map(Ee=>Object.assign({},Ee))),E&&(et._redirectEventId=E),et}static async _fromIdTokenResponse(e,n,s=!1){const i=new Io;i.updateFromServerResponse(n);const r=new Ys({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ml(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}E0.type="NONE";const zg=E0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,r),this.fullPersistenceKey=Fa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bi(qn(zg),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||qn(zg);const o=Fa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ys._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Bi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Bi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(S0(e))return"Blackberry";if(R0(e))return"Webos";if(Ff(e))return"Safari";if((e.includes("chrome/")||C0(e))&&!e.includes("edge/"))return"Chrome";if(A0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function T0(t=Pt()){return/firefox\//i.test(t)}function Ff(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C0(t=Pt()){return/crios\//i.test(t)}function I0(t=Pt()){return/iemobile/i.test(t)}function A0(t=Pt()){return/android/i.test(t)}function S0(t=Pt()){return/blackberry/i.test(t)}function R0(t=Pt()){return/webos/i.test(t)}function Tc(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZD(t=Pt()){var e;return Tc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eM(){return lO()&&document.documentMode===10}function k0(t=Pt()){return Tc(t)||A0(t)||R0(t)||S0(t)||/windows phone/i.test(t)||I0(t)}function tM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e=[]){let n;switch(t){case"Browser":n=Kg(Pt());break;case"Worker":n=`${Kg(Pt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new nM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?en(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Uf(t){return en(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gO(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iM(t,e,n){const s=Uf(t);ne(s._canInitEmulator,s,"emulator-config-failed"),ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=P0(e),{host:o,port:a}=rM(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oM()}function P0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rM(t){const e=P0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Qg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return VD(t,"POST","/v1/accounts:signInWithIdp",BD(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM="http://localhost";class ni extends x0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ns("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Nf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ni(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Vi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:aM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends N0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Go{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";fs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ps.credential(n,s)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Go{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Go{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gs.credential(n,s)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ys._fromIdTokenResponse(e,s,i),o=Yg(s);return new ar({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Yg(s);return new ar({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Fn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gl(e,n,s,i)}}function D0(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,r,e,s):r})}async function lM(t,e,n=!1){const s=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Co(t,D0(s,i,e,t),n);ne(r.idToken,s,"internal-error");const o=Lf(r.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),ar._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ns(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e,n=!1){const s="signIn",i=await D0(t,s,e),r=await ar._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function M0(t,e,n,s){return en(t).onIdTokenChanged(e,n,s)}function hM(t,e,n){return en(t).beforeAuthStateChanged(e,n)}const yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(){const t=Pt();return Ff(t)||Tc(t)}const fM=1e3,pM=10;class F0 extends L0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dM()&&tM(),this.fallbackToPolling=k0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);eM()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pM):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},fM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}F0.type="LOCAL";const mM=F0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0 extends L0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U0.type="SESSION";const $0=U0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Cc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await gM(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=$f("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function _M(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function wM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bM(){return B0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="firebaseLocalStorageDb",EM=1,_l="firebaseLocalStorage",j0="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ic(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function TM(){const t=indexedDB.deleteDatabase(V0);return new Qo(t).toPromise()}function Bh(){const t=indexedDB.open(V0,EM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_l,{keyPath:j0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_l)?e(s):(s.close(),await TM(),e(await Bh()))})})}async function Xg(t,e,n){const s=Ic(t,!0).put({[j0]:e,value:n});return new Qo(s).toPromise()}async function CM(t,e){const n=Ic(t,!1).get(e),s=await new Qo(n).toPromise();return s===void 0?null:s.value}function Jg(t,e){const n=Ic(t,!0).delete(e);return new Qo(n).toPromise()}const IM=800,AM=3;class q0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(bM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wM(),!this.activeServiceWorker)return;this.sender=new yM(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bh();return await Xg(e,yl,"1"),await Jg(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>CM(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ic(i,!1).getAll();return new Qo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q0.type="LOCAL";const SM=q0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kM(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=On("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",RM().appendChild(s)})}function OM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t,e){return e?qn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends x0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xM(t){return uM(t.auth,new Bf(t),t.bypassAuthState)}function NM(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),cM(n,new Bf(t),t.bypassAuthState)}async function DM(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),lM(n,new Bf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xM;case"linkViaPopup":case"linkViaRedirect":return DM;case"reauthViaPopup":case"reauthViaRedirect":return NM;default:ns(this.auth,"internal-error")}}resolve(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=new Ko(2e3,1e4);class Pi extends H0{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){ss(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MM.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="pendingRedirect",Ua=new Map;class FM extends H0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const s=await UM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UM(t,e){const n=VM(e),s=BM(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $M(t,e){Ua.set(t._key(),e)}function BM(t){return qn(t._redirectPersistence)}function VM(t){return Fa(LM,t.config.apiKey,t.name)}async function jM(t,e,n=!1){const s=Uf(t),i=PM(s,e),o=await new FM(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=10*60*1e3;class HM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!W0(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(t,e={}){return Ec(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GM=/^https?/;async function QM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zM(t);for(const n of e)try{if(YM(n))return}catch{}ns(t,"unauthorized-domain")}function YM(t){const e=$h(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!GM.test(n))return!1;if(KM.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=new Ko(3e4,6e4);function ey(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JM(t){return new Promise((e,n)=>{var s,i,r;function o(){ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ey(),n(On(t,"network-request-failed"))},timeout:XM.get()})}if(!((i=(s=Pn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Pn().gapi)===null||r===void 0)&&r.load)o();else{const a=OM("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},kM(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $a=null,e})}let $a=null;function ZM(t){return $a=$a||JM(t),$a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=new Ko(5e3,15e3),tL="__/auth/iframe",nL="emulator/auth/iframe",sL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rL(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,nL):`https://${t.config.authDomain}/${tL}`,s={apiKey:e.apiKey,appName:t.name,v:ci},i=iL.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${mr(s).slice(1)}`}async function oL(t){const e=await ZM(t),n=Pn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:rL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sL,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Pn().setTimeout(()=>{r(o)},eL.get());function l(){Pn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lL=500,cL=600,uL="_blank",hL="http://localhost";class ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dL(t,e,n,s=lL,i=cL){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aL),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Pt().toLowerCase();n&&(a=C0(c)?uL:n),T0(c)&&(e=e||hL,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(ZD(c)&&a!=="_self")return fL(e||"",a),new ty(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new ty(h)}function fL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL="__/auth/handler",mL="emulator/auth/handler";function ny(t,e,n,s,i,r){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ci,eventId:i};if(e instanceof N0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Go){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${gL(t)}?${mr(a).slice(1)}`}function gL({config:t}){return t.emulator?Mf(t,mL):`https://${t.authDomain}/${pL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="webStorageSupport";class yL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$0,this._completeRedirectFn=jM,this._overrideRedirectResult=$M}async _openPopup(e,n,s,i){var r;ss((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ny(e,n,s,$h(),i);return dL(e,o,$f())}async _openRedirect(e,n,s,i){return await this._originValidation(e),_M(ny(e,n,s,$h(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ss(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await oL(e),s=new HM(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_u];o!==void 0&&n(!!o),ns(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k0()||Ff()||Tc()}}const _L=yL;var sy="@firebase/auth",iy="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bL(t){xn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ne(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ne(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O0(t)},u=new sM(a,l,c);return DD(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xn(new wn("auth-internal",e=>{const n=Uf(e.getProvider("auth").getImmediate());return(s=>new wL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(sy,iy,vL(t)),Yt(sy,iy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=5*60,TL=Vw("authIdTokenMaxAge")||EL;let ry=null;const CL=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>TL)return;const i=n==null?void 0:n.token;ry!==i&&(ry=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IL(t=Ud()){const e=Fd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ND(t,{popupRedirectResolver:_L,persistence:[SM,mM,$0]}),s=Vw("authTokenSyncURL");if(s){const r=CL(s);hM(n,r,()=>r(n.currentUser)),M0(n,o=>r(o))}const i=Bw("auth");return i&&iM(n,`http://${i}`),n}bL("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=new Map,SL={activated:!1,tokenObservers:[]};function Mn(t){return AL.get(t)||Object.assign({},SL)}const oy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new co,await kL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new co,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function kL(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},wl=new pr("appCheck","AppCheck",OL);function PL(t){if(!Mn(t).activated)throw wl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="firebase-app-check-database",NL=1,Vh="firebase-app-check-store";let va=null;function DL(){return va||(va=new Promise((t,e)=>{try{const n=indexedDB.open(xL,NL);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(wl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Vh,{keyPath:"compositeKey"})}}}catch(n){e(wl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),va)}function ML(t,e){return LL(FL(t),e)}async function LL(t,e){const s=(await DL()).transaction(Vh,"readwrite"),r=s.objectStore(Vh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(wl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function FL(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Oo("@firebase/app-check");function ay(t,e){return Hw()?ML(t,e).catch(n=>{jh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL={error:"UNKNOWN_ERROR"};function $L(t){return Wl.encodeString(JSON.stringify(t),!1)}async function qh(t,e=!1){const n=t.app;PL(n);const s=Mn(n);let i=s.token,r;if(i&&!jr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(jr(l)?i=l:await ay(n,void 0))}if(!e&&i&&jr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Mn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?jh.warn(l.message):jh.error(l),r=l}let a;return i?r?jr(i)?a={token:i.token,internalError:r}:a=cy(r):(a={token:i.token},s.token=i,await ay(n,i)):a=cy(r),o&&jL(n,a),a}function BL(t,e,n,s){const{app:i}=t,r=Mn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&jr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ly(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ly(t))}function z0(t,e){const n=Mn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function ly(t){const{app:e}=t,n=Mn(e);let s=n.tokenRefresher;s||(s=VL(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function VL(t){const{app:e}=t;return new RL(async()=>{const n=Mn(e);let s;if(n.token?s=await qh(t,!0):s=await qh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Mn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},oy.RETRIAL_MIN_WAIT,oy.RETRIAL_MAX_WAIT)}function jL(t,e){const n=Mn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function jr(t){return t.expireTimeMillis-Date.now()>0}function cy(t){return{token:$L(UL),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Mn(this.app);for(const n of e)z0(this.app,n.next);return Promise.resolve()}}function HL(t,e){return new qL(t,e)}function WL(t){return{getToken:e=>qh(t,e),addTokenListener:e=>BL(t,"INTERNAL",e),removeTokenListener:e=>z0(t.app,e)}}const zL="@firebase/app-check",KL="0.6.3",GL="app-check",uy="app-check-internal";function QL(){xn(new wn(GL,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return HL(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(uy).initialize()})),xn(new wn(uy,t=>{const e=t.getProvider("app-check").getImmediate();return WL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yt(zL,KL)}QL();const K0=Symbol("firebaseApp");function Vf(t){return Vl()&&Qt(K0,null)||Ud(t)}const Hn=()=>{};function jf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function YL(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function fi(t){return!!t&&typeof t=="object"}const XL=Object.prototype;function JL(t){return fi(t)&&Object.getPrototypeOf(t)===XL}function qf(t){return fi(t)&&t.type==="document"}function ZL(t){return fi(t)&&t.type==="collection"}function e2(t){return qf(t)||ZL(t)}function t2(t){return fi(t)&&t.type==="query"}function n2(t){return fi(t)&&"ref"in t}function s2(t){return fi(t)&&typeof t.bucket=="string"}function i2(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function r2(){return!!(Vl()&&Qt(bw,null))}const ba=new WeakMap;function o2(t,e){if(!ba.has(t)){const n=P_(!0);ba.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ba.delete(t)}}return ba.get(t)}const a2=new WeakMap,Ea=new WeakMap;function l2(t){const e=Vf(t);if(!Ea.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Ea.set(e,r),n(r.value)}];Ea.set(e,i)}return Ea.get(e)}function c2(t,e){const n=IL(e);M0(n,s=>{const i=l2();t.value=s,Array.isArray(i)&&i[1](t)})}const hy="@firebase/database",dy="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G0="";function u2(t){G0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h2(e)}}catch{}return new d2},Hs=Q0("localStorage"),Hh=Q0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Oo("@firebase/database"),f2=function(){let t=1;return function(){return t++}}(),Y0=function(t){const e=vO(t),n=new mO;n.update(e);const s=n.digest();return Wl.encodeByteArray(s)},Yo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Yo.apply(null,s):typeof s=="object"?e+=ft(s):e+=s,e+=" "}return e};let Xs=null,fy=!0;const p2=function(t,e){$(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ji.logLevel=be.VERBOSE,Xs=ji.log.bind(ji),e&&Hh.set("logging_enabled",!0)):typeof t=="function"?Xs=t:(Xs=null,Hh.remove("logging_enabled"))},Et=function(...t){if(fy===!0&&(fy=!1,Xs===null&&Hh.get("logging_enabled")===!0&&p2(!0)),Xs){const e=Yo.apply(null,t);Xs(e)}},Xo=function(t){return function(...e){Et(t,...e)}},Wh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yo(...t);ji.error(e)},si=function(...t){const e=`FIREBASE FATAL ERROR: ${Yo(...t)}`;throw ji.error(e),new Error(e)},Jt=function(...t){const e="FIREBASE WARNING: "+Yo(...t);ji.warn(e)},m2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},X0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},g2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lr="[MIN_NAME]",ii="[MAX_NAME]",Er=function(t,e){if(t===e)return 0;if(t===lr||e===ii)return-1;if(e===lr||t===ii)return 1;{const n=py(t),s=py(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},y2=function(t,e){return t===e?0:t<e?-1:1},Nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ft(e))},Hf=function(t){if(typeof t!="object"||t===null)return ft(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ft(e[s]),n+=":",n+=Hf(t[e[s]]);return n+="}",n},J0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function an(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Z0=function(t){$(!X0(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let p=parseInt(u.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},_2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},w2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},v2=new RegExp("^-?(0*)\\d{1,10}$"),b2=-2147483648,E2=2147483647,py=function(t){if(v2.test(t)){const e=Number(t);if(e>=b2&&e<=E2)return e}return null},Jo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},T2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="5",eE="v",tE="s",nE="r",sE="f",iE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rE="ls",oE="p",Kh="ac",aE="websocket",lE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function S2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cE(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let s;if(e===aE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);S2(t)&&(n.ns=t.namespace);const i=[];return an(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.counters_={}}incrementCounter(e,n=1){rs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={},vu={};function zf(t){const e=t.toString();return wu[e]||(wu[e]=new R2),wu[e]}function k2(t,e){const n=t.toString();return vu[n]||(vu[n]=e()),vu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Jo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="start",P2="close",x2="pLPCommand",N2="pRTLPCB",uE="id",hE="pw",dE="ser",D2="cb",M2="seg",L2="ts",F2="d",U2="dframe",fE=1870,pE=30,$2=fE-pE,B2=25e3,V2=3e4;class xi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xo(e),this.stats_=zf(n),this.urlFn=l=>(this.appCheckToken&&(l[Kh]=this.appCheckToken),cE(n,lE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new O2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(V2)),g2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===my)this.id=a,this.password=l;else if(o===P2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[my]="t",s[dE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[D2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[eE]=Wf,this.transportSessionId&&(s[tE]=this.transportSessionId),this.lastSessionId&&(s[rE]=this.lastSessionId),this.applicationId&&(s[oE]=this.applicationId),this.appCheckToken&&(s[Kh]=this.appCheckToken),typeof location<"u"&&location.hostname&&iE.test(location.hostname)&&(s[nE]=sE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xi.forceAllow_=!0}static forceDisallow(){xi.forceDisallow_=!0}static isAvailable(){return xi.forceAllow_?!0:!xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_2()&&!w2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uw(n),i=J0(s,$2);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[U2]="t",s[uE]=e,s[hE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ft(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=f2(),window[x2+this.uniqueCallbackIdentifier]=e,window[N2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uE]=this.myID,e[hE]=this.myPW,e[dE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pE+s.length<=fE;){const o=this.pendingSegs.shift();s=s+"&"+M2+i+"="+o.seg+"&"+L2+i+"="+o.ts+"&"+F2+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(B2)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=16384,q2=45e3;let vl=null;typeof MozWebSocket<"u"?vl=MozWebSocket:typeof WebSocket<"u"&&(vl=WebSocket);class hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xo(this.connId),this.stats_=zf(n),this.connURL=hn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[eE]=Wf,typeof location<"u"&&location.hostname&&iE.test(location.hostname)&&(o[nE]=sE),n&&(o[tE]=n),s&&(o[rE]=s),i&&(o[Kh]=i),r&&(o[oE]=r),cE(e,aE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hs.set("previous_websocket_failure",!0);try{let s;qw(),this.mySock=new vl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vl!==null&&!hn.forceDisallow_}static previouslyFailed(){return Hs.isInMemoryStorage||Hs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=uo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=J0(n,j2);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(q2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let s=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hn];else{const i=this.transports_=[];for(const r of Ao.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ao.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=6e4,W2=5e3,z2=10*1024,K2=100*1024,bu="t",gy="d",G2="s",yy="r",Q2="e",_y="o",wy="a",vy="n",by="p",Y2="h";class X2{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xo("c:"+this.id+":"),this.transportManager_=new Ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>K2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>z2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bu in e){const n=e[bu];n===wy?this.upgradeIfSecondaryHealthy_():n===yy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_y&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nr("t",e),s=Nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:by,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nr("t",e),s=Nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nr(bu,e);if(gy in e){const s=e[gy];if(n===Y2){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===G2?this.onConnectionShutdown_(s):n===yy?this.onReset_(s):n===Q2?Wh("Server Error: "+s):n===_y?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wf!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Zr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(H2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(W2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:by,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends gE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bl}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=32,Ty=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Oe(){return new Fe("")}function ge(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ss(t){return t.pieces_.length-t.pieceNum_}function Le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function yE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function J2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _E(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function ot(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Fe(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function on(t,e){const n=ge(t),s=ge(e);if(n===null)return e;if(n===s)return on(Le(t),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vE(t,e){if(Ss(t)!==Ss(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function pn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ss(t)>Ss(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Z2{constructor(e,n){this.errorPrefix_=n,this.parts_=_E(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zl(this.parts_[s]);bE(this)}}function eF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zl(e),bE(t)}function tF(t){const e=t.parts_.pop();t.byteLength_-=zl(e),t.parts_.length>0&&(t.byteLength_-=1)}function bE(t){if(t.byteLength_>Ty)throw new Error(t.errorPrefix_+"has a key path longer than "+Ty+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ey)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ey+") or object contains a cycle "+Fs(t))}function Fs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends gE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Gf}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=1e3,nF=60*5*1e3,Cy=30*1e3,sF=1.3,iF=3e4,rF="server_kill",Iy=3;class Qn extends mE{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qn.nextPersistentConnectionId_++,this.log_=Xo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dr,this.maxReconnectDelay_=nF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!qw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ft(r)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new co,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Qn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rs(e,"w")){const s=Xi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wh("Unrecognized action received from server: "+ft(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iF&&(this.reconnectDelay_=Dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Qn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new X2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Jt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(rF)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Jt(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uh(this.interruptReasons_)&&(this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Hf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Iy&&(this.reconnectDelay_=Cy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Iy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+G0.replace(/\./g,"-")]=1,Md()?e["framework.cordova"]=1:jw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bl.getInstance().currentlyOnline();return uh(this.interruptReasons_)&&e}}Qn.nextPersistentConnectionId_=0;Qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ye(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ye(lr,e),i=new ye(lr,n);return this.compare(s,i)!==0}minPost(){return ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;class EE extends Ac{static get __EMPTY_NODE(){return Ta}static set __EMPTY_NODE(e){Ta=e}compare(e,n){return Er(e.name,n.name)}isDefinedOn(e){throw fr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ye.MIN}maxPost(){return new ye(ii,Ta)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ye(e,Ta)}toString(){return".key"}}const qi=new EE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:rt.RED,this.left=i!=null?i:Vt.EMPTY_NODE,this.right=r!=null?r:Vt.EMPTY_NODE}copy(e,n,s,i,r){return new rt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Vt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class oF{copy(e,n,s,i,r){return this}insert(e,n,s){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,n=Vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ca(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ca(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ca(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ca(this.root_,null,this.comparator_,!0,e)}}Vt.EMPTY_NODE=new oF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t,e){return Er(t.name,e.name)}function Qf(t,e){return Er(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;function lF(t){Gh=t}const TE=function(t){return typeof t=="number"?"number:"+Z0(t):"string:"+t},CE=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rs(e,".sv"),"Priority must be a string or number.")}else $(t===Gh||t.isEmpty(),"priority of unexpected type.");$(t===Gh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ay;class st{constructor(e,n=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),CE(this.priorityNode_)}static set __childrenNodeConstructor(e){Ay=e}static get __childrenNodeConstructor(){return Ay}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:ge(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ge(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:($(s!==".priority"||Ss(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+TE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Z0(this.value_):e+=this.value_,this.lazyHash_=Y0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=st.VALUE_TYPE_ORDER.indexOf(n),r=st.VALUE_TYPE_ORDER.indexOf(s);return $(i>=0,"Unknown leaf type: "+n),$(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IE,AE;function cF(t){IE=t}function uF(t){AE=t}class hF extends Ac{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Er(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ye.MIN}maxPost(){return new ye(ii,new st("[PRIORITY-POST]",AE))}makePost(e,n){const s=IE(e);return new ye(n,new st("[PRIORITY-POST]",s))}toString(){return".priority"}}const Rt=new hF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF=Math.log(2);class fF{constructor(e){const n=r=>parseInt(Math.log(r)/dF,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const El=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,p;if(u===0)return null;if(u===1)return h=t[l],p=n?n(h):h,new rt(p,h.node,rt.BLACK,null,null);{const g=parseInt(u/2,10)+l,y=i(l,g),v=i(g+1,c);return h=t[g],p=n?n(h):h,new rt(p,h.node,rt.BLACK,y,v)}},r=function(l){let c=null,u=null,h=t.length;const p=function(y,v){const E=h-y,A=h;h-=y;const x=i(E+1,A),R=t[E],S=n?n(R):R;g(new rt(S,R.node,v,null,x))},g=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(y+1));v?p(E,rt.BLACK):(p(E,rt.BLACK),p(E,rt.RED))}return u},o=new fF(t.length),a=r(o);return new Vt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;const Ti={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(Ti&&Rt,"ChildrenNode.ts has not been loaded"),Eu=Eu||new Wn({".priority":Ti},{".priority":Rt}),Eu}get(e){const n=Xi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Vt?n:null}hasIndex(e){return rs(this.indexSet_,e.toString())}addIndex(e,n){$(e!==qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ye.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=El(s,e.getCompare()):a=Ti;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wn(u,c)}addToIndexes(e,n){const s=Ya(this.indexes_,(i,r)=>{const o=Xi(this.indexSet_,r);if($(o,"Missing index implementation for "+r),i===Ti)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ye.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),El(a,o.getCompare())}else return Ti;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ye(e.name,a))),l.insert(e,e.node)}});return new Wn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ya(this.indexes_,i=>{if(i===Ti)return i;{const r=n.get(e.name);return r?i.remove(new ye(e.name,r)):i}});return new Wn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;class Ce{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&CE(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mr||(Mr=new Ce(new Vt(Qf),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mr}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mr:n}}getChild(e){const n=ge(e);return n===null?this:this.getImmediateChild(n).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ye(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mr:this.priorityNode_;return new Ce(i,o,r)}}updateChild(e,n){const s=ge(e);if(s===null)return n;{$(ge(e)!==".priority"||Ss(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Rt,(o,a)=>{n[o]=a.val(e),s++,r&&Ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+TE(this.getPriority().val())+":"),this.forEachChild(Rt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Y0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ye(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ye(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ye(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ye.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ye.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zo?-1:0}withIndex(e){if(e===qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Rt),i=n.getIterator(Rt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qi?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pF extends Ce{constructor(){super(new Vt(Qf),Ce.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const Zo=new pF;Object.defineProperties(ye,{MIN:{value:new ye(lr,Ce.EMPTY_NODE)},MAX:{value:new ye(ii,Zo)}});EE.__EMPTY_NODE=Ce.EMPTY_NODE;st.__childrenNodeConstructor=Ce;lF(Zo);uF(Zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mF=!0;function Tt(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new st(n,Tt(e))}if(!(t instanceof Array)&&mF){const n=[];let s=!1;if(an(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Tt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ye(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const r=El(n,aF,o=>o.name,Qf);if(s){const o=El(n,Rt.getCompare());return new Ce(r,Tt(e),new Wn({".priority":o},{".priority":Rt}))}else return new Ce(r,Tt(e),Wn.Default)}else{let n=Ce.EMPTY_NODE;return an(t,(s,i)=>{if(rs(t,s)&&s.substring(0,1)!=="."){const r=Tt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Tt(e))}}cF(Tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF extends Ac{constructor(e){super(),this.indexPath_=e,$(!pe(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Er(e.name,n.name):r}makePost(e,n){const s=Tt(e),i=Ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new ye(n,i)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,Zo);return new ye(ii,e)}toString(){return _E(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF extends Ac{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Er(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ye.MIN}maxPost(){return ye.MAX}makePost(e,n){const s=Tt(e);return new ye(n,s)}toString(){return".value"}}const _F=new yF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wF(t){return{type:"value",snapshotNode:t}}function vF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function EF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lr}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Rt}copy(){const e=new Yf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ry(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Rt?n="$priority":t.index_===_F?n="$value":t.index_===qi?n="$key":($(t.index_ instanceof gF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ft(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ft(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ft(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ft(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ft(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ky(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Rt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends mE{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Xo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Tl.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ry(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Xi(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const s=Tl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ry(e._queryParams),s=e._path.toString(),i=new co;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=uo(a.responseText)}catch{Jt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Jt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){return{value:null,children:new Map}}function SE(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ge(e);t.children.has(s)||t.children.set(s,Cl());const i=t.children.get(s);e=Le(e),SE(i,e,n)}}function Qh(t,e,n){t.value!==null?n(e,t.value):CF(t,(s,i)=>{const r=new Fe(e.toString()+"/"+s);Qh(i,r,n)})}function CF(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&an(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=10*1e3,AF=30*1e3,SF=5*60*1e3;class RF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new IF(e);const s=Oy+(AF-Oy)*Math.random();Zr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;an(e,(i,r)=>{r>0&&rs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Zr(this.reportStats_.bind(this),Math.floor(Math.random()*2*SF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function RE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function OE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Rn.ACK_USER_WRITE,this.source=RE()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new Il(Oe(),n,this.revert)}}else return $(ge(this.path)===e,"operationForChild called for unrelated child."),new Il(Le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Rn.OVERWRITE}operationForChild(e){return pe(this.path)?new ri(this.source,Oe(),this.snap.getImmediateChild(e)):new ri(this.source,Le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Rn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new ri(this.source,Oe(),n.value):new So(this.source,Oe(),n)}else return $(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new So(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ge(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kF(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(EF(o.childName,o.snapshotNode))}),Lr(t,i,"child_removed",e,s,n),Lr(t,i,"child_added",e,s,n),Lr(t,i,"child_moved",r,s,n),Lr(t,i,"child_changed",e,s,n),Lr(t,i,"value",e,s,n),i}function Lr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>PF(t,a,l)),o.forEach(a=>{const l=OF(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function OF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function PF(t,e,n){if(e.childName==null||n.childName==null)throw fr("Should only compare child_ events.");const s=new ye(e.childName,e.snapshotNode),i=new ye(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e){return{eventCache:t,serverCache:e}}function eo(t,e,n,s){return PE(new Xf(e,n,s),t.serverCache)}function xE(t,e,n,s){return PE(t.eventCache,new Xf(e,n,s))}function Yh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;const xF=()=>(Tu||(Tu=new Vt(y2)),Tu);class De{constructor(e,n=xF()){this.value=e,this.children=n}static fromObject(e){let n=new De(null);return an(e,(s,i)=>{n=n.set(new Fe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Oe(),value:this.value};if(pe(e))return null;{const s=ge(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Le(e),n);return r!=null?{path:ot(new Fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=ge(e),s=this.children.get(n);return s!==null?s.subtree(Le(e)):new De(null)}}set(e,n){if(pe(e))return new De(n,this.children);{const s=ge(e),r=(this.children.get(s)||new De(null)).set(Le(e),n),o=this.children.insert(s,r);return new De(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=ge(e),s=this.children.get(n);if(s){const i=s.remove(Le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new De(null):new De(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const n=ge(e),s=this.children.get(n);return s?s.get(Le(e)):null}}setTree(e,n){if(pe(e))return n;{const s=ge(e),r=(this.children.get(s)||new De(null)).setTree(Le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new De(this.value,o)}}fold(e){return this.fold_(Oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ot(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(pe(e))return null;{const r=ge(e),o=this.children.get(r);return o?o.findOnPath_(Le(e),ot(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Oe(),n)}foreachOnPath_(e,n,s){if(pe(e))return this;{this.value&&s(n,this.value);const i=ge(e),r=this.children.get(i);return r?r.foreachOnPath_(Le(e),ot(n,i),s):new De(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ot(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new De(null))}}function to(t,e,n){if(pe(e))return new _n(new De(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=on(i,e);return r=r.updateChild(o,n),new _n(t.writeTree_.set(i,r))}else{const i=new De(n),r=t.writeTree_.setTree(e,i);return new _n(r)}}}function Py(t,e,n){let s=t;return an(n,(i,r)=>{s=to(s,ot(e,i),r)}),s}function xy(t,e){if(pe(e))return _n.empty();{const n=t.writeTree_.setTree(e,new De(null));return new _n(n)}}function Xh(t,e){return pi(t,e)!=null}function pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(on(n.path,e)):null}function Ny(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Rt,(s,i)=>{e.push(new ye(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ye(s,i.value))}),e}function Es(t,e){if(pe(e))return t;{const n=pi(t,e);return n!=null?new _n(new De(n)):new _n(t.writeTree_.subtree(e))}}function Jh(t){return t.writeTree_.isEmpty()}function cr(t,e){return NE(Oe(),t.writeTree_,e)}function NE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?($(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=NE(ot(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ot(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e){return $E(e,t)}function NF(t,e,n,s,i){$(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=to(t.visibleWrites,e,n)),t.lastWriteId=s}function DF(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function MF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LF(a,s.path)?i=!1:pn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return FF(t),!0;if(s.snap)t.visibleWrites=xy(t.visibleWrites,s.path);else{const a=s.children;an(a,l=>{t.visibleWrites=xy(t.visibleWrites,ot(s.path,l))})}return!0}else return!1}function LF(t,e){if(t.snap)return pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pn(ot(t.path,n),e))return!0;return!1}function FF(t){t.visibleWrites=ME(t.allWrites,UF,Oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function UF(t){return t.visible}function ME(t,e,n){let s=_n.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)pn(n,o)?(a=on(n,o),s=to(s,a,r.snap)):pn(o,n)&&(a=on(o,n),s=to(s,Oe(),r.snap.getChild(a)));else if(r.children){if(pn(n,o))a=on(n,o),s=Py(s,a,r.children);else if(pn(o,n))if(a=on(o,n),pe(a))s=Py(s,Oe(),r.children);else{const l=Xi(r.children,ge(a));if(l){const c=l.getChild(Le(a));s=to(s,Oe(),c)}}}else throw fr("WriteRecord should have .snap or .children")}}return s}function LE(t,e,n,s,i){if(!s&&!i){const r=pi(t.visibleWrites,e);if(r!=null)return r;{const o=Es(t.visibleWrites,e);if(Jh(o))return n;if(n==null&&!Xh(o,Oe()))return null;{const a=n||Ce.EMPTY_NODE;return cr(o,a)}}}else{const r=Es(t.visibleWrites,e);if(!i&&Jh(r))return n;if(!i&&n==null&&!Xh(r,Oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(pn(c.path,e)||pn(e,c.path))},a=ME(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return cr(a,l)}}}function $F(t,e,n){let s=Ce.EMPTY_NODE;const i=pi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Rt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Es(t.visibleWrites,e);return n.forEachChild(Rt,(o,a)=>{const l=cr(Es(r,new Fe(o)),a);s=s.updateImmediateChild(o,l)}),Ny(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Es(t.visibleWrites,e);return Ny(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function BF(t,e,n,s,i){$(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ot(e,n);if(Xh(t.visibleWrites,r))return null;{const o=Es(t.visibleWrites,r);return Jh(o)?i.getChild(n):cr(o,i.getChild(n))}}function VF(t,e,n,s){const i=ot(e,n),r=pi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Es(t.visibleWrites,i);return cr(o,s.getNode().getImmediateChild(n))}else return null}function jF(t,e){return pi(t.visibleWrites,e)}function qF(t,e,n,s,i,r,o){let a;const l=Es(t.visibleWrites,e),c=pi(l,Oe());if(c!=null)a=c;else if(n!=null)a=cr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=p.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=p.getNext();return u}else return[]}function HF(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Zh(t,e,n,s){return LE(t.writeTree,t.treePath,e,n,s)}function FE(t,e){return $F(t.writeTree,t.treePath,e)}function Dy(t,e,n,s){return BF(t.writeTree,t.treePath,e,n,s)}function Al(t,e){return jF(t.writeTree,ot(t.treePath,e))}function WF(t,e,n,s,i,r){return qF(t.writeTree,t.treePath,e,n,s,i,r)}function Jf(t,e,n){return VF(t.writeTree,t.treePath,e,n)}function UE(t,e){return $E(ot(t.treePath,e),t.writeTree)}function $E(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Sy(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,bF(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,vF(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Sy(s,e.snapshotNode,i.oldSnap));else throw fr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const BE=new KF;class Zf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Xf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:oi(this.viewCache_),r=WF(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function GF(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QF(t,e,n,s,i){const r=new zF;let o,a;if(n.type===Rn.OVERWRITE){const c=n;c.source.fromUser?o=ed(t,e,c.path,c.snap,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Sl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Rn.MERGE){const c=n;c.source.fromUser?o=XF(t,e,c.path,c.children,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=td(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Rn.ACK_USER_WRITE){const c=n;c.revert?o=eU(t,e,c.path,s,i,r):o=JF(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Rn.LISTEN_COMPLETE)o=ZF(t,e,n.path,s,r);else throw fr("Unknown operation type: "+n.type);const l=r.getChanges();return YF(e,o,l),{viewCache:o,changes:l}}function YF(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(wF(Yh(e)))}}function VE(t,e,n,s,i,r){const o=e.eventCache;if(Al(s,n)!=null)return e;{let a,l;if(pe(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=oi(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=FE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Zh(s,oi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ge(n);if(c===".priority"){$(Ss(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Dy(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Le(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=Dy(s,n,o.getNode(),l);p!=null?h=o.getNode().getImmediateChild(c).updateChild(u,p):h=o.getNode().getImmediateChild(c)}else h=Jf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return eo(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Sl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=ge(n);if(!l.isCompleteForPath(n)&&Ss(n)>1)return e;const y=Le(n),E=l.getNode().getImmediateChild(g).updateChild(y,s);g===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),g,E,y,BE,null)}const h=xE(e,c,l.isFullyInitialized()||pe(n),u.filtersNodes()),p=new Zf(i,h,r);return VE(t,h,n,i,p,a)}function ed(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Zf(i,e,r);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=eo(e,c,!0,t.filter.filtersNodes());else{const h=ge(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=eo(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Le(n),g=a.getNode().getImmediateChild(h);let y;if(pe(p))y=s;else{const v=u.getCompleteChild(h);v!=null?yE(p)===".priority"&&v.getChild(wE(p)).isEmpty()?y=v:y=v.updateChild(p,s):y=Ce.EMPTY_NODE}if(g.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),h,y,p,u,o);l=eo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function My(t,e){return t.eventCache.isCompleteForChild(e)}function XF(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ot(n,l);My(e,ge(u))&&(a=ed(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ot(n,l);My(e,ge(u))||(a=ed(t,a,u,c,i,r,o))}),a}function Ly(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function td(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=s:c=new De(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),y=Ly(t,g,p);l=Sl(t,l,new Fe(h),y,i,r,o,a)}}),c.children.inorderTraversal((h,p)=>{const g=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!g){const y=e.serverCache.getNode().getImmediateChild(h),v=Ly(t,y,p);l=Sl(t,l,new Fe(h),v,i,r,o,a)}}),l}function JF(t,e,n,s,i,r,o){if(Al(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Sl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(pe(n)){let c=new De(null);return l.getNode().forEachChild(qi,(u,h)=>{c=c.set(new Fe(u),h)}),td(t,e,n,c,i,r,a,o)}else return e}else{let c=new De(null);return s.foreach((u,h)=>{const p=ot(n,u);l.isCompleteForPath(p)&&(c=c.set(u,l.getNode().getChild(p)))}),td(t,e,n,c,i,r,a,o)}}function ZF(t,e,n,s,i){const r=e.serverCache,o=xE(e,r.getNode(),r.isFullyInitialized()||pe(n),r.isFiltered());return VE(t,o,n,s,BE,i)}function eU(t,e,n,s,i,r){let o;if(Al(s,n)!=null)return e;{const a=new Zf(s,e,i),l=e.eventCache.getNode();let c;if(pe(n)||ge(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zh(s,oi(e));else{const h=e.serverCache.getNode();$(h instanceof Ce,"serverChildren would be complete if leaf node"),u=FE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ge(n);let h=Jf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Le(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,Le(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zh(s,oi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Al(s,Oe())!=null,eo(e,c,o,t.filter.filtersNodes())}}function tU(t,e){const n=oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(ge(e)).isEmpty())?n.getChild(e):null}function Fy(t,e,n,s){e.type===Rn.MERGE&&e.source.queryId!==null&&($(oi(t.viewCache_),"We should always have a full cache before handling merges"),$(Yh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=QF(t.processor_,i,e,n,s);return GF(t.processor_,r.viewCache),$(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,nU(t,r.changes,r.viewCache.eventCache.getNode(),null)}function nU(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return kF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uy;function sU(t){$(!Uy,"__referenceConstructor has already been defined"),Uy=t}function ep(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return $(r!=null,"SyncTree gave us an op for an invalid query."),Fy(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Fy(o,e,n,s));return r}}function tp(t,e){let n=null;for(const s of t.views.values())n=n||tU(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $y;function iU(t){$(!$y,"__referenceConstructor has already been defined"),$y=t}class By{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=HF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rU(t,e,n,s,i){return NF(t.pendingWriteTree_,e,n,s,i),i?Rc(t,new ri(RE(),e,n)):[]}function Ni(t,e,n=!1){const s=DF(t.pendingWriteTree_,e);if(MF(t.pendingWriteTree_,e)){let r=new De(null);return s.snap!=null?r=r.set(Oe(),!0):an(s.children,o=>{r=r.set(new Fe(o),!0)}),Rc(t,new Il(s.path,r,n))}else return[]}function Sc(t,e,n){return Rc(t,new ri(kE(),e,n))}function oU(t,e,n){const s=De.fromObject(n);return Rc(t,new So(kE(),e,s))}function aU(t,e,n,s){const i=WE(t,s);if(i!=null){const r=zE(i),o=r.path,a=r.queryId,l=on(o,e),c=new ri(OE(a),l,n);return KE(t,o,c)}else return[]}function lU(t,e,n,s){const i=WE(t,s);if(i){const r=zE(i),o=r.path,a=r.queryId,l=on(o,e),c=De.fromObject(n),u=new So(OE(a),l,c);return KE(t,o,u)}else return[]}function jE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=on(o,e),c=tp(a,l);if(c)return c});return LE(i,e,r,n,!0)}function Rc(t,e){return qE(e,t.syncPointTree_,null,DE(t.pendingWriteTree_,Oe()))}function qE(t,e,n,s){if(pe(t.path))return HE(t,e,n,s);{const i=e.get(Oe());n==null&&i!=null&&(n=tp(i,Oe()));let r=[];const o=ge(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=UE(s,o);r=r.concat(qE(a,l,c,u))}return i&&(r=r.concat(ep(i,t,s,n))),r}}function HE(t,e,n,s){const i=e.get(Oe());n==null&&i!=null&&(n=tp(i,Oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=UE(s,o),u=t.operationForChild(o);u&&(r=r.concat(HE(u,a,l,c)))}),i&&(r=r.concat(ep(i,t,s,n))),r}function WE(t,e){return t.tagToQueryMap.get(e)}function zE(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function KE(t,e,n){const s=t.syncPointTree_.get(e);$(s,"Missing sync point for query tag that we're tracking");const i=DE(t.pendingWriteTree_,e);return ep(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new np(n)}node(){return this.node_}}class sp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ot(this.path_,e);return new sp(this.syncTree_,n)}node(){return jE(this.syncTree_,this.path_)}}const cU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vy=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hU(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},hU=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&$(!1,"Unexpected increment value: "+s);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},dU=function(t,e,n,s){return ip(e,new sp(n,t),s)},fU=function(t,e,n){return ip(t,new np(e),n)};function ip(t,e,n){const s=t.getPriority().val(),i=Vy(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new st(a,Tt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new st(i))),o.forEachChild(Rt,(a,l)=>{const c=ip(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function op(t,e){let n=e instanceof Fe?e:new Fe(e),s=t,i=ge(n);for(;i!==null;){const r=Xi(s.node.children,i)||{children:{},childCount:0};s=new rp(i,s,r),n=Le(n),i=ge(n)}return s}function Tr(t){return t.node.value}function GE(t,e){t.node.value=e,nd(t)}function QE(t){return t.node.childCount>0}function pU(t){return Tr(t)===void 0&&!QE(t)}function kc(t,e){an(t.node.children,(n,s)=>{e(new rp(n,t,s))})}function YE(t,e,n,s){n&&!s&&e(t),kc(t,i=>{YE(i,e,!0,s)}),n&&s&&e(t)}function mU(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ea(t){return new Fe(t.parent===null?t.name:ea(t.parent)+"/"+t.name)}function nd(t){t.parent!==null&&gU(t.parent,t.name,t)}function gU(t,e,n){const s=pU(n),i=rs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,nd(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU=/[\[\].#$\/\u0000-\u001F\u007F]/,_U=/[\[\].#$\u0000-\u001F\u007F]/,Cu=10*1024*1024,XE=function(t){return typeof t=="string"&&t.length!==0&&!yU.test(t)},wU=function(t){return typeof t=="string"&&t.length!==0&&!_U.test(t)},vU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wU(t)},JE=function(t,e,n){const s=n instanceof Fe?new Z2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Fs(s)+" with contents = "+e.toString());if(X0(e))throw new Error(t+"contains "+e.toString()+" "+Fs(s));if(typeof e=="string"&&e.length>Cu/3&&zl(e)>Cu)throw new Error(t+"contains a string greater than "+Cu+" utf8 bytes "+Fs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(an(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!XE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eF(s,o),JE(t,a,s),tF(s)}),i&&r)throw new Error(t+' contains ".value" child '+Fs(s)+" in addition to actual children.")}},bU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!XE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vU(n))throw new Error(wO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function TU(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!vE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function mi(t,e,n){TU(t,n),CU(t,s=>pn(s,e)||pn(e,s))}function CU(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(IU(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function IU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xs&&Et("event: "+n.toString()),Jo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU="repo_interrupt",SU=25;class RU{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cl(),this.transactionQueueTree_=new rp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kU(t,e,n){if(t.stats_=zf(t.repoInfo_),t.forceRestClient_||T2())t.server_=new Tl(t.repoInfo_,(s,i,r,o)=>{jy(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Qn(t.repoInfo_,e,(s,i,r,o)=>{jy(t,s,i,r,o)},s=>{qy(t,s)},s=>{PU(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=k2(t.repoInfo_,()=>new RF(t.stats_,t.server_)),t.infoData_=new TF,t.infoSyncTree_=new By({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Sc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ap(t,"connected",!1),t.serverSyncTree_=new By({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);mi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function OU(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ZE(t){return cU({timestamp:OU(t)})}function jy(t,e,n,s,i){t.dataUpdateCount++;const r=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ya(n,c=>Tt(c));o=lU(t.serverSyncTree_,r,l,i)}else{const l=Tt(n);o=aU(t.serverSyncTree_,r,l,i)}else if(s){const l=Ya(n,c=>Tt(c));o=oU(t.serverSyncTree_,r,l)}else{const l=Tt(n);o=Sc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=cp(t,r)),mi(t.eventQueue_,a,o)}function qy(t,e){ap(t,"connected",e),e===!1&&NU(t)}function PU(t,e){an(e,(n,s)=>{ap(t,n,s)})}function ap(t,e,n){const s=new Fe("/.info/"+e),i=Tt(n);t.infoData_.updateSnapshot(s,i);const r=Sc(t.infoSyncTree_,s,i);mi(t.eventQueue_,s,r)}function xU(t){return t.nextWriteId_++}function NU(t){eT(t,"onDisconnectEvents");const e=ZE(t),n=Cl();Qh(t.onDisconnect_,Oe(),(i,r)=>{const o=dU(i,r,t.serverSyncTree_,e);SE(n,i,o)});let s=[];Qh(n,Oe(),(i,r)=>{s=s.concat(Sc(t.serverSyncTree_,i,r));const o=FU(t,i);cp(t,o)}),t.onDisconnect_=Cl(),mi(t.eventQueue_,Oe(),s)}function DU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AU)}function eT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function tT(t,e,n){return jE(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function lp(t,e=t.transactionQueueTree_){if(e||Oc(t,e),Tr(e)){const n=sT(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MU(t,ea(e),n)}else QE(e)&&kc(e,n=>{lp(t,n)})}function MU(t,e,n){const s=n.map(c=>c.currentWriteId),i=tT(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];$(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=on(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{eT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Ni(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Oc(t,op(t.transactionQueueTree_,e)),lp(t,t.transactionQueueTree_),mi(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)Jo(h[p])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Jt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}cp(t,e)}},o)}function cp(t,e){const n=nT(t,e),s=ea(n),i=sT(t,n);return LU(t,i,s),s}function LU(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=on(n,l.path);let u=!1,h;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ni(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SU)u=!0,h="maxretry",i=i.concat(Ni(t.serverSyncTree_,l.currentWriteId,!0));else{const p=tT(t,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){JE("transaction failed: Data returned ",g,l.path);let y=Tt(g);typeof g=="object"&&g!=null&&rs(g,".priority")||(y=y.updatePriority(p.getPriority()));const E=l.currentWriteId,A=ZE(t),x=fU(y,p,A);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=x,l.currentWriteId=xU(t),o.splice(o.indexOf(E),1),i=i.concat(rU(t.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),i=i.concat(Ni(t.serverSyncTree_,E,!0))}else u=!0,h="nodata",i=i.concat(Ni(t.serverSyncTree_,l.currentWriteId,!0))}mi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Oc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Jo(s[a]);lp(t,t.transactionQueueTree_)}function nT(t,e){let n,s=t.transactionQueueTree_;for(n=ge(e);n!==null&&Tr(s)===void 0;)s=op(s,n),e=Le(e),n=ge(e);return s}function sT(t,e){const n=[];return iT(t,e,n),n.sort((s,i)=>s.order-i.order),n}function iT(t,e,n){const s=Tr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);kc(e,i=>{iT(t,i,n)})}function Oc(t,e){const n=Tr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,GE(e,n.length>0?n:void 0)}kc(e,s=>{Oc(t,s)})}function FU(t,e){const n=ea(nT(t,e)),s=op(t.transactionQueueTree_,e);return mU(s,i=>{Iu(t,i)}),Iu(t,s),YE(s,i=>{Iu(t,i)}),n}function Iu(t,e){const n=Tr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?GE(e,void 0):n.length=r+1,mi(t.eventQueue_,ea(e),i);for(let o=0;o<s.length;o++)Jo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $U(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hy=function(t,e){const n=BU(t),s=n.namespace;n.domain==="firebase.com"&&si(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&si("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||m2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new A2(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Fe(n.pathString)}},BU=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=UU(t.substring(u,h)));const p=$U(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return pe(this._path)?null:yE(this._path)}get ref(){return new Cr(this._repo,this._path)}get _queryIdentifier(){const e=ky(this._queryParams),n=Hf(e);return n==="{}"?"default":n}get _queryObject(){return ky(this._queryParams)}isEqual(e){if(e=en(e),!(e instanceof up))return!1;const n=this._repo===e._repo,s=vE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+J2(this._path)}}class Cr extends up{constructor(e,n){super(e,n,new Yf,!1)}get parent(){const e=wE(this._path);return e===null?null:new Cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}sU(Cr);iU(Cr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU="FIREBASE_DATABASE_EMULATOR_HOST",sd={};let jU=!1;function qU(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||si("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hy(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[VU]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Hy(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new zh(zh.OWNER):new I2(t.name,t.options,e);bU("Invalid Firebase Database URL",o),pe(o.path)||si("Database URL must point to the root of a Firebase Database (not including a child path).");const h=WU(a,t,u,new C2(t.name,n));return new zU(h,t)}function HU(t,e){const n=sd[e];(!n||n[t.key]!==t)&&si(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DU(t),delete n[t.key]}function WU(t,e,n,s){let i=sd[e.name];i||(i={},sd[e.name]=i);let r=i[t.toURLString()];return r&&si("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new RU(t,jU,n,s),i[t.toURLString()]=r,r}class zU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cr(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&si("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KU(t){u2(ci),xn(new wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return qU(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt(hy,dy,t),Yt(hy,dy,"esm2017")}Qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KU();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebasestorage.googleapis.com",GU="storageBucket",QU=2*60*1e3,YU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Fn{constructor(e,n,s=0){super(Au(e),`Firebase Storage: ${n} (${Au(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function Au(t){return"storage/"+t}function XU(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Ln.UNKNOWN,t)}function JU(){return new Un(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZU(){return new Un(Ln.CANCELED,"User canceled the upload/download.")}function e$(t){return new Un(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function t$(t){return new Un(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Wy(t){return new Un(Ln.INVALID_ARGUMENT,t)}function oT(){return new Un(Ln.APP_DELETED,"The Firebase app was deleted.")}function n$(t){return new Un(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(s.path==="")return s;throw t$(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},v=n===rT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",A=new RegExp(`^https?://${v}/${i}/${E}`,"i"),R=[{regex:a,indices:l,postModify:r},{regex:g,indices:y,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<R.length;S++){const H=R[S],j=H.regex.exec(e);if(j){const he=j[H.indices.bucket];let Ae=j[H.indices.path];Ae||(Ae=""),s=new mn(he,Ae),H.postModify(s);break}}if(s==null)throw e$(e);return s}}class s${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i$(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function p(){r&&clearTimeout(r)}function g(E,...A){if(c){p();return}if(E){p(),u.call(null,E,...A);return}if(l()||o){p(),u.call(null,E,...A);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let y=!1;function v(E){y||(y=!0,p(),!c&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function r$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t){return t!==void 0}function zy(t,e,n,s){if(s<e)throw Wy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Wy(`Invalid value for '${t}'. Expected ${n} or less.`)}function a$(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rl||(Rl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e,n,s,i,r,o,a,l,c,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ia(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Rl.NO_ERROR,l=r.getStatus();if(!a||l$(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Rl.ABORT;s(!1,new Ia(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Ia(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());o$(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=XU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?oT():ZU();o(l)}else{const l=JU();o(l)}};this.canceled_?n(!1,new Ia(!1,null,!0)):this.backoffId_=i$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&r$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ia{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function u$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function h$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function d$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function f$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function p$(t,e,n,s,i,r,o=!0){const a=a$(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return d$(c,e),u$(c,n),h$(c,r),f$(c,s),new c$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function g$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new kl(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return g$(this._location.path)}get storage(){return this._service}get parent(){const e=m$(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new kl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw n$(e)}}function Ky(t,e){const n=e==null?void 0:e[GU];return n==null?null:mn.makeFromBucketSpec(n,t)}class y${constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=rT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QU,this._maxUploadRetryTime=YU,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=Ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=Ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new s$(oT());{const o=p$(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Gy="@firebase/storage",Qy="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _$="storage";function w$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new y$(n,s,i,e,ci)}function v$(){xn(new wn(_$,w$,"PUBLIC").setMultipleInstances(!0)),Yt(Gy,Qy,""),Yt(Gy,Qy,"esm2017")}v$();const Su=new WeakMap;function aT(t,e){return Su.has(e)||Su.set(e,t||{f:{},r:{},s:{},u:{}}),Su.get(e)}function b$(t,e,n,s){if(!t)return n;const[i,r]=lT(t);if(!i)return n;const o=aT(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function E$(t,e,n,s){if(!t)return;const[i,r]=lT(t);if(!i)return;const o=aT(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}),a}function lT(t){return e2(t)||t2(t)?["f",t.path]:n2(t)?["r",t.toString()]:s2(t)?["s",t.toString()]:[]}const Ru=new WeakMap;function T$(t,e,n){const s=Vf();Ru.has(s)||Ru.set(s,new Map);const i=Ru.get(s),r=E$(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Hn}const C$={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function id(t,e,n,s){if(!JL(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(g=>{const y=Object.getOwnPropertyDescriptor(a,g);y&&!y.enumerable&&Object.defineProperty(h,g,y)});for(const g in a){const y=a[g];if(y==null||y instanceof Date||y instanceof Qe||y instanceof bc)h[g]=y;else if(qf(y)){const v=c+g;h[g]=v in n?l[g]:y.path,p[v]=y.converter?y:y.withConverter(s.converter)}else if(Array.isArray(y)){h[g]=Array(y.length);for(let v=0;v<y.length;v++){const E=y[v];E&&E.path in r&&(h[g][v]=r[E.path])}o(y,l[g]||h[g],c+g+".",[h[g],p])}else fi(y)?(h[g]={},o(y,l[g],c+g+".",[h[g],p])):h[g]=y}}return o(t,e,"",i),i}const hp={reset:!1,wait:!0,maxRefDepth:2,converter:C$,snapshotOptions:{serverTimestamps:"estimate"}};function Ol(t){for(const e in t)t[e].unsub()}function rd(t,e,n,s,i,r,o,a,l){const[c,u]=id(s.data(t.snapshotOptions),jf(e,n),i,t);r.set(e,n,c),od(t,e,n,i,u,r,o,a,l)}function I$({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=Hn;return a.once?f0(t).then(u=>{u.exists()?rd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=xf(t,u=>{u.exists()?rd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Ol(l)}}function od(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(v=>c.indexOf(v)<0).forEach(v=>{s[v].unsub(),delete s[v]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const p=c.length,g=Object.create(null);function y(v){v in g&&++h>=p&&a(n)}c.forEach(v=>{const E=s[v],A=i[v],x=`${n}.${v}`;if(g[x]=!0,E)if(E.path!==A.path)E.unsub();else return;s[v]={data:()=>jf(e,x),unsub:I$({ref:A,target:e,path:x,depth:o,ops:r,resolve:y.bind(null,x),reject:l},t),path:A.path}})}function A$(t,e,n,s,i,r){const o=Object.assign({},hp,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let p=At(c?[]:t.value);c||n.set(t,h,[]);const g=s;let y,v=Hn;const E=[],A={added:({newIndex:R,doc:S})=>{E.splice(R,0,Object.create(null));const H=E[R],[j,he]=id(S.data(l),void 0,H,o);n.add(vt(p),R,j),od(o,p,`${h}.${R}`,H,he,n,0,s.bind(null,S),i)},modified:({oldIndex:R,newIndex:S,doc:H})=>{const j=vt(p),he=E[R],Ae=j[R],[et,Ee]=id(H.data(l),Ae,he,o);E.splice(S,0,he),n.remove(j,R),n.add(j,S,et),od(o,p,`${h}.${S}`,he,Ee,n,0,s,i)},removed:({oldIndex:R})=>{const S=vt(p);n.remove(S,R),Ol(E.splice(R,1)[0])}};function x(R){const S=R.docChanges(a);if(!y&&S.length){y=!0;let H=0;const j=S.length,he=Object.create(null);for(let Ae=0;Ae<j;Ae++)he[S[Ae].doc.id]=!0;s=Ae=>{Ae&&Ae.id in he&&++H>=j&&(c&&(n.set(t,h,vt(p)),p=t),g(vt(p)),s=Hn)}}S.forEach(H=>{A[H.type](H)}),S.length||(c&&(n.set(t,h,vt(p)),p=t),s(vt(p)))}return u?SD(e).then(x).catch(i):v=xf(e,x,i),R=>{if(v(),R){const S=typeof R=="function"?R():[];n.set(t,h,S)}E.forEach(Ol)}}function S$(t,e,n,s,i,r){const o=Object.assign({},hp,r),a="value",l=Object.create(null);s=i2(s,()=>jf(t,a));let c=Hn;function u(h){h.exists()?rd(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?f0(e).then(u).catch(i):c=xf(e,u,i),h=>{if(c(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}Ol(l)}}function R$(t,e){let n=Hn;const s=Object.assign({},hp,e),i=vt(t),r=s.target||At();r2()&&(s.once=!0),r.value=b$(i,s.ssrKey,r.value,Vf());let o=r.value===void 0;const a=At(!1),l=At(),c=z_(),u=pA();let h=Hn;function p(){let v=vt(t);const E=new Promise((A,x)=>{if(n(s.reset),!v)return n=Hn,A(null);a.value=o,o=!0,v.converter||(v=v.withConverter(s.converter)),n=(qf(v)?S$:A$)(r,v,k$,A,x,s)}).catch(A=>(c.value===E&&(l.value=A),Promise.reject(A))).finally(()=>{c.value===E&&(a.value=!1)});c.value=E}let g=Hn;pt(t)&&(g=zs(t,p)),p(),i&&(h=T$(c.value,i,s.ssrKey)),Vl()&&aw(()=>c.value),u&&mA(y);function y(v=s.reset){g(),h(),n(v)}return Object.defineProperties(r,{error:{get:()=>l},data:{get:()=>r},pending:{get:()=>a},promise:{get:()=>c},stop:{get:()=>y}})}const k$={set:(t,e,n)=>YL(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function O$(t,e){return R$(t,{target:At([]),...e})}function P$(t){return(e,n)=>{const s=o2(e,n).run(()=>At(t));a2.set(e,s),c2(s,e)}}function x$(t,{firebaseApp:e,modules:n=[]}){t.provide(K0,e);for(const s of n)t.use(s.bind(null,e))}var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cT={exports:{}};/*!
* sweetalert2 v11.7.1
* Released under the MIT License.
*/(function(t,e){(function(n,s){t.exports=s()})(wt,function(){var n={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const s="swal2-",i=d=>{const f={};for(const m in d)f[d[m]]=s+d[m];return f},r=i(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),o=i(["success","warning","info","question","error"]),a="SweetAlert2:",l=d=>{const f=[];for(let m=0;m<d.length;m++)f.indexOf(d[m])===-1&&f.push(d[m]);return f},c=d=>d.charAt(0).toUpperCase()+d.slice(1),u=d=>{console.warn(`${a} ${typeof d=="object"?d.join(" "):d}`)},h=d=>{console.error(`${a} ${d}`)},p=[],g=d=>{p.includes(d)||(p.push(d),u(d))},y=(d,f)=>{g(`"${d}" is deprecated and will be removed in the next major release. Please use "${f}" instead.`)},v=d=>typeof d=="function"?d():d,E=d=>d&&typeof d.toPromise=="function",A=d=>E(d)?d.toPromise():Promise.resolve(d),x=d=>d&&Promise.resolve(d)===d,R=()=>document.body.querySelector(`.${r.container}`),S=d=>{const f=R();return f?f.querySelector(d):null},H=d=>S(`.${d}`),j=()=>H(r.popup),he=()=>H(r.icon),Ae=()=>H(r["icon-content"]),et=()=>H(r.title),Ee=()=>H(r["html-container"]),tt=()=>H(r.image),ze=()=>H(r["progress-steps"]),qt=()=>H(r["validation-message"]),Ve=()=>S(`.${r.actions} .${r.confirm}`),Ht=()=>S(`.${r.actions} .${r.cancel}`),Se=()=>S(`.${r.actions} .${r.deny}`),ke=()=>H(r["input-label"]),fe=()=>S(`.${r.loader}`),ct=()=>H(r.actions),bn=()=>H(r.footer),yt=()=>H(r["timer-progress-bar"]),nt=()=>H(r.close),os=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,gi=()=>{const d=Array.from(j().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((m,w)=>{const I=parseInt(m.getAttribute("tabindex")),Y=parseInt(w.getAttribute("tabindex"));return I>Y?1:I<Y?-1:0}),f=Array.from(j().querySelectorAll(os)).filter(m=>m.getAttribute("tabindex")!=="-1");return l(d.concat(f)).filter(m=>q(m))},P=()=>_e(document.body,r.shown)&&!_e(document.body,r["toast-shown"])&&!_e(document.body,r["no-backdrop"]),V=()=>j()&&_e(j(),r.toast),B=()=>j().hasAttribute("data-loading"),z={previousBodyPadding:null},te=(d,f)=>{if(d.textContent="",f){const w=new DOMParser().parseFromString(f,"text/html");Array.from(w.querySelector("head").childNodes).forEach(I=>{d.appendChild(I)}),Array.from(w.querySelector("body").childNodes).forEach(I=>{I instanceof HTMLVideoElement||I instanceof HTMLAudioElement?d.appendChild(I.cloneNode(!0)):d.appendChild(I)})}},_e=(d,f)=>{if(!f)return!1;const m=f.split(/\s+/);for(let w=0;w<m.length;w++)if(!d.classList.contains(m[w]))return!1;return!0},ce=(d,f)=>{Array.from(d.classList).forEach(m=>{!Object.values(r).includes(m)&&!Object.values(o).includes(m)&&!Object.values(f.showClass).includes(m)&&d.classList.remove(m)})},_=(d,f,m)=>{if(ce(d,f),f.customClass&&f.customClass[m]){if(typeof f.customClass[m]!="string"&&!f.customClass[m].forEach){u(`Invalid type of customClass.${m}! Expected string or iterable object, got "${typeof f.customClass[m]}"`);return}T(d,f.customClass[m])}},b=(d,f)=>{if(!f)return null;switch(f){case"select":case"textarea":case"file":return d.querySelector(`.${r.popup} > .${r[f]}`);case"checkbox":return d.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return d.querySelector(`.${r.popup} > .${r.radio} input:checked`)||d.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return d.querySelector(`.${r.popup} > .${r.range} input`);default:return d.querySelector(`.${r.popup} > .${r.input}`)}},C=d=>{if(d.focus(),d.type!=="file"){const f=d.value;d.value="",d.value=f}},k=(d,f,m)=>{!d||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(w=>{Array.isArray(d)?d.forEach(I=>{m?I.classList.add(w):I.classList.remove(w)}):m?d.classList.add(w):d.classList.remove(w)}))},T=(d,f)=>{k(d,f,!0)},D=(d,f)=>{k(d,f,!1)},U=(d,f)=>{const m=Array.from(d.children);for(let w=0;w<m.length;w++){const I=m[w];if(I instanceof HTMLElement&&_e(I,f))return I}},L=(d,f,m)=>{m===`${parseInt(m)}`&&(m=parseInt(m)),m||parseInt(m)===0?d.style[f]=typeof m=="number"?`${m}px`:m:d.style.removeProperty(f)},N=function(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";d.style.display=f},O=d=>{d.style.display="none"},G=(d,f,m,w)=>{const I=d.querySelector(f);I&&(I.style[m]=w)},W=function(d,f){let m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?N(d,m):O(d)},q=d=>!!(d&&(d.offsetWidth||d.offsetHeight||d.getClientRects().length)),Z=()=>!q(Ve())&&!q(Se())&&!q(Ht()),ue=d=>d.scrollHeight>d.clientHeight,Re=d=>{const f=window.getComputedStyle(d),m=parseFloat(f.getPropertyValue("animation-duration")||"0"),w=parseFloat(f.getPropertyValue("transition-duration")||"0");return m>0||w>0},ve=function(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const m=yt();q(m)&&(f&&(m.style.transition="none",m.style.width="100%"),setTimeout(()=>{m.style.transition=`width ${d/1e3}s linear`,m.style.width="0%"},10))},je=()=>{const d=yt(),f=parseInt(window.getComputedStyle(d).width);d.style.removeProperty("transition"),d.style.width="100%";const m=parseInt(window.getComputedStyle(d).width),w=f/m*100;d.style.width=`${w}%`},Wt=100,ie={},na=()=>{ie.previousActiveElement instanceof HTMLElement?(ie.previousActiveElement.focus(),ie.previousActiveElement=null):document.body&&document.body.focus()},Ps=d=>new Promise(f=>{if(!d)return f();const m=window.scrollX,w=window.scrollY;ie.restoreFocusTimeout=setTimeout(()=>{na(),f()},Wt),window.scrollTo(m,w)}),Ir=()=>typeof window>"u"||typeof document>"u",Nt=`
 <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">
   <button type="button" class="${r.close}"></button>
   <ul class="${r["progress-steps"]}"></ul>
   <div class="${r.icon}"></div>
   <img class="${r.image}" />
   <h2 class="${r.title}" id="${r.title}"></h2>
   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>
   <input class="${r.input}" />
   <input type="file" class="${r.file}" />
   <div class="${r.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${r.select}"></select>
   <div class="${r.radio}"></div>
   <label for="${r.checkbox}" class="${r.checkbox}">
     <input type="checkbox" />
     <span class="${r.label}"></span>
   </label>
   <textarea class="${r.textarea}"></textarea>
   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>
   <div class="${r.actions}">
     <div class="${r.loader}"></div>
     <button type="button" class="${r.confirm}"></button>
     <button type="button" class="${r.deny}"></button>
     <button type="button" class="${r.cancel}"></button>
   </div>
   <div class="${r.footer}"></div>
   <div class="${r["timer-progress-bar-container"]}">
     <div class="${r["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),nn=()=>{const d=R();return d?(d.remove(),D([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0):!1},En=()=>{ie.currentInstance.resetValidationMessage()},AT=()=>{const d=j(),f=U(d,r.input),m=U(d,r.file),w=d.querySelector(`.${r.range} input`),I=d.querySelector(`.${r.range} output`),Y=U(d,r.select),xe=d.querySelector(`.${r.checkbox} input`),zt=U(d,r.textarea);f.oninput=En,m.onchange=En,Y.onchange=En,xe.onchange=En,zt.oninput=En,w.oninput=()=>{En(),I.value=w.value},w.onchange=()=>{En(),I.value=w.value}},ST=d=>typeof d=="string"?document.querySelector(d):d,RT=d=>{const f=j();f.setAttribute("role",d.toast?"alert":"dialog"),f.setAttribute("aria-live",d.toast?"polite":"assertive"),d.toast||f.setAttribute("aria-modal","true")},kT=d=>{window.getComputedStyle(d).direction==="rtl"&&T(R(),r.rtl)},OT=d=>{const f=nn();if(Ir()){h("SweetAlert2 requires document to initialize");return}const m=document.createElement("div");m.className=r.container,f&&T(m,r["no-transition"]),te(m,Nt);const w=ST(d.target);w.appendChild(m),RT(d),kT(w),AT()},Fc=(d,f)=>{d instanceof HTMLElement?f.appendChild(d):typeof d=="object"?PT(d,f):d&&te(f,d)},PT=(d,f)=>{d.jquery?xT(f,d):te(f,d.toString())},xT=(d,f)=>{if(d.textContent="",0 in f)for(let m=0;m in f;m++)d.appendChild(f[m].cloneNode(!0));else d.appendChild(f.cloneNode(!0))},Ar=(()=>{if(Ir())return!1;const d=document.createElement("div"),f={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const m in f)if(Object.prototype.hasOwnProperty.call(f,m)&&typeof d.style[m]<"u")return f[m];return!1})(),NT=()=>{const d=document.createElement("div");d.className=r["scrollbar-measure"],document.body.appendChild(d);const f=d.getBoundingClientRect().width-d.clientWidth;return document.body.removeChild(d),f},DT=(d,f)=>{const m=ct(),w=fe();!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?O(m):N(m),_(m,f,"actions"),MT(m,w,f),te(w,f.loaderHtml),_(w,f,"loader")};function MT(d,f,m){const w=Ve(),I=Se(),Y=Ht();Uc(w,"confirm",m),Uc(I,"deny",m),Uc(Y,"cancel",m),LT(w,I,Y,m),m.reverseButtons&&(m.toast?(d.insertBefore(Y,w),d.insertBefore(I,w)):(d.insertBefore(Y,f),d.insertBefore(I,f),d.insertBefore(w,f)))}function LT(d,f,m,w){if(!w.buttonsStyling){D([d,f,m],r.styled);return}T([d,f,m],r.styled),w.confirmButtonColor&&(d.style.backgroundColor=w.confirmButtonColor,T(d,r["default-outline"])),w.denyButtonColor&&(f.style.backgroundColor=w.denyButtonColor,T(f,r["default-outline"])),w.cancelButtonColor&&(m.style.backgroundColor=w.cancelButtonColor,T(m,r["default-outline"]))}function Uc(d,f,m){W(d,m[`show${c(f)}Button`],"inline-block"),te(d,m[`${f}ButtonText`]),d.setAttribute("aria-label",m[`${f}ButtonAriaLabel`]),d.className=r[f],_(d,m,`${f}Button`),T(d,m[`${f}ButtonClass`])}const FT=(d,f)=>{const m=nt();te(m,f.closeButtonHtml),_(m,f,"closeButton"),W(m,f.showCloseButton),m.setAttribute("aria-label",f.closeButtonAriaLabel)},UT=(d,f)=>{const m=R();!m||($T(m,f.backdrop),BT(m,f.position),VT(m,f.grow),_(m,f,"container"))};function $T(d,f){typeof f=="string"?d.style.background=f:f||T([document.documentElement,document.body],r["no-backdrop"])}function BT(d,f){f in r?T(d,r[f]):(u('The "position" parameter is not valid, defaulting to "center"'),T(d,r.center))}function VT(d,f){if(f&&typeof f=="string"){const m=`grow-${f}`;m in r&&T(d,r[m])}}const jT=["input","file","range","select","radio","checkbox","textarea"],qT=(d,f)=>{const m=j(),w=n.innerParams.get(d),I=!w||f.input!==w.input;jT.forEach(Y=>{const xe=U(m,r[Y]);zT(Y,f.inputAttributes),xe.className=r[Y],I&&O(xe)}),f.input&&(I&&HT(f),KT(f))},HT=d=>{if(!$t[d.input]){h(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${d.input}"`);return}const f=bp(d.input),m=$t[d.input](f,d);N(f),d.inputAutoFocus&&setTimeout(()=>{C(m)})},WT=d=>{for(let f=0;f<d.attributes.length;f++){const m=d.attributes[f].name;["type","value","style"].includes(m)||d.removeAttribute(m)}},zT=(d,f)=>{const m=b(j(),d);if(!!m){WT(m);for(const w in f)m.setAttribute(w,f[w])}},KT=d=>{const f=bp(d.input);typeof d.customClass=="object"&&T(f,d.customClass.input)},$c=(d,f)=>{(!d.placeholder||f.inputPlaceholder)&&(d.placeholder=f.inputPlaceholder)},Sr=(d,f,m)=>{if(m.inputLabel){d.id=r.input;const w=document.createElement("label"),I=r["input-label"];w.setAttribute("for",d.id),w.className=I,typeof m.customClass=="object"&&T(w,m.customClass.inputLabel),w.innerText=m.inputLabel,f.insertAdjacentElement("beforebegin",w)}},bp=d=>U(j(),r[d]||r.input),sa=(d,f)=>{["string","number"].includes(typeof f)?d.value=`${f}`:x(f)||u(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof f}"`)},$t={};$t.text=$t.email=$t.password=$t.number=$t.tel=$t.url=(d,f)=>(sa(d,f.inputValue),Sr(d,d,f),$c(d,f),d.type=f.input,d),$t.file=(d,f)=>(Sr(d,d,f),$c(d,f),d),$t.range=(d,f)=>{const m=d.querySelector("input"),w=d.querySelector("output");return sa(m,f.inputValue),m.type=f.input,sa(w,f.inputValue),Sr(m,d,f),d},$t.select=(d,f)=>{if(d.textContent="",f.inputPlaceholder){const m=document.createElement("option");te(m,f.inputPlaceholder),m.value="",m.disabled=!0,m.selected=!0,d.appendChild(m)}return Sr(d,d,f),d},$t.radio=d=>(d.textContent="",d),$t.checkbox=(d,f)=>{const m=b(j(),"checkbox");m.value="1",m.id=r.checkbox,m.checked=Boolean(f.inputValue);const w=d.querySelector("span");return te(w,f.inputPlaceholder),m},$t.textarea=(d,f)=>{sa(d,f.inputValue),$c(d,f),Sr(d,d,f);const m=w=>parseInt(window.getComputedStyle(w).marginLeft)+parseInt(window.getComputedStyle(w).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const w=parseInt(window.getComputedStyle(j()).width),I=()=>{const Y=d.offsetWidth+m(d);Y>w?j().style.width=`${Y}px`:j().style.width=null};new MutationObserver(I).observe(d,{attributes:!0,attributeFilter:["style"]})}}),d};const GT=(d,f)=>{const m=Ee();_(m,f,"htmlContainer"),f.html?(Fc(f.html,m),N(m,"block")):f.text?(m.textContent=f.text,N(m,"block")):O(m),qT(d,f)},QT=(d,f)=>{const m=bn();W(m,f.footer),f.footer&&Fc(f.footer,m),_(m,f,"footer")},YT=(d,f)=>{const m=n.innerParams.get(d),w=he();if(m&&f.icon===m.icon){Tp(w,f),Ep(w,f);return}if(!f.icon&&!f.iconHtml){O(w);return}if(f.icon&&Object.keys(o).indexOf(f.icon)===-1){h(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${f.icon}"`),O(w);return}N(w),Tp(w,f),Ep(w,f),T(w,f.showClass.icon)},Ep=(d,f)=>{for(const m in o)f.icon!==m&&D(d,o[m]);T(d,o[f.icon]),eC(d,f),XT(),_(d,f,"icon")},XT=()=>{const d=j(),f=window.getComputedStyle(d).getPropertyValue("background-color"),m=d.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let w=0;w<m.length;w++)m[w].style.backgroundColor=f},JT=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ZT=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Tp=(d,f)=>{let m=d.innerHTML,w;f.iconHtml?w=Cp(f.iconHtml):f.icon==="success"?(w=JT,m=m.replace(/ style=".*?"/g,"")):f.icon==="error"?w=ZT:w=Cp({question:"?",warning:"!",info:"i"}[f.icon]),m.trim()!==w.trim()&&te(d,w)},eC=(d,f)=>{if(!!f.iconColor){d.style.color=f.iconColor,d.style.borderColor=f.iconColor;for(const m of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])G(d,m,"backgroundColor",f.iconColor);G(d,".swal2-success-ring","borderColor",f.iconColor)}},Cp=d=>`<div class="${r["icon-content"]}">${d}</div>`,tC=(d,f)=>{const m=tt();if(!f.imageUrl){O(m);return}N(m,""),m.setAttribute("src",f.imageUrl),m.setAttribute("alt",f.imageAlt),L(m,"width",f.imageWidth),L(m,"height",f.imageHeight),m.className=r.image,_(m,f,"image")},nC=(d,f)=>{const m=R(),w=j();f.toast?(L(m,"width",f.width),w.style.width="100%",w.insertBefore(fe(),he())):L(w,"width",f.width),L(w,"padding",f.padding),f.color&&(w.style.color=f.color),f.background&&(w.style.background=f.background),O(qt()),sC(w,f)},sC=(d,f)=>{d.className=`${r.popup} ${q(d)?f.showClass.popup:""}`,f.toast?(T([document.documentElement,document.body],r["toast-shown"]),T(d,r.toast)):T(d,r.modal),_(d,f,"popup"),typeof f.customClass=="string"&&T(d,f.customClass),f.icon&&T(d,r[`icon-${f.icon}`])},iC=(d,f)=>{const m=ze();if(!f.progressSteps||f.progressSteps.length===0){O(m);return}N(m),m.textContent="",f.currentProgressStep>=f.progressSteps.length&&u("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),f.progressSteps.forEach((w,I)=>{const Y=rC(w);if(m.appendChild(Y),I===f.currentProgressStep&&T(Y,r["active-progress-step"]),I!==f.progressSteps.length-1){const xe=oC(f);m.appendChild(xe)}})},rC=d=>{const f=document.createElement("li");return T(f,r["progress-step"]),te(f,d),f},oC=d=>{const f=document.createElement("li");return T(f,r["progress-step-line"]),d.progressStepsDistance&&L(f,"width",d.progressStepsDistance),f},aC=(d,f)=>{const m=et();W(m,f.title||f.titleText,"block"),f.title&&Fc(f.title,m),f.titleText&&(m.innerText=f.titleText),_(m,f,"title")},Ip=(d,f)=>{nC(d,f),UT(d,f),iC(d,f),YT(d,f),tC(d,f),aC(d,f),FT(d,f),GT(d,f),DT(d,f),QT(d,f),typeof f.didRender=="function"&&f.didRender(j())};function Ap(){const d=n.innerParams.get(this);if(!d)return;const f=n.domCache.get(this);O(f.loader),V()?d.icon&&N(he()):lC(f),D([f.popup,f.actions],r.loading),f.popup.removeAttribute("aria-busy"),f.popup.removeAttribute("data-loading"),f.confirmButton.disabled=!1,f.denyButton.disabled=!1,f.cancelButton.disabled=!1}const lC=d=>{const f=d.popup.getElementsByClassName(d.loader.getAttribute("data-button-to-replace"));f.length?N(f[0],"inline-block"):Z()&&O(d.actions)};function cC(d){const f=n.innerParams.get(d||this),m=n.domCache.get(d||this);return m?b(m.popup,f.input):null}const uC=()=>q(j()),Sp=()=>Ve()&&Ve().click(),hC=()=>Se()&&Se().click(),dC=()=>Ht()&&Ht().click(),yi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Rp=d=>{d.keydownTarget&&d.keydownHandlerAdded&&(d.keydownTarget.removeEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!1)},fC=(d,f,m,w)=>{Rp(f),m.toast||(f.keydownHandler=I=>mC(d,I,w),f.keydownTarget=m.keydownListenerCapture?window:j(),f.keydownListenerCapture=m.keydownListenerCapture,f.keydownTarget.addEventListener("keydown",f.keydownHandler,{capture:f.keydownListenerCapture}),f.keydownHandlerAdded=!0)},Bc=(d,f)=>{const m=gi();if(m.length){d=d+f,d===m.length?d=0:d===-1&&(d=m.length-1),m[d].focus();return}j().focus()},kp=["ArrowRight","ArrowDown"],pC=["ArrowLeft","ArrowUp"],mC=(d,f,m)=>{const w=n.innerParams.get(d);!w||f.isComposing||f.keyCode===229||(w.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?gC(d,f,w):f.key==="Tab"?yC(f):[...kp,...pC].includes(f.key)?_C(f.key):f.key==="Escape"&&wC(f,w,m))},gC=(d,f,m)=>{if(!!v(m.allowEnterKey)&&f.target&&d.getInput()&&f.target instanceof HTMLElement&&f.target.outerHTML===d.getInput().outerHTML){if(["textarea","file"].includes(m.input))return;Sp(),f.preventDefault()}},yC=d=>{const f=d.target,m=gi();let w=-1;for(let I=0;I<m.length;I++)if(f===m[I]){w=I;break}d.shiftKey?Bc(w,-1):Bc(w,1),d.stopPropagation(),d.preventDefault()},_C=d=>{const f=Ve(),m=Se(),w=Ht(),I=[f,m,w];if(document.activeElement instanceof HTMLElement&&!I.includes(document.activeElement))return;const Y=kp.includes(d)?"nextElementSibling":"previousElementSibling";let xe=document.activeElement;for(let zt=0;zt<ct().children.length;zt++){if(xe=xe[Y],!xe)return;if(xe instanceof HTMLButtonElement&&q(xe))break}xe instanceof HTMLButtonElement&&xe.focus()},wC=(d,f,m)=>{v(f.allowEscapeKey)&&(d.preventDefault(),m(yi.esc))};var Rr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const vC=()=>{Array.from(document.body.children).forEach(f=>{f===R()||f.contains(R())||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")),f.setAttribute("aria-hidden","true"))})},Op=()=>{Array.from(document.body.children).forEach(f=>{f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},bC=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!_e(document.body,r.iosfix)){const f=document.body.scrollTop;document.body.style.top=`${f*-1}px`,T(document.body,r.iosfix),TC(),EC()}},EC=()=>{const d=navigator.userAgent,f=!!d.match(/iPad/i)||!!d.match(/iPhone/i),m=!!d.match(/WebKit/i);f&&m&&!d.match(/CriOS/i)&&j().scrollHeight>window.innerHeight-44&&(R().style.paddingBottom=`${44}px`)},TC=()=>{const d=R();let f;d.ontouchstart=m=>{f=CC(m)},d.ontouchmove=m=>{f&&(m.preventDefault(),m.stopPropagation())}},CC=d=>{const f=d.target,m=R();return IC(d)||AC(d)?!1:f===m||!ue(m)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(ue(Ee())&&Ee().contains(f))},IC=d=>d.touches&&d.touches.length&&d.touches[0].touchType==="stylus",AC=d=>d.touches&&d.touches.length>1,SC=()=>{if(_e(document.body,r.iosfix)){const d=parseInt(document.body.style.top,10);D(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=d*-1}},RC=()=>{z.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(z.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${z.previousBodyPadding+NT()}px`)},kC=()=>{z.previousBodyPadding!==null&&(document.body.style.paddingRight=`${z.previousBodyPadding}px`,z.previousBodyPadding=null)};function Pp(d,f,m,w){V()?xp(d,w):(Ps(m).then(()=>xp(d,w)),Rp(ie)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(f.setAttribute("style","display:none !important"),f.removeAttribute("class"),f.innerHTML=""):f.remove(),P()&&(kC(),SC(),Op()),OC()}function OC(){D([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function ia(d){d=DC(d);const f=Rr.swalPromiseResolve.get(this),m=xC(this);this.isAwaitingPromise()?d.isDismissed||(kr(this),f(d)):m&&f(d)}function PC(){return!!n.awaitingPromise.get(this)}const xC=d=>{const f=j();if(!f)return!1;const m=n.innerParams.get(d);if(!m||_e(f,m.hideClass.popup))return!1;D(f,m.showClass.popup),T(f,m.hideClass.popup);const w=R();return D(w,m.showClass.backdrop),T(w,m.hideClass.backdrop),MC(d,f,m),!0};function NC(d){const f=Rr.swalPromiseReject.get(this);kr(this),f&&f(d)}const kr=d=>{d.isAwaitingPromise()&&(n.awaitingPromise.delete(d),n.innerParams.get(d)||d._destroy())},DC=d=>typeof d>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},d),MC=(d,f,m)=>{const w=R(),I=Ar&&Re(f);typeof m.willClose=="function"&&m.willClose(f),I?LC(d,f,w,m.returnFocus,m.didClose):Pp(d,w,m.returnFocus,m.didClose)},LC=(d,f,m,w,I)=>{ie.swalCloseEventFinishedCallback=Pp.bind(null,d,m,w,I),f.addEventListener(Ar,function(Y){Y.target===f&&(ie.swalCloseEventFinishedCallback(),delete ie.swalCloseEventFinishedCallback)})},xp=(d,f)=>{setTimeout(()=>{typeof f=="function"&&f.bind(d.params)(),d._destroy()})};function Np(d,f,m){const w=n.domCache.get(d);f.forEach(I=>{w[I].disabled=m})}function Dp(d,f){if(!!d)if(d.type==="radio"){const w=d.parentNode.parentNode.querySelectorAll("input");for(let I=0;I<w.length;I++)w[I].disabled=f}else d.disabled=f}function FC(){Np(this,["confirmButton","denyButton","cancelButton"],!1)}function UC(){Np(this,["confirmButton","denyButton","cancelButton"],!0)}function $C(){Dp(this.getInput(),!1)}function BC(){Dp(this.getInput(),!0)}function VC(d){const f=n.domCache.get(this),m=n.innerParams.get(this);te(f.validationMessage,d),f.validationMessage.className=r["validation-message"],m.customClass&&m.customClass.validationMessage&&T(f.validationMessage,m.customClass.validationMessage),N(f.validationMessage);const w=this.getInput();w&&(w.setAttribute("aria-invalid",!0),w.setAttribute("aria-describedby",r["validation-message"]),C(w),T(w,r.inputerror))}function jC(){const d=n.domCache.get(this);d.validationMessage&&O(d.validationMessage);const f=this.getInput();f&&(f.removeAttribute("aria-invalid"),f.removeAttribute("aria-describedby"),D(f,r.inputerror))}const _i={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},qC=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],HC={},WC=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Mp=d=>Object.prototype.hasOwnProperty.call(_i,d),Lp=d=>qC.indexOf(d)!==-1,Vc=d=>HC[d],zC=d=>{Mp(d)||u(`Unknown parameter "${d}"`)},KC=d=>{WC.includes(d)&&u(`The parameter "${d}" is incompatible with toasts`)},GC=d=>{Vc(d)&&y(d,Vc(d))},QC=d=>{d.backdrop===!1&&d.allowOutsideClick&&u('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const f in d)zC(f),d.toast&&KC(f),GC(f)};function YC(d){const f=j(),m=n.innerParams.get(this);if(!f||_e(f,m.hideClass.popup)){u("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const w=XC(d),I=Object.assign({},m,w);Ip(this,I),n.innerParams.set(this,I),Object.defineProperties(this,{params:{value:Object.assign({},this.params,d),writable:!1,enumerable:!0}})}const XC=d=>{const f={};return Object.keys(d).forEach(m=>{Lp(m)?f[m]=d[m]:u(`Invalid parameter to update: ${m}`)}),f};function JC(){const d=n.domCache.get(this),f=n.innerParams.get(this);if(!f){Fp(this);return}d.popup&&ie.swalCloseEventFinishedCallback&&(ie.swalCloseEventFinishedCallback(),delete ie.swalCloseEventFinishedCallback),typeof f.didDestroy=="function"&&f.didDestroy(),ZC(this)}const ZC=d=>{Fp(d),delete d.params,delete ie.keydownHandler,delete ie.keydownTarget,delete ie.currentInstance},Fp=d=>{d.isAwaitingPromise()?(jc(n,d),n.awaitingPromise.set(d,!0)):(jc(Rr,d),jc(n,d))},jc=(d,f)=>{for(const m in d)d[m].delete(f)};var Up=Object.freeze({__proto__:null,hideLoading:Ap,disableLoading:Ap,getInput:cC,close:ia,isAwaitingPromise:PC,rejectPromise:NC,handleAwaitingPromise:kr,closePopup:ia,closeModal:ia,closeToast:ia,enableButtons:FC,disableButtons:UC,enableInput:$C,disableInput:BC,showValidationMessage:VC,resetValidationMessage:jC,update:YC,_destroy:JC});const wi=d=>{let f=j();f||new oa,f=j();const m=fe();V()?O(he()):eI(f,d),N(m),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()},eI=(d,f)=>{const m=ct(),w=fe();!f&&q(Ve())&&(f=Ve()),N(m),f&&(O(f),w.setAttribute("data-button-to-replace",f.className)),w.parentNode.insertBefore(w,f),T([d,m],r.loading)},tI=(d,f)=>{f.input==="select"||f.input==="radio"?oI(d,f):["text","email","number","tel","textarea"].includes(f.input)&&(E(f.inputValue)||x(f.inputValue))&&(wi(Ve()),aI(d,f))},nI=(d,f)=>{const m=d.getInput();if(!m)return null;switch(f.input){case"checkbox":return sI(m);case"radio":return iI(m);case"file":return rI(m);default:return f.inputAutoTrim?m.value.trim():m.value}},sI=d=>d.checked?1:0,iI=d=>d.checked?d.value:null,rI=d=>d.files.length?d.getAttribute("multiple")!==null?d.files:d.files[0]:null,oI=(d,f)=>{const m=j(),w=I=>{lI[f.input](m,qc(I),f)};E(f.inputOptions)||x(f.inputOptions)?(wi(Ve()),A(f.inputOptions).then(I=>{d.hideLoading(),w(I)})):typeof f.inputOptions=="object"?w(f.inputOptions):h(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof f.inputOptions}`)},aI=(d,f)=>{const m=d.getInput();O(m),A(f.inputValue).then(w=>{m.value=f.input==="number"?`${parseFloat(w)||0}`:`${w}`,N(m),m.focus(),d.hideLoading()}).catch(w=>{h(`Error in inputValue promise: ${w}`),m.value="",N(m),m.focus(),d.hideLoading()})},lI={select:(d,f,m)=>{const w=U(d,r.select),I=(Y,xe,zt)=>{const Dt=document.createElement("option");Dt.value=zt,te(Dt,xe),Dt.selected=$p(zt,m.inputValue),Y.appendChild(Dt)};f.forEach(Y=>{const xe=Y[0],zt=Y[1];if(Array.isArray(zt)){const Dt=document.createElement("optgroup");Dt.label=xe,Dt.disabled=!1,w.appendChild(Dt),zt.forEach(bi=>I(Dt,bi[1],bi[0]))}else I(w,zt,xe)}),w.focus()},radio:(d,f,m)=>{const w=U(d,r.radio);f.forEach(Y=>{const xe=Y[0],zt=Y[1],Dt=document.createElement("input"),bi=document.createElement("label");Dt.type="radio",Dt.name=r.radio,Dt.value=xe,$p(xe,m.inputValue)&&(Dt.checked=!0);const Kc=document.createElement("span");te(Kc,zt),Kc.className=r.label,bi.appendChild(Dt),bi.appendChild(Kc),w.appendChild(bi)});const I=w.querySelectorAll("input");I.length&&I[0].focus()}},qc=d=>{const f=[];return typeof Map<"u"&&d instanceof Map?d.forEach((m,w)=>{let I=m;typeof I=="object"&&(I=qc(I)),f.push([w,I])}):Object.keys(d).forEach(m=>{let w=d[m];typeof w=="object"&&(w=qc(w)),f.push([m,w])}),f},$p=(d,f)=>f&&f.toString()===d.toString(),cI=d=>{const f=n.innerParams.get(d);d.disableButtons(),f.input?Bp(d,"confirm"):Wc(d,!0)},uI=d=>{const f=n.innerParams.get(d);d.disableButtons(),f.returnInputValueOnDeny?Bp(d,"deny"):Hc(d,!1)},hI=(d,f)=>{d.disableButtons(),f(yi.cancel)},Bp=(d,f)=>{const m=n.innerParams.get(d);if(!m.input){h(`The "input" parameter is needed to be set when using returnInputValueOn${c(f)}`);return}const w=nI(d,m);m.inputValidator?dI(d,w,f):d.getInput().checkValidity()?f==="deny"?Hc(d,w):Wc(d,w):(d.enableButtons(),d.showValidationMessage(m.validationMessage))},dI=(d,f,m)=>{const w=n.innerParams.get(d);d.disableInput(),Promise.resolve().then(()=>A(w.inputValidator(f,w.validationMessage))).then(Y=>{d.enableButtons(),d.enableInput(),Y?d.showValidationMessage(Y):m==="deny"?Hc(d,f):Wc(d,f)})},Hc=(d,f)=>{const m=n.innerParams.get(d||void 0);m.showLoaderOnDeny&&wi(Se()),m.preDeny?(n.awaitingPromise.set(d||void 0,!0),Promise.resolve().then(()=>A(m.preDeny(f,m.validationMessage))).then(I=>{I===!1?(d.hideLoading(),kr(d)):d.close({isDenied:!0,value:typeof I>"u"?f:I})}).catch(I=>jp(d||void 0,I))):d.close({isDenied:!0,value:f})},Vp=(d,f)=>{d.close({isConfirmed:!0,value:f})},jp=(d,f)=>{d.rejectPromise(f)},Wc=(d,f)=>{const m=n.innerParams.get(d||void 0);m.showLoaderOnConfirm&&wi(),m.preConfirm?(d.resetValidationMessage(),n.awaitingPromise.set(d||void 0,!0),Promise.resolve().then(()=>A(m.preConfirm(f,m.validationMessage))).then(I=>{q(qt())||I===!1?(d.hideLoading(),kr(d)):Vp(d,typeof I>"u"?f:I)}).catch(I=>jp(d||void 0,I))):Vp(d,f)},fI=(d,f,m)=>{n.innerParams.get(d).toast?pI(d,f,m):(gI(f),yI(f),_I(d,f,m))},pI=(d,f,m)=>{f.popup.onclick=()=>{const w=n.innerParams.get(d);w&&(mI(w)||w.timer||w.input)||m(yi.close)}},mI=d=>d.showConfirmButton||d.showDenyButton||d.showCancelButton||d.showCloseButton;let ra=!1;const gI=d=>{d.popup.onmousedown=()=>{d.container.onmouseup=function(f){d.container.onmouseup=void 0,f.target===d.container&&(ra=!0)}}},yI=d=>{d.container.onmousedown=()=>{d.popup.onmouseup=function(f){d.popup.onmouseup=void 0,(f.target===d.popup||d.popup.contains(f.target))&&(ra=!0)}}},_I=(d,f,m)=>{f.container.onclick=w=>{const I=n.innerParams.get(d);if(ra){ra=!1;return}w.target===f.container&&v(I.allowOutsideClick)&&m(yi.backdrop)}},wI=d=>typeof d=="object"&&d.jquery,qp=d=>d instanceof Element||wI(d),vI=d=>{const f={};return typeof d[0]=="object"&&!qp(d[0])?Object.assign(f,d[0]):["title","html","icon"].forEach((m,w)=>{const I=d[w];typeof I=="string"||qp(I)?f[m]=I:I!==void 0&&h(`Unexpected type of ${m}! Expected "string" or "Element", got ${typeof I}`)}),f};function bI(){const d=this;for(var f=arguments.length,m=new Array(f),w=0;w<f;w++)m[w]=arguments[w];return new d(...m)}function EI(d){class f extends this{_main(w,I){return super._main(w,Object.assign({},d,I))}}return f}const TI=()=>ie.timeout&&ie.timeout.getTimerLeft(),Hp=()=>{if(ie.timeout)return je(),ie.timeout.stop()},Wp=()=>{if(ie.timeout){const d=ie.timeout.start();return ve(d),d}},CI=()=>{const d=ie.timeout;return d&&(d.running?Hp():Wp())},II=d=>{if(ie.timeout){const f=ie.timeout.increase(d);return ve(f,!0),f}},AI=()=>ie.timeout&&ie.timeout.isRunning();let zp=!1;const zc={};function SI(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";zc[d]=this,zp||(document.body.addEventListener("click",RI),zp=!0)}const RI=d=>{for(let f=d.target;f&&f!==document;f=f.parentNode)for(const m in zc){const w=f.getAttribute(m);if(w){zc[m].fire({template:w});return}}};var kI=Object.freeze({__proto__:null,isValidParameter:Mp,isUpdatableParameter:Lp,isDeprecatedParameter:Vc,argsToParams:vI,getContainer:R,getPopup:j,getTitle:et,getHtmlContainer:Ee,getImage:tt,getIcon:he,getIconContent:Ae,getInputLabel:ke,getCloseButton:nt,getActions:ct,getConfirmButton:Ve,getDenyButton:Se,getCancelButton:Ht,getLoader:fe,getFooter:bn,getTimerProgressBar:yt,getFocusableElements:gi,getValidationMessage:qt,getProgressSteps:ze,isLoading:B,isVisible:uC,clickConfirm:Sp,clickDeny:hC,clickCancel:dC,fire:bI,mixin:EI,showLoading:wi,enableLoading:wi,getTimerLeft:TI,stopTimer:Hp,resumeTimer:Wp,toggleTimer:CI,increaseTimer:II,isTimerRunning:AI,bindClickHandler:SI});class OI{constructor(f,m){this.callback=f,this.remaining=m,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(f){const m=this.running;return m&&this.stop(),this.remaining+=f,m&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Kp=["swal-title","swal-html","swal-footer"],PI=d=>{const f=typeof d.template=="string"?document.querySelector(d.template):d.template;if(!f)return{};const m=f.content;return $I(m),Object.assign(xI(m),NI(m),DI(m),MI(m),LI(m),FI(m),UI(m,Kp))},xI=d=>{const f={};return Array.from(d.querySelectorAll("swal-param")).forEach(w=>{xs(w,["name","value"]);const I=w.getAttribute("name"),Y=w.getAttribute("value");typeof _i[I]=="boolean"?f[I]=Y!=="false":typeof _i[I]=="object"?f[I]=JSON.parse(Y):f[I]=Y}),f},NI=d=>{const f={};return Array.from(d.querySelectorAll("swal-function-param")).forEach(w=>{const I=w.getAttribute("name"),Y=w.getAttribute("value");f[I]=new Function(`return ${Y}`)()}),f},DI=d=>{const f={};return Array.from(d.querySelectorAll("swal-button")).forEach(w=>{xs(w,["type","color","aria-label"]);const I=w.getAttribute("type");f[`${I}ButtonText`]=w.innerHTML,f[`show${c(I)}Button`]=!0,w.hasAttribute("color")&&(f[`${I}ButtonColor`]=w.getAttribute("color")),w.hasAttribute("aria-label")&&(f[`${I}ButtonAriaLabel`]=w.getAttribute("aria-label"))}),f},MI=d=>{const f={},m=d.querySelector("swal-image");return m&&(xs(m,["src","width","height","alt"]),m.hasAttribute("src")&&(f.imageUrl=m.getAttribute("src")),m.hasAttribute("width")&&(f.imageWidth=m.getAttribute("width")),m.hasAttribute("height")&&(f.imageHeight=m.getAttribute("height")),m.hasAttribute("alt")&&(f.imageAlt=m.getAttribute("alt"))),f},LI=d=>{const f={},m=d.querySelector("swal-icon");return m&&(xs(m,["type","color"]),m.hasAttribute("type")&&(f.icon=m.getAttribute("type")),m.hasAttribute("color")&&(f.iconColor=m.getAttribute("color")),f.iconHtml=m.innerHTML),f},FI=d=>{const f={},m=d.querySelector("swal-input");m&&(xs(m,["type","label","placeholder","value"]),f.input=m.getAttribute("type")||"text",m.hasAttribute("label")&&(f.inputLabel=m.getAttribute("label")),m.hasAttribute("placeholder")&&(f.inputPlaceholder=m.getAttribute("placeholder")),m.hasAttribute("value")&&(f.inputValue=m.getAttribute("value")));const w=Array.from(d.querySelectorAll("swal-input-option"));return w.length&&(f.inputOptions={},w.forEach(I=>{xs(I,["value"]);const Y=I.getAttribute("value"),xe=I.innerHTML;f.inputOptions[Y]=xe})),f},UI=(d,f)=>{const m={};for(const w in f){const I=f[w],Y=d.querySelector(I);Y&&(xs(Y,[]),m[I.replace(/^swal-/,"")]=Y.innerHTML.trim())}return m},$I=d=>{const f=Kp.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(d.children).forEach(m=>{const w=m.tagName.toLowerCase();f.includes(w)||u(`Unrecognized element <${w}>`)})},xs=(d,f)=>{Array.from(d.attributes).forEach(m=>{f.indexOf(m.name)===-1&&u([`Unrecognized attribute "${m.name}" on <${d.tagName.toLowerCase()}>.`,`${f.length?`Allowed attributes are: ${f.join(", ")}`:"To set the value, use HTML within the element."}`])})},Gp=10,BI=d=>{const f=R(),m=j();typeof d.willOpen=="function"&&d.willOpen(m);const I=window.getComputedStyle(document.body).overflowY;qI(f,m,d),setTimeout(()=>{VI(f,m)},Gp),P()&&(jI(f,d.scrollbarPadding,I),vC()),!V()&&!ie.previousActiveElement&&(ie.previousActiveElement=document.activeElement),typeof d.didOpen=="function"&&setTimeout(()=>d.didOpen(m)),D(f,r["no-transition"])},Qp=d=>{const f=j();if(d.target!==f)return;const m=R();f.removeEventListener(Ar,Qp),m.style.overflowY="auto"},VI=(d,f)=>{Ar&&Re(f)?(d.style.overflowY="hidden",f.addEventListener(Ar,Qp)):d.style.overflowY="auto"},jI=(d,f,m)=>{bC(),f&&m!=="hidden"&&RC(),setTimeout(()=>{d.scrollTop=0})},qI=(d,f,m)=>{T(d,m.showClass.backdrop),f.style.setProperty("opacity","0","important"),N(f,"grid"),setTimeout(()=>{T(f,m.showClass.popup),f.style.removeProperty("opacity")},Gp),T([document.documentElement,document.body],r.shown),m.heightAuto&&m.backdrop&&!m.toast&&T([document.documentElement,document.body],r["height-auto"])};var Yp={email:(d,f)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(d)?Promise.resolve():Promise.resolve(f||"Invalid email address"),url:(d,f)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(d)?Promise.resolve():Promise.resolve(f||"Invalid URL")};function HI(d){d.inputValidator||Object.keys(Yp).forEach(f=>{d.input===f&&(d.inputValidator=Yp[f])})}function WI(d){(!d.target||typeof d.target=="string"&&!document.querySelector(d.target)||typeof d.target!="string"&&!d.target.appendChild)&&(u('Target parameter is not valid, defaulting to "body"'),d.target="body")}function zI(d){HI(d),d.showLoaderOnConfirm&&!d.preConfirm&&u(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),WI(d),typeof d.title=="string"&&(d.title=d.title.split(`
`).join("<br />")),OT(d)}let Tn;class vi{constructor(){if(typeof window>"u")return;Tn=this;for(var f=arguments.length,m=new Array(f),w=0;w<f;w++)m[w]=arguments[w];const I=Object.freeze(this.constructor.argsToParams(m));Object.defineProperties(this,{params:{value:I,writable:!1,enumerable:!0,configurable:!0}});const Y=Tn._main(Tn.params);n.promise.set(this,Y)}_main(f){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};QC(Object.assign({},m,f)),ie.currentInstance&&(ie.currentInstance._destroy(),P()&&Op()),ie.currentInstance=Tn;const w=GI(f,m);zI(w),Object.freeze(w),ie.timeout&&(ie.timeout.stop(),delete ie.timeout),clearTimeout(ie.restoreFocusTimeout);const I=QI(Tn);return Ip(Tn,w),n.innerParams.set(Tn,w),KI(Tn,I,w)}then(f){return n.promise.get(this).then(f)}finally(f){return n.promise.get(this).finally(f)}}const KI=(d,f,m)=>new Promise((w,I)=>{const Y=xe=>{d.close({isDismissed:!0,dismiss:xe})};Rr.swalPromiseResolve.set(d,w),Rr.swalPromiseReject.set(d,I),f.confirmButton.onclick=()=>{cI(d)},f.denyButton.onclick=()=>{uI(d)},f.cancelButton.onclick=()=>{hI(d,Y)},f.closeButton.onclick=()=>{Y(yi.close)},fI(d,f,Y),fC(d,ie,m,Y),tI(d,m),BI(m),YI(ie,m,Y),XI(f,m),setTimeout(()=>{f.container.scrollTop=0})}),GI=(d,f)=>{const m=PI(d),w=Object.assign({},_i,f,m,d);return w.showClass=Object.assign({},_i.showClass,w.showClass),w.hideClass=Object.assign({},_i.hideClass,w.hideClass),w},QI=d=>{const f={popup:j(),container:R(),actions:ct(),confirmButton:Ve(),denyButton:Se(),cancelButton:Ht(),loader:fe(),closeButton:nt(),validationMessage:qt(),progressSteps:ze()};return n.domCache.set(d,f),f},YI=(d,f,m)=>{const w=yt();O(w),f.timer&&(d.timeout=new OI(()=>{m("timer"),delete d.timeout},f.timer),f.timerProgressBar&&(N(w),_(w,f,"timerProgressBar"),setTimeout(()=>{d.timeout&&d.timeout.running&&ve(f.timer)})))},XI=(d,f)=>{if(!f.toast){if(!v(f.allowEnterKey)){ZI();return}JI(d,f)||Bc(-1,1)}},JI=(d,f)=>f.focusDeny&&q(d.denyButton)?(d.denyButton.focus(),!0):f.focusCancel&&q(d.cancelButton)?(d.cancelButton.focus(),!0):f.focusConfirm&&q(d.confirmButton)?(d.confirmButton.focus(),!0):!1,ZI=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const d=new Date,f=localStorage.getItem("swal-initiation");f?(d.getTime()-Date.parse(f))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const m=document.createElement("audio");m.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",m.loop=!0,document.body.appendChild(m),setTimeout(()=>{m.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${d}`)}Object.assign(vi.prototype,Up),Object.assign(vi,kI),Object.keys(Up).forEach(d=>{vi[d]=function(){if(Tn)return Tn[d](...arguments)}}),vi.DismissReason=yi,vi.version="11.7.1";const oa=vi;return oa.default=oa,oa}),typeof wt<"u"&&wt.Sweetalert2&&(wt.swal=wt.sweetAlert=wt.Swal=wt.SweetAlert=wt.Sweetalert2),typeof document<"u"&&function(n,s){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=s);else try{i.innerHTML=s}catch{i.innerText=s}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})(cT);const Yy=cT.exports;var dp={},uT={},fp={exports:{}},pp={exports:{}},hT=function(e,n){return function(){for(var i=new Array(arguments.length),r=0;r<i.length;r++)i[r]=arguments[r];return e.apply(n,i)}},N$=hT,Os=Object.prototype.toString;function mp(t){return Array.isArray(t)}function ad(t){return typeof t>"u"}function D$(t){return t!==null&&!ad(t)&&t.constructor!==null&&!ad(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function dT(t){return Os.call(t)==="[object ArrayBuffer]"}function M$(t){return Os.call(t)==="[object FormData]"}function L$(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&dT(t.buffer),e}function F$(t){return typeof t=="string"}function U$(t){return typeof t=="number"}function fT(t){return t!==null&&typeof t=="object"}function Ba(t){if(Os.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function $$(t){return Os.call(t)==="[object Date]"}function B$(t){return Os.call(t)==="[object File]"}function V$(t){return Os.call(t)==="[object Blob]"}function pT(t){return Os.call(t)==="[object Function]"}function j$(t){return fT(t)&&pT(t.pipe)}function q$(t){return Os.call(t)==="[object URLSearchParams]"}function H$(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function W$(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function gp(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),mp(t))for(var n=0,s=t.length;n<s;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function ld(){var t={};function e(i,r){Ba(t[r])&&Ba(i)?t[r]=ld(t[r],i):Ba(i)?t[r]=ld({},i):mp(i)?t[r]=i.slice():t[r]=i}for(var n=0,s=arguments.length;n<s;n++)gp(arguments[n],e);return t}function z$(t,e,n){return gp(e,function(i,r){n&&typeof i=="function"?t[r]=N$(i,n):t[r]=i}),t}function K$(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var jt={isArray:mp,isArrayBuffer:dT,isBuffer:D$,isFormData:M$,isArrayBufferView:L$,isString:F$,isNumber:U$,isObject:fT,isPlainObject:Ba,isUndefined:ad,isDate:$$,isFile:B$,isBlob:V$,isFunction:pT,isStream:j$,isURLSearchParams:q$,isStandardBrowserEnv:W$,forEach:gp,merge:ld,extend:z$,trim:H$,stripBOM:K$},Ci=jt;function Xy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var mT=function(e,n,s){if(!n)return e;var i;if(s)i=s(n);else if(Ci.isURLSearchParams(n))i=n.toString();else{var r=[];Ci.forEach(n,function(l,c){l===null||typeof l>"u"||(Ci.isArray(l)?c=c+"[]":l=[l],Ci.forEach(l,function(h){Ci.isDate(h)?h=h.toISOString():Ci.isObject(h)&&(h=JSON.stringify(h)),r.push(Xy(c)+"="+Xy(h))}))}),i=r.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},G$=jt;function Pc(){this.handlers=[]}Pc.prototype.use=function(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};Pc.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Pc.prototype.forEach=function(e){G$.forEach(this.handlers,function(s){s!==null&&e(s)})};var Q$=Pc,Y$=jt,X$=function(e,n){Y$.forEach(e,function(i,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(e[n]=i,delete e[r])})},gT=function(e,n,s,i,r){return e.config=n,s&&(e.code=s),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},yT={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ku,Jy;function _T(){if(Jy)return ku;Jy=1;var t=gT;return ku=function(n,s,i,r,o){var a=new Error(n);return t(a,s,i,r,o)},ku}var Ou,Zy;function J$(){if(Zy)return Ou;Zy=1;var t=_T();return Ou=function(n,s,i){var r=i.config.validateStatus;!i.status||!r||r(i.status)?n(i):s(t("Request failed with status code "+i.status,i.config,null,i.request,i))},Ou}var Pu,e_;function Z$(){if(e_)return Pu;e_=1;var t=jt;return Pu=t.isStandardBrowserEnv()?function(){return{write:function(s,i,r,o,a,l){var c=[];c.push(s+"="+encodeURIComponent(i)),t.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),t.isString(o)&&c.push("path="+o),t.isString(a)&&c.push("domain="+a),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(s){var i=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Pu}var xu,t_;function eB(){return t_||(t_=1,xu=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}),xu}var Nu,n_;function tB(){return n_||(n_=1,Nu=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}),Nu}var Du,s_;function nB(){if(s_)return Du;s_=1;var t=eB(),e=tB();return Du=function(s,i){return s&&!t(i)?e(s,i):i},Du}var Mu,i_;function sB(){if(i_)return Mu;i_=1;var t=jt,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Mu=function(s){var i={},r,o,a;return s&&t.forEach(s.split(`
`),function(c){if(a=c.indexOf(":"),r=t.trim(c.substr(0,a)).toLowerCase(),o=t.trim(c.substr(a+1)),r){if(i[r]&&e.indexOf(r)>=0)return;r==="set-cookie"?i[r]=(i[r]?i[r]:[]).concat([o]):i[r]=i[r]?i[r]+", "+o:o}}),i},Mu}var Lu,r_;function iB(){if(r_)return Lu;r_=1;var t=jt;return Lu=t.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),i;function r(o){var a=o;return n&&(s.setAttribute("href",a),a=s.href),s.setAttribute("href",a),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return i=r(window.location.href),function(a){var l=t.isString(a)?r(a):a;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),Lu}var Fu,o_;function xc(){if(o_)return Fu;o_=1;function t(e){this.message=e}return t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,Fu=t,Fu}var Uu,a_;function l_(){if(a_)return Uu;a_=1;var t=jt,e=J$(),n=Z$(),s=mT,i=nB(),r=sB(),o=iB(),a=_T(),l=yT,c=xc();return Uu=function(h){return new Promise(function(g,y){var v=h.data,E=h.headers,A=h.responseType,x;function R(){h.cancelToken&&h.cancelToken.unsubscribe(x),h.signal&&h.signal.removeEventListener("abort",x)}t.isFormData(v)&&delete E["Content-Type"];var S=new XMLHttpRequest;if(h.auth){var H=h.auth.username||"",j=h.auth.password?unescape(encodeURIComponent(h.auth.password)):"";E.Authorization="Basic "+btoa(H+":"+j)}var he=i(h.baseURL,h.url);S.open(h.method.toUpperCase(),s(he,h.params,h.paramsSerializer),!0),S.timeout=h.timeout;function Ae(){if(!!S){var Ee="getAllResponseHeaders"in S?r(S.getAllResponseHeaders()):null,tt=!A||A==="text"||A==="json"?S.responseText:S.response,ze={data:tt,status:S.status,statusText:S.statusText,headers:Ee,config:h,request:S};e(function(Ve){g(Ve),R()},function(Ve){y(Ve),R()},ze),S=null}}if("onloadend"in S?S.onloadend=Ae:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(Ae)},S.onabort=function(){!S||(y(a("Request aborted",h,"ECONNABORTED",S)),S=null)},S.onerror=function(){y(a("Network Error",h,null,S)),S=null},S.ontimeout=function(){var tt=h.timeout?"timeout of "+h.timeout+"ms exceeded":"timeout exceeded",ze=h.transitional||l;h.timeoutErrorMessage&&(tt=h.timeoutErrorMessage),y(a(tt,h,ze.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",S)),S=null},t.isStandardBrowserEnv()){var et=(h.withCredentials||o(he))&&h.xsrfCookieName?n.read(h.xsrfCookieName):void 0;et&&(E[h.xsrfHeaderName]=et)}"setRequestHeader"in S&&t.forEach(E,function(tt,ze){typeof v>"u"&&ze.toLowerCase()==="content-type"?delete E[ze]:S.setRequestHeader(ze,tt)}),t.isUndefined(h.withCredentials)||(S.withCredentials=!!h.withCredentials),A&&A!=="json"&&(S.responseType=h.responseType),typeof h.onDownloadProgress=="function"&&S.addEventListener("progress",h.onDownloadProgress),typeof h.onUploadProgress=="function"&&S.upload&&S.upload.addEventListener("progress",h.onUploadProgress),(h.cancelToken||h.signal)&&(x=function(Ee){!S||(y(!Ee||Ee&&Ee.type?new c("canceled"):Ee),S.abort(),S=null)},h.cancelToken&&h.cancelToken.subscribe(x),h.signal&&(h.signal.aborted?x():h.signal.addEventListener("abort",x))),v||(v=null),S.send(v)})},Uu}var ut=jt,c_=X$,rB=gT,oB=yT,aB={"Content-Type":"application/x-www-form-urlencoded"};function u_(t,e){!ut.isUndefined(t)&&ut.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function lB(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=l_()),t}function cB(t,e,n){if(ut.isString(t))try{return(e||JSON.parse)(t),ut.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}var Nc={transitional:oB,adapter:lB(),transformRequest:[function(e,n){return c_(n,"Accept"),c_(n,"Content-Type"),ut.isFormData(e)||ut.isArrayBuffer(e)||ut.isBuffer(e)||ut.isStream(e)||ut.isFile(e)||ut.isBlob(e)?e:ut.isArrayBufferView(e)?e.buffer:ut.isURLSearchParams(e)?(u_(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ut.isObject(e)||n&&n["Content-Type"]==="application/json"?(u_(n,"application/json"),cB(e)):e}],transformResponse:[function(e){var n=this.transitional||Nc.transitional,s=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,r=!s&&this.responseType==="json";if(r||i&&ut.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(r)throw o.name==="SyntaxError"?rB(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ut.forEach(["delete","get","head"],function(e){Nc.headers[e]={}});ut.forEach(["post","put","patch"],function(e){Nc.headers[e]=ut.merge(aB)});var yp=Nc,uB=jt,hB=yp,dB=function(e,n,s){var i=this||hB;return uB.forEach(s,function(o){e=o.call(i,e,n)}),e},$u,h_;function wT(){return h_||(h_=1,$u=function(e){return!!(e&&e.__CANCEL__)}),$u}var d_=jt,Bu=dB,fB=wT(),pB=yp,mB=xc();function Vu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new mB("canceled")}var gB=function(e){Vu(e),e.headers=e.headers||{},e.data=Bu.call(e,e.data,e.headers,e.transformRequest),e.headers=d_.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),d_.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var n=e.adapter||pB.adapter;return n(e).then(function(i){return Vu(e),i.data=Bu.call(e,i.data,i.headers,e.transformResponse),i},function(i){return fB(i)||(Vu(e),i&&i.response&&(i.response.data=Bu.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},Kt=jt,vT=function(e,n){n=n||{};var s={};function i(u,h){return Kt.isPlainObject(u)&&Kt.isPlainObject(h)?Kt.merge(u,h):Kt.isPlainObject(h)?Kt.merge({},h):Kt.isArray(h)?h.slice():h}function r(u){if(Kt.isUndefined(n[u])){if(!Kt.isUndefined(e[u]))return i(void 0,e[u])}else return i(e[u],n[u])}function o(u){if(!Kt.isUndefined(n[u]))return i(void 0,n[u])}function a(u){if(Kt.isUndefined(n[u])){if(!Kt.isUndefined(e[u]))return i(void 0,e[u])}else return i(void 0,n[u])}function l(u){if(u in n)return i(e[u],n[u]);if(u in e)return i(void 0,e[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return Kt.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var p=c[h]||r,g=p(h);Kt.isUndefined(g)&&p!==l||(s[h]=g)}),s},ju,f_;function bT(){return f_||(f_=1,ju={version:"0.26.1"}),ju}var yB=bT().version,_p={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){_p[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var p_={};_p.transitional=function(e,n,s){function i(r,o){return"[Axios v"+yB+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return function(r,o,a){if(e===!1)throw new Error(i(o," has been removed"+(n?" in "+n:"")));return n&&!p_[o]&&(p_[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function _B(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var s=Object.keys(t),i=s.length;i-- >0;){var r=s[i],o=e[r];if(o){var a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new TypeError("option "+r+" must be "+l);continue}if(n!==!0)throw Error("Unknown option "+r)}}var wB={assertOptions:_B,validators:_p},ET=jt,vB=mT,m_=Q$,g_=gB,Dc=vT,TT=wB,Ii=TT.validators;function ta(t){this.defaults=t,this.interceptors={request:new m_,response:new m_}}ta.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Dc(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var s=n.transitional;s!==void 0&&TT.assertOptions(s,{silentJSONParsing:Ii.transitional(Ii.boolean),forcedJSONParsing:Ii.transitional(Ii.boolean),clarifyTimeoutError:Ii.transitional(Ii.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(r=r&&g.synchronous,i.unshift(g.fulfilled,g.rejected))});var o=[];this.interceptors.response.forEach(function(g){o.push(g.fulfilled,g.rejected)});var a;if(!r){var l=[g_,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),a=Promise.resolve(n);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=n;i.length;){var u=i.shift(),h=i.shift();try{c=u(c)}catch(p){h(p);break}}try{a=g_(c)}catch(p){return Promise.reject(p)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};ta.prototype.getUri=function(e){return e=Dc(this.defaults,e),vB(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ET.forEach(["delete","get","head","options"],function(e){ta.prototype[e]=function(n,s){return this.request(Dc(s||{},{method:e,url:n,data:(s||{}).data}))}});ET.forEach(["post","put","patch"],function(e){ta.prototype[e]=function(n,s,i){return this.request(Dc(i||{},{method:e,url:n,data:s}))}});var bB=ta,qu,y_;function EB(){if(y_)return qu;y_=1;var t=xc();function e(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(o){s=o});var i=this;this.promise.then(function(r){if(!!i._listeners){var o,a=i._listeners.length;for(o=0;o<a;o++)i._listeners[o](r);i._listeners=null}}),this.promise.then=function(r){var o,a=new Promise(function(l){i.subscribe(l),o=l}).then(r);return a.cancel=function(){i.unsubscribe(o)},a},n(function(o){i.reason||(i.reason=new t(o),s(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},e.prototype.unsubscribe=function(s){if(!!this._listeners){var i=this._listeners.indexOf(s);i!==-1&&this._listeners.splice(i,1)}},e.source=function(){var s,i=new e(function(o){s=o});return{token:i,cancel:s}},qu=e,qu}var Hu,__;function TB(){return __||(__=1,Hu=function(e){return function(s){return e.apply(null,s)}}),Hu}var Wu,w_;function CB(){if(w_)return Wu;w_=1;var t=jt;return Wu=function(n){return t.isObject(n)&&n.isAxiosError===!0},Wu}var v_=jt,IB=hT,Va=bB,AB=vT,SB=yp;function CT(t){var e=new Va(t),n=IB(Va.prototype.request,e);return v_.extend(n,Va.prototype,e),v_.extend(n,e),n.create=function(i){return CT(AB(t,i))},n}var $n=CT(SB);$n.Axios=Va;$n.Cancel=xc();$n.CancelToken=EB();$n.isCancel=wT();$n.VERSION=bT().version;$n.all=function(e){return Promise.all(e)};$n.spread=TB();$n.isAxiosError=CB();pp.exports=$n;pp.exports.default=$n;(function(t){t.exports=pp.exports})(fp);var qe={},wp={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.RequiredError=t.BaseAPI=t.COLLECTION_FORMATS=t.BASE_PATH=void 0;const e=fp.exports;t.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class n{constructor(r,o=t.BASE_PATH,a=e.default){this.basePath=o,this.axios=a,r&&(this.configuration=r,this.basePath=r.basePath||this.basePath)}}t.BaseAPI=n;class s extends Error{constructor(r,o){super(o),this.field=r,this.name="RequiredError"}}t.RequiredError=s})(wp);var vp=wt&&wt.__awaiter||function(t,e,n,s){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(u){try{c(s.next(u))}catch(h){o(h)}}function l(u){try{c(s.throw(u))}catch(h){o(h)}}function c(u){u.done?r(u.value):i(u.value).then(a,l)}c((s=s.apply(t,e||[])).next())})};Object.defineProperty(qe,"__esModule",{value:!0});qe.createRequestFunction=qe.toPathString=qe.serializeDataIfNeeded=qe.setSearchParams=qe.setOAuthToObject=qe.setBearerAuthToObject=qe.setBasicAuthToObject=qe.setApiKeyToObject=qe.assertParamExists=qe.DUMMY_BASE_URL=void 0;const RB=wp;qe.DUMMY_BASE_URL="https://example.com";qe.assertParamExists=function(t,e,n){if(n==null)throw new RB.RequiredError(e,`Required parameter ${e} was null or undefined when calling ${t}.`)};qe.setApiKeyToObject=function(t,e,n){return vp(this,void 0,void 0,function*(){if(n&&n.apiKey){const s=typeof n.apiKey=="function"?yield n.apiKey(e):yield n.apiKey;t[e]=s}})};qe.setBasicAuthToObject=function(t,e){e&&(e.username||e.password)&&(t.auth={username:e.username,password:e.password})};qe.setBearerAuthToObject=function(t,e){return vp(this,void 0,void 0,function*(){if(e&&e.accessToken){const n=typeof e.accessToken=="function"?yield e.accessToken():yield e.accessToken;t.Authorization="Bearer "+n}})};qe.setOAuthToObject=function(t,e,n,s){return vp(this,void 0,void 0,function*(){if(s&&s.accessToken){const i=typeof s.accessToken=="function"?yield s.accessToken(e,n):yield s.accessToken;t.Authorization="Bearer "+i}})};function cd(t,e,n=""){typeof e=="object"?Array.isArray(e)?e.forEach(s=>cd(t,s,n)):Object.keys(e).forEach(s=>cd(t,e[s],`${n}${n!==""?".":""}${s}`)):t.has(n)?t.append(n,e):t.set(n,e)}qe.setSearchParams=function(t,...e){const n=new URLSearchParams(t.search);cd(n,e),t.search=n.toString()};qe.serializeDataIfNeeded=function(t,e,n){const s=typeof t!="string";return(s&&n&&n.isJsonMime?n.isJsonMime(e.headers["Content-Type"]):s)?JSON.stringify(t!==void 0?t:{}):t||""};qe.toPathString=function(t){return t.pathname+t.search+t.hash};qe.createRequestFunction=function(t,e,n,s){return(i=e,r=n)=>{const o=Object.assign(Object.assign({},t.options),{url:((s==null?void 0:s.basePath)||r)+t.url});return i.request(o)}};(function(t){var e=wt&&wt.__awaiter||function(o,a,l,c){function u(h){return h instanceof l?h:new l(function(p){p(h)})}return new(l||(l=Promise))(function(h,p){function g(E){try{v(c.next(E))}catch(A){p(A)}}function y(E){try{v(c.throw(E))}catch(A){p(A)}}function v(E){E.done?h(E.value):u(E.value).then(g,y)}v((c=c.apply(o,a||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.OpenAIApi=t.OpenAIApiFactory=t.OpenAIApiFp=t.OpenAIApiAxiosParamCreator=t.CreateImageRequestResponseFormatEnum=t.CreateImageRequestSizeEnum=void 0;const n=fp.exports,s=qe,i=wp;t.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},t.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},t.OpenAIApiAxiosParamCreator=function(o){return{cancelFineTune:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("cancelFineTune","fineTuneId",a);const c="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),createAnswer:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createAnswer","createAnswerRequest",a);const c="/answers",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createClassification:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createClassification","createClassificationRequest",a);const c="/classifications",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createCompletion:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createCompletion","createCompletionRequest",a);const c="/completions",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createEdit:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createEdit","createEditRequest",a);const c="/edits",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createEmbedding:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createEmbedding","createEmbeddingRequest",a);const c="/embeddings",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createFile:(a,l,c={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createFile","file",a),s.assertParamExists("createFile","purpose",l);const u="/files",h=new URL(u,s.DUMMY_BASE_URL);let p;o&&(p=o.baseOptions);const g=Object.assign(Object.assign({method:"POST"},p),c),y={},v={},E=new(o&&o.formDataCtor||FormData);a!==void 0&&E.append("file",a),l!==void 0&&E.append("purpose",l),y["Content-Type"]="multipart/form-data",s.setSearchParams(h,v);let A=p&&p.headers?p.headers:{};return g.headers=Object.assign(Object.assign(Object.assign(Object.assign({},y),E.getHeaders()),A),c.headers),g.data=E,{url:s.toPathString(h),options:g}}),createFineTune:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createFineTune","createFineTuneRequest",a);const c="/fine-tunes",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createImage:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createImage","createImageRequest",a);const c="/images/generations",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createImageEdit:(a,l,c,u,h,p,g,y={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createImageEdit","image",a),s.assertParamExists("createImageEdit","mask",l),s.assertParamExists("createImageEdit","prompt",c);const v="/images/edits",E=new URL(v,s.DUMMY_BASE_URL);let A;o&&(A=o.baseOptions);const x=Object.assign(Object.assign({method:"POST"},A),y),R={},S={},H=new(o&&o.formDataCtor||FormData);a!==void 0&&H.append("image",a),l!==void 0&&H.append("mask",l),c!==void 0&&H.append("prompt",c),u!==void 0&&H.append("n",u),h!==void 0&&H.append("size",h),p!==void 0&&H.append("response_format",p),g!==void 0&&H.append("user",g),R["Content-Type"]="multipart/form-data",s.setSearchParams(E,S);let j=A&&A.headers?A.headers:{};return x.headers=Object.assign(Object.assign(Object.assign(Object.assign({},R),H.getHeaders()),j),y.headers),x.data=H,{url:s.toPathString(E),options:x}}),createImageVariation:(a,l,c,u,h,p={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createImageVariation","image",a);const g="/images/variations",y=new URL(g,s.DUMMY_BASE_URL);let v;o&&(v=o.baseOptions);const E=Object.assign(Object.assign({method:"POST"},v),p),A={},x={},R=new(o&&o.formDataCtor||FormData);a!==void 0&&R.append("image",a),l!==void 0&&R.append("n",l),c!==void 0&&R.append("size",c),u!==void 0&&R.append("response_format",u),h!==void 0&&R.append("user",h),A["Content-Type"]="multipart/form-data",s.setSearchParams(y,x);let S=v&&v.headers?v.headers:{};return E.headers=Object.assign(Object.assign(Object.assign(Object.assign({},A),R.getHeaders()),S),p.headers),E.data=R,{url:s.toPathString(y),options:E}}),createModeration:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createModeration","createModerationRequest",a);const c="/moderations",u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),l),g={},y={};g["Content-Type"]="application/json",s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),p.data=s.serializeDataIfNeeded(a,p,o),{url:s.toPathString(u),options:p}}),createSearch:(a,l,c={})=>e(this,void 0,void 0,function*(){s.assertParamExists("createSearch","engineId",a),s.assertParamExists("createSearch","createSearchRequest",l);const u="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(a))),h=new URL(u,s.DUMMY_BASE_URL);let p;o&&(p=o.baseOptions);const g=Object.assign(Object.assign({method:"POST"},p),c),y={},v={};y["Content-Type"]="application/json",s.setSearchParams(h,v);let E=p&&p.headers?p.headers:{};return g.headers=Object.assign(Object.assign(Object.assign({},y),E),c.headers),g.data=s.serializeDataIfNeeded(l,g,o),{url:s.toPathString(h),options:g}}),deleteFile:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("deleteFile","fileId",a);const c="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"DELETE"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),deleteModel:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("deleteModel","model",a);const c="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"DELETE"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),downloadFile:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("downloadFile","fileId",a);const c="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"GET"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),listEngines:(a={})=>e(this,void 0,void 0,function*(){const l="/engines",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),p={},g={};s.setSearchParams(c,g);let y=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},p),y),a.headers),{url:s.toPathString(c),options:h}}),listFiles:(a={})=>e(this,void 0,void 0,function*(){const l="/files",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),p={},g={};s.setSearchParams(c,g);let y=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},p),y),a.headers),{url:s.toPathString(c),options:h}}),listFineTuneEvents:(a,l,c={})=>e(this,void 0,void 0,function*(){s.assertParamExists("listFineTuneEvents","fineTuneId",a);const u="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(a))),h=new URL(u,s.DUMMY_BASE_URL);let p;o&&(p=o.baseOptions);const g=Object.assign(Object.assign({method:"GET"},p),c),y={},v={};l!==void 0&&(v.stream=l),s.setSearchParams(h,v);let E=p&&p.headers?p.headers:{};return g.headers=Object.assign(Object.assign(Object.assign({},y),E),c.headers),{url:s.toPathString(h),options:g}}),listFineTunes:(a={})=>e(this,void 0,void 0,function*(){const l="/fine-tunes",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),p={},g={};s.setSearchParams(c,g);let y=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},p),y),a.headers),{url:s.toPathString(c),options:h}}),listModels:(a={})=>e(this,void 0,void 0,function*(){const l="/models",c=new URL(l,s.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),p={},g={};s.setSearchParams(c,g);let y=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},p),y),a.headers),{url:s.toPathString(c),options:h}}),retrieveEngine:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveEngine","engineId",a);const c="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"GET"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),retrieveFile:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveFile","fileId",a);const c="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"GET"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),retrieveFineTune:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveFineTune","fineTuneId",a);const c="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"GET"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}}),retrieveModel:(a,l={})=>e(this,void 0,void 0,function*(){s.assertParamExists("retrieveModel","model",a);const c="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(c,s.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"GET"},h),l),g={},y={};s.setSearchParams(u,y);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),v),l.headers),{url:s.toPathString(u),options:p}})}},t.OpenAIApiFp=function(o){const a=t.OpenAIApiAxiosParamCreator(o);return{cancelFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.cancelFineTune(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createAnswer(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createAnswer(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createClassification(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createClassification(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createCompletion(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createCompletion(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createEdit(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createEdit(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createEmbedding(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createEmbedding(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createFile(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.createFile(l,c,u);return s.createRequestFunction(h,n.default,i.BASE_PATH,o)})},createFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createFineTune(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createImage(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createImage(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createImageEdit(l,c,u,h,p,g,y,v){return e(this,void 0,void 0,function*(){const E=yield a.createImageEdit(l,c,u,h,p,g,y,v);return s.createRequestFunction(E,n.default,i.BASE_PATH,o)})},createImageVariation(l,c,u,h,p,g){return e(this,void 0,void 0,function*(){const y=yield a.createImageVariation(l,c,u,h,p,g);return s.createRequestFunction(y,n.default,i.BASE_PATH,o)})},createModeration(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createModeration(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},createSearch(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.createSearch(l,c,u);return s.createRequestFunction(h,n.default,i.BASE_PATH,o)})},deleteFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.deleteFile(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},deleteModel(l,c){return e(this,void 0,void 0,function*(){const u=yield a.deleteModel(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},downloadFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.downloadFile(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},listEngines(l){return e(this,void 0,void 0,function*(){const c=yield a.listEngines(l);return s.createRequestFunction(c,n.default,i.BASE_PATH,o)})},listFiles(l){return e(this,void 0,void 0,function*(){const c=yield a.listFiles(l);return s.createRequestFunction(c,n.default,i.BASE_PATH,o)})},listFineTuneEvents(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.listFineTuneEvents(l,c,u);return s.createRequestFunction(h,n.default,i.BASE_PATH,o)})},listFineTunes(l){return e(this,void 0,void 0,function*(){const c=yield a.listFineTunes(l);return s.createRequestFunction(c,n.default,i.BASE_PATH,o)})},listModels(l){return e(this,void 0,void 0,function*(){const c=yield a.listModels(l);return s.createRequestFunction(c,n.default,i.BASE_PATH,o)})},retrieveEngine(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveEngine(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},retrieveFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFile(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},retrieveFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFineTune(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})},retrieveModel(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveModel(l,c);return s.createRequestFunction(u,n.default,i.BASE_PATH,o)})}}},t.OpenAIApiFactory=function(o,a,l){const c=t.OpenAIApiFp(o);return{cancelFineTune(u,h){return c.cancelFineTune(u,h).then(p=>p(l,a))},createAnswer(u,h){return c.createAnswer(u,h).then(p=>p(l,a))},createClassification(u,h){return c.createClassification(u,h).then(p=>p(l,a))},createCompletion(u,h){return c.createCompletion(u,h).then(p=>p(l,a))},createEdit(u,h){return c.createEdit(u,h).then(p=>p(l,a))},createEmbedding(u,h){return c.createEmbedding(u,h).then(p=>p(l,a))},createFile(u,h,p){return c.createFile(u,h,p).then(g=>g(l,a))},createFineTune(u,h){return c.createFineTune(u,h).then(p=>p(l,a))},createImage(u,h){return c.createImage(u,h).then(p=>p(l,a))},createImageEdit(u,h,p,g,y,v,E,A){return c.createImageEdit(u,h,p,g,y,v,E,A).then(x=>x(l,a))},createImageVariation(u,h,p,g,y,v){return c.createImageVariation(u,h,p,g,y,v).then(E=>E(l,a))},createModeration(u,h){return c.createModeration(u,h).then(p=>p(l,a))},createSearch(u,h,p){return c.createSearch(u,h,p).then(g=>g(l,a))},deleteFile(u,h){return c.deleteFile(u,h).then(p=>p(l,a))},deleteModel(u,h){return c.deleteModel(u,h).then(p=>p(l,a))},downloadFile(u,h){return c.downloadFile(u,h).then(p=>p(l,a))},listEngines(u){return c.listEngines(u).then(h=>h(l,a))},listFiles(u){return c.listFiles(u).then(h=>h(l,a))},listFineTuneEvents(u,h,p){return c.listFineTuneEvents(u,h,p).then(g=>g(l,a))},listFineTunes(u){return c.listFineTunes(u).then(h=>h(l,a))},listModels(u){return c.listModels(u).then(h=>h(l,a))},retrieveEngine(u,h){return c.retrieveEngine(u,h).then(p=>p(l,a))},retrieveFile(u,h){return c.retrieveFile(u,h).then(p=>p(l,a))},retrieveFineTune(u,h){return c.retrieveFineTune(u,h).then(p=>p(l,a))},retrieveModel(u,h){return c.retrieveModel(u,h).then(p=>p(l,a))}}};class r extends i.BaseAPI{cancelFineTune(a,l){return t.OpenAIApiFp(this.configuration).cancelFineTune(a,l).then(c=>c(this.axios,this.basePath))}createAnswer(a,l){return t.OpenAIApiFp(this.configuration).createAnswer(a,l).then(c=>c(this.axios,this.basePath))}createClassification(a,l){return t.OpenAIApiFp(this.configuration).createClassification(a,l).then(c=>c(this.axios,this.basePath))}createCompletion(a,l){return t.OpenAIApiFp(this.configuration).createCompletion(a,l).then(c=>c(this.axios,this.basePath))}createEdit(a,l){return t.OpenAIApiFp(this.configuration).createEdit(a,l).then(c=>c(this.axios,this.basePath))}createEmbedding(a,l){return t.OpenAIApiFp(this.configuration).createEmbedding(a,l).then(c=>c(this.axios,this.basePath))}createFile(a,l,c){return t.OpenAIApiFp(this.configuration).createFile(a,l,c).then(u=>u(this.axios,this.basePath))}createFineTune(a,l){return t.OpenAIApiFp(this.configuration).createFineTune(a,l).then(c=>c(this.axios,this.basePath))}createImage(a,l){return t.OpenAIApiFp(this.configuration).createImage(a,l).then(c=>c(this.axios,this.basePath))}createImageEdit(a,l,c,u,h,p,g,y){return t.OpenAIApiFp(this.configuration).createImageEdit(a,l,c,u,h,p,g,y).then(v=>v(this.axios,this.basePath))}createImageVariation(a,l,c,u,h,p){return t.OpenAIApiFp(this.configuration).createImageVariation(a,l,c,u,h,p).then(g=>g(this.axios,this.basePath))}createModeration(a,l){return t.OpenAIApiFp(this.configuration).createModeration(a,l).then(c=>c(this.axios,this.basePath))}createSearch(a,l,c){return t.OpenAIApiFp(this.configuration).createSearch(a,l,c).then(u=>u(this.axios,this.basePath))}deleteFile(a,l){return t.OpenAIApiFp(this.configuration).deleteFile(a,l).then(c=>c(this.axios,this.basePath))}deleteModel(a,l){return t.OpenAIApiFp(this.configuration).deleteModel(a,l).then(c=>c(this.axios,this.basePath))}downloadFile(a,l){return t.OpenAIApiFp(this.configuration).downloadFile(a,l).then(c=>c(this.axios,this.basePath))}listEngines(a){return t.OpenAIApiFp(this.configuration).listEngines(a).then(l=>l(this.axios,this.basePath))}listFiles(a){return t.OpenAIApiFp(this.configuration).listFiles(a).then(l=>l(this.axios,this.basePath))}listFineTuneEvents(a,l,c){return t.OpenAIApiFp(this.configuration).listFineTuneEvents(a,l,c).then(u=>u(this.axios,this.basePath))}listFineTunes(a){return t.OpenAIApiFp(this.configuration).listFineTunes(a).then(l=>l(this.axios,this.basePath))}listModels(a){return t.OpenAIApiFp(this.configuration).listModels(a).then(l=>l(this.axios,this.basePath))}retrieveEngine(a,l){return t.OpenAIApiFp(this.configuration).retrieveEngine(a,l).then(c=>c(this.axios,this.basePath))}retrieveFile(a,l){return t.OpenAIApiFp(this.configuration).retrieveFile(a,l).then(c=>c(this.axios,this.basePath))}retrieveFineTune(a,l){return t.OpenAIApiFp(this.configuration).retrieveFineTune(a,l).then(c=>c(this.axios,this.basePath))}retrieveModel(a,l){return t.OpenAIApiFp(this.configuration).retrieveModel(a,l).then(c=>c(this.axios,this.basePath))}}t.OpenAIApi=r})(uT);var Mc={};const kB="openai",OB="3.1.0",PB="Node.js library for the OpenAI API",xB={type:"git",url:"git@github.com:openai/openai-node.git"},NB=["openai","open","ai","gpt-3","gpt3"],DB="OpenAI",MB="MIT",LB="./dist/index.js",FB="./dist/index.d.ts",UB={build:"tsc --outDir dist/"},$B={axios:"^0.26.0","form-data":"^4.0.0"},BB={"@types/node":"^12.11.5",typescript:"^3.6.4"},VB={name:kB,version:OB,description:PB,repository:xB,keywords:NB,author:DB,license:MB,main:LB,types:FB,scripts:UB,dependencies:$B,devDependencies:BB};var zu,b_;function jB(){return b_||(b_=1,zu=typeof self=="object"?self.FormData:window.FormData),zu}Object.defineProperty(Mc,"__esModule",{value:!0});Mc.Configuration=void 0;const qB=VB;class HB{constructor(e={}){this.apiKey=e.apiKey,this.organization=e.organization,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${qB.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=jB())}isJsonMime(e){const n=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return e!==null&&(n.test(e)||e.toLowerCase()==="application/json-patch+json")}}Mc.Configuration=HB;(function(t){var e=wt&&wt.__createBinding||(Object.create?function(s,i,r,o){o===void 0&&(o=r),Object.defineProperty(s,o,{enumerable:!0,get:function(){return i[r]}})}:function(s,i,r,o){o===void 0&&(o=r),s[o]=i[r]}),n=wt&&wt.__exportStar||function(s,i){for(var r in s)r!=="default"&&!i.hasOwnProperty(r)&&e(i,s,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(uT,t),n(Mc,t)})(dp);const WB=new dp.Configuration({organization:"org-I4rRiLLW32kCrZ6vgx9qBW25",apiKey:"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"}),E_=new dp.OpenAIApi(WB),zB=[{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db890"},from:"5214424348899",content:"hola buenas tardes necesito ayuda",mid:"44311bed-1f3d-43ff-836b-fa402fc5d0a7",createdAt:{$date:{$numberLong:"1676848533492"}},updatedAt:{$date:{$numberLong:"1676848533492"}}},{isDeleted:!1,contentType:"INTERACTIVE_BUTTON",_id:{$oid:"63f2ad954f6f74b1b23db891"},from:"BOT",content:{type:"interactive_button",header:{type:"image",body:"https://mediqo.elipse-citas.com/storage/imagenes/logo_confirmacion_pago_zoom_whatsapp-20220801171859.jpg"},body:"Bienvenido a mediQ\xF3",action:["M\xE9dico","Paciente"]},mid:"126477bd-d729-409f-b67d-abb759311a85",createdAt:{$date:{$numberLong:"1676848533492"}},updatedAt:{$date:{$numberLong:"1676848533492"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db892"},from:"5214424348899",content:"tengo un px ya de la tercera edad",mid:"f8cc5020-16d8-4897-b751-24f0e46a547a",createdAt:{$date:{$numberLong:"1676848533493"}},updatedAt:{$date:{$numberLong:"1676848533493"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db893"},from:"BOT",content:"No entendi su respuesta",mid:"5038c99e-05e5-4333-8f45-9e8d44af310b",createdAt:{$date:{$numberLong:"1676848533493"}},updatedAt:{$date:{$numberLong:"1676848533493"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db894"},from:"5214424348899",content:"paciente",mid:"a0ae0d7e-8713-4fd6-9cd3-bfee534fbefe",createdAt:{$date:{$numberLong:"1676848533493"}},updatedAt:{$date:{$numberLong:"1676848533493"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Qu\xE9 tal, el precio de la consulta es de $800",createdAt:{$date:{$numberLong:"1676848581657"}},updatedAt:{$date:{$numberLong:"1676848581657"}},mid:"ee833d8f-ca3c-488a-a247-d5cce9a6f56c"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2add94f6f74b1b23db8c4"},from:"5214424348899",content:"Ok, pueden venir?",mid:"e28e930a-d953-49c6-8836-be401b88ed7e",updatedAt:{$date:{$numberLong:"1676848601172"}},createdAt:{$date:{$numberLong:"1676848601172"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:`De momento solo contamos con m\xE9dico general, no con especialidad geri\xE1trico
`,createdAt:{$date:{$numberLong:"1676848639234"}},updatedAt:{$date:{$numberLong:"1676848639234"}},mid:"458a83a5-2f58-44d2-89f2-09b9451e3d2d"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"En qu\xE9 direcci\xF3n requiere el servicio?",createdAt:{$date:{$numberLong:"1676848643773"}},updatedAt:{$date:{$numberLong:"1676848643773"}},mid:"56fd2849-d3bf-4450-9665-29e9b2f3a060"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ae174f6f74b1b23db8db"},from:"5214424348899",content:"Si est\xE1 bien",mid:"da393757-12d7-4656-85bb-86f0a9db3f19",updatedAt:{$date:{$numberLong:"1676848663565"}},createdAt:{$date:{$numberLong:"1676848663565"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ae1f4f6f74b1b23db8e2"},from:"5214424348899",content:"En dolores del R\xEDo 202 b casa 14",mid:"e039cadc-777e-4991-b3c7-4d4757f4af2c",updatedAt:{$date:{$numberLong:"1676848671807"}},createdAt:{$date:{$numberLong:"1676848671807"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Qu\xE9 colonia es?",createdAt:{$date:{$numberLong:"1676848686200"}},updatedAt:{$date:{$numberLong:"1676848686200"}},mid:"0a7c8ec8-4e5a-4284-9db9-f5c2cb426ba6"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ae3a4f6f74b1b23db8f2"},from:"5214424348899",content:"La joya",mid:"182e3280-a142-4e54-9b0a-b631413e34a3",updatedAt:{$date:{$numberLong:"1676848698696"}},createdAt:{$date:{$numberLong:"1676848698696"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"En qu\xE9 ciudad es disculpe?",createdAt:{$date:{$numberLong:"1676848768974"}},updatedAt:{$date:{$numberLong:"1676848768974"}},mid:"7ae08d66-cda5-4de7-809f-46c03ad7f876"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ae8c4f6f74b1b23db903"},from:"5214424348899",content:"Quer\xE9taro",mid:"e5d20c1a-d193-44cf-89a7-8958ea07dec8",updatedAt:{$date:{$numberLong:"1676848780724"}},createdAt:{$date:{$numberLong:"1676848780724"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Un momento, vamos a validar disponibilidad",createdAt:{$date:{$numberLong:"1676848800565"}},updatedAt:{$date:{$numberLong:"1676848800565"}},mid:"8afb3fe8-c06f-429e-afa7-a492a59f3863"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:`Disculpe la demora
`,createdAt:{$date:{$numberLong:"1676849579784"}},updatedAt:{$date:{$numberLong:"1676849579784"}},mid:"b5a347a5-90be-4116-913d-a174b07b2253"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:`Tenemos medico que puede acudir entre 15 min
`,createdAt:{$date:{$numberLong:"1676849629059"}},updatedAt:{$date:{$numberLong:"1676849629059"}},mid:"474b8646-8645-4cda-881d-19d41c99d1cf"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2b1ed4f6f74b1b23db99f"},from:"5214424348899",content:"Si est\xE1 bien",mid:"05798d51-510f-48e3-b319-715ff52d8694",updatedAt:{$date:{$numberLong:"1676849645282"}},createdAt:{$date:{$numberLong:"1676849645282"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Me apoya por favor con nombre y edad del paciente, sintomas, alg\xFAn numero y correo electr\xF3nico",createdAt:{$date:{$numberLong:"1676849677961"}},updatedAt:{$date:{$numberLong:"1676849677961"}},mid:"cd722b41-0a21-4d45-bb30-5f0d2de5279c"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2b20e4f6f74b1b23db9ac"},from:"5214424348899",content:"Cuando llegue a la caseta por favor q indique que viene con Ximena Bonilla",mid:"3d8337fa-e6e0-4320-a9e0-75475a4448bd",updatedAt:{$date:{$numberLong:"1676849678482"}},createdAt:{$date:{$numberLong:"1676849678482"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Ser\xEDa por favor el Dr Andres Hern\xE1ndez",createdAt:{$date:{$numberLong:"1676849684386"}},updatedAt:{$date:{$numberLong:"1676849684386"}},mid:"31dac9a8-e5cf-4ac7-bd02-966a711c702b"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Llegaria en 10 min ",createdAt:{$date:{$numberLong:"1676849688288"}},updatedAt:{$date:{$numberLong:"1676849688288"}},mid:"0ba38a40-d44b-45b0-aa46-49ff13ba36f6"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"El pago ser\xEDa en efectivo?",createdAt:{$date:{$numberLong:"1676849696892"}},updatedAt:{$date:{$numberLong:"1676849696892"}},mid:"c04637b8-519d-4f05-877d-655a2dba7c80"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2b23f4f6f74b1b23db9c7"},from:"5214424348899",content:"Nicolasa Aguilar edad 86 a\xF1os est\xE1 muy edematizada",mid:"f20cd717-f1e7-45e2-b3f2-1dc2b9c6e3d2",updatedAt:{$date:{$numberLong:"1676849727719"}},createdAt:{$date:{$numberLong:"1676849727719"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2b2434f6f74b1b23db9ce"},from:"5214424348899",content:"En efectivo",mid:"ea4928ca-401e-43c9-9089-26e3125d3adb",updatedAt:{$date:{$numberLong:"1676849731111"}},createdAt:{$date:{$numberLong:"1676849731111"}}},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:"Muy bien ya llega en breve el m\xE9dico",createdAt:{$date:{$numberLong:"1676849809045"}},updatedAt:{$date:{$numberLong:"1676849809045"}},mid:"eb6af18c-9bc6-48ac-aa34-54fe1b8fd395"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:`Al parecer ya lleg\xF3, ya est\xE1 solicitando acceso

`,createdAt:{$date:{$numberLong:"1676849809065"}},updatedAt:{$date:{$numberLong:"1676849809065"}},mid:"a6eca48c-c06a-4d34-9071-16e36119d9d4"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2ad954f6f74b1b23db88d"},from:"AGENT",content:`Ya est\xE1 entrando
`,createdAt:{$date:{$numberLong:"1676849929866"}},updatedAt:{$date:{$numberLong:"1676849929866"}},mid:"9d47f2b0-afda-4c27-8c3f-e4578ee64ef5"},{isDeleted:!1,contentType:"TEXT",_id:{$oid:"63f2b3204f6f74b1b23dba1c"},from:"5214424348899",content:"Muchas gracias ya llego",mid:"326cd354-37fa-4953-b1c5-ca1fa6ec861b",updatedAt:{$date:{$numberLong:"1676849952338"}},createdAt:{$date:{$numberLong:"1676849952338"}}}],KB=t=>(nw("data-v-c3541f86"),t=t(),sw(),t),GB={class:"container"},QB={class:"header"},YB=KB(()=>St("div",{class:"leading"},null,-1)),XB=["textContent"],JB={class:"messagesBox"},ZB={class:"inputBox"},eV=vn({__name:"ChatView",setup(t){const e=At(""),n=At(""),s=kk(),i=O$(jg),r=At([]),o=At("");Sd(()=>{n.value=s.params.username||"",c()});const a=un(()=>[...i.value].sort((v,E)=>v.createdAt-E.createdAt));async function l(){const v=(await E_.createCompletion({model:"text-davinci-003",prompt:`Dame 3 posibles respuestas al siguiente chat: 
 ${u()}`,temperature:.9,max_tokens:100,n:1,stream:!1,logprobs:null})).data.choices[0].text||"";return r.value=v.split(`
`).filter(Boolean).map(E=>E.slice(3)),r.value}async function c(){const y=await E_.createCompletion({model:"text-davinci-003",prompt:`Res\xFAmeme la siguiente conversaci\xF3n: 
 ${zB.map(v=>`{
			sender: ${v.from},
			message: ${v.content}
			}`)}`,temperature:.9,max_tokens:800,n:1,stream:!1,logprobs:null});o.value=y.data.choices[0].text||""}function u(){return[...i.value].sort((E,A)=>E.createdAt-A.createdAt).map(E=>`${E.name}: ${E.text}`).join(`
`)}async function h(){await Yy.fire({title:"Res\xFAmen del historial de conversaciones",text:o.value,confirmButtonColor:"#007aff",confirmButtonText:"Seleccionar"})}async function p(){await Yy.fire({title:"Selecciona alguna de las respuestas sugeridas",input:"select",inputOptions:l(),inputPlaceholder:"Selecciona una respuesta",showCancelButton:!0,confirmButtonColor:"#007aff",confirmButtonText:"Seleccionar",cancelButtonText:"Cancelar",inputValidator:y=>{if(!y)return"Necesitas seleccionar alguna";e.value=r.value[Number(y)]}})}function g(){RD(jg,{text:e.value,name:n.value,createdAt:new Date().getTime()}),e.value=""}return(y,v)=>(We(),Lt("div",GB,[St("div",QB,[YB,St("span",{textContent:Ro(n.value),onClick:v[0]||(v[0]=E=>h()),class:"title"},null,8,XB)]),St("div",JB,[(We(!0),Lt(ln,null,wS(vt(a),(E,A)=>(We(),Lt("div",{key:A,class:Yn({messageMe:E.name===n.value,messageAnother:E.name!==n.value})},[at($k,{text:E.text,type:E.name===n.value?"me":"another",username:E.name[0]},null,8,["text","type","username"])],2))),128))]),St("div",ZB,[at(Kk,{icon:"fa-regular fa-lightbulb",style:{"margin-right":"0.5rem"},"background-color":"#007aff","icon-color":"#fff","border-color":"#007aff",onClick:v[1]||(v[1]=E=>p())}),at(Mw,{text:e.value,"onUpdate:text":v[2]||(v[2]=E=>e.value=E),placeholder:"Escribe el mensaje aqu\xED...",style:{width:"100%"},onKeyupEnter:g},null,8,["text","placeholder"])])]))}});const tV=li(eV,[["__scopeId","data-v-c3541f86"]]),nV=["disabled"],sV=["textContent"],iV=vn({__name:"PrimaryButton",props:{text:{type:String,required:!0},block:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},pSize:{type:String,default:"xs",validator:t=>["xs","sm","md","lg"].includes(t)}},emits:["click"],setup(t){return(e,n)=>(We(),Lt("button",{class:Yn(["primary-button",[t.block?"block":t.pSize]]),disabled:t.loading,type:"button",onClick:n[0]||(n[0]=s=>e.$emit("click"))},[t.loading?(We(),zi(Dw,{key:0,class:"loader"})):(We(),Lt("span",{key:1,class:"font-semibold text-light-white",textContent:Ro(t.text)},null,8,sV))],10,nV))}});const rV=li(iV,[["__scopeId","data-v-86ed0848"]]),IT=t=>(nw("data-v-f30e59b0"),t=t(),sw(),t),oV={class:"welcomePage"},aV=IT(()=>St("h1",{class:"title"},"Bienvenido a Chatty",-1)),lV=IT(()=>St("span",{style:{"margin-bottom":"1rem"}},"Por favor, primero identif\xEDcate",-1)),cV=vn({__name:"WelcomeView",setup(t){const e=At(""),n=At(!1),s=Rk();function i(){n.value=!0;const r=e.value.replace(/[^a-zA-Z0-9]/g,"")||`guest-${new Date().getTime()}`;localStorage.setItem("chatty-username",e.value),s.push({name:"chat",params:{username:r}})}return(r,o)=>(We(),Lt("div",oV,[aV,lV,at(Mw,{text:e.value,"onUpdate:text":o[0]||(o[0]=a=>e.value=a),placeholder:"Escribe tu nombre",style:{"margin-bottom":"1rem"}},null,8,["text"]),at(rV,{text:"Continuar",onClick:o[1]||(o[1]=a=>i()),loading:n.value},null,8,["loading"])]))}});const uV=li(cV,[["__scopeId","data-v-f30e59b0"]]),hV=Ak({history:qR("/"),routes:[{path:"/welcome",name:"welcome",component:uV},{path:"/chat/:username",name:"chat",component:tV},{path:"/about",name:"about",component:()=>Nk(()=>import("./AboutView.11cff19e.js"),["assets/AboutView.11cff19e.js","assets/AboutView.4d995ba2.css"])}]}),Lc=vR(Ok);Lc.use(CR());Lc.use(hV);Lc.use(x$,{firebaseApp:m0,modules:[P$()]});Lc.mount("#app");export{li as _,St as a,Lt as c,We as o};
