var __omnimuxWorkflowCanvas=(()=>{var rN=Object.create;var vc=Object.defineProperty;var iN=Object.getOwnPropertyDescriptor;var lN=Object.getOwnPropertyNames;var sN=Object.getPrototypeOf,dN=Object.prototype.hasOwnProperty;var Ma=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},uN=(e,t)=>{for(var a in t)vc(e,a,{get:t[a],enumerable:!0})},v0=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of lN(t))!dN.call(e,n)&&n!==a&&vc(e,n,{get:()=>t[n],enumerable:!(o=iN(t,n))||o.enumerable});return e};var E=(e,t,a)=>(a=e!=null?rN(sN(e)):{},v0(t||!e||!e.__esModule?vc(a,"default",{value:e,enumerable:!0}):a,e)),cN=e=>v0(vc({},"__esModule",{value:!0}),e);var T0=Ma(rt=>{"use strict";function Gm(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<Cc(n,t))e[o]=t,e[a]=n,a=o;else break e}}function tn(e){return e.length===0?null:e[0]}function Lc(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,l=e[i],s=i+1,u=e[s];if(0>Cc(l,a))s<n&&0>Cc(u,l)?(e[o]=u,e[s]=a,o=s):(e[o]=l,e[i]=a,o=i);else if(s<n&&0>Cc(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function Cc(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}rt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(C0=performance,rt.unstable_now=function(){return C0.now()}):(Um=Date,S0=Um.now(),rt.unstable_now=function(){return Um.now()-S0});var C0,Um,S0,kn=[],ur=[],fN=1,mo=null,ia=3,jm=!1,Ws=!1,Ks=!1,Xm=!1,_0=typeof setTimeout=="function"?setTimeout:null,I0=typeof clearTimeout=="function"?clearTimeout:null,L0=typeof setImmediate<"u"?setImmediate:null;function Sc(e){for(var t=tn(ur);t!==null;){if(t.callback===null)Lc(ur);else if(t.startTime<=e)Lc(ur),t.sortIndex=t.expirationTime,Gm(kn,t);else break;t=tn(ur)}}function Ym(e){if(Ks=!1,Sc(e),!Ws)if(tn(kn)!==null)Ws=!0,bl||(bl=!0,xl());else{var t=tn(ur);t!==null&&Zm(Ym,t.startTime-e)}}var bl=!1,$s=-1,M0=5,N0=-1;function E0(){return Xm?!0:!(rt.unstable_now()-N0<M0)}function qm(){if(Xm=!1,bl){var e=rt.unstable_now();N0=e;var t=!0;try{e:{Ws=!1,Ks&&(Ks=!1,I0($s),$s=-1),jm=!0;var a=ia;try{t:{for(Sc(e),mo=tn(kn);mo!==null&&!(mo.expirationTime>e&&E0());){var o=mo.callback;if(typeof o=="function"){mo.callback=null,ia=mo.priorityLevel;var n=o(mo.expirationTime<=e);if(e=rt.unstable_now(),typeof n=="function"){mo.callback=n,Sc(e),t=!0;break t}mo===tn(kn)&&Lc(kn),Sc(e)}else Lc(kn);mo=tn(kn)}if(mo!==null)t=!0;else{var r=tn(ur);r!==null&&Zm(Ym,r.startTime-e),t=!1}}break e}finally{mo=null,ia=a,jm=!1}t=void 0}}finally{t?xl():bl=!1}}}var xl;typeof L0=="function"?xl=function(){L0(qm)}:typeof MessageChannel<"u"?(Vm=new MessageChannel,k0=Vm.port2,Vm.port1.onmessage=qm,xl=function(){k0.postMessage(null)}):xl=function(){_0(qm,0)};var Vm,k0;function Zm(e,t){$s=_0(function(){e(rt.unstable_now())},t)}rt.unstable_IdlePriority=5;rt.unstable_ImmediatePriority=1;rt.unstable_LowPriority=4;rt.unstable_NormalPriority=3;rt.unstable_Profiling=null;rt.unstable_UserBlockingPriority=2;rt.unstable_cancelCallback=function(e){e.callback=null};rt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M0=0<e?Math.floor(1e3/e):5};rt.unstable_getCurrentPriorityLevel=function(){return ia};rt.unstable_next=function(e){switch(ia){case 1:case 2:case 3:var t=3;break;default:t=ia}var a=ia;ia=t;try{return e()}finally{ia=a}};rt.unstable_requestPaint=function(){Xm=!0};rt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ia;ia=e;try{return t()}finally{ia=a}};rt.unstable_scheduleCallback=function(e,t,a){var o=rt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:fN++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Gm(ur,e),tn(kn)===null&&e===tn(ur)&&(Ks?(I0($s),$s=-1):Ks=!0,Zm(Ym,a-o))):(e.sortIndex=n,Gm(kn,e),Ws||jm||(Ws=!0,bl||(bl=!0,xl()))),e};rt.unstable_shouldYield=E0;rt.unstable_wrapCallback=function(e){var t=ia;return function(){var a=ia;ia=t;try{return e.apply(this,arguments)}finally{ia=a}}}});var D0=Ma((rO,A0)=>{"use strict";A0.exports=T0()});var G0=Ma(he=>{"use strict";var $m=Symbol.for("react.transitional.element"),pN=Symbol.for("react.portal"),mN=Symbol.for("react.fragment"),gN=Symbol.for("react.strict_mode"),hN=Symbol.for("react.profiler"),xN=Symbol.for("react.consumer"),bN=Symbol.for("react.context"),wN=Symbol.for("react.forward_ref"),yN=Symbol.for("react.suspense"),vN=Symbol.for("react.memo"),B0=Symbol.for("react.lazy"),CN=Symbol.for("react.activity"),R0=Symbol.iterator;function SN(e){return e===null||typeof e!="object"?null:(e=R0&&e[R0]||e["@@iterator"],typeof e=="function"?e:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,U0={};function yl(e,t,a){this.props=e,this.context=t,this.refs=U0,this.updater=a||H0}yl.prototype.isReactComponent={};yl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function q0(){}q0.prototype=yl.prototype;function Qm(e,t,a){this.props=e,this.context=t,this.refs=U0,this.updater=a||H0}var Jm=Qm.prototype=new q0;Jm.constructor=Qm;F0(Jm,yl.prototype);Jm.isPureReactComponent=!0;var P0=Array.isArray;function Km(){}var et={H:null,A:null,T:null,S:null},V0=Object.prototype.hasOwnProperty;function eg(e,t,a){var o=a.ref;return{$$typeof:$m,type:e,key:t,ref:o!==void 0?o:null,props:a}}function LN(e,t){return eg(e.type,t,e.props)}function tg(e){return typeof e=="object"&&e!==null&&e.$$typeof===$m}function kN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var z0=/\/+/g;function Wm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kN(""+e.key):t.toString(36)}function _N(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Km,Km):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function wl(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case $m:case pN:i=!0;break;case B0:return i=e._init,wl(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+Wm(e,0):o,P0(n)?(a="",i!=null&&(a=i.replace(z0,"$&/")+"/"),wl(n,t,a,"",function(u){return u})):n!=null&&(tg(n)&&(n=LN(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(z0,"$&/")+"/")+i)),t.push(n)),1;i=0;var l=o===""?".":o+":";if(P0(e))for(var s=0;s<e.length;s++)o=e[s],r=l+Wm(o,s),i+=wl(o,t,a,r,n);else if(s=SN(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=l+Wm(o,s++),i+=wl(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return wl(_N(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function kc(e,t,a){if(e==null)return e;var o=[],n=0;return wl(e,o,"","",function(r){return t.call(a,r,n++)}),o}function IN(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},MN={map:kc,forEach:function(e,t,a){kc(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return kc(e,function(){t++}),t},toArray:function(e){return kc(e,function(t){return t})||[]},only:function(e){if(!tg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Activity=CN;he.Children=MN;he.Component=yl;he.Fragment=mN;he.Profiler=hN;he.PureComponent=Qm;he.StrictMode=gN;he.Suspense=yN;he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=et;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return et.H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cacheSignal=function(){return null};he.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=F0({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!V0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),l=0;l<r;l++)i[l]=arguments[l+2];o.children=i}return eg(e.type,n,o)};he.createContext=function(e){return e={$$typeof:bN,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:xN,_context:e},e};he.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)V0.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return eg(e,r,n)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:wN,render:e}};he.isValidElement=tg;he.lazy=function(e){return{$$typeof:B0,_payload:{_status:-1,_result:e},_init:IN}};he.memo=function(e,t){return{$$typeof:vN,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=et.T,a={};et.T=a;try{var o=e(),n=et.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Km,O0)}catch(r){O0(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),et.T=t}};he.unstable_useCacheRefresh=function(){return et.H.useCacheRefresh()};he.use=function(e){return et.H.use(e)};he.useActionState=function(e,t,a){return et.H.useActionState(e,t,a)};he.useCallback=function(e,t){return et.H.useCallback(e,t)};he.useContext=function(e){return et.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e,t){return et.H.useDeferredValue(e,t)};he.useEffect=function(e,t){return et.H.useEffect(e,t)};he.useEffectEvent=function(e){return et.H.useEffectEvent(e)};he.useId=function(){return et.H.useId()};he.useImperativeHandle=function(e,t,a){return et.H.useImperativeHandle(e,t,a)};he.useInsertionEffect=function(e,t){return et.H.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return et.H.useLayoutEffect(e,t)};he.useMemo=function(e,t){return et.H.useMemo(e,t)};he.useOptimistic=function(e,t){return et.H.useOptimistic(e,t)};he.useReducer=function(e,t,a){return et.H.useReducer(e,t,a)};he.useRef=function(e){return et.H.useRef(e)};he.useState=function(e){return et.H.useState(e)};he.useSyncExternalStore=function(e,t,a){return et.H.useSyncExternalStore(e,t,a)};he.useTransition=function(){return et.H.useTransition()};he.version="19.2.8"});var Q=Ma((lO,j0)=>{"use strict";j0.exports=G0()});var Y0=Ma(pa=>{"use strict";var NN=Q();function X0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cr(){}var fa={d:{f:cr,r:function(){throw Error(X0(522))},D:cr,C:cr,L:cr,m:cr,X:cr,S:cr,M:cr},p:0,findDOMNode:null},EN=Symbol.for("react.portal");function TN(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:EN,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Qs=NN.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _c(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}pa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fa;pa.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(X0(299));return TN(e,t,null,a)};pa.flushSync=function(e){var t=Qs.T,a=fa.p;try{if(Qs.T=null,fa.p=2,e)return e()}finally{Qs.T=t,fa.p=a,fa.d.f()}};pa.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,fa.d.C(e,t))};pa.prefetchDNS=function(e){typeof e=="string"&&fa.d.D(e)};pa.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=_c(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?fa.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&fa.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};pa.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=_c(t.as,t.crossOrigin);fa.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&fa.d.M(e)};pa.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=_c(a,t.crossOrigin);fa.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};pa.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=_c(t.as,t.crossOrigin);fa.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else fa.d.m(e)};pa.requestFormReset=function(e){fa.d.r(e)};pa.unstable_batchedUpdates=function(e,t){return e(t)};pa.useFormState=function(e,t,a){return Qs.H.useFormState(e,t,a)};pa.useFormStatus=function(){return Qs.H.useHostTransitionStatus()};pa.version="19.2.8"});var Bt=Ma((dO,W0)=>{"use strict";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(e){console.error(e)}}Z0(),W0.exports=Y0()});var l2=Ma(Qf=>{"use strict";var Dt=D0(),vy=Q(),AN=Bt();function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bd(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Sy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ly(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function K0(e){if(Bd(e)!==e)throw Error(Y(188))}function DN(e){var t=e.alternate;if(!t){if(t=Bd(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return K0(n),e;if(r===o)return K0(n),t;r=r.sibling}throw Error(Y(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,l=n.child;l;){if(l===a){i=!0,a=n,o=r;break}if(l===o){i=!0,o=n,a=r;break}l=l.sibling}if(!i){for(l=r.child;l;){if(l===a){i=!0,a=r,o=n;break}if(l===o){i=!0,o=r,a=n;break}l=l.sibling}if(!i)throw Error(Y(189))}}if(a.alternate!==o)throw Error(Y(190))}if(a.tag!==3)throw Error(Y(188));return a.stateNode.current===a?e:t}function ky(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ky(e),t!==null)return t;e=e.sibling}return null}var ot=Object.assign,RN=Symbol.for("react.element"),Ic=Symbol.for("react.transitional.element"),id=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),_y=Symbol.for("react.strict_mode"),Pg=Symbol.for("react.profiler"),Iy=Symbol.for("react.consumer"),Dn=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),zg=Symbol.for("react.suspense"),Og=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Bg=Symbol.for("react.activity"),PN=Symbol.for("react.memo_cache_sentinel"),$0=Symbol.iterator;function Js(e){return e===null||typeof e!="object"?null:(e=$0&&e[$0]||e["@@iterator"],typeof e=="function"?e:null)}var zN=Symbol.for("react.client.reference");function Hg(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zN?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _l:return"Fragment";case Pg:return"Profiler";case _y:return"StrictMode";case zg:return"Suspense";case Og:return"SuspenseList";case Bg:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case id:return"Portal";case Dn:return e.displayName||"Context";case Iy:return(e._context.displayName||"Context")+".Consumer";case Eh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Th:return t=e.displayName||null,t!==null?t:Hg(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Hg(e(t))}catch{}}return null}var ld=Array.isArray,ce=vy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pe=AN.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gi={pending:!1,data:null,method:null,action:null},Fg=[],Il=-1;function ln(e){return{current:e}}function Ut(e){0>Il||(e.current=Fg[Il],Fg[Il]=null,Il--)}function We(e,t){Il++,Fg[Il]=e.current,e.current=t}var rn=ln(null),Ld=ln(null),Sr=ln(null),lf=ln(null);function sf(e,t){switch(We(Sr,t),We(Ld,e),We(rn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ny(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ny(t),e=Y1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ut(rn),We(rn,e)}function jl(){Ut(rn),Ut(Ld),Ut(Sr)}function Ug(e){e.memoizedState!==null&&We(lf,e);var t=rn.current,a=Y1(t,e.type);t!==a&&(We(Ld,e),We(rn,a))}function df(e){Ld.current===e&&(Ut(rn),Ut(Ld)),lf.current===e&&(Ut(lf),Pd._currentValue=gi)}var ag,Q0;function ci(e){if(ag===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ag=t&&t[1]||"",Q0=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ag+e+Q0}var og=!1;function ng(e,t){if(!e||og)return"";og=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],l=r[1];if(i&&l){var s=i.split(`
`),u=l.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{og=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ci(a):""}function ON(e,t){switch(e.tag){case 26:case 27:case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return e.child!==t&&t!==null?ci("Suspense Fallback"):ci("Suspense");case 19:return ci("SuspenseList");case 0:case 15:return ng(e.type,!1);case 11:return ng(e.type.render,!1);case 1:return ng(e.type,!0);case 31:return ci("Activity");default:return""}}function J0(e){try{var t="",a=null;do t+=ON(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qg=Object.prototype.hasOwnProperty,Ah=Dt.unstable_scheduleCallback,rg=Dt.unstable_cancelCallback,BN=Dt.unstable_shouldYield,HN=Dt.unstable_requestPaint,Wa=Dt.unstable_now,FN=Dt.unstable_getCurrentPriorityLevel,My=Dt.unstable_ImmediatePriority,Ny=Dt.unstable_UserBlockingPriority,uf=Dt.unstable_NormalPriority,UN=Dt.unstable_LowPriority,Ey=Dt.unstable_IdlePriority,qN=Dt.log,VN=Dt.unstable_setDisableYieldValue,Hd=null,Ka=null;function br(e){if(typeof qN=="function"&&VN(e),Ka&&typeof Ka.setStrictMode=="function")try{Ka.setStrictMode(Hd,e)}catch{}}var $a=Math.clz32?Math.clz32:XN,GN=Math.log,jN=Math.LN2;function XN(e){return e>>>=0,e===0?32:31-(GN(e)/jN|0)|0}var Mc=256,Nc=262144,Ec=4194304;function fi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zf(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=o&134217727;return l!==0?(o=l&~r,o!==0?n=fi(o):(i&=l,i!==0?n=fi(i):a||(a=l&~e,a!==0&&(n=fi(a))))):(l=o&~r,l!==0?n=fi(l):i!==0?n=fi(i):a||(a=o&~e,a!==0&&(n=fi(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Fd(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function YN(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ty(){var e=Ec;return Ec<<=1,(Ec&62914560)===0&&(Ec=4194304),e}function ig(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ud(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ZN(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-$a(a),f=1<<d;l[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&Ay(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function Ay(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-$a(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Dy(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-$a(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function Ry(e,t){var a=t&-t;return a=(a&42)!==0?1:Dh(a),(a&(e.suspendedLanes|t))!==0?0:a}function Dh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Py(){var e=Pe.p;return e!==0?e:(e=window.event,e===void 0?32:n2(e.type))}function ew(e,t){var a=Pe.p;try{return Pe.p=e,t()}finally{Pe.p=a}}var zr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+zr,Ra="__reactProps$"+zr,as="__reactContainer$"+zr,Vg="__reactEvents$"+zr,WN="__reactListeners$"+zr,KN="__reactHandles$"+zr,tw="__reactResources$"+zr,qd="__reactMarker$"+zr;function Ph(e){delete e[Kt],delete e[Ra],delete e[Vg],delete e[WN],delete e[KN]}function Ml(e){var t=e[Kt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[as]||a[Kt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=dy(e);e!==null;){if(a=e[Kt])return a;e=dy(e)}return t}e=a,a=e.parentNode}return null}function os(e){if(e=e[Kt]||e[as]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Bl(e){var t=e[tw];return t||(t=e[tw]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ft(e){e[qd]=!0}var zy=new Set,Oy={};function ki(e,t){Xl(e,t),Xl(e+"Capture",t)}function Xl(e,t){for(Oy[e]=t,e=0;e<t.length;e++)zy.add(t[e])}var $N=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),aw={},ow={};function QN(e){return qg.call(ow,e)?!0:qg.call(aw,e)?!1:$N.test(e)?ow[e]=!0:(aw[e]=!0,!1)}function jc(e,t,a){if(QN(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Tc(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _n(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function ho(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function By(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function JN(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gg(e){if(!e._valueTracker){var t=By(e)?"checked":"value";e._valueTracker=JN(e,t,""+e[t])}}function Hy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=By(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function cf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var e3=/[\n"\\]/g;function wo(e){return e.replace(e3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jg(e,t,a,o,n,r,i,l){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ho(t)):e.value!==""+ho(t)&&(e.value=""+ho(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Xg(e,i,ho(t)):a!=null?Xg(e,i,ho(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+ho(l):e.removeAttribute("name")}function Fy(e,t,a,o,n,r,i,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Gg(e);return}a=a!=null?""+ho(a):"",t=t!=null?""+ho(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=l?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Gg(e)}function Xg(e,t,a){t==="number"&&cf(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ho(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Uy(e,t,a){if(t!=null&&(t=""+ho(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ho(a):""}function qy(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(Y(92));if(ld(o)){if(1<o.length)throw Error(Y(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=ho(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Gg(e)}function Yl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var t3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nw(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||t3.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vy(e,t,a){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&nw(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&nw(e,r,t[r])}function zh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xc(e){return o3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rn(){}var Yg=null;function Oh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,Fl=null;function rw(e){var t=os(e);if(t&&(e=t.stateNode)){var a=e[Ra]||null;e:switch(e=t.stateNode,t.type){case"input":if(jg(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wo(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Ra]||null;if(!n)throw Error(Y(90));jg(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Hy(o)}break e;case"textarea":Uy(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Hl(e,!!a.multiple,t,!1)}}}var lg=!1;function Gy(e,t,a){if(lg)return e(t,a);lg=!0;try{var o=e(t);return o}finally{if(lg=!1,(Nl!==null||Fl!==null)&&(Zf(),Nl&&(t=Nl,e=Fl,Fl=Nl=null,rw(t),e)))for(t=0;t<e.length;t++)rw(e[t])}}function kd(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Ra]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(Y(231,t,typeof a));return a}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zg=!1;if(Hn)try{vl={},Object.defineProperty(vl,"passive",{get:function(){Zg=!0}}),window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,vl)}catch{Zg=!1}var vl,wr=null,Bh=null,Yc=null;function jy(){if(Yc)return Yc;var e,t=Bh,a=t.length,o,n="value"in wr?wr.value:wr.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Yc=n.slice(e,1<o?1-o:void 0)}function Zc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ac(){return!0}function iw(){return!1}function Pa(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ac:iw,this.isPropagationStopped=iw,this}return ot(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),t}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Pa(_i),Vd=ot({},_i,{view:0,detail:0}),n3=Pa(Vd),sg,dg,ed,Bf=ot({},Vd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ed&&(ed&&e.type==="mousemove"?(sg=e.screenX-ed.screenX,dg=e.screenY-ed.screenY):dg=sg=0,ed=e),sg)},movementY:function(e){return"movementY"in e?e.movementY:dg}}),lw=Pa(Bf),r3=ot({},Bf,{dataTransfer:0}),i3=Pa(r3),l3=ot({},Vd,{relatedTarget:0}),ug=Pa(l3),s3=ot({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),d3=Pa(s3),u3=ot({},_i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c3=Pa(u3),f3=ot({},_i,{data:0}),sw=Pa(f3),p3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=g3[e])?!!t[e]:!1}function Hh(){return h3}var x3=ot({},Vd,{key:function(e){if(e.key){var t=p3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(e){return e.type==="keypress"?Zc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b3=Pa(x3),w3=ot({},Bf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dw=Pa(w3),y3=ot({},Vd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),v3=Pa(y3),C3=ot({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),S3=Pa(C3),L3=ot({},Bf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k3=Pa(L3),_3=ot({},_i,{newState:0,oldState:0}),I3=Pa(_3),M3=[9,13,27,32],Fh=Hn&&"CompositionEvent"in window,cd=null;Hn&&"documentMode"in document&&(cd=document.documentMode);var N3=Hn&&"TextEvent"in window&&!cd,Xy=Hn&&(!Fh||cd&&8<cd&&11>=cd),uw=" ",cw=!1;function Yy(e,t){switch(e){case"keyup":return M3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var El=!1;function E3(e,t){switch(e){case"compositionend":return Zy(t);case"keypress":return t.which!==32?null:(cw=!0,uw);case"textInput":return e=t.data,e===uw&&cw?null:e;default:return null}}function T3(e,t){if(El)return e==="compositionend"||!Fh&&Yy(e,t)?(e=jy(),Yc=Bh=wr=null,El=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xy&&t.locale!=="ko"?null:t.data;default:return null}}var A3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A3[e.type]:t==="textarea"}function Wy(e,t,a,o){Nl?Fl?Fl.push(o):Fl=[o]:Nl=o,t=Nf(t,"onChange"),0<t.length&&(a=new Of("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var fd=null,_d=null;function D3(e){G1(e,0)}function Hf(e){var t=sd(e);if(Hy(t))return e}function pw(e,t){if(e==="change")return t}var Ky=!1;Hn&&(Hn?(Rc="oninput"in document,Rc||(cg=document.createElement("div"),cg.setAttribute("oninput","return;"),Rc=typeof cg.oninput=="function"),Dc=Rc):Dc=!1,Ky=Dc&&(!document.documentMode||9<document.documentMode));var Dc,Rc,cg;function mw(){fd&&(fd.detachEvent("onpropertychange",$y),_d=fd=null)}function $y(e){if(e.propertyName==="value"&&Hf(_d)){var t=[];Wy(t,_d,e,Oh(e)),Gy(D3,t)}}function R3(e,t,a){e==="focusin"?(mw(),fd=t,_d=a,fd.attachEvent("onpropertychange",$y)):e==="focusout"&&mw()}function P3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hf(_d)}function z3(e,t){if(e==="click")return Hf(t)}function O3(e,t){if(e==="input"||e==="change")return Hf(t)}function B3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ja=typeof Object.is=="function"?Object.is:B3;function Id(e,t){if(Ja(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!qg.call(t,n)||!Ja(e[n],t[n]))return!1}return!0}function gw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hw(e,t){var a=gw(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gw(a)}}function Qy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=cf(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=cf(e.document)}return t}function Uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var H3=Hn&&"documentMode"in document&&11>=document.documentMode,Tl=null,Wg=null,pd=null,Kg=!1;function xw(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kg||Tl==null||Tl!==cf(o)||(o=Tl,"selectionStart"in o&&Uh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),pd&&Id(pd,o)||(pd=o,o=Nf(Wg,"onSelect"),0<o.length&&(t=new Of("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Tl)))}function ui(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Al={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionrun:ui("Transition","TransitionRun"),transitionstart:ui("Transition","TransitionStart"),transitioncancel:ui("Transition","TransitionCancel"),transitionend:ui("Transition","TransitionEnd")},fg={},ev={};Hn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function Ii(e){if(fg[e])return fg[e];if(!Al[e])return e;var t=Al[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ev)return fg[e]=t[a];return e}var tv=Ii("animationend"),av=Ii("animationiteration"),ov=Ii("animationstart"),F3=Ii("transitionrun"),U3=Ii("transitionstart"),q3=Ii("transitioncancel"),nv=Ii("transitionend"),rv=new Map,$g="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$g.push("scrollEnd");function zo(e,t){rv.set(e,t),ki(t,[e])}var ff=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},go=[],Dl=0,qh=0;function Ff(){for(var e=Dl,t=qh=Dl=0;t<e;){var a=go[t];go[t++]=null;var o=go[t];go[t++]=null;var n=go[t];go[t++]=null;var r=go[t];if(go[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&iv(a,n,r)}}function Uf(e,t,a,o){go[Dl++]=e,go[Dl++]=t,go[Dl++]=a,go[Dl++]=o,qh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Vh(e,t,a,o){return Uf(e,t,a,o),pf(e)}function Mi(e,t){return Uf(e,null,null,t),pf(e)}function iv(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-$a(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function pf(e){if(50<Cd)throw Cd=0,bh=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Rl={};function V3(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ya(e,t,a,o){return new V3(e,t,a,o)}function Gh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zn(e,t){var a=e.alternate;return a===null?(a=Ya(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lv(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wc(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")Gh(e)&&(i=1);else if(typeof e=="string")i=X4(e,a,rn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Bg:return e=Ya(31,a,t,n),e.elementType=Bg,e.lanes=r,e;case _l:return hi(a.children,n,r,t);case _y:i=8,n|=24;break;case Pg:return e=Ya(12,a,t,n|2),e.elementType=Pg,e.lanes=r,e;case zg:return e=Ya(13,a,t,n),e.elementType=zg,e.lanes=r,e;case Og:return e=Ya(19,a,t,n),e.elementType=Og,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dn:i=10;break e;case Iy:i=9;break e;case Eh:i=11;break e;case Th:i=14;break e;case fr:i=16,o=null;break e}i=29,a=Error(Y(130,e===null?"null":typeof e,"")),o=null}return t=Ya(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function hi(e,t,a,o){return e=Ya(7,e,o,t),e.lanes=a,e}function pg(e,t,a){return e=Ya(6,e,null,t),e.lanes=a,e}function sv(e){var t=Ya(18,null,null,0);return t.stateNode=e,t}function mg(e,t,a){return t=Ya(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bw=new WeakMap;function yo(e,t){if(typeof e=="object"&&e!==null){var a=bw.get(e);return a!==void 0?a:(t={value:e,source:t,stack:J0(t)},bw.set(e,t),t)}return{value:e,source:t,stack:J0(t)}}var Pl=[],zl=0,mf=null,Md=0,xo=[],bo=0,Ar=null,an=1,on="";function Tn(e,t){Pl[zl++]=Md,Pl[zl++]=mf,mf=e,Md=t}function dv(e,t,a){xo[bo++]=an,xo[bo++]=on,xo[bo++]=Ar,Ar=e;var o=an;e=on;var n=32-$a(o)-1;o&=~(1<<n),a+=1;var r=32-$a(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,an=1<<32-$a(t)+n|a<<n|o,on=r+e}else an=1<<r|a<<n|o,on=e}function jh(e){e.return!==null&&(Tn(e,1),dv(e,1,0))}function Xh(e){for(;e===mf;)mf=Pl[--zl],Pl[zl]=null,Md=Pl[--zl],Pl[zl]=null;for(;e===Ar;)Ar=xo[--bo],xo[bo]=null,on=xo[--bo],xo[bo]=null,an=xo[--bo],xo[bo]=null}function uv(e,t){xo[bo++]=an,xo[bo++]=on,xo[bo++]=Ar,an=t.id,on=t.overflow,Ar=e}var $t=null,at=null,Ne=!1,Lr=null,vo=!1,Qg=Error(Y(519));function Dr(e){var t=Error(Y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nd(yo(t,e)),Qg}function ww(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Kt]=e,t[Ra]=o,a){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(a=0;a<Dd.length;a++)ke(Dd[a],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),Fy(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),qy(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||X1(t.textContent,a)?(o.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),o.onScroll!=null&&ke("scroll",t),o.onScrollEnd!=null&&ke("scrollend",t),o.onClick!=null&&(t.onclick=Rn),t=!0):t=!1,t||Dr(e,!0)}function yw(e){for($t=e.return;$t;)switch($t.tag){case 5:case 31:case 13:vo=!1;return;case 27:case 3:vo=!0;return;default:$t=$t.return}}function Cl(e){if(e!==$t)return!1;if(!Ne)return yw(e),Ne=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Sh(e.type,e.memoizedProps)),a=!a),a&&at&&Dr(e),yw(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));at=sy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));at=sy(e)}else t===27?(t=at,Or(e.type)?(e=Ih,Ih=null,at=e):at=t):at=$t?So(e.stateNode.nextSibling):null;return!0}function yi(){at=$t=null,Ne=!1}function gg(){var e=Lr;return e!==null&&(Aa===null?Aa=e:Aa.push.apply(Aa,e),Lr=null),e}function Nd(e){Lr===null?Lr=[e]:Lr.push(e)}var Jg=ln(null),Ni=null,Pn=null;function mr(e,t,a){We(Jg,t._currentValue),t._currentValue=a}function On(e){e._currentValue=Jg.current,Ut(Jg)}function eh(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function th(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var l=r;r=n;for(var s=0;s<t.length;s++)if(l.context===t[s]){r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),eh(r.return,a,e),o||(i=null);break e}r=l.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(Y(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),eh(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ns(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(Y(387));if(i=i.memoizedProps,i!==null){var l=n.type;Ja(n.pendingProps.value,i.value)||(e!==null?e.push(l):e=[l])}}else if(n===lf.current){if(i=n.alternate,i===null)throw Error(Y(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Pd):e=[Pd])}n=n.return}e!==null&&th(t,e,a,o),t.flags|=262144}function gf(e){for(e=e.firstContext;e!==null;){if(!Ja(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vi(e){Ni=e,Pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qt(e){return cv(Ni,e)}function Pc(e,t){return Ni===null&&vi(e),cv(e,t)}function cv(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Pn===null){if(e===null)throw Error(Y(308));Pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pn=Pn.next=t;return a}var G3=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},j3=Dt.unstable_scheduleCallback,X3=Dt.unstable_NormalPriority,Lt={$$typeof:Dn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yh(){return{controller:new G3,data:new Map,refCount:0}}function Gd(e){e.refCount--,e.refCount===0&&j3(X3,function(){e.controller.abort()})}var md=null,ah=0,Zl=0,Ul=null;function Y3(e,t){if(md===null){var a=md=[];ah=0,Zl=bx(),Ul={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ah++,t.then(vw,vw),t}function vw(){if(--ah===0&&md!==null){Ul!==null&&(Ul.status="fulfilled");var e=md;md=null,Zl=0,Ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Z3(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Cw=ce.S;ce.S=function(e,t){k1=Wa(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Y3(e,t),Cw!==null&&Cw(e,t)};var xi=ln(null);function Zh(){var e=xi.current;return e!==null?e:Xe.pooledCache}function Kc(e,t){t===null?We(xi,xi.current):We(xi,t.pool)}function fv(){var e=Zh();return e===null?null:{parent:Lt._currentValue,pool:e}}var rs=Error(Y(460)),Wh=Error(Y(474)),qf=Error(Y(542)),hf={then:function(){}};function Sw(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pv(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rn,Rn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kw(e),e;default:if(typeof t.status=="string")t.then(Rn,Rn);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kw(e),e}throw bi=t,rs}}function pi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bi=a,rs):a}}var bi=null;function Lw(){if(bi===null)throw Error(Y(459));var e=bi;return bi=null,e}function kw(e){if(e===rs||e===qf)throw Error(Y(483))}var ql=null,Ed=0;function zc(e){var t=Ed;return Ed+=1,ql===null&&(ql=[]),pv(ql,e,t)}function td(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oc(e,t){throw t.$$typeof===RN?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mv(e){function t(x,b){if(e){var m=x.deletions;m===null?(x.deletions=[b],x.flags|=16):m.push(b)}}function a(x,b){if(!e)return null;for(;b!==null;)t(x,b),b=b.sibling;return null}function o(x){for(var b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function n(x,b){return x=zn(x,b),x.index=0,x.sibling=null,x}function r(x,b,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<b?(x.flags|=67108866,b):m):(x.flags|=67108866,b)):(x.flags|=1048576,b)}function i(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function l(x,b,m,h){return b===null||b.tag!==6?(b=pg(m,x.mode,h),b.return=x,b):(b=n(b,m),b.return=x,b)}function s(x,b,m,h){var v=m.type;return v===_l?d(x,b,m.props.children,h,m.key):b!==null&&(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===fr&&pi(v)===b.type)?(b=n(b,m.props),td(b,m),b.return=x,b):(b=Wc(m.type,m.key,m.props,null,x.mode,h),td(b,m),b.return=x,b)}function u(x,b,m,h){return b===null||b.tag!==4||b.stateNode.containerInfo!==m.containerInfo||b.stateNode.implementation!==m.implementation?(b=mg(m,x.mode,h),b.return=x,b):(b=n(b,m.children||[]),b.return=x,b)}function d(x,b,m,h,v){return b===null||b.tag!==7?(b=hi(m,x.mode,h,v),b.return=x,b):(b=n(b,m),b.return=x,b)}function f(x,b,m){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=pg(""+b,x.mode,m),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ic:return m=Wc(b.type,b.key,b.props,null,x.mode,m),td(m,b),m.return=x,m;case id:return b=mg(b,x.mode,m),b.return=x,b;case fr:return b=pi(b),f(x,b,m)}if(ld(b)||Js(b))return b=hi(b,x.mode,m,null),b.return=x,b;if(typeof b.then=="function")return f(x,zc(b),m);if(b.$$typeof===Dn)return f(x,Pc(x,b),m);Oc(x,b)}return null}function c(x,b,m,h){var v=b!==null?b.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return v!==null?null:l(x,b,""+m,h);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ic:return m.key===v?s(x,b,m,h):null;case id:return m.key===v?u(x,b,m,h):null;case fr:return m=pi(m),c(x,b,m,h)}if(ld(m)||Js(m))return v!==null?null:d(x,b,m,h,null);if(typeof m.then=="function")return c(x,b,zc(m),h);if(m.$$typeof===Dn)return c(x,b,Pc(x,m),h);Oc(x,m)}return null}function p(x,b,m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return x=x.get(m)||null,l(b,x,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ic:return x=x.get(h.key===null?m:h.key)||null,s(b,x,h,v);case id:return x=x.get(h.key===null?m:h.key)||null,u(b,x,h,v);case fr:return h=pi(h),p(x,b,m,h,v)}if(ld(h)||Js(h))return x=x.get(m)||null,d(b,x,h,v,null);if(typeof h.then=="function")return p(x,b,m,zc(h),v);if(h.$$typeof===Dn)return p(x,b,m,Pc(b,h),v);Oc(b,h)}return null}function g(x,b,m,h){for(var v=null,C=null,S=b,L=b=0,_=null;S!==null&&L<m.length;L++){S.index>L?(_=S,S=null):_=S.sibling;var T=c(x,S,m[L],h);if(T===null){S===null&&(S=_);break}e&&S&&T.alternate===null&&t(x,S),b=r(T,b,L),C===null?v=T:C.sibling=T,C=T,S=_}if(L===m.length)return a(x,S),Ne&&Tn(x,L),v;if(S===null){for(;L<m.length;L++)S=f(x,m[L],h),S!==null&&(b=r(S,b,L),C===null?v=S:C.sibling=S,C=S);return Ne&&Tn(x,L),v}for(S=o(S);L<m.length;L++)_=p(S,x,L,m[L],h),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?L:_.key),b=r(_,b,L),C===null?v=_:C.sibling=_,C=_);return e&&S.forEach(function(R){return t(x,R)}),Ne&&Tn(x,L),v}function w(x,b,m,h){if(m==null)throw Error(Y(151));for(var v=null,C=null,S=b,L=b=0,_=null,T=m.next();S!==null&&!T.done;L++,T=m.next()){S.index>L?(_=S,S=null):_=S.sibling;var R=c(x,S,T.value,h);if(R===null){S===null&&(S=_);break}e&&S&&R.alternate===null&&t(x,S),b=r(R,b,L),C===null?v=R:C.sibling=R,C=R,S=_}if(T.done)return a(x,S),Ne&&Tn(x,L),v;if(S===null){for(;!T.done;L++,T=m.next())T=f(x,T.value,h),T!==null&&(b=r(T,b,L),C===null?v=T:C.sibling=T,C=T);return Ne&&Tn(x,L),v}for(S=o(S);!T.done;L++,T=m.next())T=p(S,x,L,T.value,h),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?L:T.key),b=r(T,b,L),C===null?v=T:C.sibling=T,C=T);return e&&S.forEach(function(z){return t(x,z)}),Ne&&Tn(x,L),v}function y(x,b,m,h){if(typeof m=="object"&&m!==null&&m.type===_l&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ic:e:{for(var v=m.key;b!==null;){if(b.key===v){if(v=m.type,v===_l){if(b.tag===7){a(x,b.sibling),h=n(b,m.props.children),h.return=x,x=h;break e}}else if(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===fr&&pi(v)===b.type){a(x,b.sibling),h=n(b,m.props),td(h,m),h.return=x,x=h;break e}a(x,b);break}else t(x,b);b=b.sibling}m.type===_l?(h=hi(m.props.children,x.mode,h,m.key),h.return=x,x=h):(h=Wc(m.type,m.key,m.props,null,x.mode,h),td(h,m),h.return=x,x=h)}return i(x);case id:e:{for(v=m.key;b!==null;){if(b.key===v)if(b.tag===4&&b.stateNode.containerInfo===m.containerInfo&&b.stateNode.implementation===m.implementation){a(x,b.sibling),h=n(b,m.children||[]),h.return=x,x=h;break e}else{a(x,b);break}else t(x,b);b=b.sibling}h=mg(m,x.mode,h),h.return=x,x=h}return i(x);case fr:return m=pi(m),y(x,b,m,h)}if(ld(m))return g(x,b,m,h);if(Js(m)){if(v=Js(m),typeof v!="function")throw Error(Y(150));return m=v.call(m),w(x,b,m,h)}if(typeof m.then=="function")return y(x,b,zc(m),h);if(m.$$typeof===Dn)return y(x,b,Pc(x,m),h);Oc(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,b!==null&&b.tag===6?(a(x,b.sibling),h=n(b,m),h.return=x,x=h):(a(x,b),h=pg(m,x.mode,h),h.return=x,x=h),i(x)):a(x,b)}return function(x,b,m,h){try{Ed=0;var v=y(x,b,m,h);return ql=null,v}catch(S){if(S===rs||S===qf)throw S;var C=Ya(29,S,null,x.mode);return C.lanes=h,C.return=x,C}}}var Ci=mv(!0),gv=mv(!1),pr=!1;function Kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _r(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=pf(e),iv(e,null,a),t}return Uf(e,o,t,a),pf(e)}function gd(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Dy(e,a)}}function hg(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var nh=!1;function hd(){if(nh){var e=Ul;if(e!==null)throw e}}function xd(e,t,a,o){nh=!1;var n=e.updateQueue;pr=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?r=u:i.next=u,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;i=0,d=u=s=null,l=r;do{var c=l.lane&-536870913,p=c!==l.lane;if(p?(Me&c)===c:(o&c)===c){c!==0&&c===Zl&&(nh=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=e,w=l;c=t;var y=a;switch(w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(y,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,c=typeof g=="function"?g.call(y,f,c):g,c==null)break e;f=ot({},f,c);break e;case 2:pr=!0}}c=l.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=f):d=d.next=p,i|=c;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;p=l,l=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),Pr|=i,e.lanes=i,e.memoizedState=f}}function hv(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function xv(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hv(a[e],t)}var Wl=ln(null),xf=ln(0);function _w(e,t){e=Vn,We(xf,e),We(Wl,t),Vn=e|t.baseLanes}function rh(){We(xf,Vn),We(Wl,Wl.current)}function $h(){Vn=xf.current,Ut(Wl),Ut(xf)}var eo=ln(null),Co=null;function gr(e){var t=e.alternate;We(xt,xt.current&1),We(eo,e),Co===null&&(t===null||Wl.current!==null||t.memoizedState!==null)&&(Co=e)}function ih(e){We(xt,xt.current),We(eo,e),Co===null&&(Co=e)}function bv(e){e.tag===22?(We(xt,xt.current),We(eo,e),Co===null&&(Co=e)):hr(e)}function hr(){We(xt,xt.current),We(eo,eo.current)}function Xa(e){Ut(eo),Co===e&&(Co=null),Ut(xt)}var xt=ln(0);function bf(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kh(a)||_h(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fn=0,xe=null,Ge=null,Ct=null,wf=!1,Vl=!1,Si=!1,yf=0,Td=0,Gl=null,W3=0;function ct(){throw Error(Y(321))}function Qh(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ja(e[a],t[a]))return!1;return!0}function Jh(e,t,a,o,n,r){return Fn=r,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ce.H=e===null||e.memoizedState===null?Wv:ux,Si=!1,r=a(o,n),Si=!1,Vl&&(r=yv(t,a,o,n)),wv(e),r}function wv(e){ce.H=Ad;var t=Ge!==null&&Ge.next!==null;if(Fn=0,Ct=Ge=xe=null,wf=!1,Td=0,Gl=null,t)throw Error(Y(300));e===null||kt||(e=e.dependencies,e!==null&&gf(e)&&(kt=!0))}function yv(e,t,a,o){xe=e;var n=0;do{if(Vl&&(Gl=null),Td=0,Vl=!1,25<=n)throw Error(Y(301));if(n+=1,Ct=Ge=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}ce.H=Kv,r=t(a,o)}while(Vl);return r}function K3(){var e=ce.H,t=e.useState()[0];return t=typeof t.then=="function"?jd(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(xe.flags|=1024),t}function ex(){var e=yf!==0;return yf=0,e}function tx(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ax(e){if(wf){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wf=!1}Fn=0,Ct=Ge=xe=null,Vl=!1,Td=yf=0,Gl=null}function ma(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?xe.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function bt(){if(Ge===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ct===null?xe.memoizedState:Ct.next;if(t!==null)Ct=t,Ge=e;else{if(e===null)throw xe.alternate===null?Error(Y(467)):Error(Y(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ct===null?xe.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Vf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jd(e){var t=Td;return Td+=1,Gl===null&&(Gl=[]),e=pv(Gl,e,t),t=xe,(Ct===null?t.memoizedState:Ct.next)===null&&(t=t.alternate,ce.H=t===null||t.memoizedState===null?Wv:ux),e}function Gf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jd(e);if(e.$$typeof===Dn)return Qt(e)}throw Error(Y(438,String(e)))}function ox(e){var t=null,a=xe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Vf(),xe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=PN;return t.index++,a}function Un(e,t){return typeof t=="function"?t(e):t}function $c(e){var t=bt();return nx(t,Ge,e)}function nx(e,t,a){var o=e.queue;if(o===null)throw Error(Y(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var l=i=null,s=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Me&f)===f:(Fn&f)===f){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Zl&&(d=!0);else if((Fn&c)===c){u=u.next,c===Zl&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=f,i=r):s=s.next=f,xe.lanes|=c,Pr|=c;f=u.action,Si&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=c,i=r):s=s.next=c,xe.lanes|=f,Pr|=f;u=u.next}while(u!==null&&u!==t);if(s===null?i=r:s.next=l,!Ja(r,e.memoizedState)&&(kt=!0,d&&(a=Ul,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xg(e){var t=bt(),a=t.queue;if(a===null)throw Error(Y(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);Ja(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function vv(e,t,a){var o=xe,n=bt(),r=Ne;if(r){if(a===void 0)throw Error(Y(407));a=a()}else a=t();var i=!Ja((Ge||n).memoizedState,a);if(i&&(n.memoizedState=a,kt=!0),n=n.queue,rx(Lv.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||Ct!==null&&Ct.memoizedState.tag&1){if(o.flags|=2048,Kl(9,{destroy:void 0},Sv.bind(null,o,n,a,t),null),Xe===null)throw Error(Y(349));r||(Fn&127)!==0||Cv(o,t,a)}return a}function Cv(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=xe.updateQueue,t===null?(t=Vf(),xe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Sv(e,t,a,o){t.value=a,t.getSnapshot=o,kv(t)&&_v(e)}function Lv(e,t,a){return a(function(){kv(t)&&_v(e)})}function kv(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ja(e,a)}catch{return!0}}function _v(e){var t=Mi(e,2);t!==null&&Da(t,e,2)}function lh(e){var t=ma();if(typeof e=="function"){var a=e;if(e=a(),Si){br(!0);try{a()}finally{br(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},t}function Iv(e,t,a,o){return e.baseState=a,nx(e,Ge,typeof o=="function"?o:Un)}function $3(e,t,a,o,n){if(Xf(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};ce.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,Mv(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Mv(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=ce.T,i={};ce.T=i;try{var l=a(n,o),s=ce.S;s!==null&&s(i,l),Iw(e,t,l)}catch(u){sh(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),ce.T=r}}else try{r=a(n,o),Iw(e,t,r)}catch(u){sh(e,t,u)}}function Iw(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mw(e,t,o)},function(o){return sh(e,t,o)}):Mw(e,t,a)}function Mw(e,t,a){t.status="fulfilled",t.value=a,Nv(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Mv(e,a)))}function sh(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Nv(t),t=t.next;while(t!==o)}e.action=null}function Nv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ev(e,t){return t}function Nw(e,t){if(Ne){var a=Xe.formState;if(a!==null){e:{var o=xe;if(Ne){if(at){t:{for(var n=at,r=vo;n.nodeType!==8;){if(!r){n=null;break t}if(n=So(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){at=So(n.nextSibling),o=n.data==="F!";break e}}Dr(o)}o=!1}o&&(t=a[0])}}return a=ma(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ev,lastRenderedState:t},a.queue=o,a=Xv.bind(null,xe,o),o.dispatch=a,o=lh(!1),r=dx.bind(null,xe,!1,o.queue),o=ma(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=$3.bind(null,xe,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function Ew(e){var t=bt();return Tv(t,Ge,e)}function Tv(e,t,a){if(t=nx(e,t,Ev)[0],e=$c(Un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=jd(t)}catch(i){throw i===rs?qf:i}else o=t;t=bt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(xe.flags|=2048,Kl(9,{destroy:void 0},Q3.bind(null,n,a),null)),[o,r,e]}function Q3(e,t){e.action=t}function Tw(e){var t=bt(),a=Ge;if(a!==null)return Tv(t,a,e);bt(),t=t.memoizedState,a=bt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Kl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Vf(),xe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Av(){return bt().memoizedState}function Qc(e,t,a,o){var n=ma();xe.flags|=e,n.memoizedState=Kl(1|t,{destroy:void 0},a,o===void 0?null:o)}function jf(e,t,a,o){var n=bt();o=o===void 0?null:o;var r=n.memoizedState.inst;Ge!==null&&o!==null&&Qh(o,Ge.memoizedState.deps)?n.memoizedState=Kl(t,r,a,o):(xe.flags|=e,n.memoizedState=Kl(1|t,r,a,o))}function Aw(e,t){Qc(8390656,8,e,t)}function rx(e,t){jf(2048,8,e,t)}function J3(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=Vf(),xe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Dv(e){var t=bt().memoizedState;return J3({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(Y(440));return t.impl.apply(void 0,arguments)}}function Rv(e,t){return jf(4,2,e,t)}function Pv(e,t){return jf(4,4,e,t)}function zv(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ov(e,t,a){a=a!=null?a.concat([e]):null,jf(4,4,zv.bind(null,t,e),a)}function ix(){}function Bv(e,t){var a=bt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Qh(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Hv(e,t){var a=bt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Qh(t,o[1]))return o[0];if(o=e(),Si){br(!0);try{e()}finally{br(!1)}}return a.memoizedState=[o,t],o}function lx(e,t,a){return a===void 0||(Fn&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=I1(),xe.lanes|=e,Pr|=e,a)}function Fv(e,t,a,o){return Ja(a,t)?a:Wl.current!==null?(e=lx(e,a,o),Ja(e,t)||(kt=!0),e):(Fn&42)===0||(Fn&1073741824)!==0&&(Me&261930)===0?(kt=!0,e.memoizedState=a):(e=I1(),xe.lanes|=e,Pr|=e,t)}function Uv(e,t,a,o,n){var r=Pe.p;Pe.p=r!==0&&8>r?r:8;var i=ce.T,l={};ce.T=l,dx(e,!1,t,a);try{var s=n(),u=ce.S;if(u!==null&&u(l,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=Z3(s,o);bd(e,t,d,Qa(e))}else bd(e,t,o,Qa(e))}catch(f){bd(e,t,{then:function(){},status:"rejected",reason:f},Qa())}finally{Pe.p=r,i!==null&&l.types!==null&&(i.types=l.types),ce.T=i}}function e4(){}function dh(e,t,a,o){if(e.tag!==5)throw Error(Y(476));var n=qv(e).queue;Uv(e,n,t,gi,a===null?e4:function(){return Vv(e),a(o)})}function qv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:gi,baseState:gi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:gi},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vv(e){var t=qv(e);t.next===null&&(t=e.alternate.memoizedState),bd(e,t.next.queue,{},Qa())}function sx(){return Qt(Pd)}function Gv(){return bt().memoizedState}function jv(){return bt().memoizedState}function t4(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Qa();e=kr(a);var o=_r(t,e,a);o!==null&&(Da(o,t,a),gd(o,t,a)),t={cache:Yh()},e.payload=t;return}t=t.return}}function a4(e,t,a){var o=Qa();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xf(e)?Yv(t,a):(a=Vh(e,t,a,o),a!==null&&(Da(a,e,o),Zv(a,t,o)))}function Xv(e,t,a){var o=Qa();bd(e,t,a,o)}function bd(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xf(e))Yv(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,l=r(i,a);if(n.hasEagerState=!0,n.eagerState=l,Ja(l,i))return Uf(e,t,n,0),Xe===null&&Ff(),!1}catch{}if(a=Vh(e,t,n,o),a!==null)return Da(a,e,o),Zv(a,t,o),!0}return!1}function dx(e,t,a,o){if(o={lane:2,revertLane:bx(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xf(e)){if(t)throw Error(Y(479))}else t=Vh(e,a,o,2),t!==null&&Da(t,e,2)}function Xf(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Yv(e,t){Vl=wf=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Zv(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Dy(e,a)}}var Ad={readContext:Qt,use:Gf,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};Ad.useEffectEvent=ct;var Wv={readContext:Qt,use:Gf,useCallback:function(e,t){return ma().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:Aw,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Qc(4194308,4,zv.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Qc(4194308,4,e,t)},useInsertionEffect:function(e,t){Qc(4,2,e,t)},useMemo:function(e,t){var a=ma();t=t===void 0?null:t;var o=e();if(Si){br(!0);try{e()}finally{br(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ma();if(a!==void 0){var n=a(t);if(Si){br(!0);try{a(t)}finally{br(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=a4.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var t=ma();return e={current:e},t.memoizedState=e},useState:function(e){e=lh(e);var t=e.queue,a=Xv.bind(null,xe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ix,useDeferredValue:function(e,t){var a=ma();return lx(a,e,t)},useTransition:function(){var e=lh(!1);return e=Uv.bind(null,xe,e.queue,!0,!1),ma().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=xe,n=ma();if(Ne){if(a===void 0)throw Error(Y(407));a=a()}else{if(a=t(),Xe===null)throw Error(Y(349));(Me&127)!==0||Cv(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,Aw(Lv.bind(null,o,r,e),[e]),o.flags|=2048,Kl(9,{destroy:void 0},Sv.bind(null,o,r,a,t),null),a},useId:function(){var e=ma(),t=Xe.identifierPrefix;if(Ne){var a=on,o=an;a=(o&~(1<<32-$a(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=yf++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=W3++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:sx,useFormState:Nw,useActionState:Nw,useOptimistic:function(e){var t=ma();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=dx.bind(null,xe,!0,a),a.dispatch=t,[e,t]},useMemoCache:ox,useCacheRefresh:function(){return ma().memoizedState=t4.bind(null,xe)},useEffectEvent:function(e){var t=ma(),a={impl:e};return t.memoizedState=a,function(){if((Re&2)!==0)throw Error(Y(440));return a.impl.apply(void 0,arguments)}}},ux={readContext:Qt,use:Gf,useCallback:Bv,useContext:Qt,useEffect:rx,useImperativeHandle:Ov,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Hv,useReducer:$c,useRef:Av,useState:function(){return $c(Un)},useDebugValue:ix,useDeferredValue:function(e,t){var a=bt();return Fv(a,Ge.memoizedState,e,t)},useTransition:function(){var e=$c(Un)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:jd(e),t]},useSyncExternalStore:vv,useId:Gv,useHostTransitionStatus:sx,useFormState:Ew,useActionState:Ew,useOptimistic:function(e,t){var a=bt();return Iv(a,Ge,e,t)},useMemoCache:ox,useCacheRefresh:jv};ux.useEffectEvent=Dv;var Kv={readContext:Qt,use:Gf,useCallback:Bv,useContext:Qt,useEffect:rx,useImperativeHandle:Ov,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Hv,useReducer:xg,useRef:Av,useState:function(){return xg(Un)},useDebugValue:ix,useDeferredValue:function(e,t){var a=bt();return Ge===null?lx(a,e,t):Fv(a,Ge.memoizedState,e,t)},useTransition:function(){var e=xg(Un)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:jd(e),t]},useSyncExternalStore:vv,useId:Gv,useHostTransitionStatus:sx,useFormState:Tw,useActionState:Tw,useOptimistic:function(e,t){var a=bt();return Ge!==null?Iv(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ox,useCacheRefresh:jv};Kv.useEffectEvent=Dv;function bg(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:ot({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uh={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Qa(),n=kr(o);n.payload=t,a!=null&&(n.callback=a),t=_r(e,n,o),t!==null&&(Da(t,e,o),gd(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Qa(),n=kr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=_r(e,n,o),t!==null&&(Da(t,e,o),gd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Qa(),o=kr(a);o.tag=2,t!=null&&(o.callback=t),t=_r(e,o,a),t!==null&&(Da(t,e,a),gd(t,e,a))}};function Dw(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!Id(a,o)||!Id(n,r):!0}function Rw(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&uh.enqueueReplaceState(t,t.state,null)}function Li(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=ot({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function $v(e){ff(e)}function Qv(e){console.error(e)}function Jv(e){ff(e)}function vf(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Pw(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ch(e,t,a){return a=kr(a),a.tag=3,a.payload={element:null},a.callback=function(){vf(e,t)},a}function e1(e){return e=kr(e),e.tag=3,e}function t1(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){Pw(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Pw(t,a,o),typeof n!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var l=o.stack;this.componentDidCatch(o.value,{componentStack:l!==null?l:""})})}function o4(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&ns(t,a,n,!0),a=eo.current,a!==null){switch(a.tag){case 31:case 13:return Co===null?_f():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===hf?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Ng(e,o,n)),!1;case 22:return a.flags|=65536,o===hf?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Ng(e,o,n)),!1}throw Error(Y(435,a.tag))}return Ng(e,o,n),_f(),!1}if(Ne)return t=eo.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Qg&&(e=Error(Y(422),{cause:o}),Nd(yo(e,a)))):(o!==Qg&&(t=Error(Y(423),{cause:o}),Nd(yo(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=yo(o,a),n=ch(e.stateNode,o,n),hg(e,n),ft!==4&&(ft=2)),!1;var r=Error(Y(520),{cause:o});if(r=yo(r,a),vd===null?vd=[r]:vd.push(r),ft!==4&&(ft=2),t===null)return!0;o=yo(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ch(a.stateNode,o,e),hg(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=e1(n),t1(n,e,a,o),hg(a,n),!1}a=a.return}while(a!==null);return!1}var cx=Error(Y(461)),kt=!1;function Wt(e,t,a,o){t.child=e===null?gv(t,null,a,o):Ci(t,e.child,a,o)}function zw(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var l in o)l!=="ref"&&(i[l]=o[l])}else i=o;return vi(t),o=Jh(e,t,a,i,r,n),l=ex(),e!==null&&!kt?(tx(e,t,n),qn(e,t,n)):(Ne&&l&&jh(t),t.flags|=1,Wt(e,t,o,n),t.child)}function Ow(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Gh(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,a1(e,t,r,o,n)):(e=Wc(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!fx(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:Id,a(i,o)&&e.ref===t.ref)return qn(e,t,n)}return t.flags|=1,e=zn(r,o),e.ref=t.ref,e.return=t,t.child=e}function a1(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(Id(r,o)&&e.ref===t.ref)if(kt=!1,t.pendingProps=o=r,fx(e,n))(e.flags&131072)!==0&&(kt=!0);else return t.lanes=e.lanes,qn(e,t,n)}return fh(e,t,a,o,n)}function o1(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return Bw(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kc(t,r!==null?r.cachePool:null),r!==null?_w(t,r):rh(),bv(t);else return o=t.lanes=536870912,Bw(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Kc(t,r.cachePool),_w(t,r),hr(t),t.memoizedState=null):(e!==null&&Kc(t,null),rh(),hr(t));return Wt(e,t,n,a),t.child}function dd(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bw(e,t,a,o,n){var r=Zh();return r=r===null?null:{parent:Lt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Kc(t,null),rh(),bv(t),e!==null&&ns(e,t,o,!0),t.childLanes=n,null}function Jc(e,t){return t=Cf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hw(e,t,a){return Ci(t,e.child,null,a),e=Jc(t,t.pendingProps),e.flags|=2,Xa(t),t.memoizedState=null,e}function n4(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(o.mode==="hidden")return e=Jc(t,o),t.lanes=536870912,dd(null,e);if(ih(t),(e=at)?(e=W1(e,vo),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ar!==null?{id:an,overflow:on}:null,retryLane:536870912,hydrationErrors:null},a=sv(e),a.return=t,t.child=a,$t=t,at=null)):e=null,e===null)throw Dr(t);return t.lanes=536870912,null}return Jc(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(ih(t),n)if(t.flags&256)t.flags&=-257,t=Hw(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Y(558));else if(kt||ns(e,t,a,!1),n=(a&e.childLanes)!==0,kt||n){if(o=Xe,o!==null&&(i=Ry(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Mi(e,i),Da(o,e,i),cx;_f(),t=Hw(e,t,a)}else e=r.treeContext,at=So(i.nextSibling),$t=t,Ne=!0,Lr=null,vo=!1,e!==null&&uv(t,e),t=Jc(t,o),t.flags|=4096;return t}return e=zn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ef(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(Y(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function fh(e,t,a,o,n){return vi(t),a=Jh(e,t,a,o,void 0,n),o=ex(),e!==null&&!kt?(tx(e,t,n),qn(e,t,n)):(Ne&&o&&jh(t),t.flags|=1,Wt(e,t,a,n),t.child)}function Fw(e,t,a,o,n,r){return vi(t),t.updateQueue=null,a=yv(t,o,a,n),wv(e),o=ex(),e!==null&&!kt?(tx(e,t,r),qn(e,t,r)):(Ne&&o&&jh(t),t.flags|=1,Wt(e,t,a,r),t.child)}function Uw(e,t,a,o,n){if(vi(t),t.stateNode===null){var r=Rl,i=a.contextType;typeof i=="object"&&i!==null&&(r=Qt(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=uh,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Kh(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?Qt(i):Rl,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(bg(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&uh.enqueueReplaceState(r,r.state,null),xd(t,o,r,n),hd(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,s=Li(a,l);r.props=s;var u=r.context,d=a.contextType;i=Rl,typeof d=="object"&&d!==null&&(i=Qt(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||u!==i)&&Rw(t,r,o,i),pr=!1;var c=t.memoizedState;r.state=c,xd(t,o,r,n),hd(),u=t.memoizedState,l||c!==u||pr?(typeof f=="function"&&(bg(t,a,f,o),u=t.memoizedState),(s=pr||Dw(t,a,s,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,oh(e,t),i=t.memoizedProps,d=Li(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,s=Rl,typeof u=="object"&&u!==null&&(s=Qt(u)),l=a.getDerivedStateFromProps,(u=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==s)&&Rw(t,r,o,s),pr=!1,c=t.memoizedState,r.state=c,xd(t,o,r,n),hd();var p=t.memoizedState;i!==f||c!==p||pr||e!==null&&e.dependencies!==null&&gf(e.dependencies)?(typeof l=="function"&&(bg(t,a,l,o),p=t.memoizedState),(d=pr||Dw(t,a,d,o,c,p,s)||e!==null&&e.dependencies!==null&&gf(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,ef(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Ci(t,e.child,null,n),t.child=Ci(t,null,a,n)):Wt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=qn(e,t,n),e}function qw(e,t,a,o){return yi(),t.flags|=256,Wt(e,t,a,o),t.child}var wg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yg(e){return{baseLanes:e,cachePool:fv()}}function vg(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Za),e}function n1(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(xt.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(n?gr(t):hr(t),(e=at)?(e=W1(e,vo),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ar!==null?{id:an,overflow:on}:null,retryLane:536870912,hydrationErrors:null},a=sv(e),a.return=t,t.child=a,$t=t,at=null)):e=null,e===null)throw Dr(t);return _h(e)?t.lanes=32:t.lanes=536870912,null}var l=o.children;return o=o.fallback,n?(hr(t),n=t.mode,l=Cf({mode:"hidden",children:l},n),o=hi(o,n,a,null),l.return=t,o.return=t,l.sibling=o,t.child=l,o=t.child,o.memoizedState=yg(a),o.childLanes=vg(e,i,a),t.memoizedState=wg,dd(null,o)):(gr(t),ph(t,l))}var s=e.memoizedState;if(s!==null&&(l=s.dehydrated,l!==null)){if(r)t.flags&256?(gr(t),t.flags&=-257,t=Cg(e,t,a)):t.memoizedState!==null?(hr(t),t.child=e.child,t.flags|=128,t=null):(hr(t),l=o.fallback,n=t.mode,o=Cf({mode:"visible",children:o.children},n),l=hi(l,n,a,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,Ci(t,e.child,null,a),o=t.child,o.memoizedState=yg(a),o.childLanes=vg(e,i,a),t.memoizedState=wg,t=dd(null,o));else if(gr(t),_h(l)){if(i=l.nextSibling&&l.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(Y(419)),o.stack="",o.digest=i,Nd({value:o,source:null,stack:null}),t=Cg(e,t,a)}else if(kt||ns(e,t,a,!1),i=(a&e.childLanes)!==0,kt||i){if(i=Xe,i!==null&&(o=Ry(i,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,Mi(e,o),Da(i,e,o),cx;kh(l)||_f(),t=Cg(e,t,a)}else kh(l)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,at=So(l.nextSibling),$t=t,Ne=!0,Lr=null,vo=!1,e!==null&&uv(t,e),t=ph(t,o.children),t.flags|=4096);return t}return n?(hr(t),l=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=zn(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?l=zn(u,l):(l=hi(l,n,a,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,dd(null,o),o=t.child,l=e.child.memoizedState,l===null?l=yg(a):(n=l.cachePool,n!==null?(s=Lt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=fv(),l={baseLanes:l.baseLanes|a,cachePool:n}),o.memoizedState=l,o.childLanes=vg(e,i,a),t.memoizedState=wg,dd(e.child,o)):(gr(t),a=e.child,e=a.sibling,a=zn(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function ph(e,t){return t=Cf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cf(e,t){return e=Ya(22,e,null,t),e.lanes=0,e}function Cg(e,t,a){return Ci(t,e.child,null,a),e=ph(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vw(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),eh(e.return,t,a)}function Sg(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function r1(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=xt.current,l=(i&2)!==0;if(l?(i=i&1|2,t.flags|=128):i&=1,We(xt,i),Wt(e,t,o,a),o=Ne?Md:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vw(e,a,t);else if(e.tag===19)Vw(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bf(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Sg(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bf(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Sg(t,!0,a,null,r,o);break;case"together":Sg(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function qn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Pr|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ns(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,a=zn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function fx(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gf(e)))}function r4(e,t,a){switch(t.tag){case 3:sf(t,t.stateNode.containerInfo),mr(t,Lt,e.memoizedState.cache),yi();break;case 27:case 5:Ug(t);break;case 4:sf(t,t.stateNode.containerInfo);break;case 10:mr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ih(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(gr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?n1(e,t,a):(gr(t),e=qn(e,t,a),e!==null?e.sibling:null);gr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(ns(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return r1(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),We(xt,xt.current),o)break;return null;case 22:return t.lanes=0,o1(e,t,a,t.pendingProps);case 24:mr(t,Lt,e.memoizedState.cache)}return qn(e,t,a)}function i1(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)kt=!0;else{if(!fx(e,a)&&(t.flags&128)===0)return kt=!1,r4(e,t,a);kt=(e.flags&131072)!==0}else kt=!1,Ne&&(t.flags&1048576)!==0&&dv(t,Md,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=pi(t.elementType),t.type=e,typeof e=="function")Gh(e)?(o=Li(e,o),t.tag=1,t=Uw(null,t,e,o,a)):(t.tag=0,t=fh(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Eh){t.tag=11,t=zw(null,t,e,o,a);break e}else if(n===Th){t.tag=14,t=Ow(null,t,e,o,a);break e}}throw t=Hg(e)||e,Error(Y(306,t,""))}}return t;case 0:return fh(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Li(o,t.pendingProps),Uw(e,t,o,n,a);case 3:e:{if(sf(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,oh(e,t),xd(t,o,null,a);var i=t.memoizedState;if(o=i.cache,mr(t,Lt,o),o!==r.cache&&th(t,[Lt],a,!0),hd(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=qw(e,t,o,a);break e}else if(o!==n){n=yo(Error(Y(424)),t),Nd(n),t=qw(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,at=So(e.firstChild),$t=t,Ne=!0,Lr=null,vo=!0,a=gv(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yi(),o===n){t=qn(e,t,a);break e}Wt(e,t,o,a)}t=t.child}return t;case 26:return ef(e,t),e===null?(a=cy(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ne||(a=t.type,e=t.pendingProps,o=Ef(Sr.current).createElement(a),o[Kt]=t,o[Ra]=e,Jt(o,a,e),Ft(o),t.stateNode=o):t.memoizedState=cy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ug(t),e===null&&Ne&&(o=t.stateNode=K1(t.type,t.pendingProps,Sr.current),$t=t,vo=!0,n=at,Or(t.type)?(Ih=n,at=So(o.firstChild)):at=n),Wt(e,t,t.pendingProps.children,a),ef(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((n=o=at)&&(o=D4(o,t.type,t.pendingProps,vo),o!==null?(t.stateNode=o,$t=t,at=So(o.firstChild),vo=!1,n=!0):n=!1),n||Dr(t)),Ug(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,Sh(n,r)?o=null:i!==null&&Sh(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Jh(e,t,K3,null,null,a),Pd._currentValue=n),ef(e,t),Wt(e,t,o,a),t.child;case 6:return e===null&&Ne&&((e=a=at)&&(a=R4(a,t.pendingProps,vo),a!==null?(t.stateNode=a,$t=t,at=null,e=!0):e=!1),e||Dr(t)),null;case 13:return n1(e,t,a);case 4:return sf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ci(t,null,o,a):Wt(e,t,o,a),t.child;case 11:return zw(e,t,t.type,t.pendingProps,a);case 7:return Wt(e,t,t.pendingProps,a),t.child;case 8:return Wt(e,t,t.pendingProps.children,a),t.child;case 12:return Wt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,mr(t,t.type,o.value),Wt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,vi(t),n=Qt(n),o=o(n),t.flags|=1,Wt(e,t,o,a),t.child;case 14:return Ow(e,t,t.type,t.pendingProps,a);case 15:return a1(e,t,t.type,t.pendingProps,a);case 19:return r1(e,t,a);case 31:return n4(e,t,a);case 22:return o1(e,t,a,t.pendingProps);case 24:return vi(t),o=Qt(Lt),e===null?(n=Zh(),n===null&&(n=Xe,r=Yh(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Kh(t),mr(t,Lt,n)):((e.lanes&a)!==0&&(oh(e,t),xd(t,null,null,a),hd()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),mr(t,Lt,o)):(o=r.cache,mr(t,Lt,o),o!==n.cache&&th(t,[Lt],a,!0))),Wt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function In(e){e.flags|=4}function Lg(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(E1())e.flags|=8192;else throw bi=hf,Wh}else e.flags&=-16777217}function Gw(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J1(t))if(E1())e.flags|=8192;else throw bi=hf,Wh}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ty():536870912,e.lanes|=t,$l|=t)}function ad(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function i4(e,t,a){var o=t.pendingProps;switch(Xh(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),On(Lt),jl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Cl(t)?In(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gg())),tt(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(In(t),r!==null?(tt(t),Gw(t,r)):(tt(t),Lg(t,n,null,o,a))):r?r!==e.memoizedState?(In(t),tt(t),Gw(t,r)):(tt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&In(t),tt(t),Lg(t,n,e,o,a)),null;case 27:if(df(t),a=Sr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&In(t);else{if(!o){if(t.stateNode===null)throw Error(Y(166));return tt(t),null}e=rn.current,Cl(t)?ww(t,e):(e=K1(n,o,a),t.stateNode=e,In(t))}return tt(t),null;case 5:if(df(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&In(t);else{if(!o){if(t.stateNode===null)throw Error(Y(166));return tt(t),null}if(r=rn.current,Cl(t))ww(t,r);else{var i=Ef(Sr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[Kt]=t,r[Ra]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(Jt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&In(t)}}return tt(t),Lg(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&In(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(Y(166));if(e=Sr.current,Cl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=$t,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Kt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||X1(e.nodeValue,a)),e||Dr(t,!0)}else e=Ef(e).createTextNode(o),e[Kt]=t,t.stateNode=e}return tt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Cl(t),a!==null){if(e===null){if(!o)throw Error(Y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(557));e[Kt]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),e=!1}else a=gg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Xa(t),t):(Xa(t),null);if((t.flags&128)!==0)throw Error(Y(558))}return tt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Cl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(Y(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Y(317));n[Kt]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),n=!1}else n=gg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Xa(t),t):(Xa(t),null)}return Xa(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Bc(t,t.updateQueue),tt(t),null);case 4:return jl(),e===null&&wx(t.stateNode.containerInfo),tt(t),null;case 10:return On(t.type),tt(t),null;case 19:if(Ut(xt),o=t.memoizedState,o===null)return tt(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)ad(o,!1);else{if(ft!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=bf(e),r!==null){for(t.flags|=128,ad(o,!1),e=r.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)lv(a,e),a=a.sibling;return We(xt,xt.current&1|2),Ne&&Tn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Wa()>Lf&&(t.flags|=128,n=!0,ad(o,!1),t.lanes=4194304)}else{if(!n)if(e=bf(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),ad(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Ne)return tt(t),null}else 2*Wa()-o.renderingStartTime>Lf&&a!==536870912&&(t.flags|=128,n=!0,ad(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wa(),e.sibling=null,a=xt.current,We(xt,n?a&1|2:a&1),Ne&&Tn(t,o.treeForkCount),e):(tt(t),null);case 22:case 23:return Xa(t),$h(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),a=t.updateQueue,a!==null&&Bc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&Ut(xi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),On(Lt),tt(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function l4(e,t){switch(Xh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(Lt),jl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return df(t),null;case 31:if(t.memoizedState!==null){if(Xa(t),t.alternate===null)throw Error(Y(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ut(xt),null;case 4:return jl(),null;case 10:return On(t.type),null;case 22:case 23:return Xa(t),$h(),e!==null&&Ut(xi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return On(Lt),null;case 25:return null;default:return null}}function l1(e,t){switch(Xh(t),t.tag){case 3:On(Lt),jl();break;case 26:case 27:case 5:df(t);break;case 4:jl();break;case 31:t.memoizedState!==null&&Xa(t);break;case 13:Xa(t);break;case 19:Ut(xt);break;case 10:On(t.type);break;case 22:case 23:Xa(t),$h(),e!==null&&Ut(xi);break;case 24:On(Lt)}}function Xd(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(l){Fe(t,t.return,l)}}function Rr(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,l=i.destroy;if(l!==void 0){i.destroy=void 0,n=t;var s=a,u=l;try{u()}catch(d){Fe(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){Fe(t,t.return,d)}}function s1(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{xv(t,a)}catch(o){Fe(e,e.return,o)}}}function d1(e,t,a){a.props=Li(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,t,o)}}function wd(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Fe(e,t,n)}}function nn(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Fe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Fe(e,t,n)}else a.current=null}function u1(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Fe(e,e.return,n)}}function kg(e,t,a){try{var o=e.stateNode;I4(o,e.type,a,t),o[Ra]=t}catch(n){Fe(e,e.return,n)}}function c1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Or(e.type)||e.tag===4}function _g(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Or(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mh(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rn));else if(o!==4&&(o===27&&Or(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(mh(e,t,a),e=e.sibling;e!==null;)mh(e,t,a),e=e.sibling}function Sf(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Or(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Sf(e,t,a),e=e.sibling;e!==null;)Sf(e,t,a),e=e.sibling}function f1(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Jt(t,o,a),t[Kt]=e,t[Ra]=a}catch(r){Fe(e,e.return,r)}}var An=!1,St=!1,Ig=!1,jw=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function s4(e,t){if(e=e.containerInfo,vh=Rf,e=Jy(e),Uh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,l=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(l=i+n),f!==r||o!==0&&f.nodeType!==3||(s=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(l=i),c===r&&++d===o&&(s=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=l===-1||s===-1?null:{start:l,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ch={focusedElem:e,selectionRange:a},Rf=!1,Ht=t;Ht!==null;)if(t=Ht,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ht=e;else for(;Ht!==null;){switch(t=Ht,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Li(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){Fe(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Lh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,Ht=e;break}Ht=t.return}}function p1(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Nn(e,a),o&4&&Xd(5,a);break;case 1:if(Nn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){Fe(a,a.return,i)}else{var n=Li(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Fe(a,a.return,i)}}o&64&&s1(a),o&512&&wd(a,a.return);break;case 3:if(Nn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{xv(e,t)}catch(i){Fe(a,a.return,i)}}break;case 27:t===null&&o&4&&f1(a);case 26:case 5:Nn(e,a),t===null&&o&4&&u1(a),o&512&&wd(a,a.return);break;case 12:Nn(e,a);break;case 31:Nn(e,a),o&4&&h1(e,a);break;case 13:Nn(e,a),o&4&&x1(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=x4.bind(null,a),P4(e,a))));break;case 22:if(o=a.memoizedState!==null||An,!o){t=t!==null&&t.memoizedState!==null||St,n=An;var r=St;An=o,(St=t)&&!r?En(e,a,(a.subtreeFlags&8772)!==0):Nn(e,a),An=n,St=r}break;case 30:break;default:Nn(e,a)}}function m1(e){var t=e.alternate;t!==null&&(e.alternate=null,m1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ph(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var it=null,Ta=!1;function Mn(e,t,a){for(a=a.child;a!==null;)g1(e,t,a),a=a.sibling}function g1(e,t,a){if(Ka&&typeof Ka.onCommitFiberUnmount=="function")try{Ka.onCommitFiberUnmount(Hd,a)}catch{}switch(a.tag){case 26:St||nn(a,t),Mn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:St||nn(a,t);var o=it,n=Ta;Or(a.type)&&(it=a.stateNode,Ta=!1),Mn(e,t,a),Sd(a.stateNode),it=o,Ta=n;break;case 5:St||nn(a,t);case 6:if(o=it,n=Ta,it=null,Mn(e,t,a),it=o,Ta=n,it!==null)if(Ta)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(r){Fe(a,t,r)}else try{it.removeChild(a.stateNode)}catch(r){Fe(a,t,r)}break;case 18:it!==null&&(Ta?(e=it,iy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ts(e)):iy(it,a.stateNode));break;case 4:o=it,n=Ta,it=a.stateNode.containerInfo,Ta=!0,Mn(e,t,a),it=o,Ta=n;break;case 0:case 11:case 14:case 15:Rr(2,a,t),St||Rr(4,a,t),Mn(e,t,a);break;case 1:St||(nn(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&d1(a,t,o)),Mn(e,t,a);break;case 21:Mn(e,t,a);break;case 22:St=(o=St)||a.memoizedState!==null,Mn(e,t,a),St=o;break;default:Mn(e,t,a)}}function h1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ts(e)}catch(a){Fe(t,t.return,a)}}}function x1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ts(e)}catch(a){Fe(t,t.return,a)}}function d4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jw),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jw),t;default:throw Error(Y(435,e.tag))}}function Hc(e,t){var a=d4(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=b4.bind(null,e,o);o.then(n,n)}})}function Na(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(Or(l.type)){it=l.stateNode,Ta=!1;break e}break;case 5:it=l.stateNode,Ta=!1;break e;case 3:case 4:it=l.stateNode.containerInfo,Ta=!0;break e}l=l.return}if(it===null)throw Error(Y(160));g1(r,i,n),it=null,Ta=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)b1(t,e),t=t.sibling}var Po=null;function b1(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Na(t,e),Ea(e),o&4&&(Rr(3,e,e.return),Xd(3,e),Rr(5,e,e.return));break;case 1:Na(t,e),Ea(e),o&512&&(St||a===null||nn(a,a.return)),o&64&&An&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Po;if(Na(t,e),Ea(e),o&512&&(St||a===null||nn(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[qd]||r[Kt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Jt(r,o,a),r[Kt]=e,Ft(r),o=r;break e;case"link":var i=py("link","href",n).get(o+(a.href||""));if(i){for(var l=0;l<i.length;l++)if(r=i[l],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(l,1);break t}}r=n.createElement(o),Jt(r,o,a),n.head.appendChild(r);break;case"meta":if(i=py("meta","content",n).get(o+(a.content||""))){for(l=0;l<i.length;l++)if(r=i[l],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(l,1);break t}}r=n.createElement(o),Jt(r,o,a),n.head.appendChild(r);break;default:throw Error(Y(468,o))}r[Kt]=e,Ft(r),o=r}e.stateNode=o}else my(n,e.type,e.stateNode);else e.stateNode=fy(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?my(n,e.type,e.stateNode):fy(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&kg(e,e.memoizedProps,a.memoizedProps)}break;case 27:Na(t,e),Ea(e),o&512&&(St||a===null||nn(a,a.return)),a!==null&&o&4&&kg(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Na(t,e),Ea(e),o&512&&(St||a===null||nn(a,a.return)),e.flags&32){n=e.stateNode;try{Yl(n,"")}catch(g){Fe(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,kg(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Ig=!0);break;case 6:if(Na(t,e),Ea(e),o&4){if(e.stateNode===null)throw Error(Y(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Fe(e,e.return,g)}}break;case 3:if(of=null,n=Po,Po=Tf(t.containerInfo),Na(t,e),Po=n,Ea(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ts(t.containerInfo)}catch(g){Fe(e,e.return,g)}Ig&&(Ig=!1,w1(e));break;case 4:o=Po,Po=Tf(e.stateNode.containerInfo),Na(t,e),Ea(e),Po=o;break;case 12:Na(t,e),Ea(e);break;case 31:Na(t,e),Ea(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hc(e,o)));break;case 13:Na(t,e),Ea(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yf=Wa()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hc(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=An,d=St;if(An=u||n,St=d||s,Na(t,e),St=d,An=u,Ea(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||An||St||mi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{l=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){Fe(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){Fe(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?ly(p,!0):ly(s.stateNode,!1)}catch(g){Fe(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Hc(e,a))));break;case 19:Na(t,e),Ea(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hc(e,o)));break;case 30:break;case 21:break;default:Na(t,e),Ea(e)}}function Ea(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(c1(o)){a=o;break}o=o.return}if(a==null)throw Error(Y(160));switch(a.tag){case 27:var n=a.stateNode,r=_g(e);Sf(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(Yl(i,""),a.flags&=-33);var l=_g(e);Sf(e,l,i);break;case 3:case 4:var s=a.stateNode.containerInfo,u=_g(e);mh(e,u,s);break;default:throw Error(Y(161))}}catch(d){Fe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;w1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)p1(e,t.alternate,t),t=t.sibling}function mi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rr(4,t,t.return),mi(t);break;case 1:nn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&d1(t,t.return,a),mi(t);break;case 27:Sd(t.stateNode);case 26:case 5:nn(t,t.return),mi(t);break;case 22:t.memoizedState===null&&mi(t);break;case 30:mi(t);break;default:mi(t)}e=e.sibling}}function En(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:En(n,r,a),Xd(4,r);break;case 1:if(En(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Fe(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)hv(s[n],l)}catch(u){Fe(o,o.return,u)}}a&&i&64&&s1(r),wd(r,r.return);break;case 27:f1(r);case 26:case 5:En(n,r,a),a&&o===null&&i&4&&u1(r),wd(r,r.return);break;case 12:En(n,r,a);break;case 31:En(n,r,a),a&&i&4&&h1(n,r);break;case 13:En(n,r,a),a&&i&4&&x1(n,r);break;case 22:r.memoizedState===null&&En(n,r,a),wd(r,r.return);break;case 30:break;default:En(n,r,a)}t=t.sibling}}function px(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Gd(a))}function mx(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gd(e))}function Ro(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)y1(e,t,a,o),t=t.sibling}function y1(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ro(e,t,a,o),n&2048&&Xd(9,t);break;case 1:Ro(e,t,a,o);break;case 3:Ro(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gd(e)));break;case 12:if(n&2048){Ro(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,l=r.onPostCommit;typeof l=="function"&&l(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Fe(t,t.return,s)}}else Ro(e,t,a,o);break;case 31:Ro(e,t,a,o);break;case 13:Ro(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Ro(e,t,a,o):yd(e,t):r._visibility&2?Ro(e,t,a,o):(r._visibility|=2,Ll(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&px(i,t);break;case 24:Ro(e,t,a,o),n&2048&&mx(t.alternate,t);break;default:Ro(e,t,a,o)}}function Ll(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,l=a,s=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ll(r,i,l,s,n),Xd(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?Ll(r,i,l,s,n):yd(r,i):(d._visibility|=2,Ll(r,i,l,s,n)),n&&u&2048&&px(i.alternate,i);break;case 24:Ll(r,i,l,s,n),n&&u&2048&&mx(i.alternate,i);break;default:Ll(r,i,l,s,n)}t=t.sibling}}function yd(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:yd(a,o),n&2048&&px(o.alternate,o);break;case 24:yd(a,o),n&2048&&mx(o.alternate,o);break;default:yd(a,o)}t=t.sibling}}var ud=8192;function Sl(e,t,a){if(e.subtreeFlags&ud)for(e=e.child;e!==null;)v1(e,t,a),e=e.sibling}function v1(e,t,a){switch(e.tag){case 26:Sl(e,t,a),e.flags&ud&&e.memoizedState!==null&&Y4(a,Po,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,a);break;case 3:case 4:var o=Po;Po=Tf(e.stateNode.containerInfo),Sl(e,t,a),Po=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ud,ud=16777216,Sl(e,t,a),ud=o):Sl(e,t,a));break;default:Sl(e,t,a)}}function C1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function od(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ht=o,L1(o,e)}C1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S1(e),e=e.sibling}function S1(e){switch(e.tag){case 0:case 11:case 15:od(e),e.flags&2048&&Rr(9,e,e.return);break;case 3:od(e);break;case 12:od(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,tf(e)):od(e);break;default:od(e)}}function tf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ht=o,L1(o,e)}C1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rr(8,t,t.return),tf(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,tf(t));break;default:tf(t)}e=e.sibling}}function L1(e,t){for(;Ht!==null;){var a=Ht;switch(a.tag){case 0:case 11:case 15:Rr(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Gd(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ht=o;else e:for(a=e;Ht!==null;){o=Ht;var n=o.sibling,r=o.return;if(m1(o),o===a){Ht=null;break e}if(n!==null){n.return=r,Ht=n;break e}Ht=r}}}var u4={getCacheForType:function(e){var t=Qt(Lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Qt(Lt).controller.signal}},c4=typeof WeakMap=="function"?WeakMap:Map,Re=0,Xe=null,_e=null,Me=0,He=0,ja=null,yr=!1,is=!1,gx=!1,Vn=0,ft=0,Pr=0,wi=0,hx=0,Za=0,$l=0,vd=null,Aa=null,gh=!1,Yf=0,k1=0,Lf=1/0,kf=null,Ir=null,At=0,Mr=null,Ql=null,Bn=0,hh=0,xh=null,_1=null,Cd=0,bh=null;function Qa(){return(Re&2)!==0&&Me!==0?Me&-Me:ce.T!==null?bx():Py()}function I1(){if(Za===0)if((Me&536870912)===0||Ne){var e=Nc;Nc<<=1,(Nc&3932160)===0&&(Nc=262144),Za=e}else Za=536870912;return e=eo.current,e!==null&&(e.flags|=32),Za}function Da(e,t,a){(e===Xe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Jl(e,0),vr(e,Me,Za,!1)),Ud(e,a),((Re&2)===0||e!==Xe)&&(e===Xe&&((Re&2)===0&&(wi|=a),ft===4&&vr(e,Me,Za,!1)),sn(e))}function M1(e,t,a){if((Re&6)!==0)throw Error(Y(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Fd(e,t),n=o?m4(e,t):Mg(e,t,!0),r=o;do{if(n===0){is&&!o&&vr(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!f4(a)){n=Mg(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var l=e;n=vd;var s=l.current.memoizedState.isDehydrated;if(s&&(Jl(l,i).flags|=256),i=Mg(l,i,!1),i!==2){if(gx&&!s){l.errorRecoveryDisabledLanes|=r,wi|=r,n=4;break e}r=Aa,Aa=n,r!==null&&(Aa===null?Aa=r:Aa.push.apply(Aa,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){Jl(e,0),vr(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:vr(o,t,Za,!yr);break e;case 2:Aa=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(n=Yf+300-Wa(),10<n)){if(vr(o,t,Za,!yr),zf(o,0,!0)!==0)break e;Bn=t,o.timeoutHandle=Z1(Xw.bind(null,o,a,Aa,kf,gh,t,Za,wi,$l,yr,r,"Throttled",-0,0),n);break e}Xw(o,a,Aa,kf,gh,t,Za,wi,$l,yr,r,null,-0,0)}}break}while(!0);sn(e)}function Xw(e,t,a,o,n,r,i,l,s,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rn},v1(t,r,f);var g=(r&62914560)===r?Yf-Wa():(r&4194048)===r?k1-Wa():0;if(g=Z4(f,g),g!==null){Bn=r,e.cancelPendingCommit=g(Zw.bind(null,e,t,r,a,o,n,i,l,s,d,f,null,c,p)),vr(e,r,i,!u);return}}Zw(e,t,r,a,o,n,i,l,s)}function f4(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ja(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t,a,o){t&=~hx,t&=~wi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-$a(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&Ay(e,a,t)}function Zf(){return(Re&6)===0?(Yd(0,!1),!1):!0}function xx(){if(_e!==null){if(He===0)var e=_e.return;else e=_e,Pn=Ni=null,ax(e),ql=null,Ed=0,e=_e;for(;e!==null;)l1(e.alternate,e),e=e.return;_e=null}}function Jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,E4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Bn=0,xx(),Xe=e,_e=a=zn(e.current,null),Me=t,He=0,ja=null,yr=!1,is=Fd(e,t),gx=!1,$l=Za=hx=wi=Pr=ft=0,Aa=vd=null,gh=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-$a(o),r=1<<n;t|=e[n],o&=~r}return Vn=t,Ff(),a}function N1(e,t){xe=null,ce.H=Ad,t===rs||t===qf?(t=Lw(),He=3):t===Wh?(t=Lw(),He=4):He=t===cx?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ja=t,_e===null&&(ft=1,vf(e,yo(t,e.current)))}function E1(){var e=eo.current;return e===null?!0:(Me&4194048)===Me?Co===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Co:!1}function T1(){var e=ce.H;return ce.H=Ad,e===null?Ad:e}function A1(){var e=ce.A;return ce.A=u4,e}function _f(){ft=4,yr||(Me&4194048)!==Me&&eo.current!==null||(is=!0),(Pr&134217727)===0&&(wi&134217727)===0||Xe===null||vr(Xe,Me,Za,!1)}function Mg(e,t,a){var o=Re;Re|=2;var n=T1(),r=A1();(Xe!==e||Me!==t)&&(kf=null,Jl(e,t)),t=!1;var i=ft;e:do try{if(He!==0&&_e!==null){var l=_e,s=ja;switch(He){case 8:xx(),i=6;break e;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var u=He;if(He=0,ja=null,Ol(e,l,s,u),a&&is){i=0;break e}break;default:u=He,He=0,ja=null,Ol(e,l,s,u)}}p4(),i=ft;break}catch(d){N1(e,d)}while(!0);return t&&e.shellSuspendCounter++,Pn=Ni=null,Re=o,ce.H=n,ce.A=r,_e===null&&(Xe=null,Me=0,Ff()),i}function p4(){for(;_e!==null;)D1(_e)}function m4(e,t){var a=Re;Re|=2;var o=T1(),n=A1();Xe!==e||Me!==t?(kf=null,Lf=Wa()+500,Jl(e,t)):is=Fd(e,t);e:do try{if(He!==0&&_e!==null){t=_e;var r=ja;t:switch(He){case 1:He=0,ja=null,Ol(e,t,r,1);break;case 2:case 9:if(Sw(r)){He=0,ja=null,Yw(t);break}t=function(){He!==2&&He!==9||Xe!==e||(He=7),sn(e)},r.then(t,t);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:Sw(r)?(He=0,ja=null,Yw(t)):(He=0,ja=null,Ol(e,t,r,7));break;case 5:var i=null;switch(_e.tag){case 26:i=_e.memoizedState;case 5:case 27:var l=_e;if(i?J1(i):l.stateNode.complete){He=0,ja=null;var s=l.sibling;if(s!==null)_e=s;else{var u=l.return;u!==null?(_e=u,Wf(u)):_e=null}break t}}He=0,ja=null,Ol(e,t,r,5);break;case 6:He=0,ja=null,Ol(e,t,r,6);break;case 8:xx(),ft=6;break e;default:throw Error(Y(462))}}g4();break}catch(d){N1(e,d)}while(!0);return Pn=Ni=null,ce.H=o,ce.A=n,Re=a,_e!==null?0:(Xe=null,Me=0,Ff(),ft)}function g4(){for(;_e!==null&&!BN();)D1(_e)}function D1(e){var t=i1(e.alternate,e,Vn);e.memoizedProps=e.pendingProps,t===null?Wf(e):_e=t}function Yw(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Fw(a,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=Fw(a,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:ax(t);default:l1(a,t),t=_e=lv(t,Vn),t=i1(a,t,Vn)}e.memoizedProps=e.pendingProps,t===null?Wf(e):_e=t}function Ol(e,t,a,o){Pn=Ni=null,ax(t),ql=null,Ed=0;var n=t.return;try{if(o4(e,n,t,a,Me)){ft=1,vf(e,yo(a,e.current)),_e=null;return}}catch(r){if(n!==null)throw _e=n,r;ft=1,vf(e,yo(a,e.current)),_e=null;return}t.flags&32768?(Ne||o===1?e=!0:is||(Me&536870912)!==0?e=!1:(yr=e=!0,(o===2||o===9||o===3||o===6)&&(o=eo.current,o!==null&&o.tag===13&&(o.flags|=16384))),R1(t,e)):Wf(t)}function Wf(e){var t=e;do{if((t.flags&32768)!==0){R1(t,yr);return}e=t.return;var a=i4(t.alternate,t,Vn);if(a!==null){_e=a;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);ft===0&&(ft=5)}function R1(e,t){do{var a=l4(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);ft=6,_e=null}function Zw(e,t,a,o,n,r,i,l,s){e.cancelPendingCommit=null;do Kf();while(At!==0);if((Re&6)!==0)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=qh,ZN(e,a,r,i,l,s),e===Xe&&(_e=Xe=null,Me=0),Ql=t,Mr=e,Bn=a,hh=r,xh=n,_1=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,w4(uf,function(){return H1(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=ce.T,ce.T=null,n=Pe.p,Pe.p=2,i=Re,Re|=4;try{s4(e,t,a)}finally{Re=i,Pe.p=n,ce.T=o}}At=1,P1(),z1(),O1()}}function P1(){if(At===1){At=0;var e=Mr,t=Ql,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=ce.T,ce.T=null;var o=Pe.p;Pe.p=2;var n=Re;Re|=4;try{b1(t,e);var r=Ch,i=Jy(e.containerInfo),l=r.focusedElem,s=r.selectionRange;if(i!==l&&l&&l.ownerDocument&&Qy(l.ownerDocument.documentElement,l)){if(s!==null&&Uh(l)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(d,l.value.length);else{var f=l.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=l.textContent.length,w=Math.min(s.start,g),y=s.end===void 0?w:Math.min(s.end,g);!p.extend&&w>y&&(i=y,y=w,w=i);var x=hw(l,w),b=hw(l,y);if(x&&b&&(p.rangeCount!==1||p.anchorNode!==x.node||p.anchorOffset!==x.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var m=f.createRange();m.setStart(x.node,x.offset),p.removeAllRanges(),w>y?(p.addRange(m),p.extend(b.node,b.offset)):(m.setEnd(b.node,b.offset),p.addRange(m))}}}}for(f=[],p=l;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var h=f[l];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}Rf=!!vh,Ch=vh=null}finally{Re=n,Pe.p=o,ce.T=a}}e.current=t,At=2}}function z1(){if(At===2){At=0;var e=Mr,t=Ql,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=ce.T,ce.T=null;var o=Pe.p;Pe.p=2;var n=Re;Re|=4;try{p1(e,t.alternate,t)}finally{Re=n,Pe.p=o,ce.T=a}}At=3}}function O1(){if(At===4||At===3){At=0,HN();var e=Mr,t=Ql,a=Bn,o=_1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?At=5:(At=0,Ql=Mr=null,B1(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ir=null),Rh(a),t=t.stateNode,Ka&&typeof Ka.onCommitFiberRoot=="function")try{Ka.onCommitFiberRoot(Hd,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=ce.T,n=Pe.p,Pe.p=2,ce.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var l=o[i];r(l.value,{componentStack:l.stack})}}finally{ce.T=t,Pe.p=n}}(Bn&3)!==0&&Kf(),sn(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===bh?Cd++:(Cd=0,bh=e):Cd=0,Yd(0,!1)}}function B1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gd(t)))}function Kf(){return P1(),z1(),O1(),H1()}function H1(){if(At!==5)return!1;var e=Mr,t=hh;hh=0;var a=Rh(Bn),o=ce.T,n=Pe.p;try{Pe.p=32>a?32:a,ce.T=null,a=xh,xh=null;var r=Mr,i=Bn;if(At=0,Ql=Mr=null,Bn=0,(Re&6)!==0)throw Error(Y(331));var l=Re;if(Re|=4,S1(r.current),y1(r,r.current,i,a),Re=l,Yd(0,!1),Ka&&typeof Ka.onPostCommitFiberRoot=="function")try{Ka.onPostCommitFiberRoot(Hd,r)}catch{}return!0}finally{Pe.p=n,ce.T=o,B1(e,t)}}function Ww(e,t,a){t=yo(a,t),t=ch(e.stateNode,t,2),e=_r(e,t,2),e!==null&&(Ud(e,2),sn(e))}function Fe(e,t,a){if(e.tag===3)Ww(e,e,a);else for(;t!==null;){if(t.tag===3){Ww(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ir===null||!Ir.has(o))){e=yo(a,e),a=e1(2),o=_r(t,a,2),o!==null&&(t1(a,o,t,e),Ud(o,2),sn(o));break}}t=t.return}}function Ng(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new c4;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(gx=!0,n.add(a),e=h4.bind(null,e,t,a),t.then(e,e))}function h4(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Me&a)===a&&(ft===4||ft===3&&(Me&62914560)===Me&&300>Wa()-Yf?(Re&2)===0&&Jl(e,0):hx|=a,$l===Me&&($l=0)),sn(e)}function F1(e,t){t===0&&(t=Ty()),e=Mi(e,t),e!==null&&(Ud(e,t),sn(e))}function x4(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),F1(e,a)}function b4(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(Y(314))}o!==null&&o.delete(t),F1(e,a)}function w4(e,t){return Ah(e,t)}var If=null,kl=null,wh=!1,Mf=!1,Eg=!1,Cr=0;function sn(e){e!==kl&&e.next===null&&(kl===null?If=kl=e:kl=kl.next=e),Mf=!0,wh||(wh=!0,v4())}function Yd(e,t){if(!Eg&&Mf){Eg=!0;do for(var a=!1,o=If;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,l=o.pingedLanes;r=(1<<31-$a(42|e)+1)-1,r&=n&~(i&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Kw(o,r))}else r=Me,r=zf(o,o===Xe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Fd(o,r)||(a=!0,Kw(o,r));o=o.next}while(a);Eg=!1}}function y4(){U1()}function U1(){Mf=wh=!1;var e=0;Cr!==0&&N4()&&(e=Cr);for(var t=Wa(),a=null,o=If;o!==null;){var n=o.next,r=q1(o,t);r===0?(o.next=null,a===null?If=n:a.next=n,n===null&&(kl=a)):(a=o,(e!==0||(r&3)!==0)&&(Mf=!0)),o=n}At!==0&&At!==5||Yd(e,!1),Cr!==0&&(Cr=0)}function q1(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-$a(r),l=1<<i,s=n[i];s===-1?((l&a)===0||(l&o)!==0)&&(n[i]=YN(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}if(t=Xe,a=Me,a=zf(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&rg(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fd(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&rg(o),Rh(a)){case 2:case 8:a=Ny;break;case 32:a=uf;break;case 268435456:a=Ey;break;default:a=uf}return o=V1.bind(null,e),a=Ah(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&rg(o),e.callbackPriority=2,e.callbackNode=null,2}function V1(e,t){if(At!==0&&At!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kf()&&e.callbackNode!==a)return null;var o=Me;return o=zf(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(M1(e,o,t),q1(e,Wa()),e.callbackNode!=null&&e.callbackNode===a?V1.bind(null,e):null)}function Kw(e,t){if(Kf())return null;M1(e,t,!0)}function v4(){T4(function(){(Re&6)!==0?Ah(My,y4):U1()})}function bx(){if(Cr===0){var e=Zl;e===0&&(e=Mc,Mc<<=1,(Mc&261888)===0&&(Mc=256)),Cr=e}return Cr}function $w(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xc(""+e)}function Qw(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function C4(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=$w((n[Ra]||null).action),i=o.submitter;i&&(t=(t=i[Ra]||null)?$w(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var l=new Of("action","action",null,o,n);e.push({event:l,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Cr!==0){var s=i?Qw(n,i):new FormData(n);dh(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(l.preventDefault(),s=i?Qw(n,i):new FormData(n),dh(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Fc=0;Fc<$g.length;Fc++)Uc=$g[Fc],Jw=Uc.toLowerCase(),ey=Uc[0].toUpperCase()+Uc.slice(1),zo(Jw,"on"+ey);var Uc,Jw,ey,Fc;zo(tv,"onAnimationEnd");zo(av,"onAnimationIteration");zo(ov,"onAnimationStart");zo("dblclick","onDoubleClick");zo("focusin","onFocus");zo("focusout","onBlur");zo(F3,"onTransitionRun");zo(U3,"onTransitionStart");zo(q3,"onTransitionCancel");zo(nv,"onTransitionEnd");Xl("onMouseEnter",["mouseout","mouseover"]);Xl("onMouseLeave",["mouseout","mouseover"]);Xl("onPointerEnter",["pointerout","pointerover"]);Xl("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dd));function G1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){ff(d)}n.currentTarget=null,r=s}else for(i=0;i<o.length;i++){if(l=o[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){ff(d)}n.currentTarget=null,r=s}}}}function ke(e,t){var a=t[Vg];a===void 0&&(a=t[Vg]=new Set);var o=e+"__bubble";a.has(o)||(j1(t,e,2,!1),a.add(o))}function Tg(e,t,a){var o=0;t&&(o|=4),j1(a,e,o,t)}var qc="_reactListening"+Math.random().toString(36).slice(2);function wx(e){if(!e[qc]){e[qc]=!0,zy.forEach(function(a){a!=="selectionchange"&&(S4.has(a)||Tg(a,!1,e),Tg(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qc]||(t[qc]=!0,Tg("selectionchange",!1,t))}}function j1(e,t,a,o){switch(n2(t)){case 2:var n=$4;break;case 8:n=Q4;break;default:n=Sx}a=n.bind(null,t,a,e),n=void 0,!Zg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ag(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===n)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;l!==null;){if(i=Ml(l),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){o=r=i;continue e}l=l.parentNode}}o=o.return}Gy(function(){var u=r,d=Oh(a),f=[];e:{var c=rv.get(e);if(c!==void 0){var p=Of,g=e;switch(e){case"keypress":if(Zc(a)===0)break e;case"keydown":case"keyup":p=b3;break;case"focusin":g="focus",p=ug;break;case"focusout":g="blur",p=ug;break;case"beforeblur":case"afterblur":p=ug;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=i3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=v3;break;case tv:case av:case ov:p=d3;break;case nv:p=S3;break;case"scroll":case"scrollend":p=n3;break;case"wheel":p=k3;break;case"copy":case"cut":case"paste":p=c3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dw;break;case"toggle":case"beforetoggle":p=I3}var w=(t&4)!==0,y=!w&&(e==="scroll"||e==="scrollend"),x=w?c!==null?c+"Capture":null:c;w=[];for(var b=u,m;b!==null;){var h=b;if(m=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||m===null||x===null||(h=kd(b,x),h!=null&&w.push(Rd(b,h,m))),y)break;b=b.return}0<w.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Yg&&(g=a.relatedTarget||a.fromElement)&&(Ml(g)||g[as]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?Ml(g):null,g!==null&&(y=Bd(g),w=g.tag,g!==y||w!==5&&w!==27&&w!==6)&&(g=null)):(p=null,g=u),p!==g)){if(w=lw,h="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=dw,h="onPointerLeave",x="onPointerEnter",b="pointer"),y=p==null?c:sd(p),m=g==null?c:sd(g),c=new w(h,b+"leave",p,a,d),c.target=y,c.relatedTarget=m,h=null,Ml(d)===u&&(w=new w(x,b+"enter",g,a,d),w.target=m,w.relatedTarget=y,h=w),y=h,p&&g)t:{for(w=L4,x=p,b=g,m=0,h=x;h;h=w(h))m++;h=0;for(var v=b;v;v=w(v))h++;for(;0<m-h;)x=w(x),m--;for(;0<h-m;)b=w(b),h--;for(;m--;){if(x===b||b!==null&&x===b.alternate){w=x;break t}x=w(x),b=w(b)}w=null}else w=null;p!==null&&ty(f,c,p,w,!1),g!==null&&y!==null&&ty(f,y,g,w,!0)}}e:{if(c=u?sd(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=pw;else if(fw(c))if(Ky)C=O3;else{C=P3;var S=R3}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&zh(u.elementType)&&(C=pw):C=z3;if(C&&(C=C(e,u))){Wy(f,C,a,d);break e}S&&S(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Xg(c,"number",c.value)}switch(S=u?sd(u):window,e){case"focusin":(fw(S)||S.contentEditable==="true")&&(Tl=S,Wg=u,pd=null);break;case"focusout":pd=Wg=Tl=null;break;case"mousedown":Kg=!0;break;case"contextmenu":case"mouseup":case"dragend":Kg=!1,xw(f,a,d);break;case"selectionchange":if(H3)break;case"keydown":case"keyup":xw(f,a,d)}var L;if(Fh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else El?Yy(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Xy&&a.locale!=="ko"&&(El||_!=="onCompositionStart"?_==="onCompositionEnd"&&El&&(L=jy()):(wr=d,Bh="value"in wr?wr.value:wr.textContent,El=!0)),S=Nf(u,_),0<S.length&&(_=new sw(_,e,null,a,d),f.push({event:_,listeners:S}),L?_.data=L:(L=Zy(a),L!==null&&(_.data=L)))),(L=N3?E3(e,a):T3(e,a))&&(_=Nf(u,"onBeforeInput"),0<_.length&&(S=new sw("onBeforeInput","beforeinput",null,a,d),f.push({event:S,listeners:_}),S.data=L)),C4(f,e,u,a,d)}G1(f,t)})}function Rd(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nf(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=kd(e,a),n!=null&&o.unshift(Rd(e,n,r)),n=kd(e,t),n!=null&&o.push(Rd(e,n,r))),e.tag===3)return o;e=e.return}return[]}function L4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ty(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var l=a,s=l.alternate,u=l.stateNode;if(l=l.tag,s!==null&&s===o)break;l!==5&&l!==26&&l!==27||u===null||(s=u,n?(u=kd(a,r),u!=null&&i.unshift(Rd(a,u,s))):n||(u=kd(a,r),u!=null&&i.push(Rd(a,u,s)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var k4=/\r\n?/g,_4=/\u0000|\uFFFD/g;function ay(e){return(typeof e=="string"?e:""+e).replace(k4,`
`).replace(_4,"")}function X1(e,t){return t=ay(t),ay(e)===t}function Ve(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Yl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Yl(e,""+o);break;case"className":Tc(e,"class",o);break;case"tabIndex":Tc(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Tc(e,a,o);break;case"style":Vy(e,o,r);break;case"data":if(t!=="object"){Tc(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xc(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ve(e,t,"name",n.name,n,null),Ve(e,t,"formEncType",n.formEncType,n,null),Ve(e,t,"formMethod",n.formMethod,n,null),Ve(e,t,"formTarget",n.formTarget,n,null)):(Ve(e,t,"encType",n.encType,n,null),Ve(e,t,"method",n.method,n,null),Ve(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xc(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Rn);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(Y(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(Y(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Xc(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ke("beforetoggle",e),ke("toggle",e),jc(e,"popover",o);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jc(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=a3.get(a)||a,jc(e,a,o))}}function yh(e,t,a,o,n,r){switch(a){case"style":Vy(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(Y(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(Y(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Yl(e,o):(typeof o=="number"||typeof o=="bigint")&&Yl(e,""+o);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Rn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Ra]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jc(e,a,o)}}}function Jt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:Ve(e,t,r,i,a,null)}}n&&Ve(e,t,"srcSet",a.srcSet,a,null),o&&Ve(e,t,"src",a.src,a,null);return;case"input":ke("invalid",e);var l=r=i=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Y(137,t));break;default:Ve(e,t,o,d,a,null)}}Fy(e,r,l,s,u,i,n,!1);return;case"select":ke("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(l=a[n],l!=null))switch(n){case"value":r=l;break;case"defaultValue":i=l;break;case"multiple":o=l;default:Ve(e,t,n,l,a,null)}t=r,a=i,e.multiple=!!o,t!=null?Hl(e,!!o,t,!1):a!=null&&Hl(e,!!o,a,!0);return;case"textarea":ke("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(l=a[i],l!=null))switch(i){case"value":o=l;break;case"defaultValue":n=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(Y(91));break;default:Ve(e,t,i,l,a,null)}qy(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,t,s,o,a,null));return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(o=0;o<Dd.length;o++)ke(Dd[o],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:Ve(e,t,u,o,a,null)}return;default:if(zh(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&yh(e,t,d,o,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null&&Ve(e,t,l,o,a,null))}function I4(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,l=null,s=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Ve(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==f&&Ve(e,t,c,p,o,f)}}jg(e,i,l,s,u,d,r,n);return;case"select":p=i=l=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Ve(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":l=r;break;case"multiple":i=r;default:r!==s&&Ve(e,t,n,r,o,s)}t=l,a=i,o=p,c!=null?Hl(e,!!a,c,!1):!!o!=!!a&&(t!=null?Hl(e,!!a,t,!0):Hl(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(l in a)if(n=a[l],a.hasOwnProperty(l)&&n!=null&&!o.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Ve(e,t,l,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(Y(91));break;default:n!==r&&Ve(e,t,i,n,o,r)}Uy(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ve(e,t,g,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Ve(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&Ve(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(Y(137,t));break;default:Ve(e,t,u,c,o,p)}return;default:if(zh(t)){for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!==void 0&&!o.hasOwnProperty(y)&&yh(e,t,y,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||yh(e,t,d,c,o,p);return}}for(var x in a)c=a[x],a.hasOwnProperty(x)&&c!=null&&!o.hasOwnProperty(x)&&Ve(e,t,x,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Ve(e,t,f,c,o,p)}function oy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,l=n.duration;if(r&&l&&oy(i)){for(i=0,l=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>l)break;var d=s.transferSize,f=s.initiatorType;d&&oy(f)&&(s=s.responseEnd,i+=d*(s<l?1:(l-u)/(s-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vh=null,Ch=null;function Ef(e){return e.nodeType===9?e:e.ownerDocument}function ny(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dg=null;function N4(){var e=window.event;return e&&e.type==="popstate"?e===Dg?!1:(Dg=e,!0):(Dg=null,!1)}var Z1=typeof setTimeout=="function"?setTimeout:void 0,E4=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,T4=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(e){return ry.resolve(null).then(e).catch(A4)}:Z1;function A4(e){setTimeout(function(){throw e})}function Or(e){return e==="head"}function iy(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),ts(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Sd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sd(a);for(var r=a.firstChild;r;){var i=r.nextSibling,l=r.nodeName;r[qd]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&Sd(e.ownerDocument.body);a=n}while(a);ts(t)}function ly(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Lh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lh(a),Ph(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function D4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[qd])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=So(e.nextSibling),e===null)break}return null}function R4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=So(e.nextSibling),e===null))return null;return e}function W1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=So(e.nextSibling),e===null))return null;return e}function kh(e){return e.data==="$?"||e.data==="$~"}function _h(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function P4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function So(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ih=null;function sy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return So(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function dy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function K1(e,t,a){switch(t=Ef(a),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function Sd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ph(e)}var Lo=new Map,uy=new Set;function Tf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=Pe.d;Pe.d={f:z4,r:O4,D:B4,C:H4,L:F4,m:U4,X:V4,S:q4,M:G4};function z4(){var e=Gn.f(),t=Zf();return e||t}function O4(e){var t=os(e);t!==null&&t.tag===5&&t.type==="form"?Vv(t):Gn.r(e)}var ls=typeof document>"u"?null:document;function $1(e,t,a){var o=ls;if(o&&typeof t=="string"&&t){var n=wo(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),uy.has(n)||(uy.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Jt(t,"link",e),Ft(t),o.head.appendChild(t)))}}function B4(e){Gn.D(e),$1("dns-prefetch",e,null)}function H4(e,t){Gn.C(e,t),$1("preconnect",e,t)}function F4(e,t,a){Gn.L(e,t,a);var o=ls;if(o&&e&&t){var n='link[rel="preload"][as="'+wo(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+wo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+wo(a.imageSizes)+'"]')):n+='[href="'+wo(e)+'"]';var r=n;switch(t){case"style":r=es(e);break;case"script":r=ss(e)}Lo.has(r)||(e=ot({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Lo.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Zd(r))||t==="script"&&o.querySelector(Wd(r))||(t=o.createElement("link"),Jt(t,"link",e),Ft(t),o.head.appendChild(t)))}}function U4(e,t){Gn.m(e,t);var a=ls;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+wo(o)+'"][href="'+wo(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ss(e)}if(!Lo.has(r)&&(e=ot({rel:"modulepreload",href:e},t),Lo.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wd(r)))return}o=a.createElement("link"),Jt(o,"link",e),Ft(o),a.head.appendChild(o)}}}function q4(e,t,a){Gn.S(e,t,a);var o=ls;if(o&&e){var n=Bl(o).hoistableStyles,r=es(e);t=t||"default";var i=n.get(r);if(!i){var l={loading:0,preload:null};if(i=o.querySelector(Zd(r)))l.loading=5;else{e=ot({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Lo.get(r))&&yx(e,a);var s=i=o.createElement("link");Ft(s),Jt(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,af(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:l},n.set(r,i)}}}function V4(e,t){Gn.X(e,t);var a=ls;if(a&&e){var o=Bl(a).hoistableScripts,n=ss(e),r=o.get(n);r||(r=a.querySelector(Wd(n)),r||(e=ot({src:e,async:!0},t),(t=Lo.get(n))&&vx(e,t),r=a.createElement("script"),Ft(r),Jt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function G4(e,t){Gn.M(e,t);var a=ls;if(a&&e){var o=Bl(a).hoistableScripts,n=ss(e),r=o.get(n);r||(r=a.querySelector(Wd(n)),r||(e=ot({src:e,async:!0,type:"module"},t),(t=Lo.get(n))&&vx(e,t),r=a.createElement("script"),Ft(r),Jt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function cy(e,t,a,o){var n=(n=Sr.current)?Tf(n):null;if(!n)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=es(a.href),a=Bl(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=es(a.href);var r=Bl(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Zd(e)))&&!r._p&&(i.instance=r,i.state.loading=5),Lo.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Lo.set(e,a),r||j4(n,e,a,i.state))),t&&o===null)throw Error(Y(528,""));return i}if(t&&o!==null)throw Error(Y(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ss(a),a=Bl(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function es(e){return'href="'+wo(e)+'"'}function Zd(e){return'link[rel="stylesheet"]['+e+"]"}function Q1(e){return ot({},e,{"data-precedence":e.precedence,precedence:null})}function j4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Jt(t,"link",a),Ft(t),e.head.appendChild(t))}function ss(e){return'[src="'+wo(e)+'"]'}function Wd(e){return"script[async]"+e}function fy(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+wo(a.href)+'"]');if(o)return t.instance=o,Ft(o),o;var n=ot({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ft(o),Jt(o,"style",n),af(o,a.precedence,e),t.instance=o;case"stylesheet":n=es(a.href);var r=e.querySelector(Zd(n));if(r)return t.state.loading|=4,t.instance=r,Ft(r),r;o=Q1(a),(n=Lo.get(n))&&yx(o,n),r=(e.ownerDocument||e).createElement("link"),Ft(r);var i=r;return i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),Jt(r,"link",o),t.state.loading|=4,af(r,a.precedence,e),t.instance=r;case"script":return r=ss(a.src),(n=e.querySelector(Wd(r)))?(t.instance=n,Ft(n),n):(o=a,(n=Lo.get(r))&&(o=ot({},a),vx(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ft(n),Jt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,af(o,a.precedence,e));return t.instance}function af(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var l=o[i];if(l.dataset.precedence===t)r=l;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var of=null;function py(e,t,a){if(of===null){var o=new Map,n=of=new Map;n.set(a,o)}else n=of,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[qd]||r[Kt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var l=o.get(i);l?l.push(r):o.set(i,[r])}}return o}function my(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function X4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function J1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Y4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=es(o.href),r=t.querySelector(Zd(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Af.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ft(r);return}r=t.ownerDocument||t,o=Q1(o),(n=Lo.get(n))&&yx(o,n),r=r.createElement("link"),Ft(r);var i=r;i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),Jt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Af.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Rg=0;function Z4(e,t){return e.stylesheets&&e.count===0&&nf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&nf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Rg===0&&(Rg=62500*M4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nf(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Rg?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function Af(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Df=null;function nf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Df=new Map,t.forEach(W4,e),Df=null,Af.call(e))}function W4(e,t){if(!(t.state.loading&4)){var a=Df.get(e);if(a)var o=a.get(null);else{a=new Map,Df.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=Af.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Pd={$$typeof:Dn,Provider:null,Consumer:null,_currentValue:gi,_currentValue2:gi,_threadCount:0};function K4(e,t,a,o,n,r,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ig(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ig(0),this.hiddenUpdates=ig(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function e2(e,t,a,o,n,r,i,l,s,u,d,f){return e=new K4(e,t,a,i,s,u,d,f,l),t=1,r===!0&&(t|=24),r=Ya(3,null,null,t),e.current=r,r.stateNode=e,t=Yh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Kh(r),e}function t2(e){return e?(e=Rl,e):Rl}function a2(e,t,a,o,n,r){n=t2(n),o.context===null?o.context=n:o.pendingContext=n,o=kr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=_r(e,o,t),a!==null&&(Da(a,e,t),gd(a,e,t))}function gy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Cx(e,t){gy(e,t),(e=e.alternate)&&gy(e,t)}function o2(e){if(e.tag===13||e.tag===31){var t=Mi(e,67108864);t!==null&&Da(t,e,67108864),Cx(e,67108864)}}function hy(e){if(e.tag===13||e.tag===31){var t=Qa();t=Dh(t);var a=Mi(e,t);a!==null&&Da(a,e,t),Cx(e,t)}}var Rf=!0;function $4(e,t,a,o){var n=ce.T;ce.T=null;var r=Pe.p;try{Pe.p=2,Sx(e,t,a,o)}finally{Pe.p=r,ce.T=n}}function Q4(e,t,a,o){var n=ce.T;ce.T=null;var r=Pe.p;try{Pe.p=8,Sx(e,t,a,o)}finally{Pe.p=r,ce.T=n}}function Sx(e,t,a,o){if(Rf){var n=Mh(o);if(n===null)Ag(e,t,o,Pf,a),xy(e,o);else if(eE(n,e,t,a,o))o.stopPropagation();else if(xy(e,o),t&4&&-1<J4.indexOf(e)){for(;n!==null;){var r=os(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=fi(r.pendingLanes);if(i!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-$a(i);l.entanglements[1]|=s,i&=~s}sn(r),(Re&6)===0&&(Lf=Wa()+500,Yd(0,!1))}}break;case 31:case 13:l=Mi(r,2),l!==null&&Da(l,r,2),Zf(),Cx(r,2)}if(r=Mh(o),r===null&&Ag(e,t,o,Pf,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Ag(e,t,o,null,a)}}function Mh(e){return e=Oh(e),Lx(e)}var Pf=null;function Lx(e){if(Pf=null,e=Ml(e),e!==null){var t=Bd(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Sy(t),e!==null)return e;e=null}else if(a===31){if(e=Ly(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pf=e,null}function n2(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(FN()){case My:return 2;case Ny:return 8;case uf:case UN:return 32;case Ey:return 268435456;default:return 32}default:return 32}}var Nh=!1,Nr=null,Er=null,Tr=null,zd=new Map,Od=new Map,xr=[],J4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xy(e,t){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":zd.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Od.delete(t.pointerId)}}function nd(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=os(t),t!==null&&o2(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function eE(e,t,a,o,n){switch(t){case"focusin":return Nr=nd(Nr,e,t,a,o,n),!0;case"dragenter":return Er=nd(Er,e,t,a,o,n),!0;case"mouseover":return Tr=nd(Tr,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return zd.set(r,nd(zd.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Od.set(r,nd(Od.get(r)||null,e,t,a,o,n)),!0}return!1}function r2(e){var t=Ml(e.target);if(t!==null){var a=Bd(t);if(a!==null){if(t=a.tag,t===13){if(t=Sy(a),t!==null){e.blockedOn=t,ew(e.priority,function(){hy(a)});return}}else if(t===31){if(t=Ly(a),t!==null){e.blockedOn=t,ew(e.priority,function(){hy(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Mh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yg=o,a.target.dispatchEvent(o),Yg=null}else return t=os(a),t!==null&&o2(t),e.blockedOn=a,!1;t.shift()}return!0}function by(e,t,a){rf(e)&&a.delete(t)}function tE(){Nh=!1,Nr!==null&&rf(Nr)&&(Nr=null),Er!==null&&rf(Er)&&(Er=null),Tr!==null&&rf(Tr)&&(Tr=null),zd.forEach(by),Od.forEach(by)}function Vc(e,t){e.blockedOn===t&&(e.blockedOn=null,Nh||(Nh=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,tE)))}var Gc=null;function wy(e){Gc!==e&&(Gc=e,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(Lx(o||a)===null)continue;break}var r=os(a);r!==null&&(e.splice(t,3),t-=3,dh(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function ts(e){function t(s){return Vc(s,e)}Nr!==null&&Vc(Nr,e),Er!==null&&Vc(Er,e),Tr!==null&&Vc(Tr,e),zd.forEach(t),Od.forEach(t);for(var a=0;a<xr.length;a++){var o=xr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)r2(a),a.blockedOn===null&&xr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[Ra]||null;if(typeof r=="function")i||wy(a);else if(i){var l=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[Ra]||null)l=i.formAction;else if(Lx(n)!==null)continue}else l=i.action;typeof l=="function"?a[o+1]=l:(a.splice(o,3),o-=3),wy(a)}}}function i2(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function kx(e){this._internalRoot=e}$f.prototype.render=kx.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var a=t.current,o=Qa();a2(a,o,e,t,null,null)};$f.prototype.unmount=kx.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;a2(e.current,2,null,e,null,null),Zf(),t[as]=null}};function $f(e){this._internalRoot=e}$f.prototype.unstable_scheduleHydration=function(e){if(e){var t=Py();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xr.length&&t!==0&&t<xr[a].priority;a++);xr.splice(a,0,e),a===0&&r2(e)}};var yy=vy.version;if(yy!=="19.2.8")throw Error(Y(527,yy,"19.2.8"));Pe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=DN(t),e=e!==null?ky(e):null,e=e===null?null:e.stateNode,e};var aE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:ce,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(rd=__REACT_DEVTOOLS_GLOBAL_HOOK__,!rd.isDisabled&&rd.supportsFiber))try{Hd=rd.inject(aE),Ka=rd}catch{}var rd;Qf.createRoot=function(e,t){if(!Cy(e))throw Error(Y(299));var a=!1,o="",n=$v,r=Qv,i=Jv;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=e2(e,1,!1,null,null,a,o,null,n,r,i,i2),e[as]=t.current,wx(e),new kx(t)};Qf.hydrateRoot=function(e,t,a){if(!Cy(e))throw Error(Y(299));var o=!1,n="",r=$v,i=Qv,l=Jv,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=e2(e,1,!0,t,a??null,o,n,s,r,i,l,i2),t.context=t2(null),a=t.current,o=Qa(),o=Dh(o),n=kr(o),n.callback=null,_r(a,n,o),a=o,t.current.lanes=a,Ud(t,a),sn(t),e[as]=t.current,wx(e),new $f(t)};Qf.version="19.2.8"});var _x=Ma((cO,d2)=>{"use strict";function s2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s2)}catch(e){console.error(e)}}s2(),d2.exports=l2()});var c2=Ma(Jf=>{"use strict";var oE=Symbol.for("react.transitional.element"),nE=Symbol.for("react.fragment");function u2(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:oE,type:e,key:o,ref:t!==void 0?t:null,props:a}}Jf.Fragment=nE;Jf.jsx=u2;Jf.jsxs=u2});var X=Ma((pO,f2)=>{"use strict";f2.exports=c2()});var KS=Ma(WS=>{"use strict";var Ls=Q();function QA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var JA=typeof Object.is=="function"?Object.is:QA,e6=Ls.useState,t6=Ls.useEffect,a6=Ls.useLayoutEffect,o6=Ls.useDebugValue;function n6(e,t){var a=t(),o=e6({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return a6(function(){n.value=a,n.getSnapshot=t,gb(n)&&r({inst:n})},[e,a,t]),t6(function(){return gb(n)&&r({inst:n}),e(function(){gb(n)&&r({inst:n})})},[e]),o6(a),a}function gb(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!JA(e,a)}catch{return!0}}function r6(e,t){return t()}var i6=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?r6:n6;WS.useSyncExternalStore=Ls.useSyncExternalStore!==void 0?Ls.useSyncExternalStore:i6});var QS=Ma((iq,$S)=>{"use strict";$S.exports=KS()});var eL=Ma(JS=>{"use strict";var Gp=Q(),l6=QS();function s6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d6=typeof Object.is=="function"?Object.is:s6,u6=l6.useSyncExternalStore,c6=Gp.useRef,f6=Gp.useEffect,p6=Gp.useMemo,m6=Gp.useDebugValue;JS.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=c6(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=p6(function(){function s(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var g=i.value;if(n(g,p))return f=g}return f=p}if(g=f,d6(d,p))return g;var w=o(p);return n!==void 0&&n(g,w)?(d=p,g):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var l=u6(e,r[0],r[1]);return f6(function(){i.hasValue=!0,i.value=l},[l]),m6(l),l}});var aL=Ma((sq,tL)=>{"use strict";tL.exports=eL()});var aO={};uN(aO,{mountCanvas:()=>J9,unmountCanvas:()=>tO,updateCanvas:()=>eO});var pM=E(_x(),1);var Xs=E(Q(),1);var je=E(Q(),1);var q=E(X()),V=E(Q());function pt(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=pt(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var rE={value:()=>{}};function m2(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new ep(a)}function ep(e){this._=e}function iE(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}ep.prototype=m2.prototype={constructor:ep,on:function(e,t){var a=this._,o=iE(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=lE(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=p2(a[n],e.name,t);else if(t==null)for(n in a)a[n]=p2(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new ep(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function lE(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function p2(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=rE,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Ei=m2;var tp="http://www.w3.org/1999/xhtml",Ix={svg:"http://www.w3.org/2000/svg",xhtml:tp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function jn(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),Ix.hasOwnProperty(t)?{space:Ix[t],local:e}:e}function sE(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===tp&&t.documentElement.namespaceURI===tp?t.createElement(e):t.createElementNS(a,e)}}function dE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function ap(e){var t=jn(e);return(t.local?dE:sE)(t)}function uE(){}function Ti(e){return e==null?uE:function(){return this.querySelector(e)}}function g2(e){typeof e!="function"&&(e=Ti(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=new Array(i),s,u,d=0;d<i;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),l[d]=u);return new mt(o,this._parents)}function Mx(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function cE(){return[]}function Kd(e){return e==null?cE:function(){return this.querySelectorAll(e)}}function fE(e){return function(){return Mx(e.apply(this,arguments))}}function h2(e){typeof e=="function"?e=fE(e):e=Kd(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&(o.push(e.call(s,s.__data__,u,i)),n.push(s));return new mt(o,n)}function $d(e){return function(){return this.matches(e)}}function op(e){return function(t){return t.matches(e)}}var pE=Array.prototype.find;function mE(e){return function(){return pE.call(this.children,e)}}function gE(){return this.firstElementChild}function x2(e){return this.select(e==null?gE:mE(typeof e=="function"?e:op(e)))}var hE=Array.prototype.filter;function xE(){return Array.from(this.children)}function bE(e){return function(){return hE.call(this.children,e)}}function b2(e){return this.selectAll(e==null?xE:bE(typeof e=="function"?e:op(e)))}function w2(e){typeof e!="function"&&(e=$d(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new mt(o,this._parents)}function np(e){return new Array(e.length)}function y2(){return new mt(this._enter||this._groups.map(np),this._parents)}function Qd(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Qd.prototype={constructor:Qd,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function v2(e){return function(){return e}}function wE(e,t,a,o,n,r){for(var i=0,l,s=t.length,u=r.length;i<u;++i)(l=t[i])?(l.__data__=r[i],o[i]=l):a[i]=new Qd(e,r[i]);for(;i<s;++i)(l=t[i])&&(n[i]=l)}function yE(e,t,a,o,n,r,i){var l,s,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(l=0;l<d;++l)(s=t[l])&&(c[l]=p=i.call(s,s.__data__,l,t)+"",u.has(p)?n[l]=s:u.set(p,s));for(l=0;l<f;++l)p=i.call(e,r[l],l,r)+"",(s=u.get(p))?(o[l]=s,s.__data__=r[l],u.delete(p)):a[l]=new Qd(e,r[l]);for(l=0;l<d;++l)(s=t[l])&&u.get(c[l])===s&&(n[l]=s)}function vE(e){return e.__data__}function C2(e,t){if(!arguments.length)return Array.from(this,vE);var a=t?yE:wE,o=this._parents,n=this._groups;typeof e!="function"&&(e=v2(e));for(var r=n.length,i=new Array(r),l=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=CE(e.call(d,d&&d.__data__,u,o)),g=p.length,w=l[u]=new Array(g),y=i[u]=new Array(g),x=s[u]=new Array(c);a(d,f,w,y,x,p,t);for(var b=0,m=0,h,v;b<g;++b)if(h=w[b]){for(b>=m&&(m=b+1);!(v=y[m])&&++m<g;);h._next=v||null}}return i=new mt(i,o),i._enter=l,i._exit=s,i}function CE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function S2(){return new mt(this._exit||this._groups.map(np),this._parents)}function L2(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function k2(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),l=new Array(n),s=0;s<i;++s)for(var u=a[s],d=o[s],f=u.length,c=l[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;s<n;++s)l[s]=a[s];return new mt(l,this._parents)}function _2(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function I2(e){e||(e=SE);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],l=i.length,s=n[r]=new Array(l),u,d=0;d<l;++d)(u=i[d])&&(s[d]=u);s.sort(t)}return new mt(n,this._parents).order()}function SE(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function M2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function N2(){return Array.from(this)}function E2(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function T2(){let e=0;for(let t of this)++e;return e}function A2(){return!this.node()}function D2(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,l;r<i;++r)(l=n[r])&&e.call(l,l.__data__,r,n);return this}function LE(e){return function(){this.removeAttribute(e)}}function kE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function _E(e,t){return function(){this.setAttribute(e,t)}}function IE(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function ME(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function NE(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function R2(e,t){var a=jn(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?kE:LE:typeof t=="function"?a.local?NE:ME:a.local?IE:_E)(a,t))}function rp(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function EE(e){return function(){this.style.removeProperty(e)}}function TE(e,t,a){return function(){this.style.setProperty(e,t,a)}}function AE(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function P2(e,t,a){return arguments.length>1?this.each((t==null?EE:typeof t=="function"?AE:TE)(e,t,a??"")):Br(this.node(),e)}function Br(e,t){return e.style.getPropertyValue(t)||rp(e).getComputedStyle(e,null).getPropertyValue(t)}function DE(e){return function(){delete this[e]}}function RE(e,t){return function(){this[e]=t}}function PE(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function z2(e,t){return arguments.length>1?this.each((t==null?DE:typeof t=="function"?PE:RE)(e,t)):this.node()[e]}function O2(e){return e.trim().split(/^|\s+/)}function Nx(e){return e.classList||new B2(e)}function B2(e){this._node=e,this._names=O2(e.getAttribute("class")||"")}B2.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function H2(e,t){for(var a=Nx(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function F2(e,t){for(var a=Nx(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function zE(e){return function(){H2(this,e)}}function OE(e){return function(){F2(this,e)}}function BE(e,t){return function(){(t.apply(this,arguments)?H2:F2)(this,e)}}function U2(e,t){var a=O2(e+"");if(arguments.length<2){for(var o=Nx(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?BE:t?zE:OE)(a,t))}function HE(){this.textContent=""}function FE(e){return function(){this.textContent=e}}function UE(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function q2(e){return arguments.length?this.each(e==null?HE:(typeof e=="function"?UE:FE)(e)):this.node().textContent}function qE(){this.innerHTML=""}function VE(e){return function(){this.innerHTML=e}}function GE(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function V2(e){return arguments.length?this.each(e==null?qE:(typeof e=="function"?GE:VE)(e)):this.node().innerHTML}function jE(){this.nextSibling&&this.parentNode.appendChild(this)}function G2(){return this.each(jE)}function XE(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function j2(){return this.each(XE)}function X2(e){var t=typeof e=="function"?e:ap(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function YE(){return null}function Y2(e,t){var a=typeof e=="function"?e:ap(e),o=t==null?YE:typeof t=="function"?t:Ti(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function ZE(){var e=this.parentNode;e&&e.removeChild(this)}function Z2(){return this.each(ZE)}function WE(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function KE(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function W2(e){return this.select(e?KE:WE)}function K2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function $E(e){return function(t){e.call(this,t,this.__data__)}}function QE(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function JE(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function eT(e,t,a){return function(){var o=this.__on,n,r=$E(t);if(o){for(var i=0,l=o.length;i<l;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function $2(e,t,a){var o=QE(e+""),n,r=o.length,i;if(arguments.length<2){var l=this.node().__on;if(l){for(var s=0,u=l.length,d;s<u;++s)for(n=0,d=l[s];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(l=t?eT:JE,n=0;n<r;++n)this.each(l(o[n],t,a));return this}function Q2(e,t,a){var o=rp(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function tT(e,t){return function(){return Q2(this,e,t)}}function aT(e,t){return function(){return Q2(this,e,t.apply(this,arguments))}}function J2(e,t){return this.each((typeof t=="function"?aT:tT)(e,t))}function*eC(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var Ex=[null];function mt(e,t){this._groups=e,this._parents=t}function tC(){return new mt([[document.documentElement]],Ex)}function oT(){return this}mt.prototype=tC.prototype={constructor:mt,select:g2,selectAll:h2,selectChild:x2,selectChildren:b2,filter:w2,data:C2,enter:y2,exit:S2,join:L2,merge:k2,selection:oT,order:_2,sort:I2,call:M2,nodes:N2,node:E2,size:T2,empty:A2,each:D2,attr:R2,style:P2,property:z2,classed:U2,text:q2,html:V2,raise:G2,lower:j2,append:X2,insert:Y2,remove:Z2,clone:W2,datum:K2,on:$2,dispatch:J2,[Symbol.iterator]:eC};var Xn=tC;function qt(e){return typeof e=="string"?new mt([[document.querySelector(e)]],[document.documentElement]):new mt([[e]],Ex)}function aC(e){let t;for(;t=e.sourceEvent;)e=t;return e}function ga(e,t){if(e=aC(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var oC={passive:!1},Ai={capture:!0,passive:!1};function ip(e){e.stopImmediatePropagation()}function Hr(e){e.preventDefault(),e.stopImmediatePropagation()}function Jd(e){var t=e.document.documentElement,a=qt(e).on("dragstart.drag",Hr,Ai);"onselectstart"in t?a.on("selectstart.drag",Hr,Ai):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function eu(e,t){var a=e.document.documentElement,o=qt(e).on("dragstart.drag",null);t&&(o.on("click.drag",Hr,Ai),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var tu=e=>()=>e;function au(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:l,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}au.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function nT(e){return!e.ctrlKey&&!e.button}function rT(){return this.parentNode}function iT(e,t){return t??{x:e.x,y:e.y}}function lT(){return navigator.maxTouchPoints||"ontouchstart"in this}function lp(){var e=nT,t=rT,a=iT,o=lT,n={},r=Ei("start","drag","end"),i=0,l,s,u,d,f=0;function c(h){h.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",x,oC).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(h,v){if(!(d||!e.call(this,h,v))){var C=m(this,t.call(this,h,v),h,v,"mouse");C&&(qt(h.view).on("mousemove.drag",g,Ai).on("mouseup.drag",w,Ai),Jd(h.view),ip(h),u=!1,l=h.clientX,s=h.clientY,C("start",h))}}function g(h){if(Hr(h),!u){var v=h.clientX-l,C=h.clientY-s;u=v*v+C*C>f}n.mouse("drag",h)}function w(h){qt(h.view).on("mousemove.drag mouseup.drag",null),eu(h.view,u),Hr(h),n.mouse("end",h)}function y(h,v){if(e.call(this,h,v)){var C=h.changedTouches,S=t.call(this,h,v),L=C.length,_,T;for(_=0;_<L;++_)(T=m(this,S,h,v,C[_].identifier,C[_]))&&(ip(h),T("start",h,C[_]))}}function x(h){var v=h.changedTouches,C=v.length,S,L;for(S=0;S<C;++S)(L=n[v[S].identifier])&&(Hr(h),L("drag",h,v[S]))}function b(h){var v=h.changedTouches,C=v.length,S,L;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),S=0;S<C;++S)(L=n[v[S].identifier])&&(ip(h),L("end",h,v[S]))}function m(h,v,C,S,L,_){var T=r.copy(),R=ga(_||C,v),z,F,k;if((k=a.call(h,new au("beforestart",{sourceEvent:C,target:c,identifier:L,active:i,x:R[0],y:R[1],dx:0,dy:0,dispatch:T}),S))!=null)return z=k.x-R[0]||0,F=k.y-R[1]||0,function N(D,M,A){var B=R,P;switch(D){case"start":n[L]=N,P=i++;break;case"end":delete n[L],--i;case"drag":R=ga(A||M,v),P=i;break}T.call(D,h,new au(D,{sourceEvent:M,subject:k,target:c,identifier:L,active:P,x:R[0]+z,y:R[1]+F,dx:R[0]-B[0],dy:R[1]-B[1],dispatch:T}),S)}}return c.filter=function(h){return arguments.length?(e=typeof h=="function"?h:tu(!!h),c):e},c.container=function(h){return arguments.length?(t=typeof h=="function"?h:tu(h),c):t},c.subject=function(h){return arguments.length?(a=typeof h=="function"?h:tu(h),c):a},c.touchable=function(h){return arguments.length?(o=typeof h=="function"?h:tu(!!h),c):o},c.on=function(){var h=r.on.apply(r,arguments);return h===r?c:h},c.clickDistance=function(h){return arguments.length?(f=(h=+h)*h,c):Math.sqrt(f)},c}function sp(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Tx(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function ru(){}var ou=.7,cp=1/ou,ds="\\s*([+-]?\\d+)\\s*",nu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",dn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",sT=/^#([0-9a-f]{3,8})$/,dT=new RegExp(`^rgb\\(${ds},${ds},${ds}\\)$`),uT=new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`),cT=new RegExp(`^rgba\\(${ds},${ds},${ds},${nu}\\)$`),fT=new RegExp(`^rgba\\(${dn},${dn},${dn},${nu}\\)$`),pT=new RegExp(`^hsl\\(${nu},${dn},${dn}\\)$`),mT=new RegExp(`^hsla\\(${nu},${dn},${dn},${nu}\\)$`),nC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};sp(ru,Bo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:rC,formatHex:rC,formatHex8:gT,formatHsl:hT,formatRgb:iC,toString:iC});function rC(){return this.rgb().formatHex()}function gT(){return this.rgb().formatHex8()}function hT(){return fC(this).formatHsl()}function iC(){return this.rgb().formatRgb()}function Bo(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=sT.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?lC(t):a===3?new za(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?dp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?dp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=dT.exec(e))?new za(t[1],t[2],t[3],1):(t=uT.exec(e))?new za(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=cT.exec(e))?dp(t[1],t[2],t[3],t[4]):(t=fT.exec(e))?dp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=pT.exec(e))?uC(t[1],t[2]/100,t[3]/100,1):(t=mT.exec(e))?uC(t[1],t[2]/100,t[3]/100,t[4]):nC.hasOwnProperty(e)?lC(nC[e]):e==="transparent"?new za(NaN,NaN,NaN,0):null}function lC(e){return new za(e>>16&255,e>>8&255,e&255,1)}function dp(e,t,a,o){return o<=0&&(e=t=a=NaN),new za(e,t,a,o)}function xT(e){return e instanceof ru||(e=Bo(e)),e?(e=e.rgb(),new za(e.r,e.g,e.b,e.opacity)):new za}function us(e,t,a,o){return arguments.length===1?xT(e):new za(e,t,a,o??1)}function za(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}sp(za,us,Tx(ru,{brighter(e){return e=e==null?cp:Math.pow(cp,e),new za(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ou:Math.pow(ou,e),new za(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new za(Ri(this.r),Ri(this.g),Ri(this.b),fp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:sC,formatHex:sC,formatHex8:bT,formatRgb:dC,toString:dC}));function sC(){return`#${Di(this.r)}${Di(this.g)}${Di(this.b)}`}function bT(){return`#${Di(this.r)}${Di(this.g)}${Di(this.b)}${Di((isNaN(this.opacity)?1:this.opacity)*255)}`}function dC(){let e=fp(this.opacity);return`${e===1?"rgb(":"rgba("}${Ri(this.r)}, ${Ri(this.g)}, ${Ri(this.b)}${e===1?")":`, ${e})`}`}function fp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ri(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Di(e){return e=Ri(e),(e<16?"0":"")+e.toString(16)}function uC(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new Oo(e,t,a,o)}function fC(e){if(e instanceof Oo)return new Oo(e.h,e.s,e.l,e.opacity);if(e instanceof ru||(e=Bo(e)),!e)return new Oo;if(e instanceof Oo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,l=r-n,s=(r+n)/2;return l?(t===r?i=(a-o)/l+(a<o)*6:a===r?i=(o-t)/l+2:i=(t-a)/l+4,l/=s<.5?r+n:2-r-n,i*=60):l=s>0&&s<1?0:i,new Oo(i,l,s,e.opacity)}function pC(e,t,a,o){return arguments.length===1?fC(e):new Oo(e,t,a,o??1)}function Oo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}sp(Oo,pC,Tx(ru,{brighter(e){return e=e==null?cp:Math.pow(cp,e),new Oo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ou:Math.pow(ou,e),new Oo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new za(Ax(e>=240?e-240:e+120,n,o),Ax(e,n,o),Ax(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Oo(cC(this.h),up(this.s),up(this.l),fp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=fp(this.opacity);return`${e===1?"hsl(":"hsla("}${cC(this.h)}, ${up(this.s)*100}%, ${up(this.l)*100}%${e===1?")":`, ${e})`}`}}));function cC(e){return e=(e||0)%360,e<0?e+360:e}function up(e){return Math.max(0,Math.min(1,e||0))}function Ax(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Dx(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function mC(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,l=o<t-1?e[o+2]:2*r-n;return Dx((a-o/t)*t,i,n,r,l)}}function gC(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],l=e[(o+2)%t];return Dx((a-o/t)*t,n,r,i,l)}}var iu=e=>()=>e;function wT(e,t){return function(a){return e+a*t}}function yT(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function hC(e){return(e=+e)==1?pp:function(t,a){return a-t?yT(t,a,e):iu(isNaN(t)?a:t)}}function pp(e,t){var a=t-e;return a?wT(e,a):iu(isNaN(e)?t:e)}var Pi=(function e(t){var a=hC(t);function o(n,r){var i=a((n=us(n)).r,(r=us(r)).r),l=a(n.g,r.g),s=a(n.b,r.b),u=pp(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=l(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function xC(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,l;for(i=0;i<a;++i)l=us(t[i]),o[i]=l.r||0,n[i]=l.g||0,r[i]=l.b||0;return o=e(o),n=e(n),r=e(r),l.opacity=1,function(s){return l.r=o(s),l.g=n(s),l.b=r(s),l+""}}}var vT=xC(mC),CT=xC(gC);function bC(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function wC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function yC(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=Yn(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(l){for(i=0;i<o;++i)r[i]=n[i](l);return r}}function vC(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function ha(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function CC(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=Yn(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Px=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rx=new RegExp(Px.source,"g");function ST(e){return function(){return e}}function LT(e){return function(t){return e(t)+""}}function lu(e,t){var a=Px.lastIndex=Rx.lastIndex=0,o,n,r,i=-1,l=[],s=[];for(e=e+"",t=t+"";(o=Px.exec(e))&&(n=Rx.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),l[i]?l[i]+=r:l[++i]=r),(o=o[0])===(n=n[0])?l[i]?l[i]+=n:l[++i]=n:(l[++i]=null,s.push({i,x:ha(o,n)})),a=Rx.lastIndex;return a<t.length&&(r=t.slice(a),l[i]?l[i]+=r:l[++i]=r),l.length<2?s[0]?LT(s[0].x):ST(t):(t=s.length,function(u){for(var d=0,f;d<t;++d)l[(f=s[d]).i]=f.x(u);return l.join("")})}function Yn(e,t){var a=typeof t,o;return t==null||a==="boolean"?iu(t):(a==="number"?ha:a==="string"?(o=Bo(t))?(t=o,Pi):lu:t instanceof Bo?Pi:t instanceof Date?vC:wC(t)?bC:Array.isArray(t)?yC:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?CC:ha)(e,t)}var SC=180/Math.PI,mp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function zx(e,t,a,o,n,r){var i,l,s;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(l=Math.sqrt(a*a+o*o))&&(a/=l,o/=l,s/=l),e*o<t*a&&(e=-e,t=-t,s=-s,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*SC,skewX:Math.atan(s)*SC,scaleX:i,scaleY:l}}var gp;function LC(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?mp:zx(t.a,t.b,t.c,t.d,t.e,t.f)}function kC(e){return e==null?mp:(gp||(gp=document.createElementNS("http://www.w3.org/2000/svg","g")),gp.setAttribute("transform",e),(e=gp.transform.baseVal.consolidate())?(e=e.matrix,zx(e.a,e.b,e.c,e.d,e.e,e.f)):mp)}function _C(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);g.push({i:w-4,x:ha(u,f)},{i:w-2,x:ha(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:ha(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function l(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:ha(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function s(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");g.push({i:w-4,x:ha(u,f)},{i:w-2,x:ha(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),l(u.skewX,d.skewX,f,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,w=c.length,y;++g<w;)f[(y=c[g]).i]=y.x(p);return f.join("")}}}var Ox=_C(LC,"px, ","px)","deg)"),Bx=_C(kC,", ",")",")");var kT=1e-12;function IC(e){return((e=Math.exp(e))+1/e)/2}function _T(e){return((e=Math.exp(e))-1/e)/2}function IT(e){return((e=Math.exp(2*e))-1)/(e+1)}var zi=(function e(t,a,o){function n(r,i){var l=r[0],s=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-l,g=f-s,w=p*p+g*g,y,x;if(w<kT)x=Math.log(c/u)/t,y=function(S){return[l+S*p,s+S*g,u*Math.exp(t*S*x)]};else{var b=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*b),h=(c*c-u*u-o*w)/(2*c*a*b),v=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(h*h+1)-h);x=(C-v)/t,y=function(S){var L=S*x,_=IC(v),T=u/(a*b)*(_*IT(t*L+v)-_T(v));return[l+T*p,s+T*g,u*_/IC(t*L+v)]}}return y.duration=x*1e3*t/Math.SQRT2,y}return n.rho=function(r){var i=Math.max(.001,+r),l=i*i,s=l*l;return e(i,l,s)},n})(Math.SQRT2,2,4);var cs=0,du=0,su=0,NC=1e3,hp,uu,xp=0,Oi=0,bp=0,cu=typeof performance=="object"&&performance.now?performance:Date,EC=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function pu(){return Oi||(EC(MT),Oi=cu.now()+bp)}function MT(){Oi=0}function fu(){this._call=this._time=this._next=null}fu.prototype=wp.prototype={constructor:fu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?pu():+a)+(t==null?0:+t),!this._next&&uu!==this&&(uu?uu._next=this:hp=this,uu=this),this._call=e,this._time=a,Hx()},stop:function(){this._call&&(this._call=null,this._time=1/0,Hx())}};function wp(e,t,a){var o=new fu;return o.restart(e,t,a),o}function TC(){pu(),++cs;for(var e=hp,t;e;)(t=Oi-e._time)>=0&&e._call.call(void 0,t),e=e._next;--cs}function MC(){Oi=(xp=cu.now())+bp,cs=du=0;try{TC()}finally{cs=0,ET(),Oi=0}}function NT(){var e=cu.now(),t=e-xp;t>NC&&(bp-=t,xp=e)}function ET(){for(var e,t=hp,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:hp=a);uu=e,Hx(o)}function Hx(e){if(!cs){du&&(du=clearTimeout(du));var t=e-Oi;t>24?(e<1/0&&(du=setTimeout(MC,e-cu.now()-bp)),su&&(su=clearInterval(su))):(su||(xp=cu.now(),su=setInterval(NT,NC)),cs=1,EC(MC))}}function yp(e,t,a){var o=new fu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var TT=Ei("start","end","cancel","interrupt"),AT=[],RC=0,AC=1,Cp=2,vp=3,DC=4,Sp=5,mu=6;function Fr(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;DT(e,a,{name:t,index:o,group:n,on:TT,tween:AT,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:RC})}function gu(e,t){var a=Rt(e,t);if(a.state>RC)throw new Error("too late; already scheduled");return a}function ea(e,t){var a=Rt(e,t);if(a.state>vp)throw new Error("too late; already running");return a}function Rt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function DT(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=wp(r,0,a.time);function r(u){a.state=AC,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==AC)return s();for(d in o)if(p=o[d],p.name===a.name){if(p.state===vp)return yp(i);p.state===DC?(p.state=mu,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=mu,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(yp(function(){a.state===vp&&(a.state=DC,a.timer.restart(l,a.delay,a.time),l(u))}),a.state=Cp,a.on.call("start",e,e.__data__,a.index,a.group),a.state===Cp){for(a.state=vp,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function l(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=Sp,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===Sp&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=mu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function Bi(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>Cp&&o.state<Sp,o.state=mu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function PC(e){return this.each(function(){Bi(this,e)})}function RT(e,t){var a,o;return function(){var n=ea(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,l=o.length;i<l;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function PT(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=ea(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var l={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=l;break}s===u&&n.push(l)}r.tween=n}}function zC(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Rt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?RT:PT)(a,e,t))}function fs(e,t,a){var o=e._id;return e.each(function(){var n=ea(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Rt(n,o).value[t]}}function Lp(e,t){var a;return(typeof t=="number"?ha:t instanceof Bo?Pi:(a=Bo(t))?(t=a,Pi):lu)(e,t)}function zT(e){return function(){this.removeAttribute(e)}}function OT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function BT(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function HT(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function FT(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttribute(e):(i=this.getAttribute(e),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function UT(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function OC(e,t){var a=jn(e),o=a==="transform"?Bx:Lp;return this.attrTween(e,typeof t=="function"?(a.local?UT:FT)(a,o,fs(this,"attr."+e,t)):t==null?(a.local?OT:zT)(a):(a.local?HT:BT)(a,o,t))}function qT(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function VT(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function GT(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&VT(e,r)),a}return n._value=t,n}function jT(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&qT(e,r)),a}return n._value=t,n}function BC(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=jn(e);return this.tween(a,(o.local?GT:jT)(o,t))}function XT(e,t){return function(){gu(this,e).delay=+t.apply(this,arguments)}}function YT(e,t){return t=+t,function(){gu(this,e).delay=t}}function HC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?XT:YT)(t,e)):Rt(this.node(),t).delay}function ZT(e,t){return function(){ea(this,e).duration=+t.apply(this,arguments)}}function WT(e,t){return t=+t,function(){ea(this,e).duration=t}}function FC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?ZT:WT)(t,e)):Rt(this.node(),t).duration}function KT(e,t){if(typeof t!="function")throw new Error;return function(){ea(this,e).ease=t}}function UC(e){var t=this._id;return arguments.length?this.each(KT(t,e)):Rt(this.node(),t).ease}function $T(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;ea(this,e).ease=a}}function qC(e){if(typeof e!="function")throw new Error;return this.each($T(this._id,e))}function VC(e){typeof e!="function"&&(e=$d(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new xa(o,this._parents,this._name,this._id)}function GC(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),l=0;l<r;++l)for(var s=t[l],u=a[l],d=s.length,f=i[l]=new Array(d),c,p=0;p<d;++p)(c=s[p]||u[p])&&(f[p]=c);for(;l<o;++l)i[l]=t[l];return new xa(i,this._parents,this._name,this._id)}function QT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function JT(e,t,a){var o,n,r=QT(t)?gu:ea;return function(){var i=r(this,e),l=i.on;l!==o&&(n=(o=l).copy()).on(t,a),i.on=n}}function jC(e,t){var a=this._id;return arguments.length<2?Rt(this.node(),a).on.on(e):this.each(JT(a,e,t))}function eA(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function XC(){return this.on("end.remove",eA(this._id))}function YC(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Ti(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var l=o[i],s=l.length,u=r[i]=new Array(s),d,f,c=0;c<s;++c)(d=l[c])&&(f=e.call(d,d.__data__,c,l))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,Fr(u[c],t,a,c,u,Rt(d,a)));return new xa(r,this._parents,t,a)}function ZC(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Kd(e));for(var o=this._groups,n=o.length,r=[],i=[],l=0;l<n;++l)for(var s=o[l],u=s.length,d,f=0;f<u;++f)if(d=s[f]){for(var c=e.call(d,d.__data__,f,s),p,g=Rt(d,a),w=0,y=c.length;w<y;++w)(p=c[w])&&Fr(p,t,a,w,c,g);r.push(c),i.push(d)}return new xa(r,i,t,a)}var tA=Xn.prototype.constructor;function WC(){return new tA(this._groups,this._parents)}function aA(e,t){var a,o,n;return function(){var r=Br(this,e),i=(this.style.removeProperty(e),Br(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function KC(e){return function(){this.style.removeProperty(e)}}function oA(e,t,a){var o,n=a+"",r;return function(){var i=Br(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function nA(e,t,a){var o,n,r;return function(){var i=Br(this,e),l=a(this),s=l+"";return l==null&&(s=l=(this.style.removeProperty(e),Br(this,e))),i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l))}}function rA(e,t){var a,o,n,r="style."+t,i="end."+r,l;return function(){var s=ea(this,e),u=s.on,d=s.value[r]==null?l||(l=KC(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),s.on=o}}function $C(e,t,a){var o=(e+="")=="transform"?Ox:Lp;return t==null?this.styleTween(e,aA(e,o)).on("end.style."+e,KC(e)):typeof t=="function"?this.styleTween(e,nA(e,o,fs(this,"style."+e,t))).each(rA(this._id,e)):this.styleTween(e,oA(e,o,t),a).on("end.style."+e,null)}function iA(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function lA(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&iA(e,i,a)),o}return r._value=t,r}function QC(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,lA(e,t,a??""))}function sA(e){return function(){this.textContent=e}}function dA(e){return function(){var t=e(this);this.textContent=t??""}}function JC(e){return this.tween("text",typeof e=="function"?dA(fs(this,"text",e)):sA(e==null?"":e+""))}function uA(e){return function(t){this.textContent=e.call(this,t)}}function cA(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&uA(n)),t}return o._value=e,o}function eS(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,cA(e))}function tS(){for(var e=this._name,t=this._id,a=kp(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)if(s=i[u]){var d=Rt(s,t);Fr(s,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new xa(o,this._parents,e,a)}function aS(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var l={value:i},s={value:function(){--n===0&&r()}};a.each(function(){var u=ea(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),u.on=t}),n===0&&r()})}var fA=0;function xa(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function oS(e){return Xn().transition(e)}function kp(){return++fA}var Zn=Xn.prototype;xa.prototype=oS.prototype={constructor:xa,select:YC,selectAll:ZC,selectChild:Zn.selectChild,selectChildren:Zn.selectChildren,filter:VC,merge:GC,selection:WC,transition:tS,call:Zn.call,nodes:Zn.nodes,node:Zn.node,size:Zn.size,empty:Zn.empty,each:Zn.each,on:jC,attr:OC,attrTween:BC,style:$C,styleTween:QC,text:JC,textTween:eS,remove:XC,tween:zC,delay:HC,duration:FC,ease:UC,easeVarying:qC,end:aS,[Symbol.iterator]:Zn[Symbol.iterator]};function _p(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var pA={time:null,delay:0,duration:250,ease:_p};function mA(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function nS(e){var t,a;e instanceof xa?(t=e._id,e=e._name):(t=kp(),(a=pA).time=pu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&Fr(s,e,t,u,i,a||mA(s,t));return new xa(o,this._parents,e,t)}Xn.prototype.interrupt=PC;Xn.prototype.transition=nS;var hu=e=>()=>e;function Fx(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function Ho(e,t,a){this.k=e,this.x=t,this.y=a}Ho.prototype={constructor:Ho,scale:function(e){return e===1?this:new Ho(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ho(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Hi=new Ho(1,0,0);xu.prototype=Ho.prototype;function xu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Hi;return e.__zoom}function Ip(e){e.stopImmediatePropagation()}function ps(e){e.preventDefault(),e.stopImmediatePropagation()}function gA(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function hA(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function rS(){return this.__zoom||Hi}function xA(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function bA(){return navigator.maxTouchPoints||"ontouchstart"in this}function wA(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function Mp(){var e=gA,t=hA,a=wA,o=xA,n=bA,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],l=250,s=zi,u=Ei("start","zoom","end"),d,f,c,p=500,g=150,w=0,y=10;function x(k){k.property("__zoom",rS).on("wheel.zoom",L,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",R).on("touchmove.zoom",z).on("touchend.zoom touchcancel.zoom",F).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(k,N,D,M){var A=k.selection?k.selection():k;A.property("__zoom",rS),k!==A?v(k,N,D,M):A.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},x.scaleBy=function(k,N,D,M){x.scaleTo(k,function(){var A=this.__zoom.k,B=typeof N=="function"?N.apply(this,arguments):N;return A*B},D,M)},x.scaleTo=function(k,N,D,M){x.transform(k,function(){var A=t.apply(this,arguments),B=this.__zoom,P=D==null?h(A):typeof D=="function"?D.apply(this,arguments):D,H=B.invert(P),I=typeof N=="function"?N.apply(this,arguments):N;return a(m(b(B,I),P,H),A,i)},D,M)},x.translateBy=function(k,N,D,M){x.transform(k,function(){return a(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof D=="function"?D.apply(this,arguments):D),t.apply(this,arguments),i)},null,M)},x.translateTo=function(k,N,D,M,A){x.transform(k,function(){var B=t.apply(this,arguments),P=this.__zoom,H=M==null?h(B):typeof M=="function"?M.apply(this,arguments):M;return a(Hi.translate(H[0],H[1]).scale(P.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof D=="function"?-D.apply(this,arguments):-D),B,i)},M,A)};function b(k,N){return N=Math.max(r[0],Math.min(r[1],N)),N===k.k?k:new Ho(N,k.x,k.y)}function m(k,N,D){var M=N[0]-D[0]*k.k,A=N[1]-D[1]*k.k;return M===k.x&&A===k.y?k:new Ho(k.k,M,A)}function h(k){return[(+k[0][0]+ +k[1][0])/2,(+k[0][1]+ +k[1][1])/2]}function v(k,N,D,M){k.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var A=this,B=arguments,P=C(A,B).event(M),H=t.apply(A,B),I=D==null?h(H):typeof D=="function"?D.apply(A,B):D,U=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),j=A.__zoom,Z=typeof N=="function"?N.apply(A,B):N,te=s(j.invert(I).concat(U/j.k),Z.invert(I).concat(U/Z.k));return function($){if($===1)$=Z;else{var G=te($),K=U/G[2];$=new Ho(K,I[0]-G[0]*K,I[1]-G[1]*K)}P.zoom(null,$)}})}function C(k,N,D){return!D&&k.__zooming||new S(k,N)}function S(k,N){this.that=k,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(k,N),this.taps=0}S.prototype={event:function(k){return k&&(this.sourceEvent=k),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(k,N){return this.mouse&&k!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&k!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&k!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(k){var N=qt(this.that).datum();u.call(k,this.that,new Fx(k,{sourceEvent:this.sourceEvent,target:x,type:k,transform:this.that.__zoom,dispatch:u}),N)}};function L(k,...N){if(!e.apply(this,arguments))return;var D=C(this,N).event(k),M=this.__zoom,A=Math.max(r[0],Math.min(r[1],M.k*Math.pow(2,o.apply(this,arguments)))),B=ga(k);if(D.wheel)(D.mouse[0][0]!==B[0]||D.mouse[0][1]!==B[1])&&(D.mouse[1]=M.invert(D.mouse[0]=B)),clearTimeout(D.wheel);else{if(M.k===A)return;D.mouse=[B,M.invert(B)],Bi(this),D.start()}ps(k),D.wheel=setTimeout(P,g),D.zoom("mouse",a(m(b(M,A),D.mouse[0],D.mouse[1]),D.extent,i));function P(){D.wheel=null,D.end()}}function _(k,...N){if(c||!e.apply(this,arguments))return;var D=k.currentTarget,M=C(this,N,!0).event(k),A=qt(k.view).on("mousemove.zoom",I,!0).on("mouseup.zoom",U,!0),B=ga(k,D),P=k.clientX,H=k.clientY;Jd(k.view),Ip(k),M.mouse=[B,this.__zoom.invert(B)],Bi(this),M.start();function I(j){if(ps(j),!M.moved){var Z=j.clientX-P,te=j.clientY-H;M.moved=Z*Z+te*te>w}M.event(j).zoom("mouse",a(m(M.that.__zoom,M.mouse[0]=ga(j,D),M.mouse[1]),M.extent,i))}function U(j){A.on("mousemove.zoom mouseup.zoom",null),eu(j.view,M.moved),ps(j),M.event(j).end()}}function T(k,...N){if(e.apply(this,arguments)){var D=this.__zoom,M=ga(k.changedTouches?k.changedTouches[0]:k,this),A=D.invert(M),B=D.k*(k.shiftKey?.5:2),P=a(m(b(D,B),M,A),t.apply(this,N),i);ps(k),l>0?qt(this).transition().duration(l).call(v,P,M,k):qt(this).call(x.transform,P,M,k)}}function R(k,...N){if(e.apply(this,arguments)){var D=k.touches,M=D.length,A=C(this,N,k.changedTouches.length===M).event(k),B,P,H,I;for(Ip(k),P=0;P<M;++P)H=D[P],I=ga(H,this),I=[I,this.__zoom.invert(I),H.identifier],A.touch0?!A.touch1&&A.touch0[2]!==I[2]&&(A.touch1=I,A.taps=0):(A.touch0=I,B=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),B&&(A.taps<2&&(f=I[0],d=setTimeout(function(){d=null},p)),Bi(this),A.start())}}function z(k,...N){if(this.__zooming){var D=C(this,N).event(k),M=k.changedTouches,A=M.length,B,P,H,I;for(ps(k),B=0;B<A;++B)P=M[B],H=ga(P,this),D.touch0&&D.touch0[2]===P.identifier?D.touch0[0]=H:D.touch1&&D.touch1[2]===P.identifier&&(D.touch1[0]=H);if(P=D.that.__zoom,D.touch1){var U=D.touch0[0],j=D.touch0[1],Z=D.touch1[0],te=D.touch1[1],$=($=Z[0]-U[0])*$+($=Z[1]-U[1])*$,G=(G=te[0]-j[0])*G+(G=te[1]-j[1])*G;P=b(P,Math.sqrt($/G)),H=[(U[0]+Z[0])/2,(U[1]+Z[1])/2],I=[(j[0]+te[0])/2,(j[1]+te[1])/2]}else if(D.touch0)H=D.touch0[0],I=D.touch0[1];else return;D.zoom("touch",a(m(P,H,I),D.extent,i))}}function F(k,...N){if(this.__zooming){var D=C(this,N).event(k),M=k.changedTouches,A=M.length,B,P;for(Ip(k),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),B=0;B<A;++B)P=M[B],D.touch0&&D.touch0[2]===P.identifier?delete D.touch0:D.touch1&&D.touch1[2]===P.identifier&&delete D.touch1;if(D.touch1&&!D.touch0&&(D.touch0=D.touch1,delete D.touch1),D.touch0)D.touch0[1]=this.__zoom.invert(D.touch0[0]);else if(D.end(),D.taps===2&&(P=ga(P,this),Math.hypot(f[0]-P[0],f[1]-P[1])<y)){var H=qt(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return x.wheelDelta=function(k){return arguments.length?(o=typeof k=="function"?k:hu(+k),x):o},x.filter=function(k){return arguments.length?(e=typeof k=="function"?k:hu(!!k),x):e},x.touchable=function(k){return arguments.length?(n=typeof k=="function"?k:hu(!!k),x):n},x.extent=function(k){return arguments.length?(t=typeof k=="function"?k:hu([[+k[0][0],+k[0][1]],[+k[1][0],+k[1][1]]]),x):t},x.scaleExtent=function(k){return arguments.length?(r[0]=+k[0],r[1]=+k[1],x):[r[0],r[1]]},x.translateExtent=function(k){return arguments.length?(i[0][0]=+k[0][0],i[1][0]=+k[1][0],i[0][1]=+k[0][1],i[1][1]=+k[1][1],x):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},x.constrain=function(k){return arguments.length?(a=k,x):a},x.duration=function(k){return arguments.length?(l=+k,x):l},x.interpolate=function(k){return arguments.length?(s=k,x):s},x.on=function(){var k=u.on.apply(u,arguments);return k===u?x:k},x.clickDistance=function(k){return arguments.length?(w=(k=+k)*k,x):Math.sqrt(w)},x.tapDistance=function(k){return arguments.length?(y=+k,x):y},x}var to={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},xs=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],jx=["Enter"," ","Escape"],Xx={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Gr;(function(e){e.Strict="strict",e.Loose="loose"})(Gr||(Gr={}));var Fo;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Fo||(Fo={}));var Wn;(function(e){e.Partial="partial",e.Full="full"})(Wn||(Wn={}));var Yx={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},un;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(un||(un={}));var gs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(gs||(gs={}));var ne;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ne||(ne={}));var iS={[ne.Left]:ne.Right,[ne.Right]:ne.Left,[ne.Top]:ne.Bottom,[ne.Bottom]:ne.Top};function Zx(e){return e===null?null:e?"valid":"invalid"}var Wx=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,wS=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Kx=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),$x=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var wu=(e,t=[0,0])=>{let{width:a,height:o}=Io(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Qx=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",l=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(l=i?t.nodeLookup.get(r):Kx(r)?r:t.nodeLookup.get(r.id)),l?(a=!0,Rp(n,Tp(l,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Pp(o):{x:0,y:0,width:0,height:0}},bs=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Rp(a,Tp(n)),o=!0)}),o?Pp(a):{x:0,y:0,width:0,height:0}},Ap=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let l=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:w=!1}=c;if(i&&!g||w)continue;let y=p.width??c.width??c.initialWidth??0,x=p.height??c.height??c.initialHeight??0,{x:b,y:m}=c.internals.positionAbsolute,h=LS(l,s,u,d,b,m,y,x),v=y*x,C=r&&h>0;(!c.internals.handleBounds||C||h>=v||c.dragging)&&f.push(c)}return f},yS=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function yA(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:l}=Io(n);r=i>0&&l>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function vS({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let l=yA(e,i),s=bs(l),u=vu(s,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function Jx({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),l=i.parentId?a.get(i.parentId):void 0,{x:s,y:u}=l?l.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!l)r?.("005",to.error005());else{let{width:p,height:g}=Io(l);p&&g&&(f=[[s,u],[s+p,u+g]])}else l&&qi(i.extent)&&(f=[[i.extent[0][0]+s,i.extent[0][1]+u],[i.extent[1][0]+s,i.extent[1][1]+u]]);let c=qi(f)?Fi(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",to.error015()),{position:{x:c.x-s+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function CS({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||g)&&i.push(c)}let l=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=yS(i,s);for(let c of s)l.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var hs=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),Fi=(e={x:0,y:0},t,a)=>({x:hs(e.x,t[0][0],t[1][0]-(a?.width??0)),y:hs(e.y,t[0][1],t[1][1]-(a?.height??0))});function SS(e,t,a){let{width:o,height:n}=Io(a),{x:r,y:i}=a.internals.positionAbsolute;return Fi(e,[[r,i],[r+o,i+n]],t)}var lS=(e,t,a)=>e<t?hs(Math.abs(e-t),1,t)/t:e>a?-hs(Math.abs(e-a),1,t)/t:0,Dp=(e,t,a=15,o=40)=>{let n=lS(e.x,o,t.width-o)*a,r=lS(e.y,o,t.height-o)*a;return[n,r]},Rp=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Gx=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Pp=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),ws=(e,t=[0,0])=>{let{x:a,y:o}=Kx(e)?e.internals.positionAbsolute:wu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Tp=(e,t=[0,0])=>{let{x:a,y:o}=Kx(e)?e.internals.positionAbsolute:wu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},eb=(e,t)=>Pp(Rp(Gx(e),Gx(t))),LS=(e,t,a,o,n,r,i,l)=>{let s=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+l)-Math.max(t,r));return Math.ceil(s*u)},yu=(e,t)=>LS(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),tb=e=>ko(e.width)&&ko(e.height)&&ko(e.x)&&ko(e.y),ko=e=>!isNaN(e)&&isFinite(e),ab=(e,t)=>(a,o)=>{},ys=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),vs=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let l={x:(e-a)/n,y:(t-o)/n};return r?ys(l,i):l},Ui=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function ms(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function vA(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=ms(e,a),n=ms(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=ms(e.top??e.y??0,a),n=ms(e.bottom??e.y??0,a),r=ms(e.left??e.x??0,t),i=ms(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function CA(e,t,a,o,n,r){let{x:i,y:l}=Ui(e,[t,a,o]),{x:s,y:u}=Ui({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,f=r-u;return{left:Math.floor(i),top:Math.floor(l),right:Math.floor(d),bottom:Math.floor(f)}}var vu=(e,t,a,o,n,r)=>{let i=vA(r,t,a),l=(t-i.x)/e.width,s=(a-i.y)/e.height,u=Math.min(l,s),d=hs(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,w=CA(e,p,g,d,t,a),y={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-y.left+y.right,y:g-y.top+y.bottom,zoom:d}},Cs=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function qi(e){return e!=null&&e!=="parent"}function Io(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ob(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function nb(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let l=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*l[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*l[1]}return r}function rb(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function kS(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function _S(e){return{...Xx,...e||{}}}function bu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=_o(e),l=vs({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:s,y:u}=a?ys(l,t):l;return{xSnapped:s,ySnapped:u,...l}}var zp=e=>({width:e.offsetWidth,height:e.offsetHeight}),ib=e=>e?.getRootNode?.()||window?.document,SA=["INPUT","SELECT","TEXTAREA"];function lb(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:SA.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var sb=e=>"clientX"in e,_o=(e,t)=>{let a=sb(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},sS=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let l=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(l.left-a.left)/o,y:(l.top-a.top)/o,...zp(i)}})};function Op({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:l}){let s=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+l*.375+o*.125,d=Math.abs(s-e),f=Math.abs(u-t);return[s,u,d,f]}function Np(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function dS({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ne.Left:return[t-Np(t-o,r),a];case ne.Right:return[t+Np(o-t,r),a];case ne.Top:return[t,a-Np(a-n,r)];case ne.Bottom:return[t,a+Np(n-a,r)]}}function Ss({sourceX:e,sourceY:t,sourcePosition:a=ne.Bottom,targetX:o,targetY:n,targetPosition:r=ne.Top,curvature:i=.25}){let[l,s]=dS({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=dS({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,g]=Op({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${l},${s} ${u},${d} ${o},${n}`,f,c,p,g]}function db({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,l=o<t?o+i:o-i;return[r,l,n,i]}function IS({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,l=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+l}function MS({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Rp(Tp(e),Tp(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return yu(i,Pp(r))>0}var LA=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,kA=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),NS=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",to.error006()),t;let o=a.getEdgeId||LA,n;return Wx(e)?n={...e}:n={...e,id:o(e)},kA(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Bp({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,l]=db({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,l]}var uS={[ne.Left]:{x:-1,y:0},[ne.Right]:{x:1,y:0},[ne.Top]:{x:0,y:-1},[ne.Bottom]:{x:0,y:1}},_A=({source:e,sourcePosition:t=ne.Bottom,target:a})=>t===ne.Left||t===ne.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},cS=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function IA({source:e,sourcePosition:t=ne.Bottom,target:a,targetPosition:o=ne.Top,center:n,offset:r,stepPosition:i}){let l=uS[t],s=uS[o],u={x:e.x+l.x*r,y:e.y+l.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},f=_A({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],w,y,x={x:0,y:0},b={x:0,y:0},[,,m,h]=db({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(l[c]*s[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,y=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,y=n.y??u.y+(d.y-u.y)*i);let L=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y},{x:d.x,y}];l[c]===p?g=c==="x"?L:_:g=c==="x"?_:L}else{let L=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?g=l.x===p?_:L:g=l.y===p?L:_,t===o){let k=Math.abs(e[c]-a[c]);if(k<=r){let N=Math.min(r-1,r-k);l[c]===p?x[c]=(u[c]>e[c]?-1:1)*N:b[c]=(d[c]>a[c]?-1:1)*N}}if(t!==o){let k=c==="x"?"y":"x",N=l[c]===s[k],D=u[k]>d[k],M=u[k]<d[k];(l[c]===1&&(!N&&D||N&&M)||l[c]!==1&&(!N&&M||N&&D))&&(g=c==="x"?L:_)}let T={x:u.x+x.x,y:u.y+x.y},R={x:d.x+b.x,y:d.y+b.y},z=Math.max(Math.abs(T.x-g[0].x),Math.abs(R.x-g[0].x)),F=Math.max(Math.abs(T.y-g[0].y),Math.abs(R.y-g[0].y));z>=F?(w=(T.x+R.x)/2,y=g[0].y):(w=g[0].x,y=(T.y+R.y)/2)}let v={x:u.x+x.x,y:u.y+x.y},C={x:d.x+b.x,y:d.y+b.y};return[[e,...v.x!==g[0].x||v.y!==g[0].y?[v]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],w,y,m,h]}function MA(e,t,a,o){let n=Math.min(cS(e,t)/2,cS(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let l=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${i+n*s}Q ${r},${i} ${r+n*l},${i}`}function Cu({sourceX:e,sourceY:t,sourcePosition:a=ne.Bottom,targetX:o,targetY:n,targetPosition:r=ne.Top,borderRadius:i=5,centerX:l,centerY:s,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,w]=IA({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:l,y:s},offset:u,stepPosition:d}),y=`M${f[0].x} ${f[0].y}`;for(let x=1;x<f.length-1;x++)y+=MA(f[x-1],f[x],f[x+1],i);return y+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[y,c,p,g,w]}function fS(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function ES(e){let{sourceNode:t,targetNode:a}=e;if(!fS(t)||!fS(a))return null;let o=t.internals.handleBounds||pS(t.handles),n=a.internals.handleBounds||pS(a.handles),r=mS(o?.source??[],e.sourceHandle),i=mS(e.connectionMode===Gr.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",to.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let l=r?.position||ne.Bottom,s=i?.position||ne.Top,u=jr(t,r,l),d=jr(a,i,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:l,targetPosition:s}}function pS(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function jr(e,t,a=ne.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:l}=t??Io(e);if(o)return{x:n+i/2,y:r+l/2};switch(t?.position??a){case ne.Top:return{x:n+i/2,y:r};case ne.Right:return{x:n+i,y:r+l/2};case ne.Bottom:return{x:n+i/2,y:r+l};case ne.Left:return{x:n,y:r+l/2}}}function mS(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Hp(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function TS(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,l)=>([l.markerStart||o,l.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Hp(s,t);r.has(u)||(i.push({id:u,color:s.color||a,...s}),r.add(u))}}),i),[]).sort((i,l)=>i.id.localeCompare(l.id))}var AS=1e3,NA=10,ub={nodeOrigin:[0,0],nodeExtent:xs,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},EA={...ub,checkEquality:!0};function cb(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function DS(e,t,a){let o=cb(ub,a);for(let n of e.values())if(n.parentId)pb(n,e,t,o);else{let r=wu(n,o.nodeOrigin),i=qi(n.extent)?n.extent:o.nodeExtent,l=Fi(r,i,Io(n));n.internals.positionAbsolute=l}}function TA(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function fb(e){return e==="manual"}function Fp(e,t,a,o={}){let n=cb(EA,o),r={i:0},i=new Map(t),l=n?.elevateNodesOnSelect&&!fb(n.zIndexMode)?AS:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=wu(d,n.nodeOrigin),p=qi(d.extent)?d.extent:n.nodeExtent,g=Fi(c,p,Io(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:TA(d,f),z:RS(d,l,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),d.parentId&&pb(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function AA(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function pb(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:l,zIndexMode:s}=cb(ub,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}AA(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*NA),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!fb(s)?AS:0,{x:c,y:p,z:g}=DA(e,d,i,l,f,s),{positionAbsolute:w}=e.internals,y=c!==w.x||p!==w.y;(y||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:c,y:p}:w,z:g}})}function RS(e,t,a){let o=ko(e.zIndex)?e.zIndex:0;return fb(a)?o:o+(e.selected?t:0)}function DA(e,t,a,o,n,r){let{x:i,y:l}=t.internals.positionAbsolute,s=Io(e),u=wu(e,a),d=qi(e.extent)?Fi(u,e.extent,s):u,f=Fi({x:i+d.x,y:l+d.y},o,s);e.extent==="parent"&&(f=SS(f,s,t));let c=RS(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Up(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let l=t.get(i.parentId);if(!l)continue;let s=r.get(i.parentId)?.expandedRect??ws(l),u=eb(s,i.rect);r.set(i.parentId,{expandedRect:u,parent:l})}return r.size>0&&r.forEach(({expandedRect:i,parent:l},s)=>{let u=l.internals.positionAbsolute,d=Io(l),f=l.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,g=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),y=(g-d.width)*f[0],x=(w-d.height)*f[1];(c>0||p>0||y||x)&&(n.push({id:s,type:"position",position:{x:l.position.x-c+y,y:l.position.y-p+x}}),a.get(s)?.forEach(b=>{e.some(m=>m.id===b.id)||n.push({id:b.id,type:"position",position:{x:b.position.x+c,y:b.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-y:0),height:w+(p?f[1]*p-x:0)}})}),n}function PS(e,t,a,o,n,r,i){let l=o?.querySelector(".xyflow__viewport"),s=!1;if(!l)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(l),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let w=zp(p.nodeElement),y=g.measured.width!==w.width||g.measured.height!==w.height;if(!!(w.width&&w.height&&(y||!g.internals.handleBounds||p.force))){let b=p.nodeElement.getBoundingClientRect(),m=qi(g.extent)?g.extent:r,{positionAbsolute:h}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(h=SS(h,w,C))}else m&&(h=Fi(h,m,w));let v={...g,measured:w,internals:{...g.internals,positionAbsolute:h,handleBounds:{source:sS("source",p.nodeElement,b,f,g.id),target:sS("target",p.nodeElement,b,f,g.id)}}};t.set(g.id,v),g.parentId&&pb(v,t,a,{nodeOrigin:n,zIndexMode:i}),s=!0,y&&(u.push({id:g.id,type:"dimensions",dimensions:w}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:ws(v,n)}))}}if(c.length>0){let p=Up(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function zS({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function gS(e,t,a,o,n,r){let i=n,l=o.get(i)||new Map;o.set(i,l.set(a,t)),i=`${n}-${e}`;let s=o.get(i)||new Map;if(o.set(i,s.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function mb(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:l=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:l},u=`${n}-${i}--${r}-${l}`,d=`${r}-${l}--${n}-${i}`;gS("source",s,d,e,n,i),gS("target",s,u,e,r,l),t.set(o.id,o)}}function OS(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:OS(a,t):!1}function hS(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function RA(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!OS(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let l=e.get(r);l&&n.set(r,{id:r,position:l.position||{x:0,y:0},distance:{x:a.x-l.internals.positionAbsolute.x,y:a.y-l.internals.positionAbsolute.y},extent:l.extent,parentId:l.parentId,origin:l.origin,expandParent:l.expandParent,internals:{positionAbsolute:l.internals.positionAbsolute||{x:0,y:0}},measured:{width:l.measured.width??0,height:l.measured.height??0}})}return n}function Ux({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,l]of t){let s=a.get(i)?.internals.userNode;s&&n.push({...s,position:l.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function PA({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=ys(r,t);return{x:i.x-r.x,y:i.y-r.y}}function BS({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,l=new Map,s=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,w=null;function y({noDragClassName:b,handleSelector:m,domNode:h,isSelectable:v,nodeId:C,nodeClickDistance:S=0}){c=qt(h);function L({x:z,y:F}){let{nodeLookup:k,nodeExtent:N,snapGrid:D,snapToGrid:M,nodeOrigin:A,onNodeDrag:B,onSelectionDrag:P,onError:H,updateNodePositions:I}=t();r={x:z,y:F};let U=!1,j=l.size>1,Z=j&&N?Gx(bs(l)):null,te=j&&M?PA({dragItems:l,snapGrid:D,x:z,y:F}):null;for(let[$,G]of l){if(!k.has($))continue;let K={x:z-G.distance.x,y:F-G.distance.y};M&&(K=te?{x:Math.round(K.x+te.x),y:Math.round(K.y+te.y)}:ys(K,D));let ue=null;if(j&&N&&!G.extent&&Z){let{positionAbsolute:re}=G.internals,we=re.x-Z.x+N[0][0],Le=re.x+G.measured.width-Z.x2+N[1][0],qe=re.y-Z.y+N[0][1],st=re.y+G.measured.height-Z.y2+N[1][1];ue=[[we,qe],[Le,st]]}let{position:pe,positionAbsolute:oe}=Jx({nodeId:$,nextPosition:K,nodeLookup:k,nodeExtent:ue||N,nodeOrigin:A,onError:H});U=U||G.position.x!==pe.x||G.position.y!==pe.y,G.position=pe,G.internals.positionAbsolute=oe}if(g=g||U,!!U&&(I(l,!0),w&&(o||B||!C&&P))){let[$,G]=Ux({nodeId:C,dragItems:l,nodeLookup:k});o?.(w,l,$,G),B?.(w,$,G),C||P?.(w,G)}}async function _(){if(!d)return;let{transform:z,panBy:F,autoPanSpeed:k,autoPanOnNodeDrag:N}=t();if(!N){s=!1,cancelAnimationFrame(i);return}let[D,M]=Dp(u,d,k);(D!==0||M!==0)&&(r.x=(r.x??0)-D/z[2],r.y=(r.y??0)-M/z[2],await F({x:D,y:M})&&L(r)),i=requestAnimationFrame(_)}function T(z){let{nodeLookup:F,multiSelectionActive:k,nodesDraggable:N,transform:D,snapGrid:M,snapToGrid:A,selectNodesOnDrag:B,onNodeDragStart:P,onSelectionDragStart:H,unselectNodesAndEdges:I}=t();f=!0,(!B||!v)&&!k&&C&&(F.get(C)?.selected||I()),v&&B&&C&&e?.(C);let U=bu(z.sourceEvent,{transform:D,snapGrid:M,snapToGrid:A,containerBounds:d});if(r=U,l=RA(F,N,U,C),l.size>0&&(a||P||!C&&H)){let[j,Z]=Ux({nodeId:C,dragItems:l,nodeLookup:F});a?.(z.sourceEvent,l,j,Z),P?.(z.sourceEvent,j,Z),C||H?.(z.sourceEvent,Z)}}let R=lp().clickDistance(S).on("start",z=>{let{domNode:F,nodeDragThreshold:k,transform:N,snapGrid:D,snapToGrid:M}=t();d=F?.getBoundingClientRect()||null,p=!1,g=!1,w=z.sourceEvent,k===0&&T(z),r=bu(z.sourceEvent,{transform:N,snapGrid:D,snapToGrid:M,containerBounds:d}),u=_o(z.sourceEvent,d)}).on("drag",z=>{let{autoPanOnNodeDrag:F,transform:k,snapGrid:N,snapToGrid:D,nodeDragThreshold:M,nodeLookup:A}=t(),B=bu(z.sourceEvent,{transform:k,snapGrid:N,snapToGrid:D,containerBounds:d});if(w=z.sourceEvent,(z.sourceEvent.type==="touchmove"&&z.sourceEvent.touches.length>1||C&&!A.has(C))&&(p=!0),!p){if(!s&&F&&f&&(s=!0,_()),!f){let P=_o(z.sourceEvent,d),H=P.x-u.x,I=P.y-u.y;Math.sqrt(H*H+I*I)>M&&T(z)}(r.x!==B.xSnapped||r.y!==B.ySnapped)&&l&&f&&(u=_o(z.sourceEvent,d),L(B))}}).on("end",z=>{if(!f||p){p&&l.size>0&&t().updateNodePositions(l,!1);return}if(s=!1,f=!1,cancelAnimationFrame(i),l.size>0){let{nodeLookup:F,updateNodePositions:k,onNodeDragStop:N,onSelectionDragStop:D}=t();if(g&&(k(l,!1),g=!1),n||N||!C&&D){let[M,A]=Ux({nodeId:C,dragItems:l,nodeLookup:F,dragging:!1});n?.(z.sourceEvent,l,M,A),N?.(z.sourceEvent,M,A),C||D?.(z.sourceEvent,A)}}}).filter(z=>{let F=z.target;return!z.button&&(!b||!hS(F,`.${b}`,h))&&(!m||hS(F,m,h))});c.call(R)}function x(){c?.on(".drag",null)}return{update:y,destroy:x}}function zA(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())yu(n,ws(r))>0&&o.push(r);return o}var OA=250;function BA(e,t,a,o){let n=[],r=1/0,i=zA(e,a,t+OA);for(let l of i){let s=[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=jr(l,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let l=o.type==="source"?"target":"source";return n.find(s=>s.type===l)??n[0]}return n[0]}function HS(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let l=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],s=(a?l?.find(u=>u.id===a):l?.[0])??null;return s&&r?{...s,...jr(i,s,s.position,!0)}:s}function FS(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function HA(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var US=()=>!0;function FA(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:l,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:w,onConnectEnd:y,isValidConnection:x=US,onReconnectEnd:b,updateConnection:m,getTransform:h,getFromHandle:v,autoPanSpeed:C,dragThreshold:S=1,handleDomNode:L}){let _=ib(e.target),T=0,R,{x:z,y:F}=_o(e),k=FS(r,L),N=l?.getBoundingClientRect(),D=!1;if(!N||!k)return;let M=HS(n,k,o,s,t);if(!M)return;let A=_o(e,N),B=!1,P=null,H=!1,I=null;function U(){if(!d||!N)return;let[pe,oe]=Dp(A,N,C);c({x:pe,y:oe}),T=requestAnimationFrame(U)}let j={...M,nodeId:n,type:k,position:M.position},Z=s.get(n),$={inProgress:!0,isValid:null,from:jr(Z,j,ne.Left,!0),fromHandle:j,fromPosition:j.position,fromNode:Z,to:A,toHandle:null,toPosition:iS[j.position],toNode:null,pointer:A};function G(){D=!0,m($),g?.(e,{nodeId:n,handleId:o,handleType:k})}S===0&&G();function K(pe){if(!D){let{x:st,y:po}=_o(pe),ae=st-z,ve=po-F;if(!(ae*ae+ve*ve>S*S))return;G()}if(!v()||!j){ue(pe);return}let oe=h();A=_o(pe,N),R=BA(vs(A,oe,!1,[1,1]),a,s,j),B||(U(),B=!0);let re=qS(pe,{handle:R,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:x,doc:_,lib:u,flowId:f,nodeLookup:s});I=re.handleDomNode,P=re.connection,H=HA(!!R,re.isValid);let we=s.get(n),Le=we?jr(we,j,ne.Left,!0):$.from,qe={...$,from:Le,isValid:H,to:re.toHandle&&H?Ui({x:re.toHandle.x,y:re.toHandle.y},oe):A,toHandle:re.toHandle,toPosition:H&&re.toHandle?re.toHandle.position:iS[j.position],toNode:re.toHandle?s.get(re.toHandle.nodeId):null,pointer:A};m(qe),$=qe}function ue(pe){if(!("touches"in pe&&pe.touches.length>0)){if(D){(R||I)&&P&&H&&w?.(P);let{inProgress:oe,...re}=$,we={...re,toPosition:$.toHandle?$.toPosition:null};y?.(pe,we),r&&b?.(pe,we)}p(),cancelAnimationFrame(T),B=!1,H=!1,P=null,I=null,_.removeEventListener("mousemove",K),_.removeEventListener("mouseup",ue),_.removeEventListener("touchmove",K),_.removeEventListener("touchend",ue)}}_.addEventListener("mousemove",K),_.addEventListener("mouseup",ue),_.addEventListener("touchmove",K),_.addEventListener("touchend",ue)}function qS(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:l,flowId:s,isValidConnection:u=US,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${l}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=_o(e),w=i.elementFromPoint(p,g),y=w?.classList.contains(`${l}-flow__handle`)?w:c,x={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let b=FS(void 0,y),m=y.getAttribute("data-nodeid"),h=y.getAttribute("data-handleid"),v=y.classList.contains("connectable"),C=y.classList.contains("connectableend");if(!m||!b)return x;let S={source:f?m:o,sourceHandle:f?h:n,target:f?o:m,targetHandle:f?n:h};x.connection=S;let _=v&&C&&(a===Gr.Strict?f&&b==="source"||!f&&b==="target":m!==o||h!==n);x.isValid=_&&u(S),x.toHandle=HS(m,b,h,d,a,!0)}return x}var qp={onPointerDown:FA,isValid:qS};function VS({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=qt(e);function r({translateExtent:l,width:s,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let h=a(),v=m.sourceEvent.ctrlKey&&Cs()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,S=h[2]*Math.pow(2,C*v);t.scaleTo(S)},w=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},x=m=>{let h=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let v=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[v[0]-w[0],v[1]-w[1]];w=v;let S=o()*Math.max(h[2],Math.log(h[2]))*(p?-1:1),L={x:h[0]-C[0]*S,y:h[1]-C[1]*S},_=[[0,0],[s,u]];t.setViewportConstrained({x:L.x,y:L.y,zoom:h[2]},_,l)},b=Mp().on("start",y).on("zoom",f?x:null).on("zoom.wheel",c?g:null);n.call(b,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:ga}}var Vp=e=>({x:e.x,y:e.y,zoom:e.k}),qx=({x:e,y:t,zoom:a})=>Hi.translate(e,t).scale(a),Vr=(e,t)=>e.target.closest(`.${t}`),GS=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),UA=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Vx=(e,t=0,a=UA,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},jS=e=>{let t=e.ctrlKey&&Cs()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function qA({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:l,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(Vr(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let y=ga(d),x=jS(d),b=f*Math.pow(2,x);o.scaleTo(a,b,y,d);return}let c=d.deltaMode===1?20:1,p=n===Fo.Vertical?0:d.deltaX*c,g=n===Fo.Horizontal?0:d.deltaY*c;!Cs()&&d.shiftKey&&n!==Fo.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let w=Vp(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,w):(e.isPanScrolling=!0,l?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function VA({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,l=Vr(o,e);if(o.ctrlKey&&r&&l&&o.preventDefault(),i||l)return null;o.preventDefault(),a.call(this,o,n)}}function GA({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Vp(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function jA({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&GS(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Vp(r.transform))}}function XA({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&GS(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let l=Vp(i.transform);e.prevViewport=l,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,l)},a?150:0)}}}function YA({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:l,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(Vr(c,`${d}-flow__node`)||Vr(c,`${d}-flow__edge`)||Vr(c,`${d}-flow__selection`)||Vr(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||l||f&&!w||Vr(c,s)&&w||Vr(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let y=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&y}}function XS({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:l,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(F=>{let k=F[0];k&&(f=[[0,0],[k.contentRect.width,k.contentRect.height]])}):null)?.observe(e);let p=Mp().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=qt(e).call(p);h({x:n.x,y:n.y,zoom:hs(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=g.on("wheel.zoom"),y=g.on("dblclick.zoom");p.wheelDelta(jS);async function x(F,k){return g?new Promise(N=>{p?.interpolate(k?.interpolate==="linear"?Yn:zi).transform(Vx(g,k?.duration,k?.ease,()=>N(!0)),F)}):!1}function b({noWheelClassName:F,noPanClassName:k,onPaneContextMenu:N,userSelectionActive:D,panOnScroll:M,panOnDrag:A,panOnScrollMode:B,panOnScrollSpeed:P,preventScrolling:H,zoomOnPinch:I,zoomOnScroll:U,zoomOnDoubleClick:j,panActivationKeyPressed:Z=!1,zoomActivationKeyPressed:te,lib:$,onTransformChange:G,connectionInProgress:K,paneClickDistance:ue,selectionOnDrag:pe}){D&&!u.isZoomingOrPanning&&m();let oe=M&&!te&&!D;p.clickDistance(pe?1/0:!ko(ue)||ue<0?0:ue);let re=oe?qA({zoomPanValues:u,noWheelClassName:F,d3Selection:g,d3Zoom:p,panOnScrollMode:B,panOnScrollSpeed:P,zoomOnPinch:I,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:l}):VA({noWheelClassName:F,preventScrolling:H,d3ZoomHandler:w});g.on("wheel.zoom",re,{passive:!1});let we=GA({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:i});p.on("start",we);let Le=jA({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!N,onPanZoom:r,onTransformChange:G});p.on("zoom",Le);let qe=XA({zoomPanValues:u,panOnDrag:A,panOnScroll:M,onPaneContextMenu:N,onPanZoomEnd:l,onDraggingChange:s});p.on("end",qe);let st=YA({panActivationKeyPressed:Z,zoomActivationKeyPressed:te,panOnDrag:A,zoomOnScroll:U,panOnScroll:M,zoomOnDoubleClick:j,zoomOnPinch:I,userSelectionActive:D,noPanClassName:k,noWheelClassName:F,lib:$,connectionInProgress:K});p.filter(st),j?g.on("dblclick.zoom",y):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function h(F,k,N){let D=qx(F),M=p?.constrain()(D,k,N);return M&&await x(M),M}async function v(F,k){let N=qx(F);return await x(N,k),N}function C(F){if(g){let k=qx(F),N=g.property("__zoom");(N.k!==F.zoom||N.x!==F.x||N.y!==F.y)&&p?.transform(g,k,null,{sync:!0})}}function S(){let F=g?xu(g.node()):{x:0,y:0,k:1};return{x:F.x,y:F.y,zoom:F.k}}async function L(F,k){return g?new Promise(N=>{p?.interpolate(k?.interpolate==="linear"?Yn:zi).scaleTo(Vx(g,k?.duration,k?.ease,()=>N(!0)),F)}):!1}async function _(F,k){return g?new Promise(N=>{p?.interpolate(k?.interpolate==="linear"?Yn:zi).scaleBy(Vx(g,k?.duration,k?.ease,()=>N(!0)),F)}):!1}function T(F){p?.scaleExtent(F)}function R(F){p?.translateExtent(F)}function z(F){let k=!ko(F)||F<0?0:F;p?.clickDistance(k)}return{update:b,destroy:m,setViewport:v,setViewportConstrained:h,getViewport:S,scaleTo:L,scaleBy:_,setScaleExtent:T,setTranslateExtent:R,syncViewport:C,setClickDistance:z}}var Xr;(function(e){e.Line="line",e.Handle="handle"})(Xr||(Xr={}));function ZA({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,l=a-o,s=[i>0?1:i<0?-1:0,l>0?1:l<0?-1:0];return i&&n&&(s[0]=s[0]*-1),l&&r&&(s[1]=s[1]*-1),s}function xS(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function Ur(e,t){return Math.max(0,t-e)}function qr(e,t){return Math.max(0,e-t)}function Ep(e,t,a){return Math.max(0,t-e,e-a)}function bS(e,t){return e?!t:t}function WA(e,t,a,o,n,r,i,l){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:w,maxWidth:y,minHeight:x,maxHeight:b}=o,{x:m,y:h,width:v,height:C,aspectRatio:S}=e,L=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?g-e.pointerY:0),T=v+(s?-L:L),R=C+(u?-_:_),z=-r[0]*v,F=-r[1]*C,k=Ep(T,w,y),N=Ep(R,x,b);if(i){let A=0,B=0;s&&L<0?A=Ur(m+L+z,i[0][0]):!s&&L>0&&(A=qr(m+T+z,i[1][0])),u&&_<0?B=Ur(h+_+F,i[0][1]):!u&&_>0&&(B=qr(h+R+F,i[1][1])),k=Math.max(k,A),N=Math.max(N,B)}if(l){let A=0,B=0;s&&L>0?A=qr(m+L,l[0][0]):!s&&L<0&&(A=Ur(m+T,l[1][0])),u&&_>0?B=qr(h+_,l[0][1]):!u&&_<0&&(B=Ur(h+R,l[1][1])),k=Math.max(k,A),N=Math.max(N,B)}if(n){if(d){let A=Ep(T/S,x,b)*S;if(k=Math.max(k,A),i){let B=0;!s&&!u||s&&!u&&c?B=qr(h+F+T/S,i[1][1])*S:B=Ur(h+F+(s?L:-L)/S,i[0][1])*S,k=Math.max(k,B)}if(l){let B=0;!s&&!u||s&&!u&&c?B=Ur(h+T/S,l[1][1])*S:B=qr(h+(s?L:-L)/S,l[0][1])*S,k=Math.max(k,B)}}if(f){let A=Ep(R*S,w,y)/S;if(N=Math.max(N,A),i){let B=0;!s&&!u||u&&!s&&c?B=qr(m+R*S+z,i[1][0])/S:B=Ur(m+(u?_:-_)*S+z,i[0][0])/S,N=Math.max(N,B)}if(l){let B=0;!s&&!u||u&&!s&&c?B=Ur(m+R*S,l[1][0])/S:B=qr(m+(u?_:-_)*S,l[0][0])/S,N=Math.max(N,B)}}}_=_+(_<0?N:-N),L=L+(L<0?k:-k),n&&(c?T>R*S?_=(bS(s,u)?-L:L)/S:L=(bS(s,u)?-_:_)*S:d?(_=L/S,u=s):(L=_*S,s=u));let D=s?m+L:m,M=u?h+_:h;return{width:v+(s?-L:L),height:C+(u?-_:_),x:r[0]*L*(s?-1:1)+D,y:r[1]*_*(u?-1:1)+M}}var YS={width:0,height:0,x:0,y:0},KA={...YS,pointerX:0,pointerY:0,aspectRatio:1};function $A(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,l=a[0]*r,s=a[1]*i;return[[o-l,n-s],[o+r-l,n+i-s]]}function ZS({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=qt(e),i={controlDirection:xS("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function l({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:w,shouldResize:y}){let x={...YS},b={...KA};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:xS(u)};let m,h=null,v=[],C,S,L,_=!1,T=lp().on("start",R=>{let{nodeLookup:z,transform:F,snapGrid:k,snapToGrid:N,nodeOrigin:D,paneDomNode:M}=a();if(m=z.get(t),!m)return;h=M?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:B}=bu(R.sourceEvent,{transform:F,snapGrid:k,snapToGrid:N,containerBounds:h});x={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},b={...x,pointerX:A,pointerY:B,aspectRatio:x.width/x.height},C=void 0,S=qi(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=z.get(m.parentId)),C&&m.extent==="parent"&&(S=[[0,0],[C.measured.width,C.measured.height]]),v=[],L=void 0;for(let[P,H]of z)if(H.parentId===t&&(v.push({id:P,position:{...H.position},extent:H.extent}),H.extent==="parent"||H.expandParent)){let I=$A(H,m,H.origin??D);L?L=[[Math.min(I[0][0],L[0][0]),Math.min(I[0][1],L[0][1])],[Math.max(I[1][0],L[1][0]),Math.max(I[1][1],L[1][1])]]:L=I}p?.(R,{...x})}).on("drag",R=>{let{transform:z,snapGrid:F,snapToGrid:k,nodeOrigin:N}=a(),D=bu(R.sourceEvent,{transform:z,snapGrid:F,snapToGrid:k,containerBounds:h}),M=[];if(!m)return;let{x:A,y:B,width:P,height:H}=x,I={},U=m.origin??N,{width:j,height:Z,x:te,y:$}=WA(b,i.controlDirection,D,i.boundaries,i.keepAspectRatio,U,S,L),G=j!==P,K=Z!==H,ue=te!==A&&G,pe=$!==B&&K;if(!ue&&!pe&&!G&&!K)return;if((ue||pe||U[0]===1||U[1]===1)&&(I.x=ue?te:x.x,I.y=pe?$:x.y,x.x=I.x,x.y=I.y,v.length>0)){let Le=te-A,qe=$-B;for(let st of v)st.position={x:st.position.x-Le+U[0]*(j-P),y:st.position.y-qe+U[1]*(Z-H)},M.push(st)}if((G||K)&&(I.width=G&&(!i.resizeDirection||i.resizeDirection==="horizontal")?j:x.width,I.height=K&&(!i.resizeDirection||i.resizeDirection==="vertical")?Z:x.height,x.width=I.width,x.height=I.height),C&&m.expandParent){let Le=U[0]*(I.width??0);I.x&&I.x<Le&&(x.x=Le,b.x=b.x-(I.x-Le));let qe=U[1]*(I.height??0);I.y&&I.y<qe&&(x.y=qe,b.y=b.y-(I.y-qe))}let oe=ZA({width:x.width,prevWidth:P,height:x.height,prevHeight:H,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),re={...x,direction:oe};y?.(R,re)!==!1&&(_=!0,g?.(R,re),o(I,M))}).on("end",R=>{_&&(w?.(R,{...x}),n?.({...x}),_=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:l,destroy:s}}var lL=E(Q(),1),sL=E(aL(),1);var nL={},oL=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(nL.env?nL.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},rL=e=>e?oL(e):oL;var{useDebugValue:g6}=lL.default,{useSyncExternalStoreWithSelector:h6}=sL.default,x6=e=>e;function hb(e,t=x6,a){let o=h6(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return g6(o),o}var iL=(e,t)=>{let a=rL(e),o=(n,r=t)=>hb(a,n,r);return Object.assign(o,a),o},dL=(e,t)=>e?iL(e,t):iL;function Ye(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var b6=E(Bt()),Zp=(0,V.createContext)(null),w6=Zp.Provider,zL=to.error001("react");function Ce(e,t){let a=(0,V.useContext)(Zp);if(a===null)throw new Error(zL);return hb(a,e,t)}function nt(){let e=(0,V.useContext)(Zp);if(e===null)throw new Error(zL);return(0,V.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var uL={display:"none"},y6={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},OL="react-flow__node-desc",BL="react-flow__edge-desc",v6="react-flow__aria-live",C6=e=>e.ariaLiveMessage,S6=e=>e.ariaLabelConfig;function L6({rfId:e}){let t=Ce(C6);return(0,q.jsx)("div",{id:`${v6}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:y6,children:t})}function k6({rfId:e,disableKeyboardA11y:t}){let a=Ce(S6);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{id:`${OL}-${e}`,style:uL,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,q.jsx)("div",{id:`${BL}-${e}`,style:uL,children:a["edge.a11yDescription.default"]}),!t&&(0,q.jsx)(L6,{rfId:e})]})}var Wp=(0,V.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,q.jsx)("div",{className:pt(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Wp.displayName="Panel";var cL="https://reactflow.dev?utm_source=attribution";function _6({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,q.jsx)(Wp,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${cL}`,children:(0,q.jsx)("a",{href:cL,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var I6=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},jp=e=>e.id;function M6(e,t){return Ye(e.selectedNodes.map(jp),t.selectedNodes.map(jp))&&Ye(e.selectedEdges.map(jp),t.selectedEdges.map(jp))}function N6({onSelectionChange:e}){let t=nt(),{selectedNodes:a,selectedEdges:o}=Ce(I6,M6);return(0,V.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var E6=e=>!!e.onSelectionChangeHandlers;function T6({onSelectionChange:e}){let t=Ce(E6);return e||t?(0,q.jsx)(N6,{onSelectionChange:e}):null}var HL=[0,0],A6={x:0,y:0,zoom:1},D6=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],fL=[...D6,"rfId"],R6=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),pL={translateExtent:xs,nodeOrigin:HL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function P6(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:l,setDefaultNodesAndEdges:s}=Ce(R6,Ye),u=nt();(0,V.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=pL,l()}),[]);let d=(0,V.useRef)(pL);return(0,V.useEffect)(()=>{for(let f of fL){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:_S(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},fL.map(f=>e[f])),null}function mL(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function z6(e){let[t,a]=(0,V.useState)(e==="system"?null:e);return(0,V.useEffect)(()=>{if(e!=="system"){a(e);return}let o=mL(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:mL()?.matches?"dark":"light"}var gL=typeof document<"u"?document:null;function Su(e=null,t={target:gL,actInsideInputWithModifier:!0}){let[a,o]=(0,V.useState)(!1),n=(0,V.useRef)(!1),r=(0,V.useRef)(new Set([])),[i,l]=(0,V.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,V.useEffect)(()=>{let s=t?.target??gL,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&lb(p))return!1;let w=xL(p.code,l);if(r.current.add(p[w]),hL(i,r.current,!1)){let y=p.composedPath?.()?.[0]||p.target,x=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(n.current||!x)&&p.preventDefault(),o(!0)}},f=p=>{let g=xL(p.code,l);hL(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function hL(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function xL(e,t){return t.includes(e)?"code":"key"}var O6=()=>{let e=nt();return(0,V.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:l}=e.getState(),s=vu(t,o,n,r,i,a?.padding??.1);return l?(await l.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:l,y:s}=i.getBoundingClientRect(),u={x:t.x-l,y:t.y-s},d=a.snapGrid??n,f=a.snapToGrid??r;return vs(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=Ui(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function FL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let l={...r};for(let s of i)B6(s,l);a.push(l)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function B6(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function yb(e,t){return FL(e,t)}function vb(e,t){return FL(e,t)}function Vi(e,t){return{id:e,type:"select",selected:t}}function ks(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(Vi(r.id,i)))}return o}function bL({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),l=i?.internals?.userNode??i;l!==void 0&&l!==r&&a.push({id:r.id,item:r,type:"replace"}),l===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function wL(e){return{id:e.id,type:"remove"}}var H6=ab("React Flow","https://reactflow.dev/");function F6(e,t,a={}){return NS(e,t,{...a,onError:a.onError??H6})}var yL=e=>wS(e),U6=e=>Wx(e);function UL(e){return(0,V.forwardRef)(e)}var qL=typeof window<"u"?V.useLayoutEffect:V.useEffect;function vL(e){let[t,a]=(0,V.useState)(BigInt(0)),[o]=(0,V.useState)(()=>q6(()=>a(n=>n+BigInt(1))));return qL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function q6(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var VL=(0,V.createContext)(null);function V6({children:e}){let t=nt(),a=(0,V.useCallback)(l=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),w=s;for(let x of l)w=typeof x=="function"?x(w):x;let y=bL({items:w,lookup:c});for(let x of g.values())y=x(y);d&&u(w),y.length>0?f?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:x,nodes:b,setNodes:m}=t.getState();x&&m(b)})},[]),o=vL(a),n=(0,V.useCallback)(l=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let g of l)p=typeof g=="function"?g(p):g;d?u(p):f&&f(bL({items:p,lookup:c}))},[]),r=vL(n),i=(0,V.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,q.jsx)(VL.Provider,{value:i,children:e})}function G6(){let e=(0,V.useContext)(VL);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var j6=e=>!!e.panZoom;function ao(){let e=O6(),t=nt(),a=G6(),o=Ce(j6),n=(0,V.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},l=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=yL(f)?f:c.get(f.id),w=g.parentId?nb(g.position,g.measured,g.parentId,c,p):g.position,y={...g,position:w,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return ws(y)},u=(f,c,p={replace:!1})=>{i(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&yL(y)?y:{...w,...y}}return w}))},d=(f,c,p={replace:!1})=>{l(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&U6(y)?y:{...w,...y}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:l,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,w,y]=p;return{nodes:f.map(x=>({...x})),edges:c.map(x=>({...x})),viewport:{x:g,y:w,zoom:y}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:w,onEdgesDelete:y,triggerNodeChanges:x,triggerEdgeChanges:b,onDelete:m,onBeforeDelete:h}=t.getState(),{nodes:v,edges:C}=await CS({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:h}),S=C.length>0,L=v.length>0;if(S){let _=C.map(wL);y?.(C),b(_)}if(L){let _=v.map(wL);w?.(v),x(_)}return(L||S)&&m?.({nodes:v,edges:C}),{deletedNodes:v,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=tb(f),w=g?f:s(f),y=p!==void 0;return w?(p||t.getState().nodes).filter(x=>{let b=t.getState().nodeLookup.get(x.id);if(b&&!g&&(x.id===f.id||!b.internals.positionAbsolute))return!1;let m=ws(y?x:b),h=yu(m,w);return c&&h>0||h>=m.width*m.height||h>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=tb(f)?f:s(f);if(!w)return!1;let y=yu(w,c);return p&&y>0||y>=c.width*c.height||y>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Qx(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??kS();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,V.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var CL=e=>e.selected,X6=typeof window<"u"?window:void 0;function Y6({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=nt(),{deleteElements:o}=ao(),n=Su(e,{actInsideInputWithModifier:!1}),r=Su(t,{target:X6});(0,V.useEffect)(()=>{if(n){let{edges:i,nodes:l}=a.getState();o({nodes:l.filter(CL),edges:i.filter(CL)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,V.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function Z6(e){let t=nt();(0,V.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=zp(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",to.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Kp={position:"absolute",width:"100%",height:"100%",top:0,left:0},W6=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function K6({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=Fo.Free,zoomOnDoubleClick:l=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:w,noWheelClassName:y,noPanClassName:x,onViewportChange:b,isControlledViewport:m,paneClickDistance:h,selectionOnDrag:v}){let C=nt(),S=(0,V.useRef)(null),{userSelectionActive:L,lib:_,connectionInProgress:T}=Ce(W6,Ye),R=Su(p),z=(0,V.useRef)();Z6(S);let F=(0,V.useCallback)(k=>{b?.({x:k[0],y:k[1],zoom:k[2]}),m||C.setState({transform:k})},[b,m]);return(0,V.useEffect)(()=>{if(S.current){z.current=XS({domNode:S.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:M=>C.setState(A=>A.paneDragging===M?A:{paneDragging:M}),onPanZoomStart:(M,A)=>{let{onViewportChangeStart:B,onMoveStart:P}=C.getState();P?.(M,A),B?.(A)},onPanZoom:(M,A)=>{let{onViewportChange:B,onMove:P}=C.getState();P?.(M,A),B?.(A)},onPanZoomEnd:(M,A)=>{let{onViewportChangeEnd:B,onMoveEnd:P}=C.getState();P?.(M,A),B?.(A)}});let{x:k,y:N,zoom:D}=z.current.getViewport();return C.setState({panZoom:z.current,transform:[k,N,D],domNode:S.current.closest(".react-flow")}),()=>{z.current?.destroy()}}},[]),(0,V.useEffect)(()=>{z.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:l,panOnDrag:s,zoomActivationKeyPressed:R,preventScrolling:g,noPanClassName:x,userSelectionActive:L,noWheelClassName:y,lib:_,onTransformChange:F,connectionInProgress:T,selectionOnDrag:v,paneClickDistance:h})},[e,t,a,o,n,r,i,l,s,R,g,x,L,y,_,F,T,v,h]),(0,q.jsx)("div",{className:"react-flow__renderer",ref:S,style:Kp,children:w})}var $6=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Q6(){let{userSelectionActive:e,userSelectionRect:t}=Ce($6,Ye);return e&&t?(0,q.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var xb=(e,t)=>a=>{a.target===t.current&&e?.(a)},J6=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function e8({isSelecting:e,selectionKeyPressed:t,selectionMode:a=Wn.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:l,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:w}){let y=(0,V.useRef)(0),x=nt(),{userSelectionActive:b,elementsSelectable:m,dragging:h,panBy:v,autoPanSpeed:C}=Ce(J6,Ye),S=m&&(e||b),L=(0,V.useRef)(null),_=(0,V.useRef)(),T=(0,V.useRef)(new Set),R=(0,V.useRef)(new Set),z=(0,V.useRef)(!1),F=(0,V.useRef)(!1),k=(0,V.useRef)({x:0,y:0}),N=(0,V.useRef)(!1),D=G=>{if(F.current||z.current||x.getState().connection.inProgress){F.current=!1,z.current=!1;return}u?.(G),x.getState().resetSelectedElements(),x.setState({nodesSelectionActive:!1})},M=G=>{if(Array.isArray(o)&&o?.includes(2)){G.preventDefault();return}d?.(G)},A=f?G=>f(G):void 0,B=G=>{F.current&&(G.stopPropagation(),F.current=!1)},P=G=>{if(G.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:K,transform:ue}=x.getState();if(_.current=K?.getBoundingClientRect(),!_.current)return;let pe=G.target===L.current;if(!pe&&!!G.target.closest(".nokey")||!e||!(i&&pe||t)||G.button!==0||!G.isPrimary)return;G.target?.setPointerCapture?.(G.pointerId),F.current=!1;let{x:we,y:Le}=_o(G.nativeEvent,_.current),qe=vs({x:we,y:Le},ue);x.setState({userSelectionRect:{width:0,height:0,startX:qe.x,startY:qe.y,x:we,y:Le}}),pe||(G.stopPropagation(),G.preventDefault())};function H(G,K){let{userSelectionRect:ue}=x.getState();if(!ue)return;let{transform:pe,nodeLookup:oe,edgeLookup:re,connectionLookup:we,triggerNodeChanges:Le,triggerEdgeChanges:qe,defaultEdgeOptions:st}=x.getState(),po={x:ue.startX,y:ue.startY},{x:ae,y:ve}=Ui(po,pe),Oe={startX:po.x,startY:po.y,x:G<ae?G:ae,y:K<ve?K:ve,width:Math.abs(G-ae),height:Math.abs(K-ve)},Ot=T.current,wt=R.current;T.current=new Set(Ap(oe,Oe,pe,a===Wn.Partial,!0).map(yt=>yt.id)),R.current=new Set;let _a=st?.selectable??!0;for(let yt of T.current){let Ia=we.get(yt);if(Ia)for(let{edgeId:Ao}of Ia.values()){let Ln=re.get(Ao);Ln&&(Ln.selectable??_a)&&R.current.add(Ao)}}if(!rb(Ot,T.current)){let yt=ks(oe,T.current,!0);Le(yt)}if(!rb(wt,R.current)){let yt=ks(re,R.current);qe(yt)}x.setState({userSelectionRect:Oe,userSelectionActive:!0,nodesSelectionActive:!1})}function I(){if(!n||!_.current)return;let[G,K]=Dp(k.current,_.current,C);v({x:G,y:K}).then(ue=>{if(!F.current||!ue){y.current=requestAnimationFrame(I);return}let{x:pe,y:oe}=k.current;H(pe,oe),y.current=requestAnimationFrame(I)})}let U=()=>{cancelAnimationFrame(y.current),y.current=0,N.current=!1};(0,V.useEffect)(()=>()=>U(),[]);let j=G=>{let{userSelectionRect:K,transform:ue,resetSelectedElements:pe}=x.getState();if(!_.current||!K)return;let{x:oe,y:re}=_o(G.nativeEvent,_.current);k.current={x:oe,y:re};let we=Ui({x:K.startX,y:K.startY},ue);if(!F.current){let Le=t?0:r;if(Math.hypot(oe-we.x,re-we.y)<=Le)return;pe(),l?.(G)}F.current=!0,N.current||(I(),N.current=!0),H(oe,re)},Z=G=>{if(!S){G.target===L.current&&x.getState().connection.inProgress&&(z.current=!0);return}G.button===0&&(G.target?.releasePointerCapture?.(G.pointerId),!b&&G.target===L.current&&x.getState().userSelectionRect&&D?.(G),x.setState({userSelectionActive:!1,userSelectionRect:null}),F.current&&(s?.(G),x.setState({nodesSelectionActive:T.current.size>0})),U())},te=G=>{G.target?.releasePointerCapture?.(G.pointerId),U()},$=o===!0||Array.isArray(o)&&o.includes(0);return(0,q.jsxs)("div",{className:pt(["react-flow__pane",{draggable:$,dragging:h,selection:e}]),onClick:S?void 0:xb(D,L),onContextMenu:xb(M,L),onWheel:xb(A,L),onPointerEnter:S?void 0:c,onPointerMove:S?j:p,onPointerUp:Z,onPointerCancel:S?te:void 0,onPointerDownCapture:S?P:void 0,onClickCapture:S?B:void 0,onPointerLeave:g,ref:L,style:Kp,children:[w,(0,q.jsx)(Q6,{})]})}function wb({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:l,onError:s}=t.getState(),u=l.get(e);if(!u){s?.("012",to.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function GL({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let l=nt(),[s,u]=(0,V.useState)(!1),d=(0,V.useRef)();return(0,V.useEffect)(()=>{if(!t)return d.current=BS({getStoreItems:()=>l.getState(),onNodeMouseDown:f=>{wb({id:f,store:l,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,l,e]),(0,V.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),s}var t8=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function jL(){let e=nt();return(0,V.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:l,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=t8(i),p=n?r[0]:5,g=n?r[1]:5,w=a.direction.x*p*a.factor,y=a.direction.y*g*a.factor;for(let[,x]of u){if(!c(x))continue;let b={x:x.internals.positionAbsolute.x+w,y:x.internals.positionAbsolute.y+y};n&&(b=ys(b,r));let{position:m,positionAbsolute:h}=Jx({nodeId:x.id,nextPosition:b,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:l});x.position=m,x.internals.positionAbsolute=h,f.set(x.id,x)}s(f)},[])}var Cb=(0,V.createContext)(null),a8=Cb.Provider;Cb.Consumer;var XL=()=>(0,V.useContext)(Cb),o8=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),YL=(0,V.createContext)(null);function n8({children:e}){let t=Ce(o8,Ye);return(0,q.jsx)(YL.Provider,{value:t,children:e})}function r8(){let e=(0,V.useContext)(YL);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var i8={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},l8=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:l,toHandle:s,isValid:u}=i;if(!l&&!n)return i8;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:l?.nodeId===e&&l?.id===t&&l?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===Gr.Strict?l?.type!==a:e!==l?.nodeId||t!==l?.id,connectionInProcess:!!l,clickConnectionInProcess:!!n,valid:d&&u}};function s8({type:e="source",position:t=ne.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:l,children:s,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=i||null,w=e==="target",y=nt(),x=XL(),{connectOnClick:b,noPanClassName:m,rfId:h}=r8(),{connectingFrom:v,connectingTo:C,clickConnecting:S,isPossibleEndHandle:L,connectionInProcess:_,clickConnectionInProcess:T,valid:R}=Ce(l8(x,g,e),Ye);x||y.getState().onError?.("010",to.error010());let z=N=>{let{defaultEdgeOptions:D,onConnect:M,hasDefaultEdges:A}=y.getState(),B={...D,...N};if(A){let{edges:P,setEdges:H,onError:I}=y.getState();H(F6(B,P,{onError:I}))}M?.(B),l?.(B)},F=N=>{if(!x)return;let D=sb(N.nativeEvent);if(n&&(D&&N.button===0||!D)){let M=y.getState();qp.onPointerDown(N.nativeEvent,{handleDomNode:N.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:w,handleId:g,nodeId:x,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...A)=>y.getState().onConnectEnd?.(...A),updateConnection:M.updateConnection,onConnect:z,isValidConnection:a||((...A)=>y.getState().isValidConnection?.(...A)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}D?d?.(N):f?.(N)},k=N=>{let{onClickConnectStart:D,onClickConnectEnd:M,connectionClickStartHandle:A,connectionMode:B,isValidConnection:P,lib:H,rfId:I,nodeLookup:U,connection:j}=y.getState();if(!x||!A&&!n)return;if(!A){D?.(N.nativeEvent,{nodeId:x,handleId:g,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:x,type:e,id:g}});return}let Z=ib(N.target),te=a||P,{connection:$,isValid:G}=qp.isValid(N.nativeEvent,{handle:{nodeId:x,id:g,type:e},connectionMode:B,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:te,flowId:I,doc:Z,lib:H,nodeLookup:U});G&&$&&z($);let K=structuredClone(j);delete K.inProgress,K.toPosition=K.toHandle?K.toHandle.position:null,M?.(N,K),y.setState({connectionClickStartHandle:null})};return(0,q.jsx)("div",{"data-handleid":g,"data-nodeid":x,"data-handlepos":t,"data-id":`${h}-${x}-${g}-${e}`,className:pt(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:S,connectingfrom:v,connectingto:C,valid:R,connectionindicator:o&&(!_||L)&&(_||T?r:n)}]),onMouseDown:F,onTouchStart:F,onClick:b?k:void 0,ref:p,...c,children:s})}var _s=(0,V.memo)(UL(s8));function d8({data:e,isConnectable:t,sourcePosition:a=ne.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[e?.label,(0,q.jsx)(_s,{type:"source",position:a,isConnectable:t})]})}function u8({data:e,isConnectable:t,targetPosition:a=ne.Top,sourcePosition:o=ne.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_s,{type:"target",position:a,isConnectable:t}),e?.label,(0,q.jsx)(_s,{type:"source",position:o,isConnectable:t})]})}function c8(){return null}function f8({data:e,isConnectable:t,targetPosition:a=ne.Top}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_s,{type:"target",position:a,isConnectable:t}),e?.label]})}var Yp={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},SL={input:d8,default:u8,output:f8,group:c8};function p8(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var m8=e=>{let{width:t,height:a,x:o,y:n}=bs(e.nodeLookup,{filter:r=>!!r.selected});return{width:ko(t)?t:null,height:ko(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function g8({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=nt(),{width:n,height:r,transformString:i,userSelectionActive:l}=Ce(m8,Ye),s=jL(),u=(0,V.useRef)(null);(0,V.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!l&&n!==null&&r!==null;if(GL({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(w=>w.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Yp,p.key)&&(p.preventDefault(),s({direction:Yp[p.key],factor:p.shiftKey?4:1}))};return(0,q.jsx)("div",{className:pt(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,q.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var LL=typeof window<"u"?window:void 0,h8=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function ZL({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:l,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:w,zoomActivationKeyCode:y,elementsSelectable:x,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:h,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:L,autoPanOnSelection:_,defaultViewport:T,translateExtent:R,minZoom:z,maxZoom:F,preventScrolling:k,onSelectionContextMenu:N,noWheelClassName:D,noPanClassName:M,disableKeyboardA11y:A,onViewportChange:B,isControlledViewport:P}){let{nodesSelectionActive:H,userSelectionActive:I}=Ce(h8,Ye),U=Su(u,{target:LL}),j=Su(w,{target:LL}),Z=j||L,te=j||h,$=d&&Z!==!0,G=U||I||$;return Y6({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,q.jsx)(K6,{onPaneContextMenu:r,elementsSelectable:x,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:te,panActivationKeyPressed:j,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:!U&&Z,defaultViewport:T,translateExtent:R,minZoom:z,maxZoom:F,zoomActivationKeyCode:y,preventScrolling:k,noWheelClassName:D,noPanClassName:M,onViewportChange:B,isControlledViewport:P,paneClickDistance:l,selectionOnDrag:$,children:(0,q.jsxs)(e8,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:Z,autoPanOnSelection:_,isSelecting:!!G,selectionMode:f,selectionKeyPressed:U,paneClickDistance:l,selectionOnDrag:$,children:[e,H&&(0,q.jsx)(g8,{onSelectionContextMenu:N,noPanClassName:M,disableKeyboardA11y:A})]})})}ZL.displayName="FlowRenderer";var x8=(0,V.memo)(ZL),b8=e=>t=>e?Ap(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function w8(e){return Ce((0,V.useCallback)(b8(e),[e]),Ye)}var y8=e=>e.updateNodeInternals;function v8(){let e=Ce(y8),[t]=(0,V.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,V.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function C8({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=nt(),r=(0,V.useRef)(null),i=(0,V.useRef)(null),l=(0,V.useRef)(e.sourcePosition),s=(0,V.useRef)(e.targetPosition),u=(0,V.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,V.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,V.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,V.useEffect)(()=>{if(r.current){let f=u.current!==t,c=l.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(u.current=t,l.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function S8({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:l,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:w,nodeTypes:y,nodeClickDistance:x,onError:b}){let{node:m,internals:h,isParent:v}=Ce(G=>{let K=G.nodeLookup.get(e),ue=G.parentLookup.has(e);return{node:K,internals:K.internals,isParent:ue}},Ye),C=m.type||"default",S=y?.[C]||SL[C];S===void 0&&(b?.("003",to.error003(C)),C="default",S=y?.default||SL.default);let L=!!(m.draggable||l&&typeof m.draggable>"u"),_=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||d&&typeof m.focusable>"u"),z=nt(),F=ob(m),k=C8({node:m,nodeType:C,hasDimensions:F,resizeObserver:f}),N=GL({nodeRef:k,disabled:m.hidden||!L,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:x}),D=jL();if(m.hidden)return null;let M=Io(m),A=p8(m),B=_||L||t||a||o||n,P=a?G=>a(G,{...h.userNode}):void 0,H=o?G=>o(G,{...h.userNode}):void 0,I=n?G=>n(G,{...h.userNode}):void 0,U=r?G=>r(G,{...h.userNode}):void 0,j=i?G=>i(G,{...h.userNode}):void 0,Z=G=>{let{selectNodesOnDrag:K,nodeDragThreshold:ue}=z.getState();_&&(!K||!L||ue>0)&&wb({id:e,store:z,nodeRef:k}),t&&t(G,{...h.userNode})},te=G=>{if(!(lb(G.nativeEvent)||g)){if(jx.includes(G.key)&&_){let K=G.key==="Escape";wb({id:e,store:z,unselect:K,nodeRef:k})}else if(L&&m.selected&&Object.prototype.hasOwnProperty.call(Yp,G.key)){G.preventDefault();let{ariaLabelConfig:K}=z.getState();z.setState({ariaLiveMessage:K["node.a11yDescription.ariaLiveMessage"]({direction:G.key.replace("Arrow","").toLowerCase(),x:~~h.positionAbsolute.x,y:~~h.positionAbsolute.y})}),D({direction:Yp[G.key],factor:G.shiftKey?4:1})}}},$=()=>{if(g||!k.current?.matches(":focus-visible"))return;let{transform:G,width:K,height:ue,autoPanOnNodeFocus:pe,setCenter:oe}=z.getState();if(!pe)return;Ap(new Map([[e,m]]),{x:0,y:0,width:K,height:ue},G,!0).length>0||oe(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:G[2]})};return(0,q.jsx)("div",{className:pt(["react-flow__node",`react-flow__node-${C}`,{[p]:L},m.className,{selected:m.selected,selectable:_,parent:v,draggable:L,dragging:N}]),ref:k,style:{zIndex:h.z,transform:`translate(${h.positionAbsolute.x}px,${h.positionAbsolute.y}px)`,pointerEvents:B?"all":"none",visibility:F?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:P,onMouseMove:H,onMouseLeave:I,onContextMenu:U,onClick:Z,onDoubleClick:j,onKeyDown:R?te:void 0,tabIndex:R?0:void 0,onFocus:R?$:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${OL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,q.jsx)(a8,{value:e,children:(0,q.jsx)(S,{id:e,data:m.data,type:C,positionAbsoluteX:h.positionAbsolute.x,positionAbsoluteY:h.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:L,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:N,dragHandle:m.dragHandle,zIndex:h.z,parentId:m.parentId,...M})})})}var L8=(0,V.memo)(S8),k8=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function WL(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=Ce(k8,Ye),r=w8(e.onlyRenderVisibleElements),i=v8();return(0,q.jsx)("div",{className:"react-flow__nodes",style:Kp,children:r.map(l=>(0,q.jsx)(L8,{id:l,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},l))})}WL.displayName="NodeRenderer";var _8=(0,V.memo)(WL);function I8(e){return Ce((0,V.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&MS({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ye)}var M8=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,q.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},N8=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,q.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},kL={[gs.Arrow]:M8,[gs.ArrowClosed]:N8};function E8(e){let t=nt();return(0,V.useMemo)(()=>Object.prototype.hasOwnProperty.call(kL,e)?kL[e]:(t.getState().onError?.("009",to.error009(e)),null),[e])}var T8=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:l="auto-start-reverse"})=>{let s=E8(t);return s?(0,q.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:l,refX:"0",refY:"0",children:(0,q.jsx)(s,{color:a,strokeWidth:i})}):null},KL=({defaultColor:e,rfId:t})=>{let a=Ce(r=>r.edges),o=Ce(r=>r.defaultEdgeOptions),n=(0,V.useMemo)(()=>TS(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,q.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,q.jsx)("defs",{children:n.map(r=>(0,q.jsx)(T8,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};KL.displayName="MarkerDefinitions";var A8=(0,V.memo)(KL);function $L({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:l=2,children:s,className:u,...d}){let[f,c]=(0,V.useState)({x:1,y:0,width:0,height:0}),p=pt(["react-flow__edge-textwrapper",u]),g=(0,V.useRef)(null);return(0,V.useEffect)(()=>{if(g.current){let w=g.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,q.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,q.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:l,ry:l}),(0,q.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}$L.displayName="EdgeText";var D8=(0,V.memo)($L);function Is({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("path",{...d,d:e,fill:"none",className:pt(["react-flow__edge-path",d.className])}),u?(0,q.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&ko(t)&&ko(a)?(0,q.jsx)(D8,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s}):null]})}function _L({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ne.Left||e===ne.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function QL({sourceX:e,sourceY:t,sourcePosition:a=ne.Bottom,targetX:o,targetY:n,targetPosition:r=ne.Top}){let[i,l]=_L({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=_L({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=Op({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:l,targetControlX:s,targetControlY:u});return[`M${e},${t} C${i},${l} ${s},${u} ${o},${n}`,d,f,c,p]}function JL(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:l,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:x})=>{let[b,m,h]=QL({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l}),v=e.isInternal?void 0:t;return(0,q.jsx)(Is,{id:v,path:b,labelX:m,labelY:h,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:x})})}var R8=JL({isInternal:!1}),ek=JL({isInternal:!0});R8.displayName="SimpleBezierEdge";ek.displayName="SimpleBezierEdgeInternal";function tk(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ne.Bottom,targetPosition:g=ne.Top,markerEnd:w,markerStart:y,pathOptions:x,interactionWidth:b})=>{let[m,h,v]=Cu({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:x?.borderRadius,offset:x?.offset,stepPosition:x?.stepPosition}),C=e.isInternal?void 0:t;return(0,q.jsx)(Is,{id:C,path:m,labelX:h,labelY:v,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:y,interactionWidth:b})})}var ak=tk({isInternal:!1}),ok=tk({isInternal:!0});ak.displayName="SmoothStepEdge";ok.displayName="SmoothStepEdgeInternal";function nk(e){return(0,V.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,q.jsx)(ak,{...a,id:o,pathOptions:(0,V.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var P8=nk({isInternal:!1}),rk=nk({isInternal:!0});P8.displayName="StepEdge";rk.displayName="StepEdgeInternal";function ik(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})=>{let[y,x,b]=Bp({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,q.jsx)(Is,{id:m,path:y,labelX:x,labelY:b,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})})}var z8=ik({isInternal:!1}),lk=ik({isInternal:!0});z8.displayName="StraightEdge";lk.displayName="StraightEdgeInternal";function sk(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=ne.Bottom,targetPosition:l=ne.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,pathOptions:x,interactionWidth:b})=>{let[m,h,v]=Ss({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l,curvature:x?.curvature}),C=e.isInternal?void 0:t;return(0,q.jsx)(Is,{id:C,path:m,labelX:h,labelY:v,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:b})})}var O8=sk({isInternal:!1}),dk=sk({isInternal:!0});O8.displayName="BezierEdge";dk.displayName="BezierEdgeInternal";var IL={default:dk,straight:lk,step:rk,smoothstep:ok,simplebezier:ek},ML={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},B8=(e,t,a)=>a===ne.Left?e-t:a===ne.Right?e+t:e,H8=(e,t,a)=>a===ne.Top?e-t:a===ne.Bottom?e+t:e,NL="react-flow__edgeupdater";function EL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:l}){return(0,q.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:pt([NL,`${NL}-${l}`]),cx:B8(t,o,e),cy:H8(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function F8({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=nt(),w=(h,v)=>{if(h.button!==0)return;let{autoPanOnConnect:C,domNode:S,connectionMode:L,connectionRadius:_,lib:T,onConnectStart:R,cancelConnection:z,nodeLookup:F,rfId:k,panBy:N,updateConnection:D}=g.getState(),M=v.type==="target",A=(H,I)=>{c(!1),f?.(H,a,v.type,I)},B=H=>u?.(a,H),P=(H,I)=>{c(!0),d?.(h,a,v.type),R?.(H,I)};qp.onPointerDown(h.nativeEvent,{autoPanOnConnect:C,connectionMode:L,connectionRadius:_,domNode:S,handleId:v.id,nodeId:v.nodeId,nodeLookup:F,isTarget:M,edgeUpdaterType:v.type,lib:T,flowId:k,cancelConnection:z,panBy:N,isValidConnection:(...H)=>g.getState().isValidConnection?.(...H)??!0,onConnect:B,onConnectStart:P,onConnectEnd:(...H)=>g.getState().onConnectEnd?.(...H),onReconnectEnd:A,updateConnection:D,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:h.currentTarget})},y=h=>w(h,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),x=h=>w(h,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),b=()=>p(!0),m=()=>p(!1);return(0,q.jsxs)(q.Fragment,{children:[(e===!0||e==="source")&&(0,q.jsx)(EL,{position:l,centerX:o,centerY:n,radius:t,onMouseDown:y,onMouseEnter:b,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,q.jsx)(EL,{position:s,centerX:r,centerY:i,radius:t,onMouseDown:x,onMouseEnter:b,onMouseOut:m,type:"target"})]})}function U8({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:w,noPanClassName:y,onError:x,disableKeyboardA11y:b}){let m=Ce(oe=>oe.edgeLookup.get(e)),h=Ce(oe=>oe.defaultEdgeOptions);m=h?{...h,...m}:m;let v=m.type||"default",C=w?.[v]||IL[v];C===void 0&&(x?.("011",to.error011(v)),v="default",C=w?.default||IL.default);let S=!!(m.focusable||t&&typeof m.focusable>"u"),L=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,V.useRef)(null),[R,z]=(0,V.useState)(!1),[F,k]=(0,V.useState)(!1),N=nt(),{zIndex:D=m.zIndex,sourceX:M,sourceY:A,targetX:B,targetY:P,sourcePosition:H,targetPosition:I}=Ce((0,V.useCallback)(oe=>{let re=oe.nodeLookup.get(m.source),we=oe.nodeLookup.get(m.target);if(!re||!we)return ML;let Le=ES({id:e,sourceNode:re,targetNode:we,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:oe.connectionMode,onError:x}),qe=IS({selected:m.selected,zIndex:m.zIndex,sourceNode:re,targetNode:we,elevateOnSelect:oe.elevateEdgesOnSelect,zIndexMode:oe.zIndexMode});return{...Le||ML,zIndex:qe}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,x]),Ye),U=(0,V.useMemo)(()=>m.markerStart?`url('#${Hp(m.markerStart,g)}')`:void 0,[m.markerStart,g]),j=(0,V.useMemo)(()=>m.markerEnd?`url('#${Hp(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||M===null||A===null||B===null||P===null)return null;let Z=oe=>{let{addSelectedEdges:re,unselectNodesAndEdges:we,multiSelectionActive:Le}=N.getState();_&&(N.setState({nodesSelectionActive:!1}),m.selected&&Le?(we({nodes:[],edges:[m]}),T.current?.blur()):re([e])),n&&n(oe,m)},te=r?oe=>{r(oe,{...m})}:void 0,$=i?oe=>{i(oe,{...m})}:void 0,G=l?oe=>{l(oe,{...m})}:void 0,K=s?oe=>{s(oe,{...m})}:void 0,ue=u?oe=>{u(oe,{...m})}:void 0,pe=oe=>{if(!b&&jx.includes(oe.key)&&_){let{unselectNodesAndEdges:re,addSelectedEdges:we}=N.getState();oe.key==="Escape"?(T.current?.blur(),re({edges:[m]})):we([e])}};return(0,q.jsx)("svg",{style:{zIndex:D},children:(0,q.jsxs)("g",{className:pt(["react-flow__edge",`react-flow__edge-${v}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:R,selectable:_}]),onClick:Z,onDoubleClick:te,onContextMenu:$,onMouseEnter:G,onMouseMove:K,onMouseLeave:ue,onKeyDown:S?pe:void 0,tabIndex:S?0:void 0,role:m.ariaRole??(S?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":S?`${BL}-${g}`:void 0,ref:T,...m.domAttributes,children:[!F&&(0,q.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:A,targetX:B,targetY:P,sourcePosition:H,targetPosition:I,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:U,markerEnd:j,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),L&&(0,q.jsx)(F8,{edge:m,isReconnectable:L,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:M,sourceY:A,targetX:B,targetY:P,sourcePosition:H,targetPosition:I,setUpdateHover:z,setReconnecting:k})]})})}var q8=(0,V.memo)(U8),V8=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function uk({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:l,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:w}){let{edgesFocusable:y,edgesReconnectable:x,elementsSelectable:b,onError:m}=Ce(V8,Ye),h=I8(t);return(0,q.jsxs)("div",{className:"react-flow__edges",children:[(0,q.jsx)(A8,{defaultColor:e,rfId:a}),h.map(v=>(0,q.jsx)(q8,{id:v,edgesFocusable:y,edgesReconnectable:x,elementsSelectable:b,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},v))]})}uk.displayName="EdgeRenderer";var G8=(0,V.memo)(uk),TL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function j8({children:e}){let t=nt(),a=(0,V.useRef)(null),[o]=(0,V.useState)(()=>t.getState().transform);return qL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=TL(i)))};return r(),t.subscribe(r)},[t]),(0,q.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:TL(o)},children:e})}function X8(e){let t=ao(),a=(0,V.useRef)(!1);(0,V.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var Y8=e=>e.panZoom?.syncViewport;function Z8(e){let t=Ce(Y8),a=nt();return(0,V.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function AL(e){return e.connection.inProgress?{...e.connection,to:vs(e.connection.to,e.transform)}:{...e.connection}}function W8(e){return e?a=>{let o=AL(a);return e(o)}:AL}function Sb(e){let t=W8(e);return Ce(t,Ye)}var K8=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function $8({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:l,inProgress:s}=Ce(K8,Ye);return!(r&&n&&s)?null:(0,q.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,q.jsx)("g",{className:pt(["react-flow__connection",Zx(l)]),children:(0,q.jsx)(ck,{style:t,type:a,CustomComponent:o,isValid:l})})})}var ck=({style:e,type:t=un.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:l,fromPosition:s,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=Sb();if(!n)return;if(a)return(0,q.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:l,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:Zx(o),toNode:d,toHandle:f,pointer:p});let g="",w={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case un.Bezier:[g]=Ss(w);break;case un.SimpleBezier:[g]=QL(w);break;case un.Step:[g]=Cu({...w,borderRadius:0});break;case un.SmoothStep:[g]=Cu(w);break;default:[g]=Bp(w)}return(0,q.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};ck.displayName="ConnectionLine";var Q8={};function DL(e=Q8){let t=(0,V.useRef)(e),a=nt();(0,V.useEffect)(()=>{},[e])}function J8(){let e=nt(),t=(0,V.useRef)(!1);(0,V.useEffect)(()=>{},[])}function fk({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:w,connectionLineComponent:y,connectionLineContainerStyle:x,selectionKeyCode:b,selectionOnDrag:m,selectionMode:h,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,deleteKeyCode:L,onlyRenderVisibleElements:_,elementsSelectable:T,defaultViewport:R,translateExtent:z,minZoom:F,maxZoom:k,preventScrolling:N,defaultMarkerColor:D,zoomOnScroll:M,zoomOnPinch:A,panOnScroll:B,panOnScrollSpeed:P,panOnScrollMode:H,zoomOnDoubleClick:I,panOnDrag:U,autoPanOnSelection:j,onPaneClick:Z,onPaneMouseEnter:te,onPaneMouseMove:$,onPaneMouseLeave:G,onPaneScroll:K,onPaneContextMenu:ue,paneClickDistance:pe,nodeClickDistance:oe,onEdgeContextMenu:re,onEdgeMouseEnter:we,onEdgeMouseMove:Le,onEdgeMouseLeave:qe,reconnectRadius:st,onReconnect:po,onReconnectStart:ae,onReconnectEnd:ve,noDragClassName:Oe,noWheelClassName:Ot,noPanClassName:wt,disableKeyboardA11y:_a,nodeExtent:yt,rfId:Ia,viewport:Ao,onViewportChange:Ln,nodesDraggable:Ys}){return DL(e),DL(t),J8(),X8(a),Z8(Ao),(0,q.jsx)(x8,{onPaneClick:Z,onPaneMouseEnter:te,onPaneMouseMove:$,onPaneMouseLeave:G,onPaneContextMenu:ue,onPaneScroll:K,paneClickDistance:pe,deleteKeyCode:L,selectionKeyCode:b,selectionOnDrag:m,selectionMode:h,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,elementsSelectable:T,zoomOnScroll:M,zoomOnPinch:A,zoomOnDoubleClick:I,panOnScroll:B,panOnScrollSpeed:P,panOnScrollMode:H,panOnDrag:U,autoPanOnSelection:j,defaultViewport:R,translateExtent:z,minZoom:F,maxZoom:k,onSelectionContextMenu:f,preventScrolling:N,noDragClassName:Oe,noWheelClassName:Ot,noPanClassName:wt,disableKeyboardA11y:_a,onViewportChange:Ln,isControlledViewport:!!Ao,children:(0,q.jsxs)(j8,{children:[(0,q.jsx)(G8,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:po,onReconnectStart:ae,onReconnectEnd:ve,onlyRenderVisibleElements:_,onEdgeContextMenu:re,onEdgeMouseEnter:we,onEdgeMouseMove:Le,onEdgeMouseLeave:qe,reconnectRadius:st,defaultMarkerColor:D,noPanClassName:wt,disableKeyboardA11y:_a,rfId:Ia}),(0,q.jsx)($8,{style:w,type:g,component:y,containerStyle:x}),(0,q.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,q.jsx)(_8,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:oe,onlyRenderVisibleElements:_,noPanClassName:wt,noDragClassName:Oe,disableKeyboardA11y:_a,nodeExtent:yt,rfId:Ia,nodesDraggable:Ys}),(0,q.jsx)("div",{className:"react-flow__viewport-portal"})]})})}fk.displayName="GraphView";var eD=(0,V.memo)(fk),tD=ab("React Flow","https://reactflow.dev/"),RL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,w=new Map,y=new Map,x=o??t??[],b=a??e??[],m=d??[0,0],h=f??xs;mb(w,y,x);let{nodesInitialized:v}=Fp(b,p,g,{nodeOrigin:m,nodeExtent:h,zIndexMode:c}),C=[0,0,1];if(i&&n&&r){let S=bs(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:L,y:_,zoom:T}=vu(S,n,r,s,u,l?.padding??.1);C=[L,_,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:b,nodesInitialized:v,nodeLookup:p,parentLookup:g,edges:x,edgeLookup:y,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:xs,nodeExtent:h,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Gr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:l,fitViewResolver:null,connection:{...Yx},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:tD,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Xx,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},aD=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>dL((p,g)=>{async function w(){let{nodeLookup:y,panZoom:x,fitViewOptions:b,fitViewResolver:m,width:h,height:v,minZoom:C,maxZoom:S}=g();x&&(await vS({nodes:y,width:h,height:v,panZoom:x,minZoom:C,maxZoom:S},b),m?.resolve(!0),p({fitViewResolver:null}))}return{...RL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:y=>{let{nodeLookup:x,parentLookup:b,nodeOrigin:m,nodeExtent:h,elevateNodesOnSelect:v,fitViewQueued:C,zIndexMode:S,nodesSelectionActive:L}=g(),{nodesInitialized:_,hasSelectedNodes:T}=Fp(y,x,b,{nodeOrigin:m,nodeExtent:h,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),R=L&&T;C&&_?(w(),p({nodes:y,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:R})):p({nodes:y,nodesInitialized:_,nodesSelectionActive:R})},setEdges:y=>{let{connectionLookup:x,edgeLookup:b}=g();mb(x,b,y),p({edges:y})},setDefaultNodesAndEdges:(y,x)=>{if(y){let{setNodes:b}=g();b(y),p({hasDefaultNodes:!0})}if(x){let{setEdges:b}=g();b(x),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:x,nodeLookup:b,parentLookup:m,domNode:h,nodeOrigin:v,nodeExtent:C,debug:S,fitViewQueued:L,zIndexMode:_}=g(),{changes:T,updatedInternals:R}=PS(y,b,m,h,v,C,_);R&&(DS(b,m,{nodeOrigin:v,nodeExtent:C,zIndexMode:_}),L?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(S&&console.log("React Flow: trigger node changes",T),x?.(T)))},updateNodePositions:(y,x=!1)=>{let b=[],m=[],{nodeLookup:h,triggerNodeChanges:v,connection:C,updateConnection:S,onNodesChangeMiddlewareMap:L}=g();for(let[_,T]of y){let R=h.get(_),z=!!(R?.expandParent&&R?.parentId&&T?.position),F={id:_,type:"position",position:z?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:x};if(R&&C.inProgress&&C.fromNode.id===R.id){let k=jr(R,C.fromHandle,ne.Left,!0);S({...C,from:k})}z&&R.parentId&&b.push({id:_,parentId:R.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(F)}if(b.length>0){let{parentLookup:_,nodeOrigin:T}=g(),R=Up(b,h,_,T);m.push(...R)}for(let _ of L.values())m=_(m);v(m)},triggerNodeChanges:y=>{let{onNodesChange:x,setNodes:b,nodes:m,hasDefaultNodes:h,debug:v}=g();if(y?.length){if(h){let C=yb(y,m);b(C)}v&&console.log("React Flow: trigger node changes",y),x?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:x,setEdges:b,edges:m,hasDefaultEdges:h,debug:v}=g();if(y?.length){if(h){let C=vb(y,m);b(C)}v&&console.log("React Flow: trigger edge changes",y),x?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:x,edgeLookup:b,nodeLookup:m,triggerNodeChanges:h,triggerEdgeChanges:v}=g();if(x){let C=y.map(S=>Vi(S,!0));h(C);return}h(ks(m,new Set([...y]),!0)),v(ks(b))},addSelectedEdges:y=>{let{multiSelectionActive:x,edgeLookup:b,nodeLookup:m,triggerNodeChanges:h,triggerEdgeChanges:v}=g();if(x){let C=y.map(S=>Vi(S,!0));v(C);return}v(ks(b,new Set([...y]))),h(ks(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:x}={})=>{let{edges:b,nodes:m,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:C}=g(),S=y||m,L=x||b,_=[];for(let R of S){if(!R.selected)continue;let z=h.get(R.id);z&&(z.selected=!1),_.push(Vi(R.id,!1))}let T=[];for(let R of L)R.selected&&T.push(Vi(R.id,!1));v(_),C(T)},setMinZoom:y=>{let{panZoom:x,maxZoom:b}=g();x?.setScaleExtent([y,b]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:x,minZoom:b}=g();x?.setScaleExtent([b,y]),p({maxZoom:y})},setTranslateExtent:y=>{g().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:x,triggerNodeChanges:b,triggerEdgeChanges:m,elementsSelectable:h}=g();if(!h)return;let v=x.reduce((S,L)=>L.selected?[...S,Vi(L.id,!1)]:S,[]),C=y.reduce((S,L)=>L.selected?[...S,Vi(L.id,!1)]:S,[]);b(v),m(C)},setNodeExtent:y=>{let{nodes:x,nodeLookup:b,parentLookup:m,nodeOrigin:h,elevateNodesOnSelect:v,nodeExtent:C,zIndexMode:S}=g();y[0][0]===C[0][0]&&y[0][1]===C[0][1]&&y[1][0]===C[1][0]&&y[1][1]===C[1][1]||(Fp(x,b,m,{nodeOrigin:h,nodeExtent:y,elevateNodesOnSelect:v,checkEquality:!1,zIndexMode:S}),p({nodeExtent:y}))},panBy:y=>{let{transform:x,width:b,height:m,panZoom:h,translateExtent:v}=g();return zS({delta:y,panZoom:h,transform:x,translateExtent:v,width:b,height:m})},setCenter:async(y,x,b)=>{let{width:m,height:h,maxZoom:v,panZoom:C}=g();if(!C)return!1;let S=typeof b?.zoom<"u"?b.zoom:v;return await C.setViewport({x:m/2-y*S,y:h/2-x*S,zoom:S},{duration:b?.duration,ease:b?.ease,interpolate:b?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Yx}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...RL()})}},Object.is);function Lb({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:l,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,V.useState)(()=>aD({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:l,fitViewOptions:s,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,q.jsx)(w6,{value:g,children:(0,q.jsx)(V6,{children:(0,q.jsx)(n8,{children:p})})})}function oD({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:l,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,V.useContext)(Zp)?(0,q.jsx)(q.Fragment,{children:e}):(0,q.jsx)(Lb,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:l,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var nD={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function rD({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:l,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:x,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:h,onNodeContextMenu:v,onNodeDoubleClick:C,onNodeDragStart:S,onNodeDrag:L,onNodeDragStop:_,onNodesDelete:T,onEdgesDelete:R,onDelete:z,onSelectionChange:F,onSelectionDragStart:k,onSelectionDrag:N,onSelectionDragStop:D,onSelectionContextMenu:M,onSelectionStart:A,onSelectionEnd:B,onBeforeDelete:P,connectionMode:H,connectionLineType:I=un.Bezier,connectionLineStyle:U,connectionLineComponent:j,connectionLineContainerStyle:Z,deleteKeyCode:te="Backspace",selectionKeyCode:$="Shift",selectionOnDrag:G=!1,selectionMode:K=Wn.Full,panActivationKeyCode:ue="Space",multiSelectionKeyCode:pe=Cs()?"Meta":"Control",zoomActivationKeyCode:oe=Cs()?"Meta":"Control",snapToGrid:re,snapGrid:we,onlyRenderVisibleElements:Le=!1,selectNodesOnDrag:qe,nodesDraggable:st,autoPanOnNodeFocus:po,nodesConnectable:ae,nodesFocusable:ve,nodeOrigin:Oe=HL,edgesFocusable:Ot,edgesReconnectable:wt,elementsSelectable:_a=!0,defaultViewport:yt=A6,minZoom:Ia=.5,maxZoom:Ao=2,translateExtent:Ln=xs,preventScrolling:Ys=!0,nodeExtent:ee,defaultMarkerColor:dt="#b1b1b7",zoomOnScroll:Tt=!0,zoomOnPinch:vt=!0,panOnScroll:sr=!1,panOnScrollSpeed:Ga=.5,panOnScrollMode:Do=Fo.Free,zoomOnDoubleClick:dr=!0,panOnDrag:si=!0,onPaneClick:f0,onPaneMouseEnter:Hm,onPaneMouseMove:Zs,onPaneMouseLeave:di,onPaneScroll:mM,onPaneContextMenu:gM,paneClickDistance:hM=1,nodeClickDistance:xM=0,children:bM,onReconnect:wM,onReconnectStart:yM,onReconnectEnd:vM,onEdgeContextMenu:CM,onEdgeDoubleClick:SM,onEdgeMouseEnter:LM,onEdgeMouseMove:kM,onEdgeMouseLeave:_M,reconnectRadius:IM=10,onNodesChange:MM,onEdgesChange:NM,noDragClassName:EM="nodrag",noWheelClassName:TM="nowheel",noPanClassName:p0="nopan",fitView:m0,fitViewOptions:g0,connectOnClick:AM,attributionPosition:DM,proOptions:RM,defaultEdgeOptions:PM,elevateNodesOnSelect:zM=!0,elevateEdgesOnSelect:OM=!1,disableKeyboardA11y:h0=!1,autoPanOnConnect:BM,autoPanOnNodeDrag:HM,autoPanOnSelection:FM=!0,autoPanSpeed:UM,connectionRadius:qM,isValidConnection:VM,onError:GM,style:jM,id:x0,nodeDragThreshold:XM,connectionDragThreshold:YM,viewport:ZM,onViewportChange:WM,width:KM,height:$M,colorMode:QM="light",debug:JM,onScroll:b0,ariaLabelConfig:eN,zIndexMode:w0="basic",...tN},aN){let Fm=x0||"1",oN=z6(QM),nN=(0,V.useCallback)(y0=>{y0.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),b0?.(y0)},[b0]);return(0,q.jsx)("div",{"data-testid":"rf__wrapper",...tN,onScroll:nN,style:{...jM,...nD},ref:aN,className:pt(["react-flow",n,oN]),id:x0,role:"application",children:(0,q.jsxs)(oD,{nodes:e,edges:t,width:KM,height:$M,fitView:m0,fitViewOptions:g0,minZoom:Ia,maxZoom:Ao,nodeOrigin:Oe,nodeExtent:ee,zIndexMode:w0,children:[(0,q.jsx)(P6,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:x,nodesDraggable:st,autoPanOnNodeFocus:po,nodesConnectable:ae,nodesFocusable:ve,edgesFocusable:Ot,edgesReconnectable:wt,elementsSelectable:_a,elevateNodesOnSelect:zM,elevateEdgesOnSelect:OM,minZoom:Ia,maxZoom:Ao,nodeExtent:ee,onNodesChange:MM,onEdgesChange:NM,snapToGrid:re,snapGrid:we,connectionMode:H,translateExtent:Ln,connectOnClick:AM,defaultEdgeOptions:PM,fitView:m0,fitViewOptions:g0,onNodesDelete:T,onEdgesDelete:R,onDelete:z,onNodeDragStart:S,onNodeDrag:L,onNodeDragStop:_,onSelectionDrag:N,onSelectionDragStart:k,onSelectionDragStop:D,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:p0,nodeOrigin:Oe,rfId:Fm,autoPanOnConnect:BM,autoPanOnNodeDrag:HM,autoPanSpeed:UM,onError:GM,connectionRadius:qM,isValidConnection:VM,selectNodesOnDrag:qe,nodeDragThreshold:XM,connectionDragThreshold:YM,onBeforeDelete:P,debug:JM,ariaLabelConfig:eN,zIndexMode:w0}),(0,q.jsx)(eD,{onInit:u,onNodeClick:l,onEdgeClick:s,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:h,onNodeContextMenu:v,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:i,connectionLineType:I,connectionLineStyle:U,connectionLineComponent:j,connectionLineContainerStyle:Z,selectionKeyCode:$,selectionOnDrag:G,selectionMode:K,deleteKeyCode:te,multiSelectionKeyCode:pe,panActivationKeyCode:ue,zoomActivationKeyCode:oe,onlyRenderVisibleElements:Le,defaultViewport:yt,translateExtent:Ln,minZoom:Ia,maxZoom:Ao,preventScrolling:Ys,zoomOnScroll:Tt,zoomOnPinch:vt,zoomOnDoubleClick:dr,panOnScroll:sr,panOnScrollSpeed:Ga,panOnScrollMode:Do,panOnDrag:si,autoPanOnSelection:FM,onPaneClick:f0,onPaneMouseEnter:Hm,onPaneMouseMove:Zs,onPaneMouseLeave:di,onPaneScroll:mM,onPaneContextMenu:gM,paneClickDistance:hM,nodeClickDistance:xM,onSelectionContextMenu:M,onSelectionStart:A,onSelectionEnd:B,onReconnect:wM,onReconnectStart:yM,onReconnectEnd:vM,onEdgeContextMenu:CM,onEdgeDoubleClick:SM,onEdgeMouseEnter:LM,onEdgeMouseMove:kM,onEdgeMouseLeave:_M,reconnectRadius:IM,defaultMarkerColor:dt,noDragClassName:EM,noWheelClassName:TM,noPanClassName:p0,rfId:Fm,disableKeyboardA11y:h0,nodeExtent:ee,viewport:ZM,onViewportChange:WM,nodesDraggable:st}),(0,q.jsx)(T6,{onSelectionChange:F}),bM,(0,q.jsx)(_6,{proOptions:RM,position:DM}),(0,q.jsx)(k6,{rfId:Fm,disableKeyboardA11y:h0})]})})}var pk=UL(rD);var iD=e=>e.nodes;function mk(){return Ce(iD,Ye)}var lD=e=>e.edges;function gk(){return Ce(lD,Ye)}var sD=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function Mo(){return Ce(sD,Ye)}var _q=to.error014();function dD({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,q.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:pt(["react-flow__background-pattern",a,o])})}function uD({radius:e,className:t}){return(0,q.jsx)("circle",{cx:e,cy:e,r:e,className:pt(["react-flow__background-pattern","dots",t])})}var cn;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(cn||(cn={}));var cD={[cn.Dots]:1,[cn.Lines]:1,[cn.Cross]:6},fD=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function hk({id:e,variant:t=cn.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:l,style:s,className:u,patternClassName:d}){let f=(0,V.useRef)(null),{transform:c,patternId:p}=Ce(fD,Ye),g=o||cD[t],w=t===cn.Dots,y=t===cn.Cross,x=Array.isArray(a)?a:[a,a],b=[x[0]*c[2]||1,x[1]*c[2]||1],m=g*c[2],h=Array.isArray(r)?r:[r,r],v=y?[m,m]:b,C=[h[0]*c[2]+v[0]/2,h[1]*c[2]+v[1]/2],S=`${p}${e||""}`;return(0,q.jsxs)("svg",{className:pt(["react-flow__background",u]),style:{...s,...Kp,"--xy-background-color-props":l,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,q.jsx)("pattern",{id:S,x:c[0]%b[0],y:c[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:w?(0,q.jsx)(uD,{radius:m/2,className:d}):(0,q.jsx)(dD,{dimensions:v,lineWidth:n,variant:t,className:d})}),(0,q.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${S})`})]})}hk.displayName="Background";var xk=(0,V.memo)(hk);function pD(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,q.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function mD(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,q.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function gD(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,q.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function hD(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function xD(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Xp({children:e,className:t,...a}){return(0,q.jsx)("button",{type:"button",className:pt(["react-flow__controls-button",t]),...a,children:e})}var bD=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function bk({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:l,onInteractiveChange:s,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=nt(),{isInteractive:w,minZoomReached:y,maxZoomReached:x,ariaLabelConfig:b}=Ce(bD,Ye),{zoomIn:m,zoomOut:h,fitView:v}=ao(),C=()=>{m(),r?.()},S=()=>{h(),i?.()},L=()=>{v(n),l?.()},_=()=>{g.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),s?.(!w)};return(0,q.jsxs)(Wp,{className:pt(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??b["controls.ariaLabel"],children:[t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Xp,{onClick:C,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:x,children:(0,q.jsx)(pD,{})}),(0,q.jsx)(Xp,{onClick:S,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:y,children:(0,q.jsx)(mD,{})})]}),a&&(0,q.jsx)(Xp,{className:"react-flow__controls-fitview",onClick:L,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:(0,q.jsx)(gD,{})}),o&&(0,q.jsx)(Xp,{className:"react-flow__controls-interactive",onClick:_,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:w?(0,q.jsx)(xD,{}):(0,q.jsx)(hD,{})}),d]})}bk.displayName="Controls";var Iq=(0,V.memo)(bk);function wD({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:l,strokeWidth:s,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:w}=r||{},y=i||g||w;return(0,q.jsx)("rect",{className:pt(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:y,stroke:l,strokeWidth:s},shapeRendering:f,onClick:p?x=>p(x,e):void 0})}var yD=(0,V.memo)(wD),vD=e=>e.nodes.map(t=>t.id),bb=e=>e instanceof Function?e:()=>e;function CD({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=yD,onClick:i}){let l=Ce(vD,Ye),s=bb(t),u=bb(e),d=bb(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,q.jsx)(q.Fragment,{children:l.map(c=>(0,q.jsx)(LD,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function SD({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:l,onClick:s}){let{node:u,x:d,y:f,width:c,height:p}=Ce(g=>{let w=g.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let y=w.internals.userNode,{x,y:b}=w.internals.positionAbsolute,{width:m,height:h}=Io(y);return{node:y,x,y:b,width:m,height:h}},Ye);return!u||u.hidden||!ob(u)?null:(0,q.jsx)(l,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:s,id:u.id})}var LD=(0,V.memo)(SD),kD=(0,V.memo)(CD),_D=200,ID=150,MD=e=>!e.hidden,ND=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?eb(bs(e.nodeLookup,{filter:MD}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},PL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,ED=(e,t)=>PL(e.viewBB,t.viewBB)&&PL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,TD="react-flow__minimap-desc";function wk({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:l,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:w=!1,zoomable:y=!1,ariaLabel:x,inversePan:b,zoomStep:m=1,offsetScale:h=5}){let v=nt(),C=(0,V.useRef)(null),{boundingRect:S,viewBB:L,rfId:_,panZoom:T,translateExtent:R,flowWidth:z,flowHeight:F,ariaLabelConfig:k}=Ce(ND,ED),N=e?.width??_D,D=e?.height??ID,M=S.width/N,A=S.height/D,B=Math.max(M,A),P=B*N,H=B*D,I=h*B,U=S.x-(P-S.width)/2-I,j=S.y-(H-S.height)/2-I,Z=P+I*2,te=H+I*2,$=`${TD}-${_}`,G=(0,V.useRef)(0),K=(0,V.useRef)();G.current=B,(0,V.useEffect)(()=>{if(C.current&&T)return K.current=VS({domNode:C.current,panZoom:T,getTransform:()=>v.getState().transform,getViewScale:()=>G.current}),()=>{K.current?.destroy()}},[T]),(0,V.useEffect)(()=>{K.current?.update({translateExtent:R,width:z,height:F,inversePan:b,pannable:w,zoomStep:m,zoomable:y})},[w,y,b,m,R,z,F]);let ue=p?re=>{let[we,Le]=K.current?.pointer(re)||[0,0];p(re,{x:we,y:Le})}:void 0,pe=g?(0,V.useCallback)((re,we)=>{let Le=v.getState().nodeLookup.get(we).internals.userNode;g(re,Le)},[]):void 0,oe=x??k["minimap.ariaLabel"];return(0,q.jsx)(Wp,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*B:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:pt(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,q.jsxs)("svg",{width:N,height:D,viewBox:`${U} ${j} ${Z} ${te}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":$,ref:C,onClick:ue,children:[oe&&(0,q.jsx)("title",{id:$,children:oe}),(0,q.jsx)(kD,{onClick:pe,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:l}),(0,q.jsx)("path",{className:"react-flow__minimap-mask",d:`M${U-I},${j-I}h${Z+I*2}v${te+I*2}h${-Z-I*2}z
        M${L.x},${L.y}h${L.width}v${L.height}h${-L.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}wk.displayName="MiniMap";var yk=(0,V.memo)(wk),AD=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,DD={[Xr.Line]:"right",[Xr.Handle]:"bottom-right"};function RD({nodeId:e,position:t,variant:a=Xr.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:l=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:w,onResize:y,onResizeEnd:x}){let b=XL(),m=typeof e=="string"?e:b,h=nt(),v=(0,V.useRef)(null),C=a===Xr.Handle,S=Ce((0,V.useCallback)(AD(C&&p),[C,p]),Ye),L=(0,V.useRef)(null),_=t??DD[a];(0,V.useEffect)(()=>{if(!(!v.current||!m))return L.current||(L.current=ZS({domNode:v.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:z,snapGrid:F,snapToGrid:k,nodeOrigin:N,domNode:D}=h.getState();return{nodeLookup:R,transform:z,snapGrid:F,snapToGrid:k,nodeOrigin:N,paneDomNode:D}},onChange:(R,z)=>{let{triggerNodeChanges:F,nodeLookup:k,parentLookup:N,nodeOrigin:D}=h.getState(),M=[],A={x:R.x,y:R.y},B=k.get(m);if(B&&B.expandParent&&B.parentId){let P=B.origin??D,H=R.width??B.measured.width??0,I=R.height??B.measured.height??0,U={id:B.id,parentId:B.parentId,rect:{width:H,height:I,...nb({x:R.x??B.position.x,y:R.y??B.position.y},{width:H,height:I},B.parentId,k,P)}},j=Up([U],k,N,D);M.push(...j),A.x=R.x?Math.max(P[0]*H,R.x):void 0,A.y=R.y?Math.max(P[1]*I,R.y):void 0}if(A.x!==void 0&&A.y!==void 0){let P={id:m,type:"position",position:{...A}};M.push(P)}if(R.width!==void 0&&R.height!==void 0){let H={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};M.push(H)}for(let P of z){let H={...P,type:"position"};M.push(H)}F(M)},onEnd:({width:R,height:z})=>{let F={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:z}};h.getState().triggerNodeChanges([F])}})),L.current.update({controlPosition:_,boundaries:{minWidth:l,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:y,onResizeEnd:x,shouldResize:g}),()=>{L.current?.destroy()}},[_,l,s,u,d,f,w,y,x,g]);let T=_.split("-");return(0,q.jsx)("div",{className:pt(["react-flow__resize-control","nodrag",...T,a,o]),ref:v,style:{...n,scale:S,...i&&{[C?"backgroundColor":"borderColor"]:i}},children:r})}var Mq=(0,V.memo)(RD);var Ba=E(Q(),1),_k=E(Bt(),1);var Jp=E(Q(),1);var $p=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var vk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Ck=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var kb=e=>{let t=Ck(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Lu=E(Q(),1);var Qp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Sk=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Ms=E(Q(),1);var PD=(0,Ms.createContext)({});var Lk=()=>(0,Ms.useContext)(PD);var kk=(0,Lu.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...l},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=Lk()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,Lu.createElement)("svg",{ref:s,...Qp,width:t??u??Qp.width,height:t??u??Qp.height,stroke:e??c,strokeWidth:g,className:$p("lucide",p,n),...!r&&!Sk(l)&&{"aria-hidden":"true"},...l},[...i.map(([w,y])=>(0,Lu.createElement)(w,y)),...Array.isArray(r)?r:[r]])});var O=(e,t)=>{let a=(0,Jp.forwardRef)(({className:o,...n},r)=>(0,Jp.createElement)(kk,{ref:r,iconNode:t,className:$p(`lucide-${vk(kb(e))}`,`lucide-${e}`,o),...n}));return a.displayName=kb(e),a};var zD=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ku=O("arrow-left",zD);var OD=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Gi=O("arrow-up",OD);var BD=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],ji=O("audio-lines",BD);var HD=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],_u=O("bookmark",HD);var FD=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],Iu=O("calendar",FD);var UD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_t=O("check",UD);var qD=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],oo=O("chevron-down",qD);var VD=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Kn=O("chevron-right",VD);var GD=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Mu=O("chevron-left",GD);var jD=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Nu=O("chevron-up",jD);var XD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Yr=O("circle-alert",XD);var YD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zr=O("circle-check",YD);var ZD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Uo=O("circle-question-mark",ZD);var WD=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Eu=O("clapperboard",WD);var KD=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Oa=O("cloud-upload",KD);var $D=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Wr=O("copy",$D);var QD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],$n=O("crosshair",QD);var JD=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Xi=O("download",JD);var eR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Kr=O("ellipsis",eR);var tR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tu=O("external-link",tR);var aR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Au=O("eye-off",aR);var oR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Du=O("eye",oR);var nR=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],fn=O("file-pen",nR);var rR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Ru=O("file-spreadsheet",rR);var iR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],la=O("file-text",iR);var lR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],Pu=O("file-up",lR);var sR=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],zu=O("files",sR);var dR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Vt=O("film",dR);var uR=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],Yi=O("folder-input",uR);var cR=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ou=O("folder-open",cR);var fR=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Bu=O("folder-plus",fR);var pR=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],qo=O("folder",pR);var mR=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],$r=O("funnel",mR);var gR=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Hu=O("grip-vertical",gR);var hR=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Ns=O("hand",hR);var xR=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],Fu=O("hard-drive",xR);var bR=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Uu=O("hash",bR);var wR=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Qn=O("image-plus",wR);var yR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ba=O("image",yR);var vR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],qu=O("info",vR);var CR=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Vu=O("keyboard",CR);var SR=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ta=O("layers",SR);var LR=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Vo=O("layout-grid",LR);var kR=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],Gu=O("list-tree",kR);var _R=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Jn=O("list",_R);var IR=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Qr=O("loader-circle",IR);var MR=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],ju=O("map",MR);var NR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],pn=O("maximize-2",NR);var ER=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Xu=O("maximize",ER);var TR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Zi=O("message-square",TR);var AR=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Wi=O("mic",AR);var DR=[["path",{d:"M5 12h14",key:"1ays0h"}]],Yu=O("minus",DR);var RR=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Es=O("mouse-pointer",RR);var PR=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],sa=O("music",PR);var zR=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Zu=O("paperclip",zR);var OR=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Wu=O("pause",OR);var BR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],mn=O("pen-line",BR);var HR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],gn=O("pen",HR);var FR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Ki=O("pencil",FR);var UR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Ku=O("person-standing",UR);var qR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],no=O("play",qR);var VR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ze=O("plus",VR);var GR=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],$i=O("redo-2",GR);var jR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],er=O("refresh-cw",jR);var XR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],$u=O("rotate-ccw",XR);var YR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Go=O("search",YR);var ZR=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Qu=O("settings-2",ZR);var WR=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Qi=O("sliders-horizontal",WR);var KR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],gt=O("sparkles",KR);var $R=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Jr=O("square-split-vertical",$R);var QR=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],ro=O("table",QR);var JR=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Ju=O("tag",JR);var eP=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],ei=O("text-align-justify",eP);var tP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],io=O("trash-2",tP);var aP=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ti=O("triangle-alert",aP);var oP=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],tr=O("type",oP);var nP=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Ji=O("undo-2",nP);var rP=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],el=O("unlink",rP);var iP=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],tl=O("upload",iP);var lP=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],jo=O("video",lP);var sP=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],ec=O("waypoints",sP);var dP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],aa=O("x",dP);var Gt=E(X(),1);function Ha({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:l="pill"}){let[s,u]=(0,Ba.useState)(!1),d=(0,Ba.useRef)(null),f=(0,Ba.useRef)(null),[c,p]=(0,Ba.useState)({top:0,left:0,placement:"bottom"}),g=(0,Ba.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,Ba.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),h=window.innerHeight,v=Math.min(t.length*34+16,260),S=h-m.bottom<v&&m.top>v,L=S?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:L,left:m.left,width:_,placement:S?"top":"bottom"})},[t.length,r]);(0,Ba.useEffect)(()=>{if(!s)return;w();let m=C=>{let S=C.target;d.current?.contains(S)||f.current?.contains(S)||u(!1)},h=C=>{C.key==="Escape"&&u(!1)},v=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",h),window.addEventListener("scroll",v,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",h),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",w)}},[s,w]);let y=(0,Ba.useCallback)(m=>{m.stopPropagation(),!n&&u(h=>!h)},[n]),x=(0,Ba.useCallback)((m,h)=>{h||(a?.(m),u(!1))},[a]),b=["wf-custom-select-trigger",`wf-custom-select-trigger--${l}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,Gt.jsxs)(Gt.Fragment,{children:[(0,Gt.jsxs)("button",{ref:d,type:"button",className:b,disabled:n,onClick:y,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,Gt.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:i??String(e??"")}),(0,Gt.jsx)(oo,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,_k.createPortal)((0,Gt.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,Gt.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let h=m.value===e,v=!!m.subtitle||!!m.badge||!!m.icon;return(0,Gt.jsxs)("button",{type:"button",role:"option","aria-selected":h,disabled:m.disabled,className:`wf-custom-select-option ${v?"wf-custom-select-option--rich":""} ${h?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>x(m.value,m.disabled),children:[m.icon?(0,Gt.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,Gt.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,Gt.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,Gt.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,Gt.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,Gt.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),h?(0,Gt.jsx)(_t,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var hn=E(Q(),1),Ik=E(Bt(),1),Xo=E(X(),1),tc=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,hn.useState)(!1),l=(0,hn.useRef)(null),s=(0,hn.useRef)(null),[u,d]=(0,hn.useState)({left:0}),f=(0,hn.useCallback)(()=>{if(!l.current)return;let p=l.current.getBoundingClientRect(),g=a.startsWith("top"),w=a.endsWith("Right"),y=g?void 0:p.bottom+6,x=g?window.innerHeight-p.top+6:void 0,b=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:y,bottom:x,left:b})},[a]);(0,hn.useEffect)(()=>{if(!r)return;f();let p=w=>{let y=w.target;l.current?.contains(y)||s.current?.contains(y)||i(!1)},g=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(g=>!g)};return(0,Xo.jsxs)(Xo.Fragment,{children:[(0,Xo.jsx)("div",{ref:l,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,Ik.createPortal)((0,Xo.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,Xo.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,Xo.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,Xo.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,Xo.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var Mk=E(Q(),1),_b=E(X(),1),Ib=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:l=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,Mk.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,_b.jsx)("div",{className:`wf-custom-slider ${l}`,style:i,children:(0,_b.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var Nk=E(Q(),1),Ek=E(Bt(),1);var xn=E(X(),1),al=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:l})=>((0,Nk.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,Ek.createPortal)((0,xn.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,xn.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,xn.jsxs)("div",{className:"wf-modal-header",children:[(0,xn.jsx)("div",{className:"wf-modal-title",children:a}),(0,xn.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,xn.jsx)(aa,{size:16})})]}),(0,xn.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:l}),o?(0,xn.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var tm=E(Q(),1),Tk=E(_x(),1);var ol=E(X(),1),ac=null,uP=()=>{let[e,t]=(0,tm.useState)([]);return(0,tm.useEffect)(()=>(ac=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{ac=null}),[]),e.length===0?null:(0,ol.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=qu,n="#60a5fa";return a.type==="success"?(o=Zr,n="#34d399"):a.type==="warning"?(o=ti,n="#fb923c"):a.type==="error"&&(o=Yr,n="#f87171"),(0,ol.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,ol.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,ol.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function cP(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,Tk.createRoot)(t).render((0,ol.jsx)(uP,{}))}function em(e,t,a=2500){cP();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;ac?ac({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{ac?.({id:o,type:e,content:t,durationMs:a})},50)}var W={success:(e,t)=>em("success",e,t),warning:(e,t)=>em("warning",e,t),error:(e,t)=>em("error",e,t),info:(e,t)=>em("info",e,t)};var Ak=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,l);return l},Dk=(e=>e?Ak(e):Ak);var oc=E(Q(),1);var fP=e=>e;function pP(e,t=fP){let a=oc.default.useSyncExternalStore(e.subscribe,oc.default.useCallback(()=>t(e.getState()),[e,t]),oc.default.useCallback(()=>t(e.getInitialState()),[e,t]));return oc.default.useDebugValue(a),a}var Rk=e=>{let t=Dk(e),a=o=>pP(t,o);return Object.assign(a,t),a},Ts=(e=>e?Rk(e):Rk);var Hk=E(Q(),1);var Pk=e=>Symbol.iterator in e,zk=e=>"entries"in e,Ok=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},mP=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function Bk(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:Pk(e)&&Pk(t)?zk(e)&&zk(t)?Ok(e,t):mP(e,t):Ok({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function Fk(e){let t=Hk.default.useRef(void 0);return a=>{let o=e(a);return Bk(t.current,o)?t.current:t.current=o}}var qk={stroke:"#b1b1b7",strokeWidth:2},am={type:"animated",style:qk,animated:!1};function Uk(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function gP(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function Vk(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:gP(e),...am,...e,data:{...t,createdAt:a},animated:e.animated??am.animated,style:{...qk,...e.style??{}},sourceHandle:Uk(e.sourceHandle),targetHandle:Uk(e.targetHandle)}}var Gk={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},hP={text:"text-editor",image:"text-to-image",video:"video-generation",audio:"text-to-audio"};var jk={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function nc(e,t){return{label:"",materialType:e,status:"empty",selectedTool:hP[e],params:{},failStrategy:"abort",...t}}function rc(e){return e.nodeKind==="generate"||e.nodeKind==="import"?e.nodeKind:e.selectedTool==="import"?"import":"generate"}var xP={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function Xk(e){return xP[e]??[]}function bP(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,l=a.generatedContent,s=!1;return o==="text"?s=!!(i?.trim()||l):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function wP(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=Gk[n];if(i)for(let l of i){let s=jk[l];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function om(e,t){let a=bP(e),o=wP(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function nm(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(l=>l.source===e.source&&l.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(l=>l.id===e.source),n=t.find(l=>l.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!om(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let l=i.shift();if(!(!l||r.has(l.id))){r.add(l.id);for(let s of $x(l,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(s)}}}return{valid:!0}}function rm(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function yP(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function Yk(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return rm(e,"rejected","duplicate_node");a.add(d.id)}let o=yP([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return rm(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return rm(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),l=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=Vk(d),c=nm(f,l,u);if(!c.valid)return rm(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:l,edges:u,status:"allowed"}}function Zk(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var im=!1,lm=!1;function sm(){im=!0}function Wk(){lm=!0,im=!1}function Kk(){im=!1,lm=!1}function vP(){lm=!1}function Mb(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function Nb(e,t){return{nodes:e.slice(),edges:t.slice()}}function ic(e,t){return t||(lm&&e===0?"reset":im&&e===0?"user-delete":"autosave")}function dm(e){let t=Nb(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:Mb({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(vP(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var CP=50,SP=300;function lc(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var wa={current:null,lastPushAt:0},le=Ts()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&sm(),e({nodes:yb(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:vb(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&sm();let o=t(),n=Yk({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(l=>l.id===i.id));return Zk(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&sm(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{Kk(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),wa.current=lc(a,o),wa.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=lc(t().nodes,t().edges);if(wa.current&&wa.current.sig===a.sig)return;let o=Date.now();if(wa.current&&o-wa.lastPushAt>=SP){let n=wa.current;e(r=>({past:[...r.past,n].slice(-CP),future:[]})),wa.lastPushAt=o}wa.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=lc(o,n);wa.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...l.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=lc(o,n);wa.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:[...l.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),wa.current=lc(a,o),wa.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{Wk(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),wa.current=null,wa.lastPushAt=0}})),$k=()=>le(Fk(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var Qk=()=>le(e=>e.past.length>0),Jk=()=>le(e=>e.future.length>0);var m_=E(Q(),1);var e_={total:0,completed:0,running:0,pending:0,percentage:0},Ke=Ts()(e=>({executionId:null,status:"idle",error:null,progress:e_,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:e_,nodeStatuses:{}})}));var t_=E(Q(),1),a_="(prefers-reduced-motion: reduce)";function LP(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(a_);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function kP(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(a_).matches}function o_(){return(0,t_.useSyncExternalStore)(LP,kP)}var lo=E(Q(),1),ya=E(X(),1),_P=108,l_=64,IP=186,n_=l_+IP,Eb=8,r_=.9,MP=3,i_=.16,NP=.98,EP=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let s=(0,lo.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${s}`,d=`beam-flow-${s}`,f=`beam-breathe-${s}`,c=(0,lo.useMemo)(()=>{if(t&&a){let h=a.x-t.x,v=a.y-t.y;return Math.max(250,Math.hypot(h,v)*1.15)}return 250},[t,a]),p=(0,lo.useRef)(null),[g,w]=(0,lo.useState)(c);(0,lo.useEffect)(()=>{if(p.current)try{let h=p.current.getTotalLength();Number.isFinite(h)&&h>0&&w(h)}catch{}},[e]);let{segments:y,calculatedDuration:x,periodPx:b}=(0,lo.useMemo)(()=>{let h=g>0?g:c,v=Math.max(1,Math.round(h/n_)),C=h/v,L=C*(l_/n_)/Eb,_=o??Math.max(.5,C/_P);return{segments:Array.from({length:Eb},(R,z)=>{let F=z/(Eb-1),k=F**1.4,N=r_+(MP-r_)*k,D=N+1.4,M=i_+(NP-i_)*k,A=-(z*(_/C)*L);return{index:z,progress:F,taperedProgress:k,coreWidth:N,haloWidth:D,opacity:M,dashArray:`${L} ${C-L}`,timeDelay:n+A}}),calculatedDuration:_,periodPx:C}},[g,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-b:0}px; }
      to { stroke-dashoffset: ${r?0:-b}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,ya.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,ya.jsxs)("defs",{children:[(0,ya.jsx)("style",{children:m}),(0,ya.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,ya.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,ya.jsxs)("feMerge",{children:[(0,ya.jsx)("feMergeNode",{in:"blur"}),(0,ya.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,ya.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,ya.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:y.map(h=>{let v=h.index>=5;return(0,ya.jsxs)("g",{children:[v&&(0,ya.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:h.haloWidth,strokeLinecap:"round",strokeDasharray:h.dashArray,fill:"none",filter:`url(#${u})`,opacity:h.opacity*.75,style:{animation:`${d} ${x}s linear ${h.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,ya.jsx)("path",{d:e,stroke:h.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:h.coreWidth,strokeLinecap:"round",strokeDasharray:h.dashArray,fill:"none",opacity:h.opacity,filter:h.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${x}s linear ${h.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},h.index)})})]})},s_=(0,lo.memo)(EP);var sc=E(Q(),1);var c_=E(Q(),1);var TP={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.type.import_asset":"\u5BFC\u5165\u7D20\u6750","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.replace":"\u66FF\u6362","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165\u7D20\u6750","pill.importImage":"\u5BFC\u5165\u7D20\u6750","pill.importVideo":"\u5BFC\u5165\u7D20\u6750","pill.importAudio":"\u5BFC\u5165\u7D20\u6750","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u652F\u6301\u56FE\u7247 / \u89C6\u9891 / \u97F3\u9891\uFF0C\u62D6\u62FD\u6216\u70B9\u51FB\u5BFC\u5165\u7D20\u6750","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u4EC5\u652F\u6301\u66FF\u6362\u672C\u5730\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u751F\u6210","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.import_asset":"\u5BFC\u5165\u7D20\u6750","toolbar.add.import_assetDesc":"\u5BFC\u5165\u672C\u5730\u56FE\u7247\u3001\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.importOk":"\u5DF2\u5BFC\u5165\u7D20\u6750","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002"},d_=TP;var AP={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.type.import_asset":"Import Asset","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.replace":"Replace","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import Asset","pill.importImage":"Import Asset","pill.importVideo":"Import Asset","pill.importAudio":"Import Asset","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Supports image / video / audio. Drop or click to import asset","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import asset nodes only support replacing local files, not generation","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.import_asset":"Import Asset","toolbar.add.import_assetDesc":"Import local image, video, or audio files","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.importOk":"Asset imported","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker."},u_=AP;var Tb={zh:d_,en:u_},um="zh",Ab=new Set;function DP(e){return Ab.add(e),()=>Ab.delete(e)}function RP(){return um}function f_(e){let t=e==="en"?"en":"zh";if(t!==um){um=t;for(let a of Ab)a()}}function nl(e){return Tb[um][e]??Tb.zh[e]??Tb.en[e]??e}function fe(){return(0,c_.useSyncExternalStore)(DP,RP),nl}var fm=E(X(),1),cm=28,PP=({edgeId:e,x:t,y:a})=>{let o=fe(),n=le(l=>l.applyCanvasInputMutation),r=(0,sc.useCallback)(l=>{l.preventDefault(),l.stopPropagation()},[]),i=(0,sc.useCallback)(l=>{l.preventDefault(),l.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,fm.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-cm/2,y:a-cm/2,width:cm,height:cm,children:(0,fm.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,fm.jsx)(el,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},p_=(0,sc.memo)(PP);var As=E(X(),1),zP=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,selected:u,animated:d,data:f,style:c})=>{let[p,g,w]=Ss({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s}),y=le(C=>{let S=C.selectedElement.id;return S&&(S===t||S===a)?!0:C.nodes.some(L=>L.selected&&(L.id===t||L.id===a))}),x=Ke(C=>C.nodeStatuses[a]==="running"),b=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,h=y||b||x||m,v=o_();return(0,As.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,As.jsx)(Is,{id:e,path:p,style:c}),h&&!v&&(0,As.jsx)(s_,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:x?.8:void 0}),(0,As.jsx)(p_,{edgeId:e,x:g,y:w})]})},Db=(0,m_.memo)(zP);var Ds=E(Q(),1);function Te(e){e.stopPropagation()}function Rb(e){e.preventDefault(),e.stopPropagation()}var me=E(X(),1),OP=[{type:"import_asset",Icon:Oa,color:"#38bdf8",bg:"rgba(56, 189, 248, 0.16)"},{type:"text",Icon:la,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:Qn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:jo,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:sa,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:ro,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:Vt,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],BP=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:i,onOpenAssets:l,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:d,isAssetsOpen:f=!1})=>{let c=fe(),[p,g]=(0,Ds.useState)(!1),w=u!==void 0?u:p,y=d||(()=>g(m=>!m)),x=(0,Ds.useCallback)(m=>{e(m),d?d():g(!1)},[e,d]),b=[{key:"select",icon:(0,me.jsx)(Es,{size:15}),label:c("toolbar.selectMode"),onClick:()=>i?.("select")},{key:"pan",icon:(0,me.jsx)(Ns,{size:15}),label:c("toolbar.panMode"),onClick:()=>i?.("pan")}];return(0,me.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:Te,onMouseDown:Te,children:[(0,me.jsxs)("div",{style:{position:"relative"},children:[(0,me.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:y,onContextMenu:Rb,title:c("toolbar.addNode"),children:(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Ze,{size:20})})}),w&&(0,me.jsx)("div",{className:"wf-dock-add-popover",children:OP.map(m=>(0,me.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>x(m.type),onContextMenu:Rb,children:[(0,me.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,me.jsx)(m.Icon,{size:18})}),(0,me.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,me.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,me.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,me.jsx)(tc,{items:b,selectedKeys:[r],placement:"topCenter",children:(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,me.jsx)(Es,{size:16}):(0,me.jsx)(Ns,{size:16})}),(0,me.jsx)(Nu,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,me.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:l,title:c("toolbar.assets"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Ou,{size:17})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Ji,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)($i,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,me.jsxs)(me.Fragment,{children:[(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Uo,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},g_=(0,Ds.memo)(BP);var Rs=E(Q(),1);var be=E(X(),1),HP={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},FP=e=>Math.round(e.transform[2]*100),UP=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:l,onCancelExecution:s,onResetExecution:u})=>{let d=fe(),{zoomIn:f,zoomOut:c,fitView:p}=ao(),g=Ce(FP),w=Ke(T=>T.status),y=Ke(T=>T.progress),x=Ke(T=>T.error),b=w==="pending"||w==="running",m=w==="paused",h=w==="completed"||w==="error"||w==="cancelled",v=y.total>0,C=(0,Rs.useCallback)(()=>{p({duration:250,padding:.1})},[p]),S=(0,Rs.useCallback)(()=>{f({duration:150})},[f]),L=(0,Rs.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,be.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:Te,onMouseDown:Te,children:[r&&(b||m||h&&u?(0,be.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${b||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[b||m?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d(HP[w]),v&&` (${y.completed}/${y.total})`]}),b?(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,be.jsx)(Wu,{size:14})}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:l,title:d("exec.resumeTitle"),children:(0,be.jsx)(no,{size:14})}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,be.jsx)(aa,{size:14})})]}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:x||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,be.jsx)(no,{size:14,fill:"currentColor",style:{marginLeft:2}})}),h&&u&&(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,be.jsx)($u,{size:14})})]}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:x||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,be.jsx)(no,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,be.jsxs)("div",{className:"wf-header-capsule",children:[(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,be.jsx)(Xu,{size:15})}),(0,be.jsx)("div",{className:"wf-header-capsule__divider"}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:L,title:d("header.zoomOut"),children:(0,be.jsx)(Yu,{size:15})}),(0,be.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:d("header.zoomIn"),children:(0,be.jsx)(Ze,{size:15})})]}),(0,be.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,be.jsx)(Vo,{size:15})}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,be.jsx)(ec,{size:15})}),(0,be.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,be.jsx)(ju,{size:15})}),n&&(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("div",{className:"wf-header-capsule__divider"}),(0,be.jsx)(tc,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,be.jsx)(Jr,{size:15})})})]})]})]})},h_=(0,Rs.memo)(UP);var ua=E(Q(),1);var Pt="/omnimux-workflow";var jt={manifest:`${Pt}/api/manifest`,canvasJs:`${Pt}/canvas.js`,workspaces:`${Pt}/api/workspaces`,workspace:e=>`${Pt}/api/workspaces/${e}`,workspaceVersion:e=>`${Pt}/api/workspaces/${e}/version`,workspaceAssets:e=>`${Pt}/api/workspaces/${e}/assets`,workspaceAssetsMkdir:e=>`${Pt}/api/workspaces/${e}/assets/mkdir`,workspaceAssetsIndex:e=>`${Pt}/api/workspaces/${e}/assets/index`,capabilities:`${Pt}/api/capabilities`,media:`${Pt}/media`,pick:`${Pt}/api/pick`,localFile:`${Pt}/api/local-file`,localFileProbe:`${Pt}/api/local-file/probe`,executions:e=>`${Pt}/api/workspaces/${e}/executions`,execution:(e,t)=>`${Pt}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${Pt}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${Pt}/api/workspaces/${e}/executions/${t}/events`};async function va(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body),signal:t.signal}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function x_(){return va(jt.capabilities)}function b_(e,t){return va(jt.workspaces,{method:"POST",body:{name:e,id:t}})}function dc(e){return va(jt.workspace(encodeURIComponent(e)))}function w_(e){return va(jt.workspaceVersion(encodeURIComponent(e)))}function y_(e,t){return va(jt.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function v_(e,t={}){return va(jt.executions(encodeURIComponent(e)),{method:"POST",body:t})}function C_(e){return va(jt.executions(encodeURIComponent(e)))}function S_(e,t){return va(jt.execution(encodeURIComponent(e),encodeURIComponent(t)))}function L_(e,t){return va(jt.workspaceAssets(encodeURIComponent(e)),{signal:t})}function k_(e,t){return va(jt.workspaceAssets(encodeURIComponent(e)),{method:"PUT",body:t})}function __(e,t){return va(jt.workspaceAssetsMkdir(encodeURIComponent(e)),{method:"POST",body:t})}function I_(e,t){return va(jt.workspaceAssetsIndex(encodeURIComponent(e)),{method:"POST",body:t})}function bn(){return va(jt.pick,{method:"POST",body:{kind:"file"}})}function M_(e){return va(jt.localFileProbe,{method:"POST",body:{paths:e}})}function N_(e,t,a){return va(jt.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var qP=["character","scene","style","prop","knowledge","custom"],rl={character:"\u89D2\u8272",scene:"\u573A\u666F",style:"\u98CE\u683C\u5305",prop:"\u9053\u5177",knowledge:"\u77E5\u8BC6\u5305",custom:"\u81EA\u5B9A\u4E49"},Pb=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:rl.character},{id:"scene",label:rl.scene},{id:"style",label:rl.style},{id:"prop",label:rl.prop},{id:"knowledge",label:rl.knowledge},{id:"custom",label:rl.custom}];function VP(e){return typeof e=="string"&&qP.includes(e)?e:"custom"}function E_(e,t){let a=new URLSearchParams({id:e});return t&&a.set("file",t),`/omnimux/assets/library/preview?${a.toString()}`}function GP(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.trim()!==""):[]}function zb(e){let t=typeof e.id=="string"&&e.id.trim()!==""?e.id:"",a=typeof e.name=="string"&&e.name.trim()!==""?e.name:"\u672A\u547D\u540D\u4E3B\u4F53",o=VP(e.type),n=rl[o],r=Array.isArray(e.files)?e.files:[],i=e.cover&&typeof e.cover.id=="string"&&e.cover.id||(typeof e.cover_file_id=="string"?e.cover_file_id:"")||(typeof r[0]?.id=="string"?r[0].id:""),l=t&&i?E_(t,i):"",s=r.map(f=>t&&typeof f.id=="string"?E_(t,f.id):"").filter(f=>f!=="").slice(0,4),u=GP(e.tags).filter(f=>f!==n),d=typeof e.updatedAt=="number"?e.updatedAt:typeof e.updated_at=="string"&&Date.parse(e.updated_at)||0;return{id:t,name:a,avatar:l,itemCount:r.length,tags:[n,...u],updatedAt:d,previewUrls:s.length>0?s:l?[l]:[],type:o}}function pm(e){if(!e.ok){let o=e.body?.error;return e.status===501||o==="picker-unsupported"?{kind:"unsupported"}:{kind:"error",message:e.body?.message||e.body?.error||`HTTP ${String(e.status)}`}}let t=e.body?.paths,a=Array.isArray(t)?t.filter(o=>typeof o=="string"&&o.trim()!==""):typeof e.body?.path=="string"&&e.body.path.trim()!==""?[e.body.path]:[];return a.length===0?{kind:"cancel"}:{kind:"ok",paths:a}}function jP(){return globalThis.fetch.bind(globalThis)}async function Ob(e){try{let t=await e.json();if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{}return{}}function uc(e={}){let t=e.fetch??jP();async function a(r={},i){try{let l=new URLSearchParams;r.type&&r.type!=="all"&&l.set("type",r.type),r.q&&l.set("q",r.q);let s=l.toString()?`?${l.toString()}`:"",u=await t(`/omnimux/assets/library${s}`,{method:"GET",signal:i}),d=await Ob(u);if(!u.ok)return{ok:!1,status:u.status,subjects:[],error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let c=(Array.isArray(d.assets)?d.assets:[]).filter(p=>!!p&&typeof p=="object").map(p=>zb(p)).filter(p=>p.id!=="");return{ok:!0,status:u.status,subjects:c}}catch(l){return i?.aborted||l instanceof Error&&l.name==="AbortError"?{ok:!1,status:0,subjects:[],error:"aborted"}:{ok:!1,status:0,subjects:[],error:"network"}}}async function o(r,i="custom"){try{let l=await t("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,type:i})}),s=await Ob(l);if(!l.ok)return{ok:!1,status:l.status,subject:null,error:typeof s.error=="string"?s.error:`HTTP ${String(l.status)}`};let u=s.asset&&typeof s.asset=="object"?s.asset:{name:r,type:i};return{ok:!0,status:l.status,subject:zb(u)}}catch{return{ok:!1,status:0,subject:null,error:"network"}}}async function n(r){try{let i=await t("/omnimux/assets/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:r})}),l=await Ob(i),s=pm({ok:i.ok,status:i.status,body:{error:typeof l.error=="string"?l.error:void 0,message:typeof l.message=="string"?l.message:void 0,path:typeof l.path=="string"||l.path===null?l.path:null,paths:Array.isArray(l.paths)?l.paths:[]}});return{ok:i.ok,status:i.status,interpretation:s}}catch{return{ok:!1,status:0,interpretation:{kind:"error",message:"network"}}}}return{listLibrary:a,createLibraryAsset:o,pickAssets:n}}var tW=uc();function Yo(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function A_(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ca(e){return typeof e=="string"?e.trim():""}function D_(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function XP(e){return typeof e=="string"&&e.startsWith("blob:")}function Zo(e){let t=Ca(e);if(!(!t||XP(t)))return t}function YP(e){return A_(e.data)?e.data:{}}function R_(e){return Ca(e.realPath)||Ca(e.real_path)}function T_(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function ZP(e){if(e)for(let t of e){let a=Zo(t?.url);if(a)return a}}function WP(e,t){let a=Ca(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=Ca(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function KP(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=Ca(t.mediaUrl)||void 0,n=a?Yo(a,T_(t),o):void 0;return Zo(n)||Zo(t.previewUrl)||Zo(t.imageUrl)||Zo(t.outputUrl)||Zo(t.coverUrl)||Zo(t.mediaUrl)||Zo(t.outputVideoUrl)||Zo(t.thumbnailUrl)||ZP(T_(t))}function $P(e){let t=D_(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=A_(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function QP(e,t,a){let o=R_(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(Ca(t.content)||Ca(t.generatedContent)):e==="table"?$P(t):e==="video_composition"?!!(Zo(t.outputVideoUrl)||Zo(t.thumbnailUrl)):!1}function JP(e,t,a){return Ca(a.originalName)||Ca(a.label)||Ca(a.title)||Ca(a.name)||`${e} #${t.slice(-4)}`}function ez(e){let t=Ca(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function tz(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function az(e){let t=Ca(e.id);if(!t)return null;let a=YP(e),o=WP(e,a),n=KP(o,a);if(!QP(o,a,n))return null;let r=R_(a),i=D_(a.updatedAt)??0,l=Ca(a.prompt),s={id:t,name:JP(o,t,a),type:o,status:ez(a),updatedAt:i};n&&(s.previewUrl=n),r&&(s.real_path=r),l&&(s.prompt=l);let u=tz(a);return u&&(s.tags=u),s}function P_(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=az(a);o&&t.push(o)}return t}var mm=E(Q(),1),z_=E(Bt(),1);var ar=E(X(),1),Bb=["image","video","audio","text","other"],oz=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],O_=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,mm.useRef)(null);if((0,mm.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-160),s=a.length===0||Bb.every(f=>a.includes(f)),u=f=>f==="all"?s:s?!0:a.includes(f),d=f=>{if(f==="all"){o(s?["__none__"]:[]);return}if(s){let p=Bb.filter(g=>g!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],Bb.every(p=>c.includes(p))?o([]):o(c)};return(0,z_.createPortal)((0,ar.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"140px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:f=>f.stopPropagation(),children:(0,ar.jsx)("div",{className:"wf-popover-body",children:oz.map(f=>{let c=u(f.id);return(0,ar.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,ar.jsxs)("div",{className:"wf-popover-item-left",children:[(0,ar.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,ar.jsx)(_t,{size:10,strokeWidth:3})}),(0,ar.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var gm=E(Q(),1),B_=E(Bt(),1);var ai=E(X(),1),Hb=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],H_=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,gm.useRef)(null);if((0,gm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-150),s=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,B_.createPortal)((0,ai.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"136px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:u=>u.stopPropagation(),children:(0,ai.jsx)("div",{className:"wf-popover-body",children:Hb.map(u=>{let d=a.includes(u.id);return(0,ai.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>s(u.id),children:(0,ai.jsxs)("div",{className:"wf-popover-item-left",children:[(0,ai.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,ai.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var hm=E(Q(),1),F_=E(Bt(),1);var Sa=E(X(),1),U_=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let l=(0,hm.useRef)(null);if((0,hm.useEffect)(()=>{if(!e)return;let d=c=>{l.current&&!l.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let s=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,F_.createPortal)((0,Sa.jsxs)("div",{ref:l,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:d=>d.stopPropagation(),children:[(0,Sa.jsxs)("div",{className:"wf-popover-body",children:[(0,Sa.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,Sa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,Sa.jsx)(_t,{size:14,className:"wf-popover-item-check"})]}),(0,Sa.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,Sa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,Sa.jsx)(_t,{size:14,className:"wf-popover-item-check"})]})]}),(0,Sa.jsx)("div",{className:"wf-popover-divider"}),(0,Sa.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,Sa.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,Sa.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,Sa.jsx)(_t,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var xm=E(Q(),1),q_=E(Bt(),1);var il=E(X(),1),V_=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,xm.useRef)(null);if((0,xm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-180),s=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,q_.createPortal)((0,il.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"160px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:u=>u.stopPropagation(),children:(0,il.jsx)("div",{className:"wf-popover-body",children:s.map(u=>{let d=a===u.id;return(0,il.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,il.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,il.jsx)(_t,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var bm=E(Q(),1),G_=E(Bt(),1);var de=E(X(),1),j_=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,bm.useRef)(null);if((0,bm.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=220,s=440,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,G_.createPortal)((0,de.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Te,onPointerDown:Te,onClick:c=>c.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,de.jsx)(Ze,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,de.jsx)(Zi,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,de.jsx)(gt,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,de.jsx)(_u,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,de.jsx)("div",{className:"wf-context-menu-divider"}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,de.jsx)($n,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,de.jsx)(Tu,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,de.jsx)(qo,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,de.jsx)(Wr,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,de.jsx)("div",{className:"wf-context-menu-divider"}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,de.jsx)(Wr,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,de.jsx)(zu,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,de.jsx)(Gu,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,de.jsx)(gn,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,de.jsx)("div",{className:"wf-context-menu-divider"}),(0,de.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,de.jsx)(io,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var wm=E(Q(),1),X_=E(Bt(),1);var zt=E(X(),1),Y_=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,wm.useRef)(null);if((0,wm.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=220,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,X_.createPortal)((0,zt.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Te,onPointerDown:Te,onClick:c=>c.stopPropagation(),children:[(0,zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,zt.jsx)(ba,{size:14,className:"wf-context-menu-icon"}),(0,zt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,zt.jsx)(Zi,{size:14,className:"wf-context-menu-icon"}),(0,zt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,zt.jsx)(qo,{size:14,className:"wf-context-menu-icon"}),(0,zt.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,zt.jsx)(Yi,{size:14,className:"wf-context-menu-icon"}),(0,zt.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,zt.jsx)("div",{className:"wf-context-menu-divider"}),(0,zt.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,zt.jsx)(io,{size:14,className:"wf-context-menu-icon"}),(0,zt.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var ym=E(Q(),1),Z_=E(Bt(),1);var da=E(X(),1),W_=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,ym.useRef)(null);if((0,ym.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=180,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,Z_.createPortal)((0,da.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Te,onPointerDown:Te,onClick:c=>c.stopPropagation(),children:[(0,da.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,da.jsx)(qo,{size:14,className:"wf-context-menu-icon"}),(0,da.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,da.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,da.jsx)(gn,{size:14,className:"wf-context-menu-icon"}),(0,da.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,da.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,da.jsx)(Yi,{size:14,className:"wf-context-menu-icon"}),(0,da.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,da.jsx)("div",{className:"wf-context-menu-divider"}),(0,da.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,da.jsx)(io,{size:14,className:"wf-context-menu-icon"}),(0,da.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var so=E(Q(),1);var ie=E(X(),1),Fb=1440*60*1e3;function nz(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=Fb:t==="7d"?a<=7*Fb:t==="30d"?a<=30*Fb:!0}var rz={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function iz(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=Hb.find(i=>i.id===o);return[...rz[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function lz(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var K_=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:l,onViewModeChange:s})=>{let[u,d]=(0,so.useState)(""),f=t!==void 0?t:u,c=P=>{d(P),a?.(P)},[p,g]=(0,so.useState)("tree"),w=l??p,y=P=>{g(P),s?.(P)},[x,b]=(0,so.useState)(null),[m,h]=(0,so.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[v,C]=(0,so.useState)(!1),[S,L]=(0,so.useState)(!1),[_,T]=(0,so.useState)(!1),[R,z]=(0,so.useState)(null),[F,k]=(0,so.useState)(null),[N,D]=(0,so.useState)(null),M=P=>{switch(P){case"image":return(0,ie.jsx)(ba,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,ie.jsx)(Vt,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,ie.jsx)(sa,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,ie.jsx)(la,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,ie.jsx)(gt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},A=(0,so.useMemo)(()=>{let P=e.filter(H=>{if(f.trim()){let I=f.toLowerCase();if(!(H.name.toLowerCase().includes(I)||H.prompt&&H.prompt.toLowerCase().includes(I)))return!1}return!(!lz(H.type,m.types)||!iz(H,m.tags)||!nz(H.updatedAt||0,m.timeRange))});return P.sort((H,I)=>m.sortOrder==="desc"?(I.updatedAt||0)-(H.updatedAt||0):(H.updatedAt||0)-(I.updatedAt||0)),P},[e,f,m]),B=P=>H=>{H.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:P})),H.dataTransfer.effectAllowed="copy"};return(0,ie.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,ie.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,ie.jsxs)("div",{className:"wf-search-row-compact",children:[(0,ie.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,ie.jsx)(Go,{size:13,className:"wf-search-icon"}),(0,ie.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:P=>c(P.target.value)})]}),(0,ie.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,ie.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>y("tree"),children:(0,ie.jsx)(Jn,{size:13})}),(0,ie.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>y("grid"),children:(0,ie.jsx)(Vo,{size:13})})]}),(0,ie.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,ie.jsx)(er,{size:13})})]}),(0,ie.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,ie.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,ie.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:P=>{z(P.currentTarget.getBoundingClientRect()),C(H=>!H),L(!1),T(!1)},children:[(0,ie.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,ie.jsx)(oo,{size:11})]})}),(0,ie.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,ie.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:P=>{k(P.currentTarget.getBoundingClientRect()),L(H=>!H),C(!1),T(!1)},children:[(0,ie.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,ie.jsx)(oo,{size:11})]})}),(0,ie.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,ie.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:P=>{D(P.currentTarget.getBoundingClientRect()),T(H=>!H),C(!1),L(!1)},children:[(0,ie.jsx)("span",{children:"\u65F6\u95F4"}),(0,ie.jsx)(oo,{size:11})]})})]})]}),(0,ie.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,ie.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,ie.jsx)(ta,{size:24,className:"wf-assets-empty-icon"}),(0,ie.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,ie.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):A.length===0?(0,ie.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,ie.jsx)(ta,{size:24,className:"wf-assets-empty-icon"}),(0,ie.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,ie.jsx)("div",{className:"wf-tree-list-container-compact",children:A.map(P=>{let H=x===P.id;return(0,ie.jsxs)("div",{"data-id":P.id,className:`wf-tree-item-compact ${H?"selected":""}`,draggable:!0,onDragStart:B(P),onClick:()=>{b(P.id),o(P.id)},onContextMenu:I=>{I.preventDefault(),b(P.id),n(I,P)},onMouseEnter:I=>r(P,I),onMouseLeave:()=>r(null),children:[P.previewUrl?(0,ie.jsx)("img",{src:P.previewUrl,alt:P.name,className:"wf-tree-file-thumb-compact"}):(0,ie.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:M(P.type)}),(0,ie.jsx)("span",{className:"wf-tree-name-compact",title:P.name,children:P.name}),(0,ie.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:I=>{I.stopPropagation(),o(P.id)},children:(0,ie.jsx)($n,{size:12})})]},P.id)})}):(0,ie.jsx)("div",{className:"wf-grid-view-container-compact",children:A.map(P=>(0,ie.jsxs)("div",{"data-id":P.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:B(P),onClick:()=>{b(P.id),o(P.id)},onContextMenu:H=>{H.preventDefault(),n(H,P)},onMouseEnter:H=>r(P,H),onMouseLeave:()=>r(null),children:[(0,ie.jsx)("div",{className:"wf-grid-card-thumb-compact",children:P.previewUrl?(0,ie.jsx)("img",{src:P.previewUrl,alt:P.name}):M(P.type)}),(0,ie.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,ie.jsx)("div",{className:"wf-grid-card-title-compact",title:P.name,children:P.name})})]},P.id))})}),(0,ie.jsx)(O_,{isOpen:v,anchorRect:R,selectedTypes:m.types,onChange:P=>h(H=>({...H,types:P})),onClose:()=>C(!1)}),(0,ie.jsx)(H_,{isOpen:S,anchorRect:F,selectedTags:m.tags,onChange:P=>h(H=>({...H,tags:P})),onClose:()=>L(!1)}),(0,ie.jsx)(U_,{isOpen:_,anchorRect:N,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:P=>h(H=>({...H,sortOrder:P})),onRangeChange:P=>h(H=>({...H,timeRange:P})),onClose:()=>T(!1)})]})};var cc=E(Q(),1);var se=E(X(),1),$_=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:l})=>{let[s,u]=(0,cc.useState)("tree"),[d,f]=(0,cc.useState)(""),[c,p]=(0,cc.useState)(null),[g,w]=(0,cc.useState)({}),y=v=>{w(C=>({...C,[v]:!C[v]}))},x=v=>{switch(v){case"image":return(0,se.jsx)(ba,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,se.jsx)(Vt,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,se.jsx)(sa,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,se.jsx)(la,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,se.jsx)(qo,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,se.jsx)(gt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},b=e.filter(v=>{if(d.trim()){let C=d.toLowerCase();if(!(v.name.toLowerCase().includes(C)||v.tags&&v.tags.some(L=>L.toLowerCase().includes(C))))return!1}return!0}),m=v=>b.filter(C=>(C.parentId??null)===v),h=(v,C)=>{let S=[];for(let L of m(v)){let _=L.type==="folder",T=_&&(g[L.id]??C===0),R=c===L.id;S.push((0,se.jsxs)("div",{className:`wf-tree-item-compact ${R?"selected":""}`,style:{paddingLeft:`${8+C*14}px`},"data-asset-id":L.id,"data-parent-id":L.parentId??"",draggable:!_,onDragStart:z=>{_||(z.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:L})),z.dataTransfer.effectAllowed="copy")},onClick:()=>{p(L.id),_&&y(L.id)},onDoubleClick:()=>{_||i(L)},onContextMenu:z=>{z.preventDefault(),p(L.id),a(z,L,_)},onMouseEnter:z=>o(L,z),onMouseLeave:()=>o(null),children:[_?(0,se.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:T?(0,se.jsx)(oo,{size:11}):(0,se.jsx)(Kn,{size:11})}):null,L.previewUrl?(0,se.jsx)("img",{src:L.previewUrl,alt:L.name,className:"wf-tree-file-thumb-compact"}):(0,se.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:x(L.type)}),(0,se.jsx)("span",{className:"wf-tree-name-compact",title:L.name,children:L.name}),!_&&(0,se.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:z=>{z.stopPropagation(),i(L)},children:(0,se.jsx)($n,{size:12})})]},L.id)),_&&T&&S.push(...h(L.id,C+1))}return S};return(0,se.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,se.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,se.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,se.jsx)(gt,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,se.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,se.jsx)(Kn,{size:14,className:"wf-subject-hero-arrow"})]}),(0,se.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,se.jsxs)("div",{className:"wf-search-row-compact",children:[(0,se.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,se.jsx)(Go,{size:13,className:"wf-search-icon"}),(0,se.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:v=>f(v.target.value)})]}),(0,se.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,se.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,se.jsx)(Jn,{size:13})}),(0,se.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,se.jsx)(Vo,{size:13})})]}),(0,se.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:l,children:(0,se.jsx)(er,{size:13})})]})}),(0,se.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:b.length===0?(0,se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,se.jsx)(ta,{size:24,className:"wf-assets-empty-icon"}),(0,se.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):s==="tree"?(0,se.jsx)("div",{className:"wf-tree-list-container-compact",children:h(null,0)}):(0,se.jsx)("div",{className:"wf-grid-view-container-compact",children:b.map(v=>(0,se.jsxs)("div",{className:"wf-grid-card-compact",draggable:v.type!=="folder",onDragStart:C=>{v.type!=="folder"&&(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:v})),C.dataTransfer.effectAllowed="copy")},onClick:()=>p(v.id),onDoubleClick:()=>{v.type!=="folder"&&i(v)},onContextMenu:C=>{C.preventDefault(),p(v.id),a(C,v,v.type==="folder")},onMouseEnter:C=>o(v,C),onMouseLeave:()=>o(null),children:[(0,se.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[v.previewUrl?(0,se.jsx)("img",{src:v.previewUrl,alt:v.name}):x(v.type),v.duration&&(0,se.jsx)("span",{className:"wf-grid-card-duration-compact",children:v.duration})]}),(0,se.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,se.jsx)("div",{className:"wf-grid-card-title-compact",title:v.name,children:v.name})})]},v.id))})}),(0,se.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,se.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,se.jsx)(Bu,{size:13}),(0,se.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,se.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,se.jsx)(Gi,{size:13}),(0,se.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var Ps=E(Q(),1);var Se=E(X(),1),Q_=({subjects:e,error:t,onBack:a,onSelectSubject:o,onCreateSubject:n})=>{let[r,i]=(0,Ps.useState)(""),[l,s]=(0,Ps.useState)("all"),[u,d]=(0,Ps.useState)("recent"),[f,c]=(0,Ps.useState)(!1),[p,g]=(0,Ps.useState)(null),w=b=>{g(b.currentTarget.getBoundingClientRect()),c(m=>!m)},y=e.filter(b=>{if(l!=="all")if(b.type){if(b.type!==l)return!1}else{let h=Pb.find(v=>v.id===l);if(h&&h.id!=="all"&&!b.tags.some(C=>C===h.label))return!1}if(!r.trim())return!0;let m=r.toLowerCase();return b.name.toLowerCase().includes(m)||b.tags.some(h=>h.toLowerCase().includes(m))}).sort((b,m)=>u==="recent"?m.updatedAt-b.updatedAt:u==="name"?b.name.localeCompare(m.name):u==="count"?m.itemCount-b.itemCount:0);return(0,Se.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Se.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Se.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:a,children:[(0,Se.jsx)(ku,{size:13}),(0,Se.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Se.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:w,children:[(0,Se.jsx)(Qi,{size:11}),(0,Se.jsx)("span",{children:(()=>{switch(u){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Se.jsx)(oo,{size:11})]})]}),(0,Se.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Se.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Se.jsx)(Go,{size:13,className:"wf-search-icon"}),(0,Se.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:r,onChange:b=>i(b.target.value)})]}),(0,Se.jsx)("div",{className:"wf-subject-pills-row-compact",children:Pb.map(b=>(0,Se.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${l===b.id?"active":""}`,onClick:()=>s(b.id),children:b.label},b.id))})]}),(0,Se.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:y.length===0?(0,Se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Se.jsx)(gt,{size:24,className:"wf-assets-empty-icon"}),(0,Se.jsx)("div",{className:"wf-assets-empty-title",children:t?"\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528":e.length===0?"\u6682\u65E0\u4E3B\u4F53":"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Se.jsx)("div",{className:"wf-subject-grid-compact",children:y.map(b=>(0,Se.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,onDragStart:m=>{m.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:b.id,name:b.name,type:"image",previewUrl:b.avatar,prompt:b.tags.join(", ")}})),m.dataTransfer.effectAllowed="copy"},onClick:()=>o(b),children:[(0,Se.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[b.avatar?(0,Se.jsx)("img",{src:b.avatar,alt:b.name,className:"wf-subject-card-img-compact"}):(0,Se.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Se.jsx)(gt,{size:20})}),(0,Se.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Se.jsx)(ta,{size:10})," ",b.itemCount," \u9879"]})]}),(0,Se.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Se.jsx)("div",{className:"wf-subject-card-name-compact",title:b.name,children:b.name}),(0,Se.jsx)("div",{className:"wf-subject-card-tags-compact",children:b.tags.slice(0,3).map((m,h)=>(0,Se.jsx)("span",{className:"wf-subject-card-tag-compact",children:m},h))})]})]},b.id))})}),(0,Se.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Se.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:n,children:[(0,Se.jsx)(Ze,{size:13}),(0,Se.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Se.jsx)(V_,{isOpen:f,anchorRect:p,sortValue:u,onChange:b=>d(b),onClose:()=>c(!1)})]})};var J_=E(Q(),1),e5=E(Bt(),1);var Ue=E(X(),1),t5=({isOpen:e,x:t,y:a,item:o})=>{let n=(0,J_.useRef)(null);if(!e||!o)return null;let r=260,i=290,l=t+15;l+r>window.innerWidth-10&&(l=t-r-15);let s=a-20;s+i>window.innerHeight-10&&(s=window.innerHeight-i-10),s<10&&(s=10);let u="type"in o&&("fileExt"in o||"real_path"in o||"parentId"in o),d=u?o:null,f=u?null:o,c=o.updatedAt?new Date(o.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,e5.createPortal)((0,Ue.jsxs)("div",{ref:n,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${l}px`,width:`${r}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Ue.jsxs)("div",{className:"wf-hover-inspector-preview",children:[o.previewUrl?(0,Ue.jsx)("img",{src:o.previewUrl,alt:o.name,className:"wf-hover-inspector-img"}):(0,Ue.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Ue.jsx)(gt,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),d?.duration&&(0,Ue.jsx)("span",{className:"wf-hover-inspector-duration",children:d.duration})]}),(0,Ue.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Ue.jsx)("div",{className:"wf-hover-inspector-title",title:o.name,children:o.name}),(0,Ue.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Ue.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Ue.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Ue.jsx)(Iu,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Ue.jsx)("span",{className:"wf-hover-inspector-value",children:c})]}),d?.resolution&&(0,Ue.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Ue.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Ue.jsx)(pn,{size:12})," \u5206\u8FA8\u7387"]}),(0,Ue.jsx)("span",{className:"wf-hover-inspector-value",children:d.resolution})]}),d?.size&&(0,Ue.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Ue.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Ue.jsx)(Fu,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Ue.jsx)("span",{className:"wf-hover-inspector-value",children:d.size})]}),f?.prompt&&(0,Ue.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Ue.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Ue.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:f.prompt})]})]}),d?.tags&&d.tags.length>0&&(0,Ue.jsx)("div",{className:"wf-hover-inspector-tags",children:d.tags.map((p,g)=>(0,Ue.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Ue.jsx)(Ju,{size:10})," ",p]},g))})]})]}),document.body)};var It=E(Q(),1);var sz=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),dz=new Set(["mp4","webm","mov","mkv","avi","m4v"]),uz=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),cz={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function a5(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function fc(e){return cz[a5(e)]}function o5(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=a5(e);return sz.has(o)?"image":dz.has(o)?"video":uz.has(o)?"audio":null}function vm(e){return typeof e=="string"&&e.startsWith("blob:")}function Wo(e){return`${Pt}/api/local-file?path=${encodeURIComponent(e)}`}function Cm(e){let t=Wo(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||fc(e.name)||fc(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function n5(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=Wo(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function r5(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var fz=1;function pc(){return{schemaVersion:fz,rev:0,folders:[],items:[]}}function i5(e,t,a){let o=new Set([a]),n=!0;for(;n;){n=!1;for(let r of e){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}for(let r of t){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}}return[...o]}function pz(e,t){return{id:e.id,name:e.name,type:"folder",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,itemCount:t}}function mz(e){return{id:e.id,name:e.name,type:e.type,fileExt:e.name.split(".").pop()?.toUpperCase()||"FILE",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,previewUrl:Wo(e.real_path)}}function l5(e){let t=new Map;for(let n of e.folders)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);for(let n of e.items)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);let a=e.folders.map(n=>pz(n,t.get(n.id)??0)),o=e.items.map(mz);return[...a,...o]}function s5(e){let[t,a]=(0,It.useState)(pc),[o,n]=(0,It.useState)(!1),[r,i]=(0,It.useState)(null),l=(0,It.useRef)(t);l.current=t;let s=(0,It.useCallback)(async(b,m)=>{n(!0),i(null);try{let h=await L_(b,m);if(m.aborted)return;if(!h.ok||!h.body.assets){i(h.body.error||h.body.message||`HTTP ${String(h.status)}`),a(pc());return}a(h.body.assets)}catch(h){if(m.aborted)return;i(h instanceof Error?h.message:String(h)),a(pc())}finally{m.aborted||n(!1)}},[]);(0,It.useEffect)(()=>{if(!e){a(pc()),i(null);return}let b=new AbortController;return s(e,b.signal),()=>b.abort()},[e,s]);let u=(0,It.useCallback)(b=>{a(b),i(null)},[]),d=(0,It.useCallback)(async(b,m)=>{if(!e)return!1;let h=await __(e,{name:b,parentId:m??null,expectedRev:l.current.rev});return!h.ok||!h.body.assets?(i(h.body.error||h.body.message||"mkdir failed"),!1):(u(h.body.assets),!0)},[u,e]),f=(0,It.useCallback)(async(b,m)=>{if(!e)return!1;let h=await I_(e,{paths:b,parentId:m??null,expectedRev:l.current.rev});return!h.ok||!h.body.assets?(i(h.body.error||h.body.message||"index failed"),!1):(u(h.body.assets),!0)},[u,e]),c=(0,It.useCallback)(async b=>{if(!e)return!1;let m=await k_(e,{expectedRev:l.current.rev,folders:b.folders,items:b.items});return!m.ok||!m.body.assets?(i(m.body.error||m.body.message||"save failed"),!1):(u(m.body.assets),!0)},[u,e]),p=(0,It.useCallback)(async(b,m)=>{let h=l.current;return c({folders:h.folders.map(v=>v.id===b?{...v,name:m,updatedAt:Date.now()}:v),items:h.items})},[c]),g=(0,It.useCallback)(async(b,m)=>{let h=l.current;return c({folders:h.folders.map(v=>v.id===b?{...v,parentId:m,updatedAt:Date.now()}:v),items:h.items.map(v=>v.id===b?{...v,parentId:m,updatedAt:Date.now()}:v)})},[c]),w=(0,It.useCallback)(async b=>{let m=l.current,h=new Set(i5(m.folders,m.items,b));return c({folders:m.folders.filter(v=>!h.has(v.id)),items:m.items.filter(v=>!h.has(v.id))})},[c]),y=(0,It.useCallback)(async()=>{e&&await s(e,new AbortController().signal)},[s,e]),x=(0,It.useMemo)(()=>l5(t),[t]);return{document:t,assets:x,loading:o,error:r,refresh:y,mkdir:d,indexPaths:f,persist:c,renameFolder:p,moveNode:g,deleteNode:w}}var or=E(Q(),1);var d5=uc();function u5(e){let[t,a]=(0,or.useState)([]),[o,n]=(0,or.useState)(!1),[r,i]=(0,or.useState)(null),l=(0,or.useCallback)(async(u={},d)=>{n(!0);try{let f=await d5.listLibrary(u,d);if(d?.aborted||f.error==="aborted")return;if(!f.ok){i(f.error||"library-unavailable"),a([]);return}i(null),a(f.subjects)}finally{d?.aborted||n(!1)}},[]);(0,or.useEffect)(()=>{if(!e)return;let u=new AbortController;return l({},u.signal),()=>u.abort()},[e,l]);let s=(0,or.useCallback)(async u=>{let d=await d5.createLibraryAsset(u,"custom");return!d.ok||!d.subject?(i(d.error||"create-failed"),null):(a(f=>[d.subject,...f]),i(null),d.subject)},[]);return{subjects:t,loading:o,error:r,refresh:l,createSubject:s}}var ut=E(X(),1),gz=uc();function hz(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function xz(e){let t=e.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(t)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(t)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(t)?"audio":"doc"}function c5(e){if(e.kind!=="cancel"){if(e.kind==="unsupported"){W.warning("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668");return}W.error(e.kind==="error"&&e.message||"\u9009\u62E9\u6587\u4EF6\u5931\u8D25")}}var bz=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n,workspaceId:r})=>{let[i,l]=(0,ua.useState)("canvas"),[s,u]=(0,ua.useState)("normal"),[d,f]=(0,ua.useState)("tree"),[c,p]=(0,ua.useState)(320),[g,w]=(0,ua.useState)(!1),y=(0,ua.useMemo)(()=>P_(o),[o]),x=s5(r??null),b=u5(e&&s==="subject-library"),[m,h]=(0,ua.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[v,C]=(0,ua.useState)({visible:!1,x:0,y:0}),S=(0,ua.useRef)(null);(0,ua.useEffect)(()=>()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]);let L=(0,ua.useCallback)(I=>{I.preventDefault(),w(!0);let U=I.clientX,j=c,Z=$=>{let G=Math.max(260,Math.min(500,j-($.clientX-U)));p(G)},te=()=>{w(!1),window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",te)};window.addEventListener("mousemove",Z),window.addEventListener("mouseup",te)},[c]),_=I=>{if(n)n(I);else{let U=document.getElementById(I)||document.querySelector(`[data-id="${I}"]`);U&&(U.scrollIntoView({behavior:"smooth",block:"center"}),U.classList.add("highlight-pulse"),setTimeout(()=>U.classList.remove("highlight-pulse"),1800))}},T=(I,U)=>{if(S.current&&(clearTimeout(S.current),S.current=null),!I||!U){C({visible:!1,x:0,y:0});return}let{clientX:j,clientY:Z}=U;S.current=setTimeout(()=>{C({visible:!0,x:j,y:Z,item:I})},300)},R=(I,U)=>{h({visible:!0,x:I.clientX,y:I.clientY,targetType:"canvas-item",targetItem:U})},z=(I,U,j)=>{h({visible:!0,x:I.clientX,y:I.clientY,targetType:j?"asset-folder":"asset-item",targetItem:U})},F=I=>I.real_path||I.name,k=(I,U)=>{let Z=`[${U==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${I.name}]`;navigator.clipboard?.writeText(Z),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:Z,name:I.name,previewUrl:I.previewUrl,path:I.real_path}})),W.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${I.name}`)},N=I=>{let U=F(I);navigator.clipboard?.writeText(U),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:U,name:I.name}})),W.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${U}`)},D=(I,U)=>{switch(I){case"add-to-canvas":a?.(U),W.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${U.name}`);break;case"focus-in-canvas":_(U.id),W.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":k(U,"canvas");break;case"add-to-subjects":{let j=U.name.replace(/\.[^/.]+$/,"")||U.name;b.createSubject(j).then(Z=>{Z?W.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${Z.name}`):W.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528")});break}case"save-to-assets":{if(!U.real_path||U.real_path.startsWith("blob:")){W.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}x.indexPaths([U.real_path]).then(j=>{j?W.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${U.name}`):W.error("\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")});break}case"open-preview":U.previewUrl?(window.open(U.previewUrl,"_blank","noopener,noreferrer"),W.success("\u5DF2\u6253\u5F00\u9884\u89C8")):W.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":N(U);break;case"copy-path":navigator.clipboard?.writeText(F(U)),W.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${F(U)}`);break;case"copy-file":navigator.clipboard?.writeText(U.name),W.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${U.name}`);break;case"duplicate":W.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":f(j=>j==="tree"?"grid":"tree"),W.success(d==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":W.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":W.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:W.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},M=(I,U)=>{switch(I){case"add-to-canvas":a?.(U),W.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${U.name}`);break;case"add-to-agent":case"add-to-chat":k(U,"asset");break;case"reveal-in-finder":N(U);break;case"move-to":{let j=x.assets.filter($=>$.type==="folder"&&$.id!==U.id),Z=j.map($=>$.name).join(" / ")||"\u6839\u76EE\u5F55",te=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${Z}\uFF09\uFF1A`,j[0]?.name||"");if(te&&te.trim()){let $=j.find(G=>G.name===te.trim());x.moveNode(U.id,$?.id??null).then(G=>{G?W.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${te.trim()}`):W.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":x.deleteNode(U.id).then(j=>{j?W.success(`\u5DF2\u5220\u9664\uFF1A${U.name}`):W.error("\u5220\u9664\u5931\u8D25")});break;default:W.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},A=(I,U)=>{switch(I){case"reveal-in-finder":N(U);break;case"rename":{let j=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",U.name);j&&j.trim()&&x.renameFolder(U.id,j.trim()).then(Z=>{Z?W.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"):W.error("\u91CD\u547D\u540D\u5931\u8D25")});break}case"move-to":{let j=x.assets.filter($=>$.type==="folder"&&$.id!==U.id),Z=j.map($=>$.name).join(" / ")||"\u6839\u76EE\u5F55",te=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${Z}\uFF09\uFF1A`,j[0]?.name||"");if(te&&te.trim()){let $=j.find(G=>G.name===te.trim());x.moveNode(U.id,$?.id??null).then(G=>{G?W.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${te.trim()}`):W.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":x.deleteNode(U.id).then(j=>{j?W.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${U.name}`):W.error("\u5220\u9664\u5931\u8D25")});break;default:W.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},B=async()=>{let I=await bn(),U=pm(I);if(U.kind!=="ok"){c5(U);return}for(let j of U.paths){let Z=hz(j);a?.({id:j,name:Z,type:xz(Z),real_path:j})}W.success(`\u5DF2\u5BFC\u5165 ${String(U.paths.length)} \u4E2A\u6587\u4EF6\u5230\u753B\u5E03`)},P=async()=>{let U=(await gz.pickAssets("file")).interpretation;if(U.kind!=="ok"){c5(U);return}await x.indexPaths(U.paths)?W.success(`\u5DF2\u5BFC\u5165 ${String(U.paths.length)} \u4E2A\u6587\u4EF6`):W.error(x.error||"\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")},H=()=>{let I=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");!I||!I.trim()||x.mkdir(I.trim()).then(U=>{U?W.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${I.trim()}`):W.error(x.error||"\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25")})};return e?(0,ut.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:`${c}px`},onPointerDown:Te,onMouseDown:Te,onClick:I=>I.stopPropagation(),children:[(0,ut.jsx)("div",{className:`wf-drawer-resize-handle ${g?"resizing":""}`,onMouseDown:L}),(0,ut.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,ut.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,ut.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="canvas"&&s==="normal"?"active":""}`,onClick:()=>{l("canvas"),u("normal")},children:"\u753B\u5E03"}),(0,ut.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="assets"||s==="subject-library"?"active":""}`,onClick:()=>{l("assets")},children:"\u8D44\u4EA7"})]}),(0,ut.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,ut.jsx)(aa,{size:14})})]}),(0,ut.jsx)("div",{className:"wf-drawer-body",children:s==="subject-library"?(0,ut.jsx)(Q_,{subjects:b.subjects,error:b.error,onBack:()=>u("normal"),onSelectSubject:()=>{},onCreateSubject:()=>{let I=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");!I||!I.trim()||b.createSubject(I.trim()).then(U=>{U?W.success(`\u5DF2\u65B0\u5EFA\u4E3B\u4F53\uFF1A${U.name}`):W.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528\uFF0C\u672A\u80FD\u521B\u5EFA")})}}):i==="canvas"?(0,ut.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,ut.jsx)(K_,{nodes:y,onFocusNode:_,onContextMenu:R,onHoverItem:T,viewMode:d,onViewModeChange:f,onRefresh:()=>{W.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,ut.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,ut.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:()=>{B()},children:[(0,ut.jsx)(Gi,{size:13}),(0,ut.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,ut.jsx)($_,{assets:x.assets,onOpenSubjects:()=>u("subject-library"),onContextMenu:z,onHoverItem:T,onImportFiles:()=>{P()},onCreateFolder:H,onInsertToCanvas:I=>a?.(I),onRefresh:()=>{x.refresh().then(()=>W.success("\u5DF2\u5237\u65B0\u9879\u76EE\u8D44\u4EA7"))}})}),(0,ut.jsx)(t5,{isOpen:v.visible,x:v.x,y:v.y,item:v.item||null}),(0,ut.jsx)(j_,{isOpen:m.visible&&m.targetType==="canvas-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:D,onClose:()=>h(I=>({...I,visible:!1}))}),(0,ut.jsx)(Y_,{isOpen:m.visible&&m.targetType==="asset-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:M,onClose:()=>h(I=>({...I,visible:!1}))}),(0,ut.jsx)(W_,{isOpen:m.visible&&m.targetType==="asset-folder",x:m.x,y:m.y,item:m.targetItem||null,onAction:A,onClose:()=>h(I=>({...I,visible:!1}))})]}):null},f5=bz;var Xt=E(X(),1),wz=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],yz=({isOpen:e,onClose:t})=>e?(0,Xt.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:Te,onMouseDown:Te,onClick:t,children:(0,Xt.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,Xt.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,Xt.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,Xt.jsx)(Vu,{size:18}),(0,Xt.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,Xt.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,Xt.jsx)(aa,{size:16})})]}),(0,Xt.jsx)("div",{className:"wf-shortcuts-modal__body",children:wz.map(a=>(0,Xt.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,Xt.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,Xt.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,Xt.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,Xt.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,Xt.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,Xt.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,p5=yz;var No=E(Q(),1),h5=E(Bt(),1);var Yt=E(X(),1),m5=278,sl=12,vz=8,Ub=160,ll=18,Cz={AudioLines:(0,Yt.jsx)(ji,{size:ll}),ImageGen:(0,Yt.jsx)(Qn,{size:ll}),Mic:(0,Yt.jsx)(Wi,{size:ll}),PersonStanding:(0,Yt.jsx)(Ku,{size:ll}),TextGen:(0,Yt.jsx)(tr,{size:ll}),VideoGen:(0,Yt.jsx)(jo,{size:ll})},Sz={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function g5(e){return e?Sz[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function Lz(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-m5:e;return Math.min(Math.max(sl,o),Math.max(sl,a-m5-sl))}var kz=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:l="start"})=>{let s=(0,No.useRef)(null),[u,d]=(0,No.useState)({left:t,top:a,maxHeight:Ub});(0,No.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?Ub:window.innerHeight,p=Lz(t,l),g=a+vz,w=Math.max(sl,c-sl-Ub),y=Math.min(Math.max(sl,g),w);d({left:p,top:y,maxHeight:Math.max(0,c-y-sl)})},[l,e,t,a]),(0,No.useEffect)(()=>{if(!e)return;let c=g=>{s.current&&!s.current.contains(g.target)&&i()},p=g=>{g.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,No.useMemo)(()=>n.map(c=>(0,Yt.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,Yt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,Yt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:g5(c.icon).bg,color:g5(c.icon).color},children:Cz[c.icon]??(0,Yt.jsx)(gt,{size:ll})}):null,(0,Yt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,Yt.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,Yt.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,h5.createPortal)((0,Yt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,Yt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,Yt.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},Sm=(0,No.memo)(kz);var Eo=E(Q(),1),x5=E(Bt(),1);var Be=E(X(),1),_z=210,Iz=230,Mz=260,Nz=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:l=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,Eo.useRef)(null),[c,p]=(0,Eo.useState)("main"),g=fe();(0,Eo.useEffect)(()=>{a&&p("main")},[a]),(0,Eo.useEffect)(()=>{if(!a)return;let h=C=>{f.current&&!f.current.contains(C.target)&&n()},v=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",h),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",v)}},[a,n]);let w=(0,Eo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"import-asset",label:g("toolbar.add.import_asset"),icon:(0,Be.jsx)(Oa,{size:15})},{action:"open-add-node",label:g("menu.addNode"),icon:(0,Be.jsx)(Ze,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!l},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,l,s,u,d,g]),y=(0,Eo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Be.jsx)(tr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Be.jsx)(ba,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Be.jsx)(jo,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Be.jsx)(ji,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,Be.jsx)(ro,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,Be.jsx)(Vt,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let x=c==="add-node"?Iz:_z,b=Math.min(e,window.innerWidth-x-8),m=Math.min(t,window.innerHeight-Mz-8);return(0,x5.createPortal)((0,Be.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:b,top:m},onContextMenu:h=>h.preventDefault(),children:c==="main"?w.map(h=>(0,Be.jsxs)(Eo.default.Fragment,{children:[o.type==="pane"&&h.action==="undo"?(0,Be.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&h.action==="paste"?(0,Be.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Be.jsxs)("button",{type:"button",className:`wf-context-menu__item${h.disabled?" wf-context-menu__item--disabled":""}`,disabled:h.disabled,onClick:v=>{v.stopPropagation(),h.action==="open-add-node"?p("add-node"):r(h.action,o)},children:[h.icon?(0,Be.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:h.icon}):null,(0,Be.jsx)("span",{className:"wf-context-menu__label",children:h.label}),h.action==="open-add-node"?(0,Be.jsx)(Kn,{size:14,className:"wf-add-node-menu__arrow"}):h.shortcut?(0,Be.jsx)("span",{className:"wf-context-menu__shortcut",children:h.shortcut}):null]})]},h.action)):(0,Be.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Be.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Be.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:h=>{h.stopPropagation(),p("main")},title:g("menu.back"),children:(0,Be.jsx)(Mu,{size:16})}),(0,Be.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Be.jsx)("div",{className:"wf-add-node-menu__list",children:y.map(h=>(0,Be.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:v=>{v.stopPropagation(),i?.(h.type),n()},children:[(0,Be.jsx)("div",{className:"wf-add-node-menu__icon-box",children:h.icon}),(0,Be.jsx)("span",{className:"wf-add-node-menu__label",children:h.label}),h.badge?(0,Be.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${h.badge.variant}`,children:h.badge.text}):null,h.hasSubmenu?(0,Be.jsx)(Kn,{size:14,className:"wf-add-node-menu__arrow"}):null]},h.key))})]})}),document.body)},b5=Nz;var w5=E(Q(),1),y5=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:l,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:w,onCategoryKey:y,isAssetsOpen:x=!1,enabled:b=!0})=>{(0,w5.useEffect)(()=>{if(!b)return;let m=h=>{let v=h.target;if(["INPUT","TEXTAREA"].includes(v.tagName)||v.isContentEditable)return;let C=h.metaKey||h.ctrlKey,S=h.key.toLowerCase();if(!C&&x&&/^[1-6]$/.test(h.key)){h.preventDefault(),y?.(parseInt(h.key,10));return}if(!C&&S==="a"){h.preventDefault(),u?.();return}if(!C&&S==="v"){h.preventDefault(),p?.("select");return}if(!C&&S==="h"){h.preventDefault(),p?.("pan");return}if(!C&&S==="n"){h.preventDefault(),c?.();return}if(!C&&S==="m"){h.preventDefault(),f?.();return}if(h.key==="?"||h.shiftKey&&h.key==="/"){h.preventDefault(),d?.();return}if(C&&h.key==="1"){h.preventDefault(),g?.();return}if(C&&h.key==="0"){h.preventDefault(),w?.();return}if((h.key==="Delete"||h.key==="Backspace")&&i&&!C){h.preventDefault(),o?.();return}if(h.key==="Escape"){h.preventDefault(),x?u?.():i&&n?.();return}if(C&&S==="d"&&i){h.preventDefault(),r?.();return}if(C&&S==="c"&&!h.shiftKey){h.preventDefault(),e?.();return}if(C&&S==="v"){h.preventDefault(),t?.();return}if(C&&S==="a"){h.preventDefault(),a?.();return}if(C&&S==="z"&&!h.shiftKey){h.preventDefault(),l?.();return}C&&S==="z"&&h.shiftKey&&(h.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[b,e,t,a,o,n,r,i,l,s,u,d,f,c,p,g,w,y,x])};var Ko=E(Q(),1);function Lm(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function v5(e,t,a){return qb(e,t,a).valid}function qb(e,t,a){let o=nm(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var Vb={minZoom:.23,maxZoom:1.29,defaultZoom:1},Ez={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},C5={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},Tz={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},Az={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},S5={portrait:Ez,square:C5,video_landscape:Tz,audio_compact:Az};function Gb(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function L5(e){return S5[Gb(e)]}function k5(e,t){let a=S5[t]||C5;return Math.round(e/a.aspectRatio)}function wn(e){return L5(e).default.width}function zs(e){return L5(e).default.height}function km(e,t,a){let o=nc(e,{nodeKind:"generate",status:"empty",nodeWidth:wn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function jb(e="image",t={x:0,y:0},a){let o=nc(e,{nodeKind:"import",selectedTool:"import",status:"empty",nodeWidth:wn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function oi(e,t,a){return{nodes:[km(e,t,a)],edges:[]}}function Xb(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function Dz(e,t){return`${e}-${t}`}function _m(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function Im(e){return Xk(e).map(t=>{let a=String(t.targetTool);return{key:Dz(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function _5(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var Rz={visible:!1,x:0,y:0,options:[]};function I5(e){let t=fe(),{screenToFlowPosition:a}=ao(),o=le(p=>p.applyCanvasInputMutation),n=(0,Ko.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,Ko.useState)(Rz),l=(0,Ko.useRef)(null),s=(0,Ko.useRef)(null),u=(0,Ko.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){l.current=null;return}let w=le.getState().nodes.find(x=>x.id===g.nodeId),y=w?.data?.materialType;if(!w||!y){l.current=null;return}l.current={nodeId:g.nodeId,materialType:y}},[]),d=(0,Ko.useCallback)((p,g)=>{let w=g.fromNode?.id??null,y=g.toNode?.id??null,x=l.current,b=x?Im(x.materialType):[],m=null;if(!g.isValid&&w&&y){let v=le.getState(),C=qb({source:w,target:y,sourceHandle:null,targetHandle:null},v.nodes,v.edges);m=C.valid?null:t(Lm(C.reasonCode))}let h=_5({isValid:g.isValid??null,fromNodeId:w,toNodeId:y,startedFromSource:!!x,hasOptions:b.length>0,rejectReason:m});if(h.type==="reject"){n.current?.(h.reason),W.warning(h.reason),l.current=null;return}if(h.type==="menu"&&x){let v="changedTouches"in p?p.changedTouches[0]:p;if(!v){l.current=null;return}let{clientX:C,clientY:S}=v;s.current=a({x:C,y:S}),i({visible:!0,x:C,y:S,options:b.map(L=>({key:L.key,label:t(L.labelKey),description:t(L.descKey),icon:L.icon}))});return}l.current=null},[a,t]),f=(0,Ko.useCallback)(p=>{let g=l.current,w=s.current,y=_m(p);if(g&&w&&y){let x=oi(y.targetMaterialType,w),b=x.nodes[0];b&&o({addNodes:x.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:b.id,targetHandle:"in"}]})}i(x=>({...x,visible:!1})),l.current=null,s.current=null},[o]),c=(0,Ko.useCallback)(()=>{i(p=>({...p,visible:!1})),l.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var yn=E(Q(),1);var oa=[];for(let e=0;e<256;++e)oa.push((e+256).toString(16).slice(1));function M5(e,t=0){return(oa[e[t+0]]+oa[e[t+1]]+oa[e[t+2]]+oa[e[t+3]]+"-"+oa[e[t+4]]+oa[e[t+5]]+"-"+oa[e[t+6]]+oa[e[t+7]]+"-"+oa[e[t+8]]+oa[e[t+9]]+"-"+oa[e[t+10]]+oa[e[t+11]]+oa[e[t+12]]+oa[e[t+13]]+oa[e[t+14]]+oa[e[t+15]]).toLowerCase()}var Yb,Pz=new Uint8Array(16);function Zb(){if(!Yb){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Yb=crypto.getRandomValues.bind(crypto)}return Yb(Pz)}var zz=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wb={randomUUID:zz};function Oz(e,t,a){e=e||{};let o=e.random??e.rng?.()??Zb();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return M5(o)}function Bz(e,t,a){return Wb.randomUUID&&!t&&!e?Wb.randomUUID():Oz(e,t,a)}var Mm=Bz;function N5(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function Hz(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function E5(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=Hz(o),i,l;if(t)i=t.x,l=t.y;else{let f=a?50:30;i=r.x+f,l=r.y+f}let s=new Map,u=o.map(f=>{let c=Mm();return s.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:l+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:Mm(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:l}}}function T5(e,t){let a=(0,yn.useRef)({nodes:[],edges:[]}),o=(0,yn.useRef)(null),n=a.current.nodes.length>0,r=(0,yn.useCallback)(()=>{let f=le.getState(),c=N5(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,yn.useCallback)(f=>{let c=E5(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=le.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),l=(0,yn.useCallback)(()=>{r(),i()},[r,i]),s=(0,yn.useCallback)(()=>{let f=le.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,yn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,yn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:l,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var vn=E(Q(),1);function A5(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:l,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,vn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,vn.useCallback)((C,S)=>{C.preventDefault();let L={type:"pane"};S?L={type:"node",nodeId:S.id}:le.getState().nodes.filter(T=>T.selected).length>1&&(L={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:L})},[]),y=(0,vn.useCallback)((C,S)=>{w(C,S)},[w]),x=(0,vn.useCallback)(C=>{w(C)},[w]),b=(0,vn.useCallback)(C=>{w(C)},[w]),m=(0,vn.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),h=(0,vn.useCallback)((C,S)=>{let L=t({x:p.x,y:p.y});switch(C){case"import-asset":c?.("import_asset",L);break;case"copy":{if(S.type==="node"){let T=le.getState().nodes.find(R=>R.id===S.nodeId);T&&!T.selected&&(s(),a(R=>R.map(z=>z.id===S.nodeId?{...z,selected:!0}:z)))}o();break}case"paste":n(L);break;case"duplicate":r();break;case"delete":{if(S.type==="node"){let _=le.getState();_.nodes.find(R=>R.id===S.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[S.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":l();break;case"execute-selection":{let _=le.getState().nodes.filter(T=>T.selected).map(T=>T.id);_.length>0&&f?.(_);break}case"execute-node":{S.type==="node"&&f?.([S.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,i,u,d,l,m,f,c]),v=(0,vn.useCallback)(C=>{let S=t({x:p.x,y:p.y});c?.(C,S),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:y,handlePaneContextMenu:x,handleSelectionContextMenu:b,closeMenu:m,handleMenuAction:h,handleAddNodeFromMenu:v}}function Fz(e,t){if(!t||!Array.isArray(e))return{focused:!1};let a=e.find(o=>o.id===t);return a?{focused:!0,nodeId:a.id,x:a.position.x+100,y:a.position.y+100,zoom:1,duration:800}:{focused:!1}}function D5(e){let t=Fz(e.nodes,e.nodeId);return t.focused?(e.setCenter(t.x,t.y,{zoom:t.zoom,duration:t.duration}),e.setNodes(a=>a.map(o=>({...o,selected:o.id===e.nodeId}))),!0):!1}function mc(e){let t=e.path;return typeof t=="string"?t:""}function Uz(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function Os(e,t={}){if(!e)return null;let a=t.name||Uz(e),o=t.mime||fc(a)||fc(e)||"",n=o5(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:Wo(e)}:null}function ni(e){let t=[];for(let a of e){let o=Os(a);o&&t.push(o)}return t}var Nm=["image","video","audio"],qz=80,Vz=40,Kb=40;function z5(e){return!!e&&typeof e=="object"}function O5(e){return z5(e.data)?e.data:{}}function B5(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function H5(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function Gz(e){let t=e.dimensions;if(z5(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function jz(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function Xz(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function F5(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function Yz(e,t){if(!Nm.includes(e))return!1;if(Yo(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function U5(e,t,a){let o=F5(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=O5(r),l=B5(i.materialType);if(!l||!Yz(l,i))continue;let s=jz(i,r.id),u=Gz(i);n.push({nodeId:r.id,materialType:l,title:s,previewUrl:Yo(l,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:Xz(i,s,r.id,u),width:u.width,height:u.height})}return n}function q5(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function R5(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function P5(e,t){return om(e,t)}function Em(e){return Cm({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function Zz(e,t,a){let o=wn(a),n=zs(a);return{x:e.position.x-o-qz,y:e.position.y+t*(n+Vz)}}function Wz(e){return B5(O5(e).materialType)}function V5(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=F5(e.edges,e.targetNodeId),l=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||l.has(w)){t.push({id:w,reason:"already_connected"});continue}let y=e.nodes.find(x=>x.id===w);if(!y){t.push({id:w,reason:"missing"});continue}if(!P5(y,r)){t.push({id:w,reason:"type_contract"});continue}a.push(R5(w,e.targetNodeId)),l.add(w)}let s=e.localFiles.filter(w=>!w.realPath||!Nm.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=Wz(r),d=s[0],f=!!u&&Nm.includes(u)&&!!d&&d.materialType===u,c=0,p=f?s.slice(1):s;f&&d&&n.push({nodeId:e.targetNodeId,data:Em(d)});for(let w of p){let y=Zz(r,c,w.materialType),x=km(w.materialType,y,{...Em(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!P5(x,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(x),a.push(R5(x.id,e.targetNodeId)),l.add(x.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}function G5(e,t){return e.filter(a=>!a.realPath||!Nm.includes(a.materialType)?(t.push({id:a.id,reason:"unsupported"}),!1):!0)}function j5(e,t,a=!1){let o=jb(e.materialType,t,{...Em(e),label:e.name.replace(/\.[^.]+$/,"")||e.name});return a?{...o,selected:!0}:o}function X5(e){let t=[],a=G5(e.files,t),o=[],n=e.origin.y;return a.forEach((r,i)=>{let l=zs(r.materialType);o.push(j5(r,{x:e.origin.x,y:n},i===a.length-1)),n+=l+Kb}),{hasWork:o.length>0,rejected:t,addNodes:o.length>0?o:void 0}}function gc(e){let t=[],a=e.nodes.find(s=>s.id===e.targetNodeId);if(!a)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let o=G5(e.files,t),n=o[0];if(!n)return{hasWork:!1,rejected:t};let r=[{nodeId:e.targetNodeId,data:{...Em(n),materialType:n.materialType,nodeKind:"import",selectedTool:"import",nodeWidth:wn(n.materialType),nodeHeight:zs(n.materialType),label:n.name.replace(/\.[^.]+$/,"")||n.name}}],i=[],l=a.position.y+zs(n.materialType)+Kb;return o.slice(1).forEach((s,u,d)=>{let f=zs(s.materialType);i.push(j5(s,{x:a.position.x,y:l},u===d.length-1)),l+=f+Kb}),{hasWork:!0,rejected:t,nodePatches:r,addNodes:i.length>0?i:void 0}}var Kz=E(Q(),1),$b=new Map;function Tm(e){$b.set(e.type,e)}function Y5(){let e={};for(let[t,a]of $b)e[t]=a.component;return e}function Z5(e,t,a){let o=$b.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var lt=E(Q(),1);var $e=E(Q(),1);function W5(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var $o=E(X(),1),$z=4,Qz=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=fe(),[i,l]=(0,$e.useState)(!1),[s,u]=(0,$e.useState)(!1),[d,f]=(0,$e.useState)(null),c=(0,$e.useRef)(null),p=(0,$e.useRef)(null),g=(0,$e.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",y=a==="plus"&&!!o&&o.length>0,x=Sb(M=>M.inProgress),{screenToFlowPosition:b}=ao(),m=(0,$e.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,$e.useEffect)(()=>{if(a!=="plus"){m();return}let M=c.current,A=p.current;if(!M||!A)return;let B=P=>{if(s)return;let H=M.getBoundingClientRect(),I=H.left+H.width/2,U=H.top+H.height/2,{x:j,y:Z}=W5(e,P.clientX-I,P.clientY-U);A.style.setProperty("--wf-handle-offset-x",`${j}px`),A.style.setProperty("--wf-handle-offset-y",`${Z}px`)};return M.addEventListener("pointermove",B),()=>{M.removeEventListener("pointermove",B)}},[s,m,e,a]),(0,$e.useEffect)(()=>{if(!s){m(),f(null);return}let M=()=>{let A=c.current;if(!A)return;let B=A.getBoundingClientRect();f({x:w?B.right:B.left,y:B.bottom})};return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[s,w,m]);let h=(0,$e.useCallback)(()=>{l(!0)},[]),v=(0,$e.useCallback)(()=>{l(!1),m()},[m]),C=(0,$e.useCallback)(M=>{let A=c.current;!A||M===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(M)||A.releasePointerCapture(M)},[]),S=(0,$e.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),L=(0,$e.useCallback)(M=>{M.button===0&&(typeof M.currentTarget.setPointerCapture=="function"&&M.currentTarget.setPointerCapture(M.pointerId),g.current.pointerId=M.pointerId,g.current.startX=M.clientX,g.current.startY=M.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),_=(0,$e.useCallback)(M=>{if(g.current.pointerId!==M.pointerId)return;Math.hypot(M.clientX-g.current.startX,M.clientY-g.current.startY)>=$z&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),T=(0,$e.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),S())},[S]),R=(0,$e.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.suppressClick=!1,S())},[S]),z=(0,$e.useCallback)(M=>{if(M.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}y&&u(A=>!A)},[y]),F=(0,$e.useCallback)(()=>{let M=d;if(!M){let A=c.current;if(!A)return;let B=A.getBoundingClientRect();M={x:w?B.right:B.left,y:B.bottom}}return{screenPosition:M,flowPosition:b(M)}},[w,d,b]),k=(0,$e.useCallback)(M=>{n?.(M,F()),u(!1)},[n,F]),N=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",x?"wf-handle--connection-active":""].filter(Boolean).join(" "),D={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,$o.jsxs)(_s,{id:w?"in":"out",type:w?"target":"source",position:w?ne.Left:ne.Right,isConnectable:!0,className:N,style:D,children:[(0,$o.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,$o.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,$o.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,$o.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:h,onPointerLeave:v,onPointerDown:L,onPointerMove:_,onPointerUp:T,onPointerCancel:R,onClick:z,children:(0,$o.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,$o.jsx)("div",{className:"wf-handle__plus-button",children:(0,$o.jsx)(Ze,{size:24,strokeWidth:2.5})})})}):null,y&&d?(0,$o.jsx)(Sm,{visible:s,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:k,onClose:()=>u(!1)}):null]})},nr=(0,$e.memo)(Qz);var Qo=E(Q(),1);var Bs=E(X(),1),K5=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,Bs.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,Bs.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,Bs.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,Bs.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var na=E(X(),1);function Jz(e){let t=fe();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var e9=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:l=400})=>{let s=fe(),u=(0,Qo.useRef)(e),[d,f]=(0,Qo.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,Qo.useState)(1),[g,w]=(0,Qo.useState)(e==="completed"?1:0),[y,x]=(0,Qo.useState)(e==="pending"||e==="generating");(0,Qo.useEffect)(()=>{let z=u.current;if(u.current=e,(z==="pending"||z==="generating")&&e==="completed"){f("crossfading"),x(!0),requestAnimationFrame(()=>{p(0),w(1)});let F=setTimeout(()=>{f("complete"),x(!1)},l+50);return()=>clearTimeout(F)}z==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),x(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(x(!0),p(1),w(0),f("idle")),e==="failed"&&(x(!1),f("idle")),z===e&&e==="completed"&&(f("complete"),w(1),x(!1))},[e,l]);let b=e==="pending"||e==="generating",m=e==="failed",h=e==="completed",v=s(e==="pending"?"node.preparing":"node.generating"),C=Jz(a),S=(0,Qo.useCallback)(()=>({transition:`opacity ${l}ms ease-out`}),[l]),L=`wf-gsc__box--${t}`,_=()=>(0,na.jsx)("div",{className:"wf-gsc__skeleton",style:{...S(),opacity:c},children:(0,na.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${L}`,children:(0,na.jsx)(K5,{borderRadius:"inherit",children:(0,na.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,na.jsx)("span",{className:"wf-gsc__progress-text",children:v})})})})}),T=()=>(0,na.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${L} ${i}`,children:[(0,na.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,na.jsx)(aa,{size:24})}),(0,na.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),C?(0,na.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,na.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,na.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,na.jsx)(er,{size:14}),s("node.regenerate")]}):null]}),R=z=>(0,na.jsx)("div",{className:`${i} ${z?"wf-gsc__content--blur":""}`,style:{...S(),opacity:g},children:r});return(0,na.jsxs)("div",{className:`wf-gsc ${b?L:""} ${i}`,children:[(b||y)&&_(),m&&T(),(h||d==="crossfading")&&R(d==="crossfading")]})},hc=e9;var Mt=E(Q(),1);function To(e){return e>0?1/e:1}function $5(e,t,a){return!!e&&!t&&a!=="running"}function Q5(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var ri=E(X(),1),J5=24,eI=30,tI={text:la,image:Qn,video:jo,audio:sa,table:ro,video_composition:Vt,import_asset:Oa},t9=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=fe(),i=t?r(`node.type.${t}`):"\u8282\u70B9",l=e||i,{zoom:s}=Mo(),[u,d]=(0,Mt.useState)(!1),[f,c]=(0,Mt.useState)(l),p=(0,Mt.useRef)(null),g=(0,Mt.useMemo)(()=>To(s),[s]);(0,Mt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,Mt.useEffect)(()=>{u||c(l)},[l,u]);let w=(0,Mt.useCallback)(C=>{C.stopPropagation(),d(!0),c(l)},[l]),y=(0,Mt.useCallback)(()=>{let S=f.trim()||i;d(!1),S!==e&&o&&o(S)},[f,i,e,o]),x=(0,Mt.useCallback)(()=>{d(!1),c(l)},[l]),b=(0,Mt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),y()):C.key==="Escape"&&(C.preventDefault(),x())},[y,x]),m=(0,Mt.useCallback)(C=>{let S=C.target.value;S.length<=eI&&c(S)},[]),h=()=>{if(a)return Mt.default.isValidElement(a)?a:(0,ri.jsx)(a,{size:14});let C=(t in tI?tI[t]:null)||la;return(0,ri.jsx)(C,{size:14})};return(0,ri.jsxs)("div",{className:"wf-node-header",style:{top:-(J5+4*g),height:J5,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,ri.jsx)("span",{className:"wf-node-header__icon",children:h()}),u?(0,ri.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:y,onKeyDown:b,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:eI}):(0,ri.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:l.length>20?l:r("node.renameHint"),children:l}),n]})},Hs=(0,Mt.memo)(t9);var Am=E(Q(),1);var Cn=E(X(),1),a9=({executionStatus:e,status:t})=>{let a=fe();return(0,Am.useMemo)(()=>{switch(e){case"running":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,Cn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},Dm=(0,Am.memo)(a9);var dl=E(Q(),1);var xc=E(X(),1);var o9=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let l=(0,dl.useMemo)(()=>Yo(e,t,a),[e,t,a]),s=(0,dl.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,dl.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!l)return null;switch(e){case"image":return(0,xc.jsx)("img",{src:l,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:s});case"video":return(0,xc.jsx)("video",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,xc.jsx)("div",{className:"wf-media-preview__audio",children:(0,xc.jsx)("audio",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},aI=(0,dl.memo)(o9);var oI=E(Q(),1);var Ae=E(X(),1),n9=({materialType:e,nodeKind:t="generate",onApplyPreset:a,onStartEdit:o})=>{let n=fe();return t==="import"?(0,Ae.jsxs)("div",{className:"wf-node-empty wf-node-empty--import-kind",children:[(0,Ae.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ae.jsx)(Oa,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})}),(0,Ae.jsx)("div",{className:"wf-node-empty__try-label",children:n("panel.dropToImport")})]}):e==="text"?(0,Ae.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ae.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ae.jsx)(la,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ae.jsx)("div",{className:"wf-node-empty__try-label",children:n("pills.tryLabel")}),(0,Ae.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:r=>r.stopPropagation(),children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:o,children:[(0,Ae.jsx)(mn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ae.jsx)("span",{children:n("pills.writePrompt")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("script"),children:[(0,Ae.jsx)(Eu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ae.jsx)("span",{children:n("pills.scriptGen")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("planning"),children:[(0,Ae.jsx)(fn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ae.jsx)("span",{children:n("pills.planningGen")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("prompt"),children:[(0,Ae.jsx)(gt,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ae.jsx)("span",{children:n("pills.promptExpand")})]})]})]}):e==="image"?(0,Ae.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ae.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ae.jsx)(ba,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ae.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ae.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ae.jsx)(no,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ae.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ae.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ae.jsx)(sa,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},Rm=(0,oI.memo)(n9);var ii=E(Q(),1);var Zt=E(X(),1),r9=({materialType:e,nodeKind:t="generate",selected:a,onOpenResourcePicker:o,onStartTextEdit:n,onCopyText:r,onSplitText:i})=>{let l=fe(),{zoom:s}=Mo(),[u,d]=ii.default.useState(!1),f=(0,ii.useMemo)(()=>To(s),[s]),c=(0,ii.useCallback)(()=>{r&&(r(),d(!0),setTimeout(()=>d(!1),1500))},[r]),p=30;return t==="generate"&&e!=="text"?null:(0,Zt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(p*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,Zt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Zt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:n,title:l("pill.textEdit"),children:[(0,Zt.jsx)(fn,{size:13,className:"wf-floating-top-pill__icon"}),(0,Zt.jsx)("span",{children:l("pill.textEdit")})]}),(0,Zt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Zt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:c,title:l("pill.copy"),children:u?(0,Zt.jsx)(_t,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Zt.jsx)(Wr,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Zt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Zt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:i,title:l("pill.structureSplit"),children:(0,Zt.jsx)(ta,{size:13,className:"wf-floating-top-pill__icon"})})]}):t==="import"?(0,Zt.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Zt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,children:[(0,Zt.jsx)(tl,{size:13,className:"wf-floating-top-pill__icon"}),(0,Zt.jsx)("span",{children:l("pill.import")})]})}):null})},nI=(0,ii.memo)(r9);var Fs=E(Q(),1);var rI=E(Q(),1),iI=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function i9(e,t,a=iI){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function lI({refs:e,excludeSelectors:t=iI,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,rI.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;i9(f,r.map(c=>c.current),t)&&a()},l=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",l)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",l)}},[e,t,a,o,n])}var Qb=E(X(),1),l9=480,s9=({children:e,onClose:t,width:a=l9})=>{let{zoom:o}=Mo(),n=(0,Fs.useRef)(null),r=(0,Fs.useMemo)(()=>To(o),[o]);return lI({refs:n,onClose:t}),(0,Qb.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,Qb.jsx)("div",{className:"wf-panel-shell__card",children:e})})},sI=(0,Fs.memo)(s9);var uo=E(Q(),1);var dI=E(Q(),1),Us=E(X(),1),Jb={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},d9=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function u9(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Jb[t])return t;for(let a of d9)if(a.regex.test(t))return a.brand;return null}var uI=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,dI.useMemo)(()=>t&&Jb[t.toLowerCase()]?t.toLowerCase():u9(e),[t,e]),l=i?Jb[i]:null;if(!l){if(r)return(0,Us.jsx)(Us.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,Us.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,Us.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:l.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var cI=E(Q(),1);function fI(e){let t=mk(),a=gk();return(0,cI.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},l=Yo(i.materialType,i.mediaAssets,i.mediaUrl),s=i.content||i.generatedContent||"",u=!!(l||i.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:l,hasMedia:u,textContent:s}]}),[t,a,e])}var pI=E(Q(),1),mI="wf_capabilities_catalog_v1",c9={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function bc(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(mI);return e?JSON.parse(e):null}catch{return null}}function gI(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(mI,JSON.stringify(e))}catch{}}function hI(e,t,a){return(0,pI.useMemo)(()=>{let n=(a??bc())?.[e]??[],r=n.find(L=>L.id===t)??n[0],i=c9[e]??{},l=r?.parameters??i,s=l.aspectRatio?.options&&l.aspectRatio.options.length>0?l.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=l.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=L=>L?s.some(_=>_.value===L):!1,f=l.duration?.options&&l.duration.options.length>0?l.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=l.duration?.defaultValue??f[0]?.value??5,p=L=>typeof L!="number"?!1:f.some(_=>_.value===L),g=l.resolution?.options??[],w=l.resolution?.defaultValue??g[0]?.value??"",y=l.quality?.options??[],x=l.quality?.defaultValue??y[0]?.value??"",b=!!l.sound?.supported,m=!!l.sound?.defaultValue,h=l.voice?.options??[],v=l.voice?.defaultValue??h[0]?.value??"",C=!!l.instrumental?.supported,S=!!l.instrumental?.defaultValue;return{schema:l,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:w,qualityOptions:y,defaultQuality:x,hasSoundSupport:b,defaultSound:m,voiceOptions:h,defaultVoice:v,hasInstrumentalSupport:C,defaultInstrumental:S}},[e,t,a])}var xI=E(Q(),1);var rr=E(X(),1),f9=({onClick:e,disabled:t,isGenerating:a})=>{let o=fe();return(0,rr.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,rr.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,rr.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,rr.jsx)(Qr,{size:14,className:"wf-generate-btn__spin"}):(0,rr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,rr.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,rr.jsx)("path",{d:"M12 19V5"})]})})]})},bI=(0,xI.memo)(f9);var J=E(X(),1);function p9(e){let t=(0,J.jsx)(uI,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var m9=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let l=fe(),{materialType:s,selectedTool:u,params:d,prompt:f}=t,c=rc(t),[p,g]=(0,uo.useState)(!1),[w,y]=(0,uo.useState)(!1),x=fI(e);if(c==="import")return(0,J.jsx)("div",{className:"wf-config-panel wf-config-panel--import",children:(0,J.jsxs)("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,J.jsx)("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--wb-text-secondary)"},children:l("panel.hintImportNode")}),!!t.realPath&&(0,J.jsx)("span",{style:{fontSize:"11px",color:"var(--wb-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"240px"},title:String(t.realPath),children:String(t.realPath).split("/").pop()})]}),i&&(0,J.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",style:{padding:"4px 10px",height:"28px"},onClick:i,children:(0,J.jsx)("span",{children:l("node.replace")})})]})});let b=u==="text-to-music"?"music":"speech",m=(0,uo.useCallback)(I=>{o({selectedTool:I==="music"?"text-to-music":"text-to-audio"})},[o]),h=(0,uo.useMemo)(()=>{let I=a?.[s]??[];return I.length===0&&(s==="text"?I=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?I=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?I=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(I=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),I.map(U=>{let j=p9(U.id),Z=j.icon,te=U.badge??j.badge,$=U.subtitle??j.subtitle;return{value:U.id,label:U.label,triggerLabel:(0,J.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[Z?(0,J.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:Z}):null,(0,J.jsx)("span",{children:U.label})]}),icon:Z,badge:te,subtitle:$}})},[a,s]),v=typeof d.model=="string"?d.model:h[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:S,isAspectRatioValid:L,durationOptions:_,defaultDuration:T,isDurationValid:R,resolutionOptions:z,defaultResolution:F}=hI(s,v,a),k=(0,uo.useCallback)((I,U)=>{o({params:{...d,[I]:U}})},[o,d]),N=(0,uo.useCallback)(I=>{let te=((a??bc())?.[s]??[]).find(G=>G.id===I)?.parameters,$={...d,model:I};d.aspectRatio&&te?.aspectRatio?.options&&(te.aspectRatio.options.some(K=>K.value===d.aspectRatio)||($.aspectRatio=te.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&te?.duration?.options&&(te.duration.options.some(K=>K.value===d.duration)||($.duration=te.duration.defaultValue||te.duration.options[0]?.value||5)),d.resolution&&te?.resolution?.options?te.resolution.options.some(K=>K.value===d.resolution)||($.resolution=te.resolution.defaultValue||te.resolution.options[0]?.value):d.resolution&&te&&!te.resolution?.options&&delete $.resolution,o({params:$})},[a,s,o,d]),D=(0,uo.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),M=(0,uo.useMemo)(()=>{switch(s){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(b==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[s,b,l]),A=typeof d.aspectRatio=="string"&&L(d.aspectRatio)?d.aspectRatio:S,B=typeof d.duration=="number"&&R(d.duration)?d.duration:T,P=I=>!!I&&z.some(U=>U.value===I),H=typeof d.resolution=="string"&&P(d.resolution)?d.resolution:F;return(0,J.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,J.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,J.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,J.jsx)(Wi,{size:13}),(0,J.jsx)("span",{children:l("panel.audioGen")})]}),(0,J.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,J.jsx)(sa,{size:13}),(0,J.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,J.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,J.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[x.length>0||i?(0,J.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[x.map(I=>(0,J.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${I.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${I.label} (${I.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[I.url&&I.materialType==="image"?(0,J.jsx)("img",{src:I.url,alt:I.label,className:"wf-config-panel__ref-thumb-media"}):I.url&&I.materialType==="video"?(0,J.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,J.jsx)("video",{src:I.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,J.jsx)(no,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):I.materialType==="audio"?(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,J.jsx)(sa,{size:13})}):I.materialType==="text"?(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,J.jsx)(la,{size:13})}):(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,J.jsx)(ba,{size:13})}),I.hasMedia&&(0,J.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},I.nodeId)),i?(0,J.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:l("picker.addRef"),children:(0,J.jsx)(Ze,{size:14})}):null]}):(0,J.jsx)("span",{}),(0,J.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>g(!0),title:l("header.fitView"),children:(0,J.jsx)(pn,{size:13})})]}),(0,J.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:M,rows:3,onChange:I=>o({prompt:I.target.value})}),(0,J.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",D]})]}),(0,J.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,J.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,J.jsx)(Ha,{className:"wf-param-bar__select wf-param-bar__select--model",value:v,options:h,popupMatchSelectWidth:!1,onChange:I=>N(I)}),s==="image"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,J.jsx)(Ha,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:C,popupMatchSelectWidth:!1,onChange:I=>k("aspectRatio",I)})})]}),s==="video"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,J.jsx)(Ha,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:C,popupMatchSelectWidth:!1,onChange:I=>k("aspectRatio",I)}),(0,J.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,J.jsx)(Ha,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:B,options:_,popupMatchSelectWidth:!1,onChange:I=>k("duration",I)}),z.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,J.jsx)(Ha,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:H,options:z,popupMatchSelectWidth:!1,onChange:I=>k("resolution",I)})]})]})]}),s==="audio"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!w),title:l("panel.advanced"),children:(0,J.jsx)(Qi,{size:13})})]})]}),(0,J.jsx)("div",{className:"wf-config-panel__action-group",children:(0,J.jsx)(bI,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),w&&(0,J.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,J.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,J.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,J.jsx)(Ib,{style:{flex:1},min:1,max:s==="video"?20:60,value:B,onChange:I=>k("duration",I)})]})}),(0,J.jsx)(al,{title:l("panel.promptPlaceholder"),open:p,onCancel:()=>g(!1),width:680,children:(0,J.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:M,rows:10,onChange:I=>o({prompt:I.target.value})})})]})},wI=(0,uo.memo)(m9);var Fa=E(Q(),1);var ul=E(Q(),1);var ye=E(X(),1);function Pm(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var g9=({items:e,selectedIds:t,onToggle:a})=>{let o=fe(),[n,r]=(0,ul.useState)(""),[i,l]=(0,ul.useState)("all"),[s,u]=(0,ul.useState)("grid"),d=(0,ul.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,ul.useMemo)(()=>q5(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,ye.jsxs)("div",{className:"wf-picker-pane",children:[(0,ye.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,ye.jsxs)("label",{className:"wf-picker-search",children:[(0,ye.jsx)(Go,{size:14,className:"wf-picker-search__icon"}),(0,ye.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,ye.jsx)(Ha,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>l(p)}),(0,ye.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,ye.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,ye.jsx)(Vo,{size:14})}),(0,ye.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,ye.jsx)(Jn,{size:14})})]})]}),f.length===0?(0,ye.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,ye.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,ye.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,ye.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,ye.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,ye.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,ye.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(Pm(p.materialType))}),p.alreadyConnected?(0,ye.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,ye.jsx)(_t,{size:11}),o("picker.added")]}):(0,ye.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,ye.jsx)(_t,{size:11}):null})]}),(0,ye.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,ye.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,ye.jsx)("span",{className:"wf-picker-type-tag",children:o(Pm(p.materialType))})]})]},p.nodeId)})}):(0,ye.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,ye.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,ye.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,ye.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,ye.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,ye.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(Pm(p.materialType))})}),(0,ye.jsxs)("div",{className:"wf-picker-row__body",children:[(0,ye.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,ye.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(Pm(p.materialType))]})]}),p.alreadyConnected?(0,ye.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,ye.jsx)(_t,{size:11}),o("picker.added")]}):(0,ye.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,ye.jsx)(_t,{size:11}):null})]},p.nodeId)})})]})},yI=g9;var cl=E(Q(),1);var Nt=E(X(),1),h9=({files:e,onAddFiles:t,onRemove:a})=>{let o=fe(),[n,r]=(0,cl.useState)(!1),i=(0,cl.useCallback)(d=>{let f=ni(d);f.length>0&&t(f),f.length<d.length&&W.warning(o("picker.unsupported")),d.length>0&&f.length===0&&W.warning(o("picker.unsupported"))},[t,o]),l=(0,cl.useCallback)(async()=>{let d=await bn();if(!d.ok){d.body.error==="picker-unsupported"?W.warning(o("picker.needPath")):W.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),s=(0,cl.useCallback)(d=>{let f=Array.from(d),c=[],p=0,g=0;for(let w of f){let y=mc(w);if(!y){p+=1;continue}let x=Os(y,{name:w.name,mime:w.type,size:w.size});x?c.push(x):g+=1}c.length>0&&t(c),p>0&&W.warning(o("picker.needPath")),g>0&&W.warning(o("picker.unsupported"))},[t,o]),u=(0,cl.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&s(d.dataTransfer.files)},[s]);return(0,Nt.jsxs)("div",{className:"wf-picker-pane",children:[(0,Nt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{l()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,Nt.jsx)(tl,{size:22,className:"wf-picker-dropzone__icon"}),(0,Nt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,Nt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,Nt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,Nt.jsx)(Pu,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,Nt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||Wo(d.realPath);return(0,Nt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,Nt.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,Nt.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,Nt.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,Nt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,Nt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,Nt.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,Nt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${H5(d.size)}`:""]})]}),(0,Nt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,Nt.jsx)(io,{size:14})})]},d.id)})}):null]})},vI=h9;var Jo=E(X(),1),x9=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=fe(),i=le(S=>S.nodes),l=le(S=>S.edges),[s,u]=(0,Fa.useState)(a),[d,f]=(0,Fa.useState)([]),[c,p]=(0,Fa.useState)([]),g=(0,Fa.useMemo)(()=>U5(i,l,t),[i,l,t]);(0,Fa.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,Fa.useCallback)(()=>{p([]),o()},[o]),y=(0,Fa.useCallback)((S,L)=>{L||f(_=>_.includes(S)?_.filter(T=>T!==S):[..._,S])},[]),x=(0,Fa.useCallback)(S=>{p(L=>[...L,...S])},[]),b=(0,Fa.useCallback)(S=>{p(L=>L.filter(_=>_.id!==S))},[]),h=d.filter(S=>{let L=g.find(_=>_.nodeId===S);return L&&!L.alreadyConnected}).length+c.length,v=(0,Fa.useCallback)(()=>{if(h===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,h,d]),C=(0,Jo.jsxs)("div",{className:"wf-picker-footer",children:[(0,Jo.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,Jo.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:h===0,onClick:v,children:[r("picker.use")," ",h," ",r("picker.items")]})]});return(0,Jo.jsxs)(al,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,Jo.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,Jo.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,Jo.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,Jo.jsx)(yI,{items:g,selectedIds:d,onToggle:y}):(0,Jo.jsx)(vI,{files:c,onAddFiles:x,onRemove:b})]})},zm=x9;var Sn=E(Q(),1);function CI(e){let t=fe(),[a,o]=(0,Sn.useState)(!1),[n,r]=(0,Sn.useState)("canvas"),i=(0,Sn.useCallback)((c="canvas")=>{r(c),o(!0)},[]),l=(0,Sn.useCallback)(()=>{o(!1)},[]),s=(0,Sn.useCallback)(c=>{let p=le.getState(),g=V5({nodes:p.nodes,edges:p.edges,targetNodeId:e,selectedCanvasNodeIds:c.selectedCanvasNodeIds,localFiles:c.localFiles});return g.hasWork?p.applyCanvasInputMutation({addNodes:g.addNodes,addEdges:g.addEdges,nodePatches:g.nodePatches}).status!=="allowed"?(W.error(t("picker.commitFailed")),!1):(g.rejected.length>0?W.warning(t("picker.commitPartial")):W.success(t("picker.commitOk")),o(!1),!0):(W.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,Sn.useCallback)(async()=>{let c=await bn();if(!c.ok)return c.body.error==="picker-unsupported"?W.warning(t("picker.needPath")):W.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=ni(p);if(g.length===0)return W.warning(t("picker.unsupported")),!1;let w=le.getState(),y=gc({nodes:w.nodes,targetNodeId:e,files:g});return y.hasWork?w.applyCanvasInputMutation({addNodes:y.addNodes,nodePatches:y.nodePatches}).status!=="allowed"?(W.error(t("picker.commitFailed")),!1):(W.success(t("picker.importOk")),!0):(W.warning(t("picker.unsupported")),!1)},[e,t]),d=(0,Sn.useCallback)(async()=>{let c=await bn();if(!c.ok)return c.body.error==="picker-unsupported"?W.warning(t("picker.needPath")):W.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=ni(p);return g.length===0?(W.warning(t("picker.unsupported")),!1):s({selectedCanvasNodeIds:[],localFiles:g})},[s,t]),f=(0,Sn.useCallback)(async c=>{let p=await bn();if(!p.ok)return W.error(t("picker.pickFailed")),!1;let g=p.body.path;if(!g)return!1;let y=ni([g])[0];if(!y||y.materialType!==c)return W.warning(t("picker.unsupported")),!1;let x=Cm({realPath:y.realPath,name:y.name,materialType:y.materialType,mime:y.mime,size:y.size});return le.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:x}]}).status!=="allowed"?(W.error(t("picker.commitFailed")),!1):(W.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:l,importLocalFiles:d,fillImportNode:u,relinkLocalFile:f,commit:s}}var Ee=E(X(),1),b9=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:l,mediaUrl:s,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[w,y]=(0,lt.useState)(!1),[x,b]=(0,lt.useState)(!1),[m,h]=(0,lt.useState)(!1),[v,C]=(0,lt.useState)(!1),[S,L]=(0,lt.useState)(null),{setNodes:_}=ao(),T=Ke(ae=>ae.status==="pending"||ae.status==="running"),R=o.nodeWidth??wn(n),z=Gb(n),F=k5(R,z),k=S??o.nodeHeight??F,N=(0,lt.useCallback)(ae=>{_(ve=>ve.map(Oe=>Oe.id===e?{...Oe,data:{...Oe.data,...ae}}:Oe))},[e,_]),D=(0,lt.useCallback)((ae,ve)=>{if(ae>0&&ve>0){let Oe=ae/ve,Ot=Math.max(80,Math.min(800,Math.round(R/Oe)));L(Ot),o.nodeHeight!==Ot&&N({nodeHeight:Ot})}},[o.nodeHeight,R,N]),M=(0,lt.useCallback)(()=>{if(rc(o)==="generate"){let ve=o.selectedTool;(!ve||ve==="text-editor")&&N({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]})}Ke.getState().startNodeExecution?.(e)},[e,n,o,N]),A=fe(),B=le(ae=>ae.applyCanvasInputMutation),P=CI(e),H=rc(o),I=(0,lt.useMemo)(()=>Im(n).map(ae=>({key:ae.key,label:A(ae.labelKey),description:A(ae.descKey),icon:ae.icon})),[n,A]),U=(0,lt.useCallback)((ae,ve)=>{let Oe=_m(ae),Ot=ve?.flowPosition;if(!Oe||!Ot)return;let wt=oi(Oe.targetMaterialType,Ot),_a=wt.nodes[0];_a&&B({addNodes:wt.nodes,addEdges:[{source:e,sourceHandle:"out",target:_a.id,targetHandle:"in"}]})},[B,e]),j=u||l||"",Z=(0,lt.useCallback)(ae=>{if(n==="text"){let ve="";ae==="script"?ve=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:ae==="planning"?ve=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:ae==="prompt"?ve=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:ae==="storyboard"&&(ve=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),N({prompt:ve,selectedTool:"text-to-text"})}},[n,N]),te=(0,lt.useCallback)(ae=>{let ve=mc(ae);if(!ve){W.warning(A("picker.needPath"));return}let Oe=Os(ve,{name:ae.name,mime:ae.type,size:ae.size});if(!Oe){W.warning(A("picker.unsupported"));return}let Ot=le.getState(),wt=gc({nodes:Ot.nodes,targetNodeId:e,files:[Oe]});if(!wt.hasWork){W.warning(A("picker.unsupported"));return}B({addNodes:wt.addNodes,nodePatches:wt.nodePatches}).status!=="allowed"&&W.error(A("picker.commitFailed"))},[B,e,A]),$=(0,lt.useCallback)(ae=>{H==="import"&&(ae.preventDefault(),ae.stopPropagation(),b(!0))},[H]),G=(0,lt.useCallback)(ae=>{H==="import"&&(ae.preventDefault(),ae.stopPropagation(),b(!1))},[H]),K=(0,lt.useCallback)(ae=>{if(H!=="import")return;ae.preventDefault(),ae.stopPropagation(),b(!1);let ve=Array.from(ae.dataTransfer.files??[]);if(ve.length===1){te(ve[0]);return}let Oe=ve.map(yt=>{let Ia=mc(yt);return Ia?Os(Ia,{name:yt.name,mime:yt.type,size:yt.size}):null}).filter(yt=>!!yt);if(Oe.length===0){ve.length>0&&W.warning(A("picker.needPath"));return}let Ot=le.getState(),wt=gc({nodes:Ot.nodes,targetNodeId:e,files:Oe});if(!wt.hasWork){W.warning(A("picker.unsupported"));return}B({addNodes:wt.addNodes,nodePatches:wt.nodePatches}).status!=="allowed"&&W.error(A("picker.commitFailed"))},[B,te,e,H,A]),ue=(0,lt.useCallback)(()=>{j&&navigator.clipboard.writeText(j).catch(()=>{})},[j]),pe=(0,lt.useCallback)(()=>{if(!j)return;let ae=j.split(`

`).filter(ve=>ve.trim().length>0);ae.length>1&&N({content:ae.join(`
---
`)})},[j,N]);(0,lt.useEffect)(()=>{a||(h(!1),C(!1))},[a]);let oe=$5(a,m,f),re=r==="offline"||o.isMissing===!0,we=Yo(n,p,s),Le=re?null:Q5(f,r,!!we),qe=n==="video"?"video":n==="audio"?"audio":"square";return(0,Ee.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:R},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[(w||a)&&(n==="text"||H==="import"&&!we&&!re)&&(0,Ee.jsx)(nI,{materialType:n,nodeKind:H,selected:a,onOpenResourcePicker:()=>{P.fillImportNode()},onStartTextEdit:()=>C(!0),onCopyText:ue,onSplitText:pe}),(0,Ee.jsx)(nr,{side:"left",nodeHovered:w}),(0,Ee.jsx)(Hs,{label:i,materialType:H==="import"?"import_asset":n,onLabelChange:ae=>N({label:ae}),trailing:(0,Ee.jsx)(Dm,{executionStatus:f,status:r})}),(0,Ee.jsxs)("div",{className:`wf-material-node__card ${x?"wf-material-node__card--dragover":""}`,style:{width:R,height:k,position:"relative"},onDragOver:$,onDragLeave:G,onDrop:K,children:[H==="import"&&!!we&&!re&&(0,Ee.jsx)("button",{type:"button",className:"wf-material-node__replace-btn nodrag nopan",onClick:ae=>{ae.stopPropagation(),P.fillImportNode()},title:A("node.replace"),children:A("node.replace")}),a&&(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Ee.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Ee.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Ee.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,Ee.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:j||v?(0,Ee.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${v?" nodrag":""}`,readOnly:!v,value:j,placeholder:A("node.textPlaceholder"),autoFocus:v,onMouseDown:ae=>{v||ae.preventDefault()},onDoubleClick:ae=>{ae.stopPropagation(),C(!0),ae.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:ae=>N({content:ae.target.value,status:ae.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,Ee.jsx)(Rm,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:Z})}),n!=="text"&&re&&(0,Ee.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,Ee.jsx)(el,{size:22,className:"wf-media-offline__icon"}),(0,Ee.jsx)("div",{className:"wf-media-offline__title",children:A("node.offline")}),(0,Ee.jsx)("div",{className:"wf-media-offline__hint",children:A("node.offlineHint")}),(0,Ee.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{P.relinkLocalFile(n)},children:A("node.relink")})]}),n!=="text"&&!re&&(Le?(0,Ee.jsx)("div",{className:"wf-material-node__media",children:(0,Ee.jsx)(hc,{status:Le,loadingAspectRatio:qe,errorMessage:c??d,taskId:o.taskId,onRetry:M,children:we?(0,Ee.jsx)(aI,{materialType:n,mediaAssets:p,mediaUrl:s,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:D}):(0,Ee.jsx)(Rm,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:Z})})}):(0,Ee.jsx)("div",{className:"wf-material-node__media",children:(0,Ee.jsx)(Rm,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:Z})})),n==="text"&&(d||c)&&(0,Ee.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),oe&&(0,Ee.jsx)(sI,{onClose:()=>h(!0),children:(0,Ee.jsx)(wI,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:N,onGenerate:M,execBusy:T,onOpenResourcePicker:H==="import"?()=>{P.fillImportNode()}:()=>P.openPicker("canvas")})}),(0,Ee.jsx)(nr,{side:"right",nodeHovered:w,options:I,onSelect:U}),(0,Ee.jsx)(zm,{open:P.open,nodeId:e,initialTab:P.initialTab,onCancel:P.closePicker,onCommit:P.commit})]})},SI=(0,lt.memo)(b9);var LI={type:"material",component:SI,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>nc("text",{status:"empty",nodeWidth:wn("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var qs=E(Q(),1);var e0=50;function fl(e){return JSON.parse(JSON.stringify(e))}var w9={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},ca=Ts((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,fl(o)].slice(-e0),redoStack:[]}};return{document:w9,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:fl(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:fl(i),undoStack:l,redoStack:[...r,fl(n)].slice(-e0)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:fl(i),redoStack:l,undoStack:[...r,fl(n)].slice(-e0)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),l=i.rows[o];if(!l)return;let s=a(i),u=[...i.rows],d={...l,cells:[...l.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(l=>l.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((l,s)=>s!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),l=a(i),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,s],rows:u},...l})},updateColumn:(o,n,r)=>{let{document:i}=t(),l=i.columns[o];if(!l)return;let s=a(i),u=[...i.columns];u[o]={...l,title:n,type:r},e({document:{...i,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((s,u)=>u!==o),l=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:l},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),l=[...n.columns];l[o]={...r,visible:!r.visible},e({document:{...n,columns:l},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let l=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:d},...l})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:fl(o),undoStack:[],redoStack:[]})}});var ge=E(X(),1),kI=380,y9=280,_I=(0,qs.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=ca(),[i,l]=(0,qs.useState)(!1),{zoom:s}=Mo(),u=(0,qs.useMemo)(()=>To(s),[s]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,ge.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:kI},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(i||a)&&(0,ge.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,ge.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,ge.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:g=>{g.stopPropagation(),r()},children:[(0,ge.jsx)(Ze,{size:14}),(0,ge.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,ge.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:g=>{g.stopPropagation(),n()},children:[(0,ge.jsx)(pn,{size:13}),(0,ge.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,ge.jsx)(nr,{side:"left",nodeHovered:i}),(0,ge.jsx)(Hs,{label:c,materialType:"table"}),(0,ge.jsxs)("div",{className:"wf-material-node__card",style:{width:kI,height:y9},onDoubleClick:()=>n(),children:[a&&(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,ge.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ge.jsx)(ro,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,ge.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,ge.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:g=>g.stopPropagation(),children:[(0,ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,ge.jsx)(Ze,{size:14,className:"wf-node-empty__pill-icon"}),(0,ge.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,ge.jsx)(pn,{size:13,className:"wf-node-empty__pill-icon"}),(0,ge.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,ge.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,ge.jsx)(Ru,{size:14}),(0,ge.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,ge.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,ge.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((g,w)=>{let y=g.cells[0],x=typeof y=="string"&&y?y:typeof y=="number"?String(y):Array.isArray(y)&&y.length>0?`\u{1F4CE} \u9644\u4EF6 (${y.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,ge.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,ge.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:x}),(0,ge.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",w+1]})]},w)}),d.length>3&&(0,ge.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,ge.jsx)(nr,{side:"right",nodeHovered:i})]})});var II={type:"table",component:_I,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var li=E(Q(),1);var Ua=E(Q(),1);var co=E(X(),1),v9=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:l,nodeHeight:s,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:w,onLeftHandleSelect:y,onFileDrop:x,onFilesDrop:b,onDragOver:m,onDragLeave:h,onDrop:v,onMouseEnter:C,onMouseLeave:S,onCardClick:L,onCardDoubleClick:_,renderFloatingPill:T,renderHeader:R,children:z,renderConfigPanel:F})=>{let[k,N]=(0,Ua.useState)(!1),[D,M]=(0,Ua.useState)(!1),{zoom:A}=Mo(),B=(0,Ua.useMemo)(()=>To(A),[A]),P=(0,Ua.useMemo)(()=>({inverseScale:B,hovered:k,selected:t}),[B,k,t]),H=(0,Ua.useCallback)(K=>{N(!0),C?.(K)},[C]),I=(0,Ua.useCallback)(K=>{N(!1),S?.(K)},[S]),U=(0,Ua.useCallback)(K=>{K.preventDefault(),K.stopPropagation(),M(!0),m?.(K)},[m]),j=(0,Ua.useCallback)(K=>{K.preventDefault(),K.stopPropagation(),M(!1),h?.(K)},[h]),Z=(0,Ua.useCallback)(K=>{K.preventDefault(),K.stopPropagation(),M(!1);let ue=K.dataTransfer.files;ue&&ue.length>0&&(b?.(ue),ue[0]&&x?.(ue[0])),v?.(K)},[v,x,b]),te=typeof T=="function"?T(P):T,$=typeof R=="function"?R(P):R,G=typeof F=="function"?F(P):F;return(0,co.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:l,...n},onMouseEnter:H,onMouseLeave:I,"data-node-id":e,children:[te,u&&(0,co.jsx)(nr,{side:"left",nodeHovered:k,variant:f,options:w,onSelect:y}),$,(0,co.jsxs)("div",{className:`wf-material-node__card ${D?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:l,height:s,...r},"data-node-type":i,onClick:L,onDoubleClick:_,onDragOver:U,onDragLeave:j,onDrop:Z,children:[t&&(0,co.jsxs)(co.Fragment,{children:[(0,co.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,co.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,co.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,co.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),z]}),G,d&&(0,co.jsx)(nr,{side:"right",nodeHovered:k,variant:c,options:p,onSelect:g})]})},MI=(0,Ua.memo)(v9);var pl=E(Q(),1);var ir=E(X(),1),C9=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=Mo(),l=(0,pl.useMemo)(()=>To(i),[i]),s=a??l,u=d=>d?pl.default.isValidElement(d)?d:(0,ir.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,ir.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,ir.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,ir.jsxs)(pl.default.Fragment,{children:[f>0&&(0,ir.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,ir.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,ir.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},NI=(0,pl.memo)(C9);var Om=E(Q(),1);var qa=E(X(),1),S9=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:l="",style:s})=>{let u=fe(),d=(f,c,p)=>f?Om.default.isValidElement(f)?f:(0,qa.jsx)(f,{size:c,className:p}):null;return(0,qa.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${l}`.trim(),style:s,children:[(e||t)&&(0,qa.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,qa.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,qa.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,qa.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,qa.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,qa.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,qa.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,qa.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,qa.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,qa.jsx)("span",{children:f.label})]},f.key)})}),i]})},EI=(0,Om.memo)(S9);var ml=E(Q(),1);function TI(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function AI(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function DI(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function RI(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function PI(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var Qe=E(X(),1),L9=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:i,onDownload:l})=>{let s=fe(),[u,d]=(0,ml.useState)(!1),f=(0,ml.useCallback)(g=>{g.stopPropagation(),d(w=>!w)},[]),c=(0,ml.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,Qe.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,Qe.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,Qe.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":s("clip.openEditorTitle"),children:[t?(0,Qe.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,Qe.jsx)("span",{className:"wf-vc-result__fallback",children:(0,Qe.jsx)(Vt,{size:36,strokeWidth:1.5})}),(0,Qe.jsx)("span",{className:"wf-vc-result__play",children:(0,Qe.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,Qe.jsx)(no,{size:22,fill:"currentColor"})})})]});return(0,Qe.jsxs)("div",{className:"wf-vc-result",children:[p,(0,Qe.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,Qe.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Qe.jsx)("dt",{children:s("clip.duration")}),(0,Qe.jsx)("dd",{className:"wf-vc-result__mono",children:DI(a)})]}),(0,Qe.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Qe.jsx)("dt",{children:s("clip.resolution")}),(0,Qe.jsx)("dd",{className:"wf-vc-result__mono",children:RI(o,n)})]})]}),(0,Qe.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,Qe.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:g=>{g.stopPropagation(),i?.()},children:[(0,Qe.jsx)(Ki,{size:14}),(0,Qe.jsx)("span",{children:s("clip.reEdit")})]}),(0,Qe.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:g=>{g.stopPropagation(),l?.()},disabled:!e,title:e?s("clip.downloadTitle"):void 0,children:[(0,Qe.jsx)(Xi,{size:14}),(0,Qe.jsx)("span",{children:s("clip.download")})]})]})]})},zI=(0,ml.memo)(L9);var OI="omnimux-clip-open",t0="omnimux-clip-save",a0="omnimux-clip-close",o0="omnimux-clip-progress";function BI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function HI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function FI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var La=E(X(),1),UI=350,k9=440;function qI(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function fo(e){return typeof e=="string"&&e.trim()?e:void 0}function n0(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function _9(e){return fo(e.mediaUrl)||fo(e.outputVideoUrl)||fo(e.path)||fo(e.url)||fo(e.real_path)||fo(e.filePath)}function I9(e){let{nodes:t,edges:a}=le.getState(),o=[],n=[],r=[],i=[];for(let l of a){if(l.target!==e)continue;let s=t.find(g=>g.id===l.source);if(!s)continue;let u=qI(s.data)?s.data:{},d=fo(u.materialType)||(s.type==="material"?void 0:s.type),f=fo(u.label)||fo(u.title)||s.id,c=_9(u)||"",p=n0(u.duration)??n0(u.outputDurationMs)??n0(u.durationMs);if(d==="video"||s.type==="video_composition"){let g=c||fo(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=fo(u.content)||fo(u.generatedContent)||fo(u.prompt);g&&i.push({text:g,startTimeMs:i.reduce((w,y)=>w+y.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function M9(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function N9(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var E9=({id:e,data:t,selected:a})=>{let o=qI(t)?t:{},n=le(w=>w.setNodes),r=le(w=>w.setEdges),i=fe(),l=o.status??"idle",s=!!o.outputVideoUrl,u=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||i("node.type.video_composition"),f=AI(l,s),c=(0,li.useCallback)(w=>{n(y=>y.map(x=>x.id===e?{...x,data:{...x.data,...w}}:x))},[e,n]);(0,li.useEffect)(()=>{if(typeof window>"u")return;let w=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!BI(m)||m.nodeId&&m.nodeId!==e)return;let h=m.output;if(c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:h?.videoPath,thumbnailUrl:h?.thumbnailPath,outputThumbnailUrl:h?.thumbnailPath,outputDurationMs:h?.durationMs,outputWidth:h?.width,outputHeight:h?.height,status:h?.videoPath?"completed":"idle",renderProgress:h?.videoPath?100:void 0,errorMessage:void 0}),h?.videoPath&&m.createDownstreamNode){let C=le.getState().nodes,L=C.find(T=>T.id===e)?.position||{x:0,y:0};if(!C.some(T=>T.type==="material"&&T.data?.realPath===h.videoPath)){let T=`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,R={x:L.x+UI+80,y:L.y},z={id:T,type:"material",position:R,selected:!0,data:{materialType:"video",label:`${o.title||o.label||i("node.type.video_composition")}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:h.videoPath,mediaUrl:h.videoPath,thumbnailUrl:h.thumbnailPath,duration:h.durationMs?Math.round(h.durationMs/1e3):void 0,size:{width:h.width||1920,height:h.height||1080}}},k={id:`edge_${e}_${T}`,source:e,target:T,sourceHandle:"output",targetHandle:"input"};n(N=>[...N.map(D=>({...D,selected:!1})),z]),r(N=>[...N,k]),W.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03")}}},y=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!FI(m)||m.nodeId&&m.nodeId!==e)return;let h=m.status??"rendering";c({status:h,renderProgress:m.renderProgress})},x=b=>{let m=b instanceof CustomEvent?b.detail:void 0;HI(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:s?"completed":"idle"}))};return window.addEventListener(t0,w),window.addEventListener(o0,y),window.addEventListener(a0,x),()=>{window.removeEventListener(t0,w),window.removeEventListener(o0,y),window.removeEventListener(a0,x)}},[s,e,o.projectId,o.status,c]);let p=(0,li.useCallback)(()=>{if(typeof window>"u")return;let w=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,y={source:"canvas",nodeId:e,nodeTitle:d,projectId:w,draftSchema:o.schema,upstreamInputs:I9(e)};c({status:"editing",projectId:w}),window.dispatchEvent(new CustomEvent(OI,{detail:y,bubbles:!0})),window.setTimeout(()=>{M9()||W.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,d,c]),g=(0,li.useCallback)(()=>{let w=o.outputVideoUrl;if(!w)return;let y=document.createElement("a");y.href=w,y.download=`${PI(d)}.mp4`,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove()},[o.outputVideoUrl,d]);return(0,La.jsxs)(MI,{id:e,selected:a,nodeWidth:UI,nodeHeight:k9,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:w=>{w.stopPropagation(),p()},renderFloatingPill:({hovered:w,selected:y})=>{if(!w&&!y||!s)return null;let x=[{key:"download_video",label:i("clip.download"),icon:Xi,onClick:g,title:i("clip.downloadTitle")}];return(0,La.jsx)(NI,{actions:x})},renderHeader:()=>(0,La.jsx)(Hs,{label:d,materialType:"video_composition",customIcon:(0,La.jsx)(Vt,{size:14}),onLabelChange:w=>c({label:w,title:w}),trailing:(0,La.jsx)(Dm,{status:TI(l)})}),children:[f==="result"&&(0,La.jsx)(zI,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:u,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:p,onDownload:g}),f==="rendering"&&(0,La.jsx)("div",{className:"wf-material-node__media",children:(0,La.jsx)(hc,{status:"generating",loadingAspectRatio:"video",children:null})}),f==="error"&&(0,La.jsx)("div",{className:"wf-material-node__media",children:(0,La.jsx)(hc,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:p,children:null})}),f==="launcher"&&(0,La.jsx)(EI,{mainIcon:(0,La.jsx)(Vt,{size:36,strokeWidth:1.5}),secondaryIcon:(0,La.jsx)(ta,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:Ki,onClick:()=>p()}]})]})},VI={type:"video_composition",component:(0,li.memo)(E9),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>N9(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var $I=E(Q(),1),QI=E(Bt(),1);var Bm=E(Q(),1),GI=E(Bt(),1);var ze=E(X(),1),r0=e=>e==="text"?(0,ze.jsx)(tr,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,ze.jsx)(Uu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,ze.jsx)(Zu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,ze.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),jI=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=ca(),[i,l]=(0,Bm.useState)(null);(0,Bm.useEffect)(()=>{if(o===null){l(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,ze.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,ze.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,ze.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,ze.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,ze.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,ze.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,ze.jsx)(Hu,{size:14})}),r0(u.type),(0,ze.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,ze.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,ze.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,ze.jsx)(Du,{size:15}):(0,ze.jsx)(Au,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,ze.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,x=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,b=Math.max(8,c.right-p);l({top:x,left:b}),n(d)}},children:(0,ze.jsx)(Kr,{size:15})})]})]},u.id))}),(0,ze.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,ze.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,ze.jsx)(Ze,{size:14}),(0,ze.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&i&&typeof document<"u"&&(0,GI.createPortal)((0,ze.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,ze.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,ze.jsx)(mn,{size:13}),(0,ze.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,ze.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,ze.jsx)(io,{size:13}),(0,ze.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var ra=E(X(),1),T9=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],XI=()=>{let{document:e,setFilterConditions:t}=ca(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((l,s)=>({value:s,label:l.title||`\u5217 ${s+1}`})),n=(l,s)=>{let u=a.map((d,f)=>f===l?{...d,...s}:d);t(u)},r=()=>{let l=[...a,{columnIndex:0,op:"equals",value:""}];t(l)},i=l=>{let s=a.filter((u,d)=>d!==l);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,ra.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:l=>l.stopPropagation(),children:[(0,ra.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,ra.jsxs)("div",{className:"wf-filter-body",children:[a.map((l,s)=>(0,ra.jsxs)("div",{className:"wf-filter-row",children:[(0,ra.jsx)("div",{style:{width:130,flexShrink:0},children:(0,ra.jsx)(Ha,{value:l.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ra.jsx)("div",{style:{width:110,flexShrink:0},children:(0,ra.jsx)(Ha,{value:l.op,options:T9,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ra.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:l.value??"",disabled:l.op==="empty"||l.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,ra.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(s),children:(0,ra.jsx)(aa,{size:15})})]},s)),(0,ra.jsx)("div",{style:{paddingTop:4},children:(0,ra.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,ra.jsx)(Ze,{size:14}),(0,ra.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var lr=E(X(),1),A9=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],YI=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=ca(),o=e.rowHeight||"low";return(0,lr.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,lr.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,lr.jsx)("div",{style:{padding:"6px"},children:A9.map(n=>{let r=o===n.id;return(0,lr.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,lr.jsx)("span",{children:n.label}),r&&(0,lr.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,lr.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var De=E(X(),1),ZI=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:l,closeStage:s}=ca(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,De.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,De.jsx)("div",{className:"wf-stage-topbar__left",children:(0,De.jsxs)("div",{className:"wf-stage-title-group",children:[(0,De.jsx)(ro,{size:16,className:"wf-stage-title-icon"}),(0,De.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,De.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,De.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,De.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,De.jsx)(Qu,{size:15}),(0,De.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,De.jsx)(jI,{})]}),(0,De.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,De.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,De.jsx)($r,{size:15}),(0,De.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,De.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,De.jsx)(XI,{})]}),(0,De.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,De.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,De.jsx)(ei,{size:15}),(0,De.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,De.jsx)(YI,{})]}),(0,De.jsx)("div",{className:"wf-stage-divider"}),(0,De.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,De.jsx)(Ji,{size:16})}),(0,De.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,De.jsx)($i,{size:16})}),(0,De.jsx)("div",{className:"wf-stage-divider"}),(0,De.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,De.jsx)(aa,{size:16})})]})]})};var Ie=E(X(),1),WI=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=ca(),n=e.columns.filter(l=>l.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Ie.jsx)("div",{className:"wf-grid-container",children:(0,Ie.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,Ie.jsxs)("table",{className:"wf-grid-table",children:[(0,Ie.jsxs)("colgroup",{children:[(0,Ie.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(l=>(0,Ie.jsx)("col",{style:{width:l.width||220,minWidth:120}},l.id)),(0,Ie.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,Ie.jsx)("col",{style:{width:"auto"}})]}),(0,Ie.jsx)("thead",{children:(0,Ie.jsxs)("tr",{children:[(0,Ie.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Ie.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(l=>(0,Ie.jsx)("th",{className:"wf-grid-th",children:(0,Ie.jsxs)("div",{className:"wf-grid-th-content",children:[(0,Ie.jsx)("span",{className:"wf-grid-th-icon",children:r0(l.type)}),(0,Ie.jsx)("span",{className:"wf-grid-th-title",children:l.title})]})},l.id)),(0,Ie.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Ie.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,Ie.jsx)(Ze,{size:15})})}),(0,Ie.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,Ie.jsx)("tbody",{children:e.rows.map((l,s)=>(0,Ie.jsxs)("tr",{className:i,children:[(0,Ie.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,Ie.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=l.cells[d];return(0,Ie.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,Ie.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((w,y)=>(0,Ie.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},y)),g.length===0&&(0,Ie.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,Ie.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(s,d,g.target.value)})})()},u.id)}),(0,Ie.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,Ie.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,Ie.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,Ie.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,Ie.jsx)(Ze,{size:14}),(0,Ie.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var gl=E(Q(),1);var Va=E(X(),1),D9=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],KI=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=ca(),[n,r]=(0,gl.useState)(e.initialTitle),[i,l]=(0,gl.useState)(e.initialType),s=(0,gl.useRef)(null);(0,gl.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),l(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,Va.jsx)(al,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,Va.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,Va.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,Va.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,Va.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,Va.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,Va.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,Va.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,Va.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,Va.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,Va.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,Va.jsx)(Ha,{value:i,options:D9,onChange:d=>l(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var Vs=E(X(),1),JI=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=ca();return(0,$I.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,QI.createPortal)((0,Vs.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,Vs.jsx)(ZI,{}),(0,Vs.jsx)(WI,{}),(0,Vs.jsx)(KI,{})]}),document.body)};var ht=E(X(),1),i0=class extends je.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,ht.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,ht.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,ht.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,ht.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};Tm(LI);Tm(II);Tm(VI);var R9=Y5(),P9={default:Db,animated:Db},eM={maxZoom:1},z9={x:0,y:0,zoom:1},O9=[1,2],B9=96,H9=({catalog:e,workspaceId:t,onExecuteNodeIds:a,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:l})=>{let{screenToFlowPosition:s,fitView:u,zoomTo:d,setCenter:f}=ao(),{nodes:c,edges:p,onNodesChange:g,onEdgesChange:w}=$k(),y=le(ee=>ee.applyCanvasInputMutation),x=le(ee=>ee.setNodes),b=le(ee=>ee.setSelectedElement),m=le(ee=>ee.pushHistory),h=le(ee=>ee.undo),v=le(ee=>ee.redo),C=Qk(),S=Jk(),[L,_]=(0,je.useState)(null),[T,R]=(0,je.useState)(!1),[z,F]=(0,je.useState)(!1),[k,N]=(0,je.useState)(!1),[D,M]=(0,je.useState)(!1),[A,B]=(0,je.useState)(void 0),[P,H]=(0,je.useState)("select"),I=(0,je.useRef)(0),U=(0,je.useMemo)(()=>c.some(ee=>ee.selected),[c]),j=T5(x,b),Z=fe(),te=Z("menu.generateFromNode"),{menuState:$,onConnectStart:G,onConnectEnd:K,onMenuSelect:ue,onMenuClose:pe}=I5({onReject:_});(0,je.useEffect)(()=>{m()},[c,p,m]);let oe=(0,je.useMemo)(()=>e?c.map(ee=>({...ee,data:{...ee.data,__catalog:e}})):c,[c,e]),re=(0,je.useCallback)(ee=>{let dt=y({addEdges:[ee]});if(dt.status==="rejected"){let Tt=Z(Lm(dt.reasonCode));_(Tt),W.warning(Tt)}else _(null)},[y,Z]),we=(0,je.useCallback)(ee=>{let dt=le.getState();return v5(ee,dt.nodes,dt.edges)},[]),Le=(0,je.useCallback)(async(ee,dt)=>{let Tt=I.current,vt=dt??{x:120+Tt%3*420,y:120+Math.floor(Tt/3)*360};if(ee==="import_asset"){let Ga=await bn();if(!Ga.ok){Ga.body.error==="picker-unsupported"?W.warning(Z("picker.needPath")):W.error(Z("picker.pickFailed"));return}let Do=Ga.body.paths??[];if(Do.length===0)return;let dr=ni(Do);if(dr.length===0){W.warning(Z("picker.unsupported"));return}let si=X5({files:dr,origin:vt});if(!si.hasWork||!si.addNodes?.length)return;if(y({addNodes:si.addNodes}).status!=="allowed"){W.error(Z("picker.commitFailed"));return}let Hm=new Set(si.addNodes.map(Zs=>Zs.id));x(Zs=>Zs.map(di=>Hm.has(di.id)?di:di.selected?{...di,selected:!1}:di)),I.current+=si.addNodes.length,W.success(Z("picker.importOk"));return}if(ee==="table"||ee==="video_composition"){let Ga=Z5(ee,vt,`node_${ee}_${Date.now()}`);if(!Ga)return;I.current+=1,x(Do=>Xb(Do,[{...Ga,selected:!0}]));return}let sr=oi(ee,vt);sr.nodes.length!==0&&(I.current+=1,x(Ga=>Xb(Ga,sr.nodes)))},[x,y,Z]),qe=(0,je.useCallback)(ee=>{let dt=ee.nodes.map(vt=>vt.id),Tt=ee.edges.map(vt=>vt.id);dt.length===0&&Tt.length===0||y({removeNodeIds:dt,removeEdgeIds:Tt})},[y]),{menu:st,handleNodeContextMenu:po,handlePaneContextMenu:ae,handleSelectionContextMenu:ve,closeMenu:Oe,handleMenuAction:Ot,handleAddNodeFromMenu:wt}=A5({screenToFlowPosition:s,setNodes:x,copySelectedNodes:j.copySelectedNodes,pasteNodes:j.pasteNodes,duplicateSelectedNodes:j.duplicateSelectedNodes,deleteSelectedNodes:j.deleteSelectedNodes,selectAllNodes:j.selectAllNodes,clearSelection:j.clearSelection,undo:h,redo:v,onExecuteNodeIds:a,onAddNode:Le}),_a=(0,je.useCallback)(ee=>{let dt=ee.real_path||ee.files?.[0]?.path||"",Tt=ee.type==="video"?"video":ee.type==="image"?"image":"text",vt=I.current++,sr={x:200+vt%4*50,y:200+vt%4*40},Do=oi(Tt,sr,{title:ee.name,content:dt,previewUrl:ee.previewUrl,status:"ready"}).nodes[0];Do&&(y({addNodes:[Do]}),b("node",Do.id),W.success(Z("toolbar.assets")+": "+ee.name))},[y,b,Z]);y5({onCopy:j.copySelectedNodes,onPaste:()=>j.pasteNodes(),onSelectAll:j.selectAllNodes,onDeleteSelected:j.deleteSelectedNodes,onClearSelection:j.clearSelection,onDuplicate:j.duplicateSelectedNodes,onUndo:h,onRedo:v,hasSelection:U,onToggleAssets:()=>F(ee=>!ee),onToggleShortcuts:()=>N(ee=>!ee),onToggleMinimap:()=>R(ee=>!ee),onToggleAddMenu:()=>M(ee=>!ee),onSetPointerMode:ee=>H(ee),onFitView:()=>u(eM),onResetZoom:()=>d(1),onCategoryKey:ee=>{F(!0),B(ee)}});let yt=(0,je.useCallback)((ee,dt)=>{b("node",dt.id)},[b]),Ia=(0,je.useCallback)(()=>{b("none",null),Oe()},[b,Oe]),Ao=(0,je.useCallback)(()=>{x(ee=>ee.map((dt,Tt)=>({...dt,position:{x:120+Tt%3*440,y:120+Math.floor(Tt/3)*360}})))},[x]),Ln=(0,je.useCallback)(ee=>{ee.preventDefault(),ee.dataTransfer.dropEffect="copy"},[]),Ys=(0,je.useCallback)(ee=>{ee.preventDefault();try{let dt=ee.dataTransfer.getData("application/json");if(!dt)return;let Tt=JSON.parse(dt);if(Tt.type==="omnimux-asset"&&Tt.asset){let vt=Tt.asset,sr=s({x:ee.clientX,y:ee.clientY}),Ga=vt.type==="video"?"video":vt.type==="image"?"image":"text",dr=oi(Ga,sr,{title:vt.name,content:vt.real_path||vt.prompt||"",previewUrl:vt.previewUrl,status:"ready"}).nodes[0];dr&&(y({addNodes:[dr]}),b("node",dr.id),W.success(`\u5DF2\u6302\u8F7D\u7D20\u6750\u5230\u753B\u5E03: ${vt.name}`))}}catch(dt){console.error("Failed to parse dropped asset",dt)}},[s,y,b]);return(0,ht.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,ht.jsx)(pk,{nodes:oe,edges:p,onNodesChange:g,onEdgesChange:w,onConnect:re,isValidConnection:we,onConnectStart:G,onConnectEnd:K,onNodeClick:yt,onPaneClick:Ia,onNodeContextMenu:po,onPaneContextMenu:ae,onDragOver:Ln,onDrop:Ys,onSelectionContextMenu:ve,onDelete:qe,nodeTypes:R9,edgeTypes:P9,fitView:!0,fitViewOptions:eM,defaultViewport:z9,minZoom:Vb.minZoom,maxZoom:Vb.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:P==="pan"?!0:O9,panOnScroll:!0,panOnScrollMode:Fo.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:P==="select",selectionMode:Wn.Partial,defaultEdgeOptions:am,connectOnClick:!1,connectionRadius:B9,onlyRenderVisibleElements:!0,children:(0,ht.jsx)(xk,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:cn.Dots})}),(0,ht.jsx)(h_,{isMinimapOpen:T,onToggleMinimap:()=>R(ee=>!ee),onAlignGrid:Ao,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:l}),T&&(0,ht.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,ht.jsx)(yk,{pannable:!0,zoomable:!0})}),(0,ht.jsx)(g_,{onAddNode:Le,onUndo:h,onRedo:v,canUndo:C,canRedo:S,pointerMode:P,onPointerModeChange:H,onOpenAssets:()=>F(ee=>!ee),onOpenHelp:()=>N(ee=>!ee),isAssetsOpen:z,isAddMenuOpen:D,onToggleAddMenu:()=>M(ee=>!ee)}),z&&(0,ht.jsx)(i0,{onClose:()=>F(!1),children:(0,ht.jsx)(f5,{isOpen:z,onClose:()=>F(!1),onInsertAsset:_a,workspaceId:t,nodes:oe,onFocusNode:ee=>{D5({nodes:oe,nodeId:ee,setCenter:f,setNodes:x})}})}),(0,ht.jsx)(p5,{isOpen:k,onClose:()=>N(!1)}),(0,ht.jsx)(b5,{x:st.x,y:st.y,visible:st.visible,context:st.context,onClose:Oe,onAction:Ot,onAddNode:wt,canUndo:C,canRedo:S,hasClipboard:j.hasClipboard,hasSelection:U}),(0,ht.jsx)(Sm,{visible:$.visible,x:$.x,y:$.y,title:te,options:$.options,onSelect:ue,onClose:pe}),(0,ht.jsx)(JI,{}),L&&(0,ht.jsx)("div",{className:"wf-rejected-toast",children:L})]})},F9=e=>(0,ht.jsx)(Lb,{children:(0,ht.jsx)(H9,{...e})}),tM=F9;var Et=E(Q(),1);var aM=new Set(["pending","running","paused"]),U9=new Set(["completed","error","cancelled"]);function Gs(e,t){let a=le.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function oM(e,t){let a=(0,Et.useRef)(null),o=(0,Et.useRef)(e);o.current=e;let n=(0,Et.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,Et.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,Et.useCallback)((y,x)=>{Ke.getState().setExecution({status:y,error:x,progress:{...Ke.getState().progress,percentage:y==="completed"?100:Ke.getState().progress.percentage}})},[]),l=(0,Et.useCallback)((y,x)=>{let b;try{b=JSON.parse(x)}catch{return}let m=Ke.getState();switch(y){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:b.totalNodes??0,completed:0,running:0,pending:b.totalNodes??0,percentage:0}});break}case"node_start":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),Gs(b.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:b.progress??m.progress.percentage}});let h=b.output??{},v={executionStatus:"completed",executionError:void 0};if(h.text&&(v.generatedContent=h.text),h.mediaAssets&&h.mediaAssets.length>0){let C=h.mediaAssets[0];v.mediaAssets=h.mediaAssets,C.type==="image"&&(v.mediaUrl=C.url),v.taskId=`exec-${b.executionId??""}`}Gs(b.nodeId,v);break}case"node_error":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),Gs(b.nodeId,{executionStatus:"error",executionError:b.error??nl("error.nodeExecutionFailed")});break}case"node_skipped":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"skipped"),Gs(b.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",b.error??nl("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),s=(0,Et.useCallback)(y=>{r();let x=o.current;if(!x)return;let b=new EventSource(jt.executionEvents(encodeURIComponent(x),encodeURIComponent(y)));a.current=b;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let h of m)b.addEventListener(h,v=>{l(h,v.data)});b.onerror=()=>{let h=Ke.getState().status;U9.has(h)&&r()}},[r,l]),u=(0,Et.useCallback)(y=>{let x=Ke.getState();x.setExecution({executionId:y.id,status:y.status,error:y.error,progress:{total:y.progress.total,completed:y.progress.completed,running:y.progress.running,pending:y.progress.pending,percentage:y.progress.percentage}});for(let[b,m]of Object.entries(y.nodeStates??{})){x.setNodeStatus(b,m.status);let h={executionStatus:m.status};m.status==="error"&&m.error&&(h.executionError=m.error);let v=y.nodeOutputs?.[b];v&&(v.text&&(h.generatedContent=v.text),v.mediaAssets&&v.mediaAssets.length>0&&(h.mediaAssets=v.mediaAssets,v.mediaAssets[0]&&v.mediaAssets[0].type==="image"&&(h.mediaUrl=v.mediaAssets[0].url))),Gs(b,h)}},[]),d=(0,Et.useCallback)(async(y={})=>{let x=o.current;if(!x)return;if(r(),Ke.getState().resetExecution(),Ke.getState().setExecution({status:"pending"}),y.mode==="single"&&y.nodeIds&&y.nodeIds[0]&&(Ke.getState().setNodeStatus(y.nodeIds[0],"pending"),Gs(y.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let b=await v_(x,{mode:y.mode??"full",nodeIds:y.nodeIds});if(!b.ok||!b.body.execution){Ke.getState().setExecution({status:"error",error:b.body.message??nl("error.createExecutionFailed")});return}Ke.getState().setExecution({executionId:b.body.execution.id}),s(b.body.execution.id)},[r,s]),f=(0,Et.useCallback)(async y=>{let x=o.current,{executionId:b}=Ke.getState();if(!x||!b)return;let m=await N_(x,b,y);!m.ok&&m.body.message&&Ke.getState().setExecution({error:m.body.message})},[]),c=(0,Et.useCallback)(()=>f("pause"),[f]),p=(0,Et.useCallback)(()=>f("resume"),[f]),g=(0,Et.useCallback)(()=>f("cancel"),[f]),w=(0,Et.useCallback)(()=>{r(),Ke.getState().resetExecution()},[r]);return(0,Et.useEffect)(()=>{if(!e)return;let y=!1;return(async()=>{try{let x=await C_(e);if(y||!x.ok)return;let b=(x.body.executions??[]).find(h=>aM.has(h.status));if(!b)return;let m=await S_(e,b.id);if(y||!m.ok||!m.body.execution)return;u(m.body.execution),aM.has(m.body.execution.status)&&s(b.id)}catch{}})(),()=>{y=!0}},[e,u,s]),(0,Et.useEffect)(()=>(Ke.getState().setStartNodeExecution(x=>{d({mode:"single",nodeIds:[x]})}),()=>{Ke.getState().setStartNodeExecution(null)}),[d]),(0,Et.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:w}}var hl=E(Q(),1);function nM(e={}){let t=e.workspaceId,[a,o]=(0,hl.useState)({phase:"loading"}),[n,r]=(0,hl.useState)(()=>bc()),i=le(d=>d.hydrateGraph),l=le(d=>d.resetStore),s=le(d=>d.nodes.length),u=(0,hl.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,hl.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=le.getState(),p=r5(c.nodes);if(p.length===0)return;let g=await M_(p);if(d||!g.ok||!Array.isArray(g.body.items))return;let w=n5(c.nodes,g.body.items);!w.some((x,b)=>x!==c.nodes[b])||d||c.setNodes(w)}return(async()=>{try{if(x_().then(g=>{!d&&g.ok&&(r(g.body),gI(g.body))}),!t)return;let c=await dc(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await b_("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??nl("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),l()}},[t,i,l]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var Je=E(Q(),1);function rM(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}function wc(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function iM(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function l0(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)l0(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];vm(o)?delete t[a]:o&&typeof o=="object"&&l0(o)}}function q9(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=Wo(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=iM(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(vm(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=iM(o);return n?(vm(n.url)&&(typeof n.path=="string"&&n.path?n.url=Wo(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}l0(e)}function s0(e){return e.map(t=>{let a=t,o=wc(a.data);delete o.__catalog,q9(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=wc(a.style)),n})}function V9(e){let t=e,a=wc(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function d0(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=wc(a.data)),a.style&&typeof a.style=="object"&&(o.style=wc(a.style)),o})}function en(e,t){return JSON.stringify({nodes:s0(e).map(V9),edges:d0(t)})}var G9=1e3,j9=2500,X9=3e3;function js(){let{nodes:e,edges:t}=le.getState(),a=Nb(e,t);return{nodes:a.nodes,edges:a.edges}}function lM(e,t={}){let a=t.enabled!==!1,[o,n]=(0,Je.useState)("idle"),[r,i]=(0,Je.useState)(!1),l=(0,Je.useRef)(e),s=(0,Je.useRef)(0),u=(0,Je.useRef)(""),d=(0,Je.useRef)(0),f=(0,Je.useRef)(""),c=(0,Je.useRef)(null),p=(0,Je.useRef)(null),g=(0,Je.useRef)(!1),w=(0,Je.useRef)(a);w.current=a;let y=(0,Je.useRef)(t.onSaved);y.current=t.onSaved,(0,Je.useEffect)(()=>{l.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=en(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let x=()=>{p.current&&(clearTimeout(p.current),p.current=null)},b=(0,Je.useCallback)(async L=>{let _=l.current;if(!_){n("error");return}let T=await dc(_.id);if(!T.ok||!T.body.workspace){n("error");return}let R=T.body.workspace,z=rM({localSignature:en(L.localNodes,L.localEdges),lastSavedSignature:u.current,remoteSignature:en(R.nodes,R.edges)});if(s.current=R.version,z==="conflict"){n("conflict");return}u.current=en(R.nodes,R.edges),d.current=R.nodes.length,z==="reload"&&le.getState().hydrateGraph(R.nodes,R.edges),i(!1),n("idle"),y.current?.(R)},[]),m=(0,Je.useCallback)(async(L,_,T=!1)=>{let R=l.current;if(!R||!T&&!w.current||g.current)return;let z=dm({lastSavedNodeCount:d.current,nextNodes:L.nodes,nextEdges:L.edges,cause:_,lastSavedSignature:u.current,nextSignature:en(L.nodes,L.edges)});if(!z.persist||!z.snapshot)return;let{nodes:F,edges:k}=z.snapshot,N=R.name;g.current=!0,n("saving");try{let D=await y_(R.id,{name:N,nodes:s0(F),edges:d0(k),expectedVersion:s.current});if(D.status===409){await b({localNodes:F,localEdges:k});return}D.ok&&D.body.workspace?(s.current=D.body.workspace.version,u.current=en(F,k),d.current=F.length,i(!1),n("saved"),x(),p.current=setTimeout(()=>{n(M=>M==="saved"?"idle":M)},j9),y.current?.(D.body.workspace)):n("error")}catch{n("error")}finally{g.current=!1}},[b]);(0,Je.useEffect)(()=>{if(!a)return;let L=(T="autosave")=>{if(!l.current||!w.current)return;let z=js(),k=en(z.nodes,z.edges)!==u.current;if(i(k),!k){c.current&&(clearTimeout(c.current),c.current=null),n(A=>A==="pending"?"idle":A);return}let N=ic(z.nodes.length,T);if(!Mb({lastSavedNodeCount:d.current,nextNodeCount:z.nodes.length,cause:N})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(A=>A==="pending"?"idle":A);return}n(A=>A==="saving"||A==="conflict"?A:"pending"),c.current&&clearTimeout(c.current);let D={nodes:z.nodes,edges:z.edges},M=N;c.current=setTimeout(()=>{c.current=null,m(D,M)},G9)},_=le.subscribe(()=>{L("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,Je.useEffect)(()=>{if(!a)return;let L=()=>{if(!w.current||!l.current)return;let T=js(),R=ic(T.nodes.length,"flush"),z=dm({lastSavedNodeCount:d.current,nextNodes:T.nodes,nextEdges:T.edges,cause:R,lastSavedSignature:u.current,nextSignature:en(T.nodes,T.edges)});!z.persist||!z.snapshot||m(z.snapshot,R)};return window.addEventListener("pagehide",L),()=>{window.removeEventListener("pagehide",L),L(),x()}},[m,a]);let h=(0,Je.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let L=js();await m(L,ic(L.nodes.length,"autosave"))},[m]),v=(0,Je.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!l.current)return;let _=js(),T="flush",R=dm({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:T,lastSavedSignature:u.current,nextSignature:en(_.nodes,_.edges)});!R.persist||!R.snapshot||m(R.snapshot,T,!0)},[m]),C=(0,Je.useCallback)(async()=>{let L=js();await m(L,ic(L.nodes.length,"autosave"))},[m]),S=(0,Je.useCallback)(async()=>{let L=l.current;if(!L)return;let _=await dc(L.id);if(!_.ok||!_.body.workspace){n("error");return}let T=_.body.workspace;s.current=T.version,u.current=en(T.nodes,T.edges),d.current=T.nodes.length,le.getState().hydrateGraph(T.nodes,T.edges),i(!1),n("idle"),y.current?.(T)},[]);return(0,Je.useEffect)(()=>{if(!a)return;let L=!1,_=async()=>{if(L||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let R=l.current;if(!(!R||g.current)){L=!0;try{let z=await w_(R.id);if(!z.ok||typeof z.body.version!="number"||z.body.version<=s.current)return;let F=js();await b({localNodes:F.nodes,localEdges:F.edges})}catch{}finally{L=!1}}},T=setInterval(()=>{_()},X9);return()=>clearInterval(T)},[a,b]),{status:o,isDirty:r,saveNow:h,flushPendingSave:v,resolveConflict:C,reloadFromServer:S}}var ka=E(X(),1),Y9=({locale:e,workspaceId:t})=>{let a=fe(),o=(0,Xs.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=nM({workspaceId:t,beforeReset:()=>{o.current()}});(0,Xs.useEffect)(()=>{f_(e)},[e]);let l=n.phase==="ready"?n.workspace:null,s=(0,Xs.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=lM(l,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=oM(l?l.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,ka.jsx)("div",{className:"wf-canvas-root",children:(0,ka.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,ka.jsx)("div",{className:"wf-canvas-root",children:(0,ka.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,ka.jsx)("span",{children:n.message}),(0,ka.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,ka.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,ka.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,ka.jsx)("span",{children:a("app.conflictBanner")}),(0,ka.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,ka.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,ka.jsx)("main",{className:"wf-canvas-main",children:(0,ka.jsx)(tM,{catalog:i,workspaceId:l?.id??null,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},u0=Y9;var sM=`/* this gets exported as style.css and can be used for the default theming */
/* these are the necessary styles for React/Svelte Flow, they get used by base.css and style.css */
.react-flow {
  direction: ltr;

  --xy-edge-stroke-default: #b1b1b7;
  --xy-edge-stroke-width-default: 1;
  --xy-edge-stroke-selected-default: #555;

  --xy-connectionline-stroke-default: #b1b1b7;
  --xy-connectionline-stroke-width-default: 1;

  --xy-attribution-background-color-default: rgba(255, 255, 255, 0.5);

  --xy-minimap-background-color-default: #fff;
  --xy-minimap-mask-background-color-default: rgba(240, 240, 240, 0.6);
  --xy-minimap-mask-stroke-color-default: transparent;
  --xy-minimap-mask-stroke-width-default: 1;
  --xy-minimap-node-background-color-default: #e2e2e2;
  --xy-minimap-node-stroke-color-default: transparent;
  --xy-minimap-node-stroke-width-default: 2;

  --xy-background-color-default: transparent;
  --xy-background-pattern-dots-color-default: #91919a;
  --xy-background-pattern-lines-color-default: #eee;
  --xy-background-pattern-cross-color-default: #e2e2e2;
  background-color: var(--xy-background-color, var(--xy-background-color-default));
  --xy-node-color-default: inherit;
  --xy-node-border-default: 1px solid #1a192b;
  --xy-node-background-color-default: #fff;
  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);
  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, 0.08);
  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #1a192b;
  --xy-node-border-radius-default: 3px;

  --xy-handle-background-color-default: #1a192b;
  --xy-handle-border-color-default: #fff;

  --xy-selection-background-color-default: rgba(0, 89, 220, 0.08);
  --xy-selection-border-default: 1px dotted rgba(0, 89, 220, 0.8);

  --xy-controls-button-background-color-default: #fefefe;
  --xy-controls-button-background-color-hover-default: #f4f4f4;
  --xy-controls-button-color-default: inherit;
  --xy-controls-button-color-hover-default: inherit;
  --xy-controls-button-border-color-default: #eee;
  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);

  --xy-edge-label-background-color-default: #ffffff;
  --xy-edge-label-color-default: inherit;
  --xy-resize-background-color-default: #3367d9;
}
.react-flow.dark {
  --xy-edge-stroke-default: #3e3e3e;
  --xy-edge-stroke-width-default: 1;
  --xy-edge-stroke-selected-default: #727272;

  --xy-connectionline-stroke-default: #b1b1b7;
  --xy-connectionline-stroke-width-default: 1;

  --xy-attribution-background-color-default: rgba(150, 150, 150, 0.25);

  --xy-minimap-background-color-default: #141414;
  --xy-minimap-mask-background-color-default: rgba(60, 60, 60, 0.6);
  --xy-minimap-mask-stroke-color-default: transparent;
  --xy-minimap-mask-stroke-width-default: 1;
  --xy-minimap-node-background-color-default: #2b2b2b;
  --xy-minimap-node-stroke-color-default: transparent;
  --xy-minimap-node-stroke-width-default: 2;

  --xy-background-color-default: #141414;
  --xy-background-pattern-dots-color-default: #555;
  --xy-background-pattern-lines-color-default: #333;
  --xy-background-pattern-cross-color-default: #333;
  --xy-node-color-default: #f8f8f8;
  --xy-node-border-default: 1px solid #3c3c3c;
  --xy-node-background-color-default: #1e1e1e;
  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);
  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, 0.08);
  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #999;

  --xy-handle-background-color-default: #bebebe;
  --xy-handle-border-color-default: #1e1e1e;

  --xy-selection-background-color-default: rgba(200, 200, 220, 0.08);
  --xy-selection-border-default: 1px dotted rgba(200, 200, 220, 0.8);

  --xy-controls-button-background-color-default: #2b2b2b;
  --xy-controls-button-background-color-hover-default: #3e3e3e;
  --xy-controls-button-color-default: #f8f8f8;
  --xy-controls-button-color-hover-default: #fff;
  --xy-controls-button-border-color-default: #5b5b5b;
  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);

  --xy-edge-label-background-color-default: #141414;
  --xy-edge-label-color-default: #f8f8f8;
}
.react-flow__background {
  background-color: var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));
  pointer-events: none;
  z-index: -1;
}
.react-flow__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.react-flow__pane {
  z-index: 1;
  touch-action: none;
}
.react-flow__pane.draggable {
    cursor: grab;
  }
.react-flow__pane.dragging {
    cursor: grabbing;
  }
.react-flow__pane.selection {
    cursor: pointer;
  }
.react-flow__viewport {
  transform-origin: 0 0;
  z-index: 2;
  pointer-events: none;
}
.react-flow__renderer {
  z-index: 4;
}
.react-flow__selection {
  z-index: 6;
}
.react-flow__nodesselection-rect:focus,
.react-flow__nodesselection-rect:focus-visible {
  outline: none;
}
.react-flow__edge-path {
  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
  stroke-width: var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));
  fill: none;
}
.react-flow__connection-path {
  stroke: var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));
  stroke-width: var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));
  fill: none;
}
.react-flow .react-flow__edges {
  position: absolute;
}
.react-flow .react-flow__edges svg {
    overflow: visible;
    position: absolute;
    pointer-events: none;
  }
.react-flow__edge {
  pointer-events: visibleStroke;
}
.react-flow__edge.selectable {
    cursor: pointer;
  }
.react-flow__edge.animated path {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }
.react-flow__edge.animated path.react-flow__edge-interaction {
    stroke-dasharray: none;
    animation: none;
  }
.react-flow__edge.inactive {
    pointer-events: none;
  }
.react-flow__edge.selected,
  .react-flow__edge:focus,
  .react-flow__edge:focus-visible {
    outline: none;
  }
.react-flow__edge.selected .react-flow__edge-path,
  .react-flow__edge.selectable:focus .react-flow__edge-path,
  .react-flow__edge.selectable:focus-visible .react-flow__edge-path {
    stroke: var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default));
  }
.react-flow__edge-textwrapper {
    pointer-events: all;
  }
.react-flow__edge .react-flow__edge-text {
    pointer-events: none;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
/* Arrowhead marker styles - use CSS custom properties as default */
.react-flow__arrowhead polyline {
  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
}
.react-flow__arrowhead polyline.arrowclosed {
  fill: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
}
.react-flow__connection {
  pointer-events: none;
}
.react-flow__connection .animated {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }
svg.react-flow__connectionline {
  z-index: 1001;
  overflow: visible;
  position: absolute;
}
.react-flow__nodes {
  pointer-events: none;
  transform-origin: 0 0;
}
.react-flow__node {
  position: absolute;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  pointer-events: all;
  transform-origin: 0 0;
  box-sizing: border-box;
  cursor: default;
}
.react-flow__node.selectable {
    cursor: pointer;
  }
.react-flow__node.draggable {
    cursor: grab;
    pointer-events: all;
  }
.react-flow__node.draggable.dragging {
      cursor: grabbing;
    }
.react-flow__nodesselection {
  z-index: 3;
  transform-origin: left top;
  pointer-events: none;
}
.react-flow__nodesselection-rect {
    position: absolute;
    pointer-events: all;
    cursor: grab;
  }
.react-flow__handle {
  position: absolute;
  pointer-events: none;
  min-width: 5px;
  min-height: 5px;
  width: 6px;
  height: 6px;
  background-color: var(--xy-handle-background-color, var(--xy-handle-background-color-default));
  border: 1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));
  border-radius: 100%;
}
.react-flow__handle.connectingfrom {
    pointer-events: all;
  }
.react-flow__handle.connectionindicator {
    pointer-events: all;
    cursor: crosshair;
  }
.react-flow__handle-bottom {
    top: auto;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }
.react-flow__handle-top {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
.react-flow__handle-left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
.react-flow__handle-right {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
.react-flow__edgeupdater {
  cursor: move;
  pointer-events: all;
}
.react-flow__pane.selection .react-flow__panel {
  pointer-events: none;
}
.react-flow__panel {
  position: absolute;
  z-index: 5;
  margin: 15px;
}
.react-flow__panel.top {
    top: 0;
  }
.react-flow__panel.bottom {
    bottom: 0;
  }
.react-flow__panel.top.center, .react-flow__panel.bottom.center {
      left: 50%;
      transform: translateX(-15px) translateX(-50%);
    }
.react-flow__panel.left {
    left: 0;
  }
.react-flow__panel.right {
    right: 0;
  }
.react-flow__panel.left.center, .react-flow__panel.right.center {
      top: 50%;
      transform: translateY(-15px) translateY(-50%);
    }
.react-flow__attribution {
  font-size: 10px;
  background: var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));
  padding: 2px 3px;
  margin: 0;
}
.react-flow__attribution a {
    text-decoration: none;
    color: #999;
  }
@keyframes dashdraw {
  from {
    stroke-dashoffset: 10;
  }
}
.react-flow__edgelabel-renderer {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  left: 0;
  top: 0;
}
.react-flow__viewport-portal {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.react-flow__minimap {
  background: var(
    --xy-minimap-background-color-props,
    var(--xy-minimap-background-color, var(--xy-minimap-background-color-default))
  );
}
.react-flow__minimap-svg {
    display: block;
  }
.react-flow__minimap-mask {
    fill: var(
      --xy-minimap-mask-background-color-props,
      var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default))
    );
    stroke: var(
      --xy-minimap-mask-stroke-color-props,
      var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default))
    );
    stroke-width: var(
      --xy-minimap-mask-stroke-width-props,
      var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default))
    );
  }
.react-flow__minimap-node {
    fill: var(
      --xy-minimap-node-background-color-props,
      var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default))
    );
    stroke: var(
      --xy-minimap-node-stroke-color-props,
      var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default))
    );
    stroke-width: var(
      --xy-minimap-node-stroke-width-props,
      var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default))
    );
  }
.react-flow__background-pattern.dots {
    fill: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default))
    );
  }
.react-flow__background-pattern.lines {
    stroke: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default))
    );
  }
.react-flow__background-pattern.cross {
    stroke: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default))
    );
  }
.react-flow__controls {
  display: flex;
  flex-direction: column;
  box-shadow: var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default));
}
.react-flow__controls.horizontal {
    flex-direction: row;
  }
.react-flow__controls-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    padding: 4px;
    border: none;
    background: var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));
    border-bottom: 1px solid
      var(
        --xy-controls-button-border-color-props,
        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))
      );
    color: var(
      --xy-controls-button-color-props,
      var(--xy-controls-button-color, var(--xy-controls-button-color-default))
    );
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
.react-flow__controls-button svg {
      width: 100%;
      max-width: 12px;
      max-height: 12px;
      fill: currentColor;
    }
.react-flow__edge.updating .react-flow__edge-path {
      stroke: #777;
    }
.react-flow__edge-text {
    font-size: 10px;
  }
.react-flow__node.selectable:focus,
  .react-flow__node.selectable:focus-visible {
    outline: none;
  }
.react-flow__node-input,
.react-flow__node-default,
.react-flow__node-output,
.react-flow__node-group {
  padding: 10px;
  border-radius: var(--xy-node-border-radius, var(--xy-node-border-radius-default));
  width: 150px;
  font-size: 12px;
  color: var(--xy-node-color, var(--xy-node-color-default));
  text-align: center;
  border: var(--xy-node-border, var(--xy-node-border-default));
  background-color: var(--xy-node-background-color, var(--xy-node-background-color-default));
}
.react-flow__node-input.selectable:hover, .react-flow__node-default.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {
      box-shadow: var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default));
    }
.react-flow__node-input.selectable.selected,
    .react-flow__node-input.selectable:focus,
    .react-flow__node-input.selectable:focus-visible,
    .react-flow__node-default.selectable.selected,
    .react-flow__node-default.selectable:focus,
    .react-flow__node-default.selectable:focus-visible,
    .react-flow__node-output.selectable.selected,
    .react-flow__node-output.selectable:focus,
    .react-flow__node-output.selectable:focus-visible,
    .react-flow__node-group.selectable.selected,
    .react-flow__node-group.selectable:focus,
    .react-flow__node-group.selectable:focus-visible {
      box-shadow: var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default));
    }
.react-flow__node-group {
  background-color: var(--xy-node-group-background-color, var(--xy-node-group-background-color-default));
}
.react-flow__nodesselection-rect,
.react-flow__selection {
  background: var(--xy-selection-background-color, var(--xy-selection-background-color-default));
  border: var(--xy-selection-border, var(--xy-selection-border-default));
}
.react-flow__nodesselection-rect:focus,
  .react-flow__nodesselection-rect:focus-visible,
  .react-flow__selection:focus,
  .react-flow__selection:focus-visible {
    outline: none;
  }
.react-flow__controls-button:hover {
      background: var(
        --xy-controls-button-background-color-hover-props,
        var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default))
      );
      color: var(
        --xy-controls-button-color-hover-props,
        var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default))
      );
    }
.react-flow__controls-button:disabled {
      pointer-events: none;
    }
.react-flow__controls-button:disabled svg {
        fill-opacity: 0.4;
      }
.react-flow__controls-button:last-child {
    border-bottom: none;
  }
.react-flow__controls.horizontal .react-flow__controls-button {
    border-bottom: none;
    border-right: 1px solid
      var(
        --xy-controls-button-border-color-props,
        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))
      );
  }
.react-flow__controls.horizontal .react-flow__controls-button:last-child {
    border-right: none;
  }
.react-flow__resize-control {
  position: absolute;
}
.react-flow__resize-control.left,
.react-flow__resize-control.right {
  cursor: ew-resize;
}
.react-flow__resize-control.top,
.react-flow__resize-control.bottom {
  cursor: ns-resize;
}
.react-flow__resize-control.top.left,
.react-flow__resize-control.bottom.right {
  cursor: nwse-resize;
}
.react-flow__resize-control.bottom.left,
.react-flow__resize-control.top.right {
  cursor: nesw-resize;
}
/* handle styles */
.react-flow__resize-control.handle {
  width: 5px;
  height: 5px;
  border: 1px solid #fff;
  border-radius: 1px;
  background-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));
  translate: -50% -50%;
}
.react-flow__resize-control.handle.left {
  left: 0;
  top: 50%;
}
.react-flow__resize-control.handle.right {
  left: 100%;
  top: 50%;
}
.react-flow__resize-control.handle.top {
  left: 50%;
  top: 0;
}
.react-flow__resize-control.handle.bottom {
  left: 50%;
  top: 100%;
}
.react-flow__resize-control.handle.top.left {
  left: 0;
}
.react-flow__resize-control.handle.bottom.left {
  left: 0;
}
.react-flow__resize-control.handle.top.right {
  left: 100%;
}
.react-flow__resize-control.handle.bottom.right {
  left: 100%;
}
/* line styles */
.react-flow__resize-control.line {
  border-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));
  border-width: 0;
  border-style: solid;
}
.react-flow__resize-control.line.left,
.react-flow__resize-control.line.right {
  width: 1px;
  transform: translate(-50%, 0);
  top: 0;
  height: 100%;
}
.react-flow__resize-control.line.left {
  left: 0;
  border-left-width: 1px;
}
.react-flow__resize-control.line.right {
  left: 100%;
  border-right-width: 1px;
}
.react-flow__resize-control.line.top,
.react-flow__resize-control.line.bottom {
  height: 1px;
  transform: translate(0, -50%);
  left: 0;
  width: 100%;
}
.react-flow__resize-control.line.top {
  top: 0;
  border-top-width: 1px;
}
.react-flow__resize-control.line.bottom {
  border-bottom-width: 1px;
  top: 100%;
}
.react-flow__edge-textbg {
  fill: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));
}
.react-flow__edge-text {
  fill: var(--xy-edge-label-color, var(--xy-edge-label-color-default));
}
`;var dM=`/**
 * omnimux-workflow canvas island theme \u2014 the --wb-* token layer.
 *
 * Skin mechanism (validated by the spike): every canvas color references a
 * --wb-* variable; --wb-* values in turn reference the host's --dsw-* design
 * tokens, so the island follows the host theme (including
 * body[data-ds-dark-theme]) with zero React coupling. Fallbacks pin the dsh
 * brand blue #4176E6 (--dsw-static-deepseek-500) for standalone runs.
 */

.wf-canvas-root {
  /* brand accent \u2014 the single skin switch */
  --wb-accent: var(--dsw-static-deepseek-500, #4176E6);
  --wb-accent-hover: var(--dsw-static-deepseek-400, #679EFE);
  --wb-accent-soft: color-mix(in srgb, var(--wb-accent) 12%, transparent);
  /* \u54C1\u724C\u8272\u53EA\u505A\u54C1\u724C\u5F3A\u8C03\uFF0C\u4E0D\u505A\u72B6\u6001\u8272\uFF08\u8367\u5149\u7EFF\u767D\u5E95\u5BF9\u6BD4\u5EA6\u4E0D\u8FBE\u6807\uFF09 */
  --wb-brand-lime: #C8F135; /* OmniMux lime */
  /* \u8BED\u4E49\u72B6\u6001\u8272\uFF1AAA \u8FBE\u6807\uFF08\u767D\u5E95 \u2265 4.5:1\uFF09 */
  --wb-success: #2e9e5b;
  --wb-success-soft: color-mix(in srgb, var(--wb-success) 12%, transparent);
  --wb-warning: #b8860b;
  --wb-danger: #ef4444;

  /* surfaces */
  --wb-bg: var(--dsw-alias-bg-primary, #F7F8FA);
  --wb-bg-canvas: var(--dsw-alias-bg-secondary, #F3F4F7);
  --wb-surface: var(--dsw-alias-bg-primary, #ffffff);
  --wb-surface-raised: var(--dsw-alias-bg-secondary, #fbfbfc);
  --wb-border: var(--dsw-alias-border, rgba(15, 20, 32, 0.08));
  --wb-border-strong: var(--dsw-alias-border-strong, rgba(15, 20, 32, 0.16));

  /* text */
  --wb-text-primary: var(--dsw-alias-label-primary, #1a1d26);
  --wb-text-secondary: var(--dsw-alias-label-secondary, #5f6472);
  --wb-text-muted: var(--dsw-alias-label-tertiary, #9aa0ae);

  /* canvas chrome */
  --wb-edge: #b1b1b7;
  --wb-grid-dot: #C9CBD6;

  /* node card tokens (W1 Gxgen alignment) */
  --wb-node-text-strong: var(--wb-text-secondary);
  --wb-node-text-muted: var(--wb-text-muted);
  --wb-node-ring: var(--dsw-alias-label-primary, #000000);
  --wb-node-radius: 20px;
  --wb-danger-soft: color-mix(in srgb, var(--wb-danger) 12%, transparent);
  /* \u8FDE\u7EBF\u7269\u7406\u6D41\u5149 token\uFF08\u975E\u84DD\uFF0C\u53CC\u4E3B\u9898\u81EA\u9002\u5E94\uFF1A\u6D45\u8272\u68EE\u6797\u7FE0\u7EFF/\u8584\u8377\uFF0C\u6DF1\u8272\u7535\u5149\u8367\u5149\u7EFF/\u7FE1\u7FE0\uFF09 */
  --wb-beam-start: #047857; /* \u6D45\u8272\u7AEF\u70B9 1\uFF1A\u6DF1\u7FE1\u7FE0\u7EFF\uFF08\u5BF9\u6BD4\u5EA6 \u2265 4.5:1\uFF09 */
  --wb-beam-end: #10B981;   /* \u6D45\u8272\u7AEF\u70B9 2\uFF1A\u9AD8\u4EAE\u8584\u8377\u7EFF */
  --wb-beam-glow: rgba(5, 150, 105, 0.35);
  --wb-beam-glow-secondary: rgba(16, 185, 129, 0.4);
  --wb-beam-track: rgba(0, 0, 0, 0.08);

  /* Modern Floating Dock & Capsule Header tokens */
  --wb-dock-bg: rgba(255, 255, 255, 0.88);
  --wb-dock-blur: blur(16px);
  --wb-dock-shadow: 0 16px 36px -4px rgba(15, 20, 32, 0.12), 0 0 0 1px rgba(15, 20, 32, 0.06);
  --wb-dock-radius: 28px;
  --wb-dock-item-hover: rgba(0, 0, 0, 0.05);

  --wb-header-capsule-bg: rgba(255, 255, 255, 0.92);
  --wb-header-capsule-shadow: 0 8px 24px -2px rgba(15, 20, 32, 0.08), 0 0 0 1px rgba(15, 20, 32, 0.05);
  --wb-header-radius: 18px;

  --wb-pill-bg: var(--dsw-alias-bg-secondary, #F4F5F8);
  --wb-pill-hover: var(--dsw-alias-bg-tertiary, #E8EAEE);
  --wb-pill-radius: 12px;
  --wb-pill-text: var(--wb-text-secondary);

  /* config panel shell tokens (W2; \u6765\u6E90 Gxgen ConfigPanelShell.tsx:19-22,45-46) */
  --wb-panel-outer: var(--dsw-alias-bg-secondary, #f5f5f5);
  --wb-panel-inner: var(--dsw-alias-bg-primary, #ffffff);
  --wb-panel-shadow:
    rgba(0, 0, 0, 0.05) 0 0 0 1px,
    rgba(0, 0, 0, 0.04) 0 10px 10px -5px,
    rgba(0, 0, 0, 0.04) 0 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0 20px 32px -12px;

  /* elevation tokens \u2014 \u5361\u7247 / \u6D6E\u5C42\u4E24\u6863\uFF0C\u6563\u5199\u9634\u5F71\u6536\u655B\u5230\u8FD9\u91CC */
  --wb-shadow-card: 0 8px 24px rgba(15, 20, 32, 0.06);
  --wb-shadow-card-hover: 0 12px 32px rgba(15, 20, 32, 0.1);
  --wb-shadow-pop: 0 12px 32px rgba(15, 20, 32, 0.16);

  /* typography tokens \u2014 4 \u6863\u5B57\u53F7\u9636\u68AF + \u5355\u70B9\u5B57\u4F53\u6808 */
  --wb-fs-caption: 11px;
  --wb-fs-body: 13px;
  --wb-fs-title: 14px;
  --wb-fs-icon: 18px;
  --wb-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;

  /* Organic Shimmer Token System (Transitions.dev \u6D41\u4F53\u5FAE\u5149) */
  --wf-shimmer-dur: 5000ms;
  --wf-shimmer-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --wf-shimmer-band-factor: 26%;
  --wf-shimmer-band: calc(var(--wf-shimmer-band-factor) * 0.848);
  --wf-shimmer-bg-opacity: 1;
  --wf-shimmer-glow-blur: 20px;
  --wf-shimmer-glow-opacity: 0.75;
  --wf-shimmer-border-opacity: 1;
  --wf-shimmer-stage-bg: var(--wb-surface-raised, #fbfbfc);
  --wf-shimmer-stage-rgb: 245, 245, 248;
  --wf-shimmer-svg-light: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22wf_shm_g%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%22600%22%20y2%3D%22600%22%3E%3Cstop%20offset%3D%220.0000%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%221%22%2F%3E%3Cstop%20offset%3D%220.3236%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%221%22%2F%3E%3Cstop%20offset%3D%220.4008%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%220.75%22%2F%3E%3Cstop%20offset%3D%220.4603%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%220.3%22%2F%3E%3Cstop%20offset%3D%220.5000%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%220.5397%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%220.3%22%2F%3E%3Cstop%20offset%3D%220.5992%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%220.75%22%2F%3E%3Cstop%20offset%3D%220.6764%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%221%22%2F%3E%3Cstop%20offset%3D%221.0000%22%20stop-color%3D%22%23eeeeee%22%20stop-opacity%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22wf_shm_w%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.009%200.015%22%20numOctaves%3D%222%22%20seed%3D%227%22%20result%3D%22n%22%2F%3E%3CfeDisplacementMap%20in%3D%22SourceGraphic%22%20in2%3D%22n%22%20scale%3D%2246%22%20xChannelSelector%3D%22R%22%20yChannelSelector%3D%22G%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20x%3D%22-70%22%20y%3D%22-70%22%20width%3D%22740%22%20height%3D%22740%22%20fill%3D%22url(%23wf_shm_g)%22%20filter%3D%22url(%23wf_shm_w)%22%2F%3E%3C%2Fsvg%3E");
  --wf-shimmer-svg-dark: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22wf_shm_g%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%22600%22%20y2%3D%22600%22%3E%3Cstop%20offset%3D%220.0000%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%221%22%2F%3E%3Cstop%20offset%3D%220.3236%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%221%22%2F%3E%3Cstop%20offset%3D%220.4008%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%220.75%22%2F%3E%3Cstop%20offset%3D%220.4603%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%220.3%22%2F%3E%3Cstop%20offset%3D%220.5000%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%220.5397%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%220.3%22%2F%3E%3Cstop%20offset%3D%220.5992%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%220.75%22%2F%3E%3Cstop%20offset%3D%220.6764%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%221%22%2F%3E%3Cstop%20offset%3D%221.0000%22%20stop-color%3D%22%23222226%22%20stop-opacity%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22wf_shm_w%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.009%200.015%22%20numOctaves%3D%222%22%20seed%3D%227%22%20result%3D%22n%22%2F%3E%3CfeDisplacementMap%20in%3D%22SourceGraphic%22%20in2%3D%22n%22%20scale%3D%2246%22%20xChannelSelector%3D%22R%22%20yChannelSelector%3D%22G%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20x%3D%22-70%22%20y%3D%22-70%22%20width%3D%22740%22%20height%3D%22740%22%20fill%3D%22url(%23wf_shm_g)%22%20filter%3D%22url(%23wf_shm_w)%22%2F%3E%3C%2Fsvg%3E");
  --wf-shimmer-svg-url: var(--wf-shimmer-svg-light);

  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--wb-bg);
  color: var(--wb-text-primary);
  font-family: var(--wb-font-family);
}

/* Dark-theme following: --dsw-alias-* tokens already flip with
   body[data-ds-dark-theme]; these explicit fallback swaps keep the island
   correct even when host tokens are absent (standalone dev harness). */
body[data-ds-dark-theme] .wf-canvas-root {
  --wb-bg: #141416;
  --wb-bg-canvas: #101012;
  --wb-surface: #1b1b1e;
  --wb-surface-raised: #222226;
  --wb-border: rgba(250, 250, 250, 0.1);
  --wb-border-strong: rgba(250, 250, 250, 0.2);
  --wb-text-primary: #f5f5f5;
  --wb-text-secondary: #a1a1aa;
  --wb-text-muted: #71717a;
  --wb-grid-dot: #2e2e33;
  /* \u8BED\u4E49\u8272\u6697\u8272\u7FFB\u8F6C\uFF08\u5BF9\u6BD4\u5EA6 \u2265 4.5:1\uFF09 */
  --wb-success: #4cc38a;
  --wb-warning: #e5c07b;
  /* \u9634\u5F71\u6697\u8272\u7FFB\u8F6C */
  --wb-shadow-card: 0 8px 24px rgba(0, 0, 0, 0.3);
  --wb-shadow-card-hover: 0 12px 32px rgba(0, 0, 0, 0.36);
  --wb-shadow-pop: 0 12px 32px rgba(0, 0, 0, 0.4);

  /* floating dock & header dark */
  --wb-dock-bg: rgba(26, 27, 30, 0.88);
  --wb-dock-shadow: 0 16px 36px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
  --wb-dock-item-hover: rgba(255, 255, 255, 0.08);
  --wb-header-capsule-bg: rgba(26, 27, 30, 0.92);
  --wb-header-capsule-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06);
  --wb-pill-bg: #232328;
  --wb-pill-hover: #2c2c33;
  /* panel shell dark fallbacks\uFF08\u5BBF\u4E3B --dsw-alias-* \u81EA\u8EAB\u7FFB\u8F6C\u662F\u4E3B\u8DEF\u5F84\uFF09 */
  --wb-panel-outer: var(--dsw-alias-bg-secondary, #1a1a24);
  --wb-panel-inner: var(--dsw-alias-bg-primary, #1f1f2b);
  --wb-panel-shadow:
    rgba(255, 255, 255, 0.05) 0 0 0 1px,
    rgba(0, 0, 0, 0.3) 0 10px 10px -5px,
    rgba(0, 0, 0, 0.3) 0 20px 25px -5px,
    rgba(0, 0, 0, 0.3) 0 20px 32px -12px;
  /* \u8FDE\u7EBF\u7269\u7406\u6D41\u5149\u6697\u8272\u7FFB\u8F6C\uFF1AOmniMux \u7535\u5149\u8367\u5149\u7EFF + \u7FE1\u7FE0\u7FE0\u7EFF\uFF0C\u65E0\u84DD\u8272 */
  --wb-beam-start: #D4FF38;
  --wb-beam-end: #10B981;
  --wb-beam-glow: rgba(212, 255, 56, 0.45);
  --wb-beam-glow-secondary: rgba(16, 185, 129, 0.6);
  --wb-beam-track: rgba(255, 255, 255, 0.12);
  /* \u8282\u70B9\u9009\u4E2D/\u9AD8\u4EAE\u8FB9\u6846\u7EBF\u6697\u8272\u81EA\u9002\u5E94\uFF1A\u767D\u8272\u8FB9\u6846 */
  --wb-node-ring: var(--dsw-alias-label-primary, #ffffff);

  /* Organic Shimmer dark cascade */
  --wf-shimmer-stage-bg: var(--wb-surface-raised, #222226);
  --wf-shimmer-stage-rgb: 34, 34, 38;
  --wf-shimmer-svg-url: var(--wf-shimmer-svg-dark);
  /* node tokens (--wb-node-*/--wb-danger-soft/--wb-beam-*) reference the
     vars above, so they flip automatically \u2014 no JS isDark branch. */
}

/* ==================== island header ==================== */

.wf-canvas-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--wb-border);
  background: var(--wb-surface);
  flex-shrink: 0;
}

.wf-canvas-header__title {
  font-size: var(--wb-fs-title);
  font-weight: 600;
}

.wf-canvas-header__spacer {
  flex: 1;
}

.wf-canvas-header__button {
  font-size: var(--wb-fs-caption);
  padding: 5px 12px;
  border-radius: 8px;
  border: 1px solid var(--wb-accent);
  color: var(--wb-accent);
  background: var(--wb-accent-soft);
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-canvas-header__button:hover {
  background: var(--wb-accent);
  color: #fff;
}

.wf-canvas-header__button:disabled {
  opacity: 0.5;
  cursor: default;
}

.wf-canvas-header__button--ghost {
  border-color: var(--wb-border-strong);
  color: var(--wb-text-secondary);
  background: transparent;
}

.wf-canvas-header__button--ghost:hover {
  background: var(--wb-surface-raised);
  color: var(--wb-text-primary);
}

.wf-canvas-main {
  flex: 1;
  min-height: 0;
  position: relative;
}

/* ==================== React Flow theme overrides ==================== */

.wf-canvas-root .react-flow {
  background: var(--wb-bg-canvas);
}

.wf-canvas-root .react-flow__edge-path {
  stroke: var(--wb-edge);
}

.wf-canvas-root .react-flow__edge.selected .react-flow__edge-path {
  stroke: var(--wb-accent);
  stroke-width: 2.5;
}

.wf-canvas-root .react-flow__handle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--wb-surface);
  border: 2px solid var(--wb-accent);
  transition: transform 120ms ease, background 120ms ease;
}

.wf-canvas-root .react-flow__handle:hover {
  background: var(--wb-accent);
  transform: scale(1.25);
}

.wf-canvas-root .react-flow__node {
  outline: none;
}

.wf-canvas-root .react-flow__controls {
  box-shadow: var(--wb-shadow-card-hover);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--wb-border);
}

.wf-canvas-root .react-flow__controls-button {
  background: var(--wb-surface);
  border-bottom: 1px solid var(--wb-border);
  color: var(--wb-text-secondary);
}

.wf-canvas-root .react-flow__controls-button:hover {
  background: var(--wb-surface-raised);
}

.wf-canvas-root .react-flow__controls-button svg {
  fill: var(--wb-text-secondary);
}

.wf-canvas-root .react-flow__minimap {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--wb-border);
  background: var(--wb-surface);
}

.wf-canvas-root .react-flow__minimap-mask {
  fill: color-mix(in srgb, var(--wb-bg-canvas) 70%, transparent);
}

.wf-canvas-root .react-flow__minimap-node {
  fill: var(--wb-accent-soft);
  stroke: var(--wb-accent);
}

.wf-canvas-root .react-flow__selection {
  background: var(--wb-accent-soft);
  border: 1px dashed var(--wb-accent);
}

/* ==================== toolbar / bottom floating dock ==================== */

.wf-canvas-toolbar {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 20;
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--wb-dock-bg);
  backdrop-filter: var(--wb-dock-blur);
  border: 1px solid var(--wb-border);
  border-radius: var(--wb-dock-radius);
  box-shadow: var(--wb-dock-shadow);
  user-select: none;
}

.wf-canvas-toolbar__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 36px;
  padding: 0 10px;
  border: none;
  border-radius: 18px;
  background: transparent;
  cursor: pointer;
  color: var(--wb-text-secondary);
  transition: all 150ms ease;
}

.wf-canvas-toolbar__item:hover {
  background: var(--wb-dock-item-hover);
  color: var(--wb-text-primary);
}

.wf-canvas-toolbar__item--active {
  background: var(--wb-dock-item-hover);
  color: var(--wb-text-primary);
  font-weight: 500;
}

.wf-canvas-toolbar__item--primary-add {
  background: #18191c;
  color: #ffffff;
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.wf-canvas-toolbar__item--primary-add:hover {
  background: #2b2d33;
  color: #ffffff;
  transform: scale(1.05);
}

body[data-ds-dark-theme] .wf-canvas-toolbar__item--primary-add {
  background: #ffffff;
  color: #18191c;
}

body[data-ds-dark-theme] .wf-canvas-toolbar__item--primary-add:hover {
  background: #e4e4e7;
  color: #18191c;
}

.wf-canvas-toolbar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-canvas-toolbar__label {
  font-size: var(--wb-fs-body);
}

.wf-canvas-toolbar__divider {
  width: 1px;
  height: 20px;
  background: var(--wb-border-strong);
  margin: 0 2px;
}

.wf-canvas-toolbar__item--icon-only {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-canvas-toolbar__item--icon-only .wf-canvas-toolbar__label {
  display: none;
}

`;var uM=`/**
 * components.css \u2014\u2014 \u7EC4\u4EF6\u5C42\u6837\u5F0F\uFF08\u4ECE workbench-theme.css \u62C6\u51FA\uFF0C\u8BA1\u5212 \xA76\uFF1A
 * \u5355\u6587\u4EF6\u8D85 1500 \u884C\u9608\u503C\u65F6\u62C6\u5206\uFF09\u3002\u6CE8\u5165\u987A\u5E8F\u5728 injectStyles.ts \u6570\u7EC4\u5316\uFF1A
 * xyflow base \u2192 theme\uFF08token/\u58F3/RF \u8986\u76D6\uFF09\u2192 components\uFF08\u672C\u6587\u4EF6\uFF09\u3002
 * \u62C6\u5206\u70B9 = \u539F theme:273\u300Cmaterial node\u300D\u5757\u8D77\uFF0C\u76F8\u5BF9\u987A\u5E8F\u4E0D\u53D8\u3002
 */

/* ==================== material node ==================== */

.wf-material-node {
  position: relative;
}

/* node header\uFF08\u6765\u6E90 Gxgen MaterialNode/components/NodeHeader.tsx:132-172\uFF09
   \u7EDD\u5BF9\u5B9A\u4F4D\u4E8E\u5361\u7247\u4E0A\u65B9\uFF0C\u7EC4\u4EF6\u5185\u8054 top/transform \u5B9E\u73B0\u53CD\u7F29\u653E\u6052\u5B9A\u5C3A\u5BF8 */
.wf-node-header {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 4px;
  max-width: 100%;
  white-space: nowrap;
  z-index: 10;
  font-size: var(--wb-fs-title);
  color: var(--wb-node-text-muted);
}

.wf-node-header__icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-node-header__label {
  display: inline-block;
  cursor: text;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
  vertical-align: middle;
  transition: color 150ms ease;
}

.wf-node-header__label:hover {
  color: var(--wb-node-text-strong);
}

.wf-node-header__input {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--wb-node-ring);
  outline: none;
  font-size: var(--wb-fs-title);
  color: var(--wb-node-text-strong);
  min-width: 60px;
  max-width: 180px;
  padding: 0;
}

.wf-material-node__badge {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.wf-material-node__badge--running {
  background: var(--wb-accent);
  animation: wf-pulse 1.2s ease-in-out infinite;
}

.wf-material-node__badge--done {
  background: var(--wb-success);
}

.wf-material-node__badge--failed {
  background: var(--wb-danger);
}

.wf-material-node__badge--offline {
  background: var(--dsw-alias-warning, var(--wb-warning));
}

.wf-media-offline {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  background: color-mix(in srgb, var(--dsw-alias-warning, var(--wb-warning)) 8%, transparent);
}

.wf-media-offline__icon {
  color: var(--dsw-alias-warning, var(--wb-warning));
}

.wf-media-offline__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, var(--wb-text-primary));
}

.wf-media-offline__hint {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--wb-text-muted));
}

.wf-media-offline__relink {
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l1, var(--wb-border));
  background: var(--dsw-alias-bg-elevated, var(--wb-surface));
  color: var(--dsw-alias-label-primary, var(--wb-text-primary));
  cursor: pointer;
}

@keyframes wf-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.75); }
}

.wf-material-node__card {
  position: relative;
  border-radius: 18px;
  border: 1px solid var(--wb-border);
  /* \u5361\u7247\u5E95\u5BF9\u9F50 Gxgen bg-[color-mix(--gx-page-bg-card 82%)]\uFF08MaterialNode.tsx:687\uFF09 */
  background: color-mix(in srgb, var(--wb-surface) 82%, transparent);
  backdrop-filter: blur(12px);
  box-shadow: var(--wb-shadow-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.wf-material-node:hover .wf-material-node__card {
  box-shadow: var(--wb-shadow-card-hover);
}

/* \u9009\u4E2D\u73AF\u5BF9\u9F50 Gxgen ring-2 ring-inset ring-primary\uFF08MaterialNode.tsx:783\uFF09\uFF1A
   inset ring \u7528 --wb-node-ring\uFF08\u9ED1\u767D\u53CC\u8272\u4E3B\u9898\u81EA\u9002\u5E94\uFF09\u3002
   \u53CC\u7C7B\u5199\u6CD5\u628A\u4F18\u5148\u7EA7\u62AC\u5230\u4E0E hover \u89C4\u5219\u540C\u7EA7\u5E76\u9760\u540E\u58F0\u660E\uFF0Chover+selected \u65F6
   \u9009\u4E2D\u73AF\u4E0D\u88AB hover \u9634\u5F71\u8986\u76D6\u3002 */
.wf-material-node.wf-material-node--selected .wf-material-node__card {
  border-color: var(--wb-node-ring);
  box-shadow:
    inset 0 0 0 2px var(--wb-node-ring),
    var(--wb-shadow-card-hover);
}

.wf-material-node__card--dragover {
  border-color: var(--wb-accent) !important;
  box-shadow:
    inset 0 0 0 2px var(--wb-accent),
    0 0 16px rgba(59, 130, 246, 0.3) !important;
}

/* \u5BFC\u5165\u7D20\u6750\u8282\u70B9\uFF1A\u5361\u7247\u5185\u4FA7\u53F3\u4E0A\u89D2\u300C\u66FF\u6362\u300D\u6309\u94AE */
.wf-material-node__replace-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 12;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid var(--dsw-alias-border-l1, var(--wb-border));
  background: color-mix(in srgb, var(--dsw-alias-bg-elevated, var(--wb-surface)) 88%, transparent);
  color: var(--dsw-alias-label-primary, var(--wb-text-primary));
  font-size: 12px;
  font-weight: 500;
  backdrop-filter: blur(8px);
  cursor: pointer;
}

.wf-material-node__replace-btn:hover {
  border-color: var(--dsw-alias-border-l2, var(--wb-border));
  background: var(--dsw-alias-bg-elevated, var(--wb-surface));
}

/* \u9009\u4E2D\u8282\u70B9\u7684\u56DB\u89D2\u65B9\u5F62\u7F29\u653E\u951A\u70B9\uFF08\u5BF9\u9F50\u8BBE\u8BA1\uFF09 */
.wf-node-corner {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--wb-surface);
  border: 1px solid var(--wb-node-ring);
  z-index: 20;
  pointer-events: none;
}

.wf-node-corner--tl { top: -3px; left: -3px; }
.wf-node-corner--tr { top: -3px; right: -3px; }
.wf-node-corner--bl { bottom: -3px; left: -3px; }
.wf-node-corner--br { bottom: -3px; right: -3px; }

/* ==================== \u9876\u90E8\u60AC\u6D6E\u80F6\u56CA\u680F (FloatingTopPill) ==================== */
.wf-floating-top-pill {
  position: absolute;
  left: 50%;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.wf-floating-top-pill__group,
.wf-floating-top-pill__single {
  display: inline-flex;
  align-items: center;
  padding: 3px 6px;
  background: rgba(24, 24, 27, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.wf-floating-top-pill__btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  padding: 4px 8px;
  color: #e4e4e7;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 999px;
  transition: background 150ms ease, color 150ms ease;
}

.wf-floating-top-pill__btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.wf-floating-top-pill__icon {
  color: #a1a1aa;
}

.wf-floating-top-pill__icon--success {
  color: #10b981;
}

.wf-floating-top-pill__divider {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 2px;
}

/* ==================== \u7A7A\u6001\u5F15\u5BFC\u6A21\u677F (NodeEmptyState) ==================== */
.wf-node-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.wf-node-empty--text {
  padding: 28px 16px 24px;
}

.wf-node-empty--video {
  padding: 0;
  justify-content: space-between;
}

.wf-node-empty--video .wf-node-empty__icon-box {
  margin-top: auto;
  margin-bottom: auto;
}

.wf-node-empty__icon-box {
  width: 68px;
  height: 68px;
  border-radius: 16px;
  background: var(--wb-surface-raised);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wb-text-muted);
  margin-bottom: 14px;
  transition: transform 200ms ease;
}

.wf-node-empty:hover .wf-node-empty__icon-box {
  transform: scale(1.04);
}

.wf-node-empty__try-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--wb-text-secondary);
  margin-bottom: 12px;
}

.wf-node-empty__actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 190px;
}

.wf-node-empty__pill-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--wb-surface);
  border: 1px solid var(--wb-border);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: var(--wb-text-primary);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 150ms ease;
}

.wf-node-empty__pill-btn:hover {
  background: var(--wb-surface-raised);
  border-color: var(--wb-border-strong);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.wf-node-empty__pill-icon {
  color: var(--wb-text-secondary);
}

/* \u89C6\u9891\u7A7A\u6001\u5E95\u90E8 dock */
.wf-node-empty__video-dock {
  margin-top: auto;
  width: 100%;
  padding: 8px 12px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wf-node-empty__video-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
}

.wf-node-empty__video-sub {
  color: var(--wb-text-secondary);
  font-weight: 500;
}

.wf-node-empty__video-guide {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--wb-surface-raised);
  border: 1px solid var(--wb-border);
  color: var(--wb-text-secondary);
  font-size: 11px;
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-node-empty__video-guide:hover {
  color: var(--wb-text-primary);
  border-color: var(--wb-border-strong);
}

.wf-node-empty__video-actions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.wf-node-empty__video-pill-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  padding: 8px 14px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--wb-text-primary);
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-theme-dark .wf-node-empty__video-pill-btn {
  background: rgba(255, 255, 255, 0.06);
}

.wf-node-empty__video-pill-btn:hover {
  background: rgba(0, 0, 0, 0.08);
  border-color: var(--wb-border);
  transform: translateY(-1px);
}

.wf-theme-dark .wf-node-empty__video-pill-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

/* \u6587\u672C\u8282\u70B9\uFF1A\u672A\u805A\u7126\u65F6 textarea \u672C\u8EAB\u53EF\u62D6\uFF08\u4E0D\u5E26 nodrag\uFF09\uFF0C
   \u53CC\u51FB\u805A\u7126\u540E\u624D\u52A0 nodrag \u9501\u7F16\u8F91\u3002\u58F3\u4E0A padding \u4ECD\u4F5C\u5907\u7528\u62D6\u8FB9\u3002 */
.wf-material-node__text-shell {
  box-sizing: border-box;
  width: 100%;
  min-height: 120px;
  height: 100%;
  padding: 12px;
  cursor: grab;
}

.wf-material-node__text-editor {
  width: 100%;
  height: 100%;
  min-height: 100px;
  padding: 2px;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  font-size: var(--wb-fs-body);
  line-height: 1.6;
  color: var(--wb-text-primary);
  font-family: inherit;
  cursor: grab;
}

.wf-material-node__text-editor.nodrag {
  cursor: text;
}

.wf-material-node__text-editor::placeholder {
  color: var(--wb-text-muted);
}

.wf-material-node__media {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0;
  box-sizing: border-box;
}

.wf-material-node__media > .wf-gsc {
  width: 100%;
  height: 100%;
  flex: 1;
}

/* \u7A7A\u7D20\u6750\u5360\u4F4D\uFF08\u865A\u7EBF\u6846\uFF0C\u975E\u751F\u6210\u6001\uFF09 */
.wf-material-node__media-empty {
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1.5px dashed var(--wb-border-strong);
  color: var(--wb-text-muted);
  font-size: var(--wb-fs-caption);
  background: var(--wb-surface-raised);
  padding: 12px;
  box-sizing: border-box;
  text-align: center;
}

.wf-material-node__error {
  padding: 8px 12px;
  font-size: var(--wb-fs-caption);
  color: var(--wb-danger);
  background: color-mix(in srgb, var(--wb-danger) 8%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--wb-danger) 20%, transparent);
}

/* ==================== media preview\uFF08W1 T1.7\uFF09 ==================== */

.wf-media-preview__media {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 16px;
}

.wf-media-preview__media--video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000; /* \u5185\u5BB9\u8272\uFF1A\u89C6\u9891\u9ED1\u5E95\uFF0C\u4E0D\u968F\u4E3B\u9898\u7FFB\u8F6C */
}

.wf-media-preview__audio {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 8px;
}

.wf-media-preview__audio-el {
  width: 100%;
}

/* ==================== generation state container ====================
   \u6765\u6E90 Gxgen components/GenerationStateContainer.css(115)\u3002
   \u8F6C\u5199\uFF1A.dark \u2192 body[data-ds-dark-theme] .wf-canvas-root\uFF1Bred \u7CFB \u2192
   --wb-danger*\uFF1BTailwind aspect \u2192 CSS aspect-ratio\uFF1B\u8272\u503C\u8D70 --wb-* token\u3002 */

/* ==================== Organic Shimmer (Transitions.dev) ==================== */

@keyframes wf-organic-shimmer-sweep {
  0% {
    transform: translate3d(-69.697%, -69.697%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.wf-organic-shimmer {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--wf-shimmer-radius, inherit);
  background: var(--wf-shimmer-stage-bg, var(--wb-surface-raised));
  overflow: hidden;
  isolation: isolate;
  box-sizing: border-box;
}

.wf-organic-shimmer[data-playing="false"] .wf-organic-shimmer__distortion,
.wf-organic-shimmer[data-playing="false"] .wf-organic-shimmer__mask {
  animation-play-state: paused !important;
}

.wf-organic-shimmer__canvas {
  position: absolute;
  inset: -20px;
  pointer-events: none;
}

/* 1. \u591A\u8272\u73AF\u72B6\u5149\u8C31\u80CC\u666F\u573A\uFF08\u591A\u5F69\u5F25\u6563\u5E95\u5149\uFF09 */
.wf-organic-shimmer__field {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(90px 70px at 20% 15%, rgba(40, 140, 255, 0.18), transparent),
    radial-gradient(80px 60px at 65% 25%, rgba(255, 50, 100, 0.16), transparent),
    radial-gradient(70px 80px at 30% 55%, rgba(50, 200, 80, 0.15), transparent),
    radial-gradient(90px 70px at 75% 65%, rgba(180, 40, 240, 0.16), transparent),
    radial-gradient(70px 60px at 45% 85%, rgba(255, 120, 40, 0.15), transparent),
    radial-gradient(60px 60px at 10% 85%, rgba(30, 185, 170, 0.14), transparent),
    linear-gradient(rgba(90, 90, 100, 0.05), rgba(90, 90, 100, 0.05));
  opacity: var(--wf-shimmer-bg-opacity, 1);
  pointer-events: none;
}

/* 2. SVG \u6E4D\u6D41\u6298\u5C04\u6DB2\u4F53\u6CE2\u6D6A\u5C42\uFF08\u6838\u5FC3\u6709\u673A\u6D41\u52A8\u6548\u679C\uFF09 */
.wf-organic-shimmer__distortion {
  position: absolute;
  top: 0;
  left: 0;
  width: 330%;
  height: 330%;
  background-image: var(--wf-shimmer-svg-url);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translate3d(-69.697%, -69.697%, 0);
  animation: wf-organic-shimmer-sweep var(--wf-shimmer-dur, 5000ms) var(--wf-shimmer-ease, cubic-bezier(0.16, 1, 0.3, 1)) infinite;
  will-change: transform;
  pointer-events: none;
}

/* 3. \u5916\u5708\u8FB9\u7F18\u53D1\u5149\u591A\u5C42\u7CFB\u7EDF */
.wf-organic-shimmer__glow-layer {
  position: absolute;
  inset: -20px;
  z-index: 1;
  pointer-events: none;
}

.wf-organic-shimmer__glow-wrap {
  position: absolute;
  inset: 0;
  opacity: var(--wf-shimmer-glow-opacity, 0.75);
  pointer-events: none;
}

.wf-organic-shimmer__glow-deep,
.wf-organic-shimmer__glow-mid,
.wf-organic-shimmer__glow-border {
  position: absolute;
  inset: 20px;
  border-radius: var(--wf-shimmer-radius, inherit);
  pointer-events: none;
}

/* \u6DF1\u5C42\u5E7F\u57DF\u8FB9\u7F18\u53D1\u5149 (Deep Blur) */
.wf-organic-shimmer__glow-deep {
  background:
    radial-gradient(55px 31px at 33% -7.4%, rgba(255, 50, 100, 0.4), transparent),
    radial-gradient(47px 27px at 12% -5%, rgba(40, 140, 255, 0.34), transparent),
    radial-gradient(31px 55px at 2.1% 68.3%, rgba(50, 200, 80, 0.38), transparent),
    radial-gradient(140px 25px at 74.4% 100%, rgba(100, 70, 255, 0.4), transparent),
    radial-gradient(66px 20px at 55% 100%, rgba(40, 140, 255, 0.35), transparent),
    radial-gradient(58px 25px at 93.9% 0%, rgba(255, 120, 40, 0.44), transparent),
    radial-gradient(40px 38px at 100% 27.1%, rgba(180, 40, 240, 0.38), transparent);
  box-shadow: inset 0 0 calc(var(--wf-shimmer-glow-blur, 20px) * 3) calc(var(--wf-shimmer-glow-blur, 20px) / 2) rgba(90, 90, 100, 0.1);
  filter: blur(var(--wf-shimmer-glow-blur, 20px));
  mask-image:
    linear-gradient(white, transparent 26px, transparent calc(100% - 26px), white),
    linear-gradient(to right, white, transparent 26px, transparent calc(100% - 26px), white);
  mask-composite: add;
  -webkit-mask-composite: source-over;
}

/* \u4E2D\u5C42\u7CBE\u51C6\u5185\u53D1\u5149 (Mid Rim) */
.wf-organic-shimmer__glow-mid {
  background:
    radial-gradient(39px 21px at 33% -7.4%, rgba(255, 50, 100, 0.34), transparent),
    radial-gradient(33px 18px at 12% -5%, rgba(40, 140, 255, 0.28), transparent),
    radial-gradient(21px 39px at 2.1% 68.3%, rgba(50, 200, 80, 0.3), transparent),
    radial-gradient(9px 18px at 2.1% 68.3%, rgba(30, 185, 170, 0.25), transparent),
    radial-gradient(104px 17px at 74.4% 100%, rgba(100, 70, 255, 0.32), transparent),
    radial-gradient(48px 13px at 55% 100%, rgba(40, 140, 255, 0.28), transparent),
    radial-gradient(41px 17px at 93.9% 0%, rgba(255, 120, 40, 0.35), transparent),
    radial-gradient(13px 23px at 100% 27.1%, rgba(240, 50, 180, 0.28), transparent),
    radial-gradient(28px 26px at 100% 27.1%, rgba(180, 40, 240, 0.3), transparent),
    radial-gradient(36px 36px at 0% 0%, rgba(90, 90, 100, 0.14), transparent 70%),
    radial-gradient(36px 36px at 100% 0%, rgba(90, 90, 100, 0.14), transparent 70%),
    radial-gradient(36px 36px at 0% 100%, rgba(90, 90, 100, 0.14), transparent 70%),
    radial-gradient(36px 36px at 100% 100%, rgba(90, 90, 100, 0.14), transparent 70%);
  box-shadow: rgba(90, 90, 100, 0.12) 0px 0px 14px 1px inset;
  filter: blur(2px);
  mask-image:
    linear-gradient(white, transparent 44px, transparent calc(100% - 44px), white),
    linear-gradient(to right, white, transparent 44px, transparent calc(100% - 44px), white);
  mask-composite: add;
  -webkit-mask-composite: source-over;
}

/* \u8D85\u7CBE\u7EC6 1px \u5F69\u8272\u8F6E\u5ED3\u53D1\u5149\u7EBF (1px Crisp Border) */
.wf-organic-shimmer__glow-border {
  padding: 1px;
  opacity: var(--wf-shimmer-border-opacity, 1);
  background:
    radial-gradient(42px 24px at 33% -7.4%, rgba(255, 50, 100, 0.65), transparent),
    radial-gradient(36px 21px at 12% -5%, rgba(40, 140, 255, 0.52), transparent),
    radial-gradient(24px 42px at 2.1% 68.3%, rgba(50, 200, 80, 0.6), transparent),
    radial-gradient(12px 21px at 2.1% 68.3%, rgba(30, 185, 170, 0.48), transparent),
    radial-gradient(108px 19px at 74.4% 100%, rgba(100, 70, 255, 0.62), transparent),
    radial-gradient(51px 16px at 55% 100%, rgba(40, 140, 255, 0.55), transparent),
    radial-gradient(44px 19px at 93.9% 0%, rgba(255, 120, 40, 0.7), transparent),
    radial-gradient(16px 25px at 100% 27.1%, rgba(240, 50, 180, 0.55), transparent),
    radial-gradient(31px 29px at 100% 27.1%, rgba(180, 40, 240, 0.6), transparent),
    linear-gradient(rgba(90, 90, 100, 0.25), rgba(90, 90, 100, 0.25));
  mask:
    linear-gradient(#fff 0 0) content-box exclude,
    linear-gradient(#fff 0 0);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* 4. \u52A8\u6001\u540C\u6B65\u7EBF\u6027\u8FC7\u6E21\u906E\u7F69\u5C42\uFF08\u4E0E\u80CC\u666F\u8272\u878D\u5408\uFF09 */
.wf-organic-shimmer__mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 330%;
  height: 330%;
  background-image: linear-gradient(
    135deg,
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 1) 0%,
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 1) calc(50% - var(--wf-shimmer-band, 22%) * 1.4),
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 0.94) calc(50% - var(--wf-shimmer-band, 22%) * 1),
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 0.82) calc(50% - var(--wf-shimmer-band, 22%) * 0.6),
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 0.55) calc(50% - var(--wf-shimmer-band, 22%) * 0.25),
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 0) 50%,
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 0.5) calc(50% + var(--wf-shimmer-band, 22%) * 0.18),
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 1) calc(50% + var(--wf-shimmer-band, 22%) * 0.35),
    rgba(var(--wf-shimmer-stage-rgb, 245, 245, 248), 1) 100%
  );
  transform: translate3d(-69.697%, -69.697%, 0);
  animation: wf-organic-shimmer-sweep var(--wf-shimmer-dur, 5000ms) var(--wf-shimmer-ease, cubic-bezier(0.16, 1, 0.3, 1)) infinite;
  will-change: transform;
  pointer-events: none;
}

/* 5. \u5185\u90E8\u5185\u5BB9\u69FD\u4F4D */
.wf-organic-shimmer__content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wf-gsc {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.wf-gsc__skeleton {
  position: absolute;
  inset: 0;
  z-index: 10;
}

.wf-gsc__box {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
}

.wf-gsc__box--square { aspect-ratio: 1 / 1; }
.wf-gsc__box--video { aspect-ratio: 16 / 9; }
.wf-gsc__box--audio { padding-top: 48px; padding-bottom: 48px; }
.wf-gsc__box--auto { min-height: 100px; }

.wf-gsc__skeleton-card {
  height: 100%;
  border: 1px solid var(--wb-border);
  background: color-mix(in srgb, var(--wb-surface) 60%, transparent);
}

.wf-gsc__skeleton-body {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
}

@keyframes wf-gsc-dot-grid-drift {
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
  50% { transform: translate3d(-12px, -8px, 0) scale(1.02); opacity: 0.92; }
  100% { transform: translate3d(-24px, -16px, 0) scale(1.04); opacity: 0.55; }
}

@keyframes wf-gsc-loading-sweep {
  0% { transform: translateX(-62%); opacity: 0; }
  20% { opacity: 0.28; }
  50% { opacity: 0.52; }
  80% { opacity: 0.28; }
  100% { transform: translateX(62%); opacity: 0; }
}

.wf-gsc__loading-overlay {
  --wf-gsc-surface-top: color-mix(in srgb, var(--wb-surface) 90%, transparent);
  --wf-gsc-surface-bottom: color-mix(in srgb, var(--wb-surface-raised) 94%, transparent);
  --wf-gsc-dot: color-mix(in srgb, var(--wb-text-primary) 20%, transparent);
  --wf-gsc-dot-glow: color-mix(in srgb, var(--wb-text-primary) 8%, transparent);
  --wf-gsc-sweep-mid: color-mix(in srgb, var(--wb-text-primary) 14%, transparent);
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  background:
    linear-gradient(180deg, var(--wf-gsc-surface-top), var(--wf-gsc-surface-bottom));
  backdrop-filter: blur(10px);
  pointer-events: none;
}

/* \u6697\u8272\uFF1Atoken \u7FFB\u8F6C + \u70B9\u9635\u5149\u6655\u6539 accent \u5E95\uFF08Gxgen .dark .loading-overlay\uFF09 */
body[data-ds-dark-theme] .wf-canvas-root .wf-gsc__loading-overlay {
  --wf-gsc-dot: rgba(255, 255, 255, 0.14);
  --wf-gsc-dot-glow: color-mix(in srgb, var(--wb-accent) 12%, transparent);
  --wf-gsc-sweep-mid: rgba(255, 255, 255, 0.12);
}

.wf-gsc__loading-overlay::before,
.wf-gsc__loading-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
}

.wf-gsc__loading-overlay::before {
  inset: -16%;
  background-image:
    radial-gradient(circle at center, var(--wf-gsc-dot) 0 2px, transparent 2.6px),
    radial-gradient(circle at center, var(--wf-gsc-dot-glow) 0 5px, transparent 5.8px);
  background-size: 30px 30px, 60px 60px;
  background-position: 0 0, 15px 15px;
  animation: wf-gsc-dot-grid-drift 3.2s ease-in-out infinite;
  transform-origin: center;
}

.wf-gsc__loading-overlay::after {
  inset: -6%;
  background: linear-gradient(
    110deg,
    transparent 0%,
    transparent 26%,
    var(--wf-gsc-sweep-mid) 50%,
    transparent 74%,
    transparent 100%
  );
  filter: blur(6px);
  animation: wf-gsc-loading-sweep 2.8s ease-in-out infinite;
}

@keyframes wf-gsc-progress-pulse {
  0%, 100% { opacity: 0.66; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-1px); }
}

/* \u8FDB\u5EA6\u6587\u5B57\u5E38\u9A7B\u8F7B\u5FAE\u547C\u5438\uFF0C\u907F\u514D\u53EA\u5728\u9996\u6B21\u6302\u8F7D\u65F6\u95EA\u4E00\u4E0B */
.wf-gsc__progress-text {
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  color: var(--wb-text-secondary);
  animation: wf-gsc-progress-pulse 1.8s ease-in-out infinite;
}

/* \u5931\u8D25\u6001\uFF08red \u7CFB\u5168\u90E8 \u2192 --wb-danger*\uFF09 */
.wf-gsc__failed {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: var(--wb-danger-soft);
}

.wf-gsc__failed-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--wb-danger) 16%, transparent);
  color: var(--wb-danger);
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-gsc__failed-label {
  font-size: var(--wb-fs-title);
  font-weight: 500;
  color: var(--wb-danger);
}

.wf-gsc__failed-message {
  font-size: var(--wb-fs-caption);
  color: color-mix(in srgb, var(--wb-danger) 80%, transparent);
  text-align: center;
  max-width: 100%;
  overflow-wrap: break-word;
}

.wf-gsc__failed-task {
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-muted);
}

.wf-gsc__retry {
  margin-top: 8px;
  padding: 6px 16px;
  border: none;
  border-radius: 999px;
  background: var(--wb-danger);
  color: #fff;
  font-size: var(--wb-fs-title);
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: background 150ms ease;
}

.wf-gsc__retry:hover {
  background: color-mix(in srgb, var(--wb-danger) 85%, #000);
}

/* crossfading \u671F\u95F4\u5185\u5BB9\u6A21\u7CCA\uFF08Gxgen .generating-image\uFF09 */
.wf-gsc__content--blur {
  filter: blur(4px);
  transition: filter 0.3s ease;
}

/* ==================== config panel (W2) ==================== */

/* shell\uFF1A\u5355\u5C42\u4E00\u4F53\u5316\u6D6E\u5C42\u5916\u58F3\uFF0C\u65E0\u591A\u4F59\u5D4C\u5957\u8FB9\u6846\u4E0E\u5185\u5916\u95F4\u9699 */
.wf-panel-shell {
  position: absolute;
  z-index: 50;
}

.wf-panel-shell__card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--wb-border);
  background: color-mix(in srgb, var(--wb-surface) 96%, transparent);
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.12);
  padding: 12px 14px;
}

/* \u5185\u5BB9\u5E03\u5C40 */
.wf-config-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* \u97F3\u9891\u5B50\u6A21\u5F0F Tab \u5207\u6362 */
.wf-config-panel__audio-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
}

.wf-config-panel__tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  background: var(--wb-surface-raised);
  color: var(--wb-text-secondary);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-config-panel__tab-btn--active {
  background: #1a1a1a;
  color: #ffffff;
  border-color: #1a1a1a;
}

/* Prompt \u4E00\u4F53\u5316\u533A\u57DF\uFF08\u65E0\u591A\u4F59\u5185\u5D4C\u8FB9\u6846\uFF0C\u878D\u5165\u5355\u5C42\u5361\u7247\uFF09 */
.wf-config-panel__prompt-container {
  position: relative;
  border-radius: 10px;
  background: transparent;
  padding: 0 0 20px 0;
}

.wf-config-panel__prompt-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.wf-config-panel__ref-slots-group {
  display: flex;
  align-items: center;
  gap: 6px;
}

.wf-config-panel__ref-thumb-slot {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1.5px solid var(--wb-border);
  background: var(--wb-surface);
  position: relative;
  cursor: default;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-config-panel__ref-thumb-slot--ready {
  border-color: rgba(59, 130, 246, 0.4);
}

.wf-config-panel__ref-thumb-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.wf-config-panel__ref-thumb-video-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.wf-config-panel__ref-thumb-overlay-icon {
  position: absolute;
  color: #ffffff;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
}

.wf-config-panel__ref-thumb-icon-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wb-text-muted);
  background: var(--wb-surface-raised);
}

.wf-config-panel__ref-thumb-icon-box--audio {
  color: #8b5cf6;
  background: rgba(139, 92, 246, 0.12);
}

.wf-config-panel__ref-thumb-icon-box--text {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.12);
}

.wf-config-panel__ref-thumb-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--wb-success, #10b981);
  box-shadow: 0 0 4px var(--wb-success, #10b981);
}

.wf-config-panel__add-ref-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1.5px dashed var(--wb-border-strong, rgba(255, 255, 255, 0.28));
  background: transparent;
  color: var(--wb-text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
}

.wf-config-panel__add-ref-btn:hover {
  border-color: var(--wb-accent);
  color: var(--wb-text-primary);
  background: var(--wb-accent-soft);
}

.wf-config-panel__expand-btn {
  background: transparent;
  border: none;
  color: var(--wb-text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 150ms ease;
}

.wf-config-panel__expand-btn:hover {
  color: var(--wb-text-primary);
}

.wf-config-panel__prompt-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  font-size: 13px;
  line-height: 1.6;
  color: var(--wb-text-primary);
  font-family: inherit;
  padding: 0;
}

.wf-config-panel__prompt-input::placeholder {
  color: var(--wb-text-muted);
}

.wf-config-panel__char-counter {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 11px;
  color: var(--wb-text-muted);
  user-select: none;
}

/* \u5E95\u90E8\u64CD\u4F5C\u4E0E\u53C2\u6570\u680F */
.wf-config-panel__bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-top: 8px;
  flex-wrap: nowrap;
  min-height: 32px;
}

.wf-config-panel__params-group {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 6px;
  min-width: 0;
  flex: 1;
}

.wf-param-pill__divider {
  color: var(--wb-border);
  font-size: 12px;
  user-select: none;
  flex-shrink: 0;
}

.wf-param-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--wb-text-secondary);
  flex-shrink: 0;
}

.wf-param-pill--btn {
  background: transparent;
  border: none;
  padding: 3px 6px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--wb-text-secondary);
  transition: background 150ms ease;
  flex-shrink: 0;
}

.wf-param-pill--btn:hover {
  background: var(--wb-surface-raised);
}

.wf-param-pill--video-summary {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: var(--wb-text-secondary);
  background: var(--wb-surface-raised);
  padding: 2px 6px;
  border-radius: 999px;
  border: 1px solid var(--wb-border);
  white-space: nowrap;
  flex-shrink: 0;
}

.wf-param-pill__dot {
  color: var(--wb-text-muted);
  font-weight: bold;
  margin: 0 1px;
}

.wf-param-bar__select--ghost.ant-select {
  border: none !important;
  background: transparent !important;
  padding: 0 !important;
  min-height: 18px;
  font-size: 12px;
  box-shadow: none !important;
}

.wf-param-bar__select--ghost .ant-select-content {
  padding: 0 !important;
  font-size: 12px;
  color: var(--wb-text-secondary);
}

.wf-config-panel__modal-textarea {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  padding: 10px;
  font-size: 14px;
  line-height: 1.6;
  outline: none;
  font-family: inherit;
  color: var(--wb-text-primary);
  background: var(--wb-surface);
}

/* ParamBar \u80F6\u56CA\u884C\uFF08\u6765\u6E90 Gxgen ConfigPanel/ParamBar.tsx \u6A21\u578B\u9009\u62E9\u5668\u884C\uFF09\u3002
   antd 6 Select \u65E0 .ant-select-selector\uFF1A\u80CC\u666F/\u8FB9\u6846\u5728\u6839 .ant-select \u4E0A\uFF0C
   \u6587\u6848\u5728 .ant-select-content\uFF08\u8986\u76D6\u76EE\u6807\u6309\u6B64\u7ED3\u6784\uFF09\u3002 */
.wf-param-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.wf-param-bar__select.ant-select {
  border-radius: 999px !important;
  background: var(--wb-surface-raised) !important;
  border-color: var(--wb-border) !important;
  font-size: var(--wb-fs-caption);
  min-height: 28px;
  box-shadow: none !important;
}

.wf-param-bar__select .ant-select-content {
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-primary);
}

.wf-param-bar__select .ant-select-content::placeholder {
  color: var(--wb-text-muted);
}

.wf-param-bar__select .ant-select-suffix {
  color: var(--wb-text-muted);
}

.wf-param-bar__select--model {
  max-width: 140px;
  min-width: 80px;
}

.wf-param-bar__select--model .ant-select-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u6A21\u578B\u9009\u9879\uFF1Aprovider \u56FE\u6807\u65E0\u6570\u636E\u6E90 \u2192 \u9996\u5B57\u6BCD\u5706\u7247\uFF08T2.4\uFF09 */
.wf-model-option {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
}

.wf-model-option__avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--wb-accent-soft);
  color: var(--wb-accent);
  font-size: var(--wb-fs-caption);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wf-model-option__name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u65F6\u957F\u53C2\u6570\u884C */
.wf-config-panel__duration {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* \u9AD8\u7EA7\u9879\uFF08S3\uFF09\uFF1A\u539F\u751F details\uFF0C\u5931\u8D25\u7B56\u7565\u7B49\u4F4E\u9891\u53C2\u6570\u9ED8\u8BA4\u6536\u8D77 */
.wf-config-panel__advanced summary {
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-muted);
  cursor: pointer;
  user-select: none;
  list-style-position: inside;
}

.wf-config-panel__advanced-body {
  padding: 6px 0 0 14px;
}

.wf-config-panel__duration label {
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-muted);
}

/* \u5E95\u90E8 GenerateButton \u884C */
.wf-config-panel__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.wf-config-panel__hint {
  font-size: var(--wb-fs-caption);
  line-height: 1.5;
  color: var(--wb-text-muted);
}

/* GenerateButton \u6DF1\u8272\u80F6\u56CA\uFF08\u6765\u6E90 Gxgen ConfigPanel/GenerateButton.tsx:25-79\uFF0C
   \u88C1\u526A\u79EF\u5206\uFF1B\u80F6\u56CA\u6E10\u53D8\u5728\u4EAE\u6697\u8272\u4E0B\u5747\u4E3A\u6DF1\u8272\uFF0C\u4E0D\u8D70 token\uFF09 */
.wf-generate-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  /* Gxgen \u539F\u6587\u6DF1\u8272\u80F6\u56CA\uFF1A\u4EAE/\u6697\u8272\u5747\u6DF1\u8272\uFF0C\u4E0D\u968F\u4E3B\u9898\u7FFB\u8F6C */
  background: radial-gradient(94.74% 157.5% at 50% 21.25%, #1a1a1a 0%, #656766 100%);
}

.wf-generate-btn--disabled {
  opacity: 0.5;
}

.wf-generate-btn__label {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  padding: 0 2px 0 12px;
  white-space: nowrap;
}

.wf-generate-btn__send {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: none;
  /* \u6DF1\u8272\u80F6\u56CA\u5185\u7684\u767D\u8272\u53D1\u9001\u94AE\uFF1A\u5185\u5BB9\u8272\uFF0C\u4E0D\u968F\u4E3B\u9898\u7FFB\u8F6C */
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  transition: background 150ms ease;
}

.wf-generate-btn__send:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.9);
}

.wf-generate-btn__send:disabled {
  background: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.5);
  cursor: not-allowed;
}

.wf-generate-btn__spin {
  animation: wf-generate-btn-spin 1s linear infinite;
}

@keyframes wf-generate-btn-spin {
  to {
    transform: rotate(360deg);
  }
}

/* antd primary color follows the theme variable (the formal approach is
   ConfigProvider token with a JS value read once from CSS vars). */
.wf-canvas-root .ant-btn-primary {
  background: var(--wb-accent);
  border-color: var(--wb-accent);
  box-shadow: none;
}

.wf-canvas-root .ant-btn-primary:hover:not(:disabled) {
  background: var(--wb-accent-hover) !important;
  border-color: var(--wb-accent-hover) !important;
}

/* ==================== toolbar divider ==================== */

.wf-canvas-toolbar__divider {
  height: 1px;
  margin: 2px 8px;
  background: var(--wb-border);
}

/* ==================== autosave indicator (M2 \u2192 S2 chip \u5316) ==================== */

.wf-canvas-header__save-state {
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-muted);
  white-space: nowrap;
}

/* S2\uFF1A\u4FDD\u5B58\u6001 chip \u2014\u2014 \u5706\u70B9 + \u6587\u5B57\u4E00\u4F53\uFF0CisDirty \u65F6\u6574\u4F53\u5373\u300C\u7ACB\u5373\u4FDD\u5B58\u300D\u6309\u94AE */
.wf-canvas-header__save-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-muted);
  white-space: nowrap;
  cursor: default;
  transition: background 150ms ease, border-color 150ms ease;
}

.wf-canvas-header__save-chip:not(:disabled) {
  cursor: pointer;
  border-color: var(--wb-border);
  color: var(--wb-text-secondary);
}

.wf-canvas-header__save-chip:not(:disabled):hover {
  background: var(--wb-surface-raised);
  border-color: var(--wb-border-strong);
}

.wf-canvas-header__save-chip:disabled {
  opacity: 0.7;
}

.wf-canvas-header__save-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}

.wf-canvas-header__save-state--pending {
  color: var(--wb-text-secondary);
}

.wf-canvas-header__save-state--saving {
  color: var(--wb-accent);
}

.wf-canvas-header__save-state--saved {
  color: var(--wb-success);
}

.wf-canvas-header__save-state--error,
.wf-canvas-header__save-state--conflict {
  color: var(--wb-danger);
}

/* conflict banner (409 \u51B2\u7A81\u5904\u7406 UX) */
.wf-canvas-conflict-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-primary);
  background: color-mix(in srgb, var(--wb-danger) 8%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--wb-danger) 20%, transparent);
  flex-shrink: 0;
}

/* ==================== \u6D6E\u5C42\u83DC\u5355\u5171\u4EAB token\uFF08body portal\uFF09 ====================

   ContextMenu \u4E0E CanvasNodeActionMenu \u90FD portal \u5230 document.body \u2014\u2014 \u5728
   .wf-canvas-root \u4E4B\u5916\uFF0Ctoken \u5757\u5728\u8FD9\u91CC\u5171\u4EAB\u4E00\u4EFD\uFF08S1 \u83DC\u5355\u5F52\u5E76\uFF1A\u539F --wcm-*
   \u4E0E --wam-* \u4E24\u5957\u5408\u5E76\u4E3A\u4E2D\u6027 --wf-menu-*\uFF09\u3002*/
/* ==================== \u83DC\u5355\u4E0E\u4E0B\u62C9\u6D6E\u5C42\uFF08Dark Glass Menu Tokens & Styles\uFF09 ====================
   ContextMenu \u4E0E CanvasNodeActionMenu \u90FD portal \u5230 document.body \u2014\u2014 \u5728
   .wf-canvas-root \u4E4B\u5916\uFF0C\u9ED8\u8BA4\u8D4B\u4E88\u73B0\u4EE3\u5316\u6C89\u6D78\u5F0F\u6697\u8272\u6BDB\u73BB\u7483\u8BBE\u8BA1\uFF0C\u65E0\u7F1D\u878D\u5165 OmniMux \u5DE5\u4F5C\u53F0\u3002 */
.wf-context-menu,
.wf-action-menu,
.ant-select-dropdown,
.ant-dropdown,
.ant-dropdown-menu {
  --wf-menu-surface: rgba(24, 24, 27, 0.96);
  --wf-menu-surface-hover: rgba(255, 255, 255, 0.08);
  --wf-menu-border: rgba(255, 255, 255, 0.12);
  --wf-menu-text: #f4f4f5;
  --wf-menu-text-muted: #a1a1aa;
  --wf-menu-accent: #679EFE;
  --wf-menu-accent-soft: rgba(65, 118, 230, 0.2);
  color-scheme: dark;
}

/* ==================== Ant Design \u4E0B\u62C9\u4E0E\u83DC\u5355\u6697\u8272\u8986\u76D6 ==================== */
.ant-select-dropdown,
.ant-dropdown .ant-dropdown-menu {
  background: var(--wf-menu-surface) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border: 1px solid var(--wf-menu-border) !important;
  border-radius: 12px !important;
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08) !important;
  padding: 6px !important;
  color: var(--wf-menu-text) !important;
}

.ant-select-dropdown .ant-select-item,
.ant-dropdown .ant-dropdown-menu-item {
  border-radius: 8px !important;
  padding: 6px 10px !important;
  color: #e4e4e7 !important;
  font-size: 13px !important;
  margin: 2px 0 !important;
  transition: all 120ms ease !important;
  background: transparent !important;
}

.ant-select-dropdown .ant-select-item-option-active,
.ant-select-dropdown .ant-select-item:hover,
.ant-dropdown .ant-dropdown-menu-item:hover {
  background: var(--wf-menu-surface-hover) !important;
  color: #ffffff !important;
}

.ant-select-dropdown .ant-select-item-option-selected,
.ant-dropdown .ant-dropdown-menu-item-selected {
  background: var(--wf-menu-accent-soft) !important;
  color: var(--wf-menu-accent) !important;
  font-weight: 500 !important;
}

.ant-select-dropdown .ant-select-item-option-selected .ant-select-item-option-state {
  color: var(--wf-menu-accent) !important;
}

.ant-select-dropdown .ant-empty {
  color: var(--wf-menu-text-muted) !important;
}

/* ==================== context menu (M2, body portal) ==================== */

.wf-context-menu {
  position: fixed;
  z-index: 1000;
  min-width: 190px;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid var(--wf-menu-border);
  background: var(--wf-menu-surface);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
  user-select: none;
}

.wf-context-menu__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--wf-menu-text);
  font-size: 13px;
  font-weight: 450;
  text-align: left;
  cursor: pointer;
  transition: all 120ms ease;
}

.wf-context-menu__item:hover:not(.wf-context-menu__item--disabled) {
  background: var(--wf-menu-surface-hover);
  color: #ffffff;
}

.wf-context-menu__item--disabled {
  color: var(--wf-menu-text-muted);
  opacity: 0.5;
  cursor: not-allowed;
}

.wf-context-menu__label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-context-menu__shortcut {
  font-size: 11px;
  color: var(--wf-menu-text-muted);
  background: rgba(255, 255, 255, 0.06);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, 'SFMono-Regular', Consolas, monospace;
}

.wf-context-menu__separator {
  height: 1px;
  margin: 4px 6px;
  background: var(--wf-menu-border);
}

/* ==================== Add Node Drill-down Panel ==================== */

.wf-add-node-menu {
  min-width: 230px;
  padding: 8px;
}

.wf-add-node-menu__container {
  display: flex;
  flex-direction: column;
}

.wf-add-node-menu__header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 4px 8px 2px;
  border-bottom: 1px solid var(--wf-menu-border, rgba(255, 255, 255, 0.08));
  margin-bottom: 6px;
}

.wf-add-node-menu__back-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: var(--wf-menu-text-muted, #a1a1aa);
  border-radius: 6px;
  cursor: pointer;
  transition: all 120ms ease;
  padding: 0;
}

.wf-add-node-menu__back-btn:hover {
  background: var(--wf-menu-surface-hover, rgba(255, 255, 255, 0.1));
  color: #ffffff;
}

.wf-add-node-menu__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--wf-menu-text, #e4e4e7);
  letter-spacing: 0.2px;
}

.wf-add-node-menu__list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wf-add-node-menu__item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--wf-menu-text, #e4e4e7);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
  text-align: left;
}

.wf-add-node-menu__item:hover {
  background: var(--wf-menu-surface-hover, rgba(255, 255, 255, 0.08));
  color: #ffffff;
}

.wf-add-node-menu__icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #e4e4e7;
  flex-shrink: 0;
}

.wf-add-node-menu__label {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  color: inherit;
  white-space: nowrap;
}

.wf-add-node-menu__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  padding: 3px 6px;
  border-radius: 6px;
}

.wf-add-node-menu__badge--primary {
  background: #5B68F6;
  color: #ffffff;
}

.wf-add-node-menu__badge--new {
  background: #27272a;
  color: #d4d4d8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.wf-add-node-menu__arrow {
  color: var(--wf-menu-text-muted, #71717a);
  margin-left: 2px;
}

/* ==================== rejection toast ==================== */

.wf-rejected-toast {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-primary);
  background: var(--wb-surface);
  border: 1px solid var(--wb-border-strong);
  box-shadow: var(--wb-shadow-card-hover);
}

/* ==========================================================================
   M3: Execution UI\uFF08\u6267\u884C\u63A7\u5236\u6761 / \u8282\u70B9\u6267\u884C\u5FBD\u6807 / \u6267\u884C\u4E2D\u8FB9\u52A8\u753B\uFF09
   ========================================================================== */

.wf-material-node__badge--pending {
  background: var(--wb-border-strong);
}

.wf-material-node__badge--skipped {
  background: transparent;
  border: 1.5px solid var(--wb-border-strong);
}

/* \u8F6C\u5708\u5FBD\u6807\uFF1Arunning \u72B6\u6001\uFF08\u4E0E pulse \u5E76\u7528\uFF09 */
.wf-material-node__badge--spin {
  border: 2px solid var(--wb-accent);
  border-top-color: transparent;
  border-radius: 50%;
  background: transparent;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  animation: wf-badge-spin 0.8s linear infinite;
}

@keyframes wf-badge-spin {
  to { transform: rotate(360deg); }
}

/* \u6267\u884C\u63A7\u5236\u6761\uFF08token \u5168\u8D70 .wf-canvas-root \u7684 --wb-*\uFF0C\u65E0 fallback \u88F8\u8272\uFF09 */
.wf-exec-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  background: var(--wb-surface);
  border-bottom: 1px solid var(--wb-border);
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-primary);
  flex-wrap: wrap;
}

.wf-exec-bar__status {
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background: var(--wb-surface-raised);
}

.wf-exec-bar__status--running { color: var(--wb-accent); }
.wf-exec-bar__status--paused { color: var(--wb-warning); }
.wf-exec-bar__status--completed { color: var(--wb-success); }
.wf-exec-bar__status--error { color: var(--wb-danger); }
.wf-exec-bar__status--cancelled { color: var(--wb-text-muted); }

.wf-exec-bar__progress {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.wf-exec-bar__progress-text {
  font-variant-numeric: tabular-nums;
  color: var(--wb-text-primary);
}

.wf-exec-bar__progress-track {
  width: 120px;
  height: 6px;
  border-radius: 3px;
  background: var(--wb-border);
  overflow: hidden;
  display: inline-block;
}

.wf-exec-bar__progress-fill {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: var(--wb-accent);
  transition: width 0.3s ease;
}

.wf-exec-bar__progress-percent {
  color: var(--wb-text-muted);
  font-variant-numeric: tabular-nums;
}

.wf-exec-bar__button {
  border: 1px solid var(--wb-border);
  background: var(--wb-surface);
  color: var(--wb-text-primary);
  border-radius: 6px;
  padding: 4px 12px;
  font-size: var(--wb-fs-caption);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.wf-exec-bar__button:hover:not(:disabled) {
  background: var(--wb-surface-raised);
}

.wf-exec-bar__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.wf-exec-bar__button--primary {
  background: var(--wb-accent);
  border-color: var(--wb-accent);
  color: #fff;
}

.wf-exec-bar__button--primary:hover:not(:disabled) {
  background: var(--wb-accent-hover);
  border-color: var(--wb-accent-hover);
}

.wf-exec-bar__button--danger {
  color: var(--wb-danger);
  border-color: var(--wb-danger);
}

.wf-exec-bar__button--danger:hover:not(:disabled) {
  background: var(--wb-danger-soft);
}

.wf-exec-bar__button--ghost {
  border-color: transparent;
  background: transparent;
  color: var(--wb-text-muted);
}

.wf-exec-bar__error {
  color: var(--wb-danger);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 360px;
}

/* \u6267\u884C\u4E2D\u8FB9\u52A8\u753B\uFF08\u4FDD\u7559\u4F5C prefers-reduced-motion \u964D\u7EA7\uFF1B\u4E3B\u6D41\u52A8\u753B\u7531
   AnimatedBeam \u627F\u62C5\uFF0CW3 T3.2\uFF09 */
.wf-edge--flowing {
  stroke-dasharray: 6 6;
  animation: wf-edge-flow 0.6s linear infinite;
}

@keyframes wf-edge-flow {
  to { stroke-dashoffset: -12; }
}

@media (prefers-reduced-motion: reduce) {
  .wf-edge--flowing {
    animation: none;
  }
}

/* ==================== canvas node handle\uFF08W3 T3.1\uFF09====================
   \u6765\u6E90 Gxgen styles/pages/canvas-editor.css:113-330\u3002
   \u8F6C\u5199\uFF1A--canvas-node-handle-accent \u2192 --wb-accent\uFF1B
   rgba(114,80,255,\u03B1) \u2192 color-mix(in srgb, var(--wb-accent) \u03B1%, transparent)\uFF1B
   .dark \u2192 body[data-ds-dark-theme] .wf-canvas-root\u3002
   \u5751#1\uFF1AHandle \u672C\u4F53\uFF08.wf-handle\uFF09pointer-events \u6052\u4E3A auto\uFF08\u4E0D\u95E8\u63A7\uFF09\uFF0C
   \u53EA\u6709 plus-hit-area \u7684 pointer-events \u7531 hover class \u95E8\u63A7\u3002 */

.wf-handle {
  --wf-handle-hitbox-size: 1px;
  --wf-handle-button-size: 40px;
  --wf-handle-button-min-size: 40px;
  --wf-handle-button-max-size: 48px;
  --wf-handle-plus-hit-area-width: 72px;
  --wf-handle-plus-hit-area-height: 64px;
  --wf-handle-dot-size: 10px;
  --wf-handle-accent: var(--wb-accent);
  --wf-handle-plus-center-offset: 30px;

  width: var(--wf-handle-hitbox-size) !important;
  height: var(--wf-handle-hitbox-size) !important;
  min-width: var(--wf-handle-hitbox-size) !important;
  min-height: var(--wf-handle-hitbox-size) !important;
  border: none !important;
  background: transparent !important;
  border-radius: 9999px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible !important;
}

/* \u8986\u76D6\u65E7 .react-flow__handle \u5706\u70B9\u89C4\u5219\uFF08theme:168-180\uFF09\u7684 hover \u653E\u5927 */
.wf-canvas-root .react-flow__handle.wf-handle,
.wf-canvas-root .react-flow__handle.wf-handle:hover {
  transform: none;
  background: transparent;
}

.wf-handle__anchor-layer {
  display: none !important;
}

.wf-handle__plus-hit-area {
  position: absolute;
  top: 50%;
  width: var(--wf-handle-plus-hit-area-width);
  height: var(--wf-handle-plus-hit-area-height);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  pointer-events: none;
}

.wf-handle__plus-hit-area--left {
  left: calc(
    (var(--wf-handle-hitbox-size) / 2)
    - (var(--wf-handle-plus-hit-area-width) / 2)
    - var(--wf-handle-plus-center-offset)
  );
}

.wf-handle__plus-hit-area--right {
  left: calc(
    (var(--wf-handle-hitbox-size) / 2)
    - (var(--wf-handle-plus-hit-area-width) / 2)
    + var(--wf-handle-plus-center-offset)
  );
}

.wf-handle__plus {
  --wf-handle-offset-x: 0px;
  --wf-handle-offset-y: 0px;
  --wf-handle-scale: 0.88;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(
    var(--wf-handle-button-min-size),
    var(--wf-handle-button-size),
    var(--wf-handle-button-max-size)
  );
  height: clamp(
    var(--wf-handle-button-min-size),
    var(--wf-handle-button-size),
    var(--wf-handle-button-max-size)
  );
  min-width: var(--wf-handle-button-min-size);
  min-height: var(--wf-handle-button-min-size);
  max-width: var(--wf-handle-button-max-size);
  max-height: var(--wf-handle-button-max-size);
  border-radius: 9999px;
  opacity: 0;
  visibility: hidden;
  color: var(--wb-text-muted);
  transform: translate(var(--wf-handle-offset-x), var(--wf-handle-offset-y))
    scale(var(--wf-handle-scale));
  transition:
    transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.15s ease-out,
    visibility 0s linear 0.15s,
    border-color 0.15s ease,
    background-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;
  will-change: transform, opacity, border-color, background-color, box-shadow;
}

.wf-handle__plus-button {
  width: 100%;
  height: 100%;
  min-width: var(--wf-handle-button-min-size);
  min-height: var(--wf-handle-button-min-size);
  max-width: var(--wf-handle-button-max-size);
  max-height: var(--wf-handle-button-max-size);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 2px solid var(--wb-text-muted);
  background-color: var(--wb-surface);
  color: var(--wb-text-muted);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
}

.wf-handle__dot {
  width: var(--wf-handle-dot-size);
  height: var(--wf-handle-dot-size);
  border-radius: 9999px;
  background: color-mix(in srgb, var(--wf-handle-accent) 72%, transparent);
  transition:
    transform 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
}

/* hover / \u83DC\u5355\u6253\u5F00\uFF1Aplus \u56DE\u5F39\u51FA\u73B0\uFF08\u53EA\u9A71\u52A8\u89C6\u89C9\uFF0C\u4E0D\u52A8 pointerEvents\uFF09 */
.wf-handle--node-hovered .wf-handle__plus,
.wf-handle--surface-hovered .wf-handle__plus,
.wf-handle--open .wf-handle__plus {
  opacity: 1;
  visibility: visible;
  --wf-handle-scale: 1;
  transition-delay: 0s, 0s, 0s, 0s, 0s, 0s, 0s;
}

/* \u4EC5 plus-hit-area \u7684 pointer-events \u7531\u89C6\u89C9 class \u95E8\u63A7\uFF08\u5751#1 \u95E8\u63A7\u7ED3\u6784\u7167\u6284\uFF09 */
.wf-handle--node-hovered .wf-handle__plus-hit-area,
.wf-handle--surface-hovered .wf-handle__plus-hit-area,
.wf-handle--open .wf-handle__plus-hit-area {
  pointer-events: auto;
}

.wf-handle--connection-active:not(.connectingfrom) .wf-handle__plus-hit-area,
.wf-handle.connectingfrom .wf-handle__plus-hit-area,
.wf-handle.connectingto .wf-handle__plus-hit-area,
.wf-handle.valid .wf-handle__plus-hit-area,
.wf-handle.clickconnecting .wf-handle__plus-hit-area {
  pointer-events: none;
}

/* \u4EAE\u8272\u6001\u52A0\u53F7\u6309\u94AE hover / \u83DC\u5355\u6253\u5F00\u9AD8\u4EAE\uFF08\u4E3B\u52A8\u8865\u9F50\uFF09 */
.wf-handle--surface-hovered .wf-handle__plus-button,
.wf-handle--open .wf-handle__plus-button {
  border-color: var(--wf-handle-accent);
  background-color: color-mix(in srgb, var(--wf-handle-accent) 12%, var(--wb-surface));
  color: var(--wb-text-primary);
  box-shadow: 0 0 8px color-mix(in srgb, var(--wf-handle-accent) 22%, transparent);
}

body[data-ds-dark-theme] .wf-canvas-root .wf-handle__plus-button {
  border-color: color-mix(in srgb, var(--wf-handle-accent) 45%, var(--wb-surface-raised));
  background-color: var(--wb-surface-raised);
  color: var(--wb-text-secondary);
}

body[data-ds-dark-theme] .wf-canvas-root .wf-handle--surface-hovered .wf-handle__plus-button,
body[data-ds-dark-theme] .wf-canvas-root .wf-handle--open .wf-handle__plus-button {
  border-color: var(--wf-handle-accent);
  background-color: color-mix(in srgb, var(--wf-handle-accent) 28%, var(--wb-surface-raised));
  color: var(--wb-text-primary);
  box-shadow: 0 0 8px color-mix(in srgb, var(--wf-handle-accent) 30%, transparent);
}

/* ==================== \u8FB9\u65AD\u5F00\u63A7\u5236\uFF08W3 T3.3\uFF09====================
   \u6765\u6E90 Gxgen canvas-editor.css:432-485\u3002 */

.wf-edge-with-disconnect .wf-edge-disconnect {
  opacity: 0;
  overflow: visible;
  pointer-events: none;
  transition:
    opacity 0.14s ease,
    transform 0.14s ease;
  transform-box: fill-box;
  transform-origin: center;
  transform: scale(0.92);
}

.wf-edge-with-disconnect:hover .wf-edge-disconnect,
.wf-edge-with-disconnect:focus-within .wf-edge-disconnect {
  opacity: 1;
  pointer-events: all;
  transform: scale(1);
}

.wf-edge-disconnect__button {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--wb-border-strong);
  border-radius: 999px;
  background: var(--wb-surface);
  color: var(--wb-danger);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.18);
  cursor: pointer;
}

.wf-edge-disconnect__button:hover,
.wf-edge-disconnect__button:focus-visible {
  border-color: color-mix(in srgb, var(--wb-danger) 36%, transparent);
  background: color-mix(in srgb, var(--wb-danger) 6%, var(--wb-surface));
  outline: none;
}

body[data-ds-dark-theme] .wf-canvas-root .wf-edge-disconnect__button {
  border-color: var(--wb-border-strong);
  background: var(--wb-surface-raised);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.32);
}

body[data-ds-dark-theme] .wf-canvas-root .wf-edge-disconnect__button:hover,
body[data-ds-dark-theme] .wf-canvas-root .wf-edge-disconnect__button:focus-visible {
  border-color: color-mix(in srgb, var(--wb-danger) 42%, transparent);
  background: color-mix(in srgb, var(--wb-danger) 30%, var(--wb-surface-raised));
}

/* ==================== \u8282\u70B9\u52A8\u4F5C\u83DC\u5355\uFF08W3 T3.4\uFF09====================
   \u6765\u6E90 Gxgen canvas-editor.css:332-420\u3002
   \u83DC\u5355 portal \u5230 document.body \u2014\u2014 token \u590D\u7528\u4E0A\u65B9\u5171\u4EAB\u5757 --wf-menu-*
   \uFF08S1 \u83DC\u5355\u5F52\u5E76\u540E\u4E0D\u518D\u6709\u72EC\u7ACB --wam-*\uFF09\u3002 */

.wf-action-menu {
  display: flex;
  flex-direction: column;
  width: 278px;
  padding: 6px;
  border-radius: 14px;
  border: 1px solid var(--wf-menu-border);
  background: var(--wf-menu-surface);
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: wf-action-menu-in 150ms ease-out;
  overflow: hidden;
  z-index: 1000;
  font-family: var(--wb-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', sans-serif);
}

.wf-action-menu__title {
  padding: 6px 10px 6px;
  color: var(--wf-menu-text-muted);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wf-action-menu__list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: 2px;
  scrollbar-width: thin;
}

.wf-action-menu__item {
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.wf-action-menu__item-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 6px 8px;
  border-radius: 9px;
  transition: background-color 120ms ease;
}

.wf-action-menu__item:hover .wf-action-menu__item-inner {
  background: var(--wf-menu-surface-hover);
}

.wf-action-menu__item-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.06);
  color: var(--wf-menu-text);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.wf-action-menu__item-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.wf-action-menu__item-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--wf-menu-text);
}

.wf-action-menu__item-desc {
  font-size: 11px;
  color: var(--wf-menu-text-muted);
}

.wf-action-menu__item:focus-visible {
  outline: none;
}

.wf-action-menu__item:focus-visible .wf-action-menu__item-inner {
  background: color-mix(in srgb, var(--wf-menu-accent) 8%, transparent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--wf-menu-accent) 18%, transparent);
}

@keyframes wf-action-menu-in {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ==================== \u9876\u90E8\u80F6\u56CA\u63A7\u5236\u6761\uFF08HeaderControls\uFF09 ==================== */

.wf-header-controls {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 20;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
}

.wf-header-capsule {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: var(--wb-header-capsule-bg);
  backdrop-filter: var(--wb-dock-blur);
  border: 1px solid var(--wb-border);
  border-radius: var(--wb-header-radius);
  box-shadow: var(--wb-header-capsule-shadow);
}

/* \u72EC\u7ACB\u7EAF\u5706\u5F62\u6267\u884C\u6309\u94AE\uFF08\u95F2\u6001\uFF1A\u5355\u5C42\u5706\u94AE\uFF0C\u5B8C\u5168\u675C\u7EDD\u5D4C\u5957\u65B9\u89D2\uFF09 */
.wf-header-capsule--exec-standalone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid var(--wb-border);
  border-radius: 50% !important;
  background: var(--wb-header-capsule-bg);
  backdrop-filter: var(--wb-dock-blur);
  box-shadow: var(--wb-header-capsule-shadow);
  color: var(--wb-text-primary);
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-header-capsule--exec-standalone:hover:not(:disabled) {
  background: var(--wb-dock-item-hover);
  border-color: var(--wb-border-strong, rgba(255, 255, 255, 0.2));
  color: var(--wb-accent, #3b82f6);
  border-radius: 50% !important;
}

.wf-header-capsule--exec-standalone:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.wf-header-capsule__btn--run-all {
  border-radius: 50% !important;
  color: var(--wb-text-primary);
}

.wf-header-capsule__btn--run-all:hover:not(:disabled) {
  background: var(--wb-dock-item-hover);
  color: var(--wb-accent);
  border-radius: 50% !important;
}

.wf-header-capsule__status-pill {
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--wb-bg-elevated);
  color: var(--wb-text-secondary);
}

.wf-header-capsule__status-pill--running {
  background: var(--wb-accent-soft);
  color: var(--wb-accent);
}

.wf-header-capsule__status-pill--completed {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.wf-header-capsule__status-pill--error {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.wf-header-capsule__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--wb-text-secondary);
  cursor: pointer;
  transition: all 150ms ease;
  font-size: var(--wb-fs-body);
}

.wf-header-capsule__btn:hover:not(:disabled) {
  background: var(--wb-dock-item-hover);
  color: var(--wb-text-primary);
}

.wf-header-capsule__btn--active {
  background: var(--wb-accent-soft);
  color: var(--wb-accent);
}

.wf-header-capsule__btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.wf-header-capsule__zoom-text {
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  color: var(--wb-text-primary);
  padding: 0 4px;
  min-width: 44px;
  text-align: center;
  cursor: pointer;
}

.wf-header-capsule__divider {
  width: 1px;
  height: 18px;
  background: var(--wb-border);
  margin: 0 2px;
}

/* ==================== \u6D6E\u5C42\u5C0F\u5730\u56FE\uFF08Minimap Popover\uFF09 ==================== */

.wf-minimap-popover {
  position: absolute;
  top: 64px;
  right: 16px;
  z-index: 20;
  pointer-events: auto;
  width: 220px;
  height: 150px;
  background: var(--wb-surface);
  border: 1px solid var(--wb-border);
  border-radius: 14px;
  box-shadow: var(--wb-shadow-pop);
  overflow: hidden;
  animation: wf-action-menu-in 0.15s ease-out;
}

.wf-minimap-popover .react-flow__minimap {
  position: relative !important;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: none !important;
  border-radius: 0 !important;
}

/* ==================== \u5E95\u90E8 Dock \u6DFB\u52A0\u6C14\u6CE1\u83DC\u5355 ==================== */

.wf-dock-add-popover {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  z-index: 25;
  pointer-events: auto;
  background: rgba(24, 24, 27, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 210px;
  animation: wf-dock-pop-in 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-dock-pop-in {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.wf-dock-add-popover__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: all 120ms ease;
  width: 100%;
}

.wf-dock-add-popover__item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.wf-dock-add-popover__icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: #f4f4f5;
  flex-shrink: 0;
}

.wf-dock-add-popover__item:hover .wf-dock-add-popover__icon {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.wf-dock-add-popover__content {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.wf-dock-add-popover__label {
  font-size: 13px;
  font-weight: 500;
  color: #f4f4f5;
}

.wf-dock-add-popover__desc {
  font-size: 11px;
  color: #a1a1aa;
}

/* ==================== \u8282\u70B9\u5185\u7A7A\u6001\u80F6\u56CA\u6309\u94AE ==================== */

.wf-node-empty-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 0;
}

.wf-node-empty-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: var(--wb-pill-radius);
  border: 1px solid var(--wb-border);
  background: var(--wb-pill-bg);
  color: var(--wb-pill-text);
  font-size: var(--wb-fs-caption);
  cursor: pointer;
  transition: all 150ms ease;
  user-select: none;
}

.wf-node-empty-pill:hover {
  background: var(--wb-pill-hover);
  color: var(--wb-text-primary);
  border-color: var(--wb-border-strong);
}

/* ==================== \u6781\u7B80\u9AD8\u5BC6\u5EA6\u9879\u76EE\u8D44\u4EA7\u62BD\u5C49\uFF08\u65E0\u5197\u4F59\u9876\u680F/\u65E0\u5206\u5272\u7EBF/\u7D27\u51D1\u884C\u9AD8\uFF09 ==================== */

.wf-assets-drawer-root {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 320px;
  min-width: 260px;
  max-width: 500px;
  background: var(--wb-surface, #141416);
  border-left: 1px solid var(--wb-border, rgba(255, 255, 255, 0.1));
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  z-index: 35;
  user-select: none;
  animation: wf-slide-in-right 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.wf-drawer-resize-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -3px;
  width: 6px;
  cursor: col-resize;
  z-index: 40;
  transition: background 0.15s;
}
.wf-drawer-resize-handle:hover,
.wf-drawer-resize-handle.resizing {
  background: var(--wb-accent, #3b82f6);
}

/* \u6781\u7B80\u9876\u680F\uFF08\u9AD8\u5EA6\u6536\u7D27\u81F3 36px\uFF0C\u65E0\u591A\u4F59\u526F\u6807\u9898\uFF0C\u65E0\u5206\u5272\u7EBF\uFF09 */
.wf-drawer-header-compact {
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: var(--wb-surface, #141416);
  border-bottom: none;
}

.wf-segmented-switch-compact {
  display: flex;
  background: var(--wb-bg-canvas, #09090b);
  border-radius: 8px;
  padding: 2px;
  height: 32px;
  width: 168px;
}

.wf-segmented-tab-compact {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--wb-text-secondary, #a1a1aa);
  font-size: var(--wb-fs-body, 13px);
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s;
}
.wf-segmented-tab-compact:hover {
  color: var(--wb-text-primary, #ffffff);
}
.wf-segmented-tab-compact.active {
  background: var(--wb-surface-raised, #27272a);
  color: var(--wb-text-primary, #ffffff);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  font-weight: 600;
}

.wf-drawer-close-btn-compact {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--wb-text-muted, #71717a);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s;
}
.wf-drawer-close-btn-compact:hover {
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
  color: var(--wb-text-primary, #ffffff);
}

.wf-drawer-body {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.wf-drawer-tab-canvas-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
  height: 100%;
}

.wf-canvas-tab-view-compact {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}

.wf-project-assets-view-compact {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
  height: 100%;
}

/* \u7D27\u51D1\u4E3B\u4F53\u5E93\u80F6\u56CA\uFF08\u65E0\u526F\u6807\u9898\uFF0C\u7EAF\u51C0\u5355\u884C\uFF09 */
.wf-subject-hero-card-compact {
  margin: 8px 10px 6px;
  padding: 0 10px;
  height: 32px;
  background: var(--wb-pill-bg, #1f1f23);
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.12s;
  flex-shrink: 0;
}
.wf-subject-hero-card-compact:hover {
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
  border-color: var(--wb-border-strong, rgba(255, 255, 255, 0.16));
}

.wf-subject-hero-left-compact {
  display: flex;
  align-items: center;
  gap: 6px;
}

.wf-subject-hero-name-compact {
  font-size: var(--wb-fs-body, 13px);
  font-weight: 600;
  color: var(--wb-text-primary, #ffffff);
}

/* \u7D27\u51D1\u641C\u7D22\u680F\u4E0E\u4E09\u7EF4\u4E0B\u62C9\u7B5B\u9009\u5DE5\u5177\u680F */
.wf-assets-toolbar-compact {
  padding: 8px 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

.wf-search-row-compact {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-search-input-wrapper-compact {
  flex: 1;
  height: 32px;
  background: var(--wb-bg-canvas, #09090b);
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
}
.wf-search-input-wrapper-compact:focus-within {
  border-color: var(--wb-accent, #3b82f6);
}

.wf-search-input-compact {
  border: none;
  background: transparent;
  outline: none;
  color: var(--wb-text-primary, #ffffff);
  font-size: var(--wb-fs-body, 13px);
  line-height: 18px;
  width: 100%;
}
.wf-search-input-compact::placeholder {
  color: var(--wb-text-muted, #71717a);
}

.wf-view-mode-toggle-compact {
  display: flex;
  background: var(--wb-bg-canvas, #09090b);
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  padding: 2px;
  height: 32px;
}

.wf-view-mode-btn-compact {
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  color: var(--wb-text-muted, #71717a);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
}
.wf-view-mode-btn-compact:hover {
  color: var(--wb-text-primary, #ffffff);
}
.wf-view-mode-btn-compact.active {
  background: var(--wb-surface-raised, #27272a);
  color: var(--wb-text-primary, #ffffff);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.wf-filter-chips-row-compact {
  display: flex;
  align-items: center;
  gap: 5px;
}

.wf-filter-dropdown-wrapper-compact {
  flex: 1;
}

.wf-filter-dropdown-btn-compact {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 8px;
  background: var(--wb-pill-bg, #1f1f23);
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  color: var(--wb-text-secondary, #a1a1aa);
  font-size: var(--wb-fs-body, 13px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.1s;
}
.wf-filter-dropdown-btn-compact:hover {
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
  color: var(--wb-text-primary, #ffffff);
}
.wf-filter-dropdown-btn-compact.active {
  border-color: var(--wb-accent, #3b82f6);
  color: var(--wb-accent, #3b82f6);
  background: var(--wb-accent-soft, rgba(59, 130, 246, 0.15));
  font-weight: 500;
}

/* \u7F51\u683C\u6A21\u5F0F\u7D27\u51D1\u89C6\u56FE */
.wf-grid-view-container-compact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  padding: 2px;
}

.wf-grid-card-compact {
  background: var(--wb-pill-bg, #1f1f23);
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  transition: all 0.12s;
}
.wf-grid-card-compact:hover {
  border-color: var(--wb-border-strong, rgba(255, 255, 255, 0.2));
  transform: translateY(-1px);
}

.wf-grid-card-thumb-compact {
  width: 100%;
  height: 72px;
  background: #09090b;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.wf-grid-card-thumb-compact img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wf-grid-card-duration-compact {
  position: absolute;
  bottom: 2px;
  right: 2px;
  padding: 1px 4px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-size: var(--wb-fs-caption, 12px);
  font-family: monospace;
}

.wf-grid-card-meta-compact {
  padding: 4px 6px;
  display: flex;
  flex-direction: column;
}

.wf-grid-card-title-compact {
  font-size: var(--wb-fs-body, 13px);
  font-weight: 500;
  color: var(--wb-text-primary, #ffffff);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u5185\u5BB9\u5217\u8868\u7D27\u51D1\u9AD8\u5BC6\u5EA6\u6EDA\u52A8\u533A */
.wf-drawer-content-scroll-compact {
  flex: 1;
  overflow-y: auto;
  padding: 4px 8px;
  min-height: 0;
}

.wf-tree-list-container-compact {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.wf-tree-item-compact {
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-secondary, #a1a1aa);
  cursor: pointer;
  gap: 6px;
  position: relative;
  transition: background-color 0.08s, color 0.08s;
}
.wf-tree-item-compact:hover {
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
  color: var(--wb-text-primary, #ffffff);
}
.wf-tree-item-compact.selected {
  background: var(--wb-pill-hover, rgba(255, 255, 255, 0.12));
  color: var(--wb-text-primary, #ffffff);
}

.wf-tree-folder-arrow-compact {
  color: var(--wb-text-muted, #71717a);
  display: flex;
  align-items: center;
  margin-right: -2px;
}

.wf-tree-file-thumb-compact {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  object-fit: cover;
  background: #000;
  flex-shrink: 0;
}

.wf-tree-file-icon-box-compact {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wf-tree-name-compact {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 18px;
}

.wf-item-locate-icon-compact {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: var(--wb-text-muted, #71717a);
  opacity: 0;
  transition: opacity 0.12s, color 0.12s;
}
.wf-tree-item-compact:hover .wf-item-locate-icon-compact,
.wf-tree-item-compact.selected .wf-item-locate-icon-compact {
  opacity: 1;
}
.wf-item-locate-icon-compact:hover {
  color: var(--wb-accent, #3b82f6);
  background: var(--wb-accent-soft, rgba(59, 130, 246, 0.15));
}

.wf-assets-empty-state-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  gap: 4px;
  color: var(--wb-text-muted, #71717a);
}
.wf-assets-empty-icon {
  opacity: 0.35;
}
.wf-assets-empty-title {
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-secondary, #a1a1aa);
}
.wf-assets-empty-subtitle {
  font-size: var(--wb-fs-caption, 12px);
  color: var(--wb-text-muted, #71717a);
  text-align: center;
  max-width: 220px;
  line-height: 1.4;
}

/* \u59CB\u7EC8\u56FA\u5B9A\u5728\u5E95\u90E8\u7684\u64CD\u4F5C\u680F\uFF08\u65E0\u4E0A\u8FB9\u6846\uFF0C\u80CC\u666F\u5B9E\u4F53\u4E0D\u900F\u5149\uFF09 */
.wf-drawer-canvas-bottom-bar-compact {
  padding: 8px 10px;
  background: var(--wb-surface, #141416);
  border-top: none;
  display: flex;
  flex-shrink: 0;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  z-index: 20;
}

.wf-drawer-import-main-btn-compact {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #ffffff;
  color: #121214;
  font-size: var(--wb-fs-body, 13px);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: all 100ms ease;
}
.wf-drawer-import-main-btn-compact:hover {
  background: #f4f4f5;
  transform: translateY(-1px);
}

.wf-assets-bottom-bar-compact {
  padding: 8px 10px;
  background: var(--wb-surface, #141416);
  border-top: none;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  z-index: 20;
}

.wf-assets-action-secondary-btn-compact {
  flex: 1;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.12));
  background: var(--wb-pill-bg, #1f1f23);
  color: var(--wb-text-primary, #ffffff);
  font-size: var(--wb-fs-body, 13px);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 100ms ease;
}
.wf-assets-action-secondary-btn-compact:hover {
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
  border-color: var(--wb-border-strong, rgba(255, 255, 255, 0.2));
}

.wf-assets-action-primary-btn-compact {
  flex: 1;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #ffffff;
  color: #121214;
  font-size: var(--wb-fs-body, 13px);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: all 100ms ease;
}
.wf-assets-action-primary-btn-compact:hover {
  background: #f4f4f5;
  transform: translateY(-1px);
}

/* ==================== \u4E3B\u4F53\u5E93\u4E8C\u7EA7\u9875 (SubjectLibraryView \u7D27\u51D1\u73B0\u4EE3\u7248) ==================== */

.wf-subject-view-compact {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

.wf-subject-nav-header-compact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px 6px;
  flex-shrink: 0;
}

.wf-subject-nav-back-btn-compact {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: transparent;
  color: var(--wb-text-primary, #ffffff);
  font-size: var(--wb-fs-body, 13px);
  font-weight: 600;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  transition: all 0.1s;
}
.wf-subject-nav-back-btn-compact:hover {
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
}

.wf-subject-sort-dropdown-btn-compact {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.1));
  background: var(--wb-pill-bg, #1f1f23);
  color: var(--wb-text-secondary, #a1a1aa);
  font-size: var(--wb-fs-caption, 12px);
  cursor: pointer;
  padding: 0 10px;
  height: 32px;
  border-radius: 8px;
  transition: all 0.1s;
}
.wf-subject-sort-dropdown-btn-compact:hover {
  color: var(--wb-text-primary, #ffffff);
  background: var(--wb-dock-item-hover, rgba(255, 255, 255, 0.08));
}

.wf-subject-toolbar-compact {
  padding: 0 8px 6px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-shrink: 0;
}

.wf-subject-search-input-wrapper-compact {
  height: 32px;
  background: var(--wb-bg-canvas, #09090b);
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  gap: 5px;
}
.wf-subject-search-input-wrapper-compact:focus-within {
  border-color: var(--wb-accent, #3b82f6);
}

.wf-subject-search-input-compact {
  border: none;
  background: transparent;
  outline: none;
  color: var(--wb-text-primary, #ffffff);
  font-size: var(--wb-fs-body, 13px);
  width: 100%;
}
.wf-subject-search-input-compact::placeholder {
  color: var(--wb-text-muted, #71717a);
}

.wf-subject-pills-row-compact {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
}
.wf-subject-pills-row-compact::-webkit-scrollbar {
  display: none;
}

.wf-subject-pill-compact {
  flex-shrink: 0;
  font-size: var(--wb-fs-caption, 12px);
  padding: 0 10px;
  height: 28px;
  line-height: 26px;
  border-radius: 8px;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  background: var(--wb-pill-bg, #1f1f23);
  color: var(--wb-text-muted, #a1a1aa);
  cursor: pointer;
  transition: all 0.1s;
}
.wf-subject-pill-compact:hover {
  color: var(--wb-text-primary, #ffffff);
}
.wf-subject-pill-compact.active {
  border-color: var(--wb-accent, #3b82f6);
  background: var(--wb-accent-soft, rgba(59, 130, 246, 0.15));
  color: var(--wb-accent, #3b82f6);
  font-weight: 500;
}

.wf-subject-grid-compact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  padding: 2px 8px 8px;
}

.wf-subject-card-compact {
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  background: var(--wb-pill-bg, #1f1f23);
  overflow: hidden;
  cursor: pointer;
  transition: all 120ms ease;
  display: flex;
  flex-direction: column;
}
.wf-subject-card-compact:hover {
  border-color: var(--wb-accent, #3b82f6);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.wf-subject-card-cover-compact {
  height: 80px;
  background: #09090b;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-subject-card-img-compact {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wf-subject-card-placeholder-compact {
  color: var(--wb-text-muted, #71717a);
}

.wf-subject-card-count-badge-compact {
  position: absolute;
  bottom: 3px;
  right: 3px;
  padding: 1px 4px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-size: var(--wb-fs-caption, 12px);
  display: flex;
  align-items: center;
  gap: 3px;
}

.wf-subject-card-info-compact {
  padding: 5px 6px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.wf-subject-card-name-compact {
  font-size: var(--wb-fs-body, 13px);
  font-weight: 500;
  color: var(--wb-text-primary, #ffffff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wf-subject-card-tags-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.wf-subject-card-tag-compact {
  font-size: var(--wb-fs-caption, 12px);
  padding: 1px 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--wb-text-muted, #a1a1aa);
}

.wf-subject-card-placeholder {
  color: var(--wb-text-muted);
}

.wf-subject-card-count {
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.65);
  color: #ffffff;
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.wf-subject-card-info {
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wf-subject-card-name {
  font-size: 11px;
  font-weight: 500;
  color: var(--wb-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wf-subject-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.wf-subject-card-tag {
  font-size: 9px;
  padding: 1px 4px;
  border-radius: 4px;
  background: var(--wb-pill-bg);
  color: var(--wb-text-muted);
}

.wf-subject-footer {
  padding: 10px 12px;
  border-top: 1px solid var(--wb-border);
  background: var(--wb-surface);
}

.wf-subject-create-btn {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  background: var(--wb-pill-bg);
  color: var(--wb-text-primary);
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: all 120ms ease;
}
.wf-subject-create-btn:hover {
  background: var(--wb-pill-hover);
  border-color: var(--wb-border-strong);
}

/* ==================== Popover \u6D6E\u5C42\u4F53\u7CFB (wf-popover-portal) ==================== */

.wf-popover-portal {
  background: #18181b !important;
  background: var(--wb-surface-raised, #18181b) !important;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.15)) !important;
  border-radius: 8px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65), 0 2px 6px rgba(0, 0, 0, 0.4) !important;
  padding: 6px;
  display: flex;
  flex-direction: column;
  user-select: none;
  z-index: 99999 !important;
  color: var(--wb-text-primary, #ffffff);
  animation: wf-popover-in 0.12s ease-out;
}

@keyframes wf-popover-in {
  from { opacity: 0; transform: scale(0.96) translateY(-4px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.wf-popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px 6px;
  border-bottom: 1px solid var(--wb-border);
  margin-bottom: 4px;
}

.wf-popover-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--wb-text-muted);
}

.wf-popover-action-btn {
  font-size: 10px;
  border: none;
  background: transparent;
  color: var(--wb-accent);
  cursor: pointer;
  padding: 2px 4px;
}

.wf-popover-section-title {
  font-size: 10px;
  font-weight: 600;
  color: var(--wb-text-muted);
  padding: 4px 8px;
}

.wf-popover-divider {
  height: 1px;
  background: var(--wb-border);
  margin: 4px 0;
}

.wf-popover-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wf-popover-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-primary);
  transition: background 100ms ease;
}
.wf-popover-item:hover {
  background: var(--wb-dock-item-hover);
}
.wf-popover-item--selected {
  color: var(--wb-text-primary);
  font-weight: 500;
}

.wf-popover-item-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-popover-checkbox {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid var(--wb-border-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--wb-surface);
  transition: all 100ms ease;
}
.wf-popover-checkbox--checked {
  background: #ffffff;
  border-color: #ffffff;
  color: #121214;
}

.wf-popover-check-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex-shrink: 0;
  color: #121214;
  transition: all 100ms ease;
}
.wf-popover-check-circle--checked {
  background: #ffffff;
  border-color: #ffffff;
  color: #121214;
}

.wf-popover-tag-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.wf-popover-item-count {
  font-size: 10px;
  color: var(--wb-text-muted);
}

.wf-popover-item-check {
  color: var(--wb-accent);
}

/* ==================== \u53F3\u952E\u83DC\u5355\u4F53\u7CFB (wf-context-menu-portal) ==================== */

.wf-context-menu-portal {
  background: #18181b !important;
  background: var(--wb-surface-raised, #18181b) !important;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.15)) !important;
  border-radius: 8px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65), 0 2px 6px rgba(0, 0, 0, 0.4) !important;
  padding: 5px;
  display: flex;
  flex-direction: column;
  user-select: none;
  z-index: 99999 !important;
  color: var(--wb-text-primary, #ffffff);
  animation: wf-popover-in 0.12s ease-out;
}

.wf-context-menu-item {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-primary);
  cursor: pointer;
  transition: all 100ms ease;
  gap: 8px;
}
.wf-context-menu-item:hover {
  background: var(--wb-dock-item-hover);
}
.wf-context-menu-item--danger {
  color: #ef4444;
}
.wf-context-menu-item--danger:hover {
  background: rgba(239, 68, 68, 0.1);
}

.wf-context-menu-icon {
  color: var(--wb-text-muted);
}
.wf-context-menu-item--danger .wf-context-menu-icon {
  color: #ef4444;
}

.wf-context-menu-label {
  flex: 1;
}

.wf-context-menu-shortcut {
  font-size: var(--wb-fs-caption, 12px);
  font-family: var(--wb-font-family);
  color: var(--wb-text-muted);
  padding-left: 8px;
}

.wf-context-menu-divider {
  height: 1px;
  background: var(--wb-border);
  margin: 4px 0;
}

/* ==================== \u60AC\u505C\u5143\u6570\u636E\u5361\u7247 (wf-hover-inspector-portal) ==================== */

.wf-hover-inspector-portal {
  background: #18181b !important;
  background: var(--wb-surface-raised, #18181b) !important;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.15)) !important;
  border-radius: 10px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65) !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 99999 !important;
  color: var(--wb-text-primary, #ffffff);
  animation: wf-popover-in 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.wf-hover-inspector-preview {
  height: 140px;
  background: var(--wb-pill-bg);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-hover-inspector-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wf-hover-inspector-placeholder {
  color: var(--wb-text-muted);
}

.wf-hover-inspector-duration {
  position: absolute;
  bottom: 6px;
  right: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-size: 10px;
  font-family: monospace;
}

.wf-hover-inspector-content {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wf-hover-inspector-title {
  font-size: var(--wb-fs-caption);
  font-weight: 600;
  color: var(--wb-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wf-hover-inspector-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wf-hover-inspector-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
}
.wf-hover-inspector-row--full {
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.wf-hover-inspector-label {
  color: var(--wb-text-muted);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.wf-hover-inspector-value {
  color: var(--wb-text-primary);
  font-weight: 500;
}
.wf-hover-inspector-value--prompt {
  color: var(--wb-text-secondary);
  font-size: 10px;
  line-height: 1.3;
  max-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wf-hover-inspector-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--wb-border);
}

.wf-hover-inspector-tag {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--wb-pill-bg);
  color: var(--wb-text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 3px;
}


/* ==================== \u5FEB\u6377\u952E\u9762\u677F\uFF08ShortcutsModal\uFF09 ==================== */

.wf-shortcuts-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(4px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: wf-fade-in 0.15s ease;
}

.wf-shortcuts-modal {
  width: 520px;
  max-width: 90vw;
  max-height: 80vh;
  background: var(--wb-surface);
  border: 1px solid var(--wb-border);
  border-radius: 20px;
  box-shadow: var(--wb-shadow-pop);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  animation: wf-dock-pop-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.wf-shortcuts-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px 14px;
  border-bottom: 1px solid var(--wb-border);
}

.wf-shortcuts-modal__title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-shortcuts-modal__title {
  font-size: var(--wb-fs-title);
  font-weight: 600;
  color: var(--wb-text-primary);
}

.wf-shortcuts-modal__body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wf-shortcuts-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wf-shortcuts-section__title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--wb-text-muted);
  letter-spacing: 0.5px;
}

.wf-shortcuts-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wf-shortcut-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
}

.wf-shortcut-row__desc {
  font-size: var(--wb-fs-body);
  color: var(--wb-text-primary);
}

.wf-shortcut-keys {
  display: flex;
  gap: 4px;
}

.wf-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  font-size: 11px;
  font-family: inherit;
  font-weight: 500;
  color: var(--wb-text-primary);
  background: var(--wb-pill-bg);
  border: 1px solid var(--wb-border);
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* ==================== Native OmniMux UI Suite (Zero-Antd) ==================== */

/* --- Custom Toast --- */
.wf-toast-container {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
}

.wf-toast {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(24, 24, 27, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 16px 36px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
  color: #f4f4f5;
  font-size: 13px;
  font-weight: 500;
  pointer-events: auto;
  animation: wf-toast-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-toast-in {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* --- Custom Select --- */
.wf-custom-select-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  border: 1px solid var(--wb-border);
  background: var(--wb-surface-raised);
  color: var(--wb-text-primary);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 450;
  cursor: pointer;
  outline: none;
  transition: all 120ms ease;
  user-select: none;
  width: fit-content;
  min-width: 36px;
  max-width: 220px;
}

.wf-custom-select-trigger:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.wf-custom-select-trigger--open {
  border-color: var(--wb-accent, #679EFE);
  box-shadow: 0 0 0 2px rgba(65, 118, 230, 0.2);
}

.wf-custom-select-trigger--ghost {
  border: none;
  background: transparent;
  padding: 2px 4px;
  min-width: 36px;
  max-width: 90px;
}

.wf-custom-select-trigger--ghost:hover {
  background: rgba(255, 255, 255, 0.06);
}

.wf-custom-select-trigger--standard {
  height: 32px;
  border-radius: 8px;
  padding: 0 10px;
  min-width: 88px;
}

.wf-param-bar__select--model .wf-custom-select-trigger {
  min-width: 96px;
  max-width: 170px;
}

.wf-param-bar__select--ghost .wf-custom-select-trigger {
  min-width: 36px;
  max-width: 90px;
  padding: 2px 4px;
}

.wf-custom-select-label {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-custom-select-chevron {
  color: var(--wb-text-muted);
  transition: transform 150ms ease;
  flex-shrink: 0;
}

.wf-custom-select-trigger--open .wf-custom-select-chevron {
  transform: rotate(180deg);
}

.wf-custom-select-dropdown,
.wf-custom-dropdown-menu {
  background: rgba(24, 24, 27, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 6px;
  max-height: 280px;
  overflow-y: auto;
  min-width: 150px;
  max-width: 300px;
  width: max-content;
  box-sizing: border-box;
  animation: wfCustomSelectFadeIn 120ms cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

@keyframes wf-dropdown-in {
  from {
    opacity: 0;
    transform: translateY(4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.wf-custom-select-list,
.wf-custom-dropdown-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 240px;
  overflow-y: auto;
  scrollbar-width: thin;
}

.wf-custom-select-option,
.wf-custom-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #e4e4e7;
  font-size: 13px;
  font-weight: 450;
  text-align: left;
  cursor: pointer;
  transition: all 100ms ease;
}

.wf-custom-select-option--rich {
  padding: 8px 10px;
  align-items: center;
}

.wf-custom-select-option-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  color: #a1a1aa;
  flex-shrink: 0;
  margin-right: 2px;
}

.wf-custom-select-option:hover .wf-custom-select-option-icon {
  color: #ffffff;
}

.wf-custom-select-option-main {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.wf-custom-select-option-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-custom-select-badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 1.3;
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.4);
}

.wf-custom-select-subtitle {
  font-size: 11px;
  color: #71717a;
  line-height: 1.2;
}

.wf-custom-select-option:hover .wf-custom-select-subtitle {
  color: #a1a1aa;
}

.wf-custom-select-option:hover,
.wf-custom-dropdown-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.wf-custom-select-option--selected,
.wf-custom-dropdown-item--selected {
  background: rgba(65, 118, 230, 0.2) !important;
  color: #679EFE !important;
  font-weight: 500;
}

.wf-custom-select-option-check {
  color: #679EFE;
  flex-shrink: 0;
}

.wf-custom-dropdown-item-icon {
  display: flex;
  align-items: center;
  color: #a1a1aa;
  flex-shrink: 0;
}

.wf-custom-dropdown-item:hover .wf-custom-dropdown-item-icon {
  color: #ffffff;
}

/* --- Custom Slider --- */
.wf-custom-slider {
  display: flex;
  align-items: center;
  width: 100%;
}

.wf-custom-slider__input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  transition: background 150ms ease;
}

.wf-custom-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid var(--wb-accent, #679EFE);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 120ms ease;
}

.wf-custom-slider__input::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

/* --- Custom Modal --- */
.wf-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: wf-modal-fade 0.15s ease-out;
}

@keyframes wf-modal-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wf-modal-card {
  background: rgba(24, 24, 27, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  box-shadow: 0 24px 60px -8px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08);
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: wf-modal-scale 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-modal-scale {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.wf-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.wf-modal-title {
  font-size: 15px;
  font-weight: 600;
  color: #f4f4f5;
}

.wf-modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #a1a1aa;
  cursor: pointer;
  transition: all 120ms ease;
}

.wf-modal-close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.wf-modal-body {
  padding: 20px;
  overflow-y: auto;
}

.wf-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* ==================== ResourcePickerModal\uFF08\u9009\u62E9\u8D44\u6E90\uFF09 ==================== */

.wf-picker-modal {
  max-height: 85vh;
}

.wf-picker-modal .wf-modal-body.wf-picker-modal__body {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 420px;
  max-height: calc(85vh - 120px);
}

.wf-picker-modal .wf-modal-footer {
  padding: 0;
  border-top: none;
}

.wf-picker-tabs {
  display: flex;
  gap: 20px;
  padding: 0 20px;
  border-bottom: 1px solid var(--wb-border);
  flex-shrink: 0;
}

.wf-picker-tab {
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  padding: 0 0 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--wb-text-secondary);
  cursor: pointer;
  line-height: 20px;
}

.wf-picker-tab:hover {
  color: var(--wb-text-primary);
}

.wf-picker-tab--active {
  color: var(--wb-text-primary);
  font-weight: 600;
}

.wf-picker-tab--active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--wb-text-primary);
  border-radius: 1px;
}

.wf-picker-pane {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 14px 20px 16px;
}

.wf-picker-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  margin-bottom: 12px;
  min-height: 32px;
}

.wf-picker-search {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 200px;
  min-width: 140px;
  max-width: 260px;
  height: 32px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  background: var(--wb-pill-bg);
}

.wf-picker-search__icon {
  color: var(--wb-text-muted);
  flex-shrink: 0;
}

.wf-picker-search__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--wb-text-primary);
  font-size: 13px;
}

.wf-picker-search__input::placeholder {
  color: var(--wb-text-muted);
}

.wf-picker-filter {
  flex-shrink: 0;
  min-width: 88px;
}

.wf-picker-view-toggle {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 2px;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  background: var(--wb-pill-bg);
}

.wf-picker-view-btn {
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--wb-text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.wf-picker-view-btn:hover {
  color: var(--wb-text-primary);
  background: var(--wb-dock-item-hover);
}

.wf-picker-view-btn--active {
  color: var(--wb-text-primary);
  background: var(--wb-surface);
}

.wf-picker-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  color: var(--wb-text-muted);
  font-size: 13px;
}

.wf-picker-grid {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding-bottom: 4px;
}

.wf-picker-card {
  appearance: none;
  -webkit-appearance: none;
  text-align: left;
  border: 1.5px solid transparent;
  border-radius: 10px;
  background: var(--wb-pill-bg);
  padding: 4px;
  cursor: pointer;
  overflow: hidden;
  min-width: 0;
  transition: border-color 150ms ease, background 150ms ease;
}

.wf-picker-card:hover {
  border-color: var(--wb-border-strong);
}

.wf-picker-card--selected {
  border-color: var(--wb-accent);
  background: var(--wb-accent-soft);
}

.wf-picker-card--added,
.wf-picker-card:disabled {
  cursor: default;
  opacity: 0.88;
}

.wf-picker-card__thumb {
  position: relative;
  width: 100%;
  height: 76px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--wb-surface-raised);
}

.wf-picker-card__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.wf-picker-card__fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--wb-text-muted);
}

.wf-picker-card__fallback--image { color: var(--dsw-alias-label-secondary, #c084fc); }
.wf-picker-card__fallback--video { color: var(--dsw-alias-label-secondary, #fb923c); }
.wf-picker-card__fallback--audio { color: var(--dsw-alias-label-secondary, #34d399); }

.wf-picker-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 6px;
  min-width: 0;
}

.wf-picker-card__name {
  font-size: 11px;
  color: var(--wb-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.wf-picker-type-tag {
  flex-shrink: 0;
  font-size: 10px;
  line-height: 16px;
  padding: 0 6px;
  border-radius: 4px;
  color: var(--wb-text-secondary);
  background: var(--wb-surface);
  border: 1px solid var(--wb-border);
}

.wf-picker-check {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid var(--dsw-alias-border-strong, rgba(255, 255, 255, 0.45));
  background: var(--dsw-alias-bg-elevated, rgba(0, 0, 0, 0.35));
  color: var(--dsw-alias-on-accent, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-picker-check--on {
  border-color: var(--wb-accent);
  background: var(--wb-accent);
}

.wf-picker-added-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  color: var(--dsw-alias-on-accent, #fff);
  background: var(--wb-success, #2e9e5b);
}

.wf-picker-added-badge--inline {
  position: static;
  flex-shrink: 0;
}

.wf-picker-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wf-picker-row {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 10px;
  border: 1.5px solid transparent;
  background: var(--wb-pill-bg);
  cursor: pointer;
  text-align: left;
}

.wf-picker-row:hover {
  border-color: var(--wb-border-strong);
}

.wf-picker-row--selected {
  border-color: var(--wb-accent);
  background: var(--wb-accent-soft);
}

.wf-picker-row--added,
.wf-picker-row:disabled {
  cursor: default;
}

.wf-picker-row__thumb {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--wb-surface-raised);
}

.wf-picker-row__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wf-picker-row__sub {
  font-size: 11px;
  color: var(--wb-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wf-picker-row .wf-picker-check {
  position: static;
  flex-shrink: 0;
}

.wf-picker-dropzone {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  min-height: 168px;
  border-radius: 12px;
  border: 1.5px dashed var(--wb-border-strong, rgba(255, 255, 255, 0.22));
  background: var(--wb-pill-bg);
  color: var(--wb-text-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  padding: 24px 16px;
}

.wf-picker-dropzone:hover,
.wf-picker-dropzone--active {
  border-color: var(--wb-accent);
  background: var(--wb-accent-soft);
  color: var(--wb-text-primary);
}

.wf-picker-dropzone__icon {
  color: var(--wb-text-muted);
  margin-bottom: 4px;
}

.wf-picker-dropzone__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--wb-text-primary);
}

.wf-picker-dropzone__hint {
  font-size: 12px;
  color: var(--wb-text-muted);
}

.wf-picker-dropzone__cta {
  margin-top: 8px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  background: var(--wb-surface);
  color: var(--wb-text-primary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
}

.wf-picker-file-input {
  display: none;
}

.wf-picker-file-list {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 220px;
  overflow-y: auto;
}

.wf-picker-file-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 10px;
  background: var(--wb-pill-bg);
  border: 1px solid var(--wb-border);
}

.wf-picker-file-item__thumb {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--wb-surface-raised);
}

.wf-picker-file-remove {
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--wb-text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}

.wf-picker-file-remove:hover {
  color: var(--wb-danger);
  background: var(--wb-danger-soft);
}

.wf-picker-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 20px;
  border-top: 1px solid var(--wb-border);
}

.wf-picker-btn {
  appearance: none;
  -webkit-appearance: none;
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.wf-picker-btn--ghost {
  border: 1px solid var(--wb-border);
  background: transparent;
  color: var(--wb-text-secondary);
}

.wf-picker-btn--ghost:hover {
  color: var(--wb-text-primary);
  background: var(--wb-dock-item-hover);
}

.wf-picker-btn--primary {
  border: 1px solid transparent;
  background: var(--wb-text-primary);
  color: var(--wb-bg, #fff);
}

.wf-picker-btn--primary:hover:not(:disabled) {
  opacity: 0.92;
}

.wf-picker-btn--primary:disabled {
  opacity: 0.4;
  cursor: default;
}

/* ==================== \u901A\u7528\u8282\u70B9\u542F\u52A8\u5668\u7A7A\u6001 (NodeLauncherState) ==================== */

.wf-node-launcher-state {
  padding: 24px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.wf-node-launcher-state__icon-box {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-bg-elevated, var(--wb-surface-raised, rgba(255, 255, 255, 0.08)));
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
  border: 1px solid var(--dsw-alias-border, var(--wb-border, rgba(255, 255, 255, 0.12)));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 4px;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.wf-node-launcher-state:hover .wf-node-launcher-state__icon-box {
  transform: scale(1.04);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.wf-node-launcher-state__sub-icon {
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-bg-base, var(--wb-surface, #1e1e22));
  border: 1px solid var(--dsw-alias-border, var(--wb-border, rgba(255, 255, 255, 0.14)));
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary, inherit));
}

.wf-node-launcher-state__title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
}

.wf-node-launcher-state__blurb {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary, inherit));
  max-width: 240px;
}

.wf-node-launcher-state__actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 190px;
  margin-top: 4px;
}

.wf-node-launcher-state__pill-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--wb-border, var(--dsw-alias-border, rgba(255, 255, 255, 0.12)));
  background: var(--wb-surface, var(--dsw-alias-bg-elevated, #1a1a1c));
  color: var(--wb-text-primary, var(--dsw-alias-label-primary, inherit));
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 150ms ease;
}

.wf-node-launcher-state__pill-btn:hover {
  background: var(--wb-surface-raised, color-mix(in srgb, var(--dsw-alias-bg-elevated, var(--wb-surface-raised, #252528)) 90%, #fff 10%));
  border-color: var(--wb-border-strong, var(--dsw-alias-border-focus, rgba(255, 255, 255, 0.24)));
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.wf-node-launcher-state__pill-btn--primary {
  border-radius: 999px;
  background: var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6));
  border-color: transparent;
  color: var(--dsw-alias-on-primary, #fff);
  box-shadow: 0 2px 8px color-mix(in srgb, var(--dsw-alias-control-primary, #5b68f6) 35%, transparent);
}

.wf-node-launcher-state__pill-btn--primary:hover {
  background: color-mix(in srgb, var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6)) 88%, #fff 12%);
  border-color: transparent;
}

/* ==================== video_composition result (wf-vc-result) ====================
 * T5\uFF1A\u65E7 launcher \u79C1\u6709\u6837\u5F0F\u65CF\uFF0814 \u6761\uFF09\u6574\u4F53\u4E0B\u67B6\uFF0C\u6539\u4E3A wf-vc-result \u6807\u51C6\u7C7B\u3002
 * 100% \u6D88\u8D39 DSH \u539F\u751F --dsw-alias-* Token\uFF1B32px \u63A7\u4EF6\u9AD8 / 8px \u5706\u89D2\uFF1B0 \u88F8\u8272\u3002
 * \u4EAE\u6697\u81EA\u9002\u5E94\u5B8C\u5168\u4F9D\u8D56\u5BBF\u4E3B CSS \u53D8\u91CF\u7EA7\u8054\uFF0C\u65E0 JS \u4E3B\u9898\u5206\u652F\u3002
 * ============================================================================ */

.wf-vc-result {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 16px 14px;
  box-sizing: border-box;
}

.wf-vc-result__preview {
  position: relative;
  flex: 1 1 auto;
  min-height: 180px;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  cursor: pointer;
}

.wf-vc-result__video,
.wf-vc-result__thumb {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.wf-vc-result__video {
  object-fit: contain;
}

.wf-vc-result__thumb {
  object-fit: cover;
}

.wf-vc-result__fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-tertiary);
}

/* \u64AD\u653E\u906E\u7F69\uFF08\u5E95\u6697\u5316\uFF09\u4E0E\u4E2D\u592E\u64AD\u653E Chip\uFF08\u6309\u94AE Primary \u8BED\u4E49\uFF0C\u53CC\u4E3B\u9898\u5BF9\u6BD4\u5747\u8FBE\u6807\uFF09 */
.wf-vc-result__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-bg-mask-1);
  transition: background 150ms ease;
}

.wf-vc-result__preview:hover .wf-vc-result__play {
  background: var(--dsw-alias-bg-mask-2);
}

.wf-vc-result__play-chip {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
  box-shadow: 0 4px 14px var(--dsw-alias-bg-mask-3);
}

/* Meta \u80F6\u56CA\uFF1A\u65F6\u957F / \u5206\u8FA8\u7387\uFF0C\u6570\u5B57\u8D70 Mono \u7B49\u5BBD\u6808 */
.wf-vc-result__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 0;
}

.wf-vc-result__meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wf-vc-result__meta dt {
  font-size: 11px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary);
}

.wf-vc-result__meta dd {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
}

.wf-vc-result__mono {
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
  font-variant-numeric: tabular-nums;
}

/* \u64CD\u4F5C\u6309\u94AE\u884C\uFF1ARe-edit Primary / Download Secondary\uFF0832px \u9AD8 / 8px \u5706\u89D2\uFF09 */
.wf-vc-result__actions {
  display: flex;
  gap: 8px;
}

.wf-vc-result__btn {
  flex: 1 1 auto;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease, transform 120ms cubic-bezier(0.16, 1, 0.3, 1);
}

.wf-vc-result__btn:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  border-color: var(--dsw-alias-border-l3);
}

.wf-vc-result__btn:active {
  transform: scale(0.96);
}

.wf-vc-result__btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.wf-vc-result__btn--primary {
  border-color: transparent;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}

.wf-vc-result__btn--primary:hover {
  border-color: transparent;
  background: var(--dsw-alias-button-primary-hover);
}




`;var cM=`/**
 * omnimux-workflow - Table Node & Fullscreen Spreadsheet Stage Styles
 * \u4E25\u683C\u9075\u5FAA --wb-* \u8BBE\u8BA1\u53D8\u91CF\u4F53\u7CFB\uFF0C\u9002\u914D\u6D45\u8272\u4E0E\u6DF1\u8272\u4E3B\u9898
 */

/* ==================== 1. \u753B\u5E03\u7F29\u7565\u5361\u7247\u6001 (Canvas Preview Node) ==================== */

.wf-table-node {
  position: relative;
  user-select: none;
}

.wf-table-node__header {
  position: absolute;
  top: -30px;
  left: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--wb-fs-title, 14px);
  font-weight: 600;
  color: var(--wb-text-primary, #1a1d26);
  pointer-events: none;
  white-space: nowrap;
}

.wf-table-node__header-icon {
  width: 16px;
  height: 16px;
  color: var(--wb-text-secondary, #5f6472);
  stroke-width: 2;
}

.wf-table-node__actions {
  position: absolute;
  top: -46px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--wb-surface, #ffffff);
  border: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  border-radius: var(--wb-header-radius, 16px);
  padding: 4px 8px;
  box-shadow: var(--wb-shadow-card, 0 8px 24px rgba(15, 20, 32, 0.06));
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease;
  z-index: 20;
}

.wf-table-node:hover .wf-table-node__actions {
  opacity: 1;
  pointer-events: auto;
}

.wf-table-node__action-btn {
  width: 28px;
  height: 28px;
  border-radius: var(--wb-pill-radius, 8px);
  border: none;
  background: transparent;
  color: var(--wb-text-secondary, #5f6472);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}

.wf-table-node__action-btn:hover {
  background: var(--wb-pill-bg, #f2f3f5);
  color: var(--wb-text-primary, #1a1d26);
}

.wf-table-node__card {
  width: 520px;
  min-height: 270px;
  background: var(--wb-surface, #ffffff);
  border: 2px solid var(--wb-text-primary, #1a1d26);
  border-radius: var(--wb-node-radius, 20px);
  box-shadow: var(--wb-shadow-card, 0 8px 24px rgba(15, 20, 32, 0.06));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: default;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.wf-table-node__card--selected {
  border-color: var(--wb-node-ring, #000000);
  box-shadow:
    inset 0 0 0 2px var(--wb-node-ring, #000000),
    var(--wb-shadow-card-hover);
}

.wf-table-node__card-head {
  background: var(--wb-pill-bg, #f2f3f5);
  border-bottom: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--wb-fs-body, 13px);
  font-weight: 500;
  color: var(--wb-text-primary, #1a1d26);
}

.wf-table-node__card-body {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 180px;
}

.wf-table-node__empty-state {
  text-align: center;
  color: var(--wb-text-muted, #9aa0ae);
  font-size: var(--wb-fs-body, 13px);
}

.wf-table-node__preview-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.wf-table-node__preview-item {
  padding: 8px 12px;
  background: var(--wb-bg, #f7f8fa);
  border: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  border-radius: var(--wb-pill-radius, 8px);
  font-size: var(--wb-fs-body, 13px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--wb-text-primary, #1a1d26);
}

.wf-table-node__corner-handle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--wb-surface, #ffffff);
  border: 1.5px solid var(--wb-node-ring, #000000);
  pointer-events: none;
}
.wf-table-node__corner-handle--nw { top: -4px; left: -4px; }
.wf-table-node__corner-handle--ne { top: -4px; right: -4px; }
.wf-table-node__corner-handle--sw { bottom: -4px; left: -4px; }
.wf-table-node__corner-handle--se { bottom: -4px; right: -4px; }


/* ==================== 2. \u5168\u5C4F\u72EC\u7ACB\u7535\u5B50\u8868\u683C\u821E\u53F0 (Spreadsheet Stage) ==================== */

.wf-stage-overlay {
  position: fixed;
  inset: 0;
  z-index: 9990;
  background: var(--wb-surface, #18181b);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  font-family: var(--wb-font-family);
  animation: wf-stage-fade-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-stage-fade-in {
  from { opacity: 0; transform: scale(0.99); }
  to { opacity: 1; transform: scale(1); }
}

.wf-stage-topbar {
  height: 52px;
  border-bottom: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  background: var(--wb-surface, #18181b);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 40;
}

.wf-stage-topbar__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.wf-stage-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-radius: var(--wb-pill-radius, 8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: #f4f4f5;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: inherit;
  user-select: none;
}

.wf-stage-back-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--wb-accent, #4176E6);
}

.wf-stage-back-btn:active {
  transform: scale(0.98);
}

.wf-stage-close-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.wf-stage-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-stage-title-icon {
  color: var(--wb-accent, #165dff);
  flex-shrink: 0;
}

.wf-stage-title-input {
  font-size: 15px;
  font-weight: 600;
  color: var(--wb-text-primary, #1a1d26);
  border: 1px solid transparent;
  padding: 4px 8px;
  border-radius: var(--wb-pill-radius, 8px);
  background: transparent;
  outline: none;
  transition: all 120ms ease;
  font-family: inherit;
  min-width: 140px;
}

.wf-stage-title-input:hover {
  background: var(--wb-bg, #f7f8fa);
  border-color: var(--wb-border, rgba(15, 20, 32, 0.08));
}

.wf-stage-title-input:focus {
  background: var(--wb-surface, #ffffff);
  border-color: var(--wb-accent, #165dff);
  box-shadow: 0 0 0 2px var(--wb-accent-soft, rgba(22, 93, 255, 0.15));
}

.wf-stage-topbar__right {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.wf-stage-btn-wrapper {
  position: relative;
}

.wf-stage-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-radius: var(--wb-pill-radius, 8px);
  border: none;
  background: var(--wb-pill-bg, #f2f3f5);
  font-size: var(--wb-fs-body, 13px);
  font-weight: 500;
  color: var(--wb-text-primary, #1a1d26);
  cursor: pointer;
  position: relative;
  transition: background 120ms ease, color 120ms ease;
  font-family: inherit;
}

.wf-stage-pill-btn:hover {
  background: var(--wb-pill-hover, #e5e6eb);
}

.wf-stage-pill-btn--active {
  background: var(--wb-pill-hover, #dcdfe6);
}

.wf-stage-dot-badge {
  width: 6px;
  height: 6px;
  background: var(--wb-accent, #165dff);
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
}

.wf-stage-icon-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--wb-pill-radius, 8px);
  border: none;
  background: transparent;
  color: var(--wb-text-secondary, #5f6472);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}

.wf-stage-icon-btn:hover:not(:disabled) {
  background: var(--wb-pill-bg, #f2f3f5);
  color: var(--wb-text-primary, #1a1d26);
}

.wf-stage-icon-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.wf-stage-divider {
  width: 1px;
  height: 16px;
  background: var(--wb-border, rgba(15, 20, 32, 0.08));
  margin: 0 4px;
}


/* ==================== 3. \u5F39\u5C42\u9762\u677F (Popovers) ==================== */

.wf-popover-card {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  left: auto;
  background: rgba(24, 24, 27, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--wb-header-radius, 16px);
  box-shadow: 0 16px 40px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.06);
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow: visible;
  box-sizing: border-box;
  max-width: calc(100vw - 32px);
  animation: wf-popover-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-popover-in {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.wf-popover-title {
  padding: 14px 18px 12px 18px;
  font-size: 14px;
  font-weight: 600;
  color: #f4f4f5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* \u5B57\u6BB5\u914D\u7F6E\u9762\u677F */
.wf-popover-field-config {
  width: 320px;
}

.wf-field-config-list {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 360px;
  overflow-y: auto;
  overflow-x: hidden;
}

.wf-field-config-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--wb-pill-radius, 8px);
  transition: all 120ms ease;
}

.wf-field-config-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
}

.wf-field-config-subtle-btn {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #a1a1aa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 120ms ease;
}

.wf-field-config-subtle-btn:hover,
.wf-field-config-subtle-btn--active {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.wf-popover-context-bubble {
  position: fixed;
  width: 100px;
  background: rgba(32, 32, 38, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.7);
  z-index: 10010;
  padding: 4px;
  display: flex;
  flex-direction: column;
  animation: wf-popover-in 100ms ease-out;
}

.wf-context-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 500;
  color: #f4f4f5;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: all 120ms ease;
  font-family: inherit;
}

.wf-context-menu-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.wf-context-menu-item--danger {
  color: #ef4444;
}
.wf-context-menu-item--danger:hover {
  background: rgba(239, 68, 68, 0.15);
  color: #ff6b6b;
}

/* \u7B5B\u9009\u9762\u677F */
.wf-popover-filter {
  width: 480px;
}

.wf-filter-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 360px;
  overflow-y: auto;
}

.wf-filter-row {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.wf-filter-capsule-select.wf-custom-select-trigger,
.wf-filter-row .wf-custom-select-trigger {
  height: 34px;
  width: 100%;
  max-width: 100%;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  font-size: 12px;
  color: #f4f4f5;
  box-sizing: border-box;
}

.wf-filter-row .wf-custom-select-trigger:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.wf-filter-capsule-input {
  flex: 1;
  height: 34px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  font-size: 12px;
  color: #f4f4f5;
  outline: none;
  transition: all 120ms ease;
  min-width: 0;
  box-sizing: border-box;
  font-family: inherit;
}

.wf-filter-capsule-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--wb-accent, #4176E6);
  box-shadow: 0 0 0 2px rgba(65, 118, 230, 0.25);
}

.wf-filter-capsule-input::placeholder {
  color: #71717a;
}

/* \u884C\u9AD8\u9762\u677F */
.wf-popover-row-height {
  width: 180px;
}

.wf-row-height-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 13px;
  color: #d4d4d8;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: all 120ms ease;
  font-family: inherit;
  width: 100%;
}

.wf-row-height-item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.wf-row-height-item--selected {
  font-weight: 600;
  background: rgba(65, 118, 230, 0.15);
  color: var(--wb-accent, #4176E6);
}


/* ==================== 4. \u7535\u5B50\u8868\u683C\u7F51\u683C\u533A (DataGrid) ==================== */

.wf-grid-container {
  flex: 1;
  overflow: auto;
  background: var(--wb-surface, #18181b);
  position: relative;
  display: flex;
  flex-direction: column;
}

.wf-grid-scroll-pane {
  flex: 1;
  overflow: auto;
  min-width: 100%;
  position: relative;
}

.wf-grid-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-primary, #f4f4f5);
}

.wf-grid-table thead {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--wb-bg, #141416);
}

.wf-grid-th {
  border-bottom: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  border-right: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  height: 38px;
  padding: 0;
  text-align: left;
  font-weight: 500;
  color: var(--wb-text-secondary, #a1a1aa);
  background: var(--wb-bg, #141416);
  position: relative;
  user-select: none;
  box-sizing: border-box;
}

.wf-grid-th-content {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 100%;
  min-width: 0;
}

.wf-grid-th-icon {
  display: inline-flex;
  align-items: center;
  color: var(--wb-text-muted, #71717a);
  flex-shrink: 0;
}

.wf-grid-th-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  color: var(--wb-text-primary, #f4f4f5);
}

.wf-grid-th--select {
  width: 48px;
  text-align: center;
}

.wf-grid-checkbox {
  cursor: pointer;
  accent-color: var(--wb-accent, #4176E6);
}

.wf-grid-th--plus {
  width: 44px;
  text-align: center;
  cursor: pointer;
  color: var(--wb-text-muted, #71717a);
  transition: all 120ms ease;
}

.wf-grid-th-plus-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.wf-grid-th--plus:hover {
  background: var(--wb-pill-bg, rgba(255, 255, 255, 0.06));
  color: var(--wb-text-primary, #ffffff);
}

.wf-grid-th--filler {
  border-right: none;
}

.wf-grid-td {
  border-bottom: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  border-right: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  padding: 0;
  margin: 0;
  color: var(--wb-text-primary, #f4f4f5);
  vertical-align: middle;
  background: var(--wb-surface, #18181b);
  position: relative;
  box-sizing: border-box;
}

.wf-grid-table tr:hover .wf-grid-td {
  background: rgba(255, 255, 255, 0.02);
}

.wf-grid-td--select {
  text-align: center;
  color: var(--wb-text-muted, #71717a);
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background: var(--wb-surface-raised, #1b1b1e);
  user-select: none;
}

.wf-grid-td--plus-col {
  background: var(--wb-bg, #141416);
}

.wf-grid-td--filler {
  border-right: none;
}

/* 4 \u6863\u884C\u9AD8\u9AD8\u5EA6\u89C4\u8303 */
.wf-grid-row--low .wf-grid-td { height: 36px; }
.wf-grid-row--medium .wf-grid-td { height: 48px; }
.wf-grid-row--tall .wf-grid-td { height: 72px; }
.wf-grid-row--extraTall .wf-grid-td { height: 120px; }

/* \u5355\u5143\u683C\u7535\u5B50\u8868\u683C\u6807\u51C6\u65E0\u7F1D\u7F16\u8F91\u8F93\u5165\u6846 */
.wf-grid-cell-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 12px;
  font-size: 13px;
  font-family: inherit;
  color: var(--wb-text-primary, #f4f4f5);
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  transition: box-shadow 100ms ease, background 100ms ease;
}

.wf-grid-cell-input:hover:not(:focus) {
  background: rgba(255, 255, 255, 0.03);
}

.wf-grid-cell-input:focus {
  background: rgba(65, 118, 230, 0.08);
  box-shadow: inset 0 0 0 2px var(--wb-accent, #4176E6);
}

.wf-grid-cell-input::placeholder {
  color: var(--wb-text-muted, #71717a);
  opacity: 0.5;
}

/* \u9644\u4EF6\u5355\u5143\u683C */
.wf-grid-cell-attachment {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  height: 100%;
  overflow-x: auto;
}

.wf-grid-attachment-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--wb-text-primary, #f4f4f5);
  font-size: 12px;
  white-space: nowrap;
}

.wf-grid-attachment-empty {
  color: var(--wb-text-muted, #71717a);
  font-size: 12px;
  cursor: pointer;
}

.wf-grid-attachment-empty:hover {
  color: var(--wb-accent, #4176E6);
}

/* \u5E95\u90E8\u6DFB\u52A0\u884C\u6309\u94AE\u6761 */
.wf-grid-add-row-bar {
  padding: 8px 16px;
  border-bottom: 1px solid var(--wb-border, rgba(255, 255, 255, 0.08));
  background: var(--wb-surface, #18181b);
}

.wf-grid-add-row-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid var(--wb-border, rgba(255, 255, 255, 0.12));
  background: rgba(255, 255, 255, 0.04);
  font-size: 12px;
  font-weight: 500;
  color: var(--wb-text-secondary, #a1a1aa);
  cursor: pointer;
  transition: all 120ms ease;
  font-family: inherit;
}

.wf-grid-add-row-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--wb-text-primary, #f4f4f5);
}

.wf-grid-add-row-btn:active {
  transform: scale(0.98);
}


/* ==================== 5. \u3010\u6DFB\u52A0/\u7F16\u8F91\u5217\u3011\u6A21\u6001\u5F39\u7A97 (Modal) ==================== */

.wf-modal-input {
  width: 100%;
  height: 38px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  padding: 0 12px;
  font-size: 13px;
  color: #f4f4f5;
  outline: none;
  transition: border-color 120ms ease, background 120ms ease, box-shadow 120ms ease;
  box-sizing: border-box;
  font-family: inherit;
}

.wf-modal-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--wb-accent, #4176E6);
  box-shadow: 0 0 0 2px rgba(65, 118, 230, 0.25);
}

.wf-modal-input::placeholder {
  color: #71717a;
}

.wf-modal-select-wrapper {
  width: 100%;
}

.wf-modal-custom-select.wf-custom-select-trigger,
.wf-modal-select-wrapper .wf-custom-select-trigger {
  width: 100%;
  max-width: 100%;
  height: 38px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: #f4f4f5;
  padding: 0 12px;
  font-size: 13px;
  box-sizing: border-box;
}

.wf-modal-select-wrapper .wf-custom-select-trigger:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.wf-modal-select-wrapper .wf-custom-select-trigger--open {
  border-color: var(--wb-accent, #4176E6);
  box-shadow: 0 0 0 2px rgba(65, 118, 230, 0.25);
}

.wf-modal-btn-primary {
  height: 34px;
  padding: 0 18px;
  background: var(--wb-accent, #4176E6);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: inherit;
}

.wf-modal-btn-primary:hover {
  background: var(--wb-accent-hover, #679EFE);
  opacity: 0.95;
}

.wf-modal-btn-primary:active {
  transform: scale(0.98);
}

.wf-modal-btn-cancel {
  height: 34px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.06);
  color: #d4d4d8;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 120ms ease;
  font-family: inherit;
}

.wf-modal-btn-cancel:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.wf-modal-btn-cancel:active {
  transform: scale(0.98);
}
`;var Q9=[{id:"omnimux-workflow-xyflow-base",css:sM},{id:"omnimux-workflow-theme",css:dM},{id:"omnimux-workflow-components",css:uM},{id:"omnimux-workflow-table-node",css:cM}];function fM(){for(let{id:e,css:t}of Q9){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var c0=E(X(),1),yc=new WeakMap;function J9(e,t){if(!e||yc.has(e))return;fM();let a=(0,pM.createRoot)(e);yc.set(e,{root:a,lastProps:t}),a.render((0,c0.jsx)(u0,{...t}))}function eO(e,t){let a=yc.get(e);a&&(a.lastProps=t,a.root.render((0,c0.jsx)(u0,{...t})))}function tO(e){let t=yc.get(e);t&&(t.root.unmount(),yc.delete(e))}return cN(aO);})();
