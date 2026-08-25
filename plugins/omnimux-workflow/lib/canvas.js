var __omnimuxWorkflowCanvas=(()=>{var rI=Object.create;var _u=Object.defineProperty;var lI=Object.getOwnPropertyDescriptor;var iI=Object.getOwnPropertyNames;var sI=Object.getPrototypeOf,uI=Object.prototype.hasOwnProperty;var Vt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},dI=(e,t)=>{for(var a in t)_u(e,a,{get:t[a],enumerable:!0})},Xh=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of iI(t))!uI.call(e,n)&&n!==a&&_u(e,n,{get:()=>t[n],enumerable:!(o=lI(t,n))||o.enumerable});return e};var U=(e,t,a)=>(a=e!=null?rI(sI(e)):{},Xh(t||!e||!e.__esModule?_u(a,"default",{value:e,enumerable:!0}):a,e)),cI=e=>Xh(_u({},"__esModule",{value:!0}),e);var tx=Vt(Ge=>{"use strict";function Nf(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<Iu(n,t))e[o]=t,e[a]=n,a=o;else break e}}function Ja(e){return e.length===0?null:e[0]}function Mu(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,u=e[s];if(0>Iu(i,a))s<n&&0>Iu(u,i)?(e[o]=u,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>Iu(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function Iu(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Yh=performance,Ge.unstable_now=function(){return Yh.now()}):(Ef=Date,Zh=Ef.now(),Ge.unstable_now=function(){return Ef.now()-Zh});var Yh,Ef,Zh,vo=[],Qo=[],fI=1,ya=null,Mt=3,Df=!1,fi=!1,pi=!1,Rf=!1,Wh=typeof setTimeout=="function"?setTimeout:null,Qh=typeof clearTimeout=="function"?clearTimeout:null,Kh=typeof setImmediate<"u"?setImmediate:null;function ku(e){for(var t=Ja(Qo);t!==null;){if(t.callback===null)Mu(Qo);else if(t.startTime<=e)Mu(Qo),t.sortIndex=t.expirationTime,Nf(vo,t);else break;t=Ja(Qo)}}function zf(e){if(pi=!1,ku(e),!fi)if(Ja(vo)!==null)fi=!0,Fr||(Fr=!0,qr());else{var t=Ja(Qo);t!==null&&Of(zf,t.startTime-e)}}var Fr=!1,mi=-1,$h=5,Jh=-1;function ex(){return Rf?!0:!(Ge.unstable_now()-Jh<$h)}function Af(){if(Rf=!1,Fr){var e=Ge.unstable_now();Jh=e;var t=!0;try{e:{fi=!1,pi&&(pi=!1,Qh(mi),mi=-1),Df=!0;var a=Mt;try{t:{for(ku(e),ya=Ja(vo);ya!==null&&!(ya.expirationTime>e&&ex());){var o=ya.callback;if(typeof o=="function"){ya.callback=null,Mt=ya.priorityLevel;var n=o(ya.expirationTime<=e);if(e=Ge.unstable_now(),typeof n=="function"){ya.callback=n,ku(e),t=!0;break t}ya===Ja(vo)&&Mu(vo),ku(e)}else Mu(vo);ya=Ja(vo)}if(ya!==null)t=!0;else{var r=Ja(Qo);r!==null&&Of(zf,r.startTime-e),t=!1}}break e}finally{ya=null,Mt=a,Df=!1}t=void 0}}finally{t?qr():Fr=!1}}}var qr;typeof Kh=="function"?qr=function(){Kh(Af)}:typeof MessageChannel<"u"?(Tf=new MessageChannel,jh=Tf.port2,Tf.port1.onmessage=Af,qr=function(){jh.postMessage(null)}):qr=function(){Wh(Af,0)};var Tf,jh;function Of(e,t){mi=Wh(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$h=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return Mt};Ge.unstable_next=function(e){switch(Mt){case 1:case 2:case 3:var t=3;break;default:t=Mt}var a=Mt;Mt=t;try{return e()}finally{Mt=a}};Ge.unstable_requestPaint=function(){Rf=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Mt;Mt=e;try{return t()}finally{Mt=a}};Ge.unstable_scheduleCallback=function(e,t,a){var o=Ge.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:fI++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Nf(Qo,e),Ja(vo)===null&&e===Ja(Qo)&&(pi?(Qh(mi),mi=-1):pi=!0,Of(zf,a-o))):(e.sortIndex=n,Nf(vo,e),fi||Df||(fi=!0,Fr||(Fr=!0,qr()))),e};Ge.unstable_shouldYield=ex;Ge.unstable_wrapCallback=function(e){var t=Mt;return function(){var a=Mt;Mt=t;try{return e.apply(this,arguments)}finally{Mt=a}}}});var ox=Vt((S8,ax)=>{"use strict";ax.exports=tx()});var mx=Vt(fe=>{"use strict";var Hf=Symbol.for("react.transitional.element"),pI=Symbol.for("react.portal"),mI=Symbol.for("react.fragment"),gI=Symbol.for("react.strict_mode"),hI=Symbol.for("react.profiler"),xI=Symbol.for("react.consumer"),yI=Symbol.for("react.context"),bI=Symbol.for("react.forward_ref"),wI=Symbol.for("react.suspense"),vI=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),CI=Symbol.for("react.activity"),nx=Symbol.iterator;function SI(e){return e===null||typeof e!="object"?null:(e=nx&&e[nx]||e["@@iterator"],typeof e=="function"?e:null)}var ux={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dx=Object.assign,cx={};function Gr(e,t,a){this.props=e,this.context=t,this.refs=cx,this.updater=a||ux}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fx(){}fx.prototype=Gr.prototype;function Uf(e,t,a){this.props=e,this.context=t,this.refs=cx,this.updater=a||ux}var qf=Uf.prototype=new fx;qf.constructor=Uf;dx(qf,Gr.prototype);qf.isPureReactComponent=!0;var rx=Array.isArray;function Pf(){}var Be={H:null,A:null,T:null,S:null},px=Object.prototype.hasOwnProperty;function Ff(e,t,a){var o=a.ref;return{$$typeof:Hf,type:e,key:t,ref:o!==void 0?o:null,props:a}}function LI(e,t){return Ff(e.type,t,e.props)}function Vf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hf}function _I(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var lx=/\/+/g;function Bf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_I(""+e.key):t.toString(36)}function II(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Pf,Pf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Vr(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hf:case pI:l=!0;break;case sx:return l=e._init,Vr(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+Bf(e,0):o,rx(n)?(a="",l!=null&&(a=l.replace(lx,"$&/")+"/"),Vr(n,t,a,"",function(u){return u})):n!=null&&(Vf(n)&&(n=LI(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(lx,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(rx(e))for(var s=0;s<e.length;s++)o=e[s],r=i+Bf(o,s),l+=Vr(o,t,a,r,n);else if(s=SI(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+Bf(o,s++),l+=Vr(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Vr(II(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function Eu(e,t,a){if(e==null)return e;var o=[],n=0;return Vr(e,o,"","",function(r){return t.call(a,r,n++)}),o}function kI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ix=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},MI={map:Eu,forEach:function(e,t,a){Eu(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Eu(e,function(){t++}),t},toArray:function(e){return Eu(e,function(t){return t})||[]},only:function(e){if(!Vf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Activity=CI;fe.Children=MI;fe.Component=Gr;fe.Fragment=mI;fe.Profiler=hI;fe.PureComponent=Uf;fe.StrictMode=gI;fe.Suspense=wI;fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Be;fe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Be.H.useMemoCache(e)}};fe.cache=function(e){return function(){return e.apply(null,arguments)}};fe.cacheSignal=function(){return null};fe.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=dx({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!px.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return Ff(e.type,n,o)};fe.createContext=function(e){return e={$$typeof:yI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:xI,_context:e},e};fe.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)px.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return Ff(e,r,n)};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:bI,render:e}};fe.isValidElement=Vf;fe.lazy=function(e){return{$$typeof:sx,_payload:{_status:-1,_result:e},_init:kI}};fe.memo=function(e,t){return{$$typeof:vI,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Be.T,a={};Be.T=a;try{var o=e(),n=Be.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Pf,ix)}catch(r){ix(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Be.T=t}};fe.unstable_useCacheRefresh=function(){return Be.H.useCacheRefresh()};fe.use=function(e){return Be.H.use(e)};fe.useActionState=function(e,t,a){return Be.H.useActionState(e,t,a)};fe.useCallback=function(e,t){return Be.H.useCallback(e,t)};fe.useContext=function(e){return Be.H.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e,t){return Be.H.useDeferredValue(e,t)};fe.useEffect=function(e,t){return Be.H.useEffect(e,t)};fe.useEffectEvent=function(e){return Be.H.useEffectEvent(e)};fe.useId=function(){return Be.H.useId()};fe.useImperativeHandle=function(e,t,a){return Be.H.useImperativeHandle(e,t,a)};fe.useInsertionEffect=function(e,t){return Be.H.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return Be.H.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Be.H.useMemo(e,t)};fe.useOptimistic=function(e,t){return Be.H.useOptimistic(e,t)};fe.useReducer=function(e,t,a){return Be.H.useReducer(e,t,a)};fe.useRef=function(e){return Be.H.useRef(e)};fe.useState=function(e){return Be.H.useState(e)};fe.useSyncExternalStore=function(e,t,a){return Be.H.useSyncExternalStore(e,t,a)};fe.useTransition=function(){return Be.H.useTransition()};fe.version="19.2.8"});var ne=Vt((_8,gx)=>{"use strict";gx.exports=mx()});var xx=Vt(zt=>{"use strict";var EI=ne();function hx(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $o(){}var Rt={d:{f:$o,r:function(){throw Error(hx(522))},D:$o,C:$o,L:$o,m:$o,X:$o,S:$o,M:$o},p:0,findDOMNode:null},AI=Symbol.for("react.portal");function TI(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:AI,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var gi=EI.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Au(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;zt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(hx(299));return TI(e,t,null,a)};zt.flushSync=function(e){var t=gi.T,a=Rt.p;try{if(gi.T=null,Rt.p=2,e)return e()}finally{gi.T=t,Rt.p=a,Rt.d.f()}};zt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Rt.d.C(e,t))};zt.prefetchDNS=function(e){typeof e=="string"&&Rt.d.D(e)};zt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=Au(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Rt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Rt.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};zt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Au(t.as,t.crossOrigin);Rt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Rt.d.M(e)};zt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=Au(a,t.crossOrigin);Rt.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};zt.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Au(t.as,t.crossOrigin);Rt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Rt.d.m(e)};zt.requestFormReset=function(e){Rt.d.r(e)};zt.unstable_batchedUpdates=function(e,t){return e(t)};zt.useFormState=function(e,t,a){return gi.H.useFormState(e,t,a)};zt.useFormStatus=function(){return gi.H.useHostTransitionStatus()};zt.version="19.2.8"});var Jo=Vt((k8,bx)=>{"use strict";function yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yx)}catch(e){console.error(e)}}yx(),bx.exports=xx()});var Tw=Vt(tc=>{"use strict";var lt=ox(),X0=ne(),NI=Jo();function q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Y0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Z0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function K0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wx(e){if(ts(e)!==e)throw Error(q(188))}function DI(e){var t=e.alternate;if(!t){if(t=ts(e),t===null)throw Error(q(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return wx(n),e;if(r===o)return wx(n),t;r=r.sibling}throw Error(q(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(q(189))}}if(a.alternate!==o)throw Error(q(190))}if(a.tag!==3)throw Error(q(188));return a.stateNode.current===a?e:t}function j0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j0(e),t!==null)return t;e=e.sibling}return null}var Ue=Object.assign,RI=Symbol.for("react.element"),Tu=Symbol.for("react.transitional.element"),Si=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),Sp=Symbol.for("react.profiler"),Q0=Symbol.for("react.consumer"),Eo=Symbol.for("react.context"),ym=Symbol.for("react.forward_ref"),Lp=Symbol.for("react.suspense"),_p=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Ip=Symbol.for("react.activity"),zI=Symbol.for("react.memo_cache_sentinel"),vx=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=vx&&e[vx]||e["@@iterator"],typeof e=="function"?e:null)}var OI=Symbol.for("react.client.reference");function kp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===OI?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case Sp:return"Profiler";case W0:return"StrictMode";case Lp:return"Suspense";case _p:return"SuspenseList";case Ip:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Si:return"Portal";case Eo:return e.displayName||"Context";case Q0:return(e._context.displayName||"Context")+".Consumer";case ym:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bm:return t=e.displayName||null,t!==null?t:kp(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return kp(e(t))}catch{}}return null}var Li=Array.isArray,le=X0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Le=NI.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,er={pending:!1,data:null,method:null,action:null},Mp=[],Qr=-1;function no(e){return{current:e}}function pt(e){0>Qr||(e.current=Mp[Qr],Mp[Qr]=null,Qr--)}function ze(e,t){Qr++,Mp[Qr]=e.current,e.current=t}var oo=no(null),qi=no(null),fn=no(null),dd=no(null);function cd(e,t){switch(ze(fn,t),ze(qi,e),ze(oo,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?M0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=M0(t),e=xw(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(oo),ze(oo,e)}function gl(){pt(oo),pt(qi),pt(fn)}function Ep(e){e.memoizedState!==null&&ze(dd,e);var t=oo.current,a=xw(t,e.type);t!==a&&(ze(qi,e),ze(oo,a))}function fd(e){qi.current===e&&(pt(oo),pt(qi)),dd.current===e&&(pt(dd),$i._currentValue=er)}var Gf,Cx;function Wn(e){if(Gf===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Gf=t&&t[1]||"",Cx=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gf+e+Cx}var Xf=!1;function Yf(e,t){if(!e||Xf)return"";Xf=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var d=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){d=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){d=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),u=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=n);break}}}finally{Xf=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wn(a):""}function BI(e,t){switch(e.tag){case 26:case 27:case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return e.child!==t&&t!==null?Wn("Suspense Fallback"):Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 15:return Yf(e.type,!1);case 11:return Yf(e.type.render,!1);case 1:return Yf(e.type,!0);case 31:return Wn("Activity");default:return""}}function Sx(e){try{var t="",a=null;do t+=BI(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ap=Object.prototype.hasOwnProperty,wm=lt.unstable_scheduleCallback,Zf=lt.unstable_cancelCallback,PI=lt.unstable_shouldYield,HI=lt.unstable_requestPaint,ia=lt.unstable_now,UI=lt.unstable_getCurrentPriorityLevel,$0=lt.unstable_ImmediatePriority,J0=lt.unstable_UserBlockingPriority,pd=lt.unstable_NormalPriority,qI=lt.unstable_LowPriority,ey=lt.unstable_IdlePriority,FI=lt.log,VI=lt.unstable_setDisableYieldValue,as=null,sa=null;function ln(e){if(typeof FI=="function"&&VI(e),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(as,e)}catch{}}var ua=Math.clz32?Math.clz32:YI,GI=Math.log,XI=Math.LN2;function YI(e){return e>>>=0,e===0?32:31-(GI(e)/XI|0)|0}var Nu=256,Du=262144,Ru=4194304;function Qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hd(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Qn(o):(l&=i,l!==0?n=Qn(l):a||(a=i&~e,a!==0&&(n=Qn(a))))):(i=o&~r,i!==0?n=Qn(i):l!==0?n=Qn(l):a||(a=o&~e,a!==0&&(n=Qn(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function os(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ZI(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(){var e=Ru;return Ru<<=1,(Ru&62914560)===0&&(Ru=4194304),e}function Kf(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ns(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function KI(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=l&~a;0<a;){var c=31-ua(a),f=1<<c;i[c]=0,s[c]=-1;var d=u[c];if(d!==null)for(u[c]=null,c=0;c<d.length;c++){var p=d[c];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&ay(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function ay(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ua(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function oy(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-ua(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function ny(e,t){var a=t&-t;return a=(a&42)!==0?1:vm(a),(a&(e.suspendedLanes|t))!==0?0:a}function vm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ry(){var e=Le.p;return e!==0?e:(e=window.event,e===void 0?32:Mw(e.type))}function Lx(e,t){var a=Le.p;try{return Le.p=e,t()}finally{Le.p=a}}var _n=Math.random().toString(36).slice(2),vt="__reactFiber$"+_n,jt="__reactProps$"+_n,Il="__reactContainer$"+_n,Tp="__reactEvents$"+_n,jI="__reactListeners$"+_n,WI="__reactHandles$"+_n,_x="__reactResources$"+_n,rs="__reactMarker$"+_n;function Sm(e){delete e[vt],delete e[jt],delete e[Tp],delete e[jI],delete e[WI]}function $r(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Il]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=D0(e);e!==null;){if(a=e[vt])return a;e=D0(e)}return t}e=a,a=e.parentNode}return null}function kl(e){if(e=e[vt]||e[Il]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _i(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(q(33))}function sl(e){var t=e[_x];return t||(t=e[_x]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[rs]=!0}var ly=new Set,iy={};function dr(e,t){hl(e,t),hl(e+"Capture",t)}function hl(e,t){for(iy[e]=t,e=0;e<t.length;e++)ly.add(t[e])}var QI=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ix={},kx={};function $I(e){return Ap.call(kx,e)?!0:Ap.call(Ix,e)?!1:QI.test(e)?kx[e]=!0:(Ix[e]=!0,!1)}function ju(e,t,a){if($I(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function zu(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Co(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function wa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function JI(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Np(e){if(!e._valueTracker){var t=sy(e)?"checked":"value";e._valueTracker=JI(e,t,""+e[t])}}function uy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=sy(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function md(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ek=/[\n"\\]/g;function Sa(e){return e.replace(ek,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Dp(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wa(t)):e.value!==""+wa(t)&&(e.value=""+wa(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Rp(e,l,wa(t)):a!=null?Rp(e,l,wa(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+wa(i):e.removeAttribute("name")}function dy(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Np(e);return}a=a!=null?""+wa(a):"",t=t!=null?""+wa(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Np(e)}function Rp(e,t,a){t==="number"&&md(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ul(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+wa(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function cy(e,t,a){if(t!=null&&(t=""+wa(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wa(a):""}function fy(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(q(92));if(Li(o)){if(1<o.length)throw Error(q(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=wa(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Np(e)}function xl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var tk=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mx(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||tk.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function py(e,t,a){if(t!=null&&typeof t!="object")throw Error(q(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Mx(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Mx(e,r,t[r])}function Lm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ak=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ok=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wu(e){return ok.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ao(){}var zp=null;function _m(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jr=null,dl=null;function Ex(e){var t=kl(e);if(t&&(e=t.stateNode)){var a=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Dp(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sa(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[jt]||null;if(!n)throw Error(q(90));Dp(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&uy(o)}break e;case"textarea":cy(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ul(e,!!a.multiple,t,!1)}}}var jf=!1;function my(e,t,a){if(jf)return e(t,a);jf=!0;try{var o=e(t);return o}finally{if(jf=!1,(Jr!==null||dl!==null)&&(Qd(),Jr&&(t=Jr,e=dl,dl=Jr=null,Ex(t),e)))for(t=0;t<e.length;t++)Ex(e[t])}}function Fi(e,t){var a=e.stateNode;if(a===null)return null;var o=a[jt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(q(231,t,typeof a));return a}var zo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Op=!1;if(zo)try{Xr={},Object.defineProperty(Xr,"passive",{get:function(){Op=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Op=!1}var Xr,sn=null,Im=null,Qu=null;function gy(){if(Qu)return Qu;var e,t=Im,a=t.length,o,n="value"in sn?sn.value:sn.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return Qu=n.slice(e,1<o?1-o:void 0)}function $u(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ou(){return!0}function Ax(){return!1}function Wt(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ou:Ax,this.isPropagationStopped=Ax,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=Wt(cr),ls=Ue({},cr,{view:0,detail:0}),nk=Wt(ls),Wf,Qf,xi,qd=Ue({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Wf=e.screenX-xi.screenX,Qf=e.screenY-xi.screenY):Qf=Wf=0,xi=e),Wf)},movementY:function(e){return"movementY"in e?e.movementY:Qf}}),Tx=Wt(qd),rk=Ue({},qd,{dataTransfer:0}),lk=Wt(rk),ik=Ue({},ls,{relatedTarget:0}),$f=Wt(ik),sk=Ue({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),uk=Wt(sk),dk=Ue({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ck=Wt(dk),fk=Ue({},cr,{data:0}),Nx=Wt(fk),pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gk[e])?!!t[e]:!1}function km(){return hk}var xk=Ue({},ls,{key:function(e){if(e.key){var t=pk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$u(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(e){return e.type==="keypress"?$u(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$u(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yk=Wt(xk),bk=Ue({},qd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dx=Wt(bk),wk=Ue({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),vk=Wt(wk),Ck=Ue({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sk=Wt(Ck),Lk=Ue({},qd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_k=Wt(Lk),Ik=Ue({},cr,{newState:0,oldState:0}),kk=Wt(Ik),Mk=[9,13,27,32],Mm=zo&&"CompositionEvent"in window,Mi=null;zo&&"documentMode"in document&&(Mi=document.documentMode);var Ek=zo&&"TextEvent"in window&&!Mi,hy=zo&&(!Mm||Mi&&8<Mi&&11>=Mi),Rx=" ",zx=!1;function xy(e,t){switch(e){case"keyup":return Mk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function Ak(e,t){switch(e){case"compositionend":return yy(t);case"keypress":return t.which!==32?null:(zx=!0,Rx);case"textInput":return e=t.data,e===Rx&&zx?null:e;default:return null}}function Tk(e,t){if(el)return e==="compositionend"||!Mm&&xy(e,t)?(e=gy(),Qu=Im=sn=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hy&&t.locale!=="ko"?null:t.data;default:return null}}var Nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ox(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nk[e.type]:t==="textarea"}function by(e,t,a,o){Jr?dl?dl.push(o):dl=[o]:Jr=o,t=Nd(t,"onChange"),0<t.length&&(a=new Ud("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ei=null,Vi=null;function Dk(e){mw(e,0)}function Fd(e){var t=_i(e);if(uy(t))return e}function Bx(e,t){if(e==="change")return t}var wy=!1;zo&&(zo?(Pu="oninput"in document,Pu||(Jf=document.createElement("div"),Jf.setAttribute("oninput","return;"),Pu=typeof Jf.oninput=="function"),Bu=Pu):Bu=!1,wy=Bu&&(!document.documentMode||9<document.documentMode));var Bu,Pu,Jf;function Px(){Ei&&(Ei.detachEvent("onpropertychange",vy),Vi=Ei=null)}function vy(e){if(e.propertyName==="value"&&Fd(Vi)){var t=[];by(t,Vi,e,_m(e)),my(Dk,t)}}function Rk(e,t,a){e==="focusin"?(Px(),Ei=t,Vi=a,Ei.attachEvent("onpropertychange",vy)):e==="focusout"&&Px()}function zk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fd(Vi)}function Ok(e,t){if(e==="click")return Fd(t)}function Bk(e,t){if(e==="input"||e==="change")return Fd(t)}function Pk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ca=typeof Object.is=="function"?Object.is:Pk;function Gi(e,t){if(ca(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Ap.call(t,n)||!ca(e[n],t[n]))return!1}return!0}function Hx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ux(e,t){var a=Hx(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hx(a)}}function Cy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=md(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=md(e.document)}return t}function Em(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hk=zo&&"documentMode"in document&&11>=document.documentMode,tl=null,Bp=null,Ai=null,Pp=!1;function qx(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pp||tl==null||tl!==md(o)||(o=tl,"selectionStart"in o&&Em(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ai&&Gi(Ai,o)||(Ai=o,o=Nd(Bp,"onSelect"),0<o.length&&(t=new Ud("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=tl)))}function jn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var al={animationend:jn("Animation","AnimationEnd"),animationiteration:jn("Animation","AnimationIteration"),animationstart:jn("Animation","AnimationStart"),transitionrun:jn("Transition","TransitionRun"),transitionstart:jn("Transition","TransitionStart"),transitioncancel:jn("Transition","TransitionCancel"),transitionend:jn("Transition","TransitionEnd")},ep={},Ly={};zo&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function fr(e){if(ep[e])return ep[e];if(!al[e])return e;var t=al[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ly)return ep[e]=t[a];return e}var _y=fr("animationend"),Iy=fr("animationiteration"),ky=fr("animationstart"),Uk=fr("transitionrun"),qk=fr("transitionstart"),Fk=fr("transitioncancel"),My=fr("transitionend"),Ey=new Map,Hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hp.push("scrollEnd");function Ua(e,t){Ey.set(e,t),dr(t,[e])}var gd=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ba=[],ol=0,Am=0;function Vd(){for(var e=ol,t=Am=ol=0;t<e;){var a=ba[t];ba[t++]=null;var o=ba[t];ba[t++]=null;var n=ba[t];ba[t++]=null;var r=ba[t];if(ba[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&Ay(a,n,r)}}function Gd(e,t,a,o){ba[ol++]=e,ba[ol++]=t,ba[ol++]=a,ba[ol++]=o,Am|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tm(e,t,a,o){return Gd(e,t,a,o),hd(e)}function pr(e,t){return Gd(e,null,null,t),hd(e)}function Ay(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ua(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function hd(e){if(50<Hi)throw Hi=0,lm=null,Error(q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function Vk(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(e,t,a,o){return new Vk(e,t,a,o)}function Nm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function No(e,t){var a=e.alternate;return a===null?(a=ra(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ty(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ju(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Nm(e)&&(l=1);else if(typeof e=="string")l=Y5(e,a,oo.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ip:return e=ra(31,a,t,n),e.elementType=Ip,e.lanes=r,e;case Wr:return tr(a.children,n,r,t);case W0:l=8,n|=24;break;case Sp:return e=ra(12,a,t,n|2),e.elementType=Sp,e.lanes=r,e;case Lp:return e=ra(13,a,t,n),e.elementType=Lp,e.lanes=r,e;case _p:return e=ra(19,a,t,n),e.elementType=_p,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eo:l=10;break e;case Q0:l=9;break e;case ym:l=11;break e;case bm:l=14;break e;case en:l=16,o=null;break e}l=29,a=Error(q(130,e===null?"null":typeof e,"")),o=null}return t=ra(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function tr(e,t,a,o){return e=ra(7,e,o,t),e.lanes=a,e}function tp(e,t,a){return e=ra(6,e,null,t),e.lanes=a,e}function Ny(e){var t=ra(18,null,null,0);return t.stateNode=e,t}function ap(e,t,a){return t=ra(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fx=new WeakMap;function La(e,t){if(typeof e=="object"&&e!==null){var a=Fx.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Sx(t)},Fx.set(e,t),t)}return{value:e,source:t,stack:Sx(t)}}var rl=[],ll=0,xd=null,Xi=0,va=[],Ca=0,vn=null,eo=1,to="";function ko(e,t){rl[ll++]=Xi,rl[ll++]=xd,xd=e,Xi=t}function Dy(e,t,a){va[Ca++]=eo,va[Ca++]=to,va[Ca++]=vn,vn=e;var o=eo;e=to;var n=32-ua(o)-1;o&=~(1<<n),a+=1;var r=32-ua(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,eo=1<<32-ua(t)+n|a<<n|o,to=r+e}else eo=1<<r|a<<n|o,to=e}function Dm(e){e.return!==null&&(ko(e,1),Dy(e,1,0))}function Rm(e){for(;e===xd;)xd=rl[--ll],rl[ll]=null,Xi=rl[--ll],rl[ll]=null;for(;e===vn;)vn=va[--Ca],va[Ca]=null,to=va[--Ca],va[Ca]=null,eo=va[--Ca],va[Ca]=null}function Ry(e,t){va[Ca++]=eo,va[Ca++]=to,va[Ca++]=vn,eo=t.id,to=t.overflow,vn=e}var Ct=null,He=null,ve=!1,pn=null,_a=!1,Up=Error(q(519));function Cn(e){var t=Error(q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yi(La(t,e)),Up}function Vx(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[vt]=e,t[jt]=o,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<Wi.length;a++)ye(Wi[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),dy(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),fy(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||hw(t.textContent,a)?(o.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),o.onScroll!=null&&ye("scroll",t),o.onScrollEnd!=null&&ye("scrollend",t),o.onClick!=null&&(t.onclick=Ao),t=!0):t=!1,t||Cn(e,!0)}function Gx(e){for(Ct=e.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:Ct=Ct.return}}function Yr(e){if(e!==Ct)return!1;if(!ve)return Gx(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cm(e.type,e.memoizedProps)),a=!a),a&&He&&Cn(e),Gx(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));He=N0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));He=N0(e)}else t===27?(t=He,In(e.type)?(e=gm,gm=null,He=e):He=t):He=Ct?ka(e.stateNode.nextSibling):null;return!0}function rr(){He=Ct=null,ve=!1}function op(){var e=pn;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),pn=null),e}function Yi(e){pn===null?pn=[e]:pn.push(e)}var qp=no(null),mr=null,To=null;function an(e,t,a){ze(qp,t._currentValue),t._currentValue=a}function Do(e){e._currentValue=qp.current,pt(qp)}function Fp(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Vp(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Fp(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(q(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Fp(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function Ml(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(q(387));if(l=l.memoizedProps,l!==null){var i=n.type;ca(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===dd.current){if(l=n.alternate,l===null)throw Error(q(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push($i):e=[$i])}n=n.return}e!==null&&Vp(t,e,a,o),t.flags|=262144}function yd(e){for(e=e.firstContext;e!==null;){if(!ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){mr=e,To=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return zy(mr,e)}function Hu(e,t){return mr===null&&lr(e),zy(e,t)}function zy(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},To===null){if(e===null)throw Error(q(308));To=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else To=To.next=t;return a}var Gk=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xk=lt.unstable_scheduleCallback,Yk=lt.unstable_NormalPriority,ot={$$typeof:Eo,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zm(){return{controller:new Gk,data:new Map,refCount:0}}function is(e){e.refCount--,e.refCount===0&&Xk(Yk,function(){e.controller.abort()})}var Ti=null,Gp=0,yl=0,cl=null;function Zk(e,t){if(Ti===null){var a=Ti=[];Gp=0,yl=lg(),cl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gp++,t.then(Xx,Xx),t}function Xx(){if(--Gp===0&&Ti!==null){cl!==null&&(cl.status="fulfilled");var e=Ti;Ti=null,yl=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kk(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Yx=le.S;le.S=function(e,t){jb=ia(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zk(e,t),Yx!==null&&Yx(e,t)};var ar=no(null);function Om(){var e=ar.current;return e!==null?e:Te.pooledCache}function ed(e,t){t===null?ze(ar,ar.current):ze(ar,t.pool)}function Oy(){var e=Om();return e===null?null:{parent:ot._currentValue,pool:e}}var El=Error(q(460)),Bm=Error(q(474)),Xd=Error(q(542)),bd={then:function(){}};function Zx(e){return e=e.status,e==="fulfilled"||e==="rejected"}function By(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ao,Ao),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jx(e),e;default:if(typeof t.status=="string")t.then(Ao,Ao);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jx(e),e}throw or=t,El}}function $n(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,El):a}}var or=null;function Kx(){if(or===null)throw Error(q(459));var e=or;return or=null,e}function jx(e){if(e===El||e===Xd)throw Error(q(483))}var fl=null,Zi=0;function Uu(e){var t=Zi;return Zi+=1,fl===null&&(fl=[]),By(fl,e,t)}function yi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qu(e,t){throw t.$$typeof===RI?Error(q(525)):(e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Py(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=No(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function i(h,x,m,y){return x===null||x.tag!==6?(x=tp(m,h.mode,y),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,y){var S=m.type;return S===Wr?c(h,x,m.props.children,y,m.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===en&&$n(S)===x.type)?(x=n(x,m.props),yi(x,m),x.return=h,x):(x=Ju(m.type,m.key,m.props,null,h.mode,y),yi(x,m),x.return=h,x)}function u(h,x,m,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=ap(m,h.mode,y),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function c(h,x,m,y,S){return x===null||x.tag!==7?(x=tr(m,h.mode,y,S),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=tp(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tu:return m=Ju(x.type,x.key,x.props,null,h.mode,m),yi(m,x),m.return=h,m;case Si:return x=ap(x,h.mode,m),x.return=h,x;case en:return x=$n(x),f(h,x,m)}if(Li(x)||hi(x))return x=tr(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,Uu(x),m);if(x.$$typeof===Eo)return f(h,Hu(h,x),m);qu(h,x)}return null}function d(h,x,m,y){var S=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return S!==null?null:i(h,x,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tu:return m.key===S?s(h,x,m,y):null;case Si:return m.key===S?u(h,x,m,y):null;case en:return m=$n(m),d(h,x,m,y)}if(Li(m)||hi(m))return S!==null?null:c(h,x,m,y,null);if(typeof m.then=="function")return d(h,x,Uu(m),y);if(m.$$typeof===Eo)return d(h,x,Hu(h,m),y);qu(h,m)}return null}function p(h,x,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(m)||null,i(x,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tu:return h=h.get(y.key===null?m:y.key)||null,s(x,h,y,S);case Si:return h=h.get(y.key===null?m:y.key)||null,u(x,h,y,S);case en:return y=$n(y),p(h,x,m,y,S)}if(Li(y)||hi(y))return h=h.get(m)||null,c(x,h,y,S,null);if(typeof y.then=="function")return p(h,x,m,Uu(y),S);if(y.$$typeof===Eo)return p(h,x,m,Hu(x,y),S);qu(x,y)}return null}function g(h,x,m,y){for(var S=null,C=null,v=x,_=x=0,I=null;v!==null&&_<m.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var N=d(h,v,m[_],y);if(N===null){v===null&&(v=I);break}e&&v&&N.alternate===null&&t(h,v),x=r(N,x,_),C===null?S=N:C.sibling=N,C=N,v=I}if(_===m.length)return a(h,v),ve&&ko(h,_),S;if(v===null){for(;_<m.length;_++)v=f(h,m[_],y),v!==null&&(x=r(v,x,_),C===null?S=v:C.sibling=v,C=v);return ve&&ko(h,_),S}for(v=o(v);_<m.length;_++)I=p(v,h,_,m[_],y),I!==null&&(e&&I.alternate!==null&&v.delete(I.key===null?_:I.key),x=r(I,x,_),C===null?S=I:C.sibling=I,C=I);return e&&v.forEach(function(A){return t(h,A)}),ve&&ko(h,_),S}function b(h,x,m,y){if(m==null)throw Error(q(151));for(var S=null,C=null,v=x,_=x=0,I=null,N=m.next();v!==null&&!N.done;_++,N=m.next()){v.index>_?(I=v,v=null):I=v.sibling;var A=d(h,v,N.value,y);if(A===null){v===null&&(v=I);break}e&&v&&A.alternate===null&&t(h,v),x=r(A,x,_),C===null?S=A:C.sibling=A,C=A,v=I}if(N.done)return a(h,v),ve&&ko(h,_),S;if(v===null){for(;!N.done;_++,N=m.next())N=f(h,N.value,y),N!==null&&(x=r(N,x,_),C===null?S=N:C.sibling=N,C=N);return ve&&ko(h,_),S}for(v=o(v);!N.done;_++,N=m.next())N=p(v,h,_,N.value,y),N!==null&&(e&&N.alternate!==null&&v.delete(N.key===null?_:N.key),x=r(N,x,_),C===null?S=N:C.sibling=N,C=N);return e&&v.forEach(function(B){return t(h,B)}),ve&&ko(h,_),S}function w(h,x,m,y){if(typeof m=="object"&&m!==null&&m.type===Wr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Tu:e:{for(var S=m.key;x!==null;){if(x.key===S){if(S=m.type,S===Wr){if(x.tag===7){a(h,x.sibling),y=n(x,m.props.children),y.return=h,h=y;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===en&&$n(S)===x.type){a(h,x.sibling),y=n(x,m.props),yi(y,m),y.return=h,h=y;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Wr?(y=tr(m.props.children,h.mode,y,m.key),y.return=h,h=y):(y=Ju(m.type,m.key,m.props,null,h.mode,y),yi(y,m),y.return=h,h=y)}return l(h);case Si:e:{for(S=m.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),y=n(x,m.children||[]),y.return=h,h=y;break e}else{a(h,x);break}else t(h,x);x=x.sibling}y=ap(m,h.mode,y),y.return=h,h=y}return l(h);case en:return m=$n(m),w(h,x,m,y)}if(Li(m))return g(h,x,m,y);if(hi(m)){if(S=hi(m),typeof S!="function")throw Error(q(150));return m=S.call(m),b(h,x,m,y)}if(typeof m.then=="function")return w(h,x,Uu(m),y);if(m.$$typeof===Eo)return w(h,x,Hu(h,m),y);qu(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),y=n(x,m),y.return=h,h=y):(a(h,x),y=tp(m,h.mode,y),y.return=h,h=y),l(h)):a(h,x)}return function(h,x,m,y){try{Zi=0;var S=w(h,x,m,y);return fl=null,S}catch(v){if(v===El||v===Xd)throw v;var C=ra(29,v,null,h.mode);return C.lanes=y,C.return=h,C}}}var ir=Py(!0),Hy=Py(!1),tn=!1;function Pm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Se&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=hd(e),Ay(e,null,a),t}return Gd(e,o,t,a),hd(e)}function Ni(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,oy(e,a)}}function np(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Yp=!1;function Di(){if(Yp){var e=cl;if(e!==null)throw e}}function Ri(e,t,a,o){Yp=!1;var n=e.updateQueue;tn=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==l&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;l=0,c=u=s=null,i=r;do{var d=i.lane&-536870913,p=d!==i.lane;if(p?(we&d)===d:(o&d)===d){d!==0&&d===yl&&(Yp=!0),c!==null&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,b=i;d=t;var w=a;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){f=g.call(w,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,d=typeof g=="function"?g.call(w,f,d):g,d==null)break e;f=Ue({},f,d);break e;case 2:tn=!0}}d=i.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[d]:p.push(d))}else p={lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=p,s=f):c=c.next=p,l|=d;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);c===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=c,r===null&&(n.shared.lanes=0),Ln|=l,e.lanes=l,e.memoizedState=f}}function Uy(e,t){if(typeof e!="function")throw Error(q(191,e));e.call(t)}function qy(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Uy(a[e],t)}var bl=no(null),wd=no(0);function Wx(e,t){e=Ho,ze(wd,e),ze(bl,t),Ho=e|t.baseLanes}function Zp(){ze(wd,Ho),ze(bl,bl.current)}function Hm(){Ho=wd.current,pt(bl),pt(wd)}var fa=no(null),Ia=null;function on(e){var t=e.alternate;ze(Je,Je.current&1),ze(fa,e),Ia===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(Ia=e)}function Kp(e){ze(Je,Je.current),ze(fa,e),Ia===null&&(Ia=e)}function Fy(e){e.tag===22?(ze(Je,Je.current),ze(fa,e),Ia===null&&(Ia=e)):nn(e)}function nn(){ze(Je,Je.current),ze(fa,fa.current)}function na(e){pt(fa),Ia===e&&(Ia=null),pt(Je)}var Je=no(0);function vd(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pm(a)||mm(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=0,pe=null,Me=null,tt=null,Cd=!1,pl=!1,sr=!1,Sd=0,Ki=0,ml=null,jk=0;function je(){throw Error(q(321))}function Um(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ca(e[a],t[a]))return!1;return!0}function qm(e,t,a,o,n,r){return Oo=r,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?bb:$m,sr=!1,r=a(o,n),sr=!1,pl&&(r=Gy(t,a,o,n)),Vy(e),r}function Vy(e){le.H=ji;var t=Me!==null&&Me.next!==null;if(Oo=0,tt=Me=pe=null,Cd=!1,Ki=0,ml=null,t)throw Error(q(300));e===null||nt||(e=e.dependencies,e!==null&&yd(e)&&(nt=!0))}function Gy(e,t,a,o){pe=e;var n=0;do{if(pl&&(ml=null),Ki=0,pl=!1,25<=n)throw Error(q(301));if(n+=1,tt=Me=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}le.H=wb,r=t(a,o)}while(pl);return r}function Wk(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?ss(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(pe.flags|=1024),t}function Fm(){var e=Sd!==0;return Sd=0,e}function Vm(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Gm(e){if(Cd){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cd=!1}Oo=0,tt=Me=pe=null,pl=!1,Ki=Sd=0,ml=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?pe.memoizedState=tt=e:tt=tt.next=e,tt}function et(){if(Me===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=tt===null?pe.memoizedState:tt.next;if(t!==null)tt=t,Me=e;else{if(e===null)throw pe.alternate===null?Error(q(467)):Error(q(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},tt===null?pe.memoizedState=tt=e:tt=tt.next=e}return tt}function Yd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ss(e){var t=Ki;return Ki+=1,ml===null&&(ml=[]),e=By(ml,e,t),t=pe,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?bb:$m),e}function Zd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ss(e);if(e.$$typeof===Eo)return St(e)}throw Error(q(438,String(e)))}function Xm(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Yd(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=zI;return t.index++,a}function Bo(e,t){return typeof t=="function"?t(e):t}function td(e){var t=et();return Ym(t,Me,e)}function Ym(e,t,a){var o=e.queue;if(o===null)throw Error(q(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,u=t,c=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(we&f)===f:(Oo&f)===f){var d=u.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===yl&&(c=!0);else if((Oo&d)===d){u=u.next,d===yl&&(c=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=f,l=r):s=s.next=f,pe.lanes|=d,Ln|=d;f=u.action,sr&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else d={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=d,l=r):s=s.next=d,pe.lanes|=f,Ln|=f;u=u.next}while(u!==null&&u!==t);if(s===null?l=r:s.next=i,!ca(r,e.memoizedState)&&(nt=!0,c&&(a=cl,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rp(e){var t=et(),a=t.queue;if(a===null)throw Error(q(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);ca(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function Xy(e,t,a){var o=pe,n=et(),r=ve;if(r){if(a===void 0)throw Error(q(407));a=a()}else a=t();var l=!ca((Me||n).memoizedState,a);if(l&&(n.memoizedState=a,nt=!0),n=n.queue,Zm(Ky.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||tt!==null&&tt.memoizedState.tag&1){if(o.flags|=2048,wl(9,{destroy:void 0},Zy.bind(null,o,n,a,t),null),Te===null)throw Error(q(349));r||(Oo&127)!==0||Yy(o,t,a)}return a}function Yy(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=Yd(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zy(e,t,a,o){t.value=a,t.getSnapshot=o,jy(t)&&Wy(e)}function Ky(e,t,a){return a(function(){jy(t)&&Wy(e)})}function jy(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ca(e,a)}catch{return!0}}function Wy(e){var t=pr(e,2);t!==null&&Kt(t,e,2)}function jp(e){var t=Ot();if(typeof e=="function"){var a=e;if(e=a(),sr){ln(!0);try{a()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Qy(e,t,a,o){return e.baseState=a,Ym(e,Me,typeof o=="function"?o:Bo)}function Qk(e,t,a,o,n){if(jd(e))throw Error(q(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};le.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,$y(t,r)):(r.next=a.next,t.pending=a.next=r)}}function $y(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=le.T,l={};le.T=l;try{var i=a(n,o),s=le.S;s!==null&&s(l,i),Qx(e,t,i)}catch(u){Wp(e,t,u)}finally{r!==null&&l.types!==null&&(r.types=l.types),le.T=r}}else try{r=a(n,o),Qx(e,t,r)}catch(u){Wp(e,t,u)}}function Qx(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$x(e,t,o)},function(o){return Wp(e,t,o)}):$x(e,t,a)}function $x(e,t,a){t.status="fulfilled",t.value=a,Jy(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$y(e,a)))}function Wp(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Jy(t),t=t.next;while(t!==o)}e.action=null}function Jy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function eb(e,t){return t}function Jx(e,t){if(ve){var a=Te.formState;if(a!==null){e:{var o=pe;if(ve){if(He){t:{for(var n=He,r=_a;n.nodeType!==8;){if(!r){n=null;break t}if(n=ka(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){He=ka(n.nextSibling),o=n.data==="F!";break e}}Cn(o)}o=!1}o&&(t=a[0])}}return a=Ot(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eb,lastRenderedState:t},a.queue=o,a=hb.bind(null,pe,o),o.dispatch=a,o=jp(!1),r=Qm.bind(null,pe,!1,o.queue),o=Ot(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=Qk.bind(null,pe,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function e0(e){var t=et();return tb(t,Me,e)}function tb(e,t,a){if(t=Ym(e,t,eb)[0],e=td(Bo)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ss(t)}catch(l){throw l===El?Xd:l}else o=t;t=et();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,wl(9,{destroy:void 0},$k.bind(null,n,a),null)),[o,r,e]}function $k(e,t){e.action=t}function t0(e){var t=et(),a=Me;if(a!==null)return tb(t,a,e);et(),t=t.memoizedState,a=et();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function wl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Yd(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function ab(){return et().memoizedState}function ad(e,t,a,o){var n=Ot();pe.flags|=e,n.memoizedState=wl(1|t,{destroy:void 0},a,o===void 0?null:o)}function Kd(e,t,a,o){var n=et();o=o===void 0?null:o;var r=n.memoizedState.inst;Me!==null&&o!==null&&Um(o,Me.memoizedState.deps)?n.memoizedState=wl(t,r,a,o):(pe.flags|=e,n.memoizedState=wl(1|t,r,a,o))}function a0(e,t){ad(8390656,8,e,t)}function Zm(e,t){Kd(2048,8,e,t)}function Jk(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Yd(),pe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ob(e){var t=et().memoizedState;return Jk({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(q(440));return t.impl.apply(void 0,arguments)}}function nb(e,t){return Kd(4,2,e,t)}function rb(e,t){return Kd(4,4,e,t)}function lb(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ib(e,t,a){a=a!=null?a.concat([e]):null,Kd(4,4,lb.bind(null,t,e),a)}function Km(){}function sb(e,t){var a=et();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Um(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function ub(e,t){var a=et();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Um(t,o[1]))return o[0];if(o=e(),sr){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[o,t],o}function jm(e,t,a){return a===void 0||(Oo&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Qb(),pe.lanes|=e,Ln|=e,a)}function db(e,t,a,o){return ca(a,t)?a:bl.current!==null?(e=jm(e,a,o),ca(e,t)||(nt=!0),e):(Oo&42)===0||(Oo&1073741824)!==0&&(we&261930)===0?(nt=!0,e.memoizedState=a):(e=Qb(),pe.lanes|=e,Ln|=e,t)}function cb(e,t,a,o,n){var r=Le.p;Le.p=r!==0&&8>r?r:8;var l=le.T,i={};le.T=i,Qm(e,!1,t,a);try{var s=n(),u=le.S;if(u!==null&&u(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=Kk(s,o);zi(e,t,c,da(e))}else zi(e,t,o,da(e))}catch(f){zi(e,t,{then:function(){},status:"rejected",reason:f},da())}finally{Le.p=r,l!==null&&i.types!==null&&(l.types=i.types),le.T=l}}function e5(){}function Qp(e,t,a,o){if(e.tag!==5)throw Error(q(476));var n=fb(e).queue;cb(e,n,t,er,a===null?e5:function(){return pb(e),a(o)})}function fb(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:er,baseState:er,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:er},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pb(e){var t=fb(e);t.next===null&&(t=e.alternate.memoizedState),zi(e,t.next.queue,{},da())}function Wm(){return St($i)}function mb(){return et().memoizedState}function gb(){return et().memoizedState}function t5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=da();e=mn(a);var o=gn(t,e,a);o!==null&&(Kt(o,t,a),Ni(o,t,a)),t={cache:zm()},e.payload=t;return}t=t.return}}function a5(e,t,a){var o=da();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jd(e)?xb(t,a):(a=Tm(e,t,a,o),a!==null&&(Kt(a,e,o),yb(a,t,o)))}function hb(e,t,a){var o=da();zi(e,t,a,o)}function zi(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jd(e))xb(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,ca(i,l))return Gd(e,t,n,0),Te===null&&Vd(),!1}catch{}if(a=Tm(e,t,n,o),a!==null)return Kt(a,e,o),yb(a,t,o),!0}return!1}function Qm(e,t,a,o){if(o={lane:2,revertLane:lg(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jd(e)){if(t)throw Error(q(479))}else t=Tm(e,a,o,2),t!==null&&Kt(t,e,2)}function jd(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function xb(e,t){pl=Cd=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yb(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,oy(e,a)}}var ji={readContext:St,use:Zd,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};ji.useEffectEvent=je;var bb={readContext:St,use:Zd,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:a0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ad(4194308,4,lb.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ad(4194308,4,e,t)},useInsertionEffect:function(e,t){ad(4,2,e,t)},useMemo:function(e,t){var a=Ot();t=t===void 0?null:t;var o=e();if(sr){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ot();if(a!==void 0){var n=a(t);if(sr){ln(!0);try{a(t)}finally{ln(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=a5.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:function(e){e=jp(e);var t=e.queue,a=hb.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Km,useDeferredValue:function(e,t){var a=Ot();return jm(a,e,t)},useTransition:function(){var e=jp(!1);return e=cb.bind(null,pe,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=pe,n=Ot();if(ve){if(a===void 0)throw Error(q(407));a=a()}else{if(a=t(),Te===null)throw Error(q(349));(we&127)!==0||Yy(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,a0(Ky.bind(null,o,r,e),[e]),o.flags|=2048,wl(9,{destroy:void 0},Zy.bind(null,o,r,a,t),null),a},useId:function(){var e=Ot(),t=Te.identifierPrefix;if(ve){var a=to,o=eo;a=(o&~(1<<32-ua(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Sd++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jk++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wm,useFormState:Jx,useActionState:Jx,useOptimistic:function(e){var t=Ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Qm.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Xm,useCacheRefresh:function(){return Ot().memoizedState=t5.bind(null,pe)},useEffectEvent:function(e){var t=Ot(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(q(440));return a.impl.apply(void 0,arguments)}}},$m={readContext:St,use:Zd,useCallback:sb,useContext:St,useEffect:Zm,useImperativeHandle:ib,useInsertionEffect:nb,useLayoutEffect:rb,useMemo:ub,useReducer:td,useRef:ab,useState:function(){return td(Bo)},useDebugValue:Km,useDeferredValue:function(e,t){var a=et();return db(a,Me.memoizedState,e,t)},useTransition:function(){var e=td(Bo)[0],t=et().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:Xy,useId:mb,useHostTransitionStatus:Wm,useFormState:e0,useActionState:e0,useOptimistic:function(e,t){var a=et();return Qy(a,Me,e,t)},useMemoCache:Xm,useCacheRefresh:gb};$m.useEffectEvent=ob;var wb={readContext:St,use:Zd,useCallback:sb,useContext:St,useEffect:Zm,useImperativeHandle:ib,useInsertionEffect:nb,useLayoutEffect:rb,useMemo:ub,useReducer:rp,useRef:ab,useState:function(){return rp(Bo)},useDebugValue:Km,useDeferredValue:function(e,t){var a=et();return Me===null?jm(a,e,t):db(a,Me.memoizedState,e,t)},useTransition:function(){var e=rp(Bo)[0],t=et().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:Xy,useId:mb,useHostTransitionStatus:Wm,useFormState:t0,useActionState:t0,useOptimistic:function(e,t){var a=et();return Me!==null?Qy(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xm,useCacheRefresh:gb};wb.useEffectEvent=ob;function lp(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ue({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $p={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=da(),n=mn(o);n.payload=t,a!=null&&(n.callback=a),t=gn(e,n,o),t!==null&&(Kt(t,e,o),Ni(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=da(),n=mn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=gn(e,n,o),t!==null&&(Kt(t,e,o),Ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=da(),o=mn(a);o.tag=2,t!=null&&(o.callback=t),t=gn(e,o,a),t!==null&&(Kt(t,e,a),Ni(t,e,a))}};function o0(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!Gi(a,o)||!Gi(n,r):!0}function n0(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&$p.enqueueReplaceState(t,t.state,null)}function ur(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ue({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function vb(e){gd(e)}function Cb(e){console.error(e)}function Sb(e){gd(e)}function Ld(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function r0(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Jp(e,t,a){return a=mn(a),a.tag=3,a.payload={element:null},a.callback=function(){Ld(e,t)},a}function Lb(e){return e=mn(e),e.tag=3,e}function _b(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){r0(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){r0(t,a,o),typeof n!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function o5(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Ml(t,a,n,!0),a=fa.current,a!==null){switch(a.tag){case 31:case 13:return Ia===null?Ed():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===bd?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),xp(e,o,n)),!1;case 22:return a.flags|=65536,o===bd?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),xp(e,o,n)),!1}throw Error(q(435,a.tag))}return xp(e,o,n),Ed(),!1}if(ve)return t=fa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Up&&(e=Error(q(422),{cause:o}),Yi(La(e,a)))):(o!==Up&&(t=Error(q(423),{cause:o}),Yi(La(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=La(o,a),n=Jp(e.stateNode,o,n),np(e,n),We!==4&&(We=2)),!1;var r=Error(q(520),{cause:o});if(r=La(r,a),Pi===null?Pi=[r]:Pi.push(r),We!==4&&(We=2),t===null)return!0;o=La(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Jp(a.stateNode,o,e),np(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Lb(n),_b(n,e,a,o),np(a,n),!1}a=a.return}while(a!==null);return!1}var Jm=Error(q(461)),nt=!1;function wt(e,t,a,o){t.child=e===null?Hy(t,null,a,o):ir(t,e.child,a,o)}function l0(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return lr(t),o=qm(e,t,a,l,r,n),i=Fm(),e!==null&&!nt?(Vm(e,t,n),Po(e,t,n)):(ve&&i&&Dm(t),t.flags|=1,wt(e,t,o,n),t.child)}function i0(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Nm(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ib(e,t,r,o,n)):(e=Ju(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!eg(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:Gi,a(l,o)&&e.ref===t.ref)return Po(e,t,n)}return t.flags|=1,e=No(r,o),e.ref=t.ref,e.return=t,t.child=e}function Ib(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(Gi(r,o)&&e.ref===t.ref)if(nt=!1,t.pendingProps=o=r,eg(e,n))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Po(e,t,n)}return em(e,t,a,o,n)}function kb(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return s0(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ed(t,r!==null?r.cachePool:null),r!==null?Wx(t,r):Zp(),Fy(t);else return o=t.lanes=536870912,s0(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(ed(t,r.cachePool),Wx(t,r),nn(t),t.memoizedState=null):(e!==null&&ed(t,null),Zp(),nn(t));return wt(e,t,n,a),t.child}function Ii(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function s0(e,t,a,o,n){var r=Om();return r=r===null?null:{parent:ot._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&ed(t,null),Zp(),Fy(t),e!==null&&Ml(e,t,o,!0),t.childLanes=n,null}function od(e,t){return t=_d({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function u0(e,t,a){return ir(t,e.child,null,a),e=od(t,t.pendingProps),e.flags|=2,na(t),t.memoizedState=null,e}function n5(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(o.mode==="hidden")return e=od(t,o),t.lanes=536870912,Ii(null,e);if(Kp(t),(e=He)?(e=bw(e,_a),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:eo,overflow:to}:null,retryLane:536870912,hydrationErrors:null},a=Ny(e),a.return=t,t.child=a,Ct=t,He=null)):e=null,e===null)throw Cn(t);return t.lanes=536870912,null}return od(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(Kp(t),n)if(t.flags&256)t.flags&=-257,t=u0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(q(558));else if(nt||Ml(e,t,a,!1),n=(a&e.childLanes)!==0,nt||n){if(o=Te,o!==null&&(l=ny(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,pr(e,l),Kt(o,e,l),Jm;Ed(),t=u0(e,t,a)}else e=r.treeContext,He=ka(l.nextSibling),Ct=t,ve=!0,pn=null,_a=!1,e!==null&&Ry(t,e),t=od(t,o),t.flags|=4096;return t}return e=No(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function nd(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(q(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function em(e,t,a,o,n){return lr(t),a=qm(e,t,a,o,void 0,n),o=Fm(),e!==null&&!nt?(Vm(e,t,n),Po(e,t,n)):(ve&&o&&Dm(t),t.flags|=1,wt(e,t,a,n),t.child)}function d0(e,t,a,o,n,r){return lr(t),t.updateQueue=null,a=Gy(t,o,a,n),Vy(e),o=Fm(),e!==null&&!nt?(Vm(e,t,r),Po(e,t,r)):(ve&&o&&Dm(t),t.flags|=1,wt(e,t,a,r),t.child)}function c0(e,t,a,o,n){if(lr(t),t.stateNode===null){var r=nl,l=a.contextType;typeof l=="object"&&l!==null&&(r=St(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$p,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Pm(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?St(l):nl,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(lp(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&$p.enqueueReplaceState(r,r.state,null),Ri(t,o,r,n),Di(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=ur(a,i);r.props=s;var u=r.context,c=a.contextType;l=nl,typeof c=="object"&&c!==null&&(l=St(c));var f=a.getDerivedStateFromProps;c=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||u!==l)&&n0(t,r,o,l),tn=!1;var d=t.memoizedState;r.state=d,Ri(t,o,r,n),Di(),u=t.memoizedState,i||d!==u||tn?(typeof f=="function"&&(lp(t,a,f,o),u=t.memoizedState),(s=tn||o0(t,a,s,o,d,u,l))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Xp(e,t),l=t.memoizedProps,c=ur(a,l),r.props=c,f=t.pendingProps,d=r.context,u=a.contextType,s=nl,typeof u=="object"&&u!==null&&(s=St(u)),i=a.getDerivedStateFromProps,(u=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==f||d!==s)&&n0(t,r,o,s),tn=!1,d=t.memoizedState,r.state=d,Ri(t,o,r,n),Di();var p=t.memoizedState;l!==f||d!==p||tn||e!==null&&e.dependencies!==null&&yd(e.dependencies)?(typeof i=="function"&&(lp(t,a,i,o),p=t.memoizedState),(c=tn||o0(t,a,c,o,d,p,s)||e!==null&&e.dependencies!==null&&yd(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=c):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,nd(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=ir(t,e.child,null,n),t.child=ir(t,null,a,n)):wt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Po(e,t,n),e}function f0(e,t,a,o){return rr(),t.flags|=256,wt(e,t,a,o),t.child}var ip={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sp(e){return{baseLanes:e,cachePool:Oy()}}function up(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=la),e}function Mb(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(n?on(t):nn(t),(e=He)?(e=bw(e,_a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:eo,overflow:to}:null,retryLane:536870912,hydrationErrors:null},a=Ny(e),a.return=t,t.child=a,Ct=t,He=null)):e=null,e===null)throw Cn(t);return mm(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(nn(t),n=t.mode,i=_d({mode:"hidden",children:i},n),o=tr(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=sp(a),o.childLanes=up(e,l,a),t.memoizedState=ip,Ii(null,o)):(on(t),tm(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(on(t),t.flags&=-257,t=dp(e,t,a)):t.memoizedState!==null?(nn(t),t.child=e.child,t.flags|=128,t=null):(nn(t),i=o.fallback,n=t.mode,o=_d({mode:"visible",children:o.children},n),i=tr(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ir(t,e.child,null,a),o=t.child,o.memoizedState=sp(a),o.childLanes=up(e,l,a),t.memoizedState=ip,t=Ii(null,o));else if(on(t),mm(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var u=l.dgst;l=u,o=Error(q(419)),o.stack="",o.digest=l,Yi({value:o,source:null,stack:null}),t=dp(e,t,a)}else if(nt||Ml(e,t,a,!1),l=(a&e.childLanes)!==0,nt||l){if(l=Te,l!==null&&(o=ny(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,pr(e,o),Kt(l,e,o),Jm;pm(i)||Ed(),t=dp(e,t,a)}else pm(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,He=ka(i.nextSibling),Ct=t,ve=!0,pn=null,_a=!1,e!==null&&Ry(t,e),t=tm(t,o.children),t.flags|=4096);return t}return n?(nn(t),i=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=No(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?i=No(u,i):(i=tr(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,Ii(null,o),o=t.child,i=e.child.memoizedState,i===null?i=sp(a):(n=i.cachePool,n!==null?(s=ot._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Oy(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=up(e,l,a),t.memoizedState=ip,Ii(e.child,o)):(on(t),a=e.child,e=a.sibling,a=No(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function tm(e,t){return t=_d({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _d(e,t){return e=ra(22,e,null,t),e.lanes=0,e}function dp(e,t,a){return ir(t,e.child,null,a),e=tm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p0(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Fp(e.return,t,a)}function cp(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Eb(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=Je.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,ze(Je,l),wt(e,t,o,a),o=ve?Xi:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p0(e,a,t);else if(e.tag===19)p0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&vd(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),cp(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vd(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}cp(t,!0,a,null,r,o);break;case"together":cp(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Po(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ml(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,a=No(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=No(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function eg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yd(e)))}function r5(e,t,a){switch(t.tag){case 3:cd(t,t.stateNode.containerInfo),an(t,ot,e.memoizedState.cache),rr();break;case 27:case 5:Ep(t);break;case 4:cd(t,t.stateNode.containerInfo);break;case 10:an(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kp(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(on(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Mb(e,t,a):(on(t),e=Po(e,t,a),e!==null?e.sibling:null);on(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Ml(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Eb(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ze(Je,Je.current),o)break;return null;case 22:return t.lanes=0,kb(e,t,a,t.pendingProps);case 24:an(t,ot,e.memoizedState.cache)}return Po(e,t,a)}function Ab(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!eg(e,a)&&(t.flags&128)===0)return nt=!1,r5(e,t,a);nt=(e.flags&131072)!==0}else nt=!1,ve&&(t.flags&1048576)!==0&&Dy(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=$n(t.elementType),t.type=e,typeof e=="function")Nm(e)?(o=ur(e,o),t.tag=1,t=c0(null,t,e,o,a)):(t.tag=0,t=em(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===ym){t.tag=11,t=l0(null,t,e,o,a);break e}else if(n===bm){t.tag=14,t=i0(null,t,e,o,a);break e}}throw t=kp(e)||e,Error(q(306,t,""))}}return t;case 0:return em(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=ur(o,t.pendingProps),c0(e,t,o,n,a);case 3:e:{if(cd(t,t.stateNode.containerInfo),e===null)throw Error(q(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Xp(e,t),Ri(t,o,null,a);var l=t.memoizedState;if(o=l.cache,an(t,ot,o),o!==r.cache&&Vp(t,[ot],a,!0),Di(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=f0(e,t,o,a);break e}else if(o!==n){n=La(Error(q(424)),t),Yi(n),t=f0(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=ka(e.firstChild),Ct=t,ve=!0,pn=null,_a=!0,a=Hy(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(rr(),o===n){t=Po(e,t,a);break e}wt(e,t,o,a)}t=t.child}return t;case 26:return nd(e,t),e===null?(a=z0(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,o=Dd(fn.current).createElement(a),o[vt]=t,o[jt]=e,Lt(o,a,e),ft(o),t.stateNode=o):t.memoizedState=z0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ep(t),e===null&&ve&&(o=t.stateNode=ww(t.type,t.pendingProps,fn.current),Ct=t,_a=!0,n=He,In(t.type)?(gm=n,He=ka(o.firstChild)):He=n),wt(e,t,t.pendingProps.children,a),nd(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((n=o=He)&&(o=D5(o,t.type,t.pendingProps,_a),o!==null?(t.stateNode=o,Ct=t,He=ka(o.firstChild),_a=!1,n=!0):n=!1),n||Cn(t)),Ep(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,cm(n,r)?o=null:l!==null&&cm(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=qm(e,t,Wk,null,null,a),$i._currentValue=n),nd(e,t),wt(e,t,o,a),t.child;case 6:return e===null&&ve&&((e=a=He)&&(a=R5(a,t.pendingProps,_a),a!==null?(t.stateNode=a,Ct=t,He=null,e=!0):e=!1),e||Cn(t)),null;case 13:return Mb(e,t,a);case 4:return cd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ir(t,null,o,a):wt(e,t,o,a),t.child;case 11:return l0(e,t,t.type,t.pendingProps,a);case 7:return wt(e,t,t.pendingProps,a),t.child;case 8:return wt(e,t,t.pendingProps.children,a),t.child;case 12:return wt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,an(t,t.type,o.value),wt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,lr(t),n=St(n),o=o(n),t.flags|=1,wt(e,t,o,a),t.child;case 14:return i0(e,t,t.type,t.pendingProps,a);case 15:return Ib(e,t,t.type,t.pendingProps,a);case 19:return Eb(e,t,a);case 31:return n5(e,t,a);case 22:return kb(e,t,a,t.pendingProps);case 24:return lr(t),o=St(ot),e===null?(n=Om(),n===null&&(n=Te,r=zm(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Pm(t),an(t,ot,n)):((e.lanes&a)!==0&&(Xp(e,t),Ri(t,null,null,a),Di()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),an(t,ot,o)):(o=r.cache,an(t,ot,o),o!==n.cache&&Vp(t,[ot],a,!0))),wt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(q(156,t.tag))}function So(e){e.flags|=4}function fp(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ew())e.flags|=8192;else throw or=bd,Bm}else e.flags&=-16777217}function m0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sw(t))if(ew())e.flags|=8192;else throw or=bd,Bm}function Fu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ty():536870912,e.lanes|=t,vl|=t)}function bi(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function l5(e,t,a){var o=t.pendingProps;switch(Rm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Do(ot),gl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?So(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,op())),Pe(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(So(t),r!==null?(Pe(t),m0(t,r)):(Pe(t),fp(t,n,null,o,a))):r?r!==e.memoizedState?(So(t),Pe(t),m0(t,r)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&So(t),Pe(t),fp(t,n,e,o,a)),null;case 27:if(fd(t),a=fn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&So(t);else{if(!o){if(t.stateNode===null)throw Error(q(166));return Pe(t),null}e=oo.current,Yr(t)?Vx(t,e):(e=ww(n,o,a),t.stateNode=e,So(t))}return Pe(t),null;case 5:if(fd(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&So(t);else{if(!o){if(t.stateNode===null)throw Error(q(166));return Pe(t),null}if(r=oo.current,Yr(t))Vx(t,r);else{var l=Dd(fn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[vt]=t,r[jt]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Lt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&So(t)}}return Pe(t),fp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&So(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(q(166));if(e=fn.current,Yr(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Ct,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||hw(e.nodeValue,a)),e||Cn(t,!0)}else e=Dd(e).createTextNode(o),e[vt]=t,t.stateNode=e}return Pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Yr(t),a!==null){if(e===null){if(!o)throw Error(q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(557));e[vt]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else a=op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(na(t),t):(na(t),null);if((t.flags&128)!==0)throw Error(q(558))}return Pe(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Yr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(q(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(q(317));n[vt]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),n=!1}else n=op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(na(t),t):(na(t),null)}return na(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Fu(t,t.updateQueue),Pe(t),null);case 4:return gl(),e===null&&ig(t.stateNode.containerInfo),Pe(t),null;case 10:return Do(t.type),Pe(t),null;case 19:if(pt(Je),o=t.memoizedState,o===null)return Pe(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)bi(o,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=vd(e),r!==null){for(t.flags|=128,bi(o,!1),e=r.updateQueue,t.updateQueue=e,Fu(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ty(a,e),a=a.sibling;return ze(Je,Je.current&1|2),ve&&ko(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ia()>kd&&(t.flags|=128,n=!0,bi(o,!1),t.lanes=4194304)}else{if(!n)if(e=vd(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Fu(t,e),bi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!ve)return Pe(t),null}else 2*ia()-o.renderingStartTime>kd&&a!==536870912&&(t.flags|=128,n=!0,bi(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ia(),e.sibling=null,a=Je.current,ze(Je,n?a&1|2:a&1),ve&&ko(t,o.treeForkCount),e):(Pe(t),null);case 22:case 23:return na(t),Hm(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),a=t.updateQueue,a!==null&&Fu(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&pt(ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Do(ot),Pe(t),null;case 25:return null;case 30:return null}throw Error(q(156,t.tag))}function i5(e,t){switch(Rm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Do(ot),gl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fd(t),null;case 31:if(t.memoizedState!==null){if(na(t),t.alternate===null)throw Error(q(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(na(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pt(Je),null;case 4:return gl(),null;case 10:return Do(t.type),null;case 22:case 23:return na(t),Hm(),e!==null&&pt(ar),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Do(ot),null;case 25:return null;default:return null}}function Tb(e,t){switch(Rm(t),t.tag){case 3:Do(ot),gl();break;case 26:case 27:case 5:fd(t);break;case 4:gl();break;case 31:t.memoizedState!==null&&na(t);break;case 13:na(t);break;case 19:pt(Je);break;case 10:Do(t.type);break;case 22:case 23:na(t),Hm(),e!==null&&pt(ar);break;case 24:Do(ot)}}function us(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){Ie(t,t.return,i)}}function Sn(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,u=i;try{u()}catch(c){Ie(n,s,c)}}}o=o.next}while(o!==r)}}catch(c){Ie(t,t.return,c)}}function Nb(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{qy(t,a)}catch(o){Ie(e,e.return,o)}}}function Db(e,t,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,t,o)}}function Oi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ie(e,t,n)}}function ao(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ie(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ie(e,t,n)}else a.current=null}function Rb(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ie(e,e.return,n)}}function pp(e,t,a){try{var o=e.stateNode;k5(o,e.type,a,t),o[jt]=t}catch(n){Ie(e,e.return,n)}}function zb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&In(e.type)||e.tag===4}function mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&In(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function am(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ao));else if(o!==4&&(o===27&&In(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(am(e,t,a),e=e.sibling;e!==null;)am(e,t,a),e=e.sibling}function Id(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&In(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Id(e,t,a),e=e.sibling;e!==null;)Id(e,t,a),e=e.sibling}function Ob(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Lt(t,o,a),t[vt]=e,t[jt]=a}catch(r){Ie(e,e.return,r)}}var Mo=!1,at=!1,gp=!1,g0=typeof WeakSet=="function"?WeakSet:Set,ct=null;function s5(e,t){if(e=e.containerInfo,um=Bd,e=Sy(e),Em(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(i=l+n),f!==r||o!==0&&f.nodeType!==3||(s=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break t;if(d===a&&++u===n&&(i=l),d===r&&++c===o&&(s=l),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(dm={focusedElem:e,selectionRange:a},Bd=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=ur(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(b){Ie(a,a.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)fm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(q(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function Bb(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_o(e,a),o&4&&us(5,a);break;case 1:if(_o(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){Ie(a,a.return,l)}else{var n=ur(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Ie(a,a.return,l)}}o&64&&Nb(a),o&512&&Oi(a,a.return);break;case 3:if(_o(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{qy(e,t)}catch(l){Ie(a,a.return,l)}}break;case 27:t===null&&o&4&&Ob(a);case 26:case 5:_o(e,a),t===null&&o&4&&Rb(a),o&512&&Oi(a,a.return);break;case 12:_o(e,a);break;case 31:_o(e,a),o&4&&Ub(e,a);break;case 13:_o(e,a),o&4&&qb(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=x5.bind(null,a),z5(e,a))));break;case 22:if(o=a.memoizedState!==null||Mo,!o){t=t!==null&&t.memoizedState!==null||at,n=Mo;var r=at;Mo=o,(at=t)&&!r?Io(e,a,(a.subtreeFlags&8772)!==0):_o(e,a),Mo=n,at=r}break;case 30:break;default:_o(e,a)}}function Pb(e){var t=e.alternate;t!==null&&(e.alternate=null,Pb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Yt=!1;function Lo(e,t,a){for(a=a.child;a!==null;)Hb(e,t,a),a=a.sibling}function Hb(e,t,a){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(as,a)}catch{}switch(a.tag){case 26:at||ao(a,t),Lo(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||ao(a,t);var o=Xe,n=Yt;In(a.type)&&(Xe=a.stateNode,Yt=!1),Lo(e,t,a),Ui(a.stateNode),Xe=o,Yt=n;break;case 5:at||ao(a,t);case 6:if(o=Xe,n=Yt,Xe=null,Lo(e,t,a),Xe=o,Yt=n,Xe!==null)if(Yt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(r){Ie(a,t,r)}else try{Xe.removeChild(a.stateNode)}catch(r){Ie(a,t,r)}break;case 18:Xe!==null&&(Yt?(e=Xe,A0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_l(e)):A0(Xe,a.stateNode));break;case 4:o=Xe,n=Yt,Xe=a.stateNode.containerInfo,Yt=!0,Lo(e,t,a),Xe=o,Yt=n;break;case 0:case 11:case 14:case 15:Sn(2,a,t),at||Sn(4,a,t),Lo(e,t,a);break;case 1:at||(ao(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Db(a,t,o)),Lo(e,t,a);break;case 21:Lo(e,t,a);break;case 22:at=(o=at)||a.memoizedState!==null,Lo(e,t,a),at=o;break;default:Lo(e,t,a)}}function Ub(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(a){Ie(t,t.return,a)}}}function qb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(a){Ie(t,t.return,a)}}function u5(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new g0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new g0),t;default:throw Error(q(435,e.tag))}}function Vu(e,t){var a=u5(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=y5.bind(null,e,o);o.then(n,n)}})}function Gt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(In(i.type)){Xe=i.stateNode,Yt=!1;break e}break;case 5:Xe=i.stateNode,Yt=!1;break e;case 3:case 4:Xe=i.stateNode.containerInfo,Yt=!0;break e}i=i.return}if(Xe===null)throw Error(q(160));Hb(r,l,n),Xe=null,Yt=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fb(t,e),t=t.sibling}var Ha=null;function Fb(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Xt(e),o&4&&(Sn(3,e,e.return),us(3,e),Sn(5,e,e.return));break;case 1:Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),o&64&&Mo&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Ha;if(Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[rs]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Lt(r,o,a),r[vt]=e,ft(r),o=r;break e;case"link":var l=B0("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),Lt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=B0("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),Lt(r,o,a),n.head.appendChild(r);break;default:throw Error(q(468,o))}r[vt]=e,ft(r),o=r}e.stateNode=o}else P0(n,e.type,e.stateNode);else e.stateNode=O0(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?P0(n,e.type,e.stateNode):O0(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),a!==null&&o&4&&pp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),e.flags&32){n=e.stateNode;try{xl(n,"")}catch(g){Ie(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,pp(e,n,a!==null?a.memoizedProps:n)),o&1024&&(gp=!0);break;case 6:if(Gt(t,e),Xt(e),o&4){if(e.stateNode===null)throw Error(q(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ie(e,e.return,g)}}break;case 3:if(id=null,n=Ha,Ha=Rd(t.containerInfo),Gt(t,e),Ha=n,Xt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(t.containerInfo)}catch(g){Ie(e,e.return,g)}gp&&(gp=!1,Vb(e));break;case 4:o=Ha,Ha=Rd(e.stateNode.containerInfo),Gt(t,e),Xt(e),Ha=o;break;case 12:Gt(t,e),Xt(e);break;case 31:Gt(t,e),Xt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vu(e,o)));break;case 13:Gt(t,e),Xt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wd=ia()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vu(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=Mo,c=at;if(Mo=u||n,at=c||s,Gt(t,e),at=c,Mo=u,Xt(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Mo||at||Jn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var f=s.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null;i.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(g){Ie(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){Ie(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?T0(p,!0):T0(s.stateNode,!1)}catch(g){Ie(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vu(e,a))));break;case 19:Gt(t,e),Xt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vu(e,o)));break;case 30:break;case 21:break;default:Gt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(zb(o)){a=o;break}o=o.return}if(a==null)throw Error(q(160));switch(a.tag){case 27:var n=a.stateNode,r=mp(e);Id(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(xl(l,""),a.flags&=-33);var i=mp(e);Id(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,u=mp(e);am(e,u,s);break;default:throw Error(q(161))}}catch(c){Ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vb(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _o(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bb(e,t.alternate,t),t=t.sibling}function Jn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sn(4,t,t.return),Jn(t);break;case 1:ao(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Db(t,t.return,a),Jn(t);break;case 27:Ui(t.stateNode);case 26:case 5:ao(t,t.return),Jn(t);break;case 22:t.memoizedState===null&&Jn(t);break;case 30:Jn(t);break;default:Jn(t)}e=e.sibling}}function Io(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:Io(n,r,a),us(4,r);break;case 1:if(Io(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ie(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Uy(s[n],i)}catch(u){Ie(o,o.return,u)}}a&&l&64&&Nb(r),Oi(r,r.return);break;case 27:Ob(r);case 26:case 5:Io(n,r,a),a&&o===null&&l&4&&Rb(r),Oi(r,r.return);break;case 12:Io(n,r,a);break;case 31:Io(n,r,a),a&&l&4&&Ub(n,r);break;case 13:Io(n,r,a),a&&l&4&&qb(n,r);break;case 22:r.memoizedState===null&&Io(n,r,a),Oi(r,r.return);break;case 30:break;default:Io(n,r,a)}t=t.sibling}}function tg(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&is(a))}function ag(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&is(e))}function Pa(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gb(e,t,a,o),t=t.sibling}function Gb(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Pa(e,t,a,o),n&2048&&us(9,t);break;case 1:Pa(e,t,a,o);break;case 3:Pa(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&is(e)));break;case 12:if(n&2048){Pa(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Ie(t,t.return,s)}}else Pa(e,t,a,o);break;case 31:Pa(e,t,a,o);break;case 13:Pa(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Pa(e,t,a,o):Bi(e,t):r._visibility&2?Pa(e,t,a,o):(r._visibility|=2,Kr(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&tg(l,t);break;case 24:Pa(e,t,a,o),n&2048&&ag(t.alternate,t);break;default:Pa(e,t,a,o)}}function Kr(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,u=l.flags;switch(l.tag){case 0:case 11:case 15:Kr(r,l,i,s,n),us(8,l);break;case 23:break;case 22:var c=l.stateNode;l.memoizedState!==null?c._visibility&2?Kr(r,l,i,s,n):Bi(r,l):(c._visibility|=2,Kr(r,l,i,s,n)),n&&u&2048&&tg(l.alternate,l);break;case 24:Kr(r,l,i,s,n),n&&u&2048&&ag(l.alternate,l);break;default:Kr(r,l,i,s,n)}t=t.sibling}}function Bi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:Bi(a,o),n&2048&&tg(o.alternate,o);break;case 24:Bi(a,o),n&2048&&ag(o.alternate,o);break;default:Bi(a,o)}t=t.sibling}}var ki=8192;function Zr(e,t,a){if(e.subtreeFlags&ki)for(e=e.child;e!==null;)Xb(e,t,a),e=e.sibling}function Xb(e,t,a){switch(e.tag){case 26:Zr(e,t,a),e.flags&ki&&e.memoizedState!==null&&Z5(a,Ha,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,t,a);break;case 3:case 4:var o=Ha;Ha=Rd(e.stateNode.containerInfo),Zr(e,t,a),Ha=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ki,ki=16777216,Zr(e,t,a),ki=o):Zr(e,t,a));break;default:Zr(e,t,a)}}function Yb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ct=o,Kb(o,e)}Yb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zb(e),e=e.sibling}function Zb(e){switch(e.tag){case 0:case 11:case 15:wi(e),e.flags&2048&&Sn(9,e,e.return);break;case 3:wi(e);break;case 12:wi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,rd(e)):wi(e);break;default:wi(e)}}function rd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ct=o,Kb(o,e)}Yb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sn(8,t,t.return),rd(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,rd(t));break;default:rd(t)}e=e.sibling}}function Kb(e,t){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Sn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:is(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ct=o;else e:for(a=e;ct!==null;){o=ct;var n=o.sibling,r=o.return;if(Pb(o),o===a){ct=null;break e}if(n!==null){n.return=r,ct=n;break e}ct=r}}}var d5={getCacheForType:function(e){var t=St(ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return St(ot).controller.signal}},c5=typeof WeakMap=="function"?WeakMap:Map,Se=0,Te=null,be=null,we=0,_e=0,oa=null,un=!1,Al=!1,og=!1,Ho=0,We=0,Ln=0,nr=0,ng=0,la=0,vl=0,Pi=null,Zt=null,om=!1,Wd=0,jb=0,kd=1/0,Md=null,hn=null,rt=0,xn=null,Cl=null,Ro=0,nm=0,rm=null,Wb=null,Hi=0,lm=null;function da(){return(Se&2)!==0&&we!==0?we&-we:le.T!==null?lg():ry()}function Qb(){if(la===0)if((we&536870912)===0||ve){var e=Du;Du<<=1,(Du&3932160)===0&&(Du=262144),la=e}else la=536870912;return e=fa.current,e!==null&&(e.flags|=32),la}function Kt(e,t,a){(e===Te&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),dn(e,we,la,!1)),ns(e,a),((Se&2)===0||e!==Te)&&(e===Te&&((Se&2)===0&&(nr|=a),We===4&&dn(e,we,la,!1)),ro(e))}function $b(e,t,a){if((Se&6)!==0)throw Error(q(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||os(e,t),n=o?m5(e,t):hp(e,t,!0),r=o;do{if(n===0){Al&&!o&&dn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!f5(a)){n=hp(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Pi;var s=i.current.memoizedState.isDehydrated;if(s&&(Sl(i,l).flags|=256),l=hp(i,l,!1),l!==2){if(og&&!s){i.errorRecoveryDisabledLanes|=r,nr|=r,n=4;break e}r=Zt,Zt=n,r!==null&&(Zt===null?Zt=r:Zt.push.apply(Zt,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){Sl(e,0),dn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(q(345));case 4:if((t&4194048)!==t)break;case 6:dn(o,t,la,!un);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(q(329))}if((t&62914560)===t&&(n=Wd+300-ia(),10<n)){if(dn(o,t,la,!un),Hd(o,0,!0)!==0)break e;Ro=t,o.timeoutHandle=yw(h0.bind(null,o,a,Zt,Md,om,t,la,nr,vl,un,r,"Throttled",-0,0),n);break e}h0(o,a,Zt,Md,om,t,la,nr,vl,un,r,null,-0,0)}}break}while(!0);ro(e)}function h0(e,t,a,o,n,r,l,i,s,u,c,f,d,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ao},Xb(t,r,f);var g=(r&62914560)===r?Wd-ia():(r&4194048)===r?jb-ia():0;if(g=K5(f,g),g!==null){Ro=r,e.cancelPendingCommit=g(y0.bind(null,e,t,r,a,o,n,l,i,s,c,f,null,d,p)),dn(e,r,l,!u);return}}y0(e,t,r,a,o,n,l,i,s)}function f5(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!ca(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t,a,o){t&=~ng,t&=~nr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-ua(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&ay(e,a,t)}function Qd(){return(Se&6)===0?(ds(0,!1),!1):!0}function rg(){if(be!==null){if(_e===0)var e=be.return;else e=be,To=mr=null,Gm(e),fl=null,Zi=0,e=be;for(;e!==null;)Tb(e.alternate,e),e=e.return;be=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,A5(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ro=0,rg(),Te=e,be=a=No(e.current,null),we=t,_e=0,oa=null,un=!1,Al=os(e,t),og=!1,vl=la=ng=nr=Ln=We=0,Zt=Pi=null,om=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-ua(o),r=1<<n;t|=e[n],o&=~r}return Ho=t,Vd(),a}function Jb(e,t){pe=null,le.H=ji,t===El||t===Xd?(t=Kx(),_e=3):t===Bm?(t=Kx(),_e=4):_e=t===Jm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,oa=t,be===null&&(We=1,Ld(e,La(t,e.current)))}function ew(){var e=fa.current;return e===null?!0:(we&4194048)===we?Ia===null:(we&62914560)===we||(we&536870912)!==0?e===Ia:!1}function tw(){var e=le.H;return le.H=ji,e===null?ji:e}function aw(){var e=le.A;return le.A=d5,e}function Ed(){We=4,un||(we&4194048)!==we&&fa.current!==null||(Al=!0),(Ln&134217727)===0&&(nr&134217727)===0||Te===null||dn(Te,we,la,!1)}function hp(e,t,a){var o=Se;Se|=2;var n=tw(),r=aw();(Te!==e||we!==t)&&(Md=null,Sl(e,t)),t=!1;var l=We;e:do try{if(_e!==0&&be!==null){var i=be,s=oa;switch(_e){case 8:rg(),l=6;break e;case 3:case 2:case 9:case 6:fa.current===null&&(t=!0);var u=_e;if(_e=0,oa=null,il(e,i,s,u),a&&Al){l=0;break e}break;default:u=_e,_e=0,oa=null,il(e,i,s,u)}}p5(),l=We;break}catch(c){Jb(e,c)}while(!0);return t&&e.shellSuspendCounter++,To=mr=null,Se=o,le.H=n,le.A=r,be===null&&(Te=null,we=0,Vd()),l}function p5(){for(;be!==null;)ow(be)}function m5(e,t){var a=Se;Se|=2;var o=tw(),n=aw();Te!==e||we!==t?(Md=null,kd=ia()+500,Sl(e,t)):Al=os(e,t);e:do try{if(_e!==0&&be!==null){t=be;var r=oa;t:switch(_e){case 1:_e=0,oa=null,il(e,t,r,1);break;case 2:case 9:if(Zx(r)){_e=0,oa=null,x0(t);break}t=function(){_e!==2&&_e!==9||Te!==e||(_e=7),ro(e)},r.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:Zx(r)?(_e=0,oa=null,x0(t)):(_e=0,oa=null,il(e,t,r,7));break;case 5:var l=null;switch(be.tag){case 26:l=be.memoizedState;case 5:case 27:var i=be;if(l?Sw(l):i.stateNode.complete){_e=0,oa=null;var s=i.sibling;if(s!==null)be=s;else{var u=i.return;u!==null?(be=u,$d(u)):be=null}break t}}_e=0,oa=null,il(e,t,r,5);break;case 6:_e=0,oa=null,il(e,t,r,6);break;case 8:rg(),We=6;break e;default:throw Error(q(462))}}g5();break}catch(c){Jb(e,c)}while(!0);return To=mr=null,le.H=o,le.A=n,Se=a,be!==null?0:(Te=null,we=0,Vd(),We)}function g5(){for(;be!==null&&!PI();)ow(be)}function ow(e){var t=Ab(e.alternate,e,Ho);e.memoizedProps=e.pendingProps,t===null?$d(e):be=t}function x0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=d0(a,t,t.pendingProps,t.type,void 0,we);break;case 11:t=d0(a,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Gm(t);default:Tb(a,t),t=be=Ty(t,Ho),t=Ab(a,t,Ho)}e.memoizedProps=e.pendingProps,t===null?$d(e):be=t}function il(e,t,a,o){To=mr=null,Gm(t),fl=null,Zi=0;var n=t.return;try{if(o5(e,n,t,a,we)){We=1,Ld(e,La(a,e.current)),be=null;return}}catch(r){if(n!==null)throw be=n,r;We=1,Ld(e,La(a,e.current)),be=null;return}t.flags&32768?(ve||o===1?e=!0:Al||(we&536870912)!==0?e=!1:(un=e=!0,(o===2||o===9||o===3||o===6)&&(o=fa.current,o!==null&&o.tag===13&&(o.flags|=16384))),nw(t,e)):$d(t)}function $d(e){var t=e;do{if((t.flags&32768)!==0){nw(t,un);return}e=t.return;var a=l5(t.alternate,t,Ho);if(a!==null){be=a;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);We===0&&(We=5)}function nw(e,t){do{var a=i5(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);We=6,be=null}function y0(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do Jd();while(rt!==0);if((Se&6)!==0)throw Error(q(327));if(t!==null){if(t===e.current)throw Error(q(177));if(r=t.lanes|t.childLanes,r|=Am,KI(e,a,r,l,i,s),e===Te&&(be=Te=null,we=0),Cl=t,xn=e,Ro=a,nm=r,rm=n,Wb=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,b5(pd,function(){return uw(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=le.T,le.T=null,n=Le.p,Le.p=2,l=Se,Se|=4;try{s5(e,t,a)}finally{Se=l,Le.p=n,le.T=o}}rt=1,rw(),lw(),iw()}}function rw(){if(rt===1){rt=0;var e=xn,t=Cl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=le.T,le.T=null;var o=Le.p;Le.p=2;var n=Se;Se|=4;try{Fb(t,e);var r=dm,l=Sy(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&Cy(i.ownerDocument.documentElement,i)){if(s!==null&&Em(i)){var u=s.start,c=s.end;if(c===void 0&&(c=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(c,i.value.length);else{var f=i.ownerDocument||document,d=f&&f.defaultView||window;if(d.getSelection){var p=d.getSelection(),g=i.textContent.length,b=Math.min(s.start,g),w=s.end===void 0?b:Math.min(s.end,g);!p.extend&&b>w&&(l=w,w=b,b=l);var h=Ux(i,b),x=Ux(i,w);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),b>w?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=i;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<f.length;i++){var y=f[i];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Bd=!!um,dm=um=null}finally{Se=n,Le.p=o,le.T=a}}e.current=t,rt=2}}function lw(){if(rt===2){rt=0;var e=xn,t=Cl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var o=Le.p;Le.p=2;var n=Se;Se|=4;try{Bb(e,t.alternate,t)}finally{Se=n,Le.p=o,le.T=a}}rt=3}}function iw(){if(rt===4||rt===3){rt=0,HI();var e=xn,t=Cl,a=Ro,o=Wb;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,Cl=xn=null,sw(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(hn=null),Cm(a),t=t.stateNode,sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(as,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=le.T,n=Le.p,Le.p=2,le.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{le.T=t,Le.p=n}}(Ro&3)!==0&&Jd(),ro(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===lm?Hi++:(Hi=0,lm=e):Hi=0,ds(0,!1)}}function sw(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,is(t)))}function Jd(){return rw(),lw(),iw(),uw()}function uw(){if(rt!==5)return!1;var e=xn,t=nm;nm=0;var a=Cm(Ro),o=le.T,n=Le.p;try{Le.p=32>a?32:a,le.T=null,a=rm,rm=null;var r=xn,l=Ro;if(rt=0,Cl=xn=null,Ro=0,(Se&6)!==0)throw Error(q(331));var i=Se;if(Se|=4,Zb(r.current),Gb(r,r.current,l,a),Se=i,ds(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(as,r)}catch{}return!0}finally{Le.p=n,le.T=o,sw(e,t)}}function b0(e,t,a){t=La(a,t),t=Jp(e.stateNode,t,2),e=gn(e,t,2),e!==null&&(ns(e,2),ro(e))}function Ie(e,t,a){if(e.tag===3)b0(e,e,a);else for(;t!==null;){if(t.tag===3){b0(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hn===null||!hn.has(o))){e=La(a,e),a=Lb(2),o=gn(t,a,2),o!==null&&(_b(a,o,t,e),ns(o,2),ro(o));break}}t=t.return}}function xp(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new c5;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(og=!0,n.add(a),e=h5.bind(null,e,t,a),t.then(e,e))}function h5(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(we&a)===a&&(We===4||We===3&&(we&62914560)===we&&300>ia()-Wd?(Se&2)===0&&Sl(e,0):ng|=a,vl===we&&(vl=0)),ro(e)}function dw(e,t){t===0&&(t=ty()),e=pr(e,t),e!==null&&(ns(e,t),ro(e))}function x5(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),dw(e,a)}function y5(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(q(314))}o!==null&&o.delete(t),dw(e,a)}function b5(e,t){return wm(e,t)}var Ad=null,jr=null,im=!1,Td=!1,yp=!1,cn=0;function ro(e){e!==jr&&e.next===null&&(jr===null?Ad=jr=e:jr=jr.next=e),Td=!0,im||(im=!0,v5())}function ds(e,t){if(!yp&&Td){yp=!0;do for(var a=!1,o=Ad;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-ua(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,w0(o,r))}else r=we,r=Hd(o,o===Te?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||os(o,r)||(a=!0,w0(o,r));o=o.next}while(a);yp=!1}}function w5(){cw()}function cw(){Td=im=!1;var e=0;cn!==0&&E5()&&(e=cn);for(var t=ia(),a=null,o=Ad;o!==null;){var n=o.next,r=fw(o,t);r===0?(o.next=null,a===null?Ad=n:a.next=n,n===null&&(jr=a)):(a=o,(e!==0||(r&3)!==0)&&(Td=!0)),o=n}rt!==0&&rt!==5||ds(e,!1),cn!==0&&(cn=0)}function fw(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-ua(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=ZI(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=Te,a=we,a=Hd(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Zf(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||os(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Zf(o),Cm(a)){case 2:case 8:a=J0;break;case 32:a=pd;break;case 268435456:a=ey;break;default:a=pd}return o=pw.bind(null,e),a=wm(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Zf(o),e.callbackPriority=2,e.callbackNode=null,2}function pw(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jd()&&e.callbackNode!==a)return null;var o=we;return o=Hd(e,e===Te?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($b(e,o,t),fw(e,ia()),e.callbackNode!=null&&e.callbackNode===a?pw.bind(null,e):null)}function w0(e,t){if(Jd())return null;$b(e,t,!0)}function v5(){T5(function(){(Se&6)!==0?wm($0,w5):cw()})}function lg(){if(cn===0){var e=yl;e===0&&(e=Nu,Nu<<=1,(Nu&261888)===0&&(Nu=256)),cn=e}return cn}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wu(""+e)}function C0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function C5(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=v0((n[jt]||null).action),l=o.submitter;l&&(t=(t=l[jt]||null)?v0(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new Ud("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cn!==0){var s=l?C0(n,l):new FormData(n);Qp(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?C0(n,l):new FormData(n),Qp(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Gu=0;Gu<Hp.length;Gu++)Xu=Hp[Gu],S0=Xu.toLowerCase(),L0=Xu[0].toUpperCase()+Xu.slice(1),Ua(S0,"on"+L0);var Xu,S0,L0,Gu;Ua(_y,"onAnimationEnd");Ua(Iy,"onAnimationIteration");Ua(ky,"onAnimationStart");Ua("dblclick","onDoubleClick");Ua("focusin","onFocus");Ua("focusout","onBlur");Ua(Uk,"onTransitionRun");Ua(qk,"onTransitionStart");Ua(Fk,"onTransitionCancel");Ua(My,"onTransitionEnd");hl("onMouseEnter",["mouseout","mouseover"]);hl("onMouseLeave",["mouseout","mouseover"]);hl("onPointerEnter",["pointerout","pointerover"]);hl("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wi));function mw(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(c){gd(c)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(c){gd(c)}n.currentTarget=null,r=s}}}}function ye(e,t){var a=t[Tp];a===void 0&&(a=t[Tp]=new Set);var o=e+"__bubble";a.has(o)||(gw(t,e,2,!1),a.add(o))}function bp(e,t,a){var o=0;t&&(o|=4),gw(a,e,o,t)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function ig(e){if(!e[Yu]){e[Yu]=!0,ly.forEach(function(a){a!=="selectionchange"&&(S5.has(a)||bp(a,!1,e),bp(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yu]||(t[Yu]=!0,bp("selectionchange",!1,t))}}function gw(e,t,a,o){switch(Mw(t)){case 2:var n=Q5;break;case 8:n=$5;break;default:n=cg}a=n.bind(null,t,a,e),n=void 0,!Op||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function wp(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=$r(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}my(function(){var u=r,c=_m(a),f=[];e:{var d=Ey.get(e);if(d!==void 0){var p=Ud,g=e;switch(e){case"keypress":if($u(a)===0)break e;case"keydown":case"keyup":p=yk;break;case"focusin":g="focus",p=$f;break;case"focusout":g="blur",p=$f;break;case"beforeblur":case"afterblur":p=$f;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vk;break;case _y:case Iy:case ky:p=uk;break;case My:p=Sk;break;case"scroll":case"scrollend":p=nk;break;case"wheel":p=_k;break;case"copy":case"cut":case"paste":p=ck;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dx;break;case"toggle":case"beforetoggle":p=kk}var b=(t&4)!==0,w=!b&&(e==="scroll"||e==="scrollend"),h=b?d!==null?d+"Capture":null:d;b=[];for(var x=u,m;x!==null;){var y=x;if(m=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||m===null||h===null||(y=Fi(x,h),y!=null&&b.push(Qi(x,y,m))),w)break;x=x.return}0<b.length&&(d=new p(d,g,null,a,c),f.push({event:d,listeners:b}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&a!==zp&&(g=a.relatedTarget||a.fromElement)&&($r(g)||g[Il]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?$r(g):null,g!==null&&(w=ts(g),b=g.tag,g!==w||b!==5&&b!==27&&b!==6)&&(g=null)):(p=null,g=u),p!==g)){if(b=Tx,y="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Dx,y="onPointerLeave",h="onPointerEnter",x="pointer"),w=p==null?d:_i(p),m=g==null?d:_i(g),d=new b(y,x+"leave",p,a,c),d.target=w,d.relatedTarget=m,y=null,$r(c)===u&&(b=new b(h,x+"enter",g,a,c),b.target=m,b.relatedTarget=w,y=b),w=y,p&&g)t:{for(b=L5,h=p,x=g,m=0,y=h;y;y=b(y))m++;y=0;for(var S=x;S;S=b(S))y++;for(;0<m-y;)h=b(h),m--;for(;0<y-m;)x=b(x),y--;for(;m--;){if(h===x||x!==null&&h===x.alternate){b=h;break t}h=b(h),x=b(x)}b=null}else b=null;p!==null&&_0(f,d,p,b,!1),g!==null&&w!==null&&_0(f,w,g,b,!0)}}e:{if(d=u?_i(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=Bx;else if(Ox(d))if(wy)C=Bk;else{C=zk;var v=Rk}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&Lm(u.elementType)&&(C=Bx):C=Ok;if(C&&(C=C(e,u))){by(f,C,a,c);break e}v&&v(e,d,u),e==="focusout"&&u&&d.type==="number"&&u.memoizedProps.value!=null&&Rp(d,"number",d.value)}switch(v=u?_i(u):window,e){case"focusin":(Ox(v)||v.contentEditable==="true")&&(tl=v,Bp=u,Ai=null);break;case"focusout":Ai=Bp=tl=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,qx(f,a,c);break;case"selectionchange":if(Hk)break;case"keydown":case"keyup":qx(f,a,c)}var _;if(Mm)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else el?xy(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(hy&&a.locale!=="ko"&&(el||I!=="onCompositionStart"?I==="onCompositionEnd"&&el&&(_=gy()):(sn=c,Im="value"in sn?sn.value:sn.textContent,el=!0)),v=Nd(u,I),0<v.length&&(I=new Nx(I,e,null,a,c),f.push({event:I,listeners:v}),_?I.data=_:(_=yy(a),_!==null&&(I.data=_)))),(_=Ek?Ak(e,a):Tk(e,a))&&(I=Nd(u,"onBeforeInput"),0<I.length&&(v=new Nx("onBeforeInput","beforeinput",null,a,c),f.push({event:v,listeners:I}),v.data=_)),C5(f,e,u,a,c)}mw(f,t)})}function Qi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nd(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Fi(e,a),n!=null&&o.unshift(Qi(e,n,r)),n=Fi(e,t),n!=null&&o.push(Qi(e,n,r))),e.tag===3)return o;e=e.return}return[]}function L5(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _0(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,u=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||u===null||(s=u,n?(u=Fi(a,r),u!=null&&l.unshift(Qi(a,u,s))):n||(u=Fi(a,r),u!=null&&l.push(Qi(a,u,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var _5=/\r\n?/g,I5=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(_5,`
`).replace(I5,"")}function hw(e,t){return t=I0(t),I0(e)===t}function ke(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||xl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&xl(e,""+o);break;case"className":zu(e,"class",o);break;case"tabIndex":zu(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zu(e,a,o);break;case"style":py(e,o,r);break;case"data":if(t!=="object"){zu(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wu(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",n.name,n,null),ke(e,t,"formEncType",n.formEncType,n,null),ke(e,t,"formMethod",n.formMethod,n,null),ke(e,t,"formTarget",n.formTarget,n,null)):(ke(e,t,"encType",n.encType,n,null),ke(e,t,"method",n.method,n,null),ke(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wu(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ao);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(q(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(q(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Wu(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ju(e,"popover",o);break;case"xlinkActuate":Co(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Co(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Co(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Co(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Co(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Co(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Co(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Co(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Co(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ju(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ak.get(a)||a,ju(e,a,o))}}function sm(e,t,a,o,n,r){switch(a){case"style":py(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(q(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(q(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xl(e,o):(typeof o=="number"||typeof o=="bigint")&&xl(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ao);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!iy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[jt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ju(e,a,o)}}}function Lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:ke(e,t,r,l,a,null)}}n&&ke(e,t,"srcSet",a.srcSet,a,null),o&&ke(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var i=r=l=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];if(c!=null)switch(o){case"name":n=c;break;case"type":l=c;break;case"checked":s=c;break;case"defaultChecked":u=c;break;case"value":r=c;break;case"defaultValue":i=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(q(137,t));break;default:ke(e,t,o,c,a,null)}}dy(e,r,i,s,u,l,n,!1);return;case"select":ye("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:ke(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?ul(e,!!o,t,!1):a!=null&&ul(e,!!o,a,!0);return;case"textarea":ye("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(q(91));break;default:ke(e,t,l,i,a,null)}fy(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ke(e,t,s,o,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Wi.length;o++)ye(Wi[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:ke(e,t,u,o,a,null)}return;default:if(Lm(t)){for(c in a)a.hasOwnProperty(c)&&(o=a[c],o!==void 0&&sm(e,t,c,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&ke(e,t,i,o,a,null))}function k5(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,u=null,c=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||ke(e,t,p,null,o,f)}}for(var d in o){var p=o[d];if(f=a[d],o.hasOwnProperty(d)&&(p!=null||f!=null))switch(d){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":c=p;break;case"value":l=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,t));break;default:p!==f&&ke(e,t,d,p,o,f)}}Dp(e,l,i,s,u,c,r,n);return;case"select":p=l=i=d=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||ke(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":d=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&ke(e,t,n,r,o,s)}t=i,a=l,o=p,d!=null?ul(e,!!a,d,!1):!!o!=!!a&&(t!=null?ul(e,!!a,t,!0):ul(e,!!a,a?[]:"",!1));return;case"textarea":p=d=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:ke(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":d=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(q(91));break;default:n!==r&&ke(e,t,l,n,o,r)}cy(e,d,p);return;case"option":for(var g in a)d=a[g],a.hasOwnProperty(g)&&d!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:ke(e,t,g,null,o,d));for(s in o)d=o[s],p=a[s],o.hasOwnProperty(s)&&d!==p&&(d!=null||p!=null)&&(s==="selected"?e.selected=d&&typeof d!="function"&&typeof d!="symbol":ke(e,t,s,d,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in a)d=a[b],a.hasOwnProperty(b)&&d!=null&&!o.hasOwnProperty(b)&&ke(e,t,b,null,o,d);for(u in o)if(d=o[u],p=a[u],o.hasOwnProperty(u)&&d!==p&&(d!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(q(137,t));break;default:ke(e,t,u,d,o,p)}return;default:if(Lm(t)){for(var w in a)d=a[w],a.hasOwnProperty(w)&&d!==void 0&&!o.hasOwnProperty(w)&&sm(e,t,w,void 0,o,d);for(c in o)d=o[c],p=a[c],!o.hasOwnProperty(c)||d===p||d===void 0&&p===void 0||sm(e,t,c,d,o,p);return}}for(var h in a)d=a[h],a.hasOwnProperty(h)&&d!=null&&!o.hasOwnProperty(h)&&ke(e,t,h,null,o,d);for(f in o)d=o[f],p=a[f],!o.hasOwnProperty(f)||d===p||d==null&&p==null||ke(e,t,f,d,o,p)}function k0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M5(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&k0(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>i)break;var c=s.transferSize,f=s.initiatorType;c&&k0(f)&&(s=s.responseEnd,l+=c*(s<i?1:(i-u)/(s-u)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var um=null,dm=null;function Dd(e){return e.nodeType===9?e:e.ownerDocument}function M0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xw(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vp=null;function E5(){var e=window.event;return e&&e.type==="popstate"?e===vp?!1:(vp=e,!0):(vp=null,!1)}var yw=typeof setTimeout=="function"?setTimeout:void 0,A5=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,T5=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(N5)}:yw;function N5(e){setTimeout(function(){throw e})}function In(e){return e==="head"}function A0(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),_l(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ui(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ui(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[rs]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&Ui(e.ownerDocument.body);a=n}while(a);_l(t)}function T0(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fm(a),Sm(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function D5(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ka(e.nextSibling),e===null)break}return null}function R5(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ka(e.nextSibling),e===null))return null;return e}function bw(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ka(e.nextSibling),e===null))return null;return e}function pm(e){return e.data==="$?"||e.data==="$~"}function mm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function z5(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ka(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gm=null;function N0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ka(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ww(e,t,a){switch(t=Dd(a),e){case"html":if(e=t.documentElement,!e)throw Error(q(452));return e;case"head":if(e=t.head,!e)throw Error(q(453));return e;case"body":if(e=t.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}function Ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sm(e)}var Ma=new Map,R0=new Set;function Rd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Uo=Le.d;Le.d={f:O5,r:B5,D:P5,C:H5,L:U5,m:q5,X:V5,S:F5,M:G5};function O5(){var e=Uo.f(),t=Qd();return e||t}function B5(e){var t=kl(e);t!==null&&t.tag===5&&t.type==="form"?pb(t):Uo.r(e)}var Tl=typeof document>"u"?null:document;function vw(e,t,a){var o=Tl;if(o&&typeof t=="string"&&t){var n=Sa(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),R0.has(n)||(R0.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Lt(t,"link",e),ft(t),o.head.appendChild(t)))}}function P5(e){Uo.D(e),vw("dns-prefetch",e,null)}function H5(e,t){Uo.C(e,t),vw("preconnect",e,t)}function U5(e,t,a){Uo.L(e,t,a);var o=Tl;if(o&&e&&t){var n='link[rel="preload"][as="'+Sa(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Sa(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Sa(a.imageSizes)+'"]')):n+='[href="'+Sa(e)+'"]';var r=n;switch(t){case"style":r=Ll(e);break;case"script":r=Nl(e)}Ma.has(r)||(e=Ue({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ma.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(cs(r))||t==="script"&&o.querySelector(fs(r))||(t=o.createElement("link"),Lt(t,"link",e),ft(t),o.head.appendChild(t)))}}function q5(e,t){Uo.m(e,t);var a=Tl;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Sa(o)+'"][href="'+Sa(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Nl(e)}if(!Ma.has(r)&&(e=Ue({rel:"modulepreload",href:e},t),Ma.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fs(r)))return}o=a.createElement("link"),Lt(o,"link",e),ft(o),a.head.appendChild(o)}}}function F5(e,t,a){Uo.S(e,t,a);var o=Tl;if(o&&e){var n=sl(o).hoistableStyles,r=Ll(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(cs(r)))i.loading=5;else{e=Ue({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ma.get(r))&&sg(e,a);var s=l=o.createElement("link");ft(s),Lt(s,"link",e),s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,ld(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function V5(e,t){Uo.X(e,t);var a=Tl;if(a&&e){var o=sl(a).hoistableScripts,n=Nl(e),r=o.get(n);r||(r=a.querySelector(fs(n)),r||(e=Ue({src:e,async:!0},t),(t=Ma.get(n))&&ug(e,t),r=a.createElement("script"),ft(r),Lt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function G5(e,t){Uo.M(e,t);var a=Tl;if(a&&e){var o=sl(a).hoistableScripts,n=Nl(e),r=o.get(n);r||(r=a.querySelector(fs(n)),r||(e=Ue({src:e,async:!0,type:"module"},t),(t=Ma.get(n))&&ug(e,t),r=a.createElement("script"),ft(r),Lt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function z0(e,t,a,o){var n=(n=fn.current)?Rd(n):null;if(!n)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ll(a.href),a=sl(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ll(a.href);var r=sl(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(cs(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Ma.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ma.set(e,a),r||X5(n,e,a,l.state))),t&&o===null)throw Error(q(528,""));return l}if(t&&o!==null)throw Error(q(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(a),a=sl(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function Ll(e){return'href="'+Sa(e)+'"'}function cs(e){return'link[rel="stylesheet"]['+e+"]"}function Cw(e){return Ue({},e,{"data-precedence":e.precedence,precedence:null})}function X5(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Lt(t,"link",a),ft(t),e.head.appendChild(t))}function Nl(e){return'[src="'+Sa(e)+'"]'}function fs(e){return"script[async]"+e}function O0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Sa(a.href)+'"]');if(o)return t.instance=o,ft(o),o;var n=Ue({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ft(o),Lt(o,"style",n),ld(o,a.precedence,e),t.instance=o;case"stylesheet":n=Ll(a.href);var r=e.querySelector(cs(n));if(r)return t.state.loading|=4,t.instance=r,ft(r),r;o=Cw(a),(n=Ma.get(n))&&sg(o,n),r=(e.ownerDocument||e).createElement("link"),ft(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Lt(r,"link",o),t.state.loading|=4,ld(r,a.precedence,e),t.instance=r;case"script":return r=Nl(a.src),(n=e.querySelector(fs(r)))?(t.instance=n,ft(n),n):(o=a,(n=Ma.get(r))&&(o=Ue({},a),ug(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),ft(n),Lt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,ld(o,a.precedence,e));return t.instance}function ld(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function sg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ug(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var id=null;function B0(e,t,a){if(id===null){var o=new Map,n=id=new Map;n.set(a,o)}else n=id,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[rs]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function P0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Y5(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sw(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Z5(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ll(o.href),r=t.querySelector(cs(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zd.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ft(r);return}r=t.ownerDocument||t,o=Cw(o),(n=Ma.get(n))&&sg(o,n),r=r.createElement("link"),ft(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Lt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zd.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Cp=0;function K5(e,t){return e.stylesheets&&e.count===0&&sd(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Cp===0&&(Cp=62500*M5());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Cp?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function zd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Od=null;function sd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Od=new Map,t.forEach(j5,e),Od=null,zd.call(e))}function j5(e,t){if(!(t.state.loading&4)){var a=Od.get(e);if(a)var o=a.get(null);else{a=new Map,Od.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=zd.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var $i={$$typeof:Eo,Provider:null,Consumer:null,_currentValue:er,_currentValue2:er,_threadCount:0};function W5(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.hiddenUpdates=Kf(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Lw(e,t,a,o,n,r,l,i,s,u,c,f){return e=new W5(e,t,a,l,s,u,c,f,i),t=1,r===!0&&(t|=24),r=ra(3,null,null,t),e.current=r,r.stateNode=e,t=zm(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Pm(r),e}function _w(e){return e?(e=nl,e):nl}function Iw(e,t,a,o,n,r){n=_w(n),o.context===null?o.context=n:o.pendingContext=n,o=mn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=gn(e,o,t),a!==null&&(Kt(a,e,t),Ni(a,e,t))}function H0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dg(e,t){H0(e,t),(e=e.alternate)&&H0(e,t)}function kw(e){if(e.tag===13||e.tag===31){var t=pr(e,67108864);t!==null&&Kt(t,e,67108864),dg(e,67108864)}}function U0(e){if(e.tag===13||e.tag===31){var t=da();t=vm(t);var a=pr(e,t);a!==null&&Kt(a,e,t),dg(e,t)}}var Bd=!0;function Q5(e,t,a,o){var n=le.T;le.T=null;var r=Le.p;try{Le.p=2,cg(e,t,a,o)}finally{Le.p=r,le.T=n}}function $5(e,t,a,o){var n=le.T;le.T=null;var r=Le.p;try{Le.p=8,cg(e,t,a,o)}finally{Le.p=r,le.T=n}}function cg(e,t,a,o){if(Bd){var n=hm(o);if(n===null)wp(e,t,o,Pd,a),q0(e,o);else if(eM(n,e,t,a,o))o.stopPropagation();else if(q0(e,o),t&4&&-1<J5.indexOf(e)){for(;n!==null;){var r=kl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Qn(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-ua(l);i.entanglements[1]|=s,l&=~s}ro(r),(Se&6)===0&&(kd=ia()+500,ds(0,!1))}}break;case 31:case 13:i=pr(r,2),i!==null&&Kt(i,r,2),Qd(),dg(r,2)}if(r=hm(o),r===null&&wp(e,t,o,Pd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else wp(e,t,o,null,a)}}function hm(e){return e=_m(e),fg(e)}var Pd=null;function fg(e){if(Pd=null,e=$r(e),e!==null){var t=ts(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Z0(t),e!==null)return e;e=null}else if(a===31){if(e=K0(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pd=e,null}function Mw(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(UI()){case $0:return 2;case J0:return 8;case pd:case qI:return 32;case ey:return 268435456;default:return 32}default:return 32}}var xm=!1,yn=null,bn=null,wn=null,Ji=new Map,es=new Map,rn=[],J5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(t.pointerId)}}function vi(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=kl(t),t!==null&&kw(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function eM(e,t,a,o,n){switch(t){case"focusin":return yn=vi(yn,e,t,a,o,n),!0;case"dragenter":return bn=vi(bn,e,t,a,o,n),!0;case"mouseover":return wn=vi(wn,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return Ji.set(r,vi(Ji.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,es.set(r,vi(es.get(r)||null,e,t,a,o,n)),!0}return!1}function Ew(e){var t=$r(e.target);if(t!==null){var a=ts(t);if(a!==null){if(t=a.tag,t===13){if(t=Z0(a),t!==null){e.blockedOn=t,Lx(e.priority,function(){U0(a)});return}}else if(t===31){if(t=K0(a),t!==null){e.blockedOn=t,Lx(e.priority,function(){U0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ud(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hm(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);zp=o,a.target.dispatchEvent(o),zp=null}else return t=kl(a),t!==null&&kw(t),e.blockedOn=a,!1;t.shift()}return!0}function F0(e,t,a){ud(e)&&a.delete(t)}function tM(){xm=!1,yn!==null&&ud(yn)&&(yn=null),bn!==null&&ud(bn)&&(bn=null),wn!==null&&ud(wn)&&(wn=null),Ji.forEach(F0),es.forEach(F0)}function Zu(e,t){e.blockedOn===t&&(e.blockedOn=null,xm||(xm=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,tM)))}var Ku=null;function V0(e){Ku!==e&&(Ku=e,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,function(){Ku===e&&(Ku=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(fg(o||a)===null)continue;break}var r=kl(a);r!==null&&(e.splice(t,3),t-=3,Qp(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function _l(e){function t(s){return Zu(s,e)}yn!==null&&Zu(yn,e),bn!==null&&Zu(bn,e),wn!==null&&Zu(wn,e),Ji.forEach(t),es.forEach(t);for(var a=0;a<rn.length;a++){var o=rn[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rn.length&&(a=rn[0],a.blockedOn===null);)Ew(a),a.blockedOn===null&&rn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[jt]||null;if(typeof r=="function")l||V0(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[jt]||null)i=l.formAction;else if(fg(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),V0(a)}}}function Aw(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function pg(e){this._internalRoot=e}ec.prototype.render=pg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));var a=t.current,o=da();Iw(a,o,e,t,null,null)};ec.prototype.unmount=pg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Iw(e.current,2,null,e,null,null),Qd(),t[Il]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=ry();e={blockedOn:null,target:e,priority:t};for(var a=0;a<rn.length&&t!==0&&t<rn[a].priority;a++);rn.splice(a,0,e),a===0&&Ew(e)}};var G0=X0.version;if(G0!=="19.2.8")throw Error(q(527,G0,"19.2.8"));Le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=DI(t),e=e!==null?j0(e):null,e=e===null?null:e.stateNode,e};var aM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ci.isDisabled&&Ci.supportsFiber))try{as=Ci.inject(aM),sa=Ci}catch{}var Ci;tc.createRoot=function(e,t){if(!Y0(e))throw Error(q(299));var a=!1,o="",n=vb,r=Cb,l=Sb;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lw(e,1,!1,null,null,a,o,null,n,r,l,Aw),e[Il]=t.current,ig(e),new pg(t)};tc.hydrateRoot=function(e,t,a){if(!Y0(e))throw Error(q(299));var o=!1,n="",r=vb,l=Cb,i=Sb,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Lw(e,1,!0,t,a??null,o,n,s,r,l,i,Aw),t.context=_w(null),a=t.current,o=da(),o=vm(o),n=mn(o),n.callback=null,gn(a,n,o),a=o,t.current.lanes=a,ns(t,a),ro(t),e[Il]=t.current,ig(e),new ec(t)};tc.version="19.2.8"});var mg=Vt((E8,Dw)=>{"use strict";function Nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nw)}catch(e){console.error(e)}}Nw(),Dw.exports=Tw()});var zw=Vt(ac=>{"use strict";var oM=Symbol.for("react.transitional.element"),nM=Symbol.for("react.fragment");function Rw(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:oM,type:e,key:o,ref:t!==void 0?t:null,props:a}}ac.Fragment=nM;ac.jsx=Rw;ac.jsxs=Rw});var J=Vt((T8,Ow)=>{"use strict";Ow.exports=zw()});var wC=Vt(bC=>{"use strict";var Kl=ne();function $3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var J3=typeof Object.is=="function"?Object.is:$3,e4=Kl.useState,t4=Kl.useEffect,a4=Kl.useLayoutEffect,o4=Kl.useDebugValue;function n4(e,t){var a=t(),o=e4({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return a4(function(){n.value=a,n.getSnapshot=t,oh(n)&&r({inst:n})},[e,a,t]),t4(function(){return oh(n)&&r({inst:n}),e(function(){oh(n)&&r({inst:n})})},[e]),o4(a),a}function oh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!J3(e,a)}catch{return!0}}function r4(e,t){return t()}var l4=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?r4:n4;bC.useSyncExternalStore=Kl.useSyncExternalStore!==void 0?Kl.useSyncExternalStore:l4});var CC=Vt((L7,vC)=>{"use strict";vC.exports=wC()});var LC=Vt(SC=>{"use strict";var Zc=ne(),i4=CC();function s4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var u4=typeof Object.is=="function"?Object.is:s4,d4=i4.useSyncExternalStore,c4=Zc.useRef,f4=Zc.useEffect,p4=Zc.useMemo,m4=Zc.useDebugValue;SC.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=c4(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=p4(function(){function s(p){if(!u){if(u=!0,c=p,p=o(p),n!==void 0&&l.hasValue){var g=l.value;if(n(g,p))return f=g}return f=p}if(g=f,u4(c,p))return g;var b=o(p);return n!==void 0&&n(g,b)?(c=p,g):(c=p,f=b)}var u=!1,c,f,d=a===void 0?null:a;return[function(){return s(t())},d===null?void 0:function(){return s(d())}]},[t,a,o,n]);var i=d4(e,r[0],r[1]);return f4(function(){l.hasValue=!0,l.value=i},[i]),m4(i),i}});var IC=Vt((I7,_C)=>{"use strict";_C.exports=LC()});var w8={};dI(w8,{mountCanvas:()=>x8,unmountCanvas:()=>b8,updateCanvas:()=>y8});var a_=U(mg(),1);var ci=U(ne(),1);var Ze=U(ne(),1);var z=U(J()),O=U(ne());function Qe(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=Qe(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var rM={value:()=>{}};function Pw(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new oc(a)}function oc(e){this._=e}function lM(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}oc.prototype=Pw.prototype={constructor:oc,on:function(e,t){var a=this._,o=lM(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=iM(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=Bw(a[n],e.name,t);else if(t==null)for(n in a)a[n]=Bw(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new oc(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function iM(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function Bw(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=rM,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var gr=Pw;var nc="http://www.w3.org/1999/xhtml",gg={svg:"http://www.w3.org/2000/svg",xhtml:nc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function qo(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),gg.hasOwnProperty(t)?{space:gg[t],local:e}:e}function sM(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===nc&&t.documentElement.namespaceURI===nc?t.createElement(e):t.createElementNS(a,e)}}function uM(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function rc(e){var t=qo(e);return(t.local?uM:sM)(t)}function dM(){}function hr(e){return e==null?dM:function(){return this.querySelector(e)}}function Hw(e){typeof e!="function"&&(e=hr(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,u,c=0;c<l;++c)(s=r[c])&&(u=e.call(s,s.__data__,c,r))&&("__data__"in s&&(u.__data__=s.__data__),i[c]=u);return new $e(o,this._parents)}function hg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function cM(){return[]}function ps(e){return e==null?cM:function(){return this.querySelectorAll(e)}}function fM(e){return function(){return hg(e.apply(this,arguments))}}function Uw(e){typeof e=="function"?e=fM(e):e=ps(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&(o.push(e.call(s,s.__data__,u,l)),n.push(s));return new $e(o,n)}function ms(e){return function(){return this.matches(e)}}function lc(e){return function(t){return t.matches(e)}}var pM=Array.prototype.find;function mM(e){return function(){return pM.call(this.children,e)}}function gM(){return this.firstElementChild}function qw(e){return this.select(e==null?gM:mM(typeof e=="function"?e:lc(e)))}var hM=Array.prototype.filter;function xM(){return Array.from(this.children)}function yM(e){return function(){return hM.call(this.children,e)}}function Fw(e){return this.selectAll(e==null?xM:yM(typeof e=="function"?e:lc(e)))}function Vw(e){typeof e!="function"&&(e=ms(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new $e(o,this._parents)}function ic(e){return new Array(e.length)}function Gw(){return new $e(this._enter||this._groups.map(ic),this._parents)}function gs(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}gs.prototype={constructor:gs,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Xw(e){return function(){return e}}function bM(e,t,a,o,n,r){for(var l=0,i,s=t.length,u=r.length;l<u;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new gs(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function wM(e,t,a,o,n,r,l){var i,s,u=new Map,c=t.length,f=r.length,d=new Array(c),p;for(i=0;i<c;++i)(s=t[i])&&(d[i]=p=l.call(s,s.__data__,i,t)+"",u.has(p)?n[i]=s:u.set(p,s));for(i=0;i<f;++i)p=l.call(e,r[i],i,r)+"",(s=u.get(p))?(o[i]=s,s.__data__=r[i],u.delete(p)):a[i]=new gs(e,r[i]);for(i=0;i<c;++i)(s=t[i])&&u.get(d[i])===s&&(n[i]=s)}function vM(e){return e.__data__}function Yw(e,t){if(!arguments.length)return Array.from(this,vM);var a=t?wM:bM,o=this._parents,n=this._groups;typeof e!="function"&&(e=Xw(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),u=0;u<r;++u){var c=o[u],f=n[u],d=f.length,p=CM(e.call(c,c&&c.__data__,u,o)),g=p.length,b=i[u]=new Array(g),w=l[u]=new Array(g),h=s[u]=new Array(d);a(c,f,b,w,h,p,t);for(var x=0,m=0,y,S;x<g;++x)if(y=b[x]){for(x>=m&&(m=x+1);!(S=w[m])&&++m<g;);y._next=S||null}}return l=new $e(l,o),l._enter=i,l._exit=s,l}function CM(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Zw(){return new $e(this._exit||this._groups.map(ic),this._parents)}function Kw(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function jw(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var u=a[s],c=o[s],f=u.length,d=i[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||c[g])&&(d[g]=p);for(;s<n;++s)i[s]=a[s];return new $e(i,this._parents)}function Ww(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function Qw(e){e||(e=SM);function t(f,d){return f&&d?e(f.__data__,d.__data__):!f-!d}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),u,c=0;c<i;++c)(u=l[c])&&(s[c]=u);s.sort(t)}return new $e(n,this._parents).order()}function SM(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function $w(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Jw(){return Array.from(this)}function e1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function t1(){let e=0;for(let t of this)++e;return e}function a1(){return!this.node()}function o1(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function LM(e){return function(){this.removeAttribute(e)}}function _M(e){return function(){this.removeAttributeNS(e.space,e.local)}}function IM(e,t){return function(){this.setAttribute(e,t)}}function kM(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function MM(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function EM(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function n1(e,t){var a=qo(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?_M:LM:typeof t=="function"?a.local?EM:MM:a.local?kM:IM)(a,t))}function sc(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function AM(e){return function(){this.style.removeProperty(e)}}function TM(e,t,a){return function(){this.style.setProperty(e,t,a)}}function NM(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function r1(e,t,a){return arguments.length>1?this.each((t==null?AM:typeof t=="function"?NM:TM)(e,t,a??"")):kn(this.node(),e)}function kn(e,t){return e.style.getPropertyValue(t)||sc(e).getComputedStyle(e,null).getPropertyValue(t)}function DM(e){return function(){delete this[e]}}function RM(e,t){return function(){this[e]=t}}function zM(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function l1(e,t){return arguments.length>1?this.each((t==null?DM:typeof t=="function"?zM:RM)(e,t)):this.node()[e]}function i1(e){return e.trim().split(/^|\s+/)}function xg(e){return e.classList||new s1(e)}function s1(e){this._node=e,this._names=i1(e.getAttribute("class")||"")}s1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function u1(e,t){for(var a=xg(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function d1(e,t){for(var a=xg(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function OM(e){return function(){u1(this,e)}}function BM(e){return function(){d1(this,e)}}function PM(e,t){return function(){(t.apply(this,arguments)?u1:d1)(this,e)}}function c1(e,t){var a=i1(e+"");if(arguments.length<2){for(var o=xg(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?PM:t?OM:BM)(a,t))}function HM(){this.textContent=""}function UM(e){return function(){this.textContent=e}}function qM(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function f1(e){return arguments.length?this.each(e==null?HM:(typeof e=="function"?qM:UM)(e)):this.node().textContent}function FM(){this.innerHTML=""}function VM(e){return function(){this.innerHTML=e}}function GM(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function p1(e){return arguments.length?this.each(e==null?FM:(typeof e=="function"?GM:VM)(e)):this.node().innerHTML}function XM(){this.nextSibling&&this.parentNode.appendChild(this)}function m1(){return this.each(XM)}function YM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function g1(){return this.each(YM)}function h1(e){var t=typeof e=="function"?e:rc(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ZM(){return null}function x1(e,t){var a=typeof e=="function"?e:rc(e),o=t==null?ZM:typeof t=="function"?t:hr(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function KM(){var e=this.parentNode;e&&e.removeChild(this)}function y1(){return this.each(KM)}function jM(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function WM(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function b1(e){return this.select(e?WM:jM)}function w1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function QM(e){return function(t){e.call(this,t,this.__data__)}}function $M(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function JM(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function eE(e,t,a){return function(){var o=this.__on,n,r=QM(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function v1(e,t,a){var o=$M(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,u=i.length,c;s<u;++s)for(n=0,c=i[s];n<r;++n)if((l=o[n]).type===c.type&&l.name===c.name)return c.value}return}for(i=t?eE:JM,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function C1(e,t,a){var o=sc(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function tE(e,t){return function(){return C1(this,e,t)}}function aE(e,t){return function(){return C1(this,e,t.apply(this,arguments))}}function S1(e,t){return this.each((typeof t=="function"?aE:tE)(e,t))}function*L1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var yg=[null];function $e(e,t){this._groups=e,this._parents=t}function _1(){return new $e([[document.documentElement]],yg)}function oE(){return this}$e.prototype=_1.prototype={constructor:$e,select:Hw,selectAll:Uw,selectChild:qw,selectChildren:Fw,filter:Vw,data:Yw,enter:Gw,exit:Zw,join:Kw,merge:jw,selection:oE,order:Ww,sort:Qw,call:$w,nodes:Jw,node:e1,size:t1,empty:a1,each:o1,attr:n1,style:r1,property:l1,classed:c1,text:f1,html:p1,raise:m1,lower:g1,append:h1,insert:x1,remove:y1,clone:b1,datum:w1,on:v1,dispatch:S1,[Symbol.iterator]:L1};var Fo=_1;function mt(e){return typeof e=="string"?new $e([[document.querySelector(e)]],[document.documentElement]):new $e([[e]],yg)}function I1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Bt(e,t){if(e=I1(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var k1={passive:!1},xr={capture:!0,passive:!1};function uc(e){e.stopImmediatePropagation()}function Mn(e){e.preventDefault(),e.stopImmediatePropagation()}function hs(e){var t=e.document.documentElement,a=mt(e).on("dragstart.drag",Mn,xr);"onselectstart"in t?a.on("selectstart.drag",Mn,xr):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function xs(e,t){var a=e.document.documentElement,o=mt(e).on("dragstart.drag",null);t&&(o.on("click.drag",Mn,xr),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var ys=e=>()=>e;function bs(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}bs.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function nE(e){return!e.ctrlKey&&!e.button}function rE(){return this.parentNode}function lE(e,t){return t??{x:e.x,y:e.y}}function iE(){return navigator.maxTouchPoints||"ontouchstart"in this}function dc(){var e=nE,t=rE,a=lE,o=iE,n={},r=gr("start","drag","end"),l=0,i,s,u,c,f=0;function d(y){y.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",h,k1).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(y,S){if(!(c||!e.call(this,y,S))){var C=m(this,t.call(this,y,S),y,S,"mouse");C&&(mt(y.view).on("mousemove.drag",g,xr).on("mouseup.drag",b,xr),hs(y.view),uc(y),u=!1,i=y.clientX,s=y.clientY,C("start",y))}}function g(y){if(Mn(y),!u){var S=y.clientX-i,C=y.clientY-s;u=S*S+C*C>f}n.mouse("drag",y)}function b(y){mt(y.view).on("mousemove.drag mouseup.drag",null),xs(y.view,u),Mn(y),n.mouse("end",y)}function w(y,S){if(e.call(this,y,S)){var C=y.changedTouches,v=t.call(this,y,S),_=C.length,I,N;for(I=0;I<_;++I)(N=m(this,v,y,S,C[I].identifier,C[I]))&&(uc(y),N("start",y,C[I]))}}function h(y){var S=y.changedTouches,C=S.length,v,_;for(v=0;v<C;++v)(_=n[S[v].identifier])&&(Mn(y),_("drag",y,S[v]))}function x(y){var S=y.changedTouches,C=S.length,v,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),v=0;v<C;++v)(_=n[S[v].identifier])&&(uc(y),_("end",y,S[v]))}function m(y,S,C,v,_,I){var N=r.copy(),A=Bt(I||C,S),B,P,L;if((L=a.call(y,new bs("beforestart",{sourceEvent:C,target:d,identifier:_,active:l,x:A[0],y:A[1],dx:0,dy:0,dispatch:N}),v))!=null)return B=L.x-A[0]||0,P=L.y-A[1]||0,function M(E,k,D){var R=A,F;switch(E){case"start":n[_]=M,F=l++;break;case"end":delete n[_],--l;case"drag":A=Bt(D||k,S),F=l;break}N.call(E,y,new bs(E,{sourceEvent:k,subject:L,target:d,identifier:_,active:F,x:A[0]+B,y:A[1]+P,dx:A[0]-R[0],dy:A[1]-R[1],dispatch:N}),v)}}return d.filter=function(y){return arguments.length?(e=typeof y=="function"?y:ys(!!y),d):e},d.container=function(y){return arguments.length?(t=typeof y=="function"?y:ys(y),d):t},d.subject=function(y){return arguments.length?(a=typeof y=="function"?y:ys(y),d):a},d.touchable=function(y){return arguments.length?(o=typeof y=="function"?y:ys(!!y),d):o},d.on=function(){var y=r.on.apply(r,arguments);return y===r?d:y},d.clickDistance=function(y){return arguments.length?(f=(y=+y)*y,d):Math.sqrt(f)},d}function cc(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function bg(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Cs(){}var ws=.7,mc=1/ws,Dl="\\s*([+-]?\\d+)\\s*",vs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",lo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",sE=/^#([0-9a-f]{3,8})$/,uE=new RegExp(`^rgb\\(${Dl},${Dl},${Dl}\\)$`),dE=new RegExp(`^rgb\\(${lo},${lo},${lo}\\)$`),cE=new RegExp(`^rgba\\(${Dl},${Dl},${Dl},${vs}\\)$`),fE=new RegExp(`^rgba\\(${lo},${lo},${lo},${vs}\\)$`),pE=new RegExp(`^hsl\\(${vs},${lo},${lo}\\)$`),mE=new RegExp(`^hsla\\(${vs},${lo},${lo},${vs}\\)$`),M1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};cc(Cs,Fa,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:E1,formatHex:E1,formatHex8:gE,formatHsl:hE,formatRgb:A1,toString:A1});function E1(){return this.rgb().formatHex()}function gE(){return this.rgb().formatHex8()}function hE(){return O1(this).formatHsl()}function A1(){return this.rgb().formatRgb()}function Fa(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=sE.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?T1(t):a===3?new Qt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?fc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?fc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=uE.exec(e))?new Qt(t[1],t[2],t[3],1):(t=dE.exec(e))?new Qt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=cE.exec(e))?fc(t[1],t[2],t[3],t[4]):(t=fE.exec(e))?fc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=pE.exec(e))?R1(t[1],t[2]/100,t[3]/100,1):(t=mE.exec(e))?R1(t[1],t[2]/100,t[3]/100,t[4]):M1.hasOwnProperty(e)?T1(M1[e]):e==="transparent"?new Qt(NaN,NaN,NaN,0):null}function T1(e){return new Qt(e>>16&255,e>>8&255,e&255,1)}function fc(e,t,a,o){return o<=0&&(e=t=a=NaN),new Qt(e,t,a,o)}function xE(e){return e instanceof Cs||(e=Fa(e)),e?(e=e.rgb(),new Qt(e.r,e.g,e.b,e.opacity)):new Qt}function Rl(e,t,a,o){return arguments.length===1?xE(e):new Qt(e,t,a,o??1)}function Qt(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}cc(Qt,Rl,bg(Cs,{brighter(e){return e=e==null?mc:Math.pow(mc,e),new Qt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ws:Math.pow(ws,e),new Qt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Qt(br(this.r),br(this.g),br(this.b),gc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:N1,formatHex:N1,formatHex8:yE,formatRgb:D1,toString:D1}));function N1(){return`#${yr(this.r)}${yr(this.g)}${yr(this.b)}`}function yE(){return`#${yr(this.r)}${yr(this.g)}${yr(this.b)}${yr((isNaN(this.opacity)?1:this.opacity)*255)}`}function D1(){let e=gc(this.opacity);return`${e===1?"rgb(":"rgba("}${br(this.r)}, ${br(this.g)}, ${br(this.b)}${e===1?")":`, ${e})`}`}function gc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function br(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function yr(e){return e=br(e),(e<16?"0":"")+e.toString(16)}function R1(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new qa(e,t,a,o)}function O1(e){if(e instanceof qa)return new qa(e.h,e.s,e.l,e.opacity);if(e instanceof Cs||(e=Fa(e)),!e)return new qa;if(e instanceof qa)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new qa(l,i,s,e.opacity)}function B1(e,t,a,o){return arguments.length===1?O1(e):new qa(e,t,a,o??1)}function qa(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}cc(qa,B1,bg(Cs,{brighter(e){return e=e==null?mc:Math.pow(mc,e),new qa(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ws:Math.pow(ws,e),new qa(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Qt(wg(e>=240?e-240:e+120,n,o),wg(e,n,o),wg(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new qa(z1(this.h),pc(this.s),pc(this.l),gc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=gc(this.opacity);return`${e===1?"hsl(":"hsla("}${z1(this.h)}, ${pc(this.s)*100}%, ${pc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function z1(e){return e=(e||0)%360,e<0?e+360:e}function pc(e){return Math.max(0,Math.min(1,e||0))}function wg(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function vg(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function P1(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return vg((a-o/t)*t,l,n,r,i)}}function H1(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return vg((a-o/t)*t,n,r,l,i)}}var Ss=e=>()=>e;function bE(e,t){return function(a){return e+a*t}}function wE(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function U1(e){return(e=+e)==1?hc:function(t,a){return a-t?wE(t,a,e):Ss(isNaN(t)?a:t)}}function hc(e,t){var a=t-e;return a?bE(e,a):Ss(isNaN(e)?t:e)}var wr=(function e(t){var a=U1(t);function o(n,r){var l=a((n=Rl(n)).r,(r=Rl(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),u=hc(n.opacity,r.opacity);return function(c){return n.r=l(c),n.g=i(c),n.b=s(c),n.opacity=u(c),n+""}}return o.gamma=e,o})(1);function q1(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=Rl(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var vE=q1(P1),CE=q1(H1);function F1(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function V1(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function G1(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=Vo(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function X1(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Pt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function Y1(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=Vo(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Sg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cg=new RegExp(Sg.source,"g");function SE(e){return function(){return e}}function LE(e){return function(t){return e(t)+""}}function Ls(e,t){var a=Sg.lastIndex=Cg.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=Sg.exec(e))&&(n=Cg.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:Pt(o,n)})),a=Cg.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?LE(s[0].x):SE(t):(t=s.length,function(u){for(var c=0,f;c<t;++c)i[(f=s[c]).i]=f.x(u);return i.join("")})}function Vo(e,t){var a=typeof t,o;return t==null||a==="boolean"?Ss(t):(a==="number"?Pt:a==="string"?(o=Fa(t))?(t=o,wr):Ls:t instanceof Fa?wr:t instanceof Date?X1:V1(t)?F1:Array.isArray(t)?G1:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Y1:Pt)(e,t)}var Z1=180/Math.PI,xc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Lg(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*Z1,skewX:Math.atan(s)*Z1,scaleX:l,scaleY:i}}var yc;function K1(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?xc:Lg(t.a,t.b,t.c,t.d,t.e,t.f)}function j1(e){return e==null?xc:(yc||(yc=document.createElementNS("http://www.w3.org/2000/svg","g")),yc.setAttribute("transform",e),(e=yc.transform.baseVal.consolidate())?(e=e.matrix,Lg(e.a,e.b,e.c,e.d,e.e,e.f)):xc)}function W1(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,c,f,d,p,g){if(u!==f||c!==d){var b=p.push("translate(",null,t,null,a);g.push({i:b-4,x:Pt(u,f)},{i:b-2,x:Pt(c,d)})}else(f||d)&&p.push("translate("+f+t+d+a)}function l(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Pt(u,c)})):c&&f.push(n(f)+"rotate("+c+o)}function i(u,c,f,d){u!==c?d.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Pt(u,c)}):c&&f.push(n(f)+"skewX("+c+o)}function s(u,c,f,d,p,g){if(u!==f||c!==d){var b=p.push(n(p)+"scale(",null,",",null,")");g.push({i:b-4,x:Pt(u,f)},{i:b-2,x:Pt(c,d)})}else(f!==1||d!==1)&&p.push(n(p)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=e(u),c=e(c),r(u.translateX,u.translateY,c.translateX,c.translateY,f,d),l(u.rotate,c.rotate,f,d),i(u.skewX,c.skewX,f,d),s(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(p){for(var g=-1,b=d.length,w;++g<b;)f[(w=d[g]).i]=w.x(p);return f.join("")}}}var _g=W1(K1,"px, ","px)","deg)"),Ig=W1(j1,", ",")",")");var _E=1e-12;function Q1(e){return((e=Math.exp(e))+1/e)/2}function IE(e){return((e=Math.exp(e))-1/e)/2}function kE(e){return((e=Math.exp(2*e))-1)/(e+1)}var vr=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],u=r[2],c=l[0],f=l[1],d=l[2],p=c-i,g=f-s,b=p*p+g*g,w,h;if(b<_E)h=Math.log(d/u)/t,w=function(v){return[i+v*p,s+v*g,u*Math.exp(t*v*h)]};else{var x=Math.sqrt(b),m=(d*d-u*u+o*b)/(2*u*a*x),y=(d*d-u*u-o*b)/(2*d*a*x),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(y*y+1)-y);h=(C-S)/t,w=function(v){var _=v*h,I=Q1(S),N=u/(a*x)*(I*kE(t*_+S)-IE(S));return[i+N*p,s+N*g,u*I/Q1(t*_+S)]}}return w.duration=h*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var zl=0,Is=0,_s=0,J1=1e3,bc,ks,wc=0,Cr=0,vc=0,Ms=typeof performance=="object"&&performance.now?performance:Date,ev=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function As(){return Cr||(ev(ME),Cr=Ms.now()+vc)}function ME(){Cr=0}function Es(){this._call=this._time=this._next=null}Es.prototype=Cc.prototype={constructor:Es,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?As():+a)+(t==null?0:+t),!this._next&&ks!==this&&(ks?ks._next=this:bc=this,ks=this),this._call=e,this._time=a,kg()},stop:function(){this._call&&(this._call=null,this._time=1/0,kg())}};function Cc(e,t,a){var o=new Es;return o.restart(e,t,a),o}function tv(){As(),++zl;for(var e=bc,t;e;)(t=Cr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--zl}function $1(){Cr=(wc=Ms.now())+vc,zl=Is=0;try{tv()}finally{zl=0,AE(),Cr=0}}function EE(){var e=Ms.now(),t=e-wc;t>J1&&(vc-=t,wc=e)}function AE(){for(var e,t=bc,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:bc=a);ks=e,kg(o)}function kg(e){if(!zl){Is&&(Is=clearTimeout(Is));var t=e-Cr;t>24?(e<1/0&&(Is=setTimeout($1,e-Ms.now()-vc)),_s&&(_s=clearInterval(_s))):(_s||(wc=Ms.now(),_s=setInterval(EE,J1)),zl=1,ev($1))}}function Sc(e,t,a){var o=new Es;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var TE=gr("start","end","cancel","interrupt"),NE=[],nv=0,av=1,_c=2,Lc=3,ov=4,Ic=5,Ts=6;function En(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;DE(e,a,{name:t,index:o,group:n,on:TE,tween:NE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:nv})}function Ns(e,t){var a=it(e,t);if(a.state>nv)throw new Error("too late; already scheduled");return a}function _t(e,t){var a=it(e,t);if(a.state>Lc)throw new Error("too late; already running");return a}function it(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function DE(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=Cc(r,0,a.time);function r(u){a.state=av,a.timer.restart(l,a.delay,a.time),a.delay<=u&&l(u-a.delay)}function l(u){var c,f,d,p;if(a.state!==av)return s();for(c in o)if(p=o[c],p.name===a.name){if(p.state===Lc)return Sc(l);p.state===ov?(p.state=Ts,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[c]):+c<t&&(p.state=Ts,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[c])}if(Sc(function(){a.state===Lc&&(a.state=ov,a.timer.restart(i,a.delay,a.time),i(u))}),a.state=_c,a.on.call("start",e,e.__data__,a.index,a.group),a.state===_c){for(a.state=Lc,n=new Array(d=a.tween.length),c=0,f=-1;c<d;++c)(p=a.tween[c].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function i(u){for(var c=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=Ic,1),f=-1,d=n.length;++f<d;)n[f].call(e,c);a.state===Ic&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=Ts,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function Sr(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>_c&&o.state<Ic,o.state=Ts,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function rv(e){return this.each(function(){Sr(this,e)})}function RE(e,t){var a,o;return function(){var n=_t(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function zE(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=_t(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=i;break}s===u&&n.push(i)}r.tween=n}}function lv(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=it(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?RE:zE)(a,e,t))}function Ol(e,t,a){var o=e._id;return e.each(function(){var n=_t(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return it(n,o).value[t]}}function kc(e,t){var a;return(typeof t=="number"?Pt:t instanceof Fa?wr:(a=Fa(t))?(t=a,wr):Ls)(e,t)}function OE(e){return function(){this.removeAttribute(e)}}function BE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function PE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function HE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function UE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function qE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function iv(e,t){var a=qo(e),o=a==="transform"?Ig:kc;return this.attrTween(e,typeof t=="function"?(a.local?qE:UE)(a,o,Ol(this,"attr."+e,t)):t==null?(a.local?BE:OE)(a):(a.local?HE:PE)(a,o,t))}function FE(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function VE(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function GE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&VE(e,r)),a}return n._value=t,n}function XE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&FE(e,r)),a}return n._value=t,n}function sv(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=qo(e);return this.tween(a,(o.local?GE:XE)(o,t))}function YE(e,t){return function(){Ns(this,e).delay=+t.apply(this,arguments)}}function ZE(e,t){return t=+t,function(){Ns(this,e).delay=t}}function uv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?YE:ZE)(t,e)):it(this.node(),t).delay}function KE(e,t){return function(){_t(this,e).duration=+t.apply(this,arguments)}}function jE(e,t){return t=+t,function(){_t(this,e).duration=t}}function dv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?KE:jE)(t,e)):it(this.node(),t).duration}function WE(e,t){if(typeof t!="function")throw new Error;return function(){_t(this,e).ease=t}}function cv(e){var t=this._id;return arguments.length?this.each(WE(t,e)):it(this.node(),t).ease}function QE(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;_t(this,e).ease=a}}function fv(e){if(typeof e!="function")throw new Error;return this.each(QE(this._id,e))}function pv(e){typeof e!="function"&&(e=ms(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new Ht(o,this._parents,this._name,this._id)}function mv(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],u=a[i],c=s.length,f=l[i]=new Array(c),d,p=0;p<c;++p)(d=s[p]||u[p])&&(f[p]=d);for(;i<o;++i)l[i]=t[i];return new Ht(l,this._parents,this._name,this._id)}function $E(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function JE(e,t,a){var o,n,r=$E(t)?Ns:_t;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function gv(e,t){var a=this._id;return arguments.length<2?it(this.node(),a).on.on(e):this.each(JE(a,e,t))}function e3(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function hv(){return this.on("end.remove",e3(this._id))}function xv(e){var t=this._name,a=this._id;typeof e!="function"&&(e=hr(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,u=r[l]=new Array(s),c,f,d=0;d<s;++d)(c=i[d])&&(f=e.call(c,c.__data__,d,i))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,En(u[d],t,a,d,u,it(c,a)));return new Ht(r,this._parents,t,a)}function yv(e){var t=this._name,a=this._id;typeof e!="function"&&(e=ps(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],u=s.length,c,f=0;f<u;++f)if(c=s[f]){for(var d=e.call(c,c.__data__,f,s),p,g=it(c,a),b=0,w=d.length;b<w;++b)(p=d[b])&&En(p,t,a,b,d,g);r.push(d),l.push(c)}return new Ht(r,l,t,a)}var t3=Fo.prototype.constructor;function bv(){return new t3(this._groups,this._parents)}function a3(e,t){var a,o,n;return function(){var r=kn(this,e),l=(this.style.removeProperty(e),kn(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function wv(e){return function(){this.style.removeProperty(e)}}function o3(e,t,a){var o,n=a+"",r;return function(){var l=kn(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function n3(e,t,a){var o,n,r;return function(){var l=kn(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),kn(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function r3(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=_t(this,e),u=s.on,c=s.value[r]==null?i||(i=wv(t)):void 0;(u!==a||n!==c)&&(o=(a=u).copy()).on(l,n=c),s.on=o}}function vv(e,t,a){var o=(e+="")=="transform"?_g:kc;return t==null?this.styleTween(e,a3(e,o)).on("end.style."+e,wv(e)):typeof t=="function"?this.styleTween(e,n3(e,o,Ol(this,"style."+e,t))).each(r3(this._id,e)):this.styleTween(e,o3(e,o,t),a).on("end.style."+e,null)}function l3(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function i3(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&l3(e,l,a)),o}return r._value=t,r}function Cv(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,i3(e,t,a??""))}function s3(e){return function(){this.textContent=e}}function u3(e){return function(){var t=e(this);this.textContent=t??""}}function Sv(e){return this.tween("text",typeof e=="function"?u3(Ol(this,"text",e)):s3(e==null?"":e+""))}function d3(e){return function(t){this.textContent=e.call(this,t)}}function c3(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&d3(n)),t}return o._value=e,o}function Lv(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,c3(e))}function _v(){for(var e=this._name,t=this._id,a=Mc(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)if(s=l[u]){var c=it(s,t);En(s,e,a,u,l,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Ht(o,this._parents,e,a)}function Iv(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var u=_t(this,o),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),u.on=t}),n===0&&r()})}var f3=0;function Ht(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function kv(e){return Fo().transition(e)}function Mc(){return++f3}var Go=Fo.prototype;Ht.prototype=kv.prototype={constructor:Ht,select:xv,selectAll:yv,selectChild:Go.selectChild,selectChildren:Go.selectChildren,filter:pv,merge:mv,selection:bv,transition:_v,call:Go.call,nodes:Go.nodes,node:Go.node,size:Go.size,empty:Go.empty,each:Go.each,on:gv,attr:iv,attrTween:sv,style:vv,styleTween:Cv,text:Sv,textTween:Lv,remove:hv,tween:lv,delay:uv,duration:dv,ease:cv,easeVarying:fv,end:Iv,[Symbol.iterator]:Go[Symbol.iterator]};function Ec(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var p3={time:null,delay:0,duration:250,ease:Ec};function m3(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function Mv(e){var t,a;e instanceof Ht?(t=e._id,e=e._name):(t=Mc(),(a=p3).time=As(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&En(s,e,t,u,l,a||m3(s,t));return new Ht(o,this._parents,e,t)}Fo.prototype.interrupt=rv;Fo.prototype.transition=Mv;var Ds=e=>()=>e;function Mg(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function Va(e,t,a){this.k=e,this.x=t,this.y=a}Va.prototype={constructor:Va,scale:function(e){return e===1?this:new Va(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Va(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Lr=new Va(1,0,0);Rs.prototype=Va.prototype;function Rs(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Lr;return e.__zoom}function Ac(e){e.stopImmediatePropagation()}function Bl(e){e.preventDefault(),e.stopImmediatePropagation()}function g3(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function h3(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Ev(){return this.__zoom||Lr}function x3(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function y3(){return navigator.maxTouchPoints||"ontouchstart"in this}function b3(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function Tc(){var e=g3,t=h3,a=b3,o=x3,n=y3,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=vr,u=gr("start","zoom","end"),c,f,d,p=500,g=150,b=0,w=10;function h(L){L.property("__zoom",Ev).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",N).filter(n).on("touchstart.zoom",A).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",P).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,M,E,k){var D=L.selection?L.selection():L;D.property("__zoom",Ev),L!==D?S(L,M,E,k):D.interrupt().each(function(){C(this,arguments).event(k).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},h.scaleBy=function(L,M,E,k){h.scaleTo(L,function(){var D=this.__zoom.k,R=typeof M=="function"?M.apply(this,arguments):M;return D*R},E,k)},h.scaleTo=function(L,M,E,k){h.transform(L,function(){var D=t.apply(this,arguments),R=this.__zoom,F=E==null?y(D):typeof E=="function"?E.apply(this,arguments):E,V=R.invert(F),T=typeof M=="function"?M.apply(this,arguments):M;return a(m(x(R,T),F,V),D,l)},E,k)},h.translateBy=function(L,M,E,k){h.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),l)},null,k)},h.translateTo=function(L,M,E,k,D){h.transform(L,function(){var R=t.apply(this,arguments),F=this.__zoom,V=k==null?y(R):typeof k=="function"?k.apply(this,arguments):k;return a(Lr.translate(V[0],V[1]).scale(F.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof E=="function"?-E.apply(this,arguments):-E),R,l)},k,D)};function x(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new Va(M,L.x,L.y)}function m(L,M,E){var k=M[0]-E[0]*L.k,D=M[1]-E[1]*L.k;return k===L.x&&D===L.y?L:new Va(L.k,k,D)}function y(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function S(L,M,E,k){L.on("start.zoom",function(){C(this,arguments).event(k).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(k).end()}).tween("zoom",function(){var D=this,R=arguments,F=C(D,R).event(k),V=t.apply(D,R),T=E==null?y(V):typeof E=="function"?E.apply(D,R):E,Y=Math.max(V[1][0]-V[0][0],V[1][1]-V[0][1]),Z=D.__zoom,Q=typeof M=="function"?M.apply(D,R):M,ae=s(Z.invert(T).concat(Y/Z.k),Q.invert(T).concat(Y/Q.k));return function($){if($===1)$=Q;else{var H=ae($),K=Y/H[2];$=new Va(K,T[0]-H[0]*K,T[1]-H[1]*K)}F.zoom(null,$)}})}function C(L,M,E){return!E&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=mt(this.that).datum();u.call(L,this.that,new Mg(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var E=C(this,M).event(L),k=this.__zoom,D=Math.max(r[0],Math.min(r[1],k.k*Math.pow(2,o.apply(this,arguments)))),R=Bt(L);if(E.wheel)(E.mouse[0][0]!==R[0]||E.mouse[0][1]!==R[1])&&(E.mouse[1]=k.invert(E.mouse[0]=R)),clearTimeout(E.wheel);else{if(k.k===D)return;E.mouse=[R,k.invert(R)],Sr(this),E.start()}Bl(L),E.wheel=setTimeout(F,g),E.zoom("mouse",a(m(x(k,D),E.mouse[0],E.mouse[1]),E.extent,l));function F(){E.wheel=null,E.end()}}function I(L,...M){if(d||!e.apply(this,arguments))return;var E=L.currentTarget,k=C(this,M,!0).event(L),D=mt(L.view).on("mousemove.zoom",T,!0).on("mouseup.zoom",Y,!0),R=Bt(L,E),F=L.clientX,V=L.clientY;hs(L.view),Ac(L),k.mouse=[R,this.__zoom.invert(R)],Sr(this),k.start();function T(Z){if(Bl(Z),!k.moved){var Q=Z.clientX-F,ae=Z.clientY-V;k.moved=Q*Q+ae*ae>b}k.event(Z).zoom("mouse",a(m(k.that.__zoom,k.mouse[0]=Bt(Z,E),k.mouse[1]),k.extent,l))}function Y(Z){D.on("mousemove.zoom mouseup.zoom",null),xs(Z.view,k.moved),Bl(Z),k.event(Z).end()}}function N(L,...M){if(e.apply(this,arguments)){var E=this.__zoom,k=Bt(L.changedTouches?L.changedTouches[0]:L,this),D=E.invert(k),R=E.k*(L.shiftKey?.5:2),F=a(m(x(E,R),k,D),t.apply(this,M),l);Bl(L),i>0?mt(this).transition().duration(i).call(S,F,k,L):mt(this).call(h.transform,F,k,L)}}function A(L,...M){if(e.apply(this,arguments)){var E=L.touches,k=E.length,D=C(this,M,L.changedTouches.length===k).event(L),R,F,V,T;for(Ac(L),F=0;F<k;++F)V=E[F],T=Bt(V,this),T=[T,this.__zoom.invert(T),V.identifier],D.touch0?!D.touch1&&D.touch0[2]!==T[2]&&(D.touch1=T,D.taps=0):(D.touch0=T,R=!0,D.taps=1+!!c);c&&(c=clearTimeout(c)),R&&(D.taps<2&&(f=T[0],c=setTimeout(function(){c=null},p)),Sr(this),D.start())}}function B(L,...M){if(this.__zooming){var E=C(this,M).event(L),k=L.changedTouches,D=k.length,R,F,V,T;for(Bl(L),R=0;R<D;++R)F=k[R],V=Bt(F,this),E.touch0&&E.touch0[2]===F.identifier?E.touch0[0]=V:E.touch1&&E.touch1[2]===F.identifier&&(E.touch1[0]=V);if(F=E.that.__zoom,E.touch1){var Y=E.touch0[0],Z=E.touch0[1],Q=E.touch1[0],ae=E.touch1[1],$=($=Q[0]-Y[0])*$+($=Q[1]-Y[1])*$,H=(H=ae[0]-Z[0])*H+(H=ae[1]-Z[1])*H;F=x(F,Math.sqrt($/H)),V=[(Y[0]+Q[0])/2,(Y[1]+Q[1])/2],T=[(Z[0]+ae[0])/2,(Z[1]+ae[1])/2]}else if(E.touch0)V=E.touch0[0],T=E.touch0[1];else return;E.zoom("touch",a(m(F,V,T),E.extent,l))}}function P(L,...M){if(this.__zooming){var E=C(this,M).event(L),k=L.changedTouches,D=k.length,R,F;for(Ac(L),d&&clearTimeout(d),d=setTimeout(function(){d=null},p),R=0;R<D;++R)F=k[R],E.touch0&&E.touch0[2]===F.identifier?delete E.touch0:E.touch1&&E.touch1[2]===F.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(F=Bt(F,this),Math.hypot(f[0]-F[0],f[1]-F[1])<w)){var V=mt(this).on("dblclick.zoom");V&&V.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:Ds(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:Ds(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:Ds(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:Ds([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],h):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(i=+L,h):i},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(b=(L=+L)*L,h):Math.sqrt(b)},h.tapDistance=function(L){return arguments.length?(w=+L,h):w},h}var pa={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},ql=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Dg=["Enter"," ","Escape"],Rg={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Dn;(function(e){e.Strict="strict",e.Loose="loose"})(Dn||(Dn={}));var Ga;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ga||(Ga={}));var Xo;(function(e){e.Partial="partial",e.Full="full"})(Xo||(Xo={}));var zg={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},io;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(io||(io={}));var Hl;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Hl||(Hl={}));var te;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(te||(te={}));var Av={[te.Left]:te.Right,[te.Right]:te.Left,[te.Top]:te.Bottom,[te.Bottom]:te.Top};function Og(e){return e===null?null:e?"valid":"invalid"}var Bg=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Vv=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Pg=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Hg=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Os=(e,t=[0,0])=>{let{width:a,height:o}=Ta(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Ug=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):Pg(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,Bc(n,Rc(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Pc(o):{x:0,y:0,width:0,height:0}},Fl=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Bc(a,Rc(n)),o=!0)}),o?Pc(a):{x:0,y:0,width:0,height:0}},zc=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,c=t.height/n,f=[];for(let d of e.values()){let{measured:p,selectable:g=!0,hidden:b=!1}=d;if(l&&!g||b)continue;let w=p.width??d.width??d.initialWidth??0,h=p.height??d.height??d.initialHeight??0,{x,y:m}=d.internals.positionAbsolute,y=Kv(i,s,u,c,x,m,w,h),S=w*h,C=r&&y>0;(!d.internals.handleBounds||C||y>=S||d.dragging)&&f.push(d)}return f},Gv=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function w3(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=Ta(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function Xv({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=w3(e,l),s=Fl(i),u=Ps(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(u,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function qg({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:u}=i?i.internals.positionAbsolute:{x:0,y:0},c=l.origin??o,f=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",pa.error005());else{let{width:p,height:g}=Ta(i);p&&g&&(f=[[s,u],[s+p,u+g]])}else i&&kr(l.extent)&&(f=[[l.extent[0][0]+s,l.extent[0][1]+u],[l.extent[1][0]+s,l.extent[1][1]+u]]);let d=kr(f)?_r(t,f,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",pa.error015()),{position:{x:d.x-s+(l.measured.width??0)*c[0],y:d.y-u+(l.measured.height??0)*c[1]},positionAbsolute:d}}async function Yv({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(d=>d.id)),l=[];for(let d of a){if(d.deletable===!1)continue;let p=r.has(d.id),g=!p&&d.parentId&&l.find(b=>b.id===d.parentId);(p||g)&&l.push(d)}let i=new Set(t.map(d=>d.id)),s=o.filter(d=>d.deletable!==!1),c=Gv(l,s);for(let d of s)i.has(d.id)&&!c.find(g=>g.id===d.id)&&c.push(d);if(!n)return{edges:c,nodes:l};let f=await n({nodes:l,edges:c});return typeof f=="boolean"?f?{edges:c,nodes:l}:{edges:[],nodes:[]}:f}var Ul=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),_r=(e={x:0,y:0},t,a)=>({x:Ul(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Ul(e.y,t[0][1],t[1][1]-(a?.height??0))});function Zv(e,t,a){let{width:o,height:n}=Ta(a),{x:r,y:l}=a.internals.positionAbsolute;return _r(e,[[r,l],[r+o,l+n]],t)}var Tv=(e,t,a)=>e<t?Ul(Math.abs(e-t),1,t)/t:e>a?-Ul(Math.abs(e-a),1,t)/t:0,Oc=(e,t,a=15,o=40)=>{let n=Tv(e.x,o,t.width-o)*a,r=Tv(e.y,o,t.height-o)*a;return[n,r]},Bc=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ng=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Pc=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Vl=(e,t=[0,0])=>{let{x:a,y:o}=Pg(e)?e.internals.positionAbsolute:Os(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Rc=(e,t=[0,0])=>{let{x:a,y:o}=Pg(e)?e.internals.positionAbsolute:Os(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Fg=(e,t)=>Pc(Bc(Ng(e),Ng(t))),Kv=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*u)},Bs=(e,t)=>Kv(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Vg=e=>Ea(e.width)&&Ea(e.height)&&Ea(e.x)&&Ea(e.y),Ea=e=>!isNaN(e)&&isFinite(e),Gg=(e,t)=>(a,o)=>{},Gl=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Xl=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?Gl(i,l):i},Ir=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Pl(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function v3(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Pl(e,a),n=Pl(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Pl(e.top??e.y??0,a),n=Pl(e.bottom??e.y??0,a),r=Pl(e.left??e.x??0,t),l=Pl(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function C3(e,t,a,o,n,r){let{x:l,y:i}=Ir(e,[t,a,o]),{x:s,y:u}=Ir({x:e.x+e.width,y:e.y+e.height},[t,a,o]),c=n-s,f=r-u;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(c),bottom:Math.floor(f)}}var Ps=(e,t,a,o,n,r)=>{let l=v3(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,u=Math.min(i,s),c=Ul(u,o,n),f=e.x+e.width/2,d=e.y+e.height/2,p=t/2-f*c,g=a/2-d*c,b=C3(e,p,g,c,t,a),w={left:Math.min(b.left-l.left,0),top:Math.min(b.top-l.top,0),right:Math.min(b.right-l.right,0),bottom:Math.min(b.bottom-l.bottom,0)};return{x:p-w.left+w.right,y:g-w.top+w.bottom,zoom:c}},Yl=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function kr(e){return e!=null&&e!=="parent"}function Ta(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Xg(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Yg(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function Zg(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function jv(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function Wv(e){return{...Rg,...e||{}}}function zs(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=Aa(e),i=Xl({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:u}=a?Gl(i,t):i;return{xSnapped:s,ySnapped:u,...i}}var Hc=e=>({width:e.offsetWidth,height:e.offsetHeight}),Kg=e=>e?.getRootNode?.()||window?.document,S3=["INPUT","SELECT","TEXTAREA"];function jg(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:S3.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Wg=e=>"clientX"in e,Aa=(e,t)=>{let a=Wg(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},Nv=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,...Hc(l)}})};function Uc({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,u=t*.125+r*.375+i*.375+o*.125,c=Math.abs(s-e),f=Math.abs(u-t);return[s,u,c,f]}function Nc(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Dv({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case te.Left:return[t-Nc(t-o,r),a];case te.Right:return[t+Nc(o-t,r),a];case te.Top:return[t,a-Nc(a-n,r)];case te.Bottom:return[t,a+Nc(n-a,r)]}}function Zl({sourceX:e,sourceY:t,sourcePosition:a=te.Bottom,targetX:o,targetY:n,targetPosition:r=te.Top,curvature:l=.25}){let[i,s]=Dv({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[u,c]=Dv({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[f,d,p,g]=Uc({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:u,targetControlY:c});return[`M${e},${t} C${i},${s} ${u},${c} ${o},${n}`,f,d,p,g]}function Qg({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function Qv({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function $v({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Bc(Rc(e),Rc(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Bs(l,Pc(r))>0}var L3=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,_3=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),Jv=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",pa.error006()),t;let o=a.getEdgeId||L3,n;return Bg(e)?n={...e}:n={...e,id:o(e)},_3(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function qc({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=Qg({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var Rv={[te.Left]:{x:-1,y:0},[te.Right]:{x:1,y:0},[te.Top]:{x:0,y:-1},[te.Bottom]:{x:0,y:1}},I3=({source:e,sourcePosition:t=te.Bottom,target:a})=>t===te.Left||t===te.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},zv=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function k3({source:e,sourcePosition:t=te.Bottom,target:a,targetPosition:o=te.Top,center:n,offset:r,stepPosition:l}){let i=Rv[t],s=Rv[o],u={x:e.x+i.x*r,y:e.y+i.y*r},c={x:a.x+s.x*r,y:a.y+s.y*r},f=I3({source:u,sourcePosition:t,target:c}),d=f.x!==0?"x":"y",p=f[d],g=[],b,w,h={x:0,y:0},x={x:0,y:0},[,,m,y]=Qg({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[d]*s[d]===-1){d==="x"?(b=n.x??u.x+(c.x-u.x)*l,w=n.y??(u.y+c.y)/2):(b=n.x??(u.x+c.x)/2,w=n.y??u.y+(c.y-u.y)*l);let _=[{x:b,y:u.y},{x:b,y:c.y}],I=[{x:u.x,y:w},{x:c.x,y:w}];i[d]===p?g=d==="x"?_:I:g=d==="x"?I:_}else{let _=[{x:u.x,y:c.y}],I=[{x:c.x,y:u.y}];if(d==="x"?g=i.x===p?I:_:g=i.y===p?_:I,t===o){let L=Math.abs(e[d]-a[d]);if(L<=r){let M=Math.min(r-1,r-L);i[d]===p?h[d]=(u[d]>e[d]?-1:1)*M:x[d]=(c[d]>a[d]?-1:1)*M}}if(t!==o){let L=d==="x"?"y":"x",M=i[d]===s[L],E=u[L]>c[L],k=u[L]<c[L];(i[d]===1&&(!M&&E||M&&k)||i[d]!==1&&(!M&&k||M&&E))&&(g=d==="x"?_:I)}let N={x:u.x+h.x,y:u.y+h.y},A={x:c.x+x.x,y:c.y+x.y},B=Math.max(Math.abs(N.x-g[0].x),Math.abs(A.x-g[0].x)),P=Math.max(Math.abs(N.y-g[0].y),Math.abs(A.y-g[0].y));B>=P?(b=(N.x+A.x)/2,w=g[0].y):(b=g[0].x,w=(N.y+A.y)/2)}let S={x:u.x+h.x,y:u.y+h.y},C={x:c.x+x.x,y:c.y+x.y};return[[e,...S.x!==g[0].x||S.y!==g[0].y?[S]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],b,w,m,y]}function M3(e,t,a,o){let n=Math.min(zv(e,t)/2,zv(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let u=e.x<a.x?-1:1,c=e.y<a.y?1:-1;return`L ${r+n*u},${l}Q ${r},${l} ${r},${l+n*c}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function Hs({sourceX:e,sourceY:t,sourcePosition:a=te.Bottom,targetX:o,targetY:n,targetPosition:r=te.Top,borderRadius:l=5,centerX:i,centerY:s,offset:u=20,stepPosition:c=.5}){let[f,d,p,g,b]=k3({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:u,stepPosition:c}),w=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)w+=M3(f[h-1],f[h],f[h+1],l);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,d,p,g,b]}function Ov(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function eC(e){let{sourceNode:t,targetNode:a}=e;if(!Ov(t)||!Ov(a))return null;let o=t.internals.handleBounds||Bv(t.handles),n=a.internals.handleBounds||Bv(a.handles),r=Pv(o?.source??[],e.sourceHandle),l=Pv(e.connectionMode===Dn.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",pa.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||te.Bottom,s=l?.position||te.Top,u=Rn(t,r,i),c=Rn(a,l,s);return{sourceX:u.x,sourceY:u.y,targetX:c.x,targetY:c.y,sourcePosition:i,targetPosition:s}}function Bv(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function Rn(e,t,a=te.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??Ta(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case te.Top:return{x:n+l/2,y:r};case te.Right:return{x:n+l,y:r+i/2};case te.Bottom:return{x:n+l/2,y:r+i};case te.Left:return{x:n,y:r+i/2}}}function Pv(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Fc(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function tC(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Fc(s,t);r.has(u)||(l.push({id:u,color:s.color||a,...s}),r.add(u))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var aC=1e3,E3=10,$g={nodeOrigin:[0,0],nodeExtent:ql,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},A3={...$g,checkEquality:!0};function Jg(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function oC(e,t,a){let o=Jg($g,a);for(let n of e.values())if(n.parentId)th(n,e,t,o);else{let r=Os(n,o.nodeOrigin),l=kr(n.extent)?n.extent:o.nodeExtent,i=_r(r,l,Ta(n));n.internals.positionAbsolute=i}}function T3(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function eh(e){return e==="manual"}function Vc(e,t,a,o={}){let n=Jg(A3,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!eh(n.zIndexMode)?aC:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let c of e){let f=l.get(c.id);if(n.checkEquality&&c===f?.internals.userNode)t.set(c.id,f);else{let d=Os(c,n.nodeOrigin),p=kr(c.extent)?c.extent:n.nodeExtent,g=_r(d,p,Ta(c));f={...n.defaults,...c,measured:{width:c.measured?.width,height:c.measured?.height},internals:{positionAbsolute:g,handleBounds:T3(c,f),z:nC(c,i,n.zIndexMode),userNode:c}},t.set(c.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),c.parentId&&th(f,t,a,o,r),u||(u=c.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function N3(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function th(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=Jg($g,o),u=e.parentId,c=t.get(u);if(!c){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}N3(e,a),n&&!c.parentId&&c.internals.rootParentIndex===void 0&&s==="auto"&&(c.internals.rootParentIndex=++n.i,c.internals.z=c.internals.z+n.i*E3),n&&c.internals.rootParentIndex!==void 0&&(n.i=c.internals.rootParentIndex);let f=r&&!eh(s)?aC:0,{x:d,y:p,z:g}=D3(e,c,l,i,f,s),{positionAbsolute:b}=e.internals,w=d!==b.x||p!==b.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:d,y:p}:b,z:g}})}function nC(e,t,a){let o=Ea(e.zIndex)?e.zIndex:0;return eh(a)?o:o+(e.selected?t:0)}function D3(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=Ta(e),u=Os(e,a),c=kr(e.extent)?_r(u,e.extent,s):u,f=_r({x:l+c.x,y:i+c.y},o,s);e.extent==="parent"&&(f=Zv(f,s,t));let d=nC(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=d?p+1:d}}function Gc(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??Vl(i),u=Fg(s,l.rect);r.set(l.parentId,{expandedRect:u,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let u=i.internals.positionAbsolute,c=Ta(i),f=i.origin??o,d=l.x<u.x?Math.round(Math.abs(u.x-l.x)):0,p=l.y<u.y?Math.round(Math.abs(u.y-l.y)):0,g=Math.max(c.width,Math.round(l.width)),b=Math.max(c.height,Math.round(l.height)),w=(g-c.width)*f[0],h=(b-c.height)*f[1];(d>0||p>0||w||h)&&(n.push({id:s,type:"position",position:{x:i.position.x-d+w,y:i.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+d,y:x.position.y+p}})})),(c.width<l.width||c.height<l.height||d||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(d?f[0]*d-w:0),height:b+(p?f[1]*p-h:0)}})}),n}function rC(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let u=[],c=window.getComputedStyle(i),{m22:f}=new window.DOMMatrixReadOnly(c.transform),d=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let b=Hc(p.nodeElement),w=g.measured.width!==b.width||g.measured.height!==b.height;if(!!(b.width&&b.height&&(w||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=kr(g.extent)?g.extent:r,{positionAbsolute:y}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(y=Zv(y,b,C))}else m&&(y=_r(y,m,b));let S={...g,measured:b,internals:{...g.internals,positionAbsolute:y,handleBounds:{source:Nv("source",p.nodeElement,x,f,g.id),target:Nv("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,S),g.parentId&&th(S,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(u.push({id:g.id,type:"dimensions",dimensions:b}),g.expandParent&&g.parentId&&d.push({id:g.id,parentId:g.parentId,rect:Vl(S,n)}))}}if(d.length>0){let p=Gc(d,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function lC({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function Hv(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let u=o.get(l)||new Map;o.set(l,u.set(a,t))}}function ah(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},u=`${n}-${l}--${r}-${i}`,c=`${r}-${i}--${n}-${l}`;Hv("source",s,c,e,n,l),Hv("target",s,u,e,r,i),t.set(o.id,o)}}function iC(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:iC(a,t):!1}function Uv(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function R3(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!iC(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function Eg({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function z3({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=Gl(r,t);return{x:l.x-r.x,y:l.y-r.y}}function sC({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,u={x:0,y:0},c=null,f=!1,d=null,p=!1,g=!1,b=null;function w({noDragClassName:x,handleSelector:m,domNode:y,isSelectable:S,nodeId:C,nodeClickDistance:v=0}){d=mt(y);function _({x:B,y:P}){let{nodeLookup:L,nodeExtent:M,snapGrid:E,snapToGrid:k,nodeOrigin:D,onNodeDrag:R,onSelectionDrag:F,onError:V,updateNodePositions:T}=t();r={x:B,y:P};let Y=!1,Z=i.size>1,Q=Z&&M?Ng(Fl(i)):null,ae=Z&&k?z3({dragItems:i,snapGrid:E,x:B,y:P}):null;for(let[$,H]of i){if(!L.has($))continue;let K={x:B-H.distance.x,y:P-H.distance.y};k&&(K=ae?{x:Math.round(K.x+ae.x),y:Math.round(K.y+ae.y)}:Gl(K,E));let se=null;if(Z&&M&&!H.extent&&Q){let{positionAbsolute:oe}=H.internals,xe=oe.x-Q.x+M[0][0],X=oe.x+H.measured.width-Q.x2+M[1][0],re=oe.y-Q.y+M[0][1],ce=oe.y+H.measured.height-Q.y2+M[1][1];se=[[xe,re],[X,ce]]}let{position:ie,positionAbsolute:ee}=qg({nodeId:$,nextPosition:K,nodeLookup:L,nodeExtent:se||M,nodeOrigin:D,onError:V});Y=Y||H.position.x!==ie.x||H.position.y!==ie.y,H.position=ie,H.internals.positionAbsolute=ee}if(g=g||Y,!!Y&&(T(i,!0),b&&(o||R||!C&&F))){let[$,H]=Eg({nodeId:C,dragItems:i,nodeLookup:L});o?.(b,i,$,H),R?.(b,$,H),C||F?.(b,H)}}async function I(){if(!c)return;let{transform:B,panBy:P,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[E,k]=Oc(u,c,L);(E!==0||k!==0)&&(r.x=(r.x??0)-E/B[2],r.y=(r.y??0)-k/B[2],await P({x:E,y:k})&&_(r)),l=requestAnimationFrame(I)}function N(B){let{nodeLookup:P,multiSelectionActive:L,nodesDraggable:M,transform:E,snapGrid:k,snapToGrid:D,selectNodesOnDrag:R,onNodeDragStart:F,onSelectionDragStart:V,unselectNodesAndEdges:T}=t();f=!0,(!R||!S)&&!L&&C&&(P.get(C)?.selected||T()),S&&R&&C&&e?.(C);let Y=zs(B.sourceEvent,{transform:E,snapGrid:k,snapToGrid:D,containerBounds:c});if(r=Y,i=R3(P,M,Y,C),i.size>0&&(a||F||!C&&V)){let[Z,Q]=Eg({nodeId:C,dragItems:i,nodeLookup:P});a?.(B.sourceEvent,i,Z,Q),F?.(B.sourceEvent,Z,Q),C||V?.(B.sourceEvent,Q)}}let A=dc().clickDistance(v).on("start",B=>{let{domNode:P,nodeDragThreshold:L,transform:M,snapGrid:E,snapToGrid:k}=t();c=P?.getBoundingClientRect()||null,p=!1,g=!1,b=B.sourceEvent,L===0&&N(B),r=zs(B.sourceEvent,{transform:M,snapGrid:E,snapToGrid:k,containerBounds:c}),u=Aa(B.sourceEvent,c)}).on("drag",B=>{let{autoPanOnNodeDrag:P,transform:L,snapGrid:M,snapToGrid:E,nodeDragThreshold:k,nodeLookup:D}=t(),R=zs(B.sourceEvent,{transform:L,snapGrid:M,snapToGrid:E,containerBounds:c});if(b=B.sourceEvent,(B.sourceEvent.type==="touchmove"&&B.sourceEvent.touches.length>1||C&&!D.has(C))&&(p=!0),!p){if(!s&&P&&f&&(s=!0,I()),!f){let F=Aa(B.sourceEvent,c),V=F.x-u.x,T=F.y-u.y;Math.sqrt(V*V+T*T)>k&&N(B)}(r.x!==R.xSnapped||r.y!==R.ySnapped)&&i&&f&&(u=Aa(B.sourceEvent,c),_(R))}}).on("end",B=>{if(!f||p){p&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,f=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:P,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:E}=t();if(g&&(L(i,!1),g=!1),n||M||!C&&E){let[k,D]=Eg({nodeId:C,dragItems:i,nodeLookup:P,dragging:!1});n?.(B.sourceEvent,i,k,D),M?.(B.sourceEvent,k,D),C||E?.(B.sourceEvent,D)}}}).filter(B=>{let P=B.target;return!B.button&&(!x||!Uv(P,`.${x}`,y))&&(!m||Uv(P,m,y))});d.call(A)}function h(){d?.on(".drag",null)}return{update:w,destroy:h}}function O3(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Bs(n,Vl(r))>0&&o.push(r);return o}var B3=250;function P3(e,t,a,o){let n=[],r=1/0,l=O3(e,a,t+B3);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:c,y:f}=Rn(i,u,u.position,!0),d=Math.sqrt(Math.pow(c-e.x,2)+Math.pow(f-e.y,2));d>t||(d<r?(n=[{...u,x:c,y:f}],r=d):d===r&&n.push({...u,x:c,y:f}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function uC(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(u=>u.id===a):i?.[0])??null;return s&&r?{...s,...Rn(l,s,s.position,!0)}:s}function dC(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function H3(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var cC=()=>!0;function U3(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:u,autoPanOnConnect:c,flowId:f,panBy:d,cancelConnection:p,onConnectStart:g,onConnect:b,onConnectEnd:w,isValidConnection:h=cC,onReconnectEnd:x,updateConnection:m,getTransform:y,getFromHandle:S,autoPanSpeed:C,dragThreshold:v=1,handleDomNode:_}){let I=Kg(e.target),N=0,A,{x:B,y:P}=Aa(e),L=dC(r,_),M=i?.getBoundingClientRect(),E=!1;if(!M||!L)return;let k=uC(n,L,o,s,t);if(!k)return;let D=Aa(e,M),R=!1,F=null,V=!1,T=null;function Y(){if(!c||!M)return;let[ie,ee]=Oc(D,M,C);d({x:ie,y:ee}),N=requestAnimationFrame(Y)}let Z={...k,nodeId:n,type:L,position:k.position},Q=s.get(n),$={inProgress:!0,isValid:null,from:Rn(Q,Z,te.Left,!0),fromHandle:Z,fromPosition:Z.position,fromNode:Q,to:D,toHandle:null,toPosition:Av[Z.position],toNode:null,pointer:D};function H(){E=!0,m($),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&H();function K(ie){if(!E){let{x:ce,y:dt}=Aa(ie),bt=ce-B,Dt=dt-P;if(!(bt*bt+Dt*Dt>v*v))return;H()}if(!S()||!Z){se(ie);return}let ee=y();D=Aa(ie,M),A=P3(Xl(D,ee,!1,[1,1]),a,s,Z),R||(Y(),R=!0);let oe=fC(ie,{handle:A,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:h,doc:I,lib:u,flowId:f,nodeLookup:s});T=oe.handleDomNode,F=oe.connection,V=H3(!!A,oe.isValid);let xe=s.get(n),X=xe?Rn(xe,Z,te.Left,!0):$.from,re={...$,from:X,isValid:V,to:oe.toHandle&&V?Ir({x:oe.toHandle.x,y:oe.toHandle.y},ee):D,toHandle:oe.toHandle,toPosition:V&&oe.toHandle?oe.toHandle.position:Av[Z.position],toNode:oe.toHandle?s.get(oe.toHandle.nodeId):null,pointer:D};m(re),$=re}function se(ie){if(!("touches"in ie&&ie.touches.length>0)){if(E){(A||T)&&F&&V&&b?.(F);let{inProgress:ee,...oe}=$,xe={...oe,toPosition:$.toHandle?$.toPosition:null};w?.(ie,xe),r&&x?.(ie,xe)}p(),cancelAnimationFrame(N),R=!1,V=!1,F=null,T=null,I.removeEventListener("mousemove",K),I.removeEventListener("mouseup",se),I.removeEventListener("touchmove",K),I.removeEventListener("touchend",se)}}I.addEventListener("mousemove",K),I.addEventListener("mouseup",se),I.addEventListener("touchmove",K),I.addEventListener("touchend",se)}function fC(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:u=cC,nodeLookup:c}){let f=r==="target",d=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Aa(e),b=l.elementFromPoint(p,g),w=b?.classList.contains(`${i}-flow__handle`)?b:d,h={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let x=dC(void 0,w),m=w.getAttribute("data-nodeid"),y=w.getAttribute("data-handleid"),S=w.classList.contains("connectable"),C=w.classList.contains("connectableend");if(!m||!x)return h;let v={source:f?m:o,sourceHandle:f?y:n,target:f?o:m,targetHandle:f?n:y};h.connection=v;let I=S&&C&&(a===Dn.Strict?f&&x==="source"||!f&&x==="target":m!==o||y!==n);h.isValid=I&&u(v),h.toHandle=uC(m,x,y,c,a,!0)}return h}var Xc={onPointerDown:U3,isValid:fC};function pC({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=mt(e);function r({translateExtent:i,width:s,height:u,zoomStep:c=1,pannable:f=!0,zoomable:d=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let y=a(),S=m.sourceEvent.ctrlKey&&Yl()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*c,v=y[2]*Math.pow(2,C*S);t.scaleTo(v)},b=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(b=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let y=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-b[0],S[1]-b[1]];b=S;let v=o()*Math.max(y[2],Math.log(y[2]))*(p?-1:1),_={x:y[0]-C[0]*v,y:y[1]-C[1]*v},I=[[0,0],[s,u]];t.setViewportConstrained({x:_.x,y:_.y,zoom:y[2]},I,i)},x=Tc().on("start",w).on("zoom",f?h:null).on("zoom.wheel",d?g:null);n.call(x,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:Bt}}var Yc=e=>({x:e.x,y:e.y,zoom:e.k}),Ag=({x:e,y:t,zoom:a})=>Lr.translate(e,t).scale(a),Nn=(e,t)=>e.target.closest(`.${t}`),mC=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),q3=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Tg=(e,t=0,a=q3,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},gC=e=>{let t=e.ctrlKey&&Yl()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function F3({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:u}){return c=>{if(Nn(c,t))return c.ctrlKey&&c.preventDefault(),!1;c.preventDefault(),c.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(c.ctrlKey&&l){let w=Bt(c),h=gC(c),x=f*Math.pow(2,h);o.scaleTo(a,x,w,c);return}let d=c.deltaMode===1?20:1,p=n===Ga.Vertical?0:c.deltaX*d,g=n===Ga.Horizontal?0:c.deltaY*d;!Yl()&&c.shiftKey&&n!==Ga.Vertical&&(p=c.deltaY*d,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let b=Yc(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(c,b):(e.isPanScrolling=!0,i?.(c,b)),e.panScrollTimeout=setTimeout(()=>{u?.(c,b),e.isPanScrolling=!1},150)}}function V3({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=Nn(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function G3({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Yc(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function X3({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&mC(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Yc(r.transform))}}function Y3({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&mC(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=Yc(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function Z3({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:u,lib:c,connectionInProgress:f}){return d=>{let p=t||a,g=o&&d.ctrlKey,b=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Nn(d,`${c}-flow__node`)||Nn(d,`${c}-flow__edge`)||Nn(d,`${c}-flow__selection`)||Nn(d,`${c}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!l&&!o||i||f&&!b||Nn(d,s)&&b||Nn(d,u)&&(!b||r&&b&&!t)||!o&&d.ctrlKey&&b)return!1;if(!o&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!p&&!r&&!g&&b||!n&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(n)&&!n.includes(d.button)&&d.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||b||e)&&w}}function hC({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},c=e.getBoundingClientRect(),f=[[0,0],[c.width,c.height]];(typeof ResizeObserver<"u"?new ResizeObserver(P=>{let L=P[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=Tc().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=mt(e).call(p);y({x:n.x,y:n.y,zoom:Ul(n.zoom,t,a)},[[0,0],[c.width,c.height]],o);let b=g.on("wheel.zoom"),w=g.on("dblclick.zoom");p.wheelDelta(gC);async function h(P,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?Vo:vr).transform(Tg(g,L?.duration,L?.ease,()=>M(!0)),P)}):!1}function x({noWheelClassName:P,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:E,panOnScroll:k,panOnDrag:D,panOnScrollMode:R,panOnScrollSpeed:F,preventScrolling:V,zoomOnPinch:T,zoomOnScroll:Y,zoomOnDoubleClick:Z,panActivationKeyPressed:Q=!1,zoomActivationKeyPressed:ae,lib:$,onTransformChange:H,connectionInProgress:K,paneClickDistance:se,selectionOnDrag:ie}){E&&!u.isZoomingOrPanning&&m();let ee=k&&!ae&&!E;p.clickDistance(ie?1/0:!Ea(se)||se<0?0:se);let oe=ee?F3({zoomPanValues:u,noWheelClassName:P,d3Selection:g,d3Zoom:p,panOnScrollMode:R,panOnScrollSpeed:F,zoomOnPinch:T,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):V3({noWheelClassName:P,preventScrolling:V,d3ZoomHandler:b});g.on("wheel.zoom",oe,{passive:!1});let xe=G3({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:l});p.on("start",xe);let X=X3({zoomPanValues:u,panOnDrag:D,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:H});p.on("zoom",X);let re=Y3({zoomPanValues:u,panOnDrag:D,panOnScroll:k,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});p.on("end",re);let ce=Z3({panActivationKeyPressed:Q,zoomActivationKeyPressed:ae,panOnDrag:D,zoomOnScroll:Y,panOnScroll:k,zoomOnDoubleClick:Z,zoomOnPinch:T,userSelectionActive:E,noPanClassName:L,noWheelClassName:P,lib:$,connectionInProgress:K});p.filter(ce),Z?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function y(P,L,M){let E=Ag(P),k=p?.constrain()(E,L,M);return k&&await h(k),k}async function S(P,L){let M=Ag(P);return await h(M,L),M}function C(P){if(g){let L=Ag(P),M=g.property("__zoom");(M.k!==P.zoom||M.x!==P.x||M.y!==P.y)&&p?.transform(g,L,null,{sync:!0})}}function v(){let P=g?Rs(g.node()):{x:0,y:0,k:1};return{x:P.x,y:P.y,zoom:P.k}}async function _(P,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?Vo:vr).scaleTo(Tg(g,L?.duration,L?.ease,()=>M(!0)),P)}):!1}async function I(P,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?Vo:vr).scaleBy(Tg(g,L?.duration,L?.ease,()=>M(!0)),P)}):!1}function N(P){p?.scaleExtent(P)}function A(P){p?.translateExtent(P)}function B(P){let L=!Ea(P)||P<0?0:P;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:S,setViewportConstrained:y,getViewport:v,scaleTo:_,scaleBy:I,setScaleExtent:N,setTranslateExtent:A,syncViewport:C,setClickDistance:B}}var zn;(function(e){e.Line="line",e.Handle="handle"})(zn||(zn={}));function K3({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function qv(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function An(e,t){return Math.max(0,t-e)}function Tn(e,t){return Math.max(0,e-t)}function Dc(e,t,a){return Math.max(0,t-e,e-a)}function Fv(e,t){return e?!t:t}function j3(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:u}=t,{isHorizontal:c,isVertical:f}=t,d=c&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:b,maxWidth:w,minHeight:h,maxHeight:x}=o,{x:m,y,width:S,height:C,aspectRatio:v}=e,_=Math.floor(c?p-e.pointerX:0),I=Math.floor(f?g-e.pointerY:0),N=S+(s?-_:_),A=C+(u?-I:I),B=-r[0]*S,P=-r[1]*C,L=Dc(N,b,w),M=Dc(A,h,x);if(l){let D=0,R=0;s&&_<0?D=An(m+_+B,l[0][0]):!s&&_>0&&(D=Tn(m+N+B,l[1][0])),u&&I<0?R=An(y+I+P,l[0][1]):!u&&I>0&&(R=Tn(y+A+P,l[1][1])),L=Math.max(L,D),M=Math.max(M,R)}if(i){let D=0,R=0;s&&_>0?D=Tn(m+_,i[0][0]):!s&&_<0&&(D=An(m+N,i[1][0])),u&&I>0?R=Tn(y+I,i[0][1]):!u&&I<0&&(R=An(y+A,i[1][1])),L=Math.max(L,D),M=Math.max(M,R)}if(n){if(c){let D=Dc(N/v,h,x)*v;if(L=Math.max(L,D),l){let R=0;!s&&!u||s&&!u&&d?R=Tn(y+P+N/v,l[1][1])*v:R=An(y+P+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,R)}if(i){let R=0;!s&&!u||s&&!u&&d?R=An(y+N/v,i[1][1])*v:R=Tn(y+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,R)}}if(f){let D=Dc(A*v,b,w)/v;if(M=Math.max(M,D),l){let R=0;!s&&!u||u&&!s&&d?R=Tn(m+A*v+B,l[1][0])/v:R=An(m+(u?I:-I)*v+B,l[0][0])/v,M=Math.max(M,R)}if(i){let R=0;!s&&!u||u&&!s&&d?R=An(m+A*v,i[1][0])/v:R=Tn(m+(u?I:-I)*v,i[0][0])/v,M=Math.max(M,R)}}}I=I+(I<0?M:-M),_=_+(_<0?L:-L),n&&(d?N>A*v?I=(Fv(s,u)?-_:_)/v:_=(Fv(s,u)?-I:I)*v:c?(I=_/v,u=s):(_=I*v,s=u));let E=s?m+_:m,k=u?y+I:y;return{width:S+(s?-_:_),height:C+(u?-I:I),x:r[0]*_*(s?-1:1)+E,y:r[1]*I*(u?-1:1)+k}}var xC={width:0,height:0,x:0,y:0},W3={...xC,pointerX:0,pointerY:0,aspectRatio:1};function Q3(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function yC({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=mt(e),l={controlDirection:qv("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:u,boundaries:c,keepAspectRatio:f,resizeDirection:d,onResizeStart:p,onResize:g,onResizeEnd:b,shouldResize:w}){let h={...xC},x={...W3};l={boundaries:c,resizeDirection:d,keepAspectRatio:f,controlDirection:qv(u)};let m,y=null,S=[],C,v,_,I=!1,N=dc().on("start",A=>{let{nodeLookup:B,transform:P,snapGrid:L,snapToGrid:M,nodeOrigin:E,paneDomNode:k}=a();if(m=B.get(t),!m)return;y=k?.getBoundingClientRect()??null;let{xSnapped:D,ySnapped:R}=zs(A.sourceEvent,{transform:P,snapGrid:L,snapToGrid:M,containerBounds:y});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:D,pointerY:R,aspectRatio:h.width/h.height},C=void 0,v=kr(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=B.get(m.parentId)),C&&m.extent==="parent"&&(v=[[0,0],[C.measured.width,C.measured.height]]),S=[],_=void 0;for(let[F,V]of B)if(V.parentId===t&&(S.push({id:F,position:{...V.position},extent:V.extent}),V.extent==="parent"||V.expandParent)){let T=Q3(V,m,V.origin??E);_?_=[[Math.min(T[0][0],_[0][0]),Math.min(T[0][1],_[0][1])],[Math.max(T[1][0],_[1][0]),Math.max(T[1][1],_[1][1])]]:_=T}p?.(A,{...h})}).on("drag",A=>{let{transform:B,snapGrid:P,snapToGrid:L,nodeOrigin:M}=a(),E=zs(A.sourceEvent,{transform:B,snapGrid:P,snapToGrid:L,containerBounds:y}),k=[];if(!m)return;let{x:D,y:R,width:F,height:V}=h,T={},Y=m.origin??M,{width:Z,height:Q,x:ae,y:$}=j3(x,l.controlDirection,E,l.boundaries,l.keepAspectRatio,Y,v,_),H=Z!==F,K=Q!==V,se=ae!==D&&H,ie=$!==R&&K;if(!se&&!ie&&!H&&!K)return;if((se||ie||Y[0]===1||Y[1]===1)&&(T.x=se?ae:h.x,T.y=ie?$:h.y,h.x=T.x,h.y=T.y,S.length>0)){let X=ae-D,re=$-R;for(let ce of S)ce.position={x:ce.position.x-X+Y[0]*(Z-F),y:ce.position.y-re+Y[1]*(Q-V)},k.push(ce)}if((H||K)&&(T.width=H&&(!l.resizeDirection||l.resizeDirection==="horizontal")?Z:h.width,T.height=K&&(!l.resizeDirection||l.resizeDirection==="vertical")?Q:h.height,h.width=T.width,h.height=T.height),C&&m.expandParent){let X=Y[0]*(T.width??0);T.x&&T.x<X&&(h.x=X,x.x=x.x-(T.x-X));let re=Y[1]*(T.height??0);T.y&&T.y<re&&(h.y=re,x.y=x.y-(T.y-re))}let ee=K3({width:h.width,prevWidth:F,height:h.height,prevHeight:V,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),oe={...h,direction:ee};w?.(A,oe)!==!1&&(I=!0,g?.(A,oe),o(T,k))}).on("end",A=>{I&&(b?.(A,{...h}),n?.({...h}),I=!1)});r.call(N)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var TC=U(ne(),1),NC=U(IC(),1);var MC={},kC=e=>{let t,a=new Set,o=(c,f)=>{let d=typeof c=="function"?c(t):c;if(!Object.is(d,t)){let p=t;t=f??(typeof d!="object"||d===null)?d:Object.assign({},t,d),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:c=>(a.add(c),()=>a.delete(c)),destroy:()=>{(MC.env?MC.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},EC=e=>e?kC(e):kC;var{useDebugValue:g4}=TC.default,{useSyncExternalStoreWithSelector:h4}=NC.default,x4=e=>e;function nh(e,t=x4,a){let o=h4(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return g4(o),o}var AC=(e,t)=>{let a=EC(e),o=(n,r=t)=>nh(a,n,r);return Object.assign(o,a),o},DC=(e,t)=>e?AC(e,t):AC;function Ne(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var y4=U(Jo()),Qc=(0,O.createContext)(null),b4=Qc.Provider,l2=pa.error001("react");function ge(e,t){let a=(0,O.useContext)(Qc);if(a===null)throw new Error(l2);return nh(a,e,t)}function qe(){let e=(0,O.useContext)(Qc);if(e===null)throw new Error(l2);return(0,O.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var RC={display:"none"},w4={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},i2="react-flow__node-desc",s2="react-flow__edge-desc",v4="react-flow__aria-live",C4=e=>e.ariaLiveMessage,S4=e=>e.ariaLabelConfig;function L4({rfId:e}){let t=ge(C4);return(0,z.jsx)("div",{id:`${v4}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:w4,children:t})}function _4({rfId:e,disableKeyboardA11y:t}){let a=ge(S4);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{id:`${i2}-${e}`,style:RC,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,z.jsx)("div",{id:`${s2}-${e}`,style:RC,children:a["edge.a11yDescription.default"]}),!t&&(0,z.jsx)(L4,{rfId:e})]})}var $c=(0,O.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,z.jsx)("div",{className:Qe(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});$c.displayName="Panel";var zC="https://reactflow.dev?utm_source=attribution";function I4({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,z.jsx)($c,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${zC}`,children:(0,z.jsx)("a",{href:zC,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var k4=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Kc=e=>e.id;function M4(e,t){return Ne(e.selectedNodes.map(Kc),t.selectedNodes.map(Kc))&&Ne(e.selectedEdges.map(Kc),t.selectedEdges.map(Kc))}function E4({onSelectionChange:e}){let t=qe(),{selectedNodes:a,selectedEdges:o}=ge(k4,M4);return(0,O.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var A4=e=>!!e.onSelectionChangeHandlers;function T4({onSelectionChange:e}){let t=ge(A4);return e||t?(0,z.jsx)(E4,{onSelectionChange:e}):null}var u2=[0,0],N4={x:0,y:0,zoom:1},D4=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],OC=[...D4,"rfId"],R4=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),BC={translateExtent:ql,nodeOrigin:u2,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function z4(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=ge(R4,Ne),u=qe();(0,O.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{c.current=BC,i()}),[]);let c=(0,O.useRef)(BC);return(0,O.useEffect)(()=>{for(let f of OC){let d=e[f],p=c.current[f];d!==p&&(typeof e[f]>"u"||(f==="nodes"?t(d):f==="edges"?a(d):f==="minZoom"?o(d):f==="maxZoom"?n(d):f==="translateExtent"?r(d):f==="nodeExtent"?l(d):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:Wv(d)}):f==="fitView"?u.setState({fitViewQueued:d}):f==="fitViewOptions"?u.setState({fitViewOptions:d}):u.setState({[f]:d})))}c.current=e},OC.map(f=>e[f])),null}function PC(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function O4(e){let[t,a]=(0,O.useState)(e==="system"?null:e);return(0,O.useEffect)(()=>{if(e!=="system"){a(e);return}let o=PC(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:PC()?.matches?"dark":"light"}var HC=typeof document<"u"?document:null;function Us(e=null,t={target:HC,actInsideInputWithModifier:!0}){let[a,o]=(0,O.useState)(!1),n=(0,O.useRef)(!1),r=(0,O.useRef)(new Set([])),[l,i]=(0,O.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),c=u.reduce((f,d)=>f.concat(...d),[]);return[u,c]}return[[],[]]},[e]);return(0,O.useEffect)(()=>{let s=t?.target??HC,u=t?.actInsideInputWithModifier??!0;if(e!==null){let c=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&jg(p))return!1;let b=qC(p.code,i);if(r.current.add(p[b]),UC(l,r.current,!1)){let w=p.composedPath?.()?.[0]||p.target,h=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=qC(p.code,i);UC(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},d=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",c),s?.addEventListener("keyup",f),window.addEventListener("blur",d),window.addEventListener("contextmenu",d),()=>{s?.removeEventListener("keydown",c),s?.removeEventListener("keyup",f),window.removeEventListener("blur",d),window.removeEventListener("contextmenu",d)}}},[e,o]),a}function UC(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function qC(e,t){return t.includes(e)?"code":"key"}var B4=()=>{let e=qe();return(0,O.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Ps(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),u={x:t.x-i,y:t.y-s},c=a.snapGrid??n,f=a.snapToGrid??r;return Xl(u,o,f,c)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=Ir(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function d2(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)P4(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function P4(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function sh(e,t){return d2(e,t)}function uh(e,t){return d2(e,t)}function Mr(e,t){return{id:e,type:"select",selected:t}}function jl(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(Mr(r.id,l)))}return o}function FC({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function VC(e){return{id:e.id,type:"remove"}}var H4=Gg("React Flow","https://reactflow.dev/");function U4(e,t,a={}){return Jv(e,t,{...a,onError:a.onError??H4})}var GC=e=>Vv(e),q4=e=>Bg(e);function c2(e){return(0,O.forwardRef)(e)}var f2=typeof window<"u"?O.useLayoutEffect:O.useEffect;function XC(e){let[t,a]=(0,O.useState)(BigInt(0)),[o]=(0,O.useState)(()=>F4(()=>a(n=>n+BigInt(1))));return f2(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function F4(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var p2=(0,O.createContext)(null);function V4({children:e}){let t=qe(),a=(0,O.useCallback)(i=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:c,onNodesChange:f,nodeLookup:d,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),b=s;for(let h of i)b=typeof h=="function"?h(b):h;let w=FC({items:b,lookup:d});for(let h of g.values())w=h(w);c&&u(b),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=XC(a),n=(0,O.useCallback)(i=>{let{edges:s=[],setEdges:u,hasDefaultEdges:c,onEdgesChange:f,edgeLookup:d}=t.getState(),p=s;for(let g of i)p=typeof g=="function"?g(p):g;c?u(p):f&&f(FC({items:p,lookup:d}))},[]),r=XC(n),l=(0,O.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,z.jsx)(p2.Provider,{value:l,children:e})}function G4(){let e=(0,O.useContext)(p2);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var X4=e=>!!e.panZoom;function ma(){let e=B4(),t=qe(),a=G4(),o=ge(X4),n=(0,O.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),l=f=>{a.nodeQueue.push(f)},i=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState(),g=GC(f)?f:d.get(f.id),b=g.parentId?Yg(g.position,g.measured,g.parentId,d,p):g.position,w={...g,position:b,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Vl(w)},u=(f,d,p={replace:!1})=>{l(g=>g.map(b=>{if(b.id===f){let w=typeof d=="function"?d(b):d;return p.replace&&GC(w)?w:{...b,...w}}return b}))},c=(f,d,p={replace:!1})=>{i(g=>g.map(b=>{if(b.id===f){let w=typeof d=="function"?d(b):d;return p.replace&&q4(w)?w:{...b,...w}}return b}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(d=>({...d}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:l,setEdges:i,addNodes:f=>{let d=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...d])},addEdges:f=>{let d=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...d])},toObject:()=>{let{nodes:f=[],edges:d=[],transform:p}=t.getState(),[g,b,w]=p;return{nodes:f.map(h=>({...h})),edges:d.map(h=>({...h})),viewport:{x:g,y:b,zoom:w}}},deleteElements:async({nodes:f=[],edges:d=[]})=>{let{nodes:p,edges:g,onNodesDelete:b,onEdgesDelete:w,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:y}=t.getState(),{nodes:S,edges:C}=await Yv({nodesToRemove:f,edgesToRemove:d,nodes:p,edges:g,onBeforeDelete:y}),v=C.length>0,_=S.length>0;if(v){let I=C.map(VC);w?.(C),x(I)}if(_){let I=S.map(VC);b?.(S),h(I)}return(_||v)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(f,d=!0,p)=>{let g=Vg(f),b=g?f:s(f),w=p!==void 0;return b?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=Vl(w?h:x),y=Bs(m,b);return d&&y>0||y>=m.width*m.height||y>=b.width*b.height}):[]},isNodeIntersecting:(f,d,p=!0)=>{let b=Vg(f)?f:s(f);if(!b)return!1;let w=Bs(b,d);return p&&w>0||w>=d.width*d.height||w>=b.width*b.height},updateNode:u,updateNodeData:(f,d,p={replace:!1})=>{u(f,g=>{let b=typeof d=="function"?d(g):d;return p.replace?{...g,data:b}:{...g,data:{...g.data,...b}}},p)},updateEdge:c,updateEdgeData:(f,d,p={replace:!1})=>{c(f,g=>{let b=typeof d=="function"?d(g):d;return p.replace?{...g,data:b}:{...g,data:{...g.data,...b}}},p)},getNodesBounds:f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState();return Ug(f,{nodeLookup:d,nodeOrigin:p})},getHandleConnections:({type:f,id:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${d?`-${d}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?d?`-${f}-${d}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let d=t.getState().fitViewResolver??jv();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:d}),a.nodeQueue.push(p=>[...p]),d.promise}}},[]);return(0,O.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var YC=e=>e.selected,Y4=typeof window<"u"?window:void 0;function Z4({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=qe(),{deleteElements:o}=ma(),n=Us(e,{actInsideInputWithModifier:!1}),r=Us(t,{target:Y4});(0,O.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter(YC),edges:l.filter(YC)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,O.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function K4(e){let t=qe();(0,O.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Hc(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",pa.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Jc={position:"absolute",width:"100%",height:"100%",top:0,left:0},j4=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function W4({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=Ga.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:c,minZoom:f,maxZoom:d,zoomActivationKeyCode:p,preventScrolling:g=!0,children:b,noWheelClassName:w,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:y,selectionOnDrag:S}){let C=qe(),v=(0,O.useRef)(null),{userSelectionActive:_,lib:I,connectionInProgress:N}=ge(j4,Ne),A=Us(p),B=(0,O.useRef)();K4(v);let P=(0,O.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[x,m]);return(0,O.useEffect)(()=>{if(v.current){B.current=hC({domNode:v.current,minZoom:f,maxZoom:d,translateExtent:c,viewport:u,onDraggingChange:k=>C.setState(D=>D.paneDragging===k?D:{paneDragging:k}),onPanZoomStart:(k,D)=>{let{onViewportChangeStart:R,onMoveStart:F}=C.getState();F?.(k,D),R?.(D)},onPanZoom:(k,D)=>{let{onViewportChange:R,onMove:F}=C.getState();F?.(k,D),R?.(D)},onPanZoomEnd:(k,D)=>{let{onViewportChangeEnd:R,onMoveEnd:F}=C.getState();F?.(k,D),R?.(D)}});let{x:L,y:M,zoom:E}=B.current.getViewport();return C.setState({panZoom:B.current,transform:[L,M,E],domNode:v.current.closest(".react-flow")}),()=>{B.current?.destroy()}}},[]),(0,O.useEffect)(()=>{B.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:A,preventScrolling:g,noPanClassName:h,userSelectionActive:_,noWheelClassName:w,lib:I,onTransformChange:P,connectionInProgress:N,selectionOnDrag:S,paneClickDistance:y})},[e,t,a,o,n,r,l,i,s,A,g,h,_,w,I,P,N,S,y]),(0,z.jsx)("div",{className:"react-flow__renderer",ref:v,style:Jc,children:b})}var Q4=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function $4(){let{userSelectionActive:e,userSelectionRect:t}=ge(Q4,Ne);return e&&t?(0,z.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var rh=(e,t)=>a=>{a.target===t.current&&e?.(a)},J4=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function eA({isSelecting:e,selectionKeyPressed:t,selectionMode:a=Xo.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:c,onPaneScroll:f,onPaneMouseEnter:d,onPaneMouseMove:p,onPaneMouseLeave:g,children:b}){let w=(0,O.useRef)(0),h=qe(),{userSelectionActive:x,elementsSelectable:m,dragging:y,panBy:S,autoPanSpeed:C}=ge(J4,Ne),v=m&&(e||x),_=(0,O.useRef)(null),I=(0,O.useRef)(),N=(0,O.useRef)(new Set),A=(0,O.useRef)(new Set),B=(0,O.useRef)(!1),P=(0,O.useRef)(!1),L=(0,O.useRef)({x:0,y:0}),M=(0,O.useRef)(!1),E=H=>{if(P.current||B.current||h.getState().connection.inProgress){P.current=!1,B.current=!1;return}u?.(H),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},k=H=>{if(Array.isArray(o)&&o?.includes(2)){H.preventDefault();return}c?.(H)},D=f?H=>f(H):void 0,R=H=>{P.current&&(H.stopPropagation(),P.current=!1)},F=H=>{if(H.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:K,transform:se}=h.getState();if(I.current=K?.getBoundingClientRect(),!I.current)return;let ie=H.target===_.current;if(!ie&&!!H.target.closest(".nokey")||!e||!(l&&ie||t)||H.button!==0||!H.isPrimary)return;H.target?.setPointerCapture?.(H.pointerId),P.current=!1;let{x:xe,y:X}=Aa(H.nativeEvent,I.current),re=Xl({x:xe,y:X},se);h.setState({userSelectionRect:{width:0,height:0,startX:re.x,startY:re.y,x:xe,y:X}}),ie||(H.stopPropagation(),H.preventDefault())};function V(H,K){let{userSelectionRect:se}=h.getState();if(!se)return;let{transform:ie,nodeLookup:ee,edgeLookup:oe,connectionLookup:xe,triggerNodeChanges:X,triggerEdgeChanges:re,defaultEdgeOptions:ce}=h.getState(),dt={x:se.startX,y:se.startY},{x:bt,y:Dt}=Ir(dt,ie),Oa={startX:dt.x,startY:dt.y,x:H<bt?H:bt,y:K<Dt?K:Dt,width:Math.abs(H-bt),height:Math.abs(K-Dt)},Yn=N.current,bo=A.current;N.current=new Set(zc(ee,Oa,ie,a===Xo.Partial,!0).map(aa=>aa.id)),A.current=new Set;let wo=ce?.selectable??!0;for(let aa of N.current){let W=xe.get(aa);if(W)for(let{edgeId:Re}of W.values()){let Ke=oe.get(Re);Ke&&(Ke.selectable??wo)&&A.current.add(Re)}}if(!Zg(Yn,N.current)){let aa=jl(ee,N.current,!0);X(aa)}if(!Zg(bo,A.current)){let aa=jl(oe,A.current);re(aa)}h.setState({userSelectionRect:Oa,userSelectionActive:!0,nodesSelectionActive:!1})}function T(){if(!n||!I.current)return;let[H,K]=Oc(L.current,I.current,C);S({x:H,y:K}).then(se=>{if(!P.current||!se){w.current=requestAnimationFrame(T);return}let{x:ie,y:ee}=L.current;V(ie,ee),w.current=requestAnimationFrame(T)})}let Y=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,O.useEffect)(()=>()=>Y(),[]);let Z=H=>{let{userSelectionRect:K,transform:se,resetSelectedElements:ie}=h.getState();if(!I.current||!K)return;let{x:ee,y:oe}=Aa(H.nativeEvent,I.current);L.current={x:ee,y:oe};let xe=Ir({x:K.startX,y:K.startY},se);if(!P.current){let X=t?0:r;if(Math.hypot(ee-xe.x,oe-xe.y)<=X)return;ie(),i?.(H)}P.current=!0,M.current||(T(),M.current=!0),V(ee,oe)},Q=H=>{if(!v){H.target===_.current&&h.getState().connection.inProgress&&(B.current=!0);return}H.button===0&&(H.target?.releasePointerCapture?.(H.pointerId),!x&&H.target===_.current&&h.getState().userSelectionRect&&E?.(H),h.setState({userSelectionActive:!1,userSelectionRect:null}),P.current&&(s?.(H),h.setState({nodesSelectionActive:N.current.size>0})),Y())},ae=H=>{H.target?.releasePointerCapture?.(H.pointerId),Y()},$=o===!0||Array.isArray(o)&&o.includes(0);return(0,z.jsxs)("div",{className:Qe(["react-flow__pane",{draggable:$,dragging:y,selection:e}]),onClick:v?void 0:rh(E,_),onContextMenu:rh(k,_),onWheel:rh(D,_),onPointerEnter:v?void 0:d,onPointerMove:v?Z:p,onPointerUp:Q,onPointerCancel:v?ae:void 0,onPointerDownCapture:v?F:void 0,onClickCapture:v?R:void 0,onPointerLeave:g,ref:_,style:Jc,children:[b,(0,z.jsx)($4,{})]})}function ih({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),u=i.get(e);if(!u){s?.("012",pa.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&l)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function m2({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=qe(),[s,u]=(0,O.useState)(!1),c=(0,O.useRef)();return(0,O.useEffect)(()=>{if(!t)return c.current=sC({getStoreItems:()=>i.getState(),onNodeMouseDown:f=>{ih({id:f,store:i,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{c.current?.destroy(),c.current=void 0}},[t,i,e]),(0,O.useEffect)(()=>{t||!e.current||!c.current||c.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var tA=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function g2(){let e=qe();return(0,O.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:u,nodeOrigin:c}=e.getState(),f=new Map,d=tA(l),p=n?r[0]:5,g=n?r[1]:5,b=a.direction.x*p*a.factor,w=a.direction.y*g*a.factor;for(let[,h]of u){if(!d(h))continue;let x={x:h.internals.positionAbsolute.x+b,y:h.internals.positionAbsolute.y+w};n&&(x=Gl(x,r));let{position:m,positionAbsolute:y}=qg({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:c,onError:i});h.position=m,h.internals.positionAbsolute=y,f.set(h.id,h)}s(f)},[])}var dh=(0,O.createContext)(null),aA=dh.Provider;dh.Consumer;var h2=()=>(0,O.useContext)(dh),oA=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),x2=(0,O.createContext)(null);function nA({children:e}){let t=ge(oA,Ne);return(0,z.jsx)(x2.Provider,{value:t,children:e})}function rA(){let e=(0,O.useContext)(x2);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var lA={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},iA=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:u}=l;if(!i&&!n)return lA;let c=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:c,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===Dn.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:c&&u}};function sA({type:e="source",position:t=te.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:u,onMouseDown:c,onTouchStart:f,...d},p){let g=l||null,b=e==="target",w=qe(),h=h2(),{connectOnClick:x,noPanClassName:m,rfId:y}=rA(),{connectingFrom:S,connectingTo:C,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:I,clickConnectionInProcess:N,valid:A}=ge(iA(h,g,e),Ne);h||w.getState().onError?.("010",pa.error010());let B=M=>{let{defaultEdgeOptions:E,onConnect:k,hasDefaultEdges:D}=w.getState(),R={...E,...M};if(D){let{edges:F,setEdges:V,onError:T}=w.getState();V(U4(R,F,{onError:T}))}k?.(R),i?.(R)},P=M=>{if(!h)return;let E=Wg(M.nativeEvent);if(n&&(E&&M.button===0||!E)){let k=w.getState();Xc.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:k.autoPanOnConnect,connectionMode:k.connectionMode,connectionRadius:k.connectionRadius,domNode:k.domNode,nodeLookup:k.nodeLookup,lib:k.lib,isTarget:b,handleId:g,nodeId:h,flowId:k.rfId,panBy:k.panBy,cancelConnection:k.cancelConnection,onConnectStart:k.onConnectStart,onConnectEnd:(...D)=>w.getState().onConnectEnd?.(...D),updateConnection:k.updateConnection,onConnect:B,isValidConnection:a||((...D)=>w.getState().isValidConnection?.(...D)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:k.autoPanSpeed,dragThreshold:k.connectionDragThreshold})}E?c?.(M):f?.(M)},L=M=>{let{onClickConnectStart:E,onClickConnectEnd:k,connectionClickStartHandle:D,connectionMode:R,isValidConnection:F,lib:V,rfId:T,nodeLookup:Y,connection:Z}=w.getState();if(!h||!D&&!n)return;if(!D){E?.(M.nativeEvent,{nodeId:h,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let Q=Kg(M.target),ae=a||F,{connection:$,isValid:H}=Xc.isValid(M.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:R,fromNodeId:D.nodeId,fromHandleId:D.id||null,fromType:D.type,isValidConnection:ae,flowId:T,doc:Q,lib:V,nodeLookup:Y});H&&$&&B($);let K=structuredClone(Z);delete K.inProgress,K.toPosition=K.toHandle?K.toHandle.position:null,k?.(M,K),w.setState({connectionClickStartHandle:null})};return(0,z.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${y}-${h}-${g}-${e}`,className:Qe(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!b,target:b,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:S,connectingto:C,valid:A,connectionindicator:o&&(!I||_)&&(I||N?r:n)}]),onMouseDown:P,onTouchStart:P,onClick:x?L:void 0,ref:p,...d,children:s})}var Wl=(0,O.memo)(c2(sA));function uA({data:e,isConnectable:t,sourcePosition:a=te.Bottom}){return(0,z.jsxs)(z.Fragment,{children:[e?.label,(0,z.jsx)(Wl,{type:"source",position:a,isConnectable:t})]})}function dA({data:e,isConnectable:t,targetPosition:a=te.Top,sourcePosition:o=te.Bottom}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Wl,{type:"target",position:a,isConnectable:t}),e?.label,(0,z.jsx)(Wl,{type:"source",position:o,isConnectable:t})]})}function cA(){return null}function fA({data:e,isConnectable:t,targetPosition:a=te.Top}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Wl,{type:"target",position:a,isConnectable:t}),e?.label]})}var Wc={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},ZC={input:uA,default:dA,output:fA,group:cA};function pA(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var mA=e=>{let{width:t,height:a,x:o,y:n}=Fl(e.nodeLookup,{filter:r=>!!r.selected});return{width:Ea(t)?t:null,height:Ea(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function gA({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=qe(),{width:n,height:r,transformString:l,userSelectionActive:i}=ge(mA,Ne),s=g2(),u=(0,O.useRef)(null);(0,O.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let c=!i&&n!==null&&r!==null;if(m2({nodeRef:u,disabled:!c}),!c)return null;let f=e?p=>{let g=o.getState().nodes.filter(b=>b.selected);e(p,g)}:void 0,d=p=>{Object.prototype.hasOwnProperty.call(Wc,p.key)&&(p.preventDefault(),s({direction:Wc[p.key],factor:p.shiftKey?4:1}))};return(0,z.jsx)("div",{className:Qe(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,z.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:d,style:{width:n,height:r}})})}var KC=typeof window<"u"?window:void 0,hA=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function y2({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:c,selectionMode:f,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:b,zoomActivationKeyCode:w,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:y,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:I,defaultViewport:N,translateExtent:A,minZoom:B,maxZoom:P,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:E,noPanClassName:k,disableKeyboardA11y:D,onViewportChange:R,isControlledViewport:F}){let{nodesSelectionActive:V,userSelectionActive:T}=ge(hA,Ne),Y=Us(u,{target:KC}),Z=Us(b,{target:KC}),Q=Z||_,ae=Z||y,$=c&&Q!==!0,H=Y||T||$;return Z4({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,z.jsx)(W4,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:ae,panActivationKeyPressed:Z,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:!Y&&Q,defaultViewport:N,translateExtent:A,minZoom:B,maxZoom:P,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:E,noPanClassName:k,onViewportChange:R,isControlledViewport:F,paneClickDistance:i,selectionOnDrag:$,children:(0,z.jsxs)(eA,{onSelectionStart:d,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:Q,autoPanOnSelection:I,isSelecting:!!H,selectionMode:f,selectionKeyPressed:Y,paneClickDistance:i,selectionOnDrag:$,children:[e,V&&(0,z.jsx)(gA,{onSelectionContextMenu:M,noPanClassName:k,disableKeyboardA11y:D})]})})}y2.displayName="FlowRenderer";var xA=(0,O.memo)(y2),yA=e=>t=>e?zc(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function bA(e){return ge((0,O.useCallback)(yA(e),[e]),Ne)}var wA=e=>e.updateNodeInternals;function vA(){let e=ge(wA),[t]=(0,O.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,O.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function CA({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=qe(),r=(0,O.useRef)(null),l=(0,O.useRef)(null),i=(0,O.useRef)(e.sourcePosition),s=(0,O.useRef)(e.targetPosition),u=(0,O.useRef)(t),c=a&&!!e.internals.handleBounds;return(0,O.useEffect)(()=>{r.current&&!e.hidden&&(!c||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[c,e.hidden]),(0,O.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,O.useEffect)(()=>{if(r.current){let f=u.current!==t,d=i.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||d||p)&&(u.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function SA({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:u,nodesFocusable:c,resizeObserver:f,noDragClassName:d,noPanClassName:p,disableKeyboardA11y:g,rfId:b,nodeTypes:w,nodeClickDistance:h,onError:x}){let{node:m,internals:y,isParent:S}=ge(H=>{let K=H.nodeLookup.get(e),se=H.parentLookup.has(e);return{node:K,internals:K.internals,isParent:se}},Ne),C=m.type||"default",v=w?.[C]||ZC[C];v===void 0&&(x?.("003",pa.error003(C)),C="default",v=w?.default||ZC.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),I=!!(m.selectable||s&&typeof m.selectable>"u"),N=!!(m.connectable||u&&typeof m.connectable>"u"),A=!!(m.focusable||c&&typeof m.focusable>"u"),B=qe(),P=Xg(m),L=CA({node:m,nodeType:C,hasDimensions:P,resizeObserver:f}),M=m2({nodeRef:L,disabled:m.hidden||!_,noDragClassName:d,handleSelector:m.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:h}),E=g2();if(m.hidden)return null;let k=Ta(m),D=pA(m),R=I||_||t||a||o||n,F=a?H=>a(H,{...y.userNode}):void 0,V=o?H=>o(H,{...y.userNode}):void 0,T=n?H=>n(H,{...y.userNode}):void 0,Y=r?H=>r(H,{...y.userNode}):void 0,Z=l?H=>l(H,{...y.userNode}):void 0,Q=H=>{let{selectNodesOnDrag:K,nodeDragThreshold:se}=B.getState();I&&(!K||!_||se>0)&&ih({id:e,store:B,nodeRef:L}),t&&t(H,{...y.userNode})},ae=H=>{if(!(jg(H.nativeEvent)||g)){if(Dg.includes(H.key)&&I){let K=H.key==="Escape";ih({id:e,store:B,unselect:K,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(Wc,H.key)){H.preventDefault();let{ariaLabelConfig:K}=B.getState();B.setState({ariaLiveMessage:K["node.a11yDescription.ariaLiveMessage"]({direction:H.key.replace("Arrow","").toLowerCase(),x:~~y.positionAbsolute.x,y:~~y.positionAbsolute.y})}),E({direction:Wc[H.key],factor:H.shiftKey?4:1})}}},$=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:H,width:K,height:se,autoPanOnNodeFocus:ie,setCenter:ee}=B.getState();if(!ie)return;zc(new Map([[e,m]]),{x:0,y:0,width:K,height:se},H,!0).length>0||ee(m.position.x+k.width/2,m.position.y+k.height/2,{zoom:H[2]})};return(0,z.jsx)("div",{className:Qe(["react-flow__node",`react-flow__node-${C}`,{[p]:_},m.className,{selected:m.selected,selectable:I,parent:S,draggable:_,dragging:M}]),ref:L,style:{zIndex:y.z,transform:`translate(${y.positionAbsolute.x}px,${y.positionAbsolute.y}px)`,pointerEvents:R?"all":"none",visibility:P?"visible":"hidden",...m.style,...D},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:F,onMouseMove:V,onMouseLeave:T,onContextMenu:Y,onClick:Q,onDoubleClick:Z,onKeyDown:A?ae:void 0,tabIndex:A?0:void 0,onFocus:A?$:void 0,role:m.ariaRole??(A?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${i2}-${b}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,z.jsx)(aA,{value:e,children:(0,z.jsx)(v,{id:e,data:m.data,type:C,positionAbsoluteX:y.positionAbsolute.x,positionAbsoluteY:y.positionAbsolute.y,selected:m.selected??!1,selectable:I,draggable:_,deletable:m.deletable??!0,isConnectable:N,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:y.z,parentId:m.parentId,...k})})})}var LA=(0,O.memo)(SA),_A=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function b2(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=ge(_A,Ne),r=bA(e.onlyRenderVisibleElements),l=vA();return(0,z.jsx)("div",{className:"react-flow__nodes",style:Jc,children:r.map(i=>(0,z.jsx)(LA,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}b2.displayName="NodeRenderer";var IA=(0,O.memo)(b2);function kA(e){return ge((0,O.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&$v({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ne)}var MA=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,z.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},EA=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,z.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},jC={[Hl.Arrow]:MA,[Hl.ArrowClosed]:EA};function AA(e){let t=qe();return(0,O.useMemo)(()=>Object.prototype.hasOwnProperty.call(jC,e)?jC[e]:(t.getState().onError?.("009",pa.error009(e)),null),[e])}var TA=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=AA(t);return s?(0,z.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,z.jsx)(s,{color:a,strokeWidth:l})}):null},w2=({defaultColor:e,rfId:t})=>{let a=ge(r=>r.edges),o=ge(r=>r.defaultEdgeOptions),n=(0,O.useMemo)(()=>tC(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,z.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,z.jsx)("defs",{children:n.map(r=>(0,z.jsx)(TA,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};w2.displayName="MarkerDefinitions";var NA=(0,O.memo)(w2);function v2({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:u,...c}){let[f,d]=(0,O.useState)({x:1,y:0,width:0,height:0}),p=Qe(["react-flow__edge-textwrapper",u]),g=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(g.current){let b=g.current.getBBox();d({x:b.x,y:b.y,width:b.width,height:b.height})}},[a]),a?(0,z.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...c,children:[n&&(0,z.jsx)("rect",{width:f.width+2*l[0],x:-l[0],y:-l[1],height:f.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,z.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}v2.displayName="EdgeText";var DA=(0,O.memo)(v2);function On({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:u=20,...c}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("path",{...c,d:e,fill:"none",className:Qe(["react-flow__edge-path",c.className])}),u?(0,z.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Ea(t)&&Ea(a)?(0,z.jsx)(DA,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function WC({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===te.Left||e===te.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function C2({sourceX:e,sourceY:t,sourcePosition:a=te.Bottom,targetX:o,targetY:n,targetPosition:r=te.Top}){let[l,i]=WC({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=WC({pos:r,x1:o,y1:n,x2:e,y2:t}),[c,f,d,p]=Uc({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:u});return[`M${e},${t} C${l},${i} ${s},${u} ${o},${n}`,c,f,d,p]}function S2(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,interactionWidth:h})=>{let[x,m,y]=C2({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),S=e.isInternal?void 0:t;return(0,z.jsx)(On,{id:S,path:x,labelX:m,labelY:y,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,interactionWidth:h})})}var RA=S2({isInternal:!1}),L2=S2({isInternal:!0});RA.displayName="SimpleBezierEdge";L2.displayName="SimpleBezierEdgeInternal";function _2(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,sourcePosition:p=te.Bottom,targetPosition:g=te.Top,markerEnd:b,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,y,S]=Hs({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,z.jsx)(On,{id:C,path:m,labelX:y,labelY:S,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:b,markerStart:w,interactionWidth:x})})}var I2=_2({isInternal:!1}),k2=_2({isInternal:!0});I2.displayName="SmoothStepEdge";k2.displayName="SmoothStepEdgeInternal";function M2(e){return(0,O.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,z.jsx)(I2,{...a,id:o,pathOptions:(0,O.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var zA=M2({isInternal:!1}),E2=M2({isInternal:!0});zA.displayName="StepEdge";E2.displayName="StepEdgeInternal";function A2(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:g,interactionWidth:b})=>{let[w,h,x]=qc({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,z.jsx)(On,{id:m,path:w,labelX:h,labelY:x,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:g,interactionWidth:b})})}var OA=A2({isInternal:!1}),T2=A2({isInternal:!0});OA.displayName="StraightEdge";T2.displayName="StraightEdgeInternal";function N2(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=te.Bottom,targetPosition:i=te.Top,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,y,S]=Zl({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,z.jsx)(On,{id:C,path:m,labelX:y,labelY:S,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,interactionWidth:x})})}var BA=N2({isInternal:!1}),D2=N2({isInternal:!0});BA.displayName="BezierEdge";D2.displayName="BezierEdgeInternal";var QC={default:D2,straight:T2,step:E2,smoothstep:k2,simplebezier:L2},$C={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},PA=(e,t,a)=>a===te.Left?e-t:a===te.Right?e+t:e,HA=(e,t,a)=>a===te.Top?e-t:a===te.Bottom?e+t:e,JC="react-flow__edgeupdater";function e2({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,z.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:Qe([JC,`${JC}-${i}`]),cx:PA(t,o,e),cy:HA(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function UA({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:u,onReconnectStart:c,onReconnectEnd:f,setReconnecting:d,setUpdateHover:p}){let g=qe(),b=(y,S)=>{if(y.button!==0)return;let{autoPanOnConnect:C,domNode:v,connectionMode:_,connectionRadius:I,lib:N,onConnectStart:A,cancelConnection:B,nodeLookup:P,rfId:L,panBy:M,updateConnection:E}=g.getState(),k=S.type==="target",D=(V,T)=>{d(!1),f?.(V,a,S.type,T)},R=V=>u?.(a,V),F=(V,T)=>{d(!0),c?.(y,a,S.type),A?.(V,T)};Xc.onPointerDown(y.nativeEvent,{autoPanOnConnect:C,connectionMode:_,connectionRadius:I,domNode:v,handleId:S.id,nodeId:S.nodeId,nodeLookup:P,isTarget:k,edgeUpdaterType:S.type,lib:N,flowId:L,cancelConnection:B,panBy:M,isValidConnection:(...V)=>g.getState().isValidConnection?.(...V)??!0,onConnect:R,onConnectStart:F,onConnectEnd:(...V)=>g.getState().onConnectEnd?.(...V),onReconnectEnd:D,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:y.currentTarget})},w=y=>b(y,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=y=>b(y,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,z.jsxs)(z.Fragment,{children:[(e===!0||e==="source")&&(0,z.jsx)(e2,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,z.jsx)(e2,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function qA({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,reconnectRadius:c,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,rfId:g,edgeTypes:b,noPanClassName:w,onError:h,disableKeyboardA11y:x}){let m=ge(ee=>ee.edgeLookup.get(e)),y=ge(ee=>ee.defaultEdgeOptions);m=y?{...y,...m}:m;let S=m.type||"default",C=b?.[S]||QC[S];C===void 0&&(h?.("011",pa.error011(S)),S="default",C=b?.default||QC.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),I=!!(m.selectable||o&&typeof m.selectable>"u"),N=(0,O.useRef)(null),[A,B]=(0,O.useState)(!1),[P,L]=(0,O.useState)(!1),M=qe(),{zIndex:E=m.zIndex,sourceX:k,sourceY:D,targetX:R,targetY:F,sourcePosition:V,targetPosition:T}=ge((0,O.useCallback)(ee=>{let oe=ee.nodeLookup.get(m.source),xe=ee.nodeLookup.get(m.target);if(!oe||!xe)return $C;let X=eC({id:e,sourceNode:oe,targetNode:xe,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:ee.connectionMode,onError:h}),re=Qv({selected:m.selected,zIndex:m.zIndex,sourceNode:oe,targetNode:xe,elevateOnSelect:ee.elevateEdgesOnSelect,zIndexMode:ee.zIndexMode});return{...X||$C,zIndex:re}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Ne),Y=(0,O.useMemo)(()=>m.markerStart?`url('#${Fc(m.markerStart,g)}')`:void 0,[m.markerStart,g]),Z=(0,O.useMemo)(()=>m.markerEnd?`url('#${Fc(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||k===null||D===null||R===null||F===null)return null;let Q=ee=>{let{addSelectedEdges:oe,unselectNodesAndEdges:xe,multiSelectionActive:X}=M.getState();I&&(M.setState({nodesSelectionActive:!1}),m.selected&&X?(xe({nodes:[],edges:[m]}),N.current?.blur()):oe([e])),n&&n(ee,m)},ae=r?ee=>{r(ee,{...m})}:void 0,$=l?ee=>{l(ee,{...m})}:void 0,H=i?ee=>{i(ee,{...m})}:void 0,K=s?ee=>{s(ee,{...m})}:void 0,se=u?ee=>{u(ee,{...m})}:void 0,ie=ee=>{if(!x&&Dg.includes(ee.key)&&I){let{unselectNodesAndEdges:oe,addSelectedEdges:xe}=M.getState();ee.key==="Escape"?(N.current?.blur(),oe({edges:[m]})):xe([e])}};return(0,z.jsx)("svg",{style:{zIndex:E},children:(0,z.jsxs)("g",{className:Qe(["react-flow__edge",`react-flow__edge-${S}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!I&&!n,updating:A,selectable:I}]),onClick:Q,onDoubleClick:ae,onContextMenu:$,onMouseEnter:H,onMouseMove:K,onMouseLeave:se,onKeyDown:v?ie:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${s2}-${g}`:void 0,ref:N,...m.domAttributes,children:[!P&&(0,z.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:I,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:k,sourceY:D,targetX:R,targetY:F,sourcePosition:V,targetPosition:T,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Y,markerEnd:Z,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,z.jsx)(UA,{edge:m,isReconnectable:_,reconnectRadius:c,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,sourceX:k,sourceY:D,targetX:R,targetY:F,sourcePosition:V,targetPosition:T,setUpdateHover:B,setReconnecting:L})]})})}var FA=(0,O.memo)(qA),VA=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function R2({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:c,reconnectRadius:f,onEdgeDoubleClick:d,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:b}){let{edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,onError:m}=ge(VA,Ne),y=kA(t);return(0,z.jsxs)("div",{className:"react-flow__edges",children:[(0,z.jsx)(NA,{defaultColor:e,rfId:a}),y.map(S=>(0,z.jsx)(FA,{id:S,edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,onClick:c,reconnectRadius:f,onDoubleClick:d,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:b},S))]})}R2.displayName="EdgeRenderer";var GA=(0,O.memo)(R2),t2=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function XA({children:e}){let t=qe(),a=(0,O.useRef)(null),[o]=(0,O.useState)(()=>t.getState().transform);return f2(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=t2(l)))};return r(),t.subscribe(r)},[t]),(0,z.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:t2(o)},children:e})}function YA(e){let t=ma(),a=(0,O.useRef)(!1);(0,O.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var ZA=e=>e.panZoom?.syncViewport;function KA(e){let t=ge(ZA),a=qe();return(0,O.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function a2(e){return e.connection.inProgress?{...e.connection,to:Xl(e.connection.to,e.transform)}:{...e.connection}}function jA(e){return e?a=>{let o=a2(a);return e(o)}:a2}function ch(e){let t=jA(e);return ge(t,Ne)}var WA=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function QA({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=ge(WA,Ne);return!(r&&n&&s)?null:(0,z.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,z.jsx)("g",{className:Qe(["react-flow__connection",Og(i)]),children:(0,z.jsx)(z2,{style:t,type:a,CustomComponent:o,isValid:i})})})}var z2=({style:e,type:t=io.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:u,toNode:c,toHandle:f,toPosition:d,pointer:p}=ch();if(!n)return;if(a)return(0,z.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:d,connectionStatus:Og(o),toNode:c,toHandle:f,pointer:p});let g="",b={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:d};switch(t){case io.Bezier:[g]=Zl(b);break;case io.SimpleBezier:[g]=C2(b);break;case io.Step:[g]=Hs({...b,borderRadius:0});break;case io.SmoothStep:[g]=Hs(b);break;default:[g]=qc(b)}return(0,z.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};z2.displayName="ConnectionLine";var $A={};function o2(e=$A){let t=(0,O.useRef)(e),a=qe();(0,O.useEffect)(()=>{},[e])}function JA(){let e=qe(),t=(0,O.useRef)(!1);(0,O.useEffect)(()=>{},[])}function O2({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:c,onSelectionContextMenu:f,onSelectionStart:d,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:b,connectionLineComponent:w,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:y,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:I,elementsSelectable:N,defaultViewport:A,translateExtent:B,minZoom:P,maxZoom:L,preventScrolling:M,defaultMarkerColor:E,zoomOnScroll:k,zoomOnPinch:D,panOnScroll:R,panOnScrollSpeed:F,panOnScrollMode:V,zoomOnDoubleClick:T,panOnDrag:Y,autoPanOnSelection:Z,onPaneClick:Q,onPaneMouseEnter:ae,onPaneMouseMove:$,onPaneMouseLeave:H,onPaneScroll:K,onPaneContextMenu:se,paneClickDistance:ie,nodeClickDistance:ee,onEdgeContextMenu:oe,onEdgeMouseEnter:xe,onEdgeMouseMove:X,onEdgeMouseLeave:re,reconnectRadius:ce,onReconnect:dt,onReconnectStart:bt,onReconnectEnd:Dt,noDragClassName:Oa,noWheelClassName:Yn,noPanClassName:bo,disableKeyboardA11y:wo,nodeExtent:aa,rfId:W,viewport:Re,onViewportChange:Ke,nodesDraggable:Ba}){return o2(e),o2(t),JA(),YA(a),KA(Re),(0,z.jsx)(xA,{onPaneClick:Q,onPaneMouseEnter:ae,onPaneMouseMove:$,onPaneMouseLeave:H,onPaneContextMenu:se,onPaneScroll:K,paneClickDistance:ie,deleteKeyCode:_,selectionKeyCode:x,selectionOnDrag:m,selectionMode:y,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,elementsSelectable:N,zoomOnScroll:k,zoomOnPinch:D,zoomOnDoubleClick:T,panOnScroll:R,panOnScrollSpeed:F,panOnScrollMode:V,panOnDrag:Y,autoPanOnSelection:Z,defaultViewport:A,translateExtent:B,minZoom:P,maxZoom:L,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:Oa,noWheelClassName:Yn,noPanClassName:bo,disableKeyboardA11y:wo,onViewportChange:Ke,isControlledViewport:!!Re,children:(0,z.jsxs)(XA,{children:[(0,z.jsx)(GA,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:dt,onReconnectStart:bt,onReconnectEnd:Dt,onlyRenderVisibleElements:I,onEdgeContextMenu:oe,onEdgeMouseEnter:xe,onEdgeMouseMove:X,onEdgeMouseLeave:re,reconnectRadius:ce,defaultMarkerColor:E,noPanClassName:bo,disableKeyboardA11y:wo,rfId:W}),(0,z.jsx)(QA,{style:b,type:g,component:w,containerStyle:h}),(0,z.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,z.jsx)(IA,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:c,nodeClickDistance:ee,onlyRenderVisibleElements:I,noPanClassName:bo,noDragClassName:Oa,disableKeyboardA11y:wo,nodeExtent:aa,rfId:W,nodesDraggable:Ba}),(0,z.jsx)("div",{className:"react-flow__viewport-portal"})]})})}O2.displayName="GraphView";var e6=(0,O.memo)(O2),t6=Gg("React Flow","https://reactflow.dev/"),n2=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:u=2,nodeOrigin:c,nodeExtent:f,zIndexMode:d="basic"}={})=>{let p=new Map,g=new Map,b=new Map,w=new Map,h=o??t??[],x=a??e??[],m=c??[0,0],y=f??ql;ah(b,w,h);let{nodesInitialized:S}=Vc(x,p,g,{nodeOrigin:m,nodeExtent:y,zIndexMode:d}),C=[0,0,1];if(l&&n&&r){let v=Fl(p,{filter:A=>!!((A.width||A.initialWidth)&&(A.height||A.initialHeight))}),{x:_,y:I,zoom:N}=Ps(v,n,r,s,u,i?.padding??.1);C=[_,I,N]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:x,nodesInitialized:S,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:w,connectionLookup:b,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:ql,nodeExtent:y,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Dn.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...zg},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:t6,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Rg,zIndexMode:d,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},a6=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:c,nodeExtent:f,zIndexMode:d})=>DC((p,g)=>{async function b(){let{nodeLookup:w,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:y,height:S,minZoom:C,maxZoom:v}=g();h&&(await Xv({nodes:w,width:y,height:S,panZoom:h,minZoom:C,maxZoom:v},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...n2({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:c,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:d}),setNodes:w=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:y,elevateNodesOnSelect:S,fitViewQueued:C,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:I,hasSelectedNodes:N}=Vc(w,h,x,{nodeOrigin:m,nodeExtent:y,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:v}),A=_&&N;C&&I?(b(),p({nodes:w,nodesInitialized:I,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:A})):p({nodes:w,nodesInitialized:I,nodesSelectionActive:A})},setEdges:w=>{let{connectionLookup:h,edgeLookup:x}=g();ah(h,x,w),p({edges:w})},setDefaultNodesAndEdges:(w,h)=>{if(w){let{setNodes:x}=g();x(w),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:y,nodeOrigin:S,nodeExtent:C,debug:v,fitViewQueued:_,zIndexMode:I}=g(),{changes:N,updatedInternals:A}=rC(w,x,m,y,S,C,I);A&&(oC(x,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:I}),_?(b(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),N?.length>0&&(v&&console.log("React Flow: trigger node changes",N),h?.(N)))},updateNodePositions:(w,h=!1)=>{let x=[],m=[],{nodeLookup:y,triggerNodeChanges:S,connection:C,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[I,N]of w){let A=y.get(I),B=!!(A?.expandParent&&A?.parentId&&N?.position),P={id:I,type:"position",position:B?{x:Math.max(0,N.position.x),y:Math.max(0,N.position.y)}:N.position,dragging:h};if(A&&C.inProgress&&C.fromNode.id===A.id){let L=Rn(A,C.fromHandle,te.Left,!0);v({...C,from:L})}B&&A.parentId&&x.push({id:I,parentId:A.parentId,rect:{...N.internals.positionAbsolute,width:N.measured.width??0,height:N.measured.height??0}}),m.push(P)}if(x.length>0){let{parentLookup:I,nodeOrigin:N}=g(),A=Gc(x,y,I,N);m.push(...A)}for(let I of _.values())m=I(m);S(m)},triggerNodeChanges:w=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:y,debug:S}=g();if(w?.length){if(y){let C=sh(w,m);x(C)}S&&console.log("React Flow: trigger node changes",w),h?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:y,debug:S}=g();if(w?.length){if(y){let C=uh(w,m);x(C)}S&&console.log("React Flow: trigger edge changes",w),h?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:y,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>Mr(v,!0));y(C);return}y(jl(m,new Set([...w]),!0)),S(jl(x))},addSelectedEdges:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:y,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>Mr(v,!0));S(C);return}S(jl(x,new Set([...w]))),y(jl(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:y,triggerNodeChanges:S,triggerEdgeChanges:C}=g(),v=w||m,_=h||x,I=[];for(let A of v){if(!A.selected)continue;let B=y.get(A.id);B&&(B.selected=!1),I.push(Mr(A.id,!1))}let N=[];for(let A of _)A.selected&&N.push(Mr(A.id,!1));S(I),C(N)},setMinZoom:w=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([w,x]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,w]),p({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:y}=g();if(!y)return;let S=h.reduce((v,_)=>_.selected?[...v,Mr(_.id,!1)]:v,[]),C=w.reduce((v,_)=>_.selected?[...v,Mr(_.id,!1)]:v,[]);x(S),m(C)},setNodeExtent:w=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:y,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:v}=g();w[0][0]===C[0][0]&&w[0][1]===C[0][1]&&w[1][0]===C[1][0]&&w[1][1]===C[1][1]||(Vc(h,x,m,{nodeOrigin:y,nodeExtent:w,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:v}),p({nodeExtent:w}))},panBy:w=>{let{transform:h,width:x,height:m,panZoom:y,translateExtent:S}=g();return lC({delta:w,panZoom:y,transform:h,translateExtent:S,width:x,height:m})},setCenter:async(w,h,x)=>{let{width:m,height:y,maxZoom:S,panZoom:C}=g();if(!C)return!1;let v=typeof x?.zoom<"u"?x.zoom:S;return await C.setViewport({x:m/2-w*v,y:y/2-h*v,zoom:v},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...zg}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...n2()})}},Object.is);function fh({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:u,nodeOrigin:c,nodeExtent:f,zIndexMode:d,children:p}){let[g]=(0,O.useState)(()=>a6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:c,nodeExtent:f,zIndexMode:d}));return(0,z.jsx)(b4,{value:g,children:(0,z.jsx)(V4,{children:(0,z.jsx)(nA,{children:p})})})}function o6({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:u,maxZoom:c,nodeOrigin:f,nodeExtent:d,zIndexMode:p}){return(0,O.useContext)(Qc)?(0,z.jsx)(z.Fragment,{children:e}):(0,z.jsx)(fh,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:c,nodeOrigin:f,nodeExtent:d,zIndexMode:p,children:e})}var n6={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function r6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:u,onMove:c,onMoveStart:f,onMoveEnd:d,onConnect:p,onConnectStart:g,onConnectEnd:b,onClickConnectStart:w,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:y,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:I,onNodesDelete:N,onEdgesDelete:A,onDelete:B,onSelectionChange:P,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:E,onSelectionContextMenu:k,onSelectionStart:D,onSelectionEnd:R,onBeforeDelete:F,connectionMode:V,connectionLineType:T=io.Bezier,connectionLineStyle:Y,connectionLineComponent:Z,connectionLineContainerStyle:Q,deleteKeyCode:ae="Backspace",selectionKeyCode:$="Shift",selectionOnDrag:H=!1,selectionMode:K=Xo.Full,panActivationKeyCode:se="Space",multiSelectionKeyCode:ie=Yl()?"Meta":"Control",zoomActivationKeyCode:ee=Yl()?"Meta":"Control",snapToGrid:oe,snapGrid:xe,onlyRenderVisibleElements:X=!1,selectNodesOnDrag:re,nodesDraggable:ce,autoPanOnNodeFocus:dt,nodesConnectable:bt,nodesFocusable:Dt,nodeOrigin:Oa=u2,edgesFocusable:Yn,edgesReconnectable:bo,elementsSelectable:wo=!0,defaultViewport:aa=N4,minZoom:W=.5,maxZoom:Re=2,translateExtent:Ke=ql,preventScrolling:Ba=!0,nodeExtent:Zn,defaultMarkerColor:Kn="#b1b1b7",zoomOnScroll:o_=!0,zoomOnPinch:n_=!0,panOnScroll:r_=!1,panOnScrollSpeed:l_=.5,panOnScrollMode:i_=Ga.Free,zoomOnDoubleClick:s_=!0,panOnDrag:u_=!0,onPaneClick:d_,onPaneMouseEnter:c_,onPaneMouseMove:f_,onPaneMouseLeave:p_,onPaneScroll:m_,onPaneContextMenu:g_,paneClickDistance:h_=1,nodeClickDistance:x_=0,children:y_,onReconnect:b_,onReconnectStart:w_,onReconnectEnd:v_,onEdgeContextMenu:C_,onEdgeDoubleClick:S_,onEdgeMouseEnter:L_,onEdgeMouseMove:__,onEdgeMouseLeave:I_,reconnectRadius:k_=10,onNodesChange:M_,onEdgesChange:E_,noDragClassName:A_="nodrag",noWheelClassName:T_="nowheel",noPanClassName:Bh="nopan",fitView:Ph,fitViewOptions:Hh,connectOnClick:N_,attributionPosition:D_,proOptions:R_,defaultEdgeOptions:z_,elevateNodesOnSelect:O_=!0,elevateEdgesOnSelect:B_=!1,disableKeyboardA11y:Uh=!1,autoPanOnConnect:P_,autoPanOnNodeDrag:H_,autoPanOnSelection:U_=!0,autoPanSpeed:q_,connectionRadius:F_,isValidConnection:V_,onError:G_,style:X_,id:qh,nodeDragThreshold:Y_,connectionDragThreshold:Z_,viewport:K_,onViewportChange:j_,width:W_,height:Q_,colorMode:$_="light",debug:J_,onScroll:Fh,ariaLabelConfig:eI,zIndexMode:Vh="basic",...tI},aI){let Mf=qh||"1",oI=O4($_),nI=(0,O.useCallback)(Gh=>{Gh.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Fh?.(Gh)},[Fh]);return(0,z.jsx)("div",{"data-testid":"rf__wrapper",...tI,onScroll:nI,style:{...X_,...n6},ref:aI,className:Qe(["react-flow",n,oI]),id:qh,role:"application",children:(0,z.jsxs)(o6,{nodes:e,edges:t,width:W_,height:Q_,fitView:Ph,fitViewOptions:Hh,minZoom:W,maxZoom:Re,nodeOrigin:Oa,nodeExtent:Zn,zIndexMode:Vh,children:[(0,z.jsx)(z4,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:b,onClickConnectStart:w,onClickConnectEnd:h,nodesDraggable:ce,autoPanOnNodeFocus:dt,nodesConnectable:bt,nodesFocusable:Dt,edgesFocusable:Yn,edgesReconnectable:bo,elementsSelectable:wo,elevateNodesOnSelect:O_,elevateEdgesOnSelect:B_,minZoom:W,maxZoom:Re,nodeExtent:Zn,onNodesChange:M_,onEdgesChange:E_,snapToGrid:oe,snapGrid:xe,connectionMode:V,translateExtent:Ke,connectOnClick:N_,defaultEdgeOptions:z_,fitView:Ph,fitViewOptions:Hh,onNodesDelete:N,onEdgesDelete:A,onDelete:B,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:I,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:E,onMove:c,onMoveStart:f,onMoveEnd:d,noPanClassName:Bh,nodeOrigin:Oa,rfId:Mf,autoPanOnConnect:P_,autoPanOnNodeDrag:H_,autoPanSpeed:q_,onError:G_,connectionRadius:F_,isValidConnection:V_,selectNodesOnDrag:re,nodeDragThreshold:Y_,connectionDragThreshold:Z_,onBeforeDelete:F,debug:J_,ariaLabelConfig:eI,zIndexMode:Vh}),(0,z.jsx)(e6,{onInit:u,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:y,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:l,connectionLineType:T,connectionLineStyle:Y,connectionLineComponent:Z,connectionLineContainerStyle:Q,selectionKeyCode:$,selectionOnDrag:H,selectionMode:K,deleteKeyCode:ae,multiSelectionKeyCode:ie,panActivationKeyCode:se,zoomActivationKeyCode:ee,onlyRenderVisibleElements:X,defaultViewport:aa,translateExtent:Ke,minZoom:W,maxZoom:Re,preventScrolling:Ba,zoomOnScroll:o_,zoomOnPinch:n_,zoomOnDoubleClick:s_,panOnScroll:r_,panOnScrollSpeed:l_,panOnScrollMode:i_,panOnDrag:u_,autoPanOnSelection:U_,onPaneClick:d_,onPaneMouseEnter:c_,onPaneMouseMove:f_,onPaneMouseLeave:p_,onPaneScroll:m_,onPaneContextMenu:g_,paneClickDistance:h_,nodeClickDistance:x_,onSelectionContextMenu:k,onSelectionStart:D,onSelectionEnd:R,onReconnect:b_,onReconnectStart:w_,onReconnectEnd:v_,onEdgeContextMenu:C_,onEdgeDoubleClick:S_,onEdgeMouseEnter:L_,onEdgeMouseMove:__,onEdgeMouseLeave:I_,reconnectRadius:k_,defaultMarkerColor:Kn,noDragClassName:A_,noWheelClassName:T_,noPanClassName:Bh,rfId:Mf,disableKeyboardA11y:Uh,nodeExtent:Zn,viewport:K_,onViewportChange:j_,nodesDraggable:ce}),(0,z.jsx)(T4,{onSelectionChange:P}),y_,(0,z.jsx)(I4,{proOptions:R_,position:D_}),(0,z.jsx)(_4,{rfId:Mf,disableKeyboardA11y:Uh})]})})}var B2=c2(r6);var l6=e=>e.nodes;function P2(){return ge(l6,Ne)}var i6=e=>e.edges;function H2(){return ge(i6,Ne)}var s6=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function Ql(){return ge(s6,Ne)}var G7=pa.error014();function u6({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,z.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Qe(["react-flow__background-pattern",a,o])})}function d6({radius:e,className:t}){return(0,z.jsx)("circle",{cx:e,cy:e,r:e,className:Qe(["react-flow__background-pattern","dots",t])})}var so;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(so||(so={}));var c6={[so.Dots]:1,[so.Lines]:1,[so.Cross]:6},f6=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function U2({id:e,variant:t=so.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:u,patternClassName:c}){let f=(0,O.useRef)(null),{transform:d,patternId:p}=ge(f6,Ne),g=o||c6[t],b=t===so.Dots,w=t===so.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*d[2]||1,h[1]*d[2]||1],m=g*d[2],y=Array.isArray(r)?r:[r,r],S=w?[m,m]:x,C=[y[0]*d[2]+S[0]/2,y[1]*d[2]+S[1]/2],v=`${p}${e||""}`;return(0,z.jsxs)("svg",{className:Qe(["react-flow__background",u]),style:{...s,...Jc,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:f,"data-testid":"rf__background",children:[(0,z.jsx)("pattern",{id:v,x:d[0]%x[0],y:d[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:b?(0,z.jsx)(d6,{radius:m/2,className:c}):(0,z.jsx)(u6,{dimensions:S,lineWidth:n,variant:t,className:c})}),(0,z.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}U2.displayName="Background";var q2=(0,O.memo)(U2);function p6(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,z.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function m6(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,z.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function g6(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,z.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function h6(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,z.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function x6(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,z.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function jc({children:e,className:t,...a}){return(0,z.jsx)("button",{type:"button",className:Qe(["react-flow__controls-button",t]),...a,children:e})}var y6=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function F2({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:u,children:c,position:f="bottom-left",orientation:d="vertical","aria-label":p}){let g=qe(),{isInteractive:b,minZoomReached:w,maxZoomReached:h,ariaLabelConfig:x}=ge(y6,Ne),{zoomIn:m,zoomOut:y,fitView:S}=ma(),C=()=>{m(),r?.()},v=()=>{y(),l?.()},_=()=>{S(n),i?.()},I=()=>{g.setState({nodesDraggable:!b,nodesConnectable:!b,elementsSelectable:!b}),s?.(!b)};return(0,z.jsxs)($c,{className:Qe(["react-flow__controls",d==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(jc,{onClick:C,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,z.jsx)(p6,{})}),(0,z.jsx)(jc,{onClick:v,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:w,children:(0,z.jsx)(m6,{})})]}),a&&(0,z.jsx)(jc,{className:"react-flow__controls-fitview",onClick:_,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,z.jsx)(g6,{})}),o&&(0,z.jsx)(jc,{className:"react-flow__controls-interactive",onClick:I,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:b?(0,z.jsx)(x6,{}):(0,z.jsx)(h6,{})}),c]})}F2.displayName="Controls";var X7=(0,O.memo)(F2);function b6({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:u,borderRadius:c,shapeRendering:f,selected:d,onClick:p}){let{background:g,backgroundColor:b}=r||{},w=l||g||b;return(0,z.jsx)("rect",{className:Qe(["react-flow__minimap-node",{selected:d},u]),x:t,y:a,rx:c,ry:c,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var w6=(0,O.memo)(b6),v6=e=>e.nodes.map(t=>t.id),lh=e=>e instanceof Function?e:()=>e;function C6({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=w6,onClick:l}){let i=ge(v6,Ne),s=lh(t),u=lh(e),c=lh(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,z.jsx)(z.Fragment,{children:i.map(d=>(0,z.jsx)(L6,{id:d,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:c,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:f},d))})}function S6({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:u,x:c,y:f,width:d,height:p}=ge(g=>{let b=g.nodeLookup.get(e);if(!b)return{node:void 0,x:0,y:0,width:0,height:0};let w=b.internals.userNode,{x:h,y:x}=b.internals.positionAbsolute,{width:m,height:y}=Ta(w);return{node:w,x:h,y:x,width:m,height:y}},Ne);return!u||u.hidden||!Xg(u)?null:(0,z.jsx)(i,{x:c,y:f,width:d,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:l,onClick:s,id:u.id})}var L6=(0,O.memo)(S6),_6=(0,O.memo)(C6),I6=200,k6=150,M6=e=>!e.hidden,E6=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Fg(Fl(e.nodeLookup,{filter:M6}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},r2=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,A6=(e,t)=>r2(e.viewBB,t.viewBB)&&r2(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,T6="react-flow__minimap-desc";function V2({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:u,maskStrokeColor:c,maskStrokeWidth:f,position:d="bottom-right",onClick:p,onNodeClick:g,pannable:b=!1,zoomable:w=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:y=5}){let S=qe(),C=(0,O.useRef)(null),{boundingRect:v,viewBB:_,rfId:I,panZoom:N,translateExtent:A,flowWidth:B,flowHeight:P,ariaLabelConfig:L}=ge(E6,A6),M=e?.width??I6,E=e?.height??k6,k=v.width/M,D=v.height/E,R=Math.max(k,D),F=R*M,V=R*E,T=y*R,Y=v.x-(F-v.width)/2-T,Z=v.y-(V-v.height)/2-T,Q=F+T*2,ae=V+T*2,$=`${T6}-${I}`,H=(0,O.useRef)(0),K=(0,O.useRef)();H.current=R,(0,O.useEffect)(()=>{if(C.current&&N)return K.current=pC({domNode:C.current,panZoom:N,getTransform:()=>S.getState().transform,getViewScale:()=>H.current}),()=>{K.current?.destroy()}},[N]),(0,O.useEffect)(()=>{K.current?.update({translateExtent:A,width:B,height:P,inversePan:x,pannable:b,zoomStep:m,zoomable:w})},[b,w,x,m,A,B,P]);let se=p?oe=>{let[xe,X]=K.current?.pointer(oe)||[0,0];p(oe,{x:xe,y:X})}:void 0,ie=g?(0,O.useCallback)((oe,xe)=>{let X=S.getState().nodeLookup.get(xe).internals.userNode;g(oe,X)},[]):void 0,ee=h??L["minimap.ariaLabel"];return(0,z.jsx)($c,{position:d,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*R:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:Qe(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,z.jsxs)("svg",{width:M,height:E,viewBox:`${Y} ${Z} ${Q} ${ae}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":$,ref:C,onClick:se,children:[ee&&(0,z.jsx)("title",{id:$,children:ee}),(0,z.jsx)(_6,{onClick:ie,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,z.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Y-T},${Z-T}h${Q+T*2}v${ae+T*2}h${-Q-T*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}V2.displayName="MiniMap";var G2=(0,O.memo)(V2),N6=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,D6={[zn.Line]:"right",[zn.Handle]:"bottom-right"};function R6({nodeId:e,position:t,variant:a=zn.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:c=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:d,autoScale:p=!0,shouldResize:g,onResizeStart:b,onResize:w,onResizeEnd:h}){let x=h2(),m=typeof e=="string"?e:x,y=qe(),S=(0,O.useRef)(null),C=a===zn.Handle,v=ge((0,O.useCallback)(N6(C&&p),[C,p]),Ne),_=(0,O.useRef)(null),I=t??D6[a];(0,O.useEffect)(()=>{if(!(!S.current||!m))return _.current||(_.current=yC({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:A,transform:B,snapGrid:P,snapToGrid:L,nodeOrigin:M,domNode:E}=y.getState();return{nodeLookup:A,transform:B,snapGrid:P,snapToGrid:L,nodeOrigin:M,paneDomNode:E}},onChange:(A,B)=>{let{triggerNodeChanges:P,nodeLookup:L,parentLookup:M,nodeOrigin:E}=y.getState(),k=[],D={x:A.x,y:A.y},R=L.get(m);if(R&&R.expandParent&&R.parentId){let F=R.origin??E,V=A.width??R.measured.width??0,T=A.height??R.measured.height??0,Y={id:R.id,parentId:R.parentId,rect:{width:V,height:T,...Yg({x:A.x??R.position.x,y:A.y??R.position.y},{width:V,height:T},R.parentId,L,F)}},Z=Gc([Y],L,M,E);k.push(...Z),D.x=A.x?Math.max(F[0]*V,A.x):void 0,D.y=A.y?Math.max(F[1]*T,A.y):void 0}if(D.x!==void 0&&D.y!==void 0){let F={id:m,type:"position",position:{...D}};k.push(F)}if(A.width!==void 0&&A.height!==void 0){let V={id:m,type:"dimensions",resizing:!0,setAttributes:d?d==="horizontal"?"width":"height":!0,dimensions:{width:A.width,height:A.height}};k.push(V)}for(let F of B){let V={...F,type:"position"};k.push(V)}P(k)},onEnd:({width:A,height:B})=>{let P={id:m,type:"dimensions",resizing:!1,dimensions:{width:A,height:B}};y.getState().triggerNodeChanges([P])}})),_.current.update({controlPosition:I,boundaries:{minWidth:i,minHeight:s,maxWidth:u,maxHeight:c},keepAspectRatio:f,resizeDirection:d,onResizeStart:b,onResize:w,onResizeEnd:h,shouldResize:g}),()=>{_.current?.destroy()}},[I,i,s,u,c,f,b,w,h,g]);let N=I.split("-");return(0,z.jsx)("div",{className:Qe(["react-flow__resize-control","nodrag",...N,a,o]),ref:S,style:{...n,scale:v,...l&&{[C?"backgroundColor":"borderColor"]:l}},children:r})}var Y7=(0,O.memo)(R6);var ea=U(ne(),1),W2=U(Jo(),1);var af=U(ne(),1);var ef=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var X2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Y2=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var ph=e=>{let t=Y2(e);return t.charAt(0).toUpperCase()+t.slice(1)};var qs=U(ne(),1);var tf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Z2=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var $l=U(ne(),1);var z6=(0,$l.createContext)({});var K2=()=>(0,$l.useContext)(z6);var j2=(0,qs.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:p=""}=K2()??{},g=o??f?Number(a??c)*24/Number(t??u):a??c;return(0,qs.createElement)("svg",{ref:s,...tf,width:t??u??tf.width,height:t??u??tf.height,stroke:e??d,strokeWidth:g,className:ef("lucide",p,n),...!r&&!Z2(i)&&{"aria-hidden":"true"},...i},[...l.map(([b,w])=>(0,qs.createElement)(b,w)),...Array.isArray(r)?r:[r]])});var G=(e,t)=>{let a=(0,af.forwardRef)(({className:o,...n},r)=>(0,af.createElement)(j2,{ref:r,iconNode:t,className:ef(`lucide-${X2(ph(e))}`,`lucide-${e}`,o),...n}));return a.displayName=ph(e),a};var O6=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],Er=G("audio-lines",O6);var B6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ar=G("check",B6);var P6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fs=G("chevron-down",P6);var H6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Jl=G("chevron-right",H6);var U6=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vs=G("chevron-left",U6);var q6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Gs=G("chevron-up",q6);var F6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Bn=G("circle-alert",F6);var V6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Pn=G("circle-check",V6);var G6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xa=G("circle-question-mark",G6);var X6=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Xs=G("clapperboard",X6);var Y6=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ys=G("copy",Y6);var Z6=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],uo=G("file-pen",Z6);var K6=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Et=G("file-text",K6);var j6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Zs=G("film",j6);var W6=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ks=G("folder-open",W6);var Q6=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Hn=G("folder",Q6);var $6=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],ei=G("hand",$6);var J6=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Yo=G("image-plus",J6);var eT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ya=G("image",eT);var tT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],js=G("info",tT);var aT=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Ws=G("keyboard",aT);var oT=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Un=G("layers",oT);var nT=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Qs=G("layout-grid",nT);var rT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],qn=G("loader-circle",rT);var lT=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],$s=G("map",lT);var iT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Js=G("maximize-2",iT);var sT=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],eu=G("maximize",sT);var uT=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Tr=G("mic",uT);var dT=[["path",{d:"M5 12h14",key:"1ays0h"}]],tu=G("minus",dT);var cT=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ti=G("mouse-pointer",cT);var fT=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],$t=G("music",fT);var pT=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],au=G("paperclip",pT);var mT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ou=G("pause",mT);var gT=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Fn=G("pen-line",gT);var hT=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],nu=G("person-standing",hT);var xT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],co=G("play",xT);var yT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ut=G("plus",yT);var bT=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],ru=G("redo-2",bT);var wT=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Vn=G("refresh-cw",wT);var vT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],lu=G("rotate-ccw",vT);var CT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],iu=G("search",CT);var ST=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],su=G("sliders-horizontal",ST);var LT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ga=G("sparkles",LT);var _T=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Gn=G("square-split-vertical",_T);var IT=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],uu=G("tag",IT);var kT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xn=G("triangle-alert",kT);var MT=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Nr=G("type",MT);var ET=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],du=G("undo-2",ET);var AT=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],cu=G("unlink",AT);var TT=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],fu=G("upload",TT);var NT=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Za=G("video",NT);var DT=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],pu=G("waypoints",DT);var RT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jt=G("x",RT);var gt=U(J(),1);function Dr({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,u]=(0,ea.useState)(!1),c=(0,ea.useRef)(null),f=(0,ea.useRef)(null),[d,p]=(0,ea.useState)({top:0,left:0,placement:"bottom"}),g=(0,ea.useMemo)(()=>t.find(m=>m.value===e),[t,e]),b=(0,ea.useCallback)(()=>{if(!c.current)return;let m=c.current.getBoundingClientRect(),y=window.innerHeight,S=Math.min(t.length*34+16,260),v=y-m.bottom<S&&m.top>S,_=v?m.top-6:m.bottom+6,I=r?m.width:void 0;p({top:_,left:m.left,width:I,placement:v?"top":"bottom"})},[t.length,r]);(0,ea.useEffect)(()=>{if(!s)return;b();let m=C=>{let v=C.target;c.current?.contains(v)||f.current?.contains(v)||u(!1)},y=C=>{C.key==="Escape"&&u(!1)},S=()=>{b()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",y),window.addEventListener("scroll",S,!0),window.addEventListener("resize",b),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",y),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",b)}},[s,b]);let w=(0,ea.useCallback)(m=>{m.stopPropagation(),!n&&u(y=>!y)},[n]),h=(0,ea.useCallback)((m,y)=>{y||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsxs)("button",{ref:c,type:"button",className:x,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,gt.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,gt.jsx)(Fs,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,W2.createPortal)((0,gt.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${d.placement}`,style:{position:"fixed",top:d.placement==="top"?void 0:d.top,bottom:d.placement==="top"?window.innerHeight-d.top:void 0,left:d.left,minWidth:d.width?Math.max(d.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,gt.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let y=m.value===e,S=!!m.subtitle||!!m.badge||!!m.icon;return(0,gt.jsxs)("button",{type:"button",role:"option","aria-selected":y,disabled:m.disabled,className:`wf-custom-select-option ${S?"wf-custom-select-option--rich":""} ${y?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,gt.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,gt.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,gt.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,gt.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,gt.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,gt.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),y?(0,gt.jsx)(Ar,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var fo=U(ne(),1),Q2=U(Jo(),1),Ka=U(J(),1),mu=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,fo.useState)(!1),i=(0,fo.useRef)(null),s=(0,fo.useRef)(null),[u,c]=(0,fo.useState)({left:0}),f=(0,fo.useCallback)(()=>{if(!i.current)return;let p=i.current.getBoundingClientRect(),g=a.startsWith("top"),b=a.endsWith("Right"),w=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=b?p.right-140:Math.max(10,p.left+p.width/2-70);c({top:w,bottom:h,left:x})},[a]);(0,fo.useEffect)(()=>{if(!r)return;f();let p=b=>{let w=b.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=b=>{b.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let d=p=>{p.stopPropagation(),l(g=>!g)};return(0,Ka.jsxs)(Ka.Fragment,{children:[(0,Ka.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?d:void 0,children:n}),r&&typeof document<"u"?(0,Q2.createPortal)((0,Ka.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,Ka.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,Ka.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),l(!1))},children:[p.icon?(0,Ka.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,Ka.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var $2=U(ne(),1),mh=U(J(),1),gh=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,$2.useCallback)(c=>{n(Number(c.target.value))},[n]);return(0,mh.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,mh.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var J2=U(ne(),1),eS=U(Jo(),1);var po=U(J(),1),hh=({open:e,onCancel:t,title:a,footer:o,width:n=640,children:r})=>((0,J2.useEffect)(()=>{if(!e)return;let l=i=>{i.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]),!e||typeof document>"u"?null:(0,eS.createPortal)((0,po.jsx)("div",{className:"wf-modal-overlay",onClick:t,children:(0,po.jsxs)("div",{className:"wf-modal-card",style:{width:n},onClick:l=>l.stopPropagation(),children:[(0,po.jsxs)("div",{className:"wf-modal-header",children:[(0,po.jsx)("div",{className:"wf-modal-title",children:a}),(0,po.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,po.jsx)(Jt,{size:16})})]}),(0,po.jsx)("div",{className:"wf-modal-body",children:r}),o?(0,po.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var nf=U(ne(),1),tS=U(mg(),1);var Rr=U(J(),1),gu=null,zT=()=>{let[e,t]=(0,nf.useState)([]);return(0,nf.useEffect)(()=>(gu=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{gu=null}),[]),e.length===0?null:(0,Rr.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=js,n="#60a5fa";return a.type==="success"?(o=Pn,n="#34d399"):a.type==="warning"?(o=Xn,n="#fb923c"):a.type==="error"&&(o=Bn,n="#f87171"),(0,Rr.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Rr.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Rr.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function OT(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,tS.createRoot)(t).render((0,Rr.jsx)(zT,{}))}function of(e,t,a=2500){OT();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;gu?gu({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{gu?.({id:o,type:e,content:t,durationMs:a})},50)}var ai={success:(e,t)=>of("success",e,t),warning:(e,t)=>of("warning",e,t),error:(e,t)=>of("error",e,t),info:(e,t)=>of("info",e,t)};var aS=e=>{let t,a=new Set,o=(u,c)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let d=t;t=c??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,d))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,i);return i},oS=(e=>e?aS(e):aS);var hu=U(ne(),1);var BT=e=>e;function PT(e,t=BT){let a=hu.default.useSyncExternalStore(e.subscribe,hu.default.useCallback(()=>t(e.getState()),[e,t]),hu.default.useCallback(()=>t(e.getInitialState()),[e,t]));return hu.default.useDebugValue(a),a}var nS=e=>{let t=oS(e),a=o=>PT(t,o);return Object.assign(a,t),a},rf=(e=>e?nS(e):nS);var uS=U(ne(),1);var rS=e=>Symbol.iterator in e,lS=e=>"entries"in e,iS=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},HT=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function sS(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:rS(e)&&rS(t)?lS(e)&&lS(t)?iS(e,t):HT(e,t):iS({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function dS(e){let t=uS.default.useRef(void 0);return a=>{let o=e(a);return sS(t.current,o)?t.current:t.current=o}}var fS={stroke:"#b1b1b7",strokeWidth:2},lf={type:"animated",style:fS,animated:!1};function cS(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function UT(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function pS(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:UT(e),...lf,...e,data:{...t,createdAt:a},animated:e.animated??lf.animated,style:{...fS,...e.style??{}},sourceHandle:cS(e.sourceHandle),targetHandle:cS(e.targetHandle)}}var mS={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},qT={text:"text-editor",image:"import",video:"import",audio:"import"};var gS={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function sf(e,t){return{label:"",materialType:e,status:"empty",selectedTool:qT[e],params:{},failStrategy:"abort",...t}}var FT={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function hS(e){return FT[e]??[]}function VT(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}return{nodeType:t,hasOutput:!0}}function GT(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=mS[n];if(l)for(let i of l){let s=gS[i];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function xS(e,t){let a=VT(e),o=GT(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function uf(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!xS(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of Hg(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function df(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function XT(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function yS(e,t){let a=new Set;for(let c of t.addNodes??[]){if(a.has(c.id)||e.nodes.some(f=>f.id===c.id))return df(e,"rejected","duplicate_node");a.add(c.id)}let o=XT([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return df(e,"rejected","duplicate_node_patch");let n=new Set(o.map(c=>c.id));if((t.nodePatches??[]).some(c=>!n.has(c.nodeId)))return df(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(c=>!l.has(c.id)),u=[...e.edges.filter(c=>!r.has(c.id)&&!l.has(c.source)&&!l.has(c.target))];for(let c of t.addEdges??[]){let f=pS(c),d=uf(f,i,u);if(!d.valid)return df(e,"rejected",d.reasonCode??"invalid_connection");u.push(f)}return{nodes:i,edges:u,status:"allowed"}}function bS(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var cf=!1,ff=!1;function pf(){cf=!0}function wS(){ff=!0,cf=!1}function vS(){cf=!1,ff=!1}function YT(){ff=!1}function xh(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function yh(e,t){return{nodes:e.slice(),edges:t.slice()}}function xu(e,t){return t||(ff&&e===0?"reset":cf&&e===0?"user-delete":"autosave")}function mf(e){let t=yh(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:xh({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(YT(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var ZT=50,KT=300;function yu(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var qt={current:null,lastPushAt:0},he=rf()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&pf(),e({nodes:sh(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:uh(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&pf();let o=t(),n=yS({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return bS(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&pf(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{vS(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),qt.current=yu(a,o),qt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=yu(t().nodes,t().edges);if(qt.current&&qt.current.sig===a.sig)return;let o=Date.now();if(qt.current&&o-qt.lastPushAt>=KT){let n=qt.current;e(r=>({past:[...r.past,n].slice(-ZT),future:[]})),qt.lastPushAt=o}qt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=yu(o,n);qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=yu(o,n);qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),qt.current=yu(a,o),qt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{wS(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),qt.current=null,qt.lastPushAt=0}})),CS=()=>he(dS(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var SS=()=>he(e=>e.past.length>0),LS=()=>he(e=>e.future.length>0);var RS=U(ne(),1);var _S={total:0,completed:0,running:0,pending:0,percentage:0},Fe=rf()(e=>({executionId:null,status:"idle",error:null,progress:_S,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:_S,nodeStatuses:{}})}));var IS=U(ne(),1),kS="(prefers-reduced-motion: reduce)";function jT(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(kS);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function WT(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(kS).matches}function MS(){return(0,IS.useSyncExternalStore)(jT,WT)}var mo=U(ne(),1),At=U(J(),1),QT=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:u})=>{let f=(0,mo.useId)().replace(/:/g,""),d=`${f}-glow`,p=`${f}-grad`,g=`beam-flow-${f}`,b=(0,mo.useRef)(null),[w,h]=(0,mo.useState)(0);(0,mo.useEffect)(()=>{b.current&&h(b.current.getTotalLength())},[e]);let{dashSize:x,gapSize:m,offsetRange:y}=(0,mo.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,I=_*(1/3),N=_*(2/3);return{dashSize:I,gapSize:N,offsetRange:_}},[w]),S=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-y:0}px; }
            to { stroke-dashoffset: ${s?0:-y}px; }
        }
    `;return(0,At.jsxs)("g",{className:u,children:[(0,At.jsxs)("defs",{children:[(0,At.jsx)("style",{children:S}),(0,At.jsxs)("filter",{id:d,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,At.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,At.jsxs)("feMerge",{children:[(0,At.jsx)("feMergeNode",{in:"blur"}),(0,At.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,At.jsxs)("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",children:[(0,At.jsx)("stop",{offset:"0%",stopColor:n}),(0,At.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,At.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,At.jsx)("path",{ref:b,d:e,fill:"none",stroke:"none"}),w>0&&(0,At.jsx)("path",{d:e,stroke:`url(#${p})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${x} ${m}`,fill:"none",filter:`url(#${d})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},ES=QT;var bu=U(ne(),1);var NS=U(ne(),1);var $T={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.refsTitle":"\u53C2\u8003\u5A92\u4F53","panel.refsEmpty":"\u6682\u65E0\u53C2\u8003 \u2014\u2014 \u4ECE\u4E0A\u6E38\u8282\u70B9\u8FDE\u7EBF\u8F93\u5165\u5373\u4F5C\u4E3A\u53C2\u8003\u7D20\u6750","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u7248\u672C\u51B2\u7A81\uFF08\u5DE5\u4F5C\u533A\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u7248\u672C\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u533A\u5DF2\u5728\u5176\u4ED6\u4F1A\u8BDD\u88AB\u4FEE\u6539\u3002","app.conflictOverwrite":"\u5F3A\u5236\u8986\u76D6\u8FDC\u7AEF\u7248\u672C","app.conflictReload":"\u653E\u5F03\u672C\u5730\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210"},AS=$T;var JT={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.refsTitle":"References","panel.refsEmpty":"No references yet \u2014 connect upstream nodes to use their output as reference","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Version conflict (modified elsewhere)","app.conflictBanner":"Conflict detected: Workspace was updated in another session.","app.conflictOverwrite":"Overwrite Remote","app.conflictReload":"Discard and Reload","palette.group.material":"Material","palette.node.material":"Material Node","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation"},TS=JT;var bh={zh:AS,en:TS},gf="zh",wh=new Set;function eN(e){return wh.add(e),()=>wh.delete(e)}function tN(){return gf}function DS(e){let t=e==="en"?"en":"zh";if(t!==gf){gf=t;for(let a of wh)a()}}function Zo(e){return bh[gf][e]??bh.zh[e]??bh.en[e]??e}function Ce(){return(0,NS.useSyncExternalStore)(eN,tN),Zo}var xf=U(J(),1),hf=28,aN=({edgeId:e,x:t,y:a})=>{let o=Ce(),n=he(i=>i.applyCanvasInputMutation),r=(0,bu.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,bu.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,xf.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-hf/2,y:a-hf/2,width:hf,height:hf,children:(0,xf.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,xf.jsx)(cu,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},yf=(0,bu.memo)(aN);var Na=U(J(),1),oN=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[u,c,f]=Zl({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),d=Fe(w=>w.nodeStatuses[s]==="running"),p=MS(),g=i?"var(--wb-accent)":"var(--wb-edge)",b=i?2.5:2;return d&&p?(0,Na.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Na.jsx)(On,{id:e,path:u,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:b}}),(0,Na.jsx)(yf,{edgeId:e,x:c,y:f})]}):d?(0,Na.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Na.jsx)(On,{id:e,path:u,style:{stroke:g,strokeWidth:b,opacity:0}}),(0,Na.jsx)(ES,{pathD:u,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:b}),(0,Na.jsx)(yf,{edgeId:e,x:c,y:f})]}):(0,Na.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Na.jsx)(On,{id:e,path:u,style:{stroke:g,strokeWidth:b}}),(0,Na.jsx)(yf,{edgeId:e,x:c,y:f})]})},zS=(0,RS.memo)(oN);var oi=U(ne(),1);function Da(e){e.stopPropagation()}function vh(e){e.preventDefault(),e.stopPropagation()}var de=U(J(),1),nN=[{type:"text",Icon:Et,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:Yo,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:Za,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:$t,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"}],rN=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:c,isAssetsOpen:f=!1})=>{let d=Ce(),[p,g]=(0,oi.useState)(!1),b=u!==void 0?u:p,w=c||(()=>g(m=>!m)),h=(0,oi.useCallback)(m=>{e(m),c?c():g(!1)},[e,c]),x=[{key:"select",icon:(0,de.jsx)(ti,{size:15}),label:d("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,de.jsx)(ei,{size:15}),label:d("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,de.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:Da,onMouseDown:Da,children:[(0,de.jsxs)("div",{style:{position:"relative"},children:[(0,de.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${b?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:vh,title:d("toolbar.addNode"),children:(0,de.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,de.jsx)(Ut,{size:20})})}),b&&(0,de.jsx)("div",{className:"wf-dock-add-popover",children:nN.map(m=>(0,de.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:vh,children:[(0,de.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,de.jsx)(m.Icon,{size:18})}),(0,de.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,de.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,de.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,de.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,de.jsx)(mu,{items:x,selectedKeys:[r],placement:"topCenter",children:(0,de.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,de.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,de.jsx)(ti,{size:16}):(0,de.jsx)(ei,{size:16})}),(0,de.jsx)(Gs,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,de.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:d("toolbar.assets"),children:[(0,de.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,de.jsx)(Ks,{size:17})}),(0,de.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),(t||a)&&(0,de.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,de.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:d("toolbar.undoTitle"),children:[(0,de.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,de.jsx)(du,{size:16})}),(0,de.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.undo")})]}),a&&(0,de.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:d("toolbar.redoTitle"),children:[(0,de.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,de.jsx)(ru,{size:16})}),(0,de.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.redo")})]}),s&&(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,de.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:d("toolbar.help"),children:[(0,de.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,de.jsx)(Xa,{size:16})}),(0,de.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},OS=(0,oi.memo)(rN);var ni=U(ne(),1);var me=U(J(),1),lN={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},iN=e=>Math.round(e.transform[2]*100),sN=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:u})=>{let c=Ce(),{zoomIn:f,zoomOut:d,fitView:p}=ma(),g=ge(iN),b=Fe(N=>N.status),w=Fe(N=>N.progress),h=Fe(N=>N.error),x=b==="pending"||b==="running",m=b==="paused",y=b==="completed"||b==="error"||b==="cancelled",S=w.total>0,C=(0,ni.useCallback)(()=>{p({duration:250,padding:.1})},[p]),v=(0,ni.useCallback)(()=>{f({duration:150})},[f]),_=(0,ni.useCallback)(()=>{d({duration:150})},[d]),I=[{key:"split-left",label:c("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:c("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:c("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:c("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,me.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:Da,onMouseDown:Da,children:[r&&(0,me.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":y?"wf-header-capsule--terminal":"wf-header-capsule--idle"}`,children:[x||m?(0,me.jsxs)(me.Fragment,{children:[(0,me.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${b}`,children:[c(lN[b]),S&&` (${w.completed}/${w.total})`]}),x?(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:c("exec.pauseTitle"),children:(0,me.jsx)(ou,{size:14})}):(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:c("exec.resumeTitle"),children:(0,me.jsx)(co,{size:14})}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:c("exec.cancelTitle"),children:(0,me.jsx)(Jt,{size:14})})]}):(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||c("exec.runAll"),"aria-label":c("exec.runAll"),children:(0,me.jsx)(co,{size:14,fill:"currentColor",style:{marginLeft:2}})}),y&&u&&(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:c("exec.resetTitle"),children:(0,me.jsx)(lu,{size:14})})]}),(0,me.jsxs)("div",{className:"wf-header-capsule",children:[(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:c("header.fitView"),children:(0,me.jsx)(eu,{size:15})}),(0,me.jsx)("div",{className:"wf-header-capsule__divider"}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:c("header.zoomOut"),children:(0,me.jsx)(tu,{size:15})}),(0,me.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:c("header.fitView"),children:[g,"%"]}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:c("header.zoomIn"),children:(0,me.jsx)(Ut,{size:15})})]}),(0,me.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:c("header.alignGrid"),children:(0,me.jsx)(Qs,{size:15})}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:c("header.routingCurved"),children:(0,me.jsx)(pu,{size:15})}),(0,me.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:c("header.minimap"),children:(0,me.jsx)($s,{size:15})}),n&&(0,me.jsxs)(me.Fragment,{children:[(0,me.jsx)("div",{className:"wf-header-capsule__divider"}),(0,me.jsx)(mu,{items:I,selectedKeys:[o],placement:"bottomRight",children:(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:c("header.splitLayout"),children:(0,me.jsx)(Gn,{size:15})})})]})]})]})},BS=(0,ni.memo)(sN);var go=U(ne(),1);var ue=U(J(),1),uN=[{key:"all",label:"\u5168\u90E8",icon:Hn},{key:"character",label:"\u89D2\u8272 (1)",icon:ga},{key:"scene",label:"\u573A\u666F (2)",icon:Ya},{key:"prop",label:"\u9053\u5177 (3)",icon:uu},{key:"style",label:"\u98CE\u683C (4)",icon:ga},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:Et},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:Hn},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:Zs}],dN=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,go.useState)(o),[i,s]=(0,go.useState)(""),[u,c]=(0,go.useState)([]),[f,d]=(0,go.useState)(!1),[p,g]=(0,go.useState)(null),b=(0,go.useCallback)(async()=>{d(!0),g(null);try{let x=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${x}`),y=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(y=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let S=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(S=_.artifacts.map(I=>({id:I.id,name:I.name||I.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:I.prompt||I.agent,real_path:I.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(I.id)}`,tags:[I.type||"artifact"],updatedAt:I.createdAt})))}}let C=[...y,...S];c(C)}catch(x){g(x.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{d(!1)}},[r]);(0,go.useEffect)(()=>{e&&b()},[e,b]);let w=x=>{l(x),n?.(x)},h=u.filter(x=>{if(!i.trim())return!0;let m=i.toLowerCase();return x.name.toLowerCase().includes(m)||x.description&&x.description.toLowerCase().includes(m)||x.tags&&x.tags.some(y=>y.toLowerCase().includes(m))});return e?(0,ue.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:Da,onMouseDown:Da,onClick:x=>x.stopPropagation(),children:[(0,ue.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,ue.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,ue.jsx)(Hn,{size:18}),(0,ue.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,ue.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,ue.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,ue.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:b,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,ue.jsx)(Vn,{size:14,className:f?"wf-spin":""})}),(0,ue.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,ue.jsx)(Jt,{size:16})})]})]}),(0,ue.jsx)("div",{className:"wf-assets-drawer__categories",children:uN.map(x=>{let m=x.icon,y=r===x.key;return(0,ue.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${y?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(x.key),children:[(0,ue.jsx)(m,{size:13}),(0,ue.jsx)("span",{children:x.label})]},x.key)})}),(0,ue.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,ue.jsx)(iu,{size:14,className:"wf-assets-drawer__search-icon"}),(0,ue.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:x=>s(x.target.value)}),i&&(0,ue.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,ue.jsx)(Jt,{size:12})})]}),(0,ue.jsxs)("div",{className:"wf-assets-drawer__body",children:[f&&(0,ue.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,ue.jsx)(Vn,{size:20,className:"wf-spin"}),(0,ue.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),p&&!f&&(0,ue.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,ue.jsx)("span",{children:p}),(0,ue.jsx)("button",{type:"button",onClick:b,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!f&&!p&&h.length===0&&(0,ue.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,ue.jsx)(Hn,{size:32,strokeWidth:1.2}),(0,ue.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,ue.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!f&&!p&&h.length>0&&(0,ue.jsx)("div",{className:"wf-assets-drawer__grid",children:h.map(x=>(0,ue.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(x),title:`\u70B9\u51FB\u5C06\u300C${x.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,ue.jsxs)("div",{className:"wf-assets-card__preview",children:[x.type==="scene"||x.type==="character"||x.type==="artifacts"?(0,ue.jsx)("img",{src:x.previewUrl,alt:x.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,ue.jsx)(Et,{size:24,className:"wf-assets-card__file-icon"}),(0,ue.jsx)("span",{className:"wf-assets-card__type-tag",children:x.type})]}),(0,ue.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,ue.jsx)("div",{className:"wf-assets-card__name",children:x.name}),x.description&&(0,ue.jsx)("div",{className:"wf-assets-card__desc",children:x.description})]}),(0,ue.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(x)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,ue.jsx)(Ut,{size:14}),(0,ue.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},x.id))})]})]}):null},PS=dN;var ht=U(J(),1),cN=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],fN=({isOpen:e,onClose:t})=>e?(0,ht.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:Da,onMouseDown:Da,onClick:t,children:(0,ht.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,ht.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,ht.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,ht.jsx)(Ws,{size:18}),(0,ht.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,ht.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,ht.jsx)(Jt,{size:16})})]}),(0,ht.jsx)("div",{className:"wf-shortcuts-modal__body",children:cN.map(a=>(0,ht.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,ht.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,ht.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,ht.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,ht.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,ht.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,ht.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,HS=fN;var Ra=U(ne(),1),FS=U(Jo(),1);var xt=U(J(),1),US=278,Or=12,pN=8,Ch=160,zr=18,mN={AudioLines:(0,xt.jsx)(Er,{size:zr}),ImageGen:(0,xt.jsx)(Yo,{size:zr}),Mic:(0,xt.jsx)(Tr,{size:zr}),PersonStanding:(0,xt.jsx)(nu,{size:zr}),TextGen:(0,xt.jsx)(Nr,{size:zr}),VideoGen:(0,xt.jsx)(Za,{size:zr})},gN={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function qS(e){return e?gN[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function hN(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-US:e;return Math.min(Math.max(Or,o),Math.max(Or,a-US-Or))}var xN=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,Ra.useRef)(null),[u,c]=(0,Ra.useState)({left:t,top:a,maxHeight:Ch});(0,Ra.useLayoutEffect)(()=>{if(!e)return;let d=typeof window>"u"?Ch:window.innerHeight,p=hN(t,i),g=a+pN,b=Math.max(Or,d-Or-Ch),w=Math.min(Math.max(Or,g),b);c({left:p,top:w,maxHeight:Math.max(0,d-w-Or)})},[i,e,t,a]),(0,Ra.useEffect)(()=>{if(!e)return;let d=g=>{s.current&&!s.current.contains(g.target)&&l()},p=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",p)}},[l,e]);let f=(0,Ra.useMemo)(()=>n.map(d=>(0,xt.jsx)("button",{type:"button","data-testid":`menu-item-${d.key}`,className:"wf-action-menu__item",onClick:()=>r(d.key),children:(0,xt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[d.icon?(0,xt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:qS(d.icon).bg,color:qS(d.icon).color},children:mN[d.icon]??(0,xt.jsx)(ga,{size:zr})}):null,(0,xt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,xt.jsx)("span",{className:"wf-action-menu__item-label",children:d.label}),d.description?(0,xt.jsx)("span",{className:"wf-action-menu__item-desc",children:d.description}):null]})]})},d.key)),[r,n]);return!e||n.length===0?null:(0,FS.createPortal)((0,xt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,xt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,xt.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},bf=(0,Ra.memo)(xN);var za=U(ne(),1),VS=U(Jo(),1);var De=U(J(),1),yN=210,bN=230,wN=260,vN=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:c=!1})=>{let f=(0,za.useRef)(null),[d,p]=(0,za.useState)("main"),g=Ce();(0,za.useEffect)(()=>{a&&p("main")},[a]),(0,za.useEffect)(()=>{if(!a)return;let y=C=>{f.current&&!f.current.contains(C.target)&&n()},S=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",y),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("keydown",S)}},[a,n]);let b=(0,za.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!c},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!c},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,De.jsx)(Ut,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,u,c,g]),w=(0,za.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,De.jsx)(Nr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,De.jsx)(Ya,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,De.jsx)(Za,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,De.jsx)(Er,{size:18})}],[g]);if(!a)return null;let h=d==="add-node"?bN:yN,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-wN-8);return(0,VS.createPortal)((0,De.jsx)("div",{ref:f,className:`wf-context-menu ${d==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:y=>y.preventDefault(),children:d==="main"?b.map(y=>(0,De.jsxs)(za.default.Fragment,{children:[o.type==="pane"&&y.action==="undo"?(0,De.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&y.action==="paste"?(0,De.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,De.jsxs)("button",{type:"button",className:`wf-context-menu__item${y.disabled?" wf-context-menu__item--disabled":""}`,disabled:y.disabled,onClick:S=>{S.stopPropagation(),y.action==="open-add-node"?p("add-node"):r(y.action,o)},children:[y.icon?(0,De.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:y.icon}):null,(0,De.jsx)("span",{className:"wf-context-menu__label",children:y.label}),y.action==="open-add-node"?(0,De.jsx)(Jl,{size:14,className:"wf-add-node-menu__arrow"}):y.shortcut?(0,De.jsx)("span",{className:"wf-context-menu__shortcut",children:y.shortcut}):null]})]},y.action)):(0,De.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,De.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,De.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:y=>{y.stopPropagation(),p("main")},title:g("menu.back"),children:(0,De.jsx)(Vs,{size:16})}),(0,De.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,De.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(y=>(0,De.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:S=>{S.stopPropagation(),l?.(y.type),n()},children:[(0,De.jsx)("div",{className:"wf-add-node-menu__icon-box",children:y.icon}),(0,De.jsx)("span",{className:"wf-add-node-menu__label",children:y.label}),y.badge?(0,De.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${y.badge.variant}`,children:y.badge.text}):null,y.hasSubmenu?(0,De.jsx)(Jl,{size:14,className:"wf-add-node-menu__arrow"}):null]},y.key))})]})}),document.body)},GS=vN;var XS=U(ne(),1),YS=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:u,onToggleShortcuts:c,onToggleMinimap:f,onToggleAddMenu:d,onSetPointerMode:p,onFitView:g,onResetZoom:b,onCategoryKey:w,isAssetsOpen:h=!1,enabled:x=!0})=>{(0,XS.useEffect)(()=>{if(!x)return;let m=y=>{let S=y.target;if(["INPUT","TEXTAREA"].includes(S.tagName)||S.isContentEditable)return;let C=y.metaKey||y.ctrlKey,v=y.key.toLowerCase();if(!C&&h&&/^[1-6]$/.test(y.key)){y.preventDefault(),w?.(parseInt(y.key,10));return}if(!C&&v==="a"){y.preventDefault(),u?.();return}if(!C&&v==="v"){y.preventDefault(),p?.("select");return}if(!C&&v==="h"){y.preventDefault(),p?.("pan");return}if(!C&&v==="n"){y.preventDefault(),d?.();return}if(!C&&v==="m"){y.preventDefault(),f?.();return}if(y.key==="?"||y.shiftKey&&y.key==="/"){y.preventDefault(),c?.();return}if(C&&y.key==="1"){y.preventDefault(),g?.();return}if(C&&y.key==="0"){y.preventDefault(),b?.();return}if((y.key==="Delete"||y.key==="Backspace")&&l&&!C){y.preventDefault(),o?.();return}if(y.key==="Escape"){y.preventDefault(),h?u?.():l&&n?.();return}if(C&&v==="d"&&l){y.preventDefault(),r?.();return}if(C&&v==="c"&&!y.shiftKey){y.preventDefault(),e?.();return}if(C&&v==="v"){y.preventDefault(),t?.();return}if(C&&v==="a"){y.preventDefault(),a?.();return}if(C&&v==="z"&&!y.shiftKey){y.preventDefault(),i?.();return}C&&v==="z"&&y.shiftKey&&(y.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,e,t,a,o,n,r,l,i,s,u,c,f,d,p,g,b,w,h])};var ja=U(ne(),1);function wf(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function ZS(e,t,a){return Sh(e,t,a).valid}function Sh(e,t,a){let o=uf(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var Lh={minZoom:.23,maxZoom:1.29,defaultZoom:1},CN={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},KS={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},SN={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},LN={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},jS={portrait:CN,square:KS,video_landscape:SN,audio_compact:LN};function _h(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function _N(e){return jS[_h(e)]}function WS(e,t){let a=jS[t]||KS;return Math.round(e/a.aspectRatio)}function ri(e){return _N(e).default.width}function QS(e,t,a){let o=sf(e,{status:"empty",nodeWidth:ri(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function Br(e,t,a){return{nodes:[QS(e,t,a)],edges:[]}}function $S(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function IN(e,t){return`${e}-${t}`}function vf(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function Cf(e){return hS(e).map(t=>{let a=String(t.targetTool);return{key:IN(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function JS(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var kN={visible:!1,x:0,y:0,options:[]};function eL(e){let t=Ce(),{screenToFlowPosition:a}=ma(),o=he(p=>p.applyCanvasInputMutation),n=(0,ja.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,ja.useState)(kN),i=(0,ja.useRef)(null),s=(0,ja.useRef)(null),u=(0,ja.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let b=he.getState().nodes.find(h=>h.id===g.nodeId),w=b?.data?.materialType;if(!b||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),c=(0,ja.useCallback)((p,g)=>{let b=g.fromNode?.id??null,w=g.toNode?.id??null,h=i.current,x=h?Cf(h.materialType):[],m=null;if(!g.isValid&&b&&w){let S=he.getState(),C=Sh({source:b,target:w,sourceHandle:null,targetHandle:null},S.nodes,S.edges);m=C.valid?null:t(wf(C.reasonCode))}let y=JS({isValid:g.isValid??null,fromNodeId:b,toNodeId:w,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(y.type==="reject"){n.current?.(y.reason),ai.warning(y.reason),i.current=null;return}if(y.type==="menu"&&h){let S="changedTouches"in p?p.changedTouches[0]:p;if(!S){i.current=null;return}let{clientX:C,clientY:v}=S;s.current=a({x:C,y:v}),l({visible:!0,x:C,y:v,options:x.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),f=(0,ja.useCallback)(p=>{let g=i.current,b=s.current,w=vf(p);if(g&&b&&w){let h=Br(w.targetMaterialType,b),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}l(h=>({...h,visible:!1})),i.current=null,s.current=null},[o]),d=(0,ja.useCallback)(()=>{l(p=>({...p,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:c,onMenuSelect:f,onMenuClose:d}}var ho=U(ne(),1);var It=[];for(let e=0;e<256;++e)It.push((e+256).toString(16).slice(1));function tL(e,t=0){return(It[e[t+0]]+It[e[t+1]]+It[e[t+2]]+It[e[t+3]]+"-"+It[e[t+4]]+It[e[t+5]]+"-"+It[e[t+6]]+It[e[t+7]]+"-"+It[e[t+8]]+It[e[t+9]]+"-"+It[e[t+10]]+It[e[t+11]]+It[e[t+12]]+It[e[t+13]]+It[e[t+14]]+It[e[t+15]]).toLowerCase()}var Ih,MN=new Uint8Array(16);function kh(){if(!Ih){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ih=crypto.getRandomValues.bind(crypto)}return Ih(MN)}var EN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Mh={randomUUID:EN};function AN(e,t,a){e=e||{};let o=e.random??e.rng?.()??kh();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return tL(o)}function TN(e,t,a){return Mh.randomUUID&&!t&&!e?Mh.randomUUID():AN(e,t,a)}var Sf=TN;function aL(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function NN(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function oL(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=NN(o),l,i;if(t)l=t.x,i=t.y;else{let f=a?50:30;l=r.x+f,i=r.y+f}let s=new Map,u=o.map(f=>{let d=Sf();return s.set(f.id,d),{...f,id:d,position:{x:l+(f.position.x-r.x),y:i+(f.position.y-r.y)},selected:!0}}),c=n.map(f=>({...f,id:Sf(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:c,newPastePosition:{x:l,y:i}}}function nL(e,t){let a=(0,ho.useRef)({nodes:[],edges:[]}),o=(0,ho.useRef)(null),n=a.current.nodes.length>0,r=(0,ho.useCallback)(()=>{let f=he.getState(),d=aL(f.nodes,f.edges);d.nodes.length>0&&(a.current=d,o.current=null)},[]),l=(0,ho.useCallback)(f=>{let d=oL(a.current,f,o.current);if(!d)return;o.current=d.newPastePosition;let p=he.getState();p.applyCanvasInputMutation({addNodes:d.nodes,addEdges:d.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,ho.useCallback)(()=>{r(),l()},[r,l]),s=(0,ho.useCallback)(()=>{let f=he.getState(),d=f.nodes.filter(p=>p.selected).map(p=>p.id);d.length!==0&&f.applyCanvasInputMutation({removeNodeIds:d})},[]),u=(0,ho.useCallback)(()=>{e(f=>f.map(d=>({...d,selected:!0})))},[e]),c=(0,ho.useCallback)(()=>{e(f=>f.map(d=>({...d,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:c}}var xo=U(ne(),1);function rL(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:u,redo:c,onExecuteNodeIds:f,onAddNode:d}=e,[p,g]=(0,xo.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),b=(0,xo.useCallback)((C,v)=>{C.preventDefault();let _={type:"pane"};v?_={type:"node",nodeId:v.id}:he.getState().nodes.filter(N=>N.selected).length>1&&(_={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:_})},[]),w=(0,xo.useCallback)((C,v)=>{b(C,v)},[b]),h=(0,xo.useCallback)(C=>{b(C)},[b]),x=(0,xo.useCallback)(C=>{b(C)},[b]),m=(0,xo.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),y=(0,xo.useCallback)((C,v)=>{let _=t({x:p.x,y:p.y});switch(C){case"copy":{if(v.type==="node"){let N=he.getState().nodes.find(A=>A.id===v.nodeId);N&&!N.selected&&(s(),a(A=>A.map(B=>B.id===v.nodeId?{...B,selected:!0}:B)))}o();break}case"paste":n(_);break;case"duplicate":r();break;case"delete":{if(v.type==="node"){let I=he.getState();I.nodes.find(A=>A.id===v.nodeId)?.selected?l():I.applyCanvasInputMutation({removeNodeIds:[v.nodeId]})}else l();break}case"undo":u();break;case"redo":c();break;case"select-all":i();break;case"execute-selection":{let I=he.getState().nodes.filter(N=>N.selected).map(N=>N.id);I.length>0&&f?.(I);break}case"execute-node":{v.type==="node"&&f?.([v.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,l,u,c,i,m,f]),S=(0,xo.useCallback)(C=>{let v=t({x:p.x,y:p.y});d?.(C,v),m()},[p.x,p.y,t,d,m]);return{menu:p,handleNodeContextMenu:w,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:y,handleAddNodeFromMenu:S}}var DN=U(ne(),1),lL=new Map;function iL(e){lL.set(e.type,e)}function sL(){let e={};for(let[t,a]of lL)e[t]=a.component;return e}var Ye=U(ne(),1);var Oe=U(ne(),1);function uL(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var Wa=U(J(),1),RN=4,zN=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=Ce(),[l,i]=(0,Oe.useState)(!1),[s,u]=(0,Oe.useState)(!1),[c,f]=(0,Oe.useState)(null),d=(0,Oe.useRef)(null),p=(0,Oe.useRef)(null),g=(0,Oe.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),b=e==="left",w=a==="plus"&&!!o&&o.length>0,h=ch(k=>k.inProgress),{screenToFlowPosition:x}=ma(),m=(0,Oe.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Oe.useEffect)(()=>{if(a!=="plus"){m();return}let k=d.current,D=p.current;if(!k||!D)return;let R=F=>{if(s)return;let V=k.getBoundingClientRect(),T=V.left+V.width/2,Y=V.top+V.height/2,{x:Z,y:Q}=uL(e,F.clientX-T,F.clientY-Y);D.style.setProperty("--wf-handle-offset-x",`${Z}px`),D.style.setProperty("--wf-handle-offset-y",`${Q}px`)};return k.addEventListener("pointermove",R),()=>{k.removeEventListener("pointermove",R)}},[s,m,e,a]),(0,Oe.useEffect)(()=>{if(!s){m(),f(null);return}let k=()=>{let D=d.current;if(!D)return;let R=D.getBoundingClientRect();f({x:b?R.right:R.left,y:R.bottom})};return k(),window.addEventListener("resize",k),window.addEventListener("scroll",k,!0),()=>{window.removeEventListener("resize",k),window.removeEventListener("scroll",k,!0)}},[s,b,m]);let y=(0,Oe.useCallback)(()=>{i(!0)},[]),S=(0,Oe.useCallback)(()=>{i(!1),m()},[m]),C=(0,Oe.useCallback)(k=>{let D=d.current;!D||k===null||typeof D.hasPointerCapture!="function"||typeof D.releasePointerCapture!="function"||!D.hasPointerCapture(k)||D.releasePointerCapture(k)},[]),v=(0,Oe.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),_=(0,Oe.useCallback)(k=>{k.button===0&&(typeof k.currentTarget.setPointerCapture=="function"&&k.currentTarget.setPointerCapture(k.pointerId),g.current.pointerId=k.pointerId,g.current.startX=k.clientX,g.current.startY=k.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),I=(0,Oe.useCallback)(k=>{if(g.current.pointerId!==k.pointerId)return;Math.hypot(k.clientX-g.current.startX,k.clientY-g.current.startY)>=RN&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),N=(0,Oe.useCallback)(k=>{g.current.pointerId===k.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),A=(0,Oe.useCallback)(k=>{g.current.pointerId===k.pointerId&&(g.current.suppressClick=!1,v())},[v]),B=(0,Oe.useCallback)(k=>{if(k.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&u(D=>!D)},[w]),P=(0,Oe.useCallback)(()=>{let k=c;if(!k){let D=d.current;if(!D)return;let R=D.getBoundingClientRect();k={x:b?R.right:R.left,y:R.bottom}}return{screenPosition:k,flowPosition:x(k)}},[b,c,x]),L=(0,Oe.useCallback)(k=>{n?.(k,P()),u(!1)},[n,P]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,Wa.jsxs)(Wl,{id:b?"in":"out",type:b?"target":"source",position:b?te.Left:te.Right,isConnectable:!0,className:M,style:E,children:[(0,Wa.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,Wa.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,Wa.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,Wa.jsx)("div",{ref:d,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:y,onPointerLeave:S,onPointerDown:_,onPointerMove:I,onPointerUp:N,onPointerCancel:A,onClick:B,children:(0,Wa.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,Wa.jsx)("div",{className:"wf-handle__plus-button",children:(0,Wa.jsx)(Ut,{size:24,strokeWidth:2.5})})})}):null,w&&c?(0,Wa.jsx)(bf,{visible:s,x:c.x,y:c.y,align:b?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Eh=(0,Oe.memo)(zN);var Qa=U(ne(),1);var kt=U(J(),1);function ON(e){let t=Ce();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var BN=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=Ce(),u=(0,Qa.useRef)(e),[c,f]=(0,Qa.useState)(e==="completed"?"complete":"idle"),[d,p]=(0,Qa.useState)(1),[g,b]=(0,Qa.useState)(e==="completed"?1:0),[w,h]=(0,Qa.useState)(e==="pending"||e==="generating");(0,Qa.useEffect)(()=>{let B=u.current;if(u.current=e,(B==="pending"||B==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),b(1)});let P=setTimeout(()=>{f("complete"),h(!1)},i+50);return()=>clearTimeout(P)}B==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),b(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),b(0),f("idle")),e==="failed"&&(h(!1),f("idle")),B===e&&e==="completed"&&(f("complete"),b(1),h(!1))},[e,i]);let x=e==="pending"||e==="generating",m=e==="failed",y=e==="completed",S=s(e==="pending"?"node.preparing":"node.generating"),C=ON(a),v=(0,Qa.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,I=()=>(0,kt.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:d},children:(0,kt.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,kt.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,kt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,kt.jsx)("span",{className:"wf-gsc__progress-text",children:S})})]})}),N=()=>(0,kt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,kt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,kt.jsx)(Jt,{size:24})}),(0,kt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),C?(0,kt.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,kt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,kt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,kt.jsx)(Vn,{size:14}),s("node.regenerate")]}):null]}),A=B=>(0,kt.jsx)("div",{className:`${l} ${B?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,kt.jsxs)("div",{className:`wf-gsc ${x?_:""} ${l}`,children:[(x||w)&&I(),m&&N(),(y||c==="crossfading")&&A(c==="crossfading")]})},dL=BN;var yt=U(ne(),1);function li(e){return e>0?1/e:1}function cL(e,t,a){return!!e&&!t&&a!=="running"}function fL(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var Pr=U(J(),1),pL=24,mL=30,PN={text:Et,image:Yo,video:Za,audio:$t},HN=({label:e,materialType:t,onLabelChange:a,trailing:o})=>{let n=Ce(),r=n(`node.type.${t}`),l=e||r,i=PN[t],{zoom:s}=Ql(),[u,c]=(0,yt.useState)(!1),[f,d]=(0,yt.useState)(l),p=(0,yt.useRef)(null),g=(0,yt.useMemo)(()=>li(s),[s]);(0,yt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,yt.useEffect)(()=>{u||d(l)},[l,u]);let b=(0,yt.useCallback)(S=>{S.stopPropagation(),c(!0),d(l)},[l]),w=(0,yt.useCallback)(()=>{let C=f.trim()||r;c(!1),C!==e&&a&&a(C)},[f,r,e,a]),h=(0,yt.useCallback)(()=>{c(!1),d(l)},[l]),x=(0,yt.useCallback)(S=>{S.key==="Enter"?(S.preventDefault(),w()):S.key==="Escape"&&(S.preventDefault(),h())},[w,h]),m=(0,yt.useCallback)(S=>{let C=S.target.value;C.length<=mL&&d(C)},[]);return(0,Pr.jsxs)("div",{className:"wf-node-header",style:{top:-(pL+4*g),height:pL,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Pr.jsx)("span",{className:"wf-node-header__icon",children:(0,Pr.jsx)(i,{size:14})}),u?(0,Pr.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:w,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:mL}):(0,Pr.jsx)("span",{onDoubleClick:b,className:"wf-node-header__label",title:l.length>20?l:n("node.renameHint"),children:l}),o]})},gL=(0,yt.memo)(HN);var Lf=U(ne(),1);var Ko=U(J(),1),UN=({executionStatus:e,status:t})=>{let a=Ce();return(0,Lf.useMemo)(()=>{switch(e){case"running":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Ko.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});default:return null}},[e,t,a])},hL=(0,Lf.memo)(UN);var Hr=U(ne(),1);function ii(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var wu=U(J(),1);var qN=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,Hr.useMemo)(()=>ii(e,t,a),[e,t,a]),l=(0,Hr.useCallback)(s=>{let u=s.currentTarget;u.naturalWidth>0&&u.naturalHeight>0&&n?.(u.naturalWidth,u.naturalHeight)},[n]),i=(0,Hr.useCallback)(s=>{let u=s.currentTarget;u.videoWidth>0&&u.videoHeight>0&&n?.(u.videoWidth,u.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,wu.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,wu.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,wu.jsx)("div",{className:"wf-media-preview__audio",children:(0,wu.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},xL=(0,Hr.memo)(qN);var yL=U(ne(),1);var Ee=U(J(),1),FN=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=Ce();return e==="text"?(0,Ee.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(Et,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ee.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,Ee.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,Ee.jsx)(Fn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:o("pills.writePrompt")})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,Ee.jsx)(Xs,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:o("pills.scriptGen")})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,Ee.jsx)(uo,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:o("pills.planningGen")})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,Ee.jsx)(ga,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,Ee.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(Ya,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ee.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(co,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ee.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)($t,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},_f=(0,yL.memo)(FN);var ha=U(ne(),1);var st=U(J(),1),VN=({materialType:e,selected:t,onImportFile:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=Ce(),{zoom:i}=Ql(),s=(0,ha.useRef)(null),[u,c]=ha.default.useState(!1),f=(0,ha.useMemo)(()=>li(i),[i]),d=(0,ha.useCallback)(h=>{let x=h.target.files?.[0];x&&a&&a(x),h.target.value=""},[a]),p=(0,ha.useCallback)(()=>{n&&(n(),c(!0),setTimeout(()=>c(!1),1500))},[n]),g=(0,ha.useMemo)(()=>{switch(e){case"image":return"image/*";case"video":return"video/*";case"audio":return"audio/*";default:return"*/*"}},[e]),b=(0,ha.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,st.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:h=>h.stopPropagation(),children:e==="text"?(0,st.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,st.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,st.jsx)(uo,{size:13,className:"wf-floating-top-pill__icon"}),(0,st.jsx)("span",{children:l("pill.textEdit")})]}),(0,st.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,st.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:p,title:l("pill.copy"),children:u?(0,st.jsx)(Ar,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,st.jsx)(Ys,{size:13,className:"wf-floating-top-pill__icon"})}),(0,st.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,st.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,st.jsx)(Un,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,st.jsxs)("div",{className:"wf-floating-top-pill__single",children:[(0,st.jsx)("input",{ref:s,type:"file",accept:g,style:{display:"none"},onChange:d}),(0,st.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>s.current?.click(),children:[(0,st.jsx)(fu,{size:13,className:"wf-floating-top-pill__icon"}),(0,st.jsx)("span",{children:b})]})]})})},bL=(0,ha.memo)(VN);var si=U(ne(),1);var wL=U(ne(),1),vL=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function GN(e,t,a=vL){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function CL({refs:e,excludeSelectors:t=vL,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,wL.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=c=>{let f=c.target;GN(f,r.map(d=>d.current),t)&&a()},i=c=>{c.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var Ah=U(J(),1),XN=480,YN=({children:e,onClose:t,width:a=XN})=>{let{zoom:o}=Ql(),n=(0,si.useRef)(null),r=(0,si.useMemo)(()=>li(o),[o]);return CL({refs:n,onClose:t}),(0,Ah.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,Ah.jsx)("div",{className:"wf-panel-shell__card",children:e})})},SL=(0,si.memo)(YN);var ta=U(ne(),1);var LL=U(ne(),1),ui=U(J(),1),Th={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},ZN=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function KN(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Th[t])return t;for(let a of ZN)if(a.regex.test(t))return a.brand;return null}var _L=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,LL.useMemo)(()=>t&&Th[t.toLowerCase()]?t.toLowerCase():KN(e),[t,e]),i=l?Th[l]:null;if(!i){if(r)return(0,ui.jsx)(ui.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,ui.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,ui.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var IL=U(ne(),1);function If(e){let t=P2(),a=H2();return(0,IL.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(c=>c.id===n);if(!r)return[];let l=r.data||{},i=ii(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",u=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:u,textContent:s}]}),[t,a,e])}var kL=U(ne(),1),ML="wf_capabilities_catalog_v1",jN={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function vu(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(ML);return e?JSON.parse(e):null}catch{return null}}function EL(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(ML,JSON.stringify(e))}catch{}}function AL(e,t,a){return(0,kL.useMemo)(()=>{let n=(a??vu())?.[e]??[],r=n.find(y=>y.id===t)??n[0],l=jN[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",c=y=>y?s.some(S=>S.value===y):!1,f=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],d=i.duration?.defaultValue??f[0]?.value??5,p=y=>typeof y!="number"?!1:f.some(S=>S.value===y),g=i.resolution?.options??[],b=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],h=i.quality?.defaultValue??w[0]?.value??"",x=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:c,durationOptions:f,defaultDuration:d,isDurationValid:p,resolutionOptions:g,defaultResolution:b,qualityOptions:w,defaultQuality:h,hasSoundSupport:x,defaultSound:m}},[e,t,a])}var TL=U(ne(),1);var jo=U(J(),1),WN=({onClick:e,disabled:t,isGenerating:a})=>{let o=Ce();return(0,jo.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,children:[(0,jo.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,jo.jsx)("button",{type:"button",onClick:e,disabled:t,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,jo.jsx)(qn,{size:14,className:"wf-generate-btn__spin"}):(0,jo.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,jo.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,jo.jsx)("path",{d:"M12 19V5"})]})})]})},NL=(0,TL.memo)(WN);var DL=U(ne(),1);var Tt=U(J(),1),QN=({nodeId:e})=>{let t=Ce(),a=If(e);return(0,Tt.jsxs)("div",{className:"wf-ref-slot",children:[(0,Tt.jsxs)("span",{className:"wf-ref-slot__title",children:[(0,Tt.jsx)(au,{size:12}),t("panel.refsTitle")]}),a.length===0?(0,Tt.jsx)("span",{className:"wf-ref-slot__empty",children:t("panel.refsEmpty")}):(0,Tt.jsx)("div",{className:"wf-ref-slot__list",children:a.map(o=>(0,Tt.jsxs)("div",{className:"wf-ref-slot__card",title:o.label,children:[o.url&&o.materialType==="image"?(0,Tt.jsx)("img",{className:"wf-ref-slot__thumb",src:o.url,alt:o.label}):o.url&&o.materialType==="video"?(0,Tt.jsx)("video",{className:"wf-ref-slot__thumb",src:o.url,muted:!0}):o.materialType==="audio"?(0,Tt.jsx)("span",{className:"wf-ref-slot__thumb wf-ref-slot__thumb--icon",children:(0,Tt.jsx)($t,{size:14})}):o.materialType==="text"?(0,Tt.jsx)("span",{className:"wf-ref-slot__thumb wf-ref-slot__thumb--icon",children:(0,Tt.jsx)(Et,{size:14})}):(0,Tt.jsx)("span",{className:"wf-ref-slot__thumb wf-ref-slot__thumb--pending"}),(0,Tt.jsx)("span",{className:"wf-ref-slot__name",children:o.label})]},o.nodeId))})]})},RL=(0,DL.memo)(QN);var j=U(J(),1);function $N(e){let t=(0,j.jsx)(_L,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var JN=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r})=>{let l=Ce(),{materialType:i,selectedTool:s,params:u,prompt:c}=t,[f,d]=(0,ta.useState)(!1),[p,g]=(0,ta.useState)(!1),[b,w]=(0,ta.useState)(!1),h=If(e),x=s==="text-to-music"?"music":"speech",m=(0,ta.useCallback)(T=>{o({selectedTool:T==="music"?"text-to-music":"text-to-audio"})},[o]),y=(0,ta.useMemo)(()=>{let T=a?.[i]??[];return T.length===0&&(i==="text"?T=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:i==="image"?T=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:i==="video"?T=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:i==="audio"&&(T=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),T.map(Y=>{let Z=$N(Y.id),Q=Z.icon,ae=Y.badge??Z.badge,$=Y.subtitle??Z.subtitle;return{value:Y.id,label:Y.label,triggerLabel:(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[Q?(0,j.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:Q}):null,(0,j.jsx)("span",{children:Y.label})]}),icon:Q,badge:ae,subtitle:$}})},[a,i]),S=typeof u.model=="string"?u.model:y[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:v,isAspectRatioValid:_,durationOptions:I,defaultDuration:N,isDurationValid:A,resolutionOptions:B,defaultResolution:P}=AL(i,S,a),L=(0,ta.useCallback)((T,Y)=>{o({params:{...u,[T]:Y}})},[o,u]),M=(0,ta.useCallback)(T=>{let ae=((a??vu())?.[i]??[]).find(H=>H.id===T)?.parameters,$={...u,model:T};u.aspectRatio&&ae?.aspectRatio?.options&&(ae.aspectRatio.options.some(K=>K.value===u.aspectRatio)||($.aspectRatio=ae.aspectRatio.defaultValue||"16:9")),typeof u.duration=="number"&&ae?.duration?.options&&(ae.duration.options.some(K=>K.value===u.duration)||($.duration=ae.duration.defaultValue||ae.duration.options[0]?.value||5)),u.resolution&&ae?.resolution?.options?ae.resolution.options.some(K=>K.value===u.resolution)||($.resolution=ae.resolution.defaultValue||ae.resolution.options[0]?.value):u.resolution&&ae&&!ae.resolution?.options&&delete $.resolution,o({params:$})},[a,i,o,u]),E=(0,ta.useMemo)(()=>{switch(i){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[i]),k=(0,ta.useMemo)(()=>{switch(i){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(x==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[i,x,l]),D=typeof u.aspectRatio=="string"&&_(u.aspectRatio)?u.aspectRatio:v,R=typeof u.duration=="number"&&A(u.duration)?u.duration:N,F=T=>!!T&&B.some(Y=>Y.value===T),V=typeof u.resolution=="string"&&F(u.resolution)?u.resolution:P;return(0,j.jsxs)("div",{className:"wf-config-panel",children:[i==="audio"&&(0,j.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,j.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,j.jsx)(Tr,{size:13}),(0,j.jsx)("span",{children:l("panel.audioGen")})]}),(0,j.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,j.jsx)($t,{size:13}),(0,j.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,j.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,j.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[(0,j.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[h.length>0?h.map(T=>(0,j.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${T.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${T.label} (${T.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,onClick:()=>g(!p),children:[T.url&&T.materialType==="image"?(0,j.jsx)("img",{src:T.url,alt:T.label,className:"wf-config-panel__ref-thumb-media"}):T.url&&T.materialType==="video"?(0,j.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,j.jsx)("video",{src:T.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,j.jsx)(co,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):T.materialType==="audio"?(0,j.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,j.jsx)($t,{size:13})}):T.materialType==="text"?(0,j.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,j.jsx)(Et,{size:13})}):(0,j.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,j.jsx)(Ya,{size:13})}),T.hasMedia&&(0,j.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},T.nodeId)):null,(0,j.jsx)("button",{type:"button",className:`wf-config-panel__ref-btn ${p?"wf-config-panel__ref-btn--active":""}`,onClick:()=>g(!p),title:l("panel.refsTitle"),children:(0,j.jsx)(Ut,{size:14})})]}),(0,j.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>d(!0),title:l("header.fitView"),children:(0,j.jsx)(Js,{size:13})})]}),(0,j.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:c??"",placeholder:k,rows:3,onChange:T=>o({prompt:T.target.value})}),(0,j.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(c||"").length," / ",E]})]}),p&&(0,j.jsx)("div",{className:"wf-config-panel__refs-drawer",children:(0,j.jsx)(RL,{nodeId:e})}),(0,j.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,j.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,j.jsx)(Dr,{className:"wf-param-bar__select wf-param-bar__select--model",value:S,options:y,popupMatchSelectWidth:!1,onChange:T=>M(T)}),i==="image"&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,j.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,j.jsx)(Dr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:D,options:C,popupMatchSelectWidth:!1,onChange:T=>L("aspectRatio",T)})})]}),i==="video"&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,j.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,j.jsx)(Dr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:D,options:C,popupMatchSelectWidth:!1,onChange:T=>L("aspectRatio",T)}),(0,j.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,j.jsx)(Dr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:R,options:I,popupMatchSelectWidth:!1,onChange:T=>L("duration",T)}),B.length>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,j.jsx)(Dr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:V,options:B,popupMatchSelectWidth:!1,onChange:T=>L("resolution",T)})]})]})]}),i==="audio"&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,j.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>w(!b),title:l("panel.advanced"),children:(0,j.jsx)(su,{size:13})})]})]}),(0,j.jsx)("div",{className:"wf-config-panel__action-group",children:(0,j.jsx)(NL,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),b&&(0,j.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,j.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,j.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,j.jsx)(gh,{style:{flex:1},min:1,max:i==="video"?20:60,value:R,onChange:T=>L("duration",T)})]})}),(0,j.jsx)(hh,{title:l("panel.promptPlaceholder"),open:f,onCancel:()=>d(!1),width:680,children:(0,j.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:c??"",placeholder:k,rows:10,onChange:T=>o({prompt:T.target.value})})})]})},zL=(0,ta.memo)(JN);var Ae=U(J(),1),e8=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:u,errorMessage:c}=o,f=o.executionStatus,d=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[b,w]=(0,Ye.useState)(!1),[h,x]=(0,Ye.useState)(!1),[m,y]=(0,Ye.useState)(!1),[S,C]=(0,Ye.useState)(!1),[v,_]=(0,Ye.useState)(null),{setNodes:I}=ma(),N=Fe(X=>X.status==="pending"||X.status==="running"),A=o.nodeWidth??ri(n),B=_h(n),P=WS(A,B),L=v??o.nodeHeight??P,M=(0,Ye.useCallback)(X=>{I(re=>re.map(ce=>ce.id===e?{...ce,data:{...ce.data,...X}}:ce))},[e,I]),E=(0,Ye.useCallback)((X,re)=>{if(X>0&&re>0){let ce=X/re,dt=Math.max(80,Math.min(800,Math.round(A/ce)));_(dt),o.nodeHeight!==dt&&M({nodeHeight:dt})}},[o.nodeHeight,A,M]),k=(0,Ye.useCallback)(()=>{Fe.getState().startNodeExecution?.(e)},[e]),D=Ce(),R=he(X=>X.applyCanvasInputMutation),F=(0,Ye.useMemo)(()=>Cf(n).map(X=>({key:X.key,label:D(X.labelKey),description:D(X.descKey),icon:X.icon})),[n,D]),V=(0,Ye.useCallback)((X,re)=>{let ce=vf(X),dt=re?.flowPosition;if(!ce||!dt)return;let bt=Br(ce.targetMaterialType,dt),Dt=bt.nodes[0];Dt&&R({addNodes:bt.nodes,addEdges:[{source:e,sourceHandle:"out",target:Dt.id,targetHandle:"in"}]})},[R,e]),T=u||i||"",Y=(0,Ye.useCallback)(X=>{if(n==="text"){let re="";X==="script"?re=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:X==="planning"?re=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:X==="prompt"?re=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:X==="storyboard"&&(re=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({content:re,prompt:re,status:re.trim()?"ready":"empty",generatedContent:void 0})}},[n,M]),Z=(0,Ye.useCallback)(X=>{let re=URL.createObjectURL(X);if(X.type.startsWith("image/")){let ce=new Image;ce.src=re,ce.onload=()=>{ce.naturalWidth>0&&ce.naturalHeight>0&&E(ce.naturalWidth,ce.naturalHeight)}}else if(X.type.startsWith("video/")){let ce=document.createElement("video");ce.src=re,ce.onloadedmetadata=()=>{ce.videoWidth>0&&ce.videoHeight>0&&E(ce.videoWidth,ce.videoHeight)}}M({mediaUrl:re,status:"ready",content:X.name})},[E,M]),Q=(0,Ye.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!0)},[]),ae=(0,Ye.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!1)},[]),$=(0,Ye.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!1);let re=X.dataTransfer.files?.[0];re&&Z(re)},[Z]),H=(0,Ye.useCallback)(()=>{T&&navigator.clipboard.writeText(T).catch(()=>{})},[T]),K=(0,Ye.useCallback)(()=>{if(!T)return;let X=T.split(`

`).filter(re=>re.trim().length>0);X.length>1&&M({content:X.join(`
---
`)})},[T,M]);(0,Ye.useEffect)(()=>{a||(y(!1),C(!1))},[a]);let se=cL(a,m,f),ie=ii(n,p,s),ee=fL(f,r,!!ie),oe=n==="video"?"video":n==="audio"?"audio":"square";return(0,Ae.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:A},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(b||a)&&(0,Ae.jsx)(bL,{materialType:n,selected:a,onImportFile:Z,onStartTextEdit:()=>C(!0),onCopyText:H,onSplitText:K}),(0,Ae.jsx)(Eh,{side:"left",nodeHovered:b}),(0,Ae.jsx)(gL,{label:l,materialType:n,onLabelChange:X=>M({label:X}),trailing:(0,Ae.jsx)(hL,{executionStatus:f,status:r})}),(0,Ae.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:A,height:L},onDragOver:Q,onDragLeave:ae,onDrop:$,children:[a&&(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Ae.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Ae.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Ae.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,Ae.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:T||S?(0,Ae.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${S?" nodrag":""}`,readOnly:!S,value:T,placeholder:D("node.textPlaceholder"),autoFocus:S,onMouseDown:X=>{S||X.preventDefault()},onDoubleClick:X=>{X.stopPropagation(),C(!0),X.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:X=>M({content:X.target.value,status:X.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,Ae.jsx)(_f,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:Y})}),n!=="text"&&(ee?(0,Ae.jsx)("div",{className:"wf-material-node__media",children:(0,Ae.jsx)(dL,{status:ee,loadingAspectRatio:oe,errorMessage:d??c,taskId:o.taskId,onRetry:k,children:ie?(0,Ae.jsx)(xL,{materialType:n,mediaAssets:p,mediaUrl:s,label:l,onMediaSizeChange:E}):(0,Ae.jsx)(_f,{materialType:n,onApplyPreset:Y})})}):(0,Ae.jsx)("div",{className:"wf-material-node__media",children:(0,Ae.jsx)(_f,{materialType:n,onApplyPreset:Y})})),n==="text"&&(c||d)&&(0,Ae.jsx)("div",{className:"wf-material-node__error",children:d??c})]}),se&&(0,Ae.jsx)(SL,{onClose:()=>y(!0),children:(0,Ae.jsx)(zL,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:k,execBusy:N})}),(0,Ae.jsx)(Eh,{side:"right",nodeHovered:b,options:F,onSelect:V})]})},OL=(0,Ye.memo)(e8);var BL={type:"material",component:OL,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>sf("text",{status:"empty",nodeWidth:ri("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var Nt=U(J(),1);iL(BL);var t8=sL(),a8={animated:zS},PL={maxZoom:1},o8={x:0,y:0,zoom:1},n8=[1,2],r8=96,l8=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:u}=ma(),{nodes:c,edges:f,onNodesChange:d,onEdgesChange:p}=CS(),g=he(W=>W.applyCanvasInputMutation),b=he(W=>W.setNodes),w=he(W=>W.setSelectedElement),h=he(W=>W.pushHistory),x=he(W=>W.undo),m=he(W=>W.redo),y=SS(),S=LS(),[C,v]=(0,Ze.useState)(null),[_,I]=(0,Ze.useState)(!1),[N,A]=(0,Ze.useState)(!1),[B,P]=(0,Ze.useState)(!1),[L,M]=(0,Ze.useState)(!1),[E,k]=(0,Ze.useState)(void 0),[D,R]=(0,Ze.useState)("select"),F=(0,Ze.useRef)(0),V=(0,Ze.useMemo)(()=>c.some(W=>W.selected),[c]),T=nL(b,w),Y=Ce(),Z=Y("menu.generateFromNode"),{menuState:Q,onConnectStart:ae,onConnectEnd:$,onMenuSelect:H,onMenuClose:K}=eL({onReject:v});(0,Ze.useEffect)(()=>{h()},[c,f,h]);let se=(0,Ze.useMemo)(()=>e?c.map(W=>({...W,data:{...W.data,__catalog:e}})):c,[c,e]),ie=(0,Ze.useCallback)(W=>{let Re=g({addEdges:[W]});if(Re.status==="rejected"){let Ke=Y(wf(Re.reasonCode));v(Ke),ai.warning(Ke)}else v(null)},[g,Y]),ee=(0,Ze.useCallback)(W=>{let Re=he.getState();return ZS(W,Re.nodes,Re.edges)},[]),oe=(0,Ze.useCallback)((W,Re)=>{let Ke=F.current,Ba=Re??{x:120+Ke%3*420,y:120+Math.floor(Ke/3)*360},Zn=Br(W,Ba);Zn.nodes.length!==0&&(F.current+=1,b(Kn=>$S(Kn,Zn.nodes)))},[b]),xe=(0,Ze.useCallback)(W=>{let Re=W.nodes.map(Ba=>Ba.id),Ke=W.edges.map(Ba=>Ba.id);Re.length===0&&Ke.length===0||g({removeNodeIds:Re,removeEdgeIds:Ke})},[g]),{menu:X,handleNodeContextMenu:re,handlePaneContextMenu:ce,handleSelectionContextMenu:dt,closeMenu:bt,handleMenuAction:Dt,handleAddNodeFromMenu:Oa}=rL({screenToFlowPosition:i,setNodes:b,copySelectedNodes:T.copySelectedNodes,pasteNodes:T.pasteNodes,duplicateSelectedNodes:T.duplicateSelectedNodes,deleteSelectedNodes:T.deleteSelectedNodes,selectAllNodes:T.selectAllNodes,clearSelection:T.clearSelection,undo:x,redo:m,onExecuteNodeIds:t,onAddNode:oe}),Yn=(0,Ze.useCallback)(W=>{let Re=W.type==="video"?"video":W.type==="image"?"image":"text",Ke=F.current++,Ba={x:200+Ke%4*50,y:200+Ke%4*40},Kn=Br(Re,Ba,{title:W.name,content:W.path,previewUrl:W.previewUrl,status:"ready"}).nodes[0];Kn&&(g({addNodes:[Kn]}),w("node",Kn.id),ai.success(Y("toolbar.assets")+": "+W.name))},[g,w,Y]);YS({onCopy:T.copySelectedNodes,onPaste:()=>T.pasteNodes(),onSelectAll:T.selectAllNodes,onDeleteSelected:T.deleteSelectedNodes,onClearSelection:T.clearSelection,onDuplicate:T.duplicateSelectedNodes,onUndo:x,onRedo:m,hasSelection:V,onToggleAssets:()=>A(W=>!W),onToggleShortcuts:()=>P(W=>!W),onToggleMinimap:()=>I(W=>!W),onToggleAddMenu:()=>M(W=>!W),onSetPointerMode:W=>R(W),onFitView:()=>s(PL),onResetZoom:()=>u(1),onCategoryKey:W=>{A(!0),k(W)}});let bo=(0,Ze.useCallback)((W,Re)=>{w("node",Re.id)},[w]),wo=(0,Ze.useCallback)(()=>{w("none",null),bt()},[w,bt]),aa=(0,Ze.useCallback)(()=>{b(W=>W.map((Re,Ke)=>({...Re,position:{x:120+Ke%3*440,y:120+Math.floor(Ke/3)*360}})))},[b]);return(0,Nt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Nt.jsx)(B2,{nodes:se,edges:f,onNodesChange:d,onEdgesChange:p,onConnect:ie,isValidConnection:ee,onConnectStart:ae,onConnectEnd:$,onNodeClick:bo,onPaneClick:wo,onNodeContextMenu:re,onPaneContextMenu:ce,onSelectionContextMenu:dt,onDelete:xe,nodeTypes:t8,edgeTypes:a8,fitView:!0,fitViewOptions:PL,defaultViewport:o8,minZoom:Lh.minZoom,maxZoom:Lh.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:D==="pan"?!0:n8,panOnScroll:!0,panOnScrollMode:Ga.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:D==="select",selectionMode:Xo.Partial,defaultEdgeOptions:lf,connectOnClick:!1,connectionRadius:r8,onlyRenderVisibleElements:!0,children:(0,Nt.jsx)(q2,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:so.Dots})}),(0,Nt.jsx)(BS,{isMinimapOpen:_,onToggleMinimap:()=>I(W=>!W),onAlignGrid:aa,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Nt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Nt.jsx)(G2,{pannable:!0,zoomable:!0})}),(0,Nt.jsx)(OS,{onAddNode:oe,onUndo:x,onRedo:m,canUndo:y,canRedo:S,pointerMode:D,onPointerModeChange:R,onToggleAssets:()=>A(W=>!W),onToggleShortcuts:()=>P(W=>!W),isAssetsOpen:N,isShortcutsOpen:B,isAddMenuOpen:L,onToggleAddMenu:()=>M(W=>!W)}),(0,Nt.jsx)(PS,{isOpen:N,onClose:()=>A(!1),onInsertAsset:Yn,selectedCategoryIndex:E}),(0,Nt.jsx)(HS,{isOpen:B,onClose:()=>P(!1)}),(0,Nt.jsx)(GS,{x:X.x,y:X.y,visible:X.visible,context:X.context,onClose:bt,onAction:Dt,onAddNode:Oa,canUndo:y,canRedo:S,hasClipboard:T.hasClipboard,hasSelection:V}),(0,Nt.jsx)(bf,{visible:Q.visible,x:Q.x,y:Q.y,title:Z,options:Q.options,onSelect:H,onClose:K}),C&&(0,Nt.jsx)("div",{className:"wf-rejected-toast",children:C})]})},i8=e=>(0,Nt.jsx)(fh,{children:(0,Nt.jsx)(l8,{...e})}),HL=i8;var ut=U(ne(),1);var $a="/omnimux-workflow";var xa={manifest:`${$a}/api/manifest`,canvasJs:`${$a}/canvas.js`,workspaces:`${$a}/api/workspaces`,workspace:e=>`${$a}/api/workspaces/${e}`,workspaceVersion:e=>`${$a}/api/workspaces/${e}/version`,capabilities:`${$a}/api/capabilities`,media:`${$a}/media`,executions:e=>`${$a}/api/workspaces/${e}/executions`,execution:(e,t)=>`${$a}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${$a}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${$a}/api/workspaces/${e}/executions/${t}/events`};async function yo(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function UL(){return yo(xa.capabilities)}function qL(){return yo(xa.workspaces)}function Nh(e,t){return yo(xa.workspaces,{method:"POST",body:{name:e,id:t}})}function Cu(e){return yo(xa.workspace(encodeURIComponent(e)))}function FL(e){return yo(xa.workspaceVersion(encodeURIComponent(e)))}function VL(e,t){return yo(xa.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function GL(e,t={}){return yo(xa.executions(encodeURIComponent(e)),{method:"POST",body:t})}function XL(e){return yo(xa.executions(encodeURIComponent(e)))}function YL(e,t){return yo(xa.execution(encodeURIComponent(e),encodeURIComponent(t)))}function ZL(e,t,a){return yo(xa.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var KL=new Set(["pending","running","paused"]),s8=new Set(["completed","error","cancelled"]);function Su(e,t){let a=he.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function jL(e){let t=(0,ut.useRef)(null),a=(0,ut.useRef)(e);a.current=e;let o=(0,ut.useCallback)(()=>{t.current&&(t.current.close(),t.current=null)},[]),n=(0,ut.useCallback)((g,b)=>{Fe.getState().setExecution({status:g,error:b,progress:{...Fe.getState().progress,percentage:g==="completed"?100:Fe.getState().progress.percentage}})},[]),r=(0,ut.useCallback)((g,b)=>{let w;try{w=JSON.parse(b)}catch{return}let h=Fe.getState();switch(g){case"execution_start":{h.setExecution({status:"running",error:null,progress:{total:w.totalNodes??0,completed:0,running:0,pending:w.totalNodes??0,percentage:0}});break}case"node_start":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"running"),h.setExecution({progress:{...h.progress,running:h.progress.running+1,pending:Math.max(0,h.progress.pending-1)}}),Su(w.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"completed"),h.setExecution({progress:{...h.progress,completed:h.progress.completed+1,running:Math.max(0,h.progress.running-1),percentage:w.progress??h.progress.percentage}});let x=w.output??{},m={executionStatus:"completed",executionError:void 0};if(x.text&&(m.generatedContent=x.text),x.mediaAssets&&x.mediaAssets.length>0){let y=x.mediaAssets[0];m.mediaAssets=x.mediaAssets,y.type==="image"&&(m.mediaUrl=y.url),m.taskId=`exec-${w.executionId??""}`}Su(w.nodeId,m);break}case"node_error":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"error"),h.setExecution({progress:{...h.progress,running:Math.max(0,h.progress.running-1)}}),Su(w.nodeId,{executionStatus:"error",executionError:w.error??Zo("error.nodeExecutionFailed")});break}case"node_skipped":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"skipped"),Su(w.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{h.setExecution({status:"paused"});break}case"execution_resumed":{h.setExecution({status:"running"});break}case"execution_complete":{n("completed",null),o();break}case"execution_error":{n("error",w.error??Zo("error.executionFailed")),o();break}case"execution_cancelled":{n("cancelled",null),o();break}default:break}},[n,o]),l=(0,ut.useCallback)(g=>{o();let b=a.current;if(!b)return;let w=new EventSource(xa.executionEvents(encodeURIComponent(b),encodeURIComponent(g)));t.current=w;let h=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let x of h)w.addEventListener(x,m=>{r(x,m.data)});w.onerror=()=>{let x=Fe.getState().status;s8.has(x)&&o()}},[o,r]),i=(0,ut.useCallback)(g=>{let b=Fe.getState();b.setExecution({executionId:g.id,status:g.status,error:g.error,progress:{total:g.progress.total,completed:g.progress.completed,running:g.progress.running,pending:g.progress.pending,percentage:g.progress.percentage}});for(let[w,h]of Object.entries(g.nodeStates??{})){b.setNodeStatus(w,h.status);let x={executionStatus:h.status};h.status==="error"&&h.error&&(x.executionError=h.error);let m=g.nodeOutputs?.[w];m&&(m.text&&(x.generatedContent=m.text),m.mediaAssets&&m.mediaAssets.length>0&&(x.mediaAssets=m.mediaAssets,m.mediaAssets[0]&&m.mediaAssets[0].type==="image"&&(x.mediaUrl=m.mediaAssets[0].url))),Su(w,x)}},[]),s=(0,ut.useCallback)(async(g={})=>{let b=a.current;if(!b)return;o(),Fe.getState().resetExecution(),Fe.getState().setExecution({status:"pending"});let w=await GL(b,{mode:g.mode??"full",nodeIds:g.nodeIds});if(!w.ok||!w.body.execution){Fe.getState().setExecution({status:"error",error:w.body.message??Zo("error.createExecutionFailed")});return}Fe.getState().setExecution({executionId:w.body.execution.id}),l(w.body.execution.id)},[o,l]),u=(0,ut.useCallback)(async g=>{let b=a.current,{executionId:w}=Fe.getState();if(!b||!w)return;let h=await ZL(b,w,g);!h.ok&&h.body.message&&Fe.getState().setExecution({error:h.body.message})},[]),c=(0,ut.useCallback)(()=>u("pause"),[u]),f=(0,ut.useCallback)(()=>u("resume"),[u]),d=(0,ut.useCallback)(()=>u("cancel"),[u]),p=(0,ut.useCallback)(()=>{o(),Fe.getState().resetExecution()},[o]);return(0,ut.useEffect)(()=>{if(!e)return;let g=!1;return(async()=>{try{let b=await XL(e);if(g||!b.ok)return;let w=(b.body.executions??[]).find(x=>KL.has(x.status));if(!w)return;let h=await YL(e,w.id);if(g||!h.ok||!h.body.execution)return;i(h.body.execution),KL.has(h.body.execution.status)&&l(w.id)}catch{}})(),()=>{g=!0}},[e,i,l]),(0,ut.useEffect)(()=>(Fe.getState().setStartNodeExecution(b=>{s({mode:"subset",nodeIds:[b]})}),()=>{Fe.getState().setStartNodeExecution(null)}),[s]),(0,ut.useEffect)(()=>o,[o]),{startExecution:s,pause:c,resume:f,cancel:d,reset:p}}var Ur=U(ne(),1);function WL(e={}){let t=e.workspaceId,[a,o]=(0,Ur.useState)({phase:"loading"}),[n,r]=(0,Ur.useState)(()=>vu()),l=he(c=>c.hydrateGraph),i=he(c=>c.resetStore),s=he(c=>c.nodes.length),u=(0,Ur.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Ur.useEffect)(()=>{let c=!1;return o({phase:"loading"}),(async()=>{try{if(UL().then(g=>{!c&&g.ok&&(r(g.body),EL(g.body))}),t){let g=await Cu(t);if(c)return;if(g.ok&&g.body.workspace){l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace});return}let b=await Nh("\u5DE5\u4F5C\u6D41",t);if(c)return;if(!b.ok||!b.body.workspace)throw new Error(b.body.message??Zo("error.createWorkspaceFailed"));l(b.body.workspace.nodes,b.body.workspace.edges),o({phase:"ready",workspace:b.body.workspace});return}let f=await qL();if(c)return;let d=f.body.workspaces?.[0]?.id;if(!d){let g=await Nh("\u6211\u7684\u5DE5\u4F5C\u6D41");if(c)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??Zo("error.createWorkspaceFailed"));d=g.body.workspace.id}let p=await Cu(d);if(c)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??Zo("error.loadWorkspaceFailed"));l(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(f){c||o({phase:"error",message:f instanceof Error?f.message:String(f)})}})(),()=>{c=!0,u.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var Ve=U(ne(),1);function kf(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function Dh(e){return e.map(t=>{let a=t,o=kf(a.data);delete o.__catalog;let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=kf(a.style)),n})}function Rh(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=kf(a.data)),a.style&&typeof a.style=="object"&&(o.style=kf(a.style)),o})}function Wo(e,t){return JSON.stringify({nodes:Dh(e),edges:Rh(t)})}var u8=1e3,d8=2500,c8=3e3;function di(){let{nodes:e,edges:t}=he.getState(),a=yh(e,t);return{nodes:a.nodes,edges:a.edges}}function QL(e,t={}){let a=t.enabled!==!1,[o,n]=(0,Ve.useState)("idle"),[r,l]=(0,Ve.useState)(!1),i=(0,Ve.useRef)(e),s=(0,Ve.useRef)(0),u=(0,Ve.useRef)(""),c=(0,Ve.useRef)(0),f=(0,Ve.useRef)(""),d=(0,Ve.useRef)(null),p=(0,Ve.useRef)(null),g=(0,Ve.useRef)(!1),b=(0,Ve.useRef)(a);b.current=a;let w=(0,Ve.useRef)(t.onSaved);w.current=t.onSaved,(0,Ve.useEffect)(()=>{i.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=Wo(e.nodes,e.edges),c.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,Ve.useCallback)(async(v,_,I=!1)=>{let N=i.current;if(!N||!I&&!b.current||g.current)return;let A=mf({lastSavedNodeCount:c.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:u.current,nextSignature:Wo(v.nodes,v.edges)});if(!A.persist||!A.snapshot)return;let{nodes:B,edges:P}=A.snapshot,L=N.name;g.current=!0,n("saving");try{let M=await VL(N.id,{name:L,nodes:Dh(B),edges:Rh(P),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,u.current=Wo(B,P),c.current=B.length,l(!1),n("saved"),h(),p.current=setTimeout(()=>{n(E=>E==="saved"?"idle":E)},d8),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,Ve.useEffect)(()=>{if(!a)return;let v=(I="autosave")=>{if(!i.current||!b.current)return;let A=di(),P=Wo(A.nodes,A.edges)!==u.current;if(l(P),!P){d.current&&(clearTimeout(d.current),d.current=null),n(k=>k==="pending"?"idle":k);return}let L=xu(A.nodes.length,I);if(!xh({lastSavedNodeCount:c.current,nextNodeCount:A.nodes.length,cause:L})){d.current&&(clearTimeout(d.current),d.current=null),l(!1),n(k=>k==="pending"?"idle":k);return}n(k=>k==="saving"||k==="conflict"?k:"pending"),d.current&&clearTimeout(d.current);let M={nodes:A.nodes,edges:A.edges},E=L;d.current=setTimeout(()=>{d.current=null,x(M,E)},u8)},_=he.subscribe(()=>{v("autosave")});return()=>{_(),d.current&&(clearTimeout(d.current),d.current=null)}},[x,a]),(0,Ve.useEffect)(()=>{if(!a)return;let v=()=>{if(!b.current||!i.current)return;let I=di(),N=xu(I.nodes.length,"flush"),A=mf({lastSavedNodeCount:c.current,nextNodes:I.nodes,nextEdges:I.edges,cause:N,lastSavedSignature:u.current,nextSignature:Wo(I.nodes,I.edges)});!A.persist||!A.snapshot||x(A.snapshot,N)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),h()}},[x,a]);let m=(0,Ve.useCallback)(async()=>{d.current&&(clearTimeout(d.current),d.current=null);let v=di();await x(v,xu(v.nodes.length,"autosave"))},[x]),y=(0,Ve.useCallback)(()=>{if(d.current&&(clearTimeout(d.current),d.current=null),!i.current)return;let _=di(),I="flush",N=mf({lastSavedNodeCount:c.current,nextNodes:_.nodes,nextEdges:_.edges,cause:I,lastSavedSignature:u.current,nextSignature:Wo(_.nodes,_.edges)});!N.persist||!N.snapshot||x(N.snapshot,I,!0)},[x]),S=(0,Ve.useCallback)(async()=>{let v=di();await x(v,xu(v.nodes.length,"autosave"))},[x]),C=(0,Ve.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await Cu(v.id);if(!_.ok||!_.body.workspace){n("error");return}let I=_.body.workspace;s.current=I.version,u.current=Wo(I.nodes,I.edges),c.current=I.nodes.length,he.getState().hydrateGraph(I.nodes,I.edges),l(!1),n("idle"),w.current?.(I)},[]);return(0,Ve.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!b.current||typeof document<"u"&&document.visibilityState==="hidden")return;let N=i.current;if(!(!N||g.current)){v=!0;try{let A=await FL(N.id);if(!A.ok||typeof A.body.version!="number"||A.body.version<=s.current)return;let B=di();if(Wo(B.nodes,B.edges)!==u.current){s.current=A.body.version,n("conflict");return}await C()}catch{}finally{v=!1}}},I=setInterval(()=>{_()},c8);return()=>clearInterval(I)},[a,C]),{status:o,isDirty:r,saveNow:m,flushPendingSave:y,resolveConflict:S,reloadFromServer:C}}var Ft=U(J(),1),f8=({locale:e,workspaceId:t})=>{let a=Ce(),o=(0,ci.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=WL({workspaceId:t,beforeReset:()=>{o.current()}});(0,ci.useEffect)(()=>{DS(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=jL(i?i.id:null),u=(0,ci.useCallback)(f=>{r(d=>d.phase==="ready"?{phase:"ready",workspace:f}:d)},[r]),c=QL(i,{onSaved:u,enabled:n.phase==="ready"});return o.current=c.flushPendingSave,n.phase==="loading"?(0,Ft.jsx)("div",{className:"wf-canvas-root",children:(0,Ft.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Ft.jsx)("div",{className:"wf-canvas-root",children:(0,Ft.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Ft.jsx)("span",{children:n.message}),(0,Ft.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Ft.jsxs)("div",{className:"wf-canvas-root",children:[c.status==="conflict"?(0,Ft.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Ft.jsx)("span",{children:a("app.conflictBanner")}),(0,Ft.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{c.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Ft.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{c.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Ft.jsx)("main",{className:"wf-canvas-main",children:(0,Ft.jsx)(HL,{catalog:l,onExecuteNodeIds:f=>{s.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{s.startExecution({mode:"full"})},onPauseExecution:()=>{s.pause()},onResumeExecution:()=>{s.resume()},onCancelExecution:()=>{s.cancel()},onResetExecution:s.reset})})]})},zh=f8;var $L=`/* this gets exported as style.css and can be used for the default theming */
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
`;var JL=`/**
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

`;var e_=`/**
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
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;
}

.wf-config-panel__ref-thumb-slot:hover {
  border-color: var(--wb-border-strong);
  transform: translateY(-1px);
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
  background: #10b981;
  box-shadow: 0 0 4px #10b981;
}

.wf-config-panel__ref-btn {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: 1.5px dashed var(--wb-border-strong);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wb-text-muted);
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-config-panel__ref-btn:hover,
.wf-config-panel__ref-btn--active {
  border-color: var(--wb-accent);
  color: var(--wb-accent);
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

/* \u53C2\u8003\u5A92\u4F53\u69FD\u4F4D\uFF08T2.5\uFF1A\u5B9E\u7EBF\u69FD\u5361\u7247 + 32px \u7F29\u7565\u56FE\uFF09 */
.wf-ref-slot {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--wb-border);
  background: var(--wb-surface-raised);
}

.wf-ref-slot__title {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: var(--wb-fs-caption);
  font-weight: 500;
  color: var(--wb-text-secondary);
}

.wf-ref-slot__empty {
  font-size: var(--wb-fs-caption);
  line-height: 1.5;
  color: var(--wb-text-muted);
}

.wf-ref-slot__list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.wf-ref-slot__card {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px 3px 3px;
  border-radius: 8px;
  border: 1px solid var(--wb-border);
  background: var(--wb-panel-inner);
  max-width: 170px;
}

.wf-ref-slot__thumb {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--wb-text-muted);
  background: var(--wb-border);
}

.wf-ref-slot__thumb--pending {
  background: var(--wb-border);
}

.wf-ref-slot__name {
  font-size: var(--wb-fs-caption);
  color: var(--wb-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

/* \u6267\u884C\u63A7\u5236\u4E3B\u6309\u94AE\uFF08\u95F2\u6001\u65F6\u4E3A\u7EAF\u5706\u5F62\u56FE\u6807\uFF09 */
.wf-header-capsule--exec.wf-header-capsule--idle {
  padding: 3px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  justify-content: center;
}

.wf-header-capsule__btn--run-all {
  border-radius: 50%;
  color: var(--wb-text-primary);
}

.wf-header-capsule__btn--run-all:hover:not(:disabled) {
  background: var(--wb-dock-item-hover);
  color: var(--wb-accent);
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


`;var h8=[{id:"omnimux-workflow-xyflow-base",css:$L},{id:"omnimux-workflow-theme",css:JL},{id:"omnimux-workflow-components",css:e_}];function t_(){for(let{id:e,css:t}of h8){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Oh=U(J(),1),Lu=new WeakMap;function x8(e,t){if(!e||Lu.has(e))return;t_();let a=(0,a_.createRoot)(e);Lu.set(e,{root:a,lastProps:t}),a.render((0,Oh.jsx)(zh,{...t}))}function y8(e,t){let a=Lu.get(e);a&&(a.lastProps=t,a.root.render((0,Oh.jsx)(zh,{...t})))}function b8(e){let t=Lu.get(e);t&&(t.root.unmount(),Lu.delete(e))}return cI(w8);})();
