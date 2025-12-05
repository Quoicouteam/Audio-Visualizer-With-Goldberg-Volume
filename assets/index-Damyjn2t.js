(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ru(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const bt={},ir=[],si=()=>{},Wd=()=>!1,Ga=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Cu=i=>i.startsWith("onUpdate:"),an=Object.assign,Pu=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},o0=Object.prototype.hasOwnProperty,gt=(i,e)=>o0.call(i,e),qe=Array.isArray,sr=i=>Mo(i)==="[object Map]",Wa=i=>Mo(i)==="[object Set]",Cf=i=>Mo(i)==="[object Date]",Ke=i=>typeof i=="function",Ft=i=>typeof i=="string",ri=i=>typeof i=="symbol",Tt=i=>i!==null&&typeof i=="object",Xd=i=>(Tt(i)||Ke(i))&&Ke(i.then)&&Ke(i.catch),jd=Object.prototype.toString,Mo=i=>jd.call(i),a0=i=>Mo(i).slice(8,-1),qd=i=>Mo(i)==="[object Object]",Iu=i=>Ft(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,$r=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xa=i=>{const e=Object.create(null);return(t=>e[t]||(e[t]=i(t)))},l0=/-\w/g,On=Xa(i=>i.replace(l0,e=>e.slice(1).toUpperCase())),c0=/\B([A-Z])/g,Ls=Xa(i=>i.replace(c0,"-$1").toLowerCase()),ja=Xa(i=>i.charAt(0).toUpperCase()+i.slice(1)),_l=Xa(i=>i?`on${ja(i)}`:""),Ji=(i,e)=>!Object.is(i,e),ha=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Yd=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},qa=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Pf;const Ya=()=>Pf||(Pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dr(i){if(qe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Ft(n)?d0(n):dr(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(i)||Tt(i))return i}const u0=/;(?![^(]*\))/g,f0=/:([^]+)/,h0=/\/\*[^]*?\*\//g;function d0(i){const e={};return i.replace(h0,"").split(u0).forEach(t=>{if(t){const n=t.split(f0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ka(i){let e="";if(Ft(i))e=i;else if(qe(i))for(let t=0;t<i.length;t++){const n=Ka(i[t]);n&&(e+=n+" ")}else if(Tt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const p0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m0=Ru(p0);function Kd(i){return!!i||i===""}function g0(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=$a(i[n],e[n]);return t}function $a(i,e){if(i===e)return!0;let t=Cf(i),n=Cf(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=ri(i),n=ri(e),t||n)return i===e;if(t=qe(i),n=qe(e),t||n)return t&&n?g0(i,e):!1;if(t=Tt(i),n=Tt(e),t||n){if(!t||!n)return!1;const s=Object.keys(i).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$a(i[o],e[o]))return!1}}return String(i)===String(e)}function x0(i,e){return i.findIndex(t=>$a(t,e))}const $d=i=>!!(i&&i.__v_isRef===!0),Ti=i=>Ft(i)?i:i==null?"":qe(i)||Tt(i)&&(i.toString===jd||!Ke(i.toString))?$d(i)?Ti(i.value):JSON.stringify(i,Zd,2):String(i),Zd=(i,e)=>$d(e)?Zd(i,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[vl(n,r)+" =>"]=s,t),{})}:Wa(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vl(t))}:ri(e)?vl(e):Tt(e)&&!qe(e)&&!qd(e)?String(e):e,vl=(i,e="")=>{var t;return ri(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};let fn;class _0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){++this._on===1&&(this.prevScope=fn,fn=this)}off(){this._on>0&&--this._on===0&&(fn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function v0(){return fn}let Mt;const yl=new WeakSet;class Jd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fn&&fn.active&&fn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,If(this),tp(this);const e=Mt,t=qn;Mt=this,qn=!0;try{return this.fn()}finally{np(this),Mt=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uu(e);this.deps=this.depsTail=void 0,If(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xc(this)&&this.run()}get dirty(){return xc(this)}}let Qd=0,Zr,Jr;function ep(i,e=!1){if(i.flags|=8,e){i.next=Jr,Jr=i;return}i.next=Zr,Zr=i}function Du(){Qd++}function Lu(){if(--Qd>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Zr;){let e=Zr;for(Zr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function tp(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function np(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),Uu(n),y0(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function xc(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function ip(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===oo)||(i.globalVersion=oo,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!xc(i))))return;i.flags|=2;const e=i.dep,t=Mt,n=qn;Mt=i,qn=!0;try{tp(i);const s=i.fn(i._value);(e.version===0||Ji(s,i._value))&&(i.flags|=128,i._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,qn=n,np(i),i.flags&=-3}}function Uu(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Uu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function y0(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let qn=!0;const sp=[];function Ii(){sp.push(qn),qn=!1}function Di(){const i=sp.pop();qn=i===void 0?!0:i}function If(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let oo=0;class b0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!qn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new b0(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,rp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=n)}return t}trigger(e){this.version++,oo++,this.notify(e)}notify(e){Du();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lu()}}}function rp(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)rp(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const _c=new WeakMap,Ss=Symbol(""),vc=Symbol(""),ao=Symbol("");function Kt(i,e,t){if(qn&&Mt){let n=_c.get(i);n||_c.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new Nu),s.map=n,s.key=t),s.track()}}function Mi(i,e,t,n,s,r){const o=_c.get(i);if(!o){oo++;return}const a=l=>{l&&l.trigger()};if(Du(),e==="clear")o.forEach(a);else{const l=qe(i),c=l&&Iu(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===ao||!ri(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ao)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ss)),sr(i)&&a(o.get(vc)));break;case"delete":l||(a(o.get(Ss)),sr(i)&&a(o.get(vc)));break;case"set":sr(i)&&a(o.get(Ss));break}}Lu()}function Fs(i){const e=mt(i);return e===i?e:(Kt(e,"iterate",ao),Fn(i)?e:e.map($n))}function Za(i){return Kt(i=mt(i),"iterate",ao),i}function Wi(i,e){return Li(i)?Ts(i)?pr($n(e)):pr(e):$n(e)}const M0={__proto__:null,[Symbol.iterator](){return bl(this,Symbol.iterator,i=>Wi(this,i))},concat(...i){return Fs(this).concat(...i.map(e=>qe(e)?Fs(e):e))},entries(){return bl(this,"entries",i=>(i[1]=Wi(this,i[1]),i))},every(i,e){return fi(this,"every",i,e,void 0,arguments)},filter(i,e){return fi(this,"filter",i,e,t=>t.map(n=>Wi(this,n)),arguments)},find(i,e){return fi(this,"find",i,e,t=>Wi(this,t),arguments)},findIndex(i,e){return fi(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return fi(this,"findLast",i,e,t=>Wi(this,t),arguments)},findLastIndex(i,e){return fi(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return fi(this,"forEach",i,e,void 0,arguments)},includes(...i){return Ml(this,"includes",i)},indexOf(...i){return Ml(this,"indexOf",i)},join(i){return Fs(this).join(i)},lastIndexOf(...i){return Ml(this,"lastIndexOf",i)},map(i,e){return fi(this,"map",i,e,void 0,arguments)},pop(){return Nr(this,"pop")},push(...i){return Nr(this,"push",i)},reduce(i,...e){return Df(this,"reduce",i,e)},reduceRight(i,...e){return Df(this,"reduceRight",i,e)},shift(){return Nr(this,"shift")},some(i,e){return fi(this,"some",i,e,void 0,arguments)},splice(...i){return Nr(this,"splice",i)},toReversed(){return Fs(this).toReversed()},toSorted(i){return Fs(this).toSorted(i)},toSpliced(...i){return Fs(this).toSpliced(...i)},unshift(...i){return Nr(this,"unshift",i)},values(){return bl(this,"values",i=>Wi(this,i))}};function bl(i,e,t){const n=Za(i),s=n[e]();return n!==i&&!Fn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const S0=Array.prototype;function fi(i,e,t,n,s,r){const o=Za(i),a=o!==i&&!Fn(i),l=o[e];if(l!==S0[e]){const f=l.apply(i,r);return a?$n(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,Wi(i,f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function Df(i,e,t,n){const s=Za(i);let r=t;return s!==i&&(Fn(i)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,i)}):r=function(o,a,l){return t.call(this,o,Wi(i,a),l,i)}),s[e](r,...n)}function Ml(i,e,t){const n=mt(i);Kt(n,"iterate",ao);const s=n[e](...t);return(s===-1||s===!1)&&zu(t[0])?(t[0]=mt(t[0]),n[e](...t)):s}function Nr(i,e,t=[]){Ii(),Du();const n=mt(i)[e].apply(i,t);return Lu(),Di(),n}const T0=Ru("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ri));function E0(i){ri(i)||(i=String(i));const e=mt(this);return Kt(e,"has",i),e.hasOwnProperty(i)}class ap{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?N0:fp:r?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=M0[t]))return l;if(t==="hasOwnProperty")return E0}const a=Reflect.get(e,t,Jt(e)?e:n);if((ri(t)?op.has(t):T0(t))||(s||Kt(e,"get",t),r))return a;if(Jt(a)){const l=o&&Iu(t)?a:a.value;return s&&Tt(l)?bc(l):l}return Tt(a)?s?bc(a):Ou(a):a}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];const o=qe(e)&&Iu(t);if(!this._isShallow){const c=Li(r);if(!Fn(n)&&!Li(n)&&(r=mt(r),n=mt(n)),!o&&Jt(r)&&!Jt(n))return c||(r.value=n),!0}const a=o?Number(t)<e.length:gt(e,t),l=Reflect.set(e,t,n,Jt(e)?e:s);return e===mt(s)&&(a?Ji(n,r)&&Mi(e,"set",t,n):Mi(e,"add",t,n)),l}deleteProperty(e,t){const n=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Mi(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!ri(t)||!op.has(t))&&Kt(e,"has",t),n}ownKeys(e){return Kt(e,"iterate",qe(e)?"length":Ss),Reflect.ownKeys(e)}}class A0 extends ap{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const w0=new lp,R0=new A0,C0=new lp(!0);const yc=i=>i,Do=i=>Reflect.getPrototypeOf(i);function P0(i,e,t){return function(...n){const s=this.__v_raw,r=mt(s),o=sr(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?yc:e?pr:$n;return!e&&Kt(r,"iterate",l?vc:Ss),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Lo(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function I0(i,e){const t={get(s){const r=this.__v_raw,o=mt(r),a=mt(s);i||(Ji(s,a)&&Kt(o,"get",s),Kt(o,"get",a));const{has:l}=Do(o),c=e?yc:i?pr:$n;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Kt(mt(s),"iterate",Ss),s.size},has(s){const r=this.__v_raw,o=mt(r),a=mt(s);return i||(Ji(s,a)&&Kt(o,"has",s),Kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=mt(a),c=e?yc:i?pr:$n;return!i&&Kt(l,"iterate",Ss),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return an(t,i?{add:Lo("add"),set:Lo("set"),delete:Lo("delete"),clear:Lo("clear")}:{add(s){!e&&!Fn(s)&&!Li(s)&&(s=mt(s));const r=mt(this);return Do(r).has.call(r,s)||(r.add(s),Mi(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!Li(r)&&(r=mt(r));const o=mt(this),{has:a,get:l}=Do(o);let c=a.call(o,s);c||(s=mt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ji(r,u)&&Mi(o,"set",s,r):Mi(o,"add",s,r),this},delete(s){const r=mt(this),{has:o,get:a}=Do(r);let l=o.call(r,s);l||(s=mt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Mi(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,o=s.clear();return r&&Mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=P0(s,i,e)}),t}function Fu(i,e){const t=I0(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(gt(t,s)&&s in n?t:n,s,r)}const D0={get:Fu(!1,!1)},L0={get:Fu(!1,!0)},U0={get:Fu(!0,!1)};const cp=new WeakMap,up=new WeakMap,fp=new WeakMap,N0=new WeakMap;function F0(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O0(i){return i.__v_skip||!Object.isExtensible(i)?0:F0(a0(i))}function Ou(i){return Li(i)?i:Bu(i,!1,w0,D0,cp)}function B0(i){return Bu(i,!1,C0,L0,up)}function bc(i){return Bu(i,!0,R0,U0,fp)}function Bu(i,e,t,n,s){if(!Tt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=O0(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:t);return s.set(i,a),a}function Ts(i){return Li(i)?Ts(i.__v_raw):!!(i&&i.__v_isReactive)}function Li(i){return!!(i&&i.__v_isReadonly)}function Fn(i){return!!(i&&i.__v_isShallow)}function zu(i){return i?!!i.__v_raw:!1}function mt(i){const e=i&&i.__v_raw;return e?mt(e):i}function z0(i){return!gt(i,"__v_skip")&&Object.isExtensible(i)&&Yd(i,"__v_skip",!0),i}const $n=i=>Tt(i)?Ou(i):i,pr=i=>Tt(i)?bc(i):i;function Jt(i){return i?i.__v_isRef===!0:!1}function hn(i){return V0(i,!1)}function V0(i,e){return Jt(i)?i:new k0(i,e)}class k0{constructor(e,t){this.dep=new Nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:$n(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Fn(e)||Li(e);e=n?e:mt(e),Ji(e,t)&&(this._rawValue=e,this._value=n?e:$n(e),this.dep.trigger())}}function H0(i){return Jt(i)?i.value:i}const G0={get:(i,e,t)=>e==="__v_raw"?i:H0(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Jt(s)&&!Jt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function hp(i){return Ts(i)?i:new Proxy(i,G0)}class W0{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return ep(this,!0),!0}get value(){const e=this.dep.track();return ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function X0(i,e,t=!1){let n,s;return Ke(i)?n=i:(n=i.get,s=i.set),new W0(n,s,t)}const Uo={},Aa=new WeakMap;let gs;function j0(i,e=!1,t=gs){if(t){let n=Aa.get(t);n||Aa.set(t,n=[]),n.push(i)}}function q0(i,e,t=bt){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:Fn(M)||s===!1||s===0?Si(M,1):Si(M);let u,f,h,d,m=!1,x=!1;if(Jt(i)?(f=()=>i.value,m=Fn(i)):Ts(i)?(f=()=>c(i),m=!0):qe(i)?(x=!0,m=i.some(M=>Ts(M)||Fn(M)),f=()=>i.map(M=>{if(Jt(M))return M.value;if(Ts(M))return c(M);if(Ke(M))return l?l(M,2):M()})):Ke(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Ii();try{h()}finally{Di()}}const M=gs;gs=u;try{return l?l(i,3,[d]):i(d)}finally{gs=M}}:f=si,e&&s){const M=f,R=s===!0?1/0:s;f=()=>Si(M(),R)}const g=v0(),p=()=>{u.stop(),g&&g.active&&Pu(g.effects,u)};if(r&&e){const M=e;e=(...R)=>{M(...R),p()}}let b=x?new Array(i.length).fill(Uo):Uo;const y=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const R=u.run();if(s||m||(x?R.some((T,C)=>Ji(T,b[C])):Ji(R,b))){h&&h();const T=gs;gs=u;try{const C=[R,b===Uo?void 0:x&&b[0]===Uo?[]:b,d];b=R,l?l(e,3,C):e(...C)}finally{gs=T}}}else u.run()};return a&&a(y),u=new Jd(f),u.scheduler=o?()=>o(y,!1):y,d=M=>j0(M,!1,u),h=u.onStop=()=>{const M=Aa.get(u);if(M){if(l)l(M,4);else for(const R of M)R();Aa.delete(u)}},e?n?y(!0):b=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Si(i,e=1/0,t){if(e<=0||!Tt(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,Jt(i))Si(i.value,e,t);else if(qe(i))for(let n=0;n<i.length;n++)Si(i[n],e,t);else if(Wa(i)||sr(i))i.forEach(n=>{Si(n,e,t)});else if(qd(i)){for(const n in i)Si(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Si(i[n],e,t)}return i}function So(i,e,t,n){try{return n?i(...n):i()}catch(s){Ja(s,e,t)}}function oi(i,e,t,n){if(Ke(i)){const s=So(i,e,t,n);return s&&Xd(s)&&s.catch(r=>{Ja(r,e,t)}),s}if(qe(i)){const s=[];for(let r=0;r<i.length;r++)s.push(oi(i[r],e,t,n));return s}}function Ja(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){Ii(),So(r,null,10,[i,l,c]),Di();return}}Y0(i,t,s,n,o)}function Y0(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const rn=[];let ei=-1;const rr=[];let Xi=null,tr=0;const dp=Promise.resolve();let wa=null;function pp(i){const e=wa||dp;return i?e.then(this?i.bind(this):i):e}function K0(i){let e=ei+1,t=rn.length;for(;e<t;){const n=e+t>>>1,s=rn[n],r=lo(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function Vu(i){if(!(i.flags&1)){const e=lo(i),t=rn[rn.length-1];!t||!(i.flags&2)&&e>=lo(t)?rn.push(i):rn.splice(K0(e),0,i),i.flags|=1,mp()}}function mp(){wa||(wa=dp.then(xp))}function $0(i){qe(i)?rr.push(...i):Xi&&i.id===-1?Xi.splice(tr+1,0,i):i.flags&1||(rr.push(i),i.flags|=1),mp()}function Lf(i,e,t=ei+1){for(;t<rn.length;t++){const n=rn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;rn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function gp(i){if(rr.length){const e=[...new Set(rr)].sort((t,n)=>lo(t)-lo(n));if(rr.length=0,Xi){Xi.push(...e);return}for(Xi=e,tr=0;tr<Xi.length;tr++){const t=Xi[tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Xi=null,tr=0}}const lo=i=>i.id==null?i.flags&2?-1:1/0:i.id;function xp(i){try{for(ei=0;ei<rn.length;ei++){const e=rn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<rn.length;ei++){const e=rn[ei];e&&(e.flags&=-2)}ei=-1,rn.length=0,gp(),wa=null,(rn.length||rr.length)&&xp()}}let Sn=null,_p=null;function Ra(i){const e=Sn;return Sn=i,_p=i&&i.type.__scopeId||null,e}function Z0(i,e=Sn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Wf(-1);const r=Ra(e);let o;try{o=i(...s)}finally{Ra(r),n._d&&Wf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function co(i,e){if(Sn===null)return i;const t=nl(Sn),n=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&Si(o),n.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function os(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ii(),oi(l,t,8,[i.el,a,i,e]),Di())}}const J0=Symbol("_vte"),Q0=i=>i.__isTeleport,eg=Symbol("_leaveCb");function ku(i,e){i.shapeFlag&6&&i.component?(i.transition=e,ku(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function vp(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}const Ca=new WeakMap;function Qr(i,e,t,n,s=!1){if(qe(i)){i.forEach((m,x)=>Qr(m,e&&(qe(e)?e[x]:e),t,n,s));return}if(eo(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Qr(i,e,t,n.component.subTree);return}const r=n.shapeFlag&4?nl(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,f=a.setupState,h=mt(f),d=f===bt?Wd:m=>gt(h,m);if(c!=null&&c!==l){if(Uf(e),Ft(c))u[c]=null,d(c)&&(f[c]=null);else if(Jt(c)){c.value=null;const m=e;m.k&&(u[m.k]=null)}}if(Ke(l))So(l,a,12,[o,u]);else{const m=Ft(l),x=Jt(l);if(m||x){const g=()=>{if(i.f){const p=m?d(l)?f[l]:u[l]:l.value;if(s)qe(p)&&Pu(p,r);else if(qe(p))p.includes(r)||p.push(r);else if(m)u[l]=[r],d(l)&&(f[l]=u[l]);else{const b=[r];l.value=b,i.k&&(u[i.k]=b)}}else m?(u[l]=o,d(l)&&(f[l]=o)):x&&(l.value=o,i.k&&(u[i.k]=o))};if(o){const p=()=>{g(),Ca.delete(i)};p.id=-1,Ca.set(i,p),Mn(p,t)}else Uf(i),g()}}}function Uf(i){const e=Ca.get(i);e&&(e.flags|=8,Ca.delete(i))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const eo=i=>!!i.type.__asyncLoader,yp=i=>i.type.__isKeepAlive;function tg(i,e){bp(i,"a",e)}function ng(i,e){bp(i,"da",e)}function bp(i,e,t=$t){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Qa(e,n,t),t){let s=t.parent;for(;s&&s.parent;)yp(s.parent.vnode)&&ig(n,e,t,s),s=s.parent}}function ig(i,e,t,n){const s=Qa(e,i,n,!0);Sp(()=>{Pu(n[e],s)},t)}function Qa(i,e,t=$t,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{Ii();const a=To(t),l=oi(e,t,i,o);return a(),Di(),l});return n?s.unshift(r):s.push(r),r}}const Ni=i=>(e,t=$t)=>{(!fo||i==="sp")&&Qa(i,(...n)=>e(...n),t)},sg=Ni("bm"),Hu=Ni("m"),rg=Ni("bu"),og=Ni("u"),Mp=Ni("bum"),Sp=Ni("um"),ag=Ni("sp"),lg=Ni("rtg"),cg=Ni("rtc");function ug(i,e=$t){Qa("ec",i,e)}const fg="components";function da(i,e){return dg(fg,i,!0,e)||i}const hg=Symbol.for("v-ndc");function dg(i,e,t=!0,n=!1){const s=Sn||$t;if(s){const r=s.type;{const a=ix(r,!1);if(a&&(a===e||a===On(e)||a===ja(On(e))))return r}const o=Nf(s[i]||r[i],e)||Nf(s.appContext[i],e);return!o&&n?r:o}}function Nf(i,e){return i&&(i[e]||i[On(e)]||i[ja(On(e))])}function mr(i,e,t,n){let s;const r=t,o=qe(i);if(o||Ft(i)){const a=o&&Ts(i);let l=!1,c=!1;a&&(l=!Fn(i),c=Li(i),i=Za(i)),s=new Array(i.length);for(let u=0,f=i.length;u<f;u++)s[u]=e(l?c?pr($n(i[u])):$n(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=e(a+1,a,void 0,r)}else if(Tt(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(i[u],u,l,r)}}else s=[];return s}const Mc=i=>i?Wp(i)?nl(i):Mc(i.parent):null,to=an(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Mc(i.parent),$root:i=>Mc(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Ep(i),$forceUpdate:i=>i.f||(i.f=()=>{Vu(i.update)}),$nextTick:i=>i.n||(i.n=pp.bind(i.proxy)),$watch:i=>Eg.bind(i)}),Sl=(i,e)=>i!==bt&&!i.__isScriptSetup&&gt(i,e),pg={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Sl(n,e))return o[e]=1,n[e];if(s!==bt&&gt(s,e))return o[e]=2,s[e];if(gt(r,e))return o[e]=3,r[e];if(t!==bt&&gt(t,e))return o[e]=4,t[e];Sc&&(o[e]=0)}}const c=to[e];let u,f;if(c)return e==="$attrs"&&Kt(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==bt&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Sl(s,e)?(s[e]=t,!0):n!==bt&&gt(n,e)?(n[e]=t,!0):gt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||i!==bt&&a[0]!=="$"&&gt(i,a)||Sl(e,a)||gt(r,a)||gt(n,a)||gt(to,a)||gt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:gt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Ff(i){return qe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Sc=!0;function mg(i){const e=Ep(i),t=i.proxy,n=i.ctx;Sc=!1,e.beforeCreate&&Of(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:x,deactivated:g,beforeDestroy:p,beforeUnmount:b,destroyed:y,unmounted:M,render:R,renderTracked:T,renderTriggered:C,errorCaptured:N,serverPrefetch:A,expose:v,inheritAttrs:U,components:k,directives:q,filters:se}=e;if(c&&gg(c,n,null),o)for(const ne in o){const H=o[ne];Ke(H)&&(n[ne]=H.bind(t))}if(s){const ne=s.call(t,t);Tt(ne)&&(i.data=Ou(ne))}if(Sc=!0,r)for(const ne in r){const H=r[ne],fe=Ke(H)?H.bind(t,t):Ke(H.get)?H.get.bind(t,t):si,de=!Ke(H)&&Ke(H.set)?H.set.bind(t):si,we=jp({get:fe,set:de});Object.defineProperty(n,ne,{enumerable:!0,configurable:!0,get:()=>we.value,set:Oe=>we.value=Oe})}if(a)for(const ne in a)Tp(a[ne],n,t,ne);if(l){const ne=Ke(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(H=>{Mg(H,ne[H])})}u&&Of(u,i,"c");function Q(ne,H){qe(H)?H.forEach(fe=>ne(fe.bind(t))):H&&ne(H.bind(t))}if(Q(sg,f),Q(Hu,h),Q(rg,d),Q(og,m),Q(tg,x),Q(ng,g),Q(ug,N),Q(cg,T),Q(lg,C),Q(Mp,b),Q(Sp,M),Q(ag,A),qe(v))if(v.length){const ne=i.exposed||(i.exposed={});v.forEach(H=>{Object.defineProperty(ne,H,{get:()=>t[H],set:fe=>t[H]=fe,enumerable:!0})})}else i.exposed||(i.exposed={});R&&i.render===si&&(i.render=R),U!=null&&(i.inheritAttrs=U),k&&(i.components=k),q&&(i.directives=q),A&&vp(i)}function gg(i,e,t=si){qe(i)&&(i=Tc(i));for(const n in i){const s=i[n];let r;Tt(s)?"default"in s?r=pa(s.from||n,s.default,!0):r=pa(s.from||n):r=pa(s),Jt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function Of(i,e,t){oi(qe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Tp(i,e,t,n){let s=n.includes(".")?Rp(t,n):()=>t[n];if(Ft(i)){const r=e[i];Ke(r)&&Es(s,r)}else if(Ke(i))Es(s,i.bind(t));else if(Tt(i))if(qe(i))i.forEach(r=>Tp(r,e,t,n));else{const r=Ke(i.handler)?i.handler.bind(t):e[i.handler];Ke(r)&&Es(s,r,i)}}function Ep(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Pa(l,c,o,!0)),Pa(l,e,o)),Tt(e)&&r.set(e,l),l}function Pa(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Pa(i,r,t,!0),s&&s.forEach(o=>Pa(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=xg[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const xg={data:Bf,props:zf,emits:zf,methods:qr,computed:qr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:qr,directives:qr,watch:vg,provide:Bf,inject:_g};function Bf(i,e){return e?i?function(){return an(Ke(i)?i.call(this,this):i,Ke(e)?e.call(this,this):e)}:e:i}function _g(i,e){return qr(Tc(i),Tc(e))}function Tc(i){if(qe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function nn(i,e){return i?[...new Set([].concat(i,e))]:e}function qr(i,e){return i?an(Object.create(null),i,e):e}function zf(i,e){return i?qe(i)&&qe(e)?[...new Set([...i,...e])]:an(Object.create(null),Ff(i),Ff(e??{})):e}function vg(i,e){if(!i)return e;if(!e)return i;const t=an(Object.create(null),i);for(const n in e)t[n]=nn(i[n],e[n]);return t}function Ap(){return{app:null,config:{isNativeTag:Wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yg=0;function bg(i,e){return function(n,s=null){Ke(n)||(n=an({},n)),s!=null&&!Tt(s)&&(s=null);const r=Ap(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:yg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:rx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...f)):Ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||wt(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,nl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(oi(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;function Mg(i,e){if($t){let t=$t.provides;const n=$t.parent&&$t.parent.provides;n===t&&(t=$t.provides=Object.create(n)),t[i]=e}}function pa(i,e,t=!1){const n=Jg();if(n||or){let s=or?or._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ke(e)?e.call(n&&n.proxy):e}}const Sg=Symbol.for("v-scx"),Tg=()=>pa(Sg);function Es(i,e,t){return wp(i,e,t)}function wp(i,e,t=bt){const{immediate:n,deep:s,flush:r,once:o}=t,a=an({},t),l=e&&n||!e&&r!=="post";let c;if(fo){if(r==="sync"){const d=Tg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=si,d.resume=si,d.pause=si,d}}const u=$t;a.call=(d,m,x)=>oi(d,u,m,x);let f=!1;r==="post"?a.scheduler=d=>{Mn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():Vu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=q0(i,e,a);return fo&&(c?c.push(h):l&&h()),h}function Eg(i,e,t){const n=this.proxy,s=Ft(i)?i.includes(".")?Rp(n,i):()=>n[i]:i.bind(n,n);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=To(this),a=wp(s,r.bind(n),t);return o(),a}function Rp(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const Ag=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${On(e)}Modifiers`]||i[`${Ls(e)}Modifiers`];function wg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||bt;let s=t;const r=e.startsWith("update:"),o=r&&Ag(n,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),o.number&&(s=t.map(qa)));let a,l=n[a=_l(e)]||n[a=_l(On(e))];!l&&r&&(l=n[a=_l(Ls(e))]),l&&oi(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,oi(c,i,6,s)}}const Rg=new WeakMap;function Cp(i,e,t=!1){const n=t?Rg:e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ke(i)){const l=c=>{const u=Cp(c,e,!0);u&&(a=!0,an(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(Tt(i)&&n.set(i,null),null):(qe(r)?r.forEach(l=>o[l]=null):an(o,r),Tt(i)&&n.set(i,o),o)}function el(i,e){return!i||!Ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(i,e[0].toLowerCase()+e.slice(1))||gt(i,Ls(e))||gt(i,e))}function Vf(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:x}=i,g=Ra(i);let p,b;try{if(t.shapeFlag&4){const M=s||n,R=M;p=ti(c.call(R,M,u,f,d,h,m)),b=a}else{const M=e;p=ti(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),b=e.props?a:Cg(a)}}catch(M){no.length=0,Ja(M,i,1),p=wt(es)}let y=p;if(b&&x!==!1){const M=Object.keys(b),{shapeFlag:R}=y;M.length&&R&7&&(r&&M.some(Cu)&&(b=Pg(b,r)),y=gr(y,b,!1,!0))}return t.dirs&&(y=gr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&ku(y,t.transition),p=y,Ra(g),p}const Cg=i=>{let e;for(const t in i)(t==="class"||t==="style"||Ga(t))&&((e||(e={}))[t]=i[t]);return e},Pg=(i,e)=>{const t={};for(const n in i)(!Cu(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Ig(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?kf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!el(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?kf(n,o,c):!0:!!o;return!1}function kf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!el(t,r))return!0}return!1}function Dg({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Pp={},Ip=()=>Object.create(Pp),Dp=i=>Object.getPrototypeOf(i)===Pp;function Lg(i,e,t,n=!1){const s={},r=Ip();i.propsDefaults=Object.create(null),Lp(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:B0(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Ug(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=mt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(el(i.emitsOptions,h))continue;const d=e[h];if(l)if(gt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const m=On(h);s[m]=Ec(l,a,m,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Lp(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!gt(e,f)&&((u=Ls(f))===f||!gt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Ec(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!gt(e,f))&&(delete r[f],c=!0)}c&&Mi(i.attrs,"set","")}function Lp(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;s&&gt(s,u=On(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:el(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=mt(t),c=a||bt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Ec(s,l,f,c[f],i,!gt(c,f))}}return o}function Ec(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=gt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const u=To(s);n=c[t]=l.call(null,e),u()}}else n=l;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Ls(t))&&(n=!0))}return n}const Ng=new WeakMap;function Up(i,e,t=!1){const n=t?Ng:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ke(i)){const u=f=>{l=!0;const[h,d]=Up(f,e,!0);an(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return Tt(i)&&n.set(i,ir),ir;if(qe(r))for(let u=0;u<r.length;u++){const f=On(r[u]);Hf(f)&&(o[f]=bt)}else if(r)for(const u in r){const f=On(u);if(Hf(f)){const h=r[u],d=o[f]=qe(h)||Ke(h)?{type:h}:an({},h),m=d.type;let x=!1,g=!0;if(qe(m))for(let p=0;p<m.length;++p){const b=m[p],y=Ke(b)&&b.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(g=!1)}else x=Ke(m)&&m.name==="Boolean";d[0]=x,d[1]=g,(x||gt(d,"default"))&&a.push(f)}}const c=[o,a];return Tt(i)&&n.set(i,c),c}function Hf(i){return i[0]!=="$"&&!$r(i)}const Gu=i=>i==="_"||i==="_ctx"||i==="$stable",Wu=i=>qe(i)?i.map(ti):[ti(i)],Fg=(i,e,t)=>{if(e._n)return e;const n=Z0((...s)=>Wu(e(...s)),t);return n._c=!1,n},Np=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Gu(s))continue;const r=i[s];if(Ke(r))e[s]=Fg(s,r,n);else if(r!=null){const o=Wu(r);e[s]=()=>o}}},Fp=(i,e)=>{const t=Wu(e);i.slots.default=()=>t},Op=(i,e,t)=>{for(const n in e)(t||!Gu(n))&&(i[n]=e[n])},Og=(i,e,t)=>{const n=i.slots=Ip();if(i.vnode.shapeFlag&32){const s=e._;s?(Op(n,e,t),t&&Yd(n,"_",s,!0)):Np(e,n)}else e&&Fp(i,e)},Bg=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=bt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Op(s,e,t):(r=!e.$stable,Np(e,s)),o=e}else e&&(Fp(i,e),o={default:1});if(r)for(const a in s)!Gu(a)&&o[a]==null&&delete s[a]},Mn=Gg;function zg(i){return Vg(i)}function Vg(i,e){const t=Ya();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=si,insertStaticContent:m}=i,x=(P,L,G,w=null,$=null,Z=null,ce=void 0,Y=null,ae=!!L.dynamicChildren)=>{if(P===L)return;P&&!Fr(P,L)&&(w=oe(P),Oe(P,$,Z,!0),P=null),L.patchFlag===-2&&(ae=!1,L.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:S}=L;switch(W){case tl:g(P,L,G,w);break;case es:p(P,L,G,w);break;case El:P==null&&b(L,G,w,ce);break;case Ot:k(P,L,G,w,$,Z,ce,Y,ae);break;default:S&1?R(P,L,G,w,$,Z,ce,Y,ae):S&6?q(P,L,G,w,$,Z,ce,Y,ae):(S&64||S&128)&&W.process(P,L,G,w,$,Z,ce,Y,ae,De)}ue!=null&&$?Qr(ue,P&&P.ref,Z,L||P,!L):ue==null&&P&&P.ref!=null&&Qr(P.ref,null,Z,P,!0)},g=(P,L,G,w)=>{if(P==null)n(L.el=a(L.children),G,w);else{const $=L.el=P.el;L.children!==P.children&&c($,L.children)}},p=(P,L,G,w)=>{P==null?n(L.el=l(L.children||""),G,w):L.el=P.el},b=(P,L,G,w)=>{[P.el,P.anchor]=m(P.children,L,G,w,P.el,P.anchor)},y=({el:P,anchor:L},G,w)=>{let $;for(;P&&P!==L;)$=h(P),n(P,G,w),P=$;n(L,G,w)},M=({el:P,anchor:L})=>{let G;for(;P&&P!==L;)G=h(P),s(P),P=G;s(L)},R=(P,L,G,w,$,Z,ce,Y,ae)=>{if(L.type==="svg"?ce="svg":L.type==="math"&&(ce="mathml"),P==null)T(L,G,w,$,Z,ce,Y,ae);else{const W=P.el&&P.el._isVueCE?P.el:null;try{W&&W._beginPatch(),A(P,L,$,Z,ce,Y,ae)}finally{W&&W._endPatch()}}},T=(P,L,G,w,$,Z,ce,Y)=>{let ae,W;const{props:ue,shapeFlag:S,transition:_,dirs:F}=P;if(ae=P.el=o(P.type,Z,ue&&ue.is,ue),S&8?u(ae,P.children):S&16&&N(P.children,ae,null,w,$,Tl(P,Z),ce,Y),F&&os(P,null,w,"created"),C(ae,P,P.scopeId,ce,w),ue){for(const ee in ue)ee!=="value"&&!$r(ee)&&r(ae,ee,null,ue[ee],Z,w);"value"in ue&&r(ae,"value",null,ue.value,Z),(W=ue.onVnodeBeforeMount)&&Jn(W,w,P)}F&&os(P,null,w,"beforeMount");const j=kg($,_);j&&_.beforeEnter(ae),n(ae,L,G),((W=ue&&ue.onVnodeMounted)||j||F)&&Mn(()=>{W&&Jn(W,w,P),j&&_.enter(ae),F&&os(P,null,w,"mounted")},$)},C=(P,L,G,w,$)=>{if(G&&d(P,G),w)for(let Z=0;Z<w.length;Z++)d(P,w[Z]);if($){let Z=$.subTree;if(L===Z||Vp(Z.type)&&(Z.ssContent===L||Z.ssFallback===L)){const ce=$.vnode;C(P,ce,ce.scopeId,ce.slotScopeIds,$.parent)}}},N=(P,L,G,w,$,Z,ce,Y,ae=0)=>{for(let W=ae;W<P.length;W++){const ue=P[W]=Y?ji(P[W]):ti(P[W]);x(null,ue,L,G,w,$,Z,ce,Y)}},A=(P,L,G,w,$,Z,ce)=>{const Y=L.el=P.el;let{patchFlag:ae,dynamicChildren:W,dirs:ue}=L;ae|=P.patchFlag&16;const S=P.props||bt,_=L.props||bt;let F;if(G&&as(G,!1),(F=_.onVnodeBeforeUpdate)&&Jn(F,G,L,P),ue&&os(L,P,G,"beforeUpdate"),G&&as(G,!0),(S.innerHTML&&_.innerHTML==null||S.textContent&&_.textContent==null)&&u(Y,""),W?v(P.dynamicChildren,W,Y,G,w,Tl(L,$),Z):ce||H(P,L,Y,null,G,w,Tl(L,$),Z,!1),ae>0){if(ae&16)U(Y,S,_,G,$);else if(ae&2&&S.class!==_.class&&r(Y,"class",null,_.class,$),ae&4&&r(Y,"style",S.style,_.style,$),ae&8){const j=L.dynamicProps;for(let ee=0;ee<j.length;ee++){const V=j[ee],Se=S[V],ge=_[V];(ge!==Se||V==="value")&&r(Y,V,Se,ge,$,G)}}ae&1&&P.children!==L.children&&u(Y,L.children)}else!ce&&W==null&&U(Y,S,_,G,$);((F=_.onVnodeUpdated)||ue)&&Mn(()=>{F&&Jn(F,G,L,P),ue&&os(L,P,G,"updated")},w)},v=(P,L,G,w,$,Z,ce)=>{for(let Y=0;Y<L.length;Y++){const ae=P[Y],W=L[Y],ue=ae.el&&(ae.type===Ot||!Fr(ae,W)||ae.shapeFlag&198)?f(ae.el):G;x(ae,W,ue,null,w,$,Z,ce,!0)}},U=(P,L,G,w,$)=>{if(L!==G){if(L!==bt)for(const Z in L)!$r(Z)&&!(Z in G)&&r(P,Z,L[Z],null,$,w);for(const Z in G){if($r(Z))continue;const ce=G[Z],Y=L[Z];ce!==Y&&Z!=="value"&&r(P,Z,Y,ce,$,w)}"value"in G&&r(P,"value",L.value,G.value,$)}},k=(P,L,G,w,$,Z,ce,Y,ae)=>{const W=L.el=P?P.el:a(""),ue=L.anchor=P?P.anchor:a("");let{patchFlag:S,dynamicChildren:_,slotScopeIds:F}=L;F&&(Y=Y?Y.concat(F):F),P==null?(n(W,G,w),n(ue,G,w),N(L.children||[],G,ue,$,Z,ce,Y,ae)):S>0&&S&64&&_&&P.dynamicChildren?(v(P.dynamicChildren,_,G,$,Z,ce,Y),(L.key!=null||$&&L===$.subTree)&&Bp(P,L,!0)):H(P,L,G,ue,$,Z,ce,Y,ae)},q=(P,L,G,w,$,Z,ce,Y,ae)=>{L.slotScopeIds=Y,P==null?L.shapeFlag&512?$.ctx.activate(L,G,w,ce,ae):se(L,G,w,$,Z,ce,ae):ie(P,L,ae)},se=(P,L,G,w,$,Z,ce)=>{const Y=P.component=Zg(P,w,$);if(yp(P)&&(Y.ctx.renderer=De),Qg(Y,!1,ce),Y.asyncDep){if($&&$.registerDep(Y,Q,ce),!P.el){const ae=Y.subTree=wt(es);p(null,ae,L,G),P.placeholder=ae.el}}else Q(Y,P,L,G,$,Z,ce)},ie=(P,L,G)=>{const w=L.component=P.component;if(Ig(P,L,G))if(w.asyncDep&&!w.asyncResolved){ne(w,L,G);return}else w.next=L,w.update();else L.el=P.el,w.vnode=L},Q=(P,L,G,w,$,Z,ce)=>{const Y=()=>{if(P.isMounted){let{next:S,bu:_,u:F,parent:j,vnode:ee}=P;{const Ee=zp(P);if(Ee){S&&(S.el=ee.el,ne(P,S,ce)),Ee.asyncDep.then(()=>{P.isUnmounted||Y()});return}}let V=S,Se;as(P,!1),S?(S.el=ee.el,ne(P,S,ce)):S=ee,_&&ha(_),(Se=S.props&&S.props.onVnodeBeforeUpdate)&&Jn(Se,j,S,ee),as(P,!0);const ge=Vf(P),Ce=P.subTree;P.subTree=ge,x(Ce,ge,f(Ce.el),oe(Ce),P,$,Z),S.el=ge.el,V===null&&Dg(P,ge.el),F&&Mn(F,$),(Se=S.props&&S.props.onVnodeUpdated)&&Mn(()=>Jn(Se,j,S,ee),$)}else{let S;const{el:_,props:F}=L,{bm:j,m:ee,parent:V,root:Se,type:ge}=P,Ce=eo(L);as(P,!1),j&&ha(j),!Ce&&(S=F&&F.onVnodeBeforeMount)&&Jn(S,V,L),as(P,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(ge);const Ee=P.subTree=Vf(P);x(null,Ee,G,w,P,$,Z),L.el=Ee.el}if(ee&&Mn(ee,$),!Ce&&(S=F&&F.onVnodeMounted)){const Ee=L;Mn(()=>Jn(S,V,Ee),$)}(L.shapeFlag&256||V&&eo(V.vnode)&&V.vnode.shapeFlag&256)&&P.a&&Mn(P.a,$),P.isMounted=!0,L=G=w=null}};P.scope.on();const ae=P.effect=new Jd(Y);P.scope.off();const W=P.update=ae.run.bind(ae),ue=P.job=ae.runIfDirty.bind(ae);ue.i=P,ue.id=P.uid,ae.scheduler=()=>Vu(ue),as(P,!0),W()},ne=(P,L,G)=>{L.component=P;const w=P.vnode.props;P.vnode=L,P.next=null,Ug(P,L.props,w,G),Bg(P,L.children,G),Ii(),Lf(P),Di()},H=(P,L,G,w,$,Z,ce,Y,ae=!1)=>{const W=P&&P.children,ue=P?P.shapeFlag:0,S=L.children,{patchFlag:_,shapeFlag:F}=L;if(_>0){if(_&128){de(W,S,G,w,$,Z,ce,Y,ae);return}else if(_&256){fe(W,S,G,w,$,Z,ce,Y,ae);return}}F&8?(ue&16&&te(W,$,Z),S!==W&&u(G,S)):ue&16?F&16?de(W,S,G,w,$,Z,ce,Y,ae):te(W,$,Z,!0):(ue&8&&u(G,""),F&16&&N(S,G,w,$,Z,ce,Y,ae))},fe=(P,L,G,w,$,Z,ce,Y,ae)=>{P=P||ir,L=L||ir;const W=P.length,ue=L.length,S=Math.min(W,ue);let _;for(_=0;_<S;_++){const F=L[_]=ae?ji(L[_]):ti(L[_]);x(P[_],F,G,null,$,Z,ce,Y,ae)}W>ue?te(P,$,Z,!0,!1,S):N(L,G,w,$,Z,ce,Y,ae,S)},de=(P,L,G,w,$,Z,ce,Y,ae)=>{let W=0;const ue=L.length;let S=P.length-1,_=ue-1;for(;W<=S&&W<=_;){const F=P[W],j=L[W]=ae?ji(L[W]):ti(L[W]);if(Fr(F,j))x(F,j,G,null,$,Z,ce,Y,ae);else break;W++}for(;W<=S&&W<=_;){const F=P[S],j=L[_]=ae?ji(L[_]):ti(L[_]);if(Fr(F,j))x(F,j,G,null,$,Z,ce,Y,ae);else break;S--,_--}if(W>S){if(W<=_){const F=_+1,j=F<ue?L[F].el:w;for(;W<=_;)x(null,L[W]=ae?ji(L[W]):ti(L[W]),G,j,$,Z,ce,Y,ae),W++}}else if(W>_)for(;W<=S;)Oe(P[W],$,Z,!0),W++;else{const F=W,j=W,ee=new Map;for(W=j;W<=_;W++){const Re=L[W]=ae?ji(L[W]):ti(L[W]);Re.key!=null&&ee.set(Re.key,W)}let V,Se=0;const ge=_-j+1;let Ce=!1,Ee=0;const le=new Array(ge);for(W=0;W<ge;W++)le[W]=0;for(W=F;W<=S;W++){const Re=P[W];if(Se>=ge){Oe(Re,$,Z,!0);continue}let D;if(Re.key!=null)D=ee.get(Re.key);else for(V=j;V<=_;V++)if(le[V-j]===0&&Fr(Re,L[V])){D=V;break}D===void 0?Oe(Re,$,Z,!0):(le[D-j]=W+1,D>=Ee?Ee=D:Ce=!0,x(Re,L[D],G,null,$,Z,ce,Y,ae),Se++)}const ve=Ce?Hg(le):ir;for(V=ve.length-1,W=ge-1;W>=0;W--){const Re=j+W,D=L[Re],X=L[Re+1],he=Re+1<ue?X.el||X.placeholder:w;le[W]===0?x(null,D,G,he,$,Z,ce,Y,ae):Ce&&(V<0||W!==ve[V]?we(D,G,he,2):V--)}}},we=(P,L,G,w,$=null)=>{const{el:Z,type:ce,transition:Y,children:ae,shapeFlag:W}=P;if(W&6){we(P.component.subTree,L,G,w);return}if(W&128){P.suspense.move(L,G,w);return}if(W&64){ce.move(P,L,G,De);return}if(ce===Ot){n(Z,L,G);for(let S=0;S<ae.length;S++)we(ae[S],L,G,w);n(P.anchor,L,G);return}if(ce===El){y(P,L,G);return}if(w!==2&&W&1&&Y)if(w===0)Y.beforeEnter(Z),n(Z,L,G),Mn(()=>Y.enter(Z),$);else{const{leave:S,delayLeave:_,afterLeave:F}=Y,j=()=>{P.ctx.isUnmounted?s(Z):n(Z,L,G)},ee=()=>{Z._isLeaving&&Z[eg](!0),S(Z,()=>{j(),F&&F()})};_?_(Z,j,ee):ee()}else n(Z,L,G)},Oe=(P,L,G,w=!1,$=!1)=>{const{type:Z,props:ce,ref:Y,children:ae,dynamicChildren:W,shapeFlag:ue,patchFlag:S,dirs:_,cacheIndex:F}=P;if(S===-2&&($=!1),Y!=null&&(Ii(),Qr(Y,null,G,P,!0),Di()),F!=null&&(L.renderCache[F]=void 0),ue&256){L.ctx.deactivate(P);return}const j=ue&1&&_,ee=!eo(P);let V;if(ee&&(V=ce&&ce.onVnodeBeforeUnmount)&&Jn(V,L,P),ue&6)lt(P.component,G,w);else{if(ue&128){P.suspense.unmount(G,w);return}j&&os(P,null,L,"beforeUnmount"),ue&64?P.type.remove(P,L,G,De,w):W&&!W.hasOnce&&(Z!==Ot||S>0&&S&64)?te(W,L,G,!1,!0):(Z===Ot&&S&384||!$&&ue&16)&&te(ae,L,G),w&&Je(P)}(ee&&(V=ce&&ce.onVnodeUnmounted)||j)&&Mn(()=>{V&&Jn(V,L,P),j&&os(P,null,L,"unmounted")},G)},Je=P=>{const{type:L,el:G,anchor:w,transition:$}=P;if(L===Ot){rt(G,w);return}if(L===El){M(P);return}const Z=()=>{s(G),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:ce,delayLeave:Y}=$,ae=()=>ce(G,Z);Y?Y(P.el,Z,ae):ae()}else Z()},rt=(P,L)=>{let G;for(;P!==L;)G=h(P),s(P),P=G;s(L)},lt=(P,L,G)=>{const{bum:w,scope:$,job:Z,subTree:ce,um:Y,m:ae,a:W}=P;Gf(ae),Gf(W),w&&ha(w),$.stop(),Z&&(Z.flags|=8,Oe(ce,P,L,G)),Y&&Mn(Y,L),Mn(()=>{P.isUnmounted=!0},L)},te=(P,L,G,w=!1,$=!1,Z=0)=>{for(let ce=Z;ce<P.length;ce++)Oe(P[ce],L,G,w,$)},oe=P=>{if(P.shapeFlag&6)return oe(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const L=h(P.anchor||P.el),G=L&&L[J0];return G?h(G):L};let Me=!1;const Xe=(P,L,G)=>{P==null?L._vnode&&Oe(L._vnode,null,null,!0):x(L._vnode||null,P,L,null,null,null,G),L._vnode=P,Me||(Me=!0,Lf(),gp(),Me=!1)},De={p:x,um:Oe,m:we,r:Je,mt:se,mc:N,pc:H,pbc:v,n:oe,o:i};return{render:Xe,hydrate:void 0,createApp:bg(Xe)}}function Tl({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function as({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function kg(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Bp(i,e,t=!1){const n=i.children,s=e.children;if(qe(n)&&qe(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ji(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Bp(o,a)),a.type===tl&&a.patchFlag!==-1&&(a.el=o.el),a.type===es&&!a.el&&(a.el=o.el)}}function Hg(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function zp(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zp(e)}function Gf(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Vp=i=>i.__isSuspense;function Gg(i,e){e&&e.pendingBranch?qe(i)?e.effects.push(...i):e.effects.push(i):$0(i)}const Ot=Symbol.for("v-fgt"),tl=Symbol.for("v-txt"),es=Symbol.for("v-cmt"),El=Symbol.for("v-stc"),no=[];let Tn=null;function ht(i=!1){no.push(Tn=i?null:[])}function Wg(){no.pop(),Tn=no[no.length-1]||null}let uo=1;function Wf(i,e=!1){uo+=i,i<0&&Tn&&e&&(Tn.hasOnce=!0)}function kp(i){return i.dynamicChildren=uo>0?Tn||ir:null,Wg(),uo>0&&Tn&&Tn.push(i),i}function pt(i,e,t,n,s,r){return kp(Ue(i,e,t,n,s,r,!0))}function Xg(i,e,t,n,s){return kp(wt(i,e,t,n,s,!0))}function Hp(i){return i?i.__v_isVNode===!0:!1}function Fr(i,e){return i.type===e.type&&i.key===e.key}const Gp=({key:i})=>i??null,ma=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Ft(i)||Jt(i)||Ke(i)?{i:Sn,r:i,k:e,f:!!t}:i:null);function Ue(i,e=null,t=null,n=0,s=null,r=i===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Gp(e),ref:e&&ma(e),scopeId:_p,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(Xu(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),uo>0&&!o&&Tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Tn.push(l),l}const wt=jg;function jg(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===hg)&&(i=es),Hp(i)){const a=gr(i,e,!0);return t&&Xu(a,t),uo>0&&!r&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(i)]=a:Tn.push(a)),a.patchFlag=-2,a}if(sx(i)&&(i=i.__vccOpts),e){e=qg(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=Ka(a)),Tt(l)&&(zu(l)&&!qe(l)&&(l=an({},l)),e.style=dr(l))}const o=Ft(i)?1:Vp(i)?128:Q0(i)?64:Tt(i)?4:Ke(i)?2:0;return Ue(i,e,t,n,s,o,r,!0)}function qg(i){return i?zu(i)||Dp(i)?an({},i):i:null}function gr(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?Yg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Gp(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(ma(e)):[r,ma(e)]:ma(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ot?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&gr(i.ssContent),ssFallback:i.ssFallback&&gr(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&ku(u,l.clone(u)),u}function Ia(i=" ",e=0){return wt(tl,null,i,e)}function xr(i="",e=!1){return e?(ht(),Xg(es,null,i)):wt(es,null,i)}function ti(i){return i==null||typeof i=="boolean"?wt(es):qe(i)?wt(Ot,null,i.slice()):Hp(i)?ji(i):wt(tl,null,String(i))}function ji(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:gr(i)}function Xu(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Dp(e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),n&64?(t=16,e=[Ia(e)]):t=8);i.children=e,i.shapeFlag|=t}function Yg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Ka([e.class,n.class]));else if(s==="style")e.style=dr([e.style,n.style]);else if(Ga(s)){const r=e[s],o=n[s];o&&r!==o&&!(qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Jn(i,e,t,n=null){oi(i,e,7,[t,n])}const Kg=Ap();let $g=0;function Zg(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Kg,r={uid:$g++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(n,s),emitsOptions:Cp(n,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:n.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=wg.bind(null,r),i.ce&&i.ce(r),r}let $t=null;const Jg=()=>$t||Sn;let Da,Ac;{const i=Ya(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Da=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),Ac=e("__VUE_SSR_SETTERS__",t=>fo=t)}const To=i=>{const e=$t;return Da(i),i.scope.on(),()=>{i.scope.off(),Da(e)}},Xf=()=>{$t&&$t.scope.off(),Da(null)};function Wp(i){return i.vnode.shapeFlag&4}let fo=!1;function Qg(i,e=!1,t=!1){e&&Ac(e);const{props:n,children:s}=i.vnode,r=Wp(i);Lg(i,n,r,e),Og(i,s,t||e);const o=r?ex(i,e):void 0;return e&&Ac(!1),o}function ex(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,pg);const{setup:n}=t;if(n){Ii();const s=i.setupContext=n.length>1?nx(i):null,r=To(i),o=So(n,i,0,[i.props,s]),a=Xd(o);if(Di(),r(),(a||i.sp)&&!eo(i)&&vp(i),a){if(o.then(Xf,Xf),e)return o.then(l=>{jf(i,l)}).catch(l=>{Ja(l,i,0)});i.asyncDep=o}else jf(i,o)}else Xp(i)}function jf(i,e,t){Ke(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Tt(e)&&(i.setupState=hp(e)),Xp(i)}function Xp(i,e,t){const n=i.type;i.render||(i.render=n.render||si);{const s=To(i);Ii();try{mg(i)}finally{Di(),s()}}}const tx={get(i,e){return Kt(i,"get",""),i[e]}};function nx(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,tx),slots:i.slots,emit:i.emit,expose:e}}function nl(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(hp(z0(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in to)return to[t](i)},has(e,t){return t in e||t in to}})):i.proxy}function ix(i,e=!0){return Ke(i)?i.displayName||i.name:i.name||e&&i.__name}function sx(i){return Ke(i)&&"__vccOpts"in i}const jp=(i,e)=>X0(i,e,fo),rx="3.5.25";let wc;const qf=typeof window<"u"&&window.trustedTypes;if(qf)try{wc=qf.createPolicy("vue",{createHTML:i=>i})}catch{}const qp=wc?i=>wc.createHTML(i):i=>i,ox="http://www.w3.org/2000/svg",ax="http://www.w3.org/1998/Math/MathML",yi=typeof document<"u"?document:null,Yf=yi&&yi.createElement("template"),lx={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?yi.createElementNS(ox,i):e==="mathml"?yi.createElementNS(ax,i):t?yi.createElement(i,{is:t}):yi.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>yi.createTextNode(i),createComment:i=>yi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>yi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Yf.innerHTML=qp(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Yf.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cx=Symbol("_vtc");function ux(i,e,t){const n=i[cx];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Kf=Symbol("_vod"),fx=Symbol("_vsh"),hx=Symbol(""),dx=/(?:^|;)\s*display\s*:/;function px(i,e,t){const n=i.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ga(n,a,"")}else for(const o in e)t[o]==null&&ga(n,o,"");for(const o in t)o==="display"&&(r=!0),ga(n,o,t[o])}else if(s){if(e!==t){const o=n[hx];o&&(t+=";"+o),n.cssText=t,r=dx.test(t)}}else e&&i.removeAttribute("style");Kf in i&&(i[Kf]=r?n.display:"",i[fx]&&(n.display="none"))}const $f=/\s*!important$/;function ga(i,e,t){if(qe(t))t.forEach(n=>ga(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=mx(i,e);$f.test(t)?i.setProperty(Ls(n),t.replace($f,""),"important"):i[n]=t}}const Zf=["Webkit","Moz","ms"],Al={};function mx(i,e){const t=Al[e];if(t)return t;let n=On(e);if(n!=="filter"&&n in i)return Al[e]=n;n=ja(n);for(let s=0;s<Zf.length;s++){const r=Zf[s]+n;if(r in i)return Al[e]=r}return e}const Jf="http://www.w3.org/1999/xlink";function Qf(i,e,t,n,s,r=m0(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Jf,e.slice(6,e.length)):i.setAttributeNS(Jf,e,t):t==null||r&&!Kd(t)?i.removeAttribute(e):i.setAttribute(e,r?"":ri(t)?String(t):t)}function eh(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?qp(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Kd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function xs(i,e,t,n){i.addEventListener(e,t,n)}function gx(i,e,t,n){i.removeEventListener(e,t,n)}const th=Symbol("_vei");function xx(i,e,t,n,s=null){const r=i[th]||(i[th]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=_x(e);if(n){const c=r[e]=bx(n,s);xs(i,a,c,l)}else o&&(gx(i,a,o,l),r[e]=void 0)}}const nh=/(?:Once|Passive|Capture)$/;function _x(i){let e;if(nh.test(i)){e={};let n;for(;n=i.match(nh);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ls(i.slice(2)),e]}let wl=0;const vx=Promise.resolve(),yx=()=>wl||(vx.then(()=>wl=0),wl=Date.now());function bx(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;oi(Mx(n,t.value),e,5,[n])};return t.value=i,t.attached=yx(),t}function Mx(i,e){if(qe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ih=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Sx=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?ux(i,n,o):e==="style"?px(i,t,n):Ga(e)?Cu(e)||xx(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tx(i,e,n,o))?(eh(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(i,e,n,o,r,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Ft(n))?eh(i,On(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Qf(i,e,n,o))};function Tx(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&ih(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&i.tagName==="IFRAME"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ih(e)&&Ft(t)?!1:e in i}const La=i=>{const e=i.props["onUpdate:modelValue"]||!1;return qe(e)?t=>ha(e,t):e};function Ex(i){i.target.composing=!0}function sh(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ar=Symbol("_assign");function rh(i,e,t){return e&&(i=i.trim()),t&&(i=qa(i)),i}const Rc={created(i,{modifiers:{lazy:e,trim:t,number:n}},s){i[ar]=La(s);const r=n||s.props&&s.props.type==="number";xs(i,e?"change":"input",o=>{o.target.composing||i[ar](rh(i.value,t,r))}),(t||r)&&xs(i,"change",()=>{i.value=rh(i.value,t,r)}),e||(xs(i,"compositionstart",Ex),xs(i,"compositionend",sh),xs(i,"change",sh))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,oldValue:t,modifiers:{lazy:n,trim:s,number:r}},o){if(i[ar]=La(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?qa(i.value):i.value,l=e??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&e===t||s&&i.value.trim()===l)||(i.value=l))}},oh={deep:!0,created(i,{value:e,modifiers:{number:t}},n){const s=Wa(e);xs(i,"change",()=>{const r=Array.prototype.filter.call(i.options,o=>o.selected).map(o=>t?qa(Ua(o)):Ua(o));i[ar](i.multiple?s?new Set(r):r:r[0]),i._assigning=!0,pp(()=>{i._assigning=!1})}),i[ar]=La(n)},mounted(i,{value:e}){ah(i,e)},beforeUpdate(i,e,t){i[ar]=La(t)},updated(i,{value:e}){i._assigning||ah(i,e)}};function ah(i,e){const t=i.multiple,n=qe(e);if(!(t&&!n&&!Wa(e))){for(let s=0,r=i.options.length;s<r;s++){const o=i.options[s],a=Ua(o);if(t)if(n){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=x0(e,a)>-1}else o.selected=e.has(a);else if($a(Ua(o),e)){i.selectedIndex!==s&&(i.selectedIndex=s);return}}!t&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function Ua(i){return"_value"in i?i._value:i.value}const Ax=an({patchProp:Sx},lx);let lh;function wx(){return lh||(lh=zg(Ax))}const Rx=((...i)=>{const e=wx().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=Px(n);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Cx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Cx(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Px(i){return Ft(i)?document.querySelector(i):i}const Ix="modulepreload",Dx=function(i){return"/Audio-Visualizer-With-Goldberg-Volume/"+i},ch={},No=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(t.map(u=>{if(u=Dx(u),u in ch)return;ch[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":Ix,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((m,x)=>{d.addEventListener("load",m),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};let ls,_s,Qn;const uh=i=>{if(!ls){const e=window.AudioContext||window.webkitAudioContext;ls=new e;const t=ls.createMediaElementSource(i);_s=ls.createAnalyser(),_s.fftSize=512,t.connect(_s),_s.connect(ls.destination),Qn=new Uint8Array(_s.frequencyBinCount)}ls.state==="suspended"&&ls.resume()},Lx=()=>{if(!_s)return{bass:0,mid:0,treble:0,overall:0,bassRaw:0,midRaw:0,trebleRaw:0,peak:0,energy:0,spectrum:[]};_s.getByteFrequencyData(Qn);const i=Qn.length,e=Math.floor(i*.1),t=Math.floor(i*.4),n=Qn.slice(0,e),s=Qn.slice(e,t),r=Qn.slice(t,i),o=n.reduce((h,d)=>h+d)/n.length,a=s.reduce((h,d)=>h+d)/s.length,l=r.reduce((h,d)=>h+d)/r.length,c=Qn.reduce((h,d)=>h+d)/i,u=Math.max(...Qn),f=Math.sqrt(Qn.reduce((h,d)=>h+d*d,0)/i);return{bass:o/255,mid:a/255,treble:l/255,overall:c/255,bassRaw:o,midRaw:a,trebleRaw:l,peak:u/255,energy:f/255,spectrum:Array.from(Qn)}};const il="181",qi={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ux=0,fh=1,Nx=2,Yp=1,Fx=2,vi=3,Ui=0,mn=1,dn=2,wi=0,lr=1,hh=2,dh=3,ph=4,Ox=5,vs=100,Bx=101,zx=102,Vx=103,kx=104,Hx=200,Gx=201,Wx=202,Xx=203,Cc=204,Pc=205,jx=206,qx=207,Yx=208,Kx=209,$x=210,Zx=211,Jx=212,Qx=213,e_=214,Ic=0,Dc=1,Lc=2,_r=3,Uc=4,Nc=5,Fc=6,Oc=7,sl=0,t_=1,n_=2,Qi=0,i_=1,s_=2,r_=3,o_=4,a_=5,l_=6,c_=7,mh="attached",u_="detached",Kp=300,vr=301,yr=302,Na=303,Bc=304,rl=306,ts=1e3,Un=1001,Fa=1002,gn=1003,$p=1004,Yr=1005,Zt=1006,xa=1007,Ei=1008,ai=1009,Zp=1010,Jp=1011,ho=1012,ju=1013,Rs=1014,Xn=1015,Rr=1016,qu=1017,Yu=1018,po=1020,Qp=35902,em=35899,tm=1021,nm=1022,Nn=1023,mo=1026,go=1027,Ku=1028,$u=1029,Zu=1030,Ju=1031,Qu=1033,_a=33776,va=33777,ya=33778,ba=33779,zc=35840,Vc=35841,kc=35842,Hc=35843,Gc=36196,Wc=37492,Xc=37496,jc=37808,qc=37809,Yc=37810,Kc=37811,$c=37812,Zc=37813,Jc=37814,Qc=37815,eu=37816,tu=37817,nu=37818,iu=37819,su=37820,ru=37821,ou=36492,au=36494,lu=36495,cu=36283,uu=36284,fu=36285,hu=36286,xo=2300,_o=2301,Rl=2302,gh=2400,xh=2401,_h=2402,f_=2500,h_=0,im=1,du=2,d_=3200,p_=3201,ol=0,m_=1,Ki="",In="srgb",br="srgb-linear",Oa="linear",vt="srgb",Bs=7680,vh=519,g_=512,x_=513,__=514,sm=515,v_=516,y_=517,b_=518,M_=519,pu=35044,yh="300 es",ii=2e3,Ba=2001;function rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S_(){const i=vo("canvas");return i.style.display="block",i}const bh={};function za(...i){const e="THREE."+i.shift();console.log(e,...i)}function Fe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function nt(...i){const e="THREE."+i.shift();console.error(e,...i)}function yo(...i){const e=i.join(" ");e in bh||(bh[e]=!0,Fe(...i))}function T_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}let Cr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}};const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const io=Math.PI/180,Mr=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function ef(i,e){return(i%e+e)%e}function E_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function A_(i,e,t){return i!==e?(t-i)/(e-i):0}function so(i,e,t){return(1-t)*i+t*e}function w_(i,e,t,n){return so(i,e,1-Math.exp(-t*n))}function R_(i,e=1){return e-Math.abs(ef(i,e*2)-e)}function C_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function P_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function I_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function D_(i,e){return i+Math.random()*(e-i)}function L_(i){return i*(.5-Math.random())}function U_(i){i!==void 0&&(Mh=i);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N_(i){return i*io}function F_(i){return i*Mr}function O_(i){return(i&i-1)===0&&i!==0}function B_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function z_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gn={DEG2RAD:io,RAD2DEG:Mr,generateUUID:Yn,clamp:$e,euclideanModulo:ef,mapLinear:E_,inverseLerp:A_,lerp:so,damp:w_,pingpong:R_,smoothstep:C_,smootherstep:P_,randInt:I_,randFloat:D_,randFloatSpread:L_,seededRandom:U_,degToRad:N_,radToDeg:F_,isPowerOfTwo:O_,ceilPowerOfTwo:B_,floorPowerOfTwo:z_,setQuaternionFromProperEuler:V_,normalize:xt,denormalize:Hn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*x;g<0&&(h=-h,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,a=Math.sin(a*b)/y,l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+x*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+x*a;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-a*d,e[t+2]=c*m+u*d+a*h-l*f,e[t+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new O,Sh=new pn;class Ye{constructor(e,t,n,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],y=s[4],M=s[7],R=s[2],T=s[5],C=s[8];return r[0]=o*x+a*b+l*R,r[3]=o*g+a*y+l*T,r[6]=o*p+a*M+l*C,r[1]=c*x+u*b+f*R,r[4]=c*g+u*y+f*T,r[7]=c*p+u*M+f*C,r[2]=h*x+d*b+m*R,r[5]=h*g+d*y+m*T,r[8]=h*p+d*M+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=t*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pl.makeScale(e,t)),this}rotate(e){return this.premultiply(Pl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pl=new Ye,Th=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k_(){const i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:Th,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Th,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),i}const ft=k_();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zs;class H_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=vo("canvas")),zs.width=e.width,zs.height=e.height;const s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?H_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let W_=0;const Dl=new O;class Nt extends Cr{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Un,s=Un,r=Zt,o=Ei,a=Nn,l=ai,c=Nt.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Yn(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Kp;Nt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(d+1)/2,R=(p+1)/2,T=(u+h)/4,C=(f+x)/4,N=(m+g)/4;return y>M&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=C/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=N/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-x)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X_ extends Cr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Nt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends X_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class om extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j_ extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Oo.subVectors(this.max,Or),Vs.subVectors(e.a,Or),ks.subVectors(e.b,Or),Hs.subVectors(e.c,Or),Fi.subVectors(ks,Vs),Oi.subVectors(Hs,ks),cs.subVectors(Vs,Hs);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-cs.z,cs.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,cs.z,0,-cs.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-cs.y,cs.x,0];return!Ll(t,Vs,ks,Hs,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Vs,ks,Hs,Oo))?!1:(Bo.crossVectors(Fi,Oi),t=[Bo.x,Bo.y,Bo.z],Ll(t,Vs,ks,Hs,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,Fo=new li,Vs=new O,ks=new O,Hs=new O,Fi=new O,Oi=new O,cs=new O,Or=new O,Oo=new O,Bo=new O,us=new O;function Ll(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);const a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const q_=new li,Br=new O,Ul=new O;class ci{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):q_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Ul)),this.expandByPoint(Br.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const di=new O,Nl=new O,zo=new O,Bi=new O,Fl=new O,Vo=new O,Ol=new O;class Eo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nl.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Nl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zo),a=Bi.dot(this.direction),l=-Bi.dot(zo),c=Bi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Nl).addScaledVector(zo,h),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){Fl.subVectors(t,e),Vo.subVectors(n,e),Ol.crossVectors(Fl,Vo);let o=this.direction.dot(Ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Vo.crossVectors(Bi,Vo));if(l<0)return null;const c=a*this.direction.dot(Fl.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(Ol);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,s,r,o,a,l,c,u,f,h,d,m,x,g){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,d,m,x,g)}set(e,t,n,s,r,o,a,l,c,u,f,h,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,m=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,m=a*u,x=a*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,K_)}lookAt(e,t,n){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),zi.crossVectors(n,yn),zi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),zi.crossVectors(n,yn)),zi.normalize(),ko.crossVectors(yn,zi),s[0]=zi.x,s[4]=ko.x,s[8]=yn.x,s[1]=zi.y,s[5]=ko.y,s[9]=yn.y,s[2]=zi.z,s[6]=ko.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],y=n[7],M=n[11],R=n[15],T=s[0],C=s[4],N=s[8],A=s[12],v=s[1],U=s[5],k=s[9],q=s[13],se=s[2],ie=s[6],Q=s[10],ne=s[14],H=s[3],fe=s[7],de=s[11],we=s[15];return r[0]=o*T+a*v+l*se+c*H,r[4]=o*C+a*U+l*ie+c*fe,r[8]=o*N+a*k+l*Q+c*de,r[12]=o*A+a*q+l*ne+c*we,r[1]=u*T+f*v+h*se+d*H,r[5]=u*C+f*U+h*ie+d*fe,r[9]=u*N+f*k+h*Q+d*de,r[13]=u*A+f*q+h*ne+d*we,r[2]=m*T+x*v+g*se+p*H,r[6]=m*C+x*U+g*ie+p*fe,r[10]=m*N+x*k+g*Q+p*de,r[14]=m*A+x*q+g*ne+p*we,r[3]=b*T+y*v+M*se+R*H,r[7]=b*C+y*U+M*ie+R*fe,r[11]=b*N+y*k+M*Q+R*de,r[15]=b*A+y*q+M*ne+R*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+x*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+g*(+t*c*f-t*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=f*g*c-x*h*c+x*l*d-a*g*d-f*l*p+a*h*p,y=m*h*c-u*g*c-m*l*d+o*g*d+u*l*p-o*h*p,M=u*x*c-m*f*c+m*a*d-o*x*d-u*a*p+o*f*p,R=m*f*l-u*x*l-m*a*h+o*x*h+u*a*g-o*f*g,T=t*b+n*y+s*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=b*C,e[1]=(x*h*r-f*g*r-x*s*d+n*g*d+f*s*p-n*h*p)*C,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*C,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*C,e[4]=y*C,e[5]=(u*g*r-m*h*r+m*s*d-t*g*d-u*s*p+t*h*p)*C,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*C,e[8]=M*C,e[9]=(m*f*r-u*x*r-m*n*d+t*x*d+u*n*p-t*f*p)*C,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*C,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*d-t*a*d)*C,e[12]=R*C,e[13]=(u*x*s-m*f*s+m*n*h-t*x*h-u*n*g+t*f*g)*C,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*C,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,x=o*u,g=o*f,p=a*f,b=l*c,y=l*u,M=l*f,R=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*R,s[1]=(d+M)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(h+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+y)*C,s[9]=(g-b)*C,s[10]=(1-(h+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gs.set(s[0],s[1],s[2]).length();const o=Gs.set(s[4],s[5],s[6]).length(),a=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);const c=1/r,u=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ii,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===ii)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ba)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===ii)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ba)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new O,zn=new Ie,Y_=new O(0,0,0),K_=new O(1,1,1),zi=new O,ko=new O,yn=new O,Ah=new Ie,wh=new pn;class Wt{constructor(e=0,t=0,n=0,s=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $_=0;const Rh=new O,Ws=new pn,pi=new Ie,Ho=new O,zr=new O,Z_=new O,J_=new pn,Ch=new O(1,0,0),Ph=new O(0,1,0),Ih=new O(0,0,1),Dh={type:"added"},Q_={type:"removed"},Xs={type:"childadded",child:null},Bl={type:"childremoved",child:null};class St extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new O,t=new Wt,n=new pn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ye}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(zr,Ho,this.up):pi.lookAt(Ho,zr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(pi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q_),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new O(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new O,mi=new O,zl=new O,gi=new O,js=new O,qs=new O,Lh=new O,Vl=new O,kl=new O,Hl=new O,Gl=new ot,Wl=new ot,Xl=new ot;class Wn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),mi.subVectors(n,t),zl.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(mi),l=Vn.dot(zl),c=mi.dot(mi),u=mi.dot(zl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Gl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,n),Xl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gl,r.x),o.addScaledVector(Wl,r.y),o.addScaledVector(Xl,r.z),o}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),mi.subVectors(e,t),Vn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,n),qs.subVectors(r,n),Vl.subVectors(e,n);const l=js.dot(Vl),c=qs.dot(Vl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,s);const u=js.dot(kl),f=qs.dot(kl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(js,o);Hl.subVectors(e,r);const d=js.dot(Hl),m=qs.dot(Hl);if(m>=0&&d<=m)return t.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(qs,a);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Lh.subVectors(r,s),a=(f-u)/(f-u+(d-m)),t.copy(s).addScaledVector(Lh,a);const p=1/(g+x+h);return o=x*p,a=h*p,t.copy(n).addScaledVector(js,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=ef(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jl(o,r,e+1/3),this.g=jl(o,r,e),this.b=jl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=In){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return ft.workingToColorSpace(Yt.copy(this),e),Math.round($e(Yt.r*255,0,255))*65536+Math.round($e(Yt.g*255,0,255))*256+Math.round($e(Yt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=In){ft.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Go);const n=so(Vi.h,Go.h,t),s=so(Vi.s,Go.s,t),r=so(Vi.l,Go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ne;Ne.NAMES=lm;let ev=0;class xn extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=lr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bs extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new O,Wo=new ke;let tv=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pu,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}}class nf extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cm extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nv=0;const Rn=new Ie,ql=new St,Ys=new O,bn=new li,Vr=new li,kt=new O;class Ht extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?cm:nf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(bn.min,Vr.min),bn.expandByPoint(kt),kt.addVectors(bn.max,Vr.max),bn.expandByPoint(kt)):(bn.expandByPoint(Vr.min),bn.expandByPoint(Vr.max))}bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),kt.add(Ys)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new O,l[N]=new O;const c=new O,u=new O,f=new O,h=new ke,d=new ke,m=new ke,x=new O,g=new O;function p(N,A,v){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,v),h.fromBufferAttribute(r,N),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(U),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(U),a[N].add(x),a[A].add(x),a[v].add(x),l[N].add(g),l[A].add(g),l[v].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,A=b.length;N<A;++N){const v=b[N],U=v.start,k=v.count;for(let q=U,se=U+k;q<se;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new O,M=new O,R=new O,T=new O;function C(N){R.fromBufferAttribute(s,N),T.copy(R);const A=a[N];y.copy(A),y.sub(R.multiplyScalar(R.dot(A))).normalize(),M.crossVectors(T,A);const U=M.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,A=b.length;N<A;++N){const v=b[N],U=v.start,k=v.count;for(let q=U,se=U+k;q<se;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new on(h,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new Ie,fs=new Eo,Xo=new ci,Nh=new O,jo=new O,qo=new O,Yo=new O,Yl=new O,Ko=new O,Fh=new O,$o=new O;class Gt extends St{constructor(e=new Ht,t=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Yl.fromBufferAttribute(f,e),o?Ko.addScaledVector(Yl,u):Ko.addScaledVector(Yl.sub(t),u))}t.add(Ko)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Xo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Xo,Nh)===null||fs.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=b,R=y;M<R;M+=3){const T=a.getX(M),C=a.getX(M+1),N=a.getX(M+2);s=Zo(this,p,e,n,c,u,f,T,C,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const b=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);s=Zo(this,o,e,n,c,u,f,b,y,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=b,R=y;M<R;M+=3){const T=M,C=M+1,N=M+2;s=Zo(this,p,e,n,c,u,f,T,C,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const b=g,y=g+1,M=g+2;s=Zo(this,o,e,n,c,u,f,b,y,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function iv(i,e,t,n,s,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;$o.copy(a),$o.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($o);return c<t.near||c>t.far?null:{distance:c,point:$o.clone(),object:i}}function Zo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,jo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);const u=iv(i,e,t,n,jo,qo,Yo,Fh);if(u){const f=new O;Wn.getBarycoord(Fh,jo,qo,Yo,f),s&&(u.uv=Wn.getInterpolatedAttribute(s,a,l,c,f,new ke)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,a,l,c,f,new ke)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Wn.getNormal(jo,qo,Yo,h.normal),u.face=h,u.barycoord=f}return u}class Ao extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function m(x,g,p,b,y,M,R,T,C,N,A){const v=M/C,U=R/N,k=M/2,q=R/2,se=T/2,ie=C+1,Q=N+1;let ne=0,H=0;const fe=new O;for(let de=0;de<Q;de++){const we=de*U-q;for(let Oe=0;Oe<ie;Oe++){const Je=Oe*v-k;fe[x]=Je*b,fe[g]=we*y,fe[p]=se,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[g]=0,fe[p]=T>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Oe/C),f.push(1-de/N),ne+=1}}for(let de=0;de<N;de++)for(let we=0;we<C;we++){const Oe=h+we+ie*de,Je=h+we+ie*(de+1),rt=h+(we+1)+ie*(de+1),lt=h+(we+1)+ie*de;l.push(Oe,Je,lt),l.push(Je,rt,lt),H+=6}a.addGroup(d,H,A),d+=H,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const s in n)e[s]=n[s]}return e}function sv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function um(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const rv={clone:Sr,merge:sn};var ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ov,this.fragmentShader=av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fm extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new O,Oh=new ke,Bh=new ke;class Bt extends fm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,$s=1;class lv extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(Ks,$s,e,t);s.layers=this.layers,this.add(s);const r=new Bt(Ks,$s,e,t);r.layers=this.layers,this.add(r);const o=new Bt(Ks,$s,e,t);o.layers=this.layers,this.add(o);const a=new Bt(Ks,$s,e,t);a.layers=this.layers,this.add(a);const l=new Bt(Ks,$s,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Ks,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class hm extends Nt{constructor(e=[],t=vr,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cv extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ao(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:wi});r.uniforms.tEquirect.value=t;const o=new Gt(s,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Zt),new lv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class jn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fv extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pu,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new O;class sf{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zh=new O,Vh=new ot,kh=new ot,dv=new O,Hh=new Ie,Jo=new O,$l=new ci,Gh=new Ie,Zl=new Eo;class dm extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mh,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(s),e.ray.intersectsSphere($l)!==!1&&(Gh.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Gh),!(this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Vh.fromBufferAttribute(s.attributes.skinIndex,e),kh.fromBufferAttribute(s.attributes.skinWeight,e),zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=kh.getComponent(r);if(o!==0){const a=Vh.getComponent(r);Hh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dv.copy(zh).applyMatrix4(Hh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Va extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rf extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=gn,u=gn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new Ie,pv=new Ie;class al{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:pv;Wh.multiplyMatrices(a,t[r]),Wh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rf(t,e,e,Nn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Fe("Skeleton: No bone found with UUID:",r),o=new Va),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class mu extends on{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zs=new Ie,Xh=new Ie,Qo=[],jh=new li,mv=new Ie,kr=new Gt,Hr=new ci;class gv extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),jh.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(jh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Hr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Xh.multiplyMatrices(n,Zs),kr.matrixWorld=Xh,kr.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){const l=Qo[o];l.instanceId=r,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rf(new Float32Array(s*this.count),s,this.count,Ku,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jl=new O,xv=new O,_v=new Ye;class Yi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jl.subVectors(n,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_v.getNormalMatrix(e),s=this.coplanarPoint(Jl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new ci,vv=new ke(.5,.5),ea=new O;class of{constructor(e=new Yi,t=new Yi,n=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],y=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-o,d-u,p-m,R-b).normalize(),s[1].setComponents(c+o,d+u,p+m,R+b).normalize(),s[2].setComponents(c+a,d+f,p+x,R+y).normalize(),s[3].setComponents(c-a,d-f,p-x,R-y).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,d-h,p-g,R-M).normalize();else if(s[4].setComponents(c-l,d-h,p-g,R-M).normalize(),t===ii)s[5].setComponents(c+l,d+h,p+g,R+M).normalize();else if(t===Ba)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=vv.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ea.x=s.normal.x>0?e.max.x:e.min.x,ea.y=s.normal.y>0?e.max.y:e.min.y,ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ur extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new O,Ha=new O,qh=new Ie,Gr=new Eo,ta=new ci,Ql=new O,Yh=new O;class ll extends St{constructor(e=new Ht,t=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ka.fromBufferAttribute(t,s-1),Ha.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ka.distanceTo(Ha);e.setAttribute("lineDistance",new At(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;qh.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=u.getX(x),b=u.getX(x+1),y=na(this,e,Gr,l,p,b,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(d),p=na(this,e,Gr,l,x,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=na(this,e,Gr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=na(this,e,Gr,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function na(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(ka.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),t.distanceSqToSegment(ka,Ha,Ql,Yh)>n)return;Ql.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ql);if(!(c<e.near||c>e.far))return{distance:c,point:Yh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Kh=new O,$h=new O;class gu extends ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kh.fromBufferAttribute(t,s),$h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kh.distanceTo($h);e.setAttribute("lineDistance",new At(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yv extends ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nr extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zh=new Ie,xu=new Eo,ia=new ci,sa=new O;class Ma extends St{constructor(e=new Ht,t=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,e.ray.intersectsSphere(ia)===!1)return;Zh.copy(s).invert(),xu.copy(e.ray).applyMatrix4(Zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,x=d;m<x;m++){const g=c.getX(m);sa.fromBufferAttribute(f,g),Jh(sa,g,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,x=d;m<x;m++)sa.fromBufferAttribute(f,m),Jh(sa,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jh(i,e,t,n,s,r,o){const a=xu.distanceSqToPoint(i);if(a<t){const l=new O;xu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class pm extends Nt{constructor(e,t,n=Rs,s,r,o,a=gn,l=gn,c,u=mo,f=1){if(u!==mo&&u!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mm extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class af extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const y=new O,M=new O,R=new O;for(let T=0;T<t.length;T+=3)d(t[T+0],y),d(t[T+1],M),d(t[T+2],R),l(y,M,R,b)}function l(b,y,M,R){const T=R+1,C=[];for(let N=0;N<=T;N++){C[N]=[];const A=b.clone().lerp(M,N/T),v=y.clone().lerp(M,N/T),U=T-N;for(let k=0;k<=U;k++)k===0&&N===T?C[N][k]=A:C[N][k]=A.clone().lerp(v,k/U)}for(let N=0;N<T;N++)for(let A=0;A<2*(T-N)-1;A++){const v=Math.floor(A/2);A%2===0?(h(C[N][v+1]),h(C[N+1][v]),h(C[N][v])):(h(C[N][v+1]),h(C[N+1][v+1]),h(C[N+1][v]))}}function c(b){const y=new O;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(b),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const b=new O;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const M=g(b)/2/Math.PI+.5,R=p(b)/Math.PI+.5;o.push(M,1-R)}m(),f()}function f(){for(let b=0;b<o.length;b+=6){const y=o[b+0],M=o[b+2],R=o[b+4],T=Math.max(y,M,R),C=Math.min(y,M,R);T>.9&&C<.1&&(y<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function d(b,y){const M=b*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){const b=new O,y=new O,M=new O,R=new O,T=new ke,C=new ke,N=new ke;for(let A=0,v=0;A<r.length;A+=9,v+=6){b.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),T.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),N.set(o[v+4],o[v+5]),R.copy(b).add(y).add(M).divideScalar(3);const U=g(R);x(T,v+0,b,U),x(C,v+2,y,U),x(N,v+4,M,U)}}function x(b,y,M,R){R<0&&b.x===1&&(o[y]=b.x-1),M.x===0&&M.z===0&&(o[y]=R/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.vertices,e.indices,e.radius,e.details)}}class bv{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ke:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,s=[],r=[],o=[],a=new O,l=new Ie;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lf extends af{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lf(e.radius,e.detail)}}class Us extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){const b=p*h-o;for(let y=0;y<c;y++){const M=y*f-r;m.push(M,-b,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const y=b+c*p,M=b+c*(p+1),R=b+1+c*(p+1),T=b+1+c*p;d.push(y,M,T),d.push(M,R,T)}this.setIndex(d),this.setAttribute("position",new At(m,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}class cf extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends cf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sa extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mv extends xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sv extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tv extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ra(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ev(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Av(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function gm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class wo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wv extends wo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=e,a=2*t-n;break;case _h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=e,l=2*n-t;break;case _h:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,b=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,M=d*g-d*x;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+b*o[c+R]+y*o[l+R]+M*o[f+R];return r}}class Rv extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class Cv extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){nt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ev(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){const x=t[f+m];if(x!==t[h+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=_o;class Pr extends Zn{constructor(e,t,n){super(e,t,n)}}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=xo;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class xm extends Zn{constructor(e,t,n,s){super(e,t,n,s)}}xm.prototype.ValueTypeName="color";class Ps extends Zn{constructor(e,t,n,s){super(e,t,n,s)}}Ps.prototype.ValueTypeName="number";class Pv extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Is extends Zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Pv(this.times,this.values,this.getValueSize(),e)}}Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Zn{constructor(e,t,n){super(e,t,n)}}Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=xo;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Zn{constructor(e,t,n,s){super(e,t,n,s)}}Ds.prototype.ValueTypeName="vector";class _m{constructor(e="",t=-1,n=[],s=f_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dv(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Av(l);l=Qh(l,1,u),c=Qh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(Fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return nt("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,m,x){if(d.length!==0){const g=[],p=[];gm(d,g,p,m),g.length!==0&&x.push(new f(h,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let x=0;x<h[m].morphTargets.length;x++)d[h[m].morphTargets[x]]=-1;for(const x in d){const g=[],p=[];for(let b=0;b!==h[m].morphTargets.length;++b){const y=h[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ps(".morphTargetInfluence["+x+"]",g,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(Ds,d+".position",h,"pos",s),n(Is,d+".quaternion",h,"rot",s),n(Ds,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Iv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return xm;case"quaternion":return Is;case"bool":case"boolean":return Pr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Iv(i.type);if(i.times===void 0){const t=[],n=[];gm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lv{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Uv=new Lv;class ns{constructor(e){this.manager=e!==void 0?e:Uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class Nv extends Error{constructor(e,t){super(e),this.response=t}}class cl extends ns{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ai.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:s});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let x=0;const g=new ReadableStream({start(p){b();function b(){f.read().then(({done:y,value:M})=>{if(y)p.close();else{x+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let T=0,C=u.length;T<C;T++){const N=u[T];N.onProgress&&N.onProgress(R)}p.enqueue(M),b()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Nv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Ai.add(`file:${e}`,c);const u=xi[e];delete xi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Js=new WeakMap;class Fv extends ns{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Js.get(o);f===void 0&&(f=[],Js.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=vo("img");function l(){u(),t&&t(this);const f=Js.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Js.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Ai.remove(`image:${e}`);const h=Js.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(f)}Js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class uf extends ns{constructor(e){super(e)}load(e,t,n,s){const r=new Nt,o=new Fv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ul extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ec=new Ie,ed=new O,td=new O;class ff{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ov extends ff{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vm extends ul{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ov}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nd=new Ie,Wr=new O,tc=new O;class Bv extends ff{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wr),tc.copy(n.position),tc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tc),n.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,n.coordinateSystem,n.reversedDepth)}}class _u extends ul{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class As extends fm{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zv extends ff{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ym extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new zv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vv extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const nc=new WeakMap;class kv extends ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(nc.has(o)===!0)s&&s(nc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),nc.set(l,c),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Hv extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hf="\\[\\]\\.:\\/",Gv=new RegExp("["+hf+"]","g"),df="[^"+hf+"]",Wv="[^"+hf.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",df),jv=/(WCOD+)?/.source.replace("WCOD",Wv),qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),Yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),Kv=new RegExp("^"+Xv+jv+qv+Yv+"$"),$v=["material","materials","bones","map"];class Zv{constructor(e,t,n){const s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gv,"")}static parseTrackName(e){const t=Kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);$v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Zv;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class id{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function sd(i,e,t,n){const s=Jv(n);switch(t){case tm:return i*e;case Ku:return i*e/s.components*s.byteLength;case $u:return i*e/s.components*s.byteLength;case Zu:return i*e*2/s.components*s.byteLength;case Ju:return i*e*2/s.components*s.byteLength;case nm:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case Qu:return i*e*4/s.components*s.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Hc:return Math.max(i,16)*Math.max(e,8)/4;case zc:case kc:return Math.max(i,8)*Math.max(e,8)/2;case Gc:case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case su:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ru:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ou:case au:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cu:case uu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fu:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(i){switch(i){case ai:case Zp:return{byteLength:1,components:1};case ho:case Jp:case Rr:return{byteLength:2,components:1};case qu:case Yu:return{byteLength:2,components:4};case Rs:case ju:case Xn:return{byteLength:4,components:1};case Qp:case em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function bm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ty=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:sy,alphatest_pars_fragment:ry,aomap_fragment:oy,aomap_pars_fragment:ay,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:uy,beginnormal_vertex:fy,bsdfs:hy,iridescence_fragment:dy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:_y,color_fragment:vy,color_pars_fragment:yy,color_pars_vertex:by,color_vertex:My,common:Sy,cube_uv_reflection_fragment:Ty,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Ay,displacementmap_vertex:wy,emissivemap_fragment:Ry,emissivemap_pars_fragment:Cy,colorspace_fragment:Py,colorspace_pars_fragment:Iy,envmap_fragment:Dy,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Uy,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:jy,envmap_vertex:Fy,fog_vertex:Oy,fog_pars_vertex:By,fog_fragment:zy,fog_pars_fragment:Vy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:qy,lights_toon_pars_fragment:Yy,lights_phong_fragment:Ky,lights_phong_pars_fragment:$y,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:Qy,lights_fragment_maps:eb,lights_fragment_end:tb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:rb,map_fragment:ob,map_pars_fragment:ab,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:xb,normal_fragment_maps:_b,normal_pars_fragment:vb,normal_pars_vertex:yb,normal_vertex:bb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Tb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:Ab,opaque_fragment:wb,packing:Rb,premultiplied_alpha_fragment:Cb,project_vertex:Pb,dithering_fragment:Ib,dithering_pars_fragment:Db,roughnessmap_fragment:Lb,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Fb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Bb,skinbase_vertex:zb,skinning_pars_vertex:Vb,skinning_vertex:kb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Wb,tonemapping_fragment:Xb,tonemapping_pars_fragment:jb,transmission_fragment:qb,transmission_pars_fragment:Yb,uv_pars_fragment:Kb,uv_pars_vertex:$b,uv_vertex:Zb,worldpos_vertex:Jb,background_vert:Qb,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:sM,depth_vert:rM,depth_frag:oM,distanceRGBA_vert:aM,distanceRGBA_frag:lM,equirect_vert:cM,equirect_frag:uM,linedashed_vert:fM,linedashed_frag:hM,meshbasic_vert:dM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:xM,meshmatcap_frag:_M,meshnormal_vert:vM,meshnormal_frag:yM,meshphong_vert:bM,meshphong_frag:MM,meshphysical_vert:SM,meshphysical_frag:TM,meshtoon_vert:EM,meshtoon_frag:AM,points_vert:wM,points_frag:RM,shadow_vert:CM,shadow_frag:PM,sprite_vert:IM,sprite_frag:DM},be={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ni={basic:{uniforms:sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:sn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:sn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:sn([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:sn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:sn([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:sn([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:sn([be.common,be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:sn([be.lights,be.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const oa={r:0,b:0,g:0},ds=new Wt,LM=new Ie;function UM(i,e,t,n,s,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function m(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function x(y){let M=!1;const R=m(y);R===null?p(a,l):R&&R.isColor&&(p(R,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,M){const R=m(M);R&&(R.isCubeTexture||R.mapping===rl)?(u===void 0&&(u=new Gt(new Ao(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Sr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ds.copy(M.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(ds)),u.material.toneMapped=ft.getTransfer(R.colorSpace)!==vt,(f!==R||h!==R.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Gt(new Us(2,2),new Qt({name:"BackgroundMaterial",uniforms:Sr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ft.getTransfer(R.colorSpace)!==vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(oa,um(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,M,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g,dispose:b}}function NM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,U,k,q,se){let ie=!1;const Q=f(q,k,U);r!==Q&&(r=Q,c(r.object)),ie=d(v,q,k,se),ie&&m(v,q,k,se),se!==null&&e.update(se,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,M(v,U,k,q),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,U,k){const q=k.wireframe===!0;let se=n[v.id];se===void 0&&(se={},n[v.id]=se);let ie=se[U.id];ie===void 0&&(ie={},se[U.id]=ie);let Q=ie[q];return Q===void 0&&(Q=h(l()),ie[q]=Q),Q}function h(v){const U=[],k=[],q=[];for(let se=0;se<t;se++)U[se]=0,k[se]=0,q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:q,object:v,attributes:{},index:null}}function d(v,U,k,q){const se=r.attributes,ie=U.attributes;let Q=0;const ne=k.getAttributes();for(const H in ne)if(ne[H].location>=0){const de=se[H];let we=ie[H];if(we===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;Q++}return r.attributesNum!==Q||r.index!==q}function m(v,U,k,q){const se={},ie=U.attributes;let Q=0;const ne=k.getAttributes();for(const H in ne)if(ne[H].location>=0){let de=ie[H];de===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const we={};we.attribute=de,de&&de.data&&(we.data=de.data),se[H]=we,Q++}r.attributes=se,r.attributesNum=Q,r.index=q}function x(){const v=r.newAttributes;for(let U=0,k=v.length;U<k;U++)v[U]=0}function g(v){p(v,0)}function p(v,U){const k=r.newAttributes,q=r.enabledAttributes,se=r.attributeDivisors;k[v]=1,q[v]===0&&(i.enableVertexAttribArray(v),q[v]=1),se[v]!==U&&(i.vertexAttribDivisor(v,U),se[v]=U)}function b(){const v=r.newAttributes,U=r.enabledAttributes;for(let k=0,q=U.length;k<q;k++)U[k]!==v[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function y(v,U,k,q,se,ie,Q){Q===!0?i.vertexAttribIPointer(v,U,k,se,ie):i.vertexAttribPointer(v,U,k,q,se,ie)}function M(v,U,k,q){x();const se=q.attributes,ie=k.getAttributes(),Q=U.defaultAttributeValues;for(const ne in ie){const H=ie[ne];if(H.location>=0){let fe=se[ne];if(fe===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){const de=fe.normalized,we=fe.itemSize,Oe=e.get(fe);if(Oe===void 0)continue;const Je=Oe.buffer,rt=Oe.type,lt=Oe.bytesPerElement,te=rt===i.INT||rt===i.UNSIGNED_INT||fe.gpuType===ju;if(fe.isInterleavedBufferAttribute){const oe=fe.data,Me=oe.stride,Xe=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<H.locationSize;De++)p(H.location+De,oe.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<H.locationSize;De++)g(H.location+De);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let De=0;De<H.locationSize;De++)y(H.location+De,we/H.locationSize,rt,de,Me*lt,(Xe+we/H.locationSize*De)*lt,te)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,fe.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<H.locationSize;oe++)g(H.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,we/H.locationSize,rt,de,we*lt,we/H.locationSize*oe*lt,te)}}else if(Q!==void 0){const de=Q[ne];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(H.location,de);break;case 3:i.vertexAttrib3fv(H.location,de);break;case 4:i.vertexAttrib4fv(H.location,de);break;default:i.vertexAttrib1fv(H.location,de)}}}}b()}function R(){N();for(const v in n){const U=n[v];for(const k in U){const q=U[k];for(const se in q)u(q[se].object),delete q[se];delete U[k]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const U=n[v.id];for(const k in U){const q=U[k];for(const se in q)u(q[se].object),delete q[se];delete U[k]}delete n[v.id]}function C(v){for(const U in n){const k=n[U];if(k[v.id]===void 0)continue;const q=k[v.id];for(const se in q)u(q[se].object),delete q[se];delete k[v.id]}}function N(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:A,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function FM(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x]*h[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ai&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:R,maxSamples:T}}function BM(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Yi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const b=r?0:n,y=b*4;let M=p.clippingState||null;l.value=M,M=u(m,h,y,d);for(let R=0;R!==y;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=d;y!==x;++y,M+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function zM(i){let e=new WeakMap;function t(o,a){return a===Na?o.mapping=vr:a===Bc&&(o.mapping=yr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===Bc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cv(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const $i=4,rd=[.125,.215,.35,.446,.526,.582],ys=20,VM=256,Xr=new As,od=new Ne;let ic=null,sc=0,rc=0,oc=!1;const kM=new O;class ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=kM}=r;ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=oc,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Rr,format:Nn,colorSpace:br,depthBuffer:!1},s=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HM(r)),this._blurMaterial=WM(r,e,t),this._ggxMaterial=GM(r,e,t)}return s}_compileMaterial(e){const t=new Gt(new Ht,e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,s,r){const l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(od),f.toneMapping=Qi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Ao,new bs({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(od),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const R=this._cubeSize;Qs(s,M*R,y>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vr||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-$i?n-m+$i:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Qs(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Qs(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Xr)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):ys;g>ys&&Fe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);const p=[];let b=0;for(let C=0;C<ys;++C){const N=C/x,A=Math.exp(-N*N/2);p.push(A),C===0?b+=A:C<g&&(b+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const M=this._sizeLods[s],R=3*M*(s>y-$i?s-y+$i:0),T=4*(this._cubeSize-M);Qs(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Xr)}}function HM(i){const e=[],t=[],n=[];let s=i;const r=i-$i+1+rd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-$i?l=rd[o-i+$i-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*d),y=new Float32Array(g*m*d),M=new Float32Array(p*m*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,N=T>2?0:-1,A=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];b.set(A,x*m*T),y.set(h,g*m*T);const v=[T,T,T,T,T,T];M.set(v,p*m*T)}const R=new Ht;R.setAttribute("position",new on(b,x)),R.setAttribute("uv",new on(y,g)),R.setAttribute("faceIndex",new on(M,p)),n.push(new Gt(R,null)),s>$i&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ld(i,e,t){const n=new Cs(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function GM(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function WM(i,e,t){const n=new Float32Array(ys),s=new O(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function cd(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ud(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Na||l===Bc,u=l===vr||l===yr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ad(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ad(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yo("WebGLRenderer: "+n+" extension not supported."),s}}}function qM(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let y=0,M=b.length;y<M;y+=3){const R=b[y+0],T=b[y+1],C=b[y+2];h.push(R,T,T,C,C,R)}}else if(m!==void 0){const b=m.array;x=m.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const R=y+0,T=y+1,C=y+2;h.push(R,T,T,C,C,R)}}else return;const g=new(rm(h)?cm:nf)(h,1);g.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function YM(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function c(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,h*o,m),t.update(d,n,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function f(h,d,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*x[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function KM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $M(i,e,t){const n=new WeakMap,s=new ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let R=a.attributes.position.count*M,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*T*4*f),N=new om(C,R,T,f);N.type=Xn,N.needsUpdate=!0;const A=M*4;for(let U=0;U<f;U++){const k=p[U],q=b[U],se=y[U],ie=R*T*4*U;for(let Q=0;Q<k.count;Q++){const ne=Q*A;m===!0&&(s.fromBufferAttribute(k,Q),C[ie+ne+0]=s.x,C[ie+ne+1]=s.y,C[ie+ne+2]=s.z,C[ie+ne+3]=0),x===!0&&(s.fromBufferAttribute(q,Q),C[ie+ne+4]=s.x,C[ie+ne+5]=s.y,C[ie+ne+6]=s.z,C[ie+ne+7]=0),g===!0&&(s.fromBufferAttribute(se,Q),C[ie+ne+8]=s.x,C[ie+ne+9]=s.y,C[ie+ne+10]=s.z,C[ie+ne+11]=se.itemSize===4?s.w:1)}}h={count:f,texture:N,size:new ke(R,T)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ZM(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Mm=new Nt,fd=new pm(1,1),Sm=new om,Tm=new j_,Em=new hm,hd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hl(i,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function JM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function QM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function eS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function tS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function nS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),Vt(t,n)}}function iS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),Vt(t,n)}}function sS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),Vt(t,n)}}function rS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function lS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function cS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function hS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function dS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fd.compareFunction=sm,r=fd):r=Mm,t.setTexture2D(e||r,s)}function pS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tm,s)}function mS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Em,s)}function gS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sm,s)}function xS(i){switch(i){case 5126:return JM;case 35664:return QM;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return sS;case 5124:case 35670:return rS;case 35667:case 35671:return oS;case 35668:case 35672:return aS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return fS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}function _S(i,e){i.uniform1fv(this.addr,e)}function vS(i,e){const t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function yS(i,e){const t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function bS(i,e){const t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function MS(i,e){const t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SS(i,e){const t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TS(i,e){const t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ES(i,e){i.uniform1iv(this.addr,e)}function AS(i,e){i.uniform2iv(this.addr,e)}function wS(i,e){i.uniform3iv(this.addr,e)}function RS(i,e){i.uniform4iv(this.addr,e)}function CS(i,e){i.uniform1uiv(this.addr,e)}function PS(i,e){i.uniform2uiv(this.addr,e)}function IS(i,e){i.uniform3uiv(this.addr,e)}function DS(i,e){i.uniform4uiv(this.addr,e)}function LS(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mm,r[o])}function US(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tm,r[o])}function NS(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Em,r[o])}function FS(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sm,r[o])}function OS(i){switch(i){case 5126:return _S;case 35664:return vS;case 35665:return yS;case 35666:return bS;case 35674:return MS;case 35675:return SS;case 35676:return TS;case 5124:case 35670:return ES;case 35667:case 35671:return AS;case 35668:case 35672:return wS;case 35669:case 35673:return RS;case 5125:return CS;case 36294:return PS;case 36295:return IS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return FS}}class BS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xS(t.type)}}class zS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OS(t.type)}}class VS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function xd(i,e){i.seq.push(e),i.map[e.id]=e}function kS(i,e,t){const n=i.name,s=n.length;for(ac.lastIndex=0;;){const r=ac.exec(n),o=ac.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xd(t,c===void 0?new BS(a,i,e):new zS(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new VS(a),xd(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kS(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function _d(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const HS=37297;let GS=0;function WS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const vd=new Ye;function XS(i){ft._getMatrix(vd,ft.workingColorSpace,i);const e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Oa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+WS(i.getShaderSource(e),a)}else return r}function jS(i,e){const t=XS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qS(i,e){let t;switch(e){case i_:t="Linear";break;case s_:t="Reinhard";break;case r_:t="Cineon";break;case o_:t="ACESFilmic";break;case l_:t="AgX";break;case c_:t="Neutral";break;case a_:t="Custom";break;default:Fe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const aa=new O;function YS(){ft.getLuminanceCoefficients(aa);const i=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function $S(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ZS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Kr(i){return i!==""}function bd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(i){return i.replace(JS,e1)}const QS=new Map;function e1(i,e){let t=Ze[e];if(t===void 0){const n=QS.get(e);if(n!==void 0)t=Ze[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vu(t)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(t1,n1)}function n1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function s1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vr:case yr:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function o1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case t_:e="ENVMAP_BLENDING_MIX";break;case n_:e="ENVMAP_BLENDING_ADD";break}return e}function a1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l1(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=i1(t),c=s1(t),u=r1(t),f=o1(t),h=a1(t),d=KS(t),m=$S(r),x=s.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Kr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(g=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Qi?qS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,jS("linearToOutputTexel",t.outputColorSpace),YS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=vu(o),o=bd(o,t),o=Md(o,t),a=vu(a),a=bd(a,t),a=Md(a,t),o=Sd(o),a=Sd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+g+o,M=b+p+a,R=_d(s,s.VERTEX_SHADER,y),T=_d(s,s.FRAGMENT_SHADER,M);s.attachShader(x,R),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(U){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(R)||"",se=s.getShaderInfoLog(T)||"",ie=k.trim(),Q=q.trim(),ne=se.trim();let H=!0,fe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,T);else{const de=yd(s,R,"vertex"),we=yd(s,T,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ie+`
`+de+`
`+we)}else ie!==""?Fe("WebGLProgram: Program Info Log:",ie):(Q===""||ne==="")&&(fe=!1);fe&&(U.diagnostics={runnable:H,programLog:ie,vertexShader:{log:Q,prefix:g},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(R),s.deleteShader(T),N=new Ta(s,x),A=ZS(s,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,HS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f1(e),t.set(e,n)),n}}class f1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function h1(i,e,t,n,s,r,o){const a=new am,l=new u1,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,v,U,k,q){const se=k.fog,ie=q.geometry,Q=A.isMeshStandardMaterial?k.environment:null,ne=(A.isMeshStandardMaterial?t:e).get(A.envMap||Q),H=ne&&ne.mapping===rl?ne.image.height:null,fe=m[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&Fe("WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const de=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,we=de!==void 0?de.length:0;let Oe=0;ie.morphAttributes.position!==void 0&&(Oe=1),ie.morphAttributes.normal!==void 0&&(Oe=2),ie.morphAttributes.color!==void 0&&(Oe=3);let Je,rt,lt,te;if(fe){const at=ni[fe];Je=at.vertexShader,rt=at.fragmentShader}else Je=A.vertexShader,rt=A.fragmentShader,l.update(A),lt=l.getVertexShaderID(A),te=l.getFragmentShaderID(A);const oe=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Xe=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,Qe=!!A.map,P=!!A.matcap,L=!!ne,G=!!A.aoMap,w=!!A.lightMap,$=!!A.bumpMap,Z=!!A.normalMap,ce=!!A.displacementMap,Y=!!A.emissiveMap,ae=!!A.metalnessMap,W=!!A.roughnessMap,ue=A.anisotropy>0,S=A.clearcoat>0,_=A.dispersion>0,F=A.iridescence>0,j=A.sheen>0,ee=A.transmission>0,V=ue&&!!A.anisotropyMap,Se=S&&!!A.clearcoatMap,ge=S&&!!A.clearcoatNormalMap,Ce=S&&!!A.clearcoatRoughnessMap,Ee=F&&!!A.iridescenceMap,le=F&&!!A.iridescenceThicknessMap,ve=j&&!!A.sheenColorMap,Re=j&&!!A.sheenRoughnessMap,D=!!A.specularMap,X=!!A.specularColorMap,he=!!A.specularIntensityMap,I=ee&&!!A.transmissionMap,pe=ee&&!!A.thicknessMap,xe=!!A.gradientMap,_e=!!A.alphaMap,me=A.alphaTest>0,re=!!A.alphaHash,Te=!!A.extensions;let Be=Qi;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Be=i.toneMapping);const dt={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:Je,fragmentShader:rt,defines:A.defines,customVertexShaderID:lt,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&q.instanceColor!==null,instancingMorph:Xe&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:br,alphaToCoverage:!!A.alphaToCoverage,map:Qe,matcap:P,envMap:L,envMapMode:L&&ne.mapping,envMapCubeUVHeight:H,aoMap:G,lightMap:w,bumpMap:$,normalMap:Z,displacementMap:h&&ce,emissiveMap:Y,normalMapObjectSpace:Z&&A.normalMapType===m_,normalMapTangentSpace:Z&&A.normalMapType===ol,metalnessMap:ae,roughnessMap:W,anisotropy:ue,anisotropyMap:V,clearcoat:S,clearcoatMap:Se,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:F,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:j,sheenColorMap:ve,sheenRoughnessMap:Re,specularMap:D,specularColorMap:X,specularIntensityMap:he,transmission:ee,transmissionMap:I,thicknessMap:pe,gradientMap:xe,opaque:A.transparent===!1&&A.blending===lr&&A.alphaToCoverage===!1,alphaMap:_e,alphaTest:me,alphaHash:re,combine:A.combine,mapUv:Qe&&x(A.map.channel),aoMapUv:G&&x(A.aoMap.channel),lightMapUv:w&&x(A.lightMap.channel),bumpMapUv:$&&x(A.bumpMap.channel),normalMapUv:Z&&x(A.normalMap.channel),displacementMapUv:ce&&x(A.displacementMap.channel),emissiveMapUv:Y&&x(A.emissiveMap.channel),metalnessMapUv:ae&&x(A.metalnessMap.channel),roughnessMapUv:W&&x(A.roughnessMap.channel),anisotropyMapUv:V&&x(A.anisotropyMap.channel),clearcoatMapUv:Se&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(A.sheenRoughnessMap.channel),specularMapUv:D&&x(A.specularMap.channel),specularColorMapUv:X&&x(A.specularColorMap.channel),specularIntensityMapUv:he&&x(A.specularIntensityMap.channel),transmissionMapUv:I&&x(A.transmissionMap.channel),thicknessMapUv:pe&&x(A.thicknessMap.channel),alphaMapUv:_e&&x(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Z||ue),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ie.attributes.uv&&(Qe||_e),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:q.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Qe&&A.map.isVideoTexture===!0&&ft.getTransfer(A.map.colorSpace)===vt,decodeVideoTextureEmissive:Y&&A.emissiveMap.isVideoTexture===!0&&ft.getTransfer(A.emissiveMap.colorSpace)===vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===dn,flipSided:A.side===mn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Te&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&A.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(A){const v=[];if(A.shaderID?v.push(A.shaderID):(v.push(A.customVertexShaderID),v.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)v.push(U),v.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(b(v,A),y(v,A),v.push(i.outputColorSpace)),v.push(A.customProgramCacheKey),v.join()}function b(A,v){A.push(v.precision),A.push(v.outputColorSpace),A.push(v.envMapMode),A.push(v.envMapCubeUVHeight),A.push(v.mapUv),A.push(v.alphaMapUv),A.push(v.lightMapUv),A.push(v.aoMapUv),A.push(v.bumpMapUv),A.push(v.normalMapUv),A.push(v.displacementMapUv),A.push(v.emissiveMapUv),A.push(v.metalnessMapUv),A.push(v.roughnessMapUv),A.push(v.anisotropyMapUv),A.push(v.clearcoatMapUv),A.push(v.clearcoatNormalMapUv),A.push(v.clearcoatRoughnessMapUv),A.push(v.iridescenceMapUv),A.push(v.iridescenceThicknessMapUv),A.push(v.sheenColorMapUv),A.push(v.sheenRoughnessMapUv),A.push(v.specularMapUv),A.push(v.specularColorMapUv),A.push(v.specularIntensityMapUv),A.push(v.transmissionMapUv),A.push(v.thicknessMapUv),A.push(v.combine),A.push(v.fogExp2),A.push(v.sizeAttenuation),A.push(v.morphTargetsCount),A.push(v.morphAttributeCount),A.push(v.numDirLights),A.push(v.numPointLights),A.push(v.numSpotLights),A.push(v.numSpotLightMaps),A.push(v.numHemiLights),A.push(v.numRectAreaLights),A.push(v.numDirLightShadows),A.push(v.numPointLightShadows),A.push(v.numSpotLightShadows),A.push(v.numSpotLightShadowsWithMaps),A.push(v.numLightProbes),A.push(v.shadowMapType),A.push(v.toneMapping),A.push(v.numClippingPlanes),A.push(v.numClipIntersection),A.push(v.depthPacking)}function y(A,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const v=m[A.type];let U;if(v){const k=ni[v];U=rv.clone(k.uniforms)}else U=A.uniforms;return U}function R(A,v){let U;for(let k=0,q=u.length;k<q;k++){const se=u[k];if(se.cacheKey===v){U=se,++U.usedTimes;break}}return U===void 0&&(U=new l1(i,v,A,r),u.push(U)),U}function T(A){if(--A.usedTimes===0){const v=u.indexOf(A);u[v]=u[u.length-1],u.pop(),A.destroy()}}function C(A){l.remove(A)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:N}}function d1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function p1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,d,m,x,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),e++,p}function a(f,h,d,m,x,g){const p=o(f,h,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,m,x,g){const p=o(f,h,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||p1),n.length>1&&n.sort(h||Ed),s.length>1&&s.sort(h||Ed)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function m1(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ad,i.set(n,[o])):s>=r.length?(o=new Ad,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function g1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ne};break;case"SpotLight":t={position:new O,direction:new O,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function x1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _1=0;function v1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y1(i){const e=new g1,t=x1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new Ie,o=new Ie;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,b=0,y=0,M=0,R=0,T=0,C=0;c.sort(v1);for(let A=0,v=c.length;A<v;A++){const U=c[A],k=U.color,q=U.intensity,se=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=k.r*q,f+=k.g*q,h+=k.b*q;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],q);C++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ne=U.shadow,H=t.get(U);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=ie,n.directionalShadowMatrix[d]=U.shadow.matrix,b++}n.directional[d]=Q,d++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(k).multiplyScalar(q),Q.distance=se,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[x]=Q;const ne=U.shadow;if(U.map&&(n.spotLightMap[R]=U.map,R++,ne.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[x]=ne.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=ie,M++}x++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(k).multiplyScalar(q),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=Q,g++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ne=U.shadow,H=t.get(U);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=ie,n.pointShadowMatrix[m]=U.shadow.matrix,y++}n.point[m]=Q,m++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(q),Q.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[p]=Q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==d||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==y||N.numSpotShadows!==M||N.numSpotMaps!==R||N.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,N.directionalLength=d,N.pointLength=m,N.spotLength=x,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=y,N.numSpotShadows=M,N.numSpotMaps=R,N.numLightProbes=C,n.version=_1++)}function l(c,u){let f=0,h=0,d=0,m=0,x=0;const g=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function wd(i){const e=new y1(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function b1(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new wd(i),e.set(s,[a])):r>=o.length?(a=new wd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T1(i,e,t){let n=new of;const s=new ke,r=new ke,o=new ot,a=new Sv({depthPacking:p_}),l=new Tv,c={},u=t.maxTextureSize,f={[Ui]:mn,[mn]:Ui,[dn]:dn},h=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:M1,fragmentShader:S1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ht;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yp;let p=this.type;this.render=function(T,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const A=i.getRenderTarget(),v=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(wi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=p!==vi&&this.type===vi,se=p===vi&&this.type!==vi;for(let ie=0,Q=T.length;ie<Q;ie++){const ne=T[ie],H=ne.shadow;if(H===void 0){Fe("WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const fe=H.getFrameExtents();if(s.multiply(fe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,H.mapSize.y=r.y)),H.map===null||q===!0||se===!0){const we=this.type!==vi?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new Cs(s.x,s.y,we),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const de=H.getViewportCount();for(let we=0;we<de;we++){const Oe=H.getViewport(we);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),k.viewport(o),H.updateMatrices(ne,we),n=H.getFrustum(),M(C,N,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===vi&&b(H,N),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,v,U)};function b(T,C){const N=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,N,h,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,N,d,x,null)}function y(T,C,N,A){let v=null;const U=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)v=U;else if(v=N.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=v.uuid,q=C.uuid;let se=c[k];se===void 0&&(se={},c[k]=se);let ie=se[q];ie===void 0&&(ie=v.clone(),se[q]=ie,C.addEventListener("dispose",R)),v=ie}if(v.visible=C.visible,v.wireframe=C.wireframe,A===vi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=i.properties.get(v);k.light=N}return v}function M(T,C,N,A,v){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===vi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const q=e.update(T),se=T.material;if(Array.isArray(se)){const ie=q.groups;for(let Q=0,ne=ie.length;Q<ne;Q++){const H=ie[Q],fe=se[H.materialIndex];if(fe&&fe.visible){const de=y(T,fe,A,v);T.onBeforeShadow(i,T,C,N,q,de,H),i.renderBufferDirect(N,null,q,de,T,H),T.onAfterShadow(i,T,C,N,q,de,H)}}}else if(se.visible){const ie=y(T,se,A,v);T.onBeforeShadow(i,T,C,N,q,ie,null),i.renderBufferDirect(N,null,q,ie,T,null),T.onAfterShadow(i,T,C,N,q,ie,null)}}const k=T.children;for(let q=0,se=k.length;q<se;q++)M(k[q],C,N,A,v)}function R(T){T.target.removeEventListener("dispose",R);for(const N in c){const A=c[N],v=T.target.uuid;v in A&&(A[v].dispose(),delete A[v])}}}const E1={[Ic]:Dc,[Lc]:Fc,[Uc]:Oc,[_r]:Nc,[Dc]:Ic,[Fc]:Lc,[Oc]:Uc,[Nc]:_r};function A1(i,e){function t(){let I=!1;const pe=new ot;let xe=null;const _e=new ot(0,0,0,0);return{setMask:function(me){xe!==me&&!I&&(i.colorMask(me,me,me,me),xe=me)},setLocked:function(me){I=me},setClear:function(me,re,Te,Be,dt){dt===!0&&(me*=Be,re*=Be,Te*=Be),pe.set(me,re,Te,Be),_e.equals(pe)===!1&&(i.clearColor(me,re,Te,Be),_e.copy(pe))},reset:function(){I=!1,xe=null,_e.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,xe=null,_e=null,me=null;return{setReversed:function(re){if(pe!==re){const Te=e.get("EXT_clip_control");re?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const Be=me;me=null,this.setClear(Be)}},getReversed:function(){return pe},setTest:function(re){re?oe(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(re){xe!==re&&!I&&(i.depthMask(re),xe=re)},setFunc:function(re){if(pe&&(re=E1[re]),_e!==re){switch(re){case Ic:i.depthFunc(i.NEVER);break;case Dc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Fc:i.depthFunc(i.GREATER);break;case Oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=re}},setLocked:function(re){I=re},setClear:function(re){me!==re&&(pe&&(re=1-re),i.clearDepth(re),me=re)},reset:function(){I=!1,xe=null,_e=null,me=null,pe=!1}}}function s(){let I=!1,pe=null,xe=null,_e=null,me=null,re=null,Te=null,Be=null,dt=null;return{setTest:function(at){I||(at?oe(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(at){pe!==at&&!I&&(i.stencilMask(at),pe=at)},setFunc:function(at,Xt,jt){(xe!==at||_e!==Xt||me!==jt)&&(i.stencilFunc(at,Xt,jt),xe=at,_e=Xt,me=jt)},setOp:function(at,Xt,jt){(re!==at||Te!==Xt||Be!==jt)&&(i.stencilOp(at,Xt,jt),re=at,Te=Xt,Be=jt)},setLocked:function(at){I=at},setClear:function(at){dt!==at&&(i.clearStencil(at),dt=at)},reset:function(){I=!1,pe=null,xe=null,_e=null,me=null,re=null,Te=null,Be=null,dt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,x=!1,g=null,p=null,b=null,y=null,M=null,R=null,T=null,C=new Ne(0,0,0),N=0,A=!1,v=null,U=null,k=null,q=null,se=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ne=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=ne>=2);let fe=null,de={};const we=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Je=new ot().fromArray(we),rt=new ot().fromArray(Oe);function lt(I,pe,xe,_e){const me=new Uint8Array(4),re=i.createTexture();i.bindTexture(I,re),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<xe;Te++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(pe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return re}const te={};te[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(_r),$(!1),Z(fh),oe(i.CULL_FACE),G(wi);function oe(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Me(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Xe(I,pe){return f[I]!==pe?(i.bindFramebuffer(I,pe),f[I]=pe,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function De(I,pe){let xe=d,_e=!1;if(I){xe=h.get(pe),xe===void 0&&(xe=[],h.set(pe,xe));const me=I.textures;if(xe.length!==me.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Te=me.length;re<Te;re++)xe[re]=i.COLOR_ATTACHMENT0+re;xe.length=me.length,_e=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,_e=!0);_e&&i.drawBuffers(xe)}function Qe(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const P={[vs]:i.FUNC_ADD,[Bx]:i.FUNC_SUBTRACT,[zx]:i.FUNC_REVERSE_SUBTRACT};P[Vx]=i.MIN,P[kx]=i.MAX;const L={[Hx]:i.ZERO,[Gx]:i.ONE,[Wx]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[$x]:i.SRC_ALPHA_SATURATE,[Yx]:i.DST_COLOR,[jx]:i.DST_ALPHA,[Xx]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[Kx]:i.ONE_MINUS_DST_COLOR,[qx]:i.ONE_MINUS_DST_ALPHA,[Zx]:i.CONSTANT_COLOR,[Jx]:i.ONE_MINUS_CONSTANT_COLOR,[Qx]:i.CONSTANT_ALPHA,[e_]:i.ONE_MINUS_CONSTANT_ALPHA};function G(I,pe,xe,_e,me,re,Te,Be,dt,at){if(I===wi){x===!0&&(Me(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),I!==Ox){if(I!==g||at!==A){if((p!==vs||M!==vs)&&(i.blendEquation(i.FUNC_ADD),p=vs,M=vs),at)switch(I){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hh:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",I);break}else switch(I){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",I);break}b=null,y=null,R=null,T=null,C.set(0,0,0),N=0,g=I,A=at}return}me=me||pe,re=re||xe,Te=Te||_e,(pe!==p||me!==M)&&(i.blendEquationSeparate(P[pe],P[me]),p=pe,M=me),(xe!==b||_e!==y||re!==R||Te!==T)&&(i.blendFuncSeparate(L[xe],L[_e],L[re],L[Te]),b=xe,y=_e,R=re,T=Te),(Be.equals(C)===!1||dt!==N)&&(i.blendColor(Be.r,Be.g,Be.b,dt),C.copy(Be),N=dt),g=I,A=!1}function w(I,pe){I.side===dn?Me(i.CULL_FACE):oe(i.CULL_FACE);let xe=I.side===mn;pe&&(xe=!xe),$(xe),I.blending===lr&&I.transparent===!1?G(wi):G(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const _e=I.stencilWrite;a.setTest(_e),_e&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Y(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Z(I){I!==Ux?(oe(i.CULL_FACE),I!==U&&(I===fh?i.cullFace(i.BACK):I===Nx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),U=I}function ce(I){I!==k&&(Q&&i.lineWidth(I),k=I)}function Y(I,pe,xe){I?(oe(i.POLYGON_OFFSET_FILL),(q!==pe||se!==xe)&&(i.polygonOffset(pe,xe),q=pe,se=xe)):Me(i.POLYGON_OFFSET_FILL)}function ae(I){I?oe(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function W(I){I===void 0&&(I=i.TEXTURE0+ie-1),fe!==I&&(i.activeTexture(I),fe=I)}function ue(I,pe,xe){xe===void 0&&(fe===null?xe=i.TEXTURE0+ie-1:xe=fe);let _e=de[xe];_e===void 0&&(_e={type:void 0,texture:void 0},de[xe]=_e),(_e.type!==I||_e.texture!==pe)&&(fe!==xe&&(i.activeTexture(xe),fe=xe),i.bindTexture(I,pe||te[I]),_e.type=I,_e.texture=pe)}function S(){const I=de[fe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function j(){try{i.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ee(){try{i.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ge(){try{i.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ce(){try{i.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Ee(){try{i.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function le(){try{i.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ve(I){Je.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function Re(I){rt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function D(I,pe){let xe=c.get(pe);xe===void 0&&(xe=new WeakMap,c.set(pe,xe));let _e=xe.get(I);_e===void 0&&(_e=i.getUniformBlockIndex(pe,I.name),xe.set(I,_e))}function X(I,pe){const _e=c.get(pe).get(I);l.get(pe)!==_e&&(i.uniformBlockBinding(pe,_e,I.__bindingPointIndex),l.set(pe,_e))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,de={},f={},h=new WeakMap,d=[],m=null,x=!1,g=null,p=null,b=null,y=null,M=null,R=null,T=null,C=new Ne(0,0,0),N=0,A=!1,v=null,U=null,k=null,q=null,se=null,Je.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Me,bindFramebuffer:Xe,drawBuffers:De,useProgram:Qe,setBlending:G,setMaterial:w,setFlipSided:$,setCullFace:Z,setLineWidth:ce,setPolygonOffset:Y,setScissorTest:ae,activeTexture:W,bindTexture:ue,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ee,texImage3D:le,updateUBOMapping:D,uniformBlockBinding:X,texStorage2D:ge,texStorage3D:Ce,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:ve,viewport:Re,reset:he}}function w1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,_){return d?new OffscreenCanvas(S,_):vo("canvas")}function x(S,_,F){let j=1;const ee=ue(S);if((ee.width>F||ee.height>F)&&(j=F/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(j*ee.width),Se=Math.floor(j*ee.height);f===void 0&&(f=m(V,Se));const ge=_?m(V,Se):f;return ge.width=V,ge.height=Se,ge.getContext("2d").drawImage(S,0,0,V,Se),Fe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+V+"x"+Se+")."),ge}else return"data"in S&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),S;return S}function g(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,_,F,j,ee=!1){if(S!==null){if(i[S]!==void 0)return i[S];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=_;if(_===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),_===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),_===i.RGBA){const Se=ee?Oa:ft.getTransfer(j);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=Se===vt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(S,_){let F;return S?_===null||_===Rs||_===po?F=i.DEPTH24_STENCIL8:_===Xn?F=i.DEPTH32F_STENCIL8:_===ho&&(F=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rs||_===po?F=i.DEPTH_COMPONENT24:_===Xn?F=i.DEPTH_COMPONENT32F:_===ho&&(F=i.DEPTH_COMPONENT16),F}function R(S,_){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==gn&&S.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function T(S){const _=S.target;_.removeEventListener("dispose",T),N(_),_.isVideoTexture&&u.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),v(_)}function N(S){const _=n.get(S);if(_.__webglInit===void 0)return;const F=S.source,j=h.get(F);if(j){const ee=j[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(S),Object.keys(j).length===0&&h.delete(F)}n.remove(S)}function A(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const F=S.source,j=h.get(F);delete j[_.__cacheKey],o.memory.textures--}function v(S){const _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let ee=0;ee<_.__webglFramebuffer[j].length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[j][ee]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=S.textures;for(let j=0,ee=F.length;j<ee;j++){const V=n.get(F[j]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(S)}let U=0;function k(){U=0}function q(){const S=U;return S>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),U+=1,S}function se(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ie(S,_){const F=n.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const j=S.image;if(j===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{te(F,S,_);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Q(S,_){const F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){te(F,S,_);return}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ne(S,_){const F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){te(F,S,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(S,_){const F=n.get(S);if(S.version>0&&F.__version!==S.version){oe(F,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const fe={[ts]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},de={[gn]:i.NEAREST,[$p]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},we={[g_]:i.NEVER,[M_]:i.ALWAYS,[x_]:i.LESS,[sm]:i.LEQUAL,[__]:i.EQUAL,[b_]:i.GEQUAL,[v_]:i.GREATER,[y_]:i.NOTEQUAL};function Oe(S,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===xa||_.magFilter===Yr||_.magFilter===Ei||_.minFilter===Zt||_.minFilter===xa||_.minFilter===Yr||_.minFilter===Ei)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,fe[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,fe[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,fe[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Yr&&_.minFilter!==Ei||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Je(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",T));const j=_.source;let ee=h.get(j);ee===void 0&&(ee={},h.set(j,ee));const V=se(_);if(V!==S.__cacheKey){ee[V]===void 0&&(ee[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[V].usedTimes++;const Se=ee[S.__cacheKey];Se!==void 0&&(ee[S.__cacheKey].usedTimes--,Se.usedTimes===0&&A(_)),S.__cacheKey=V,S.__webglTexture=ee[V].texture}return F}function rt(S,_,F){return Math.floor(Math.floor(S/F)/_)}function lt(S,_,F,j){const V=S.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,j,_.data);else{V.sort((le,ve)=>le.start-ve.start);let Se=0;for(let le=1;le<V.length;le++){const ve=V[Se],Re=V[le],D=ve.start+ve.count,X=rt(Re.start,_.width,4),he=rt(ve.start,_.width,4);Re.start<=D+1&&X===he&&rt(Re.start+Re.count-1,_.width,4)===X?ve.count=Math.max(ve.count,Re.start+Re.count-ve.start):(++Se,V[Se]=Re)}V.length=Se+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let le=0,ve=V.length;le<ve;le++){const Re=V[le],D=Math.floor(Re.start/4),X=Math.ceil(Re.count/4),he=D%_.width,I=Math.floor(D/_.width),pe=X,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,he),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,he,I,pe,xe,F,j,_.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function te(S,_,F){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const ee=Je(S,_),V=_.source;t.bindTexture(j,S.__webglTexture,i.TEXTURE0+F);const Se=n.get(V);if(V.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ge=ft.getPrimaries(ft.workingColorSpace),Ce=_.colorSpace===Ki?null:ft.getPrimaries(_.colorSpace),Ee=_.colorSpace===Ki||ge===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let le=x(_.image,!1,s.maxTextureSize);le=W(_,le);const ve=r.convert(_.format,_.colorSpace),Re=r.convert(_.type);let D=y(_.internalFormat,ve,Re,_.colorSpace,_.isVideoTexture);Oe(j,_);let X;const he=_.mipmaps,I=_.isVideoTexture!==!0,pe=Se.__version===void 0||ee===!0,xe=V.dataReady,_e=R(_,le);if(_.isDepthTexture)D=M(_.format===go,_.type),pe&&(I?t.texStorage2D(i.TEXTURE_2D,1,D,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,D,le.width,le.height,0,ve,Re,null));else if(_.isDataTexture)if(he.length>0){I&&pe&&t.texStorage2D(i.TEXTURE_2D,_e,D,he[0].width,he[0].height);for(let me=0,re=he.length;me<re;me++)X=he[me],I?xe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,X.width,X.height,ve,Re,X.data):t.texImage2D(i.TEXTURE_2D,me,D,X.width,X.height,0,ve,Re,X.data);_.generateMipmaps=!1}else I?(pe&&t.texStorage2D(i.TEXTURE_2D,_e,D,le.width,le.height),xe&&lt(_,le,ve,Re)):t.texImage2D(i.TEXTURE_2D,0,D,le.width,le.height,0,ve,Re,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,D,he[0].width,he[0].height,le.depth);for(let me=0,re=he.length;me<re;me++)if(X=he[me],_.format!==Nn)if(ve!==null)if(I){if(xe)if(_.layerUpdates.size>0){const Te=sd(X.width,X.height,_.format,_.type);for(const Be of _.layerUpdates){const dt=X.data.subarray(Be*Te/X.data.BYTES_PER_ELEMENT,(Be+1)*Te/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Be,X.width,X.height,1,ve,dt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,X.width,X.height,le.depth,ve,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,D,X.width,X.height,le.depth,0,X.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,X.width,X.height,le.depth,ve,Re,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,D,X.width,X.height,le.depth,0,ve,Re,X.data)}else{I&&pe&&t.texStorage2D(i.TEXTURE_2D,_e,D,he[0].width,he[0].height);for(let me=0,re=he.length;me<re;me++)X=he[me],_.format!==Nn?ve!==null?I?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,X.width,X.height,ve,X.data):t.compressedTexImage2D(i.TEXTURE_2D,me,D,X.width,X.height,0,X.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?xe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,X.width,X.height,ve,Re,X.data):t.texImage2D(i.TEXTURE_2D,me,D,X.width,X.height,0,ve,Re,X.data)}else if(_.isDataArrayTexture)if(I){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,D,le.width,le.height,le.depth),xe)if(_.layerUpdates.size>0){const me=sd(le.width,le.height,_.format,_.type);for(const re of _.layerUpdates){const Te=le.data.subarray(re*me/le.data.BYTES_PER_ELEMENT,(re+1)*me/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,ve,Re,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,Re,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,D,le.width,le.height,le.depth,0,ve,Re,le.data);else if(_.isData3DTexture)I?(pe&&t.texStorage3D(i.TEXTURE_3D,_e,D,le.width,le.height,le.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,Re,le.data)):t.texImage3D(i.TEXTURE_3D,0,D,le.width,le.height,le.depth,0,ve,Re,le.data);else if(_.isFramebufferTexture){if(pe)if(I)t.texStorage2D(i.TEXTURE_2D,_e,D,le.width,le.height);else{let me=le.width,re=le.height;for(let Te=0;Te<_e;Te++)t.texImage2D(i.TEXTURE_2D,Te,D,me,re,0,ve,Re,null),me>>=1,re>>=1}}else if(he.length>0){if(I&&pe){const me=ue(he[0]);t.texStorage2D(i.TEXTURE_2D,_e,D,me.width,me.height)}for(let me=0,re=he.length;me<re;me++)X=he[me],I?xe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ve,Re,X):t.texImage2D(i.TEXTURE_2D,me,D,ve,Re,X);_.generateMipmaps=!1}else if(I){if(pe){const me=ue(le);t.texStorage2D(i.TEXTURE_2D,_e,D,me.width,me.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Re,le)}else t.texImage2D(i.TEXTURE_2D,0,D,ve,Re,le);g(_)&&p(j),Se.__version=V.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function oe(S,_,F){if(_.image.length!==6)return;const j=Je(S,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);const V=n.get(ee);if(ee.version!==V.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const Se=ft.getPrimaries(ft.workingColorSpace),ge=_.colorSpace===Ki?null:ft.getPrimaries(_.colorSpace),Ce=_.colorSpace===Ki||Se===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!Ee&&!le?ve[re]=x(_.image[re],!0,s.maxCubemapSize):ve[re]=le?_.image[re].image:_.image[re],ve[re]=W(_,ve[re]);const Re=ve[0],D=r.convert(_.format,_.colorSpace),X=r.convert(_.type),he=y(_.internalFormat,D,X,_.colorSpace),I=_.isVideoTexture!==!0,pe=V.__version===void 0||j===!0,xe=ee.dataReady;let _e=R(_,Re);Oe(i.TEXTURE_CUBE_MAP,_);let me;if(Ee){I&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,he,Re.width,Re.height);for(let re=0;re<6;re++){me=ve[re].mipmaps;for(let Te=0;Te<me.length;Te++){const Be=me[Te];_.format!==Nn?D!==null?I?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,Be.width,Be.height,D,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,he,Be.width,Be.height,0,Be.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,Be.width,Be.height,D,X,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,he,Be.width,Be.height,0,D,X,Be.data)}}}else{if(me=_.mipmaps,I&&pe){me.length>0&&_e++;const re=ue(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,he,re.width,re.height)}for(let re=0;re<6;re++)if(le){I?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,D,X,ve[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,he,ve[re].width,ve[re].height,0,D,X,ve[re].data);for(let Te=0;Te<me.length;Te++){const dt=me[Te].image[re].image;I?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,dt.width,dt.height,D,X,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,he,dt.width,dt.height,0,D,X,dt.data)}}else{I?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,D,X,ve[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,he,D,X,ve[re]);for(let Te=0;Te<me.length;Te++){const Be=me[Te];I?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,D,X,Be.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,he,D,X,Be.image[re])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),V.__version=ee.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Me(S,_,F,j,ee,V){const Se=r.convert(F.format,F.colorSpace),ge=r.convert(F.type),Ce=y(F.internalFormat,Se,ge,F.colorSpace),Ee=n.get(_),le=n.get(F);if(le.__renderTarget=_,!Ee.__hasExternalTextures){const ve=Math.max(1,_.width>>V),Re=Math.max(1,_.height>>V);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,V,Ce,ve,Re,_.depth,0,Se,ge,null):t.texImage2D(ee,V,Ce,ve,Re,0,Se,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Y(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ee,le.__webglTexture,0,ce(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ee,le.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(S,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){const j=_.depthTexture,ee=j&&j.isDepthTexture?j.type:null,V=M(_.stencilBuffer,ee),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=ce(_);Y(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,V,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,S)}else{const j=_.textures;for(let ee=0;ee<j.length;ee++){const V=j[ee],Se=r.convert(V.format,V.colorSpace),ge=r.convert(V.type),Ce=y(V.internalFormat,Se,ge,V.colorSpace),Ee=ce(_);F&&Y(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Ce,_.width,_.height):Y(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);const ee=j.__webglTexture,V=ce(_);if(_.depthTexture.format===mo)Y(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(_.depthTexture.format===go)Y(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Qe(S){const _=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const j=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=j}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const j=S.texture.mipmaps;j&&j.length>0?De(_.__webglFramebuffer[0],S):De(_.__webglFramebuffer,S)}else if(F){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),Xe(_.__webglDepthbuffer[j],S,!1);else{const ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,V)}}else{const j=S.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xe(_.__webglDepthbuffer,S,!1);else{const ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function P(S,_,F){const j=n.get(S);_!==void 0&&Me(j.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Qe(S)}function L(S){const _=S.texture,F=n.get(S),j=n.get(_);S.addEventListener("dispose",C);const ee=S.textures,V=S.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),V){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)F.__webglFramebuffer[ge][Ce]=i.createFramebuffer()}else F.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)F.__webglFramebuffer[ge]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ge=0,Ce=ee.length;ge<Ce;ge++){const Ee=n.get(ee[ge]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Y(S)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<ee.length;ge++){const Ce=ee[ge];F.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const Ee=r.convert(Ce.format,Ce.colorSpace),le=r.convert(Ce.type),ve=y(Ce.internalFormat,Ee,le,Ce.colorSpace,S.isXRRenderTarget===!0),Re=ce(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Me(F.__webglFramebuffer[ge][Ce],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce);else Me(F.__webglFramebuffer[ge],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ge=0,Ce=ee.length;ge<Ce;ge++){const Ee=ee[ge],le=n.get(Ee);let ve=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,le.__webglTexture),Oe(ve,Ee),Me(F.__webglFramebuffer,S,Ee,i.COLOR_ATTACHMENT0+ge,ve,0),g(Ee)&&p(ve)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ge=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,j.__webglTexture),Oe(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Me(F.__webglFramebuffer[Ce],S,_,i.COLOR_ATTACHMENT0,ge,Ce);else Me(F.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ge,0);g(_)&&p(ge),t.unbindTexture()}S.depthBuffer&&Qe(S)}function G(S){const _=S.textures;for(let F=0,j=_.length;F<j;F++){const ee=_[F];if(g(ee)){const V=b(S),Se=n.get(ee).__webglTexture;t.bindTexture(V,Se),p(V),t.unbindTexture()}}}const w=[],$=[];function Z(S){if(S.samples>0){if(Y(S)===!1){const _=S.textures,F=S.width,j=S.height;let ee=i.COLOR_BUFFER_BIT;const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(S),ge=_.length>1;if(ge)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ce=S.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);const le=n.get(_[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,ee,i.NEAREST),l===!0&&(w.length=0,$.length=0,w.push(i.COLOR_ATTACHMENT0+Ee),S.depthBuffer&&S.resolveDepthBuffer===!1&&(w.push(V),$.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);const le=n.get(_[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ce(S){return Math.min(s.maxSamples,S.samples)}function Y(S){const _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ae(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function W(S,_){const F=S.colorSpace,j=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==br&&F!==Ki&&(ft.getTransfer(F)===vt?(j!==Nn||ee!==ai)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",F)),_}function ue(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=P,this.setupRenderTarget=L,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Y}function R1(i,e){function t(n,s=Ki){let r;const o=ft.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===qu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===em)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zp)return i.BYTE;if(n===Jp)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===ju)return i.INT;if(n===Rs)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Rr)return i.HALF_FLOAT;if(n===tm)return i.ALPHA;if(n===nm)return i.RGB;if(n===Nn)return i.RGBA;if(n===mo)return i.DEPTH_COMPONENT;if(n===go)return i.DEPTH_STENCIL;if(n===Ku)return i.RED;if(n===$u)return i.RED_INTEGER;if(n===Zu)return i.RG;if(n===Ju)return i.RG_INTEGER;if(n===Qu)return i.RGBA_INTEGER;if(n===_a||n===va||n===ya||n===ba)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===Vc||n===kc||n===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Wc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===qc||n===Yc||n===Kc||n===$c||n===Zc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===su||n===ru)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===su)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ou||n===au||n===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ou)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cu||n===uu||n===fu||n===hu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qt({vertexShader:C1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D1 extends Cr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new I1,p={},b=t.getContextAttributes();let y=null,M=null;const R=[],T=[],C=new ke;let N=null;const A=new Bt;A.viewport=new ot;const v=new Bt;v.viewport=new ot;const U=[A,v],k=new Hv;let q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=R[te];return oe===void 0&&(oe=new Kl,R[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=R[te];return oe===void 0&&(oe=new Kl,R[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=R[te];return oe===void 0&&(oe=new Kl,R[te]=oe),oe.getHandSpace()};function ie(te){const oe=T.indexOf(te.inputSource);if(oe===-1)return;const Me=R[oe];Me!==void 0&&(Me.update(te.inputSource,te.frame,c||o),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ne);for(let te=0;te<R.length;te++){const oe=T[te];oe!==null&&(T[te]=null,R[te].disconnect(oe))}q=null,se=null,g.reset();for(const te in p)delete p[te];e.setRenderTarget(y),d=null,h=null,f=null,s=null,M=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Xe=null,De=null;b.depth&&(De=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?go:mo,Xe=b.stencil?po:Rs);const Qe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Qe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Cs(h.textureWidth,h.textureHeight,{format:Nn,type:ai,depthTexture:new pm(h.textureWidth,h.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Cs(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(te){for(let oe=0;oe<te.removed.length;oe++){const Me=te.removed[oe],Xe=T.indexOf(Me);Xe>=0&&(T[Xe]=null,R[Xe].disconnect(Me))}for(let oe=0;oe<te.added.length;oe++){const Me=te.added[oe];let Xe=T.indexOf(Me);if(Xe===-1){for(let Qe=0;Qe<R.length;Qe++)if(Qe>=T.length){T.push(Me),Xe=Qe;break}else if(T[Qe]===null){T[Qe]=Me,Xe=Qe;break}if(Xe===-1)break}const De=R[Xe];De&&De.connect(Me)}}const H=new O,fe=new O;function de(te,oe,Me){H.setFromMatrixPosition(oe.matrixWorld),fe.setFromMatrixPosition(Me.matrixWorld);const Xe=H.distanceTo(fe),De=oe.projectionMatrix.elements,Qe=Me.projectionMatrix.elements,P=De[14]/(De[10]-1),L=De[14]/(De[10]+1),G=(De[9]+1)/De[5],w=(De[9]-1)/De[5],$=(De[8]-1)/De[0],Z=(Qe[8]+1)/Qe[0],ce=P*$,Y=P*Z,ae=Xe/(-$+Z),W=ae*-$;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(W),te.translateZ(ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ue=P+ae,S=L+ae,_=ce-W,F=Y+(Xe-W),j=G*L/S*ue,ee=w*L/S*ue;te.projectionMatrix.makePerspective(_,F,j,ee,ue,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function we(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let oe=te.near,Me=te.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),k.near=v.near=A.near=oe,k.far=v.far=A.far=Me,(q!==k.near||se!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),q=k.near,se=k.far),k.layers.mask=te.layers.mask|6,A.layers.mask=k.layers.mask&3,v.layers.mask=k.layers.mask&5;const Xe=te.parent,De=k.cameras;we(k,Xe);for(let Qe=0;Qe<De.length;Qe++)we(De[Qe],Xe);De.length===2?de(k,A,v):k.projectionMatrix.copy(A.projectionMatrix),Oe(te,k,Xe)};function Oe(te,oe,Me){Me===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Mr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(te){return p[te]};let Je=null;function rt(te,oe){if(u=oe.getViewerPose(c||o),m=oe,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Xe=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,Xe=!0);for(let L=0;L<Me.length;L++){const G=Me[L];let w=null;if(d!==null)w=d.getViewport(G);else{const Z=f.getViewSubImage(h,G);w=Z.viewport,L===0&&(e.setRenderTargetTextures(M,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(M))}let $=U[L];$===void 0&&($=new Bt,$.layers.enable(L),$.viewport=new ot,U[L]=$),$.matrix.fromArray(G.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(G.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(w.x,w.y,w.width,w.height),L===0&&(k.matrix.copy($.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xe===!0&&k.cameras.push($)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const L=f.getDepthInformation(Me[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(De&&De.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let L=0;L<Me.length;L++){const G=Me[L].camera;if(G){let w=p[G];w||(w=new mm,p[G]=w);const $=f.getCameraImage(G);w.sourceTexture=$}}}}for(let Me=0;Me<R.length;Me++){const Xe=T[Me],De=R[Me];Xe!==null&&De!==void 0&&De.update(Xe,oe,c||o)}Je&&Je(te,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const lt=new bm;lt.setAnimationLoop(rt),this.setAnimationLoop=function(te){Je=te},this.dispose=function(){}}}const ps=new Wt,L1=new Ie;function U1(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,um(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,M=b.envMapRotation;y&&(g.envMap.value=y,ps.copy(M),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(ps)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=s[b.id];M===void 0&&(m(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",g));const R=y.program;n.updateUBOMapping(b,R);const T=e.render.frame;r[b.id]!==T&&(h(b),r[b.id]=T)}function u(b){const y=f();b.__bindingPointIndex=y;const M=i.createBuffer(),R=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=s[b.id],M=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=M.length;T<C;T++){const N=Array.isArray(M[T])?M[T]:[M[T]];for(let A=0,v=N.length;A<v;A++){const U=N[A];if(d(U,T,A,R)===!0){const k=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let ie=0;ie<q.length;ie++){const Q=q[ie],ne=x(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,k+se,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,se),se+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,y,M,R){const T=b.value,C=y+"_"+M;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const N=R[C];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return R[C]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function m(b){const y=b.uniforms;let M=0;const R=16;for(let C=0,N=y.length;C<N;C++){const A=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,U=A.length;v<U;v++){const k=A[v],q=Array.isArray(k.value)?k.value:[k.value];for(let se=0,ie=q.length;se<ie;se++){const Q=q[se],ne=x(Q),H=M%R,fe=H%ne.boundary,de=H+fe;M+=fe,de!==0&&R-de<ne.storage&&(M+=R-de),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=ne.storage}}}const T=M%R;return T>0&&(M+=R-T),b.__size=M,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const F1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let _i=null;function O1(){return _i===null&&(_i=new rf(F1,32,32,Zu,Rr),_i.minFilter=Zt,_i.magFilter=Zt,_i.wrapS=Un,_i.wrapT=Un,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class Rd{constructor(e={}){const{canvas:t=S_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Set([Qu,Ju,$u]),x=new Set([ai,Rs,ho,po,qu,Yu]),g=new Uint32Array(4),p=new Int32Array(4);let b=null,y=null;const M=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=In;let N=0,A=0,v=null,U=-1,k=null;const q=new ot,se=new ot;let ie=null;const Q=new Ne(0);let ne=0,H=t.width,fe=t.height,de=1,we=null,Oe=null;const Je=new ot(0,0,H,fe),rt=new ot(0,0,H,fe);let lt=!1;const te=new of;let oe=!1,Me=!1;const Xe=new Ie,De=new O,Qe=new ot,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function G(){return v===null?de:1}let w=n;function $(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Te,!1),w===null){const B="webgl2";if(w=$(B,E),w===null)throw $(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let Z,ce,Y,ae,W,ue,S,_,F,j,ee,V,Se,ge,Ce,Ee,le,ve,Re,D,X,he,I,pe;function xe(){Z=new jM(w),Z.init(),he=new R1(w,Z),ce=new OM(w,Z,e,he),Y=new A1(w,Z),ce.reversedDepthBuffer&&h&&Y.buffers.depth.setReversed(!0),ae=new KM(w),W=new d1,ue=new w1(w,Z,Y,W,ce,he,ae),S=new zM(T),_=new XM(T),F=new Qv(w),I=new NM(w,F),j=new qM(w,F,ae,I),ee=new ZM(w,j,F,ae),Re=new $M(w,ce,ue),Ee=new BM(W),V=new h1(T,S,_,Z,ce,I,Ee),Se=new U1(T,W),ge=new m1,Ce=new b1(Z),ve=new UM(T,S,_,Y,ee,d,l),le=new T1(T,ee,ce),pe=new N1(w,ae,ce,Y),D=new FM(w,Z,ae),X=new YM(w,Z,ae),ae.programs=V.programs,T.capabilities=ce,T.extensions=Z,T.properties=W,T.renderLists=ge,T.shadowMap=le,T.state=Y,T.info=ae}xe();const _e=new D1(T,w);this.xr=_e,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=Z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(H,fe,!1))},this.getSize=function(E){return E.set(H,fe)},this.setSize=function(E,B,K=!0){if(_e.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,fe=B,t.width=Math.floor(E*de),t.height=Math.floor(B*de),K===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(H*de,fe*de).floor()},this.setDrawingBufferSize=function(E,B,K){H=E,fe=B,de=K,t.width=Math.floor(E*K),t.height=Math.floor(B*K),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(Je)},this.setViewport=function(E,B,K,J){E.isVector4?Je.set(E.x,E.y,E.z,E.w):Je.set(E,B,K,J),Y.viewport(q.copy(Je).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,B,K,J){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,B,K,J),Y.scissor(se.copy(rt).multiplyScalar(de).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Y.setScissorTest(lt=E)},this.setOpaqueSort=function(E){we=E},this.setTransparentSort=function(E){Oe=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,K=!0){let J=0;if(E){let z=!1;if(v!==null){const ye=v.texture.format;z=m.has(ye)}if(z){const ye=v.texture.type,Ae=x.has(ye),Le=ve.getClearColor(),Pe=ve.getClearAlpha(),Ge=Le.r,je=Le.g,ze=Le.b;Ae?(g[0]=Ge,g[1]=je,g[2]=ze,g[3]=Pe,w.clearBufferuiv(w.COLOR,0,g)):(p[0]=Ge,p[1]=je,p[2]=ze,p[3]=Pe,w.clearBufferiv(w.COLOR,0,p))}else J|=w.COLOR_BUFFER_BIT}B&&(J|=w.DEPTH_BUFFER_BIT),K&&(J|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ve.dispose(),ge.dispose(),Ce.dispose(),W.dispose(),S.dispose(),_.dispose(),ee.dispose(),I.dispose(),pe.dispose(),V.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Mf),_e.removeEventListener("sessionend",Sf),ss.stop()};function me(E){E.preventDefault(),za("WebGLRenderer: Context Lost."),C=!0}function re(){za("WebGLRenderer: Context Restored."),C=!1;const E=ae.autoReset,B=le.enabled,K=le.autoUpdate,J=le.needsUpdate,z=le.type;xe(),ae.autoReset=E,le.enabled=B,le.autoUpdate=K,le.needsUpdate=J,le.type=z}function Te(E){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const B=E.target;B.removeEventListener("dispose",Be),dt(B)}function dt(E){at(E),W.remove(E)}function at(E){const B=W.get(E).programs;B!==void 0&&(B.forEach(function(K){V.releaseProgram(K)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,K,J,z,ye){B===null&&(B=P);const Ae=z.isMesh&&z.matrixWorld.determinant()<0,Le=e0(E,B,K,J,z);Y.setMaterial(J,Ae);let Pe=K.index,Ge=1;if(J.wireframe===!0){if(Pe=j.getWireframeAttribute(K),Pe===void 0)return;Ge=2}const je=K.drawRange,ze=K.attributes.position;let st=je.start*Ge,_t=(je.start+je.count)*Ge;ye!==null&&(st=Math.max(st,ye.start*Ge),_t=Math.min(_t,(ye.start+ye.count)*Ge)),Pe!==null?(st=Math.max(st,0),_t=Math.min(_t,Pe.count)):ze!=null&&(st=Math.max(st,0),_t=Math.min(_t,ze.count));const Pt=_t-st;if(Pt<0||Pt===1/0)return;I.setup(z,J,Le,K,Pe);let It,yt=D;if(Pe!==null&&(It=F.get(Pe),yt=X,yt.setIndex(It)),z.isMesh)J.wireframe===!0?(Y.setLineWidth(J.wireframeLinewidth*G()),yt.setMode(w.LINES)):yt.setMode(w.TRIANGLES);else if(z.isLine){let He=J.linewidth;He===void 0&&(He=1),Y.setLineWidth(He*G()),z.isLineSegments?yt.setMode(w.LINES):z.isLineLoop?yt.setMode(w.LINE_LOOP):yt.setMode(w.LINE_STRIP)}else z.isPoints?yt.setMode(w.POINTS):z.isSprite&&yt.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)yo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const He=z._multiDrawStarts,Rt=z._multiDrawCounts,ut=z._multiDrawCount,_n=Pe?F.get(Pe).bytesPerElement:1,Ns=W.get(J).currentProgram.getUniforms();for(let vn=0;vn<ut;vn++)Ns.setValue(w,"_gl_DrawID",vn),yt.render(He[vn]/_n,Rt[vn])}else if(z.isInstancedMesh)yt.renderInstances(st,Pt,z.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Rt=Math.min(K.instanceCount,He);yt.renderInstances(st,Pt,Rt)}else yt.render(st,Pt)};function Xt(E,B,K){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Io(E,B,K),E.side=Ui,E.needsUpdate=!0,Io(E,B,K),E.side=dn):Io(E,B,K)}this.compile=function(E,B,K=null){K===null&&(K=E),y=Ce.get(K),y.init(B),R.push(y),K.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),E!==K&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),y.setupLights();const J=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ye=z.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Le=ye[Ae];Xt(Le,K,z),J.add(Le)}else Xt(ye,K,z),J.add(ye)}),y=R.pop(),J},this.compileAsync=function(E,B,K=null){const J=this.compile(E,B,K);return new Promise(z=>{function ye(){if(J.forEach(function(Ae){W.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){z(E);return}setTimeout(ye,10)}Z.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let jt=null;function Qm(E){jt&&jt(E)}function Mf(){ss.stop()}function Sf(){ss.start()}const ss=new bm;ss.setAnimationLoop(Qm),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(E){jt=E,_e.setAnimationLoop(E),E===null?ss.stop():ss.start()},_e.addEventListener("sessionstart",Mf),_e.addEventListener("sessionend",Sf),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,B,v),y=Ce.get(E,R.length),y.init(B),R.push(y),Xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),te.setFromProjectionMatrix(Xe,ii,B.reversedDepth),Me=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,Me),b=ge.get(E,M.length),b.init(),M.push(b),_e.enabled===!0&&_e.isPresenting===!0){const ye=T.xr.getDepthSensingMesh();ye!==null&&gl(ye,B,-1/0,T.sortObjects)}gl(E,B,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(we,Oe),L=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,L&&ve.addToRenderList(b,E),this.info.render.frame++,oe===!0&&Ee.beginShadows();const K=y.state.shadowsArray;le.render(K,E,B),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=b.opaque,z=b.transmissive;if(y.setupLights(),B.isArrayCamera){const ye=B.cameras;if(z.length>0)for(let Ae=0,Le=ye.length;Ae<Le;Ae++){const Pe=ye[Ae];Ef(J,z,E,Pe)}L&&ve.render(E);for(let Ae=0,Le=ye.length;Ae<Le;Ae++){const Pe=ye[Ae];Tf(b,E,Pe,Pe.viewport)}}else z.length>0&&Ef(J,z,E,B),L&&ve.render(E),Tf(b,E,B);v!==null&&A===0&&(ue.updateMultisampleRenderTarget(v),ue.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(T,E,B),I.resetDefaultState(),U=-1,k=null,R.pop(),R.length>0?(y=R[R.length-1],oe===!0&&Ee.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,M.pop(),M.length>0?b=M[M.length-1]:b=null};function gl(E,B,K,J){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){J&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xe);const Ae=ee.update(E),Le=E.material;Le.visible&&b.push(E,Ae,Le,K,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const Ae=ee.update(E),Le=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Qe.copy(Ae.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(Xe)),Array.isArray(Le)){const Pe=Ae.groups;for(let Ge=0,je=Pe.length;Ge<je;Ge++){const ze=Pe[Ge],st=Le[ze.materialIndex];st&&st.visible&&b.push(E,Ae,st,K,Qe.z,ze)}}else Le.visible&&b.push(E,Ae,Le,K,Qe.z,null)}}const ye=E.children;for(let Ae=0,Le=ye.length;Ae<Le;Ae++)gl(ye[Ae],B,K,J)}function Tf(E,B,K,J){const{opaque:z,transmissive:ye,transparent:Ae}=E;y.setupLightsView(K),oe===!0&&Ee.setGlobalState(T.clippingPlanes,K),J&&Y.viewport(q.copy(J)),z.length>0&&Po(z,B,K),ye.length>0&&Po(ye,B,K),Ae.length>0&&Po(Ae,B,K),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ef(E,B,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[J.id]===void 0&&(y.state.transmissionRenderTarget[J.id]=new Cs(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Rr:ai,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ye=y.state.transmissionRenderTarget[J.id],Ae=J.viewport||q;ye.setSize(Ae.z*T.transmissionResolutionScale,Ae.w*T.transmissionResolutionScale);const Le=T.getRenderTarget(),Pe=T.getActiveCubeFace(),Ge=T.getActiveMipmapLevel();T.setRenderTarget(ye),T.getClearColor(Q),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),L&&ve.render(K);const je=T.toneMapping;T.toneMapping=Qi;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),oe===!0&&Ee.setGlobalState(T.clippingPlanes,J),Po(E,K,J),ue.updateMultisampleRenderTarget(ye),ue.updateRenderTargetMipmap(ye),Z.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let _t=0,Pt=B.length;_t<Pt;_t++){const It=B[_t],{object:yt,geometry:He,material:Rt,group:ut}=It;if(Rt.side===dn&&yt.layers.test(J.layers)){const _n=Rt.side;Rt.side=mn,Rt.needsUpdate=!0,Af(yt,K,J,He,Rt,ut),Rt.side=_n,Rt.needsUpdate=!0,st=!0}}st===!0&&(ue.updateMultisampleRenderTarget(ye),ue.updateRenderTargetMipmap(ye))}T.setRenderTarget(Le,Pe,Ge),T.setClearColor(Q,ne),ze!==void 0&&(J.viewport=ze),T.toneMapping=je}function Po(E,B,K){const J=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ye=E.length;z<ye;z++){const Ae=E[z],{object:Le,geometry:Pe,group:Ge}=Ae;let je=Ae.material;je.allowOverride===!0&&J!==null&&(je=J),Le.layers.test(K.layers)&&Af(Le,B,K,Pe,je,Ge)}}function Af(E,B,K,J,z,ye){E.onBeforeRender(T,B,K,J,z,ye),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(T,B,K,J,E,ye),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,T.renderBufferDirect(K,B,J,z,E,ye),z.side=Ui,z.needsUpdate=!0,T.renderBufferDirect(K,B,J,z,E,ye),z.side=dn):T.renderBufferDirect(K,B,J,z,E,ye),E.onAfterRender(T,B,K,J,z,ye)}function Io(E,B,K){B.isScene!==!0&&(B=P);const J=W.get(E),z=y.state.lights,ye=y.state.shadowsArray,Ae=z.state.version,Le=V.getParameters(E,z.state,ye,B,K),Pe=V.getProgramCacheKey(Le);let Ge=J.programs;J.environment=E.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(E.isMeshStandardMaterial?_:S).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",Be),Ge=new Map,J.programs=Ge);let je=Ge.get(Pe);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Ae)return Rf(E,Le),je}else Le.uniforms=V.getUniforms(E),E.onBeforeCompile(Le,T),je=V.acquireProgram(Le,Pe),Ge.set(Pe,je),J.uniforms=Le.uniforms;const ze=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=Ee.uniform),Rf(E,Le),J.needsLights=n0(E),J.lightsStateVersion=Ae,J.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=je,J.uniformsList=null,je}function wf(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Ta.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Rf(E,B){const K=W.get(E);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function e0(E,B,K,J,z){B.isScene!==!0&&(B=P),ue.resetTextureUnits();const ye=B.fog,Ae=J.isMeshStandardMaterial?B.environment:null,Le=v===null?T.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:br,Pe=(J.isMeshStandardMaterial?_:S).get(J.envMap||Ae),Ge=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,_t=!!K.morphAttributes.color;let Pt=Qi;J.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Pt=T.toneMapping);const It=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=It!==void 0?It.length:0,He=W.get(J),Rt=y.state.lights;if(oe===!0&&(Me===!0||E!==k)){const en=E===k&&J.id===U;Ee.setState(J,E,en)}let ut=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Rt.state.version||He.outputColorSpace!==Le||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isBatchedMesh&&He.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&He.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&He.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&He.instancingMorph===!1&&z.morphTexture!==null||He.envMap!==Pe||J.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ee.numPlanes||He.numIntersection!==Ee.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==je||He.morphTargets!==ze||He.morphNormals!==st||He.morphColors!==_t||He.toneMapping!==Pt||He.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,He.__version=J.version);let _n=He.currentProgram;ut===!0&&(_n=Io(J,B,z));let Ns=!1,vn=!1,Ur=!1;const Ct=_n.getUniforms(),ln=He.uniforms;if(Y.useProgram(_n.program)&&(Ns=!0,vn=!0,Ur=!0),J.id!==U&&(U=J.id,vn=!0),Ns||k!==E){Y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ct.setValue(w,"projectionMatrix",E.projectionMatrix),Ct.setValue(w,"viewMatrix",E.matrixWorldInverse);const cn=Ct.map.cameraPosition;cn!==void 0&&cn.setValue(w,De.setFromMatrixPosition(E.matrixWorld)),ce.logarithmicDepthBuffer&&Ct.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,vn=!0,Ur=!0)}if(z.isSkinnedMesh){Ct.setOptional(w,z,"bindMatrix"),Ct.setOptional(w,z,"bindMatrixInverse");const en=z.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ct.setValue(w,"boneTexture",en.boneTexture,ue))}z.isBatchedMesh&&(Ct.setOptional(w,z,"batchingTexture"),Ct.setValue(w,"batchingTexture",z._matricesTexture,ue),Ct.setOptional(w,z,"batchingIdTexture"),Ct.setValue(w,"batchingIdTexture",z._indirectTexture,ue),Ct.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&Ct.setValue(w,"batchingColorTexture",z._colorsTexture,ue));const wn=K.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Re.update(z,K,_n),(vn||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,Ct.setValue(w,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ln.envMap.value=Pe,ln.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(ln.envMapIntensity.value=B.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=O1()),vn&&(Ct.setValue(w,"toneMappingExposure",T.toneMappingExposure),He.needsLights&&t0(ln,Ur),ye&&J.fog===!0&&Se.refreshFogUniforms(ln,ye),Se.refreshMaterialUniforms(ln,J,de,fe,y.state.transmissionRenderTarget[E.id]),Ta.upload(w,wf(He),ln,ue)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ta.upload(w,wf(He),ln,ue),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(w,"center",z.center),Ct.setValue(w,"modelViewMatrix",z.modelViewMatrix),Ct.setValue(w,"normalMatrix",z.normalMatrix),Ct.setValue(w,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const en=J.uniformsGroups;for(let cn=0,xl=en.length;cn<xl;cn++){const rs=en[cn];pe.update(rs,_n),pe.bind(rs,_n)}}return _n}function t0(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function n0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,B,K){const J=W.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=B,W.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const K=W.get(E);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const i0=w.createFramebuffer();this.setRenderTarget=function(E,B=0,K=0){v=E,N=B,A=K;let J=!0,z=null,ye=!1,Ae=!1;if(E){const Pe=W.get(E);if(Pe.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(w.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)ue.setupRenderTarget(E);else if(Pe.__hasExternalTextures)ue.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&W.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const je=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[B])?z=je[B][K]:z=je[B],ye=!0):E.samples>0&&ue.useMultisampledRTT(E)===!1?z=W.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?z=je[K]:z=je,q.copy(E.viewport),se.copy(E.scissor),ie=E.scissorTest}else q.copy(Je).multiplyScalar(de).floor(),se.copy(rt).multiplyScalar(de).floor(),ie=lt;if(K!==0&&(z=i0),Y.bindFramebuffer(w.FRAMEBUFFER,z)&&J&&Y.drawBuffers(E,z),Y.viewport(q),Y.scissor(se),Y.setScissorTest(ie),ye){const Pe=W.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,K)}else if(Ae){const Pe=B;for(let Ge=0;Ge<E.textures.length;Ge++){const je=W.get(E.textures[Ge]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ge,je.__webglTexture,K,Pe)}}else if(E!==null&&K!==0){const Pe=W.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pe.__webglTexture,K)}U=-1},this.readRenderTargetPixels=function(E,B,K,J,z,ye,Ae,Le=0){if(!(E&&E.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){Y.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Ge=E.textures[Le],je=Ge.format,ze=Ge.type;if(!ce.textureFormatReadable(je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ze)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-J&&K>=0&&K<=E.height-z&&(E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Le),w.readPixels(B,K,J,z,he.convert(je),he.convert(ze),ye))}finally{const Ge=v!==null?W.get(v).__webglFramebuffer:null;Y.bindFramebuffer(w.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,B,K,J,z,ye,Ae,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(B>=0&&B<=E.width-J&&K>=0&&K<=E.height-z){Y.bindFramebuffer(w.FRAMEBUFFER,Pe);const Ge=E.textures[Le],je=Ge.format,ze=Ge.type;if(!ce.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,st),w.bufferData(w.PIXEL_PACK_BUFFER,ye.byteLength,w.STREAM_READ),E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Le),w.readPixels(B,K,J,z,he.convert(je),he.convert(ze),0);const _t=v!==null?W.get(v).__webglFramebuffer:null;Y.bindFramebuffer(w.FRAMEBUFFER,_t);const Pt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await T_(w,Pt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,st),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ye),w.deleteBuffer(st),w.deleteSync(Pt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,K=0){const J=Math.pow(2,-K),z=Math.floor(E.image.width*J),ye=Math.floor(E.image.height*J),Ae=B!==null?B.x:0,Le=B!==null?B.y:0;ue.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,K,0,0,Ae,Le,z,ye),Y.unbindTexture()};const s0=w.createFramebuffer(),r0=w.createFramebuffer();this.copyTextureToTexture=function(E,B,K=null,J=null,z=0,ye=null){ye===null&&(z!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=z,z=0):ye=0);let Ae,Le,Pe,Ge,je,ze,st,_t,Pt;const It=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(K!==null)Ae=K.max.x-K.min.x,Le=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,je=K.min.y,ze=K.isBox3?K.min.z:0;else{const wn=Math.pow(2,-z);Ae=Math.floor(It.width*wn),Le=Math.floor(It.height*wn),E.isDataArrayTexture?Pe=It.depth:E.isData3DTexture?Pe=Math.floor(It.depth*wn):Pe=1,Ge=0,je=0,ze=0}J!==null?(st=J.x,_t=J.y,Pt=J.z):(st=0,_t=0,Pt=0);const yt=he.convert(B.format),He=he.convert(B.type);let Rt;B.isData3DTexture?(ue.setTexture3D(B,0),Rt=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ue.setTexture2DArray(B,0),Rt=w.TEXTURE_2D_ARRAY):(ue.setTexture2D(B,0),Rt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);const ut=w.getParameter(w.UNPACK_ROW_LENGTH),_n=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ns=w.getParameter(w.UNPACK_SKIP_PIXELS),vn=w.getParameter(w.UNPACK_SKIP_ROWS),Ur=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,It.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,It.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ge),w.pixelStorei(w.UNPACK_SKIP_ROWS,je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ze);const Ct=E.isDataArrayTexture||E.isData3DTexture,ln=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const wn=W.get(E),en=W.get(B),cn=W.get(wn.__renderTarget),xl=W.get(en.__renderTarget);Y.bindFramebuffer(w.READ_FRAMEBUFFER,cn.__webglFramebuffer),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,xl.__webglFramebuffer);for(let rs=0;rs<Pe;rs++)Ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,W.get(E).__webglTexture,z,ze+rs),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,W.get(B).__webglTexture,ye,Pt+rs)),w.blitFramebuffer(Ge,je,Ae,Le,st,_t,Ae,Le,w.DEPTH_BUFFER_BIT,w.NEAREST);Y.bindFramebuffer(w.READ_FRAMEBUFFER,null),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||W.has(E)){const wn=W.get(E),en=W.get(B);Y.bindFramebuffer(w.READ_FRAMEBUFFER,s0),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,r0);for(let cn=0;cn<Pe;cn++)Ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,wn.__webglTexture,z,ze+cn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,wn.__webglTexture,z),ln?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,en.__webglTexture,ye,Pt+cn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,en.__webglTexture,ye),z!==0?w.blitFramebuffer(Ge,je,Ae,Le,st,_t,Ae,Le,w.COLOR_BUFFER_BIT,w.NEAREST):ln?w.copyTexSubImage3D(Rt,ye,st,_t,Pt+cn,Ge,je,Ae,Le):w.copyTexSubImage2D(Rt,ye,st,_t,Ge,je,Ae,Le);Y.bindFramebuffer(w.READ_FRAMEBUFFER,null),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ln?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(Rt,ye,st,_t,Pt,Ae,Le,Pe,yt,He,It.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,ye,st,_t,Pt,Ae,Le,Pe,yt,It.data):w.texSubImage3D(Rt,ye,st,_t,Pt,Ae,Le,Pe,yt,He,It):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ye,st,_t,Ae,Le,yt,He,It.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ye,st,_t,It.width,It.height,yt,It.data):w.texSubImage2D(w.TEXTURE_2D,ye,st,_t,Ae,Le,yt,He,It);w.pixelStorei(w.UNPACK_ROW_LENGTH,ut),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_n),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ns),w.pixelStorei(w.UNPACK_SKIP_ROWS,vn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ur),ye===0&&B.generateMipmaps&&w.generateMipmap(Rt),Y.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ue.setTextureCube(E,0):E.isData3DTexture?ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ue.setTexture2DArray(E,0):ue.setTexture2D(E,0),Y.unbindTexture()},this.resetState=function(){N=0,A=0,v=null,Y.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}var la=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,B1=`precision mediump float;

uniform float uTime;
uniform float uAudioData;
uniform float u_speed;
uniform float u_intensity;
uniform vec3 u_color;
uniform sampler2D uTexture;
uniform bool uHasTexture;

varying vec2 vUv;

vec3 lazer(vec2 pos, vec3 clr, float mult, float audioInfluence)
{
    float x = uTime * u_speed * 2.0 * (1.0 + audioInfluence * 0.5);
    float w = fract(x * 0.5);
    w = sin(3.14159 * w);
    w *= 1.5 + pos.x;
    w *= 2.0 + audioInfluence * 2.0;
    vec3 color = clr * mult * w / abs(pos.y);

    float d = distance(pos, vec2(-1.0 + fract(x * 0.5) * 2.0, 0.0));
    color += (clr * 0.25 * w / d);
    return color;
}

void main()
{
    vec2 pos = (vUv * 2.0) - 1.0;
    
    
    float audioInfluence = uAudioData;
    
    vec3 color = max(vec3(0.0), lazer(pos, u_color, 0.25 + audioInfluence * 0.5, audioInfluence));
    
    
    float alpha = 1.0;
    if (uHasTexture) {
        vec4 texColor = texture2D(uTexture, vUv);
        alpha = texColor.a;
    }
    
    gl_FragColor = vec4(color * u_intensity * (0.05 + audioInfluence * 0.15), alpha);
}`,z1=`precision mediump float;

uniform float uTime;
uniform float uAudioData;
uniform float u_speed;
uniform float u_scale;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform sampler2D uTexture;
uniform bool uHasTexture;

varying vec2 vUv;

void main() {
    float dist = 0.11;
    float radius = 7.1 * u_scale;
    
    vec3 Color = u_color1;
    vec3 Colorb = u_color2;
    vec3 Colorc = u_color3;
    float col = -0.3;
    float colb = -0.3;
    float colc = -0.3;
    
    
    vec2 resolution = vec2(800.0, 600.0); 
    vec2 fragCoord = vUv * resolution;
    vec2 centr = 11.2 * (fragCoord * 2.0 - resolution) / min(resolution.x, resolution.y);
    
    
    float audioInfluence = uAudioData;
    float radiusModulated = radius + audioInfluence * 2.0;
    float speedModulated = uTime * u_speed * (1.0 + uAudioData * 0.5);
    
    for(float i = 0.0; i < 63.0; i++) {
        float si = sin(speedModulated + i * dist) * 1.05;
        float co = cos(speedModulated + i * dist) * 2.05;
        
        col += 0.003 / abs(length(centr + vec2(si + co * cos(speedModulated * 0.5), co)) - radiusModulated);
        colb += 0.003 / abs(length(centr + vec2(si - co * cos(speedModulated * 0.5), co)) - radiusModulated);
        colc += 0.003 / abs(length(centr + vec2(si - co * sin(speedModulated * 0.5), co)) - radiusModulated);
    }
    
    vec3 finalColor = vec3((Color * col) + (Colorb * colb) + (Colorc * colc));
    
    
    float alpha = 1.0;
    if (uHasTexture) {
        vec4 texColor = texture2D(uTexture, vUv);
        alpha = texColor.a;
    }
    
    gl_FragColor = vec4(finalColor, alpha);
}`,V1=`precision mediump float;

uniform float uTime;
uniform float uAudioData;
uniform float u_speed;
uniform float u_intensity;
uniform float u_scale;
uniform sampler2D uTexture;
uniform bool uHasTexture;

varying vec2 vUv;

#define N 40
#define PI2 (3.14159265*2.0)

void main() {
    
    vec2 resolution = vec2(800.0, 800.0);
    vec2 fragCoord = vUv * resolution;
    vec2 v = (fragCoord - resolution/2.0) / min(resolution.y, resolution.x) * (15.0 * u_scale);
    
    float t = uTime * u_speed - uAudioData * 15.0;
    
    
    float factor = uAudioData * u_intensity + 0.5;
    float rotationAngle = uAudioData / 15.0 * PI2 * 0.5;
    float c = cos(rotationAngle);
    float s = sin(rotationAngle);
    
    for (int i = 1; i <= N; i++) {
        float d = float(i+3) / float(N);
        float x = v.x;
        float y = v.y + sin(v.x * d * 7.0 + t)/d*factor + cos(v.x * d + t)/d*factor;
        
        v.x = x * c - y * s;
        v.y = x * s + y * c;
    }
    
    float col = length(v) * 0.25;
    vec3 color = vec3(cos(col), cos(col*2.0), cos(col*4.0));
    
    
    float alpha = 1.0;
    if (uHasTexture) {
        vec4 texColor = texture2D(uTexture, vUv);
        alpha = texColor.a;
    }
    
    gl_FragColor = vec4(color, alpha);
}`,k1=`uniform float uTime;
uniform float uAudioData;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;
uniform vec2 u_resolution;

uniform float u_power;          
uniform float u_iterations;     
uniform float u_bailout;        
uniform vec3 u_color1;          
uniform vec3 u_color2;          
uniform float u_rotationSpeed;  
uniform float u_cameraDistance; 

uniform sampler2D uTexture;
uniform bool uHasTexture;

varying vec2 vUv;

float stime, ctime;

void ry(inout vec3 p, float a) {  
    float c, s;
    vec3 q = p;  
    c = cos(a);
    s = sin(a);  
    p.x = c * q.x + s * q.z;  
    p.z = -s * q.x + c * q.z; 
}

vec3 mandelbulb(vec3 p) {
    p.xyz = p.xzy;
    vec3 z = p;
    
    float timeMorph = sin(uTime * 0.3) * 2.0 + cos(uTime * 0.17) * 1.5;
    float power = u_power + timeMorph + u_bass * 2.0; 
    float r, theta, phi;
    float dr = 1.0;
    
    float t0 = 1.0;
    
    float timeIterMod = sin(uTime * 0.2) * 2.0;
    int maxIter = int(u_iterations + timeIterMod + u_mid * 3.0); 
    float dynamicBailout = u_bailout + sin(uTime * 0.25) * 0.5 + u_peak * 1.0; 
    
    for(int i = 0; i < 12; ++i) {
        if(i >= maxIter) break;
        
        r = length(z);
        if(r > dynamicBailout) continue;
        
        theta = atan(z.y, z.x);
        
        phi = asin(z.z / r) + u_treble * 0.5;
        
        dr = pow(r, power - 1.0) * dr * power + 1.0;
    
        r = pow(r, power);
        theta = theta * power;
        phi = phi * power;
        
        z = r * vec3(cos(theta)*cos(phi), sin(theta)*cos(phi), sin(phi)) + p;
        
        t0 = min(t0, r);
    }
    return vec3(0.5 * log(r) * r / dr, t0, 0.0);
}

vec3 f(vec3 p) { 
    ry(p, uTime * u_rotationSpeed);
    return mandelbulb(p); 
}

float softshadow(vec3 ro, vec3 rd, float k) { 
    float akuma = 1.0, h = 0.0; 
    float t = 0.01;
    for(int i = 0; i < 50; ++i) { 
        h = f(ro + rd * t).x; 
        if(h < 0.001) return 0.02; 
        akuma = min(akuma, k * h / t); 
        t += clamp(h, 0.01, 2.0); 
    } 
    return akuma; 
}

vec3 nor(in vec3 pos) {
    vec3 eps = vec3(0.001, 0.0, 0.0);
    return normalize(vec3(
        f(pos + eps.xyy).x - f(pos - eps.xyy).x,
        f(pos + eps.yxy).x - f(pos - eps.yxy).x,
        f(pos + eps.yyx).x - f(pos - eps.yyx).x
    ));
}

vec3 intersect(in vec3 ro, in vec3 rd) {
    float pixel_size = 1.0 / (u_resolution.x * 3.0);
    float t = 1.0;
    float res_t = 0.0;
    float res_d = 1000.0;
    vec3 c, res_c;
    float max_error = 1000.0;
    float d = 1.0;
    float pd = 100.0;
    float os = 0.0;
    float step = 0.0;
    float error = 1000.0;
    
    for(int i = 0; i < 48; i++) {
        if(error < pixel_size * 0.5 || t > 20.0) {
            break;
        }
        
        c = f(ro + rd * t);
        d = c.x;

        if(d > os) {
            os = 0.4 * d * d / pd;
            step = d + os;
            pd = d;
        } else {
            step = -os;
            os = 0.0;
            pd = 100.0;
            d = 1.0;
        }

        error = d / t;

        if(error < max_error) {
            max_error = error;
            res_t = t;
            res_c = c;
        }
        
        t += step;
    }
    
    if(t > 20.0) res_t = -1.0;
    return vec3(res_t, res_c.y, res_c.z);
}

void main() {
    vec2 q = vUv;
    vec2 uv = -1.0 + 2.0 * q;
    uv.x *= u_resolution.x / u_resolution.y;
    
    
    stime = 0.7 + 0.3 * sin(uTime * 0.4);
    ctime = 0.7 + 0.3 * cos(uTime * 0.4);

    vec3 ta = vec3(0.0, 0.0, 0.0);
    vec3 ro = vec3(0.0, u_cameraDistance * stime * ctime, u_cameraDistance * (1.0 - stime * ctime));

    vec3 cf = normalize(ta - ro);
    vec3 cs = normalize(cross(cf, vec3(0.0, 1.0, 0.0)));
    vec3 cu = normalize(cross(cs, cf));
    vec3 rd = normalize(uv.x * cs + uv.y * cu + 3.0 * cf);

    vec3 sundir = normalize(vec3(0.1, 0.8, 0.6));
    vec3 sun = vec3(1.64, 1.27, 0.99);
    vec3 skycolor = vec3(0.6, 1.5, 1.0);

    vec3 bg = exp(uv.y - 2.0) * vec3(0.4, 1.6, 1.0);

    float halo = clamp(dot(normalize(vec3(-ro.x, -ro.y, -ro.z)), rd), 0.0, 1.0);
    vec3 col = bg + vec3(1.0, 0.8, 0.4) * pow(halo, 17.0);

    vec3 res = intersect(ro, rd);
    float alpha = 1.0;
    
    if(res.x > 0.0) {
        vec3 p = ro + res.x * rd;
        vec3 n = nor(p);
        float shadow = softshadow(p, sundir, 10.0);

        float dif = max(0.0, dot(n, sundir));
        float sky = 0.6 + 0.4 * max(0.0, dot(n, vec3(0.0, 1.0, 0.0)));
        float bac = max(0.3 + 0.7 * dot(vec3(-sundir.x, -1.0, -sundir.z), n), 0.0);
        float spe = max(0.0, pow(clamp(dot(sundir, reflect(rd, n)), 0.0, 1.0), 10.0));

        vec3 lin = 4.5 * sun * dif * shadow;
        lin += 0.8 * bac * sun;
        lin += 0.6 * sky * skycolor * shadow;
        lin += 3.0 * spe * shadow;

        res.y = pow(clamp(res.y, 0.0, 1.0), 0.55);
        
        
        vec3 tc0 = 0.5 + 0.5 * sin(3.0 + 4.2 * res.y + vec3(0.0, 0.5, 1.0));
        vec3 baseColor = mix(u_color1, u_color2, res.y);
        col = lin * baseColor * 0.2 * tc0;
        
        
        col += u_bass * 0.3 * baseColor;
        
        col = mix(col, bg, 1.0 - exp(-0.001 * res.x * res.x));
        alpha = smoothstep(0.55, 0.76, 1.0 - res.x / 5.0);
    } else {
        alpha = 0.0;
    }

    
    col = pow(clamp(col, 0.0, 1.0), vec3(0.45));
    col = col * 0.6 + 0.4 * col * col * (3.0 - 2.0 * col);
    col = mix(col, vec3(dot(col, vec3(0.33))), -0.5);
    col *= 0.5 + 0.5 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.7);
    
    
    if(uHasTexture) {
        vec4 texColor = texture2D(uTexture, vUv);
        alpha *= texColor.a;
    }
    
    gl_FragColor = vec4(col, alpha);
}`,H1=`vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float perlinNoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

float fbm(vec3 p, int octaves, float persistence, float lacunarity) {
    float total = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float maxValue = 0.0;
    
    for (int i = 0; i < octaves; i++) {
        total += perlinNoise(p * frequency) * amplitude;
        maxValue += amplitude;
        amplitude *= persistence;
        frequency *= lacunarity;
    }
    
    return total / maxValue;
}

float turbulence(vec3 p, int octaves, float persistence, float lacunarity) {
    float total = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float maxValue = 0.0;
    
    for (int i = 0; i < octaves; i++) {
        total += abs(perlinNoise(p * frequency)) * amplitude;
        maxValue += amplitude;
        amplitude *= persistence;
        frequency *= lacunarity;
    }
    
    return total / maxValue;
}

uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;
uniform float u_baseAmount;
uniform float u_spikeAmount;
uniform float u_noiseScale;
uniform float u_noiseSpeed;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;
varying float vAudioIntensity;

void main() {
    vec3 pos = position;
    
    
    
    
    
    
    
    vec3 noiseInput1 = pos * u_noiseScale + vec3(u_time * u_noiseSpeed);
    vec3 noiseInput2 = pos * (u_noiseScale * 2.0) + vec3(u_time * u_noiseSpeed * 1.5);
    vec3 noiseInput3 = pos * (u_noiseScale * 0.5) + vec3(u_time * u_noiseSpeed * 0.7);
    
    float noise1 = fbm(noiseInput1, 4, 0.5, 2.0);
    float noise2 = fbm(noiseInput2, 3, 0.5, 2.0);
    float noise3 = fbm(noiseInput3, 2, 0.5, 2.0);
    
    
    noise1 = noise1 * 0.5 + 0.5;
    noise2 = noise2 * 0.5 + 0.5;
    noise3 = noise3 * 0.5 + 0.5;
    
    
    
    float bassDisplacement = pow(noise3, 3.0) * u_bass * u_spikeAmount * 0.8;
    
    
    float midDisplacement = pow(noise1, 4.0) * u_mid * u_spikeAmount * 1.5;
    
    
    float trebleDisplacement = pow(noise2, 6.0) * u_treble * u_spikeAmount * 1.2;
    
    
    float peakBoost = pow(u_peak, 3.0) * 0.5;
    
    
    float baseNoise = noise1 * u_baseAmount * (u_audioLevel * 0.5 + 0.5);
    
    
    float displacement = baseNoise + bassDisplacement + midDisplacement + trebleDisplacement + peakBoost;
    
    
    float beatPulse = u_peak * 0.3;
    displacement += beatPulse;
    
    
    vec3 newPosition = pos + normal * displacement;
    
    
    vNormal = normalize(normalMatrix * normal);
    vPosition = newPosition;
    vDisplacement = displacement;
    vAudioIntensity = u_bass * 0.3 + u_mid * 0.4 + u_treble * 0.3;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}`,G1=`precision highp float;

uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_time;
uniform float u_peak;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;
varying float vAudioIntensity;

void main() {
    
    vec3 normal = normalize(vNormal);
    
    
    float displacementFactor = clamp(vDisplacement / 1.5, 0.0, 1.0);
    displacementFactor = pow(displacementFactor, 1.5); 
    
    
    vec3 color = mix(u_color1, u_color2, displacementFactor);
    
    
    vec3 spikeColor = vec3(1.0, 0.8, 0.0); 
    float spikeHighlight = smoothstep(0.7, 1.0, displacementFactor);
    color = mix(color, spikeColor, spikeHighlight * 0.6);
    
    
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(dot(normal, lightDir), 0.0);
    
    
    vec3 lightDir2 = normalize(vec3(-0.5, -1.0, 0.5));
    float diffuse2 = max(dot(normal, lightDir2), 0.0) * 0.4;
    
    
    
    float ambient = 0.25 + vAudioIntensity * 0.25;
    
    
    vec3 finalColor = color * (diffuse * 0.6 + diffuse2 + ambient);
    
    
    float beatFlash = pow(u_peak, 4.0) * 0.3;
    finalColor += vec3(beatFlash);
    
    gl_FragColor = vec4(finalColor, 1.0);
}`,W1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_waveSpeed;
uniform float u_waveAmplitude;
uniform float u_audioInfluence;
uniform float u_waveScale;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vWaveHeight;

void main() {
    vec3 pos = position;
    
    
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    
    float audioInfluence = u_bass * 0.5 + u_mid * 0.3 + u_treble * 0.2;
    float sineWave = sin(worldPos.y * u_waveScale + u_time * u_waveSpeed);
    float displacement = sineWave * u_waveAmplitude + sineWave * audioInfluence * u_audioInfluence;
    
    vec3 newPosition = pos + normal * displacement;
    
    vNormal = normalize(normalMatrix * normal);
    vPosition = newPosition;
    vWaveHeight = sineWave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}`,X1=`precision highp float;

uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_time;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vWaveHeight;

void main() {
    
    vec3 normal = normalize(vNormal);
    
    
    
    float sineFactor = vWaveHeight * 0.5 + 0.5;
    
    
    vec3 color = mix(u_color1, u_color2, sineFactor);
    
    
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(dot(normal, lightDir), 0.0);
    
    
    vec3 viewDir = normalize(-vPosition);
    float rimPower = 1.0 - max(dot(viewDir, normal), 0.0);
    rimPower = pow(rimPower, 3.0);
    
    
    vec3 finalColor = color * (diffuse * 0.7 + 0.3) + vec3(rimPower * 0.2);
    
    gl_FragColor = vec4(finalColor, 1.0);
}`,j1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;

uniform float u_helixRadius;
uniform float u_helixHeight;
uniform float u_twistSpeed;
uniform float u_spacing;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vStrand; 
varying float vHeight;

#define PI 3.14159265359

void main() {
    vec3 pos = position;
    vec3 norm = normal;
    
    
    vStrand = step(0.0, position.x);
    
    
    float heightFactor = position.y;
    vHeight = heightFactor;
    
    
    float radius = u_helixRadius + u_bass * 0.3; 
    float spacing = u_spacing + u_mid * 2.0; 
    
    
    float angle = heightFactor * u_twistSpeed + u_time * 0.5;
    float strandOffset = vStrand * PI; 
    
    
    float helixAngle = angle + strandOffset;
    float x = cos(helixAngle) * radius;
    float z = sin(helixAngle) * radius;
    float y = heightFactor * u_helixHeight;
    
    
    float rungVibration = 0.0;
    if (abs(position.x) < 0.1) { 
        rungVibration = sin(u_time * 10.0 + heightFactor * 5.0) * u_treble * 0.2;
    }
    
    
    float pulse = u_peak * sin(heightFactor * 10.0 - u_time * 5.0) * 0.3;
    
    
    pos.x = x + rungVibration + pulse;
    pos.y = y;
    pos.z = z;
    
    
    vec3 tangent = normalize(vec3(-sin(helixAngle), u_helixHeight / u_twistSpeed, cos(helixAngle)));
    vec3 binormal = normalize(cross(tangent, vec3(cos(helixAngle), 0.0, sin(helixAngle))));
    norm = cross(binormal, tangent);
    
    vPosition = pos;
    vNormal = normalize(normalMatrix * norm);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,q1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;
uniform vec3 u_color1;
uniform vec3 u_color2;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vStrand;
varying float vHeight;

void main() {
    
    vec3 strand1Color = u_color1;
    vec3 strand2Color = u_color2;
    
    
    vec3 baseColor = mix(strand1Color, strand2Color, vStrand);
    
    
    float heightGradient = fract(vHeight * 0.5 + u_time * 0.2);
    vec3 gradientColor = mix(baseColor, baseColor * 1.5, heightGradient);
    
    
    float glow = u_bass * 0.5 + u_mid * 0.3;
    gradientColor += glow * baseColor;
    
    
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(vNormal, lightDir), 0.0);
    float ambient = 0.4;
    
    
    float flash = u_peak * 0.5;
    
    vec3 finalColor = gradientColor * (ambient + diff * 0.6) + flash;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`,Y1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;

uniform float u_waveScale;
uniform float u_waveSpeed;
uniform float u_viscosity;
uniform float u_dropIntensity;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vDisplacement;

#define PI 3.14159265359

float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    
    return mix(
        mix(mix(hash(p + vec3(0,0,0)), hash(p + vec3(1,0,0)), f.x),
            mix(hash(p + vec3(0,1,0)), hash(p + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(p + vec3(0,0,1)), hash(p + vec3(1,0,1)), f.x),
            mix(hash(p + vec3(0,1,1)), hash(p + vec3(1,1,1)), f.x), f.y),
        f.z);
}

void main() {
    vec3 pos = position;
    
    
    float dist = length(position.xy);
    
    
    float wave1 = sin(dist * u_waveScale - u_time * u_waveSpeed) * 0.3;
    float wave2 = sin(dist * u_waveScale * 1.5 - u_time * u_waveSpeed * 1.3) * 0.2;
    float wave3 = cos(dist * u_waveScale * 0.7 + u_time * u_waveSpeed * 0.8) * 0.15;
    
    
    float bassWave = sin(dist * 5.0 - u_time * 2.0) * u_bass * 0.5;
    float midWave = sin(dist * 8.0 + u_time * 3.0) * u_mid * 0.3;
    
    
    vec3 noisePos = position * 2.0 + vec3(u_time * 0.3);
    float noiseVal = noise(noisePos) * u_viscosity * 0.3;
    
    
    float dropWave = 0.0;
    float dropTime = mod(u_time, 3.0); 
    float dropRadius = dropTime * 2.0;
    float dropFalloff = exp(-abs(dist - dropRadius) * 2.0);
    dropWave = sin(dist * 10.0 - dropTime * 10.0) * dropFalloff * u_dropIntensity;
    
    
    float peakSplash = u_peak * sin(dist * 15.0 - u_time * 20.0) * exp(-dist * 0.5);
    
    
    float trebleRipple = sin(dist * 20.0 - u_time * 15.0) * u_treble * 0.2 * exp(-dist * 0.3);
    
    
    float displacement = wave1 + wave2 + wave3 + bassWave + midWave + noiseVal + dropWave + peakSplash + trebleRipple;
    
    
    pos += normal * displacement;
    
    
    float epsilon = 0.01;
    vec3 posX = position + vec3(epsilon, 0.0, 0.0);
    vec3 posZ = position + vec3(0.0, 0.0, epsilon);
    
    float distX = length(posX.xy);
    float distZ = length(posZ.xy);
    
    float dispX = sin(distX * u_waveScale - u_time * u_waveSpeed) * 0.3 + sin(distX * 5.0 - u_time * 2.0) * u_bass * 0.5;
    float dispZ = sin(distZ * u_waveScale - u_time * u_waveSpeed) * 0.3 + sin(distZ * 5.0 - u_time * 2.0) * u_bass * 0.5;
    
    vec3 tangentX = normalize(vec3(epsilon, 0.0, dispX - displacement));
    vec3 tangentZ = normalize(vec3(0.0, epsilon, dispZ - displacement));
    vec3 newNormal = cross(tangentZ, tangentX);
    
    vPosition = pos;
    vNormal = normalize(normalMatrix * newNormal);
    vDisplacement = displacement;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,K1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;
uniform vec3 u_color1;
uniform vec3 u_color2;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vDisplacement;

void main() {
    
    vec3 metalColor1 = u_color1;
    vec3 metalColor2 = u_color2;
    
    
    float mixFactor = clamp(vDisplacement * 2.0 + 0.5, 0.0, 1.0);
    vec3 baseColor = mix(metalColor1, metalColor2, mixFactor);
    
    
    vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    vec3 reflectDir = reflect(-lightDir, vNormal);
    
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    float diff = max(dot(vNormal, lightDir), 0.0);
    
    
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
    
    
    float audioShine = u_mid * 0.5 + u_treble * 0.3;
    
    
    vec3 ambient = baseColor * 0.3;
    vec3 diffuse = baseColor * diff * 0.5;
    vec3 specular = vec3(1.0) * spec * (1.0 + audioShine);
    vec3 fresnelColor = metalColor2 * fresnel * 0.5;
    
    
    float flash = u_peak * 0.7;
    
    vec3 finalColor = ambient + diffuse + specular + fresnelColor + flash;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`,$1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;

uniform float u_petalCount;
uniform float u_bloomAmount;
uniform float u_petalCurve;
uniform float u_centerSize;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vPetalId;
varying float vRadialPos;

#define PI 3.14159265359

void main() {
    vec3 pos = position;
    
    
    float angle = atan(position.x, position.z);
    float normalizedAngle = (angle + PI) / (2.0 * PI);
    
    
    float petalSegment = normalizedAngle * u_petalCount;
    vPetalId = floor(petalSegment);
    float petalPhase = fract(petalSegment); 
    
    
    float radius = length(position.xz);
    vRadialPos = radius;
    
    
    float bloomFactor = u_bloomAmount + u_bass * 0.5;
    bloomFactor = clamp(bloomFactor, 0.0, 1.5);
    
    
    float normalizedRadius = clamp(radius / 1.0, 0.0, 1.0);
    
    
    if (normalizedRadius < u_centerSize) {
        
        float centerPulse = 1.0 + u_mid * 0.2;
        pos *= centerPulse;
    } else {
        
        float radialFactor = (normalizedRadius - u_centerSize) / (1.0 - u_centerSize);
        
        
        float petalShape = sin(petalPhase * PI);
        
        
        float petalScale = 1.0 + petalShape * 0.3 * bloomFactor;
        
        
        float openingAngle = bloomFactor * radialFactor * 1.2; 
        
        
        float currentY = position.y;
        float currentRadius = radius;
        
        
        float newY = currentY - radialFactor * bloomFactor * 0.5; 
        float expansion = 1.0 + bloomFactor * radialFactor * 0.8; 
        
        
        pos.x = position.x * expansion * petalScale;
        pos.z = position.z * expansion * petalScale;
        pos.y = newY;
        
        
        float tipCurve = radialFactor * radialFactor * u_petalCurve * bloomFactor;
        pos.y += tipCurve;
        
        
        float flutter = sin(u_time * 10.0 + vPetalId * 2.0) * u_treble * 0.15 * radialFactor;
        pos.y += flutter;
    }
    
    
    float peakPulse = 1.0 + u_peak * 0.2;
    pos *= peakPulse;
    
    
    if (radius < u_centerSize * 0.5) {
        float stamenVibration = sin(u_time * 5.0) * u_audioLevel * 0.1;
        pos.y += stamenVibration;
    }
    
    vPosition = pos;
    vNormal = normalize(normalMatrix * normal);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,Z1=`uniform float u_time;
uniform float u_audioLevel;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_peak;
uniform vec3 u_color1; 
uniform vec3 u_color2; 
uniform vec3 u_color3; 

varying vec3 vPosition;
varying vec3 vNormal;
varying float vPetalId;
varying float vRadialPos;

void main() {
    
    float gradientFactor = clamp(vRadialPos * 2.0, 0.0, 1.0);
    
    
    vec3 baseColor = mix(u_color2, u_color1, gradientFactor);
    
    
    if (gradientFactor > 0.7) {
        float tipMix = (gradientFactor - 0.7) / 0.3;
        baseColor = mix(baseColor, u_color3, tipMix);
    }
    
    
    float petalMod = mod(vPetalId, 2.0);
    if (petalMod > 0.5) {
        baseColor = mix(baseColor, u_color3, 0.3);
    }
    
    
    float audioBrightness = u_mid * 0.3 + u_treble * 0.2;
    baseColor += audioBrightness;
    
    
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
    float diff = max(dot(vNormal, lightDir), 0.0);
    float ambient = 0.5;
    
    
    vec3 backLight = vec3(0.0, -1.0, 0.0);
    float backDiff = max(dot(vNormal, backLight), 0.0);
    float translucency = backDiff * 0.3 * gradientFactor;
    
    
    float flash = u_peak * 0.5;
    
    vec3 finalColor = baseColor * (ambient + diff * 0.7) + translucency * u_color1 + flash;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;const Tr={laser:{name:"Laser",vertex:la,fragment:B1,uniforms:{uTime:{value:0},uAudioData:{value:0},u_speed:{value:3},u_intensity:{value:1},u_color:{value:[1.7,.2,3]},uTexture:{value:null},uHasTexture:{value:!1}}},rings:{name:"Anneaux",vertex:la,fragment:z1,uniforms:{uTime:{value:0},uAudioData:{value:0},u_speed:{value:1},u_scale:{value:1},u_color1:{value:[.9,0,0]},u_color2:{value:[0,.9,0]},u_color3:{value:[0,0,.9]},uTexture:{value:null},uHasTexture:{value:!1}}},waves:{name:"Vagues",vertex:la,fragment:V1,uniforms:{uTime:{value:0},uAudioData:{value:0},u_speed:{value:1},u_intensity:{value:1},u_scale:{value:1},uTexture:{value:null},uHasTexture:{value:!1}}},fractal:{name:"Fractal",vertex:la,fragment:k1,uniforms:{uTime:{value:0},uAudioData:{value:0},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},u_peak:{value:0},u_resolution:{value:[window.innerWidth,window.innerHeight]},u_power:{value:8},u_iterations:{value:7},u_bailout:{value:2},u_rotationSpeed:{value:.2},u_cameraDistance:{value:3},u_color1:{value:[.9,.8,.6]},u_color2:{value:[.6,.3,.8]},uTexture:{value:null},uHasTexture:{value:!1}}}},pf=(i="laser")=>Tr[i]||Tr.laser,J1=()=>Object.keys(Tr).map(i=>({id:i,name:Tr[i].name})),Er={spiky:{name:"Spiky",vertex:H1,fragment:G1,uniforms:{u_time:{value:0},u_audioLevel:{value:0},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},u_peak:{value:0},u_baseAmount:{value:.5},u_spikeAmount:{value:5},u_noiseScale:{value:10},u_noiseSpeed:{value:.01},u_color1:{value:[.2,.5,1]},u_color2:{value:[1,.3,.5]}}},wave:{name:"Wave",vertex:W1,fragment:X1,uniforms:{u_time:{value:0},u_audioLevel:{value:0},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},u_waveSpeed:{value:2},u_waveAmplitude:{value:.1},u_audioInfluence:{value:1},u_waveScale:{value:6},u_color1:{value:[.1,.3,.8]},u_color2:{value:[.3,.8,1]}}},dna:{name:"DNA Helix",vertex:j1,fragment:q1,uniforms:{u_time:{value:0},u_audioLevel:{value:0},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},u_peak:{value:0},u_helixRadius:{value:.5},u_helixHeight:{value:2},u_twistSpeed:{value:3},u_spacing:{value:1},u_color1:{value:[.2,.5,1]},u_color2:{value:[1,.2,.5]}}},liquid:{name:"Liquid Metal",vertex:Y1,fragment:K1,uniforms:{u_time:{value:0},u_audioLevel:{value:0},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},u_peak:{value:0},u_waveScale:{value:3},u_waveSpeed:{value:2},u_viscosity:{value:1},u_dropIntensity:{value:.5},u_color1:{value:[.7,.8,.9]},u_color2:{value:[.3,.4,.6]}}},flower:{name:"Blooming Flower",vertex:$1,fragment:Z1,uniforms:{u_time:{value:0},u_audioLevel:{value:0},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},u_peak:{value:0},u_petalCount:{value:8},u_bloomAmount:{value:.8},u_petalCurve:{value:1.5},u_centerSize:{value:.3},u_color1:{value:[1,.3,.5]},u_color2:{value:[1,.9,.2]},u_color3:{value:[1,.6,.8]}}}},mf=(i="spiky")=>Er[i]||Er.spiky,Q1=()=>Object.keys(Er).map(i=>({id:i,name:Er[i].name})),eT=(i="spiky")=>(Er[i]||Er.spiky).uniforms,tT=(i="laser")=>(Tr[i]||Tr.laser).uniforms;let tt,En=null,Ro="laser";const nT=()=>tT(Ro),iT=(i,e)=>{!tt||!tt.material||!tt.material.uniforms||tt.material.uniforms[i]&&(tt.material.uniforms[i].value=e)},Am=(i,e)=>{console.log("[generate2DVisualizer] Génération du visualizer 2D, customTexture:",!!En);const t=e.position.z,n=e.fov*Math.PI/180,s=2*Math.tan(n/2)*t,r=s*e.aspect,o=new Us(r,s),a=pf(Ro),l={};for(const u in a.uniforms)l[u]={value:a.uniforms[u].value};En&&(l.uTexture&&(l.uTexture.value=En),l.u_texture&&(l.u_texture.value=En),l.uHasTexture&&(l.uHasTexture.value=!0)),l.u_resolution&&(l.u_resolution.value=[window.innerWidth,window.innerHeight]);const c=new Qt({vertexShader:a.vertex,fragmentShader:a.fragment,uniforms:l,transparent:!0});return tt=new Gt(o,c),i.add(tt),tt},sT=(i,e)=>{if(!tt||!tt.material||!tt.material.uniforms)return;const t=tt.material.uniforms;t.uTime&&(t.uTime.value=e),t.u_time&&(t.u_time.value=e),t.uAudioData&&(t.uAudioData.value=i.overall),t.u_audioLevel&&(t.u_audioLevel.value=i.overall),t.u_bass&&(t.u_bass.value=i.bass),t.u_mid&&(t.u_mid.value=i.mid),t.u_treble&&(t.u_treble.value=i.treble),t.u_peak&&(t.u_peak.value=i.peak),t.u_energy&&(t.u_energy.value=i.energy),t.u_resolution&&(t.u_resolution.value=[window.innerWidth,window.innerHeight])},rT=i=>{tt&&(i.remove(tt),tt.geometry.dispose(),tt.material.dispose(),tt=null)},oT=()=>{console.log("[resetToDefaultImage] Réinitialisation de l'image"),En=null,Ro="laser"},aT=i=>{if(!tt||!i)return;const e=i.position.z,t=i.fov*Math.PI/180,n=2*Math.tan(t/2)*e,s=n*i.aspect;tt.geometry.dispose(),tt.geometry=new Us(s,n)},lT=(i,e)=>{if(!tt||!e)return;const t=pf(i),n={};for(const r in t.uniforms)n[r]={value:t.uniforms[r].value};tt.material.uniforms.uTime&&n.uTime&&(n.uTime.value=tt.material.uniforms.uTime.value),tt.material.uniforms.uAudioData&&n.uAudioData&&(n.uAudioData.value=tt.material.uniforms.uAudioData.value),tt.material.uniforms.u_time&&n.u_time&&(n.u_time.value=tt.material.uniforms.u_time.value),tt.material.uniforms.u_audioLevel&&n.u_audioLevel&&(n.u_audioLevel.value=tt.material.uniforms.u_audioLevel.value),En&&(n.uTexture&&(n.uTexture.value=En),n.uHasTexture&&(n.uHasTexture.value=!0)),i==="pixelSort"&&(En&&n.u_texture&&(n.u_texture.value=En),n.u_resolution&&(n.u_resolution.value=[window.innerWidth,window.innerHeight]));const s=new Qt({vertexShader:t.vertex,fragmentShader:t.fragment,uniforms:n,transparent:!0});tt.material.dispose(),tt.material=s,Ro=i},cT=(i,e)=>{new uf().load(i,n=>{En=n,En.minFilter=Zt,En.magFilter=Zt;const s=n.image.width,r=n.image.height,o=s/r;let a,l;const c=4;if(o>1?(a=c,l=c/o):(l=c,a=c*o),tt&&e){e.remove(tt),tt.geometry.dispose(),tt.material.dispose();const u=new Us(a,l),f=pf("texture"),h={};for(const m in f.uniforms)h[m]={value:f.uniforms[m].value};h.uTexture.value=En;const d=new Qt({vertexShader:f.vertex,fragmentShader:f.fragment,uniforms:h});tt=new Gt(u,d),e.add(tt),Ro="texture"}})},wm=parseInt(il.replace(/\D+/g,"")),uT=wm>=125?"uv1":"uv2";function Cd(i,e){if(e===h_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===du||e===im){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(t)if(e===du)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ln=Uint8Array,Zi=Uint16Array,yu=Uint32Array,Rm=new Ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cm=new Ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fT=new Ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pm=function(i,e){for(var t=new Zi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new yu(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},Im=Pm(Rm,2),Dm=Im[0],hT=Im[1];Dm[28]=258,hT[258]=28;var dT=Pm(Cm,0),pT=dT[0],bu=new Zi(32768);for(var Et=0;Et<32768;++Et){var Hi=(Et&43690)>>>1|(Et&21845)<<1;Hi=(Hi&52428)>>>2|(Hi&13107)<<2,Hi=(Hi&61680)>>>4|(Hi&3855)<<4,bu[Et]=((Hi&65280)>>>8|(Hi&255)<<8)>>>1}var ro=(function(i,e,t){for(var n=i.length,s=0,r=new Zi(e);s<n;++s)++r[i[s]-1];var o=new Zi(e);for(s=0;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Zi(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],f=o[i[s]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[bu[f]>>>l]=c}else for(a=new Zi(n),s=0;s<n;++s)i[s]&&(a[s]=bu[o[i[s]-1]++]>>>15-i[s]);return a}),Co=new Ln(288);for(var Et=0;Et<144;++Et)Co[Et]=8;for(var Et=144;Et<256;++Et)Co[Et]=9;for(var Et=256;Et<280;++Et)Co[Et]=7;for(var Et=280;Et<288;++Et)Co[Et]=8;var Lm=new Ln(32);for(var Et=0;Et<32;++Et)Lm[Et]=5;var mT=ro(Co,9,1),gT=ro(Lm,5,1),lc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},kn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},cc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},xT=function(i){return(i/8|0)+(i&7&&1)},_T=function(i,e,t){(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Zi?Zi:i instanceof yu?yu:Ln)(t-e);return n.set(i.subarray(e,t)),n},vT=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new Ln(0);var s=!e||t,r=!t||t.i;t||(t={}),e||(e=new Ln(n*3));var o=function(te){var oe=e.length;if(te>oe){var Me=new Ln(Math.max(oe*2,te));Me.set(e),e=Me}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,d=t.n,m=n*8;do{if(!u){t.f=a=kn(i,l,1);var x=kn(i,l+1,3);if(l+=3,x)if(x==1)u=mT,f=gT,h=9,d=5;else if(x==2){var y=kn(i,l,31)+257,M=kn(i,l+10,15)+4,R=y+kn(i,l+5,31)+1;l+=14;for(var T=new Ln(R),C=new Ln(19),N=0;N<M;++N)C[fT[N]]=kn(i,l+N*3,7);l+=M*3;for(var A=lc(C),v=(1<<A)-1,U=ro(C,A,1),N=0;N<R;){var k=U[kn(i,l,v)];l+=k&15;var g=k>>>4;if(g<16)T[N++]=g;else{var q=0,se=0;for(g==16?(se=3+kn(i,l,3),l+=2,q=T[N-1]):g==17?(se=3+kn(i,l,7),l+=3):g==18&&(se=11+kn(i,l,127),l+=7);se--;)T[N++]=q}}var ie=T.subarray(0,y),Q=T.subarray(y);h=lc(ie),d=lc(Q),u=ro(ie,h,1),f=ro(Q,d,1)}else throw"invalid block type";else{var g=xT(l)+4,p=i[g-4]|i[g-3]<<8,b=g+p;if(b>n){if(r)throw"unexpected EOF";break}s&&o(c+p),e.set(i.subarray(g,b),c),t.b=c+=p,t.p=l=b*8;continue}if(l>m){if(r)throw"unexpected EOF";break}}s&&o(c+131072);for(var ne=(1<<h)-1,H=(1<<d)-1,fe=l;;fe=l){var q=u[cc(i,l)&ne],de=q>>>4;if(l+=q&15,l>m){if(r)throw"unexpected EOF";break}if(!q)throw"invalid length/literal";if(de<256)e[c++]=de;else if(de==256){fe=l,u=null;break}else{var we=de-254;if(de>264){var N=de-257,Oe=Rm[N];we=kn(i,l,(1<<Oe)-1)+Dm[N],l+=Oe}var Je=f[cc(i,l)&H],rt=Je>>>4;if(!Je)throw"invalid distance";l+=Je&15;var Q=pT[rt];if(rt>3){var Oe=Cm[rt];Q+=cc(i,l)&(1<<Oe)-1,l+=Oe}if(l>m){if(r)throw"unexpected EOF";break}s&&o(c+131072);for(var lt=c+we;c<lt;c+=4)e[c]=e[c-Q],e[c+1]=e[c+1-Q],e[c+2]=e[c+2-Q],e[c+3]=e[c+3-Q];c=lt}}t.l=u,t.p=fe,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=d)}while(!a);return c==e.length?e:_T(e,0,c)},yT=new Ln(0),bT=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function MT(i,e){return vT((bT(i),i.subarray(2,-4)),e)}var ST=typeof TextDecoder<"u"&&new TextDecoder,TT=0;try{ST.decode(yT,{stream:!0}),TT=1}catch{}var ET=Object.defineProperty,AT=(i,e,t)=>e in i?ET(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,wT=(i,e,t)=>(AT(i,e+"",t),t);class RT{constructor(){wT(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}var CT=Object.defineProperty,PT=(i,e,t)=>e in i?CT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Ve=(i,e,t)=>(PT(i,typeof e!="symbol"?e+"":e,t),t);const ca=new Eo,Pd=new Yi,IT=Math.cos(70*(Math.PI/180)),Id=(i,e)=>(i%e+e)%e;class DT extends RT{constructor(e,t){super(),Ve(this,"object"),Ve(this,"domElement"),Ve(this,"enabled",!0),Ve(this,"target",new O),Ve(this,"minDistance",0),Ve(this,"maxDistance",1/0),Ve(this,"minZoom",0),Ve(this,"maxZoom",1/0),Ve(this,"minPolarAngle",0),Ve(this,"maxPolarAngle",Math.PI),Ve(this,"minAzimuthAngle",-1/0),Ve(this,"maxAzimuthAngle",1/0),Ve(this,"enableDamping",!1),Ve(this,"dampingFactor",.05),Ve(this,"enableZoom",!0),Ve(this,"zoomSpeed",1),Ve(this,"enableRotate",!0),Ve(this,"rotateSpeed",1),Ve(this,"enablePan",!0),Ve(this,"panSpeed",1),Ve(this,"screenSpacePanning",!0),Ve(this,"keyPanSpeed",7),Ve(this,"zoomToCursor",!1),Ve(this,"autoRotate",!1),Ve(this,"autoRotateSpeed",2),Ve(this,"reverseOrbit",!1),Ve(this,"reverseHorizontalOrbit",!1),Ve(this,"reverseVerticalOrbit",!1),Ve(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Ve(this,"mouseButtons",{LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN}),Ve(this,"touches",{ONE:Os.ROTATE,TWO:Os.DOLLY_PAN}),Ve(this,"target0"),Ve(this,"position0"),Ve(this,"zoom0"),Ve(this,"_domElementKeyEvents",null),Ve(this,"getPolarAngle"),Ve(this,"getAzimuthalAngle"),Ve(this,"setPolarAngle"),Ve(this,"setAzimuthalAngle"),Ve(this,"getDistance"),Ve(this,"getZoomScale"),Ve(this,"listenToKeyEvents"),Ve(this,"stopListenToKeyEvents"),Ve(this,"saveState"),Ve(this,"reset"),Ve(this,"update"),Ve(this,"connect"),Ve(this,"dispose"),Ve(this,"dollyIn"),Ve(this,"dollyOut"),Ve(this,"getScale"),Ve(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=D=>{let X=Id(D,2*Math.PI),he=u.phi;he<0&&(he+=2*Math.PI),X<0&&(X+=2*Math.PI);let I=Math.abs(X-he);2*Math.PI-I<I&&(X<he?X+=2*Math.PI:he+=2*Math.PI),f.phi=X-he,n.update()},this.setAzimuthalAngle=D=>{let X=Id(D,2*Math.PI),he=u.theta;he<0&&(he+=2*Math.PI),X<0&&(X+=2*Math.PI);let I=Math.abs(X-he);2*Math.PI-I<I&&(X<he?X+=2*Math.PI:he+=2*Math.PI),f.theta=X-he,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=D=>{D.addEventListener("keydown",V),this._domElementKeyEvents=D},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",V),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(s),n.update(),l=a.NONE},this.update=(()=>{const D=new O,X=new O(0,1,0),he=new pn().setFromUnitVectors(e.up,X),I=he.clone().invert(),pe=new O,xe=new pn,_e=2*Math.PI;return function(){const re=n.object.position;he.setFromUnitVectors(e.up,X),I.copy(he).invert(),D.copy(re).sub(n.target),D.applyQuaternion(he),u.setFromVector3(D),n.autoRotate&&l===a.NONE&&se(k()),n.enableDamping?(u.theta+=f.theta*n.dampingFactor,u.phi+=f.phi*n.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let Te=n.minAzimuthAngle,Be=n.maxAzimuthAngle;isFinite(Te)&&isFinite(Be)&&(Te<-Math.PI?Te+=_e:Te>Math.PI&&(Te-=_e),Be<-Math.PI?Be+=_e:Be>Math.PI&&(Be-=_e),Te<=Be?u.theta=Math.max(Te,Math.min(Be,u.theta)):u.theta=u.theta>(Te+Be)/2?Math.max(Te,u.theta):Math.min(Be,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&A||n.object.isOrthographicCamera?u.radius=Je(u.radius):u.radius=Je(u.radius*h),D.setFromSpherical(u),D.applyQuaternion(I),re.copy(n.target).add(D),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),d.set(0,0,0));let dt=!1;if(n.zoomToCursor&&A){let at=null;if(n.object instanceof Bt&&n.object.isPerspectiveCamera){const Xt=D.length();at=Je(Xt*h);const jt=Xt-at;n.object.position.addScaledVector(C,jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Xt=new O(N.x,N.y,0);Xt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),dt=!0;const jt=new O(N.x,N.y,0);jt.unproject(n.object),n.object.position.sub(jt).add(Xt),n.object.updateMatrixWorld(),at=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;at!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(at).add(n.object.position):(ca.origin.copy(n.object.position),ca.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ca.direction))<IT?e.lookAt(n.target):(Pd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ca.intersectPlane(Pd,n.target))))}else n.object instanceof As&&n.object.isOrthographicCamera&&(dt=h!==1,dt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix()));return h=1,A=!1,dt||pe.distanceToSquared(n.object.position)>c||8*(1-xe.dot(n.object.quaternion))>c?(n.dispatchEvent(s),pe.copy(n.object.position),xe.copy(n.object.quaternion),dt=!1,!0):!1}})(),this.connect=D=>{n.domElement=D,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",Ce),n.domElement.addEventListener("pointerdown",ue),n.domElement.addEventListener("pointercancel",_),n.domElement.addEventListener("wheel",ee)},this.dispose=()=>{var D,X,he,I,pe,xe;n.domElement&&(n.domElement.style.touchAction="auto"),(D=n.domElement)==null||D.removeEventListener("contextmenu",Ce),(X=n.domElement)==null||X.removeEventListener("pointerdown",ue),(he=n.domElement)==null||he.removeEventListener("pointercancel",_),(I=n.domElement)==null||I.removeEventListener("wheel",ee),(pe=n.domElement)==null||pe.ownerDocument.removeEventListener("pointermove",S),(xe=n.domElement)==null||xe.ownerDocument.removeEventListener("pointerup",_),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",V)};const n=this,s={type:"change"},r={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,u=new id,f=new id;let h=1;const d=new O,m=new ke,x=new ke,g=new ke,p=new ke,b=new ke,y=new ke,M=new ke,R=new ke,T=new ke,C=new O,N=new ke;let A=!1;const v=[],U={};function k(){return 2*Math.PI/60/60*n.autoRotateSpeed}function q(){return Math.pow(.95,n.zoomSpeed)}function se(D){n.reverseOrbit||n.reverseHorizontalOrbit?f.theta+=D:f.theta-=D}function ie(D){n.reverseOrbit||n.reverseVerticalOrbit?f.phi+=D:f.phi-=D}const Q=(()=>{const D=new O;return function(he,I){D.setFromMatrixColumn(I,0),D.multiplyScalar(-he),d.add(D)}})(),ne=(()=>{const D=new O;return function(he,I){n.screenSpacePanning===!0?D.setFromMatrixColumn(I,1):(D.setFromMatrixColumn(I,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(he),d.add(D)}})(),H=(()=>{const D=new O;return function(he,I){const pe=n.domElement;if(pe&&n.object instanceof Bt&&n.object.isPerspectiveCamera){const xe=n.object.position;D.copy(xe).sub(n.target);let _e=D.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*he*_e/pe.clientHeight,n.object.matrix),ne(2*I*_e/pe.clientHeight,n.object.matrix)}else pe&&n.object instanceof As&&n.object.isOrthographicCamera?(Q(he*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),ne(I*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function fe(D){n.object instanceof Bt&&n.object.isPerspectiveCamera||n.object instanceof As&&n.object.isOrthographicCamera?h=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function de(D){fe(h/D)}function we(D){fe(h*D)}function Oe(D){if(!n.zoomToCursor||!n.domElement)return;A=!0;const X=n.domElement.getBoundingClientRect(),he=D.clientX-X.left,I=D.clientY-X.top,pe=X.width,xe=X.height;N.x=he/pe*2-1,N.y=-(I/xe)*2+1,C.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function Je(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function rt(D){m.set(D.clientX,D.clientY)}function lt(D){Oe(D),M.set(D.clientX,D.clientY)}function te(D){p.set(D.clientX,D.clientY)}function oe(D){x.set(D.clientX,D.clientY),g.subVectors(x,m).multiplyScalar(n.rotateSpeed);const X=n.domElement;X&&(se(2*Math.PI*g.x/X.clientHeight),ie(2*Math.PI*g.y/X.clientHeight)),m.copy(x),n.update()}function Me(D){R.set(D.clientX,D.clientY),T.subVectors(R,M),T.y>0?de(q()):T.y<0&&we(q()),M.copy(R),n.update()}function Xe(D){b.set(D.clientX,D.clientY),y.subVectors(b,p).multiplyScalar(n.panSpeed),H(y.x,y.y),p.copy(b),n.update()}function De(D){Oe(D),D.deltaY<0?we(q()):D.deltaY>0&&de(q()),n.update()}function Qe(D){let X=!1;switch(D.code){case n.keys.UP:H(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:H(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:H(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:H(-n.keyPanSpeed,0),X=!0;break}X&&(D.preventDefault(),n.update())}function P(){if(v.length==1)m.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),X=.5*(v[0].pageY+v[1].pageY);m.set(D,X)}}function L(){if(v.length==1)p.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),X=.5*(v[0].pageY+v[1].pageY);p.set(D,X)}}function G(){const D=v[0].pageX-v[1].pageX,X=v[0].pageY-v[1].pageY,he=Math.sqrt(D*D+X*X);M.set(0,he)}function w(){n.enableZoom&&G(),n.enablePan&&L()}function $(){n.enableZoom&&G(),n.enableRotate&&P()}function Z(D){if(v.length==1)x.set(D.pageX,D.pageY);else{const he=Re(D),I=.5*(D.pageX+he.x),pe=.5*(D.pageY+he.y);x.set(I,pe)}g.subVectors(x,m).multiplyScalar(n.rotateSpeed);const X=n.domElement;X&&(se(2*Math.PI*g.x/X.clientHeight),ie(2*Math.PI*g.y/X.clientHeight)),m.copy(x)}function ce(D){if(v.length==1)b.set(D.pageX,D.pageY);else{const X=Re(D),he=.5*(D.pageX+X.x),I=.5*(D.pageY+X.y);b.set(he,I)}y.subVectors(b,p).multiplyScalar(n.panSpeed),H(y.x,y.y),p.copy(b)}function Y(D){const X=Re(D),he=D.pageX-X.x,I=D.pageY-X.y,pe=Math.sqrt(he*he+I*I);R.set(0,pe),T.set(0,Math.pow(R.y/M.y,n.zoomSpeed)),de(T.y),M.copy(R)}function ae(D){n.enableZoom&&Y(D),n.enablePan&&ce(D)}function W(D){n.enableZoom&&Y(D),n.enableRotate&&Z(D)}function ue(D){var X,he;n.enabled!==!1&&(v.length===0&&((X=n.domElement)==null||X.ownerDocument.addEventListener("pointermove",S),(he=n.domElement)==null||he.ownerDocument.addEventListener("pointerup",_)),Ee(D),D.pointerType==="touch"?Se(D):F(D))}function S(D){n.enabled!==!1&&(D.pointerType==="touch"?ge(D):j(D))}function _(D){var X,he,I;le(D),v.length===0&&((X=n.domElement)==null||X.releasePointerCapture(D.pointerId),(he=n.domElement)==null||he.ownerDocument.removeEventListener("pointermove",S),(I=n.domElement)==null||I.ownerDocument.removeEventListener("pointerup",_)),n.dispatchEvent(o),l=a.NONE}function F(D){let X;switch(D.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case qi.DOLLY:if(n.enableZoom===!1)return;lt(D),l=a.DOLLY;break;case qi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;te(D),l=a.PAN}else{if(n.enableRotate===!1)return;rt(D),l=a.ROTATE}break;case qi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;rt(D),l=a.ROTATE}else{if(n.enablePan===!1)return;te(D),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&n.dispatchEvent(r)}function j(D){if(n.enabled!==!1)switch(l){case a.ROTATE:if(n.enableRotate===!1)return;oe(D);break;case a.DOLLY:if(n.enableZoom===!1)return;Me(D);break;case a.PAN:if(n.enablePan===!1)return;Xe(D);break}}function ee(D){n.enabled===!1||n.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(D.preventDefault(),n.dispatchEvent(r),De(D),n.dispatchEvent(o))}function V(D){n.enabled===!1||n.enablePan===!1||Qe(D)}function Se(D){switch(ve(D),v.length){case 1:switch(n.touches.ONE){case Os.ROTATE:if(n.enableRotate===!1)return;P(),l=a.TOUCH_ROTATE;break;case Os.PAN:if(n.enablePan===!1)return;L(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(n.touches.TWO){case Os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(),l=a.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&n.dispatchEvent(r)}function ge(D){switch(ve(D),l){case a.TOUCH_ROTATE:if(n.enableRotate===!1)return;Z(D),n.update();break;case a.TOUCH_PAN:if(n.enablePan===!1)return;ce(D),n.update();break;case a.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(D),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(D),n.update();break;default:l=a.NONE}}function Ce(D){n.enabled!==!1&&D.preventDefault()}function Ee(D){v.push(D)}function le(D){delete U[D.pointerId];for(let X=0;X<v.length;X++)if(v[X].pointerId==D.pointerId){v.splice(X,1);return}}function ve(D){let X=U[D.pointerId];X===void 0&&(X=new ke,U[D.pointerId]=X),X.set(D.pageX,D.pageY)}function Re(D){const X=D.pointerId===v[0].pointerId?v[1]:v[0];return U[X.pointerId]}this.dollyIn=(D=q())=>{we(D),n.update()},this.dollyOut=(D=q())=>{de(D),n.update()},this.getScale=()=>h,this.setScale=D=>{fe(D),n.update()},this.getZoomScale=()=>q(),t!==void 0&&this.connect(t),this.update()}}function Ar(i){if(typeof TextDecoder<"u")return new TextDecoder().decode(i);let e="";for(let t=0,n=i.length;t<n;t++)e+=String.fromCharCode(i[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Ms="srgb",Ci="srgb-linear",Dd=3001,LT=3e3;class UT extends ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new $T(t)}),this.register(function(t){return new ZT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new JT(t)}),this.register(function(t){return new QT(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fr.extractUrlBase(e);o=fr.resolveURL(c,this.path)}else o=fr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new cl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ar(new Uint8Array(e.slice(0,4)))===Um){try{o[it.KHR_BINARY_GLTF]=new eE(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(Ar(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new dE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],f=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new OT;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new tE(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new nE;break;case it.KHR_MESH_QUANTIZATION:o[u]=new iE;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function NT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FT{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ci);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ym(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _u(u),c.distance=f;break;case"spot":c=new vm(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class OT{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return bs}extendParams(e,t,n){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ci),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ms))}return Promise.all(s)}}class BT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class kT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class HT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ci)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ms)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class WT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Ci),Promise.all(r)}}class XT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class jT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Ci),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ms)),Promise.all(r)}}class qT{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class YT{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class KT{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class $T{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZT{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JT{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class QT{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const m of f){const x=new Ie,g=new O,p=new pn,b=new O(1,1,1),y=new gv(m.geometry,m.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,x.compose(g,p,b));for(const M in l)if(M==="_COLOR_0"){const R=l[M];y.instanceColor=new mu(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);St.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Um="glTF",jr=12,Ld={JSON:1313821514,BIN:5130562};class eE{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr);if(this.header={magic:Ar(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-jr,s=new DataView(e,jr);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===Ld.JSON){const l=new Uint8Array(e,jr+r,o);this.content=Ar(l)}else if(a===Ld.BIN){const l=jr+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Mu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Mu[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=hr[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const m in d.attributes){const x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}f(d)},a,c,Ci,h)})})}}class nE{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iE{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Nm extends wo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,d=h*f,m=e*c,x=m-c,g=-2*d+3*h,p=d-h,b=1-g,y=p-h+f;for(let M=0;M!==a;M++){const R=o[x+M+a],T=o[x+M+l]*u,C=o[m+M+a],N=o[m+M]*u;r[M]=b*R+y*T+g*C+p*N}return r}}const sE=new pn;class rE extends Nm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return sE.fromArray(r).normalize().toArray(r),r}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ud={9728:gn,9729:Zt,9984:$p,9985:xa,9986:Yr,9987:Ei},Nd={33071:Un,33648:Fa,10497:ts},uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...wm>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oE={CUBICSPLINE:void 0,LINEAR:_o,STEP:xo},fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new cf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),i.DefaultMaterial}function ms(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function cE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uE(i){let e;const t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hc(t.attributes):e=i.indices+":"+hc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hc(i.targets[n]);return e}function hc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Su(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hE=new Ie;class dE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new uf(this.options.manager):this.textureLoader=new kv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ms(r,a,s),bi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(fr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=uc[s.type],a=hr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new on(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=uc[s.type],c=hr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let x,g;if(d&&d!==f){const p=Math.floor(h/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(b);y||(x=new c(a,p*d,s.count*d/u),y=new hv(x,d/u),t.cache.add(b,y)),g=new sf(y,l,h%d/u,m)}else a===null?x=new c(s.count*l):x=new c(a,h,s.count*l),g=new on(x,l,m);if(s.sparse!==void 0){const p=uc.SCALAR,b=hr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,R=new b(o[1],y,s.sparse.count*p),T=new c(o[2],M,s.sparse.count*l);a!==null&&(g=new on(g.array.slice(),g.itemSize,g.normalized));for(let C=0,N=R.length;C<N;C++){const A=R[C];if(g.setX(A,T[C*l]),l>=2&&g.setY(A,T[C*l+1]),l>=3&&g.setZ(A,T[C*l+2]),l>=4&&g.setW(A,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ud[h.magFilter]||Zt,u.minFilter=Ud[h.minFilter]||Ei,u.wrapS=Nd[h.wrapS]||ts,u.wrapT=Nd[h.wrapT]||ts,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Nt(x);g.needsUpdate=!0,h(g)}),t.load(fr.resolveURL(f,r.path),m,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),bi(f,o),f.userData.mimeType=o.mimeType||fE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(typeof s=="number"&&(s=s===Dd?Ms:Ci),"colorSpace"in o?o.colorSpace=s:o.encoding=s===Ms?Dd:LT),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nr,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ur,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return cf}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const f=s[it.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ci),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ms)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);const u=r.alphaMode||fc.OPAQUE;if(u===fc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===fc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==bs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bs){const f=r.emissiveFactor;a.emissive=new Ne().setRGB(f[0],f[1],f[2],Ci)}return r.emissiveTexture!==void 0&&o!==bs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ms)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),bi(f,r),t.associations.set(f,{materials:e}),r.extensions&&ms(s,f,r),f})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=uE(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Fd(new Ht,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?aE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,m=u.length;d<m;d++){const x=u[d],g=o[d];let p;const b=c[d];if(g.mode===Pn.TRIANGLES||g.mode===Pn.TRIANGLE_STRIP||g.mode===Pn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new dm(x,b):new Gt(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Pn.TRIANGLE_STRIP?p.geometry=Cd(p.geometry,im):g.mode===Pn.TRIANGLE_FAN&&(p.geometry=Cd(p.geometry,du));else if(g.mode===Pn.LINES)p=new gu(x,b);else if(g.mode===Pn.LINE_STRIP)p=new ll(x,b);else if(g.mode===Pn.LINE_LOOP)p=new yv(x,b);else if(g.mode===Pn.POINTS)p=new Ma(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&cE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),g.extensions&&ms(s,p,g),t.assignFinalMaterial(p),f.push(p)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&ms(s,f[0],r),f[0];const h=new jn;r.extensions&&ms(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Gn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new As(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Ie;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new al(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],m=s.samplers[d.sampler],x=d.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],m=f[2],x=f[3],g=f[4],p=[];for(let b=0,y=h.length;b<y;b++){const M=h[b],R=d[b],T=m[b],C=x[b],N=g[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const A=n._createAnimationTracks(M,R,T,C,N);if(A)for(let v=0;v<A.length;v++)p.push(A[v])}return new _m(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,hE)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Va:c.length>1?u=new jn:c.length===1?u=c[0]:u=new St,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),bi(u,r),r.extensions&&ms(n,u,r),r.matrix!==void 0){const f=new Ie;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new jn;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&ms(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof xn||h instanceof Nt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Gi[r.path]===Gi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Gi[r.path]){case Gi.weights:c=Ps;break;case Gi.rotation:c=Is;break;case Gi.position:case Gi.scale:c=Ds;break;default:switch(n.itemSize){case 1:c=Ps;break;case 2:case 3:default:c=Ds;break}break}const u=s.interpolation!==void 0?oE[s.interpolation]:_o,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const m=new c(l[h]+"."+Gi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Su(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Is?rE:Nm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pE(i,e,t){const n=e.attributes,s=new li;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=Su(hr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const x=Su(hr[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ci;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Fd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Mu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return bi(i,e),pE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lE(i,e.targets,t):i})}function Fm(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let s=i,r=n,o=Math.floor((s+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:s=o,o=Math.floor((s+r)/2);return o}function mE(i,e,t,n){const s=[],r=[],o=[];s[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],f=r[a-c],h=s[c]/(u+f);s[c]=l+u*h,l=f*h}s[a]=l}return s}function gE(i,e,t,n){const s=Fm(i,n,e),r=mE(s,n,i,e),o=new ot(0,0,0,0);for(let a=0;a<=i;++a){const l=t[s-i+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function xE(i,e,t,n,s){const r=[];for(let f=0;f<=t;++f)r[f]=0;const o=[];for(let f=0;f<=n;++f)o[f]=r.slice(0);const a=[];for(let f=0;f<=t;++f)a[f]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let f=1;f<=t;++f){l[f]=e-s[i+1-f],c[f]=s[i+f]-e;let h=0;for(let d=0;d<f;++d){const m=c[d+1],x=l[f-d];a[f][d]=m+x;const g=a[d][f-1]/a[f][d];a[d][f]=h+m*g,h=x*g}a[f][f]=h}for(let f=0;f<=t;++f)o[0][f]=a[f][t];for(let f=0;f<=t;++f){let h=0,d=1;const m=[];for(let x=0;x<=t;++x)m[x]=r.slice(0);m[0][0]=1;for(let x=1;x<=n;++x){let g=0;const p=f-x,b=t-x;f>=x&&(m[d][0]=m[h][0]/a[b+1][p],g=m[d][0]*a[p][b]);const y=p>=-1?1:-p,M=f-1<=b?x-1:t-f;for(let T=y;T<=M;++T)m[d][T]=(m[h][T]-m[h][T-1])/a[b+1][p+T],g+=m[d][T]*a[p+T][b];f<=b&&(m[d][x]=-m[h][x-1]/a[b+1][f],g+=m[d][x]*a[f][b]),o[x][f]=g;const R=h;h=d,d=R}}let u=t;for(let f=1;f<=n;++f){for(let h=0;h<=t;++h)o[f][h]*=u;u*=t-f}return o}function _E(i,e,t,n,s){const r=s<i?s:i,o=[],a=Fm(i,n,e),l=xE(a,n,i,r,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=r;++u){const f=c[a-i].clone().multiplyScalar(l[u][0]);for(let h=1;h<=i;++h)f.add(c[a-i+h].clone().multiplyScalar(l[u][h]));o[u]=f}for(let u=r+1;u<=s+1;++u)o[u]=new ot(0,0,0);return o}function vE(i,e){let t=1;for(let s=2;s<=i;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=i-e;++s)n*=s;return t/n}function yE(i){const e=i.length,t=[],n=[];for(let r=0;r<e;++r){const o=i[r];t[r]=new O(o.x,o.y,o.z),n[r]=o.w}const s=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(s[r-a].clone().multiplyScalar(vE(r,a)*n[a]));s[r]=o.divideScalar(n[0])}return s}function bE(i,e,t,n,s){const r=_E(i,e,t,n,s);return yE(r)}class Od extends bv{constructor(e,t,n,s,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new ot(a.x,a.y,a.z,a.w)}}getPoint(e,t){const n=t||new O,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=gE(this.degree,this.knots,this.controlPoints,s);return r.w!=1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t){const n=t||new O,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=bE(this.degree,this.knots,this.controlPoints,s,1);return n.copy(r[1]).normalize(),n}}let et,Dt,un;class ME extends ns{constructor(e){super(e)}load(e,t,n,s){const r=this,o=r.path===""?fr.extractUrlBase(e):r.path,a=new cl(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){if(RE(e))et=new wE().parse(e);else{const s=Vm(e);if(!CE(s))throw new Error("THREE.FBXLoader: Unknown format.");if(zd(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+zd(s));et=new AE().parse(s)}const n=new uf(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new SE(n,this.manager).parse(et)}}class SE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Dt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),r=new TE().parse(s);return this.parseScene(s,r,n),un}parseConnections(){const e=new Map;return"Connections"in et&&et.Connections.connections.forEach(function(n){const s=n[0],r=n[1],o=n[2];e.has(s)||e.set(s,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(s).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:s,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in et.Objects){const n=et.Objects.Video;for(const s in n){const r=n[s],o=parseInt(s);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[s]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(s){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in et.Objects){const n=et.Objects.Texture;for(const s in n){const r=this.parseTexture(n[s],e);t.set(parseInt(s),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const s=e.WrapModeU,r=e.WrapModeV,o=s!==void 0?s.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?ts:Un,n.wrapT=a===0?ts:Un,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}return n}loadTexture(e,t){let n;const s=this.textureLoader.path,r=Dt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Nt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Nt):o=this.textureLoader.load(n);return this.textureLoader.setPath(s),o}parseMaterials(e){const t=new Map;if("Material"in et.Objects){const n=et.Objects.Material;for(const s in n){const r=this.parseMaterial(n[s],e);r!==null&&t.set(parseInt(s),r)}}return t}parseMaterial(e,t){const n=e.id,s=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Dt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new Sa;break;case"lambert":a=new Mv;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new Sa;break}return a.setValues(o),a.name=s,a}parseParameters(e,t,n){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=new Ne().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=new Ne().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=new Ne().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=new Ne().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(s.opacity=parseFloat(e.Opacity.value)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=new Ne().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=new Ne().fromArray(e.SpecularColor.value));const r=this;return Dt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":s.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":s.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=r.getTexture(t,o.ID),s.map!==void 0&&("colorSpace"in s.map?s.map.colorSpace="srgb":s.map.encoding=3001);break;case"DisplacementColor":s.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":s.emissiveMap=r.getTexture(t,o.ID),s.emissiveMap!==void 0&&("colorSpace"in s.emissiveMap?s.emissiveMap.colorSpace="srgb":s.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":s.envMap=r.getTexture(t,o.ID),s.envMap!==void 0&&(s.envMap.mapping=Na,"colorSpace"in s.envMap?s.envMap.colorSpace="srgb":s.envMap.encoding=3001);break;case"SpecularColor":s.specularMap=r.getTexture(t,o.ID),s.specularMap!==void 0&&("colorSpace"in s.specularMap?s.specularMap.colorSpace="srgb":s.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=r.getTexture(t,o.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),s}getTexture(e,t){return"LayeredTexture"in et.Objects&&t in et.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Dt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in et.Objects){const n=et.Objects.Deformer;for(const s in n){const r=n[s],o=Dt.get(parseInt(s));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=s,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[s]=a}else if(r.attrType==="BlendShape"){const a={id:s};a.rawTargets=this.parseMorphTargets(o,n),a.id=s,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(s){const r=t[s.ID];if(r.attrType!=="Cluster")return;const o={ID:s.ID,indices:[],weights:[],transformLink:new Ie().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let s=0;s<e.children.length;s++){const r=e.children[s],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Dt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){un=new jn;const s=this.parseModels(e.skeletons,t,n),r=et.Objects.Model,o=this;s.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),Dt.get(l.ID).parents.forEach(function(f){const h=s.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&un.add(l)}),this.bindSkeleton(e.skeletons,t,s),this.createAmbientLight(),un.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Bm(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new EE().parse();un.children.length===1&&un.children[0].isGroup&&(un.children[0].animations=a,un=un.children[0]),un.animations=a}parseModels(e,t,n){const s=new Map,r=et.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=Dt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Va;break;case"Null":default:u=new jn;break}u.name=l.attrName?ct.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),s.set(a,u)}return s}buildSkeleton(e,t,n,s){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const f=r;r=new Va,r.matrixWorld.copy(c.transformLink),r.name=s?ct.sanitizeNodeName(s):"",r.ID=n,l.bones[u]=r,f!==null&&r.add(f)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(s){const r=et.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new St;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const f=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new Bt(u,c,r,o),f!==null&&t.setFocalLength(f);break;case 1:t=new As(-a/2,a/2,l/2,-l/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new St;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){const r=et.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new St;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Ne().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(s){case 0:t=new _u(r,o,a,l);break;case 1:t=new ym(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Gn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Gn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new vm(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new _u(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Sa({color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(s=new dm(r,o),s.normalizeSkinWeights()):s=new Gt(r,o),s}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),s=new ur({color:3342591,linewidth:1});return new ll(n,s)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=zm(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Dt.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const r=et.Objects.Model[s.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),un.add(e.target)):e.lookAt(new O().fromArray(o))}}})}bindSkeleton(e,t,n){const s=this.parsePoseNodes();for(const r in e){const o=e[r];Dt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Dt.get(c).parents.forEach(function(f){n.has(f.ID)&&n.get(f.ID).bind(new al(o.bones),s[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in et.Objects){const t=et.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(r){e[r.Node]=new Ie().fromArray(r.Matrix.a)}):e[s.Node]=new Ie().fromArray(s.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in et&&"AmbientColor"in et.GlobalSettings){const e=et.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){const r=new Ne(t,n,s);un.add(new Vv(r,1))}}}}class TE{parse(e){const t=new Map;if("Geometry"in et.Objects){const n=et.Objects.Geometry;for(const s in n){const r=Dt.get(parseInt(s)),o=this.parseGeometry(r,n[s],e);t.set(parseInt(s),o)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const s=n.skeletons,r=[],o=e.parents.map(function(f){return et.Objects.Model[f.ID]});if(o.length===0)return;const a=e.children.reduce(function(f,h){return s[h.ID]!==void 0&&(f=s[h.ID]),f},null);e.children.forEach(function(f){n.morphTargets[f.ID]!==void 0&&r.push(n.morphTargets[f.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=zm(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Bm(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,s){const r=new Ht;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new At(a.vertex,3);if(l.applyMatrix4(s),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new At(a.colors,3)),t&&(r.setAttribute("skinIndex",new nf(a.weightsIndices,4)),r.setAttribute("skinWeight",new At(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new Ye().getNormalMatrix(s),u=new At(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){uT==="uv2"&&u++;const f=u===0?"uv":`uv${u}`;r.setAttribute(f,new At(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(f,h){f!==c&&(r.addGroup(u,h-u,c),c=f,u=h)}),r.groups.length>0){const f=r.groups[r.groups.length-1],h=f.start+f.count;h!==a.materialIndex.length&&r.addGroup(h,a.materialIndex.length-h,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,s),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,r){s.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:s.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,s=0,r=!1,o=[],a=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(d,m){let x,g=!1;d<0&&(d=d^-1,g=!0);let p=[],b=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const y=ua(m,n,d,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(y){b.push(y.weight),p.push(y.id)}),b.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const y=[0,0,0,0],M=[0,0,0,0];b.forEach(function(R,T){let C=R,N=p[T];M.forEach(function(A,v,U){if(C>A){U[v]=C,C=A;const k=y[v];y[v]=N,N=k}})}),p=y,b=M}for(;b.length<4;)b.push(0),p.push(0);for(let y=0;y<4;++y)u.push(b[y]),f.push(p[y])}if(e.normal){const y=ua(m,n,d,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=ua(m,n,d,e.material)[0]),e.uv&&e.uv.forEach(function(y,M){const R=ua(m,n,d,y);c[M]===void 0&&(c[M]=[]),c[M].push(R[0]),c[M].push(R[1])}),s++,g&&(h.genFace(t,e,o,x,a,l,c,u,f,s),n++,s=0,o=[],a=[],l=[],c=[],u=[],f=[])}),t}genFace(e,t,n,s,r,o,a,l,c,u){for(let f=2;f<u;f++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(f-1)*3]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(f-1)*4]),e.vertexWeights.push(l[(f-1)*4+1]),e.vertexWeights.push(l[(f-1)*4+2]),e.vertexWeights.push(l[(f-1)*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(f-1)*4]),e.weightsIndices.push(c[(f-1)*4+1]),e.weightsIndices.push(c[(f-1)*4+2]),e.weightsIndices.push(c[(f-1)*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(f-1)*3]),e.colors.push(o[(f-1)*3+1]),e.colors.push(o[(f-1)*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(f-1)*3]),e.normal.push(r[(f-1)*3+1]),e.normal.push(r[(f-1)*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2])),t.uv&&t.uv.forEach(function(h,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(f-1)*2]),e.uvs[d].push(a[d][(f-1)*2+1]),e.uvs[d].push(a[d][f*2]),e.uvs[d].push(a[d][f*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=et.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,s,a.name)})})}genMorphGeometry(e,t,n,s,r){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let m=0;m<l.length;m++){const x=l[m]*3;u[x]=a[m*3],u[x+1]=a[m*3+1],u[x+2]=a[m*3+2]}const f={vertexIndices:o,vertexPositions:u},h=this.genBuffers(f),d=new At(h.vertex,3);d.name=r||n.attrName,d.applyMatrix4(s),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:s,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a;let r=[];return n==="IndexToDirect"&&(r=e.ColorIndex.a),{dataSize:4,buffer:s,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const s=e.Materials.a,r=[];for(let o=0;o<s.length;++o)r.push(o);return{dataSize:1,buffer:s,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(Od===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Ht;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ht;const n=t-1,s=e.KnotVector.a,r=[],o=e.Points.a;for(let f=0,h=o.length;f<h;f+=4)r.push(new ot().fromArray(o,f));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=s.length-1-a;for(let f=0;f<n;++f)r.push(r[f])}const u=new Od(n,s,r,a,l).getPoints(r.length*12);return new Ht().setFromPoints(u)}}class EE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const s=t[n],r=this.addClip(s);e.push(r)}return e}parseClips(){if(et.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=et.Objects.AnimationCurveNode,t=new Map;for(const n in e){const s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:s.id,attr:s.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=et.Objects.AnimationCurve;for(const n in t){const s={id:t[n].id,times:t[n].KeyTime.a.map(PE),values:t[n].KeyValueFloat.a},r=Dt.get(s.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=s:a.match(/Y/)?e.get(o).curves.y=s:a.match(/Z/)?e.get(o).curves.z=s:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=s)}}}parseAnimationLayers(e){const t=et.Objects.AnimationLayer,n=new Map;for(const s in t){const r=[],o=Dt.get(parseInt(s));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const f=Dt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=et.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?ct.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};un.traverse(function(m){m.ID===h.id&&(d.transform=m.matrix,m.userData.transformData&&(d.eulerOrder=m.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ie),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const f=Dt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=Dt.get(f).parents[0].ID,d=Dt.get(h).parents[0].ID,m=Dt.get(d).parents[0].ID,x=et.Objects.Model[m],g={modelName:x.attrName?ct.sanitizeNodeName(x.attrName):"",morphName:et.Objects.Deformer[f].attrName};r[c]=g}r[c][u.attr]=u}}}),n.set(parseInt(s),r))}return n}parseAnimStacks(e){const t=et.Objects.AnimationStack,n={};for(const s in t){const r=Dt.get(parseInt(s)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[s]={name:t[s].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new _m(e.name,-1,t)}generateTracks(e){const t=[];let n=new O,s=new pn,r=new O;if(e.transform&&e.transform.decompose(n,s,r),n=n.toArray(),s=new Wt().setFromQuaternion(s,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,s,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,s){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Ds(e+"."+s,r,o)}generateRotationTrack(e,t,n,s,r,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Gn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Gn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Gn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);s!==void 0&&(s=s.map(Gn.degToRad),s.push(o),s=new Wt().fromArray(s),s=new pn().setFromEuler(s)),r!==void 0&&(r=r.map(Gn.degToRad),r.push(o),r=new Wt().fromArray(r),r=new pn().setFromEuler(r).invert());const c=new pn,u=new Wt,f=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),s!==void 0&&c.premultiply(s),r!==void 0&&c.multiply(r),c.toArray(f,h/3*4);return new Is(e+".quaternion",a,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),s=un.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ps(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==s&&(t[n]=o,s=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const s=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),s[0]=u}else r.push(s[0]);if(a!==-1){const u=t.y.values[a];r.push(u),s[1]=u}else r.push(s[1]);if(l!==-1){const u=t.z.values[l];r.push(u),s[2]=u}else r.push(s[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],s=e.values[t]-n,r=Math.abs(s);if(r>=180){const o=r/180,a=s/o;let l=n+a;const c=e.times[t-1],f=(e.times[t]-c)/o;let h=c+f;const d=[],m=[];for(;h<e.times[t];)d.push(h),h+=f,m.push(l),l+=a;e.times=Vd(e.times,t,d),e.values=Vd(e.values,t,m)}}}}class AE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Om,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,r){const o=s.match(/^[\s\t]*;/),a=s.match(/^[\s\t]*$/);if(o||a)return;const l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++r]):u?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(s),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,s,r);return}if(s==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=r.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),s="connections",r=[c,u],DE(r,f),o[s]===void 0&&(o[s]=[])}s==="Node"&&(o.id=r),s in o&&Array.isArray(o[s])?o[s].push(r):s!=="a"?o[s]=r:o.a=r,this.setCurrentProp(o,s),s==="a"&&r.slice(-1)!==","&&(o.a=pc(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=pc(t.a))}parseNodeSpecialProperty(e,t,n){const s=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=s[0],o=s[1],a=s[2],l=s[3];let c=s[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=pc(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class wE{parse(e){const t=new Bd(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const s=new Om;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&s.add(r.name,r)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},s=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(s===0)return null;const l=[];for(let h=0;h<r;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===s;s>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),f!==""&&(n.attrType=f),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){const s=[];n.propertyList.forEach(function(r,o){o!==0&&s.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const a=MT(new Uint8Array(e.getArrayBuffer(o))),l=new Bd(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Bd{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let s=0;s<e;s++)t[s]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),Ar(new Uint8Array(t))}}class Om{add(e,t){this[e]=t}}function RE(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===Vm(i,0,e.length)}function CE(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(s){const r=i[s-1];return i=i.slice(t+s),t++,r}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function zd(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function PE(i){return i/46186158e3}const IE=[];function ua(i,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=i;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);const r=s*n.dataSize,o=r+n.dataSize;return LE(IE,n.buffer,r,o)}const dc=new Wt,er=new O;function Bm(i){const e=new Ie,t=new Ie,n=new Ie,s=new Ie,r=new Ie,o=new Ie,a=new Ie,l=new Ie,c=new Ie,u=new Ie,f=new Ie,h=new Ie,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(er.fromArray(i.translation)),i.preRotation){const v=i.preRotation.map(Gn.degToRad);v.push(i.eulerOrder),t.makeRotationFromEuler(dc.fromArray(v))}if(i.rotation){const v=i.rotation.map(Gn.degToRad);v.push(i.eulerOrder),n.makeRotationFromEuler(dc.fromArray(v))}if(i.postRotation){const v=i.postRotation.map(Gn.degToRad);v.push(i.eulerOrder),s.makeRotationFromEuler(dc.fromArray(v)),s.invert()}i.scale&&r.scale(er.fromArray(i.scale)),i.scalingOffset&&a.setPosition(er.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(er.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(er.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(er.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(f.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const m=t.clone().multiply(n).multiply(s),x=new Ie;x.extractRotation(u);const g=new Ie;g.copyPosition(u);const p=g.clone().invert().multiply(u),b=x.clone().invert().multiply(p),y=r,M=new Ie;if(d===0)M.copy(x).multiply(m).multiply(b).multiply(y);else if(d===1)M.copy(x).multiply(b).multiply(m).multiply(y);else{const U=new Ie().scale(new O().setFromMatrixScale(f)).clone().invert(),k=b.clone().multiply(U);M.copy(x).multiply(m).multiply(k).multiply(y)}const R=c.clone().invert(),T=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(R).multiply(a).multiply(o).multiply(r).multiply(T);const N=new Ie().copyPosition(C),A=u.clone().multiply(N);return h.copyPosition(A),C=h.clone().multiply(M),C.premultiply(u.invert()),C}function zm(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function pc(i){return i.split(",").map(function(t){return parseFloat(t)})}function Vm(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),Ar(new Uint8Array(i,e,t))}function DE(i,e){for(let t=0,n=i.length,s=e.length;t<s;t++,n++)i[n]=e[t]}function LE(i,e,t,n){for(let s=t,r=0;s<n;s++,r++)i[r]=e[s];return i}function Vd(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}const UE=/^[og]\s*(.+)?/,NE=/^mtllib /,FE=/^usemtl /,OE=/^usemap /,kd=new O,mc=new O,Hd=new O,Gd=new O,Cn=new O;function BE(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;kd.fromArray(s,e),mc.fromArray(s,t),Hd.fromArray(s,n),Cn.subVectors(Hd,mc),Gd.subVectors(kd,mc),Cn.cross(Gd),Cn.normalize(),r.push(Cn.x,Cn.y,Cn.z),r.push(Cn.x,Cn.y,Cn.z),r.push(Cn.x,Cn.y,Cn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const m=this.normals.length;f=this.parseNormalIndex(a,m),h=this.parseNormalIndex(l,m),d=this.parseNormalIndex(c,m),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const m=this.uvs.length;f=this.parseUVIndex(s,m),h=this.parseUVIndex(r,m),d=this.parseUVIndex(o,m),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class zE extends ns{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,o=new cl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new BE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s="",r="",o=0,a=[];const l=typeof"".trimLeft=="function";for(let f=0,h=n.length;f<h;f++)if(s=n[f],s=l?s.trimLeft():s.trim(),o=s.length,o!==0&&(r=s.charAt(0),r!=="#"))if(r==="v"){const d=s.split(/\s+/);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?t.colors.push(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(r==="f"){const m=s.substr(1).trim().split(/\s+/),x=[];for(let p=0,b=m.length;p<b;p++){const y=m[p];if(y.length>0){const M=y.split("/");x.push(M)}}const g=x[0];for(let p=1,b=x.length-1;p<b;p++){const y=x[p],M=x[p+1];t.addFace(g[0],y[0],M[0],g[1],y[1],M[1],g[2],y[2],M[2])}}else if(r==="l"){const d=s.substring(1).trim().split(" ");let m=[];const x=[];if(s.indexOf("/")===-1)m=d;else for(let g=0,p=d.length;g<p;g++){const b=d[g].split("/");b[0]!==""&&m.push(b[0]),b[1]!==""&&x.push(b[1])}t.addLineGeometry(m,x)}else if(r==="p"){const m=s.substr(1).trim().split(" ");t.addPointGeometry(m)}else if((a=UE.exec(s))!==null){const d=(" "+a[0].substr(1).trim()).substr(1);t.startObject(d)}else if(FE.test(s))t.object.startMaterial(s.substring(7).trim(),t.materialLibraries);else if(NE.test(s))t.materialLibraries.push(s.substring(7).trim());else if(OE.test(s))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(r==="s"){if(a=s.split(" "),a.length>1){const m=a[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(s==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+s+'"')}t.finalize();const c=new jn;if(c.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const d=t.objects[f],m=d.geometry,x=d.materials,g=m.type==="Line",p=m.type==="Points";let b=!1;if(m.vertices.length===0)continue;const y=new Ht;y.setAttribute("position",new At(m.vertices,3)),m.normals.length>0&&y.setAttribute("normal",new At(m.normals,3)),m.colors.length>0&&(b=!0,y.setAttribute("color",new At(m.colors,3))),m.hasUVIndices===!0&&y.setAttribute("uv",new At(m.uvs,2));const M=[];for(let T=0,C=x.length;T<C;T++){const N=x[T],A=N.name+"_"+N.smooth+"_"+b;let v=t.materials[A];if(this.materials!==null){if(v=this.materials.create(N.name),g&&v&&!(v instanceof ur)){const U=new ur;xn.prototype.copy.call(U,v),U.color.copy(v.color),v=U}else if(p&&v&&!(v instanceof nr)){const U=new nr({size:10,sizeAttenuation:!1});xn.prototype.copy.call(U,v),U.color.copy(v.color),U.map=v.map,v=U}}v===void 0&&(g?v=new ur:p?v=new nr({size:1,sizeAttenuation:!1}):v=new Sa,v.name=N.name,v.flatShading=!N.smooth,v.vertexColors=b,t.materials[A]=v),M.push(v)}let R;if(M.length>1){for(let T=0,C=x.length;T<C;T++){const N=x[T];y.addGroup(N.groupStart,N.groupCount,T)}g?R=new gu(y,M):p?R=new Ma(y,M):R=new Gt(y,M)}else g?R=new gu(y,M[0]):p?R=new Ma(y,M[0]):R=new Gt(y,M[0]);R.name=d.name,c.add(R)}else if(t.vertices.length>0){const f=new nr({size:1,sizeAttenuation:!1}),h=new Ht;h.setAttribute("position",new At(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new At(t.colors,3)),f.vertexColors=!0);const d=new Ma(h,f);c.add(d)}return c}}const Ea={distortion:1.5,rotationSpeed:.005};let We,Kn=null,Lr="spiky",Tu=1;const VE=()=>Lr,kE=()=>eT(Lr),HE=i=>{Tu=i/Ea.rotationSpeed},GE=(i,e)=>{We&&(Kn&&We.children&&We.children.length>0?We.traverse(t=>{t.isMesh&&t.material&&t.material.uniforms&&t.material.uniforms[i]&&(t.material.uniforms[i].value=e)}):We.material&&We.material.uniforms&&We.material.uniforms[i]&&(We.material.uniforms[i].value=e))},gf=i=>{if(console.log("[generate3DVisualizer] Génération du visualizer 3D, customModel:",!!Kn),Kn)return We=Kn,i.add(We),console.log("[generate3DVisualizer] Modèle personnalisé ajouté à la scène:",We),We;console.log("[generate3DVisualizer] Création de la sphère par défaut");const e=new lf(1.5,4),t=mf(Lr),n={};for(const r in t.uniforms)n[r]={value:t.uniforms[r].value};const s=new Qt({vertexShader:t.vertex,fragmentShader:t.fragment,uniforms:n,side:dn});return We=new Gt(e,s),i.add(We),We},WE=(i,e)=>{if(We){if(We.rotation.x+=Ea.rotationSpeed*Tu,We.rotation.y+=Ea.rotationSpeed*Tu,We.material&&We.material.uniforms){const t=We.material.uniforms;if(t.u_spikeAmount!==void 0)We.scale.set(1,1,1);else{const s=1+i.overall*Ea.distortion;We.scale.set(s,s,s)}t.uTime&&(t.uTime.value=e),t.u_time&&(t.u_time.value=e),t.uAudioData&&(t.uAudioData.value=i.overall),t.u_audioLevel&&(t.u_audioLevel.value=i.overall),t.u_bass&&(t.u_bass.value=i.bass),t.u_mid&&(t.u_mid.value=i.mid),t.u_treble&&(t.u_treble.value=i.treble),t.u_peak&&(t.u_peak.value=i.peak),t.u_energy&&(t.u_energy.value=i.energy)}Kn&&We.children&&We.children.length>0&&We.traverse(t=>{if(t.isMesh&&t.material&&t.material.uniforms){const n=t.material.uniforms;n.uTime&&(n.uTime.value=e),n.u_time&&(n.u_time.value=e),n.uAudioData&&(n.uAudioData.value=i.overall),n.u_audioLevel&&(n.u_audioLevel.value=i.overall),n.u_bass&&(n.u_bass.value=i.bass),n.u_mid&&(n.u_mid.value=i.mid),n.u_treble&&(n.u_treble.value=i.treble),n.u_peak&&(n.u_peak.value=i.peak),n.u_energy&&(n.u_energy.value=i.energy)}})}},km=i=>{We&&(i.remove(We),We.geometry&&We.geometry.dispose(),We.material&&(Array.isArray(We.material)?We.material.forEach(e=>e.dispose()):We.material.dispose()),We=null)},XE=()=>{console.log("[resetToDefaultModel] Réinitialisation du modèle"),Kn=null,Lr="normals"},jE=(i,e)=>{if(!We||!e)return;const t=mf(i);if(Kn&&We.children&&We.children.length>0)We.traverse(n=>{if(n.isMesh){const s={};for(const o in t.uniforms)s[o]={value:t.uniforms[o].value};n.material&&n.material.uniforms&&(n.material.uniforms.uTime&&s.uTime&&(s.uTime.value=n.material.uniforms.uTime.value),n.material.uniforms.uAudioData&&s.uAudioData&&(s.uAudioData.value=n.material.uniforms.uAudioData.value));const r=new Qt({vertexShader:t.vertex,fragmentShader:t.fragment,uniforms:s,side:dn});n.material&&n.material.dispose(),n.material=r}});else{const n={};for(const r in t.uniforms)n[r]={value:t.uniforms[r].value};We.material&&We.material.uniforms&&(We.material.uniforms.uTime&&n.uTime&&(n.uTime.value=We.material.uniforms.uTime.value),We.material.uniforms.uAudioData&&n.uAudioData&&(n.uAudioData.value=We.material.uniforms.uAudioData.value));const s=new Qt({vertexShader:t.vertex,fragmentShader:t.fragment,uniforms:n,side:dn});We.material&&We.material.dispose(),We.material=s}Lr=i},qE=(i,e)=>new Promise((t,n)=>{let s;switch(e){case"obj":s=new zE,s.load(i,r=>{Kn=r,gc(r),t(r)},void 0,n);break;case"fbx":s=new ME,s.load(i,r=>{Kn=r,gc(r),t(r)},void 0,n);break;case"glb":case"gltf":s=new UT,s.load(i,r=>{Kn=r.scene,gc(r.scene),t(r.scene)},void 0,n);break;default:n(new Error(`Format non supporté: ${e}`))}}),gc=i=>{const e=new li().setFromObject(i),t=e.getSize(new O),n=Math.max(t.x,t.y,t.z);if(n===0){console.warn("Modèle avec dimension nulle détecté");return}const s=e.getCenter(new O),r=new jn;i.parent&&i.parent.remove(i),r.add(i),i.position.x=-s.x,i.position.y=-s.y,i.position.z=-s.z;const o=2/n;r.scale.set(o,o,o),Kn=r;const a=mf(Lr);i.traverse(l=>{if(l.isMesh){const c={};for(const u in a.uniforms)c[u]={value:a.uniforms[u].value};l.material=new Qt({vertexShader:a.vertex,fragmentShader:a.fragment,uniforms:c,side:dn})}}),console.log("Modèle configuré:",{size:t,scale:o,center:s,children:i.children.length})};let Pi=null,bo=null;const YE=i=>{if(Pi!==null){console.warn("Animation déjà en cours");return}bo=i,vf()},KE=()=>{Pi!==null&&(cancelAnimationFrame(Pi),Pi=null),bo=null},xf=()=>{const i=Pi!==null;return i&&(cancelAnimationFrame(Pi),Pi=null),i},_f=i=>{i&&Pi===null&&bo&&vf()},vf=()=>{if(Pi=requestAnimationFrame(vf),bo)try{bo()}catch(i){console.error("Erreur dans le callback d'animation:",i)}};let ws=null;const $E=(i={})=>{const{fov:e=75,aspect:t=window.innerWidth/window.innerHeight,near:n=.1,far:s=1e3,position:r={x:0,y:0,z:5}}=i;return ws=new Bt(e,t,n,s),ws.position.set(r.x,r.y,r.z),ws},dl=()=>ws,ZE=(i,e)=>{ws&&(ws.aspect=i/e,ws.updateProjectionMatrix())};let Dn=null;const JE=(i,e={})=>{const{antialias:t=!0,alpha:n=!0,pixelRatio:s=Math.min(window.devicePixelRatio,2)}=e;try{Dn=new Rd({antialias:t,alpha:n})}catch(r){console.warn("WebGL2 échoué, tentative avec WebGL1:",r);try{const o=document.createElement("canvas"),a=o.getContext("webgl")||o.getContext("experimental-webgl");if(a)Dn=new Rd({canvas:o,context:a,antialias:t,alpha:n});else throw new Error("WebGL non supporté")}catch(o){throw console.error("Impossible de créer le renderer WebGL:",o),alert("Erreur : Votre navigateur ne supporte pas WebGL. Essayez Chrome ou vérifiez vos drivers graphiques."),o}}return Dn.setSize(window.innerWidth,window.innerHeight),Dn.setPixelRatio(s),Dn.domElement.style.touchAction="none",i.appendChild(Dn.domElement),Dn},Hm=()=>Dn,QE=(i,e)=>{Dn&&Dn.setSize(i,e)},eA=(i,e)=>{!Dn||!i||!e||Dn.render(i,e)};let Ut=null;const tA=(i,e,t={})=>{const{enableRotate:n=!0,enablePan:s=!0,enableZoom:r=!0,zoomSpeed:o=1,minDistance:a=.5,maxDistance:l=50,enableDamping:c=!1,autoRotate:u=!1,screenSpacePanning:f=!0}=t;return Ut=new DT(i,e),Ut.enableRotate=n,Ut.enablePan=s,Ut.enableZoom=r,Ut.zoomSpeed=o,Ut.minDistance=a,Ut.maxDistance=l,Ut.enableDamping=c,Ut.autoRotate=u,Ut.screenSpacePanning=f,Ut.mouseButtons={LEFT:qi.ROTATE,RIGHT:qi.PAN},Ut},yf=()=>Ut,nA=()=>{Ut&&Ut.update()},Gm=()=>{Ut&&Ut.reset()},iA=()=>{Ut&&(Ut.dispose(),Ut=null)};let Eu=null;const sA=()=>(Eu=new fv,Eu),is=()=>Eu;let wr="3d-model";const pl=()=>wr,ml=i=>{wr==="3d-model"?km(i):wr==="2d"&&rT(i)},Wm=(i,e)=>{if(!e){console.error("Scene non définie");return}ml(e),wr=i;const t=yf();t&&(i==="2d"?t.enabled=!1:t.enabled=!0);const n=dl();i==="3d-model"?gf(e):i==="2d"&&Am(e,n)},rA=i=>{if(!i)return;ml(i),wr="3d-model";const e=yf();e&&(e.enabled=!0),XE(),gf(i)},oA=i=>{if(!i)return;ml(i),wr="2d";const e=yf();e&&(e.enabled=!1);const t=dl();oT(),Am(i,t)},Xm=i=>{console.log("[initScene] Démarrage...");const e=sA();console.log("[initScene] Scène créée:",e);const t=$E({fov:75,position:{x:0,y:0,z:5}});console.log("[initScene] Caméra créée:",t);const n=JE(i);console.log("[initScene] Renderer créé:",n);const s=tA(t,n.domElement,{enableRotate:!0,enablePan:!0,enableZoom:!0,zoomSpeed:1,minDistance:.5,maxDistance:50});console.log("[initScene] OrbitControls créés:",s),console.log("[initScene] Initialisation en mode 3D..."),Wm("3d-model",e),console.log("[initScene] Démarrage de l'animation..."),YE(()=>{aA()}),console.log("[initScene] Initialisation terminée")},aA=()=>{const i=is(),e=dl(),t=Hm();if(!i||!e||!t){console.warn("[animationLoop] Manquant:",{scene:!!i,camera:!!e,renderer:!!t});return}const n=Lx(),s=performance.now()/1e3,r=pl();r==="3d-model"?WE(n,s):r==="2d"&&sT(n,s),nA(),eA(i,e)},bf=i=>{const e=is();e&&(Gm(),Wm(i,e))},Au=i=>{const e=is();if(!e){console.error("[switchModeAndReset] Scene non définie");return}console.log("[switchModeAndReset] Changement vers mode:",i);const t=xf();try{Gm(),i==="3d-model"?(console.log("[switchModeAndReset] Réinitialisation 3D..."),rA(e)):i==="2d"&&(console.log("[switchModeAndReset] Réinitialisation 2D..."),oA(e)),console.log("[switchModeAndReset] Mode changé avec succès")}catch(n){console.error("[switchModeAndReset] Erreur:",n)}finally{_f(t)}},wu=()=>{const i=dl();ZE(window.innerWidth,window.innerHeight),QE(window.innerWidth,window.innerHeight),pl()==="2d"&&i&&aT(i)},jm=()=>{const i=is();KE(),i&&ml(i),iA();const e=Hm();e&&e.dispose()},lA=i=>{const e=is();if(!e)return;const t=xf();try{cT(i,e),pl()!=="2d"&&bf("2d")}finally{_f(t)}},cA=async(i,e)=>{const t=is();if(!t)return;const n=xf();try{console.log("[setModel3D] Chargement du modèle..."),await qE(i,e),console.log("[setModel3D] Modèle chargé, passage en mode 3D"),pl()==="3d-model"?(console.log("[setModel3D] Déjà en mode 3D, nettoyage et régénération"),km(t),gf(t)):(console.log("[setModel3D] Changement de mode vers 3D"),bf("3d-model"))}catch(s){console.error("Erreur lors du chargement du modèle 3D:",s),alert(`Erreur lors du chargement du modèle: ${s.message}`)}finally{_f(n)}},uA=i=>{const e=is();e&&lT(i,e)},fA=i=>{const e=is();e&&jE(i,e)},qm=()=>VE(),Ym=()=>kE(),Km=()=>nT(),$m=i=>{HE(i)},Zm=(i,e)=>{GE(i,e)},Jm=(i,e)=>{iT(i,e)},fa=Object.freeze(Object.defineProperty({__proto__:null,changeShader2D:uA,changeShader3D:fA,cleanupScene:jm,getCurrent2DShaderParams:Km,getCurrent3DShader:qm,getCurrent3DShaderParams:Ym,initScene:Xm,onWindowResize:wu,setImage2D:lA,setModel3D:cA,switchMode:bf,switchModeAndReset:Au,update2DShaderParam:Jm,update3DShaderParam:Zm,updateRotationSpeed:$m},Symbol.toStringTag,{value:"Module"})),An=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},hA={class:"btn upload-btn"},dA={__name:"AudioFileUploader",emits:["file-uploaded"],setup(i,{emit:e}){const t=e,n=s=>{const r=s.target.files[0];r&&t("file-uploaded",r)};return(s,r)=>(ht(),pt("label",hA,[r[0]||(r[0]=Ia(" 📂 Charger MP3 ",-1)),Ue("input",{type:"file",onChange:n,accept:"audio/*",hidden:""},null,32)]))}},pA=An(dA,[["__scopeId","data-v-a10bda13"]]),mA={props:{digit:{type:Number,default:0,validator:i=>i>=0&&i<=9}},computed:{segments(){return[[1,1,1,1,1,1,0],[0,1,1,0,0,0,0],[1,1,0,1,1,0,1],[1,1,1,1,0,0,1],[0,1,1,0,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]][this.digit]}}},gA={class:"seven-segment"};function xA(i,e,t,n,s,r){return ht(),pt("div",gA,[(ht(!0),pt(Ot,null,mr(r.segments,(o,a)=>(ht(),pt("div",{key:a,class:Ka(["segment","segment-"+a,{on:o}])},null,2))),128))])}const _A=An(mA,[["render",xA],["__scopeId","data-v-34ea5a33"]]),vA={components:{SevenSegmentCounter:_A},props:{modelValue:{type:Number,default:0}},emits:["update:modelValue"],data(){return{dragging:!1,angle:0,increaseTimer:null,decayTimer:null,localValue:this.modelValue}},computed:{digits(){return Math.max(0,Math.min(100,Math.floor(this.localValue))).toString().padStart(3,"0").split("").map(Number)}},watch:{modelValue(i){this.localValue=i}},methods:{startDrag(){this.dragging||(this.dragging=!0,this.stopDecay(),window.addEventListener("mousemove",this.onDrag),window.addEventListener("mouseup",this.stopDrag),this.startIncrease())},startIncrease(){this.increaseTimer||(this.increaseTimer=setInterval(()=>{this.localValue<100&&(this.localValue++,this.$emit("update:modelValue",this.localValue))},50))},stopIncrease(){this.increaseTimer&&(clearInterval(this.increaseTimer),this.increaseTimer=null)},startDecay(){this.decayTimer||(this.decayTimer=setInterval(()=>{this.localValue>0?(this.localValue--,this.$emit("update:modelValue",this.localValue)):this.stopDecay()},50))},stopDecay(){this.decayTimer&&(clearInterval(this.decayTimer),this.decayTimer=null)},onDrag(i){if(!this.dragging)return;const e=this.$refs.leverBlock.getBoundingClientRect(),t=e.left+e.width/2,n=e.bottom,s=i.clientX-t,r=i.clientY-n;let o=Math.atan2(r,s)*(180/Math.PI);o<0&&(o+=360),this.angle=o},stopDrag(){this.dragging=!1,window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("mouseup",this.stopDrag),this.stopIncrease(),this.startDecay()}}},yA={class:"lever-block"};function bA(i,e,t,n,s,r){const o=da("seven-segment-counter");return ht(),pt("div",yA,[wt(o,{digit:r.digits[0]},null,8,["digit"]),wt(o,{digit:r.digits[1]},null,8,["digit"]),wt(o,{digit:r.digits[2]},null,8,["digit"]),Ue("div",{class:"lever",ref:"leverBlock",style:dr({transform:`translateX(-50%) rotate(${s.angle}deg)`}),onMousedown:e[0]||(e[0]=(...a)=>r.startDrag&&r.startDrag(...a))},[...e[1]||(e[1]=[Ue("div",{class:"dot"},null,-1),Ue("div",{class:"dot-fixation"},null,-1)])],36)])}const MA=An(vA,[["render",bA],["__scopeId","data-v-ca278381"]]),SA={props:{animationRate:{type:Number,default:0}},computed:{animationDuration(){return this.animationRate?3/this.animationRate+"s":null},centerStyle(){return this.animationDuration?{animationDuration:this.animationDuration}:{animation:"none"}}},methods:{ringStyle(i){return this.animationDuration?{width:this.rings[i]+"px",height:this.rings[i]+"px",animationDelay:i*.2+"s",animationDuration:this.animationDuration}:{width:this.rings[i]+"px",height:this.rings[i]+"px",animation:"none"}}},data(){return{rings:[180,160,140,120,100,80,60]}}},TA={class:"spinner"};function EA(i,e,t,n,s,r){return ht(),pt("div",TA,[(ht(!0),pt(Ot,null,mr(s.rings,(o,a)=>(ht(),pt("div",{key:a,class:"ring",style:dr(r.ringStyle(a))},null,4))),128)),Ue("div",{class:"vinyl-center",style:dr(r.centerStyle)},null,4),e[0]||(e[0]=Ue("div",{class:"fixator-center"},null,-1))])}const AA=An(SA,[["render",EA]]),wA={name:"Tonearm"},RA={class:"tonearm"};function CA(i,e,t,n,s,r){return ht(),pt("div",RA,[...e[0]||(e[0]=[Ue("div",{class:"arm"},null,-1),Ue("div",{class:"head"},null,-1),Ue("div",{class:"needle"},null,-1)])])}const PA=An(wA,[["render",CA],["__scopeId","data-v-2dacb80d"]]),IA={props:{modelValue:{type:Number,default:0}},emits:["update:modelValue"],components:{Spinner:AA,Lever:MA,Toneram:PA},methods:{handleProgressChange(i){this.$emit("update:modelValue",i)}}},DA={class:"patiphon-box gofra"},LA={class:"switches"};function UA(i,e,t,n,s,r){const o=da("spinner"),a=da("toneram"),l=da("lever");return ht(),pt("div",DA,[wt(o,{"animation-rate":t.modelValue},null,8,["animation-rate"]),wt(a),wt(l,{"model-value":t.modelValue,"onUpdate:modelValue":r.handleProgressChange},null,8,["model-value","onUpdate:modelValue"]),Ue("div",LA,[(ht(),pt(Ot,null,mr(3,c=>Ue("div",{class:"switch",key:c})),64))])])}const NA=An(IA,[["render",UA],["__scopeId","data-v-222443f9"]]),FA={class:"player-controls"},OA={__name:"AudioControls",props:{isPlaying:Boolean},emits:["toggle-play","stop","volume-change"],setup(i,{emit:e}){const t=hn(0),n=e,s=()=>{n("volume-change",Number(t.value)/100)};return(r,o)=>(ht(),pt("div",FA,[Ue("button",{class:"btn icon-btn",onClick:o[0]||(o[0]=a=>r.$emit("toggle-play")),title:"Lecture/Pause"},Ti(i.isPlaying?"⏸":"▶"),1),Ue("button",{class:"btn icon-btn",onClick:o[1]||(o[1]=a=>r.$emit("stop")),title:"Stop"}," ⏹ "),wt(NA,{modelValue:t.value,"onUpdate:modelValue":[o[2]||(o[2]=a=>t.value=a),s]},null,8,["modelValue"])]))}},BA=An(OA,[["__scopeId","data-v-2665b7c6"]]),zA={class:"modes"},VA={__name:"ModeSelector",emits:["mode-changed"],setup(i,{emit:e}){const t=e,n=s=>{t("mode-changed",s)};return(s,r)=>(ht(),pt("div",zA,[Ue("button",{class:"btn",onClick:r[0]||(r[0]=o=>n("2d"))}," 2D "),Ue("button",{class:"btn",onClick:r[1]||(r[1]=o=>n("3d-model"))}," 3D ")]))}},kA=An(VA,[["__scopeId","data-v-54151740"]]),HA={class:"upload-section"},GA={class:"btn upload-btn"},WA={class:"btn upload-btn"},XA={__name:"AssetUploader",props:{currentMode:{type:String,required:!0}},emits:["image-uploaded","model-uploaded","reset-mode"],setup(i,{emit:e}){const t=e,n=o=>{const a=o.target.files[0];a&&t("image-uploaded",a)},s=o=>{const a=o.target.files[0];a&&t("model-uploaded",a)},r=()=>{t("reset-mode")};return(o,a)=>(ht(),pt("div",HA,[i.currentMode==="2d"?(ht(),pt(Ot,{key:0},[Ue("button",{class:"btn upload-btn",onClick:r}," 🔄 Réinitialiser "),Ue("label",GA,[a[0]||(a[0]=Ia(" 📂 Importer Image ",-1)),Ue("input",{type:"file",onChange:n,accept:"image/*",hidden:""},null,32)])],64)):xr("",!0),i.currentMode==="3d-model"?(ht(),pt(Ot,{key:1},[Ue("button",{class:"btn upload-btn",onClick:r}," 🔄 Réinitialiser "),Ue("label",WA,[a[1]||(a[1]=Ia(" 📂 Importer Modèle ",-1)),Ue("input",{type:"file",onChange:s,accept:".obj,.fbx,.glb,.gltf",hidden:""},null,32)])],64)):xr("",!0)]))}},jA=An(XA,[["__scopeId","data-v-861d2faa"]]),qA={class:"shaders-section"},YA={key:0,class:"shader-dropdown"},KA=["value"],$A={key:1,class:"shader-dropdown"},ZA=["value"],JA={__name:"ShaderSelector",props:{currentMode:{type:String,required:!0}},emits:["shader-2d-changed","shader-3d-changed"],setup(i,{emit:e}){const t=i,n=e,s=hn([]),r=hn([]),o=hn("default"),a=hn("normals");Hu(()=>{s.value=J1(),r.value=Q1()}),Es(()=>t.currentMode,u=>{u==="2d"?(o.value="default",n("shader-2d-changed","default")):u==="3d-model"&&(a.value="normals",n("shader-3d-changed","normals"))});const l=u=>{o.value=u.target.value,n("shader-2d-changed",u.target.value)},c=u=>{a.value=u.target.value,n("shader-3d-changed",u.target.value)};return(u,f)=>(ht(),pt("div",qA,[i.currentMode==="2d"?(ht(),pt("div",YA,[f[2]||(f[2]=Ue("label",null,"🎨 Shader 2D",-1)),co(Ue("select",{"onUpdate:modelValue":f[0]||(f[0]=h=>o.value=h),onChange:l,class:"shader-select"},[(ht(!0),pt(Ot,null,mr(s.value,h=>(ht(),pt("option",{key:h.id,value:h.id},Ti(h.name),9,KA))),128))],544),[[oh,o.value]])])):xr("",!0),i.currentMode==="3d-model"?(ht(),pt("div",$A,[f[3]||(f[3]=Ue("label",null,"✨ Shader 3D",-1)),co(Ue("select",{"onUpdate:modelValue":f[1]||(f[1]=h=>a.value=h),onChange:c,class:"shader-select"},[(ht(!0),pt(Ot,null,mr(r.value,h=>(ht(),pt("option",{key:h.id,value:h.id},Ti(h.name),9,ZA))),128))],544),[[oh,a.value]])])):xr("",!0)]))}},QA=An(JA,[["__scopeId","data-v-d7b232b0"]]),e3={class:"controls-overlay"},t3={class:"panel"},n3={class:"section"},i3={class:"section"},s3={class:"section"},r3={class:"section"},o3={class:"section"},a3={__name:"VisualizerControls",props:{isPlaying:Boolean,currentMode:{type:String,required:!0}},emits:["file-uploaded","mode-changed","toggle-play","stop","volume-change","image-uploaded","model-uploaded","shader-2d-changed","shader-3d-changed","reset-mode"],setup(i){return(e,t)=>(ht(),pt("div",e3,[Ue("div",t3,[t[10]||(t[10]=Ue("h3",null,"Commandes Rétro",-1)),Ue("div",n3,[wt(pA,{onFileUploaded:t[0]||(t[0]=n=>e.$emit("file-uploaded",n))})]),t[11]||(t[11]=Ue("div",{class:"divider"},null,-1)),Ue("div",i3,[wt(BA,{"is-playing":i.isPlaying,onTogglePlay:t[1]||(t[1]=n=>e.$emit("toggle-play")),onStop:t[2]||(t[2]=n=>e.$emit("stop")),onVolumeChange:t[3]||(t[3]=n=>e.$emit("volume-change",n))},null,8,["is-playing"])]),t[12]||(t[12]=Ue("div",{class:"divider"},null,-1)),Ue("div",s3,[wt(kA,{onModeChanged:t[4]||(t[4]=n=>e.$emit("mode-changed",n))})]),t[13]||(t[13]=Ue("div",{class:"divider"},null,-1)),Ue("div",r3,[wt(jA,{"current-mode":i.currentMode,onImageUploaded:t[5]||(t[5]=n=>e.$emit("image-uploaded",n)),onModelUploaded:t[6]||(t[6]=n=>e.$emit("model-uploaded",n)),onResetMode:t[7]||(t[7]=n=>e.$emit("reset-mode"))},null,8,["current-mode"])]),t[14]||(t[14]=Ue("div",{class:"divider"},null,-1)),Ue("div",o3,[wt(QA,{"current-mode":i.currentMode,onShader2dChanged:t[8]||(t[8]=n=>e.$emit("shader-2d-changed",n)),onShader3dChanged:t[9]||(t[9]=n=>e.$emit("shader-3d-changed",n))},null,8,["current-mode"])])])]))}},l3=An(a3,[["__scopeId","data-v-aee5f32b"]]),c3={key:0,class:"rotation-control"},u3={class:"slider-wrapper"},f3={class:"value-display"},h3={__name:"Rotation3DControl",props:{currentMode:{type:String,required:!0},initialSpeed:{type:Number,default:.005}},emits:["rotation-speed-changed"],setup(i,{emit:e}){const t=i,n=e,s=hn(t.initialSpeed);return Es(s,r=>{n("rotation-speed-changed",parseFloat(r))}),(r,o)=>i.currentMode.startsWith("3d")?(ht(),pt("div",c3,[o[1]||(o[1]=Ue("h4",null,"Rotation 3D",-1)),o[2]||(o[2]=Ue("label",{for:"rotation-speed"},"Vitesse",-1)),Ue("div",u3,[co(Ue("input",{id:"rotation-speed","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),type:"range",min:"0",max:"0.02",step:"0.001"},null,512),[[Rc,s.value]]),Ue("span",f3,Ti((s.value*1e3).toFixed(1)),1)])])):xr("",!0)}},d3=An(h3,[["__scopeId","data-v-7fef55cf"]]),p3={key:0,class:"shader-params"},m3=["for"],g3={class:"color-wrapper"},x3=["id","onUpdate:modelValue","onInput"],_3={class:"color-value"},v3=["for"],y3={class:"slider-wrapper"},b3=["id","onUpdate:modelValue","min","max","step","onInput"],M3={class:"value-display"},S3={__name:"ShaderParamsControl",props:{currentMode:{type:String,required:!0},currentShader:{type:String,default:""},shaderParams:{type:Object,default:()=>({})}},emits:["shader-param-changed"],setup(i,{emit:e}){const t=i,n=e,s=["uTime","u_time","uAudioData","u_audioData","u_audioLevel","u_bass","u_mid","u_treble","u_peak","u_energy","uTexture","u_texture","uHasTexture","u_resolution"],r={u_baseAmount:{label:"Quantité de Base",min:-2,max:2,step:.1},u_spikeAmount:{label:"Quantité de Spikes",min:-5,max:15,step:.1},u_noiseScale:{label:"Échelle du Bruit",min:1,max:50,step:.5},u_noiseSpeed:{label:"Vitesse du Bruit",min:-2,max:2,step:.001},u_waveSpeed:{label:"Vitesse de Vague",min:0,max:10,step:.1},u_waveAmplitude:{label:"Amplitude de Vague",min:0,max:2,step:.05},u_audioInfluence:{label:"Influence de l'audio",min:0,max:6,step:.05},u_waveScale:{label:"Échelle de Vague",min:.5,max:20,step:.5},u_helixRadius:{label:"Rayon Hélice",min:.2,max:2,step:.1},u_helixHeight:{label:"Hauteur Hélice",min:.5,max:5,step:.1},u_twistSpeed:{label:"Vitesse de Torsion",min:0,max:10,step:.5},u_spacing:{label:"Espacement",min:.5,max:3,step:.1},u_viscosity:{label:"Viscosité",min:0,max:3,step:.1},u_dropIntensity:{label:"Intensité Gouttes",min:0,max:2,step:.1},u_petalCount:{label:"Nombre de Pétales",min:3,max:16,step:1},u_bloomAmount:{label:"Ouverture",min:0,max:1,step:.05},u_petalCurve:{label:"Courbure Pétales",min:0,max:3,step:.1},u_centerSize:{label:"Taille Centre",min:.1,max:.5,step:.05},u_speed:{label:"Vitesse",min:0,max:5,step:.1},u_intensity:{label:"Intensité",min:0,max:3,step:.1},u_scale:{label:"Échelle",min:.1,max:3,step:.1},u_power:{label:"Puissance Fractale",min:2,max:16,step:.5},u_iterations:{label:"Itérations",min:3,max:12,step:1},u_bailout:{label:"Bailout",min:1,max:5,step:.1},u_cameraDistance:{label:"Distance Caméra",min:1,max:8,step:.1},u_rotationSpeed:{label:"Vitesse de Rotation",min:-1,max:1,step:.05},u_color:{label:"Couleur",type:"color"},u_color1:{label:"Couleur 1",type:"color"},u_color2:{label:"Couleur 2",type:"color"},u_color3:{label:"Couleur 3",type:"color"}},o=jp(()=>{const f={};for(const h in t.shaderParams)if(!s.includes(h)&&r[h]){const d=t.shaderParams[h],m=d&&typeof d=="object"&&"value"in d?d.value:d;f[h]={value:m,config:r[h]}}return f}),a=hn({});Es(()=>t.shaderParams,()=>{for(const f in o.value){const h=o.value[f];h.value!==void 0&&h.value!==null&&(h.config.type==="color"&&Array.isArray(h.value)?a.value[f]=l(h.value):a.value[f]=h.value)}},{immediate:!0,deep:!0});const l=f=>{const h=Math.round(f[0]*255),d=Math.round(f[1]*255),m=Math.round(f[2]*255);return"#"+[h,d,m].map(x=>{const g=x.toString(16);return g.length===1?"0"+g:g}).join("")},c=f=>{const h=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f);return h?[parseInt(h[1],16)/255,parseInt(h[2],16)/255,parseInt(h[3],16)/255]:[1,1,1]},u=(f,h,d=!1)=>{d?n("shader-param-changed",f,c(h)):n("shader-param-changed",f,parseFloat(h))};return(f,h)=>Object.keys(o.value).length>0?(ht(),pt("div",p3,[h[0]||(h[0]=Ue("h4",null,"Paramètres du Shader",-1)),(ht(!0),pt(Ot,null,mr(o.value,(d,m)=>(ht(),pt("div",{key:m,class:"param-control"},[d.config.type==="color"?(ht(),pt(Ot,{key:0},[Ue("label",{for:m},Ti(d.config.label),9,m3),Ue("div",g3,[co(Ue("input",{id:m,"onUpdate:modelValue":x=>a.value[m]=x,type:"color",onInput:x=>u(m,a.value[m],!0)},null,40,x3),[[Rc,a.value[m]]]),Ue("span",_3,Ti(a.value[m]),1)])],64)):(ht(),pt(Ot,{key:1},[Ue("label",{for:m},Ti(d.config.label),9,v3),Ue("div",y3,[co(Ue("input",{id:m,"onUpdate:modelValue":x=>a.value[m]=x,type:"range",min:d.config.min,max:d.config.max,step:d.config.step,onInput:x=>u(m,a.value[m])},null,40,b3),[[Rc,a.value[m]]]),Ue("span",M3,Ti(Number(a.value[m]).toFixed(2)),1)])],64))]))),128))])):xr("",!0)}},T3=An(S3,[["__scopeId","data-v-4e450c04"]]),E3={class:"app-container"},A3={class:"rotation-panel-overlay"},w3={class:"shader-params-overlay"},R3={__name:"App",setup(i){const e=hn(null),t=hn(null),n=hn(!1),s=hn("3d-model"),r=hn("normals"),o=hn({}),a=hn(.005),l=R=>{const T=URL.createObjectURL(R);t.value.src=T,t.value.play(),n.value=!0,uh(t.value)},c=()=>{t.value.src&&(t.value.paused?(t.value.play(),n.value=!0,uh(t.value)):(t.value.pause(),n.value=!1))},u=()=>{t.value&&(t.value.pause(),t.value.currentTime=0,n.value=!1)},f=R=>{t.value&&(t.value.volume=R)},h=R=>{const T=URL.createObjectURL(R);No(async()=>{const{setImage2D:C}=await Promise.resolve().then(()=>fa);return{setImage2D:C}},void 0).then(({setImage2D:C})=>{C(T)})},d=R=>{const T=URL.createObjectURL(R),C=R.name.split(".").pop().toLowerCase();No(async()=>{const{setModel3D:N}=await Promise.resolve().then(()=>fa);return{setModel3D:N}},void 0).then(({setModel3D:N})=>{N(T,C)})},m=R=>{No(async()=>{const{changeShader2D:T}=await Promise.resolve().then(()=>fa);return{changeShader2D:T}},void 0).then(({changeShader2D:T})=>{T(R),b()})},x=R=>{No(async()=>{const{changeShader3D:T}=await Promise.resolve().then(()=>fa);return{changeShader3D:T}},void 0).then(({changeShader3D:T})=>{T(R),b()})},g=R=>{a.value=R,$m(R)},p=(R,T)=>{s.value.startsWith("3d")?Zm(R,T):s.value.startsWith("2d")&&Jm(R,T)},b=()=>{s.value.startsWith("3d")?(r.value=qm(),o.value=Ym()):s.value.startsWith("2d")&&(o.value=Km())};Es(s,()=>{b()});const y=R=>{Au(R),s.value=R},M=()=>{Au(s.value)};return Hu(()=>{e.value&&(Xm(e.value),window.addEventListener("resize",wu),b())}),Mp(()=>{jm(),window.removeEventListener("resize",wu)}),(R,T)=>(ht(),pt("div",E3,[wt(l3,{"is-playing":n.value,"current-mode":s.value,onFileUploaded:l,onModeChanged:y,onTogglePlay:c,onStop:u,onVolumeChange:f,onImageUploaded:h,onModelUploaded:d,onShader2dChanged:m,onShader3dChanged:x,onResetMode:M},null,8,["is-playing","current-mode"]),Ue("div",A3,[wt(d3,{"current-mode":s.value,"initial-speed":a.value,onRotationSpeedChanged:g},null,8,["current-mode","initial-speed"])]),Ue("div",w3,[wt(T3,{"current-mode":s.value,"current-shader":r.value,"shader-params":o.value,onShaderParamChanged:p},null,8,["current-mode","current-shader","shader-params"])]),Ue("audio",{ref_key:"audioPlayer",ref:t,crossorigin:"anonymous",style:{display:"none"},onEnded:T[0]||(T[0]=C=>n.value=!1)},null,544),Ue("div",{ref_key:"canvasContainer",ref:e,class:"canvas-wrapper"},null,512)]))}};Rx(R3).mount("#app");
