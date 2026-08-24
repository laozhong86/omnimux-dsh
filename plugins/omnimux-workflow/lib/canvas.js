var __omnimuxWorkflowCanvas=(()=>{var dI=Object.create;var Eu=Object.defineProperty;var cI=Object.getOwnPropertyDescriptor;var fI=Object.getOwnPropertyNames;var pI=Object.getPrototypeOf,mI=Object.prototype.hasOwnProperty;var Vt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},gI=(e,t)=>{for(var a in t)Eu(e,a,{get:t[a],enumerable:!0})},jh=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of fI(t))!mI.call(e,n)&&n!==a&&Eu(e,n,{get:()=>t[n],enumerable:!(o=cI(t,n))||o.enumerable});return e};var U=(e,t,a)=>(a=e!=null?dI(pI(e)):{},jh(t||!e||!e.__esModule?Eu(a,"default",{value:e,enumerable:!0}):a,e)),hI=e=>jh(Eu({},"__esModule",{value:!0}),e);var rx=Vt(Ge=>{"use strict";function Of(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<Au(n,t))e[o]=t,e[a]=n,a=o;else break e}}function Ja(e){return e.length===0?null:e[0]}function Nu(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,u=e[s];if(0>Au(i,a))s<n&&0>Au(u,i)?(e[o]=u,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>Au(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function Au(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Wh=performance,Ge.unstable_now=function(){return Wh.now()}):(Df=Date,Qh=Df.now(),Ge.unstable_now=function(){return Df.now()-Qh});var Wh,Df,Qh,vo=[],$o=[],xI=1,ya=null,Mt=3,Bf=!1,mi=!1,gi=!1,Pf=!1,ex=typeof setTimeout=="function"?setTimeout:null,tx=typeof clearTimeout=="function"?clearTimeout:null,$h=typeof setImmediate<"u"?setImmediate:null;function Tu(e){for(var t=Ja($o);t!==null;){if(t.callback===null)Nu($o);else if(t.startTime<=e)Nu($o),t.sortIndex=t.expirationTime,Of(vo,t);else break;t=Ja($o)}}function Hf(e){if(gi=!1,Tu(e),!mi)if(Ja(vo)!==null)mi=!0,Vr||(Vr=!0,Fr());else{var t=Ja($o);t!==null&&Uf(Hf,t.startTime-e)}}var Vr=!1,hi=-1,ax=5,ox=-1;function nx(){return Pf?!0:!(Ge.unstable_now()-ox<ax)}function Rf(){if(Pf=!1,Vr){var e=Ge.unstable_now();ox=e;var t=!0;try{e:{mi=!1,gi&&(gi=!1,tx(hi),hi=-1),Bf=!0;var a=Mt;try{t:{for(Tu(e),ya=Ja(vo);ya!==null&&!(ya.expirationTime>e&&nx());){var o=ya.callback;if(typeof o=="function"){ya.callback=null,Mt=ya.priorityLevel;var n=o(ya.expirationTime<=e);if(e=Ge.unstable_now(),typeof n=="function"){ya.callback=n,Tu(e),t=!0;break t}ya===Ja(vo)&&Nu(vo),Tu(e)}else Nu(vo);ya=Ja(vo)}if(ya!==null)t=!0;else{var r=Ja($o);r!==null&&Uf(Hf,r.startTime-e),t=!1}}break e}finally{ya=null,Mt=a,Bf=!1}t=void 0}}finally{t?Fr():Vr=!1}}}var Fr;typeof $h=="function"?Fr=function(){$h(Rf)}:typeof MessageChannel<"u"?(zf=new MessageChannel,Jh=zf.port2,zf.port1.onmessage=Rf,Fr=function(){Jh.postMessage(null)}):Fr=function(){ex(Rf,0)};var zf,Jh;function Uf(e,t){hi=ex(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ax=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return Mt};Ge.unstable_next=function(e){switch(Mt){case 1:case 2:case 3:var t=3;break;default:t=Mt}var a=Mt;Mt=t;try{return e()}finally{Mt=a}};Ge.unstable_requestPaint=function(){Pf=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Mt;Mt=e;try{return t()}finally{Mt=a}};Ge.unstable_scheduleCallback=function(e,t,a){var o=Ge.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:xI++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Of($o,e),Ja(vo)===null&&e===Ja($o)&&(gi?(tx(hi),hi=-1):gi=!0,Uf(Hf,a-o))):(e.sortIndex=n,Of(vo,e),mi||Bf||(mi=!0,Vr||(Vr=!0,Fr()))),e};Ge.unstable_shouldYield=nx;Ge.unstable_wrapCallback=function(e){var t=Mt;return function(){var a=Mt;Mt=t;try{return e.apply(this,arguments)}finally{Mt=a}}}});var ix=Vt((T8,lx)=>{"use strict";lx.exports=rx()});var yx=Vt(ce=>{"use strict";var Vf=Symbol.for("react.transitional.element"),yI=Symbol.for("react.portal"),bI=Symbol.for("react.fragment"),wI=Symbol.for("react.strict_mode"),vI=Symbol.for("react.profiler"),CI=Symbol.for("react.consumer"),SI=Symbol.for("react.context"),LI=Symbol.for("react.forward_ref"),_I=Symbol.for("react.suspense"),II=Symbol.for("react.memo"),fx=Symbol.for("react.lazy"),kI=Symbol.for("react.activity"),sx=Symbol.iterator;function MI(e){return e===null||typeof e!="object"?null:(e=sx&&e[sx]||e["@@iterator"],typeof e=="function"?e:null)}var px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mx=Object.assign,gx={};function Xr(e,t,a){this.props=e,this.context=t,this.refs=gx,this.updater=a||px}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hx(){}hx.prototype=Xr.prototype;function Gf(e,t,a){this.props=e,this.context=t,this.refs=gx,this.updater=a||px}var Xf=Gf.prototype=new hx;Xf.constructor=Gf;mx(Xf,Xr.prototype);Xf.isPureReactComponent=!0;var ux=Array.isArray;function Ff(){}var Be={H:null,A:null,T:null,S:null},xx=Object.prototype.hasOwnProperty;function Yf(e,t,a){var o=a.ref;return{$$typeof:Vf,type:e,key:t,ref:o!==void 0?o:null,props:a}}function EI(e,t){return Yf(e.type,t,e.props)}function Zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vf}function AI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var dx=/\/+/g;function qf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?AI(""+e.key):t.toString(36)}function TI(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ff,Ff):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Gr(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vf:case yI:l=!0;break;case fx:return l=e._init,Gr(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+qf(e,0):o,ux(n)?(a="",l!=null&&(a=l.replace(dx,"$&/")+"/"),Gr(n,t,a,"",function(u){return u})):n!=null&&(Zf(n)&&(n=EI(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(dx,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(ux(e))for(var s=0;s<e.length;s++)o=e[s],r=i+qf(o,s),l+=Gr(o,t,a,r,n);else if(s=MI(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+qf(o,s++),l+=Gr(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Gr(TI(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function Du(e,t,a){if(e==null)return e;var o=[],n=0;return Gr(e,o,"","",function(r){return t.call(a,r,n++)}),o}function NI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var cx=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},DI={map:Du,forEach:function(e,t,a){Du(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Du(e,function(){t++}),t},toArray:function(e){return Du(e,function(t){return t})||[]},only:function(e){if(!Zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Activity=kI;ce.Children=DI;ce.Component=Xr;ce.Fragment=bI;ce.Profiler=vI;ce.PureComponent=Gf;ce.StrictMode=wI;ce.Suspense=_I;ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Be;ce.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Be.H.useMemoCache(e)}};ce.cache=function(e){return function(){return e.apply(null,arguments)}};ce.cacheSignal=function(){return null};ce.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=mx({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!xx.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return Yf(e.type,n,o)};ce.createContext=function(e){return e={$$typeof:SI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:CI,_context:e},e};ce.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)xx.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return Yf(e,r,n)};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:LI,render:e}};ce.isValidElement=Zf;ce.lazy=function(e){return{$$typeof:fx,_payload:{_status:-1,_result:e},_init:NI}};ce.memo=function(e,t){return{$$typeof:II,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Be.T,a={};Be.T=a;try{var o=e(),n=Be.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Ff,cx)}catch(r){cx(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Be.T=t}};ce.unstable_useCacheRefresh=function(){return Be.H.useCacheRefresh()};ce.use=function(e){return Be.H.use(e)};ce.useActionState=function(e,t,a){return Be.H.useActionState(e,t,a)};ce.useCallback=function(e,t){return Be.H.useCallback(e,t)};ce.useContext=function(e){return Be.H.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e,t){return Be.H.useDeferredValue(e,t)};ce.useEffect=function(e,t){return Be.H.useEffect(e,t)};ce.useEffectEvent=function(e){return Be.H.useEffectEvent(e)};ce.useId=function(){return Be.H.useId()};ce.useImperativeHandle=function(e,t,a){return Be.H.useImperativeHandle(e,t,a)};ce.useInsertionEffect=function(e,t){return Be.H.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return Be.H.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return Be.H.useMemo(e,t)};ce.useOptimistic=function(e,t){return Be.H.useOptimistic(e,t)};ce.useReducer=function(e,t,a){return Be.H.useReducer(e,t,a)};ce.useRef=function(e){return Be.H.useRef(e)};ce.useState=function(e){return Be.H.useState(e)};ce.useSyncExternalStore=function(e,t,a){return Be.H.useSyncExternalStore(e,t,a)};ce.useTransition=function(){return Be.H.useTransition()};ce.version="19.2.8"});var oe=Vt((D8,bx)=>{"use strict";bx.exports=yx()});var vx=Vt(zt=>{"use strict";var RI=oe();function wx(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Jo(){}var Rt={d:{f:Jo,r:function(){throw Error(wx(522))},D:Jo,C:Jo,L:Jo,m:Jo,X:Jo,S:Jo,M:Jo},p:0,findDOMNode:null},zI=Symbol.for("react.portal");function OI(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zI,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var xi=RI.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ru(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;zt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(wx(299));return OI(e,t,null,a)};zt.flushSync=function(e){var t=xi.T,a=Rt.p;try{if(xi.T=null,Rt.p=2,e)return e()}finally{xi.T=t,Rt.p=a,Rt.d.f()}};zt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Rt.d.C(e,t))};zt.prefetchDNS=function(e){typeof e=="string"&&Rt.d.D(e)};zt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=Ru(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Rt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Rt.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};zt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Ru(t.as,t.crossOrigin);Rt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Rt.d.M(e)};zt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=Ru(a,t.crossOrigin);Rt.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};zt.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Ru(t.as,t.crossOrigin);Rt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Rt.d.m(e)};zt.requestFormReset=function(e){Rt.d.r(e)};zt.unstable_batchedUpdates=function(e,t){return e(t)};zt.useFormState=function(e,t,a){return xi.H.useFormState(e,t,a)};zt.useFormStatus=function(){return xi.H.useHostTransitionStatus()};zt.version="19.2.8"});var en=Vt((z8,Sx)=>{"use strict";function Cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cx)}catch(e){console.error(e)}}Cx(),Sx.exports=vx()});var z1=Vt(rc=>{"use strict";var lt=ix(),j0=oe(),BI=en();function q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lx(e){if(os(e)!==e)throw Error(q(188))}function PI(e){var t=e.alternate;if(!t){if(t=os(e),t===null)throw Error(q(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Lx(n),e;if(r===o)return Lx(n),t;r=r.sibling}throw Error(q(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(q(189))}}if(a.alternate!==o)throw Error(q(190))}if(a.tag!==3)throw Error(q(188));return a.stateNode.current===a?e:t}function J0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=J0(e),t!==null)return t;e=e.sibling}return null}var Ue=Object.assign,HI=Symbol.for("react.element"),zu=Symbol.for("react.transitional.element"),_i=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),ty=Symbol.for("react.consumer"),Eo=Symbol.for("react.context"),Cm=Symbol.for("react.forward_ref"),Mp=Symbol.for("react.suspense"),Ep=Symbol.for("react.suspense_list"),Sm=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Ap=Symbol.for("react.activity"),UI=Symbol.for("react.memo_cache_sentinel"),_x=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=_x&&e[_x]||e["@@iterator"],typeof e=="function"?e:null)}var qI=Symbol.for("react.client.reference");function Tp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qI?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qr:return"Fragment";case kp:return"Profiler";case ey:return"StrictMode";case Mp:return"Suspense";case Ep:return"SuspenseList";case Ap:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _i:return"Portal";case Eo:return e.displayName||"Context";case ty:return(e._context.displayName||"Context")+".Consumer";case Cm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sm:return t=e.displayName||null,t!==null?t:Tp(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Tp(e(t))}catch{}}return null}var Ii=Array.isArray,re=j0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e=BI.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ar={pending:!1,data:null,method:null,action:null},Np=[],$r=-1;function no(e){return{current:e}}function pt(e){0>$r||(e.current=Np[$r],Np[$r]=null,$r--)}function ze(e,t){$r++,Np[$r]=e.current,e.current=t}var oo=no(null),Vi=no(null),pn=no(null),md=no(null);function gd(e,t){switch(ze(pn,t),ze(Vi,e),ze(oo,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?N0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=N0(t),e=v1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(oo),ze(oo,e)}function hl(){pt(oo),pt(Vi),pt(pn)}function Dp(e){e.memoizedState!==null&&ze(md,e);var t=oo.current,a=v1(t,e.type);t!==a&&(ze(Vi,e),ze(oo,a))}function hd(e){Vi.current===e&&(pt(oo),pt(Vi)),md.current===e&&(pt(md),es._currentValue=ar)}var Kf,Ix;function $n(e){if(Kf===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Kf=t&&t[1]||"",Ix=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kf+e+Ix}var jf=!1;function Wf(e,t){if(!e||jf)return"";jf=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var d=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){d=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){d=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),u=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=n);break}}}finally{jf=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$n(a):""}function FI(e,t){switch(e.tag){case 26:case 27:case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return e.child!==t&&t!==null?$n("Suspense Fallback"):$n("Suspense");case 19:return $n("SuspenseList");case 0:case 15:return Wf(e.type,!1);case 11:return Wf(e.type.render,!1);case 1:return Wf(e.type,!0);case 31:return $n("Activity");default:return""}}function kx(e){try{var t="",a=null;do t+=FI(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Rp=Object.prototype.hasOwnProperty,Lm=lt.unstable_scheduleCallback,Qf=lt.unstable_cancelCallback,VI=lt.unstable_shouldYield,GI=lt.unstable_requestPaint,ia=lt.unstable_now,XI=lt.unstable_getCurrentPriorityLevel,ay=lt.unstable_ImmediatePriority,oy=lt.unstable_UserBlockingPriority,xd=lt.unstable_NormalPriority,YI=lt.unstable_LowPriority,ny=lt.unstable_IdlePriority,ZI=lt.log,KI=lt.unstable_setDisableYieldValue,ns=null,sa=null;function sn(e){if(typeof ZI=="function"&&KI(e),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(ns,e)}catch{}}var ua=Math.clz32?Math.clz32:QI,jI=Math.log,WI=Math.LN2;function QI(e){return e>>>=0,e===0?32:31-(jI(e)/WI|0)|0}var Ou=256,Bu=262144,Pu=4194304;function Jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vd(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Jn(o):(l&=i,l!==0?n=Jn(l):a||(a=i&~e,a!==0&&(n=Jn(a))))):(i=o&~r,i!==0?n=Jn(i):l!==0?n=Jn(l):a||(a=o&~e,a!==0&&(n=Jn(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function rs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $I(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(){var e=Pu;return Pu<<=1,(Pu&62914560)===0&&(Pu=4194304),e}function $f(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ls(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function JI(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=l&~a;0<a;){var c=31-ua(a),f=1<<c;i[c]=0,s[c]=-1;var d=u[c];if(d!==null)for(u[c]=null,c=0;c<d.length;c++){var p=d[c];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&ly(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function ly(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ua(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function iy(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-ua(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function sy(e,t){var a=t&-t;return a=(a&42)!==0?1:_m(a),(a&(e.suspendedLanes|t))!==0?0:a}function _m(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Im(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uy(){var e=_e.p;return e!==0?e:(e=window.event,e===void 0?32:N1(e.type))}function Mx(e,t){var a=_e.p;try{return _e.p=e,t()}finally{_e.p=a}}var In=Math.random().toString(36).slice(2),vt="__reactFiber$"+In,jt="__reactProps$"+In,kl="__reactContainer$"+In,zp="__reactEvents$"+In,ek="__reactListeners$"+In,tk="__reactHandles$"+In,Ex="__reactResources$"+In,is="__reactMarker$"+In;function km(e){delete e[vt],delete e[jt],delete e[zp],delete e[ek],delete e[tk]}function Jr(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[kl]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=B0(e);e!==null;){if(a=e[vt])return a;e=B0(e)}return t}e=a,a=e.parentNode}return null}function Ml(e){if(e=e[vt]||e[kl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(q(33))}function ul(e){var t=e[Ex];return t||(t=e[Ex]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[is]=!0}var dy=new Set,cy={};function fr(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(cy[e]=t,e=0;e<t.length;e++)dy.add(t[e])}var ak=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ax={},Tx={};function ok(e){return Rp.call(Tx,e)?!0:Rp.call(Ax,e)?!1:ak.test(e)?Tx[e]=!0:(Ax[e]=!0,!1)}function Ju(e,t,a){if(ok(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Hu(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Co(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function wa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nk(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Op(e){if(!e._valueTracker){var t=fy(e)?"checked":"value";e._valueTracker=nk(e,t,""+e[t])}}function py(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=fy(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function yd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rk=/[\n"\\]/g;function Sa(e){return e.replace(rk,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bp(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wa(t)):e.value!==""+wa(t)&&(e.value=""+wa(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Pp(e,l,wa(t)):a!=null?Pp(e,l,wa(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+wa(i):e.removeAttribute("name")}function my(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Op(e);return}a=a!=null?""+wa(a):"",t=t!=null?""+wa(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Op(e)}function Pp(e,t,a){t==="number"&&yd(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+wa(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function gy(e,t,a){if(t!=null&&(t=""+wa(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wa(a):""}function hy(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(q(92));if(Ii(o)){if(1<o.length)throw Error(q(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=wa(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Op(e)}function yl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var lk=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nx(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||lk.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function xy(e,t,a){if(t!=null&&typeof t!="object")throw Error(q(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Nx(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Nx(e,r,t[r])}function Mm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ik=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sk=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ed(e){return sk.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ao(){}var Hp=null;function Em(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,cl=null;function Dx(e){var t=Ml(e);if(t&&(e=t.stateNode)){var a=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bp(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sa(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[jt]||null;if(!n)throw Error(q(90));Bp(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&py(o)}break e;case"textarea":gy(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&dl(e,!!a.multiple,t,!1)}}}var Jf=!1;function yy(e,t,a){if(Jf)return e(t,a);Jf=!0;try{var o=e(t);return o}finally{if(Jf=!1,(el!==null||cl!==null)&&(tc(),el&&(t=el,e=cl,cl=el=null,Dx(t),e)))for(t=0;t<e.length;t++)Dx(e[t])}}function Gi(e,t){var a=e.stateNode;if(a===null)return null;var o=a[jt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(q(231,t,typeof a));return a}var zo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Up=!1;if(zo)try{Yr={},Object.defineProperty(Yr,"passive",{get:function(){Up=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Up=!1}var Yr,un=null,Am=null,td=null;function by(){if(td)return td;var e,t=Am,a=t.length,o,n="value"in un?un.value:un.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return td=n.slice(e,1<o?1-o:void 0)}function ad(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uu(){return!0}function Rx(){return!1}function Wt(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Uu:Rx,this.isPropagationStopped=Rx,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=Wt(pr),ss=Ue({},pr,{view:0,detail:0}),uk=Wt(ss),ep,tp,bi,Xd=Ue({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(ep=e.screenX-bi.screenX,tp=e.screenY-bi.screenY):tp=ep=0,bi=e),ep)},movementY:function(e){return"movementY"in e?e.movementY:tp}}),zx=Wt(Xd),dk=Ue({},Xd,{dataTransfer:0}),ck=Wt(dk),fk=Ue({},ss,{relatedTarget:0}),ap=Wt(fk),pk=Ue({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),mk=Wt(pk),gk=Ue({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hk=Wt(gk),xk=Ue({},pr,{data:0}),Ox=Wt(xk),yk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wk[e])?!!t[e]:!1}function Tm(){return vk}var Ck=Ue({},ss,{key:function(e){if(e.key){var t=yk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ad(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tm,charCode:function(e){return e.type==="keypress"?ad(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ad(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sk=Wt(Ck),Lk=Ue({},Xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bx=Wt(Lk),_k=Ue({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tm}),Ik=Wt(_k),kk=Ue({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mk=Wt(kk),Ek=Ue({},Xd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ak=Wt(Ek),Tk=Ue({},pr,{newState:0,oldState:0}),Nk=Wt(Tk),Dk=[9,13,27,32],Nm=zo&&"CompositionEvent"in window,Ai=null;zo&&"documentMode"in document&&(Ai=document.documentMode);var Rk=zo&&"TextEvent"in window&&!Ai,wy=zo&&(!Nm||Ai&&8<Ai&&11>=Ai),Px=" ",Hx=!1;function vy(e,t){switch(e){case"keyup":return Dk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tl=!1;function zk(e,t){switch(e){case"compositionend":return Cy(t);case"keypress":return t.which!==32?null:(Hx=!0,Px);case"textInput":return e=t.data,e===Px&&Hx?null:e;default:return null}}function Ok(e,t){if(tl)return e==="compositionend"||!Nm&&vy(e,t)?(e=by(),td=Am=un=null,tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wy&&t.locale!=="ko"?null:t.data;default:return null}}var Bk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ux(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bk[e.type]:t==="textarea"}function Sy(e,t,a,o){el?cl?cl.push(o):cl=[o]:el=o,t=Od(t,"onChange"),0<t.length&&(a=new Gd("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ti=null,Xi=null;function Pk(e){y1(e,0)}function Yd(e){var t=ki(e);if(py(t))return e}function qx(e,t){if(e==="change")return t}var Ly=!1;zo&&(zo?(Fu="oninput"in document,Fu||(op=document.createElement("div"),op.setAttribute("oninput","return;"),Fu=typeof op.oninput=="function"),qu=Fu):qu=!1,Ly=qu&&(!document.documentMode||9<document.documentMode));var qu,Fu,op;function Fx(){Ti&&(Ti.detachEvent("onpropertychange",_y),Xi=Ti=null)}function _y(e){if(e.propertyName==="value"&&Yd(Xi)){var t=[];Sy(t,Xi,e,Em(e)),yy(Pk,t)}}function Hk(e,t,a){e==="focusin"?(Fx(),Ti=t,Xi=a,Ti.attachEvent("onpropertychange",_y)):e==="focusout"&&Fx()}function Uk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yd(Xi)}function qk(e,t){if(e==="click")return Yd(t)}function Fk(e,t){if(e==="input"||e==="change")return Yd(t)}function Vk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ca=typeof Object.is=="function"?Object.is:Vk;function Yi(e,t){if(ca(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Rp.call(t,n)||!ca(e[n],t[n]))return!1}return!0}function Vx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gx(e,t){var a=Vx(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vx(a)}}function Iy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ky(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yd(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=yd(e.document)}return t}function Dm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gk=zo&&"documentMode"in document&&11>=document.documentMode,al=null,qp=null,Ni=null,Fp=!1;function Xx(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fp||al==null||al!==yd(o)||(o=al,"selectionStart"in o&&Dm(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ni&&Yi(Ni,o)||(Ni=o,o=Od(qp,"onSelect"),0<o.length&&(t=new Gd("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=al)))}function Qn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionrun:Qn("Transition","TransitionRun"),transitionstart:Qn("Transition","TransitionStart"),transitioncancel:Qn("Transition","TransitionCancel"),transitionend:Qn("Transition","TransitionEnd")},np={},My={};zo&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function mr(e){if(np[e])return np[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in My)return np[e]=t[a];return e}var Ey=mr("animationend"),Ay=mr("animationiteration"),Ty=mr("animationstart"),Xk=mr("transitionrun"),Yk=mr("transitionstart"),Zk=mr("transitioncancel"),Ny=mr("transitionend"),Dy=new Map,Vp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vp.push("scrollEnd");function Ua(e,t){Dy.set(e,t),fr(t,[e])}var bd=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ba=[],nl=0,Rm=0;function Zd(){for(var e=nl,t=Rm=nl=0;t<e;){var a=ba[t];ba[t++]=null;var o=ba[t];ba[t++]=null;var n=ba[t];ba[t++]=null;var r=ba[t];if(ba[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&Ry(a,n,r)}}function Kd(e,t,a,o){ba[nl++]=e,ba[nl++]=t,ba[nl++]=a,ba[nl++]=o,Rm|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zm(e,t,a,o){return Kd(e,t,a,o),wd(e)}function gr(e,t){return Kd(e,null,null,t),wd(e)}function Ry(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ua(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function wd(e){if(50<qi)throw qi=0,dm=null,Error(q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rl={};function Kk(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(e,t,a,o){return new Kk(e,t,a,o)}function Om(e){return e=e.prototype,!(!e||!e.isReactComponent)}function No(e,t){var a=e.alternate;return a===null?(a=ra(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zy(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function od(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Om(e)&&(l=1);else if(typeof e=="string")l=Q5(e,a,oo.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ap:return e=ra(31,a,t,n),e.elementType=Ap,e.lanes=r,e;case Qr:return or(a.children,n,r,t);case ey:l=8,n|=24;break;case kp:return e=ra(12,a,t,n|2),e.elementType=kp,e.lanes=r,e;case Mp:return e=ra(13,a,t,n),e.elementType=Mp,e.lanes=r,e;case Ep:return e=ra(19,a,t,n),e.elementType=Ep,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eo:l=10;break e;case ty:l=9;break e;case Cm:l=11;break e;case Sm:l=14;break e;case tn:l=16,o=null;break e}l=29,a=Error(q(130,e===null?"null":typeof e,"")),o=null}return t=ra(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function or(e,t,a,o){return e=ra(7,e,o,t),e.lanes=a,e}function rp(e,t,a){return e=ra(6,e,null,t),e.lanes=a,e}function Oy(e){var t=ra(18,null,null,0);return t.stateNode=e,t}function lp(e,t,a){return t=ra(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yx=new WeakMap;function La(e,t){if(typeof e=="object"&&e!==null){var a=Yx.get(e);return a!==void 0?a:(t={value:e,source:t,stack:kx(t)},Yx.set(e,t),t)}return{value:e,source:t,stack:kx(t)}}var ll=[],il=0,vd=null,Zi=0,va=[],Ca=0,Cn=null,eo=1,to="";function ko(e,t){ll[il++]=Zi,ll[il++]=vd,vd=e,Zi=t}function By(e,t,a){va[Ca++]=eo,va[Ca++]=to,va[Ca++]=Cn,Cn=e;var o=eo;e=to;var n=32-ua(o)-1;o&=~(1<<n),a+=1;var r=32-ua(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,eo=1<<32-ua(t)+n|a<<n|o,to=r+e}else eo=1<<r|a<<n|o,to=e}function Bm(e){e.return!==null&&(ko(e,1),By(e,1,0))}function Pm(e){for(;e===vd;)vd=ll[--il],ll[il]=null,Zi=ll[--il],ll[il]=null;for(;e===Cn;)Cn=va[--Ca],va[Ca]=null,to=va[--Ca],va[Ca]=null,eo=va[--Ca],va[Ca]=null}function Py(e,t){va[Ca++]=eo,va[Ca++]=to,va[Ca++]=Cn,eo=t.id,to=t.overflow,Cn=e}var Ct=null,He=null,Ce=!1,mn=null,_a=!1,Gp=Error(q(519));function Sn(e){var t=Error(q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(La(t,e)),Gp}function Zx(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[vt]=e,t[jt]=o,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<$i.length;a++)ye($i[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),my(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),hy(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||w1(t.textContent,a)?(o.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),o.onScroll!=null&&ye("scroll",t),o.onScrollEnd!=null&&ye("scrollend",t),o.onClick!=null&&(t.onclick=Ao),t=!0):t=!1,t||Sn(e,!0)}function Kx(e){for(Ct=e.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:Ct=Ct.return}}function Zr(e){if(e!==Ct)return!1;if(!Ce)return Kx(e),Ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gm(e.type,e.memoizedProps)),a=!a),a&&He&&Sn(e),Kx(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));He=O0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));He=O0(e)}else t===27?(t=He,kn(e.type)?(e=bm,bm=null,He=e):He=t):He=Ct?ka(e.stateNode.nextSibling):null;return!0}function ir(){He=Ct=null,Ce=!1}function ip(){var e=mn;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),mn=null),e}function Ki(e){mn===null?mn=[e]:mn.push(e)}var Xp=no(null),hr=null,To=null;function on(e,t,a){ze(Xp,t._currentValue),t._currentValue=a}function Do(e){e._currentValue=Xp.current,pt(Xp)}function Yp(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Zp(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Yp(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(q(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Yp(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function El(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(q(387));if(l=l.memoizedProps,l!==null){var i=n.type;ca(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===md.current){if(l=n.alternate,l===null)throw Error(q(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(es):e=[es])}n=n.return}e!==null&&Zp(t,e,a,o),t.flags|=262144}function Cd(e){for(e=e.firstContext;e!==null;){if(!ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){hr=e,To=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Hy(hr,e)}function Vu(e,t){return hr===null&&sr(e),Hy(e,t)}function Hy(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},To===null){if(e===null)throw Error(q(308));To=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else To=To.next=t;return a}var jk=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Wk=lt.unstable_scheduleCallback,Qk=lt.unstable_NormalPriority,ot={$$typeof:Eo,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hm(){return{controller:new jk,data:new Map,refCount:0}}function us(e){e.refCount--,e.refCount===0&&Wk(Qk,function(){e.controller.abort()})}var Di=null,Kp=0,bl=0,fl=null;function $k(e,t){if(Di===null){var a=Di=[];Kp=0,bl=dg(),fl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Kp++,t.then(jx,jx),t}function jx(){if(--Kp===0&&Di!==null){fl!==null&&(fl.status="fulfilled");var e=Di;Di=null,bl=0,fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jk(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Wx=re.S;re.S=function(e,t){Jb=ia(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$k(e,t),Wx!==null&&Wx(e,t)};var nr=no(null);function Um(){var e=nr.current;return e!==null?e:Ne.pooledCache}function nd(e,t){t===null?ze(nr,nr.current):ze(nr,t.pool)}function Uy(){var e=Um();return e===null?null:{parent:ot._currentValue,pool:e}}var Al=Error(q(460)),qm=Error(q(474)),jd=Error(q(542)),Sd={then:function(){}};function Qx(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qy(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ao,Ao),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jx(e),e;default:if(typeof t.status=="string")t.then(Ao,Ao);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jx(e),e}throw rr=t,Al}}function er(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rr=a,Al):a}}var rr=null;function $x(){if(rr===null)throw Error(q(459));var e=rr;return rr=null,e}function Jx(e){if(e===Al||e===jd)throw Error(q(483))}var pl=null,ji=0;function Gu(e){var t=ji;return ji+=1,pl===null&&(pl=[]),qy(pl,e,t)}function wi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xu(e,t){throw t.$$typeof===HI?Error(q(525)):(e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fy(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=No(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function i(h,x,m,y){return x===null||x.tag!==6?(x=rp(m,h.mode,y),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,y){var C=m.type;return C===Qr?c(h,x,m.props.children,y,m.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&er(C)===x.type)?(x=n(x,m.props),wi(x,m),x.return=h,x):(x=od(m.type,m.key,m.props,null,h.mode,y),wi(x,m),x.return=h,x)}function u(h,x,m,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=lp(m,h.mode,y),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function c(h,x,m,y,C){return x===null||x.tag!==7?(x=or(m,h.mode,y,C),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=rp(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case zu:return m=od(x.type,x.key,x.props,null,h.mode,m),wi(m,x),m.return=h,m;case _i:return x=lp(x,h.mode,m),x.return=h,x;case tn:return x=er(x),f(h,x,m)}if(Ii(x)||yi(x))return x=or(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,Gu(x),m);if(x.$$typeof===Eo)return f(h,Vu(h,x),m);Xu(h,x)}return null}function d(h,x,m,y){var C=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return C!==null?null:i(h,x,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zu:return m.key===C?s(h,x,m,y):null;case _i:return m.key===C?u(h,x,m,y):null;case tn:return m=er(m),d(h,x,m,y)}if(Ii(m)||yi(m))return C!==null?null:c(h,x,m,y,null);if(typeof m.then=="function")return d(h,x,Gu(m),y);if(m.$$typeof===Eo)return d(h,x,Vu(h,m),y);Xu(h,m)}return null}function p(h,x,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(m)||null,i(x,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zu:return h=h.get(y.key===null?m:y.key)||null,s(x,h,y,C);case _i:return h=h.get(y.key===null?m:y.key)||null,u(x,h,y,C);case tn:return y=er(y),p(h,x,m,y,C)}if(Ii(y)||yi(y))return h=h.get(m)||null,c(x,h,y,C,null);if(typeof y.then=="function")return p(h,x,m,Gu(y),C);if(y.$$typeof===Eo)return p(h,x,m,Vu(x,y),C);Xu(x,y)}return null}function g(h,x,m,y){for(var C=null,S=null,v=x,_=x=0,I=null;v!==null&&_<m.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var N=d(h,v,m[_],y);if(N===null){v===null&&(v=I);break}e&&v&&N.alternate===null&&t(h,v),x=r(N,x,_),S===null?C=N:S.sibling=N,S=N,v=I}if(_===m.length)return a(h,v),Ce&&ko(h,_),C;if(v===null){for(;_<m.length;_++)v=f(h,m[_],y),v!==null&&(x=r(v,x,_),S===null?C=v:S.sibling=v,S=v);return Ce&&ko(h,_),C}for(v=o(v);_<m.length;_++)I=p(v,h,_,m[_],y),I!==null&&(e&&I.alternate!==null&&v.delete(I.key===null?_:I.key),x=r(I,x,_),S===null?C=I:S.sibling=I,S=I);return e&&v.forEach(function(T){return t(h,T)}),Ce&&ko(h,_),C}function b(h,x,m,y){if(m==null)throw Error(q(151));for(var C=null,S=null,v=x,_=x=0,I=null,N=m.next();v!==null&&!N.done;_++,N=m.next()){v.index>_?(I=v,v=null):I=v.sibling;var T=d(h,v,N.value,y);if(T===null){v===null&&(v=I);break}e&&v&&T.alternate===null&&t(h,v),x=r(T,x,_),S===null?C=T:S.sibling=T,S=T,v=I}if(N.done)return a(h,v),Ce&&ko(h,_),C;if(v===null){for(;!N.done;_++,N=m.next())N=f(h,N.value,y),N!==null&&(x=r(N,x,_),S===null?C=N:S.sibling=N,S=N);return Ce&&ko(h,_),C}for(v=o(v);!N.done;_++,N=m.next())N=p(v,h,_,N.value,y),N!==null&&(e&&N.alternate!==null&&v.delete(N.key===null?_:N.key),x=r(N,x,_),S===null?C=N:S.sibling=N,S=N);return e&&v.forEach(function(P){return t(h,P)}),Ce&&ko(h,_),C}function w(h,x,m,y){if(typeof m=="object"&&m!==null&&m.type===Qr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zu:e:{for(var C=m.key;x!==null;){if(x.key===C){if(C=m.type,C===Qr){if(x.tag===7){a(h,x.sibling),y=n(x,m.props.children),y.return=h,h=y;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&er(C)===x.type){a(h,x.sibling),y=n(x,m.props),wi(y,m),y.return=h,h=y;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Qr?(y=or(m.props.children,h.mode,y,m.key),y.return=h,h=y):(y=od(m.type,m.key,m.props,null,h.mode,y),wi(y,m),y.return=h,h=y)}return l(h);case _i:e:{for(C=m.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),y=n(x,m.children||[]),y.return=h,h=y;break e}else{a(h,x);break}else t(h,x);x=x.sibling}y=lp(m,h.mode,y),y.return=h,h=y}return l(h);case tn:return m=er(m),w(h,x,m,y)}if(Ii(m))return g(h,x,m,y);if(yi(m)){if(C=yi(m),typeof C!="function")throw Error(q(150));return m=C.call(m),b(h,x,m,y)}if(typeof m.then=="function")return w(h,x,Gu(m),y);if(m.$$typeof===Eo)return w(h,x,Vu(h,m),y);Xu(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),y=n(x,m),y.return=h,h=y):(a(h,x),y=rp(m,h.mode,y),y.return=h,h=y),l(h)):a(h,x)}return function(h,x,m,y){try{ji=0;var C=w(h,x,m,y);return pl=null,C}catch(v){if(v===Al||v===jd)throw v;var S=ra(29,v,null,h.mode);return S.lanes=y,S.return=h,S}}}var ur=Fy(!0),Vy=Fy(!1),an=!1;function Fm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=wd(e),Ry(e,null,a),t}return Kd(e,o,t,a),wd(e)}function Ri(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,iy(e,a)}}function sp(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Wp=!1;function zi(){if(Wp){var e=fl;if(e!==null)throw e}}function Oi(e,t,a,o){Wp=!1;var n=e.updateQueue;an=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==l&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;l=0,c=u=s=null,i=r;do{var d=i.lane&-536870913,p=d!==i.lane;if(p?(we&d)===d:(o&d)===d){d!==0&&d===bl&&(Wp=!0),c!==null&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,b=i;d=t;var w=a;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){f=g.call(w,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,d=typeof g=="function"?g.call(w,f,d):g,d==null)break e;f=Ue({},f,d);break e;case 2:an=!0}}d=i.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[d]:p.push(d))}else p={lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=p,s=f):c=c.next=p,l|=d;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);c===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=c,r===null&&(n.shared.lanes=0),_n|=l,e.lanes=l,e.memoizedState=f}}function Gy(e,t){if(typeof e!="function")throw Error(q(191,e));e.call(t)}function Xy(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gy(a[e],t)}var wl=no(null),Ld=no(0);function e0(e,t){e=Ho,ze(Ld,e),ze(wl,t),Ho=e|t.baseLanes}function Qp(){ze(Ld,Ho),ze(wl,wl.current)}function Vm(){Ho=Ld.current,pt(wl),pt(Ld)}var fa=no(null),Ia=null;function nn(e){var t=e.alternate;ze(Je,Je.current&1),ze(fa,e),Ia===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(Ia=e)}function $p(e){ze(Je,Je.current),ze(fa,e),Ia===null&&(Ia=e)}function Yy(e){e.tag===22?(ze(Je,Je.current),ze(fa,e),Ia===null&&(Ia=e)):rn(e)}function rn(){ze(Je,Je.current),ze(fa,fa.current)}function na(e){pt(fa),Ia===e&&(Ia=null),pt(Je)}var Je=no(0);function _d(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||xm(a)||ym(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=0,pe=null,Ae=null,tt=null,Id=!1,ml=!1,dr=!1,kd=0,Wi=0,gl=null,e5=0;function je(){throw Error(q(321))}function Gm(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ca(e[a],t[a]))return!1;return!0}function Xm(e,t,a,o,n,r){return Oo=r,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,re.H=e===null||e.memoizedState===null?Sb:ag,dr=!1,r=a(o,n),dr=!1,ml&&(r=Ky(t,a,o,n)),Zy(e),r}function Zy(e){re.H=Qi;var t=Ae!==null&&Ae.next!==null;if(Oo=0,tt=Ae=pe=null,Id=!1,Wi=0,gl=null,t)throw Error(q(300));e===null||nt||(e=e.dependencies,e!==null&&Cd(e)&&(nt=!0))}function Ky(e,t,a,o){pe=e;var n=0;do{if(ml&&(gl=null),Wi=0,ml=!1,25<=n)throw Error(q(301));if(n+=1,tt=Ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}re.H=Lb,r=t(a,o)}while(ml);return r}function t5(){var e=re.H,t=e.useState()[0];return t=typeof t.then=="function"?ds(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(pe.flags|=1024),t}function Ym(){var e=kd!==0;return kd=0,e}function Zm(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Km(e){if(Id){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Id=!1}Oo=0,tt=Ae=pe=null,ml=!1,Wi=kd=0,gl=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?pe.memoizedState=tt=e:tt=tt.next=e,tt}function et(){if(Ae===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=tt===null?pe.memoizedState:tt.next;if(t!==null)tt=t,Ae=e;else{if(e===null)throw pe.alternate===null?Error(q(467)):Error(q(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},tt===null?pe.memoizedState=tt=e:tt=tt.next=e}return tt}function Wd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var t=Wi;return Wi+=1,gl===null&&(gl=[]),e=qy(gl,e,t),t=pe,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,re.H=t===null||t.memoizedState===null?Sb:ag),e}function Qd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ds(e);if(e.$$typeof===Eo)return St(e)}throw Error(q(438,String(e)))}function jm(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Wd(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=UI;return t.index++,a}function Bo(e,t){return typeof t=="function"?t(e):t}function rd(e){var t=et();return Wm(t,Ae,e)}function Wm(e,t,a){var o=e.queue;if(o===null)throw Error(q(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,u=t,c=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(we&f)===f:(Oo&f)===f){var d=u.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===bl&&(c=!0);else if((Oo&d)===d){u=u.next,d===bl&&(c=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=f,l=r):s=s.next=f,pe.lanes|=d,_n|=d;f=u.action,dr&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else d={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=d,l=r):s=s.next=d,pe.lanes|=f,_n|=f;u=u.next}while(u!==null&&u!==t);if(s===null?l=r:s.next=i,!ca(r,e.memoizedState)&&(nt=!0,c&&(a=fl,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function up(e){var t=et(),a=t.queue;if(a===null)throw Error(q(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);ca(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function jy(e,t,a){var o=pe,n=et(),r=Ce;if(r){if(a===void 0)throw Error(q(407));a=a()}else a=t();var l=!ca((Ae||n).memoizedState,a);if(l&&(n.memoizedState=a,nt=!0),n=n.queue,Qm($y.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||tt!==null&&tt.memoizedState.tag&1){if(o.flags|=2048,vl(9,{destroy:void 0},Qy.bind(null,o,n,a,t),null),Ne===null)throw Error(q(349));r||(Oo&127)!==0||Wy(o,t,a)}return a}function Wy(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=Wd(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qy(e,t,a,o){t.value=a,t.getSnapshot=o,Jy(t)&&eb(e)}function $y(e,t,a){return a(function(){Jy(t)&&eb(e)})}function Jy(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ca(e,a)}catch{return!0}}function eb(e){var t=gr(e,2);t!==null&&Kt(t,e,2)}function Jp(e){var t=Ot();if(typeof e=="function"){var a=e;if(e=a(),dr){sn(!0);try{a()}finally{sn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function tb(e,t,a,o){return e.baseState=a,Wm(e,Ae,typeof o=="function"?o:Bo)}function a5(e,t,a,o,n){if(Jd(e))throw Error(q(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};re.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,ab(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ab(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=re.T,l={};re.T=l;try{var i=a(n,o),s=re.S;s!==null&&s(l,i),t0(e,t,i)}catch(u){em(e,t,u)}finally{r!==null&&l.types!==null&&(r.types=l.types),re.T=r}}else try{r=a(n,o),t0(e,t,r)}catch(u){em(e,t,u)}}function t0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){a0(e,t,o)},function(o){return em(e,t,o)}):a0(e,t,a)}function a0(e,t,a){t.status="fulfilled",t.value=a,ob(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ab(e,a)))}function em(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,ob(t),t=t.next;while(t!==o)}e.action=null}function ob(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nb(e,t){return t}function o0(e,t){if(Ce){var a=Ne.formState;if(a!==null){e:{var o=pe;if(Ce){if(He){t:{for(var n=He,r=_a;n.nodeType!==8;){if(!r){n=null;break t}if(n=ka(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){He=ka(n.nextSibling),o=n.data==="F!";break e}}Sn(o)}o=!1}o&&(t=a[0])}}return a=Ot(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nb,lastRenderedState:t},a.queue=o,a=wb.bind(null,pe,o),o.dispatch=a,o=Jp(!1),r=tg.bind(null,pe,!1,o.queue),o=Ot(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=a5.bind(null,pe,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function n0(e){var t=et();return rb(t,Ae,e)}function rb(e,t,a){if(t=Wm(e,t,nb)[0],e=rd(Bo)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ds(t)}catch(l){throw l===Al?jd:l}else o=t;t=et();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,vl(9,{destroy:void 0},o5.bind(null,n,a),null)),[o,r,e]}function o5(e,t){e.action=t}function r0(e){var t=et(),a=Ae;if(a!==null)return rb(t,a,e);et(),t=t.memoizedState,a=et();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function vl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Wd(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function lb(){return et().memoizedState}function ld(e,t,a,o){var n=Ot();pe.flags|=e,n.memoizedState=vl(1|t,{destroy:void 0},a,o===void 0?null:o)}function $d(e,t,a,o){var n=et();o=o===void 0?null:o;var r=n.memoizedState.inst;Ae!==null&&o!==null&&Gm(o,Ae.memoizedState.deps)?n.memoizedState=vl(t,r,a,o):(pe.flags|=e,n.memoizedState=vl(1|t,r,a,o))}function l0(e,t){ld(8390656,8,e,t)}function Qm(e,t){$d(2048,8,e,t)}function n5(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Wd(),pe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ib(e){var t=et().memoizedState;return n5({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(q(440));return t.impl.apply(void 0,arguments)}}function sb(e,t){return $d(4,2,e,t)}function ub(e,t){return $d(4,4,e,t)}function db(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cb(e,t,a){a=a!=null?a.concat([e]):null,$d(4,4,db.bind(null,t,e),a)}function $m(){}function fb(e,t){var a=et();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Gm(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function pb(e,t){var a=et();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Gm(t,o[1]))return o[0];if(o=e(),dr){sn(!0);try{e()}finally{sn(!1)}}return a.memoizedState=[o,t],o}function Jm(e,t,a){return a===void 0||(Oo&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=t1(),pe.lanes|=e,_n|=e,a)}function mb(e,t,a,o){return ca(a,t)?a:wl.current!==null?(e=Jm(e,a,o),ca(e,t)||(nt=!0),e):(Oo&42)===0||(Oo&1073741824)!==0&&(we&261930)===0?(nt=!0,e.memoizedState=a):(e=t1(),pe.lanes|=e,_n|=e,t)}function gb(e,t,a,o,n){var r=_e.p;_e.p=r!==0&&8>r?r:8;var l=re.T,i={};re.T=i,tg(e,!1,t,a);try{var s=n(),u=re.S;if(u!==null&&u(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=Jk(s,o);Bi(e,t,c,da(e))}else Bi(e,t,o,da(e))}catch(f){Bi(e,t,{then:function(){},status:"rejected",reason:f},da())}finally{_e.p=r,l!==null&&i.types!==null&&(l.types=i.types),re.T=l}}function r5(){}function tm(e,t,a,o){if(e.tag!==5)throw Error(q(476));var n=hb(e).queue;gb(e,n,t,ar,a===null?r5:function(){return xb(e),a(o)})}function hb(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ar,baseState:ar,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ar},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xb(e){var t=hb(e);t.next===null&&(t=e.alternate.memoizedState),Bi(e,t.next.queue,{},da())}function eg(){return St(es)}function yb(){return et().memoizedState}function bb(){return et().memoizedState}function l5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=da();e=gn(a);var o=hn(t,e,a);o!==null&&(Kt(o,t,a),Ri(o,t,a)),t={cache:Hm()},e.payload=t;return}t=t.return}}function i5(e,t,a){var o=da();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jd(e)?vb(t,a):(a=zm(e,t,a,o),a!==null&&(Kt(a,e,o),Cb(a,t,o)))}function wb(e,t,a){var o=da();Bi(e,t,a,o)}function Bi(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jd(e))vb(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,ca(i,l))return Kd(e,t,n,0),Ne===null&&Zd(),!1}catch{}if(a=zm(e,t,n,o),a!==null)return Kt(a,e,o),Cb(a,t,o),!0}return!1}function tg(e,t,a,o){if(o={lane:2,revertLane:dg(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jd(e)){if(t)throw Error(q(479))}else t=zm(e,a,o,2),t!==null&&Kt(t,e,2)}function Jd(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function vb(e,t){ml=Id=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Cb(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,iy(e,a)}}var Qi={readContext:St,use:Qd,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};Qi.useEffectEvent=je;var Sb={readContext:St,use:Qd,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:l0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ld(4194308,4,db.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ld(4194308,4,e,t)},useInsertionEffect:function(e,t){ld(4,2,e,t)},useMemo:function(e,t){var a=Ot();t=t===void 0?null:t;var o=e();if(dr){sn(!0);try{e()}finally{sn(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ot();if(a!==void 0){var n=a(t);if(dr){sn(!0);try{a(t)}finally{sn(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=i5.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Jp(e);var t=e.queue,a=wb.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$m,useDeferredValue:function(e,t){var a=Ot();return Jm(a,e,t)},useTransition:function(){var e=Jp(!1);return e=gb.bind(null,pe,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=pe,n=Ot();if(Ce){if(a===void 0)throw Error(q(407));a=a()}else{if(a=t(),Ne===null)throw Error(q(349));(we&127)!==0||Wy(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,l0($y.bind(null,o,r,e),[e]),o.flags|=2048,vl(9,{destroy:void 0},Qy.bind(null,o,r,a,t),null),a},useId:function(){var e=Ot(),t=Ne.identifierPrefix;if(Ce){var a=to,o=eo;a=(o&~(1<<32-ua(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=kd++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=e5++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eg,useFormState:o0,useActionState:o0,useOptimistic:function(e){var t=Ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tg.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:jm,useCacheRefresh:function(){return Ot().memoizedState=l5.bind(null,pe)},useEffectEvent:function(e){var t=Ot(),a={impl:e};return t.memoizedState=a,function(){if((Le&2)!==0)throw Error(q(440));return a.impl.apply(void 0,arguments)}}},ag={readContext:St,use:Qd,useCallback:fb,useContext:St,useEffect:Qm,useImperativeHandle:cb,useInsertionEffect:sb,useLayoutEffect:ub,useMemo:pb,useReducer:rd,useRef:lb,useState:function(){return rd(Bo)},useDebugValue:$m,useDeferredValue:function(e,t){var a=et();return mb(a,Ae.memoizedState,e,t)},useTransition:function(){var e=rd(Bo)[0],t=et().memoizedState;return[typeof e=="boolean"?e:ds(e),t]},useSyncExternalStore:jy,useId:yb,useHostTransitionStatus:eg,useFormState:n0,useActionState:n0,useOptimistic:function(e,t){var a=et();return tb(a,Ae,e,t)},useMemoCache:jm,useCacheRefresh:bb};ag.useEffectEvent=ib;var Lb={readContext:St,use:Qd,useCallback:fb,useContext:St,useEffect:Qm,useImperativeHandle:cb,useInsertionEffect:sb,useLayoutEffect:ub,useMemo:pb,useReducer:up,useRef:lb,useState:function(){return up(Bo)},useDebugValue:$m,useDeferredValue:function(e,t){var a=et();return Ae===null?Jm(a,e,t):mb(a,Ae.memoizedState,e,t)},useTransition:function(){var e=up(Bo)[0],t=et().memoizedState;return[typeof e=="boolean"?e:ds(e),t]},useSyncExternalStore:jy,useId:yb,useHostTransitionStatus:eg,useFormState:r0,useActionState:r0,useOptimistic:function(e,t){var a=et();return Ae!==null?tb(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jm,useCacheRefresh:bb};Lb.useEffectEvent=ib;function dp(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ue({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var am={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=da(),n=gn(o);n.payload=t,a!=null&&(n.callback=a),t=hn(e,n,o),t!==null&&(Kt(t,e,o),Ri(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=da(),n=gn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=hn(e,n,o),t!==null&&(Kt(t,e,o),Ri(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=da(),o=gn(a);o.tag=2,t!=null&&(o.callback=t),t=hn(e,o,a),t!==null&&(Kt(t,e,a),Ri(t,e,a))}};function i0(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!Yi(a,o)||!Yi(n,r):!0}function s0(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&am.enqueueReplaceState(t,t.state,null)}function cr(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ue({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function _b(e){bd(e)}function Ib(e){console.error(e)}function kb(e){bd(e)}function Md(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function u0(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function om(e,t,a){return a=gn(a),a.tag=3,a.payload={element:null},a.callback=function(){Md(e,t)},a}function Mb(e){return e=gn(e),e.tag=3,e}function Eb(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){u0(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){u0(t,a,o),typeof n!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function s5(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&El(t,a,n,!0),a=fa.current,a!==null){switch(a.tag){case 31:case 13:return Ia===null?Dd():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Sd?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),vp(e,o,n)),!1;case 22:return a.flags|=65536,o===Sd?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),vp(e,o,n)),!1}throw Error(q(435,a.tag))}return vp(e,o,n),Dd(),!1}if(Ce)return t=fa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Gp&&(e=Error(q(422),{cause:o}),Ki(La(e,a)))):(o!==Gp&&(t=Error(q(423),{cause:o}),Ki(La(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=La(o,a),n=om(e.stateNode,o,n),sp(e,n),We!==4&&(We=2)),!1;var r=Error(q(520),{cause:o});if(r=La(r,a),Ui===null?Ui=[r]:Ui.push(r),We!==4&&(We=2),t===null)return!0;o=La(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=om(a.stateNode,o,e),sp(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Mb(n),Eb(n,e,a,o),sp(a,n),!1}a=a.return}while(a!==null);return!1}var og=Error(q(461)),nt=!1;function wt(e,t,a,o){t.child=e===null?Vy(t,null,a,o):ur(t,e.child,a,o)}function d0(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return sr(t),o=Xm(e,t,a,l,r,n),i=Ym(),e!==null&&!nt?(Zm(e,t,n),Po(e,t,n)):(Ce&&i&&Bm(t),t.flags|=1,wt(e,t,o,n),t.child)}function c0(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Om(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ab(e,t,r,o,n)):(e=od(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ng(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:Yi,a(l,o)&&e.ref===t.ref)return Po(e,t,n)}return t.flags|=1,e=No(r,o),e.ref=t.ref,e.return=t,t.child=e}function Ab(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(Yi(r,o)&&e.ref===t.ref)if(nt=!1,t.pendingProps=o=r,ng(e,n))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Po(e,t,n)}return nm(e,t,a,o,n)}function Tb(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return f0(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nd(t,r!==null?r.cachePool:null),r!==null?e0(t,r):Qp(),Yy(t);else return o=t.lanes=536870912,f0(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(nd(t,r.cachePool),e0(t,r),rn(t),t.memoizedState=null):(e!==null&&nd(t,null),Qp(),rn(t));return wt(e,t,n,a),t.child}function Mi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function f0(e,t,a,o,n){var r=Um();return r=r===null?null:{parent:ot._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&nd(t,null),Qp(),Yy(t),e!==null&&El(e,t,o,!0),t.childLanes=n,null}function id(e,t){return t=Ed({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function p0(e,t,a){return ur(t,e.child,null,a),e=id(t,t.pendingProps),e.flags|=2,na(t),t.memoizedState=null,e}function u5(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=id(t,o),t.lanes=536870912,Mi(null,e);if($p(t),(e=He)?(e=S1(e,_a),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:eo,overflow:to}:null,retryLane:536870912,hydrationErrors:null},a=Oy(e),a.return=t,t.child=a,Ct=t,He=null)):e=null,e===null)throw Sn(t);return t.lanes=536870912,null}return id(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if($p(t),n)if(t.flags&256)t.flags&=-257,t=p0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(q(558));else if(nt||El(e,t,a,!1),n=(a&e.childLanes)!==0,nt||n){if(o=Ne,o!==null&&(l=sy(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,gr(e,l),Kt(o,e,l),og;Dd(),t=p0(e,t,a)}else e=r.treeContext,He=ka(l.nextSibling),Ct=t,Ce=!0,mn=null,_a=!1,e!==null&&Py(t,e),t=id(t,o),t.flags|=4096;return t}return e=No(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sd(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(q(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function nm(e,t,a,o,n){return sr(t),a=Xm(e,t,a,o,void 0,n),o=Ym(),e!==null&&!nt?(Zm(e,t,n),Po(e,t,n)):(Ce&&o&&Bm(t),t.flags|=1,wt(e,t,a,n),t.child)}function m0(e,t,a,o,n,r){return sr(t),t.updateQueue=null,a=Ky(t,o,a,n),Zy(e),o=Ym(),e!==null&&!nt?(Zm(e,t,r),Po(e,t,r)):(Ce&&o&&Bm(t),t.flags|=1,wt(e,t,a,r),t.child)}function g0(e,t,a,o,n){if(sr(t),t.stateNode===null){var r=rl,l=a.contextType;typeof l=="object"&&l!==null&&(r=St(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=am,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Fm(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?St(l):rl,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(dp(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&am.enqueueReplaceState(r,r.state,null),Oi(t,o,r,n),zi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=cr(a,i);r.props=s;var u=r.context,c=a.contextType;l=rl,typeof c=="object"&&c!==null&&(l=St(c));var f=a.getDerivedStateFromProps;c=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||u!==l)&&s0(t,r,o,l),an=!1;var d=t.memoizedState;r.state=d,Oi(t,o,r,n),zi(),u=t.memoizedState,i||d!==u||an?(typeof f=="function"&&(dp(t,a,f,o),u=t.memoizedState),(s=an||i0(t,a,s,o,d,u,l))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,jp(e,t),l=t.memoizedProps,c=cr(a,l),r.props=c,f=t.pendingProps,d=r.context,u=a.contextType,s=rl,typeof u=="object"&&u!==null&&(s=St(u)),i=a.getDerivedStateFromProps,(u=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==f||d!==s)&&s0(t,r,o,s),an=!1,d=t.memoizedState,r.state=d,Oi(t,o,r,n),zi();var p=t.memoizedState;l!==f||d!==p||an||e!==null&&e.dependencies!==null&&Cd(e.dependencies)?(typeof i=="function"&&(dp(t,a,i,o),p=t.memoizedState),(c=an||i0(t,a,c,o,d,p,s)||e!==null&&e.dependencies!==null&&Cd(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=c):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,sd(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=ur(t,e.child,null,n),t.child=ur(t,null,a,n)):wt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Po(e,t,n),e}function h0(e,t,a,o){return ir(),t.flags|=256,wt(e,t,a,o),t.child}var cp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fp(e){return{baseLanes:e,cachePool:Uy()}}function pp(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=la),e}function Nb(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(n?nn(t):rn(t),(e=He)?(e=S1(e,_a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:eo,overflow:to}:null,retryLane:536870912,hydrationErrors:null},a=Oy(e),a.return=t,t.child=a,Ct=t,He=null)):e=null,e===null)throw Sn(t);return ym(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(rn(t),n=t.mode,i=Ed({mode:"hidden",children:i},n),o=or(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=fp(a),o.childLanes=pp(e,l,a),t.memoizedState=cp,Mi(null,o)):(nn(t),rm(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(nn(t),t.flags&=-257,t=mp(e,t,a)):t.memoizedState!==null?(rn(t),t.child=e.child,t.flags|=128,t=null):(rn(t),i=o.fallback,n=t.mode,o=Ed({mode:"visible",children:o.children},n),i=or(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ur(t,e.child,null,a),o=t.child,o.memoizedState=fp(a),o.childLanes=pp(e,l,a),t.memoizedState=cp,t=Mi(null,o));else if(nn(t),ym(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var u=l.dgst;l=u,o=Error(q(419)),o.stack="",o.digest=l,Ki({value:o,source:null,stack:null}),t=mp(e,t,a)}else if(nt||El(e,t,a,!1),l=(a&e.childLanes)!==0,nt||l){if(l=Ne,l!==null&&(o=sy(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,gr(e,o),Kt(l,e,o),og;xm(i)||Dd(),t=mp(e,t,a)}else xm(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,He=ka(i.nextSibling),Ct=t,Ce=!0,mn=null,_a=!1,e!==null&&Py(t,e),t=rm(t,o.children),t.flags|=4096);return t}return n?(rn(t),i=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=No(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?i=No(u,i):(i=or(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,Mi(null,o),o=t.child,i=e.child.memoizedState,i===null?i=fp(a):(n=i.cachePool,n!==null?(s=ot._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Uy(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=pp(e,l,a),t.memoizedState=cp,Mi(e.child,o)):(nn(t),a=e.child,e=a.sibling,a=No(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function rm(e,t){return t=Ed({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ed(e,t){return e=ra(22,e,null,t),e.lanes=0,e}function mp(e,t,a){return ur(t,e.child,null,a),e=rm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function x0(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Yp(e.return,t,a)}function gp(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Db(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=Je.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,ze(Je,l),wt(e,t,o,a),o=Ce?Zi:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x0(e,a,t);else if(e.tag===19)x0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&_d(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),gp(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&_d(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}gp(t,!0,a,null,r,o);break;case"together":gp(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Po(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(El(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,a=No(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=No(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ng(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cd(e)))}function d5(e,t,a){switch(t.tag){case 3:gd(t,t.stateNode.containerInfo),on(t,ot,e.memoizedState.cache),ir();break;case 27:case 5:Dp(t);break;case 4:gd(t,t.stateNode.containerInfo);break;case 10:on(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$p(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(nn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Nb(e,t,a):(nn(t),e=Po(e,t,a),e!==null?e.sibling:null);nn(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(El(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Db(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ze(Je,Je.current),o)break;return null;case 22:return t.lanes=0,Tb(e,t,a,t.pendingProps);case 24:on(t,ot,e.memoizedState.cache)}return Po(e,t,a)}function Rb(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!ng(e,a)&&(t.flags&128)===0)return nt=!1,d5(e,t,a);nt=(e.flags&131072)!==0}else nt=!1,Ce&&(t.flags&1048576)!==0&&By(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=er(t.elementType),t.type=e,typeof e=="function")Om(e)?(o=cr(e,o),t.tag=1,t=g0(null,t,e,o,a)):(t.tag=0,t=nm(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Cm){t.tag=11,t=d0(null,t,e,o,a);break e}else if(n===Sm){t.tag=14,t=c0(null,t,e,o,a);break e}}throw t=Tp(e)||e,Error(q(306,t,""))}}return t;case 0:return nm(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=cr(o,t.pendingProps),g0(e,t,o,n,a);case 3:e:{if(gd(t,t.stateNode.containerInfo),e===null)throw Error(q(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,jp(e,t),Oi(t,o,null,a);var l=t.memoizedState;if(o=l.cache,on(t,ot,o),o!==r.cache&&Zp(t,[ot],a,!0),zi(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=h0(e,t,o,a);break e}else if(o!==n){n=La(Error(q(424)),t),Ki(n),t=h0(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=ka(e.firstChild),Ct=t,Ce=!0,mn=null,_a=!0,a=Vy(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ir(),o===n){t=Po(e,t,a);break e}wt(e,t,o,a)}t=t.child}return t;case 26:return sd(e,t),e===null?(a=H0(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ce||(a=t.type,e=t.pendingProps,o=Bd(pn.current).createElement(a),o[vt]=t,o[jt]=e,Lt(o,a,e),ft(o),t.stateNode=o):t.memoizedState=H0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dp(t),e===null&&Ce&&(o=t.stateNode=L1(t.type,t.pendingProps,pn.current),Ct=t,_a=!0,n=He,kn(t.type)?(bm=n,He=ka(o.firstChild)):He=n),wt(e,t,t.pendingProps.children,a),sd(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((n=o=He)&&(o=P5(o,t.type,t.pendingProps,_a),o!==null?(t.stateNode=o,Ct=t,He=ka(o.firstChild),_a=!1,n=!0):n=!1),n||Sn(t)),Dp(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,gm(n,r)?o=null:l!==null&&gm(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=Xm(e,t,t5,null,null,a),es._currentValue=n),sd(e,t),wt(e,t,o,a),t.child;case 6:return e===null&&Ce&&((e=a=He)&&(a=H5(a,t.pendingProps,_a),a!==null?(t.stateNode=a,Ct=t,He=null,e=!0):e=!1),e||Sn(t)),null;case 13:return Nb(e,t,a);case 4:return gd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ur(t,null,o,a):wt(e,t,o,a),t.child;case 11:return d0(e,t,t.type,t.pendingProps,a);case 7:return wt(e,t,t.pendingProps,a),t.child;case 8:return wt(e,t,t.pendingProps.children,a),t.child;case 12:return wt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,on(t,t.type,o.value),wt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,sr(t),n=St(n),o=o(n),t.flags|=1,wt(e,t,o,a),t.child;case 14:return c0(e,t,t.type,t.pendingProps,a);case 15:return Ab(e,t,t.type,t.pendingProps,a);case 19:return Db(e,t,a);case 31:return u5(e,t,a);case 22:return Tb(e,t,a,t.pendingProps);case 24:return sr(t),o=St(ot),e===null?(n=Um(),n===null&&(n=Ne,r=Hm(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Fm(t),on(t,ot,n)):((e.lanes&a)!==0&&(jp(e,t),Oi(t,null,null,a),zi()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),on(t,ot,o)):(o=r.cache,on(t,ot,o),o!==n.cache&&Zp(t,[ot],a,!0))),wt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(q(156,t.tag))}function So(e){e.flags|=4}function hp(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(n1())e.flags|=8192;else throw rr=Sd,qm}else e.flags&=-16777217}function y0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k1(t))if(n1())e.flags|=8192;else throw rr=Sd,qm}function Yu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ry():536870912,e.lanes|=t,Cl|=t)}function vi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function c5(e,t,a){var o=t.pendingProps;switch(Pm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Do(ot),hl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?So(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ip())),Pe(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(So(t),r!==null?(Pe(t),y0(t,r)):(Pe(t),hp(t,n,null,o,a))):r?r!==e.memoizedState?(So(t),Pe(t),y0(t,r)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&So(t),Pe(t),hp(t,n,e,o,a)),null;case 27:if(hd(t),a=pn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&So(t);else{if(!o){if(t.stateNode===null)throw Error(q(166));return Pe(t),null}e=oo.current,Zr(t)?Zx(t,e):(e=L1(n,o,a),t.stateNode=e,So(t))}return Pe(t),null;case 5:if(hd(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&So(t);else{if(!o){if(t.stateNode===null)throw Error(q(166));return Pe(t),null}if(r=oo.current,Zr(t))Zx(t,r);else{var l=Bd(pn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[vt]=t,r[jt]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Lt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&So(t)}}return Pe(t),hp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&So(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(q(166));if(e=pn.current,Zr(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Ct,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||w1(e.nodeValue,a)),e||Sn(t,!0)}else e=Bd(e).createTextNode(o),e[vt]=t,t.stateNode=e}return Pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Zr(t),a!==null){if(e===null){if(!o)throw Error(q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(557));e[vt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else a=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(na(t),t):(na(t),null);if((t.flags&128)!==0)throw Error(q(558))}return Pe(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Zr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(q(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(q(317));n[vt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),n=!1}else n=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(na(t),t):(na(t),null)}return na(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Yu(t,t.updateQueue),Pe(t),null);case 4:return hl(),e===null&&cg(t.stateNode.containerInfo),Pe(t),null;case 10:return Do(t.type),Pe(t),null;case 19:if(pt(Je),o=t.memoizedState,o===null)return Pe(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)vi(o,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=_d(e),r!==null){for(t.flags|=128,vi(o,!1),e=r.updateQueue,t.updateQueue=e,Yu(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zy(a,e),a=a.sibling;return ze(Je,Je.current&1|2),Ce&&ko(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ia()>Td&&(t.flags|=128,n=!0,vi(o,!1),t.lanes=4194304)}else{if(!n)if(e=_d(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Yu(t,e),vi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Ce)return Pe(t),null}else 2*ia()-o.renderingStartTime>Td&&a!==536870912&&(t.flags|=128,n=!0,vi(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ia(),e.sibling=null,a=Je.current,ze(Je,n?a&1|2:a&1),Ce&&ko(t,o.treeForkCount),e):(Pe(t),null);case 22:case 23:return na(t),Vm(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),a=t.updateQueue,a!==null&&Yu(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&pt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Do(ot),Pe(t),null;case 25:return null;case 30:return null}throw Error(q(156,t.tag))}function f5(e,t){switch(Pm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Do(ot),hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hd(t),null;case 31:if(t.memoizedState!==null){if(na(t),t.alternate===null)throw Error(q(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(na(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pt(Je),null;case 4:return hl(),null;case 10:return Do(t.type),null;case 22:case 23:return na(t),Vm(),e!==null&&pt(nr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Do(ot),null;case 25:return null;default:return null}}function zb(e,t){switch(Pm(t),t.tag){case 3:Do(ot),hl();break;case 26:case 27:case 5:hd(t);break;case 4:hl();break;case 31:t.memoizedState!==null&&na(t);break;case 13:na(t);break;case 19:pt(Je);break;case 10:Do(t.type);break;case 22:case 23:na(t),Vm(),e!==null&&pt(nr);break;case 24:Do(ot)}}function cs(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){Me(t,t.return,i)}}function Ln(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,u=i;try{u()}catch(c){Me(n,s,c)}}}o=o.next}while(o!==r)}}catch(c){Me(t,t.return,c)}}function Ob(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Xy(t,a)}catch(o){Me(e,e.return,o)}}}function Bb(e,t,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,t,o)}}function Pi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Me(e,t,n)}}function ao(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Me(e,t,n)}else a.current=null}function Pb(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Me(e,e.return,n)}}function xp(e,t,a){try{var o=e.stateNode;N5(o,e.type,a,t),o[jt]=t}catch(n){Me(e,e.return,n)}}function Hb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kn(e.type)||e.tag===4}function yp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lm(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ao));else if(o!==4&&(o===27&&kn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(lm(e,t,a),e=e.sibling;e!==null;)lm(e,t,a),e=e.sibling}function Ad(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&kn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ad(e,t,a),e=e.sibling;e!==null;)Ad(e,t,a),e=e.sibling}function Ub(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Lt(t,o,a),t[vt]=e,t[jt]=a}catch(r){Me(e,e.return,r)}}var Mo=!1,at=!1,bp=!1,b0=typeof WeakSet=="function"?WeakSet:Set,ct=null;function p5(e,t){if(e=e.containerInfo,pm=qd,e=ky(e),Dm(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(i=l+n),f!==r||o!==0&&f.nodeType!==3||(s=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break t;if(d===a&&++u===n&&(i=l),d===r&&++c===o&&(s=l),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(mm={focusedElem:e,selectionRange:a},qd=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=cr(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(b){Me(a,a.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(q(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function qb(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_o(e,a),o&4&&cs(5,a);break;case 1:if(_o(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){Me(a,a.return,l)}else{var n=cr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Me(a,a.return,l)}}o&64&&Ob(a),o&512&&Pi(a,a.return);break;case 3:if(_o(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Xy(e,t)}catch(l){Me(a,a.return,l)}}break;case 27:t===null&&o&4&&Ub(a);case 26:case 5:_o(e,a),t===null&&o&4&&Pb(a),o&512&&Pi(a,a.return);break;case 12:_o(e,a);break;case 31:_o(e,a),o&4&&Gb(e,a);break;case 13:_o(e,a),o&4&&Xb(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=C5.bind(null,a),U5(e,a))));break;case 22:if(o=a.memoizedState!==null||Mo,!o){t=t!==null&&t.memoizedState!==null||at,n=Mo;var r=at;Mo=o,(at=t)&&!r?Io(e,a,(a.subtreeFlags&8772)!==0):_o(e,a),Mo=n,at=r}break;case 30:break;default:_o(e,a)}}function Fb(e){var t=e.alternate;t!==null&&(e.alternate=null,Fb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&km(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Yt=!1;function Lo(e,t,a){for(a=a.child;a!==null;)Vb(e,t,a),a=a.sibling}function Vb(e,t,a){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(ns,a)}catch{}switch(a.tag){case 26:at||ao(a,t),Lo(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||ao(a,t);var o=Xe,n=Yt;kn(a.type)&&(Xe=a.stateNode,Yt=!1),Lo(e,t,a),Fi(a.stateNode),Xe=o,Yt=n;break;case 5:at||ao(a,t);case 6:if(o=Xe,n=Yt,Xe=null,Lo(e,t,a),Xe=o,Yt=n,Xe!==null)if(Yt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(r){Me(a,t,r)}else try{Xe.removeChild(a.stateNode)}catch(r){Me(a,t,r)}break;case 18:Xe!==null&&(Yt?(e=Xe,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Il(e)):R0(Xe,a.stateNode));break;case 4:o=Xe,n=Yt,Xe=a.stateNode.containerInfo,Yt=!0,Lo(e,t,a),Xe=o,Yt=n;break;case 0:case 11:case 14:case 15:Ln(2,a,t),at||Ln(4,a,t),Lo(e,t,a);break;case 1:at||(ao(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Bb(a,t,o)),Lo(e,t,a);break;case 21:Lo(e,t,a);break;case 22:at=(o=at)||a.memoizedState!==null,Lo(e,t,a),at=o;break;default:Lo(e,t,a)}}function Gb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Il(e)}catch(a){Me(t,t.return,a)}}}function Xb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Il(e)}catch(a){Me(t,t.return,a)}}function m5(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new b0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new b0),t;default:throw Error(q(435,e.tag))}}function Zu(e,t){var a=m5(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=S5.bind(null,e,o);o.then(n,n)}})}function Gt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(kn(i.type)){Xe=i.stateNode,Yt=!1;break e}break;case 5:Xe=i.stateNode,Yt=!1;break e;case 3:case 4:Xe=i.stateNode.containerInfo,Yt=!0;break e}i=i.return}if(Xe===null)throw Error(q(160));Vb(r,l,n),Xe=null,Yt=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Yb(t,e),t=t.sibling}var Ha=null;function Yb(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Xt(e),o&4&&(Ln(3,e,e.return),cs(3,e),Ln(5,e,e.return));break;case 1:Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),o&64&&Mo&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Ha;if(Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[is]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Lt(r,o,a),r[vt]=e,ft(r),o=r;break e;case"link":var l=q0("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),Lt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=q0("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),Lt(r,o,a),n.head.appendChild(r);break;default:throw Error(q(468,o))}r[vt]=e,ft(r),o=r}e.stateNode=o}else F0(n,e.type,e.stateNode);else e.stateNode=U0(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?F0(n,e.type,e.stateNode):U0(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),a!==null&&o&4&&xp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gt(t,e),Xt(e),o&512&&(at||a===null||ao(a,a.return)),e.flags&32){n=e.stateNode;try{yl(n,"")}catch(g){Me(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,xp(e,n,a!==null?a.memoizedProps:n)),o&1024&&(bp=!0);break;case 6:if(Gt(t,e),Xt(e),o&4){if(e.stateNode===null)throw Error(q(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Me(e,e.return,g)}}break;case 3:if(cd=null,n=Ha,Ha=Pd(t.containerInfo),Gt(t,e),Ha=n,Xt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Il(t.containerInfo)}catch(g){Me(e,e.return,g)}bp&&(bp=!1,Zb(e));break;case 4:o=Ha,Ha=Pd(e.stateNode.containerInfo),Gt(t,e),Xt(e),Ha=o;break;case 12:Gt(t,e),Xt(e);break;case 31:Gt(t,e),Xt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zu(e,o)));break;case 13:Gt(t,e),Xt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=ia()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zu(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=Mo,c=at;if(Mo=u||n,at=c||s,Gt(t,e),at=c,Mo=u,Xt(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Mo||at||tr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var f=s.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null;i.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(g){Me(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){Me(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?z0(p,!0):z0(s.stateNode,!1)}catch(g){Me(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zu(e,a))));break;case 19:Gt(t,e),Xt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zu(e,o)));break;case 30:break;case 21:break;default:Gt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Hb(o)){a=o;break}o=o.return}if(a==null)throw Error(q(160));switch(a.tag){case 27:var n=a.stateNode,r=yp(e);Ad(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(yl(l,""),a.flags&=-33);var i=yp(e);Ad(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,u=yp(e);lm(e,u,s);break;default:throw Error(q(161))}}catch(c){Me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zb(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _o(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qb(e,t.alternate,t),t=t.sibling}function tr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ln(4,t,t.return),tr(t);break;case 1:ao(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Bb(t,t.return,a),tr(t);break;case 27:Fi(t.stateNode);case 26:case 5:ao(t,t.return),tr(t);break;case 22:t.memoizedState===null&&tr(t);break;case 30:tr(t);break;default:tr(t)}e=e.sibling}}function Io(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:Io(n,r,a),cs(4,r);break;case 1:if(Io(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Me(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Gy(s[n],i)}catch(u){Me(o,o.return,u)}}a&&l&64&&Ob(r),Pi(r,r.return);break;case 27:Ub(r);case 26:case 5:Io(n,r,a),a&&o===null&&l&4&&Pb(r),Pi(r,r.return);break;case 12:Io(n,r,a);break;case 31:Io(n,r,a),a&&l&4&&Gb(n,r);break;case 13:Io(n,r,a),a&&l&4&&Xb(n,r);break;case 22:r.memoizedState===null&&Io(n,r,a),Pi(r,r.return);break;case 30:break;default:Io(n,r,a)}t=t.sibling}}function rg(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&us(a))}function lg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&us(e))}function Pa(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kb(e,t,a,o),t=t.sibling}function Kb(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Pa(e,t,a,o),n&2048&&cs(9,t);break;case 1:Pa(e,t,a,o);break;case 3:Pa(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&us(e)));break;case 12:if(n&2048){Pa(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Me(t,t.return,s)}}else Pa(e,t,a,o);break;case 31:Pa(e,t,a,o);break;case 13:Pa(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Pa(e,t,a,o):Hi(e,t):r._visibility&2?Pa(e,t,a,o):(r._visibility|=2,jr(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&rg(l,t);break;case 24:Pa(e,t,a,o),n&2048&&lg(t.alternate,t);break;default:Pa(e,t,a,o)}}function jr(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,u=l.flags;switch(l.tag){case 0:case 11:case 15:jr(r,l,i,s,n),cs(8,l);break;case 23:break;case 22:var c=l.stateNode;l.memoizedState!==null?c._visibility&2?jr(r,l,i,s,n):Hi(r,l):(c._visibility|=2,jr(r,l,i,s,n)),n&&u&2048&&rg(l.alternate,l);break;case 24:jr(r,l,i,s,n),n&&u&2048&&lg(l.alternate,l);break;default:jr(r,l,i,s,n)}t=t.sibling}}function Hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:Hi(a,o),n&2048&&rg(o.alternate,o);break;case 24:Hi(a,o),n&2048&&lg(o.alternate,o);break;default:Hi(a,o)}t=t.sibling}}var Ei=8192;function Kr(e,t,a){if(e.subtreeFlags&Ei)for(e=e.child;e!==null;)jb(e,t,a),e=e.sibling}function jb(e,t,a){switch(e.tag){case 26:Kr(e,t,a),e.flags&Ei&&e.memoizedState!==null&&$5(a,Ha,e.memoizedState,e.memoizedProps);break;case 5:Kr(e,t,a);break;case 3:case 4:var o=Ha;Ha=Pd(e.stateNode.containerInfo),Kr(e,t,a),Ha=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ei,Ei=16777216,Kr(e,t,a),Ei=o):Kr(e,t,a));break;default:Kr(e,t,a)}}function Wb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ct=o,$b(o,e)}Wb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qb(e),e=e.sibling}function Qb(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&Ln(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ud(e)):Ci(e);break;default:Ci(e)}}function ud(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ct=o,$b(o,e)}Wb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ln(8,t,t.return),ud(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ud(t));break;default:ud(t)}e=e.sibling}}function $b(e,t){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Ln(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:us(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ct=o;else e:for(a=e;ct!==null;){o=ct;var n=o.sibling,r=o.return;if(Fb(o),o===a){ct=null;break e}if(n!==null){n.return=r,ct=n;break e}ct=r}}}var g5={getCacheForType:function(e){var t=St(ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return St(ot).controller.signal}},h5=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ne=null,be=null,we=0,ke=0,oa=null,dn=!1,Tl=!1,ig=!1,Ho=0,We=0,_n=0,lr=0,sg=0,la=0,Cl=0,Ui=null,Zt=null,im=!1,ec=0,Jb=0,Td=1/0,Nd=null,xn=null,rt=0,yn=null,Sl=null,Ro=0,sm=0,um=null,e1=null,qi=0,dm=null;function da(){return(Le&2)!==0&&we!==0?we&-we:re.T!==null?dg():uy()}function t1(){if(la===0)if((we&536870912)===0||Ce){var e=Bu;Bu<<=1,(Bu&3932160)===0&&(Bu=262144),la=e}else la=536870912;return e=fa.current,e!==null&&(e.flags|=32),la}function Kt(e,t,a){(e===Ne&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Ll(e,0),cn(e,we,la,!1)),ls(e,a),((Le&2)===0||e!==Ne)&&(e===Ne&&((Le&2)===0&&(lr|=a),We===4&&cn(e,we,la,!1)),ro(e))}function a1(e,t,a){if((Le&6)!==0)throw Error(q(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||rs(e,t),n=o?b5(e,t):wp(e,t,!0),r=o;do{if(n===0){Tl&&!o&&cn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!x5(a)){n=wp(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Ui;var s=i.current.memoizedState.isDehydrated;if(s&&(Ll(i,l).flags|=256),l=wp(i,l,!1),l!==2){if(ig&&!s){i.errorRecoveryDisabledLanes|=r,lr|=r,n=4;break e}r=Zt,Zt=n,r!==null&&(Zt===null?Zt=r:Zt.push.apply(Zt,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){Ll(e,0),cn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(q(345));case 4:if((t&4194048)!==t)break;case 6:cn(o,t,la,!dn);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(q(329))}if((t&62914560)===t&&(n=ec+300-ia(),10<n)){if(cn(o,t,la,!dn),Vd(o,0,!0)!==0)break e;Ro=t,o.timeoutHandle=C1(w0.bind(null,o,a,Zt,Nd,im,t,la,lr,Cl,dn,r,"Throttled",-0,0),n);break e}w0(o,a,Zt,Nd,im,t,la,lr,Cl,dn,r,null,-0,0)}}break}while(!0);ro(e)}function w0(e,t,a,o,n,r,l,i,s,u,c,f,d,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ao},jb(t,r,f);var g=(r&62914560)===r?ec-ia():(r&4194048)===r?Jb-ia():0;if(g=J5(f,g),g!==null){Ro=r,e.cancelPendingCommit=g(C0.bind(null,e,t,r,a,o,n,l,i,s,c,f,null,d,p)),cn(e,r,l,!u);return}}C0(e,t,r,a,o,n,l,i,s)}function x5(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!ca(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t,a,o){t&=~sg,t&=~lr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-ua(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&ly(e,a,t)}function tc(){return(Le&6)===0?(fs(0,!1),!1):!0}function ug(){if(be!==null){if(ke===0)var e=be.return;else e=be,To=hr=null,Km(e),pl=null,ji=0,e=be;for(;e!==null;)zb(e.alternate,e),e=e.return;be=null}}function Ll(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,z5(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ro=0,ug(),Ne=e,be=a=No(e.current,null),we=t,ke=0,oa=null,dn=!1,Tl=rs(e,t),ig=!1,Cl=la=sg=lr=_n=We=0,Zt=Ui=null,im=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-ua(o),r=1<<n;t|=e[n],o&=~r}return Ho=t,Zd(),a}function o1(e,t){pe=null,re.H=Qi,t===Al||t===jd?(t=$x(),ke=3):t===qm?(t=$x(),ke=4):ke=t===og?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,oa=t,be===null&&(We=1,Md(e,La(t,e.current)))}function n1(){var e=fa.current;return e===null?!0:(we&4194048)===we?Ia===null:(we&62914560)===we||(we&536870912)!==0?e===Ia:!1}function r1(){var e=re.H;return re.H=Qi,e===null?Qi:e}function l1(){var e=re.A;return re.A=g5,e}function Dd(){We=4,dn||(we&4194048)!==we&&fa.current!==null||(Tl=!0),(_n&134217727)===0&&(lr&134217727)===0||Ne===null||cn(Ne,we,la,!1)}function wp(e,t,a){var o=Le;Le|=2;var n=r1(),r=l1();(Ne!==e||we!==t)&&(Nd=null,Ll(e,t)),t=!1;var l=We;e:do try{if(ke!==0&&be!==null){var i=be,s=oa;switch(ke){case 8:ug(),l=6;break e;case 3:case 2:case 9:case 6:fa.current===null&&(t=!0);var u=ke;if(ke=0,oa=null,sl(e,i,s,u),a&&Tl){l=0;break e}break;default:u=ke,ke=0,oa=null,sl(e,i,s,u)}}y5(),l=We;break}catch(c){o1(e,c)}while(!0);return t&&e.shellSuspendCounter++,To=hr=null,Le=o,re.H=n,re.A=r,be===null&&(Ne=null,we=0,Zd()),l}function y5(){for(;be!==null;)i1(be)}function b5(e,t){var a=Le;Le|=2;var o=r1(),n=l1();Ne!==e||we!==t?(Nd=null,Td=ia()+500,Ll(e,t)):Tl=rs(e,t);e:do try{if(ke!==0&&be!==null){t=be;var r=oa;t:switch(ke){case 1:ke=0,oa=null,sl(e,t,r,1);break;case 2:case 9:if(Qx(r)){ke=0,oa=null,v0(t);break}t=function(){ke!==2&&ke!==9||Ne!==e||(ke=7),ro(e)},r.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:Qx(r)?(ke=0,oa=null,v0(t)):(ke=0,oa=null,sl(e,t,r,7));break;case 5:var l=null;switch(be.tag){case 26:l=be.memoizedState;case 5:case 27:var i=be;if(l?k1(l):i.stateNode.complete){ke=0,oa=null;var s=i.sibling;if(s!==null)be=s;else{var u=i.return;u!==null?(be=u,ac(u)):be=null}break t}}ke=0,oa=null,sl(e,t,r,5);break;case 6:ke=0,oa=null,sl(e,t,r,6);break;case 8:ug(),We=6;break e;default:throw Error(q(462))}}w5();break}catch(c){o1(e,c)}while(!0);return To=hr=null,re.H=o,re.A=n,Le=a,be!==null?0:(Ne=null,we=0,Zd(),We)}function w5(){for(;be!==null&&!VI();)i1(be)}function i1(e){var t=Rb(e.alternate,e,Ho);e.memoizedProps=e.pendingProps,t===null?ac(e):be=t}function v0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=m0(a,t,t.pendingProps,t.type,void 0,we);break;case 11:t=m0(a,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Km(t);default:zb(a,t),t=be=zy(t,Ho),t=Rb(a,t,Ho)}e.memoizedProps=e.pendingProps,t===null?ac(e):be=t}function sl(e,t,a,o){To=hr=null,Km(t),pl=null,ji=0;var n=t.return;try{if(s5(e,n,t,a,we)){We=1,Md(e,La(a,e.current)),be=null;return}}catch(r){if(n!==null)throw be=n,r;We=1,Md(e,La(a,e.current)),be=null;return}t.flags&32768?(Ce||o===1?e=!0:Tl||(we&536870912)!==0?e=!1:(dn=e=!0,(o===2||o===9||o===3||o===6)&&(o=fa.current,o!==null&&o.tag===13&&(o.flags|=16384))),s1(t,e)):ac(t)}function ac(e){var t=e;do{if((t.flags&32768)!==0){s1(t,dn);return}e=t.return;var a=c5(t.alternate,t,Ho);if(a!==null){be=a;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);We===0&&(We=5)}function s1(e,t){do{var a=f5(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);We=6,be=null}function C0(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do oc();while(rt!==0);if((Le&6)!==0)throw Error(q(327));if(t!==null){if(t===e.current)throw Error(q(177));if(r=t.lanes|t.childLanes,r|=Rm,JI(e,a,r,l,i,s),e===Ne&&(be=Ne=null,we=0),Sl=t,yn=e,Ro=a,sm=r,um=n,e1=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,L5(xd,function(){return p1(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=re.T,re.T=null,n=_e.p,_e.p=2,l=Le,Le|=4;try{p5(e,t,a)}finally{Le=l,_e.p=n,re.T=o}}rt=1,u1(),d1(),c1()}}function u1(){if(rt===1){rt=0;var e=yn,t=Sl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=re.T,re.T=null;var o=_e.p;_e.p=2;var n=Le;Le|=4;try{Yb(t,e);var r=mm,l=ky(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&Iy(i.ownerDocument.documentElement,i)){if(s!==null&&Dm(i)){var u=s.start,c=s.end;if(c===void 0&&(c=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(c,i.value.length);else{var f=i.ownerDocument||document,d=f&&f.defaultView||window;if(d.getSelection){var p=d.getSelection(),g=i.textContent.length,b=Math.min(s.start,g),w=s.end===void 0?b:Math.min(s.end,g);!p.extend&&b>w&&(l=w,w=b,b=l);var h=Gx(i,b),x=Gx(i,w);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),b>w?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=i;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<f.length;i++){var y=f[i];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}qd=!!pm,mm=pm=null}finally{Le=n,_e.p=o,re.T=a}}e.current=t,rt=2}}function d1(){if(rt===2){rt=0;var e=yn,t=Sl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=re.T,re.T=null;var o=_e.p;_e.p=2;var n=Le;Le|=4;try{qb(e,t.alternate,t)}finally{Le=n,_e.p=o,re.T=a}}rt=3}}function c1(){if(rt===4||rt===3){rt=0,GI();var e=yn,t=Sl,a=Ro,o=e1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,Sl=yn=null,f1(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xn=null),Im(a),t=t.stateNode,sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(ns,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=re.T,n=_e.p,_e.p=2,re.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{re.T=t,_e.p=n}}(Ro&3)!==0&&oc(),ro(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===dm?qi++:(qi=0,dm=e):qi=0,fs(0,!1)}}function f1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,us(t)))}function oc(){return u1(),d1(),c1(),p1()}function p1(){if(rt!==5)return!1;var e=yn,t=sm;sm=0;var a=Im(Ro),o=re.T,n=_e.p;try{_e.p=32>a?32:a,re.T=null,a=um,um=null;var r=yn,l=Ro;if(rt=0,Sl=yn=null,Ro=0,(Le&6)!==0)throw Error(q(331));var i=Le;if(Le|=4,Qb(r.current),Kb(r,r.current,l,a),Le=i,fs(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(ns,r)}catch{}return!0}finally{_e.p=n,re.T=o,f1(e,t)}}function S0(e,t,a){t=La(a,t),t=om(e.stateNode,t,2),e=hn(e,t,2),e!==null&&(ls(e,2),ro(e))}function Me(e,t,a){if(e.tag===3)S0(e,e,a);else for(;t!==null;){if(t.tag===3){S0(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xn===null||!xn.has(o))){e=La(a,e),a=Mb(2),o=hn(t,a,2),o!==null&&(Eb(a,o,t,e),ls(o,2),ro(o));break}}t=t.return}}function vp(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new h5;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(ig=!0,n.add(a),e=v5.bind(null,e,t,a),t.then(e,e))}function v5(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ne===e&&(we&a)===a&&(We===4||We===3&&(we&62914560)===we&&300>ia()-ec?(Le&2)===0&&Ll(e,0):sg|=a,Cl===we&&(Cl=0)),ro(e)}function m1(e,t){t===0&&(t=ry()),e=gr(e,t),e!==null&&(ls(e,t),ro(e))}function C5(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),m1(e,a)}function S5(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(q(314))}o!==null&&o.delete(t),m1(e,a)}function L5(e,t){return Lm(e,t)}var Rd=null,Wr=null,cm=!1,zd=!1,Cp=!1,fn=0;function ro(e){e!==Wr&&e.next===null&&(Wr===null?Rd=Wr=e:Wr=Wr.next=e),zd=!0,cm||(cm=!0,I5())}function fs(e,t){if(!Cp&&zd){Cp=!0;do for(var a=!1,o=Rd;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-ua(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,L0(o,r))}else r=we,r=Vd(o,o===Ne?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||rs(o,r)||(a=!0,L0(o,r));o=o.next}while(a);Cp=!1}}function _5(){g1()}function g1(){zd=cm=!1;var e=0;fn!==0&&R5()&&(e=fn);for(var t=ia(),a=null,o=Rd;o!==null;){var n=o.next,r=h1(o,t);r===0?(o.next=null,a===null?Rd=n:a.next=n,n===null&&(Wr=a)):(a=o,(e!==0||(r&3)!==0)&&(zd=!0)),o=n}rt!==0&&rt!==5||fs(e,!1),fn!==0&&(fn=0)}function h1(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-ua(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=$I(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=Ne,a=we,a=Vd(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qf(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||rs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Qf(o),Im(a)){case 2:case 8:a=oy;break;case 32:a=xd;break;case 268435456:a=ny;break;default:a=xd}return o=x1.bind(null,e),a=Lm(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Qf(o),e.callbackPriority=2,e.callbackNode=null,2}function x1(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(oc()&&e.callbackNode!==a)return null;var o=we;return o=Vd(e,e===Ne?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(a1(e,o,t),h1(e,ia()),e.callbackNode!=null&&e.callbackNode===a?x1.bind(null,e):null)}function L0(e,t){if(oc())return null;a1(e,t,!0)}function I5(){O5(function(){(Le&6)!==0?Lm(ay,_5):g1()})}function dg(){if(fn===0){var e=bl;e===0&&(e=Ou,Ou<<=1,(Ou&261888)===0&&(Ou=256)),fn=e}return fn}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ed(""+e)}function I0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function k5(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=_0((n[jt]||null).action),l=o.submitter;l&&(t=(t=l[jt]||null)?_0(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new Gd("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fn!==0){var s=l?I0(n,l):new FormData(n);tm(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?I0(n,l):new FormData(n),tm(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Ku=0;Ku<Vp.length;Ku++)ju=Vp[Ku],k0=ju.toLowerCase(),M0=ju[0].toUpperCase()+ju.slice(1),Ua(k0,"on"+M0);var ju,k0,M0,Ku;Ua(Ey,"onAnimationEnd");Ua(Ay,"onAnimationIteration");Ua(Ty,"onAnimationStart");Ua("dblclick","onDoubleClick");Ua("focusin","onFocus");Ua("focusout","onBlur");Ua(Xk,"onTransitionRun");Ua(Yk,"onTransitionStart");Ua(Zk,"onTransitionCancel");Ua(Ny,"onTransitionEnd");xl("onMouseEnter",["mouseout","mouseover"]);xl("onMouseLeave",["mouseout","mouseover"]);xl("onPointerEnter",["pointerout","pointerover"]);xl("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i));function y1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(c){bd(c)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(c){bd(c)}n.currentTarget=null,r=s}}}}function ye(e,t){var a=t[zp];a===void 0&&(a=t[zp]=new Set);var o=e+"__bubble";a.has(o)||(b1(t,e,2,!1),a.add(o))}function Sp(e,t,a){var o=0;t&&(o|=4),b1(a,e,o,t)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function cg(e){if(!e[Wu]){e[Wu]=!0,dy.forEach(function(a){a!=="selectionchange"&&(M5.has(a)||Sp(a,!1,e),Sp(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wu]||(t[Wu]=!0,Sp("selectionchange",!1,t))}}function b1(e,t,a,o){switch(N1(t)){case 2:var n=aM;break;case 8:n=oM;break;default:n=gg}a=n.bind(null,t,a,e),n=void 0,!Up||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Lp(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=Jr(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}yy(function(){var u=r,c=Em(a),f=[];e:{var d=Dy.get(e);if(d!==void 0){var p=Gd,g=e;switch(e){case"keypress":if(ad(a)===0)break e;case"keydown":case"keyup":p=Sk;break;case"focusin":g="focus",p=ap;break;case"focusout":g="blur",p=ap;break;case"beforeblur":case"afterblur":p=ap;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ck;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ik;break;case Ey:case Ay:case Ty:p=mk;break;case Ny:p=Mk;break;case"scroll":case"scrollend":p=uk;break;case"wheel":p=Ak;break;case"copy":case"cut":case"paste":p=hk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bx;break;case"toggle":case"beforetoggle":p=Nk}var b=(t&4)!==0,w=!b&&(e==="scroll"||e==="scrollend"),h=b?d!==null?d+"Capture":null:d;b=[];for(var x=u,m;x!==null;){var y=x;if(m=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||m===null||h===null||(y=Gi(x,h),y!=null&&b.push(Ji(x,y,m))),w)break;x=x.return}0<b.length&&(d=new p(d,g,null,a,c),f.push({event:d,listeners:b}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&a!==Hp&&(g=a.relatedTarget||a.fromElement)&&(Jr(g)||g[kl]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?Jr(g):null,g!==null&&(w=os(g),b=g.tag,g!==w||b!==5&&b!==27&&b!==6)&&(g=null)):(p=null,g=u),p!==g)){if(b=zx,y="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Bx,y="onPointerLeave",h="onPointerEnter",x="pointer"),w=p==null?d:ki(p),m=g==null?d:ki(g),d=new b(y,x+"leave",p,a,c),d.target=w,d.relatedTarget=m,y=null,Jr(c)===u&&(b=new b(h,x+"enter",g,a,c),b.target=m,b.relatedTarget=w,y=b),w=y,p&&g)t:{for(b=E5,h=p,x=g,m=0,y=h;y;y=b(y))m++;y=0;for(var C=x;C;C=b(C))y++;for(;0<m-y;)h=b(h),m--;for(;0<y-m;)x=b(x),y--;for(;m--;){if(h===x||x!==null&&h===x.alternate){b=h;break t}h=b(h),x=b(x)}b=null}else b=null;p!==null&&E0(f,d,p,b,!1),g!==null&&w!==null&&E0(f,w,g,b,!0)}}e:{if(d=u?ki(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=qx;else if(Ux(d))if(Ly)S=Fk;else{S=Uk;var v=Hk}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&Mm(u.elementType)&&(S=qx):S=qk;if(S&&(S=S(e,u))){Sy(f,S,a,c);break e}v&&v(e,d,u),e==="focusout"&&u&&d.type==="number"&&u.memoizedProps.value!=null&&Pp(d,"number",d.value)}switch(v=u?ki(u):window,e){case"focusin":(Ux(v)||v.contentEditable==="true")&&(al=v,qp=u,Ni=null);break;case"focusout":Ni=qp=al=null;break;case"mousedown":Fp=!0;break;case"contextmenu":case"mouseup":case"dragend":Fp=!1,Xx(f,a,c);break;case"selectionchange":if(Gk)break;case"keydown":case"keyup":Xx(f,a,c)}var _;if(Nm)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else tl?vy(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(wy&&a.locale!=="ko"&&(tl||I!=="onCompositionStart"?I==="onCompositionEnd"&&tl&&(_=by()):(un=c,Am="value"in un?un.value:un.textContent,tl=!0)),v=Od(u,I),0<v.length&&(I=new Ox(I,e,null,a,c),f.push({event:I,listeners:v}),_?I.data=_:(_=Cy(a),_!==null&&(I.data=_)))),(_=Rk?zk(e,a):Ok(e,a))&&(I=Od(u,"onBeforeInput"),0<I.length&&(v=new Ox("onBeforeInput","beforeinput",null,a,c),f.push({event:v,listeners:I}),v.data=_)),k5(f,e,u,a,c)}y1(f,t)})}function Ji(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Od(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Gi(e,a),n!=null&&o.unshift(Ji(e,n,r)),n=Gi(e,t),n!=null&&o.push(Ji(e,n,r))),e.tag===3)return o;e=e.return}return[]}function E5(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function E0(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,u=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||u===null||(s=u,n?(u=Gi(a,r),u!=null&&l.unshift(Ji(a,u,s))):n||(u=Gi(a,r),u!=null&&l.push(Ji(a,u,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var A5=/\r\n?/g,T5=/\u0000|\uFFFD/g;function A0(e){return(typeof e=="string"?e:""+e).replace(A5,`
`).replace(T5,"")}function w1(e,t){return t=A0(t),A0(e)===t}function Ee(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||yl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&yl(e,""+o);break;case"className":Hu(e,"class",o);break;case"tabIndex":Hu(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Hu(e,a,o);break;case"style":xy(e,o,r);break;case"data":if(t!=="object"){Hu(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ed(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ed(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ao);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(q(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(q(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ed(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Ju(e,"popover",o);break;case"xlinkActuate":Co(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Co(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Co(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Co(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Co(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Co(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Co(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Co(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Co(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ju(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ik.get(a)||a,Ju(e,a,o))}}function fm(e,t,a,o,n,r){switch(a){case"style":xy(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(q(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(q(60));e.innerHTML=a}}break;case"children":typeof o=="string"?yl(e,o):(typeof o=="number"||typeof o=="bigint")&&yl(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ao);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[jt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ju(e,a,o)}}}function Lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:Ee(e,t,r,l,a,null)}}n&&Ee(e,t,"srcSet",a.srcSet,a,null),o&&Ee(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var i=r=l=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];if(c!=null)switch(o){case"name":n=c;break;case"type":l=c;break;case"checked":s=c;break;case"defaultChecked":u=c;break;case"value":r=c;break;case"defaultValue":i=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(q(137,t));break;default:Ee(e,t,o,c,a,null)}}my(e,r,i,s,u,l,n,!1);return;case"select":ye("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:Ee(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?dl(e,!!o,t,!1):a!=null&&dl(e,!!o,a,!0);return;case"textarea":ye("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(q(91));break;default:Ee(e,t,l,i,a,null)}hy(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ee(e,t,s,o,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<$i.length;o++)ye($i[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:Ee(e,t,u,o,a,null)}return;default:if(Mm(t)){for(c in a)a.hasOwnProperty(c)&&(o=a[c],o!==void 0&&fm(e,t,c,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Ee(e,t,i,o,a,null))}function N5(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,u=null,c=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Ee(e,t,p,null,o,f)}}for(var d in o){var p=o[d];if(f=a[d],o.hasOwnProperty(d)&&(p!=null||f!=null))switch(d){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":c=p;break;case"value":l=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,t));break;default:p!==f&&Ee(e,t,d,p,o,f)}}Bp(e,l,i,s,u,c,r,n);return;case"select":p=l=i=d=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Ee(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":d=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&Ee(e,t,n,r,o,s)}t=i,a=l,o=p,d!=null?dl(e,!!a,d,!1):!!o!=!!a&&(t!=null?dl(e,!!a,t,!0):dl(e,!!a,a?[]:"",!1));return;case"textarea":p=d=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Ee(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":d=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(q(91));break;default:n!==r&&Ee(e,t,l,n,o,r)}gy(e,d,p);return;case"option":for(var g in a)d=a[g],a.hasOwnProperty(g)&&d!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ee(e,t,g,null,o,d));for(s in o)d=o[s],p=a[s],o.hasOwnProperty(s)&&d!==p&&(d!=null||p!=null)&&(s==="selected"?e.selected=d&&typeof d!="function"&&typeof d!="symbol":Ee(e,t,s,d,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in a)d=a[b],a.hasOwnProperty(b)&&d!=null&&!o.hasOwnProperty(b)&&Ee(e,t,b,null,o,d);for(u in o)if(d=o[u],p=a[u],o.hasOwnProperty(u)&&d!==p&&(d!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(q(137,t));break;default:Ee(e,t,u,d,o,p)}return;default:if(Mm(t)){for(var w in a)d=a[w],a.hasOwnProperty(w)&&d!==void 0&&!o.hasOwnProperty(w)&&fm(e,t,w,void 0,o,d);for(c in o)d=o[c],p=a[c],!o.hasOwnProperty(c)||d===p||d===void 0&&p===void 0||fm(e,t,c,d,o,p);return}}for(var h in a)d=a[h],a.hasOwnProperty(h)&&d!=null&&!o.hasOwnProperty(h)&&Ee(e,t,h,null,o,d);for(f in o)d=o[f],p=a[f],!o.hasOwnProperty(f)||d===p||d==null&&p==null||Ee(e,t,f,d,o,p)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function D5(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&T0(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>i)break;var c=s.transferSize,f=s.initiatorType;c&&T0(f)&&(s=s.responseEnd,l+=c*(s<i?1:(i-u)/(s-u)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pm=null,mm=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function N0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function R5(){var e=window.event;return e&&e.type==="popstate"?e===_p?!1:(_p=e,!0):(_p=null,!1)}var C1=typeof setTimeout=="function"?setTimeout:void 0,z5=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,O5=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(e){return D0.resolve(null).then(e).catch(B5)}:C1;function B5(e){setTimeout(function(){throw e})}function kn(e){return e==="head"}function R0(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Il(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fi(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[is]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&Fi(e.ownerDocument.body);a=n}while(a);Il(t)}function z0(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function hm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hm(a),km(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function P5(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[is])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ka(e.nextSibling),e===null)break}return null}function H5(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ka(e.nextSibling),e===null))return null;return e}function S1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ka(e.nextSibling),e===null))return null;return e}function xm(e){return e.data==="$?"||e.data==="$~"}function ym(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function U5(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ka(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bm=null;function O0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ka(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function B0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function L1(e,t,a){switch(t=Bd(a),e){case"html":if(e=t.documentElement,!e)throw Error(q(452));return e;case"head":if(e=t.head,!e)throw Error(q(453));return e;case"body":if(e=t.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}function Fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);km(e)}var Ma=new Map,P0=new Set;function Pd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Uo=_e.d;_e.d={f:q5,r:F5,D:V5,C:G5,L:X5,m:Y5,X:K5,S:Z5,M:j5};function q5(){var e=Uo.f(),t=tc();return e||t}function F5(e){var t=Ml(e);t!==null&&t.tag===5&&t.type==="form"?xb(t):Uo.r(e)}var Nl=typeof document>"u"?null:document;function _1(e,t,a){var o=Nl;if(o&&typeof t=="string"&&t){var n=Sa(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),P0.has(n)||(P0.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Lt(t,"link",e),ft(t),o.head.appendChild(t)))}}function V5(e){Uo.D(e),_1("dns-prefetch",e,null)}function G5(e,t){Uo.C(e,t),_1("preconnect",e,t)}function X5(e,t,a){Uo.L(e,t,a);var o=Nl;if(o&&e&&t){var n='link[rel="preload"][as="'+Sa(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Sa(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Sa(a.imageSizes)+'"]')):n+='[href="'+Sa(e)+'"]';var r=n;switch(t){case"style":r=_l(e);break;case"script":r=Dl(e)}Ma.has(r)||(e=Ue({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ma.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(ps(r))||t==="script"&&o.querySelector(ms(r))||(t=o.createElement("link"),Lt(t,"link",e),ft(t),o.head.appendChild(t)))}}function Y5(e,t){Uo.m(e,t);var a=Nl;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Sa(o)+'"][href="'+Sa(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Dl(e)}if(!Ma.has(r)&&(e=Ue({rel:"modulepreload",href:e},t),Ma.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ms(r)))return}o=a.createElement("link"),Lt(o,"link",e),ft(o),a.head.appendChild(o)}}}function Z5(e,t,a){Uo.S(e,t,a);var o=Nl;if(o&&e){var n=ul(o).hoistableStyles,r=_l(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(ps(r)))i.loading=5;else{e=Ue({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ma.get(r))&&fg(e,a);var s=l=o.createElement("link");ft(s),Lt(s,"link",e),s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,dd(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function K5(e,t){Uo.X(e,t);var a=Nl;if(a&&e){var o=ul(a).hoistableScripts,n=Dl(e),r=o.get(n);r||(r=a.querySelector(ms(n)),r||(e=Ue({src:e,async:!0},t),(t=Ma.get(n))&&pg(e,t),r=a.createElement("script"),ft(r),Lt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function j5(e,t){Uo.M(e,t);var a=Nl;if(a&&e){var o=ul(a).hoistableScripts,n=Dl(e),r=o.get(n);r||(r=a.querySelector(ms(n)),r||(e=Ue({src:e,async:!0,type:"module"},t),(t=Ma.get(n))&&pg(e,t),r=a.createElement("script"),ft(r),Lt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function H0(e,t,a,o){var n=(n=pn.current)?Pd(n):null;if(!n)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=ul(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var r=ul(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(ps(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Ma.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ma.set(e,a),r||W5(n,e,a,l.state))),t&&o===null)throw Error(q(528,""));return l}if(t&&o!==null)throw Error(q(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(a),a=ul(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function _l(e){return'href="'+Sa(e)+'"'}function ps(e){return'link[rel="stylesheet"]['+e+"]"}function I1(e){return Ue({},e,{"data-precedence":e.precedence,precedence:null})}function W5(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Lt(t,"link",a),ft(t),e.head.appendChild(t))}function Dl(e){return'[src="'+Sa(e)+'"]'}function ms(e){return"script[async]"+e}function U0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Sa(a.href)+'"]');if(o)return t.instance=o,ft(o),o;var n=Ue({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ft(o),Lt(o,"style",n),dd(o,a.precedence,e),t.instance=o;case"stylesheet":n=_l(a.href);var r=e.querySelector(ps(n));if(r)return t.state.loading|=4,t.instance=r,ft(r),r;o=I1(a),(n=Ma.get(n))&&fg(o,n),r=(e.ownerDocument||e).createElement("link"),ft(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Lt(r,"link",o),t.state.loading|=4,dd(r,a.precedence,e),t.instance=r;case"script":return r=Dl(a.src),(n=e.querySelector(ms(r)))?(t.instance=n,ft(n),n):(o=a,(n=Ma.get(r))&&(o=Ue({},a),pg(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),ft(n),Lt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,dd(o,a.precedence,e));return t.instance}function dd(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cd=null;function q0(e,t,a){if(cd===null){var o=new Map,n=cd=new Map;n.set(a,o)}else n=cd,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[is]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function F0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Q5(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function k1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $5(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(o.href),r=t.querySelector(ps(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Hd.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ft(r);return}r=t.ownerDocument||t,o=I1(o),(n=Ma.get(n))&&fg(o,n),r=r.createElement("link"),ft(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Lt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Hd.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ip=0;function J5(e,t){return e.stylesheets&&e.count===0&&fd(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&fd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ip===0&&(Ip=62500*D5());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fd(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ip?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function Hd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ud=null;function fd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ud=new Map,t.forEach(eM,e),Ud=null,Hd.call(e))}function eM(e,t){if(!(t.state.loading&4)){var a=Ud.get(e);if(a)var o=a.get(null);else{a=new Map,Ud.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=Hd.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var es={$$typeof:Eo,Provider:null,Consumer:null,_currentValue:ar,_currentValue2:ar,_threadCount:0};function tM(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$f(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$f(0),this.hiddenUpdates=$f(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function M1(e,t,a,o,n,r,l,i,s,u,c,f){return e=new tM(e,t,a,l,s,u,c,f,i),t=1,r===!0&&(t|=24),r=ra(3,null,null,t),e.current=r,r.stateNode=e,t=Hm(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Fm(r),e}function E1(e){return e?(e=rl,e):rl}function A1(e,t,a,o,n,r){n=E1(n),o.context===null?o.context=n:o.pendingContext=n,o=gn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=hn(e,o,t),a!==null&&(Kt(a,e,t),Ri(a,e,t))}function V0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function mg(e,t){V0(e,t),(e=e.alternate)&&V0(e,t)}function T1(e){if(e.tag===13||e.tag===31){var t=gr(e,67108864);t!==null&&Kt(t,e,67108864),mg(e,67108864)}}function G0(e){if(e.tag===13||e.tag===31){var t=da();t=_m(t);var a=gr(e,t);a!==null&&Kt(a,e,t),mg(e,t)}}var qd=!0;function aM(e,t,a,o){var n=re.T;re.T=null;var r=_e.p;try{_e.p=2,gg(e,t,a,o)}finally{_e.p=r,re.T=n}}function oM(e,t,a,o){var n=re.T;re.T=null;var r=_e.p;try{_e.p=8,gg(e,t,a,o)}finally{_e.p=r,re.T=n}}function gg(e,t,a,o){if(qd){var n=wm(o);if(n===null)Lp(e,t,o,Fd,a),X0(e,o);else if(rM(n,e,t,a,o))o.stopPropagation();else if(X0(e,o),t&4&&-1<nM.indexOf(e)){for(;n!==null;){var r=Ml(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Jn(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-ua(l);i.entanglements[1]|=s,l&=~s}ro(r),(Le&6)===0&&(Td=ia()+500,fs(0,!1))}}break;case 31:case 13:i=gr(r,2),i!==null&&Kt(i,r,2),tc(),mg(r,2)}if(r=wm(o),r===null&&Lp(e,t,o,Fd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Lp(e,t,o,null,a)}}function wm(e){return e=Em(e),hg(e)}var Fd=null;function hg(e){if(Fd=null,e=Jr(e),e!==null){var t=os(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Q0(t),e!==null)return e;e=null}else if(a===31){if(e=$0(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fd=e,null}function N1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(XI()){case ay:return 2;case oy:return 8;case xd:case YI:return 32;case ny:return 268435456;default:return 32}default:return 32}}var vm=!1,bn=null,wn=null,vn=null,ts=new Map,as=new Map,ln=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":ts.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(t.pointerId)}}function Si(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Ml(t),t!==null&&T1(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function rM(e,t,a,o,n){switch(t){case"focusin":return bn=Si(bn,e,t,a,o,n),!0;case"dragenter":return wn=Si(wn,e,t,a,o,n),!0;case"mouseover":return vn=Si(vn,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return ts.set(r,Si(ts.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,as.set(r,Si(as.get(r)||null,e,t,a,o,n)),!0}return!1}function D1(e){var t=Jr(e.target);if(t!==null){var a=os(t);if(a!==null){if(t=a.tag,t===13){if(t=Q0(a),t!==null){e.blockedOn=t,Mx(e.priority,function(){G0(a)});return}}else if(t===31){if(t=$0(a),t!==null){e.blockedOn=t,Mx(e.priority,function(){G0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wm(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hp=o,a.target.dispatchEvent(o),Hp=null}else return t=Ml(a),t!==null&&T1(t),e.blockedOn=a,!1;t.shift()}return!0}function Y0(e,t,a){pd(e)&&a.delete(t)}function lM(){vm=!1,bn!==null&&pd(bn)&&(bn=null),wn!==null&&pd(wn)&&(wn=null),vn!==null&&pd(vn)&&(vn=null),ts.forEach(Y0),as.forEach(Y0)}function Qu(e,t){e.blockedOn===t&&(e.blockedOn=null,vm||(vm=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,lM)))}var $u=null;function Z0(e){$u!==e&&($u=e,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,function(){$u===e&&($u=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(hg(o||a)===null)continue;break}var r=Ml(a);r!==null&&(e.splice(t,3),t-=3,tm(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Il(e){function t(s){return Qu(s,e)}bn!==null&&Qu(bn,e),wn!==null&&Qu(wn,e),vn!==null&&Qu(vn,e),ts.forEach(t),as.forEach(t);for(var a=0;a<ln.length;a++){var o=ln[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)D1(a),a.blockedOn===null&&ln.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[jt]||null;if(typeof r=="function")l||Z0(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[jt]||null)i=l.formAction;else if(hg(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),Z0(a)}}}function R1(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function xg(e){this._internalRoot=e}nc.prototype.render=xg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));var a=t.current,o=da();A1(a,o,e,t,null,null)};nc.prototype.unmount=xg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;A1(e.current,2,null,e,null,null),tc(),t[kl]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var t=uy();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ln.length&&t!==0&&t<ln[a].priority;a++);ln.splice(a,0,e),a===0&&D1(e)}};var K0=j0.version;if(K0!=="19.2.8")throw Error(q(527,K0,"19.2.8"));_e.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=PI(t),e=e!==null?J0(e):null,e=e===null?null:e.stateNode,e};var iM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:re,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Li=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Li.isDisabled&&Li.supportsFiber))try{ns=Li.inject(iM),sa=Li}catch{}var Li;rc.createRoot=function(e,t){if(!W0(e))throw Error(q(299));var a=!1,o="",n=_b,r=Ib,l=kb;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=M1(e,1,!1,null,null,a,o,null,n,r,l,R1),e[kl]=t.current,cg(e),new xg(t)};rc.hydrateRoot=function(e,t,a){if(!W0(e))throw Error(q(299));var o=!1,n="",r=_b,l=Ib,i=kb,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=M1(e,1,!0,t,a??null,o,n,s,r,l,i,R1),t.context=E1(null),a=t.current,o=da(),o=_m(o),n=gn(o),n.callback=null,hn(a,n,o),a=o,t.current.lanes=a,ls(t,a),ro(t),e[kl]=t.current,cg(e),new nc(t)};rc.version="19.2.8"});var yg=Vt((B8,B1)=>{"use strict";function O1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O1)}catch(e){console.error(e)}}O1(),B1.exports=z1()});var H1=Vt(lc=>{"use strict";var sM=Symbol.for("react.transitional.element"),uM=Symbol.for("react.fragment");function P1(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:sM,type:e,key:o,ref:t!==void 0?t:null,props:a}}lc.Fragment=uM;lc.jsx=P1;lc.jsxs=P1});var $=Vt((H8,U1)=>{"use strict";U1.exports=H1()});var L2=Vt(S2=>{"use strict";var jl=oe();function o4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var n4=typeof Object.is=="function"?Object.is:o4,r4=jl.useState,l4=jl.useEffect,i4=jl.useLayoutEffect,s4=jl.useDebugValue;function u4(e,t){var a=t(),o=r4({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return i4(function(){n.value=a,n.getSnapshot=t,ih(n)&&r({inst:n})},[e,a,t]),l4(function(){return ih(n)&&r({inst:n}),e(function(){ih(n)&&r({inst:n})})},[e]),s4(a),a}function ih(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!n4(e,a)}catch{return!0}}function d4(e,t){return t()}var c4=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?d4:u4;S2.useSyncExternalStore=jl.useSyncExternalStore!==void 0?jl.useSyncExternalStore:c4});var I2=Vt((N7,_2)=>{"use strict";_2.exports=L2()});var M2=Vt(k2=>{"use strict";var Qc=oe(),f4=I2();function p4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var m4=typeof Object.is=="function"?Object.is:p4,g4=f4.useSyncExternalStore,h4=Qc.useRef,x4=Qc.useEffect,y4=Qc.useMemo,b4=Qc.useDebugValue;k2.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=h4(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=y4(function(){function s(p){if(!u){if(u=!0,c=p,p=o(p),n!==void 0&&l.hasValue){var g=l.value;if(n(g,p))return f=g}return f=p}if(g=f,m4(c,p))return g;var b=o(p);return n!==void 0&&n(g,b)?(c=p,g):(c=p,f=b)}var u=!1,c,f,d=a===void 0?null:a;return[function(){return s(t())},d===null?void 0:function(){return s(d())}]},[t,a,o,n]);var i=g4(e,r[0],r[1]);return x4(function(){l.hasValue=!0,l.value=i},[i]),b4(i),i}});var A2=Vt((R7,E2)=>{"use strict";E2.exports=M2()});var M8={};gI(M8,{mountCanvas:()=>_8,unmountCanvas:()=>k8,updateCanvas:()=>I8});var i_=U(yg(),1);var pi=U(oe(),1);var Ze=U(oe(),1);var R=U($()),z=U(oe());function Qe(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=Qe(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var dM={value:()=>{}};function F1(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new ic(a)}function ic(e){this._=e}function cM(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}ic.prototype=F1.prototype={constructor:ic,on:function(e,t){var a=this._,o=cM(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=fM(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=q1(a[n],e.name,t);else if(t==null)for(n in a)a[n]=q1(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new ic(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function fM(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function q1(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=dM,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var xr=F1;var sc="http://www.w3.org/1999/xhtml",bg={svg:"http://www.w3.org/2000/svg",xhtml:sc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function qo(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),bg.hasOwnProperty(t)?{space:bg[t],local:e}:e}function pM(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===sc&&t.documentElement.namespaceURI===sc?t.createElement(e):t.createElementNS(a,e)}}function mM(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function uc(e){var t=qo(e);return(t.local?mM:pM)(t)}function gM(){}function yr(e){return e==null?gM:function(){return this.querySelector(e)}}function V1(e){typeof e!="function"&&(e=yr(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,u,c=0;c<l;++c)(s=r[c])&&(u=e.call(s,s.__data__,c,r))&&("__data__"in s&&(u.__data__=s.__data__),i[c]=u);return new $e(o,this._parents)}function wg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function hM(){return[]}function gs(e){return e==null?hM:function(){return this.querySelectorAll(e)}}function xM(e){return function(){return wg(e.apply(this,arguments))}}function G1(e){typeof e=="function"?e=xM(e):e=gs(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&(o.push(e.call(s,s.__data__,u,l)),n.push(s));return new $e(o,n)}function hs(e){return function(){return this.matches(e)}}function dc(e){return function(t){return t.matches(e)}}var yM=Array.prototype.find;function bM(e){return function(){return yM.call(this.children,e)}}function wM(){return this.firstElementChild}function X1(e){return this.select(e==null?wM:bM(typeof e=="function"?e:dc(e)))}var vM=Array.prototype.filter;function CM(){return Array.from(this.children)}function SM(e){return function(){return vM.call(this.children,e)}}function Y1(e){return this.selectAll(e==null?CM:SM(typeof e=="function"?e:dc(e)))}function Z1(e){typeof e!="function"&&(e=hs(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new $e(o,this._parents)}function cc(e){return new Array(e.length)}function K1(){return new $e(this._enter||this._groups.map(cc),this._parents)}function xs(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}xs.prototype={constructor:xs,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function j1(e){return function(){return e}}function LM(e,t,a,o,n,r){for(var l=0,i,s=t.length,u=r.length;l<u;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new xs(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function _M(e,t,a,o,n,r,l){var i,s,u=new Map,c=t.length,f=r.length,d=new Array(c),p;for(i=0;i<c;++i)(s=t[i])&&(d[i]=p=l.call(s,s.__data__,i,t)+"",u.has(p)?n[i]=s:u.set(p,s));for(i=0;i<f;++i)p=l.call(e,r[i],i,r)+"",(s=u.get(p))?(o[i]=s,s.__data__=r[i],u.delete(p)):a[i]=new xs(e,r[i]);for(i=0;i<c;++i)(s=t[i])&&u.get(d[i])===s&&(n[i]=s)}function IM(e){return e.__data__}function W1(e,t){if(!arguments.length)return Array.from(this,IM);var a=t?_M:LM,o=this._parents,n=this._groups;typeof e!="function"&&(e=j1(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),u=0;u<r;++u){var c=o[u],f=n[u],d=f.length,p=kM(e.call(c,c&&c.__data__,u,o)),g=p.length,b=i[u]=new Array(g),w=l[u]=new Array(g),h=s[u]=new Array(d);a(c,f,b,w,h,p,t);for(var x=0,m=0,y,C;x<g;++x)if(y=b[x]){for(x>=m&&(m=x+1);!(C=w[m])&&++m<g;);y._next=C||null}}return l=new $e(l,o),l._enter=i,l._exit=s,l}function kM(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Q1(){return new $e(this._exit||this._groups.map(cc),this._parents)}function $1(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function J1(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var u=a[s],c=o[s],f=u.length,d=i[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||c[g])&&(d[g]=p);for(;s<n;++s)i[s]=a[s];return new $e(i,this._parents)}function ew(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function tw(e){e||(e=MM);function t(f,d){return f&&d?e(f.__data__,d.__data__):!f-!d}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),u,c=0;c<i;++c)(u=l[c])&&(s[c]=u);s.sort(t)}return new $e(n,this._parents).order()}function MM(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function aw(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function ow(){return Array.from(this)}function nw(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function rw(){let e=0;for(let t of this)++e;return e}function lw(){return!this.node()}function iw(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function EM(e){return function(){this.removeAttribute(e)}}function AM(e){return function(){this.removeAttributeNS(e.space,e.local)}}function TM(e,t){return function(){this.setAttribute(e,t)}}function NM(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function DM(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function RM(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function sw(e,t){var a=qo(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?AM:EM:typeof t=="function"?a.local?RM:DM:a.local?NM:TM)(a,t))}function fc(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function zM(e){return function(){this.style.removeProperty(e)}}function OM(e,t,a){return function(){this.style.setProperty(e,t,a)}}function BM(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function uw(e,t,a){return arguments.length>1?this.each((t==null?zM:typeof t=="function"?BM:OM)(e,t,a??"")):Mn(this.node(),e)}function Mn(e,t){return e.style.getPropertyValue(t)||fc(e).getComputedStyle(e,null).getPropertyValue(t)}function PM(e){return function(){delete this[e]}}function HM(e,t){return function(){this[e]=t}}function UM(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function dw(e,t){return arguments.length>1?this.each((t==null?PM:typeof t=="function"?UM:HM)(e,t)):this.node()[e]}function cw(e){return e.trim().split(/^|\s+/)}function vg(e){return e.classList||new fw(e)}function fw(e){this._node=e,this._names=cw(e.getAttribute("class")||"")}fw.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function pw(e,t){for(var a=vg(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function mw(e,t){for(var a=vg(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function qM(e){return function(){pw(this,e)}}function FM(e){return function(){mw(this,e)}}function VM(e,t){return function(){(t.apply(this,arguments)?pw:mw)(this,e)}}function gw(e,t){var a=cw(e+"");if(arguments.length<2){for(var o=vg(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?VM:t?qM:FM)(a,t))}function GM(){this.textContent=""}function XM(e){return function(){this.textContent=e}}function YM(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function hw(e){return arguments.length?this.each(e==null?GM:(typeof e=="function"?YM:XM)(e)):this.node().textContent}function ZM(){this.innerHTML=""}function KM(e){return function(){this.innerHTML=e}}function jM(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function xw(e){return arguments.length?this.each(e==null?ZM:(typeof e=="function"?jM:KM)(e)):this.node().innerHTML}function WM(){this.nextSibling&&this.parentNode.appendChild(this)}function yw(){return this.each(WM)}function QM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bw(){return this.each(QM)}function ww(e){var t=typeof e=="function"?e:uc(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function $M(){return null}function vw(e,t){var a=typeof e=="function"?e:uc(e),o=t==null?$M:typeof t=="function"?t:yr(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function JM(){var e=this.parentNode;e&&e.removeChild(this)}function Cw(){return this.each(JM)}function eE(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function tE(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Sw(e){return this.select(e?tE:eE)}function Lw(e){return arguments.length?this.property("__data__",e):this.node().__data__}function aE(e){return function(t){e.call(this,t,this.__data__)}}function oE(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function nE(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function rE(e,t,a){return function(){var o=this.__on,n,r=aE(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function _w(e,t,a){var o=oE(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,u=i.length,c;s<u;++s)for(n=0,c=i[s];n<r;++n)if((l=o[n]).type===c.type&&l.name===c.name)return c.value}return}for(i=t?rE:nE,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function Iw(e,t,a){var o=fc(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function lE(e,t){return function(){return Iw(this,e,t)}}function iE(e,t){return function(){return Iw(this,e,t.apply(this,arguments))}}function kw(e,t){return this.each((typeof t=="function"?iE:lE)(e,t))}function*Mw(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var Cg=[null];function $e(e,t){this._groups=e,this._parents=t}function Ew(){return new $e([[document.documentElement]],Cg)}function sE(){return this}$e.prototype=Ew.prototype={constructor:$e,select:V1,selectAll:G1,selectChild:X1,selectChildren:Y1,filter:Z1,data:W1,enter:K1,exit:Q1,join:$1,merge:J1,selection:sE,order:ew,sort:tw,call:aw,nodes:ow,node:nw,size:rw,empty:lw,each:iw,attr:sw,style:uw,property:dw,classed:gw,text:hw,html:xw,raise:yw,lower:bw,append:ww,insert:vw,remove:Cw,clone:Sw,datum:Lw,on:_w,dispatch:kw,[Symbol.iterator]:Mw};var Fo=Ew;function mt(e){return typeof e=="string"?new $e([[document.querySelector(e)]],[document.documentElement]):new $e([[e]],Cg)}function Aw(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Bt(e,t){if(e=Aw(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var Tw={passive:!1},br={capture:!0,passive:!1};function pc(e){e.stopImmediatePropagation()}function En(e){e.preventDefault(),e.stopImmediatePropagation()}function ys(e){var t=e.document.documentElement,a=mt(e).on("dragstart.drag",En,br);"onselectstart"in t?a.on("selectstart.drag",En,br):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function bs(e,t){var a=e.document.documentElement,o=mt(e).on("dragstart.drag",null);t&&(o.on("click.drag",En,br),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var ws=e=>()=>e;function vs(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}vs.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function uE(e){return!e.ctrlKey&&!e.button}function dE(){return this.parentNode}function cE(e,t){return t??{x:e.x,y:e.y}}function fE(){return navigator.maxTouchPoints||"ontouchstart"in this}function mc(){var e=uE,t=dE,a=cE,o=fE,n={},r=xr("start","drag","end"),l=0,i,s,u,c,f=0;function d(y){y.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",h,Tw).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(y,C){if(!(c||!e.call(this,y,C))){var S=m(this,t.call(this,y,C),y,C,"mouse");S&&(mt(y.view).on("mousemove.drag",g,br).on("mouseup.drag",b,br),ys(y.view),pc(y),u=!1,i=y.clientX,s=y.clientY,S("start",y))}}function g(y){if(En(y),!u){var C=y.clientX-i,S=y.clientY-s;u=C*C+S*S>f}n.mouse("drag",y)}function b(y){mt(y.view).on("mousemove.drag mouseup.drag",null),bs(y.view,u),En(y),n.mouse("end",y)}function w(y,C){if(e.call(this,y,C)){var S=y.changedTouches,v=t.call(this,y,C),_=S.length,I,N;for(I=0;I<_;++I)(N=m(this,v,y,C,S[I].identifier,S[I]))&&(pc(y),N("start",y,S[I]))}}function h(y){var C=y.changedTouches,S=C.length,v,_;for(v=0;v<S;++v)(_=n[C[v].identifier])&&(En(y),_("drag",y,C[v]))}function x(y){var C=y.changedTouches,S=C.length,v,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),v=0;v<S;++v)(_=n[C[v].identifier])&&(pc(y),_("end",y,C[v]))}function m(y,C,S,v,_,I){var N=r.copy(),T=Bt(I||S,C),P,B,L;if((L=a.call(y,new vs("beforestart",{sourceEvent:S,target:d,identifier:_,active:l,x:T[0],y:T[1],dx:0,dy:0,dispatch:N}),v))!=null)return P=L.x-T[0]||0,B=L.y-T[1]||0,function M(A,k,E){var D=T,V;switch(A){case"start":n[_]=M,V=l++;break;case"end":delete n[_],--l;case"drag":T=Bt(E||k,C),V=l;break}N.call(A,y,new vs(A,{sourceEvent:k,subject:L,target:d,identifier:_,active:V,x:T[0]+P,y:T[1]+B,dx:T[0]-D[0],dy:T[1]-D[1],dispatch:N}),v)}}return d.filter=function(y){return arguments.length?(e=typeof y=="function"?y:ws(!!y),d):e},d.container=function(y){return arguments.length?(t=typeof y=="function"?y:ws(y),d):t},d.subject=function(y){return arguments.length?(a=typeof y=="function"?y:ws(y),d):a},d.touchable=function(y){return arguments.length?(o=typeof y=="function"?y:ws(!!y),d):o},d.on=function(){var y=r.on.apply(r,arguments);return y===r?d:y},d.clickDistance=function(y){return arguments.length?(f=(y=+y)*y,d):Math.sqrt(f)},d}function gc(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Sg(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Ls(){}var Cs=.7,yc=1/Cs,Rl="\\s*([+-]?\\d+)\\s*",Ss="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",lo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pE=/^#([0-9a-f]{3,8})$/,mE=new RegExp(`^rgb\\(${Rl},${Rl},${Rl}\\)$`),gE=new RegExp(`^rgb\\(${lo},${lo},${lo}\\)$`),hE=new RegExp(`^rgba\\(${Rl},${Rl},${Rl},${Ss}\\)$`),xE=new RegExp(`^rgba\\(${lo},${lo},${lo},${Ss}\\)$`),yE=new RegExp(`^hsl\\(${Ss},${lo},${lo}\\)$`),bE=new RegExp(`^hsla\\(${Ss},${lo},${lo},${Ss}\\)$`),Nw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gc(Ls,Fa,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Dw,formatHex:Dw,formatHex8:wE,formatHsl:vE,formatRgb:Rw,toString:Rw});function Dw(){return this.rgb().formatHex()}function wE(){return this.rgb().formatHex8()}function vE(){return Uw(this).formatHsl()}function Rw(){return this.rgb().formatRgb()}function Fa(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=pE.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?zw(t):a===3?new Qt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?hc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?hc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=mE.exec(e))?new Qt(t[1],t[2],t[3],1):(t=gE.exec(e))?new Qt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=hE.exec(e))?hc(t[1],t[2],t[3],t[4]):(t=xE.exec(e))?hc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=yE.exec(e))?Pw(t[1],t[2]/100,t[3]/100,1):(t=bE.exec(e))?Pw(t[1],t[2]/100,t[3]/100,t[4]):Nw.hasOwnProperty(e)?zw(Nw[e]):e==="transparent"?new Qt(NaN,NaN,NaN,0):null}function zw(e){return new Qt(e>>16&255,e>>8&255,e&255,1)}function hc(e,t,a,o){return o<=0&&(e=t=a=NaN),new Qt(e,t,a,o)}function CE(e){return e instanceof Ls||(e=Fa(e)),e?(e=e.rgb(),new Qt(e.r,e.g,e.b,e.opacity)):new Qt}function zl(e,t,a,o){return arguments.length===1?CE(e):new Qt(e,t,a,o??1)}function Qt(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}gc(Qt,zl,Sg(Ls,{brighter(e){return e=e==null?yc:Math.pow(yc,e),new Qt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Cs:Math.pow(Cs,e),new Qt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Qt(vr(this.r),vr(this.g),vr(this.b),bc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ow,formatHex:Ow,formatHex8:SE,formatRgb:Bw,toString:Bw}));function Ow(){return`#${wr(this.r)}${wr(this.g)}${wr(this.b)}`}function SE(){return`#${wr(this.r)}${wr(this.g)}${wr(this.b)}${wr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Bw(){let e=bc(this.opacity);return`${e===1?"rgb(":"rgba("}${vr(this.r)}, ${vr(this.g)}, ${vr(this.b)}${e===1?")":`, ${e})`}`}function bc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function vr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function wr(e){return e=vr(e),(e<16?"0":"")+e.toString(16)}function Pw(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new qa(e,t,a,o)}function Uw(e){if(e instanceof qa)return new qa(e.h,e.s,e.l,e.opacity);if(e instanceof Ls||(e=Fa(e)),!e)return new qa;if(e instanceof qa)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new qa(l,i,s,e.opacity)}function qw(e,t,a,o){return arguments.length===1?Uw(e):new qa(e,t,a,o??1)}function qa(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}gc(qa,qw,Sg(Ls,{brighter(e){return e=e==null?yc:Math.pow(yc,e),new qa(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Cs:Math.pow(Cs,e),new qa(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Qt(Lg(e>=240?e-240:e+120,n,o),Lg(e,n,o),Lg(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new qa(Hw(this.h),xc(this.s),xc(this.l),bc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=bc(this.opacity);return`${e===1?"hsl(":"hsla("}${Hw(this.h)}, ${xc(this.s)*100}%, ${xc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Hw(e){return e=(e||0)%360,e<0?e+360:e}function xc(e){return Math.max(0,Math.min(1,e||0))}function Lg(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function _g(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function Fw(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return _g((a-o/t)*t,l,n,r,i)}}function Vw(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return _g((a-o/t)*t,n,r,l,i)}}var _s=e=>()=>e;function LE(e,t){return function(a){return e+a*t}}function _E(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function Gw(e){return(e=+e)==1?wc:function(t,a){return a-t?_E(t,a,e):_s(isNaN(t)?a:t)}}function wc(e,t){var a=t-e;return a?LE(e,a):_s(isNaN(e)?t:e)}var Cr=(function e(t){var a=Gw(t);function o(n,r){var l=a((n=zl(n)).r,(r=zl(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),u=wc(n.opacity,r.opacity);return function(c){return n.r=l(c),n.g=i(c),n.b=s(c),n.opacity=u(c),n+""}}return o.gamma=e,o})(1);function Xw(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=zl(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var IE=Xw(Fw),kE=Xw(Vw);function Yw(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function Zw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kw(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=Vo(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function jw(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Pt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function Ww(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=Vo(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var kg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ig=new RegExp(kg.source,"g");function ME(e){return function(){return e}}function EE(e){return function(t){return e(t)+""}}function Is(e,t){var a=kg.lastIndex=Ig.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=kg.exec(e))&&(n=Ig.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:Pt(o,n)})),a=Ig.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?EE(s[0].x):ME(t):(t=s.length,function(u){for(var c=0,f;c<t;++c)i[(f=s[c]).i]=f.x(u);return i.join("")})}function Vo(e,t){var a=typeof t,o;return t==null||a==="boolean"?_s(t):(a==="number"?Pt:a==="string"?(o=Fa(t))?(t=o,Cr):Is:t instanceof Fa?Cr:t instanceof Date?jw:Zw(t)?Yw:Array.isArray(t)?Kw:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ww:Pt)(e,t)}var Qw=180/Math.PI,vc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Mg(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*Qw,skewX:Math.atan(s)*Qw,scaleX:l,scaleY:i}}var Cc;function $w(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?vc:Mg(t.a,t.b,t.c,t.d,t.e,t.f)}function Jw(e){return e==null?vc:(Cc||(Cc=document.createElementNS("http://www.w3.org/2000/svg","g")),Cc.setAttribute("transform",e),(e=Cc.transform.baseVal.consolidate())?(e=e.matrix,Mg(e.a,e.b,e.c,e.d,e.e,e.f)):vc)}function ev(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,c,f,d,p,g){if(u!==f||c!==d){var b=p.push("translate(",null,t,null,a);g.push({i:b-4,x:Pt(u,f)},{i:b-2,x:Pt(c,d)})}else(f||d)&&p.push("translate("+f+t+d+a)}function l(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Pt(u,c)})):c&&f.push(n(f)+"rotate("+c+o)}function i(u,c,f,d){u!==c?d.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Pt(u,c)}):c&&f.push(n(f)+"skewX("+c+o)}function s(u,c,f,d,p,g){if(u!==f||c!==d){var b=p.push(n(p)+"scale(",null,",",null,")");g.push({i:b-4,x:Pt(u,f)},{i:b-2,x:Pt(c,d)})}else(f!==1||d!==1)&&p.push(n(p)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=e(u),c=e(c),r(u.translateX,u.translateY,c.translateX,c.translateY,f,d),l(u.rotate,c.rotate,f,d),i(u.skewX,c.skewX,f,d),s(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(p){for(var g=-1,b=d.length,w;++g<b;)f[(w=d[g]).i]=w.x(p);return f.join("")}}}var Eg=ev($w,"px, ","px)","deg)"),Ag=ev(Jw,", ",")",")");var AE=1e-12;function tv(e){return((e=Math.exp(e))+1/e)/2}function TE(e){return((e=Math.exp(e))-1/e)/2}function NE(e){return((e=Math.exp(2*e))-1)/(e+1)}var Sr=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],u=r[2],c=l[0],f=l[1],d=l[2],p=c-i,g=f-s,b=p*p+g*g,w,h;if(b<AE)h=Math.log(d/u)/t,w=function(v){return[i+v*p,s+v*g,u*Math.exp(t*v*h)]};else{var x=Math.sqrt(b),m=(d*d-u*u+o*b)/(2*u*a*x),y=(d*d-u*u-o*b)/(2*d*a*x),C=Math.log(Math.sqrt(m*m+1)-m),S=Math.log(Math.sqrt(y*y+1)-y);h=(S-C)/t,w=function(v){var _=v*h,I=tv(C),N=u/(a*x)*(I*NE(t*_+C)-TE(C));return[i+N*p,s+N*g,u*I/tv(t*_+C)]}}return w.duration=h*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var Ol=0,Ms=0,ks=0,ov=1e3,Sc,Es,Lc=0,Lr=0,_c=0,As=typeof performance=="object"&&performance.now?performance:Date,nv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Ns(){return Lr||(nv(DE),Lr=As.now()+_c)}function DE(){Lr=0}function Ts(){this._call=this._time=this._next=null}Ts.prototype=Ic.prototype={constructor:Ts,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?Ns():+a)+(t==null?0:+t),!this._next&&Es!==this&&(Es?Es._next=this:Sc=this,Es=this),this._call=e,this._time=a,Tg()},stop:function(){this._call&&(this._call=null,this._time=1/0,Tg())}};function Ic(e,t,a){var o=new Ts;return o.restart(e,t,a),o}function rv(){Ns(),++Ol;for(var e=Sc,t;e;)(t=Lr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ol}function av(){Lr=(Lc=As.now())+_c,Ol=Ms=0;try{rv()}finally{Ol=0,zE(),Lr=0}}function RE(){var e=As.now(),t=e-Lc;t>ov&&(_c-=t,Lc=e)}function zE(){for(var e,t=Sc,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:Sc=a);Es=e,Tg(o)}function Tg(e){if(!Ol){Ms&&(Ms=clearTimeout(Ms));var t=e-Lr;t>24?(e<1/0&&(Ms=setTimeout(av,e-As.now()-_c)),ks&&(ks=clearInterval(ks))):(ks||(Lc=As.now(),ks=setInterval(RE,ov)),Ol=1,nv(av))}}function kc(e,t,a){var o=new Ts;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var OE=xr("start","end","cancel","interrupt"),BE=[],sv=0,lv=1,Ec=2,Mc=3,iv=4,Ac=5,Ds=6;function An(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;PE(e,a,{name:t,index:o,group:n,on:OE,tween:BE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:sv})}function Rs(e,t){var a=it(e,t);if(a.state>sv)throw new Error("too late; already scheduled");return a}function _t(e,t){var a=it(e,t);if(a.state>Mc)throw new Error("too late; already running");return a}function it(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function PE(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=Ic(r,0,a.time);function r(u){a.state=lv,a.timer.restart(l,a.delay,a.time),a.delay<=u&&l(u-a.delay)}function l(u){var c,f,d,p;if(a.state!==lv)return s();for(c in o)if(p=o[c],p.name===a.name){if(p.state===Mc)return kc(l);p.state===iv?(p.state=Ds,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[c]):+c<t&&(p.state=Ds,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[c])}if(kc(function(){a.state===Mc&&(a.state=iv,a.timer.restart(i,a.delay,a.time),i(u))}),a.state=Ec,a.on.call("start",e,e.__data__,a.index,a.group),a.state===Ec){for(a.state=Mc,n=new Array(d=a.tween.length),c=0,f=-1;c<d;++c)(p=a.tween[c].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function i(u){for(var c=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=Ac,1),f=-1,d=n.length;++f<d;)n[f].call(e,c);a.state===Ac&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=Ds,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function _r(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>Ec&&o.state<Ac,o.state=Ds,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function uv(e){return this.each(function(){_r(this,e)})}function HE(e,t){var a,o;return function(){var n=_t(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function UE(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=_t(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=i;break}s===u&&n.push(i)}r.tween=n}}function dv(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=it(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?HE:UE)(a,e,t))}function Bl(e,t,a){var o=e._id;return e.each(function(){var n=_t(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return it(n,o).value[t]}}function Tc(e,t){var a;return(typeof t=="number"?Pt:t instanceof Fa?Cr:(a=Fa(t))?(t=a,Cr):Is)(e,t)}function qE(e){return function(){this.removeAttribute(e)}}function FE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function VE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function GE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function XE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function YE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function cv(e,t){var a=qo(e),o=a==="transform"?Ag:Tc;return this.attrTween(e,typeof t=="function"?(a.local?YE:XE)(a,o,Bl(this,"attr."+e,t)):t==null?(a.local?FE:qE)(a):(a.local?GE:VE)(a,o,t))}function ZE(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function KE(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function jE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&KE(e,r)),a}return n._value=t,n}function WE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&ZE(e,r)),a}return n._value=t,n}function fv(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=qo(e);return this.tween(a,(o.local?jE:WE)(o,t))}function QE(e,t){return function(){Rs(this,e).delay=+t.apply(this,arguments)}}function $E(e,t){return t=+t,function(){Rs(this,e).delay=t}}function pv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?QE:$E)(t,e)):it(this.node(),t).delay}function JE(e,t){return function(){_t(this,e).duration=+t.apply(this,arguments)}}function e3(e,t){return t=+t,function(){_t(this,e).duration=t}}function mv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?JE:e3)(t,e)):it(this.node(),t).duration}function t3(e,t){if(typeof t!="function")throw new Error;return function(){_t(this,e).ease=t}}function gv(e){var t=this._id;return arguments.length?this.each(t3(t,e)):it(this.node(),t).ease}function a3(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;_t(this,e).ease=a}}function hv(e){if(typeof e!="function")throw new Error;return this.each(a3(this._id,e))}function xv(e){typeof e!="function"&&(e=hs(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new Ht(o,this._parents,this._name,this._id)}function yv(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],u=a[i],c=s.length,f=l[i]=new Array(c),d,p=0;p<c;++p)(d=s[p]||u[p])&&(f[p]=d);for(;i<o;++i)l[i]=t[i];return new Ht(l,this._parents,this._name,this._id)}function o3(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function n3(e,t,a){var o,n,r=o3(t)?Rs:_t;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function bv(e,t){var a=this._id;return arguments.length<2?it(this.node(),a).on.on(e):this.each(n3(a,e,t))}function r3(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function wv(){return this.on("end.remove",r3(this._id))}function vv(e){var t=this._name,a=this._id;typeof e!="function"&&(e=yr(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,u=r[l]=new Array(s),c,f,d=0;d<s;++d)(c=i[d])&&(f=e.call(c,c.__data__,d,i))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,An(u[d],t,a,d,u,it(c,a)));return new Ht(r,this._parents,t,a)}function Cv(e){var t=this._name,a=this._id;typeof e!="function"&&(e=gs(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],u=s.length,c,f=0;f<u;++f)if(c=s[f]){for(var d=e.call(c,c.__data__,f,s),p,g=it(c,a),b=0,w=d.length;b<w;++b)(p=d[b])&&An(p,t,a,b,d,g);r.push(d),l.push(c)}return new Ht(r,l,t,a)}var l3=Fo.prototype.constructor;function Sv(){return new l3(this._groups,this._parents)}function i3(e,t){var a,o,n;return function(){var r=Mn(this,e),l=(this.style.removeProperty(e),Mn(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function Lv(e){return function(){this.style.removeProperty(e)}}function s3(e,t,a){var o,n=a+"",r;return function(){var l=Mn(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function u3(e,t,a){var o,n,r;return function(){var l=Mn(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),Mn(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function d3(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=_t(this,e),u=s.on,c=s.value[r]==null?i||(i=Lv(t)):void 0;(u!==a||n!==c)&&(o=(a=u).copy()).on(l,n=c),s.on=o}}function _v(e,t,a){var o=(e+="")=="transform"?Eg:Tc;return t==null?this.styleTween(e,i3(e,o)).on("end.style."+e,Lv(e)):typeof t=="function"?this.styleTween(e,u3(e,o,Bl(this,"style."+e,t))).each(d3(this._id,e)):this.styleTween(e,s3(e,o,t),a).on("end.style."+e,null)}function c3(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function f3(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&c3(e,l,a)),o}return r._value=t,r}function Iv(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,f3(e,t,a??""))}function p3(e){return function(){this.textContent=e}}function m3(e){return function(){var t=e(this);this.textContent=t??""}}function kv(e){return this.tween("text",typeof e=="function"?m3(Bl(this,"text",e)):p3(e==null?"":e+""))}function g3(e){return function(t){this.textContent=e.call(this,t)}}function h3(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&g3(n)),t}return o._value=e,o}function Mv(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,h3(e))}function Ev(){for(var e=this._name,t=this._id,a=Nc(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)if(s=l[u]){var c=it(s,t);An(s,e,a,u,l,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Ht(o,this._parents,e,a)}function Av(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var u=_t(this,o),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),u.on=t}),n===0&&r()})}var x3=0;function Ht(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function Tv(e){return Fo().transition(e)}function Nc(){return++x3}var Go=Fo.prototype;Ht.prototype=Tv.prototype={constructor:Ht,select:vv,selectAll:Cv,selectChild:Go.selectChild,selectChildren:Go.selectChildren,filter:xv,merge:yv,selection:Sv,transition:Ev,call:Go.call,nodes:Go.nodes,node:Go.node,size:Go.size,empty:Go.empty,each:Go.each,on:bv,attr:cv,attrTween:fv,style:_v,styleTween:Iv,text:kv,textTween:Mv,remove:wv,tween:dv,delay:pv,duration:mv,ease:gv,easeVarying:hv,end:Av,[Symbol.iterator]:Go[Symbol.iterator]};function Dc(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var y3={time:null,delay:0,duration:250,ease:Dc};function b3(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function Nv(e){var t,a;e instanceof Ht?(t=e._id,e=e._name):(t=Nc(),(a=y3).time=Ns(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&An(s,e,t,u,l,a||b3(s,t));return new Ht(o,this._parents,e,t)}Fo.prototype.interrupt=uv;Fo.prototype.transition=Nv;var zs=e=>()=>e;function Ng(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function Va(e,t,a){this.k=e,this.x=t,this.y=a}Va.prototype={constructor:Va,scale:function(e){return e===1?this:new Va(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Va(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ir=new Va(1,0,0);Os.prototype=Va.prototype;function Os(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Ir;return e.__zoom}function Rc(e){e.stopImmediatePropagation()}function Pl(e){e.preventDefault(),e.stopImmediatePropagation()}function w3(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function v3(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Dv(){return this.__zoom||Ir}function C3(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function S3(){return navigator.maxTouchPoints||"ontouchstart"in this}function L3(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function zc(){var e=w3,t=v3,a=L3,o=C3,n=S3,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=Sr,u=xr("start","zoom","end"),c,f,d,p=500,g=150,b=0,w=10;function h(L){L.property("__zoom",Dv).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",N).filter(n).on("touchstart.zoom",T).on("touchmove.zoom",P).on("touchend.zoom touchcancel.zoom",B).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,M,A,k){var E=L.selection?L.selection():L;E.property("__zoom",Dv),L!==E?C(L,M,A,k):E.interrupt().each(function(){S(this,arguments).event(k).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},h.scaleBy=function(L,M,A,k){h.scaleTo(L,function(){var E=this.__zoom.k,D=typeof M=="function"?M.apply(this,arguments):M;return E*D},A,k)},h.scaleTo=function(L,M,A,k){h.transform(L,function(){var E=t.apply(this,arguments),D=this.__zoom,V=A==null?y(E):typeof A=="function"?A.apply(this,arguments):A,G=D.invert(V),O=typeof M=="function"?M.apply(this,arguments):M;return a(m(x(D,O),V,G),E,l)},A,k)},h.translateBy=function(L,M,A,k){h.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof A=="function"?A.apply(this,arguments):A),t.apply(this,arguments),l)},null,k)},h.translateTo=function(L,M,A,k,E){h.transform(L,function(){var D=t.apply(this,arguments),V=this.__zoom,G=k==null?y(D):typeof k=="function"?k.apply(this,arguments):k;return a(Ir.translate(G[0],G[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof A=="function"?-A.apply(this,arguments):-A),D,l)},k,E)};function x(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new Va(M,L.x,L.y)}function m(L,M,A){var k=M[0]-A[0]*L.k,E=M[1]-A[1]*L.k;return k===L.x&&E===L.y?L:new Va(L.k,k,E)}function y(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function C(L,M,A,k){L.on("start.zoom",function(){S(this,arguments).event(k).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(k).end()}).tween("zoom",function(){var E=this,D=arguments,V=S(E,D).event(k),G=t.apply(E,D),O=A==null?y(G):typeof A=="function"?A.apply(E,D):A,Y=Math.max(G[1][0]-G[0][0],G[1][1]-G[0][1]),Z=E.__zoom,Q=typeof M=="function"?M.apply(E,D):M,fe=s(Z.invert(O).concat(Y/Z.k),Q.invert(O).concat(Y/Q.k));return function(te){if(te===1)te=Q;else{var H=fe(te),j=Y/H[2];te=new Va(j,O[0]-H[0]*j,O[1]-H[1]*j)}V.zoom(null,te)}})}function S(L,M,A){return!A&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=mt(this.that).datum();u.call(L,this.that,new Ng(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var A=S(this,M).event(L),k=this.__zoom,E=Math.max(r[0],Math.min(r[1],k.k*Math.pow(2,o.apply(this,arguments)))),D=Bt(L);if(A.wheel)(A.mouse[0][0]!==D[0]||A.mouse[0][1]!==D[1])&&(A.mouse[1]=k.invert(A.mouse[0]=D)),clearTimeout(A.wheel);else{if(k.k===E)return;A.mouse=[D,k.invert(D)],_r(this),A.start()}Pl(L),A.wheel=setTimeout(V,g),A.zoom("mouse",a(m(x(k,E),A.mouse[0],A.mouse[1]),A.extent,l));function V(){A.wheel=null,A.end()}}function I(L,...M){if(d||!e.apply(this,arguments))return;var A=L.currentTarget,k=S(this,M,!0).event(L),E=mt(L.view).on("mousemove.zoom",O,!0).on("mouseup.zoom",Y,!0),D=Bt(L,A),V=L.clientX,G=L.clientY;ys(L.view),Rc(L),k.mouse=[D,this.__zoom.invert(D)],_r(this),k.start();function O(Z){if(Pl(Z),!k.moved){var Q=Z.clientX-V,fe=Z.clientY-G;k.moved=Q*Q+fe*fe>b}k.event(Z).zoom("mouse",a(m(k.that.__zoom,k.mouse[0]=Bt(Z,A),k.mouse[1]),k.extent,l))}function Y(Z){E.on("mousemove.zoom mouseup.zoom",null),bs(Z.view,k.moved),Pl(Z),k.event(Z).end()}}function N(L,...M){if(e.apply(this,arguments)){var A=this.__zoom,k=Bt(L.changedTouches?L.changedTouches[0]:L,this),E=A.invert(k),D=A.k*(L.shiftKey?.5:2),V=a(m(x(A,D),k,E),t.apply(this,M),l);Pl(L),i>0?mt(this).transition().duration(i).call(C,V,k,L):mt(this).call(h.transform,V,k,L)}}function T(L,...M){if(e.apply(this,arguments)){var A=L.touches,k=A.length,E=S(this,M,L.changedTouches.length===k).event(L),D,V,G,O;for(Rc(L),V=0;V<k;++V)G=A[V],O=Bt(G,this),O=[O,this.__zoom.invert(O),G.identifier],E.touch0?!E.touch1&&E.touch0[2]!==O[2]&&(E.touch1=O,E.taps=0):(E.touch0=O,D=!0,E.taps=1+!!c);c&&(c=clearTimeout(c)),D&&(E.taps<2&&(f=O[0],c=setTimeout(function(){c=null},p)),_r(this),E.start())}}function P(L,...M){if(this.__zooming){var A=S(this,M).event(L),k=L.changedTouches,E=k.length,D,V,G,O;for(Pl(L),D=0;D<E;++D)V=k[D],G=Bt(V,this),A.touch0&&A.touch0[2]===V.identifier?A.touch0[0]=G:A.touch1&&A.touch1[2]===V.identifier&&(A.touch1[0]=G);if(V=A.that.__zoom,A.touch1){var Y=A.touch0[0],Z=A.touch0[1],Q=A.touch1[0],fe=A.touch1[1],te=(te=Q[0]-Y[0])*te+(te=Q[1]-Y[1])*te,H=(H=fe[0]-Z[0])*H+(H=fe[1]-Z[1])*H;V=x(V,Math.sqrt(te/H)),G=[(Y[0]+Q[0])/2,(Y[1]+Q[1])/2],O=[(Z[0]+fe[0])/2,(Z[1]+fe[1])/2]}else if(A.touch0)G=A.touch0[0],O=A.touch0[1];else return;A.zoom("touch",a(m(V,G,O),A.extent,l))}}function B(L,...M){if(this.__zooming){var A=S(this,M).event(L),k=L.changedTouches,E=k.length,D,V;for(Rc(L),d&&clearTimeout(d),d=setTimeout(function(){d=null},p),D=0;D<E;++D)V=k[D],A.touch0&&A.touch0[2]===V.identifier?delete A.touch0:A.touch1&&A.touch1[2]===V.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(V=Bt(V,this),Math.hypot(f[0]-V[0],f[1]-V[1])<w)){var G=mt(this).on("dblclick.zoom");G&&G.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:zs(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:zs(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:zs(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:zs([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],h):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(i=+L,h):i},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(b=(L=+L)*L,h):Math.sqrt(b)},h.tapDistance=function(L){return arguments.length?(w=+L,h):w},h}var pa={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Fl=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Bg=["Enter"," ","Escape"],Pg={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Rn;(function(e){e.Strict="strict",e.Loose="loose"})(Rn||(Rn={}));var Ga;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ga||(Ga={}));var Xo;(function(e){e.Partial="partial",e.Full="full"})(Xo||(Xo={}));var Hg={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},io;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(io||(io={}));var Ul;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ul||(Ul={}));var ee;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ee||(ee={}));var Rv={[ee.Left]:ee.Right,[ee.Right]:ee.Left,[ee.Top]:ee.Bottom,[ee.Bottom]:ee.Top};function Ug(e){return e===null?null:e?"valid":"invalid"}var qg=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Zv=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Fg=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Vg=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Ps=(e,t=[0,0])=>{let{width:a,height:o}=Ta(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Gg=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):Fg(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,qc(n,Pc(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Fc(o):{x:0,y:0,width:0,height:0}},Vl=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=qc(a,Pc(n)),o=!0)}),o?Fc(a):{x:0,y:0,width:0,height:0}},Hc=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,c=t.height/n,f=[];for(let d of e.values()){let{measured:p,selectable:g=!0,hidden:b=!1}=d;if(l&&!g||b)continue;let w=p.width??d.width??d.initialWidth??0,h=p.height??d.height??d.initialHeight??0,{x,y:m}=d.internals.positionAbsolute,y=$v(i,s,u,c,x,m,w,h),C=w*h,S=r&&y>0;(!d.internals.handleBounds||S||y>=C||d.dragging)&&f.push(d)}return f},Kv=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function _3(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=Ta(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function jv({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=_3(e,l),s=Vl(i),u=Us(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(u,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function Xg({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:u}=i?i.internals.positionAbsolute:{x:0,y:0},c=l.origin??o,f=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",pa.error005());else{let{width:p,height:g}=Ta(i);p&&g&&(f=[[s,u],[s+p,u+g]])}else i&&Er(l.extent)&&(f=[[l.extent[0][0]+s,l.extent[0][1]+u],[l.extent[1][0]+s,l.extent[1][1]+u]]);let d=Er(f)?kr(t,f,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",pa.error015()),{position:{x:d.x-s+(l.measured.width??0)*c[0],y:d.y-u+(l.measured.height??0)*c[1]},positionAbsolute:d}}async function Wv({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(d=>d.id)),l=[];for(let d of a){if(d.deletable===!1)continue;let p=r.has(d.id),g=!p&&d.parentId&&l.find(b=>b.id===d.parentId);(p||g)&&l.push(d)}let i=new Set(t.map(d=>d.id)),s=o.filter(d=>d.deletable!==!1),c=Kv(l,s);for(let d of s)i.has(d.id)&&!c.find(g=>g.id===d.id)&&c.push(d);if(!n)return{edges:c,nodes:l};let f=await n({nodes:l,edges:c});return typeof f=="boolean"?f?{edges:c,nodes:l}:{edges:[],nodes:[]}:f}var ql=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),kr=(e={x:0,y:0},t,a)=>({x:ql(e.x,t[0][0],t[1][0]-(a?.width??0)),y:ql(e.y,t[0][1],t[1][1]-(a?.height??0))});function Qv(e,t,a){let{width:o,height:n}=Ta(a),{x:r,y:l}=a.internals.positionAbsolute;return kr(e,[[r,l],[r+o,l+n]],t)}var zv=(e,t,a)=>e<t?ql(Math.abs(e-t),1,t)/t:e>a?-ql(Math.abs(e-a),1,t)/t:0,Uc=(e,t,a=15,o=40)=>{let n=zv(e.x,o,t.width-o)*a,r=zv(e.y,o,t.height-o)*a;return[n,r]},qc=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Og=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Fc=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Gl=(e,t=[0,0])=>{let{x:a,y:o}=Fg(e)?e.internals.positionAbsolute:Ps(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Pc=(e,t=[0,0])=>{let{x:a,y:o}=Fg(e)?e.internals.positionAbsolute:Ps(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Yg=(e,t)=>Fc(qc(Og(e),Og(t))),$v=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*u)},Hs=(e,t)=>$v(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Zg=e=>Ea(e.width)&&Ea(e.height)&&Ea(e.x)&&Ea(e.y),Ea=e=>!isNaN(e)&&isFinite(e),Kg=(e,t)=>(a,o)=>{},Xl=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Yl=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?Xl(i,l):i},Mr=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Hl(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function I3(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Hl(e,a),n=Hl(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Hl(e.top??e.y??0,a),n=Hl(e.bottom??e.y??0,a),r=Hl(e.left??e.x??0,t),l=Hl(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function k3(e,t,a,o,n,r){let{x:l,y:i}=Mr(e,[t,a,o]),{x:s,y:u}=Mr({x:e.x+e.width,y:e.y+e.height},[t,a,o]),c=n-s,f=r-u;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(c),bottom:Math.floor(f)}}var Us=(e,t,a,o,n,r)=>{let l=I3(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,u=Math.min(i,s),c=ql(u,o,n),f=e.x+e.width/2,d=e.y+e.height/2,p=t/2-f*c,g=a/2-d*c,b=k3(e,p,g,c,t,a),w={left:Math.min(b.left-l.left,0),top:Math.min(b.top-l.top,0),right:Math.min(b.right-l.right,0),bottom:Math.min(b.bottom-l.bottom,0)};return{x:p-w.left+w.right,y:g-w.top+w.bottom,zoom:c}},Zl=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function Er(e){return e!=null&&e!=="parent"}function Ta(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function jg(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Wg(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function Qg(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function Jv(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function e2(e){return{...Pg,...e||{}}}function Bs(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=Aa(e),i=Yl({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:u}=a?Xl(i,t):i;return{xSnapped:s,ySnapped:u,...i}}var Vc=e=>({width:e.offsetWidth,height:e.offsetHeight}),$g=e=>e?.getRootNode?.()||window?.document,M3=["INPUT","SELECT","TEXTAREA"];function Jg(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:M3.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var eh=e=>"clientX"in e,Aa=(e,t)=>{let a=eh(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},Ov=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,...Vc(l)}})};function Gc({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,u=t*.125+r*.375+i*.375+o*.125,c=Math.abs(s-e),f=Math.abs(u-t);return[s,u,c,f]}function Oc(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Bv({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ee.Left:return[t-Oc(t-o,r),a];case ee.Right:return[t+Oc(o-t,r),a];case ee.Top:return[t,a-Oc(a-n,r)];case ee.Bottom:return[t,a+Oc(n-a,r)]}}function Kl({sourceX:e,sourceY:t,sourcePosition:a=ee.Bottom,targetX:o,targetY:n,targetPosition:r=ee.Top,curvature:l=.25}){let[i,s]=Bv({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[u,c]=Bv({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[f,d,p,g]=Gc({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:u,targetControlY:c});return[`M${e},${t} C${i},${s} ${u},${c} ${o},${n}`,f,d,p,g]}function th({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function t2({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function a2({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=qc(Pc(e),Pc(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Hs(l,Fc(r))>0}var E3=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,A3=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),o2=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",pa.error006()),t;let o=a.getEdgeId||E3,n;return qg(e)?n={...e}:n={...e,id:o(e)},A3(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Xc({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=th({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var Pv={[ee.Left]:{x:-1,y:0},[ee.Right]:{x:1,y:0},[ee.Top]:{x:0,y:-1},[ee.Bottom]:{x:0,y:1}},T3=({source:e,sourcePosition:t=ee.Bottom,target:a})=>t===ee.Left||t===ee.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},Hv=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function N3({source:e,sourcePosition:t=ee.Bottom,target:a,targetPosition:o=ee.Top,center:n,offset:r,stepPosition:l}){let i=Pv[t],s=Pv[o],u={x:e.x+i.x*r,y:e.y+i.y*r},c={x:a.x+s.x*r,y:a.y+s.y*r},f=T3({source:u,sourcePosition:t,target:c}),d=f.x!==0?"x":"y",p=f[d],g=[],b,w,h={x:0,y:0},x={x:0,y:0},[,,m,y]=th({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[d]*s[d]===-1){d==="x"?(b=n.x??u.x+(c.x-u.x)*l,w=n.y??(u.y+c.y)/2):(b=n.x??(u.x+c.x)/2,w=n.y??u.y+(c.y-u.y)*l);let _=[{x:b,y:u.y},{x:b,y:c.y}],I=[{x:u.x,y:w},{x:c.x,y:w}];i[d]===p?g=d==="x"?_:I:g=d==="x"?I:_}else{let _=[{x:u.x,y:c.y}],I=[{x:c.x,y:u.y}];if(d==="x"?g=i.x===p?I:_:g=i.y===p?_:I,t===o){let L=Math.abs(e[d]-a[d]);if(L<=r){let M=Math.min(r-1,r-L);i[d]===p?h[d]=(u[d]>e[d]?-1:1)*M:x[d]=(c[d]>a[d]?-1:1)*M}}if(t!==o){let L=d==="x"?"y":"x",M=i[d]===s[L],A=u[L]>c[L],k=u[L]<c[L];(i[d]===1&&(!M&&A||M&&k)||i[d]!==1&&(!M&&k||M&&A))&&(g=d==="x"?_:I)}let N={x:u.x+h.x,y:u.y+h.y},T={x:c.x+x.x,y:c.y+x.y},P=Math.max(Math.abs(N.x-g[0].x),Math.abs(T.x-g[0].x)),B=Math.max(Math.abs(N.y-g[0].y),Math.abs(T.y-g[0].y));P>=B?(b=(N.x+T.x)/2,w=g[0].y):(b=g[0].x,w=(N.y+T.y)/2)}let C={x:u.x+h.x,y:u.y+h.y},S={x:c.x+x.x,y:c.y+x.y};return[[e,...C.x!==g[0].x||C.y!==g[0].y?[C]:[],...g,...S.x!==g[g.length-1].x||S.y!==g[g.length-1].y?[S]:[],a],b,w,m,y]}function D3(e,t,a,o){let n=Math.min(Hv(e,t)/2,Hv(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let u=e.x<a.x?-1:1,c=e.y<a.y?1:-1;return`L ${r+n*u},${l}Q ${r},${l} ${r},${l+n*c}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function qs({sourceX:e,sourceY:t,sourcePosition:a=ee.Bottom,targetX:o,targetY:n,targetPosition:r=ee.Top,borderRadius:l=5,centerX:i,centerY:s,offset:u=20,stepPosition:c=.5}){let[f,d,p,g,b]=N3({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:u,stepPosition:c}),w=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)w+=D3(f[h-1],f[h],f[h+1],l);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,d,p,g,b]}function Uv(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function n2(e){let{sourceNode:t,targetNode:a}=e;if(!Uv(t)||!Uv(a))return null;let o=t.internals.handleBounds||qv(t.handles),n=a.internals.handleBounds||qv(a.handles),r=Fv(o?.source??[],e.sourceHandle),l=Fv(e.connectionMode===Rn.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",pa.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||ee.Bottom,s=l?.position||ee.Top,u=zn(t,r,i),c=zn(a,l,s);return{sourceX:u.x,sourceY:u.y,targetX:c.x,targetY:c.y,sourcePosition:i,targetPosition:s}}function qv(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function zn(e,t,a=ee.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??Ta(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case ee.Top:return{x:n+l/2,y:r};case ee.Right:return{x:n+l,y:r+i/2};case ee.Bottom:return{x:n+l/2,y:r+i};case ee.Left:return{x:n,y:r+i/2}}}function Fv(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Yc(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function r2(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Yc(s,t);r.has(u)||(l.push({id:u,color:s.color||a,...s}),r.add(u))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var l2=1e3,R3=10,ah={nodeOrigin:[0,0],nodeExtent:Fl,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},z3={...ah,checkEquality:!0};function oh(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function i2(e,t,a){let o=oh(ah,a);for(let n of e.values())if(n.parentId)rh(n,e,t,o);else{let r=Ps(n,o.nodeOrigin),l=Er(n.extent)?n.extent:o.nodeExtent,i=kr(r,l,Ta(n));n.internals.positionAbsolute=i}}function O3(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function nh(e){return e==="manual"}function Zc(e,t,a,o={}){let n=oh(z3,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!nh(n.zIndexMode)?l2:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let c of e){let f=l.get(c.id);if(n.checkEquality&&c===f?.internals.userNode)t.set(c.id,f);else{let d=Ps(c,n.nodeOrigin),p=Er(c.extent)?c.extent:n.nodeExtent,g=kr(d,p,Ta(c));f={...n.defaults,...c,measured:{width:c.measured?.width,height:c.measured?.height},internals:{positionAbsolute:g,handleBounds:O3(c,f),z:s2(c,i,n.zIndexMode),userNode:c}},t.set(c.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),c.parentId&&rh(f,t,a,o,r),u||(u=c.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function B3(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function rh(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=oh(ah,o),u=e.parentId,c=t.get(u);if(!c){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}B3(e,a),n&&!c.parentId&&c.internals.rootParentIndex===void 0&&s==="auto"&&(c.internals.rootParentIndex=++n.i,c.internals.z=c.internals.z+n.i*R3),n&&c.internals.rootParentIndex!==void 0&&(n.i=c.internals.rootParentIndex);let f=r&&!nh(s)?l2:0,{x:d,y:p,z:g}=P3(e,c,l,i,f,s),{positionAbsolute:b}=e.internals,w=d!==b.x||p!==b.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:d,y:p}:b,z:g}})}function s2(e,t,a){let o=Ea(e.zIndex)?e.zIndex:0;return nh(a)?o:o+(e.selected?t:0)}function P3(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=Ta(e),u=Ps(e,a),c=Er(e.extent)?kr(u,e.extent,s):u,f=kr({x:l+c.x,y:i+c.y},o,s);e.extent==="parent"&&(f=Qv(f,s,t));let d=s2(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=d?p+1:d}}function Kc(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??Gl(i),u=Yg(s,l.rect);r.set(l.parentId,{expandedRect:u,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let u=i.internals.positionAbsolute,c=Ta(i),f=i.origin??o,d=l.x<u.x?Math.round(Math.abs(u.x-l.x)):0,p=l.y<u.y?Math.round(Math.abs(u.y-l.y)):0,g=Math.max(c.width,Math.round(l.width)),b=Math.max(c.height,Math.round(l.height)),w=(g-c.width)*f[0],h=(b-c.height)*f[1];(d>0||p>0||w||h)&&(n.push({id:s,type:"position",position:{x:i.position.x-d+w,y:i.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+d,y:x.position.y+p}})})),(c.width<l.width||c.height<l.height||d||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(d?f[0]*d-w:0),height:b+(p?f[1]*p-h:0)}})}),n}function u2(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let u=[],c=window.getComputedStyle(i),{m22:f}=new window.DOMMatrixReadOnly(c.transform),d=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let b=Vc(p.nodeElement),w=g.measured.width!==b.width||g.measured.height!==b.height;if(!!(b.width&&b.height&&(w||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=Er(g.extent)?g.extent:r,{positionAbsolute:y}=g.internals;if(g.parentId&&g.extent==="parent"){let S=t.get(g.parentId);S&&(y=Qv(y,b,S))}else m&&(y=kr(y,m,b));let C={...g,measured:b,internals:{...g.internals,positionAbsolute:y,handleBounds:{source:Ov("source",p.nodeElement,x,f,g.id),target:Ov("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,C),g.parentId&&rh(C,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(u.push({id:g.id,type:"dimensions",dimensions:b}),g.expandParent&&g.parentId&&d.push({id:g.id,parentId:g.parentId,rect:Gl(C,n)}))}}if(d.length>0){let p=Kc(d,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function d2({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function Vv(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let u=o.get(l)||new Map;o.set(l,u.set(a,t))}}function lh(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},u=`${n}-${l}--${r}-${i}`,c=`${r}-${i}--${n}-${l}`;Vv("source",s,c,e,n,l),Vv("target",s,u,e,r,i),t.set(o.id,o)}}function c2(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:c2(a,t):!1}function Gv(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function H3(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!c2(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function Dg({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function U3({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=Xl(r,t);return{x:l.x-r.x,y:l.y-r.y}}function f2({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,u={x:0,y:0},c=null,f=!1,d=null,p=!1,g=!1,b=null;function w({noDragClassName:x,handleSelector:m,domNode:y,isSelectable:C,nodeId:S,nodeClickDistance:v=0}){d=mt(y);function _({x:P,y:B}){let{nodeLookup:L,nodeExtent:M,snapGrid:A,snapToGrid:k,nodeOrigin:E,onNodeDrag:D,onSelectionDrag:V,onError:G,updateNodePositions:O}=t();r={x:P,y:B};let Y=!1,Z=i.size>1,Q=Z&&M?Og(Vl(i)):null,fe=Z&&k?U3({dragItems:i,snapGrid:A,x:P,y:B}):null;for(let[te,H]of i){if(!L.has(te))continue;let j={x:P-H.distance.x,y:B-H.distance.y};k&&(j=fe?{x:Math.round(j.x+fe.x),y:Math.round(j.y+fe.y)}:Xl(j,A));let ie=null;if(Z&&M&&!H.extent&&Q){let{positionAbsolute:ae}=H.internals,xe=ae.x-Q.x+M[0][0],X=ae.x+H.measured.width-Q.x2+M[1][0],ne=ae.y-Q.y+M[0][1],de=ae.y+H.measured.height-Q.y2+M[1][1];ie=[[xe,ne],[X,de]]}let{position:le,positionAbsolute:J}=Xg({nodeId:te,nextPosition:j,nodeLookup:L,nodeExtent:ie||M,nodeOrigin:E,onError:G});Y=Y||H.position.x!==le.x||H.position.y!==le.y,H.position=le,H.internals.positionAbsolute=J}if(g=g||Y,!!Y&&(O(i,!0),b&&(o||D||!S&&V))){let[te,H]=Dg({nodeId:S,dragItems:i,nodeLookup:L});o?.(b,i,te,H),D?.(b,te,H),S||V?.(b,H)}}async function I(){if(!c)return;let{transform:P,panBy:B,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[A,k]=Uc(u,c,L);(A!==0||k!==0)&&(r.x=(r.x??0)-A/P[2],r.y=(r.y??0)-k/P[2],await B({x:A,y:k})&&_(r)),l=requestAnimationFrame(I)}function N(P){let{nodeLookup:B,multiSelectionActive:L,nodesDraggable:M,transform:A,snapGrid:k,snapToGrid:E,selectNodesOnDrag:D,onNodeDragStart:V,onSelectionDragStart:G,unselectNodesAndEdges:O}=t();f=!0,(!D||!C)&&!L&&S&&(B.get(S)?.selected||O()),C&&D&&S&&e?.(S);let Y=Bs(P.sourceEvent,{transform:A,snapGrid:k,snapToGrid:E,containerBounds:c});if(r=Y,i=H3(B,M,Y,S),i.size>0&&(a||V||!S&&G)){let[Z,Q]=Dg({nodeId:S,dragItems:i,nodeLookup:B});a?.(P.sourceEvent,i,Z,Q),V?.(P.sourceEvent,Z,Q),S||G?.(P.sourceEvent,Q)}}let T=mc().clickDistance(v).on("start",P=>{let{domNode:B,nodeDragThreshold:L,transform:M,snapGrid:A,snapToGrid:k}=t();c=B?.getBoundingClientRect()||null,p=!1,g=!1,b=P.sourceEvent,L===0&&N(P),r=Bs(P.sourceEvent,{transform:M,snapGrid:A,snapToGrid:k,containerBounds:c}),u=Aa(P.sourceEvent,c)}).on("drag",P=>{let{autoPanOnNodeDrag:B,transform:L,snapGrid:M,snapToGrid:A,nodeDragThreshold:k,nodeLookup:E}=t(),D=Bs(P.sourceEvent,{transform:L,snapGrid:M,snapToGrid:A,containerBounds:c});if(b=P.sourceEvent,(P.sourceEvent.type==="touchmove"&&P.sourceEvent.touches.length>1||S&&!E.has(S))&&(p=!0),!p){if(!s&&B&&f&&(s=!0,I()),!f){let V=Aa(P.sourceEvent,c),G=V.x-u.x,O=V.y-u.y;Math.sqrt(G*G+O*O)>k&&N(P)}(r.x!==D.xSnapped||r.y!==D.ySnapped)&&i&&f&&(u=Aa(P.sourceEvent,c),_(D))}}).on("end",P=>{if(!f||p){p&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,f=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:B,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:A}=t();if(g&&(L(i,!1),g=!1),n||M||!S&&A){let[k,E]=Dg({nodeId:S,dragItems:i,nodeLookup:B,dragging:!1});n?.(P.sourceEvent,i,k,E),M?.(P.sourceEvent,k,E),S||A?.(P.sourceEvent,E)}}}).filter(P=>{let B=P.target;return!P.button&&(!x||!Gv(B,`.${x}`,y))&&(!m||Gv(B,m,y))});d.call(T)}function h(){d?.on(".drag",null)}return{update:w,destroy:h}}function q3(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Hs(n,Gl(r))>0&&o.push(r);return o}var F3=250;function V3(e,t,a,o){let n=[],r=1/0,l=q3(e,a,t+F3);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:c,y:f}=zn(i,u,u.position,!0),d=Math.sqrt(Math.pow(c-e.x,2)+Math.pow(f-e.y,2));d>t||(d<r?(n=[{...u,x:c,y:f}],r=d):d===r&&n.push({...u,x:c,y:f}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function p2(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(u=>u.id===a):i?.[0])??null;return s&&r?{...s,...zn(l,s,s.position,!0)}:s}function m2(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function G3(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var g2=()=>!0;function X3(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:u,autoPanOnConnect:c,flowId:f,panBy:d,cancelConnection:p,onConnectStart:g,onConnect:b,onConnectEnd:w,isValidConnection:h=g2,onReconnectEnd:x,updateConnection:m,getTransform:y,getFromHandle:C,autoPanSpeed:S,dragThreshold:v=1,handleDomNode:_}){let I=$g(e.target),N=0,T,{x:P,y:B}=Aa(e),L=m2(r,_),M=i?.getBoundingClientRect(),A=!1;if(!M||!L)return;let k=p2(n,L,o,s,t);if(!k)return;let E=Aa(e,M),D=!1,V=null,G=!1,O=null;function Y(){if(!c||!M)return;let[le,J]=Uc(E,M,S);d({x:le,y:J}),N=requestAnimationFrame(Y)}let Z={...k,nodeId:n,type:L,position:k.position},Q=s.get(n),te={inProgress:!0,isValid:null,from:zn(Q,Z,ee.Left,!0),fromHandle:Z,fromPosition:Z.position,fromNode:Q,to:E,toHandle:null,toPosition:Rv[Z.position],toNode:null,pointer:E};function H(){A=!0,m(te),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&H();function j(le){if(!A){let{x:de,y:dt}=Aa(le),bt=de-P,Dt=dt-B;if(!(bt*bt+Dt*Dt>v*v))return;H()}if(!C()||!Z){ie(le);return}let J=y();E=Aa(le,M),T=V3(Yl(E,J,!1,[1,1]),a,s,Z),D||(Y(),D=!0);let ae=h2(le,{handle:T,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:h,doc:I,lib:u,flowId:f,nodeLookup:s});O=ae.handleDomNode,V=ae.connection,G=G3(!!T,ae.isValid);let xe=s.get(n),X=xe?zn(xe,Z,ee.Left,!0):te.from,ne={...te,from:X,isValid:G,to:ae.toHandle&&G?Mr({x:ae.toHandle.x,y:ae.toHandle.y},J):E,toHandle:ae.toHandle,toPosition:G&&ae.toHandle?ae.toHandle.position:Rv[Z.position],toNode:ae.toHandle?s.get(ae.toHandle.nodeId):null,pointer:E};m(ne),te=ne}function ie(le){if(!("touches"in le&&le.touches.length>0)){if(A){(T||O)&&V&&G&&b?.(V);let{inProgress:J,...ae}=te,xe={...ae,toPosition:te.toHandle?te.toPosition:null};w?.(le,xe),r&&x?.(le,xe)}p(),cancelAnimationFrame(N),D=!1,G=!1,V=null,O=null,I.removeEventListener("mousemove",j),I.removeEventListener("mouseup",ie),I.removeEventListener("touchmove",j),I.removeEventListener("touchend",ie)}}I.addEventListener("mousemove",j),I.addEventListener("mouseup",ie),I.addEventListener("touchmove",j),I.addEventListener("touchend",ie)}function h2(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:u=g2,nodeLookup:c}){let f=r==="target",d=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Aa(e),b=l.elementFromPoint(p,g),w=b?.classList.contains(`${i}-flow__handle`)?b:d,h={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let x=m2(void 0,w),m=w.getAttribute("data-nodeid"),y=w.getAttribute("data-handleid"),C=w.classList.contains("connectable"),S=w.classList.contains("connectableend");if(!m||!x)return h;let v={source:f?m:o,sourceHandle:f?y:n,target:f?o:m,targetHandle:f?n:y};h.connection=v;let I=C&&S&&(a===Rn.Strict?f&&x==="source"||!f&&x==="target":m!==o||y!==n);h.isValid=I&&u(v),h.toHandle=p2(m,x,y,c,a,!0)}return h}var jc={onPointerDown:X3,isValid:h2};function x2({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=mt(e);function r({translateExtent:i,width:s,height:u,zoomStep:c=1,pannable:f=!0,zoomable:d=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let y=a(),C=m.sourceEvent.ctrlKey&&Zl()?10:1,S=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*c,v=y[2]*Math.pow(2,S*C);t.scaleTo(v)},b=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(b=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let y=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let C=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],S=[C[0]-b[0],C[1]-b[1]];b=C;let v=o()*Math.max(y[2],Math.log(y[2]))*(p?-1:1),_={x:y[0]-S[0]*v,y:y[1]-S[1]*v},I=[[0,0],[s,u]];t.setViewportConstrained({x:_.x,y:_.y,zoom:y[2]},I,i)},x=zc().on("start",w).on("zoom",f?h:null).on("zoom.wheel",d?g:null);n.call(x,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:Bt}}var Wc=e=>({x:e.x,y:e.y,zoom:e.k}),Rg=({x:e,y:t,zoom:a})=>Ir.translate(e,t).scale(a),Dn=(e,t)=>e.target.closest(`.${t}`),y2=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Y3=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,zg=(e,t=0,a=Y3,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},b2=e=>{let t=e.ctrlKey&&Zl()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Z3({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:u}){return c=>{if(Dn(c,t))return c.ctrlKey&&c.preventDefault(),!1;c.preventDefault(),c.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(c.ctrlKey&&l){let w=Bt(c),h=b2(c),x=f*Math.pow(2,h);o.scaleTo(a,x,w,c);return}let d=c.deltaMode===1?20:1,p=n===Ga.Vertical?0:c.deltaX*d,g=n===Ga.Horizontal?0:c.deltaY*d;!Zl()&&c.shiftKey&&n!==Ga.Vertical&&(p=c.deltaY*d,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let b=Wc(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(c,b):(e.isPanScrolling=!0,i?.(c,b)),e.panScrollTimeout=setTimeout(()=>{u?.(c,b),e.isPanScrolling=!1},150)}}function K3({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=Dn(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function j3({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Wc(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function W3({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&y2(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Wc(r.transform))}}function Q3({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&y2(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=Wc(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function $3({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:u,lib:c,connectionInProgress:f}){return d=>{let p=t||a,g=o&&d.ctrlKey,b=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Dn(d,`${c}-flow__node`)||Dn(d,`${c}-flow__edge`)||Dn(d,`${c}-flow__selection`)||Dn(d,`${c}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!l&&!o||i||f&&!b||Dn(d,s)&&b||Dn(d,u)&&(!b||r&&b&&!t)||!o&&d.ctrlKey&&b)return!1;if(!o&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!p&&!r&&!g&&b||!n&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(n)&&!n.includes(d.button)&&d.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||b||e)&&w}}function w2({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},c=e.getBoundingClientRect(),f=[[0,0],[c.width,c.height]];(typeof ResizeObserver<"u"?new ResizeObserver(B=>{let L=B[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=zc().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=mt(e).call(p);y({x:n.x,y:n.y,zoom:ql(n.zoom,t,a)},[[0,0],[c.width,c.height]],o);let b=g.on("wheel.zoom"),w=g.on("dblclick.zoom");p.wheelDelta(b2);async function h(B,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?Vo:Sr).transform(zg(g,L?.duration,L?.ease,()=>M(!0)),B)}):!1}function x({noWheelClassName:B,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:A,panOnScroll:k,panOnDrag:E,panOnScrollMode:D,panOnScrollSpeed:V,preventScrolling:G,zoomOnPinch:O,zoomOnScroll:Y,zoomOnDoubleClick:Z,panActivationKeyPressed:Q=!1,zoomActivationKeyPressed:fe,lib:te,onTransformChange:H,connectionInProgress:j,paneClickDistance:ie,selectionOnDrag:le}){A&&!u.isZoomingOrPanning&&m();let J=k&&!fe&&!A;p.clickDistance(le?1/0:!Ea(ie)||ie<0?0:ie);let ae=J?Z3({zoomPanValues:u,noWheelClassName:B,d3Selection:g,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:V,zoomOnPinch:O,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):K3({noWheelClassName:B,preventScrolling:G,d3ZoomHandler:b});g.on("wheel.zoom",ae,{passive:!1});let xe=j3({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:l});p.on("start",xe);let X=W3({zoomPanValues:u,panOnDrag:E,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:H});p.on("zoom",X);let ne=Q3({zoomPanValues:u,panOnDrag:E,panOnScroll:k,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});p.on("end",ne);let de=$3({panActivationKeyPressed:Q,zoomActivationKeyPressed:fe,panOnDrag:E,zoomOnScroll:Y,panOnScroll:k,zoomOnDoubleClick:Z,zoomOnPinch:O,userSelectionActive:A,noPanClassName:L,noWheelClassName:B,lib:te,connectionInProgress:j});p.filter(de),Z?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function y(B,L,M){let A=Rg(B),k=p?.constrain()(A,L,M);return k&&await h(k),k}async function C(B,L){let M=Rg(B);return await h(M,L),M}function S(B){if(g){let L=Rg(B),M=g.property("__zoom");(M.k!==B.zoom||M.x!==B.x||M.y!==B.y)&&p?.transform(g,L,null,{sync:!0})}}function v(){let B=g?Os(g.node()):{x:0,y:0,k:1};return{x:B.x,y:B.y,zoom:B.k}}async function _(B,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?Vo:Sr).scaleTo(zg(g,L?.duration,L?.ease,()=>M(!0)),B)}):!1}async function I(B,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?Vo:Sr).scaleBy(zg(g,L?.duration,L?.ease,()=>M(!0)),B)}):!1}function N(B){p?.scaleExtent(B)}function T(B){p?.translateExtent(B)}function P(B){let L=!Ea(B)||B<0?0:B;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:C,setViewportConstrained:y,getViewport:v,scaleTo:_,scaleBy:I,setScaleExtent:N,setTranslateExtent:T,syncViewport:S,setClickDistance:P}}var On;(function(e){e.Line="line",e.Handle="handle"})(On||(On={}));function J3({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function Xv(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function Tn(e,t){return Math.max(0,t-e)}function Nn(e,t){return Math.max(0,e-t)}function Bc(e,t,a){return Math.max(0,t-e,e-a)}function Yv(e,t){return e?!t:t}function e4(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:u}=t,{isHorizontal:c,isVertical:f}=t,d=c&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:b,maxWidth:w,minHeight:h,maxHeight:x}=o,{x:m,y,width:C,height:S,aspectRatio:v}=e,_=Math.floor(c?p-e.pointerX:0),I=Math.floor(f?g-e.pointerY:0),N=C+(s?-_:_),T=S+(u?-I:I),P=-r[0]*C,B=-r[1]*S,L=Bc(N,b,w),M=Bc(T,h,x);if(l){let E=0,D=0;s&&_<0?E=Tn(m+_+P,l[0][0]):!s&&_>0&&(E=Nn(m+N+P,l[1][0])),u&&I<0?D=Tn(y+I+B,l[0][1]):!u&&I>0&&(D=Nn(y+T+B,l[1][1])),L=Math.max(L,E),M=Math.max(M,D)}if(i){let E=0,D=0;s&&_>0?E=Nn(m+_,i[0][0]):!s&&_<0&&(E=Tn(m+N,i[1][0])),u&&I>0?D=Nn(y+I,i[0][1]):!u&&I<0&&(D=Tn(y+T,i[1][1])),L=Math.max(L,E),M=Math.max(M,D)}if(n){if(c){let E=Bc(N/v,h,x)*v;if(L=Math.max(L,E),l){let D=0;!s&&!u||s&&!u&&d?D=Nn(y+B+N/v,l[1][1])*v:D=Tn(y+B+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,D)}if(i){let D=0;!s&&!u||s&&!u&&d?D=Tn(y+N/v,i[1][1])*v:D=Nn(y+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,D)}}if(f){let E=Bc(T*v,b,w)/v;if(M=Math.max(M,E),l){let D=0;!s&&!u||u&&!s&&d?D=Nn(m+T*v+P,l[1][0])/v:D=Tn(m+(u?I:-I)*v+P,l[0][0])/v,M=Math.max(M,D)}if(i){let D=0;!s&&!u||u&&!s&&d?D=Tn(m+T*v,i[1][0])/v:D=Nn(m+(u?I:-I)*v,i[0][0])/v,M=Math.max(M,D)}}}I=I+(I<0?M:-M),_=_+(_<0?L:-L),n&&(d?N>T*v?I=(Yv(s,u)?-_:_)/v:_=(Yv(s,u)?-I:I)*v:c?(I=_/v,u=s):(_=I*v,s=u));let A=s?m+_:m,k=u?y+I:y;return{width:C+(s?-_:_),height:S+(u?-I:I),x:r[0]*_*(s?-1:1)+A,y:r[1]*I*(u?-1:1)+k}}var v2={width:0,height:0,x:0,y:0},t4={...v2,pointerX:0,pointerY:0,aspectRatio:1};function a4(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function C2({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=mt(e),l={controlDirection:Xv("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:u,boundaries:c,keepAspectRatio:f,resizeDirection:d,onResizeStart:p,onResize:g,onResizeEnd:b,shouldResize:w}){let h={...v2},x={...t4};l={boundaries:c,resizeDirection:d,keepAspectRatio:f,controlDirection:Xv(u)};let m,y=null,C=[],S,v,_,I=!1,N=mc().on("start",T=>{let{nodeLookup:P,transform:B,snapGrid:L,snapToGrid:M,nodeOrigin:A,paneDomNode:k}=a();if(m=P.get(t),!m)return;y=k?.getBoundingClientRect()??null;let{xSnapped:E,ySnapped:D}=Bs(T.sourceEvent,{transform:B,snapGrid:L,snapToGrid:M,containerBounds:y});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:E,pointerY:D,aspectRatio:h.width/h.height},S=void 0,v=Er(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(S=P.get(m.parentId)),S&&m.extent==="parent"&&(v=[[0,0],[S.measured.width,S.measured.height]]),C=[],_=void 0;for(let[V,G]of P)if(G.parentId===t&&(C.push({id:V,position:{...G.position},extent:G.extent}),G.extent==="parent"||G.expandParent)){let O=a4(G,m,G.origin??A);_?_=[[Math.min(O[0][0],_[0][0]),Math.min(O[0][1],_[0][1])],[Math.max(O[1][0],_[1][0]),Math.max(O[1][1],_[1][1])]]:_=O}p?.(T,{...h})}).on("drag",T=>{let{transform:P,snapGrid:B,snapToGrid:L,nodeOrigin:M}=a(),A=Bs(T.sourceEvent,{transform:P,snapGrid:B,snapToGrid:L,containerBounds:y}),k=[];if(!m)return;let{x:E,y:D,width:V,height:G}=h,O={},Y=m.origin??M,{width:Z,height:Q,x:fe,y:te}=e4(x,l.controlDirection,A,l.boundaries,l.keepAspectRatio,Y,v,_),H=Z!==V,j=Q!==G,ie=fe!==E&&H,le=te!==D&&j;if(!ie&&!le&&!H&&!j)return;if((ie||le||Y[0]===1||Y[1]===1)&&(O.x=ie?fe:h.x,O.y=le?te:h.y,h.x=O.x,h.y=O.y,C.length>0)){let X=fe-E,ne=te-D;for(let de of C)de.position={x:de.position.x-X+Y[0]*(Z-V),y:de.position.y-ne+Y[1]*(Q-G)},k.push(de)}if((H||j)&&(O.width=H&&(!l.resizeDirection||l.resizeDirection==="horizontal")?Z:h.width,O.height=j&&(!l.resizeDirection||l.resizeDirection==="vertical")?Q:h.height,h.width=O.width,h.height=O.height),S&&m.expandParent){let X=Y[0]*(O.width??0);O.x&&O.x<X&&(h.x=X,x.x=x.x-(O.x-X));let ne=Y[1]*(O.height??0);O.y&&O.y<ne&&(h.y=ne,x.y=x.y-(O.y-ne))}let J=J3({width:h.width,prevWidth:V,height:h.height,prevHeight:G,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),ae={...h,direction:J};w?.(T,ae)!==!1&&(I=!0,g?.(T,ae),o(O,k))}).on("end",T=>{I&&(b?.(T,{...h}),n?.({...h}),I=!1)});r.call(N)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var z2=U(oe(),1),O2=U(A2(),1);var N2={},T2=e=>{let t,a=new Set,o=(c,f)=>{let d=typeof c=="function"?c(t):c;if(!Object.is(d,t)){let p=t;t=f??(typeof d!="object"||d===null)?d:Object.assign({},t,d),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:c=>(a.add(c),()=>a.delete(c)),destroy:()=>{(N2.env?N2.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},D2=e=>e?T2(e):T2;var{useDebugValue:w4}=z2.default,{useSyncExternalStoreWithSelector:v4}=O2.default,C4=e=>e;function sh(e,t=C4,a){let o=v4(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return w4(o),o}var R2=(e,t)=>{let a=D2(e),o=(n,r=t)=>sh(a,n,r);return Object.assign(o,a),o},B2=(e,t)=>e?R2(e,t):R2;function De(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var S4=U(en()),tf=(0,z.createContext)(null),L4=tf.Provider,dC=pa.error001("react");function ge(e,t){let a=(0,z.useContext)(tf);if(a===null)throw new Error(dC);return sh(a,e,t)}function qe(){let e=(0,z.useContext)(tf);if(e===null)throw new Error(dC);return(0,z.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var P2={display:"none"},_4={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},cC="react-flow__node-desc",fC="react-flow__edge-desc",I4="react-flow__aria-live",k4=e=>e.ariaLiveMessage,M4=e=>e.ariaLabelConfig;function E4({rfId:e}){let t=ge(k4);return(0,R.jsx)("div",{id:`${I4}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:_4,children:t})}function A4({rfId:e,disableKeyboardA11y:t}){let a=ge(M4);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{id:`${cC}-${e}`,style:P2,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,R.jsx)("div",{id:`${fC}-${e}`,style:P2,children:a["edge.a11yDescription.default"]}),!t&&(0,R.jsx)(E4,{rfId:e})]})}var af=(0,z.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,R.jsx)("div",{className:Qe(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});af.displayName="Panel";var H2="https://reactflow.dev?utm_source=attribution";function T4({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,R.jsx)(af,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${H2}`,children:(0,R.jsx)("a",{href:H2,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var N4=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},$c=e=>e.id;function D4(e,t){return De(e.selectedNodes.map($c),t.selectedNodes.map($c))&&De(e.selectedEdges.map($c),t.selectedEdges.map($c))}function R4({onSelectionChange:e}){let t=qe(),{selectedNodes:a,selectedEdges:o}=ge(N4,D4);return(0,z.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var z4=e=>!!e.onSelectionChangeHandlers;function O4({onSelectionChange:e}){let t=ge(z4);return e||t?(0,R.jsx)(R4,{onSelectionChange:e}):null}var pC=[0,0],B4={x:0,y:0,zoom:1},P4=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],U2=[...P4,"rfId"],H4=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),q2={translateExtent:Fl,nodeOrigin:pC,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function U4(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=ge(H4,De),u=qe();(0,z.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{c.current=q2,i()}),[]);let c=(0,z.useRef)(q2);return(0,z.useEffect)(()=>{for(let f of U2){let d=e[f],p=c.current[f];d!==p&&(typeof e[f]>"u"||(f==="nodes"?t(d):f==="edges"?a(d):f==="minZoom"?o(d):f==="maxZoom"?n(d):f==="translateExtent"?r(d):f==="nodeExtent"?l(d):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:e2(d)}):f==="fitView"?u.setState({fitViewQueued:d}):f==="fitViewOptions"?u.setState({fitViewOptions:d}):u.setState({[f]:d})))}c.current=e},U2.map(f=>e[f])),null}function F2(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function q4(e){let[t,a]=(0,z.useState)(e==="system"?null:e);return(0,z.useEffect)(()=>{if(e!=="system"){a(e);return}let o=F2(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:F2()?.matches?"dark":"light"}var V2=typeof document<"u"?document:null;function Fs(e=null,t={target:V2,actInsideInputWithModifier:!0}){let[a,o]=(0,z.useState)(!1),n=(0,z.useRef)(!1),r=(0,z.useRef)(new Set([])),[l,i]=(0,z.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),c=u.reduce((f,d)=>f.concat(...d),[]);return[u,c]}return[[],[]]},[e]);return(0,z.useEffect)(()=>{let s=t?.target??V2,u=t?.actInsideInputWithModifier??!0;if(e!==null){let c=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&Jg(p))return!1;let b=X2(p.code,i);if(r.current.add(p[b]),G2(l,r.current,!1)){let w=p.composedPath?.()?.[0]||p.target,h=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=X2(p.code,i);G2(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},d=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",c),s?.addEventListener("keyup",f),window.addEventListener("blur",d),window.addEventListener("contextmenu",d),()=>{s?.removeEventListener("keydown",c),s?.removeEventListener("keyup",f),window.removeEventListener("blur",d),window.removeEventListener("contextmenu",d)}}},[e,o]),a}function G2(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function X2(e,t){return t.includes(e)?"code":"key"}var F4=()=>{let e=qe();return(0,z.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Us(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),u={x:t.x-i,y:t.y-s},c=a.snapGrid??n,f=a.snapToGrid??r;return Yl(u,o,f,c)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=Mr(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function mC(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)V4(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function V4(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function fh(e,t){return mC(e,t)}function ph(e,t){return mC(e,t)}function Ar(e,t){return{id:e,type:"select",selected:t}}function Wl(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(Ar(r.id,l)))}return o}function Y2({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function Z2(e){return{id:e.id,type:"remove"}}var G4=Kg("React Flow","https://reactflow.dev/");function X4(e,t,a={}){return o2(e,t,{...a,onError:a.onError??G4})}var K2=e=>Zv(e),Y4=e=>qg(e);function gC(e){return(0,z.forwardRef)(e)}var hC=typeof window<"u"?z.useLayoutEffect:z.useEffect;function j2(e){let[t,a]=(0,z.useState)(BigInt(0)),[o]=(0,z.useState)(()=>Z4(()=>a(n=>n+BigInt(1))));return hC(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function Z4(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var xC=(0,z.createContext)(null);function K4({children:e}){let t=qe(),a=(0,z.useCallback)(i=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:c,onNodesChange:f,nodeLookup:d,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),b=s;for(let h of i)b=typeof h=="function"?h(b):h;let w=Y2({items:b,lookup:d});for(let h of g.values())w=h(w);c&&u(b),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=j2(a),n=(0,z.useCallback)(i=>{let{edges:s=[],setEdges:u,hasDefaultEdges:c,onEdgesChange:f,edgeLookup:d}=t.getState(),p=s;for(let g of i)p=typeof g=="function"?g(p):g;c?u(p):f&&f(Y2({items:p,lookup:d}))},[]),r=j2(n),l=(0,z.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,R.jsx)(xC.Provider,{value:l,children:e})}function j4(){let e=(0,z.useContext)(xC);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var W4=e=>!!e.panZoom;function ma(){let e=F4(),t=qe(),a=j4(),o=ge(W4),n=(0,z.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),l=f=>{a.nodeQueue.push(f)},i=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState(),g=K2(f)?f:d.get(f.id),b=g.parentId?Wg(g.position,g.measured,g.parentId,d,p):g.position,w={...g,position:b,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Gl(w)},u=(f,d,p={replace:!1})=>{l(g=>g.map(b=>{if(b.id===f){let w=typeof d=="function"?d(b):d;return p.replace&&K2(w)?w:{...b,...w}}return b}))},c=(f,d,p={replace:!1})=>{i(g=>g.map(b=>{if(b.id===f){let w=typeof d=="function"?d(b):d;return p.replace&&Y4(w)?w:{...b,...w}}return b}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(d=>({...d}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:l,setEdges:i,addNodes:f=>{let d=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...d])},addEdges:f=>{let d=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...d])},toObject:()=>{let{nodes:f=[],edges:d=[],transform:p}=t.getState(),[g,b,w]=p;return{nodes:f.map(h=>({...h})),edges:d.map(h=>({...h})),viewport:{x:g,y:b,zoom:w}}},deleteElements:async({nodes:f=[],edges:d=[]})=>{let{nodes:p,edges:g,onNodesDelete:b,onEdgesDelete:w,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:y}=t.getState(),{nodes:C,edges:S}=await Wv({nodesToRemove:f,edgesToRemove:d,nodes:p,edges:g,onBeforeDelete:y}),v=S.length>0,_=C.length>0;if(v){let I=S.map(Z2);w?.(S),x(I)}if(_){let I=C.map(Z2);b?.(C),h(I)}return(_||v)&&m?.({nodes:C,edges:S}),{deletedNodes:C,deletedEdges:S}},getIntersectingNodes:(f,d=!0,p)=>{let g=Zg(f),b=g?f:s(f),w=p!==void 0;return b?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=Gl(w?h:x),y=Hs(m,b);return d&&y>0||y>=m.width*m.height||y>=b.width*b.height}):[]},isNodeIntersecting:(f,d,p=!0)=>{let b=Zg(f)?f:s(f);if(!b)return!1;let w=Hs(b,d);return p&&w>0||w>=d.width*d.height||w>=b.width*b.height},updateNode:u,updateNodeData:(f,d,p={replace:!1})=>{u(f,g=>{let b=typeof d=="function"?d(g):d;return p.replace?{...g,data:b}:{...g,data:{...g.data,...b}}},p)},updateEdge:c,updateEdgeData:(f,d,p={replace:!1})=>{c(f,g=>{let b=typeof d=="function"?d(g):d;return p.replace?{...g,data:b}:{...g,data:{...g.data,...b}}},p)},getNodesBounds:f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState();return Gg(f,{nodeLookup:d,nodeOrigin:p})},getHandleConnections:({type:f,id:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${d?`-${d}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?d?`-${f}-${d}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let d=t.getState().fitViewResolver??Jv();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:d}),a.nodeQueue.push(p=>[...p]),d.promise}}},[]);return(0,z.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var W2=e=>e.selected,Q4=typeof window<"u"?window:void 0;function $4({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=qe(),{deleteElements:o}=ma(),n=Fs(e,{actInsideInputWithModifier:!1}),r=Fs(t,{target:Q4});(0,z.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter(W2),edges:l.filter(W2)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,z.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function J4(e){let t=qe();(0,z.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Vc(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",pa.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var of={position:"absolute",width:"100%",height:"100%",top:0,left:0},eA=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function tA({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=Ga.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:c,minZoom:f,maxZoom:d,zoomActivationKeyCode:p,preventScrolling:g=!0,children:b,noWheelClassName:w,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:y,selectionOnDrag:C}){let S=qe(),v=(0,z.useRef)(null),{userSelectionActive:_,lib:I,connectionInProgress:N}=ge(eA,De),T=Fs(p),P=(0,z.useRef)();J4(v);let B=(0,z.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||S.setState({transform:L})},[x,m]);return(0,z.useEffect)(()=>{if(v.current){P.current=w2({domNode:v.current,minZoom:f,maxZoom:d,translateExtent:c,viewport:u,onDraggingChange:k=>S.setState(E=>E.paneDragging===k?E:{paneDragging:k}),onPanZoomStart:(k,E)=>{let{onViewportChangeStart:D,onMoveStart:V}=S.getState();V?.(k,E),D?.(E)},onPanZoom:(k,E)=>{let{onViewportChange:D,onMove:V}=S.getState();V?.(k,E),D?.(E)},onPanZoomEnd:(k,E)=>{let{onViewportChangeEnd:D,onMoveEnd:V}=S.getState();V?.(k,E),D?.(E)}});let{x:L,y:M,zoom:A}=P.current.getViewport();return S.setState({panZoom:P.current,transform:[L,M,A],domNode:v.current.closest(".react-flow")}),()=>{P.current?.destroy()}}},[]),(0,z.useEffect)(()=>{P.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:T,preventScrolling:g,noPanClassName:h,userSelectionActive:_,noWheelClassName:w,lib:I,onTransformChange:B,connectionInProgress:N,selectionOnDrag:C,paneClickDistance:y})},[e,t,a,o,n,r,l,i,s,T,g,h,_,w,I,B,N,C,y]),(0,R.jsx)("div",{className:"react-flow__renderer",ref:v,style:of,children:b})}var aA=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function oA(){let{userSelectionActive:e,userSelectionRect:t}=ge(aA,De);return e&&t?(0,R.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var uh=(e,t)=>a=>{a.target===t.current&&e?.(a)},nA=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function rA({isSelecting:e,selectionKeyPressed:t,selectionMode:a=Xo.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:c,onPaneScroll:f,onPaneMouseEnter:d,onPaneMouseMove:p,onPaneMouseLeave:g,children:b}){let w=(0,z.useRef)(0),h=qe(),{userSelectionActive:x,elementsSelectable:m,dragging:y,panBy:C,autoPanSpeed:S}=ge(nA,De),v=m&&(e||x),_=(0,z.useRef)(null),I=(0,z.useRef)(),N=(0,z.useRef)(new Set),T=(0,z.useRef)(new Set),P=(0,z.useRef)(!1),B=(0,z.useRef)(!1),L=(0,z.useRef)({x:0,y:0}),M=(0,z.useRef)(!1),A=H=>{if(B.current||P.current||h.getState().connection.inProgress){B.current=!1,P.current=!1;return}u?.(H),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},k=H=>{if(Array.isArray(o)&&o?.includes(2)){H.preventDefault();return}c?.(H)},E=f?H=>f(H):void 0,D=H=>{B.current&&(H.stopPropagation(),B.current=!1)},V=H=>{if(H.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:j,transform:ie}=h.getState();if(I.current=j?.getBoundingClientRect(),!I.current)return;let le=H.target===_.current;if(!le&&!!H.target.closest(".nokey")||!e||!(l&&le||t)||H.button!==0||!H.isPrimary)return;H.target?.setPointerCapture?.(H.pointerId),B.current=!1;let{x:xe,y:X}=Aa(H.nativeEvent,I.current),ne=Yl({x:xe,y:X},ie);h.setState({userSelectionRect:{width:0,height:0,startX:ne.x,startY:ne.y,x:xe,y:X}}),le||(H.stopPropagation(),H.preventDefault())};function G(H,j){let{userSelectionRect:ie}=h.getState();if(!ie)return;let{transform:le,nodeLookup:J,edgeLookup:ae,connectionLookup:xe,triggerNodeChanges:X,triggerEdgeChanges:ne,defaultEdgeOptions:de}=h.getState(),dt={x:ie.startX,y:ie.startY},{x:bt,y:Dt}=Mr(dt,le),Oa={startX:dt.x,startY:dt.y,x:H<bt?H:bt,y:j<Dt?j:Dt,width:Math.abs(H-bt),height:Math.abs(j-Dt)},Kn=N.current,bo=T.current;N.current=new Set(Hc(J,Oa,le,a===Xo.Partial,!0).map(aa=>aa.id)),T.current=new Set;let wo=de?.selectable??!0;for(let aa of N.current){let W=xe.get(aa);if(W)for(let{edgeId:Re}of W.values()){let Ke=ae.get(Re);Ke&&(Ke.selectable??wo)&&T.current.add(Re)}}if(!Qg(Kn,N.current)){let aa=Wl(J,N.current,!0);X(aa)}if(!Qg(bo,T.current)){let aa=Wl(ae,T.current);ne(aa)}h.setState({userSelectionRect:Oa,userSelectionActive:!0,nodesSelectionActive:!1})}function O(){if(!n||!I.current)return;let[H,j]=Uc(L.current,I.current,S);C({x:H,y:j}).then(ie=>{if(!B.current||!ie){w.current=requestAnimationFrame(O);return}let{x:le,y:J}=L.current;G(le,J),w.current=requestAnimationFrame(O)})}let Y=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,z.useEffect)(()=>()=>Y(),[]);let Z=H=>{let{userSelectionRect:j,transform:ie,resetSelectedElements:le}=h.getState();if(!I.current||!j)return;let{x:J,y:ae}=Aa(H.nativeEvent,I.current);L.current={x:J,y:ae};let xe=Mr({x:j.startX,y:j.startY},ie);if(!B.current){let X=t?0:r;if(Math.hypot(J-xe.x,ae-xe.y)<=X)return;le(),i?.(H)}B.current=!0,M.current||(O(),M.current=!0),G(J,ae)},Q=H=>{if(!v){H.target===_.current&&h.getState().connection.inProgress&&(P.current=!0);return}H.button===0&&(H.target?.releasePointerCapture?.(H.pointerId),!x&&H.target===_.current&&h.getState().userSelectionRect&&A?.(H),h.setState({userSelectionActive:!1,userSelectionRect:null}),B.current&&(s?.(H),h.setState({nodesSelectionActive:N.current.size>0})),Y())},fe=H=>{H.target?.releasePointerCapture?.(H.pointerId),Y()},te=o===!0||Array.isArray(o)&&o.includes(0);return(0,R.jsxs)("div",{className:Qe(["react-flow__pane",{draggable:te,dragging:y,selection:e}]),onClick:v?void 0:uh(A,_),onContextMenu:uh(k,_),onWheel:uh(E,_),onPointerEnter:v?void 0:d,onPointerMove:v?Z:p,onPointerUp:Q,onPointerCancel:v?fe:void 0,onPointerDownCapture:v?V:void 0,onClickCapture:v?D:void 0,onPointerLeave:g,ref:_,style:of,children:[b,(0,R.jsx)(oA,{})]})}function ch({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),u=i.get(e);if(!u){s?.("012",pa.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&l)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function yC({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=qe(),[s,u]=(0,z.useState)(!1),c=(0,z.useRef)();return(0,z.useEffect)(()=>{if(!t)return c.current=f2({getStoreItems:()=>i.getState(),onNodeMouseDown:f=>{ch({id:f,store:i,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{c.current?.destroy(),c.current=void 0}},[t,i,e]),(0,z.useEffect)(()=>{t||!e.current||!c.current||c.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var lA=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function bC(){let e=qe();return(0,z.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:u,nodeOrigin:c}=e.getState(),f=new Map,d=lA(l),p=n?r[0]:5,g=n?r[1]:5,b=a.direction.x*p*a.factor,w=a.direction.y*g*a.factor;for(let[,h]of u){if(!d(h))continue;let x={x:h.internals.positionAbsolute.x+b,y:h.internals.positionAbsolute.y+w};n&&(x=Xl(x,r));let{position:m,positionAbsolute:y}=Xg({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:c,onError:i});h.position=m,h.internals.positionAbsolute=y,f.set(h.id,h)}s(f)},[])}var mh=(0,z.createContext)(null),iA=mh.Provider;mh.Consumer;var wC=()=>(0,z.useContext)(mh),sA=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),vC=(0,z.createContext)(null);function uA({children:e}){let t=ge(sA,De);return(0,R.jsx)(vC.Provider,{value:t,children:e})}function dA(){let e=(0,z.useContext)(vC);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var cA={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},fA=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:u}=l;if(!i&&!n)return cA;let c=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:c,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===Rn.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:c&&u}};function pA({type:e="source",position:t=ee.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:u,onMouseDown:c,onTouchStart:f,...d},p){let g=l||null,b=e==="target",w=qe(),h=wC(),{connectOnClick:x,noPanClassName:m,rfId:y}=dA(),{connectingFrom:C,connectingTo:S,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:I,clickConnectionInProcess:N,valid:T}=ge(fA(h,g,e),De);h||w.getState().onError?.("010",pa.error010());let P=M=>{let{defaultEdgeOptions:A,onConnect:k,hasDefaultEdges:E}=w.getState(),D={...A,...M};if(E){let{edges:V,setEdges:G,onError:O}=w.getState();G(X4(D,V,{onError:O}))}k?.(D),i?.(D)},B=M=>{if(!h)return;let A=eh(M.nativeEvent);if(n&&(A&&M.button===0||!A)){let k=w.getState();jc.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:k.autoPanOnConnect,connectionMode:k.connectionMode,connectionRadius:k.connectionRadius,domNode:k.domNode,nodeLookup:k.nodeLookup,lib:k.lib,isTarget:b,handleId:g,nodeId:h,flowId:k.rfId,panBy:k.panBy,cancelConnection:k.cancelConnection,onConnectStart:k.onConnectStart,onConnectEnd:(...E)=>w.getState().onConnectEnd?.(...E),updateConnection:k.updateConnection,onConnect:P,isValidConnection:a||((...E)=>w.getState().isValidConnection?.(...E)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:k.autoPanSpeed,dragThreshold:k.connectionDragThreshold})}A?c?.(M):f?.(M)},L=M=>{let{onClickConnectStart:A,onClickConnectEnd:k,connectionClickStartHandle:E,connectionMode:D,isValidConnection:V,lib:G,rfId:O,nodeLookup:Y,connection:Z}=w.getState();if(!h||!E&&!n)return;if(!E){A?.(M.nativeEvent,{nodeId:h,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let Q=$g(M.target),fe=a||V,{connection:te,isValid:H}=jc.isValid(M.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:D,fromNodeId:E.nodeId,fromHandleId:E.id||null,fromType:E.type,isValidConnection:fe,flowId:O,doc:Q,lib:G,nodeLookup:Y});H&&te&&P(te);let j=structuredClone(Z);delete j.inProgress,j.toPosition=j.toHandle?j.toHandle.position:null,k?.(M,j),w.setState({connectionClickStartHandle:null})};return(0,R.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${y}-${h}-${g}-${e}`,className:Qe(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!b,target:b,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:C,connectingto:S,valid:T,connectionindicator:o&&(!I||_)&&(I||N?r:n)}]),onMouseDown:B,onTouchStart:B,onClick:x?L:void 0,ref:p,...d,children:s})}var Ql=(0,z.memo)(gC(pA));function mA({data:e,isConnectable:t,sourcePosition:a=ee.Bottom}){return(0,R.jsxs)(R.Fragment,{children:[e?.label,(0,R.jsx)(Ql,{type:"source",position:a,isConnectable:t})]})}function gA({data:e,isConnectable:t,targetPosition:a=ee.Top,sourcePosition:o=ee.Bottom}){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Ql,{type:"target",position:a,isConnectable:t}),e?.label,(0,R.jsx)(Ql,{type:"source",position:o,isConnectable:t})]})}function hA(){return null}function xA({data:e,isConnectable:t,targetPosition:a=ee.Top}){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Ql,{type:"target",position:a,isConnectable:t}),e?.label]})}var ef={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Q2={input:mA,default:gA,output:xA,group:hA};function yA(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var bA=e=>{let{width:t,height:a,x:o,y:n}=Vl(e.nodeLookup,{filter:r=>!!r.selected});return{width:Ea(t)?t:null,height:Ea(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function wA({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=qe(),{width:n,height:r,transformString:l,userSelectionActive:i}=ge(bA,De),s=bC(),u=(0,z.useRef)(null);(0,z.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let c=!i&&n!==null&&r!==null;if(yC({nodeRef:u,disabled:!c}),!c)return null;let f=e?p=>{let g=o.getState().nodes.filter(b=>b.selected);e(p,g)}:void 0,d=p=>{Object.prototype.hasOwnProperty.call(ef,p.key)&&(p.preventDefault(),s({direction:ef[p.key],factor:p.shiftKey?4:1}))};return(0,R.jsx)("div",{className:Qe(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,R.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:d,style:{width:n,height:r}})})}var $2=typeof window<"u"?window:void 0,vA=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function CC({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:c,selectionMode:f,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:b,zoomActivationKeyCode:w,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:y,panOnScrollSpeed:C,panOnScrollMode:S,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:I,defaultViewport:N,translateExtent:T,minZoom:P,maxZoom:B,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:A,noPanClassName:k,disableKeyboardA11y:E,onViewportChange:D,isControlledViewport:V}){let{nodesSelectionActive:G,userSelectionActive:O}=ge(vA,De),Y=Fs(u,{target:$2}),Z=Fs(b,{target:$2}),Q=Z||_,fe=Z||y,te=c&&Q!==!0,H=Y||O||te;return $4({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,R.jsx)(tA,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:fe,panActivationKeyPressed:Z,panOnScrollSpeed:C,panOnScrollMode:S,zoomOnDoubleClick:v,panOnDrag:!Y&&Q,defaultViewport:N,translateExtent:T,minZoom:P,maxZoom:B,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:A,noPanClassName:k,onViewportChange:D,isControlledViewport:V,paneClickDistance:i,selectionOnDrag:te,children:(0,R.jsxs)(rA,{onSelectionStart:d,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:Q,autoPanOnSelection:I,isSelecting:!!H,selectionMode:f,selectionKeyPressed:Y,paneClickDistance:i,selectionOnDrag:te,children:[e,G&&(0,R.jsx)(wA,{onSelectionContextMenu:M,noPanClassName:k,disableKeyboardA11y:E})]})})}CC.displayName="FlowRenderer";var CA=(0,z.memo)(CC),SA=e=>t=>e?Hc(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function LA(e){return ge((0,z.useCallback)(SA(e),[e]),De)}var _A=e=>e.updateNodeInternals;function IA(){let e=ge(_A),[t]=(0,z.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,z.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function kA({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=qe(),r=(0,z.useRef)(null),l=(0,z.useRef)(null),i=(0,z.useRef)(e.sourcePosition),s=(0,z.useRef)(e.targetPosition),u=(0,z.useRef)(t),c=a&&!!e.internals.handleBounds;return(0,z.useEffect)(()=>{r.current&&!e.hidden&&(!c||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[c,e.hidden]),(0,z.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,z.useEffect)(()=>{if(r.current){let f=u.current!==t,d=i.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||d||p)&&(u.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function MA({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:u,nodesFocusable:c,resizeObserver:f,noDragClassName:d,noPanClassName:p,disableKeyboardA11y:g,rfId:b,nodeTypes:w,nodeClickDistance:h,onError:x}){let{node:m,internals:y,isParent:C}=ge(H=>{let j=H.nodeLookup.get(e),ie=H.parentLookup.has(e);return{node:j,internals:j.internals,isParent:ie}},De),S=m.type||"default",v=w?.[S]||Q2[S];v===void 0&&(x?.("003",pa.error003(S)),S="default",v=w?.default||Q2.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),I=!!(m.selectable||s&&typeof m.selectable>"u"),N=!!(m.connectable||u&&typeof m.connectable>"u"),T=!!(m.focusable||c&&typeof m.focusable>"u"),P=qe(),B=jg(m),L=kA({node:m,nodeType:S,hasDimensions:B,resizeObserver:f}),M=yC({nodeRef:L,disabled:m.hidden||!_,noDragClassName:d,handleSelector:m.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:h}),A=bC();if(m.hidden)return null;let k=Ta(m),E=yA(m),D=I||_||t||a||o||n,V=a?H=>a(H,{...y.userNode}):void 0,G=o?H=>o(H,{...y.userNode}):void 0,O=n?H=>n(H,{...y.userNode}):void 0,Y=r?H=>r(H,{...y.userNode}):void 0,Z=l?H=>l(H,{...y.userNode}):void 0,Q=H=>{let{selectNodesOnDrag:j,nodeDragThreshold:ie}=P.getState();I&&(!j||!_||ie>0)&&ch({id:e,store:P,nodeRef:L}),t&&t(H,{...y.userNode})},fe=H=>{if(!(Jg(H.nativeEvent)||g)){if(Bg.includes(H.key)&&I){let j=H.key==="Escape";ch({id:e,store:P,unselect:j,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(ef,H.key)){H.preventDefault();let{ariaLabelConfig:j}=P.getState();P.setState({ariaLiveMessage:j["node.a11yDescription.ariaLiveMessage"]({direction:H.key.replace("Arrow","").toLowerCase(),x:~~y.positionAbsolute.x,y:~~y.positionAbsolute.y})}),A({direction:ef[H.key],factor:H.shiftKey?4:1})}}},te=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:H,width:j,height:ie,autoPanOnNodeFocus:le,setCenter:J}=P.getState();if(!le)return;Hc(new Map([[e,m]]),{x:0,y:0,width:j,height:ie},H,!0).length>0||J(m.position.x+k.width/2,m.position.y+k.height/2,{zoom:H[2]})};return(0,R.jsx)("div",{className:Qe(["react-flow__node",`react-flow__node-${S}`,{[p]:_},m.className,{selected:m.selected,selectable:I,parent:C,draggable:_,dragging:M}]),ref:L,style:{zIndex:y.z,transform:`translate(${y.positionAbsolute.x}px,${y.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:B?"visible":"hidden",...m.style,...E},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:G,onMouseLeave:O,onContextMenu:Y,onClick:Q,onDoubleClick:Z,onKeyDown:T?fe:void 0,tabIndex:T?0:void 0,onFocus:T?te:void 0,role:m.ariaRole??(T?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${cC}-${b}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,R.jsx)(iA,{value:e,children:(0,R.jsx)(v,{id:e,data:m.data,type:S,positionAbsoluteX:y.positionAbsolute.x,positionAbsoluteY:y.positionAbsolute.y,selected:m.selected??!1,selectable:I,draggable:_,deletable:m.deletable??!0,isConnectable:N,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:y.z,parentId:m.parentId,...k})})})}var EA=(0,z.memo)(MA),AA=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function SC(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=ge(AA,De),r=LA(e.onlyRenderVisibleElements),l=IA();return(0,R.jsx)("div",{className:"react-flow__nodes",style:of,children:r.map(i=>(0,R.jsx)(EA,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}SC.displayName="NodeRenderer";var TA=(0,z.memo)(SC);function NA(e){return ge((0,z.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&a2({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),De)}var DA=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,R.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},RA=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,R.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},J2={[Ul.Arrow]:DA,[Ul.ArrowClosed]:RA};function zA(e){let t=qe();return(0,z.useMemo)(()=>Object.prototype.hasOwnProperty.call(J2,e)?J2[e]:(t.getState().onError?.("009",pa.error009(e)),null),[e])}var OA=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=zA(t);return s?(0,R.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,R.jsx)(s,{color:a,strokeWidth:l})}):null},LC=({defaultColor:e,rfId:t})=>{let a=ge(r=>r.edges),o=ge(r=>r.defaultEdgeOptions),n=(0,z.useMemo)(()=>r2(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,R.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,R.jsx)("defs",{children:n.map(r=>(0,R.jsx)(OA,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};LC.displayName="MarkerDefinitions";var BA=(0,z.memo)(LC);function _C({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:u,...c}){let[f,d]=(0,z.useState)({x:1,y:0,width:0,height:0}),p=Qe(["react-flow__edge-textwrapper",u]),g=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(g.current){let b=g.current.getBBox();d({x:b.x,y:b.y,width:b.width,height:b.height})}},[a]),a?(0,R.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...c,children:[n&&(0,R.jsx)("rect",{width:f.width+2*l[0],x:-l[0],y:-l[1],height:f.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,R.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}_C.displayName="EdgeText";var PA=(0,z.memo)(_C);function Bn({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:u=20,...c}){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("path",{...c,d:e,fill:"none",className:Qe(["react-flow__edge-path",c.className])}),u?(0,R.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Ea(t)&&Ea(a)?(0,R.jsx)(PA,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function eC({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ee.Left||e===ee.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function IC({sourceX:e,sourceY:t,sourcePosition:a=ee.Bottom,targetX:o,targetY:n,targetPosition:r=ee.Top}){let[l,i]=eC({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=eC({pos:r,x1:o,y1:n,x2:e,y2:t}),[c,f,d,p]=Gc({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:u});return[`M${e},${t} C${l},${i} ${s},${u} ${o},${n}`,c,f,d,p]}function kC(e){return(0,z.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,interactionWidth:h})=>{let[x,m,y]=IC({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),C=e.isInternal?void 0:t;return(0,R.jsx)(Bn,{id:C,path:x,labelX:m,labelY:y,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,interactionWidth:h})})}var HA=kC({isInternal:!1}),MC=kC({isInternal:!0});HA.displayName="SimpleBezierEdge";MC.displayName="SimpleBezierEdgeInternal";function EC(e){return(0,z.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,sourcePosition:p=ee.Bottom,targetPosition:g=ee.Top,markerEnd:b,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,y,C]=qs({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),S=e.isInternal?void 0:t;return(0,R.jsx)(Bn,{id:S,path:m,labelX:y,labelY:C,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:b,markerStart:w,interactionWidth:x})})}var AC=EC({isInternal:!1}),TC=EC({isInternal:!0});AC.displayName="SmoothStepEdge";TC.displayName="SmoothStepEdgeInternal";function NC(e){return(0,z.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,R.jsx)(AC,{...a,id:o,pathOptions:(0,z.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var UA=NC({isInternal:!1}),DC=NC({isInternal:!0});UA.displayName="StepEdge";DC.displayName="StepEdgeInternal";function RC(e){return(0,z.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:g,interactionWidth:b})=>{let[w,h,x]=Xc({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,R.jsx)(Bn,{id:m,path:w,labelX:h,labelY:x,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:g,interactionWidth:b})})}var qA=RC({isInternal:!1}),zC=RC({isInternal:!0});qA.displayName="StraightEdge";zC.displayName="StraightEdgeInternal";function OC(e){return(0,z.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=ee.Bottom,targetPosition:i=ee.Top,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,y,C]=Kl({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:h?.curvature}),S=e.isInternal?void 0:t;return(0,R.jsx)(Bn,{id:S,path:m,labelX:y,labelY:C,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:b,markerStart:w,interactionWidth:x})})}var FA=OC({isInternal:!1}),BC=OC({isInternal:!0});FA.displayName="BezierEdge";BC.displayName="BezierEdgeInternal";var tC={default:BC,straight:zC,step:DC,smoothstep:TC,simplebezier:MC},aC={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},VA=(e,t,a)=>a===ee.Left?e-t:a===ee.Right?e+t:e,GA=(e,t,a)=>a===ee.Top?e-t:a===ee.Bottom?e+t:e,oC="react-flow__edgeupdater";function nC({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,R.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:Qe([oC,`${oC}-${i}`]),cx:VA(t,o,e),cy:GA(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function XA({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:u,onReconnectStart:c,onReconnectEnd:f,setReconnecting:d,setUpdateHover:p}){let g=qe(),b=(y,C)=>{if(y.button!==0)return;let{autoPanOnConnect:S,domNode:v,connectionMode:_,connectionRadius:I,lib:N,onConnectStart:T,cancelConnection:P,nodeLookup:B,rfId:L,panBy:M,updateConnection:A}=g.getState(),k=C.type==="target",E=(G,O)=>{d(!1),f?.(G,a,C.type,O)},D=G=>u?.(a,G),V=(G,O)=>{d(!0),c?.(y,a,C.type),T?.(G,O)};jc.onPointerDown(y.nativeEvent,{autoPanOnConnect:S,connectionMode:_,connectionRadius:I,domNode:v,handleId:C.id,nodeId:C.nodeId,nodeLookup:B,isTarget:k,edgeUpdaterType:C.type,lib:N,flowId:L,cancelConnection:P,panBy:M,isValidConnection:(...G)=>g.getState().isValidConnection?.(...G)??!0,onConnect:D,onConnectStart:V,onConnectEnd:(...G)=>g.getState().onConnectEnd?.(...G),onReconnectEnd:E,updateConnection:A,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:y.currentTarget})},w=y=>b(y,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=y=>b(y,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,R.jsxs)(R.Fragment,{children:[(e===!0||e==="source")&&(0,R.jsx)(nC,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,R.jsx)(nC,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function YA({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,reconnectRadius:c,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,rfId:g,edgeTypes:b,noPanClassName:w,onError:h,disableKeyboardA11y:x}){let m=ge(J=>J.edgeLookup.get(e)),y=ge(J=>J.defaultEdgeOptions);m=y?{...y,...m}:m;let C=m.type||"default",S=b?.[C]||tC[C];S===void 0&&(h?.("011",pa.error011(C)),C="default",S=b?.default||tC.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),I=!!(m.selectable||o&&typeof m.selectable>"u"),N=(0,z.useRef)(null),[T,P]=(0,z.useState)(!1),[B,L]=(0,z.useState)(!1),M=qe(),{zIndex:A=m.zIndex,sourceX:k,sourceY:E,targetX:D,targetY:V,sourcePosition:G,targetPosition:O}=ge((0,z.useCallback)(J=>{let ae=J.nodeLookup.get(m.source),xe=J.nodeLookup.get(m.target);if(!ae||!xe)return aC;let X=n2({id:e,sourceNode:ae,targetNode:xe,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:J.connectionMode,onError:h}),ne=t2({selected:m.selected,zIndex:m.zIndex,sourceNode:ae,targetNode:xe,elevateOnSelect:J.elevateEdgesOnSelect,zIndexMode:J.zIndexMode});return{...X||aC,zIndex:ne}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),De),Y=(0,z.useMemo)(()=>m.markerStart?`url('#${Yc(m.markerStart,g)}')`:void 0,[m.markerStart,g]),Z=(0,z.useMemo)(()=>m.markerEnd?`url('#${Yc(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||k===null||E===null||D===null||V===null)return null;let Q=J=>{let{addSelectedEdges:ae,unselectNodesAndEdges:xe,multiSelectionActive:X}=M.getState();I&&(M.setState({nodesSelectionActive:!1}),m.selected&&X?(xe({nodes:[],edges:[m]}),N.current?.blur()):ae([e])),n&&n(J,m)},fe=r?J=>{r(J,{...m})}:void 0,te=l?J=>{l(J,{...m})}:void 0,H=i?J=>{i(J,{...m})}:void 0,j=s?J=>{s(J,{...m})}:void 0,ie=u?J=>{u(J,{...m})}:void 0,le=J=>{if(!x&&Bg.includes(J.key)&&I){let{unselectNodesAndEdges:ae,addSelectedEdges:xe}=M.getState();J.key==="Escape"?(N.current?.blur(),ae({edges:[m]})):xe([e])}};return(0,R.jsx)("svg",{style:{zIndex:A},children:(0,R.jsxs)("g",{className:Qe(["react-flow__edge",`react-flow__edge-${C}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!I&&!n,updating:T,selectable:I}]),onClick:Q,onDoubleClick:fe,onContextMenu:te,onMouseEnter:H,onMouseMove:j,onMouseLeave:ie,onKeyDown:v?le:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${fC}-${g}`:void 0,ref:N,...m.domAttributes,children:[!B&&(0,R.jsx)(S,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:I,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:k,sourceY:E,targetX:D,targetY:V,sourcePosition:G,targetPosition:O,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Y,markerEnd:Z,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,R.jsx)(XA,{edge:m,isReconnectable:_,reconnectRadius:c,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,sourceX:k,sourceY:E,targetX:D,targetY:V,sourcePosition:G,targetPosition:O,setUpdateHover:P,setReconnecting:L})]})})}var ZA=(0,z.memo)(YA),KA=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function PC({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:c,reconnectRadius:f,onEdgeDoubleClick:d,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:b}){let{edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,onError:m}=ge(KA,De),y=NA(t);return(0,R.jsxs)("div",{className:"react-flow__edges",children:[(0,R.jsx)(BA,{defaultColor:e,rfId:a}),y.map(C=>(0,R.jsx)(ZA,{id:C,edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,onClick:c,reconnectRadius:f,onDoubleClick:d,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:b},C))]})}PC.displayName="EdgeRenderer";var jA=(0,z.memo)(PC),rC=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function WA({children:e}){let t=qe(),a=(0,z.useRef)(null),[o]=(0,z.useState)(()=>t.getState().transform);return hC(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=rC(l)))};return r(),t.subscribe(r)},[t]),(0,R.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:rC(o)},children:e})}function QA(e){let t=ma(),a=(0,z.useRef)(!1);(0,z.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var $A=e=>e.panZoom?.syncViewport;function JA(e){let t=ge($A),a=qe();return(0,z.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function lC(e){return e.connection.inProgress?{...e.connection,to:Yl(e.connection.to,e.transform)}:{...e.connection}}function e6(e){return e?a=>{let o=lC(a);return e(o)}:lC}function gh(e){let t=e6(e);return ge(t,De)}var t6=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function a6({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=ge(t6,De);return!(r&&n&&s)?null:(0,R.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,R.jsx)("g",{className:Qe(["react-flow__connection",Ug(i)]),children:(0,R.jsx)(HC,{style:t,type:a,CustomComponent:o,isValid:i})})})}var HC=({style:e,type:t=io.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:u,toNode:c,toHandle:f,toPosition:d,pointer:p}=gh();if(!n)return;if(a)return(0,R.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:d,connectionStatus:Ug(o),toNode:c,toHandle:f,pointer:p});let g="",b={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:d};switch(t){case io.Bezier:[g]=Kl(b);break;case io.SimpleBezier:[g]=IC(b);break;case io.Step:[g]=qs({...b,borderRadius:0});break;case io.SmoothStep:[g]=qs(b);break;default:[g]=Xc(b)}return(0,R.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};HC.displayName="ConnectionLine";var o6={};function iC(e=o6){let t=(0,z.useRef)(e),a=qe();(0,z.useEffect)(()=>{},[e])}function n6(){let e=qe(),t=(0,z.useRef)(!1);(0,z.useEffect)(()=>{},[])}function UC({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:c,onSelectionContextMenu:f,onSelectionStart:d,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:b,connectionLineComponent:w,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:y,multiSelectionKeyCode:C,panActivationKeyCode:S,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:I,elementsSelectable:N,defaultViewport:T,translateExtent:P,minZoom:B,maxZoom:L,preventScrolling:M,defaultMarkerColor:A,zoomOnScroll:k,zoomOnPinch:E,panOnScroll:D,panOnScrollSpeed:V,panOnScrollMode:G,zoomOnDoubleClick:O,panOnDrag:Y,autoPanOnSelection:Z,onPaneClick:Q,onPaneMouseEnter:fe,onPaneMouseMove:te,onPaneMouseLeave:H,onPaneScroll:j,onPaneContextMenu:ie,paneClickDistance:le,nodeClickDistance:J,onEdgeContextMenu:ae,onEdgeMouseEnter:xe,onEdgeMouseMove:X,onEdgeMouseLeave:ne,reconnectRadius:de,onReconnect:dt,onReconnectStart:bt,onReconnectEnd:Dt,noDragClassName:Oa,noWheelClassName:Kn,noPanClassName:bo,disableKeyboardA11y:wo,nodeExtent:aa,rfId:W,viewport:Re,onViewportChange:Ke,nodesDraggable:Ba}){return iC(e),iC(t),n6(),QA(a),JA(Re),(0,R.jsx)(CA,{onPaneClick:Q,onPaneMouseEnter:fe,onPaneMouseMove:te,onPaneMouseLeave:H,onPaneContextMenu:ie,onPaneScroll:j,paneClickDistance:le,deleteKeyCode:_,selectionKeyCode:x,selectionOnDrag:m,selectionMode:y,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:C,panActivationKeyCode:S,zoomActivationKeyCode:v,elementsSelectable:N,zoomOnScroll:k,zoomOnPinch:E,zoomOnDoubleClick:O,panOnScroll:D,panOnScrollSpeed:V,panOnScrollMode:G,panOnDrag:Y,autoPanOnSelection:Z,defaultViewport:T,translateExtent:P,minZoom:B,maxZoom:L,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:Oa,noWheelClassName:Kn,noPanClassName:bo,disableKeyboardA11y:wo,onViewportChange:Ke,isControlledViewport:!!Re,children:(0,R.jsxs)(WA,{children:[(0,R.jsx)(jA,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:dt,onReconnectStart:bt,onReconnectEnd:Dt,onlyRenderVisibleElements:I,onEdgeContextMenu:ae,onEdgeMouseEnter:xe,onEdgeMouseMove:X,onEdgeMouseLeave:ne,reconnectRadius:de,defaultMarkerColor:A,noPanClassName:bo,disableKeyboardA11y:wo,rfId:W}),(0,R.jsx)(a6,{style:b,type:g,component:w,containerStyle:h}),(0,R.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,R.jsx)(TA,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:c,nodeClickDistance:J,onlyRenderVisibleElements:I,noPanClassName:bo,noDragClassName:Oa,disableKeyboardA11y:wo,nodeExtent:aa,rfId:W,nodesDraggable:Ba}),(0,R.jsx)("div",{className:"react-flow__viewport-portal"})]})})}UC.displayName="GraphView";var r6=(0,z.memo)(UC),l6=Kg("React Flow","https://reactflow.dev/"),sC=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:u=2,nodeOrigin:c,nodeExtent:f,zIndexMode:d="basic"}={})=>{let p=new Map,g=new Map,b=new Map,w=new Map,h=o??t??[],x=a??e??[],m=c??[0,0],y=f??Fl;lh(b,w,h);let{nodesInitialized:C}=Zc(x,p,g,{nodeOrigin:m,nodeExtent:y,zIndexMode:d}),S=[0,0,1];if(l&&n&&r){let v=Vl(p,{filter:T=>!!((T.width||T.initialWidth)&&(T.height||T.initialHeight))}),{x:_,y:I,zoom:N}=Us(v,n,r,s,u,i?.padding??.1);S=[_,I,N]}return{rfId:"1",width:n??0,height:r??0,transform:S,nodes:x,nodesInitialized:C,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:w,connectionLookup:b,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:Fl,nodeExtent:y,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Rn.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...Hg},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:l6,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Pg,zIndexMode:d,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},i6=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:c,nodeExtent:f,zIndexMode:d})=>B2((p,g)=>{async function b(){let{nodeLookup:w,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:y,height:C,minZoom:S,maxZoom:v}=g();h&&(await jv({nodes:w,width:y,height:C,panZoom:h,minZoom:S,maxZoom:v},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...sC({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:c,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:d}),setNodes:w=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:y,elevateNodesOnSelect:C,fitViewQueued:S,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:I,hasSelectedNodes:N}=Zc(w,h,x,{nodeOrigin:m,nodeExtent:y,elevateNodesOnSelect:C,checkEquality:!0,zIndexMode:v}),T=_&&N;S&&I?(b(),p({nodes:w,nodesInitialized:I,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:T})):p({nodes:w,nodesInitialized:I,nodesSelectionActive:T})},setEdges:w=>{let{connectionLookup:h,edgeLookup:x}=g();lh(h,x,w),p({edges:w})},setDefaultNodesAndEdges:(w,h)=>{if(w){let{setNodes:x}=g();x(w),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:y,nodeOrigin:C,nodeExtent:S,debug:v,fitViewQueued:_,zIndexMode:I}=g(),{changes:N,updatedInternals:T}=u2(w,x,m,y,C,S,I);T&&(i2(x,m,{nodeOrigin:C,nodeExtent:S,zIndexMode:I}),_?(b(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),N?.length>0&&(v&&console.log("React Flow: trigger node changes",N),h?.(N)))},updateNodePositions:(w,h=!1)=>{let x=[],m=[],{nodeLookup:y,triggerNodeChanges:C,connection:S,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[I,N]of w){let T=y.get(I),P=!!(T?.expandParent&&T?.parentId&&N?.position),B={id:I,type:"position",position:P?{x:Math.max(0,N.position.x),y:Math.max(0,N.position.y)}:N.position,dragging:h};if(T&&S.inProgress&&S.fromNode.id===T.id){let L=zn(T,S.fromHandle,ee.Left,!0);v({...S,from:L})}P&&T.parentId&&x.push({id:I,parentId:T.parentId,rect:{...N.internals.positionAbsolute,width:N.measured.width??0,height:N.measured.height??0}}),m.push(B)}if(x.length>0){let{parentLookup:I,nodeOrigin:N}=g(),T=Kc(x,y,I,N);m.push(...T)}for(let I of _.values())m=I(m);C(m)},triggerNodeChanges:w=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:y,debug:C}=g();if(w?.length){if(y){let S=fh(w,m);x(S)}C&&console.log("React Flow: trigger node changes",w),h?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:y,debug:C}=g();if(w?.length){if(y){let S=ph(w,m);x(S)}C&&console.log("React Flow: trigger edge changes",w),h?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:y,triggerEdgeChanges:C}=g();if(h){let S=w.map(v=>Ar(v,!0));y(S);return}y(Wl(m,new Set([...w]),!0)),C(Wl(x))},addSelectedEdges:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:y,triggerEdgeChanges:C}=g();if(h){let S=w.map(v=>Ar(v,!0));C(S);return}C(Wl(x,new Set([...w]))),y(Wl(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:y,triggerNodeChanges:C,triggerEdgeChanges:S}=g(),v=w||m,_=h||x,I=[];for(let T of v){if(!T.selected)continue;let P=y.get(T.id);P&&(P.selected=!1),I.push(Ar(T.id,!1))}let N=[];for(let T of _)T.selected&&N.push(Ar(T.id,!1));C(I),S(N)},setMinZoom:w=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([w,x]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,w]),p({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:y}=g();if(!y)return;let C=h.reduce((v,_)=>_.selected?[...v,Ar(_.id,!1)]:v,[]),S=w.reduce((v,_)=>_.selected?[...v,Ar(_.id,!1)]:v,[]);x(C),m(S)},setNodeExtent:w=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:y,elevateNodesOnSelect:C,nodeExtent:S,zIndexMode:v}=g();w[0][0]===S[0][0]&&w[0][1]===S[0][1]&&w[1][0]===S[1][0]&&w[1][1]===S[1][1]||(Zc(h,x,m,{nodeOrigin:y,nodeExtent:w,elevateNodesOnSelect:C,checkEquality:!1,zIndexMode:v}),p({nodeExtent:w}))},panBy:w=>{let{transform:h,width:x,height:m,panZoom:y,translateExtent:C}=g();return d2({delta:w,panZoom:y,transform:h,translateExtent:C,width:x,height:m})},setCenter:async(w,h,x)=>{let{width:m,height:y,maxZoom:C,panZoom:S}=g();if(!S)return!1;let v=typeof x?.zoom<"u"?x.zoom:C;return await S.setViewport({x:m/2-w*v,y:y/2-h*v,zoom:v},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Hg}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...sC()})}},Object.is);function hh({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:u,nodeOrigin:c,nodeExtent:f,zIndexMode:d,children:p}){let[g]=(0,z.useState)(()=>i6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:c,nodeExtent:f,zIndexMode:d}));return(0,R.jsx)(L4,{value:g,children:(0,R.jsx)(K4,{children:(0,R.jsx)(uA,{children:p})})})}function s6({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:u,maxZoom:c,nodeOrigin:f,nodeExtent:d,zIndexMode:p}){return(0,z.useContext)(tf)?(0,R.jsx)(R.Fragment,{children:e}):(0,R.jsx)(hh,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:c,nodeOrigin:f,nodeExtent:d,zIndexMode:p,children:e})}var u6={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function d6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:u,onMove:c,onMoveStart:f,onMoveEnd:d,onConnect:p,onConnectStart:g,onConnectEnd:b,onClickConnectStart:w,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:y,onNodeContextMenu:C,onNodeDoubleClick:S,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:I,onNodesDelete:N,onEdgesDelete:T,onDelete:P,onSelectionChange:B,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:A,onSelectionContextMenu:k,onSelectionStart:E,onSelectionEnd:D,onBeforeDelete:V,connectionMode:G,connectionLineType:O=io.Bezier,connectionLineStyle:Y,connectionLineComponent:Z,connectionLineContainerStyle:Q,deleteKeyCode:fe="Backspace",selectionKeyCode:te="Shift",selectionOnDrag:H=!1,selectionMode:j=Xo.Full,panActivationKeyCode:ie="Space",multiSelectionKeyCode:le=Zl()?"Meta":"Control",zoomActivationKeyCode:J=Zl()?"Meta":"Control",snapToGrid:ae,snapGrid:xe,onlyRenderVisibleElements:X=!1,selectNodesOnDrag:ne,nodesDraggable:de,autoPanOnNodeFocus:dt,nodesConnectable:bt,nodesFocusable:Dt,nodeOrigin:Oa=pC,edgesFocusable:Kn,edgesReconnectable:bo,elementsSelectable:wo=!0,defaultViewport:aa=B4,minZoom:W=.5,maxZoom:Re=2,translateExtent:Ke=Fl,preventScrolling:Ba=!0,nodeExtent:jn,defaultMarkerColor:Wn="#b1b1b7",zoomOnScroll:s_=!0,zoomOnPinch:u_=!0,panOnScroll:d_=!1,panOnScrollSpeed:c_=.5,panOnScrollMode:f_=Ga.Free,zoomOnDoubleClick:p_=!0,panOnDrag:m_=!0,onPaneClick:g_,onPaneMouseEnter:h_,onPaneMouseMove:x_,onPaneMouseLeave:y_,onPaneScroll:b_,onPaneContextMenu:w_,paneClickDistance:v_=1,nodeClickDistance:C_=0,children:S_,onReconnect:L_,onReconnectStart:__,onReconnectEnd:I_,onEdgeContextMenu:k_,onEdgeDoubleClick:M_,onEdgeMouseEnter:E_,onEdgeMouseMove:A_,onEdgeMouseLeave:T_,reconnectRadius:N_=10,onNodesChange:D_,onEdgesChange:R_,noDragClassName:z_="nodrag",noWheelClassName:O_="nowheel",noPanClassName:qh="nopan",fitView:Fh,fitViewOptions:Vh,connectOnClick:B_,attributionPosition:P_,proOptions:H_,defaultEdgeOptions:U_,elevateNodesOnSelect:q_=!0,elevateEdgesOnSelect:F_=!1,disableKeyboardA11y:Gh=!1,autoPanOnConnect:V_,autoPanOnNodeDrag:G_,autoPanOnSelection:X_=!0,autoPanSpeed:Y_,connectionRadius:Z_,isValidConnection:K_,onError:j_,style:W_,id:Xh,nodeDragThreshold:Q_,connectionDragThreshold:$_,viewport:J_,onViewportChange:eI,width:tI,height:aI,colorMode:oI="light",debug:nI,onScroll:Yh,ariaLabelConfig:rI,zIndexMode:Zh="basic",...lI},iI){let Nf=Xh||"1",sI=q4(oI),uI=(0,z.useCallback)(Kh=>{Kh.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Yh?.(Kh)},[Yh]);return(0,R.jsx)("div",{"data-testid":"rf__wrapper",...lI,onScroll:uI,style:{...W_,...u6},ref:iI,className:Qe(["react-flow",n,sI]),id:Xh,role:"application",children:(0,R.jsxs)(s6,{nodes:e,edges:t,width:tI,height:aI,fitView:Fh,fitViewOptions:Vh,minZoom:W,maxZoom:Re,nodeOrigin:Oa,nodeExtent:jn,zIndexMode:Zh,children:[(0,R.jsx)(U4,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:b,onClickConnectStart:w,onClickConnectEnd:h,nodesDraggable:de,autoPanOnNodeFocus:dt,nodesConnectable:bt,nodesFocusable:Dt,edgesFocusable:Kn,edgesReconnectable:bo,elementsSelectable:wo,elevateNodesOnSelect:q_,elevateEdgesOnSelect:F_,minZoom:W,maxZoom:Re,nodeExtent:jn,onNodesChange:D_,onEdgesChange:R_,snapToGrid:ae,snapGrid:xe,connectionMode:G,translateExtent:Ke,connectOnClick:B_,defaultEdgeOptions:U_,fitView:Fh,fitViewOptions:Vh,onNodesDelete:N,onEdgesDelete:T,onDelete:P,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:I,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:A,onMove:c,onMoveStart:f,onMoveEnd:d,noPanClassName:qh,nodeOrigin:Oa,rfId:Nf,autoPanOnConnect:V_,autoPanOnNodeDrag:G_,autoPanSpeed:Y_,onError:j_,connectionRadius:Z_,isValidConnection:K_,selectNodesOnDrag:ne,nodeDragThreshold:Q_,connectionDragThreshold:$_,onBeforeDelete:V,debug:nI,ariaLabelConfig:rI,zIndexMode:Zh}),(0,R.jsx)(r6,{onInit:u,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:y,onNodeContextMenu:C,onNodeDoubleClick:S,nodeTypes:r,edgeTypes:l,connectionLineType:O,connectionLineStyle:Y,connectionLineComponent:Z,connectionLineContainerStyle:Q,selectionKeyCode:te,selectionOnDrag:H,selectionMode:j,deleteKeyCode:fe,multiSelectionKeyCode:le,panActivationKeyCode:ie,zoomActivationKeyCode:J,onlyRenderVisibleElements:X,defaultViewport:aa,translateExtent:Ke,minZoom:W,maxZoom:Re,preventScrolling:Ba,zoomOnScroll:s_,zoomOnPinch:u_,zoomOnDoubleClick:p_,panOnScroll:d_,panOnScrollSpeed:c_,panOnScrollMode:f_,panOnDrag:m_,autoPanOnSelection:X_,onPaneClick:g_,onPaneMouseEnter:h_,onPaneMouseMove:x_,onPaneMouseLeave:y_,onPaneScroll:b_,onPaneContextMenu:w_,paneClickDistance:v_,nodeClickDistance:C_,onSelectionContextMenu:k,onSelectionStart:E,onSelectionEnd:D,onReconnect:L_,onReconnectStart:__,onReconnectEnd:I_,onEdgeContextMenu:k_,onEdgeDoubleClick:M_,onEdgeMouseEnter:E_,onEdgeMouseMove:A_,onEdgeMouseLeave:T_,reconnectRadius:N_,defaultMarkerColor:Wn,noDragClassName:z_,noWheelClassName:O_,noPanClassName:qh,rfId:Nf,disableKeyboardA11y:Gh,nodeExtent:jn,viewport:J_,onViewportChange:eI,nodesDraggable:de}),(0,R.jsx)(O4,{onSelectionChange:B}),S_,(0,R.jsx)(T4,{proOptions:H_,position:P_}),(0,R.jsx)(A4,{rfId:Nf,disableKeyboardA11y:Gh})]})})}var qC=gC(d6);var c6=e=>e.nodes;function FC(){return ge(c6,De)}var f6=e=>e.edges;function VC(){return ge(f6,De)}var p6=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function $l(){return ge(p6,De)}var $7=pa.error014();function m6({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,R.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Qe(["react-flow__background-pattern",a,o])})}function g6({radius:e,className:t}){return(0,R.jsx)("circle",{cx:e,cy:e,r:e,className:Qe(["react-flow__background-pattern","dots",t])})}var so;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(so||(so={}));var h6={[so.Dots]:1,[so.Lines]:1,[so.Cross]:6},x6=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function GC({id:e,variant:t=so.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:u,patternClassName:c}){let f=(0,z.useRef)(null),{transform:d,patternId:p}=ge(x6,De),g=o||h6[t],b=t===so.Dots,w=t===so.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*d[2]||1,h[1]*d[2]||1],m=g*d[2],y=Array.isArray(r)?r:[r,r],C=w?[m,m]:x,S=[y[0]*d[2]+C[0]/2,y[1]*d[2]+C[1]/2],v=`${p}${e||""}`;return(0,R.jsxs)("svg",{className:Qe(["react-flow__background",u]),style:{...s,...of,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:f,"data-testid":"rf__background",children:[(0,R.jsx)("pattern",{id:v,x:d[0]%x[0],y:d[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:b?(0,R.jsx)(g6,{radius:m/2,className:c}):(0,R.jsx)(m6,{dimensions:C,lineWidth:n,variant:t,className:c})}),(0,R.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}GC.displayName="Background";var XC=(0,z.memo)(GC);function y6(){return(0,R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,R.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function b6(){return(0,R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,R.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function w6(){return(0,R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,R.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function v6(){return(0,R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,R.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function C6(){return(0,R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,R.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Jc({children:e,className:t,...a}){return(0,R.jsx)("button",{type:"button",className:Qe(["react-flow__controls-button",t]),...a,children:e})}var S6=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function YC({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:u,children:c,position:f="bottom-left",orientation:d="vertical","aria-label":p}){let g=qe(),{isInteractive:b,minZoomReached:w,maxZoomReached:h,ariaLabelConfig:x}=ge(S6,De),{zoomIn:m,zoomOut:y,fitView:C}=ma(),S=()=>{m(),r?.()},v=()=>{y(),l?.()},_=()=>{C(n),i?.()},I=()=>{g.setState({nodesDraggable:!b,nodesConnectable:!b,elementsSelectable:!b}),s?.(!b)};return(0,R.jsxs)(af,{className:Qe(["react-flow__controls",d==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Jc,{onClick:S,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,R.jsx)(y6,{})}),(0,R.jsx)(Jc,{onClick:v,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:w,children:(0,R.jsx)(b6,{})})]}),a&&(0,R.jsx)(Jc,{className:"react-flow__controls-fitview",onClick:_,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,R.jsx)(w6,{})}),o&&(0,R.jsx)(Jc,{className:"react-flow__controls-interactive",onClick:I,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:b?(0,R.jsx)(C6,{}):(0,R.jsx)(v6,{})}),c]})}YC.displayName="Controls";var J7=(0,z.memo)(YC);function L6({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:u,borderRadius:c,shapeRendering:f,selected:d,onClick:p}){let{background:g,backgroundColor:b}=r||{},w=l||g||b;return(0,R.jsx)("rect",{className:Qe(["react-flow__minimap-node",{selected:d},u]),x:t,y:a,rx:c,ry:c,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var _6=(0,z.memo)(L6),I6=e=>e.nodes.map(t=>t.id),dh=e=>e instanceof Function?e:()=>e;function k6({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=_6,onClick:l}){let i=ge(I6,De),s=dh(t),u=dh(e),c=dh(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,R.jsx)(R.Fragment,{children:i.map(d=>(0,R.jsx)(E6,{id:d,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:c,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:f},d))})}function M6({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:u,x:c,y:f,width:d,height:p}=ge(g=>{let b=g.nodeLookup.get(e);if(!b)return{node:void 0,x:0,y:0,width:0,height:0};let w=b.internals.userNode,{x:h,y:x}=b.internals.positionAbsolute,{width:m,height:y}=Ta(w);return{node:w,x:h,y:x,width:m,height:y}},De);return!u||u.hidden||!jg(u)?null:(0,R.jsx)(i,{x:c,y:f,width:d,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:l,onClick:s,id:u.id})}var E6=(0,z.memo)(M6),A6=(0,z.memo)(k6),T6=200,N6=150,D6=e=>!e.hidden,R6=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Yg(Vl(e.nodeLookup,{filter:D6}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},uC=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,z6=(e,t)=>uC(e.viewBB,t.viewBB)&&uC(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,O6="react-flow__minimap-desc";function ZC({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:u,maskStrokeColor:c,maskStrokeWidth:f,position:d="bottom-right",onClick:p,onNodeClick:g,pannable:b=!1,zoomable:w=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:y=5}){let C=qe(),S=(0,z.useRef)(null),{boundingRect:v,viewBB:_,rfId:I,panZoom:N,translateExtent:T,flowWidth:P,flowHeight:B,ariaLabelConfig:L}=ge(R6,z6),M=e?.width??T6,A=e?.height??N6,k=v.width/M,E=v.height/A,D=Math.max(k,E),V=D*M,G=D*A,O=y*D,Y=v.x-(V-v.width)/2-O,Z=v.y-(G-v.height)/2-O,Q=V+O*2,fe=G+O*2,te=`${O6}-${I}`,H=(0,z.useRef)(0),j=(0,z.useRef)();H.current=D,(0,z.useEffect)(()=>{if(S.current&&N)return j.current=x2({domNode:S.current,panZoom:N,getTransform:()=>C.getState().transform,getViewScale:()=>H.current}),()=>{j.current?.destroy()}},[N]),(0,z.useEffect)(()=>{j.current?.update({translateExtent:T,width:P,height:B,inversePan:x,pannable:b,zoomStep:m,zoomable:w})},[b,w,x,m,T,P,B]);let ie=p?ae=>{let[xe,X]=j.current?.pointer(ae)||[0,0];p(ae,{x:xe,y:X})}:void 0,le=g?(0,z.useCallback)((ae,xe)=>{let X=C.getState().nodeLookup.get(xe).internals.userNode;g(ae,X)},[]):void 0,J=h??L["minimap.ariaLabel"];return(0,R.jsx)(af,{position:d,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:Qe(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,R.jsxs)("svg",{width:M,height:A,viewBox:`${Y} ${Z} ${Q} ${fe}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":te,ref:S,onClick:ie,children:[J&&(0,R.jsx)("title",{id:te,children:J}),(0,R.jsx)(A6,{onClick:le,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,R.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Y-O},${Z-O}h${Q+O*2}v${fe+O*2}h${-Q-O*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}ZC.displayName="MiniMap";var KC=(0,z.memo)(ZC),B6=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,P6={[On.Line]:"right",[On.Handle]:"bottom-right"};function H6({nodeId:e,position:t,variant:a=On.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:c=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:d,autoScale:p=!0,shouldResize:g,onResizeStart:b,onResize:w,onResizeEnd:h}){let x=wC(),m=typeof e=="string"?e:x,y=qe(),C=(0,z.useRef)(null),S=a===On.Handle,v=ge((0,z.useCallback)(B6(S&&p),[S,p]),De),_=(0,z.useRef)(null),I=t??P6[a];(0,z.useEffect)(()=>{if(!(!C.current||!m))return _.current||(_.current=C2({domNode:C.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:T,transform:P,snapGrid:B,snapToGrid:L,nodeOrigin:M,domNode:A}=y.getState();return{nodeLookup:T,transform:P,snapGrid:B,snapToGrid:L,nodeOrigin:M,paneDomNode:A}},onChange:(T,P)=>{let{triggerNodeChanges:B,nodeLookup:L,parentLookup:M,nodeOrigin:A}=y.getState(),k=[],E={x:T.x,y:T.y},D=L.get(m);if(D&&D.expandParent&&D.parentId){let V=D.origin??A,G=T.width??D.measured.width??0,O=T.height??D.measured.height??0,Y={id:D.id,parentId:D.parentId,rect:{width:G,height:O,...Wg({x:T.x??D.position.x,y:T.y??D.position.y},{width:G,height:O},D.parentId,L,V)}},Z=Kc([Y],L,M,A);k.push(...Z),E.x=T.x?Math.max(V[0]*G,T.x):void 0,E.y=T.y?Math.max(V[1]*O,T.y):void 0}if(E.x!==void 0&&E.y!==void 0){let V={id:m,type:"position",position:{...E}};k.push(V)}if(T.width!==void 0&&T.height!==void 0){let G={id:m,type:"dimensions",resizing:!0,setAttributes:d?d==="horizontal"?"width":"height":!0,dimensions:{width:T.width,height:T.height}};k.push(G)}for(let V of P){let G={...V,type:"position"};k.push(G)}B(k)},onEnd:({width:T,height:P})=>{let B={id:m,type:"dimensions",resizing:!1,dimensions:{width:T,height:P}};y.getState().triggerNodeChanges([B])}})),_.current.update({controlPosition:I,boundaries:{minWidth:i,minHeight:s,maxWidth:u,maxHeight:c},keepAspectRatio:f,resizeDirection:d,onResizeStart:b,onResize:w,onResizeEnd:h,shouldResize:g}),()=>{_.current?.destroy()}},[I,i,s,u,c,f,b,w,h,g]);let N=I.split("-");return(0,R.jsx)("div",{className:Qe(["react-flow__resize-control","nodrag",...N,a,o]),ref:C,style:{...n,scale:v,...l&&{[S?"backgroundColor":"borderColor"]:l}},children:r})}var eB=(0,z.memo)(H6);var ea=U(oe(),1),eS=U(en(),1);var lf=U(oe(),1);var nf=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var jC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var WC=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var xh=e=>{let t=WC(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Vs=U(oe(),1);var rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var QC=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Jl=U(oe(),1);var U6=(0,Jl.createContext)({});var $C=()=>(0,Jl.useContext)(U6);var JC=(0,Vs.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:p=""}=$C()??{},g=o??f?Number(a??c)*24/Number(t??u):a??c;return(0,Vs.createElement)("svg",{ref:s,...rf,width:t??u??rf.width,height:t??u??rf.height,stroke:e??d,strokeWidth:g,className:nf("lucide",p,n),...!r&&!QC(i)&&{"aria-hidden":"true"},...i},[...l.map(([b,w])=>(0,Vs.createElement)(b,w)),...Array.isArray(r)?r:[r]])});var F=(e,t)=>{let a=(0,lf.forwardRef)(({className:o,...n},r)=>(0,lf.createElement)(JC,{ref:r,iconNode:t,className:nf(`lucide-${jC(xh(e))}`,`lucide-${e}`,o),...n}));return a.displayName=xh(e),a};var q6=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],Tr=F("audio-lines",q6);var F6=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Gs=F("camera",F6);var V6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nr=F("check",V6);var G6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xs=F("chevron-down",G6);var X6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ei=F("chevron-right",X6);var Y6=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ys=F("chevron-left",Y6);var Z6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Zs=F("chevron-up",Z6);var K6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pn=F("circle-alert",K6);var j6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Hn=F("circle-check",j6);var W6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xa=F("circle-question-mark",W6);var Q6=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Ks=F("clapperboard",Q6);var $6=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],js=F("copy",$6);var J6=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],uo=F("file-pen",J6);var eT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Et=F("file-text",eT);var tT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Yo=F("film",tT);var aT=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ws=F("folder-open",aT);var oT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Un=F("folder",oT);var nT=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],ti=F("hand",nT);var rT=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Zo=F("image-plus",rT);var lT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ya=F("image",lT);var iT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qs=F("info",iT);var sT=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],$s=F("keyboard",sT);var uT=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],qn=F("layers",uT);var dT=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Js=F("layout-grid",dT);var cT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Fn=F("loader-circle",cT);var fT=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],eu=F("map",fT);var pT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],tu=F("maximize-2",pT);var mT=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],au=F("maximize",mT);var gT=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Dr=F("mic",gT);var hT=[["path",{d:"M5 12h14",key:"1ays0h"}]],ou=F("minus",hT);var xT=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ai=F("mouse-pointer",xT);var yT=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],$t=F("music",yT);var bT=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],nu=F("paperclip",bT);var wT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ru=F("pause",wT);var vT=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Vn=F("pen-line",vT);var CT=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],lu=F("person-standing",CT);var ST=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],co=F("play",ST);var LT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ut=F("plus",LT);var _T=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],iu=F("redo-2",_T);var IT=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Gn=F("refresh-cw",IT);var kT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],su=F("rotate-ccw",kT);var MT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uu=F("search",MT);var ET=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],du=F("sliders-horizontal",ET);var AT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ga=F("sparkles",AT);var TT=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Xn=F("square-split-vertical",TT);var NT=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],cu=F("table",NT);var DT=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],fu=F("tag",DT);var RT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Yn=F("triangle-alert",RT);var zT=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Rr=F("type",zT);var OT=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],pu=F("undo-2",OT);var BT=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],mu=F("unlink",BT);var PT=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],gu=F("upload",PT);var HT=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Za=F("video",HT);var UT=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Zn=F("wand-sparkles",UT);var qT=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],hu=F("waypoints",qT);var FT=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],xu=F("workflow",FT);var VT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jt=F("x",VT);var gt=U($(),1);function oi({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,u]=(0,ea.useState)(!1),c=(0,ea.useRef)(null),f=(0,ea.useRef)(null),[d,p]=(0,ea.useState)({top:0,left:0,placement:"bottom"}),g=(0,ea.useMemo)(()=>t.find(m=>m.value===e),[t,e]),b=(0,ea.useCallback)(()=>{if(!c.current)return;let m=c.current.getBoundingClientRect(),y=window.innerHeight,C=Math.min(t.length*34+16,260),v=y-m.bottom<C&&m.top>C,_=v?m.top-6:m.bottom+6,I=r?m.width:void 0;p({top:_,left:m.left,width:I,placement:v?"top":"bottom"})},[t.length,r]);(0,ea.useEffect)(()=>{if(!s)return;b();let m=S=>{let v=S.target;c.current?.contains(v)||f.current?.contains(v)||u(!1)},y=S=>{S.key==="Escape"&&u(!1)},C=()=>{b()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",y),window.addEventListener("scroll",C,!0),window.addEventListener("resize",b),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",y),window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",b)}},[s,b]);let w=(0,ea.useCallback)(m=>{m.stopPropagation(),!n&&u(y=>!y)},[n]),h=(0,ea.useCallback)((m,y)=>{y||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsxs)("button",{ref:c,type:"button",className:x,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,gt.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,gt.jsx)(Xs,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,eS.createPortal)((0,gt.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${d.placement}`,style:{position:"fixed",top:d.placement==="top"?void 0:d.top,bottom:d.placement==="top"?window.innerHeight-d.top:void 0,left:d.left,minWidth:d.width?Math.max(d.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,gt.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let y=m.value===e,C=!!m.subtitle||!!m.badge||!!m.icon;return(0,gt.jsxs)("button",{type:"button",role:"option","aria-selected":y,disabled:m.disabled,className:`wf-custom-select-option ${C?"wf-custom-select-option--rich":""} ${y?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,gt.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,gt.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,gt.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,gt.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,gt.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,gt.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),y?(0,gt.jsx)(Nr,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var fo=U(oe(),1),tS=U(en(),1),Ka=U($(),1),yu=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,fo.useState)(!1),i=(0,fo.useRef)(null),s=(0,fo.useRef)(null),[u,c]=(0,fo.useState)({left:0}),f=(0,fo.useCallback)(()=>{if(!i.current)return;let p=i.current.getBoundingClientRect(),g=a.startsWith("top"),b=a.endsWith("Right"),w=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=b?p.right-140:Math.max(10,p.left+p.width/2-70);c({top:w,bottom:h,left:x})},[a]);(0,fo.useEffect)(()=>{if(!r)return;f();let p=b=>{let w=b.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=b=>{b.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let d=p=>{p.stopPropagation(),l(g=>!g)};return(0,Ka.jsxs)(Ka.Fragment,{children:[(0,Ka.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?d:void 0,children:n}),r&&typeof document<"u"?(0,tS.createPortal)((0,Ka.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,Ka.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,Ka.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),l(!1))},children:[p.icon?(0,Ka.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,Ka.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var aS=U(oe(),1),yh=U($(),1),bh=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,aS.useCallback)(c=>{n(Number(c.target.value))},[n]);return(0,yh.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,yh.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var oS=U(oe(),1),nS=U(en(),1);var po=U($(),1),wh=({open:e,onCancel:t,title:a,footer:o,width:n=640,children:r})=>((0,oS.useEffect)(()=>{if(!e)return;let l=i=>{i.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]),!e||typeof document>"u"?null:(0,nS.createPortal)((0,po.jsx)("div",{className:"wf-modal-overlay",onClick:t,children:(0,po.jsxs)("div",{className:"wf-modal-card",style:{width:n},onClick:l=>l.stopPropagation(),children:[(0,po.jsxs)("div",{className:"wf-modal-header",children:[(0,po.jsx)("div",{className:"wf-modal-title",children:a}),(0,po.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,po.jsx)(Jt,{size:16})})]}),(0,po.jsx)("div",{className:"wf-modal-body",children:r}),o?(0,po.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var uf=U(oe(),1),rS=U(yg(),1);var zr=U($(),1),bu=null,GT=()=>{let[e,t]=(0,uf.useState)([]);return(0,uf.useEffect)(()=>(bu=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{bu=null}),[]),e.length===0?null:(0,zr.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=Qs,n="#60a5fa";return a.type==="success"?(o=Hn,n="#34d399"):a.type==="warning"?(o=Yn,n="#fb923c"):a.type==="error"&&(o=Pn,n="#f87171"),(0,zr.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,zr.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,zr.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function XT(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,rS.createRoot)(t).render((0,zr.jsx)(GT,{}))}function sf(e,t,a=2500){XT();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;bu?bu({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{bu?.({id:o,type:e,content:t,durationMs:a})},50)}var ni={success:(e,t)=>sf("success",e,t),warning:(e,t)=>sf("warning",e,t),error:(e,t)=>sf("error",e,t),info:(e,t)=>sf("info",e,t)};var lS=e=>{let t,a=new Set,o=(u,c)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let d=t;t=c??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,d))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,i);return i},iS=(e=>e?lS(e):lS);var wu=U(oe(),1);var YT=e=>e;function ZT(e,t=YT){let a=wu.default.useSyncExternalStore(e.subscribe,wu.default.useCallback(()=>t(e.getState()),[e,t]),wu.default.useCallback(()=>t(e.getInitialState()),[e,t]));return wu.default.useDebugValue(a),a}var sS=e=>{let t=iS(e),a=o=>ZT(t,o);return Object.assign(a,t),a},df=(e=>e?sS(e):sS);var pS=U(oe(),1);var uS=e=>Symbol.iterator in e,dS=e=>"entries"in e,cS=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},KT=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function fS(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:uS(e)&&uS(t)?dS(e)&&dS(t)?cS(e,t):KT(e,t):cS({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function mS(e){let t=pS.default.useRef(void 0);return a=>{let o=e(a);return fS(t.current,o)?t.current:t.current=o}}var hS={stroke:"#b1b1b7",strokeWidth:2},cf={type:"animated",style:hS,animated:!1};function gS(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function jT(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function xS(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:jT(e),...cf,...e,data:{...t,createdAt:a},animated:e.animated??cf.animated,style:{...hS,...e.style??{}},sourceHandle:gS(e.sourceHandle),targetHandle:gS(e.targetHandle)}}var yS={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},WT={text:"text-editor",image:"import",video:"import",audio:"import"};var bS={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function ff(e,t){return{label:"",materialType:e,status:"empty",selectedTool:WT[e],params:{},failStrategy:"abort",...t}}var QT={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function wS(e){return QT[e]??[]}function $T(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}return{nodeType:t,hasOutput:!0}}function JT(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=yS[n];if(l)for(let i of l){let s=bS[i];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function vS(e,t){let a=$T(e),o=JT(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function pf(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!vS(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of Vg(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function mf(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function eN(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function CS(e,t){let a=new Set;for(let c of t.addNodes??[]){if(a.has(c.id)||e.nodes.some(f=>f.id===c.id))return mf(e,"rejected","duplicate_node");a.add(c.id)}let o=eN([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return mf(e,"rejected","duplicate_node_patch");let n=new Set(o.map(c=>c.id));if((t.nodePatches??[]).some(c=>!n.has(c.nodeId)))return mf(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(c=>!l.has(c.id)),u=[...e.edges.filter(c=>!r.has(c.id)&&!l.has(c.source)&&!l.has(c.target))];for(let c of t.addEdges??[]){let f=xS(c),d=pf(f,i,u);if(!d.valid)return mf(e,"rejected",d.reasonCode??"invalid_connection");u.push(f)}return{nodes:i,edges:u,status:"allowed"}}function SS(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var gf=!1,hf=!1;function xf(){gf=!0}function LS(){hf=!0,gf=!1}function _S(){gf=!1,hf=!1}function tN(){hf=!1}function vh(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function Ch(e,t){return{nodes:e.slice(),edges:t.slice()}}function vu(e,t){return t||(hf&&e===0?"reset":gf&&e===0?"user-delete":"autosave")}function yf(e){let t=Ch(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:vh({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(tN(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var aN=50,oN=300;function Cu(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var qt={current:null,lastPushAt:0},he=df()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&xf(),e({nodes:fh(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:ph(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&xf();let o=t(),n=CS({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return SS(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&xf(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{_S(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),qt.current=Cu(a,o),qt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Cu(t().nodes,t().edges);if(qt.current&&qt.current.sig===a.sig)return;let o=Date.now();if(qt.current&&o-qt.lastPushAt>=oN){let n=qt.current;e(r=>({past:[...r.past,n].slice(-aN),future:[]})),qt.lastPushAt=o}qt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=Cu(o,n);qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=Cu(o,n);qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),qt.current=Cu(a,o),qt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{LS(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),qt.current=null,qt.lastPushAt=0}})),IS=()=>he(mS(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var kS=()=>he(e=>e.past.length>0),MS=()=>he(e=>e.future.length>0);var PS=U(oe(),1);var ES={total:0,completed:0,running:0,pending:0,percentage:0},Fe=df()(e=>({executionId:null,status:"idle",error:null,progress:ES,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:ES,nodeStatuses:{}})}));var AS=U(oe(),1),TS="(prefers-reduced-motion: reduce)";function nN(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(TS);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function rN(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(TS).matches}function NS(){return(0,AS.useSyncExternalStore)(nN,rN)}var mo=U(oe(),1),At=U($(),1),lN=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:u})=>{let f=(0,mo.useId)().replace(/:/g,""),d=`${f}-glow`,p=`${f}-grad`,g=`beam-flow-${f}`,b=(0,mo.useRef)(null),[w,h]=(0,mo.useState)(0);(0,mo.useEffect)(()=>{b.current&&h(b.current.getTotalLength())},[e]);let{dashSize:x,gapSize:m,offsetRange:y}=(0,mo.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,I=_*(1/3),N=_*(2/3);return{dashSize:I,gapSize:N,offsetRange:_}},[w]),C=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-y:0}px; }
            to { stroke-dashoffset: ${s?0:-y}px; }
        }
    `;return(0,At.jsxs)("g",{className:u,children:[(0,At.jsxs)("defs",{children:[(0,At.jsx)("style",{children:C}),(0,At.jsxs)("filter",{id:d,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,At.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,At.jsxs)("feMerge",{children:[(0,At.jsx)("feMergeNode",{in:"blur"}),(0,At.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,At.jsxs)("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",children:[(0,At.jsx)("stop",{offset:"0%",stopColor:n}),(0,At.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,At.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,At.jsx)("path",{ref:b,d:e,fill:"none",stroke:"none"}),w>0&&(0,At.jsx)("path",{d:e,stroke:`url(#${p})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${x} ${m}`,fill:"none",filter:`url(#${d})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},DS=lN;var Su=U(oe(),1);var OS=U(oe(),1);var iN={"node.type.text":"\u6587\u672C","node.type.table":"\u8868\u683C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.director3d":"3D \u5BFC\u6F14\u53F0","node.type.videoEdit":"\u89C6\u9891\u526A\u8F91","node.type.comfyui":"ComfyUI \u5DE5\u4F5C\u6D41","badge.new":"\u65B0","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.refsTitle":"\u53C2\u8003\u5A92\u4F53","panel.refsEmpty":"\u6682\u65E0\u53C2\u8003 \u2014\u2014 \u4ECE\u4E0A\u6E38\u8282\u70B9\u8FDE\u7EBF\u8F93\u5165\u5373\u4F5C\u4E3A\u53C2\u8003\u7D20\u6750","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","pills.omniReference":"\u5168\u80FD\u53C2\u8003","pills.firstLastFrame":"\u9996\u5C3E\u5E27","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u7248\u672C\u51B2\u7A81\uFF08\u5DE5\u4F5C\u533A\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u7248\u672C\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u533A\u5DF2\u5728\u5176\u4ED6\u4F1A\u8BDD\u88AB\u4FEE\u6539\u3002","app.conflictOverwrite":"\u5F3A\u5236\u8986\u76D6\u8FDC\u7AEF\u7248\u672C","app.conflictReload":"\u653E\u5F03\u672C\u5730\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210"},RS=iN;var sN={"node.type.text":"Text","node.type.table":"Table","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.director3d":"3D Director","node.type.videoEdit":"Video Edit","node.type.comfyui":"ComfyUI Workflow","badge.new":"NEW","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.refsTitle":"References","panel.refsEmpty":"No references yet \u2014 connect upstream nodes to use their output as reference","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","pills.omniReference":"Omni Reference","pills.firstLastFrame":"First & Last Frame","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Version conflict (modified elsewhere)","app.conflictBanner":"Conflict detected: Workspace was updated in another session.","app.conflictOverwrite":"Overwrite Remote","app.conflictReload":"Discard and Reload","palette.group.material":"Material","palette.node.material":"Material Node","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation"},zS=sN;var Sh={zh:RS,en:zS},bf="zh",Lh=new Set;function uN(e){return Lh.add(e),()=>Lh.delete(e)}function dN(){return bf}function BS(e){let t=e==="en"?"en":"zh";if(t!==bf){bf=t;for(let a of Lh)a()}}function Ko(e){return Sh[bf][e]??Sh.zh[e]??Sh.en[e]??e}function Se(){return(0,OS.useSyncExternalStore)(uN,dN),Ko}var vf=U($(),1),wf=28,cN=({edgeId:e,x:t,y:a})=>{let o=Se(),n=he(i=>i.applyCanvasInputMutation),r=(0,Su.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,Su.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,vf.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-wf/2,y:a-wf/2,width:wf,height:wf,children:(0,vf.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,vf.jsx)(mu,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},Cf=(0,Su.memo)(cN);var Na=U($(),1),fN=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[u,c,f]=Kl({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),d=Fe(w=>w.nodeStatuses[s]==="running"),p=NS(),g=i?"var(--wb-accent)":"var(--wb-edge)",b=i?2.5:2;return d&&p?(0,Na.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Na.jsx)(Bn,{id:e,path:u,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:b}}),(0,Na.jsx)(Cf,{edgeId:e,x:c,y:f})]}):d?(0,Na.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Na.jsx)(Bn,{id:e,path:u,style:{stroke:g,strokeWidth:b,opacity:0}}),(0,Na.jsx)(DS,{pathD:u,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:b}),(0,Na.jsx)(Cf,{edgeId:e,x:c,y:f})]}):(0,Na.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Na.jsx)(Bn,{id:e,path:u,style:{stroke:g,strokeWidth:b}}),(0,Na.jsx)(Cf,{edgeId:e,x:c,y:f})]})},HS=(0,PS.memo)(fN);var ri=U(oe(),1);function Da(e){e.stopPropagation()}function _h(e){e.preventDefault(),e.stopPropagation()}var ue=U($(),1),pN=[{type:"text",Icon:Et,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:Zo,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:Za,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:$t,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"}],mN=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:c,isAssetsOpen:f=!1})=>{let d=Se(),[p,g]=(0,ri.useState)(!1),b=u!==void 0?u:p,w=c||(()=>g(m=>!m)),h=(0,ri.useCallback)(m=>{e(m),c?c():g(!1)},[e,c]),x=[{key:"select",icon:(0,ue.jsx)(ai,{size:15}),label:d("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,ue.jsx)(ti,{size:15}),label:d("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,ue.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:Da,onMouseDown:Da,children:[(0,ue.jsxs)("div",{style:{position:"relative"},children:[(0,ue.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${b?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:_h,title:d("toolbar.addNode"),children:(0,ue.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ue.jsx)(Ut,{size:20})})}),b&&(0,ue.jsx)("div",{className:"wf-dock-add-popover",children:pN.map(m=>(0,ue.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:_h,children:[(0,ue.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,ue.jsx)(m.Icon,{size:18})}),(0,ue.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,ue.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,ue.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,ue.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ue.jsx)(yu,{items:x,selectedKeys:[r],placement:"topCenter",children:(0,ue.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,ue.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,ue.jsx)(ai,{size:16}):(0,ue.jsx)(ti,{size:16})}),(0,ue.jsx)(Zs,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,ue.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:d("toolbar.assets"),children:[(0,ue.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ue.jsx)(Ws,{size:17})}),(0,ue.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),(t||a)&&(0,ue.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,ue.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:d("toolbar.undoTitle"),children:[(0,ue.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ue.jsx)(pu,{size:16})}),(0,ue.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.undo")})]}),a&&(0,ue.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:d("toolbar.redoTitle"),children:[(0,ue.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ue.jsx)(iu,{size:16})}),(0,ue.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.redo")})]}),s&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ue.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:d("toolbar.help"),children:[(0,ue.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ue.jsx)(Xa,{size:16})}),(0,ue.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},US=(0,ri.memo)(mN);var li=U(oe(),1);var me=U($(),1),qS={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},gN=e=>Math.round(e.transform[2]*100),hN=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:u})=>{let c=Se(),{zoomIn:f,zoomOut:d,fitView:p}=ma(),g=ge(gN),b=Fe(N=>N.status),w=Fe(N=>N.progress),h=Fe(N=>N.error),x=b==="pending"||b==="running",m=b==="paused",y=b==="completed"||b==="error"||b==="cancelled",C=w.total>0,S=(0,li.useCallback)(()=>{p({duration:250,padding:.1})},[p]),v=(0,li.useCallback)(()=>{f({duration:150})},[f]),_=(0,li.useCallback)(()=>{d({duration:150})},[d]),I=[{key:"split-left",label:c("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:c("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:c("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:c("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,me.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:Da,onMouseDown:Da,children:[r&&(0,me.jsxs)("div",{className:"wf-header-capsule wf-header-capsule--exec",children:[x||m?(0,me.jsxs)(me.Fragment,{children:[(0,me.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${b}`,children:[c(qS[b]),C&&` (${w.completed}/${w.total})`]}),x?(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:c("exec.pauseTitle"),children:(0,me.jsx)(ru,{size:14})}):(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:c("exec.resumeTitle"),children:(0,me.jsx)(co,{size:14})}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:c("exec.cancelTitle"),children:(0,me.jsx)(Jt,{size:14})})]}):(0,me.jsxs)("button",{type:"button",className:"wf-header-capsule__cta-btn",onClick:r,title:h||c("exec.runAllTitle"),children:[(0,me.jsx)(co,{size:13,fill:"currentColor"}),(0,me.jsx)("span",{children:c(y?qS[b]:"exec.runAll")})]}),y&&u&&(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:c("exec.resetTitle"),children:(0,me.jsx)(su,{size:14})})]}),(0,me.jsxs)("div",{className:"wf-header-capsule",children:[(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:c("header.fitView"),children:(0,me.jsx)(au,{size:15})}),(0,me.jsx)("div",{className:"wf-header-capsule__divider"}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:c("header.zoomOut"),children:(0,me.jsx)(ou,{size:15})}),(0,me.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:S,title:c("header.fitView"),children:[g,"%"]}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:c("header.zoomIn"),children:(0,me.jsx)(Ut,{size:15})})]}),(0,me.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:c("header.alignGrid"),children:(0,me.jsx)(Js,{size:15})}),(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:c("header.routingCurved"),children:(0,me.jsx)(hu,{size:15})}),(0,me.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:c("header.minimap"),children:(0,me.jsx)(eu,{size:15})}),n&&(0,me.jsxs)(me.Fragment,{children:[(0,me.jsx)("div",{className:"wf-header-capsule__divider"}),(0,me.jsx)(yu,{items:I,selectedKeys:[o],placement:"bottomRight",children:(0,me.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:c("header.splitLayout"),children:(0,me.jsx)(Xn,{size:15})})})]})]})]})},FS=(0,li.memo)(hN);var go=U(oe(),1);var se=U($(),1),xN=[{key:"all",label:"\u5168\u90E8",icon:Un},{key:"character",label:"\u89D2\u8272 (1)",icon:ga},{key:"scene",label:"\u573A\u666F (2)",icon:Ya},{key:"prop",label:"\u9053\u5177 (3)",icon:fu},{key:"style",label:"\u98CE\u683C (4)",icon:ga},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:Et},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:Un},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:Yo}],yN=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,go.useState)(o),[i,s]=(0,go.useState)(""),[u,c]=(0,go.useState)([]),[f,d]=(0,go.useState)(!1),[p,g]=(0,go.useState)(null),b=(0,go.useCallback)(async()=>{d(!0),g(null);try{let x=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${x}`),y=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(y=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let C=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(C=_.artifacts.map(I=>({id:I.id,name:I.name||I.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:I.prompt||I.agent,real_path:I.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(I.id)}`,tags:[I.type||"artifact"],updatedAt:I.createdAt})))}}let S=[...y,...C];c(S)}catch(x){g(x.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{d(!1)}},[r]);(0,go.useEffect)(()=>{e&&b()},[e,b]);let w=x=>{l(x),n?.(x)},h=u.filter(x=>{if(!i.trim())return!0;let m=i.toLowerCase();return x.name.toLowerCase().includes(m)||x.description&&x.description.toLowerCase().includes(m)||x.tags&&x.tags.some(y=>y.toLowerCase().includes(m))});return e?(0,se.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:Da,onMouseDown:Da,onClick:x=>x.stopPropagation(),children:[(0,se.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,se.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,se.jsx)(Un,{size:18}),(0,se.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,se.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,se.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,se.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:b,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,se.jsx)(Gn,{size:14,className:f?"wf-spin":""})}),(0,se.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,se.jsx)(Jt,{size:16})})]})]}),(0,se.jsx)("div",{className:"wf-assets-drawer__categories",children:xN.map(x=>{let m=x.icon,y=r===x.key;return(0,se.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${y?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(x.key),children:[(0,se.jsx)(m,{size:13}),(0,se.jsx)("span",{children:x.label})]},x.key)})}),(0,se.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,se.jsx)(uu,{size:14,className:"wf-assets-drawer__search-icon"}),(0,se.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:x=>s(x.target.value)}),i&&(0,se.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,se.jsx)(Jt,{size:12})})]}),(0,se.jsxs)("div",{className:"wf-assets-drawer__body",children:[f&&(0,se.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,se.jsx)(Gn,{size:20,className:"wf-spin"}),(0,se.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),p&&!f&&(0,se.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,se.jsx)("span",{children:p}),(0,se.jsx)("button",{type:"button",onClick:b,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!f&&!p&&h.length===0&&(0,se.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,se.jsx)(Un,{size:32,strokeWidth:1.2}),(0,se.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,se.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!f&&!p&&h.length>0&&(0,se.jsx)("div",{className:"wf-assets-drawer__grid",children:h.map(x=>(0,se.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(x),title:`\u70B9\u51FB\u5C06\u300C${x.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,se.jsxs)("div",{className:"wf-assets-card__preview",children:[x.type==="scene"||x.type==="character"||x.type==="artifacts"?(0,se.jsx)("img",{src:x.previewUrl,alt:x.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,se.jsx)(Et,{size:24,className:"wf-assets-card__file-icon"}),(0,se.jsx)("span",{className:"wf-assets-card__type-tag",children:x.type})]}),(0,se.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,se.jsx)("div",{className:"wf-assets-card__name",children:x.name}),x.description&&(0,se.jsx)("div",{className:"wf-assets-card__desc",children:x.description})]}),(0,se.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(x)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,se.jsx)(Ut,{size:14}),(0,se.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},x.id))})]})]}):null},VS=yN;var ht=U($(),1),bN=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],wN=({isOpen:e,onClose:t})=>e?(0,ht.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:Da,onMouseDown:Da,onClick:t,children:(0,ht.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,ht.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,ht.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,ht.jsx)($s,{size:18}),(0,ht.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,ht.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,ht.jsx)(Jt,{size:16})})]}),(0,ht.jsx)("div",{className:"wf-shortcuts-modal__body",children:bN.map(a=>(0,ht.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,ht.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,ht.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,ht.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,ht.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,ht.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,ht.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,GS=wN;var Ra=U(oe(),1),ZS=U(en(),1);var xt=U($(),1),XS=278,Br=12,vN=8,Ih=160,Or=18,CN={AudioLines:(0,xt.jsx)(Tr,{size:Or}),ImageGen:(0,xt.jsx)(Zo,{size:Or}),Mic:(0,xt.jsx)(Dr,{size:Or}),PersonStanding:(0,xt.jsx)(lu,{size:Or}),TextGen:(0,xt.jsx)(Rr,{size:Or}),VideoGen:(0,xt.jsx)(Za,{size:Or})},SN={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function YS(e){return e?SN[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function LN(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-XS:e;return Math.min(Math.max(Br,o),Math.max(Br,a-XS-Br))}var _N=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,Ra.useRef)(null),[u,c]=(0,Ra.useState)({left:t,top:a,maxHeight:Ih});(0,Ra.useLayoutEffect)(()=>{if(!e)return;let d=typeof window>"u"?Ih:window.innerHeight,p=LN(t,i),g=a+vN,b=Math.max(Br,d-Br-Ih),w=Math.min(Math.max(Br,g),b);c({left:p,top:w,maxHeight:Math.max(0,d-w-Br)})},[i,e,t,a]),(0,Ra.useEffect)(()=>{if(!e)return;let d=g=>{s.current&&!s.current.contains(g.target)&&l()},p=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",p)}},[l,e]);let f=(0,Ra.useMemo)(()=>n.map(d=>(0,xt.jsx)("button",{type:"button","data-testid":`menu-item-${d.key}`,className:"wf-action-menu__item",onClick:()=>r(d.key),children:(0,xt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[d.icon?(0,xt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:YS(d.icon).bg,color:YS(d.icon).color},children:CN[d.icon]??(0,xt.jsx)(ga,{size:Or})}):null,(0,xt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,xt.jsx)("span",{className:"wf-action-menu__item-label",children:d.label}),d.description?(0,xt.jsx)("span",{className:"wf-action-menu__item-desc",children:d.description}):null]})]})},d.key)),[r,n]);return!e||n.length===0?null:(0,ZS.createPortal)((0,xt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,xt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,xt.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},Sf=(0,Ra.memo)(_N);var za=U(oe(),1),KS=U(en(),1);var Ie=U($(),1),IN=210,kN=230,MN=340,EN=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:c=!1})=>{let f=(0,za.useRef)(null),[d,p]=(0,za.useState)("main"),g=Se();(0,za.useEffect)(()=>{a&&p("main")},[a]),(0,za.useEffect)(()=>{if(!a)return;let y=S=>{f.current&&!f.current.contains(S.target)&&n()},C=S=>{S.key==="Escape"&&n()};return document.addEventListener("mousedown",y),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("keydown",C)}},[a,n]);let b=(0,za.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!c},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!c},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,Ie.jsx)(Ut,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,u,c,g]),w=(0,za.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Ie.jsx)(Rr,{size:18})},{key:"table",type:"text",label:g("node.type.table"),icon:(0,Ie.jsx)(cu,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Ie.jsx)(Ya,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Ie.jsx)(Za,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Ie.jsx)(Tr,{size:18})},{key:"director3d",type:"video",label:g("node.type.director3d"),icon:(0,Ie.jsx)(Gs,{size:18}),badge:{text:g("badge.new"),variant:"new"}},{key:"videoEdit",type:"video",label:g("node.type.videoEdit"),icon:(0,Ie.jsx)(Yo,{size:18}),badge:{text:g("badge.new"),variant:"new"}},{key:"comfyui",type:"image",label:g("node.type.comfyui"),icon:(0,Ie.jsx)(xu,{size:18}),badge:{text:g("badge.new"),variant:"new"},hasSubmenu:!0}],[g]);if(!a)return null;let h=d==="add-node"?kN:IN,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-MN-8);return(0,KS.createPortal)((0,Ie.jsx)("div",{ref:f,className:`wf-context-menu ${d==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:y=>y.preventDefault(),children:d==="main"?b.map(y=>(0,Ie.jsxs)(za.default.Fragment,{children:[o.type==="pane"&&y.action==="undo"?(0,Ie.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&y.action==="paste"?(0,Ie.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Ie.jsxs)("button",{type:"button",className:`wf-context-menu__item${y.disabled?" wf-context-menu__item--disabled":""}`,disabled:y.disabled,onClick:C=>{C.stopPropagation(),y.action==="open-add-node"?p("add-node"):r(y.action,o)},children:[y.icon?(0,Ie.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:y.icon}):null,(0,Ie.jsx)("span",{className:"wf-context-menu__label",children:y.label}),y.action==="open-add-node"?(0,Ie.jsx)(ei,{size:14,className:"wf-add-node-menu__arrow"}):y.shortcut?(0,Ie.jsx)("span",{className:"wf-context-menu__shortcut",children:y.shortcut}):null]})]},y.action)):(0,Ie.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Ie.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Ie.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:y=>{y.stopPropagation(),p("main")},title:g("menu.back"),children:(0,Ie.jsx)(Ys,{size:16})}),(0,Ie.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Ie.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(y=>(0,Ie.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:C=>{C.stopPropagation(),l?.(y.type),n()},children:[(0,Ie.jsx)("div",{className:"wf-add-node-menu__icon-box",children:y.icon}),(0,Ie.jsx)("span",{className:"wf-add-node-menu__label",children:y.label}),y.badge?(0,Ie.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${y.badge.variant}`,children:y.badge.text}):null,y.hasSubmenu?(0,Ie.jsx)(ei,{size:14,className:"wf-add-node-menu__arrow"}):null]},y.key))})]})}),document.body)},jS=EN;var WS=U(oe(),1),QS=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:u,onToggleShortcuts:c,onToggleMinimap:f,onToggleAddMenu:d,onSetPointerMode:p,onFitView:g,onResetZoom:b,onCategoryKey:w,isAssetsOpen:h=!1,enabled:x=!0})=>{(0,WS.useEffect)(()=>{if(!x)return;let m=y=>{let C=y.target;if(["INPUT","TEXTAREA"].includes(C.tagName)||C.isContentEditable)return;let S=y.metaKey||y.ctrlKey,v=y.key.toLowerCase();if(!S&&h&&/^[1-6]$/.test(y.key)){y.preventDefault(),w?.(parseInt(y.key,10));return}if(!S&&v==="a"){y.preventDefault(),u?.();return}if(!S&&v==="v"){y.preventDefault(),p?.("select");return}if(!S&&v==="h"){y.preventDefault(),p?.("pan");return}if(!S&&v==="n"){y.preventDefault(),d?.();return}if(!S&&v==="m"){y.preventDefault(),f?.();return}if(y.key==="?"||y.shiftKey&&y.key==="/"){y.preventDefault(),c?.();return}if(S&&y.key==="1"){y.preventDefault(),g?.();return}if(S&&y.key==="0"){y.preventDefault(),b?.();return}if((y.key==="Delete"||y.key==="Backspace")&&l&&!S){y.preventDefault(),o?.();return}if(y.key==="Escape"){y.preventDefault(),h?u?.():l&&n?.();return}if(S&&v==="d"&&l){y.preventDefault(),r?.();return}if(S&&v==="c"&&!y.shiftKey){y.preventDefault(),e?.();return}if(S&&v==="v"){y.preventDefault(),t?.();return}if(S&&v==="a"){y.preventDefault(),a?.();return}if(S&&v==="z"&&!y.shiftKey){y.preventDefault(),i?.();return}S&&v==="z"&&y.shiftKey&&(y.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,e,t,a,o,n,r,l,i,s,u,c,f,d,p,g,b,w,h])};var ja=U(oe(),1);function Lf(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function $S(e,t,a){return kh(e,t,a).valid}function kh(e,t,a){let o=pf(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var Mh={minZoom:.23,maxZoom:1.29,defaultZoom:1},AN={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},JS={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},TN={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},NN={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},eL={portrait:AN,square:JS,video_landscape:TN,audio_compact:NN};function Eh(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function DN(e){return eL[Eh(e)]}function tL(e,t){let a=eL[t]||JS;return Math.round(e/a.aspectRatio)}function ii(e){return DN(e).default.width}function aL(e,t,a){let o=ff(e,{status:"empty",nodeWidth:ii(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function Pr(e,t,a){return{nodes:[aL(e,t,a)],edges:[]}}function oL(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function RN(e,t){return`${e}-${t}`}function _f(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function If(e){return wS(e).map(t=>{let a=String(t.targetTool);return{key:RN(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function nL(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var zN={visible:!1,x:0,y:0,options:[]};function rL(e){let t=Se(),{screenToFlowPosition:a}=ma(),o=he(p=>p.applyCanvasInputMutation),n=(0,ja.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,ja.useState)(zN),i=(0,ja.useRef)(null),s=(0,ja.useRef)(null),u=(0,ja.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let b=he.getState().nodes.find(h=>h.id===g.nodeId),w=b?.data?.materialType;if(!b||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),c=(0,ja.useCallback)((p,g)=>{let b=g.fromNode?.id??null,w=g.toNode?.id??null,h=i.current,x=h?If(h.materialType):[],m=null;if(!g.isValid&&b&&w){let C=he.getState(),S=kh({source:b,target:w,sourceHandle:null,targetHandle:null},C.nodes,C.edges);m=S.valid?null:t(Lf(S.reasonCode))}let y=nL({isValid:g.isValid??null,fromNodeId:b,toNodeId:w,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(y.type==="reject"){n.current?.(y.reason),ni.warning(y.reason),i.current=null;return}if(y.type==="menu"&&h){let C="changedTouches"in p?p.changedTouches[0]:p;if(!C){i.current=null;return}let{clientX:S,clientY:v}=C;s.current=a({x:S,y:v}),l({visible:!0,x:S,y:v,options:x.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),f=(0,ja.useCallback)(p=>{let g=i.current,b=s.current,w=_f(p);if(g&&b&&w){let h=Pr(w.targetMaterialType,b),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}l(h=>({...h,visible:!1})),i.current=null,s.current=null},[o]),d=(0,ja.useCallback)(()=>{l(p=>({...p,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:c,onMenuSelect:f,onMenuClose:d}}var ho=U(oe(),1);var It=[];for(let e=0;e<256;++e)It.push((e+256).toString(16).slice(1));function lL(e,t=0){return(It[e[t+0]]+It[e[t+1]]+It[e[t+2]]+It[e[t+3]]+"-"+It[e[t+4]]+It[e[t+5]]+"-"+It[e[t+6]]+It[e[t+7]]+"-"+It[e[t+8]]+It[e[t+9]]+"-"+It[e[t+10]]+It[e[t+11]]+It[e[t+12]]+It[e[t+13]]+It[e[t+14]]+It[e[t+15]]).toLowerCase()}var Ah,ON=new Uint8Array(16);function Th(){if(!Ah){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ah=crypto.getRandomValues.bind(crypto)}return Ah(ON)}var BN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Nh={randomUUID:BN};function PN(e,t,a){e=e||{};let o=e.random??e.rng?.()??Th();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return lL(o)}function HN(e,t,a){return Nh.randomUUID&&!t&&!e?Nh.randomUUID():PN(e,t,a)}var kf=HN;function iL(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function UN(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function sL(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=UN(o),l,i;if(t)l=t.x,i=t.y;else{let f=a?50:30;l=r.x+f,i=r.y+f}let s=new Map,u=o.map(f=>{let d=kf();return s.set(f.id,d),{...f,id:d,position:{x:l+(f.position.x-r.x),y:i+(f.position.y-r.y)},selected:!0}}),c=n.map(f=>({...f,id:kf(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:c,newPastePosition:{x:l,y:i}}}function uL(e,t){let a=(0,ho.useRef)({nodes:[],edges:[]}),o=(0,ho.useRef)(null),n=a.current.nodes.length>0,r=(0,ho.useCallback)(()=>{let f=he.getState(),d=iL(f.nodes,f.edges);d.nodes.length>0&&(a.current=d,o.current=null)},[]),l=(0,ho.useCallback)(f=>{let d=sL(a.current,f,o.current);if(!d)return;o.current=d.newPastePosition;let p=he.getState();p.applyCanvasInputMutation({addNodes:d.nodes,addEdges:d.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,ho.useCallback)(()=>{r(),l()},[r,l]),s=(0,ho.useCallback)(()=>{let f=he.getState(),d=f.nodes.filter(p=>p.selected).map(p=>p.id);d.length!==0&&f.applyCanvasInputMutation({removeNodeIds:d})},[]),u=(0,ho.useCallback)(()=>{e(f=>f.map(d=>({...d,selected:!0})))},[e]),c=(0,ho.useCallback)(()=>{e(f=>f.map(d=>({...d,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:c}}var xo=U(oe(),1);function dL(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:u,redo:c,onExecuteNodeIds:f}=e,[d,p]=(0,xo.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),g=(0,xo.useCallback)((C,S)=>{C.preventDefault();let v={type:"pane"};S?v={type:"node",nodeId:S.id}:he.getState().nodes.filter(I=>I.selected).length>1&&(v={type:"selection"}),p({visible:!0,x:C.clientX,y:C.clientY,context:v})},[]),b=(0,xo.useCallback)((C,S)=>{g(C,S)},[g]),w=(0,xo.useCallback)(C=>{g(C)},[g]),h=(0,xo.useCallback)(C=>{g(C)},[g]),x=(0,xo.useCallback)(()=>{p(C=>({...C,visible:!1}))},[]),m=(0,xo.useCallback)((C,S)=>{let v=t({x:d.x,y:d.y});switch(C){case"copy":{if(S.type==="node"){let I=he.getState().nodes.find(N=>N.id===S.nodeId);I&&!I.selected&&(s(),a(N=>N.map(T=>T.id===S.nodeId?{...T,selected:!0}:T)))}o();break}case"paste":n(v);break;case"duplicate":r();break;case"delete":{if(S.type==="node"){let _=he.getState();_.nodes.find(N=>N.id===S.nodeId)?.selected?l():_.applyCanvasInputMutation({removeNodeIds:[S.nodeId]})}else l();break}case"undo":u();break;case"redo":c();break;case"select-all":i();break;case"execute-selection":{let _=he.getState().nodes.filter(I=>I.selected).map(I=>I.id);_.length>0&&f?.(_);break}case"execute-node":{S.type==="node"&&f?.([S.nodeId]);break}}x()},[d.x,d.y,t,s,a,o,n,r,l,u,c,i,x,f]),y=(0,xo.useCallback)(C=>{let S=t({x:d.x,y:d.y});onAddNode?.(C,S),x()},[d.x,d.y,t,onAddNode,x]);return{menu:d,handleNodeContextMenu:b,handlePaneContextMenu:w,handleSelectionContextMenu:h,closeMenu:x,handleMenuAction:m,handleAddNodeFromMenu:y}}var qN=U(oe(),1),cL=new Map;function fL(e){cL.set(e.type,e)}function pL(){let e={};for(let[t,a]of cL)e[t]=a.component;return e}var Ye=U(oe(),1);var Oe=U(oe(),1);function mL(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var Wa=U($(),1),FN=4,VN=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=Se(),[l,i]=(0,Oe.useState)(!1),[s,u]=(0,Oe.useState)(!1),[c,f]=(0,Oe.useState)(null),d=(0,Oe.useRef)(null),p=(0,Oe.useRef)(null),g=(0,Oe.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),b=e==="left",w=a==="plus"&&!!o&&o.length>0,h=gh(k=>k.inProgress),{screenToFlowPosition:x}=ma(),m=(0,Oe.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Oe.useEffect)(()=>{if(a!=="plus"){m();return}let k=d.current,E=p.current;if(!k||!E)return;let D=V=>{if(s)return;let G=k.getBoundingClientRect(),O=G.left+G.width/2,Y=G.top+G.height/2,{x:Z,y:Q}=mL(e,V.clientX-O,V.clientY-Y);E.style.setProperty("--wf-handle-offset-x",`${Z}px`),E.style.setProperty("--wf-handle-offset-y",`${Q}px`)};return k.addEventListener("pointermove",D),()=>{k.removeEventListener("pointermove",D)}},[s,m,e,a]),(0,Oe.useEffect)(()=>{if(!s){m(),f(null);return}let k=()=>{let E=d.current;if(!E)return;let D=E.getBoundingClientRect();f({x:b?D.right:D.left,y:D.bottom})};return k(),window.addEventListener("resize",k),window.addEventListener("scroll",k,!0),()=>{window.removeEventListener("resize",k),window.removeEventListener("scroll",k,!0)}},[s,b,m]);let y=(0,Oe.useCallback)(()=>{i(!0)},[]),C=(0,Oe.useCallback)(()=>{i(!1),m()},[m]),S=(0,Oe.useCallback)(k=>{let E=d.current;!E||k===null||typeof E.hasPointerCapture!="function"||typeof E.releasePointerCapture!="function"||!E.hasPointerCapture(k)||E.releasePointerCapture(k)},[]),v=(0,Oe.useCallback)(()=>{S(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[S]),_=(0,Oe.useCallback)(k=>{k.button===0&&(typeof k.currentTarget.setPointerCapture=="function"&&k.currentTarget.setPointerCapture(k.pointerId),g.current.pointerId=k.pointerId,g.current.startX=k.clientX,g.current.startY=k.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),I=(0,Oe.useCallback)(k=>{if(g.current.pointerId!==k.pointerId)return;Math.hypot(k.clientX-g.current.startX,k.clientY-g.current.startY)>=FN&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),N=(0,Oe.useCallback)(k=>{g.current.pointerId===k.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),T=(0,Oe.useCallback)(k=>{g.current.pointerId===k.pointerId&&(g.current.suppressClick=!1,v())},[v]),P=(0,Oe.useCallback)(k=>{if(k.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&u(E=>!E)},[w]),B=(0,Oe.useCallback)(()=>{let k=c;if(!k){let E=d.current;if(!E)return;let D=E.getBoundingClientRect();k={x:b?D.right:D.left,y:D.bottom}}return{screenPosition:k,flowPosition:x(k)}},[b,c,x]),L=(0,Oe.useCallback)(k=>{n?.(k,B()),u(!1)},[n,B]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),A={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,Wa.jsxs)(Ql,{id:b?"in":"out",type:b?"target":"source",position:b?ee.Left:ee.Right,isConnectable:!0,className:M,style:A,children:[(0,Wa.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,Wa.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,Wa.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,Wa.jsx)("div",{ref:d,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:y,onPointerLeave:C,onPointerDown:_,onPointerMove:I,onPointerUp:N,onPointerCancel:T,onClick:P,children:(0,Wa.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,Wa.jsx)("div",{className:"wf-handle__plus-button",children:(0,Wa.jsx)(Ut,{size:24,strokeWidth:2.5})})})}):null,w&&c?(0,Wa.jsx)(Sf,{visible:s,x:c.x,y:c.y,align:b?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Dh=(0,Oe.memo)(VN);var Qa=U(oe(),1);var kt=U($(),1);function GN(e){let t=Se();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var XN=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=Se(),u=(0,Qa.useRef)(e),[c,f]=(0,Qa.useState)(e==="completed"?"complete":"idle"),[d,p]=(0,Qa.useState)(1),[g,b]=(0,Qa.useState)(e==="completed"?1:0),[w,h]=(0,Qa.useState)(e==="pending"||e==="generating");(0,Qa.useEffect)(()=>{let P=u.current;if(u.current=e,(P==="pending"||P==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),b(1)});let B=setTimeout(()=>{f("complete"),h(!1)},i+50);return()=>clearTimeout(B)}P==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),b(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),b(0),f("idle")),e==="failed"&&(h(!1),f("idle")),P===e&&e==="completed"&&(f("complete"),b(1),h(!1))},[e,i]);let x=e==="pending"||e==="generating",m=e==="failed",y=e==="completed",C=s(e==="pending"?"node.preparing":"node.generating"),S=GN(a),v=(0,Qa.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,I=()=>(0,kt.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:d},children:(0,kt.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,kt.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,kt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,kt.jsx)("span",{className:"wf-gsc__progress-text",children:C})})]})}),N=()=>(0,kt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,kt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,kt.jsx)(Jt,{size:24})}),(0,kt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),S?(0,kt.jsx)("span",{className:"wf-gsc__failed-message",children:S}):null,o?(0,kt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,kt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,kt.jsx)(Gn,{size:14}),s("node.regenerate")]}):null]}),T=P=>(0,kt.jsx)("div",{className:`${l} ${P?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,kt.jsxs)("div",{className:`wf-gsc ${x?_:""} ${l}`,children:[(x||w)&&I(),m&&N(),(y||c==="crossfading")&&T(c==="crossfading")]})},gL=XN;var yt=U(oe(),1);function si(e){return e>0?1/e:1}function hL(e,t,a){return!!e&&!t&&a!=="running"}function xL(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var Hr=U($(),1),yL=24,bL=30,YN={text:Et,image:Zo,video:Za,audio:$t},ZN=({label:e,materialType:t,onLabelChange:a,trailing:o})=>{let n=Se(),r=n(`node.type.${t}`),l=e||r,i=YN[t],{zoom:s}=$l(),[u,c]=(0,yt.useState)(!1),[f,d]=(0,yt.useState)(l),p=(0,yt.useRef)(null),g=(0,yt.useMemo)(()=>si(s),[s]);(0,yt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,yt.useEffect)(()=>{u||d(l)},[l,u]);let b=(0,yt.useCallback)(C=>{C.stopPropagation(),c(!0),d(l)},[l]),w=(0,yt.useCallback)(()=>{let S=f.trim()||r;c(!1),S!==e&&a&&a(S)},[f,r,e,a]),h=(0,yt.useCallback)(()=>{c(!1),d(l)},[l]),x=(0,yt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),w()):C.key==="Escape"&&(C.preventDefault(),h())},[w,h]),m=(0,yt.useCallback)(C=>{let S=C.target.value;S.length<=bL&&d(S)},[]);return(0,Hr.jsxs)("div",{className:"wf-node-header",style:{top:-(yL+4*g),height:yL,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Hr.jsx)("span",{className:"wf-node-header__icon",children:(0,Hr.jsx)(i,{size:14})}),u?(0,Hr.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:w,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:bL}):(0,Hr.jsx)("span",{onDoubleClick:b,className:"wf-node-header__label",title:l.length>20?l:n("node.renameHint"),children:l}),o]})},wL=(0,yt.memo)(ZN);var Mf=U(oe(),1);var jo=U($(),1),KN=({executionStatus:e,status:t})=>{let a=Se();return(0,Mf.useMemo)(()=>{switch(e){case"running":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,jo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});default:return null}},[e,t,a])},vL=(0,Mf.memo)(KN);var Ur=U(oe(),1);function ui(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var Lu=U($(),1);var jN=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,Ur.useMemo)(()=>ui(e,t,a),[e,t,a]),l=(0,Ur.useCallback)(s=>{let u=s.currentTarget;u.naturalWidth>0&&u.naturalHeight>0&&n?.(u.naturalWidth,u.naturalHeight)},[n]),i=(0,Ur.useCallback)(s=>{let u=s.currentTarget;u.videoWidth>0&&u.videoHeight>0&&n?.(u.videoWidth,u.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,Lu.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,Lu.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,Lu.jsx)("div",{className:"wf-media-preview__audio",children:(0,Lu.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},CL=(0,Ur.memo)(jN);var SL=U(oe(),1);var ve=U($(),1),WN=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=Se();return e==="text"?(0,ve.jsxs)("div",{className:"wf-node-empty wf-node-empty--text nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,ve.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ve.jsx)(Et,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,ve.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,ve.jsxs)("div",{className:"wf-node-empty__actions",children:[(0,ve.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,ve.jsx)(Vn,{size:14,className:"wf-node-empty__pill-icon"}),(0,ve.jsx)("span",{children:o("pills.writePrompt")})]}),(0,ve.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,ve.jsx)(Ks,{size:14,className:"wf-node-empty__pill-icon"}),(0,ve.jsx)("span",{children:o("pills.scriptGen")})]}),(0,ve.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,ve.jsx)(uo,{size:14,className:"wf-node-empty__pill-icon"}),(0,ve.jsx)("span",{children:o("pills.planningGen")})]}),(0,ve.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,ve.jsx)(ga,{size:14,className:"wf-node-empty__pill-icon"}),(0,ve.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,ve.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,ve.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ve.jsx)(Ya,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,ve.jsxs)("div",{className:"wf-node-empty wf-node-empty--video",children:[(0,ve.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ve.jsx)(co,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})}),(0,ve.jsx)("div",{className:"wf-node-empty__video-dock nodrag",onMouseDown:n=>n.stopPropagation(),children:(0,ve.jsxs)("div",{className:"wf-node-empty__video-actions",children:[(0,ve.jsxs)("button",{type:"button",className:"wf-node-empty__video-pill-btn",onClick:()=>t?.("omni-ref"),children:[(0,ve.jsx)(Zn,{size:14,className:"wf-node-empty__pill-icon"}),(0,ve.jsx)("span",{children:o("pills.omniReference")})]}),(0,ve.jsxs)("button",{type:"button",className:"wf-node-empty__video-pill-btn",onClick:()=>t?.("first-last-frame"),children:[(0,ve.jsx)(Yo,{size:14,className:"wf-node-empty__pill-icon"}),(0,ve.jsx)("span",{children:o("pills.firstLastFrame")})]})]})})]}):e==="audio"?(0,ve.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,ve.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ve.jsx)($t,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},Ef=(0,SL.memo)(WN);var ha=U(oe(),1);var st=U($(),1),QN=({materialType:e,selected:t,onImportFile:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=Se(),{zoom:i}=$l(),s=(0,ha.useRef)(null),[u,c]=ha.default.useState(!1),f=(0,ha.useMemo)(()=>si(i),[i]),d=(0,ha.useCallback)(h=>{let x=h.target.files?.[0];x&&a&&a(x),h.target.value=""},[a]),p=(0,ha.useCallback)(()=>{n&&(n(),c(!0),setTimeout(()=>c(!1),1500))},[n]),g=(0,ha.useMemo)(()=>{switch(e){case"image":return"image/*";case"video":return"video/*";case"audio":return"audio/*";default:return"*/*"}},[e]),b=(0,ha.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,st.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:h=>h.stopPropagation(),children:e==="text"?(0,st.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,st.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,st.jsx)(uo,{size:13,className:"wf-floating-top-pill__icon"}),(0,st.jsx)("span",{children:l("pill.textEdit")})]}),(0,st.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,st.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:p,title:l("pill.copy"),children:u?(0,st.jsx)(Nr,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,st.jsx)(js,{size:13,className:"wf-floating-top-pill__icon"})}),(0,st.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,st.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,st.jsx)(qn,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,st.jsxs)("div",{className:"wf-floating-top-pill__single",children:[(0,st.jsx)("input",{ref:s,type:"file",accept:g,style:{display:"none"},onChange:d}),(0,st.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>s.current?.click(),children:[(0,st.jsx)(gu,{size:13,className:"wf-floating-top-pill__icon"}),(0,st.jsx)("span",{children:b})]})]})})},LL=(0,ha.memo)(QN);var di=U(oe(),1);var _L=U(oe(),1),IL=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function $N(e,t,a=IL){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function kL({refs:e,excludeSelectors:t=IL,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,_L.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=c=>{let f=c.target;$N(f,r.map(d=>d.current),t)&&a()},i=c=>{c.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var Rh=U($(),1),JN=480,e8=({children:e,onClose:t,width:a=JN})=>{let{zoom:o}=$l(),n=(0,di.useRef)(null),r=(0,di.useMemo)(()=>si(o),[o]);return kL({refs:n,onClose:t}),(0,Rh.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,Rh.jsx)("div",{className:"wf-panel-shell__card",children:e})})},ML=(0,di.memo)(e8);var ta=U(oe(),1);var EL=U(oe(),1),ci=U($(),1),zh={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},t8=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function a8(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(zh[t])return t;for(let a of t8)if(a.regex.test(t))return a.brand;return null}var AL=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,EL.useMemo)(()=>t&&zh[t.toLowerCase()]?t.toLowerCase():a8(e),[t,e]),i=l?zh[l]:null;if(!i){if(r)return(0,ci.jsx)(ci.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,ci.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,ci.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var TL=U(oe(),1);function Af(e){let t=FC(),a=VC();return(0,TL.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(c=>c.id===n);if(!r)return[];let l=r.data||{},i=ui(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",u=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:u,textContent:s}]}),[t,a,e])}var NL=U(oe(),1),DL="wf_capabilities_catalog_v1",o8={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function _u(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(DL);return e?JSON.parse(e):null}catch{return null}}function RL(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(DL,JSON.stringify(e))}catch{}}function zL(e,t,a){return(0,NL.useMemo)(()=>{let n=(a??_u())?.[e]??[],r=n.find(y=>y.id===t)??n[0],l=o8[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",c=y=>y?s.some(C=>C.value===y):!1,f=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],d=i.duration?.defaultValue??f[0]?.value??5,p=y=>typeof y!="number"?!1:f.some(C=>C.value===y),g=i.resolution?.options??[],b=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],h=i.quality?.defaultValue??w[0]?.value??"",x=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:c,durationOptions:f,defaultDuration:d,isDurationValid:p,resolutionOptions:g,defaultResolution:b,qualityOptions:w,defaultQuality:h,hasSoundSupport:x,defaultSound:m}},[e,t,a])}var OL=U(oe(),1);var Wo=U($(),1),n8=({onClick:e,disabled:t,isGenerating:a})=>{let o=Se();return(0,Wo.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,children:[(0,Wo.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,Wo.jsx)("button",{type:"button",onClick:e,disabled:t,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,Wo.jsx)(Fn,{size:14,className:"wf-generate-btn__spin"}):(0,Wo.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,Wo.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,Wo.jsx)("path",{d:"M12 19V5"})]})})]})},BL=(0,OL.memo)(n8);var PL=U(oe(),1);var Tt=U($(),1),r8=({nodeId:e})=>{let t=Se(),a=Af(e);return(0,Tt.jsxs)("div",{className:"wf-ref-slot",children:[(0,Tt.jsxs)("span",{className:"wf-ref-slot__title",children:[(0,Tt.jsx)(nu,{size:12}),t("panel.refsTitle")]}),a.length===0?(0,Tt.jsx)("span",{className:"wf-ref-slot__empty",children:t("panel.refsEmpty")}):(0,Tt.jsx)("div",{className:"wf-ref-slot__list",children:a.map(o=>(0,Tt.jsxs)("div",{className:"wf-ref-slot__card",title:o.label,children:[o.url&&o.materialType==="image"?(0,Tt.jsx)("img",{className:"wf-ref-slot__thumb",src:o.url,alt:o.label}):o.url&&o.materialType==="video"?(0,Tt.jsx)("video",{className:"wf-ref-slot__thumb",src:o.url,muted:!0}):o.materialType==="audio"?(0,Tt.jsx)("span",{className:"wf-ref-slot__thumb wf-ref-slot__thumb--icon",children:(0,Tt.jsx)($t,{size:14})}):o.materialType==="text"?(0,Tt.jsx)("span",{className:"wf-ref-slot__thumb wf-ref-slot__thumb--icon",children:(0,Tt.jsx)(Et,{size:14})}):(0,Tt.jsx)("span",{className:"wf-ref-slot__thumb wf-ref-slot__thumb--pending"}),(0,Tt.jsx)("span",{className:"wf-ref-slot__name",children:o.label})]},o.nodeId))})]})},HL=(0,PL.memo)(r8);var K=U($(),1);function l8(e){let t=(0,K.jsx)(AL,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var i8=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r})=>{let l=Se(),{materialType:i,selectedTool:s,params:u,prompt:c}=t,[f,d]=(0,ta.useState)(!1),[p,g]=(0,ta.useState)(!1),[b,w]=(0,ta.useState)(!1),h=Af(e),x=s==="text-to-music"?"music":"speech",m=(0,ta.useCallback)(E=>{o({selectedTool:E==="music"?"text-to-music":"text-to-audio"})},[o]),y=(0,ta.useMemo)(()=>{let E=a?.[i]??[];return E.length===0&&(i==="text"?E=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:i==="image"?E=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:i==="video"?E=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:i==="audio"&&(E=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),E.map(D=>{let V=l8(D.id),G=V.icon,O=D.badge??V.badge,Y=D.subtitle??V.subtitle;return{value:D.id,label:D.label,triggerLabel:(0,K.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[G?(0,K.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:G}):null,(0,K.jsx)("span",{children:D.label})]}),icon:G,badge:O,subtitle:Y}})},[a,i]),C=typeof u.model=="string"?u.model:y[0]?.value,{aspectRatioOptions:S,defaultAspectRatio:v,isAspectRatioValid:_,durationOptions:I,defaultDuration:N,isDurationValid:T}=zL(i,C,a),P=(0,ta.useCallback)((E,D)=>{o({params:{...u,[E]:D}})},[o,u]),B=(0,ta.useCallback)(E=>{let O=((a??_u())?.[i]??[]).find(Z=>Z.id===E)?.parameters,Y={...u,model:E};u.aspectRatio&&O?.aspectRatio?.options&&(O.aspectRatio.options.some(Q=>Q.value===u.aspectRatio)||(Y.aspectRatio=O.aspectRatio.defaultValue||"16:9")),typeof u.duration=="number"&&O?.duration?.options&&(O.duration.options.some(Q=>Q.value===u.duration)||(Y.duration=O.duration.defaultValue||O.duration.options[0]?.value||5)),o({params:Y})},[a,i,o,u]),L=(0,ta.useMemo)(()=>{switch(i){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[i]),M=(0,ta.useMemo)(()=>{switch(i){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(x==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[i,x,l]),A=typeof u.aspectRatio=="string"&&_(u.aspectRatio)?u.aspectRatio:v,k=typeof u.duration=="number"&&T(u.duration)?u.duration:N;return(0,K.jsxs)("div",{className:"wf-config-panel",children:[i==="audio"&&(0,K.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,K.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,K.jsx)(Dr,{size:13}),(0,K.jsx)("span",{children:l("panel.audioGen")})]}),(0,K.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,K.jsx)($t,{size:13}),(0,K.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,K.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,K.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[(0,K.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[h.length>0?h.map(E=>(0,K.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${E.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${E.label} (${E.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,onClick:()=>g(!p),children:[E.url&&E.materialType==="image"?(0,K.jsx)("img",{src:E.url,alt:E.label,className:"wf-config-panel__ref-thumb-media"}):E.url&&E.materialType==="video"?(0,K.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,K.jsx)("video",{src:E.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,K.jsx)(co,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):E.materialType==="audio"?(0,K.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,K.jsx)($t,{size:13})}):E.materialType==="text"?(0,K.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,K.jsx)(Et,{size:13})}):(0,K.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,K.jsx)(Ya,{size:13})}),E.hasMedia&&(0,K.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},E.nodeId)):null,(0,K.jsx)("button",{type:"button",className:`wf-config-panel__ref-btn ${p?"wf-config-panel__ref-btn--active":""}`,onClick:()=>g(!p),title:l("panel.refsTitle"),children:(0,K.jsx)(Ut,{size:14})})]}),(0,K.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>d(!0),title:l("header.fitView"),children:(0,K.jsx)(tu,{size:13})})]}),(0,K.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:c??"",placeholder:M,rows:3,onChange:E=>o({prompt:E.target.value})}),(0,K.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(c||"").length," / ",L]})]}),p&&(0,K.jsx)("div",{className:"wf-config-panel__refs-drawer",children:(0,K.jsx)(HL,{nodeId:e})}),(0,K.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,K.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,K.jsx)(oi,{className:"wf-param-bar__select wf-param-bar__select--model",value:C,options:y,popupMatchSelectWidth:!1,onChange:E=>B(E)}),i==="image"&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,K.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,K.jsx)(oi,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:S,popupMatchSelectWidth:!1,onChange:E=>P("aspectRatio",E)})})]}),i==="video"&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,K.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,K.jsx)(oi,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:S,popupMatchSelectWidth:!1,onChange:E=>P("aspectRatio",E)}),(0,K.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,K.jsx)(oi,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:k,options:I,popupMatchSelectWidth:!1,onChange:E=>P("duration",E)})]})]}),i==="audio"&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,K.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>w(!b),title:l("panel.advanced"),children:(0,K.jsx)(du,{size:13})})]})]}),(0,K.jsx)("div",{className:"wf-config-panel__action-group",children:(0,K.jsx)(BL,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),b&&(0,K.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,K.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,K.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,K.jsx)(bh,{style:{flex:1},min:1,max:i==="video"?20:60,value:k,onChange:E=>P("duration",E)})]})}),(0,K.jsx)(wh,{title:l("panel.promptPlaceholder"),open:f,onCancel:()=>d(!1),width:680,children:(0,K.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:c??"",placeholder:M,rows:10,onChange:E=>o({prompt:E.target.value})})})]})},UL=(0,ta.memo)(i8);var Te=U($(),1),s8=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:u,errorMessage:c}=o,f=o.executionStatus,d=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[b,w]=(0,Ye.useState)(!1),[h,x]=(0,Ye.useState)(!1),[m,y]=(0,Ye.useState)(!1),[C,S]=(0,Ye.useState)(!1),[v,_]=(0,Ye.useState)(null),{setNodes:I}=ma(),N=Fe(X=>X.status==="pending"||X.status==="running"),T=o.nodeWidth??ii(n),P=Eh(n),B=tL(T,P),L=v??o.nodeHeight??B,M=(0,Ye.useCallback)(X=>{I(ne=>ne.map(de=>de.id===e?{...de,data:{...de.data,...X}}:de))},[e,I]),A=(0,Ye.useCallback)((X,ne)=>{if(X>0&&ne>0){let de=X/ne,dt=Math.max(80,Math.min(800,Math.round(T/de)));_(dt),o.nodeHeight!==dt&&M({nodeHeight:dt})}},[o.nodeHeight,T,M]),k=(0,Ye.useCallback)(()=>{Fe.getState().startNodeExecution?.(e)},[e]),E=Se(),D=he(X=>X.applyCanvasInputMutation),V=(0,Ye.useMemo)(()=>If(n).map(X=>({key:X.key,label:E(X.labelKey),description:E(X.descKey),icon:X.icon})),[n,E]),G=(0,Ye.useCallback)((X,ne)=>{let de=_f(X),dt=ne?.flowPosition;if(!de||!dt)return;let bt=Pr(de.targetMaterialType,dt),Dt=bt.nodes[0];Dt&&D({addNodes:bt.nodes,addEdges:[{source:e,sourceHandle:"out",target:Dt.id,targetHandle:"in"}]})},[D,e]),O=u||i||"",Y=(0,Ye.useCallback)(X=>{if(n==="text"){let ne="";X==="script"?ne=`\u3010\u5267\u672C\u573A\u666F\u3011
\u65F6\u95F4\uFF1A\u9EC4\u660F
\u5730\u70B9\uFF1A\u90FD\u5E02\u8857\u89D2
\u4EBA\u7269\uFF1A\u4E3B\u89D2\uFF08\u795E\u60C5\u51DD\u91CD\uFF09
\u5BF9\u767D/\u52A8\u4F5C\uFF1A\u4F4E\u5934\u770B\u8868\uFF0C\u968F\u540E\u6B65\u5165\u9634\u5F71\u4E4B\u4E2D\u3002`:X==="planning"?ne=`\u3010\u77ED\u5267\u7B56\u5212\u6848\u3011
\u4E3B\u9898\uFF1A\u9006\u88AD/\u6253\u8138\u723D\u6587
\u76EE\u6807\u53D7\u4F17\uFF1A\u90FD\u5E02\u9752\u5E74\u7FA4\u4F53
\u6838\u5FC3\u51B2\u7A81\uFF1A\u9690\u85CF\u8EAB\u4EFD\u7684\u7EE7\u627F\u4EBA\u5728\u5173\u952E\u65F6\u523B\u529B\u633D\u72C2\u6F9C\u3002`:X==="prompt"?ne="\u8D85\u5199\u5B9E\u7535\u5F71\u8D28\u611F\uFF0C8k \u5206\u8FA8\u7387\uFF0C\u67D4\u548C\u9EC4\u660F\u5149\u7EBF\uFF0C\u8D5B\u535A\u670B\u514B\u90FD\u5E02\u8857\u9053\uFF0C\u666F\u6DF1\u6D45\uFF0C\u6770\u4F5C\u3002":X==="storyboard"&&(ne=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({content:ne,prompt:ne,status:ne.trim()?"ready":"empty",generatedContent:void 0})}else n==="video"&&(X==="omni-ref"?M({prompt:"\u8D5B\u535A\u670B\u514B\u4E3B\u89D2\u5728\u96E8\u591C\u5954\u8DD1\uFF0C\u624B\u90E8\u7279\u5199\u4E0E\u8FD0\u955C\u4FDD\u6301\u6D41\u7545\u4E00\u81F4",params:{...o.params,mode:"omni-ref"}}):X==="first-last-frame"&&M({prompt:"\u4ECE\u521D\u59CB\u9759\u6B62\u955C\u5934\u5E73\u6ED1\u8FD0\u955C\u8FC7\u6E21\u5230\u4EBA\u7269\u8F6C\u8EAB\u7279\u5199",params:{...o.params,mode:"first-last-frame"}}))},[n,o.params,M]),Z=(0,Ye.useCallback)(X=>{let ne=URL.createObjectURL(X);if(X.type.startsWith("image/")){let de=new Image;de.src=ne,de.onload=()=>{de.naturalWidth>0&&de.naturalHeight>0&&A(de.naturalWidth,de.naturalHeight)}}else if(X.type.startsWith("video/")){let de=document.createElement("video");de.src=ne,de.onloadedmetadata=()=>{de.videoWidth>0&&de.videoHeight>0&&A(de.videoWidth,de.videoHeight)}}M({mediaUrl:ne,status:"ready",content:X.name})},[A,M]),Q=(0,Ye.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!0)},[]),fe=(0,Ye.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!1)},[]),te=(0,Ye.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!1);let ne=X.dataTransfer.files?.[0];ne&&Z(ne)},[Z]),H=(0,Ye.useCallback)(()=>{O&&navigator.clipboard.writeText(O).catch(()=>{})},[O]),j=(0,Ye.useCallback)(()=>{if(!O)return;let X=O.split(`

`).filter(ne=>ne.trim().length>0);X.length>1&&M({content:X.join(`
---
`)})},[O,M]);(0,Ye.useEffect)(()=>{a||(y(!1),S(!1))},[a]);let ie=hL(a,m,f),le=ui(n,p,s),J=xL(f,r,!!le),ae=n==="video"?"video":n==="audio"?"audio":"square";return(0,Te.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:T},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(b||a)&&(0,Te.jsx)(LL,{materialType:n,selected:a,onImportFile:Z,onStartTextEdit:()=>S(!0),onCopyText:H,onSplitText:j}),(0,Te.jsx)(Dh,{side:"left",nodeHovered:b}),(0,Te.jsx)(wL,{label:l,materialType:n,onLabelChange:X=>M({label:X}),trailing:(0,Te.jsx)(vL,{executionStatus:f,status:r})}),(0,Te.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:T,height:L},onDragOver:Q,onDragLeave:fe,onDrop:te,children:[a&&(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,Te.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:O||C?(0,Te.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${C?" nodrag":""}`,readOnly:!C,value:O,placeholder:E("node.textPlaceholder"),autoFocus:C,onMouseDown:X=>{C||X.preventDefault()},onDoubleClick:X=>{X.stopPropagation(),S(!0),X.currentTarget.focus()},onFocus:()=>S(!0),onBlur:()=>S(!1),onChange:X=>M({content:X.target.value,status:X.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,Te.jsx)(Ef,{materialType:"text",onStartEdit:()=>S(!0),onApplyPreset:Y})}),n!=="text"&&(J?(0,Te.jsx)("div",{className:"wf-material-node__media",children:(0,Te.jsx)(gL,{status:J,loadingAspectRatio:ae,errorMessage:d??c,taskId:o.taskId,onRetry:k,children:le?(0,Te.jsx)(CL,{materialType:n,mediaAssets:p,mediaUrl:s,label:l,onMediaSizeChange:A}):(0,Te.jsx)(Ef,{materialType:n,onApplyPreset:Y})})}):(0,Te.jsx)("div",{className:"wf-material-node__media",children:(0,Te.jsx)(Ef,{materialType:n,onApplyPreset:Y})})),n==="text"&&(c||d)&&(0,Te.jsx)("div",{className:"wf-material-node__error",children:d??c})]}),ie&&(0,Te.jsx)(ML,{onClose:()=>y(!0),children:(0,Te.jsx)(UL,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:k,execBusy:N})}),(0,Te.jsx)(Dh,{side:"right",nodeHovered:b,options:V,onSelect:G})]})},qL=(0,Ye.memo)(s8);var FL={type:"material",component:qL,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>ff("text",{status:"empty",nodeWidth:ii("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var Nt=U($(),1);fL(FL);var u8=pL(),d8={animated:HS},VL={maxZoom:1},c8={x:0,y:0,zoom:1},f8=[1,2],p8=96,m8=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:u}=ma(),{nodes:c,edges:f,onNodesChange:d,onEdgesChange:p}=IS(),g=he(W=>W.applyCanvasInputMutation),b=he(W=>W.setNodes),w=he(W=>W.setSelectedElement),h=he(W=>W.pushHistory),x=he(W=>W.undo),m=he(W=>W.redo),y=kS(),C=MS(),[S,v]=(0,Ze.useState)(null),[_,I]=(0,Ze.useState)(!1),[N,T]=(0,Ze.useState)(!1),[P,B]=(0,Ze.useState)(!1),[L,M]=(0,Ze.useState)(!1),[A,k]=(0,Ze.useState)(void 0),[E,D]=(0,Ze.useState)("select"),V=(0,Ze.useRef)(0),G=(0,Ze.useMemo)(()=>c.some(W=>W.selected),[c]),O=uL(b,w),Y=Se(),Z=Y("menu.generateFromNode"),{menuState:Q,onConnectStart:fe,onConnectEnd:te,onMenuSelect:H,onMenuClose:j}=rL({onReject:v});(0,Ze.useEffect)(()=>{h()},[c,f,h]);let ie=(0,Ze.useMemo)(()=>e?c.map(W=>({...W,data:{...W.data,__catalog:e}})):c,[c,e]),le=(0,Ze.useCallback)(W=>{let Re=g({addEdges:[W]});if(Re.status==="rejected"){let Ke=Y(Lf(Re.reasonCode));v(Ke),ni.warning(Ke)}else v(null)},[g,Y]),J=(0,Ze.useCallback)(W=>{let Re=he.getState();return $S(W,Re.nodes,Re.edges)},[]),ae=(0,Ze.useCallback)((W,Re)=>{let Ke=V.current,Ba=Re??{x:120+Ke%3*420,y:120+Math.floor(Ke/3)*360},jn=Pr(W,Ba);jn.nodes.length!==0&&(V.current+=1,b(Wn=>oL(Wn,jn.nodes)))},[b]),xe=(0,Ze.useCallback)(W=>{let Re=W.nodes.map(Ba=>Ba.id),Ke=W.edges.map(Ba=>Ba.id);Re.length===0&&Ke.length===0||g({removeNodeIds:Re,removeEdgeIds:Ke})},[g]),{menu:X,handleNodeContextMenu:ne,handlePaneContextMenu:de,handleSelectionContextMenu:dt,closeMenu:bt,handleMenuAction:Dt,handleAddNodeFromMenu:Oa}=dL({screenToFlowPosition:i,setNodes:b,copySelectedNodes:O.copySelectedNodes,pasteNodes:O.pasteNodes,duplicateSelectedNodes:O.duplicateSelectedNodes,deleteSelectedNodes:O.deleteSelectedNodes,selectAllNodes:O.selectAllNodes,clearSelection:O.clearSelection,undo:x,redo:m,onExecuteNodeIds:t,onAddNode:ae}),Kn=(0,Ze.useCallback)(W=>{let Re=W.type==="video"?"video":W.type==="image"?"image":"text",Ke=V.current++,Ba={x:200+Ke%4*50,y:200+Ke%4*40},Wn=Pr(Re,Ba,{title:W.name,content:W.path,previewUrl:W.previewUrl,status:"ready"}).nodes[0];Wn&&(g({addNodes:[Wn]}),w("node",Wn.id),ni.success(Y("toolbar.assets")+": "+W.name))},[g,w,Y]);QS({onCopy:O.copySelectedNodes,onPaste:()=>O.pasteNodes(),onSelectAll:O.selectAllNodes,onDeleteSelected:O.deleteSelectedNodes,onClearSelection:O.clearSelection,onDuplicate:O.duplicateSelectedNodes,onUndo:x,onRedo:m,hasSelection:G,onToggleAssets:()=>T(W=>!W),onToggleShortcuts:()=>B(W=>!W),onToggleMinimap:()=>I(W=>!W),onToggleAddMenu:()=>M(W=>!W),onSetPointerMode:W=>D(W),onFitView:()=>s(VL),onResetZoom:()=>u(1),onCategoryKey:W=>{T(!0),k(W)}});let bo=(0,Ze.useCallback)((W,Re)=>{w("node",Re.id)},[w]),wo=(0,Ze.useCallback)(()=>{w("none",null),bt()},[w,bt]),aa=(0,Ze.useCallback)(()=>{b(W=>W.map((Re,Ke)=>({...Re,position:{x:120+Ke%3*440,y:120+Math.floor(Ke/3)*360}})))},[b]);return(0,Nt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Nt.jsx)(qC,{nodes:ie,edges:f,onNodesChange:d,onEdgesChange:p,onConnect:le,isValidConnection:J,onConnectStart:fe,onConnectEnd:te,onNodeClick:bo,onPaneClick:wo,onNodeContextMenu:ne,onPaneContextMenu:de,onSelectionContextMenu:dt,onDelete:xe,nodeTypes:u8,edgeTypes:d8,fitView:!0,fitViewOptions:VL,defaultViewport:c8,minZoom:Mh.minZoom,maxZoom:Mh.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:E==="pan"?!0:f8,panOnScroll:!0,panOnScrollMode:Ga.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:E==="select",selectionMode:Xo.Partial,defaultEdgeOptions:cf,connectOnClick:!1,connectionRadius:p8,onlyRenderVisibleElements:!0,children:(0,Nt.jsx)(XC,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:so.Dots})}),(0,Nt.jsx)(FS,{isMinimapOpen:_,onToggleMinimap:()=>I(W=>!W),onAlignGrid:aa,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Nt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Nt.jsx)(KC,{pannable:!0,zoomable:!0})}),(0,Nt.jsx)(US,{onAddNode:ae,onUndo:x,onRedo:m,canUndo:y,canRedo:C,pointerMode:E,onPointerModeChange:D,onToggleAssets:()=>T(W=>!W),onToggleShortcuts:()=>B(W=>!W),isAssetsOpen:N,isShortcutsOpen:P,isAddMenuOpen:L,onToggleAddMenu:()=>M(W=>!W)}),(0,Nt.jsx)(VS,{isOpen:N,onClose:()=>T(!1),onInsertAsset:Kn,selectedCategoryIndex:A}),(0,Nt.jsx)(GS,{isOpen:P,onClose:()=>B(!1)}),(0,Nt.jsx)(jS,{x:X.x,y:X.y,visible:X.visible,context:X.context,onClose:bt,onAction:Dt,onAddNode:Oa,canUndo:y,canRedo:C,hasClipboard:O.hasClipboard,hasSelection:G}),(0,Nt.jsx)(Sf,{visible:Q.visible,x:Q.x,y:Q.y,title:Z,options:Q.options,onSelect:H,onClose:j}),S&&(0,Nt.jsx)("div",{className:"wf-rejected-toast",children:S})]})},g8=e=>(0,Nt.jsx)(hh,{children:(0,Nt.jsx)(m8,{...e})}),GL=g8;var ut=U(oe(),1);var $a="/omnimux-workflow";var xa={manifest:`${$a}/api/manifest`,canvasJs:`${$a}/canvas.js`,workspaces:`${$a}/api/workspaces`,workspace:e=>`${$a}/api/workspaces/${e}`,workspaceVersion:e=>`${$a}/api/workspaces/${e}/version`,capabilities:`${$a}/api/capabilities`,media:`${$a}/media`,executions:e=>`${$a}/api/workspaces/${e}/executions`,execution:(e,t)=>`${$a}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${$a}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${$a}/api/workspaces/${e}/executions/${t}/events`};async function yo(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function XL(){return yo(xa.capabilities)}function YL(){return yo(xa.workspaces)}function Oh(e,t){return yo(xa.workspaces,{method:"POST",body:{name:e,id:t}})}function Iu(e){return yo(xa.workspace(encodeURIComponent(e)))}function ZL(e){return yo(xa.workspaceVersion(encodeURIComponent(e)))}function KL(e,t){return yo(xa.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function jL(e,t={}){return yo(xa.executions(encodeURIComponent(e)),{method:"POST",body:t})}function WL(e){return yo(xa.executions(encodeURIComponent(e)))}function QL(e,t){return yo(xa.execution(encodeURIComponent(e),encodeURIComponent(t)))}function $L(e,t,a){return yo(xa.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var JL=new Set(["pending","running","paused"]),h8=new Set(["completed","error","cancelled"]);function ku(e,t){let a=he.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function e_(e){let t=(0,ut.useRef)(null),a=(0,ut.useRef)(e);a.current=e;let o=(0,ut.useCallback)(()=>{t.current&&(t.current.close(),t.current=null)},[]),n=(0,ut.useCallback)((g,b)=>{Fe.getState().setExecution({status:g,error:b,progress:{...Fe.getState().progress,percentage:g==="completed"?100:Fe.getState().progress.percentage}})},[]),r=(0,ut.useCallback)((g,b)=>{let w;try{w=JSON.parse(b)}catch{return}let h=Fe.getState();switch(g){case"execution_start":{h.setExecution({status:"running",error:null,progress:{total:w.totalNodes??0,completed:0,running:0,pending:w.totalNodes??0,percentage:0}});break}case"node_start":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"running"),h.setExecution({progress:{...h.progress,running:h.progress.running+1,pending:Math.max(0,h.progress.pending-1)}}),ku(w.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"completed"),h.setExecution({progress:{...h.progress,completed:h.progress.completed+1,running:Math.max(0,h.progress.running-1),percentage:w.progress??h.progress.percentage}});let x=w.output??{},m={executionStatus:"completed",executionError:void 0};if(x.text&&(m.generatedContent=x.text),x.mediaAssets&&x.mediaAssets.length>0){let y=x.mediaAssets[0];m.mediaAssets=x.mediaAssets,y.type==="image"&&(m.mediaUrl=y.url),m.taskId=`exec-${w.executionId??""}`}ku(w.nodeId,m);break}case"node_error":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"error"),h.setExecution({progress:{...h.progress,running:Math.max(0,h.progress.running-1)}}),ku(w.nodeId,{executionStatus:"error",executionError:w.error??Ko("error.nodeExecutionFailed")});break}case"node_skipped":{if(!w.nodeId)break;h.setNodeStatus(w.nodeId,"skipped"),ku(w.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{h.setExecution({status:"paused"});break}case"execution_resumed":{h.setExecution({status:"running"});break}case"execution_complete":{n("completed",null),o();break}case"execution_error":{n("error",w.error??Ko("error.executionFailed")),o();break}case"execution_cancelled":{n("cancelled",null),o();break}default:break}},[n,o]),l=(0,ut.useCallback)(g=>{o();let b=a.current;if(!b)return;let w=new EventSource(xa.executionEvents(encodeURIComponent(b),encodeURIComponent(g)));t.current=w;let h=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let x of h)w.addEventListener(x,m=>{r(x,m.data)});w.onerror=()=>{let x=Fe.getState().status;h8.has(x)&&o()}},[o,r]),i=(0,ut.useCallback)(g=>{let b=Fe.getState();b.setExecution({executionId:g.id,status:g.status,error:g.error,progress:{total:g.progress.total,completed:g.progress.completed,running:g.progress.running,pending:g.progress.pending,percentage:g.progress.percentage}});for(let[w,h]of Object.entries(g.nodeStates??{})){b.setNodeStatus(w,h.status);let x={executionStatus:h.status};h.status==="error"&&h.error&&(x.executionError=h.error);let m=g.nodeOutputs?.[w];m&&(m.text&&(x.generatedContent=m.text),m.mediaAssets&&m.mediaAssets.length>0&&(x.mediaAssets=m.mediaAssets,m.mediaAssets[0]&&m.mediaAssets[0].type==="image"&&(x.mediaUrl=m.mediaAssets[0].url))),ku(w,x)}},[]),s=(0,ut.useCallback)(async(g={})=>{let b=a.current;if(!b)return;o(),Fe.getState().resetExecution(),Fe.getState().setExecution({status:"pending"});let w=await jL(b,{mode:g.mode??"full",nodeIds:g.nodeIds});if(!w.ok||!w.body.execution){Fe.getState().setExecution({status:"error",error:w.body.message??Ko("error.createExecutionFailed")});return}Fe.getState().setExecution({executionId:w.body.execution.id}),l(w.body.execution.id)},[o,l]),u=(0,ut.useCallback)(async g=>{let b=a.current,{executionId:w}=Fe.getState();if(!b||!w)return;let h=await $L(b,w,g);!h.ok&&h.body.message&&Fe.getState().setExecution({error:h.body.message})},[]),c=(0,ut.useCallback)(()=>u("pause"),[u]),f=(0,ut.useCallback)(()=>u("resume"),[u]),d=(0,ut.useCallback)(()=>u("cancel"),[u]),p=(0,ut.useCallback)(()=>{o(),Fe.getState().resetExecution()},[o]);return(0,ut.useEffect)(()=>{if(!e)return;let g=!1;return(async()=>{try{let b=await WL(e);if(g||!b.ok)return;let w=(b.body.executions??[]).find(x=>JL.has(x.status));if(!w)return;let h=await QL(e,w.id);if(g||!h.ok||!h.body.execution)return;i(h.body.execution),JL.has(h.body.execution.status)&&l(w.id)}catch{}})(),()=>{g=!0}},[e,i,l]),(0,ut.useEffect)(()=>(Fe.getState().setStartNodeExecution(b=>{s({mode:"subset",nodeIds:[b]})}),()=>{Fe.getState().setStartNodeExecution(null)}),[s]),(0,ut.useEffect)(()=>o,[o]),{startExecution:s,pause:c,resume:f,cancel:d,reset:p}}var qr=U(oe(),1);function t_(e={}){let t=e.workspaceId,[a,o]=(0,qr.useState)({phase:"loading"}),[n,r]=(0,qr.useState)(()=>_u()),l=he(c=>c.hydrateGraph),i=he(c=>c.resetStore),s=he(c=>c.nodes.length),u=(0,qr.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,qr.useEffect)(()=>{let c=!1;return o({phase:"loading"}),(async()=>{try{if(XL().then(g=>{!c&&g.ok&&(r(g.body),RL(g.body))}),t){let g=await Iu(t);if(c)return;if(g.ok&&g.body.workspace){l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace});return}let b=await Oh("\u5DE5\u4F5C\u6D41",t);if(c)return;if(!b.ok||!b.body.workspace)throw new Error(b.body.message??Ko("error.createWorkspaceFailed"));l(b.body.workspace.nodes,b.body.workspace.edges),o({phase:"ready",workspace:b.body.workspace});return}let f=await YL();if(c)return;let d=f.body.workspaces?.[0]?.id;if(!d){let g=await Oh("\u6211\u7684\u5DE5\u4F5C\u6D41");if(c)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??Ko("error.createWorkspaceFailed"));d=g.body.workspace.id}let p=await Iu(d);if(c)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??Ko("error.loadWorkspaceFailed"));l(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(f){c||o({phase:"error",message:f instanceof Error?f.message:String(f)})}})(),()=>{c=!0,u.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var Ve=U(oe(),1);function Tf(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function Bh(e){return e.map(t=>{let a=t,o=Tf(a.data);delete o.__catalog;let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=Tf(a.style)),n})}function Ph(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=Tf(a.data)),a.style&&typeof a.style=="object"&&(o.style=Tf(a.style)),o})}function Qo(e,t){return JSON.stringify({nodes:Bh(e),edges:Ph(t)})}var x8=1e3,y8=2500,b8=3e3;function fi(){let{nodes:e,edges:t}=he.getState(),a=Ch(e,t);return{nodes:a.nodes,edges:a.edges}}function a_(e,t={}){let a=t.enabled!==!1,[o,n]=(0,Ve.useState)("idle"),[r,l]=(0,Ve.useState)(!1),i=(0,Ve.useRef)(e),s=(0,Ve.useRef)(0),u=(0,Ve.useRef)(""),c=(0,Ve.useRef)(0),f=(0,Ve.useRef)(""),d=(0,Ve.useRef)(null),p=(0,Ve.useRef)(null),g=(0,Ve.useRef)(!1),b=(0,Ve.useRef)(a);b.current=a;let w=(0,Ve.useRef)(t.onSaved);w.current=t.onSaved,(0,Ve.useEffect)(()=>{i.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=Qo(e.nodes,e.edges),c.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,Ve.useCallback)(async(v,_,I=!1)=>{let N=i.current;if(!N||!I&&!b.current||g.current)return;let T=yf({lastSavedNodeCount:c.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:u.current,nextSignature:Qo(v.nodes,v.edges)});if(!T.persist||!T.snapshot)return;let{nodes:P,edges:B}=T.snapshot,L=N.name;g.current=!0,n("saving");try{let M=await KL(N.id,{name:L,nodes:Bh(P),edges:Ph(B),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,u.current=Qo(P,B),c.current=P.length,l(!1),n("saved"),h(),p.current=setTimeout(()=>{n(A=>A==="saved"?"idle":A)},y8),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,Ve.useEffect)(()=>{if(!a)return;let v=(I="autosave")=>{if(!i.current||!b.current)return;let T=fi(),B=Qo(T.nodes,T.edges)!==u.current;if(l(B),!B){d.current&&(clearTimeout(d.current),d.current=null),n(k=>k==="pending"?"idle":k);return}let L=vu(T.nodes.length,I);if(!vh({lastSavedNodeCount:c.current,nextNodeCount:T.nodes.length,cause:L})){d.current&&(clearTimeout(d.current),d.current=null),l(!1),n(k=>k==="pending"?"idle":k);return}n(k=>k==="saving"||k==="conflict"?k:"pending"),d.current&&clearTimeout(d.current);let M={nodes:T.nodes,edges:T.edges},A=L;d.current=setTimeout(()=>{d.current=null,x(M,A)},x8)},_=he.subscribe(()=>{v("autosave")});return()=>{_(),d.current&&(clearTimeout(d.current),d.current=null)}},[x,a]),(0,Ve.useEffect)(()=>{if(!a)return;let v=()=>{if(!b.current||!i.current)return;let I=fi(),N=vu(I.nodes.length,"flush"),T=yf({lastSavedNodeCount:c.current,nextNodes:I.nodes,nextEdges:I.edges,cause:N,lastSavedSignature:u.current,nextSignature:Qo(I.nodes,I.edges)});!T.persist||!T.snapshot||x(T.snapshot,N)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),h()}},[x,a]);let m=(0,Ve.useCallback)(async()=>{d.current&&(clearTimeout(d.current),d.current=null);let v=fi();await x(v,vu(v.nodes.length,"autosave"))},[x]),y=(0,Ve.useCallback)(()=>{if(d.current&&(clearTimeout(d.current),d.current=null),!i.current)return;let _=fi(),I="flush",N=yf({lastSavedNodeCount:c.current,nextNodes:_.nodes,nextEdges:_.edges,cause:I,lastSavedSignature:u.current,nextSignature:Qo(_.nodes,_.edges)});!N.persist||!N.snapshot||x(N.snapshot,I,!0)},[x]),C=(0,Ve.useCallback)(async()=>{let v=fi();await x(v,vu(v.nodes.length,"autosave"))},[x]),S=(0,Ve.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await Iu(v.id);if(!_.ok||!_.body.workspace){n("error");return}let I=_.body.workspace;s.current=I.version,u.current=Qo(I.nodes,I.edges),c.current=I.nodes.length,he.getState().hydrateGraph(I.nodes,I.edges),l(!1),n("idle"),w.current?.(I)},[]);return(0,Ve.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!b.current||typeof document<"u"&&document.visibilityState==="hidden")return;let N=i.current;if(!(!N||g.current)){v=!0;try{let T=await ZL(N.id);if(!T.ok||typeof T.body.version!="number"||T.body.version<=s.current)return;let P=fi();if(Qo(P.nodes,P.edges)!==u.current){s.current=T.body.version,n("conflict");return}await S()}catch{}finally{v=!1}}},I=setInterval(()=>{_()},b8);return()=>clearInterval(I)},[a,S]),{status:o,isDirty:r,saveNow:m,flushPendingSave:y,resolveConflict:C,reloadFromServer:S}}var Ft=U($(),1),w8=({locale:e,workspaceId:t})=>{let a=Se(),o=(0,pi.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=t_({workspaceId:t,beforeReset:()=>{o.current()}});(0,pi.useEffect)(()=>{BS(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=e_(i?i.id:null),u=(0,pi.useCallback)(f=>{r(d=>d.phase==="ready"?{phase:"ready",workspace:f}:d)},[r]),c=a_(i,{onSaved:u,enabled:n.phase==="ready"});return o.current=c.flushPendingSave,n.phase==="loading"?(0,Ft.jsx)("div",{className:"wf-canvas-root",children:(0,Ft.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Ft.jsx)("div",{className:"wf-canvas-root",children:(0,Ft.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Ft.jsx)("span",{children:n.message}),(0,Ft.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Ft.jsxs)("div",{className:"wf-canvas-root",children:[c.status==="conflict"?(0,Ft.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Ft.jsx)("span",{children:a("app.conflictBanner")}),(0,Ft.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{c.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Ft.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{c.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Ft.jsx)("main",{className:"wf-canvas-main",children:(0,Ft.jsx)(GL,{catalog:l,onExecuteNodeIds:f=>{s.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{s.startExecution({mode:"full"})},onPauseExecution:()=>{s.pause()},onResumeExecution:()=>{s.resume()},onCancelExecution:()=>{s.cancel()},onResetExecution:s.reset})})]})},Hh=w8;var o_=`/* this gets exported as style.css and can be used for the default theming */
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
`;var n_=`/**
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

`;var r_=`/**
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
  border-radius: 999px;
  background: var(--wb-surface-raised);
  border: 1px solid var(--wb-border);
  color: var(--wb-text-secondary);
  font-size: 11px;
  cursor: pointer;
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
}
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 5px;
  animation: wf-dropdown-in 0.15s ease-out;
  overflow: hidden;
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


`;var L8=[{id:"omnimux-workflow-xyflow-base",css:o_},{id:"omnimux-workflow-theme",css:n_},{id:"omnimux-workflow-components",css:r_}];function l_(){for(let{id:e,css:t}of L8){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Uh=U($(),1),Mu=new WeakMap;function _8(e,t){if(!e||Mu.has(e))return;l_();let a=(0,i_.createRoot)(e);Mu.set(e,{root:a,lastProps:t}),a.render((0,Uh.jsx)(Hh,{...t}))}function I8(e,t){let a=Mu.get(e);a&&(a.lastProps=t,a.root.render((0,Uh.jsx)(Hh,{...t})))}function k8(e){let t=Mu.get(e);t&&(t.root.unmount(),Mu.delete(e))}return hI(M8);})();
