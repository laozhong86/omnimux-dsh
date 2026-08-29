var __omnimuxWorkflowCanvas=(()=>{var TM=Object.create;var rc=Object.defineProperty;var AM=Object.getOwnPropertyDescriptor;var DM=Object.getOwnPropertyNames;var RM=Object.getPrototypeOf,zM=Object.prototype.hasOwnProperty;var ya=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},PM=(e,t)=>{for(var a in t)rc(e,a,{get:t[a],enumerable:!0})},J0=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of DM(t))!zM.call(e,n)&&n!==a&&rc(e,n,{get:()=>t[n],enumerable:!(o=AM(t,n))||o.enumerable});return e};var N=(e,t,a)=>(a=e!=null?TM(RM(e)):{},J0(t||!e||!e.__esModule?rc(a,"default",{value:e,enumerable:!0}):a,e)),OM=e=>J0(rc({},"__esModule",{value:!0}),e);var db=ya(lt=>{"use strict";function _m(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<ic(n,t))e[o]=t,e[a]=n,a=o;else break e}}function Zo(e){return e.length===0?null:e[0]}function sc(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,l=e[i],s=i+1,u=e[s];if(0>ic(l,a))s<n&&0>ic(u,l)?(e[o]=u,e[s]=a,o=s):(e[o]=l,e[i]=a,o=i);else if(s<n&&0>ic(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function ic(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}lt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(eb=performance,lt.unstable_now=function(){return eb.now()}):(Sm=Date,tb=Sm.now(),lt.unstable_now=function(){return Sm.now()-tb});var eb,Sm,tb,xn=[],nr=[],BM=1,ro=null,ta=3,Im=!1,Os=!1,Bs=!1,Mm=!1,nb=typeof setTimeout=="function"?setTimeout:null,rb=typeof clearTimeout=="function"?clearTimeout:null,ab=typeof setImmediate<"u"?setImmediate:null;function lc(e){for(var t=Zo(nr);t!==null;){if(t.callback===null)sc(nr);else if(t.startTime<=e)sc(nr),t.sortIndex=t.expirationTime,_m(xn,t);else break;t=Zo(nr)}}function Nm(e){if(Bs=!1,lc(e),!Os)if(Zo(xn)!==null)Os=!0,sl||(sl=!0,ll());else{var t=Zo(nr);t!==null&&Em(Nm,t.startTime-e)}}var sl=!1,Hs=-1,ib=5,lb=-1;function sb(){return Mm?!0:!(lt.unstable_now()-lb<ib)}function Lm(){if(Mm=!1,sl){var e=lt.unstable_now();lb=e;var t=!0;try{e:{Os=!1,Bs&&(Bs=!1,rb(Hs),Hs=-1),Im=!0;var a=ta;try{t:{for(lc(e),ro=Zo(xn);ro!==null&&!(ro.expirationTime>e&&sb());){var o=ro.callback;if(typeof o=="function"){ro.callback=null,ta=ro.priorityLevel;var n=o(ro.expirationTime<=e);if(e=lt.unstable_now(),typeof n=="function"){ro.callback=n,lc(e),t=!0;break t}ro===Zo(xn)&&sc(xn),lc(e)}else sc(xn);ro=Zo(xn)}if(ro!==null)t=!0;else{var r=Zo(nr);r!==null&&Em(Nm,r.startTime-e),t=!1}}break e}finally{ro=null,ta=a,Im=!1}t=void 0}}finally{t?ll():sl=!1}}}var ll;typeof ab=="function"?ll=function(){ab(Lm)}:typeof MessageChannel<"u"?(km=new MessageChannel,ob=km.port2,km.port1.onmessage=Lm,ll=function(){ob.postMessage(null)}):ll=function(){nb(Lm,0)};var km,ob;function Em(e,t){Hs=nb(function(){e(lt.unstable_now())},t)}lt.unstable_IdlePriority=5;lt.unstable_ImmediatePriority=1;lt.unstable_LowPriority=4;lt.unstable_NormalPriority=3;lt.unstable_Profiling=null;lt.unstable_UserBlockingPriority=2;lt.unstable_cancelCallback=function(e){e.callback=null};lt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ib=0<e?Math.floor(1e3/e):5};lt.unstable_getCurrentPriorityLevel=function(){return ta};lt.unstable_next=function(e){switch(ta){case 1:case 2:case 3:var t=3;break;default:t=ta}var a=ta;ta=t;try{return e()}finally{ta=a}};lt.unstable_requestPaint=function(){Mm=!0};lt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ta;ta=e;try{return t()}finally{ta=a}};lt.unstable_scheduleCallback=function(e,t,a){var o=lt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:BM++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,_m(nr,e),Zo(xn)===null&&e===Zo(nr)&&(Bs?(rb(Hs),Hs=-1):Bs=!0,Em(Nm,a-o))):(e.sortIndex=n,_m(xn,e),Os||Im||(Os=!0,sl||(sl=!0,ll()))),e};lt.unstable_shouldYield=sb;lt.unstable_wrapCallback=function(e){var t=ta;return function(){var a=ta;ta=t;try{return e.apply(this,arguments)}finally{ta=a}}}});var cb=ya((wP,ub)=>{"use strict";ub.exports=db()});var Cb=ya(he=>{"use strict";var Dm=Symbol.for("react.transitional.element"),HM=Symbol.for("react.portal"),FM=Symbol.for("react.fragment"),UM=Symbol.for("react.strict_mode"),qM=Symbol.for("react.profiler"),VM=Symbol.for("react.consumer"),GM=Symbol.for("react.context"),XM=Symbol.for("react.forward_ref"),jM=Symbol.for("react.suspense"),YM=Symbol.for("react.memo"),hb=Symbol.for("react.lazy"),ZM=Symbol.for("react.activity"),fb=Symbol.iterator;function WM(e){return e===null||typeof e!="object"?null:(e=fb&&e[fb]||e["@@iterator"],typeof e=="function"?e:null)}var xb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bb=Object.assign,wb={};function ul(e,t,a){this.props=e,this.context=t,this.refs=wb,this.updater=a||xb}ul.prototype.isReactComponent={};ul.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ul.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vb(){}vb.prototype=ul.prototype;function Rm(e,t,a){this.props=e,this.context=t,this.refs=wb,this.updater=a||xb}var zm=Rm.prototype=new vb;zm.constructor=Rm;bb(zm,ul.prototype);zm.isPureReactComponent=!0;var pb=Array.isArray;function Am(){}var at={H:null,A:null,T:null,S:null},yb=Object.prototype.hasOwnProperty;function Pm(e,t,a){var o=a.ref;return{$$typeof:Dm,type:e,key:t,ref:o!==void 0?o:null,props:a}}function KM(e,t){return Pm(e.type,t,e.props)}function Om(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dm}function $M(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var mb=/\/+/g;function Tm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$M(""+e.key):t.toString(36)}function QM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Am,Am):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function dl(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Dm:case HM:i=!0;break;case hb:return i=e._init,dl(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+Tm(e,0):o,pb(n)?(a="",i!=null&&(a=i.replace(mb,"$&/")+"/"),dl(n,t,a,"",function(u){return u})):n!=null&&(Om(n)&&(n=KM(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(mb,"$&/")+"/")+i)),t.push(n)),1;i=0;var l=o===""?".":o+":";if(pb(e))for(var s=0;s<e.length;s++)o=e[s],r=l+Tm(o,s),i+=dl(o,t,a,r,n);else if(s=WM(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=l+Tm(o,s++),i+=dl(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return dl(QM(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function dc(e,t,a){if(e==null)return e;var o=[],n=0;return dl(e,o,"","",function(r){return t.call(a,r,n++)}),o}function JM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gb=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},e3={map:dc,forEach:function(e,t,a){dc(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return dc(e,function(){t++}),t},toArray:function(e){return dc(e,function(t){return t})||[]},only:function(e){if(!Om(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Activity=ZM;he.Children=e3;he.Component=ul;he.Fragment=FM;he.Profiler=qM;he.PureComponent=Rm;he.StrictMode=UM;he.Suspense=jM;he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return at.H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cacheSignal=function(){return null};he.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=bb({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!yb.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),l=0;l<r;l++)i[l]=arguments[l+2];o.children=i}return Pm(e.type,n,o)};he.createContext=function(e){return e={$$typeof:GM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:VM,_context:e},e};he.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)yb.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return Pm(e,r,n)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:XM,render:e}};he.isValidElement=Om;he.lazy=function(e){return{$$typeof:hb,_payload:{_status:-1,_result:e},_init:JM}};he.memo=function(e,t){return{$$typeof:YM,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=at.T,a={};at.T=a;try{var o=e(),n=at.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Am,gb)}catch(r){gb(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),at.T=t}};he.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()};he.use=function(e){return at.H.use(e)};he.useActionState=function(e,t,a){return at.H.useActionState(e,t,a)};he.useCallback=function(e,t){return at.H.useCallback(e,t)};he.useContext=function(e){return at.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e,t){return at.H.useDeferredValue(e,t)};he.useEffect=function(e,t){return at.H.useEffect(e,t)};he.useEffectEvent=function(e){return at.H.useEffectEvent(e)};he.useId=function(){return at.H.useId()};he.useImperativeHandle=function(e,t,a){return at.H.useImperativeHandle(e,t,a)};he.useInsertionEffect=function(e,t){return at.H.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return at.H.useLayoutEffect(e,t)};he.useMemo=function(e,t){return at.H.useMemo(e,t)};he.useOptimistic=function(e,t){return at.H.useOptimistic(e,t)};he.useReducer=function(e,t,a){return at.H.useReducer(e,t,a)};he.useRef=function(e){return at.H.useRef(e)};he.useState=function(e){return at.H.useState(e)};he.useSyncExternalStore=function(e,t,a){return at.H.useSyncExternalStore(e,t,a)};he.useTransition=function(){return at.H.useTransition()};he.version="19.2.8"});var J=ya((yP,Sb)=>{"use strict";Sb.exports=Cb()});var kb=ya(sa=>{"use strict";var t3=J();function Lb(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rr(){}var la={d:{f:rr,r:function(){throw Error(Lb(522))},D:rr,C:rr,L:rr,m:rr,X:rr,S:rr,M:rr},p:0,findDOMNode:null},a3=Symbol.for("react.portal");function o3(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a3,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Fs=t3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function uc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}sa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=la;sa.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Lb(299));return o3(e,t,null,a)};sa.flushSync=function(e){var t=Fs.T,a=la.p;try{if(Fs.T=null,la.p=2,e)return e()}finally{Fs.T=t,la.p=a,la.d.f()}};sa.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,la.d.C(e,t))};sa.prefetchDNS=function(e){typeof e=="string"&&la.d.D(e)};sa.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=uc(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?la.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&la.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};sa.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=uc(t.as,t.crossOrigin);la.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&la.d.M(e)};sa.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=uc(a,t.crossOrigin);la.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};sa.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=uc(t.as,t.crossOrigin);la.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else la.d.m(e)};sa.requestFormReset=function(e){la.d.r(e)};sa.unstable_batchedUpdates=function(e,t){return e(t)};sa.useFormState=function(e,t,a){return Fs.H.useFormState(e,t,a)};sa.useFormStatus=function(){return Fs.H.useHostTransitionStatus()};sa.version="19.2.8"});var Dt=ya((SP,Ib)=>{"use strict";function _b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_b)}catch(e){console.error(e)}}_b(),Ib.exports=kb()});var H1=ya(Pf=>{"use strict";var Et=cb(),Jw=J(),n3=Dt();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ev(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function tv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function av(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mb(e){if(_d(e)!==e)throw Error(j(188))}function r3(e){var t=e.alternate;if(!t){if(t=_d(e),t===null)throw Error(j(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Mb(n),e;if(r===o)return Mb(n),t;r=r.sibling}throw Error(j(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,l=n.child;l;){if(l===a){i=!0,a=n,o=r;break}if(l===o){i=!0,o=n,a=r;break}l=l.sibling}if(!i){for(l=r.child;l;){if(l===a){i=!0,a=r,o=n;break}if(l===o){i=!0,o=r,a=n;break}l=l.sibling}if(!i)throw Error(j(189))}}if(a.alternate!==o)throw Error(j(190))}if(a.tag!==3)throw Error(j(188));return a.stateNode.current===a?e:t}function ov(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ov(e),t!==null)return t;e=e.sibling}return null}var rt=Object.assign,i3=Symbol.for("react.element"),cc=Symbol.for("react.transitional.element"),Zs=Symbol.for("react.portal"),hl=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),xg=Symbol.for("react.profiler"),rv=Symbol.for("react.consumer"),kn=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),bg=Symbol.for("react.suspense"),wg=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),vg=Symbol.for("react.activity"),l3=Symbol.for("react.memo_cache_sentinel"),Nb=Symbol.iterator;function Us(e){return e===null||typeof e!="object"?null:(e=Nb&&e[Nb]||e["@@iterator"],typeof e=="function"?e:null)}var s3=Symbol.for("react.client.reference");function yg(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===s3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hl:return"Fragment";case xg:return"Profiler";case nv:return"StrictMode";case bg:return"Suspense";case wg:return"SuspenseList";case vg:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Zs:return"Portal";case kn:return e.displayName||"Context";case rv:return(e._context.displayName||"Context")+".Consumer";case fh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ph:return t=e.displayName||null,t!==null?t:yg(e.type)||"Memo";case ir:t=e._payload,e=e._init;try{return yg(e(t))}catch{}}return null}var Ws=Array.isArray,ce=Jw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re=n3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ii={pending:!1,data:null,method:null,action:null},Cg=[],xl=-1;function Jo(e){return{current:e}}function Pt(e){0>xl||(e.current=Cg[xl],Cg[xl]=null,xl--)}function Ke(e,t){xl++,Cg[xl]=e.current,e.current=t}var Qo=Jo(null),fd=Jo(null),xr=Jo(null),Gc=Jo(null);function Xc(e,t){switch(Ke(xr,t),Ke(fd,e),Ke(Qo,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pw(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pw(t),e=k1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Pt(Qo),Ke(Qo,e)}function zl(){Pt(Qo),Pt(fd),Pt(xr)}function Sg(e){e.memoizedState!==null&&Ke(Gc,e);var t=Qo.current,a=k1(t,e.type);t!==a&&(Ke(fd,e),Ke(Qo,a))}function jc(e){fd.current===e&&(Pt(Qo),Pt(fd)),Gc.current===e&&(Pt(Gc),Sd._currentValue=ii)}var Bm,Eb;function ai(e){if(Bm===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Bm=t&&t[1]||"",Eb=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bm+e+Eb}var Hm=!1;function Fm(e,t){if(!e||Hm)return"";Hm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],l=r[1];if(i&&l){var s=i.split(`
`),u=l.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{Hm=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ai(a):""}function d3(e,t){switch(e.tag){case 26:case 27:case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return e.child!==t&&t!==null?ai("Suspense Fallback"):ai("Suspense");case 19:return ai("SuspenseList");case 0:case 15:return Fm(e.type,!1);case 11:return Fm(e.type.render,!1);case 1:return Fm(e.type,!0);case 31:return ai("Activity");default:return""}}function Tb(e){try{var t="",a=null;do t+=d3(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Lg=Object.prototype.hasOwnProperty,mh=Et.unstable_scheduleCallback,Um=Et.unstable_cancelCallback,u3=Et.unstable_shouldYield,c3=Et.unstable_requestPaint,qa=Et.unstable_now,f3=Et.unstable_getCurrentPriorityLevel,iv=Et.unstable_ImmediatePriority,lv=Et.unstable_UserBlockingPriority,Yc=Et.unstable_NormalPriority,p3=Et.unstable_LowPriority,sv=Et.unstable_IdlePriority,m3=Et.log,g3=Et.unstable_setDisableYieldValue,Id=null,Va=null;function fr(e){if(typeof m3=="function"&&g3(e),Va&&typeof Va.setStrictMode=="function")try{Va.setStrictMode(Id,e)}catch{}}var Ga=Math.clz32?Math.clz32:b3,h3=Math.log,x3=Math.LN2;function b3(e){return e>>>=0,e===0?32:31-(h3(e)/x3|0)|0}var fc=256,pc=262144,mc=4194304;function oi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vf(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=o&134217727;return l!==0?(o=l&~r,o!==0?n=oi(o):(i&=l,i!==0?n=oi(i):a||(a=l&~e,a!==0&&(n=oi(a))))):(l=o&~r,l!==0?n=oi(l):i!==0?n=oi(i):a||(a=o&~e,a!==0&&(n=oi(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Md(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function w3(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(){var e=mc;return mc<<=1,(mc&62914560)===0&&(mc=4194304),e}function qm(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nd(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function v3(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-Ga(a),f=1<<d;l[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&uv(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function uv(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ga(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function cv(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ga(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function fv(e,t){var a=t&-t;return a=(a&42)!==0?1:gh(a),(a&(e.suspendedLanes|t))!==0?0:a}function gh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pv(){var e=Re.p;return e!==0?e:(e=window.event,e===void 0?32:P1(e.type))}function Ab(e,t){var a=Re.p;try{return Re.p=e,t()}finally{Re.p=a}}var Er=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Er,Ia="__reactProps$"+Er,jl="__reactContainer$"+Er,kg="__reactEvents$"+Er,y3="__reactListeners$"+Er,C3="__reactHandles$"+Er,Db="__reactResources$"+Er,Ed="__reactMarker$"+Er;function xh(e){delete e[Xt],delete e[Ia],delete e[kg],delete e[y3],delete e[C3]}function bl(e){var t=e[Xt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[jl]||a[Xt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Uw(e);e!==null;){if(a=e[Xt])return a;e=Uw(e)}return t}e=a,a=e.parentNode}return null}function Yl(e){if(e=e[Xt]||e[jl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ks(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function Ml(e){var t=e[Db];return t||(t=e[Db]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function zt(e){e[Ed]=!0}var mv=new Set,gv={};function hi(e,t){Pl(e,t),Pl(e+"Capture",t)}function Pl(e,t){for(gv[e]=t,e=0;e<t.length;e++)mv.add(t[e])}var S3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rb={},zb={};function L3(e){return Lg.call(zb,e)?!0:Lg.call(Rb,e)?!1:S3.test(e)?zb[e]=!0:(Rb[e]=!0,!1)}function Nc(e,t,a){if(L3(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function gc(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function bn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function lo(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k3(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _g(e){if(!e._valueTracker){var t=hv(e)?"checked":"value";e._valueTracker=k3(e,t,""+e[t])}}function xv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=hv(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Zc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _3=/[\n"\\]/g;function co(e){return e.replace(_3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ig(e,t,a,o,n,r,i,l){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+lo(t)):e.value!==""+lo(t)&&(e.value=""+lo(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Mg(e,i,lo(t)):a!=null?Mg(e,i,lo(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+lo(l):e.removeAttribute("name")}function bv(e,t,a,o,n,r,i,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){_g(e);return}a=a!=null?""+lo(a):"",t=t!=null?""+lo(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=l?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),_g(e)}function Mg(e,t,a){t==="number"&&Zc(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Nl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+lo(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function wv(e,t,a){if(t!=null&&(t=""+lo(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+lo(a):""}function vv(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(j(92));if(Ws(o)){if(1<o.length)throw Error(j(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=lo(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),_g(e)}function Ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var I3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pb(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||I3.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yv(e,t,a){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Pb(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Pb(e,r,t[r])}function bh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ec(e){return N3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _n(){}var Ng=null;function wh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,El=null;function Ob(e){var t=Yl(e);if(t&&(e=t.stateNode)){var a=e[Ia]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ig(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+co(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Ia]||null;if(!n)throw Error(j(90));Ig(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&xv(o)}break e;case"textarea":wv(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Nl(e,!!a.multiple,t,!1)}}}var Vm=!1;function Cv(e,t,a){if(Vm)return e(t,a);Vm=!0;try{var o=e(t);return o}finally{if(Vm=!1,(wl!==null||El!==null)&&(Af(),wl&&(t=wl,e=El,El=wl=null,Ob(t),e)))for(t=0;t<e.length;t++)Ob(e[t])}}function pd(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Ia]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(j(231,t,typeof a));return a}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eg=!1;if(Tn)try{cl={},Object.defineProperty(cl,"passive",{get:function(){Eg=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{Eg=!1}var cl,pr=null,vh=null,Tc=null;function Sv(){if(Tc)return Tc;var e,t=vh,a=t.length,o,n="value"in pr?pr.value:pr.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Tc=n.slice(e,1<o?1-o:void 0)}function Ac(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hc(){return!0}function Bb(){return!1}function Ma(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hc:Bb,this.isPropagationStopped=Bb,this}return rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hc)},persist:function(){},isPersistent:hc}),t}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=Ma(xi),Td=rt({},xi,{view:0,detail:0}),E3=Ma(Td),Gm,Xm,qs,Cf=rt({},Td,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(Gm=e.screenX-qs.screenX,Xm=e.screenY-qs.screenY):Xm=Gm=0,qs=e),Gm)},movementY:function(e){return"movementY"in e?e.movementY:Xm}}),Hb=Ma(Cf),T3=rt({},Cf,{dataTransfer:0}),A3=Ma(T3),D3=rt({},Td,{relatedTarget:0}),jm=Ma(D3),R3=rt({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),z3=Ma(R3),P3=rt({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O3=Ma(P3),B3=rt({},xi,{data:0}),Fb=Ma(B3),H3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=U3[e])?!!t[e]:!1}function yh(){return q3}var V3=rt({},Td,{key:function(e){if(e.key){var t=H3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ac(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(e){return e.type==="keypress"?Ac(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ac(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G3=Ma(V3),X3=rt({},Cf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ub=Ma(X3),j3=rt({},Td,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),Y3=Ma(j3),Z3=rt({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),W3=Ma(Z3),K3=rt({},Cf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$3=Ma(K3),Q3=rt({},xi,{newState:0,oldState:0}),J3=Ma(Q3),eN=[9,13,27,32],Ch=Tn&&"CompositionEvent"in window,Js=null;Tn&&"documentMode"in document&&(Js=document.documentMode);var tN=Tn&&"TextEvent"in window&&!Js,Lv=Tn&&(!Ch||Js&&8<Js&&11>=Js),qb=" ",Vb=!1;function kv(e,t){switch(e){case"keyup":return eN.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _v(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vl=!1;function aN(e,t){switch(e){case"compositionend":return _v(t);case"keypress":return t.which!==32?null:(Vb=!0,qb);case"textInput":return e=t.data,e===qb&&Vb?null:e;default:return null}}function oN(e,t){if(vl)return e==="compositionend"||!Ch&&kv(e,t)?(e=Sv(),Tc=vh=pr=null,vl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lv&&t.locale!=="ko"?null:t.data;default:return null}}var nN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nN[e.type]:t==="textarea"}function Iv(e,t,a,o){wl?El?El.push(o):El=[o]:wl=o,t=pf(t,"onChange"),0<t.length&&(a=new yf("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var ed=null,md=null;function rN(e){C1(e,0)}function Sf(e){var t=Ks(e);if(xv(t))return e}function Xb(e,t){if(e==="change")return t}var Mv=!1;Tn&&(Tn?(bc="oninput"in document,bc||(Ym=document.createElement("div"),Ym.setAttribute("oninput","return;"),bc=typeof Ym.oninput=="function"),xc=bc):xc=!1,Mv=xc&&(!document.documentMode||9<document.documentMode));var xc,bc,Ym;function jb(){ed&&(ed.detachEvent("onpropertychange",Nv),md=ed=null)}function Nv(e){if(e.propertyName==="value"&&Sf(md)){var t=[];Iv(t,md,e,wh(e)),Cv(rN,t)}}function iN(e,t,a){e==="focusin"?(jb(),ed=t,md=a,ed.attachEvent("onpropertychange",Nv)):e==="focusout"&&jb()}function lN(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sf(md)}function sN(e,t){if(e==="click")return Sf(t)}function dN(e,t){if(e==="input"||e==="change")return Sf(t)}function uN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ja=typeof Object.is=="function"?Object.is:uN;function gd(e,t){if(ja(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Lg.call(t,n)||!ja(e[n],t[n]))return!1}return!0}function Yb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zb(e,t){var a=Yb(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yb(a)}}function Ev(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ev(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zc(e.document)}return t}function Sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cN=Tn&&"documentMode"in document&&11>=document.documentMode,yl=null,Tg=null,td=null,Ag=!1;function Wb(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ag||yl==null||yl!==Zc(o)||(o=yl,"selectionStart"in o&&Sh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),td&&gd(td,o)||(td=o,o=pf(Tg,"onSelect"),0<o.length&&(t=new yf("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=yl)))}function ti(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Cl={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionrun:ti("Transition","TransitionRun"),transitionstart:ti("Transition","TransitionStart"),transitioncancel:ti("Transition","TransitionCancel"),transitionend:ti("Transition","TransitionEnd")},Zm={},Av={};Tn&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete Cl.animationend.animation,delete Cl.animationiteration.animation,delete Cl.animationstart.animation),"TransitionEvent"in window||delete Cl.transitionend.transition);function bi(e){if(Zm[e])return Zm[e];if(!Cl[e])return e;var t=Cl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Av)return Zm[e]=t[a];return e}var Dv=bi("animationend"),Rv=bi("animationiteration"),zv=bi("animationstart"),fN=bi("transitionrun"),pN=bi("transitionstart"),mN=bi("transitioncancel"),Pv=bi("transitionend"),Ov=new Map,Dg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dg.push("scrollEnd");function Mo(e,t){Ov.set(e,t),hi(t,[e])}var Wc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},io=[],Sl=0,Lh=0;function Lf(){for(var e=Sl,t=Lh=Sl=0;t<e;){var a=io[t];io[t++]=null;var o=io[t];io[t++]=null;var n=io[t];io[t++]=null;var r=io[t];if(io[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&Bv(a,n,r)}}function kf(e,t,a,o){io[Sl++]=e,io[Sl++]=t,io[Sl++]=a,io[Sl++]=o,Lh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function kh(e,t,a,o){return kf(e,t,a,o),Kc(e)}function wi(e,t){return kf(e,null,null,t),Kc(e)}function Bv(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Ga(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function Kc(e){if(50<ud)throw ud=0,eh=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ll={};function gN(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fa(e,t,a,o){return new gN(e,t,a,o)}function _h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mn(e,t){var a=e.alternate;return a===null?(a=Fa(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hv(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dc(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")_h(e)&&(i=1);else if(typeof e=="string")i=b4(e,a,Qo.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case vg:return e=Fa(31,a,t,n),e.elementType=vg,e.lanes=r,e;case hl:return li(a.children,n,r,t);case nv:i=8,n|=24;break;case xg:return e=Fa(12,a,t,n|2),e.elementType=xg,e.lanes=r,e;case bg:return e=Fa(13,a,t,n),e.elementType=bg,e.lanes=r,e;case wg:return e=Fa(19,a,t,n),e.elementType=wg,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kn:i=10;break e;case rv:i=9;break e;case fh:i=11;break e;case ph:i=14;break e;case ir:i=16,o=null;break e}i=29,a=Error(j(130,e===null?"null":typeof e,"")),o=null}return t=Fa(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function li(e,t,a,o){return e=Fa(7,e,o,t),e.lanes=a,e}function Wm(e,t,a){return e=Fa(6,e,null,t),e.lanes=a,e}function Fv(e){var t=Fa(18,null,null,0);return t.stateNode=e,t}function Km(e,t,a){return t=Fa(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kb=new WeakMap;function fo(e,t){if(typeof e=="object"&&e!==null){var a=Kb.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Tb(t)},Kb.set(e,t),t)}return{value:e,source:t,stack:Tb(t)}}var kl=[],_l=0,$c=null,hd=0,so=[],uo=0,_r=null,Wo=1,Ko="";function Sn(e,t){kl[_l++]=hd,kl[_l++]=$c,$c=e,hd=t}function Uv(e,t,a){so[uo++]=Wo,so[uo++]=Ko,so[uo++]=_r,_r=e;var o=Wo;e=Ko;var n=32-Ga(o)-1;o&=~(1<<n),a+=1;var r=32-Ga(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,Wo=1<<32-Ga(t)+n|a<<n|o,Ko=r+e}else Wo=1<<r|a<<n|o,Ko=e}function Ih(e){e.return!==null&&(Sn(e,1),Uv(e,1,0))}function Mh(e){for(;e===$c;)$c=kl[--_l],kl[_l]=null,hd=kl[--_l],kl[_l]=null;for(;e===_r;)_r=so[--uo],so[uo]=null,Ko=so[--uo],so[uo]=null,Wo=so[--uo],so[uo]=null}function qv(e,t){so[uo++]=Wo,so[uo++]=Ko,so[uo++]=_r,Wo=t.id,Ko=t.overflow,_r=e}var jt=null,nt=null,Me=!1,br=null,po=!1,Rg=Error(j(519));function Ir(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xd(fo(t,e)),Rg}function $b(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Xt]=e,t[Ia]=o,a){case"dialog":Le("cancel",t),Le("close",t);break;case"iframe":case"object":case"embed":Le("load",t);break;case"video":case"audio":for(a=0;a<yd.length;a++)Le(yd[a],t);break;case"source":Le("error",t);break;case"img":case"image":case"link":Le("error",t),Le("load",t);break;case"details":Le("toggle",t);break;case"input":Le("invalid",t),bv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Le("invalid",t);break;case"textarea":Le("invalid",t),vv(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||L1(t.textContent,a)?(o.popover!=null&&(Le("beforetoggle",t),Le("toggle",t)),o.onScroll!=null&&Le("scroll",t),o.onScrollEnd!=null&&Le("scrollend",t),o.onClick!=null&&(t.onclick=_n),t=!0):t=!1,t||Ir(e,!0)}function Qb(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:po=!1;return;case 27:case 3:po=!0;return;default:jt=jt.return}}function fl(e){if(e!==jt)return!1;if(!Me)return Qb(e),Me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rh(e.type,e.memoizedProps)),a=!a),a&&nt&&Ir(e),Qb(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));nt=Fw(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));nt=Fw(e)}else t===27?(t=nt,Tr(e.type)?(e=dh,dh=null,nt=e):nt=t):nt=jt?go(e.stateNode.nextSibling):null;return!0}function ci(){nt=jt=null,Me=!1}function $m(){var e=br;return e!==null&&(ka===null?ka=e:ka.push.apply(ka,e),br=null),e}function xd(e){br===null?br=[e]:br.push(e)}var zg=Jo(null),vi=null,In=null;function sr(e,t,a){Ke(zg,t._currentValue),t._currentValue=a}function Nn(e){e._currentValue=zg.current,Pt(zg)}function Pg(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Og(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var l=r;r=n;for(var s=0;s<t.length;s++)if(l.context===t[s]){r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Pg(r.return,a,e),o||(i=null);break e}r=l.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(j(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Pg(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Zl(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(j(387));if(i=i.memoizedProps,i!==null){var l=n.type;ja(n.pendingProps.value,i.value)||(e!==null?e.push(l):e=[l])}}else if(n===Gc.current){if(i=n.alternate,i===null)throw Error(j(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Sd):e=[Sd])}n=n.return}e!==null&&Og(t,e,a,o),t.flags|=262144}function Qc(e){for(e=e.firstContext;e!==null;){if(!ja(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fi(e){vi=e,In=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Yt(e){return Vv(vi,e)}function wc(e,t){return vi===null&&fi(e),Vv(e,t)}function Vv(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},In===null){if(e===null)throw Error(j(308));In=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else In=In.next=t;return a}var hN=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xN=Et.unstable_scheduleCallback,bN=Et.unstable_NormalPriority,Ct={$$typeof:kn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nh(){return{controller:new hN,data:new Map,refCount:0}}function Ad(e){e.refCount--,e.refCount===0&&xN(bN,function(){e.controller.abort()})}var ad=null,Bg=0,Bl=0,Tl=null;function wN(e,t){if(ad===null){var a=ad=[];Bg=0,Bl=ex(),Tl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bg++,t.then(Jb,Jb),t}function Jb(){if(--Bg===0&&ad!==null){Tl!==null&&(Tl.status="fulfilled");var e=ad;ad=null,Bl=0,Tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vN(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var ew=ce.S;ce.S=function(e,t){o1=qa(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wN(e,t),ew!==null&&ew(e,t)};var si=Jo(null);function Eh(){var e=si.current;return e!==null?e:Ye.pooledCache}function Rc(e,t){t===null?Ke(si,si.current):Ke(si,t.pool)}function Gv(){var e=Eh();return e===null?null:{parent:Ct._currentValue,pool:e}}var Wl=Error(j(460)),Th=Error(j(474)),_f=Error(j(542)),Jc={then:function(){}};function tw(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xv(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(_n,_n),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ow(e),e;default:if(typeof t.status=="string")t.then(_n,_n);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ow(e),e}throw di=t,Wl}}function ni(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(di=a,Wl):a}}var di=null;function aw(){if(di===null)throw Error(j(459));var e=di;return di=null,e}function ow(e){if(e===Wl||e===_f)throw Error(j(483))}var Al=null,bd=0;function vc(e){var t=bd;return bd+=1,Al===null&&(Al=[]),Xv(Al,e,t)}function Vs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yc(e,t){throw t.$$typeof===i3?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jv(e){function t(g,b){if(e){var m=g.deletions;m===null?(g.deletions=[b],g.flags|=16):m.push(b)}}function a(g,b){if(!e)return null;for(;b!==null;)t(g,b),b=b.sibling;return null}function o(g){for(var b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function n(g,b){return g=Mn(g,b),g.index=0,g.sibling=null,g}function r(g,b,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<b?(g.flags|=67108866,b):m):(g.flags|=67108866,b)):(g.flags|=1048576,b)}function i(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function l(g,b,m,x){return b===null||b.tag!==6?(b=Wm(m,g.mode,x),b.return=g,b):(b=n(b,m),b.return=g,b)}function s(g,b,m,x){var S=m.type;return S===hl?d(g,b,m.props.children,x,m.key):b!==null&&(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ir&&ni(S)===b.type)?(b=n(b,m.props),Vs(b,m),b.return=g,b):(b=Dc(m.type,m.key,m.props,null,g.mode,x),Vs(b,m),b.return=g,b)}function u(g,b,m,x){return b===null||b.tag!==4||b.stateNode.containerInfo!==m.containerInfo||b.stateNode.implementation!==m.implementation?(b=Km(m,g.mode,x),b.return=g,b):(b=n(b,m.children||[]),b.return=g,b)}function d(g,b,m,x,S){return b===null||b.tag!==7?(b=li(m,g.mode,x,S),b.return=g,b):(b=n(b,m),b.return=g,b)}function f(g,b,m){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Wm(""+b,g.mode,m),b.return=g,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case cc:return m=Dc(b.type,b.key,b.props,null,g.mode,m),Vs(m,b),m.return=g,m;case Zs:return b=Km(b,g.mode,m),b.return=g,b;case ir:return b=ni(b),f(g,b,m)}if(Ws(b)||Us(b))return b=li(b,g.mode,m,null),b.return=g,b;if(typeof b.then=="function")return f(g,vc(b),m);if(b.$$typeof===kn)return f(g,wc(g,b),m);yc(g,b)}return null}function c(g,b,m,x){var S=b!==null?b.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return S!==null?null:l(g,b,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cc:return m.key===S?s(g,b,m,x):null;case Zs:return m.key===S?u(g,b,m,x):null;case ir:return m=ni(m),c(g,b,m,x)}if(Ws(m)||Us(m))return S!==null?null:d(g,b,m,x,null);if(typeof m.then=="function")return c(g,b,vc(m),x);if(m.$$typeof===kn)return c(g,b,wc(g,m),x);yc(g,m)}return null}function p(g,b,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return g=g.get(m)||null,l(b,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cc:return g=g.get(x.key===null?m:x.key)||null,s(b,g,x,S);case Zs:return g=g.get(x.key===null?m:x.key)||null,u(b,g,x,S);case ir:return x=ni(x),p(g,b,m,x,S)}if(Ws(x)||Us(x))return g=g.get(m)||null,d(b,g,x,S,null);if(typeof x.then=="function")return p(g,b,m,vc(x),S);if(x.$$typeof===kn)return p(g,b,m,wc(b,x),S);yc(b,x)}return null}function h(g,b,m,x){for(var S=null,y=null,C=b,L=b=0,_=null;C!==null&&L<m.length;L++){C.index>L?(_=C,C=null):_=C.sibling;var T=c(g,C,m[L],x);if(T===null){C===null&&(C=_);break}e&&C&&T.alternate===null&&t(g,C),b=r(T,b,L),y===null?S=T:y.sibling=T,y=T,C=_}if(L===m.length)return a(g,C),Me&&Sn(g,L),S;if(C===null){for(;L<m.length;L++)C=f(g,m[L],x),C!==null&&(b=r(C,b,L),y===null?S=C:y.sibling=C,y=C);return Me&&Sn(g,L),S}for(C=o(C);L<m.length;L++)_=p(C,g,L,m[L],x),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?L:_.key),b=r(_,b,L),y===null?S=_:y.sibling=_,y=_);return e&&C.forEach(function(A){return t(g,A)}),Me&&Sn(g,L),S}function w(g,b,m,x){if(m==null)throw Error(j(151));for(var S=null,y=null,C=b,L=b=0,_=null,T=m.next();C!==null&&!T.done;L++,T=m.next()){C.index>L?(_=C,C=null):_=C.sibling;var A=c(g,C,T.value,x);if(A===null){C===null&&(C=_);break}e&&C&&A.alternate===null&&t(g,C),b=r(A,b,L),y===null?S=A:y.sibling=A,y=A,C=_}if(T.done)return a(g,C),Me&&Sn(g,L),S;if(C===null){for(;!T.done;L++,T=m.next())T=f(g,T.value,x),T!==null&&(b=r(T,b,L),y===null?S=T:y.sibling=T,y=T);return Me&&Sn(g,L),S}for(C=o(C);!T.done;L++,T=m.next())T=p(C,g,L,T.value,x),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?L:T.key),b=r(T,b,L),y===null?S=T:y.sibling=T,y=T);return e&&C.forEach(function(H){return t(g,H)}),Me&&Sn(g,L),S}function v(g,b,m,x){if(typeof m=="object"&&m!==null&&m.type===hl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cc:e:{for(var S=m.key;b!==null;){if(b.key===S){if(S=m.type,S===hl){if(b.tag===7){a(g,b.sibling),x=n(b,m.props.children),x.return=g,g=x;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ir&&ni(S)===b.type){a(g,b.sibling),x=n(b,m.props),Vs(x,m),x.return=g,g=x;break e}a(g,b);break}else t(g,b);b=b.sibling}m.type===hl?(x=li(m.props.children,g.mode,x,m.key),x.return=g,g=x):(x=Dc(m.type,m.key,m.props,null,g.mode,x),Vs(x,m),x.return=g,g=x)}return i(g);case Zs:e:{for(S=m.key;b!==null;){if(b.key===S)if(b.tag===4&&b.stateNode.containerInfo===m.containerInfo&&b.stateNode.implementation===m.implementation){a(g,b.sibling),x=n(b,m.children||[]),x.return=g,g=x;break e}else{a(g,b);break}else t(g,b);b=b.sibling}x=Km(m,g.mode,x),x.return=g,g=x}return i(g);case ir:return m=ni(m),v(g,b,m,x)}if(Ws(m))return h(g,b,m,x);if(Us(m)){if(S=Us(m),typeof S!="function")throw Error(j(150));return m=S.call(m),w(g,b,m,x)}if(typeof m.then=="function")return v(g,b,vc(m),x);if(m.$$typeof===kn)return v(g,b,wc(g,m),x);yc(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,b!==null&&b.tag===6?(a(g,b.sibling),x=n(b,m),x.return=g,g=x):(a(g,b),x=Wm(m,g.mode,x),x.return=g,g=x),i(g)):a(g,b)}return function(g,b,m,x){try{bd=0;var S=v(g,b,m,x);return Al=null,S}catch(C){if(C===Wl||C===_f)throw C;var y=Fa(29,C,null,g.mode);return y.lanes=x,y.return=g,y}}}var pi=jv(!0),Yv=jv(!1),lr=!1;function Ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=Kc(e),Bv(e,null,a),t}return kf(e,o,t,a),Kc(e)}function od(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,cv(e,a)}}function Qm(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Fg=!1;function nd(){if(Fg){var e=Tl;if(e!==null)throw e}}function rd(e,t,a,o){Fg=!1;var n=e.updateQueue;lr=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?r=u:i.next=u,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;i=0,d=u=s=null,l=r;do{var c=l.lane&-536870913,p=c!==l.lane;if(p?(Ie&c)===c:(o&c)===c){c!==0&&c===Bl&&(Fg=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,w=l;c=t;var v=a;switch(w.tag){case 1:if(h=w.payload,typeof h=="function"){f=h.call(v,f,c);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=w.payload,c=typeof h=="function"?h.call(v,f,c):h,c==null)break e;f=rt({},f,c);break e;case 2:lr=!0}}c=l.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=f):d=d.next=p,i|=c;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;p=l,l=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),Nr|=i,e.lanes=i,e.memoizedState=f}}function Zv(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function Wv(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zv(a[e],t)}var Hl=Jo(null),ef=Jo(0);function nw(e,t){e=zn,Ke(ef,e),Ke(Hl,t),zn=e|t.baseLanes}function Ug(){Ke(ef,zn),Ke(Hl,Hl.current)}function Dh(){zn=ef.current,Pt(Hl),Pt(ef)}var Ya=Jo(null),mo=null;function dr(e){var t=e.alternate;Ke(bt,bt.current&1),Ke(Ya,e),mo===null&&(t===null||Hl.current!==null||t.memoizedState!==null)&&(mo=e)}function qg(e){Ke(bt,bt.current),Ke(Ya,e),mo===null&&(mo=e)}function Kv(e){e.tag===22?(Ke(bt,bt.current),Ke(Ya,e),mo===null&&(mo=e)):ur(e)}function ur(){Ke(bt,bt.current),Ke(Ya,Ya.current)}function Ha(e){Pt(Ya),mo===e&&(mo=null),Pt(bt)}var bt=Jo(0);function tf(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||sh(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var An=0,xe=null,Ve=null,vt=null,af=!1,Dl=!1,mi=!1,of=0,wd=0,Rl=null,yN=0;function ft(){throw Error(j(321))}function Rh(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ja(e[a],t[a]))return!1;return!0}function zh(e,t,a,o,n,r){return An=r,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ce.H=e===null||e.memoizedState===null?Iy:jh,mi=!1,r=a(o,n),mi=!1,Dl&&(r=Qv(t,a,o,n)),$v(e),r}function $v(e){ce.H=vd;var t=Ve!==null&&Ve.next!==null;if(An=0,vt=Ve=xe=null,af=!1,wd=0,Rl=null,t)throw Error(j(300));e===null||St||(e=e.dependencies,e!==null&&Qc(e)&&(St=!0))}function Qv(e,t,a,o){xe=e;var n=0;do{if(Dl&&(Rl=null),wd=0,Dl=!1,25<=n)throw Error(j(301));if(n+=1,vt=Ve=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}ce.H=My,r=t(a,o)}while(Dl);return r}function CN(){var e=ce.H,t=e.useState()[0];return t=typeof t.then=="function"?Dd(t):t,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(xe.flags|=1024),t}function Ph(){var e=of!==0;return of=0,e}function Oh(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bh(e){if(af){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}af=!1}An=0,vt=Ve=xe=null,Dl=!1,wd=of=0,Rl=null}function da(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?xe.memoizedState=vt=e:vt=vt.next=e,vt}function wt(){if(Ve===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=vt===null?xe.memoizedState:vt.next;if(t!==null)vt=t,Ve=e;else{if(e===null)throw xe.alternate===null?Error(j(467)):Error(j(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},vt===null?xe.memoizedState=vt=e:vt=vt.next=e}return vt}function If(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dd(e){var t=wd;return wd+=1,Rl===null&&(Rl=[]),e=Xv(Rl,e,t),t=xe,(vt===null?t.memoizedState:vt.next)===null&&(t=t.alternate,ce.H=t===null||t.memoizedState===null?Iy:jh),e}function Mf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dd(e);if(e.$$typeof===kn)return Yt(e)}throw Error(j(438,String(e)))}function Hh(e){var t=null,a=xe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=If(),xe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=l3;return t.index++,a}function Dn(e,t){return typeof t=="function"?t(e):t}function zc(e){var t=wt();return Fh(t,Ve,e)}function Fh(e,t,a){var o=e.queue;if(o===null)throw Error(j(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var l=i=null,s=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Ie&f)===f:(An&f)===f){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Bl&&(d=!0);else if((An&c)===c){u=u.next,c===Bl&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=f,i=r):s=s.next=f,xe.lanes|=c,Nr|=c;f=u.action,mi&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=c,i=r):s=s.next=c,xe.lanes|=f,Nr|=f;u=u.next}while(u!==null&&u!==t);if(s===null?i=r:s.next=l,!ja(r,e.memoizedState)&&(St=!0,d&&(a=Tl,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Jm(e){var t=wt(),a=t.queue;if(a===null)throw Error(j(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);ja(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function Jv(e,t,a){var o=xe,n=wt(),r=Me;if(r){if(a===void 0)throw Error(j(407));a=a()}else a=t();var i=!ja((Ve||n).memoizedState,a);if(i&&(n.memoizedState=a,St=!0),n=n.queue,Uh(ay.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,Fl(9,{destroy:void 0},ty.bind(null,o,n,a,t),null),Ye===null)throw Error(j(349));r||(An&127)!==0||ey(o,t,a)}return a}function ey(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=xe.updateQueue,t===null?(t=If(),xe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ty(e,t,a,o){t.value=a,t.getSnapshot=o,oy(t)&&ny(e)}function ay(e,t,a){return a(function(){oy(t)&&ny(e)})}function oy(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ja(e,a)}catch{return!0}}function ny(e){var t=wi(e,2);t!==null&&_a(t,e,2)}function Vg(e){var t=da();if(typeof e=="function"){var a=e;if(e=a(),mi){fr(!0);try{a()}finally{fr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},t}function ry(e,t,a,o){return e.baseState=a,Fh(e,Ve,typeof o=="function"?o:Dn)}function SN(e,t,a,o,n){if(Ef(e))throw Error(j(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};ce.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,iy(t,r)):(r.next=a.next,t.pending=a.next=r)}}function iy(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=ce.T,i={};ce.T=i;try{var l=a(n,o),s=ce.S;s!==null&&s(i,l),rw(e,t,l)}catch(u){Gg(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),ce.T=r}}else try{r=a(n,o),rw(e,t,r)}catch(u){Gg(e,t,u)}}function rw(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){iw(e,t,o)},function(o){return Gg(e,t,o)}):iw(e,t,a)}function iw(e,t,a){t.status="fulfilled",t.value=a,ly(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,iy(e,a)))}function Gg(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,ly(t),t=t.next;while(t!==o)}e.action=null}function ly(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sy(e,t){return t}function lw(e,t){if(Me){var a=Ye.formState;if(a!==null){e:{var o=xe;if(Me){if(nt){t:{for(var n=nt,r=po;n.nodeType!==8;){if(!r){n=null;break t}if(n=go(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){nt=go(n.nextSibling),o=n.data==="F!";break e}}Ir(o)}o=!1}o&&(t=a[0])}}return a=da(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sy,lastRenderedState:t},a.queue=o,a=Ly.bind(null,xe,o),o.dispatch=a,o=Vg(!1),r=Xh.bind(null,xe,!1,o.queue),o=da(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=SN.bind(null,xe,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function sw(e){var t=wt();return dy(t,Ve,e)}function dy(e,t,a){if(t=Fh(e,t,sy)[0],e=zc(Dn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Dd(t)}catch(i){throw i===Wl?_f:i}else o=t;t=wt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(xe.flags|=2048,Fl(9,{destroy:void 0},LN.bind(null,n,a),null)),[o,r,e]}function LN(e,t){e.action=t}function dw(e){var t=wt(),a=Ve;if(a!==null)return dy(t,a,e);wt(),t=t.memoizedState,a=wt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Fl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=xe.updateQueue,t===null&&(t=If(),xe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function uy(){return wt().memoizedState}function Pc(e,t,a,o){var n=da();xe.flags|=e,n.memoizedState=Fl(1|t,{destroy:void 0},a,o===void 0?null:o)}function Nf(e,t,a,o){var n=wt();o=o===void 0?null:o;var r=n.memoizedState.inst;Ve!==null&&o!==null&&Rh(o,Ve.memoizedState.deps)?n.memoizedState=Fl(t,r,a,o):(xe.flags|=e,n.memoizedState=Fl(1|t,r,a,o))}function uw(e,t){Pc(8390656,8,e,t)}function Uh(e,t){Nf(2048,8,e,t)}function kN(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=If(),xe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function cy(e){var t=wt().memoizedState;return kN({ref:t,nextImpl:e}),function(){if((De&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function fy(e,t){return Nf(4,2,e,t)}function py(e,t){return Nf(4,4,e,t)}function my(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gy(e,t,a){a=a!=null?a.concat([e]):null,Nf(4,4,my.bind(null,t,e),a)}function qh(){}function hy(e,t){var a=wt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Rh(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function xy(e,t){var a=wt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Rh(t,o[1]))return o[0];if(o=e(),mi){fr(!0);try{e()}finally{fr(!1)}}return a.memoizedState=[o,t],o}function Vh(e,t,a){return a===void 0||(An&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=r1(),xe.lanes|=e,Nr|=e,a)}function by(e,t,a,o){return ja(a,t)?a:Hl.current!==null?(e=Vh(e,a,o),ja(e,t)||(St=!0),e):(An&42)===0||(An&1073741824)!==0&&(Ie&261930)===0?(St=!0,e.memoizedState=a):(e=r1(),xe.lanes|=e,Nr|=e,t)}function wy(e,t,a,o,n){var r=Re.p;Re.p=r!==0&&8>r?r:8;var i=ce.T,l={};ce.T=l,Xh(e,!1,t,a);try{var s=n(),u=ce.S;if(u!==null&&u(l,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=vN(s,o);id(e,t,d,Xa(e))}else id(e,t,o,Xa(e))}catch(f){id(e,t,{then:function(){},status:"rejected",reason:f},Xa())}finally{Re.p=r,i!==null&&l.types!==null&&(i.types=l.types),ce.T=i}}function _N(){}function Xg(e,t,a,o){if(e.tag!==5)throw Error(j(476));var n=vy(e).queue;wy(e,n,t,ii,a===null?_N:function(){return yy(e),a(o)})}function vy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ii,baseState:ii,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:ii},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yy(e){var t=vy(e);t.next===null&&(t=e.alternate.memoizedState),id(e,t.next.queue,{},Xa())}function Gh(){return Yt(Sd)}function Cy(){return wt().memoizedState}function Sy(){return wt().memoizedState}function IN(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Xa();e=wr(a);var o=vr(t,e,a);o!==null&&(_a(o,t,a),od(o,t,a)),t={cache:Nh()},e.payload=t;return}t=t.return}}function MN(e,t,a){var o=Xa();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ef(e)?ky(t,a):(a=kh(e,t,a,o),a!==null&&(_a(a,e,o),_y(a,t,o)))}function Ly(e,t,a){var o=Xa();id(e,t,a,o)}function id(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ef(e))ky(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,l=r(i,a);if(n.hasEagerState=!0,n.eagerState=l,ja(l,i))return kf(e,t,n,0),Ye===null&&Lf(),!1}catch{}if(a=kh(e,t,n,o),a!==null)return _a(a,e,o),_y(a,t,o),!0}return!1}function Xh(e,t,a,o){if(o={lane:2,revertLane:ex(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ef(e)){if(t)throw Error(j(479))}else t=kh(e,a,o,2),t!==null&&_a(t,e,2)}function Ef(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function ky(e,t){Dl=af=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _y(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,cv(e,a)}}var vd={readContext:Yt,use:Mf,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};vd.useEffectEvent=ft;var Iy={readContext:Yt,use:Mf,useCallback:function(e,t){return da().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:uw,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Pc(4194308,4,my.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Pc(4194308,4,e,t)},useInsertionEffect:function(e,t){Pc(4,2,e,t)},useMemo:function(e,t){var a=da();t=t===void 0?null:t;var o=e();if(mi){fr(!0);try{e()}finally{fr(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=da();if(a!==void 0){var n=a(t);if(mi){fr(!0);try{a(t)}finally{fr(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=MN.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var t=da();return e={current:e},t.memoizedState=e},useState:function(e){e=Vg(e);var t=e.queue,a=Ly.bind(null,xe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:qh,useDeferredValue:function(e,t){var a=da();return Vh(a,e,t)},useTransition:function(){var e=Vg(!1);return e=wy.bind(null,xe,e.queue,!0,!1),da().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=xe,n=da();if(Me){if(a===void 0)throw Error(j(407));a=a()}else{if(a=t(),Ye===null)throw Error(j(349));(Ie&127)!==0||ey(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,uw(ay.bind(null,o,r,e),[e]),o.flags|=2048,Fl(9,{destroy:void 0},ty.bind(null,o,r,a,t),null),a},useId:function(){var e=da(),t=Ye.identifierPrefix;if(Me){var a=Ko,o=Wo;a=(o&~(1<<32-Ga(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=of++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=yN++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gh,useFormState:lw,useActionState:lw,useOptimistic:function(e){var t=da();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Xh.bind(null,xe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Hh,useCacheRefresh:function(){return da().memoizedState=IN.bind(null,xe)},useEffectEvent:function(e){var t=da(),a={impl:e};return t.memoizedState=a,function(){if((De&2)!==0)throw Error(j(440));return a.impl.apply(void 0,arguments)}}},jh={readContext:Yt,use:Mf,useCallback:hy,useContext:Yt,useEffect:Uh,useImperativeHandle:gy,useInsertionEffect:fy,useLayoutEffect:py,useMemo:xy,useReducer:zc,useRef:uy,useState:function(){return zc(Dn)},useDebugValue:qh,useDeferredValue:function(e,t){var a=wt();return by(a,Ve.memoizedState,e,t)},useTransition:function(){var e=zc(Dn)[0],t=wt().memoizedState;return[typeof e=="boolean"?e:Dd(e),t]},useSyncExternalStore:Jv,useId:Cy,useHostTransitionStatus:Gh,useFormState:sw,useActionState:sw,useOptimistic:function(e,t){var a=wt();return ry(a,Ve,e,t)},useMemoCache:Hh,useCacheRefresh:Sy};jh.useEffectEvent=cy;var My={readContext:Yt,use:Mf,useCallback:hy,useContext:Yt,useEffect:Uh,useImperativeHandle:gy,useInsertionEffect:fy,useLayoutEffect:py,useMemo:xy,useReducer:Jm,useRef:uy,useState:function(){return Jm(Dn)},useDebugValue:qh,useDeferredValue:function(e,t){var a=wt();return Ve===null?Vh(a,e,t):by(a,Ve.memoizedState,e,t)},useTransition:function(){var e=Jm(Dn)[0],t=wt().memoizedState;return[typeof e=="boolean"?e:Dd(e),t]},useSyncExternalStore:Jv,useId:Cy,useHostTransitionStatus:Gh,useFormState:dw,useActionState:dw,useOptimistic:function(e,t){var a=wt();return Ve!==null?ry(a,Ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hh,useCacheRefresh:Sy};My.useEffectEvent=cy;function eg(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:rt({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var jg={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Xa(),n=wr(o);n.payload=t,a!=null&&(n.callback=a),t=vr(e,n,o),t!==null&&(_a(t,e,o),od(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Xa(),n=wr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=vr(e,n,o),t!==null&&(_a(t,e,o),od(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Xa(),o=wr(a);o.tag=2,t!=null&&(o.callback=t),t=vr(e,o,a),t!==null&&(_a(t,e,a),od(t,e,a))}};function cw(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!gd(a,o)||!gd(n,r):!0}function fw(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&jg.enqueueReplaceState(t,t.state,null)}function gi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=rt({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ny(e){Wc(e)}function Ey(e){console.error(e)}function Ty(e){Wc(e)}function nf(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function pw(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Yg(e,t,a){return a=wr(a),a.tag=3,a.payload={element:null},a.callback=function(){nf(e,t)},a}function Ay(e){return e=wr(e),e.tag=3,e}function Dy(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){pw(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){pw(t,a,o),typeof n!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var l=o.stack;this.componentDidCatch(o.value,{componentStack:l!==null?l:""})})}function NN(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Zl(t,a,n,!0),a=Ya.current,a!==null){switch(a.tag){case 31:case 13:return mo===null?uf():a.alternate===null&&pt===0&&(pt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Jc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),cg(e,o,n)),!1;case 22:return a.flags|=65536,o===Jc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),cg(e,o,n)),!1}throw Error(j(435,a.tag))}return cg(e,o,n),uf(),!1}if(Me)return t=Ya.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Rg&&(e=Error(j(422),{cause:o}),xd(fo(e,a)))):(o!==Rg&&(t=Error(j(423),{cause:o}),xd(fo(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=fo(o,a),n=Yg(e.stateNode,o,n),Qm(e,n),pt!==4&&(pt=2)),!1;var r=Error(j(520),{cause:o});if(r=fo(r,a),dd===null?dd=[r]:dd.push(r),pt!==4&&(pt=2),t===null)return!0;o=fo(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Yg(a.stateNode,o,e),Qm(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ay(n),Dy(n,e,a,o),Qm(a,n),!1}a=a.return}while(a!==null);return!1}var Yh=Error(j(461)),St=!1;function Gt(e,t,a,o){t.child=e===null?Yv(t,null,a,o):pi(t,e.child,a,o)}function mw(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var l in o)l!=="ref"&&(i[l]=o[l])}else i=o;return fi(t),o=zh(e,t,a,i,r,n),l=Ph(),e!==null&&!St?(Oh(e,t,n),Rn(e,t,n)):(Me&&l&&Ih(t),t.flags|=1,Gt(e,t,o,n),t.child)}function gw(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!_h(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ry(e,t,r,o,n)):(e=Dc(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Zh(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:gd,a(i,o)&&e.ref===t.ref)return Rn(e,t,n)}return t.flags|=1,e=Mn(r,o),e.ref=t.ref,e.return=t,t.child=e}function Ry(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(gd(r,o)&&e.ref===t.ref)if(St=!1,t.pendingProps=o=r,Zh(e,n))(e.flags&131072)!==0&&(St=!0);else return t.lanes=e.lanes,Rn(e,t,n)}return Zg(e,t,a,o,n)}function zy(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return hw(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rc(t,r!==null?r.cachePool:null),r!==null?nw(t,r):Ug(),Kv(t);else return o=t.lanes=536870912,hw(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Rc(t,r.cachePool),nw(t,r),ur(t),t.memoizedState=null):(e!==null&&Rc(t,null),Ug(),ur(t));return Gt(e,t,n,a),t.child}function $s(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hw(e,t,a,o,n){var r=Eh();return r=r===null?null:{parent:Ct._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Rc(t,null),Ug(),Kv(t),e!==null&&Zl(e,t,o,!0),t.childLanes=n,null}function Oc(e,t){return t=rf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xw(e,t,a){return pi(t,e.child,null,a),e=Oc(t,t.pendingProps),e.flags|=2,Ha(t),t.memoizedState=null,e}function EN(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Oc(t,o),t.lanes=536870912,$s(null,e);if(qg(t),(e=nt)?(e=I1(e,po),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_r!==null?{id:Wo,overflow:Ko}:null,retryLane:536870912,hydrationErrors:null},a=Fv(e),a.return=t,t.child=a,jt=t,nt=null)):e=null,e===null)throw Ir(t);return t.lanes=536870912,null}return Oc(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(qg(t),n)if(t.flags&256)t.flags&=-257,t=xw(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(St||Zl(e,t,a,!1),n=(a&e.childLanes)!==0,St||n){if(o=Ye,o!==null&&(i=fv(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,wi(e,i),_a(o,e,i),Yh;uf(),t=xw(e,t,a)}else e=r.treeContext,nt=go(i.nextSibling),jt=t,Me=!0,br=null,po=!1,e!==null&&qv(t,e),t=Oc(t,o),t.flags|=4096;return t}return e=Mn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bc(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(j(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zg(e,t,a,o,n){return fi(t),a=zh(e,t,a,o,void 0,n),o=Ph(),e!==null&&!St?(Oh(e,t,n),Rn(e,t,n)):(Me&&o&&Ih(t),t.flags|=1,Gt(e,t,a,n),t.child)}function bw(e,t,a,o,n,r){return fi(t),t.updateQueue=null,a=Qv(t,o,a,n),$v(e),o=Ph(),e!==null&&!St?(Oh(e,t,r),Rn(e,t,r)):(Me&&o&&Ih(t),t.flags|=1,Gt(e,t,a,r),t.child)}function ww(e,t,a,o,n){if(fi(t),t.stateNode===null){var r=Ll,i=a.contextType;typeof i=="object"&&i!==null&&(r=Yt(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=jg,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Ah(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?Yt(i):Ll,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(eg(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&jg.enqueueReplaceState(r,r.state,null),rd(t,o,r,n),nd(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,s=gi(a,l);r.props=s;var u=r.context,d=a.contextType;i=Ll,typeof d=="object"&&d!==null&&(i=Yt(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||u!==i)&&fw(t,r,o,i),lr=!1;var c=t.memoizedState;r.state=c,rd(t,o,r,n),nd(),u=t.memoizedState,l||c!==u||lr?(typeof f=="function"&&(eg(t,a,f,o),u=t.memoizedState),(s=lr||cw(t,a,s,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Hg(e,t),i=t.memoizedProps,d=gi(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,s=Ll,typeof u=="object"&&u!==null&&(s=Yt(u)),l=a.getDerivedStateFromProps,(u=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==s)&&fw(t,r,o,s),lr=!1,c=t.memoizedState,r.state=c,rd(t,o,r,n),nd();var p=t.memoizedState;i!==f||c!==p||lr||e!==null&&e.dependencies!==null&&Qc(e.dependencies)?(typeof l=="function"&&(eg(t,a,l,o),p=t.memoizedState),(d=lr||cw(t,a,d,o,c,p,s)||e!==null&&e.dependencies!==null&&Qc(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Bc(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=pi(t,e.child,null,n),t.child=pi(t,null,a,n)):Gt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Rn(e,t,n),e}function vw(e,t,a,o){return ci(),t.flags|=256,Gt(e,t,a,o),t.child}var tg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ag(e){return{baseLanes:e,cachePool:Gv()}}function og(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ua),e}function Py(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(bt.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Me){if(n?dr(t):ur(t),(e=nt)?(e=I1(e,po),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_r!==null?{id:Wo,overflow:Ko}:null,retryLane:536870912,hydrationErrors:null},a=Fv(e),a.return=t,t.child=a,jt=t,nt=null)):e=null,e===null)throw Ir(t);return sh(e)?t.lanes=32:t.lanes=536870912,null}var l=o.children;return o=o.fallback,n?(ur(t),n=t.mode,l=rf({mode:"hidden",children:l},n),o=li(o,n,a,null),l.return=t,o.return=t,l.sibling=o,t.child=l,o=t.child,o.memoizedState=ag(a),o.childLanes=og(e,i,a),t.memoizedState=tg,$s(null,o)):(dr(t),Wg(t,l))}var s=e.memoizedState;if(s!==null&&(l=s.dehydrated,l!==null)){if(r)t.flags&256?(dr(t),t.flags&=-257,t=ng(e,t,a)):t.memoizedState!==null?(ur(t),t.child=e.child,t.flags|=128,t=null):(ur(t),l=o.fallback,n=t.mode,o=rf({mode:"visible",children:o.children},n),l=li(l,n,a,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,pi(t,e.child,null,a),o=t.child,o.memoizedState=ag(a),o.childLanes=og(e,i,a),t.memoizedState=tg,t=$s(null,o));else if(dr(t),sh(l)){if(i=l.nextSibling&&l.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(j(419)),o.stack="",o.digest=i,xd({value:o,source:null,stack:null}),t=ng(e,t,a)}else if(St||Zl(e,t,a,!1),i=(a&e.childLanes)!==0,St||i){if(i=Ye,i!==null&&(o=fv(i,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,wi(e,o),_a(i,e,o),Yh;lh(l)||uf(),t=ng(e,t,a)}else lh(l)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,nt=go(l.nextSibling),jt=t,Me=!0,br=null,po=!1,e!==null&&qv(t,e),t=Wg(t,o.children),t.flags|=4096);return t}return n?(ur(t),l=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=Mn(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?l=Mn(u,l):(l=li(l,n,a,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,$s(null,o),o=t.child,l=e.child.memoizedState,l===null?l=ag(a):(n=l.cachePool,n!==null?(s=Ct._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Gv(),l={baseLanes:l.baseLanes|a,cachePool:n}),o.memoizedState=l,o.childLanes=og(e,i,a),t.memoizedState=tg,$s(e.child,o)):(dr(t),a=e.child,e=a.sibling,a=Mn(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function Wg(e,t){return t=rf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rf(e,t){return e=Fa(22,e,null,t),e.lanes=0,e}function ng(e,t,a){return pi(t,e.child,null,a),e=Wg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yw(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Pg(e.return,t,a)}function rg(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function Oy(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=bt.current,l=(i&2)!==0;if(l?(i=i&1|2,t.flags|=128):i&=1,Ke(bt,i),Gt(e,t,o,a),o=Me?hd:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yw(e,a,t);else if(e.tag===19)yw(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&tf(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),rg(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&tf(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}rg(t,!0,a,null,r,o);break;case"together":rg(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Rn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Nr|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Zl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,a=Mn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Mn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zh(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qc(e)))}function TN(e,t,a){switch(t.tag){case 3:Xc(t,t.stateNode.containerInfo),sr(t,Ct,e.memoizedState.cache),ci();break;case 27:case 5:Sg(t);break;case 4:Xc(t,t.stateNode.containerInfo);break;case 10:sr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qg(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(dr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Py(e,t,a):(dr(t),e=Rn(e,t,a),e!==null?e.sibling:null);dr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Zl(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Oy(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Ke(bt,bt.current),o)break;return null;case 22:return t.lanes=0,zy(e,t,a,t.pendingProps);case 24:sr(t,Ct,e.memoizedState.cache)}return Rn(e,t,a)}function By(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)St=!0;else{if(!Zh(e,a)&&(t.flags&128)===0)return St=!1,TN(e,t,a);St=(e.flags&131072)!==0}else St=!1,Me&&(t.flags&1048576)!==0&&Uv(t,hd,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ni(t.elementType),t.type=e,typeof e=="function")_h(e)?(o=gi(e,o),t.tag=1,t=ww(null,t,e,o,a)):(t.tag=0,t=Zg(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===fh){t.tag=11,t=mw(null,t,e,o,a);break e}else if(n===ph){t.tag=14,t=gw(null,t,e,o,a);break e}}throw t=yg(e)||e,Error(j(306,t,""))}}return t;case 0:return Zg(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=gi(o,t.pendingProps),ww(e,t,o,n,a);case 3:e:{if(Xc(t,t.stateNode.containerInfo),e===null)throw Error(j(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Hg(e,t),rd(t,o,null,a);var i=t.memoizedState;if(o=i.cache,sr(t,Ct,o),o!==r.cache&&Og(t,[Ct],a,!0),nd(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=vw(e,t,o,a);break e}else if(o!==n){n=fo(Error(j(424)),t),xd(n),t=vw(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nt=go(e.firstChild),jt=t,Me=!0,br=null,po=!0,a=Yv(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ci(),o===n){t=Rn(e,t,a);break e}Gt(e,t,o,a)}t=t.child}return t;case 26:return Bc(e,t),e===null?(a=Vw(t.type,null,t.pendingProps,null))?t.memoizedState=a:Me||(a=t.type,e=t.pendingProps,o=mf(xr.current).createElement(a),o[Xt]=t,o[Ia]=e,Zt(o,a,e),zt(o),t.stateNode=o):t.memoizedState=Vw(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sg(t),e===null&&Me&&(o=t.stateNode=M1(t.type,t.pendingProps,xr.current),jt=t,po=!0,n=nt,Tr(t.type)?(dh=n,nt=go(o.firstChild)):nt=n),Gt(e,t,t.pendingProps.children,a),Bc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Me&&((n=o=nt)&&(o=r4(o,t.type,t.pendingProps,po),o!==null?(t.stateNode=o,jt=t,nt=go(o.firstChild),po=!1,n=!0):n=!1),n||Ir(t)),Sg(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,rh(n,r)?o=null:i!==null&&rh(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=zh(e,t,CN,null,null,a),Sd._currentValue=n),Bc(e,t),Gt(e,t,o,a),t.child;case 6:return e===null&&Me&&((e=a=nt)&&(a=i4(a,t.pendingProps,po),a!==null?(t.stateNode=a,jt=t,nt=null,e=!0):e=!1),e||Ir(t)),null;case 13:return Py(e,t,a);case 4:return Xc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=pi(t,null,o,a):Gt(e,t,o,a),t.child;case 11:return mw(e,t,t.type,t.pendingProps,a);case 7:return Gt(e,t,t.pendingProps,a),t.child;case 8:return Gt(e,t,t.pendingProps.children,a),t.child;case 12:return Gt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,sr(t,t.type,o.value),Gt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,fi(t),n=Yt(n),o=o(n),t.flags|=1,Gt(e,t,o,a),t.child;case 14:return gw(e,t,t.type,t.pendingProps,a);case 15:return Ry(e,t,t.type,t.pendingProps,a);case 19:return Oy(e,t,a);case 31:return EN(e,t,a);case 22:return zy(e,t,a,t.pendingProps);case 24:return fi(t),o=Yt(Ct),e===null?(n=Eh(),n===null&&(n=Ye,r=Nh(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Ah(t),sr(t,Ct,n)):((e.lanes&a)!==0&&(Hg(e,t),rd(t,null,null,a),nd()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),sr(t,Ct,o)):(o=r.cache,sr(t,Ct,o),o!==n.cache&&Og(t,[Ct],a,!0))),Gt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function wn(e){e.flags|=4}function ig(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(s1())e.flags|=8192;else throw di=Jc,Th}else e.flags&=-16777217}function Cw(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T1(t))if(s1())e.flags|=8192;else throw di=Jc,Th}function Cc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?dv():536870912,e.lanes|=t,Ul|=t)}function Gs(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function AN(e,t,a){var o=t.pendingProps;switch(Mh(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return ot(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Nn(Ct),zl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fl(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$m())),ot(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(wn(t),r!==null?(ot(t),Cw(t,r)):(ot(t),ig(t,n,null,o,a))):r?r!==e.memoizedState?(wn(t),ot(t),Cw(t,r)):(ot(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&wn(t),ot(t),ig(t,n,e,o,a)),null;case 27:if(jc(t),a=xr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&wn(t);else{if(!o){if(t.stateNode===null)throw Error(j(166));return ot(t),null}e=Qo.current,fl(t)?$b(t,e):(e=M1(n,o,a),t.stateNode=e,wn(t))}return ot(t),null;case 5:if(jc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&wn(t);else{if(!o){if(t.stateNode===null)throw Error(j(166));return ot(t),null}if(r=Qo.current,fl(t))$b(t,r);else{var i=mf(xr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[Xt]=t,r[Ia]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(Zt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&wn(t)}}return ot(t),ig(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&wn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(j(166));if(e=xr.current,fl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=jt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Xt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||L1(e.nodeValue,a)),e||Ir(t,!0)}else e=mf(e).createTextNode(o),e[Xt]=t,t.stateNode=e}return ot(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=fl(t),a!==null){if(e===null){if(!o)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[Xt]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),e=!1}else a=$m(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ha(t),t):(Ha(t),null);if((t.flags&128)!==0)throw Error(j(558))}return ot(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=fl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(j(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(j(317));n[Xt]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),n=!1}else n=$m(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ha(t),t):(Ha(t),null)}return Ha(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Cc(t,t.updateQueue),ot(t),null);case 4:return zl(),e===null&&tx(t.stateNode.containerInfo),ot(t),null;case 10:return Nn(t.type),ot(t),null;case 19:if(Pt(bt),o=t.memoizedState,o===null)return ot(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)Gs(o,!1);else{if(pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=tf(e),r!==null){for(t.flags|=128,Gs(o,!1),e=r.updateQueue,t.updateQueue=e,Cc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Hv(a,e),a=a.sibling;return Ke(bt,bt.current&1|2),Me&&Sn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&qa()>sf&&(t.flags|=128,n=!0,Gs(o,!1),t.lanes=4194304)}else{if(!n)if(e=tf(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Cc(t,e),Gs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Me)return ot(t),null}else 2*qa()-o.renderingStartTime>sf&&a!==536870912&&(t.flags|=128,n=!0,Gs(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=qa(),e.sibling=null,a=bt.current,Ke(bt,n?a&1|2:a&1),Me&&Sn(t,o.treeForkCount),e):(ot(t),null);case 22:case 23:return Ha(t),Dh(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),a=t.updateQueue,a!==null&&Cc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&Pt(si),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Nn(Ct),ot(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function DN(e,t){switch(Mh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(Ct),zl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jc(t),null;case 31:if(t.memoizedState!==null){if(Ha(t),t.alternate===null)throw Error(j(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ha(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pt(bt),null;case 4:return zl(),null;case 10:return Nn(t.type),null;case 22:case 23:return Ha(t),Dh(),e!==null&&Pt(si),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Nn(Ct),null;case 25:return null;default:return null}}function Hy(e,t){switch(Mh(t),t.tag){case 3:Nn(Ct),zl();break;case 26:case 27:case 5:jc(t);break;case 4:zl();break;case 31:t.memoizedState!==null&&Ha(t);break;case 13:Ha(t);break;case 19:Pt(bt);break;case 10:Nn(t.type);break;case 22:case 23:Ha(t),Dh(),e!==null&&Pt(si);break;case 24:Nn(Ct)}}function Rd(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(l){He(t,t.return,l)}}function Mr(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,l=i.destroy;if(l!==void 0){i.destroy=void 0,n=t;var s=a,u=l;try{u()}catch(d){He(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){He(t,t.return,d)}}function Fy(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wv(t,a)}catch(o){He(e,e.return,o)}}}function Uy(e,t,a){a.props=gi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,t,o)}}function ld(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){He(e,t,n)}}function $o(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){He(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){He(e,t,n)}else a.current=null}function qy(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){He(e,e.return,n)}}function lg(e,t,a){try{var o=e.stateNode;JN(o,e.type,a,t),o[Ia]=t}catch(n){He(e,e.return,n)}}function Vy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tr(e.type)||e.tag===4}function sg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kg(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_n));else if(o!==4&&(o===27&&Tr(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Kg(e,t,a),e=e.sibling;e!==null;)Kg(e,t,a),e=e.sibling}function lf(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Tr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(lf(e,t,a),e=e.sibling;e!==null;)lf(e,t,a),e=e.sibling}function Gy(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zt(t,o,a),t[Xt]=e,t[Ia]=a}catch(r){He(e,e.return,r)}}var Ln=!1,yt=!1,dg=!1,Sw=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function RN(e,t){if(e=e.containerInfo,oh=bf,e=Tv(e),Sh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,l=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(l=i+n),f!==r||o!==0&&f.nodeType!==3||(s=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(l=i),c===r&&++d===o&&(s=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=l===-1||s===-1?null:{start:l,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},bf=!1,Rt=t;Rt!==null;)if(t=Rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Rt=e;else for(;Rt!==null;){switch(t=Rt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var h=gi(a.type,n);e=o.getSnapshotBeforeUpdate(h,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){He(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,Rt=e;break}Rt=t.return}}function Xy(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:yn(e,a),o&4&&Rd(5,a);break;case 1:if(yn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){He(a,a.return,i)}else{var n=gi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){He(a,a.return,i)}}o&64&&Fy(a),o&512&&ld(a,a.return);break;case 3:if(yn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wv(e,t)}catch(i){He(a,a.return,i)}}break;case 27:t===null&&o&4&&Gy(a);case 26:case 5:yn(e,a),t===null&&o&4&&qy(a),o&512&&ld(a,a.return);break;case 12:yn(e,a);break;case 31:yn(e,a),o&4&&Zy(e,a);break;case 13:yn(e,a),o&4&&Wy(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=VN.bind(null,a),l4(e,a))));break;case 22:if(o=a.memoizedState!==null||Ln,!o){t=t!==null&&t.memoizedState!==null||yt,n=Ln;var r=yt;Ln=o,(yt=t)&&!r?Cn(e,a,(a.subtreeFlags&8772)!==0):yn(e,a),Ln=n,yt=r}break;case 30:break;default:yn(e,a)}}function jy(e){var t=e.alternate;t!==null&&(e.alternate=null,jy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var st=null,La=!1;function vn(e,t,a){for(a=a.child;a!==null;)Yy(e,t,a),a=a.sibling}function Yy(e,t,a){if(Va&&typeof Va.onCommitFiberUnmount=="function")try{Va.onCommitFiberUnmount(Id,a)}catch{}switch(a.tag){case 26:yt||$o(a,t),vn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||$o(a,t);var o=st,n=La;Tr(a.type)&&(st=a.stateNode,La=!1),vn(e,t,a),cd(a.stateNode),st=o,La=n;break;case 5:yt||$o(a,t);case 6:if(o=st,n=La,st=null,vn(e,t,a),st=o,La=n,st!==null)if(La)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(a.stateNode)}catch(r){He(a,t,r)}else try{st.removeChild(a.stateNode)}catch(r){He(a,t,r)}break;case 18:st!==null&&(La?(e=st,Bw(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Xl(e)):Bw(st,a.stateNode));break;case 4:o=st,n=La,st=a.stateNode.containerInfo,La=!0,vn(e,t,a),st=o,La=n;break;case 0:case 11:case 14:case 15:Mr(2,a,t),yt||Mr(4,a,t),vn(e,t,a);break;case 1:yt||($o(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Uy(a,t,o)),vn(e,t,a);break;case 21:vn(e,t,a);break;case 22:yt=(o=yt)||a.memoizedState!==null,vn(e,t,a),yt=o;break;default:vn(e,t,a)}}function Zy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xl(e)}catch(a){He(t,t.return,a)}}}function Wy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xl(e)}catch(a){He(t,t.return,a)}}function zN(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sw),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sw),t;default:throw Error(j(435,e.tag))}}function Sc(e,t){var a=zN(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=GN.bind(null,e,o);o.then(n,n)}})}function Ca(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(Tr(l.type)){st=l.stateNode,La=!1;break e}break;case 5:st=l.stateNode,La=!1;break e;case 3:case 4:st=l.stateNode.containerInfo,La=!0;break e}l=l.return}if(st===null)throw Error(j(160));Yy(r,i,n),st=null,La=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ky(t,e),t=t.sibling}var Io=null;function Ky(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ca(t,e),Sa(e),o&4&&(Mr(3,e,e.return),Rd(3,e),Mr(5,e,e.return));break;case 1:Ca(t,e),Sa(e),o&512&&(yt||a===null||$o(a,a.return)),o&64&&Ln&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Io;if(Ca(t,e),Sa(e),o&512&&(yt||a===null||$o(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Ed]||r[Xt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Zt(r,o,a),r[Xt]=e,zt(r),o=r;break e;case"link":var i=Xw("link","href",n).get(o+(a.href||""));if(i){for(var l=0;l<i.length;l++)if(r=i[l],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(l,1);break t}}r=n.createElement(o),Zt(r,o,a),n.head.appendChild(r);break;case"meta":if(i=Xw("meta","content",n).get(o+(a.content||""))){for(l=0;l<i.length;l++)if(r=i[l],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(l,1);break t}}r=n.createElement(o),Zt(r,o,a),n.head.appendChild(r);break;default:throw Error(j(468,o))}r[Xt]=e,zt(r),o=r}e.stateNode=o}else jw(n,e.type,e.stateNode);else e.stateNode=Gw(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?jw(n,e.type,e.stateNode):Gw(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lg(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ca(t,e),Sa(e),o&512&&(yt||a===null||$o(a,a.return)),a!==null&&o&4&&lg(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ca(t,e),Sa(e),o&512&&(yt||a===null||$o(a,a.return)),e.flags&32){n=e.stateNode;try{Ol(n,"")}catch(h){He(e,e.return,h)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,lg(e,n,a!==null?a.memoizedProps:n)),o&1024&&(dg=!0);break;case 6:if(Ca(t,e),Sa(e),o&4){if(e.stateNode===null)throw Error(j(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(h){He(e,e.return,h)}}break;case 3:if(Uc=null,n=Io,Io=gf(t.containerInfo),Ca(t,e),Io=n,Sa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Xl(t.containerInfo)}catch(h){He(e,e.return,h)}dg&&(dg=!1,$y(e));break;case 4:o=Io,Io=gf(e.stateNode.containerInfo),Ca(t,e),Sa(e),Io=o;break;case 12:Ca(t,e),Sa(e);break;case 31:Ca(t,e),Sa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sc(e,o)));break;case 13:Ca(t,e),Sa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tf=qa()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sc(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=Ln,d=yt;if(Ln=u||n,yt=d||s,Ca(t,e),yt=d,Ln=u,Sa(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Ln||yt||ri(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{l=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(h){He(s,s.return,h)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(h){He(s,s.return,h)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?Hw(p,!0):Hw(s.stateNode,!1)}catch(h){He(s,s.return,h)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sc(e,a))));break;case 19:Ca(t,e),Sa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sc(e,o)));break;case 30:break;case 21:break;default:Ca(t,e),Sa(e)}}function Sa(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Vy(o)){a=o;break}o=o.return}if(a==null)throw Error(j(160));switch(a.tag){case 27:var n=a.stateNode,r=sg(e);lf(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(Ol(i,""),a.flags&=-33);var l=sg(e);lf(e,l,i);break;case 3:case 4:var s=a.stateNode.containerInfo,u=sg(e);Kg(e,u,s);break;default:throw Error(j(161))}}catch(d){He(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $y(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$y(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xy(e,t.alternate,t),t=t.sibling}function ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mr(4,t,t.return),ri(t);break;case 1:$o(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Uy(t,t.return,a),ri(t);break;case 27:cd(t.stateNode);case 26:case 5:$o(t,t.return),ri(t);break;case 22:t.memoizedState===null&&ri(t);break;case 30:ri(t);break;default:ri(t)}e=e.sibling}}function Cn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Cn(n,r,a),Rd(4,r);break;case 1:if(Cn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){He(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Zv(s[n],l)}catch(u){He(o,o.return,u)}}a&&i&64&&Fy(r),ld(r,r.return);break;case 27:Gy(r);case 26:case 5:Cn(n,r,a),a&&o===null&&i&4&&qy(r),ld(r,r.return);break;case 12:Cn(n,r,a);break;case 31:Cn(n,r,a),a&&i&4&&Zy(n,r);break;case 13:Cn(n,r,a),a&&i&4&&Wy(n,r);break;case 22:r.memoizedState===null&&Cn(n,r,a),ld(r,r.return);break;case 30:break;default:Cn(n,r,a)}t=t.sibling}}function Wh(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ad(a))}function Kh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ad(e))}function _o(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qy(e,t,a,o),t=t.sibling}function Qy(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:_o(e,t,a,o),n&2048&&Rd(9,t);break;case 1:_o(e,t,a,o);break;case 3:_o(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ad(e)));break;case 12:if(n&2048){_o(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,l=r.onPostCommit;typeof l=="function"&&l(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){He(t,t.return,s)}}else _o(e,t,a,o);break;case 31:_o(e,t,a,o);break;case 13:_o(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?_o(e,t,a,o):sd(e,t):r._visibility&2?_o(e,t,a,o):(r._visibility|=2,ml(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Wh(i,t);break;case 24:_o(e,t,a,o),n&2048&&Kh(t.alternate,t);break;default:_o(e,t,a,o)}}function ml(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,l=a,s=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:ml(r,i,l,s,n),Rd(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?ml(r,i,l,s,n):sd(r,i):(d._visibility|=2,ml(r,i,l,s,n)),n&&u&2048&&Wh(i.alternate,i);break;case 24:ml(r,i,l,s,n),n&&u&2048&&Kh(i.alternate,i);break;default:ml(r,i,l,s,n)}t=t.sibling}}function sd(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:sd(a,o),n&2048&&Wh(o.alternate,o);break;case 24:sd(a,o),n&2048&&Kh(o.alternate,o);break;default:sd(a,o)}t=t.sibling}}var Qs=8192;function pl(e,t,a){if(e.subtreeFlags&Qs)for(e=e.child;e!==null;)Jy(e,t,a),e=e.sibling}function Jy(e,t,a){switch(e.tag){case 26:pl(e,t,a),e.flags&Qs&&e.memoizedState!==null&&w4(a,Io,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,a);break;case 3:case 4:var o=Io;Io=gf(e.stateNode.containerInfo),pl(e,t,a),Io=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Qs,Qs=16777216,pl(e,t,a),Qs=o):pl(e,t,a));break;default:pl(e,t,a)}}function e1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Rt=o,a1(o,e)}e1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t1(e),e=e.sibling}function t1(e){switch(e.tag){case 0:case 11:case 15:Xs(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:Xs(e);break;case 12:Xs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hc(e)):Xs(e);break;default:Xs(e)}}function Hc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Rt=o,a1(o,e)}e1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mr(8,t,t.return),Hc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Hc(t));break;default:Hc(t)}e=e.sibling}}function a1(e,t){for(;Rt!==null;){var a=Rt;switch(a.tag){case 0:case 11:case 15:Mr(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ad(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rt=o;else e:for(a=e;Rt!==null;){o=Rt;var n=o.sibling,r=o.return;if(jy(o),o===a){Rt=null;break e}if(n!==null){n.return=r,Rt=n;break e}Rt=r}}}var PN={getCacheForType:function(e){var t=Yt(Ct),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Yt(Ct).controller.signal}},ON=typeof WeakMap=="function"?WeakMap:Map,De=0,Ye=null,ke=null,Ie=0,Be=0,Ba=null,mr=!1,Kl=!1,$h=!1,zn=0,pt=0,Nr=0,ui=0,Qh=0,Ua=0,Ul=0,dd=null,ka=null,$g=!1,Tf=0,o1=0,sf=1/0,df=null,yr=null,Nt=0,Cr=null,ql=null,En=0,Qg=0,Jg=null,n1=null,ud=0,eh=null;function Xa(){return(De&2)!==0&&Ie!==0?Ie&-Ie:ce.T!==null?ex():pv()}function r1(){if(Ua===0)if((Ie&536870912)===0||Me){var e=pc;pc<<=1,(pc&3932160)===0&&(pc=262144),Ua=e}else Ua=536870912;return e=Ya.current,e!==null&&(e.flags|=32),Ua}function _a(e,t,a){(e===Ye&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),gr(e,Ie,Ua,!1)),Nd(e,a),((De&2)===0||e!==Ye)&&(e===Ye&&((De&2)===0&&(ui|=a),pt===4&&gr(e,Ie,Ua,!1)),en(e))}function i1(e,t,a){if((De&6)!==0)throw Error(j(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Md(e,t),n=o?FN(e,t):ug(e,t,!0),r=o;do{if(n===0){Kl&&!o&&gr(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!BN(a)){n=ug(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var l=e;n=dd;var s=l.current.memoizedState.isDehydrated;if(s&&(Vl(l,i).flags|=256),i=ug(l,i,!1),i!==2){if($h&&!s){l.errorRecoveryDisabledLanes|=r,ui|=r,n=4;break e}r=ka,ka=n,r!==null&&(ka===null?ka=r:ka.push.apply(ka,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){Vl(e,0),gr(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:gr(o,t,Ua,!mr);break e;case 2:ka=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(n=Tf+300-qa(),10<n)){if(gr(o,t,Ua,!mr),vf(o,0,!0)!==0)break e;En=t,o.timeoutHandle=_1(Lw.bind(null,o,a,ka,df,$g,t,Ua,ui,Ul,mr,r,"Throttled",-0,0),n);break e}Lw(o,a,ka,df,$g,t,Ua,ui,Ul,mr,r,null,-0,0)}}break}while(!0);en(e)}function Lw(e,t,a,o,n,r,i,l,s,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},Jy(t,r,f);var h=(r&62914560)===r?Tf-qa():(r&4194048)===r?o1-qa():0;if(h=v4(f,h),h!==null){En=r,e.cancelPendingCommit=h(_w.bind(null,e,t,r,a,o,n,i,l,s,d,f,null,c,p)),gr(e,r,i,!u);return}}_w(e,t,r,a,o,n,i,l,s)}function BN(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!ja(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gr(e,t,a,o){t&=~Qh,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-Ga(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&uv(e,a,t)}function Af(){return(De&6)===0?(zd(0,!1),!1):!0}function Jh(){if(ke!==null){if(Be===0)var e=ke.return;else e=ke,In=vi=null,Bh(e),Al=null,bd=0,e=ke;for(;e!==null;)Hy(e.alternate,e),e=e.return;ke=null}}function Vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,a4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),En=0,Jh(),Ye=e,ke=a=Mn(e.current,null),Ie=t,Be=0,Ba=null,mr=!1,Kl=Md(e,t),$h=!1,Ul=Ua=Qh=ui=Nr=pt=0,ka=dd=null,$g=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-Ga(o),r=1<<n;t|=e[n],o&=~r}return zn=t,Lf(),a}function l1(e,t){xe=null,ce.H=vd,t===Wl||t===_f?(t=aw(),Be=3):t===Th?(t=aw(),Be=4):Be=t===Yh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ba=t,ke===null&&(pt=1,nf(e,fo(t,e.current)))}function s1(){var e=Ya.current;return e===null?!0:(Ie&4194048)===Ie?mo===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===mo:!1}function d1(){var e=ce.H;return ce.H=vd,e===null?vd:e}function u1(){var e=ce.A;return ce.A=PN,e}function uf(){pt=4,mr||(Ie&4194048)!==Ie&&Ya.current!==null||(Kl=!0),(Nr&134217727)===0&&(ui&134217727)===0||Ye===null||gr(Ye,Ie,Ua,!1)}function ug(e,t,a){var o=De;De|=2;var n=d1(),r=u1();(Ye!==e||Ie!==t)&&(df=null,Vl(e,t)),t=!1;var i=pt;e:do try{if(Be!==0&&ke!==null){var l=ke,s=Ba;switch(Be){case 8:Jh(),i=6;break e;case 3:case 2:case 9:case 6:Ya.current===null&&(t=!0);var u=Be;if(Be=0,Ba=null,Il(e,l,s,u),a&&Kl){i=0;break e}break;default:u=Be,Be=0,Ba=null,Il(e,l,s,u)}}HN(),i=pt;break}catch(d){l1(e,d)}while(!0);return t&&e.shellSuspendCounter++,In=vi=null,De=o,ce.H=n,ce.A=r,ke===null&&(Ye=null,Ie=0,Lf()),i}function HN(){for(;ke!==null;)c1(ke)}function FN(e,t){var a=De;De|=2;var o=d1(),n=u1();Ye!==e||Ie!==t?(df=null,sf=qa()+500,Vl(e,t)):Kl=Md(e,t);e:do try{if(Be!==0&&ke!==null){t=ke;var r=Ba;t:switch(Be){case 1:Be=0,Ba=null,Il(e,t,r,1);break;case 2:case 9:if(tw(r)){Be=0,Ba=null,kw(t);break}t=function(){Be!==2&&Be!==9||Ye!==e||(Be=7),en(e)},r.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:tw(r)?(Be=0,Ba=null,kw(t)):(Be=0,Ba=null,Il(e,t,r,7));break;case 5:var i=null;switch(ke.tag){case 26:i=ke.memoizedState;case 5:case 27:var l=ke;if(i?T1(i):l.stateNode.complete){Be=0,Ba=null;var s=l.sibling;if(s!==null)ke=s;else{var u=l.return;u!==null?(ke=u,Df(u)):ke=null}break t}}Be=0,Ba=null,Il(e,t,r,5);break;case 6:Be=0,Ba=null,Il(e,t,r,6);break;case 8:Jh(),pt=6;break e;default:throw Error(j(462))}}UN();break}catch(d){l1(e,d)}while(!0);return In=vi=null,ce.H=o,ce.A=n,De=a,ke!==null?0:(Ye=null,Ie=0,Lf(),pt)}function UN(){for(;ke!==null&&!u3();)c1(ke)}function c1(e){var t=By(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?Df(e):ke=t}function kw(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=bw(a,t,t.pendingProps,t.type,void 0,Ie);break;case 11:t=bw(a,t,t.pendingProps,t.type.render,t.ref,Ie);break;case 5:Bh(t);default:Hy(a,t),t=ke=Hv(t,zn),t=By(a,t,zn)}e.memoizedProps=e.pendingProps,t===null?Df(e):ke=t}function Il(e,t,a,o){In=vi=null,Bh(t),Al=null,bd=0;var n=t.return;try{if(NN(e,n,t,a,Ie)){pt=1,nf(e,fo(a,e.current)),ke=null;return}}catch(r){if(n!==null)throw ke=n,r;pt=1,nf(e,fo(a,e.current)),ke=null;return}t.flags&32768?(Me||o===1?e=!0:Kl||(Ie&536870912)!==0?e=!1:(mr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ya.current,o!==null&&o.tag===13&&(o.flags|=16384))),f1(t,e)):Df(t)}function Df(e){var t=e;do{if((t.flags&32768)!==0){f1(t,mr);return}e=t.return;var a=AN(t.alternate,t,zn);if(a!==null){ke=a;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);pt===0&&(pt=5)}function f1(e,t){do{var a=DN(e.alternate,e);if(a!==null){a.flags&=32767,ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=a}while(e!==null);pt=6,ke=null}function _w(e,t,a,o,n,r,i,l,s){e.cancelPendingCommit=null;do Rf();while(Nt!==0);if((De&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(r=t.lanes|t.childLanes,r|=Lh,v3(e,a,r,i,l,s),e===Ye&&(ke=Ye=null,Ie=0),ql=t,Cr=e,En=a,Qg=r,Jg=n,n1=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,XN(Yc,function(){return x1(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=ce.T,ce.T=null,n=Re.p,Re.p=2,i=De,De|=4;try{RN(e,t,a)}finally{De=i,Re.p=n,ce.T=o}}Nt=1,p1(),m1(),g1()}}function p1(){if(Nt===1){Nt=0;var e=Cr,t=ql,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=ce.T,ce.T=null;var o=Re.p;Re.p=2;var n=De;De|=4;try{Ky(t,e);var r=nh,i=Tv(e.containerInfo),l=r.focusedElem,s=r.selectionRange;if(i!==l&&l&&l.ownerDocument&&Ev(l.ownerDocument.documentElement,l)){if(s!==null&&Sh(l)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(d,l.value.length);else{var f=l.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),h=l.textContent.length,w=Math.min(s.start,h),v=s.end===void 0?w:Math.min(s.end,h);!p.extend&&w>v&&(i=v,v=w,w=i);var g=Zb(l,w),b=Zb(l,v);if(g&&b&&(p.rangeCount!==1||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var m=f.createRange();m.setStart(g.node,g.offset),p.removeAllRanges(),w>v?(p.addRange(m),p.extend(b.node,b.offset)):(m.setEnd(b.node,b.offset),p.addRange(m))}}}}for(f=[],p=l;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var x=f[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}bf=!!oh,nh=oh=null}finally{De=n,Re.p=o,ce.T=a}}e.current=t,Nt=2}}function m1(){if(Nt===2){Nt=0;var e=Cr,t=ql,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=ce.T,ce.T=null;var o=Re.p;Re.p=2;var n=De;De|=4;try{Xy(e,t.alternate,t)}finally{De=n,Re.p=o,ce.T=a}}Nt=3}}function g1(){if(Nt===4||Nt===3){Nt=0,c3();var e=Cr,t=ql,a=En,o=n1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Nt=5:(Nt=0,ql=Cr=null,h1(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(yr=null),hh(a),t=t.stateNode,Va&&typeof Va.onCommitFiberRoot=="function")try{Va.onCommitFiberRoot(Id,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=ce.T,n=Re.p,Re.p=2,ce.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var l=o[i];r(l.value,{componentStack:l.stack})}}finally{ce.T=t,Re.p=n}}(En&3)!==0&&Rf(),en(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===eh?ud++:(ud=0,eh=e):ud=0,zd(0,!1)}}function h1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ad(t)))}function Rf(){return p1(),m1(),g1(),x1()}function x1(){if(Nt!==5)return!1;var e=Cr,t=Qg;Qg=0;var a=hh(En),o=ce.T,n=Re.p;try{Re.p=32>a?32:a,ce.T=null,a=Jg,Jg=null;var r=Cr,i=En;if(Nt=0,ql=Cr=null,En=0,(De&6)!==0)throw Error(j(331));var l=De;if(De|=4,t1(r.current),Qy(r,r.current,i,a),De=l,zd(0,!1),Va&&typeof Va.onPostCommitFiberRoot=="function")try{Va.onPostCommitFiberRoot(Id,r)}catch{}return!0}finally{Re.p=n,ce.T=o,h1(e,t)}}function Iw(e,t,a){t=fo(a,t),t=Yg(e.stateNode,t,2),e=vr(e,t,2),e!==null&&(Nd(e,2),en(e))}function He(e,t,a){if(e.tag===3)Iw(e,e,a);else for(;t!==null;){if(t.tag===3){Iw(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(yr===null||!yr.has(o))){e=fo(a,e),a=Ay(2),o=vr(t,a,2),o!==null&&(Dy(a,o,t,e),Nd(o,2),en(o));break}}t=t.return}}function cg(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ON;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||($h=!0,n.add(a),e=qN.bind(null,e,t,a),t.then(e,e))}function qN(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ie&a)===a&&(pt===4||pt===3&&(Ie&62914560)===Ie&&300>qa()-Tf?(De&2)===0&&Vl(e,0):Qh|=a,Ul===Ie&&(Ul=0)),en(e)}function b1(e,t){t===0&&(t=dv()),e=wi(e,t),e!==null&&(Nd(e,t),en(e))}function VN(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),b1(e,a)}function GN(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(j(314))}o!==null&&o.delete(t),b1(e,a)}function XN(e,t){return mh(e,t)}var cf=null,gl=null,th=!1,ff=!1,fg=!1,hr=0;function en(e){e!==gl&&e.next===null&&(gl===null?cf=gl=e:gl=gl.next=e),ff=!0,th||(th=!0,YN())}function zd(e,t){if(!fg&&ff){fg=!0;do for(var a=!1,o=cf;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,l=o.pingedLanes;r=(1<<31-Ga(42|e)+1)-1,r&=n&~(i&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Mw(o,r))}else r=Ie,r=vf(o,o===Ye?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Md(o,r)||(a=!0,Mw(o,r));o=o.next}while(a);fg=!1}}function jN(){w1()}function w1(){ff=th=!1;var e=0;hr!==0&&t4()&&(e=hr);for(var t=qa(),a=null,o=cf;o!==null;){var n=o.next,r=v1(o,t);r===0?(o.next=null,a===null?cf=n:a.next=n,n===null&&(gl=a)):(a=o,(e!==0||(r&3)!==0)&&(ff=!0)),o=n}Nt!==0&&Nt!==5||zd(e,!1),hr!==0&&(hr=0)}function v1(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-Ga(r),l=1<<i,s=n[i];s===-1?((l&a)===0||(l&o)!==0)&&(n[i]=w3(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}if(t=Ye,a=Ie,a=vf(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Um(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Md(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Um(o),hh(a)){case 2:case 8:a=lv;break;case 32:a=Yc;break;case 268435456:a=sv;break;default:a=Yc}return o=y1.bind(null,e),a=mh(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Um(o),e.callbackPriority=2,e.callbackNode=null,2}function y1(e,t){if(Nt!==0&&Nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rf()&&e.callbackNode!==a)return null;var o=Ie;return o=vf(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(i1(e,o,t),v1(e,qa()),e.callbackNode!=null&&e.callbackNode===a?y1.bind(null,e):null)}function Mw(e,t){if(Rf())return null;i1(e,t,!0)}function YN(){o4(function(){(De&6)!==0?mh(iv,jN):w1()})}function ex(){if(hr===0){var e=Bl;e===0&&(e=fc,fc<<=1,(fc&261888)===0&&(fc=256)),hr=e}return hr}function Nw(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ec(""+e)}function Ew(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ZN(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=Nw((n[Ia]||null).action),i=o.submitter;i&&(t=(t=i[Ia]||null)?Nw(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var l=new yf("action","action",null,o,n);e.push({event:l,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var s=i?Ew(n,i):new FormData(n);Xg(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(l.preventDefault(),s=i?Ew(n,i):new FormData(n),Xg(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Lc=0;Lc<Dg.length;Lc++)kc=Dg[Lc],Tw=kc.toLowerCase(),Aw=kc[0].toUpperCase()+kc.slice(1),Mo(Tw,"on"+Aw);var kc,Tw,Aw,Lc;Mo(Dv,"onAnimationEnd");Mo(Rv,"onAnimationIteration");Mo(zv,"onAnimationStart");Mo("dblclick","onDoubleClick");Mo("focusin","onFocus");Mo("focusout","onBlur");Mo(fN,"onTransitionRun");Mo(pN,"onTransitionStart");Mo(mN,"onTransitionCancel");Mo(Pv,"onTransitionEnd");Pl("onMouseEnter",["mouseout","mouseover"]);Pl("onMouseLeave",["mouseout","mouseover"]);Pl("onPointerEnter",["pointerout","pointerover"]);Pl("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yd));function C1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){Wc(d)}n.currentTarget=null,r=s}else for(i=0;i<o.length;i++){if(l=o[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){Wc(d)}n.currentTarget=null,r=s}}}}function Le(e,t){var a=t[kg];a===void 0&&(a=t[kg]=new Set);var o=e+"__bubble";a.has(o)||(S1(t,e,2,!1),a.add(o))}function pg(e,t,a){var o=0;t&&(o|=4),S1(a,e,o,t)}var _c="_reactListening"+Math.random().toString(36).slice(2);function tx(e){if(!e[_c]){e[_c]=!0,mv.forEach(function(a){a!=="selectionchange"&&(WN.has(a)||pg(a,!1,e),pg(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_c]||(t[_c]=!0,pg("selectionchange",!1,t))}}function S1(e,t,a,o){switch(P1(t)){case 2:var n=S4;break;case 8:n=L4;break;default:n=rx}a=n.bind(null,t,a,e),n=void 0,!Eg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function mg(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===n)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;l!==null;){if(i=bl(l),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){o=r=i;continue e}l=l.parentNode}}o=o.return}Cv(function(){var u=r,d=wh(a),f=[];e:{var c=Ov.get(e);if(c!==void 0){var p=yf,h=e;switch(e){case"keypress":if(Ac(a)===0)break e;case"keydown":case"keyup":p=G3;break;case"focusin":h="focus",p=jm;break;case"focusout":h="blur",p=jm;break;case"beforeblur":case"afterblur":p=jm;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=A3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Y3;break;case Dv:case Rv:case zv:p=z3;break;case Pv:p=W3;break;case"scroll":case"scrollend":p=E3;break;case"wheel":p=$3;break;case"copy":case"cut":case"paste":p=O3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ub;break;case"toggle":case"beforetoggle":p=J3}var w=(t&4)!==0,v=!w&&(e==="scroll"||e==="scrollend"),g=w?c!==null?c+"Capture":null:c;w=[];for(var b=u,m;b!==null;){var x=b;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||g===null||(x=pd(b,g),x!=null&&w.push(Cd(b,x,m))),v)break;b=b.return}0<w.length&&(c=new p(c,h,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Ng&&(h=a.relatedTarget||a.fromElement)&&(bl(h)||h[jl]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(h=a.relatedTarget||a.toElement,p=u,h=h?bl(h):null,h!==null&&(v=_d(h),w=h.tag,h!==v||w!==5&&w!==27&&w!==6)&&(h=null)):(p=null,h=u),p!==h)){if(w=Hb,x="onMouseLeave",g="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ub,x="onPointerLeave",g="onPointerEnter",b="pointer"),v=p==null?c:Ks(p),m=h==null?c:Ks(h),c=new w(x,b+"leave",p,a,d),c.target=v,c.relatedTarget=m,x=null,bl(d)===u&&(w=new w(g,b+"enter",h,a,d),w.target=m,w.relatedTarget=v,x=w),v=x,p&&h)t:{for(w=KN,g=p,b=h,m=0,x=g;x;x=w(x))m++;x=0;for(var S=b;S;S=w(S))x++;for(;0<m-x;)g=w(g),m--;for(;0<x-m;)b=w(b),x--;for(;m--;){if(g===b||b!==null&&g===b.alternate){w=g;break t}g=w(g),b=w(b)}w=null}else w=null;p!==null&&Dw(f,c,p,w,!1),h!==null&&v!==null&&Dw(f,v,h,w,!0)}}e:{if(c=u?Ks(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var y=Xb;else if(Gb(c))if(Mv)y=dN;else{y=lN;var C=iN}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&bh(u.elementType)&&(y=Xb):y=sN;if(y&&(y=y(e,u))){Iv(f,y,a,d);break e}C&&C(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Mg(c,"number",c.value)}switch(C=u?Ks(u):window,e){case"focusin":(Gb(C)||C.contentEditable==="true")&&(yl=C,Tg=u,td=null);break;case"focusout":td=Tg=yl=null;break;case"mousedown":Ag=!0;break;case"contextmenu":case"mouseup":case"dragend":Ag=!1,Wb(f,a,d);break;case"selectionchange":if(cN)break;case"keydown":case"keyup":Wb(f,a,d)}var L;if(Ch)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else vl?kv(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Lv&&a.locale!=="ko"&&(vl||_!=="onCompositionStart"?_==="onCompositionEnd"&&vl&&(L=Sv()):(pr=d,vh="value"in pr?pr.value:pr.textContent,vl=!0)),C=pf(u,_),0<C.length&&(_=new Fb(_,e,null,a,d),f.push({event:_,listeners:C}),L?_.data=L:(L=_v(a),L!==null&&(_.data=L)))),(L=tN?aN(e,a):oN(e,a))&&(_=pf(u,"onBeforeInput"),0<_.length&&(C=new Fb("onBeforeInput","beforeinput",null,a,d),f.push({event:C,listeners:_}),C.data=L)),ZN(f,e,u,a,d)}C1(f,t)})}function Cd(e,t,a){return{instance:e,listener:t,currentTarget:a}}function pf(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=pd(e,a),n!=null&&o.unshift(Cd(e,n,r)),n=pd(e,t),n!=null&&o.push(Cd(e,n,r))),e.tag===3)return o;e=e.return}return[]}function KN(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dw(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var l=a,s=l.alternate,u=l.stateNode;if(l=l.tag,s!==null&&s===o)break;l!==5&&l!==26&&l!==27||u===null||(s=u,n?(u=pd(a,r),u!=null&&i.unshift(Cd(a,u,s))):n||(u=pd(a,r),u!=null&&i.push(Cd(a,u,s)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var $N=/\r\n?/g,QN=/\u0000|\uFFFD/g;function Rw(e){return(typeof e=="string"?e:""+e).replace($N,`
`).replace(QN,"")}function L1(e,t){return t=Rw(t),Rw(e)===t}function qe(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ol(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ol(e,""+o);break;case"className":gc(e,"class",o);break;case"tabIndex":gc(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":gc(e,a,o);break;case"style":yv(e,o,r);break;case"data":if(t!=="object"){gc(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ec(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&qe(e,t,"name",n.name,n,null),qe(e,t,"formEncType",n.formEncType,n,null),qe(e,t,"formMethod",n.formMethod,n,null),qe(e,t,"formTarget",n.formTarget,n,null)):(qe(e,t,"encType",n.encType,n,null),qe(e,t,"method",n.method,n,null),qe(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ec(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=_n);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(j(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(j(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ec(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),Nc(e,"popover",o);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Nc(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M3.get(a)||a,Nc(e,a,o))}}function ah(e,t,a,o,n,r){switch(a){case"style":yv(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(j(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(j(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ol(e,o):(typeof o=="number"||typeof o=="bigint")&&Ol(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=_n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Ia]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Nc(e,a,o)}}}function Zt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:qe(e,t,r,i,a,null)}}n&&qe(e,t,"srcSet",a.srcSet,a,null),o&&qe(e,t,"src",a.src,a,null);return;case"input":Le("invalid",e);var l=r=i=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:qe(e,t,o,d,a,null)}}bv(e,r,l,s,u,i,n,!1);return;case"select":Le("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(l=a[n],l!=null))switch(n){case"value":r=l;break;case"defaultValue":i=l;break;case"multiple":o=l;default:qe(e,t,n,l,a,null)}t=r,a=i,e.multiple=!!o,t!=null?Nl(e,!!o,t,!1):a!=null&&Nl(e,!!o,a,!0);return;case"textarea":Le("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(l=a[i],l!=null))switch(i){case"value":o=l;break;case"defaultValue":n=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(j(91));break;default:qe(e,t,i,l,a,null)}vv(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":qe(e,t,s,o,a,null));return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<yd.length;o++)Le(yd[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:qe(e,t,u,o,a,null)}return;default:if(bh(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&ah(e,t,d,o,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null&&qe(e,t,l,o,a,null))}function JN(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,l=null,s=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||qe(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==f&&qe(e,t,c,p,o,f)}}Ig(e,i,l,s,u,d,r,n);return;case"select":p=i=l=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||qe(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":l=r;break;case"multiple":i=r;default:r!==s&&qe(e,t,n,r,o,s)}t=l,a=i,o=p,c!=null?Nl(e,!!a,c,!1):!!o!=!!a&&(t!=null?Nl(e,!!a,t,!0):Nl(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(l in a)if(n=a[l],a.hasOwnProperty(l)&&n!=null&&!o.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:qe(e,t,l,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(j(91));break;default:n!==r&&qe(e,t,i,n,o,r)}wv(e,c,p);return;case"option":for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&(h==="selected"?e.selected=!1:qe(e,t,h,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":qe(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&qe(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(j(137,t));break;default:qe(e,t,u,c,o,p)}return;default:if(bh(t)){for(var v in a)c=a[v],a.hasOwnProperty(v)&&c!==void 0&&!o.hasOwnProperty(v)&&ah(e,t,v,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||ah(e,t,d,c,o,p);return}}for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&qe(e,t,g,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||qe(e,t,f,c,o,p)}function zw(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function e4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,l=n.duration;if(r&&l&&zw(i)){for(i=0,l=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>l)break;var d=s.transferSize,f=s.initiatorType;d&&zw(f)&&(s=s.responseEnd,i+=d*(s<l?1:(l-u)/(s-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var oh=null,nh=null;function mf(e){return e.nodeType===9?e:e.ownerDocument}function Pw(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gg=null;function t4(){var e=window.event;return e&&e.type==="popstate"?e===gg?!1:(gg=e,!0):(gg=null,!1)}var _1=typeof setTimeout=="function"?setTimeout:void 0,a4=typeof clearTimeout=="function"?clearTimeout:void 0,Ow=typeof Promise=="function"?Promise:void 0,o4=typeof queueMicrotask=="function"?queueMicrotask:typeof Ow<"u"?function(e){return Ow.resolve(null).then(e).catch(n4)}:_1;function n4(e){setTimeout(function(){throw e})}function Tr(e){return e==="head"}function Bw(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Xl(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")cd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,cd(a);for(var r=a.firstChild;r;){var i=r.nextSibling,l=r.nodeName;r[Ed]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&cd(e.ownerDocument.body);a=n}while(a);Xl(t)}function Hw(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ih(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),xh(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function r4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ed])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=go(e.nextSibling),e===null)break}return null}function i4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=go(e.nextSibling),e===null))return null;return e}function I1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=go(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function sh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function l4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function go(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var dh=null;function Fw(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return go(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Uw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function M1(e,t,a){switch(t=mf(a),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function cd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xh(e)}var ho=new Map,qw=new Set;function gf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pn=Re.d;Re.d={f:s4,r:d4,D:u4,C:c4,L:f4,m:p4,X:g4,S:m4,M:h4};function s4(){var e=Pn.f(),t=Af();return e||t}function d4(e){var t=Yl(e);t!==null&&t.tag===5&&t.type==="form"?yy(t):Pn.r(e)}var $l=typeof document>"u"?null:document;function N1(e,t,a){var o=$l;if(o&&typeof t=="string"&&t){var n=co(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),qw.has(n)||(qw.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Zt(t,"link",e),zt(t),o.head.appendChild(t)))}}function u4(e){Pn.D(e),N1("dns-prefetch",e,null)}function c4(e,t){Pn.C(e,t),N1("preconnect",e,t)}function f4(e,t,a){Pn.L(e,t,a);var o=$l;if(o&&e&&t){var n='link[rel="preload"][as="'+co(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+co(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+co(a.imageSizes)+'"]')):n+='[href="'+co(e)+'"]';var r=n;switch(t){case"style":r=Gl(e);break;case"script":r=Ql(e)}ho.has(r)||(e=rt({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ho.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Pd(r))||t==="script"&&o.querySelector(Od(r))||(t=o.createElement("link"),Zt(t,"link",e),zt(t),o.head.appendChild(t)))}}function p4(e,t){Pn.m(e,t);var a=$l;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+co(o)+'"][href="'+co(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ql(e)}if(!ho.has(r)&&(e=rt({rel:"modulepreload",href:e},t),ho.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Od(r)))return}o=a.createElement("link"),Zt(o,"link",e),zt(o),a.head.appendChild(o)}}}function m4(e,t,a){Pn.S(e,t,a);var o=$l;if(o&&e){var n=Ml(o).hoistableStyles,r=Gl(e);t=t||"default";var i=n.get(r);if(!i){var l={loading:0,preload:null};if(i=o.querySelector(Pd(r)))l.loading=5;else{e=rt({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ho.get(r))&&ax(e,a);var s=i=o.createElement("link");zt(s),Zt(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Fc(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:l},n.set(r,i)}}}function g4(e,t){Pn.X(e,t);var a=$l;if(a&&e){var o=Ml(a).hoistableScripts,n=Ql(e),r=o.get(n);r||(r=a.querySelector(Od(n)),r||(e=rt({src:e,async:!0},t),(t=ho.get(n))&&ox(e,t),r=a.createElement("script"),zt(r),Zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function h4(e,t){Pn.M(e,t);var a=$l;if(a&&e){var o=Ml(a).hoistableScripts,n=Ql(e),r=o.get(n);r||(r=a.querySelector(Od(n)),r||(e=rt({src:e,async:!0,type:"module"},t),(t=ho.get(n))&&ox(e,t),r=a.createElement("script"),zt(r),Zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function Vw(e,t,a,o){var n=(n=xr.current)?gf(n):null;if(!n)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gl(a.href),a=Ml(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gl(a.href);var r=Ml(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Pd(e)))&&!r._p&&(i.instance=r,i.state.loading=5),ho.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ho.set(e,a),r||x4(n,e,a,i.state))),t&&o===null)throw Error(j(528,""));return i}if(t&&o!==null)throw Error(j(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ql(a),a=Ml(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function Gl(e){return'href="'+co(e)+'"'}function Pd(e){return'link[rel="stylesheet"]['+e+"]"}function E1(e){return rt({},e,{"data-precedence":e.precedence,precedence:null})}function x4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Zt(t,"link",a),zt(t),e.head.appendChild(t))}function Ql(e){return'[src="'+co(e)+'"]'}function Od(e){return"script[async]"+e}function Gw(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+co(a.href)+'"]');if(o)return t.instance=o,zt(o),o;var n=rt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),zt(o),Zt(o,"style",n),Fc(o,a.precedence,e),t.instance=o;case"stylesheet":n=Gl(a.href);var r=e.querySelector(Pd(n));if(r)return t.state.loading|=4,t.instance=r,zt(r),r;o=E1(a),(n=ho.get(n))&&ax(o,n),r=(e.ownerDocument||e).createElement("link"),zt(r);var i=r;return i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),Zt(r,"link",o),t.state.loading|=4,Fc(r,a.precedence,e),t.instance=r;case"script":return r=Ql(a.src),(n=e.querySelector(Od(r)))?(t.instance=n,zt(n),n):(o=a,(n=ho.get(r))&&(o=rt({},a),ox(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),zt(n),Zt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Fc(o,a.precedence,e));return t.instance}function Fc(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var l=o[i];if(l.dataset.precedence===t)r=l;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ax(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ox(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Uc=null;function Xw(e,t,a){if(Uc===null){var o=new Map,n=Uc=new Map;n.set(a,o)}else n=Uc,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Ed]||r[Xt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var l=o.get(i);l?l.push(r):o.set(i,[r])}}return o}function jw(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function b4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function T1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function w4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Gl(o.href),r=t.querySelector(Pd(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hf.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,zt(r);return}r=t.ownerDocument||t,o=E1(o),(n=ho.get(n))&&ax(o,n),r=r.createElement("link"),zt(r);var i=r;i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),Zt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hf.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var hg=0;function v4(e,t){return e.stylesheets&&e.count===0&&qc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&qc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&hg===0&&(hg=62500*e4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qc(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>hg?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function hf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xf=null;function qc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xf=new Map,t.forEach(y4,e),xf=null,hf.call(e))}function y4(e,t){if(!(t.state.loading&4)){var a=xf.get(e);if(a)var o=a.get(null);else{a=new Map,xf.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=hf.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Sd={$$typeof:kn,Provider:null,Consumer:null,_currentValue:ii,_currentValue2:ii,_threadCount:0};function C4(e,t,a,o,n,r,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qm(0),this.hiddenUpdates=qm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function A1(e,t,a,o,n,r,i,l,s,u,d,f){return e=new C4(e,t,a,i,s,u,d,f,l),t=1,r===!0&&(t|=24),r=Fa(3,null,null,t),e.current=r,r.stateNode=e,t=Nh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Ah(r),e}function D1(e){return e?(e=Ll,e):Ll}function R1(e,t,a,o,n,r){n=D1(n),o.context===null?o.context=n:o.pendingContext=n,o=wr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=vr(e,o,t),a!==null&&(_a(a,e,t),od(a,e,t))}function Yw(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function nx(e,t){Yw(e,t),(e=e.alternate)&&Yw(e,t)}function z1(e){if(e.tag===13||e.tag===31){var t=wi(e,67108864);t!==null&&_a(t,e,67108864),nx(e,67108864)}}function Zw(e){if(e.tag===13||e.tag===31){var t=Xa();t=gh(t);var a=wi(e,t);a!==null&&_a(a,e,t),nx(e,t)}}var bf=!0;function S4(e,t,a,o){var n=ce.T;ce.T=null;var r=Re.p;try{Re.p=2,rx(e,t,a,o)}finally{Re.p=r,ce.T=n}}function L4(e,t,a,o){var n=ce.T;ce.T=null;var r=Re.p;try{Re.p=8,rx(e,t,a,o)}finally{Re.p=r,ce.T=n}}function rx(e,t,a,o){if(bf){var n=uh(o);if(n===null)mg(e,t,o,wf,a),Ww(e,o);else if(_4(n,e,t,a,o))o.stopPropagation();else if(Ww(e,o),t&4&&-1<k4.indexOf(e)){for(;n!==null;){var r=Yl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=oi(r.pendingLanes);if(i!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-Ga(i);l.entanglements[1]|=s,i&=~s}en(r),(De&6)===0&&(sf=qa()+500,zd(0,!1))}}break;case 31:case 13:l=wi(r,2),l!==null&&_a(l,r,2),Af(),nx(r,2)}if(r=uh(o),r===null&&mg(e,t,o,wf,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else mg(e,t,o,null,a)}}function uh(e){return e=wh(e),ix(e)}var wf=null;function ix(e){if(wf=null,e=bl(e),e!==null){var t=_d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=tv(t),e!==null)return e;e=null}else if(a===31){if(e=av(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wf=e,null}function P1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(f3()){case iv:return 2;case lv:return 8;case Yc:case p3:return 32;case sv:return 268435456;default:return 32}default:return 32}}var ch=!1,Sr=null,Lr=null,kr=null,Ld=new Map,kd=new Map,cr=[],k4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ww(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Ld.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kd.delete(t.pointerId)}}function js(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Yl(t),t!==null&&z1(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function _4(e,t,a,o,n){switch(t){case"focusin":return Sr=js(Sr,e,t,a,o,n),!0;case"dragenter":return Lr=js(Lr,e,t,a,o,n),!0;case"mouseover":return kr=js(kr,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return Ld.set(r,js(Ld.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,kd.set(r,js(kd.get(r)||null,e,t,a,o,n)),!0}return!1}function O1(e){var t=bl(e.target);if(t!==null){var a=_d(t);if(a!==null){if(t=a.tag,t===13){if(t=tv(a),t!==null){e.blockedOn=t,Ab(e.priority,function(){Zw(a)});return}}else if(t===31){if(t=av(a),t!==null){e.blockedOn=t,Ab(e.priority,function(){Zw(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=uh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ng=o,a.target.dispatchEvent(o),Ng=null}else return t=Yl(a),t!==null&&z1(t),e.blockedOn=a,!1;t.shift()}return!0}function Kw(e,t,a){Vc(e)&&a.delete(t)}function I4(){ch=!1,Sr!==null&&Vc(Sr)&&(Sr=null),Lr!==null&&Vc(Lr)&&(Lr=null),kr!==null&&Vc(kr)&&(kr=null),Ld.forEach(Kw),kd.forEach(Kw)}function Ic(e,t){e.blockedOn===t&&(e.blockedOn=null,ch||(ch=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,I4)))}var Mc=null;function $w(e){Mc!==e&&(Mc=e,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(ix(o||a)===null)continue;break}var r=Yl(a);r!==null&&(e.splice(t,3),t-=3,Xg(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Xl(e){function t(s){return Ic(s,e)}Sr!==null&&Ic(Sr,e),Lr!==null&&Ic(Lr,e),kr!==null&&Ic(kr,e),Ld.forEach(t),kd.forEach(t);for(var a=0;a<cr.length;a++){var o=cr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)O1(a),a.blockedOn===null&&cr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[Ia]||null;if(typeof r=="function")i||$w(a);else if(i){var l=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[Ia]||null)l=i.formAction;else if(ix(n)!==null)continue}else l=i.action;typeof l=="function"?a[o+1]=l:(a.splice(o,3),o-=3),$w(a)}}}function B1(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function lx(e){this._internalRoot=e}zf.prototype.render=lx.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var a=t.current,o=Xa();R1(a,o,e,t,null,null)};zf.prototype.unmount=lx.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;R1(e.current,2,null,e,null,null),Af(),t[jl]=null}};function zf(e){this._internalRoot=e}zf.prototype.unstable_scheduleHydration=function(e){if(e){var t=pv();e={blockedOn:null,target:e,priority:t};for(var a=0;a<cr.length&&t!==0&&t<cr[a].priority;a++);cr.splice(a,0,e),a===0&&O1(e)}};var Qw=Jw.version;if(Qw!=="19.2.8")throw Error(j(527,Qw,"19.2.8"));Re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=r3(t),e=e!==null?ov(e):null,e=e===null?null:e.stateNode,e};var M4={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:ce,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ys.isDisabled&&Ys.supportsFiber))try{Id=Ys.inject(M4),Va=Ys}catch{}var Ys;Pf.createRoot=function(e,t){if(!ev(e))throw Error(j(299));var a=!1,o="",n=Ny,r=Ey,i=Ty;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=A1(e,1,!1,null,null,a,o,null,n,r,i,B1),e[jl]=t.current,tx(e),new lx(t)};Pf.hydrateRoot=function(e,t,a){if(!ev(e))throw Error(j(299));var o=!1,n="",r=Ny,i=Ey,l=Ty,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=A1(e,1,!0,t,a??null,o,n,s,r,i,l,B1),t.context=D1(null),a=t.current,o=Xa(),o=gh(o),n=wr(o),n.callback=null,vr(a,n,o),a=o,t.current.lanes=a,Nd(t,a),en(t),e[jl]=t.current,tx(e),new zf(t)};Pf.version="19.2.8"});var sx=ya((kP,U1)=>{"use strict";function F1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F1)}catch(e){console.error(e)}}F1(),U1.exports=H1()});var V1=ya(Of=>{"use strict";var N4=Symbol.for("react.transitional.element"),E4=Symbol.for("react.fragment");function q1(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:N4,type:e,key:o,ref:t!==void 0?t:null,props:a}}Of.Fragment=E4;Of.jsx=q1;Of.jsxs=q1});var X=ya((IP,G1)=>{"use strict";G1.exports=V1()});var MS=ya(IS=>{"use strict";var ms=J();function LT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kT=typeof Object.is=="function"?Object.is:LT,_T=ms.useState,IT=ms.useEffect,MT=ms.useLayoutEffect,NT=ms.useDebugValue;function ET(e,t){var a=t(),o=_T({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return MT(function(){n.value=a,n.getSnapshot=t,$x(n)&&r({inst:n})},[e,a,t]),IT(function(){return $x(n)&&r({inst:n}),e(function(){$x(n)&&r({inst:n})})},[e]),NT(a),a}function $x(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!kT(e,a)}catch{return!0}}function TT(e,t){return t()}var AT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TT:ET;IS.useSyncExternalStore=ms.useSyncExternalStore!==void 0?ms.useSyncExternalStore:AT});var ES=ya((vU,NS)=>{"use strict";NS.exports=MS()});var AS=ya(TS=>{"use strict";var Mp=J(),DT=ES();function RT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zT=typeof Object.is=="function"?Object.is:RT,PT=DT.useSyncExternalStore,OT=Mp.useRef,BT=Mp.useEffect,HT=Mp.useMemo,FT=Mp.useDebugValue;TS.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=OT(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=HT(function(){function s(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var h=i.value;if(n(h,p))return f=h}return f=p}if(h=f,zT(d,p))return h;var w=o(p);return n!==void 0&&n(h,w)?(d=p,h):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var l=PT(e,r[0],r[1]);return BT(function(){i.hasValue=!0,i.value=l},[l]),FT(l),l}});var RS=ya((CU,DS)=>{"use strict";DS.exports=AS()});var hP={};PM(hP,{mountCanvas:()=>pP,unmountCanvas:()=>gP,updateCanvas:()=>mP});var AI=N(sx(),1);var zs=N(J(),1);var Xe=N(J(),1);var q=N(X()),G=N(J());function mt(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=mt(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var T4={value:()=>{}};function j1(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new Bf(a)}function Bf(e){this._=e}function A4(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}Bf.prototype=j1.prototype={constructor:Bf,on:function(e,t){var a=this._,o=A4(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=D4(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=X1(a[n],e.name,t);else if(t==null)for(n in a)a[n]=X1(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new Bf(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function D4(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function X1(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=T4,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var yi=j1;var Hf="http://www.w3.org/1999/xhtml",dx={svg:"http://www.w3.org/2000/svg",xhtml:Hf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function On(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),dx.hasOwnProperty(t)?{space:dx[t],local:e}:e}function R4(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Hf&&t.documentElement.namespaceURI===Hf?t.createElement(e):t.createElementNS(a,e)}}function z4(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ff(e){var t=On(e);return(t.local?z4:R4)(t)}function P4(){}function Ci(e){return e==null?P4:function(){return this.querySelector(e)}}function Y1(e){typeof e!="function"&&(e=Ci(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=new Array(i),s,u,d=0;d<i;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),l[d]=u);return new gt(o,this._parents)}function ux(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function O4(){return[]}function Bd(e){return e==null?O4:function(){return this.querySelectorAll(e)}}function B4(e){return function(){return ux(e.apply(this,arguments))}}function Z1(e){typeof e=="function"?e=B4(e):e=Bd(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&(o.push(e.call(s,s.__data__,u,i)),n.push(s));return new gt(o,n)}function Hd(e){return function(){return this.matches(e)}}function Uf(e){return function(t){return t.matches(e)}}var H4=Array.prototype.find;function F4(e){return function(){return H4.call(this.children,e)}}function U4(){return this.firstElementChild}function W1(e){return this.select(e==null?U4:F4(typeof e=="function"?e:Uf(e)))}var q4=Array.prototype.filter;function V4(){return Array.from(this.children)}function G4(e){return function(){return q4.call(this.children,e)}}function K1(e){return this.selectAll(e==null?V4:G4(typeof e=="function"?e:Uf(e)))}function $1(e){typeof e!="function"&&(e=Hd(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new gt(o,this._parents)}function qf(e){return new Array(e.length)}function Q1(){return new gt(this._enter||this._groups.map(qf),this._parents)}function Fd(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Fd.prototype={constructor:Fd,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function J1(e){return function(){return e}}function X4(e,t,a,o,n,r){for(var i=0,l,s=t.length,u=r.length;i<u;++i)(l=t[i])?(l.__data__=r[i],o[i]=l):a[i]=new Fd(e,r[i]);for(;i<s;++i)(l=t[i])&&(n[i]=l)}function j4(e,t,a,o,n,r,i){var l,s,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(l=0;l<d;++l)(s=t[l])&&(c[l]=p=i.call(s,s.__data__,l,t)+"",u.has(p)?n[l]=s:u.set(p,s));for(l=0;l<f;++l)p=i.call(e,r[l],l,r)+"",(s=u.get(p))?(o[l]=s,s.__data__=r[l],u.delete(p)):a[l]=new Fd(e,r[l]);for(l=0;l<d;++l)(s=t[l])&&u.get(c[l])===s&&(n[l]=s)}function Y4(e){return e.__data__}function e2(e,t){if(!arguments.length)return Array.from(this,Y4);var a=t?j4:X4,o=this._parents,n=this._groups;typeof e!="function"&&(e=J1(e));for(var r=n.length,i=new Array(r),l=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=Z4(e.call(d,d&&d.__data__,u,o)),h=p.length,w=l[u]=new Array(h),v=i[u]=new Array(h),g=s[u]=new Array(c);a(d,f,w,v,g,p,t);for(var b=0,m=0,x,S;b<h;++b)if(x=w[b]){for(b>=m&&(m=b+1);!(S=v[m])&&++m<h;);x._next=S||null}}return i=new gt(i,o),i._enter=l,i._exit=s,i}function Z4(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function t2(){return new gt(this._exit||this._groups.map(qf),this._parents)}function a2(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function o2(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),l=new Array(n),s=0;s<i;++s)for(var u=a[s],d=o[s],f=u.length,c=l[s]=new Array(f),p,h=0;h<f;++h)(p=u[h]||d[h])&&(c[h]=p);for(;s<n;++s)l[s]=a[s];return new gt(l,this._parents)}function n2(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function r2(e){e||(e=W4);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],l=i.length,s=n[r]=new Array(l),u,d=0;d<l;++d)(u=i[d])&&(s[d]=u);s.sort(t)}return new gt(n,this._parents).order()}function W4(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function i2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function l2(){return Array.from(this)}function s2(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function d2(){let e=0;for(let t of this)++e;return e}function u2(){return!this.node()}function c2(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,l;r<i;++r)(l=n[r])&&e.call(l,l.__data__,r,n);return this}function K4(e){return function(){this.removeAttribute(e)}}function $4(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Q4(e,t){return function(){this.setAttribute(e,t)}}function J4(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function eE(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function tE(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function f2(e,t){var a=On(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?$4:K4:typeof t=="function"?a.local?tE:eE:a.local?J4:Q4)(a,t))}function Vf(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function aE(e){return function(){this.style.removeProperty(e)}}function oE(e,t,a){return function(){this.style.setProperty(e,t,a)}}function nE(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function p2(e,t,a){return arguments.length>1?this.each((t==null?aE:typeof t=="function"?nE:oE)(e,t,a??"")):Ar(this.node(),e)}function Ar(e,t){return e.style.getPropertyValue(t)||Vf(e).getComputedStyle(e,null).getPropertyValue(t)}function rE(e){return function(){delete this[e]}}function iE(e,t){return function(){this[e]=t}}function lE(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function m2(e,t){return arguments.length>1?this.each((t==null?rE:typeof t=="function"?lE:iE)(e,t)):this.node()[e]}function g2(e){return e.trim().split(/^|\s+/)}function cx(e){return e.classList||new h2(e)}function h2(e){this._node=e,this._names=g2(e.getAttribute("class")||"")}h2.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function x2(e,t){for(var a=cx(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function b2(e,t){for(var a=cx(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function sE(e){return function(){x2(this,e)}}function dE(e){return function(){b2(this,e)}}function uE(e,t){return function(){(t.apply(this,arguments)?x2:b2)(this,e)}}function w2(e,t){var a=g2(e+"");if(arguments.length<2){for(var o=cx(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?uE:t?sE:dE)(a,t))}function cE(){this.textContent=""}function fE(e){return function(){this.textContent=e}}function pE(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function v2(e){return arguments.length?this.each(e==null?cE:(typeof e=="function"?pE:fE)(e)):this.node().textContent}function mE(){this.innerHTML=""}function gE(e){return function(){this.innerHTML=e}}function hE(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function y2(e){return arguments.length?this.each(e==null?mE:(typeof e=="function"?hE:gE)(e)):this.node().innerHTML}function xE(){this.nextSibling&&this.parentNode.appendChild(this)}function C2(){return this.each(xE)}function bE(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function S2(){return this.each(bE)}function L2(e){var t=typeof e=="function"?e:Ff(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function wE(){return null}function k2(e,t){var a=typeof e=="function"?e:Ff(e),o=t==null?wE:typeof t=="function"?t:Ci(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function vE(){var e=this.parentNode;e&&e.removeChild(this)}function _2(){return this.each(vE)}function yE(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function CE(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function I2(e){return this.select(e?CE:yE)}function M2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function SE(e){return function(t){e.call(this,t,this.__data__)}}function LE(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function kE(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function _E(e,t,a){return function(){var o=this.__on,n,r=SE(t);if(o){for(var i=0,l=o.length;i<l;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function N2(e,t,a){var o=LE(e+""),n,r=o.length,i;if(arguments.length<2){var l=this.node().__on;if(l){for(var s=0,u=l.length,d;s<u;++s)for(n=0,d=l[s];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(l=t?_E:kE,n=0;n<r;++n)this.each(l(o[n],t,a));return this}function E2(e,t,a){var o=Vf(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function IE(e,t){return function(){return E2(this,e,t)}}function ME(e,t){return function(){return E2(this,e,t.apply(this,arguments))}}function T2(e,t){return this.each((typeof t=="function"?ME:IE)(e,t))}function*A2(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var fx=[null];function gt(e,t){this._groups=e,this._parents=t}function D2(){return new gt([[document.documentElement]],fx)}function NE(){return this}gt.prototype=D2.prototype={constructor:gt,select:Y1,selectAll:Z1,selectChild:W1,selectChildren:K1,filter:$1,data:e2,enter:Q1,exit:t2,join:a2,merge:o2,selection:NE,order:n2,sort:r2,call:i2,nodes:l2,node:s2,size:d2,empty:u2,each:c2,attr:f2,style:p2,property:m2,classed:w2,text:v2,html:y2,raise:C2,lower:S2,append:L2,insert:k2,remove:_2,clone:I2,datum:M2,on:N2,dispatch:T2,[Symbol.iterator]:A2};var Bn=D2;function Ot(e){return typeof e=="string"?new gt([[document.querySelector(e)]],[document.documentElement]):new gt([[e]],fx)}function R2(e){let t;for(;t=e.sourceEvent;)e=t;return e}function ua(e,t){if(e=R2(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var z2={passive:!1},Si={capture:!0,passive:!1};function Gf(e){e.stopImmediatePropagation()}function Dr(e){e.preventDefault(),e.stopImmediatePropagation()}function Ud(e){var t=e.document.documentElement,a=Ot(e).on("dragstart.drag",Dr,Si);"onselectstart"in t?a.on("selectstart.drag",Dr,Si):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function qd(e,t){var a=e.document.documentElement,o=Ot(e).on("dragstart.drag",null);t&&(o.on("click.drag",Dr,Si),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var Vd=e=>()=>e;function Gd(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:l,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Gd.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function EE(e){return!e.ctrlKey&&!e.button}function TE(){return this.parentNode}function AE(e,t){return t??{x:e.x,y:e.y}}function DE(){return navigator.maxTouchPoints||"ontouchstart"in this}function Xf(){var e=EE,t=TE,a=AE,o=DE,n={},r=yi("start","drag","end"),i=0,l,s,u,d,f=0;function c(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",v).on("touchmove.drag",g,z2).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,S){if(!(d||!e.call(this,x,S))){var y=m(this,t.call(this,x,S),x,S,"mouse");y&&(Ot(x.view).on("mousemove.drag",h,Si).on("mouseup.drag",w,Si),Ud(x.view),Gf(x),u=!1,l=x.clientX,s=x.clientY,y("start",x))}}function h(x){if(Dr(x),!u){var S=x.clientX-l,y=x.clientY-s;u=S*S+y*y>f}n.mouse("drag",x)}function w(x){Ot(x.view).on("mousemove.drag mouseup.drag",null),qd(x.view,u),Dr(x),n.mouse("end",x)}function v(x,S){if(e.call(this,x,S)){var y=x.changedTouches,C=t.call(this,x,S),L=y.length,_,T;for(_=0;_<L;++_)(T=m(this,C,x,S,y[_].identifier,y[_]))&&(Gf(x),T("start",x,y[_]))}}function g(x){var S=x.changedTouches,y=S.length,C,L;for(C=0;C<y;++C)(L=n[S[C].identifier])&&(Dr(x),L("drag",x,S[C]))}function b(x){var S=x.changedTouches,y=S.length,C,L;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),C=0;C<y;++C)(L=n[S[C].identifier])&&(Gf(x),L("end",x,S[C]))}function m(x,S,y,C,L,_){var T=r.copy(),A=ua(_||y,S),H,F,k;if((k=a.call(x,new Gd("beforestart",{sourceEvent:y,target:c,identifier:L,active:i,x:A[0],y:A[1],dx:0,dy:0,dispatch:T}),C))!=null)return H=k.x-A[0]||0,F=k.y-A[1]||0,function M(R,I,z){var B=A,P;switch(R){case"start":n[L]=M,P=i++;break;case"end":delete n[L],--i;case"drag":A=ua(z||I,S),P=i;break}T.call(R,x,new Gd(R,{sourceEvent:I,subject:k,target:c,identifier:L,active:P,x:A[0]+H,y:A[1]+F,dx:A[0]-B[0],dy:A[1]-B[1],dispatch:T}),C)}}return c.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Vd(!!x),c):e},c.container=function(x){return arguments.length?(t=typeof x=="function"?x:Vd(x),c):t},c.subject=function(x){return arguments.length?(a=typeof x=="function"?x:Vd(x),c):a},c.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Vd(!!x),c):o},c.on=function(){var x=r.on.apply(r,arguments);return x===r?c:x},c.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,c):Math.sqrt(f)},c}function jf(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function px(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Yd(){}var Xd=.7,Wf=1/Xd,Jl="\\s*([+-]?\\d+)\\s*",jd="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",tn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",RE=/^#([0-9a-f]{3,8})$/,zE=new RegExp(`^rgb\\(${Jl},${Jl},${Jl}\\)$`),PE=new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`),OE=new RegExp(`^rgba\\(${Jl},${Jl},${Jl},${jd}\\)$`),BE=new RegExp(`^rgba\\(${tn},${tn},${tn},${jd}\\)$`),HE=new RegExp(`^hsl\\(${jd},${tn},${tn}\\)$`),FE=new RegExp(`^hsla\\(${jd},${tn},${tn},${jd}\\)$`),P2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};jf(Yd,Eo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:O2,formatHex:O2,formatHex8:UE,formatHsl:qE,formatRgb:B2,toString:B2});function O2(){return this.rgb().formatHex()}function UE(){return this.rgb().formatHex8()}function qE(){return G2(this).formatHsl()}function B2(){return this.rgb().formatRgb()}function Eo(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=RE.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?H2(t):a===3?new Na(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Yf(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Yf(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=zE.exec(e))?new Na(t[1],t[2],t[3],1):(t=PE.exec(e))?new Na(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=OE.exec(e))?Yf(t[1],t[2],t[3],t[4]):(t=BE.exec(e))?Yf(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=HE.exec(e))?q2(t[1],t[2]/100,t[3]/100,1):(t=FE.exec(e))?q2(t[1],t[2]/100,t[3]/100,t[4]):P2.hasOwnProperty(e)?H2(P2[e]):e==="transparent"?new Na(NaN,NaN,NaN,0):null}function H2(e){return new Na(e>>16&255,e>>8&255,e&255,1)}function Yf(e,t,a,o){return o<=0&&(e=t=a=NaN),new Na(e,t,a,o)}function VE(e){return e instanceof Yd||(e=Eo(e)),e?(e=e.rgb(),new Na(e.r,e.g,e.b,e.opacity)):new Na}function es(e,t,a,o){return arguments.length===1?VE(e):new Na(e,t,a,o??1)}function Na(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}jf(Na,es,px(Yd,{brighter(e){return e=e==null?Wf:Math.pow(Wf,e),new Na(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Xd:Math.pow(Xd,e),new Na(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Na(ki(this.r),ki(this.g),ki(this.b),Kf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:F2,formatHex:F2,formatHex8:GE,formatRgb:U2,toString:U2}));function F2(){return`#${Li(this.r)}${Li(this.g)}${Li(this.b)}`}function GE(){return`#${Li(this.r)}${Li(this.g)}${Li(this.b)}${Li((isNaN(this.opacity)?1:this.opacity)*255)}`}function U2(){let e=Kf(this.opacity);return`${e===1?"rgb(":"rgba("}${ki(this.r)}, ${ki(this.g)}, ${ki(this.b)}${e===1?")":`, ${e})`}`}function Kf(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function ki(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Li(e){return e=ki(e),(e<16?"0":"")+e.toString(16)}function q2(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new No(e,t,a,o)}function G2(e){if(e instanceof No)return new No(e.h,e.s,e.l,e.opacity);if(e instanceof Yd||(e=Eo(e)),!e)return new No;if(e instanceof No)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,l=r-n,s=(r+n)/2;return l?(t===r?i=(a-o)/l+(a<o)*6:a===r?i=(o-t)/l+2:i=(t-a)/l+4,l/=s<.5?r+n:2-r-n,i*=60):l=s>0&&s<1?0:i,new No(i,l,s,e.opacity)}function X2(e,t,a,o){return arguments.length===1?G2(e):new No(e,t,a,o??1)}function No(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}jf(No,X2,px(Yd,{brighter(e){return e=e==null?Wf:Math.pow(Wf,e),new No(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Xd:Math.pow(Xd,e),new No(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Na(mx(e>=240?e-240:e+120,n,o),mx(e,n,o),mx(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new No(V2(this.h),Zf(this.s),Zf(this.l),Kf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Kf(this.opacity);return`${e===1?"hsl(":"hsla("}${V2(this.h)}, ${Zf(this.s)*100}%, ${Zf(this.l)*100}%${e===1?")":`, ${e})`}`}}));function V2(e){return e=(e||0)%360,e<0?e+360:e}function Zf(e){return Math.max(0,Math.min(1,e||0))}function mx(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function gx(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function j2(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,l=o<t-1?e[o+2]:2*r-n;return gx((a-o/t)*t,i,n,r,l)}}function Y2(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],l=e[(o+2)%t];return gx((a-o/t)*t,n,r,i,l)}}var Zd=e=>()=>e;function XE(e,t){return function(a){return e+a*t}}function jE(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function Z2(e){return(e=+e)==1?$f:function(t,a){return a-t?jE(t,a,e):Zd(isNaN(t)?a:t)}}function $f(e,t){var a=t-e;return a?XE(e,a):Zd(isNaN(e)?t:e)}var _i=(function e(t){var a=Z2(t);function o(n,r){var i=a((n=es(n)).r,(r=es(r)).r),l=a(n.g,r.g),s=a(n.b,r.b),u=$f(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=l(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function W2(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,l;for(i=0;i<a;++i)l=es(t[i]),o[i]=l.r||0,n[i]=l.g||0,r[i]=l.b||0;return o=e(o),n=e(n),r=e(r),l.opacity=1,function(s){return l.r=o(s),l.g=n(s),l.b=r(s),l+""}}}var YE=W2(j2),ZE=W2(Y2);function K2(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function $2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Q2(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=Hn(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(l){for(i=0;i<o;++i)r[i]=n[i](l);return r}}function J2(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function ca(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function eC(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=Hn(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var xx=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,hx=new RegExp(xx.source,"g");function WE(e){return function(){return e}}function KE(e){return function(t){return e(t)+""}}function Wd(e,t){var a=xx.lastIndex=hx.lastIndex=0,o,n,r,i=-1,l=[],s=[];for(e=e+"",t=t+"";(o=xx.exec(e))&&(n=hx.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),l[i]?l[i]+=r:l[++i]=r),(o=o[0])===(n=n[0])?l[i]?l[i]+=n:l[++i]=n:(l[++i]=null,s.push({i,x:ca(o,n)})),a=hx.lastIndex;return a<t.length&&(r=t.slice(a),l[i]?l[i]+=r:l[++i]=r),l.length<2?s[0]?KE(s[0].x):WE(t):(t=s.length,function(u){for(var d=0,f;d<t;++d)l[(f=s[d]).i]=f.x(u);return l.join("")})}function Hn(e,t){var a=typeof t,o;return t==null||a==="boolean"?Zd(t):(a==="number"?ca:a==="string"?(o=Eo(t))?(t=o,_i):Wd:t instanceof Eo?_i:t instanceof Date?J2:$2(t)?K2:Array.isArray(t)?Q2:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?eC:ca)(e,t)}var tC=180/Math.PI,Qf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function bx(e,t,a,o,n,r){var i,l,s;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(l=Math.sqrt(a*a+o*o))&&(a/=l,o/=l,s/=l),e*o<t*a&&(e=-e,t=-t,s=-s,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*tC,skewX:Math.atan(s)*tC,scaleX:i,scaleY:l}}var Jf;function aC(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Qf:bx(t.a,t.b,t.c,t.d,t.e,t.f)}function oC(e){return e==null?Qf:(Jf||(Jf=document.createElementNS("http://www.w3.org/2000/svg","g")),Jf.setAttribute("transform",e),(e=Jf.transform.baseVal.consolidate())?(e=e.matrix,bx(e.a,e.b,e.c,e.d,e.e,e.f)):Qf)}function nC(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,h){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);h.push({i:w-4,x:ca(u,f)},{i:w-2,x:ca(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:ca(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function l(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:ca(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function s(u,d,f,c,p,h){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");h.push({i:w-4,x:ca(u,f)},{i:w-2,x:ca(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),l(u.skewX,d.skewX,f,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var h=-1,w=c.length,v;++h<w;)f[(v=c[h]).i]=v.x(p);return f.join("")}}}var wx=nC(aC,"px, ","px)","deg)"),vx=nC(oC,", ",")",")");var $E=1e-12;function rC(e){return((e=Math.exp(e))+1/e)/2}function QE(e){return((e=Math.exp(e))-1/e)/2}function JE(e){return((e=Math.exp(2*e))-1)/(e+1)}var Ii=(function e(t,a,o){function n(r,i){var l=r[0],s=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-l,h=f-s,w=p*p+h*h,v,g;if(w<$E)g=Math.log(c/u)/t,v=function(C){return[l+C*p,s+C*h,u*Math.exp(t*C*g)]};else{var b=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*b),x=(c*c-u*u-o*w)/(2*c*a*b),S=Math.log(Math.sqrt(m*m+1)-m),y=Math.log(Math.sqrt(x*x+1)-x);g=(y-S)/t,v=function(C){var L=C*g,_=rC(S),T=u/(a*b)*(_*JE(t*L+S)-QE(S));return[l+T*p,s+T*h,u*_/rC(t*L+S)]}}return v.duration=g*1e3*t/Math.SQRT2,v}return n.rho=function(r){var i=Math.max(.001,+r),l=i*i,s=l*l;return e(i,l,s)},n})(Math.SQRT2,2,4);var ts=0,$d=0,Kd=0,lC=1e3,ep,Qd,tp=0,Mi=0,ap=0,Jd=typeof performance=="object"&&performance.now?performance:Date,sC=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function tu(){return Mi||(sC(e6),Mi=Jd.now()+ap)}function e6(){Mi=0}function eu(){this._call=this._time=this._next=null}eu.prototype=op.prototype={constructor:eu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?tu():+a)+(t==null?0:+t),!this._next&&Qd!==this&&(Qd?Qd._next=this:ep=this,Qd=this),this._call=e,this._time=a,yx()},stop:function(){this._call&&(this._call=null,this._time=1/0,yx())}};function op(e,t,a){var o=new eu;return o.restart(e,t,a),o}function dC(){tu(),++ts;for(var e=ep,t;e;)(t=Mi-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ts}function iC(){Mi=(tp=Jd.now())+ap,ts=$d=0;try{dC()}finally{ts=0,a6(),Mi=0}}function t6(){var e=Jd.now(),t=e-tp;t>lC&&(ap-=t,tp=e)}function a6(){for(var e,t=ep,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:ep=a);Qd=e,yx(o)}function yx(e){if(!ts){$d&&($d=clearTimeout($d));var t=e-Mi;t>24?(e<1/0&&($d=setTimeout(iC,e-Jd.now()-ap)),Kd&&(Kd=clearInterval(Kd))):(Kd||(tp=Jd.now(),Kd=setInterval(t6,lC)),ts=1,sC(iC))}}function np(e,t,a){var o=new eu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var o6=yi("start","end","cancel","interrupt"),n6=[],fC=0,uC=1,ip=2,rp=3,cC=4,lp=5,au=6;function Rr(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;r6(e,a,{name:t,index:o,group:n,on:o6,tween:n6,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:fC})}function ou(e,t){var a=Tt(e,t);if(a.state>fC)throw new Error("too late; already scheduled");return a}function Wt(e,t){var a=Tt(e,t);if(a.state>rp)throw new Error("too late; already running");return a}function Tt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function r6(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=op(r,0,a.time);function r(u){a.state=uC,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==uC)return s();for(d in o)if(p=o[d],p.name===a.name){if(p.state===rp)return np(i);p.state===cC?(p.state=au,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=au,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(np(function(){a.state===rp&&(a.state=cC,a.timer.restart(l,a.delay,a.time),l(u))}),a.state=ip,a.on.call("start",e,e.__data__,a.index,a.group),a.state===ip){for(a.state=rp,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function l(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=lp,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===lp&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=au,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function Ni(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>ip&&o.state<lp,o.state=au,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function pC(e){return this.each(function(){Ni(this,e)})}function i6(e,t){var a,o;return function(){var n=Wt(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,l=o.length;i<l;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function l6(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=Wt(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var l={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=l;break}s===u&&n.push(l)}r.tween=n}}function mC(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Tt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?i6:l6)(a,e,t))}function as(e,t,a){var o=e._id;return e.each(function(){var n=Wt(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Tt(n,o).value[t]}}function sp(e,t){var a;return(typeof t=="number"?ca:t instanceof Eo?_i:(a=Eo(t))?(t=a,_i):Wd)(e,t)}function s6(e){return function(){this.removeAttribute(e)}}function d6(e){return function(){this.removeAttributeNS(e.space,e.local)}}function u6(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function c6(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function f6(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttribute(e):(i=this.getAttribute(e),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function p6(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function gC(e,t){var a=On(e),o=a==="transform"?vx:sp;return this.attrTween(e,typeof t=="function"?(a.local?p6:f6)(a,o,as(this,"attr."+e,t)):t==null?(a.local?d6:s6)(a):(a.local?c6:u6)(a,o,t))}function m6(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function g6(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function h6(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&g6(e,r)),a}return n._value=t,n}function x6(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&m6(e,r)),a}return n._value=t,n}function hC(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=On(e);return this.tween(a,(o.local?h6:x6)(o,t))}function b6(e,t){return function(){ou(this,e).delay=+t.apply(this,arguments)}}function w6(e,t){return t=+t,function(){ou(this,e).delay=t}}function xC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?b6:w6)(t,e)):Tt(this.node(),t).delay}function v6(e,t){return function(){Wt(this,e).duration=+t.apply(this,arguments)}}function y6(e,t){return t=+t,function(){Wt(this,e).duration=t}}function bC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?v6:y6)(t,e)):Tt(this.node(),t).duration}function C6(e,t){if(typeof t!="function")throw new Error;return function(){Wt(this,e).ease=t}}function wC(e){var t=this._id;return arguments.length?this.each(C6(t,e)):Tt(this.node(),t).ease}function S6(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;Wt(this,e).ease=a}}function vC(e){if(typeof e!="function")throw new Error;return this.each(S6(this._id,e))}function yC(e){typeof e!="function"&&(e=Hd(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new fa(o,this._parents,this._name,this._id)}function CC(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),l=0;l<r;++l)for(var s=t[l],u=a[l],d=s.length,f=i[l]=new Array(d),c,p=0;p<d;++p)(c=s[p]||u[p])&&(f[p]=c);for(;l<o;++l)i[l]=t[l];return new fa(i,this._parents,this._name,this._id)}function L6(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function k6(e,t,a){var o,n,r=L6(t)?ou:Wt;return function(){var i=r(this,e),l=i.on;l!==o&&(n=(o=l).copy()).on(t,a),i.on=n}}function SC(e,t){var a=this._id;return arguments.length<2?Tt(this.node(),a).on.on(e):this.each(k6(a,e,t))}function _6(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function LC(){return this.on("end.remove",_6(this._id))}function kC(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Ci(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var l=o[i],s=l.length,u=r[i]=new Array(s),d,f,c=0;c<s;++c)(d=l[c])&&(f=e.call(d,d.__data__,c,l))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,Rr(u[c],t,a,c,u,Tt(d,a)));return new fa(r,this._parents,t,a)}function _C(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Bd(e));for(var o=this._groups,n=o.length,r=[],i=[],l=0;l<n;++l)for(var s=o[l],u=s.length,d,f=0;f<u;++f)if(d=s[f]){for(var c=e.call(d,d.__data__,f,s),p,h=Tt(d,a),w=0,v=c.length;w<v;++w)(p=c[w])&&Rr(p,t,a,w,c,h);r.push(c),i.push(d)}return new fa(r,i,t,a)}var I6=Bn.prototype.constructor;function IC(){return new I6(this._groups,this._parents)}function M6(e,t){var a,o,n;return function(){var r=Ar(this,e),i=(this.style.removeProperty(e),Ar(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function MC(e){return function(){this.style.removeProperty(e)}}function N6(e,t,a){var o,n=a+"",r;return function(){var i=Ar(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function E6(e,t,a){var o,n,r;return function(){var i=Ar(this,e),l=a(this),s=l+"";return l==null&&(s=l=(this.style.removeProperty(e),Ar(this,e))),i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l))}}function T6(e,t){var a,o,n,r="style."+t,i="end."+r,l;return function(){var s=Wt(this,e),u=s.on,d=s.value[r]==null?l||(l=MC(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),s.on=o}}function NC(e,t,a){var o=(e+="")=="transform"?wx:sp;return t==null?this.styleTween(e,M6(e,o)).on("end.style."+e,MC(e)):typeof t=="function"?this.styleTween(e,E6(e,o,as(this,"style."+e,t))).each(T6(this._id,e)):this.styleTween(e,N6(e,o,t),a).on("end.style."+e,null)}function A6(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function D6(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&A6(e,i,a)),o}return r._value=t,r}function EC(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,D6(e,t,a??""))}function R6(e){return function(){this.textContent=e}}function z6(e){return function(){var t=e(this);this.textContent=t??""}}function TC(e){return this.tween("text",typeof e=="function"?z6(as(this,"text",e)):R6(e==null?"":e+""))}function P6(e){return function(t){this.textContent=e.call(this,t)}}function O6(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&P6(n)),t}return o._value=e,o}function AC(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,O6(e))}function DC(){for(var e=this._name,t=this._id,a=dp(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)if(s=i[u]){var d=Tt(s,t);Rr(s,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new fa(o,this._parents,e,a)}function RC(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var l={value:i},s={value:function(){--n===0&&r()}};a.each(function(){var u=Wt(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),u.on=t}),n===0&&r()})}var B6=0;function fa(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function zC(e){return Bn().transition(e)}function dp(){return++B6}var Fn=Bn.prototype;fa.prototype=zC.prototype={constructor:fa,select:kC,selectAll:_C,selectChild:Fn.selectChild,selectChildren:Fn.selectChildren,filter:yC,merge:CC,selection:IC,transition:DC,call:Fn.call,nodes:Fn.nodes,node:Fn.node,size:Fn.size,empty:Fn.empty,each:Fn.each,on:SC,attr:gC,attrTween:hC,style:NC,styleTween:EC,text:TC,textTween:AC,remove:LC,tween:mC,delay:xC,duration:bC,ease:wC,easeVarying:vC,end:RC,[Symbol.iterator]:Fn[Symbol.iterator]};function up(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var H6={time:null,delay:0,duration:250,ease:up};function F6(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function PC(e){var t,a;e instanceof fa?(t=e._id,e=e._name):(t=dp(),(a=H6).time=tu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&Rr(s,e,t,u,i,a||F6(s,t));return new fa(o,this._parents,e,t)}Bn.prototype.interrupt=pC;Bn.prototype.transition=PC;var nu=e=>()=>e;function Cx(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function To(e,t,a){this.k=e,this.x=t,this.y=a}To.prototype={constructor:To,scale:function(e){return e===1?this:new To(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new To(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ei=new To(1,0,0);ru.prototype=To.prototype;function ru(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Ei;return e.__zoom}function cp(e){e.stopImmediatePropagation()}function os(e){e.preventDefault(),e.stopImmediatePropagation()}function U6(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function q6(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function OC(){return this.__zoom||Ei}function V6(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function G6(){return navigator.maxTouchPoints||"ontouchstart"in this}function X6(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function fp(){var e=U6,t=q6,a=X6,o=V6,n=G6,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],l=250,s=Ii,u=yi("start","zoom","end"),d,f,c,p=500,h=150,w=0,v=10;function g(k){k.property("__zoom",OC).on("wheel.zoom",L,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",A).on("touchmove.zoom",H).on("touchend.zoom touchcancel.zoom",F).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(k,M,R,I){var z=k.selection?k.selection():k;z.property("__zoom",OC),k!==z?S(k,M,R,I):z.interrupt().each(function(){y(this,arguments).event(I).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(k,M,R,I){g.scaleTo(k,function(){var z=this.__zoom.k,B=typeof M=="function"?M.apply(this,arguments):M;return z*B},R,I)},g.scaleTo=function(k,M,R,I){g.transform(k,function(){var z=t.apply(this,arguments),B=this.__zoom,P=R==null?x(z):typeof R=="function"?R.apply(this,arguments):R,D=B.invert(P),E=typeof M=="function"?M.apply(this,arguments):M;return a(m(b(B,E),P,D),z,i)},R,I)},g.translateBy=function(k,M,R,I){g.transform(k,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof R=="function"?R.apply(this,arguments):R),t.apply(this,arguments),i)},null,I)},g.translateTo=function(k,M,R,I,z){g.transform(k,function(){var B=t.apply(this,arguments),P=this.__zoom,D=I==null?x(B):typeof I=="function"?I.apply(this,arguments):I;return a(Ei.translate(D[0],D[1]).scale(P.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof R=="function"?-R.apply(this,arguments):-R),B,i)},I,z)};function b(k,M){return M=Math.max(r[0],Math.min(r[1],M)),M===k.k?k:new To(M,k.x,k.y)}function m(k,M,R){var I=M[0]-R[0]*k.k,z=M[1]-R[1]*k.k;return I===k.x&&z===k.y?k:new To(k.k,I,z)}function x(k){return[(+k[0][0]+ +k[1][0])/2,(+k[0][1]+ +k[1][1])/2]}function S(k,M,R,I){k.on("start.zoom",function(){y(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){y(this,arguments).event(I).end()}).tween("zoom",function(){var z=this,B=arguments,P=y(z,B).event(I),D=t.apply(z,B),E=R==null?x(D):typeof R=="function"?R.apply(z,B):R,U=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),Y=z.__zoom,Z=typeof M=="function"?M.apply(z,B):M,K=s(Y.invert(E).concat(U/Y.k),Z.invert(E).concat(U/Z.k));return function($){if($===1)$=Z;else{var V=K($),W=U/V[2];$=new To(W,E[0]-V[0]*W,E[1]-V[1]*W)}P.zoom(null,$)}})}function y(k,M,R){return!R&&k.__zooming||new C(k,M)}function C(k,M){this.that=k,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(k,M),this.taps=0}C.prototype={event:function(k){return k&&(this.sourceEvent=k),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(k,M){return this.mouse&&k!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&k!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&k!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(k){var M=Ot(this.that).datum();u.call(k,this.that,new Cx(k,{sourceEvent:this.sourceEvent,target:g,type:k,transform:this.that.__zoom,dispatch:u}),M)}};function L(k,...M){if(!e.apply(this,arguments))return;var R=y(this,M).event(k),I=this.__zoom,z=Math.max(r[0],Math.min(r[1],I.k*Math.pow(2,o.apply(this,arguments)))),B=ua(k);if(R.wheel)(R.mouse[0][0]!==B[0]||R.mouse[0][1]!==B[1])&&(R.mouse[1]=I.invert(R.mouse[0]=B)),clearTimeout(R.wheel);else{if(I.k===z)return;R.mouse=[B,I.invert(B)],Ni(this),R.start()}os(k),R.wheel=setTimeout(P,h),R.zoom("mouse",a(m(b(I,z),R.mouse[0],R.mouse[1]),R.extent,i));function P(){R.wheel=null,R.end()}}function _(k,...M){if(c||!e.apply(this,arguments))return;var R=k.currentTarget,I=y(this,M,!0).event(k),z=Ot(k.view).on("mousemove.zoom",E,!0).on("mouseup.zoom",U,!0),B=ua(k,R),P=k.clientX,D=k.clientY;Ud(k.view),cp(k),I.mouse=[B,this.__zoom.invert(B)],Ni(this),I.start();function E(Y){if(os(Y),!I.moved){var Z=Y.clientX-P,K=Y.clientY-D;I.moved=Z*Z+K*K>w}I.event(Y).zoom("mouse",a(m(I.that.__zoom,I.mouse[0]=ua(Y,R),I.mouse[1]),I.extent,i))}function U(Y){z.on("mousemove.zoom mouseup.zoom",null),qd(Y.view,I.moved),os(Y),I.event(Y).end()}}function T(k,...M){if(e.apply(this,arguments)){var R=this.__zoom,I=ua(k.changedTouches?k.changedTouches[0]:k,this),z=R.invert(I),B=R.k*(k.shiftKey?.5:2),P=a(m(b(R,B),I,z),t.apply(this,M),i);os(k),l>0?Ot(this).transition().duration(l).call(S,P,I,k):Ot(this).call(g.transform,P,I,k)}}function A(k,...M){if(e.apply(this,arguments)){var R=k.touches,I=R.length,z=y(this,M,k.changedTouches.length===I).event(k),B,P,D,E;for(cp(k),P=0;P<I;++P)D=R[P],E=ua(D,this),E=[E,this.__zoom.invert(E),D.identifier],z.touch0?!z.touch1&&z.touch0[2]!==E[2]&&(z.touch1=E,z.taps=0):(z.touch0=E,B=!0,z.taps=1+!!d);d&&(d=clearTimeout(d)),B&&(z.taps<2&&(f=E[0],d=setTimeout(function(){d=null},p)),Ni(this),z.start())}}function H(k,...M){if(this.__zooming){var R=y(this,M).event(k),I=k.changedTouches,z=I.length,B,P,D,E;for(os(k),B=0;B<z;++B)P=I[B],D=ua(P,this),R.touch0&&R.touch0[2]===P.identifier?R.touch0[0]=D:R.touch1&&R.touch1[2]===P.identifier&&(R.touch1[0]=D);if(P=R.that.__zoom,R.touch1){var U=R.touch0[0],Y=R.touch0[1],Z=R.touch1[0],K=R.touch1[1],$=($=Z[0]-U[0])*$+($=Z[1]-U[1])*$,V=(V=K[0]-Y[0])*V+(V=K[1]-Y[1])*V;P=b(P,Math.sqrt($/V)),D=[(U[0]+Z[0])/2,(U[1]+Z[1])/2],E=[(Y[0]+K[0])/2,(Y[1]+K[1])/2]}else if(R.touch0)D=R.touch0[0],E=R.touch0[1];else return;R.zoom("touch",a(m(P,D,E),R.extent,i))}}function F(k,...M){if(this.__zooming){var R=y(this,M).event(k),I=k.changedTouches,z=I.length,B,P;for(cp(k),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),B=0;B<z;++B)P=I[B],R.touch0&&R.touch0[2]===P.identifier?delete R.touch0:R.touch1&&R.touch1[2]===P.identifier&&delete R.touch1;if(R.touch1&&!R.touch0&&(R.touch0=R.touch1,delete R.touch1),R.touch0)R.touch0[1]=this.__zoom.invert(R.touch0[0]);else if(R.end(),R.taps===2&&(P=ua(P,this),Math.hypot(f[0]-P[0],f[1]-P[1])<v)){var D=Ot(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return g.wheelDelta=function(k){return arguments.length?(o=typeof k=="function"?k:nu(+k),g):o},g.filter=function(k){return arguments.length?(e=typeof k=="function"?k:nu(!!k),g):e},g.touchable=function(k){return arguments.length?(n=typeof k=="function"?k:nu(!!k),g):n},g.extent=function(k){return arguments.length?(t=typeof k=="function"?k:nu([[+k[0][0],+k[0][1]],[+k[1][0],+k[1][1]]]),g):t},g.scaleExtent=function(k){return arguments.length?(r[0]=+k[0],r[1]=+k[1],g):[r[0],r[1]]},g.translateExtent=function(k){return arguments.length?(i[0][0]=+k[0][0],i[1][0]=+k[1][0],i[0][1]=+k[0][1],i[1][1]=+k[1][1],g):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},g.constrain=function(k){return arguments.length?(a=k,g):a},g.duration=function(k){return arguments.length?(l=+k,g):l},g.interpolate=function(k){return arguments.length?(s=k,g):s},g.on=function(){var k=u.on.apply(u,arguments);return k===u?g:k},g.clickDistance=function(k){return arguments.length?(w=(k=+k)*k,g):Math.sqrt(w)},g.tapDistance=function(k){return arguments.length?(v=+k,g):v},g}var Za={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},ls=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Ix=["Enter"," ","Escape"],Mx={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Br;(function(e){e.Strict="strict",e.Loose="loose"})(Br||(Br={}));var Ao;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ao||(Ao={}));var Un;(function(e){e.Partial="partial",e.Full="full"})(Un||(Un={}));var Nx={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},an;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(an||(an={}));var rs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(rs||(rs={}));var oe;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(oe||(oe={}));var BC={[oe.Left]:oe.Right,[oe.Right]:oe.Left,[oe.Top]:oe.Bottom,[oe.Bottom]:oe.Top};function Ex(e){return e===null?null:e?"valid":"invalid"}var Tx=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,$C=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Ax=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Dx=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var lu=(e,t=[0,0])=>{let{width:a,height:o}=wo(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Rx=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",l=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(l=i?t.nodeLookup.get(r):Ax(r)?r:t.nodeLookup.get(r.id)),l?(a=!0,bp(n,gp(l,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?wp(o):{x:0,y:0,width:0,height:0}},ss=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=bp(a,gp(n)),o=!0)}),o?wp(a):{x:0,y:0,width:0,height:0}},hp=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let l=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:h=!0,hidden:w=!1}=c;if(i&&!h||w)continue;let v=p.width??c.width??c.initialWidth??0,g=p.height??c.height??c.initialHeight??0,{x:b,y:m}=c.internals.positionAbsolute,x=aS(l,s,u,d,b,m,v,g),S=v*g,y=r&&x>0;(!c.internals.handleBounds||y||x>=S||c.dragging)&&f.push(c)}return f},QC=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function j6(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:l}=wo(n);r=i>0&&l>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function JC({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let l=j6(e,i),s=ss(l),u=du(s,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function zx({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),l=i.parentId?a.get(i.parentId):void 0,{x:s,y:u}=l?l.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!l)r?.("005",Za.error005());else{let{width:p,height:h}=wo(l);p&&h&&(f=[[s,u],[s+p,u+h]])}else l&&Di(i.extent)&&(f=[[i.extent[0][0]+s,i.extent[0][1]+u],[i.extent[1][0]+s,i.extent[1][1]+u]]);let c=Di(f)?Ti(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",Za.error015()),{position:{x:c.x-s+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function eS({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),h=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||h)&&i.push(c)}let l=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=QC(i,s);for(let c of s)l.has(c.id)&&!d.find(h=>h.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var is=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),Ti=(e={x:0,y:0},t,a)=>({x:is(e.x,t[0][0],t[1][0]-(a?.width??0)),y:is(e.y,t[0][1],t[1][1]-(a?.height??0))});function tS(e,t,a){let{width:o,height:n}=wo(a),{x:r,y:i}=a.internals.positionAbsolute;return Ti(e,[[r,i],[r+o,i+n]],t)}var HC=(e,t,a)=>e<t?is(Math.abs(e-t),1,t)/t:e>a?-is(Math.abs(e-a),1,t)/t:0,xp=(e,t,a=15,o=40)=>{let n=HC(e.x,o,t.width-o)*a,r=HC(e.y,o,t.height-o)*a;return[n,r]},bp=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),_x=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),wp=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),ds=(e,t=[0,0])=>{let{x:a,y:o}=Ax(e)?e.internals.positionAbsolute:lu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},gp=(e,t=[0,0])=>{let{x:a,y:o}=Ax(e)?e.internals.positionAbsolute:lu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Px=(e,t)=>wp(bp(_x(e),_x(t))),aS=(e,t,a,o,n,r,i,l)=>{let s=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+l)-Math.max(t,r));return Math.ceil(s*u)},su=(e,t)=>aS(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Ox=e=>xo(e.width)&&xo(e.height)&&xo(e.x)&&xo(e.y),xo=e=>!isNaN(e)&&isFinite(e),Bx=(e,t)=>(a,o)=>{},us=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),cs=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let l={x:(e-a)/n,y:(t-o)/n};return r?us(l,i):l},Ai=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function ns(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Y6(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=ns(e,a),n=ns(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=ns(e.top??e.y??0,a),n=ns(e.bottom??e.y??0,a),r=ns(e.left??e.x??0,t),i=ns(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Z6(e,t,a,o,n,r){let{x:i,y:l}=Ai(e,[t,a,o]),{x:s,y:u}=Ai({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,f=r-u;return{left:Math.floor(i),top:Math.floor(l),right:Math.floor(d),bottom:Math.floor(f)}}var du=(e,t,a,o,n,r)=>{let i=Y6(r,t,a),l=(t-i.x)/e.width,s=(a-i.y)/e.height,u=Math.min(l,s),d=is(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,h=a/2-c*d,w=Z6(e,p,h,d,t,a),v={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-v.left+v.right,y:h-v.top+v.bottom,zoom:d}},fs=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function Di(e){return e!=null&&e!=="parent"}function wo(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Hx(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Fx(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let l=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*l[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*l[1]}return r}function Ux(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function oS(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function nS(e){return{...Mx,...e||{}}}function iu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=bo(e),l=cs({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:s,y:u}=a?us(l,t):l;return{xSnapped:s,ySnapped:u,...l}}var vp=e=>({width:e.offsetWidth,height:e.offsetHeight}),qx=e=>e?.getRootNode?.()||window?.document,W6=["INPUT","SELECT","TEXTAREA"];function Vx(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:W6.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Gx=e=>"clientX"in e,bo=(e,t)=>{let a=Gx(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},FC=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let l=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(l.left-a.left)/o,y:(l.top-a.top)/o,...vp(i)}})};function yp({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:l}){let s=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+l*.375+o*.125,d=Math.abs(s-e),f=Math.abs(u-t);return[s,u,d,f]}function pp(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function UC({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case oe.Left:return[t-pp(t-o,r),a];case oe.Right:return[t+pp(o-t,r),a];case oe.Top:return[t,a-pp(a-n,r)];case oe.Bottom:return[t,a+pp(n-a,r)]}}function ps({sourceX:e,sourceY:t,sourcePosition:a=oe.Bottom,targetX:o,targetY:n,targetPosition:r=oe.Top,curvature:i=.25}){let[l,s]=UC({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=UC({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,h]=yp({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${l},${s} ${u},${d} ${o},${n}`,f,c,p,h]}function Xx({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,l=o<t?o+i:o-i;return[r,l,n,i]}function rS({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,l=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+l}function iS({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=bp(gp(e),gp(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return su(i,wp(r))>0}var K6=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,$6=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),lS=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Za.error006()),t;let o=a.getEdgeId||K6,n;return Tx(e)?n={...e}:n={...e,id:o(e)},$6(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Cp({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,l]=Xx({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,l]}var qC={[oe.Left]:{x:-1,y:0},[oe.Right]:{x:1,y:0},[oe.Top]:{x:0,y:-1},[oe.Bottom]:{x:0,y:1}},Q6=({source:e,sourcePosition:t=oe.Bottom,target:a})=>t===oe.Left||t===oe.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},VC=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function J6({source:e,sourcePosition:t=oe.Bottom,target:a,targetPosition:o=oe.Top,center:n,offset:r,stepPosition:i}){let l=qC[t],s=qC[o],u={x:e.x+l.x*r,y:e.y+l.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},f=Q6({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],h=[],w,v,g={x:0,y:0},b={x:0,y:0},[,,m,x]=Xx({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(l[c]*s[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,v=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,v=n.y??u.y+(d.y-u.y)*i);let L=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y:v},{x:d.x,y:v}];l[c]===p?h=c==="x"?L:_:h=c==="x"?_:L}else{let L=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?h=l.x===p?_:L:h=l.y===p?L:_,t===o){let k=Math.abs(e[c]-a[c]);if(k<=r){let M=Math.min(r-1,r-k);l[c]===p?g[c]=(u[c]>e[c]?-1:1)*M:b[c]=(d[c]>a[c]?-1:1)*M}}if(t!==o){let k=c==="x"?"y":"x",M=l[c]===s[k],R=u[k]>d[k],I=u[k]<d[k];(l[c]===1&&(!M&&R||M&&I)||l[c]!==1&&(!M&&I||M&&R))&&(h=c==="x"?L:_)}let T={x:u.x+g.x,y:u.y+g.y},A={x:d.x+b.x,y:d.y+b.y},H=Math.max(Math.abs(T.x-h[0].x),Math.abs(A.x-h[0].x)),F=Math.max(Math.abs(T.y-h[0].y),Math.abs(A.y-h[0].y));H>=F?(w=(T.x+A.x)/2,v=h[0].y):(w=h[0].x,v=(T.y+A.y)/2)}let S={x:u.x+g.x,y:u.y+g.y},y={x:d.x+b.x,y:d.y+b.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...y.x!==h[h.length-1].x||y.y!==h[h.length-1].y?[y]:[],a],w,v,m,x]}function eT(e,t,a,o){let n=Math.min(VC(e,t)/2,VC(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let l=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${i+n*s}Q ${r},${i} ${r+n*l},${i}`}function uu({sourceX:e,sourceY:t,sourcePosition:a=oe.Bottom,targetX:o,targetY:n,targetPosition:r=oe.Top,borderRadius:i=5,centerX:l,centerY:s,offset:u=20,stepPosition:d=.5}){let[f,c,p,h,w]=J6({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:l,y:s},offset:u,stepPosition:d}),v=`M${f[0].x} ${f[0].y}`;for(let g=1;g<f.length-1;g++)v+=eT(f[g-1],f[g],f[g+1],i);return v+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[v,c,p,h,w]}function GC(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function sS(e){let{sourceNode:t,targetNode:a}=e;if(!GC(t)||!GC(a))return null;let o=t.internals.handleBounds||XC(t.handles),n=a.internals.handleBounds||XC(a.handles),r=jC(o?.source??[],e.sourceHandle),i=jC(e.connectionMode===Br.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",Za.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let l=r?.position||oe.Bottom,s=i?.position||oe.Top,u=Hr(t,r,l),d=Hr(a,i,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:l,targetPosition:s}}function XC(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function Hr(e,t,a=oe.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:l}=t??wo(e);if(o)return{x:n+i/2,y:r+l/2};switch(t?.position??a){case oe.Top:return{x:n+i/2,y:r};case oe.Right:return{x:n+i,y:r+l/2};case oe.Bottom:return{x:n+i/2,y:r+l};case oe.Left:return{x:n,y:r+l/2}}}function jC(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Sp(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function dS(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,l)=>([l.markerStart||o,l.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Sp(s,t);r.has(u)||(i.push({id:u,color:s.color||a,...s}),r.add(u))}}),i),[]).sort((i,l)=>i.id.localeCompare(l.id))}var uS=1e3,tT=10,jx={nodeOrigin:[0,0],nodeExtent:ls,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},aT={...jx,checkEquality:!0};function Yx(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function cS(e,t,a){let o=Yx(jx,a);for(let n of e.values())if(n.parentId)Wx(n,e,t,o);else{let r=lu(n,o.nodeOrigin),i=Di(n.extent)?n.extent:o.nodeExtent,l=Ti(r,i,wo(n));n.internals.positionAbsolute=l}}function oT(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function Zx(e){return e==="manual"}function Lp(e,t,a,o={}){let n=Yx(aT,o),r={i:0},i=new Map(t),l=n?.elevateNodesOnSelect&&!Zx(n.zIndexMode)?uS:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=lu(d,n.nodeOrigin),p=Di(d.extent)?d.extent:n.nodeExtent,h=Ti(c,p,wo(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:oT(d,f),z:fS(d,l,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),d.parentId&&Wx(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function nT(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Wx(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:l,zIndexMode:s}=Yx(jx,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}nT(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*tT),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!Zx(s)?uS:0,{x:c,y:p,z:h}=rT(e,d,i,l,f,s),{positionAbsolute:w}=e.internals,v=c!==w.x||p!==w.y;(v||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:v?{x:c,y:p}:w,z:h}})}function fS(e,t,a){let o=xo(e.zIndex)?e.zIndex:0;return Zx(a)?o:o+(e.selected?t:0)}function rT(e,t,a,o,n,r){let{x:i,y:l}=t.internals.positionAbsolute,s=wo(e),u=lu(e,a),d=Di(e.extent)?Ti(u,e.extent,s):u,f=Ti({x:i+d.x,y:l+d.y},o,s);e.extent==="parent"&&(f=tS(f,s,t));let c=fS(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function kp(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let l=t.get(i.parentId);if(!l)continue;let s=r.get(i.parentId)?.expandedRect??ds(l),u=Px(s,i.rect);r.set(i.parentId,{expandedRect:u,parent:l})}return r.size>0&&r.forEach(({expandedRect:i,parent:l},s)=>{let u=l.internals.positionAbsolute,d=wo(l),f=l.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,h=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),v=(h-d.width)*f[0],g=(w-d.height)*f[1];(c>0||p>0||v||g)&&(n.push({id:s,type:"position",position:{x:l.position.x-c+v,y:l.position.y-p+g}}),a.get(s)?.forEach(b=>{e.some(m=>m.id===b.id)||n.push({id:b.id,type:"position",position:{x:b.position.x+c,y:b.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:h+(c?f[0]*c-v:0),height:w+(p?f[1]*p-g:0)}})}),n}function pS(e,t,a,o,n,r,i){let l=o?.querySelector(".xyflow__viewport"),s=!1;if(!l)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(l),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),s=!0;continue}let w=vp(p.nodeElement),v=h.measured.width!==w.width||h.measured.height!==w.height;if(!!(w.width&&w.height&&(v||!h.internals.handleBounds||p.force))){let b=p.nodeElement.getBoundingClientRect(),m=Di(h.extent)?h.extent:r,{positionAbsolute:x}=h.internals;if(h.parentId&&h.extent==="parent"){let y=t.get(h.parentId);y&&(x=tS(x,w,y))}else m&&(x=Ti(x,m,w));let S={...h,measured:w,internals:{...h.internals,positionAbsolute:x,handleBounds:{source:FC("source",p.nodeElement,b,f,h.id),target:FC("target",p.nodeElement,b,f,h.id)}}};t.set(h.id,S),h.parentId&&Wx(S,t,a,{nodeOrigin:n,zIndexMode:i}),s=!0,v&&(u.push({id:h.id,type:"dimensions",dimensions:w}),h.expandParent&&h.parentId&&c.push({id:h.id,parentId:h.parentId,rect:ds(S,n)}))}}if(c.length>0){let p=kp(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function mS({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function YC(e,t,a,o,n,r){let i=n,l=o.get(i)||new Map;o.set(i,l.set(a,t)),i=`${n}-${e}`;let s=o.get(i)||new Map;if(o.set(i,s.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function Kx(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:l=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:l},u=`${n}-${i}--${r}-${l}`,d=`${r}-${l}--${n}-${i}`;YC("source",s,d,e,n,i),YC("target",s,u,e,r,l),t.set(o.id,o)}}function gS(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:gS(a,t):!1}function ZC(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function iT(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!gS(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let l=e.get(r);l&&n.set(r,{id:r,position:l.position||{x:0,y:0},distance:{x:a.x-l.internals.positionAbsolute.x,y:a.y-l.internals.positionAbsolute.y},extent:l.extent,parentId:l.parentId,origin:l.origin,expandParent:l.expandParent,internals:{positionAbsolute:l.internals.positionAbsolute||{x:0,y:0}},measured:{width:l.measured.width??0,height:l.measured.height??0}})}return n}function Sx({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,l]of t){let s=a.get(i)?.internals.userNode;s&&n.push({...s,position:l.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function lT({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=us(r,t);return{x:i.x-r.x,y:i.y-r.y}}function hS({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,l=new Map,s=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,h=!1,w=null;function v({noDragClassName:b,handleSelector:m,domNode:x,isSelectable:S,nodeId:y,nodeClickDistance:C=0}){c=Ot(x);function L({x:H,y:F}){let{nodeLookup:k,nodeExtent:M,snapGrid:R,snapToGrid:I,nodeOrigin:z,onNodeDrag:B,onSelectionDrag:P,onError:D,updateNodePositions:E}=t();r={x:H,y:F};let U=!1,Y=l.size>1,Z=Y&&M?_x(ss(l)):null,K=Y&&I?lT({dragItems:l,snapGrid:R,x:H,y:F}):null;for(let[$,V]of l){if(!k.has($))continue;let W={x:H-V.distance.x,y:F-V.distance.y};I&&(W=K?{x:Math.round(W.x+K.x),y:Math.round(W.y+K.y)}:us(W,R));let se=null;if(Y&&M&&!V.extent&&Z){let{positionAbsolute:ie}=V.internals,ve=ie.x-Z.x+M[0][0],ye=ie.x+V.measured.width-Z.x2+M[1][0],je=ie.y-Z.y+M[0][1],ee=ie.y+V.measured.height-Z.y2+M[1][1];se=[[ve,je],[ye,ee]]}let{position:pe,positionAbsolute:ae}=zx({nodeId:$,nextPosition:W,nodeLookup:k,nodeExtent:se||M,nodeOrigin:z,onError:D});U=U||V.position.x!==pe.x||V.position.y!==pe.y,V.position=pe,V.internals.positionAbsolute=ae}if(h=h||U,!!U&&(E(l,!0),w&&(o||B||!y&&P))){let[$,V]=Sx({nodeId:y,dragItems:l,nodeLookup:k});o?.(w,l,$,V),B?.(w,$,V),y||P?.(w,V)}}async function _(){if(!d)return;let{transform:H,panBy:F,autoPanSpeed:k,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(i);return}let[R,I]=xp(u,d,k);(R!==0||I!==0)&&(r.x=(r.x??0)-R/H[2],r.y=(r.y??0)-I/H[2],await F({x:R,y:I})&&L(r)),i=requestAnimationFrame(_)}function T(H){let{nodeLookup:F,multiSelectionActive:k,nodesDraggable:M,transform:R,snapGrid:I,snapToGrid:z,selectNodesOnDrag:B,onNodeDragStart:P,onSelectionDragStart:D,unselectNodesAndEdges:E}=t();f=!0,(!B||!S)&&!k&&y&&(F.get(y)?.selected||E()),S&&B&&y&&e?.(y);let U=iu(H.sourceEvent,{transform:R,snapGrid:I,snapToGrid:z,containerBounds:d});if(r=U,l=iT(F,M,U,y),l.size>0&&(a||P||!y&&D)){let[Y,Z]=Sx({nodeId:y,dragItems:l,nodeLookup:F});a?.(H.sourceEvent,l,Y,Z),P?.(H.sourceEvent,Y,Z),y||D?.(H.sourceEvent,Z)}}let A=Xf().clickDistance(C).on("start",H=>{let{domNode:F,nodeDragThreshold:k,transform:M,snapGrid:R,snapToGrid:I}=t();d=F?.getBoundingClientRect()||null,p=!1,h=!1,w=H.sourceEvent,k===0&&T(H),r=iu(H.sourceEvent,{transform:M,snapGrid:R,snapToGrid:I,containerBounds:d}),u=bo(H.sourceEvent,d)}).on("drag",H=>{let{autoPanOnNodeDrag:F,transform:k,snapGrid:M,snapToGrid:R,nodeDragThreshold:I,nodeLookup:z}=t(),B=iu(H.sourceEvent,{transform:k,snapGrid:M,snapToGrid:R,containerBounds:d});if(w=H.sourceEvent,(H.sourceEvent.type==="touchmove"&&H.sourceEvent.touches.length>1||y&&!z.has(y))&&(p=!0),!p){if(!s&&F&&f&&(s=!0,_()),!f){let P=bo(H.sourceEvent,d),D=P.x-u.x,E=P.y-u.y;Math.sqrt(D*D+E*E)>I&&T(H)}(r.x!==B.xSnapped||r.y!==B.ySnapped)&&l&&f&&(u=bo(H.sourceEvent,d),L(B))}}).on("end",H=>{if(!f||p){p&&l.size>0&&t().updateNodePositions(l,!1);return}if(s=!1,f=!1,cancelAnimationFrame(i),l.size>0){let{nodeLookup:F,updateNodePositions:k,onNodeDragStop:M,onSelectionDragStop:R}=t();if(h&&(k(l,!1),h=!1),n||M||!y&&R){let[I,z]=Sx({nodeId:y,dragItems:l,nodeLookup:F,dragging:!1});n?.(H.sourceEvent,l,I,z),M?.(H.sourceEvent,I,z),y||R?.(H.sourceEvent,z)}}}).filter(H=>{let F=H.target;return!H.button&&(!b||!ZC(F,`.${b}`,x))&&(!m||ZC(F,m,x))});c.call(A)}function g(){c?.on(".drag",null)}return{update:v,destroy:g}}function sT(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())su(n,ds(r))>0&&o.push(r);return o}var dT=250;function uT(e,t,a,o){let n=[],r=1/0,i=sT(e,a,t+dT);for(let l of i){let s=[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=Hr(l,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let l=o.type==="source"?"target":"source";return n.find(s=>s.type===l)??n[0]}return n[0]}function xS(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let l=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],s=(a?l?.find(u=>u.id===a):l?.[0])??null;return s&&r?{...s,...Hr(i,s,s.position,!0)}:s}function bS(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function cT(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var wS=()=>!0;function fT(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:l,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:h,onConnect:w,onConnectEnd:v,isValidConnection:g=wS,onReconnectEnd:b,updateConnection:m,getTransform:x,getFromHandle:S,autoPanSpeed:y,dragThreshold:C=1,handleDomNode:L}){let _=qx(e.target),T=0,A,{x:H,y:F}=bo(e),k=bS(r,L),M=l?.getBoundingClientRect(),R=!1;if(!M||!k)return;let I=xS(n,k,o,s,t);if(!I)return;let z=bo(e,M),B=!1,P=null,D=!1,E=null;function U(){if(!d||!M)return;let[pe,ae]=xp(z,M,y);c({x:pe,y:ae}),T=requestAnimationFrame(U)}let Y={...I,nodeId:n,type:k,position:I.position},Z=s.get(n),$={inProgress:!0,isValid:null,from:Hr(Z,Y,oe.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:Z,to:z,toHandle:null,toPosition:BC[Y.position],toNode:null,pointer:z};function V(){R=!0,m($),h?.(e,{nodeId:n,handleId:o,handleType:k})}C===0&&V();function W(pe){if(!R){let{x:ee,y:Ee}=bo(pe),Pe=ee-H,Mt=Ee-F;if(!(Pe*Pe+Mt*Mt>C*C))return;V()}if(!S()||!Y){se(pe);return}let ae=x();z=bo(pe,M),A=uT(cs(z,ae,!1,[1,1]),a,s,Y),B||(U(),B=!0);let ie=vS(pe,{handle:A,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:g,doc:_,lib:u,flowId:f,nodeLookup:s});E=ie.handleDomNode,P=ie.connection,D=cT(!!A,ie.isValid);let ve=s.get(n),ye=ve?Hr(ve,Y,oe.Left,!0):$.from,je={...$,from:ye,isValid:D,to:ie.toHandle&&D?Ai({x:ie.toHandle.x,y:ie.toHandle.y},ae):z,toHandle:ie.toHandle,toPosition:D&&ie.toHandle?ie.toHandle.position:BC[Y.position],toNode:ie.toHandle?s.get(ie.toHandle.nodeId):null,pointer:z};m(je),$=je}function se(pe){if(!("touches"in pe&&pe.touches.length>0)){if(R){(A||E)&&P&&D&&w?.(P);let{inProgress:ae,...ie}=$,ve={...ie,toPosition:$.toHandle?$.toPosition:null};v?.(pe,ve),r&&b?.(pe,ve)}p(),cancelAnimationFrame(T),B=!1,D=!1,P=null,E=null,_.removeEventListener("mousemove",W),_.removeEventListener("mouseup",se),_.removeEventListener("touchmove",W),_.removeEventListener("touchend",se)}}_.addEventListener("mousemove",W),_.addEventListener("mouseup",se),_.addEventListener("touchmove",W),_.addEventListener("touchend",se)}function vS(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:l,flowId:s,isValidConnection:u=wS,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${l}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=bo(e),w=i.elementFromPoint(p,h),v=w?.classList.contains(`${l}-flow__handle`)?w:c,g={handleDomNode:v,isValid:!1,connection:null,toHandle:null};if(v){let b=bS(void 0,v),m=v.getAttribute("data-nodeid"),x=v.getAttribute("data-handleid"),S=v.classList.contains("connectable"),y=v.classList.contains("connectableend");if(!m||!b)return g;let C={source:f?m:o,sourceHandle:f?x:n,target:f?o:m,targetHandle:f?n:x};g.connection=C;let _=S&&y&&(a===Br.Strict?f&&b==="source"||!f&&b==="target":m!==o||x!==n);g.isValid=_&&u(C),g.toHandle=xS(m,b,x,d,a,!0)}return g}var _p={onPointerDown:fT,isValid:vS};function yS({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=Ot(e);function r({translateExtent:l,width:s,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=a(),S=m.sourceEvent.ctrlKey&&fs()?10:1,y=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,C=x[2]*Math.pow(2,y*S);t.scaleTo(C)},w=[0,0],v=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},g=m=>{let x=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],y=[S[0]-w[0],S[1]-w[1]];w=S;let C=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),L={x:x[0]-y[0]*C,y:x[1]-y[1]*C},_=[[0,0],[s,u]];t.setViewportConstrained({x:L.x,y:L.y,zoom:x[2]},_,l)},b=fp().on("start",v).on("zoom",f?g:null).on("zoom.wheel",c?h:null);n.call(b,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:ua}}var Ip=e=>({x:e.x,y:e.y,zoom:e.k}),Lx=({x:e,y:t,zoom:a})=>Ei.translate(e,t).scale(a),Or=(e,t)=>e.target.closest(`.${t}`),CS=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),pT=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,kx=(e,t=0,a=pT,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},SS=e=>{let t=e.ctrlKey&&fs()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function mT({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:l,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(Or(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let v=ua(d),g=SS(d),b=f*Math.pow(2,g);o.scaleTo(a,b,v,d);return}let c=d.deltaMode===1?20:1,p=n===Ao.Vertical?0:d.deltaX*c,h=n===Ao.Horizontal?0:d.deltaY*c;!fs()&&d.shiftKey&&n!==Ao.Vertical&&(p=d.deltaY*c,h=0),o.translateBy(a,-(p/f)*r,-(h/f)*r,{internal:!0});let w=Ip(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,w):(e.isPanScrolling=!0,l?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function gT({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,l=Or(o,e);if(o.ctrlKey&&r&&l&&o.preventDefault(),i||l)return null;o.preventDefault(),a.call(this,o,n)}}function hT({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Ip(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function xT({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&CS(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Ip(r.transform))}}function bT({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&CS(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let l=Ip(i.transform);e.prevViewport=l,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,l)},a?150:0)}}}function wT({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:l,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,h=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(Or(c,`${d}-flow__node`)||Or(c,`${d}-flow__edge`)||Or(c,`${d}-flow__selection`)||Or(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||l||f&&!w||Or(c,s)&&w||Or(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!h&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let v=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&v}}function LS({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:l,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(F=>{let k=F[0];k&&(f=[[0,0],[k.contentRect.width,k.contentRect.height]])}):null)?.observe(e);let p=fp().extent(()=>f).scaleExtent([t,a]).translateExtent(o),h=Ot(e).call(p);x({x:n.x,y:n.y,zoom:is(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=h.on("wheel.zoom"),v=h.on("dblclick.zoom");p.wheelDelta(SS);async function g(F,k){return h?new Promise(M=>{p?.interpolate(k?.interpolate==="linear"?Hn:Ii).transform(kx(h,k?.duration,k?.ease,()=>M(!0)),F)}):!1}function b({noWheelClassName:F,noPanClassName:k,onPaneContextMenu:M,userSelectionActive:R,panOnScroll:I,panOnDrag:z,panOnScrollMode:B,panOnScrollSpeed:P,preventScrolling:D,zoomOnPinch:E,zoomOnScroll:U,zoomOnDoubleClick:Y,panActivationKeyPressed:Z=!1,zoomActivationKeyPressed:K,lib:$,onTransformChange:V,connectionInProgress:W,paneClickDistance:se,selectionOnDrag:pe}){R&&!u.isZoomingOrPanning&&m();let ae=I&&!K&&!R;p.clickDistance(pe?1/0:!xo(se)||se<0?0:se);let ie=ae?mT({zoomPanValues:u,noWheelClassName:F,d3Selection:h,d3Zoom:p,panOnScrollMode:B,panOnScrollSpeed:P,zoomOnPinch:E,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:l}):gT({noWheelClassName:F,preventScrolling:D,d3ZoomHandler:w});h.on("wheel.zoom",ie,{passive:!1});let ve=hT({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:i});p.on("start",ve);let ye=xT({zoomPanValues:u,panOnDrag:z,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:V});p.on("zoom",ye);let je=bT({zoomPanValues:u,panOnDrag:z,panOnScroll:I,onPaneContextMenu:M,onPanZoomEnd:l,onDraggingChange:s});p.on("end",je);let ee=wT({panActivationKeyPressed:Z,zoomActivationKeyPressed:K,panOnDrag:z,zoomOnScroll:U,panOnScroll:I,zoomOnDoubleClick:Y,zoomOnPinch:E,userSelectionActive:R,noPanClassName:k,noWheelClassName:F,lib:$,connectionInProgress:W});p.filter(ee),Y?h.on("dblclick.zoom",v):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(F,k,M){let R=Lx(F),I=p?.constrain()(R,k,M);return I&&await g(I),I}async function S(F,k){let M=Lx(F);return await g(M,k),M}function y(F){if(h){let k=Lx(F),M=h.property("__zoom");(M.k!==F.zoom||M.x!==F.x||M.y!==F.y)&&p?.transform(h,k,null,{sync:!0})}}function C(){let F=h?ru(h.node()):{x:0,y:0,k:1};return{x:F.x,y:F.y,zoom:F.k}}async function L(F,k){return h?new Promise(M=>{p?.interpolate(k?.interpolate==="linear"?Hn:Ii).scaleTo(kx(h,k?.duration,k?.ease,()=>M(!0)),F)}):!1}async function _(F,k){return h?new Promise(M=>{p?.interpolate(k?.interpolate==="linear"?Hn:Ii).scaleBy(kx(h,k?.duration,k?.ease,()=>M(!0)),F)}):!1}function T(F){p?.scaleExtent(F)}function A(F){p?.translateExtent(F)}function H(F){let k=!xo(F)||F<0?0:F;p?.clickDistance(k)}return{update:b,destroy:m,setViewport:S,setViewportConstrained:x,getViewport:C,scaleTo:L,scaleBy:_,setScaleExtent:T,setTranslateExtent:A,syncViewport:y,setClickDistance:H}}var Fr;(function(e){e.Line="line",e.Handle="handle"})(Fr||(Fr={}));function vT({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,l=a-o,s=[i>0?1:i<0?-1:0,l>0?1:l<0?-1:0];return i&&n&&(s[0]=s[0]*-1),l&&r&&(s[1]=s[1]*-1),s}function WC(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function zr(e,t){return Math.max(0,t-e)}function Pr(e,t){return Math.max(0,e-t)}function mp(e,t,a){return Math.max(0,t-e,e-a)}function KC(e,t){return e?!t:t}function yT(e,t,a,o,n,r,i,l){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:h}=a,{minWidth:w,maxWidth:v,minHeight:g,maxHeight:b}=o,{x:m,y:x,width:S,height:y,aspectRatio:C}=e,L=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?h-e.pointerY:0),T=S+(s?-L:L),A=y+(u?-_:_),H=-r[0]*S,F=-r[1]*y,k=mp(T,w,v),M=mp(A,g,b);if(i){let z=0,B=0;s&&L<0?z=zr(m+L+H,i[0][0]):!s&&L>0&&(z=Pr(m+T+H,i[1][0])),u&&_<0?B=zr(x+_+F,i[0][1]):!u&&_>0&&(B=Pr(x+A+F,i[1][1])),k=Math.max(k,z),M=Math.max(M,B)}if(l){let z=0,B=0;s&&L>0?z=Pr(m+L,l[0][0]):!s&&L<0&&(z=zr(m+T,l[1][0])),u&&_>0?B=Pr(x+_,l[0][1]):!u&&_<0&&(B=zr(x+A,l[1][1])),k=Math.max(k,z),M=Math.max(M,B)}if(n){if(d){let z=mp(T/C,g,b)*C;if(k=Math.max(k,z),i){let B=0;!s&&!u||s&&!u&&c?B=Pr(x+F+T/C,i[1][1])*C:B=zr(x+F+(s?L:-L)/C,i[0][1])*C,k=Math.max(k,B)}if(l){let B=0;!s&&!u||s&&!u&&c?B=zr(x+T/C,l[1][1])*C:B=Pr(x+(s?L:-L)/C,l[0][1])*C,k=Math.max(k,B)}}if(f){let z=mp(A*C,w,v)/C;if(M=Math.max(M,z),i){let B=0;!s&&!u||u&&!s&&c?B=Pr(m+A*C+H,i[1][0])/C:B=zr(m+(u?_:-_)*C+H,i[0][0])/C,M=Math.max(M,B)}if(l){let B=0;!s&&!u||u&&!s&&c?B=zr(m+A*C,l[1][0])/C:B=Pr(m+(u?_:-_)*C,l[0][0])/C,M=Math.max(M,B)}}}_=_+(_<0?M:-M),L=L+(L<0?k:-k),n&&(c?T>A*C?_=(KC(s,u)?-L:L)/C:L=(KC(s,u)?-_:_)*C:d?(_=L/C,u=s):(L=_*C,s=u));let R=s?m+L:m,I=u?x+_:x;return{width:S+(s?-L:L),height:y+(u?-_:_),x:r[0]*L*(s?-1:1)+R,y:r[1]*_*(u?-1:1)+I}}var kS={width:0,height:0,x:0,y:0},CT={...kS,pointerX:0,pointerY:0,aspectRatio:1};function ST(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,l=a[0]*r,s=a[1]*i;return[[o-l,n-s],[o+r-l,n+i-s]]}function _S({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=Ot(e),i={controlDirection:WC("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function l({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:h,onResizeEnd:w,shouldResize:v}){let g={...kS},b={...CT};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:WC(u)};let m,x=null,S=[],y,C,L,_=!1,T=Xf().on("start",A=>{let{nodeLookup:H,transform:F,snapGrid:k,snapToGrid:M,nodeOrigin:R,paneDomNode:I}=a();if(m=H.get(t),!m)return;x=I?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:B}=iu(A.sourceEvent,{transform:F,snapGrid:k,snapToGrid:M,containerBounds:x});g={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},b={...g,pointerX:z,pointerY:B,aspectRatio:g.width/g.height},y=void 0,C=Di(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(y=H.get(m.parentId)),y&&m.extent==="parent"&&(C=[[0,0],[y.measured.width,y.measured.height]]),S=[],L=void 0;for(let[P,D]of H)if(D.parentId===t&&(S.push({id:P,position:{...D.position},extent:D.extent}),D.extent==="parent"||D.expandParent)){let E=ST(D,m,D.origin??R);L?L=[[Math.min(E[0][0],L[0][0]),Math.min(E[0][1],L[0][1])],[Math.max(E[1][0],L[1][0]),Math.max(E[1][1],L[1][1])]]:L=E}p?.(A,{...g})}).on("drag",A=>{let{transform:H,snapGrid:F,snapToGrid:k,nodeOrigin:M}=a(),R=iu(A.sourceEvent,{transform:H,snapGrid:F,snapToGrid:k,containerBounds:x}),I=[];if(!m)return;let{x:z,y:B,width:P,height:D}=g,E={},U=m.origin??M,{width:Y,height:Z,x:K,y:$}=yT(b,i.controlDirection,R,i.boundaries,i.keepAspectRatio,U,C,L),V=Y!==P,W=Z!==D,se=K!==z&&V,pe=$!==B&&W;if(!se&&!pe&&!V&&!W)return;if((se||pe||U[0]===1||U[1]===1)&&(E.x=se?K:g.x,E.y=pe?$:g.y,g.x=E.x,g.y=E.y,S.length>0)){let ye=K-z,je=$-B;for(let ee of S)ee.position={x:ee.position.x-ye+U[0]*(Y-P),y:ee.position.y-je+U[1]*(Z-D)},I.push(ee)}if((V||W)&&(E.width=V&&(!i.resizeDirection||i.resizeDirection==="horizontal")?Y:g.width,E.height=W&&(!i.resizeDirection||i.resizeDirection==="vertical")?Z:g.height,g.width=E.width,g.height=E.height),y&&m.expandParent){let ye=U[0]*(E.width??0);E.x&&E.x<ye&&(g.x=ye,b.x=b.x-(E.x-ye));let je=U[1]*(E.height??0);E.y&&E.y<je&&(g.y=je,b.y=b.y-(E.y-je))}let ae=vT({width:g.width,prevWidth:P,height:g.height,prevHeight:D,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),ie={...g,direction:ae};v?.(A,ie)!==!1&&(_=!0,h?.(A,ie),o(E,I))}).on("end",A=>{_&&(w?.(A,{...g}),n?.({...g}),_=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:l,destroy:s}}var HS=N(J(),1),FS=N(RS(),1);var PS={},zS=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(h=>h(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(PS.env?PS.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},OS=e=>e?zS(e):zS;var{useDebugValue:UT}=HS.default,{useSyncExternalStoreWithSelector:qT}=FS.default,VT=e=>e;function Qx(e,t=VT,a){let o=qT(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return UT(o),o}var BS=(e,t)=>{let a=OS(e),o=(n,r=t)=>Qx(a,n,r);return Object.assign(o,a),o},US=(e,t)=>e?BS(e,t):BS;function Ze(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var GT=N(Dt()),Ap=(0,G.createContext)(null),XT=Ap.Provider,mL=Za.error001("react");function Ce(e,t){let a=(0,G.useContext)(Ap);if(a===null)throw new Error(mL);return Qx(a,e,t)}function it(){let e=(0,G.useContext)(Ap);if(e===null)throw new Error(mL);return(0,G.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var qS={display:"none"},jT={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},gL="react-flow__node-desc",hL="react-flow__edge-desc",YT="react-flow__aria-live",ZT=e=>e.ariaLiveMessage,WT=e=>e.ariaLabelConfig;function KT({rfId:e}){let t=Ce(ZT);return(0,q.jsx)("div",{id:`${YT}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:jT,children:t})}function $T({rfId:e,disableKeyboardA11y:t}){let a=Ce(WT);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{id:`${gL}-${e}`,style:qS,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,q.jsx)("div",{id:`${hL}-${e}`,style:qS,children:a["edge.a11yDescription.default"]}),!t&&(0,q.jsx)(KT,{rfId:e})]})}var Dp=(0,G.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,q.jsx)("div",{className:mt(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Dp.displayName="Panel";var VS="https://reactflow.dev?utm_source=attribution";function QT({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,q.jsx)(Dp,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${VS}`,children:(0,q.jsx)("a",{href:VS,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var JT=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Np=e=>e.id;function eA(e,t){return Ze(e.selectedNodes.map(Np),t.selectedNodes.map(Np))&&Ze(e.selectedEdges.map(Np),t.selectedEdges.map(Np))}function tA({onSelectionChange:e}){let t=it(),{selectedNodes:a,selectedEdges:o}=Ce(JT,eA);return(0,G.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var aA=e=>!!e.onSelectionChangeHandlers;function oA({onSelectionChange:e}){let t=Ce(aA);return e||t?(0,q.jsx)(tA,{onSelectionChange:e}):null}var xL=[0,0],nA={x:0,y:0,zoom:1},rA=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],GS=[...rA,"rfId"],iA=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),XS={translateExtent:ls,nodeOrigin:xL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function lA(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:l,setDefaultNodesAndEdges:s}=Ce(iA,Ze),u=it();(0,G.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=XS,l()}),[]);let d=(0,G.useRef)(XS);return(0,G.useEffect)(()=>{for(let f of GS){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:nS(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},GS.map(f=>e[f])),null}function jS(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function sA(e){let[t,a]=(0,G.useState)(e==="system"?null:e);return(0,G.useEffect)(()=>{if(e!=="system"){a(e);return}let o=jS(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:jS()?.matches?"dark":"light"}var YS=typeof document<"u"?document:null;function cu(e=null,t={target:YS,actInsideInputWithModifier:!0}){let[a,o]=(0,G.useState)(!1),n=(0,G.useRef)(!1),r=(0,G.useRef)(new Set([])),[i,l]=(0,G.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,G.useEffect)(()=>{let s=t?.target??YS,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&Vx(p))return!1;let w=WS(p.code,l);if(r.current.add(p[w]),ZS(i,r.current,!1)){let v=p.composedPath?.()?.[0]||p.target,g=v?.nodeName==="BUTTON"||v?.nodeName==="A";t.preventDefault!==!1&&(n.current||!g)&&p.preventDefault(),o(!0)}},f=p=>{let h=WS(p.code,l);ZS(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[h]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function ZS(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function WS(e,t){return t.includes(e)?"code":"key"}var dA=()=>{let e=it();return(0,G.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:l}=e.getState(),s=du(t,o,n,r,i,a?.padding??.1);return l?(await l.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:l,y:s}=i.getBoundingClientRect(),u={x:t.x-l,y:t.y-s},d=a.snapGrid??n,f=a.snapToGrid??r;return cs(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=Ai(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function bL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let l={...r};for(let s of i)uA(s,l);a.push(l)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function uA(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function a0(e,t){return bL(e,t)}function o0(e,t){return bL(e,t)}function Ri(e,t){return{id:e,type:"select",selected:t}}function gs(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(Ri(r.id,i)))}return o}function KS({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),l=i?.internals?.userNode??i;l!==void 0&&l!==r&&a.push({id:r.id,item:r,type:"replace"}),l===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function $S(e){return{id:e.id,type:"remove"}}var cA=Bx("React Flow","https://reactflow.dev/");function fA(e,t,a={}){return lS(e,t,{...a,onError:a.onError??cA})}var QS=e=>$C(e),pA=e=>Tx(e);function wL(e){return(0,G.forwardRef)(e)}var vL=typeof window<"u"?G.useLayoutEffect:G.useEffect;function JS(e){let[t,a]=(0,G.useState)(BigInt(0)),[o]=(0,G.useState)(()=>mA(()=>a(n=>n+BigInt(1))));return vL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function mA(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var yL=(0,G.createContext)(null);function gA({children:e}){let t=it(),a=(0,G.useCallback)(l=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),w=s;for(let g of l)w=typeof g=="function"?g(w):g;let v=KS({items:w,lookup:c});for(let g of h.values())v=g(v);d&&u(w),v.length>0?f?.(v):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:b,setNodes:m}=t.getState();g&&m(b)})},[]),o=JS(a),n=(0,G.useCallback)(l=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let h of l)p=typeof h=="function"?h(p):h;d?u(p):f&&f(KS({items:p,lookup:c}))},[]),r=JS(n),i=(0,G.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,q.jsx)(yL.Provider,{value:i,children:e})}function hA(){let e=(0,G.useContext)(yL);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var xA=e=>!!e.panZoom;function Wa(){let e=dA(),t=it(),a=hA(),o=Ce(xA),n=(0,G.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},l=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),h=QS(f)?f:c.get(f.id),w=h.parentId?Fx(h.position,h.measured,h.parentId,c,p):h.position,v={...h,position:w,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return ds(v)},u=(f,c,p={replace:!1})=>{i(h=>h.map(w=>{if(w.id===f){let v=typeof c=="function"?c(w):c;return p.replace&&QS(v)?v:{...w,...v}}return w}))},d=(f,c,p={replace:!1})=>{l(h=>h.map(w=>{if(w.id===f){let v=typeof c=="function"?c(w):c;return p.replace&&pA(v)?v:{...w,...v}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:l,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[h,w,v]=p;return{nodes:f.map(g=>({...g})),edges:c.map(g=>({...g})),viewport:{x:h,y:w,zoom:v}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:h,onNodesDelete:w,onEdgesDelete:v,triggerNodeChanges:g,triggerEdgeChanges:b,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:S,edges:y}=await eS({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:h,onBeforeDelete:x}),C=y.length>0,L=S.length>0;if(C){let _=y.map($S);v?.(y),b(_)}if(L){let _=S.map($S);w?.(S),g(_)}return(L||C)&&m?.({nodes:S,edges:y}),{deletedNodes:S,deletedEdges:y}},getIntersectingNodes:(f,c=!0,p)=>{let h=Ox(f),w=h?f:s(f),v=p!==void 0;return w?(p||t.getState().nodes).filter(g=>{let b=t.getState().nodeLookup.get(g.id);if(b&&!h&&(g.id===f.id||!b.internals.positionAbsolute))return!1;let m=ds(v?g:b),x=su(m,w);return c&&x>0||x>=m.width*m.height||x>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=Ox(f)?f:s(f);if(!w)return!1;let v=su(w,c);return p&&v>0||v>=c.width*c.height||v>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,h=>{let w=typeof c=="function"?c(h):c;return p.replace?{...h,data:w}:{...h,data:{...h.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,h=>{let w=typeof c=="function"?c(h):c;return p.replace?{...h,data:w}:{...h,data:{...h.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Rx(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??oS();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,G.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var eL=e=>e.selected,bA=typeof window<"u"?window:void 0;function wA({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=it(),{deleteElements:o}=Wa(),n=cu(e,{actInsideInputWithModifier:!1}),r=cu(t,{target:bA});(0,G.useEffect)(()=>{if(n){let{edges:i,nodes:l}=a.getState();o({nodes:l.filter(eL),edges:i.filter(eL)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,G.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function vA(e){let t=it();(0,G.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=vp(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Za.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Rp={position:"absolute",width:"100%",height:"100%",top:0,left:0},yA=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function CA({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=Ao.Free,zoomOnDoubleClick:l=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:h=!0,children:w,noWheelClassName:v,noPanClassName:g,onViewportChange:b,isControlledViewport:m,paneClickDistance:x,selectionOnDrag:S}){let y=it(),C=(0,G.useRef)(null),{userSelectionActive:L,lib:_,connectionInProgress:T}=Ce(yA,Ze),A=cu(p),H=(0,G.useRef)();vA(C);let F=(0,G.useCallback)(k=>{b?.({x:k[0],y:k[1],zoom:k[2]}),m||y.setState({transform:k})},[b,m]);return(0,G.useEffect)(()=>{if(C.current){H.current=LS({domNode:C.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:I=>y.setState(z=>z.paneDragging===I?z:{paneDragging:I}),onPanZoomStart:(I,z)=>{let{onViewportChangeStart:B,onMoveStart:P}=y.getState();P?.(I,z),B?.(z)},onPanZoom:(I,z)=>{let{onViewportChange:B,onMove:P}=y.getState();P?.(I,z),B?.(z)},onPanZoomEnd:(I,z)=>{let{onViewportChangeEnd:B,onMoveEnd:P}=y.getState();P?.(I,z),B?.(z)}});let{x:k,y:M,zoom:R}=H.current.getViewport();return y.setState({panZoom:H.current,transform:[k,M,R],domNode:C.current.closest(".react-flow")}),()=>{H.current?.destroy()}}},[]),(0,G.useEffect)(()=>{H.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:l,panOnDrag:s,zoomActivationKeyPressed:A,preventScrolling:h,noPanClassName:g,userSelectionActive:L,noWheelClassName:v,lib:_,onTransformChange:F,connectionInProgress:T,selectionOnDrag:S,paneClickDistance:x})},[e,t,a,o,n,r,i,l,s,A,h,g,L,v,_,F,T,S,x]),(0,q.jsx)("div",{className:"react-flow__renderer",ref:C,style:Rp,children:w})}var SA=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function LA(){let{userSelectionActive:e,userSelectionRect:t}=Ce(SA,Ze);return e&&t?(0,q.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Jx=(e,t)=>a=>{a.target===t.current&&e?.(a)},kA=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function _A({isSelecting:e,selectionKeyPressed:t,selectionMode:a=Un.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:l,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:h,children:w}){let v=(0,G.useRef)(0),g=it(),{userSelectionActive:b,elementsSelectable:m,dragging:x,panBy:S,autoPanSpeed:y}=Ce(kA,Ze),C=m&&(e||b),L=(0,G.useRef)(null),_=(0,G.useRef)(),T=(0,G.useRef)(new Set),A=(0,G.useRef)(new Set),H=(0,G.useRef)(!1),F=(0,G.useRef)(!1),k=(0,G.useRef)({x:0,y:0}),M=(0,G.useRef)(!1),R=V=>{if(F.current||H.current||g.getState().connection.inProgress){F.current=!1,H.current=!1;return}u?.(V),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},I=V=>{if(Array.isArray(o)&&o?.includes(2)){V.preventDefault();return}d?.(V)},z=f?V=>f(V):void 0,B=V=>{F.current&&(V.stopPropagation(),F.current=!1)},P=V=>{if(V.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:W,transform:se}=g.getState();if(_.current=W?.getBoundingClientRect(),!_.current)return;let pe=V.target===L.current;if(!pe&&!!V.target.closest(".nokey")||!e||!(i&&pe||t)||V.button!==0||!V.isPrimary)return;V.target?.setPointerCapture?.(V.pointerId),F.current=!1;let{x:ve,y:ye}=bo(V.nativeEvent,_.current),je=cs({x:ve,y:ye},se);g.setState({userSelectionRect:{width:0,height:0,startX:je.x,startY:je.y,x:ve,y:ye}}),pe||(V.stopPropagation(),V.preventDefault())};function D(V,W){let{userSelectionRect:se}=g.getState();if(!se)return;let{transform:pe,nodeLookup:ae,edgeLookup:ie,connectionLookup:ve,triggerNodeChanges:ye,triggerEdgeChanges:je,defaultEdgeOptions:ee}=g.getState(),Ee={x:se.startX,y:se.startY},{x:Pe,y:Mt}=Ai(Ee,pe),va={startX:Ee.x,startY:Ee.y,x:V<Pe?V:Pe,y:W<Mt?W:Mt,width:Math.abs(V-Pe),height:Math.abs(W-Mt)},Yo=T.current,mn=A.current;T.current=new Set(hp(ae,va,pe,a===Un.Partial,!0).map(Oa=>Oa.id)),A.current=new Set;let gn=ee?.selectable??!0;for(let Oa of T.current){let Lo=ve.get(Oa);if(Lo)for(let{edgeId:ko}of Lo.values()){let Q=ie.get(ko);Q&&(Q.selectable??gn)&&A.current.add(ko)}}if(!Ux(Yo,T.current)){let Oa=gs(ae,T.current,!0);ye(Oa)}if(!Ux(mn,A.current)){let Oa=gs(ie,A.current);je(Oa)}g.setState({userSelectionRect:va,userSelectionActive:!0,nodesSelectionActive:!1})}function E(){if(!n||!_.current)return;let[V,W]=xp(k.current,_.current,y);S({x:V,y:W}).then(se=>{if(!F.current||!se){v.current=requestAnimationFrame(E);return}let{x:pe,y:ae}=k.current;D(pe,ae),v.current=requestAnimationFrame(E)})}let U=()=>{cancelAnimationFrame(v.current),v.current=0,M.current=!1};(0,G.useEffect)(()=>()=>U(),[]);let Y=V=>{let{userSelectionRect:W,transform:se,resetSelectedElements:pe}=g.getState();if(!_.current||!W)return;let{x:ae,y:ie}=bo(V.nativeEvent,_.current);k.current={x:ae,y:ie};let ve=Ai({x:W.startX,y:W.startY},se);if(!F.current){let ye=t?0:r;if(Math.hypot(ae-ve.x,ie-ve.y)<=ye)return;pe(),l?.(V)}F.current=!0,M.current||(E(),M.current=!0),D(ae,ie)},Z=V=>{if(!C){V.target===L.current&&g.getState().connection.inProgress&&(H.current=!0);return}V.button===0&&(V.target?.releasePointerCapture?.(V.pointerId),!b&&V.target===L.current&&g.getState().userSelectionRect&&R?.(V),g.setState({userSelectionActive:!1,userSelectionRect:null}),F.current&&(s?.(V),g.setState({nodesSelectionActive:T.current.size>0})),U())},K=V=>{V.target?.releasePointerCapture?.(V.pointerId),U()},$=o===!0||Array.isArray(o)&&o.includes(0);return(0,q.jsxs)("div",{className:mt(["react-flow__pane",{draggable:$,dragging:x,selection:e}]),onClick:C?void 0:Jx(R,L),onContextMenu:Jx(I,L),onWheel:Jx(z,L),onPointerEnter:C?void 0:c,onPointerMove:C?Y:p,onPointerUp:Z,onPointerCancel:C?K:void 0,onPointerDownCapture:C?P:void 0,onClickCapture:C?B:void 0,onPointerLeave:h,ref:L,style:Rp,children:[w,(0,q.jsx)(LA,{})]})}function t0({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:l,onError:s}=t.getState(),u=l.get(e);if(!u){s?.("012",Za.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function CL({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let l=it(),[s,u]=(0,G.useState)(!1),d=(0,G.useRef)();return(0,G.useEffect)(()=>{if(!t)return d.current=hS({getStoreItems:()=>l.getState(),onNodeMouseDown:f=>{t0({id:f,store:l,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,l,e]),(0,G.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),s}var IA=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function SL(){let e=it();return(0,G.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:l,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=IA(i),p=n?r[0]:5,h=n?r[1]:5,w=a.direction.x*p*a.factor,v=a.direction.y*h*a.factor;for(let[,g]of u){if(!c(g))continue;let b={x:g.internals.positionAbsolute.x+w,y:g.internals.positionAbsolute.y+v};n&&(b=us(b,r));let{position:m,positionAbsolute:x}=zx({nodeId:g.id,nextPosition:b,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:l});g.position=m,g.internals.positionAbsolute=x,f.set(g.id,g)}s(f)},[])}var n0=(0,G.createContext)(null),MA=n0.Provider;n0.Consumer;var LL=()=>(0,G.useContext)(n0),NA=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),kL=(0,G.createContext)(null);function EA({children:e}){let t=Ce(NA,Ze);return(0,q.jsx)(kL.Provider,{value:t,children:e})}function TA(){let e=(0,G.useContext)(kL);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var AA={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},DA=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:l,toHandle:s,isValid:u}=i;if(!l&&!n)return AA;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:l?.nodeId===e&&l?.id===t&&l?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===Br.Strict?l?.type!==a:e!==l?.nodeId||t!==l?.id,connectionInProcess:!!l,clickConnectionInProcess:!!n,valid:d&&u}};function RA({type:e="source",position:t=oe.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:l,children:s,className:u,onMouseDown:d,onTouchStart:f,...c},p){let h=i||null,w=e==="target",v=it(),g=LL(),{connectOnClick:b,noPanClassName:m,rfId:x}=TA(),{connectingFrom:S,connectingTo:y,clickConnecting:C,isPossibleEndHandle:L,connectionInProcess:_,clickConnectionInProcess:T,valid:A}=Ce(DA(g,h,e),Ze);g||v.getState().onError?.("010",Za.error010());let H=M=>{let{defaultEdgeOptions:R,onConnect:I,hasDefaultEdges:z}=v.getState(),B={...R,...M};if(z){let{edges:P,setEdges:D,onError:E}=v.getState();D(fA(B,P,{onError:E}))}I?.(B),l?.(B)},F=M=>{if(!g)return;let R=Gx(M.nativeEvent);if(n&&(R&&M.button===0||!R)){let I=v.getState();_p.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:w,handleId:h,nodeId:g,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...z)=>v.getState().onConnectEnd?.(...z),updateConnection:I.updateConnection,onConnect:H,isValidConnection:a||((...z)=>v.getState().isValidConnection?.(...z)??!0),getTransform:()=>v.getState().transform,getFromHandle:()=>v.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}R?d?.(M):f?.(M)},k=M=>{let{onClickConnectStart:R,onClickConnectEnd:I,connectionClickStartHandle:z,connectionMode:B,isValidConnection:P,lib:D,rfId:E,nodeLookup:U,connection:Y}=v.getState();if(!g||!z&&!n)return;if(!z){R?.(M.nativeEvent,{nodeId:g,handleId:h,handleType:e}),v.setState({connectionClickStartHandle:{nodeId:g,type:e,id:h}});return}let Z=qx(M.target),K=a||P,{connection:$,isValid:V}=_p.isValid(M.nativeEvent,{handle:{nodeId:g,id:h,type:e},connectionMode:B,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:K,flowId:E,doc:Z,lib:D,nodeLookup:U});V&&$&&H($);let W=structuredClone(Y);delete W.inProgress,W.toPosition=W.toHandle?W.toHandle.position:null,I?.(M,W),v.setState({connectionClickStartHandle:null})};return(0,q.jsx)("div",{"data-handleid":h,"data-nodeid":g,"data-handlepos":t,"data-id":`${x}-${g}-${h}-${e}`,className:mt(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:C,connectingfrom:S,connectingto:y,valid:A,connectionindicator:o&&(!_||L)&&(_||T?r:n)}]),onMouseDown:F,onTouchStart:F,onClick:b?k:void 0,ref:p,...c,children:s})}var hs=(0,G.memo)(wL(RA));function zA({data:e,isConnectable:t,sourcePosition:a=oe.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[e?.label,(0,q.jsx)(hs,{type:"source",position:a,isConnectable:t})]})}function PA({data:e,isConnectable:t,targetPosition:a=oe.Top,sourcePosition:o=oe.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(hs,{type:"target",position:a,isConnectable:t}),e?.label,(0,q.jsx)(hs,{type:"source",position:o,isConnectable:t})]})}function OA(){return null}function BA({data:e,isConnectable:t,targetPosition:a=oe.Top}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(hs,{type:"target",position:a,isConnectable:t}),e?.label]})}var Tp={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},tL={input:zA,default:PA,output:BA,group:OA};function HA(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var FA=e=>{let{width:t,height:a,x:o,y:n}=ss(e.nodeLookup,{filter:r=>!!r.selected});return{width:xo(t)?t:null,height:xo(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function UA({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=it(),{width:n,height:r,transformString:i,userSelectionActive:l}=Ce(FA,Ze),s=SL(),u=(0,G.useRef)(null);(0,G.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!l&&n!==null&&r!==null;if(CL({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let h=o.getState().nodes.filter(w=>w.selected);e(p,h)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Tp,p.key)&&(p.preventDefault(),s({direction:Tp[p.key],factor:p.shiftKey?4:1}))};return(0,q.jsx)("div",{className:mt(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,q.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var aL=typeof window<"u"?window:void 0,qA=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function _L({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:l,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:w,zoomActivationKeyCode:v,elementsSelectable:g,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:S,panOnScrollMode:y,zoomOnDoubleClick:C,panOnDrag:L,autoPanOnSelection:_,defaultViewport:T,translateExtent:A,minZoom:H,maxZoom:F,preventScrolling:k,onSelectionContextMenu:M,noWheelClassName:R,noPanClassName:I,disableKeyboardA11y:z,onViewportChange:B,isControlledViewport:P}){let{nodesSelectionActive:D,userSelectionActive:E}=Ce(qA,Ze),U=cu(u,{target:aL}),Y=cu(w,{target:aL}),Z=Y||L,K=Y||x,$=d&&Z!==!0,V=U||E||$;return wA({deleteKeyCode:s,multiSelectionKeyCode:h}),(0,q.jsx)(CA,{onPaneContextMenu:r,elementsSelectable:g,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:K,panActivationKeyPressed:Y,panOnScrollSpeed:S,panOnScrollMode:y,zoomOnDoubleClick:C,panOnDrag:!U&&Z,defaultViewport:T,translateExtent:A,minZoom:H,maxZoom:F,zoomActivationKeyCode:v,preventScrolling:k,noWheelClassName:R,noPanClassName:I,onViewportChange:B,isControlledViewport:P,paneClickDistance:l,selectionOnDrag:$,children:(0,q.jsxs)(_A,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:Z,autoPanOnSelection:_,isSelecting:!!V,selectionMode:f,selectionKeyPressed:U,paneClickDistance:l,selectionOnDrag:$,children:[e,D&&(0,q.jsx)(UA,{onSelectionContextMenu:M,noPanClassName:I,disableKeyboardA11y:z})]})})}_L.displayName="FlowRenderer";var VA=(0,G.memo)(_L),GA=e=>t=>e?hp(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function XA(e){return Ce((0,G.useCallback)(GA(e),[e]),Ze)}var jA=e=>e.updateNodeInternals;function YA(){let e=Ce(jA),[t]=(0,G.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,G.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function ZA({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=it(),r=(0,G.useRef)(null),i=(0,G.useRef)(null),l=(0,G.useRef)(e.sourcePosition),s=(0,G.useRef)(e.targetPosition),u=(0,G.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,G.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,G.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,G.useEffect)(()=>{if(r.current){let f=u.current!==t,c=l.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(u.current=t,l.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function WA({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:l,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:h,rfId:w,nodeTypes:v,nodeClickDistance:g,onError:b}){let{node:m,internals:x,isParent:S}=Ce(V=>{let W=V.nodeLookup.get(e),se=V.parentLookup.has(e);return{node:W,internals:W.internals,isParent:se}},Ze),y=m.type||"default",C=v?.[y]||tL[y];C===void 0&&(b?.("003",Za.error003(y)),y="default",C=v?.default||tL.default);let L=!!(m.draggable||l&&typeof m.draggable>"u"),_=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),A=!!(m.focusable||d&&typeof m.focusable>"u"),H=it(),F=Hx(m),k=ZA({node:m,nodeType:y,hasDimensions:F,resizeObserver:f}),M=CL({nodeRef:k,disabled:m.hidden||!L,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:g}),R=SL();if(m.hidden)return null;let I=wo(m),z=HA(m),B=_||L||t||a||o||n,P=a?V=>a(V,{...x.userNode}):void 0,D=o?V=>o(V,{...x.userNode}):void 0,E=n?V=>n(V,{...x.userNode}):void 0,U=r?V=>r(V,{...x.userNode}):void 0,Y=i?V=>i(V,{...x.userNode}):void 0,Z=V=>{let{selectNodesOnDrag:W,nodeDragThreshold:se}=H.getState();_&&(!W||!L||se>0)&&t0({id:e,store:H,nodeRef:k}),t&&t(V,{...x.userNode})},K=V=>{if(!(Vx(V.nativeEvent)||h)){if(Ix.includes(V.key)&&_){let W=V.key==="Escape";t0({id:e,store:H,unselect:W,nodeRef:k})}else if(L&&m.selected&&Object.prototype.hasOwnProperty.call(Tp,V.key)){V.preventDefault();let{ariaLabelConfig:W}=H.getState();H.setState({ariaLiveMessage:W["node.a11yDescription.ariaLiveMessage"]({direction:V.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),R({direction:Tp[V.key],factor:V.shiftKey?4:1})}}},$=()=>{if(h||!k.current?.matches(":focus-visible"))return;let{transform:V,width:W,height:se,autoPanOnNodeFocus:pe,setCenter:ae}=H.getState();if(!pe)return;hp(new Map([[e,m]]),{x:0,y:0,width:W,height:se},V,!0).length>0||ae(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:V[2]})};return(0,q.jsx)("div",{className:mt(["react-flow__node",`react-flow__node-${y}`,{[p]:L},m.className,{selected:m.selected,selectable:_,parent:S,draggable:L,dragging:M}]),ref:k,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:B?"all":"none",visibility:F?"visible":"hidden",...m.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:P,onMouseMove:D,onMouseLeave:E,onContextMenu:U,onClick:Z,onDoubleClick:Y,onKeyDown:A?K:void 0,tabIndex:A?0:void 0,onFocus:A?$:void 0,role:m.ariaRole??(A?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${gL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,q.jsx)(MA,{value:e,children:(0,q.jsx)(C,{id:e,data:m.data,type:y,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:L,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...I})})})}var KA=(0,G.memo)(WA),$A=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function IL(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=Ce($A,Ze),r=XA(e.onlyRenderVisibleElements),i=YA();return(0,q.jsx)("div",{className:"react-flow__nodes",style:Rp,children:r.map(l=>(0,q.jsx)(KA,{id:l,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},l))})}IL.displayName="NodeRenderer";var QA=(0,G.memo)(IL);function JA(e){return Ce((0,G.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&iS({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ze)}var e8=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,q.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},t8=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,q.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},oL={[rs.Arrow]:e8,[rs.ArrowClosed]:t8};function a8(e){let t=it();return(0,G.useMemo)(()=>Object.prototype.hasOwnProperty.call(oL,e)?oL[e]:(t.getState().onError?.("009",Za.error009(e)),null),[e])}var o8=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:l="auto-start-reverse"})=>{let s=a8(t);return s?(0,q.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:l,refX:"0",refY:"0",children:(0,q.jsx)(s,{color:a,strokeWidth:i})}):null},ML=({defaultColor:e,rfId:t})=>{let a=Ce(r=>r.edges),o=Ce(r=>r.defaultEdgeOptions),n=(0,G.useMemo)(()=>dS(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,q.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,q.jsx)("defs",{children:n.map(r=>(0,q.jsx)(o8,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};ML.displayName="MarkerDefinitions";var n8=(0,G.memo)(ML);function NL({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:l=2,children:s,className:u,...d}){let[f,c]=(0,G.useState)({x:1,y:0,width:0,height:0}),p=mt(["react-flow__edge-textwrapper",u]),h=(0,G.useRef)(null);return(0,G.useEffect)(()=>{if(h.current){let w=h.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,q.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,q.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:l,ry:l}),(0,q.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:h,style:o,children:a}),s]}):null}NL.displayName="EdgeText";var r8=(0,G.memo)(NL);function xs({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("path",{...d,d:e,fill:"none",className:mt(["react-flow__edge-path",d.className])}),u?(0,q.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&xo(t)&&xo(a)?(0,q.jsx)(r8,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s}):null]})}function nL({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===oe.Left||e===oe.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function EL({sourceX:e,sourceY:t,sourcePosition:a=oe.Bottom,targetX:o,targetY:n,targetPosition:r=oe.Top}){let[i,l]=nL({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=nL({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=yp({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:l,targetControlX:s,targetControlY:u});return[`M${e},${t} C${i},${l} ${s},${u} ${o},${n}`,d,f,c,p]}function TL(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:l,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,interactionWidth:g})=>{let[b,m,x]=EL({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l}),S=e.isInternal?void 0:t;return(0,q.jsx)(xs,{id:S,path:b,labelX:m,labelY:x,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,interactionWidth:g})})}var i8=TL({isInternal:!1}),AL=TL({isInternal:!0});i8.displayName="SimpleBezierEdge";AL.displayName="SimpleBezierEdgeInternal";function DL(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=oe.Bottom,targetPosition:h=oe.Top,markerEnd:w,markerStart:v,pathOptions:g,interactionWidth:b})=>{let[m,x,S]=uu({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:h,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),y=e.isInternal?void 0:t;return(0,q.jsx)(xs,{id:y,path:m,labelX:x,labelY:S,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:v,interactionWidth:b})})}var RL=DL({isInternal:!1}),zL=DL({isInternal:!0});RL.displayName="SmoothStepEdge";zL.displayName="SmoothStepEdgeInternal";function PL(e){return(0,G.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,q.jsx)(RL,{...a,id:o,pathOptions:(0,G.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var l8=PL({isInternal:!1}),OL=PL({isInternal:!0});l8.displayName="StepEdge";OL.displayName="StepEdgeInternal";function BL(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:h,interactionWidth:w})=>{let[v,g,b]=Cp({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,q.jsx)(xs,{id:m,path:v,labelX:g,labelY:b,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:h,interactionWidth:w})})}var s8=BL({isInternal:!1}),HL=BL({isInternal:!0});s8.displayName="StraightEdge";HL.displayName="StraightEdgeInternal";function FL(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=oe.Bottom,targetPosition:l=oe.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,pathOptions:g,interactionWidth:b})=>{let[m,x,S]=ps({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l,curvature:g?.curvature}),y=e.isInternal?void 0:t;return(0,q.jsx)(xs,{id:y,path:m,labelX:x,labelY:S,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,interactionWidth:b})})}var d8=FL({isInternal:!1}),UL=FL({isInternal:!0});d8.displayName="BezierEdge";UL.displayName="BezierEdgeInternal";var rL={default:UL,straight:HL,step:OL,smoothstep:zL,simplebezier:AL},iL={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},u8=(e,t,a)=>a===oe.Left?e-t:a===oe.Right?e+t:e,c8=(e,t,a)=>a===oe.Top?e-t:a===oe.Bottom?e+t:e,lL="react-flow__edgeupdater";function sL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:l}){return(0,q.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:mt([lL,`${lL}-${l}`]),cx:u8(t,o,e),cy:c8(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function f8({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let h=it(),w=(x,S)=>{if(x.button!==0)return;let{autoPanOnConnect:y,domNode:C,connectionMode:L,connectionRadius:_,lib:T,onConnectStart:A,cancelConnection:H,nodeLookup:F,rfId:k,panBy:M,updateConnection:R}=h.getState(),I=S.type==="target",z=(D,E)=>{c(!1),f?.(D,a,S.type,E)},B=D=>u?.(a,D),P=(D,E)=>{c(!0),d?.(x,a,S.type),A?.(D,E)};_p.onPointerDown(x.nativeEvent,{autoPanOnConnect:y,connectionMode:L,connectionRadius:_,domNode:C,handleId:S.id,nodeId:S.nodeId,nodeLookup:F,isTarget:I,edgeUpdaterType:S.type,lib:T,flowId:k,cancelConnection:H,panBy:M,isValidConnection:(...D)=>h.getState().isValidConnection?.(...D)??!0,onConnect:B,onConnectStart:P,onConnectEnd:(...D)=>h.getState().onConnectEnd?.(...D),onReconnectEnd:z,updateConnection:R,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},v=x=>w(x,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),g=x=>w(x,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),b=()=>p(!0),m=()=>p(!1);return(0,q.jsxs)(q.Fragment,{children:[(e===!0||e==="source")&&(0,q.jsx)(sL,{position:l,centerX:o,centerY:n,radius:t,onMouseDown:v,onMouseEnter:b,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,q.jsx)(sL,{position:s,centerX:r,centerY:i,radius:t,onMouseDown:g,onMouseEnter:b,onMouseOut:m,type:"target"})]})}function p8({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:h,edgeTypes:w,noPanClassName:v,onError:g,disableKeyboardA11y:b}){let m=Ce(ae=>ae.edgeLookup.get(e)),x=Ce(ae=>ae.defaultEdgeOptions);m=x?{...x,...m}:m;let S=m.type||"default",y=w?.[S]||rL[S];y===void 0&&(g?.("011",Za.error011(S)),S="default",y=w?.default||rL.default);let C=!!(m.focusable||t&&typeof m.focusable>"u"),L=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,G.useRef)(null),[A,H]=(0,G.useState)(!1),[F,k]=(0,G.useState)(!1),M=it(),{zIndex:R=m.zIndex,sourceX:I,sourceY:z,targetX:B,targetY:P,sourcePosition:D,targetPosition:E}=Ce((0,G.useCallback)(ae=>{let ie=ae.nodeLookup.get(m.source),ve=ae.nodeLookup.get(m.target);if(!ie||!ve)return iL;let ye=sS({id:e,sourceNode:ie,targetNode:ve,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:ae.connectionMode,onError:g}),je=rS({selected:m.selected,zIndex:m.zIndex,sourceNode:ie,targetNode:ve,elevateOnSelect:ae.elevateEdgesOnSelect,zIndexMode:ae.zIndexMode});return{...ye||iL,zIndex:je}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,g]),Ze),U=(0,G.useMemo)(()=>m.markerStart?`url('#${Sp(m.markerStart,h)}')`:void 0,[m.markerStart,h]),Y=(0,G.useMemo)(()=>m.markerEnd?`url('#${Sp(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||I===null||z===null||B===null||P===null)return null;let Z=ae=>{let{addSelectedEdges:ie,unselectNodesAndEdges:ve,multiSelectionActive:ye}=M.getState();_&&(M.setState({nodesSelectionActive:!1}),m.selected&&ye?(ve({nodes:[],edges:[m]}),T.current?.blur()):ie([e])),n&&n(ae,m)},K=r?ae=>{r(ae,{...m})}:void 0,$=i?ae=>{i(ae,{...m})}:void 0,V=l?ae=>{l(ae,{...m})}:void 0,W=s?ae=>{s(ae,{...m})}:void 0,se=u?ae=>{u(ae,{...m})}:void 0,pe=ae=>{if(!b&&Ix.includes(ae.key)&&_){let{unselectNodesAndEdges:ie,addSelectedEdges:ve}=M.getState();ae.key==="Escape"?(T.current?.blur(),ie({edges:[m]})):ve([e])}};return(0,q.jsx)("svg",{style:{zIndex:R},children:(0,q.jsxs)("g",{className:mt(["react-flow__edge",`react-flow__edge-${S}`,m.className,v,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:A,selectable:_}]),onClick:Z,onDoubleClick:K,onContextMenu:$,onMouseEnter:V,onMouseMove:W,onMouseLeave:se,onKeyDown:C?pe:void 0,tabIndex:C?0:void 0,role:m.ariaRole??(C?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":C?`${hL}-${h}`:void 0,ref:T,...m.domAttributes,children:[!F&&(0,q.jsx)(y,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:z,targetX:B,targetY:P,sourcePosition:D,targetPosition:E,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:U,markerEnd:Y,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),L&&(0,q.jsx)(f8,{edge:m,isReconnectable:L,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:I,sourceY:z,targetX:B,targetY:P,sourcePosition:D,targetPosition:E,setUpdateHover:H,setReconnecting:k})]})})}var m8=(0,G.memo)(p8),g8=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function qL({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:l,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:w}){let{edgesFocusable:v,edgesReconnectable:g,elementsSelectable:b,onError:m}=Ce(g8,Ze),x=JA(t);return(0,q.jsxs)("div",{className:"react-flow__edges",children:[(0,q.jsx)(n8,{defaultColor:e,rfId:a}),x.map(S=>(0,q.jsx)(m8,{id:S,edgesFocusable:v,edgesReconnectable:g,elementsSelectable:b,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:h,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},S))]})}qL.displayName="EdgeRenderer";var h8=(0,G.memo)(qL),dL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function x8({children:e}){let t=it(),a=(0,G.useRef)(null),[o]=(0,G.useState)(()=>t.getState().transform);return vL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=dL(i)))};return r(),t.subscribe(r)},[t]),(0,q.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:dL(o)},children:e})}function b8(e){let t=Wa(),a=(0,G.useRef)(!1);(0,G.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var w8=e=>e.panZoom?.syncViewport;function v8(e){let t=Ce(w8),a=it();return(0,G.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function uL(e){return e.connection.inProgress?{...e.connection,to:cs(e.connection.to,e.transform)}:{...e.connection}}function y8(e){return e?a=>{let o=uL(a);return e(o)}:uL}function r0(e){let t=y8(e);return Ce(t,Ze)}var C8=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function S8({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:l,inProgress:s}=Ce(C8,Ze);return!(r&&n&&s)?null:(0,q.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,q.jsx)("g",{className:mt(["react-flow__connection",Ex(l)]),children:(0,q.jsx)(VL,{style:t,type:a,CustomComponent:o,isValid:l})})})}var VL=({style:e,type:t=an.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:l,fromPosition:s,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=r0();if(!n)return;if(a)return(0,q.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:l,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:Ex(o),toNode:d,toHandle:f,pointer:p});let h="",w={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case an.Bezier:[h]=ps(w);break;case an.SimpleBezier:[h]=EL(w);break;case an.Step:[h]=uu({...w,borderRadius:0});break;case an.SmoothStep:[h]=uu(w);break;default:[h]=Cp(w)}return(0,q.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};VL.displayName="ConnectionLine";var L8={};function cL(e=L8){let t=(0,G.useRef)(e),a=it();(0,G.useEffect)(()=>{},[e])}function k8(){let e=it(),t=(0,G.useRef)(!1);(0,G.useEffect)(()=>{},[])}function GL({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:w,connectionLineComponent:v,connectionLineContainerStyle:g,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:S,panActivationKeyCode:y,zoomActivationKeyCode:C,deleteKeyCode:L,onlyRenderVisibleElements:_,elementsSelectable:T,defaultViewport:A,translateExtent:H,minZoom:F,maxZoom:k,preventScrolling:M,defaultMarkerColor:R,zoomOnScroll:I,zoomOnPinch:z,panOnScroll:B,panOnScrollSpeed:P,panOnScrollMode:D,zoomOnDoubleClick:E,panOnDrag:U,autoPanOnSelection:Y,onPaneClick:Z,onPaneMouseEnter:K,onPaneMouseMove:$,onPaneMouseLeave:V,onPaneScroll:W,onPaneContextMenu:se,paneClickDistance:pe,nodeClickDistance:ae,onEdgeContextMenu:ie,onEdgeMouseEnter:ve,onEdgeMouseMove:ye,onEdgeMouseLeave:je,reconnectRadius:ee,onReconnect:Ee,onReconnectStart:Pe,onReconnectEnd:Mt,noDragClassName:va,noWheelClassName:Yo,noPanClassName:mn,disableKeyboardA11y:gn,nodeExtent:Oa,rfId:Lo,viewport:ko,onViewportChange:Q,nodesDraggable:Oe}){return cL(e),cL(t),k8(),b8(a),v8(ko),(0,q.jsx)(VA,{onPaneClick:Z,onPaneMouseEnter:K,onPaneMouseMove:$,onPaneMouseLeave:V,onPaneContextMenu:se,onPaneScroll:W,paneClickDistance:pe,deleteKeyCode:L,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:y,zoomActivationKeyCode:C,elementsSelectable:T,zoomOnScroll:I,zoomOnPinch:z,zoomOnDoubleClick:E,panOnScroll:B,panOnScrollSpeed:P,panOnScrollMode:D,panOnDrag:U,autoPanOnSelection:Y,defaultViewport:A,translateExtent:H,minZoom:F,maxZoom:k,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:va,noWheelClassName:Yo,noPanClassName:mn,disableKeyboardA11y:gn,onViewportChange:Q,isControlledViewport:!!ko,children:(0,q.jsxs)(x8,{children:[(0,q.jsx)(h8,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:Ee,onReconnectStart:Pe,onReconnectEnd:Mt,onlyRenderVisibleElements:_,onEdgeContextMenu:ie,onEdgeMouseEnter:ve,onEdgeMouseMove:ye,onEdgeMouseLeave:je,reconnectRadius:ee,defaultMarkerColor:R,noPanClassName:mn,disableKeyboardA11y:gn,rfId:Lo}),(0,q.jsx)(S8,{style:w,type:h,component:v,containerStyle:g}),(0,q.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,q.jsx)(QA,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:ae,onlyRenderVisibleElements:_,noPanClassName:mn,noDragClassName:va,disableKeyboardA11y:gn,nodeExtent:Oa,rfId:Lo,nodesDraggable:Oe}),(0,q.jsx)("div",{className:"react-flow__viewport-portal"})]})})}GL.displayName="GraphView";var _8=(0,G.memo)(GL),I8=Bx("React Flow","https://reactflow.dev/"),fL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,h=new Map,w=new Map,v=new Map,g=o??t??[],b=a??e??[],m=d??[0,0],x=f??ls;Kx(w,v,g);let{nodesInitialized:S}=Lp(b,p,h,{nodeOrigin:m,nodeExtent:x,zIndexMode:c}),y=[0,0,1];if(i&&n&&r){let C=ss(p,{filter:A=>!!((A.width||A.initialWidth)&&(A.height||A.initialHeight))}),{x:L,y:_,zoom:T}=du(C,n,r,s,u,l?.padding??.1);y=[L,_,T]}return{rfId:"1",width:n??0,height:r??0,transform:y,nodes:b,nodesInitialized:S,nodeLookup:p,parentLookup:h,edges:g,edgeLookup:v,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:ls,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Br.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:l,fitViewResolver:null,connection:{...Nx},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:I8,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Mx,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},M8=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>US((p,h)=>{async function w(){let{nodeLookup:v,panZoom:g,fitViewOptions:b,fitViewResolver:m,width:x,height:S,minZoom:y,maxZoom:C}=h();g&&(await JC({nodes:v,width:x,height:S,panZoom:g,minZoom:y,maxZoom:C},b),m?.resolve(!0),p({fitViewResolver:null}))}return{...fL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:v=>{let{nodeLookup:g,parentLookup:b,nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:S,fitViewQueued:y,zIndexMode:C,nodesSelectionActive:L}=h(),{nodesInitialized:_,hasSelectedNodes:T}=Lp(v,g,b,{nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:C}),A=L&&T;y&&_?(w(),p({nodes:v,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:A})):p({nodes:v,nodesInitialized:_,nodesSelectionActive:A})},setEdges:v=>{let{connectionLookup:g,edgeLookup:b}=h();Kx(g,b,v),p({edges:v})},setDefaultNodesAndEdges:(v,g)=>{if(v){let{setNodes:b}=h();b(v),p({hasDefaultNodes:!0})}if(g){let{setEdges:b}=h();b(g),p({hasDefaultEdges:!0})}},updateNodeInternals:v=>{let{triggerNodeChanges:g,nodeLookup:b,parentLookup:m,domNode:x,nodeOrigin:S,nodeExtent:y,debug:C,fitViewQueued:L,zIndexMode:_}=h(),{changes:T,updatedInternals:A}=pS(v,b,m,x,S,y,_);A&&(cS(b,m,{nodeOrigin:S,nodeExtent:y,zIndexMode:_}),L?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(C&&console.log("React Flow: trigger node changes",T),g?.(T)))},updateNodePositions:(v,g=!1)=>{let b=[],m=[],{nodeLookup:x,triggerNodeChanges:S,connection:y,updateConnection:C,onNodesChangeMiddlewareMap:L}=h();for(let[_,T]of v){let A=x.get(_),H=!!(A?.expandParent&&A?.parentId&&T?.position),F={id:_,type:"position",position:H?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:g};if(A&&y.inProgress&&y.fromNode.id===A.id){let k=Hr(A,y.fromHandle,oe.Left,!0);C({...y,from:k})}H&&A.parentId&&b.push({id:_,parentId:A.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(F)}if(b.length>0){let{parentLookup:_,nodeOrigin:T}=h(),A=kp(b,x,_,T);m.push(...A)}for(let _ of L.values())m=_(m);S(m)},triggerNodeChanges:v=>{let{onNodesChange:g,setNodes:b,nodes:m,hasDefaultNodes:x,debug:S}=h();if(v?.length){if(x){let y=a0(v,m);b(y)}S&&console.log("React Flow: trigger node changes",v),g?.(v)}},triggerEdgeChanges:v=>{let{onEdgesChange:g,setEdges:b,edges:m,hasDefaultEdges:x,debug:S}=h();if(v?.length){if(x){let y=o0(v,m);b(y)}S&&console.log("React Flow: trigger edge changes",v),g?.(v)}},addSelectedNodes:v=>{let{multiSelectionActive:g,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=h();if(g){let y=v.map(C=>Ri(C,!0));x(y);return}x(gs(m,new Set([...v]),!0)),S(gs(b))},addSelectedEdges:v=>{let{multiSelectionActive:g,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=h();if(g){let y=v.map(C=>Ri(C,!0));S(y);return}S(gs(b,new Set([...v]))),x(gs(m,new Set,!0))},unselectNodesAndEdges:({nodes:v,edges:g}={})=>{let{edges:b,nodes:m,nodeLookup:x,triggerNodeChanges:S,triggerEdgeChanges:y}=h(),C=v||m,L=g||b,_=[];for(let A of C){if(!A.selected)continue;let H=x.get(A.id);H&&(H.selected=!1),_.push(Ri(A.id,!1))}let T=[];for(let A of L)A.selected&&T.push(Ri(A.id,!1));S(_),y(T)},setMinZoom:v=>{let{panZoom:g,maxZoom:b}=h();g?.setScaleExtent([v,b]),p({minZoom:v})},setMaxZoom:v=>{let{panZoom:g,minZoom:b}=h();g?.setScaleExtent([b,v]),p({maxZoom:v})},setTranslateExtent:v=>{h().panZoom?.setTranslateExtent(v),p({translateExtent:v})},resetSelectedElements:()=>{let{edges:v,nodes:g,triggerNodeChanges:b,triggerEdgeChanges:m,elementsSelectable:x}=h();if(!x)return;let S=g.reduce((C,L)=>L.selected?[...C,Ri(L.id,!1)]:C,[]),y=v.reduce((C,L)=>L.selected?[...C,Ri(L.id,!1)]:C,[]);b(S),m(y)},setNodeExtent:v=>{let{nodes:g,nodeLookup:b,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:S,nodeExtent:y,zIndexMode:C}=h();v[0][0]===y[0][0]&&v[0][1]===y[0][1]&&v[1][0]===y[1][0]&&v[1][1]===y[1][1]||(Lp(g,b,m,{nodeOrigin:x,nodeExtent:v,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:C}),p({nodeExtent:v}))},panBy:v=>{let{transform:g,width:b,height:m,panZoom:x,translateExtent:S}=h();return mS({delta:v,panZoom:x,transform:g,translateExtent:S,width:b,height:m})},setCenter:async(v,g,b)=>{let{width:m,height:x,maxZoom:S,panZoom:y}=h();if(!y)return!1;let C=typeof b?.zoom<"u"?b.zoom:S;return await y.setViewport({x:m/2-v*C,y:x/2-g*C,zoom:C},{duration:b?.duration,ease:b?.ease,interpolate:b?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Nx}})},updateConnection:v=>{p({connection:v})},reset:()=>p({...fL()})}},Object.is);function i0({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:l,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[h]=(0,G.useState)(()=>M8({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:l,fitViewOptions:s,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,q.jsx)(XT,{value:h,children:(0,q.jsx)(gA,{children:(0,q.jsx)(EA,{children:p})})})}function N8({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:l,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,G.useContext)(Ap)?(0,q.jsx)(q.Fragment,{children:e}):(0,q.jsx)(i0,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:l,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var E8={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function T8({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:l,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:h,onConnectEnd:w,onClickConnectStart:v,onClickConnectEnd:g,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:y,onNodeDragStart:C,onNodeDrag:L,onNodeDragStop:_,onNodesDelete:T,onEdgesDelete:A,onDelete:H,onSelectionChange:F,onSelectionDragStart:k,onSelectionDrag:M,onSelectionDragStop:R,onSelectionContextMenu:I,onSelectionStart:z,onSelectionEnd:B,onBeforeDelete:P,connectionMode:D,connectionLineType:E=an.Bezier,connectionLineStyle:U,connectionLineComponent:Y,connectionLineContainerStyle:Z,deleteKeyCode:K="Backspace",selectionKeyCode:$="Shift",selectionOnDrag:V=!1,selectionMode:W=Un.Full,panActivationKeyCode:se="Space",multiSelectionKeyCode:pe=fs()?"Meta":"Control",zoomActivationKeyCode:ae=fs()?"Meta":"Control",snapToGrid:ie,snapGrid:ve,onlyRenderVisibleElements:ye=!1,selectNodesOnDrag:je,nodesDraggable:ee,autoPanOnNodeFocus:Ee,nodesConnectable:Pe,nodesFocusable:Mt,nodeOrigin:va=xL,edgesFocusable:Yo,edgesReconnectable:mn,elementsSelectable:gn=!0,defaultViewport:Oa=nA,minZoom:Lo=.5,maxZoom:ko=2,translateExtent:Q=ls,preventScrolling:Oe=!0,nodeExtent:tt,defaultMarkerColor:ct="#b1b1b7",zoomOnScroll:ar=!0,zoomOnPinch:hn=!0,panOnScroll:or=!1,panOnScrollSpeed:Ps=.5,panOnScrollMode:DI=Ao.Free,zoomOnDoubleClick:RI=!0,panOnDrag:zI=!0,onPaneClick:PI,onPaneMouseEnter:OI,onPaneMouseMove:BI,onPaneMouseLeave:HI,onPaneScroll:FI,onPaneContextMenu:UI,paneClickDistance:qI=1,nodeClickDistance:VI=0,children:GI,onReconnect:XI,onReconnectStart:jI,onReconnectEnd:YI,onEdgeContextMenu:ZI,onEdgeDoubleClick:WI,onEdgeMouseEnter:KI,onEdgeMouseMove:$I,onEdgeMouseLeave:QI,reconnectRadius:JI=10,onNodesChange:eM,onEdgesChange:tM,noDragClassName:aM="nodrag",noWheelClassName:oM="nowheel",noPanClassName:X0="nopan",fitView:j0,fitViewOptions:Y0,connectOnClick:nM,attributionPosition:rM,proOptions:iM,defaultEdgeOptions:lM,elevateNodesOnSelect:sM=!0,elevateEdgesOnSelect:dM=!1,disableKeyboardA11y:Z0=!1,autoPanOnConnect:uM,autoPanOnNodeDrag:cM,autoPanOnSelection:fM=!0,autoPanSpeed:pM,connectionRadius:mM,isValidConnection:gM,onError:hM,style:xM,id:W0,nodeDragThreshold:bM,connectionDragThreshold:wM,viewport:vM,onViewportChange:yM,width:CM,height:SM,colorMode:LM="light",debug:kM,onScroll:K0,ariaLabelConfig:_M,zIndexMode:$0="basic",...IM},MM){let Cm=W0||"1",NM=sA(LM),EM=(0,G.useCallback)(Q0=>{Q0.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),K0?.(Q0)},[K0]);return(0,q.jsx)("div",{"data-testid":"rf__wrapper",...IM,onScroll:EM,style:{...xM,...E8},ref:MM,className:mt(["react-flow",n,NM]),id:W0,role:"application",children:(0,q.jsxs)(N8,{nodes:e,edges:t,width:CM,height:SM,fitView:j0,fitViewOptions:Y0,minZoom:Lo,maxZoom:ko,nodeOrigin:va,nodeExtent:tt,zIndexMode:$0,children:[(0,q.jsx)(lA,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:w,onClickConnectStart:v,onClickConnectEnd:g,nodesDraggable:ee,autoPanOnNodeFocus:Ee,nodesConnectable:Pe,nodesFocusable:Mt,edgesFocusable:Yo,edgesReconnectable:mn,elementsSelectable:gn,elevateNodesOnSelect:sM,elevateEdgesOnSelect:dM,minZoom:Lo,maxZoom:ko,nodeExtent:tt,onNodesChange:eM,onEdgesChange:tM,snapToGrid:ie,snapGrid:ve,connectionMode:D,translateExtent:Q,connectOnClick:nM,defaultEdgeOptions:lM,fitView:j0,fitViewOptions:Y0,onNodesDelete:T,onEdgesDelete:A,onDelete:H,onNodeDragStart:C,onNodeDrag:L,onNodeDragStop:_,onSelectionDrag:M,onSelectionDragStart:k,onSelectionDragStop:R,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:X0,nodeOrigin:va,rfId:Cm,autoPanOnConnect:uM,autoPanOnNodeDrag:cM,autoPanSpeed:pM,onError:hM,connectionRadius:mM,isValidConnection:gM,selectNodesOnDrag:je,nodeDragThreshold:bM,connectionDragThreshold:wM,onBeforeDelete:P,debug:kM,ariaLabelConfig:_M,zIndexMode:$0}),(0,q.jsx)(_8,{onInit:u,onNodeClick:l,onEdgeClick:s,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:y,nodeTypes:r,edgeTypes:i,connectionLineType:E,connectionLineStyle:U,connectionLineComponent:Y,connectionLineContainerStyle:Z,selectionKeyCode:$,selectionOnDrag:V,selectionMode:W,deleteKeyCode:K,multiSelectionKeyCode:pe,panActivationKeyCode:se,zoomActivationKeyCode:ae,onlyRenderVisibleElements:ye,defaultViewport:Oa,translateExtent:Q,minZoom:Lo,maxZoom:ko,preventScrolling:Oe,zoomOnScroll:ar,zoomOnPinch:hn,zoomOnDoubleClick:RI,panOnScroll:or,panOnScrollSpeed:Ps,panOnScrollMode:DI,panOnDrag:zI,autoPanOnSelection:fM,onPaneClick:PI,onPaneMouseEnter:OI,onPaneMouseMove:BI,onPaneMouseLeave:HI,onPaneScroll:FI,onPaneContextMenu:UI,paneClickDistance:qI,nodeClickDistance:VI,onSelectionContextMenu:I,onSelectionStart:z,onSelectionEnd:B,onReconnect:XI,onReconnectStart:jI,onReconnectEnd:YI,onEdgeContextMenu:ZI,onEdgeDoubleClick:WI,onEdgeMouseEnter:KI,onEdgeMouseMove:$I,onEdgeMouseLeave:QI,reconnectRadius:JI,defaultMarkerColor:ct,noDragClassName:aM,noWheelClassName:oM,noPanClassName:X0,rfId:Cm,disableKeyboardA11y:Z0,nodeExtent:tt,viewport:vM,onViewportChange:yM,nodesDraggable:ee}),(0,q.jsx)(oA,{onSelectionChange:F}),GI,(0,q.jsx)(QT,{proOptions:iM,position:rM}),(0,q.jsx)($T,{rfId:Cm,disableKeyboardA11y:Z0})]})})}var XL=wL(T8);var A8=e=>e.nodes;function jL(){return Ce(A8,Ze)}var D8=e=>e.edges;function YL(){return Ce(D8,Ze)}var R8=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function vo(){return Ce(R8,Ze)}var FU=Za.error014();function z8({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,q.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:mt(["react-flow__background-pattern",a,o])})}function P8({radius:e,className:t}){return(0,q.jsx)("circle",{cx:e,cy:e,r:e,className:mt(["react-flow__background-pattern","dots",t])})}var on;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(on||(on={}));var O8={[on.Dots]:1,[on.Lines]:1,[on.Cross]:6},B8=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function ZL({id:e,variant:t=on.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:l,style:s,className:u,patternClassName:d}){let f=(0,G.useRef)(null),{transform:c,patternId:p}=Ce(B8,Ze),h=o||O8[t],w=t===on.Dots,v=t===on.Cross,g=Array.isArray(a)?a:[a,a],b=[g[0]*c[2]||1,g[1]*c[2]||1],m=h*c[2],x=Array.isArray(r)?r:[r,r],S=v?[m,m]:b,y=[x[0]*c[2]+S[0]/2,x[1]*c[2]+S[1]/2],C=`${p}${e||""}`;return(0,q.jsxs)("svg",{className:mt(["react-flow__background",u]),style:{...s,...Rp,"--xy-background-color-props":l,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,q.jsx)("pattern",{id:C,x:c[0]%b[0],y:c[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${y[0]},-${y[1]})`,children:w?(0,q.jsx)(P8,{radius:m/2,className:d}):(0,q.jsx)(z8,{dimensions:S,lineWidth:n,variant:t,className:d})}),(0,q.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${C})`})]})}ZL.displayName="Background";var WL=(0,G.memo)(ZL);function H8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,q.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function F8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,q.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function U8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,q.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function q8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function V8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Ep({children:e,className:t,...a}){return(0,q.jsx)("button",{type:"button",className:mt(["react-flow__controls-button",t]),...a,children:e})}var G8=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function KL({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:l,onInteractiveChange:s,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let h=it(),{isInteractive:w,minZoomReached:v,maxZoomReached:g,ariaLabelConfig:b}=Ce(G8,Ze),{zoomIn:m,zoomOut:x,fitView:S}=Wa(),y=()=>{m(),r?.()},C=()=>{x(),i?.()},L=()=>{S(n),l?.()},_=()=>{h.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),s?.(!w)};return(0,q.jsxs)(Dp,{className:mt(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??b["controls.ariaLabel"],children:[t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ep,{onClick:y,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:g,children:(0,q.jsx)(H8,{})}),(0,q.jsx)(Ep,{onClick:C,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:v,children:(0,q.jsx)(F8,{})})]}),a&&(0,q.jsx)(Ep,{className:"react-flow__controls-fitview",onClick:L,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:(0,q.jsx)(U8,{})}),o&&(0,q.jsx)(Ep,{className:"react-flow__controls-interactive",onClick:_,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:w?(0,q.jsx)(V8,{}):(0,q.jsx)(q8,{})}),d]})}KL.displayName="Controls";var UU=(0,G.memo)(KL);function X8({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:l,strokeWidth:s,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:h,backgroundColor:w}=r||{},v=i||h||w;return(0,q.jsx)("rect",{className:mt(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:v,stroke:l,strokeWidth:s},shapeRendering:f,onClick:p?g=>p(g,e):void 0})}var j8=(0,G.memo)(X8),Y8=e=>e.nodes.map(t=>t.id),e0=e=>e instanceof Function?e:()=>e;function Z8({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=j8,onClick:i}){let l=Ce(Y8,Ze),s=e0(t),u=e0(e),d=e0(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,q.jsx)(q.Fragment,{children:l.map(c=>(0,q.jsx)(K8,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function W8({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:l,onClick:s}){let{node:u,x:d,y:f,width:c,height:p}=Ce(h=>{let w=h.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let v=w.internals.userNode,{x:g,y:b}=w.internals.positionAbsolute,{width:m,height:x}=wo(v);return{node:v,x:g,y:b,width:m,height:x}},Ze);return!u||u.hidden||!Hx(u)?null:(0,q.jsx)(l,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:s,id:u.id})}var K8=(0,G.memo)(W8),$8=(0,G.memo)(Z8),Q8=200,J8=150,eD=e=>!e.hidden,tD=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Px(ss(e.nodeLookup,{filter:eD}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},pL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,aD=(e,t)=>pL(e.viewBB,t.viewBB)&&pL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,oD="react-flow__minimap-desc";function $L({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:l,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:h,pannable:w=!1,zoomable:v=!1,ariaLabel:g,inversePan:b,zoomStep:m=1,offsetScale:x=5}){let S=it(),y=(0,G.useRef)(null),{boundingRect:C,viewBB:L,rfId:_,panZoom:T,translateExtent:A,flowWidth:H,flowHeight:F,ariaLabelConfig:k}=Ce(tD,aD),M=e?.width??Q8,R=e?.height??J8,I=C.width/M,z=C.height/R,B=Math.max(I,z),P=B*M,D=B*R,E=x*B,U=C.x-(P-C.width)/2-E,Y=C.y-(D-C.height)/2-E,Z=P+E*2,K=D+E*2,$=`${oD}-${_}`,V=(0,G.useRef)(0),W=(0,G.useRef)();V.current=B,(0,G.useEffect)(()=>{if(y.current&&T)return W.current=yS({domNode:y.current,panZoom:T,getTransform:()=>S.getState().transform,getViewScale:()=>V.current}),()=>{W.current?.destroy()}},[T]),(0,G.useEffect)(()=>{W.current?.update({translateExtent:A,width:H,height:F,inversePan:b,pannable:w,zoomStep:m,zoomable:v})},[w,v,b,m,A,H,F]);let se=p?ie=>{let[ve,ye]=W.current?.pointer(ie)||[0,0];p(ie,{x:ve,y:ye})}:void 0,pe=h?(0,G.useCallback)((ie,ve)=>{let ye=S.getState().nodeLookup.get(ve).internals.userNode;h(ie,ye)},[]):void 0,ae=g??k["minimap.ariaLabel"];return(0,q.jsx)(Dp,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*B:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:mt(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,q.jsxs)("svg",{width:M,height:R,viewBox:`${U} ${Y} ${Z} ${K}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":$,ref:y,onClick:se,children:[ae&&(0,q.jsx)("title",{id:$,children:ae}),(0,q.jsx)($8,{onClick:pe,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:l}),(0,q.jsx)("path",{className:"react-flow__minimap-mask",d:`M${U-E},${Y-E}h${Z+E*2}v${K+E*2}h${-Z-E*2}z
        M${L.x},${L.y}h${L.width}v${L.height}h${-L.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}$L.displayName="MiniMap";var QL=(0,G.memo)($L),nD=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,rD={[Fr.Line]:"right",[Fr.Handle]:"bottom-right"};function iD({nodeId:e,position:t,variant:a=Fr.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:l=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:h,onResizeStart:w,onResize:v,onResizeEnd:g}){let b=LL(),m=typeof e=="string"?e:b,x=it(),S=(0,G.useRef)(null),y=a===Fr.Handle,C=Ce((0,G.useCallback)(nD(y&&p),[y,p]),Ze),L=(0,G.useRef)(null),_=t??rD[a];(0,G.useEffect)(()=>{if(!(!S.current||!m))return L.current||(L.current=_S({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:A,transform:H,snapGrid:F,snapToGrid:k,nodeOrigin:M,domNode:R}=x.getState();return{nodeLookup:A,transform:H,snapGrid:F,snapToGrid:k,nodeOrigin:M,paneDomNode:R}},onChange:(A,H)=>{let{triggerNodeChanges:F,nodeLookup:k,parentLookup:M,nodeOrigin:R}=x.getState(),I=[],z={x:A.x,y:A.y},B=k.get(m);if(B&&B.expandParent&&B.parentId){let P=B.origin??R,D=A.width??B.measured.width??0,E=A.height??B.measured.height??0,U={id:B.id,parentId:B.parentId,rect:{width:D,height:E,...Fx({x:A.x??B.position.x,y:A.y??B.position.y},{width:D,height:E},B.parentId,k,P)}},Y=kp([U],k,M,R);I.push(...Y),z.x=A.x?Math.max(P[0]*D,A.x):void 0,z.y=A.y?Math.max(P[1]*E,A.y):void 0}if(z.x!==void 0&&z.y!==void 0){let P={id:m,type:"position",position:{...z}};I.push(P)}if(A.width!==void 0&&A.height!==void 0){let D={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:A.width,height:A.height}};I.push(D)}for(let P of H){let D={...P,type:"position"};I.push(D)}F(I)},onEnd:({width:A,height:H})=>{let F={id:m,type:"dimensions",resizing:!1,dimensions:{width:A,height:H}};x.getState().triggerNodeChanges([F])}})),L.current.update({controlPosition:_,boundaries:{minWidth:l,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:v,onResizeEnd:g,shouldResize:h}),()=>{L.current?.destroy()}},[_,l,s,u,d,f,w,v,g,h]);let T=_.split("-");return(0,q.jsx)("div",{className:mt(["react-flow__resize-control","nodrag",...T,a,o]),ref:S,style:{...n,scale:C,...i&&{[y?"backgroundColor":"borderColor"]:i}},children:r})}var qU=(0,G.memo)(iD);var Ea=N(J(),1),nk=N(Dt(),1);var Op=N(J(),1);var zp=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var JL=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var ek=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var l0=e=>{let t=ek(e);return t.charAt(0).toUpperCase()+t.slice(1)};var fu=N(J(),1);var Pp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var tk=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var bs=N(J(),1);var lD=(0,bs.createContext)({});var ak=()=>(0,bs.useContext)(lD);var ok=(0,fu.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...l},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=ak()??{},h=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,fu.createElement)("svg",{ref:s,...Pp,width:t??u??Pp.width,height:t??u??Pp.height,stroke:e??c,strokeWidth:h,className:zp("lucide",p,n),...!r&&!tk(l)&&{"aria-hidden":"true"},...l},[...i.map(([w,v])=>(0,fu.createElement)(w,v)),...Array.isArray(r)?r:[r]])});var O=(e,t)=>{let a=(0,Op.forwardRef)(({className:o,...n},r)=>(0,Op.createElement)(ok,{ref:r,iconNode:t,className:zp(`lucide-${JL(l0(e))}`,`lucide-${e}`,o),...n}));return a.displayName=l0(e),a};var sD=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],pu=O("arrow-left",sD);var dD=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],zi=O("arrow-up",dD);var uD=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],Pi=O("audio-lines",uD);var cD=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],mu=O("bookmark",cD);var fD=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],gu=O("calendar",fD);var pD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lt=O("check",pD);var mD=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ka=O("chevron-down",mD);var gD=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qn=O("chevron-right",gD);var hD=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],hu=O("chevron-left",hD);var xD=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xu=O("chevron-up",xD);var bD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ur=O("circle-alert",bD);var wD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qr=O("circle-check",wD);var vD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Do=O("circle-question-mark",vD);var yD=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],bu=O("clapperboard",yD);var CD=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Vr=O("copy",CD);var SD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Vn=O("crosshair",SD);var LD=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Oi=O("download",LD);var kD=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Gr=O("ellipsis",kD);var _D=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],wu=O("external-link",_D);var ID=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],vu=O("eye-off",ID);var MD=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yu=O("eye",MD);var ND=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],nn=O("file-pen",ND);var ED=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Cu=O("file-spreadsheet",ED);var TD=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],aa=O("file-text",TD);var AD=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],Su=O("file-up",AD);var DD=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],Lu=O("files",DD);var RD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Bt=O("film",RD);var zD=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],Bi=O("folder-input",zD);var PD=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],ku=O("folder-open",PD);var OD=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],_u=O("folder-plus",OD);var BD=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Ro=O("folder",BD);var HD=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Xr=O("funnel",HD);var FD=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Iu=O("grip-vertical",FD);var UD=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],ws=O("hand",UD);var qD=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],Mu=O("hard-drive",qD);var VD=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Nu=O("hash",VD);var GD=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Gn=O("image-plus",GD);var XD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],pa=O("image",XD);var jD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Eu=O("info",jD);var YD=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Tu=O("keyboard",YD);var ZD=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Kt=O("layers",ZD);var WD=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],zo=O("layout-grid",WD);var KD=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],Au=O("list-tree",KD);var $D=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Xn=O("list",$D);var QD=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],jr=O("loader-circle",QD);var JD=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Du=O("map",JD);var eR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],rn=O("maximize-2",eR);var tR=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ru=O("maximize",tR);var aR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Hi=O("message-square",aR);var oR=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Fi=O("mic",oR);var nR=[["path",{d:"M5 12h14",key:"1ays0h"}]],zu=O("minus",nR);var rR=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],vs=O("mouse-pointer",rR);var iR=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],oa=O("music",iR);var lR=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Pu=O("paperclip",lR);var sR=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Ou=O("pause",sR);var dR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],ln=O("pen-line",dR);var uR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],sn=O("pen",uR);var cR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Ui=O("pencil",cR);var fR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Bu=O("person-standing",fR);var pR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],$a=O("play",pR);var mR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],We=O("plus",mR);var gR=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],qi=O("redo-2",gR);var hR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],jn=O("refresh-cw",hR);var xR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Hu=O("rotate-ccw",xR);var bR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Po=O("search",bR);var wR=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Fu=O("settings-2",wR);var vR=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Vi=O("sliders-horizontal",vR);var yR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ht=O("sparkles",yR);var CR=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Yr=O("square-split-vertical",CR);var SR=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Qa=O("table",SR);var LR=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Uu=O("tag",LR);var kR=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],Zr=O("text-align-justify",kR);var _R=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ja=O("trash-2",_R);var IR=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Wr=O("triangle-alert",IR);var MR=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Yn=O("type",MR);var NR=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Gi=O("undo-2",NR);var ER=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],Xi=O("unlink",ER);var TR=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ji=O("upload",TR);var AR=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Oo=O("video",AR);var DR=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],qu=O("waypoints",DR);var RR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$t=O("x",RR);var Ht=N(X(),1);function Ta({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:l="pill"}){let[s,u]=(0,Ea.useState)(!1),d=(0,Ea.useRef)(null),f=(0,Ea.useRef)(null),[c,p]=(0,Ea.useState)({top:0,left:0,placement:"bottom"}),h=(0,Ea.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,Ea.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),x=window.innerHeight,S=Math.min(t.length*34+16,260),C=x-m.bottom<S&&m.top>S,L=C?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:L,left:m.left,width:_,placement:C?"top":"bottom"})},[t.length,r]);(0,Ea.useEffect)(()=>{if(!s)return;w();let m=y=>{let C=y.target;d.current?.contains(C)||f.current?.contains(C)||u(!1)},x=y=>{y.key==="Escape"&&u(!1)},S=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",x),window.addEventListener("scroll",S,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",x),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",w)}},[s,w]);let v=(0,Ea.useCallback)(m=>{m.stopPropagation(),!n&&u(x=>!x)},[n]),g=(0,Ea.useCallback)((m,x)=>{x||(a?.(m),u(!1))},[a]),b=["wf-custom-select-trigger",`wf-custom-select-trigger--${l}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsxs)("button",{ref:d,type:"button",className:b,disabled:n,onClick:v,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,Ht.jsx)("span",{className:"wf-custom-select-label",children:h?h.triggerLabel??h.label:i??String(e??"")}),(0,Ht.jsx)(Ka,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,nk.createPortal)((0,Ht.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,Ht.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let x=m.value===e,S=!!m.subtitle||!!m.badge||!!m.icon;return(0,Ht.jsxs)("button",{type:"button",role:"option","aria-selected":x,disabled:m.disabled,className:`wf-custom-select-option ${S?"wf-custom-select-option--rich":""} ${x?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>g(m.value,m.disabled),children:[m.icon?(0,Ht.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,Ht.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,Ht.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,Ht.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,Ht.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,Ht.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),x?(0,Ht.jsx)(Lt,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var dn=N(J(),1),rk=N(Dt(),1),Bo=N(X(),1),Vu=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,dn.useState)(!1),l=(0,dn.useRef)(null),s=(0,dn.useRef)(null),[u,d]=(0,dn.useState)({left:0}),f=(0,dn.useCallback)(()=>{if(!l.current)return;let p=l.current.getBoundingClientRect(),h=a.startsWith("top"),w=a.endsWith("Right"),v=h?void 0:p.bottom+6,g=h?window.innerHeight-p.top+6:void 0,b=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:v,bottom:g,left:b})},[a]);(0,dn.useEffect)(()=>{if(!r)return;f();let p=w=>{let v=w.target;l.current?.contains(v)||s.current?.contains(v)||i(!1)},h=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",h),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",h),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(h=>!h)};return(0,Bo.jsxs)(Bo.Fragment,{children:[(0,Bo.jsx)("div",{ref:l,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,rk.createPortal)((0,Bo.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,Bo.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let h=t.includes(p.key);return(0,Bo.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${h?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,Bo.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,Bo.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var ik=N(J(),1),s0=N(X(),1),d0=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:l=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,ik.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,s0.jsx)("div",{className:`wf-custom-slider ${l}`,style:i,children:(0,s0.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var lk=N(J(),1),sk=N(Dt(),1);var un=N(X(),1),Yi=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:l})=>((0,lk.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,sk.createPortal)((0,un.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,un.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,un.jsxs)("div",{className:"wf-modal-header",children:[(0,un.jsx)("div",{className:"wf-modal-title",children:a}),(0,un.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,un.jsx)($t,{size:16})})]}),(0,un.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:l}),o?(0,un.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Hp=N(J(),1),dk=N(sx(),1);var Zi=N(X(),1),Gu=null,zR=()=>{let[e,t]=(0,Hp.useState)([]);return(0,Hp.useEffect)(()=>(Gu=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{Gu=null}),[]),e.length===0?null:(0,Zi.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=Eu,n="#60a5fa";return a.type==="success"?(o=qr,n="#34d399"):a.type==="warning"?(o=Wr,n="#fb923c"):a.type==="error"&&(o=Ur,n="#f87171"),(0,Zi.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Zi.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Zi.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function PR(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,dk.createRoot)(t).render((0,Zi.jsx)(zR,{}))}function Bp(e,t,a=2500){PR();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;Gu?Gu({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{Gu?.({id:o,type:e,content:t,durationMs:a})},50)}var ne={success:(e,t)=>Bp("success",e,t),warning:(e,t)=>Bp("warning",e,t),error:(e,t)=>Bp("error",e,t),info:(e,t)=>Bp("info",e,t)};var uk=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,l);return l},ck=(e=>e?uk(e):uk);var Xu=N(J(),1);var OR=e=>e;function BR(e,t=OR){let a=Xu.default.useSyncExternalStore(e.subscribe,Xu.default.useCallback(()=>t(e.getState()),[e,t]),Xu.default.useCallback(()=>t(e.getInitialState()),[e,t]));return Xu.default.useDebugValue(a),a}var fk=e=>{let t=ck(e),a=o=>BR(t,o);return Object.assign(a,t),a},ys=(e=>e?fk(e):fk);var xk=N(J(),1);var pk=e=>Symbol.iterator in e,mk=e=>"entries"in e,gk=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},HR=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function hk(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:pk(e)&&pk(t)?mk(e)&&mk(t)?gk(e,t):HR(e,t):gk({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function bk(e){let t=xk.default.useRef(void 0);return a=>{let o=e(a);return hk(t.current,o)?t.current:t.current=o}}var vk={stroke:"#b1b1b7",strokeWidth:2},Fp={type:"animated",style:vk,animated:!1};function wk(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function FR(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function yk(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:FR(e),...Fp,...e,data:{...t,createdAt:a},animated:e.animated??Fp.animated,style:{...vk,...e.style??{}},sourceHandle:wk(e.sourceHandle),targetHandle:wk(e.targetHandle)}}var Ck={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},UR={text:"text-editor",image:"import",video:"import",audio:"import"};var Sk={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Up(e,t){return{label:"",materialType:e,status:"empty",selectedTool:UR[e],params:{},failStrategy:"abort",...t}}var qR={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function Lk(e){return qR[e]??[]}function VR(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,l=a.generatedContent,s=!1;return o==="text"?s=!!(i?.trim()||l):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function GR(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=Ck[n];if(i)for(let l of i){let s=Sk[l];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function qp(e,t){let a=VR(e),o=GR(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function Vp(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(l=>l.source===e.source&&l.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(l=>l.id===e.source),n=t.find(l=>l.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!qp(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let l=i.shift();if(!(!l||r.has(l.id))){r.add(l.id);for(let s of Dx(l,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(s)}}}return{valid:!0}}function Gp(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function XR(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function kk(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return Gp(e,"rejected","duplicate_node");a.add(d.id)}let o=XR([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return Gp(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return Gp(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),l=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=yk(d),c=Vp(f,l,u);if(!c.valid)return Gp(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:l,edges:u,status:"allowed"}}function _k(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var Xp=!1,jp=!1;function Yp(){Xp=!0}function Ik(){jp=!0,Xp=!1}function Mk(){Xp=!1,jp=!1}function jR(){jp=!1}function u0(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function c0(e,t){return{nodes:e.slice(),edges:t.slice()}}function ju(e,t){return t||(jp&&e===0?"reset":Xp&&e===0?"user-delete":"autosave")}function Zp(e){let t=c0(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:u0({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(jR(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var YR=50,ZR=300;function Yu(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var ma={current:null,lastPushAt:0},de=ys()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&Yp(),e({nodes:a0(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:o0(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&Yp();let o=t(),n=kk({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(l=>l.id===i.id));return _k(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&Yp(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{Mk(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),ma.current=Yu(a,o),ma.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Yu(t().nodes,t().edges);if(ma.current&&ma.current.sig===a.sig)return;let o=Date.now();if(ma.current&&o-ma.lastPushAt>=ZR){let n=ma.current;e(r=>({past:[...r.past,n].slice(-YR),future:[]})),ma.lastPushAt=o}ma.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Yu(o,n);ma.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...l.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Yu(o,n);ma.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:[...l.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),ma.current=Yu(a,o),ma.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{Ik(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),ma.current=null,ma.lastPushAt=0}})),Nk=()=>de(bk(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var Ek=()=>de(e=>e.past.length>0),Tk=()=>de(e=>e.future.length>0);var jk=N(J(),1);var Ak={total:0,completed:0,running:0,pending:0,percentage:0},$e=ys()(e=>({executionId:null,status:"idle",error:null,progress:Ak,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:Ak,nodeStatuses:{}})}));var Dk=N(J(),1),Rk="(prefers-reduced-motion: reduce)";function WR(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(Rk);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function KR(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(Rk).matches}function zk(){return(0,Dk.useSyncExternalStore)(WR,KR)}var eo=N(J(),1),ga=N(X(),1),$R=108,Hk=64,QR=186,Pk=Hk+QR,f0=8,Ok=.9,JR=3,Bk=.16,ez=.98,tz=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let s=(0,eo.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${s}`,d=`beam-flow-${s}`,f=`beam-breathe-${s}`,c=(0,eo.useMemo)(()=>{if(t&&a){let x=a.x-t.x,S=a.y-t.y;return Math.max(250,Math.hypot(x,S)*1.15)}return 250},[t,a]),p=(0,eo.useRef)(null),[h,w]=(0,eo.useState)(c);(0,eo.useEffect)(()=>{if(p.current)try{let x=p.current.getTotalLength();Number.isFinite(x)&&x>0&&w(x)}catch{}},[e]);let{segments:v,calculatedDuration:g,periodPx:b}=(0,eo.useMemo)(()=>{let x=h>0?h:c,S=Math.max(1,Math.round(x/Pk)),y=x/S,L=y*(Hk/Pk)/f0,_=o??Math.max(.5,y/$R);return{segments:Array.from({length:f0},(A,H)=>{let F=H/(f0-1),k=F**1.4,M=Ok+(JR-Ok)*k,R=M+1.4,I=Bk+(ez-Bk)*k,z=-(H*(_/y)*L);return{index:H,progress:F,taperedProgress:k,coreWidth:M,haloWidth:R,opacity:I,dashArray:`${L} ${y-L}`,timeDelay:n+z}}),calculatedDuration:_,periodPx:y}},[h,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-b:0}px; }
      to { stroke-dashoffset: ${r?0:-b}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,ga.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,ga.jsxs)("defs",{children:[(0,ga.jsx)("style",{children:m}),(0,ga.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,ga.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,ga.jsxs)("feMerge",{children:[(0,ga.jsx)("feMergeNode",{in:"blur"}),(0,ga.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,ga.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,ga.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:v.map(x=>{let S=x.index>=5;return(0,ga.jsxs)("g",{children:[S&&(0,ga.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:x.haloWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",filter:`url(#${u})`,opacity:x.opacity*.75,style:{animation:`${d} ${g}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,ga.jsx)("path",{d:e,stroke:x.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:x.coreWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",opacity:x.opacity,filter:x.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${g}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},x.index)})})]})},Fk=(0,eo.memo)(tz);var Zu=N(J(),1);var Vk=N(J(),1);var az={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002"},Uk=az;var oz={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker."},qk=oz;var p0={zh:Uk,en:qk},Wp="zh",m0=new Set;function nz(e){return m0.add(e),()=>m0.delete(e)}function rz(){return Wp}function Gk(e){let t=e==="en"?"en":"zh";if(t!==Wp){Wp=t;for(let a of m0)a()}}function Wi(e){return p0[Wp][e]??p0.zh[e]??p0.en[e]??e}function fe(){return(0,Vk.useSyncExternalStore)(nz,rz),Wi}var $p=N(X(),1),Kp=28,iz=({edgeId:e,x:t,y:a})=>{let o=fe(),n=de(l=>l.applyCanvasInputMutation),r=(0,Zu.useCallback)(l=>{l.preventDefault(),l.stopPropagation()},[]),i=(0,Zu.useCallback)(l=>{l.preventDefault(),l.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,$p.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-Kp/2,y:a-Kp/2,width:Kp,height:Kp,children:(0,$p.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,$p.jsx)(Xi,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},Xk=(0,Zu.memo)(iz);var Cs=N(X(),1),lz=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,selected:u,animated:d,data:f,style:c})=>{let[p,h,w]=ps({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s}),v=de(y=>{let C=y.selectedElement.id;return C&&(C===t||C===a)?!0:y.nodes.some(L=>L.selected&&(L.id===t||L.id===a))}),g=$e(y=>y.nodeStatuses[a]==="running"),b=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,x=v||b||g||m,S=zk();return(0,Cs.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Cs.jsx)(xs,{id:e,path:p,style:c}),x&&!S&&(0,Cs.jsx)(Fk,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:g?.8:void 0}),(0,Cs.jsx)(Xk,{edgeId:e,x:h,y:w})]})},g0=(0,jk.memo)(lz);var Ss=N(J(),1);function Te(e){e.stopPropagation()}function h0(e){e.preventDefault(),e.stopPropagation()}var me=N(X(),1),sz=[{type:"text",Icon:aa,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:Gn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:Oo,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:oa,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Qa,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:Bt,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],dz=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:i,onOpenAssets:l,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:d,isAssetsOpen:f=!1})=>{let c=fe(),[p,h]=(0,Ss.useState)(!1),w=u!==void 0?u:p,v=d||(()=>h(m=>!m)),g=(0,Ss.useCallback)(m=>{e(m),d?d():h(!1)},[e,d]),b=[{key:"select",icon:(0,me.jsx)(vs,{size:15}),label:c("toolbar.selectMode"),onClick:()=>i?.("select")},{key:"pan",icon:(0,me.jsx)(ws,{size:15}),label:c("toolbar.panMode"),onClick:()=>i?.("pan")}];return(0,me.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:Te,onMouseDown:Te,children:[(0,me.jsxs)("div",{style:{position:"relative"},children:[(0,me.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:v,onContextMenu:h0,title:c("toolbar.addNode"),children:(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(We,{size:20})})}),w&&(0,me.jsx)("div",{className:"wf-dock-add-popover",children:sz.map(m=>(0,me.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>g(m.type),onContextMenu:h0,children:[(0,me.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,me.jsx)(m.Icon,{size:18})}),(0,me.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,me.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,me.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,me.jsx)(Vu,{items:b,selectedKeys:[r],placement:"topCenter",children:(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,me.jsx)(vs,{size:16}):(0,me.jsx)(ws,{size:16})}),(0,me.jsx)(xu,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,me.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:l,title:c("toolbar.assets"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(ku,{size:17})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Gi,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(qi,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,me.jsxs)(me.Fragment,{children:[(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Do,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},Yk=(0,Ss.memo)(dz);var Ls=N(J(),1);var be=N(X(),1),uz={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},cz=e=>Math.round(e.transform[2]*100),fz=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:l,onCancelExecution:s,onResetExecution:u})=>{let d=fe(),{zoomIn:f,zoomOut:c,fitView:p}=Wa(),h=Ce(cz),w=$e(T=>T.status),v=$e(T=>T.progress),g=$e(T=>T.error),b=w==="pending"||w==="running",m=w==="paused",x=w==="completed"||w==="error"||w==="cancelled",S=v.total>0,y=(0,Ls.useCallback)(()=>{p({duration:250,padding:.1})},[p]),C=(0,Ls.useCallback)(()=>{f({duration:150})},[f]),L=(0,Ls.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,be.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:Te,onMouseDown:Te,children:[r&&(b||m||x&&u?(0,be.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${b||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[b||m?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d(uz[w]),S&&` (${v.completed}/${v.total})`]}),b?(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,be.jsx)(Ou,{size:14})}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:l,title:d("exec.resumeTitle"),children:(0,be.jsx)($a,{size:14})}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,be.jsx)($t,{size:14})})]}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:g||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,be.jsx)($a,{size:14,fill:"currentColor",style:{marginLeft:2}})}),x&&u&&(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,be.jsx)(Hu,{size:14})})]}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:g||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,be.jsx)($a,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,be.jsxs)("div",{className:"wf-header-capsule",children:[(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:y,title:d("header.fitView"),children:(0,be.jsx)(Ru,{size:15})}),(0,be.jsx)("div",{className:"wf-header-capsule__divider"}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:L,title:d("header.zoomOut"),children:(0,be.jsx)(zu,{size:15})}),(0,be.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:y,title:d("header.fitView"),children:[h,"%"]}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.zoomIn"),children:(0,be.jsx)(We,{size:15})})]}),(0,be.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,be.jsx)(zo,{size:15})}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,be.jsx)(qu,{size:15})}),(0,be.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,be.jsx)(Du,{size:15})}),n&&(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("div",{className:"wf-header-capsule__divider"}),(0,be.jsx)(Vu,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,be.jsx)(Yr,{size:15})})})]})]})]})},Zk=(0,Ls.memo)(fz);var Ft=N(J(),1);function Ho(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function Kk(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function ha(e){return typeof e=="string"?e.trim():""}function $k(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function pz(e){return typeof e=="string"&&e.startsWith("blob:")}function Fo(e){let t=ha(e);if(!(!t||pz(t)))return t}function mz(e){return Kk(e.data)?e.data:{}}function Qk(e){return ha(e.realPath)||ha(e.real_path)}function Wk(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function gz(e){if(e)for(let t of e){let a=Fo(t?.url);if(a)return a}}function hz(e,t){let a=ha(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=ha(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function xz(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=ha(t.mediaUrl)||void 0,n=a?Ho(a,Wk(t),o):void 0;return Fo(n)||Fo(t.previewUrl)||Fo(t.imageUrl)||Fo(t.outputUrl)||Fo(t.coverUrl)||Fo(t.mediaUrl)||Fo(t.outputVideoUrl)||Fo(t.thumbnailUrl)||gz(Wk(t))}function bz(e){let t=$k(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=Kk(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function wz(e,t,a){let o=Qk(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(ha(t.content)||ha(t.generatedContent)):e==="table"?bz(t):e==="video_composition"?!!(Fo(t.outputVideoUrl)||Fo(t.thumbnailUrl)):!1}function vz(e,t,a){return ha(a.originalName)||ha(a.label)||ha(a.title)||ha(a.name)||`${e} #${t.slice(-4)}`}function yz(e){let t=ha(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function Cz(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function Sz(e){let t=ha(e.id);if(!t)return null;let a=mz(e),o=hz(e,a),n=xz(o,a);if(!wz(o,a,n))return null;let r=Qk(a),i=$k(a.updatedAt)??0,l=ha(a.prompt),s={id:t,name:vz(o,t,a),type:o,status:yz(a),updatedAt:i};n&&(s.previewUrl=n),r&&(s.real_path=r),l&&(s.prompt=l);let u=Cz(a);return u&&(s.tags=u),s}function Jk(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=Sz(a);o&&t.push(o)}return t}var Qp=N(J(),1),e5=N(Dt(),1);var Zn=N(X(),1),x0=["image","video","audio","text","other"],Lz=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],t5=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,Qp.useRef)(null);if((0,Qp.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-160),s=a.length===0||x0.every(f=>a.includes(f)),u=f=>f==="all"?s:s?!0:a.includes(f),d=f=>{if(f==="all"){o(s?["__none__"]:[]);return}if(s){let p=x0.filter(h=>h!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],x0.every(p=>c.includes(p))?o([]):o(c)};return(0,e5.createPortal)((0,Zn.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"140px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:f=>f.stopPropagation(),children:(0,Zn.jsx)("div",{className:"wf-popover-body",children:Lz.map(f=>{let c=u(f.id);return(0,Zn.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,Zn.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Zn.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,Zn.jsx)(Lt,{size:10,strokeWidth:3})}),(0,Zn.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var Jp=N(J(),1),a5=N(Dt(),1);var Kr=N(X(),1),b0=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],o5=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,Jp.useRef)(null);if((0,Jp.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-150),s=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,a5.createPortal)((0,Kr.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"136px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:u=>u.stopPropagation(),children:(0,Kr.jsx)("div",{className:"wf-popover-body",children:b0.map(u=>{let d=a.includes(u.id);return(0,Kr.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>s(u.id),children:(0,Kr.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Kr.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,Kr.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var em=N(J(),1),n5=N(Dt(),1);var xa=N(X(),1),r5=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let l=(0,em.useRef)(null);if((0,em.useEffect)(()=>{if(!e)return;let d=c=>{l.current&&!l.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let s=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,n5.createPortal)((0,xa.jsxs)("div",{ref:l,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:d=>d.stopPropagation(),children:[(0,xa.jsxs)("div",{className:"wf-popover-body",children:[(0,xa.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,xa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,xa.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]}),(0,xa.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,xa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,xa.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]})]}),(0,xa.jsx)("div",{className:"wf-popover-divider"}),(0,xa.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,xa.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,xa.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,xa.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var tm=N(J(),1),i5=N(Dt(),1);var Ki=N(X(),1),l5=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,tm.useRef)(null);if((0,tm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-180),s=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,i5.createPortal)((0,Ki.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"160px",zIndex:9999},onMouseDown:Te,onPointerDown:Te,onClick:u=>u.stopPropagation(),children:(0,Ki.jsx)("div",{className:"wf-popover-body",children:s.map(u=>{let d=a===u.id;return(0,Ki.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,Ki.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,Ki.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var am=N(J(),1),s5=N(Dt(),1);var ue=N(X(),1),d5=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,am.useRef)(null);if((0,am.useEffect)(()=>{if(!e)return;let c=h=>{i.current&&!i.current.contains(h.target)&&r()},p=h=>{h.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=220,s=440,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,s5.createPortal)((0,ue.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Te,onPointerDown:Te,onClick:c=>c.stopPropagation(),children:[(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,ue.jsx)(We,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,ue.jsx)(Hi,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,ue.jsx)(ht,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,ue.jsx)(mu,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,ue.jsx)("div",{className:"wf-context-menu-divider"}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,ue.jsx)(Vn,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,ue.jsx)(wu,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,ue.jsx)(Ro,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,ue.jsx)(Vr,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,ue.jsx)("div",{className:"wf-context-menu-divider"}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,ue.jsx)(Vr,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,ue.jsx)(Lu,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,ue.jsx)(Au,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,ue.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,ue.jsx)(sn,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,ue.jsx)("div",{className:"wf-context-menu-divider"}),(0,ue.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,ue.jsx)(Ja,{size:14,className:"wf-context-menu-icon"}),(0,ue.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,ue.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var om=N(J(),1),u5=N(Dt(),1);var At=N(X(),1),c5=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,om.useRef)(null);if((0,om.useEffect)(()=>{if(!e)return;let c=h=>{i.current&&!i.current.contains(h.target)&&r()},p=h=>{h.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=220,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,u5.createPortal)((0,At.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Te,onPointerDown:Te,onClick:c=>c.stopPropagation(),children:[(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,At.jsx)(pa,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,At.jsx)(Hi,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,At.jsx)(Ro,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,At.jsx)(Bi,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,At.jsx)("div",{className:"wf-context-menu-divider"}),(0,At.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,At.jsx)(Ja,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var nm=N(J(),1),f5=N(Dt(),1);var na=N(X(),1),p5=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,nm.useRef)(null);if((0,nm.useEffect)(()=>{if(!e)return;let c=h=>{i.current&&!i.current.contains(h.target)&&r()},p=h=>{h.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=180,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,f5.createPortal)((0,na.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Te,onPointerDown:Te,onClick:c=>c.stopPropagation(),children:[(0,na.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,na.jsx)(Ro,{size:14,className:"wf-context-menu-icon"}),(0,na.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,na.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,na.jsx)(sn,{size:14,className:"wf-context-menu-icon"}),(0,na.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,na.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,na.jsx)(Bi,{size:14,className:"wf-context-menu-icon"}),(0,na.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,na.jsx)("div",{className:"wf-context-menu-divider"}),(0,na.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,na.jsx)(Ja,{size:14,className:"wf-context-menu-icon"}),(0,na.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var to=N(J(),1);var re=N(X(),1),w0=1440*60*1e3;function kz(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=w0:t==="7d"?a<=7*w0:t==="30d"?a<=30*w0:!0}var _z={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function Iz(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=b0.find(i=>i.id===o);return[..._z[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function Mz(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var m5=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:l,onViewModeChange:s})=>{let[u,d]=(0,to.useState)(""),f=t!==void 0?t:u,c=P=>{d(P),a?.(P)},[p,h]=(0,to.useState)("tree"),w=l??p,v=P=>{h(P),s?.(P)},[g,b]=(0,to.useState)(null),[m,x]=(0,to.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[S,y]=(0,to.useState)(!1),[C,L]=(0,to.useState)(!1),[_,T]=(0,to.useState)(!1),[A,H]=(0,to.useState)(null),[F,k]=(0,to.useState)(null),[M,R]=(0,to.useState)(null),I=P=>{switch(P){case"image":return(0,re.jsx)(pa,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,re.jsx)(Bt,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,re.jsx)(oa,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,re.jsx)(aa,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,re.jsx)(ht,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},z=(0,to.useMemo)(()=>{let P=e.filter(D=>{if(f.trim()){let E=f.toLowerCase();if(!(D.name.toLowerCase().includes(E)||D.prompt&&D.prompt.toLowerCase().includes(E)))return!1}return!(!Mz(D.type,m.types)||!Iz(D,m.tags)||!kz(D.updatedAt||0,m.timeRange))});return P.sort((D,E)=>m.sortOrder==="desc"?(E.updatedAt||0)-(D.updatedAt||0):(D.updatedAt||0)-(E.updatedAt||0)),P},[e,f,m]),B=P=>D=>{D.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:P})),D.dataTransfer.effectAllowed="copy"};return(0,re.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,re.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,re.jsxs)("div",{className:"wf-search-row-compact",children:[(0,re.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,re.jsx)(Po,{size:13,className:"wf-search-icon"}),(0,re.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:P=>c(P.target.value)})]}),(0,re.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,re.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>v("tree"),children:(0,re.jsx)(Xn,{size:13})}),(0,re.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>v("grid"),children:(0,re.jsx)(zo,{size:13})})]}),(0,re.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,re.jsx)(jn,{size:13})})]}),(0,re.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,re.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,re.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:P=>{H(P.currentTarget.getBoundingClientRect()),y(D=>!D),L(!1),T(!1)},children:[(0,re.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,re.jsx)(Ka,{size:11})]})}),(0,re.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,re.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:P=>{k(P.currentTarget.getBoundingClientRect()),L(D=>!D),y(!1),T(!1)},children:[(0,re.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,re.jsx)(Ka,{size:11})]})}),(0,re.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,re.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:P=>{R(P.currentTarget.getBoundingClientRect()),T(D=>!D),y(!1),L(!1)},children:[(0,re.jsx)("span",{children:"\u65F6\u95F4"}),(0,re.jsx)(Ka,{size:11})]})})]})]}),(0,re.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,re.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,re.jsx)(Kt,{size:24,className:"wf-assets-empty-icon"}),(0,re.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,re.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):z.length===0?(0,re.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,re.jsx)(Kt,{size:24,className:"wf-assets-empty-icon"}),(0,re.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,re.jsx)("div",{className:"wf-tree-list-container-compact",children:z.map(P=>{let D=g===P.id;return(0,re.jsxs)("div",{"data-id":P.id,className:`wf-tree-item-compact ${D?"selected":""}`,draggable:!0,onDragStart:B(P),onClick:()=>{b(P.id),o(P.id)},onContextMenu:E=>{E.preventDefault(),b(P.id),n(E,P)},onMouseEnter:E=>r(P,E),onMouseLeave:()=>r(null),children:[P.previewUrl?(0,re.jsx)("img",{src:P.previewUrl,alt:P.name,className:"wf-tree-file-thumb-compact"}):(0,re.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:I(P.type)}),(0,re.jsx)("span",{className:"wf-tree-name-compact",title:P.name,children:P.name}),(0,re.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:E=>{E.stopPropagation(),o(P.id)},children:(0,re.jsx)(Vn,{size:12})})]},P.id)})}):(0,re.jsx)("div",{className:"wf-grid-view-container-compact",children:z.map(P=>(0,re.jsxs)("div",{"data-id":P.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:B(P),onClick:()=>{b(P.id),o(P.id)},onContextMenu:D=>{D.preventDefault(),n(D,P)},onMouseEnter:D=>r(P,D),onMouseLeave:()=>r(null),children:[(0,re.jsx)("div",{className:"wf-grid-card-thumb-compact",children:P.previewUrl?(0,re.jsx)("img",{src:P.previewUrl,alt:P.name}):I(P.type)}),(0,re.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,re.jsx)("div",{className:"wf-grid-card-title-compact",title:P.name,children:P.name})})]},P.id))})}),(0,re.jsx)(t5,{isOpen:S,anchorRect:A,selectedTypes:m.types,onChange:P=>x(D=>({...D,types:P})),onClose:()=>y(!1)}),(0,re.jsx)(o5,{isOpen:C,anchorRect:F,selectedTags:m.tags,onChange:P=>x(D=>({...D,tags:P})),onClose:()=>L(!1)}),(0,re.jsx)(r5,{isOpen:_,anchorRect:M,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:P=>x(D=>({...D,sortOrder:P})),onRangeChange:P=>x(D=>({...D,timeRange:P})),onClose:()=>T(!1)})]})};var Wu=N(J(),1);var le=N(X(),1),g5=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:l})=>{let[s,u]=(0,Wu.useState)("tree"),[d,f]=(0,Wu.useState)(""),[c,p]=(0,Wu.useState)(null),[h,w]=(0,Wu.useState)({}),v=m=>{w(x=>({...x,[m]:!x[m]}))},g=m=>{switch(m){case"image":return(0,le.jsx)(pa,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,le.jsx)(Bt,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,le.jsx)(oa,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,le.jsx)(aa,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,le.jsx)(Ro,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,le.jsx)(ht,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},b=e.filter(m=>{if(d.trim()){let x=d.toLowerCase();if(!(m.name.toLowerCase().includes(x)||m.tags&&m.tags.some(y=>y.toLowerCase().includes(x))))return!1}return!0});return(0,le.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,le.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,le.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,le.jsx)(ht,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,le.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,le.jsx)(qn,{size:14,className:"wf-subject-hero-arrow"})]}),(0,le.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,le.jsxs)("div",{className:"wf-search-row-compact",children:[(0,le.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,le.jsx)(Po,{size:13,className:"wf-search-icon"}),(0,le.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:m=>f(m.target.value)})]}),(0,le.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,le.jsx)(Xn,{size:13})}),(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,le.jsx)(zo,{size:13})})]}),(0,le.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:l,children:(0,le.jsx)(jn,{size:13})})]})}),(0,le.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:b.length===0?(0,le.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,le.jsx)(Kt,{size:24,className:"wf-assets-empty-icon"}),(0,le.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):s==="tree"?(0,le.jsx)("div",{className:"wf-tree-list-container-compact",children:b.map(m=>{let x=m.type==="folder",S=x&&(h[m.id]??!1),y=c===m.id;return(0,le.jsxs)("div",{className:`wf-tree-item-compact ${y?"selected":""}`,draggable:!x,onDragStart:C=>{x||(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:m})),C.dataTransfer.effectAllowed="copy")},onClick:()=>{p(m.id),x&&v(m.id)},onDoubleClick:()=>{x||i(m)},onContextMenu:C=>{C.preventDefault(),p(m.id),a(C,m,x)},onMouseEnter:C=>o(m,C),onMouseLeave:()=>o(null),children:[x?(0,le.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:S?(0,le.jsx)(Ka,{size:11}):(0,le.jsx)(qn,{size:11})}):null,m.previewUrl?(0,le.jsx)("img",{src:m.previewUrl,alt:m.name,className:"wf-tree-file-thumb-compact"}):(0,le.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:g(m.type)}),(0,le.jsx)("span",{className:"wf-tree-name-compact",title:m.name,children:m.name}),!x&&(0,le.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:C=>{C.stopPropagation(),i(m)},children:(0,le.jsx)(Vn,{size:12})})]},m.id)})}):(0,le.jsx)("div",{className:"wf-grid-view-container-compact",children:b.map(m=>(0,le.jsxs)("div",{className:"wf-grid-card-compact",draggable:m.type!=="folder",onDragStart:x=>{m.type!=="folder"&&(x.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:m})),x.dataTransfer.effectAllowed="copy")},onClick:()=>p(m.id),onDoubleClick:()=>{m.type!=="folder"&&i(m)},onContextMenu:x=>{x.preventDefault(),p(m.id),a(x,m,m.type==="folder")},onMouseEnter:x=>o(m,x),onMouseLeave:()=>o(null),children:[(0,le.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[m.previewUrl?(0,le.jsx)("img",{src:m.previewUrl,alt:m.name}):g(m.type),m.duration&&(0,le.jsx)("span",{className:"wf-grid-card-duration-compact",children:m.duration})]}),(0,le.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,le.jsx)("div",{className:"wf-grid-card-title-compact",title:m.name,children:m.name})})]},m.id))})}),(0,le.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,le.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,le.jsx)(_u,{size:13}),(0,le.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,le.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,le.jsx)(zi,{size:13}),(0,le.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var ks=N(J(),1);var Se=N(X(),1),h5=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:"\u89D2\u8272",tag:"\u89D2\u8272"},{id:"scene",label:"\u573A\u666F",tag:"\u573A\u666F"},{id:"prop",label:"\u9053\u5177/\u673A\u7532",tag:"\u673A\u7532"},{id:"style",label:"\u98CE\u683C/Lora",tag:"Lora"}],x5=({subjects:e,onBack:t,onSelectSubject:a,onCreateSubject:o})=>{let[n,r]=(0,ks.useState)(""),[i,l]=(0,ks.useState)("all"),[s,u]=(0,ks.useState)("recent"),[d,f]=(0,ks.useState)(!1),[c,p]=(0,ks.useState)(null),h=g=>{p(g.currentTarget.getBoundingClientRect()),f(b=>!b)},w=e.filter(g=>{if(i!=="all"){let m=h5.find(x=>x.id===i);if(m?.tag&&!g.tags.some(S=>S.toLowerCase().includes(m.tag.toLowerCase())||g.name.includes(m.tag)))return!1}if(!n.trim())return!0;let b=n.toLowerCase();return g.name.toLowerCase().includes(b)||g.tags.some(m=>m.toLowerCase().includes(b))}).sort((g,b)=>s==="recent"?b.updatedAt-g.updatedAt:s==="name"?g.name.localeCompare(b.name):s==="count"?b.itemCount-g.itemCount:0);return(0,Se.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Se.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Se.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:t,children:[(0,Se.jsx)(pu,{size:13}),(0,Se.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Se.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:h,children:[(0,Se.jsx)(Vi,{size:11}),(0,Se.jsx)("span",{children:(()=>{switch(s){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Se.jsx)(Ka,{size:11})]})]}),(0,Se.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Se.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Se.jsx)(Po,{size:13,className:"wf-search-icon"}),(0,Se.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:n,onChange:g=>r(g.target.value)})]}),(0,Se.jsx)("div",{className:"wf-subject-pills-row-compact",children:h5.map(g=>(0,Se.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${i===g.id?"active":""}`,onClick:()=>l(g.id),children:g.label},g.id))})]}),(0,Se.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:w.length===0?(0,Se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Se.jsx)(ht,{size:24,className:"wf-assets-empty-icon"}),(0,Se.jsx)("div",{className:"wf-assets-empty-title",children:"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Se.jsx)("div",{className:"wf-subject-grid-compact",children:w.map(g=>(0,Se.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,onDragStart:b=>{b.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:g.id,name:g.name,type:"image",previewUrl:g.avatar,prompt:g.tags.join(", ")}})),b.dataTransfer.effectAllowed="copy"},onClick:()=>a(g),children:[(0,Se.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[g.avatar?(0,Se.jsx)("img",{src:g.avatar,alt:g.name,className:"wf-subject-card-img-compact"}):(0,Se.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Se.jsx)(ht,{size:20})}),(0,Se.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Se.jsx)(Kt,{size:10})," ",g.itemCount," \u9879"]})]}),(0,Se.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Se.jsx)("div",{className:"wf-subject-card-name-compact",title:g.name,children:g.name}),(0,Se.jsx)("div",{className:"wf-subject-card-tags-compact",children:g.tags.slice(0,3).map((b,m)=>(0,Se.jsx)("span",{className:"wf-subject-card-tag-compact",children:b},m))})]})]},g.id))})}),(0,Se.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Se.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:o,children:[(0,Se.jsx)(We,{size:13}),(0,Se.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Se.jsx)(l5,{isOpen:d,anchorRect:c,sortValue:s,onChange:g=>u(g),onClose:()=>f(!1)})]})};var b5=N(J(),1),w5=N(Dt(),1);var Fe=N(X(),1),v5=({isOpen:e,x:t,y:a,item:o})=>{let n=(0,b5.useRef)(null);if(!e||!o)return null;let r=260,i=290,l=t+15;l+r>window.innerWidth-10&&(l=t-r-15);let s=a-20;s+i>window.innerHeight-10&&(s=window.innerHeight-i-10),s<10&&(s=10);let u="type"in o&&("fileExt"in o||"real_path"in o||"parentId"in o),d=u?o:null,f=u?null:o,c=o.updatedAt?new Date(o.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,w5.createPortal)((0,Fe.jsxs)("div",{ref:n,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${l}px`,width:`${r}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Fe.jsxs)("div",{className:"wf-hover-inspector-preview",children:[o.previewUrl?(0,Fe.jsx)("img",{src:o.previewUrl,alt:o.name,className:"wf-hover-inspector-img"}):(0,Fe.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Fe.jsx)(ht,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),d?.duration&&(0,Fe.jsx)("span",{className:"wf-hover-inspector-duration",children:d.duration})]}),(0,Fe.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Fe.jsx)("div",{className:"wf-hover-inspector-title",title:o.name,children:o.name}),(0,Fe.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Fe.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Fe.jsx)(gu,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value",children:c})]}),d?.resolution&&(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Fe.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Fe.jsx)(rn,{size:12})," \u5206\u8FA8\u7387"]}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value",children:d.resolution})]}),d?.size&&(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Fe.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Fe.jsx)(Mu,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value",children:d.size})]}),f?.prompt&&(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Fe.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:f.prompt})]})]}),d?.tags&&d.tags.length>0&&(0,Fe.jsx)("div",{className:"wf-hover-inspector-tags",children:d.tags.map((p,h)=>(0,Fe.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Fe.jsx)(Uu,{size:10})," ",p]},h))})]})]}),document.body)};var ut=N(X(),1),Nz=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n})=>{let[r,i]=(0,Ft.useState)("canvas"),[l,s]=(0,Ft.useState)("normal"),[u,d]=(0,Ft.useState)("tree"),[f,c]=(0,Ft.useState)(320),[p,h]=(0,Ft.useState)(!1),w=(0,Ft.useMemo)(()=>Jk(o),[o]),[v,g]=(0,Ft.useState)([]),[b,m]=(0,Ft.useState)([]),[x,S]=(0,Ft.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[y,C]=(0,Ft.useState)({visible:!1,x:0,y:0}),L=(0,Ft.useRef)(null);(0,Ft.useEffect)(()=>()=>{L.current&&(clearTimeout(L.current),L.current=null)},[]);let _=(0,Ft.useCallback)(E=>{E.preventDefault(),h(!0);let U=E.clientX,Y=f,Z=$=>{let V=Math.max(260,Math.min(500,Y-($.clientX-U)));c(V)},K=()=>{h(!1),window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",K)};window.addEventListener("mousemove",Z),window.addEventListener("mouseup",K)},[f]),T=E=>{if(n)n(E);else{let U=document.getElementById(E)||document.querySelector(`[data-id="${E}"]`);U&&(U.scrollIntoView({behavior:"smooth",block:"center"}),U.classList.add("highlight-pulse"),setTimeout(()=>U.classList.remove("highlight-pulse"),1800))}},A=(E,U)=>{if(L.current&&(clearTimeout(L.current),L.current=null),!E||!U){C({visible:!1,x:0,y:0});return}let{clientX:Y,clientY:Z}=U;L.current=setTimeout(()=>{C({visible:!0,x:Y,y:Z,item:E})},300)},H=(E,U)=>{S({visible:!0,x:E.clientX,y:E.clientY,targetType:"canvas-item",targetItem:U})},F=(E,U,Y)=>{S({visible:!0,x:E.clientX,y:E.clientY,targetType:Y?"asset-folder":"asset-item",targetItem:U})},k=E=>E.real_path||E.name,M=(E,U)=>{let Z=`[${U==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${E.name}]`;navigator.clipboard?.writeText(Z),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:Z,name:E.name,previewUrl:E.previewUrl,path:E.real_path}})),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${E.name}`)},R=E=>{let U=k(E);navigator.clipboard?.writeText(U),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:U,name:E.name}})),ne.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${U}`)},I=(E,U)=>{switch(E){case"add-to-canvas":a?.(U),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${U.name}`);break;case"focus-in-canvas":T(U.id),ne.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":M(U,"canvas");break;case"add-to-subjects":m(Y=>[{id:`sub-${Date.now()}`,name:U.name.replace(/\.[^/.]+$/,""),avatar:U.previewUrl||"",itemCount:1,tags:[U.type,"\u6765\u81EA\u753B\u5E03"],updatedAt:Date.now(),previewUrls:U.previewUrl?[U.previewUrl]:[]},...Y]),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${U.name}`);break;case"save-to-assets":g(Y=>[{id:`asset-${Date.now()}`,name:U.name,type:U.type||"doc",fileExt:U.name.split(".").pop()?.toUpperCase()||"FILE",updatedAt:Date.now(),previewUrl:U.previewUrl,real_path:U.real_path,tags:["\u753B\u5E03\u6C89\u6DC0"]},...Y]),ne.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${U.name}`);break;case"open-preview":U.previewUrl?(window.open(U.previewUrl,"_blank","noopener,noreferrer"),ne.success("\u5DF2\u6253\u5F00\u9884\u89C8")):ne.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":R(U);break;case"copy-path":navigator.clipboard?.writeText(k(U)),ne.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${k(U)}`);break;case"copy-file":navigator.clipboard?.writeText(U.name),ne.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${U.name}`);break;case"duplicate":ne.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":d(Y=>Y==="tree"?"grid":"tree"),ne.success(u==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":ne.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":ne.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:ne.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${E}`);break}},z=(E,U)=>{switch(E){case"add-to-canvas":a?.(U),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${U.name}`);break;case"add-to-agent":case"add-to-chat":M(U,"asset");break;case"reveal-in-finder":R(U);break;case"move-to":{let Y=v.filter($=>$.type==="folder"),Z=Y.map($=>$.name).join(" / ")||"\u6839\u76EE\u5F55",K=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${Z}\uFF09\uFF1A`,Y[0]?.name||"");if(K&&K.trim()){let $=Y.find(V=>V.name===K.trim());g(V=>V.map(W=>W.id===U.id?{...W,parentId:$?.id||K.trim()}:W)),ne.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${K.trim()}`)}break}case"delete":g(Y=>Y.filter(Z=>Z.id!==U.id)),ne.success(`\u5DF2\u5220\u9664\uFF1A${U.name}`);break;default:ne.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${E}`);break}},B=(E,U)=>{switch(E){case"reveal-in-finder":R(U);break;case"rename":{let Y=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",U.name);Y&&Y.trim()&&(g(Z=>Z.map(K=>K.id===U.id?{...K,name:Y.trim()}:K)),ne.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"));break}case"move-to":{let Y=v.filter($=>$.type==="folder"&&$.id!==U.id),Z=Y.map($=>$.name).join(" / ")||"\u6839\u76EE\u5F55",K=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${Z}\uFF09\uFF1A`,Y[0]?.name||"");if(K&&K.trim()){let $=Y.find(V=>V.name===K.trim());g(V=>V.map(W=>W.id===U.id?{...W,parentId:$?.id||K.trim()}:W)),ne.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${K.trim()}`)}break}case"delete":g(Y=>Y.filter(Z=>Z.id!==U.id&&Z.parentId!==U.id)),ne.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${U.name}`);break;default:ne.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${E}`);break}},P=()=>{let E=document.createElement("input");E.type="file",E.multiple=!0,E.onchange=U=>{let Y=U.target.files;if(Y&&Y.length>0){let Z=Array.from(Y).map((K,$)=>({id:`upload-${Date.now()}-${$}`,name:K.name,type:K.type.startsWith("image/")?"image":K.type.startsWith("video/")?"video":"doc",fileExt:K.name.split(".").pop()?.toUpperCase()||"FILE",size:`${(K.size/1048576).toFixed(1)} MB`,updatedAt:Date.now(),tags:["\u6700\u65B0\u5BFC\u5165"]}));g(K=>[...Z,...K]),ne.success(`\u5DF2\u5BFC\u5165 ${Z.length} \u4E2A\u6587\u4EF6`)}},E.click()},D=()=>{let E=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");if(E&&E.trim()){let U={id:`folder-${Date.now()}`,name:E.trim(),type:"folder",itemCount:0,updatedAt:Date.now()};g(Y=>[U,...Y]),ne.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${E.trim()}`)}};return e?(0,ut.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:`${f}px`},onPointerDown:Te,onMouseDown:Te,onClick:E=>E.stopPropagation(),children:[(0,ut.jsx)("div",{className:`wf-drawer-resize-handle ${p?"resizing":""}`,onMouseDown:_}),(0,ut.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,ut.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,ut.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${r==="canvas"&&l==="normal"?"active":""}`,onClick:()=>{i("canvas"),s("normal")},children:"\u753B\u5E03"}),(0,ut.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${r==="assets"||l==="subject-library"?"active":""}`,onClick:()=>{i("assets")},children:"\u8D44\u4EA7"})]}),(0,ut.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,ut.jsx)($t,{size:14})})]}),(0,ut.jsx)("div",{className:"wf-drawer-body",children:l==="subject-library"?(0,ut.jsx)(x5,{subjects:b,onBack:()=>s("normal"),onSelectSubject:E=>{},onCreateSubject:()=>{let E=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");E&&E.trim()&&m(U=>[{id:`sub-${Date.now()}`,name:E.trim(),avatar:"",itemCount:0,tags:["\u81EA\u5B9A\u4E49"],updatedAt:Date.now(),previewUrls:[]},...U])}}):r==="canvas"?(0,ut.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,ut.jsx)(m5,{nodes:w,onFocusNode:T,onContextMenu:H,onHoverItem:A,viewMode:u,onViewModeChange:d,onRefresh:()=>{ne.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,ut.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,ut.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:P,children:[(0,ut.jsx)(zi,{size:13}),(0,ut.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,ut.jsx)(g5,{assets:v,onOpenSubjects:()=>s("subject-library"),onContextMenu:F,onHoverItem:A,onImportFiles:P,onCreateFolder:D,onInsertToCanvas:E=>a?.(E)})}),(0,ut.jsx)(v5,{isOpen:y.visible,x:y.x,y:y.y,item:y.item||null}),(0,ut.jsx)(d5,{isOpen:x.visible&&x.targetType==="canvas-item",x:x.x,y:x.y,item:x.targetItem||null,onAction:I,onClose:()=>S(E=>({...E,visible:!1}))}),(0,ut.jsx)(c5,{isOpen:x.visible&&x.targetType==="asset-item",x:x.x,y:x.y,item:x.targetItem||null,onAction:z,onClose:()=>S(E=>({...E,visible:!1}))}),(0,ut.jsx)(p5,{isOpen:x.visible&&x.targetType==="asset-folder",x:x.x,y:x.y,item:x.targetItem||null,onAction:B,onClose:()=>S(E=>({...E,visible:!1}))})]}):null},y5=Nz;var Ut=N(X(),1),Ez=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],Tz=({isOpen:e,onClose:t})=>e?(0,Ut.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:Te,onMouseDown:Te,onClick:t,children:(0,Ut.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,Ut.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,Ut.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,Ut.jsx)(Tu,{size:18}),(0,Ut.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,Ut.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,Ut.jsx)($t,{size:16})})]}),(0,Ut.jsx)("div",{className:"wf-shortcuts-modal__body",children:Ez.map(a=>(0,Ut.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,Ut.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,Ut.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,Ut.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,Ut.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,Ut.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,Ut.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,C5=Tz;var yo=N(J(),1),k5=N(Dt(),1);var qt=N(X(),1),S5=278,Qi=12,Az=8,v0=160,$i=18,Dz={AudioLines:(0,qt.jsx)(Pi,{size:$i}),ImageGen:(0,qt.jsx)(Gn,{size:$i}),Mic:(0,qt.jsx)(Fi,{size:$i}),PersonStanding:(0,qt.jsx)(Bu,{size:$i}),TextGen:(0,qt.jsx)(Yn,{size:$i}),VideoGen:(0,qt.jsx)(Oo,{size:$i})},Rz={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function L5(e){return e?Rz[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function zz(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-S5:e;return Math.min(Math.max(Qi,o),Math.max(Qi,a-S5-Qi))}var Pz=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:l="start"})=>{let s=(0,yo.useRef)(null),[u,d]=(0,yo.useState)({left:t,top:a,maxHeight:v0});(0,yo.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?v0:window.innerHeight,p=zz(t,l),h=a+Az,w=Math.max(Qi,c-Qi-v0),v=Math.min(Math.max(Qi,h),w);d({left:p,top:v,maxHeight:Math.max(0,c-v-Qi)})},[l,e,t,a]),(0,yo.useEffect)(()=>{if(!e)return;let c=h=>{s.current&&!s.current.contains(h.target)&&i()},p=h=>{h.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,yo.useMemo)(()=>n.map(c=>(0,qt.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,qt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,qt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:L5(c.icon).bg,color:L5(c.icon).color},children:Dz[c.icon]??(0,qt.jsx)(ht,{size:$i})}):null,(0,qt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,qt.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,qt.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,k5.createPortal)((0,qt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,qt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,qt.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},rm=(0,yo.memo)(Pz);var Co=N(J(),1),_5=N(Dt(),1);var Ue=N(X(),1),Oz=210,Bz=230,Hz=260,Fz=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:l=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,Co.useRef)(null),[c,p]=(0,Co.useState)("main"),h=fe();(0,Co.useEffect)(()=>{a&&p("main")},[a]),(0,Co.useEffect)(()=>{if(!a)return;let x=y=>{f.current&&!f.current.contains(y.target)&&n()},S=y=>{y.key==="Escape"&&n()};return document.addEventListener("mousedown",x),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",S)}},[a,n]);let w=(0,Co.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:h("panel.runHint")},{action:"copy",label:h("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:h("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:h("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:h("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:h("menu.executeSelection")},{action:"copy",label:h("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:h("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:h("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:h("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:h("menu.addNode"),icon:(0,Ue.jsx)(We,{size:15})},{action:"undo",label:h("toolbar.undo"),shortcut:"\u2318Z",disabled:!l},{action:"redo",label:h("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:h("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:h("menu.selectAll"),shortcut:"\u2318A"}],[o,l,s,u,d,h]),v=(0,Co.useMemo)(()=>[{key:"text",type:"text",label:h("node.type.text"),icon:(0,Ue.jsx)(Yn,{size:18})},{key:"image",type:"image",label:h("node.type.image"),icon:(0,Ue.jsx)(pa,{size:18})},{key:"video",type:"video",label:h("node.type.video"),icon:(0,Ue.jsx)(Oo,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:h("node.type.audio"),icon:(0,Ue.jsx)(Pi,{size:18})},{key:"table",type:"table",label:h("node.type.table"),icon:(0,Ue.jsx)(Qa,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:h("node.type.video_composition"),icon:(0,Ue.jsx)(Bt,{size:18}),badge:{text:"Clip",variant:"new"}}],[h]);if(!a)return null;let g=c==="add-node"?Bz:Oz,b=Math.min(e,window.innerWidth-g-8),m=Math.min(t,window.innerHeight-Hz-8);return(0,_5.createPortal)((0,Ue.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:b,top:m},onContextMenu:x=>x.preventDefault(),children:c==="main"?w.map(x=>(0,Ue.jsxs)(Co.default.Fragment,{children:[o.type==="pane"&&x.action==="undo"?(0,Ue.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&x.action==="paste"?(0,Ue.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Ue.jsxs)("button",{type:"button",className:`wf-context-menu__item${x.disabled?" wf-context-menu__item--disabled":""}`,disabled:x.disabled,onClick:S=>{S.stopPropagation(),x.action==="open-add-node"?p("add-node"):r(x.action,o)},children:[x.icon?(0,Ue.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:x.icon}):null,(0,Ue.jsx)("span",{className:"wf-context-menu__label",children:x.label}),x.action==="open-add-node"?(0,Ue.jsx)(qn,{size:14,className:"wf-add-node-menu__arrow"}):x.shortcut?(0,Ue.jsx)("span",{className:"wf-context-menu__shortcut",children:x.shortcut}):null]})]},x.action)):(0,Ue.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Ue.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Ue.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:x=>{x.stopPropagation(),p("main")},title:h("menu.back"),children:(0,Ue.jsx)(hu,{size:16})}),(0,Ue.jsx)("span",{className:"wf-add-node-menu__title",children:h("menu.addNode")})]}),(0,Ue.jsx)("div",{className:"wf-add-node-menu__list",children:v.map(x=>(0,Ue.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:S=>{S.stopPropagation(),i?.(x.type),n()},children:[(0,Ue.jsx)("div",{className:"wf-add-node-menu__icon-box",children:x.icon}),(0,Ue.jsx)("span",{className:"wf-add-node-menu__label",children:x.label}),x.badge?(0,Ue.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${x.badge.variant}`,children:x.badge.text}):null,x.hasSubmenu?(0,Ue.jsx)(qn,{size:14,className:"wf-add-node-menu__arrow"}):null]},x.key))})]})}),document.body)},I5=Fz;var M5=N(J(),1),N5=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:l,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:h,onResetZoom:w,onCategoryKey:v,isAssetsOpen:g=!1,enabled:b=!0})=>{(0,M5.useEffect)(()=>{if(!b)return;let m=x=>{let S=x.target;if(["INPUT","TEXTAREA"].includes(S.tagName)||S.isContentEditable)return;let y=x.metaKey||x.ctrlKey,C=x.key.toLowerCase();if(!y&&g&&/^[1-6]$/.test(x.key)){x.preventDefault(),v?.(parseInt(x.key,10));return}if(!y&&C==="a"){x.preventDefault(),u?.();return}if(!y&&C==="v"){x.preventDefault(),p?.("select");return}if(!y&&C==="h"){x.preventDefault(),p?.("pan");return}if(!y&&C==="n"){x.preventDefault(),c?.();return}if(!y&&C==="m"){x.preventDefault(),f?.();return}if(x.key==="?"||x.shiftKey&&x.key==="/"){x.preventDefault(),d?.();return}if(y&&x.key==="1"){x.preventDefault(),h?.();return}if(y&&x.key==="0"){x.preventDefault(),w?.();return}if((x.key==="Delete"||x.key==="Backspace")&&i&&!y){x.preventDefault(),o?.();return}if(x.key==="Escape"){x.preventDefault(),g?u?.():i&&n?.();return}if(y&&C==="d"&&i){x.preventDefault(),r?.();return}if(y&&C==="c"&&!x.shiftKey){x.preventDefault(),e?.();return}if(y&&C==="v"){x.preventDefault(),t?.();return}if(y&&C==="a"){x.preventDefault(),a?.();return}if(y&&C==="z"&&!x.shiftKey){x.preventDefault(),l?.();return}y&&C==="z"&&x.shiftKey&&(x.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[b,e,t,a,o,n,r,i,l,s,u,d,f,c,p,h,w,v,g])};var Uo=N(J(),1);function im(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function E5(e,t,a){return y0(e,t,a).valid}function y0(e,t,a){let o=Vp(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var C0={minZoom:.23,maxZoom:1.29,defaultZoom:1},Uz={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},T5={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},qz={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},Vz={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},A5={portrait:Uz,square:T5,video_landscape:qz,audio_compact:Vz};function S0(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function D5(e){return A5[S0(e)]}function R5(e,t){let a=A5[t]||T5;return Math.round(e/a.aspectRatio)}function $r(e){return D5(e).default.width}function z5(e){return D5(e).default.height}function lm(e,t,a){let o=Up(e,{status:"empty",nodeWidth:$r(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function Qr(e,t,a){return{nodes:[lm(e,t,a)],edges:[]}}function L0(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function Gz(e,t){return`${e}-${t}`}function sm(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function dm(e){return Lk(e).map(t=>{let a=String(t.targetTool);return{key:Gz(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function P5(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var Xz={visible:!1,x:0,y:0,options:[]};function O5(e){let t=fe(),{screenToFlowPosition:a}=Wa(),o=de(p=>p.applyCanvasInputMutation),n=(0,Uo.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,Uo.useState)(Xz),l=(0,Uo.useRef)(null),s=(0,Uo.useRef)(null),u=(0,Uo.useCallback)((p,h)=>{if(!h.nodeId||h.handleType!=="source"){l.current=null;return}let w=de.getState().nodes.find(g=>g.id===h.nodeId),v=w?.data?.materialType;if(!w||!v){l.current=null;return}l.current={nodeId:h.nodeId,materialType:v}},[]),d=(0,Uo.useCallback)((p,h)=>{let w=h.fromNode?.id??null,v=h.toNode?.id??null,g=l.current,b=g?dm(g.materialType):[],m=null;if(!h.isValid&&w&&v){let S=de.getState(),y=y0({source:w,target:v,sourceHandle:null,targetHandle:null},S.nodes,S.edges);m=y.valid?null:t(im(y.reasonCode))}let x=P5({isValid:h.isValid??null,fromNodeId:w,toNodeId:v,startedFromSource:!!g,hasOptions:b.length>0,rejectReason:m});if(x.type==="reject"){n.current?.(x.reason),ne.warning(x.reason),l.current=null;return}if(x.type==="menu"&&g){let S="changedTouches"in p?p.changedTouches[0]:p;if(!S){l.current=null;return}let{clientX:y,clientY:C}=S;s.current=a({x:y,y:C}),i({visible:!0,x:y,y:C,options:b.map(L=>({key:L.key,label:t(L.labelKey),description:t(L.descKey),icon:L.icon}))});return}l.current=null},[a,t]),f=(0,Uo.useCallback)(p=>{let h=l.current,w=s.current,v=sm(p);if(h&&w&&v){let g=Qr(v.targetMaterialType,w),b=g.nodes[0];b&&o({addNodes:g.nodes,addEdges:[{source:h.nodeId,sourceHandle:"out",target:b.id,targetHandle:"in"}]})}i(g=>({...g,visible:!1})),l.current=null,s.current=null},[o]),c=(0,Uo.useCallback)(()=>{i(p=>({...p,visible:!1})),l.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var cn=N(J(),1);var Qt=[];for(let e=0;e<256;++e)Qt.push((e+256).toString(16).slice(1));function B5(e,t=0){return(Qt[e[t+0]]+Qt[e[t+1]]+Qt[e[t+2]]+Qt[e[t+3]]+"-"+Qt[e[t+4]]+Qt[e[t+5]]+"-"+Qt[e[t+6]]+Qt[e[t+7]]+"-"+Qt[e[t+8]]+Qt[e[t+9]]+"-"+Qt[e[t+10]]+Qt[e[t+11]]+Qt[e[t+12]]+Qt[e[t+13]]+Qt[e[t+14]]+Qt[e[t+15]]).toLowerCase()}var k0,jz=new Uint8Array(16);function _0(){if(!k0){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");k0=crypto.getRandomValues.bind(crypto)}return k0(jz)}var Yz=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),I0={randomUUID:Yz};function Zz(e,t,a){e=e||{};let o=e.random??e.rng?.()??_0();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return B5(o)}function Wz(e,t,a){return I0.randomUUID&&!t&&!e?I0.randomUUID():Zz(e,t,a)}var um=Wz;function H5(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function Kz(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function F5(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=Kz(o),i,l;if(t)i=t.x,l=t.y;else{let f=a?50:30;i=r.x+f,l=r.y+f}let s=new Map,u=o.map(f=>{let c=um();return s.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:l+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:um(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:l}}}function U5(e,t){let a=(0,cn.useRef)({nodes:[],edges:[]}),o=(0,cn.useRef)(null),n=a.current.nodes.length>0,r=(0,cn.useCallback)(()=>{let f=de.getState(),c=H5(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,cn.useCallback)(f=>{let c=F5(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=de.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(h=>({nodeId:h.id,data:{},node:{selected:!1}}))})},[]),l=(0,cn.useCallback)(()=>{r(),i()},[r,i]),s=(0,cn.useCallback)(()=>{let f=de.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,cn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,cn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:l,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var fn=N(J(),1);function q5(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:l,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,h]=(0,fn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,fn.useCallback)((y,C)=>{y.preventDefault();let L={type:"pane"};C?L={type:"node",nodeId:C.id}:de.getState().nodes.filter(T=>T.selected).length>1&&(L={type:"selection"}),h({visible:!0,x:y.clientX,y:y.clientY,context:L})},[]),v=(0,fn.useCallback)((y,C)=>{w(y,C)},[w]),g=(0,fn.useCallback)(y=>{w(y)},[w]),b=(0,fn.useCallback)(y=>{w(y)},[w]),m=(0,fn.useCallback)(()=>{h(y=>({...y,visible:!1}))},[]),x=(0,fn.useCallback)((y,C)=>{let L=t({x:p.x,y:p.y});switch(y){case"copy":{if(C.type==="node"){let T=de.getState().nodes.find(A=>A.id===C.nodeId);T&&!T.selected&&(s(),a(A=>A.map(H=>H.id===C.nodeId?{...H,selected:!0}:H)))}o();break}case"paste":n(L);break;case"duplicate":r();break;case"delete":{if(C.type==="node"){let _=de.getState();_.nodes.find(A=>A.id===C.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[C.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":l();break;case"execute-selection":{let _=de.getState().nodes.filter(T=>T.selected).map(T=>T.id);_.length>0&&f?.(_);break}case"execute-node":{C.type==="node"&&f?.([C.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,i,u,d,l,m,f]),S=(0,fn.useCallback)(y=>{let C=t({x:p.x,y:p.y});c?.(y,C),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:v,handlePaneContextMenu:g,handleSelectionContextMenu:b,closeMenu:m,handleMenuAction:x,handleAddNodeFromMenu:S}}var $z=N(J(),1),M0=new Map;function cm(e){M0.set(e.type,e)}function V5(){let e={};for(let[t,a]of M0)e[t]=a.component;return e}function G5(e,t,a){let o=M0.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var dt=N(J(),1);var Qe=N(J(),1);function X5(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var qo=N(X(),1),Qz=4,Jz=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=fe(),[i,l]=(0,Qe.useState)(!1),[s,u]=(0,Qe.useState)(!1),[d,f]=(0,Qe.useState)(null),c=(0,Qe.useRef)(null),p=(0,Qe.useRef)(null),h=(0,Qe.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",v=a==="plus"&&!!o&&o.length>0,g=r0(I=>I.inProgress),{screenToFlowPosition:b}=Wa(),m=(0,Qe.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Qe.useEffect)(()=>{if(a!=="plus"){m();return}let I=c.current,z=p.current;if(!I||!z)return;let B=P=>{if(s)return;let D=I.getBoundingClientRect(),E=D.left+D.width/2,U=D.top+D.height/2,{x:Y,y:Z}=X5(e,P.clientX-E,P.clientY-U);z.style.setProperty("--wf-handle-offset-x",`${Y}px`),z.style.setProperty("--wf-handle-offset-y",`${Z}px`)};return I.addEventListener("pointermove",B),()=>{I.removeEventListener("pointermove",B)}},[s,m,e,a]),(0,Qe.useEffect)(()=>{if(!s){m(),f(null);return}let I=()=>{let z=c.current;if(!z)return;let B=z.getBoundingClientRect();f({x:w?B.right:B.left,y:B.bottom})};return I(),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),()=>{window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)}},[s,w,m]);let x=(0,Qe.useCallback)(()=>{l(!0)},[]),S=(0,Qe.useCallback)(()=>{l(!1),m()},[m]),y=(0,Qe.useCallback)(I=>{let z=c.current;!z||I===null||typeof z.hasPointerCapture!="function"||typeof z.releasePointerCapture!="function"||!z.hasPointerCapture(I)||z.releasePointerCapture(I)},[]),C=(0,Qe.useCallback)(()=>{y(h.current.pointerId),h.current.pointerId=null,h.current.startX=0,h.current.startY=0,h.current.dragIntent=!1},[y]),L=(0,Qe.useCallback)(I=>{I.button===0&&(typeof I.currentTarget.setPointerCapture=="function"&&I.currentTarget.setPointerCapture(I.pointerId),h.current.pointerId=I.pointerId,h.current.startX=I.clientX,h.current.startY=I.clientY,h.current.dragIntent=!1,h.current.suppressClick=!1)},[]),_=(0,Qe.useCallback)(I=>{if(h.current.pointerId!==I.pointerId)return;Math.hypot(I.clientX-h.current.startX,I.clientY-h.current.startY)>=Qz&&(h.current.dragIntent=!0,h.current.suppressClick=!0,s&&u(!1))},[s]),T=(0,Qe.useCallback)(I=>{h.current.pointerId===I.pointerId&&(h.current.dragIntent||(h.current.suppressClick=!1),C())},[C]),A=(0,Qe.useCallback)(I=>{h.current.pointerId===I.pointerId&&(h.current.suppressClick=!1,C())},[C]),H=(0,Qe.useCallback)(I=>{if(I.stopPropagation(),h.current.suppressClick){h.current.suppressClick=!1;return}v&&u(z=>!z)},[v]),F=(0,Qe.useCallback)(()=>{let I=d;if(!I){let z=c.current;if(!z)return;let B=z.getBoundingClientRect();I={x:w?B.right:B.left,y:B.bottom}}return{screenPosition:I,flowPosition:b(I)}},[w,d,b]),k=(0,Qe.useCallback)(I=>{n?.(I,F()),u(!1)},[n,F]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",g?"wf-handle--connection-active":""].filter(Boolean).join(" "),R={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,qo.jsxs)(hs,{id:w?"in":"out",type:w?"target":"source",position:w?oe.Left:oe.Right,isConnectable:!0,className:M,style:R,children:[(0,qo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,qo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,qo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,qo.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:x,onPointerLeave:S,onPointerDown:L,onPointerMove:_,onPointerUp:T,onPointerCancel:A,onClick:H,children:(0,qo.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,qo.jsx)("div",{className:"wf-handle__plus-button",children:(0,qo.jsx)(We,{size:24,strokeWidth:2.5})})})}):null,v&&d?(0,qo.jsx)(rm,{visible:s,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:k,onClose:()=>u(!1)}):null]})},Wn=(0,Qe.memo)(Jz);var Vo=N(J(),1);var _s=N(X(),1),j5=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,_s.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,_s.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,_s.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,_s.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var Jt=N(X(),1);function e9(e){let t=fe();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var t9=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:l=400})=>{let s=fe(),u=(0,Vo.useRef)(e),[d,f]=(0,Vo.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,Vo.useState)(1),[h,w]=(0,Vo.useState)(e==="completed"?1:0),[v,g]=(0,Vo.useState)(e==="pending"||e==="generating");(0,Vo.useEffect)(()=>{let H=u.current;if(u.current=e,(H==="pending"||H==="generating")&&e==="completed"){f("crossfading"),g(!0),requestAnimationFrame(()=>{p(0),w(1)});let F=setTimeout(()=>{f("complete"),g(!1)},l+50);return()=>clearTimeout(F)}H==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),g(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(g(!0),p(1),w(0),f("idle")),e==="failed"&&(g(!1),f("idle")),H===e&&e==="completed"&&(f("complete"),w(1),g(!1))},[e,l]);let b=e==="pending"||e==="generating",m=e==="failed",x=e==="completed",S=s(e==="pending"?"node.preparing":"node.generating"),y=e9(a),C=(0,Vo.useCallback)(()=>({transition:`opacity ${l}ms ease-out`}),[l]),L=`wf-gsc__box--${t}`,_=()=>(0,Jt.jsx)("div",{className:"wf-gsc__skeleton",style:{...C(),opacity:c},children:(0,Jt.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${L}`,children:(0,Jt.jsx)(j5,{borderRadius:"inherit",children:(0,Jt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,Jt.jsx)("span",{className:"wf-gsc__progress-text",children:S})})})})}),T=()=>(0,Jt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${L} ${i}`,children:[(0,Jt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,Jt.jsx)($t,{size:24})}),(0,Jt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),y?(0,Jt.jsx)("span",{className:"wf-gsc__failed-message",children:y}):null,o?(0,Jt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,Jt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,Jt.jsx)(jn,{size:14}),s("node.regenerate")]}):null]}),A=H=>(0,Jt.jsx)("div",{className:`${i} ${H?"wf-gsc__content--blur":""}`,style:{...C(),opacity:h},children:r});return(0,Jt.jsxs)("div",{className:`wf-gsc ${b?L:""} ${i}`,children:[(b||v)&&_(),m&&T(),(x||d==="crossfading")&&A(d==="crossfading")]})},Ku=t9;var kt=N(J(),1);function So(e){return e>0?1/e:1}function Y5(e,t,a){return!!e&&!t&&a!=="running"}function Z5(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var Jr=N(X(),1),W5=24,K5=30,$5={text:aa,image:Gn,video:Oo,audio:oa,table:Qa,video_composition:Bt},a9=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=fe(),i=t?r(`node.type.${t}`):"\u8282\u70B9",l=e||i,{zoom:s}=vo(),[u,d]=(0,kt.useState)(!1),[f,c]=(0,kt.useState)(l),p=(0,kt.useRef)(null),h=(0,kt.useMemo)(()=>So(s),[s]);(0,kt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,kt.useEffect)(()=>{u||c(l)},[l,u]);let w=(0,kt.useCallback)(y=>{y.stopPropagation(),d(!0),c(l)},[l]),v=(0,kt.useCallback)(()=>{let C=f.trim()||i;d(!1),C!==e&&o&&o(C)},[f,i,e,o]),g=(0,kt.useCallback)(()=>{d(!1),c(l)},[l]),b=(0,kt.useCallback)(y=>{y.key==="Enter"?(y.preventDefault(),v()):y.key==="Escape"&&(y.preventDefault(),g())},[v,g]),m=(0,kt.useCallback)(y=>{let C=y.target.value;C.length<=K5&&c(C)},[]),x=()=>{if(a)return kt.default.isValidElement(a)?a:(0,Jr.jsx)(a,{size:14});let y=(t in $5?$5[t]:null)||aa;return(0,Jr.jsx)(y,{size:14})};return(0,Jr.jsxs)("div",{className:"wf-node-header",style:{top:-(W5+4*h),height:W5,transform:`scale(${h})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Jr.jsx)("span",{className:"wf-node-header__icon",children:x()}),u?(0,Jr.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:v,onKeyDown:b,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:K5}):(0,Jr.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:l.length>20?l:r("node.renameHint"),children:l}),n]})},Is=(0,kt.memo)(a9);var fm=N(J(),1);var pn=N(X(),1),o9=({executionStatus:e,status:t})=>{let a=fe();return(0,fm.useMemo)(()=>{switch(e){case"running":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,pn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},pm=(0,fm.memo)(o9);var Ji=N(J(),1);var $u=N(X(),1);var n9=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let l=(0,Ji.useMemo)(()=>Ho(e,t,a),[e,t,a]),s=(0,Ji.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,Ji.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!l)return null;switch(e){case"image":return(0,$u.jsx)("img",{src:l,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:s});case"video":return(0,$u.jsx)("video",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,$u.jsx)("div",{className:"wf-media-preview__audio",children:(0,$u.jsx)("audio",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},Q5=(0,Ji.memo)(n9);var J5=N(J(),1);var Ge=N(X(),1),r9=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=fe();return e==="text"?(0,Ge.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ge.jsx)(aa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ge.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,Ge.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,Ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,Ge.jsx)(ln,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ge.jsx)("span",{children:o("pills.writePrompt")})]}),(0,Ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,Ge.jsx)(bu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ge.jsx)("span",{children:o("pills.scriptGen")})]}),(0,Ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,Ge.jsx)(nn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ge.jsx)("span",{children:o("pills.planningGen")})]}),(0,Ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,Ge.jsx)(ht,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ge.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,Ge.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ge.jsx)(pa,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ge.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ge.jsx)($a,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ge.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ge.jsx)(oa,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},mm=(0,J5.memo)(r9);var Kn=N(J(),1);var Vt=N(X(),1),i9=({materialType:e,selected:t,onOpenResourcePicker:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let i=fe(),{zoom:l}=vo(),[s,u]=Kn.default.useState(!1),d=(0,Kn.useMemo)(()=>So(l),[l]),f=(0,Kn.useCallback)(()=>{n&&(n(),u(!0),setTimeout(()=>u(!1),1500))},[n]),c=(0,Kn.useMemo)(()=>{switch(e){case"image":return i("pill.importImage");case"video":return i("pill.importVideo");case"audio":return i("pill.importAudio");default:return i("pill.import")}},[e,i]);return(0,Vt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*d),transform:`translate(-50%, -100%) scale(${d})`,transformOrigin:"bottom center"},onClick:h=>h.stopPropagation(),children:e==="text"?(0,Vt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Vt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:i("pill.textEdit"),children:[(0,Vt.jsx)(nn,{size:13,className:"wf-floating-top-pill__icon"}),(0,Vt.jsx)("span",{children:i("pill.textEdit")})]}),(0,Vt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Vt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:f,title:i("pill.copy"),children:s?(0,Vt.jsx)(Lt,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Vt.jsx)(Vr,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Vt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Vt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:i("pill.structureSplit"),children:(0,Vt.jsx)(Kt,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,Vt.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Vt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,children:[(0,Vt.jsx)(ji,{size:13,className:"wf-floating-top-pill__icon"}),(0,Vt.jsx)("span",{children:c})]})})})},e_=(0,Kn.memo)(i9);var Ms=N(J(),1);var t_=N(J(),1),a_=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function l9(e,t,a=a_){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function o_({refs:e,excludeSelectors:t=a_,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,t_.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;l9(f,r.map(c=>c.current),t)&&a()},l=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",l)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",l)}},[e,t,a,o,n])}var N0=N(X(),1),s9=480,d9=({children:e,onClose:t,width:a=s9})=>{let{zoom:o}=vo(),n=(0,Ms.useRef)(null),r=(0,Ms.useMemo)(()=>So(o),[o]);return o_({refs:n,onClose:t}),(0,N0.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,N0.jsx)("div",{className:"wf-panel-shell__card",children:e})})},n_=(0,Ms.memo)(d9);var ao=N(J(),1);var r_=N(J(),1),Ns=N(X(),1),E0={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},u9=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function c9(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(E0[t])return t;for(let a of u9)if(a.regex.test(t))return a.brand;return null}var i_=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,r_.useMemo)(()=>t&&E0[t.toLowerCase()]?t.toLowerCase():c9(e),[t,e]),l=i?E0[i]:null;if(!l){if(r)return(0,Ns.jsx)(Ns.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,Ns.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,Ns.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:l.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var l_=N(J(),1);function s_(e){let t=jL(),a=YL();return(0,l_.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},l=Ho(i.materialType,i.mediaAssets,i.mediaUrl),s=i.content||i.generatedContent||"",u=!!(l||i.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:l,hasMedia:u,textContent:s}]}),[t,a,e])}var d_=N(J(),1),u_="wf_capabilities_catalog_v1",f9={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function Qu(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(u_);return e?JSON.parse(e):null}catch{return null}}function c_(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(u_,JSON.stringify(e))}catch{}}function f_(e,t,a){return(0,d_.useMemo)(()=>{let n=(a??Qu())?.[e]??[],r=n.find(L=>L.id===t)??n[0],i=f9[e]??{},l=r?.parameters??i,s=l.aspectRatio?.options&&l.aspectRatio.options.length>0?l.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=l.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=L=>L?s.some(_=>_.value===L):!1,f=l.duration?.options&&l.duration.options.length>0?l.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=l.duration?.defaultValue??f[0]?.value??5,p=L=>typeof L!="number"?!1:f.some(_=>_.value===L),h=l.resolution?.options??[],w=l.resolution?.defaultValue??h[0]?.value??"",v=l.quality?.options??[],g=l.quality?.defaultValue??v[0]?.value??"",b=!!l.sound?.supported,m=!!l.sound?.defaultValue,x=l.voice?.options??[],S=l.voice?.defaultValue??x[0]?.value??"",y=!!l.instrumental?.supported,C=!!l.instrumental?.defaultValue;return{schema:l,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:h,defaultResolution:w,qualityOptions:v,defaultQuality:g,hasSoundSupport:b,defaultSound:m,voiceOptions:x,defaultVoice:S,hasInstrumentalSupport:y,defaultInstrumental:C}},[e,t,a])}var p_=N(J(),1);var $n=N(X(),1),p9=({onClick:e,disabled:t,isGenerating:a})=>{let o=fe();return(0,$n.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,$n.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,$n.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,$n.jsx)(jr,{size:14,className:"wf-generate-btn__spin"}):(0,$n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,$n.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,$n.jsx)("path",{d:"M12 19V5"})]})})]})},m_=(0,p_.memo)(p9);var te=N(X(),1);function m9(e){let t=(0,te.jsx)(i_,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var g9=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let l=fe(),{materialType:s,selectedTool:u,params:d,prompt:f}=t,[c,p]=(0,ao.useState)(!1),[h,w]=(0,ao.useState)(!1),v=s_(e),g=u==="text-to-music"?"music":"speech",b=(0,ao.useCallback)(D=>{o({selectedTool:D==="music"?"text-to-music":"text-to-audio"})},[o]),m=(0,ao.useMemo)(()=>{let D=a?.[s]??[];return D.length===0&&(s==="text"?D=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?D=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?D=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(D=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),D.map(E=>{let U=m9(E.id),Y=U.icon,Z=E.badge??U.badge,K=E.subtitle??U.subtitle;return{value:E.id,label:E.label,triggerLabel:(0,te.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[Y?(0,te.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:Y}):null,(0,te.jsx)("span",{children:E.label})]}),icon:Y,badge:Z,subtitle:K}})},[a,s]),x=typeof d.model=="string"?d.model:m[0]?.value,{aspectRatioOptions:S,defaultAspectRatio:y,isAspectRatioValid:C,durationOptions:L,defaultDuration:_,isDurationValid:T,resolutionOptions:A,defaultResolution:H}=f_(s,x,a),F=(0,ao.useCallback)((D,E)=>{o({params:{...d,[D]:E}})},[o,d]),k=(0,ao.useCallback)(D=>{let Z=((a??Qu())?.[s]??[]).find($=>$.id===D)?.parameters,K={...d,model:D};d.aspectRatio&&Z?.aspectRatio?.options&&(Z.aspectRatio.options.some(V=>V.value===d.aspectRatio)||(K.aspectRatio=Z.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&Z?.duration?.options&&(Z.duration.options.some(V=>V.value===d.duration)||(K.duration=Z.duration.defaultValue||Z.duration.options[0]?.value||5)),d.resolution&&Z?.resolution?.options?Z.resolution.options.some(V=>V.value===d.resolution)||(K.resolution=Z.resolution.defaultValue||Z.resolution.options[0]?.value):d.resolution&&Z&&!Z.resolution?.options&&delete K.resolution,o({params:K})},[a,s,o,d]),M=(0,ao.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),R=(0,ao.useMemo)(()=>{switch(s){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(g==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[s,g,l]),I=typeof d.aspectRatio=="string"&&C(d.aspectRatio)?d.aspectRatio:y,z=typeof d.duration=="number"&&T(d.duration)?d.duration:_,B=D=>!!D&&A.some(E=>E.value===D),P=typeof d.resolution=="string"&&B(d.resolution)?d.resolution:H;return(0,te.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,te.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${g==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>b("speech"),children:[(0,te.jsx)(Fi,{size:13}),(0,te.jsx)("span",{children:l("panel.audioGen")})]}),(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${g==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>b("music"),children:[(0,te.jsx)(oa,{size:13}),(0,te.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,te.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[v.length>0||i?(0,te.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[v.map(D=>(0,te.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${D.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${D.label} (${D.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[D.url&&D.materialType==="image"?(0,te.jsx)("img",{src:D.url,alt:D.label,className:"wf-config-panel__ref-thumb-media"}):D.url&&D.materialType==="video"?(0,te.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,te.jsx)("video",{src:D.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,te.jsx)($a,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):D.materialType==="audio"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,te.jsx)(oa,{size:13})}):D.materialType==="text"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,te.jsx)(aa,{size:13})}):(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,te.jsx)(pa,{size:13})}),D.hasMedia&&(0,te.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},D.nodeId)),i?(0,te.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:l("picker.addRef"),children:(0,te.jsx)(We,{size:14})}):null]}):(0,te.jsx)("span",{}),(0,te.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>p(!0),title:l("header.fitView"),children:(0,te.jsx)(rn,{size:13})})]}),(0,te.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:R,rows:3,onChange:D=>o({prompt:D.target.value})}),(0,te.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",M]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,te.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,te.jsx)(Ta,{className:"wf-param-bar__select wf-param-bar__select--model",value:x,options:m,popupMatchSelectWidth:!1,onChange:D=>k(D)}),s==="image"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,te.jsx)(Ta,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:D=>F("aspectRatio",D)})})]}),s==="video"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,te.jsx)(Ta,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:D=>F("aspectRatio",D)}),(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(Ta,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:z,options:L,popupMatchSelectWidth:!1,onChange:D=>F("duration",D)}),A.length>0&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(Ta,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:P,options:A,popupMatchSelectWidth:!1,onChange:D=>F("resolution",D)})]})]})]}),s==="audio"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>w(!h),title:l("panel.advanced"),children:(0,te.jsx)(Vi,{size:13})})]})]}),(0,te.jsx)("div",{className:"wf-config-panel__action-group",children:(0,te.jsx)(m_,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),h&&(0,te.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,te.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,te.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,te.jsx)(d0,{style:{flex:1},min:1,max:s==="video"?20:60,value:z,onChange:D=>F("duration",D)})]})}),(0,te.jsx)(Yi,{title:l("panel.promptPlaceholder"),open:c,onCancel:()=>p(!1),width:680,children:(0,te.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:R,rows:10,onChange:D=>o({prompt:D.target.value})})})]})},g_=(0,ao.memo)(g9);var Da=N(J(),1);var ra="/omnimux-workflow";var Aa={manifest:`${ra}/api/manifest`,canvasJs:`${ra}/canvas.js`,workspaces:`${ra}/api/workspaces`,workspace:e=>`${ra}/api/workspaces/${e}`,workspaceVersion:e=>`${ra}/api/workspaces/${e}/version`,capabilities:`${ra}/api/capabilities`,media:`${ra}/media`,pick:`${ra}/api/pick`,localFile:`${ra}/api/local-file`,localFileProbe:`${ra}/api/local-file/probe`,executions:e=>`${ra}/api/workspaces/${e}/executions`,execution:(e,t)=>`${ra}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${ra}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${ra}/api/workspaces/${e}/executions/${t}/events`};var h9=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),x9=new Set(["mp4","webm","mov","mkv","avi","m4v"]),b9=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),w9={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function h_(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function Ju(e){return w9[h_(e)]}function gm(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=h_(e);return h9.has(o)?"image":x9.has(o)?"video":b9.has(o)?"audio":null}function hm(e){return typeof e=="string"&&e.startsWith("blob:")}function Qn(e){return`${ra}/api/local-file?path=${encodeURIComponent(e)}`}function Es(e){let t=Qn(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||Ju(e.name)||Ju(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function x_(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=Qn(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function b_(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var T0=["image","video","audio"],v9=80,y9=40;function C_(e){return!!e&&typeof e=="object"}function S_(e){return C_(e.data)?e.data:{}}function L_(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function k_(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function C9(e){let t=e.dimensions;if(C_(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function S9(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function L9(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function __(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function k9(e,t){if(!T0.includes(e))return!1;if(Ho(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function I_(e,t,a){let o=__(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=S_(r),l=L_(i.materialType);if(!l||!k9(l,i))continue;let s=S9(i,r.id),u=C9(i);n.push({nodeId:r.id,materialType:l,title:s,previewUrl:Ho(l,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:L9(i,s,r.id,u),width:u.width,height:u.height})}return n}function M_(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function w_(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function v_(e,t){return qp(e,t)}function y_(e){return Es({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function _9(e,t,a){let o=$r(a),n=z5(a);return{x:e.position.x-o-v9,y:e.position.y+t*(n+y9)}}function I9(e){return L_(S_(e).materialType)}function N_(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=__(e.edges,e.targetNodeId),l=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||l.has(w)){t.push({id:w,reason:"already_connected"});continue}let v=e.nodes.find(g=>g.id===w);if(!v){t.push({id:w,reason:"missing"});continue}if(!v_(v,r)){t.push({id:w,reason:"type_contract"});continue}a.push(w_(w,e.targetNodeId)),l.add(w)}let s=e.localFiles.filter(w=>!w.realPath||!T0.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=I9(r),d=s[0],f=!!u&&T0.includes(u)&&!!d&&d.materialType===u,c=0,p=f?s.slice(1):s;f&&d&&n.push({nodeId:e.targetNodeId,data:y_(d)});for(let w of p){let v=_9(r,c,w.materialType),g=lm(w.materialType,v,{...y_(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!v_(g,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(g),a.push(w_(g.id,e.targetNodeId)),l.add(g.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}var el=N(J(),1);var we=N(X(),1);function xm(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var M9=({items:e,selectedIds:t,onToggle:a})=>{let o=fe(),[n,r]=(0,el.useState)(""),[i,l]=(0,el.useState)("all"),[s,u]=(0,el.useState)("grid"),d=(0,el.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,el.useMemo)(()=>M_(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,we.jsxs)("div",{className:"wf-picker-pane",children:[(0,we.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,we.jsxs)("label",{className:"wf-picker-search",children:[(0,we.jsx)(Po,{size:14,className:"wf-picker-search__icon"}),(0,we.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,we.jsx)(Ta,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>l(p)}),(0,we.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,we.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,we.jsx)(zo,{size:14})}),(0,we.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,we.jsx)(Xn,{size:14})})]})]}),f.length===0?(0,we.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,we.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let h=t.includes(p.nodeId);return(0,we.jsxs)("button",{type:"button",className:`wf-picker-card ${h?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,we.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,we.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,we.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,we.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(xm(p.materialType))}),p.alreadyConnected?(0,we.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,we.jsx)(Lt,{size:11}),o("picker.added")]}):(0,we.jsx)("span",{className:`wf-picker-check ${h?"wf-picker-check--on":""}`,children:h?(0,we.jsx)(Lt,{size:11}):null})]}),(0,we.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,we.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,we.jsx)("span",{className:"wf-picker-type-tag",children:o(xm(p.materialType))})]})]},p.nodeId)})}):(0,we.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let h=t.includes(p.nodeId);return(0,we.jsxs)("button",{type:"button",className:`wf-picker-row ${h?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,we.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,we.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,we.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,we.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(xm(p.materialType))})}),(0,we.jsxs)("div",{className:"wf-picker-row__body",children:[(0,we.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,we.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(xm(p.materialType))]})]}),p.alreadyConnected?(0,we.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,we.jsx)(Lt,{size:11}),o("picker.added")]}):(0,we.jsx)("span",{className:`wf-picker-check ${h?"wf-picker-check--on":""}`,children:h?(0,we.jsx)(Lt,{size:11}):null})]},p.nodeId)})})]})},E_=M9;var tl=N(J(),1);async function Go(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function T_(){return Go(Aa.capabilities)}function A_(e,t){return Go(Aa.workspaces,{method:"POST",body:{name:e,id:t}})}function ec(e){return Go(Aa.workspace(encodeURIComponent(e)))}function D_(e){return Go(Aa.workspaceVersion(encodeURIComponent(e)))}function R_(e,t){return Go(Aa.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function z_(e,t={}){return Go(Aa.executions(encodeURIComponent(e)),{method:"POST",body:t})}function P_(e){return Go(Aa.executions(encodeURIComponent(e)))}function O_(e,t){return Go(Aa.execution(encodeURIComponent(e),encodeURIComponent(t)))}function tc(){return Go(Aa.pick,{method:"POST",body:{kind:"file"}})}function B_(e){return Go(Aa.localFileProbe,{method:"POST",body:{paths:e}})}function H_(e,t,a){return Go(Aa.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}function bm(e){let t=e.path;return typeof t=="string"?t:""}function N9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function A0(e,t={}){if(!e)return null;let a=t.name||N9(e),o=t.mime||Ju(a)||Ju(e)||"",n=gm(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:Qn(e)}:null}function ac(e){let t=[];for(let a of e){let o=A0(a);o&&t.push(o)}return t}var _t=N(X(),1),E9=({files:e,onAddFiles:t,onRemove:a})=>{let o=fe(),[n,r]=(0,tl.useState)(!1),i=(0,tl.useCallback)(d=>{let f=ac(d);f.length>0&&t(f),f.length<d.length&&ne.warning(o("picker.unsupported")),d.length>0&&f.length===0&&ne.warning(o("picker.unsupported"))},[t,o]),l=(0,tl.useCallback)(async()=>{let d=await tc();if(!d.ok){d.body.error==="picker-unsupported"?ne.warning(o("picker.needPath")):ne.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),s=(0,tl.useCallback)(d=>{let f=Array.from(d),c=[],p=0,h=0;for(let w of f){let v=bm(w);if(!v){p+=1;continue}let g=A0(v,{name:w.name,mime:w.type,size:w.size});g?c.push(g):h+=1}c.length>0&&t(c),p>0&&ne.warning(o("picker.needPath")),h>0&&ne.warning(o("picker.unsupported"))},[t,o]),u=(0,tl.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&s(d.dataTransfer.files)},[s]);return(0,_t.jsxs)("div",{className:"wf-picker-pane",children:[(0,_t.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{l()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,_t.jsx)(ji,{size:22,className:"wf-picker-dropzone__icon"}),(0,_t.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,_t.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,_t.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,_t.jsx)(Su,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,_t.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||Qn(d.realPath);return(0,_t.jsxs)("li",{className:"wf-picker-file-item",children:[(0,_t.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,_t.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,_t.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,_t.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,_t.jsxs)("div",{className:"wf-picker-row__body",children:[(0,_t.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,_t.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${k_(d.size)}`:""]})]}),(0,_t.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,_t.jsx)(Ja,{size:14})})]},d.id)})}):null]})},F_=E9;var Xo=N(X(),1),T9=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=fe(),i=de(C=>C.nodes),l=de(C=>C.edges),[s,u]=(0,Da.useState)(a),[d,f]=(0,Da.useState)([]),[c,p]=(0,Da.useState)([]),h=(0,Da.useMemo)(()=>I_(i,l,t),[i,l,t]);(0,Da.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,Da.useCallback)(()=>{p([]),o()},[o]),v=(0,Da.useCallback)((C,L)=>{L||f(_=>_.includes(C)?_.filter(T=>T!==C):[..._,C])},[]),g=(0,Da.useCallback)(C=>{p(L=>[...L,...C])},[]),b=(0,Da.useCallback)(C=>{p(L=>L.filter(_=>_.id!==C))},[]),x=d.filter(C=>{let L=h.find(_=>_.nodeId===C);return L&&!L.alreadyConnected}).length+c.length,S=(0,Da.useCallback)(()=>{if(x===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,x,d]),y=(0,Xo.jsxs)("div",{className:"wf-picker-footer",children:[(0,Xo.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,Xo.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:x===0,onClick:S,children:[r("picker.use")," ",x," ",r("picker.items")]})]});return(0,Xo.jsxs)(Yi,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:y,children:[(0,Xo.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,Xo.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",h.length,")"]}),(0,Xo.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,Xo.jsx)(E_,{items:h,selectedIds:d,onToggle:v}):(0,Xo.jsx)(F_,{files:c,onAddFiles:g,onRemove:b})]})},wm=T9;var Jn=N(J(),1);function U_(e){let t=fe(),[a,o]=(0,Jn.useState)(!1),[n,r]=(0,Jn.useState)("canvas"),i=(0,Jn.useCallback)((f="canvas")=>{r(f),o(!0)},[]),l=(0,Jn.useCallback)(()=>{o(!1)},[]),s=(0,Jn.useCallback)(f=>{let c=de.getState(),p=N_({nodes:c.nodes,edges:c.edges,targetNodeId:e,selectedCanvasNodeIds:f.selectedCanvasNodeIds,localFiles:f.localFiles});return p.hasWork?c.applyCanvasInputMutation({addNodes:p.addNodes,addEdges:p.addEdges,nodePatches:p.nodePatches}).status!=="allowed"?(ne.error(t("picker.commitFailed")),!1):(p.rejected.length>0?ne.warning(t("picker.commitPartial")):ne.success(t("picker.commitOk")),o(!1),!0):(ne.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,Jn.useCallback)(async()=>{let f=await tc();if(!f.ok)return f.body.error==="picker-unsupported"?ne.warning(t("picker.needPath")):ne.error(t("picker.pickFailed")),!1;let c=f.body.paths??[];if(c.length===0)return!1;let p=ac(c);return p.length===0?(ne.warning(t("picker.unsupported")),!1):s({selectedCanvasNodeIds:[],localFiles:p})},[s,t]),d=(0,Jn.useCallback)(async f=>{let c=await tc();if(!c.ok)return ne.error(t("picker.pickFailed")),!1;let p=c.body.path;if(!p)return!1;let w=ac([p])[0];if(!w||w.materialType!==f)return ne.warning(t("picker.unsupported")),!1;let v=Es({realPath:w.realPath,name:w.name,materialType:w.materialType,mime:w.mime,size:w.size});return de.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:v}]}).status!=="allowed"?(ne.error(t("picker.commitFailed")),!1):(ne.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:l,importLocalFiles:u,relinkLocalFile:d,commit:s}}var Ne=N(X(),1),A9=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:l,mediaUrl:s,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,h=t.__catalog??null,[w,v]=(0,dt.useState)(!1),[g,b]=(0,dt.useState)(!1),[m,x]=(0,dt.useState)(!1),[S,y]=(0,dt.useState)(!1),[C,L]=(0,dt.useState)(null),{setNodes:_}=Wa(),T=$e(ee=>ee.status==="pending"||ee.status==="running"),A=o.nodeWidth??$r(n),H=S0(n),F=R5(A,H),k=C??o.nodeHeight??F,M=(0,dt.useCallback)(ee=>{_(Ee=>Ee.map(Pe=>Pe.id===e?{...Pe,data:{...Pe.data,...ee}}:Pe))},[e,_]),R=(0,dt.useCallback)((ee,Ee)=>{if(ee>0&&Ee>0){let Pe=ee/Ee,Mt=Math.max(80,Math.min(800,Math.round(A/Pe)));L(Mt),o.nodeHeight!==Mt&&M({nodeHeight:Mt})}},[o.nodeHeight,A,M]),I=(0,dt.useCallback)(()=>{let ee=o.selectedTool;(!ee||ee==="text-editor"||ee==="import")&&M({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]}),$e.getState().startNodeExecution?.(e)},[e,n,o.selectedTool,M]),z=fe(),B=de(ee=>ee.applyCanvasInputMutation),P=U_(e),D=(0,dt.useMemo)(()=>dm(n).map(ee=>({key:ee.key,label:z(ee.labelKey),description:z(ee.descKey),icon:ee.icon})),[n,z]),E=(0,dt.useCallback)((ee,Ee)=>{let Pe=sm(ee),Mt=Ee?.flowPosition;if(!Pe||!Mt)return;let va=Qr(Pe.targetMaterialType,Mt),Yo=va.nodes[0];Yo&&B({addNodes:va.nodes,addEdges:[{source:e,sourceHandle:"out",target:Yo.id,targetHandle:"in"}]})},[B,e]),U=u||l||"",Y=(0,dt.useCallback)(ee=>{if(n==="text"){let Ee="";ee==="script"?Ee=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:ee==="planning"?Ee=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:ee==="prompt"?Ee=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:ee==="storyboard"&&(Ee=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({prompt:Ee,selectedTool:"text-to-text"})}},[n,M]),Z=(0,dt.useCallback)(ee=>{let Ee=bm(ee);if(!Ee){ne.warning(z("picker.needPath"));return}let Pe=gm(ee.name,ee.type)??n;if(Pe!=="image"&&Pe!=="video"&&Pe!=="audio"){ne.warning(z("picker.unsupported"));return}M(Es({realPath:Ee,name:ee.name,materialType:Pe,mime:ee.type,size:ee.size}))},[n,z,M]),K=(0,dt.useCallback)(ee=>{ee.preventDefault(),ee.stopPropagation(),b(!0)},[]),$=(0,dt.useCallback)(ee=>{ee.preventDefault(),ee.stopPropagation(),b(!1)},[]),V=(0,dt.useCallback)(ee=>{ee.preventDefault(),ee.stopPropagation(),b(!1);let Ee=ee.dataTransfer.files?.[0];Ee&&Z(Ee)},[Z]),W=(0,dt.useCallback)(()=>{U&&navigator.clipboard.writeText(U).catch(()=>{})},[U]),se=(0,dt.useCallback)(()=>{if(!U)return;let ee=U.split(`

`).filter(Ee=>Ee.trim().length>0);ee.length>1&&M({content:ee.join(`
---
`)})},[U,M]);(0,dt.useEffect)(()=>{a||(x(!1),y(!1))},[a]);let pe=Y5(a,m,f),ae=r==="offline"||o.isMissing===!0,ie=Ho(n,p,s),ve=ae?null:Z5(f,r,!!ie),ye=n==="video"?"video":n==="audio"?"audio":"square";return(0,Ne.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:A},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[(w||a)&&(0,Ne.jsx)(e_,{materialType:n,selected:a,onOpenResourcePicker:()=>{P.importLocalFiles()},onStartTextEdit:()=>y(!0),onCopyText:W,onSplitText:se}),(0,Ne.jsx)(Wn,{side:"left",nodeHovered:w}),(0,Ne.jsx)(Is,{label:i,materialType:n,onLabelChange:ee=>M({label:ee}),trailing:(0,Ne.jsx)(pm,{executionStatus:f,status:r})}),(0,Ne.jsxs)("div",{className:`wf-material-node__card ${g?"wf-material-node__card--dragover":""}`,style:{width:A,height:k},onDragOver:K,onDragLeave:$,onDrop:V,children:[a&&(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Ne.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Ne.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Ne.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,Ne.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:U||S?(0,Ne.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${S?" nodrag":""}`,readOnly:!S,value:U,placeholder:z("node.textPlaceholder"),autoFocus:S,onMouseDown:ee=>{S||ee.preventDefault()},onDoubleClick:ee=>{ee.stopPropagation(),y(!0),ee.currentTarget.focus()},onFocus:()=>y(!0),onBlur:()=>y(!1),onChange:ee=>M({content:ee.target.value,status:ee.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,Ne.jsx)(mm,{materialType:"text",onStartEdit:()=>y(!0),onApplyPreset:Y})}),n!=="text"&&ae&&(0,Ne.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,Ne.jsx)(Xi,{size:22,className:"wf-media-offline__icon"}),(0,Ne.jsx)("div",{className:"wf-media-offline__title",children:z("node.offline")}),(0,Ne.jsx)("div",{className:"wf-media-offline__hint",children:z("node.offlineHint")}),(0,Ne.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{P.relinkLocalFile(n)},children:z("node.relink")})]}),n!=="text"&&!ae&&(ve?(0,Ne.jsx)("div",{className:"wf-material-node__media",children:(0,Ne.jsx)(Ku,{status:ve,loadingAspectRatio:ye,errorMessage:c??d,taskId:o.taskId,onRetry:I,children:ie?(0,Ne.jsx)(Q5,{materialType:n,mediaAssets:p,mediaUrl:s,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:R}):(0,Ne.jsx)(mm,{materialType:n,onApplyPreset:Y})})}):(0,Ne.jsx)("div",{className:"wf-material-node__media",children:(0,Ne.jsx)(mm,{materialType:n,onApplyPreset:Y})})),n==="text"&&(d||c)&&(0,Ne.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),pe&&(0,Ne.jsx)(n_,{onClose:()=>x(!0),children:(0,Ne.jsx)(g_,{nodeId:e,nodeData:o,catalog:h,onUpdateNodeData:M,onGenerate:I,execBusy:T,onOpenResourcePicker:()=>P.openPicker("canvas")})}),(0,Ne.jsx)(Wn,{side:"right",nodeHovered:w,options:D,onSelect:E}),(0,Ne.jsx)(wm,{open:P.open,nodeId:e,initialTab:P.initialTab,onCancel:P.closePicker,onCommit:P.commit})]})},q_=(0,dt.memo)(A9);var V_={type:"material",component:q_,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Up("text",{status:"empty",nodeWidth:$r("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var Ts=N(J(),1);var D0=50;function al(e){return JSON.parse(JSON.stringify(e))}var D9={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},ia=ys((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,al(o)].slice(-D0),redoStack:[]}};return{document:D9,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:al(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:al(i),undoStack:l,redoStack:[...r,al(n)].slice(-D0)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:al(i),redoStack:l,undoStack:[...r,al(n)].slice(-D0)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),l=i.rows[o];if(!l)return;let s=a(i),u=[...i.rows],d={...l,cells:[...l.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(l=>l.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((l,s)=>s!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),l=a(i),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,s],rows:u},...l})},updateColumn:(o,n,r)=>{let{document:i}=t(),l=i.columns[o];if(!l)return;let s=a(i),u=[...i.columns];u[o]={...l,title:n,type:r},e({document:{...i,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((s,u)=>u!==o),l=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:l},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),l=[...n.columns];l[o]={...r,visible:!r.visible},e({document:{...n,columns:l},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let l=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:d},...l})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:al(o),undoStack:[],redoStack:[]})}});var ge=N(X(),1),G_=380,R9=280,X_=(0,Ts.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=ia(),[i,l]=(0,Ts.useState)(!1),{zoom:s}=vo(),u=(0,Ts.useMemo)(()=>So(s),[s]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,ge.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:G_},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(i||a)&&(0,ge.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,ge.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,ge.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:h=>{h.stopPropagation(),r()},children:[(0,ge.jsx)(We,{size:14}),(0,ge.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,ge.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:h=>{h.stopPropagation(),n()},children:[(0,ge.jsx)(rn,{size:13}),(0,ge.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,ge.jsx)(Wn,{side:"left",nodeHovered:i}),(0,ge.jsx)(Is,{label:c,materialType:"table"}),(0,ge.jsxs)("div",{className:"wf-material-node__card",style:{width:G_,height:R9},onDoubleClick:()=>n(),children:[a&&(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,ge.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ge.jsx)(Qa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,ge.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,ge.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:h=>h.stopPropagation(),children:[(0,ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,ge.jsx)(We,{size:14,className:"wf-node-empty__pill-icon"}),(0,ge.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,ge.jsx)(rn,{size:13,className:"wf-node-empty__pill-icon"}),(0,ge.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,ge.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,ge.jsx)(Cu,{size:14}),(0,ge.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,ge.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,ge.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((h,w)=>{let v=h.cells[0],g=typeof v=="string"&&v?v:typeof v=="number"?String(v):Array.isArray(v)&&v.length>0?`\u{1F4CE} \u9644\u4EF6 (${v.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,ge.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,ge.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:g}),(0,ge.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",w+1]})]},w)}),d.length>3&&(0,ge.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,ge.jsx)(Wn,{side:"right",nodeHovered:i})]})});var j_={type:"table",component:X_,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var ei=N(J(),1);var Ra=N(J(),1);var oo=N(X(),1),z9=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:l,nodeHeight:s,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:h,leftHandleOptions:w,onLeftHandleSelect:v,onFileDrop:g,onFilesDrop:b,onDragOver:m,onDragLeave:x,onDrop:S,onMouseEnter:y,onMouseLeave:C,onCardClick:L,onCardDoubleClick:_,renderFloatingPill:T,renderHeader:A,children:H,renderConfigPanel:F})=>{let[k,M]=(0,Ra.useState)(!1),[R,I]=(0,Ra.useState)(!1),{zoom:z}=vo(),B=(0,Ra.useMemo)(()=>So(z),[z]),P=(0,Ra.useMemo)(()=>({inverseScale:B,hovered:k,selected:t}),[B,k,t]),D=(0,Ra.useCallback)(W=>{M(!0),y?.(W)},[y]),E=(0,Ra.useCallback)(W=>{M(!1),C?.(W)},[C]),U=(0,Ra.useCallback)(W=>{W.preventDefault(),W.stopPropagation(),I(!0),m?.(W)},[m]),Y=(0,Ra.useCallback)(W=>{W.preventDefault(),W.stopPropagation(),I(!1),x?.(W)},[x]),Z=(0,Ra.useCallback)(W=>{W.preventDefault(),W.stopPropagation(),I(!1);let se=W.dataTransfer.files;se&&se.length>0&&(b?.(se),se[0]&&g?.(se[0])),S?.(W)},[S,g,b]),K=typeof T=="function"?T(P):T,$=typeof A=="function"?A(P):A,V=typeof F=="function"?F(P):F;return(0,oo.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:l,...n},onMouseEnter:D,onMouseLeave:E,"data-node-id":e,children:[K,u&&(0,oo.jsx)(Wn,{side:"left",nodeHovered:k,variant:f,options:w,onSelect:v}),$,(0,oo.jsxs)("div",{className:`wf-material-node__card ${R?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:l,height:s,...r},"data-node-type":i,onClick:L,onDoubleClick:_,onDragOver:U,onDragLeave:Y,onDrop:Z,children:[t&&(0,oo.jsxs)(oo.Fragment,{children:[(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),H]}),V,d&&(0,oo.jsx)(Wn,{side:"right",nodeHovered:k,variant:c,options:p,onSelect:h})]})},Y_=(0,Ra.memo)(z9);var ol=N(J(),1);var er=N(X(),1),P9=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=vo(),l=(0,ol.useMemo)(()=>So(i),[i]),s=a??l,u=d=>d?ol.default.isValidElement(d)?d:(0,er.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,er.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,er.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,er.jsxs)(ol.default.Fragment,{children:[f>0&&(0,er.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,er.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,er.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},Z_=(0,ol.memo)(P9);var vm=N(J(),1);var za=N(X(),1),O9=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:l="",style:s})=>{let u=fe(),d=(f,c,p)=>f?vm.default.isValidElement(f)?f:(0,za.jsx)(f,{size:c,className:p}):null;return(0,za.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${l}`.trim(),style:s,children:[(e||t)&&(0,za.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,za.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,za.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,za.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,za.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,za.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,za.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,za.jsxs)("button",{type:"button",className:p,onClick:h=>{h.stopPropagation(),f.onClick?.(h)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,za.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,za.jsx)("span",{children:f.label})]},f.key)})}),i]})},W_=(0,vm.memo)(O9);var nl=N(J(),1);function K_(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function $_(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function Q_(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function J_(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function eI(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var Je=N(X(),1),B9=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:i,onDownload:l})=>{let s=fe(),[u,d]=(0,nl.useState)(!1),f=(0,nl.useCallback)(h=>{h.stopPropagation(),d(w=>!w)},[]),c=(0,nl.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,Je.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,Je.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,Je.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":s("clip.openEditorTitle"),children:[t?(0,Je.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,Je.jsx)("span",{className:"wf-vc-result__fallback",children:(0,Je.jsx)(Bt,{size:36,strokeWidth:1.5})}),(0,Je.jsx)("span",{className:"wf-vc-result__play",children:(0,Je.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,Je.jsx)($a,{size:22,fill:"currentColor"})})})]});return(0,Je.jsxs)("div",{className:"wf-vc-result",children:[p,(0,Je.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,Je.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Je.jsx)("dt",{children:s("clip.duration")}),(0,Je.jsx)("dd",{className:"wf-vc-result__mono",children:Q_(a)})]}),(0,Je.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Je.jsx)("dt",{children:s("clip.resolution")}),(0,Je.jsx)("dd",{className:"wf-vc-result__mono",children:J_(o,n)})]})]}),(0,Je.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,Je.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:h=>{h.stopPropagation(),i?.()},children:[(0,Je.jsx)(Ui,{size:14}),(0,Je.jsx)("span",{children:s("clip.reEdit")})]}),(0,Je.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:h=>{h.stopPropagation(),l?.()},disabled:!e,title:e?s("clip.downloadTitle"):void 0,children:[(0,Je.jsx)(Oi,{size:14}),(0,Je.jsx)("span",{children:s("clip.download")})]})]})]})},tI=(0,nl.memo)(B9);var aI="omnimux-clip-open",R0="omnimux-clip-save",z0="omnimux-clip-close",P0="omnimux-clip-progress";function oI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function nI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function rI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var ba=N(X(),1),iI=350,H9=440;function lI(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function no(e){return typeof e=="string"&&e.trim()?e:void 0}function O0(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function F9(e){return no(e.mediaUrl)||no(e.outputVideoUrl)||no(e.path)||no(e.url)||no(e.real_path)||no(e.filePath)}function U9(e){let{nodes:t,edges:a}=de.getState(),o=[],n=[],r=[],i=[];for(let l of a){if(l.target!==e)continue;let s=t.find(h=>h.id===l.source);if(!s)continue;let u=lI(s.data)?s.data:{},d=no(u.materialType)||(s.type==="material"?void 0:s.type),f=no(u.label)||no(u.title)||s.id,c=F9(u)||"",p=O0(u.duration)??O0(u.outputDurationMs)??O0(u.durationMs);if(d==="video"||s.type==="video_composition"){let h=c||no(u.outputVideoUrl)||"";h&&o.push({path:h,name:f,durationMs:p,url:h})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let h=no(u.content)||no(u.generatedContent)||no(u.prompt);h&&i.push({text:h,startTimeMs:i.reduce((w,v)=>w+v.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function q9(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function V9(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var G9=({id:e,data:t,selected:a})=>{let o=lI(t)?t:{},n=de(w=>w.setNodes),r=de(w=>w.setEdges),i=fe(),l=o.status??"idle",s=!!o.outputVideoUrl,u=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||i("node.type.video_composition"),f=$_(l,s),c=(0,ei.useCallback)(w=>{n(v=>v.map(g=>g.id===e?{...g,data:{...g.data,...w}}:g))},[e,n]);(0,ei.useEffect)(()=>{if(typeof window>"u")return;let w=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!oI(m)||m.nodeId&&m.nodeId!==e)return;let x=m.output;if(c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:x?.videoPath,thumbnailUrl:x?.thumbnailPath,outputThumbnailUrl:x?.thumbnailPath,outputDurationMs:x?.durationMs,outputWidth:x?.width,outputHeight:x?.height,status:x?.videoPath?"completed":"idle",renderProgress:x?.videoPath?100:void 0,errorMessage:void 0}),x?.videoPath&&m.createDownstreamNode){let y=de.getState().nodes,L=y.find(T=>T.id===e)?.position||{x:0,y:0};if(!y.some(T=>T.type==="material"&&T.data?.realPath===x.videoPath)){let T=`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,A={x:L.x+iI+80,y:L.y},H={id:T,type:"material",position:A,selected:!0,data:{materialType:"video",label:`${o.title||o.label||i("node.type.video_composition")}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:x.videoPath,mediaUrl:x.videoPath,thumbnailUrl:x.thumbnailPath,duration:x.durationMs?Math.round(x.durationMs/1e3):void 0,size:{width:x.width||1920,height:x.height||1080}}},k={id:`edge_${e}_${T}`,source:e,target:T,sourceHandle:"output",targetHandle:"input"};n(M=>[...M.map(R=>({...R,selected:!1})),H]),r(M=>[...M,k]),ne.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03")}}},v=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!rI(m)||m.nodeId&&m.nodeId!==e)return;let x=m.status??"rendering";c({status:x,renderProgress:m.renderProgress})},g=b=>{let m=b instanceof CustomEvent?b.detail:void 0;nI(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:s?"completed":"idle"}))};return window.addEventListener(R0,w),window.addEventListener(P0,v),window.addEventListener(z0,g),()=>{window.removeEventListener(R0,w),window.removeEventListener(P0,v),window.removeEventListener(z0,g)}},[s,e,o.projectId,o.status,c]);let p=(0,ei.useCallback)(()=>{if(typeof window>"u")return;let w=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,v={source:"canvas",nodeId:e,nodeTitle:d,projectId:w,draftSchema:o.schema,upstreamInputs:U9(e)};c({status:"editing",projectId:w}),window.dispatchEvent(new CustomEvent(aI,{detail:v,bubbles:!0})),window.setTimeout(()=>{q9()||ne.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,d,c]),h=(0,ei.useCallback)(()=>{let w=o.outputVideoUrl;if(!w)return;let v=document.createElement("a");v.href=w,v.download=`${eI(d)}.mp4`,v.rel="noopener",document.body.appendChild(v),v.click(),v.remove()},[o.outputVideoUrl,d]);return(0,ba.jsxs)(Y_,{id:e,selected:a,nodeWidth:iI,nodeHeight:H9,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:w=>{w.stopPropagation(),p()},renderFloatingPill:({hovered:w,selected:v})=>{if(!w&&!v||!s)return null;let g=[{key:"download_video",label:i("clip.download"),icon:Oi,onClick:h,title:i("clip.downloadTitle")}];return(0,ba.jsx)(Z_,{actions:g})},renderHeader:()=>(0,ba.jsx)(Is,{label:d,materialType:"video_composition",customIcon:(0,ba.jsx)(Bt,{size:14}),onLabelChange:w=>c({label:w,title:w}),trailing:(0,ba.jsx)(pm,{status:K_(l)})}),children:[f==="result"&&(0,ba.jsx)(tI,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:u,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:p,onDownload:h}),f==="rendering"&&(0,ba.jsx)("div",{className:"wf-material-node__media",children:(0,ba.jsx)(Ku,{status:"generating",loadingAspectRatio:"video",children:null})}),f==="error"&&(0,ba.jsx)("div",{className:"wf-material-node__media",children:(0,ba.jsx)(Ku,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:p,children:null})}),f==="launcher"&&(0,ba.jsx)(W_,{mainIcon:(0,ba.jsx)(Bt,{size:36,strokeWidth:1.5}),secondaryIcon:(0,ba.jsx)(Kt,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:Ui,onClick:()=>p()}]})]})},sI={type:"video_composition",component:(0,ei.memo)(G9),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>V9(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var hI=N(J(),1),xI=N(Dt(),1);var ym=N(J(),1),dI=N(Dt(),1);var ze=N(X(),1),B0=e=>e==="text"?(0,ze.jsx)(Yn,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,ze.jsx)(Nu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,ze.jsx)(Pu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,ze.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),uI=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=ia(),[i,l]=(0,ym.useState)(null);(0,ym.useEffect)(()=>{if(o===null){l(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,ze.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,ze.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,ze.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,ze.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,ze.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,ze.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,ze.jsx)(Iu,{size:14})}),B0(u.type),(0,ze.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,ze.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,ze.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,ze.jsx)(yu,{size:15}):(0,ze.jsx)(vu,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,ze.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,h=72,g=window.innerHeight-c.bottom<h+10?c.top-h-4:c.bottom+4,b=Math.max(8,c.right-p);l({top:g,left:b}),n(d)}},children:(0,ze.jsx)(Gr,{size:15})})]})]},u.id))}),(0,ze.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,ze.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,ze.jsx)(We,{size:14}),(0,ze.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&i&&typeof document<"u"&&(0,dI.createPortal)((0,ze.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,ze.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,ze.jsx)(ln,{size:13}),(0,ze.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,ze.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,ze.jsx)(Ja,{size:13}),(0,ze.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var ea=N(X(),1),X9=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],cI=()=>{let{document:e,setFilterConditions:t}=ia(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((l,s)=>({value:s,label:l.title||`\u5217 ${s+1}`})),n=(l,s)=>{let u=a.map((d,f)=>f===l?{...d,...s}:d);t(u)},r=()=>{let l=[...a,{columnIndex:0,op:"equals",value:""}];t(l)},i=l=>{let s=a.filter((u,d)=>d!==l);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,ea.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:l=>l.stopPropagation(),children:[(0,ea.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,ea.jsxs)("div",{className:"wf-filter-body",children:[a.map((l,s)=>(0,ea.jsxs)("div",{className:"wf-filter-row",children:[(0,ea.jsx)("div",{style:{width:130,flexShrink:0},children:(0,ea.jsx)(Ta,{value:l.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ea.jsx)("div",{style:{width:110,flexShrink:0},children:(0,ea.jsx)(Ta,{value:l.op,options:X9,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ea.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:l.value??"",disabled:l.op==="empty"||l.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,ea.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(s),children:(0,ea.jsx)($t,{size:15})})]},s)),(0,ea.jsx)("div",{style:{paddingTop:4},children:(0,ea.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,ea.jsx)(We,{size:14}),(0,ea.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var tr=N(X(),1),j9=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],fI=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=ia(),o=e.rowHeight||"low";return(0,tr.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,tr.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,tr.jsx)("div",{style:{padding:"6px"},children:j9.map(n=>{let r=o===n.id;return(0,tr.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,tr.jsx)("span",{children:n.label}),r&&(0,tr.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,tr.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var Ae=N(X(),1),pI=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:l,closeStage:s}=ia(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,Ae.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,Ae.jsx)("div",{className:"wf-stage-topbar__left",children:(0,Ae.jsxs)("div",{className:"wf-stage-title-group",children:[(0,Ae.jsx)(Qa,{size:16,className:"wf-stage-title-icon"}),(0,Ae.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,Ae.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,Ae.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ae.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,Ae.jsx)(Fu,{size:15}),(0,Ae.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,Ae.jsx)(uI,{})]}),(0,Ae.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ae.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,Ae.jsx)(Xr,{size:15}),(0,Ae.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,Ae.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,Ae.jsx)(cI,{})]}),(0,Ae.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ae.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,Ae.jsx)(Zr,{size:15}),(0,Ae.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,Ae.jsx)(fI,{})]}),(0,Ae.jsx)("div",{className:"wf-stage-divider"}),(0,Ae.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,Ae.jsx)(Gi,{size:16})}),(0,Ae.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,Ae.jsx)(qi,{size:16})}),(0,Ae.jsx)("div",{className:"wf-stage-divider"}),(0,Ae.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,Ae.jsx)($t,{size:16})})]})]})};var _e=N(X(),1),mI=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=ia(),n=e.columns.filter(l=>l.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,_e.jsx)("div",{className:"wf-grid-container",children:(0,_e.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,_e.jsxs)("table",{className:"wf-grid-table",children:[(0,_e.jsxs)("colgroup",{children:[(0,_e.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(l=>(0,_e.jsx)("col",{style:{width:l.width||220,minWidth:120}},l.id)),(0,_e.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,_e.jsx)("col",{style:{width:"auto"}})]}),(0,_e.jsx)("thead",{children:(0,_e.jsxs)("tr",{children:[(0,_e.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,_e.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(l=>(0,_e.jsx)("th",{className:"wf-grid-th",children:(0,_e.jsxs)("div",{className:"wf-grid-th-content",children:[(0,_e.jsx)("span",{className:"wf-grid-th-icon",children:B0(l.type)}),(0,_e.jsx)("span",{className:"wf-grid-th-title",children:l.title})]})},l.id)),(0,_e.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,_e.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,_e.jsx)(We,{size:15})})}),(0,_e.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,_e.jsx)("tbody",{children:e.rows.map((l,s)=>(0,_e.jsxs)("tr",{className:i,children:[(0,_e.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,_e.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=l.cells[d];return(0,_e.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let h=Array.isArray(f)?f:[];return(0,_e.jsxs)("div",{className:"wf-grid-cell-attachment",children:[h.map((w,v)=>(0,_e.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},v)),h.length===0&&(0,_e.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,_e.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:h=>t(s,d,h.target.value)})})()},u.id)}),(0,_e.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,_e.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,_e.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,_e.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,_e.jsx)(We,{size:14}),(0,_e.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var rl=N(J(),1);var Pa=N(X(),1),Y9=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],gI=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=ia(),[n,r]=(0,rl.useState)(e.initialTitle),[i,l]=(0,rl.useState)(e.initialType),s=(0,rl.useRef)(null);(0,rl.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),l(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,Pa.jsx)(Yi,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,Pa.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,Pa.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,Pa.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,Pa.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,Pa.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,Pa.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,Pa.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,Pa.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,Pa.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,Pa.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,Pa.jsx)(Ta,{value:i,options:Y9,onChange:d=>l(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var As=N(X(),1),bI=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=ia();return(0,hI.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,xI.createPortal)((0,As.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,As.jsx)(pI,{}),(0,As.jsx)(mI,{}),(0,As.jsx)(gI,{})]}),document.body)};var xt=N(X(),1),H0=class extends Xe.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,xt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,xt.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,xt.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,xt.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};cm(V_);cm(j_);cm(sI);var Z9=V5(),W9={default:g0,animated:g0},wI={maxZoom:1},K9={x:0,y:0,zoom:1},$9=[1,2],Q9=96,J9=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:i})=>{let{screenToFlowPosition:l,fitView:s,zoomTo:u}=Wa(),{nodes:d,edges:f,onNodesChange:c,onEdgesChange:p}=Nk(),h=de(Q=>Q.applyCanvasInputMutation),w=de(Q=>Q.setNodes),v=de(Q=>Q.setSelectedElement),g=de(Q=>Q.pushHistory),b=de(Q=>Q.undo),m=de(Q=>Q.redo),x=Ek(),S=Tk(),[y,C]=(0,Xe.useState)(null),[L,_]=(0,Xe.useState)(!1),[T,A]=(0,Xe.useState)(!1),[H,F]=(0,Xe.useState)(!1),[k,M]=(0,Xe.useState)(!1),[R,I]=(0,Xe.useState)(void 0),[z,B]=(0,Xe.useState)("select"),P=(0,Xe.useRef)(0),D=(0,Xe.useMemo)(()=>d.some(Q=>Q.selected),[d]),E=U5(w,v),U=fe(),Y=U("menu.generateFromNode"),{menuState:Z,onConnectStart:K,onConnectEnd:$,onMenuSelect:V,onMenuClose:W}=O5({onReject:C});(0,Xe.useEffect)(()=>{g()},[d,f,g]);let se=(0,Xe.useMemo)(()=>e?d.map(Q=>({...Q,data:{...Q.data,__catalog:e}})):d,[d,e]),pe=(0,Xe.useCallback)(Q=>{let Oe=h({addEdges:[Q]});if(Oe.status==="rejected"){let tt=U(im(Oe.reasonCode));C(tt),ne.warning(tt)}else C(null)},[h,U]),ae=(0,Xe.useCallback)(Q=>{let Oe=de.getState();return E5(Q,Oe.nodes,Oe.edges)},[]),ie=(0,Xe.useCallback)((Q,Oe)=>{let tt=P.current,ct=Oe??{x:120+tt%3*420,y:120+Math.floor(tt/3)*360};if(Q==="table"||Q==="video_composition"){let hn=G5(Q,ct,`node_${Q}_${Date.now()}`);if(!hn)return;P.current+=1,w(or=>L0(or,[{...hn,selected:!0}]));return}let ar=Qr(Q,ct);ar.nodes.length!==0&&(P.current+=1,w(hn=>L0(hn,ar.nodes)))},[w]),ve=(0,Xe.useCallback)(Q=>{let Oe=Q.nodes.map(ct=>ct.id),tt=Q.edges.map(ct=>ct.id);Oe.length===0&&tt.length===0||h({removeNodeIds:Oe,removeEdgeIds:tt})},[h]),{menu:ye,handleNodeContextMenu:je,handlePaneContextMenu:ee,handleSelectionContextMenu:Ee,closeMenu:Pe,handleMenuAction:Mt,handleAddNodeFromMenu:va}=q5({screenToFlowPosition:l,setNodes:w,copySelectedNodes:E.copySelectedNodes,pasteNodes:E.pasteNodes,duplicateSelectedNodes:E.duplicateSelectedNodes,deleteSelectedNodes:E.deleteSelectedNodes,selectAllNodes:E.selectAllNodes,clearSelection:E.clearSelection,undo:b,redo:m,onExecuteNodeIds:t,onAddNode:ie}),Yo=(0,Xe.useCallback)(Q=>{let Oe=Q.real_path||Q.files?.[0]?.path||"",tt=Q.type==="video"?"video":Q.type==="image"?"image":"text",ct=P.current++,ar={x:200+ct%4*50,y:200+ct%4*40},or=Qr(tt,ar,{title:Q.name,content:Oe,previewUrl:Q.previewUrl,status:"ready"}).nodes[0];or&&(h({addNodes:[or]}),v("node",or.id),ne.success(U("toolbar.assets")+": "+Q.name))},[h,v,U]);N5({onCopy:E.copySelectedNodes,onPaste:()=>E.pasteNodes(),onSelectAll:E.selectAllNodes,onDeleteSelected:E.deleteSelectedNodes,onClearSelection:E.clearSelection,onDuplicate:E.duplicateSelectedNodes,onUndo:b,onRedo:m,hasSelection:D,onToggleAssets:()=>A(Q=>!Q),onToggleShortcuts:()=>F(Q=>!Q),onToggleMinimap:()=>_(Q=>!Q),onToggleAddMenu:()=>M(Q=>!Q),onSetPointerMode:Q=>B(Q),onFitView:()=>s(wI),onResetZoom:()=>u(1),onCategoryKey:Q=>{A(!0),I(Q)}});let mn=(0,Xe.useCallback)((Q,Oe)=>{v("node",Oe.id)},[v]),gn=(0,Xe.useCallback)(()=>{v("none",null),Pe()},[v,Pe]),Oa=(0,Xe.useCallback)(()=>{w(Q=>Q.map((Oe,tt)=>({...Oe,position:{x:120+tt%3*440,y:120+Math.floor(tt/3)*360}})))},[w]),Lo=(0,Xe.useCallback)(Q=>{Q.preventDefault(),Q.dataTransfer.dropEffect="copy"},[]),ko=(0,Xe.useCallback)(Q=>{Q.preventDefault();try{let Oe=Q.dataTransfer.getData("application/json");if(!Oe)return;let tt=JSON.parse(Oe);if(tt.type==="omnimux-asset"&&tt.asset){let ct=tt.asset,ar=l({x:Q.clientX,y:Q.clientY}),hn=ct.type==="video"?"video":ct.type==="image"?"image":"text",Ps=Qr(hn,ar,{title:ct.name,content:ct.real_path||ct.prompt||"",previewUrl:ct.previewUrl,status:"ready"}).nodes[0];Ps&&(h({addNodes:[Ps]}),v("node",Ps.id),ne.success(`\u5DF2\u6302\u8F7D\u7D20\u6750\u5230\u753B\u5E03: ${ct.name}`))}}catch(Oe){console.error("Failed to parse dropped asset",Oe)}},[l,h,v]);return(0,xt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,xt.jsx)(XL,{nodes:se,edges:f,onNodesChange:c,onEdgesChange:p,onConnect:pe,isValidConnection:ae,onConnectStart:K,onConnectEnd:$,onNodeClick:mn,onPaneClick:gn,onNodeContextMenu:je,onPaneContextMenu:ee,onDragOver:Lo,onDrop:ko,onSelectionContextMenu:Ee,onDelete:ve,nodeTypes:Z9,edgeTypes:W9,fitView:!0,fitViewOptions:wI,defaultViewport:K9,minZoom:C0.minZoom,maxZoom:C0.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:z==="pan"?!0:$9,panOnScroll:!0,panOnScrollMode:Ao.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:z==="select",selectionMode:Un.Partial,defaultEdgeOptions:Fp,connectOnClick:!1,connectionRadius:Q9,onlyRenderVisibleElements:!0,children:(0,xt.jsx)(WL,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:on.Dots})}),(0,xt.jsx)(Zk,{isMinimapOpen:L,onToggleMinimap:()=>_(Q=>!Q),onAlignGrid:Oa,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:i}),L&&(0,xt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,xt.jsx)(QL,{pannable:!0,zoomable:!0})}),(0,xt.jsx)(Yk,{onAddNode:ie,onUndo:b,onRedo:m,canUndo:x,canRedo:S,pointerMode:z,onPointerModeChange:B,onOpenAssets:()=>A(Q=>!Q),onOpenHelp:()=>F(Q=>!Q),isAssetsOpen:T,isAddMenuOpen:k,onToggleAddMenu:()=>M(Q=>!Q)}),T&&(0,xt.jsx)(H0,{onClose:()=>A(!1),children:(0,xt.jsx)(y5,{isOpen:T,onClose:()=>A(!1),onInsertAsset:Yo,nodes:se,onFocusNode:Q=>{let Oe=se.find(tt=>tt.id===Q);Oe&&(setCenter(Oe.position.x+100,Oe.position.y+100,{zoom:1,duration:800}),w(tt=>tt.map(ct=>({...ct,selected:ct.id===Q}))))}})}),(0,xt.jsx)(C5,{isOpen:H,onClose:()=>F(!1)}),(0,xt.jsx)(I5,{x:ye.x,y:ye.y,visible:ye.visible,context:ye.context,onClose:Pe,onAction:Mt,onAddNode:va,canUndo:x,canRedo:S,hasClipboard:E.hasClipboard,hasSelection:D}),(0,xt.jsx)(rm,{visible:Z.visible,x:Z.x,y:Z.y,title:Y,options:Z.options,onSelect:V,onClose:W}),(0,xt.jsx)(bI,{}),y&&(0,xt.jsx)("div",{className:"wf-rejected-toast",children:y})]})},eP=e=>(0,xt.jsx)(i0,{children:(0,xt.jsx)(J9,{...e})}),vI=eP;var It=N(J(),1);var yI=new Set(["pending","running","paused"]),tP=new Set(["completed","error","cancelled"]);function Ds(e,t){let a=de.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function CI(e,t){let a=(0,It.useRef)(null),o=(0,It.useRef)(e);o.current=e;let n=(0,It.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,It.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,It.useCallback)((v,g)=>{$e.getState().setExecution({status:v,error:g,progress:{...$e.getState().progress,percentage:v==="completed"?100:$e.getState().progress.percentage}})},[]),l=(0,It.useCallback)((v,g)=>{let b;try{b=JSON.parse(g)}catch{return}let m=$e.getState();switch(v){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:b.totalNodes??0,completed:0,running:0,pending:b.totalNodes??0,percentage:0}});break}case"node_start":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),Ds(b.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:b.progress??m.progress.percentage}});let x=b.output??{},S={executionStatus:"completed",executionError:void 0};if(x.text&&(S.generatedContent=x.text),x.mediaAssets&&x.mediaAssets.length>0){let y=x.mediaAssets[0];S.mediaAssets=x.mediaAssets,y.type==="image"&&(S.mediaUrl=y.url),S.taskId=`exec-${b.executionId??""}`}Ds(b.nodeId,S);break}case"node_error":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),Ds(b.nodeId,{executionStatus:"error",executionError:b.error??Wi("error.nodeExecutionFailed")});break}case"node_skipped":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"skipped"),Ds(b.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",b.error??Wi("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),s=(0,It.useCallback)(v=>{r();let g=o.current;if(!g)return;let b=new EventSource(Aa.executionEvents(encodeURIComponent(g),encodeURIComponent(v)));a.current=b;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let x of m)b.addEventListener(x,S=>{l(x,S.data)});b.onerror=()=>{let x=$e.getState().status;tP.has(x)&&r()}},[r,l]),u=(0,It.useCallback)(v=>{let g=$e.getState();g.setExecution({executionId:v.id,status:v.status,error:v.error,progress:{total:v.progress.total,completed:v.progress.completed,running:v.progress.running,pending:v.progress.pending,percentage:v.progress.percentage}});for(let[b,m]of Object.entries(v.nodeStates??{})){g.setNodeStatus(b,m.status);let x={executionStatus:m.status};m.status==="error"&&m.error&&(x.executionError=m.error);let S=v.nodeOutputs?.[b];S&&(S.text&&(x.generatedContent=S.text),S.mediaAssets&&S.mediaAssets.length>0&&(x.mediaAssets=S.mediaAssets,S.mediaAssets[0]&&S.mediaAssets[0].type==="image"&&(x.mediaUrl=S.mediaAssets[0].url))),Ds(b,x)}},[]),d=(0,It.useCallback)(async(v={})=>{let g=o.current;if(!g)return;if(r(),$e.getState().resetExecution(),$e.getState().setExecution({status:"pending"}),v.mode==="single"&&v.nodeIds&&v.nodeIds[0]&&($e.getState().setNodeStatus(v.nodeIds[0],"pending"),Ds(v.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let b=await z_(g,{mode:v.mode??"full",nodeIds:v.nodeIds});if(!b.ok||!b.body.execution){$e.getState().setExecution({status:"error",error:b.body.message??Wi("error.createExecutionFailed")});return}$e.getState().setExecution({executionId:b.body.execution.id}),s(b.body.execution.id)},[r,s]),f=(0,It.useCallback)(async v=>{let g=o.current,{executionId:b}=$e.getState();if(!g||!b)return;let m=await H_(g,b,v);!m.ok&&m.body.message&&$e.getState().setExecution({error:m.body.message})},[]),c=(0,It.useCallback)(()=>f("pause"),[f]),p=(0,It.useCallback)(()=>f("resume"),[f]),h=(0,It.useCallback)(()=>f("cancel"),[f]),w=(0,It.useCallback)(()=>{r(),$e.getState().resetExecution()},[r]);return(0,It.useEffect)(()=>{if(!e)return;let v=!1;return(async()=>{try{let g=await P_(e);if(v||!g.ok)return;let b=(g.body.executions??[]).find(x=>yI.has(x.status));if(!b)return;let m=await O_(e,b.id);if(v||!m.ok||!m.body.execution)return;u(m.body.execution),yI.has(m.body.execution.status)&&s(b.id)}catch{}})(),()=>{v=!0}},[e,u,s]),(0,It.useEffect)(()=>($e.getState().setStartNodeExecution(g=>{d({mode:"single",nodeIds:[g]})}),()=>{$e.getState().setStartNodeExecution(null)}),[d]),(0,It.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:h,reset:w}}var il=N(J(),1);function SI(e={}){let t=e.workspaceId,[a,o]=(0,il.useState)({phase:"loading"}),[n,r]=(0,il.useState)(()=>Qu()),i=de(d=>d.hydrateGraph),l=de(d=>d.resetStore),s=de(d=>d.nodes.length),u=(0,il.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,il.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=de.getState(),p=b_(c.nodes);if(p.length===0)return;let h=await B_(p);if(d||!h.ok||!Array.isArray(h.body.items))return;let w=x_(c.nodes,h.body.items);!w.some((g,b)=>g!==c.nodes[b])||d||c.setNodes(w)}return(async()=>{try{if(T_().then(h=>{!d&&h.ok&&(r(h.body),c_(h.body))}),!t)return;let c=await ec(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await A_("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??Wi("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),l()}},[t,i,l]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var et=N(J(),1);function LI(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}function oc(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function kI(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function F0(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)F0(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];hm(o)?delete t[a]:o&&typeof o=="object"&&F0(o)}}function aP(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=Qn(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=kI(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(hm(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=kI(o);return n?(hm(n.url)&&(typeof n.path=="string"&&n.path?n.url=Qn(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}F0(e)}function U0(e){return e.map(t=>{let a=t,o=oc(a.data);delete o.__catalog,aP(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=oc(a.style)),n})}function oP(e){let t=e,a=oc(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function q0(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=oc(a.data)),a.style&&typeof a.style=="object"&&(o.style=oc(a.style)),o})}function jo(e,t){return JSON.stringify({nodes:U0(e).map(oP),edges:q0(t)})}var nP=1e3,rP=2500,iP=3e3;function Rs(){let{nodes:e,edges:t}=de.getState(),a=c0(e,t);return{nodes:a.nodes,edges:a.edges}}function _I(e,t={}){let a=t.enabled!==!1,[o,n]=(0,et.useState)("idle"),[r,i]=(0,et.useState)(!1),l=(0,et.useRef)(e),s=(0,et.useRef)(0),u=(0,et.useRef)(""),d=(0,et.useRef)(0),f=(0,et.useRef)(""),c=(0,et.useRef)(null),p=(0,et.useRef)(null),h=(0,et.useRef)(!1),w=(0,et.useRef)(a);w.current=a;let v=(0,et.useRef)(t.onSaved);v.current=t.onSaved,(0,et.useEffect)(()=>{l.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=jo(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let g=()=>{p.current&&(clearTimeout(p.current),p.current=null)},b=(0,et.useCallback)(async L=>{let _=l.current;if(!_){n("error");return}let T=await ec(_.id);if(!T.ok||!T.body.workspace){n("error");return}let A=T.body.workspace,H=LI({localSignature:jo(L.localNodes,L.localEdges),lastSavedSignature:u.current,remoteSignature:jo(A.nodes,A.edges)});if(s.current=A.version,H==="conflict"){n("conflict");return}u.current=jo(A.nodes,A.edges),d.current=A.nodes.length,H==="reload"&&de.getState().hydrateGraph(A.nodes,A.edges),i(!1),n("idle"),v.current?.(A)},[]),m=(0,et.useCallback)(async(L,_,T=!1)=>{let A=l.current;if(!A||!T&&!w.current||h.current)return;let H=Zp({lastSavedNodeCount:d.current,nextNodes:L.nodes,nextEdges:L.edges,cause:_,lastSavedSignature:u.current,nextSignature:jo(L.nodes,L.edges)});if(!H.persist||!H.snapshot)return;let{nodes:F,edges:k}=H.snapshot,M=A.name;h.current=!0,n("saving");try{let R=await R_(A.id,{name:M,nodes:U0(F),edges:q0(k),expectedVersion:s.current});if(R.status===409){await b({localNodes:F,localEdges:k});return}R.ok&&R.body.workspace?(s.current=R.body.workspace.version,u.current=jo(F,k),d.current=F.length,i(!1),n("saved"),g(),p.current=setTimeout(()=>{n(I=>I==="saved"?"idle":I)},rP),v.current?.(R.body.workspace)):n("error")}catch{n("error")}finally{h.current=!1}},[b]);(0,et.useEffect)(()=>{if(!a)return;let L=(T="autosave")=>{if(!l.current||!w.current)return;let H=Rs(),k=jo(H.nodes,H.edges)!==u.current;if(i(k),!k){c.current&&(clearTimeout(c.current),c.current=null),n(z=>z==="pending"?"idle":z);return}let M=ju(H.nodes.length,T);if(!u0({lastSavedNodeCount:d.current,nextNodeCount:H.nodes.length,cause:M})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(z=>z==="pending"?"idle":z);return}n(z=>z==="saving"||z==="conflict"?z:"pending"),c.current&&clearTimeout(c.current);let R={nodes:H.nodes,edges:H.edges},I=M;c.current=setTimeout(()=>{c.current=null,m(R,I)},nP)},_=de.subscribe(()=>{L("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,et.useEffect)(()=>{if(!a)return;let L=()=>{if(!w.current||!l.current)return;let T=Rs(),A=ju(T.nodes.length,"flush"),H=Zp({lastSavedNodeCount:d.current,nextNodes:T.nodes,nextEdges:T.edges,cause:A,lastSavedSignature:u.current,nextSignature:jo(T.nodes,T.edges)});!H.persist||!H.snapshot||m(H.snapshot,A)};return window.addEventListener("pagehide",L),()=>{window.removeEventListener("pagehide",L),L(),g()}},[m,a]);let x=(0,et.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let L=Rs();await m(L,ju(L.nodes.length,"autosave"))},[m]),S=(0,et.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!l.current)return;let _=Rs(),T="flush",A=Zp({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:T,lastSavedSignature:u.current,nextSignature:jo(_.nodes,_.edges)});!A.persist||!A.snapshot||m(A.snapshot,T,!0)},[m]),y=(0,et.useCallback)(async()=>{let L=Rs();await m(L,ju(L.nodes.length,"autosave"))},[m]),C=(0,et.useCallback)(async()=>{let L=l.current;if(!L)return;let _=await ec(L.id);if(!_.ok||!_.body.workspace){n("error");return}let T=_.body.workspace;s.current=T.version,u.current=jo(T.nodes,T.edges),d.current=T.nodes.length,de.getState().hydrateGraph(T.nodes,T.edges),i(!1),n("idle"),v.current?.(T)},[]);return(0,et.useEffect)(()=>{if(!a)return;let L=!1,_=async()=>{if(L||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let A=l.current;if(!(!A||h.current)){L=!0;try{let H=await D_(A.id);if(!H.ok||typeof H.body.version!="number"||H.body.version<=s.current)return;let F=Rs();await b({localNodes:F.nodes,localEdges:F.edges})}catch{}finally{L=!1}}},T=setInterval(()=>{_()},iP);return()=>clearInterval(T)},[a,b]),{status:o,isDirty:r,saveNow:x,flushPendingSave:S,resolveConflict:y,reloadFromServer:C}}var wa=N(X(),1),lP=({locale:e,workspaceId:t})=>{let a=fe(),o=(0,zs.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=SI({workspaceId:t,beforeReset:()=>{o.current()}});(0,zs.useEffect)(()=>{Gk(e)},[e]);let l=n.phase==="ready"?n.workspace:null,s=(0,zs.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=_I(l,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=CI(l?l.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,wa.jsx)("div",{className:"wf-canvas-root",children:(0,wa.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,wa.jsx)("div",{className:"wf-canvas-root",children:(0,wa.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,wa.jsx)("span",{children:n.message}),(0,wa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,wa.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,wa.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,wa.jsx)("span",{children:a("app.conflictBanner")}),(0,wa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,wa.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,wa.jsx)("main",{className:"wf-canvas-main",children:(0,wa.jsx)(vI,{catalog:i,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},V0=lP;var II=`/* this gets exported as style.css and can be used for the default theming */
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
`;var MI=`/**
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

`;var NI=`/**
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




`;var EI=`/**
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
`;var fP=[{id:"omnimux-workflow-xyflow-base",css:II},{id:"omnimux-workflow-theme",css:MI},{id:"omnimux-workflow-components",css:NI},{id:"omnimux-workflow-table-node",css:EI}];function TI(){for(let{id:e,css:t}of fP){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var G0=N(X(),1),nc=new WeakMap;function pP(e,t){if(!e||nc.has(e))return;TI();let a=(0,AI.createRoot)(e);nc.set(e,{root:a,lastProps:t}),a.render((0,G0.jsx)(V0,{...t}))}function mP(e,t){let a=nc.get(e);a&&(a.lastProps=t,a.root.render((0,G0.jsx)(V0,{...t})))}function gP(e){let t=nc.get(e);t&&(t.root.unmount(),nc.delete(e))}return OM(hP);})();
