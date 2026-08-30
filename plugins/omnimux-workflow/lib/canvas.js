var __omnimuxWorkflowCanvas=(()=>{var f3=Object.create;var Nd=Object.defineProperty;var p3=Object.getOwnPropertyDescriptor;var m3=Object.getOwnPropertyNames;var g3=Object.getPrototypeOf,h3=Object.prototype.hasOwnProperty;var b3=(e,t,a)=>t in e?Nd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var Ya=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},x3=(e,t)=>{for(var a in t)Nd(e,a,{get:t[a],enumerable:!0})},Nw=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of m3(t))!h3.call(e,n)&&n!==a&&Nd(e,n,{get:()=>t[n],enumerable:!(o=p3(t,n))||o.enumerable});return e};var I=(e,t,a)=>(a=e!=null?f3(g3(e)):{},Nw(t||!e||!e.__esModule?Nd(a,"default",{value:e,enumerable:!0}):a,e)),w3=e=>Nw(Nd({},"__esModule",{value:!0}),e);var Hg=(e,t,a)=>b3(e,typeof t!="symbol"?t+"":t,a);var Bw=Ya(bt=>{"use strict";function qg(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<sf(n,t))e[o]=t,e[a]=n,a=o;else break e}}function xn(e){return e.length===0?null:e[0]}function df(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,s=e[i],l=i+1,u=e[l];if(0>sf(s,a))l<n&&0>sf(u,s)?(e[o]=u,e[l]=a,o=l):(e[o]=s,e[i]=a,o=i);else if(l<n&&0>sf(u,a))e[o]=u,e[l]=a,o=l;else break e}}return t}function sf(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}bt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Ew=performance,bt.unstable_now=function(){return Ew.now()}):(Bg=Date,Tw=Bg.now(),bt.unstable_now=function(){return Bg.now()-Tw});var Ew,Bg,Tw,Gn=[],Er=[],y3=1,Ao=null,Sa=3,Vg=!1,Ed=!1,Td=!1,Gg=!1,Rw=typeof setTimeout=="function"?setTimeout:null,Pw=typeof clearTimeout=="function"?clearTimeout:null,Aw=typeof setImmediate<"u"?setImmediate:null;function lf(e){for(var t=xn(Er);t!==null;){if(t.callback===null)df(Er);else if(t.startTime<=e)df(Er),t.sortIndex=t.expirationTime,qg(Gn,t);else break;t=xn(Er)}}function jg(e){if(Td=!1,lf(e),!Ed)if(xn(Gn)!==null)Ed=!0,js||(js=!0,Gs());else{var t=xn(Er);t!==null&&Xg(jg,t.startTime-e)}}var js=!1,Ad=-1,zw=5,Ow=-1;function Hw(){return Gg?!0:!(bt.unstable_now()-Ow<zw)}function Fg(){if(Gg=!1,js){var e=bt.unstable_now();Ow=e;var t=!0;try{e:{Ed=!1,Td&&(Td=!1,Pw(Ad),Ad=-1),Vg=!0;var a=Sa;try{t:{for(lf(e),Ao=xn(Gn);Ao!==null&&!(Ao.expirationTime>e&&Hw());){var o=Ao.callback;if(typeof o=="function"){Ao.callback=null,Sa=Ao.priorityLevel;var n=o(Ao.expirationTime<=e);if(e=bt.unstable_now(),typeof n=="function"){Ao.callback=n,lf(e),t=!0;break t}Ao===xn(Gn)&&df(Gn),lf(e)}else df(Gn);Ao=xn(Gn)}if(Ao!==null)t=!0;else{var r=xn(Er);r!==null&&Xg(jg,r.startTime-e),t=!1}}break e}finally{Ao=null,Sa=a,Vg=!1}t=void 0}}finally{t?Gs():js=!1}}}var Gs;typeof Aw=="function"?Gs=function(){Aw(Fg)}:typeof MessageChannel<"u"?(Ug=new MessageChannel,Dw=Ug.port2,Ug.port1.onmessage=Fg,Gs=function(){Dw.postMessage(null)}):Gs=function(){Rw(Fg,0)};var Ug,Dw;function Xg(e,t){Ad=Rw(function(){e(bt.unstable_now())},t)}bt.unstable_IdlePriority=5;bt.unstable_ImmediatePriority=1;bt.unstable_LowPriority=4;bt.unstable_NormalPriority=3;bt.unstable_Profiling=null;bt.unstable_UserBlockingPriority=2;bt.unstable_cancelCallback=function(e){e.callback=null};bt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zw=0<e?Math.floor(1e3/e):5};bt.unstable_getCurrentPriorityLevel=function(){return Sa};bt.unstable_next=function(e){switch(Sa){case 1:case 2:case 3:var t=3;break;default:t=Sa}var a=Sa;Sa=t;try{return e()}finally{Sa=a}};bt.unstable_requestPaint=function(){Gg=!0};bt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Sa;Sa=e;try{return t()}finally{Sa=a}};bt.unstable_scheduleCallback=function(e,t,a){var o=bt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:y3++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,qg(Er,e),xn(Gn)===null&&e===xn(Er)&&(Td?(Pw(Ad),Ad=-1):Td=!0,Xg(jg,a-o))):(e.sortIndex=n,qg(Gn,e),Ed||Vg||(Ed=!0,js||(js=!0,Gs()))),e};bt.unstable_shouldYield=Hw;bt.unstable_wrapCallback=function(e){var t=Sa;return function(){var a=Sa;Sa=t;try{return e.apply(this,arguments)}finally{Sa=a}}}});var Uw=Ya((O7,Fw)=>{"use strict";Fw.exports=Bw()});var Qw=Ya(xe=>{"use strict";var Kg=Symbol.for("react.transitional.element"),v3=Symbol.for("react.portal"),C3=Symbol.for("react.fragment"),S3=Symbol.for("react.strict_mode"),k3=Symbol.for("react.profiler"),L3=Symbol.for("react.consumer"),_3=Symbol.for("react.context"),I3=Symbol.for("react.forward_ref"),M3=Symbol.for("react.suspense"),N3=Symbol.for("react.memo"),Xw=Symbol.for("react.lazy"),E3=Symbol.for("react.activity"),qw=Symbol.iterator;function T3(e){return e===null||typeof e!="object"?null:(e=qw&&e[qw]||e["@@iterator"],typeof e=="function"?e:null)}var Ww={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yw=Object.assign,Kw={};function Ws(e,t,a){this.props=e,this.context=t,this.refs=Kw,this.updater=a||Ww}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ws.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zw(){}Zw.prototype=Ws.prototype;function Zg(e,t,a){this.props=e,this.context=t,this.refs=Kw,this.updater=a||Ww}var $g=Zg.prototype=new Zw;$g.constructor=Zg;Yw($g,Ws.prototype);$g.isPureReactComponent=!0;var Vw=Array.isArray;function Yg(){}var lt={H:null,A:null,T:null,S:null},$w=Object.prototype.hasOwnProperty;function Qg(e,t,a){var o=a.ref;return{$$typeof:Kg,type:e,key:t,ref:o!==void 0?o:null,props:a}}function A3(e,t){return Qg(e.type,t,e.props)}function Jg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kg}function D3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Gw=/\/+/g;function Wg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?D3(""+e.key):t.toString(36)}function R3(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Yg,Yg):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Xs(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kg:case v3:i=!0;break;case Xw:return i=e._init,Xs(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+Wg(e,0):o,Vw(n)?(a="",i!=null&&(a=i.replace(Gw,"$&/")+"/"),Xs(n,t,a,"",function(u){return u})):n!=null&&(Jg(n)&&(n=A3(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Gw,"$&/")+"/")+i)),t.push(n)),1;i=0;var s=o===""?".":o+":";if(Vw(e))for(var l=0;l<e.length;l++)o=e[l],r=s+Wg(o,l),i+=Xs(o,t,a,r,n);else if(l=T3(e),typeof l=="function")for(e=l.call(e),l=0;!(o=e.next()).done;)o=o.value,r=s+Wg(o,l++),i+=Xs(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Xs(R3(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function uf(e,t,a){if(e==null)return e;var o=[],n=0;return Xs(e,o,"","",function(r){return t.call(a,r,n++)}),o}function P3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jw=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},z3={map:uf,forEach:function(e,t,a){uf(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return uf(e,function(){t++}),t},toArray:function(e){return uf(e,function(t){return t})||[]},only:function(e){if(!Jg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Activity=E3;xe.Children=z3;xe.Component=Ws;xe.Fragment=C3;xe.Profiler=k3;xe.PureComponent=Zg;xe.StrictMode=S3;xe.Suspense=M3;xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lt;xe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return lt.H.useMemoCache(e)}};xe.cache=function(e){return function(){return e.apply(null,arguments)}};xe.cacheSignal=function(){return null};xe.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=Yw({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!$w.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),s=0;s<r;s++)i[s]=arguments[s+2];o.children=i}return Qg(e.type,n,o)};xe.createContext=function(e){return e={$$typeof:_3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:L3,_context:e},e};xe.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)$w.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];n.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return Qg(e,r,n)};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:I3,render:e}};xe.isValidElement=Jg;xe.lazy=function(e){return{$$typeof:Xw,_payload:{_status:-1,_result:e},_init:P3}};xe.memo=function(e,t){return{$$typeof:N3,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=lt.T,a={};lt.T=a;try{var o=e(),n=lt.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Yg,jw)}catch(r){jw(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),lt.T=t}};xe.unstable_useCacheRefresh=function(){return lt.H.useCacheRefresh()};xe.use=function(e){return lt.H.use(e)};xe.useActionState=function(e,t,a){return lt.H.useActionState(e,t,a)};xe.useCallback=function(e,t){return lt.H.useCallback(e,t)};xe.useContext=function(e){return lt.H.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e,t){return lt.H.useDeferredValue(e,t)};xe.useEffect=function(e,t){return lt.H.useEffect(e,t)};xe.useEffectEvent=function(e){return lt.H.useEffectEvent(e)};xe.useId=function(){return lt.H.useId()};xe.useImperativeHandle=function(e,t,a){return lt.H.useImperativeHandle(e,t,a)};xe.useInsertionEffect=function(e,t){return lt.H.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return lt.H.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return lt.H.useMemo(e,t)};xe.useOptimistic=function(e,t){return lt.H.useOptimistic(e,t)};xe.useReducer=function(e,t,a){return lt.H.useReducer(e,t,a)};xe.useRef=function(e){return lt.H.useRef(e)};xe.useState=function(e){return lt.H.useState(e)};xe.useSyncExternalStore=function(e,t,a){return lt.H.useSyncExternalStore(e,t,a)};xe.useTransition=function(){return lt.H.useTransition()};xe.version="19.2.8"});var Q=Ya((B7,Jw)=>{"use strict";Jw.exports=Qw()});var ty=Ya(Ra=>{"use strict";var O3=Q();function ey(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Tr(){}var Da={d:{f:Tr,r:function(){throw Error(ey(522))},D:Tr,C:Tr,L:Tr,m:Tr,X:Tr,S:Tr,M:Tr},p:0,findDOMNode:null},H3=Symbol.for("react.portal");function B3(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H3,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Dd=O3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function cf(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Da;Ra.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ey(299));return B3(e,t,null,a)};Ra.flushSync=function(e){var t=Dd.T,a=Da.p;try{if(Dd.T=null,Da.p=2,e)return e()}finally{Dd.T=t,Da.p=a,Da.d.f()}};Ra.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Da.d.C(e,t))};Ra.prefetchDNS=function(e){typeof e=="string"&&Da.d.D(e)};Ra.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=cf(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Da.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Da.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ra.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=cf(t.as,t.crossOrigin);Da.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Da.d.M(e)};Ra.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=cf(a,t.crossOrigin);Da.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ra.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=cf(t.as,t.crossOrigin);Da.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Da.d.m(e)};Ra.requestFormReset=function(e){Da.d.r(e)};Ra.unstable_batchedUpdates=function(e,t){return e(t)};Ra.useFormState=function(e,t,a){return Dd.H.useFormState(e,t,a)};Ra.useFormStatus=function(){return Dd.H.useHostTransitionStatus()};Ra.version="19.2.8"});var ta=Ya((U7,oy)=>{"use strict";function ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ay)}catch(e){console.error(e)}}ay(),oy.exports=ty()});var gC=Ya(zp=>{"use strict";var Xt=Uw(),Nv=Q(),F3=ta();function W(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ev(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wu(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Tv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Av(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ny(e){if(wu(e)!==e)throw Error(W(188))}function U3(e){var t=e.alternate;if(!t){if(t=wu(e),t===null)throw Error(W(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return ny(n),e;if(r===o)return ny(n),t;r=r.sibling}throw Error(W(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,s=n.child;s;){if(s===a){i=!0,a=n,o=r;break}if(s===o){i=!0,o=n,a=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===a){i=!0,a=r,o=n;break}if(s===o){i=!0,o=r,a=n;break}s=s.sibling}if(!i)throw Error(W(189))}}if(a.alternate!==o)throw Error(W(190))}if(a.tag!==3)throw Error(W(188));return a.stateNode.current===a?e:t}function Dv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Dv(e),t!==null)return t;e=e.sibling}return null}var ct=Object.assign,q3=Symbol.for("react.element"),ff=Symbol.for("react.transitional.element"),Ud=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Pv=Symbol.for("react.consumer"),Qn=Symbol.for("react.context"),Mb=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),Nb=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),zh=Symbol.for("react.activity"),V3=Symbol.for("react.memo_cache_sentinel"),ry=Symbol.iterator;function Rd(e){return e===null||typeof e!="object"?null:(e=ry&&e[ry]||e["@@iterator"],typeof e=="function"?e:null)}var G3=Symbol.for("react.client.reference");function Oh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===G3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Js:return"Fragment";case Dh:return"Profiler";case Rv:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList";case zh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ud:return"Portal";case Qn:return e.displayName||"Context";case Pv:return(e._context.displayName||"Context")+".Consumer";case Mb:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nb:return t=e.displayName||null,t!==null?t:Oh(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return Oh(e(t))}catch{}}return null}var qd=Array.isArray,me=Nv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ge=F3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ri={pending:!1,data:null,method:null,action:null},Hh=[],el=-1;function Sn(e){return{current:e}}function na(e){0>el||(e.current=Hh[el],Hh[el]=null,el--)}function at(e,t){el++,Hh[el]=e.current,e.current=t}var Cn=Sn(null),ru=Sn(null),Vr=Sn(null),jf=Sn(null);function Xf(e,t){switch(at(Vr,t),at(ru,e),at(Cn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fv(t),e=tC(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}na(Cn),at(Cn,e)}function xl(){na(Cn),na(ru),na(Vr)}function Bh(e){e.memoizedState!==null&&at(jf,e);var t=Cn.current,a=tC(t,e.type);t!==a&&(at(ru,e),at(Cn,a))}function Wf(e){ru.current===e&&(na(Cn),na(ru)),jf.current===e&&(na(jf),hu._currentValue=Ri)}var eh,iy;function Ei(e){if(eh===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);eh=t&&t[1]||"",iy=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eh+e+iy}var th=!1;function ah(e,t){if(!e||th)return"";th=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],s=r[1];if(i&&s){var l=i.split(`
`),u=s.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===u.length)for(o=l.length-1,n=u.length-1;1<=o&&0<=n&&l[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==u[n]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{th=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ei(a):""}function j3(e,t){switch(e.tag){case 26:case 27:case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return e.child!==t&&t!==null?Ei("Suspense Fallback"):Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 15:return ah(e.type,!1);case 11:return ah(e.type.render,!1);case 1:return ah(e.type,!0);case 31:return Ei("Activity");default:return""}}function sy(e){try{var t="",a=null;do t+=j3(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fh=Object.prototype.hasOwnProperty,Eb=Xt.unstable_scheduleCallback,oh=Xt.unstable_cancelCallback,X3=Xt.unstable_shouldYield,W3=Xt.unstable_requestPaint,ho=Xt.unstable_now,Y3=Xt.unstable_getCurrentPriorityLevel,zv=Xt.unstable_ImmediatePriority,Ov=Xt.unstable_UserBlockingPriority,Yf=Xt.unstable_NormalPriority,K3=Xt.unstable_LowPriority,Hv=Xt.unstable_IdlePriority,Z3=Xt.log,$3=Xt.unstable_setDisableYieldValue,yu=null,bo=null;function Hr(e){if(typeof Z3=="function"&&$3(e),bo&&typeof bo.setStrictMode=="function")try{bo.setStrictMode(yu,e)}catch{}}var xo=Math.clz32?Math.clz32:e4,Q3=Math.log,J3=Math.LN2;function e4(e){return e>>>=0,e===0?32:31-(Q3(e)/J3|0)|0}var pf=256,mf=262144,gf=4194304;function Ti(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yp(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=o&134217727;return s!==0?(o=s&~r,o!==0?n=Ti(o):(i&=s,i!==0?n=Ti(i):a||(a=s&~e,a!==0&&(n=Ti(a))))):(s=o&~r,s!==0?n=Ti(s):i!==0?n=Ti(i):a||(a=o&~e,a!==0&&(n=Ti(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function vu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function t4(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(){var e=gf;return gf<<=1,(gf&62914560)===0&&(gf=4194304),e}function nh(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Cu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function a4(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-xo(a),f=1<<d;s[d]=0,l[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&Fv(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function Fv(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-xo(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Uv(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-xo(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function qv(e,t){var a=t&-t;return a=(a&42)!==0?1:Tb(a),(a&(e.suspendedLanes|t))!==0?0:a}function Tb(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ab(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vv(){var e=Ge.p;return e!==0?e:(e=window.event,e===void 0?32:fC(e.type))}function ly(e,t){var a=Ge.p;try{return Ge.p=e,t()}finally{Ge.p=a}}var ai=Math.random().toString(36).slice(2),fa="__reactFiber$"+ai,eo="__reactProps$"+ai,Nl="__reactContainer$"+ai,Uh="__reactEvents$"+ai,o4="__reactListeners$"+ai,n4="__reactHandles$"+ai,dy="__reactResources$"+ai,Su="__reactMarker$"+ai;function Db(e){delete e[fa],delete e[eo],delete e[Uh],delete e[o4],delete e[n4]}function tl(e){var t=e[fa];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Nl]||a[fa]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=bv(e);e!==null;){if(a=e[fa])return a;e=bv(e)}return t}e=a,a=e.parentNode}return null}function El(e){if(e=e[fa]||e[Nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(W(33))}function cl(e){var t=e[dy];return t||(t=e[dy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function oa(e){e[Su]=!0}var Gv=new Set,jv={};function Gi(e,t){wl(e,t),wl(e+"Capture",t)}function wl(e,t){for(jv[e]=t,e=0;e<t.length;e++)Gv.add(t[e])}var r4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uy={},cy={};function i4(e){return Fh.call(cy,e)?!0:Fh.call(uy,e)?!1:r4.test(e)?cy[e]=!0:(uy[e]=!0,!1)}function Ef(e,t,a){if(i4(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function hf(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function jn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ro(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s4(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qh(e){if(!e._valueTracker){var t=Xv(e)?"checked":"value";e._valueTracker=s4(e,t,""+e[t])}}function Wv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Xv(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Kf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var l4=/[\n"\\]/g;function Oo(e){return e.replace(l4,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vh(e,t,a,o,n,r,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ro(t)):e.value!==""+Ro(t)&&(e.value=""+Ro(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Gh(e,i,Ro(t)):a!=null?Gh(e,i,Ro(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ro(s):e.removeAttribute("name")}function Yv(e,t,a,o,n,r,i,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){qh(e);return}a=a!=null?""+Ro(a):"",t=t!=null?""+Ro(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=s?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),qh(e)}function Gh(e,t,a){t==="number"&&Kf(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ro(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Kv(e,t,a){if(t!=null&&(t=""+Ro(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ro(a):""}function Zv(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(W(92));if(qd(o)){if(1<o.length)throw Error(W(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ro(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qh(e)}function yl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var d4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fy(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||d4.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function $v(e,t,a){if(t!=null&&typeof t!="object")throw Error(W(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&fy(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&fy(e,r,t[r])}function Rb(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tf(e){return c4.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jn(){}var jh=null;function Pb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,pl=null;function py(e){var t=El(e);if(t&&(e=t.stateNode)){var a=e[eo]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vh(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oo(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[eo]||null;if(!n)throw Error(W(90));Vh(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Wv(o)}break e;case"textarea":Kv(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&fl(e,!!a.multiple,t,!1)}}}var rh=!1;function Qv(e,t,a){if(rh)return e(t,a);rh=!0;try{var o=e(t);return o}finally{if(rh=!1,(al!==null||pl!==null)&&(Ap(),al&&(t=al,e=pl,pl=al=null,py(t),e)))for(t=0;t<e.length;t++)py(e[t])}}function iu(e,t){var a=e.stateNode;if(a===null)return null;var o=a[eo]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(W(231,t,typeof a));return a}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xh=!1;if(nr)try{Ys={},Object.defineProperty(Ys,"passive",{get:function(){Xh=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Xh=!1}var Ys,Br=null,zb=null,Af=null;function Jv(){if(Af)return Af;var e,t=zb,a=t.length,o,n="value"in Br?Br.value:Br.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Af=n.slice(e,1<o?1-o:void 0)}function Df(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bf(){return!0}function my(){return!1}function to(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bf:my,this.isPropagationStopped=my,this}return ct(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bf)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bf)},persist:function(){},isPersistent:bf}),t}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=to(ji),ku=ct({},ji,{view:0,detail:0}),f4=to(ku),ih,sh,Pd,Cp=ct({},ku,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ob,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pd&&(Pd&&e.type==="mousemove"?(ih=e.screenX-Pd.screenX,sh=e.screenY-Pd.screenY):sh=ih=0,Pd=e),ih)},movementY:function(e){return"movementY"in e?e.movementY:sh}}),gy=to(Cp),p4=ct({},Cp,{dataTransfer:0}),m4=to(p4),g4=ct({},ku,{relatedTarget:0}),lh=to(g4),h4=ct({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),b4=to(h4),x4=ct({},ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w4=to(x4),y4=ct({},ji,{data:0}),hy=to(y4),v4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S4[e])?!!t[e]:!1}function Ob(){return k4}var L4=ct({},ku,{key:function(e){if(e.key){var t=v4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Df(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ob,charCode:function(e){return e.type==="keypress"?Df(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Df(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_4=to(L4),I4=ct({},Cp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),by=to(I4),M4=ct({},ku,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ob}),N4=to(M4),E4=ct({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),T4=to(E4),A4=ct({},Cp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D4=to(A4),R4=ct({},ji,{newState:0,oldState:0}),P4=to(R4),z4=[9,13,27,32],Hb=nr&&"CompositionEvent"in window,Xd=null;nr&&"documentMode"in document&&(Xd=document.documentMode);var O4=nr&&"TextEvent"in window&&!Xd,e1=nr&&(!Hb||Xd&&8<Xd&&11>=Xd),xy=" ",wy=!1;function t1(e,t){switch(e){case"keyup":return z4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function H4(e,t){switch(e){case"compositionend":return a1(t);case"keypress":return t.which!==32?null:(wy=!0,xy);case"textInput":return e=t.data,e===xy&&wy?null:e;default:return null}}function B4(e,t){if(ol)return e==="compositionend"||!Hb&&t1(e,t)?(e=Jv(),Af=zb=Br=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return e1&&t.locale!=="ko"?null:t.data;default:return null}}var F4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F4[e.type]:t==="textarea"}function o1(e,t,a,o){al?pl?pl.push(o):pl=[o]:al=o,t=pp(t,"onChange"),0<t.length&&(a=new vp("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Wd=null,su=null;function U4(e){Q2(e,0)}function Sp(e){var t=Vd(e);if(Wv(t))return e}function vy(e,t){if(e==="change")return t}var n1=!1;nr&&(nr?(wf="oninput"in document,wf||(dh=document.createElement("div"),dh.setAttribute("oninput","return;"),wf=typeof dh.oninput=="function"),xf=wf):xf=!1,n1=xf&&(!document.documentMode||9<document.documentMode));var xf,wf,dh;function Cy(){Wd&&(Wd.detachEvent("onpropertychange",r1),su=Wd=null)}function r1(e){if(e.propertyName==="value"&&Sp(su)){var t=[];o1(t,su,e,Pb(e)),Qv(U4,t)}}function q4(e,t,a){e==="focusin"?(Cy(),Wd=t,su=a,Wd.attachEvent("onpropertychange",r1)):e==="focusout"&&Cy()}function V4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sp(su)}function G4(e,t){if(e==="click")return Sp(t)}function j4(e,t){if(e==="input"||e==="change")return Sp(t)}function X4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yo=typeof Object.is=="function"?Object.is:X4;function lu(e,t){if(yo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Fh.call(t,n)||!yo(e[n],t[n]))return!1}return!0}function Sy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ky(e,t){var a=Sy(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sy(a)}}function i1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?i1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kf(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kf(e.document)}return t}function Bb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var W4=nr&&"documentMode"in document&&11>=document.documentMode,nl=null,Wh=null,Yd=null,Yh=!1;function Ly(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yh||nl==null||nl!==Kf(o)||(o=nl,"selectionStart"in o&&Bb(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yd&&lu(Yd,o)||(Yd=o,o=pp(Wh,"onSelect"),0<o.length&&(t=new vp("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=nl)))}function Ni(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var rl={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionrun:Ni("Transition","TransitionRun"),transitionstart:Ni("Transition","TransitionStart"),transitioncancel:Ni("Transition","TransitionCancel"),transitionend:Ni("Transition","TransitionEnd")},uh={},l1={};nr&&(l1=document.createElement("div").style,"AnimationEvent"in window||(delete rl.animationend.animation,delete rl.animationiteration.animation,delete rl.animationstart.animation),"TransitionEvent"in window||delete rl.transitionend.transition);function Xi(e){if(uh[e])return uh[e];if(!rl[e])return e;var t=rl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in l1)return uh[e]=t[a];return e}var d1=Xi("animationend"),u1=Xi("animationiteration"),c1=Xi("animationstart"),Y4=Xi("transitionrun"),K4=Xi("transitionstart"),Z4=Xi("transitioncancel"),f1=Xi("transitionend"),p1=new Map,Kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kh.push("scrollEnd");function $o(e,t){p1.set(e,t),Gi(t,[e])}var Zf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Do=[],il=0,Fb=0;function kp(){for(var e=il,t=Fb=il=0;t<e;){var a=Do[t];Do[t++]=null;var o=Do[t];Do[t++]=null;var n=Do[t];Do[t++]=null;var r=Do[t];if(Do[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&m1(a,n,r)}}function Lp(e,t,a,o){Do[il++]=e,Do[il++]=t,Do[il++]=a,Do[il++]=o,Fb|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ub(e,t,a,o){return Lp(e,t,a,o),$f(e)}function Wi(e,t){return Lp(e,null,null,t),$f(e)}function m1(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-xo(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function $f(e){if(50<ou)throw ou=0,hb=null,Error(W(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function $4(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mo(e,t,a,o){return new $4(e,t,a,o)}function qb(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tr(e,t){var a=e.alternate;return a===null?(a=mo(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function g1(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Rf(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")qb(e)&&(i=1);else if(typeof e=="string")i=eT(e,a,Cn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case zh:return e=mo(31,a,t,n),e.elementType=zh,e.lanes=r,e;case Js:return Pi(a.children,n,r,t);case Rv:i=8,n|=24;break;case Dh:return e=mo(12,a,t,n|2),e.elementType=Dh,e.lanes=r,e;case Rh:return e=mo(13,a,t,n),e.elementType=Rh,e.lanes=r,e;case Ph:return e=mo(19,a,t,n),e.elementType=Ph,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qn:i=10;break e;case Pv:i=9;break e;case Mb:i=11;break e;case Nb:i=14;break e;case Ar:i=16,o=null;break e}i=29,a=Error(W(130,e===null?"null":typeof e,"")),o=null}return t=mo(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Pi(e,t,a,o){return e=mo(7,e,o,t),e.lanes=a,e}function ch(e,t,a){return e=mo(6,e,null,t),e.lanes=a,e}function h1(e){var t=mo(18,null,null,0);return t.stateNode=e,t}function fh(e,t,a){return t=mo(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _y=new WeakMap;function Ho(e,t){if(typeof e=="object"&&e!==null){var a=_y.get(e);return a!==void 0?a:(t={value:e,source:t,stack:sy(t)},_y.set(e,t),t)}return{value:e,source:t,stack:sy(t)}}var ll=[],dl=0,Qf=null,du=0,Po=[],zo=0,Qr=null,wn=1,yn="";function Zn(e,t){ll[dl++]=du,ll[dl++]=Qf,Qf=e,du=t}function b1(e,t,a){Po[zo++]=wn,Po[zo++]=yn,Po[zo++]=Qr,Qr=e;var o=wn;e=yn;var n=32-xo(o)-1;o&=~(1<<n),a+=1;var r=32-xo(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,wn=1<<32-xo(t)+n|a<<n|o,yn=r+e}else wn=1<<r|a<<n|o,yn=e}function Vb(e){e.return!==null&&(Zn(e,1),b1(e,1,0))}function Gb(e){for(;e===Qf;)Qf=ll[--dl],ll[dl]=null,du=ll[--dl],ll[dl]=null;for(;e===Qr;)Qr=Po[--zo],Po[zo]=null,yn=Po[--zo],Po[zo]=null,wn=Po[--zo],Po[zo]=null}function x1(e,t){Po[zo++]=wn,Po[zo++]=yn,Po[zo++]=Qr,wn=t.id,yn=t.overflow,Qr=e}var pa=null,ut=null,Pe=!1,Gr=null,Bo=!1,Zh=Error(W(519));function Jr(e){var t=Error(W(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uu(Ho(t,e)),Zh}function Iy(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[fa]=e,t[eo]=o,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<mu.length;a++)Ee(mu[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),Yv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Zv(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||eC(t.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),o.onScroll!=null&&Ee("scroll",t),o.onScrollEnd!=null&&Ee("scrollend",t),o.onClick!=null&&(t.onclick=Jn),t=!0):t=!1,t||Jr(e,!0)}function My(e){for(pa=e.return;pa;)switch(pa.tag){case 5:case 31:case 13:Bo=!1;return;case 27:case 3:Bo=!0;return;default:pa=pa.return}}function Ks(e){if(e!==pa)return!1;if(!Pe)return My(e),Pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vb(e.type,e.memoizedProps)),a=!a),a&&ut&&Jr(e),My(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));ut=hv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));ut=hv(e)}else t===27?(t=ut,oi(e.type)?(e=Lb,Lb=null,ut=e):ut=t):ut=pa?Uo(e.stateNode.nextSibling):null;return!0}function Bi(){ut=pa=null,Pe=!1}function ph(){var e=Gr;return e!==null&&(Qa===null?Qa=e:Qa.push.apply(Qa,e),Gr=null),e}function uu(e){Gr===null?Gr=[e]:Gr.push(e)}var $h=Sn(null),Yi=null,er=null;function Rr(e,t,a){at($h,t._currentValue),t._currentValue=a}function ar(e){e._currentValue=$h.current,na($h)}function Qh(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Jh(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=n;for(var l=0;l<t.length;l++)if(s.context===t[l]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Qh(r.return,a,e),o||(i=null);break e}r=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(W(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Qh(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Tl(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(W(387));if(i=i.memoizedProps,i!==null){var s=n.type;yo(n.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(n===jf.current){if(i=n.alternate,i===null)throw Error(W(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hu):e=[hu])}n=n.return}e!==null&&Jh(t,e,a,o),t.flags|=262144}function Jf(e){for(e=e.firstContext;e!==null;){if(!yo(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fi(e){Yi=e,er=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ma(e){return w1(Yi,e)}function yf(e,t){return Yi===null&&Fi(e),w1(e,t)}function w1(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},er===null){if(e===null)throw Error(W(308));er=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else er=er.next=t;return a}var Q4=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},J4=Xt.unstable_scheduleCallback,eE=Xt.unstable_NormalPriority,Ht={$$typeof:Qn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jb(){return{controller:new Q4,data:new Map,refCount:0}}function Lu(e){e.refCount--,e.refCount===0&&J4(eE,function(){e.controller.abort()})}var Kd=null,eb=0,vl=0,ml=null;function tE(e,t){if(Kd===null){var a=Kd=[];eb=0,vl=hx(),ml={status:"pending",value:void 0,then:function(o){a.push(o)}}}return eb++,t.then(Ny,Ny),t}function Ny(){if(--eb===0&&Kd!==null){ml!==null&&(ml.status="fulfilled");var e=Kd;Kd=null,vl=0,ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function aE(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Ey=me.S;me.S=function(e,t){D2=ho(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&tE(e,t),Ey!==null&&Ey(e,t)};var zi=Sn(null);function Xb(){var e=zi.current;return e!==null?e:Qe.pooledCache}function Pf(e,t){t===null?at(zi,zi.current):at(zi,t.pool)}function y1(){var e=Xb();return e===null?null:{parent:Ht._currentValue,pool:e}}var Al=Error(W(460)),Wb=Error(W(474)),_p=Error(W(542)),ep={then:function(){}};function Ty(e){return e=e.status,e==="fulfilled"||e==="rejected"}function v1(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Jn,Jn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dy(e),e;default:if(typeof t.status=="string")t.then(Jn,Jn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(W(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dy(e),e}throw Oi=t,Al}}function Ai(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Oi=a,Al):a}}var Oi=null;function Ay(){if(Oi===null)throw Error(W(459));var e=Oi;return Oi=null,e}function Dy(e){if(e===Al||e===_p)throw Error(W(483))}var gl=null,cu=0;function vf(e){var t=cu;return cu+=1,gl===null&&(gl=[]),v1(gl,e,t)}function zd(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cf(e,t){throw t.$$typeof===q3?Error(W(525)):(e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function C1(e){function t(h,b){if(e){var m=h.deletions;m===null?(h.deletions=[b],h.flags|=16):m.push(b)}}function a(h,b){if(!e)return null;for(;b!==null;)t(h,b),b=b.sibling;return null}function o(h){for(var b=new Map;h!==null;)h.key!==null?b.set(h.key,h):b.set(h.index,h),h=h.sibling;return b}function n(h,b){return h=tr(h,b),h.index=0,h.sibling=null,h}function r(h,b,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<b?(h.flags|=67108866,b):m):(h.flags|=67108866,b)):(h.flags|=1048576,b)}function i(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function s(h,b,m,x){return b===null||b.tag!==6?(b=ch(m,h.mode,x),b.return=h,b):(b=n(b,m),b.return=h,b)}function l(h,b,m,x){var v=m.type;return v===Js?d(h,b,m.props.children,x,m.key):b!==null&&(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ar&&Ai(v)===b.type)?(b=n(b,m.props),zd(b,m),b.return=h,b):(b=Rf(m.type,m.key,m.props,null,h.mode,x),zd(b,m),b.return=h,b)}function u(h,b,m,x){return b===null||b.tag!==4||b.stateNode.containerInfo!==m.containerInfo||b.stateNode.implementation!==m.implementation?(b=fh(m,h.mode,x),b.return=h,b):(b=n(b,m.children||[]),b.return=h,b)}function d(h,b,m,x,v){return b===null||b.tag!==7?(b=Pi(m,h.mode,x,v),b.return=h,b):(b=n(b,m),b.return=h,b)}function f(h,b,m){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=ch(""+b,h.mode,m),b.return=h,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ff:return m=Rf(b.type,b.key,b.props,null,h.mode,m),zd(m,b),m.return=h,m;case Ud:return b=fh(b,h.mode,m),b.return=h,b;case Ar:return b=Ai(b),f(h,b,m)}if(qd(b)||Rd(b))return b=Pi(b,h.mode,m,null),b.return=h,b;if(typeof b.then=="function")return f(h,vf(b),m);if(b.$$typeof===Qn)return f(h,yf(h,b),m);Cf(h,b)}return null}function c(h,b,m,x){var v=b!==null?b.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return v!==null?null:s(h,b,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ff:return m.key===v?l(h,b,m,x):null;case Ud:return m.key===v?u(h,b,m,x):null;case Ar:return m=Ai(m),c(h,b,m,x)}if(qd(m)||Rd(m))return v!==null?null:d(h,b,m,x,null);if(typeof m.then=="function")return c(h,b,vf(m),x);if(m.$$typeof===Qn)return c(h,b,yf(h,m),x);Cf(h,m)}return null}function p(h,b,m,x,v){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(m)||null,s(b,h,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ff:return h=h.get(x.key===null?m:x.key)||null,l(b,h,x,v);case Ud:return h=h.get(x.key===null?m:x.key)||null,u(b,h,x,v);case Ar:return x=Ai(x),p(h,b,m,x,v)}if(qd(x)||Rd(x))return h=h.get(m)||null,d(b,h,x,v,null);if(typeof x.then=="function")return p(h,b,m,vf(x),v);if(x.$$typeof===Qn)return p(h,b,m,yf(b,x),v);Cf(b,x)}return null}function g(h,b,m,x){for(var v=null,C=null,S=b,k=b=0,_=null;S!==null&&k<m.length;k++){S.index>k?(_=S,S=null):_=S.sibling;var T=c(h,S,m[k],x);if(T===null){S===null&&(S=_);break}e&&S&&T.alternate===null&&t(h,S),b=r(T,b,k),C===null?v=T:C.sibling=T,C=T,S=_}if(k===m.length)return a(h,S),Pe&&Zn(h,k),v;if(S===null){for(;k<m.length;k++)S=f(h,m[k],x),S!==null&&(b=r(S,b,k),C===null?v=S:C.sibling=S,C=S);return Pe&&Zn(h,k),v}for(S=o(S);k<m.length;k++)_=p(S,h,k,m[k],x),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?k:_.key),b=r(_,b,k),C===null?v=_:C.sibling=_,C=_);return e&&S.forEach(function(R){return t(h,R)}),Pe&&Zn(h,k),v}function w(h,b,m,x){if(m==null)throw Error(W(151));for(var v=null,C=null,S=b,k=b=0,_=null,T=m.next();S!==null&&!T.done;k++,T=m.next()){S.index>k?(_=S,S=null):_=S.sibling;var R=c(h,S,T.value,x);if(R===null){S===null&&(S=_);break}e&&S&&R.alternate===null&&t(h,S),b=r(R,b,k),C===null?v=R:C.sibling=R,C=R,S=_}if(T.done)return a(h,S),Pe&&Zn(h,k),v;if(S===null){for(;!T.done;k++,T=m.next())T=f(h,T.value,x),T!==null&&(b=r(T,b,k),C===null?v=T:C.sibling=T,C=T);return Pe&&Zn(h,k),v}for(S=o(S);!T.done;k++,T=m.next())T=p(S,h,k,T.value,x),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?k:T.key),b=r(T,b,k),C===null?v=T:C.sibling=T,C=T);return e&&S.forEach(function(H){return t(h,H)}),Pe&&Zn(h,k),v}function y(h,b,m,x){if(typeof m=="object"&&m!==null&&m.type===Js&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ff:e:{for(var v=m.key;b!==null;){if(b.key===v){if(v=m.type,v===Js){if(b.tag===7){a(h,b.sibling),x=n(b,m.props.children),x.return=h,h=x;break e}}else if(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ar&&Ai(v)===b.type){a(h,b.sibling),x=n(b,m.props),zd(x,m),x.return=h,h=x;break e}a(h,b);break}else t(h,b);b=b.sibling}m.type===Js?(x=Pi(m.props.children,h.mode,x,m.key),x.return=h,h=x):(x=Rf(m.type,m.key,m.props,null,h.mode,x),zd(x,m),x.return=h,h=x)}return i(h);case Ud:e:{for(v=m.key;b!==null;){if(b.key===v)if(b.tag===4&&b.stateNode.containerInfo===m.containerInfo&&b.stateNode.implementation===m.implementation){a(h,b.sibling),x=n(b,m.children||[]),x.return=h,h=x;break e}else{a(h,b);break}else t(h,b);b=b.sibling}x=fh(m,h.mode,x),x.return=h,h=x}return i(h);case Ar:return m=Ai(m),y(h,b,m,x)}if(qd(m))return g(h,b,m,x);if(Rd(m)){if(v=Rd(m),typeof v!="function")throw Error(W(150));return m=v.call(m),w(h,b,m,x)}if(typeof m.then=="function")return y(h,b,vf(m),x);if(m.$$typeof===Qn)return y(h,b,yf(h,m),x);Cf(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,b!==null&&b.tag===6?(a(h,b.sibling),x=n(b,m),x.return=h,h=x):(a(h,b),x=ch(m,h.mode,x),x.return=h,h=x),i(h)):a(h,b)}return function(h,b,m,x){try{cu=0;var v=y(h,b,m,x);return gl=null,v}catch(S){if(S===Al||S===_p)throw S;var C=mo(29,S,null,h.mode);return C.lanes=x,C.return=h,C}}}var Ui=C1(!0),S1=C1(!1),Dr=!1;function Yb(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=$f(e),m1(e,null,a),t}return Lp(e,o,t,a),$f(e)}function Zd(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Uv(e,a)}}function mh(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ab=!1;function $d(){if(ab){var e=ml;if(e!==null)throw e}}function Qd(e,t,a,o){ab=!1;var n=e.updateQueue;Dr=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?r=u:i.next=u,i=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(r!==null){var f=n.baseState;i=0,d=u=l=null,s=r;do{var c=s.lane&-536870913,p=c!==s.lane;if(p?(Re&c)===c:(o&c)===c){c!==0&&c===vl&&(ab=!0),d!==null&&(d=d.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var g=e,w=s;c=t;var y=a;switch(w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(y,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,c=typeof g=="function"?g.call(y,f,c):g,c==null)break e;f=ct({},f,c);break e;case 2:Dr=!0}}c=s.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,i|=c;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;p=s,s=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),ti|=i,e.lanes=i,e.memoizedState=f}}function k1(e,t){if(typeof e!="function")throw Error(W(191,e));e.call(t)}function L1(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)k1(a[e],t)}var Cl=Sn(null),tp=Sn(0);function Ry(e,t){e=lr,at(tp,e),at(Cl,t),lr=e|t.baseLanes}function ob(){at(tp,lr),at(Cl,Cl.current)}function Kb(){lr=tp.current,na(Cl),na(tp)}var vo=Sn(null),Fo=null;function Pr(e){var t=e.alternate;at(At,At.current&1),at(vo,e),Fo===null&&(t===null||Cl.current!==null||t.memoizedState!==null)&&(Fo=e)}function nb(e){at(At,At.current),at(vo,e),Fo===null&&(Fo=e)}function _1(e){e.tag===22?(at(At,At.current),at(vo,e),Fo===null&&(Fo=e)):zr(e)}function zr(){at(At,At.current),at(vo,vo.current)}function po(e){na(vo),Fo===e&&(Fo=null),na(At)}var At=Sn(0);function ap(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sb(a)||kb(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rr=0,ye=null,$e=null,zt=null,op=!1,hl=!1,qi=!1,np=0,fu=0,bl=null,oE=0;function Lt(){throw Error(W(321))}function Zb(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yo(e[a],t[a]))return!1;return!0}function $b(e,t,a,o,n,r){return rr=r,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,me.H=e===null||e.memoizedState===null?o2:lx,qi=!1,r=a(o,n),qi=!1,hl&&(r=M1(t,a,o,n)),I1(e),r}function I1(e){me.H=pu;var t=$e!==null&&$e.next!==null;if(rr=0,zt=$e=ye=null,op=!1,fu=0,bl=null,t)throw Error(W(300));e===null||Bt||(e=e.dependencies,e!==null&&Jf(e)&&(Bt=!0))}function M1(e,t,a,o){ye=e;var n=0;do{if(hl&&(bl=null),fu=0,hl=!1,25<=n)throw Error(W(301));if(n+=1,zt=$e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}me.H=n2,r=t(a,o)}while(hl);return r}function nE(){var e=me.H,t=e.useState()[0];return t=typeof t.then=="function"?_u(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(ye.flags|=1024),t}function Qb(){var e=np!==0;return np=0,e}function Jb(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ex(e){if(op){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}op=!1}rr=0,zt=$e=ye=null,hl=!1,fu=np=0,bl=null}function Pa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ye.memoizedState=zt=e:zt=zt.next=e,zt}function Dt(){if($e===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=zt===null?ye.memoizedState:zt.next;if(t!==null)zt=t,$e=e;else{if(e===null)throw ye.alternate===null?Error(W(467)):Error(W(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},zt===null?ye.memoizedState=zt=e:zt=zt.next=e}return zt}function Ip(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _u(e){var t=fu;return fu+=1,bl===null&&(bl=[]),e=v1(bl,e,t),t=ye,(zt===null?t.memoizedState:zt.next)===null&&(t=t.alternate,me.H=t===null||t.memoizedState===null?o2:lx),e}function Mp(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _u(e);if(e.$$typeof===Qn)return ma(e)}throw Error(W(438,String(e)))}function tx(e){var t=null,a=ye.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ip(),ye.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=V3;return t.index++,a}function ir(e,t){return typeof t=="function"?t(e):t}function zf(e){var t=Dt();return ax(t,$e,e)}function ax(e,t,a){var o=e.queue;if(o===null)throw Error(W(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var s=i=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Re&f)===f:(rr&f)===f){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===vl&&(d=!0);else if((rr&c)===c){u=u.next,c===vl&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=f,i=r):l=l.next=f,ye.lanes|=c,ti|=c;f=u.action,qi&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=c,i=r):l=l.next=c,ye.lanes|=f,ti|=f;u=u.next}while(u!==null&&u!==t);if(l===null?i=r:l.next=s,!yo(r,e.memoizedState)&&(Bt=!0,d&&(a=ml,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function gh(e){var t=Dt(),a=t.queue;if(a===null)throw Error(W(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);yo(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function N1(e,t,a){var o=ye,n=Dt(),r=Pe;if(r){if(a===void 0)throw Error(W(407));a=a()}else a=t();var i=!yo(($e||n).memoizedState,a);if(i&&(n.memoizedState=a,Bt=!0),n=n.queue,ox(A1.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||zt!==null&&zt.memoizedState.tag&1){if(o.flags|=2048,Sl(9,{destroy:void 0},T1.bind(null,o,n,a,t),null),Qe===null)throw Error(W(349));r||(rr&127)!==0||E1(o,t,a)}return a}function E1(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ye.updateQueue,t===null?(t=Ip(),ye.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function T1(e,t,a,o){t.value=a,t.getSnapshot=o,D1(t)&&R1(e)}function A1(e,t,a){return a(function(){D1(t)&&R1(e)})}function D1(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yo(e,a)}catch{return!0}}function R1(e){var t=Wi(e,2);t!==null&&Ja(t,e,2)}function rb(e){var t=Pa();if(typeof e=="function"){var a=e;if(e=a(),qi){Hr(!0);try{a()}finally{Hr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t}function P1(e,t,a,o){return e.baseState=a,ax(e,$e,typeof o=="function"?o:ir)}function rE(e,t,a,o,n){if(Ep(e))throw Error(W(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};me.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,z1(t,r)):(r.next=a.next,t.pending=a.next=r)}}function z1(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=me.T,i={};me.T=i;try{var s=a(n,o),l=me.S;l!==null&&l(i,s),Py(e,t,s)}catch(u){ib(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),me.T=r}}else try{r=a(n,o),Py(e,t,r)}catch(u){ib(e,t,u)}}function Py(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zy(e,t,o)},function(o){return ib(e,t,o)}):zy(e,t,a)}function zy(e,t,a){t.status="fulfilled",t.value=a,O1(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,z1(e,a)))}function ib(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,O1(t),t=t.next;while(t!==o)}e.action=null}function O1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function H1(e,t){return t}function Oy(e,t){if(Pe){var a=Qe.formState;if(a!==null){e:{var o=ye;if(Pe){if(ut){t:{for(var n=ut,r=Bo;n.nodeType!==8;){if(!r){n=null;break t}if(n=Uo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ut=Uo(n.nextSibling),o=n.data==="F!";break e}}Jr(o)}o=!1}o&&(t=a[0])}}return a=Pa(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H1,lastRenderedState:t},a.queue=o,a=e2.bind(null,ye,o),o.dispatch=a,o=rb(!1),r=sx.bind(null,ye,!1,o.queue),o=Pa(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=rE.bind(null,ye,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function Hy(e){var t=Dt();return B1(t,$e,e)}function B1(e,t,a){if(t=ax(e,t,H1)[0],e=zf(ir)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=_u(t)}catch(i){throw i===Al?_p:i}else o=t;t=Dt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ye.flags|=2048,Sl(9,{destroy:void 0},iE.bind(null,n,a),null)),[o,r,e]}function iE(e,t){e.action=t}function By(e){var t=Dt(),a=$e;if(a!==null)return B1(t,a,e);Dt(),t=t.memoizedState,a=Dt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Sl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ye.updateQueue,t===null&&(t=Ip(),ye.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function F1(){return Dt().memoizedState}function Of(e,t,a,o){var n=Pa();ye.flags|=e,n.memoizedState=Sl(1|t,{destroy:void 0},a,o===void 0?null:o)}function Np(e,t,a,o){var n=Dt();o=o===void 0?null:o;var r=n.memoizedState.inst;$e!==null&&o!==null&&Zb(o,$e.memoizedState.deps)?n.memoizedState=Sl(t,r,a,o):(ye.flags|=e,n.memoizedState=Sl(1|t,r,a,o))}function Fy(e,t){Of(8390656,8,e,t)}function ox(e,t){Np(2048,8,e,t)}function sE(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=Ip(),ye.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function U1(e){var t=Dt().memoizedState;return sE({ref:t,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(W(440));return t.impl.apply(void 0,arguments)}}function q1(e,t){return Np(4,2,e,t)}function V1(e,t){return Np(4,4,e,t)}function G1(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j1(e,t,a){a=a!=null?a.concat([e]):null,Np(4,4,G1.bind(null,t,e),a)}function nx(){}function X1(e,t){var a=Dt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Zb(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function W1(e,t){var a=Dt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Zb(t,o[1]))return o[0];if(o=e(),qi){Hr(!0);try{e()}finally{Hr(!1)}}return a.memoizedState=[o,t],o}function rx(e,t,a){return a===void 0||(rr&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=P2(),ye.lanes|=e,ti|=e,a)}function Y1(e,t,a,o){return yo(a,t)?a:Cl.current!==null?(e=rx(e,a,o),yo(e,t)||(Bt=!0),e):(rr&42)===0||(rr&1073741824)!==0&&(Re&261930)===0?(Bt=!0,e.memoizedState=a):(e=P2(),ye.lanes|=e,ti|=e,t)}function K1(e,t,a,o,n){var r=Ge.p;Ge.p=r!==0&&8>r?r:8;var i=me.T,s={};me.T=s,sx(e,!1,t,a);try{var l=n(),u=me.S;if(u!==null&&u(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=aE(l,o);Jd(e,t,d,wo(e))}else Jd(e,t,o,wo(e))}catch(f){Jd(e,t,{then:function(){},status:"rejected",reason:f},wo())}finally{Ge.p=r,i!==null&&s.types!==null&&(i.types=s.types),me.T=i}}function lE(){}function sb(e,t,a,o){if(e.tag!==5)throw Error(W(476));var n=Z1(e).queue;K1(e,n,t,Ri,a===null?lE:function(){return $1(e),a(o)})}function Z1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ri,baseState:Ri,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:Ri},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $1(e){var t=Z1(e);t.next===null&&(t=e.alternate.memoizedState),Jd(e,t.next.queue,{},wo())}function ix(){return ma(hu)}function Q1(){return Dt().memoizedState}function J1(){return Dt().memoizedState}function dE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wo();e=jr(a);var o=Xr(t,e,a);o!==null&&(Ja(o,t,a),Zd(o,t,a)),t={cache:jb()},e.payload=t;return}t=t.return}}function uE(e,t,a){var o=wo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ep(e)?t2(t,a):(a=Ub(e,t,a,o),a!==null&&(Ja(a,e,o),a2(a,t,o)))}function e2(e,t,a){var o=wo();Jd(e,t,a,o)}function Jd(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ep(e))t2(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,s=r(i,a);if(n.hasEagerState=!0,n.eagerState=s,yo(s,i))return Lp(e,t,n,0),Qe===null&&kp(),!1}catch{}if(a=Ub(e,t,n,o),a!==null)return Ja(a,e,o),a2(a,t,o),!0}return!1}function sx(e,t,a,o){if(o={lane:2,revertLane:hx(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ep(e)){if(t)throw Error(W(479))}else t=Ub(e,a,o,2),t!==null&&Ja(t,e,2)}function Ep(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function t2(e,t){hl=op=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function a2(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Uv(e,a)}}var pu={readContext:ma,use:Mp,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt};pu.useEffectEvent=Lt;var o2={readContext:ma,use:Mp,useCallback:function(e,t){return Pa().memoizedState=[e,t===void 0?null:t],e},useContext:ma,useEffect:Fy,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Of(4194308,4,G1.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Of(4194308,4,e,t)},useInsertionEffect:function(e,t){Of(4,2,e,t)},useMemo:function(e,t){var a=Pa();t=t===void 0?null:t;var o=e();if(qi){Hr(!0);try{e()}finally{Hr(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Pa();if(a!==void 0){var n=a(t);if(qi){Hr(!0);try{a(t)}finally{Hr(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=uE.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var t=Pa();return e={current:e},t.memoizedState=e},useState:function(e){e=rb(e);var t=e.queue,a=e2.bind(null,ye,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:nx,useDeferredValue:function(e,t){var a=Pa();return rx(a,e,t)},useTransition:function(){var e=rb(!1);return e=K1.bind(null,ye,e.queue,!0,!1),Pa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ye,n=Pa();if(Pe){if(a===void 0)throw Error(W(407));a=a()}else{if(a=t(),Qe===null)throw Error(W(349));(Re&127)!==0||E1(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,Fy(A1.bind(null,o,r,e),[e]),o.flags|=2048,Sl(9,{destroy:void 0},T1.bind(null,o,r,a,t),null),a},useId:function(){var e=Pa(),t=Qe.identifierPrefix;if(Pe){var a=yn,o=wn;a=(o&~(1<<32-xo(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=np++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=oE++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ix,useFormState:Oy,useActionState:Oy,useOptimistic:function(e){var t=Pa();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=sx.bind(null,ye,!0,a),a.dispatch=t,[e,t]},useMemoCache:tx,useCacheRefresh:function(){return Pa().memoizedState=dE.bind(null,ye)},useEffectEvent:function(e){var t=Pa(),a={impl:e};return t.memoizedState=a,function(){if((Ve&2)!==0)throw Error(W(440));return a.impl.apply(void 0,arguments)}}},lx={readContext:ma,use:Mp,useCallback:X1,useContext:ma,useEffect:ox,useImperativeHandle:j1,useInsertionEffect:q1,useLayoutEffect:V1,useMemo:W1,useReducer:zf,useRef:F1,useState:function(){return zf(ir)},useDebugValue:nx,useDeferredValue:function(e,t){var a=Dt();return Y1(a,$e.memoizedState,e,t)},useTransition:function(){var e=zf(ir)[0],t=Dt().memoizedState;return[typeof e=="boolean"?e:_u(e),t]},useSyncExternalStore:N1,useId:Q1,useHostTransitionStatus:ix,useFormState:Hy,useActionState:Hy,useOptimistic:function(e,t){var a=Dt();return P1(a,$e,e,t)},useMemoCache:tx,useCacheRefresh:J1};lx.useEffectEvent=U1;var n2={readContext:ma,use:Mp,useCallback:X1,useContext:ma,useEffect:ox,useImperativeHandle:j1,useInsertionEffect:q1,useLayoutEffect:V1,useMemo:W1,useReducer:gh,useRef:F1,useState:function(){return gh(ir)},useDebugValue:nx,useDeferredValue:function(e,t){var a=Dt();return $e===null?rx(a,e,t):Y1(a,$e.memoizedState,e,t)},useTransition:function(){var e=gh(ir)[0],t=Dt().memoizedState;return[typeof e=="boolean"?e:_u(e),t]},useSyncExternalStore:N1,useId:Q1,useHostTransitionStatus:ix,useFormState:By,useActionState:By,useOptimistic:function(e,t){var a=Dt();return $e!==null?P1(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tx,useCacheRefresh:J1};n2.useEffectEvent=U1;function hh(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:ct({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lb={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=wo(),n=jr(o);n.payload=t,a!=null&&(n.callback=a),t=Xr(e,n,o),t!==null&&(Ja(t,e,o),Zd(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=wo(),n=jr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Xr(e,n,o),t!==null&&(Ja(t,e,o),Zd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wo(),o=jr(a);o.tag=2,t!=null&&(o.callback=t),t=Xr(e,o,a),t!==null&&(Ja(t,e,a),Zd(t,e,a))}};function Uy(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!lu(a,o)||!lu(n,r):!0}function qy(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&lb.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=ct({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function r2(e){Zf(e)}function i2(e){console.error(e)}function s2(e){Zf(e)}function rp(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Vy(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function db(e,t,a){return a=jr(a),a.tag=3,a.payload={element:null},a.callback=function(){rp(e,t)},a}function l2(e){return e=jr(e),e.tag=3,e}function d2(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){Vy(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Vy(t,a,o),typeof n!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var s=o.stack;this.componentDidCatch(o.value,{componentStack:s!==null?s:""})})}function cE(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Tl(t,a,n,!0),a=vo.current,a!==null){switch(a.tag){case 31:case 13:return Fo===null?up():a.alternate===null&&_t===0&&(_t=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===ep?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Ih(e,o,n)),!1;case 22:return a.flags|=65536,o===ep?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Ih(e,o,n)),!1}throw Error(W(435,a.tag))}return Ih(e,o,n),up(),!1}if(Pe)return t=vo.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Zh&&(e=Error(W(422),{cause:o}),uu(Ho(e,a)))):(o!==Zh&&(t=Error(W(423),{cause:o}),uu(Ho(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Ho(o,a),n=db(e.stateNode,o,n),mh(e,n),_t!==4&&(_t=2)),!1;var r=Error(W(520),{cause:o});if(r=Ho(r,a),au===null?au=[r]:au.push(r),_t!==4&&(_t=2),t===null)return!0;o=Ho(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=db(a.stateNode,o,e),mh(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=l2(n),d2(n,e,a,o),mh(a,n),!1}a=a.return}while(a!==null);return!1}var dx=Error(W(461)),Bt=!1;function ca(e,t,a,o){t.child=e===null?S1(t,null,a,o):Ui(t,e.child,a,o)}function Gy(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var s in o)s!=="ref"&&(i[s]=o[s])}else i=o;return Fi(t),o=$b(e,t,a,i,r,n),s=Qb(),e!==null&&!Bt?(Jb(e,t,n),sr(e,t,n)):(Pe&&s&&Vb(t),t.flags|=1,ca(e,t,o,n),t.child)}function jy(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!qb(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,u2(e,t,r,o,n)):(e=Rf(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ux(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:lu,a(i,o)&&e.ref===t.ref)return sr(e,t,n)}return t.flags|=1,e=tr(r,o),e.ref=t.ref,e.return=t,t.child=e}function u2(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(lu(r,o)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=o=r,ux(e,n))(e.flags&131072)!==0&&(Bt=!0);else return t.lanes=e.lanes,sr(e,t,n)}return ub(e,t,a,o,n)}function c2(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return Xy(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pf(t,r!==null?r.cachePool:null),r!==null?Ry(t,r):ob(),_1(t);else return o=t.lanes=536870912,Xy(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Pf(t,r.cachePool),Ry(t,r),zr(t),t.memoizedState=null):(e!==null&&Pf(t,null),ob(),zr(t));return ca(e,t,n,a),t.child}function Gd(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xy(e,t,a,o,n){var r=Xb();return r=r===null?null:{parent:Ht._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Pf(t,null),ob(),_1(t),e!==null&&Tl(e,t,o,!0),t.childLanes=n,null}function Hf(e,t){return t=ip({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wy(e,t,a){return Ui(t,e.child,null,a),e=Hf(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function fE(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(o.mode==="hidden")return e=Hf(t,o),t.lanes=536870912,Gd(null,e);if(nb(t),(e=ut)?(e=oC(e,Bo),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qr!==null?{id:wn,overflow:yn}:null,retryLane:536870912,hydrationErrors:null},a=h1(e),a.return=t,t.child=a,pa=t,ut=null)):e=null,e===null)throw Jr(t);return t.lanes=536870912,null}return Hf(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(nb(t),n)if(t.flags&256)t.flags&=-257,t=Wy(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(W(558));else if(Bt||Tl(e,t,a,!1),n=(a&e.childLanes)!==0,Bt||n){if(o=Qe,o!==null&&(i=qv(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Wi(e,i),Ja(o,e,i),dx;up(),t=Wy(e,t,a)}else e=r.treeContext,ut=Uo(i.nextSibling),pa=t,Pe=!0,Gr=null,Bo=!1,e!==null&&x1(t,e),t=Hf(t,o),t.flags|=4096;return t}return e=tr(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bf(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(W(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ub(e,t,a,o,n){return Fi(t),a=$b(e,t,a,o,void 0,n),o=Qb(),e!==null&&!Bt?(Jb(e,t,n),sr(e,t,n)):(Pe&&o&&Vb(t),t.flags|=1,ca(e,t,a,n),t.child)}function Yy(e,t,a,o,n,r){return Fi(t),t.updateQueue=null,a=M1(t,o,a,n),I1(e),o=Qb(),e!==null&&!Bt?(Jb(e,t,r),sr(e,t,r)):(Pe&&o&&Vb(t),t.flags|=1,ca(e,t,a,r),t.child)}function Ky(e,t,a,o,n){if(Fi(t),t.stateNode===null){var r=sl,i=a.contextType;typeof i=="object"&&i!==null&&(r=ma(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=lb,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Yb(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?ma(i):sl,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(hh(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&lb.enqueueReplaceState(r,r.state,null),Qd(t,o,r,n),$d(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,l=Vi(a,s);r.props=l;var u=r.context,d=a.contextType;i=sl,typeof d=="object"&&d!==null&&(i=ma(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||u!==i)&&qy(t,r,o,i),Dr=!1;var c=t.memoizedState;r.state=c,Qd(t,o,r,n),$d(),u=t.memoizedState,s||c!==u||Dr?(typeof f=="function"&&(hh(t,a,f,o),u=t.memoizedState),(l=Dr||Uy(t,a,l,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,tb(e,t),i=t.memoizedProps,d=Vi(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,l=sl,typeof u=="object"&&u!==null&&(l=ma(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==l)&&qy(t,r,o,l),Dr=!1,c=t.memoizedState,r.state=c,Qd(t,o,r,n),$d();var p=t.memoizedState;i!==f||c!==p||Dr||e!==null&&e.dependencies!==null&&Jf(e.dependencies)?(typeof s=="function"&&(hh(t,a,s,o),p=t.memoizedState),(d=Dr||Uy(t,a,d,o,c,p,l)||e!==null&&e.dependencies!==null&&Jf(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=l,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Bf(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Ui(t,e.child,null,n),t.child=Ui(t,null,a,n)):ca(e,t,a,n),t.memoizedState=r.state,e=t.child):e=sr(e,t,n),e}function Zy(e,t,a,o){return Bi(),t.flags|=256,ca(e,t,a,o),t.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xh(e){return{baseLanes:e,cachePool:y1()}}function wh(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=go),e}function f2(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(At.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(n?Pr(t):zr(t),(e=ut)?(e=oC(e,Bo),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qr!==null?{id:wn,overflow:yn}:null,retryLane:536870912,hydrationErrors:null},a=h1(e),a.return=t,t.child=a,pa=t,ut=null)):e=null,e===null)throw Jr(t);return kb(e)?t.lanes=32:t.lanes=536870912,null}var s=o.children;return o=o.fallback,n?(zr(t),n=t.mode,s=ip({mode:"hidden",children:s},n),o=Pi(o,n,a,null),s.return=t,o.return=t,s.sibling=o,t.child=s,o=t.child,o.memoizedState=xh(a),o.childLanes=wh(e,i,a),t.memoizedState=bh,Gd(null,o)):(Pr(t),cb(t,s))}var l=e.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(r)t.flags&256?(Pr(t),t.flags&=-257,t=yh(e,t,a)):t.memoizedState!==null?(zr(t),t.child=e.child,t.flags|=128,t=null):(zr(t),s=o.fallback,n=t.mode,o=ip({mode:"visible",children:o.children},n),s=Pi(s,n,a,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,Ui(t,e.child,null,a),o=t.child,o.memoizedState=xh(a),o.childLanes=wh(e,i,a),t.memoizedState=bh,t=Gd(null,o));else if(Pr(t),kb(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(W(419)),o.stack="",o.digest=i,uu({value:o,source:null,stack:null}),t=yh(e,t,a)}else if(Bt||Tl(e,t,a,!1),i=(a&e.childLanes)!==0,Bt||i){if(i=Qe,i!==null&&(o=qv(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Wi(e,o),Ja(i,e,o),dx;Sb(s)||up(),t=yh(e,t,a)}else Sb(s)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ut=Uo(s.nextSibling),pa=t,Pe=!0,Gr=null,Bo=!1,e!==null&&x1(t,e),t=cb(t,o.children),t.flags|=4096);return t}return n?(zr(t),s=o.fallback,n=t.mode,l=e.child,u=l.sibling,o=tr(l,{mode:"hidden",children:o.children}),o.subtreeFlags=l.subtreeFlags&65011712,u!==null?s=tr(u,s):(s=Pi(s,n,a,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,Gd(null,o),o=t.child,s=e.child.memoizedState,s===null?s=xh(a):(n=s.cachePool,n!==null?(l=Ht._currentValue,n=n.parent!==l?{parent:l,pool:l}:n):n=y1(),s={baseLanes:s.baseLanes|a,cachePool:n}),o.memoizedState=s,o.childLanes=wh(e,i,a),t.memoizedState=bh,Gd(e.child,o)):(Pr(t),a=e.child,e=a.sibling,a=tr(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function cb(e,t){return t=ip({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ip(e,t){return e=mo(22,e,null,t),e.lanes=0,e}function yh(e,t,a){return Ui(t,e.child,null,a),e=cb(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $y(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Qh(e.return,t,a)}function vh(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function p2(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=At.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,at(At,i),ca(e,t,o,a),o=Pe?du:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$y(e,a,t);else if(e.tag===19)$y(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ap(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vh(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ap(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}vh(t,!0,a,null,r,o);break;case"together":vh(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function sr(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Tl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,a=tr(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=tr(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ux(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Jf(e)))}function pE(e,t,a){switch(t.tag){case 3:Xf(t,t.stateNode.containerInfo),Rr(t,Ht,e.memoizedState.cache),Bi();break;case 27:case 5:Bh(t);break;case 4:Xf(t,t.stateNode.containerInfo);break;case 10:Rr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,nb(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Pr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?f2(e,t,a):(Pr(t),e=sr(e,t,a),e!==null?e.sibling:null);Pr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Tl(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return p2(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),at(At,At.current),o)break;return null;case 22:return t.lanes=0,c2(e,t,a,t.pendingProps);case 24:Rr(t,Ht,e.memoizedState.cache)}return sr(e,t,a)}function m2(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Bt=!0;else{if(!ux(e,a)&&(t.flags&128)===0)return Bt=!1,pE(e,t,a);Bt=(e.flags&131072)!==0}else Bt=!1,Pe&&(t.flags&1048576)!==0&&b1(t,du,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ai(t.elementType),t.type=e,typeof e=="function")qb(e)?(o=Vi(e,o),t.tag=1,t=Ky(null,t,e,o,a)):(t.tag=0,t=ub(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Mb){t.tag=11,t=Gy(null,t,e,o,a);break e}else if(n===Nb){t.tag=14,t=jy(null,t,e,o,a);break e}}throw t=Oh(e)||e,Error(W(306,t,""))}}return t;case 0:return ub(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Vi(o,t.pendingProps),Ky(e,t,o,n,a);case 3:e:{if(Xf(t,t.stateNode.containerInfo),e===null)throw Error(W(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,tb(e,t),Qd(t,o,null,a);var i=t.memoizedState;if(o=i.cache,Rr(t,Ht,o),o!==r.cache&&Jh(t,[Ht],a,!0),$d(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Zy(e,t,o,a);break e}else if(o!==n){n=Ho(Error(W(424)),t),uu(n),t=Zy(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ut=Uo(e.firstChild),pa=t,Pe=!0,Gr=null,Bo=!0,a=S1(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bi(),o===n){t=sr(e,t,a);break e}ca(e,t,o,a)}t=t.child}return t;case 26:return Bf(e,t),e===null?(a=wv(t.type,null,t.pendingProps,null))?t.memoizedState=a:Pe||(a=t.type,e=t.pendingProps,o=mp(Vr.current).createElement(a),o[fa]=t,o[eo]=e,ga(o,a,e),oa(o),t.stateNode=o):t.memoizedState=wv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bh(t),e===null&&Pe&&(o=t.stateNode=nC(t.type,t.pendingProps,Vr.current),pa=t,Bo=!0,n=ut,oi(t.type)?(Lb=n,ut=Uo(o.firstChild)):ut=n),ca(e,t,t.pendingProps.children,a),Bf(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((n=o=ut)&&(o=UE(o,t.type,t.pendingProps,Bo),o!==null?(t.stateNode=o,pa=t,ut=Uo(o.firstChild),Bo=!1,n=!0):n=!1),n||Jr(t)),Bh(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,vb(n,r)?o=null:i!==null&&vb(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=$b(e,t,nE,null,null,a),hu._currentValue=n),Bf(e,t),ca(e,t,o,a),t.child;case 6:return e===null&&Pe&&((e=a=ut)&&(a=qE(a,t.pendingProps,Bo),a!==null?(t.stateNode=a,pa=t,ut=null,e=!0):e=!1),e||Jr(t)),null;case 13:return f2(e,t,a);case 4:return Xf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ui(t,null,o,a):ca(e,t,o,a),t.child;case 11:return Gy(e,t,t.type,t.pendingProps,a);case 7:return ca(e,t,t.pendingProps,a),t.child;case 8:return ca(e,t,t.pendingProps.children,a),t.child;case 12:return ca(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Rr(t,t.type,o.value),ca(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Fi(t),n=ma(n),o=o(n),t.flags|=1,ca(e,t,o,a),t.child;case 14:return jy(e,t,t.type,t.pendingProps,a);case 15:return u2(e,t,t.type,t.pendingProps,a);case 19:return p2(e,t,a);case 31:return fE(e,t,a);case 22:return c2(e,t,a,t.pendingProps);case 24:return Fi(t),o=ma(Ht),e===null?(n=Xb(),n===null&&(n=Qe,r=jb(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Yb(t),Rr(t,Ht,n)):((e.lanes&a)!==0&&(tb(e,t),Qd(t,null,null,a),$d()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Rr(t,Ht,o)):(o=r.cache,Rr(t,Ht,o),o!==n.cache&&Jh(t,[Ht],a,!0))),ca(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(W(156,t.tag))}function Xn(e){e.flags|=4}function Ch(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(H2())e.flags|=8192;else throw Oi=ep,Wb}else e.flags&=-16777217}function Qy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sC(t))if(H2())e.flags|=8192;else throw Oi=ep,Wb}function Sf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bv():536870912,e.lanes|=t,kl|=t)}function Od(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function mE(e,t,a){var o=t.pendingProps;switch(Gb(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return dt(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ar(Ht),xl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?Xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ph())),dt(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Xn(t),r!==null?(dt(t),Qy(t,r)):(dt(t),Ch(t,n,null,o,a))):r?r!==e.memoizedState?(Xn(t),dt(t),Qy(t,r)):(dt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Xn(t),dt(t),Ch(t,n,e,o,a)),null;case 27:if(Wf(t),a=Vr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Xn(t);else{if(!o){if(t.stateNode===null)throw Error(W(166));return dt(t),null}e=Cn.current,Ks(t)?Iy(t,e):(e=nC(n,o,a),t.stateNode=e,Xn(t))}return dt(t),null;case 5:if(Wf(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Xn(t);else{if(!o){if(t.stateNode===null)throw Error(W(166));return dt(t),null}if(r=Cn.current,Ks(t))Iy(t,r);else{var i=mp(Vr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[fa]=t,r[eo]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(ga(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Xn(t)}}return dt(t),Ch(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Xn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(W(166));if(e=Vr.current,Ks(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=pa,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[fa]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||eC(e.nodeValue,a)),e||Jr(t,!0)}else e=mp(e).createTextNode(o),e[fa]=t,t.stateNode=e}return dt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Ks(t),a!==null){if(e===null){if(!o)throw Error(W(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(557));e[fa]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;dt(t),e=!1}else a=ph(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if((t.flags&128)!==0)throw Error(W(558))}return dt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ks(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(W(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(W(317));n[fa]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;dt(t),n=!1}else n=ph(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(po(t),t):(po(t),null)}return po(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Sf(t,t.updateQueue),dt(t),null);case 4:return xl(),e===null&&bx(t.stateNode.containerInfo),dt(t),null;case 10:return ar(t.type),dt(t),null;case 19:if(na(At),o=t.memoizedState,o===null)return dt(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)Od(o,!1);else{if(_t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=ap(e),r!==null){for(t.flags|=128,Od(o,!1),e=r.updateQueue,t.updateQueue=e,Sf(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)g1(a,e),a=a.sibling;return at(At,At.current&1|2),Pe&&Zn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ho()>lp&&(t.flags|=128,n=!0,Od(o,!1),t.lanes=4194304)}else{if(!n)if(e=ap(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Sf(t,e),Od(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Pe)return dt(t),null}else 2*ho()-o.renderingStartTime>lp&&a!==536870912&&(t.flags|=128,n=!0,Od(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ho(),e.sibling=null,a=At.current,at(At,n?a&1|2:a&1),Pe&&Zn(t,o.treeForkCount),e):(dt(t),null);case 22:case 23:return po(t),Kb(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),a=t.updateQueue,a!==null&&Sf(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&na(zi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ar(Ht),dt(t),null;case 25:return null;case 30:return null}throw Error(W(156,t.tag))}function gE(e,t){switch(Gb(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(Ht),xl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wf(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(W(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return na(At),null;case 4:return xl(),null;case 10:return ar(t.type),null;case 22:case 23:return po(t),Kb(),e!==null&&na(zi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ar(Ht),null;case 25:return null;default:return null}}function g2(e,t){switch(Gb(t),t.tag){case 3:ar(Ht),xl();break;case 26:case 27:case 5:Wf(t);break;case 4:xl();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:na(At);break;case 10:ar(t.type);break;case 22:case 23:po(t),Kb(),e!==null&&na(zi);break;case 24:ar(Ht)}}function Iu(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(s){Ke(t,t.return,s)}}function ei(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=t;var l=a,u=s;try{u()}catch(d){Ke(n,l,d)}}}o=o.next}while(o!==r)}}catch(d){Ke(t,t.return,d)}}function h2(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{L1(t,a)}catch(o){Ke(e,e.return,o)}}}function b2(e,t,a){a.props=Vi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ke(e,t,o)}}function eu(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ke(e,t,n)}}function vn(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ke(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ke(e,t,n)}else a.current=null}function x2(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ke(e,e.return,n)}}function Sh(e,t,a){try{var o=e.stateNode;PE(o,e.type,a,t),o[eo]=t}catch(n){Ke(e,e.return,n)}}function w2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&oi(e.type)||e.tag===4}function kh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||w2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&oi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fb(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Jn));else if(o!==4&&(o===27&&oi(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(fb(e,t,a),e=e.sibling;e!==null;)fb(e,t,a),e=e.sibling}function sp(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&oi(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(sp(e,t,a),e=e.sibling;e!==null;)sp(e,t,a),e=e.sibling}function y2(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ga(t,o,a),t[fa]=e,t[eo]=a}catch(r){Ke(e,e.return,r)}}var $n=!1,Ot=!1,Lh=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,aa=null;function hE(e,t){if(e=e.containerInfo,wb=xp,e=s1(e),Bb(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,s=-1,l=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(s=i+n),f!==r||o!==0&&f.nodeType!==3||(l=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(s=i),c===r&&++d===o&&(l=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=s===-1||l===-1?null:{start:s,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(yb={focusedElem:e,selectionRange:a},xp=!1,aa=t;aa!==null;)if(t=aa,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,aa=e;else for(;aa!==null;){switch(t=aa,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Vi(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){Ke(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cb(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cb(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(W(163))}if(e=t.sibling,e!==null){e.return=t.return,aa=e;break}aa=t.return}}function v2(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Yn(e,a),o&4&&Iu(5,a);break;case 1:if(Yn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){Ke(a,a.return,i)}else{var n=Vi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Ke(a,a.return,i)}}o&64&&h2(a),o&512&&eu(a,a.return);break;case 3:if(Yn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{L1(e,t)}catch(i){Ke(a,a.return,i)}}break;case 27:t===null&&o&4&&y2(a);case 26:case 5:Yn(e,a),t===null&&o&4&&x2(a),o&512&&eu(a,a.return);break;case 12:Yn(e,a);break;case 31:Yn(e,a),o&4&&k2(e,a);break;case 13:Yn(e,a),o&4&&L2(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=LE.bind(null,a),VE(e,a))));break;case 22:if(o=a.memoizedState!==null||$n,!o){t=t!==null&&t.memoizedState!==null||Ot,n=$n;var r=Ot;$n=o,(Ot=t)&&!r?Kn(e,a,(a.subtreeFlags&8772)!==0):Yn(e,a),$n=n,Ot=r}break;case 30:break;default:Yn(e,a)}}function C2(e){var t=e.alternate;t!==null&&(e.alternate=null,C2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Db(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xt=null,$a=!1;function Wn(e,t,a){for(a=a.child;a!==null;)S2(e,t,a),a=a.sibling}function S2(e,t,a){if(bo&&typeof bo.onCommitFiberUnmount=="function")try{bo.onCommitFiberUnmount(yu,a)}catch{}switch(a.tag){case 26:Ot||vn(a,t),Wn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||vn(a,t);var o=xt,n=$a;oi(a.type)&&(xt=a.stateNode,$a=!1),Wn(e,t,a),nu(a.stateNode),xt=o,$a=n;break;case 5:Ot||vn(a,t);case 6:if(o=xt,n=$a,xt=null,Wn(e,t,a),xt=o,$a=n,xt!==null)if($a)try{(xt.nodeType===9?xt.body:xt.nodeName==="HTML"?xt.ownerDocument.body:xt).removeChild(a.stateNode)}catch(r){Ke(a,t,r)}else try{xt.removeChild(a.stateNode)}catch(r){Ke(a,t,r)}break;case 18:xt!==null&&($a?(e=xt,mv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):mv(xt,a.stateNode));break;case 4:o=xt,n=$a,xt=a.stateNode.containerInfo,$a=!0,Wn(e,t,a),xt=o,$a=n;break;case 0:case 11:case 14:case 15:ei(2,a,t),Ot||ei(4,a,t),Wn(e,t,a);break;case 1:Ot||(vn(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&b2(a,t,o)),Wn(e,t,a);break;case 21:Wn(e,t,a);break;case 22:Ot=(o=Ot)||a.memoizedState!==null,Wn(e,t,a),Ot=o;break;default:Wn(e,t,a)}}function k2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(a){Ke(t,t.return,a)}}}function L2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){Ke(t,t.return,a)}}function bE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jy),t;default:throw Error(W(435,e.tag))}}function kf(e,t){var a=bE(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=_E.bind(null,e,o);o.then(n,n)}})}function Ka(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 27:if(oi(s.type)){xt=s.stateNode,$a=!1;break e}break;case 5:xt=s.stateNode,$a=!1;break e;case 3:case 4:xt=s.stateNode.containerInfo,$a=!0;break e}s=s.return}if(xt===null)throw Error(W(160));S2(r,i,n),xt=null,$a=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_2(t,e),t=t.sibling}var Zo=null;function _2(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ka(t,e),Za(e),o&4&&(ei(3,e,e.return),Iu(3,e),ei(5,e,e.return));break;case 1:Ka(t,e),Za(e),o&512&&(Ot||a===null||vn(a,a.return)),o&64&&$n&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Zo;if(Ka(t,e),Za(e),o&512&&(Ot||a===null||vn(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Su]||r[fa]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),ga(r,o,a),r[fa]=e,oa(r),o=r;break e;case"link":var i=vv("link","href",n).get(o+(a.href||""));if(i){for(var s=0;s<i.length;s++)if(r=i[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(s,1);break t}}r=n.createElement(o),ga(r,o,a),n.head.appendChild(r);break;case"meta":if(i=vv("meta","content",n).get(o+(a.content||""))){for(s=0;s<i.length;s++)if(r=i[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(s,1);break t}}r=n.createElement(o),ga(r,o,a),n.head.appendChild(r);break;default:throw Error(W(468,o))}r[fa]=e,oa(r),o=r}e.stateNode=o}else Cv(n,e.type,e.stateNode);else e.stateNode=yv(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?Cv(n,e.type,e.stateNode):yv(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Sh(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ka(t,e),Za(e),o&512&&(Ot||a===null||vn(a,a.return)),a!==null&&o&4&&Sh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ka(t,e),Za(e),o&512&&(Ot||a===null||vn(a,a.return)),e.flags&32){n=e.stateNode;try{yl(n,"")}catch(g){Ke(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,Sh(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Lh=!0);break;case 6:if(Ka(t,e),Za(e),o&4){if(e.stateNode===null)throw Error(W(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ke(e,e.return,g)}}break;case 3:if(qf=null,n=Zo,Zo=gp(t.containerInfo),Ka(t,e),Zo=n,Za(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(g){Ke(e,e.return,g)}Lh&&(Lh=!1,I2(e));break;case 4:o=Zo,Zo=gp(e.stateNode.containerInfo),Ka(t,e),Za(e),Zo=o;break;case 12:Ka(t,e),Za(e);break;case 31:Ka(t,e),Za(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kf(e,o)));break;case 13:Ka(t,e),Za(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tp=ho()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kf(e,o)));break;case 22:n=e.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=$n,d=Ot;if($n=u||n,Ot=d||l,Ka(t,e),Ot=d,$n=u,Za(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||l||$n||Ot||Di(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){l=a=t;try{if(r=l.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=l.stateNode;var f=l.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;s.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){Ke(l,l.return,g)}}}else if(t.tag===6){if(a===null){l=t;try{l.stateNode.nodeValue=n?"":l.memoizedProps}catch(g){Ke(l,l.return,g)}}}else if(t.tag===18){if(a===null){l=t;try{var p=l.stateNode;n?gv(p,!0):gv(l.stateNode,!1)}catch(g){Ke(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kf(e,a))));break;case 19:Ka(t,e),Za(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kf(e,o)));break;case 30:break;case 21:break;default:Ka(t,e),Za(e)}}function Za(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(w2(o)){a=o;break}o=o.return}if(a==null)throw Error(W(160));switch(a.tag){case 27:var n=a.stateNode,r=kh(e);sp(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(yl(i,""),a.flags&=-33);var s=kh(e);sp(e,s,i);break;case 3:case 4:var l=a.stateNode.containerInfo,u=kh(e);fb(e,u,l);break;default:throw Error(W(161))}}catch(d){Ke(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;I2(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)v2(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ei(4,t,t.return),Di(t);break;case 1:vn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&b2(t,t.return,a),Di(t);break;case 27:nu(t.stateNode);case 26:case 5:vn(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function Kn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Kn(n,r,a),Iu(4,r);break;case 1:if(Kn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ke(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var s=o.stateNode;try{var l=n.shared.hiddenCallbacks;if(l!==null)for(n.shared.hiddenCallbacks=null,n=0;n<l.length;n++)k1(l[n],s)}catch(u){Ke(o,o.return,u)}}a&&i&64&&h2(r),eu(r,r.return);break;case 27:y2(r);case 26:case 5:Kn(n,r,a),a&&o===null&&i&4&&x2(r),eu(r,r.return);break;case 12:Kn(n,r,a);break;case 31:Kn(n,r,a),a&&i&4&&k2(n,r);break;case 13:Kn(n,r,a),a&&i&4&&L2(n,r);break;case 22:r.memoizedState===null&&Kn(n,r,a),eu(r,r.return);break;case 30:break;default:Kn(n,r,a)}t=t.sibling}}function cx(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lu(a))}function fx(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lu(e))}function Ko(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M2(e,t,a,o),t=t.sibling}function M2(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ko(e,t,a,o),n&2048&&Iu(9,t);break;case 1:Ko(e,t,a,o);break;case 3:Ko(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lu(e)));break;case 12:if(n&2048){Ko(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,s=r.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ke(t,t.return,l)}}else Ko(e,t,a,o);break;case 31:Ko(e,t,a,o);break;case 13:Ko(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Ko(e,t,a,o):tu(e,t):r._visibility&2?Ko(e,t,a,o):(r._visibility|=2,$s(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&cx(i,t);break;case 24:Ko(e,t,a,o),n&2048&&fx(t.alternate,t);break;default:Ko(e,t,a,o)}}function $s(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,s=a,l=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:$s(r,i,s,l,n),Iu(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?$s(r,i,s,l,n):tu(r,i):(d._visibility|=2,$s(r,i,s,l,n)),n&&u&2048&&cx(i.alternate,i);break;case 24:$s(r,i,s,l,n),n&&u&2048&&fx(i.alternate,i);break;default:$s(r,i,s,l,n)}t=t.sibling}}function tu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:tu(a,o),n&2048&&cx(o.alternate,o);break;case 24:tu(a,o),n&2048&&fx(o.alternate,o);break;default:tu(a,o)}t=t.sibling}}var jd=8192;function Zs(e,t,a){if(e.subtreeFlags&jd)for(e=e.child;e!==null;)N2(e,t,a),e=e.sibling}function N2(e,t,a){switch(e.tag){case 26:Zs(e,t,a),e.flags&jd&&e.memoizedState!==null&&tT(a,Zo,e.memoizedState,e.memoizedProps);break;case 5:Zs(e,t,a);break;case 3:case 4:var o=Zo;Zo=gp(e.stateNode.containerInfo),Zs(e,t,a),Zo=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=jd,jd=16777216,Zs(e,t,a),jd=o):Zs(e,t,a));break;default:Zs(e,t,a)}}function E2(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];aa=o,A2(o,e)}E2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T2(e),e=e.sibling}function T2(e){switch(e.tag){case 0:case 11:case 15:Hd(e),e.flags&2048&&ei(9,e,e.return);break;case 3:Hd(e);break;case 12:Hd(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ff(e)):Hd(e);break;default:Hd(e)}}function Ff(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];aa=o,A2(o,e)}E2(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ei(8,t,t.return),Ff(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ff(t));break;default:Ff(t)}e=e.sibling}}function A2(e,t){for(;aa!==null;){var a=aa;switch(a.tag){case 0:case 11:case 15:ei(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Lu(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,aa=o;else e:for(a=e;aa!==null;){o=aa;var n=o.sibling,r=o.return;if(C2(o),o===a){aa=null;break e}if(n!==null){n.return=r,aa=n;break e}aa=r}}}var xE={getCacheForType:function(e){var t=ma(Ht),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ma(Ht).controller.signal}},wE=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Qe=null,Te=null,Re=0,Ye=0,fo=null,Fr=!1,Dl=!1,px=!1,lr=0,_t=0,ti=0,Hi=0,mx=0,go=0,kl=0,au=null,Qa=null,pb=!1,Tp=0,D2=0,lp=1/0,dp=null,Wr=null,jt=0,Yr=null,Ll=null,or=0,mb=0,gb=null,R2=null,ou=0,hb=null;function wo(){return(Ve&2)!==0&&Re!==0?Re&-Re:me.T!==null?hx():Vv()}function P2(){if(go===0)if((Re&536870912)===0||Pe){var e=mf;mf<<=1,(mf&3932160)===0&&(mf=262144),go=e}else go=536870912;return e=vo.current,e!==null&&(e.flags|=32),go}function Ja(e,t,a){(e===Qe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(_l(e,0),Ur(e,Re,go,!1)),Cu(e,a),((Ve&2)===0||e!==Qe)&&(e===Qe&&((Ve&2)===0&&(Hi|=a),_t===4&&Ur(e,Re,go,!1)),kn(e))}function z2(e,t,a){if((Ve&6)!==0)throw Error(W(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||vu(e,t),n=o?CE(e,t):_h(e,t,!0),r=o;do{if(n===0){Dl&&!o&&Ur(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!yE(a)){n=_h(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var s=e;n=au;var l=s.current.memoizedState.isDehydrated;if(l&&(_l(s,i).flags|=256),i=_h(s,i,!1),i!==2){if(px&&!l){s.errorRecoveryDisabledLanes|=r,Hi|=r,n=4;break e}r=Qa,Qa=n,r!==null&&(Qa===null?Qa=r:Qa.push.apply(Qa,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){_l(e,0),Ur(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(W(345));case 4:if((t&4194048)!==t)break;case 6:Ur(o,t,go,!Fr);break e;case 2:Qa=null;break;case 3:case 5:break;default:throw Error(W(329))}if((t&62914560)===t&&(n=Tp+300-ho(),10<n)){if(Ur(o,t,go,!Fr),yp(o,0,!0)!==0)break e;or=t,o.timeoutHandle=aC(ev.bind(null,o,a,Qa,dp,pb,t,go,Hi,kl,Fr,r,"Throttled",-0,0),n);break e}ev(o,a,Qa,dp,pb,t,go,Hi,kl,Fr,r,null,-0,0)}}break}while(!0);kn(e)}function ev(e,t,a,o,n,r,i,s,l,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jn},N2(t,r,f);var g=(r&62914560)===r?Tp-ho():(r&4194048)===r?D2-ho():0;if(g=aT(f,g),g!==null){or=r,e.cancelPendingCommit=g(av.bind(null,e,t,r,a,o,n,i,s,l,d,f,null,c,p)),Ur(e,r,i,!u);return}}av(e,t,r,a,o,n,i,s,l)}function yE(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!yo(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ur(e,t,a,o){t&=~mx,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-xo(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&Fv(e,a,t)}function Ap(){return(Ve&6)===0?(Mu(0,!1),!1):!0}function gx(){if(Te!==null){if(Ye===0)var e=Te.return;else e=Te,er=Yi=null,ex(e),gl=null,cu=0,e=Te;for(;e!==null;)g2(e.alternate,e),e=e.return;Te=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,HE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),or=0,gx(),Qe=e,Te=a=tr(e.current,null),Re=t,Ye=0,fo=null,Fr=!1,Dl=vu(e,t),px=!1,kl=go=mx=Hi=ti=_t=0,Qa=au=null,pb=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-xo(o),r=1<<n;t|=e[n],o&=~r}return lr=t,kp(),a}function O2(e,t){ye=null,me.H=pu,t===Al||t===_p?(t=Ay(),Ye=3):t===Wb?(t=Ay(),Ye=4):Ye=t===dx?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fo=t,Te===null&&(_t=1,rp(e,Ho(t,e.current)))}function H2(){var e=vo.current;return e===null?!0:(Re&4194048)===Re?Fo===null:(Re&62914560)===Re||(Re&536870912)!==0?e===Fo:!1}function B2(){var e=me.H;return me.H=pu,e===null?pu:e}function F2(){var e=me.A;return me.A=xE,e}function up(){_t=4,Fr||(Re&4194048)!==Re&&vo.current!==null||(Dl=!0),(ti&134217727)===0&&(Hi&134217727)===0||Qe===null||Ur(Qe,Re,go,!1)}function _h(e,t,a){var o=Ve;Ve|=2;var n=B2(),r=F2();(Qe!==e||Re!==t)&&(dp=null,_l(e,t)),t=!1;var i=_t;e:do try{if(Ye!==0&&Te!==null){var s=Te,l=fo;switch(Ye){case 8:gx(),i=6;break e;case 3:case 2:case 9:case 6:vo.current===null&&(t=!0);var u=Ye;if(Ye=0,fo=null,ul(e,s,l,u),a&&Dl){i=0;break e}break;default:u=Ye,Ye=0,fo=null,ul(e,s,l,u)}}vE(),i=_t;break}catch(d){O2(e,d)}while(!0);return t&&e.shellSuspendCounter++,er=Yi=null,Ve=o,me.H=n,me.A=r,Te===null&&(Qe=null,Re=0,kp()),i}function vE(){for(;Te!==null;)U2(Te)}function CE(e,t){var a=Ve;Ve|=2;var o=B2(),n=F2();Qe!==e||Re!==t?(dp=null,lp=ho()+500,_l(e,t)):Dl=vu(e,t);e:do try{if(Ye!==0&&Te!==null){t=Te;var r=fo;t:switch(Ye){case 1:Ye=0,fo=null,ul(e,t,r,1);break;case 2:case 9:if(Ty(r)){Ye=0,fo=null,tv(t);break}t=function(){Ye!==2&&Ye!==9||Qe!==e||(Ye=7),kn(e)},r.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Ty(r)?(Ye=0,fo=null,tv(t)):(Ye=0,fo=null,ul(e,t,r,7));break;case 5:var i=null;switch(Te.tag){case 26:i=Te.memoizedState;case 5:case 27:var s=Te;if(i?sC(i):s.stateNode.complete){Ye=0,fo=null;var l=s.sibling;if(l!==null)Te=l;else{var u=s.return;u!==null?(Te=u,Dp(u)):Te=null}break t}}Ye=0,fo=null,ul(e,t,r,5);break;case 6:Ye=0,fo=null,ul(e,t,r,6);break;case 8:gx(),_t=6;break e;default:throw Error(W(462))}}SE();break}catch(d){O2(e,d)}while(!0);return er=Yi=null,me.H=o,me.A=n,Ve=a,Te!==null?0:(Qe=null,Re=0,kp(),_t)}function SE(){for(;Te!==null&&!X3();)U2(Te)}function U2(e){var t=m2(e.alternate,e,lr);e.memoizedProps=e.pendingProps,t===null?Dp(e):Te=t}function tv(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yy(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Yy(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:ex(t);default:g2(a,t),t=Te=g1(t,lr),t=m2(a,t,lr)}e.memoizedProps=e.pendingProps,t===null?Dp(e):Te=t}function ul(e,t,a,o){er=Yi=null,ex(t),gl=null,cu=0;var n=t.return;try{if(cE(e,n,t,a,Re)){_t=1,rp(e,Ho(a,e.current)),Te=null;return}}catch(r){if(n!==null)throw Te=n,r;_t=1,rp(e,Ho(a,e.current)),Te=null;return}t.flags&32768?(Pe||o===1?e=!0:Dl||(Re&536870912)!==0?e=!1:(Fr=e=!0,(o===2||o===9||o===3||o===6)&&(o=vo.current,o!==null&&o.tag===13&&(o.flags|=16384))),q2(t,e)):Dp(t)}function Dp(e){var t=e;do{if((t.flags&32768)!==0){q2(t,Fr);return}e=t.return;var a=mE(t.alternate,t,lr);if(a!==null){Te=a;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);_t===0&&(_t=5)}function q2(e,t){do{var a=gE(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);_t=6,Te=null}function av(e,t,a,o,n,r,i,s,l){e.cancelPendingCommit=null;do Rp();while(jt!==0);if((Ve&6)!==0)throw Error(W(327));if(t!==null){if(t===e.current)throw Error(W(177));if(r=t.lanes|t.childLanes,r|=Fb,a4(e,a,r,i,s,l),e===Qe&&(Te=Qe=null,Re=0),Ll=t,Yr=e,or=a,mb=r,gb=n,R2=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IE(Yf,function(){return W2(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=me.T,me.T=null,n=Ge.p,Ge.p=2,i=Ve,Ve|=4;try{hE(e,t,a)}finally{Ve=i,Ge.p=n,me.T=o}}jt=1,V2(),G2(),j2()}}function V2(){if(jt===1){jt=0;var e=Yr,t=Ll,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=me.T,me.T=null;var o=Ge.p;Ge.p=2;var n=Ve;Ve|=4;try{_2(t,e);var r=yb,i=s1(e.containerInfo),s=r.focusedElem,l=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&i1(s.ownerDocument.documentElement,s)){if(l!==null&&Bb(s)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(d,s.value.length);else{var f=s.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=s.textContent.length,w=Math.min(l.start,g),y=l.end===void 0?w:Math.min(l.end,g);!p.extend&&w>y&&(i=y,y=w,w=i);var h=ky(s,w),b=ky(s,y);if(h&&b&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),w>y?(p.addRange(m),p.extend(b.node,b.offset)):(m.setEnd(b.node,b.offset),p.addRange(m))}}}}for(f=[],p=s;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<f.length;s++){var x=f[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}xp=!!wb,yb=wb=null}finally{Ve=n,Ge.p=o,me.T=a}}e.current=t,jt=2}}function G2(){if(jt===2){jt=0;var e=Yr,t=Ll,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=me.T,me.T=null;var o=Ge.p;Ge.p=2;var n=Ve;Ve|=4;try{v2(e,t.alternate,t)}finally{Ve=n,Ge.p=o,me.T=a}}jt=3}}function j2(){if(jt===4||jt===3){jt=0,W3();var e=Yr,t=Ll,a=or,o=R2;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?jt=5:(jt=0,Ll=Yr=null,X2(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Wr=null),Ab(a),t=t.stateNode,bo&&typeof bo.onCommitFiberRoot=="function")try{bo.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=me.T,n=Ge.p,Ge.p=2,me.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var s=o[i];r(s.value,{componentStack:s.stack})}}finally{me.T=t,Ge.p=n}}(or&3)!==0&&Rp(),kn(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===hb?ou++:(ou=0,hb=e):ou=0,Mu(0,!1)}}function X2(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lu(t)))}function Rp(){return V2(),G2(),j2(),W2()}function W2(){if(jt!==5)return!1;var e=Yr,t=mb;mb=0;var a=Ab(or),o=me.T,n=Ge.p;try{Ge.p=32>a?32:a,me.T=null,a=gb,gb=null;var r=Yr,i=or;if(jt=0,Ll=Yr=null,or=0,(Ve&6)!==0)throw Error(W(331));var s=Ve;if(Ve|=4,T2(r.current),M2(r,r.current,i,a),Ve=s,Mu(0,!1),bo&&typeof bo.onPostCommitFiberRoot=="function")try{bo.onPostCommitFiberRoot(yu,r)}catch{}return!0}finally{Ge.p=n,me.T=o,X2(e,t)}}function ov(e,t,a){t=Ho(a,t),t=db(e.stateNode,t,2),e=Xr(e,t,2),e!==null&&(Cu(e,2),kn(e))}function Ke(e,t,a){if(e.tag===3)ov(e,e,a);else for(;t!==null;){if(t.tag===3){ov(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wr===null||!Wr.has(o))){e=Ho(a,e),a=l2(2),o=Xr(t,a,2),o!==null&&(d2(a,o,t,e),Cu(o,2),kn(o));break}}t=t.return}}function Ih(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wE;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(px=!0,n.add(a),e=kE.bind(null,e,t,a),t.then(e,e))}function kE(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Re&a)===a&&(_t===4||_t===3&&(Re&62914560)===Re&&300>ho()-Tp?(Ve&2)===0&&_l(e,0):mx|=a,kl===Re&&(kl=0)),kn(e)}function Y2(e,t){t===0&&(t=Bv()),e=Wi(e,t),e!==null&&(Cu(e,t),kn(e))}function LE(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Y2(e,a)}function _E(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(W(314))}o!==null&&o.delete(t),Y2(e,a)}function IE(e,t){return Eb(e,t)}var cp=null,Qs=null,bb=!1,fp=!1,Mh=!1,qr=0;function kn(e){e!==Qs&&e.next===null&&(Qs===null?cp=Qs=e:Qs=Qs.next=e),fp=!0,bb||(bb=!0,NE())}function Mu(e,t){if(!Mh&&fp){Mh=!0;do for(var a=!1,o=cp;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,s=o.pingedLanes;r=(1<<31-xo(42|e)+1)-1,r&=n&~(i&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,nv(o,r))}else r=Re,r=yp(o,o===Qe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||vu(o,r)||(a=!0,nv(o,r));o=o.next}while(a);Mh=!1}}function ME(){K2()}function K2(){fp=bb=!1;var e=0;qr!==0&&OE()&&(e=qr);for(var t=ho(),a=null,o=cp;o!==null;){var n=o.next,r=Z2(o,t);r===0?(o.next=null,a===null?cp=n:a.next=n,n===null&&(Qs=a)):(a=o,(e!==0||(r&3)!==0)&&(fp=!0)),o=n}jt!==0&&jt!==5||Mu(e,!1),qr!==0&&(qr=0)}function Z2(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-xo(r),s=1<<i,l=n[i];l===-1?((s&a)===0||(s&o)!==0)&&(n[i]=t4(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}if(t=Qe,a=Re,a=yp(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&oh(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||vu(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&oh(o),Ab(a)){case 2:case 8:a=Ov;break;case 32:a=Yf;break;case 268435456:a=Hv;break;default:a=Yf}return o=$2.bind(null,e),a=Eb(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&oh(o),e.callbackPriority=2,e.callbackNode=null,2}function $2(e,t){if(jt!==0&&jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rp()&&e.callbackNode!==a)return null;var o=Re;return o=yp(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(z2(e,o,t),Z2(e,ho()),e.callbackNode!=null&&e.callbackNode===a?$2.bind(null,e):null)}function nv(e,t){if(Rp())return null;z2(e,t,!0)}function NE(){BE(function(){(Ve&6)!==0?Eb(zv,ME):K2()})}function hx(){if(qr===0){var e=vl;e===0&&(e=pf,pf<<=1,(pf&261888)===0&&(pf=256)),qr=e}return qr}function rv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tf(""+e)}function iv(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function EE(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=rv((n[eo]||null).action),i=o.submitter;i&&(t=(t=i[eo]||null)?rv(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var s=new vp("action","action",null,o,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qr!==0){var l=i?iv(n,i):new FormData(n);sb(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(s.preventDefault(),l=i?iv(n,i):new FormData(n),sb(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(Lf=0;Lf<Kh.length;Lf++)_f=Kh[Lf],sv=_f.toLowerCase(),lv=_f[0].toUpperCase()+_f.slice(1),$o(sv,"on"+lv);var _f,sv,lv,Lf;$o(d1,"onAnimationEnd");$o(u1,"onAnimationIteration");$o(c1,"onAnimationStart");$o("dblclick","onDoubleClick");$o("focusin","onFocus");$o("focusout","onBlur");$o(Y4,"onTransitionRun");$o(K4,"onTransitionStart");$o(Z4,"onTransitionCancel");$o(f1,"onTransitionEnd");wl("onMouseEnter",["mouseout","mouseover"]);wl("onMouseLeave",["mouseout","mouseover"]);wl("onPointerEnter",["pointerout","pointerover"]);wl("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function Q2(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(d){Zf(d)}n.currentTarget=null,r=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(d){Zf(d)}n.currentTarget=null,r=l}}}}function Ee(e,t){var a=t[Uh];a===void 0&&(a=t[Uh]=new Set);var o=e+"__bubble";a.has(o)||(J2(t,e,2,!1),a.add(o))}function Nh(e,t,a){var o=0;t&&(o|=4),J2(a,e,o,t)}var If="_reactListening"+Math.random().toString(36).slice(2);function bx(e){if(!e[If]){e[If]=!0,Gv.forEach(function(a){a!=="selectionchange"&&(TE.has(a)||Nh(a,!1,e),Nh(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[If]||(t[If]=!0,Nh("selectionchange",!1,t))}}function J2(e,t,a,o){switch(fC(t)){case 2:var n=rT;break;case 8:n=iT;break;default:n=vx}a=n.bind(null,t,a,e),n=void 0,!Xh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Eh(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=tl(s),i===null)return;if(l=i.tag,l===5||l===6||l===26||l===27){o=r=i;continue e}s=s.parentNode}}o=o.return}Qv(function(){var u=r,d=Pb(a),f=[];e:{var c=p1.get(e);if(c!==void 0){var p=vp,g=e;switch(e){case"keypress":if(Df(a)===0)break e;case"keydown":case"keyup":p=_4;break;case"focusin":g="focus",p=lh;break;case"focusout":g="blur",p=lh;break;case"beforeblur":case"afterblur":p=lh;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=m4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=N4;break;case d1:case u1:case c1:p=b4;break;case f1:p=T4;break;case"scroll":case"scrollend":p=f4;break;case"wheel":p=D4;break;case"copy":case"cut":case"paste":p=w4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=by;break;case"toggle":case"beforetoggle":p=P4}var w=(t&4)!==0,y=!w&&(e==="scroll"||e==="scrollend"),h=w?c!==null?c+"Capture":null:c;w=[];for(var b=u,m;b!==null;){var x=b;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||h===null||(x=iu(b,h),x!=null&&w.push(gu(b,x,m))),y)break;b=b.return}0<w.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==jh&&(g=a.relatedTarget||a.fromElement)&&(tl(g)||g[Nl]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?tl(g):null,g!==null&&(y=wu(g),w=g.tag,g!==y||w!==5&&w!==27&&w!==6)&&(g=null)):(p=null,g=u),p!==g)){if(w=gy,x="onMouseLeave",h="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=by,x="onPointerLeave",h="onPointerEnter",b="pointer"),y=p==null?c:Vd(p),m=g==null?c:Vd(g),c=new w(x,b+"leave",p,a,d),c.target=y,c.relatedTarget=m,x=null,tl(d)===u&&(w=new w(h,b+"enter",g,a,d),w.target=m,w.relatedTarget=y,x=w),y=x,p&&g)t:{for(w=AE,h=p,b=g,m=0,x=h;x;x=w(x))m++;x=0;for(var v=b;v;v=w(v))x++;for(;0<m-x;)h=w(h),m--;for(;0<x-m;)b=w(b),x--;for(;m--;){if(h===b||b!==null&&h===b.alternate){w=h;break t}h=w(h),b=w(b)}w=null}else w=null;p!==null&&dv(f,c,p,w,!1),g!==null&&y!==null&&dv(f,y,g,w,!0)}}e:{if(c=u?Vd(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=vy;else if(yy(c))if(n1)C=j4;else{C=V4;var S=q4}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Rb(u.elementType)&&(C=vy):C=G4;if(C&&(C=C(e,u))){o1(f,C,a,d);break e}S&&S(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Gh(c,"number",c.value)}switch(S=u?Vd(u):window,e){case"focusin":(yy(S)||S.contentEditable==="true")&&(nl=S,Wh=u,Yd=null);break;case"focusout":Yd=Wh=nl=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Ly(f,a,d);break;case"selectionchange":if(W4)break;case"keydown":case"keyup":Ly(f,a,d)}var k;if(Hb)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ol?t1(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(e1&&a.locale!=="ko"&&(ol||_!=="onCompositionStart"?_==="onCompositionEnd"&&ol&&(k=Jv()):(Br=d,zb="value"in Br?Br.value:Br.textContent,ol=!0)),S=pp(u,_),0<S.length&&(_=new hy(_,e,null,a,d),f.push({event:_,listeners:S}),k?_.data=k:(k=a1(a),k!==null&&(_.data=k)))),(k=O4?H4(e,a):B4(e,a))&&(_=pp(u,"onBeforeInput"),0<_.length&&(S=new hy("onBeforeInput","beforeinput",null,a,d),f.push({event:S,listeners:_}),S.data=k)),EE(f,e,u,a,d)}Q2(f,t)})}function gu(e,t,a){return{instance:e,listener:t,currentTarget:a}}function pp(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=iu(e,a),n!=null&&o.unshift(gu(e,n,r)),n=iu(e,t),n!=null&&o.push(gu(e,n,r))),e.tag===3)return o;e=e.return}return[]}function AE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dv(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var s=a,l=s.alternate,u=s.stateNode;if(s=s.tag,l!==null&&l===o)break;s!==5&&s!==26&&s!==27||u===null||(l=u,n?(u=iu(a,r),u!=null&&i.unshift(gu(a,u,l))):n||(u=iu(a,r),u!=null&&i.push(gu(a,u,l)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var DE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function uv(e){return(typeof e=="string"?e:""+e).replace(DE,`
`).replace(RE,"")}function eC(e,t){return t=uv(t),uv(e)===t}function Ze(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||yl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&yl(e,""+o);break;case"className":hf(e,"class",o);break;case"tabIndex":hf(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":hf(e,a,o);break;case"style":$v(e,o,r);break;case"data":if(t!=="object"){hf(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Tf(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ze(e,t,"name",n.name,n,null),Ze(e,t,"formEncType",n.formEncType,n,null),Ze(e,t,"formMethod",n.formMethod,n,null),Ze(e,t,"formTarget",n.formTarget,n,null)):(Ze(e,t,"encType",n.encType,n,null),Ze(e,t,"method",n.method,n,null),Ze(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Tf(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Jn);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(W(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(W(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Tf(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Ef(e,"popover",o);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ef(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u4.get(a)||a,Ef(e,a,o))}}function xb(e,t,a,o,n,r){switch(a){case"style":$v(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(W(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(W(60));e.innerHTML=a}}break;case"children":typeof o=="string"?yl(e,o):(typeof o=="number"||typeof o=="bigint")&&yl(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[eo]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ef(e,a,o)}}}function ga(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:Ze(e,t,r,i,a,null)}}n&&Ze(e,t,"srcSet",a.srcSet,a,null),o&&Ze(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var s=r=i=n=null,l=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(W(137,t));break;default:Ze(e,t,o,d,a,null)}}Yv(e,r,s,l,u,i,n,!1);return;case"select":Ee("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":o=s;default:Ze(e,t,n,s,a,null)}t=r,a=i,e.multiple=!!o,t!=null?fl(e,!!o,t,!1):a!=null&&fl(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":o=s;break;case"defaultValue":n=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(W(91));break;default:Ze(e,t,i,s,a,null)}Zv(e,o,n,r);return;case"option":for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null)&&(l==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ze(e,t,l,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<mu.length;o++)Ee(mu[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:Ze(e,t,u,o,a,null)}return;default:if(Rb(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&xb(e,t,d,o,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null&&Ze(e,t,s,o,a,null))}function PE(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,s=null,l=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:o.hasOwnProperty(p)||Ze(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(W(137,t));break;default:p!==f&&Ze(e,t,c,p,o,f)}}Vh(e,i,s,l,u,d,r,n);return;case"select":p=i=s=c=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:o.hasOwnProperty(r)||Ze(e,t,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":c=r;break;case"defaultValue":s=r;break;case"multiple":i=r;default:r!==l&&Ze(e,t,n,r,o,l)}t=s,a=i,o=p,c!=null?fl(e,!!a,c,!1):!!o!=!!a&&(t!=null?fl(e,!!a,t,!0):fl(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!o.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ze(e,t,s,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(W(91));break;default:n!==r&&Ze(e,t,i,n,o,r)}Kv(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ze(e,t,g,null,o,c));for(l in o)c=o[l],p=a[l],o.hasOwnProperty(l)&&c!==p&&(c!=null||p!=null)&&(l==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Ze(e,t,l,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&Ze(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(W(137,t));break;default:Ze(e,t,u,c,o,p)}return;default:if(Rb(t)){for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!==void 0&&!o.hasOwnProperty(y)&&xb(e,t,y,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||xb(e,t,d,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&Ze(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Ze(e,t,f,c,o,p)}function cv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,s=n.duration;if(r&&s&&cv(i)){for(i=0,s=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],u=l.startTime;if(u>s)break;var d=l.transferSize,f=l.initiatorType;d&&cv(f)&&(l=l.responseEnd,i+=d*(l<s?1:(s-u)/(l-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wb=null,yb=null;function mp(e){return e.nodeType===9?e:e.ownerDocument}function fv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tC(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vb(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Th=null;function OE(){var e=window.event;return e&&e.type==="popstate"?e===Th?!1:(Th=e,!0):(Th=null,!1)}var aC=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(e){return pv.resolve(null).then(e).catch(FE)}:aC;function FE(e){setTimeout(function(){throw e})}function oi(e){return e==="head"}function mv(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Ml(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")nu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,nu(a);for(var r=a.firstChild;r;){var i=r.nextSibling,s=r.nodeName;r[Su]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&nu(e.ownerDocument.body);a=n}while(a);Ml(t)}function gv(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Cb(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cb(a),Db(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function UE(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Su])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Uo(e.nextSibling),e===null)break}return null}function qE(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Uo(e.nextSibling),e===null))return null;return e}function oC(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Uo(e.nextSibling),e===null))return null;return e}function Sb(e){return e.data==="$?"||e.data==="$~"}function kb(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VE(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Uo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lb=null;function hv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Uo(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function bv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nC(e,t,a){switch(t=mp(a),e){case"html":if(e=t.documentElement,!e)throw Error(W(452));return e;case"head":if(e=t.head,!e)throw Error(W(453));return e;case"body":if(e=t.body,!e)throw Error(W(454));return e;default:throw Error(W(451))}}function nu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Db(e)}var qo=new Map,xv=new Set;function gp(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dr=Ge.d;Ge.d={f:GE,r:jE,D:XE,C:WE,L:YE,m:KE,X:$E,S:ZE,M:QE};function GE(){var e=dr.f(),t=Ap();return e||t}function jE(e){var t=El(e);t!==null&&t.tag===5&&t.type==="form"?$1(t):dr.r(e)}var Rl=typeof document>"u"?null:document;function rC(e,t,a){var o=Rl;if(o&&typeof t=="string"&&t){var n=Oo(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),xv.has(n)||(xv.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),ga(t,"link",e),oa(t),o.head.appendChild(t)))}}function XE(e){dr.D(e),rC("dns-prefetch",e,null)}function WE(e,t){dr.C(e,t),rC("preconnect",e,t)}function YE(e,t,a){dr.L(e,t,a);var o=Rl;if(o&&e&&t){var n='link[rel="preload"][as="'+Oo(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Oo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Oo(a.imageSizes)+'"]')):n+='[href="'+Oo(e)+'"]';var r=n;switch(t){case"style":r=Il(e);break;case"script":r=Pl(e)}qo.has(r)||(e=ct({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qo.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Nu(r))||t==="script"&&o.querySelector(Eu(r))||(t=o.createElement("link"),ga(t,"link",e),oa(t),o.head.appendChild(t)))}}function KE(e,t){dr.m(e,t);var a=Rl;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Oo(o)+'"][href="'+Oo(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Pl(e)}if(!qo.has(r)&&(e=ct({rel:"modulepreload",href:e},t),qo.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eu(r)))return}o=a.createElement("link"),ga(o,"link",e),oa(o),a.head.appendChild(o)}}}function ZE(e,t,a){dr.S(e,t,a);var o=Rl;if(o&&e){var n=cl(o).hoistableStyles,r=Il(e);t=t||"default";var i=n.get(r);if(!i){var s={loading:0,preload:null};if(i=o.querySelector(Nu(r)))s.loading=5;else{e=ct({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qo.get(r))&&xx(e,a);var l=i=o.createElement("link");oa(l),ga(l,"link",e),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Uf(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(r,i)}}}function $E(e,t){dr.X(e,t);var a=Rl;if(a&&e){var o=cl(a).hoistableScripts,n=Pl(e),r=o.get(n);r||(r=a.querySelector(Eu(n)),r||(e=ct({src:e,async:!0},t),(t=qo.get(n))&&wx(e,t),r=a.createElement("script"),oa(r),ga(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function QE(e,t){dr.M(e,t);var a=Rl;if(a&&e){var o=cl(a).hoistableScripts,n=Pl(e),r=o.get(n);r||(r=a.querySelector(Eu(n)),r||(e=ct({src:e,async:!0,type:"module"},t),(t=qo.get(n))&&wx(e,t),r=a.createElement("script"),oa(r),ga(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function wv(e,t,a,o){var n=(n=Vr.current)?gp(n):null;if(!n)throw Error(W(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Il(a.href),a=cl(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Il(a.href);var r=cl(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Nu(e)))&&!r._p&&(i.instance=r,i.state.loading=5),qo.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qo.set(e,a),r||JE(n,e,a,i.state))),t&&o===null)throw Error(W(528,""));return i}if(t&&o!==null)throw Error(W(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pl(a),a=cl(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(W(444,e))}}function Il(e){return'href="'+Oo(e)+'"'}function Nu(e){return'link[rel="stylesheet"]['+e+"]"}function iC(e){return ct({},e,{"data-precedence":e.precedence,precedence:null})}function JE(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),ga(t,"link",a),oa(t),e.head.appendChild(t))}function Pl(e){return'[src="'+Oo(e)+'"]'}function Eu(e){return"script[async]"+e}function yv(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Oo(a.href)+'"]');if(o)return t.instance=o,oa(o),o;var n=ct({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),oa(o),ga(o,"style",n),Uf(o,a.precedence,e),t.instance=o;case"stylesheet":n=Il(a.href);var r=e.querySelector(Nu(n));if(r)return t.state.loading|=4,t.instance=r,oa(r),r;o=iC(a),(n=qo.get(n))&&xx(o,n),r=(e.ownerDocument||e).createElement("link"),oa(r);var i=r;return i._p=new Promise(function(s,l){i.onload=s,i.onerror=l}),ga(r,"link",o),t.state.loading|=4,Uf(r,a.precedence,e),t.instance=r;case"script":return r=Pl(a.src),(n=e.querySelector(Eu(r)))?(t.instance=n,oa(n),n):(o=a,(n=qo.get(r))&&(o=ct({},a),wx(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),oa(n),ga(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(W(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Uf(o,a.precedence,e));return t.instance}function Uf(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var s=o[i];if(s.dataset.precedence===t)r=s;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function xx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qf=null;function vv(e,t,a){if(qf===null){var o=new Map,n=qf=new Map;n.set(a,o)}else n=qf,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Su]||r[fa]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var s=o.get(i);s?s.push(r):o.set(i,[r])}}return o}function Cv(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function eT(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sC(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tT(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Il(o.href),r=t.querySelector(Nu(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hp.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,oa(r);return}r=t.ownerDocument||t,o=iC(o),(n=qo.get(n))&&xx(o,n),r=r.createElement("link"),oa(r);var i=r;i._p=new Promise(function(s,l){i.onload=s,i.onerror=l}),ga(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hp.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ah=0;function aT(e,t){return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ah===0&&(Ah=62500*zE());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ah?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function hp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bp=null;function Vf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bp=new Map,t.forEach(oT,e),bp=null,hp.call(e))}function oT(e,t){if(!(t.state.loading&4)){var a=bp.get(e);if(a)var o=a.get(null);else{a=new Map,bp.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=hp.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hu={$$typeof:Qn,Provider:null,Consumer:null,_currentValue:Ri,_currentValue2:Ri,_threadCount:0};function nT(e,t,a,o,n,r,i,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.hiddenUpdates=nh(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function lC(e,t,a,o,n,r,i,s,l,u,d,f){return e=new nT(e,t,a,i,l,u,d,f,s),t=1,r===!0&&(t|=24),r=mo(3,null,null,t),e.current=r,r.stateNode=e,t=jb(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Yb(r),e}function dC(e){return e?(e=sl,e):sl}function uC(e,t,a,o,n,r){n=dC(n),o.context===null?o.context=n:o.pendingContext=n,o=jr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Xr(e,o,t),a!==null&&(Ja(a,e,t),Zd(a,e,t))}function Sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function yx(e,t){Sv(e,t),(e=e.alternate)&&Sv(e,t)}function cC(e){if(e.tag===13||e.tag===31){var t=Wi(e,67108864);t!==null&&Ja(t,e,67108864),yx(e,67108864)}}function kv(e){if(e.tag===13||e.tag===31){var t=wo();t=Tb(t);var a=Wi(e,t);a!==null&&Ja(a,e,t),yx(e,t)}}var xp=!0;function rT(e,t,a,o){var n=me.T;me.T=null;var r=Ge.p;try{Ge.p=2,vx(e,t,a,o)}finally{Ge.p=r,me.T=n}}function iT(e,t,a,o){var n=me.T;me.T=null;var r=Ge.p;try{Ge.p=8,vx(e,t,a,o)}finally{Ge.p=r,me.T=n}}function vx(e,t,a,o){if(xp){var n=_b(o);if(n===null)Eh(e,t,o,wp,a),Lv(e,o);else if(lT(n,e,t,a,o))o.stopPropagation();else if(Lv(e,o),t&4&&-1<sT.indexOf(e)){for(;n!==null;){var r=El(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Ti(r.pendingLanes);if(i!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var l=1<<31-xo(i);s.entanglements[1]|=l,i&=~l}kn(r),(Ve&6)===0&&(lp=ho()+500,Mu(0,!1))}}break;case 31:case 13:s=Wi(r,2),s!==null&&Ja(s,r,2),Ap(),yx(r,2)}if(r=_b(o),r===null&&Eh(e,t,o,wp,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Eh(e,t,o,null,a)}}function _b(e){return e=Pb(e),Cx(e)}var wp=null;function Cx(e){if(wp=null,e=tl(e),e!==null){var t=wu(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Tv(t),e!==null)return e;e=null}else if(a===31){if(e=Av(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wp=e,null}function fC(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y3()){case zv:return 2;case Ov:return 8;case Yf:case K3:return 32;case Hv:return 268435456;default:return 32}default:return 32}}var Ib=!1,Kr=null,Zr=null,$r=null,bu=new Map,xu=new Map,Or=[],sT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lv(e,t){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":bu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(t.pointerId)}}function Bd(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=El(t),t!==null&&cC(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function lT(e,t,a,o,n){switch(t){case"focusin":return Kr=Bd(Kr,e,t,a,o,n),!0;case"dragenter":return Zr=Bd(Zr,e,t,a,o,n),!0;case"mouseover":return $r=Bd($r,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return bu.set(r,Bd(bu.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,xu.set(r,Bd(xu.get(r)||null,e,t,a,o,n)),!0}return!1}function pC(e){var t=tl(e.target);if(t!==null){var a=wu(t);if(a!==null){if(t=a.tag,t===13){if(t=Tv(a),t!==null){e.blockedOn=t,ly(e.priority,function(){kv(a)});return}}else if(t===31){if(t=Av(a),t!==null){e.blockedOn=t,ly(e.priority,function(){kv(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_b(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);jh=o,a.target.dispatchEvent(o),jh=null}else return t=El(a),t!==null&&cC(t),e.blockedOn=a,!1;t.shift()}return!0}function _v(e,t,a){Gf(e)&&a.delete(t)}function dT(){Ib=!1,Kr!==null&&Gf(Kr)&&(Kr=null),Zr!==null&&Gf(Zr)&&(Zr=null),$r!==null&&Gf($r)&&($r=null),bu.forEach(_v),xu.forEach(_v)}function Mf(e,t){e.blockedOn===t&&(e.blockedOn=null,Ib||(Ib=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,dT)))}var Nf=null;function Iv(e){Nf!==e&&(Nf=e,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,function(){Nf===e&&(Nf=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(Cx(o||a)===null)continue;break}var r=El(a);r!==null&&(e.splice(t,3),t-=3,sb(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Ml(e){function t(l){return Mf(l,e)}Kr!==null&&Mf(Kr,e),Zr!==null&&Mf(Zr,e),$r!==null&&Mf($r,e),bu.forEach(t),xu.forEach(t);for(var a=0;a<Or.length;a++){var o=Or[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Or.length&&(a=Or[0],a.blockedOn===null);)pC(a),a.blockedOn===null&&Or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[eo]||null;if(typeof r=="function")i||Iv(a);else if(i){var s=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[eo]||null)s=i.formAction;else if(Cx(n)!==null)continue}else s=i.action;typeof s=="function"?a[o+1]=s:(a.splice(o,3),o-=3),Iv(a)}}}function mC(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Sx(e){this._internalRoot=e}Pp.prototype.render=Sx.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));var a=t.current,o=wo();uC(a,o,e,t,null,null)};Pp.prototype.unmount=Sx.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;uC(e.current,2,null,e,null,null),Ap(),t[Nl]=null}};function Pp(e){this._internalRoot=e}Pp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vv();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Or.length&&t!==0&&t<Or[a].priority;a++);Or.splice(a,0,e),a===0&&pC(e)}};var Mv=Nv.version;if(Mv!=="19.2.8")throw Error(W(527,Mv,"19.2.8"));Ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=U3(t),e=e!==null?Dv(e):null,e=e===null?null:e.stateNode,e};var uT={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:me,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fd=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fd.isDisabled&&Fd.supportsFiber))try{yu=Fd.inject(uT),bo=Fd}catch{}var Fd;zp.createRoot=function(e,t){if(!Ev(e))throw Error(W(299));var a=!1,o="",n=r2,r=i2,i=s2;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lC(e,1,!1,null,null,a,o,null,n,r,i,mC),e[Nl]=t.current,bx(e),new Sx(t)};zp.hydrateRoot=function(e,t,a){if(!Ev(e))throw Error(W(299));var o=!1,n="",r=r2,i=i2,s=s2,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),t=lC(e,1,!0,t,a??null,o,n,l,r,i,s,mC),t.context=dC(null),a=t.current,o=wo(),o=Tb(o),n=jr(o),n.callback=null,Xr(a,n,o),a=o,t.current.lanes=a,Cu(t,a),kn(t),e[Nl]=t.current,bx(e),new Pp(t)};zp.version="19.2.8"});var kx=Ya((V7,bC)=>{"use strict";function hC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hC)}catch(e){console.error(e)}}hC(),bC.exports=gC()});var wC=Ya(Op=>{"use strict";var cT=Symbol.for("react.transitional.element"),fT=Symbol.for("react.fragment");function xC(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:cT,type:e,key:o,ref:t!==void 0?t:null,props:a}}Op.Fragment=fT;Op.jsx=xC;Op.jsxs=xC});var X=Ya((j7,yC)=>{"use strict";yC.exports=wC()});var nL=Ya(oL=>{"use strict";var $l=Q();function i8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var s8=typeof Object.is=="function"?Object.is:i8,l8=$l.useState,d8=$l.useEffect,u8=$l.useLayoutEffect,c8=$l.useDebugValue;function f8(e,t){var a=t(),o=l8({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return u8(function(){n.value=a,n.getSnapshot=t,p0(n)&&r({inst:n})},[e,a,t]),d8(function(){return p0(n)&&r({inst:n}),e(function(){p0(n)&&r({inst:n})})},[e]),c8(a),a}function p0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!s8(e,a)}catch{return!0}}function p8(e,t){return t()}var m8=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p8:f8;oL.useSyncExternalStore=$l.useSyncExternalStore!==void 0?$l.useSyncExternalStore:m8});var iL=Ya((HV,rL)=>{"use strict";rL.exports=nL()});var lL=Ya(sL=>{"use strict";var Mm=Q(),g8=iL();function h8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var b8=typeof Object.is=="function"?Object.is:h8,x8=g8.useSyncExternalStore,w8=Mm.useRef,y8=Mm.useEffect,v8=Mm.useMemo,C8=Mm.useDebugValue;sL.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=w8(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=v8(function(){function l(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var g=i.value;if(n(g,p))return f=g}return f=p}if(g=f,b8(d,p))return g;var w=o(p);return n!==void 0&&n(g,w)?(d=p,g):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return l(t())},c===null?void 0:function(){return l(c())}]},[t,a,o,n]);var s=x8(e,r[0],r[1]);return y8(function(){i.hasValue=!0,i.value=s},[s]),C8(s),s}});var uL=Ya((FV,dL)=>{"use strict";dL.exports=lL()});var R7={};x3(R7,{mountCanvas:()=>T7,unmountCanvas:()=>D7,updateCanvas:()=>A7});var HN=I(kx(),1);var kd=I(Q(),1);var Ce=I(Q(),1);var V=I(X()),G=I(Q());function It(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=It(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var pT={value:()=>{}};function CC(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new Hp(a)}function Hp(e){this._=e}function mT(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}Hp.prototype=CC.prototype={constructor:Hp,on:function(e,t){var a=this._,o=mT(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=gT(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=vC(a[n],e.name,t);else if(t==null)for(n in a)a[n]=vC(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new Hp(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function gT(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function vC(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=pT,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Ki=CC;var Bp="http://www.w3.org/1999/xhtml",Lx={svg:"http://www.w3.org/2000/svg",xhtml:Bp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ur(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),Lx.hasOwnProperty(t)?{space:Lx[t],local:e}:e}function hT(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Bp&&t.documentElement.namespaceURI===Bp?t.createElement(e):t.createElementNS(a,e)}}function bT(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Fp(e){var t=ur(e);return(t.local?bT:hT)(t)}function xT(){}function Zi(e){return e==null?xT:function(){return this.querySelector(e)}}function SC(e){typeof e!="function"&&(e=Zi(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=new Array(i),l,u,d=0;d<i;++d)(l=r[d])&&(u=e.call(l,l.__data__,d,r))&&("__data__"in l&&(u.__data__=l.__data__),s[d]=u);return new Mt(o,this._parents)}function _x(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function wT(){return[]}function Tu(e){return e==null?wT:function(){return this.querySelectorAll(e)}}function yT(e){return function(){return _x(e.apply(this,arguments))}}function kC(e){typeof e=="function"?e=yT(e):e=Tu(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],s=i.length,l,u=0;u<s;++u)(l=i[u])&&(o.push(e.call(l,l.__data__,u,i)),n.push(l));return new Mt(o,n)}function Au(e){return function(){return this.matches(e)}}function Up(e){return function(t){return t.matches(e)}}var vT=Array.prototype.find;function CT(e){return function(){return vT.call(this.children,e)}}function ST(){return this.firstElementChild}function LC(e){return this.select(e==null?ST:CT(typeof e=="function"?e:Up(e)))}var kT=Array.prototype.filter;function LT(){return Array.from(this.children)}function _T(e){return function(){return kT.call(this.children,e)}}function _C(e){return this.selectAll(e==null?LT:_T(typeof e=="function"?e:Up(e)))}function IC(e){typeof e!="function"&&(e=Au(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=[],l,u=0;u<i;++u)(l=r[u])&&e.call(l,l.__data__,u,r)&&s.push(l);return new Mt(o,this._parents)}function qp(e){return new Array(e.length)}function MC(){return new Mt(this._enter||this._groups.map(qp),this._parents)}function Du(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Du.prototype={constructor:Du,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function NC(e){return function(){return e}}function IT(e,t,a,o,n,r){for(var i=0,s,l=t.length,u=r.length;i<u;++i)(s=t[i])?(s.__data__=r[i],o[i]=s):a[i]=new Du(e,r[i]);for(;i<l;++i)(s=t[i])&&(n[i]=s)}function MT(e,t,a,o,n,r,i){var s,l,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(s=0;s<d;++s)(l=t[s])&&(c[s]=p=i.call(l,l.__data__,s,t)+"",u.has(p)?n[s]=l:u.set(p,l));for(s=0;s<f;++s)p=i.call(e,r[s],s,r)+"",(l=u.get(p))?(o[s]=l,l.__data__=r[s],u.delete(p)):a[s]=new Du(e,r[s]);for(s=0;s<d;++s)(l=t[s])&&u.get(c[s])===l&&(n[s]=l)}function NT(e){return e.__data__}function EC(e,t){if(!arguments.length)return Array.from(this,NT);var a=t?MT:IT,o=this._parents,n=this._groups;typeof e!="function"&&(e=NC(e));for(var r=n.length,i=new Array(r),s=new Array(r),l=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=ET(e.call(d,d&&d.__data__,u,o)),g=p.length,w=s[u]=new Array(g),y=i[u]=new Array(g),h=l[u]=new Array(c);a(d,f,w,y,h,p,t);for(var b=0,m=0,x,v;b<g;++b)if(x=w[b]){for(b>=m&&(m=b+1);!(v=y[m])&&++m<g;);x._next=v||null}}return i=new Mt(i,o),i._enter=s,i._exit=l,i}function ET(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function TC(){return new Mt(this._exit||this._groups.map(qp),this._parents)}function AC(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function DC(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),s=new Array(n),l=0;l<i;++l)for(var u=a[l],d=o[l],f=u.length,c=s[l]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;l<n;++l)s[l]=a[l];return new Mt(s,this._parents)}function RC(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function PC(e){e||(e=TT);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],s=i.length,l=n[r]=new Array(s),u,d=0;d<s;++d)(u=i[d])&&(l[d]=u);l.sort(t)}return new Mt(n,this._parents).order()}function TT(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function zC(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function OC(){return Array.from(this)}function HC(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function BC(){let e=0;for(let t of this)++e;return e}function FC(){return!this.node()}function UC(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,s;r<i;++r)(s=n[r])&&e.call(s,s.__data__,r,n);return this}function AT(e){return function(){this.removeAttribute(e)}}function DT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function RT(e,t){return function(){this.setAttribute(e,t)}}function PT(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function zT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function OT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function qC(e,t){var a=ur(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?DT:AT:typeof t=="function"?a.local?OT:zT:a.local?PT:RT)(a,t))}function Vp(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function HT(e){return function(){this.style.removeProperty(e)}}function BT(e,t,a){return function(){this.style.setProperty(e,t,a)}}function FT(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function VC(e,t,a){return arguments.length>1?this.each((t==null?HT:typeof t=="function"?FT:BT)(e,t,a??"")):ni(this.node(),e)}function ni(e,t){return e.style.getPropertyValue(t)||Vp(e).getComputedStyle(e,null).getPropertyValue(t)}function UT(e){return function(){delete this[e]}}function qT(e,t){return function(){this[e]=t}}function VT(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function GC(e,t){return arguments.length>1?this.each((t==null?UT:typeof t=="function"?VT:qT)(e,t)):this.node()[e]}function jC(e){return e.trim().split(/^|\s+/)}function Ix(e){return e.classList||new XC(e)}function XC(e){this._node=e,this._names=jC(e.getAttribute("class")||"")}XC.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function WC(e,t){for(var a=Ix(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function YC(e,t){for(var a=Ix(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function GT(e){return function(){WC(this,e)}}function jT(e){return function(){YC(this,e)}}function XT(e,t){return function(){(t.apply(this,arguments)?WC:YC)(this,e)}}function KC(e,t){var a=jC(e+"");if(arguments.length<2){for(var o=Ix(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?XT:t?GT:jT)(a,t))}function WT(){this.textContent=""}function YT(e){return function(){this.textContent=e}}function KT(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function ZC(e){return arguments.length?this.each(e==null?WT:(typeof e=="function"?KT:YT)(e)):this.node().textContent}function ZT(){this.innerHTML=""}function $T(e){return function(){this.innerHTML=e}}function QT(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function $C(e){return arguments.length?this.each(e==null?ZT:(typeof e=="function"?QT:$T)(e)):this.node().innerHTML}function JT(){this.nextSibling&&this.parentNode.appendChild(this)}function QC(){return this.each(JT)}function eA(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function JC(){return this.each(eA)}function eS(e){var t=typeof e=="function"?e:Fp(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function tA(){return null}function tS(e,t){var a=typeof e=="function"?e:Fp(e),o=t==null?tA:typeof t=="function"?t:Zi(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function aA(){var e=this.parentNode;e&&e.removeChild(this)}function aS(){return this.each(aA)}function oA(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function nA(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function oS(e){return this.select(e?nA:oA)}function nS(e){return arguments.length?this.property("__data__",e):this.node().__data__}function rA(e){return function(t){e.call(this,t,this.__data__)}}function iA(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function sA(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function lA(e,t,a){return function(){var o=this.__on,n,r=rA(t);if(o){for(var i=0,s=o.length;i<s;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function rS(e,t,a){var o=iA(e+""),n,r=o.length,i;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,u=s.length,d;l<u;++l)for(n=0,d=s[l];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(s=t?lA:sA,n=0;n<r;++n)this.each(s(o[n],t,a));return this}function iS(e,t,a){var o=Vp(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function dA(e,t){return function(){return iS(this,e,t)}}function uA(e,t){return function(){return iS(this,e,t.apply(this,arguments))}}function sS(e,t){return this.each((typeof t=="function"?uA:dA)(e,t))}function*lS(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var Mx=[null];function Mt(e,t){this._groups=e,this._parents=t}function dS(){return new Mt([[document.documentElement]],Mx)}function cA(){return this}Mt.prototype=dS.prototype={constructor:Mt,select:SC,selectAll:kC,selectChild:LC,selectChildren:_C,filter:IC,data:EC,enter:MC,exit:TC,join:AC,merge:DC,selection:cA,order:RC,sort:PC,call:zC,nodes:OC,node:HC,size:BC,empty:FC,each:UC,attr:qC,style:VC,property:GC,classed:KC,text:ZC,html:$C,raise:QC,lower:JC,append:eS,insert:tS,remove:aS,clone:oS,datum:nS,on:rS,dispatch:sS,[Symbol.iterator]:lS};var cr=dS;function ra(e){return typeof e=="string"?new Mt([[document.querySelector(e)]],[document.documentElement]):new Mt([[e]],Mx)}function uS(e){let t;for(;t=e.sourceEvent;)e=t;return e}function za(e,t){if(e=uS(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var cS={passive:!1},$i={capture:!0,passive:!1};function Gp(e){e.stopImmediatePropagation()}function ri(e){e.preventDefault(),e.stopImmediatePropagation()}function Ru(e){var t=e.document.documentElement,a=ra(e).on("dragstart.drag",ri,$i);"onselectstart"in t?a.on("selectstart.drag",ri,$i):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Pu(e,t){var a=e.document.documentElement,o=ra(e).on("dragstart.drag",null);t&&(o.on("click.drag",ri,$i),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var zu=e=>()=>e;function Ou(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:s,dx:l,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Ou.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function fA(e){return!e.ctrlKey&&!e.button}function pA(){return this.parentNode}function mA(e,t){return t??{x:e.x,y:e.y}}function gA(){return navigator.maxTouchPoints||"ontouchstart"in this}function jp(){var e=fA,t=pA,a=mA,o=gA,n={},r=Ki("start","drag","end"),i=0,s,l,u,d,f=0;function c(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",h,cS).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,v){if(!(d||!e.call(this,x,v))){var C=m(this,t.call(this,x,v),x,v,"mouse");C&&(ra(x.view).on("mousemove.drag",g,$i).on("mouseup.drag",w,$i),Ru(x.view),Gp(x),u=!1,s=x.clientX,l=x.clientY,C("start",x))}}function g(x){if(ri(x),!u){var v=x.clientX-s,C=x.clientY-l;u=v*v+C*C>f}n.mouse("drag",x)}function w(x){ra(x.view).on("mousemove.drag mouseup.drag",null),Pu(x.view,u),ri(x),n.mouse("end",x)}function y(x,v){if(e.call(this,x,v)){var C=x.changedTouches,S=t.call(this,x,v),k=C.length,_,T;for(_=0;_<k;++_)(T=m(this,S,x,v,C[_].identifier,C[_]))&&(Gp(x),T("start",x,C[_]))}}function h(x){var v=x.changedTouches,C=v.length,S,k;for(S=0;S<C;++S)(k=n[v[S].identifier])&&(ri(x),k("drag",x,v[S]))}function b(x){var v=x.changedTouches,C=v.length,S,k;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),S=0;S<C;++S)(k=n[v[S].identifier])&&(Gp(x),k("end",x,v[S]))}function m(x,v,C,S,k,_){var T=r.copy(),R=za(_||C,v),H,U,L;if((L=a.call(x,new Ou("beforestart",{sourceEvent:C,target:c,identifier:k,active:i,x:R[0],y:R[1],dx:0,dy:0,dispatch:T}),S))!=null)return H=L.x-R[0]||0,U=L.y-R[1]||0,function N(E,M,A){var O=R,D;switch(E){case"start":n[k]=N,D=i++;break;case"end":delete n[k],--i;case"drag":R=za(A||M,v),D=i;break}T.call(E,x,new Ou(E,{sourceEvent:M,subject:L,target:c,identifier:k,active:D,x:R[0]+H,y:R[1]+U,dx:R[0]-O[0],dy:R[1]-O[1],dispatch:T}),S)}}return c.filter=function(x){return arguments.length?(e=typeof x=="function"?x:zu(!!x),c):e},c.container=function(x){return arguments.length?(t=typeof x=="function"?x:zu(x),c):t},c.subject=function(x){return arguments.length?(a=typeof x=="function"?x:zu(x),c):a},c.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:zu(!!x),c):o},c.on=function(){var x=r.on.apply(r,arguments);return x===r?c:x},c.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,c):Math.sqrt(f)},c}function Xp(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Nx(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Fu(){}var Hu=.7,Kp=1/Hu,zl="\\s*([+-]?\\d+)\\s*",Bu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ln="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hA=/^#([0-9a-f]{3,8})$/,bA=new RegExp(`^rgb\\(${zl},${zl},${zl}\\)$`),xA=new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`),wA=new RegExp(`^rgba\\(${zl},${zl},${zl},${Bu}\\)$`),yA=new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${Bu}\\)$`),vA=new RegExp(`^hsl\\(${Bu},${Ln},${Ln}\\)$`),CA=new RegExp(`^hsla\\(${Bu},${Ln},${Ln},${Bu}\\)$`),fS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Xp(Fu,Jo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:pS,formatHex:pS,formatHex8:SA,formatHsl:kA,formatRgb:mS,toString:mS});function pS(){return this.rgb().formatHex()}function SA(){return this.rgb().formatHex8()}function kA(){return yS(this).formatHsl()}function mS(){return this.rgb().formatRgb()}function Jo(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=hA.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?gS(t):a===3?new ao(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Wp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Wp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=bA.exec(e))?new ao(t[1],t[2],t[3],1):(t=xA.exec(e))?new ao(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=wA.exec(e))?Wp(t[1],t[2],t[3],t[4]):(t=yA.exec(e))?Wp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=vA.exec(e))?xS(t[1],t[2]/100,t[3]/100,1):(t=CA.exec(e))?xS(t[1],t[2]/100,t[3]/100,t[4]):fS.hasOwnProperty(e)?gS(fS[e]):e==="transparent"?new ao(NaN,NaN,NaN,0):null}function gS(e){return new ao(e>>16&255,e>>8&255,e&255,1)}function Wp(e,t,a,o){return o<=0&&(e=t=a=NaN),new ao(e,t,a,o)}function LA(e){return e instanceof Fu||(e=Jo(e)),e?(e=e.rgb(),new ao(e.r,e.g,e.b,e.opacity)):new ao}function Ol(e,t,a,o){return arguments.length===1?LA(e):new ao(e,t,a,o??1)}function ao(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}Xp(ao,Ol,Nx(Fu,{brighter(e){return e=e==null?Kp:Math.pow(Kp,e),new ao(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Hu:Math.pow(Hu,e),new ao(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ao(Ji(this.r),Ji(this.g),Ji(this.b),Zp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:hS,formatHex:hS,formatHex8:_A,formatRgb:bS,toString:bS}));function hS(){return`#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}`}function _A(){return`#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}${Qi((isNaN(this.opacity)?1:this.opacity)*255)}`}function bS(){let e=Zp(this.opacity);return`${e===1?"rgb(":"rgba("}${Ji(this.r)}, ${Ji(this.g)}, ${Ji(this.b)}${e===1?")":`, ${e})`}`}function Zp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ji(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qi(e){return e=Ji(e),(e<16?"0":"")+e.toString(16)}function xS(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new Qo(e,t,a,o)}function yS(e){if(e instanceof Qo)return new Qo(e.h,e.s,e.l,e.opacity);if(e instanceof Fu||(e=Jo(e)),!e)return new Qo;if(e instanceof Qo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,s=r-n,l=(r+n)/2;return s?(t===r?i=(a-o)/s+(a<o)*6:a===r?i=(o-t)/s+2:i=(t-a)/s+4,s/=l<.5?r+n:2-r-n,i*=60):s=l>0&&l<1?0:i,new Qo(i,s,l,e.opacity)}function vS(e,t,a,o){return arguments.length===1?yS(e):new Qo(e,t,a,o??1)}function Qo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}Xp(Qo,vS,Nx(Fu,{brighter(e){return e=e==null?Kp:Math.pow(Kp,e),new Qo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Hu:Math.pow(Hu,e),new Qo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new ao(Ex(e>=240?e-240:e+120,n,o),Ex(e,n,o),Ex(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Qo(wS(this.h),Yp(this.s),Yp(this.l),Zp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Zp(this.opacity);return`${e===1?"hsl(":"hsla("}${wS(this.h)}, ${Yp(this.s)*100}%, ${Yp(this.l)*100}%${e===1?")":`, ${e})`}`}}));function wS(e){return e=(e||0)%360,e<0?e+360:e}function Yp(e){return Math.max(0,Math.min(1,e||0))}function Ex(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Tx(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function CS(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,s=o<t-1?e[o+2]:2*r-n;return Tx((a-o/t)*t,i,n,r,s)}}function SS(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],s=e[(o+2)%t];return Tx((a-o/t)*t,n,r,i,s)}}var Uu=e=>()=>e;function IA(e,t){return function(a){return e+a*t}}function MA(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function kS(e){return(e=+e)==1?$p:function(t,a){return a-t?MA(t,a,e):Uu(isNaN(t)?a:t)}}function $p(e,t){var a=t-e;return a?IA(e,a):Uu(isNaN(e)?t:e)}var es=(function e(t){var a=kS(t);function o(n,r){var i=a((n=Ol(n)).r,(r=Ol(r)).r),s=a(n.g,r.g),l=a(n.b,r.b),u=$p(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=s(d),n.b=l(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function LS(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,s;for(i=0;i<a;++i)s=Ol(t[i]),o[i]=s.r||0,n[i]=s.g||0,r[i]=s.b||0;return o=e(o),n=e(n),r=e(r),s.opacity=1,function(l){return s.r=o(l),s.g=n(l),s.b=r(l),s+""}}}var NA=LS(CS),EA=LS(SS);function _S(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function IS(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function MS(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=fr(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(s){for(i=0;i<o;++i)r[i]=n[i](s);return r}}function NS(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Oa(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function ES(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=fr(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Dx=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ax=new RegExp(Dx.source,"g");function TA(e){return function(){return e}}function AA(e){return function(t){return e(t)+""}}function qu(e,t){var a=Dx.lastIndex=Ax.lastIndex=0,o,n,r,i=-1,s=[],l=[];for(e=e+"",t=t+"";(o=Dx.exec(e))&&(n=Ax.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),s[i]?s[i]+=r:s[++i]=r),(o=o[0])===(n=n[0])?s[i]?s[i]+=n:s[++i]=n:(s[++i]=null,l.push({i,x:Oa(o,n)})),a=Ax.lastIndex;return a<t.length&&(r=t.slice(a),s[i]?s[i]+=r:s[++i]=r),s.length<2?l[0]?AA(l[0].x):TA(t):(t=l.length,function(u){for(var d=0,f;d<t;++d)s[(f=l[d]).i]=f.x(u);return s.join("")})}function fr(e,t){var a=typeof t,o;return t==null||a==="boolean"?Uu(t):(a==="number"?Oa:a==="string"?(o=Jo(t))?(t=o,es):qu:t instanceof Jo?es:t instanceof Date?NS:IS(t)?_S:Array.isArray(t)?MS:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ES:Oa)(e,t)}var TS=180/Math.PI,Qp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Rx(e,t,a,o,n,r){var i,s,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*a+t*o)&&(a-=e*l,o-=t*l),(s=Math.sqrt(a*a+o*o))&&(a/=s,o/=s,l/=s),e*o<t*a&&(e=-e,t=-t,l=-l,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*TS,skewX:Math.atan(l)*TS,scaleX:i,scaleY:s}}var Jp;function AS(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Qp:Rx(t.a,t.b,t.c,t.d,t.e,t.f)}function DS(e){return e==null?Qp:(Jp||(Jp=document.createElementNS("http://www.w3.org/2000/svg","g")),Jp.setAttribute("transform",e),(e=Jp.transform.baseVal.consolidate())?(e=e.matrix,Rx(e.a,e.b,e.c,e.d,e.e,e.f)):Qp)}function RS(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);g.push({i:w-4,x:Oa(u,f)},{i:w-2,x:Oa(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Oa(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function s(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Oa(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function l(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");g.push({i:w-4,x:Oa(u,f)},{i:w-2,x:Oa(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),s(u.skewX,d.skewX,f,c),l(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,w=c.length,y;++g<w;)f[(y=c[g]).i]=y.x(p);return f.join("")}}}var Px=RS(AS,"px, ","px)","deg)"),zx=RS(DS,", ",")",")");var DA=1e-12;function PS(e){return((e=Math.exp(e))+1/e)/2}function RA(e){return((e=Math.exp(e))-1/e)/2}function PA(e){return((e=Math.exp(2*e))-1)/(e+1)}var ts=(function e(t,a,o){function n(r,i){var s=r[0],l=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-s,g=f-l,w=p*p+g*g,y,h;if(w<DA)h=Math.log(c/u)/t,y=function(S){return[s+S*p,l+S*g,u*Math.exp(t*S*h)]};else{var b=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*b),x=(c*c-u*u-o*w)/(2*c*a*b),v=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(x*x+1)-x);h=(C-v)/t,y=function(S){var k=S*h,_=PS(v),T=u/(a*b)*(_*PA(t*k+v)-RA(v));return[s+T*p,l+T*g,u*_/PS(t*k+v)]}}return y.duration=h*1e3*t/Math.SQRT2,y}return n.rho=function(r){var i=Math.max(.001,+r),s=i*i,l=s*s;return e(i,s,l)},n})(Math.SQRT2,2,4);var Hl=0,Gu=0,Vu=0,OS=1e3,em,ju,tm=0,as=0,am=0,Xu=typeof performance=="object"&&performance.now?performance:Date,HS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Yu(){return as||(HS(zA),as=Xu.now()+am)}function zA(){as=0}function Wu(){this._call=this._time=this._next=null}Wu.prototype=om.prototype={constructor:Wu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?Yu():+a)+(t==null?0:+t),!this._next&&ju!==this&&(ju?ju._next=this:em=this,ju=this),this._call=e,this._time=a,Ox()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ox())}};function om(e,t,a){var o=new Wu;return o.restart(e,t,a),o}function BS(){Yu(),++Hl;for(var e=em,t;e;)(t=as-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Hl}function zS(){as=(tm=Xu.now())+am,Hl=Gu=0;try{BS()}finally{Hl=0,HA(),as=0}}function OA(){var e=Xu.now(),t=e-tm;t>OS&&(am-=t,tm=e)}function HA(){for(var e,t=em,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:em=a);ju=e,Ox(o)}function Ox(e){if(!Hl){Gu&&(Gu=clearTimeout(Gu));var t=e-as;t>24?(e<1/0&&(Gu=setTimeout(zS,e-Xu.now()-am)),Vu&&(Vu=clearInterval(Vu))):(Vu||(tm=Xu.now(),Vu=setInterval(OA,OS)),Hl=1,HS(zS))}}function nm(e,t,a){var o=new Wu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var BA=Ki("start","end","cancel","interrupt"),FA=[],qS=0,FS=1,im=2,rm=3,US=4,sm=5,Ku=6;function ii(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;UA(e,a,{name:t,index:o,group:n,on:BA,tween:FA,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:qS})}function Zu(e,t){var a=Wt(e,t);if(a.state>qS)throw new Error("too late; already scheduled");return a}function ha(e,t){var a=Wt(e,t);if(a.state>rm)throw new Error("too late; already running");return a}function Wt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function UA(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=om(r,0,a.time);function r(u){a.state=FS,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==FS)return l();for(d in o)if(p=o[d],p.name===a.name){if(p.state===rm)return nm(i);p.state===US?(p.state=Ku,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=Ku,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(nm(function(){a.state===rm&&(a.state=US,a.timer.restart(s,a.delay,a.time),s(u))}),a.state=im,a.on.call("start",e,e.__data__,a.index,a.group),a.state===im){for(a.state=rm,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function s(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(l),a.state=sm,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===sm&&(a.on.call("end",e,e.__data__,a.index,a.group),l())}function l(){a.state=Ku,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function os(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>im&&o.state<sm,o.state=Ku,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function VS(e){return this.each(function(){os(this,e)})}function qA(e,t){var a,o;return function(){var n=ha(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,s=o.length;i<s;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function VA(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=ha(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var s={name:t,value:a},l=0,u=n.length;l<u;++l)if(n[l].name===t){n[l]=s;break}l===u&&n.push(s)}r.tween=n}}function GS(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Wt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?qA:VA)(a,e,t))}function Bl(e,t,a){var o=e._id;return e.each(function(){var n=ha(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Wt(n,o).value[t]}}function lm(e,t){var a;return(typeof t=="number"?Oa:t instanceof Jo?es:(a=Jo(t))?(t=a,es):qu)(e,t)}function GA(e){return function(){this.removeAttribute(e)}}function jA(e){return function(){this.removeAttributeNS(e.space,e.local)}}function XA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function WA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function YA(e,t,a){var o,n,r;return function(){var i,s=a(this),l;return s==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=s+"",i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s)))}}function KA(e,t,a){var o,n,r;return function(){var i,s=a(this),l;return s==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=s+"",i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s)))}}function jS(e,t){var a=ur(e),o=a==="transform"?zx:lm;return this.attrTween(e,typeof t=="function"?(a.local?KA:YA)(a,o,Bl(this,"attr."+e,t)):t==null?(a.local?jA:GA)(a):(a.local?WA:XA)(a,o,t))}function ZA(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function $A(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function QA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&$A(e,r)),a}return n._value=t,n}function JA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&ZA(e,r)),a}return n._value=t,n}function XS(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=ur(e);return this.tween(a,(o.local?QA:JA)(o,t))}function e6(e,t){return function(){Zu(this,e).delay=+t.apply(this,arguments)}}function t6(e,t){return t=+t,function(){Zu(this,e).delay=t}}function WS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?e6:t6)(t,e)):Wt(this.node(),t).delay}function a6(e,t){return function(){ha(this,e).duration=+t.apply(this,arguments)}}function o6(e,t){return t=+t,function(){ha(this,e).duration=t}}function YS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?a6:o6)(t,e)):Wt(this.node(),t).duration}function n6(e,t){if(typeof t!="function")throw new Error;return function(){ha(this,e).ease=t}}function KS(e){var t=this._id;return arguments.length?this.each(n6(t,e)):Wt(this.node(),t).ease}function r6(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;ha(this,e).ease=a}}function ZS(e){if(typeof e!="function")throw new Error;return this.each(r6(this._id,e))}function $S(e){typeof e!="function"&&(e=Au(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=[],l,u=0;u<i;++u)(l=r[u])&&e.call(l,l.__data__,u,r)&&s.push(l);return new Ha(o,this._parents,this._name,this._id)}function QS(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),s=0;s<r;++s)for(var l=t[s],u=a[s],d=l.length,f=i[s]=new Array(d),c,p=0;p<d;++p)(c=l[p]||u[p])&&(f[p]=c);for(;s<o;++s)i[s]=t[s];return new Ha(i,this._parents,this._name,this._id)}function i6(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function s6(e,t,a){var o,n,r=i6(t)?Zu:ha;return function(){var i=r(this,e),s=i.on;s!==o&&(n=(o=s).copy()).on(t,a),i.on=n}}function JS(e,t){var a=this._id;return arguments.length<2?Wt(this.node(),a).on.on(e):this.each(s6(a,e,t))}function l6(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function ek(){return this.on("end.remove",l6(this._id))}function tk(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Zi(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var s=o[i],l=s.length,u=r[i]=new Array(l),d,f,c=0;c<l;++c)(d=s[c])&&(f=e.call(d,d.__data__,c,s))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,ii(u[c],t,a,c,u,Wt(d,a)));return new Ha(r,this._parents,t,a)}function ak(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Tu(e));for(var o=this._groups,n=o.length,r=[],i=[],s=0;s<n;++s)for(var l=o[s],u=l.length,d,f=0;f<u;++f)if(d=l[f]){for(var c=e.call(d,d.__data__,f,l),p,g=Wt(d,a),w=0,y=c.length;w<y;++w)(p=c[w])&&ii(p,t,a,w,c,g);r.push(c),i.push(d)}return new Ha(r,i,t,a)}var d6=cr.prototype.constructor;function ok(){return new d6(this._groups,this._parents)}function u6(e,t){var a,o,n;return function(){var r=ni(this,e),i=(this.style.removeProperty(e),ni(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function nk(e){return function(){this.style.removeProperty(e)}}function c6(e,t,a){var o,n=a+"",r;return function(){var i=ni(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function f6(e,t,a){var o,n,r;return function(){var i=ni(this,e),s=a(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(e),ni(this,e))),i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s))}}function p6(e,t){var a,o,n,r="style."+t,i="end."+r,s;return function(){var l=ha(this,e),u=l.on,d=l.value[r]==null?s||(s=nk(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),l.on=o}}function rk(e,t,a){var o=(e+="")=="transform"?Px:lm;return t==null?this.styleTween(e,u6(e,o)).on("end.style."+e,nk(e)):typeof t=="function"?this.styleTween(e,f6(e,o,Bl(this,"style."+e,t))).each(p6(this._id,e)):this.styleTween(e,c6(e,o,t),a).on("end.style."+e,null)}function m6(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function g6(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&m6(e,i,a)),o}return r._value=t,r}function ik(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,g6(e,t,a??""))}function h6(e){return function(){this.textContent=e}}function b6(e){return function(){var t=e(this);this.textContent=t??""}}function sk(e){return this.tween("text",typeof e=="function"?b6(Bl(this,"text",e)):h6(e==null?"":e+""))}function x6(e){return function(t){this.textContent=e.call(this,t)}}function w6(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&x6(n)),t}return o._value=e,o}function lk(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,w6(e))}function dk(){for(var e=this._name,t=this._id,a=dm(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],s=i.length,l,u=0;u<s;++u)if(l=i[u]){var d=Wt(l,t);ii(l,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ha(o,this._parents,e,a)}function uk(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var s={value:i},l={value:function(){--n===0&&r()}};a.each(function(){var u=ha(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),u.on=t}),n===0&&r()})}var y6=0;function Ha(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function ck(e){return cr().transition(e)}function dm(){return++y6}var pr=cr.prototype;Ha.prototype=ck.prototype={constructor:Ha,select:tk,selectAll:ak,selectChild:pr.selectChild,selectChildren:pr.selectChildren,filter:$S,merge:QS,selection:ok,transition:dk,call:pr.call,nodes:pr.nodes,node:pr.node,size:pr.size,empty:pr.empty,each:pr.each,on:JS,attr:jS,attrTween:XS,style:rk,styleTween:ik,text:sk,textTween:lk,remove:ek,tween:GS,delay:WS,duration:YS,ease:KS,easeVarying:ZS,end:uk,[Symbol.iterator]:pr[Symbol.iterator]};function um(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var v6={time:null,delay:0,duration:250,ease:um};function C6(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function fk(e){var t,a;e instanceof Ha?(t=e._id,e=e._name):(t=dm(),(a=v6).time=Yu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],s=i.length,l,u=0;u<s;++u)(l=i[u])&&ii(l,e,t,u,i,a||C6(l,t));return new Ha(o,this._parents,e,t)}cr.prototype.interrupt=VS;cr.prototype.transition=fk;var $u=e=>()=>e;function Hx(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function en(e,t,a){this.k=e,this.x=t,this.y=a}en.prototype={constructor:en,scale:function(e){return e===1?this:new en(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new en(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ns=new en(1,0,0);Qu.prototype=en.prototype;function Qu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return ns;return e.__zoom}function cm(e){e.stopImmediatePropagation()}function Fl(e){e.preventDefault(),e.stopImmediatePropagation()}function S6(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function k6(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function pk(){return this.__zoom||ns}function L6(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function _6(){return navigator.maxTouchPoints||"ontouchstart"in this}function I6(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function fm(){var e=S6,t=k6,a=I6,o=L6,n=_6,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],s=250,l=ts,u=Ki("start","zoom","end"),d,f,c,p=500,g=150,w=0,y=10;function h(L){L.property("__zoom",pk).on("wheel.zoom",k,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",R).on("touchmove.zoom",H).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,N,E,M){var A=L.selection?L.selection():L;A.property("__zoom",pk),L!==A?v(L,N,E,M):A.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},h.scaleBy=function(L,N,E,M){h.scaleTo(L,function(){var A=this.__zoom.k,O=typeof N=="function"?N.apply(this,arguments):N;return A*O},E,M)},h.scaleTo=function(L,N,E,M){h.transform(L,function(){var A=t.apply(this,arguments),O=this.__zoom,D=E==null?x(A):typeof E=="function"?E.apply(this,arguments):E,B=O.invert(D),z=typeof N=="function"?N.apply(this,arguments):N;return a(m(b(O,z),D,B),A,i)},E,M)},h.translateBy=function(L,N,E,M){h.transform(L,function(){return a(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),i)},null,M)},h.translateTo=function(L,N,E,M,A){h.transform(L,function(){var O=t.apply(this,arguments),D=this.__zoom,B=M==null?x(O):typeof M=="function"?M.apply(this,arguments):M;return a(ns.translate(B[0],B[1]).scale(D.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof E=="function"?-E.apply(this,arguments):-E),O,i)},M,A)};function b(L,N){return N=Math.max(r[0],Math.min(r[1],N)),N===L.k?L:new en(N,L.x,L.y)}function m(L,N,E){var M=N[0]-E[0]*L.k,A=N[1]-E[1]*L.k;return M===L.x&&A===L.y?L:new en(L.k,M,A)}function x(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function v(L,N,E,M){L.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var A=this,O=arguments,D=C(A,O).event(M),B=t.apply(A,O),z=E==null?x(B):typeof E=="function"?E.apply(A,O):E,j=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),F=A.__zoom,K=typeof N=="function"?N.apply(A,O):N,$=l(F.invert(z).concat(j/F.k),K.invert(z).concat(j/K.k));return function(ee){if(ee===1)ee=K;else{var q=$(ee),J=j/q[2];ee=new en(J,z[0]-q[0]*J,z[1]-q[1]*J)}D.zoom(null,ee)}})}function C(L,N,E){return!E&&L.__zooming||new S(L,N)}function S(L,N){this.that=L,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,N),this.taps=0}S.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,N){return this.mouse&&L!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var N=ra(this.that).datum();u.call(L,this.that,new Hx(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),N)}};function k(L,...N){if(!e.apply(this,arguments))return;var E=C(this,N).event(L),M=this.__zoom,A=Math.max(r[0],Math.min(r[1],M.k*Math.pow(2,o.apply(this,arguments)))),O=za(L);if(E.wheel)(E.mouse[0][0]!==O[0]||E.mouse[0][1]!==O[1])&&(E.mouse[1]=M.invert(E.mouse[0]=O)),clearTimeout(E.wheel);else{if(M.k===A)return;E.mouse=[O,M.invert(O)],os(this),E.start()}Fl(L),E.wheel=setTimeout(D,g),E.zoom("mouse",a(m(b(M,A),E.mouse[0],E.mouse[1]),E.extent,i));function D(){E.wheel=null,E.end()}}function _(L,...N){if(c||!e.apply(this,arguments))return;var E=L.currentTarget,M=C(this,N,!0).event(L),A=ra(L.view).on("mousemove.zoom",z,!0).on("mouseup.zoom",j,!0),O=za(L,E),D=L.clientX,B=L.clientY;Ru(L.view),cm(L),M.mouse=[O,this.__zoom.invert(O)],os(this),M.start();function z(F){if(Fl(F),!M.moved){var K=F.clientX-D,$=F.clientY-B;M.moved=K*K+$*$>w}M.event(F).zoom("mouse",a(m(M.that.__zoom,M.mouse[0]=za(F,E),M.mouse[1]),M.extent,i))}function j(F){A.on("mousemove.zoom mouseup.zoom",null),Pu(F.view,M.moved),Fl(F),M.event(F).end()}}function T(L,...N){if(e.apply(this,arguments)){var E=this.__zoom,M=za(L.changedTouches?L.changedTouches[0]:L,this),A=E.invert(M),O=E.k*(L.shiftKey?.5:2),D=a(m(b(E,O),M,A),t.apply(this,N),i);Fl(L),s>0?ra(this).transition().duration(s).call(v,D,M,L):ra(this).call(h.transform,D,M,L)}}function R(L,...N){if(e.apply(this,arguments)){var E=L.touches,M=E.length,A=C(this,N,L.changedTouches.length===M).event(L),O,D,B,z;for(cm(L),D=0;D<M;++D)B=E[D],z=za(B,this),z=[z,this.__zoom.invert(z),B.identifier],A.touch0?!A.touch1&&A.touch0[2]!==z[2]&&(A.touch1=z,A.taps=0):(A.touch0=z,O=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),O&&(A.taps<2&&(f=z[0],d=setTimeout(function(){d=null},p)),os(this),A.start())}}function H(L,...N){if(this.__zooming){var E=C(this,N).event(L),M=L.changedTouches,A=M.length,O,D,B,z;for(Fl(L),O=0;O<A;++O)D=M[O],B=za(D,this),E.touch0&&E.touch0[2]===D.identifier?E.touch0[0]=B:E.touch1&&E.touch1[2]===D.identifier&&(E.touch1[0]=B);if(D=E.that.__zoom,E.touch1){var j=E.touch0[0],F=E.touch0[1],K=E.touch1[0],$=E.touch1[1],ee=(ee=K[0]-j[0])*ee+(ee=K[1]-j[1])*ee,q=(q=$[0]-F[0])*q+(q=$[1]-F[1])*q;D=b(D,Math.sqrt(ee/q)),B=[(j[0]+K[0])/2,(j[1]+K[1])/2],z=[(F[0]+$[0])/2,(F[1]+$[1])/2]}else if(E.touch0)B=E.touch0[0],z=E.touch0[1];else return;E.zoom("touch",a(m(D,B,z),E.extent,i))}}function U(L,...N){if(this.__zooming){var E=C(this,N).event(L),M=L.changedTouches,A=M.length,O,D;for(cm(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),O=0;O<A;++O)D=M[O],E.touch0&&E.touch0[2]===D.identifier?delete E.touch0:E.touch1&&E.touch1[2]===D.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(D=za(D,this),Math.hypot(f[0]-D[0],f[1]-D[1])<y)){var B=ra(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:$u(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:$u(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:$u(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:$u([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(i[0][0]=+L[0][0],i[1][0]=+L[1][0],i[0][1]=+L[0][1],i[1][1]=+L[1][1],h):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(s=+L,h):s},h.interpolate=function(L){return arguments.length?(l=L,h):l},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(w=(L=+L)*L,h):Math.sqrt(w)},h.tapDistance=function(L){return arguments.length?(y=+L,h):y},h}var Co={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Gl=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Vx=["Enter"," ","Escape"],Gx={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},ui;(function(e){e.Strict="strict",e.Loose="loose"})(ui||(ui={}));var tn;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(tn||(tn={}));var mr;(function(e){e.Partial="partial",e.Full="full"})(mr||(mr={}));var jx={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},_n;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(_n||(_n={}));var ql;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(ql||(ql={}));var ie;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ie||(ie={}));var mk={[ie.Left]:ie.Right,[ie.Right]:ie.Left,[ie.Top]:ie.Bottom,[ie.Bottom]:ie.Top};function Xx(e){return e===null?null:e?"valid":"invalid"}var Wx=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Ik=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Yx=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Kx=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var ec=(e,t=[0,0])=>{let{width:a,height:o}=jo(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Zx=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",s=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(s=i?t.nodeLookup.get(r):Yx(r)?r:t.nodeLookup.get(r.id)),s?(a=!0,xm(n,gm(s,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?wm(o):{x:0,y:0,width:0,height:0}},jl=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=xm(a,gm(n)),o=!0)}),o?wm(a):{x:0,y:0,width:0,height:0}},hm=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let s=(t.x-a)/n,l=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:w=!1}=c;if(i&&!g||w)continue;let y=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x:b,y:m}=c.internals.positionAbsolute,x=Ak(s,l,u,d,b,m,y,h),v=y*h,C=r&&x>0;(!c.internals.handleBounds||C||x>=v||c.dragging)&&f.push(c)}return f},Mk=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function M6(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:s}=jo(n);r=i>0&&s>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function Nk({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let s=M6(e,i),l=jl(s),u=ac(l,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function $x({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),s=i.parentId?a.get(i.parentId):void 0,{x:l,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!s)r?.("005",Co.error005());else{let{width:p,height:g}=jo(s);p&&g&&(f=[[l,u],[l+p,u+g]])}else s&&ss(i.extent)&&(f=[[i.extent[0][0]+l,i.extent[0][1]+u],[i.extent[1][0]+l,i.extent[1][1]+u]]);let c=ss(f)?rs(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",Co.error015()),{position:{x:c.x-l+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function Ek({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||g)&&i.push(c)}let s=new Set(t.map(c=>c.id)),l=o.filter(c=>c.deletable!==!1),d=Mk(i,l);for(let c of l)s.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var Vl=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),rs=(e={x:0,y:0},t,a)=>({x:Vl(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Vl(e.y,t[0][1],t[1][1]-(a?.height??0))});function Tk(e,t,a){let{width:o,height:n}=jo(a),{x:r,y:i}=a.internals.positionAbsolute;return rs(e,[[r,i],[r+o,i+n]],t)}var gk=(e,t,a)=>e<t?Vl(Math.abs(e-t),1,t)/t:e>a?-Vl(Math.abs(e-a),1,t)/t:0,bm=(e,t,a=15,o=40)=>{let n=gk(e.x,o,t.width-o)*a,r=gk(e.y,o,t.height-o)*a;return[n,r]},xm=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),qx=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),wm=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Xl=(e,t=[0,0])=>{let{x:a,y:o}=Yx(e)?e.internals.positionAbsolute:ec(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},gm=(e,t=[0,0])=>{let{x:a,y:o}=Yx(e)?e.internals.positionAbsolute:ec(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Qx=(e,t)=>wm(xm(qx(e),qx(t))),Ak=(e,t,a,o,n,r,i,s)=>{let l=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+s)-Math.max(t,r));return Math.ceil(l*u)},tc=(e,t)=>Ak(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Jx=e=>Vo(e.width)&&Vo(e.height)&&Vo(e.x)&&Vo(e.y),Vo=e=>!isNaN(e)&&isFinite(e),e0=(e,t)=>(a,o)=>{},Wl=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Yl=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let s={x:(e-a)/n,y:(t-o)/n};return r?Wl(s,i):s},is=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Ul(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function N6(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Ul(e,a),n=Ul(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Ul(e.top??e.y??0,a),n=Ul(e.bottom??e.y??0,a),r=Ul(e.left??e.x??0,t),i=Ul(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function E6(e,t,a,o,n,r){let{x:i,y:s}=is(e,[t,a,o]),{x:l,y:u}=is({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-l,f=r-u;return{left:Math.floor(i),top:Math.floor(s),right:Math.floor(d),bottom:Math.floor(f)}}var ac=(e,t,a,o,n,r)=>{let i=N6(r,t,a),s=(t-i.x)/e.width,l=(a-i.y)/e.height,u=Math.min(s,l),d=Vl(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,w=E6(e,p,g,d,t,a),y={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-y.left+y.right,y:g-y.top+y.bottom,zoom:d}},Kl=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function ss(e){return e!=null&&e!=="parent"}function jo(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function t0(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function a0(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let s=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*s[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*s[1]}return r}function o0(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function Dk(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function Rk(e){return{...Gx,...e||{}}}function Ju(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=Go(e),s=Yl({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:l,y:u}=a?Wl(s,t):s;return{xSnapped:l,ySnapped:u,...s}}var ym=e=>({width:e.offsetWidth,height:e.offsetHeight}),n0=e=>e?.getRootNode?.()||window?.document,T6=["INPUT","SELECT","TEXTAREA"];function r0(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:T6.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var i0=e=>"clientX"in e,Go=(e,t)=>{let a=i0(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},hk=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let s=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(s.left-a.left)/o,y:(s.top-a.top)/o,...ym(i)}})};function vm({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:s}){let l=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+s*.375+o*.125,d=Math.abs(l-e),f=Math.abs(u-t);return[l,u,d,f]}function pm(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function bk({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ie.Left:return[t-pm(t-o,r),a];case ie.Right:return[t+pm(o-t,r),a];case ie.Top:return[t,a-pm(a-n,r)];case ie.Bottom:return[t,a+pm(n-a,r)]}}function Zl({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,curvature:i=.25}){let[s,l]=bk({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=bk({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,g]=vm({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:s,sourceControlY:l,targetControlX:u,targetControlY:d});return[`M${e},${t} C${s},${l} ${u},${d} ${o},${n}`,f,c,p,g]}function s0({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,s=o<t?o+i:o-i;return[r,s,n,i]}function Pk({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,s=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+s}function zk({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=xm(gm(e),gm(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return tc(i,wm(r))>0}var A6=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,D6=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),Ok=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Co.error006()),t;let o=a.getEdgeId||A6,n;return Wx(e)?n={...e}:n={...e,id:o(e)},D6(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Cm({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,s]=s0({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,s]}var xk={[ie.Left]:{x:-1,y:0},[ie.Right]:{x:1,y:0},[ie.Top]:{x:0,y:-1},[ie.Bottom]:{x:0,y:1}},R6=({source:e,sourcePosition:t=ie.Bottom,target:a})=>t===ie.Left||t===ie.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},wk=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function P6({source:e,sourcePosition:t=ie.Bottom,target:a,targetPosition:o=ie.Top,center:n,offset:r,stepPosition:i}){let s=xk[t],l=xk[o],u={x:e.x+s.x*r,y:e.y+s.y*r},d={x:a.x+l.x*r,y:a.y+l.y*r},f=R6({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],w,y,h={x:0,y:0},b={x:0,y:0},[,,m,x]=s0({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(s[c]*l[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,y=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,y=n.y??u.y+(d.y-u.y)*i);let k=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y},{x:d.x,y}];s[c]===p?g=c==="x"?k:_:g=c==="x"?_:k}else{let k=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?g=s.x===p?_:k:g=s.y===p?k:_,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let N=Math.min(r-1,r-L);s[c]===p?h[c]=(u[c]>e[c]?-1:1)*N:b[c]=(d[c]>a[c]?-1:1)*N}}if(t!==o){let L=c==="x"?"y":"x",N=s[c]===l[L],E=u[L]>d[L],M=u[L]<d[L];(s[c]===1&&(!N&&E||N&&M)||s[c]!==1&&(!N&&M||N&&E))&&(g=c==="x"?k:_)}let T={x:u.x+h.x,y:u.y+h.y},R={x:d.x+b.x,y:d.y+b.y},H=Math.max(Math.abs(T.x-g[0].x),Math.abs(R.x-g[0].x)),U=Math.max(Math.abs(T.y-g[0].y),Math.abs(R.y-g[0].y));H>=U?(w=(T.x+R.x)/2,y=g[0].y):(w=g[0].x,y=(T.y+R.y)/2)}let v={x:u.x+h.x,y:u.y+h.y},C={x:d.x+b.x,y:d.y+b.y};return[[e,...v.x!==g[0].x||v.y!==g[0].y?[v]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],w,y,m,x]}function z6(e,t,a,o){let n=Math.min(wk(e,t)/2,wk(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let s=e.x<a.x?1:-1,l=e.y<a.y?-1:1;return`L ${r},${i+n*l}Q ${r},${i} ${r+n*s},${i}`}function oc({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,borderRadius:i=5,centerX:s,centerY:l,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,w]=P6({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:s,y:l},offset:u,stepPosition:d}),y=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)y+=z6(f[h-1],f[h],f[h+1],i);return y+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[y,c,p,g,w]}function yk(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Hk(e){let{sourceNode:t,targetNode:a}=e;if(!yk(t)||!yk(a))return null;let o=t.internals.handleBounds||vk(t.handles),n=a.internals.handleBounds||vk(a.handles),r=Ck(o?.source??[],e.sourceHandle),i=Ck(e.connectionMode===ui.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",Co.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=r?.position||ie.Bottom,l=i?.position||ie.Top,u=ci(t,r,s),d=ci(a,i,l);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:s,targetPosition:l}}function vk(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function ci(e,t,a=ie.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:s}=t??jo(e);if(o)return{x:n+i/2,y:r+s/2};switch(t?.position??a){case ie.Top:return{x:n+i/2,y:r};case ie.Right:return{x:n+i,y:r+s/2};case ie.Bottom:return{x:n+i/2,y:r+s};case ie.Left:return{x:n,y:r+s/2}}}function Ck(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Sm(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Bk(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,s)=>([s.markerStart||o,s.markerEnd||n].forEach(l=>{if(l&&typeof l=="object"){let u=Sm(l,t);r.has(u)||(i.push({id:u,color:l.color||a,...l}),r.add(u))}}),i),[]).sort((i,s)=>i.id.localeCompare(s.id))}var Fk=1e3,O6=10,l0={nodeOrigin:[0,0],nodeExtent:Gl,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},H6={...l0,checkEquality:!0};function d0(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function Uk(e,t,a){let o=d0(l0,a);for(let n of e.values())if(n.parentId)c0(n,e,t,o);else{let r=ec(n,o.nodeOrigin),i=ss(n.extent)?n.extent:o.nodeExtent,s=rs(r,i,jo(n));n.internals.positionAbsolute=s}}function B6(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function u0(e){return e==="manual"}function km(e,t,a,o={}){let n=d0(H6,o),r={i:0},i=new Map(t),s=n?.elevateNodesOnSelect&&!u0(n.zIndexMode)?Fk:0,l=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=ec(d,n.nodeOrigin),p=ss(d.extent)?d.extent:n.nodeExtent,g=rs(c,p,jo(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:B6(d,f),z:qk(d,s,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(l=!1),d.parentId&&c0(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:l,hasSelectedNodes:u}}function F6(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function c0(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:s,zIndexMode:l}=d0(l0,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}F6(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&l==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*O6),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!u0(l)?Fk:0,{x:c,y:p,z:g}=U6(e,d,i,s,f,l),{positionAbsolute:w}=e.internals,y=c!==w.x||p!==w.y;(y||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:c,y:p}:w,z:g}})}function qk(e,t,a){let o=Vo(e.zIndex)?e.zIndex:0;return u0(a)?o:o+(e.selected?t:0)}function U6(e,t,a,o,n,r){let{x:i,y:s}=t.internals.positionAbsolute,l=jo(e),u=ec(e,a),d=ss(e.extent)?rs(u,e.extent,l):u,f=rs({x:i+d.x,y:s+d.y},o,l);e.extent==="parent"&&(f=Tk(f,l,t));let c=qk(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Lm(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let s=t.get(i.parentId);if(!s)continue;let l=r.get(i.parentId)?.expandedRect??Xl(s),u=Qx(l,i.rect);r.set(i.parentId,{expandedRect:u,parent:s})}return r.size>0&&r.forEach(({expandedRect:i,parent:s},l)=>{let u=s.internals.positionAbsolute,d=jo(s),f=s.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,g=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),y=(g-d.width)*f[0],h=(w-d.height)*f[1];(c>0||p>0||y||h)&&(n.push({id:l,type:"position",position:{x:s.position.x-c+y,y:s.position.y-p+h}}),a.get(l)?.forEach(b=>{e.some(m=>m.id===b.id)||n.push({id:b.id,type:"position",position:{x:b.position.x+c,y:b.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:l,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-y:0),height:w+(p?f[1]*p-h:0)}})}),n}function Vk(e,t,a,o,n,r,i){let s=o?.querySelector(".xyflow__viewport"),l=!1;if(!s)return{changes:[],updatedInternals:l};let u=[],d=window.getComputedStyle(s),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),l=!0;continue}let w=ym(p.nodeElement),y=g.measured.width!==w.width||g.measured.height!==w.height;if(!!(w.width&&w.height&&(y||!g.internals.handleBounds||p.force))){let b=p.nodeElement.getBoundingClientRect(),m=ss(g.extent)?g.extent:r,{positionAbsolute:x}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(x=Tk(x,w,C))}else m&&(x=rs(x,m,w));let v={...g,measured:w,internals:{...g.internals,positionAbsolute:x,handleBounds:{source:hk("source",p.nodeElement,b,f,g.id),target:hk("target",p.nodeElement,b,f,g.id)}}};t.set(g.id,v),g.parentId&&c0(v,t,a,{nodeOrigin:n,zIndexMode:i}),l=!0,y&&(u.push({id:g.id,type:"dimensions",dimensions:w}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:Xl(v,n)}))}}if(c.length>0){let p=Lm(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:l}}async function Gk({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function Sk(e,t,a,o,n,r){let i=n,s=o.get(i)||new Map;o.set(i,s.set(a,t)),i=`${n}-${e}`;let l=o.get(i)||new Map;if(o.set(i,l.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function f0(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:s=null}=o,l={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:s},u=`${n}-${i}--${r}-${s}`,d=`${r}-${s}--${n}-${i}`;Sk("source",l,d,e,n,i),Sk("target",l,u,e,r,s),t.set(o.id,o)}}function jk(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:jk(a,t):!1}function kk(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function q6(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!jk(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let s=e.get(r);s&&n.set(r,{id:r,position:s.position||{x:0,y:0},distance:{x:a.x-s.internals.positionAbsolute.x,y:a.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return n}function Bx({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,s]of t){let l=a.get(i)?.internals.userNode;l&&n.push({...l,position:s.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function V6({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=Wl(r,t);return{x:i.x-r.x,y:i.y-r.y}}function Xk({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,s=new Map,l=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,w=null;function y({noDragClassName:b,handleSelector:m,domNode:x,isSelectable:v,nodeId:C,nodeClickDistance:S=0}){c=ra(x);function k({x:H,y:U}){let{nodeLookup:L,nodeExtent:N,snapGrid:E,snapToGrid:M,nodeOrigin:A,onNodeDrag:O,onSelectionDrag:D,onError:B,updateNodePositions:z}=t();r={x:H,y:U};let j=!1,F=s.size>1,K=F&&N?qx(jl(s)):null,$=F&&M?V6({dragItems:s,snapGrid:E,x:H,y:U}):null;for(let[ee,q]of s){if(!L.has(ee))continue;let J={x:H-q.distance.x,y:U-q.distance.y};M&&(J=$?{x:Math.round(J.x+$.x),y:Math.round(J.y+$.y)}:Wl(J,E));let ne=null;if(F&&N&&!q.extent&&K){let{positionAbsolute:ce}=q.internals,we=ce.x-K.x+N[0][0],_e=ce.x+q.measured.width-K.x2+N[1][0],Oe=ce.y-K.y+N[0][1],Ct=ce.y+q.measured.height-K.y2+N[1][1];ne=[[we,Oe],[_e,Ct]]}let{position:de,positionAbsolute:re}=$x({nodeId:ee,nextPosition:J,nodeLookup:L,nodeExtent:ne||N,nodeOrigin:A,onError:B});j=j||q.position.x!==de.x||q.position.y!==de.y,q.position=de,q.internals.positionAbsolute=re}if(g=g||j,!!j&&(z(s,!0),w&&(o||O||!C&&D))){let[ee,q]=Bx({nodeId:C,dragItems:s,nodeLookup:L});o?.(w,s,ee,q),O?.(w,ee,q),C||D?.(w,q)}}async function _(){if(!d)return;let{transform:H,panBy:U,autoPanSpeed:L,autoPanOnNodeDrag:N}=t();if(!N){l=!1,cancelAnimationFrame(i);return}let[E,M]=bm(u,d,L);(E!==0||M!==0)&&(r.x=(r.x??0)-E/H[2],r.y=(r.y??0)-M/H[2],await U({x:E,y:M})&&k(r)),i=requestAnimationFrame(_)}function T(H){let{nodeLookup:U,multiSelectionActive:L,nodesDraggable:N,transform:E,snapGrid:M,snapToGrid:A,selectNodesOnDrag:O,onNodeDragStart:D,onSelectionDragStart:B,unselectNodesAndEdges:z}=t();f=!0,(!O||!v)&&!L&&C&&(U.get(C)?.selected||z()),v&&O&&C&&e?.(C);let j=Ju(H.sourceEvent,{transform:E,snapGrid:M,snapToGrid:A,containerBounds:d});if(r=j,s=q6(U,N,j,C),s.size>0&&(a||D||!C&&B)){let[F,K]=Bx({nodeId:C,dragItems:s,nodeLookup:U});a?.(H.sourceEvent,s,F,K),D?.(H.sourceEvent,F,K),C||B?.(H.sourceEvent,K)}}let R=jp().clickDistance(S).on("start",H=>{let{domNode:U,nodeDragThreshold:L,transform:N,snapGrid:E,snapToGrid:M}=t();d=U?.getBoundingClientRect()||null,p=!1,g=!1,w=H.sourceEvent,L===0&&T(H),r=Ju(H.sourceEvent,{transform:N,snapGrid:E,snapToGrid:M,containerBounds:d}),u=Go(H.sourceEvent,d)}).on("drag",H=>{let{autoPanOnNodeDrag:U,transform:L,snapGrid:N,snapToGrid:E,nodeDragThreshold:M,nodeLookup:A}=t(),O=Ju(H.sourceEvent,{transform:L,snapGrid:N,snapToGrid:E,containerBounds:d});if(w=H.sourceEvent,(H.sourceEvent.type==="touchmove"&&H.sourceEvent.touches.length>1||C&&!A.has(C))&&(p=!0),!p){if(!l&&U&&f&&(l=!0,_()),!f){let D=Go(H.sourceEvent,d),B=D.x-u.x,z=D.y-u.y;Math.sqrt(B*B+z*z)>M&&T(H)}(r.x!==O.xSnapped||r.y!==O.ySnapped)&&s&&f&&(u=Go(H.sourceEvent,d),k(O))}}).on("end",H=>{if(!f||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(l=!1,f=!1,cancelAnimationFrame(i),s.size>0){let{nodeLookup:U,updateNodePositions:L,onNodeDragStop:N,onSelectionDragStop:E}=t();if(g&&(L(s,!1),g=!1),n||N||!C&&E){let[M,A]=Bx({nodeId:C,dragItems:s,nodeLookup:U,dragging:!1});n?.(H.sourceEvent,s,M,A),N?.(H.sourceEvent,M,A),C||E?.(H.sourceEvent,A)}}}).filter(H=>{let U=H.target;return!H.button&&(!b||!kk(U,`.${b}`,x))&&(!m||kk(U,m,x))});c.call(R)}function h(){c?.on(".drag",null)}return{update:y,destroy:h}}function G6(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())tc(n,Xl(r))>0&&o.push(r);return o}var j6=250;function X6(e,t,a,o){let n=[],r=1/0,i=G6(e,a,t+j6);for(let s of i){let l=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of l){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=ci(s,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let s=o.type==="source"?"target":"source";return n.find(l=>l.type===s)??n[0]}return n[0]}function Wk(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let s=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],l=(a?s?.find(u=>u.id===a):s?.[0])??null;return l&&r?{...l,...ci(i,l,l.position,!0)}:l}function Yk(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function W6(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var Kk=()=>!0;function Y6(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:s,nodeLookup:l,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:w,onConnectEnd:y,isValidConnection:h=Kk,onReconnectEnd:b,updateConnection:m,getTransform:x,getFromHandle:v,autoPanSpeed:C,dragThreshold:S=1,handleDomNode:k}){let _=n0(e.target),T=0,R,{x:H,y:U}=Go(e),L=Yk(r,k),N=s?.getBoundingClientRect(),E=!1;if(!N||!L)return;let M=Wk(n,L,o,l,t);if(!M)return;let A=Go(e,N),O=!1,D=null,B=!1,z=null;function j(){if(!d||!N)return;let[de,re]=bm(A,N,C);c({x:de,y:re}),T=requestAnimationFrame(j)}let F={...M,nodeId:n,type:L,position:M.position},K=l.get(n),ee={inProgress:!0,isValid:null,from:ci(K,F,ie.Left,!0),fromHandle:F,fromPosition:F.position,fromNode:K,to:A,toHandle:null,toPosition:mk[F.position],toNode:null,pointer:A};function q(){E=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}S===0&&q();function J(de){if(!E){let{x:Ct,y:St}=Go(de),co=Ct-H,oe=St-U;if(!(co*co+oe*oe>S*S))return;q()}if(!v()||!F){ne(de);return}let re=x();A=Go(de,N),R=X6(Yl(A,re,!1,[1,1]),a,l,F),O||(j(),O=!0);let ce=Zk(de,{handle:R,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:h,doc:_,lib:u,flowId:f,nodeLookup:l});z=ce.handleDomNode,D=ce.connection,B=W6(!!R,ce.isValid);let we=l.get(n),_e=we?ci(we,F,ie.Left,!0):ee.from,Oe={...ee,from:_e,isValid:B,to:ce.toHandle&&B?is({x:ce.toHandle.x,y:ce.toHandle.y},re):A,toHandle:ce.toHandle,toPosition:B&&ce.toHandle?ce.toHandle.position:mk[F.position],toNode:ce.toHandle?l.get(ce.toHandle.nodeId):null,pointer:A};m(Oe),ee=Oe}function ne(de){if(!("touches"in de&&de.touches.length>0)){if(E){(R||z)&&D&&B&&w?.(D);let{inProgress:re,...ce}=ee,we={...ce,toPosition:ee.toHandle?ee.toPosition:null};y?.(de,we),r&&b?.(de,we)}p(),cancelAnimationFrame(T),O=!1,B=!1,D=null,z=null,_.removeEventListener("mousemove",J),_.removeEventListener("mouseup",ne),_.removeEventListener("touchmove",J),_.removeEventListener("touchend",ne)}}_.addEventListener("mousemove",J),_.addEventListener("mouseup",ne),_.addEventListener("touchmove",J),_.addEventListener("touchend",ne)}function Zk(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:s,flowId:l,isValidConnection:u=Kk,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${s}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Go(e),w=i.elementFromPoint(p,g),y=w?.classList.contains(`${s}-flow__handle`)?w:c,h={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let b=Yk(void 0,y),m=y.getAttribute("data-nodeid"),x=y.getAttribute("data-handleid"),v=y.classList.contains("connectable"),C=y.classList.contains("connectableend");if(!m||!b)return h;let S={source:f?m:o,sourceHandle:f?x:n,target:f?o:m,targetHandle:f?n:x};h.connection=S;let _=v&&C&&(a===ui.Strict?f&&b==="source"||!f&&b==="target":m!==o||x!==n);h.isValid=_&&u(S),h.toHandle=Wk(m,b,x,d,a,!0)}return h}var _m={onPointerDown:Y6,isValid:Zk};function $k({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=ra(e);function r({translateExtent:s,width:l,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=a(),v=m.sourceEvent.ctrlKey&&Kl()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,S=x[2]*Math.pow(2,C*v);t.scaleTo(S)},w=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let x=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let v=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[v[0]-w[0],v[1]-w[1]];w=v;let S=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),k={x:x[0]-C[0]*S,y:x[1]-C[1]*S},_=[[0,0],[l,u]];t.setViewportConstrained({x:k.x,y:k.y,zoom:x[2]},_,s)},b=fm().on("start",y).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(b,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:za}}var Im=e=>({x:e.x,y:e.y,zoom:e.k}),Fx=({x:e,y:t,zoom:a})=>ns.translate(e,t).scale(a),di=(e,t)=>e.target.closest(`.${t}`),Qk=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),K6=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ux=(e,t=0,a=K6,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},Jk=e=>{let t=e.ctrlKey&&Kl()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Z6({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:s,onPanZoom:l,onPanZoomEnd:u}){return d=>{if(di(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let y=za(d),h=Jk(d),b=f*Math.pow(2,h);o.scaleTo(a,b,y,d);return}let c=d.deltaMode===1?20:1,p=n===tn.Vertical?0:d.deltaX*c,g=n===tn.Horizontal?0:d.deltaY*c;!Kl()&&d.shiftKey&&n!==tn.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let w=Im(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?l?.(d,w):(e.isPanScrolling=!0,s?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function $6({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,s=di(o,e);if(o.ctrlKey&&r&&s&&o.preventDefault(),i||s)return null;o.preventDefault(),a.call(this,o,n)}}function Q6({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Im(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function J6({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&Qk(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Im(r.transform))}}function e8({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&Qk(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let s=Im(i.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,s)},a?150:0)}}}function t8({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:s,noWheelClassName:l,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(di(c,`${d}-flow__node`)||di(c,`${d}-flow__edge`)||di(c,`${d}-flow__selection`)||di(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||s||f&&!w||di(c,l)&&w||di(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let y=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&y}}function eL({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:s,onDraggingChange:l}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(U=>{let L=U[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=fm().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=ra(e).call(p);x({x:n.x,y:n.y,zoom:Vl(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=g.on("wheel.zoom"),y=g.on("dblclick.zoom");p.wheelDelta(Jk);async function h(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?fr:ts).transform(Ux(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function b({noWheelClassName:U,noPanClassName:L,onPaneContextMenu:N,userSelectionActive:E,panOnScroll:M,panOnDrag:A,panOnScrollMode:O,panOnScrollSpeed:D,preventScrolling:B,zoomOnPinch:z,zoomOnScroll:j,zoomOnDoubleClick:F,panActivationKeyPressed:K=!1,zoomActivationKeyPressed:$,lib:ee,onTransformChange:q,connectionInProgress:J,paneClickDistance:ne,selectionOnDrag:de}){E&&!u.isZoomingOrPanning&&m();let re=M&&!$&&!E;p.clickDistance(de?1/0:!Vo(ne)||ne<0?0:ne);let ce=re?Z6({zoomPanValues:u,noWheelClassName:U,d3Selection:g,d3Zoom:p,panOnScrollMode:O,panOnScrollSpeed:D,zoomOnPinch:z,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:s}):$6({noWheelClassName:U,preventScrolling:B,d3ZoomHandler:w});g.on("wheel.zoom",ce,{passive:!1});let we=Q6({zoomPanValues:u,onDraggingChange:l,onPanZoomStart:i});p.on("start",we);let _e=J6({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!N,onPanZoom:r,onTransformChange:q});p.on("zoom",_e);let Oe=e8({zoomPanValues:u,panOnDrag:A,panOnScroll:M,onPaneContextMenu:N,onPanZoomEnd:s,onDraggingChange:l});p.on("end",Oe);let Ct=t8({panActivationKeyPressed:K,zoomActivationKeyPressed:$,panOnDrag:A,zoomOnScroll:j,panOnScroll:M,zoomOnDoubleClick:F,zoomOnPinch:z,userSelectionActive:E,noPanClassName:L,noWheelClassName:U,lib:ee,connectionInProgress:J});p.filter(Ct),F?g.on("dblclick.zoom",y):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(U,L,N){let E=Fx(U),M=p?.constrain()(E,L,N);return M&&await h(M),M}async function v(U,L){let N=Fx(U);return await h(N,L),N}function C(U){if(g){let L=Fx(U),N=g.property("__zoom");(N.k!==U.zoom||N.x!==U.x||N.y!==U.y)&&p?.transform(g,L,null,{sync:!0})}}function S(){let U=g?Qu(g.node()):{x:0,y:0,k:1};return{x:U.x,y:U.y,zoom:U.k}}async function k(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?fr:ts).scaleTo(Ux(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}async function _(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?fr:ts).scaleBy(Ux(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function T(U){p?.scaleExtent(U)}function R(U){p?.translateExtent(U)}function H(U){let L=!Vo(U)||U<0?0:U;p?.clickDistance(L)}return{update:b,destroy:m,setViewport:v,setViewportConstrained:x,getViewport:S,scaleTo:k,scaleBy:_,setScaleExtent:T,setTranslateExtent:R,syncViewport:C,setClickDistance:H}}var fi;(function(e){e.Line="line",e.Handle="handle"})(fi||(fi={}));function a8({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,s=a-o,l=[i>0?1:i<0?-1:0,s>0?1:s<0?-1:0];return i&&n&&(l[0]=l[0]*-1),s&&r&&(l[1]=l[1]*-1),l}function Lk(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function si(e,t){return Math.max(0,t-e)}function li(e,t){return Math.max(0,e-t)}function mm(e,t,a){return Math.max(0,t-e,e-a)}function _k(e,t){return e?!t:t}function o8(e,t,a,o,n,r,i,s){let{affectsX:l,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:w,maxWidth:y,minHeight:h,maxHeight:b}=o,{x:m,y:x,width:v,height:C,aspectRatio:S}=e,k=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?g-e.pointerY:0),T=v+(l?-k:k),R=C+(u?-_:_),H=-r[0]*v,U=-r[1]*C,L=mm(T,w,y),N=mm(R,h,b);if(i){let A=0,O=0;l&&k<0?A=si(m+k+H,i[0][0]):!l&&k>0&&(A=li(m+T+H,i[1][0])),u&&_<0?O=si(x+_+U,i[0][1]):!u&&_>0&&(O=li(x+R+U,i[1][1])),L=Math.max(L,A),N=Math.max(N,O)}if(s){let A=0,O=0;l&&k>0?A=li(m+k,s[0][0]):!l&&k<0&&(A=si(m+T,s[1][0])),u&&_>0?O=li(x+_,s[0][1]):!u&&_<0&&(O=si(x+R,s[1][1])),L=Math.max(L,A),N=Math.max(N,O)}if(n){if(d){let A=mm(T/S,h,b)*S;if(L=Math.max(L,A),i){let O=0;!l&&!u||l&&!u&&c?O=li(x+U+T/S,i[1][1])*S:O=si(x+U+(l?k:-k)/S,i[0][1])*S,L=Math.max(L,O)}if(s){let O=0;!l&&!u||l&&!u&&c?O=si(x+T/S,s[1][1])*S:O=li(x+(l?k:-k)/S,s[0][1])*S,L=Math.max(L,O)}}if(f){let A=mm(R*S,w,y)/S;if(N=Math.max(N,A),i){let O=0;!l&&!u||u&&!l&&c?O=li(m+R*S+H,i[1][0])/S:O=si(m+(u?_:-_)*S+H,i[0][0])/S,N=Math.max(N,O)}if(s){let O=0;!l&&!u||u&&!l&&c?O=si(m+R*S,s[1][0])/S:O=li(m+(u?_:-_)*S,s[0][0])/S,N=Math.max(N,O)}}}_=_+(_<0?N:-N),k=k+(k<0?L:-L),n&&(c?T>R*S?_=(_k(l,u)?-k:k)/S:k=(_k(l,u)?-_:_)*S:d?(_=k/S,u=l):(k=_*S,l=u));let E=l?m+k:m,M=u?x+_:x;return{width:v+(l?-k:k),height:C+(u?-_:_),x:r[0]*k*(l?-1:1)+E,y:r[1]*_*(u?-1:1)+M}}var tL={width:0,height:0,x:0,y:0},n8={...tL,pointerX:0,pointerY:0,aspectRatio:1};function r8(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,s=a[0]*r,l=a[1]*i;return[[o-s,n-l],[o+r-s,n+i-l]]}function aL({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=ra(e),i={controlDirection:Lk("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:w,shouldResize:y}){let h={...tL},b={...n8};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:Lk(u)};let m,x=null,v=[],C,S,k,_=!1,T=jp().on("start",R=>{let{nodeLookup:H,transform:U,snapGrid:L,snapToGrid:N,nodeOrigin:E,paneDomNode:M}=a();if(m=H.get(t),!m)return;x=M?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:O}=Ju(R.sourceEvent,{transform:U,snapGrid:L,snapToGrid:N,containerBounds:x});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},b={...h,pointerX:A,pointerY:O,aspectRatio:h.width/h.height},C=void 0,S=ss(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=H.get(m.parentId)),C&&m.extent==="parent"&&(S=[[0,0],[C.measured.width,C.measured.height]]),v=[],k=void 0;for(let[D,B]of H)if(B.parentId===t&&(v.push({id:D,position:{...B.position},extent:B.extent}),B.extent==="parent"||B.expandParent)){let z=r8(B,m,B.origin??E);k?k=[[Math.min(z[0][0],k[0][0]),Math.min(z[0][1],k[0][1])],[Math.max(z[1][0],k[1][0]),Math.max(z[1][1],k[1][1])]]:k=z}p?.(R,{...h})}).on("drag",R=>{let{transform:H,snapGrid:U,snapToGrid:L,nodeOrigin:N}=a(),E=Ju(R.sourceEvent,{transform:H,snapGrid:U,snapToGrid:L,containerBounds:x}),M=[];if(!m)return;let{x:A,y:O,width:D,height:B}=h,z={},j=m.origin??N,{width:F,height:K,x:$,y:ee}=o8(b,i.controlDirection,E,i.boundaries,i.keepAspectRatio,j,S,k),q=F!==D,J=K!==B,ne=$!==A&&q,de=ee!==O&&J;if(!ne&&!de&&!q&&!J)return;if((ne||de||j[0]===1||j[1]===1)&&(z.x=ne?$:h.x,z.y=de?ee:h.y,h.x=z.x,h.y=z.y,v.length>0)){let _e=$-A,Oe=ee-O;for(let Ct of v)Ct.position={x:Ct.position.x-_e+j[0]*(F-D),y:Ct.position.y-Oe+j[1]*(K-B)},M.push(Ct)}if((q||J)&&(z.width=q&&(!i.resizeDirection||i.resizeDirection==="horizontal")?F:h.width,z.height=J&&(!i.resizeDirection||i.resizeDirection==="vertical")?K:h.height,h.width=z.width,h.height=z.height),C&&m.expandParent){let _e=j[0]*(z.width??0);z.x&&z.x<_e&&(h.x=_e,b.x=b.x-(z.x-_e));let Oe=j[1]*(z.height??0);z.y&&z.y<Oe&&(h.y=Oe,b.y=b.y-(z.y-Oe))}let re=a8({width:h.width,prevWidth:D,height:h.height,prevHeight:B,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),ce={...h,direction:re};y?.(R,ce)!==!1&&(_=!0,g?.(R,ce),o(z,M))}).on("end",R=>{_&&(w?.(R,{...h}),n?.({...h}),_=!1)});r.call(T)}function l(){r.on(".drag",null)}return{update:s,destroy:l}}var gL=I(Q(),1),hL=I(uL(),1);var fL={},cL=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(fL.env?fL.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,l);return l},pL=e=>e?cL(e):cL;var{useDebugValue:S8}=gL.default,{useSyncExternalStoreWithSelector:k8}=hL.default,L8=e=>e;function m0(e,t=L8,a){let o=k8(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return S8(o),o}var mL=(e,t)=>{let a=pL(e),o=(n,r=t)=>m0(a,n,r);return Object.assign(o,a),o},bL=(e,t)=>e?mL(e,t):mL;function Je(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var _8=I(ta()),Am=(0,G.createContext)(null),I8=Am.Provider,GL=Co.error001("react");function Me(e,t){let a=(0,G.useContext)(Am);if(a===null)throw new Error(GL);return m0(a,e,t)}function ft(){let e=(0,G.useContext)(Am);if(e===null)throw new Error(GL);return(0,G.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var xL={display:"none"},M8={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},jL="react-flow__node-desc",XL="react-flow__edge-desc",N8="react-flow__aria-live",E8=e=>e.ariaLiveMessage,T8=e=>e.ariaLabelConfig;function A8({rfId:e}){let t=Me(E8);return(0,V.jsx)("div",{id:`${N8}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:M8,children:t})}function D8({rfId:e,disableKeyboardA11y:t}){let a=Me(T8);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{id:`${jL}-${e}`,style:xL,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,V.jsx)("div",{id:`${XL}-${e}`,style:xL,children:a["edge.a11yDescription.default"]}),!t&&(0,V.jsx)(A8,{rfId:e})]})}var Dm=(0,G.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,V.jsx)("div",{className:It(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Dm.displayName="Panel";var wL="https://reactflow.dev?utm_source=attribution";function R8({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,V.jsx)(Dm,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${wL}`,children:(0,V.jsx)("a",{href:wL,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var P8=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Nm=e=>e.id;function z8(e,t){return Je(e.selectedNodes.map(Nm),t.selectedNodes.map(Nm))&&Je(e.selectedEdges.map(Nm),t.selectedEdges.map(Nm))}function O8({onSelectionChange:e}){let t=ft(),{selectedNodes:a,selectedEdges:o}=Me(P8,z8);return(0,G.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var H8=e=>!!e.onSelectionChangeHandlers;function B8({onSelectionChange:e}){let t=Me(H8);return e||t?(0,V.jsx)(O8,{onSelectionChange:e}):null}var WL=[0,0],F8={x:0,y:0,zoom:1},U8=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],yL=[...U8,"rfId"],q8=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),vL={translateExtent:Gl,nodeOrigin:WL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function V8(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:s,setDefaultNodesAndEdges:l}=Me(q8,Je),u=ft();(0,G.useEffect)(()=>(l(e.defaultNodes,e.defaultEdges),()=>{d.current=vL,s()}),[]);let d=(0,G.useRef)(vL);return(0,G.useEffect)(()=>{for(let f of yL){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:Rk(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},yL.map(f=>e[f])),null}function CL(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function G8(e){let[t,a]=(0,G.useState)(e==="system"?null:e);return(0,G.useEffect)(()=>{if(e!=="system"){a(e);return}let o=CL(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:CL()?.matches?"dark":"light"}var SL=typeof document<"u"?document:null;function nc(e=null,t={target:SL,actInsideInputWithModifier:!0}){let[a,o]=(0,G.useState)(!1),n=(0,G.useRef)(!1),r=(0,G.useRef)(new Set([])),[i,s]=(0,G.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,G.useEffect)(()=>{let l=t?.target??SL,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&r0(p))return!1;let w=LL(p.code,s);if(r.current.add(p[w]),kL(i,r.current,!1)){let y=p.composedPath?.()?.[0]||p.target,h=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=LL(p.code,s);kL(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return l?.addEventListener("keydown",d),l?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{l?.removeEventListener("keydown",d),l?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function kL(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function LL(e,t){return t.includes(e)?"code":"key"}var j8=()=>{let e=ft();return(0,G.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:s}=e.getState(),l=ac(t,o,n,r,i,a?.padding??.1);return s?(await s.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:s,y:l}=i.getBoundingClientRect(),u={x:t.x-s,y:t.y-l},d=a.snapGrid??n,f=a.snapToGrid??r;return Yl(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=is(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function YL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let s={...r};for(let l of i)X8(l,s);a.push(s)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function X8(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function x0(e,t){return YL(e,t)}function w0(e,t){return YL(e,t)}function ls(e,t){return{id:e,type:"select",selected:t}}function Ql(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(ls(r.id,i)))}return o}function _L({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),s=i?.internals?.userNode??i;s!==void 0&&s!==r&&a.push({id:r.id,item:r,type:"replace"}),s===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function IL(e){return{id:e.id,type:"remove"}}var W8=e0("React Flow","https://reactflow.dev/");function Y8(e,t,a={}){return Ok(e,t,{...a,onError:a.onError??W8})}var ML=e=>Ik(e),K8=e=>Wx(e);function KL(e){return(0,G.forwardRef)(e)}var ZL=typeof window<"u"?G.useLayoutEffect:G.useEffect;function NL(e){let[t,a]=(0,G.useState)(BigInt(0)),[o]=(0,G.useState)(()=>Z8(()=>a(n=>n+BigInt(1))));return ZL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function Z8(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var $L=(0,G.createContext)(null);function $8({children:e}){let t=ft(),a=(0,G.useCallback)(s=>{let{nodes:l=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),w=l;for(let h of s)w=typeof h=="function"?h(w):h;let y=_L({items:w,lookup:c});for(let h of g.values())y=h(y);d&&u(w),y.length>0?f?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:b,setNodes:m}=t.getState();h&&m(b)})},[]),o=NL(a),n=(0,G.useCallback)(s=>{let{edges:l=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=l;for(let g of s)p=typeof g=="function"?g(p):g;d?u(p):f&&f(_L({items:p,lookup:c}))},[]),r=NL(n),i=(0,G.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,V.jsx)($L.Provider,{value:i,children:e})}function Q8(){let e=(0,G.useContext)($L);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var J8=e=>!!e.panZoom;function ka(){let e=j8(),t=ft(),a=Q8(),o=Me(J8),n=(0,G.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},s=f=>{a.edgeQueue.push(f)},l=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=ML(f)?f:c.get(f.id),w=g.parentId?a0(g.position,g.measured,g.parentId,c,p):g.position,y={...g,position:w,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Xl(y)},u=(f,c,p={replace:!1})=>{i(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&ML(y)?y:{...w,...y}}return w}))},d=(f,c,p={replace:!1})=>{s(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&K8(y)?y:{...w,...y}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:s,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,w,y]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y:w,zoom:y}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:w,onEdgesDelete:y,triggerNodeChanges:h,triggerEdgeChanges:b,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:v,edges:C}=await Ek({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:x}),S=C.length>0,k=v.length>0;if(S){let _=C.map(IL);y?.(C),b(_)}if(k){let _=v.map(IL);w?.(v),h(_)}return(k||S)&&m?.({nodes:v,edges:C}),{deletedNodes:v,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=Jx(f),w=g?f:l(f),y=p!==void 0;return w?(p||t.getState().nodes).filter(h=>{let b=t.getState().nodeLookup.get(h.id);if(b&&!g&&(h.id===f.id||!b.internals.positionAbsolute))return!1;let m=Xl(y?h:b),x=tc(m,w);return c&&x>0||x>=m.width*m.height||x>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=Jx(f)?f:l(f);if(!w)return!1;let y=tc(w,c);return p&&y>0||y>=c.width*c.height||y>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Zx(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??Dk();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,G.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var EL=e=>e.selected,eD=typeof window<"u"?window:void 0;function tD({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=ft(),{deleteElements:o}=ka(),n=nc(e,{actInsideInputWithModifier:!1}),r=nc(t,{target:eD});(0,G.useEffect)(()=>{if(n){let{edges:i,nodes:s}=a.getState();o({nodes:s.filter(EL),edges:i.filter(EL)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,G.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function aD(e){let t=ft();(0,G.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=ym(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Co.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Rm={position:"absolute",width:"100%",height:"100%",top:0,left:0},oD=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function nD({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=tn.Free,zoomOnDoubleClick:s=!0,panOnDrag:l=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:w,noWheelClassName:y,noPanClassName:h,onViewportChange:b,isControlledViewport:m,paneClickDistance:x,selectionOnDrag:v}){let C=ft(),S=(0,G.useRef)(null),{userSelectionActive:k,lib:_,connectionInProgress:T}=Me(oD,Je),R=nc(p),H=(0,G.useRef)();aD(S);let U=(0,G.useCallback)(L=>{b?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[b,m]);return(0,G.useEffect)(()=>{if(S.current){H.current=eL({domNode:S.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:M=>C.setState(A=>A.paneDragging===M?A:{paneDragging:M}),onPanZoomStart:(M,A)=>{let{onViewportChangeStart:O,onMoveStart:D}=C.getState();D?.(M,A),O?.(A)},onPanZoom:(M,A)=>{let{onViewportChange:O,onMove:D}=C.getState();D?.(M,A),O?.(A)},onPanZoomEnd:(M,A)=>{let{onViewportChangeEnd:O,onMoveEnd:D}=C.getState();D?.(M,A),O?.(A)}});let{x:L,y:N,zoom:E}=H.current.getViewport();return C.setState({panZoom:H.current,transform:[L,N,E],domNode:S.current.closest(".react-flow")}),()=>{H.current?.destroy()}}},[]),(0,G.useEffect)(()=>{H.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:s,panOnDrag:l,zoomActivationKeyPressed:R,preventScrolling:g,noPanClassName:h,userSelectionActive:k,noWheelClassName:y,lib:_,onTransformChange:U,connectionInProgress:T,selectionOnDrag:v,paneClickDistance:x})},[e,t,a,o,n,r,i,s,l,R,g,h,k,y,_,U,T,v,x]),(0,V.jsx)("div",{className:"react-flow__renderer",ref:S,style:Rm,children:w})}var rD=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function iD(){let{userSelectionActive:e,userSelectionRect:t}=Me(rD,Je);return e&&t?(0,V.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var g0=(e,t)=>a=>{a.target===t.current&&e?.(a)},sD=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function lD({isSelecting:e,selectionKeyPressed:t,selectionMode:a=mr.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:s,onSelectionEnd:l,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:w}){let y=(0,G.useRef)(0),h=ft(),{userSelectionActive:b,elementsSelectable:m,dragging:x,panBy:v,autoPanSpeed:C}=Me(sD,Je),S=m&&(e||b),k=(0,G.useRef)(null),_=(0,G.useRef)(),T=(0,G.useRef)(new Set),R=(0,G.useRef)(new Set),H=(0,G.useRef)(!1),U=(0,G.useRef)(!1),L=(0,G.useRef)({x:0,y:0}),N=(0,G.useRef)(!1),E=q=>{if(U.current||H.current||h.getState().connection.inProgress){U.current=!1,H.current=!1;return}u?.(q),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},M=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}d?.(q)},A=f?q=>f(q):void 0,O=q=>{U.current&&(q.stopPropagation(),U.current=!1)},D=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:J,transform:ne}=h.getState();if(_.current=J?.getBoundingClientRect(),!_.current)return;let de=q.target===k.current;if(!de&&!!q.target.closest(".nokey")||!e||!(i&&de||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),U.current=!1;let{x:we,y:_e}=Go(q.nativeEvent,_.current),Oe=Yl({x:we,y:_e},ne);h.setState({userSelectionRect:{width:0,height:0,startX:Oe.x,startY:Oe.y,x:we,y:_e}}),de||(q.stopPropagation(),q.preventDefault())};function B(q,J){let{userSelectionRect:ne}=h.getState();if(!ne)return;let{transform:de,nodeLookup:re,edgeLookup:ce,connectionLookup:we,triggerNodeChanges:_e,triggerEdgeChanges:Oe,defaultEdgeOptions:Ct}=h.getState(),St={x:ne.startX,y:ne.startY},{x:co,y:oe}=is(St,de),Ie={startX:St.x,startY:St.y,x:q<co?q:co,y:J<oe?J:oe,width:Math.abs(q-co),height:Math.abs(J-oe)},st=T.current,kt=R.current;T.current=new Set(hm(re,Ie,de,a===mr.Partial,!0).map(Jt=>Jt.id)),R.current=new Set;let Fe=Ct?.selectable??!0;for(let Jt of T.current){let Tt=we.get(Jt);if(Tt)for(let{edgeId:Wa}of Tt.values()){let Vn=ce.get(Wa);Vn&&(Vn.selectable??Fe)&&R.current.add(Wa)}}if(!o0(st,T.current)){let Jt=Ql(re,T.current,!0);_e(Jt)}if(!o0(kt,R.current)){let Jt=Ql(ce,R.current);Oe(Jt)}h.setState({userSelectionRect:Ie,userSelectionActive:!0,nodesSelectionActive:!1})}function z(){if(!n||!_.current)return;let[q,J]=bm(L.current,_.current,C);v({x:q,y:J}).then(ne=>{if(!U.current||!ne){y.current=requestAnimationFrame(z);return}let{x:de,y:re}=L.current;B(de,re),y.current=requestAnimationFrame(z)})}let j=()=>{cancelAnimationFrame(y.current),y.current=0,N.current=!1};(0,G.useEffect)(()=>()=>j(),[]);let F=q=>{let{userSelectionRect:J,transform:ne,resetSelectedElements:de}=h.getState();if(!_.current||!J)return;let{x:re,y:ce}=Go(q.nativeEvent,_.current);L.current={x:re,y:ce};let we=is({x:J.startX,y:J.startY},ne);if(!U.current){let _e=t?0:r;if(Math.hypot(re-we.x,ce-we.y)<=_e)return;de(),s?.(q)}U.current=!0,N.current||(z(),N.current=!0),B(re,ce)},K=q=>{if(!S){q.target===k.current&&h.getState().connection.inProgress&&(H.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!b&&q.target===k.current&&h.getState().userSelectionRect&&E?.(q),h.setState({userSelectionActive:!1,userSelectionRect:null}),U.current&&(l?.(q),h.setState({nodesSelectionActive:T.current.size>0})),j())},$=q=>{q.target?.releasePointerCapture?.(q.pointerId),j()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,V.jsxs)("div",{className:It(["react-flow__pane",{draggable:ee,dragging:x,selection:e}]),onClick:S?void 0:g0(E,k),onContextMenu:g0(M,k),onWheel:g0(A,k),onPointerEnter:S?void 0:c,onPointerMove:S?F:p,onPointerUp:K,onPointerCancel:S?$:void 0,onPointerDownCapture:S?D:void 0,onClickCapture:S?O:void 0,onPointerLeave:g,ref:k,style:Rm,children:[w,(0,V.jsx)(iD,{})]})}function b0({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:s,onError:l}=t.getState(),u=s.get(e);if(!u){l?.("012",Co.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function QL({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let s=ft(),[l,u]=(0,G.useState)(!1),d=(0,G.useRef)();return(0,G.useEffect)(()=>{if(!t)return d.current=Xk({getStoreItems:()=>s.getState(),onNodeMouseDown:f=>{b0({id:f,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,s,e]),(0,G.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),l}var dD=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function JL(){let e=ft();return(0,G.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:s,updateNodePositions:l,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=dD(i),p=n?r[0]:5,g=n?r[1]:5,w=a.direction.x*p*a.factor,y=a.direction.y*g*a.factor;for(let[,h]of u){if(!c(h))continue;let b={x:h.internals.positionAbsolute.x+w,y:h.internals.positionAbsolute.y+y};n&&(b=Wl(b,r));let{position:m,positionAbsolute:x}=$x({nodeId:h.id,nextPosition:b,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:s});h.position=m,h.internals.positionAbsolute=x,f.set(h.id,h)}l(f)},[])}var y0=(0,G.createContext)(null),uD=y0.Provider;y0.Consumer;var e_=()=>(0,G.useContext)(y0),cD=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),t_=(0,G.createContext)(null);function fD({children:e}){let t=Me(cD,Je);return(0,V.jsx)(t_.Provider,{value:t,children:e})}function pD(){let e=(0,G.useContext)(t_);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var mD={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},gD=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:s,toHandle:l,isValid:u}=i;if(!s&&!n)return mD;let d=l?.nodeId===e&&l?.id===t&&l?.type===a;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===ui.Strict?s?.type!==a:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!n,valid:d&&u}};function hD({type:e="source",position:t=ie.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:s,children:l,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=i||null,w=e==="target",y=ft(),h=e_(),{connectOnClick:b,noPanClassName:m,rfId:x}=pD(),{connectingFrom:v,connectingTo:C,clickConnecting:S,isPossibleEndHandle:k,connectionInProcess:_,clickConnectionInProcess:T,valid:R}=Me(gD(h,g,e),Je);h||y.getState().onError?.("010",Co.error010());let H=N=>{let{defaultEdgeOptions:E,onConnect:M,hasDefaultEdges:A}=y.getState(),O={...E,...N};if(A){let{edges:D,setEdges:B,onError:z}=y.getState();B(Y8(O,D,{onError:z}))}M?.(O),s?.(O)},U=N=>{if(!h)return;let E=i0(N.nativeEvent);if(n&&(E&&N.button===0||!E)){let M=y.getState();_m.onPointerDown(N.nativeEvent,{handleDomNode:N.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:w,handleId:g,nodeId:h,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...A)=>y.getState().onConnectEnd?.(...A),updateConnection:M.updateConnection,onConnect:H,isValidConnection:a||((...A)=>y.getState().isValidConnection?.(...A)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}E?d?.(N):f?.(N)},L=N=>{let{onClickConnectStart:E,onClickConnectEnd:M,connectionClickStartHandle:A,connectionMode:O,isValidConnection:D,lib:B,rfId:z,nodeLookup:j,connection:F}=y.getState();if(!h||!A&&!n)return;if(!A){E?.(N.nativeEvent,{nodeId:h,handleId:g,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let K=n0(N.target),$=a||D,{connection:ee,isValid:q}=_m.isValid(N.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:O,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:$,flowId:z,doc:K,lib:B,nodeLookup:j});q&&ee&&H(ee);let J=structuredClone(F);delete J.inProgress,J.toPosition=J.toHandle?J.toHandle.position:null,M?.(N,J),y.setState({connectionClickStartHandle:null})};return(0,V.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${x}-${h}-${g}-${e}`,className:It(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:S,connectingfrom:v,connectingto:C,valid:R,connectionindicator:o&&(!_||k)&&(_||T?r:n)}]),onMouseDown:U,onTouchStart:U,onClick:b?L:void 0,ref:p,...c,children:l})}var Jl=(0,G.memo)(KL(hD));function bD({data:e,isConnectable:t,sourcePosition:a=ie.Bottom}){return(0,V.jsxs)(V.Fragment,{children:[e?.label,(0,V.jsx)(Jl,{type:"source",position:a,isConnectable:t})]})}function xD({data:e,isConnectable:t,targetPosition:a=ie.Top,sourcePosition:o=ie.Bottom}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Jl,{type:"target",position:a,isConnectable:t}),e?.label,(0,V.jsx)(Jl,{type:"source",position:o,isConnectable:t})]})}function wD(){return null}function yD({data:e,isConnectable:t,targetPosition:a=ie.Top}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Jl,{type:"target",position:a,isConnectable:t}),e?.label]})}var Tm={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},TL={input:bD,default:xD,output:yD,group:wD};function vD(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var CD=e=>{let{width:t,height:a,x:o,y:n}=jl(e.nodeLookup,{filter:r=>!!r.selected});return{width:Vo(t)?t:null,height:Vo(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function SD({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=ft(),{width:n,height:r,transformString:i,userSelectionActive:s}=Me(CD,Je),l=JL(),u=(0,G.useRef)(null);(0,G.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!s&&n!==null&&r!==null;if(QL({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(w=>w.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Tm,p.key)&&(p.preventDefault(),l({direction:Tm[p.key],factor:p.shiftKey?4:1}))};return(0,V.jsx)("div",{className:It(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,V.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var AL=typeof window<"u"?window:void 0,kD=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function a_({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:s,deleteKeyCode:l,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:w,zoomActivationKeyCode:y,elementsSelectable:h,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:k,autoPanOnSelection:_,defaultViewport:T,translateExtent:R,minZoom:H,maxZoom:U,preventScrolling:L,onSelectionContextMenu:N,noWheelClassName:E,noPanClassName:M,disableKeyboardA11y:A,onViewportChange:O,isControlledViewport:D}){let{nodesSelectionActive:B,userSelectionActive:z}=Me(kD,Je),j=nc(u,{target:AL}),F=nc(w,{target:AL}),K=F||k,$=F||x,ee=d&&K!==!0,q=j||z||ee;return tD({deleteKeyCode:l,multiSelectionKeyCode:g}),(0,V.jsx)(nD,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:$,panActivationKeyPressed:F,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:!j&&K,defaultViewport:T,translateExtent:R,minZoom:H,maxZoom:U,zoomActivationKeyCode:y,preventScrolling:L,noWheelClassName:E,noPanClassName:M,onViewportChange:O,isControlledViewport:D,paneClickDistance:s,selectionOnDrag:ee,children:(0,V.jsxs)(lD,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:K,autoPanOnSelection:_,isSelecting:!!q,selectionMode:f,selectionKeyPressed:j,paneClickDistance:s,selectionOnDrag:ee,children:[e,B&&(0,V.jsx)(SD,{onSelectionContextMenu:N,noPanClassName:M,disableKeyboardA11y:A})]})})}a_.displayName="FlowRenderer";var LD=(0,G.memo)(a_),_D=e=>t=>e?hm(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function ID(e){return Me((0,G.useCallback)(_D(e),[e]),Je)}var MD=e=>e.updateNodeInternals;function ND(){let e=Me(MD),[t]=(0,G.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,G.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function ED({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=ft(),r=(0,G.useRef)(null),i=(0,G.useRef)(null),s=(0,G.useRef)(e.sourcePosition),l=(0,G.useRef)(e.targetPosition),u=(0,G.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,G.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,G.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,G.useEffect)(()=>{if(r.current){let f=u.current!==t,c=s.current!==e.sourcePosition,p=l.current!==e.targetPosition;(f||c||p)&&(u.current=t,s.current=e.sourcePosition,l.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function TD({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:s,elementsSelectable:l,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:w,nodeTypes:y,nodeClickDistance:h,onError:b}){let{node:m,internals:x,isParent:v}=Me(q=>{let J=q.nodeLookup.get(e),ne=q.parentLookup.has(e);return{node:J,internals:J.internals,isParent:ne}},Je),C=m.type||"default",S=y?.[C]||TL[C];S===void 0&&(b?.("003",Co.error003(C)),C="default",S=y?.default||TL.default);let k=!!(m.draggable||s&&typeof m.draggable>"u"),_=!!(m.selectable||l&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||d&&typeof m.focusable>"u"),H=ft(),U=t0(m),L=ED({node:m,nodeType:C,hasDimensions:U,resizeObserver:f}),N=QL({nodeRef:L,disabled:m.hidden||!k,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:h}),E=JL();if(m.hidden)return null;let M=jo(m),A=vD(m),O=_||k||t||a||o||n,D=a?q=>a(q,{...x.userNode}):void 0,B=o?q=>o(q,{...x.userNode}):void 0,z=n?q=>n(q,{...x.userNode}):void 0,j=r?q=>r(q,{...x.userNode}):void 0,F=i?q=>i(q,{...x.userNode}):void 0,K=q=>{let{selectNodesOnDrag:J,nodeDragThreshold:ne}=H.getState();_&&(!J||!k||ne>0)&&b0({id:e,store:H,nodeRef:L}),t&&t(q,{...x.userNode})},$=q=>{if(!(r0(q.nativeEvent)||g)){if(Vx.includes(q.key)&&_){let J=q.key==="Escape";b0({id:e,store:H,unselect:J,nodeRef:L})}else if(k&&m.selected&&Object.prototype.hasOwnProperty.call(Tm,q.key)){q.preventDefault();let{ariaLabelConfig:J}=H.getState();H.setState({ariaLiveMessage:J["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),E({direction:Tm[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:J,height:ne,autoPanOnNodeFocus:de,setCenter:re}=H.getState();if(!de)return;hm(new Map([[e,m]]),{x:0,y:0,width:J,height:ne},q,!0).length>0||re(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:q[2]})};return(0,V.jsx)("div",{className:It(["react-flow__node",`react-flow__node-${C}`,{[p]:k},m.className,{selected:m.selected,selectable:_,parent:v,draggable:k,dragging:N}]),ref:L,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:O?"all":"none",visibility:U?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:D,onMouseMove:B,onMouseLeave:z,onContextMenu:j,onClick:K,onDoubleClick:F,onKeyDown:R?$:void 0,tabIndex:R?0:void 0,onFocus:R?ee:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${jL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,V.jsx)(uD,{value:e,children:(0,V.jsx)(S,{id:e,data:m.data,type:C,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:k,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:N,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...M})})})}var AD=(0,G.memo)(TD),DD=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function o_(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=Me(DD,Je),r=ID(e.onlyRenderVisibleElements),i=ND();return(0,V.jsx)("div",{className:"react-flow__nodes",style:Rm,children:r.map(s=>(0,V.jsx)(AD,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},s))})}o_.displayName="NodeRenderer";var RD=(0,G.memo)(o_);function PD(e){return Me((0,G.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&zk({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Je)}var zD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,V.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},OD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,V.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},DL={[ql.Arrow]:zD,[ql.ArrowClosed]:OD};function HD(e){let t=ft();return(0,G.useMemo)(()=>Object.prototype.hasOwnProperty.call(DL,e)?DL[e]:(t.getState().onError?.("009",Co.error009(e)),null),[e])}var BD=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:s="auto-start-reverse"})=>{let l=HD(t);return l?(0,V.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:s,refX:"0",refY:"0",children:(0,V.jsx)(l,{color:a,strokeWidth:i})}):null},n_=({defaultColor:e,rfId:t})=>{let a=Me(r=>r.edges),o=Me(r=>r.defaultEdgeOptions),n=(0,G.useMemo)(()=>Bk(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,V.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,V.jsx)("defs",{children:n.map(r=>(0,V.jsx)(BD,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};n_.displayName="MarkerDefinitions";var FD=(0,G.memo)(n_);function r_({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:s=2,children:l,className:u,...d}){let[f,c]=(0,G.useState)({x:1,y:0,width:0,height:0}),p=It(["react-flow__edge-textwrapper",u]),g=(0,G.useRef)(null);return(0,G.useEffect)(()=>{if(g.current){let w=g.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,V.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,V.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:s,ry:s}),(0,V.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),l]}):null}r_.displayName="EdgeText";var UD=(0,G.memo)(r_);function ed({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:s,labelBgBorderRadius:l,interactionWidth:u=20,...d}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("path",{...d,d:e,fill:"none",className:It(["react-flow__edge-path",d.className])}),u?(0,V.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Vo(t)&&Vo(a)?(0,V.jsx)(UD,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:s,labelBgBorderRadius:l}):null]})}function RL({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ie.Left||e===ie.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function i_({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top}){let[i,s]=RL({pos:a,x1:e,y1:t,x2:o,y2:n}),[l,u]=RL({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=vm({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:l,targetControlY:u});return[`M${e},${t} C${i},${s} ${l},${u} ${o},${n}`,d,f,c,p]}function s_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:s,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})=>{let[b,m,x]=i_({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:s}),v=e.isInternal?void 0:t;return(0,V.jsx)(ed,{id:v,path:b,labelX:m,labelY:x,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})})}var qD=s_({isInternal:!1}),l_=s_({isInternal:!0});qD.displayName="SimpleBezierEdge";l_.displayName="SimpleBezierEdgeInternal";function d_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ie.Bottom,targetPosition:g=ie.Top,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:b})=>{let[m,x,v]=oc({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,V.jsx)(ed,{id:C,path:m,labelX:x,labelY:v,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:y,interactionWidth:b})})}var u_=d_({isInternal:!1}),c_=d_({isInternal:!0});u_.displayName="SmoothStepEdge";c_.displayName="SmoothStepEdgeInternal";function f_(e){return(0,G.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,V.jsx)(u_,{...a,id:o,pathOptions:(0,G.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var VD=f_({isInternal:!1}),p_=f_({isInternal:!0});VD.displayName="StepEdge";p_.displayName="StepEdgeInternal";function m_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})=>{let[y,h,b]=Cm({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,V.jsx)(ed,{id:m,path:y,labelX:h,labelY:b,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})})}var GD=m_({isInternal:!1}),g_=m_({isInternal:!0});GD.displayName="StraightEdge";g_.displayName="StraightEdgeInternal";function h_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=ie.Bottom,targetPosition:s=ie.Top,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:b})=>{let[m,x,v]=Zl({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:s,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,V.jsx)(ed,{id:C,path:m,labelX:x,labelY:v,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:b})})}var jD=h_({isInternal:!1}),b_=h_({isInternal:!0});jD.displayName="BezierEdge";b_.displayName="BezierEdgeInternal";var PL={default:b_,straight:g_,step:p_,smoothstep:c_,simplebezier:l_},zL={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},XD=(e,t,a)=>a===ie.Left?e-t:a===ie.Right?e+t:e,WD=(e,t,a)=>a===ie.Top?e-t:a===ie.Bottom?e+t:e,OL="react-flow__edgeupdater";function HL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:s}){return(0,V.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:It([OL,`${OL}-${s}`]),cx:XD(t,o,e),cy:WD(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function YD({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=ft(),w=(x,v)=>{if(x.button!==0)return;let{autoPanOnConnect:C,domNode:S,connectionMode:k,connectionRadius:_,lib:T,onConnectStart:R,cancelConnection:H,nodeLookup:U,rfId:L,panBy:N,updateConnection:E}=g.getState(),M=v.type==="target",A=(B,z)=>{c(!1),f?.(B,a,v.type,z)},O=B=>u?.(a,B),D=(B,z)=>{c(!0),d?.(x,a,v.type),R?.(B,z)};_m.onPointerDown(x.nativeEvent,{autoPanOnConnect:C,connectionMode:k,connectionRadius:_,domNode:S,handleId:v.id,nodeId:v.nodeId,nodeLookup:U,isTarget:M,edgeUpdaterType:v.type,lib:T,flowId:L,cancelConnection:H,panBy:N,isValidConnection:(...B)=>g.getState().isValidConnection?.(...B)??!0,onConnect:O,onConnectStart:D,onConnectEnd:(...B)=>g.getState().onConnectEnd?.(...B),onReconnectEnd:A,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},y=x=>w(x,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=x=>w(x,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),b=()=>p(!0),m=()=>p(!1);return(0,V.jsxs)(V.Fragment,{children:[(e===!0||e==="source")&&(0,V.jsx)(HL,{position:s,centerX:o,centerY:n,radius:t,onMouseDown:y,onMouseEnter:b,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,V.jsx)(HL,{position:l,centerX:r,centerY:i,radius:t,onMouseDown:h,onMouseEnter:b,onMouseOut:m,type:"target"})]})}function KD({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:w,noPanClassName:y,onError:h,disableKeyboardA11y:b}){let m=Me(re=>re.edgeLookup.get(e)),x=Me(re=>re.defaultEdgeOptions);m=x?{...x,...m}:m;let v=m.type||"default",C=w?.[v]||PL[v];C===void 0&&(h?.("011",Co.error011(v)),v="default",C=w?.default||PL.default);let S=!!(m.focusable||t&&typeof m.focusable>"u"),k=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,G.useRef)(null),[R,H]=(0,G.useState)(!1),[U,L]=(0,G.useState)(!1),N=ft(),{zIndex:E=m.zIndex,sourceX:M,sourceY:A,targetX:O,targetY:D,sourcePosition:B,targetPosition:z}=Me((0,G.useCallback)(re=>{let ce=re.nodeLookup.get(m.source),we=re.nodeLookup.get(m.target);if(!ce||!we)return zL;let _e=Hk({id:e,sourceNode:ce,targetNode:we,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:re.connectionMode,onError:h}),Oe=Pk({selected:m.selected,zIndex:m.zIndex,sourceNode:ce,targetNode:we,elevateOnSelect:re.elevateEdgesOnSelect,zIndexMode:re.zIndexMode});return{..._e||zL,zIndex:Oe}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Je),j=(0,G.useMemo)(()=>m.markerStart?`url('#${Sm(m.markerStart,g)}')`:void 0,[m.markerStart,g]),F=(0,G.useMemo)(()=>m.markerEnd?`url('#${Sm(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||M===null||A===null||O===null||D===null)return null;let K=re=>{let{addSelectedEdges:ce,unselectNodesAndEdges:we,multiSelectionActive:_e}=N.getState();_&&(N.setState({nodesSelectionActive:!1}),m.selected&&_e?(we({nodes:[],edges:[m]}),T.current?.blur()):ce([e])),n&&n(re,m)},$=r?re=>{r(re,{...m})}:void 0,ee=i?re=>{i(re,{...m})}:void 0,q=s?re=>{s(re,{...m})}:void 0,J=l?re=>{l(re,{...m})}:void 0,ne=u?re=>{u(re,{...m})}:void 0,de=re=>{if(!b&&Vx.includes(re.key)&&_){let{unselectNodesAndEdges:ce,addSelectedEdges:we}=N.getState();re.key==="Escape"?(T.current?.blur(),ce({edges:[m]})):we([e])}};return(0,V.jsx)("svg",{style:{zIndex:E},children:(0,V.jsxs)("g",{className:It(["react-flow__edge",`react-flow__edge-${v}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:R,selectable:_}]),onClick:K,onDoubleClick:$,onContextMenu:ee,onMouseEnter:q,onMouseMove:J,onMouseLeave:ne,onKeyDown:S?de:void 0,tabIndex:S?0:void 0,role:m.ariaRole??(S?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":S?`${XL}-${g}`:void 0,ref:T,...m.domAttributes,children:[!U&&(0,V.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:A,targetX:O,targetY:D,sourcePosition:B,targetPosition:z,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:j,markerEnd:F,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),k&&(0,V.jsx)(YD,{edge:m,isReconnectable:k,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:M,sourceY:A,targetX:O,targetY:D,sourcePosition:B,targetPosition:z,setUpdateHover:H,setReconnecting:L})]})})}var ZD=(0,G.memo)(KD),$D=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function x_({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:s,onEdgeMouseMove:l,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:w}){let{edgesFocusable:y,edgesReconnectable:h,elementsSelectable:b,onError:m}=Me($D,Je),x=PD(t);return(0,V.jsxs)("div",{className:"react-flow__edges",children:[(0,V.jsx)(FD,{defaultColor:e,rfId:a}),x.map(v=>(0,V.jsx)(ZD,{id:v,edgesFocusable:y,edgesReconnectable:h,elementsSelectable:b,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},v))]})}x_.displayName="EdgeRenderer";var QD=(0,G.memo)(x_),BL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function JD({children:e}){let t=ft(),a=(0,G.useRef)(null),[o]=(0,G.useState)(()=>t.getState().transform);return ZL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=BL(i)))};return r(),t.subscribe(r)},[t]),(0,V.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:BL(o)},children:e})}function eR(e){let t=ka(),a=(0,G.useRef)(!1);(0,G.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var tR=e=>e.panZoom?.syncViewport;function aR(e){let t=Me(tR),a=ft();return(0,G.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function FL(e){return e.connection.inProgress?{...e.connection,to:Yl(e.connection.to,e.transform)}:{...e.connection}}function oR(e){return e?a=>{let o=FL(a);return e(o)}:FL}function v0(e){let t=oR(e);return Me(t,Je)}var nR=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function rR({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:s,inProgress:l}=Me(nR,Je);return!(r&&n&&l)?null:(0,V.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,V.jsx)("g",{className:It(["react-flow__connection",Xx(s)]),children:(0,V.jsx)(w_,{style:t,type:a,CustomComponent:o,isValid:s})})})}var w_=({style:e,type:t=_n.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:s,fromPosition:l,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=v0();if(!n)return;if(a)return(0,V.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:s,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:l,toPosition:c,connectionStatus:Xx(o),toNode:d,toHandle:f,pointer:p});let g="",w={sourceX:r.x,sourceY:r.y,sourcePosition:l,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case _n.Bezier:[g]=Zl(w);break;case _n.SimpleBezier:[g]=i_(w);break;case _n.Step:[g]=oc({...w,borderRadius:0});break;case _n.SmoothStep:[g]=oc(w);break;default:[g]=Cm(w)}return(0,V.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};w_.displayName="ConnectionLine";var iR={};function UL(e=iR){let t=(0,G.useRef)(e),a=ft();(0,G.useEffect)(()=>{},[e])}function sR(){let e=ft(),t=(0,G.useRef)(!1);(0,G.useEffect)(()=>{},[])}function y_({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:w,connectionLineComponent:y,connectionLineContainerStyle:h,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,deleteKeyCode:k,onlyRenderVisibleElements:_,elementsSelectable:T,defaultViewport:R,translateExtent:H,minZoom:U,maxZoom:L,preventScrolling:N,defaultMarkerColor:E,zoomOnScroll:M,zoomOnPinch:A,panOnScroll:O,panOnScrollSpeed:D,panOnScrollMode:B,zoomOnDoubleClick:z,panOnDrag:j,autoPanOnSelection:F,onPaneClick:K,onPaneMouseEnter:$,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:J,onPaneContextMenu:ne,paneClickDistance:de,nodeClickDistance:re,onEdgeContextMenu:ce,onEdgeMouseEnter:we,onEdgeMouseMove:_e,onEdgeMouseLeave:Oe,reconnectRadius:Ct,onReconnect:St,onReconnectStart:co,onReconnectEnd:oe,noDragClassName:Ie,noWheelClassName:st,noPanClassName:kt,disableKeyboardA11y:Fe,nodeExtent:Jt,rfId:Tt,viewport:Wa,onViewportChange:Vn,nodesDraggable:Ld}){return UL(e),UL(t),sR(),eR(a),aR(Wa),(0,V.jsx)(LD,{onPaneClick:K,onPaneMouseEnter:$,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:ne,onPaneScroll:J,paneClickDistance:de,deleteKeyCode:k,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,elementsSelectable:T,zoomOnScroll:M,zoomOnPinch:A,zoomOnDoubleClick:z,panOnScroll:O,panOnScrollSpeed:D,panOnScrollMode:B,panOnDrag:j,autoPanOnSelection:F,defaultViewport:R,translateExtent:H,minZoom:U,maxZoom:L,onSelectionContextMenu:f,preventScrolling:N,noDragClassName:Ie,noWheelClassName:st,noPanClassName:kt,disableKeyboardA11y:Fe,onViewportChange:Vn,isControlledViewport:!!Wa,children:(0,V.jsxs)(JD,{children:[(0,V.jsx)(QD,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:St,onReconnectStart:co,onReconnectEnd:oe,onlyRenderVisibleElements:_,onEdgeContextMenu:ce,onEdgeMouseEnter:we,onEdgeMouseMove:_e,onEdgeMouseLeave:Oe,reconnectRadius:Ct,defaultMarkerColor:E,noPanClassName:kt,disableKeyboardA11y:Fe,rfId:Tt}),(0,V.jsx)(rR,{style:w,type:g,component:y,containerStyle:h}),(0,V.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,V.jsx)(RD,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:re,onlyRenderVisibleElements:_,noPanClassName:kt,noDragClassName:Ie,disableKeyboardA11y:Fe,nodeExtent:Jt,rfId:Tt,nodesDraggable:Ld}),(0,V.jsx)("div",{className:"react-flow__viewport-portal"})]})})}y_.displayName="GraphView";var lR=(0,G.memo)(y_),dR=e0("React Flow","https://reactflow.dev/"),qL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,w=new Map,y=new Map,h=o??t??[],b=a??e??[],m=d??[0,0],x=f??Gl;f0(w,y,h);let{nodesInitialized:v}=km(b,p,g,{nodeOrigin:m,nodeExtent:x,zIndexMode:c}),C=[0,0,1];if(i&&n&&r){let S=jl(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:k,y:_,zoom:T}=ac(S,n,r,l,u,s?.padding??.1);C=[k,_,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:b,nodesInitialized:v,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:y,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:l,maxZoom:u,translateExtent:Gl,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ui.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:s,fitViewResolver:null,connection:{...jx},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:dR,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Gx,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},uR=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>bL((p,g)=>{async function w(){let{nodeLookup:y,panZoom:h,fitViewOptions:b,fitViewResolver:m,width:x,height:v,minZoom:C,maxZoom:S}=g();h&&(await Nk({nodes:y,width:x,height:v,panZoom:h,minZoom:C,maxZoom:S},b),m?.resolve(!0),p({fitViewResolver:null}))}return{...qL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:y=>{let{nodeLookup:h,parentLookup:b,nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:v,fitViewQueued:C,zIndexMode:S,nodesSelectionActive:k}=g(),{nodesInitialized:_,hasSelectedNodes:T}=km(y,h,b,{nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),R=k&&T;C&&_?(w(),p({nodes:y,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:R})):p({nodes:y,nodesInitialized:_,nodesSelectionActive:R})},setEdges:y=>{let{connectionLookup:h,edgeLookup:b}=g();f0(h,b,y),p({edges:y})},setDefaultNodesAndEdges:(y,h)=>{if(y){let{setNodes:b}=g();b(y),p({hasDefaultNodes:!0})}if(h){let{setEdges:b}=g();b(h),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:h,nodeLookup:b,parentLookup:m,domNode:x,nodeOrigin:v,nodeExtent:C,debug:S,fitViewQueued:k,zIndexMode:_}=g(),{changes:T,updatedInternals:R}=Vk(y,b,m,x,v,C,_);R&&(Uk(b,m,{nodeOrigin:v,nodeExtent:C,zIndexMode:_}),k?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(S&&console.log("React Flow: trigger node changes",T),h?.(T)))},updateNodePositions:(y,h=!1)=>{let b=[],m=[],{nodeLookup:x,triggerNodeChanges:v,connection:C,updateConnection:S,onNodesChangeMiddlewareMap:k}=g();for(let[_,T]of y){let R=x.get(_),H=!!(R?.expandParent&&R?.parentId&&T?.position),U={id:_,type:"position",position:H?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:h};if(R&&C.inProgress&&C.fromNode.id===R.id){let L=ci(R,C.fromHandle,ie.Left,!0);S({...C,from:L})}H&&R.parentId&&b.push({id:_,parentId:R.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(U)}if(b.length>0){let{parentLookup:_,nodeOrigin:T}=g(),R=Lm(b,x,_,T);m.push(...R)}for(let _ of k.values())m=_(m);v(m)},triggerNodeChanges:y=>{let{onNodesChange:h,setNodes:b,nodes:m,hasDefaultNodes:x,debug:v}=g();if(y?.length){if(x){let C=x0(y,m);b(C)}v&&console.log("React Flow: trigger node changes",y),h?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:h,setEdges:b,edges:m,hasDefaultEdges:x,debug:v}=g();if(y?.length){if(x){let C=w0(y,m);b(C)}v&&console.log("React Flow: trigger edge changes",y),h?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:h,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:v}=g();if(h){let C=y.map(S=>ls(S,!0));x(C);return}x(Ql(m,new Set([...y]),!0)),v(Ql(b))},addSelectedEdges:y=>{let{multiSelectionActive:h,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:v}=g();if(h){let C=y.map(S=>ls(S,!0));v(C);return}v(Ql(b,new Set([...y]))),x(Ql(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:h}={})=>{let{edges:b,nodes:m,nodeLookup:x,triggerNodeChanges:v,triggerEdgeChanges:C}=g(),S=y||m,k=h||b,_=[];for(let R of S){if(!R.selected)continue;let H=x.get(R.id);H&&(H.selected=!1),_.push(ls(R.id,!1))}let T=[];for(let R of k)R.selected&&T.push(ls(R.id,!1));v(_),C(T)},setMinZoom:y=>{let{panZoom:h,maxZoom:b}=g();h?.setScaleExtent([y,b]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:h,minZoom:b}=g();h?.setScaleExtent([b,y]),p({maxZoom:y})},setTranslateExtent:y=>{g().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:h,triggerNodeChanges:b,triggerEdgeChanges:m,elementsSelectable:x}=g();if(!x)return;let v=h.reduce((S,k)=>k.selected?[...S,ls(k.id,!1)]:S,[]),C=y.reduce((S,k)=>k.selected?[...S,ls(k.id,!1)]:S,[]);b(v),m(C)},setNodeExtent:y=>{let{nodes:h,nodeLookup:b,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:v,nodeExtent:C,zIndexMode:S}=g();y[0][0]===C[0][0]&&y[0][1]===C[0][1]&&y[1][0]===C[1][0]&&y[1][1]===C[1][1]||(km(h,b,m,{nodeOrigin:x,nodeExtent:y,elevateNodesOnSelect:v,checkEquality:!1,zIndexMode:S}),p({nodeExtent:y}))},panBy:y=>{let{transform:h,width:b,height:m,panZoom:x,translateExtent:v}=g();return Gk({delta:y,panZoom:x,transform:h,translateExtent:v,width:b,height:m})},setCenter:async(y,h,b)=>{let{width:m,height:x,maxZoom:v,panZoom:C}=g();if(!C)return!1;let S=typeof b?.zoom<"u"?b.zoom:v;return await C.setViewport({x:m/2-y*S,y:x/2-h*S,zoom:S},{duration:b?.duration,ease:b?.ease,interpolate:b?.interpolate}),!0},cancelConnection:()=>{p({connection:{...jx}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...qL()})}},Object.is);function C0({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:s,initialFitViewOptions:l,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,G.useState)(()=>uR({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:s,fitViewOptions:l,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,V.jsx)(I8,{value:g,children:(0,V.jsx)($8,{children:(0,V.jsx)(fD,{children:p})})})}function cR({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:s,fitViewOptions:l,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,G.useContext)(Am)?(0,V.jsx)(V.Fragment,{children:e}):(0,V.jsx)(C0,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:s,initialFitViewOptions:l,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var fR={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function pR({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:s,onEdgeClick:l,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:v,onNodeDoubleClick:C,onNodeDragStart:S,onNodeDrag:k,onNodeDragStop:_,onNodesDelete:T,onEdgesDelete:R,onDelete:H,onSelectionChange:U,onSelectionDragStart:L,onSelectionDrag:N,onSelectionDragStop:E,onSelectionContextMenu:M,onSelectionStart:A,onSelectionEnd:O,onBeforeDelete:D,connectionMode:B,connectionLineType:z=_n.Bezier,connectionLineStyle:j,connectionLineComponent:F,connectionLineContainerStyle:K,deleteKeyCode:$="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:J=mr.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:de=Kl()?"Meta":"Control",zoomActivationKeyCode:re=Kl()?"Meta":"Control",snapToGrid:ce,snapGrid:we,onlyRenderVisibleElements:_e=!1,selectNodesOnDrag:Oe,nodesDraggable:Ct,autoPanOnNodeFocus:St,nodesConnectable:co,nodesFocusable:oe,nodeOrigin:Ie=WL,edgesFocusable:st,edgesReconnectable:kt,elementsSelectable:Fe=!0,defaultViewport:Jt=F8,minZoom:Tt=.5,maxZoom:Wa=2,translateExtent:Vn=Gl,preventScrolling:Ld=!0,nodeExtent:_d,defaultMarkerColor:Id="#b1b1b7",zoomOnScroll:Sg=!0,zoomOnPinch:kg=!0,panOnScroll:rf=!1,panOnScrollSpeed:Lg=.5,panOnScrollMode:Us=tn.Free,zoomOnDoubleClick:_g=!0,panOnDrag:Ig=!0,onPaneClick:Mg,onPaneMouseEnter:Md,onPaneMouseMove:Ng,onPaneMouseLeave:Eg,onPaneScroll:qs,onPaneContextMenu:Tg,paneClickDistance:Ag=1,nodeClickDistance:Dg=0,children:Rg,onReconnect:Pg,onReconnectStart:zg,onReconnectEnd:Z,onEdgeContextMenu:ue,onEdgeDoubleClick:ke,onEdgeMouseEnter:Le,onEdgeMouseMove:gt,onEdgeMouseLeave:Xe,reconnectRadius:He=10,onNodesChange:Pt,onEdgesChange:tt,noDragClassName:ht="nodrag",noWheelClassName:ea="nowheel",noPanClassName:Vs="nopan",fitView:Nr,fitViewOptions:Sw,connectOnClick:BN,attributionPosition:FN,proOptions:UN,defaultEdgeOptions:qN,elevateNodesOnSelect:VN=!0,elevateEdgesOnSelect:GN=!1,disableKeyboardA11y:kw=!1,autoPanOnConnect:jN,autoPanOnNodeDrag:XN,autoPanOnSelection:WN=!0,autoPanSpeed:YN,connectionRadius:KN,isValidConnection:ZN,onError:$N,style:QN,id:Lw,nodeDragThreshold:JN,connectionDragThreshold:e3,viewport:t3,onViewportChange:a3,width:o3,height:n3,colorMode:r3="light",debug:i3,onScroll:_w,ariaLabelConfig:s3,zIndexMode:Iw="basic",...l3},d3){let Og=Lw||"1",u3=G8(r3),c3=(0,G.useCallback)(Mw=>{Mw.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),_w?.(Mw)},[_w]);return(0,V.jsx)("div",{"data-testid":"rf__wrapper",...l3,onScroll:c3,style:{...QN,...fR},ref:d3,className:It(["react-flow",n,u3]),id:Lw,role:"application",children:(0,V.jsxs)(cR,{nodes:e,edges:t,width:o3,height:n3,fitView:Nr,fitViewOptions:Sw,minZoom:Tt,maxZoom:Wa,nodeOrigin:Ie,nodeExtent:_d,zIndexMode:Iw,children:[(0,V.jsx)(V8,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,nodesDraggable:Ct,autoPanOnNodeFocus:St,nodesConnectable:co,nodesFocusable:oe,edgesFocusable:st,edgesReconnectable:kt,elementsSelectable:Fe,elevateNodesOnSelect:VN,elevateEdgesOnSelect:GN,minZoom:Tt,maxZoom:Wa,nodeExtent:_d,onNodesChange:Pt,onEdgesChange:tt,snapToGrid:ce,snapGrid:we,connectionMode:B,translateExtent:Vn,connectOnClick:BN,defaultEdgeOptions:qN,fitView:Nr,fitViewOptions:Sw,onNodesDelete:T,onEdgesDelete:R,onDelete:H,onNodeDragStart:S,onNodeDrag:k,onNodeDragStop:_,onSelectionDrag:N,onSelectionDragStart:L,onSelectionDragStop:E,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:Vs,nodeOrigin:Ie,rfId:Og,autoPanOnConnect:jN,autoPanOnNodeDrag:XN,autoPanSpeed:YN,onError:$N,connectionRadius:KN,isValidConnection:ZN,selectNodesOnDrag:Oe,nodeDragThreshold:JN,connectionDragThreshold:e3,onBeforeDelete:D,debug:i3,ariaLabelConfig:s3,zIndexMode:Iw}),(0,V.jsx)(lR,{onInit:u,onNodeClick:s,onEdgeClick:l,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:v,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:i,connectionLineType:z,connectionLineStyle:j,connectionLineComponent:F,connectionLineContainerStyle:K,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:J,deleteKeyCode:$,multiSelectionKeyCode:de,panActivationKeyCode:ne,zoomActivationKeyCode:re,onlyRenderVisibleElements:_e,defaultViewport:Jt,translateExtent:Vn,minZoom:Tt,maxZoom:Wa,preventScrolling:Ld,zoomOnScroll:Sg,zoomOnPinch:kg,zoomOnDoubleClick:_g,panOnScroll:rf,panOnScrollSpeed:Lg,panOnScrollMode:Us,panOnDrag:Ig,autoPanOnSelection:WN,onPaneClick:Mg,onPaneMouseEnter:Md,onPaneMouseMove:Ng,onPaneMouseLeave:Eg,onPaneScroll:qs,onPaneContextMenu:Tg,paneClickDistance:Ag,nodeClickDistance:Dg,onSelectionContextMenu:M,onSelectionStart:A,onSelectionEnd:O,onReconnect:Pg,onReconnectStart:zg,onReconnectEnd:Z,onEdgeContextMenu:ue,onEdgeDoubleClick:ke,onEdgeMouseEnter:Le,onEdgeMouseMove:gt,onEdgeMouseLeave:Xe,reconnectRadius:He,defaultMarkerColor:Id,noDragClassName:ht,noWheelClassName:ea,noPanClassName:Vs,rfId:Og,disableKeyboardA11y:kw,nodeExtent:_d,viewport:t3,onViewportChange:a3,nodesDraggable:Ct}),(0,V.jsx)(B8,{onSelectionChange:U}),Rg,(0,V.jsx)(R8,{proOptions:UN,position:FN}),(0,V.jsx)(D8,{rfId:Og,disableKeyboardA11y:kw})]})})}var v_=KL(pR);var mR=e=>e.nodes;function C_(){return Me(mR,Je)}var gR=e=>e.edges;function S_(){return Me(gR,Je)}var hR=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function La(){return Me(hR,Je)}var nG=Co.error014();function bR({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,V.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:It(["react-flow__background-pattern",a,o])})}function xR({radius:e,className:t}){return(0,V.jsx)("circle",{cx:e,cy:e,r:e,className:It(["react-flow__background-pattern","dots",t])})}var In;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(In||(In={}));var wR={[In.Dots]:1,[In.Lines]:1,[In.Cross]:6},yR=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function k_({id:e,variant:t=In.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:s,style:l,className:u,patternClassName:d}){let f=(0,G.useRef)(null),{transform:c,patternId:p}=Me(yR,Je),g=o||wR[t],w=t===In.Dots,y=t===In.Cross,h=Array.isArray(a)?a:[a,a],b=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],x=Array.isArray(r)?r:[r,r],v=y?[m,m]:b,C=[x[0]*c[2]+v[0]/2,x[1]*c[2]+v[1]/2],S=`${p}${e||""}`;return(0,V.jsxs)("svg",{className:It(["react-flow__background",u]),style:{...l,...Rm,"--xy-background-color-props":s,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,V.jsx)("pattern",{id:S,x:c[0]%b[0],y:c[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:w?(0,V.jsx)(xR,{radius:m/2,className:d}):(0,V.jsx)(bR,{dimensions:v,lineWidth:n,variant:t,className:d})}),(0,V.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${S})`})]})}k_.displayName="Background";var L_=(0,G.memo)(k_);function vR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,V.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function CR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,V.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function SR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,V.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function kR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,V.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function LR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,V.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Em({children:e,className:t,...a}){return(0,V.jsx)("button",{type:"button",className:It(["react-flow__controls-button",t]),...a,children:e})}var _R=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function __({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:s,onInteractiveChange:l,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=ft(),{isInteractive:w,minZoomReached:y,maxZoomReached:h,ariaLabelConfig:b}=Me(_R,Je),{zoomIn:m,zoomOut:x,fitView:v}=ka(),C=()=>{m(),r?.()},S=()=>{x(),i?.()},k=()=>{v(n),s?.()},_=()=>{g.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),l?.(!w)};return(0,V.jsxs)(Dm,{className:It(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??b["controls.ariaLabel"],children:[t&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Em,{onClick:C,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:h,children:(0,V.jsx)(vR,{})}),(0,V.jsx)(Em,{onClick:S,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:y,children:(0,V.jsx)(CR,{})})]}),a&&(0,V.jsx)(Em,{className:"react-flow__controls-fitview",onClick:k,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:(0,V.jsx)(SR,{})}),o&&(0,V.jsx)(Em,{className:"react-flow__controls-interactive",onClick:_,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:w?(0,V.jsx)(LR,{}):(0,V.jsx)(kR,{})}),d]})}__.displayName="Controls";var rG=(0,G.memo)(__);function IR({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:s,strokeWidth:l,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:w}=r||{},y=i||g||w;return(0,V.jsx)("rect",{className:It(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:y,stroke:s,strokeWidth:l},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var MR=(0,G.memo)(IR),NR=e=>e.nodes.map(t=>t.id),h0=e=>e instanceof Function?e:()=>e;function ER({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=MR,onClick:i}){let s=Me(NR,Je),l=h0(t),u=h0(e),d=h0(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,V.jsx)(V.Fragment,{children:s.map(c=>(0,V.jsx)(AR,{id:c,nodeColorFunc:l,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function TR({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:s,onClick:l}){let{node:u,x:d,y:f,width:c,height:p}=Me(g=>{let w=g.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let y=w.internals.userNode,{x:h,y:b}=w.internals.positionAbsolute,{width:m,height:x}=jo(y);return{node:y,x:h,y:b,width:m,height:x}},Je);return!u||u.hidden||!t0(u)?null:(0,V.jsx)(s,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:l,id:u.id})}var AR=(0,G.memo)(TR),DR=(0,G.memo)(ER),RR=200,PR=150,zR=e=>!e.hidden,OR=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Qx(jl(e.nodeLookup,{filter:zR}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},VL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,HR=(e,t)=>VL(e.viewBB,t.viewBB)&&VL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,BR="react-flow__minimap-desc";function I_({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:s,bgColor:l,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:w=!1,zoomable:y=!1,ariaLabel:h,inversePan:b,zoomStep:m=1,offsetScale:x=5}){let v=ft(),C=(0,G.useRef)(null),{boundingRect:S,viewBB:k,rfId:_,panZoom:T,translateExtent:R,flowWidth:H,flowHeight:U,ariaLabelConfig:L}=Me(OR,HR),N=e?.width??RR,E=e?.height??PR,M=S.width/N,A=S.height/E,O=Math.max(M,A),D=O*N,B=O*E,z=x*O,j=S.x-(D-S.width)/2-z,F=S.y-(B-S.height)/2-z,K=D+z*2,$=B+z*2,ee=`${BR}-${_}`,q=(0,G.useRef)(0),J=(0,G.useRef)();q.current=O,(0,G.useEffect)(()=>{if(C.current&&T)return J.current=$k({domNode:C.current,panZoom:T,getTransform:()=>v.getState().transform,getViewScale:()=>q.current}),()=>{J.current?.destroy()}},[T]),(0,G.useEffect)(()=>{J.current?.update({translateExtent:R,width:H,height:U,inversePan:b,pannable:w,zoomStep:m,zoomable:y})},[w,y,b,m,R,H,U]);let ne=p?ce=>{let[we,_e]=J.current?.pointer(ce)||[0,0];p(ce,{x:we,y:_e})}:void 0,de=g?(0,G.useCallback)((ce,we)=>{let _e=v.getState().nodeLookup.get(we).internals.userNode;g(ce,_e)},[]):void 0,re=h??L["minimap.ariaLabel"];return(0,V.jsx)(Dm,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*O:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:It(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,V.jsxs)("svg",{width:N,height:E,viewBox:`${j} ${F} ${K} ${$}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:C,onClick:ne,children:[re&&(0,V.jsx)("title",{id:ee,children:re}),(0,V.jsx)(DR,{onClick:de,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:s}),(0,V.jsx)("path",{className:"react-flow__minimap-mask",d:`M${j-z},${F-z}h${K+z*2}v${$+z*2}h${-K-z*2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}I_.displayName="MiniMap";var M_=(0,G.memo)(I_),FR=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,UR={[fi.Line]:"right",[fi.Handle]:"bottom-right"};function qR({nodeId:e,position:t,variant:a=fi.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:s=10,minHeight:l=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:w,onResize:y,onResizeEnd:h}){let b=e_(),m=typeof e=="string"?e:b,x=ft(),v=(0,G.useRef)(null),C=a===fi.Handle,S=Me((0,G.useCallback)(FR(C&&p),[C,p]),Je),k=(0,G.useRef)(null),_=t??UR[a];(0,G.useEffect)(()=>{if(!(!v.current||!m))return k.current||(k.current=aL({domNode:v.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:H,snapGrid:U,snapToGrid:L,nodeOrigin:N,domNode:E}=x.getState();return{nodeLookup:R,transform:H,snapGrid:U,snapToGrid:L,nodeOrigin:N,paneDomNode:E}},onChange:(R,H)=>{let{triggerNodeChanges:U,nodeLookup:L,parentLookup:N,nodeOrigin:E}=x.getState(),M=[],A={x:R.x,y:R.y},O=L.get(m);if(O&&O.expandParent&&O.parentId){let D=O.origin??E,B=R.width??O.measured.width??0,z=R.height??O.measured.height??0,j={id:O.id,parentId:O.parentId,rect:{width:B,height:z,...a0({x:R.x??O.position.x,y:R.y??O.position.y},{width:B,height:z},O.parentId,L,D)}},F=Lm([j],L,N,E);M.push(...F),A.x=R.x?Math.max(D[0]*B,R.x):void 0,A.y=R.y?Math.max(D[1]*z,R.y):void 0}if(A.x!==void 0&&A.y!==void 0){let D={id:m,type:"position",position:{...A}};M.push(D)}if(R.width!==void 0&&R.height!==void 0){let B={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};M.push(B)}for(let D of H){let B={...D,type:"position"};M.push(B)}U(M)},onEnd:({width:R,height:H})=>{let U={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:H}};x.getState().triggerNodeChanges([U])}})),k.current.update({controlPosition:_,boundaries:{minWidth:s,minHeight:l,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:y,onResizeEnd:h,shouldResize:g}),()=>{k.current?.destroy()}},[_,s,l,u,d,f,w,y,h,g]);let T=_.split("-");return(0,V.jsx)("div",{className:It(["react-flow__resize-control","nodrag",...T,a,o]),ref:v,style:{...n,scale:S,...i&&{[C?"backgroundColor":"borderColor"]:i}},children:r})}var iG=(0,G.memo)(qR);var no=I(Q(),1),R_=I(ta(),1);var Om=I(Q(),1);var Pm=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var N_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var E_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var S0=e=>{let t=E_(e);return t.charAt(0).toUpperCase()+t.slice(1)};var rc=I(Q(),1);var zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var T_=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var td=I(Q(),1);var VR=(0,td.createContext)({});var A_=()=>(0,td.useContext)(VR);var D_=(0,rc.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...s},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=A_()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,rc.createElement)("svg",{ref:l,...zm,width:t??u??zm.width,height:t??u??zm.height,stroke:e??c,strokeWidth:g,className:Pm("lucide",p,n),...!r&&!T_(s)&&{"aria-hidden":"true"},...s},[...i.map(([w,y])=>(0,rc.createElement)(w,y)),...Array.isArray(r)?r:[r]])});var P=(e,t)=>{let a=(0,Om.forwardRef)(({className:o,...n},r)=>(0,Om.createElement)(D_,{ref:r,iconNode:t,className:Pm(`lucide-${N_(S0(e))}`,`lucide-${e}`,o),...n}));return a.displayName=S0(e),a};var GR=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],ds=P("align-horizontal-distribute-center",GR);var jR=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],us=P("align-vertical-distribute-center",jR);var XR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ic=P("arrow-left",XR);var WR=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],cs=P("arrow-up",WR);var YR=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],fs=P("audio-lines",YR);var KR=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],sc=P("bookmark",KR);var ZR=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],lc=P("calendar",ZR);var $R=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ft=P("check",$R);var QR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yt=P("chevron-down",QR);var JR=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gr=P("chevron-right",JR);var eP=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],dc=P("chevron-left",eP);var tP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ps=P("chevron-up",tP);var aP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],pi=P("circle-alert",aP);var oP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mi=P("circle-check",oP);var nP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],an=P("circle-question-mark",nP);var rP=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],uc=P("clapperboard",rP);var iP=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],oo=P("cloud-upload",iP);var sP=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],gi=P("copy",sP);var lP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Mn=P("crosshair",lP);var dP=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ms=P("download",dP);var uP=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],hi=P("ellipsis",uP);var cP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],cc=P("external-link",cP);var fP=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],fc=P("eye-off",fP);var pP=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pc=P("eye",pP);var mP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],hr=P("file-code",mP);var gP=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],Nn=P("file-pen",gP);var hP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],mc=P("file-spreadsheet",hP);var bP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],_a=P("file-text",bP);var xP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],gc=P("file-up",xP);var wP=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],hc=P("files",wP);var yP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],ia=P("film",yP);var vP=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],gs=P("folder-input",vP);var CP=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],bc=P("folder-open",CP);var SP=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],hs=P("folder-plus",SP);var kP=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],So=P("folder",kP);var LP=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],bi=P("funnel",LP);var _P=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ko=P("grid-3x3",_P);var IP=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],xc=P("grip-vertical",IP);var MP=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],ad=P("hand",MP);var NP=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],wc=P("hard-drive",NP);var EP=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],yc=P("hash",EP);var TP=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],br=P("image-plus",TP);var AP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ba=P("image",AP);var DP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],vc=P("info",DP);var RP=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Cc=P("keyboard",RP);var PP=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ba=P("layers",PP);var zP=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Fa=P("layout-grid",zP);var OP=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],Sc=P("list-tree",OP);var HP=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],xr=P("list",HP);var BP=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xi=P("loader-circle",BP);var FP=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],kc=P("map",FP);var UP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],En=P("maximize-2",UP);var qP=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Lc=P("maximize",qP);var VP=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],bs=P("message-square",VP);var GP=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],xs=P("mic",GP);var jP=[["path",{d:"M5 12h14",key:"1ays0h"}]],_c=P("minus",jP);var XP=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Ic=P("mouse-pointer-click",XP);var WP=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],od=P("mouse-pointer",WP);var YP=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ia=P("music",YP);var KP=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",key:"28k6lz"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],ws=P("package-plus",KP);var ZP=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Mc=P("paperclip",ZP);var $P=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Nc=P("pause",$P);var QP=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Tn=P("pen-line",QP);var JP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],An=P("pen",JP);var ez=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ys=P("pencil",ez);var tz=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Ec=P("person-standing",tz);var az=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ua=P("play",az);var oz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pt=P("plus",oz);var nz=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],Tc=P("redo-2",nz);var rz=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],wr=P("refresh-cw",rz);var iz=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],vs=P("rotate-ccw",iz);var sz=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],on=P("search",sz);var lz=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Ac=P("settings-2",lz);var dz=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Cs=P("sliders-horizontal",dz);var uz=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Nt=P("sparkles",uz);var cz=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],wi=P("square-split-vertical",cz);var fz=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Lo=P("table",fz);var pz=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Dc=P("tag",pz);var mz=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],yi=P("text-align-justify",mz);var gz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_o=P("trash-2",gz);var hz=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Dn=P("triangle-alert",hz);var bz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],yr=P("type",bz);var xz=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Rc=P("undo-2",xz);var wz=[["rect",{x:"11",y:"14",width:"10",height:"7",rx:"2",key:"nfm8rk"}],["rect",{x:"3",y:"3",width:"10",height:"7",rx:"2",key:"1ljebb"}]],Pc=P("ungroup",wz);var yz=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],Ss=P("unlink",yz);var vz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ks=P("upload",vz);var Cz=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],nn=P("video",Cz);var Sz=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],zc=P("waypoints",Sz);var kz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xa=P("x",kz);var sa=I(X(),1);function ro({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:s="pill"}){let[l,u]=(0,no.useState)(!1),d=(0,no.useRef)(null),f=(0,no.useRef)(null),[c,p]=(0,no.useState)({top:0,left:0,placement:"bottom"}),g=(0,no.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,no.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),x=window.innerHeight,v=Math.min(t.length*34+16,260),S=x-m.bottom<v&&m.top>v,k=S?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:k,left:m.left,width:_,placement:S?"top":"bottom"})},[t.length,r]);(0,no.useEffect)(()=>{if(!l)return;w();let m=C=>{let S=C.target;d.current?.contains(S)||f.current?.contains(S)||u(!1)},x=C=>{C.key==="Escape"&&u(!1)},v=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",x),window.addEventListener("scroll",v,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",x),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",w)}},[l,w]);let y=(0,no.useCallback)(m=>{m.stopPropagation(),!n&&u(x=>!x)},[n]),h=(0,no.useCallback)((m,x)=>{x||(a?.(m),u(!1))},[a]),b=["wf-custom-select-trigger",`wf-custom-select-trigger--${s}`,l?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,sa.jsxs)(sa.Fragment,{children:[(0,sa.jsxs)("button",{ref:d,type:"button",className:b,disabled:n,onClick:y,"aria-haspopup":"listbox","aria-expanded":l,children:[(0,sa.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:i??String(e??"")}),(0,sa.jsx)(Yt,{size:12,className:"wf-custom-select-chevron"})]}),l&&typeof document<"u"?(0,R_.createPortal)((0,sa.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,sa.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let x=m.value===e,v=!!m.subtitle||!!m.badge||!!m.icon;return(0,sa.jsxs)("button",{type:"button",role:"option","aria-selected":x,disabled:m.disabled,className:`wf-custom-select-option ${v?"wf-custom-select-option--rich":""} ${x?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,sa.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,sa.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,sa.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,sa.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,sa.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,sa.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),x?(0,sa.jsx)(Ft,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Rn=I(Q(),1),P_=I(ta(),1),rn=I(X(),1),Oc=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,Rn.useState)(!1),s=(0,Rn.useRef)(null),l=(0,Rn.useRef)(null),[u,d]=(0,Rn.useState)({left:0}),f=(0,Rn.useCallback)(()=>{if(!s.current)return;let p=s.current.getBoundingClientRect(),g=a.startsWith("top"),w=a.endsWith("Right"),y=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,b=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:y,bottom:h,left:b})},[a]);(0,Rn.useEffect)(()=>{if(!r)return;f();let p=w=>{let y=w.target;s.current?.contains(y)||l.current?.contains(y)||i(!1)},g=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(g=>!g)};return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)("div",{ref:s,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,P_.createPortal)((0,rn.jsx)("div",{ref:l,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,rn.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,rn.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,rn.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,rn.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var z_=I(Q(),1),k0=I(X(),1),L0=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:s=""})=>{let l=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,z_.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,k0.jsx)("div",{className:`wf-custom-slider ${s}`,style:i,children:(0,k0.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${l}%, rgba(255,255,255,0.12) ${l}%, rgba(255,255,255,0.12) 100%)`}})})};var O_=I(Q(),1),H_=I(ta(),1);var Pn=I(X(),1),sn=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:s})=>((0,O_.useEffect)(()=>{if(!e)return;let l=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]),!e||typeof document>"u"?null:(0,H_.createPortal)((0,Pn.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Pn.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:l=>l.stopPropagation(),children:[(0,Pn.jsxs)("div",{className:"wf-modal-header",children:[(0,Pn.jsx)("div",{className:"wf-modal-title",children:a}),(0,Pn.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Pn.jsx)(xa,{size:16})})]}),(0,Pn.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:s}),o?(0,Pn.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Bm=I(Q(),1),B_=I(kx(),1);var Ls=I(X(),1),Hc=null,Lz=()=>{let[e,t]=(0,Bm.useState)([]);return(0,Bm.useEffect)(()=>(Hc=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{Hc=null}),[]),e.length===0?null:(0,Ls.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=vc,n="#60a5fa";return a.type==="success"?(o=mi,n="#34d399"):a.type==="warning"?(o=Dn,n="#fb923c"):a.type==="error"&&(o=pi,n="#f87171"),(0,Ls.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Ls.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Ls.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function _z(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,B_.createRoot)(t).render((0,Ls.jsx)(Lz,{}))}function Hm(e,t,a=2500){_z();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;Hc?Hc({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{Hc?.({id:o,type:e,content:t,durationMs:a})},50)}var Y={success:(e,t)=>Hm("success",e,t),warning:(e,t)=>Hm("warning",e,t),error:(e,t)=>Hm("error",e,t),info:(e,t)=>Hm("info",e,t)};var F_=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>l,subscribe:u=>(a.add(u),()=>a.delete(u))},l=t=e(o,n,s);return s},U_=(e=>e?F_(e):F_);var Bc=I(Q(),1);var Iz=e=>e;function Mz(e,t=Iz){let a=Bc.default.useSyncExternalStore(e.subscribe,Bc.default.useCallback(()=>t(e.getState()),[e,t]),Bc.default.useCallback(()=>t(e.getInitialState()),[e,t]));return Bc.default.useDebugValue(a),a}var q_=e=>{let t=U_(e),a=o=>Mz(t,o);return Object.assign(a,t),a},nd=(e=>e?q_(e):q_);var W_=I(Q(),1);var V_=e=>Symbol.iterator in e,G_=e=>"entries"in e,j_=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},Nz=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function X_(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:V_(e)&&V_(t)?G_(e)&&G_(t)?j_(e,t):Nz(e,t):j_({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function Y_(e){let t=W_.default.useRef(void 0);return a=>{let o=e(a);return X_(t.current,o)?t.current:t.current=o}}var Z_={stroke:"#b1b1b7",strokeWidth:2},Fm={type:"animated",style:Z_,animated:!1};function K_(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function Ez(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function $_(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:Ez(e),...Fm,...e,data:{...t,createdAt:a},animated:e.animated??Fm.animated,style:{...Z_,...e.style??{}},sourceHandle:K_(e.sourceHandle),targetHandle:K_(e.targetHandle)}}var Q_={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},Tz={text:"text-editor",image:"text-to-image",video:"video-generation",audio:"text-to-audio"};var J_={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Fc(e,t){return{label:"",materialType:e,status:"empty",selectedTool:Tz[e],params:{},failStrategy:"abort",...t}}function _s(e){return e.nodeKind==="generate"||e.nodeKind==="import"?e.nodeKind:e.selectedTool==="import"?"import":"generate"}var Az={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function e5(e){return Az[e]??[]}function Dz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,s=a.generatedContent,l=!1;return o==="text"?l=!!(i?.trim()||s):o==="image"?l=!!r:l=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:l}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function Rz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=Q_[n];if(i)for(let s of i){let l=J_[s];l&&l.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function Um(e,t){let a=Dz(e),o=Rz(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function qm(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(s=>s.source===e.source&&s.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(s=>s.id===e.source),n=t.find(s=>s.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!Um(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let s=i.shift();if(!(!s||r.has(s.id))){r.add(s.id);for(let l of Kx(s,t,a)){if(l.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(l)}}}return{valid:!0}}function Vm(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function Pz(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function t5(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return Vm(e,"rejected","duplicate_node");a.add(d.id)}let o=Pz([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return Vm(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return Vm(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),s=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=$_(d),c=qm(f,s,u);if(!c.valid)return Vm(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:s,edges:u,status:"allowed"}}function a5(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var Gm=!1,jm=!1;function Xm(){Gm=!0}function o5(){jm=!0,Gm=!1}function n5(){Gm=!1,jm=!1}function zz(){jm=!1}function _0(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function I0(e,t){return{nodes:e.slice(),edges:t.slice()}}function Uc(e,t){return t||(jm&&e===0?"reset":Gm&&e===0?"user-delete":"autosave")}function Wm(e){let t=I0(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:_0({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(zz(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}function Ma(e){return e>0?1/e:1}function i5(e,t,a,o,n){return n||o==="import"?!1:!!e&&!t&&a!=="running"}function s5(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var r5=32,Oz=350,Hz=280;function vi(e){let t=e.data||{},a=t.materialType||(e.type==="material"?"text":void 0),o=Oz,n=Hz,r=0;e.type==="material"||a?(r=28,a==="text"?(o=350,n=500):a==="image"?(o=350,n=350):a==="video"?(o=350,n=280):a==="audio"&&(o=350,n=150)):e.type==="table"?(r=28,o=380,n=280):e.type==="video_composition"?(r=28,o=350,n=440):e.type==="group"&&(o=400,n=300,r=0);let i=typeof e.measured?.width=="number"&&Number.isFinite(e.measured.width)&&e.measured.width>0?e.measured.width:typeof e.width=="number"&&Number.isFinite(e.width)&&e.width>0?e.width:typeof t.nodeWidth=="number"&&Number.isFinite(t.nodeWidth)&&t.nodeWidth>0?t.nodeWidth:o,s=typeof e.measured?.height=="number"&&Number.isFinite(e.measured.height)&&e.measured.height>0?e.measured.height:typeof e.height=="number"&&Number.isFinite(e.height)&&e.height>0?e.height:typeof t.nodeHeight=="number"&&Number.isFinite(t.nodeHeight)&&t.nodeHeight>0?t.nodeHeight:n;return{width:i,height:s,headerOffset:r}}function rd(e,t=r5,a){if(!e||e.length===0)return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let o=a?.includeHeaderOffset??!0,n=1/0,r=1/0,i=-1/0,s=-1/0;for(let p of e){let g=typeof p?.position?.x=="number"&&Number.isFinite(p.position.x)?p.position.x:0,w=typeof p?.position?.y=="number"&&Number.isFinite(p.position.y)?p.position.y:0,{width:y,height:h,headerOffset:b}=vi(p),m=o?w-b:w;g<n&&(n=g),m<r&&(r=m),g+y>i&&(i=g+y),w+h>s&&(s=w+h)}if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(s))return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let l=Number.isFinite(t)&&t>=0?t:r5,u=n-l,d=r-l,f=Math.max(120,i-n+l*2),c=Math.max(80,s-r+l*2);return{x:u,y:d,width:f,height:c,minWidth:f,minHeight:c}}function Bz(e,t){let a=typeof e?.x=="number"&&Number.isFinite(e.x)?e.x:0,o=typeof e?.y=="number"&&Number.isFinite(e.y)?e.y:0,n=typeof t?.x=="number"&&Number.isFinite(t.x)?t.x:0,r=typeof t?.y=="number"&&Number.isFinite(t.y)?t.y:0;return{x:a-n,y:o-r}}function Fz(e,t){let a=typeof e?.x=="number"&&Number.isFinite(e.x)?e.x:0,o=typeof e?.y=="number"&&Number.isFinite(e.y)?e.y:0,n=typeof t?.x=="number"&&Number.isFinite(t.x)?t.x:0,r=typeof t?.y=="number"&&Number.isFinite(t.y)?t.y:0;return{x:a+n,y:o+r}}function l5(e,t,a,o){let{x:n,y:r,width:i,height:s}=t,{dx:l,dy:u}=a;switch(e){case"se":{i=Math.max(o.minWidth,i+l),s=Math.max(o.minHeight,s+u);break}case"e":{i=Math.max(o.minWidth,i+l);break}case"s":{s=Math.max(o.minHeight,s+u);break}case"nw":{let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);let f=s-u;f>=o.minHeight?(r+=u,s=f):(r+=s-o.minHeight,s=o.minHeight);break}case"w":{let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);break}case"n":{let d=s-u;d>=o.minHeight?(r+=u,s=d):(r+=s-o.minHeight,s=o.minHeight);break}case"ne":{i=Math.max(o.minWidth,i+l);let d=s-u;d>=o.minHeight?(r+=u,s=d):(r+=s-o.minHeight,s=o.minHeight);break}case"sw":{s=Math.max(o.minHeight,s+u);let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);break}}return{x:n,y:r,width:i,height:s}}function d5(e,t,a){let o=a>0?a:1;return{dx:e/o,dy:t/o}}function id(e,t){return e.filter(a=>a.parentId===t&&a.type!=="group").map(a=>a.id)}var Uz=220,qz=44;function u5(e,t,a,o="#3b82f6"){let n=e.filter(f=>t.includes(f.id)&&f.type!=="group"&&!f.parentId);if(n.length<2)return null;let r=a&&a!=="\u65B0\u5EFA\u7EC4"?a:`\u7F16\u7EC4 ${n.length} \u4E2A\u8282\u70B9`,i=rd(n,32),s=`group_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,l={id:s,type:"group",position:{x:i.x,y:i.y},width:i.width,height:i.height,selected:!0,style:{width:i.width,height:i.height,zIndex:0},data:{title:r,color:o,isCollapsed:!1,expandedBounds:{width:i.width,height:i.height},minWidth:i.minWidth,minHeight:i.minHeight,padding:32,nodeIds:n.map(f=>f.id)}},u=new Set(n.map(f=>f.id)),d=e.map(f=>{if(!u.has(f.id)||f.type==="group")return f;let c=Bz(f.position,{x:i.x,y:i.y});return{...f,parentId:s,position:c,selected:!1,extent:"parent"}});return{groupId:s,nodes:[l,...d]}}function c5(e,t){let a=e.find(u=>u.id===t&&u.type==="group");if(!a)return null;let o=a.data||{},r=!!!o.isCollapsed,i=o.expandedBounds||{width:a.width||400,height:a.height||300},s=r?Uz:i.width,l=r?qz:i.height;return e.map(u=>u.id===t?{...u,width:s,height:l,style:{...u.style,width:s,height:l},data:{...o,isCollapsed:r,expandedBounds:r?{width:a.width||i.width,height:a.height||i.height}:i}}:u.parentId===t?{...u,hidden:r}:u)}function f5(e,t){let a=e.find(n=>n.id===t&&n.type==="group");if(!a)return null;let o=a.position;return e.filter(n=>n.id!==t).map(n=>{if(n.parentId!==t)return n;let r=Fz(n.position,o),{parentId:i,extent:s,...l}=n;return{...l,position:r,selected:!0}})}function p5(e,t,a){if(!e||e.length<2)return e||[];let o=typeof a?.gap=="number"?a.gap:40;if(t==="vertical"){let n=[...e].sort((d,f)=>d.position.y-f.position.y),r=Math.min(...e.map(d=>d.position.x)),s=Math.min(...e.map(d=>{let{headerOffset:f}=vi(d);return d.position.y-f})),l=n.map(d=>{let{height:f,headerOffset:c}=vi(d),p=r,g=s+c;return s=g+f+o,{...d,position:{x:p,y:g}}}),u=new Map(l.map(d=>[d.id||"",d]));return e.map(d=>d.id&&u.has(d.id)?u.get(d.id):d)}if(t==="horizontal"){let n=[...e].sort((d,f)=>d.position.x-f.position.x),r=Math.min(...e.map(d=>{let{headerOffset:f}=vi(d);return d.position.y-f})),s=Math.min(...e.map(d=>d.position.x)),l=n.map(d=>{let{width:f,headerOffset:c}=vi(d),p=s,g=r+c;return s=p+f+o,{...d,position:{x:p,y:g}}}),u=new Map(l.map(d=>[d.id||"",d]));return e.map(d=>d.id&&u.has(d.id)?u.get(d.id):d)}if(t==="grid"){let n=a?.columns||Math.min(4,Math.max(2,Math.ceil(Math.sqrt(e.length)))),r=[...e].sort((h,b)=>{let m=h.position.y-b.position.y;return Math.abs(m)>120?m:h.position.x-b.position.x}),i=Math.min(...e.map(h=>h.position.x)),s=Math.min(...e.map(h=>{let{headerOffset:b}=vi(h);return h.position.y-b})),l=Math.ceil(r.length/n),u=new Array(n).fill(0),d=new Array(l).fill(0);r.forEach((h,b)=>{let m=b%n,x=Math.floor(b/n),{width:v,height:C,headerOffset:S}=vi(h),k=C+S;v>u[m]&&(u[m]=v),k>d[x]&&(d[x]=k)});let f=new Array(n).fill(0),c=i;for(let h=0;h<n;h++)f[h]=c,c+=u[h]+o;let p=new Array(l).fill(0),g=s;for(let h=0;h<l;h++)p[h]=g,g+=d[h]+o;let w=r.map((h,b)=>{let m=b%n,x=Math.floor(b/n),{headerOffset:v}=vi(h),C=f[m],S=p[x]+v;return{...h,position:{x:C,y:S}}}),y=new Map(w.map(h=>[h.id||"",h]));return e.map(h=>h.id&&y.has(h.id)?y.get(h.id):h)}return e}var Vz=50,Gz=300;function qc(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var qa={current:null,lastPushAt:0},ae=nd()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&Xm(),e({nodes:x0(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:w0(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&Xm();let o=t(),n=t5({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(s=>s.id===i.id));return a5(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&Xm(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},groupNodes:(a,o="\u65B0\u5EFA\u7EC4",n="#3b82f6")=>{let r=u5(t().nodes,a,o,n);return r?(e({nodes:r.nodes,selectedElement:{type:"node",id:r.groupId}}),r.groupId):null},ungroup:a=>{let o=f5(t().nodes,a);o&&e({nodes:o,selectedElement:{type:"none",id:null}})},toggleGroupCollapse:a=>{let o=c5(t().nodes,a);o&&e({nodes:o})},resizeGroup:(a,o)=>{let n=t().nodes,r=n.find(u=>u.id===a&&u.type==="group");if(!r)return;let i=o.x-r.position.x,s=o.y-r.position.y,l=n.map(u=>u.id===a?{...u,position:{x:o.x,y:o.y},width:o.width,height:o.height,style:{...u.style,width:o.width,height:o.height}}:u.parentId===a&&(i!==0||s!==0)?{...u,position:{x:u.position.x-i,y:u.position.y-s}}:u);e({nodes:l})},hydrateGraph:(a,o)=>{n5(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),qa.current=qc(a,o),qa.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=qc(t().nodes,t().edges);if(qa.current&&qa.current.sig===a.sig)return;let o=Date.now();if(qa.current&&o-qa.lastPushAt>=Gz){let n=qa.current;e(r=>({past:[...r.past,n].slice(-Vz),future:[]})),qa.lastPushAt=o}qa.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=qc(o,n);qa.current=r,e(s=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...s.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=qc(o,n);qa.current=r,e(s=>({nodes:r.nodes,edges:r.edges,past:[...s.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),qa.current=qc(a,o),qa.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{o5(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),qa.current=null,qa.lastPushAt=0}})),m5=()=>ae(Y_(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var g5=()=>ae(e=>e.past.length>0),h5=()=>ae(e=>e.future.length>0),sd=()=>ae(e=>e.nodes.filter(t=>t.selected&&t.type!=="group").length>=2);var T5=I(Q(),1);var b5={total:0,completed:0,running:0,pending:0,percentage:0},ot=nd()(e=>({executionId:null,status:"idle",error:null,progress:b5,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:b5,nodeStatuses:{}})}));var x5=I(Q(),1),w5="(prefers-reduced-motion: reduce)";function jz(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(w5);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function Xz(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(w5).matches}function y5(){return(0,x5.useSyncExternalStore)(jz,Xz)}var Io=I(Q(),1),Va=I(X(),1),Wz=108,k5=64,Yz=186,v5=k5+Yz,M0=8,C5=.9,Kz=3,S5=.16,Zz=.98,$z=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let l=(0,Io.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${l}`,d=`beam-flow-${l}`,f=`beam-breathe-${l}`,c=(0,Io.useMemo)(()=>{if(t&&a){let x=a.x-t.x,v=a.y-t.y;return Math.max(250,Math.hypot(x,v)*1.15)}return 250},[t,a]),p=(0,Io.useRef)(null),[g,w]=(0,Io.useState)(c);(0,Io.useEffect)(()=>{if(p.current)try{let x=p.current.getTotalLength();Number.isFinite(x)&&x>0&&w(x)}catch{}},[e]);let{segments:y,calculatedDuration:h,periodPx:b}=(0,Io.useMemo)(()=>{let x=g>0?g:c,v=Math.max(1,Math.round(x/v5)),C=x/v,k=C*(k5/v5)/M0,_=o??Math.max(.5,C/Wz);return{segments:Array.from({length:M0},(R,H)=>{let U=H/(M0-1),L=U**1.4,N=C5+(Kz-C5)*L,E=N+1.4,M=S5+(Zz-S5)*L,A=-(H*(_/C)*k);return{index:H,progress:U,taperedProgress:L,coreWidth:N,haloWidth:E,opacity:M,dashArray:`${k} ${C-k}`,timeDelay:n+A}}),calculatedDuration:_,periodPx:C}},[g,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-b:0}px; }
      to { stroke-dashoffset: ${r?0:-b}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,Va.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,Va.jsxs)("defs",{children:[(0,Va.jsx)("style",{children:m}),(0,Va.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,Va.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,Va.jsxs)("feMerge",{children:[(0,Va.jsx)("feMergeNode",{in:"blur"}),(0,Va.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,Va.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,Va.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:y.map(x=>{let v=x.index>=5;return(0,Va.jsxs)("g",{children:[v&&(0,Va.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:x.haloWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",filter:`url(#${u})`,opacity:x.opacity*.75,style:{animation:`${d} ${h}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,Va.jsx)("path",{d:e,stroke:x.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:x.coreWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",opacity:x.opacity,filter:x.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${h}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},x.index)})})]})},L5=(0,Io.memo)($z);var Vc=I(Q(),1);var M5=I(Q(),1);var Qz={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.type.import_asset":"\u5BFC\u5165\u7D20\u6750","node.type.group":"\u7EC4","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.replace":"\u66FF\u6362","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165\u7D20\u6750","pill.importImage":"\u5BFC\u5165\u7D20\u6750","pill.importVideo":"\u5BFC\u5165\u7D20\u6750","pill.importAudio":"\u5BFC\u5165\u7D20\u6750","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u652F\u6301\u56FE\u7247 / \u89C6\u9891 / \u97F3\u9891\uFF0C\u62D6\u62FD\u6216\u70B9\u51FB\u5BFC\u5165\u7D20\u6750","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u4EC5\u652F\u6301\u66FF\u6362\u672C\u5730\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u751F\u6210","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.import_asset":"\u5BFC\u5165\u7D20\u6750","toolbar.add.import_assetDesc":"\u5BFC\u5165\u672C\u5730\u56FE\u7247\u3001\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","toolbar.insertTemplate":"\u63D2\u5165\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateLabel":"\u6A21\u677F","toolbar.insertTemplateEmpty":"\u8FD8\u6CA1\u6709\u53EF\u63D2\u5165\u7684\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateNodes":"{count} \u4E2A\u8282\u70B9","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.importOk":"\u5DF2\u5BFC\u5165\u7D20\u6750","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002","group.defaultTitle":"\u65B0\u5EFA\u7EC4","group.defaultCountTitle":"\u7F16\u7EC4 {count} \u4E2A\u8282\u70B9","group.collapse":"\u6536\u8D77\u5206\u7EC4","group.expand":"\u5C55\u5F00\u5206\u7EC4","group.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","group.colorTitle":"\u9009\u62E9\u7EC4\u4E3B\u9898\u8272","group.layout":"\u5E03\u5C40","group.layoutTitle":"\u7EC4\u5185\u8282\u70B9\u81EA\u52A8\u5E03\u5C40","group.layoutHorizontal":"\u6C34\u5E73\u6392\u5217","group.layoutVertical":"\u5782\u76F4\u6392\u5217","group.layoutGrid":"\u7F51\u683C\u6392\u5217","group.layoutGridCompact":"\u7F51\u683C\u7D27\u51D1\u6392\u5217","group.execute":"\u6574\u7EC4\u6267\u884C","group.executeTitle":"\u72EC\u7ACB\u8FD0\u884C\u8BE5\u7EC4\u5185\u6240\u6709\u8282\u70B9","group.createWorkflow":"\u521B\u5EFA\u5DE5\u4F5C\u6D41","group.createWorkflowTitle":"\u5BFC\u51FA\u4E3A\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","group.ungroup":"\u89E3\u7EC4","group.ungroupTitle":"\u89E3\u9664\u5F53\u524D\u5206\u7EC4","group.float.createAsset":"\u521B\u5EFA\u8D44\u4EA7","group.float.createAssetTitle":"\u4FDD\u5B58\u9009\u4E2D\u8282\u70B9\u751F\u6210\u7269\u81F3\u8D44\u4EA7\u5E93","group.float.group":"\u6253\u7EC4","group.float.groupTitle":"\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4 (Cmd + G)","group.float.layoutTitle":"\u6392\u5217\u9009\u4E2D\u8282\u70B9","group.toast.grouped":"\u5DF2\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4","group.toast.ungrouped":"\u5DF2\u89E3\u9664\u5206\u7EC4","group.toast.layout":"\u5DF2\u5B8C\u6210\u5E03\u5C40\u6392\u5217","group.toast.execute":"\u5DF2\u5F00\u59CB\u6574\u7EC4\u6267\u884C","template.modal.title":"\u521B\u5EFA\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.name":"\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.namePlaceholder":"\u4F8B\u5982\uFF1A\u591C\u666F\u4EBA\u50CF\u7CBE\u4FEE\u5DE5\u4F5C\u6D41","template.modal.defaultName":"\u65B0\u5EFA\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.description":"\u529F\u80FD\u63CF\u8FF0","template.modal.descriptionPlaceholder":"\u7B80\u8981\u8BF4\u660E\u8BE5\u5DE5\u4F5C\u6D41\u7684\u529F\u80FD\u3001\u8F93\u5165\u8981\u6C42\u4E0E\u8F93\u51FA\u6548\u679C...","template.modal.tags":"\u5206\u7C7B\u6807\u7B7E","template.modal.tagsPlaceholder":"\u7528\u9017\u53F7\u5206\u9694\u6807\u7B7E","template.modal.defaultTags":"\u5B50\u56FE, \u53EF\u590D\u7528","template.modal.hint":"\u5305\u542B {count} \u4E2A\u8282\u70B9\u7684\u62D3\u6251\u4E0E\u53C2\u6570\u5C06\u88AB\u5C01\u88C5\u4E3A JSON \u6A21\u677F\uFF0C\u53EF\u63D2\u5165\u4EFB\u610F\u5F53\u524D\u753B\u5E03\u590D\u7528\u3002","template.modal.cancel":"\u53D6\u6D88","template.modal.submit":"\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.saving":"\u4FDD\u5B58\u4E2D...","template.modal.nameRequired":"\u8BF7\u8F93\u5165\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.saved":"\u5DE5\u4F5C\u6D41\u300C{name}\u300D\u5DF2\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.failed":"\u521B\u5EFA\u5DE5\u4F5C\u6D41\u5931\u8D25","template.missingGroup":"\u7F3A\u5C11\u5206\u7EC4","template.toast.inserted":"\u5DF2\u63D2\u5165\u6A21\u677F\u300C{name}\u300D","template.toast.loadFailed":"\u8BFB\u53D6\u6A21\u677F\u5931\u8D25","asset.modal.title":"\u6279\u91CF\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93","asset.modal.name":"\u8D44\u4EA7\u540D\u79F0","asset.modal.defaultName":"\u753B\u5E03\u4EA7\u7269","asset.modal.category":"\u8D44\u4EA7\u7C7B\u522B","asset.modal.files":"\u5F85\u5165\u5E93\u672C\u5730\u6587\u4EF6\uFF08{count} \u9879\uFF09","asset.modal.empty":"\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u8DEF\u5F84\u3002\u8FDC\u7A0B\u9884\u89C8\u6216 blob \u4E0D\u4F1A\u5199\u5165\u8D44\u4EA7\u5E93\u3002","asset.modal.tags":"\u6807\u7B7E","asset.modal.tagsPlaceholder":"\u9017\u53F7\u5206\u9694\u6807\u7B7E","asset.modal.defaultTags":"AIGC, \u5DE5\u4F5C\u6D41\u751F\u6210","asset.modal.cancel":"\u53D6\u6D88","asset.modal.submit":"\u786E\u8BA4\u5199\u5165\u8D44\u4EA7\u5E93","asset.modal.saving":"\u4FDD\u5B58\u4E2D...","asset.modal.noFiles":"\u6240\u9009\u8282\u70B9\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u6587\u4EF6\u8DEF\u5F84","asset.modal.nameRequired":"\u8BF7\u8F93\u5165\u8D44\u4EA7\u540D\u79F0","asset.modal.saved":"\u5DF2\u5199\u5165\u8D44\u4EA7\u5E93\uFF1A{name}","asset.modal.failed":"\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93\u5931\u8D25","asset.scope.character":"\u89D2\u8272 (Character)","asset.scope.scene":"\u573A\u666F (Scene)","asset.scope.prop":"\u9053\u5177 (Prop)","asset.scope.style":"\u98CE\u683C\u5305 (Style)","asset.scope.knowledge":"\u77E5\u8BC6\u5305 (Knowledge)","asset.scope.custom":"\u81EA\u5B9A\u4E49\u7D20\u6750 (Custom)"},_5=Qz;var Jz={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.type.import_asset":"Import Asset","node.type.group":"Group","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.replace":"Replace","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import Asset","pill.importImage":"Import Asset","pill.importVideo":"Import Asset","pill.importAudio":"Import Asset","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Supports image / video / audio. Drop or click to import asset","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import asset nodes only support replacing local files, not generation","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.import_asset":"Import Asset","toolbar.add.import_assetDesc":"Import local image, video, or audio files","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","toolbar.insertTemplate":"Insert workflow template","toolbar.insertTemplateLabel":"Templates","toolbar.insertTemplateEmpty":"No reusable workflow templates yet","toolbar.insertTemplateNodes":"{count} nodes","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.importOk":"Asset imported","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker.","group.defaultTitle":"New group","group.defaultCountTitle":"Group ({count} nodes)","group.collapse":"Collapse group","group.expand":"Expand group","group.renameHint":"Double-click to rename","group.colorTitle":"Choose group color","group.layout":"Layout","group.layoutTitle":"Auto-layout nodes in this group","group.layoutHorizontal":"Arrange horizontally","group.layoutVertical":"Arrange vertically","group.layoutGrid":"Arrange as grid","group.layoutGridCompact":"Compact grid","group.execute":"Run group","group.executeTitle":"Run every node in this group","group.createWorkflow":"Create workflow","group.createWorkflowTitle":"Export as a reusable workflow template","group.ungroup":"Ungroup","group.ungroupTitle":"Ungroup the selected nodes","group.float.createAsset":"Create asset","group.float.createAssetTitle":"Save selected outputs to the asset library","group.float.group":"Group","group.float.groupTitle":"Group selected nodes (Cmd + G)","group.float.layoutTitle":"Arrange selected nodes","group.toast.grouped":"Selected nodes grouped","group.toast.ungrouped":"Group removed","group.toast.layout":"Layout applied","group.toast.execute":"Group execution started","template.modal.title":"Create reusable workflow template","template.modal.name":"Workflow name","template.modal.namePlaceholder":"e.g. Night portrait retouch workflow","template.modal.defaultName":"New workflow template","template.modal.description":"Description","template.modal.descriptionPlaceholder":"What this workflow does, expected inputs, and outputs...","template.modal.tags":"Tags","template.modal.tagsPlaceholder":"Comma-separated tags","template.modal.defaultTags":"subgraph, reusable","template.modal.hint":"Topology and params of {count} nodes will be saved as JSON and can be inserted into any canvas.","template.modal.cancel":"Cancel","template.modal.submit":"Save to template library","template.modal.saving":"Saving...","template.modal.nameRequired":"Enter a workflow name","template.modal.saved":"Workflow \u201C{name}\u201D saved to the template library","template.modal.failed":"Failed to create workflow","template.missingGroup":"Missing group","template.toast.inserted":"Inserted template \u201C{name}\u201D","template.toast.loadFailed":"Failed to load template","asset.modal.title":"Save to asset library","asset.modal.name":"Asset name","asset.modal.defaultName":"Canvas output","asset.modal.category":"Asset type","asset.modal.files":"Local files to ingest ({count})","asset.modal.empty":"No local paths to ingest. Remote previews and blobs are skipped.","asset.modal.tags":"Tags","asset.modal.tagsPlaceholder":"Comma-separated tags","asset.modal.defaultTags":"AIGC, workflow","asset.modal.cancel":"Cancel","asset.modal.submit":"Write to asset library","asset.modal.saving":"Saving...","asset.modal.noFiles":"Selected nodes have no ingestible local file path","asset.modal.nameRequired":"Enter an asset name","asset.modal.saved":"Wrote to asset library: {name}","asset.modal.failed":"Failed to save to asset library","asset.scope.character":"Character","asset.scope.scene":"Scene","asset.scope.prop":"Prop","asset.scope.style":"Style pack","asset.scope.knowledge":"Knowledge pack","asset.scope.custom":"Custom"},I5=Jz;var N0={zh:_5,en:I5},Ym="zh",E0=new Set;function e9(e){return E0.add(e),()=>E0.delete(e)}function t9(){return Ym}function N5(e){let t=e==="en"?"en":"zh";if(t!==Ym){Ym=t;for(let a of E0)a()}}function Is(e){return N0[Ym][e]??N0.zh[e]??N0.en[e]??e}function se(){return(0,M5.useSyncExternalStore)(e9,t9),Is}var Zm=I(X(),1),Km=28,a9=({edgeId:e,x:t,y:a})=>{let o=se(),n=ae(s=>s.applyCanvasInputMutation),r=(0,Vc.useCallback)(s=>{s.preventDefault(),s.stopPropagation()},[]),i=(0,Vc.useCallback)(s=>{s.preventDefault(),s.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,Zm.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-Km/2,y:a-Km/2,width:Km,height:Km,children:(0,Zm.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,Zm.jsx)(Ss,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},E5=(0,Vc.memo)(a9);var ld=I(X(),1),o9=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l,selected:u,animated:d,data:f,style:c})=>{let[p,g,w]=Zl({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l}),y=ae(C=>{let S=C.selectedElement.id;return S&&(S===t||S===a)?!0:C.nodes.some(k=>k.selected&&(k.id===t||k.id===a))}),h=ot(C=>C.nodeStatuses[a]==="running"),b=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,x=y||b||h||m,v=y5();return(0,ld.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,ld.jsx)(ed,{id:e,path:p,style:c}),x&&!v&&(0,ld.jsx)(L5,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:h?.8:void 0}),(0,ld.jsx)(E5,{edgeId:e,x:g,y:w})]})},T0=(0,T5.memo)(o9);var Ms=I(Q(),1);function ge(e){e.stopPropagation()}function A0(e){e.preventDefault(),e.stopPropagation()}var he=I(X(),1),n9=[{type:"import_asset",Icon:oo,color:"#38bdf8",bg:"rgba(56, 189, 248, 0.16)"},{type:"text",Icon:_a,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:br,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:nn,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:Ia,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Lo,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:ia,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],r9=({onAddNode:e,pointerMode:t="select",onPointerModeChange:a,onOpenAssets:o,onOpenHelp:n,isAddMenuOpen:r,onToggleAddMenu:i,isAssetsOpen:s=!1,templates:l=[],onInsertTemplate:u})=>{let d=se(),[f,c]=(0,Ms.useState)(!1),[p,g]=(0,Ms.useState)(!1),w=r!==void 0?r:f,y=i||(()=>c(m=>!m)),h=(0,Ms.useCallback)(m=>{e(m),i?i():c(!1)},[e,i]),b=[{key:"select",icon:(0,he.jsx)(od,{size:18}),label:d("toolbar.selectMode"),onClick:()=>a?.("select")},{key:"pan",icon:(0,he.jsx)(ad,{size:18}),label:d("toolbar.panMode"),onClick:()=>a?.("pan")}];return(0,he.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:ge,onMouseDown:ge,children:[(0,he.jsxs)("div",{style:{position:"relative"},children:[(0,he.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:y,onContextMenu:A0,title:d("toolbar.addNode"),children:(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(pt,{size:24})})}),w&&(0,he.jsx)("div",{className:"wf-dock-add-popover",children:n9.map(m=>(0,he.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:A0,children:[(0,he.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,he.jsx)(m.Icon,{size:18})}),(0,he.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,he.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,he.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,he.jsx)("div",{className:"wf-canvas-toolbar__divider"}),u&&(0,he.jsxs)("div",{style:{position:"relative"},children:[(0,he.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>g(m=>!m),title:d("toolbar.insertTemplate"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(hr,{size:20})}),(0,he.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.insertTemplateLabel")})]}),p&&(0,he.jsx)("div",{className:"wf-dock-add-popover wf-template-picker",children:l.length===0?(0,he.jsx)("div",{className:"wf-template-picker__empty",children:d("toolbar.insertTemplateEmpty")}):l.map(m=>(0,he.jsxs)("button",{type:"button",className:"wf-template-picker__item",onClick:()=>{u(m.id),g(!1)},children:[(0,he.jsx)("span",{children:m.name}),(0,he.jsx)("span",{className:"wf-template-picker__meta",children:d("toolbar.insertTemplateNodes").replace("{count}",String(m.nodeCount))})]},m.id))})]}),(0,he.jsx)(Oc,{items:b,selectedKeys:[t],placement:"topCenter",children:(0,he.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(t==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:t==="select"?(0,he.jsx)(od,{size:20}):(0,he.jsx)(ad,{size:20})}),(0,he.jsx)(ps,{size:14,style:{opacity:.6,marginLeft:2}})]})}),(0,he.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${s?"wf-canvas-toolbar__item--active":""}`,onClick:o,title:d("toolbar.assets"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(bc,{size:20})}),(0,he.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),n&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,he.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:n,title:d("toolbar.help"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(an,{size:20})}),(0,he.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},A5=(0,Ms.memo)(r9);var dd=I(Q(),1);var ve=I(X(),1),i9={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},s9=e=>Math.round(e.transform[2]*100),l9=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:s,onCancelExecution:l,onResetExecution:u})=>{let d=se(),{zoomIn:f,zoomOut:c,fitView:p}=ka(),g=Me(s9),w=ot(T=>T.status),y=ot(T=>T.progress),h=ot(T=>T.error),b=w==="pending"||w==="running",m=w==="paused",x=w==="completed"||w==="error"||w==="cancelled",v=y.total>0,C=(0,dd.useCallback)(()=>{p({duration:250,padding:.1})},[p]),S=(0,dd.useCallback)(()=>{f({duration:150})},[f]),k=(0,dd.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,ve.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:ge,onMouseDown:ge,children:[r&&(b||m||x&&u?(0,ve.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${b||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[b||m?(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d(i9[w]),v&&` (${y.completed}/${y.total})`]}),b?(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,ve.jsx)(Nc,{size:14})}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:s,title:d("exec.resumeTitle"),children:(0,ve.jsx)(Ua,{size:14})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:l,title:d("exec.cancelTitle"),children:(0,ve.jsx)(xa,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(Ua,{size:14,fill:"currentColor",style:{marginLeft:2}})}),x&&u&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,ve.jsx)(vs,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(Ua,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,ve.jsx)(Lc,{size:15})}),(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:k,title:d("header.zoomOut"),children:(0,ve.jsx)(_c,{size:15})}),(0,ve.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:d("header.zoomIn"),children:(0,ve.jsx)(pt,{size:15})})]}),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,ve.jsx)(Fa,{size:15})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,ve.jsx)(zc,{size:15})}),(0,ve.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,ve.jsx)(kc,{size:15})}),n&&(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)(Oc,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,ve.jsx)(wi,{size:15})})})]})]})]})},D5=(0,dd.memo)(l9);var wa=I(Q(),1);var Rt="/omnimux-workflow";var Et={manifest:`${Rt}/api/manifest`,canvasJs:`${Rt}/canvas.js`,workspaces:`${Rt}/api/workspaces`,workspace:e=>`${Rt}/api/workspaces/${e}`,workspaceVersion:e=>`${Rt}/api/workspaces/${e}/version`,workspaceAssets:e=>`${Rt}/api/workspaces/${e}/assets`,workspaceAssetsMkdir:e=>`${Rt}/api/workspaces/${e}/assets/mkdir`,workspaceAssetsIndex:e=>`${Rt}/api/workspaces/${e}/assets/index`,capabilities:`${Rt}/api/capabilities`,media:`${Rt}/media`,pick:`${Rt}/api/pick`,localFile:`${Rt}/api/local-file`,localFileProbe:`${Rt}/api/local-file/probe`,executions:e=>`${Rt}/api/workspaces/${e}/executions`,execution:(e,t)=>`${Rt}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${Rt}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${Rt}/api/workspaces/${e}/executions/${t}/events`,templates:`${Rt}/api/templates`,template:e=>`${Rt}/api/templates/${e}`};async function Kt(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body),signal:t.signal}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function R5(){return Kt(Et.capabilities)}function P5(e,t){return Kt(Et.workspaces,{method:"POST",body:{name:e,id:t}})}function Gc(e){return Kt(Et.workspace(encodeURIComponent(e)))}function z5(e){return Kt(Et.workspaceVersion(encodeURIComponent(e)))}function O5(e,t){return Kt(Et.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function H5(e,t={}){return Kt(Et.executions(encodeURIComponent(e)),{method:"POST",body:t})}function B5(e){return Kt(Et.executions(encodeURIComponent(e)))}function F5(e,t){return Kt(Et.execution(encodeURIComponent(e),encodeURIComponent(t)))}function U5(e,t){return Kt(Et.workspaceAssets(encodeURIComponent(e)),{signal:t})}function q5(e,t){return Kt(Et.workspaceAssets(encodeURIComponent(e)),{method:"PUT",body:t})}function V5(e,t){return Kt(Et.workspaceAssetsMkdir(encodeURIComponent(e)),{method:"POST",body:t})}function G5(e,t){return Kt(Et.workspaceAssetsIndex(encodeURIComponent(e)),{method:"POST",body:t})}function zn(){return Kt(Et.pick,{method:"POST",body:{kind:"file"}})}function j5(e){return Kt(Et.localFileProbe,{method:"POST",body:{paths:e}})}function X5(e,t,a){return Kt(Et.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var d9=["character","scene","style","prop","knowledge","custom"],Ns={character:"\u89D2\u8272",scene:"\u573A\u666F",style:"\u98CE\u683C\u5305",prop:"\u9053\u5177",knowledge:"\u77E5\u8BC6\u5305",custom:"\u81EA\u5B9A\u4E49"},D0=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:Ns.character},{id:"scene",label:Ns.scene},{id:"style",label:Ns.style},{id:"prop",label:Ns.prop},{id:"knowledge",label:Ns.knowledge},{id:"custom",label:Ns.custom}];function u9(e){return typeof e=="string"&&d9.includes(e)?e:"custom"}function W5(e,t){let a=new URLSearchParams({id:e});return t&&a.set("file",t),`/omnimux/assets/library/preview?${a.toString()}`}function c9(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.trim()!==""):[]}function R0(e){let t=typeof e.id=="string"&&e.id.trim()!==""?e.id:"",a=typeof e.name=="string"&&e.name.trim()!==""?e.name:"\u672A\u547D\u540D\u4E3B\u4F53",o=u9(e.type),n=Ns[o],r=Array.isArray(e.files)?e.files:[],i=e.cover&&typeof e.cover.id=="string"&&e.cover.id||(typeof e.cover_file_id=="string"?e.cover_file_id:"")||(typeof r[0]?.id=="string"?r[0].id:""),s=t&&i?W5(t,i):"",l=r.map(c=>t&&typeof c.id=="string"?W5(t,c.id):"").filter(c=>c!=="").slice(0,4),u=c9(e.tags).filter(c=>c!==n),d=typeof e.updatedAt=="number"?e.updatedAt:typeof e.updated_at=="string"&&Date.parse(e.updated_at)||0,f=r.map(c=>{let p=typeof c.real_path=="string"?c.real_path.trim():"",g=typeof c.original_name=="string"?c.original_name.trim():"",w=typeof c.id=="string"?c.id:"";return!p&&!w&&!g?null:{...w?{id:w}:{},...p?{real_path:p}:{},...g?{original_name:g}:{}}}).filter(c=>!!c);return{id:t,name:a,avatar:s,itemCount:r.length,tags:[n,...u],updatedAt:d,previewUrls:l.length>0?l:s?[s]:[],type:o,...f.length>0?{files:f}:{}}}function $m(e){if(!e.ok){let o=e.body?.error;return e.status===501||o==="picker-unsupported"?{kind:"unsupported"}:{kind:"error",message:e.body?.message||e.body?.error||`HTTP ${String(e.status)}`}}let t=e.body?.paths,a=Array.isArray(t)?t.filter(o=>typeof o=="string"&&o.trim()!==""):typeof e.body?.path=="string"&&e.body.path.trim()!==""?[e.body.path]:[];return a.length===0?{kind:"cancel"}:{kind:"ok",paths:a}}function f9(){return globalThis.fetch.bind(globalThis)}async function P0(e){try{let t=await e.json();if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{}return{}}function jc(e={}){let t=e.fetch??f9();async function a(r={},i){try{let s=new URLSearchParams;r.type&&r.type!=="all"&&s.set("type",r.type),r.q&&s.set("q",r.q);let l=s.toString()?`?${s.toString()}`:"",u=await t(`/omnimux/assets/library${l}`,{method:"GET",signal:i}),d=await P0(u);if(!u.ok)return{ok:!1,status:u.status,subjects:[],error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let c=(Array.isArray(d.assets)?d.assets:[]).filter(p=>!!p&&typeof p=="object").map(p=>R0(p)).filter(p=>p.id!=="");return{ok:!0,status:u.status,subjects:c}}catch(s){return i?.aborted||s instanceof Error&&s.name==="AbortError"?{ok:!1,status:0,subjects:[],error:"aborted"}:{ok:!1,status:0,subjects:[],error:"network"}}}async function o(r,i="custom",s){try{let l={name:r,type:i};Array.isArray(s)&&s.length>0&&(l.files=s);let u=await t("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),d=await P0(u);if(!u.ok)return{ok:!1,status:u.status,subject:null,error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let f=d.asset&&typeof d.asset=="object"?d.asset:{name:r,type:i};return{ok:!0,status:u.status,subject:R0(f)}}catch{return{ok:!1,status:0,subject:null,error:"network"}}}async function n(r){try{let i=await t("/omnimux/assets/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:r})}),s=await P0(i),l=$m({ok:i.ok,status:i.status,body:{error:typeof s.error=="string"?s.error:void 0,message:typeof s.message=="string"?s.message:void 0,path:typeof s.path=="string"||s.path===null?s.path:null,paths:Array.isArray(s.paths)?s.paths:[]}});return{ok:i.ok,status:i.status,interpretation:l}}catch{return{ok:!1,status:0,interpretation:{kind:"error",message:"network"}}}}return{listLibrary:a,createLibraryAsset:o,pickAssets:n}}var a$=jc();function ln(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function K5(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ga(e){return typeof e=="string"?e.trim():""}function Z5(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function p9(e){return typeof e=="string"&&e.startsWith("blob:")}function dn(e){let t=Ga(e);if(!(!t||p9(t)))return t}function m9(e){return K5(e.data)?e.data:{}}function $5(e){return Ga(e.realPath)||Ga(e.real_path)}function Y5(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function g9(e){if(e)for(let t of e){let a=dn(t?.url);if(a)return a}}function h9(e,t){let a=Ga(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=Ga(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function b9(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=Ga(t.mediaUrl)||void 0,n=a?ln(a,Y5(t),o):void 0;return dn(n)||dn(t.previewUrl)||dn(t.imageUrl)||dn(t.outputUrl)||dn(t.coverUrl)||dn(t.mediaUrl)||dn(t.outputVideoUrl)||dn(t.thumbnailUrl)||g9(Y5(t))}function x9(e){let t=Z5(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=K5(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function w9(e,t,a){let o=$5(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(Ga(t.content)||Ga(t.generatedContent)):e==="table"?x9(t):e==="video_composition"?!!(dn(t.outputVideoUrl)||dn(t.thumbnailUrl)):!1}function y9(e,t,a){return Ga(a.originalName)||Ga(a.label)||Ga(a.title)||Ga(a.name)||`${e} #${t.slice(-4)}`}function v9(e){let t=Ga(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function C9(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function S9(e){let t=Ga(e.id);if(!t)return null;let a=m9(e),o=h9(e,a),n=b9(o,a);if(!w9(o,a,n))return null;let r=$5(a),i=Z5(a.updatedAt)??0,s=_s(a),l=s==="import"?"":Ga(a.prompt),u={id:t,name:y9(o,t,a),type:o,status:v9(a),nodeKind:s,updatedAt:i};n&&(u.previewUrl=n),r&&(u.real_path=r),l&&(u.prompt=l);let d=C9(a);return d&&(u.tags=d),u}function Q5(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=S9(a);o&&t.push(o)}return t}var Qm=I(Q(),1),J5=I(ta(),1);var vr=I(X(),1),z0=["image","video","audio","text","other"],k9=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],eI=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,Qm.useRef)(null);if((0,Qm.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-160),l=a.length===0||z0.every(f=>a.includes(f)),u=f=>f==="all"?l:l?!0:a.includes(f),d=f=>{if(f==="all"){o(l?["__none__"]:[]);return}if(l){let p=z0.filter(g=>g!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],z0.every(p=>c.includes(p))?o([]):o(c)};return(0,J5.createPortal)((0,vr.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"140px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:f=>f.stopPropagation(),children:(0,vr.jsx)("div",{className:"wf-popover-body",children:k9.map(f=>{let c=u(f.id);return(0,vr.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,vr.jsxs)("div",{className:"wf-popover-item-left",children:[(0,vr.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,vr.jsx)(Ft,{size:10,strokeWidth:3})}),(0,vr.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var Jm=I(Q(),1),tI=I(ta(),1);var Ci=I(X(),1),O0=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],aI=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,Jm.useRef)(null);if((0,Jm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-150),l=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,tI.createPortal)((0,Ci.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"136px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:u=>u.stopPropagation(),children:(0,Ci.jsx)("div",{className:"wf-popover-body",children:O0.map(u=>{let d=a.includes(u.id);return(0,Ci.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>l(u.id),children:(0,Ci.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Ci.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,Ci.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var eg=I(Q(),1),oI=I(ta(),1);var ja=I(X(),1),nI=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let s=(0,eg.useRef)(null);if((0,eg.useEffect)(()=>{if(!e)return;let d=c=>{s.current&&!s.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let l=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,oI.createPortal)((0,ja.jsxs)("div",{ref:s,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${l}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:d=>d.stopPropagation(),children:[(0,ja.jsxs)("div",{className:"wf-popover-body",children:[(0,ja.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,ja.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,ja.jsx)(Ft,{size:14,className:"wf-popover-item-check"})]}),(0,ja.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,ja.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,ja.jsx)(Ft,{size:14,className:"wf-popover-item-check"})]})]}),(0,ja.jsx)("div",{className:"wf-popover-divider"}),(0,ja.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,ja.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,ja.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,ja.jsx)(Ft,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var tg=I(Q(),1),rI=I(ta(),1);var Es=I(X(),1),iI=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,tg.useRef)(null);if((0,tg.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-180),l=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,rI.createPortal)((0,Es.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"160px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:u=>u.stopPropagation(),children:(0,Es.jsx)("div",{className:"wf-popover-body",children:l.map(u=>{let d=a===u.id;return(0,Es.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,Es.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,Es.jsx)(Ft,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var ag=I(Q(),1),sI=I(ta(),1);var pe=I(X(),1),lI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,ag.useRef)(null);if((0,ag.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=220,l=440,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,sI.createPortal)((0,pe.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ge,onPointerDown:ge,onClick:c=>c.stopPropagation(),children:[(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,pe.jsx)(Mn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,pe.jsx)(bs,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,pe.jsx)(Nt,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,pe.jsx)(sc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,pe.jsx)(Mn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,pe.jsx)(cc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,pe.jsx)(So,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,pe.jsx)(gi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,pe.jsx)(gi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,pe.jsx)(hc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,pe.jsx)(Sc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,pe.jsx)(An,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,pe.jsx)(_o,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var og=I(Q(),1),dI=I(ta(),1);var Zt=I(X(),1),uI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,og.useRef)(null);if((0,og.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=190,l=220,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,dI.createPortal)((0,Zt.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ge,onPointerDown:ge,onClick:c=>c.stopPropagation(),children:[(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,Zt.jsx)(Ba,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,Zt.jsx)(bs,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,Zt.jsx)(So,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,Zt.jsx)(gs,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,Zt.jsx)("div",{className:"wf-context-menu-divider"}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,Zt.jsx)(_o,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var ng=I(Q(),1),cI=I(ta(),1);var Na=I(X(),1),fI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,ng.useRef)(null);if((0,ng.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=190,l=180,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,cI.createPortal)((0,Na.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ge,onPointerDown:ge,onClick:c=>c.stopPropagation(),children:[(0,Na.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,Na.jsx)(So,{size:14,className:"wf-context-menu-icon"}),(0,Na.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,Na.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,Na.jsx)(An,{size:14,className:"wf-context-menu-icon"}),(0,Na.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,Na.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,Na.jsx)(gs,{size:14,className:"wf-context-menu-icon"}),(0,Na.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,Na.jsx)("div",{className:"wf-context-menu-divider"}),(0,Na.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,Na.jsx)(_o,{size:14,className:"wf-context-menu-icon"}),(0,Na.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var Mo=I(Q(),1);var le=I(X(),1),H0=1440*60*1e3;function L9(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=H0:t==="7d"?a<=7*H0:t==="30d"?a<=30*H0:!0}var _9={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function I9(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=O0.find(i=>i.id===o);return[..._9[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function M9(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var pI=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:s,onViewModeChange:l})=>{let[u,d]=(0,Mo.useState)(""),f=t!==void 0?t:u,c=D=>{d(D),a?.(D)},[p,g]=(0,Mo.useState)("tree"),w=s??p,y=D=>{g(D),l?.(D)},[h,b]=(0,Mo.useState)(null),[m,x]=(0,Mo.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[v,C]=(0,Mo.useState)(!1),[S,k]=(0,Mo.useState)(!1),[_,T]=(0,Mo.useState)(!1),[R,H]=(0,Mo.useState)(null),[U,L]=(0,Mo.useState)(null),[N,E]=(0,Mo.useState)(null),M=D=>{switch(D){case"image":return(0,le.jsx)(Ba,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,le.jsx)(ia,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,le.jsx)(Ia,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,le.jsx)(_a,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,le.jsx)(Nt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},A=(0,Mo.useMemo)(()=>{let D=e.filter(B=>{if(f.trim()){let z=f.toLowerCase();if(!(B.name.toLowerCase().includes(z)||B.prompt&&B.prompt.toLowerCase().includes(z)))return!1}return!(!M9(B.type,m.types)||!I9(B,m.tags)||!L9(B.updatedAt||0,m.timeRange))});return D.sort((B,z)=>m.sortOrder==="desc"?(z.updatedAt||0)-(B.updatedAt||0):(B.updatedAt||0)-(z.updatedAt||0)),D},[e,f,m]),O=D=>B=>{B.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-canvas-node",nodeId:D.id})),B.dataTransfer.effectAllowed="move"};return(0,le.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,le.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,le.jsxs)("div",{className:"wf-search-row-compact",children:[(0,le.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,le.jsx)(on,{size:13,className:"wf-search-icon"}),(0,le.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:D=>c(D.target.value)})]}),(0,le.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>y("tree"),children:(0,le.jsx)(xr,{size:13})}),(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>y("grid"),children:(0,le.jsx)(Fa,{size:13})})]}),(0,le.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,le.jsx)(wr,{size:13})})]}),(0,le.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,le.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,le.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:D=>{H(D.currentTarget.getBoundingClientRect()),C(B=>!B),k(!1),T(!1)},children:[(0,le.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,le.jsx)(Yt,{size:11})]})}),(0,le.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,le.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:D=>{L(D.currentTarget.getBoundingClientRect()),k(B=>!B),C(!1),T(!1)},children:[(0,le.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,le.jsx)(Yt,{size:11})]})}),(0,le.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,le.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:D=>{E(D.currentTarget.getBoundingClientRect()),T(B=>!B),C(!1),k(!1)},children:[(0,le.jsx)("span",{children:"\u65F6\u95F4"}),(0,le.jsx)(Yt,{size:11})]})})]})]}),(0,le.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,le.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,le.jsx)(ba,{size:24,className:"wf-assets-empty-icon"}),(0,le.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,le.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):A.length===0?(0,le.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,le.jsx)(ba,{size:24,className:"wf-assets-empty-icon"}),(0,le.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,le.jsx)("div",{className:"wf-tree-list-container-compact",children:A.map(D=>{let B=h===D.id;return(0,le.jsxs)("div",{"data-id":D.id,className:`wf-tree-item-compact ${B?"selected":""}`,draggable:!0,onDragStart:O(D),onClick:()=>{b(D.id),o(D.id)},onContextMenu:z=>{z.preventDefault(),b(D.id),n(z,D)},onMouseEnter:z=>r(D,z),onMouseLeave:()=>r(null),children:[D.previewUrl?(0,le.jsx)("img",{src:D.previewUrl,alt:D.name,className:"wf-tree-file-thumb-compact"}):(0,le.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:M(D.type)}),(0,le.jsx)("span",{className:"wf-tree-name-compact",title:D.name,children:D.name}),D.nodeKind?(0,le.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${D.nodeKind}`,children:D.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null,(0,le.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:z=>{z.stopPropagation(),o(D.id)},children:(0,le.jsx)(Mn,{size:12})})]},D.id)})}):(0,le.jsx)("div",{className:"wf-grid-view-container-compact",children:A.map(D=>(0,le.jsxs)("div",{"data-id":D.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:O(D),onClick:()=>{b(D.id),o(D.id)},onContextMenu:B=>{B.preventDefault(),n(B,D)},onMouseEnter:B=>r(D,B),onMouseLeave:()=>r(null),children:[(0,le.jsx)("div",{className:"wf-grid-card-thumb-compact",children:D.previewUrl?(0,le.jsx)("img",{src:D.previewUrl,alt:D.name}):M(D.type)}),(0,le.jsxs)("div",{className:"wf-grid-card-meta-compact",children:[(0,le.jsx)("div",{className:"wf-grid-card-title-compact",title:D.name,children:D.name}),D.nodeKind?(0,le.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${D.nodeKind}`,children:D.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]})]},D.id))})}),(0,le.jsx)(eI,{isOpen:v,anchorRect:R,selectedTypes:m.types,onChange:D=>x(B=>({...B,types:D})),onClose:()=>C(!1)}),(0,le.jsx)(aI,{isOpen:S,anchorRect:U,selectedTags:m.tags,onChange:D=>x(B=>({...B,tags:D})),onClose:()=>k(!1)}),(0,le.jsx)(nI,{isOpen:_,anchorRect:N,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:D=>x(B=>({...B,sortOrder:D})),onRangeChange:D=>x(B=>({...B,timeRange:D})),onClose:()=>T(!1)})]})};var Xc=I(Q(),1);var fe=I(X(),1),mI=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:s})=>{let[l,u]=(0,Xc.useState)("tree"),[d,f]=(0,Xc.useState)(""),[c,p]=(0,Xc.useState)(null),[g,w]=(0,Xc.useState)({}),y=v=>{w(C=>({...C,[v]:!C[v]}))},h=v=>{switch(v){case"image":return(0,fe.jsx)(Ba,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,fe.jsx)(ia,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,fe.jsx)(Ia,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,fe.jsx)(_a,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,fe.jsx)(So,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,fe.jsx)(Nt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},b=e.filter(v=>{if(d.trim()){let C=d.toLowerCase();if(!(v.name.toLowerCase().includes(C)||v.tags&&v.tags.some(k=>k.toLowerCase().includes(C))))return!1}return!0}),m=v=>b.filter(C=>(C.parentId??null)===v),x=(v,C)=>{let S=[];for(let k of m(v)){let _=k.type==="folder",T=_&&(g[k.id]??C===0),R=c===k.id;S.push((0,fe.jsxs)("div",{className:`wf-tree-item-compact ${R?"selected":""}`,style:{paddingLeft:`${8+C*14}px`},"data-asset-id":k.id,"data-parent-id":k.parentId??"",draggable:!_,onDragStart:H=>{_||(H.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:k})),H.dataTransfer.effectAllowed="copy")},onClick:()=>{p(k.id),_&&y(k.id)},onDoubleClick:()=>{_||i(k)},onContextMenu:H=>{H.preventDefault(),p(k.id),a(H,k,_)},onMouseEnter:H=>o(k,H),onMouseLeave:()=>o(null),children:[_?(0,fe.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:T?(0,fe.jsx)(Yt,{size:11}):(0,fe.jsx)(gr,{size:11})}):null,k.previewUrl?(0,fe.jsx)("img",{src:k.previewUrl,alt:k.name,className:"wf-tree-file-thumb-compact"}):(0,fe.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:h(k.type)}),(0,fe.jsx)("span",{className:"wf-tree-name-compact",title:k.name,children:k.name}),!_&&(0,fe.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:H=>{H.stopPropagation(),i(k)},children:(0,fe.jsx)(Mn,{size:12})})]},k.id)),_&&T&&S.push(...x(k.id,C+1))}return S};return(0,fe.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,fe.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,fe.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,fe.jsx)(Nt,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,fe.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,fe.jsx)(gr,{size:14,className:"wf-subject-hero-arrow"})]}),(0,fe.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,fe.jsxs)("div",{className:"wf-search-row-compact",children:[(0,fe.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,fe.jsx)(on,{size:13,className:"wf-search-icon"}),(0,fe.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:v=>f(v.target.value)})]}),(0,fe.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,fe.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${l==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,fe.jsx)(xr,{size:13})}),(0,fe.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${l==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,fe.jsx)(Fa,{size:13})})]}),(0,fe.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:s,children:(0,fe.jsx)(wr,{size:13})})]})}),(0,fe.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:b.length===0?(0,fe.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,fe.jsx)(ba,{size:24,className:"wf-assets-empty-icon"}),(0,fe.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):l==="tree"?(0,fe.jsx)("div",{className:"wf-tree-list-container-compact",children:x(null,0)}):(0,fe.jsx)("div",{className:"wf-grid-view-container-compact",children:b.map(v=>(0,fe.jsxs)("div",{className:"wf-grid-card-compact",draggable:v.type!=="folder",onDragStart:C=>{v.type!=="folder"&&(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:v})),C.dataTransfer.effectAllowed="copy")},onClick:()=>p(v.id),onDoubleClick:()=>{v.type!=="folder"&&i(v)},onContextMenu:C=>{C.preventDefault(),p(v.id),a(C,v,v.type==="folder")},onMouseEnter:C=>o(v,C),onMouseLeave:()=>o(null),children:[(0,fe.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[v.previewUrl?(0,fe.jsx)("img",{src:v.previewUrl,alt:v.name}):h(v.type),v.duration&&(0,fe.jsx)("span",{className:"wf-grid-card-duration-compact",children:v.duration})]}),(0,fe.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,fe.jsx)("div",{className:"wf-grid-card-title-compact",title:v.name,children:v.name})})]},v.id))})}),(0,fe.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,fe.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,fe.jsx)(hs,{size:13}),(0,fe.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,fe.jsx)(cs,{size:13}),(0,fe.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var ud=I(Q(),1);var Ne=I(X(),1),gI=({subjects:e,error:t,onBack:a,onSelectSubject:o,onCreateSubject:n})=>{let[r,i]=(0,ud.useState)(""),[s,l]=(0,ud.useState)("all"),[u,d]=(0,ud.useState)("recent"),[f,c]=(0,ud.useState)(!1),[p,g]=(0,ud.useState)(null),w=b=>{g(b.currentTarget.getBoundingClientRect()),c(m=>!m)},y=e.filter(b=>{if(s!=="all")if(b.type){if(b.type!==s)return!1}else{let x=D0.find(v=>v.id===s);if(x&&x.id!=="all"&&!b.tags.some(C=>C===x.label))return!1}if(!r.trim())return!0;let m=r.toLowerCase();return b.name.toLowerCase().includes(m)||b.tags.some(x=>x.toLowerCase().includes(m))}).sort((b,m)=>u==="recent"?m.updatedAt-b.updatedAt:u==="name"?b.name.localeCompare(m.name):u==="count"?m.itemCount-b.itemCount:0);return(0,Ne.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Ne.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Ne.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:a,children:[(0,Ne.jsx)(ic,{size:13}),(0,Ne.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Ne.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:w,children:[(0,Ne.jsx)(Cs,{size:11}),(0,Ne.jsx)("span",{children:(()=>{switch(u){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Ne.jsx)(Yt,{size:11})]})]}),(0,Ne.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Ne.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Ne.jsx)(on,{size:13,className:"wf-search-icon"}),(0,Ne.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:r,onChange:b=>i(b.target.value)})]}),(0,Ne.jsx)("div",{className:"wf-subject-pills-row-compact",children:D0.map(b=>(0,Ne.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${s===b.id?"active":""}`,onClick:()=>l(b.id),children:b.label},b.id))})]}),(0,Ne.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:y.length===0?(0,Ne.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Ne.jsx)(Nt,{size:24,className:"wf-assets-empty-icon"}),(0,Ne.jsx)("div",{className:"wf-assets-empty-title",children:t?"\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528":e.length===0?"\u6682\u65E0\u4E3B\u4F53":"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Ne.jsx)("div",{className:"wf-subject-grid-compact",children:y.map(b=>(0,Ne.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,title:b.files?.some(m=>m.real_path)?b.name:"\u65E0\u672C\u5730\u6587\u4EF6\uFF0C\u65E0\u6CD5\u5165\u753B\u5E03",onDragStart:m=>{let x=(b.files||[]).find(v=>v.real_path);m.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:b.id,name:x?.original_name||b.name,real_path:x?.real_path,files:b.files}})),m.dataTransfer.effectAllowed="copy"},onClick:()=>o(b),children:[(0,Ne.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[b.avatar?(0,Ne.jsx)("img",{src:b.avatar,alt:b.name,className:"wf-subject-card-img-compact"}):(0,Ne.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Ne.jsx)(Nt,{size:20})}),(0,Ne.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Ne.jsx)(ba,{size:10})," ",b.itemCount," \u9879"]})]}),(0,Ne.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Ne.jsx)("div",{className:"wf-subject-card-name-compact",title:b.name,children:b.name}),(0,Ne.jsx)("div",{className:"wf-subject-card-tags-compact",children:b.tags.slice(0,3).map((m,x)=>(0,Ne.jsx)("span",{className:"wf-subject-card-tag-compact",children:m},x))})]})]},b.id))})}),(0,Ne.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Ne.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:n,children:[(0,Ne.jsx)(pt,{size:13}),(0,Ne.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Ne.jsx)(iI,{isOpen:f,anchorRect:p,sortValue:u,onChange:b=>d(b),onClose:()=>c(!1)})]})};var hI=I(Q(),1),bI=I(ta(),1);var Be=I(X(),1),xI=({isOpen:e,x:t=0,y:a=0,anchorRect:o,drawerLeft:n,item:r})=>{let i=(0,hI.useRef)(null);if(!e||!r)return null;let s=260,l=i.current?.offsetHeight||290,u,d;o?(u=(n??o.left)-s-8,d=o.top):(u=t-s-15,d=a-20),u<10&&(u=10);let f=window.innerHeight-l-12;d>f&&(d=f),d<12&&(d=12);let c="nodeKind"in r?r:null,p=c?null:r,g=r.updatedAt?new Date(r.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,bI.createPortal)((0,Be.jsxs)("div",{ref:i,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${d}px`,left:`${u}px`,width:`${s}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-preview",children:[r.previewUrl?(0,Be.jsx)("img",{src:r.previewUrl,alt:r.name,className:"wf-hover-inspector-img"}):(0,Be.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Be.jsx)(Nt,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),p?.duration&&(0,Be.jsx)("span",{className:"wf-hover-inspector-duration",children:p.duration})]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-title",title:r.name,children:[r.name,c?.nodeKind?(0,Be.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${c.nodeKind}`,children:c.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(lc,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:g})]}),p?.resolution&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(En,{size:12})," \u5206\u8FA8\u7387"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:p.resolution})]}),p?.size&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(wc,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:p.size})]}),c?.nodeKind==="import"&&c.real_path?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"\u672C\u5730\u8DEF\u5F84"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",title:c.real_path,children:c.real_path})]}):null,c?.nodeKind!=="import"&&c?.prompt?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:c.prompt})]}):null]}),p?.tags&&p.tags.length>0&&(0,Be.jsx)("div",{className:"wf-hover-inspector-tags",children:p.tags.map((w,y)=>(0,Be.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Be.jsx)(Dc,{size:10})," ",w]},y))})]})]}),document.body)};var Ut=I(Q(),1);var N9=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),E9=new Set(["mp4","webm","mov","mkv","avi","m4v"]),T9=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),A9={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function wI(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function Wc(e){return A9[wI(e)]}function yI(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=wI(e);return N9.has(o)?"image":E9.has(o)?"video":T9.has(o)?"audio":null}function cd(e){return typeof e=="string"&&e.startsWith("blob:")}function un(e){return`${Rt}/api/local-file?path=${encodeURIComponent(e)}`}function vI(e){if(typeof e!="string"||e.length===0)return null;try{let t=new URL(e,"http://127.0.0.1");if(!t.pathname.endsWith("/api/local-file"))return null;let a=t.searchParams.get("path");return a&&a.length>0?a:null}catch{return null}}function B0(e){return!e||e.includes("\0")?!1:e.startsWith("/")?!0:/^[a-zA-Z]:[\\/]/.test(e)}function rg(e){let t=un(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||Wc(e.name)||Wc(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function CI(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=un(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function SI(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var D9=1;function Yc(){return{schemaVersion:D9,rev:0,folders:[],items:[]}}function kI(e,t,a){let o=new Set([a]),n=!0;for(;n;){n=!1;for(let r of e){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}for(let r of t){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}}return[...o]}function R9(e,t){return{id:e.id,name:e.name,type:"folder",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,itemCount:t}}function P9(e){return{id:e.id,name:e.name,type:e.type,fileExt:e.name.split(".").pop()?.toUpperCase()||"FILE",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,previewUrl:un(e.real_path)}}function LI(e){let t=new Map;for(let n of e.folders)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);for(let n of e.items)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);let a=e.folders.map(n=>R9(n,t.get(n.id)??0)),o=e.items.map(P9);return[...a,...o]}function _I(e){let[t,a]=(0,Ut.useState)(Yc),[o,n]=(0,Ut.useState)(!1),[r,i]=(0,Ut.useState)(null),s=(0,Ut.useRef)(t);s.current=t;let l=(0,Ut.useCallback)(async(b,m)=>{n(!0),i(null);try{let x=await U5(b,m);if(m.aborted)return;if(!x.ok||!x.body.assets){i(x.body.error||x.body.message||`HTTP ${String(x.status)}`),a(Yc());return}a(x.body.assets)}catch(x){if(m.aborted)return;i(x instanceof Error?x.message:String(x)),a(Yc())}finally{m.aborted||n(!1)}},[]);(0,Ut.useEffect)(()=>{if(!e){a(Yc()),i(null);return}let b=new AbortController;return l(e,b.signal),()=>b.abort()},[e,l]);let u=(0,Ut.useCallback)(b=>{a(b),i(null)},[]),d=(0,Ut.useCallback)(async(b,m)=>{if(!e)return!1;let x=await V5(e,{name:b,parentId:m??null,expectedRev:s.current.rev});return!x.ok||!x.body.assets?(i(x.body.error||x.body.message||"mkdir failed"),!1):(u(x.body.assets),!0)},[u,e]),f=(0,Ut.useCallback)(async(b,m)=>{if(!e)return!1;let x=await G5(e,{paths:b,parentId:m??null,expectedRev:s.current.rev});return!x.ok||!x.body.assets?(i(x.body.error||x.body.message||"index failed"),!1):(u(x.body.assets),!0)},[u,e]),c=(0,Ut.useCallback)(async b=>{if(!e)return!1;let m=await q5(e,{expectedRev:s.current.rev,folders:b.folders,items:b.items});return!m.ok||!m.body.assets?(i(m.body.error||m.body.message||"save failed"),!1):(u(m.body.assets),!0)},[u,e]),p=(0,Ut.useCallback)(async(b,m)=>{let x=s.current;return c({folders:x.folders.map(v=>v.id===b?{...v,name:m,updatedAt:Date.now()}:v),items:x.items})},[c]),g=(0,Ut.useCallback)(async(b,m)=>{let x=s.current;return c({folders:x.folders.map(v=>v.id===b?{...v,parentId:m,updatedAt:Date.now()}:v),items:x.items.map(v=>v.id===b?{...v,parentId:m,updatedAt:Date.now()}:v)})},[c]),w=(0,Ut.useCallback)(async b=>{let m=s.current,x=new Set(kI(m.folders,m.items,b));return c({folders:m.folders.filter(v=>!x.has(v.id)),items:m.items.filter(v=>!x.has(v.id))})},[c]),y=(0,Ut.useCallback)(async()=>{e&&await l(e,new AbortController().signal)},[l,e]),h=(0,Ut.useMemo)(()=>LI(t),[t]);return{document:t,assets:h,loading:o,error:r,refresh:y,mkdir:d,indexPaths:f,persist:c,renameFolder:p,moveNode:g,deleteNode:w}}var Cr=I(Q(),1);var II=jc();function MI(e){let[t,a]=(0,Cr.useState)([]),[o,n]=(0,Cr.useState)(!1),[r,i]=(0,Cr.useState)(null),s=(0,Cr.useCallback)(async(u={},d)=>{n(!0);try{let f=await II.listLibrary(u,d);if(d?.aborted||f.error==="aborted")return;if(!f.ok){i(f.error||"library-unavailable"),a([]);return}i(null),a(f.subjects)}finally{d?.aborted||n(!1)}},[]);(0,Cr.useEffect)(()=>{if(!e)return;let u=new AbortController;return s({},u.signal),()=>u.abort()},[e,s]);let l=(0,Cr.useCallback)(async(u,d)=>{let f=await II.createLibraryAsset(u,"custom",d);return!f.ok||!f.subject?(i(f.error||"create-failed"),null):(a(c=>[f.subject,...c]),i(null),f.subject)},[]);return{subjects:t,loading:o,error:r,refresh:s,createSubject:l}}var vt=I(X(),1),z9=jc();function O9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function H9(e){let t=e.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(t)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(t)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(t)?"audio":"doc"}function NI(e){if(e.kind!=="cancel"){if(e.kind==="unsupported"){Y.warning("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668");return}Y.error(e.kind==="error"&&e.message||"\u9009\u62E9\u6587\u4EF6\u5931\u8D25")}}var B9=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n,workspaceId:r})=>{let[i,s]=(0,wa.useState)("canvas"),[l,u]=(0,wa.useState)("normal"),[d,f]=(0,wa.useState)("tree"),[c,p]=(0,wa.useState)(320),[g,w]=(0,wa.useState)(!1),y=(0,wa.useMemo)(()=>Q5(o),[o]),h=_I(r??null),b=MI(e&&l==="subject-library"),[m,x]=(0,wa.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[v,C]=(0,wa.useState)({visible:!1,x:0,y:0}),S=(0,wa.useRef)(null),k=(0,wa.useRef)(null);(0,wa.useEffect)(()=>()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]);let _=(0,wa.useCallback)(j=>{j.preventDefault(),w(!0);let F=j.clientX,K=c,$=q=>{let J=Math.max(260,Math.min(500,K-(q.clientX-F)));p(J)},ee=()=>{w(!1),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",ee)};window.addEventListener("mousemove",$),window.addEventListener("mouseup",ee)},[c]),T=j=>{if(n)n(j);else{let F=document.getElementById(j)||document.querySelector(`[data-id="${j}"]`);F&&(F.scrollIntoView({behavior:"smooth",block:"center"}),F.classList.add("highlight-pulse"),setTimeout(()=>F.classList.remove("highlight-pulse"),1800))}},R=(j,F)=>{if(S.current&&(clearTimeout(S.current),S.current=null),!j||!F){C({visible:!1,x:0,y:0,anchorRect:null,item:null});return}let $=F.currentTarget?.getBoundingClientRect(),ee=$?{top:$.top,bottom:$.bottom,left:$.left,right:$.right,width:$.width,height:$.height}:null,q=k.current?.getBoundingClientRect(),J=q?q.left:void 0,{clientX:ne,clientY:de}=F;S.current=setTimeout(()=>{C({visible:!0,x:ne,y:de,anchorRect:ee,drawerLeft:J,item:j})},200)},H=(j,F)=>{x({visible:!0,x:j.clientX,y:j.clientY,targetType:"canvas-item",targetItem:F})},U=(j,F,K)=>{x({visible:!0,x:j.clientX,y:j.clientY,targetType:K?"asset-folder":"asset-item",targetItem:F})},L=j=>j.real_path||j.name,N=(j,F)=>{let $=`[${F==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${j.name}]`;navigator.clipboard?.writeText($),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:$,name:j.name,previewUrl:j.previewUrl,path:j.real_path}})),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${j.name}`)},E=j=>{let F=L(j);navigator.clipboard?.writeText(F),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:F,name:j.name}})),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${F}`)},M=(j,F)=>{switch(j){case"add-to-canvas":case"focus-in-canvas":T(F.id),Y.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":N(F,"canvas");break;case"add-to-subjects":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}let K=F.name.replace(/\.[^/.]+$/,"")||F.name;b.createSubject(K,[{real_path:F.real_path,original_name:F.name}]).then($=>{$?Y.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${$.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528")});break}case"save-to-assets":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}h.indexPaths([F.real_path]).then(K=>{K?Y.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${F.name}`):Y.error("\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")});break}case"open-preview":F.previewUrl?(window.open(F.previewUrl,"_blank","noopener,noreferrer"),Y.success("\u5DF2\u6253\u5F00\u9884\u89C8")):Y.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":E(F);break;case"copy-path":navigator.clipboard?.writeText(L(F)),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${L(F)}`);break;case"copy-file":navigator.clipboard?.writeText(F.name),Y.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${F.name}`);break;case"duplicate":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":f(K=>K==="tree"?"grid":"tree"),Y.success(d==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},A=(j,F)=>{switch(j){case"add-to-canvas":a?.(F),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${F.name}`);break;case"add-to-agent":case"add-to-chat":N(F,"asset");break;case"reveal-in-finder":E(F);break;case"move-to":{let K=h.assets.filter(q=>q.type==="folder"&&q.id!==F.id),$=K.map(q=>q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${$}\uFF09\uFF1A`,K[0]?.name||"");if(ee&&ee.trim()){let q=K.find(J=>J.name===ee.trim());h.moveNode(F.id,q?.id??null).then(J=>{J?Y.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(K=>{K?Y.success(`\u5DF2\u5220\u9664\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},O=(j,F)=>{switch(j){case"reveal-in-finder":E(F);break;case"rename":{let K=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",F.name);K&&K.trim()&&h.renameFolder(F.id,K.trim()).then($=>{$?Y.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"):Y.error("\u91CD\u547D\u540D\u5931\u8D25")});break}case"move-to":{let K=h.assets.filter(q=>q.type==="folder"&&q.id!==F.id),$=K.map(q=>q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${$}\uFF09\uFF1A`,K[0]?.name||"");if(ee&&ee.trim()){let q=K.find(J=>J.name===ee.trim());h.moveNode(F.id,q?.id??null).then(J=>{J?Y.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(K=>{K?Y.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},D=async()=>{let j=await zn(),F=$m(j);if(F.kind!=="ok"){NI(F);return}for(let K of F.paths){let $=O9(K);a?.({id:K,name:$,type:H9($),real_path:K})}Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6\u5230\u753B\u5E03`)},B=async()=>{let F=(await z9.pickAssets("file")).interpretation;if(F.kind!=="ok"){NI(F);return}await h.indexPaths(F.paths)?Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6`):Y.error(h.error||"\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")},z=()=>{let j=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");!j||!j.trim()||h.mkdir(j.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${j.trim()}`):Y.error(h.error||"\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25")})};return e?(0,vt.jsxs)("div",{ref:k,className:"wf-assets-drawer-root nodrag nopan",style:{width:`${c}px`},onPointerDown:ge,onMouseDown:ge,onClick:j=>j.stopPropagation(),children:[(0,vt.jsx)("div",{className:`wf-drawer-resize-handle ${g?"resizing":""}`,onMouseDown:_}),(0,vt.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,vt.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,vt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="canvas"&&l==="normal"?"active":""}`,onClick:()=>{s("canvas"),u("normal")},children:"\u753B\u5E03"}),(0,vt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="assets"||l==="subject-library"?"active":""}`,onClick:()=>{s("assets")},children:"\u8D44\u4EA7"})]}),(0,vt.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,vt.jsx)(xa,{size:14})})]}),(0,vt.jsx)("div",{className:"wf-drawer-body",children:l==="subject-library"?(0,vt.jsx)(gI,{subjects:b.subjects,error:b.error,onBack:()=>u("normal"),onSelectSubject:()=>{},onCreateSubject:()=>{let j=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");!j||!j.trim()||b.createSubject(j.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u4E3B\u4F53\uFF1A${F.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528\uFF0C\u672A\u80FD\u521B\u5EFA")})}}):i==="canvas"?(0,vt.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,vt.jsx)(pI,{nodes:y,onFocusNode:T,onContextMenu:H,onHoverItem:R,viewMode:d,onViewModeChange:f,onRefresh:()=>{Y.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,vt.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,vt.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:()=>{D()},children:[(0,vt.jsx)(cs,{size:13}),(0,vt.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,vt.jsx)(mI,{assets:h.assets,onOpenSubjects:()=>u("subject-library"),onContextMenu:U,onHoverItem:R,onImportFiles:()=>{B()},onCreateFolder:z,onInsertToCanvas:j=>a?.(j),onRefresh:()=>{h.refresh().then(()=>Y.success("\u5DF2\u5237\u65B0\u9879\u76EE\u8D44\u4EA7"))}})}),(0,vt.jsx)(xI,{isOpen:v.visible,x:v.x,y:v.y,anchorRect:v.anchorRect,drawerLeft:v.drawerLeft,item:v.item||null}),(0,vt.jsx)(lI,{isOpen:m.visible&&m.targetType==="canvas-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:M,onClose:()=>x(j=>({...j,visible:!1}))}),(0,vt.jsx)(uI,{isOpen:m.visible&&m.targetType==="asset-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:A,onClose:()=>x(j=>({...j,visible:!1}))}),(0,vt.jsx)(fI,{isOpen:m.visible&&m.targetType==="asset-folder",x:m.x,y:m.y,item:m.targetItem||null,onAction:O,onClose:()=>x(j=>({...j,visible:!1}))})]}):null},EI=B9;var la=I(X(),1),F9=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],U9=({isOpen:e,onClose:t})=>e?(0,la.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:ge,onMouseDown:ge,onClick:t,children:(0,la.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,la.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,la.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,la.jsx)(Cc,{size:18}),(0,la.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,la.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,la.jsx)(xa,{size:16})})]}),(0,la.jsx)("div",{className:"wf-shortcuts-modal__body",children:F9.map(a=>(0,la.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,la.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,la.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,la.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,la.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,la.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,la.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,TI=U9;var Xo=I(Q(),1),RI=I(ta(),1);var da=I(X(),1),AI=278,As=12,q9=8,F0=160,Ts=18,V9={AudioLines:(0,da.jsx)(fs,{size:Ts}),ImageGen:(0,da.jsx)(br,{size:Ts}),Mic:(0,da.jsx)(xs,{size:Ts}),PersonStanding:(0,da.jsx)(Ec,{size:Ts}),TextGen:(0,da.jsx)(yr,{size:Ts}),VideoGen:(0,da.jsx)(nn,{size:Ts})},G9={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function DI(e){return e?G9[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function j9(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-AI:e;return Math.min(Math.max(As,o),Math.max(As,a-AI-As))}var X9=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:s="start"})=>{let l=(0,Xo.useRef)(null),[u,d]=(0,Xo.useState)({left:t,top:a,maxHeight:F0});(0,Xo.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?F0:window.innerHeight,p=j9(t,s),g=a+q9,w=Math.max(As,c-As-F0),y=Math.min(Math.max(As,g),w);d({left:p,top:y,maxHeight:Math.max(0,c-y-As)})},[s,e,t,a]),(0,Xo.useEffect)(()=>{if(!e)return;let c=g=>{l.current&&!l.current.contains(g.target)&&i()},p=g=>{g.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,Xo.useMemo)(()=>n.map(c=>(0,da.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,da.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,da.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:DI(c.icon).bg,color:DI(c.icon).color},children:V9[c.icon]??(0,da.jsx)(Nt,{size:Ts})}):null,(0,da.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,da.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,da.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,RI.createPortal)((0,da.jsxs)("div",{ref:l,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,da.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,da.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},ig=(0,Xo.memo)(X9);var Wo=I(Q(),1),PI=I(ta(),1);var We=I(X(),1),W9=210,Y9=230,K9=260,Z9=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:s=!1,canRedo:l=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,Wo.useRef)(null),[c,p]=(0,Wo.useState)("main"),g=se();(0,Wo.useEffect)(()=>{a&&p("main")},[a]),(0,Wo.useEffect)(()=>{if(!a)return;let x=C=>{f.current&&!f.current.contains(C.target)&&n()},v=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",x),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",v)}},[a,n]);let w=(0,Wo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"import-asset",label:g("toolbar.add.import_asset"),icon:(0,We.jsx)(oo,{size:15})},{action:"open-add-node",label:g("menu.addNode"),icon:(0,We.jsx)(pt,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!s},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!l},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,s,l,u,d,g]),y=(0,Wo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,We.jsx)(yr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,We.jsx)(Ba,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,We.jsx)(nn,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,We.jsx)(fs,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,We.jsx)(Lo,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,We.jsx)(ia,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?Y9:W9,b=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-K9-8);return(0,PI.createPortal)((0,We.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:b,top:m},onContextMenu:x=>x.preventDefault(),children:c==="main"?w.map(x=>(0,We.jsxs)(Wo.default.Fragment,{children:[o.type==="pane"&&x.action==="undo"?(0,We.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&x.action==="paste"?(0,We.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,We.jsxs)("button",{type:"button",className:`wf-context-menu__item${x.disabled?" wf-context-menu__item--disabled":""}`,disabled:x.disabled,onClick:v=>{v.stopPropagation(),x.action==="open-add-node"?p("add-node"):r(x.action,o)},children:[x.icon?(0,We.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:x.icon}):null,(0,We.jsx)("span",{className:"wf-context-menu__label",children:x.label}),x.action==="open-add-node"?(0,We.jsx)(gr,{size:14,className:"wf-add-node-menu__arrow"}):x.shortcut?(0,We.jsx)("span",{className:"wf-context-menu__shortcut",children:x.shortcut}):null]})]},x.action)):(0,We.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,We.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,We.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:x=>{x.stopPropagation(),p("main")},title:g("menu.back"),children:(0,We.jsx)(dc,{size:16})}),(0,We.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,We.jsx)("div",{className:"wf-add-node-menu__list",children:y.map(x=>(0,We.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:v=>{v.stopPropagation(),i?.(x.type),n()},children:[(0,We.jsx)("div",{className:"wf-add-node-menu__icon-box",children:x.icon}),(0,We.jsx)("span",{className:"wf-add-node-menu__label",children:x.label}),x.badge?(0,We.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${x.badge.variant}`,children:x.badge.text}):null,x.hasSubmenu?(0,We.jsx)(gr,{size:14,className:"wf-add-node-menu__arrow"}):null]},x.key))})]})}),document.body)},zI=Z9;var OI=I(Q(),1);function HI(){return typeof navigator>"u"?!0:/Mac|iPhone|iPod|iPad/i.test(navigator.platform)}function $9(e,t=HI()){return t?!!(e.metaKey&&!e.ctrlKey&&!e.altKey):!!(e.ctrlKey&&!e.metaKey&&!e.altKey)}function Q9(e,t={},a=HI()){let o=e.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return null;let n=$9(e,a),r=!e.metaKey&&!e.ctrlKey&&!e.altKey,i=e.key.toLowerCase(),{hasSelection:s=!1,isAssetsOpen:l=!1}=t;return r&&!e.shiftKey&&l&&/^[1-6]$/.test(e.key)?{type:"category",index:parseInt(e.key,10)}:r&&i==="a"?"toggleAssets":r&&!e.shiftKey&&i==="v"?"pointerSelect":r&&!e.shiftKey&&i==="h"?"pointerPan":r&&!e.shiftKey&&i==="n"?"toggleAddMenu":r&&!e.shiftKey&&i==="m"?"toggleMinimap":r&&(e.key==="?"||e.shiftKey&&e.key==="/")?"toggleShortcuts":n&&!e.shiftKey&&e.key==="1"?"fitView":n&&!e.shiftKey&&e.key==="0"?"resetZoom":r&&!e.shiftKey&&(e.key==="Delete"||e.key==="Backspace")&&s?"deleteSelected":r&&!e.shiftKey&&e.key==="Escape"?"escape":n&&e.shiftKey&&i==="g"?"ungroup":n&&!e.shiftKey&&i==="g"?"group":n&&!e.shiftKey&&i==="d"&&s?"duplicate":n&&!e.shiftKey&&i==="c"?"copy":n&&!e.shiftKey&&i==="v"?"paste":n&&!e.shiftKey&&i==="a"?"selectAll":n&&!e.shiftKey&&i==="z"?"undo":n&&e.shiftKey&&i==="z"?"redo":null}var BI=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:s,onRedo:l,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:w,onCategoryKey:y,onGroupSelected:h,onUngroupSelected:b,isAssetsOpen:m=!1,enabled:x=!0})=>{(0,OI.useEffect)(()=>{if(!x)return;let v=C=>{let S=Q9(C,{hasSelection:i,isAssetsOpen:m});if(S){if(C.preventDefault(),typeof S=="object"&&S.type==="category"){y?.(S.index);return}switch(S){case"toggleAssets":u?.();break;case"pointerSelect":p?.("select");break;case"pointerPan":p?.("pan");break;case"toggleAddMenu":c?.();break;case"toggleMinimap":f?.();break;case"toggleShortcuts":d?.();break;case"fitView":g?.();break;case"resetZoom":w?.();break;case"deleteSelected":o?.();break;case"escape":m?u?.():i&&n?.();break;case"ungroup":b?.();break;case"group":h?.();break;case"duplicate":r?.();break;case"copy":e?.();break;case"paste":t?.();break;case"selectAll":a?.();break;case"undo":s?.();break;case"redo":l?.();break}}};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[x,e,t,a,o,n,r,i,s,l,u,d,f,c,p,g,w,y,h,b,m])};var cn=I(Q(),1);function sg(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function FI(e,t,a){return U0(e,t,a).valid}function U0(e,t,a){let o=qm(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var q0={minZoom:.23,maxZoom:1.29,defaultZoom:1},J9={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},UI={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},eO={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},tO={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},qI={portrait:J9,square:UI,video_landscape:eO,audio_compact:tO};function V0(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function VI(e){return qI[V0(e)]}function GI(e,t){let a=qI[t]||UI;return Math.round(e/a.aspectRatio)}function On(e){return VI(e).default.width}function fd(e){return VI(e).default.height}function lg(e,t,a){let o=Fc(e,{nodeKind:"generate",status:"empty",nodeWidth:On(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function G0(e="image",t={x:0,y:0},a){let o=Fc(e,{nodeKind:"import",selectedTool:"import",status:"empty",nodeWidth:On(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function pd(e,t,a){return{nodes:[lg(e,t,a)],edges:[]}}function j0(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function aO(e,t){return`${e}-${t}`}function dg(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function ug(e){return e5(e).map(t=>{let a=String(t.targetTool);return{key:aO(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function jI(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var oO={visible:!1,x:0,y:0,options:[]};function XI(e){let t=se(),{screenToFlowPosition:a}=ka(),o=ae(p=>p.applyCanvasInputMutation),n=(0,cn.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,cn.useState)(oO),s=(0,cn.useRef)(null),l=(0,cn.useRef)(null),u=(0,cn.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){s.current=null;return}let w=ae.getState().nodes.find(h=>h.id===g.nodeId),y=w?.data?.materialType;if(!w||!y){s.current=null;return}s.current={nodeId:g.nodeId,materialType:y}},[]),d=(0,cn.useCallback)((p,g)=>{let w=g.fromNode?.id??null,y=g.toNode?.id??null,h=s.current,b=h?ug(h.materialType):[],m=null;if(!g.isValid&&w&&y){let v=ae.getState(),C=U0({source:w,target:y,sourceHandle:null,targetHandle:null},v.nodes,v.edges);m=C.valid?null:t(sg(C.reasonCode))}let x=jI({isValid:g.isValid??null,fromNodeId:w,toNodeId:y,startedFromSource:!!h,hasOptions:b.length>0,rejectReason:m});if(x.type==="reject"){n.current?.(x.reason),Y.warning(x.reason),s.current=null;return}if(x.type==="menu"&&h){let v="changedTouches"in p?p.changedTouches[0]:p;if(!v){s.current=null;return}let{clientX:C,clientY:S}=v;l.current=a({x:C,y:S}),i({visible:!0,x:C,y:S,options:b.map(k=>({key:k.key,label:t(k.labelKey),description:t(k.descKey),icon:k.icon}))});return}s.current=null},[a,t]),f=(0,cn.useCallback)(p=>{let g=s.current,w=l.current,y=dg(p);if(g&&w&&y){let h=pd(y.targetMaterialType,w),b=h.nodes[0];b&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:b.id,targetHandle:"in"}]})}i(h=>({...h,visible:!1})),s.current=null,l.current=null},[o]),c=(0,cn.useCallback)(()=>{i(p=>({...p,visible:!1})),s.current=null,l.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var Hn=I(Q(),1);var ya=[];for(let e=0;e<256;++e)ya.push((e+256).toString(16).slice(1));function WI(e,t=0){return(ya[e[t+0]]+ya[e[t+1]]+ya[e[t+2]]+ya[e[t+3]]+"-"+ya[e[t+4]]+ya[e[t+5]]+"-"+ya[e[t+6]]+ya[e[t+7]]+"-"+ya[e[t+8]]+ya[e[t+9]]+"-"+ya[e[t+10]]+ya[e[t+11]]+ya[e[t+12]]+ya[e[t+13]]+ya[e[t+14]]+ya[e[t+15]]).toLowerCase()}var X0,nO=new Uint8Array(16);function W0(){if(!X0){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");X0=crypto.getRandomValues.bind(crypto)}return X0(nO)}var rO=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Y0={randomUUID:rO};function iO(e,t,a){e=e||{};let o=e.random??e.rng?.()??W0();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return WI(o)}function sO(e,t,a){return Y0.randomUUID&&!t&&!e?Y0.randomUUID():iO(e,t,a)}var cg=sO;function YI(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function lO(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function KI(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=lO(o),i,s;if(t)i=t.x,s=t.y;else{let f=a?50:30;i=r.x+f,s=r.y+f}let l=new Map,u=o.map(f=>{let c=cg();return l.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:s+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:cg(),source:l.get(f.source)||f.source,target:l.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:s}}}function ZI(e,t){let a=(0,Hn.useRef)({nodes:[],edges:[]}),o=(0,Hn.useRef)(null),n=a.current.nodes.length>0,r=(0,Hn.useCallback)(()=>{let f=ae.getState(),c=YI(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,Hn.useCallback)(f=>{let c=KI(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=ae.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),s=(0,Hn.useCallback)(()=>{r(),i()},[r,i]),l=(0,Hn.useCallback)(()=>{let f=ae.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,Hn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,Hn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:s,deleteSelectedNodes:l,selectAllNodes:u,clearSelection:d}}var Bn=I(Q(),1);function $I(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:s,clearSelection:l,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,Bn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,Bn.useCallback)((C,S)=>{C.preventDefault();let k={type:"pane"};S?k={type:"node",nodeId:S.id}:ae.getState().nodes.filter(T=>T.selected).length>1&&(k={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:k})},[]),y=(0,Bn.useCallback)((C,S)=>{w(C,S)},[w]),h=(0,Bn.useCallback)(C=>{w(C)},[w]),b=(0,Bn.useCallback)(C=>{w(C)},[w]),m=(0,Bn.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),x=(0,Bn.useCallback)((C,S)=>{let k=t({x:p.x,y:p.y});switch(C){case"import-asset":c?.("import_asset",k);break;case"copy":{if(S.type==="node"){let T=ae.getState().nodes.find(R=>R.id===S.nodeId);T&&!T.selected&&(l(),a(R=>R.map(H=>H.id===S.nodeId?{...H,selected:!0}:H)))}o();break}case"paste":n(k);break;case"duplicate":r();break;case"delete":{if(S.type==="node"){let _=ae.getState();_.nodes.find(R=>R.id===S.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[S.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":s();break;case"execute-selection":{let _=ae.getState().nodes.filter(T=>T.selected).map(T=>T.id);_.length>0&&f?.(_);break}case"execute-node":{S.type==="node"&&f?.([S.nodeId]);break}}m()},[p.x,p.y,t,l,a,o,n,r,i,u,d,s,m,f,c]),v=(0,Bn.useCallback)(C=>{let S=t({x:p.x,y:p.y});c?.(C,S),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:y,handlePaneContextMenu:h,handleSelectionContextMenu:b,closeMenu:m,handleMenuAction:x,handleAddNodeFromMenu:v}}function dO(e,t){if(!t||!Array.isArray(e))return{focused:!1};let a=e.find(o=>o.id===t);return a?{focused:!0,nodeId:a.id,x:a.position.x+100,y:a.position.y+100,zoom:1,duration:800}:{focused:!1}}function K0(e){let t=dO(e.nodes,e.nodeId);return t.focused?(e.setCenter(t.x,t.y,{zoom:t.zoom,duration:t.duration}),e.setNodes(a=>a.map(o=>({...o,selected:o.id===e.nodeId}))),!0):!1}function Kc(e){let t=e.path;return typeof t=="string"?t:""}function uO(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function Si(e,t={}){if(!e)return null;let a=t.name||uO(e),o=t.mime||Wc(a)||Wc(e)||"",n=yI(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:un(e)}:null}function ki(e){let t=[];for(let a of e){let o=Si(a);o&&t.push(o)}return t}function Z0(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Fn(e){return typeof e=="string"?e.trim():""}function QI(e){if(!Array.isArray(e.files)||e.files.length===0)return null;let t=e.files[0];return Z0(t)?t:null}function cO(e){if(!Z0(e))return"";let t=Fn(e.real_path)||Fn(e.realPath);if(t)return t;let a=QI(e);return a?Fn(a.real_path)||Fn(a.realPath)||Fn(a.path):""}function fO(e){let t=Fn(e.name)||Fn(e.originalName)||Fn(e.title);if(t)return t;let a=QI(e);return a&&(Fn(a.original_name)||Fn(a.name))||void 0}function JI(e){let t=cO(e);if(!t)return{ok:!1,reason:"needPath"};let a=Z0(e)?{name:fO(e)}:{},o=Si(t,a);return o?{ok:!0,draft:o}:{ok:!1,reason:"unsupported"}}var fg=["image","video","audio"],pO=80,mO=40,$0=40;function aM(e){return!!e&&typeof e=="object"}function oM(e){return aM(e.data)?e.data:{}}function nM(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function rM(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function gO(e){let t=e.dimensions;if(aM(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function hO(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function bO(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function iM(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function xO(e,t){if(!fg.includes(e))return!1;if(ln(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function sM(e,t,a){let o=iM(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=oM(r),s=nM(i.materialType);if(!s||!xO(s,i))continue;let l=hO(i,r.id),u=gO(i);n.push({nodeId:r.id,materialType:s,title:l,previewUrl:ln(s,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:bO(i,l,r.id,u),width:u.width,height:u.height})}return n}function lM(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function eM(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function tM(e,t){return Um(e,t)}function pg(e){return rg({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function wO(e,t,a){let o=On(a),n=fd(a);return{x:e.position.x-o-pO,y:e.position.y+t*(n+mO)}}function yO(e){return nM(oM(e).materialType)}function dM(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=iM(e.edges,e.targetNodeId),s=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||s.has(w)){t.push({id:w,reason:"already_connected"});continue}let y=e.nodes.find(h=>h.id===w);if(!y){t.push({id:w,reason:"missing"});continue}if(!tM(y,r)){t.push({id:w,reason:"type_contract"});continue}a.push(eM(w,e.targetNodeId)),s.add(w)}let l=e.localFiles.filter(w=>!w.realPath||!fg.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=yO(r),d=l[0],f=!!u&&fg.includes(u)&&!!d&&d.materialType===u,c=0,p=f?l.slice(1):l;f&&d&&n.push({nodeId:e.targetNodeId,data:pg(d)});for(let w of p){let y=wO(r,c,w.materialType),h=lg(w.materialType,y,{...pg(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!tM(h,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(h),a.push(eM(h.id,e.targetNodeId)),s.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}function uM(e,t){return e.filter(a=>!a.realPath||!fg.includes(a.materialType)?(t.push({id:a.id,reason:"unsupported"}),!1):!0)}function cM(e,t,a=!1){let o=G0(e.materialType,t,{...pg(e),label:e.name.replace(/\.[^.]+$/,"")||e.name});return a?{...o,selected:!0}:o}function Q0(e){let t=[],a=uM(e.files,t),o=[],n=e.origin.y;return a.forEach((r,i)=>{let s=fd(r.materialType);o.push(cM(r,{x:e.origin.x,y:n},i===a.length-1)),n+=s+$0}),{hasWork:o.length>0,rejected:t,addNodes:o.length>0?o:void 0}}function Zc(e){let t=[],a=e.nodes.find(l=>l.id===e.targetNodeId);if(!a)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let o=uM(e.files,t),n=o[0];if(!n)return{hasWork:!1,rejected:t};let r=[{nodeId:e.targetNodeId,data:{...pg(n),materialType:n.materialType,nodeKind:"import",selectedTool:"import",nodeWidth:On(n.materialType),nodeHeight:fd(n.materialType),label:n.name.replace(/\.[^.]+$/,"")||n.name}}],i=[],s=a.position.y+fd(n.materialType)+$0;return o.slice(1).forEach((l,u,d)=>{let f=fd(l.materialType);i.push(cM(l,{x:a.position.x,y:s},u===d.length-1)),s+=f+$0}),{hasWork:!0,rejected:t,nodePatches:r,addNodes:i.length>0?i:void 0}}var vO=I(Q(),1),J0=new Map;function $c(e){J0.set(e.type,e)}function fM(){let e={};for(let[t,a]of J0)e[t]=a.component;return e}function pM(e,t,a){let o=J0.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var wt=I(Q(),1);var nt=I(Q(),1);function mM(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var fn=I(X(),1),CO=4,SO=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=se(),[i,s]=(0,nt.useState)(!1),[l,u]=(0,nt.useState)(!1),[d,f]=(0,nt.useState)(null),c=(0,nt.useRef)(null),p=(0,nt.useRef)(null),g=(0,nt.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",y=a==="plus"&&!!o&&o.length>0,h=v0(M=>M.inProgress),{screenToFlowPosition:b}=ka(),m=(0,nt.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,nt.useEffect)(()=>{if(a!=="plus"){m();return}let M=c.current,A=p.current;if(!M||!A)return;let O=D=>{if(l)return;let B=M.getBoundingClientRect(),z=B.left+B.width/2,j=B.top+B.height/2,{x:F,y:K}=mM(e,D.clientX-z,D.clientY-j);A.style.setProperty("--wf-handle-offset-x",`${F}px`),A.style.setProperty("--wf-handle-offset-y",`${K}px`)};return M.addEventListener("pointermove",O),()=>{M.removeEventListener("pointermove",O)}},[l,m,e,a]),(0,nt.useEffect)(()=>{if(!l){m(),f(null);return}let M=()=>{let A=c.current;if(!A)return;let O=A.getBoundingClientRect();f({x:w?O.right:O.left,y:O.bottom})};return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[l,w,m]);let x=(0,nt.useCallback)(()=>{s(!0)},[]),v=(0,nt.useCallback)(()=>{s(!1),m()},[m]),C=(0,nt.useCallback)(M=>{let A=c.current;!A||M===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(M)||A.releasePointerCapture(M)},[]),S=(0,nt.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),k=(0,nt.useCallback)(M=>{M.button===0&&(typeof M.currentTarget.setPointerCapture=="function"&&M.currentTarget.setPointerCapture(M.pointerId),g.current.pointerId=M.pointerId,g.current.startX=M.clientX,g.current.startY=M.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),_=(0,nt.useCallback)(M=>{if(g.current.pointerId!==M.pointerId)return;Math.hypot(M.clientX-g.current.startX,M.clientY-g.current.startY)>=CO&&(g.current.dragIntent=!0,g.current.suppressClick=!0,l&&u(!1))},[l]),T=(0,nt.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),S())},[S]),R=(0,nt.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.suppressClick=!1,S())},[S]),H=(0,nt.useCallback)(M=>{if(M.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}y&&u(A=>!A)},[y]),U=(0,nt.useCallback)(()=>{let M=d;if(!M){let A=c.current;if(!A)return;let O=A.getBoundingClientRect();M={x:w?O.right:O.left,y:O.bottom}}return{screenPosition:M,flowPosition:b(M)}},[w,d,b]),L=(0,nt.useCallback)(M=>{n?.(M,U()),u(!1)},[n,U]),N=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",l?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,fn.jsxs)(Jl,{id:w?"in":"out",type:w?"target":"source",position:w?ie.Left:ie.Right,isConnectable:!0,className:N,style:E,children:[(0,fn.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,fn.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,fn.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,fn.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:x,onPointerLeave:v,onPointerDown:k,onPointerMove:_,onPointerUp:T,onPointerCancel:R,onClick:H,children:(0,fn.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,fn.jsx)("div",{className:"wf-handle__plus-button",children:(0,fn.jsx)(pt,{size:24,strokeWidth:2.5})})})}):null,y&&d?(0,fn.jsx)(ig,{visible:l,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Sr=(0,nt.memo)(SO);var pn=I(Q(),1);var md=I(X(),1),gM=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,md.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,md.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,md.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,md.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var va=I(X(),1);function kO(e){let t=se();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var LO=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:s=400})=>{let l=se(),u=(0,pn.useRef)(e),[d,f]=(0,pn.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,pn.useState)(1),[g,w]=(0,pn.useState)(e==="completed"?1:0),[y,h]=(0,pn.useState)(e==="pending"||e==="generating");(0,pn.useEffect)(()=>{let H=u.current;if(u.current=e,(H==="pending"||H==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),w(1)});let U=setTimeout(()=>{f("complete"),h(!1)},s+50);return()=>clearTimeout(U)}H==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),w(0),f("idle")),e==="failed"&&(h(!1),f("idle")),H===e&&e==="completed"&&(f("complete"),w(1),h(!1))},[e,s]);let b=e==="pending"||e==="generating",m=e==="failed",x=e==="completed",v=l(e==="pending"?"node.preparing":"node.generating"),C=kO(a),S=(0,pn.useCallback)(()=>({transition:`opacity ${s}ms ease-out`}),[s]),k=`wf-gsc__box--${t}`,_=()=>(0,va.jsx)("div",{className:"wf-gsc__skeleton",style:{...S(),opacity:c},children:(0,va.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${k}`,children:(0,va.jsx)(gM,{borderRadius:"inherit",children:(0,va.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,va.jsx)("span",{className:"wf-gsc__progress-text",children:v})})})})}),T=()=>(0,va.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${k} ${i}`,children:[(0,va.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,va.jsx)(xa,{size:24})}),(0,va.jsx)("span",{className:"wf-gsc__failed-label",children:l("node.generationFailed")}),C?(0,va.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,va.jsxs)("span",{className:"wf-gsc__failed-task",children:[l("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,va.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,va.jsx)(wr,{size:14}),l("node.regenerate")]}):null]}),R=H=>(0,va.jsx)("div",{className:`${i} ${H?"wf-gsc__content--blur":""}`,style:{...S(),opacity:g},children:r});return(0,va.jsxs)("div",{className:`wf-gsc ${b?k:""} ${i}`,children:[(b||y)&&_(),m&&T(),(x||d==="crossfading")&&R(d==="crossfading")]})},Qc=LO;var qt=I(Q(),1);var Li=I(X(),1),hM=24,bM=30,xM={text:_a,image:br,video:nn,audio:Ia,table:Lo,video_composition:ia,import_asset:oo},_O=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=se(),i=t?r(`node.type.${t}`):"\u8282\u70B9",s=e||i,{zoom:l}=La(),[u,d]=(0,qt.useState)(!1),[f,c]=(0,qt.useState)(s),p=(0,qt.useRef)(null),g=(0,qt.useMemo)(()=>Ma(l),[l]);(0,qt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,qt.useEffect)(()=>{u||c(s)},[s,u]);let w=(0,qt.useCallback)(C=>{C.stopPropagation(),d(!0),c(s)},[s]),y=(0,qt.useCallback)(()=>{let S=f.trim()||i;d(!1),S!==e&&o&&o(S)},[f,i,e,o]),h=(0,qt.useCallback)(()=>{d(!1),c(s)},[s]),b=(0,qt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),y()):C.key==="Escape"&&(C.preventDefault(),h())},[y,h]),m=(0,qt.useCallback)(C=>{let S=C.target.value;S.length<=bM&&c(S)},[]),x=()=>{if(a)return qt.default.isValidElement(a)?a:(0,Li.jsx)(a,{size:14});let C=(t in xM?xM[t]:null)||_a;return(0,Li.jsx)(C,{size:14})};return(0,Li.jsxs)("div",{className:"wf-node-header",style:{top:-(hM+4*g),height:hM,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Li.jsx)("span",{className:"wf-node-header__icon",children:x()}),u?(0,Li.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:y,onKeyDown:b,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:bM}):(0,Li.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:s.length>20?s:r("node.renameHint"),children:s}),n]})},gd=(0,qt.memo)(_O);var mg=I(Q(),1);var Un=I(X(),1),IO=({executionStatus:e,status:t})=>{let a=se();return(0,mg.useMemo)(()=>{switch(e){case"running":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,Un.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},gg=(0,mg.memo)(IO);var Ds=I(Q(),1);var Jc=I(X(),1);var MO=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let s=(0,Ds.useMemo)(()=>ln(e,t,a),[e,t,a]),l=(0,Ds.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,Ds.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!s)return null;switch(e){case"image":return(0,Jc.jsx)("img",{src:s,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,Jc.jsx)("video",{src:s,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,Jc.jsx)("div",{className:"wf-media-preview__audio",children:(0,Jc.jsx)("audio",{src:s,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},wM=(0,Ds.memo)(MO);var yM=I(Q(),1);var Ue=I(X(),1),NO=({materialType:e,nodeKind:t="generate",onApplyPreset:a,onStartEdit:o})=>{let n=se();return t==="import"?(0,Ue.jsxs)("div",{className:"wf-node-empty wf-node-empty--import-kind",children:[(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(oo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})}),(0,Ue.jsx)("div",{className:"wf-node-empty__try-label",children:n("panel.dropToImport")})]}):e==="text"?(0,Ue.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(_a,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ue.jsx)("div",{className:"wf-node-empty__try-label",children:n("pills.tryLabel")}),(0,Ue.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:r=>r.stopPropagation(),children:[(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:o,children:[(0,Ue.jsx)(Tn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.writePrompt")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("script"),children:[(0,Ue.jsx)(uc,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.scriptGen")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("planning"),children:[(0,Ue.jsx)(Nn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.planningGen")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("prompt"),children:[(0,Ue.jsx)(Nt,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.promptExpand")})]})]})]}):e==="image"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(Ba,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(Ua,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(Ia,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},hg=(0,yM.memo)(NO);var _i=I(Q(),1);var ua=I(X(),1),EO=({materialType:e,nodeKind:t="generate",selected:a,onOpenResourcePicker:o,onStartTextEdit:n,onCopyText:r,onSplitText:i})=>{let s=se(),{zoom:l}=La(),[u,d]=_i.default.useState(!1),f=(0,_i.useMemo)(()=>Ma(l),[l]),c=(0,_i.useCallback)(()=>{r&&(r(),d(!0),setTimeout(()=>d(!1),1500))},[r]),p=30;return t==="generate"&&e!=="text"?null:(0,ua.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(p*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,ua.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,ua.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:n,title:s("pill.textEdit"),children:[(0,ua.jsx)(Nn,{size:13,className:"wf-floating-top-pill__icon"}),(0,ua.jsx)("span",{children:s("pill.textEdit")})]}),(0,ua.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,ua.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:c,title:s("pill.copy"),children:u?(0,ua.jsx)(Ft,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,ua.jsx)(gi,{size:13,className:"wf-floating-top-pill__icon"})}),(0,ua.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,ua.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:i,title:s("pill.structureSplit"),children:(0,ua.jsx)(ba,{size:13,className:"wf-floating-top-pill__icon"})})]}):t==="import"?(0,ua.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,ua.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,children:[(0,ua.jsx)(ks,{size:13,className:"wf-floating-top-pill__icon"}),(0,ua.jsx)("span",{children:s("pill.import")})]})}):null})},vM=(0,_i.memo)(EO);var hd=I(Q(),1);var CM=I(Q(),1),SM=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function TO(e,t,a=SM){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function kM({refs:e,excludeSelectors:t=SM,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,CM.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;TO(f,r.map(c=>c.current),t)&&a()},s=d=>{d.key==="Escape"&&a()},l=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",s)},u=null;return n?u=requestAnimationFrame(l):l(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",s)}},[e,t,a,o,n])}var ew=I(X(),1),AO=480,DO=({children:e,onClose:t,width:a=AO})=>{let{zoom:o}=La(),n=(0,hd.useRef)(null),r=(0,hd.useMemo)(()=>Ma(o),[o]);return kM({refs:n,onClose:t}),(0,ew.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,ew.jsx)("div",{className:"wf-panel-shell__card",children:e})})},LM=(0,hd.memo)(DO);var No=I(Q(),1);var _M=I(Q(),1),bd=I(X(),1),tw={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},RO=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function PO(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(tw[t])return t;for(let a of RO)if(a.regex.test(t))return a.brand;return null}var IM=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,_M.useMemo)(()=>t&&tw[t.toLowerCase()]?t.toLowerCase():PO(e),[t,e]),s=i?tw[i]:null;if(!s){if(r)return(0,bd.jsx)(bd.Fragment,{children:r});let l=(e||t||"M").charAt(0).toUpperCase();return(0,bd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:l})}return(0,bd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:s.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var MM=I(Q(),1);function NM(e){let t=C_(),a=S_();return(0,MM.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},s=ln(i.materialType,i.mediaAssets,i.mediaUrl),l=i.content||i.generatedContent||"",u=!!(s||i.materialType==="text"&&l.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:s,hasMedia:u,textContent:l}]}),[t,a,e])}var EM=I(Q(),1),TM="wf_capabilities_catalog_v1",zO={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function ef(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(TM);return e?JSON.parse(e):null}catch{return null}}function AM(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(TM,JSON.stringify(e))}catch{}}function DM(e,t,a){return(0,EM.useMemo)(()=>{let o=a??ef(),n=o&&o[e]?o[e]:[],r=n.find(k=>k.id===t)??n[0],i=zO[e]??{},s=r?.parameters??i,l=s.aspectRatio?.options&&s.aspectRatio.options.length>0?s.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=s.aspectRatio?.defaultValue??l[0]?.value??"16:9",d=k=>k?l.some(_=>_.value===k):!1,f=s.duration?.options&&s.duration.options.length>0?s.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=s.duration?.defaultValue??f[0]?.value??5,p=k=>typeof k!="number"?!1:f.some(_=>_.value===k),g=s.resolution?.options??[],w=s.resolution?.defaultValue??g[0]?.value??"",y=s.quality?.options??[],h=s.quality?.defaultValue??y[0]?.value??"",b=!!s.sound?.supported,m=!!s.sound?.defaultValue,x=s.voice?.options??[],v=s.voice?.defaultValue??x[0]?.value??"",C=!!s.instrumental?.supported,S=!!s.instrumental?.defaultValue;return{schema:s,modelItem:r,aspectRatioOptions:l,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:w,qualityOptions:y,defaultQuality:h,hasSoundSupport:b,defaultSound:m,voiceOptions:x,defaultVoice:v,hasInstrumentalSupport:C,defaultInstrumental:S}},[e,t,a])}var RM=I(Q(),1);var kr=I(X(),1),OO=({onClick:e,disabled:t,isGenerating:a})=>{let o=se();return(0,kr.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,kr.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,kr.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,kr.jsx)(xi,{size:14,className:"wf-generate-btn__spin"}):(0,kr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,kr.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,kr.jsx)("path",{d:"M12 19V5"})]})})]})},PM=(0,RM.memo)(OO);var te=I(X(),1);function HO(e){let t=(0,te.jsx)(IM,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var BO=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let s=se(),{materialType:l,selectedTool:u,params:d,prompt:f}=t,c=_s(t),[p,g]=(0,No.useState)(!1),[w,y]=(0,No.useState)(!1),h=NM(e);if(c==="import")return(0,te.jsx)("div",{className:"wf-config-panel wf-config-panel--import",children:(0,te.jsxs)("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[(0,te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,te.jsx)("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--wb-text-secondary)"},children:s("panel.hintImportNode")}),!!t.realPath&&(0,te.jsx)("span",{style:{fontSize:"11px",color:"var(--wb-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"240px"},title:String(t.realPath),children:String(t.realPath).split("/").pop()})]}),i&&(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",style:{padding:"4px 10px",height:"28px"},onClick:i,children:(0,te.jsx)("span",{children:s("node.replace")})})]})});let b=u==="text-to-music"?"music":"speech",m=(0,No.useCallback)(z=>{o({selectedTool:z==="music"?"text-to-music":"text-to-audio"})},[o]),x=(0,No.useMemo)(()=>{let z=a?.[l]??[];return z.length===0&&(l==="text"?z=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:l==="image"?z=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:l==="video"?z=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:l==="audio"&&(z=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),z.map(j=>{let F=HO(j.id),K=F.icon,$=j.badge??F.badge,ee=j.subtitle??F.subtitle;return{value:j.id,label:j.label,triggerLabel:(0,te.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[K?(0,te.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:K}):null,(0,te.jsx)("span",{children:j.label})]}),icon:K,badge:$,subtitle:ee}})},[a,l]),v=typeof d.model=="string"?d.model:x[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:S,isAspectRatioValid:k,durationOptions:_,defaultDuration:T,isDurationValid:R,resolutionOptions:H,defaultResolution:U}=DM(l,v,a),L=(0,No.useCallback)((z,j)=>{o({params:{...d,[z]:j}})},[o,d]),N=(0,No.useCallback)(z=>{let $=((a??ef())?.[l]??[]).find(q=>q.id===z)?.parameters,ee={...d,model:z};d.aspectRatio&&$?.aspectRatio?.options&&($.aspectRatio.options.some(J=>J.value===d.aspectRatio)||(ee.aspectRatio=$.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&$?.duration?.options&&($.duration.options.some(J=>J.value===d.duration)||(ee.duration=$.duration.defaultValue||$.duration.options[0]?.value||5)),d.resolution&&$?.resolution?.options?$.resolution.options.some(J=>J.value===d.resolution)||(ee.resolution=$.resolution.defaultValue||$.resolution.options[0]?.value):d.resolution&&$&&!$.resolution?.options&&delete ee.resolution,o({params:ee})},[a,l,o,d]),E=(0,No.useMemo)(()=>{switch(l){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[l]),M=(0,No.useMemo)(()=>{switch(l){case"text":return s("panel.textPromptPlaceholder");case"image":return s("panel.imagePromptPlaceholder");case"video":return s("panel.videoPromptPlaceholder");case"audio":return s(b==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return s("panel.promptPlaceholder")}},[l,b,s]),A=typeof d.aspectRatio=="string"&&k(d.aspectRatio)?d.aspectRatio:S,O=typeof d.duration=="number"&&R(d.duration)?d.duration:T,D=z=>!!z&&H.some(j=>j.value===z),B=typeof d.resolution=="string"&&D(d.resolution)?d.resolution:U;return(0,te.jsxs)("div",{className:"wf-config-panel",children:[l==="audio"&&(0,te.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,te.jsx)(xs,{size:13}),(0,te.jsx)("span",{children:s("panel.audioGen")})]}),(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,te.jsx)(Ia,{size:13}),(0,te.jsx)("span",{children:s("panel.musicGen")})]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,te.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[h.length>0||i?(0,te.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[h.map(z=>(0,te.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${z.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${z.label} (${z.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[z.url&&z.materialType==="image"?(0,te.jsx)("img",{src:z.url,alt:z.label,className:"wf-config-panel__ref-thumb-media"}):z.url&&z.materialType==="video"?(0,te.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,te.jsx)("video",{src:z.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,te.jsx)(Ua,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):z.materialType==="audio"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,te.jsx)(Ia,{size:13})}):z.materialType==="text"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,te.jsx)(_a,{size:13})}):(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,te.jsx)(Ba,{size:13})}),z.hasMedia&&(0,te.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},z.nodeId)),i?(0,te.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:s("picker.addRef"),children:(0,te.jsx)(pt,{size:14})}):null]}):(0,te.jsx)("span",{}),(0,te.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>g(!0),title:s("header.fitView"),children:(0,te.jsx)(En,{size:13})})]}),(0,te.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:M,rows:3,onChange:z=>o({prompt:z.target.value})}),(0,te.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",E]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,te.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,te.jsx)(ro,{className:"wf-param-bar__select wf-param-bar__select--model",value:v,options:x,popupMatchSelectWidth:!1,onChange:z=>N(z)}),l==="image"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,te.jsx)(ro,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:C,popupMatchSelectWidth:!1,onChange:z=>L("aspectRatio",z)})})]}),l==="video"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,te.jsx)(ro,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:C,popupMatchSelectWidth:!1,onChange:z=>L("aspectRatio",z)}),(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(ro,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:O,options:_,popupMatchSelectWidth:!1,onChange:z=>L("duration",z)}),H.length>0&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(ro,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:B,options:H,popupMatchSelectWidth:!1,onChange:z=>L("resolution",z)})]})]})]}),l==="audio"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!w),title:s("panel.advanced"),children:(0,te.jsx)(Cs,{size:13})})]})]}),(0,te.jsx)("div",{className:"wf-config-panel__action-group",children:(0,te.jsx)(PM,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),w&&(0,te.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,te.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,te.jsx)("span",{className:"wf-config-panel__advanced-label",children:s("panel.duration")}),(0,te.jsx)(L0,{style:{flex:1},min:1,max:l==="video"?20:60,value:O,onChange:z=>L("duration",z)})]})}),(0,te.jsx)(sn,{title:s("panel.promptPlaceholder"),open:p,onCancel:()=>g(!1),width:680,children:(0,te.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:M,rows:10,onChange:z=>o({prompt:z.target.value})})})]})},zM=(0,No.memo)(BO);var io=I(Q(),1);var Rs=I(Q(),1);var Se=I(X(),1);function bg(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var FO=({items:e,selectedIds:t,onToggle:a})=>{let o=se(),[n,r]=(0,Rs.useState)(""),[i,s]=(0,Rs.useState)("all"),[l,u]=(0,Rs.useState)("grid"),d=(0,Rs.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,Rs.useMemo)(()=>lM(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,Se.jsxs)("div",{className:"wf-picker-pane",children:[(0,Se.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,Se.jsxs)("label",{className:"wf-picker-search",children:[(0,Se.jsx)(on,{size:14,className:"wf-picker-search__icon"}),(0,Se.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,Se.jsx)(ro,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>s(p)}),(0,Se.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,Se.jsx)("button",{type:"button",className:`wf-picker-view-btn ${l==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":l==="grid",children:(0,Se.jsx)(Fa,{size:14})}),(0,Se.jsx)("button",{type:"button",className:`wf-picker-view-btn ${l==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":l==="list",children:(0,Se.jsx)(xr,{size:14})})]})]}),f.length===0?(0,Se.jsx)("div",{className:"wf-picker-empty",children:o(c)}):l==="grid"?(0,Se.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,Se.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,Se.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,Se.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,Se.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,Se.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(bg(p.materialType))}),p.alreadyConnected?(0,Se.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,Se.jsx)(Ft,{size:11}),o("picker.added")]}):(0,Se.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,Se.jsx)(Ft,{size:11}):null})]}),(0,Se.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,Se.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,Se.jsx)("span",{className:"wf-picker-type-tag",children:o(bg(p.materialType))})]})]},p.nodeId)})}):(0,Se.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,Se.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,Se.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,Se.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,Se.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,Se.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(bg(p.materialType))})}),(0,Se.jsxs)("div",{className:"wf-picker-row__body",children:[(0,Se.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,Se.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(bg(p.materialType))]})]}),p.alreadyConnected?(0,Se.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,Se.jsx)(Ft,{size:11}),o("picker.added")]}):(0,Se.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,Se.jsx)(Ft,{size:11}):null})]},p.nodeId)})})]})},OM=FO;var Ps=I(Q(),1);var Vt=I(X(),1),UO=({files:e,onAddFiles:t,onRemove:a})=>{let o=se(),[n,r]=(0,Ps.useState)(!1),i=(0,Ps.useCallback)(d=>{let f=ki(d);f.length>0&&t(f),f.length<d.length&&Y.warning(o("picker.unsupported")),d.length>0&&f.length===0&&Y.warning(o("picker.unsupported"))},[t,o]),s=(0,Ps.useCallback)(async()=>{let d=await zn();if(!d.ok){d.body.error==="picker-unsupported"?Y.warning(o("picker.needPath")):Y.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),l=(0,Ps.useCallback)(d=>{let f=Array.from(d),c=[],p=0,g=0;for(let w of f){let y=Kc(w);if(!y){p+=1;continue}let h=Si(y,{name:w.name,mime:w.type,size:w.size});h?c.push(h):g+=1}c.length>0&&t(c),p>0&&Y.warning(o("picker.needPath")),g>0&&Y.warning(o("picker.unsupported"))},[t,o]),u=(0,Ps.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&l(d.dataTransfer.files)},[l]);return(0,Vt.jsxs)("div",{className:"wf-picker-pane",children:[(0,Vt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{s()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,Vt.jsx)(ks,{size:22,className:"wf-picker-dropzone__icon"}),(0,Vt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,Vt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,Vt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,Vt.jsx)(gc,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,Vt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||un(d.realPath);return(0,Vt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,Vt.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,Vt.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,Vt.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,Vt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,Vt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,Vt.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,Vt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${rM(d.size)}`:""]})]}),(0,Vt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,Vt.jsx)(_o,{size:14})})]},d.id)})}):null]})},HM=UO;var mn=I(X(),1),qO=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=se(),i=ae(S=>S.nodes),s=ae(S=>S.edges),[l,u]=(0,io.useState)(a),[d,f]=(0,io.useState)([]),[c,p]=(0,io.useState)([]),g=(0,io.useMemo)(()=>sM(i,s,t),[i,s,t]);(0,io.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,io.useCallback)(()=>{p([]),o()},[o]),y=(0,io.useCallback)((S,k)=>{k||f(_=>_.includes(S)?_.filter(T=>T!==S):[..._,S])},[]),h=(0,io.useCallback)(S=>{p(k=>[...k,...S])},[]),b=(0,io.useCallback)(S=>{p(k=>k.filter(_=>_.id!==S))},[]),x=d.filter(S=>{let k=g.find(_=>_.nodeId===S);return k&&!k.alreadyConnected}).length+c.length,v=(0,io.useCallback)(()=>{if(x===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,x,d]),C=(0,mn.jsxs)("div",{className:"wf-picker-footer",children:[(0,mn.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,mn.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:x===0,onClick:v,children:[r("picker.use")," ",x," ",r("picker.items")]})]});return(0,mn.jsxs)(sn,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,mn.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,mn.jsxs)("button",{type:"button",role:"tab","aria-selected":l==="canvas",className:`wf-picker-tab ${l==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,mn.jsx)("button",{type:"button",role:"tab","aria-selected":l==="local",className:`wf-picker-tab ${l==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),l==="canvas"?(0,mn.jsx)(OM,{items:g,selectedIds:d,onToggle:y}):(0,mn.jsx)(HM,{files:c,onAddFiles:h,onRemove:b})]})},xg=qO;var qn=I(Q(),1);function BM(e){let t=se(),[a,o]=(0,qn.useState)(!1),[n,r]=(0,qn.useState)("canvas"),i=(0,qn.useCallback)((c="canvas")=>{r(c),o(!0)},[]),s=(0,qn.useCallback)(()=>{o(!1)},[]),l=(0,qn.useCallback)(c=>{let p=ae.getState(),g=dM({nodes:p.nodes,edges:p.edges,targetNodeId:e,selectedCanvasNodeIds:c.selectedCanvasNodeIds,localFiles:c.localFiles});return g.hasWork?p.applyCanvasInputMutation({addNodes:g.addNodes,addEdges:g.addEdges,nodePatches:g.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(g.rejected.length>0?Y.warning(t("picker.commitPartial")):Y.success(t("picker.commitOk")),o(!1),!0):(Y.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,qn.useCallback)(async()=>{let c=await zn();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=ki(p);if(g.length===0)return Y.warning(t("picker.unsupported")),!1;let w=ae.getState(),y=Zc({nodes:w.nodes,targetNodeId:e,files:g});return y.hasWork?w.applyCanvasInputMutation({addNodes:y.addNodes,nodePatches:y.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("picker.importOk")),!0):(Y.warning(t("picker.unsupported")),!1)},[e,t]),d=(0,qn.useCallback)(async()=>{let c=await zn();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=ki(p);return g.length===0?(Y.warning(t("picker.unsupported")),!1):l({selectedCanvasNodeIds:[],localFiles:g})},[l,t]),f=(0,qn.useCallback)(async c=>{let p=await zn();if(!p.ok)return Y.error(t("picker.pickFailed")),!1;let g=p.body.path;if(!g)return!1;let y=ki([g])[0];if(!y||y.materialType!==c)return Y.warning(t("picker.unsupported")),!1;let h=rg({realPath:y.realPath,name:y.name,materialType:y.materialType,mime:y.mime,size:y.size});return ae.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:h}]}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:s,importLocalFiles:d,fillImportNode:u,relinkLocalFile:f,commit:l}}var ze=I(X(),1),VO=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:s,mediaUrl:l,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[w,y]=(0,wt.useState)(!1),[h,b]=(0,wt.useState)(!1),[m,x]=(0,wt.useState)(!1),[v,C]=(0,wt.useState)(!1),[S,k]=(0,wt.useState)(null),{setNodes:_}=ka(),T=ot(oe=>oe.status==="pending"||oe.status==="running"),R=sd(),H=o.nodeWidth??On(n),U=V0(n),L=GI(H,U),N=S??o.nodeHeight??L,E=(0,wt.useCallback)(oe=>{_(Ie=>Ie.map(st=>st.id===e?{...st,data:{...st.data,...oe}}:st))},[e,_]),M=(0,wt.useCallback)((oe,Ie)=>{if(oe>0&&Ie>0){let st=oe/Ie,kt=Math.max(80,Math.min(800,Math.round(H/st)));k(kt),o.nodeHeight!==kt&&E({nodeHeight:kt})}},[o.nodeHeight,H,E]),A=(0,wt.useCallback)(()=>{if(_s(o)==="generate"){let Ie=o.selectedTool;(!Ie||Ie==="text-editor")&&E({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]})}ot.getState().startNodeExecution?.(e)},[e,n,o,E]),O=se(),D=ae(oe=>oe.applyCanvasInputMutation),B=BM(e),z=_s(o),j=(0,wt.useMemo)(()=>ug(n).map(oe=>({key:oe.key,label:O(oe.labelKey),description:O(oe.descKey),icon:oe.icon})),[n,O]),F=(0,wt.useCallback)((oe,Ie)=>{let st=dg(oe),kt=Ie?.flowPosition;if(!st||!kt)return;let Fe=pd(st.targetMaterialType,kt),Jt=Fe.nodes[0];Jt&&D({addNodes:Fe.nodes,addEdges:[{source:e,sourceHandle:"out",target:Jt.id,targetHandle:"in"}]})},[D,e]),K=u||s||"",$=(0,wt.useCallback)(oe=>{if(n==="text"){let Ie="";oe==="script"?Ie=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:oe==="planning"?Ie=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:oe==="prompt"?Ie=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:oe==="storyboard"&&(Ie=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),E({prompt:Ie,selectedTool:"text-to-text"})}},[n,E]),ee=(0,wt.useCallback)(oe=>{let Ie=Kc(oe);if(!Ie){Y.warning(O("picker.needPath"));return}let st=Si(Ie,{name:oe.name,mime:oe.type,size:oe.size});if(!st){Y.warning(O("picker.unsupported"));return}let kt=ae.getState(),Fe=Zc({nodes:kt.nodes,targetNodeId:e,files:[st]});if(!Fe.hasWork){Y.warning(O("picker.unsupported"));return}D({addNodes:Fe.addNodes,nodePatches:Fe.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[D,e,O]),q=(0,wt.useCallback)(oe=>{z==="import"&&(oe.preventDefault(),oe.stopPropagation(),b(!0))},[z]),J=(0,wt.useCallback)(oe=>{z==="import"&&(oe.preventDefault(),oe.stopPropagation(),b(!1))},[z]),ne=(0,wt.useCallback)(oe=>{if(z!=="import")return;oe.preventDefault(),oe.stopPropagation(),b(!1);let Ie=Array.from(oe.dataTransfer.files??[]);if(Ie.length===1&&Ie[0]){ee(Ie[0]);return}let st=Ie.map(Tt=>{let Wa=Kc(Tt);return Wa?Si(Wa,{name:Tt.name,mime:Tt.type,size:Tt.size}):null}).filter(Tt=>!!Tt);if(st.length===0){Ie.length>0&&Y.warning(O("picker.needPath"));return}let kt=ae.getState(),Fe=Zc({nodes:kt.nodes,targetNodeId:e,files:st});if(!Fe.hasWork){Y.warning(O("picker.unsupported"));return}D({addNodes:Fe.addNodes,nodePatches:Fe.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[D,ee,e,z,O]),de=(0,wt.useCallback)(()=>{K&&navigator.clipboard.writeText(K).catch(()=>{})},[K]),re=(0,wt.useCallback)(()=>{if(!K)return;let oe=K.split(`

`).filter(Ie=>Ie.trim().length>0);oe.length>1&&E({content:oe.join(`
---
`)})},[K,E]);(0,wt.useEffect)(()=>{a||(x(!1),C(!1))},[a]);let ce=i5(a,m,f,z,R),we=r==="offline"||o.isMissing===!0,_e=ln(n,p,l),Oe=we?null:s5(f,r,!!_e),Ct=n==="video"?"video":n==="audio"?"audio":"square";return(0,ze.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:H},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[!R&&(w||a)&&(n==="text"||z==="import"&&!_e&&!we)&&(0,ze.jsx)(vM,{materialType:n,nodeKind:z,selected:a,onOpenResourcePicker:()=>{B.fillImportNode()},onStartTextEdit:()=>C(!0),onCopyText:de,onSplitText:re}),(0,ze.jsx)(Sr,{side:"left",nodeHovered:w}),(0,ze.jsx)(gd,{label:i,materialType:z==="import"?"import_asset":n,onLabelChange:oe=>E({label:oe}),trailing:(0,ze.jsx)(gg,{executionStatus:f,status:r})}),(0,ze.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:H,height:N,position:"relative"},onDragOver:q,onDragLeave:J,onDrop:ne,children:[z==="import"&&!!_e&&!we&&(0,ze.jsx)("button",{type:"button",className:"wf-material-node__replace-btn nodrag nopan",onClick:oe=>{oe.stopPropagation(),B.fillImportNode()},title:O("node.replace"),children:O("node.replace")}),a&&(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ze.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:K||v?(0,ze.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${v?" nodrag":""}`,readOnly:!v,value:K,placeholder:O("node.textPlaceholder"),autoFocus:v,onMouseDown:oe=>{v||oe.preventDefault()},onDoubleClick:oe=>{oe.stopPropagation(),C(!0),oe.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:oe=>E({content:oe.target.value,status:oe.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ze.jsx)(hg,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:$})}),n!=="text"&&we&&(0,ze.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,ze.jsx)(Ss,{size:22,className:"wf-media-offline__icon"}),(0,ze.jsx)("div",{className:"wf-media-offline__title",children:O("node.offline")}),(0,ze.jsx)("div",{className:"wf-media-offline__hint",children:O("node.offlineHint")}),(0,ze.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{B.relinkLocalFile(n)},children:O("node.relink")})]}),n!=="text"&&!we&&(Oe?(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(Qc,{status:Oe,loadingAspectRatio:Ct,errorMessage:c??d,taskId:o.taskId,onRetry:A,children:_e?(0,ze.jsx)(wM,{materialType:n,mediaAssets:p,mediaUrl:l,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:M}):(0,ze.jsx)(hg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:$})})}):(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(hg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:$})})),n==="text"&&(d||c)&&(0,ze.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ce&&(0,ze.jsx)(LM,{onClose:()=>x(!0),children:(0,ze.jsx)(zM,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:E,onGenerate:A,execBusy:T,onOpenResourcePicker:z==="import"?()=>{B.fillImportNode()}:()=>B.openPicker("canvas")})}),(0,ze.jsx)(Sr,{side:"right",nodeHovered:w,options:j,onSelect:F}),(0,ze.jsx)(xg,{open:B.open,nodeId:e,initialTab:B.initialTab,onCancel:B.closePicker,onCommit:B.commit})]})},FM=(0,wt.memo)(VO);var UM={type:"material",component:FM,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Fc("text",{status:"empty",nodeWidth:On("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var xd=I(Q(),1);var aw=50;function zs(e){return JSON.parse(JSON.stringify(e))}var GO={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Ea=nd((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,zs(o)].slice(-aw),redoStack:[]}};return{document:GO,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:zs(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let s=o.slice(0,-1);e({document:zs(i),undoStack:s,redoStack:[...r,zs(n)].slice(-aw)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let s=o.slice(0,-1);e({document:zs(i),redoStack:s,undoStack:[...r,zs(n)].slice(-aw)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),s=i.rows[o];if(!s)return;let l=a(i),u=[...i.rows],d={...s,cells:[...s.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...l})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(s=>s.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((s,l)=>l!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),s=a(i),l={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,l],rows:u},...s})},updateColumn:(o,n,r)=>{let{document:i}=t(),s=i.columns[o];if(!s)return;let l=a(i),u=[...i.columns];u[o]={...s,title:n,type:r},e({document:{...i,columns:u},...l})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((l,u)=>u!==o),s=n.rows.map(l=>({...l,cells:l.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:s},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),s=[...n.columns];s[o]={...r,visible:!r.visible},e({document:{...n,columns:s},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let s=a(r),l=[...r.columns],[u]=l.splice(o,1);u&&l.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:l,rows:d},...s})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:zs(o),undoStack:[],redoStack:[]})}});var be=I(X(),1),qM=380,jO=280,VM=(0,xd.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Ea(),[i,s]=(0,xd.useState)(!1),{zoom:l}=La(),u=(0,xd.useMemo)(()=>Ma(l),[l]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C",g=!sd()&&(i||a);return(0,be.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:qM},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[g&&(0,be.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,be.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,be.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:w=>{w.stopPropagation(),r()},children:[(0,be.jsx)(pt,{size:14}),(0,be.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,be.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:w=>{w.stopPropagation(),n()},children:[(0,be.jsx)(En,{size:13}),(0,be.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,be.jsx)(Sr,{side:"left",nodeHovered:i}),(0,be.jsx)(gd,{label:c,materialType:"table"}),(0,be.jsxs)("div",{className:"wf-material-node__card",style:{width:qM,height:jO},onDoubleClick:()=>n(),children:[a&&(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,be.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,be.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,be.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,be.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,be.jsx)(Lo,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,be.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,be.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:w=>w.stopPropagation(),children:[(0,be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,be.jsx)(pt,{size:14,className:"wf-node-empty__pill-icon"}),(0,be.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,be.jsx)(En,{size:13,className:"wf-node-empty__pill-icon"}),(0,be.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,be.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,be.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,be.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,be.jsx)(mc,{size:14}),(0,be.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,be.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,be.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((w,y)=>{let h=w.cells[0],b=typeof h=="string"&&h?h:typeof h=="number"?String(h):Array.isArray(h)&&h.length>0?`\u{1F4CE} \u9644\u4EF6 (${h.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,be.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,be.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:b}),(0,be.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,be.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,be.jsx)(Sr,{side:"right",nodeHovered:i})]})});var GM={type:"table",component:VM,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var _r=I(Q(),1);var so=I(Q(),1);var Eo=I(X(),1),XO=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:s,nodeHeight:l,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:w,onLeftHandleSelect:y,onFileDrop:h,onFilesDrop:b,onDragOver:m,onDragLeave:x,onDrop:v,onMouseEnter:C,onMouseLeave:S,onCardClick:k,onCardDoubleClick:_,renderFloatingPill:T,renderHeader:R,children:H,renderConfigPanel:U})=>{let[L,N]=(0,so.useState)(!1),[E,M]=(0,so.useState)(!1),A=sd(),{zoom:O}=La(),D=(0,so.useMemo)(()=>Ma(O),[O]),B=(0,so.useMemo)(()=>({inverseScale:D,hovered:L,selected:t&&!A,isMultiSelected:A}),[D,L,t,A]),z=(0,so.useCallback)(ne=>{N(!0),C?.(ne)},[C]),j=(0,so.useCallback)(ne=>{N(!1),S?.(ne)},[S]),F=(0,so.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!0),m?.(ne)},[m]),K=(0,so.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1),x?.(ne)},[x]),$=(0,so.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1);let de=ne.dataTransfer.files;de&&de.length>0&&(b?.(de),de[0]&&h?.(de[0])),v?.(ne)},[v,h,b]),ee=A?null:typeof T=="function"?T(B):T,q=typeof R=="function"?R(B):R,J=A?null:typeof U=="function"?U(B):U;return(0,Eo.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:s,...n},onMouseEnter:z,onMouseLeave:j,"data-node-id":e,children:[ee,u&&(0,Eo.jsx)(Sr,{side:"left",nodeHovered:L,variant:f,options:w,onSelect:y}),q,(0,Eo.jsxs)("div",{className:`wf-material-node__card ${E?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:s,height:l,...r},"data-node-type":i,onClick:k,onDoubleClick:_,onDragOver:F,onDragLeave:K,onDrop:$,children:[t&&(0,Eo.jsxs)(Eo.Fragment,{children:[(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),H]}),J,d&&(0,Eo.jsx)(Sr,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},jM=(0,so.memo)(XO);var Os=I(Q(),1);var Lr=I(X(),1),WO=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=La(),s=(0,Os.useMemo)(()=>Ma(i),[i]),l=a??s,u=d=>d?Os.default.isValidElement(d)?d:(0,Lr.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,Lr.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*l),transform:`translate(-50%, -100%) scale(${l})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,Lr.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,Lr.jsxs)(Os.default.Fragment,{children:[f>0&&(0,Lr.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Lr.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,Lr.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},XM=(0,Os.memo)(WO);var wg=I(Q(),1);var lo=I(X(),1),YO=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:s="",style:l})=>{let u=se(),d=(f,c,p)=>f?wg.default.isValidElement(f)?f:(0,lo.jsx)(f,{size:c,className:p}):null;return(0,lo.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${s}`.trim(),style:l,children:[(e||t)&&(0,lo.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,lo.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,lo.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,lo.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,lo.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,lo.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,lo.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,lo.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,lo.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,lo.jsx)("span",{children:f.label})]},f.key)})}),i]})},WM=(0,wg.memo)(YO);var Hs=I(Q(),1);function YM(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function KM(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function ZM(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function $M(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function QM(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var rt=I(X(),1),KO=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:i,onDownload:s})=>{let l=se(),[u,d]=(0,Hs.useState)(!1),f=(0,Hs.useCallback)(g=>{g.stopPropagation(),d(w=>!w)},[]),c=(0,Hs.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,rt.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,rt.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,rt.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":l("clip.openEditorTitle"),children:[t?(0,rt.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,rt.jsx)("span",{className:"wf-vc-result__fallback",children:(0,rt.jsx)(ia,{size:36,strokeWidth:1.5})}),(0,rt.jsx)("span",{className:"wf-vc-result__play",children:(0,rt.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,rt.jsx)(Ua,{size:22,fill:"currentColor"})})})]});return(0,rt.jsxs)("div",{className:"wf-vc-result",children:[p,(0,rt.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,rt.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,rt.jsx)("dt",{children:l("clip.duration")}),(0,rt.jsx)("dd",{className:"wf-vc-result__mono",children:ZM(a)})]}),(0,rt.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,rt.jsx)("dt",{children:l("clip.resolution")}),(0,rt.jsx)("dd",{className:"wf-vc-result__mono",children:$M(o,n)})]})]}),(0,rt.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,rt.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:g=>{g.stopPropagation(),i?.()},children:[(0,rt.jsx)(ys,{size:14}),(0,rt.jsx)("span",{children:l("clip.reEdit")})]}),(0,rt.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:g=>{g.stopPropagation(),s?.()},disabled:!e,title:e?l("clip.downloadTitle"):void 0,children:[(0,rt.jsx)(ms,{size:14}),(0,rt.jsx)("span",{children:l("clip.download")})]})]})]})},JM=(0,Hs.memo)(KO);function ZO(e,t){return e.find(a=>a.type==="material"&&a.data?.realPath===t)}function $O(e){return e.sourceHandle==="out"&&e.targetHandle==="in"}function QO(e,t,a){return e.filter(o=>o.source===t&&o.target===a)}function eN(e,t){return{id:`edge_${e}_${t}`,source:e,target:t,sourceHandle:"out",targetHandle:"in"}}function ow(e){let t=e.output.videoPath;if(!t)return null;let a=ZO(e.currentNodes,t);if(a){let r=QO(e.currentEdges,e.sourceNodeId,a.id);if(r.find($O))return null;let s=r.map(l=>l.id).filter(l=>typeof l=="string"&&l.length>0);return{addNodes:[],addEdges:[eN(e.sourceNodeId,a.id)],removeEdgeIds:s}}if(e.createIfMissing===!1)return null;let o=e.createNodeId?.()??`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;return{addNodes:[{id:o,type:"material",position:{x:e.sourcePosition.x+e.nodeWidth+80,y:e.sourcePosition.y},selected:!0,data:{materialType:"video",label:`${e.sourceLabel}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:t,mediaUrl:t,thumbnailUrl:e.output.thumbnailPath,duration:e.output.durationMs?Math.round(e.output.durationMs/1e3):void 0,size:{width:e.output.width||1920,height:e.output.height||1080}}}],addEdges:[eN(e.sourceNodeId,o)],removeEdgeIds:[]}}var tN="omnimux-clip-open",nw="omnimux-clip-save",rw="omnimux-clip-close",iw="omnimux-clip-progress";function aN(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function oN(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function nN(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var Xa=I(X(),1),sw=350,JO=440;function rN(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function To(e){return typeof e=="string"&&e.trim()?e:void 0}function lw(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function e7(e){return To(e.mediaUrl)||To(e.outputVideoUrl)||To(e.path)||To(e.url)||To(e.real_path)||To(e.filePath)}function t7(e){let{nodes:t,edges:a}=ae.getState(),o=[],n=[],r=[],i=[];for(let s of a){if(s.target!==e)continue;let l=t.find(g=>g.id===s.source);if(!l)continue;let u=rN(l.data)?l.data:{},d=To(u.materialType)||(l.type==="material"?void 0:l.type),f=To(u.label)||To(u.title)||l.id,c=e7(u)||"",p=lw(u.duration)??lw(u.outputDurationMs)??lw(u.durationMs);if(d==="video"||l.type==="video_composition"){let g=c||To(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=To(u.content)||To(u.generatedContent)||To(u.prompt);g&&i.push({text:g,startTimeMs:i.reduce((w,y)=>w+y.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function a7(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function o7(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var n7=({id:e,data:t,selected:a})=>{let o=rN(t)?t:{},n=ae(w=>w.setNodes),r=ae(w=>w.applyCanvasInputMutation),i=se(),s=o.status??"idle",l=!!o.outputVideoUrl,u=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||i("node.type.video_composition"),f=KM(s,l),c=(0,_r.useCallback)(w=>{n(y=>y.map(h=>h.id===e?{...h,data:{...h.data,...w}}:h))},[e,n]);(0,_r.useEffect)(()=>{if(typeof window>"u")return;let w=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!aN(m)||m.nodeId&&m.nodeId!==e)return;let x=m.output;if(c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:x?.videoPath,thumbnailUrl:x?.thumbnailPath,outputThumbnailUrl:x?.thumbnailPath,outputDurationMs:x?.durationMs,outputWidth:x?.width,outputHeight:x?.height,status:x?.videoPath?"completed":"idle",renderProgress:x?.videoPath?100:void 0,errorMessage:void 0}),x?.videoPath&&m.createDownstreamNode){let v=ae.getState(),C=v.nodes.find(k=>k.id===e),S=ow({sourceNodeId:e,sourcePosition:C?.position||{x:0,y:0},sourceLabel:o.title||o.label||i("node.type.video_composition"),output:x,currentNodes:v.nodes,currentEdges:v.edges,nodeWidth:sw});S&&(r({addNodes:S.addNodes.map(k=>({...k,selected:!0})),addEdges:S.addEdges,removeEdgeIds:S.removeEdgeIds}),Y.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03"))}},y=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!nN(m)||m.nodeId&&m.nodeId!==e)return;let x=m.status??"rendering";c({status:x,renderProgress:m.renderProgress})},h=b=>{let m=b instanceof CustomEvent?b.detail:void 0;oN(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:l?"completed":"idle"}))};return window.addEventListener(nw,w),window.addEventListener(iw,y),window.addEventListener(rw,h),()=>{window.removeEventListener(nw,w),window.removeEventListener(iw,y),window.removeEventListener(rw,h)}},[r,l,e,o.projectId,o.status,i,c]),(0,_r.useEffect)(()=>{if(typeof window>"u"||!o.outputVideoUrl)return;let w=ae.getState(),y=w.nodes.find(b=>b.id===e),h=ow({sourceNodeId:e,sourcePosition:y?.position||{x:0,y:0},sourceLabel:o.title||o.label||i("node.type.video_composition"),output:{videoPath:o.outputVideoUrl,thumbnailPath:o.thumbnailUrl||o.outputThumbnailUrl,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight},currentNodes:w.nodes,currentEdges:w.edges,nodeWidth:sw,createIfMissing:!1});h&&r({addEdges:h.addEdges,removeEdgeIds:h.removeEdgeIds})},[r,e,o.label,o.outputDurationMs,o.outputHeight,o.outputThumbnailUrl,o.outputVideoUrl,o.outputWidth,o.thumbnailUrl,o.title,i]);let p=(0,_r.useCallback)(()=>{if(typeof window>"u")return;let w=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,y={source:"canvas",nodeId:e,nodeTitle:d,projectId:w,draftSchema:o.schema,upstreamInputs:t7(e)};c({status:"editing",projectId:w}),window.dispatchEvent(new CustomEvent(tN,{detail:y,bubbles:!0})),window.setTimeout(()=>{a7()||Y.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,d,c]),g=(0,_r.useCallback)(()=>{let w=o.outputVideoUrl;if(!w)return;let y=document.createElement("a");y.href=w,y.download=`${QM(d)}.mp4`,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove()},[o.outputVideoUrl,d]);return(0,Xa.jsxs)(jM,{id:e,selected:a,nodeWidth:sw,nodeHeight:JO,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:w=>{w.stopPropagation(),p()},renderFloatingPill:({hovered:w,selected:y})=>{if(!w&&!y||!l)return null;let h=[{key:"download_video",label:i("clip.download"),icon:ms,onClick:g,title:i("clip.downloadTitle")}];return(0,Xa.jsx)(XM,{actions:h})},renderHeader:()=>(0,Xa.jsx)(gd,{label:d,materialType:"video_composition",customIcon:(0,Xa.jsx)(ia,{size:14}),onLabelChange:w=>c({label:w,title:w}),trailing:(0,Xa.jsx)(gg,{status:YM(s)})}),children:[f==="result"&&(0,Xa.jsx)(JM,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:u,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:p,onDownload:g}),f==="rendering"&&(0,Xa.jsx)("div",{className:"wf-material-node__media",children:(0,Xa.jsx)(Qc,{status:"generating",loadingAspectRatio:"video",children:null})}),f==="error"&&(0,Xa.jsx)("div",{className:"wf-material-node__media",children:(0,Xa.jsx)(Qc,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:p,children:null})}),f==="launcher"&&(0,Xa.jsx)(WM,{mainIcon:(0,Xa.jsx)(ia,{size:36,strokeWidth:1.5}),secondaryIcon:(0,Xa.jsx)(ba,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:ys,onClick:()=>p()}]})]})},iN={type:"video_composition",component:(0,_r.memo)(n7),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>o7(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var gn=I(Q(),1);var Yo=I(Q(),1);var Ae=I(X(),1),r7=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#64748b"],dw=(0,Yo.memo)(({groupColor:e,onExecuteGroup:t,onCreateWorkflow:a,onUngroup:o,onLayout:n,onColorChange:r})=>{let i=se(),{zoom:s}=La(),l=(0,Yo.useMemo)(()=>Ma(s),[s]),[u,d]=(0,Yo.useState)(!1),[f,c]=(0,Yo.useState)(!1),p=(0,Yo.useRef)(null),g=(0,Yo.useRef)(null);return(0,Yo.useEffect)(()=>{function w(y){p.current&&!p.current.contains(y.target)&&d(!1),g.current&&!g.current.contains(y.target)&&c(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),(0,Ae.jsx)("div",{className:"wf-floating-top-pill wf-group-topbar nodrag nopan nowheel",onPointerDown:ge,onMouseDown:ge,style:{top:-(12*l),transform:`translate(0, -100%) scale(${l})`,transformOrigin:"bottom left",left:12,"--wf-group-accent":e},children:(0,Ae.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Ae.jsxs)("div",{style:{position:"relative"},ref:g,children:[(0,Ae.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>c(w=>!w),title:i("group.colorTitle"),children:(0,Ae.jsx)("div",{className:"wf-group-topbar__swatch",style:{backgroundColor:e}})}),f&&(0,Ae.jsx)("div",{className:"wf-group-topbar__palette",children:r7.map(w=>(0,Ae.jsx)("button",{type:"button",className:`wf-group-topbar__palette-dot ${e===w?"is-active":""}`,style:{backgroundColor:w},onClick:()=>{r(w),c(!1)}},w))})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("div",{style:{position:"relative"},ref:p,children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>d(w=>!w),title:i("group.layoutTitle"),children:[(0,Ae.jsx)(Fa,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.layout")}),(0,Ae.jsx)(Yt,{size:12,className:"wf-floating-top-pill__icon"})]}),u&&(0,Ae.jsxs)("div",{className:"wf-group-topbar__menu",style:{left:0,right:"auto"},children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("horizontal"),d(!1)},children:[(0,Ae.jsx)(ds,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("vertical"),d(!1)},children:[(0,Ae.jsx)(us,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutVertical")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("grid"),d(!1)},children:[(0,Ae.jsx)(ko,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutGrid")})]})]})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn wf-floating-top-pill__btn--success",onClick:t,title:i("group.executeTitle"),children:[(0,Ae.jsx)(Ua,{size:12,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}),(0,Ae.jsx)("span",{children:i("group.execute")})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,title:i("group.createWorkflowTitle"),children:[(0,Ae.jsx)(hr,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.createWorkflow")})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:i("group.ungroupTitle"),children:[(0,Ae.jsx)(Pc,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.ungroup")})]})]})})});dw.displayName="GroupTopBar";var yg=I(Q(),1);var uw=I(X(),1),i7=[{direction:"nw",kind:"corner"},{direction:"ne",kind:"corner"},{direction:"se",kind:"corner"},{direction:"sw",kind:"corner"},{direction:"n",kind:"edge"},{direction:"s",kind:"edge"},{direction:"w",kind:"edge"},{direction:"e",kind:"edge"}],cw=(0,yg.memo)(({bounds:e,minAllowed:t,color:a,zoom:o=1,onResize:n})=>{let r=(0,yg.useCallback)((i,s)=>{s.stopPropagation(),s.preventDefault();let l=s.clientX,u=s.clientY,d={...e},f=o,c=g=>{let w=d5(g.clientX-l,g.clientY-u,f),y=l5(i,d,w,t);n(y)},p=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",p)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",p)},[e,t,n,o]);return(0,uw.jsx)("div",{className:"wf-group-resize-handles nodrag nopan",onPointerDown:ge,onMouseDown:ge,style:{"--wf-group-accent":a||"var(--wb-accent)"},children:i7.map(i=>(0,uw.jsx)("div",{className:`wf-group-handle wf-group-handle--${i.kind} wf-group-handle--${i.direction}`,onPointerDown:s=>r(i.direction,s),title:i.kind==="corner"?"\u7F29\u653E":i.direction==="n"||i.direction==="s"?"\u5782\u76F4\u8C03\u6574":"\u6C34\u5E73\u8C03\u6574"},i.direction))})});cw.displayName="GroupResizeHandles";var $t=I(Q(),1);var Ii=I(X(),1),fw=(0,$t.memo)(({groupId:e,title:t,isCollapsed:a,selected:o,color:n,onToggleCollapse:r,onRename:i,onSelect:s})=>{let l=se(),{zoom:u}=La(),d=(0,$t.useMemo)(()=>Ma(u),[u]),[f,c]=(0,$t.useState)(!1),[p,g]=(0,$t.useState)(t),w=(0,$t.useRef)(null);(0,$t.useEffect)(()=>{f&&w.current&&(w.current.focus(),w.current.select())},[f]),(0,$t.useEffect)(()=>{f||g(t)},[t,f]);let y=(0,$t.useCallback)(C=>{C.stopPropagation(),c(!0),g(t)},[t]),h=(0,$t.useCallback)(()=>{let S=p.trim()||t||l("group.defaultTitle");c(!1),S!==t&&i(S)},[p,t,i,l]),b=(0,$t.useCallback)(()=>{c(!1),g(t)},[t]),m=(0,$t.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),h()):C.key==="Escape"&&(C.preventDefault(),b())},[h,b]),x=(0,$t.useCallback)(C=>{C.stopPropagation(),s()},[s]),v=(0,$t.useCallback)(C=>{C.stopPropagation(),r()},[r]);return(0,Ii.jsxs)("div",{className:`wf-group-header-pill nodrag nopan ${o?"wf-group-header-pill--selected":""}`,onClick:x,onPointerDown:ge,onMouseDown:ge,style:{"--wf-group-accent":n||"var(--wb-accent)",transformOrigin:"top left"},title:l(a?"group.expand":"group.collapse"),children:[(0,Ii.jsx)("button",{type:"button",className:"wf-group-header-pill__toggle",onClick:v,title:l(a?"group.expand":"group.collapse"),children:a?(0,Ii.jsx)(ps,{size:14}):(0,Ii.jsx)(Yt,{size:14})}),f?(0,Ii.jsx)("input",{ref:w,type:"text",value:p,onChange:C=>g(C.target.value),onBlur:h,onKeyDown:m,className:"wf-group-header-pill__input nodrag nopan",style:{width:`${Math.max(60,p.length*8+16)}px`},maxLength:40}):(0,Ii.jsx)("span",{className:"wf-group-header-pill__title",onDoubleClick:y,title:l("group.renameHint"),children:t})]})});fw.displayName="GroupHeader";var wd=I(X(),1),pw=(0,gn.memo)(({id:e,data:t,selected:a,width:o,height:n})=>{let r=se(),i=t,s=i.title||r("group.defaultTitle"),l=i.color||"var(--wb-accent)",u=!!i.isCollapsed,d=i.minWidth||220,f=i.minHeight||44,c=typeof o=="number"&&o>0?o:400,p=typeof n=="number"&&n>0?n:300,g=ae(N=>N.ungroup),w=ae(N=>N.toggleGroupCollapse),y=ae(N=>N.resizeGroup),h=ae(N=>N.setNodes),b=ae(N=>N.setSelectedElement),m=ae(N=>N.nodes),x=ae(N=>N.nodes.find(E=>E.id===e)?.position||{x:0,y:0}),{getViewport:v}=ka(),C=v()?.zoom||1,S=(0,gn.useCallback)(N=>{let E=N.trim()||r("group.defaultTitle");h(M=>M.map(A=>A.id===e?{...A,data:{...A.data,title:E}}:A))},[e,h,r]),k=(0,gn.useCallback)(()=>{b("node",e),h(N=>N.map(E=>({...E,selected:E.id===e})))},[e,b,h]),_=(0,gn.useCallback)(N=>{h(E=>E.map(M=>M.id===e?{...M,data:{...M.data,color:N}}:M))},[e,h]),T=(0,gn.useCallback)(N=>{y(e,N)},[e,y]),R=(0,gn.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:execute-group",{detail:{groupId:e,nodeIds:id(m,e)}}))},[e,m]),H=(0,gn.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:create-subworkflow",{detail:{groupId:e,groupTitle:s,nodeIds:id(m,e)}}))},[e,s,m]),U=(0,gn.useCallback)(()=>{g(e)},[e,g]),L=(0,gn.useCallback)(N=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:layout-group",{detail:{groupId:e,layoutType:N}}))},[e]);return(0,wd.jsxs)("div",{className:`wf-group-node ${a?"wf-group-node--selected":""} ${u?"wf-group-node--collapsed":""}`,style:{width:`${c}px`,height:`${p}px`,"--wf-group-accent":l},children:[a&&(0,wd.jsx)(dw,{groupId:e,groupTitle:s,groupColor:l,onExecuteGroup:R,onCreateWorkflow:H,onUngroup:U,onLayout:L,onColorChange:_}),a&&!u&&(0,wd.jsx)(cw,{bounds:{x:x.x,y:x.y,width:c,height:p},minAllowed:{minWidth:d,minHeight:f},color:l,zoom:C,onResize:T}),(0,wd.jsx)(fw,{groupId:e,title:s,isCollapsed:u,selected:a,color:l,onToggleCollapse:()=>w(e),onRename:S,onSelect:k})]})});pw.displayName="GroupNode";var sN={type:"group",component:pw,ports:[],defaultData:()=>({title:"",color:"#3b82f6",padding:32,minWidth:300,minHeight:200,nodeIds:[]})};var Mi=I(Q(),1);var yt=I(X(),1),mw=(0,Mi.memo)(({visible:e,selectedCount:t,position:a,onGroup:o,onCreateAsset:n,onLayout:r})=>{let i=se(),[s,l]=(0,Mi.useState)(!1),u=(0,Mi.useRef)(null);return(0,Mi.useEffect)(()=>{function d(f){u.current&&!u.current.contains(f.target)&&l(!1)}if(s)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[s]),!e||t<2?null:(0,yt.jsxs)("div",{className:"wf-floating-selection-bar nodrag nopan",onPointerDown:ge,onMouseDown:ge,style:{left:`${a.x}px`,top:`${a.y}px`},children:[(0,yt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:n,title:i("group.float.createAssetTitle"),children:[(0,yt.jsx)(ws,{size:15}),(0,yt.jsx)("span",{children:i("group.float.createAsset")})]}),(0,yt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn wf-floating-selection-bar__btn--accent",onClick:o,title:i("group.float.groupTitle"),children:[(0,yt.jsx)(hs,{size:15}),(0,yt.jsx)("span",{children:i("group.float.group")})]}),(0,yt.jsxs)("div",{style:{position:"relative"},ref:u,children:[(0,yt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:()=>l(d=>!d),title:i("group.float.layoutTitle"),children:[(0,yt.jsx)(Fa,{size:15}),(0,yt.jsx)("span",{children:i("group.layout")}),(0,yt.jsx)(Yt,{size:13})]}),s&&(0,yt.jsxs)("div",{className:"wf-floating-selection-bar__menu",children:[(0,yt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("horizontal"),l(!1)},children:[(0,yt.jsx)(ds,{size:14}),(0,yt.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,yt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("vertical"),l(!1)},children:[(0,yt.jsx)(us,{size:14}),(0,yt.jsx)("span",{children:i("group.layoutVertical")})]}),(0,yt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("grid"),l(!1)},children:[(0,yt.jsx)(ko,{size:14}),(0,yt.jsx)("span",{children:i("group.layoutGridCompact")})]})]})]})]})});mw.displayName="FloatingSelectionToolbar";var hn=I(Q(),1);function lN(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function yd(e){return typeof e=="string"?e.trim():""}function s7(e){let t=yd(e);if(!t||cd(t))return"";let a=vI(t);return a||(B0(t)&&!t.includes("/api/local-file")?t:"")}function dN(e){let t=[],a=new Set;for(let o of e){let n=yd(o.id),r=lN(o.data),i=[r.realPath,r.real_path,r.outputVideoUrl];if(Array.isArray(r.mediaAssets))for(let u of r.mediaAssets){let d=lN(u);i.push(d.path,d.real_path,d.url)}i.push(r.mediaUrl,r.previewUrl);let s="";for(let u of i)if(s=s7(u),s)break;if(!s||a.has(s))continue;a.add(s);let l=yd(r.originalName)||yd(r.title)||yd(r.label)||yd(r.name);t.push({real_path:s,nodeId:n||s,...l?{original_name:l}:{}})}return t}var et=I(X(),1),l7=[{value:"character",key:"asset.scope.character"},{value:"scene",key:"asset.scope.scene"},{value:"prop",key:"asset.scope.prop"},{value:"style",key:"asset.scope.style"},{value:"knowledge",key:"asset.scope.knowledge"},{value:"custom",key:"asset.scope.custom"}],gw=(0,hn.memo)(({isOpen:e,onClose:t,items:a})=>{let o=se(),[n,r]=(0,hn.useState)("character"),[i,s]=(0,hn.useState)(""),[l,u]=(0,hn.useState)(o("asset.modal.defaultTags")),[d,f]=(0,hn.useState)(!1),c=(0,hn.useMemo)(()=>dN(a.map(g=>({id:g.nodeId||g.id,data:{title:g.nodeTitle,label:g.nodeTitle,realPath:g.realPath,previewUrl:g.previewUrl,content:g.content,materialType:g.type}}))),[a]);if((0,hn.useEffect)(()=>{if(!e)return;let g=(a[0]?.nodeTitle||o("asset.modal.defaultName")).slice(0,40);s(g),r("character"),u(o("asset.modal.defaultTags")),f(!1)},[e,a,o]),!e)return null;let p=async g=>{if(g.preventDefault(),c.length===0){Y.error(o("asset.modal.noFiles"));return}let w=i.trim().slice(0,40);if(!w){Y.warning(o("asset.modal.nameRequired"));return}f(!0);try{let y=l.split(/[,，]/).map(v=>v.trim()).filter(Boolean),h=await fetch("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w,type:n,tags:y,files:c.map(v=>({real_path:v.real_path,original_name:v.original_name})),source:"workflow-canvas"})}),b=await h.json().catch(()=>({}));if(!h.ok)throw new Error(b.message||b.error||`HTTP ${h.status}`);let x=(b.asset||{}).name||w;Y.success(o("asset.modal.saved").replace("{name}",x)),t()}catch(y){Y.error(y instanceof Error?y.message:o("asset.modal.failed"))}finally{f(!1)}};return(0,et.jsx)(sn,{open:e,onCancel:t,title:o("asset.modal.title"),width:480,children:(0,et.jsxs)("form",{onSubmit:p,className:"wf-group-modal",children:[(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.name")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:i,onChange:g=>s(g.target.value),placeholder:a[0]?.nodeTitle||o("asset.modal.defaultName"),maxLength:40})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.category")}),(0,et.jsx)("div",{className:"wf-group-modal__scopes",children:l7.map(g=>(0,et.jsxs)("button",{type:"button",className:`wf-group-modal__scope ${n===g.value?"is-active":""}`,onClick:()=>r(g.value),children:[(0,et.jsx)(So,{size:14}),(0,et.jsx)("span",{children:o(g.key)})]},g.value))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.files").replace("{count}",String(c.length))}),(0,et.jsx)("div",{className:"wf-group-modal__list",children:c.length===0?(0,et.jsx)("div",{className:"wf-group-modal__empty",children:o("asset.modal.empty")}):c.map(g=>(0,et.jsx)("div",{className:"wf-group-modal__row",children:(0,et.jsx)("span",{children:g.original_name||g.nodeId})},g.real_path))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.tags")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:l,onChange:g=>u(g.target.value),placeholder:o("asset.modal.tagsPlaceholder")})]}),(0,et.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,et.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:o("asset.modal.cancel")}),(0,et.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:d||c.length===0,children:[(0,et.jsx)(ws,{size:14}),(0,et.jsx)("span",{children:o(d?"asset.modal.saving":"asset.modal.submit")})]})]})]})})});gw.displayName="BatchCreateAssetModal";var Ir=I(Q(),1);var Qt=I(X(),1),hw=(0,Ir.memo)(({isOpen:e,onClose:t,defaultTitle:a,nodeCount:o=0,onConfirm:n})=>{let r=se(),i=r("template.modal.defaultName"),[s,l]=(0,Ir.useState)(a||i),[u,d]=(0,Ir.useState)(""),[f,c]=(0,Ir.useState)(r("template.modal.defaultTags")),[p,g]=(0,Ir.useState)(!1);if((0,Ir.useEffect)(()=>{e&&(l((a||i).trim()||i),d(""),c(r("template.modal.defaultTags")),g(!1))},[e,a,i,r]),!e)return null;let w=async y=>{if(y.preventDefault(),!s.trim()){Y.warning(r("template.modal.nameRequired"));return}g(!0);try{let h=f.split(/[,，]/).map(b=>b.trim()).filter(Boolean);await n({name:s.trim(),description:u.trim(),tags:h}),Y.success(r("template.modal.saved").replace("{name}",s.trim())),t()}catch(h){Y.error(h instanceof Error?h.message:r("template.modal.failed"))}finally{g(!1)}};return(0,Qt.jsx)(sn,{open:e,onCancel:t,title:r("template.modal.title"),width:460,children:(0,Qt.jsxs)("form",{onSubmit:w,className:"wf-group-modal",children:[(0,Qt.jsxs)("div",{children:[(0,Qt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.name")}),(0,Qt.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:s,onChange:y=>l(y.target.value),placeholder:r("template.modal.namePlaceholder"),autoFocus:!0})]}),(0,Qt.jsxs)("div",{children:[(0,Qt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.description")}),(0,Qt.jsx)("textarea",{className:"nodrag nopan wf-group-modal__input",value:u,onChange:y=>d(y.target.value),placeholder:r("template.modal.descriptionPlaceholder"),rows:3})]}),(0,Qt.jsxs)("div",{children:[(0,Qt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.tags")}),(0,Qt.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:f,onChange:y=>c(y.target.value),placeholder:r("template.modal.tagsPlaceholder")})]}),(0,Qt.jsx)("div",{className:"wf-group-modal__hint",children:r("template.modal.hint").replace("{count}",String(o))}),(0,Qt.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,Qt.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:r("template.modal.cancel")}),(0,Qt.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:p||!s.trim(),children:[(0,Qt.jsx)(hr,{size:14}),(0,Qt.jsx)("span",{children:r(p?"template.modal.saving":"template.modal.submit")})]})]})]})})});hw.displayName="CreateWorkflowModal";function uN(){return Kt(Et.templates)}function cN(e){return Kt(Et.templates,{method:"POST",body:e})}function fN(e){return Kt(Et.template(encodeURIComponent(e)))}function tf(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function pN(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function bw(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)bw(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];cd(o)?delete t[a]:o&&typeof o=="object"&&bw(o)}}function d7(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=un(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=pN(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(cd(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=pN(o);return n?(cd(n.url)&&(typeof n.path=="string"&&n.path?n.url=un(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}bw(e)}function af(e){return e.map(t=>{let a=t,o=tf(a.data);delete o.__catalog,d7(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),a.extent==="parent"&&(n.extent="parent"),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=tf(a.style)),n})}function u7(e){let t=e,a=tf(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function of(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=tf(a.data)),a.style&&typeof a.style=="object"&&(o.style=tf(a.style)),o})}function bn(e,t){return JSON.stringify({nodes:af(e).map(u7),edges:of(t)})}function xw(e){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function mN(e,t){let a=Array.isArray(e.nodes)?e.nodes:[],o=Array.isArray(e.edges)?e.edges:[],n=rd(a.map(l=>({position:l.position||{x:0,y:0},width:l.width,height:l.height})),0),r=new Map;for(let l of a)typeof l.id=="string"&&r.set(l.id,xw(l.id));let i=a.map(l=>{let{parentId:u,extent:d,selected:f,...c}=l;return{...c,id:r.get(l.id)||xw(String(l.id||"node")),selected:!1,position:{x:t.x+((l.position?.x??0)-n.x),y:t.y+((l.position?.y??0)-n.y)}}}),s=o.map(l=>{let u=r.get(l.source),d=r.get(l.target);return!u||!d?null:{...l,id:xw(String(l.id||`${u}_${d}`)),source:u,target:d}}).filter(Boolean);return{nodes:i,edges:s}}var CN=I(Q(),1),SN=I(ta(),1);var vg=I(Q(),1),gN=I(ta(),1);var je=I(X(),1),ww=e=>e==="text"?(0,je.jsx)(yr,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,je.jsx)(yc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,je.jsx)(Mc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,je.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),hN=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Ea(),[i,s]=(0,vg.useState)(null);(0,vg.useEffect)(()=>{if(o===null){s(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let l=o!==null?e.columns[o]:null;return(0,je.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,je.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,je.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,je.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,je.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,je.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,je.jsx)(xc,{size:14})}),ww(u.type),(0,je.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,je.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,je.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,je.jsx)(pc,{size:15}):(0,je.jsx)(fc,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,je.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,b=Math.max(8,c.right-p);s({top:h,left:b}),n(d)}},children:(0,je.jsx)(hi,{size:15})})]})]},u.id))}),(0,je.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,je.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,je.jsx)(pt,{size:14}),(0,je.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&l&&i&&typeof document<"u"&&(0,gN.createPortal)((0,je.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,je.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,je.jsx)(Tn,{size:13}),(0,je.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,je.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=l;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,je.jsx)(_o,{size:13}),(0,je.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var Ca=I(X(),1),c7=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],bN=()=>{let{document:e,setFilterConditions:t}=Ea(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((s,l)=>({value:l,label:s.title||`\u5217 ${l+1}`})),n=(s,l)=>{let u=a.map((d,f)=>f===s?{...d,...l}:d);t(u)},r=()=>{let s=[...a,{columnIndex:0,op:"equals",value:""}];t(s)},i=s=>{let l=a.filter((u,d)=>d!==s);t(l.length===0?[{columnIndex:0,op:"equals",value:""}]:l)};return(0,Ca.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:s=>s.stopPropagation(),children:[(0,Ca.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,Ca.jsxs)("div",{className:"wf-filter-body",children:[a.map((s,l)=>(0,Ca.jsxs)("div",{className:"wf-filter-row",children:[(0,Ca.jsx)("div",{style:{width:130,flexShrink:0},children:(0,Ca.jsx)(ro,{value:s.columnIndex,options:o,onChange:u=>n(l,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ca.jsx)("div",{style:{width:110,flexShrink:0},children:(0,Ca.jsx)(ro,{value:s.op,options:c7,onChange:u=>n(l,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ca.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:s.value??"",disabled:s.op==="empty"||s.op==="notEmpty",onChange:u=>n(l,{value:u.target.value})}),(0,Ca.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(l),children:(0,Ca.jsx)(xa,{size:15})})]},l)),(0,Ca.jsx)("div",{style:{paddingTop:4},children:(0,Ca.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,Ca.jsx)(pt,{size:14}),(0,Ca.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Mr=I(X(),1),f7=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],xN=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Ea(),o=e.rowHeight||"low";return(0,Mr.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Mr.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Mr.jsx)("div",{style:{padding:"6px"},children:f7.map(n=>{let r=o===n.id;return(0,Mr.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Mr.jsx)("span",{children:n.label}),r&&(0,Mr.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Mr.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var qe=I(X(),1),wN=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:s,closeStage:l}=Ea(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,qe.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,qe.jsx)("div",{className:"wf-stage-topbar__left",children:(0,qe.jsxs)("div",{className:"wf-stage-title-group",children:[(0,qe.jsx)(Lo,{size:16,className:"wf-stage-title-icon"}),(0,qe.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,qe.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,qe.jsx)(Ac,{size:15}),(0,qe.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,qe.jsx)(hN,{})]}),(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,qe.jsx)(bi,{size:15}),(0,qe.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,qe.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,qe.jsx)(bN,{})]}),(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,qe.jsx)(yi,{size:15}),(0,qe.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,qe.jsx)(xN,{})]}),(0,qe.jsx)("div",{className:"wf-stage-divider"}),(0,qe.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,qe.jsx)(Rc,{size:16})}),(0,qe.jsx)("button",{type:"button",disabled:!s(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,qe.jsx)(Tc,{size:16})}),(0,qe.jsx)("div",{className:"wf-stage-divider"}),(0,qe.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),l()},children:(0,qe.jsx)(xa,{size:16})})]})]})};var De=I(X(),1),yN=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Ea(),n=e.columns.filter(s=>s.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,De.jsx)("div",{className:"wf-grid-container",children:(0,De.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,De.jsxs)("table",{className:"wf-grid-table",children:[(0,De.jsxs)("colgroup",{children:[(0,De.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(s=>(0,De.jsx)("col",{style:{width:s.width||220,minWidth:120}},s.id)),(0,De.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,De.jsx)("col",{style:{width:"auto"}})]}),(0,De.jsx)("thead",{children:(0,De.jsxs)("tr",{children:[(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,De.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(s=>(0,De.jsx)("th",{className:"wf-grid-th",children:(0,De.jsxs)("div",{className:"wf-grid-th-content",children:[(0,De.jsx)("span",{className:"wf-grid-th-icon",children:ww(s.type)}),(0,De.jsx)("span",{className:"wf-grid-th-title",children:s.title})]})},s.id)),(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,De.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,De.jsx)(pt,{size:15})})}),(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,De.jsx)("tbody",{children:e.rows.map((s,l)=>(0,De.jsxs)("tr",{className:i,children:[(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,De.jsx)("span",{children:l+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=s.cells[d];return(0,De.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,De.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((w,y)=>(0,De.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},y)),g.length===0&&(0,De.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,De.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(l,d,g.target.value)})})()},u.id)}),(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},l))})]}),(0,De.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,De.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,De.jsx)(pt,{size:14}),(0,De.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Bs=I(Q(),1);var uo=I(X(),1),p7=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],vN=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Ea(),[n,r]=(0,Bs.useState)(e.initialTitle),[i,s]=(0,Bs.useState)(e.initialType),l=(0,Bs.useRef)(null);(0,Bs.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),s(e.initialType),setTimeout(()=>l.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,uo.jsx)(sn,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,uo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,uo.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,uo.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,uo.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,uo.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,uo.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,uo.jsx)("input",{ref:l,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,uo.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,uo.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,uo.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,uo.jsx)(ro,{value:i,options:p7,onChange:d=>s(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var vd=I(X(),1),kN=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Ea();return(0,CN.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,SN.createPortal)((0,vd.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,vd.jsx)(wN,{}),(0,vd.jsx)(yN,{}),(0,vd.jsx)(vN,{})]}),document.body)};var mt=I(X(),1),yw=class extends Ce.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,mt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,mt.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,mt.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,mt.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};$c(UM);$c(GM);$c(iN);$c(sN);var m7=fM(),g7={default:T0,animated:T0},LN={maxZoom:1},h7={x:0,y:0,zoom:1},b7=[1,2],x7=96,w7=({catalog:e,workspaceId:t,onExecuteNodeIds:a,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:s})=>{let l=se(),{screenToFlowPosition:u,fitView:d,zoomTo:f,setCenter:c}=ka(),p=ka(),{nodes:g,edges:w,onNodesChange:y,onEdgesChange:h}=m5(),b=ae(Z=>Z.applyCanvasInputMutation),m=ae(Z=>Z.setNodes),x=ae(Z=>Z.setSelectedElement),v=ae(Z=>Z.groupNodes),C=ae(Z=>Z.ungroup),S=ae(Z=>Z.pushHistory),k=ae(Z=>Z.undo),_=ae(Z=>Z.redo),T=g5(),R=h5(),[H,U]=(0,Ce.useState)(null),[L,N]=(0,Ce.useState)(!1),[E,M]=(0,Ce.useState)(!1),[A,O]=(0,Ce.useState)(!1),[D,B]=(0,Ce.useState)(!1),[z,j]=(0,Ce.useState)(void 0),[F,K]=(0,Ce.useState)("select"),[$,ee]=(0,Ce.useState)(!1),[q,J]=(0,Ce.useState)([]),[ne,de]=(0,Ce.useState)(!1),[re,ce]=(0,Ce.useState)(null),[we,_e]=(0,Ce.useState)([]),Oe=(0,Ce.useRef)(0),Ct=(0,Ce.useMemo)(()=>g.some(Z=>Z.selected),[g]),St=(0,Ce.useMemo)(()=>g.filter(Z=>Z.selected&&Z.type!=="group"),[g]),co=(0,Ce.useMemo)(()=>{if(St.length<2)return{x:0,y:0};let Z=rd(St,0),ue=Z.x+Z.width/2,ke=Z.y,Le=typeof p?.getViewport=="function"?p.getViewport():{x:0,y:0,zoom:1},gt=typeof Le?.zoom=="number"&&Number.isFinite(Le.zoom)&&Le.zoom>0?Le.zoom:1,Xe=typeof Le?.x=="number"&&Number.isFinite(Le.x)?Le.x:0,He=typeof Le?.y=="number"&&Number.isFinite(Le.y)?Le.y:0;return{x:Math.round(Xe+ue*gt),y:Math.round(He+ke*gt)}},[St,p]),oe=(0,Ce.useCallback)(async()=>{let Z=await uN();Z.ok&&_e((Z.body.templates||[]).map(ue=>({id:ue.id,name:ue.name,nodeCount:ue.nodeCount})))},[]);(0,Ce.useEffect)(()=>{oe()},[oe]);let Ie=(0,Ce.useCallback)(async Z=>{let ue=await fN(Z);if(!ue.ok||!ue.body.template){Y.error(ue.body.message||ue.body.error||l("template.toast.loadFailed"));return}let ke=u({x:window.innerWidth/2,y:window.innerHeight/2}),Le=mN(ue.body.template,ke);b({addNodes:Le.nodes,addEdges:Le.edges}),Y.success(l("template.toast.inserted").replace("{name}",ue.body.template.name))},[b,u,l]),st=(0,Ce.useCallback)(()=>{if(St.length<2)return;v(St.map(ue=>ue.id),l("group.defaultTitle"))&&Y.success(l("group.toast.grouped"))},[St,v,l]),kt=(0,Ce.useCallback)((Z,ue=St)=>{if(ue.length<2)return;let ke=p5(ue,Z,{gap:40}),Le=new Map(ke.map(He=>[He.id,He])),gt=ue[0]?.parentId,Xe=!!(gt&&ue.every(He=>He.parentId===gt));m(He=>{let Pt=He.map(tt=>Le.get(tt.id)||tt);if(Xe&&gt){let tt=Pt.filter(ht=>ht.parentId===gt&&ht.type!=="group");if(tt.length>0){let ht=rd(tt,32);return Pt.map(ea=>ea.id===gt&&ea.type==="group"?{...ea,width:ht.width,height:ht.height,style:{...ea.style||{},width:ht.width,height:ht.height},data:{...ea.data||{},minWidth:ht.minWidth,minHeight:ht.minHeight}}:ea)}}return Pt}),Y.success(l("group.toast.layout"))},[St,m,l]);(0,Ce.useEffect)(()=>{let Z=gt=>{let Xe=gt,He=Xe.detail?.groupId?id(g,Xe.detail.groupId):[],Pt=He.length>0?He:Xe.detail?.nodeIds||[];Pt.length>0&&a&&(a(Pt),Y.success(l("group.toast.execute")))},ue=gt=>{let Xe=gt,{groupId:He,layoutType:Pt}=Xe.detail,tt=g.filter(ht=>ht.parentId===He);tt.length>=2&&kt(Pt,tt)},ke=gt=>{let He=gt.detail?.nodeIds||[],tt=g.filter(ht=>He.includes(ht.id)).map(ht=>{let ea=ht.data||{};return{id:ht.id,nodeId:ht.id,nodeTitle:ea.label||ea.title||ea.name||ht.id,type:ea.materialType||ht.type||"image",previewUrl:ea.previewUrl,content:ea.content,realPath:ea.realPath}});J(tt),ee(!0)},Le=gt=>{let Xe=gt,{groupId:He,groupTitle:Pt}=Xe.detail,tt=g.filter(ht=>ht.parentId===He);ce({id:He,title:Pt||l("template.modal.defaultName"),nodeCount:tt.length}),de(!0)};return window.addEventListener("omnimux:workflow:execute-group",Z),window.addEventListener("omnimux:workflow:layout-group",ue),window.addEventListener("omnimux:workflow:batch-create-asset",ke),window.addEventListener("omnimux:workflow:create-subworkflow",Le),()=>{window.removeEventListener("omnimux:workflow:execute-group",Z),window.removeEventListener("omnimux:workflow:layout-group",ue),window.removeEventListener("omnimux:workflow:batch-create-asset",ke),window.removeEventListener("omnimux:workflow:create-subworkflow",Le)}},[g,a,kt,l]);let Fe=ZI(m,x),Jt=l("menu.generateFromNode"),{menuState:Tt,onConnectStart:Wa,onConnectEnd:Vn,onMenuSelect:Ld,onMenuClose:_d}=XI({onReject:U});(0,Ce.useEffect)(()=>{S()},[g,w,S]);let Id=(0,Ce.useMemo)(()=>e?g.map(Z=>({...Z,data:{...Z.data,__catalog:e}})):g,[g,e]),Sg=(0,Ce.useCallback)(Z=>{let ue=b({addEdges:[Z]});if(ue.status==="rejected"){let ke=l(sg(ue.reasonCode));U(ke),Y.warning(ke)}else U(null)},[b,l]),kg=(0,Ce.useCallback)(Z=>{let ue=ae.getState();return FI(Z,ue.nodes,ue.edges)},[]),rf=(0,Ce.useCallback)(async(Z,ue)=>{let ke=Oe.current,Le=ue??{x:120+ke%3*420,y:120+Math.floor(ke/3)*360};if(Z==="import_asset"){let Xe=await zn();if(!Xe.ok){Xe.body.error==="picker-unsupported"?Y.warning(l("picker.needPath")):Y.error(l("picker.pickFailed"));return}let He=Xe.body.paths??[];if(He.length===0)return;let Pt=ki(He);if(Pt.length===0){Y.warning(l("picker.unsupported"));return}let tt=Q0({files:Pt,origin:Le});if(!tt.hasWork||!tt.addNodes?.length)return;if(b({addNodes:tt.addNodes}).status!=="allowed"){Y.error(l("picker.commitFailed"));return}let ea=new Set(tt.addNodes.map(Vs=>Vs.id));m(Vs=>Vs.map(Nr=>ea.has(Nr.id)?Nr:Nr.selected?{...Nr,selected:!1}:Nr)),Oe.current+=tt.addNodes.length,Y.success(l("picker.importOk"));return}if(Z==="table"||Z==="video_composition"){let Xe=pM(Z,Le,`node_${Z}_${Date.now()}`);if(!Xe)return;Oe.current+=1,m(He=>j0(He,[{...Xe,selected:!0}]));return}let gt=pd(Z,Le);gt.nodes.length!==0&&(Oe.current+=1,m(Xe=>j0(Xe,gt.nodes)))},[m,b,l]),Lg=(0,Ce.useCallback)(Z=>{let ue=Z.nodes.map(Le=>Le.id),ke=Z.edges.map(Le=>Le.id);ue.length===0&&ke.length===0||b({removeNodeIds:ue,removeEdgeIds:ke})},[b]),{menu:Us,handleNodeContextMenu:_g,handlePaneContextMenu:Ig,handleSelectionContextMenu:Mg,closeMenu:Md,handleMenuAction:Ng,handleAddNodeFromMenu:Eg}=$I({screenToFlowPosition:u,setNodes:m,copySelectedNodes:Fe.copySelectedNodes,pasteNodes:Fe.pasteNodes,duplicateSelectedNodes:Fe.duplicateSelectedNodes,deleteSelectedNodes:Fe.deleteSelectedNodes,selectAllNodes:Fe.selectAllNodes,clearSelection:Fe.clearSelection,undo:k,redo:_,onExecuteNodeIds:a,onAddNode:rf}),qs=(0,Ce.useCallback)((Z,ue)=>{let ke=JI(Z);if(!ke.ok)return Y.warning(l(ke.reason==="unsupported"?"picker.unsupported":"picker.needPath")),!1;let Le=Q0({files:[ke.draft],origin:ue});if(!Le.hasWork||!Le.addNodes?.length)return Y.warning(l("picker.unsupported")),!1;if(b({addNodes:Le.addNodes}).status!=="allowed")return Y.error(l("picker.commitFailed")),!1;let Xe=new Set(Le.addNodes.map(Pt=>Pt.id));m(Pt=>Pt.map(tt=>Xe.has(tt.id)?tt:tt.selected?{...tt,selected:!1}:tt)),Oe.current+=Le.addNodes.length;let He=Le.addNodes[0];return He&&x("node",He.id),Y.success(l("picker.importOk")),!0},[b,m,x,l]),Tg=(0,Ce.useCallback)(Z=>{let ue=Oe.current,ke={x:200+ue%4*50,y:200+ue%4*40};qs(Z,ke)},[qs]);BI({onCopy:Fe.copySelectedNodes,onPaste:()=>Fe.pasteNodes(),onSelectAll:Fe.selectAllNodes,onDeleteSelected:Fe.deleteSelectedNodes,onClearSelection:Fe.clearSelection,onDuplicate:Fe.duplicateSelectedNodes,onGroupSelected:st,onUngroupSelected:()=>{let Z=g.find(ue=>ue.selected&&ue.type==="group");Z&&(C(Z.id),Y.success(l("group.toast.ungrouped")))},onUndo:k,onRedo:_,hasSelection:Ct,onToggleAssets:()=>M(Z=>!Z),onToggleShortcuts:()=>O(Z=>!Z),onToggleMinimap:()=>N(Z=>!Z),onToggleAddMenu:()=>B(Z=>!Z),onSetPointerMode:Z=>K(Z),onFitView:()=>d(LN),onResetZoom:()=>f(1),onCategoryKey:Z=>{M(!0),j(Z)}});let Ag=(0,Ce.useCallback)((Z,ue)=>{x("node",ue.id)},[x]),Dg=(0,Ce.useCallback)(()=>{x("none",null),Md()},[x,Md]),Rg=(0,Ce.useCallback)(()=>{m(Z=>Z.map((ue,ke)=>({...ue,position:{x:120+ke%3*440,y:120+Math.floor(ke/3)*360}})))},[m]),Pg=(0,Ce.useCallback)(Z=>{Z.preventDefault(),Z.dataTransfer.dropEffect="copy"},[]),zg=(0,Ce.useCallback)(Z=>{Z.preventDefault();try{let ue=Z.dataTransfer.getData("application/json");if(!ue)return;let ke=JSON.parse(ue);if(ke?.type==="omnimux-canvas-node"&&typeof ke.nodeId=="string"){K0({nodes:g,nodeId:ke.nodeId,setCenter:c,setNodes:m});return}if(ke?.type==="omnimux-asset"&&ke.asset){let Le=u({x:Z.clientX,y:Z.clientY});qs(ke.asset,Le)}}catch(ue){console.error("Failed to parse dropped asset",ue)}},[u,qs,g,c,m]);return(0,mt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,mt.jsx)(v_,{nodes:Id,edges:w,onNodesChange:y,onEdgesChange:h,onConnect:Sg,isValidConnection:kg,onConnectStart:Wa,onConnectEnd:Vn,onNodeClick:Ag,onPaneClick:Dg,onNodeContextMenu:_g,onPaneContextMenu:Ig,onDragOver:Pg,onDrop:zg,onSelectionContextMenu:Mg,onDelete:Lg,nodeTypes:m7,edgeTypes:g7,fitView:!0,fitViewOptions:LN,defaultViewport:h7,minZoom:q0.minZoom,maxZoom:q0.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:F==="pan"?!0:b7,panOnScroll:!0,panOnScrollMode:tn.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:F==="select",selectionMode:mr.Partial,defaultEdgeOptions:Fm,connectOnClick:!1,connectionRadius:x7,onlyRenderVisibleElements:!0,children:(0,mt.jsx)(L_,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:In.Dots})}),(0,mt.jsx)(D5,{isMinimapOpen:L,onToggleMinimap:()=>N(Z=>!Z),onAlignGrid:Rg,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:s}),L&&(0,mt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,mt.jsx)(M_,{pannable:!0,zoomable:!0})}),(0,mt.jsx)(A5,{onAddNode:rf,pointerMode:F,onPointerModeChange:K,onOpenAssets:()=>M(Z=>!Z),onOpenHelp:()=>O(Z=>!Z),isAssetsOpen:E,isAddMenuOpen:D,onToggleAddMenu:()=>B(Z=>!Z),templates:we,onInsertTemplate:Z=>{Ie(Z)}}),E&&(0,mt.jsx)(yw,{onClose:()=>M(!1),children:(0,mt.jsx)(EI,{isOpen:E,onClose:()=>M(!1),onInsertAsset:Tg,workspaceId:t,nodes:Id,onFocusNode:Z=>{K0({nodes:Id,nodeId:Z,setCenter:c,setNodes:m})}})}),(0,mt.jsx)(TI,{isOpen:A,onClose:()=>O(!1)}),(0,mt.jsx)(mw,{visible:St.length>=2,selectedCount:St.length,position:co,onGroup:st,onCreateAsset:()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:batch-create-asset",{detail:{nodeIds:St.map(Z=>Z.id)}}))},onLayout:Z=>kt(Z)}),(0,mt.jsx)(zI,{x:Us.x,y:Us.y,visible:Us.visible,context:Us.context,onClose:Md,onAction:Ng,onAddNode:Eg,canUndo:T,canRedo:R,hasClipboard:Fe.hasClipboard,hasSelection:Ct}),(0,mt.jsx)(ig,{visible:Tt.visible,x:Tt.x,y:Tt.y,title:Jt,options:Tt.options,onSelect:Ld,onClose:_d}),(0,mt.jsx)(kN,{}),(0,mt.jsx)(gw,{isOpen:$,onClose:()=>ee(!1),items:q}),(0,mt.jsx)(hw,{isOpen:ne,onClose:()=>{de(!1),ce(null)},groupId:re?.id,defaultTitle:re?.title,nodeCount:re?.nodeCount,onConfirm:async Z=>{let ue=re?.id;if(!ue)throw new Error(l("template.missingGroup"));let ke=new Set(id(g,ue)),Le=g.filter(He=>ke.has(He.id)),gt=w.filter(He=>ke.has(He.source)&&ke.has(He.target)),Xe=await cN({name:Z.name,description:Z.description,tags:Z.tags,nodes:af(Le),edges:of(gt)});if(!Xe.ok||!Xe.body.template)throw new Error(Xe.body.message||Xe.body.error||l("template.modal.failed"));await oe()}}),H&&(0,mt.jsx)("div",{className:"wf-rejected-toast",children:H})]})},y7=e=>(0,mt.jsx)(C0,{children:(0,mt.jsx)(w7,{...e})}),_N=y7;var IN=I(Q(),1);var Ta=I(X(),1),Cg=class extends IN.Component{constructor(a){super(a);Hg(this,"handleClearSelectionAndRetry",()=>{try{let a=ae.getState();a.setNodes(o=>o.map(n=>n.selected?{...n,selected:!1}:n)),a.setSelectedElement("none",null)}catch{}this.setState({hasError:!1,error:null,errorInfo:null})});Hg(this,"handleReload",()=>{this.props.onReset?this.props.onReset():typeof window<"u"&&window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a,o){console.error("[OmniMux CanvasErrorBoundary] \u6355\u83B7\u5230\u753B\u5E03\u672A\u5904\u7406\u6E32\u67D3\u5F02\u5E38:",a,o),this.setState({errorInfo:o})}render(){if(this.state.hasError){let a=this.state.error?.message||"\u753B\u5E03\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u5F02\u5E38";return(0,Ta.jsx)("div",{className:"wf-canvas-error-boundary nodrag nopan",children:(0,Ta.jsxs)("div",{className:"wf-canvas-error-boundary__card",children:[(0,Ta.jsx)("div",{className:"wf-canvas-error-boundary__icon",children:(0,Ta.jsx)(Dn,{size:24})}),(0,Ta.jsxs)("div",{className:"wf-canvas-error-boundary__copy",children:[(0,Ta.jsx)("div",{className:"wf-canvas-error-boundary__title",children:"\u753B\u5E03\u5C40\u90E8\u6E32\u67D3\u9047\u5230\u95EE\u9898"}),(0,Ta.jsx)("div",{className:"wf-canvas-error-boundary__message",children:a})]}),(0,Ta.jsxs)("div",{className:"wf-canvas-error-boundary__actions",children:[(0,Ta.jsxs)("button",{type:"button",className:"wf-canvas-error-boundary__btn wf-canvas-error-boundary__btn--ghost",onClick:this.handleClearSelectionAndRetry,children:[(0,Ta.jsx)(Ic,{size:14}),(0,Ta.jsx)("span",{children:"\u6E05\u7A7A\u9009\u62E9\u5E76\u91CD\u8BD5"})]}),(0,Ta.jsxs)("button",{type:"button",className:"wf-canvas-error-boundary__btn wf-canvas-error-boundary__btn--primary",onClick:this.handleReload,children:[(0,Ta.jsx)(vs,{size:14}),(0,Ta.jsx)("span",{children:"\u91CD\u65B0\u52A0\u8F7D"})]})]})]})})}return this.props.children}};var Gt=I(Q(),1);var MN=new Set(["pending","running","paused"]),v7=new Set(["completed","error","cancelled"]);function Cd(e,t){let a=ae.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function NN(e,t){let a=(0,Gt.useRef)(null),o=(0,Gt.useRef)(e);o.current=e;let n=(0,Gt.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,Gt.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,Gt.useCallback)((y,h)=>{ot.getState().setExecution({status:y,error:h,progress:{...ot.getState().progress,percentage:y==="completed"?100:ot.getState().progress.percentage}})},[]),s=(0,Gt.useCallback)((y,h)=>{let b;try{b=JSON.parse(h)}catch{return}let m=ot.getState();switch(y){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:b.totalNodes??0,completed:0,running:0,pending:b.totalNodes??0,percentage:0}});break}case"node_start":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),Cd(b.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:b.progress??m.progress.percentage}});let x=b.output??{},v={executionStatus:"completed",executionError:void 0};if(x.text&&(v.generatedContent=x.text),x.mediaAssets&&x.mediaAssets.length>0){let C=x.mediaAssets[0];v.mediaAssets=x.mediaAssets,C.type==="image"&&(v.mediaUrl=C.url),v.taskId=`exec-${b.executionId??""}`}Cd(b.nodeId,v);break}case"node_error":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),Cd(b.nodeId,{executionStatus:"error",executionError:b.error??Is("error.nodeExecutionFailed")});break}case"node_skipped":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"skipped"),Cd(b.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",b.error??Is("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),l=(0,Gt.useCallback)(y=>{r();let h=o.current;if(!h)return;let b=new EventSource(Et.executionEvents(encodeURIComponent(h),encodeURIComponent(y)));a.current=b;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let x of m)b.addEventListener(x,v=>{s(x,v.data)});b.onerror=()=>{let x=ot.getState().status;v7.has(x)&&r()}},[r,s]),u=(0,Gt.useCallback)(y=>{let h=ot.getState();h.setExecution({executionId:y.id,status:y.status,error:y.error,progress:{total:y.progress.total,completed:y.progress.completed,running:y.progress.running,pending:y.progress.pending,percentage:y.progress.percentage}});for(let[b,m]of Object.entries(y.nodeStates??{})){h.setNodeStatus(b,m.status);let x={executionStatus:m.status};m.status==="error"&&m.error&&(x.executionError=m.error);let v=y.nodeOutputs?.[b];v&&(v.text&&(x.generatedContent=v.text),v.mediaAssets&&v.mediaAssets.length>0&&(x.mediaAssets=v.mediaAssets,v.mediaAssets[0]&&v.mediaAssets[0].type==="image"&&(x.mediaUrl=v.mediaAssets[0].url))),Cd(b,x)}},[]),d=(0,Gt.useCallback)(async(y={})=>{let h=o.current;if(!h)return;if(r(),ot.getState().resetExecution(),ot.getState().setExecution({status:"pending"}),y.mode==="single"&&y.nodeIds&&y.nodeIds[0]&&(ot.getState().setNodeStatus(y.nodeIds[0],"pending"),Cd(y.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let b=await H5(h,{mode:y.mode??"full",nodeIds:y.nodeIds});if(!b.ok||!b.body.execution){ot.getState().setExecution({status:"error",error:b.body.message??Is("error.createExecutionFailed")});return}ot.getState().setExecution({executionId:b.body.execution.id}),l(b.body.execution.id)},[r,l]),f=(0,Gt.useCallback)(async y=>{let h=o.current,{executionId:b}=ot.getState();if(!h||!b)return;let m=await X5(h,b,y);!m.ok&&m.body.message&&ot.getState().setExecution({error:m.body.message})},[]),c=(0,Gt.useCallback)(()=>f("pause"),[f]),p=(0,Gt.useCallback)(()=>f("resume"),[f]),g=(0,Gt.useCallback)(()=>f("cancel"),[f]),w=(0,Gt.useCallback)(()=>{r(),ot.getState().resetExecution()},[r]);return(0,Gt.useEffect)(()=>{if(!e)return;let y=!1;return(async()=>{try{let h=await B5(e);if(y||!h.ok)return;let b=(h.body.executions??[]).find(x=>MN.has(x.status));if(!b)return;let m=await F5(e,b.id);if(y||!m.ok||!m.body.execution)return;u(m.body.execution),MN.has(m.body.execution.status)&&l(b.id)}catch{}})(),()=>{y=!0}},[e,u,l]),(0,Gt.useEffect)(()=>(ot.getState().setStartNodeExecution(h=>{d({mode:"single",nodeIds:[h]})}),()=>{ot.getState().setStartNodeExecution(null)}),[d]),(0,Gt.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:w}}var Fs=I(Q(),1);function EN(e={}){let t=e.workspaceId,[a,o]=(0,Fs.useState)({phase:"loading"}),[n,r]=(0,Fs.useState)(()=>ef()),i=ae(d=>d.hydrateGraph),s=ae(d=>d.resetStore),l=ae(d=>d.nodes.length),u=(0,Fs.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Fs.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=ae.getState(),p=SI(c.nodes);if(p.length===0)return;let g=await j5(p);if(d||!g.ok||!Array.isArray(g.body.items))return;let w=CI(c.nodes,g.body.items);!w.some((h,b)=>h!==c.nodes[b])||d||c.setNodes(w)}return(async()=>{try{if(R5().then(g=>{!d&&g.ok&&(r(g.body),AM(g.body))}),!t)return;let c=await Gc(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await P5("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??Is("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),s()}},[t,i,s]),{boot:a,setBoot:o,catalog:n,nodeCount:l}}var it=I(Q(),1);function TN(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}var C7=1e3,S7=2500,k7=3e3;function Sd(){let{nodes:e,edges:t}=ae.getState(),a=I0(e,t);return{nodes:a.nodes,edges:a.edges}}function AN(e,t={}){let a=t.enabled!==!1,[o,n]=(0,it.useState)("idle"),[r,i]=(0,it.useState)(!1),s=(0,it.useRef)(e),l=(0,it.useRef)(0),u=(0,it.useRef)(""),d=(0,it.useRef)(0),f=(0,it.useRef)(""),c=(0,it.useRef)(null),p=(0,it.useRef)(null),g=(0,it.useRef)(!1),w=(0,it.useRef)(a);w.current=a;let y=(0,it.useRef)(t.onSaved);y.current=t.onSaved,(0,it.useEffect)(()=>{s.current=e,e&&(l.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=bn(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},b=(0,it.useCallback)(async k=>{let _=s.current;if(!_){n("error");return}let T=await Gc(_.id);if(!T.ok||!T.body.workspace){n("error");return}let R=T.body.workspace,H=TN({localSignature:bn(k.localNodes,k.localEdges),lastSavedSignature:u.current,remoteSignature:bn(R.nodes,R.edges)});if(l.current=R.version,H==="conflict"){n("conflict");return}u.current=bn(R.nodes,R.edges),d.current=R.nodes.length,H==="reload"&&ae.getState().hydrateGraph(R.nodes,R.edges),i(!1),n("idle"),y.current?.(R)},[]),m=(0,it.useCallback)(async(k,_,T=!1)=>{let R=s.current;if(!R||!T&&!w.current||g.current)return;let H=Wm({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:_,lastSavedSignature:u.current,nextSignature:bn(k.nodes,k.edges)});if(!H.persist||!H.snapshot)return;let{nodes:U,edges:L}=H.snapshot,N=R.name;g.current=!0,n("saving");try{let E=await O5(R.id,{name:N,nodes:af(U),edges:of(L),expectedVersion:l.current});if(E.status===409){await b({localNodes:U,localEdges:L});return}E.ok&&E.body.workspace?(l.current=E.body.workspace.version,u.current=bn(U,L),d.current=U.length,i(!1),n("saved"),h(),p.current=setTimeout(()=>{n(M=>M==="saved"?"idle":M)},S7),y.current?.(E.body.workspace)):n("error")}catch{n("error")}finally{g.current=!1}},[b]);(0,it.useEffect)(()=>{if(!a)return;let k=(T="autosave")=>{if(!s.current||!w.current)return;let H=Sd(),L=bn(H.nodes,H.edges)!==u.current;if(i(L),!L){c.current&&(clearTimeout(c.current),c.current=null),n(A=>A==="pending"?"idle":A);return}let N=Uc(H.nodes.length,T);if(!_0({lastSavedNodeCount:d.current,nextNodeCount:H.nodes.length,cause:N})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(A=>A==="pending"?"idle":A);return}n(A=>A==="saving"||A==="conflict"?A:"pending"),c.current&&clearTimeout(c.current);let E={nodes:H.nodes,edges:H.edges},M=N;c.current=setTimeout(()=>{c.current=null,m(E,M)},C7)},_=ae.subscribe(()=>{k("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,it.useEffect)(()=>{if(!a)return;let k=()=>{if(!w.current||!s.current)return;let T=Sd(),R=Uc(T.nodes.length,"flush"),H=Wm({lastSavedNodeCount:d.current,nextNodes:T.nodes,nextEdges:T.edges,cause:R,lastSavedSignature:u.current,nextSignature:bn(T.nodes,T.edges)});!H.persist||!H.snapshot||m(H.snapshot,R)};return window.addEventListener("pagehide",k),()=>{window.removeEventListener("pagehide",k),k(),h()}},[m,a]);let x=(0,it.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let k=Sd();await m(k,Uc(k.nodes.length,"autosave"))},[m]),v=(0,it.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!s.current)return;let _=Sd(),T="flush",R=Wm({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:T,lastSavedSignature:u.current,nextSignature:bn(_.nodes,_.edges)});!R.persist||!R.snapshot||m(R.snapshot,T,!0)},[m]),C=(0,it.useCallback)(async()=>{let k=Sd();await m(k,Uc(k.nodes.length,"autosave"))},[m]),S=(0,it.useCallback)(async()=>{let k=s.current;if(!k)return;let _=await Gc(k.id);if(!_.ok||!_.body.workspace){n("error");return}let T=_.body.workspace;l.current=T.version,u.current=bn(T.nodes,T.edges),d.current=T.nodes.length,ae.getState().hydrateGraph(T.nodes,T.edges),i(!1),n("idle"),y.current?.(T)},[]);return(0,it.useEffect)(()=>{if(!a)return;let k=!1,_=async()=>{if(k||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let R=s.current;if(!(!R||g.current)){k=!0;try{let H=await z5(R.id);if(!H.ok||typeof H.body.version!="number"||H.body.version<=l.current)return;let U=Sd();await b({localNodes:U.nodes,localEdges:U.edges})}catch{}finally{k=!1}}},T=setInterval(()=>{_()},k7);return()=>clearInterval(T)},[a,b]),{status:o,isDirty:r,saveNow:x,flushPendingSave:v,resolveConflict:C,reloadFromServer:S}}var Aa=I(X(),1),L7=({locale:e,workspaceId:t})=>{let a=se(),o=(0,kd.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=EN({workspaceId:t,beforeReset:()=>{o.current()}});(0,kd.useEffect)(()=>{N5(e)},[e]);let s=n.phase==="ready"?n.workspace:null,l=(0,kd.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=AN(s,{onSaved:l,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=NN(s?s.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,Aa.jsx)("div",{className:"wf-canvas-root",children:(0,Aa.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Aa.jsx)("div",{className:"wf-canvas-root",children:(0,Aa.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Aa.jsx)("span",{children:n.message}),(0,Aa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Aa.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,Aa.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Aa.jsx)("span",{children:a("app.conflictBanner")}),(0,Aa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Aa.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Aa.jsx)("main",{className:"wf-canvas-main",children:(0,Aa.jsx)(Cg,{children:(0,Aa.jsx)(_N,{catalog:i,workspaceId:s?.id??null,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})})]})},vw=L7;var DN=`/* this gets exported as style.css and can be used for the default theming */
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
`;var RN=`/**
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

.wf-canvas-root .react-flow__node-group {
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
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
  gap: 4px;
  padding: 4px 8px;
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
  gap: 2px;
  height: 36px;
  padding: 0 8px;
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
  height: 18px;
  background: var(--wb-border-strong);
  margin: 0 1px;
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

`;var PN=`/**
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

.wf-floating-top-pill__btn--success {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
}

.wf-floating-top-pill__btn--success:hover {
  background: rgba(16, 185, 129, 0.22);
  color: #34d399;
}

.wf-floating-top-pill__btn--primary {
  background: rgba(59, 130, 246, 0.18);
  color: #60a5fa;
}

.wf-floating-top-pill__btn--primary:hover {
  background: rgba(59, 130, 246, 0.28);
  color: #93c5fd;
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
  width: 1px;
  height: 18px;
  margin: 0 1px;
  background: var(--wb-border-strong, var(--wb-border));
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

.wf-node-kind-badge {
  flex-shrink: 0;
  font-size: 10px;
  line-height: 16px;
  padding: 0 6px;
  border-radius: 4px;
  color: var(--dsw-alias-label-secondary, var(--wb-text-secondary));
  background: var(--dsw-alias-bg-tertiary, var(--wb-pill-bg));
  border: 1px solid var(--dsw-alias-border-subtle, var(--wb-border));
}
.wf-node-kind-badge--import {
  color: var(--dsw-alias-label-primary, var(--wb-text-primary));
}
.wf-grid-card-meta-compact .wf-node-kind-badge {
  margin-top: 2px;
  align-self: flex-start;
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
  display: flex;
  align-items: center;
  gap: 6px;
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

/* ==================== \u5206\u7EC4 / \u591A\u9009\u5DE5\u5177\u680F / \u6A21\u677F\u5F39\u7A97 ==================== */
.wf-floating-selection-bar {
  position: absolute;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  height: 40px;
  transform: translate(-50%, -100%) translateY(-14px);
  background: var(--wb-dock-bg, var(--wb-surface));
  backdrop-filter: var(--wb-dock-blur);
  -webkit-backdrop-filter: var(--wb-dock-blur);
  border-radius: 999px;
  border: 1px solid var(--wb-border-strong);
  box-shadow: var(--wb-dock-shadow);
  color: var(--wb-text-primary);
  font-size: 12px;
  user-select: none;
  pointer-events: auto;
}

.wf-floating-selection-bar__btn,
.wf-group-topbar__btn,
.wf-group-modal__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 4px 10px;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--wb-text-primary);
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
}

.wf-floating-selection-bar__btn:hover,
.wf-group-topbar__btn:hover,
.wf-group-modal__btn:hover {
  background: var(--wb-dock-item-hover);
}

.wf-floating-selection-bar__btn--accent {
  background: var(--wb-accent-soft);
  border: 1px solid color-mix(in srgb, var(--wb-accent) 30%, transparent);
  color: var(--wb-accent);
}

.wf-floating-selection-bar__btn--accent:hover {
  background: color-mix(in srgb, var(--wb-accent) 22%, transparent);
}

.wf-floating-selection-bar__menu,
.wf-group-topbar__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  z-index: 1001;
  background: var(--wb-surface);
  border: 1px solid var(--wb-border);
  border-radius: 8px;
  box-shadow: var(--wb-shadow-card);
}

.wf-floating-selection-bar__menu-item,
.wf-group-topbar__menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--wb-text-primary);
  font-size: 12px;
  cursor: pointer;
  text-align: left;
}

.wf-floating-selection-bar__menu-item:hover,
.wf-group-topbar__menu-item:hover {
  background: var(--wb-dock-item-hover);
}

.wf-group-node {
  position: relative;
  box-sizing: border-box;
  border-radius: 12px;
  background: color-mix(in srgb, var(--wb-surface) 8%, transparent);
  border: 1.5px solid var(--wb-border-strong);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, width 0.2s ease, height 0.2s ease;
}

.wf-group-node--selected {
  border-color: var(--wf-group-accent, var(--wb-accent));
  box-shadow: 0 0 24px color-mix(in srgb, var(--wf-group-accent, var(--wb-accent)) 14%, transparent);
}

.wf-group-node--collapsed {
  background: color-mix(in srgb, var(--wb-surface) 18%, transparent);
}

/* ==================== \u7F16\u7EC4\u5934\u90E8\u80F6\u56CA (GroupHeader) ==================== */
.wf-group-header-pill {
  position: absolute;
  top: 8px;
  left: 10px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 2px 10px 2px 6px;
  background: rgba(24, 24, 27, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  color: var(--wb-text-primary);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: border-color 150ms ease, background 150ms ease, box-shadow 150ms ease;
}

.wf-group-header-pill:hover {
  background: rgba(36, 36, 40, 0.96);
  border-color: rgba(255, 255, 255, 0.28);
}

.wf-group-header-pill--selected {
  border-color: var(--wf-group-accent, var(--wb-accent));
  box-shadow: 0 0 12px color-mix(in srgb, var(--wf-group-accent, var(--wb-accent)) 30%, transparent);
}

.wf-group-header-pill__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--wb-text-secondary);
  cursor: pointer;
  border-radius: 4px;
  transition: color 120ms ease, background 120ms ease;
}

.wf-group-header-pill__toggle:hover {
  color: var(--wb-text-primary);
  background: rgba(255, 255, 255, 0.1);
}

.wf-group-header-pill__title {
  color: var(--wb-text-primary);
  font-size: 12px;
  font-weight: 500;
  cursor: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.wf-group-header-pill__input {
  background: var(--wb-surface);
  border: 1px solid var(--wf-group-accent, var(--wb-accent));
  border-radius: 4px;
  color: var(--wb-text-primary);
  font-size: 12px;
  font-weight: 500;
  padding: 1px 6px;
  outline: none;
}

.wf-group-topbar {
  position: absolute;
  left: 50%;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.wf-group-topbar__swatch {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.wf-group-topbar__palette {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(4, 18px);
  gap: 6px;
  padding: 6px;
  background: rgba(24, 24, 27, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.wf-group-topbar__palette-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: transform 120ms ease;
}

.wf-group-topbar__palette-dot:hover {
  transform: scale(1.15);
}

.wf-group-topbar__palette-dot.is-active {
  border-color: #ffffff;
}

.wf-group-topbar__menu {
  position: absolute;
  top: calc(100% + 8px);
  min-width: 130px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  z-index: 1001;
  background: rgba(24, 24, 27, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.wf-group-topbar__menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #e4e4e7;
  font-size: 12px;
  cursor: pointer;
  text-align: left;
  transition: background 120ms ease, color 120ms ease;
}

.wf-group-topbar__menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.wf-group-resize-handles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.wf-group-handle {
  position: absolute;
  pointer-events: auto;
  z-index: 5;
  background: var(--wb-surface);
  border: 2px solid var(--wf-group-accent, var(--wb-accent));
}

.wf-group-handle--corner {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.wf-group-handle--nw { top: -5px; left: -5px; cursor: nwse-resize; }
.wf-group-handle--ne { top: -5px; right: -5px; cursor: nesw-resize; }
.wf-group-handle--se { bottom: -5px; right: -5px; cursor: nwse-resize; }
.wf-group-handle--sw { bottom: -5px; left: -5px; cursor: nesw-resize; }

.wf-group-handle--edge {
  background: var(--wf-group-accent, var(--wb-accent));
  border: none;
  border-radius: 999px;
  z-index: 4;
}

.wf-group-handle--n,
.wf-group-handle--s {
  width: 32px;
  height: 6px;
  left: calc(50% - 16px);
  cursor: ns-resize;
}

.wf-group-handle--n { top: -3px; }
.wf-group-handle--s { bottom: -3px; }

.wf-group-handle--w,
.wf-group-handle--e {
  width: 6px;
  height: 32px;
  top: calc(50% - 16px);
  cursor: ew-resize;
}

.wf-group-handle--w { left: -3px; }
.wf-group-handle--e { right: -3px; }

.wf-group-modal {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--wb-text-primary);
  font-size: 13px;
}

.wf-group-modal__label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: var(--wb-text-secondary);
}

.wf-group-modal__input,
.wf-group-modal textarea {
  width: 100%;
  padding: 8px 10px;
  background: var(--wb-surface-raised);
  border: 1px solid var(--wb-border);
  border-radius: 6px;
  color: var(--wb-text-primary);
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
}

.wf-group-modal__scopes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.wf-group-modal__scope {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  background: var(--wb-surface-raised);
  border: 1px solid var(--wb-border);
  color: var(--wb-text-primary);
  cursor: pointer;
  font-size: 12px;
  text-align: left;
}

.wf-group-modal__scope.is-active {
  background: var(--wb-accent-soft);
  border-color: var(--wb-accent);
  color: var(--wb-accent);
}

.wf-group-modal__list {
  max-height: 140px;
  overflow-y: auto;
  border: 1px solid var(--wb-border);
  border-radius: 6px;
  padding: 8px;
  background: var(--wb-surface-raised);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wf-group-modal__empty {
  color: var(--wb-text-muted);
  font-size: 12px;
  text-align: center;
  padding: 12px;
}

.wf-group-modal__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background: var(--wb-surface);
  border-radius: 4px;
  font-size: 12px;
}

.wf-group-modal__hint {
  padding: 8px 12px;
  border-radius: 6px;
  background: var(--wb-accent-soft);
  border: 1px solid color-mix(in srgb, var(--wb-accent) 20%, transparent);
  font-size: 11px;
  color: var(--wb-accent);
}

.wf-group-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

.wf-group-modal__btn {
  height: auto;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--wb-border);
}

.wf-group-modal__btn--primary {
  background: var(--wb-accent);
  border-color: transparent;
  color: var(--dsw-alias-label-primary-foreground, #fff);
}

.wf-group-modal__btn:disabled,
.wf-group-modal__btn--primary:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.wf-template-picker {
  min-width: 240px;
  max-height: 280px;
  overflow-y: auto;
  padding: 6px;
}

.wf-template-picker__empty {
  padding: 12px;
  color: var(--wb-text-muted);
  font-size: 12px;
  text-align: center;
}

.wf-template-picker__item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--wb-text-primary);
  text-align: left;
  cursor: pointer;
}

.wf-template-picker__item:hover {
  background: var(--wb-dock-item-hover);
}

.wf-template-picker__meta {
  color: var(--wb-text-muted);
  font-size: 11px;
}

/* ==================== canvas error boundary ==================== */

.wf-canvas-error-boundary {
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--wb-bg-canvas);
  color: var(--wb-text-primary);
  padding: 24px;
  box-sizing: border-box;
}

.wf-canvas-error-boundary__card {
  max-width: 480px;
  width: 100%;
  background: var(--wb-surface);
  border: 1px solid var(--wb-border);
  border-radius: 12px;
  padding: 28px 24px;
  box-shadow: var(--wb-shadow-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.wf-canvas-error-boundary__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--wb-danger-soft);
  color: var(--wb-danger);
  display: flex;
  align-items: center;
  justify-content: center;
}

.wf-canvas-error-boundary__copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wf-canvas-error-boundary__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--wb-text-primary);
}

.wf-canvas-error-boundary__message {
  font-size: 12px;
  color: var(--wb-text-muted);
  line-height: 18px;
  word-break: break-word;
}

.wf-canvas-error-boundary__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
  width: 100%;
}

.wf-canvas-error-boundary__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 120ms ease;
}

.wf-canvas-error-boundary__btn--ghost {
  border: 1px solid var(--wb-border);
  background: var(--wb-surface-raised);
  color: var(--wb-text-primary);
}

.wf-canvas-error-boundary__btn--primary {
  border: none;
  background: var(--wb-accent);
  color: var(--wb-surface);
}




`;var zN=`/**
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
`;var E7=[{id:"omnimux-workflow-xyflow-base",css:DN},{id:"omnimux-workflow-theme",css:RN},{id:"omnimux-workflow-components",css:PN},{id:"omnimux-workflow-table-node",css:zN}];function ON(){for(let{id:e,css:t}of E7){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Cw=I(X(),1),nf=new WeakMap;function T7(e,t){if(!e||nf.has(e))return;ON();let a=(0,HN.createRoot)(e);nf.set(e,{root:a,lastProps:t}),a.render((0,Cw.jsx)(vw,{...t}))}function A7(e,t){let a=nf.get(e);a&&(a.lastProps=t,a.root.render((0,Cw.jsx)(vw,{...t})))}function D7(e){let t=nf.get(e);t&&(t.root.unmount(),nf.delete(e))}return w3(R7);})();
