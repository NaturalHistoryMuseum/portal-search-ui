function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},yt=[],Ee=()=>{},Cs=()=>!1,Ss=/^on[^a-z]/,Kn=e=>Ss.test(e),Zr=e=>e.startsWith("onUpdate:"),ee=Object.assign,Qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ks=Object.prototype.hasOwnProperty,H=(e,t)=>ks.call(e,t),F=Array.isArray,_t=e=>Gn(e)==="[object Map]",Gi=e=>Gn(e)==="[object Set]",R=e=>typeof e=="function",te=e=>typeof e=="string",ea=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Vi=e=>X(e)&&R(e.then)&&R(e.catch),Xi=Object.prototype.toString,Gn=e=>Xi.call(e),Os=e=>Gn(e).slice(8,-1),qi=e=>Gn(e)==="[object Object]",ta=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ms=/-(\w)/g,At=Vn(e=>e.replace(Ms,(t,n)=>n?n.toUpperCase():"")),Is=/\B([A-Z])/g,Ot=Vn(e=>e.replace(Is,"-$1").toLowerCase()),Ji=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=Vn(e=>e?`on${Ji(e)}`:""),Rn=(e,t)=>!Object.is(e,t),cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ln=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ps=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ha;const Ar=()=>Ha||(Ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function na(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?Rs(r):na(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(X(e))return e}}const Ns=/;(?![^(]*\))/g,Ds=/:([^]+)/,Fs=/\/\*[^]*?\*\//g;function Rs(e){const t={};return e.replace(Fs,"").split(Ns).forEach(n=>{if(n){const r=n.split(Ds);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ot(e){let t="";if(te(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=ot(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ls="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",js=Jr(Ls);function Zi(e){return!!e||e===""}const za=e=>te(e)?e:e==null?"":F(e)||X(e)&&(e.toString===Xi||!R(e.toString))?JSON.stringify(e,Qi,2):String(e),Qi=(e,t)=>t&&t.__v_isRef?Qi(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Gi(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!F(t)&&!qi(t)?String(t):t;let _e;class Us{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!t&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){_e=this}off(){_e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Hs(e,t=_e){t&&t.active&&t.effects.push(e)}function zs(){return _e}const ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},eo=e=>(e.w&qe)>0,to=e=>(e.n&qe)>0,$s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},Ys=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];eo(a)&&!to(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},Er=new WeakMap;let Lt=0,qe=1;const Cr=30;let xe;const ft=Symbol(""),Sr=Symbol("");class aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hs(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ve=!0,qe=1<<++Lt,Lt<=Cr?$s(this):$a(this),this.fn()}finally{Lt<=Cr&&Ys(this),qe=1<<--Lt,xe=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const no=[];function Mt(){no.push(Ve),Ve=!1}function It(){const e=no.pop();Ve=e===void 0?!0:e}function pe(e,t,n){if(Ve&&xe){let r=Er.get(e);r||Er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ra()),ro(a)}}function ro(e,t){let n=!1;Lt<=Cr?to(e)||(e.n|=qe,n=!eo(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function je(e,t,n,r,a,i){const o=Er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((f,d)=>{(d==="length"||d>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ta(n)&&s.push(o.get("length")):(s.push(o.get(ft)),_t(e)&&s.push(o.get(Sr)));break;case"delete":F(e)||(s.push(o.get(ft)),_t(e)&&s.push(o.get(Sr)));break;case"set":_t(e)&&s.push(o.get(ft));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);kr(ra(l))}}function kr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ya(r);for(const r of n)r.computed||Ya(r)}function Ya(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Bs=Jr("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ea)),Ws=ia(),Ks=ia(!1,!0),Gs=ia(!0),Ba=Vs();function Vs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=z(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(z)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=z(this)[t].apply(this,n);return It(),r}}),e}function Xs(e){const t=z(this);return pe(t,"has",e),t.hasOwnProperty(e)}function ia(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ul:fo:t?lo:so).get(r))return r;const o=F(r);if(!e){if(o&&H(Ba,a))return Reflect.get(Ba,a,i);if(a==="hasOwnProperty")return Xs}const s=Reflect.get(r,a,i);return(ea(a)?ao.has(a):Bs(a))||(e||pe(r,"get",a),t)?s:fe(s)?o&&ta(a)?s:s.value:X(s)?e?co(s):la(s):s}}const qs=io(),Js=io(!0);function io(e=!1){return function(n,r,a,i){let o=n[r];if(Kt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!Or(a)&&!Kt(a)&&(o=z(o),a=z(a)),!F(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=F(n)&&ta(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===z(i)&&(s?Rn(a,o)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function Zs(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function Qs(e,t){const n=Reflect.has(e,t);return(!ea(t)||!ao.has(t))&&pe(e,"has",t),n}function el(e){return pe(e,"iterate",F(e)?"length":ft),Reflect.ownKeys(e)}const oo={get:Ws,set:qs,deleteProperty:Zs,has:Qs,ownKeys:el},tl={get:Gs,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=ee({},oo,{get:Ks,set:Js}),oa=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=z(e),i=z(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Xn(a),s=r?oa:n?ua:ca;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=z(n),a=z(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&pe(z(e),"iterate",ft),Reflect.get(e,"size",e)}function Wa(e){e=z(e);const t=z(this);return Xn(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function Ka(e,t){t=z(t);const n=z(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=z(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Rn(t,o)&&je(n,"set",e,t):je(n,"add",e,t),this}function Ga(e){const t=z(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=z(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function Va(){const e=z(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=z(o),l=t?oa:e?ua:ca;return!e&&pe(s,"iterate",ft),o.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function gn(e,t,n){return function(...r){const a=this.__v_raw,i=z(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),d=n?oa:t?ua:ca;return!t&&pe(i,"iterate",l?Sr:ft),{next(){const{value:m,done:v}=f.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Be(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:Wa,set:Ka,delete:Ga,clear:Va,forEach:hn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:Wa,set:Ka,delete:Ga,clear:Va,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),t[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[e,n,t,r]}const[al,il,ol,sl]=rl();function sa(e,t){const n=t?e?sl:ol:e?il:al;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const ll={get:sa(!1,!1)},fl={get:sa(!1,!0)},cl={get:sa(!0,!1)},so=new WeakMap,lo=new WeakMap,fo=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Os(e))}function la(e){return Kt(e)?e:fa(e,!1,oo,ll,so)}function pl(e){return fa(e,!1,nl,fl,lo)}function co(e){return fa(e,!0,tl,cl,fo)}function fa(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Tt(e){return Kt(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function Or(e){return!!(e&&e.__v_isShallow)}function uo(e){return Tt(e)||Kt(e)}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function mo(e){return Ln(e,"__v_skip",!0),e}const ca=e=>X(e)?la(e):e,ua=e=>X(e)?co(e):e;function hl(e){Ve&&xe&&(e=z(e),ro(e.dep||(e.dep=ra())))}function gl(e,t){e=z(e);const n=e.dep;n&&kr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Mr(e){return fe(e)?e.value:e}const vl={get:(e,t,n)=>Mr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return Tt(e)?e:new Proxy(e,vl)}class bl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new aa(t,()=>{this._dirty||(this._dirty=!0,gl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=z(this);return hl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function yl(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new bl(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){qn(i,t,n)}return a}function Ce(e,t,n,r){if(R(e)){const i=Xe(e,t,n,r);return i&&Vi(i)&&i.catch(o=>{qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}_l(e,n,a,r)}function _l(e,t,n,r=!0){console.error(e)}let Gt=!1,Ir=!1;const ie=[];let Pe=0;const xt=[];let Re=null,at=0;const ho=Promise.resolve();let da=null;function Tl(e){const t=da||ho;return e?t.then(this?e.bind(this):e):t}function xl(e){let t=Pe+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Vt(ie[r])<e?t=r+1:n=r}return t}function ma(e){(!ie.length||!ie.includes(e,Gt&&e.allowRecurse?Pe+1:Pe))&&(e.id==null?ie.push(e):ie.splice(xl(e.id),0,e),go())}function go(){!Gt&&!Ir&&(Ir=!0,da=ho.then(bo))}function wl(e){const t=ie.indexOf(e);t>Pe&&ie.splice(t,1)}function Al(e){F(e)?xt.push(...e):(!Re||!Re.includes(e,e.allowRecurse?at+1:at))&&xt.push(e),go()}function Xa(e,t=Gt?Pe+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function vo(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Re){Re.push(...t);return}for(Re=t,Re.sort((n,r)=>Vt(n)-Vt(r)),at=0;at<Re.length;at++)Re[at]();Re=null,at=0}}const Vt=e=>e.id==null?1/0:e.id,El=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bo(e){Ir=!1,Gt=!0,ie.sort(El);const t=Ee;try{for(Pe=0;Pe<ie.length;Pe++){const n=ie[Pe];n&&n.active!==!1&&Xe(n,null,14)}}finally{Pe=0,ie.length=0,vo(),Gt=!1,da=null,(ie.length||xt.length)&&bo()}}function Cl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(x=>te(x)?x.trim():x)),m&&(a=n.map(Ps))}let s,l=r[s=fr(t)]||r[s=fr(At(t))];!l&&i&&(l=r[s=fr(Ot(t))]),l&&Ce(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(f,e,6,a)}}function yo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=f=>{const d=yo(f,t,!0);d&&(s=!0,ee(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(X(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ee(o,i),X(e)&&r.set(e,o),o)}function Jn(e,t){return!e||!Kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Ot(t))||H(e,t))}let de=null,_o=null;function jn(e){const t=de;return de=e,_o=e&&e.type.__scopeId||null,t}function Sl(e,t=de,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ii(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:d,renderCache:m,data:v,setupState:x,ctx:L,inheritAttrs:P}=e;let U,w;const E=jn(e);try{if(n.shapeFlag&4){const O=a||r;U=Ie(d.call(O,O,m,i,x,v,L)),w=l}else{const O=t;U=Ie(O.length>1?O(i,{attrs:l,slots:s,emit:f}):O(i,null)),w=t.props?l:kl(l)}}catch(O){$t.length=0,qn(O,e,1),U=me(Et)}let N=U;if(w&&P!==!1){const O=Object.keys(w),{shapeFlag:$}=N;O.length&&$&7&&(o&&O.some(Zr)&&(w=Ol(w,o)),N=Ct(N,w))}return n.dirs&&(N=Ct(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),U=N,jn(E),U}const kl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kn(n))&&((t||(t={}))[n]=e[n]);return t},Ol=(e,t)=>{const n={};for(const r in e)(!Zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ml(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,o,f):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Jn(f,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qa(r,o,f):!0:!!o;return!1}function qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Jn(n,i))return!0}return!1}function Il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Pl=e=>e.__isSuspense;function Nl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Al(e)}const vn={};function In(e,t,n){return To(e,t,n)}function To(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=zs()===((s=oe)==null?void 0:s.scope)?oe:null;let f,d=!1,m=!1;if(fe(e)?(f=()=>e.value,d=Or(e)):Tt(e)?(f=()=>e,r=!0):F(e)?(m=!0,d=e.some(O=>Tt(O)||Or(O)),f=()=>e.map(O=>{if(fe(O))return O.value;if(Tt(O))return gt(O);if(R(O))return Xe(O,l,2)})):R(e)?t?f=()=>Xe(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ce(e,l,3,[x])}:f=Ee,t&&r){const O=f;f=()=>gt(O())}let v,x=O=>{v=E.onStop=()=>{Xe(O,l,4)}},L;if(qt)if(x=Ee,t?n&&Ce(t,l,3,[f(),m?[]:void 0,x]):f(),a==="sync"){const O=If();L=O.__watcherHandles||(O.__watcherHandles=[])}else return Ee;let P=m?new Array(e.length).fill(vn):vn;const U=()=>{if(E.active)if(t){const O=E.run();(r||d||(m?O.some(($,re)=>Rn($,P[re])):Rn(O,P)))&&(v&&v(),Ce(t,l,3,[O,P===vn?void 0:m&&P[0]===vn?[]:P,x]),P=O)}else E.run()};U.allowRecurse=!!t;let w;a==="sync"?w=U:a==="post"?w=()=>ue(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),w=()=>ma(U));const E=new aa(f,w);t?n?U():P=E.run():a==="post"?ue(E.run.bind(E),l&&l.suspense):E.run();const N=()=>{E.stop(),l&&l.scope&&Qr(l.scope.effects,E)};return L&&L.push(N),N}function Dl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?xo(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=oe;St(this);const s=To(a,i.bind(r),n);return o?St(o):ct(),s}function xo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))gt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(Gi(e)||_t(e))e.forEach(n=>{gt(n,t)});else if(qi(e))for(const n in e)gt(e[n],t);return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Mt(),Ce(l,n,8,[e.el,s,e,t]),It())}}function Fl(e,t){return R(e)?(()=>ee({name:e.name},t,{setup:e}))():e}const Ht=e=>!!e.type.__asyncLoader,wo=e=>e.type.__isKeepAlive;function Rl(e,t){Ao(e,"a",t)}function Ll(e,t){Ao(e,"da",t)}function Ao(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)wo(a.parent.vnode)&&jl(r,t,n,a),a=a.parent}}function jl(e,t,n,r){const a=Zn(t,e,r,!0);Eo(()=>{Qr(r[t],a)},n)}function Zn(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),St(n);const s=Ce(t,n,e,o);return ct(),It(),s});return r?a.unshift(i):a.push(i),i}}const $e=e=>(t,n=oe)=>(!qt||e==="sp")&&Zn(e,(...r)=>t(...r),n),Ul=$e("bm"),Hl=$e("m"),zl=$e("bu"),$l=$e("u"),Yl=$e("bum"),Eo=$e("um"),Bl=$e("sp"),Wl=$e("rtg"),Kl=$e("rtc");function Gl(e,t=oe){Zn("ec",e,t)}const Vl=Symbol.for("v-ndc");function Xl(e,t,n={},r,a){if(de.isCE||de.parent&&Ht(de.parent)&&de.parent.isCE)return t!=="default"&&(n.name=t),me("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Fo();const o=i&&Co(i(n)),s=vf(Te,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Co(e){return e.some(t=>zn(t)?!(t.type===Et||t.type===Te&&!Co(t.children)):!0)?e:null}const Pr=e=>e?Uo(e)?ba(e)||e.proxy:Pr(e.parent):null,zt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pr(e.parent),$root:e=>Pr(e.root),$emit:e=>e.emit,$options:e=>pa(e),$forceUpdate:e=>e.f||(e.f=()=>ma(e.update)),$nextTick:e=>e.n||(e.n=Tl.bind(e.proxy)),$watch:e=>Dl.bind(e)}),dr=(e,t)=>e!==V&&!e.__isScriptSetup&&H(e,t),ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(dr(r,t))return o[t]=1,r[t];if(a!==V&&H(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&H(f,t))return o[t]=3,i[t];if(n!==V&&H(n,t))return o[t]=4,n[t];Nr&&(o[t]=0)}}const d=zt[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&H(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,H(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return dr(a,t)?(a[t]=n,!0):r!==V&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&H(e,o)||dr(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(zt,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ja(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Jl(e){const t=pa(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&Za(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:d,beforeMount:m,mounted:v,beforeUpdate:x,updated:L,activated:P,deactivated:U,beforeDestroy:w,beforeUnmount:E,destroyed:N,unmounted:O,render:$,renderTracked:re,renderTriggered:ae,errorCaptured:be,serverPrefetch:ve,expose:De,inheritAttrs:Nt,components:ln,directives:fn,filters:or}=t;if(f&&Zl(f,r,null),o)for(const q in o){const B=o[q];R(B)&&(r[q]=B.bind(n))}if(a){const q=a.call(n,n);X(q)&&(e.data=la(q))}if(Nr=!0,i)for(const q in i){const B=i[q],et=R(B)?B.bind(n,n):R(B.get)?B.get.bind(n,n):Ee,cn=!R(B)&&R(B.set)?B.set.bind(n):Ee,tt=Ge({get:et,set:cn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>tt.value,set:ke=>tt.value=ke})}if(s)for(const q in s)So(s[q],r,n,q);if(l){const q=R(l)?l.call(n):l;Reflect.ownKeys(q).forEach(B=>{af(B,q[B])})}d&&Za(d,e,"c");function se(q,B){F(B)?B.forEach(et=>q(et.bind(n))):B&&q(B.bind(n))}if(se(Ul,m),se(Hl,v),se(zl,x),se($l,L),se(Rl,P),se(Ll,U),se(Gl,be),se(Kl,re),se(Wl,ae),se(Yl,E),se(Eo,O),se(Bl,ve),F(De))if(De.length){const q=e.exposed||(e.exposed={});De.forEach(B=>{Object.defineProperty(q,B,{get:()=>n[B],set:et=>n[B]=et})})}else e.exposed||(e.exposed={});$&&e.render===Ee&&(e.render=$),Nt!=null&&(e.inheritAttrs=Nt),ln&&(e.components=ln),fn&&(e.directives=fn)}function Zl(e,t,n=Ee){F(e)&&(e=Dr(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Za(e,t,n){Ce(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function So(e,t,n,r){const a=r.includes(".")?xo(n,r):()=>n[r];if(te(e)){const i=t[e];R(i)&&In(a,i)}else if(R(e))In(a,e.bind(n));else if(X(e))if(F(e))e.forEach(i=>So(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&In(a,i,e)}}function pa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Un(l,f,o,!0)),Un(l,t,o)),X(t)&&i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ql[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ql={data:Qa,props:ei,emits:ei,methods:jt,computed:jt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:jt,directives:jt,watch:tf,provide:Qa,inject:ef};function Qa(e,t){return t?e?function(){return ee(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function ef(e,t){return jt(Dr(e),Dr(t))}function Dr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ee(Object.create(null),e,t):t}function ei(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ee(Object.create(null),Ja(e),Ja(t??{})):t}function tf(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function ko(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function rf(e,t){return function(r,a=null){R(r)||(r=ee({},r)),a!=null&&!X(a)&&(a=null);const i=ko(),o=new Set;let s=!1;const l=i.app={_uid:nf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Pf,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&R(f.install)?(o.add(f),f.install(l,...d)):R(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!s){const v=me(r,a);return v.appContext=i,d&&t?t(v,f):e(v,f,m),s=!0,l._container=f,f.__vue_app__=l,ba(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){Hn=l;try{return f()}finally{Hn=null}}};return l}}let Hn=null;function af(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){const r=oe||de;if(r||Hn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Hn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r&&r.proxy):t}}function of(e,t,n,r=!1){const a={},i={};Ln(i,er,1),e.propsDefaults=Object.create(null),Oo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:pl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function sf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=z(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Jn(e.emitsOptions,v))continue;const x=t[v];if(l)if(H(i,v))x!==i[v]&&(i[v]=x,f=!0);else{const L=At(v);a[L]=Fr(l,s,L,x,e,!1)}else x!==i[v]&&(i[v]=x,f=!0)}}}else{Oo(e,t,a,i)&&(f=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=Ot(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],f=!0)}f&&je(e,"set","$attrs")}function Oo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const f=t[l];let d;a&&H(a,d=At(l))?!i||!i.includes(d)?n[d]=f:(s||(s={}))[d]=f:Jn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=z(n),f=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,f[m],e,!H(f,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&R(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(St(a),r=f[n]=l.call(null,t),ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function Mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,x]=Mo(m,t,!0);ee(o,v),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return X(e)&&r.set(e,yt),yt;if(F(i))for(let d=0;d<i.length;d++){const m=At(i[d]);ti(m)&&(o[m]=V)}else if(i)for(const d in i){const m=At(d);if(ti(m)){const v=i[d],x=o[m]=F(v)||R(v)?{type:v}:ee({},v);if(x){const L=ai(Boolean,x.type),P=ai(String,x.type);x[0]=L>-1,x[1]=P<0||L<P,(L>-1||H(x,"default"))&&s.push(m)}}}const f=[o,s];return X(e)&&r.set(e,f),f}function ti(e){return e[0]!=="$"}function ni(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ri(e,t){return ni(e)===ni(t)}function ai(e,t){return F(t)?t.findIndex(n=>ri(n,e)):R(t)&&ri(t,e)?0:-1}const Io=e=>e[0]==="_"||e==="$stable",ha=e=>F(e)?e.map(Ie):[Ie(e)],lf=(e,t,n)=>{if(t._n)return t;const r=Sl((...a)=>ha(t(...a)),n);return r._c=!1,r},Po=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Io(a))continue;const i=e[a];if(R(i))t[a]=lf(a,i,r);else if(i!=null){const o=ha(i);t[a]=()=>o}}},No=(e,t)=>{const n=ha(t);e.slots.default=()=>n},ff=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=z(t),Ln(t,"_",n)):Po(t,e.slots={})}else e.slots={},t&&No(e,t);Ln(e.slots,er,1)},cf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ee(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Po(t,a)),o=t}else t&&(No(e,t),o={default:1});if(i)for(const s in a)!Io(s)&&!(s in o)&&delete a[s]};function Rr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,x)=>Rr(v,t&&(F(t)?t[x]:t),n,r,a));return}if(Ht(r)&&!a)return;const i=r.shapeFlag&4?ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(te(f)?(d[f]=null,H(m,f)&&(m[f]=null)):fe(f)&&(f.value=null)),R(l))Xe(l,s,12,[o,d]);else{const v=te(l),x=fe(l);if(v||x){const L=()=>{if(e.f){const P=v?H(m,l)?m[l]:d[l]:l.value;a?F(P)&&Qr(P,i):F(P)?P.includes(i)||P.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,ue(L,n)):L()}}}const ue=Nl;function uf(e){return df(e)}function df(e,t){const n=Ar();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:v,setScopeId:x=Ee,insertStaticContent:L}=e,P=(c,u,p,g=null,h=null,_=null,A=!1,y=null,T=!!u.dynamicChildren)=>{if(c===u)return;c&&!Ft(c,u)&&(g=un(c),ke(c,h,_,!0),c=null),u.patchFlag===-2&&(T=!1,u.dynamicChildren=null);const{type:b,ref:M,shapeFlag:S}=u;switch(b){case Qn:U(c,u,p,g);break;case Et:w(c,u,p,g);break;case mr:c==null&&E(u,p,g,A);break;case Te:ln(c,u,p,g,h,_,A,y,T);break;default:S&1?$(c,u,p,g,h,_,A,y,T):S&6?fn(c,u,p,g,h,_,A,y,T):(S&64||S&128)&&b.process(c,u,p,g,h,_,A,y,T,mt)}M!=null&&h&&Rr(M,c&&c.ref,_,u||c,!u)},U=(c,u,p,g)=>{if(c==null)r(u.el=s(u.children),p,g);else{const h=u.el=c.el;u.children!==c.children&&f(h,u.children)}},w=(c,u,p,g)=>{c==null?r(u.el=l(u.children||""),p,g):u.el=c.el},E=(c,u,p,g)=>{[c.el,c.anchor]=L(c.children,u,p,g,c.el,c.anchor)},N=({el:c,anchor:u},p,g)=>{let h;for(;c&&c!==u;)h=v(c),r(c,p,g),c=h;r(u,p,g)},O=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=v(c),a(c),c=p;a(u)},$=(c,u,p,g,h,_,A,y,T)=>{A=A||u.type==="svg",c==null?re(u,p,g,h,_,A,y,T):ve(c,u,h,_,A,y,T)},re=(c,u,p,g,h,_,A,y)=>{let T,b;const{type:M,props:S,shapeFlag:I,transition:D,dirs:j}=c;if(T=c.el=o(c.type,_,S&&S.is,S),I&8?d(T,c.children):I&16&&be(c.children,T,null,g,h,_&&M!=="foreignObject",A,y),j&&nt(c,null,g,"created"),ae(T,c,c.scopeId,A,g),S){for(const Y in S)Y!=="value"&&!Mn(Y)&&i(T,Y,null,S[Y],_,c.children,g,h,Fe);"value"in S&&i(T,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Me(b,g,c)}j&&nt(c,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&D&&!D.persisted;W&&D.beforeEnter(T),r(T,u,p),((b=S&&S.onVnodeMounted)||W||j)&&ue(()=>{b&&Me(b,g,c),W&&D.enter(T),j&&nt(c,null,g,"mounted")},h)},ae=(c,u,p,g,h)=>{if(p&&x(c,p),g)for(let _=0;_<g.length;_++)x(c,g[_]);if(h){let _=h.subTree;if(u===_){const A=h.vnode;ae(c,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(c,u,p,g,h,_,A,y,T=0)=>{for(let b=T;b<c.length;b++){const M=c[b]=y?Ke(c[b]):Ie(c[b]);P(null,M,u,p,g,h,_,A,y)}},ve=(c,u,p,g,h,_,A)=>{const y=u.el=c.el;let{patchFlag:T,dynamicChildren:b,dirs:M}=u;T|=c.patchFlag&16;const S=c.props||V,I=u.props||V;let D;p&&rt(p,!1),(D=I.onVnodeBeforeUpdate)&&Me(D,p,u,c),M&&nt(u,c,p,"beforeUpdate"),p&&rt(p,!0);const j=h&&u.type!=="foreignObject";if(b?De(c.dynamicChildren,b,y,p,g,j,_):A||B(c,u,y,null,p,g,j,_,!1),T>0){if(T&16)Nt(y,u,S,I,p,g,h);else if(T&2&&S.class!==I.class&&i(y,"class",null,I.class,h),T&4&&i(y,"style",S.style,I.style,h),T&8){const W=u.dynamicProps;for(let Y=0;Y<W.length;Y++){const Z=W[Y],ye=S[Z],pt=I[Z];(pt!==ye||Z==="value")&&i(y,Z,ye,pt,h,c.children,p,g,Fe)}}T&1&&c.children!==u.children&&d(y,u.children)}else!A&&b==null&&Nt(y,u,S,I,p,g,h);((D=I.onVnodeUpdated)||M)&&ue(()=>{D&&Me(D,p,u,c),M&&nt(u,c,p,"updated")},g)},De=(c,u,p,g,h,_,A)=>{for(let y=0;y<u.length;y++){const T=c[y],b=u[y],M=T.el&&(T.type===Te||!Ft(T,b)||T.shapeFlag&70)?m(T.el):p;P(T,b,M,null,g,h,_,A,!0)}},Nt=(c,u,p,g,h,_,A)=>{if(p!==g){if(p!==V)for(const y in p)!Mn(y)&&!(y in g)&&i(c,y,p[y],null,A,u.children,h,_,Fe);for(const y in g){if(Mn(y))continue;const T=g[y],b=p[y];T!==b&&y!=="value"&&i(c,y,b,T,A,u.children,h,_,Fe)}"value"in g&&i(c,"value",p.value,g.value)}},ln=(c,u,p,g,h,_,A,y,T)=>{const b=u.el=c?c.el:s(""),M=u.anchor=c?c.anchor:s("");let{patchFlag:S,dynamicChildren:I,slotScopeIds:D}=u;D&&(y=y?y.concat(D):D),c==null?(r(b,p,g),r(M,p,g),be(u.children,p,M,h,_,A,y,T)):S>0&&S&64&&I&&c.dynamicChildren?(De(c.dynamicChildren,I,p,h,_,A,y),(u.key!=null||h&&u===h.subTree)&&Do(c,u,!0)):B(c,u,p,M,h,_,A,y,T)},fn=(c,u,p,g,h,_,A,y,T)=>{u.slotScopeIds=y,c==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,T):or(u,p,g,h,_,A,T):Da(c,u,T)},or=(c,u,p,g,h,_,A)=>{const y=c.component=wf(c,g,h);if(wo(c)&&(y.ctx.renderer=mt),Af(y),y.asyncDep){if(h&&h.registerDep(y,se),!c.el){const T=y.subTree=me(Et);w(null,T,u,p)}return}se(y,c,u,p,h,_,A)},Da=(c,u,p)=>{const g=u.component=c.component;if(Ml(c,u,p))if(g.asyncDep&&!g.asyncResolved){q(g,u,p);return}else g.next=u,wl(g.update),g.update();else u.el=c.el,g.vnode=u},se=(c,u,p,g,h,_,A)=>{const y=()=>{if(c.isMounted){let{next:M,bu:S,u:I,parent:D,vnode:j}=c,W=M,Y;rt(c,!1),M?(M.el=j.el,q(c,M,A)):M=j,S&&cr(S),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&Me(Y,D,M,j),rt(c,!0);const Z=ur(c),ye=c.subTree;c.subTree=Z,P(ye,Z,m(ye.el),un(ye),c,h,_),M.el=Z.el,W===null&&Il(c,Z.el),I&&ue(I,h),(Y=M.props&&M.props.onVnodeUpdated)&&ue(()=>Me(Y,D,M,j),h)}else{let M;const{el:S,props:I}=u,{bm:D,m:j,parent:W}=c,Y=Ht(u);if(rt(c,!1),D&&cr(D),!Y&&(M=I&&I.onVnodeBeforeMount)&&Me(M,W,u),rt(c,!0),S&&lr){const Z=()=>{c.subTree=ur(c),lr(S,c.subTree,c,h,null)};Y?u.type.__asyncLoader().then(()=>!c.isUnmounted&&Z()):Z()}else{const Z=c.subTree=ur(c);P(null,Z,p,g,c,h,_),u.el=Z.el}if(j&&ue(j,h),!Y&&(M=I&&I.onVnodeMounted)){const Z=u;ue(()=>Me(M,W,Z),h)}(u.shapeFlag&256||W&&Ht(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&ue(c.a,h),c.isMounted=!0,u=p=g=null}},T=c.effect=new aa(y,()=>ma(b),c.scope),b=c.update=()=>T.run();b.id=c.uid,rt(c,!0),b()},q=(c,u,p)=>{u.component=c;const g=c.vnode.props;c.vnode=u,c.next=null,sf(c,u.props,g,p),cf(c,u.children,p),Mt(),Xa(),It()},B=(c,u,p,g,h,_,A,y,T=!1)=>{const b=c&&c.children,M=c?c.shapeFlag:0,S=u.children,{patchFlag:I,shapeFlag:D}=u;if(I>0){if(I&128){cn(b,S,p,g,h,_,A,y,T);return}else if(I&256){et(b,S,p,g,h,_,A,y,T);return}}D&8?(M&16&&Fe(b,h,_),S!==b&&d(p,S)):M&16?D&16?cn(b,S,p,g,h,_,A,y,T):Fe(b,h,_,!0):(M&8&&d(p,""),D&16&&be(S,p,g,h,_,A,y,T))},et=(c,u,p,g,h,_,A,y,T)=>{c=c||yt,u=u||yt;const b=c.length,M=u.length,S=Math.min(b,M);let I;for(I=0;I<S;I++){const D=u[I]=T?Ke(u[I]):Ie(u[I]);P(c[I],D,p,null,h,_,A,y,T)}b>M?Fe(c,h,_,!0,!1,S):be(u,p,g,h,_,A,y,T,S)},cn=(c,u,p,g,h,_,A,y,T)=>{let b=0;const M=u.length;let S=c.length-1,I=M-1;for(;b<=S&&b<=I;){const D=c[b],j=u[b]=T?Ke(u[b]):Ie(u[b]);if(Ft(D,j))P(D,j,p,null,h,_,A,y,T);else break;b++}for(;b<=S&&b<=I;){const D=c[S],j=u[I]=T?Ke(u[I]):Ie(u[I]);if(Ft(D,j))P(D,j,p,null,h,_,A,y,T);else break;S--,I--}if(b>S){if(b<=I){const D=I+1,j=D<M?u[D].el:g;for(;b<=I;)P(null,u[b]=T?Ke(u[b]):Ie(u[b]),p,j,h,_,A,y,T),b++}}else if(b>I)for(;b<=S;)ke(c[b],h,_,!0),b++;else{const D=b,j=b,W=new Map;for(b=j;b<=I;b++){const he=u[b]=T?Ke(u[b]):Ie(u[b]);he.key!=null&&W.set(he.key,b)}let Y,Z=0;const ye=I-j+1;let pt=!1,La=0;const Dt=new Array(ye);for(b=0;b<ye;b++)Dt[b]=0;for(b=D;b<=S;b++){const he=c[b];if(Z>=ye){ke(he,h,_,!0);continue}let Oe;if(he.key!=null)Oe=W.get(he.key);else for(Y=j;Y<=I;Y++)if(Dt[Y-j]===0&&Ft(he,u[Y])){Oe=Y;break}Oe===void 0?ke(he,h,_,!0):(Dt[Oe-j]=b+1,Oe>=La?La=Oe:pt=!0,P(he,u[Oe],p,null,h,_,A,y,T),Z++)}const ja=pt?mf(Dt):yt;for(Y=ja.length-1,b=ye-1;b>=0;b--){const he=j+b,Oe=u[he],Ua=he+1<M?u[he+1].el:g;Dt[b]===0?P(null,Oe,p,Ua,h,_,A,y,T):pt&&(Y<0||b!==ja[Y]?tt(Oe,p,Ua,2):Y--)}}},tt=(c,u,p,g,h=null)=>{const{el:_,type:A,transition:y,children:T,shapeFlag:b}=c;if(b&6){tt(c.component.subTree,u,p,g);return}if(b&128){c.suspense.move(u,p,g);return}if(b&64){A.move(c,u,p,mt);return}if(A===Te){r(_,u,p);for(let S=0;S<T.length;S++)tt(T[S],u,p,g);r(c.anchor,u,p);return}if(A===mr){N(c,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,u,p),ue(()=>y.enter(_),h);else{const{leave:S,delayLeave:I,afterLeave:D}=y,j=()=>r(_,u,p),W=()=>{S(_,()=>{j(),D&&D()})};I?I(_,j,W):W()}else r(_,u,p)},ke=(c,u,p,g=!1,h=!1)=>{const{type:_,props:A,ref:y,children:T,dynamicChildren:b,shapeFlag:M,patchFlag:S,dirs:I}=c;if(y!=null&&Rr(y,null,p,c,!0),M&256){u.ctx.deactivate(c);return}const D=M&1&&I,j=!Ht(c);let W;if(j&&(W=A&&A.onVnodeBeforeUnmount)&&Me(W,u,c),M&6)Es(c.component,p,g);else{if(M&128){c.suspense.unmount(p,g);return}D&&nt(c,null,u,"beforeUnmount"),M&64?c.type.remove(c,u,p,h,mt,g):b&&(_!==Te||S>0&&S&64)?Fe(b,u,p,!1,!0):(_===Te&&S&384||!h&&M&16)&&Fe(T,u,p),g&&Fa(c)}(j&&(W=A&&A.onVnodeUnmounted)||D)&&ue(()=>{W&&Me(W,u,c),D&&nt(c,null,u,"unmounted")},p)},Fa=c=>{const{type:u,el:p,anchor:g,transition:h}=c;if(u===Te){As(p,g);return}if(u===mr){O(c);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,T=()=>A(p,_);y?y(c.el,_,T):T()}else _()},As=(c,u)=>{let p;for(;c!==u;)p=v(c),a(c),c=p;a(u)},Es=(c,u,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:y}=c;g&&cr(g),h.stop(),_&&(_.active=!1,ke(A,c,u,p)),y&&ue(y,u),ue(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(c,u,p,g=!1,h=!1,_=0)=>{for(let A=_;A<c.length;A++)ke(c[A],u,p,g,h)},un=c=>c.shapeFlag&6?un(c.component.subTree):c.shapeFlag&128?c.suspense.next():v(c.anchor||c.el),Ra=(c,u,p)=>{c==null?u._vnode&&ke(u._vnode,null,null,!0):P(u._vnode||null,c,u,null,null,null,p),Xa(),vo(),u._vnode=c},mt={p:P,um:ke,m:tt,r:Fa,mt:or,mc:be,pc:B,pbc:De,n:un,o:e};let sr,lr;return t&&([sr,lr]=t(mt)),{render:Ra,hydrate:sr,createApp:rf(Ra,sr)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Do(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||Do(o,s)),s.type===Qn&&(s.el=o.el)}}function mf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const pf=e=>e.__isTeleport,Te=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),$t=[];let we=null;function Fo(e=!1){$t.push(we=e?null:[])}function hf(){$t.pop(),we=$t[$t.length-1]||null}let Xt=1;function ii(e){Xt+=e}function Ro(e){return e.dynamicChildren=Xt>0?we||yt:null,hf(),Xt>0&&we&&we.push(e),e}function gf(e,t,n,r,a,i){return Ro(Yt(e,t,n,r,a,i,!0))}function vf(e,t,n,r,a){return Ro(me(e,t,n,r,a,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",Lo=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||fe(e)||R(e)?{i:de,r:e,k:t,f:!!n}:e:null);function Yt(e,t=null,n=null,r=0,a=null,i=e===Te?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lo(t),ref:t&&Nn(t),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:de};return s?(ga(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Xt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const me=bf;function bf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Vl)&&(e=Et),zn(e)){const s=Ct(e,t,!0);return n&&ga(s,n),Xt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(kf(e)&&(e=e.__vccOpts),t){t=yf(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=ot(s)),X(l)&&(uo(l)&&!F(l)&&(l=ee({},l)),t.style=na(l))}const o=te(e)?1:Pl(e)?128:pf(e)?64:X(e)?4:R(e)?2:0;return Yt(e,t,n,r,a,o,i,!0)}function yf(e){return e?uo(e)||er in e?ee({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?_f(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Lo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function jo(e=" ",t=0){return me(Qn,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?me(Et):F(e)?me(Te,null,e.slice()):typeof e=="object"?Ke(e):me(Qn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function ga(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ga(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=de:a===3&&de&&(de.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:de},n=32):(t=String(t),r&64?(n=16,t=[jo(t)]):n=8);e.children=t,e.shapeFlag|=n}function _f(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ot([t.class,r.class]));else if(a==="style")t.style=na([t.style,r.style]);else if(Kn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Ce(e,t,7,[n,r])}const Tf=ko();let xf=0;function wf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Tf,i={uid:xf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Us(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(r,a),emitsOptions:yo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cl.bind(null,i),e.ce&&e.ce(i),i}let oe=null,va,ht,oi="__VUE_INSTANCE_SETTERS__";(ht=Ar()[oi])||(ht=Ar()[oi]=[]),ht.push(e=>oe=e),va=e=>{ht.length>1?ht.forEach(t=>t(e)):ht[0](e)};const St=e=>{va(e),e.scope.on()},ct=()=>{oe&&oe.scope.off(),va(null)};function Uo(e){return e.vnode.shapeFlag&4}let qt=!1;function Af(e,t=!1){qt=t;const{props:n,children:r}=e.vnode,a=Uo(e);of(e,n,a,t),ff(e,r);const i=a?Ef(e,t):void 0;return qt=!1,i}function Ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=mo(new Proxy(e.ctx,ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Sf(e):null;St(e),Mt();const i=Xe(r,e,0,[e.props,a]);if(It(),ct(),Vi(i)){if(i.then(ct,ct),t)return i.then(o=>{si(e,o,t)}).catch(o=>{qn(o,e,0)});e.asyncDep=i}else si(e,i,t)}else Ho(e,t)}function si(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=po(t)),Ho(e,n)}let li;function Ho(e,t,n){const r=e.type;if(!e.render){if(!t&&li&&!r.render){const a=r.template||pa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ee(ee({isCustomElement:i,delimiters:s},o),l);r.render=li(a,f)}}e.render=r.render||Ee}St(e),Mt(),Jl(e),It(),ct()}function Cf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function Sf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Cf(e)},slots:e.slots,emit:e.emit,expose:t}}function ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(mo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zt)return zt[n](e)},has(t,n){return n in t||n in zt}}))}function kf(e){return R(e)&&"__vccOpts"in e}const Ge=(e,t)=>yl(e,t,qt);function Of(e,t,n){const r=arguments.length;return r===2?X(t)&&!F(t)?zn(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zn(n)&&(n=[n]),me(e,t,n))}const Mf=Symbol.for("v-scx"),If=()=>Pn(Mf),Pf="3.3.4",Nf="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,fi=it&&it.createElement("template"),Df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(Nf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{fi.innerHTML=r?`<svg>${e}</svg>`:e;const s=fi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ff(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Rf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Lr(r,i,"");for(const i in n)Lr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ci=/\s*!important$/;function Lr(e,t,n){if(F(n))n.forEach(r=>Lr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Lf(e,t);ci.test(n)?e.setProperty(Ot(r),n.replace(ci,""),"important"):e[r]=n}}const ui=["Webkit","Moz","ms"],pr={};function Lf(e,t){const n=pr[t];if(n)return n;let r=At(t);if(r!=="filter"&&r in e)return pr[t]=r;r=Ji(r);for(let a=0;a<ui.length;a++){const i=ui[a]+r;if(i in e)return pr[t]=i}return t}const di="http://www.w3.org/1999/xlink";function jf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(di,t.slice(6,t.length)):e.setAttributeNS(di,t,n);else{const i=js(t);n==null||i&&!Zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Zi(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Hf(e,t,n,r){e.addEventListener(t,n,r)}function zf(e,t,n,r){e.removeEventListener(t,n,r)}function $f(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Yf(t);if(r){const f=i[t]=Kf(r,a);Hf(e,s,f,l)}else o&&(zf(e,s,o,l),i[t]=void 0)}}const mi=/(?:Once|Passive|Capture)$/;function Yf(e){let t;if(mi.test(e)){t={};let r;for(;r=e.match(mi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ot(e.slice(2)),t]}let hr=0;const Bf=Promise.resolve(),Wf=()=>hr||(Bf.then(()=>hr=0),hr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Gf(r,n.value),t,5,[r])};return n.value=e,n.attached=Wf(),n}function Gf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const pi=/^on[a-z]/,Vf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Ff(e,r,a):t==="style"?Rf(e,n,r):Kn(t)?Zr(t)||$f(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xf(e,t,r,a))?Uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jf(e,t,r,a))};function Xf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&pi.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pi.test(t)&&te(n)?!1:t in e}const qf=ee({patchProp:Vf},Df);let hi;function Jf(){return hi||(hi=uf(qf))}const cp=(...e)=>{const t=Jf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Zf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Zf(e){return te(e)?document.querySelector(e):e}function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function Qf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ec(e,t,n){return t&&vi(e.prototype,t),n&&vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ya(e,t){return nc(e)||ac(e,t)||zo(e,t)||oc()}function rn(e){return tc(e)||rc(e)||zo(e)||ic()}function tc(e){if(Array.isArray(e))return jr(e)}function nc(e){if(Array.isArray(e))return e}function rc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ac(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zo(e,t){if(e){if(typeof e=="string")return jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(e,t)}}function jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ic(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},_a={},$o={},Yo=null,Bo={mark:bi,measure:bi};try{typeof window<"u"&&(_a=window),typeof document<"u"&&($o=document),typeof MutationObserver<"u"&&(Yo=MutationObserver),typeof performance<"u"&&(Bo=performance)}catch{}var sc=_a.navigator||{},yi=sc.userAgent,_i=yi===void 0?"":yi,Je=_a,G=$o,Ti=Yo,bn=Bo;Je.document;var Ye=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Wo=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),yn,_n,Tn,xn,wn,Ue="___FONT_AWESOME___",Ur=16,Ko="fa",Go="svg-inline--fa",ut="data-fa-i2svg",Hr="data-fa-pseudo-element",lc="data-fa-pseudo-element-pending",Ta="data-prefix",xa="data-icon",xi="fontawesome-i2svg",fc="async",cc=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",wa=[K,J];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Jt=an((yn={},Q(yn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Q(yn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yn)),Zt=an((_n={},Q(_n,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Q(_n,J,{solid:"fass",regular:"fasr",light:"fasl"}),_n)),Qt=an((Tn={},Q(Tn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Q(Tn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),uc=an((xn={},Q(xn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Q(xn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),dc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Xo="fa-layers-text",mc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pc=an((wn={},Q(wn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Q(wn,J,{900:"fass",400:"fasr",300:"fasl"}),wn)),qo=[1,2,3,4,5,6,7,8,9,10],hc=qo.concat([11,12,13,14,15,16,17,18,19,20]),gc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Zt[K]).map(en.add.bind(en));Object.keys(Zt[J]).map(en.add.bind(en));var vc=[].concat(wa,rn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(qo.map(function(e){return"".concat(e,"x")})).concat(hc.map(function(e){return"w-".concat(e)})),Bt=Je.FontAwesomeConfig||{};function bc(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var _c=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_c.forEach(function(e){var t=ya(e,2),n=t[0],r=t[1],a=yc(bc(n));a!=null&&(Bt[r]=a)})}var Jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ko,replacementClass:Go,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var kt=C(C({},Jo),Bt);kt.autoReplaceSvg||(kt.observeMutations=!1);var k={};Object.keys(Jo).forEach(function(e){Object.defineProperty(k,e,{enumerable:!0,set:function(n){kt[e]=n,Wt.forEach(function(r){return r(k)})},get:function(){return kt[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(t){kt.cssPrefix=t,Wt.forEach(function(n){return n(k)})},get:function(){return kt.cssPrefix}});Je.FontAwesomeConfig=k;var Wt=[];function Tc(e){return Wt.push(e),function(){Wt.splice(Wt.indexOf(e),1)}}var We=Ur,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xc(e){if(!(!e||!Ye)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(t,r),e}}var wc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=wc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Aa(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ac(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zo(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ea(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Ec(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Cc(e){var t=e.transform,n=e.width,r=n===void 0?Ur:n,a=e.height,i=a===void 0?Ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Wo?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qo(){var e=Ko,t=Go,n=k.cssPrefix,r=k.replacementClass,a=Sc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var wi=!1;function gr(){k.autoAddCss&&!wi&&(xc(Qo()),wi=!0)}var kc={mixout:function(){return{dom:{css:Qo,insertCss:gr}}},hooks:function(){return{beforeDOMElementCreation:function(){gr()},beforeI2svg:function(){gr()}}}},He=Je||{};He[Ue]||(He[Ue]={});He[Ue].styles||(He[Ue].styles={});He[Ue].hooks||(He[Ue].hooks={});He[Ue].shims||(He[Ue].shims=[]);var Ae=He[Ue],es=[],Oc=function e(){G.removeEventListener("DOMContentLoaded",e),Yn=1,es.map(function(t){return t()})},Yn=!1;Ye&&(Yn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Yn||G.addEventListener("DOMContentLoaded",Oc));function Mc(e){Ye&&(Yn?setTimeout(e,0):es.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Zo(e):"<".concat(t," ").concat(Ac(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function Ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ic=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},vr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ic(n,a):n,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=s(d,t[f],f,t);return d};function Pc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zr(e){var t=Pc(e);return t.length===1?t[0].toString(16):null}function Nc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function $r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ei(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,Ei(t)):Ae.styles[e]=C(C({},Ae.styles[e]||{}),i),e==="fas"&&$r("fa",t)}var An,En,Cn,vt=Ae.styles,Dc=Ae.shims,Fc=(An={},Q(An,K,Object.values(Qt[K])),Q(An,J,Object.values(Qt[J])),An),Ca=null,ts={},ns={},rs={},as={},is={},Rc=(En={},Q(En,K,Object.keys(Jt[K])),Q(En,J,Object.keys(Jt[J])),En);function Lc(e){return~vc.indexOf(e)}function jc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Lc(a)?a:null}var os=function(){var t=function(i){return vr(vt,function(o,s,l){return o[l]=vr(s,i,{}),o},{})};ts=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ns=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),is=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||k.autoFetchSvg,r=vr(Dc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});rs=r.names,as=r.unicodes,Ca=nr(k.styleDefault,{family:k.familyDefault})};Tc(function(e){Ca=nr(e.styleDefault,{family:k.familyDefault})});os();function Sa(e,t){return(ts[e]||{})[t]}function Uc(e,t){return(ns[e]||{})[t]}function lt(e,t){return(is[e]||{})[t]}function ss(e){return rs[e]||{prefix:null,iconName:null}}function Hc(e){var t=as[e],n=Sa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return Ca}var ka=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Jt[r][e],i=Zt[r][e]||Zt[r][a],o=e in Ae.styles?e:null;return i||o||null}var Ci=(Cn={},Q(Cn,K,Object.keys(Qt[K])),Q(Cn,J,Object.keys(Qt[J])),Cn);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Q(t,K,"".concat(k.cssPrefix,"-").concat(K)),Q(t,J,"".concat(k.cssPrefix,"-").concat(J)),t),o=null,s=K;(e.includes(i[K])||e.some(function(f){return Ci[K].includes(f)}))&&(s=K),(e.includes(i[J])||e.some(function(f){return Ci[J].includes(f)}))&&(s=J);var l=e.reduce(function(f,d){var m=jc(k.cssPrefix,d);if(vt[d]?(d=Fc[s].includes(d)?uc[s][d]:d,o=d,f.prefix=d):Rc[s].indexOf(d)>-1?(o=d,f.prefix=nr(d,{family:s})):m?f.iconName=m:d!==k.replacementClass&&d!==i[K]&&d!==i[J]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var v=o==="fa"?ss(f.iconName):{},x=lt(f.prefix,f.iconName);v.prefix&&(o=null),f.iconName=v.iconName||x||f.iconName,f.prefix=v.prefix||f.prefix,f.prefix==="far"&&!vt.far&&vt.fas&&!k.autoFetchSvg&&(f.prefix="fas")}return f},ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(vt.fass||k.autoFetchSvg)&&(l.prefix="fass",l.iconName=lt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var zc=function(){function e(){Qf(this,e),this.definitions={}}return ec(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),$r(s,o[s]);var l=Qt[K][s];l&&$r(l,o[s]),os()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Si=[],bt={},wt={},$c=Object.keys(wt);function Yc(e,t){var n=t.mixoutsTo;return Si=e,bt={},Object.keys(wt).forEach(function(r){$c.indexOf(r)===-1&&delete wt[r]}),Si.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Br(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=lt(n,t)||t,Ai(ls.definitions,n,t)||Ai(Ae.styles,n,t)}var ls=new zc,Bc=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,dt("noAuto")},Wc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(dt("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Mc(function(){Gc({autoReplaceSvgRoot:n}),dt("watch",t)})}},Kc={icon:function(t){if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:lt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:lt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(k.cssPrefix,"-"))>-1||t.match(dc))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:lt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:lt(i,t)||t}}}},ge={noAuto:Bc,config:k,dom:Wc,parse:Kc,library:ls,findIconDefinition:Br,toHtml:on},Gc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Ae.styles).length>0||k.autoFetchSvg)&&Ye&&k.autoReplaceSvg&&ge.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ea(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=tr(C(C({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Xc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,x=v===void 0?!1:v,L=r.found?r:n,P=L.width,U=L.height,w=a==="fak",E=[k.replacementClass,i?"".concat(k.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),N={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(U)})},O=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/U*16*.0625,"em")}:{};x&&(N.attributes[ut]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete N.attributes.title);var $=C(C({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:C(C({},O),m.styles)}),re=r.found&&n.found?ze("generateAbstractMask",$)||{children:[],attributes:{}}:ze("generateAbstractIcon",$)||{children:[],attributes:{}},ae=re.children,be=re.attributes;return $.children=ae,$.attributes=be,s?Xc($):Vc($)}function ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ut]="");var d=C({},o.styles);Ea(a)&&(d.transform=Cc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=tr(d);m.length>0&&(f.style=m);var v=[];return v.push({tag:"span",attributes:f,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function qc(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var br=Ae.styles;function Wr(e){var t=e[0],n=e[1],r=e.slice(4),a=ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Jc={found:!1,width:512,height:512};function Zc(e,t){!Vo&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Kr(e,t){var n=t;return t==="fa"&&k.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=ss(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&br[t]&&br[t][e]){var o=br[t][e];return r(Wr(o))}Zc(e,t),r(C(C({},Jc),{},{icon:k.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var Oi=function(){},Gr=k.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Oi,measure:Oi},Ut='FA "6.4.2"',Qc=function(t){return Gr.mark("".concat(Ut," ").concat(t," begins")),function(){return fs(t)}},fs=function(t){Gr.mark("".concat(Ut," ").concat(t," ends")),Gr.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},Ma={begin:Qc,end:fs},Dn=function(){};function Mi(e){var t=e.getAttribute?e.getAttribute(ut):null;return typeof t=="string"}function eu(e){var t=e.getAttribute?e.getAttribute(Ta):null,n=e.getAttribute?e.getAttribute(xa):null;return t&&n}function tu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function nu(){if(k.autoReplaceSvg===!0)return Fn.replace;var e=Fn[k.autoReplaceSvg];return e||Fn.replace}function ru(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function au(e){return G.createElement(e)}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ru:au:n;if(typeof e=="string")return G.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cs(o,{ceFn:r}))}),a}function iu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cs(a),n)}),n.getAttribute(ut)===null&&k.keepOriginalSource){var r=G.createComment(iu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Aa(n).indexOf(k.replacementClass))return Fn.replace(t);var a=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===k.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(ut,""),n.innerHTML=o}};function Ii(e){e()}function us(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Ii;k.mutateApproach===fc&&(r=Je.requestAnimationFrame||Ii),r(function(){var a=nu(),i=Ma.begin("mutate");e.map(a),i(),n()})}}var Ia=!1;function ds(){Ia=!0}function Vr(){Ia=!1}var Bn=null;function Pi(e){if(Ti&&k.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?G:s;Bn=new Ti(function(f){if(!Ia){var d=Ze();Pt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Mi(m.addedNodes[0])&&(k.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&k.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Mi(m.target)&&~gc.indexOf(m.attributeName))if(m.attributeName==="class"&&eu(m.target)){var v=rr(Aa(m.target)),x=v.prefix,L=v.iconName;m.target.setAttribute(Ta,x||d),L&&m.target.setAttribute(xa,L)}else tu(m.target)&&a(m.target)})}}),Ye&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ou(){Bn&&Bn.disconnect()}function su(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function lu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(Aa(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Uc(a.prefix,e.innerText)||Sa(a.prefix,zr(e.innerText))),!a.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function fu(e){var t=Pt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function cu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lu(e),r=n.iconName,a=n.prefix,i=n.rest,o=fu(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?su(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var uu=Ae.styles;function ms(e){var t=k.autoReplaceSvg==="nest"?Ni(e,{styleParser:!1}):Ni(e);return~t.extra.classes.indexOf(Xo)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}var Qe=new Set;wa.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Jt[K]).map(Qe.add.bind(Qe));Object.keys(Jt[J]).map(Qe.add.bind(Qe));Qe=rn(Qe);function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(xi,"-").concat(m))},a=function(m){return n.remove("".concat(xi,"-").concat(m))},i=k.autoFetchSvg?Qe:wa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(uu));i.includes("fa")||i.push("fa");var o=[".".concat(Xo,":not([").concat(ut,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ut,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ma.begin("onTree"),f=s.reduce(function(d,m){try{var v=ms(m);v&&d.push(v)}catch(x){Vo||x.name==="MissingIcon"&&console.error(x)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(v){us(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ms(e).then(function(n){n&&us([n],t)})}function mu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Br(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Br(a||{})),e(r,C(C({},n),{},{mask:a}))}}var pu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,d=f===void 0?null:f,m=n.title,v=m===void 0?null:m,x=n.titleId,L=x===void 0?null:x,P=n.classes,U=P===void 0?[]:P,w=n.attributes,E=w===void 0?{}:w,N=n.styles,O=N===void 0?{}:N;if(t){var $=t.prefix,re=t.iconName,ae=t.icon;return ar(C({type:"icon"},t),function(){return dt("beforeDOMElementCreation",{iconDefinition:t,params:n}),k.autoA11y&&(v?E["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(L||tn()):(E["aria-hidden"]="true",E.focusable="false")),Oa({icons:{main:Wr(ae),mask:l?Wr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:re,transform:C(C({},Ne),a),symbol:o,title:v,maskId:d,titleId:L,extra:{attributes:E,styles:O,classes:U}})})}},hu={mixout:function(){return{icon:mu(pu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Di,n.nodeCallback=du,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return Di(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(x,L){Promise.all([Kr(a,s),d.iconName?Kr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var U=ya(P,2),w=U[0],E=U[1];x([n,Oa({icons:{main:w,mask:E},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var f;return Ea(o)&&(f=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},gu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){dt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},vu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ar({type:"counter",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),qc({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},bu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,x=v===void 0?{}:v;return ar({type:"text",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:C(C({},Ne),i),title:s,extra:{attributes:m,styles:x,classes:["".concat(k.cssPrefix,"-layers-text")].concat(rn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Wo){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/f,l=d.height/f}return k.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},yu=new RegExp('"',"ug"),Fi=[1105920,1112319];function _u(e){var t=e.replace(yu,""),n=Nc(t,0),r=n>=Fi[0]&&n<=Fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:zr(a?t[0]:t),isSecondary:r||a}}function Ri(e,t){var n="".concat(lc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Pt(e.children),o=i.filter(function(ae){return ae.getAttribute(Hr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(mc),f=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:K,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[v][l[2].toLowerCase()]:pc[v][f],L=_u(m),P=L.value,U=L.isSecondary,w=l[0].startsWith("FontAwesome"),E=Sa(x,P),N=E;if(w){var O=Hc(P);O.iconName&&O.prefix&&(E=O.iconName,x=O.prefix)}if(E&&!U&&(!o||o.getAttribute(Ta)!==x||o.getAttribute(xa)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var $=cu(),re=$.extra;re.attributes[Hr]=t,Kr(E,x).then(function(ae){var be=Oa(C(C({},$),{},{icons:{main:ae,mask:ka()},prefix:x,iconName:N,extra:re,watchable:!0})),ve=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=be.map(function(De){return on(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Tu(e){return Promise.all([Ri(e,"::before"),Ri(e,"::after")])}function xu(e){return e.parentNode!==document.head&&!~cc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Li(e){if(Ye)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(xu).map(Tu),a=Ma.begin("searchPseudoElements");ds(),Promise.all(r).then(function(){a(),Vr(),t()}).catch(function(){a(),Vr(),n()})})}var wu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Li,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;k.searchPseudoElements&&Li(a)}}},ji=!1,Au={mixout:function(){return{dom:{unwatch:function(){ds(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Pi(Yr("mutationObserverCallbacks",{}))},noAuto:function(){ou()},watch:function(n){var r=n.observeMutationsRoot;ji?Vr():Pi(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ui=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Eu={mixout:function(){return{parse:{transform:function(n){return Ui(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ui(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},x.outer),children:[{tag:"g",attributes:C({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),x.path)}]}]}}}},yr={x:0,y:0,width:"100%",height:"100%"};function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Cu(e){return e.tag==="g"?e.children:[e]}var Su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(o){return o.trim()})):ka();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,d=i.icon,m=o.width,v=o.icon,x=Ec({transform:l,containerWidth:m,iconWidth:f}),L={tag:"rect",attributes:C(C({},yr),{},{fill:"white"})},P=d.children?{children:d.children.map(Hi)}:{},U={tag:"g",attributes:C({},x.inner),children:[Hi(C({tag:d.tag,attributes:C(C({},d.attributes),x.path)},P))]},w={tag:"g",attributes:C({},x.outer),children:[U]},E="mask-".concat(s||tn()),N="clip-".concat(s||tn()),O={tag:"mask",attributes:C(C({},yr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,w]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Cu(v)},O]};return r.push($,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},yr)}),{children:r,attributes:a}}}},ku={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ou={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mu=[kc,hu,gu,vu,bu,wu,Au,Eu,Su,ku,Ou];Yc(Mu,{mixoutsTo:ge});ge.noAuto;ge.config;var Iu=ge.library;ge.dom;var Xr=ge.parse;ge.findIconDefinition;ge.toHtml;var Pu=ge.icon;ge.layer;ge.text;ge.counter;var Nu={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Du={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Fu={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Ru={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Lu={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},ju={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Uu={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Hu={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};const zu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};function zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $u(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Yu(e,t){if(e==null)return{};var n=$u(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ps={exports:{}};(function(e){(function(t){var n=function(w,E,N){if(!f(E)||m(E)||v(E)||x(E)||l(E))return E;var O,$=0,re=0;if(d(E))for(O=[],re=E.length;$<re;$++)O.push(n(w,E[$],N));else{O={};for(var ae in E)Object.prototype.hasOwnProperty.call(E,ae)&&(O[w(ae,N)]=n(w,E[ae],N))}return O},r=function(w,E){E=E||{};var N=E.separator||"_",O=E.split||/(?=[A-Z])/;return w.split(O).join(N)},a=function(w){return L(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var E=a(w);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(w,E){return r(w,E).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},x=function(w){return s.call(w)=="[object Boolean]"},L=function(w){return w=w-0,w===w},P=function(w,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?w:function(O,$){return N(O,w,$)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,E){return n(P(a,E),w)},decamelizeKeys:function(w,E){return n(P(o,E),w,E)},pascalizeKeys:function(w,E){return n(P(i,E),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Bu)})(ps);var Wu=ps.exports,Ku=["class","style"];function Gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return hs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=Vu(d);break;case"style":l.style=Gu(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Yu(n,Ku);return Of(e.tag,Le(Le(Le({},t),{},{class:a.class,style:Le(Le({},a.style),o)},a.attrs),s),r)}var gs=!1;try{gs=!0}catch{}function Xu(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _r(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function qu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function $i(e){if(e&&Wn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xr.icon)return Xr.icon(e);if(e===null)return null;if(Wn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ju=Fl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=Ge(function(){return $i(e.icon)}),a=Ge(function(){return _r("classes",qu(e))}),i=Ge(function(){return _r("transform",typeof e.transform=="string"?Xr.transform(e.transform):e.transform)}),o=Ge(function(){return _r("mask",$i(e.mask))}),s=Ge(function(){return Pu(r.value,Le(Le(Le(Le({},a.value),i.value),o.value),{},{symbol:e.symbol,title:e.title}))});In(s,function(f){if(!f)return Xu("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var l=Ge(function(){return s.value?hs(s.value.abstract[0],{},n):null});return function(){return l.value}}});Iu.add(Hu,ju,Ru,Nu,Du,Fu,Uu,Lu);function Zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Qu(e){e=e.replace(/_/g,"-"),e=e.replace(/[.:][\w-]*$/,"");try{return new Intl.Locale(e).baseName}catch{return"en-US"}}var ed=Qu;const td=ed;let nn;if(typeof navigator<"u"){const e=navigator;nn=Array.isArray(e.languages)?e.languages[0]:e.language}else if(typeof process<"u"){const e={SHELL:"/bin/zsh",npm_command:"run-script",npm_config_userconfig:"/home/ginger/.npmrc",npm_config_cache:"/home/ginger/.npm",I3SOCK:"/run/user/1000/sway-ipc.1000.2201.sock",NODE:"/usr/bin/node",DOTNET_ROOT:"/usr/share/dotnet",XDG_CONFIG_HOME:"/home/ginger/.config/",COLOR:"1",npm_config_local_prefix:"/home/ginger/projects/zoa",npm_config_globalconfig:"/etc/npmrc",XCURSOR_SIZE:"24",EDITOR:"vi",XDG_SEAT:"seat0",PWD:"/home/ginger/projects/zoa",XDG_SESSION_DESKTOP:"sway",LOGNAME:"ginger",XDG_SESSION_TYPE:"wayland",npm_config_init_module:"/home/ginger/.npm-init.js",MOTD_SHOWN:"pam",HOME:"/home/ginger",AUTOJUMP_ERROR_PATH:"/home/ginger/.local/share/autojump/errors.log",LANG:"en_GB.UTF-8",_JAVA_AWT_WM_NONREPARENTING:"1",XDG_CURRENT_DESKTOP:"sway",npm_package_version:"0.3.0",SWAYSOCK:"/run/user/1000/sway-ipc.1000.2201.sock",WAYLAND_DISPLAY:"wayland-1",INIT_CWD:"/home/ginger/projects/zoa",ATOM_HOME:"/home/ginger/.config//.atom",DOTNET_BUNDLE_EXTRACT_BASE_DIR:"/home/ginger/.cache/dotnet_bundle_extract",QT_QPA_PLATFORM:"xcb",npm_lifecycle_script:"vite build",XDG_ACTIVATION_TOKEN:"76e2459ba6a5d3e02724f325b5131952",npm_config_npm_version:"9.8.1",XDG_SESSION_CLASS:"user",PYTHONPATH:":/usr/share/usd/lib/python",TERM:"xterm-256color",npm_package_name:"@nhm-data/zoa",npm_config_prefix:"/usr",USER:"ginger",CUDA_PATH:"/opt/cuda",AUTOJUMP_SOURCED:"1",DISPLAY:":0",npm_lifecycle_event:"build",SHLVL:"1",MOZ_ENABLE_WAYLAND:"1",XDG_VTNR:"1",XDG_SESSION_ID:"3",npm_config_user_agent:"npm/9.8.1 node/v16.20.1 linux x64 workspaces/false",npm_execpath:"/usr/lib/node_modules/npm/bin/npm-cli.js",XDG_RUNTIME_DIR:"/run/user/1000",DEBUGINFOD_URLS:"https://debuginfod.archlinux.org ",npm_package_json:"/home/ginger/projects/zoa/package.json",GREETD_SOCK:"/run/greetd-1078.sock",JOURNAL_STREAM:"8:30198",XDG_DATA_DIRS:"/usr/local/share:/usr/share:/var/lib/snapd/desktop",npm_config_noproxy:"",PATH:"/home/ginger/projects/zoa/node_modules/.bin:/home/ginger/projects/node_modules/.bin:/home/ginger/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/opt/cuda/bin:/opt/cuda/nsight_compute:/opt/cuda/nsight_systems/bin:/home/ginger/.dotnet/tools:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/usr/lib/rustup/bin:/var/lib/snapd/snap/bin:/usr/share/usd/bin:/home/ginger/.local/share/JetBrains/Toolbox/scripts",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"/usr/lib/node_modules/node-gyp/bin/node-gyp.js",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus",npm_config_global_prefix:"/usr",HG:"/usr/bin/hg",MAIL:"/var/spool/mail/ginger",GIO_LAUNCHED_DESKTOP_FILE_PID:"145559",npm_node_execpath:"/usr/bin/node",GIO_LAUNCHED_DESKTOP_FILE:"/home/ginger/.local/share/applications/jetbrains-webstorm.desktop",_:"/home/ginger/projects/zoa/node_modules/.bin/vite",NODE_ENV:"production"};nn=e.LC_ALL||e.LC_MESSAGES||e.LANG||e.LANGUAGE}nn||(nn="en-US");var ir=td(nn);const vs={};for(let e=1;e<100;e++){const t=(e<9?"0":"")+e;vs[t]=e+(e>51?1900:2e3)}var nd=vs;const rd={"Eastern Daylight Time":-240,"Eastern Standard Time":-300,"Central Daylight Time":-300,"Central Standard Time":-360,"Mountain Daylight Time":-360,"Mountain Standard Time":-420,"Pacific Daylight Time":-420,"Pacific Standard Time":-480,ACDT:630,ACST:570,ACT:480,ADT:-180,AEDT:660,AEST:600,AFT:270,AKDT:-480,AKST:-540,AMST:-180,AMT:-240,ART:-180,AST:180,AWDT:540,AWST:480,AZOST:-60,AZT:240,BDT:360,BIOT:360,BIT:-720,BOT:-240,BRST:-120,BRT:-180,BTT:360,CAT:120,CCT:390,CDT:-300,CEDT:120,CEST:120,CET:60,CHADT:825,CHAST:765,CHOT:480,ChST:600,CHUT:600,CIST:-480,CIT:480,CKT:-600,CLST:-180,CLT:-240,COST:-240,COT:-300,CST:-360,CT:480,CVT:-60,CXT:420,DAVT:420,DDUT:600,DFT:60,EASST:-300,EAST:-360,EAT:180,ECT:-300,EDT:-240,EEDT:180,EEST:180,EET:120,EGST:0,EGT:-60,EIT:540,EST:-300,FET:180,FJT:720,FKST:-180,FKT:-240,FNT:-120,GALT:-360,GAMT:-540,GET:240,GFT:-180,GILT:720,GIT:-540,GMT:0,GST:-120,GYT:-240,HADT:-540,HAEC:120,HAST:-600,HKT:480,HMT:300,HOVT:420,HST:-600,IBST:0,ICT:420,IDT:180,IOT:180,IRDT:270,IRKT:480,IRST:210,IST:120,JST:540,KGT:360,KOST:660,KRAT:420,KST:540,LHST:630,LINT:840,MAGT:720,MART:-510,MAWT:300,MDT:-360,MET:60,MEST:120,MHT:720,MIST:660,MIT:-510,MMT:390,MSK:180,MST:-420,MUT:240,MVT:300,MYT:480,NCT:660,NDT:-90,NFT:660,NPT:345,NST:-150,NT:-150,NUT:-660,NZDT:780,NZST:720,OMST:360,ORAT:300,PDT:-420,PET:-300,PETT:720,PGT:600,PHOT:780,PKT:300,PMDT:-120,PMST:-180,PONT:660,PST:-480,PYST:-180,PYT:-240,RET:240,ROTT:-180,SAKT:660,SAMT:240,SAST:120,SBT:660,SCT:240,SGT:480,SLST:330,SRET:660,SRT:-180,SST:480,SYOT:180,TAHT:-600,THA:420,TFT:300,TJT:300,TKT:780,TLT:540,TMT:300,TOT:780,TVT:720,UCT:0,ULAT:480,USZ1:120,UTC:0,UYST:-120,UYT:-180,UZT:300,VET:-240,VLAT:600,VOLT:240,VOST:360,VUT:660,WAKT:720,WAST:120,WAT:60,WEDT:60,WEST:60,WET:0,WIT:420,WST:480,YAKT:540,YEKT:300,Z:0};var Pa=rd;const ad=nd,id=Pa,od={zone:id,year:ad,meridiem:{am:0,pm:12,"a.m.":0,"p.m.":12},month:{january:1,jan:1,february:2,feb:2,march:3,mar:3,april:4,apr:4,may:5,june:6,jun:6,july:7,jul:7,august:8,aug:8,september:9,sep:9,october:10,oct:10,november:11,nov:11,december:12,dec:12},dayname:{sunday:0,sun:0,monday:1,mon:1,tuesday:2,tue:2,wednesday:3,wed:3,thursday:4,thu:4,friday:5,fri:5,saturday:6,sat:6},digit:{}};var sd=od;const ld=Pa,bs={MONTHNAME:"january|february|march|april|may|june|july|august|september|october|november|december|jan\\.?|feb\\.?|mar\\.?|apr\\.?|may\\.?|jun\\.?|jul\\.?|aug\\.?|sep\\.?|oct\\.?|nov\\.?|dec\\.?",DAYNAME:"sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun\\.?|mon\\.?|tue\\.?|wed\\.?|thu\\.?|fri\\.?|sat\\.?",ZONE:"\\(?("+Object.keys(ld).join("|")+")\\)?",MERIDIEM:"[ap]\\.?m?\\.?",ORDINAL:"st|nd|rd|th|\\.",YEAR:"[1-9]\\d{3}|\\d{2}",MONTH:"1[0-2]|0?[1-9]",MONTH2:"1[0-2]|0[1-9]",DAY:"3[01]|[12]\\d|0?[1-9]",DAY2:"3[01]|[12]\\d|0[1-9]",OFFSET:"[+-][01]?\\d?\\:?(?:[0-5]\\d)?",H24:"[01]\\d|2[0-3]",H12:"0?[1-9]|1[012]",MIN:"[0-5]\\d",SEC:"[0-5]\\d|60",MS:"\\d{9}|\\d{6}|\\d{1,3}",SPACE:"[\\s,-]"},fd={...bs,YEAR:"*{4}|*{2}",MONTH:"*{1,2}",MONTH2:"*{2}",DAY:"*{1,2}",DAY2:"*{2}",OFFSET:"[+-]*{1,2}\\:?*{0,2}",H24:"*{2}",H12:"*{1,2}",MIN:"*{2}",SEC:"*{2}",MS:"*{9}|*{6}|*{3}"};var cd={latn:bs,other:fd};const ys={arab:1632,arabext:1776,bali:6992,beng:2534,deva:2406,fullwide:65296,gujr:2790,khmr:6112,knda:3302,laoo:3792,limb:6470,mlym:3430,mong:6160,mymr:4160,orya:2918,tamldec:3046,telu:3174,thai:3664,tibt:3872},_s="[０１２３４５６７８９〇一二三四五六七八九\\d]",qr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,"０":0,"１":1,"２":2,"３":3,"４":4,"５":5,"６":6,"７":7,"８":8,"９":9,"〇":0,一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9},Sn={};function ud(e){if(Sn[e])return Sn[e];if(e==="fullwide"||e==="hanidec")return{group:_s,lookup:{...qr}};const t=ys[e];if(!t)return{group:"\\d",lookup:{...qr}};const n=String.fromCharCode(t),r=String.fromCharCode(t+9),a={};for(let i=0;i<10;i++)a[String.fromCharCode(t+i)]=i;return Sn[e]={group:`[${n}-${r}]`,lookup:a},Sn[e]}var Ts={chineseGroup:_s,defaultLookup:qr,startCodes:ys,buildDigits:ud};const dd=["year","month","day","hour","minute","second","millisecond"];var md=dd;const pd=sd,{latn:hd,other:Tr}=cd,{buildDigits:gd}=Ts,Yi=ir,vd=md,xr={};let bd=class xs{static factory(t=Yi){return xr[t.toLowerCase()]||(xr[t.toLowerCase()]=new xs(t)),xr[t.toLowerCase()]}constructor(t=Yi){this.locale=t,this.lookups={...pd},this.vars={...hd};const n=new Intl.NumberFormat(this.locale);this.numberingSystem=n.resolvedOptions().numberingSystem,this.build()}toInt(t){if(typeof t=="number")return t;if(this.numberingSystem==="latn")return parseInt(t,10);let n="";for(let r=0;r<t.length;r++)n+=String(this.lookups.digit[t[r]]);return parseInt(n,10)}build(){this.numberingSystem!=="latn"&&this.buildNumbers(),/^en/i.test(this.locale)||(this.buildMonthNames(),this.buildDaynames(),this.buildMeridiems())}buildNumbers(){const t=this.numberingSystem,{group:n,lookup:r}=gd(t);this.lookups.digit=r;for(const a in Tr)Tr.hasOwnProperty(a)&&(this.vars[a]=Tr[a].replace(/\*/g,n))}buildMonthNames(){const t={},n={};if(/^fi/i.test(this.locale))"tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu".split("|").forEach((r,a)=>{["","k","kuu","kuuta"].forEach((i,o)=>{const s=o<2?"\\.?":"";t[r+i+s]=!0,n[r+i]=a+1})});else{const r=[],a=s=>s.type==="month";for(let s=0;s<12;s++)r.push(new Date(2017,s,1));const i=["full","long","medium"];for(const s of i){const l=Intl.DateTimeFormat(this.locale,{dateStyle:s});for(let f=0;f<12;f++){let d=l.formatToParts(r[f]).find(a).value.toLowerCase();if(/^ko/i.test(this.locale)&&(d+="월"),s==="medium"){if(/^ar|zh/i.test(this.locale))return;d=d.replace(/\.$/,""),t[`${d}\\.?`]=!0}else t[d]=!0;n[d]=f+1}}const o=Intl.DateTimeFormat(this.locale,{month:"short"});for(let s=0;s<12;s++){let l=o.formatToParts(r[s]).find(a).value.toLowerCase();l=l.replace(/\.$/,""),t[`${l}\\.?`]=!0,n[l]=s+1}}this.vars.MONTHNAME=Object.keys(t).join("|"),this.lookups.month=n}buildDaynames(){const t=[],n=o=>o.type==="weekday";for(let o=0;o<7;o++)t.push(new Date(2017,0,o+1));const r=["long","short"],a=[],i={};for(const o of r){const s=Intl.DateTimeFormat(this.locale,{weekday:o});for(let l=0;l<7;l++){let f=s.formatToParts(t[l]).find(n).value.toLowerCase();o==="short"?(f=f.replace(/\.$/,""),a.push(`${f}\\.?`)):a.push(f),i[f]=l}}this.vars.DAYNAME=a.join("|"),this.lookups.dayname=i}buildMeridiems(){const t=[new Date(2017,0,1),new Date(2017,0,1,23,0,0)],n=o=>o.type==="dayPeriod",r=[],a={},i=Intl.DateTimeFormat(this.locale,{timeStyle:"long"});for(let o=0;o<2;o++){const s=i.formatToParts(t[o]).find(n);if(!s)return;const l=s.value.toLowerCase();r.push(l),a[l]=o*12}this.vars.MERIDIEM=r.join("|"),this.lookups.meridiem=a}getObject(t,n){const r={};return t.forEach((a,i)=>{if(!a)return;let o=n[i+1];o=o.toLowerCase(),o=o.replace(/\.$/,""),a==="offset"?r.offset=this.offsetToMinutes(o):this.lookups[a]?r[a]=this.lookups[a][o]||this.toInt(o):r[a]=this.toInt(o)}),r}castObject(t){const n={};return vd.forEach(r=>{r in t&&(n[r]=this.toInt(t[r]))}),typeof t.offset=="string"?n.offset=this.offsetToMinutes(t.offset):typeof t.offset=="number"&&(n.offset=t.offset),n}offsetToMinutes(t){const n=t.match(/^([+-])(..?):?(..)?$/);if(n){const[,r,a,i]=n;return(r==="-"?-1:1)*(this.toInt(a)*60+this.toInt(i||0))}return 0}compile(t){const n=t.replace(/_([A-Z0-9]+)_/g,(r,a)=>{if(!this.vars[a])throw new Error(`Template string contains invalid variable _${a}_`);return this.vars[a]});return new RegExp(n,"i")}};var sn=bd;const Bi=sn,kn=ir;let yd=class{constructor({template:e=null,matcher:t=null,units:n=null,handler:r=null,locales:a=null}){if(!Array.isArray(n)&&typeof r!="function")throw new Error('new Format must receive a "units" array or "handler" function');if(typeof e!="string"&&!(t instanceof RegExp))throw new Error('new Format must receive a "template" string or "matcher" RegExp');this.template=e,this.units=n,this.matcher=t,this.handler=r,this.locales=a,this.regexByLocale={}}getRegExp(e=kn){return this.template?(this.regexByLocale[e]||(this.regexByLocale[e]=Bi.factory(e).compile(this.template)),this.regexByLocale[e]):this.matcher}getMatches(e,t=kn){return e.match(this.getRegExp(t))}toDateTime(e,t=kn){const n=Bi.factory(t);if(this.units)return n.getObject(this.units,e);const r=this.handler(e,t);return!r||r.invalid?r:n.castObject(r)}attempt(e,t=kn){e=String(e).trim();const n=this.getMatches(e,t);if(n){const r=this.toDateTime(n,t);if(r&&!r.invalid)return r}return null}now(){return new Date}};var ne=yd;function _d(e,t){return function(n,r=t){const a=e.attempt(n,r);if(a.invalid)return a;const i=new Date(2e3,0,1);return typeof a.day=="number"&&i.setUTCDate(a.day),typeof a.year=="number"&&i.setUTCFullYear(a.year),typeof a.month=="number"&&i.setUTCMonth(a.month-1),i.setUTCHours(a.hour||0),i.setUTCMinutes(a.minute||0),i.setUTCSeconds(a.second||0),i.setUTCMilliseconds(a.millisecond||0),typeof a.offset=="number"?new Date(i-a.offset*60*1e3):i}}var Td=_d;function xd(e){return function(t,n){return t instanceof Date?t:typeof t=="number"?new Date(t):e(t,n)}}var wd=xd;const wr=ir,Wi=Td,Ad=wd;let Ed=class{constructor(){this.formats=[]}addFormat(e){return this.formats.push(e),e.parser=this,this}addFormats(e){return e.forEach(t=>this.addFormat(t)),this}removeFormat(e){const t=this.formats.indexOf(e);if(t>-1){const n=this.formats[t];return this.formats.splice(t,1),n.parser=null,!0}return!1}attempt(e,t=wr){for(const r of this.formats){if(Array.isArray(r.locales)&&r.locales.length>0&&!r.locales.includes(new Intl.Locale(t).baseName))continue;const a=r.attempt(e,t);if(a)return a}let n=String(e).slice(0,200);return n===""&&(n="empty string"),{invalid:`Unable to parse ${n}`}}exportAsFunction(e=wr){return Wi(this,e)}exportAsFunctionAny(e=wr){return Ad(Wi(this,e))}};var Cd=Ed;const Sd=ne,kd=new Sd({template:"^@(\\d+)$",handler:function(e){const t=parseInt(e[1],10),n=new Date(t*1e3);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds()}}});var Od=kd;const Md=ne,Id=new Md({matcher:/^\/Date\((\d+)([+-]\d{4})?\)\/$/,handler:function(e){const t=parseInt(e[1],10),n=new Date(t);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds(),offset:e[2]||0}}});var Pd=Id;const Nd={y:"year",M:"month",d:"day",w:"week",h:"hour",m:"minute",s:"second",ms:"millisecond"};var Dd=Nd;const Fd=ne,Rd=Dd,Ld=new Fd({matcher:/^(\+|-|in|) ?([\d.]+) ?(years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|ms|s|m|h|w|d|M|y)( ago)?$/i,handler:function([,e,t,n,r]){t=parseFloat(t),n.length<=2?n=Rd[n]:(n=n.replace(/s$/,""),n=n.toLowerCase()),n==="week"&&(n="day",t*=7),(e==="-"||r)&&(t*=-1);const a=this.now();return n==="millisecond"?a.setUTCMilliseconds(a.getUTCMilliseconds()+t):n==="second"?a.setUTCSeconds(a.getUTCSeconds()+t):n==="minute"?a.setUTCMinutes(a.getUTCMinutes()+t):n==="hour"?a.setUTCHours(a.getUTCHours()+t):n==="day"?a.setUTCDate(a.getUTCDate()+t):n==="month"?a.setUTCMonth(a.getUTCMonth()+t):n==="year"&&a.setUTCFullYear(a.getUTCFullYear()+t),{year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate(),hour:a.getUTCHours(),minute:a.getUTCMinutes(),second:a.getUTCSeconds(),millisecond:a.getUTCMilliseconds()}}});var jd=Ld;const Ud=ne,Hd=sn,{chineseGroup:On}=Ts;let Rt;const zd=new Ud({template:`^(${On}{4}|${On}{2})\\s*年\\s*(${On}{1,2})\\s*月\\s*(${On}{1,2})\\s*日$`,handler:function([,e,t,n]){return Rt||(Rt=new Hd("zh"),Rt.numberingSystem="hanidec",Rt.buildNumbers()),Rt.castObject({year:e,month:t,day:n})}});var $d=zd;const Yd=ne,Bd=new Yd({template:"^(_DAY_)[\\/. ](_MONTH_)$",units:["day","month"]});var Wd=Bd;const Kd=ne,Gd=new Kd({template:"^(_DAY_)(?:_ORDINAL_)?[ -](_MONTHNAME_)$",units:["day","month"]});var Vd=Gd;const Xd=ne,qd=new Xd({template:"^(?:(?:_DAYNAME_),? )?(_DAY_)(?:_ORDINAL_)?([ -])(_MONTHNAME_)\\2(_YEAR_)$",units:["day",null,"month","year"]});var Jd=qd;const Zd=ne,Qd=new Zd({template:"^(_DAY_)([\\/. -])(_MONTH_)\\2(_YEAR_)$",units:["day",null,"month","year"]});var em=Qd;const tm=ne,nm=new tm({template:"^(_MONTH_)(?:[\\/-])(_DAY_)$",units:["month","day"]});var rm=nm;const am=ne,im=new am({template:"^(_MONTH_)([\\/-])(_DAY_)\\2(_YEAR_)$",units:["month",null,"day","year"],locales:["ee-TG","en-AS","en-CA","en-FM","en-GH","en-GU","en-KE","en-KY","en-MH","en-MP","en-US","en-VI","en-WS","sm-AS","sm-SM"]});var om=im;const sm=ne,lm=new sm({template:"^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?$",units:["month","day"]});var fm=lm;const cm=ne,um=new cm({template:"^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?,? (_YEAR_)$",units:["month","day","year"]});var dm=um;const mm=sn,pm=ne,hm=new pm({template:"^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H12_|_H24_)(?:\\:(_MIN_)(?:\\:(_SEC_))?)?_SPACE_*(_MERIDIEM_)$",handler:function(e,t){let[,n,r,a,i,o]=e,s={};if(n&&(s=this.parser.attempt(n,t),s.invalid))return null;const l=mm.factory(t);if(o){const f=l.lookups.meridiem[o.toLowerCase()]||0;r=parseFloat(r),r===12?r=f:r>12&&f===12?r+=0:r+=f}return s.hour=r,a&&(s.minute=a),i&&(s.second=i),s}});var gm=hm;const vm=sn,bm=ne,Ki=Pa,ym=new bm({template:"^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H24_)\\:(_MIN_)(?:\\:(_SEC_)(?:[\\.,](_MS_))?)?_SPACE_*(?:GMT)?_SPACE_*(_OFFSET_)?_SPACE_*(_ZONE_)?$",handler:function(e,t){let[,n,r,a,i,o,s,l]=e,f={};if(n&&(f=this.parser.attempt(n,t),f.invalid))return f;if(f.hour=r,f.minute=a,i&&(f.second=i),o&&o.length>3?f.millisecond=o.slice(0,3):o&&(f.millisecond=o),l&&!s&&l in Ki)f.offset=Ki[l];else if(s){const d=vm.factory(t);f.offset=d.offsetToMinutes(s)}return f}});var _m=ym;const Tm=ne,xm=new Tm({matcher:/^(now|today|tomorrow|yesterday)/i,handler:function(e){const t=this.now(),n=e[1].toLowerCase();switch(n){case"tomorrow":t.setUTCDate(t.getUTCDate()+1);break;case"yesterday":t.setUTCDate(t.getUTCDate()-1);break}const r={year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate()};return n==="now"&&(r.hour=t.getUTCHours(),r.minute=t.getUTCMinutes(),r.second=t.getUTCSeconds(),r.millisecond=t.getUTCMilliseconds()),r}});var wm=xm;const Am=ne,Em=new Am({template:"^(?:_DAYNAME_) (_MONTHNAME_) (_DAY_) (_H24_):(_MIN_):(_SEC_) (_OFFSET_) (_YEAR_)$",units:["month","day","hour","minute","second","offset","year"]});var Cm=Em;const Sm=ne,km=new Sm({template:"^(_YEAR_)(-?)(_MONTH_)\\2(_DAY_)$",units:["year",null,"month","day"]});var Om=km;const ws=Cd,Mm=ne,Im=sn,Pm=Od,Nm=Pd,Dm=jd,Fm=$d,Rm=Wd,Lm=Vd,jm=Jd,Um=em,Hm=ir,zm=rm,$m=om,Ym=fm,Bm=dm,Wm=gm,Km=_m,Gm=wm,Vm=Cm,Xm=Om,Se=new ws;Se.addFormats([Km,Wm,Xm,jm,Bm,$m,Um,Fm,Vm,Gm,Dm,Ym,Lm,zm,Rm,Pm,Nm]);Se.Parser=ws;Se.Format=Mm;Se.LocaleHelper=Im;Se.defaultLocale=Hm;Se.fromString=Date.fromString=Se.exportAsFunction();Se.fromAny=Date.fromAny=Se.exportAsFunctionAny();typeof window<"u"&&(window.anyDateParser=Se);var Na=Se,qm={__locale:"en",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviated_days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviated_months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],am:"AM",pm:"PM"},Jm=qm;const Zm=Zu(Jm);new RegExp(`(${Zm.abbreviated_months.map(e=>e.toLowerCase()).join("|")})`);const Qm=new Na.Format({matcher:/^'?(\d{2}|\d{4})$/,units:["year"]}),ep=new Na.Format({matcher:/^(\d{1,2})\D*'?(\d{2}|\d{4})$/,units:["month","year"]}),tp=new Na.Parser;tp.addFormats([Qm,ep]);function np(e){return{icon:Ge(()=>{switch(e.kind){case"info":return"fa-circle-info";case"warning":return"fa-circle-exclamation";case"error":return"fa-circle-xmark";case"success":return"fa-circle-check";default:return"fa-circle-question"}})}}const rp="zoa__VAeTu__main",ap="zoa__fVs2o__container",ip="zoa__THVXY__header",op="zoa__paVgB__icon",sp={main:rp,container:ap,header:ip,icon:op,"kind--info":"zoa__ITcbz__kind--info","kind--warning":"zoa__ePWkZ__kind--warning","kind--error":"zoa__uCNxg__kind--error","kind--success":"zoa__QTxj6__kind--success"},lp={__name:"Flash",props:{kind:{type:String,default:"info"},header:{type:String,default:"Here is an informational message."},message:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."}},setup(e){const t=e,{icon:n}=np(t);return(r,a)=>(Fo(),gf("div",{class:ot([r.$style.main,r.$style.container,r.$style[`kind--${e.kind}`]])},[Yt("div",{class:ot(r.$style.header)},[me(Mr(Ju),{icon:["fa-solid",Mr(n)],class:ot(r.$style.icon)},null,8,["icon","class"]),Yt("h2",null,za(e.header),1)],2),Yt("div",{class:ot(r.$style.content)},[Xl(r.$slots,"default",{},()=>[jo(za(e.message),1)])],2)],2))}},fp={$style:sp},up=zu(lp,[["__cssModules",fp]]);export{up as C,cp as a,vf as c,Fo as o,Mr as u};
