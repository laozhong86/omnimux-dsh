var __omnimuxWorkflowCanvas=(()=>{var DI=Object.create;var dd=Object.defineProperty;var RI=Object.getOwnPropertyDescriptor;var zI=Object.getOwnPropertyNames;var OI=Object.getPrototypeOf,PI=Object.prototype.hasOwnProperty;var Jt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},BI=(e,t)=>{for(var a in t)dd(e,a,{get:t[a],enumerable:!0})},Vx=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of zI(t))!PI.call(e,n)&&n!==a&&dd(e,n,{get:()=>t[n],enumerable:!(o=RI(t,n))||o.enumerable});return e};var R=(e,t,a)=>(a=e!=null?DI(OI(e)):{},Vx(t||!e||!e.__esModule?dd(a,"default",{value:e,enumerable:!0}):a,e)),HI=e=>Vx(dd({},"__esModule",{value:!0}),e);var Jx=Jt($e=>{"use strict";function Sp(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<cd(n,t))e[o]=t,e[a]=n,a=o;else break e}}function yo(e){return e.length===0?null:e[0]}function pd(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,u=e[s];if(0>cd(i,a))s<n&&0>cd(u,i)?(e[o]=u,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>cd(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function cd(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}$e.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Gx=performance,$e.unstable_now=function(){return Gx.now()}):(wp=Date,Xx=wp.now(),$e.unstable_now=function(){return wp.now()-Xx});var Gx,wp,Xx,qo=[],Ln=[],UI=1,Ra=null,Ht=3,Lp=!1,Ki=!1,Qi=!1,_p=!1,Zx=typeof setTimeout=="function"?setTimeout:null,Wx=typeof clearTimeout=="function"?clearTimeout:null,Yx=typeof setImmediate<"u"?setImmediate:null;function fd(e){for(var t=yo(Ln);t!==null;){if(t.callback===null)pd(Ln);else if(t.startTime<=e)pd(Ln),t.sortIndex=t.expirationTime,Sp(qo,t);else break;t=yo(Ln)}}function kp(e){if(Qi=!1,fd(e),!Ki)if(yo(qo)!==null)Ki=!0,kl||(kl=!0,_l());else{var t=yo(Ln);t!==null&&Ip(kp,t.startTime-e)}}var kl=!1,$i=-1,Kx=5,Qx=-1;function $x(){return _p?!0:!($e.unstable_now()-Qx<Kx)}function vp(){if(_p=!1,kl){var e=$e.unstable_now();Qx=e;var t=!0;try{e:{Ki=!1,Qi&&(Qi=!1,Wx($i),$i=-1),Lp=!0;var a=Ht;try{t:{for(fd(e),Ra=yo(qo);Ra!==null&&!(Ra.expirationTime>e&&$x());){var o=Ra.callback;if(typeof o=="function"){Ra.callback=null,Ht=Ra.priorityLevel;var n=o(Ra.expirationTime<=e);if(e=$e.unstable_now(),typeof n=="function"){Ra.callback=n,fd(e),t=!0;break t}Ra===yo(qo)&&pd(qo),fd(e)}else pd(qo);Ra=yo(qo)}if(Ra!==null)t=!0;else{var r=yo(Ln);r!==null&&Ip(kp,r.startTime-e),t=!1}}break e}finally{Ra=null,Ht=a,Lp=!1}t=void 0}}finally{t?_l():kl=!1}}}var _l;typeof Yx=="function"?_l=function(){Yx(vp)}:typeof MessageChannel<"u"?(Cp=new MessageChannel,jx=Cp.port2,Cp.port1.onmessage=vp,_l=function(){jx.postMessage(null)}):_l=function(){Zx(vp,0)};var Cp,jx;function Ip(e,t){$i=Zx(function(){e($e.unstable_now())},t)}$e.unstable_IdlePriority=5;$e.unstable_ImmediatePriority=1;$e.unstable_LowPriority=4;$e.unstable_NormalPriority=3;$e.unstable_Profiling=null;$e.unstable_UserBlockingPriority=2;$e.unstable_cancelCallback=function(e){e.callback=null};$e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Kx=0<e?Math.floor(1e3/e):5};$e.unstable_getCurrentPriorityLevel=function(){return Ht};$e.unstable_next=function(e){switch(Ht){case 1:case 2:case 3:var t=3;break;default:t=Ht}var a=Ht;Ht=t;try{return e()}finally{Ht=a}};$e.unstable_requestPaint=function(){_p=!0};$e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Ht;Ht=e;try{return t()}finally{Ht=a}};$e.unstable_scheduleCallback=function(e,t,a){var o=$e.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:UI++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Sp(Ln,e),yo(qo)===null&&e===yo(Ln)&&(Qi?(Wx($i),$i=-1):Qi=!0,Ip(kp,a-o))):(e.sortIndex=n,Sp(qo,e),Ki||Lp||(Ki=!0,kl||(kl=!0,_l()))),e};$e.unstable_shouldYield=$x;$e.unstable_wrapCallback=function(e){var t=Ht;return function(){var a=Ht;Ht=t;try{return e.apply(this,arguments)}finally{Ht=a}}}});var t0=Jt((BR,e0)=>{"use strict";e0.exports=Jx()});var f0=Jt(me=>{"use strict";var Np=Symbol.for("react.transitional.element"),FI=Symbol.for("react.portal"),qI=Symbol.for("react.fragment"),VI=Symbol.for("react.strict_mode"),GI=Symbol.for("react.profiler"),XI=Symbol.for("react.consumer"),YI=Symbol.for("react.context"),jI=Symbol.for("react.forward_ref"),ZI=Symbol.for("react.suspense"),WI=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),KI=Symbol.for("react.activity"),a0=Symbol.iterator;function QI(e){return e===null||typeof e!="object"?null:(e=a0&&e[a0]||e["@@iterator"],typeof e=="function"?e:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,u0={};function Ml(e,t,a){this.props=e,this.context=t,this.refs=u0,this.updater=a||i0}Ml.prototype.isReactComponent={};Ml.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ml.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function d0(){}d0.prototype=Ml.prototype;function Tp(e,t,a){this.props=e,this.context=t,this.refs=u0,this.updater=a||i0}var Ap=Tp.prototype=new d0;Ap.constructor=Tp;s0(Ap,Ml.prototype);Ap.isPureReactComponent=!0;var o0=Array.isArray;function Ep(){}var Xe={H:null,A:null,T:null,S:null},c0=Object.prototype.hasOwnProperty;function Dp(e,t,a){var o=a.ref;return{$$typeof:Np,type:e,key:t,ref:o!==void 0?o:null,props:a}}function $I(e,t){return Dp(e.type,t,e.props)}function Rp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Np}function JI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var n0=/\/+/g;function Mp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?JI(""+e.key):t.toString(36)}function e5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ep,Ep):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Il(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Np:case FI:l=!0;break;case l0:return l=e._init,Il(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+Mp(e,0):o,o0(n)?(a="",l!=null&&(a=l.replace(n0,"$&/")+"/"),Il(n,t,a,"",function(u){return u})):n!=null&&(Rp(n)&&(n=$I(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(n0,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(o0(e))for(var s=0;s<e.length;s++)o=e[s],r=i+Mp(o,s),l+=Il(o,t,a,r,n);else if(s=QI(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+Mp(o,s++),l+=Il(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Il(e5(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function md(e,t,a){if(e==null)return e;var o=[],n=0;return Il(e,o,"","",function(r){return t.call(a,r,n++)}),o}function t5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var r0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},a5={map:md,forEach:function(e,t,a){md(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return md(e,function(){t++}),t},toArray:function(e){return md(e,function(t){return t})||[]},only:function(e){if(!Rp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Activity=KI;me.Children=a5;me.Component=Ml;me.Fragment=qI;me.Profiler=GI;me.PureComponent=Tp;me.StrictMode=VI;me.Suspense=ZI;me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xe;me.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Xe.H.useMemoCache(e)}};me.cache=function(e){return function(){return e.apply(null,arguments)}};me.cacheSignal=function(){return null};me.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=s0({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!c0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return Dp(e.type,n,o)};me.createContext=function(e){return e={$$typeof:YI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:XI,_context:e},e};me.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)c0.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return Dp(e,r,n)};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:jI,render:e}};me.isValidElement=Rp;me.lazy=function(e){return{$$typeof:l0,_payload:{_status:-1,_result:e},_init:t5}};me.memo=function(e,t){return{$$typeof:WI,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Xe.T,a={};Xe.T=a;try{var o=e(),n=Xe.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Ep,r0)}catch(r){r0(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Xe.T=t}};me.unstable_useCacheRefresh=function(){return Xe.H.useCacheRefresh()};me.use=function(e){return Xe.H.use(e)};me.useActionState=function(e,t,a){return Xe.H.useActionState(e,t,a)};me.useCallback=function(e,t){return Xe.H.useCallback(e,t)};me.useContext=function(e){return Xe.H.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e,t){return Xe.H.useDeferredValue(e,t)};me.useEffect=function(e,t){return Xe.H.useEffect(e,t)};me.useEffectEvent=function(e){return Xe.H.useEffectEvent(e)};me.useId=function(){return Xe.H.useId()};me.useImperativeHandle=function(e,t,a){return Xe.H.useImperativeHandle(e,t,a)};me.useInsertionEffect=function(e,t){return Xe.H.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Xe.H.useLayoutEffect(e,t)};me.useMemo=function(e,t){return Xe.H.useMemo(e,t)};me.useOptimistic=function(e,t){return Xe.H.useOptimistic(e,t)};me.useReducer=function(e,t,a){return Xe.H.useReducer(e,t,a)};me.useRef=function(e){return Xe.H.useRef(e)};me.useState=function(e){return Xe.H.useState(e)};me.useSyncExternalStore=function(e,t,a){return Xe.H.useSyncExternalStore(e,t,a)};me.useTransition=function(){return Xe.H.useTransition()};me.version="19.2.8"});var J=Jt((UR,p0)=>{"use strict";p0.exports=f0()});var g0=Jt(Gt=>{"use strict";var o5=J();function m0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _n(){}var Vt={d:{f:_n,r:function(){throw Error(m0(522))},D:_n,C:_n,L:_n,m:_n,X:_n,S:_n,M:_n},p:0,findDOMNode:null},n5=Symbol.for("react.portal");function r5(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:n5,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Ji=o5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gd(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vt;Gt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(m0(299));return r5(e,t,null,a)};Gt.flushSync=function(e){var t=Ji.T,a=Vt.p;try{if(Ji.T=null,Vt.p=2,e)return e()}finally{Ji.T=t,Vt.p=a,Vt.d.f()}};Gt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Vt.d.C(e,t))};Gt.prefetchDNS=function(e){typeof e=="string"&&Vt.d.D(e)};Gt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=gd(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Vt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Vt.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Gt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=gd(t.as,t.crossOrigin);Vt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Vt.d.M(e)};Gt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=gd(a,t.crossOrigin);Vt.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Gt.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=gd(t.as,t.crossOrigin);Vt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Vt.d.m(e)};Gt.requestFormReset=function(e){Vt.d.r(e)};Gt.unstable_batchedUpdates=function(e,t){return e(t)};Gt.useFormState=function(e,t,a){return Ji.H.useFormState(e,t,a)};Gt.useFormStatus=function(){return Ji.H.useHostTransitionStatus()};Gt.version="19.2.8"});var wo=Jt((qR,x0)=>{"use strict";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(e){console.error(e)}}h0(),x0.exports=g0()});var Ev=Jt(Uc=>{"use strict";var xt=t0(),Vb=J(),l5=wo();function G(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gb(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Xb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yb(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b0(e){if(Hs(e)!==e)throw Error(G(188))}function i5(e){var t=e.alternate;if(!t){if(t=Hs(e),t===null)throw Error(G(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return b0(n),e;if(r===o)return b0(n),t;r=r.sibling}throw Error(G(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(G(189))}}if(a.alternate!==o)throw Error(G(190))}if(a.tag!==3)throw Error(G(188));return a.stateNode.current===a?e:t}function jb(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=jb(e),t!==null)return t;e=e.sibling}return null}var Ze=Object.assign,s5=Symbol.for("react.element"),hd=Symbol.for("react.transitional.element"),is=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),Zb=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),Wb=Symbol.for("react.consumer"),Ko=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),hm=Symbol.for("react.suspense_list"),dg=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),xm=Symbol.for("react.activity"),u5=Symbol.for("react.memo_cache_sentinel"),y0=Symbol.iterator;function es(e){return e===null||typeof e!="object"?null:(e=y0&&e[y0]||e["@@iterator"],typeof e=="function"?e:null)}var d5=Symbol.for("react.client.reference");function bm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===d5?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rl:return"Fragment";case mm:return"Profiler";case Zb:return"StrictMode";case gm:return"Suspense";case hm:return"SuspenseList";case xm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case is:return"Portal";case Ko:return e.displayName||"Context";case Wb:return(e._context.displayName||"Context")+".Consumer";case ug:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dg:return t=e.displayName||null,t!==null?t:bm(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return bm(e(t))}catch{}}return null}var ss=Array.isArray,le=Vb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne=l5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Er={pending:!1,data:null,method:null,action:null},ym=[],zl=-1;function _o(e){return{current:e}}function vt(e){0>zl||(e.current=ym[zl],ym[zl]=null,zl--)}function qe(e,t){zl++,ym[zl]=e.current,e.current=t}var Lo=_o(null),_s=_o(null),Pn=_o(null),Wd=_o(null);function Kd(e,t){switch(qe(Pn,t),qe(_s,e),qe(Lo,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kb(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kb(t),e=gv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Lo),qe(Lo,e)}function Jl(){vt(Lo),vt(_s),vt(Pn)}function wm(e){e.memoizedState!==null&&qe(Wd,e);var t=Lo.current,a=gv(t,e.type);t!==a&&(qe(_s,e),qe(Lo,a))}function Qd(e){_s.current===e&&(vt(Lo),vt(_s)),Wd.current===e&&(vt(Wd),Os._currentValue=Er)}var zp,w0;function _r(e){if(zp===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);zp=t&&t[1]||"",w0=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zp+e+w0}var Op=!1;function Pp(e,t){if(!e||Op)return"";Op=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(f){var c=f}Reflect.construct(e,[],p)}else{try{p.call()}catch(f){c=f}e.call(p.prototype)}}else{try{throw Error()}catch(f){c=f}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(f){if(f&&c&&typeof f.stack=="string")return[f.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),u=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{Op=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_r(a):""}function c5(e,t){switch(e.tag){case 26:case 27:case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return e.child!==t&&t!==null?_r("Suspense Fallback"):_r("Suspense");case 19:return _r("SuspenseList");case 0:case 15:return Pp(e.type,!1);case 11:return Pp(e.type.render,!1);case 1:return Pp(e.type,!0);case 31:return _r("Activity");default:return""}}function v0(e){try{var t="",a=null;do t+=c5(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vm=Object.prototype.hasOwnProperty,cg=xt.unstable_scheduleCallback,Bp=xt.unstable_cancelCallback,f5=xt.unstable_shouldYield,p5=xt.unstable_requestPaint,ba=xt.unstable_now,m5=xt.unstable_getCurrentPriorityLevel,Kb=xt.unstable_ImmediatePriority,Qb=xt.unstable_UserBlockingPriority,$d=xt.unstable_NormalPriority,g5=xt.unstable_LowPriority,$b=xt.unstable_IdlePriority,h5=xt.log,x5=xt.unstable_setDisableYieldValue,Us=null,ya=null;function An(e){if(typeof h5=="function"&&x5(e),ya&&typeof ya.setStrictMode=="function")try{ya.setStrictMode(Us,e)}catch{}}var wa=Math.clz32?Math.clz32:w5,b5=Math.log,y5=Math.LN2;function w5(e){return e>>>=0,e===0?32:31-(b5(e)/y5|0)|0}var xd=256,bd=262144,yd=4194304;function kr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lc(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=kr(o):(l&=i,l!==0?n=kr(l):a||(a=i&~e,a!==0&&(n=kr(a))))):(i=o&~r,i!==0?n=kr(i):l!==0?n=kr(l):a||(a=o&~e,a!==0&&(n=kr(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Fs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function v5(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jb(){var e=yd;return yd<<=1,(yd&62914560)===0&&(yd=4194304),e}function Hp(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function qs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function C5(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=l&~a;0<a;){var d=31-wa(a),p=1<<d;i[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var f=c[d];f!==null&&(f.lane&=-536870913)}a&=~p}o!==0&&ey(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function ey(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-wa(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ty(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-wa(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function ay(e,t){var a=t&-t;return a=(a&42)!==0?1:fg(a),(a&(e.suspendedLanes|t))!==0?0:a}function fg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oy(){var e=Ne.p;return e!==0?e:(e=window.event,e===void 0?32:kv(e.type))}function C0(e,t){var a=Ne.p;try{return Ne.p=e,t()}finally{Ne.p=a}}var Kn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Kn,ra="__reactProps$"+Kn,di="__reactContainer$"+Kn,Cm="__reactEvents$"+Kn,S5="__reactListeners$"+Kn,L5="__reactHandles$"+Kn,S0="__reactResources$"+Kn,Vs="__reactMarker$"+Kn;function mg(e){delete e[Nt],delete e[ra],delete e[Cm],delete e[S5],delete e[L5]}function Ol(e){var t=e[Nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[di]||a[Nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Tb(e);e!==null;){if(a=e[Nt])return a;e=Tb(e)}return t}e=a,a=e.parentNode}return null}function ci(e){if(e=e[Nt]||e[di]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function us(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(G(33))}function Yl(e){var t=e[S0];return t||(t=e[S0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function wt(e){e[Vs]=!0}var ny=new Set,ry={};function Hr(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(ry[e]=t,e=0;e<t.length;e++)ny.add(t[e])}var _5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),L0={},_0={};function k5(e){return vm.call(_0,e)?!0:vm.call(L0,e)?!1:_5.test(e)?_0[e]=!0:(L0[e]=!0,!1)}function Rd(e,t,a){if(k5(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function wd(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vo(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Oa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ly(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I5(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sm(e){if(!e._valueTracker){var t=ly(e)?"checked":"value";e._valueTracker=I5(e,t,""+e[t])}}function iy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=ly(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Jd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var M5=/[\n"\\]/g;function Ha(e){return e.replace(M5,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lm(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Oa(t)):e.value!==""+Oa(t)&&(e.value=""+Oa(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?_m(e,l,Oa(t)):a!=null?_m(e,l,Oa(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Oa(i):e.removeAttribute("name")}function sy(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Sm(e);return}a=a!=null?""+Oa(a):"",t=t!=null?""+Oa(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Sm(e)}function _m(e,t,a){t==="number"&&Jd(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function jl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Oa(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function uy(e,t,a){if(t!=null&&(t=""+Oa(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Oa(a):""}function dy(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(G(92));if(ss(o)){if(1<o.length)throw Error(G(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Oa(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Sm(e)}function ti(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var E5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function k0(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||E5.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function cy(e,t,a){if(t!=null&&typeof t!="object")throw Error(G(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&k0(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&k0(e,r,t[r])}function gg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zd(e){return T5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qo(){}var km=null;function hg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,Zl=null;function I0(e){var t=ci(e);if(t&&(e=t.stateNode)){var a=e[ra]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lm(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ha(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[ra]||null;if(!n)throw Error(G(90));Lm(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&iy(o)}break e;case"textarea":uy(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&jl(e,!!a.multiple,t,!1)}}}var Up=!1;function fy(e,t,a){if(Up)return e(t,a);Up=!0;try{var o=e(t);return o}finally{if(Up=!1,(Pl!==null||Zl!==null)&&(Oc(),Pl&&(t=Pl,e=Zl,Zl=Pl=null,I0(t),e)))for(t=0;t<e.length;t++)I0(e[t])}}function ks(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ra]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(G(231,t,typeof a));return a}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Im=!1;if(an)try{El={},Object.defineProperty(El,"passive",{get:function(){Im=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{Im=!1}var El,Dn=null,xg=null,Od=null;function py(){if(Od)return Od;var e,t=xg,a=t.length,o,n="value"in Dn?Dn.value:Dn.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return Od=n.slice(e,1<o?1-o:void 0)}function Pd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vd(){return!0}function M0(){return!1}function la(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?vd:M0,this.isPropagationStopped=M0,this}return Ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vd)},persist:function(){},isPersistent:vd}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=la(Ur),Gs=Ze({},Ur,{view:0,detail:0}),A5=la(Gs),Fp,qp,ts,kc=Ze({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(Fp=e.screenX-ts.screenX,qp=e.screenY-ts.screenY):qp=Fp=0,ts=e),Fp)},movementY:function(e){return"movementY"in e?e.movementY:qp}}),E0=la(kc),D5=Ze({},kc,{dataTransfer:0}),R5=la(D5),z5=Ze({},Gs,{relatedTarget:0}),Vp=la(z5),O5=Ze({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),P5=la(O5),B5=Ze({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H5=la(B5),U5=Ze({},Ur,{data:0}),N0=la(U5),F5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V5[e])?!!t[e]:!1}function bg(){return G5}var X5=Ze({},Gs,{key:function(e){if(e.key){var t=F5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bg,charCode:function(e){return e.type==="keypress"?Pd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y5=la(X5),j5=Ze({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T0=la(j5),Z5=Ze({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bg}),W5=la(Z5),K5=Ze({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q5=la(K5),$5=Ze({},kc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J5=la($5),eM=Ze({},Ur,{newState:0,oldState:0}),tM=la(eM),aM=[9,13,27,32],yg=an&&"CompositionEvent"in window,fs=null;an&&"documentMode"in document&&(fs=document.documentMode);var oM=an&&"TextEvent"in window&&!fs,my=an&&(!yg||fs&&8<fs&&11>=fs),A0=" ",D0=!1;function gy(e,t){switch(e){case"keyup":return aM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bl=!1;function nM(e,t){switch(e){case"compositionend":return hy(t);case"keypress":return t.which!==32?null:(D0=!0,A0);case"textInput":return e=t.data,e===A0&&D0?null:e;default:return null}}function rM(e,t){if(Bl)return e==="compositionend"||!yg&&gy(e,t)?(e=py(),Od=xg=Dn=null,Bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return my&&t.locale!=="ko"?null:t.data;default:return null}}var lM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lM[e.type]:t==="textarea"}function xy(e,t,a,o){Pl?Zl?Zl.push(o):Zl=[o]:Pl=o,t=xc(t,"onChange"),0<t.length&&(a=new _c("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var ps=null,Is=null;function iM(e){fv(e,0)}function Ic(e){var t=us(e);if(iy(t))return e}function z0(e,t){if(e==="change")return t}var by=!1;an&&(an?(Sd="oninput"in document,Sd||(Gp=document.createElement("div"),Gp.setAttribute("oninput","return;"),Sd=typeof Gp.oninput=="function"),Cd=Sd):Cd=!1,by=Cd&&(!document.documentMode||9<document.documentMode));var Cd,Sd,Gp;function O0(){ps&&(ps.detachEvent("onpropertychange",yy),Is=ps=null)}function yy(e){if(e.propertyName==="value"&&Ic(Is)){var t=[];xy(t,Is,e,hg(e)),fy(iM,t)}}function sM(e,t,a){e==="focusin"?(O0(),ps=t,Is=a,ps.attachEvent("onpropertychange",yy)):e==="focusout"&&O0()}function uM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ic(Is)}function dM(e,t){if(e==="click")return Ic(t)}function cM(e,t){if(e==="input"||e==="change")return Ic(t)}function fM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ca=typeof Object.is=="function"?Object.is:fM;function Ms(e,t){if(Ca(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!vm.call(t,n)||!Ca(e[n],t[n]))return!1}return!0}function P0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function B0(e,t){var a=P0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=P0(a)}}function wy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jd(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Jd(e.document)}return t}function wg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pM=an&&"documentMode"in document&&11>=document.documentMode,Hl=null,Mm=null,ms=null,Em=!1;function H0(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Em||Hl==null||Hl!==Jd(o)||(o=Hl,"selectionStart"in o&&wg(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ms&&Ms(ms,o)||(ms=o,o=xc(Mm,"onSelect"),0<o.length&&(t=new _c("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Hl)))}function Lr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ul={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionrun:Lr("Transition","TransitionRun"),transitionstart:Lr("Transition","TransitionStart"),transitioncancel:Lr("Transition","TransitionCancel"),transitionend:Lr("Transition","TransitionEnd")},Xp={},Cy={};an&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete Ul.animationend.animation,delete Ul.animationiteration.animation,delete Ul.animationstart.animation),"TransitionEvent"in window||delete Ul.transitionend.transition);function Fr(e){if(Xp[e])return Xp[e];if(!Ul[e])return e;var t=Ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Cy)return Xp[e]=t[a];return e}var Sy=Fr("animationend"),Ly=Fr("animationiteration"),_y=Fr("animationstart"),mM=Fr("transitionrun"),gM=Fr("transitionstart"),hM=Fr("transitioncancel"),ky=Fr("transitionend"),Iy=new Map,Nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nm.push("scrollEnd");function oo(e,t){Iy.set(e,t),Hr(t,[e])}var ec=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},za=[],Fl=0,vg=0;function Mc(){for(var e=Fl,t=vg=Fl=0;t<e;){var a=za[t];za[t++]=null;var o=za[t];za[t++]=null;var n=za[t];za[t++]=null;var r=za[t];if(za[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&My(a,n,r)}}function Ec(e,t,a,o){za[Fl++]=e,za[Fl++]=t,za[Fl++]=a,za[Fl++]=o,vg|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Cg(e,t,a,o){return Ec(e,t,a,o),tc(e)}function qr(e,t){return Ec(e,null,null,t),tc(e)}function My(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-wa(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function tc(e){if(50<Ss)throw Ss=0,Qm=null,Error(G(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ql={};function xM(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ha(e,t,a,o){return new xM(e,t,a,o)}function Sg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jo(e,t){var a=e.alternate;return a===null?(a=ha(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ey(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bd(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Sg(e)&&(l=1);else if(typeof e=="string")l=w4(e,a,Lo.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xm:return e=ha(31,a,t,n),e.elementType=xm,e.lanes=r,e;case Rl:return Nr(a.children,n,r,t);case Zb:l=8,n|=24;break;case mm:return e=ha(12,a,t,n|2),e.elementType=mm,e.lanes=r,e;case gm:return e=ha(13,a,t,n),e.elementType=gm,e.lanes=r,e;case hm:return e=ha(19,a,t,n),e.elementType=hm,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ko:l=10;break e;case Wb:l=9;break e;case ug:l=11;break e;case dg:l=14;break e;case kn:l=16,o=null;break e}l=29,a=Error(G(130,e===null?"null":typeof e,"")),o=null}return t=ha(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Nr(e,t,a,o){return e=ha(7,e,o,t),e.lanes=a,e}function Yp(e,t,a){return e=ha(6,e,null,t),e.lanes=a,e}function Ny(e){var t=ha(18,null,null,0);return t.stateNode=e,t}function jp(e,t,a){return t=ha(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var U0=new WeakMap;function Ua(e,t){if(typeof e=="object"&&e!==null){var a=U0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:v0(t)},U0.set(e,t),t)}return{value:e,source:t,stack:v0(t)}}var Vl=[],Gl=0,ac=null,Es=0,Pa=[],Ba=0,Yn=null,vo=1,Co="";function Zo(e,t){Vl[Gl++]=Es,Vl[Gl++]=ac,ac=e,Es=t}function Ty(e,t,a){Pa[Ba++]=vo,Pa[Ba++]=Co,Pa[Ba++]=Yn,Yn=e;var o=vo;e=Co;var n=32-wa(o)-1;o&=~(1<<n),a+=1;var r=32-wa(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,vo=1<<32-wa(t)+n|a<<n|o,Co=r+e}else vo=1<<r|a<<n|o,Co=e}function Lg(e){e.return!==null&&(Zo(e,1),Ty(e,1,0))}function _g(e){for(;e===ac;)ac=Vl[--Gl],Vl[Gl]=null,Es=Vl[--Gl],Vl[Gl]=null;for(;e===Yn;)Yn=Pa[--Ba],Pa[Ba]=null,Co=Pa[--Ba],Pa[Ba]=null,vo=Pa[--Ba],Pa[Ba]=null}function Ay(e,t){Pa[Ba++]=vo,Pa[Ba++]=Co,Pa[Ba++]=Yn,vo=t.id,Co=t.overflow,Yn=e}var Tt=null,je=null,Ie=!1,Bn=null,Fa=!1,Tm=Error(G(519));function jn(e){var t=Error(G(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ns(Ua(t,e)),Tm}function F0(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Nt]=e,t[ra]=o,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(a=0;a<Rs.length;a++)Ce(Rs[a],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),sy(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),dy(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||mv(t.textContent,a)?(o.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),o.onScroll!=null&&Ce("scroll",t),o.onScrollEnd!=null&&Ce("scrollend",t),o.onClick!=null&&(t.onclick=Qo),t=!0):t=!1,t||jn(e,!0)}function q0(e){for(Tt=e.return;Tt;)switch(Tt.tag){case 5:case 31:case 13:Fa=!1;return;case 27:case 3:Fa=!0;return;default:Tt=Tt.return}}function Nl(e){if(e!==Tt)return!1;if(!Ie)return q0(e),Ie=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ag(e.type,e.memoizedProps)),a=!a),a&&je&&jn(e),q0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));je=Nb(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));je=Nb(e)}else t===27?(t=je,Qn(e.type)?(e=lg,lg=null,je=e):je=t):je=Tt?Va(e.stateNode.nextSibling):null;return!0}function Rr(){je=Tt=null,Ie=!1}function Zp(){var e=Bn;return e!==null&&(oa===null?oa=e:oa.push.apply(oa,e),Bn=null),e}function Ns(e){Bn===null?Bn=[e]:Bn.push(e)}var Am=_o(null),Vr=null,$o=null;function Mn(e,t,a){qe(Am,t._currentValue),t._currentValue=a}function en(e){e._currentValue=Am.current,vt(Am)}function Dm(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Rm(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Dm(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(G(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Dm(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function fi(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(G(387));if(l=l.memoizedProps,l!==null){var i=n.type;Ca(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===Wd.current){if(l=n.alternate,l===null)throw Error(G(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Os):e=[Os])}n=n.return}e!==null&&Rm(t,e,a,o),t.flags|=262144}function oc(e){for(e=e.firstContext;e!==null;){if(!Ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zr(e){Vr=e,$o=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function At(e){return Dy(Vr,e)}function Ld(e,t){return Vr===null&&zr(e),Dy(e,t)}function Dy(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$o===null){if(e===null)throw Error(G(308));$o=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $o=$o.next=t;return a}var bM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},yM=xt.unstable_scheduleCallback,wM=xt.unstable_NormalPriority,pt={$$typeof:Ko,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kg(){return{controller:new bM,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&yM(wM,function(){e.controller.abort()})}var gs=null,zm=0,ai=0,Wl=null;function vM(e,t){if(gs===null){var a=gs=[];zm=0,ai=Qg(),Wl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zm++,t.then(V0,V0),t}function V0(){if(--zm===0&&gs!==null){Wl!==null&&(Wl.status="fulfilled");var e=gs;gs=null,ai=0,Wl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function CM(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var G0=le.S;le.S=function(e,t){jw=ba(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vM(e,t),G0!==null&&G0(e,t)};var Tr=_o(null);function Ig(){var e=Tr.current;return e!==null?e:He.pooledCache}function Hd(e,t){t===null?qe(Tr,Tr.current):qe(Tr,t.pool)}function Ry(){var e=Ig();return e===null?null:{parent:pt._currentValue,pool:e}}var pi=Error(G(460)),Mg=Error(G(474)),Nc=Error(G(542)),nc={then:function(){}};function X0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zy(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qo,Qo),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,j0(e),e;default:if(typeof t.status=="string")t.then(Qo,Qo);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(G(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,j0(e),e}throw Ar=t,pi}}function Ir(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ar=a,pi):a}}var Ar=null;function Y0(){if(Ar===null)throw Error(G(459));var e=Ar;return Ar=null,e}function j0(e){if(e===pi||e===Nc)throw Error(G(483))}var Kl=null,Ts=0;function _d(e){var t=Ts;return Ts+=1,Kl===null&&(Kl=[]),zy(Kl,e,t)}function as(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function kd(e,t){throw t.$$typeof===s5?Error(G(525)):(e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Oy(e){function t(x,h){if(e){var m=x.deletions;m===null?(x.deletions=[h],x.flags|=16):m.push(h)}}function a(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function o(x){for(var h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function n(x,h){return x=Jo(x,h),x.index=0,x.sibling=null,x}function r(x,h,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<h?(x.flags|=67108866,h):m):(x.flags|=67108866,h)):(x.flags|=1048576,h)}function l(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function i(x,h,m,b){return h===null||h.tag!==6?(h=Yp(m,x.mode,b),h.return=x,h):(h=n(h,m),h.return=x,h)}function s(x,h,m,b){var C=m.type;return C===Rl?d(x,h,m.props.children,b,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kn&&Ir(C)===h.type)?(h=n(h,m.props),as(h,m),h.return=x,h):(h=Bd(m.type,m.key,m.props,null,x.mode,b),as(h,m),h.return=x,h)}function u(x,h,m,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=jp(m,x.mode,b),h.return=x,h):(h=n(h,m.children||[]),h.return=x,h)}function d(x,h,m,b,C){return h===null||h.tag!==7?(h=Nr(m,x.mode,b,C),h.return=x,h):(h=n(h,m),h.return=x,h)}function p(x,h,m){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Yp(""+h,x.mode,m),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hd:return m=Bd(h.type,h.key,h.props,null,x.mode,m),as(m,h),m.return=x,m;case is:return h=jp(h,x.mode,m),h.return=x,h;case kn:return h=Ir(h),p(x,h,m)}if(ss(h)||es(h))return h=Nr(h,x.mode,m,null),h.return=x,h;if(typeof h.then=="function")return p(x,_d(h),m);if(h.$$typeof===Ko)return p(x,Ld(x,h),m);kd(x,h)}return null}function c(x,h,m,b){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return C!==null?null:i(x,h,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hd:return m.key===C?s(x,h,m,b):null;case is:return m.key===C?u(x,h,m,b):null;case kn:return m=Ir(m),c(x,h,m,b)}if(ss(m)||es(m))return C!==null?null:d(x,h,m,b,null);if(typeof m.then=="function")return c(x,h,_d(m),b);if(m.$$typeof===Ko)return c(x,h,Ld(x,m),b);kd(x,m)}return null}function f(x,h,m,b,C){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return x=x.get(m)||null,i(h,x,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case hd:return x=x.get(b.key===null?m:b.key)||null,s(h,x,b,C);case is:return x=x.get(b.key===null?m:b.key)||null,u(h,x,b,C);case kn:return b=Ir(b),f(x,h,m,b,C)}if(ss(b)||es(b))return x=x.get(m)||null,d(h,x,b,C,null);if(typeof b.then=="function")return f(x,h,m,_d(b),C);if(b.$$typeof===Ko)return f(x,h,m,Ld(h,b),C);kd(h,b)}return null}function g(x,h,m,b){for(var C=null,S=null,v=h,_=h=0,k=null;v!==null&&_<m.length;_++){v.index>_?(k=v,v=null):k=v.sibling;var T=c(x,v,m[_],b);if(T===null){v===null&&(v=k);break}e&&v&&T.alternate===null&&t(x,v),h=r(T,h,_),S===null?C=T:S.sibling=T,S=T,v=k}if(_===m.length)return a(x,v),Ie&&Zo(x,_),C;if(v===null){for(;_<m.length;_++)v=p(x,m[_],b),v!==null&&(h=r(v,h,_),S===null?C=v:S.sibling=v,S=v);return Ie&&Zo(x,_),C}for(v=o(v);_<m.length;_++)k=f(v,x,_,m[_],b),k!==null&&(e&&k.alternate!==null&&v.delete(k.key===null?_:k.key),h=r(k,h,_),S===null?C=k:S.sibling=k,S=k);return e&&v.forEach(function(N){return t(x,N)}),Ie&&Zo(x,_),C}function y(x,h,m,b){if(m==null)throw Error(G(151));for(var C=null,S=null,v=h,_=h=0,k=null,T=m.next();v!==null&&!T.done;_++,T=m.next()){v.index>_?(k=v,v=null):k=v.sibling;var N=c(x,v,T.value,b);if(N===null){v===null&&(v=k);break}e&&v&&N.alternate===null&&t(x,v),h=r(N,h,_),S===null?C=N:S.sibling=N,S=N,v=k}if(T.done)return a(x,v),Ie&&Zo(x,_),C;if(v===null){for(;!T.done;_++,T=m.next())T=p(x,T.value,b),T!==null&&(h=r(T,h,_),S===null?C=T:S.sibling=T,S=T);return Ie&&Zo(x,_),C}for(v=o(v);!T.done;_++,T=m.next())T=f(v,x,_,T.value,b),T!==null&&(e&&T.alternate!==null&&v.delete(T.key===null?_:T.key),h=r(T,h,_),S===null?C=T:S.sibling=T,S=T);return e&&v.forEach(function(U){return t(x,U)}),Ie&&Zo(x,_),C}function w(x,h,m,b){if(typeof m=="object"&&m!==null&&m.type===Rl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case hd:e:{for(var C=m.key;h!==null;){if(h.key===C){if(C=m.type,C===Rl){if(h.tag===7){a(x,h.sibling),b=n(h,m.props.children),b.return=x,x=b;break e}}else if(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kn&&Ir(C)===h.type){a(x,h.sibling),b=n(h,m.props),as(b,m),b.return=x,x=b;break e}a(x,h);break}else t(x,h);h=h.sibling}m.type===Rl?(b=Nr(m.props.children,x.mode,b,m.key),b.return=x,x=b):(b=Bd(m.type,m.key,m.props,null,x.mode,b),as(b,m),b.return=x,x=b)}return l(x);case is:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){a(x,h.sibling),b=n(h,m.children||[]),b.return=x,x=b;break e}else{a(x,h);break}else t(x,h);h=h.sibling}b=jp(m,x.mode,b),b.return=x,x=b}return l(x);case kn:return m=Ir(m),w(x,h,m,b)}if(ss(m))return g(x,h,m,b);if(es(m)){if(C=es(m),typeof C!="function")throw Error(G(150));return m=C.call(m),y(x,h,m,b)}if(typeof m.then=="function")return w(x,h,_d(m),b);if(m.$$typeof===Ko)return w(x,h,Ld(x,m),b);kd(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,h!==null&&h.tag===6?(a(x,h.sibling),b=n(h,m),b.return=x,x=b):(a(x,h),b=Yp(m,x.mode,b),b.return=x,x=b),l(x)):a(x,h)}return function(x,h,m,b){try{Ts=0;var C=w(x,h,m,b);return Kl=null,C}catch(v){if(v===pi||v===Nc)throw v;var S=ha(29,v,null,x.mode);return S.lanes=b,S.return=x,S}}}var Or=Oy(!0),Py=Oy(!1),In=!1;function Eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ee&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=tc(e),My(e,null,a),t}return Ec(e,o,t,a),tc(e)}function hs(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,ty(e,a)}}function Wp(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Pm=!1;function xs(){if(Pm){var e=Wl;if(e!==null)throw e}}function bs(e,t,a,o){Pm=!1;var n=e.updateQueue;In=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=s))}if(r!==null){var p=n.baseState;l=0,d=u=s=null,i=r;do{var c=i.lane&-536870913,f=c!==i.lane;if(f?(_e&c)===c:(o&c)===c){c!==0&&c===ai&&(Pm=!0),d!==null&&(d=d.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,y=i;c=t;var w=a;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(w,p,c);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,c=typeof g=="function"?g.call(w,p,c):g,c==null)break e;p=Ze({},p,c);break e;case 2:In=!0}}c=i.callback,c!==null&&(e.flags|=64,f&&(e.flags|=8192),f=n.callbacks,f===null?n.callbacks=[c]:f.push(c))}else f={lane:c,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=f,s=p):d=d.next=f,l|=c;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;f=i,i=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);d===null&&(s=p),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),Wn|=l,e.lanes=l,e.memoizedState=p}}function By(e,t){if(typeof e!="function")throw Error(G(191,e));e.call(t)}function Hy(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)By(a[e],t)}var oi=_o(null),rc=_o(0);function Z0(e,t){e=ln,qe(rc,e),qe(oi,t),ln=e|t.baseLanes}function Bm(){qe(rc,ln),qe(oi,oi.current)}function Ng(){ln=rc.current,vt(oi),vt(rc)}var Sa=_o(null),qa=null;function En(e){var t=e.alternate;qe(st,st.current&1),qe(Sa,e),qa===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(qa=e)}function Hm(e){qe(st,st.current),qe(Sa,e),qa===null&&(qa=e)}function Uy(e){e.tag===22?(qe(st,st.current),qe(Sa,e),qa===null&&(qa=e)):Nn(e)}function Nn(){qe(st,st.current),qe(Sa,Sa.current)}function ga(e){vt(Sa),qa===e&&(qa=null),vt(st)}var st=_o(0);function lc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ng(a)||rg(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var on=0,he=null,Pe=null,ct=null,ic=!1,Ql=!1,Pr=!1,sc=0,As=0,$l=null,SM=0;function ot(){throw Error(G(321))}function Tg(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ca(e[a],t[a]))return!1;return!0}function Ag(e,t,a,o,n,r){return on=r,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?xw:Vg,Pr=!1,r=a(o,n),Pr=!1,Ql&&(r=qy(t,a,o,n)),Fy(e),r}function Fy(e){le.H=Ds;var t=Pe!==null&&Pe.next!==null;if(on=0,ct=Pe=he=null,ic=!1,As=0,$l=null,t)throw Error(G(300));e===null||mt||(e=e.dependencies,e!==null&&oc(e)&&(mt=!0))}function qy(e,t,a,o){he=e;var n=0;do{if(Ql&&($l=null),As=0,Ql=!1,25<=n)throw Error(G(301));if(n+=1,ct=Pe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}le.H=bw,r=t(a,o)}while(Ql);return r}function LM(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?Ys(t):t,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(he.flags|=1024),t}function Dg(){var e=sc!==0;return sc=0,e}function Rg(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zg(e){if(ic){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ic=!1}on=0,ct=Pe=he=null,Ql=!1,As=sc=0,$l=null}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?he.memoizedState=ct=e:ct=ct.next=e,ct}function ut(){if(Pe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=ct===null?he.memoizedState:ct.next;if(t!==null)ct=t,Pe=e;else{if(e===null)throw he.alternate===null?Error(G(467)):Error(G(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ct===null?he.memoizedState=ct=e:ct=ct.next=e}return ct}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(e){var t=As;return As+=1,$l===null&&($l=[]),e=zy($l,e,t),t=he,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?xw:Vg),e}function Ac(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ys(e);if(e.$$typeof===Ko)return At(e)}throw Error(G(438,String(e)))}function Og(e){var t=null,a=he.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Tc(),he.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=u5;return t.index++,a}function nn(e,t){return typeof t=="function"?t(e):t}function Ud(e){var t=ut();return Pg(t,Pe,e)}function Pg(e,t,a){var o=e.queue;if(o===null)throw Error(G(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,u=t,d=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(_e&p)===p:(on&p)===p){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===ai&&(d=!0);else if((on&c)===c){u=u.next,c===ai&&(d=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=p,l=r):s=s.next=p,he.lanes|=c,Wn|=c;p=u.action,Pr&&a(r,p),r=u.hasEagerState?u.eagerState:a(r,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=c,l=r):s=s.next=c,he.lanes|=p,Wn|=p;u=u.next}while(u!==null&&u!==t);if(s===null?l=r:s.next=i,!Ca(r,e.memoizedState)&&(mt=!0,d&&(a=Wl,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Kp(e){var t=ut(),a=t.queue;if(a===null)throw Error(G(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);Ca(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function Vy(e,t,a){var o=he,n=ut(),r=Ie;if(r){if(a===void 0)throw Error(G(407));a=a()}else a=t();var l=!Ca((Pe||n).memoizedState,a);if(l&&(n.memoizedState=a,mt=!0),n=n.queue,Bg(Yy.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,ni(9,{destroy:void 0},Xy.bind(null,o,n,a,t),null),He===null)throw Error(G(349));r||(on&127)!==0||Gy(o,t,a)}return a}function Gy(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=he.updateQueue,t===null?(t=Tc(),he.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xy(e,t,a,o){t.value=a,t.getSnapshot=o,jy(t)&&Zy(e)}function Yy(e,t,a){return a(function(){jy(t)&&Zy(e)})}function jy(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ca(e,a)}catch{return!0}}function Zy(e){var t=qr(e,2);t!==null&&na(t,e,2)}function Um(e){var t=Xt();if(typeof e=="function"){var a=e;if(e=a(),Pr){An(!0);try{a()}finally{An(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function Wy(e,t,a,o){return e.baseState=a,Pg(e,Pe,typeof o=="function"?o:nn)}function _M(e,t,a,o,n){if(Rc(e))throw Error(G(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};le.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,Ky(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Ky(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=le.T,l={};le.T=l;try{var i=a(n,o),s=le.S;s!==null&&s(l,i),W0(e,t,i)}catch(u){Fm(e,t,u)}finally{r!==null&&l.types!==null&&(r.types=l.types),le.T=r}}else try{r=a(n,o),W0(e,t,r)}catch(u){Fm(e,t,u)}}function W0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){K0(e,t,o)},function(o){return Fm(e,t,o)}):K0(e,t,a)}function K0(e,t,a){t.status="fulfilled",t.value=a,Qy(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ky(e,a)))}function Fm(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Qy(t),t=t.next;while(t!==o)}e.action=null}function Qy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $y(e,t){return t}function Q0(e,t){if(Ie){var a=He.formState;if(a!==null){e:{var o=he;if(Ie){if(je){t:{for(var n=je,r=Fa;n.nodeType!==8;){if(!r){n=null;break t}if(n=Va(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){je=Va(n.nextSibling),o=n.data==="F!";break e}}jn(o)}o=!1}o&&(t=a[0])}}return a=Xt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$y,lastRenderedState:t},a.queue=o,a=mw.bind(null,he,o),o.dispatch=a,o=Um(!1),r=qg.bind(null,he,!1,o.queue),o=Xt(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=_M.bind(null,he,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function $0(e){var t=ut();return Jy(t,Pe,e)}function Jy(e,t,a){if(t=Pg(e,t,$y)[0],e=Ud(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Ys(t)}catch(l){throw l===pi?Nc:l}else o=t;t=ut();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(he.flags|=2048,ni(9,{destroy:void 0},kM.bind(null,n,a),null)),[o,r,e]}function kM(e,t){e.action=t}function J0(e){var t=ut(),a=Pe;if(a!==null)return Jy(t,a,e);ut(),t=t.memoizedState,a=ut();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function ni(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=he.updateQueue,t===null&&(t=Tc(),he.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function ew(){return ut().memoizedState}function Fd(e,t,a,o){var n=Xt();he.flags|=e,n.memoizedState=ni(1|t,{destroy:void 0},a,o===void 0?null:o)}function Dc(e,t,a,o){var n=ut();o=o===void 0?null:o;var r=n.memoizedState.inst;Pe!==null&&o!==null&&Tg(o,Pe.memoizedState.deps)?n.memoizedState=ni(t,r,a,o):(he.flags|=e,n.memoizedState=ni(1|t,r,a,o))}function eb(e,t){Fd(8390656,8,e,t)}function Bg(e,t){Dc(2048,8,e,t)}function IM(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=Tc(),he.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function tw(e){var t=ut().memoizedState;return IM({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(G(440));return t.impl.apply(void 0,arguments)}}function aw(e,t){return Dc(4,2,e,t)}function ow(e,t){return Dc(4,4,e,t)}function nw(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rw(e,t,a){a=a!=null?a.concat([e]):null,Dc(4,4,nw.bind(null,t,e),a)}function Hg(){}function lw(e,t){var a=ut();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Tg(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function iw(e,t){var a=ut();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Tg(t,o[1]))return o[0];if(o=e(),Pr){An(!0);try{e()}finally{An(!1)}}return a.memoizedState=[o,t],o}function Ug(e,t,a){return a===void 0||(on&1073741824)!==0&&(_e&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ww(),he.lanes|=e,Wn|=e,a)}function sw(e,t,a,o){return Ca(a,t)?a:oi.current!==null?(e=Ug(e,a,o),Ca(e,t)||(mt=!0),e):(on&42)===0||(on&1073741824)!==0&&(_e&261930)===0?(mt=!0,e.memoizedState=a):(e=Ww(),he.lanes|=e,Wn|=e,t)}function uw(e,t,a,o,n){var r=Ne.p;Ne.p=r!==0&&8>r?r:8;var l=le.T,i={};le.T=i,qg(e,!1,t,a);try{var s=n(),u=le.S;if(u!==null&&u(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=CM(s,o);ys(e,t,d,va(e))}else ys(e,t,o,va(e))}catch(p){ys(e,t,{then:function(){},status:"rejected",reason:p},va())}finally{Ne.p=r,l!==null&&i.types!==null&&(l.types=i.types),le.T=l}}function MM(){}function qm(e,t,a,o){if(e.tag!==5)throw Error(G(476));var n=dw(e).queue;uw(e,n,t,Er,a===null?MM:function(){return cw(e),a(o)})}function dw(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Er,baseState:Er,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:Er},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cw(e){var t=dw(e);t.next===null&&(t=e.alternate.memoizedState),ys(e,t.next.queue,{},va())}function Fg(){return At(Os)}function fw(){return ut().memoizedState}function pw(){return ut().memoizedState}function EM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=va();e=Hn(a);var o=Un(t,e,a);o!==null&&(na(o,t,a),hs(o,t,a)),t={cache:kg()},e.payload=t;return}t=t.return}}function NM(e,t,a){var o=va();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rc(e)?gw(t,a):(a=Cg(e,t,a,o),a!==null&&(na(a,e,o),hw(a,t,o)))}function mw(e,t,a){var o=va();ys(e,t,a,o)}function ys(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))gw(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,Ca(i,l))return Ec(e,t,n,0),He===null&&Mc(),!1}catch{}if(a=Cg(e,t,n,o),a!==null)return na(a,e,o),hw(a,t,o),!0}return!1}function qg(e,t,a,o){if(o={lane:2,revertLane:Qg(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Rc(e)){if(t)throw Error(G(479))}else t=Cg(e,a,o,2),t!==null&&na(t,e,2)}function Rc(e){var t=e.alternate;return e===he||t!==null&&t===he}function gw(e,t){Ql=ic=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function hw(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,ty(e,a)}}var Ds={readContext:At,use:Ac,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};Ds.useEffectEvent=ot;var xw={readContext:At,use:Ac,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:eb,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Fd(4194308,4,nw.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Fd(4194308,4,e,t)},useInsertionEffect:function(e,t){Fd(4,2,e,t)},useMemo:function(e,t){var a=Xt();t=t===void 0?null:t;var o=e();if(Pr){An(!0);try{e()}finally{An(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Xt();if(a!==void 0){var n=a(t);if(Pr){An(!0);try{a(t)}finally{An(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=NM.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:function(e){e=Um(e);var t=e.queue,a=mw.bind(null,he,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Hg,useDeferredValue:function(e,t){var a=Xt();return Ug(a,e,t)},useTransition:function(){var e=Um(!1);return e=uw.bind(null,he,e.queue,!0,!1),Xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=he,n=Xt();if(Ie){if(a===void 0)throw Error(G(407));a=a()}else{if(a=t(),He===null)throw Error(G(349));(_e&127)!==0||Gy(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,eb(Yy.bind(null,o,r,e),[e]),o.flags|=2048,ni(9,{destroy:void 0},Xy.bind(null,o,r,a,t),null),a},useId:function(){var e=Xt(),t=He.identifierPrefix;if(Ie){var a=Co,o=vo;a=(o&~(1<<32-wa(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=sc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=SM++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fg,useFormState:Q0,useActionState:Q0,useOptimistic:function(e){var t=Xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=qg.bind(null,he,!0,a),a.dispatch=t,[e,t]},useMemoCache:Og,useCacheRefresh:function(){return Xt().memoizedState=EM.bind(null,he)},useEffectEvent:function(e){var t=Xt(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(G(440));return a.impl.apply(void 0,arguments)}}},Vg={readContext:At,use:Ac,useCallback:lw,useContext:At,useEffect:Bg,useImperativeHandle:rw,useInsertionEffect:aw,useLayoutEffect:ow,useMemo:iw,useReducer:Ud,useRef:ew,useState:function(){return Ud(nn)},useDebugValue:Hg,useDeferredValue:function(e,t){var a=ut();return sw(a,Pe.memoizedState,e,t)},useTransition:function(){var e=Ud(nn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Ys(e),t]},useSyncExternalStore:Vy,useId:fw,useHostTransitionStatus:Fg,useFormState:$0,useActionState:$0,useOptimistic:function(e,t){var a=ut();return Wy(a,Pe,e,t)},useMemoCache:Og,useCacheRefresh:pw};Vg.useEffectEvent=tw;var bw={readContext:At,use:Ac,useCallback:lw,useContext:At,useEffect:Bg,useImperativeHandle:rw,useInsertionEffect:aw,useLayoutEffect:ow,useMemo:iw,useReducer:Kp,useRef:ew,useState:function(){return Kp(nn)},useDebugValue:Hg,useDeferredValue:function(e,t){var a=ut();return Pe===null?Ug(a,e,t):sw(a,Pe.memoizedState,e,t)},useTransition:function(){var e=Kp(nn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Ys(e),t]},useSyncExternalStore:Vy,useId:fw,useHostTransitionStatus:Fg,useFormState:J0,useActionState:J0,useOptimistic:function(e,t){var a=ut();return Pe!==null?Wy(a,Pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Og,useCacheRefresh:pw};bw.useEffectEvent=tw;function Qp(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ze({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vm={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=va(),n=Hn(o);n.payload=t,a!=null&&(n.callback=a),t=Un(e,n,o),t!==null&&(na(t,e,o),hs(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=va(),n=Hn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Un(e,n,o),t!==null&&(na(t,e,o),hs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=va(),o=Hn(a);o.tag=2,t!=null&&(o.callback=t),t=Un(e,o,a),t!==null&&(na(t,e,a),hs(t,e,a))}};function tb(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!Ms(a,o)||!Ms(n,r):!0}function ab(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Vm.enqueueReplaceState(t,t.state,null)}function Br(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ze({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function yw(e){ec(e)}function ww(e){console.error(e)}function vw(e){ec(e)}function uc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function ob(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Gm(e,t,a){return a=Hn(a),a.tag=3,a.payload={element:null},a.callback=function(){uc(e,t)},a}function Cw(e){return e=Hn(e),e.tag=3,e}function Sw(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){ob(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){ob(t,a,o),typeof n!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function TM(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&fi(t,a,n,!0),a=Sa.current,a!==null){switch(a.tag){case 31:case 13:return qa===null?mc():a.alternate===null&&nt===0&&(nt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===nc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),sm(e,o,n)),!1;case 22:return a.flags|=65536,o===nc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),sm(e,o,n)),!1}throw Error(G(435,a.tag))}return sm(e,o,n),mc(),!1}if(Ie)return t=Sa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Tm&&(e=Error(G(422),{cause:o}),Ns(Ua(e,a)))):(o!==Tm&&(t=Error(G(423),{cause:o}),Ns(Ua(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Ua(o,a),n=Gm(e.stateNode,o,n),Wp(e,n),nt!==4&&(nt=2)),!1;var r=Error(G(520),{cause:o});if(r=Ua(r,a),Cs===null?Cs=[r]:Cs.push(r),nt!==4&&(nt=2),t===null)return!0;o=Ua(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Gm(a.stateNode,o,e),Wp(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Cw(n),Sw(n,e,a,o),Wp(a,n),!1}a=a.return}while(a!==null);return!1}var Gg=Error(G(461)),mt=!1;function Et(e,t,a,o){t.child=e===null?Py(t,null,a,o):Or(t,e.child,a,o)}function nb(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return zr(t),o=Ag(e,t,a,l,r,n),i=Dg(),e!==null&&!mt?(Rg(e,t,n),rn(e,t,n)):(Ie&&i&&Lg(t),t.flags|=1,Et(e,t,o,n),t.child)}function rb(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Sg(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Lw(e,t,r,o,n)):(e=Bd(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Xg(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:Ms,a(l,o)&&e.ref===t.ref)return rn(e,t,n)}return t.flags|=1,e=Jo(r,o),e.ref=t.ref,e.return=t,t.child=e}function Lw(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(Ms(r,o)&&e.ref===t.ref)if(mt=!1,t.pendingProps=o=r,Xg(e,n))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,rn(e,t,n)}return Xm(e,t,a,o,n)}function _w(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return lb(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hd(t,r!==null?r.cachePool:null),r!==null?Z0(t,r):Bm(),Uy(t);else return o=t.lanes=536870912,lb(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Hd(t,r.cachePool),Z0(t,r),Nn(t),t.memoizedState=null):(e!==null&&Hd(t,null),Bm(),Nn(t));return Et(e,t,n,a),t.child}function ds(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lb(e,t,a,o,n){var r=Ig();return r=r===null?null:{parent:pt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Hd(t,null),Bm(),Uy(t),e!==null&&fi(e,t,o,!0),t.childLanes=n,null}function qd(e,t){return t=dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ib(e,t,a){return Or(t,e.child,null,a),e=qd(t,t.pendingProps),e.flags|=2,ga(t),t.memoizedState=null,e}function AM(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ie){if(o.mode==="hidden")return e=qd(t,o),t.lanes=536870912,ds(null,e);if(Hm(t),(e=je)?(e=xv(e,Fa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:vo,overflow:Co}:null,retryLane:536870912,hydrationErrors:null},a=Ny(e),a.return=t,t.child=a,Tt=t,je=null)):e=null,e===null)throw jn(t);return t.lanes=536870912,null}return qd(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(Hm(t),n)if(t.flags&256)t.flags&=-257,t=ib(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(G(558));else if(mt||fi(e,t,a,!1),n=(a&e.childLanes)!==0,mt||n){if(o=He,o!==null&&(l=ay(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,qr(e,l),na(o,e,l),Gg;mc(),t=ib(e,t,a)}else e=r.treeContext,je=Va(l.nextSibling),Tt=t,Ie=!0,Bn=null,Fa=!1,e!==null&&Ay(t,e),t=qd(t,o),t.flags|=4096;return t}return e=Jo(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vd(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(G(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Xm(e,t,a,o,n){return zr(t),a=Ag(e,t,a,o,void 0,n),o=Dg(),e!==null&&!mt?(Rg(e,t,n),rn(e,t,n)):(Ie&&o&&Lg(t),t.flags|=1,Et(e,t,a,n),t.child)}function sb(e,t,a,o,n,r){return zr(t),t.updateQueue=null,a=qy(t,o,a,n),Fy(e),o=Dg(),e!==null&&!mt?(Rg(e,t,r),rn(e,t,r)):(Ie&&o&&Lg(t),t.flags|=1,Et(e,t,a,r),t.child)}function ub(e,t,a,o,n){if(zr(t),t.stateNode===null){var r=ql,l=a.contextType;typeof l=="object"&&l!==null&&(r=At(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vm,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Eg(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?At(l):ql,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(Qp(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Vm.enqueueReplaceState(r,r.state,null),bs(t,o,r,n),xs(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=Br(a,i);r.props=s;var u=r.context,d=a.contextType;l=ql,typeof d=="object"&&d!==null&&(l=At(d));var p=a.getDerivedStateFromProps;d=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||u!==l)&&ab(t,r,o,l),In=!1;var c=t.memoizedState;r.state=c,bs(t,o,r,n),xs(),u=t.memoizedState,i||c!==u||In?(typeof p=="function"&&(Qp(t,a,p,o),u=t.memoizedState),(s=In||tb(t,a,s,o,c,u,l))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Om(e,t),l=t.memoizedProps,d=Br(a,l),r.props=d,p=t.pendingProps,c=r.context,u=a.contextType,s=ql,typeof u=="object"&&u!==null&&(s=At(u)),i=a.getDerivedStateFromProps,(u=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==p||c!==s)&&ab(t,r,o,s),In=!1,c=t.memoizedState,r.state=c,bs(t,o,r,n),xs();var f=t.memoizedState;l!==p||c!==f||In||e!==null&&e.dependencies!==null&&oc(e.dependencies)?(typeof i=="function"&&(Qp(t,a,i,o),f=t.memoizedState),(d=In||tb(t,a,d,o,c,f,s)||e!==null&&e.dependencies!==null&&oc(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,f,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,f,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=f),r.props=o,r.state=f,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Vd(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,n),t.child=Or(t,null,a,n)):Et(e,t,a,n),t.memoizedState=r.state,e=t.child):e=rn(e,t,n),e}function db(e,t,a,o){return Rr(),t.flags|=256,Et(e,t,a,o),t.child}var $p={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jp(e){return{baseLanes:e,cachePool:Ry()}}function em(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xa),e}function kw(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ie){if(n?En(t):Nn(t),(e=je)?(e=xv(e,Fa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:vo,overflow:Co}:null,retryLane:536870912,hydrationErrors:null},a=Ny(e),a.return=t,t.child=a,Tt=t,je=null)):e=null,e===null)throw jn(t);return rg(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(Nn(t),n=t.mode,i=dc({mode:"hidden",children:i},n),o=Nr(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=Jp(a),o.childLanes=em(e,l,a),t.memoizedState=$p,ds(null,o)):(En(t),Ym(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(En(t),t.flags&=-257,t=tm(e,t,a)):t.memoizedState!==null?(Nn(t),t.child=e.child,t.flags|=128,t=null):(Nn(t),i=o.fallback,n=t.mode,o=dc({mode:"visible",children:o.children},n),i=Nr(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Or(t,e.child,null,a),o=t.child,o.memoizedState=Jp(a),o.childLanes=em(e,l,a),t.memoizedState=$p,t=ds(null,o));else if(En(t),rg(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var u=l.dgst;l=u,o=Error(G(419)),o.stack="",o.digest=l,Ns({value:o,source:null,stack:null}),t=tm(e,t,a)}else if(mt||fi(e,t,a,!1),l=(a&e.childLanes)!==0,mt||l){if(l=He,l!==null&&(o=ay(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,qr(e,o),na(l,e,o),Gg;ng(i)||mc(),t=tm(e,t,a)}else ng(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,je=Va(i.nextSibling),Tt=t,Ie=!0,Bn=null,Fa=!1,e!==null&&Ay(t,e),t=Ym(t,o.children),t.flags|=4096);return t}return n?(Nn(t),i=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=Jo(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?i=Jo(u,i):(i=Nr(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,ds(null,o),o=t.child,i=e.child.memoizedState,i===null?i=Jp(a):(n=i.cachePool,n!==null?(s=pt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Ry(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=em(e,l,a),t.memoizedState=$p,ds(e.child,o)):(En(t),a=e.child,e=a.sibling,a=Jo(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function Ym(e,t){return t=dc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dc(e,t){return e=ha(22,e,null,t),e.lanes=0,e}function tm(e,t,a){return Or(t,e.child,null,a),e=Ym(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cb(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Dm(e.return,t,a)}function am(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Iw(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=st.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,qe(st,l),Et(e,t,o,a),o=Ie?Es:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cb(e,a,t);else if(e.tag===19)cb(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&lc(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),am(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&lc(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}am(t,!0,a,null,r,o);break;case"together":am(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function rn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(fi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,a=Jo(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jo(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oc(e)))}function DM(e,t,a){switch(t.tag){case 3:Kd(t,t.stateNode.containerInfo),Mn(t,pt,e.memoizedState.cache),Rr();break;case 27:case 5:wm(t);break;case 4:Kd(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hm(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(En(t),t.flags|=128,null):(a&t.child.childLanes)!==0?kw(e,t,a):(En(t),e=rn(e,t,a),e!==null?e.sibling:null);En(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(fi(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Iw(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),qe(st,st.current),o)break;return null;case 22:return t.lanes=0,_w(e,t,a,t.pendingProps);case 24:Mn(t,pt,e.memoizedState.cache)}return rn(e,t,a)}function Mw(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Xg(e,a)&&(t.flags&128)===0)return mt=!1,DM(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,Ie&&(t.flags&1048576)!==0&&Ty(t,Es,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ir(t.elementType),t.type=e,typeof e=="function")Sg(e)?(o=Br(e,o),t.tag=1,t=ub(null,t,e,o,a)):(t.tag=0,t=Xm(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===ug){t.tag=11,t=nb(null,t,e,o,a);break e}else if(n===dg){t.tag=14,t=rb(null,t,e,o,a);break e}}throw t=bm(e)||e,Error(G(306,t,""))}}return t;case 0:return Xm(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Br(o,t.pendingProps),ub(e,t,o,n,a);case 3:e:{if(Kd(t,t.stateNode.containerInfo),e===null)throw Error(G(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Om(e,t),bs(t,o,null,a);var l=t.memoizedState;if(o=l.cache,Mn(t,pt,o),o!==r.cache&&Rm(t,[pt],a,!0),xs(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=db(e,t,o,a);break e}else if(o!==n){n=Ua(Error(G(424)),t),Ns(n),t=db(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=Va(e.firstChild),Tt=t,Ie=!0,Bn=null,Fa=!0,a=Py(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rr(),o===n){t=rn(e,t,a);break e}Et(e,t,o,a)}t=t.child}return t;case 26:return Vd(e,t),e===null?(a=Db(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ie||(a=t.type,e=t.pendingProps,o=bc(Pn.current).createElement(a),o[Nt]=t,o[ra]=e,Dt(o,a,e),wt(o),t.stateNode=o):t.memoizedState=Db(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wm(t),e===null&&Ie&&(o=t.stateNode=bv(t.type,t.pendingProps,Pn.current),Tt=t,Fa=!0,n=je,Qn(t.type)?(lg=n,je=Va(o.firstChild)):je=n),Et(e,t,t.pendingProps.children,a),Vd(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ie&&((n=o=je)&&(o=i4(o,t.type,t.pendingProps,Fa),o!==null?(t.stateNode=o,Tt=t,je=Va(o.firstChild),Fa=!1,n=!0):n=!1),n||jn(t)),wm(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,ag(n,r)?o=null:l!==null&&ag(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=Ag(e,t,LM,null,null,a),Os._currentValue=n),Vd(e,t),Et(e,t,o,a),t.child;case 6:return e===null&&Ie&&((e=a=je)&&(a=s4(a,t.pendingProps,Fa),a!==null?(t.stateNode=a,Tt=t,je=null,e=!0):e=!1),e||jn(t)),null;case 13:return kw(e,t,a);case 4:return Kd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Or(t,null,o,a):Et(e,t,o,a),t.child;case 11:return nb(e,t,t.type,t.pendingProps,a);case 7:return Et(e,t,t.pendingProps,a),t.child;case 8:return Et(e,t,t.pendingProps.children,a),t.child;case 12:return Et(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Mn(t,t.type,o.value),Et(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,zr(t),n=At(n),o=o(n),t.flags|=1,Et(e,t,o,a),t.child;case 14:return rb(e,t,t.type,t.pendingProps,a);case 15:return Lw(e,t,t.type,t.pendingProps,a);case 19:return Iw(e,t,a);case 31:return AM(e,t,a);case 22:return _w(e,t,a,t.pendingProps);case 24:return zr(t),o=At(pt),e===null?(n=Ig(),n===null&&(n=He,r=kg(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Eg(t),Mn(t,pt,n)):((e.lanes&a)!==0&&(Om(e,t),bs(t,null,null,a),xs()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Mn(t,pt,o)):(o=r.cache,Mn(t,pt,o),o!==n.cache&&Rm(t,[pt],a,!0))),Et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(G(156,t.tag))}function Go(e){e.flags|=4}function om(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if($w())e.flags|=8192;else throw Ar=nc,Mg}else e.flags&=-16777217}function fb(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vv(t))if($w())e.flags|=8192;else throw Ar=nc,Mg}function Id(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jb():536870912,e.lanes|=t,ri|=t)}function os(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function RM(e,t,a){var o=t.pendingProps;switch(_g(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),en(pt),Jl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?Go(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zp())),Ye(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Go(t),r!==null?(Ye(t),fb(t,r)):(Ye(t),om(t,n,null,o,a))):r?r!==e.memoizedState?(Go(t),Ye(t),fb(t,r)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Go(t),Ye(t),om(t,n,e,o,a)),null;case 27:if(Qd(t),a=Pn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Go(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}e=Lo.current,Nl(t)?F0(t,e):(e=bv(n,o,a),t.stateNode=e,Go(t))}return Ye(t),null;case 5:if(Qd(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Go(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}if(r=Lo.current,Nl(t))F0(t,r);else{var l=bc(Pn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[Nt]=t,r[ra]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Dt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Go(t)}}return Ye(t),om(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Go(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(G(166));if(e=Pn.current,Nl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Tt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Nt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||mv(e.nodeValue,a)),e||jn(t,!0)}else e=bc(e).createTextNode(o),e[Nt]=t,t.stateNode=e}return Ye(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Nl(t),a!==null){if(e===null){if(!o)throw Error(G(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(557));e[Nt]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else a=Zp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ga(t),t):(ga(t),null);if((t.flags&128)!==0)throw Error(G(558))}return Ye(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Nl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(G(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(G(317));n[Nt]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),n=!1}else n=Zp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ga(t),t):(ga(t),null)}return ga(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Id(t,t.updateQueue),Ye(t),null);case 4:return Jl(),e===null&&$g(t.stateNode.containerInfo),Ye(t),null;case 10:return en(t.type),Ye(t),null;case 19:if(vt(st),o=t.memoizedState,o===null)return Ye(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)os(o,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=lc(e),r!==null){for(t.flags|=128,os(o,!1),e=r.updateQueue,t.updateQueue=e,Id(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ey(a,e),a=a.sibling;return qe(st,st.current&1|2),Ie&&Zo(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ba()>fc&&(t.flags|=128,n=!0,os(o,!1),t.lanes=4194304)}else{if(!n)if(e=lc(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Id(t,e),os(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Ie)return Ye(t),null}else 2*ba()-o.renderingStartTime>fc&&a!==536870912&&(t.flags|=128,n=!0,os(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ba(),e.sibling=null,a=st.current,qe(st,n?a&1|2:a&1),Ie&&Zo(t,o.treeForkCount),e):(Ye(t),null);case 22:case 23:return ga(t),Ng(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),a=t.updateQueue,a!==null&&Id(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&vt(Tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),en(pt),Ye(t),null;case 25:return null;case 30:return null}throw Error(G(156,t.tag))}function zM(e,t){switch(_g(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(pt),Jl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qd(t),null;case 31:if(t.memoizedState!==null){if(ga(t),t.alternate===null)throw Error(G(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ga(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return vt(st),null;case 4:return Jl(),null;case 10:return en(t.type),null;case 22:case 23:return ga(t),Ng(),e!==null&&vt(Tr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(pt),null;case 25:return null;default:return null}}function Ew(e,t){switch(_g(t),t.tag){case 3:en(pt),Jl();break;case 26:case 27:case 5:Qd(t);break;case 4:Jl();break;case 31:t.memoizedState!==null&&ga(t);break;case 13:ga(t);break;case 19:vt(st);break;case 10:en(t.type);break;case 22:case 23:ga(t),Ng(),e!==null&&vt(Tr);break;case 24:en(pt)}}function js(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){De(t,t.return,i)}}function Zn(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,u=i;try{u()}catch(d){De(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){De(t,t.return,d)}}function Nw(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hy(t,a)}catch(o){De(e,e.return,o)}}}function Tw(e,t,a){a.props=Br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){De(e,t,o)}}function ws(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){De(e,t,n)}}function So(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){De(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){De(e,t,n)}else a.current=null}function Aw(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){De(e,e.return,n)}}function nm(e,t,a){try{var o=e.stateNode;t4(o,e.type,a,t),o[ra]=t}catch(n){De(e,e.return,n)}}function Dw(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qn(e.type)||e.tag===4}function rm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jm(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qo));else if(o!==4&&(o===27&&Qn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(jm(e,t,a),e=e.sibling;e!==null;)jm(e,t,a),e=e.sibling}function cc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Qn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(cc(e,t,a),e=e.sibling;e!==null;)cc(e,t,a),e=e.sibling}function Rw(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Dt(t,o,a),t[Nt]=e,t[ra]=a}catch(r){De(e,e.return,r)}}var Wo=!1,ft=!1,lm=!1,pb=typeof WeakSet=="function"?WeakSet:Set,yt=null;function OM(e,t){if(e=e.containerInfo,eg=Cc,e=vy(e),wg(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,d=0,p=e,c=null;t:for(;;){for(var f;p!==a||n!==0&&p.nodeType!==3||(i=l+n),p!==r||o!==0&&p.nodeType!==3||(s=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(f=p.firstChild)!==null;)c=p,p=f;for(;;){if(p===e)break t;if(c===a&&++u===n&&(i=l),c===r&&++d===o&&(s=l),(f=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=f}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(tg={focusedElem:e,selectionRange:a},Cc=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Br(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(y){De(a,a.return,y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)og(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":og(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(G(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function zw(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Yo(e,a),o&4&&js(5,a);break;case 1:if(Yo(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){De(a,a.return,l)}else{var n=Br(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){De(a,a.return,l)}}o&64&&Nw(a),o&512&&ws(a,a.return);break;case 3:if(Yo(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hy(e,t)}catch(l){De(a,a.return,l)}}break;case 27:t===null&&o&4&&Rw(a);case 26:case 5:Yo(e,a),t===null&&o&4&&Aw(a),o&512&&ws(a,a.return);break;case 12:Yo(e,a);break;case 31:Yo(e,a),o&4&&Bw(e,a);break;case 13:Yo(e,a),o&4&&Hw(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XM.bind(null,a),u4(e,a))));break;case 22:if(o=a.memoizedState!==null||Wo,!o){t=t!==null&&t.memoizedState!==null||ft,n=Wo;var r=ft;Wo=o,(ft=t)&&!r?jo(e,a,(a.subtreeFlags&8772)!==0):Yo(e,a),Wo=n,ft=r}break;case 30:break;default:Yo(e,a)}}function Ow(e){var t=e.alternate;t!==null&&(e.alternate=null,Ow(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,aa=!1;function Xo(e,t,a){for(a=a.child;a!==null;)Pw(e,t,a),a=a.sibling}function Pw(e,t,a){if(ya&&typeof ya.onCommitFiberUnmount=="function")try{ya.onCommitFiberUnmount(Us,a)}catch{}switch(a.tag){case 26:ft||So(a,t),Xo(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ft||So(a,t);var o=Je,n=aa;Qn(a.type)&&(Je=a.stateNode,aa=!1),Xo(e,t,a),Ls(a.stateNode),Je=o,aa=n;break;case 5:ft||So(a,t);case 6:if(o=Je,n=aa,Je=null,Xo(e,t,a),Je=o,aa=n,Je!==null)if(aa)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(r){De(a,t,r)}else try{Je.removeChild(a.stateNode)}catch(r){De(a,t,r)}break;case 18:Je!==null&&(aa?(e=Je,Mb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ui(e)):Mb(Je,a.stateNode));break;case 4:o=Je,n=aa,Je=a.stateNode.containerInfo,aa=!0,Xo(e,t,a),Je=o,aa=n;break;case 0:case 11:case 14:case 15:Zn(2,a,t),ft||Zn(4,a,t),Xo(e,t,a);break;case 1:ft||(So(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Tw(a,t,o)),Xo(e,t,a);break;case 21:Xo(e,t,a);break;case 22:ft=(o=ft)||a.memoizedState!==null,Xo(e,t,a),ft=o;break;default:Xo(e,t,a)}}function Bw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ui(e)}catch(a){De(t,t.return,a)}}}function Hw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ui(e)}catch(a){De(t,t.return,a)}}function PM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pb),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pb),t;default:throw Error(G(435,e.tag))}}function Md(e,t){var a=PM(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=YM.bind(null,e,o);o.then(n,n)}})}function ea(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(Qn(i.type)){Je=i.stateNode,aa=!1;break e}break;case 5:Je=i.stateNode,aa=!1;break e;case 3:case 4:Je=i.stateNode.containerInfo,aa=!0;break e}i=i.return}if(Je===null)throw Error(G(160));Pw(r,l,n),Je=null,aa=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uw(t,e),t=t.sibling}var ao=null;function Uw(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ea(t,e),ta(e),o&4&&(Zn(3,e,e.return),js(3,e),Zn(5,e,e.return));break;case 1:ea(t,e),ta(e),o&512&&(ft||a===null||So(a,a.return)),o&64&&Wo&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=ao;if(ea(t,e),ta(e),o&512&&(ft||a===null||So(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Vs]||r[Nt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Dt(r,o,a),r[Nt]=e,wt(r),o=r;break e;case"link":var l=zb("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),Dt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=zb("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),Dt(r,o,a),n.head.appendChild(r);break;default:throw Error(G(468,o))}r[Nt]=e,wt(r),o=r}e.stateNode=o}else Ob(n,e.type,e.stateNode);else e.stateNode=Rb(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?Ob(n,e.type,e.stateNode):Rb(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&nm(e,e.memoizedProps,a.memoizedProps)}break;case 27:ea(t,e),ta(e),o&512&&(ft||a===null||So(a,a.return)),a!==null&&o&4&&nm(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ea(t,e),ta(e),o&512&&(ft||a===null||So(a,a.return)),e.flags&32){n=e.stateNode;try{ti(n,"")}catch(g){De(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,nm(e,n,a!==null?a.memoizedProps:n)),o&1024&&(lm=!0);break;case 6:if(ea(t,e),ta(e),o&4){if(e.stateNode===null)throw Error(G(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){De(e,e.return,g)}}break;case 3:if(Yd=null,n=ao,ao=yc(t.containerInfo),ea(t,e),ao=n,ta(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(g){De(e,e.return,g)}lm&&(lm=!1,Fw(e));break;case 4:o=ao,ao=yc(e.stateNode.containerInfo),ea(t,e),ta(e),ao=o;break;case 12:ea(t,e),ta(e);break;case 31:ea(t,e),ta(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Md(e,o)));break;case 13:ea(t,e),ta(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zc=ba()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Md(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=Wo,d=ft;if(Wo=u||n,ft=d||s,ea(t,e),ft=d,Wo=u,ta(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Wo||ft||Mr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var p=s.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null;i.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){De(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){De(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var f=s.stateNode;n?Eb(f,!0):Eb(s.stateNode,!1)}catch(g){De(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Md(e,a))));break;case 19:ea(t,e),ta(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Md(e,o)));break;case 30:break;case 21:break;default:ea(t,e),ta(e)}}function ta(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Dw(o)){a=o;break}o=o.return}if(a==null)throw Error(G(160));switch(a.tag){case 27:var n=a.stateNode,r=rm(e);cc(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(ti(l,""),a.flags&=-33);var i=rm(e);cc(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,u=rm(e);jm(e,u,s);break;default:throw Error(G(161))}}catch(d){De(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fw(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fw(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zw(e,t.alternate,t),t=t.sibling}function Mr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Mr(t);break;case 1:So(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Tw(t,t.return,a),Mr(t);break;case 27:Ls(t.stateNode);case 26:case 5:So(t,t.return),Mr(t);break;case 22:t.memoizedState===null&&Mr(t);break;case 30:Mr(t);break;default:Mr(t)}e=e.sibling}}function jo(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:jo(n,r,a),js(4,r);break;case 1:if(jo(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){De(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)By(s[n],i)}catch(u){De(o,o.return,u)}}a&&l&64&&Nw(r),ws(r,r.return);break;case 27:Rw(r);case 26:case 5:jo(n,r,a),a&&o===null&&l&4&&Aw(r),ws(r,r.return);break;case 12:jo(n,r,a);break;case 31:jo(n,r,a),a&&l&4&&Bw(n,r);break;case 13:jo(n,r,a),a&&l&4&&Hw(n,r);break;case 22:r.memoizedState===null&&jo(n,r,a),ws(r,r.return);break;case 30:break;default:jo(n,r,a)}t=t.sibling}}function Yg(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function jg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xs(e))}function to(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qw(e,t,a,o),t=t.sibling}function qw(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:to(e,t,a,o),n&2048&&js(9,t);break;case 1:to(e,t,a,o);break;case 3:to(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xs(e)));break;case 12:if(n&2048){to(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){De(t,t.return,s)}}else to(e,t,a,o);break;case 31:to(e,t,a,o);break;case 13:to(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?to(e,t,a,o):vs(e,t):r._visibility&2?to(e,t,a,o):(r._visibility|=2,Al(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Yg(l,t);break;case 24:to(e,t,a,o),n&2048&&jg(t.alternate,t);break;default:to(e,t,a,o)}}function Al(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,u=l.flags;switch(l.tag){case 0:case 11:case 15:Al(r,l,i,s,n),js(8,l);break;case 23:break;case 22:var d=l.stateNode;l.memoizedState!==null?d._visibility&2?Al(r,l,i,s,n):vs(r,l):(d._visibility|=2,Al(r,l,i,s,n)),n&&u&2048&&Yg(l.alternate,l);break;case 24:Al(r,l,i,s,n),n&&u&2048&&jg(l.alternate,l);break;default:Al(r,l,i,s,n)}t=t.sibling}}function vs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:vs(a,o),n&2048&&Yg(o.alternate,o);break;case 24:vs(a,o),n&2048&&jg(o.alternate,o);break;default:vs(a,o)}t=t.sibling}}var cs=8192;function Tl(e,t,a){if(e.subtreeFlags&cs)for(e=e.child;e!==null;)Vw(e,t,a),e=e.sibling}function Vw(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&cs&&e.memoizedState!==null&&v4(a,ao,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var o=ao;ao=yc(e.stateNode.containerInfo),Tl(e,t,a),ao=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=cs,cs=16777216,Tl(e,t,a),cs=o):Tl(e,t,a));break;default:Tl(e,t,a)}}function Gw(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ns(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];yt=o,Yw(o,e)}Gw(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xw(e),e=e.sibling}function Xw(e){switch(e.tag){case 0:case 11:case 15:ns(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:ns(e);break;case 12:ns(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gd(e)):ns(e);break;default:ns(e)}}function Gd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];yt=o,Yw(o,e)}Gw(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),Gd(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Gd(t));break;default:Gd(t)}e=e.sibling}}function Yw(e,t){for(;yt!==null;){var a=yt;switch(a.tag){case 0:case 11:case 15:Zn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yt=o;else e:for(a=e;yt!==null;){o=yt;var n=o.sibling,r=o.return;if(Ow(o),o===a){yt=null;break e}if(n!==null){n.return=r,yt=n;break e}yt=r}}}var BM={getCacheForType:function(e){var t=At(pt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return At(pt).controller.signal}},HM=typeof WeakMap=="function"?WeakMap:Map,Ee=0,He=null,Se=null,_e=0,Ae=0,ma=null,Rn=!1,mi=!1,Zg=!1,ln=0,nt=0,Wn=0,Dr=0,Wg=0,xa=0,ri=0,Cs=null,oa=null,Zm=!1,zc=0,jw=0,fc=1/0,pc=null,Fn=null,ht=0,qn=null,li=null,tn=0,Wm=0,Km=null,Zw=null,Ss=0,Qm=null;function va(){return(Ee&2)!==0&&_e!==0?_e&-_e:le.T!==null?Qg():oy()}function Ww(){if(xa===0)if((_e&536870912)===0||Ie){var e=bd;bd<<=1,(bd&3932160)===0&&(bd=262144),xa=e}else xa=536870912;return e=Sa.current,e!==null&&(e.flags|=32),xa}function na(e,t,a){(e===He&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ii(e,0),zn(e,_e,xa,!1)),qs(e,a),((Ee&2)===0||e!==He)&&(e===He&&((Ee&2)===0&&(Dr|=a),nt===4&&zn(e,_e,xa,!1)),ko(e))}function Kw(e,t,a){if((Ee&6)!==0)throw Error(G(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Fs(e,t),n=o?qM(e,t):im(e,t,!0),r=o;do{if(n===0){mi&&!o&&zn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!UM(a)){n=im(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Cs;var s=i.current.memoizedState.isDehydrated;if(s&&(ii(i,l).flags|=256),l=im(i,l,!1),l!==2){if(Zg&&!s){i.errorRecoveryDisabledLanes|=r,Dr|=r,n=4;break e}r=oa,oa=n,r!==null&&(oa===null?oa=r:oa.push.apply(oa,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){ii(e,0),zn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(G(345));case 4:if((t&4194048)!==t)break;case 6:zn(o,t,xa,!Rn);break e;case 2:oa=null;break;case 3:case 5:break;default:throw Error(G(329))}if((t&62914560)===t&&(n=zc+300-ba(),10<n)){if(zn(o,t,xa,!Rn),Lc(o,0,!0)!==0)break e;tn=t,o.timeoutHandle=hv(mb.bind(null,o,a,oa,pc,Zm,t,xa,Dr,ri,Rn,r,"Throttled",-0,0),n);break e}mb(o,a,oa,pc,Zm,t,xa,Dr,ri,Rn,r,null,-0,0)}}break}while(!0);ko(e)}function mb(e,t,a,o,n,r,l,i,s,u,d,p,c,f){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qo},Vw(t,r,p);var g=(r&62914560)===r?zc-ba():(r&4194048)===r?jw-ba():0;if(g=C4(p,g),g!==null){tn=r,e.cancelPendingCommit=g(hb.bind(null,e,t,r,a,o,n,l,i,s,d,p,null,c,f)),zn(e,r,l,!u);return}}hb(e,t,r,a,o,n,l,i,s)}function UM(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ca(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t,a,o){t&=~Wg,t&=~Dr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-wa(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&ey(e,a,t)}function Oc(){return(Ee&6)===0?(Zs(0,!1),!1):!0}function Kg(){if(Se!==null){if(Ae===0)var e=Se.return;else e=Se,$o=Vr=null,zg(e),Kl=null,Ts=0,e=Se;for(;e!==null;)Ew(e.alternate,e),e=e.return;Se=null}}function ii(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,n4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),tn=0,Kg(),He=e,Se=a=Jo(e.current,null),_e=t,Ae=0,ma=null,Rn=!1,mi=Fs(e,t),Zg=!1,ri=xa=Wg=Dr=Wn=nt=0,oa=Cs=null,Zm=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-wa(o),r=1<<n;t|=e[n],o&=~r}return ln=t,Mc(),a}function Qw(e,t){he=null,le.H=Ds,t===pi||t===Nc?(t=Y0(),Ae=3):t===Mg?(t=Y0(),Ae=4):Ae=t===Gg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ma=t,Se===null&&(nt=1,uc(e,Ua(t,e.current)))}function $w(){var e=Sa.current;return e===null?!0:(_e&4194048)===_e?qa===null:(_e&62914560)===_e||(_e&536870912)!==0?e===qa:!1}function Jw(){var e=le.H;return le.H=Ds,e===null?Ds:e}function ev(){var e=le.A;return le.A=BM,e}function mc(){nt=4,Rn||(_e&4194048)!==_e&&Sa.current!==null||(mi=!0),(Wn&134217727)===0&&(Dr&134217727)===0||He===null||zn(He,_e,xa,!1)}function im(e,t,a){var o=Ee;Ee|=2;var n=Jw(),r=ev();(He!==e||_e!==t)&&(pc=null,ii(e,t)),t=!1;var l=nt;e:do try{if(Ae!==0&&Se!==null){var i=Se,s=ma;switch(Ae){case 8:Kg(),l=6;break e;case 3:case 2:case 9:case 6:Sa.current===null&&(t=!0);var u=Ae;if(Ae=0,ma=null,Xl(e,i,s,u),a&&mi){l=0;break e}break;default:u=Ae,Ae=0,ma=null,Xl(e,i,s,u)}}FM(),l=nt;break}catch(d){Qw(e,d)}while(!0);return t&&e.shellSuspendCounter++,$o=Vr=null,Ee=o,le.H=n,le.A=r,Se===null&&(He=null,_e=0,Mc()),l}function FM(){for(;Se!==null;)tv(Se)}function qM(e,t){var a=Ee;Ee|=2;var o=Jw(),n=ev();He!==e||_e!==t?(pc=null,fc=ba()+500,ii(e,t)):mi=Fs(e,t);e:do try{if(Ae!==0&&Se!==null){t=Se;var r=ma;t:switch(Ae){case 1:Ae=0,ma=null,Xl(e,t,r,1);break;case 2:case 9:if(X0(r)){Ae=0,ma=null,gb(t);break}t=function(){Ae!==2&&Ae!==9||He!==e||(Ae=7),ko(e)},r.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:X0(r)?(Ae=0,ma=null,gb(t)):(Ae=0,ma=null,Xl(e,t,r,7));break;case 5:var l=null;switch(Se.tag){case 26:l=Se.memoizedState;case 5:case 27:var i=Se;if(l?vv(l):i.stateNode.complete){Ae=0,ma=null;var s=i.sibling;if(s!==null)Se=s;else{var u=i.return;u!==null?(Se=u,Pc(u)):Se=null}break t}}Ae=0,ma=null,Xl(e,t,r,5);break;case 6:Ae=0,ma=null,Xl(e,t,r,6);break;case 8:Kg(),nt=6;break e;default:throw Error(G(462))}}VM();break}catch(d){Qw(e,d)}while(!0);return $o=Vr=null,le.H=o,le.A=n,Ee=a,Se!==null?0:(He=null,_e=0,Mc(),nt)}function VM(){for(;Se!==null&&!f5();)tv(Se)}function tv(e){var t=Mw(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?Pc(e):Se=t}function gb(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=sb(a,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=sb(a,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:zg(t);default:Ew(a,t),t=Se=Ey(t,ln),t=Mw(a,t,ln)}e.memoizedProps=e.pendingProps,t===null?Pc(e):Se=t}function Xl(e,t,a,o){$o=Vr=null,zg(t),Kl=null,Ts=0;var n=t.return;try{if(TM(e,n,t,a,_e)){nt=1,uc(e,Ua(a,e.current)),Se=null;return}}catch(r){if(n!==null)throw Se=n,r;nt=1,uc(e,Ua(a,e.current)),Se=null;return}t.flags&32768?(Ie||o===1?e=!0:mi||(_e&536870912)!==0?e=!1:(Rn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Sa.current,o!==null&&o.tag===13&&(o.flags|=16384))),av(t,e)):Pc(t)}function Pc(e){var t=e;do{if((t.flags&32768)!==0){av(t,Rn);return}e=t.return;var a=RM(t.alternate,t,ln);if(a!==null){Se=a;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);nt===0&&(nt=5)}function av(e,t){do{var a=zM(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);nt=6,Se=null}function hb(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do Bc();while(ht!==0);if((Ee&6)!==0)throw Error(G(327));if(t!==null){if(t===e.current)throw Error(G(177));if(r=t.lanes|t.childLanes,r|=vg,C5(e,a,r,l,i,s),e===He&&(Se=He=null,_e=0),li=t,qn=e,tn=a,Wm=r,Km=n,Zw=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jM($d,function(){return iv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=le.T,le.T=null,n=Ne.p,Ne.p=2,l=Ee,Ee|=4;try{OM(e,t,a)}finally{Ee=l,Ne.p=n,le.T=o}}ht=1,ov(),nv(),rv()}}function ov(){if(ht===1){ht=0;var e=qn,t=li,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=le.T,le.T=null;var o=Ne.p;Ne.p=2;var n=Ee;Ee|=4;try{Uw(t,e);var r=tg,l=vy(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&wy(i.ownerDocument.documentElement,i)){if(s!==null&&wg(i)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(d,i.value.length);else{var p=i.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var f=c.getSelection(),g=i.textContent.length,y=Math.min(s.start,g),w=s.end===void 0?y:Math.min(s.end,g);!f.extend&&y>w&&(l=w,w=y,y=l);var x=B0(i,y),h=B0(i,w);if(x&&h&&(f.rangeCount!==1||f.anchorNode!==x.node||f.anchorOffset!==x.offset||f.focusNode!==h.node||f.focusOffset!==h.offset)){var m=p.createRange();m.setStart(x.node,x.offset),f.removeAllRanges(),y>w?(f.addRange(m),f.extend(h.node,h.offset)):(m.setEnd(h.node,h.offset),f.addRange(m))}}}}for(p=[],f=i;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<p.length;i++){var b=p[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cc=!!eg,tg=eg=null}finally{Ee=n,Ne.p=o,le.T=a}}e.current=t,ht=2}}function nv(){if(ht===2){ht=0;var e=qn,t=li,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var o=Ne.p;Ne.p=2;var n=Ee;Ee|=4;try{zw(e,t.alternate,t)}finally{Ee=n,Ne.p=o,le.T=a}}ht=3}}function rv(){if(ht===4||ht===3){ht=0,p5();var e=qn,t=li,a=tn,o=Zw;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,li=qn=null,lv(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Fn=null),pg(a),t=t.stateNode,ya&&typeof ya.onCommitFiberRoot=="function")try{ya.onCommitFiberRoot(Us,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=le.T,n=Ne.p,Ne.p=2,le.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{le.T=t,Ne.p=n}}(tn&3)!==0&&Bc(),ko(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Qm?Ss++:(Ss=0,Qm=e):Ss=0,Zs(0,!1)}}function lv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xs(t)))}function Bc(){return ov(),nv(),rv(),iv()}function iv(){if(ht!==5)return!1;var e=qn,t=Wm;Wm=0;var a=pg(tn),o=le.T,n=Ne.p;try{Ne.p=32>a?32:a,le.T=null,a=Km,Km=null;var r=qn,l=tn;if(ht=0,li=qn=null,tn=0,(Ee&6)!==0)throw Error(G(331));var i=Ee;if(Ee|=4,Xw(r.current),qw(r,r.current,l,a),Ee=i,Zs(0,!1),ya&&typeof ya.onPostCommitFiberRoot=="function")try{ya.onPostCommitFiberRoot(Us,r)}catch{}return!0}finally{Ne.p=n,le.T=o,lv(e,t)}}function xb(e,t,a){t=Ua(a,t),t=Gm(e.stateNode,t,2),e=Un(e,t,2),e!==null&&(qs(e,2),ko(e))}function De(e,t,a){if(e.tag===3)xb(e,e,a);else for(;t!==null;){if(t.tag===3){xb(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fn===null||!Fn.has(o))){e=Ua(a,e),a=Cw(2),o=Un(t,a,2),o!==null&&(Sw(a,o,t,e),qs(o,2),ko(o));break}}t=t.return}}function sm(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new HM;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(Zg=!0,n.add(a),e=GM.bind(null,e,t,a),t.then(e,e))}function GM(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(_e&a)===a&&(nt===4||nt===3&&(_e&62914560)===_e&&300>ba()-zc?(Ee&2)===0&&ii(e,0):Wg|=a,ri===_e&&(ri=0)),ko(e)}function sv(e,t){t===0&&(t=Jb()),e=qr(e,t),e!==null&&(qs(e,t),ko(e))}function XM(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sv(e,a)}function YM(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(G(314))}o!==null&&o.delete(t),sv(e,a)}function jM(e,t){return cg(e,t)}var gc=null,Dl=null,$m=!1,hc=!1,um=!1,On=0;function ko(e){e!==Dl&&e.next===null&&(Dl===null?gc=Dl=e:Dl=Dl.next=e),hc=!0,$m||($m=!0,WM())}function Zs(e,t){if(!um&&hc){um=!0;do for(var a=!1,o=gc;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-wa(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,bb(o,r))}else r=_e,r=Lc(o,o===He?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Fs(o,r)||(a=!0,bb(o,r));o=o.next}while(a);um=!1}}function ZM(){uv()}function uv(){hc=$m=!1;var e=0;On!==0&&o4()&&(e=On);for(var t=ba(),a=null,o=gc;o!==null;){var n=o.next,r=dv(o,t);r===0?(o.next=null,a===null?gc=n:a.next=n,n===null&&(Dl=a)):(a=o,(e!==0||(r&3)!==0)&&(hc=!0)),o=n}ht!==0&&ht!==5||Zs(e,!1),On!==0&&(On=0)}function dv(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-wa(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=v5(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=He,a=_e,a=Lc(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Bp(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Bp(o),pg(a)){case 2:case 8:a=Qb;break;case 32:a=$d;break;case 268435456:a=$b;break;default:a=$d}return o=cv.bind(null,e),a=cg(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Bp(o),e.callbackPriority=2,e.callbackNode=null,2}function cv(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bc()&&e.callbackNode!==a)return null;var o=_e;return o=Lc(e,e===He?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Kw(e,o,t),dv(e,ba()),e.callbackNode!=null&&e.callbackNode===a?cv.bind(null,e):null)}function bb(e,t){if(Bc())return null;Kw(e,t,!0)}function WM(){r4(function(){(Ee&6)!==0?cg(Kb,ZM):uv()})}function Qg(){if(On===0){var e=ai;e===0&&(e=xd,xd<<=1,(xd&261888)===0&&(xd=256)),On=e}return On}function yb(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zd(""+e)}function wb(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function KM(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=yb((n[ra]||null).action),l=o.submitter;l&&(t=(t=l[ra]||null)?yb(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new _c("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(On!==0){var s=l?wb(n,l):new FormData(n);qm(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?wb(n,l):new FormData(n),qm(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Ed=0;Ed<Nm.length;Ed++)Nd=Nm[Ed],vb=Nd.toLowerCase(),Cb=Nd[0].toUpperCase()+Nd.slice(1),oo(vb,"on"+Cb);var Nd,vb,Cb,Ed;oo(Sy,"onAnimationEnd");oo(Ly,"onAnimationIteration");oo(_y,"onAnimationStart");oo("dblclick","onDoubleClick");oo("focusin","onFocus");oo("focusout","onBlur");oo(mM,"onTransitionRun");oo(gM,"onTransitionStart");oo(hM,"onTransitionCancel");oo(ky,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rs));function fv(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(d){ec(d)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(d){ec(d)}n.currentTarget=null,r=s}}}}function Ce(e,t){var a=t[Cm];a===void 0&&(a=t[Cm]=new Set);var o=e+"__bubble";a.has(o)||(pv(t,e,2,!1),a.add(o))}function dm(e,t,a){var o=0;t&&(o|=4),pv(a,e,o,t)}var Td="_reactListening"+Math.random().toString(36).slice(2);function $g(e){if(!e[Td]){e[Td]=!0,ny.forEach(function(a){a!=="selectionchange"&&(QM.has(a)||dm(a,!1,e),dm(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Td]||(t[Td]=!0,dm("selectionchange",!1,t))}}function pv(e,t,a,o){switch(kv(t)){case 2:var n=_4;break;case 8:n=k4;break;default:n=ah}a=n.bind(null,t,a,e),n=void 0,!Im||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function cm(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=Ol(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}fy(function(){var u=r,d=hg(a),p=[];e:{var c=Iy.get(e);if(c!==void 0){var f=_c,g=e;switch(e){case"keypress":if(Pd(a)===0)break e;case"keydown":case"keyup":f=Y5;break;case"focusin":g="focus",f=Vp;break;case"focusout":g="blur",f=Vp;break;case"beforeblur":case"afterblur":f=Vp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=R5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=W5;break;case Sy:case Ly:case _y:f=P5;break;case ky:f=Q5;break;case"scroll":case"scrollend":f=A5;break;case"wheel":f=J5;break;case"copy":case"cut":case"paste":f=H5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=T0;break;case"toggle":case"beforetoggle":f=tM}var y=(t&4)!==0,w=!y&&(e==="scroll"||e==="scrollend"),x=y?c!==null?c+"Capture":null:c;y=[];for(var h=u,m;h!==null;){var b=h;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||x===null||(b=ks(h,x),b!=null&&y.push(zs(h,b,m))),w)break;h=h.return}0<y.length&&(c=new f(c,g,null,a,d),p.push({event:c,listeners:y}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",c&&a!==km&&(g=a.relatedTarget||a.fromElement)&&(Ol(g)||g[di]))break e;if((f||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,f?(g=a.relatedTarget||a.toElement,f=u,g=g?Ol(g):null,g!==null&&(w=Hs(g),y=g.tag,g!==w||y!==5&&y!==27&&y!==6)&&(g=null)):(f=null,g=u),f!==g)){if(y=E0,b="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=T0,b="onPointerLeave",x="onPointerEnter",h="pointer"),w=f==null?c:us(f),m=g==null?c:us(g),c=new y(b,h+"leave",f,a,d),c.target=w,c.relatedTarget=m,b=null,Ol(d)===u&&(y=new y(x,h+"enter",g,a,d),y.target=m,y.relatedTarget=w,b=y),w=b,f&&g)t:{for(y=$M,x=f,h=g,m=0,b=x;b;b=y(b))m++;b=0;for(var C=h;C;C=y(C))b++;for(;0<m-b;)x=y(x),m--;for(;0<b-m;)h=y(h),b--;for(;m--;){if(x===h||h!==null&&x===h.alternate){y=x;break t}x=y(x),h=y(h)}y=null}else y=null;f!==null&&Sb(p,c,f,y,!1),g!==null&&w!==null&&Sb(p,w,g,y,!0)}}e:{if(c=u?us(u):window,f=c.nodeName&&c.nodeName.toLowerCase(),f==="select"||f==="input"&&c.type==="file")var S=z0;else if(R0(c))if(by)S=cM;else{S=uM;var v=sM}else f=c.nodeName,!f||f.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&gg(u.elementType)&&(S=z0):S=dM;if(S&&(S=S(e,u))){xy(p,S,a,d);break e}v&&v(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&_m(c,"number",c.value)}switch(v=u?us(u):window,e){case"focusin":(R0(v)||v.contentEditable==="true")&&(Hl=v,Mm=u,ms=null);break;case"focusout":ms=Mm=Hl=null;break;case"mousedown":Em=!0;break;case"contextmenu":case"mouseup":case"dragend":Em=!1,H0(p,a,d);break;case"selectionchange":if(pM)break;case"keydown":case"keyup":H0(p,a,d)}var _;if(yg)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Bl?gy(e,a)&&(k="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(k="onCompositionStart");k&&(my&&a.locale!=="ko"&&(Bl||k!=="onCompositionStart"?k==="onCompositionEnd"&&Bl&&(_=py()):(Dn=d,xg="value"in Dn?Dn.value:Dn.textContent,Bl=!0)),v=xc(u,k),0<v.length&&(k=new N0(k,e,null,a,d),p.push({event:k,listeners:v}),_?k.data=_:(_=hy(a),_!==null&&(k.data=_)))),(_=oM?nM(e,a):rM(e,a))&&(k=xc(u,"onBeforeInput"),0<k.length&&(v=new N0("onBeforeInput","beforeinput",null,a,d),p.push({event:v,listeners:k}),v.data=_)),KM(p,e,u,a,d)}fv(p,t)})}function zs(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xc(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=ks(e,a),n!=null&&o.unshift(zs(e,n,r)),n=ks(e,t),n!=null&&o.push(zs(e,n,r))),e.tag===3)return o;e=e.return}return[]}function $M(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sb(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,u=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||u===null||(s=u,n?(u=ks(a,r),u!=null&&l.unshift(zs(a,u,s))):n||(u=ks(a,r),u!=null&&l.push(zs(a,u,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var JM=/\r\n?/g,e4=/\u0000|\uFFFD/g;function Lb(e){return(typeof e=="string"?e:""+e).replace(JM,`
`).replace(e4,"")}function mv(e,t){return t=Lb(t),Lb(e)===t}function Oe(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ti(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ti(e,""+o);break;case"className":wd(e,"class",o);break;case"tabIndex":wd(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wd(e,a,o);break;case"style":cy(e,o,r);break;case"data":if(t!=="object"){wd(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=zd(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",n.name,n,null),Oe(e,t,"formEncType",n.formEncType,n,null),Oe(e,t,"formMethod",n.formMethod,n,null),Oe(e,t,"formTarget",n.formTarget,n,null)):(Oe(e,t,"encType",n.encType,n,null),Oe(e,t,"method",n.method,n,null),Oe(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=zd(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qo);break;case"onScroll":o!=null&&Ce("scroll",e);break;case"onScrollEnd":o!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=zd(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Rd(e,"popover",o);break;case"xlinkActuate":Vo(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vo(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vo(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vo(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vo(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vo(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vo(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vo(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vo(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Rd(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=N5.get(a)||a,Rd(e,a,o))}}function Jm(e,t,a,o,n,r){switch(a){case"style":cy(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ti(e,o):(typeof o=="number"||typeof o=="bigint")&&ti(e,""+o);break;case"onScroll":o!=null&&Ce("scroll",e);break;case"onScrollEnd":o!=null&&Ce("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ry.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[ra]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Rd(e,a,o)}}}function Dt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:Oe(e,t,r,l,a,null)}}n&&Oe(e,t,"srcSet",a.srcSet,a,null),o&&Oe(e,t,"src",a.src,a,null);return;case"input":Ce("invalid",e);var i=r=l=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":l=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(G(137,t));break;default:Oe(e,t,o,d,a,null)}}sy(e,r,i,s,u,l,n,!1);return;case"select":Ce("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:Oe(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?jl(e,!!o,t,!1):a!=null&&jl(e,!!o,a,!0);return;case"textarea":Ce("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(G(91));break;default:Oe(e,t,l,i,a,null)}dy(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Oe(e,t,s,o,a,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(o=0;o<Rs.length;o++)Ce(Rs[o],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:Oe(e,t,u,o,a,null)}return;default:if(gg(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&Jm(e,t,d,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Oe(e,t,i,o,a,null))}function t4(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,u=null,d=null;for(f in a){var p=a[f];if(a.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":s=p;default:o.hasOwnProperty(f)||Oe(e,t,f,null,o,p)}}for(var c in o){var f=o[c];if(p=a[c],o.hasOwnProperty(c)&&(f!=null||p!=null))switch(c){case"type":r=f;break;case"name":n=f;break;case"checked":u=f;break;case"defaultChecked":d=f;break;case"value":l=f;break;case"defaultValue":i=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(G(137,t));break;default:f!==p&&Oe(e,t,c,f,o,p)}}Lm(e,l,i,s,u,d,r,n);return;case"select":f=l=i=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":f=s;default:o.hasOwnProperty(r)||Oe(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&Oe(e,t,n,r,o,s)}t=i,a=l,o=f,c!=null?jl(e,!!a,c,!1):!!o!=!!a&&(t!=null?jl(e,!!a,t,!0):jl(e,!!a,a?[]:"",!1));return;case"textarea":f=c=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Oe(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":c=n;break;case"defaultValue":f=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(G(91));break;default:n!==r&&Oe(e,t,l,n,o,r)}uy(e,c,f);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Oe(e,t,g,null,o,c));for(s in o)c=o[s],f=a[s],o.hasOwnProperty(s)&&c!==f&&(c!=null||f!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Oe(e,t,s,c,o,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!=null&&!o.hasOwnProperty(y)&&Oe(e,t,y,null,o,c);for(u in o)if(c=o[u],f=a[u],o.hasOwnProperty(u)&&c!==f&&(c!=null||f!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(G(137,t));break;default:Oe(e,t,u,c,o,f)}return;default:if(gg(t)){for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!==void 0&&!o.hasOwnProperty(w)&&Jm(e,t,w,void 0,o,c);for(d in o)c=o[d],f=a[d],!o.hasOwnProperty(d)||c===f||c===void 0&&f===void 0||Jm(e,t,d,c,o,f);return}}for(var x in a)c=a[x],a.hasOwnProperty(x)&&c!=null&&!o.hasOwnProperty(x)&&Oe(e,t,x,null,o,c);for(p in o)c=o[p],f=a[p],!o.hasOwnProperty(p)||c===f||c==null&&f==null||Oe(e,t,p,c,o,f)}function _b(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&_b(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>i)break;var d=s.transferSize,p=s.initiatorType;d&&_b(p)&&(s=s.responseEnd,l+=d*(s<i?1:(i-u)/(s-u)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eg=null,tg=null;function bc(e){return e.nodeType===9?e:e.ownerDocument}function kb(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ag(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fm=null;function o4(){var e=window.event;return e&&e.type==="popstate"?e===fm?!1:(fm=e,!0):(fm=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,n4=typeof clearTimeout=="function"?clearTimeout:void 0,Ib=typeof Promise=="function"?Promise:void 0,r4=typeof queueMicrotask=="function"?queueMicrotask:typeof Ib<"u"?function(e){return Ib.resolve(null).then(e).catch(l4)}:hv;function l4(e){setTimeout(function(){throw e})}function Qn(e){return e==="head"}function Mb(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),ui(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ls(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ls(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[Vs]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&Ls(e.ownerDocument.body);a=n}while(a);ui(t)}function Eb(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function og(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":og(a),mg(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function i4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Vs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Va(e.nextSibling),e===null)break}return null}function s4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Va(e.nextSibling),e===null))return null;return e}function xv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Va(e.nextSibling),e===null))return null;return e}function ng(e){return e.data==="$?"||e.data==="$~"}function rg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function u4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Va(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var lg=null;function Nb(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Va(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Tb(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function bv(e,t,a){switch(t=bc(a),e){case"html":if(e=t.documentElement,!e)throw Error(G(452));return e;case"head":if(e=t.head,!e)throw Error(G(453));return e;case"body":if(e=t.body,!e)throw Error(G(454));return e;default:throw Error(G(451))}}function Ls(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mg(e)}var Ga=new Map,Ab=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sn=Ne.d;Ne.d={f:d4,r:c4,D:f4,C:p4,L:m4,m:g4,X:x4,S:h4,M:b4};function d4(){var e=sn.f(),t=Oc();return e||t}function c4(e){var t=ci(e);t!==null&&t.tag===5&&t.type==="form"?cw(t):sn.r(e)}var gi=typeof document>"u"?null:document;function yv(e,t,a){var o=gi;if(o&&typeof t=="string"&&t){var n=Ha(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ab.has(n)||(Ab.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Dt(t,"link",e),wt(t),o.head.appendChild(t)))}}function f4(e){sn.D(e),yv("dns-prefetch",e,null)}function p4(e,t){sn.C(e,t),yv("preconnect",e,t)}function m4(e,t,a){sn.L(e,t,a);var o=gi;if(o&&e&&t){var n='link[rel="preload"][as="'+Ha(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ha(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ha(a.imageSizes)+'"]')):n+='[href="'+Ha(e)+'"]';var r=n;switch(t){case"style":r=si(e);break;case"script":r=hi(e)}Ga.has(r)||(e=Ze({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ga.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Ws(r))||t==="script"&&o.querySelector(Ks(r))||(t=o.createElement("link"),Dt(t,"link",e),wt(t),o.head.appendChild(t)))}}function g4(e,t){sn.m(e,t);var a=gi;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Ha(o)+'"][href="'+Ha(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hi(e)}if(!Ga.has(r)&&(e=Ze({rel:"modulepreload",href:e},t),Ga.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ks(r)))return}o=a.createElement("link"),Dt(o,"link",e),wt(o),a.head.appendChild(o)}}}function h4(e,t,a){sn.S(e,t,a);var o=gi;if(o&&e){var n=Yl(o).hoistableStyles,r=si(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(Ws(r)))i.loading=5;else{e=Ze({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ga.get(r))&&Jg(e,a);var s=l=o.createElement("link");wt(s),Dt(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Xd(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function x4(e,t){sn.X(e,t);var a=gi;if(a&&e){var o=Yl(a).hoistableScripts,n=hi(e),r=o.get(n);r||(r=a.querySelector(Ks(n)),r||(e=Ze({src:e,async:!0},t),(t=Ga.get(n))&&eh(e,t),r=a.createElement("script"),wt(r),Dt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function b4(e,t){sn.M(e,t);var a=gi;if(a&&e){var o=Yl(a).hoistableScripts,n=hi(e),r=o.get(n);r||(r=a.querySelector(Ks(n)),r||(e=Ze({src:e,async:!0,type:"module"},t),(t=Ga.get(n))&&eh(e,t),r=a.createElement("script"),wt(r),Dt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function Db(e,t,a,o){var n=(n=Pn.current)?yc(n):null;if(!n)throw Error(G(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=si(a.href),a=Yl(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=si(a.href);var r=Yl(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(Ws(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Ga.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ga.set(e,a),r||y4(n,e,a,l.state))),t&&o===null)throw Error(G(528,""));return l}if(t&&o!==null)throw Error(G(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hi(a),a=Yl(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(G(444,e))}}function si(e){return'href="'+Ha(e)+'"'}function Ws(e){return'link[rel="stylesheet"]['+e+"]"}function wv(e){return Ze({},e,{"data-precedence":e.precedence,precedence:null})}function y4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Dt(t,"link",a),wt(t),e.head.appendChild(t))}function hi(e){return'[src="'+Ha(e)+'"]'}function Ks(e){return"script[async]"+e}function Rb(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ha(a.href)+'"]');if(o)return t.instance=o,wt(o),o;var n=Ze({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),wt(o),Dt(o,"style",n),Xd(o,a.precedence,e),t.instance=o;case"stylesheet":n=si(a.href);var r=e.querySelector(Ws(n));if(r)return t.state.loading|=4,t.instance=r,wt(r),r;o=wv(a),(n=Ga.get(n))&&Jg(o,n),r=(e.ownerDocument||e).createElement("link"),wt(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Dt(r,"link",o),t.state.loading|=4,Xd(r,a.precedence,e),t.instance=r;case"script":return r=hi(a.src),(n=e.querySelector(Ks(r)))?(t.instance=n,wt(n),n):(o=a,(n=Ga.get(r))&&(o=Ze({},a),eh(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),wt(n),Dt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(G(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Xd(o,a.precedence,e));return t.instance}function Xd(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function eh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yd=null;function zb(e,t,a){if(Yd===null){var o=new Map,n=Yd=new Map;n.set(a,o)}else n=Yd,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Vs]||r[Nt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function Ob(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function w4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function v4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=si(o.href),r=t.querySelector(Ws(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,wt(r);return}r=t.ownerDocument||t,o=wv(o),(n=Ga.get(n))&&Jg(o,n),r=r.createElement("link"),wt(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Dt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var pm=0;function C4(e,t){return e.stylesheets&&e.count===0&&jd(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&jd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&pm===0&&(pm=62500*a4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jd(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>pm?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function jd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,t.forEach(S4,e),vc=null,wc.call(e))}function S4(e,t){if(!(t.state.loading&4)){var a=vc.get(e);if(a)var o=a.get(null);else{a=new Map,vc.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=wc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Os={$$typeof:Ko,Provider:null,Consumer:null,_currentValue:Er,_currentValue2:Er,_threadCount:0};function L4(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hp(0),this.hiddenUpdates=Hp(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Cv(e,t,a,o,n,r,l,i,s,u,d,p){return e=new L4(e,t,a,l,s,u,d,p,i),t=1,r===!0&&(t|=24),r=ha(3,null,null,t),e.current=r,r.stateNode=e,t=kg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Eg(r),e}function Sv(e){return e?(e=ql,e):ql}function Lv(e,t,a,o,n,r){n=Sv(n),o.context===null?o.context=n:o.pendingContext=n,o=Hn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Un(e,o,t),a!==null&&(na(a,e,t),hs(a,e,t))}function Pb(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function th(e,t){Pb(e,t),(e=e.alternate)&&Pb(e,t)}function _v(e){if(e.tag===13||e.tag===31){var t=qr(e,67108864);t!==null&&na(t,e,67108864),th(e,67108864)}}function Bb(e){if(e.tag===13||e.tag===31){var t=va();t=fg(t);var a=qr(e,t);a!==null&&na(a,e,t),th(e,t)}}var Cc=!0;function _4(e,t,a,o){var n=le.T;le.T=null;var r=Ne.p;try{Ne.p=2,ah(e,t,a,o)}finally{Ne.p=r,le.T=n}}function k4(e,t,a,o){var n=le.T;le.T=null;var r=Ne.p;try{Ne.p=8,ah(e,t,a,o)}finally{Ne.p=r,le.T=n}}function ah(e,t,a,o){if(Cc){var n=ig(o);if(n===null)cm(e,t,o,Sc,a),Hb(e,o);else if(M4(n,e,t,a,o))o.stopPropagation();else if(Hb(e,o),t&4&&-1<I4.indexOf(e)){for(;n!==null;){var r=ci(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=kr(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-wa(l);i.entanglements[1]|=s,l&=~s}ko(r),(Ee&6)===0&&(fc=ba()+500,Zs(0,!1))}}break;case 31:case 13:i=qr(r,2),i!==null&&na(i,r,2),Oc(),th(r,2)}if(r=ig(o),r===null&&cm(e,t,o,Sc,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else cm(e,t,o,null,a)}}function ig(e){return e=hg(e),oh(e)}var Sc=null;function oh(e){if(Sc=null,e=Ol(e),e!==null){var t=Hs(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Xb(t),e!==null)return e;e=null}else if(a===31){if(e=Yb(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sc=e,null}function kv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(m5()){case Kb:return 2;case Qb:return 8;case $d:case g5:return 32;case $b:return 268435456;default:return 32}default:return 32}}var sg=!1,Vn=null,Gn=null,Xn=null,Ps=new Map,Bs=new Map,Tn=[],I4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hb(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(t.pointerId)}}function rs(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=ci(t),t!==null&&_v(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function M4(e,t,a,o,n){switch(t){case"focusin":return Vn=rs(Vn,e,t,a,o,n),!0;case"dragenter":return Gn=rs(Gn,e,t,a,o,n),!0;case"mouseover":return Xn=rs(Xn,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return Ps.set(r,rs(Ps.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Bs.set(r,rs(Bs.get(r)||null,e,t,a,o,n)),!0}return!1}function Iv(e){var t=Ol(e.target);if(t!==null){var a=Hs(t);if(a!==null){if(t=a.tag,t===13){if(t=Xb(a),t!==null){e.blockedOn=t,C0(e.priority,function(){Bb(a)});return}}else if(t===31){if(t=Yb(a),t!==null){e.blockedOn=t,C0(e.priority,function(){Bb(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ig(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);km=o,a.target.dispatchEvent(o),km=null}else return t=ci(a),t!==null&&_v(t),e.blockedOn=a,!1;t.shift()}return!0}function Ub(e,t,a){Zd(e)&&a.delete(t)}function E4(){sg=!1,Vn!==null&&Zd(Vn)&&(Vn=null),Gn!==null&&Zd(Gn)&&(Gn=null),Xn!==null&&Zd(Xn)&&(Xn=null),Ps.forEach(Ub),Bs.forEach(Ub)}function Ad(e,t){e.blockedOn===t&&(e.blockedOn=null,sg||(sg=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,E4)))}var Dd=null;function Fb(e){Dd!==e&&(Dd=e,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,function(){Dd===e&&(Dd=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(oh(o||a)===null)continue;break}var r=ci(a);r!==null&&(e.splice(t,3),t-=3,qm(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function ui(e){function t(s){return Ad(s,e)}Vn!==null&&Ad(Vn,e),Gn!==null&&Ad(Gn,e),Xn!==null&&Ad(Xn,e),Ps.forEach(t),Bs.forEach(t);for(var a=0;a<Tn.length;a++){var o=Tn[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Tn.length&&(a=Tn[0],a.blockedOn===null);)Iv(a),a.blockedOn===null&&Tn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[ra]||null;if(typeof r=="function")l||Fb(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[ra]||null)i=l.formAction;else if(oh(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),Fb(a)}}}function Mv(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function nh(e){this._internalRoot=e}Hc.prototype.render=nh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));var a=t.current,o=va();Lv(a,o,e,t,null,null)};Hc.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lv(e.current,2,null,e,null,null),Oc(),t[di]=null}};function Hc(e){this._internalRoot=e}Hc.prototype.unstable_scheduleHydration=function(e){if(e){var t=oy();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Tn.length&&t!==0&&t<Tn[a].priority;a++);Tn.splice(a,0,e),a===0&&Iv(e)}};var qb=Vb.version;if(qb!=="19.2.8")throw Error(G(527,qb,"19.2.8"));Ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=i5(t),e=e!==null?jb(e):null,e=e===null?null:e.stateNode,e};var N4={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ls=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ls.isDisabled&&ls.supportsFiber))try{Us=ls.inject(N4),ya=ls}catch{}var ls;Uc.createRoot=function(e,t){if(!Gb(e))throw Error(G(299));var a=!1,o="",n=yw,r=ww,l=vw;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Cv(e,1,!1,null,null,a,o,null,n,r,l,Mv),e[di]=t.current,$g(e),new nh(t)};Uc.hydrateRoot=function(e,t,a){if(!Gb(e))throw Error(G(299));var o=!1,n="",r=yw,l=ww,i=vw,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Cv(e,1,!0,t,a??null,o,n,s,r,l,i,Mv),t.context=Sv(null),a=t.current,o=va(),o=fg(o),n=Hn(o),n.callback=null,Un(a,n,o),a=o,t.current.lanes=a,qs(t,a),ko(t),e[di]=t.current,$g(e),new Hc(t)};Uc.version="19.2.8"});var rh=Jt((GR,Tv)=>{"use strict";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(e){console.error(e)}}Nv(),Tv.exports=Ev()});var Dv=Jt(Fc=>{"use strict";var T4=Symbol.for("react.transitional.element"),A4=Symbol.for("react.fragment");function Av(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:T4,type:e,key:o,ref:t!==void 0?t:null,props:a}}Fc.Fragment=A4;Fc.jsx=Av;Fc.jsxs=Av});var X=Jt((YR,Rv)=>{"use strict";Rv.exports=Dv()});var bC=Jt(xC=>{"use strict";var Ai=J();function kN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var IN=typeof Object.is=="function"?Object.is:kN,MN=Ai.useState,EN=Ai.useEffect,NN=Ai.useLayoutEffect,TN=Ai.useDebugValue;function AN(e,t){var a=t(),o=MN({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return NN(function(){n.value=a,n.getSnapshot=t,Zh(n)&&r({inst:n})},[e,a,t]),EN(function(){return Zh(n)&&r({inst:n}),e(function(){Zh(n)&&r({inst:n})})},[e]),TN(a),a}function Zh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!IN(e,a)}catch{return!0}}function DN(e,t){return t()}var RN=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?DN:AN;xC.useSyncExternalStore=Ai.useSyncExternalStore!==void 0?Ai.useSyncExternalStore:RN});var wC=Jt((HB,yC)=>{"use strict";yC.exports=bC()});var CC=Jt(vC=>{"use strict";var Df=J(),zN=wC();function ON(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var PN=typeof Object.is=="function"?Object.is:ON,BN=zN.useSyncExternalStore,HN=Df.useRef,UN=Df.useEffect,FN=Df.useMemo,qN=Df.useDebugValue;vC.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=HN(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=FN(function(){function s(f){if(!u){if(u=!0,d=f,f=o(f),n!==void 0&&l.hasValue){var g=l.value;if(n(g,f))return p=g}return p=f}if(g=p,PN(d,f))return g;var y=o(f);return n!==void 0&&n(g,y)?(d=f,g):(d=f,p=y)}var u=!1,d,p,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var i=BN(e,r[0],r[1]);return UN(function(){l.hasValue=!0,l.value=i},[i]),qN(i),i}});var LC=Jt((FB,SC)=>{"use strict";SC.exports=CC()});var zR={};BI(zR,{mountCanvas:()=>AR,unmountCanvas:()=>RR,updateCanvas:()=>DR});var Tk=R(rh(),1);var Wi=R(J(),1);var tt=R(J(),1);var O=R(X()),P=R(J());function rt(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=rt(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var D4={value:()=>{}};function Ov(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new qc(a)}function qc(e){this._=e}function R4(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}qc.prototype=Ov.prototype={constructor:qc,on:function(e,t){var a=this._,o=R4(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=z4(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=zv(a[n],e.name,t);else if(t==null)for(n in a)a[n]=zv(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new qc(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function z4(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function zv(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=D4,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Gr=Ov;var Vc="http://www.w3.org/1999/xhtml",lh={svg:"http://www.w3.org/2000/svg",xhtml:Vc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function un(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),lh.hasOwnProperty(t)?{space:lh[t],local:e}:e}function O4(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Vc&&t.documentElement.namespaceURI===Vc?t.createElement(e):t.createElementNS(a,e)}}function P4(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Gc(e){var t=un(e);return(t.local?P4:O4)(t)}function B4(){}function Xr(e){return e==null?B4:function(){return this.querySelector(e)}}function Pv(e){typeof e!="function"&&(e=Xr(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,u,d=0;d<l;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),i[d]=u);return new lt(o,this._parents)}function ih(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function H4(){return[]}function Qs(e){return e==null?H4:function(){return this.querySelectorAll(e)}}function U4(e){return function(){return ih(e.apply(this,arguments))}}function Bv(e){typeof e=="function"?e=U4(e):e=Qs(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&(o.push(e.call(s,s.__data__,u,l)),n.push(s));return new lt(o,n)}function $s(e){return function(){return this.matches(e)}}function Xc(e){return function(t){return t.matches(e)}}var F4=Array.prototype.find;function q4(e){return function(){return F4.call(this.children,e)}}function V4(){return this.firstElementChild}function Hv(e){return this.select(e==null?V4:q4(typeof e=="function"?e:Xc(e)))}var G4=Array.prototype.filter;function X4(){return Array.from(this.children)}function Y4(e){return function(){return G4.call(this.children,e)}}function Uv(e){return this.selectAll(e==null?X4:Y4(typeof e=="function"?e:Xc(e)))}function Fv(e){typeof e!="function"&&(e=$s(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new lt(o,this._parents)}function Yc(e){return new Array(e.length)}function qv(){return new lt(this._enter||this._groups.map(Yc),this._parents)}function Js(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Js.prototype={constructor:Js,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Vv(e){return function(){return e}}function j4(e,t,a,o,n,r){for(var l=0,i,s=t.length,u=r.length;l<u;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new Js(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function Z4(e,t,a,o,n,r,l){var i,s,u=new Map,d=t.length,p=r.length,c=new Array(d),f;for(i=0;i<d;++i)(s=t[i])&&(c[i]=f=l.call(s,s.__data__,i,t)+"",u.has(f)?n[i]=s:u.set(f,s));for(i=0;i<p;++i)f=l.call(e,r[i],i,r)+"",(s=u.get(f))?(o[i]=s,s.__data__=r[i],u.delete(f)):a[i]=new Js(e,r[i]);for(i=0;i<d;++i)(s=t[i])&&u.get(c[i])===s&&(n[i]=s)}function W4(e){return e.__data__}function Gv(e,t){if(!arguments.length)return Array.from(this,W4);var a=t?Z4:j4,o=this._parents,n=this._groups;typeof e!="function"&&(e=Vv(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],p=n[u],c=p.length,f=K4(e.call(d,d&&d.__data__,u,o)),g=f.length,y=i[u]=new Array(g),w=l[u]=new Array(g),x=s[u]=new Array(c);a(d,p,y,w,x,f,t);for(var h=0,m=0,b,C;h<g;++h)if(b=y[h]){for(h>=m&&(m=h+1);!(C=w[m])&&++m<g;);b._next=C||null}}return l=new lt(l,o),l._enter=i,l._exit=s,l}function K4(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Xv(){return new lt(this._exit||this._groups.map(Yc),this._parents)}function Yv(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function jv(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var u=a[s],d=o[s],p=u.length,c=i[s]=new Array(p),f,g=0;g<p;++g)(f=u[g]||d[g])&&(c[g]=f);for(;s<n;++s)i[s]=a[s];return new lt(i,this._parents)}function Zv(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function Wv(e){e||(e=Q4);function t(p,c){return p&&c?e(p.__data__,c.__data__):!p-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),u,d=0;d<i;++d)(u=l[d])&&(s[d]=u);s.sort(t)}return new lt(n,this._parents).order()}function Q4(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Kv(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Qv(){return Array.from(this)}function $v(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function Jv(){let e=0;for(let t of this)++e;return e}function e1(){return!this.node()}function t1(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function $4(e){return function(){this.removeAttribute(e)}}function J4(e){return function(){this.removeAttributeNS(e.space,e.local)}}function e3(e,t){return function(){this.setAttribute(e,t)}}function t3(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function a3(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function o3(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function a1(e,t){var a=un(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?J4:$4:typeof t=="function"?a.local?o3:a3:a.local?t3:e3)(a,t))}function jc(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function n3(e){return function(){this.style.removeProperty(e)}}function r3(e,t,a){return function(){this.style.setProperty(e,t,a)}}function l3(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function o1(e,t,a){return arguments.length>1?this.each((t==null?n3:typeof t=="function"?l3:r3)(e,t,a??"")):$n(this.node(),e)}function $n(e,t){return e.style.getPropertyValue(t)||jc(e).getComputedStyle(e,null).getPropertyValue(t)}function i3(e){return function(){delete this[e]}}function s3(e,t){return function(){this[e]=t}}function u3(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function n1(e,t){return arguments.length>1?this.each((t==null?i3:typeof t=="function"?u3:s3)(e,t)):this.node()[e]}function r1(e){return e.trim().split(/^|\s+/)}function sh(e){return e.classList||new l1(e)}function l1(e){this._node=e,this._names=r1(e.getAttribute("class")||"")}l1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function i1(e,t){for(var a=sh(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function s1(e,t){for(var a=sh(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function d3(e){return function(){i1(this,e)}}function c3(e){return function(){s1(this,e)}}function f3(e,t){return function(){(t.apply(this,arguments)?i1:s1)(this,e)}}function u1(e,t){var a=r1(e+"");if(arguments.length<2){for(var o=sh(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?f3:t?d3:c3)(a,t))}function p3(){this.textContent=""}function m3(e){return function(){this.textContent=e}}function g3(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function d1(e){return arguments.length?this.each(e==null?p3:(typeof e=="function"?g3:m3)(e)):this.node().textContent}function h3(){this.innerHTML=""}function x3(e){return function(){this.innerHTML=e}}function b3(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function c1(e){return arguments.length?this.each(e==null?h3:(typeof e=="function"?b3:x3)(e)):this.node().innerHTML}function y3(){this.nextSibling&&this.parentNode.appendChild(this)}function f1(){return this.each(y3)}function w3(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function p1(){return this.each(w3)}function m1(e){var t=typeof e=="function"?e:Gc(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function v3(){return null}function g1(e,t){var a=typeof e=="function"?e:Gc(e),o=t==null?v3:typeof t=="function"?t:Xr(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function C3(){var e=this.parentNode;e&&e.removeChild(this)}function h1(){return this.each(C3)}function S3(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function L3(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function x1(e){return this.select(e?L3:S3)}function b1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function _3(e){return function(t){e.call(this,t,this.__data__)}}function k3(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function I3(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function M3(e,t,a){return function(){var o=this.__on,n,r=_3(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function y1(e,t,a){var o=k3(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,u=i.length,d;s<u;++s)for(n=0,d=i[s];n<r;++n)if((l=o[n]).type===d.type&&l.name===d.name)return d.value}return}for(i=t?M3:I3,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function w1(e,t,a){var o=jc(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function E3(e,t){return function(){return w1(this,e,t)}}function N3(e,t){return function(){return w1(this,e,t.apply(this,arguments))}}function v1(e,t){return this.each((typeof t=="function"?N3:E3)(e,t))}function*C1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var uh=[null];function lt(e,t){this._groups=e,this._parents=t}function S1(){return new lt([[document.documentElement]],uh)}function T3(){return this}lt.prototype=S1.prototype={constructor:lt,select:Pv,selectAll:Bv,selectChild:Hv,selectChildren:Uv,filter:Fv,data:Gv,enter:qv,exit:Xv,join:Yv,merge:jv,selection:T3,order:Zv,sort:Wv,call:Kv,nodes:Qv,node:$v,size:Jv,empty:e1,each:t1,attr:a1,style:o1,property:n1,classed:u1,text:d1,html:c1,raise:f1,lower:p1,append:m1,insert:g1,remove:h1,clone:x1,datum:b1,on:y1,dispatch:v1,[Symbol.iterator]:C1};var dn=S1;function Ct(e){return typeof e=="string"?new lt([[document.querySelector(e)]],[document.documentElement]):new lt([[e]],uh)}function L1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Yt(e,t){if(e=L1(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var _1={passive:!1},Yr={capture:!0,passive:!1};function Zc(e){e.stopImmediatePropagation()}function Jn(e){e.preventDefault(),e.stopImmediatePropagation()}function eu(e){var t=e.document.documentElement,a=Ct(e).on("dragstart.drag",Jn,Yr);"onselectstart"in t?a.on("selectstart.drag",Jn,Yr):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function tu(e,t){var a=e.document.documentElement,o=Ct(e).on("dragstart.drag",null);t&&(o.on("click.drag",Jn,Yr),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var au=e=>()=>e;function ou(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}ou.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function A3(e){return!e.ctrlKey&&!e.button}function D3(){return this.parentNode}function R3(e,t){return t??{x:e.x,y:e.y}}function z3(){return navigator.maxTouchPoints||"ontouchstart"in this}function Wc(){var e=A3,t=D3,a=R3,o=z3,n={},r=Gr("start","drag","end"),l=0,i,s,u,d,p=0;function c(b){b.on("mousedown.drag",f).filter(o).on("touchstart.drag",w).on("touchmove.drag",x,_1).on("touchend.drag touchcancel.drag",h).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(b,C){if(!(d||!e.call(this,b,C))){var S=m(this,t.call(this,b,C),b,C,"mouse");S&&(Ct(b.view).on("mousemove.drag",g,Yr).on("mouseup.drag",y,Yr),eu(b.view),Zc(b),u=!1,i=b.clientX,s=b.clientY,S("start",b))}}function g(b){if(Jn(b),!u){var C=b.clientX-i,S=b.clientY-s;u=C*C+S*S>p}n.mouse("drag",b)}function y(b){Ct(b.view).on("mousemove.drag mouseup.drag",null),tu(b.view,u),Jn(b),n.mouse("end",b)}function w(b,C){if(e.call(this,b,C)){var S=b.changedTouches,v=t.call(this,b,C),_=S.length,k,T;for(k=0;k<_;++k)(T=m(this,v,b,C,S[k].identifier,S[k]))&&(Zc(b),T("start",b,S[k]))}}function x(b){var C=b.changedTouches,S=C.length,v,_;for(v=0;v<S;++v)(_=n[C[v].identifier])&&(Jn(b),_("drag",b,C[v]))}function h(b){var C=b.changedTouches,S=C.length,v,_;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),v=0;v<S;++v)(_=n[C[v].identifier])&&(Zc(b),_("end",b,C[v]))}function m(b,C,S,v,_,k){var T=r.copy(),N=Yt(k||S,C),U,H,L;if((L=a.call(b,new ou("beforestart",{sourceEvent:S,target:c,identifier:_,active:l,x:N[0],y:N[1],dx:0,dy:0,dispatch:T}),v))!=null)return U=L.x-N[0]||0,H=L.y-N[1]||0,function M(E,I,A){var z=N,V;switch(E){case"start":n[_]=M,V=l++;break;case"end":delete n[_],--l;case"drag":N=Yt(A||I,C),V=l;break}T.call(E,b,new ou(E,{sourceEvent:I,subject:L,target:c,identifier:_,active:V,x:N[0]+U,y:N[1]+H,dx:N[0]-z[0],dy:N[1]-z[1],dispatch:T}),v)}}return c.filter=function(b){return arguments.length?(e=typeof b=="function"?b:au(!!b),c):e},c.container=function(b){return arguments.length?(t=typeof b=="function"?b:au(b),c):t},c.subject=function(b){return arguments.length?(a=typeof b=="function"?b:au(b),c):a},c.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:au(!!b),c):o},c.on=function(){var b=r.on.apply(r,arguments);return b===r?c:b},c.clickDistance=function(b){return arguments.length?(p=(b=+b)*b,c):Math.sqrt(p)},c}function Kc(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function dh(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function lu(){}var nu=.7,Jc=1/nu,xi="\\s*([+-]?\\d+)\\s*",ru="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Io="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",O3=/^#([0-9a-f]{3,8})$/,P3=new RegExp(`^rgb\\(${xi},${xi},${xi}\\)$`),B3=new RegExp(`^rgb\\(${Io},${Io},${Io}\\)$`),H3=new RegExp(`^rgba\\(${xi},${xi},${xi},${ru}\\)$`),U3=new RegExp(`^rgba\\(${Io},${Io},${Io},${ru}\\)$`),F3=new RegExp(`^hsl\\(${ru},${Io},${Io}\\)$`),q3=new RegExp(`^hsla\\(${ru},${Io},${Io},${ru}\\)$`),k1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Kc(lu,ro,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:I1,formatHex:I1,formatHex8:V3,formatHsl:G3,formatRgb:M1,toString:M1});function I1(){return this.rgb().formatHex()}function V3(){return this.rgb().formatHex8()}function G3(){return R1(this).formatHsl()}function M1(){return this.rgb().formatRgb()}function ro(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=O3.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?E1(t):a===3?new ia(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Qc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Qc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=P3.exec(e))?new ia(t[1],t[2],t[3],1):(t=B3.exec(e))?new ia(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=H3.exec(e))?Qc(t[1],t[2],t[3],t[4]):(t=U3.exec(e))?Qc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=F3.exec(e))?A1(t[1],t[2]/100,t[3]/100,1):(t=q3.exec(e))?A1(t[1],t[2]/100,t[3]/100,t[4]):k1.hasOwnProperty(e)?E1(k1[e]):e==="transparent"?new ia(NaN,NaN,NaN,0):null}function E1(e){return new ia(e>>16&255,e>>8&255,e&255,1)}function Qc(e,t,a,o){return o<=0&&(e=t=a=NaN),new ia(e,t,a,o)}function X3(e){return e instanceof lu||(e=ro(e)),e?(e=e.rgb(),new ia(e.r,e.g,e.b,e.opacity)):new ia}function bi(e,t,a,o){return arguments.length===1?X3(e):new ia(e,t,a,o??1)}function ia(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}Kc(ia,bi,dh(lu,{brighter(e){return e=e==null?Jc:Math.pow(Jc,e),new ia(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?nu:Math.pow(nu,e),new ia(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ia(Zr(this.r),Zr(this.g),Zr(this.b),ef(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:N1,formatHex:N1,formatHex8:Y3,formatRgb:T1,toString:T1}));function N1(){return`#${jr(this.r)}${jr(this.g)}${jr(this.b)}`}function Y3(){return`#${jr(this.r)}${jr(this.g)}${jr(this.b)}${jr((isNaN(this.opacity)?1:this.opacity)*255)}`}function T1(){let e=ef(this.opacity);return`${e===1?"rgb(":"rgba("}${Zr(this.r)}, ${Zr(this.g)}, ${Zr(this.b)}${e===1?")":`, ${e})`}`}function ef(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Zr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function jr(e){return e=Zr(e),(e<16?"0":"")+e.toString(16)}function A1(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new no(e,t,a,o)}function R1(e){if(e instanceof no)return new no(e.h,e.s,e.l,e.opacity);if(e instanceof lu||(e=ro(e)),!e)return new no;if(e instanceof no)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new no(l,i,s,e.opacity)}function z1(e,t,a,o){return arguments.length===1?R1(e):new no(e,t,a,o??1)}function no(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}Kc(no,z1,dh(lu,{brighter(e){return e=e==null?Jc:Math.pow(Jc,e),new no(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?nu:Math.pow(nu,e),new no(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new ia(ch(e>=240?e-240:e+120,n,o),ch(e,n,o),ch(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new no(D1(this.h),$c(this.s),$c(this.l),ef(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=ef(this.opacity);return`${e===1?"hsl(":"hsla("}${D1(this.h)}, ${$c(this.s)*100}%, ${$c(this.l)*100}%${e===1?")":`, ${e})`}`}}));function D1(e){return e=(e||0)%360,e<0?e+360:e}function $c(e){return Math.max(0,Math.min(1,e||0))}function ch(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function fh(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function O1(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return fh((a-o/t)*t,l,n,r,i)}}function P1(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return fh((a-o/t)*t,n,r,l,i)}}var iu=e=>()=>e;function j3(e,t){return function(a){return e+a*t}}function Z3(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function B1(e){return(e=+e)==1?tf:function(t,a){return a-t?Z3(t,a,e):iu(isNaN(t)?a:t)}}function tf(e,t){var a=t-e;return a?j3(e,a):iu(isNaN(e)?t:e)}var Wr=(function e(t){var a=B1(t);function o(n,r){var l=a((n=bi(n)).r,(r=bi(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),u=tf(n.opacity,r.opacity);return function(d){return n.r=l(d),n.g=i(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function H1(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=bi(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var W3=H1(O1),K3=H1(P1);function U1(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function F1(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function q1(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=cn(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function V1(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function jt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function G1(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=cn(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var mh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ph=new RegExp(mh.source,"g");function Q3(e){return function(){return e}}function $3(e){return function(t){return e(t)+""}}function su(e,t){var a=mh.lastIndex=ph.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=mh.exec(e))&&(n=ph.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:jt(o,n)})),a=ph.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?$3(s[0].x):Q3(t):(t=s.length,function(u){for(var d=0,p;d<t;++d)i[(p=s[d]).i]=p.x(u);return i.join("")})}function cn(e,t){var a=typeof t,o;return t==null||a==="boolean"?iu(t):(a==="number"?jt:a==="string"?(o=ro(t))?(t=o,Wr):su:t instanceof ro?Wr:t instanceof Date?V1:F1(t)?U1:Array.isArray(t)?q1:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?G1:jt)(e,t)}var X1=180/Math.PI,af={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function gh(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*X1,skewX:Math.atan(s)*X1,scaleX:l,scaleY:i}}var of;function Y1(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?af:gh(t.a,t.b,t.c,t.d,t.e,t.f)}function j1(e){return e==null?af:(of||(of=document.createElementNS("http://www.w3.org/2000/svg","g")),of.setAttribute("transform",e),(e=of.transform.baseVal.consolidate())?(e=e.matrix,gh(e.a,e.b,e.c,e.d,e.e,e.f)):af)}function Z1(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,p,c,f,g){if(u!==p||d!==c){var y=f.push("translate(",null,t,null,a);g.push({i:y-4,x:jt(u,p)},{i:y-2,x:jt(d,c)})}else(p||c)&&f.push("translate("+p+t+c+a)}function l(u,d,p,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:p.push(n(p)+"rotate(",null,o)-2,x:jt(u,d)})):d&&p.push(n(p)+"rotate("+d+o)}function i(u,d,p,c){u!==d?c.push({i:p.push(n(p)+"skewX(",null,o)-2,x:jt(u,d)}):d&&p.push(n(p)+"skewX("+d+o)}function s(u,d,p,c,f,g){if(u!==p||d!==c){var y=f.push(n(f)+"scale(",null,",",null,")");g.push({i:y-4,x:jt(u,p)},{i:y-2,x:jt(d,c)})}else(p!==1||c!==1)&&f.push(n(f)+"scale("+p+","+c+")")}return function(u,d){var p=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,p,c),l(u.rotate,d.rotate,p,c),i(u.skewX,d.skewX,p,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,c),u=d=null,function(f){for(var g=-1,y=c.length,w;++g<y;)p[(w=c[g]).i]=w.x(f);return p.join("")}}}var hh=Z1(Y1,"px, ","px)","deg)"),xh=Z1(j1,", ",")",")");var J3=1e-12;function W1(e){return((e=Math.exp(e))+1/e)/2}function eE(e){return((e=Math.exp(e))-1/e)/2}function tE(e){return((e=Math.exp(2*e))-1)/(e+1)}var Kr=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],u=r[2],d=l[0],p=l[1],c=l[2],f=d-i,g=p-s,y=f*f+g*g,w,x;if(y<J3)x=Math.log(c/u)/t,w=function(v){return[i+v*f,s+v*g,u*Math.exp(t*v*x)]};else{var h=Math.sqrt(y),m=(c*c-u*u+o*y)/(2*u*a*h),b=(c*c-u*u-o*y)/(2*c*a*h),C=Math.log(Math.sqrt(m*m+1)-m),S=Math.log(Math.sqrt(b*b+1)-b);x=(S-C)/t,w=function(v){var _=v*x,k=W1(C),T=u/(a*h)*(k*tE(t*_+C)-eE(C));return[i+T*f,s+T*g,u*k/W1(t*_+C)]}}return w.duration=x*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var yi=0,du=0,uu=0,Q1=1e3,nf,cu,rf=0,Qr=0,lf=0,fu=typeof performance=="object"&&performance.now?performance:Date,$1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function mu(){return Qr||($1(aE),Qr=fu.now()+lf)}function aE(){Qr=0}function pu(){this._call=this._time=this._next=null}pu.prototype=sf.prototype={constructor:pu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?mu():+a)+(t==null?0:+t),!this._next&&cu!==this&&(cu?cu._next=this:nf=this,cu=this),this._call=e,this._time=a,bh()},stop:function(){this._call&&(this._call=null,this._time=1/0,bh())}};function sf(e,t,a){var o=new pu;return o.restart(e,t,a),o}function J1(){mu(),++yi;for(var e=nf,t;e;)(t=Qr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--yi}function K1(){Qr=(rf=fu.now())+lf,yi=du=0;try{J1()}finally{yi=0,nE(),Qr=0}}function oE(){var e=fu.now(),t=e-rf;t>Q1&&(lf-=t,rf=e)}function nE(){for(var e,t=nf,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:nf=a);cu=e,bh(o)}function bh(e){if(!yi){du&&(du=clearTimeout(du));var t=e-Qr;t>24?(e<1/0&&(du=setTimeout(K1,e-fu.now()-lf)),uu&&(uu=clearInterval(uu))):(uu||(rf=fu.now(),uu=setInterval(oE,Q1)),yi=1,$1(K1))}}function uf(e,t,a){var o=new pu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var rE=Gr("start","end","cancel","interrupt"),lE=[],a2=0,e2=1,cf=2,df=3,t2=4,ff=5,gu=6;function er(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;iE(e,a,{name:t,index:o,group:n,on:rE,tween:lE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:a2})}function hu(e,t){var a=bt(e,t);if(a.state>a2)throw new Error("too late; already scheduled");return a}function Rt(e,t){var a=bt(e,t);if(a.state>df)throw new Error("too late; already running");return a}function bt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function iE(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=sf(r,0,a.time);function r(u){a.state=e2,a.timer.restart(l,a.delay,a.time),a.delay<=u&&l(u-a.delay)}function l(u){var d,p,c,f;if(a.state!==e2)return s();for(d in o)if(f=o[d],f.name===a.name){if(f.state===df)return uf(l);f.state===t2?(f.state=gu,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete o[d]):+d<t&&(f.state=gu,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete o[d])}if(uf(function(){a.state===df&&(a.state=t2,a.timer.restart(i,a.delay,a.time),i(u))}),a.state=cf,a.on.call("start",e,e.__data__,a.index,a.group),a.state===cf){for(a.state=df,n=new Array(c=a.tween.length),d=0,p=-1;d<c;++d)(f=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++p]=f);n.length=p+1}}function i(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=ff,1),p=-1,c=n.length;++p<c;)n[p].call(e,d);a.state===ff&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=gu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function $r(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>cf&&o.state<ff,o.state=gu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function o2(e){return this.each(function(){$r(this,e)})}function sE(e,t){var a,o;return function(){var n=Rt(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function uE(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=Rt(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=i;break}s===u&&n.push(i)}r.tween=n}}function n2(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=bt(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?sE:uE)(a,e,t))}function wi(e,t,a){var o=e._id;return e.each(function(){var n=Rt(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return bt(n,o).value[t]}}function pf(e,t){var a;return(typeof t=="number"?jt:t instanceof ro?Wr:(a=ro(t))?(t=a,Wr):su)(e,t)}function dE(e){return function(){this.removeAttribute(e)}}function cE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function fE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function pE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function mE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function gE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function r2(e,t){var a=un(e),o=a==="transform"?xh:pf;return this.attrTween(e,typeof t=="function"?(a.local?gE:mE)(a,o,wi(this,"attr."+e,t)):t==null?(a.local?cE:dE)(a):(a.local?pE:fE)(a,o,t))}function hE(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function xE(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function bE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&xE(e,r)),a}return n._value=t,n}function yE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&hE(e,r)),a}return n._value=t,n}function l2(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=un(e);return this.tween(a,(o.local?bE:yE)(o,t))}function wE(e,t){return function(){hu(this,e).delay=+t.apply(this,arguments)}}function vE(e,t){return t=+t,function(){hu(this,e).delay=t}}function i2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?wE:vE)(t,e)):bt(this.node(),t).delay}function CE(e,t){return function(){Rt(this,e).duration=+t.apply(this,arguments)}}function SE(e,t){return t=+t,function(){Rt(this,e).duration=t}}function s2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?CE:SE)(t,e)):bt(this.node(),t).duration}function LE(e,t){if(typeof t!="function")throw new Error;return function(){Rt(this,e).ease=t}}function u2(e){var t=this._id;return arguments.length?this.each(LE(t,e)):bt(this.node(),t).ease}function _E(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;Rt(this,e).ease=a}}function d2(e){if(typeof e!="function")throw new Error;return this.each(_E(this._id,e))}function c2(e){typeof e!="function"&&(e=$s(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new Zt(o,this._parents,this._name,this._id)}function f2(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],u=a[i],d=s.length,p=l[i]=new Array(d),c,f=0;f<d;++f)(c=s[f]||u[f])&&(p[f]=c);for(;i<o;++i)l[i]=t[i];return new Zt(l,this._parents,this._name,this._id)}function kE(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function IE(e,t,a){var o,n,r=kE(t)?hu:Rt;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function p2(e,t){var a=this._id;return arguments.length<2?bt(this.node(),a).on.on(e):this.each(IE(a,e,t))}function ME(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function m2(){return this.on("end.remove",ME(this._id))}function g2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Xr(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,u=r[l]=new Array(s),d,p,c=0;c<s;++c)(d=i[c])&&(p=e.call(d,d.__data__,c,i))&&("__data__"in d&&(p.__data__=d.__data__),u[c]=p,er(u[c],t,a,c,u,bt(d,a)));return new Zt(r,this._parents,t,a)}function h2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Qs(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],u=s.length,d,p=0;p<u;++p)if(d=s[p]){for(var c=e.call(d,d.__data__,p,s),f,g=bt(d,a),y=0,w=c.length;y<w;++y)(f=c[y])&&er(f,t,a,y,c,g);r.push(c),l.push(d)}return new Zt(r,l,t,a)}var EE=dn.prototype.constructor;function x2(){return new EE(this._groups,this._parents)}function NE(e,t){var a,o,n;return function(){var r=$n(this,e),l=(this.style.removeProperty(e),$n(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function b2(e){return function(){this.style.removeProperty(e)}}function TE(e,t,a){var o,n=a+"",r;return function(){var l=$n(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function AE(e,t,a){var o,n,r;return function(){var l=$n(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),$n(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function DE(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=Rt(this,e),u=s.on,d=s.value[r]==null?i||(i=b2(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(l,n=d),s.on=o}}function y2(e,t,a){var o=(e+="")=="transform"?hh:pf;return t==null?this.styleTween(e,NE(e,o)).on("end.style."+e,b2(e)):typeof t=="function"?this.styleTween(e,AE(e,o,wi(this,"style."+e,t))).each(DE(this._id,e)):this.styleTween(e,TE(e,o,t),a).on("end.style."+e,null)}function RE(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function zE(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&RE(e,l,a)),o}return r._value=t,r}function w2(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,zE(e,t,a??""))}function OE(e){return function(){this.textContent=e}}function PE(e){return function(){var t=e(this);this.textContent=t??""}}function v2(e){return this.tween("text",typeof e=="function"?PE(wi(this,"text",e)):OE(e==null?"":e+""))}function BE(e){return function(t){this.textContent=e.call(this,t)}}function HE(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&BE(n)),t}return o._value=e,o}function C2(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,HE(e))}function S2(){for(var e=this._name,t=this._id,a=mf(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)if(s=l[u]){var d=bt(s,t);er(s,e,a,u,l,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Zt(o,this._parents,e,a)}function L2(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var u=Rt(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),u.on=t}),n===0&&r()})}var UE=0;function Zt(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function _2(e){return dn().transition(e)}function mf(){return++UE}var fn=dn.prototype;Zt.prototype=_2.prototype={constructor:Zt,select:g2,selectAll:h2,selectChild:fn.selectChild,selectChildren:fn.selectChildren,filter:c2,merge:f2,selection:x2,transition:S2,call:fn.call,nodes:fn.nodes,node:fn.node,size:fn.size,empty:fn.empty,each:fn.each,on:p2,attr:r2,attrTween:l2,style:y2,styleTween:w2,text:v2,textTween:C2,remove:m2,tween:n2,delay:i2,duration:s2,ease:u2,easeVarying:d2,end:L2,[Symbol.iterator]:fn[Symbol.iterator]};function gf(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var FE={time:null,delay:0,duration:250,ease:gf};function qE(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function k2(e){var t,a;e instanceof Zt?(t=e._id,e=e._name):(t=mf(),(a=FE).time=mu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&er(s,e,t,u,l,a||qE(s,t));return new Zt(o,this._parents,e,t)}dn.prototype.interrupt=o2;dn.prototype.transition=k2;var xu=e=>()=>e;function yh(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function lo(e,t,a){this.k=e,this.x=t,this.y=a}lo.prototype={constructor:lo,scale:function(e){return e===1?this:new lo(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new lo(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Jr=new lo(1,0,0);bu.prototype=lo.prototype;function bu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Jr;return e.__zoom}function hf(e){e.stopImmediatePropagation()}function vi(e){e.preventDefault(),e.stopImmediatePropagation()}function VE(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function GE(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function I2(){return this.__zoom||Jr}function XE(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function YE(){return navigator.maxTouchPoints||"ontouchstart"in this}function jE(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function xf(){var e=VE,t=GE,a=jE,o=XE,n=YE,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=Kr,u=Gr("start","zoom","end"),d,p,c,f=500,g=150,y=0,w=10;function x(L){L.property("__zoom",I2).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",k).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",N).on("touchmove.zoom",U).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(L,M,E,I){var A=L.selection?L.selection():L;A.property("__zoom",I2),L!==A?C(L,M,E,I):A.interrupt().each(function(){S(this,arguments).event(I).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},x.scaleBy=function(L,M,E,I){x.scaleTo(L,function(){var A=this.__zoom.k,z=typeof M=="function"?M.apply(this,arguments):M;return A*z},E,I)},x.scaleTo=function(L,M,E,I){x.transform(L,function(){var A=t.apply(this,arguments),z=this.__zoom,V=E==null?b(A):typeof E=="function"?E.apply(this,arguments):E,D=z.invert(V),F=typeof M=="function"?M.apply(this,arguments):M;return a(m(h(z,F),V,D),A,l)},E,I)},x.translateBy=function(L,M,E,I){x.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),l)},null,I)},x.translateTo=function(L,M,E,I,A){x.transform(L,function(){var z=t.apply(this,arguments),V=this.__zoom,D=I==null?b(z):typeof I=="function"?I.apply(this,arguments):I;return a(Jr.translate(D[0],D[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof E=="function"?-E.apply(this,arguments):-E),z,l)},I,A)};function h(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new lo(M,L.x,L.y)}function m(L,M,E){var I=M[0]-E[0]*L.k,A=M[1]-E[1]*L.k;return I===L.x&&A===L.y?L:new lo(L.k,I,A)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function C(L,M,E,I){L.on("start.zoom",function(){S(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(I).end()}).tween("zoom",function(){var A=this,z=arguments,V=S(A,z).event(I),D=t.apply(A,z),F=E==null?b(D):typeof E=="function"?E.apply(A,z):E,j=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),W=A.__zoom,Z=typeof M=="function"?M.apply(A,z):M,ne=s(W.invert(F).concat(j/W.k),Z.invert(F).concat(j/Z.k));return function(ee){if(ee===1)ee=Z;else{var q=ne(ee),$=j/q[2];ee=new lo($,F[0]-q[0]*$,F[1]-q[1]*$)}V.zoom(null,ee)}})}function S(L,M,E){return!E&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=Ct(this.that).datum();u.call(L,this.that,new yh(L,{sourceEvent:this.sourceEvent,target:x,type:L,transform:this.that.__zoom,dispatch:u}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var E=S(this,M).event(L),I=this.__zoom,A=Math.max(r[0],Math.min(r[1],I.k*Math.pow(2,o.apply(this,arguments)))),z=Yt(L);if(E.wheel)(E.mouse[0][0]!==z[0]||E.mouse[0][1]!==z[1])&&(E.mouse[1]=I.invert(E.mouse[0]=z)),clearTimeout(E.wheel);else{if(I.k===A)return;E.mouse=[z,I.invert(z)],$r(this),E.start()}vi(L),E.wheel=setTimeout(V,g),E.zoom("mouse",a(m(h(I,A),E.mouse[0],E.mouse[1]),E.extent,l));function V(){E.wheel=null,E.end()}}function k(L,...M){if(c||!e.apply(this,arguments))return;var E=L.currentTarget,I=S(this,M,!0).event(L),A=Ct(L.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",j,!0),z=Yt(L,E),V=L.clientX,D=L.clientY;eu(L.view),hf(L),I.mouse=[z,this.__zoom.invert(z)],$r(this),I.start();function F(W){if(vi(W),!I.moved){var Z=W.clientX-V,ne=W.clientY-D;I.moved=Z*Z+ne*ne>y}I.event(W).zoom("mouse",a(m(I.that.__zoom,I.mouse[0]=Yt(W,E),I.mouse[1]),I.extent,l))}function j(W){A.on("mousemove.zoom mouseup.zoom",null),tu(W.view,I.moved),vi(W),I.event(W).end()}}function T(L,...M){if(e.apply(this,arguments)){var E=this.__zoom,I=Yt(L.changedTouches?L.changedTouches[0]:L,this),A=E.invert(I),z=E.k*(L.shiftKey?.5:2),V=a(m(h(E,z),I,A),t.apply(this,M),l);vi(L),i>0?Ct(this).transition().duration(i).call(C,V,I,L):Ct(this).call(x.transform,V,I,L)}}function N(L,...M){if(e.apply(this,arguments)){var E=L.touches,I=E.length,A=S(this,M,L.changedTouches.length===I).event(L),z,V,D,F;for(hf(L),V=0;V<I;++V)D=E[V],F=Yt(D,this),F=[F,this.__zoom.invert(F),D.identifier],A.touch0?!A.touch1&&A.touch0[2]!==F[2]&&(A.touch1=F,A.taps=0):(A.touch0=F,z=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),z&&(A.taps<2&&(p=F[0],d=setTimeout(function(){d=null},f)),$r(this),A.start())}}function U(L,...M){if(this.__zooming){var E=S(this,M).event(L),I=L.changedTouches,A=I.length,z,V,D,F;for(vi(L),z=0;z<A;++z)V=I[z],D=Yt(V,this),E.touch0&&E.touch0[2]===V.identifier?E.touch0[0]=D:E.touch1&&E.touch1[2]===V.identifier&&(E.touch1[0]=D);if(V=E.that.__zoom,E.touch1){var j=E.touch0[0],W=E.touch0[1],Z=E.touch1[0],ne=E.touch1[1],ee=(ee=Z[0]-j[0])*ee+(ee=Z[1]-j[1])*ee,q=(q=ne[0]-W[0])*q+(q=ne[1]-W[1])*q;V=h(V,Math.sqrt(ee/q)),D=[(j[0]+Z[0])/2,(j[1]+Z[1])/2],F=[(W[0]+ne[0])/2,(W[1]+ne[1])/2]}else if(E.touch0)D=E.touch0[0],F=E.touch0[1];else return;E.zoom("touch",a(m(V,D,F),E.extent,l))}}function H(L,...M){if(this.__zooming){var E=S(this,M).event(L),I=L.changedTouches,A=I.length,z,V;for(hf(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},f),z=0;z<A;++z)V=I[z],E.touch0&&E.touch0[2]===V.identifier?delete E.touch0:E.touch1&&E.touch1[2]===V.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(V=Yt(V,this),Math.hypot(p[0]-V[0],p[1]-V[1])<w)){var D=Ct(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return x.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:xu(+L),x):o},x.filter=function(L){return arguments.length?(e=typeof L=="function"?L:xu(!!L),x):e},x.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:xu(!!L),x):n},x.extent=function(L){return arguments.length?(t=typeof L=="function"?L:xu([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),x):t},x.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],x):[r[0],r[1]]},x.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],x):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},x.constrain=function(L){return arguments.length?(a=L,x):a},x.duration=function(L){return arguments.length?(i=+L,x):i},x.interpolate=function(L){return arguments.length?(s=L,x):s},x.on=function(){var L=u.on.apply(u,arguments);return L===u?x:L},x.clickDistance=function(L){return arguments.length?(y=(L=+L)*L,x):Math.sqrt(y)},x.tapDistance=function(L){return arguments.length?(w=+L,x):w},x}var La={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},_i=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Lh=["Enter"," ","Escape"],_h={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},nr;(function(e){e.Strict="strict",e.Loose="loose"})(nr||(nr={}));var io;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(io||(io={}));var pn;(function(e){e.Partial="partial",e.Full="full"})(pn||(pn={}));var kh={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},Mo;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Mo||(Mo={}));var Si;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Si||(Si={}));var ae;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ae||(ae={}));var M2={[ae.Left]:ae.Right,[ae.Right]:ae.Left,[ae.Top]:ae.Bottom,[ae.Bottom]:ae.Top};function Ih(e){return e===null?null:e?"valid":"invalid"}var Mh=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,F2=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Eh=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Nh=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var wu=(e,t=[0,0])=>{let{width:a,height:o}=ja(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Th=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):Eh(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,Sf(n,wf(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Lf(o):{x:0,y:0,width:0,height:0}},ki=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Sf(a,wf(n)),o=!0)}),o?Lf(a):{x:0,y:0,width:0,height:0}},vf=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,p=[];for(let c of e.values()){let{measured:f,selectable:g=!0,hidden:y=!1}=c;if(l&&!g||y)continue;let w=f.width??c.width??c.initialWidth??0,x=f.height??c.height??c.initialHeight??0,{x:h,y:m}=c.internals.positionAbsolute,b=Y2(i,s,u,d,h,m,w,x),C=w*x,S=r&&b>0;(!c.internals.handleBounds||S||b>=C||c.dragging)&&p.push(c)}return p},q2=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function ZE(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=ja(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function V2({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=ZE(e,l),s=ki(i),u=Cu(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(u,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function Ah({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:u}=i?i.internals.positionAbsolute:{x:0,y:0},d=l.origin??o,p=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",La.error005());else{let{width:f,height:g}=ja(i);f&&g&&(p=[[s,u],[s+f,u+g]])}else i&&al(l.extent)&&(p=[[l.extent[0][0]+s,l.extent[0][1]+u],[l.extent[1][0]+s,l.extent[1][1]+u]]);let c=al(p)?el(t,p,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",La.error015()),{position:{x:c.x-s+(l.measured.width??0)*d[0],y:c.y-u+(l.measured.height??0)*d[1]},positionAbsolute:c}}async function G2({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),l=[];for(let c of a){if(c.deletable===!1)continue;let f=r.has(c.id),g=!f&&c.parentId&&l.find(y=>y.id===c.parentId);(f||g)&&l.push(c)}let i=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=q2(l,s);for(let c of s)i.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:l};let p=await n({nodes:l,edges:d});return typeof p=="boolean"?p?{edges:d,nodes:l}:{edges:[],nodes:[]}:p}var Li=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),el=(e={x:0,y:0},t,a)=>({x:Li(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Li(e.y,t[0][1],t[1][1]-(a?.height??0))});function X2(e,t,a){let{width:o,height:n}=ja(a),{x:r,y:l}=a.internals.positionAbsolute;return el(e,[[r,l],[r+o,l+n]],t)}var E2=(e,t,a)=>e<t?Li(Math.abs(e-t),1,t)/t:e>a?-Li(Math.abs(e-a),1,t)/t:0,Cf=(e,t,a=15,o=40)=>{let n=E2(e.x,o,t.width-o)*a,r=E2(e.y,o,t.height-o)*a;return[n,r]},Sf=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Sh=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Lf=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Ii=(e,t=[0,0])=>{let{x:a,y:o}=Eh(e)?e.internals.positionAbsolute:wu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},wf=(e,t=[0,0])=>{let{x:a,y:o}=Eh(e)?e.internals.positionAbsolute:wu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Dh=(e,t)=>Lf(Sf(Sh(e),Sh(t))),Y2=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*u)},vu=(e,t)=>Y2(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Rh=e=>Xa(e.width)&&Xa(e.height)&&Xa(e.x)&&Xa(e.y),Xa=e=>!isNaN(e)&&isFinite(e),zh=(e,t)=>(a,o)=>{},Mi=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Ei=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?Mi(i,l):i},tl=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Ci(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function WE(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Ci(e,a),n=Ci(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Ci(e.top??e.y??0,a),n=Ci(e.bottom??e.y??0,a),r=Ci(e.left??e.x??0,t),l=Ci(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function KE(e,t,a,o,n,r){let{x:l,y:i}=tl(e,[t,a,o]),{x:s,y:u}=tl({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,p=r-u;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(d),bottom:Math.floor(p)}}var Cu=(e,t,a,o,n,r)=>{let l=WE(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,u=Math.min(i,s),d=Li(u,o,n),p=e.x+e.width/2,c=e.y+e.height/2,f=t/2-p*d,g=a/2-c*d,y=KE(e,f,g,d,t,a),w={left:Math.min(y.left-l.left,0),top:Math.min(y.top-l.top,0),right:Math.min(y.right-l.right,0),bottom:Math.min(y.bottom-l.bottom,0)};return{x:f-w.left+w.right,y:g-w.top+w.bottom,zoom:d}},Ni=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function al(e){return e!=null&&e!=="parent"}function ja(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Oh(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Ph(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function Bh(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function j2(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function Z2(e){return{..._h,...e||{}}}function yu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=Ya(e),i=Ei({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:u}=a?Mi(i,t):i;return{xSnapped:s,ySnapped:u,...i}}var _f=e=>({width:e.offsetWidth,height:e.offsetHeight}),Hh=e=>e?.getRootNode?.()||window?.document,QE=["INPUT","SELECT","TEXTAREA"];function Uh(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:QE.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Fh=e=>"clientX"in e,Ya=(e,t)=>{let a=Fh(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},N2=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,..._f(l)}})};function kf({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,u=t*.125+r*.375+i*.375+o*.125,d=Math.abs(s-e),p=Math.abs(u-t);return[s,u,d,p]}function bf(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function T2({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ae.Left:return[t-bf(t-o,r),a];case ae.Right:return[t+bf(o-t,r),a];case ae.Top:return[t,a-bf(a-n,r)];case ae.Bottom:return[t,a+bf(n-a,r)]}}function Ti({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,curvature:l=.25}){let[i,s]=T2({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[u,d]=T2({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[p,c,f,g]=kf({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${i},${s} ${u},${d} ${o},${n}`,p,c,f,g]}function qh({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function W2({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function K2({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Sf(wf(e),wf(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return vu(l,Lf(r))>0}var $E=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,JE=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),Q2=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",La.error006()),t;let o=a.getEdgeId||$E,n;return Mh(e)?n={...e}:n={...e,id:o(e)},JE(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function If({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=qh({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var A2={[ae.Left]:{x:-1,y:0},[ae.Right]:{x:1,y:0},[ae.Top]:{x:0,y:-1},[ae.Bottom]:{x:0,y:1}},eN=({source:e,sourcePosition:t=ae.Bottom,target:a})=>t===ae.Left||t===ae.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},D2=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function tN({source:e,sourcePosition:t=ae.Bottom,target:a,targetPosition:o=ae.Top,center:n,offset:r,stepPosition:l}){let i=A2[t],s=A2[o],u={x:e.x+i.x*r,y:e.y+i.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},p=eN({source:u,sourcePosition:t,target:d}),c=p.x!==0?"x":"y",f=p[c],g=[],y,w,x={x:0,y:0},h={x:0,y:0},[,,m,b]=qh({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[c]*s[c]===-1){c==="x"?(y=n.x??u.x+(d.x-u.x)*l,w=n.y??(u.y+d.y)/2):(y=n.x??(u.x+d.x)/2,w=n.y??u.y+(d.y-u.y)*l);let _=[{x:y,y:u.y},{x:y,y:d.y}],k=[{x:u.x,y:w},{x:d.x,y:w}];i[c]===f?g=c==="x"?_:k:g=c==="x"?k:_}else{let _=[{x:u.x,y:d.y}],k=[{x:d.x,y:u.y}];if(c==="x"?g=i.x===f?k:_:g=i.y===f?_:k,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let M=Math.min(r-1,r-L);i[c]===f?x[c]=(u[c]>e[c]?-1:1)*M:h[c]=(d[c]>a[c]?-1:1)*M}}if(t!==o){let L=c==="x"?"y":"x",M=i[c]===s[L],E=u[L]>d[L],I=u[L]<d[L];(i[c]===1&&(!M&&E||M&&I)||i[c]!==1&&(!M&&I||M&&E))&&(g=c==="x"?_:k)}let T={x:u.x+x.x,y:u.y+x.y},N={x:d.x+h.x,y:d.y+h.y},U=Math.max(Math.abs(T.x-g[0].x),Math.abs(N.x-g[0].x)),H=Math.max(Math.abs(T.y-g[0].y),Math.abs(N.y-g[0].y));U>=H?(y=(T.x+N.x)/2,w=g[0].y):(y=g[0].x,w=(T.y+N.y)/2)}let C={x:u.x+x.x,y:u.y+x.y},S={x:d.x+h.x,y:d.y+h.y};return[[e,...C.x!==g[0].x||C.y!==g[0].y?[C]:[],...g,...S.x!==g[g.length-1].x||S.y!==g[g.length-1].y?[S]:[],a],y,w,m,b]}function aN(e,t,a,o){let n=Math.min(D2(e,t)/2,D2(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${l}Q ${r},${l} ${r},${l+n*d}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function Su({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,borderRadius:l=5,centerX:i,centerY:s,offset:u=20,stepPosition:d=.5}){let[p,c,f,g,y]=tN({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:u,stepPosition:d}),w=`M${p[0].x} ${p[0].y}`;for(let x=1;x<p.length-1;x++)w+=aN(p[x-1],p[x],p[x+1],l);return w+=`L${p[p.length-1].x} ${p[p.length-1].y}`,[w,c,f,g,y]}function R2(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function $2(e){let{sourceNode:t,targetNode:a}=e;if(!R2(t)||!R2(a))return null;let o=t.internals.handleBounds||z2(t.handles),n=a.internals.handleBounds||z2(a.handles),r=O2(o?.source??[],e.sourceHandle),l=O2(e.connectionMode===nr.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",La.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||ae.Bottom,s=l?.position||ae.Top,u=rr(t,r,i),d=rr(a,l,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:i,targetPosition:s}}function z2(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function rr(e,t,a=ae.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??ja(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case ae.Top:return{x:n+l/2,y:r};case ae.Right:return{x:n+l,y:r+i/2};case ae.Bottom:return{x:n+l/2,y:r+i};case ae.Left:return{x:n,y:r+i/2}}}function O2(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Mf(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function J2(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Mf(s,t);r.has(u)||(l.push({id:u,color:s.color||a,...s}),r.add(u))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var eC=1e3,oN=10,Vh={nodeOrigin:[0,0],nodeExtent:_i,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},nN={...Vh,checkEquality:!0};function Gh(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function tC(e,t,a){let o=Gh(Vh,a);for(let n of e.values())if(n.parentId)Yh(n,e,t,o);else{let r=wu(n,o.nodeOrigin),l=al(n.extent)?n.extent:o.nodeExtent,i=el(r,l,ja(n));n.internals.positionAbsolute=i}}function rN(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function Xh(e){return e==="manual"}function Ef(e,t,a,o={}){let n=Gh(nN,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!Xh(n.zIndexMode)?eC:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let p=l.get(d.id);if(n.checkEquality&&d===p?.internals.userNode)t.set(d.id,p);else{let c=wu(d,n.nodeOrigin),f=al(d.extent)?d.extent:n.nodeExtent,g=el(c,f,ja(d));p={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:rN(d,p),z:aC(d,i,n.zIndexMode),userNode:d}},t.set(d.id,p)}(p.measured===void 0||p.measured.width===void 0||p.measured.height===void 0)&&!p.hidden&&(s=!1),d.parentId&&Yh(p,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function lN(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Yh(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=Gh(Vh,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}lN(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*oN),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let p=r&&!Xh(s)?eC:0,{x:c,y:f,z:g}=iN(e,d,l,i,p,s),{positionAbsolute:y}=e.internals,w=c!==y.x||f!==y.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:c,y:f}:y,z:g}})}function aC(e,t,a){let o=Xa(e.zIndex)?e.zIndex:0;return Xh(a)?o:o+(e.selected?t:0)}function iN(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=ja(e),u=wu(e,a),d=al(e.extent)?el(u,e.extent,s):u,p=el({x:l+d.x,y:i+d.y},o,s);e.extent==="parent"&&(p=X2(p,s,t));let c=aC(e,n,r),f=t.internals.z??0;return{x:p.x,y:p.y,z:f>=c?f+1:c}}function Nf(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??Ii(i),u=Dh(s,l.rect);r.set(l.parentId,{expandedRect:u,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let u=i.internals.positionAbsolute,d=ja(i),p=i.origin??o,c=l.x<u.x?Math.round(Math.abs(u.x-l.x)):0,f=l.y<u.y?Math.round(Math.abs(u.y-l.y)):0,g=Math.max(d.width,Math.round(l.width)),y=Math.max(d.height,Math.round(l.height)),w=(g-d.width)*p[0],x=(y-d.height)*p[1];(c>0||f>0||w||x)&&(n.push({id:s,type:"position",position:{x:i.position.x-c+w,y:i.position.y-f+x}}),a.get(s)?.forEach(h=>{e.some(m=>m.id===h.id)||n.push({id:h.id,type:"position",position:{x:h.position.x+c,y:h.position.y+f}})})),(d.width<l.width||d.height<l.height||c||f)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?p[0]*c-w:0),height:y+(f?p[1]*f-x:0)}})}),n}function oC(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(i),{m22:p}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let f of e.values()){let g=t.get(f.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let y=_f(f.nodeElement),w=g.measured.width!==y.width||g.measured.height!==y.height;if(!!(y.width&&y.height&&(w||!g.internals.handleBounds||f.force))){let h=f.nodeElement.getBoundingClientRect(),m=al(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let S=t.get(g.parentId);S&&(b=X2(b,y,S))}else m&&(b=el(b,m,y));let C={...g,measured:y,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:N2("source",f.nodeElement,h,p,g.id),target:N2("target",f.nodeElement,h,p,g.id)}}};t.set(g.id,C),g.parentId&&Yh(C,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(u.push({id:g.id,type:"dimensions",dimensions:y}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:Ii(C,n)}))}}if(c.length>0){let f=Nf(c,t,a,n);u.push(...f)}return{changes:u,updatedInternals:s}}async function nC({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function P2(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let u=o.get(l)||new Map;o.set(l,u.set(a,t))}}function jh(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},u=`${n}-${l}--${r}-${i}`,d=`${r}-${i}--${n}-${l}`;P2("source",s,d,e,n,l),P2("target",s,u,e,r,i),t.set(o.id,o)}}function rC(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:rC(a,t):!1}function B2(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function sN(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!rC(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function wh({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function uN({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=Mi(r,t);return{x:l.x-r.x,y:l.y-r.y}}function lC({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,u={x:0,y:0},d=null,p=!1,c=null,f=!1,g=!1,y=null;function w({noDragClassName:h,handleSelector:m,domNode:b,isSelectable:C,nodeId:S,nodeClickDistance:v=0}){c=Ct(b);function _({x:U,y:H}){let{nodeLookup:L,nodeExtent:M,snapGrid:E,snapToGrid:I,nodeOrigin:A,onNodeDrag:z,onSelectionDrag:V,onError:D,updateNodePositions:F}=t();r={x:U,y:H};let j=!1,W=i.size>1,Z=W&&M?Sh(ki(i)):null,ne=W&&I?uN({dragItems:i,snapGrid:E,x:U,y:H}):null;for(let[ee,q]of i){if(!L.has(ee))continue;let $={x:U-q.distance.x,y:H-q.distance.y};I&&($=ne?{x:Math.round($.x+ne.x),y:Math.round($.y+ne.y)}:Mi($,E));let ue=null;if(W&&M&&!q.extent&&Z){let{positionAbsolute:oe}=q.internals,ye=oe.x-Z.x+M[0][0],ve=oe.x+q.measured.width-Z.x2+M[1][0],Y=oe.y-Z.y+M[0][1],ce=oe.y+q.measured.height-Z.y2+M[1][1];ue=[[ye,Y],[ve,ce]]}let{position:ie,positionAbsolute:te}=Ah({nodeId:ee,nextPosition:$,nodeLookup:L,nodeExtent:ue||M,nodeOrigin:A,onError:D});j=j||q.position.x!==ie.x||q.position.y!==ie.y,q.position=ie,q.internals.positionAbsolute=te}if(g=g||j,!!j&&(F(i,!0),y&&(o||z||!S&&V))){let[ee,q]=wh({nodeId:S,dragItems:i,nodeLookup:L});o?.(y,i,ee,q),z?.(y,ee,q),S||V?.(y,q)}}async function k(){if(!d)return;let{transform:U,panBy:H,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[E,I]=Cf(u,d,L);(E!==0||I!==0)&&(r.x=(r.x??0)-E/U[2],r.y=(r.y??0)-I/U[2],await H({x:E,y:I})&&_(r)),l=requestAnimationFrame(k)}function T(U){let{nodeLookup:H,multiSelectionActive:L,nodesDraggable:M,transform:E,snapGrid:I,snapToGrid:A,selectNodesOnDrag:z,onNodeDragStart:V,onSelectionDragStart:D,unselectNodesAndEdges:F}=t();p=!0,(!z||!C)&&!L&&S&&(H.get(S)?.selected||F()),C&&z&&S&&e?.(S);let j=yu(U.sourceEvent,{transform:E,snapGrid:I,snapToGrid:A,containerBounds:d});if(r=j,i=sN(H,M,j,S),i.size>0&&(a||V||!S&&D)){let[W,Z]=wh({nodeId:S,dragItems:i,nodeLookup:H});a?.(U.sourceEvent,i,W,Z),V?.(U.sourceEvent,W,Z),S||D?.(U.sourceEvent,Z)}}let N=Wc().clickDistance(v).on("start",U=>{let{domNode:H,nodeDragThreshold:L,transform:M,snapGrid:E,snapToGrid:I}=t();d=H?.getBoundingClientRect()||null,f=!1,g=!1,y=U.sourceEvent,L===0&&T(U),r=yu(U.sourceEvent,{transform:M,snapGrid:E,snapToGrid:I,containerBounds:d}),u=Ya(U.sourceEvent,d)}).on("drag",U=>{let{autoPanOnNodeDrag:H,transform:L,snapGrid:M,snapToGrid:E,nodeDragThreshold:I,nodeLookup:A}=t(),z=yu(U.sourceEvent,{transform:L,snapGrid:M,snapToGrid:E,containerBounds:d});if(y=U.sourceEvent,(U.sourceEvent.type==="touchmove"&&U.sourceEvent.touches.length>1||S&&!A.has(S))&&(f=!0),!f){if(!s&&H&&p&&(s=!0,k()),!p){let V=Ya(U.sourceEvent,d),D=V.x-u.x,F=V.y-u.y;Math.sqrt(D*D+F*F)>I&&T(U)}(r.x!==z.xSnapped||r.y!==z.ySnapped)&&i&&p&&(u=Ya(U.sourceEvent,d),_(z))}}).on("end",U=>{if(!p||f){f&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,p=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:H,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:E}=t();if(g&&(L(i,!1),g=!1),n||M||!S&&E){let[I,A]=wh({nodeId:S,dragItems:i,nodeLookup:H,dragging:!1});n?.(U.sourceEvent,i,I,A),M?.(U.sourceEvent,I,A),S||E?.(U.sourceEvent,A)}}}).filter(U=>{let H=U.target;return!U.button&&(!h||!B2(H,`.${h}`,b))&&(!m||B2(H,m,b))});c.call(N)}function x(){c?.on(".drag",null)}return{update:w,destroy:x}}function dN(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())vu(n,Ii(r))>0&&o.push(r);return o}var cN=250;function fN(e,t,a,o){let n=[],r=1/0,l=dN(e,a,t+cN);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:p}=rr(i,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(p-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:p}],r=c):c===r&&n.push({...u,x:d,y:p}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function iC(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(u=>u.id===a):i?.[0])??null;return s&&r?{...s,...rr(l,s,s.position,!0)}:s}function sC(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function pN(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var uC=()=>!0;function mN(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:p,panBy:c,cancelConnection:f,onConnectStart:g,onConnect:y,onConnectEnd:w,isValidConnection:x=uC,onReconnectEnd:h,updateConnection:m,getTransform:b,getFromHandle:C,autoPanSpeed:S,dragThreshold:v=1,handleDomNode:_}){let k=Hh(e.target),T=0,N,{x:U,y:H}=Ya(e),L=sC(r,_),M=i?.getBoundingClientRect(),E=!1;if(!M||!L)return;let I=iC(n,L,o,s,t);if(!I)return;let A=Ya(e,M),z=!1,V=null,D=!1,F=null;function j(){if(!d||!M)return;let[ie,te]=Cf(A,M,S);c({x:ie,y:te}),T=requestAnimationFrame(j)}let W={...I,nodeId:n,type:L,position:I.position},Z=s.get(n),ee={inProgress:!0,isValid:null,from:rr(Z,W,ae.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:Z,to:A,toHandle:null,toPosition:M2[W.position],toNode:null,pointer:A};function q(){E=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&q();function $(ie){if(!E){let{x:ce,y:ke}=Ya(ie),it=ce-U,qt=ke-H;if(!(it*it+qt*qt>v*v))return;q()}if(!C()||!W){ue(ie);return}let te=b();A=Ya(ie,M),N=fN(Ei(A,te,!1,[1,1]),a,s,W),z||(j(),z=!0);let oe=dC(ie,{handle:N,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:x,doc:k,lib:u,flowId:p,nodeLookup:s});F=oe.handleDomNode,V=oe.connection,D=pN(!!N,oe.isValid);let ye=s.get(n),ve=ye?rr(ye,W,ae.Left,!0):ee.from,Y={...ee,from:ve,isValid:D,to:oe.toHandle&&D?tl({x:oe.toHandle.x,y:oe.toHandle.y},te):A,toHandle:oe.toHandle,toPosition:D&&oe.toHandle?oe.toHandle.position:M2[W.position],toNode:oe.toHandle?s.get(oe.toHandle.nodeId):null,pointer:A};m(Y),ee=Y}function ue(ie){if(!("touches"in ie&&ie.touches.length>0)){if(E){(N||F)&&V&&D&&y?.(V);let{inProgress:te,...oe}=ee,ye={...oe,toPosition:ee.toHandle?ee.toPosition:null};w?.(ie,ye),r&&h?.(ie,ye)}f(),cancelAnimationFrame(T),z=!1,D=!1,V=null,F=null,k.removeEventListener("mousemove",$),k.removeEventListener("mouseup",ue),k.removeEventListener("touchmove",$),k.removeEventListener("touchend",ue)}}k.addEventListener("mousemove",$),k.addEventListener("mouseup",ue),k.addEventListener("touchmove",$),k.addEventListener("touchend",ue)}function dC(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:u=uC,nodeLookup:d}){let p=r==="target",c=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:f,y:g}=Ya(e),y=l.elementFromPoint(f,g),w=y?.classList.contains(`${i}-flow__handle`)?y:c,x={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let h=sC(void 0,w),m=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),C=w.classList.contains("connectable"),S=w.classList.contains("connectableend");if(!m||!h)return x;let v={source:p?m:o,sourceHandle:p?b:n,target:p?o:m,targetHandle:p?n:b};x.connection=v;let k=C&&S&&(a===nr.Strict?p&&h==="source"||!p&&h==="target":m!==o||b!==n);x.isValid=k&&u(v),x.toHandle=iC(m,h,b,d,a,!0)}return x}var Tf={onPointerDown:mN,isValid:dC};function cC({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=Ct(e);function r({translateExtent:i,width:s,height:u,zoomStep:d=1,pannable:p=!0,zoomable:c=!0,inversePan:f=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),C=m.sourceEvent.ctrlKey&&Ni()?10:1,S=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,v=b[2]*Math.pow(2,S*C);t.scaleTo(v)},y=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(y=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},x=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let C=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],S=[C[0]-y[0],C[1]-y[1]];y=C;let v=o()*Math.max(b[2],Math.log(b[2]))*(f?-1:1),_={x:b[0]-S[0]*v,y:b[1]-S[1]*v},k=[[0,0],[s,u]];t.setViewportConstrained({x:_.x,y:_.y,zoom:b[2]},k,i)},h=xf().on("start",w).on("zoom",p?x:null).on("zoom.wheel",c?g:null);n.call(h,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:Yt}}var Af=e=>({x:e.x,y:e.y,zoom:e.k}),vh=({x:e,y:t,zoom:a})=>Jr.translate(e,t).scale(a),or=(e,t)=>e.target.closest(`.${t}`),fC=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),gN=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ch=(e,t=0,a=gN,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},pC=e=>{let t=e.ctrlKey&&Ni()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function hN({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(or(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let p=a.property("__zoom").k||1;if(d.ctrlKey&&l){let w=Yt(d),x=pC(d),h=p*Math.pow(2,x);o.scaleTo(a,h,w,d);return}let c=d.deltaMode===1?20:1,f=n===io.Vertical?0:d.deltaX*c,g=n===io.Horizontal?0:d.deltaY*c;!Ni()&&d.shiftKey&&n!==io.Vertical&&(f=d.deltaY*c,g=0),o.translateBy(a,-(f/p)*r,-(g/p)*r,{internal:!0});let y=Af(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,y):(e.isPanScrolling=!0,i?.(d,y)),e.panScrollTimeout=setTimeout(()=>{u?.(d,y),e.isPanScrolling=!1},150)}}function xN({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=or(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function bN({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Af(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function yN({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&fC(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Af(r.transform))}}function wN({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&fC(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=Af(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function vN({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:p}){return c=>{let f=t||a,g=o&&c.ctrlKey,y=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(or(c,`${d}-flow__node`)||or(c,`${d}-flow__edge`)||or(c,`${d}-flow__selection`)||or(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!f&&!r&&!l&&!o||i||p&&!y||or(c,s)&&y||or(c,u)&&(!y||r&&y&&!t)||!o&&c.ctrlKey&&y)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!f&&!r&&!g&&y||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||y||e)&&w}}function mC({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),p=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(H=>{let L=H[0];L&&(p=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let f=xf().extent(()=>p).scaleExtent([t,a]).translateExtent(o),g=Ct(e).call(f);b({x:n.x,y:n.y,zoom:Li(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let y=g.on("wheel.zoom"),w=g.on("dblclick.zoom");f.wheelDelta(pC);async function x(H,L){return g?new Promise(M=>{f?.interpolate(L?.interpolate==="linear"?cn:Kr).transform(Ch(g,L?.duration,L?.ease,()=>M(!0)),H)}):!1}function h({noWheelClassName:H,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:E,panOnScroll:I,panOnDrag:A,panOnScrollMode:z,panOnScrollSpeed:V,preventScrolling:D,zoomOnPinch:F,zoomOnScroll:j,zoomOnDoubleClick:W,panActivationKeyPressed:Z=!1,zoomActivationKeyPressed:ne,lib:ee,onTransformChange:q,connectionInProgress:$,paneClickDistance:ue,selectionOnDrag:ie}){E&&!u.isZoomingOrPanning&&m();let te=I&&!ne&&!E;f.clickDistance(ie?1/0:!Xa(ue)||ue<0?0:ue);let oe=te?hN({zoomPanValues:u,noWheelClassName:H,d3Selection:g,d3Zoom:f,panOnScrollMode:z,panOnScrollSpeed:V,zoomOnPinch:F,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):xN({noWheelClassName:H,preventScrolling:D,d3ZoomHandler:y});g.on("wheel.zoom",oe,{passive:!1});let ye=bN({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:l});f.on("start",ye);let ve=yN({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:q});f.on("zoom",ve);let Y=wN({zoomPanValues:u,panOnDrag:A,panOnScroll:I,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});f.on("end",Y);let ce=vN({panActivationKeyPressed:Z,zoomActivationKeyPressed:ne,panOnDrag:A,zoomOnScroll:j,panOnScroll:I,zoomOnDoubleClick:W,zoomOnPinch:F,userSelectionActive:E,noPanClassName:L,noWheelClassName:H,lib:ee,connectionInProgress:$});f.filter(ce),W?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){f.on("zoom",null)}async function b(H,L,M){let E=vh(H),I=f?.constrain()(E,L,M);return I&&await x(I),I}async function C(H,L){let M=vh(H);return await x(M,L),M}function S(H){if(g){let L=vh(H),M=g.property("__zoom");(M.k!==H.zoom||M.x!==H.x||M.y!==H.y)&&f?.transform(g,L,null,{sync:!0})}}function v(){let H=g?bu(g.node()):{x:0,y:0,k:1};return{x:H.x,y:H.y,zoom:H.k}}async function _(H,L){return g?new Promise(M=>{f?.interpolate(L?.interpolate==="linear"?cn:Kr).scaleTo(Ch(g,L?.duration,L?.ease,()=>M(!0)),H)}):!1}async function k(H,L){return g?new Promise(M=>{f?.interpolate(L?.interpolate==="linear"?cn:Kr).scaleBy(Ch(g,L?.duration,L?.ease,()=>M(!0)),H)}):!1}function T(H){f?.scaleExtent(H)}function N(H){f?.translateExtent(H)}function U(H){let L=!Xa(H)||H<0?0:H;f?.clickDistance(L)}return{update:h,destroy:m,setViewport:C,setViewportConstrained:b,getViewport:v,scaleTo:_,scaleBy:k,setScaleExtent:T,setTranslateExtent:N,syncViewport:S,setClickDistance:U}}var lr;(function(e){e.Line="line",e.Handle="handle"})(lr||(lr={}));function CN({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function H2(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function tr(e,t){return Math.max(0,t-e)}function ar(e,t){return Math.max(0,e-t)}function yf(e,t,a){return Math.max(0,t-e,e-a)}function U2(e,t){return e?!t:t}function SN(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:p}=t,c=d&&p,{xSnapped:f,ySnapped:g}=a,{minWidth:y,maxWidth:w,minHeight:x,maxHeight:h}=o,{x:m,y:b,width:C,height:S,aspectRatio:v}=e,_=Math.floor(d?f-e.pointerX:0),k=Math.floor(p?g-e.pointerY:0),T=C+(s?-_:_),N=S+(u?-k:k),U=-r[0]*C,H=-r[1]*S,L=yf(T,y,w),M=yf(N,x,h);if(l){let A=0,z=0;s&&_<0?A=tr(m+_+U,l[0][0]):!s&&_>0&&(A=ar(m+T+U,l[1][0])),u&&k<0?z=tr(b+k+H,l[0][1]):!u&&k>0&&(z=ar(b+N+H,l[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(i){let A=0,z=0;s&&_>0?A=ar(m+_,i[0][0]):!s&&_<0&&(A=tr(m+T,i[1][0])),u&&k>0?z=ar(b+k,i[0][1]):!u&&k<0&&(z=tr(b+N,i[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(n){if(d){let A=yf(T/v,x,h)*v;if(L=Math.max(L,A),l){let z=0;!s&&!u||s&&!u&&c?z=ar(b+H+T/v,l[1][1])*v:z=tr(b+H+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,z)}if(i){let z=0;!s&&!u||s&&!u&&c?z=tr(b+T/v,i[1][1])*v:z=ar(b+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,z)}}if(p){let A=yf(N*v,y,w)/v;if(M=Math.max(M,A),l){let z=0;!s&&!u||u&&!s&&c?z=ar(m+N*v+U,l[1][0])/v:z=tr(m+(u?k:-k)*v+U,l[0][0])/v,M=Math.max(M,z)}if(i){let z=0;!s&&!u||u&&!s&&c?z=tr(m+N*v,i[1][0])/v:z=ar(m+(u?k:-k)*v,i[0][0])/v,M=Math.max(M,z)}}}k=k+(k<0?M:-M),_=_+(_<0?L:-L),n&&(c?T>N*v?k=(U2(s,u)?-_:_)/v:_=(U2(s,u)?-k:k)*v:d?(k=_/v,u=s):(_=k*v,s=u));let E=s?m+_:m,I=u?b+k:b;return{width:C+(s?-_:_),height:S+(u?-k:k),x:r[0]*_*(s?-1:1)+E,y:r[1]*k*(u?-1:1)+I}}var gC={width:0,height:0,x:0,y:0},LN={...gC,pointerX:0,pointerY:0,aspectRatio:1};function _N(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function hC({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=Ct(e),l={controlDirection:H2("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:u,boundaries:d,keepAspectRatio:p,resizeDirection:c,onResizeStart:f,onResize:g,onResizeEnd:y,shouldResize:w}){let x={...gC},h={...LN};l={boundaries:d,resizeDirection:c,keepAspectRatio:p,controlDirection:H2(u)};let m,b=null,C=[],S,v,_,k=!1,T=Wc().on("start",N=>{let{nodeLookup:U,transform:H,snapGrid:L,snapToGrid:M,nodeOrigin:E,paneDomNode:I}=a();if(m=U.get(t),!m)return;b=I?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:z}=yu(N.sourceEvent,{transform:H,snapGrid:L,snapToGrid:M,containerBounds:b});x={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},h={...x,pointerX:A,pointerY:z,aspectRatio:x.width/x.height},S=void 0,v=al(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(S=U.get(m.parentId)),S&&m.extent==="parent"&&(v=[[0,0],[S.measured.width,S.measured.height]]),C=[],_=void 0;for(let[V,D]of U)if(D.parentId===t&&(C.push({id:V,position:{...D.position},extent:D.extent}),D.extent==="parent"||D.expandParent)){let F=_N(D,m,D.origin??E);_?_=[[Math.min(F[0][0],_[0][0]),Math.min(F[0][1],_[0][1])],[Math.max(F[1][0],_[1][0]),Math.max(F[1][1],_[1][1])]]:_=F}f?.(N,{...x})}).on("drag",N=>{let{transform:U,snapGrid:H,snapToGrid:L,nodeOrigin:M}=a(),E=yu(N.sourceEvent,{transform:U,snapGrid:H,snapToGrid:L,containerBounds:b}),I=[];if(!m)return;let{x:A,y:z,width:V,height:D}=x,F={},j=m.origin??M,{width:W,height:Z,x:ne,y:ee}=SN(h,l.controlDirection,E,l.boundaries,l.keepAspectRatio,j,v,_),q=W!==V,$=Z!==D,ue=ne!==A&&q,ie=ee!==z&&$;if(!ue&&!ie&&!q&&!$)return;if((ue||ie||j[0]===1||j[1]===1)&&(F.x=ue?ne:x.x,F.y=ie?ee:x.y,x.x=F.x,x.y=F.y,C.length>0)){let ve=ne-A,Y=ee-z;for(let ce of C)ce.position={x:ce.position.x-ve+j[0]*(W-V),y:ce.position.y-Y+j[1]*(Z-D)},I.push(ce)}if((q||$)&&(F.width=q&&(!l.resizeDirection||l.resizeDirection==="horizontal")?W:x.width,F.height=$&&(!l.resizeDirection||l.resizeDirection==="vertical")?Z:x.height,x.width=F.width,x.height=F.height),S&&m.expandParent){let ve=j[0]*(F.width??0);F.x&&F.x<ve&&(x.x=ve,h.x=h.x-(F.x-ve));let Y=j[1]*(F.height??0);F.y&&F.y<Y&&(x.y=Y,h.y=h.y-(F.y-Y))}let te=CN({width:x.width,prevWidth:V,height:x.height,prevHeight:D,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),oe={...x,direction:te};w?.(N,oe)!==!1&&(k=!0,g?.(N,oe),o(F,I))}).on("end",N=>{k&&(y?.(N,{...x}),n?.({...x}),k=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var EC=R(J(),1),NC=R(LC(),1);var kC={},_C=e=>{let t,a=new Set,o=(d,p)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let f=t;t=p??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,f))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(kC.env?kC.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},IC=e=>e?_C(e):_C;var{useDebugValue:VN}=EC.default,{useSyncExternalStoreWithSelector:GN}=NC.default,XN=e=>e;function Wh(e,t=XN,a){let o=GN(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return VN(o),o}var MC=(e,t)=>{let a=IC(e),o=(n,r=t)=>Wh(a,n,r);return Object.assign(o,a),o},TC=(e,t)=>e?MC(e,t):MC;function Ue(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var YN=R(wo()),Pf=(0,P.createContext)(null),jN=Pf.Provider,nS=La.error001("react");function we(e,t){let a=(0,P.useContext)(Pf);if(a===null)throw new Error(nS);return Wh(a,e,t)}function We(){let e=(0,P.useContext)(Pf);if(e===null)throw new Error(nS);return(0,P.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var AC={display:"none"},ZN={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},rS="react-flow__node-desc",lS="react-flow__edge-desc",WN="react-flow__aria-live",KN=e=>e.ariaLiveMessage,QN=e=>e.ariaLabelConfig;function $N({rfId:e}){let t=we(KN);return(0,O.jsx)("div",{id:`${WN}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:ZN,children:t})}function JN({rfId:e,disableKeyboardA11y:t}){let a=we(QN);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{id:`${rS}-${e}`,style:AC,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,O.jsx)("div",{id:`${lS}-${e}`,style:AC,children:a["edge.a11yDescription.default"]}),!t&&(0,O.jsx)($N,{rfId:e})]})}var Bf=(0,P.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,O.jsx)("div",{className:rt(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});Bf.displayName="Panel";var DC="https://reactflow.dev?utm_source=attribution";function eT({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,O.jsx)(Bf,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${DC}`,children:(0,O.jsx)("a",{href:DC,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var tT=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Rf=e=>e.id;function aT(e,t){return Ue(e.selectedNodes.map(Rf),t.selectedNodes.map(Rf))&&Ue(e.selectedEdges.map(Rf),t.selectedEdges.map(Rf))}function oT({onSelectionChange:e}){let t=We(),{selectedNodes:a,selectedEdges:o}=we(tT,aT);return(0,P.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var nT=e=>!!e.onSelectionChangeHandlers;function rT({onSelectionChange:e}){let t=we(nT);return e||t?(0,O.jsx)(oT,{onSelectionChange:e}):null}var iS=[0,0],lT={x:0,y:0,zoom:1},iT=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],RC=[...iT,"rfId"],sT=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),zC={translateExtent:_i,nodeOrigin:iS,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function uT(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=we(sT,Ue),u=We();(0,P.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=zC,i()}),[]);let d=(0,P.useRef)(zC);return(0,P.useEffect)(()=>{for(let p of RC){let c=e[p],f=d.current[p];c!==f&&(typeof e[p]>"u"||(p==="nodes"?t(c):p==="edges"?a(c):p==="minZoom"?o(c):p==="maxZoom"?n(c):p==="translateExtent"?r(c):p==="nodeExtent"?l(c):p==="ariaLabelConfig"?u.setState({ariaLabelConfig:Z2(c)}):p==="fitView"?u.setState({fitViewQueued:c}):p==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[p]:c})))}d.current=e},RC.map(p=>e[p])),null}function OC(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function dT(e){let[t,a]=(0,P.useState)(e==="system"?null:e);return(0,P.useEffect)(()=>{if(e!=="system"){a(e);return}let o=OC(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:OC()?.matches?"dark":"light"}var PC=typeof document<"u"?document:null;function Lu(e=null,t={target:PC,actInsideInputWithModifier:!0}){let[a,o]=(0,P.useState)(!1),n=(0,P.useRef)(!1),r=(0,P.useRef)(new Set([])),[l,i]=(0,P.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(p=>typeof p=="string").map(p=>p.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((p,c)=>p.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,P.useEffect)(()=>{let s=t?.target??PC,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=f=>{if(n.current=f.ctrlKey||f.metaKey||f.shiftKey||f.altKey,(!n.current||n.current&&!u)&&Uh(f))return!1;let y=HC(f.code,i);if(r.current.add(f[y]),BC(l,r.current,!1)){let w=f.composedPath?.()?.[0]||f.target,x=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!x)&&f.preventDefault(),o(!0)}},p=f=>{let g=HC(f.code,i);BC(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(f[g]),f.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",p),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",p),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function BC(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function HC(e,t){return t.includes(e)?"code":"key"}var cT=()=>{let e=We();return(0,P.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Cu(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),u={x:t.x-i,y:t.y-s},d=a.snapGrid??n,p=a.snapToGrid??r;return Ei(u,o,p,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=tl(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function sS(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)fT(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function fT(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Jh(e,t){return sS(e,t)}function ex(e,t){return sS(e,t)}function ol(e,t){return{id:e,type:"select",selected:t}}function Di(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(ol(r.id,l)))}return o}function UC({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function FC(e){return{id:e.id,type:"remove"}}var pT=zh("React Flow","https://reactflow.dev/");function mT(e,t,a={}){return Q2(e,t,{...a,onError:a.onError??pT})}var qC=e=>F2(e),gT=e=>Mh(e);function uS(e){return(0,P.forwardRef)(e)}var dS=typeof window<"u"?P.useLayoutEffect:P.useEffect;function VC(e){let[t,a]=(0,P.useState)(BigInt(0)),[o]=(0,P.useState)(()=>hT(()=>a(n=>n+BigInt(1))));return dS(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function hT(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var cS=(0,P.createContext)(null);function xT({children:e}){let t=We(),a=(0,P.useCallback)(i=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:p,nodeLookup:c,fitViewQueued:f,onNodesChangeMiddlewareMap:g}=t.getState(),y=s;for(let x of i)y=typeof x=="function"?x(y):x;let w=UC({items:y,lookup:c});for(let x of g.values())w=x(w);d&&u(y),w.length>0?p?.(w):f&&window.requestAnimationFrame(()=>{let{fitViewQueued:x,nodes:h,setNodes:m}=t.getState();x&&m(h)})},[]),o=VC(a),n=(0,P.useCallback)(i=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:p,edgeLookup:c}=t.getState(),f=s;for(let g of i)f=typeof g=="function"?g(f):g;d?u(f):p&&p(UC({items:f,lookup:c}))},[]),r=VC(n),l=(0,P.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,O.jsx)(cS.Provider,{value:l,children:e})}function bT(){let e=(0,P.useContext)(cS);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var yT=e=>!!e.panZoom;function _a(){let e=cT(),t=We(),a=bT(),o=we(yT),n=(0,P.useMemo)(()=>{let r=p=>t.getState().nodeLookup.get(p),l=p=>{a.nodeQueue.push(p)},i=p=>{a.edgeQueue.push(p)},s=p=>{let{nodeLookup:c,nodeOrigin:f}=t.getState(),g=qC(p)?p:c.get(p.id),y=g.parentId?Ph(g.position,g.measured,g.parentId,c,f):g.position,w={...g,position:y,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Ii(w)},u=(p,c,f={replace:!1})=>{l(g=>g.map(y=>{if(y.id===p){let w=typeof c=="function"?c(y):c;return f.replace&&qC(w)?w:{...y,...w}}return y}))},d=(p,c,f={replace:!1})=>{i(g=>g.map(y=>{if(y.id===p){let w=typeof c=="function"?c(y):c;return f.replace&&gT(w)?w:{...y,...w}}return y}))};return{getNodes:()=>t.getState().nodes.map(p=>({...p})),getNode:p=>r(p)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:p=[]}=t.getState();return p.map(c=>({...c}))},getEdge:p=>t.getState().edgeLookup.get(p),setNodes:l,setEdges:i,addNodes:p=>{let c=Array.isArray(p)?p:[p];a.nodeQueue.push(f=>[...f,...c])},addEdges:p=>{let c=Array.isArray(p)?p:[p];a.edgeQueue.push(f=>[...f,...c])},toObject:()=>{let{nodes:p=[],edges:c=[],transform:f}=t.getState(),[g,y,w]=f;return{nodes:p.map(x=>({...x})),edges:c.map(x=>({...x})),viewport:{x:g,y,zoom:w}}},deleteElements:async({nodes:p=[],edges:c=[]})=>{let{nodes:f,edges:g,onNodesDelete:y,onEdgesDelete:w,triggerNodeChanges:x,triggerEdgeChanges:h,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:C,edges:S}=await G2({nodesToRemove:p,edgesToRemove:c,nodes:f,edges:g,onBeforeDelete:b}),v=S.length>0,_=C.length>0;if(v){let k=S.map(FC);w?.(S),h(k)}if(_){let k=C.map(FC);y?.(C),x(k)}return(_||v)&&m?.({nodes:C,edges:S}),{deletedNodes:C,deletedEdges:S}},getIntersectingNodes:(p,c=!0,f)=>{let g=Rh(p),y=g?p:s(p),w=f!==void 0;return y?(f||t.getState().nodes).filter(x=>{let h=t.getState().nodeLookup.get(x.id);if(h&&!g&&(x.id===p.id||!h.internals.positionAbsolute))return!1;let m=Ii(w?x:h),b=vu(m,y);return c&&b>0||b>=m.width*m.height||b>=y.width*y.height}):[]},isNodeIntersecting:(p,c,f=!0)=>{let y=Rh(p)?p:s(p);if(!y)return!1;let w=vu(y,c);return f&&w>0||w>=c.width*c.height||w>=y.width*y.height},updateNode:u,updateNodeData:(p,c,f={replace:!1})=>{u(p,g=>{let y=typeof c=="function"?c(g):c;return f.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},f)},updateEdge:d,updateEdgeData:(p,c,f={replace:!1})=>{d(p,g=>{let y=typeof c=="function"?c(g):c;return f.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},f)},getNodesBounds:p=>{let{nodeLookup:c,nodeOrigin:f}=t.getState();return Th(p,{nodeLookup:c,nodeOrigin:f})},getHandleConnections:({type:p,id:c,nodeId:f})=>Array.from(t.getState().connectionLookup.get(`${f}-${p}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:p,handleId:c,nodeId:f})=>Array.from(t.getState().connectionLookup.get(`${f}${p?c?`-${p}-${c}`:`-${p}`:""}`)?.values()??[]),fitView:async p=>{let c=t.getState().fitViewResolver??j2();return t.setState({fitViewQueued:!0,fitViewOptions:p,fitViewResolver:c}),a.nodeQueue.push(f=>[...f]),c.promise}}},[]);return(0,P.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var GC=e=>e.selected,wT=typeof window<"u"?window:void 0;function vT({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=We(),{deleteElements:o}=_a(),n=Lu(e,{actInsideInputWithModifier:!1}),r=Lu(t,{target:wT});(0,P.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter(GC),edges:l.filter(GC)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,P.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function CT(e){let t=We();(0,P.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=_f(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",La.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Hf={position:"absolute",width:"100%",height:"100%",top:0,left:0},ST=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function LT({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=io.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:p,maxZoom:c,zoomActivationKeyCode:f,preventScrolling:g=!0,children:y,noWheelClassName:w,noPanClassName:x,onViewportChange:h,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:C}){let S=We(),v=(0,P.useRef)(null),{userSelectionActive:_,lib:k,connectionInProgress:T}=we(ST,Ue),N=Lu(f),U=(0,P.useRef)();CT(v);let H=(0,P.useCallback)(L=>{h?.({x:L[0],y:L[1],zoom:L[2]}),m||S.setState({transform:L})},[h,m]);return(0,P.useEffect)(()=>{if(v.current){U.current=mC({domNode:v.current,minZoom:p,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:I=>S.setState(A=>A.paneDragging===I?A:{paneDragging:I}),onPanZoomStart:(I,A)=>{let{onViewportChangeStart:z,onMoveStart:V}=S.getState();V?.(I,A),z?.(A)},onPanZoom:(I,A)=>{let{onViewportChange:z,onMove:V}=S.getState();V?.(I,A),z?.(A)},onPanZoomEnd:(I,A)=>{let{onViewportChangeEnd:z,onMoveEnd:V}=S.getState();V?.(I,A),z?.(A)}});let{x:L,y:M,zoom:E}=U.current.getViewport();return S.setState({panZoom:U.current,transform:[L,M,E],domNode:v.current.closest(".react-flow")}),()=>{U.current?.destroy()}}},[]),(0,P.useEffect)(()=>{U.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:N,preventScrolling:g,noPanClassName:x,userSelectionActive:_,noWheelClassName:w,lib:k,onTransformChange:H,connectionInProgress:T,selectionOnDrag:C,paneClickDistance:b})},[e,t,a,o,n,r,l,i,s,N,g,x,_,w,k,H,T,C,b]),(0,O.jsx)("div",{className:"react-flow__renderer",ref:v,style:Hf,children:y})}var _T=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function kT(){let{userSelectionActive:e,userSelectionRect:t}=we(_T,Ue);return e&&t?(0,O.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Kh=(e,t)=>a=>{a.target===t.current&&e?.(a)},IT=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function MT({isSelecting:e,selectionKeyPressed:t,selectionMode:a=pn.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:p,onPaneMouseEnter:c,onPaneMouseMove:f,onPaneMouseLeave:g,children:y}){let w=(0,P.useRef)(0),x=We(),{userSelectionActive:h,elementsSelectable:m,dragging:b,panBy:C,autoPanSpeed:S}=we(IT,Ue),v=m&&(e||h),_=(0,P.useRef)(null),k=(0,P.useRef)(),T=(0,P.useRef)(new Set),N=(0,P.useRef)(new Set),U=(0,P.useRef)(!1),H=(0,P.useRef)(!1),L=(0,P.useRef)({x:0,y:0}),M=(0,P.useRef)(!1),E=q=>{if(H.current||U.current||x.getState().connection.inProgress){H.current=!1,U.current=!1;return}u?.(q),x.getState().resetSelectedElements(),x.setState({nodesSelectionActive:!1})},I=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}d?.(q)},A=p?q=>p(q):void 0,z=q=>{H.current&&(q.stopPropagation(),H.current=!1)},V=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:$,transform:ue}=x.getState();if(k.current=$?.getBoundingClientRect(),!k.current)return;let ie=q.target===_.current;if(!ie&&!!q.target.closest(".nokey")||!e||!(l&&ie||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),H.current=!1;let{x:ye,y:ve}=Ya(q.nativeEvent,k.current),Y=Ei({x:ye,y:ve},ue);x.setState({userSelectionRect:{width:0,height:0,startX:Y.x,startY:Y.y,x:ye,y:ve}}),ie||(q.stopPropagation(),q.preventDefault())};function D(q,$){let{userSelectionRect:ue}=x.getState();if(!ue)return;let{transform:ie,nodeLookup:te,edgeLookup:oe,connectionLookup:ye,triggerNodeChanges:ve,triggerEdgeChanges:Y,defaultEdgeOptions:ce}=x.getState(),ke={x:ue.startX,y:ue.startY},{x:it,y:qt}=tl(ke,ie),$t={startX:ke.x,startY:ke.y,x:q<it?q:it,y:$<qt?$:qt,width:Math.abs(q-it),height:Math.abs($-qt)},Cr=T.current,Uo=N.current;T.current=new Set(vf(te,$t,ie,a===pn.Partial,!0).map(pa=>pa.id)),N.current=new Set;let Fo=ce?.selectable??!0;for(let pa of T.current){let K=ye.get(pa);if(K)for(let{edgeId:Fe}of K.values()){let at=oe.get(Fe);at&&(at.selectable??Fo)&&N.current.add(Fe)}}if(!Bh(Cr,T.current)){let pa=Di(te,T.current,!0);ve(pa)}if(!Bh(Uo,N.current)){let pa=Di(oe,N.current);Y(pa)}x.setState({userSelectionRect:$t,userSelectionActive:!0,nodesSelectionActive:!1})}function F(){if(!n||!k.current)return;let[q,$]=Cf(L.current,k.current,S);C({x:q,y:$}).then(ue=>{if(!H.current||!ue){w.current=requestAnimationFrame(F);return}let{x:ie,y:te}=L.current;D(ie,te),w.current=requestAnimationFrame(F)})}let j=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,P.useEffect)(()=>()=>j(),[]);let W=q=>{let{userSelectionRect:$,transform:ue,resetSelectedElements:ie}=x.getState();if(!k.current||!$)return;let{x:te,y:oe}=Ya(q.nativeEvent,k.current);L.current={x:te,y:oe};let ye=tl({x:$.startX,y:$.startY},ue);if(!H.current){let ve=t?0:r;if(Math.hypot(te-ye.x,oe-ye.y)<=ve)return;ie(),i?.(q)}H.current=!0,M.current||(F(),M.current=!0),D(te,oe)},Z=q=>{if(!v){q.target===_.current&&x.getState().connection.inProgress&&(U.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!h&&q.target===_.current&&x.getState().userSelectionRect&&E?.(q),x.setState({userSelectionActive:!1,userSelectionRect:null}),H.current&&(s?.(q),x.setState({nodesSelectionActive:T.current.size>0})),j())},ne=q=>{q.target?.releasePointerCapture?.(q.pointerId),j()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,O.jsxs)("div",{className:rt(["react-flow__pane",{draggable:ee,dragging:b,selection:e}]),onClick:v?void 0:Kh(E,_),onContextMenu:Kh(I,_),onWheel:Kh(A,_),onPointerEnter:v?void 0:c,onPointerMove:v?W:f,onPointerUp:Z,onPointerCancel:v?ne:void 0,onPointerDownCapture:v?V:void 0,onClickCapture:v?z:void 0,onPointerLeave:g,ref:_,style:Hf,children:[y,(0,O.jsx)(kT,{})]})}function $h({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),u=i.get(e);if(!u){s?.("012",La.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&l)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function fS({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=We(),[s,u]=(0,P.useState)(!1),d=(0,P.useRef)();return(0,P.useEffect)(()=>{if(!t)return d.current=lC({getStoreItems:()=>i.getState(),onNodeMouseDown:p=>{$h({id:p,store:i,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,i,e]),(0,P.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var ET=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function pS(){let e=We();return(0,P.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),p=new Map,c=ET(l),f=n?r[0]:5,g=n?r[1]:5,y=a.direction.x*f*a.factor,w=a.direction.y*g*a.factor;for(let[,x]of u){if(!c(x))continue;let h={x:x.internals.positionAbsolute.x+y,y:x.internals.positionAbsolute.y+w};n&&(h=Mi(h,r));let{position:m,positionAbsolute:b}=Ah({nodeId:x.id,nextPosition:h,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:i});x.position=m,x.internals.positionAbsolute=b,p.set(x.id,x)}s(p)},[])}var tx=(0,P.createContext)(null),NT=tx.Provider;tx.Consumer;var mS=()=>(0,P.useContext)(tx),TT=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),gS=(0,P.createContext)(null);function AT({children:e}){let t=we(TT,Ue);return(0,O.jsx)(gS.Provider,{value:t,children:e})}function DT(){let e=(0,P.useContext)(gS);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var RT={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},zT=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:u}=l;if(!i&&!n)return RT;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===nr.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:d&&u}};function OT({type:e="source",position:t=ae.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:u,onMouseDown:d,onTouchStart:p,...c},f){let g=l||null,y=e==="target",w=We(),x=mS(),{connectOnClick:h,noPanClassName:m,rfId:b}=DT(),{connectingFrom:C,connectingTo:S,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:k,clickConnectionInProcess:T,valid:N}=we(zT(x,g,e),Ue);x||w.getState().onError?.("010",La.error010());let U=M=>{let{defaultEdgeOptions:E,onConnect:I,hasDefaultEdges:A}=w.getState(),z={...E,...M};if(A){let{edges:V,setEdges:D,onError:F}=w.getState();D(mT(z,V,{onError:F}))}I?.(z),i?.(z)},H=M=>{if(!x)return;let E=Fh(M.nativeEvent);if(n&&(E&&M.button===0||!E)){let I=w.getState();Tf.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:g,nodeId:x,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...A)=>w.getState().onConnectEnd?.(...A),updateConnection:I.updateConnection,onConnect:U,isValidConnection:a||((...A)=>w.getState().isValidConnection?.(...A)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}E?d?.(M):p?.(M)},L=M=>{let{onClickConnectStart:E,onClickConnectEnd:I,connectionClickStartHandle:A,connectionMode:z,isValidConnection:V,lib:D,rfId:F,nodeLookup:j,connection:W}=w.getState();if(!x||!A&&!n)return;if(!A){E?.(M.nativeEvent,{nodeId:x,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:x,type:e,id:g}});return}let Z=Hh(M.target),ne=a||V,{connection:ee,isValid:q}=Tf.isValid(M.nativeEvent,{handle:{nodeId:x,id:g,type:e},connectionMode:z,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:ne,flowId:F,doc:Z,lib:D,nodeLookup:j});q&&ee&&U(ee);let $=structuredClone(W);delete $.inProgress,$.toPosition=$.toHandle?$.toHandle.position:null,I?.(M,$),w.setState({connectionClickStartHandle:null})};return(0,O.jsx)("div",{"data-handleid":g,"data-nodeid":x,"data-handlepos":t,"data-id":`${b}-${x}-${g}-${e}`,className:rt(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!y,target:y,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:C,connectingto:S,valid:N,connectionindicator:o&&(!k||_)&&(k||T?r:n)}]),onMouseDown:H,onTouchStart:H,onClick:h?L:void 0,ref:f,...c,children:s})}var Ri=(0,P.memo)(uS(OT));function PT({data:e,isConnectable:t,sourcePosition:a=ae.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[e?.label,(0,O.jsx)(Ri,{type:"source",position:a,isConnectable:t})]})}function BT({data:e,isConnectable:t,targetPosition:a=ae.Top,sourcePosition:o=ae.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Ri,{type:"target",position:a,isConnectable:t}),e?.label,(0,O.jsx)(Ri,{type:"source",position:o,isConnectable:t})]})}function HT(){return null}function UT({data:e,isConnectable:t,targetPosition:a=ae.Top}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Ri,{type:"target",position:a,isConnectable:t}),e?.label]})}var Of={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},XC={input:PT,default:BT,output:UT,group:HT};function FT(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var qT=e=>{let{width:t,height:a,x:o,y:n}=ki(e.nodeLookup,{filter:r=>!!r.selected});return{width:Xa(t)?t:null,height:Xa(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function VT({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=We(),{width:n,height:r,transformString:l,userSelectionActive:i}=we(qT,Ue),s=pS(),u=(0,P.useRef)(null);(0,P.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!i&&n!==null&&r!==null;if(fS({nodeRef:u,disabled:!d}),!d)return null;let p=e?f=>{let g=o.getState().nodes.filter(y=>y.selected);e(f,g)}:void 0,c=f=>{Object.prototype.hasOwnProperty.call(Of,f.key)&&(f.preventDefault(),s({direction:Of[f.key],factor:f.shiftKey?4:1}))};return(0,O.jsx)("div",{className:rt(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,O.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:p,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var YC=typeof window<"u"?window:void 0,GT=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function hS({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:p,onSelectionStart:c,onSelectionEnd:f,multiSelectionKeyCode:g,panActivationKeyCode:y,zoomActivationKeyCode:w,elementsSelectable:x,zoomOnScroll:h,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:C,panOnScrollMode:S,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:k,defaultViewport:T,translateExtent:N,minZoom:U,maxZoom:H,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:E,noPanClassName:I,disableKeyboardA11y:A,onViewportChange:z,isControlledViewport:V}){let{nodesSelectionActive:D,userSelectionActive:F}=we(GT,Ue),j=Lu(u,{target:YC}),W=Lu(y,{target:YC}),Z=W||_,ne=W||b,ee=d&&Z!==!0,q=j||F||ee;return vT({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,O.jsx)(LT,{onPaneContextMenu:r,elementsSelectable:x,zoomOnScroll:h,zoomOnPinch:m,panOnScroll:ne,panActivationKeyPressed:W,panOnScrollSpeed:C,panOnScrollMode:S,zoomOnDoubleClick:v,panOnDrag:!j&&Z,defaultViewport:T,translateExtent:N,minZoom:U,maxZoom:H,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:E,noPanClassName:I,onViewportChange:z,isControlledViewport:V,paneClickDistance:i,selectionOnDrag:ee,children:(0,O.jsxs)(MT,{onSelectionStart:c,onSelectionEnd:f,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:Z,autoPanOnSelection:k,isSelecting:!!q,selectionMode:p,selectionKeyPressed:j,paneClickDistance:i,selectionOnDrag:ee,children:[e,D&&(0,O.jsx)(VT,{onSelectionContextMenu:M,noPanClassName:I,disableKeyboardA11y:A})]})})}hS.displayName="FlowRenderer";var XT=(0,P.memo)(hS),YT=e=>t=>e?vf(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function jT(e){return we((0,P.useCallback)(YT(e),[e]),Ue)}var ZT=e=>e.updateNodeInternals;function WT(){let e=we(ZT),[t]=(0,P.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,P.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function KT({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=We(),r=(0,P.useRef)(null),l=(0,P.useRef)(null),i=(0,P.useRef)(e.sourcePosition),s=(0,P.useRef)(e.targetPosition),u=(0,P.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,P.useEffect)(()=>{r.current&&!e.hidden&&(!d||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[d,e.hidden]),(0,P.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,P.useEffect)(()=>{if(r.current){let p=u.current!==t,c=i.current!==e.sourcePosition,f=s.current!==e.targetPosition;(p||c||f)&&(u.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function QT({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:p,noDragClassName:c,noPanClassName:f,disableKeyboardA11y:g,rfId:y,nodeTypes:w,nodeClickDistance:x,onError:h}){let{node:m,internals:b,isParent:C}=we(q=>{let $=q.nodeLookup.get(e),ue=q.parentLookup.has(e);return{node:$,internals:$.internals,isParent:ue}},Ue),S=m.type||"default",v=w?.[S]||XC[S];v===void 0&&(h?.("003",La.error003(S)),S="default",v=w?.default||XC.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),k=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),N=!!(m.focusable||d&&typeof m.focusable>"u"),U=We(),H=Oh(m),L=KT({node:m,nodeType:S,hasDimensions:H,resizeObserver:p}),M=fS({nodeRef:L,disabled:m.hidden||!_,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:k,nodeClickDistance:x}),E=pS();if(m.hidden)return null;let I=ja(m),A=FT(m),z=k||_||t||a||o||n,V=a?q=>a(q,{...b.userNode}):void 0,D=o?q=>o(q,{...b.userNode}):void 0,F=n?q=>n(q,{...b.userNode}):void 0,j=r?q=>r(q,{...b.userNode}):void 0,W=l?q=>l(q,{...b.userNode}):void 0,Z=q=>{let{selectNodesOnDrag:$,nodeDragThreshold:ue}=U.getState();k&&(!$||!_||ue>0)&&$h({id:e,store:U,nodeRef:L}),t&&t(q,{...b.userNode})},ne=q=>{if(!(Uh(q.nativeEvent)||g)){if(Lh.includes(q.key)&&k){let $=q.key==="Escape";$h({id:e,store:U,unselect:$,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(Of,q.key)){q.preventDefault();let{ariaLabelConfig:$}=U.getState();U.setState({ariaLiveMessage:$["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),E({direction:Of[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:$,height:ue,autoPanOnNodeFocus:ie,setCenter:te}=U.getState();if(!ie)return;vf(new Map([[e,m]]),{x:0,y:0,width:$,height:ue},q,!0).length>0||te(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:q[2]})};return(0,O.jsx)("div",{className:rt(["react-flow__node",`react-flow__node-${S}`,{[f]:_},m.className,{selected:m.selected,selectable:k,parent:C,draggable:_,dragging:M}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:z?"all":"none",visibility:H?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:D,onMouseLeave:F,onContextMenu:j,onClick:Z,onDoubleClick:W,onKeyDown:N?ne:void 0,tabIndex:N?0:void 0,onFocus:N?ee:void 0,role:m.ariaRole??(N?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${rS}-${y}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,O.jsx)(NT,{value:e,children:(0,O.jsx)(v,{id:e,data:m.data,type:S,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:k,draggable:_,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...I})})})}var $T=(0,P.memo)(QT),JT=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function xS(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=we(JT,Ue),r=jT(e.onlyRenderVisibleElements),l=WT();return(0,O.jsx)("div",{className:"react-flow__nodes",style:Hf,children:r.map(i=>(0,O.jsx)($T,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}xS.displayName="NodeRenderer";var e6=(0,P.memo)(xS);function t6(e){return we((0,P.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&K2({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ue)}var a6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,O.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},o6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,O.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},jC={[Si.Arrow]:a6,[Si.ArrowClosed]:o6};function n6(e){let t=We();return(0,P.useMemo)(()=>Object.prototype.hasOwnProperty.call(jC,e)?jC[e]:(t.getState().onError?.("009",La.error009(e)),null),[e])}var r6=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=n6(t);return s?(0,O.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,O.jsx)(s,{color:a,strokeWidth:l})}):null},bS=({defaultColor:e,rfId:t})=>{let a=we(r=>r.edges),o=we(r=>r.defaultEdgeOptions),n=(0,P.useMemo)(()=>J2(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,O.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,O.jsx)("defs",{children:n.map(r=>(0,O.jsx)(r6,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};bS.displayName="MarkerDefinitions";var l6=(0,P.memo)(bS);function yS({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:u,...d}){let[p,c]=(0,P.useState)({x:1,y:0,width:0,height:0}),f=rt(["react-flow__edge-textwrapper",u]),g=(0,P.useRef)(null);return(0,P.useEffect)(()=>{if(g.current){let y=g.current.getBBox();c({x:y.x,y:y.y,width:y.width,height:y.height})}},[a]),a?(0,O.jsxs)("g",{transform:`translate(${e-p.width/2} ${t-p.height/2})`,className:f,visibility:p.width?"visible":"hidden",...d,children:[n&&(0,O.jsx)("rect",{width:p.width+2*l[0],x:-l[0],y:-l[1],height:p.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,O.jsx)("text",{className:"react-flow__edge-text",y:p.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}yS.displayName="EdgeText";var i6=(0,P.memo)(yS);function ir({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("path",{...d,d:e,fill:"none",className:rt(["react-flow__edge-path",d.className])}),u?(0,O.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Xa(t)&&Xa(a)?(0,O.jsx)(i6,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function ZC({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ae.Left||e===ae.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function wS({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top}){let[l,i]=ZC({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=ZC({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,p,c,f]=kf({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:u});return[`M${e},${t} C${l},${i} ${s},${u} ${o},${n}`,d,p,c,f]}function vS(e){return(0,P.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:p,labelBgPadding:c,labelBgBorderRadius:f,style:g,markerEnd:y,markerStart:w,interactionWidth:x})=>{let[h,m,b]=wS({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),C=e.isInternal?void 0:t;return(0,O.jsx)(ir,{id:C,path:h,labelX:m,labelY:b,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:p,labelBgPadding:c,labelBgBorderRadius:f,style:g,markerEnd:y,markerStart:w,interactionWidth:x})})}var s6=vS({isInternal:!1}),CS=vS({isInternal:!0});s6.displayName="SimpleBezierEdge";CS.displayName="SimpleBezierEdgeInternal";function SS(e){return(0,P.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:p,style:c,sourcePosition:f=ae.Bottom,targetPosition:g=ae.Top,markerEnd:y,markerStart:w,pathOptions:x,interactionWidth:h})=>{let[m,b,C]=Su({sourceX:a,sourceY:o,sourcePosition:f,targetX:n,targetY:r,targetPosition:g,borderRadius:x?.borderRadius,offset:x?.offset,stepPosition:x?.stepPosition}),S=e.isInternal?void 0:t;return(0,O.jsx)(ir,{id:S,path:m,labelX:b,labelY:C,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:p,style:c,markerEnd:y,markerStart:w,interactionWidth:h})})}var LS=SS({isInternal:!1}),_S=SS({isInternal:!0});LS.displayName="SmoothStepEdge";_S.displayName="SmoothStepEdgeInternal";function kS(e){return(0,P.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,O.jsx)(LS,{...a,id:o,pathOptions:(0,P.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var u6=kS({isInternal:!1}),IS=kS({isInternal:!0});u6.displayName="StepEdge";IS.displayName="StepEdgeInternal";function MS(e){return(0,P.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:p,style:c,markerEnd:f,markerStart:g,interactionWidth:y})=>{let[w,x,h]=If({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,O.jsx)(ir,{id:m,path:w,labelX:x,labelY:h,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:p,style:c,markerEnd:f,markerStart:g,interactionWidth:y})})}var d6=MS({isInternal:!1}),ES=MS({isInternal:!0});d6.displayName="StraightEdge";ES.displayName="StraightEdgeInternal";function NS(e){return(0,P.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=ae.Bottom,targetPosition:i=ae.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:p,labelBgPadding:c,labelBgBorderRadius:f,style:g,markerEnd:y,markerStart:w,pathOptions:x,interactionWidth:h})=>{let[m,b,C]=Ti({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:x?.curvature}),S=e.isInternal?void 0:t;return(0,O.jsx)(ir,{id:S,path:m,labelX:b,labelY:C,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:p,labelBgPadding:c,labelBgBorderRadius:f,style:g,markerEnd:y,markerStart:w,interactionWidth:h})})}var c6=NS({isInternal:!1}),TS=NS({isInternal:!0});c6.displayName="BezierEdge";TS.displayName="BezierEdgeInternal";var WC={default:TS,straight:ES,step:IS,smoothstep:_S,simplebezier:CS},KC={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},f6=(e,t,a)=>a===ae.Left?e-t:a===ae.Right?e+t:e,p6=(e,t,a)=>a===ae.Top?e-t:a===ae.Bottom?e+t:e,QC="react-flow__edgeupdater";function $C({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,O.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:rt([QC,`${QC}-${i}`]),cx:f6(t,o,e),cy:p6(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function m6({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:p,setReconnecting:c,setUpdateHover:f}){let g=We(),y=(b,C)=>{if(b.button!==0)return;let{autoPanOnConnect:S,domNode:v,connectionMode:_,connectionRadius:k,lib:T,onConnectStart:N,cancelConnection:U,nodeLookup:H,rfId:L,panBy:M,updateConnection:E}=g.getState(),I=C.type==="target",A=(D,F)=>{c(!1),p?.(D,a,C.type,F)},z=D=>u?.(a,D),V=(D,F)=>{c(!0),d?.(b,a,C.type),N?.(D,F)};Tf.onPointerDown(b.nativeEvent,{autoPanOnConnect:S,connectionMode:_,connectionRadius:k,domNode:v,handleId:C.id,nodeId:C.nodeId,nodeLookup:H,isTarget:I,edgeUpdaterType:C.type,lib:T,flowId:L,cancelConnection:U,panBy:M,isValidConnection:(...D)=>g.getState().isValidConnection?.(...D)??!0,onConnect:z,onConnectStart:V,onConnectEnd:(...D)=>g.getState().onConnectEnd?.(...D),onReconnectEnd:A,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>y(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),x=b=>y(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),h=()=>f(!0),m=()=>f(!1);return(0,O.jsxs)(O.Fragment,{children:[(e===!0||e==="source")&&(0,O.jsx)($C,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:h,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,O.jsx)($C,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:x,onMouseEnter:h,onMouseOut:m,type:"target"})]})}function g6({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:p,onReconnectStart:c,onReconnectEnd:f,rfId:g,edgeTypes:y,noPanClassName:w,onError:x,disableKeyboardA11y:h}){let m=we(te=>te.edgeLookup.get(e)),b=we(te=>te.defaultEdgeOptions);m=b?{...b,...m}:m;let C=m.type||"default",S=y?.[C]||WC[C];S===void 0&&(x?.("011",La.error011(C)),C="default",S=y?.default||WC.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof p<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),k=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,P.useRef)(null),[N,U]=(0,P.useState)(!1),[H,L]=(0,P.useState)(!1),M=We(),{zIndex:E=m.zIndex,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:F}=we((0,P.useCallback)(te=>{let oe=te.nodeLookup.get(m.source),ye=te.nodeLookup.get(m.target);if(!oe||!ye)return KC;let ve=$2({id:e,sourceNode:oe,targetNode:ye,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:te.connectionMode,onError:x}),Y=W2({selected:m.selected,zIndex:m.zIndex,sourceNode:oe,targetNode:ye,elevateOnSelect:te.elevateEdgesOnSelect,zIndexMode:te.zIndexMode});return{...ve||KC,zIndex:Y}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,x]),Ue),j=(0,P.useMemo)(()=>m.markerStart?`url('#${Mf(m.markerStart,g)}')`:void 0,[m.markerStart,g]),W=(0,P.useMemo)(()=>m.markerEnd?`url('#${Mf(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||I===null||A===null||z===null||V===null)return null;let Z=te=>{let{addSelectedEdges:oe,unselectNodesAndEdges:ye,multiSelectionActive:ve}=M.getState();k&&(M.setState({nodesSelectionActive:!1}),m.selected&&ve?(ye({nodes:[],edges:[m]}),T.current?.blur()):oe([e])),n&&n(te,m)},ne=r?te=>{r(te,{...m})}:void 0,ee=l?te=>{l(te,{...m})}:void 0,q=i?te=>{i(te,{...m})}:void 0,$=s?te=>{s(te,{...m})}:void 0,ue=u?te=>{u(te,{...m})}:void 0,ie=te=>{if(!h&&Lh.includes(te.key)&&k){let{unselectNodesAndEdges:oe,addSelectedEdges:ye}=M.getState();te.key==="Escape"?(T.current?.blur(),oe({edges:[m]})):ye([e])}};return(0,O.jsx)("svg",{style:{zIndex:E},children:(0,O.jsxs)("g",{className:rt(["react-flow__edge",`react-flow__edge-${C}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!k&&!n,updating:N,selectable:k}]),onClick:Z,onDoubleClick:ne,onContextMenu:ee,onMouseEnter:q,onMouseMove:$,onMouseLeave:ue,onKeyDown:v?ie:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${lS}-${g}`:void 0,ref:T,...m.domAttributes,children:[!H&&(0,O.jsx)(S,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:k,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:F,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:j,markerEnd:W,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,O.jsx)(m6,{edge:m,isReconnectable:_,reconnectRadius:d,onReconnect:p,onReconnectStart:c,onReconnectEnd:f,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:F,setUpdateHover:U,setReconnecting:L})]})})}var h6=(0,P.memo)(g6),x6=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function AS({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:p,onEdgeDoubleClick:c,onReconnectStart:f,onReconnectEnd:g,disableKeyboardA11y:y}){let{edgesFocusable:w,edgesReconnectable:x,elementsSelectable:h,onError:m}=we(x6,Ue),b=t6(t);return(0,O.jsxs)("div",{className:"react-flow__edges",children:[(0,O.jsx)(l6,{defaultColor:e,rfId:a}),b.map(C=>(0,O.jsx)(h6,{id:C,edgesFocusable:w,edgesReconnectable:x,elementsSelectable:h,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:p,onDoubleClick:c,onReconnectStart:f,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:y},C))]})}AS.displayName="EdgeRenderer";var b6=(0,P.memo)(AS),JC=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function y6({children:e}){let t=We(),a=(0,P.useRef)(null),[o]=(0,P.useState)(()=>t.getState().transform);return dS(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=JC(l)))};return r(),t.subscribe(r)},[t]),(0,O.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:JC(o)},children:e})}function w6(e){let t=_a(),a=(0,P.useRef)(!1);(0,P.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var v6=e=>e.panZoom?.syncViewport;function C6(e){let t=we(v6),a=We();return(0,P.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function eS(e){return e.connection.inProgress?{...e.connection,to:Ei(e.connection.to,e.transform)}:{...e.connection}}function S6(e){return e?a=>{let o=eS(a);return e(o)}:eS}function ax(e){let t=S6(e);return we(t,Ue)}var L6=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function _6({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=we(L6,Ue);return!(r&&n&&s)?null:(0,O.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,O.jsx)("g",{className:rt(["react-flow__connection",Ih(i)]),children:(0,O.jsx)(DS,{style:t,type:a,CustomComponent:o,isValid:i})})})}var DS=({style:e,type:t=Mo.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:u,toNode:d,toHandle:p,toPosition:c,pointer:f}=ax();if(!n)return;if(a)return(0,O.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:Ih(o),toNode:d,toHandle:p,pointer:f});let g="",y={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case Mo.Bezier:[g]=Ti(y);break;case Mo.SimpleBezier:[g]=wS(y);break;case Mo.Step:[g]=Su({...y,borderRadius:0});break;case Mo.SmoothStep:[g]=Su(y);break;default:[g]=If(y)}return(0,O.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};DS.displayName="ConnectionLine";var k6={};function tS(e=k6){let t=(0,P.useRef)(e),a=We();(0,P.useEffect)(()=>{},[e])}function I6(){let e=We(),t=(0,P.useRef)(!1);(0,P.useEffect)(()=>{},[])}function RS({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:p,onSelectionStart:c,onSelectionEnd:f,connectionLineType:g,connectionLineStyle:y,connectionLineComponent:w,connectionLineContainerStyle:x,selectionKeyCode:h,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:C,panActivationKeyCode:S,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:k,elementsSelectable:T,defaultViewport:N,translateExtent:U,minZoom:H,maxZoom:L,preventScrolling:M,defaultMarkerColor:E,zoomOnScroll:I,zoomOnPinch:A,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:D,zoomOnDoubleClick:F,panOnDrag:j,autoPanOnSelection:W,onPaneClick:Z,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:$,onPaneContextMenu:ue,paneClickDistance:ie,nodeClickDistance:te,onEdgeContextMenu:oe,onEdgeMouseEnter:ye,onEdgeMouseMove:ve,onEdgeMouseLeave:Y,reconnectRadius:ce,onReconnect:ke,onReconnectStart:it,onReconnectEnd:qt,noDragClassName:$t,noWheelClassName:Cr,noPanClassName:Uo,disableKeyboardA11y:Fo,nodeExtent:pa,rfId:K,viewport:Fe,onViewportChange:at,nodesDraggable:Da}){return tS(e),tS(t),I6(),w6(a),C6(Fe),(0,O.jsx)(XT,{onPaneClick:Z,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:ue,onPaneScroll:$,paneClickDistance:ie,deleteKeyCode:_,selectionKeyCode:h,selectionOnDrag:m,selectionMode:b,onSelectionStart:c,onSelectionEnd:f,multiSelectionKeyCode:C,panActivationKeyCode:S,zoomActivationKeyCode:v,elementsSelectable:T,zoomOnScroll:I,zoomOnPinch:A,zoomOnDoubleClick:F,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:D,panOnDrag:j,autoPanOnSelection:W,defaultViewport:N,translateExtent:U,minZoom:H,maxZoom:L,onSelectionContextMenu:p,preventScrolling:M,noDragClassName:$t,noWheelClassName:Cr,noPanClassName:Uo,disableKeyboardA11y:Fo,onViewportChange:at,isControlledViewport:!!Fe,children:(0,O.jsxs)(y6,{children:[(0,O.jsx)(b6,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:ke,onReconnectStart:it,onReconnectEnd:qt,onlyRenderVisibleElements:k,onEdgeContextMenu:oe,onEdgeMouseEnter:ye,onEdgeMouseMove:ve,onEdgeMouseLeave:Y,reconnectRadius:ce,defaultMarkerColor:E,noPanClassName:Uo,disableKeyboardA11y:Fo,rfId:K}),(0,O.jsx)(_6,{style:y,type:g,component:w,containerStyle:x}),(0,O.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,O.jsx)(e6,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:te,onlyRenderVisibleElements:k,noPanClassName:Uo,noDragClassName:$t,disableKeyboardA11y:Fo,nodeExtent:pa,rfId:K,nodesDraggable:Da}),(0,O.jsx)("div",{className:"react-flow__viewport-portal"})]})})}RS.displayName="GraphView";var M6=(0,P.memo)(RS),E6=zh("React Flow","https://reactflow.dev/"),aS=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:p,zIndexMode:c="basic"}={})=>{let f=new Map,g=new Map,y=new Map,w=new Map,x=o??t??[],h=a??e??[],m=d??[0,0],b=p??_i;jh(y,w,x);let{nodesInitialized:C}=Ef(h,f,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:c}),S=[0,0,1];if(l&&n&&r){let v=ki(f,{filter:N=>!!((N.width||N.initialWidth)&&(N.height||N.initialHeight))}),{x:_,y:k,zoom:T}=Cu(v,n,r,s,u,i?.padding??.1);S=[_,k,T]}return{rfId:"1",width:n??0,height:r??0,transform:S,nodes:h,nodesInitialized:C,nodeLookup:f,parentLookup:g,edges:x,edgeLookup:w,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:_i,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:nr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...kh},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:E6,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:_h,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},N6=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:p,zIndexMode:c})=>TC((f,g)=>{async function y(){let{nodeLookup:w,panZoom:x,fitViewOptions:h,fitViewResolver:m,width:b,height:C,minZoom:S,maxZoom:v}=g();x&&(await V2({nodes:w,width:b,height:C,panZoom:x,minZoom:S,maxZoom:v},h),m?.resolve(!0),f({fitViewResolver:null}))}return{...aS({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:p,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:w=>{let{nodeLookup:x,parentLookup:h,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:C,fitViewQueued:S,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:k,hasSelectedNodes:T}=Ef(w,x,h,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:C,checkEquality:!0,zIndexMode:v}),N=_&&T;S&&k?(y(),f({nodes:w,nodesInitialized:k,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:N})):f({nodes:w,nodesInitialized:k,nodesSelectionActive:N})},setEdges:w=>{let{connectionLookup:x,edgeLookup:h}=g();jh(x,h,w),f({edges:w})},setDefaultNodesAndEdges:(w,x)=>{if(w){let{setNodes:h}=g();h(w),f({hasDefaultNodes:!0})}if(x){let{setEdges:h}=g();h(x),f({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:x,nodeLookup:h,parentLookup:m,domNode:b,nodeOrigin:C,nodeExtent:S,debug:v,fitViewQueued:_,zIndexMode:k}=g(),{changes:T,updatedInternals:N}=oC(w,h,m,b,C,S,k);N&&(tC(h,m,{nodeOrigin:C,nodeExtent:S,zIndexMode:k}),_?(y(),f({fitViewQueued:!1,fitViewOptions:void 0})):f({}),T?.length>0&&(v&&console.log("React Flow: trigger node changes",T),x?.(T)))},updateNodePositions:(w,x=!1)=>{let h=[],m=[],{nodeLookup:b,triggerNodeChanges:C,connection:S,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[k,T]of w){let N=b.get(k),U=!!(N?.expandParent&&N?.parentId&&T?.position),H={id:k,type:"position",position:U?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:x};if(N&&S.inProgress&&S.fromNode.id===N.id){let L=rr(N,S.fromHandle,ae.Left,!0);v({...S,from:L})}U&&N.parentId&&h.push({id:k,parentId:N.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(H)}if(h.length>0){let{parentLookup:k,nodeOrigin:T}=g(),N=Nf(h,b,k,T);m.push(...N)}for(let k of _.values())m=k(m);C(m)},triggerNodeChanges:w=>{let{onNodesChange:x,setNodes:h,nodes:m,hasDefaultNodes:b,debug:C}=g();if(w?.length){if(b){let S=Jh(w,m);h(S)}C&&console.log("React Flow: trigger node changes",w),x?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:x,setEdges:h,edges:m,hasDefaultEdges:b,debug:C}=g();if(w?.length){if(b){let S=ex(w,m);h(S)}C&&console.log("React Flow: trigger edge changes",w),x?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:x,edgeLookup:h,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:C}=g();if(x){let S=w.map(v=>ol(v,!0));b(S);return}b(Di(m,new Set([...w]),!0)),C(Di(h))},addSelectedEdges:w=>{let{multiSelectionActive:x,edgeLookup:h,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:C}=g();if(x){let S=w.map(v=>ol(v,!0));C(S);return}C(Di(h,new Set([...w]))),b(Di(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:x}={})=>{let{edges:h,nodes:m,nodeLookup:b,triggerNodeChanges:C,triggerEdgeChanges:S}=g(),v=w||m,_=x||h,k=[];for(let N of v){if(!N.selected)continue;let U=b.get(N.id);U&&(U.selected=!1),k.push(ol(N.id,!1))}let T=[];for(let N of _)N.selected&&T.push(ol(N.id,!1));C(k),S(T)},setMinZoom:w=>{let{panZoom:x,maxZoom:h}=g();x?.setScaleExtent([w,h]),f({minZoom:w})},setMaxZoom:w=>{let{panZoom:x,minZoom:h}=g();x?.setScaleExtent([h,w]),f({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),f({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:x,triggerNodeChanges:h,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let C=x.reduce((v,_)=>_.selected?[...v,ol(_.id,!1)]:v,[]),S=w.reduce((v,_)=>_.selected?[...v,ol(_.id,!1)]:v,[]);h(C),m(S)},setNodeExtent:w=>{let{nodes:x,nodeLookup:h,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:C,nodeExtent:S,zIndexMode:v}=g();w[0][0]===S[0][0]&&w[0][1]===S[0][1]&&w[1][0]===S[1][0]&&w[1][1]===S[1][1]||(Ef(x,h,m,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:C,checkEquality:!1,zIndexMode:v}),f({nodeExtent:w}))},panBy:w=>{let{transform:x,width:h,height:m,panZoom:b,translateExtent:C}=g();return nC({delta:w,panZoom:b,transform:x,translateExtent:C,width:h,height:m})},setCenter:async(w,x,h)=>{let{width:m,height:b,maxZoom:C,panZoom:S}=g();if(!S)return!1;let v=typeof h?.zoom<"u"?h.zoom:C;return await S.setViewport({x:m/2-w*v,y:b/2-x*v,zoom:v},{duration:h?.duration,ease:h?.ease,interpolate:h?.interpolate}),!0},cancelConnection:()=>{f({connection:{...kh}})},updateConnection:w=>{f({connection:w})},reset:()=>f({...aS()})}},Object.is);function ox({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:p,zIndexMode:c,children:f}){let[g]=(0,P.useState)(()=>N6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:d,nodeExtent:p,zIndexMode:c}));return(0,O.jsx)(jN,{value:g,children:(0,O.jsx)(xT,{children:(0,O.jsx)(AT,{children:f})})})}function T6({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:p,nodeExtent:c,zIndexMode:f}){return(0,P.useContext)(Pf)?(0,O.jsx)(O.Fragment,{children:e}):(0,O.jsx)(ox,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:p,nodeExtent:c,zIndexMode:f,children:e})}var A6={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function D6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:p,onMoveEnd:c,onConnect:f,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:x,onNodeMouseEnter:h,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:C,onNodeDoubleClick:S,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onNodesDelete:T,onEdgesDelete:N,onDelete:U,onSelectionChange:H,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:E,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onBeforeDelete:V,connectionMode:D,connectionLineType:F=Mo.Bezier,connectionLineStyle:j,connectionLineComponent:W,connectionLineContainerStyle:Z,deleteKeyCode:ne="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:$=pn.Full,panActivationKeyCode:ue="Space",multiSelectionKeyCode:ie=Ni()?"Meta":"Control",zoomActivationKeyCode:te=Ni()?"Meta":"Control",snapToGrid:oe,snapGrid:ye,onlyRenderVisibleElements:ve=!1,selectNodesOnDrag:Y,nodesDraggable:ce,autoPanOnNodeFocus:ke,nodesConnectable:it,nodesFocusable:qt,nodeOrigin:$t=iS,edgesFocusable:Cr,edgesReconnectable:Uo,elementsSelectable:Fo=!0,defaultViewport:pa=lT,minZoom:K=.5,maxZoom:Fe=2,translateExtent:at=_i,preventScrolling:Da=!0,nodeExtent:Sr,defaultMarkerColor:bo="#b1b1b7",zoomOnScroll:bp=!0,zoomOnPinch:Ak=!0,panOnScroll:Dk=!1,panOnScrollSpeed:Rk=.5,panOnScrollMode:zk=io.Free,zoomOnDoubleClick:Ok=!0,panOnDrag:Pk=!0,onPaneClick:Bk,onPaneMouseEnter:Hk,onPaneMouseMove:Uk,onPaneMouseLeave:Fk,onPaneScroll:qk,onPaneContextMenu:Vk,paneClickDistance:Gk=1,nodeClickDistance:Xk=0,children:Yk,onReconnect:jk,onReconnectStart:Zk,onReconnectEnd:Wk,onEdgeContextMenu:Kk,onEdgeDoubleClick:Qk,onEdgeMouseEnter:$k,onEdgeMouseMove:Jk,onEdgeMouseLeave:eI,reconnectRadius:tI=10,onNodesChange:aI,onEdgesChange:oI,noDragClassName:nI="nodrag",noWheelClassName:rI="nowheel",noPanClassName:zx="nopan",fitView:Ox,fitViewOptions:Px,connectOnClick:lI,attributionPosition:iI,proOptions:sI,defaultEdgeOptions:uI,elevateNodesOnSelect:dI=!0,elevateEdgesOnSelect:cI=!1,disableKeyboardA11y:Bx=!1,autoPanOnConnect:fI,autoPanOnNodeDrag:pI,autoPanOnSelection:mI=!0,autoPanSpeed:gI,connectionRadius:hI,isValidConnection:xI,onError:bI,style:yI,id:Hx,nodeDragThreshold:wI,connectionDragThreshold:vI,viewport:CI,onViewportChange:SI,width:LI,height:_I,colorMode:kI="light",debug:II,onScroll:Ux,ariaLabelConfig:MI,zIndexMode:Fx="basic",...EI},NI){let yp=Hx||"1",TI=dT(kI),AI=(0,P.useCallback)(qx=>{qx.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ux?.(qx)},[Ux]);return(0,O.jsx)("div",{"data-testid":"rf__wrapper",...EI,onScroll:AI,style:{...yI,...A6},ref:NI,className:rt(["react-flow",n,TI]),id:Hx,role:"application",children:(0,O.jsxs)(T6,{nodes:e,edges:t,width:LI,height:_I,fitView:Ox,fitViewOptions:Px,minZoom:K,maxZoom:Fe,nodeOrigin:$t,nodeExtent:Sr,zIndexMode:Fx,children:[(0,O.jsx)(uT,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:f,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:x,nodesDraggable:ce,autoPanOnNodeFocus:ke,nodesConnectable:it,nodesFocusable:qt,edgesFocusable:Cr,edgesReconnectable:Uo,elementsSelectable:Fo,elevateNodesOnSelect:dI,elevateEdgesOnSelect:cI,minZoom:K,maxZoom:Fe,nodeExtent:Sr,onNodesChange:aI,onEdgesChange:oI,snapToGrid:oe,snapGrid:ye,connectionMode:D,translateExtent:at,connectOnClick:lI,defaultEdgeOptions:uI,fitView:Ox,fitViewOptions:Px,onNodesDelete:T,onEdgesDelete:N,onDelete:U,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:E,onMove:d,onMoveStart:p,onMoveEnd:c,noPanClassName:zx,nodeOrigin:$t,rfId:yp,autoPanOnConnect:fI,autoPanOnNodeDrag:pI,autoPanSpeed:gI,onError:bI,connectionRadius:hI,isValidConnection:xI,selectNodesOnDrag:Y,nodeDragThreshold:wI,connectionDragThreshold:vI,onBeforeDelete:V,debug:II,ariaLabelConfig:MI,zIndexMode:Fx}),(0,O.jsx)(M6,{onInit:u,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:h,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:C,onNodeDoubleClick:S,nodeTypes:r,edgeTypes:l,connectionLineType:F,connectionLineStyle:j,connectionLineComponent:W,connectionLineContainerStyle:Z,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:$,deleteKeyCode:ne,multiSelectionKeyCode:ie,panActivationKeyCode:ue,zoomActivationKeyCode:te,onlyRenderVisibleElements:ve,defaultViewport:pa,translateExtent:at,minZoom:K,maxZoom:Fe,preventScrolling:Da,zoomOnScroll:bp,zoomOnPinch:Ak,zoomOnDoubleClick:Ok,panOnScroll:Dk,panOnScrollSpeed:Rk,panOnScrollMode:zk,panOnDrag:Pk,autoPanOnSelection:mI,onPaneClick:Bk,onPaneMouseEnter:Hk,onPaneMouseMove:Uk,onPaneMouseLeave:Fk,onPaneScroll:qk,onPaneContextMenu:Vk,paneClickDistance:Gk,nodeClickDistance:Xk,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onReconnect:jk,onReconnectStart:Zk,onReconnectEnd:Wk,onEdgeContextMenu:Kk,onEdgeDoubleClick:Qk,onEdgeMouseEnter:$k,onEdgeMouseMove:Jk,onEdgeMouseLeave:eI,reconnectRadius:tI,defaultMarkerColor:bo,noDragClassName:nI,noWheelClassName:rI,noPanClassName:zx,rfId:yp,disableKeyboardA11y:Bx,nodeExtent:Sr,viewport:CI,onViewportChange:SI,nodesDraggable:ce}),(0,O.jsx)(rT,{onSelectionChange:H}),Yk,(0,O.jsx)(eT,{proOptions:sI,position:iI}),(0,O.jsx)(JN,{rfId:yp,disableKeyboardA11y:Bx})]})})}var zS=uS(D6);var R6=e=>e.nodes;function OS(){return we(R6,Ue)}var z6=e=>e.edges;function PS(){return we(z6,Ue)}var O6=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function sr(){return we(O6,Ue)}var rH=La.error014();function P6({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,O.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:rt(["react-flow__background-pattern",a,o])})}function B6({radius:e,className:t}){return(0,O.jsx)("circle",{cx:e,cy:e,r:e,className:rt(["react-flow__background-pattern","dots",t])})}var Eo;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Eo||(Eo={}));var H6={[Eo.Dots]:1,[Eo.Lines]:1,[Eo.Cross]:6},U6=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function BS({id:e,variant:t=Eo.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:u,patternClassName:d}){let p=(0,P.useRef)(null),{transform:c,patternId:f}=we(U6,Ue),g=o||H6[t],y=t===Eo.Dots,w=t===Eo.Cross,x=Array.isArray(a)?a:[a,a],h=[x[0]*c[2]||1,x[1]*c[2]||1],m=g*c[2],b=Array.isArray(r)?r:[r,r],C=w?[m,m]:h,S=[b[0]*c[2]+C[0]/2,b[1]*c[2]+C[1]/2],v=`${f}${e||""}`;return(0,O.jsxs)("svg",{className:rt(["react-flow__background",u]),style:{...s,...Hf,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:p,"data-testid":"rf__background",children:[(0,O.jsx)("pattern",{id:v,x:c[0]%h[0],y:c[1]%h[1],width:h[0],height:h[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:y?(0,O.jsx)(B6,{radius:m/2,className:d}):(0,O.jsx)(P6,{dimensions:C,lineWidth:n,variant:t,className:d})}),(0,O.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}BS.displayName="Background";var HS=(0,P.memo)(BS);function F6(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,O.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function q6(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,O.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function V6(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,O.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function G6(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function X6(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function zf({children:e,className:t,...a}){return(0,O.jsx)("button",{type:"button",className:rt(["react-flow__controls-button",t]),...a,children:e})}var Y6=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function US({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:u,children:d,position:p="bottom-left",orientation:c="vertical","aria-label":f}){let g=We(),{isInteractive:y,minZoomReached:w,maxZoomReached:x,ariaLabelConfig:h}=we(Y6,Ue),{zoomIn:m,zoomOut:b,fitView:C}=_a(),S=()=>{m(),r?.()},v=()=>{b(),l?.()},_=()=>{C(n),i?.()},k=()=>{g.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),s?.(!y)};return(0,O.jsxs)(Bf,{className:rt(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:p,style:e,"data-testid":"rf__controls","aria-label":f??h["controls.ariaLabel"],children:[t&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(zf,{onClick:S,className:"react-flow__controls-zoomin",title:h["controls.zoomIn.ariaLabel"],"aria-label":h["controls.zoomIn.ariaLabel"],disabled:x,children:(0,O.jsx)(F6,{})}),(0,O.jsx)(zf,{onClick:v,className:"react-flow__controls-zoomout",title:h["controls.zoomOut.ariaLabel"],"aria-label":h["controls.zoomOut.ariaLabel"],disabled:w,children:(0,O.jsx)(q6,{})})]}),a&&(0,O.jsx)(zf,{className:"react-flow__controls-fitview",onClick:_,title:h["controls.fitView.ariaLabel"],"aria-label":h["controls.fitView.ariaLabel"],children:(0,O.jsx)(V6,{})}),o&&(0,O.jsx)(zf,{className:"react-flow__controls-interactive",onClick:k,title:h["controls.interactive.ariaLabel"],"aria-label":h["controls.interactive.ariaLabel"],children:y?(0,O.jsx)(X6,{}):(0,O.jsx)(G6,{})}),d]})}US.displayName="Controls";var lH=(0,P.memo)(US);function j6({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:u,borderRadius:d,shapeRendering:p,selected:c,onClick:f}){let{background:g,backgroundColor:y}=r||{},w=l||g||y;return(0,O.jsx)("rect",{className:rt(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:p,onClick:f?x=>f(x,e):void 0})}var Z6=(0,P.memo)(j6),W6=e=>e.nodes.map(t=>t.id),Qh=e=>e instanceof Function?e:()=>e;function K6({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=Z6,onClick:l}){let i=we(W6,Ue),s=Qh(t),u=Qh(e),d=Qh(a),p=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,O.jsx)(O.Fragment,{children:i.map(c=>(0,O.jsx)($6,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:p},c))})}function Q6({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:u,x:d,y:p,width:c,height:f}=we(g=>{let y=g.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let w=y.internals.userNode,{x,y:h}=y.internals.positionAbsolute,{width:m,height:b}=ja(w);return{node:w,x,y:h,width:m,height:b}},Ue);return!u||u.hidden||!Oh(u)?null:(0,O.jsx)(i,{x:d,y:p,width:c,height:f,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:l,onClick:s,id:u.id})}var $6=(0,P.memo)(Q6),J6=(0,P.memo)(K6),eA=200,tA=150,aA=e=>!e.hidden,oA=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Dh(ki(e.nodeLookup,{filter:aA}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},oS=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,nA=(e,t)=>oS(e.viewBB,t.viewBB)&&oS(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,rA="react-flow__minimap-desc";function FS({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:p,position:c="bottom-right",onClick:f,onNodeClick:g,pannable:y=!1,zoomable:w=!1,ariaLabel:x,inversePan:h,zoomStep:m=1,offsetScale:b=5}){let C=We(),S=(0,P.useRef)(null),{boundingRect:v,viewBB:_,rfId:k,panZoom:T,translateExtent:N,flowWidth:U,flowHeight:H,ariaLabelConfig:L}=we(oA,nA),M=e?.width??eA,E=e?.height??tA,I=v.width/M,A=v.height/E,z=Math.max(I,A),V=z*M,D=z*E,F=b*z,j=v.x-(V-v.width)/2-F,W=v.y-(D-v.height)/2-F,Z=V+F*2,ne=D+F*2,ee=`${rA}-${k}`,q=(0,P.useRef)(0),$=(0,P.useRef)();q.current=z,(0,P.useEffect)(()=>{if(S.current&&T)return $.current=cC({domNode:S.current,panZoom:T,getTransform:()=>C.getState().transform,getViewScale:()=>q.current}),()=>{$.current?.destroy()}},[T]),(0,P.useEffect)(()=>{$.current?.update({translateExtent:N,width:U,height:H,inversePan:h,pannable:y,zoomStep:m,zoomable:w})},[y,w,h,m,N,U,H]);let ue=f?oe=>{let[ye,ve]=$.current?.pointer(oe)||[0,0];f(oe,{x:ye,y:ve})}:void 0,ie=g?(0,P.useCallback)((oe,ye)=>{let ve=C.getState().nodeLookup.get(ye).internals.userNode;g(oe,ve)},[]):void 0,te=x??L["minimap.ariaLabel"];return(0,O.jsx)(Bf,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof p=="number"?p*z:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:rt(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,O.jsxs)("svg",{width:M,height:E,viewBox:`${j} ${W} ${Z} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:S,onClick:ue,children:[te&&(0,O.jsx)("title",{id:ee,children:te}),(0,O.jsx)(J6,{onClick:ie,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,O.jsx)("path",{className:"react-flow__minimap-mask",d:`M${j-F},${W-F}h${Z+F*2}v${ne+F*2}h${-Z-F*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}FS.displayName="MiniMap";var qS=(0,P.memo)(FS),lA=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,iA={[lr.Line]:"right",[lr.Handle]:"bottom-right"};function sA({nodeId:e,position:t,variant:a=lr.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:p=!1,resizeDirection:c,autoScale:f=!0,shouldResize:g,onResizeStart:y,onResize:w,onResizeEnd:x}){let h=mS(),m=typeof e=="string"?e:h,b=We(),C=(0,P.useRef)(null),S=a===lr.Handle,v=we((0,P.useCallback)(lA(S&&f),[S,f]),Ue),_=(0,P.useRef)(null),k=t??iA[a];(0,P.useEffect)(()=>{if(!(!C.current||!m))return _.current||(_.current=hC({domNode:C.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:N,transform:U,snapGrid:H,snapToGrid:L,nodeOrigin:M,domNode:E}=b.getState();return{nodeLookup:N,transform:U,snapGrid:H,snapToGrid:L,nodeOrigin:M,paneDomNode:E}},onChange:(N,U)=>{let{triggerNodeChanges:H,nodeLookup:L,parentLookup:M,nodeOrigin:E}=b.getState(),I=[],A={x:N.x,y:N.y},z=L.get(m);if(z&&z.expandParent&&z.parentId){let V=z.origin??E,D=N.width??z.measured.width??0,F=N.height??z.measured.height??0,j={id:z.id,parentId:z.parentId,rect:{width:D,height:F,...Ph({x:N.x??z.position.x,y:N.y??z.position.y},{width:D,height:F},z.parentId,L,V)}},W=Nf([j],L,M,E);I.push(...W),A.x=N.x?Math.max(V[0]*D,N.x):void 0,A.y=N.y?Math.max(V[1]*F,N.y):void 0}if(A.x!==void 0&&A.y!==void 0){let V={id:m,type:"position",position:{...A}};I.push(V)}if(N.width!==void 0&&N.height!==void 0){let D={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:N.width,height:N.height}};I.push(D)}for(let V of U){let D={...V,type:"position"};I.push(D)}H(I)},onEnd:({width:N,height:U})=>{let H={id:m,type:"dimensions",resizing:!1,dimensions:{width:N,height:U}};b.getState().triggerNodeChanges([H])}})),_.current.update({controlPosition:k,boundaries:{minWidth:i,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:p,resizeDirection:c,onResizeStart:y,onResize:w,onResizeEnd:x,shouldResize:g}),()=>{_.current?.destroy()}},[k,i,s,u,d,p,y,w,x,g]);let T=k.split("-");return(0,O.jsx)("div",{className:rt(["react-flow__resize-control","nodrag",...T,a,o]),ref:C,style:{...n,scale:v,...l&&{[S?"backgroundColor":"borderColor"]:l}},children:r})}var iH=(0,P.memo)(sA);var ua=R(J(),1),ZS=R(wo(),1);var qf=R(J(),1);var Uf=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var VS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var GS=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var nx=e=>{let t=GS(e);return t.charAt(0).toUpperCase()+t.slice(1)};var _u=R(J(),1);var Ff={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var XS=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var zi=R(J(),1);var uA=(0,zi.createContext)({});var YS=()=>(0,zi.useContext)(uA);var jS=(0,_u.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:c="currentColor",className:f=""}=YS()??{},g=o??p?Number(a??d)*24/Number(t??u):a??d;return(0,_u.createElement)("svg",{ref:s,...Ff,width:t??u??Ff.width,height:t??u??Ff.height,stroke:e??c,strokeWidth:g,className:Uf("lucide",f,n),...!r&&!XS(i)&&{"aria-hidden":"true"},...i},[...l.map(([y,w])=>(0,_u.createElement)(y,w)),...Array.isArray(r)?r:[r]])});var B=(e,t)=>{let a=(0,qf.forwardRef)(({className:o,...n},r)=>(0,qf.createElement)(jS,{ref:r,iconNode:t,className:Uf(`lucide-${VS(nx(e))}`,`lucide-${e}`,o),...n}));return a.displayName=nx(e),a};var dA=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],nl=B("audio-lines",dA);var cA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Za=B("check",cA);var fA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ku=B("chevron-down",fA);var pA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Oi=B("chevron-right",pA);var mA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Iu=B("chevron-left",mA);var gA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Mu=B("chevron-up",gA);var hA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ur=B("circle-alert",hA);var xA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dr=B("circle-check",xA);var bA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],so=B("circle-question-mark",bA);var yA=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Eu=B("clapperboard",yA);var wA=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Nu=B("copy",wA);var vA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Tu=B("download",vA);var CA=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],cr=B("ellipsis",CA);var SA=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Au=B("eye-off",SA);var LA=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Du=B("eye",LA);var _A=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],No=B("file-pen",_A);var kA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Ru=B("file-spreadsheet",kA);var IA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],sa=B("file-text",IA);var MA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],zu=B("file-up",MA);var EA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Wa=B("film",EA);var NA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ou=B("folder-open",NA);var TA=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],fr=B("folder",TA);var AA=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],pr=B("funnel",AA);var DA=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Pu=B("grip-vertical",DA);var RA=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Pi=B("hand",RA);var zA=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Bu=B("hash",zA);var OA=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],mn=B("image-plus",OA);var PA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],uo=B("image",PA);var BA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Hu=B("info",BA);var HA=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Uu=B("keyboard",HA);var UA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],To=B("layers",UA);var FA=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],rl=B("layout-grid",FA);var qA=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Fu=B("list",qA);var VA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],mr=B("loader-circle",VA);var GA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],qu=B("map",GA);var XA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],gr=B("maximize-2",XA);var YA=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Vu=B("maximize",YA);var jA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],ll=B("mic",jA);var ZA=[["path",{d:"M5 12h14",key:"1ays0h"}]],Gu=B("minus",ZA);var WA=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Bi=B("mouse-pointer",WA);var KA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ka=B("music",KA);var QA=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Xu=B("paperclip",QA);var $A=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Yu=B("pause",$A);var JA=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Ao=B("pen-line",JA);var e8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Hi=B("pencil",e8);var t8=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],ju=B("person-standing",t8);var a8=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ka=B("play",a8);var o8=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ke=B("plus",o8);var n8=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],il=B("redo-2",n8);var r8=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],hr=B("refresh-cw",r8);var l8=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Zu=B("rotate-ccw",l8);var i8=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],sl=B("search",i8);var s8=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Wu=B("settings-2",s8);var u8=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Ku=B("sliders-horizontal",u8);var d8=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ia=B("sparkles",d8);var c8=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],xr=B("square-split-vertical",c8);var f8=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Ma=B("table",f8);var p8=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Qu=B("tag",p8);var m8=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],br=B("text-align-justify",m8);var g8=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ul=B("trash-2",g8);var h8=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yr=B("triangle-alert",h8);var x8=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],gn=B("type",x8);var b8=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],dl=B("undo-2",b8);var y8=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],$u=B("unlink",y8);var w8=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],cl=B("upload",w8);var v8=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],co=B("video",v8);var C8=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],Ju=B("waypoints",C8);var S8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],St=B("x",S8);var Lt=R(X(),1);function da({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,u]=(0,ua.useState)(!1),d=(0,ua.useRef)(null),p=(0,ua.useRef)(null),[c,f]=(0,ua.useState)({top:0,left:0,placement:"bottom"}),g=(0,ua.useMemo)(()=>t.find(m=>m.value===e),[t,e]),y=(0,ua.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),b=window.innerHeight,C=Math.min(t.length*34+16,260),v=b-m.bottom<C&&m.top>C,_=v?m.top-6:m.bottom+6,k=r?m.width:void 0;f({top:_,left:m.left,width:k,placement:v?"top":"bottom"})},[t.length,r]);(0,ua.useEffect)(()=>{if(!s)return;y();let m=S=>{let v=S.target;d.current?.contains(v)||p.current?.contains(v)||u(!1)},b=S=>{S.key==="Escape"&&u(!1)},C=()=>{y()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",C,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",y)}},[s,y]);let w=(0,ua.useCallback)(m=>{m.stopPropagation(),!n&&u(b=>!b)},[n]),x=(0,ua.useCallback)((m,b)=>{b||(a?.(m),u(!1))},[a]),h=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Lt.jsxs)("button",{ref:d,type:"button",className:h,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,Lt.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,Lt.jsx)(ku,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,ZS.createPortal)((0,Lt.jsx)("div",{ref:p,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,Lt.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,C=!!m.subtitle||!!m.badge||!!m.icon;return(0,Lt.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${C?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>x(m.value,m.disabled),children:[m.icon?(0,Lt.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,Lt.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,Lt.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,Lt.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,Lt.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,Lt.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,Lt.jsx)(Za,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Do=R(J(),1),WS=R(wo(),1),fo=R(X(),1),ed=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,Do.useState)(!1),i=(0,Do.useRef)(null),s=(0,Do.useRef)(null),[u,d]=(0,Do.useState)({left:0}),p=(0,Do.useCallback)(()=>{if(!i.current)return;let f=i.current.getBoundingClientRect(),g=a.startsWith("top"),y=a.endsWith("Right"),w=g?void 0:f.bottom+6,x=g?window.innerHeight-f.top+6:void 0,h=y?f.right-140:Math.max(10,f.left+f.width/2-70);d({top:w,bottom:x,left:h})},[a]);(0,Do.useEffect)(()=>{if(!r)return;p();let f=y=>{let w=y.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=y=>{y.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",f,!0),window.addEventListener("keydown",g),window.addEventListener("resize",p),()=>{window.removeEventListener("mousedown",f,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",p)}},[r,p]);let c=f=>{f.stopPropagation(),l(g=>!g)};return(0,fo.jsxs)(fo.Fragment,{children:[(0,fo.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,WS.createPortal)((0,fo.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:f=>f.stopPropagation(),children:(0,fo.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(f=>{let g=t.includes(f.key);return(0,fo.jsxs)("button",{type:"button",disabled:f.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${f.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{f.disabled||(f.onClick?.(),l(!1))},children:[f.icon?(0,fo.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:f.icon}):null,(0,fo.jsx)("span",{className:"wf-custom-dropdown-item-text",children:f.label})]},f.key)})})}),document.body):null]})};var KS=R(J(),1),rx=R(X(),1),lx=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,KS.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,rx.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,rx.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var QS=R(J(),1),$S=R(wo(),1);var Ro=R(X(),1),fl=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:l,children:i})=>((0,QS.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,$S.createPortal)((0,Ro.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Ro.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,Ro.jsxs)("div",{className:"wf-modal-header",children:[(0,Ro.jsx)("div",{className:"wf-modal-title",children:a}),(0,Ro.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Ro.jsx)(St,{size:16})})]}),(0,Ro.jsx)("div",{className:["wf-modal-body",l].filter(Boolean).join(" "),children:i}),o?(0,Ro.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Gf=R(J(),1),JS=R(rh(),1);var pl=R(X(),1),td=null,L8=()=>{let[e,t]=(0,Gf.useState)([]);return(0,Gf.useEffect)(()=>(td=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{td=null}),[]),e.length===0?null:(0,pl.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=Hu,n="#60a5fa";return a.type==="success"?(o=dr,n="#34d399"):a.type==="warning"?(o=yr,n="#fb923c"):a.type==="error"&&(o=ur,n="#f87171"),(0,pl.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,pl.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,pl.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function _8(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,JS.createRoot)(t).render((0,pl.jsx)(L8,{}))}function Vf(e,t,a=2500){_8();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;td?td({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{td?.({id:o,type:e,content:t,durationMs:a})},50)}var Wt={success:(e,t)=>Vf("success",e,t),warning:(e,t)=>Vf("warning",e,t),error:(e,t)=>Vf("error",e,t),info:(e,t)=>Vf("info",e,t)};var eL=e=>{let t,a=new Set,o=(u,d)=>{let p=typeof u=="function"?u(t):u;if(!Object.is(p,t)){let c=t;t=d??(typeof p!="object"||p===null)?p:Object.assign({},t,p),a.forEach(f=>f(t,c))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,i);return i},tL=(e=>e?eL(e):eL);var ad=R(J(),1);var k8=e=>e;function I8(e,t=k8){let a=ad.default.useSyncExternalStore(e.subscribe,ad.default.useCallback(()=>t(e.getState()),[e,t]),ad.default.useCallback(()=>t(e.getInitialState()),[e,t]));return ad.default.useDebugValue(a),a}var aL=e=>{let t=tL(e),a=o=>I8(t,o);return Object.assign(a,t),a},Ui=(e=>e?aL(e):aL);var iL=R(J(),1);var oL=e=>Symbol.iterator in e,nL=e=>"entries"in e,rL=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},M8=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function lL(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:oL(e)&&oL(t)?nL(e)&&nL(t)?rL(e,t):M8(e,t):rL({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function sL(e){let t=iL.default.useRef(void 0);return a=>{let o=e(a);return lL(t.current,o)?t.current:t.current=o}}var dL={stroke:"#b1b1b7",strokeWidth:2},Xf={type:"animated",style:dL,animated:!1};function uL(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function E8(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function cL(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:E8(e),...Xf,...e,data:{...t,createdAt:a},animated:e.animated??Xf.animated,style:{...dL,...e.style??{}},sourceHandle:uL(e.sourceHandle),targetHandle:uL(e.targetHandle)}}var fL={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},N8={text:"text-editor",image:"import",video:"import",audio:"import"};var pL={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Yf(e,t){return{label:"",materialType:e,status:"empty",selectedTool:N8[e],params:{},failStrategy:"abort",...t}}var T8={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function mL(e){return T8[e]??[]}function A8(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function D8(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=fL[n];if(l)for(let i of l){let s=pL[i];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function jf(e,t){let a=A8(e),o=D8(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function Zf(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!jf(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of Nh(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function Wf(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function R8(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function gL(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(p=>p.id===d.id))return Wf(e,"rejected","duplicate_node");a.add(d.id)}let o=R8([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return Wf(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return Wf(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(d=>!l.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!l.has(d.source)&&!l.has(d.target))];for(let d of t.addEdges??[]){let p=cL(d),c=Zf(p,i,u);if(!c.valid)return Wf(e,"rejected",c.reasonCode??"invalid_connection");u.push(p)}return{nodes:i,edges:u,status:"allowed"}}function hL(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var Kf=!1,Qf=!1;function $f(){Kf=!0}function xL(){Qf=!0,Kf=!1}function bL(){Kf=!1,Qf=!1}function z8(){Qf=!1}function ix(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function sx(e,t){return{nodes:e.slice(),edges:t.slice()}}function od(e,t){return t||(Qf&&e===0?"reset":Kf&&e===0?"user-delete":"autosave")}function Jf(e){let t=sx(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:ix({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(z8(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var O8=50,P8=300;function nd(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Kt={current:null,lastPushAt:0},se=Ui()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&$f(),e({nodes:Jh(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:ex(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&$f();let o=t(),n=gL({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return hL(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&$f(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{bL(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Kt.current=nd(a,o),Kt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=nd(t().nodes,t().edges);if(Kt.current&&Kt.current.sig===a.sig)return;let o=Date.now();if(Kt.current&&o-Kt.lastPushAt>=P8){let n=Kt.current;e(r=>({past:[...r.past,n].slice(-O8),future:[]})),Kt.lastPushAt=o}Kt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=nd(o,n);Kt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=nd(o,n);Kt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Kt.current=nd(a,o),Kt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{xL(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Kt.current=null,Kt.lastPushAt=0}})),yL=()=>se(sL(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var wL=()=>se(e=>e.past.length>0),vL=()=>se(e=>e.future.length>0);var TL=R(J(),1);var CL={total:0,completed:0,running:0,pending:0,percentage:0},Ve=Ui()(e=>({executionId:null,status:"idle",error:null,progress:CL,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:CL,nodeStatuses:{}})}));var SL=R(J(),1),LL="(prefers-reduced-motion: reduce)";function B8(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(LL);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function H8(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(LL).matches}function _L(){return(0,SL.useSyncExternalStore)(B8,H8)}var zo=R(J(),1),Ut=R(X(),1),U8=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:u})=>{let p=(0,zo.useId)().replace(/:/g,""),c=`${p}-glow`,f=`${p}-grad`,g=`beam-flow-${p}`,y=(0,zo.useRef)(null),[w,x]=(0,zo.useState)(0);(0,zo.useEffect)(()=>{y.current&&x(y.current.getTotalLength())},[e]);let{dashSize:h,gapSize:m,offsetRange:b}=(0,zo.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,k=_*(1/3),T=_*(2/3);return{dashSize:k,gapSize:T,offsetRange:_}},[w]),C=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-b:0}px; }
            to { stroke-dashoffset: ${s?0:-b}px; }
        }
    `;return(0,Ut.jsxs)("g",{className:u,children:[(0,Ut.jsxs)("defs",{children:[(0,Ut.jsx)("style",{children:C}),(0,Ut.jsxs)("filter",{id:c,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,Ut.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,Ut.jsxs)("feMerge",{children:[(0,Ut.jsx)("feMergeNode",{in:"blur"}),(0,Ut.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,Ut.jsxs)("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",children:[(0,Ut.jsx)("stop",{offset:"0%",stopColor:n}),(0,Ut.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,Ut.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,Ut.jsx)("path",{ref:y,d:e,fill:"none",stroke:"none"}),w>0&&(0,Ut.jsx)("path",{d:e,stroke:`url(#${f})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${h} ${m}`,fill:"none",filter:`url(#${c})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},kL=U8;var rd=R(J(),1);var EL=R(J(),1);var F8={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u7248\u672C\u51B2\u7A81\uFF08\u5DE5\u4F5C\u533A\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u7248\u672C\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u533A\u5DF2\u5728\u5176\u4ED6\u4F1A\u8BDD\u88AB\u4FEE\u6539\u3002","app.conflictOverwrite":"\u5F3A\u5236\u8986\u76D6\u8FDC\u7AEF\u7248\u672C","app.conflictReload":"\u653E\u5F03\u672C\u5730\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u4E0A\u4F20","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25"},IL=F8;var q8={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Version conflict (modified elsewhere)","app.conflictBanner":"Conflict detected: Workspace was updated in another session.","app.conflictOverwrite":"Overwrite Remote","app.conflictReload":"Discard and Reload","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local upload","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources"},ML=q8;var ux={zh:IL,en:ML},ep="zh",dx=new Set;function V8(e){return dx.add(e),()=>dx.delete(e)}function G8(){return ep}function NL(e){let t=e==="en"?"en":"zh";if(t!==ep){ep=t;for(let a of dx)a()}}function hn(e){return ux[ep][e]??ux.zh[e]??ux.en[e]??e}function ge(){return(0,EL.useSyncExternalStore)(V8,G8),hn}var ap=R(X(),1),tp=28,X8=({edgeId:e,x:t,y:a})=>{let o=ge(),n=se(i=>i.applyCanvasInputMutation),r=(0,rd.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,rd.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,ap.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-tp/2,y:a-tp/2,width:tp,height:tp,children:(0,ap.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,ap.jsx)($u,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},op=(0,rd.memo)(X8);var Qa=R(X(),1),Y8=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[u,d,p]=Ti({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),c=Ve(w=>w.nodeStatuses[s]==="running"),f=_L(),g=i?"var(--wb-accent)":"var(--wb-edge)",y=i?2.5:2;return c&&f?(0,Qa.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Qa.jsx)(ir,{id:e,path:u,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:y}}),(0,Qa.jsx)(op,{edgeId:e,x:d,y:p})]}):c?(0,Qa.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Qa.jsx)(ir,{id:e,path:u,style:{stroke:g,strokeWidth:y,opacity:0}}),(0,Qa.jsx)(kL,{pathD:u,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:y}),(0,Qa.jsx)(op,{edgeId:e,x:d,y:p})]}):(0,Qa.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Qa.jsx)(ir,{id:e,path:u,style:{stroke:g,strokeWidth:y}}),(0,Qa.jsx)(op,{edgeId:e,x:d,y:p})]})},AL=(0,TL.memo)(Y8);var Fi=R(J(),1);function $a(e){e.stopPropagation()}function cx(e){e.preventDefault(),e.stopPropagation()}var fe=R(X(),1),j8=[{type:"text",Icon:sa,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:mn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:co,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:Ka,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Ma,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:Wa,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],Z8=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:d,isAssetsOpen:p=!1})=>{let c=ge(),[f,g]=(0,Fi.useState)(!1),y=u!==void 0?u:f,w=d||(()=>g(m=>!m)),x=(0,Fi.useCallback)(m=>{e(m),d?d():g(!1)},[e,d]),h=[{key:"select",icon:(0,fe.jsx)(Bi,{size:15}),label:c("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,fe.jsx)(Pi,{size:15}),label:c("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,fe.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:$a,onMouseDown:$a,children:[(0,fe.jsxs)("div",{style:{position:"relative"},children:[(0,fe.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${y?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:cx,title:c("toolbar.addNode"),children:(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(Ke,{size:20})})}),y&&(0,fe.jsx)("div",{className:"wf-dock-add-popover",children:j8.map(m=>(0,fe.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>x(m.type),onContextMenu:cx,children:[(0,fe.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,fe.jsx)(m.Icon,{size:18})}),(0,fe.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,fe.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,fe.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,fe.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,fe.jsx)(ed,{items:h,selectedKeys:[r],placement:"topCenter",children:(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,fe.jsx)(Bi,{size:16}):(0,fe.jsx)(Pi,{size:16})}),(0,fe.jsx)(Mu,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,fe.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${p?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:c("toolbar.assets"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(Ou,{size:17})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,fe.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(dl,{size:16})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(il,{size:16})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(so,{size:16})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},DL=(0,Fi.memo)(Z8);var qi=R(J(),1);var xe=R(X(),1),W8={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},K8=e=>Math.round(e.transform[2]*100),Q8=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:u})=>{let d=ge(),{zoomIn:p,zoomOut:c,fitView:f}=_a(),g=we(K8),y=Ve(T=>T.status),w=Ve(T=>T.progress),x=Ve(T=>T.error),h=y==="pending"||y==="running",m=y==="paused",b=y==="completed"||y==="error"||y==="cancelled",C=w.total>0,S=(0,qi.useCallback)(()=>{f({duration:250,padding:.1})},[f]),v=(0,qi.useCallback)(()=>{p({duration:150})},[p]),_=(0,qi.useCallback)(()=>{c({duration:150})},[c]),k=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,xe.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:$a,onMouseDown:$a,children:[r&&(h||m||b&&u?(0,xe.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${h||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[h||m?(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${y}`,children:[d(W8[y]),C&&` (${w.completed}/${w.total})`]}),h?(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:d("exec.pauseTitle"),children:(0,xe.jsx)(Yu,{size:14})}):(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:d("exec.resumeTitle"),children:(0,xe.jsx)(ka,{size:14})}),(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,xe.jsx)(St,{size:14})})]}):(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:x||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,xe.jsx)(ka,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&u&&(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,xe.jsx)(Zu,{size:14})})]}):(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:x||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,xe.jsx)(ka,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,xe.jsxs)("div",{className:"wf-header-capsule",children:[(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:d("header.fitView"),children:(0,xe.jsx)(Vu,{size:15})}),(0,xe.jsx)("div",{className:"wf-header-capsule__divider"}),(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:d("header.zoomOut"),children:(0,xe.jsx)(Gu,{size:15})}),(0,xe.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:S,title:d("header.fitView"),children:[g,"%"]}),(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:d("header.zoomIn"),children:(0,xe.jsx)(Ke,{size:15})})]}),(0,xe.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,xe.jsx)(rl,{size:15})}),(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,xe.jsx)(Ju,{size:15})}),(0,xe.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,xe.jsx)(qu,{size:15})}),n&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("div",{className:"wf-header-capsule__divider"}),(0,xe.jsx)(ed,{items:k,selectedKeys:[o],placement:"bottomRight",children:(0,xe.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,xe.jsx)(xr,{size:15})})})]})]})]})},RL=(0,qi.memo)(Q8);var Oo=R(J(),1);var de=R(X(),1),$8=[{key:"all",label:"\u5168\u90E8",icon:fr},{key:"character",label:"\u89D2\u8272 (1)",icon:Ia},{key:"scene",label:"\u573A\u666F (2)",icon:uo},{key:"prop",label:"\u9053\u5177 (3)",icon:Qu},{key:"style",label:"\u98CE\u683C (4)",icon:Ia},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:sa},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:fr},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:Wa}],J8=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,Oo.useState)(o),[i,s]=(0,Oo.useState)(""),[u,d]=(0,Oo.useState)([]),[p,c]=(0,Oo.useState)(!1),[f,g]=(0,Oo.useState)(null),y=(0,Oo.useCallback)(async()=>{c(!0),g(null);try{let h=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${h}`),b=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(b=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let C=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(C=_.artifacts.map(k=>({id:k.id,name:k.name||k.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:k.prompt||k.agent,real_path:k.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(k.id)}`,tags:[k.type||"artifact"],updatedAt:k.createdAt})))}}let S=[...b,...C];d(S)}catch(h){g(h.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{c(!1)}},[r]);(0,Oo.useEffect)(()=>{e&&y()},[e,y]);let w=h=>{l(h),n?.(h)},x=u.filter(h=>{if(!i.trim())return!0;let m=i.toLowerCase();return h.name.toLowerCase().includes(m)||h.description&&h.description.toLowerCase().includes(m)||h.tags&&h.tags.some(b=>b.toLowerCase().includes(m))});return e?(0,de.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:$a,onMouseDown:$a,onClick:h=>h.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,de.jsx)(fr,{size:18}),(0,de.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,de.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:y,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,de.jsx)(hr,{size:14,className:p?"wf-spin":""})}),(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,de.jsx)(St,{size:16})})]})]}),(0,de.jsx)("div",{className:"wf-assets-drawer__categories",children:$8.map(h=>{let m=h.icon,b=r===h.key;return(0,de.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${b?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(h.key),children:[(0,de.jsx)(m,{size:13}),(0,de.jsx)("span",{children:h.label})]},h.key)})}),(0,de.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,de.jsx)(sl,{size:14,className:"wf-assets-drawer__search-icon"}),(0,de.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:h=>s(h.target.value)}),i&&(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,de.jsx)(St,{size:12})})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__body",children:[p&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(hr,{size:20,className:"wf-spin"}),(0,de.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),f&&!p&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,de.jsx)("span",{children:f}),(0,de.jsx)("button",{type:"button",onClick:y,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!p&&!f&&x.length===0&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(fr,{size:32,strokeWidth:1.2}),(0,de.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,de.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!p&&!f&&x.length>0&&(0,de.jsx)("div",{className:"wf-assets-drawer__grid",children:x.map(h=>(0,de.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(h),title:`\u70B9\u51FB\u5C06\u300C${h.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,de.jsxs)("div",{className:"wf-assets-card__preview",children:[h.type==="scene"||h.type==="character"||h.type==="artifacts"?(0,de.jsx)("img",{src:h.previewUrl,alt:h.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,de.jsx)(sa,{size:24,className:"wf-assets-card__file-icon"}),(0,de.jsx)("span",{className:"wf-assets-card__type-tag",children:h.type})]}),(0,de.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,de.jsx)("div",{className:"wf-assets-card__name",children:h.name}),h.description&&(0,de.jsx)("div",{className:"wf-assets-card__desc",children:h.description})]}),(0,de.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(h)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,de.jsx)(Ke,{size:14}),(0,de.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},h.id))})]})]}):null},zL=J8;var _t=R(X(),1),eD=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],tD=({isOpen:e,onClose:t})=>e?(0,_t.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:$a,onMouseDown:$a,onClick:t,children:(0,_t.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,_t.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,_t.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,_t.jsx)(Uu,{size:18}),(0,_t.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,_t.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,_t.jsx)(St,{size:16})})]}),(0,_t.jsx)("div",{className:"wf-shortcuts-modal__body",children:eD.map(a=>(0,_t.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,_t.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,_t.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,_t.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,_t.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,_t.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,_t.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,OL=tD;var Ja=R(J(),1),HL=R(wo(),1);var kt=R(X(),1),PL=278,gl=12,aD=8,fx=160,ml=18,oD={AudioLines:(0,kt.jsx)(nl,{size:ml}),ImageGen:(0,kt.jsx)(mn,{size:ml}),Mic:(0,kt.jsx)(ll,{size:ml}),PersonStanding:(0,kt.jsx)(ju,{size:ml}),TextGen:(0,kt.jsx)(gn,{size:ml}),VideoGen:(0,kt.jsx)(co,{size:ml})},nD={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function BL(e){return e?nD[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function rD(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-PL:e;return Math.min(Math.max(gl,o),Math.max(gl,a-PL-gl))}var lD=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,Ja.useRef)(null),[u,d]=(0,Ja.useState)({left:t,top:a,maxHeight:fx});(0,Ja.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?fx:window.innerHeight,f=rD(t,i),g=a+aD,y=Math.max(gl,c-gl-fx),w=Math.min(Math.max(gl,g),y);d({left:f,top:w,maxHeight:Math.max(0,c-w-gl)})},[i,e,t,a]),(0,Ja.useEffect)(()=>{if(!e)return;let c=g=>{s.current&&!s.current.contains(g.target)&&l()},f=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",f)}},[l,e]);let p=(0,Ja.useMemo)(()=>n.map(c=>(0,kt.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,kt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,kt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:BL(c.icon).bg,color:BL(c.icon).color},children:oD[c.icon]??(0,kt.jsx)(Ia,{size:ml})}):null,(0,kt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,kt.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,kt.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,HL.createPortal)((0,kt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,kt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,kt.jsx)("div",{className:"wf-action-menu__list",children:p})]}),document.body)},np=(0,Ja.memo)(lD);var eo=R(J(),1),UL=R(wo(),1);var Re=R(X(),1),iD=210,sD=230,uD=260,dD=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let p=(0,eo.useRef)(null),[c,f]=(0,eo.useState)("main"),g=ge();(0,eo.useEffect)(()=>{a&&f("main")},[a]),(0,eo.useEffect)(()=>{if(!a)return;let b=S=>{p.current&&!p.current.contains(S.target)&&n()},C=S=>{S.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",C)}},[a,n]);let y=(0,eo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,Re.jsx)(Ke,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,u,d,g]),w=(0,eo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Re.jsx)(gn,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Re.jsx)(uo,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Re.jsx)(co,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Re.jsx)(nl,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,Re.jsx)(Ma,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,Re.jsx)(Wa,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let x=c==="add-node"?sD:iD,h=Math.min(e,window.innerWidth-x-8),m=Math.min(t,window.innerHeight-uD-8);return(0,UL.createPortal)((0,Re.jsx)("div",{ref:p,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:h,top:m},onContextMenu:b=>b.preventDefault(),children:c==="main"?y.map(b=>(0,Re.jsxs)(eo.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Re.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:C=>{C.stopPropagation(),b.action==="open-add-node"?f("add-node"):r(b.action,o)},children:[b.icon?(0,Re.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,Re.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,Re.jsx)(Oi,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,Re.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,Re.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Re.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Re.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),f("main")},title:g("menu.back"),children:(0,Re.jsx)(Iu,{size:16})}),(0,Re.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Re.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(b=>(0,Re.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:C=>{C.stopPropagation(),l?.(b.type),n()},children:[(0,Re.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,Re.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,Re.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,Re.jsx)(Oi,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},FL=dD;var qL=R(J(),1),VL=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:p,onToggleAddMenu:c,onSetPointerMode:f,onFitView:g,onResetZoom:y,onCategoryKey:w,isAssetsOpen:x=!1,enabled:h=!0})=>{(0,qL.useEffect)(()=>{if(!h)return;let m=b=>{let C=b.target;if(["INPUT","TEXTAREA"].includes(C.tagName)||C.isContentEditable)return;let S=b.metaKey||b.ctrlKey,v=b.key.toLowerCase();if(!S&&x&&/^[1-6]$/.test(b.key)){b.preventDefault(),w?.(parseInt(b.key,10));return}if(!S&&v==="a"){b.preventDefault(),u?.();return}if(!S&&v==="v"){b.preventDefault(),f?.("select");return}if(!S&&v==="h"){b.preventDefault(),f?.("pan");return}if(!S&&v==="n"){b.preventDefault(),c?.();return}if(!S&&v==="m"){b.preventDefault(),p?.();return}if(b.key==="?"||b.shiftKey&&b.key==="/"){b.preventDefault(),d?.();return}if(S&&b.key==="1"){b.preventDefault(),g?.();return}if(S&&b.key==="0"){b.preventDefault(),y?.();return}if((b.key==="Delete"||b.key==="Backspace")&&l&&!S){b.preventDefault(),o?.();return}if(b.key==="Escape"){b.preventDefault(),x?u?.():l&&n?.();return}if(S&&v==="d"&&l){b.preventDefault(),r?.();return}if(S&&v==="c"&&!b.shiftKey){b.preventDefault(),e?.();return}if(S&&v==="v"){b.preventDefault(),t?.();return}if(S&&v==="a"){b.preventDefault(),a?.();return}if(S&&v==="z"&&!b.shiftKey){b.preventDefault(),i?.();return}S&&v==="z"&&b.shiftKey&&(b.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[h,e,t,a,o,n,r,l,i,s,u,d,p,c,f,g,y,w,x])};var po=R(J(),1);function rp(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function GL(e,t,a){return px(e,t,a).valid}function px(e,t,a){let o=Zf(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var mx={minZoom:.23,maxZoom:1.29,defaultZoom:1},cD={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},XL={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},fD={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},pD={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},YL={portrait:cD,square:XL,video_landscape:fD,audio_compact:pD};function gx(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function jL(e){return YL[gx(e)]}function ZL(e,t){let a=YL[t]||XL;return Math.round(e/a.aspectRatio)}function wr(e){return jL(e).default.width}function WL(e){return jL(e).default.height}function lp(e,t,a){let o=Yf(e,{status:"empty",nodeWidth:wr(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function hl(e,t,a){return{nodes:[lp(e,t,a)],edges:[]}}function hx(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function mD(e,t){return`${e}-${t}`}function ip(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function sp(e){return mL(e).map(t=>{let a=String(t.targetTool);return{key:mD(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function KL(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var gD={visible:!1,x:0,y:0,options:[]};function QL(e){let t=ge(),{screenToFlowPosition:a}=_a(),o=se(f=>f.applyCanvasInputMutation),n=(0,po.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,po.useState)(gD),i=(0,po.useRef)(null),s=(0,po.useRef)(null),u=(0,po.useCallback)((f,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let y=se.getState().nodes.find(x=>x.id===g.nodeId),w=y?.data?.materialType;if(!y||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),d=(0,po.useCallback)((f,g)=>{let y=g.fromNode?.id??null,w=g.toNode?.id??null,x=i.current,h=x?sp(x.materialType):[],m=null;if(!g.isValid&&y&&w){let C=se.getState(),S=px({source:y,target:w,sourceHandle:null,targetHandle:null},C.nodes,C.edges);m=S.valid?null:t(rp(S.reasonCode))}let b=KL({isValid:g.isValid??null,fromNodeId:y,toNodeId:w,startedFromSource:!!x,hasOptions:h.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),Wt.warning(b.reason),i.current=null;return}if(b.type==="menu"&&x){let C="changedTouches"in f?f.changedTouches[0]:f;if(!C){i.current=null;return}let{clientX:S,clientY:v}=C;s.current=a({x:S,y:v}),l({visible:!0,x:S,y:v,options:h.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),p=(0,po.useCallback)(f=>{let g=i.current,y=s.current,w=ip(f);if(g&&y&&w){let x=hl(w.targetMaterialType,y),h=x.nodes[0];h&&o({addNodes:x.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:h.id,targetHandle:"in"}]})}l(x=>({...x,visible:!1})),i.current=null,s.current=null},[o]),c=(0,po.useCallback)(()=>{l(f=>({...f,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:p,onMenuClose:c}}var Po=R(J(),1);var zt=[];for(let e=0;e<256;++e)zt.push((e+256).toString(16).slice(1));function $L(e,t=0){return(zt[e[t+0]]+zt[e[t+1]]+zt[e[t+2]]+zt[e[t+3]]+"-"+zt[e[t+4]]+zt[e[t+5]]+"-"+zt[e[t+6]]+zt[e[t+7]]+"-"+zt[e[t+8]]+zt[e[t+9]]+"-"+zt[e[t+10]]+zt[e[t+11]]+zt[e[t+12]]+zt[e[t+13]]+zt[e[t+14]]+zt[e[t+15]]).toLowerCase()}var xx,hD=new Uint8Array(16);function bx(){if(!xx){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");xx=crypto.getRandomValues.bind(crypto)}return xx(hD)}var xD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),yx={randomUUID:xD};function bD(e,t,a){e=e||{};let o=e.random??e.rng?.()??bx();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return $L(o)}function yD(e,t,a){return yx.randomUUID&&!t&&!e?yx.randomUUID():bD(e,t,a)}var up=yD;function JL(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function wD(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function e_(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=wD(o),l,i;if(t)l=t.x,i=t.y;else{let p=a?50:30;l=r.x+p,i=r.y+p}let s=new Map,u=o.map(p=>{let c=up();return s.set(p.id,c),{...p,id:c,position:{x:l+(p.position.x-r.x),y:i+(p.position.y-r.y)},selected:!0}}),d=n.map(p=>({...p,id:up(),source:s.get(p.source)||p.source,target:s.get(p.target)||p.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:l,y:i}}}function t_(e,t){let a=(0,Po.useRef)({nodes:[],edges:[]}),o=(0,Po.useRef)(null),n=a.current.nodes.length>0,r=(0,Po.useCallback)(()=>{let p=se.getState(),c=JL(p.nodes,p.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),l=(0,Po.useCallback)(p=>{let c=e_(a.current,p,o.current);if(!c)return;o.current=c.newPastePosition;let f=se.getState();f.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:f.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,Po.useCallback)(()=>{r(),l()},[r,l]),s=(0,Po.useCallback)(()=>{let p=se.getState(),c=p.nodes.filter(f=>f.selected).map(f=>f.id);c.length!==0&&p.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,Po.useCallback)(()=>{e(p=>p.map(c=>({...c,selected:!0})))},[e]),d=(0,Po.useCallback)(()=>{e(p=>p.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var Bo=R(J(),1);function a_(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:p,onAddNode:c}=e,[f,g]=(0,Bo.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),y=(0,Bo.useCallback)((S,v)=>{S.preventDefault();let _={type:"pane"};v?_={type:"node",nodeId:v.id}:se.getState().nodes.filter(T=>T.selected).length>1&&(_={type:"selection"}),g({visible:!0,x:S.clientX,y:S.clientY,context:_})},[]),w=(0,Bo.useCallback)((S,v)=>{y(S,v)},[y]),x=(0,Bo.useCallback)(S=>{y(S)},[y]),h=(0,Bo.useCallback)(S=>{y(S)},[y]),m=(0,Bo.useCallback)(()=>{g(S=>({...S,visible:!1}))},[]),b=(0,Bo.useCallback)((S,v)=>{let _=t({x:f.x,y:f.y});switch(S){case"copy":{if(v.type==="node"){let T=se.getState().nodes.find(N=>N.id===v.nodeId);T&&!T.selected&&(s(),a(N=>N.map(U=>U.id===v.nodeId?{...U,selected:!0}:U)))}o();break}case"paste":n(_);break;case"duplicate":r();break;case"delete":{if(v.type==="node"){let k=se.getState();k.nodes.find(N=>N.id===v.nodeId)?.selected?l():k.applyCanvasInputMutation({removeNodeIds:[v.nodeId]})}else l();break}case"undo":u();break;case"redo":d();break;case"select-all":i();break;case"execute-selection":{let k=se.getState().nodes.filter(T=>T.selected).map(T=>T.id);k.length>0&&p?.(k);break}case"execute-node":{v.type==="node"&&p?.([v.nodeId]);break}}m()},[f.x,f.y,t,s,a,o,n,r,l,u,d,i,m,p]),C=(0,Bo.useCallback)(S=>{let v=t({x:f.x,y:f.y});c?.(S,v),m()},[f.x,f.y,t,c,m]);return{menu:f,handleNodeContextMenu:w,handlePaneContextMenu:x,handleSelectionContextMenu:h,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:C}}var vD=R(J(),1),wx=new Map;function dp(e){wx.set(e.type,e)}function o_(){let e={};for(let[t,a]of wx)e[t]=a.component;return e}function n_(e,t,a){let o=wx.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var et=R(J(),1);var Ge=R(J(),1);function r_(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var mo=R(X(),1),CD=4,SD=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=ge(),[l,i]=(0,Ge.useState)(!1),[s,u]=(0,Ge.useState)(!1),[d,p]=(0,Ge.useState)(null),c=(0,Ge.useRef)(null),f=(0,Ge.useRef)(null),g=(0,Ge.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),y=e==="left",w=a==="plus"&&!!o&&o.length>0,x=ax(I=>I.inProgress),{screenToFlowPosition:h}=_a(),m=(0,Ge.useCallback)(()=>{f.current&&(f.current.style.setProperty("--wf-handle-offset-x","0px"),f.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Ge.useEffect)(()=>{if(a!=="plus"){m();return}let I=c.current,A=f.current;if(!I||!A)return;let z=V=>{if(s)return;let D=I.getBoundingClientRect(),F=D.left+D.width/2,j=D.top+D.height/2,{x:W,y:Z}=r_(e,V.clientX-F,V.clientY-j);A.style.setProperty("--wf-handle-offset-x",`${W}px`),A.style.setProperty("--wf-handle-offset-y",`${Z}px`)};return I.addEventListener("pointermove",z),()=>{I.removeEventListener("pointermove",z)}},[s,m,e,a]),(0,Ge.useEffect)(()=>{if(!s){m(),p(null);return}let I=()=>{let A=c.current;if(!A)return;let z=A.getBoundingClientRect();p({x:y?z.right:z.left,y:z.bottom})};return I(),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),()=>{window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)}},[s,y,m]);let b=(0,Ge.useCallback)(()=>{i(!0)},[]),C=(0,Ge.useCallback)(()=>{i(!1),m()},[m]),S=(0,Ge.useCallback)(I=>{let A=c.current;!A||I===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(I)||A.releasePointerCapture(I)},[]),v=(0,Ge.useCallback)(()=>{S(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[S]),_=(0,Ge.useCallback)(I=>{I.button===0&&(typeof I.currentTarget.setPointerCapture=="function"&&I.currentTarget.setPointerCapture(I.pointerId),g.current.pointerId=I.pointerId,g.current.startX=I.clientX,g.current.startY=I.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),k=(0,Ge.useCallback)(I=>{if(g.current.pointerId!==I.pointerId)return;Math.hypot(I.clientX-g.current.startX,I.clientY-g.current.startY)>=CD&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),T=(0,Ge.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),N=(0,Ge.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.suppressClick=!1,v())},[v]),U=(0,Ge.useCallback)(I=>{if(I.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&u(A=>!A)},[w]),H=(0,Ge.useCallback)(()=>{let I=d;if(!I){let A=c.current;if(!A)return;let z=A.getBoundingClientRect();I={x:y?z.right:z.left,y:z.bottom}}return{screenPosition:I,flowPosition:h(I)}},[y,d,h]),L=(0,Ge.useCallback)(I=>{n?.(I,H()),u(!1)},[n,H]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",x?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,mo.jsxs)(Ri,{id:y?"in":"out",type:y?"target":"source",position:y?ae.Left:ae.Right,isConnectable:!0,className:M,style:E,children:[(0,mo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,mo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,mo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,mo.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:C,onPointerDown:_,onPointerMove:k,onPointerUp:T,onPointerCancel:N,onClick:U,children:(0,mo.jsx)("div",{ref:f,className:"wf-handle__plus",children:(0,mo.jsx)("div",{className:"wf-handle__plus-button",children:(0,mo.jsx)(Ke,{size:24,strokeWidth:2.5})})})}):null,w&&d?(0,mo.jsx)(np,{visible:s,x:d.x,y:d.y,align:y?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},xn=(0,Ge.memo)(SD);var go=R(J(),1);var Ot=R(X(),1);function LD(e){let t=ge();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var _D=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=ge(),u=(0,go.useRef)(e),[d,p]=(0,go.useState)(e==="completed"?"complete":"idle"),[c,f]=(0,go.useState)(1),[g,y]=(0,go.useState)(e==="completed"?1:0),[w,x]=(0,go.useState)(e==="pending"||e==="generating");(0,go.useEffect)(()=>{let U=u.current;if(u.current=e,(U==="pending"||U==="generating")&&e==="completed"){p("crossfading"),x(!0),requestAnimationFrame(()=>{f(0),y(1)});let H=setTimeout(()=>{p("complete"),x(!1)},i+50);return()=>clearTimeout(H)}U==="completed"&&(e==="pending"||e==="generating")&&(p("idle"),x(!0),f(1),y(0)),(e==="pending"||e==="generating")&&(x(!0),f(1),y(0),p("idle")),e==="failed"&&(x(!1),p("idle")),U===e&&e==="completed"&&(p("complete"),y(1),x(!1))},[e,i]);let h=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",C=s(e==="pending"?"node.preparing":"node.generating"),S=LD(a),v=(0,go.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,k=()=>(0,Ot.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:c},children:(0,Ot.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,Ot.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,Ot.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,Ot.jsx)("span",{className:"wf-gsc__progress-text",children:C})})]})}),T=()=>(0,Ot.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,Ot.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,Ot.jsx)(St,{size:24})}),(0,Ot.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),S?(0,Ot.jsx)("span",{className:"wf-gsc__failed-message",children:S}):null,o?(0,Ot.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,Ot.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,Ot.jsx)(hr,{size:14}),s("node.regenerate")]}):null]}),N=U=>(0,Ot.jsx)("div",{className:`${l} ${U?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,Ot.jsxs)("div",{className:`wf-gsc ${h?_:""} ${l}`,children:[(h||w)&&k(),m&&T(),(b||d==="crossfading")&&N(d==="crossfading")]})},l_=_D;var It=R(J(),1);function vr(e){return e>0?1/e:1}function i_(e,t,a){return!!e&&!t&&a!=="running"}function s_(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var xl=R(X(),1),u_=24,d_=30,kD={text:sa,image:mn,video:co,audio:Ka,table:Ma},ID=({label:e,materialType:t,onLabelChange:a,trailing:o})=>{let n=ge(),r=n(`node.type.${t}`),l=e||r,i=kD[t],{zoom:s}=sr(),[u,d]=(0,It.useState)(!1),[p,c]=(0,It.useState)(l),f=(0,It.useRef)(null),g=(0,It.useMemo)(()=>vr(s),[s]);(0,It.useEffect)(()=>{u&&f.current&&(f.current.focus(),f.current.select())},[u]),(0,It.useEffect)(()=>{u||c(l)},[l,u]);let y=(0,It.useCallback)(C=>{C.stopPropagation(),d(!0),c(l)},[l]),w=(0,It.useCallback)(()=>{let S=p.trim()||r;d(!1),S!==e&&a&&a(S)},[p,r,e,a]),x=(0,It.useCallback)(()=>{d(!1),c(l)},[l]),h=(0,It.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),w()):C.key==="Escape"&&(C.preventDefault(),x())},[w,x]),m=(0,It.useCallback)(C=>{let S=C.target.value;S.length<=d_&&c(S)},[]);return(0,xl.jsxs)("div",{className:"wf-node-header",style:{top:-(u_+4*g),height:u_,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,xl.jsx)("span",{className:"wf-node-header__icon",children:(0,xl.jsx)(i,{size:14})}),u?(0,xl.jsx)("input",{ref:f,type:"text",value:p,onChange:m,onBlur:w,onKeyDown:h,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,p.length*8+10)}px`},maxLength:d_}):(0,xl.jsx)("span",{onDoubleClick:y,className:"wf-node-header__label",title:l.length>20?l:n("node.renameHint"),children:l}),o]})},cp=(0,It.memo)(ID);var fp=R(J(),1);var bn=R(X(),1),MD=({executionStatus:e,status:t})=>{let a=ge();return(0,fp.useMemo)(()=>{switch(e){case"running":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,bn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});default:return null}},[e,t,a])},c_=(0,fp.memo)(MD);var bl=R(J(),1);function yn(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var ld=R(X(),1);var ED=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,bl.useMemo)(()=>yn(e,t,a),[e,t,a]),l=(0,bl.useCallback)(s=>{let u=s.currentTarget;u.naturalWidth>0&&u.naturalHeight>0&&n?.(u.naturalWidth,u.naturalHeight)},[n]),i=(0,bl.useCallback)(s=>{let u=s.currentTarget;u.videoWidth>0&&u.videoHeight>0&&n?.(u.videoWidth,u.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,ld.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,ld.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,ld.jsx)("div",{className:"wf-media-preview__audio",children:(0,ld.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},f_=(0,bl.memo)(ED);var p_=R(J(),1);var Be=R(X(),1),ND=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=ge();return e==="text"?(0,Be.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(sa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Be.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,Be.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,Be.jsx)(Ao,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.writePrompt")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,Be.jsx)(Eu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.scriptGen")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,Be.jsx)(No,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.planningGen")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,Be.jsx)(Ia,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(uo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(ka,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(Ka,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},pp=(0,p_.memo)(ND);var wn=R(J(),1);var Mt=R(X(),1),TD=({materialType:e,selected:t,onOpenResourcePicker:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=ge(),{zoom:i}=sr(),[s,u]=wn.default.useState(!1),d=(0,wn.useMemo)(()=>vr(i),[i]),p=(0,wn.useCallback)(()=>{n&&(n(),u(!0),setTimeout(()=>u(!1),1500))},[n]),c=(0,wn.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,Mt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*d),transform:`translate(-50%, -100%) scale(${d})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,Mt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Mt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,Mt.jsx)(No,{size:13,className:"wf-floating-top-pill__icon"}),(0,Mt.jsx)("span",{children:l("pill.textEdit")})]}),(0,Mt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Mt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:p,title:l("pill.copy"),children:s?(0,Mt.jsx)(Za,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Mt.jsx)(Nu,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Mt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Mt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,Mt.jsx)(To,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,Mt.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Mt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,children:[(0,Mt.jsx)(cl,{size:13,className:"wf-floating-top-pill__icon"}),(0,Mt.jsx)("span",{children:c})]})})})},m_=(0,wn.memo)(TD);var Vi=R(J(),1);var g_=R(J(),1),h_=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function AD(e,t,a=h_){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function x_({refs:e,excludeSelectors:t=h_,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,g_.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=d=>{let p=d.target;AD(p,r.map(c=>c.current),t)&&a()},i=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var vx=R(X(),1),DD=480,RD=({children:e,onClose:t,width:a=DD})=>{let{zoom:o}=sr(),n=(0,Vi.useRef)(null),r=(0,Vi.useMemo)(()=>vr(o),[o]);return x_({refs:n,onClose:t}),(0,vx.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,vx.jsx)("div",{className:"wf-panel-shell__card",children:e})})},b_=(0,Vi.memo)(RD);var Ea=R(J(),1);var y_=R(J(),1),Gi=R(X(),1),Cx={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},zD=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function OD(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Cx[t])return t;for(let a of zD)if(a.regex.test(t))return a.brand;return null}var w_=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,y_.useMemo)(()=>t&&Cx[t.toLowerCase()]?t.toLowerCase():OD(e),[t,e]),i=l?Cx[l]:null;if(!i){if(r)return(0,Gi.jsx)(Gi.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,Gi.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,Gi.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var v_=R(J(),1);function C_(e){let t=OS(),a=PS();return(0,v_.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let l=r.data||{},i=yn(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",u=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:u,textContent:s}]}),[t,a,e])}var S_=R(J(),1),L_="wf_capabilities_catalog_v1",PD={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function id(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(L_);return e?JSON.parse(e):null}catch{return null}}function __(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(L_,JSON.stringify(e))}catch{}}function k_(e,t,a){return(0,S_.useMemo)(()=>{let n=(a??id())?.[e]??[],r=n.find(b=>b.id===t)??n[0],l=PD[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=b=>b?s.some(C=>C.value===b):!1,p=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],c=i.duration?.defaultValue??p[0]?.value??5,f=b=>typeof b!="number"?!1:p.some(C=>C.value===b),g=i.resolution?.options??[],y=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],x=i.quality?.defaultValue??w[0]?.value??"",h=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:p,defaultDuration:c,isDurationValid:f,resolutionOptions:g,defaultResolution:y,qualityOptions:w,defaultQuality:x,hasSoundSupport:h,defaultSound:m}},[e,t,a])}var I_=R(J(),1);var vn=R(X(),1),BD=({onClick:e,disabled:t,isGenerating:a})=>{let o=ge();return(0,vn.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,vn.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,vn.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,vn.jsx)(mr,{size:14,className:"wf-generate-btn__spin"}):(0,vn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,vn.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,vn.jsx)("path",{d:"M12 19V5"})]})})]})},M_=(0,I_.memo)(BD);var Q=R(X(),1);function HD(e){let t=(0,Q.jsx)(w_,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var UD=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:l})=>{let i=ge(),{materialType:s,selectedTool:u,params:d,prompt:p}=t,[c,f]=(0,Ea.useState)(!1),[g,y]=(0,Ea.useState)(!1),w=C_(e),x=u==="text-to-music"?"music":"speech",h=(0,Ea.useCallback)(D=>{o({selectedTool:D==="music"?"text-to-music":"text-to-audio"})},[o]),m=(0,Ea.useMemo)(()=>{let D=a?.[s]??[];return D.length===0&&(s==="text"?D=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?D=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?D=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(D=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),D.map(F=>{let j=HD(F.id),W=j.icon,Z=F.badge??j.badge,ne=F.subtitle??j.subtitle;return{value:F.id,label:F.label,triggerLabel:(0,Q.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[W?(0,Q.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:W}):null,(0,Q.jsx)("span",{children:F.label})]}),icon:W,badge:Z,subtitle:ne}})},[a,s]),b=typeof d.model=="string"?d.model:m[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:S,isAspectRatioValid:v,durationOptions:_,defaultDuration:k,isDurationValid:T,resolutionOptions:N,defaultResolution:U}=k_(s,b,a),H=(0,Ea.useCallback)((D,F)=>{o({params:{...d,[D]:F}})},[o,d]),L=(0,Ea.useCallback)(D=>{let Z=((a??id())?.[s]??[]).find(ee=>ee.id===D)?.parameters,ne={...d,model:D};d.aspectRatio&&Z?.aspectRatio?.options&&(Z.aspectRatio.options.some(q=>q.value===d.aspectRatio)||(ne.aspectRatio=Z.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&Z?.duration?.options&&(Z.duration.options.some(q=>q.value===d.duration)||(ne.duration=Z.duration.defaultValue||Z.duration.options[0]?.value||5)),d.resolution&&Z?.resolution?.options?Z.resolution.options.some(q=>q.value===d.resolution)||(ne.resolution=Z.resolution.defaultValue||Z.resolution.options[0]?.value):d.resolution&&Z&&!Z.resolution?.options&&delete ne.resolution,o({params:ne})},[a,s,o,d]),M=(0,Ea.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),E=(0,Ea.useMemo)(()=>{switch(s){case"text":return i("panel.textPromptPlaceholder");case"image":return i("panel.imagePromptPlaceholder");case"video":return i("panel.videoPromptPlaceholder");case"audio":return i(x==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return i("panel.promptPlaceholder")}},[s,x,i]),I=typeof d.aspectRatio=="string"&&v(d.aspectRatio)?d.aspectRatio:S,A=typeof d.duration=="number"&&T(d.duration)?d.duration:k,z=D=>!!D&&N.some(F=>F.value===D),V=typeof d.resolution=="string"&&z(d.resolution)?d.resolution:U;return(0,Q.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,Q.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>h("speech"),children:[(0,Q.jsx)(ll,{size:13}),(0,Q.jsx)("span",{children:i("panel.audioGen")})]}),(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>h("music"),children:[(0,Q.jsx)(Ka,{size:13}),(0,Q.jsx)("span",{children:i("panel.musicGen")})]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[w.length>0||l?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[w.map(D=>(0,Q.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${D.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${D.label} (${D.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[D.url&&D.materialType==="image"?(0,Q.jsx)("img",{src:D.url,alt:D.label,className:"wf-config-panel__ref-thumb-media"}):D.url&&D.materialType==="video"?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,Q.jsx)("video",{src:D.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,Q.jsx)(ka,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):D.materialType==="audio"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,Q.jsx)(Ka,{size:13})}):D.materialType==="text"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,Q.jsx)(sa,{size:13})}):(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,Q.jsx)(uo,{size:13})}),D.hasMedia&&(0,Q.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},D.nodeId)),l?(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:l,title:i("picker.addRef"),children:(0,Q.jsx)(Ke,{size:14})}):null]}):(0,Q.jsx)("span",{}),(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>f(!0),title:i("header.fitView"),children:(0,Q.jsx)(gr,{size:13})})]}),(0,Q.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:p??"",placeholder:E,rows:3,onChange:D=>o({prompt:D.target.value})}),(0,Q.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(p||"").length," / ",M]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,Q.jsx)(da,{className:"wf-param-bar__select wf-param-bar__select--model",value:b,options:m,popupMatchSelectWidth:!1,onChange:D=>L(D)}),s==="image"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,Q.jsx)(da,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:C,popupMatchSelectWidth:!1,onChange:D=>H("aspectRatio",D)})})]}),s==="video"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,Q.jsx)(da,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:C,popupMatchSelectWidth:!1,onChange:D=>H("aspectRatio",D)}),(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(da,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:_,popupMatchSelectWidth:!1,onChange:D=>H("duration",D)}),N.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(da,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:V,options:N,popupMatchSelectWidth:!1,onChange:D=>H("resolution",D)})]})]})]}),s==="audio"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!g),title:i("panel.advanced"),children:(0,Q.jsx)(Ku,{size:13})})]})]}),(0,Q.jsx)("div",{className:"wf-config-panel__action-group",children:(0,Q.jsx)(M_,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),g&&(0,Q.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,Q.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,Q.jsx)("span",{className:"wf-config-panel__advanced-label",children:i("panel.duration")}),(0,Q.jsx)(lx,{style:{flex:1},min:1,max:s==="video"?20:60,value:A,onChange:D=>H("duration",D)})]})}),(0,Q.jsx)(fl,{title:i("panel.promptPlaceholder"),open:c,onCancel:()=>f(!1),width:680,children:(0,Q.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:p??"",placeholder:E,rows:10,onChange:D=>o({prompt:D.target.value})})})]})},E_=(0,Ea.memo)(UD);var ca=R(J(),1);var Sx=["image","video","audio"],FD=80,qD=40;function D_(e){return!!e&&typeof e=="object"}function R_(e){return D_(e.data)?e.data:{}}function z_(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function VD(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function O_(e,t=""){let a=(e||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=VD(t);return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(o)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(o)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(o)?"audio":null}function P_(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function GD(e){let t=e.dimensions;if(D_(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function XD(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function YD(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function B_(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function jD(e,t){if(!Sx.includes(e))return!1;if(yn(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function H_(e,t,a){let o=B_(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let l=R_(r),i=z_(l.materialType);if(!i||!jD(i,l))continue;let s=XD(l,r.id),u=GD(l);n.push({nodeId:r.id,materialType:i,title:s,previewUrl:yn(i,l.mediaAssets,typeof l.mediaUrl=="string"?l.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:YD(l,s,r.id,u),width:u.width,height:u.height})}return n}function U_(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function N_(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function T_(e,t){return jf(e,t)}function A_(e){return{mediaUrl:e.objectUrl,status:"ready",content:e.name,mediaAssets:[{type:e.materialType,url:e.objectUrl}]}}function ZD(e,t,a){let o=wr(a),n=WL(a);return{x:e.position.x-o-FD,y:e.position.y+t*(n+qD)}}function WD(e){return z_(R_(e).materialType)}function F_(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(y=>y.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let l=B_(e.edges,e.targetNodeId),i=new Set(l);for(let y of e.selectedCanvasNodeIds){if(y===e.targetNodeId){t.push({id:y,reason:"self"});continue}if(l.has(y)||i.has(y)){t.push({id:y,reason:"already_connected"});continue}let w=e.nodes.find(x=>x.id===y);if(!w){t.push({id:y,reason:"missing"});continue}if(!T_(w,r)){t.push({id:y,reason:"type_contract"});continue}a.push(N_(y,e.targetNodeId)),i.add(y)}let s=e.localFiles.filter(y=>!y.objectUrl||!Sx.includes(y.materialType)?(t.push({id:y.id,reason:"unsupported"}),!1):!0),u=WD(r),d=s[0],p=!!u&&Sx.includes(u)&&!!d&&d.materialType===u,c=0,f=p?s.slice(1):s;p&&d&&n.push({nodeId:e.targetNodeId,data:A_(d)});for(let y of f){let w=ZD(r,c,y.materialType),x=lp(y.materialType,w,{...A_(y),label:y.name.replace(/\.[^.]+$/,"")||y.name});if(!T_(x,r)){t.push({id:y.id,reason:"type_contract"});continue}o.push(x),a.push(N_(x.id,e.targetNodeId)),i.add(x.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}var yl=R(J(),1);var be=R(X(),1);function mp(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var KD=({items:e,selectedIds:t,onToggle:a})=>{let o=ge(),[n,r]=(0,yl.useState)(""),[l,i]=(0,yl.useState)("all"),[s,u]=(0,yl.useState)("grid"),d=(0,yl.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),p=(0,yl.useMemo)(()=>U_(e,n,l),[e,n,l]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,be.jsxs)("div",{className:"wf-picker-pane",children:[(0,be.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,be.jsxs)("label",{className:"wf-picker-search",children:[(0,be.jsx)(sl,{size:14,className:"wf-picker-search__icon"}),(0,be.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:f=>r(f.target.value)})]}),(0,be.jsx)(da,{className:"wf-picker-filter",variant:"standard",value:l,options:d,onChange:f=>i(f)}),(0,be.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,be.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,be.jsx)(rl,{size:14})}),(0,be.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,be.jsx)(Fu,{size:14})})]})]}),p.length===0?(0,be.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,be.jsx)("div",{className:"wf-picker-grid",children:p.map(f=>{let g=t.includes(f.nodeId);return(0,be.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${f.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(f.nodeId,f.alreadyConnected),disabled:f.alreadyConnected,title:f.title,children:[(0,be.jsxs)("div",{className:"wf-picker-card__thumb",children:[f.previewUrl&&f.materialType==="image"?(0,be.jsx)("img",{src:f.previewUrl,alt:"",className:"wf-picker-card__media"}):f.previewUrl&&f.materialType==="video"?(0,be.jsx)("video",{src:f.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,be.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${f.materialType}`,children:o(mp(f.materialType))}),f.alreadyConnected?(0,be.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,be.jsx)(Za,{size:11}),o("picker.added")]}):(0,be.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,be.jsx)(Za,{size:11}):null})]}),(0,be.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,be.jsx)("span",{className:"wf-picker-card__name",children:f.title}),(0,be.jsx)("span",{className:"wf-picker-type-tag",children:o(mp(f.materialType))})]})]},f.nodeId)})}):(0,be.jsx)("div",{className:"wf-picker-list",children:p.map(f=>{let g=t.includes(f.nodeId);return(0,be.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${f.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(f.nodeId,f.alreadyConnected),disabled:f.alreadyConnected,children:[(0,be.jsx)("div",{className:"wf-picker-row__thumb",children:f.previewUrl&&f.materialType==="image"?(0,be.jsx)("img",{src:f.previewUrl,alt:"",className:"wf-picker-card__media"}):f.previewUrl&&f.materialType==="video"?(0,be.jsx)("video",{src:f.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,be.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${f.materialType}`,children:o(mp(f.materialType))})}),(0,be.jsxs)("div",{className:"wf-picker-row__body",children:[(0,be.jsx)("span",{className:"wf-picker-card__name",children:f.title}),(0,be.jsxs)("span",{className:"wf-picker-row__sub",children:[f.subtitle||f.nodeId," \xB7 ",o(mp(f.materialType))]})]}),f.alreadyConnected?(0,be.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,be.jsx)(Za,{size:11}),o("picker.added")]}):(0,be.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,be.jsx)(Za,{size:11}):null})]},f.nodeId)})})]})},q_=KD;var wl=R(J(),1);var dt=R(X(),1);function QD(e){let t=O_(e.type,e.name);return t?{id:`${e.name}-${e.size}-${e.lastModified}-${Math.random().toString(36).slice(2,8)}`,name:e.name,mime:e.type,size:e.size,objectUrl:URL.createObjectURL(e),materialType:t}:null}var $D=({files:e,onAddFiles:t,onRemove:a})=>{let o=ge(),n=(0,wl.useRef)(null),[r,l]=(0,wl.useState)(!1),i=(0,wl.useCallback)(u=>{let d=Array.from(u),p=[],c=0;for(let f of d){let g=QD(f);g?p.push(g):c+=1}p.length>0&&t(p),c>0&&Wt.warning(o("picker.unsupported"))},[t,o]),s=(0,wl.useCallback)(u=>{u.preventDefault(),u.stopPropagation(),l(!1),u.dataTransfer.files?.length&&i(u.dataTransfer.files)},[i]);return(0,dt.jsxs)("div",{className:"wf-picker-pane",children:[(0,dt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${r?"wf-picker-dropzone--active":""}`,onClick:()=>n.current?.click(),onDragOver:u=>{u.preventDefault(),u.stopPropagation(),l(!0)},onDragLeave:u=>{u.preventDefault(),u.stopPropagation(),l(!1)},onDrop:s,children:[(0,dt.jsx)(cl,{size:22,className:"wf-picker-dropzone__icon"}),(0,dt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,dt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,dt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,dt.jsx)(zu,{size:14}),o("picker.chooseFiles")]})]}),(0,dt.jsx)("input",{ref:n,type:"file",multiple:!0,accept:"image/*,video/*,audio/*",className:"wf-picker-file-input",onChange:u=>{u.target.files?.length&&i(u.target.files),u.target.value=""}}),e.length>0?(0,dt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(u=>(0,dt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,dt.jsx)("div",{className:"wf-picker-file-item__thumb",children:u.materialType==="image"?(0,dt.jsx)("img",{src:u.objectUrl,alt:"",className:"wf-picker-card__media"}):u.materialType==="video"?(0,dt.jsx)("video",{src:u.objectUrl,className:"wf-picker-card__media",muted:!0}):(0,dt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,dt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,dt.jsx)("span",{className:"wf-picker-card__name",children:u.name}),(0,dt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${u.materialType}`),u.size?` \xB7 ${P_(u.size)}`:""]})]}),(0,dt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(u.id),title:o("picker.removeFile"),children:(0,dt.jsx)(ul,{size:14})})]},u.id))}):null]})},V_=$D;var ho=R(X(),1),JD=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=ge(),l=se(v=>v.nodes),i=se(v=>v.edges),[s,u]=(0,ca.useState)(a),[d,p]=(0,ca.useState)([]),[c,f]=(0,ca.useState)([]),g=(0,ca.useMemo)(()=>H_(l,i,t),[l,i,t]);(0,ca.useEffect)(()=>{e&&(u(a),p([]),f(v=>{for(let _ of v)URL.revokeObjectURL(_.objectUrl);return[]}))},[e,a]);let y=(0,ca.useCallback)(()=>{f(v=>{for(let _ of v)URL.revokeObjectURL(_.objectUrl);return[]}),o()},[o]),w=(0,ca.useCallback)((v,_)=>{_||p(k=>k.includes(v)?k.filter(T=>T!==v):[...k,v])},[]),x=(0,ca.useCallback)(v=>{f(_=>[..._,...v])},[]),h=(0,ca.useCallback)(v=>{f(_=>{let k=_.filter(N=>N.id!==v),T=_.find(N=>N.id===v);return T&&URL.revokeObjectURL(T.objectUrl),k})},[]),b=d.filter(v=>{let _=g.find(k=>k.nodeId===v);return _&&!_.alreadyConnected}).length+c.length,C=(0,ca.useCallback)(()=>{if(b===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(f([]),p([]))},[c,n,b,d]),S=(0,ho.jsxs)("div",{className:"wf-picker-footer",children:[(0,ho.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:y,children:r("picker.cancel")}),(0,ho.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:b===0,onClick:C,children:[r("picker.use")," ",b," ",r("picker.items")]})]});return(0,ho.jsxs)(fl,{open:e,onCancel:y,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:S,children:[(0,ho.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,ho.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,ho.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,ho.jsx)(q_,{items:g,selectedIds:d,onToggle:w}):(0,ho.jsx)(V_,{files:c,onAddFiles:x,onRemove:h})]})},gp=JD;var vl=R(J(),1);function G_(e){let t=ge(),[a,o]=(0,vl.useState)(!1),[n,r]=(0,vl.useState)("canvas"),l=(0,vl.useCallback)((u="canvas")=>{r(u),o(!0)},[]),i=(0,vl.useCallback)(()=>{o(!1)},[]),s=(0,vl.useCallback)(u=>{let d=se.getState(),p=F_({nodes:d.nodes,edges:d.edges,targetNodeId:e,selectedCanvasNodeIds:u.selectedCanvasNodeIds,localFiles:u.localFiles});return p.hasWork?d.applyCanvasInputMutation({addNodes:p.addNodes,addEdges:p.addEdges,nodePatches:p.nodePatches}).status!=="allowed"?(Wt.error(t("picker.commitFailed")),!1):(p.rejected.length>0?Wt.warning(t("picker.commitPartial")):Wt.success(t("picker.commitOk")),o(!1),!0):(Wt.warning(t("picker.commitEmpty")),!1)},[e,t]);return{open:a,initialTab:n,openPicker:l,closePicker:i,commit:s}}var ze=R(X(),1),eR=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:u,errorMessage:d}=o,p=o.executionStatus,c=o.executionError,f=o.mediaAssets,g=t.__catalog??null,[y,w]=(0,et.useState)(!1),[x,h]=(0,et.useState)(!1),[m,b]=(0,et.useState)(!1),[C,S]=(0,et.useState)(!1),[v,_]=(0,et.useState)(null),{setNodes:k}=_a(),T=Ve(Y=>Y.status==="pending"||Y.status==="running"),N=o.nodeWidth??wr(n),U=gx(n),H=ZL(N,U),L=v??o.nodeHeight??H,M=(0,et.useCallback)(Y=>{k(ce=>ce.map(ke=>ke.id===e?{...ke,data:{...ke.data,...Y}}:ke))},[e,k]),E=(0,et.useCallback)((Y,ce)=>{if(Y>0&&ce>0){let ke=Y/ce,it=Math.max(80,Math.min(800,Math.round(N/ke)));_(it),o.nodeHeight!==it&&M({nodeHeight:it})}},[o.nodeHeight,N,M]),I=(0,et.useCallback)(()=>{let Y=o.selectedTool;(!Y||Y==="text-editor"||Y==="import")&&M({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]}),Ve.getState().startNodeExecution?.(e)},[e,n,o.selectedTool,M]),A=ge(),z=se(Y=>Y.applyCanvasInputMutation),V=G_(e),D=(0,et.useMemo)(()=>sp(n).map(Y=>({key:Y.key,label:A(Y.labelKey),description:A(Y.descKey),icon:Y.icon})),[n,A]),F=(0,et.useCallback)((Y,ce)=>{let ke=ip(Y),it=ce?.flowPosition;if(!ke||!it)return;let qt=hl(ke.targetMaterialType,it),$t=qt.nodes[0];$t&&z({addNodes:qt.nodes,addEdges:[{source:e,sourceHandle:"out",target:$t.id,targetHandle:"in"}]})},[z,e]),j=u||i||"",W=(0,et.useCallback)(Y=>{if(n==="text"){let ce="";Y==="script"?ce=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:Y==="planning"?ce=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:Y==="prompt"?ce=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:Y==="storyboard"&&(ce=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({content:ce,prompt:ce,status:ce.trim()?"ready":"empty",generatedContent:void 0})}},[n,M]),Z=(0,et.useCallback)(Y=>{let ce=URL.createObjectURL(Y);if(Y.type.startsWith("image/")){let ke=new Image;ke.src=ce,ke.onload=()=>{ke.naturalWidth>0&&ke.naturalHeight>0&&E(ke.naturalWidth,ke.naturalHeight)}}else if(Y.type.startsWith("video/")){let ke=document.createElement("video");ke.src=ce,ke.onloadedmetadata=()=>{ke.videoWidth>0&&ke.videoHeight>0&&E(ke.videoWidth,ke.videoHeight)}}M({mediaUrl:ce,status:"ready",content:Y.name})},[E,M]),ne=(0,et.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),h(!0)},[]),ee=(0,et.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),h(!1)},[]),q=(0,et.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),h(!1);let ce=Y.dataTransfer.files?.[0];ce&&Z(ce)},[Z]),$=(0,et.useCallback)(()=>{j&&navigator.clipboard.writeText(j).catch(()=>{})},[j]),ue=(0,et.useCallback)(()=>{if(!j)return;let Y=j.split(`

`).filter(ce=>ce.trim().length>0);Y.length>1&&M({content:Y.join(`
---
`)})},[j,M]);(0,et.useEffect)(()=>{a||(b(!1),S(!1))},[a]);let ie=i_(a,m,p),te=yn(n,f,s),oe=s_(p,r,!!te),ye=n==="video"?"video":n==="audio"?"audio":"square";return(0,ze.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:N},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(y||a)&&(0,ze.jsx)(m_,{materialType:n,selected:a,onOpenResourcePicker:()=>V.openPicker("local"),onStartTextEdit:()=>S(!0),onCopyText:$,onSplitText:ue}),(0,ze.jsx)(xn,{side:"left",nodeHovered:y}),(0,ze.jsx)(cp,{label:l,materialType:n,onLabelChange:Y=>M({label:Y}),trailing:(0,ze.jsx)(c_,{executionStatus:p,status:r})}),(0,ze.jsxs)("div",{className:`wf-material-node__card ${x?"wf-material-node__card--dragover":""}`,style:{width:N,height:L},onDragOver:ne,onDragLeave:ee,onDrop:q,children:[a&&(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ze.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:j||C?(0,ze.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${C?" nodrag":""}`,readOnly:!C,value:j,placeholder:A("node.textPlaceholder"),autoFocus:C,onMouseDown:Y=>{C||Y.preventDefault()},onDoubleClick:Y=>{Y.stopPropagation(),S(!0),Y.currentTarget.focus()},onFocus:()=>S(!0),onBlur:()=>S(!1),onChange:Y=>M({content:Y.target.value,status:Y.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ze.jsx)(pp,{materialType:"text",onStartEdit:()=>S(!0),onApplyPreset:W})}),n!=="text"&&(oe?(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(l_,{status:oe,loadingAspectRatio:ye,errorMessage:c??d,taskId:o.taskId,onRetry:I,children:te?(0,ze.jsx)(f_,{materialType:n,mediaAssets:f,mediaUrl:s,label:l,onMediaSizeChange:E}):(0,ze.jsx)(pp,{materialType:n,onApplyPreset:W})})}):(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(pp,{materialType:n,onApplyPreset:W})})),n==="text"&&(d||c)&&(0,ze.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ie&&(0,ze.jsx)(b_,{onClose:()=>b(!0),children:(0,ze.jsx)(E_,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:I,execBusy:T,onOpenResourcePicker:()=>V.openPicker("canvas")})}),(0,ze.jsx)(xn,{side:"right",nodeHovered:y,options:D,onSelect:F}),(0,ze.jsx)(gp,{open:V.open,nodeId:e,initialTab:V.initialTab,onCancel:V.closePicker,onCommit:V.commit})]})},X_=(0,et.memo)(eR);var Y_={type:"material",component:X_,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Yf("text",{status:"empty",nodeWidth:wr("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var Xi=R(J(),1);var Lx=50;function Cl(e){return JSON.parse(JSON.stringify(e))}var tR={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Ft=Ui((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Cl(o)].slice(-Lx),redoStack:[]}};return{document:tR,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Cl(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Cl(l),undoStack:i,redoStack:[...r,Cl(n)].slice(-Lx)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Cl(l),redoStack:i,undoStack:[...r,Cl(n)].slice(-Lx)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let l=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:l.title,initialType:l.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:l}=t(),i=l.rows[o];if(!i)return;let s=a(l),u=[...l.rows],d={...i,cells:[...i.cells]};d.cells[n]=r,u[o]=d,e({document:{...l,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),l=o||n.columns.map(i=>i.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:l}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),l=n.rows.filter((i,s)=>s!==o);e({document:{...n,rows:l},...r})},addColumn:(o,n,r=240)=>{let{document:l}=t(),i=a(l),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=l.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...l,columns:[...l.columns,s],rows:u},...i})},updateColumn:(o,n,r)=>{let{document:l}=t(),i=l.columns[o];if(!i)return;let s=a(l),u=[...l.columns];u[o]={...i,title:n,type:r},e({document:{...l,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),l=n.columns.filter((s,u)=>u!==o),i=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:l,rows:i},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let l=a(n),i=[...n.columns];i[o]={...r,visible:!r.visible},e({document:{...n,columns:i},...l})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let i=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(p=>{let c=[...p.cells],[f]=c.splice(o,1);return f!==void 0&&c.splice(n,0,f),{...p,cells:c}});e({document:{...r,columns:s,rows:d},...i})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Cl(o),undoStack:[],redoStack:[]})}});var pe=R(X(),1),j_=380,aR=280,Z_=(0,Xi.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Ft(),[l,i]=(0,Xi.useState)(!1),{zoom:s}=sr(),u=(0,Xi.useMemo)(()=>vr(s),[s]),d=o.rows||[],p=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,pe.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:j_},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(l||a)&&(0,pe.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,pe.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,pe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:g=>{g.stopPropagation(),r()},children:[(0,pe.jsx)(Ke,{size:14}),(0,pe.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,pe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:g=>{g.stopPropagation(),n()},children:[(0,pe.jsx)(gr,{size:13}),(0,pe.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,pe.jsx)(xn,{side:"left",nodeHovered:l}),(0,pe.jsx)(cp,{label:c,materialType:"table"}),(0,pe.jsxs)("div",{className:"wf-material-node__card",style:{width:j_,height:aR},onDoubleClick:()=>n(),children:[a&&(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,pe.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,pe.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,pe.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,pe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,pe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,pe.jsx)(Ma,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,pe.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,pe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:g=>g.stopPropagation(),children:[(0,pe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,pe.jsx)(Ke,{size:14,className:"wf-node-empty__pill-icon"}),(0,pe.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,pe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,pe.jsx)(gr,{size:13,className:"wf-node-empty__pill-icon"}),(0,pe.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,pe.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,pe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,pe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,pe.jsx)(Ru,{size:14}),(0,pe.jsx)("span",{children:p?.title||"\u6587\u672C"})]}),(0,pe.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,pe.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((g,y)=>{let w=g.cells[0],x=typeof w=="string"&&w?w:typeof w=="number"?String(w):Array.isArray(w)&&w.length>0?`\u{1F4CE} \u9644\u4EF6 (${w.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,pe.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,pe.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:x}),(0,pe.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,pe.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,pe.jsx)(xn,{side:"right",nodeHovered:l})]})});var W_={type:"table",component:Z_,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var Ta=R(J(),1);var K_="omnimux-clip-open",_x="omnimux-clip-save",kx="omnimux-clip-close",Ix="omnimux-clip-progress";function Q_(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function $_(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function J_(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var re=R(X(),1);var oR={idle:"\u672A\u521D\u59CB\u5316",editing:"\u7F16\u8F91\u4E2D",rendering:"\u5408\u6210\u4E2D",completed:"\u5DF2\u5408\u6210",error:"\u51FA\u9519"};function ek(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Na(e){return typeof e=="string"&&e.trim()?e:void 0}function Mx(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function nR(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function rR(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function lR(e){return Na(e.mediaUrl)||Na(e.outputVideoUrl)||Na(e.path)||Na(e.url)||Na(e.real_path)||Na(e.filePath)}function iR(e){let{nodes:t,edges:a}=se.getState(),o=[],n=[],r=[],l=[];for(let i of a){if(i.target!==e)continue;let s=t.find(g=>g.id===i.source);if(!s)continue;let u=ek(s.data)?s.data:{},d=Na(u.materialType)||(s.type==="material"?void 0:s.type),p=Na(u.label)||Na(u.title)||s.id,c=lR(u)||"",f=Mx(u.duration)??Mx(u.outputDurationMs)??Mx(u.durationMs);if(d==="video"||s.type==="video_composition"){let g=c||Na(u.outputVideoUrl)||"";g&&o.push({path:g,name:p,durationMs:f,url:g})}else if(d==="image")c&&r.push({path:c,name:p,displayDurationMs:f??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:p,durationMs:f,url:c});else if(d==="text"){let g=Na(u.content)||Na(u.generatedContent)||Na(u.prompt);g&&l.push({text:g,startTimeMs:l.reduce((y,w)=>y+w.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:l}}function sR(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function uR(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var dR=({id:e,data:t,selected:a})=>{let o=ek(t)?t:{},n=se(h=>h.setNodes),r=ge(),[l,i]=(0,Ta.useState)(!1),[s,u]=(0,Ta.useState)(!1),d=o.status??"idle",p=!!o.outputVideoUrl,c=o.thumbnailUrl||o.outputThumbnailUrl,f=o.title||o.label||r("node.type.video_composition"),g=(0,Ta.useCallback)(h=>{n(m=>m.map(b=>b.id===e?{...b,data:{...b.data,...h}}:b))},[e,n]);(0,Ta.useEffect)(()=>{if(typeof window>"u")return;let h=C=>{let S=C instanceof CustomEvent?C.detail:void 0;if(!Q_(S)||S.nodeId&&S.nodeId!==e)return;let v=S.output;g({schema:S.schema,projectId:S.projectId||o.projectId,outputVideoUrl:v?.videoPath,thumbnailUrl:v?.thumbnailPath,outputThumbnailUrl:v?.thumbnailPath,outputDurationMs:v?.durationMs,outputWidth:v?.width,outputHeight:v?.height,status:v?.videoPath?"completed":"idle",renderProgress:v?.videoPath?100:void 0,errorMessage:void 0})},m=C=>{let S=C instanceof CustomEvent?C.detail:void 0;if(!J_(S)||S.nodeId&&S.nodeId!==e)return;let v=S.status??"rendering";g({status:v,renderProgress:S.renderProgress})},b=C=>{let S=C instanceof CustomEvent?C.detail:void 0;$_(S)&&(S.nodeId&&S.nodeId!==e||o.status==="editing"&&g({status:p?"completed":"idle"}))};return window.addEventListener(_x,h),window.addEventListener(Ix,m),window.addEventListener(kx,b),()=>{window.removeEventListener(_x,h),window.removeEventListener(Ix,m),window.removeEventListener(kx,b)}},[p,e,o.projectId,o.status,g]);let y=(0,Ta.useCallback)(()=>{if(typeof window>"u")return;let h=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,m={source:"canvas",nodeId:e,nodeTitle:f,projectId:h,draftSchema:o.schema,upstreamInputs:iR(e)};g({status:"editing",projectId:h}),window.dispatchEvent(new CustomEvent(K_,{detail:m,bubbles:!0})),window.setTimeout(()=>{sR()||Wt.warning(r("clip.needPlugin"))},400)},[e,o.projectId,o.schema,r,f,g]),w=(0,Ta.useCallback)(h=>{h.stopPropagation();let m=o.outputVideoUrl;if(!m)return;let b=document.createElement("a");b.href=m,b.download=`${cR(f)}.mp4`,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove()},[o.outputVideoUrl,f]),x=(0,Ta.useMemo)(()=>d==="completed"?"wf-clip-status--done":d==="editing"||d==="rendering"?"wf-clip-status--busy":d==="error"?"wf-clip-status--error":"wf-clip-status--idle",[d]);return(0,re.jsxs)("div",{className:`wf-material-node wf-clip-launcher ${a?"wf-material-node--selected":""}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onDoubleClick:h=>{h.stopPropagation(),y()},children:[(0,re.jsx)(xn,{side:"left",nodeHovered:l}),(0,re.jsx)(xn,{side:"right",nodeHovered:l,variant:"plain"}),(0,re.jsxs)("div",{className:"wf-material-node__card wf-clip-launcher__card","data-node-type":"video_composition",children:[a?(0,re.jsxs)(re.Fragment,{children:[(0,re.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,re.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,re.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,re.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}):null,(0,re.jsxs)("header",{className:"wf-clip-launcher__header",children:[(0,re.jsxs)("span",{className:"wf-clip-launcher__icon","aria-hidden":"true",children:[(0,re.jsx)(To,{size:18}),(0,re.jsx)(Wa,{size:12,className:"wf-clip-launcher__icon-film"})]}),(0,re.jsxs)("div",{className:"wf-clip-launcher__heading",children:[(0,re.jsx)("h3",{className:"wf-clip-launcher__title",children:f}),(0,re.jsx)("span",{className:`wf-clip-status ${x}`,children:oR[d]})]})]}),p?(0,re.jsxs)("div",{className:"wf-clip-launcher__result",children:[(0,re.jsx)("div",{className:"wf-clip-launcher__preview nodrag nopan",style:{position:"relative",cursor:"pointer"},onClick:h=>{h.stopPropagation(),u(!s)},children:s&&o.outputVideoUrl?(0,re.jsx)("video",{src:o.outputVideoUrl,controls:!0,autoPlay:!0,className:"wf-clip-launcher__thumb",style:{width:"100%",height:"100%",objectFit:"contain"}}):c?(0,re.jsxs)(re.Fragment,{children:[(0,re.jsx)("img",{src:c,alt:"",className:"wf-clip-launcher__thumb"}),(0,re.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)"},children:(0,re.jsx)(ka,{size:28,color:"#fff",fill:"#fff"})})]}):(0,re.jsx)("div",{className:"wf-clip-launcher__thumb-fallback",children:(0,re.jsx)(Wa,{size:36})})}),(0,re.jsxs)("dl",{className:"wf-clip-launcher__meta",children:[(0,re.jsxs)("div",{children:[(0,re.jsx)("dt",{children:"\u65F6\u957F"}),(0,re.jsx)("dd",{children:nR(o.outputDurationMs)})]}),(0,re.jsxs)("div",{children:[(0,re.jsx)("dt",{children:"\u5206\u8FA8\u7387"}),(0,re.jsx)("dd",{children:rR(o.outputWidth,o.outputHeight)})]})]}),(0,re.jsxs)("div",{className:"wf-clip-launcher__actions nodrag nopan",children:[(0,re.jsxs)("button",{type:"button",className:"wf-clip-launcher__btn wf-clip-launcher__btn--primary",onClick:h=>{h.stopPropagation(),y()},children:[(0,re.jsx)(Hi,{size:14}),(0,re.jsx)("span",{children:"\u91CD\u65B0\u7F16\u8F91"})]}),(0,re.jsxs)("button",{type:"button",className:"wf-clip-launcher__btn",onClick:w,children:[(0,re.jsx)(Tu,{size:14}),(0,re.jsx)("span",{children:"\u4E0B\u8F7D"})]})]})]}):(0,re.jsxs)("div",{className:"wf-clip-launcher__empty",children:[(0,re.jsx)("p",{className:"wf-clip-launcher__blurb",children:"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002"}),(0,re.jsxs)("button",{type:"button",className:"wf-clip-launcher__btn wf-clip-launcher__btn--primary wf-clip-launcher__open nodrag nopan",onClick:h=>{h.stopPropagation(),y()},children:[(0,re.jsx)(Hi,{size:14}),(0,re.jsx)("span",{children:"\u6253\u5F00\u89C6\u9891\u526A\u8F91"})]})]})]})]})};function cR(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var tk={type:"video_composition",component:(0,Ta.memo)(dR),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>uR(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var uk=R(J(),1),dk=R(wo(),1);var hp=R(J(),1),ak=R(wo(),1);var Te=R(X(),1),Ex=e=>e==="text"?(0,Te.jsx)(gn,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Te.jsx)(Bu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Te.jsx)(Xu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Te.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),ok=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Ft(),[l,i]=(0,hp.useState)(null);(0,hp.useEffect)(()=>{if(o===null){i(null);return}let u=()=>{n(null)},d=p=>{p.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,Te.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,Te.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Te.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,Te.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Te.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Te.jsx)(Pu,{size:14})}),Ex(u.type),(0,Te.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,Te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Te.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,Te.jsx)(Du,{size:15}):(0,Te.jsx)(Au,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Te.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:p=>{if(p.stopPropagation(),o===d)n(null);else{let c=p.currentTarget.getBoundingClientRect(),f=100,g=72,x=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,h=Math.max(8,c.right-f);i({top:x,left:h}),n(d)}},children:(0,Te.jsx)(cr,{size:15})})]})]},u.id))}),(0,Te.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Te.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Te.jsx)(Ke,{size:14}),(0,Te.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&l&&typeof document<"u"&&(0,ak.createPortal)((0,Te.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:l.top,left:l.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,Te.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,Te.jsx)(Ao,{size:13}),(0,Te.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Te.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,Te.jsx)(ul,{size:13}),(0,Te.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var Pt=R(X(),1),fR=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],nk=()=>{let{document:e,setFilterConditions:t}=Ft(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((i,s)=>({value:s,label:i.title||`\u5217 ${s+1}`})),n=(i,s)=>{let u=a.map((d,p)=>p===i?{...d,...s}:d);t(u)},r=()=>{let i=[...a,{columnIndex:0,op:"equals",value:""}];t(i)},l=i=>{let s=a.filter((u,d)=>d!==i);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,Pt.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:i=>i.stopPropagation(),children:[(0,Pt.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,Pt.jsxs)("div",{className:"wf-filter-body",children:[a.map((i,s)=>(0,Pt.jsxs)("div",{className:"wf-filter-row",children:[(0,Pt.jsx)("div",{style:{width:130,flexShrink:0},children:(0,Pt.jsx)(da,{value:i.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Pt.jsx)("div",{style:{width:110,flexShrink:0},children:(0,Pt.jsx)(da,{value:i.op,options:fR,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Pt.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:i.value??"",disabled:i.op==="empty"||i.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,Pt.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>l(s),children:(0,Pt.jsx)(St,{size:15})})]},s)),(0,Pt.jsx)("div",{style:{paddingTop:4},children:(0,Pt.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,Pt.jsx)(Ke,{size:14}),(0,Pt.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Cn=R(X(),1),pR=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],rk=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Ft(),o=e.rowHeight||"low";return(0,Cn.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Cn.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Cn.jsx)("div",{style:{padding:"6px"},children:pR.map(n=>{let r=o===n.id;return(0,Cn.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Cn.jsx)("span",{children:n.label}),r&&(0,Cn.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Cn.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var Me=R(X(),1),lk=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:l,canRedo:i,closeStage:s}=Ft(),u=a==="field-config",d=a==="filter",p=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(f=>f.value!==void 0&&f.value!==""));return(0,Me.jsxs)("header",{className:"wf-stage-topbar",onClick:f=>{f.stopPropagation(),o(null)},children:[(0,Me.jsx)("div",{className:"wf-stage-topbar__left",children:(0,Me.jsxs)("div",{className:"wf-stage-title-group",children:[(0,Me.jsx)(Ma,{size:16,className:"wf-stage-title-icon"}),(0,Me.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:f=>t(f.target.value)})]})}),(0,Me.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,Me.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Me.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:f=>{f.stopPropagation(),o(u?null:"field-config")},children:[(0,Me.jsx)(Wu,{size:15}),(0,Me.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,Me.jsx)(ok,{})]}),(0,Me.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Me.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:f=>{f.stopPropagation(),o(d?null:"filter")},children:[(0,Me.jsx)(pr,{size:15}),(0,Me.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,Me.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,Me.jsx)(nk,{})]}),(0,Me.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Me.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${p?"wf-stage-pill-btn--active":""}`,onClick:f=>{f.stopPropagation(),o(p?null:"row-height")},children:[(0,Me.jsx)(br,{size:15}),(0,Me.jsx)("span",{children:"\u884C\u9AD8"})]}),p&&(0,Me.jsx)(rk,{})]}),(0,Me.jsx)("div",{className:"wf-stage-divider"}),(0,Me.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,Me.jsx)(dl,{size:16})}),(0,Me.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,Me.jsx)(il,{size:16})}),(0,Me.jsx)("div",{className:"wf-stage-divider"}),(0,Me.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:f=>{f.stopPropagation(),s()},children:(0,Me.jsx)(St,{size:16})})]})]})};var Le=R(X(),1),ik=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Ft(),n=e.columns.filter(i=>i.visible),l=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Le.jsx)("div",{className:"wf-grid-container",children:(0,Le.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,Le.jsxs)("table",{className:"wf-grid-table",children:[(0,Le.jsxs)("colgroup",{children:[(0,Le.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(i=>(0,Le.jsx)("col",{style:{width:i.width||220,minWidth:120}},i.id)),(0,Le.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,Le.jsx)("col",{style:{width:"auto"}})]}),(0,Le.jsx)("thead",{children:(0,Le.jsxs)("tr",{children:[(0,Le.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Le.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(i=>(0,Le.jsx)("th",{className:"wf-grid-th",children:(0,Le.jsxs)("div",{className:"wf-grid-th-content",children:[(0,Le.jsx)("span",{className:"wf-grid-th-icon",children:Ex(i.type)}),(0,Le.jsx)("span",{className:"wf-grid-th-title",children:i.title})]})},i.id)),(0,Le.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Le.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,Le.jsx)(Ke,{size:15})})}),(0,Le.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,Le.jsx)("tbody",{children:e.rows.map((i,s)=>(0,Le.jsxs)("tr",{className:l,children:[(0,Le.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,Le.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(f=>f.id===u.id),p=i.cells[d];return(0,Le.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(p)?p:[];return(0,Le.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((y,w)=>(0,Le.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",y.name]},w)),g.length===0&&(0,Le.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let f=typeof p=="string"||typeof p=="number"?String(p):"";return(0,Le.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:f,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(s,d,g.target.value)})})()},u.id)}),(0,Le.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,Le.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,Le.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,Le.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,Le.jsx)(Ke,{size:14}),(0,Le.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Sl=R(J(),1);var fa=R(X(),1),mR=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],sk=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Ft(),[n,r]=(0,Sl.useState)(e.initialTitle),[l,i]=(0,Sl.useState)(e.initialType),s=(0,Sl.useRef)(null);(0,Sl.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),i(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let p=n.trim();if(!p){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(p,l):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,p,l),t()};return(0,fa.jsx)(fl,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,fa.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,fa.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,fa.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,fa.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,fa.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,fa.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,fa.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,fa.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,fa.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,fa.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,fa.jsx)(da,{value:l,options:mR,onChange:d=>i(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var Yi=R(X(),1),ck=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Ft();return(0,uk.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,dk.createPortal)((0,Yi.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,Yi.jsx)(lk,{}),(0,Yi.jsx)(ik,{}),(0,Yi.jsx)(sk,{})]}),document.body)};var Bt=R(X(),1);dp(Y_);dp(W_);dp(tk);var gR=o_(),hR={animated:AL},fk={maxZoom:1},xR={x:0,y:0,zoom:1},bR=[1,2],yR=96,wR=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:u}=_a(),{nodes:d,edges:p,onNodesChange:c,onEdgesChange:f}=yL(),g=se(K=>K.applyCanvasInputMutation),y=se(K=>K.setNodes),w=se(K=>K.setSelectedElement),x=se(K=>K.pushHistory),h=se(K=>K.undo),m=se(K=>K.redo),b=wL(),C=vL(),[S,v]=(0,tt.useState)(null),[_,k]=(0,tt.useState)(!1),[T,N]=(0,tt.useState)(!1),[U,H]=(0,tt.useState)(!1),[L,M]=(0,tt.useState)(!1),[E,I]=(0,tt.useState)(void 0),[A,z]=(0,tt.useState)("select"),V=(0,tt.useRef)(0),D=(0,tt.useMemo)(()=>d.some(K=>K.selected),[d]),F=t_(y,w),j=ge(),W=j("menu.generateFromNode"),{menuState:Z,onConnectStart:ne,onConnectEnd:ee,onMenuSelect:q,onMenuClose:$}=QL({onReject:v});(0,tt.useEffect)(()=>{x()},[d,p,x]);let ue=(0,tt.useMemo)(()=>e?d.map(K=>({...K,data:{...K.data,__catalog:e}})):d,[d,e]),ie=(0,tt.useCallback)(K=>{let Fe=g({addEdges:[K]});if(Fe.status==="rejected"){let at=j(rp(Fe.reasonCode));v(at),Wt.warning(at)}else v(null)},[g,j]),te=(0,tt.useCallback)(K=>{let Fe=se.getState();return GL(K,Fe.nodes,Fe.edges)},[]),oe=(0,tt.useCallback)((K,Fe)=>{let at=V.current,Da=Fe??{x:120+at%3*420,y:120+Math.floor(at/3)*360};if(K==="table"||K==="video_composition"){let bo=n_(K,Da,`node_${K}_${Date.now()}`);if(!bo)return;V.current+=1,y(bp=>hx(bp,[{...bo,selected:!0}]));return}let Sr=hl(K,Da);Sr.nodes.length!==0&&(V.current+=1,y(bo=>hx(bo,Sr.nodes)))},[y]),ye=(0,tt.useCallback)(K=>{let Fe=K.nodes.map(Da=>Da.id),at=K.edges.map(Da=>Da.id);Fe.length===0&&at.length===0||g({removeNodeIds:Fe,removeEdgeIds:at})},[g]),{menu:ve,handleNodeContextMenu:Y,handlePaneContextMenu:ce,handleSelectionContextMenu:ke,closeMenu:it,handleMenuAction:qt,handleAddNodeFromMenu:$t}=a_({screenToFlowPosition:i,setNodes:y,copySelectedNodes:F.copySelectedNodes,pasteNodes:F.pasteNodes,duplicateSelectedNodes:F.duplicateSelectedNodes,deleteSelectedNodes:F.deleteSelectedNodes,selectAllNodes:F.selectAllNodes,clearSelection:F.clearSelection,undo:h,redo:m,onExecuteNodeIds:t,onAddNode:oe}),Cr=(0,tt.useCallback)(K=>{let Fe=K.type==="video"?"video":K.type==="image"?"image":"text",at=V.current++,Da={x:200+at%4*50,y:200+at%4*40},bo=hl(Fe,Da,{title:K.name,content:K.path,previewUrl:K.previewUrl,status:"ready"}).nodes[0];bo&&(g({addNodes:[bo]}),w("node",bo.id),Wt.success(j("toolbar.assets")+": "+K.name))},[g,w,j]);VL({onCopy:F.copySelectedNodes,onPaste:()=>F.pasteNodes(),onSelectAll:F.selectAllNodes,onDeleteSelected:F.deleteSelectedNodes,onClearSelection:F.clearSelection,onDuplicate:F.duplicateSelectedNodes,onUndo:h,onRedo:m,hasSelection:D,onToggleAssets:()=>N(K=>!K),onToggleShortcuts:()=>H(K=>!K),onToggleMinimap:()=>k(K=>!K),onToggleAddMenu:()=>M(K=>!K),onSetPointerMode:K=>z(K),onFitView:()=>s(fk),onResetZoom:()=>u(1),onCategoryKey:K=>{N(!0),I(K)}});let Uo=(0,tt.useCallback)((K,Fe)=>{w("node",Fe.id)},[w]),Fo=(0,tt.useCallback)(()=>{w("none",null),it()},[w,it]),pa=(0,tt.useCallback)(()=>{y(K=>K.map((Fe,at)=>({...Fe,position:{x:120+at%3*440,y:120+Math.floor(at/3)*360}})))},[y]);return(0,Bt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Bt.jsx)(zS,{nodes:ue,edges:p,onNodesChange:c,onEdgesChange:f,onConnect:ie,isValidConnection:te,onConnectStart:ne,onConnectEnd:ee,onNodeClick:Uo,onPaneClick:Fo,onNodeContextMenu:Y,onPaneContextMenu:ce,onSelectionContextMenu:ke,onDelete:ye,nodeTypes:gR,edgeTypes:hR,fitView:!0,fitViewOptions:fk,defaultViewport:xR,minZoom:mx.minZoom,maxZoom:mx.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:A==="pan"?!0:bR,panOnScroll:!0,panOnScrollMode:io.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:A==="select",selectionMode:pn.Partial,defaultEdgeOptions:Xf,connectOnClick:!1,connectionRadius:yR,onlyRenderVisibleElements:!0,children:(0,Bt.jsx)(HS,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:Eo.Dots})}),(0,Bt.jsx)(RL,{isMinimapOpen:_,onToggleMinimap:()=>k(K=>!K),onAlignGrid:pa,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Bt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Bt.jsx)(qS,{pannable:!0,zoomable:!0})}),(0,Bt.jsx)(DL,{onAddNode:oe,onUndo:h,onRedo:m,canUndo:b,canRedo:C,pointerMode:A,onPointerModeChange:z,onToggleAssets:()=>N(K=>!K),onToggleShortcuts:()=>H(K=>!K),isAssetsOpen:T,isShortcutsOpen:U,isAddMenuOpen:L,onToggleAddMenu:()=>M(K=>!K)}),(0,Bt.jsx)(zL,{isOpen:T,onClose:()=>N(!1),onInsertAsset:Cr,selectedCategoryIndex:E}),(0,Bt.jsx)(OL,{isOpen:U,onClose:()=>H(!1)}),(0,Bt.jsx)(FL,{x:ve.x,y:ve.y,visible:ve.visible,context:ve.context,onClose:it,onAction:qt,onAddNode:$t,canUndo:b,canRedo:C,hasClipboard:F.hasClipboard,hasSelection:D}),(0,Bt.jsx)(np,{visible:Z.visible,x:Z.x,y:Z.y,title:W,options:Z.options,onSelect:q,onClose:$}),(0,Bt.jsx)(ck,{}),S&&(0,Bt.jsx)("div",{className:"wf-rejected-toast",children:S})]})},vR=e=>(0,Bt.jsx)(ox,{children:(0,Bt.jsx)(wR,{...e})}),pk=vR;var gt=R(J(),1);var xo="/omnimux-workflow";var Aa={manifest:`${xo}/api/manifest`,canvasJs:`${xo}/canvas.js`,workspaces:`${xo}/api/workspaces`,workspace:e=>`${xo}/api/workspaces/${e}`,workspaceVersion:e=>`${xo}/api/workspaces/${e}/version`,capabilities:`${xo}/api/capabilities`,media:`${xo}/media`,executions:e=>`${xo}/api/workspaces/${e}/executions`,execution:(e,t)=>`${xo}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${xo}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${xo}/api/workspaces/${e}/executions/${t}/events`};async function Ho(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function mk(){return Ho(Aa.capabilities)}function gk(){return Ho(Aa.workspaces)}function Nx(e,t){return Ho(Aa.workspaces,{method:"POST",body:{name:e,id:t}})}function sd(e){return Ho(Aa.workspace(encodeURIComponent(e)))}function hk(e){return Ho(Aa.workspaceVersion(encodeURIComponent(e)))}function xk(e,t){return Ho(Aa.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function bk(e,t={}){return Ho(Aa.executions(encodeURIComponent(e)),{method:"POST",body:t})}function yk(e){return Ho(Aa.executions(encodeURIComponent(e)))}function wk(e,t){return Ho(Aa.execution(encodeURIComponent(e),encodeURIComponent(t)))}function vk(e,t,a){return Ho(Aa.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var Ck=new Set(["pending","running","paused"]),CR=new Set(["completed","error","cancelled"]);function ji(e,t){let a=se.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function Sk(e,t){let a=(0,gt.useRef)(null),o=(0,gt.useRef)(e);o.current=e;let n=(0,gt.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,gt.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),l=(0,gt.useCallback)((w,x)=>{Ve.getState().setExecution({status:w,error:x,progress:{...Ve.getState().progress,percentage:w==="completed"?100:Ve.getState().progress.percentage}})},[]),i=(0,gt.useCallback)((w,x)=>{let h;try{h=JSON.parse(x)}catch{return}let m=Ve.getState();switch(w){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:h.totalNodes??0,completed:0,running:0,pending:h.totalNodes??0,percentage:0}});break}case"node_start":{if(!h.nodeId)break;m.setNodeStatus(h.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),ji(h.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!h.nodeId)break;m.setNodeStatus(h.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:h.progress??m.progress.percentage}});let b=h.output??{},C={executionStatus:"completed",executionError:void 0};if(b.text&&(C.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let S=b.mediaAssets[0];C.mediaAssets=b.mediaAssets,S.type==="image"&&(C.mediaUrl=S.url),C.taskId=`exec-${h.executionId??""}`}ji(h.nodeId,C);break}case"node_error":{if(!h.nodeId)break;m.setNodeStatus(h.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),ji(h.nodeId,{executionStatus:"error",executionError:h.error??hn("error.nodeExecutionFailed")});break}case"node_skipped":{if(!h.nodeId)break;m.setNodeStatus(h.nodeId,"skipped"),ji(h.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{l("completed",null),r();break}case"execution_error":{l("error",h.error??hn("error.executionFailed")),r();break}case"execution_cancelled":{l("cancelled",null),r();break}default:break}},[l,r]),s=(0,gt.useCallback)(w=>{r();let x=o.current;if(!x)return;let h=new EventSource(Aa.executionEvents(encodeURIComponent(x),encodeURIComponent(w)));a.current=h;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)h.addEventListener(b,C=>{i(b,C.data)});h.onerror=()=>{let b=Ve.getState().status;CR.has(b)&&r()}},[r,i]),u=(0,gt.useCallback)(w=>{let x=Ve.getState();x.setExecution({executionId:w.id,status:w.status,error:w.error,progress:{total:w.progress.total,completed:w.progress.completed,running:w.progress.running,pending:w.progress.pending,percentage:w.progress.percentage}});for(let[h,m]of Object.entries(w.nodeStates??{})){x.setNodeStatus(h,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let C=w.nodeOutputs?.[h];C&&(C.text&&(b.generatedContent=C.text),C.mediaAssets&&C.mediaAssets.length>0&&(b.mediaAssets=C.mediaAssets,C.mediaAssets[0]&&C.mediaAssets[0].type==="image"&&(b.mediaUrl=C.mediaAssets[0].url))),ji(h,b)}},[]),d=(0,gt.useCallback)(async(w={})=>{let x=o.current;if(!x)return;if(r(),Ve.getState().resetExecution(),Ve.getState().setExecution({status:"pending"}),w.mode==="single"&&w.nodeIds&&w.nodeIds[0]&&(Ve.getState().setNodeStatus(w.nodeIds[0],"pending"),ji(w.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let h=await bk(x,{mode:w.mode??"full",nodeIds:w.nodeIds});if(!h.ok||!h.body.execution){Ve.getState().setExecution({status:"error",error:h.body.message??hn("error.createExecutionFailed")});return}Ve.getState().setExecution({executionId:h.body.execution.id}),s(h.body.execution.id)},[r,s]),p=(0,gt.useCallback)(async w=>{let x=o.current,{executionId:h}=Ve.getState();if(!x||!h)return;let m=await vk(x,h,w);!m.ok&&m.body.message&&Ve.getState().setExecution({error:m.body.message})},[]),c=(0,gt.useCallback)(()=>p("pause"),[p]),f=(0,gt.useCallback)(()=>p("resume"),[p]),g=(0,gt.useCallback)(()=>p("cancel"),[p]),y=(0,gt.useCallback)(()=>{r(),Ve.getState().resetExecution()},[r]);return(0,gt.useEffect)(()=>{if(!e)return;let w=!1;return(async()=>{try{let x=await yk(e);if(w||!x.ok)return;let h=(x.body.executions??[]).find(b=>Ck.has(b.status));if(!h)return;let m=await wk(e,h.id);if(w||!m.ok||!m.body.execution)return;u(m.body.execution),Ck.has(m.body.execution.status)&&s(h.id)}catch{}})(),()=>{w=!0}},[e,u,s]),(0,gt.useEffect)(()=>(Ve.getState().setStartNodeExecution(x=>{d({mode:"single",nodeIds:[x]})}),()=>{Ve.getState().setStartNodeExecution(null)}),[d]),(0,gt.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:f,cancel:g,reset:y}}var Ll=R(J(),1);function Lk(e={}){let t=e.workspaceId,[a,o]=(0,Ll.useState)({phase:"loading"}),[n,r]=(0,Ll.useState)(()=>id()),l=se(d=>d.hydrateGraph),i=se(d=>d.resetStore),s=se(d=>d.nodes.length),u=(0,Ll.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Ll.useEffect)(()=>{let d=!1;return o({phase:"loading"}),(async()=>{try{if(mk().then(g=>{!d&&g.ok&&(r(g.body),__(g.body))}),t){let g=await sd(t);if(d)return;if(g.ok&&g.body.workspace){l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace});return}let y=await Nx("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!y.ok||!y.body.workspace)throw new Error(y.body.message??hn("error.createWorkspaceFailed"));l(y.body.workspace.nodes,y.body.workspace.edges),o({phase:"ready",workspace:y.body.workspace});return}let p=await gk();if(d)return;let c=p.body.workspaces?.[0]?.id;if(!c){let g=await Nx("\u6211\u7684\u5DE5\u4F5C\u6D41");if(d)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??hn("error.createWorkspaceFailed"));c=g.body.workspace.id}let f=await sd(c);if(d)return;if(!f.ok||!f.body.workspace)throw new Error(f.body.message??hn("error.loadWorkspaceFailed"));l(f.body.workspace.nodes,f.body.workspace.edges),o({phase:"ready",workspace:f.body.workspace})}catch(p){d||o({phase:"error",message:p instanceof Error?p.message:String(p)})}})(),()=>{d=!0,u.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var Qe=R(J(),1);function xp(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function Tx(e){return e.map(t=>{let a=t,o=xp(a.data);delete o.__catalog;let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=xp(a.style)),n})}function Ax(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=xp(a.data)),a.style&&typeof a.style=="object"&&(o.style=xp(a.style)),o})}function Sn(e,t){return JSON.stringify({nodes:Tx(e),edges:Ax(t)})}var SR=1e3,LR=2500,_R=3e3;function Zi(){let{nodes:e,edges:t}=se.getState(),a=sx(e,t);return{nodes:a.nodes,edges:a.edges}}function _k(e,t={}){let a=t.enabled!==!1,[o,n]=(0,Qe.useState)("idle"),[r,l]=(0,Qe.useState)(!1),i=(0,Qe.useRef)(e),s=(0,Qe.useRef)(0),u=(0,Qe.useRef)(""),d=(0,Qe.useRef)(0),p=(0,Qe.useRef)(""),c=(0,Qe.useRef)(null),f=(0,Qe.useRef)(null),g=(0,Qe.useRef)(!1),y=(0,Qe.useRef)(a);y.current=a;let w=(0,Qe.useRef)(t.onSaved);w.current=t.onSaved,(0,Qe.useEffect)(()=>{i.current=e,e&&(s.current=e.version,p.current!==e.id&&(p.current=e.id,u.current=Sn(e.nodes,e.edges),d.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let x=()=>{f.current&&(clearTimeout(f.current),f.current=null)},h=(0,Qe.useCallback)(async(v,_,k=!1)=>{let T=i.current;if(!T||!k&&!y.current||g.current)return;let N=Jf({lastSavedNodeCount:d.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:u.current,nextSignature:Sn(v.nodes,v.edges)});if(!N.persist||!N.snapshot)return;let{nodes:U,edges:H}=N.snapshot,L=T.name;g.current=!0,n("saving");try{let M=await xk(T.id,{name:L,nodes:Tx(U),edges:Ax(H),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,u.current=Sn(U,H),d.current=U.length,l(!1),n("saved"),x(),f.current=setTimeout(()=>{n(E=>E==="saved"?"idle":E)},LR),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,Qe.useEffect)(()=>{if(!a)return;let v=(k="autosave")=>{if(!i.current||!y.current)return;let N=Zi(),H=Sn(N.nodes,N.edges)!==u.current;if(l(H),!H){c.current&&(clearTimeout(c.current),c.current=null),n(I=>I==="pending"?"idle":I);return}let L=od(N.nodes.length,k);if(!ix({lastSavedNodeCount:d.current,nextNodeCount:N.nodes.length,cause:L})){c.current&&(clearTimeout(c.current),c.current=null),l(!1),n(I=>I==="pending"?"idle":I);return}n(I=>I==="saving"||I==="conflict"?I:"pending"),c.current&&clearTimeout(c.current);let M={nodes:N.nodes,edges:N.edges},E=L;c.current=setTimeout(()=>{c.current=null,h(M,E)},SR)},_=se.subscribe(()=>{v("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[h,a]),(0,Qe.useEffect)(()=>{if(!a)return;let v=()=>{if(!y.current||!i.current)return;let k=Zi(),T=od(k.nodes.length,"flush"),N=Jf({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:T,lastSavedSignature:u.current,nextSignature:Sn(k.nodes,k.edges)});!N.persist||!N.snapshot||h(N.snapshot,T)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),x()}},[h,a]);let m=(0,Qe.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let v=Zi();await h(v,od(v.nodes.length,"autosave"))},[h]),b=(0,Qe.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!i.current)return;let _=Zi(),k="flush",T=Jf({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:k,lastSavedSignature:u.current,nextSignature:Sn(_.nodes,_.edges)});!T.persist||!T.snapshot||h(T.snapshot,k,!0)},[h]),C=(0,Qe.useCallback)(async()=>{let v=Zi();await h(v,od(v.nodes.length,"autosave"))},[h]),S=(0,Qe.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await sd(v.id);if(!_.ok||!_.body.workspace){n("error");return}let k=_.body.workspace;s.current=k.version,u.current=Sn(k.nodes,k.edges),d.current=k.nodes.length,se.getState().hydrateGraph(k.nodes,k.edges),l(!1),n("idle"),w.current?.(k)},[]);return(0,Qe.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!y.current||typeof document<"u"&&document.visibilityState==="hidden")return;let T=i.current;if(!(!T||g.current)){v=!0;try{let N=await hk(T.id);if(!N.ok||typeof N.body.version!="number"||N.body.version<=s.current)return;let U=Zi();if(Sn(U.nodes,U.edges)!==u.current){s.current=N.body.version,n("conflict");return}await S()}catch{}finally{v=!1}}},k=setInterval(()=>{_()},_R);return()=>clearInterval(k)},[a,S]),{status:o,isDirty:r,saveNow:m,flushPendingSave:b,resolveConflict:C,reloadFromServer:S}}var Qt=R(X(),1),kR=({locale:e,workspaceId:t})=>{let a=ge(),o=(0,Wi.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=Lk({workspaceId:t,beforeReset:()=>{o.current()}});(0,Wi.useEffect)(()=>{NL(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=(0,Wi.useCallback)(p=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:p}:c)},[r]),u=_k(i,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=Sk(i?i.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,Qt.jsx)("div",{className:"wf-canvas-root",children:(0,Qt.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Qt.jsx)("div",{className:"wf-canvas-root",children:(0,Qt.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Qt.jsx)("span",{children:n.message}),(0,Qt.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Qt.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,Qt.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Qt.jsx)("span",{children:a("app.conflictBanner")}),(0,Qt.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Qt.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Qt.jsx)("main",{className:"wf-canvas-main",children:(0,Qt.jsx)(pk,{catalog:l,onExecuteNodeIds:p=>{d.startExecution({mode:"subset",nodeIds:p})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},Dx=kR;var kk=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Ik=`/**
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
  --wb-node-ring: var(--wb-accent);
  --wb-node-radius: 20px;
  --wb-danger-soft: color-mix(in srgb, var(--wb-danger) 12%, transparent);
  --wb-beam-start: var(--wb-accent);
  --wb-beam-end: var(--wb-accent-hover);

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

`;var Mk=`/**
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
   inset ring \u7528 --wb-node-ring\uFF08= --wb-accent\uFF0Cdsh \u84DD\uFF09\u3002
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

/* \u9009\u4E2D\u8282\u70B9\u7684\u56DB\u89D2\u65B9\u5F62\u7F29\u653E\u951A\u70B9\uFF08\u5BF9\u9F50\u622A\u56FE\u8BBE\u8BA1\uFF09 */
.wf-node-corner {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #ffffff;
  border: 1px solid #1a1a1a;
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

/* ==================== \u9879\u76EE\u8D44\u4EA7\u62BD\u5C49\uFF08AssetsDrawer\uFF09 ==================== */

.wf-assets-drawer-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(2px);
  z-index: 40;
  display: flex;
  justify-content: flex-end;
  animation: wf-fade-in 0.15s ease;
}

@keyframes wf-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wf-assets-drawer {
  width: 380px;
  max-width: 90vw;
  height: 100%;
  background: var(--wb-surface);
  border-left: 1px solid var(--wb-border);
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  animation: wf-slide-in-right 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

@keyframes wf-slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.wf-assets-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--wb-border);
}

.wf-assets-drawer__title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-assets-drawer__title {
  font-size: var(--wb-fs-title);
  font-weight: 600;
  color: var(--wb-text-primary);
}

.wf-assets-drawer__badge {
  font-size: var(--wb-fs-caption);
  padding: 2px 6px;
  border-radius: 6px;
  background: var(--wb-accent-soft);
  color: var(--wb-accent);
  font-weight: 500;
}

.wf-assets-drawer__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--wb-text-muted);
  cursor: pointer;
  transition: all 120ms ease;
}

.wf-assets-drawer__close:hover {
  background: var(--wb-dock-item-hover);
  color: var(--wb-text-primary);
}

.wf-assets-drawer__search-row {
  padding: 12px 20px 8px;
}

.wf-assets-drawer__search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--wb-pill-bg);
  border: 1px solid var(--wb-border);
  border-radius: 10px;
}

.wf-assets-drawer__search-input {
  border: none;
  background: transparent;
  outline: none;
  font-size: var(--wb-fs-body);
  color: var(--wb-text-primary);
  width: 100%;
}

.wf-assets-drawer__tabs {
  display: flex;
  gap: 4px;
  padding: 8px 20px;
  overflow-x: auto;
  scrollbar-width: none;
  border-bottom: 1px solid var(--wb-border);
}

.wf-assets-drawer__tabs::-webkit-scrollbar {
  display: none;
}

.wf-assets-drawer__tab {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--wb-text-secondary);
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 120ms ease;
}

.wf-assets-drawer__tab:hover {
  background: var(--wb-dock-item-hover);
  color: var(--wb-text-primary);
}

.wf-assets-drawer__tab--active {
  background: var(--wb-accent-soft);
  color: var(--wb-accent);
}

.wf-assets-drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}

.wf-assets-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.wf-asset-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--wb-border);
  border-radius: 12px;
  background: var(--wb-surface);
  overflow: hidden;
  cursor: pointer;
  transition: all 150ms ease;
  position: relative;
}

.wf-asset-card:hover {
  border-color: var(--wb-accent);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.wf-asset-card__preview {
  height: 100px;
  background: var(--wb-pill-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.wf-asset-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wf-asset-card__info {
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wf-asset-card__name {
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  color: var(--wb-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wf-asset-card__category {
  font-size: 11px;
  color: var(--wb-text-muted);
}

.wf-assets-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 240px;
  gap: 8px;
  color: var(--wb-text-muted);
  font-size: var(--wb-fs-body);
}

.wf-assets-drawer__footer {
  padding: 12px 20px;
  border-top: 1px solid var(--wb-border);
  background: var(--wb-surface-secondary);
}

.wf-assets-drawer__tip {
  font-size: 11px;
  color: var(--wb-text-muted);
  line-height: 1.4;
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

/* ==================== video_composition launcher (350\xD7440) ==================== */

.wf-clip-launcher {
  width: 350px;
}

.wf-clip-launcher__card {
  width: 350px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  gap: 14px;
}

.wf-clip-launcher__header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: none;
}

.wf-clip-launcher__icon {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
  background: color-mix(in srgb, var(--dsw-alias-info, var(--wb-accent, #5b68f6)) 18%, transparent);
  box-shadow:
    6px 6px 0 -2px color-mix(in srgb, var(--dsw-alias-info, var(--wb-accent, #5b68f6)) 28%, transparent),
    12px 12px 0 -4px color-mix(in srgb, var(--dsw-alias-info, var(--wb-accent, #5b68f6)) 14%, transparent);
}

.wf-clip-launcher__icon-film {
  position: absolute;
  right: 4px;
  bottom: 4px;
  opacity: 0.9;
}

.wf-clip-launcher__heading {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wf-clip-launcher__title {
  margin: 0;
  font-size: 15px;
  font-weight: 650;
  line-height: 20px;
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
}

.wf-clip-status {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1px solid var(--dsw-alias-border, var(--wb-border, rgba(255, 255, 255, 0.12)));
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary, inherit));
}

.wf-clip-status--idle {
  background: color-mix(in srgb, var(--dsw-alias-bg-elevated, var(--wb-surface-raised, #222)) 80%, transparent);
}

.wf-clip-status--busy {
  color: var(--dsw-alias-info, var(--wb-accent, #60a5fa));
  border-color: color-mix(in srgb, var(--dsw-alias-info, var(--wb-accent, #60a5fa)) 40%, transparent);
}

.wf-clip-status--done {
  color: var(--dsw-alias-success, var(--wb-success, #34d399));
  border-color: color-mix(in srgb, var(--dsw-alias-success, var(--wb-success, #34d399)) 40%, transparent);
}

.wf-clip-status--error {
  color: var(--dsw-alias-danger, var(--wb-danger, #f87171));
  border-color: color-mix(in srgb, var(--dsw-alias-danger, var(--wb-danger, #f87171)) 40%, transparent);
}

.wf-clip-launcher__empty,
.wf-clip-launcher__result {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wf-clip-launcher__blurb {
  margin: 0;
  flex: 1 1 auto;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary, inherit));
}

.wf-clip-launcher__preview {
  flex: 1 1 auto;
  min-height: 180px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--dsw-alias-bg-base, var(--wb-surface-raised, #111));
  border: 1px solid var(--dsw-alias-border, var(--wb-border, rgba(255, 255, 255, 0.12)));
}

.wf-clip-launcher__thumb,
.wf-clip-launcher__thumb-fallback {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary, inherit));
}

.wf-clip-launcher__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 0;
}

.wf-clip-launcher__meta dt {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary, inherit));
}

.wf-clip-launcher__meta dd {
  margin: 2px 0 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
}

.wf-clip-launcher__actions {
  display: flex;
  gap: 8px;
}

.wf-clip-launcher__btn {
  flex: 1 1 auto;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border, var(--wb-border, rgba(255, 255, 255, 0.12)));
  background: var(--dsw-alias-bg-elevated, var(--wb-surface, #1a1a1c));
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.wf-clip-launcher__btn--primary {
  background: var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6));
  border-color: transparent;
  color: var(--dsw-alias-on-primary, #fff);
}

.wf-clip-launcher__open {
  width: 100%;
  flex: none;
}




`;var Ek=`/**
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
  border-color: var(--wb-accent, #165dff);
  box-shadow: 0 0 0 2px var(--wb-accent-soft, rgba(22, 93, 255, 0.15));
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
  border: 1.5px solid var(--wb-text-primary, #1a1d26);
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
`;var TR=[{id:"omnimux-workflow-xyflow-base",css:kk},{id:"omnimux-workflow-theme",css:Ik},{id:"omnimux-workflow-components",css:Mk},{id:"omnimux-workflow-table-node",css:Ek}];function Nk(){for(let{id:e,css:t}of TR){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Rx=R(X(),1),ud=new WeakMap;function AR(e,t){if(!e||ud.has(e))return;Nk();let a=(0,Tk.createRoot)(e);ud.set(e,{root:a,lastProps:t}),a.render((0,Rx.jsx)(Dx,{...t}))}function DR(e,t){let a=ud.get(e);a&&(a.lastProps=t,a.root.render((0,Rx.jsx)(Dx,{...t})))}function RR(e){let t=ud.get(e);t&&(t.root.unmount(),ud.delete(e))}return HI(zR);})();
