var __omnimuxWorkflowCanvas=(()=>{var PM=Object.create;var sc=Object.defineProperty;var OM=Object.getOwnPropertyDescriptor;var BM=Object.getOwnPropertyNames;var HM=Object.getPrototypeOf,FM=Object.prototype.hasOwnProperty;var ya=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},UM=(e,t)=>{for(var a in t)sc(e,a,{get:t[a],enumerable:!0})},ab=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of BM(t))!FM.call(e,n)&&n!==a&&sc(e,n,{get:()=>t[n],enumerable:!(o=OM(t,n))||o.enumerable});return e};var E=(e,t,a)=>(a=e!=null?PM(HM(e)):{},ab(t||!e||!e.__esModule?sc(a,"default",{value:e,enumerable:!0}):a,e)),qM=e=>ab(sc({},"__esModule",{value:!0}),e);var fb=ya(it=>{"use strict";function Em(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<dc(n,t))e[o]=t,e[a]=n,a=o;else break e}}function Ko(e){return e.length===0?null:e[0]}function cc(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,l=e[i],s=i+1,u=e[s];if(0>dc(l,a))s<n&&0>dc(u,l)?(e[o]=u,e[s]=a,o=s):(e[o]=l,e[i]=a,o=i);else if(s<n&&0>dc(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function dc(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}it.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(ob=performance,it.unstable_now=function(){return ob.now()}):(Im=Date,nb=Im.now(),it.unstable_now=function(){return Im.now()-nb});var ob,Im,nb,wn=[],ir=[],VM=1,io=null,oa=3,Tm=!1,Hs=!1,Fs=!1,Am=!1,lb=typeof setTimeout=="function"?setTimeout:null,sb=typeof clearTimeout=="function"?clearTimeout:null,rb=typeof setImmediate<"u"?setImmediate:null;function uc(e){for(var t=Ko(ir);t!==null;){if(t.callback===null)cc(ir);else if(t.startTime<=e)cc(ir),t.sortIndex=t.expirationTime,Em(wn,t);else break;t=Ko(ir)}}function Dm(e){if(Fs=!1,uc(e),!Hs)if(Ko(wn)!==null)Hs=!0,ul||(ul=!0,dl());else{var t=Ko(ir);t!==null&&Rm(Dm,t.startTime-e)}}var ul=!1,Us=-1,db=5,ub=-1;function cb(){return Am?!0:!(it.unstable_now()-ub<db)}function Mm(){if(Am=!1,ul){var e=it.unstable_now();ub=e;var t=!0;try{e:{Hs=!1,Fs&&(Fs=!1,sb(Us),Us=-1),Tm=!0;var a=oa;try{t:{for(uc(e),io=Ko(wn);io!==null&&!(io.expirationTime>e&&cb());){var o=io.callback;if(typeof o=="function"){io.callback=null,oa=io.priorityLevel;var n=o(io.expirationTime<=e);if(e=it.unstable_now(),typeof n=="function"){io.callback=n,uc(e),t=!0;break t}io===Ko(wn)&&cc(wn),uc(e)}else cc(wn);io=Ko(wn)}if(io!==null)t=!0;else{var r=Ko(ir);r!==null&&Rm(Dm,r.startTime-e),t=!1}}break e}finally{io=null,oa=a,Tm=!1}t=void 0}}finally{t?dl():ul=!1}}}var dl;typeof rb=="function"?dl=function(){rb(Mm)}:typeof MessageChannel<"u"?(Nm=new MessageChannel,ib=Nm.port2,Nm.port1.onmessage=Mm,dl=function(){ib.postMessage(null)}):dl=function(){lb(Mm,0)};var Nm,ib;function Rm(e,t){Us=lb(function(){e(it.unstable_now())},t)}it.unstable_IdlePriority=5;it.unstable_ImmediatePriority=1;it.unstable_LowPriority=4;it.unstable_NormalPriority=3;it.unstable_Profiling=null;it.unstable_UserBlockingPriority=2;it.unstable_cancelCallback=function(e){e.callback=null};it.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):db=0<e?Math.floor(1e3/e):5};it.unstable_getCurrentPriorityLevel=function(){return oa};it.unstable_next=function(e){switch(oa){case 1:case 2:case 3:var t=3;break;default:t=oa}var a=oa;oa=t;try{return e()}finally{oa=a}};it.unstable_requestPaint=function(){Am=!0};it.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=oa;oa=e;try{return t()}finally{oa=a}};it.unstable_scheduleCallback=function(e,t,a){var o=it.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:VM++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Em(ir,e),Ko(wn)===null&&e===Ko(ir)&&(Fs?(sb(Us),Us=-1):Fs=!0,Rm(Dm,a-o))):(e.sortIndex=n,Em(wn,e),Hs||Tm||(Hs=!0,ul||(ul=!0,dl()))),e};it.unstable_shouldYield=cb;it.unstable_wrapCallback=function(e){var t=oa;return function(){var a=oa;oa=t;try{return e.apply(this,arguments)}finally{oa=a}}}});var mb=ya((_P,pb)=>{"use strict";pb.exports=fb()});var kb=ya(he=>{"use strict";var Om=Symbol.for("react.transitional.element"),GM=Symbol.for("react.portal"),XM=Symbol.for("react.fragment"),jM=Symbol.for("react.strict_mode"),YM=Symbol.for("react.profiler"),ZM=Symbol.for("react.consumer"),WM=Symbol.for("react.context"),KM=Symbol.for("react.forward_ref"),$M=Symbol.for("react.suspense"),QM=Symbol.for("react.memo"),wb=Symbol.for("react.lazy"),JM=Symbol.for("react.activity"),gb=Symbol.iterator;function e3(e){return e===null||typeof e!="object"?null:(e=gb&&e[gb]||e["@@iterator"],typeof e=="function"?e:null)}var vb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yb=Object.assign,Cb={};function fl(e,t,a){this.props=e,this.context=t,this.refs=Cb,this.updater=a||vb}fl.prototype.isReactComponent={};fl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sb(){}Sb.prototype=fl.prototype;function Bm(e,t,a){this.props=e,this.context=t,this.refs=Cb,this.updater=a||vb}var Hm=Bm.prototype=new Sb;Hm.constructor=Bm;yb(Hm,fl.prototype);Hm.isPureReactComponent=!0;var hb=Array.isArray;function Pm(){}var tt={H:null,A:null,T:null,S:null},Lb=Object.prototype.hasOwnProperty;function Fm(e,t,a){var o=a.ref;return{$$typeof:Om,type:e,key:t,ref:o!==void 0?o:null,props:a}}function t3(e,t){return Fm(e.type,t,e.props)}function Um(e){return typeof e=="object"&&e!==null&&e.$$typeof===Om}function a3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var xb=/\/+/g;function zm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?a3(""+e.key):t.toString(36)}function o3(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Pm,Pm):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function cl(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Om:case GM:i=!0;break;case wb:return i=e._init,cl(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+zm(e,0):o,hb(n)?(a="",i!=null&&(a=i.replace(xb,"$&/")+"/"),cl(n,t,a,"",function(u){return u})):n!=null&&(Um(n)&&(n=t3(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(xb,"$&/")+"/")+i)),t.push(n)),1;i=0;var l=o===""?".":o+":";if(hb(e))for(var s=0;s<e.length;s++)o=e[s],r=l+zm(o,s),i+=cl(o,t,a,r,n);else if(s=e3(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=l+zm(o,s++),i+=cl(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return cl(o3(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function fc(e,t,a){if(e==null)return e;var o=[],n=0;return cl(e,o,"","",function(r){return t.call(a,r,n++)}),o}function n3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bb=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},r3={map:fc,forEach:function(e,t,a){fc(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return fc(e,function(){t++}),t},toArray:function(e){return fc(e,function(t){return t})||[]},only:function(e){if(!Um(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Activity=JM;he.Children=r3;he.Component=fl;he.Fragment=XM;he.Profiler=YM;he.PureComponent=Bm;he.StrictMode=jM;he.Suspense=$M;he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return tt.H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cacheSignal=function(){return null};he.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=yb({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!Lb.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),l=0;l<r;l++)i[l]=arguments[l+2];o.children=i}return Fm(e.type,n,o)};he.createContext=function(e){return e={$$typeof:WM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ZM,_context:e},e};he.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)Lb.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return Fm(e,r,n)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:KM,render:e}};he.isValidElement=Um;he.lazy=function(e){return{$$typeof:wb,_payload:{_status:-1,_result:e},_init:n3}};he.memo=function(e,t){return{$$typeof:QM,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=tt.T,a={};tt.T=a;try{var o=e(),n=tt.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Pm,bb)}catch(r){bb(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),tt.T=t}};he.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()};he.use=function(e){return tt.H.use(e)};he.useActionState=function(e,t,a){return tt.H.useActionState(e,t,a)};he.useCallback=function(e,t){return tt.H.useCallback(e,t)};he.useContext=function(e){return tt.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e,t){return tt.H.useDeferredValue(e,t)};he.useEffect=function(e,t){return tt.H.useEffect(e,t)};he.useEffectEvent=function(e){return tt.H.useEffectEvent(e)};he.useId=function(){return tt.H.useId()};he.useImperativeHandle=function(e,t,a){return tt.H.useImperativeHandle(e,t,a)};he.useInsertionEffect=function(e,t){return tt.H.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return tt.H.useLayoutEffect(e,t)};he.useMemo=function(e,t){return tt.H.useMemo(e,t)};he.useOptimistic=function(e,t){return tt.H.useOptimistic(e,t)};he.useReducer=function(e,t,a){return tt.H.useReducer(e,t,a)};he.useRef=function(e){return tt.H.useRef(e)};he.useState=function(e){return tt.H.useState(e)};he.useSyncExternalStore=function(e,t,a){return tt.H.useSyncExternalStore(e,t,a)};he.useTransition=function(){return tt.H.useTransition()};he.version="19.2.8"});var Q=ya((MP,_b)=>{"use strict";_b.exports=kb()});var Mb=ya(da=>{"use strict";var i3=Q();function Ib(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function lr(){}var sa={d:{f:lr,r:function(){throw Error(Ib(522))},D:lr,C:lr,L:lr,m:lr,X:lr,S:lr,M:lr},p:0,findDOMNode:null},l3=Symbol.for("react.portal");function s3(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l3,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var qs=i3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}da.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sa;da.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ib(299));return s3(e,t,null,a)};da.flushSync=function(e){var t=qs.T,a=sa.p;try{if(qs.T=null,sa.p=2,e)return e()}finally{qs.T=t,sa.p=a,sa.d.f()}};da.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,sa.d.C(e,t))};da.prefetchDNS=function(e){typeof e=="string"&&sa.d.D(e)};da.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=pc(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?sa.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&sa.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};da.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=pc(t.as,t.crossOrigin);sa.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&sa.d.M(e)};da.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=pc(a,t.crossOrigin);sa.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};da.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=pc(t.as,t.crossOrigin);sa.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else sa.d.m(e)};da.requestFormReset=function(e){sa.d.r(e)};da.unstable_batchedUpdates=function(e,t){return e(t)};da.useFormState=function(e,t,a){return qs.H.useFormState(e,t,a)};da.useFormStatus=function(){return qs.H.useHostTransitionStatus()};da.version="19.2.8"});var Dt=ya((EP,Eb)=>{"use strict";function Nb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nb)}catch(e){console.error(e)}}Nb(),Eb.exports=Mb()});var q1=ya(Hf=>{"use strict";var Et=mb(),av=Q(),d3=Dt();function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ov(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Md(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function nv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tb(e){if(Md(e)!==e)throw Error(Y(188))}function u3(e){var t=e.alternate;if(!t){if(t=Md(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Tb(n),e;if(r===o)return Tb(n),t;r=r.sibling}throw Error(Y(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,l=n.child;l;){if(l===a){i=!0,a=n,o=r;break}if(l===o){i=!0,o=n,a=r;break}l=l.sibling}if(!i){for(l=r.child;l;){if(l===a){i=!0,a=r,o=n;break}if(l===o){i=!0,o=r,a=n;break}l=l.sibling}if(!i)throw Error(Y(189))}}if(a.alternate!==o)throw Error(Y(190))}if(a.tag!==3)throw Error(Y(188));return a.stateNode.current===a?e:t}function iv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=iv(e),t!==null)return t;e=e.sibling}return null}var nt=Object.assign,c3=Symbol.for("react.element"),mc=Symbol.for("react.transitional.element"),Ks=Symbol.for("react.portal"),bl=Symbol.for("react.fragment"),lv=Symbol.for("react.strict_mode"),yg=Symbol.for("react.profiler"),sv=Symbol.for("react.consumer"),In=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),Cg=Symbol.for("react.suspense"),Sg=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),Lg=Symbol.for("react.activity"),f3=Symbol.for("react.memo_cache_sentinel"),Ab=Symbol.iterator;function Vs(e){return e===null||typeof e!="object"?null:(e=Ab&&e[Ab]||e["@@iterator"],typeof e=="function"?e:null)}var p3=Symbol.for("react.client.reference");function kg(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===p3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bl:return"Fragment";case yg:return"Profiler";case lv:return"StrictMode";case Cg:return"Suspense";case Sg:return"SuspenseList";case Lg:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ks:return"Portal";case In:return e.displayName||"Context";case sv:return(e._context.displayName||"Context")+".Consumer";case hh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xh:return t=e.displayName||null,t!==null?t:kg(e.type)||"Memo";case sr:t=e._payload,e=e._init;try{return kg(e(t))}catch{}}return null}var $s=Array.isArray,fe=av.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ze=d3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,si={pending:!1,data:null,method:null,action:null},_g=[],wl=-1;function tn(e){return{current:e}}function Pt(e){0>wl||(e.current=_g[wl],_g[wl]=null,wl--)}function We(e,t){wl++,_g[wl]=e.current,e.current=t}var en=tn(null),md=tn(null),wr=tn(null),Yc=tn(null);function Zc(e,t){switch(We(wr,t),We(md,e),We(en,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hw(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hw(t),e=M1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Pt(en),We(en,e)}function Ol(){Pt(en),Pt(md),Pt(wr)}function Ig(e){e.memoizedState!==null&&We(Yc,e);var t=en.current,a=M1(t,e.type);t!==a&&(We(md,e),We(en,a))}function Wc(e){md.current===e&&(Pt(en),Pt(md)),Yc.current===e&&(Pt(Yc),kd._currentValue=si)}var qm,Db;function ni(e){if(qm===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);qm=t&&t[1]||"",Db=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qm+e+Db}var Vm=!1;function Gm(e,t){if(!e||Vm)return"";Vm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],l=r[1];if(i&&l){var s=i.split(`
`),u=l.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{Vm=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ni(a):""}function m3(e,t){switch(e.tag){case 26:case 27:case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return e.child!==t&&t!==null?ni("Suspense Fallback"):ni("Suspense");case 19:return ni("SuspenseList");case 0:case 15:return Gm(e.type,!1);case 11:return Gm(e.type.render,!1);case 1:return Gm(e.type,!0);case 31:return ni("Activity");default:return""}}function Rb(e){try{var t="",a=null;do t+=m3(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Mg=Object.prototype.hasOwnProperty,bh=Et.unstable_scheduleCallback,Xm=Et.unstable_cancelCallback,g3=Et.unstable_shouldYield,h3=Et.unstable_requestPaint,Va=Et.unstable_now,x3=Et.unstable_getCurrentPriorityLevel,dv=Et.unstable_ImmediatePriority,uv=Et.unstable_UserBlockingPriority,Kc=Et.unstable_NormalPriority,b3=Et.unstable_LowPriority,cv=Et.unstable_IdlePriority,w3=Et.log,v3=Et.unstable_setDisableYieldValue,Nd=null,Ga=null;function mr(e){if(typeof w3=="function"&&v3(e),Ga&&typeof Ga.setStrictMode=="function")try{Ga.setStrictMode(Nd,e)}catch{}}var Xa=Math.clz32?Math.clz32:S3,y3=Math.log,C3=Math.LN2;function S3(e){return e>>>=0,e===0?32:31-(y3(e)/C3|0)|0}var gc=256,hc=262144,xc=4194304;function ri(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sf(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=o&134217727;return l!==0?(o=l&~r,o!==0?n=ri(o):(i&=l,i!==0?n=ri(i):a||(a=l&~e,a!==0&&(n=ri(a))))):(l=o&~r,l!==0?n=ri(l):i!==0?n=ri(i):a||(a=o&~e,a!==0&&(n=ri(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Ed(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function L3(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fv(){var e=xc;return xc<<=1,(xc&62914560)===0&&(xc=4194304),e}function jm(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Td(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function k3(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-Xa(a),f=1<<d;l[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&pv(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function pv(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Xa(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function mv(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Xa(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function gv(e,t){var a=t&-t;return a=(a&42)!==0?1:wh(a),(a&(e.suspendedLanes|t))!==0?0:a}function wh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hv(){var e=ze.p;return e!==0?e:(e=window.event,e===void 0?32:H1(e.type))}function zb(e,t){var a=ze.p;try{return ze.p=e,t()}finally{ze.p=a}}var Ar=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Ar,Ia="__reactProps$"+Ar,Zl="__reactContainer$"+Ar,Ng="__reactEvents$"+Ar,_3="__reactListeners$"+Ar,I3="__reactHandles$"+Ar,Pb="__reactResources$"+Ar,Ad="__reactMarker$"+Ar;function yh(e){delete e[Xt],delete e[Ia],delete e[Ng],delete e[_3],delete e[I3]}function vl(e){var t=e[Xt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Zl]||a[Xt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Gw(e);e!==null;){if(a=e[Xt])return a;e=Gw(e)}return t}e=a,a=e.parentNode}return null}function Wl(e){if(e=e[Xt]||e[Zl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function El(e){var t=e[Pb];return t||(t=e[Pb]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function zt(e){e[Ad]=!0}var xv=new Set,bv={};function bi(e,t){Bl(e,t),Bl(e+"Capture",t)}function Bl(e,t){for(bv[e]=t,e=0;e<t.length;e++)xv.add(t[e])}var M3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ob={},Bb={};function N3(e){return Mg.call(Bb,e)?!0:Mg.call(Ob,e)?!1:M3.test(e)?Bb[e]=!0:(Ob[e]=!0,!1)}function Ac(e,t,a){if(N3(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bc(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function vn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function so(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E3(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eg(e){if(!e._valueTracker){var t=wv(e)?"checked":"value";e._valueTracker=E3(e,t,""+e[t])}}function vv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=wv(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function $c(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var T3=/[\n"\\]/g;function fo(e){return e.replace(T3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tg(e,t,a,o,n,r,i,l){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+so(t)):e.value!==""+so(t)&&(e.value=""+so(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Ag(e,i,so(t)):a!=null?Ag(e,i,so(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+so(l):e.removeAttribute("name")}function yv(e,t,a,o,n,r,i,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Eg(e);return}a=a!=null?""+so(a):"",t=t!=null?""+so(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=l?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Eg(e)}function Ag(e,t,a){t==="number"&&$c(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Tl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+so(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Cv(e,t,a){if(t!=null&&(t=""+so(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+so(a):""}function Sv(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(Y(92));if($s(o)){if(1<o.length)throw Error(Y(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=so(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Eg(e)}function Hl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var A3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hb(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||A3.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lv(e,t,a){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Hb(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Hb(e,r,t[r])}function Ch(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dc(e){return R3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Mn(){}var Dg=null;function Sh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,Al=null;function Fb(e){var t=Wl(e);if(t&&(e=t.stateNode)){var a=e[Ia]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tg(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fo(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Ia]||null;if(!n)throw Error(Y(90));Tg(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&vv(o)}break e;case"textarea":Cv(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Tl(e,!!a.multiple,t,!1)}}}var Ym=!1;function kv(e,t,a){if(Ym)return e(t,a);Ym=!0;try{var o=e(t);return o}finally{if(Ym=!1,(yl!==null||Al!==null)&&(zf(),yl&&(t=yl,e=Al,Al=yl=null,Fb(t),e)))for(t=0;t<e.length;t++)Fb(e[t])}}function gd(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Ia]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(Y(231,t,typeof a));return a}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rg=!1;if(Dn)try{pl={},Object.defineProperty(pl,"passive",{get:function(){Rg=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{Rg=!1}var pl,gr=null,Lh=null,Rc=null;function _v(){if(Rc)return Rc;var e,t=Lh,a=t.length,o,n="value"in gr?gr.value:gr.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Rc=n.slice(e,1<o?1-o:void 0)}function zc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wc(){return!0}function Ub(){return!1}function Ma(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?wc:Ub,this.isPropagationStopped=Ub,this}return nt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wc)},persist:function(){},isPersistent:wc}),t}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Ma(wi),Dd=nt({},wi,{view:0,detail:0}),z3=Ma(Dd),Zm,Wm,Gs,kf=nt({},Dd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(Zm=e.screenX-Gs.screenX,Wm=e.screenY-Gs.screenY):Wm=Zm=0,Gs=e),Zm)},movementY:function(e){return"movementY"in e?e.movementY:Wm}}),qb=Ma(kf),P3=nt({},kf,{dataTransfer:0}),O3=Ma(P3),B3=nt({},Dd,{relatedTarget:0}),Km=Ma(B3),H3=nt({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),F3=Ma(H3),U3=nt({},wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q3=Ma(U3),V3=nt({},wi,{data:0}),Vb=Ma(V3),G3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j3[e])?!!t[e]:!1}function kh(){return Y3}var Z3=nt({},Dd,{key:function(e){if(e.key){var t=G3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(e){return e.type==="keypress"?zc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W3=Ma(Z3),K3=nt({},kf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gb=Ma(K3),$3=nt({},Dd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),Q3=Ma($3),J3=nt({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),eN=Ma(J3),tN=nt({},kf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aN=Ma(tN),oN=nt({},wi,{newState:0,oldState:0}),nN=Ma(oN),rN=[9,13,27,32],_h=Dn&&"CompositionEvent"in window,td=null;Dn&&"documentMode"in document&&(td=document.documentMode);var iN=Dn&&"TextEvent"in window&&!td,Iv=Dn&&(!_h||td&&8<td&&11>=td),Xb=" ",jb=!1;function Mv(e,t){switch(e){case"keyup":return rN.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cl=!1;function lN(e,t){switch(e){case"compositionend":return Nv(t);case"keypress":return t.which!==32?null:(jb=!0,Xb);case"textInput":return e=t.data,e===Xb&&jb?null:e;default:return null}}function sN(e,t){if(Cl)return e==="compositionend"||!_h&&Mv(e,t)?(e=_v(),Rc=Lh=gr=null,Cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Iv&&t.locale!=="ko"?null:t.data;default:return null}}var dN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dN[e.type]:t==="textarea"}function Ev(e,t,a,o){yl?Al?Al.push(o):Al=[o]:yl=o,t=hf(t,"onChange"),0<t.length&&(a=new Lf("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var ad=null,hd=null;function uN(e){k1(e,0)}function _f(e){var t=Qs(e);if(vv(t))return e}function Zb(e,t){if(e==="change")return t}var Tv=!1;Dn&&(Dn?(yc="oninput"in document,yc||($m=document.createElement("div"),$m.setAttribute("oninput","return;"),yc=typeof $m.oninput=="function"),vc=yc):vc=!1,Tv=vc&&(!document.documentMode||9<document.documentMode));var vc,yc,$m;function Wb(){ad&&(ad.detachEvent("onpropertychange",Av),hd=ad=null)}function Av(e){if(e.propertyName==="value"&&_f(hd)){var t=[];Ev(t,hd,e,Sh(e)),kv(uN,t)}}function cN(e,t,a){e==="focusin"?(Wb(),ad=t,hd=a,ad.attachEvent("onpropertychange",Av)):e==="focusout"&&Wb()}function fN(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _f(hd)}function pN(e,t){if(e==="click")return _f(t)}function mN(e,t){if(e==="input"||e==="change")return _f(t)}function gN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ya=typeof Object.is=="function"?Object.is:gN;function xd(e,t){if(Ya(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Mg.call(t,n)||!Ya(e[n],t[n]))return!1}return!0}function Kb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $b(e,t){var a=Kb(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kb(a)}}function Dv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$c(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$c(e.document)}return t}function Ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hN=Dn&&"documentMode"in document&&11>=document.documentMode,Sl=null,zg=null,od=null,Pg=!1;function Qb(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pg||Sl==null||Sl!==$c(o)||(o=Sl,"selectionStart"in o&&Ih(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),od&&xd(od,o)||(od=o,o=hf(zg,"onSelect"),0<o.length&&(t=new Lf("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Sl)))}function oi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ll={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},Qm={},zv={};Dn&&(zv=document.createElement("div").style,"AnimationEvent"in window||(delete Ll.animationend.animation,delete Ll.animationiteration.animation,delete Ll.animationstart.animation),"TransitionEvent"in window||delete Ll.transitionend.transition);function vi(e){if(Qm[e])return Qm[e];if(!Ll[e])return e;var t=Ll[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zv)return Qm[e]=t[a];return e}var Pv=vi("animationend"),Ov=vi("animationiteration"),Bv=vi("animationstart"),xN=vi("transitionrun"),bN=vi("transitionstart"),wN=vi("transitioncancel"),Hv=vi("transitionend"),Fv=new Map,Og="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Og.push("scrollEnd");function No(e,t){Fv.set(e,t),bi(t,[e])}var Qc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},lo=[],kl=0,Mh=0;function If(){for(var e=kl,t=Mh=kl=0;t<e;){var a=lo[t];lo[t++]=null;var o=lo[t];lo[t++]=null;var n=lo[t];lo[t++]=null;var r=lo[t];if(lo[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&Uv(a,n,r)}}function Mf(e,t,a,o){lo[kl++]=e,lo[kl++]=t,lo[kl++]=a,lo[kl++]=o,Mh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nh(e,t,a,o){return Mf(e,t,a,o),Jc(e)}function yi(e,t){return Mf(e,null,null,t),Jc(e)}function Uv(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Xa(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function Jc(e){if(50<fd)throw fd=0,nh=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _l={};function vN(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ua(e,t,a,o){return new vN(e,t,a,o)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function En(e,t){var a=e.alternate;return a===null?(a=Ua(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qv(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pc(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")Eh(e)&&(i=1);else if(typeof e=="string")i=S4(e,a,en.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Lg:return e=Ua(31,a,t,n),e.elementType=Lg,e.lanes=r,e;case bl:return di(a.children,n,r,t);case lv:i=8,n|=24;break;case yg:return e=Ua(12,a,t,n|2),e.elementType=yg,e.lanes=r,e;case Cg:return e=Ua(13,a,t,n),e.elementType=Cg,e.lanes=r,e;case Sg:return e=Ua(19,a,t,n),e.elementType=Sg,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case In:i=10;break e;case sv:i=9;break e;case hh:i=11;break e;case xh:i=14;break e;case sr:i=16,o=null;break e}i=29,a=Error(Y(130,e===null?"null":typeof e,"")),o=null}return t=Ua(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function di(e,t,a,o){return e=Ua(7,e,o,t),e.lanes=a,e}function Jm(e,t,a){return e=Ua(6,e,null,t),e.lanes=a,e}function Vv(e){var t=Ua(18,null,null,0);return t.stateNode=e,t}function eg(e,t,a){return t=Ua(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jb=new WeakMap;function po(e,t){if(typeof e=="object"&&e!==null){var a=Jb.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Rb(t)},Jb.set(e,t),t)}return{value:e,source:t,stack:Rb(t)}}var Il=[],Ml=0,ef=null,bd=0,uo=[],co=0,Mr=null,$o=1,Qo="";function kn(e,t){Il[Ml++]=bd,Il[Ml++]=ef,ef=e,bd=t}function Gv(e,t,a){uo[co++]=$o,uo[co++]=Qo,uo[co++]=Mr,Mr=e;var o=$o;e=Qo;var n=32-Xa(o)-1;o&=~(1<<n),a+=1;var r=32-Xa(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,$o=1<<32-Xa(t)+n|a<<n|o,Qo=r+e}else $o=1<<r|a<<n|o,Qo=e}function Th(e){e.return!==null&&(kn(e,1),Gv(e,1,0))}function Ah(e){for(;e===ef;)ef=Il[--Ml],Il[Ml]=null,bd=Il[--Ml],Il[Ml]=null;for(;e===Mr;)Mr=uo[--co],uo[co]=null,Qo=uo[--co],uo[co]=null,$o=uo[--co],uo[co]=null}function Xv(e,t){uo[co++]=$o,uo[co++]=Qo,uo[co++]=Mr,$o=t.id,Qo=t.overflow,Mr=e}var jt=null,ot=null,Ne=!1,vr=null,mo=!1,Bg=Error(Y(519));function Nr(e){var t=Error(Y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wd(po(t,e)),Bg}function ew(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Xt]=e,t[Ia]=o,a){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(a=0;a<Sd.length;a++)Se(Sd[a],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),yv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Sv(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||I1(t.textContent,a)?(o.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),o.onScroll!=null&&Se("scroll",t),o.onScrollEnd!=null&&Se("scrollend",t),o.onClick!=null&&(t.onclick=Mn),t=!0):t=!1,t||Nr(e,!0)}function tw(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:mo=!1;return;case 27:case 3:mo=!0;return;default:jt=jt.return}}function ml(e){if(e!==jt)return!1;if(!Ne)return tw(e),Ne=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dh(e.type,e.memoizedProps)),a=!a),a&&ot&&Nr(e),tw(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));ot=Vw(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));ot=Vw(e)}else t===27?(t=ot,Dr(e.type)?(e=ph,ph=null,ot=e):ot=t):ot=jt?ho(e.stateNode.nextSibling):null;return!0}function pi(){ot=jt=null,Ne=!1}function tg(){var e=vr;return e!==null&&(ka===null?ka=e:ka.push.apply(ka,e),vr=null),e}function wd(e){vr===null?vr=[e]:vr.push(e)}var Hg=tn(null),Ci=null,Nn=null;function ur(e,t,a){We(Hg,t._currentValue),t._currentValue=a}function Tn(e){e._currentValue=Hg.current,Pt(Hg)}function Fg(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Ug(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var l=r;r=n;for(var s=0;s<t.length;s++)if(l.context===t[s]){r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Fg(r.return,a,e),o||(i=null);break e}r=l.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(Y(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Fg(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Kl(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(Y(387));if(i=i.memoizedProps,i!==null){var l=n.type;Ya(n.pendingProps.value,i.value)||(e!==null?e.push(l):e=[l])}}else if(n===Yc.current){if(i=n.alternate,i===null)throw Error(Y(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(kd):e=[kd])}n=n.return}e!==null&&Ug(t,e,a,o),t.flags|=262144}function tf(e){for(e=e.firstContext;e!==null;){if(!Ya(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mi(e){Ci=e,Nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Yt(e){return jv(Ci,e)}function Cc(e,t){return Ci===null&&mi(e),jv(e,t)}function jv(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nn===null){if(e===null)throw Error(Y(308));Nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nn=Nn.next=t;return a}var yN=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},CN=Et.unstable_scheduleCallback,SN=Et.unstable_NormalPriority,Ct={$$typeof:In,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dh(){return{controller:new yN,data:new Map,refCount:0}}function Rd(e){e.refCount--,e.refCount===0&&CN(SN,function(){e.controller.abort()})}var nd=null,qg=0,Fl=0,Dl=null;function LN(e,t){if(nd===null){var a=nd=[];qg=0,Fl=nx(),Dl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qg++,t.then(aw,aw),t}function aw(){if(--qg===0&&nd!==null){Dl!==null&&(Dl.status="fulfilled");var e=nd;nd=null,Fl=0,Dl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kN(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var ow=fe.S;fe.S=function(e,t){i1=Va(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&LN(e,t),ow!==null&&ow(e,t)};var ui=tn(null);function Rh(){var e=ui.current;return e!==null?e:je.pooledCache}function Oc(e,t){t===null?We(ui,ui.current):We(ui,t.pool)}function Yv(){var e=Rh();return e===null?null:{parent:Ct._currentValue,pool:e}}var $l=Error(Y(460)),zh=Error(Y(474)),Nf=Error(Y(542)),af={then:function(){}};function nw(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zv(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Mn,Mn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,iw(e),e;default:if(typeof t.status=="string")t.then(Mn,Mn);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,iw(e),e}throw ci=t,$l}}function ii(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ci=a,$l):a}}var ci=null;function rw(){if(ci===null)throw Error(Y(459));var e=ci;return ci=null,e}function iw(e){if(e===$l||e===Nf)throw Error(Y(483))}var Rl=null,vd=0;function Sc(e){var t=vd;return vd+=1,Rl===null&&(Rl=[]),Zv(Rl,e,t)}function Xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Lc(e,t){throw t.$$typeof===c3?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wv(e){function t(g,b){if(e){var m=g.deletions;m===null?(g.deletions=[b],g.flags|=16):m.push(b)}}function a(g,b){if(!e)return null;for(;b!==null;)t(g,b),b=b.sibling;return null}function o(g){for(var b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function n(g,b){return g=En(g,b),g.index=0,g.sibling=null,g}function r(g,b,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<b?(g.flags|=67108866,b):m):(g.flags|=67108866,b)):(g.flags|=1048576,b)}function i(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function l(g,b,m,x){return b===null||b.tag!==6?(b=Jm(m,g.mode,x),b.return=g,b):(b=n(b,m),b.return=g,b)}function s(g,b,m,x){var S=m.type;return S===bl?d(g,b,m.props.children,x,m.key):b!==null&&(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sr&&ii(S)===b.type)?(b=n(b,m.props),Xs(b,m),b.return=g,b):(b=Pc(m.type,m.key,m.props,null,g.mode,x),Xs(b,m),b.return=g,b)}function u(g,b,m,x){return b===null||b.tag!==4||b.stateNode.containerInfo!==m.containerInfo||b.stateNode.implementation!==m.implementation?(b=eg(m,g.mode,x),b.return=g,b):(b=n(b,m.children||[]),b.return=g,b)}function d(g,b,m,x,S){return b===null||b.tag!==7?(b=di(m,g.mode,x,S),b.return=g,b):(b=n(b,m),b.return=g,b)}function f(g,b,m){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Jm(""+b,g.mode,m),b.return=g,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case mc:return m=Pc(b.type,b.key,b.props,null,g.mode,m),Xs(m,b),m.return=g,m;case Ks:return b=eg(b,g.mode,m),b.return=g,b;case sr:return b=ii(b),f(g,b,m)}if($s(b)||Vs(b))return b=di(b,g.mode,m,null),b.return=g,b;if(typeof b.then=="function")return f(g,Sc(b),m);if(b.$$typeof===In)return f(g,Cc(g,b),m);Lc(g,b)}return null}function c(g,b,m,x){var S=b!==null?b.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return S!==null?null:l(g,b,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mc:return m.key===S?s(g,b,m,x):null;case Ks:return m.key===S?u(g,b,m,x):null;case sr:return m=ii(m),c(g,b,m,x)}if($s(m)||Vs(m))return S!==null?null:d(g,b,m,x,null);if(typeof m.then=="function")return c(g,b,Sc(m),x);if(m.$$typeof===In)return c(g,b,Cc(g,m),x);Lc(g,m)}return null}function p(g,b,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return g=g.get(m)||null,l(b,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mc:return g=g.get(x.key===null?m:x.key)||null,s(b,g,x,S);case Ks:return g=g.get(x.key===null?m:x.key)||null,u(b,g,x,S);case sr:return x=ii(x),p(g,b,m,x,S)}if($s(x)||Vs(x))return g=g.get(m)||null,d(b,g,x,S,null);if(typeof x.then=="function")return p(g,b,m,Sc(x),S);if(x.$$typeof===In)return p(g,b,m,Cc(b,x),S);Lc(b,x)}return null}function h(g,b,m,x){for(var S=null,y=null,C=b,k=b=0,_=null;C!==null&&k<m.length;k++){C.index>k?(_=C,C=null):_=C.sibling;var T=c(g,C,m[k],x);if(T===null){C===null&&(C=_);break}e&&C&&T.alternate===null&&t(g,C),b=r(T,b,k),y===null?S=T:y.sibling=T,y=T,C=_}if(k===m.length)return a(g,C),Ne&&kn(g,k),S;if(C===null){for(;k<m.length;k++)C=f(g,m[k],x),C!==null&&(b=r(C,b,k),y===null?S=C:y.sibling=C,y=C);return Ne&&kn(g,k),S}for(C=o(C);k<m.length;k++)_=p(C,g,k,m[k],x),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?k:_.key),b=r(_,b,k),y===null?S=_:y.sibling=_,y=_);return e&&C.forEach(function(R){return t(g,R)}),Ne&&kn(g,k),S}function w(g,b,m,x){if(m==null)throw Error(Y(151));for(var S=null,y=null,C=b,k=b=0,_=null,T=m.next();C!==null&&!T.done;k++,T=m.next()){C.index>k?(_=C,C=null):_=C.sibling;var R=c(g,C,T.value,x);if(R===null){C===null&&(C=_);break}e&&C&&R.alternate===null&&t(g,C),b=r(R,b,k),y===null?S=R:y.sibling=R,y=R,C=_}if(T.done)return a(g,C),Ne&&kn(g,k),S;if(C===null){for(;!T.done;k++,T=m.next())T=f(g,T.value,x),T!==null&&(b=r(T,b,k),y===null?S=T:y.sibling=T,y=T);return Ne&&kn(g,k),S}for(C=o(C);!T.done;k++,T=m.next())T=p(C,g,k,T.value,x),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?k:T.key),b=r(T,b,k),y===null?S=T:y.sibling=T,y=T);return e&&C.forEach(function(B){return t(g,B)}),Ne&&kn(g,k),S}function v(g,b,m,x){if(typeof m=="object"&&m!==null&&m.type===bl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mc:e:{for(var S=m.key;b!==null;){if(b.key===S){if(S=m.type,S===bl){if(b.tag===7){a(g,b.sibling),x=n(b,m.props.children),x.return=g,g=x;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sr&&ii(S)===b.type){a(g,b.sibling),x=n(b,m.props),Xs(x,m),x.return=g,g=x;break e}a(g,b);break}else t(g,b);b=b.sibling}m.type===bl?(x=di(m.props.children,g.mode,x,m.key),x.return=g,g=x):(x=Pc(m.type,m.key,m.props,null,g.mode,x),Xs(x,m),x.return=g,g=x)}return i(g);case Ks:e:{for(S=m.key;b!==null;){if(b.key===S)if(b.tag===4&&b.stateNode.containerInfo===m.containerInfo&&b.stateNode.implementation===m.implementation){a(g,b.sibling),x=n(b,m.children||[]),x.return=g,g=x;break e}else{a(g,b);break}else t(g,b);b=b.sibling}x=eg(m,g.mode,x),x.return=g,g=x}return i(g);case sr:return m=ii(m),v(g,b,m,x)}if($s(m))return h(g,b,m,x);if(Vs(m)){if(S=Vs(m),typeof S!="function")throw Error(Y(150));return m=S.call(m),w(g,b,m,x)}if(typeof m.then=="function")return v(g,b,Sc(m),x);if(m.$$typeof===In)return v(g,b,Cc(g,m),x);Lc(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,b!==null&&b.tag===6?(a(g,b.sibling),x=n(b,m),x.return=g,g=x):(a(g,b),x=Jm(m,g.mode,x),x.return=g,g=x),i(g)):a(g,b)}return function(g,b,m,x){try{vd=0;var S=v(g,b,m,x);return Rl=null,S}catch(C){if(C===$l||C===Nf)throw C;var y=Ua(29,C,null,g.mode);return y.lanes=x,y.return=g,y}}}var gi=Wv(!0),Kv=Wv(!1),dr=!1;function Ph(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=Jc(e),Uv(e,null,a),t}return Mf(e,o,t,a),Jc(e)}function rd(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,mv(e,a)}}function ag(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Gg=!1;function id(){if(Gg){var e=Dl;if(e!==null)throw e}}function ld(e,t,a,o){Gg=!1;var n=e.updateQueue;dr=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?r=u:i.next=u,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;i=0,d=u=s=null,l=r;do{var c=l.lane&-536870913,p=c!==l.lane;if(p?(_e&c)===c:(o&c)===c){c!==0&&c===Fl&&(Gg=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,w=l;c=t;var v=a;switch(w.tag){case 1:if(h=w.payload,typeof h=="function"){f=h.call(v,f,c);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=w.payload,c=typeof h=="function"?h.call(v,f,c):h,c==null)break e;f=nt({},f,c);break e;case 2:dr=!0}}c=l.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=f):d=d.next=p,i|=c;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;p=l,l=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),Tr|=i,e.lanes=i,e.memoizedState=f}}function $v(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function Qv(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$v(a[e],t)}var Ul=tn(null),of=tn(0);function lw(e,t){e=On,We(of,e),We(Ul,t),On=e|t.baseLanes}function Xg(){We(of,On),We(Ul,Ul.current)}function Oh(){On=of.current,Pt(Ul),Pt(of)}var Za=tn(null),go=null;function cr(e){var t=e.alternate;We(xt,xt.current&1),We(Za,e),go===null&&(t===null||Ul.current!==null||t.memoizedState!==null)&&(go=e)}function jg(e){We(xt,xt.current),We(Za,e),go===null&&(go=e)}function Jv(e){e.tag===22?(We(xt,xt.current),We(Za,e),go===null&&(go=e)):fr(e)}function fr(){We(xt,xt.current),We(Za,Za.current)}function Fa(e){Pt(Za),go===e&&(go=null),Pt(xt)}var xt=tn(0);function nf(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ch(a)||fh(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rn=0,xe=null,Ge=null,vt=null,rf=!1,zl=!1,hi=!1,lf=0,yd=0,Pl=null,_N=0;function ut(){throw Error(Y(321))}function Bh(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ya(e[a],t[a]))return!1;return!0}function Hh(e,t,a,o,n,r){return Rn=r,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fe.H=e===null||e.memoizedState===null?Ey:Kh,hi=!1,r=a(o,n),hi=!1,zl&&(r=ty(t,a,o,n)),ey(e),r}function ey(e){fe.H=Cd;var t=Ge!==null&&Ge.next!==null;if(Rn=0,vt=Ge=xe=null,rf=!1,yd=0,Pl=null,t)throw Error(Y(300));e===null||St||(e=e.dependencies,e!==null&&tf(e)&&(St=!0))}function ty(e,t,a,o){xe=e;var n=0;do{if(zl&&(Pl=null),yd=0,zl=!1,25<=n)throw Error(Y(301));if(n+=1,vt=Ge=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}fe.H=Ty,r=t(a,o)}while(zl);return r}function IN(){var e=fe.H,t=e.useState()[0];return t=typeof t.then=="function"?zd(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(xe.flags|=1024),t}function Fh(){var e=lf!==0;return lf=0,e}function Uh(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qh(e){if(rf){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rf=!1}Rn=0,vt=Ge=xe=null,zl=!1,yd=lf=0,Pl=null}function ua(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?xe.memoizedState=vt=e:vt=vt.next=e,vt}function bt(){if(Ge===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=vt===null?xe.memoizedState:vt.next;if(t!==null)vt=t,Ge=e;else{if(e===null)throw xe.alternate===null?Error(Y(467)):Error(Y(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},vt===null?xe.memoizedState=vt=e:vt=vt.next=e}return vt}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zd(e){var t=yd;return yd+=1,Pl===null&&(Pl=[]),e=Zv(Pl,e,t),t=xe,(vt===null?t.memoizedState:vt.next)===null&&(t=t.alternate,fe.H=t===null||t.memoizedState===null?Ey:Kh),e}function Tf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zd(e);if(e.$$typeof===In)return Yt(e)}throw Error(Y(438,String(e)))}function Vh(e){var t=null,a=xe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ef(),xe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=f3;return t.index++,a}function zn(e,t){return typeof t=="function"?t(e):t}function Bc(e){var t=bt();return Gh(t,Ge,e)}function Gh(e,t,a){var o=e.queue;if(o===null)throw Error(Y(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var l=i=null,s=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(_e&f)===f:(Rn&f)===f){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Fl&&(d=!0);else if((Rn&c)===c){u=u.next,c===Fl&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=f,i=r):s=s.next=f,xe.lanes|=c,Tr|=c;f=u.action,hi&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=c,i=r):s=s.next=c,xe.lanes|=f,Tr|=f;u=u.next}while(u!==null&&u!==t);if(s===null?i=r:s.next=l,!Ya(r,e.memoizedState)&&(St=!0,d&&(a=Dl,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function og(e){var t=bt(),a=t.queue;if(a===null)throw Error(Y(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);Ya(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function ay(e,t,a){var o=xe,n=bt(),r=Ne;if(r){if(a===void 0)throw Error(Y(407));a=a()}else a=t();var i=!Ya((Ge||n).memoizedState,a);if(i&&(n.memoizedState=a,St=!0),n=n.queue,Xh(ry.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,ql(9,{destroy:void 0},ny.bind(null,o,n,a,t),null),je===null)throw Error(Y(349));r||(Rn&127)!==0||oy(o,t,a)}return a}function oy(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=xe.updateQueue,t===null?(t=Ef(),xe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ny(e,t,a,o){t.value=a,t.getSnapshot=o,iy(t)&&ly(e)}function ry(e,t,a){return a(function(){iy(t)&&ly(e)})}function iy(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ya(e,a)}catch{return!0}}function ly(e){var t=yi(e,2);t!==null&&_a(t,e,2)}function Yg(e){var t=ua();if(typeof e=="function"){var a=e;if(e=a(),hi){mr(!0);try{a()}finally{mr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t}function sy(e,t,a,o){return e.baseState=a,Gh(e,Ge,typeof o=="function"?o:zn)}function MN(e,t,a,o,n){if(Df(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};fe.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,dy(t,r)):(r.next=a.next,t.pending=a.next=r)}}function dy(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=fe.T,i={};fe.T=i;try{var l=a(n,o),s=fe.S;s!==null&&s(i,l),sw(e,t,l)}catch(u){Zg(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),fe.T=r}}else try{r=a(n,o),sw(e,t,r)}catch(u){Zg(e,t,u)}}function sw(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){dw(e,t,o)},function(o){return Zg(e,t,o)}):dw(e,t,a)}function dw(e,t,a){t.status="fulfilled",t.value=a,uy(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,dy(e,a)))}function Zg(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,uy(t),t=t.next;while(t!==o)}e.action=null}function uy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cy(e,t){return t}function uw(e,t){if(Ne){var a=je.formState;if(a!==null){e:{var o=xe;if(Ne){if(ot){t:{for(var n=ot,r=mo;n.nodeType!==8;){if(!r){n=null;break t}if(n=ho(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ot=ho(n.nextSibling),o=n.data==="F!";break e}}Nr(o)}o=!1}o&&(t=a[0])}}return a=ua(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cy,lastRenderedState:t},a.queue=o,a=Iy.bind(null,xe,o),o.dispatch=a,o=Yg(!1),r=Wh.bind(null,xe,!1,o.queue),o=ua(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=MN.bind(null,xe,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function cw(e){var t=bt();return fy(t,Ge,e)}function fy(e,t,a){if(t=Gh(e,t,cy)[0],e=Bc(zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=zd(t)}catch(i){throw i===$l?Nf:i}else o=t;t=bt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(xe.flags|=2048,ql(9,{destroy:void 0},NN.bind(null,n,a),null)),[o,r,e]}function NN(e,t){e.action=t}function fw(e){var t=bt(),a=Ge;if(a!==null)return fy(t,a,e);bt(),t=t.memoizedState,a=bt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function ql(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Ef(),xe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function py(){return bt().memoizedState}function Hc(e,t,a,o){var n=ua();xe.flags|=e,n.memoizedState=ql(1|t,{destroy:void 0},a,o===void 0?null:o)}function Af(e,t,a,o){var n=bt();o=o===void 0?null:o;var r=n.memoizedState.inst;Ge!==null&&o!==null&&Bh(o,Ge.memoizedState.deps)?n.memoizedState=ql(t,r,a,o):(xe.flags|=e,n.memoizedState=ql(1|t,r,a,o))}function pw(e,t){Hc(8390656,8,e,t)}function Xh(e,t){Af(2048,8,e,t)}function EN(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=Ef(),xe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function my(e){var t=bt().memoizedState;return EN({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(Y(440));return t.impl.apply(void 0,arguments)}}function gy(e,t){return Af(4,2,e,t)}function hy(e,t){return Af(4,4,e,t)}function xy(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function by(e,t,a){a=a!=null?a.concat([e]):null,Af(4,4,xy.bind(null,t,e),a)}function jh(){}function wy(e,t){var a=bt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Bh(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function vy(e,t){var a=bt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Bh(t,o[1]))return o[0];if(o=e(),hi){mr(!0);try{e()}finally{mr(!1)}}return a.memoizedState=[o,t],o}function Yh(e,t,a){return a===void 0||(Rn&1073741824)!==0&&(_e&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=s1(),xe.lanes|=e,Tr|=e,a)}function yy(e,t,a,o){return Ya(a,t)?a:Ul.current!==null?(e=Yh(e,a,o),Ya(e,t)||(St=!0),e):(Rn&42)===0||(Rn&1073741824)!==0&&(_e&261930)===0?(St=!0,e.memoizedState=a):(e=s1(),xe.lanes|=e,Tr|=e,t)}function Cy(e,t,a,o,n){var r=ze.p;ze.p=r!==0&&8>r?r:8;var i=fe.T,l={};fe.T=l,Wh(e,!1,t,a);try{var s=n(),u=fe.S;if(u!==null&&u(l,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=kN(s,o);sd(e,t,d,ja(e))}else sd(e,t,o,ja(e))}catch(f){sd(e,t,{then:function(){},status:"rejected",reason:f},ja())}finally{ze.p=r,i!==null&&l.types!==null&&(i.types=l.types),fe.T=i}}function TN(){}function Wg(e,t,a,o){if(e.tag!==5)throw Error(Y(476));var n=Sy(e).queue;Cy(e,n,t,si,a===null?TN:function(){return Ly(e),a(o)})}function Sy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:si,baseState:si,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:si},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ly(e){var t=Sy(e);t.next===null&&(t=e.alternate.memoizedState),sd(e,t.next.queue,{},ja())}function Zh(){return Yt(kd)}function ky(){return bt().memoizedState}function _y(){return bt().memoizedState}function AN(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ja();e=yr(a);var o=Cr(t,e,a);o!==null&&(_a(o,t,a),rd(o,t,a)),t={cache:Dh()},e.payload=t;return}t=t.return}}function DN(e,t,a){var o=ja();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Df(e)?My(t,a):(a=Nh(e,t,a,o),a!==null&&(_a(a,e,o),Ny(a,t,o)))}function Iy(e,t,a){var o=ja();sd(e,t,a,o)}function sd(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Df(e))My(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,l=r(i,a);if(n.hasEagerState=!0,n.eagerState=l,Ya(l,i))return Mf(e,t,n,0),je===null&&If(),!1}catch{}if(a=Nh(e,t,n,o),a!==null)return _a(a,e,o),Ny(a,t,o),!0}return!1}function Wh(e,t,a,o){if(o={lane:2,revertLane:nx(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Df(e)){if(t)throw Error(Y(479))}else t=Nh(e,a,o,2),t!==null&&_a(t,e,2)}function Df(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function My(e,t){zl=rf=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ny(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,mv(e,a)}}var Cd={readContext:Yt,use:Tf,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};Cd.useEffectEvent=ut;var Ey={readContext:Yt,use:Tf,useCallback:function(e,t){return ua().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:pw,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Hc(4194308,4,xy.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Hc(4194308,4,e,t)},useInsertionEffect:function(e,t){Hc(4,2,e,t)},useMemo:function(e,t){var a=ua();t=t===void 0?null:t;var o=e();if(hi){mr(!0);try{e()}finally{mr(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ua();if(a!==void 0){var n=a(t);if(hi){mr(!0);try{a(t)}finally{mr(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=DN.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var t=ua();return e={current:e},t.memoizedState=e},useState:function(e){e=Yg(e);var t=e.queue,a=Iy.bind(null,xe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jh,useDeferredValue:function(e,t){var a=ua();return Yh(a,e,t)},useTransition:function(){var e=Yg(!1);return e=Cy.bind(null,xe,e.queue,!0,!1),ua().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=xe,n=ua();if(Ne){if(a===void 0)throw Error(Y(407));a=a()}else{if(a=t(),je===null)throw Error(Y(349));(_e&127)!==0||oy(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,pw(ry.bind(null,o,r,e),[e]),o.flags|=2048,ql(9,{destroy:void 0},ny.bind(null,o,r,a,t),null),a},useId:function(){var e=ua(),t=je.identifierPrefix;if(Ne){var a=Qo,o=$o;a=(o&~(1<<32-Xa(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=lf++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=_N++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zh,useFormState:uw,useActionState:uw,useOptimistic:function(e){var t=ua();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Wh.bind(null,xe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vh,useCacheRefresh:function(){return ua().memoizedState=AN.bind(null,xe)},useEffectEvent:function(e){var t=ua(),a={impl:e};return t.memoizedState=a,function(){if((Re&2)!==0)throw Error(Y(440));return a.impl.apply(void 0,arguments)}}},Kh={readContext:Yt,use:Tf,useCallback:wy,useContext:Yt,useEffect:Xh,useImperativeHandle:by,useInsertionEffect:gy,useLayoutEffect:hy,useMemo:vy,useReducer:Bc,useRef:py,useState:function(){return Bc(zn)},useDebugValue:jh,useDeferredValue:function(e,t){var a=bt();return yy(a,Ge.memoizedState,e,t)},useTransition:function(){var e=Bc(zn)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:zd(e),t]},useSyncExternalStore:ay,useId:ky,useHostTransitionStatus:Zh,useFormState:cw,useActionState:cw,useOptimistic:function(e,t){var a=bt();return sy(a,Ge,e,t)},useMemoCache:Vh,useCacheRefresh:_y};Kh.useEffectEvent=my;var Ty={readContext:Yt,use:Tf,useCallback:wy,useContext:Yt,useEffect:Xh,useImperativeHandle:by,useInsertionEffect:gy,useLayoutEffect:hy,useMemo:vy,useReducer:og,useRef:py,useState:function(){return og(zn)},useDebugValue:jh,useDeferredValue:function(e,t){var a=bt();return Ge===null?Yh(a,e,t):yy(a,Ge.memoizedState,e,t)},useTransition:function(){var e=og(zn)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:zd(e),t]},useSyncExternalStore:ay,useId:ky,useHostTransitionStatus:Zh,useFormState:fw,useActionState:fw,useOptimistic:function(e,t){var a=bt();return Ge!==null?sy(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vh,useCacheRefresh:_y};Ty.useEffectEvent=my;function ng(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:nt({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kg={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=ja(),n=yr(o);n.payload=t,a!=null&&(n.callback=a),t=Cr(e,n,o),t!==null&&(_a(t,e,o),rd(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=ja(),n=yr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Cr(e,n,o),t!==null&&(_a(t,e,o),rd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ja(),o=yr(a);o.tag=2,t!=null&&(o.callback=t),t=Cr(e,o,a),t!==null&&(_a(t,e,a),rd(t,e,a))}};function mw(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!xd(a,o)||!xd(n,r):!0}function gw(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Kg.enqueueReplaceState(t,t.state,null)}function xi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=nt({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ay(e){Qc(e)}function Dy(e){console.error(e)}function Ry(e){Qc(e)}function sf(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function hw(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function $g(e,t,a){return a=yr(a),a.tag=3,a.payload={element:null},a.callback=function(){sf(e,t)},a}function zy(e){return e=yr(e),e.tag=3,e}function Py(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){hw(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){hw(t,a,o),typeof n!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var l=o.stack;this.componentDidCatch(o.value,{componentStack:l!==null?l:""})})}function RN(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=Za.current,a!==null){switch(a.tag){case 31:case 13:return go===null?pf():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===af?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),gg(e,o,n)),!1;case 22:return a.flags|=65536,o===af?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),gg(e,o,n)),!1}throw Error(Y(435,a.tag))}return gg(e,o,n),pf(),!1}if(Ne)return t=Za.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Bg&&(e=Error(Y(422),{cause:o}),wd(po(e,a)))):(o!==Bg&&(t=Error(Y(423),{cause:o}),wd(po(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=po(o,a),n=$g(e.stateNode,o,n),ag(e,n),ct!==4&&(ct=2)),!1;var r=Error(Y(520),{cause:o});if(r=po(r,a),cd===null?cd=[r]:cd.push(r),ct!==4&&(ct=2),t===null)return!0;o=po(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=$g(a.stateNode,o,e),ag(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=zy(n),Py(n,e,a,o),ag(a,n),!1}a=a.return}while(a!==null);return!1}var $h=Error(Y(461)),St=!1;function Gt(e,t,a,o){t.child=e===null?Kv(t,null,a,o):gi(t,e.child,a,o)}function xw(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var l in o)l!=="ref"&&(i[l]=o[l])}else i=o;return mi(t),o=Hh(e,t,a,i,r,n),l=Fh(),e!==null&&!St?(Uh(e,t,n),Pn(e,t,n)):(Ne&&l&&Th(t),t.flags|=1,Gt(e,t,o,n),t.child)}function bw(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Eh(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Oy(e,t,r,o,n)):(e=Pc(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Qh(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:xd,a(i,o)&&e.ref===t.ref)return Pn(e,t,n)}return t.flags|=1,e=En(r,o),e.ref=t.ref,e.return=t,t.child=e}function Oy(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(xd(r,o)&&e.ref===t.ref)if(St=!1,t.pendingProps=o=r,Qh(e,n))(e.flags&131072)!==0&&(St=!0);else return t.lanes=e.lanes,Pn(e,t,n)}return Qg(e,t,a,o,n)}function By(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return ww(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oc(t,r!==null?r.cachePool:null),r!==null?lw(t,r):Xg(),Jv(t);else return o=t.lanes=536870912,ww(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Oc(t,r.cachePool),lw(t,r),fr(t),t.memoizedState=null):(e!==null&&Oc(t,null),Xg(),fr(t));return Gt(e,t,n,a),t.child}function Js(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ww(e,t,a,o,n){var r=Rh();return r=r===null?null:{parent:Ct._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Oc(t,null),Xg(),Jv(t),e!==null&&Kl(e,t,o,!0),t.childLanes=n,null}function Fc(e,t){return t=df({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vw(e,t,a){return gi(t,e.child,null,a),e=Fc(t,t.pendingProps),e.flags|=2,Fa(t),t.memoizedState=null,e}function zN(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(o.mode==="hidden")return e=Fc(t,o),t.lanes=536870912,Js(null,e);if(jg(t),(e=ot)?(e=E1(e,mo),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mr!==null?{id:$o,overflow:Qo}:null,retryLane:536870912,hydrationErrors:null},a=Vv(e),a.return=t,t.child=a,jt=t,ot=null)):e=null,e===null)throw Nr(t);return t.lanes=536870912,null}return Fc(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(jg(t),n)if(t.flags&256)t.flags&=-257,t=vw(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Y(558));else if(St||Kl(e,t,a,!1),n=(a&e.childLanes)!==0,St||n){if(o=je,o!==null&&(i=gv(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,yi(e,i),_a(o,e,i),$h;pf(),t=vw(e,t,a)}else e=r.treeContext,ot=ho(i.nextSibling),jt=t,Ne=!0,vr=null,mo=!1,e!==null&&Xv(t,e),t=Fc(t,o),t.flags|=4096;return t}return e=En(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Uc(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(Y(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Qg(e,t,a,o,n){return mi(t),a=Hh(e,t,a,o,void 0,n),o=Fh(),e!==null&&!St?(Uh(e,t,n),Pn(e,t,n)):(Ne&&o&&Th(t),t.flags|=1,Gt(e,t,a,n),t.child)}function yw(e,t,a,o,n,r){return mi(t),t.updateQueue=null,a=ty(t,o,a,n),ey(e),o=Fh(),e!==null&&!St?(Uh(e,t,r),Pn(e,t,r)):(Ne&&o&&Th(t),t.flags|=1,Gt(e,t,a,r),t.child)}function Cw(e,t,a,o,n){if(mi(t),t.stateNode===null){var r=_l,i=a.contextType;typeof i=="object"&&i!==null&&(r=Yt(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kg,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Ph(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?Yt(i):_l,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ng(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&Kg.enqueueReplaceState(r,r.state,null),ld(t,o,r,n),id(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,s=xi(a,l);r.props=s;var u=r.context,d=a.contextType;i=_l,typeof d=="object"&&d!==null&&(i=Yt(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||u!==i)&&gw(t,r,o,i),dr=!1;var c=t.memoizedState;r.state=c,ld(t,o,r,n),id(),u=t.memoizedState,l||c!==u||dr?(typeof f=="function"&&(ng(t,a,f,o),u=t.memoizedState),(s=dr||mw(t,a,s,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Vg(e,t),i=t.memoizedProps,d=xi(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,s=_l,typeof u=="object"&&u!==null&&(s=Yt(u)),l=a.getDerivedStateFromProps,(u=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==s)&&gw(t,r,o,s),dr=!1,c=t.memoizedState,r.state=c,ld(t,o,r,n),id();var p=t.memoizedState;i!==f||c!==p||dr||e!==null&&e.dependencies!==null&&tf(e.dependencies)?(typeof l=="function"&&(ng(t,a,l,o),p=t.memoizedState),(d=dr||mw(t,a,d,o,c,p,s)||e!==null&&e.dependencies!==null&&tf(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Uc(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=gi(t,e.child,null,n),t.child=gi(t,null,a,n)):Gt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Pn(e,t,n),e}function Sw(e,t,a,o){return pi(),t.flags|=256,Gt(e,t,a,o),t.child}var rg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ig(e){return{baseLanes:e,cachePool:Yv()}}function lg(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qa),e}function Hy(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(xt.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(n?cr(t):fr(t),(e=ot)?(e=E1(e,mo),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mr!==null?{id:$o,overflow:Qo}:null,retryLane:536870912,hydrationErrors:null},a=Vv(e),a.return=t,t.child=a,jt=t,ot=null)):e=null,e===null)throw Nr(t);return fh(e)?t.lanes=32:t.lanes=536870912,null}var l=o.children;return o=o.fallback,n?(fr(t),n=t.mode,l=df({mode:"hidden",children:l},n),o=di(o,n,a,null),l.return=t,o.return=t,l.sibling=o,t.child=l,o=t.child,o.memoizedState=ig(a),o.childLanes=lg(e,i,a),t.memoizedState=rg,Js(null,o)):(cr(t),Jg(t,l))}var s=e.memoizedState;if(s!==null&&(l=s.dehydrated,l!==null)){if(r)t.flags&256?(cr(t),t.flags&=-257,t=sg(e,t,a)):t.memoizedState!==null?(fr(t),t.child=e.child,t.flags|=128,t=null):(fr(t),l=o.fallback,n=t.mode,o=df({mode:"visible",children:o.children},n),l=di(l,n,a,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,gi(t,e.child,null,a),o=t.child,o.memoizedState=ig(a),o.childLanes=lg(e,i,a),t.memoizedState=rg,t=Js(null,o));else if(cr(t),fh(l)){if(i=l.nextSibling&&l.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(Y(419)),o.stack="",o.digest=i,wd({value:o,source:null,stack:null}),t=sg(e,t,a)}else if(St||Kl(e,t,a,!1),i=(a&e.childLanes)!==0,St||i){if(i=je,i!==null&&(o=gv(i,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,yi(e,o),_a(i,e,o),$h;ch(l)||pf(),t=sg(e,t,a)}else ch(l)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ot=ho(l.nextSibling),jt=t,Ne=!0,vr=null,mo=!1,e!==null&&Xv(t,e),t=Jg(t,o.children),t.flags|=4096);return t}return n?(fr(t),l=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=En(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?l=En(u,l):(l=di(l,n,a,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,Js(null,o),o=t.child,l=e.child.memoizedState,l===null?l=ig(a):(n=l.cachePool,n!==null?(s=Ct._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Yv(),l={baseLanes:l.baseLanes|a,cachePool:n}),o.memoizedState=l,o.childLanes=lg(e,i,a),t.memoizedState=rg,Js(e.child,o)):(cr(t),a=e.child,e=a.sibling,a=En(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function Jg(e,t){return t=df({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function df(e,t){return e=Ua(22,e,null,t),e.lanes=0,e}function sg(e,t,a){return gi(t,e.child,null,a),e=Jg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lw(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Fg(e.return,t,a)}function dg(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function Fy(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=xt.current,l=(i&2)!==0;if(l?(i=i&1|2,t.flags|=128):i&=1,We(xt,i),Gt(e,t,o,a),o=Ne?bd:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lw(e,a,t);else if(e.tag===19)Lw(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&nf(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),dg(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&nf(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}dg(t,!0,a,null,r,o);break;case"together":dg(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Pn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,a=En(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=En(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Qh(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&tf(e)))}function PN(e,t,a){switch(t.tag){case 3:Zc(t,t.stateNode.containerInfo),ur(t,Ct,e.memoizedState.cache),pi();break;case 27:case 5:Ig(t);break;case 4:Zc(t,t.stateNode.containerInfo);break;case 10:ur(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jg(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(cr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Hy(e,t,a):(cr(t),e=Pn(e,t,a),e!==null?e.sibling:null);cr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Kl(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Fy(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),We(xt,xt.current),o)break;return null;case 22:return t.lanes=0,By(e,t,a,t.pendingProps);case 24:ur(t,Ct,e.memoizedState.cache)}return Pn(e,t,a)}function Uy(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)St=!0;else{if(!Qh(e,a)&&(t.flags&128)===0)return St=!1,PN(e,t,a);St=(e.flags&131072)!==0}else St=!1,Ne&&(t.flags&1048576)!==0&&Gv(t,bd,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ii(t.elementType),t.type=e,typeof e=="function")Eh(e)?(o=xi(e,o),t.tag=1,t=Cw(null,t,e,o,a)):(t.tag=0,t=Qg(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===hh){t.tag=11,t=xw(null,t,e,o,a);break e}else if(n===xh){t.tag=14,t=bw(null,t,e,o,a);break e}}throw t=kg(e)||e,Error(Y(306,t,""))}}return t;case 0:return Qg(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=xi(o,t.pendingProps),Cw(e,t,o,n,a);case 3:e:{if(Zc(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Vg(e,t),ld(t,o,null,a);var i=t.memoizedState;if(o=i.cache,ur(t,Ct,o),o!==r.cache&&Ug(t,[Ct],a,!0),id(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Sw(e,t,o,a);break e}else if(o!==n){n=po(Error(Y(424)),t),wd(n),t=Sw(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ot=ho(e.firstChild),jt=t,Ne=!0,vr=null,mo=!0,a=Kv(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pi(),o===n){t=Pn(e,t,a);break e}Gt(e,t,o,a)}t=t.child}return t;case 26:return Uc(e,t),e===null?(a=jw(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ne||(a=t.type,e=t.pendingProps,o=xf(wr.current).createElement(a),o[Xt]=t,o[Ia]=e,Zt(o,a,e),zt(o),t.stateNode=o):t.memoizedState=jw(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ig(t),e===null&&Ne&&(o=t.stateNode=T1(t.type,t.pendingProps,wr.current),jt=t,mo=!0,n=ot,Dr(t.type)?(ph=n,ot=ho(o.firstChild)):ot=n),Gt(e,t,t.pendingProps.children,a),Uc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((n=o=ot)&&(o=u4(o,t.type,t.pendingProps,mo),o!==null?(t.stateNode=o,jt=t,ot=ho(o.firstChild),mo=!1,n=!0):n=!1),n||Nr(t)),Ig(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,dh(n,r)?o=null:i!==null&&dh(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Hh(e,t,IN,null,null,a),kd._currentValue=n),Uc(e,t),Gt(e,t,o,a),t.child;case 6:return e===null&&Ne&&((e=a=ot)&&(a=c4(a,t.pendingProps,mo),a!==null?(t.stateNode=a,jt=t,ot=null,e=!0):e=!1),e||Nr(t)),null;case 13:return Hy(e,t,a);case 4:return Zc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=gi(t,null,o,a):Gt(e,t,o,a),t.child;case 11:return xw(e,t,t.type,t.pendingProps,a);case 7:return Gt(e,t,t.pendingProps,a),t.child;case 8:return Gt(e,t,t.pendingProps.children,a),t.child;case 12:return Gt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,ur(t,t.type,o.value),Gt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,mi(t),n=Yt(n),o=o(n),t.flags|=1,Gt(e,t,o,a),t.child;case 14:return bw(e,t,t.type,t.pendingProps,a);case 15:return Oy(e,t,t.type,t.pendingProps,a);case 19:return Fy(e,t,a);case 31:return zN(e,t,a);case 22:return By(e,t,a,t.pendingProps);case 24:return mi(t),o=Yt(Ct),e===null?(n=Rh(),n===null&&(n=je,r=Dh(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Ph(t),ur(t,Ct,n)):((e.lanes&a)!==0&&(Vg(e,t),ld(t,null,null,a),id()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ur(t,Ct,o)):(o=r.cache,ur(t,Ct,o),o!==n.cache&&Ug(t,[Ct],a,!0))),Gt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function yn(e){e.flags|=4}function ug(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(c1())e.flags|=8192;else throw ci=af,zh}else e.flags&=-16777217}function kw(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R1(t))if(c1())e.flags|=8192;else throw ci=af,zh}function kc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fv():536870912,e.lanes|=t,Vl|=t)}function js(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function ON(e,t,a){var o=t.pendingProps;switch(Ah(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Tn(Ct),Ol(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tg())),at(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(yn(t),r!==null?(at(t),kw(t,r)):(at(t),ug(t,n,null,o,a))):r?r!==e.memoizedState?(yn(t),at(t),kw(t,r)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&yn(t),at(t),ug(t,n,e,o,a)),null;case 27:if(Wc(t),a=wr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&yn(t);else{if(!o){if(t.stateNode===null)throw Error(Y(166));return at(t),null}e=en.current,ml(t)?ew(t,e):(e=T1(n,o,a),t.stateNode=e,yn(t))}return at(t),null;case 5:if(Wc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&yn(t);else{if(!o){if(t.stateNode===null)throw Error(Y(166));return at(t),null}if(r=en.current,ml(t))ew(t,r);else{var i=xf(wr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[Xt]=t,r[Ia]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(Zt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&yn(t)}}return at(t),ug(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&yn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(Y(166));if(e=wr.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=jt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Xt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||I1(e.nodeValue,a)),e||Nr(t,!0)}else e=xf(e).createTextNode(o),e[Xt]=t,t.stateNode=e}return at(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=ml(t),a!==null){if(e===null){if(!o)throw Error(Y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(557));e[Xt]=t}else pi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else a=tg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Fa(t),t):(Fa(t),null);if((t.flags&128)!==0)throw Error(Y(558))}return at(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ml(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(Y(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Y(317));n[Xt]=t}else pi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),n=!1}else n=tg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Fa(t),t):(Fa(t),null)}return Fa(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),kc(t,t.updateQueue),at(t),null);case 4:return Ol(),e===null&&rx(t.stateNode.containerInfo),at(t),null;case 10:return Tn(t.type),at(t),null;case 19:if(Pt(xt),o=t.memoizedState,o===null)return at(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)js(o,!1);else{if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=nf(e),r!==null){for(t.flags|=128,js(o,!1),e=r.updateQueue,t.updateQueue=e,kc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)qv(a,e),a=a.sibling;return We(xt,xt.current&1|2),Ne&&kn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Va()>cf&&(t.flags|=128,n=!0,js(o,!1),t.lanes=4194304)}else{if(!n)if(e=nf(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,kc(t,e),js(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Ne)return at(t),null}else 2*Va()-o.renderingStartTime>cf&&a!==536870912&&(t.flags|=128,n=!0,js(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Va(),e.sibling=null,a=xt.current,We(xt,n?a&1|2:a&1),Ne&&kn(t,o.treeForkCount),e):(at(t),null);case 22:case 23:return Fa(t),Oh(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),a=t.updateQueue,a!==null&&kc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&Pt(ui),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Tn(Ct),at(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function BN(e,t){switch(Ah(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(Ct),Ol(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wc(t),null;case 31:if(t.memoizedState!==null){if(Fa(t),t.alternate===null)throw Error(Y(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pt(xt),null;case 4:return Ol(),null;case 10:return Tn(t.type),null;case 22:case 23:return Fa(t),Oh(),e!==null&&Pt(ui),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(Ct),null;case 25:return null;default:return null}}function qy(e,t){switch(Ah(t),t.tag){case 3:Tn(Ct),Ol();break;case 26:case 27:case 5:Wc(t);break;case 4:Ol();break;case 31:t.memoizedState!==null&&Fa(t);break;case 13:Fa(t);break;case 19:Pt(xt);break;case 10:Tn(t.type);break;case 22:case 23:Fa(t),Oh(),e!==null&&Pt(ui);break;case 24:Tn(Ct)}}function Pd(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(l){He(t,t.return,l)}}function Er(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,l=i.destroy;if(l!==void 0){i.destroy=void 0,n=t;var s=a,u=l;try{u()}catch(d){He(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){He(t,t.return,d)}}function Vy(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Qv(t,a)}catch(o){He(e,e.return,o)}}}function Gy(e,t,a){a.props=xi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,t,o)}}function dd(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){He(e,t,n)}}function Jo(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){He(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){He(e,t,n)}else a.current=null}function Xy(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){He(e,e.return,n)}}function cg(e,t,a){try{var o=e.stateNode;n4(o,e.type,a,t),o[Ia]=t}catch(n){He(e,e.return,n)}}function jy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dr(e.type)||e.tag===4}function fg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eh(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Mn));else if(o!==4&&(o===27&&Dr(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(eh(e,t,a),e=e.sibling;e!==null;)eh(e,t,a),e=e.sibling}function uf(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Dr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(uf(e,t,a),e=e.sibling;e!==null;)uf(e,t,a),e=e.sibling}function Yy(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zt(t,o,a),t[Xt]=e,t[Ia]=a}catch(r){He(e,e.return,r)}}var _n=!1,yt=!1,pg=!1,_w=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function HN(e,t){if(e=e.containerInfo,lh=yf,e=Rv(e),Ih(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,l=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(l=i+n),f!==r||o!==0&&f.nodeType!==3||(s=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(l=i),c===r&&++d===o&&(s=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=l===-1||s===-1?null:{start:l,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:e,selectionRange:a},yf=!1,Rt=t;Rt!==null;)if(t=Rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Rt=e;else for(;Rt!==null;){switch(t=Rt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var h=xi(a.type,n);e=o.getSnapshotBeforeUpdate(h,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){He(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)uh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,Rt=e;break}Rt=t.return}}function Zy(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sn(e,a),o&4&&Pd(5,a);break;case 1:if(Sn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){He(a,a.return,i)}else{var n=xi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){He(a,a.return,i)}}o&64&&Vy(a),o&512&&dd(a,a.return);break;case 3:if(Sn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qv(e,t)}catch(i){He(a,a.return,i)}}break;case 27:t===null&&o&4&&Yy(a);case 26:case 5:Sn(e,a),t===null&&o&4&&Xy(a),o&512&&dd(a,a.return);break;case 12:Sn(e,a);break;case 31:Sn(e,a),o&4&&$y(e,a);break;case 13:Sn(e,a),o&4&&Qy(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ZN.bind(null,a),f4(e,a))));break;case 22:if(o=a.memoizedState!==null||_n,!o){t=t!==null&&t.memoizedState!==null||yt,n=_n;var r=yt;_n=o,(yt=t)&&!r?Ln(e,a,(a.subtreeFlags&8772)!==0):Sn(e,a),_n=n,yt=r}break;case 30:break;default:Sn(e,a)}}function Wy(e){var t=e.alternate;t!==null&&(e.alternate=null,Wy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var lt=null,La=!1;function Cn(e,t,a){for(a=a.child;a!==null;)Ky(e,t,a),a=a.sibling}function Ky(e,t,a){if(Ga&&typeof Ga.onCommitFiberUnmount=="function")try{Ga.onCommitFiberUnmount(Nd,a)}catch{}switch(a.tag){case 26:yt||Jo(a,t),Cn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||Jo(a,t);var o=lt,n=La;Dr(a.type)&&(lt=a.stateNode,La=!1),Cn(e,t,a),pd(a.stateNode),lt=o,La=n;break;case 5:yt||Jo(a,t);case 6:if(o=lt,n=La,lt=null,Cn(e,t,a),lt=o,La=n,lt!==null)if(La)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(r){He(a,t,r)}else try{lt.removeChild(a.stateNode)}catch(r){He(a,t,r)}break;case 18:lt!==null&&(La?(e=lt,Uw(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Uw(lt,a.stateNode));break;case 4:o=lt,n=La,lt=a.stateNode.containerInfo,La=!0,Cn(e,t,a),lt=o,La=n;break;case 0:case 11:case 14:case 15:Er(2,a,t),yt||Er(4,a,t),Cn(e,t,a);break;case 1:yt||(Jo(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gy(a,t,o)),Cn(e,t,a);break;case 21:Cn(e,t,a);break;case 22:yt=(o=yt)||a.memoizedState!==null,Cn(e,t,a),yt=o;break;default:Cn(e,t,a)}}function $y(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){He(t,t.return,a)}}}function Qy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){He(t,t.return,a)}}function FN(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _w),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _w),t;default:throw Error(Y(435,e.tag))}}function _c(e,t){var a=FN(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=WN.bind(null,e,o);o.then(n,n)}})}function Ca(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(Dr(l.type)){lt=l.stateNode,La=!1;break e}break;case 5:lt=l.stateNode,La=!1;break e;case 3:case 4:lt=l.stateNode.containerInfo,La=!0;break e}l=l.return}if(lt===null)throw Error(Y(160));Ky(r,i,n),lt=null,La=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Jy(t,e),t=t.sibling}var Mo=null;function Jy(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ca(t,e),Sa(e),o&4&&(Er(3,e,e.return),Pd(3,e),Er(5,e,e.return));break;case 1:Ca(t,e),Sa(e),o&512&&(yt||a===null||Jo(a,a.return)),o&64&&_n&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Mo;if(Ca(t,e),Sa(e),o&512&&(yt||a===null||Jo(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Ad]||r[Xt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Zt(r,o,a),r[Xt]=e,zt(r),o=r;break e;case"link":var i=Zw("link","href",n).get(o+(a.href||""));if(i){for(var l=0;l<i.length;l++)if(r=i[l],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(l,1);break t}}r=n.createElement(o),Zt(r,o,a),n.head.appendChild(r);break;case"meta":if(i=Zw("meta","content",n).get(o+(a.content||""))){for(l=0;l<i.length;l++)if(r=i[l],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(l,1);break t}}r=n.createElement(o),Zt(r,o,a),n.head.appendChild(r);break;default:throw Error(Y(468,o))}r[Xt]=e,zt(r),o=r}e.stateNode=o}else Ww(n,e.type,e.stateNode);else e.stateNode=Yw(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?Ww(n,e.type,e.stateNode):Yw(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cg(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ca(t,e),Sa(e),o&512&&(yt||a===null||Jo(a,a.return)),a!==null&&o&4&&cg(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ca(t,e),Sa(e),o&512&&(yt||a===null||Jo(a,a.return)),e.flags&32){n=e.stateNode;try{Hl(n,"")}catch(h){He(e,e.return,h)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,cg(e,n,a!==null?a.memoizedProps:n)),o&1024&&(pg=!0);break;case 6:if(Ca(t,e),Sa(e),o&4){if(e.stateNode===null)throw Error(Y(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(h){He(e,e.return,h)}}break;case 3:if(Gc=null,n=Mo,Mo=bf(t.containerInfo),Ca(t,e),Mo=n,Sa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(h){He(e,e.return,h)}pg&&(pg=!1,e1(e));break;case 4:o=Mo,Mo=bf(e.stateNode.containerInfo),Ca(t,e),Sa(e),Mo=o;break;case 12:Ca(t,e),Sa(e);break;case 31:Ca(t,e),Sa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_c(e,o)));break;case 13:Ca(t,e),Sa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rf=Va()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_c(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=_n,d=yt;if(_n=u||n,yt=d||s,Ca(t,e),yt=d,_n=u,Sa(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||_n||yt||li(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{l=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(h){He(s,s.return,h)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(h){He(s,s.return,h)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?qw(p,!0):qw(s.stateNode,!1)}catch(h){He(s,s.return,h)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,_c(e,a))));break;case 19:Ca(t,e),Sa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_c(e,o)));break;case 30:break;case 21:break;default:Ca(t,e),Sa(e)}}function Sa(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(jy(o)){a=o;break}o=o.return}if(a==null)throw Error(Y(160));switch(a.tag){case 27:var n=a.stateNode,r=fg(e);uf(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(Hl(i,""),a.flags&=-33);var l=fg(e);uf(e,l,i);break;case 3:case 4:var s=a.stateNode.containerInfo,u=fg(e);eh(e,u,s);break;default:throw Error(Y(161))}}catch(d){He(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;e1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zy(e,t.alternate,t),t=t.sibling}function li(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Er(4,t,t.return),li(t);break;case 1:Jo(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gy(t,t.return,a),li(t);break;case 27:pd(t.stateNode);case 26:case 5:Jo(t,t.return),li(t);break;case 22:t.memoizedState===null&&li(t);break;case 30:li(t);break;default:li(t)}e=e.sibling}}function Ln(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Ln(n,r,a),Pd(4,r);break;case 1:if(Ln(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){He(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)$v(s[n],l)}catch(u){He(o,o.return,u)}}a&&i&64&&Vy(r),dd(r,r.return);break;case 27:Yy(r);case 26:case 5:Ln(n,r,a),a&&o===null&&i&4&&Xy(r),dd(r,r.return);break;case 12:Ln(n,r,a);break;case 31:Ln(n,r,a),a&&i&4&&$y(n,r);break;case 13:Ln(n,r,a),a&&i&4&&Qy(n,r);break;case 22:r.memoizedState===null&&Ln(n,r,a),dd(r,r.return);break;case 30:break;default:Ln(n,r,a)}t=t.sibling}}function Jh(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Rd(a))}function ex(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rd(e))}function Io(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)t1(e,t,a,o),t=t.sibling}function t1(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Io(e,t,a,o),n&2048&&Pd(9,t);break;case 1:Io(e,t,a,o);break;case 3:Io(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rd(e)));break;case 12:if(n&2048){Io(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,l=r.onPostCommit;typeof l=="function"&&l(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){He(t,t.return,s)}}else Io(e,t,a,o);break;case 31:Io(e,t,a,o);break;case 13:Io(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Io(e,t,a,o):ud(e,t):r._visibility&2?Io(e,t,a,o):(r._visibility|=2,hl(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Jh(i,t);break;case 24:Io(e,t,a,o),n&2048&&ex(t.alternate,t);break;default:Io(e,t,a,o)}}function hl(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,l=a,s=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:hl(r,i,l,s,n),Pd(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?hl(r,i,l,s,n):ud(r,i):(d._visibility|=2,hl(r,i,l,s,n)),n&&u&2048&&Jh(i.alternate,i);break;case 24:hl(r,i,l,s,n),n&&u&2048&&ex(i.alternate,i);break;default:hl(r,i,l,s,n)}t=t.sibling}}function ud(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:ud(a,o),n&2048&&Jh(o.alternate,o);break;case 24:ud(a,o),n&2048&&ex(o.alternate,o);break;default:ud(a,o)}t=t.sibling}}var ed=8192;function gl(e,t,a){if(e.subtreeFlags&ed)for(e=e.child;e!==null;)a1(e,t,a),e=e.sibling}function a1(e,t,a){switch(e.tag){case 26:gl(e,t,a),e.flags&ed&&e.memoizedState!==null&&L4(a,Mo,e.memoizedState,e.memoizedProps);break;case 5:gl(e,t,a);break;case 3:case 4:var o=Mo;Mo=bf(e.stateNode.containerInfo),gl(e,t,a),Mo=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ed,ed=16777216,gl(e,t,a),ed=o):gl(e,t,a));break;default:gl(e,t,a)}}function o1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ys(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Rt=o,r1(o,e)}o1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)n1(e),e=e.sibling}function n1(e){switch(e.tag){case 0:case 11:case 15:Ys(e),e.flags&2048&&Er(9,e,e.return);break;case 3:Ys(e);break;case 12:Ys(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qc(e)):Ys(e);break;default:Ys(e)}}function qc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Rt=o,r1(o,e)}o1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Er(8,t,t.return),qc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,qc(t));break;default:qc(t)}e=e.sibling}}function r1(e,t){for(;Rt!==null;){var a=Rt;switch(a.tag){case 0:case 11:case 15:Er(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Rd(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rt=o;else e:for(a=e;Rt!==null;){o=Rt;var n=o.sibling,r=o.return;if(Wy(o),o===a){Rt=null;break e}if(n!==null){n.return=r,Rt=n;break e}Rt=r}}}var UN={getCacheForType:function(e){var t=Yt(Ct),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Yt(Ct).controller.signal}},qN=typeof WeakMap=="function"?WeakMap:Map,Re=0,je=null,Le=null,_e=0,Be=0,Ha=null,hr=!1,Ql=!1,tx=!1,On=0,ct=0,Tr=0,fi=0,ax=0,qa=0,Vl=0,cd=null,ka=null,th=!1,Rf=0,i1=0,cf=1/0,ff=null,Sr=null,Nt=0,Lr=null,Gl=null,An=0,ah=0,oh=null,l1=null,fd=0,nh=null;function ja(){return(Re&2)!==0&&_e!==0?_e&-_e:fe.T!==null?nx():hv()}function s1(){if(qa===0)if((_e&536870912)===0||Ne){var e=hc;hc<<=1,(hc&3932160)===0&&(hc=262144),qa=e}else qa=536870912;return e=Za.current,e!==null&&(e.flags|=32),qa}function _a(e,t,a){(e===je&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Xl(e,0),xr(e,_e,qa,!1)),Td(e,a),((Re&2)===0||e!==je)&&(e===je&&((Re&2)===0&&(fi|=a),ct===4&&xr(e,_e,qa,!1)),an(e))}function d1(e,t,a){if((Re&6)!==0)throw Error(Y(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ed(e,t),n=o?XN(e,t):mg(e,t,!0),r=o;do{if(n===0){Ql&&!o&&xr(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!VN(a)){n=mg(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var l=e;n=cd;var s=l.current.memoizedState.isDehydrated;if(s&&(Xl(l,i).flags|=256),i=mg(l,i,!1),i!==2){if(tx&&!s){l.errorRecoveryDisabledLanes|=r,fi|=r,n=4;break e}r=ka,ka=n,r!==null&&(ka===null?ka=r:ka.push.apply(ka,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){Xl(e,0),xr(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:xr(o,t,qa,!hr);break e;case 2:ka=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(n=Rf+300-Va(),10<n)){if(xr(o,t,qa,!hr),Sf(o,0,!0)!==0)break e;An=t,o.timeoutHandle=N1(Iw.bind(null,o,a,ka,ff,th,t,qa,fi,Vl,hr,r,"Throttled",-0,0),n);break e}Iw(o,a,ka,ff,th,t,qa,fi,Vl,hr,r,null,-0,0)}}break}while(!0);an(e)}function Iw(e,t,a,o,n,r,i,l,s,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mn},a1(t,r,f);var h=(r&62914560)===r?Rf-Va():(r&4194048)===r?i1-Va():0;if(h=k4(f,h),h!==null){An=r,e.cancelPendingCommit=h(Nw.bind(null,e,t,r,a,o,n,i,l,s,d,f,null,c,p)),xr(e,r,i,!u);return}}Nw(e,t,r,a,o,n,i,l,s)}function VN(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ya(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t,a,o){t&=~ax,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-Xa(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&pv(e,a,t)}function zf(){return(Re&6)===0?(Od(0,!1),!1):!0}function ox(){if(Le!==null){if(Be===0)var e=Le.return;else e=Le,Nn=Ci=null,qh(e),Rl=null,vd=0,e=Le;for(;e!==null;)qy(e.alternate,e),e=e.return;Le=null}}function Xl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,l4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),An=0,ox(),je=e,Le=a=En(e.current,null),_e=t,Be=0,Ha=null,hr=!1,Ql=Ed(e,t),tx=!1,Vl=qa=ax=fi=Tr=ct=0,ka=cd=null,th=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-Xa(o),r=1<<n;t|=e[n],o&=~r}return On=t,If(),a}function u1(e,t){xe=null,fe.H=Cd,t===$l||t===Nf?(t=rw(),Be=3):t===zh?(t=rw(),Be=4):Be=t===$h?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ha=t,Le===null&&(ct=1,sf(e,po(t,e.current)))}function c1(){var e=Za.current;return e===null?!0:(_e&4194048)===_e?go===null:(_e&62914560)===_e||(_e&536870912)!==0?e===go:!1}function f1(){var e=fe.H;return fe.H=Cd,e===null?Cd:e}function p1(){var e=fe.A;return fe.A=UN,e}function pf(){ct=4,hr||(_e&4194048)!==_e&&Za.current!==null||(Ql=!0),(Tr&134217727)===0&&(fi&134217727)===0||je===null||xr(je,_e,qa,!1)}function mg(e,t,a){var o=Re;Re|=2;var n=f1(),r=p1();(je!==e||_e!==t)&&(ff=null,Xl(e,t)),t=!1;var i=ct;e:do try{if(Be!==0&&Le!==null){var l=Le,s=Ha;switch(Be){case 8:ox(),i=6;break e;case 3:case 2:case 9:case 6:Za.current===null&&(t=!0);var u=Be;if(Be=0,Ha=null,Nl(e,l,s,u),a&&Ql){i=0;break e}break;default:u=Be,Be=0,Ha=null,Nl(e,l,s,u)}}GN(),i=ct;break}catch(d){u1(e,d)}while(!0);return t&&e.shellSuspendCounter++,Nn=Ci=null,Re=o,fe.H=n,fe.A=r,Le===null&&(je=null,_e=0,If()),i}function GN(){for(;Le!==null;)m1(Le)}function XN(e,t){var a=Re;Re|=2;var o=f1(),n=p1();je!==e||_e!==t?(ff=null,cf=Va()+500,Xl(e,t)):Ql=Ed(e,t);e:do try{if(Be!==0&&Le!==null){t=Le;var r=Ha;t:switch(Be){case 1:Be=0,Ha=null,Nl(e,t,r,1);break;case 2:case 9:if(nw(r)){Be=0,Ha=null,Mw(t);break}t=function(){Be!==2&&Be!==9||je!==e||(Be=7),an(e)},r.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:nw(r)?(Be=0,Ha=null,Mw(t)):(Be=0,Ha=null,Nl(e,t,r,7));break;case 5:var i=null;switch(Le.tag){case 26:i=Le.memoizedState;case 5:case 27:var l=Le;if(i?R1(i):l.stateNode.complete){Be=0,Ha=null;var s=l.sibling;if(s!==null)Le=s;else{var u=l.return;u!==null?(Le=u,Pf(u)):Le=null}break t}}Be=0,Ha=null,Nl(e,t,r,5);break;case 6:Be=0,Ha=null,Nl(e,t,r,6);break;case 8:ox(),ct=6;break e;default:throw Error(Y(462))}}jN();break}catch(d){u1(e,d)}while(!0);return Nn=Ci=null,fe.H=o,fe.A=n,Re=a,Le!==null?0:(je=null,_e=0,If(),ct)}function jN(){for(;Le!==null&&!g3();)m1(Le)}function m1(e){var t=Uy(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?Pf(e):Le=t}function Mw(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=yw(a,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=yw(a,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:qh(t);default:qy(a,t),t=Le=qv(t,On),t=Uy(a,t,On)}e.memoizedProps=e.pendingProps,t===null?Pf(e):Le=t}function Nl(e,t,a,o){Nn=Ci=null,qh(t),Rl=null,vd=0;var n=t.return;try{if(RN(e,n,t,a,_e)){ct=1,sf(e,po(a,e.current)),Le=null;return}}catch(r){if(n!==null)throw Le=n,r;ct=1,sf(e,po(a,e.current)),Le=null;return}t.flags&32768?(Ne||o===1?e=!0:Ql||(_e&536870912)!==0?e=!1:(hr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Za.current,o!==null&&o.tag===13&&(o.flags|=16384))),g1(t,e)):Pf(t)}function Pf(e){var t=e;do{if((t.flags&32768)!==0){g1(t,hr);return}e=t.return;var a=ON(t.alternate,t,On);if(a!==null){Le=a;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);ct===0&&(ct=5)}function g1(e,t){do{var a=BN(e.alternate,e);if(a!==null){a.flags&=32767,Le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Le=e;return}Le=e=a}while(e!==null);ct=6,Le=null}function Nw(e,t,a,o,n,r,i,l,s){e.cancelPendingCommit=null;do Of();while(Nt!==0);if((Re&6)!==0)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=Mh,k3(e,a,r,i,l,s),e===je&&(Le=je=null,_e=0),Gl=t,Lr=e,An=a,ah=r,oh=n,l1=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KN(Kc,function(){return v1(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=fe.T,fe.T=null,n=ze.p,ze.p=2,i=Re,Re|=4;try{HN(e,t,a)}finally{Re=i,ze.p=n,fe.T=o}}Nt=1,h1(),x1(),b1()}}function h1(){if(Nt===1){Nt=0;var e=Lr,t=Gl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=fe.T,fe.T=null;var o=ze.p;ze.p=2;var n=Re;Re|=4;try{Jy(t,e);var r=sh,i=Rv(e.containerInfo),l=r.focusedElem,s=r.selectionRange;if(i!==l&&l&&l.ownerDocument&&Dv(l.ownerDocument.documentElement,l)){if(s!==null&&Ih(l)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(d,l.value.length);else{var f=l.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),h=l.textContent.length,w=Math.min(s.start,h),v=s.end===void 0?w:Math.min(s.end,h);!p.extend&&w>v&&(i=v,v=w,w=i);var g=$b(l,w),b=$b(l,v);if(g&&b&&(p.rangeCount!==1||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var m=f.createRange();m.setStart(g.node,g.offset),p.removeAllRanges(),w>v?(p.addRange(m),p.extend(b.node,b.offset)):(m.setEnd(b.node,b.offset),p.addRange(m))}}}}for(f=[],p=l;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var x=f[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}yf=!!lh,sh=lh=null}finally{Re=n,ze.p=o,fe.T=a}}e.current=t,Nt=2}}function x1(){if(Nt===2){Nt=0;var e=Lr,t=Gl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=fe.T,fe.T=null;var o=ze.p;ze.p=2;var n=Re;Re|=4;try{Zy(e,t.alternate,t)}finally{Re=n,ze.p=o,fe.T=a}}Nt=3}}function b1(){if(Nt===4||Nt===3){Nt=0,h3();var e=Lr,t=Gl,a=An,o=l1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Nt=5:(Nt=0,Gl=Lr=null,w1(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sr=null),vh(a),t=t.stateNode,Ga&&typeof Ga.onCommitFiberRoot=="function")try{Ga.onCommitFiberRoot(Nd,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=fe.T,n=ze.p,ze.p=2,fe.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var l=o[i];r(l.value,{componentStack:l.stack})}}finally{fe.T=t,ze.p=n}}(An&3)!==0&&Of(),an(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===nh?fd++:(fd=0,nh=e):fd=0,Od(0,!1)}}function w1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rd(t)))}function Of(){return h1(),x1(),b1(),v1()}function v1(){if(Nt!==5)return!1;var e=Lr,t=ah;ah=0;var a=vh(An),o=fe.T,n=ze.p;try{ze.p=32>a?32:a,fe.T=null,a=oh,oh=null;var r=Lr,i=An;if(Nt=0,Gl=Lr=null,An=0,(Re&6)!==0)throw Error(Y(331));var l=Re;if(Re|=4,n1(r.current),t1(r,r.current,i,a),Re=l,Od(0,!1),Ga&&typeof Ga.onPostCommitFiberRoot=="function")try{Ga.onPostCommitFiberRoot(Nd,r)}catch{}return!0}finally{ze.p=n,fe.T=o,w1(e,t)}}function Ew(e,t,a){t=po(a,t),t=$g(e.stateNode,t,2),e=Cr(e,t,2),e!==null&&(Td(e,2),an(e))}function He(e,t,a){if(e.tag===3)Ew(e,e,a);else for(;t!==null;){if(t.tag===3){Ew(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sr===null||!Sr.has(o))){e=po(a,e),a=zy(2),o=Cr(t,a,2),o!==null&&(Py(a,o,t,e),Td(o,2),an(o));break}}t=t.return}}function gg(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new qN;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(tx=!0,n.add(a),e=YN.bind(null,e,t,a),t.then(e,e))}function YN(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(_e&a)===a&&(ct===4||ct===3&&(_e&62914560)===_e&&300>Va()-Rf?(Re&2)===0&&Xl(e,0):ax|=a,Vl===_e&&(Vl=0)),an(e)}function y1(e,t){t===0&&(t=fv()),e=yi(e,t),e!==null&&(Td(e,t),an(e))}function ZN(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),y1(e,a)}function WN(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(Y(314))}o!==null&&o.delete(t),y1(e,a)}function KN(e,t){return bh(e,t)}var mf=null,xl=null,rh=!1,gf=!1,hg=!1,br=0;function an(e){e!==xl&&e.next===null&&(xl===null?mf=xl=e:xl=xl.next=e),gf=!0,rh||(rh=!0,QN())}function Od(e,t){if(!hg&&gf){hg=!0;do for(var a=!1,o=mf;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,l=o.pingedLanes;r=(1<<31-Xa(42|e)+1)-1,r&=n&~(i&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Tw(o,r))}else r=_e,r=Sf(o,o===je?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Ed(o,r)||(a=!0,Tw(o,r));o=o.next}while(a);hg=!1}}function $N(){C1()}function C1(){gf=rh=!1;var e=0;br!==0&&i4()&&(e=br);for(var t=Va(),a=null,o=mf;o!==null;){var n=o.next,r=S1(o,t);r===0?(o.next=null,a===null?mf=n:a.next=n,n===null&&(xl=a)):(a=o,(e!==0||(r&3)!==0)&&(gf=!0)),o=n}Nt!==0&&Nt!==5||Od(e,!1),br!==0&&(br=0)}function S1(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-Xa(r),l=1<<i,s=n[i];s===-1?((l&a)===0||(l&o)!==0)&&(n[i]=L3(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}if(t=je,a=_e,a=Sf(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xm(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ed(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Xm(o),vh(a)){case 2:case 8:a=uv;break;case 32:a=Kc;break;case 268435456:a=cv;break;default:a=Kc}return o=L1.bind(null,e),a=bh(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Xm(o),e.callbackPriority=2,e.callbackNode=null,2}function L1(e,t){if(Nt!==0&&Nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Of()&&e.callbackNode!==a)return null;var o=_e;return o=Sf(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(d1(e,o,t),S1(e,Va()),e.callbackNode!=null&&e.callbackNode===a?L1.bind(null,e):null)}function Tw(e,t){if(Of())return null;d1(e,t,!0)}function QN(){s4(function(){(Re&6)!==0?bh(dv,$N):C1()})}function nx(){if(br===0){var e=Fl;e===0&&(e=gc,gc<<=1,(gc&261888)===0&&(gc=256)),br=e}return br}function Aw(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dc(""+e)}function Dw(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function JN(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=Aw((n[Ia]||null).action),i=o.submitter;i&&(t=(t=i[Ia]||null)?Aw(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var l=new Lf("action","action",null,o,n);e.push({event:l,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(br!==0){var s=i?Dw(n,i):new FormData(n);Wg(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(l.preventDefault(),s=i?Dw(n,i):new FormData(n),Wg(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Ic=0;Ic<Og.length;Ic++)Mc=Og[Ic],Rw=Mc.toLowerCase(),zw=Mc[0].toUpperCase()+Mc.slice(1),No(Rw,"on"+zw);var Mc,Rw,zw,Ic;No(Pv,"onAnimationEnd");No(Ov,"onAnimationIteration");No(Bv,"onAnimationStart");No("dblclick","onDoubleClick");No("focusin","onFocus");No("focusout","onBlur");No(xN,"onTransitionRun");No(bN,"onTransitionStart");No(wN,"onTransitionCancel");No(Hv,"onTransitionEnd");Bl("onMouseEnter",["mouseout","mouseover"]);Bl("onMouseLeave",["mouseout","mouseover"]);Bl("onPointerEnter",["pointerout","pointerover"]);Bl("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sd));function k1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){Qc(d)}n.currentTarget=null,r=s}else for(i=0;i<o.length;i++){if(l=o[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){Qc(d)}n.currentTarget=null,r=s}}}}function Se(e,t){var a=t[Ng];a===void 0&&(a=t[Ng]=new Set);var o=e+"__bubble";a.has(o)||(_1(t,e,2,!1),a.add(o))}function xg(e,t,a){var o=0;t&&(o|=4),_1(a,e,o,t)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function rx(e){if(!e[Nc]){e[Nc]=!0,xv.forEach(function(a){a!=="selectionchange"&&(e4.has(a)||xg(a,!1,e),xg(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nc]||(t[Nc]=!0,xg("selectionchange",!1,t))}}function _1(e,t,a,o){switch(H1(t)){case 2:var n=M4;break;case 8:n=N4;break;default:n=dx}a=n.bind(null,t,a,e),n=void 0,!Rg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function bg(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===n)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;l!==null;){if(i=vl(l),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){o=r=i;continue e}l=l.parentNode}}o=o.return}kv(function(){var u=r,d=Sh(a),f=[];e:{var c=Fv.get(e);if(c!==void 0){var p=Lf,h=e;switch(e){case"keypress":if(zc(a)===0)break e;case"keydown":case"keyup":p=W3;break;case"focusin":h="focus",p=Km;break;case"focusout":h="blur",p=Km;break;case"beforeblur":case"afterblur":p=Km;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q3;break;case Pv:case Ov:case Bv:p=F3;break;case Hv:p=eN;break;case"scroll":case"scrollend":p=z3;break;case"wheel":p=aN;break;case"copy":case"cut":case"paste":p=q3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gb;break;case"toggle":case"beforetoggle":p=nN}var w=(t&4)!==0,v=!w&&(e==="scroll"||e==="scrollend"),g=w?c!==null?c+"Capture":null:c;w=[];for(var b=u,m;b!==null;){var x=b;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||g===null||(x=gd(b,g),x!=null&&w.push(Ld(b,x,m))),v)break;b=b.return}0<w.length&&(c=new p(c,h,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Dg&&(h=a.relatedTarget||a.fromElement)&&(vl(h)||h[Zl]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(h=a.relatedTarget||a.toElement,p=u,h=h?vl(h):null,h!==null&&(v=Md(h),w=h.tag,h!==v||w!==5&&w!==27&&w!==6)&&(h=null)):(p=null,h=u),p!==h)){if(w=qb,x="onMouseLeave",g="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=Gb,x="onPointerLeave",g="onPointerEnter",b="pointer"),v=p==null?c:Qs(p),m=h==null?c:Qs(h),c=new w(x,b+"leave",p,a,d),c.target=v,c.relatedTarget=m,x=null,vl(d)===u&&(w=new w(g,b+"enter",h,a,d),w.target=m,w.relatedTarget=v,x=w),v=x,p&&h)t:{for(w=t4,g=p,b=h,m=0,x=g;x;x=w(x))m++;x=0;for(var S=b;S;S=w(S))x++;for(;0<m-x;)g=w(g),m--;for(;0<x-m;)b=w(b),x--;for(;m--;){if(g===b||b!==null&&g===b.alternate){w=g;break t}g=w(g),b=w(b)}w=null}else w=null;p!==null&&Pw(f,c,p,w,!1),h!==null&&v!==null&&Pw(f,v,h,w,!0)}}e:{if(c=u?Qs(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var y=Zb;else if(Yb(c))if(Tv)y=mN;else{y=fN;var C=cN}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Ch(u.elementType)&&(y=Zb):y=pN;if(y&&(y=y(e,u))){Ev(f,y,a,d);break e}C&&C(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Ag(c,"number",c.value)}switch(C=u?Qs(u):window,e){case"focusin":(Yb(C)||C.contentEditable==="true")&&(Sl=C,zg=u,od=null);break;case"focusout":od=zg=Sl=null;break;case"mousedown":Pg=!0;break;case"contextmenu":case"mouseup":case"dragend":Pg=!1,Qb(f,a,d);break;case"selectionchange":if(hN)break;case"keydown":case"keyup":Qb(f,a,d)}var k;if(_h)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Cl?Mv(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Iv&&a.locale!=="ko"&&(Cl||_!=="onCompositionStart"?_==="onCompositionEnd"&&Cl&&(k=_v()):(gr=d,Lh="value"in gr?gr.value:gr.textContent,Cl=!0)),C=hf(u,_),0<C.length&&(_=new Vb(_,e,null,a,d),f.push({event:_,listeners:C}),k?_.data=k:(k=Nv(a),k!==null&&(_.data=k)))),(k=iN?lN(e,a):sN(e,a))&&(_=hf(u,"onBeforeInput"),0<_.length&&(C=new Vb("onBeforeInput","beforeinput",null,a,d),f.push({event:C,listeners:_}),C.data=k)),JN(f,e,u,a,d)}k1(f,t)})}function Ld(e,t,a){return{instance:e,listener:t,currentTarget:a}}function hf(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=gd(e,a),n!=null&&o.unshift(Ld(e,n,r)),n=gd(e,t),n!=null&&o.push(Ld(e,n,r))),e.tag===3)return o;e=e.return}return[]}function t4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pw(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var l=a,s=l.alternate,u=l.stateNode;if(l=l.tag,s!==null&&s===o)break;l!==5&&l!==26&&l!==27||u===null||(s=u,n?(u=gd(a,r),u!=null&&i.unshift(Ld(a,u,s))):n||(u=gd(a,r),u!=null&&i.push(Ld(a,u,s)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var a4=/\r\n?/g,o4=/\u0000|\uFFFD/g;function Ow(e){return(typeof e=="string"?e:""+e).replace(a4,`
`).replace(o4,"")}function I1(e,t){return t=Ow(t),Ow(e)===t}function Ve(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Hl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Hl(e,""+o);break;case"className":bc(e,"class",o);break;case"tabIndex":bc(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":bc(e,a,o);break;case"style":Lv(e,o,r);break;case"data":if(t!=="object"){bc(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dc(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ve(e,t,"name",n.name,n,null),Ve(e,t,"formEncType",n.formEncType,n,null),Ve(e,t,"formMethod",n.formMethod,n,null),Ve(e,t,"formTarget",n.formTarget,n,null)):(Ve(e,t,"encType",n.encType,n,null),Ve(e,t,"method",n.method,n,null),Ve(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dc(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Mn);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(Y(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(Y(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Dc(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ac(e,"popover",o);break;case"xlinkActuate":vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":vn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":vn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":vn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":vn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ac(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=D3.get(a)||a,Ac(e,a,o))}}function ih(e,t,a,o,n,r){switch(a){case"style":Lv(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(Y(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(Y(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hl(e,o):(typeof o=="number"||typeof o=="bigint")&&Hl(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Ia]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ac(e,a,o)}}}function Zt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:Ve(e,t,r,i,a,null)}}n&&Ve(e,t,"srcSet",a.srcSet,a,null),o&&Ve(e,t,"src",a.src,a,null);return;case"input":Se("invalid",e);var l=r=i=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Y(137,t));break;default:Ve(e,t,o,d,a,null)}}yv(e,r,l,s,u,i,n,!1);return;case"select":Se("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(l=a[n],l!=null))switch(n){case"value":r=l;break;case"defaultValue":i=l;break;case"multiple":o=l;default:Ve(e,t,n,l,a,null)}t=r,a=i,e.multiple=!!o,t!=null?Tl(e,!!o,t,!1):a!=null&&Tl(e,!!o,a,!0);return;case"textarea":Se("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(l=a[i],l!=null))switch(i){case"value":o=l;break;case"defaultValue":n=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(Y(91));break;default:Ve(e,t,i,l,a,null)}Sv(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,t,s,o,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Sd.length;o++)Se(Sd[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:Ve(e,t,u,o,a,null)}return;default:if(Ch(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&ih(e,t,d,o,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null&&Ve(e,t,l,o,a,null))}function n4(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,l=null,s=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Ve(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==f&&Ve(e,t,c,p,o,f)}}Tg(e,i,l,s,u,d,r,n);return;case"select":p=i=l=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Ve(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":l=r;break;case"multiple":i=r;default:r!==s&&Ve(e,t,n,r,o,s)}t=l,a=i,o=p,c!=null?Tl(e,!!a,c,!1):!!o!=!!a&&(t!=null?Tl(e,!!a,t,!0):Tl(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(l in a)if(n=a[l],a.hasOwnProperty(l)&&n!=null&&!o.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Ve(e,t,l,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(Y(91));break;default:n!==r&&Ve(e,t,i,n,o,r)}Cv(e,c,p);return;case"option":for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&(h==="selected"?e.selected=!1:Ve(e,t,h,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Ve(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&Ve(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(Y(137,t));break;default:Ve(e,t,u,c,o,p)}return;default:if(Ch(t)){for(var v in a)c=a[v],a.hasOwnProperty(v)&&c!==void 0&&!o.hasOwnProperty(v)&&ih(e,t,v,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||ih(e,t,d,c,o,p);return}}for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&Ve(e,t,g,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Ve(e,t,f,c,o,p)}function Bw(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function r4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,l=n.duration;if(r&&l&&Bw(i)){for(i=0,l=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>l)break;var d=s.transferSize,f=s.initiatorType;d&&Bw(f)&&(s=s.responseEnd,i+=d*(s<l?1:(l-u)/(s-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lh=null,sh=null;function xf(e){return e.nodeType===9?e:e.ownerDocument}function Hw(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wg=null;function i4(){var e=window.event;return e&&e.type==="popstate"?e===wg?!1:(wg=e,!0):(wg=null,!1)}var N1=typeof setTimeout=="function"?setTimeout:void 0,l4=typeof clearTimeout=="function"?clearTimeout:void 0,Fw=typeof Promise=="function"?Promise:void 0,s4=typeof queueMicrotask=="function"?queueMicrotask:typeof Fw<"u"?function(e){return Fw.resolve(null).then(e).catch(d4)}:N1;function d4(e){setTimeout(function(){throw e})}function Dr(e){return e==="head"}function Uw(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Yl(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")pd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pd(a);for(var r=a.firstChild;r;){var i=r.nextSibling,l=r.nodeName;r[Ad]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&pd(e.ownerDocument.body);a=n}while(a);Yl(t)}function qw(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function uh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),yh(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function u4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ad])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ho(e.nextSibling),e===null)break}return null}function c4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ho(e.nextSibling),e===null))return null;return e}function E1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ho(e.nextSibling),e===null))return null;return e}function ch(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function f4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ho(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ph=null;function Vw(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ho(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Gw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function T1(e,t,a){switch(t=xf(a),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function pd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yh(e)}var xo=new Map,Xw=new Set;function bf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Bn=ze.d;ze.d={f:p4,r:m4,D:g4,C:h4,L:x4,m:b4,X:v4,S:w4,M:y4};function p4(){var e=Bn.f(),t=zf();return e||t}function m4(e){var t=Wl(e);t!==null&&t.tag===5&&t.type==="form"?Ly(t):Bn.r(e)}var Jl=typeof document>"u"?null:document;function A1(e,t,a){var o=Jl;if(o&&typeof t=="string"&&t){var n=fo(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Xw.has(n)||(Xw.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Zt(t,"link",e),zt(t),o.head.appendChild(t)))}}function g4(e){Bn.D(e),A1("dns-prefetch",e,null)}function h4(e,t){Bn.C(e,t),A1("preconnect",e,t)}function x4(e,t,a){Bn.L(e,t,a);var o=Jl;if(o&&e&&t){var n='link[rel="preload"][as="'+fo(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+fo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+fo(a.imageSizes)+'"]')):n+='[href="'+fo(e)+'"]';var r=n;switch(t){case"style":r=jl(e);break;case"script":r=es(e)}xo.has(r)||(e=nt({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xo.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Bd(r))||t==="script"&&o.querySelector(Hd(r))||(t=o.createElement("link"),Zt(t,"link",e),zt(t),o.head.appendChild(t)))}}function b4(e,t){Bn.m(e,t);var a=Jl;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+fo(o)+'"][href="'+fo(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=es(e)}if(!xo.has(r)&&(e=nt({rel:"modulepreload",href:e},t),xo.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Hd(r)))return}o=a.createElement("link"),Zt(o,"link",e),zt(o),a.head.appendChild(o)}}}function w4(e,t,a){Bn.S(e,t,a);var o=Jl;if(o&&e){var n=El(o).hoistableStyles,r=jl(e);t=t||"default";var i=n.get(r);if(!i){var l={loading:0,preload:null};if(i=o.querySelector(Bd(r)))l.loading=5;else{e=nt({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xo.get(r))&&ix(e,a);var s=i=o.createElement("link");zt(s),Zt(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Vc(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:l},n.set(r,i)}}}function v4(e,t){Bn.X(e,t);var a=Jl;if(a&&e){var o=El(a).hoistableScripts,n=es(e),r=o.get(n);r||(r=a.querySelector(Hd(n)),r||(e=nt({src:e,async:!0},t),(t=xo.get(n))&&lx(e,t),r=a.createElement("script"),zt(r),Zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function y4(e,t){Bn.M(e,t);var a=Jl;if(a&&e){var o=El(a).hoistableScripts,n=es(e),r=o.get(n);r||(r=a.querySelector(Hd(n)),r||(e=nt({src:e,async:!0,type:"module"},t),(t=xo.get(n))&&lx(e,t),r=a.createElement("script"),zt(r),Zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function jw(e,t,a,o){var n=(n=wr.current)?bf(n):null;if(!n)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=jl(a.href),a=El(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jl(a.href);var r=El(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Bd(e)))&&!r._p&&(i.instance=r,i.state.loading=5),xo.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xo.set(e,a),r||C4(n,e,a,i.state))),t&&o===null)throw Error(Y(528,""));return i}if(t&&o!==null)throw Error(Y(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=es(a),a=El(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function jl(e){return'href="'+fo(e)+'"'}function Bd(e){return'link[rel="stylesheet"]['+e+"]"}function D1(e){return nt({},e,{"data-precedence":e.precedence,precedence:null})}function C4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Zt(t,"link",a),zt(t),e.head.appendChild(t))}function es(e){return'[src="'+fo(e)+'"]'}function Hd(e){return"script[async]"+e}function Yw(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+fo(a.href)+'"]');if(o)return t.instance=o,zt(o),o;var n=nt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),zt(o),Zt(o,"style",n),Vc(o,a.precedence,e),t.instance=o;case"stylesheet":n=jl(a.href);var r=e.querySelector(Bd(n));if(r)return t.state.loading|=4,t.instance=r,zt(r),r;o=D1(a),(n=xo.get(n))&&ix(o,n),r=(e.ownerDocument||e).createElement("link"),zt(r);var i=r;return i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),Zt(r,"link",o),t.state.loading|=4,Vc(r,a.precedence,e),t.instance=r;case"script":return r=es(a.src),(n=e.querySelector(Hd(r)))?(t.instance=n,zt(n),n):(o=a,(n=xo.get(r))&&(o=nt({},a),lx(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),zt(n),Zt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Vc(o,a.precedence,e));return t.instance}function Vc(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var l=o[i];if(l.dataset.precedence===t)r=l;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ix(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gc=null;function Zw(e,t,a){if(Gc===null){var o=new Map,n=Gc=new Map;n.set(a,o)}else n=Gc,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Ad]||r[Xt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var l=o.get(i);l?l.push(r):o.set(i,[r])}}return o}function Ww(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function S4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function R1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function L4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=jl(o.href),r=t.querySelector(Bd(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wf.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,zt(r);return}r=t.ownerDocument||t,o=D1(o),(n=xo.get(n))&&ix(o,n),r=r.createElement("link"),zt(r);var i=r;i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),Zt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wf.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var vg=0;function k4(e,t){return e.stylesheets&&e.count===0&&Xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&vg===0&&(vg=62500*r4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>vg?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function wf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vf=null;function Xc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vf=new Map,t.forEach(_4,e),vf=null,wf.call(e))}function _4(e,t){if(!(t.state.loading&4)){var a=vf.get(e);if(a)var o=a.get(null);else{a=new Map,vf.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=wf.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var kd={$$typeof:In,Provider:null,Consumer:null,_currentValue:si,_currentValue2:si,_threadCount:0};function I4(e,t,a,o,n,r,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jm(0),this.hiddenUpdates=jm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function z1(e,t,a,o,n,r,i,l,s,u,d,f){return e=new I4(e,t,a,i,s,u,d,f,l),t=1,r===!0&&(t|=24),r=Ua(3,null,null,t),e.current=r,r.stateNode=e,t=Dh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Ph(r),e}function P1(e){return e?(e=_l,e):_l}function O1(e,t,a,o,n,r){n=P1(n),o.context===null?o.context=n:o.pendingContext=n,o=yr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Cr(e,o,t),a!==null&&(_a(a,e,t),rd(a,e,t))}function Kw(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function sx(e,t){Kw(e,t),(e=e.alternate)&&Kw(e,t)}function B1(e){if(e.tag===13||e.tag===31){var t=yi(e,67108864);t!==null&&_a(t,e,67108864),sx(e,67108864)}}function $w(e){if(e.tag===13||e.tag===31){var t=ja();t=wh(t);var a=yi(e,t);a!==null&&_a(a,e,t),sx(e,t)}}var yf=!0;function M4(e,t,a,o){var n=fe.T;fe.T=null;var r=ze.p;try{ze.p=2,dx(e,t,a,o)}finally{ze.p=r,fe.T=n}}function N4(e,t,a,o){var n=fe.T;fe.T=null;var r=ze.p;try{ze.p=8,dx(e,t,a,o)}finally{ze.p=r,fe.T=n}}function dx(e,t,a,o){if(yf){var n=mh(o);if(n===null)bg(e,t,o,Cf,a),Qw(e,o);else if(T4(n,e,t,a,o))o.stopPropagation();else if(Qw(e,o),t&4&&-1<E4.indexOf(e)){for(;n!==null;){var r=Wl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=ri(r.pendingLanes);if(i!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-Xa(i);l.entanglements[1]|=s,i&=~s}an(r),(Re&6)===0&&(cf=Va()+500,Od(0,!1))}}break;case 31:case 13:l=yi(r,2),l!==null&&_a(l,r,2),zf(),sx(r,2)}if(r=mh(o),r===null&&bg(e,t,o,Cf,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else bg(e,t,o,null,a)}}function mh(e){return e=Sh(e),ux(e)}var Cf=null;function ux(e){if(Cf=null,e=vl(e),e!==null){var t=Md(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=nv(t),e!==null)return e;e=null}else if(a===31){if(e=rv(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cf=e,null}function H1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(x3()){case dv:return 2;case uv:return 8;case Kc:case b3:return 32;case cv:return 268435456;default:return 32}default:return 32}}var gh=!1,kr=null,_r=null,Ir=null,_d=new Map,Id=new Map,pr=[],E4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qw(e,t){switch(e){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":_d.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Id.delete(t.pointerId)}}function Zs(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Wl(t),t!==null&&B1(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function T4(e,t,a,o,n){switch(t){case"focusin":return kr=Zs(kr,e,t,a,o,n),!0;case"dragenter":return _r=Zs(_r,e,t,a,o,n),!0;case"mouseover":return Ir=Zs(Ir,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return _d.set(r,Zs(_d.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Id.set(r,Zs(Id.get(r)||null,e,t,a,o,n)),!0}return!1}function F1(e){var t=vl(e.target);if(t!==null){var a=Md(t);if(a!==null){if(t=a.tag,t===13){if(t=nv(a),t!==null){e.blockedOn=t,zb(e.priority,function(){$w(a)});return}}else if(t===31){if(t=rv(a),t!==null){e.blockedOn=t,zb(e.priority,function(){$w(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Dg=o,a.target.dispatchEvent(o),Dg=null}else return t=Wl(a),t!==null&&B1(t),e.blockedOn=a,!1;t.shift()}return!0}function Jw(e,t,a){jc(e)&&a.delete(t)}function A4(){gh=!1,kr!==null&&jc(kr)&&(kr=null),_r!==null&&jc(_r)&&(_r=null),Ir!==null&&jc(Ir)&&(Ir=null),_d.forEach(Jw),Id.forEach(Jw)}function Ec(e,t){e.blockedOn===t&&(e.blockedOn=null,gh||(gh=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,A4)))}var Tc=null;function ev(e){Tc!==e&&(Tc=e,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(ux(o||a)===null)continue;break}var r=Wl(a);r!==null&&(e.splice(t,3),t-=3,Wg(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Yl(e){function t(s){return Ec(s,e)}kr!==null&&Ec(kr,e),_r!==null&&Ec(_r,e),Ir!==null&&Ec(Ir,e),_d.forEach(t),Id.forEach(t);for(var a=0;a<pr.length;a++){var o=pr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)F1(a),a.blockedOn===null&&pr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[Ia]||null;if(typeof r=="function")i||ev(a);else if(i){var l=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[Ia]||null)l=i.formAction;else if(ux(n)!==null)continue}else l=i.action;typeof l=="function"?a[o+1]=l:(a.splice(o,3),o-=3),ev(a)}}}function U1(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cx(e){this._internalRoot=e}Bf.prototype.render=cx.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var a=t.current,o=ja();O1(a,o,e,t,null,null)};Bf.prototype.unmount=cx.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;O1(e.current,2,null,e,null,null),zf(),t[Zl]=null}};function Bf(e){this._internalRoot=e}Bf.prototype.unstable_scheduleHydration=function(e){if(e){var t=hv();e={blockedOn:null,target:e,priority:t};for(var a=0;a<pr.length&&t!==0&&t<pr[a].priority;a++);pr.splice(a,0,e),a===0&&F1(e)}};var tv=av.version;if(tv!=="19.2.8")throw Error(Y(527,tv,"19.2.8"));ze.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=u3(t),e=e!==null?iv(e):null,e=e===null?null:e.stateNode,e};var D4={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:fe,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ws.isDisabled&&Ws.supportsFiber))try{Nd=Ws.inject(D4),Ga=Ws}catch{}var Ws;Hf.createRoot=function(e,t){if(!ov(e))throw Error(Y(299));var a=!1,o="",n=Ay,r=Dy,i=Ry;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=z1(e,1,!1,null,null,a,o,null,n,r,i,U1),e[Zl]=t.current,rx(e),new cx(t)};Hf.hydrateRoot=function(e,t,a){if(!ov(e))throw Error(Y(299));var o=!1,n="",r=Ay,i=Dy,l=Ry,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=z1(e,1,!0,t,a??null,o,n,s,r,i,l,U1),t.context=P1(null),a=t.current,o=ja(),o=wh(o),n=yr(o),n.callback=null,Cr(a,n,o),a=o,t.current.lanes=a,Td(t,a),an(t),e[Zl]=t.current,rx(e),new Bf(t)};Hf.version="19.2.8"});var fx=ya((AP,G1)=>{"use strict";function V1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V1)}catch(e){console.error(e)}}V1(),G1.exports=q1()});var j1=ya(Ff=>{"use strict";var R4=Symbol.for("react.transitional.element"),z4=Symbol.for("react.fragment");function X1(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:R4,type:e,key:o,ref:t!==void 0?t:null,props:a}}Ff.Fragment=z4;Ff.jsx=X1;Ff.jsxs=X1});var X=ya((RP,Y1)=>{"use strict";Y1.exports=j1()});var TS=ya(ES=>{"use strict";var hs=Q();function NT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ET=typeof Object.is=="function"?Object.is:NT,TT=hs.useState,AT=hs.useEffect,DT=hs.useLayoutEffect,RT=hs.useDebugValue;function zT(e,t){var a=t(),o=TT({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return DT(function(){n.value=a,n.getSnapshot=t,t0(n)&&r({inst:n})},[e,a,t]),AT(function(){return t0(n)&&r({inst:n}),e(function(){t0(n)&&r({inst:n})})},[e]),RT(a),a}function t0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ET(e,a)}catch{return!0}}function PT(e,t){return t()}var OT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?PT:zT;ES.useSyncExternalStore=hs.useSyncExternalStore!==void 0?hs.useSyncExternalStore:OT});var DS=ya((IU,AS)=>{"use strict";AS.exports=TS()});var zS=ya(RS=>{"use strict";var Tp=Q(),BT=DS();function HT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var FT=typeof Object.is=="function"?Object.is:HT,UT=BT.useSyncExternalStore,qT=Tp.useRef,VT=Tp.useEffect,GT=Tp.useMemo,XT=Tp.useDebugValue;RS.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=qT(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=GT(function(){function s(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var h=i.value;if(n(h,p))return f=h}return f=p}if(h=f,FT(d,p))return h;var w=o(p);return n!==void 0&&n(h,w)?(d=p,h):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var l=UT(e,r[0],r[1]);return VT(function(){i.hasValue=!0,i.value=l},[l]),XT(l),l}});var OS=ya((NU,PS)=>{"use strict";PS.exports=zS()});var SP={};UM(SP,{mountCanvas:()=>vP,unmountCanvas:()=>CP,updateCanvas:()=>yP});var BI=E(fx(),1);var Os=E(Q(),1);var Xe=E(Q(),1);var q=E(X()),V=E(Q());function ft(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=ft(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var P4={value:()=>{}};function W1(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new Uf(a)}function Uf(e){this._=e}function O4(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}Uf.prototype=W1.prototype={constructor:Uf,on:function(e,t){var a=this._,o=O4(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=B4(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=Z1(a[n],e.name,t);else if(t==null)for(n in a)a[n]=Z1(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new Uf(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function B4(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function Z1(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=P4,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Si=W1;var qf="http://www.w3.org/1999/xhtml",px={svg:"http://www.w3.org/2000/svg",xhtml:qf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Hn(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),px.hasOwnProperty(t)?{space:px[t],local:e}:e}function H4(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===qf&&t.documentElement.namespaceURI===qf?t.createElement(e):t.createElementNS(a,e)}}function F4(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Vf(e){var t=Hn(e);return(t.local?F4:H4)(t)}function U4(){}function Li(e){return e==null?U4:function(){return this.querySelector(e)}}function K1(e){typeof e!="function"&&(e=Li(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=new Array(i),s,u,d=0;d<i;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),l[d]=u);return new pt(o,this._parents)}function mx(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function q4(){return[]}function Fd(e){return e==null?q4:function(){return this.querySelectorAll(e)}}function V4(e){return function(){return mx(e.apply(this,arguments))}}function $1(e){typeof e=="function"?e=V4(e):e=Fd(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&(o.push(e.call(s,s.__data__,u,i)),n.push(s));return new pt(o,n)}function Ud(e){return function(){return this.matches(e)}}function Gf(e){return function(t){return t.matches(e)}}var G4=Array.prototype.find;function X4(e){return function(){return G4.call(this.children,e)}}function j4(){return this.firstElementChild}function Q1(e){return this.select(e==null?j4:X4(typeof e=="function"?e:Gf(e)))}var Y4=Array.prototype.filter;function Z4(){return Array.from(this.children)}function W4(e){return function(){return Y4.call(this.children,e)}}function J1(e){return this.selectAll(e==null?Z4:W4(typeof e=="function"?e:Gf(e)))}function e2(e){typeof e!="function"&&(e=Ud(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new pt(o,this._parents)}function Xf(e){return new Array(e.length)}function t2(){return new pt(this._enter||this._groups.map(Xf),this._parents)}function qd(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}qd.prototype={constructor:qd,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function a2(e){return function(){return e}}function K4(e,t,a,o,n,r){for(var i=0,l,s=t.length,u=r.length;i<u;++i)(l=t[i])?(l.__data__=r[i],o[i]=l):a[i]=new qd(e,r[i]);for(;i<s;++i)(l=t[i])&&(n[i]=l)}function $4(e,t,a,o,n,r,i){var l,s,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(l=0;l<d;++l)(s=t[l])&&(c[l]=p=i.call(s,s.__data__,l,t)+"",u.has(p)?n[l]=s:u.set(p,s));for(l=0;l<f;++l)p=i.call(e,r[l],l,r)+"",(s=u.get(p))?(o[l]=s,s.__data__=r[l],u.delete(p)):a[l]=new qd(e,r[l]);for(l=0;l<d;++l)(s=t[l])&&u.get(c[l])===s&&(n[l]=s)}function Q4(e){return e.__data__}function o2(e,t){if(!arguments.length)return Array.from(this,Q4);var a=t?$4:K4,o=this._parents,n=this._groups;typeof e!="function"&&(e=a2(e));for(var r=n.length,i=new Array(r),l=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=J4(e.call(d,d&&d.__data__,u,o)),h=p.length,w=l[u]=new Array(h),v=i[u]=new Array(h),g=s[u]=new Array(c);a(d,f,w,v,g,p,t);for(var b=0,m=0,x,S;b<h;++b)if(x=w[b]){for(b>=m&&(m=b+1);!(S=v[m])&&++m<h;);x._next=S||null}}return i=new pt(i,o),i._enter=l,i._exit=s,i}function J4(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function n2(){return new pt(this._exit||this._groups.map(Xf),this._parents)}function r2(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function i2(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),l=new Array(n),s=0;s<i;++s)for(var u=a[s],d=o[s],f=u.length,c=l[s]=new Array(f),p,h=0;h<f;++h)(p=u[h]||d[h])&&(c[h]=p);for(;s<n;++s)l[s]=a[s];return new pt(l,this._parents)}function l2(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function s2(e){e||(e=eE);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],l=i.length,s=n[r]=new Array(l),u,d=0;d<l;++d)(u=i[d])&&(s[d]=u);s.sort(t)}return new pt(n,this._parents).order()}function eE(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function d2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function u2(){return Array.from(this)}function c2(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function f2(){let e=0;for(let t of this)++e;return e}function p2(){return!this.node()}function m2(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,l;r<i;++r)(l=n[r])&&e.call(l,l.__data__,r,n);return this}function tE(e){return function(){this.removeAttribute(e)}}function aE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function oE(e,t){return function(){this.setAttribute(e,t)}}function nE(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function rE(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function iE(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function g2(e,t){var a=Hn(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?aE:tE:typeof t=="function"?a.local?iE:rE:a.local?nE:oE)(a,t))}function jf(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function lE(e){return function(){this.style.removeProperty(e)}}function sE(e,t,a){return function(){this.style.setProperty(e,t,a)}}function dE(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function h2(e,t,a){return arguments.length>1?this.each((t==null?lE:typeof t=="function"?dE:sE)(e,t,a??"")):Rr(this.node(),e)}function Rr(e,t){return e.style.getPropertyValue(t)||jf(e).getComputedStyle(e,null).getPropertyValue(t)}function uE(e){return function(){delete this[e]}}function cE(e,t){return function(){this[e]=t}}function fE(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function x2(e,t){return arguments.length>1?this.each((t==null?uE:typeof t=="function"?fE:cE)(e,t)):this.node()[e]}function b2(e){return e.trim().split(/^|\s+/)}function gx(e){return e.classList||new w2(e)}function w2(e){this._node=e,this._names=b2(e.getAttribute("class")||"")}w2.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function v2(e,t){for(var a=gx(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function y2(e,t){for(var a=gx(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function pE(e){return function(){v2(this,e)}}function mE(e){return function(){y2(this,e)}}function gE(e,t){return function(){(t.apply(this,arguments)?v2:y2)(this,e)}}function C2(e,t){var a=b2(e+"");if(arguments.length<2){for(var o=gx(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?gE:t?pE:mE)(a,t))}function hE(){this.textContent=""}function xE(e){return function(){this.textContent=e}}function bE(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function S2(e){return arguments.length?this.each(e==null?hE:(typeof e=="function"?bE:xE)(e)):this.node().textContent}function wE(){this.innerHTML=""}function vE(e){return function(){this.innerHTML=e}}function yE(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function L2(e){return arguments.length?this.each(e==null?wE:(typeof e=="function"?yE:vE)(e)):this.node().innerHTML}function CE(){this.nextSibling&&this.parentNode.appendChild(this)}function k2(){return this.each(CE)}function SE(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function _2(){return this.each(SE)}function I2(e){var t=typeof e=="function"?e:Vf(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function LE(){return null}function M2(e,t){var a=typeof e=="function"?e:Vf(e),o=t==null?LE:typeof t=="function"?t:Li(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function kE(){var e=this.parentNode;e&&e.removeChild(this)}function N2(){return this.each(kE)}function _E(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function IE(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function E2(e){return this.select(e?IE:_E)}function T2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ME(e){return function(t){e.call(this,t,this.__data__)}}function NE(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function EE(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function TE(e,t,a){return function(){var o=this.__on,n,r=ME(t);if(o){for(var i=0,l=o.length;i<l;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function A2(e,t,a){var o=NE(e+""),n,r=o.length,i;if(arguments.length<2){var l=this.node().__on;if(l){for(var s=0,u=l.length,d;s<u;++s)for(n=0,d=l[s];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(l=t?TE:EE,n=0;n<r;++n)this.each(l(o[n],t,a));return this}function D2(e,t,a){var o=jf(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function AE(e,t){return function(){return D2(this,e,t)}}function DE(e,t){return function(){return D2(this,e,t.apply(this,arguments))}}function R2(e,t){return this.each((typeof t=="function"?DE:AE)(e,t))}function*z2(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var hx=[null];function pt(e,t){this._groups=e,this._parents=t}function P2(){return new pt([[document.documentElement]],hx)}function RE(){return this}pt.prototype=P2.prototype={constructor:pt,select:K1,selectAll:$1,selectChild:Q1,selectChildren:J1,filter:e2,data:o2,enter:t2,exit:n2,join:r2,merge:i2,selection:RE,order:l2,sort:s2,call:d2,nodes:u2,node:c2,size:f2,empty:p2,each:m2,attr:g2,style:h2,property:x2,classed:C2,text:S2,html:L2,raise:k2,lower:_2,append:I2,insert:M2,remove:N2,clone:E2,datum:T2,on:A2,dispatch:R2,[Symbol.iterator]:z2};var Fn=P2;function Ot(e){return typeof e=="string"?new pt([[document.querySelector(e)]],[document.documentElement]):new pt([[e]],hx)}function O2(e){let t;for(;t=e.sourceEvent;)e=t;return e}function ca(e,t){if(e=O2(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var B2={passive:!1},ki={capture:!0,passive:!1};function Yf(e){e.stopImmediatePropagation()}function zr(e){e.preventDefault(),e.stopImmediatePropagation()}function Vd(e){var t=e.document.documentElement,a=Ot(e).on("dragstart.drag",zr,ki);"onselectstart"in t?a.on("selectstart.drag",zr,ki):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Gd(e,t){var a=e.document.documentElement,o=Ot(e).on("dragstart.drag",null);t&&(o.on("click.drag",zr,ki),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var Xd=e=>()=>e;function jd(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:l,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}jd.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function zE(e){return!e.ctrlKey&&!e.button}function PE(){return this.parentNode}function OE(e,t){return t??{x:e.x,y:e.y}}function BE(){return navigator.maxTouchPoints||"ontouchstart"in this}function Zf(){var e=zE,t=PE,a=OE,o=BE,n={},r=Si("start","drag","end"),i=0,l,s,u,d,f=0;function c(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",v).on("touchmove.drag",g,B2).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,S){if(!(d||!e.call(this,x,S))){var y=m(this,t.call(this,x,S),x,S,"mouse");y&&(Ot(x.view).on("mousemove.drag",h,ki).on("mouseup.drag",w,ki),Vd(x.view),Yf(x),u=!1,l=x.clientX,s=x.clientY,y("start",x))}}function h(x){if(zr(x),!u){var S=x.clientX-l,y=x.clientY-s;u=S*S+y*y>f}n.mouse("drag",x)}function w(x){Ot(x.view).on("mousemove.drag mouseup.drag",null),Gd(x.view,u),zr(x),n.mouse("end",x)}function v(x,S){if(e.call(this,x,S)){var y=x.changedTouches,C=t.call(this,x,S),k=y.length,_,T;for(_=0;_<k;++_)(T=m(this,C,x,S,y[_].identifier,y[_]))&&(Yf(x),T("start",x,y[_]))}}function g(x){var S=x.changedTouches,y=S.length,C,k;for(C=0;C<y;++C)(k=n[S[C].identifier])&&(zr(x),k("drag",x,S[C]))}function b(x){var S=x.changedTouches,y=S.length,C,k;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),C=0;C<y;++C)(k=n[S[C].identifier])&&(Yf(x),k("end",x,S[C]))}function m(x,S,y,C,k,_){var T=r.copy(),R=ca(_||y,S),B,U,L;if((L=a.call(x,new jd("beforestart",{sourceEvent:y,target:c,identifier:k,active:i,x:R[0],y:R[1],dx:0,dy:0,dispatch:T}),C))!=null)return B=L.x-R[0]||0,U=L.y-R[1]||0,function N(A,M,D){var H=R,z;switch(A){case"start":n[k]=N,z=i++;break;case"end":delete n[k],--i;case"drag":R=ca(D||M,S),z=i;break}T.call(A,x,new jd(A,{sourceEvent:M,subject:L,target:c,identifier:k,active:z,x:R[0]+B,y:R[1]+U,dx:R[0]-H[0],dy:R[1]-H[1],dispatch:T}),C)}}return c.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Xd(!!x),c):e},c.container=function(x){return arguments.length?(t=typeof x=="function"?x:Xd(x),c):t},c.subject=function(x){return arguments.length?(a=typeof x=="function"?x:Xd(x),c):a},c.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Xd(!!x),c):o},c.on=function(){var x=r.on.apply(r,arguments);return x===r?c:x},c.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,c):Math.sqrt(f)},c}function Wf(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function xx(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Wd(){}var Yd=.7,Qf=1/Yd,ts="\\s*([+-]?\\d+)\\s*",Zd="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",on="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",HE=/^#([0-9a-f]{3,8})$/,FE=new RegExp(`^rgb\\(${ts},${ts},${ts}\\)$`),UE=new RegExp(`^rgb\\(${on},${on},${on}\\)$`),qE=new RegExp(`^rgba\\(${ts},${ts},${ts},${Zd}\\)$`),VE=new RegExp(`^rgba\\(${on},${on},${on},${Zd}\\)$`),GE=new RegExp(`^hsl\\(${Zd},${on},${on}\\)$`),XE=new RegExp(`^hsla\\(${Zd},${on},${on},${Zd}\\)$`),H2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Wf(Wd,To,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:F2,formatHex:F2,formatHex8:jE,formatHsl:YE,formatRgb:U2,toString:U2});function F2(){return this.rgb().formatHex()}function jE(){return this.rgb().formatHex8()}function YE(){return Y2(this).formatHsl()}function U2(){return this.rgb().formatRgb()}function To(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=HE.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?q2(t):a===3?new Na(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Kf(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Kf(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=FE.exec(e))?new Na(t[1],t[2],t[3],1):(t=UE.exec(e))?new Na(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=qE.exec(e))?Kf(t[1],t[2],t[3],t[4]):(t=VE.exec(e))?Kf(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=GE.exec(e))?X2(t[1],t[2]/100,t[3]/100,1):(t=XE.exec(e))?X2(t[1],t[2]/100,t[3]/100,t[4]):H2.hasOwnProperty(e)?q2(H2[e]):e==="transparent"?new Na(NaN,NaN,NaN,0):null}function q2(e){return new Na(e>>16&255,e>>8&255,e&255,1)}function Kf(e,t,a,o){return o<=0&&(e=t=a=NaN),new Na(e,t,a,o)}function ZE(e){return e instanceof Wd||(e=To(e)),e?(e=e.rgb(),new Na(e.r,e.g,e.b,e.opacity)):new Na}function as(e,t,a,o){return arguments.length===1?ZE(e):new Na(e,t,a,o??1)}function Na(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}Wf(Na,as,xx(Wd,{brighter(e){return e=e==null?Qf:Math.pow(Qf,e),new Na(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Yd:Math.pow(Yd,e),new Na(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Na(Ii(this.r),Ii(this.g),Ii(this.b),Jf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:V2,formatHex:V2,formatHex8:WE,formatRgb:G2,toString:G2}));function V2(){return`#${_i(this.r)}${_i(this.g)}${_i(this.b)}`}function WE(){return`#${_i(this.r)}${_i(this.g)}${_i(this.b)}${_i((isNaN(this.opacity)?1:this.opacity)*255)}`}function G2(){let e=Jf(this.opacity);return`${e===1?"rgb(":"rgba("}${Ii(this.r)}, ${Ii(this.g)}, ${Ii(this.b)}${e===1?")":`, ${e})`}`}function Jf(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ii(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function _i(e){return e=Ii(e),(e<16?"0":"")+e.toString(16)}function X2(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new Eo(e,t,a,o)}function Y2(e){if(e instanceof Eo)return new Eo(e.h,e.s,e.l,e.opacity);if(e instanceof Wd||(e=To(e)),!e)return new Eo;if(e instanceof Eo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,l=r-n,s=(r+n)/2;return l?(t===r?i=(a-o)/l+(a<o)*6:a===r?i=(o-t)/l+2:i=(t-a)/l+4,l/=s<.5?r+n:2-r-n,i*=60):l=s>0&&s<1?0:i,new Eo(i,l,s,e.opacity)}function Z2(e,t,a,o){return arguments.length===1?Y2(e):new Eo(e,t,a,o??1)}function Eo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}Wf(Eo,Z2,xx(Wd,{brighter(e){return e=e==null?Qf:Math.pow(Qf,e),new Eo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Yd:Math.pow(Yd,e),new Eo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Na(bx(e>=240?e-240:e+120,n,o),bx(e,n,o),bx(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Eo(j2(this.h),$f(this.s),$f(this.l),Jf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Jf(this.opacity);return`${e===1?"hsl(":"hsla("}${j2(this.h)}, ${$f(this.s)*100}%, ${$f(this.l)*100}%${e===1?")":`, ${e})`}`}}));function j2(e){return e=(e||0)%360,e<0?e+360:e}function $f(e){return Math.max(0,Math.min(1,e||0))}function bx(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function wx(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function W2(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,l=o<t-1?e[o+2]:2*r-n;return wx((a-o/t)*t,i,n,r,l)}}function K2(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],l=e[(o+2)%t];return wx((a-o/t)*t,n,r,i,l)}}var Kd=e=>()=>e;function KE(e,t){return function(a){return e+a*t}}function $E(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function $2(e){return(e=+e)==1?ep:function(t,a){return a-t?$E(t,a,e):Kd(isNaN(t)?a:t)}}function ep(e,t){var a=t-e;return a?KE(e,a):Kd(isNaN(e)?t:e)}var Mi=(function e(t){var a=$2(t);function o(n,r){var i=a((n=as(n)).r,(r=as(r)).r),l=a(n.g,r.g),s=a(n.b,r.b),u=ep(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=l(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function Q2(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,l;for(i=0;i<a;++i)l=as(t[i]),o[i]=l.r||0,n[i]=l.g||0,r[i]=l.b||0;return o=e(o),n=e(n),r=e(r),l.opacity=1,function(s){return l.r=o(s),l.g=n(s),l.b=r(s),l+""}}}var QE=Q2(W2),JE=Q2(K2);function J2(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function eC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tC(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=Un(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(l){for(i=0;i<o;++i)r[i]=n[i](l);return r}}function aC(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function fa(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function oC(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=Un(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var yx=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,vx=new RegExp(yx.source,"g");function e6(e){return function(){return e}}function t6(e){return function(t){return e(t)+""}}function $d(e,t){var a=yx.lastIndex=vx.lastIndex=0,o,n,r,i=-1,l=[],s=[];for(e=e+"",t=t+"";(o=yx.exec(e))&&(n=vx.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),l[i]?l[i]+=r:l[++i]=r),(o=o[0])===(n=n[0])?l[i]?l[i]+=n:l[++i]=n:(l[++i]=null,s.push({i,x:fa(o,n)})),a=vx.lastIndex;return a<t.length&&(r=t.slice(a),l[i]?l[i]+=r:l[++i]=r),l.length<2?s[0]?t6(s[0].x):e6(t):(t=s.length,function(u){for(var d=0,f;d<t;++d)l[(f=s[d]).i]=f.x(u);return l.join("")})}function Un(e,t){var a=typeof t,o;return t==null||a==="boolean"?Kd(t):(a==="number"?fa:a==="string"?(o=To(t))?(t=o,Mi):$d:t instanceof To?Mi:t instanceof Date?aC:eC(t)?J2:Array.isArray(t)?tC:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?oC:fa)(e,t)}var nC=180/Math.PI,tp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Cx(e,t,a,o,n,r){var i,l,s;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(l=Math.sqrt(a*a+o*o))&&(a/=l,o/=l,s/=l),e*o<t*a&&(e=-e,t=-t,s=-s,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*nC,skewX:Math.atan(s)*nC,scaleX:i,scaleY:l}}var ap;function rC(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?tp:Cx(t.a,t.b,t.c,t.d,t.e,t.f)}function iC(e){return e==null?tp:(ap||(ap=document.createElementNS("http://www.w3.org/2000/svg","g")),ap.setAttribute("transform",e),(e=ap.transform.baseVal.consolidate())?(e=e.matrix,Cx(e.a,e.b,e.c,e.d,e.e,e.f)):tp)}function lC(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,h){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);h.push({i:w-4,x:fa(u,f)},{i:w-2,x:fa(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:fa(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function l(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:fa(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function s(u,d,f,c,p,h){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");h.push({i:w-4,x:fa(u,f)},{i:w-2,x:fa(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),l(u.skewX,d.skewX,f,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var h=-1,w=c.length,v;++h<w;)f[(v=c[h]).i]=v.x(p);return f.join("")}}}var Sx=lC(rC,"px, ","px)","deg)"),Lx=lC(iC,", ",")",")");var a6=1e-12;function sC(e){return((e=Math.exp(e))+1/e)/2}function o6(e){return((e=Math.exp(e))-1/e)/2}function n6(e){return((e=Math.exp(2*e))-1)/(e+1)}var Ni=(function e(t,a,o){function n(r,i){var l=r[0],s=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-l,h=f-s,w=p*p+h*h,v,g;if(w<a6)g=Math.log(c/u)/t,v=function(C){return[l+C*p,s+C*h,u*Math.exp(t*C*g)]};else{var b=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*b),x=(c*c-u*u-o*w)/(2*c*a*b),S=Math.log(Math.sqrt(m*m+1)-m),y=Math.log(Math.sqrt(x*x+1)-x);g=(y-S)/t,v=function(C){var k=C*g,_=sC(S),T=u/(a*b)*(_*n6(t*k+S)-o6(S));return[l+T*p,s+T*h,u*_/sC(t*k+S)]}}return v.duration=g*1e3*t/Math.SQRT2,v}return n.rho=function(r){var i=Math.max(.001,+r),l=i*i,s=l*l;return e(i,l,s)},n})(Math.SQRT2,2,4);var os=0,Jd=0,Qd=0,uC=1e3,op,eu,np=0,Ei=0,rp=0,tu=typeof performance=="object"&&performance.now?performance:Date,cC=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ou(){return Ei||(cC(r6),Ei=tu.now()+rp)}function r6(){Ei=0}function au(){this._call=this._time=this._next=null}au.prototype=ip.prototype={constructor:au,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?ou():+a)+(t==null?0:+t),!this._next&&eu!==this&&(eu?eu._next=this:op=this,eu=this),this._call=e,this._time=a,kx()},stop:function(){this._call&&(this._call=null,this._time=1/0,kx())}};function ip(e,t,a){var o=new au;return o.restart(e,t,a),o}function fC(){ou(),++os;for(var e=op,t;e;)(t=Ei-e._time)>=0&&e._call.call(void 0,t),e=e._next;--os}function dC(){Ei=(np=tu.now())+rp,os=Jd=0;try{fC()}finally{os=0,l6(),Ei=0}}function i6(){var e=tu.now(),t=e-np;t>uC&&(rp-=t,np=e)}function l6(){for(var e,t=op,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:op=a);eu=e,kx(o)}function kx(e){if(!os){Jd&&(Jd=clearTimeout(Jd));var t=e-Ei;t>24?(e<1/0&&(Jd=setTimeout(dC,e-tu.now()-rp)),Qd&&(Qd=clearInterval(Qd))):(Qd||(np=tu.now(),Qd=setInterval(i6,uC)),os=1,cC(dC))}}function lp(e,t,a){var o=new au;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var s6=Si("start","end","cancel","interrupt"),d6=[],gC=0,pC=1,dp=2,sp=3,mC=4,up=5,nu=6;function Pr(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;u6(e,a,{name:t,index:o,group:n,on:s6,tween:d6,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:gC})}function ru(e,t){var a=Tt(e,t);if(a.state>gC)throw new Error("too late; already scheduled");return a}function Wt(e,t){var a=Tt(e,t);if(a.state>sp)throw new Error("too late; already running");return a}function Tt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function u6(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=ip(r,0,a.time);function r(u){a.state=pC,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==pC)return s();for(d in o)if(p=o[d],p.name===a.name){if(p.state===sp)return lp(i);p.state===mC?(p.state=nu,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=nu,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(lp(function(){a.state===sp&&(a.state=mC,a.timer.restart(l,a.delay,a.time),l(u))}),a.state=dp,a.on.call("start",e,e.__data__,a.index,a.group),a.state===dp){for(a.state=sp,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function l(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=up,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===up&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=nu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function Ti(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>dp&&o.state<up,o.state=nu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function hC(e){return this.each(function(){Ti(this,e)})}function c6(e,t){var a,o;return function(){var n=Wt(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,l=o.length;i<l;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function f6(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=Wt(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var l={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=l;break}s===u&&n.push(l)}r.tween=n}}function xC(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Tt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?c6:f6)(a,e,t))}function ns(e,t,a){var o=e._id;return e.each(function(){var n=Wt(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Tt(n,o).value[t]}}function cp(e,t){var a;return(typeof t=="number"?fa:t instanceof To?Mi:(a=To(t))?(t=a,Mi):$d)(e,t)}function p6(e){return function(){this.removeAttribute(e)}}function m6(e){return function(){this.removeAttributeNS(e.space,e.local)}}function g6(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function h6(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function x6(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttribute(e):(i=this.getAttribute(e),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function b6(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function bC(e,t){var a=Hn(e),o=a==="transform"?Lx:cp;return this.attrTween(e,typeof t=="function"?(a.local?b6:x6)(a,o,ns(this,"attr."+e,t)):t==null?(a.local?m6:p6)(a):(a.local?h6:g6)(a,o,t))}function w6(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function v6(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function y6(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&v6(e,r)),a}return n._value=t,n}function C6(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&w6(e,r)),a}return n._value=t,n}function wC(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=Hn(e);return this.tween(a,(o.local?y6:C6)(o,t))}function S6(e,t){return function(){ru(this,e).delay=+t.apply(this,arguments)}}function L6(e,t){return t=+t,function(){ru(this,e).delay=t}}function vC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?S6:L6)(t,e)):Tt(this.node(),t).delay}function k6(e,t){return function(){Wt(this,e).duration=+t.apply(this,arguments)}}function _6(e,t){return t=+t,function(){Wt(this,e).duration=t}}function yC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?k6:_6)(t,e)):Tt(this.node(),t).duration}function I6(e,t){if(typeof t!="function")throw new Error;return function(){Wt(this,e).ease=t}}function CC(e){var t=this._id;return arguments.length?this.each(I6(t,e)):Tt(this.node(),t).ease}function M6(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;Wt(this,e).ease=a}}function SC(e){if(typeof e!="function")throw new Error;return this.each(M6(this._id,e))}function LC(e){typeof e!="function"&&(e=Ud(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new pa(o,this._parents,this._name,this._id)}function kC(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),l=0;l<r;++l)for(var s=t[l],u=a[l],d=s.length,f=i[l]=new Array(d),c,p=0;p<d;++p)(c=s[p]||u[p])&&(f[p]=c);for(;l<o;++l)i[l]=t[l];return new pa(i,this._parents,this._name,this._id)}function N6(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function E6(e,t,a){var o,n,r=N6(t)?ru:Wt;return function(){var i=r(this,e),l=i.on;l!==o&&(n=(o=l).copy()).on(t,a),i.on=n}}function _C(e,t){var a=this._id;return arguments.length<2?Tt(this.node(),a).on.on(e):this.each(E6(a,e,t))}function T6(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function IC(){return this.on("end.remove",T6(this._id))}function MC(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Li(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var l=o[i],s=l.length,u=r[i]=new Array(s),d,f,c=0;c<s;++c)(d=l[c])&&(f=e.call(d,d.__data__,c,l))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,Pr(u[c],t,a,c,u,Tt(d,a)));return new pa(r,this._parents,t,a)}function NC(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Fd(e));for(var o=this._groups,n=o.length,r=[],i=[],l=0;l<n;++l)for(var s=o[l],u=s.length,d,f=0;f<u;++f)if(d=s[f]){for(var c=e.call(d,d.__data__,f,s),p,h=Tt(d,a),w=0,v=c.length;w<v;++w)(p=c[w])&&Pr(p,t,a,w,c,h);r.push(c),i.push(d)}return new pa(r,i,t,a)}var A6=Fn.prototype.constructor;function EC(){return new A6(this._groups,this._parents)}function D6(e,t){var a,o,n;return function(){var r=Rr(this,e),i=(this.style.removeProperty(e),Rr(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function TC(e){return function(){this.style.removeProperty(e)}}function R6(e,t,a){var o,n=a+"",r;return function(){var i=Rr(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function z6(e,t,a){var o,n,r;return function(){var i=Rr(this,e),l=a(this),s=l+"";return l==null&&(s=l=(this.style.removeProperty(e),Rr(this,e))),i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l))}}function P6(e,t){var a,o,n,r="style."+t,i="end."+r,l;return function(){var s=Wt(this,e),u=s.on,d=s.value[r]==null?l||(l=TC(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),s.on=o}}function AC(e,t,a){var o=(e+="")=="transform"?Sx:cp;return t==null?this.styleTween(e,D6(e,o)).on("end.style."+e,TC(e)):typeof t=="function"?this.styleTween(e,z6(e,o,ns(this,"style."+e,t))).each(P6(this._id,e)):this.styleTween(e,R6(e,o,t),a).on("end.style."+e,null)}function O6(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function B6(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&O6(e,i,a)),o}return r._value=t,r}function DC(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,B6(e,t,a??""))}function H6(e){return function(){this.textContent=e}}function F6(e){return function(){var t=e(this);this.textContent=t??""}}function RC(e){return this.tween("text",typeof e=="function"?F6(ns(this,"text",e)):H6(e==null?"":e+""))}function U6(e){return function(t){this.textContent=e.call(this,t)}}function q6(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&U6(n)),t}return o._value=e,o}function zC(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,q6(e))}function PC(){for(var e=this._name,t=this._id,a=fp(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)if(s=i[u]){var d=Tt(s,t);Pr(s,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new pa(o,this._parents,e,a)}function OC(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var l={value:i},s={value:function(){--n===0&&r()}};a.each(function(){var u=Wt(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),u.on=t}),n===0&&r()})}var V6=0;function pa(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function BC(e){return Fn().transition(e)}function fp(){return++V6}var qn=Fn.prototype;pa.prototype=BC.prototype={constructor:pa,select:MC,selectAll:NC,selectChild:qn.selectChild,selectChildren:qn.selectChildren,filter:LC,merge:kC,selection:EC,transition:PC,call:qn.call,nodes:qn.nodes,node:qn.node,size:qn.size,empty:qn.empty,each:qn.each,on:_C,attr:bC,attrTween:wC,style:AC,styleTween:DC,text:RC,textTween:zC,remove:IC,tween:xC,delay:vC,duration:yC,ease:CC,easeVarying:SC,end:OC,[Symbol.iterator]:qn[Symbol.iterator]};function pp(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var G6={time:null,delay:0,duration:250,ease:pp};function X6(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function HC(e){var t,a;e instanceof pa?(t=e._id,e=e._name):(t=fp(),(a=G6).time=ou(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&Pr(s,e,t,u,i,a||X6(s,t));return new pa(o,this._parents,e,t)}Fn.prototype.interrupt=hC;Fn.prototype.transition=HC;var iu=e=>()=>e;function _x(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function Ao(e,t,a){this.k=e,this.x=t,this.y=a}Ao.prototype={constructor:Ao,scale:function(e){return e===1?this:new Ao(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ao(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ai=new Ao(1,0,0);lu.prototype=Ao.prototype;function lu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Ai;return e.__zoom}function mp(e){e.stopImmediatePropagation()}function rs(e){e.preventDefault(),e.stopImmediatePropagation()}function j6(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Y6(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function FC(){return this.__zoom||Ai}function Z6(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function W6(){return navigator.maxTouchPoints||"ontouchstart"in this}function K6(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function gp(){var e=j6,t=Y6,a=K6,o=Z6,n=W6,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],l=250,s=Ni,u=Si("start","zoom","end"),d,f,c,p=500,h=150,w=0,v=10;function g(L){L.property("__zoom",FC).on("wheel.zoom",k,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",R).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(L,N,A,M){var D=L.selection?L.selection():L;D.property("__zoom",FC),L!==D?S(L,N,A,M):D.interrupt().each(function(){y(this,arguments).event(M).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},g.scaleBy=function(L,N,A,M){g.scaleTo(L,function(){var D=this.__zoom.k,H=typeof N=="function"?N.apply(this,arguments):N;return D*H},A,M)},g.scaleTo=function(L,N,A,M){g.transform(L,function(){var D=t.apply(this,arguments),H=this.__zoom,z=A==null?x(D):typeof A=="function"?A.apply(this,arguments):A,F=H.invert(z),I=typeof N=="function"?N.apply(this,arguments):N;return a(m(b(H,I),z,F),D,i)},A,M)},g.translateBy=function(L,N,A,M){g.transform(L,function(){return a(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof A=="function"?A.apply(this,arguments):A),t.apply(this,arguments),i)},null,M)},g.translateTo=function(L,N,A,M,D){g.transform(L,function(){var H=t.apply(this,arguments),z=this.__zoom,F=M==null?x(H):typeof M=="function"?M.apply(this,arguments):M;return a(Ai.translate(F[0],F[1]).scale(z.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof A=="function"?-A.apply(this,arguments):-A),H,i)},M,D)};function b(L,N){return N=Math.max(r[0],Math.min(r[1],N)),N===L.k?L:new Ao(N,L.x,L.y)}function m(L,N,A){var M=N[0]-A[0]*L.k,D=N[1]-A[1]*L.k;return M===L.x&&D===L.y?L:new Ao(L.k,M,D)}function x(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function S(L,N,A,M){L.on("start.zoom",function(){y(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){y(this,arguments).event(M).end()}).tween("zoom",function(){var D=this,H=arguments,z=y(D,H).event(M),F=t.apply(D,H),I=A==null?x(F):typeof A=="function"?A.apply(D,H):A,O=Math.max(F[1][0]-F[0][0],F[1][1]-F[0][1]),j=D.__zoom,K=typeof N=="function"?N.apply(D,H):N,W=s(j.invert(I).concat(O/j.k),K.invert(I).concat(O/K.k));return function($){if($===1)$=K;else{var G=W($),Z=O/G[2];$=new Ao(Z,I[0]-G[0]*Z,I[1]-G[1]*Z)}z.zoom(null,$)}})}function y(L,N,A){return!A&&L.__zooming||new C(L,N)}function C(L,N){this.that=L,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,N),this.taps=0}C.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,N){return this.mouse&&L!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var N=Ot(this.that).datum();u.call(L,this.that,new _x(L,{sourceEvent:this.sourceEvent,target:g,type:L,transform:this.that.__zoom,dispatch:u}),N)}};function k(L,...N){if(!e.apply(this,arguments))return;var A=y(this,N).event(L),M=this.__zoom,D=Math.max(r[0],Math.min(r[1],M.k*Math.pow(2,o.apply(this,arguments)))),H=ca(L);if(A.wheel)(A.mouse[0][0]!==H[0]||A.mouse[0][1]!==H[1])&&(A.mouse[1]=M.invert(A.mouse[0]=H)),clearTimeout(A.wheel);else{if(M.k===D)return;A.mouse=[H,M.invert(H)],Ti(this),A.start()}rs(L),A.wheel=setTimeout(z,h),A.zoom("mouse",a(m(b(M,D),A.mouse[0],A.mouse[1]),A.extent,i));function z(){A.wheel=null,A.end()}}function _(L,...N){if(c||!e.apply(this,arguments))return;var A=L.currentTarget,M=y(this,N,!0).event(L),D=Ot(L.view).on("mousemove.zoom",I,!0).on("mouseup.zoom",O,!0),H=ca(L,A),z=L.clientX,F=L.clientY;Vd(L.view),mp(L),M.mouse=[H,this.__zoom.invert(H)],Ti(this),M.start();function I(j){if(rs(j),!M.moved){var K=j.clientX-z,W=j.clientY-F;M.moved=K*K+W*W>w}M.event(j).zoom("mouse",a(m(M.that.__zoom,M.mouse[0]=ca(j,A),M.mouse[1]),M.extent,i))}function O(j){D.on("mousemove.zoom mouseup.zoom",null),Gd(j.view,M.moved),rs(j),M.event(j).end()}}function T(L,...N){if(e.apply(this,arguments)){var A=this.__zoom,M=ca(L.changedTouches?L.changedTouches[0]:L,this),D=A.invert(M),H=A.k*(L.shiftKey?.5:2),z=a(m(b(A,H),M,D),t.apply(this,N),i);rs(L),l>0?Ot(this).transition().duration(l).call(S,z,M,L):Ot(this).call(g.transform,z,M,L)}}function R(L,...N){if(e.apply(this,arguments)){var A=L.touches,M=A.length,D=y(this,N,L.changedTouches.length===M).event(L),H,z,F,I;for(mp(L),z=0;z<M;++z)F=A[z],I=ca(F,this),I=[I,this.__zoom.invert(I),F.identifier],D.touch0?!D.touch1&&D.touch0[2]!==I[2]&&(D.touch1=I,D.taps=0):(D.touch0=I,H=!0,D.taps=1+!!d);d&&(d=clearTimeout(d)),H&&(D.taps<2&&(f=I[0],d=setTimeout(function(){d=null},p)),Ti(this),D.start())}}function B(L,...N){if(this.__zooming){var A=y(this,N).event(L),M=L.changedTouches,D=M.length,H,z,F,I;for(rs(L),H=0;H<D;++H)z=M[H],F=ca(z,this),A.touch0&&A.touch0[2]===z.identifier?A.touch0[0]=F:A.touch1&&A.touch1[2]===z.identifier&&(A.touch1[0]=F);if(z=A.that.__zoom,A.touch1){var O=A.touch0[0],j=A.touch0[1],K=A.touch1[0],W=A.touch1[1],$=($=K[0]-O[0])*$+($=K[1]-O[1])*$,G=(G=W[0]-j[0])*G+(G=W[1]-j[1])*G;z=b(z,Math.sqrt($/G)),F=[(O[0]+K[0])/2,(O[1]+K[1])/2],I=[(j[0]+W[0])/2,(j[1]+W[1])/2]}else if(A.touch0)F=A.touch0[0],I=A.touch0[1];else return;A.zoom("touch",a(m(z,F,I),A.extent,i))}}function U(L,...N){if(this.__zooming){var A=y(this,N).event(L),M=L.changedTouches,D=M.length,H,z;for(mp(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),H=0;H<D;++H)z=M[H],A.touch0&&A.touch0[2]===z.identifier?delete A.touch0:A.touch1&&A.touch1[2]===z.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(z=ca(z,this),Math.hypot(f[0]-z[0],f[1]-z[1])<v)){var F=Ot(this).on("dblclick.zoom");F&&F.apply(this,arguments)}}}return g.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:iu(+L),g):o},g.filter=function(L){return arguments.length?(e=typeof L=="function"?L:iu(!!L),g):e},g.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:iu(!!L),g):n},g.extent=function(L){return arguments.length?(t=typeof L=="function"?L:iu([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),g):t},g.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],g):[r[0],r[1]]},g.translateExtent=function(L){return arguments.length?(i[0][0]=+L[0][0],i[1][0]=+L[1][0],i[0][1]=+L[0][1],i[1][1]=+L[1][1],g):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},g.constrain=function(L){return arguments.length?(a=L,g):a},g.duration=function(L){return arguments.length?(l=+L,g):l},g.interpolate=function(L){return arguments.length?(s=L,g):s},g.on=function(){var L=u.on.apply(u,arguments);return L===u?g:L},g.clickDistance=function(L){return arguments.length?(w=(L=+L)*L,g):Math.sqrt(w)},g.tapDistance=function(L){return arguments.length?(v=+L,g):v},g}var Wa={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},ds=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Tx=["Enter"," ","Escape"],Ax={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Fr;(function(e){e.Strict="strict",e.Loose="loose"})(Fr||(Fr={}));var Do;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Do||(Do={}));var Vn;(function(e){e.Partial="partial",e.Full="full"})(Vn||(Vn={}));var Dx={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},nn;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(nn||(nn={}));var ls;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(ls||(ls={}));var oe;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(oe||(oe={}));var UC={[oe.Left]:oe.Right,[oe.Right]:oe.Left,[oe.Top]:oe.Bottom,[oe.Bottom]:oe.Top};function Rx(e){return e===null?null:e?"valid":"invalid"}var zx=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,eS=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Px=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Ox=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var du=(e,t=[0,0])=>{let{width:a,height:o}=vo(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Bx=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",l=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(l=i?t.nodeLookup.get(r):Px(r)?r:t.nodeLookup.get(r.id)),l?(a=!0,yp(n,bp(l,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Cp(o):{x:0,y:0,width:0,height:0}},us=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=yp(a,bp(n)),o=!0)}),o?Cp(a):{x:0,y:0,width:0,height:0}},wp=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let l=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:h=!0,hidden:w=!1}=c;if(i&&!h||w)continue;let v=p.width??c.width??c.initialWidth??0,g=p.height??c.height??c.initialHeight??0,{x:b,y:m}=c.internals.positionAbsolute,x=rS(l,s,u,d,b,m,v,g),S=v*g,y=r&&x>0;(!c.internals.handleBounds||y||x>=S||c.dragging)&&f.push(c)}return f},tS=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function $6(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:l}=vo(n);r=i>0&&l>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function aS({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let l=$6(e,i),s=us(l),u=cu(s,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function Hx({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),l=i.parentId?a.get(i.parentId):void 0,{x:s,y:u}=l?l.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!l)r?.("005",Wa.error005());else{let{width:p,height:h}=vo(l);p&&h&&(f=[[s,u],[s+p,u+h]])}else l&&zi(i.extent)&&(f=[[i.extent[0][0]+s,i.extent[0][1]+u],[i.extent[1][0]+s,i.extent[1][1]+u]]);let c=zi(f)?Di(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",Wa.error015()),{position:{x:c.x-s+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function oS({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),h=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||h)&&i.push(c)}let l=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=tS(i,s);for(let c of s)l.has(c.id)&&!d.find(h=>h.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var ss=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),Di=(e={x:0,y:0},t,a)=>({x:ss(e.x,t[0][0],t[1][0]-(a?.width??0)),y:ss(e.y,t[0][1],t[1][1]-(a?.height??0))});function nS(e,t,a){let{width:o,height:n}=vo(a),{x:r,y:i}=a.internals.positionAbsolute;return Di(e,[[r,i],[r+o,i+n]],t)}var qC=(e,t,a)=>e<t?ss(Math.abs(e-t),1,t)/t:e>a?-ss(Math.abs(e-a),1,t)/t:0,vp=(e,t,a=15,o=40)=>{let n=qC(e.x,o,t.width-o)*a,r=qC(e.y,o,t.height-o)*a;return[n,r]},yp=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ex=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Cp=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),cs=(e,t=[0,0])=>{let{x:a,y:o}=Px(e)?e.internals.positionAbsolute:du(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},bp=(e,t=[0,0])=>{let{x:a,y:o}=Px(e)?e.internals.positionAbsolute:du(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Fx=(e,t)=>Cp(yp(Ex(e),Ex(t))),rS=(e,t,a,o,n,r,i,l)=>{let s=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+l)-Math.max(t,r));return Math.ceil(s*u)},uu=(e,t)=>rS(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Ux=e=>bo(e.width)&&bo(e.height)&&bo(e.x)&&bo(e.y),bo=e=>!isNaN(e)&&isFinite(e),qx=(e,t)=>(a,o)=>{},fs=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),ps=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let l={x:(e-a)/n,y:(t-o)/n};return r?fs(l,i):l},Ri=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function is(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Q6(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=is(e,a),n=is(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=is(e.top??e.y??0,a),n=is(e.bottom??e.y??0,a),r=is(e.left??e.x??0,t),i=is(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function J6(e,t,a,o,n,r){let{x:i,y:l}=Ri(e,[t,a,o]),{x:s,y:u}=Ri({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,f=r-u;return{left:Math.floor(i),top:Math.floor(l),right:Math.floor(d),bottom:Math.floor(f)}}var cu=(e,t,a,o,n,r)=>{let i=Q6(r,t,a),l=(t-i.x)/e.width,s=(a-i.y)/e.height,u=Math.min(l,s),d=ss(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,h=a/2-c*d,w=J6(e,p,h,d,t,a),v={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-v.left+v.right,y:h-v.top+v.bottom,zoom:d}},ms=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function zi(e){return e!=null&&e!=="parent"}function vo(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Vx(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Gx(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let l=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*l[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*l[1]}return r}function Xx(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function iS(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function lS(e){return{...Ax,...e||{}}}function su(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=wo(e),l=ps({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:s,y:u}=a?fs(l,t):l;return{xSnapped:s,ySnapped:u,...l}}var Sp=e=>({width:e.offsetWidth,height:e.offsetHeight}),jx=e=>e?.getRootNode?.()||window?.document,eT=["INPUT","SELECT","TEXTAREA"];function Yx(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:eT.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Zx=e=>"clientX"in e,wo=(e,t)=>{let a=Zx(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},VC=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let l=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(l.left-a.left)/o,y:(l.top-a.top)/o,...Sp(i)}})};function Lp({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:l}){let s=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+l*.375+o*.125,d=Math.abs(s-e),f=Math.abs(u-t);return[s,u,d,f]}function hp(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function GC({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case oe.Left:return[t-hp(t-o,r),a];case oe.Right:return[t+hp(o-t,r),a];case oe.Top:return[t,a-hp(a-n,r)];case oe.Bottom:return[t,a+hp(n-a,r)]}}function gs({sourceX:e,sourceY:t,sourcePosition:a=oe.Bottom,targetX:o,targetY:n,targetPosition:r=oe.Top,curvature:i=.25}){let[l,s]=GC({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=GC({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,h]=Lp({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${l},${s} ${u},${d} ${o},${n}`,f,c,p,h]}function Wx({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,l=o<t?o+i:o-i;return[r,l,n,i]}function sS({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,l=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+l}function dS({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=yp(bp(e),bp(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return uu(i,Cp(r))>0}var tT=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,aT=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),uS=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Wa.error006()),t;let o=a.getEdgeId||tT,n;return zx(e)?n={...e}:n={...e,id:o(e)},aT(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function kp({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,l]=Wx({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,l]}var XC={[oe.Left]:{x:-1,y:0},[oe.Right]:{x:1,y:0},[oe.Top]:{x:0,y:-1},[oe.Bottom]:{x:0,y:1}},oT=({source:e,sourcePosition:t=oe.Bottom,target:a})=>t===oe.Left||t===oe.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},jC=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function nT({source:e,sourcePosition:t=oe.Bottom,target:a,targetPosition:o=oe.Top,center:n,offset:r,stepPosition:i}){let l=XC[t],s=XC[o],u={x:e.x+l.x*r,y:e.y+l.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},f=oT({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],h=[],w,v,g={x:0,y:0},b={x:0,y:0},[,,m,x]=Wx({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(l[c]*s[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,v=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,v=n.y??u.y+(d.y-u.y)*i);let k=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y:v},{x:d.x,y:v}];l[c]===p?h=c==="x"?k:_:h=c==="x"?_:k}else{let k=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?h=l.x===p?_:k:h=l.y===p?k:_,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let N=Math.min(r-1,r-L);l[c]===p?g[c]=(u[c]>e[c]?-1:1)*N:b[c]=(d[c]>a[c]?-1:1)*N}}if(t!==o){let L=c==="x"?"y":"x",N=l[c]===s[L],A=u[L]>d[L],M=u[L]<d[L];(l[c]===1&&(!N&&A||N&&M)||l[c]!==1&&(!N&&M||N&&A))&&(h=c==="x"?k:_)}let T={x:u.x+g.x,y:u.y+g.y},R={x:d.x+b.x,y:d.y+b.y},B=Math.max(Math.abs(T.x-h[0].x),Math.abs(R.x-h[0].x)),U=Math.max(Math.abs(T.y-h[0].y),Math.abs(R.y-h[0].y));B>=U?(w=(T.x+R.x)/2,v=h[0].y):(w=h[0].x,v=(T.y+R.y)/2)}let S={x:u.x+g.x,y:u.y+g.y},y={x:d.x+b.x,y:d.y+b.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...y.x!==h[h.length-1].x||y.y!==h[h.length-1].y?[y]:[],a],w,v,m,x]}function rT(e,t,a,o){let n=Math.min(jC(e,t)/2,jC(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let l=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${i+n*s}Q ${r},${i} ${r+n*l},${i}`}function fu({sourceX:e,sourceY:t,sourcePosition:a=oe.Bottom,targetX:o,targetY:n,targetPosition:r=oe.Top,borderRadius:i=5,centerX:l,centerY:s,offset:u=20,stepPosition:d=.5}){let[f,c,p,h,w]=nT({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:l,y:s},offset:u,stepPosition:d}),v=`M${f[0].x} ${f[0].y}`;for(let g=1;g<f.length-1;g++)v+=rT(f[g-1],f[g],f[g+1],i);return v+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[v,c,p,h,w]}function YC(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function cS(e){let{sourceNode:t,targetNode:a}=e;if(!YC(t)||!YC(a))return null;let o=t.internals.handleBounds||ZC(t.handles),n=a.internals.handleBounds||ZC(a.handles),r=WC(o?.source??[],e.sourceHandle),i=WC(e.connectionMode===Fr.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",Wa.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let l=r?.position||oe.Bottom,s=i?.position||oe.Top,u=Ur(t,r,l),d=Ur(a,i,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:l,targetPosition:s}}function ZC(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function Ur(e,t,a=oe.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:l}=t??vo(e);if(o)return{x:n+i/2,y:r+l/2};switch(t?.position??a){case oe.Top:return{x:n+i/2,y:r};case oe.Right:return{x:n+i,y:r+l/2};case oe.Bottom:return{x:n+i/2,y:r+l};case oe.Left:return{x:n,y:r+l/2}}}function WC(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function _p(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function fS(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,l)=>([l.markerStart||o,l.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=_p(s,t);r.has(u)||(i.push({id:u,color:s.color||a,...s}),r.add(u))}}),i),[]).sort((i,l)=>i.id.localeCompare(l.id))}var pS=1e3,iT=10,Kx={nodeOrigin:[0,0],nodeExtent:ds,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},lT={...Kx,checkEquality:!0};function $x(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function mS(e,t,a){let o=$x(Kx,a);for(let n of e.values())if(n.parentId)Jx(n,e,t,o);else{let r=du(n,o.nodeOrigin),i=zi(n.extent)?n.extent:o.nodeExtent,l=Di(r,i,vo(n));n.internals.positionAbsolute=l}}function sT(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function Qx(e){return e==="manual"}function Ip(e,t,a,o={}){let n=$x(lT,o),r={i:0},i=new Map(t),l=n?.elevateNodesOnSelect&&!Qx(n.zIndexMode)?pS:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=du(d,n.nodeOrigin),p=zi(d.extent)?d.extent:n.nodeExtent,h=Di(c,p,vo(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:sT(d,f),z:gS(d,l,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),d.parentId&&Jx(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function dT(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Jx(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:l,zIndexMode:s}=$x(Kx,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}dT(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*iT),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!Qx(s)?pS:0,{x:c,y:p,z:h}=uT(e,d,i,l,f,s),{positionAbsolute:w}=e.internals,v=c!==w.x||p!==w.y;(v||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:v?{x:c,y:p}:w,z:h}})}function gS(e,t,a){let o=bo(e.zIndex)?e.zIndex:0;return Qx(a)?o:o+(e.selected?t:0)}function uT(e,t,a,o,n,r){let{x:i,y:l}=t.internals.positionAbsolute,s=vo(e),u=du(e,a),d=zi(e.extent)?Di(u,e.extent,s):u,f=Di({x:i+d.x,y:l+d.y},o,s);e.extent==="parent"&&(f=nS(f,s,t));let c=gS(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Mp(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let l=t.get(i.parentId);if(!l)continue;let s=r.get(i.parentId)?.expandedRect??cs(l),u=Fx(s,i.rect);r.set(i.parentId,{expandedRect:u,parent:l})}return r.size>0&&r.forEach(({expandedRect:i,parent:l},s)=>{let u=l.internals.positionAbsolute,d=vo(l),f=l.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,h=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),v=(h-d.width)*f[0],g=(w-d.height)*f[1];(c>0||p>0||v||g)&&(n.push({id:s,type:"position",position:{x:l.position.x-c+v,y:l.position.y-p+g}}),a.get(s)?.forEach(b=>{e.some(m=>m.id===b.id)||n.push({id:b.id,type:"position",position:{x:b.position.x+c,y:b.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:h+(c?f[0]*c-v:0),height:w+(p?f[1]*p-g:0)}})}),n}function hS(e,t,a,o,n,r,i){let l=o?.querySelector(".xyflow__viewport"),s=!1;if(!l)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(l),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),s=!0;continue}let w=Sp(p.nodeElement),v=h.measured.width!==w.width||h.measured.height!==w.height;if(!!(w.width&&w.height&&(v||!h.internals.handleBounds||p.force))){let b=p.nodeElement.getBoundingClientRect(),m=zi(h.extent)?h.extent:r,{positionAbsolute:x}=h.internals;if(h.parentId&&h.extent==="parent"){let y=t.get(h.parentId);y&&(x=nS(x,w,y))}else m&&(x=Di(x,m,w));let S={...h,measured:w,internals:{...h.internals,positionAbsolute:x,handleBounds:{source:VC("source",p.nodeElement,b,f,h.id),target:VC("target",p.nodeElement,b,f,h.id)}}};t.set(h.id,S),h.parentId&&Jx(S,t,a,{nodeOrigin:n,zIndexMode:i}),s=!0,v&&(u.push({id:h.id,type:"dimensions",dimensions:w}),h.expandParent&&h.parentId&&c.push({id:h.id,parentId:h.parentId,rect:cs(S,n)}))}}if(c.length>0){let p=Mp(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function xS({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function KC(e,t,a,o,n,r){let i=n,l=o.get(i)||new Map;o.set(i,l.set(a,t)),i=`${n}-${e}`;let s=o.get(i)||new Map;if(o.set(i,s.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function e0(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:l=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:l},u=`${n}-${i}--${r}-${l}`,d=`${r}-${l}--${n}-${i}`;KC("source",s,d,e,n,i),KC("target",s,u,e,r,l),t.set(o.id,o)}}function bS(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:bS(a,t):!1}function $C(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function cT(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!bS(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let l=e.get(r);l&&n.set(r,{id:r,position:l.position||{x:0,y:0},distance:{x:a.x-l.internals.positionAbsolute.x,y:a.y-l.internals.positionAbsolute.y},extent:l.extent,parentId:l.parentId,origin:l.origin,expandParent:l.expandParent,internals:{positionAbsolute:l.internals.positionAbsolute||{x:0,y:0}},measured:{width:l.measured.width??0,height:l.measured.height??0}})}return n}function Ix({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,l]of t){let s=a.get(i)?.internals.userNode;s&&n.push({...s,position:l.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function fT({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=fs(r,t);return{x:i.x-r.x,y:i.y-r.y}}function wS({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,l=new Map,s=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,h=!1,w=null;function v({noDragClassName:b,handleSelector:m,domNode:x,isSelectable:S,nodeId:y,nodeClickDistance:C=0}){c=Ot(x);function k({x:B,y:U}){let{nodeLookup:L,nodeExtent:N,snapGrid:A,snapToGrid:M,nodeOrigin:D,onNodeDrag:H,onSelectionDrag:z,onError:F,updateNodePositions:I}=t();r={x:B,y:U};let O=!1,j=l.size>1,K=j&&N?Ex(us(l)):null,W=j&&M?fT({dragItems:l,snapGrid:A,x:B,y:U}):null;for(let[$,G]of l){if(!L.has($))continue;let Z={x:B-G.distance.x,y:U-G.distance.y};M&&(Z=W?{x:Math.round(Z.x+W.x),y:Math.round(Z.y+W.y)}:fs(Z,A));let ue=null;if(j&&N&&!G.extent&&K){let{positionAbsolute:ie}=G.internals,we=ie.x-K.x+N[0][0],Ie=ie.x+G.measured.width-K.x2+N[1][0],Oe=ie.y-K.y+N[0][1],te=ie.y+G.measured.height-K.y2+N[1][1];ue=[[we,Oe],[Ie,te]]}let{position:ce,positionAbsolute:ae}=Hx({nodeId:$,nextPosition:Z,nodeLookup:L,nodeExtent:ue||N,nodeOrigin:D,onError:F});O=O||G.position.x!==ce.x||G.position.y!==ce.y,G.position=ce,G.internals.positionAbsolute=ae}if(h=h||O,!!O&&(I(l,!0),w&&(o||H||!y&&z))){let[$,G]=Ix({nodeId:y,dragItems:l,nodeLookup:L});o?.(w,l,$,G),H?.(w,$,G),y||z?.(w,G)}}async function _(){if(!d)return;let{transform:B,panBy:U,autoPanSpeed:L,autoPanOnNodeDrag:N}=t();if(!N){s=!1,cancelAnimationFrame(i);return}let[A,M]=vp(u,d,L);(A!==0||M!==0)&&(r.x=(r.x??0)-A/B[2],r.y=(r.y??0)-M/B[2],await U({x:A,y:M})&&k(r)),i=requestAnimationFrame(_)}function T(B){let{nodeLookup:U,multiSelectionActive:L,nodesDraggable:N,transform:A,snapGrid:M,snapToGrid:D,selectNodesOnDrag:H,onNodeDragStart:z,onSelectionDragStart:F,unselectNodesAndEdges:I}=t();f=!0,(!H||!S)&&!L&&y&&(U.get(y)?.selected||I()),S&&H&&y&&e?.(y);let O=su(B.sourceEvent,{transform:A,snapGrid:M,snapToGrid:D,containerBounds:d});if(r=O,l=cT(U,N,O,y),l.size>0&&(a||z||!y&&F)){let[j,K]=Ix({nodeId:y,dragItems:l,nodeLookup:U});a?.(B.sourceEvent,l,j,K),z?.(B.sourceEvent,j,K),y||F?.(B.sourceEvent,K)}}let R=Zf().clickDistance(C).on("start",B=>{let{domNode:U,nodeDragThreshold:L,transform:N,snapGrid:A,snapToGrid:M}=t();d=U?.getBoundingClientRect()||null,p=!1,h=!1,w=B.sourceEvent,L===0&&T(B),r=su(B.sourceEvent,{transform:N,snapGrid:A,snapToGrid:M,containerBounds:d}),u=wo(B.sourceEvent,d)}).on("drag",B=>{let{autoPanOnNodeDrag:U,transform:L,snapGrid:N,snapToGrid:A,nodeDragThreshold:M,nodeLookup:D}=t(),H=su(B.sourceEvent,{transform:L,snapGrid:N,snapToGrid:A,containerBounds:d});if(w=B.sourceEvent,(B.sourceEvent.type==="touchmove"&&B.sourceEvent.touches.length>1||y&&!D.has(y))&&(p=!0),!p){if(!s&&U&&f&&(s=!0,_()),!f){let z=wo(B.sourceEvent,d),F=z.x-u.x,I=z.y-u.y;Math.sqrt(F*F+I*I)>M&&T(B)}(r.x!==H.xSnapped||r.y!==H.ySnapped)&&l&&f&&(u=wo(B.sourceEvent,d),k(H))}}).on("end",B=>{if(!f||p){p&&l.size>0&&t().updateNodePositions(l,!1);return}if(s=!1,f=!1,cancelAnimationFrame(i),l.size>0){let{nodeLookup:U,updateNodePositions:L,onNodeDragStop:N,onSelectionDragStop:A}=t();if(h&&(L(l,!1),h=!1),n||N||!y&&A){let[M,D]=Ix({nodeId:y,dragItems:l,nodeLookup:U,dragging:!1});n?.(B.sourceEvent,l,M,D),N?.(B.sourceEvent,M,D),y||A?.(B.sourceEvent,D)}}}).filter(B=>{let U=B.target;return!B.button&&(!b||!$C(U,`.${b}`,x))&&(!m||$C(U,m,x))});c.call(R)}function g(){c?.on(".drag",null)}return{update:v,destroy:g}}function pT(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())uu(n,cs(r))>0&&o.push(r);return o}var mT=250;function gT(e,t,a,o){let n=[],r=1/0,i=pT(e,a,t+mT);for(let l of i){let s=[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=Ur(l,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let l=o.type==="source"?"target":"source";return n.find(s=>s.type===l)??n[0]}return n[0]}function vS(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let l=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],s=(a?l?.find(u=>u.id===a):l?.[0])??null;return s&&r?{...s,...Ur(i,s,s.position,!0)}:s}function yS(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function hT(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var CS=()=>!0;function xT(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:l,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:h,onConnect:w,onConnectEnd:v,isValidConnection:g=CS,onReconnectEnd:b,updateConnection:m,getTransform:x,getFromHandle:S,autoPanSpeed:y,dragThreshold:C=1,handleDomNode:k}){let _=jx(e.target),T=0,R,{x:B,y:U}=wo(e),L=yS(r,k),N=l?.getBoundingClientRect(),A=!1;if(!N||!L)return;let M=vS(n,L,o,s,t);if(!M)return;let D=wo(e,N),H=!1,z=null,F=!1,I=null;function O(){if(!d||!N)return;let[ce,ae]=vp(D,N,y);c({x:ce,y:ae}),T=requestAnimationFrame(O)}let j={...M,nodeId:n,type:L,position:M.position},K=s.get(n),$={inProgress:!0,isValid:null,from:Ur(K,j,oe.Left,!0),fromHandle:j,fromPosition:j.position,fromNode:K,to:D,toHandle:null,toPosition:UC[j.position],toNode:null,pointer:D};function G(){A=!0,m($),h?.(e,{nodeId:n,handleId:o,handleType:L})}C===0&&G();function Z(ce){if(!A){let{x:te,y:Me}=wo(ce),qe=te-B,ht=Me-U;if(!(qe*qe+ht*ht>C*C))return;G()}if(!S()||!j){ue(ce);return}let ae=x();D=wo(ce,N),R=gT(ps(D,ae,!1,[1,1]),a,s,j),H||(O(),H=!0);let ie=SS(ce,{handle:R,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:g,doc:_,lib:u,flowId:f,nodeLookup:s});I=ie.handleDomNode,z=ie.connection,F=hT(!!R,ie.isValid);let we=s.get(n),Ie=we?Ur(we,j,oe.Left,!0):$.from,Oe={...$,from:Ie,isValid:F,to:ie.toHandle&&F?Ri({x:ie.toHandle.x,y:ie.toHandle.y},ae):D,toHandle:ie.toHandle,toPosition:F&&ie.toHandle?ie.toHandle.position:UC[j.position],toNode:ie.toHandle?s.get(ie.toHandle.nodeId):null,pointer:D};m(Oe),$=Oe}function ue(ce){if(!("touches"in ce&&ce.touches.length>0)){if(A){(R||I)&&z&&F&&w?.(z);let{inProgress:ae,...ie}=$,we={...ie,toPosition:$.toHandle?$.toPosition:null};v?.(ce,we),r&&b?.(ce,we)}p(),cancelAnimationFrame(T),H=!1,F=!1,z=null,I=null,_.removeEventListener("mousemove",Z),_.removeEventListener("mouseup",ue),_.removeEventListener("touchmove",Z),_.removeEventListener("touchend",ue)}}_.addEventListener("mousemove",Z),_.addEventListener("mouseup",ue),_.addEventListener("touchmove",Z),_.addEventListener("touchend",ue)}function SS(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:l,flowId:s,isValidConnection:u=CS,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${l}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=wo(e),w=i.elementFromPoint(p,h),v=w?.classList.contains(`${l}-flow__handle`)?w:c,g={handleDomNode:v,isValid:!1,connection:null,toHandle:null};if(v){let b=yS(void 0,v),m=v.getAttribute("data-nodeid"),x=v.getAttribute("data-handleid"),S=v.classList.contains("connectable"),y=v.classList.contains("connectableend");if(!m||!b)return g;let C={source:f?m:o,sourceHandle:f?x:n,target:f?o:m,targetHandle:f?n:x};g.connection=C;let _=S&&y&&(a===Fr.Strict?f&&b==="source"||!f&&b==="target":m!==o||x!==n);g.isValid=_&&u(C),g.toHandle=vS(m,b,x,d,a,!0)}return g}var Np={onPointerDown:xT,isValid:SS};function LS({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=Ot(e);function r({translateExtent:l,width:s,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=a(),S=m.sourceEvent.ctrlKey&&ms()?10:1,y=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,C=x[2]*Math.pow(2,y*S);t.scaleTo(C)},w=[0,0],v=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},g=m=>{let x=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],y=[S[0]-w[0],S[1]-w[1]];w=S;let C=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),k={x:x[0]-y[0]*C,y:x[1]-y[1]*C},_=[[0,0],[s,u]];t.setViewportConstrained({x:k.x,y:k.y,zoom:x[2]},_,l)},b=gp().on("start",v).on("zoom",f?g:null).on("zoom.wheel",c?h:null);n.call(b,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:ca}}var Ep=e=>({x:e.x,y:e.y,zoom:e.k}),Mx=({x:e,y:t,zoom:a})=>Ai.translate(e,t).scale(a),Hr=(e,t)=>e.target.closest(`.${t}`),kS=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),bT=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Nx=(e,t=0,a=bT,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},_S=e=>{let t=e.ctrlKey&&ms()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function wT({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:l,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(Hr(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let v=ca(d),g=_S(d),b=f*Math.pow(2,g);o.scaleTo(a,b,v,d);return}let c=d.deltaMode===1?20:1,p=n===Do.Vertical?0:d.deltaX*c,h=n===Do.Horizontal?0:d.deltaY*c;!ms()&&d.shiftKey&&n!==Do.Vertical&&(p=d.deltaY*c,h=0),o.translateBy(a,-(p/f)*r,-(h/f)*r,{internal:!0});let w=Ep(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,w):(e.isPanScrolling=!0,l?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function vT({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,l=Hr(o,e);if(o.ctrlKey&&r&&l&&o.preventDefault(),i||l)return null;o.preventDefault(),a.call(this,o,n)}}function yT({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Ep(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function CT({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&kS(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Ep(r.transform))}}function ST({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&kS(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let l=Ep(i.transform);e.prevViewport=l,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,l)},a?150:0)}}}function LT({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:l,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,h=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(Hr(c,`${d}-flow__node`)||Hr(c,`${d}-flow__edge`)||Hr(c,`${d}-flow__selection`)||Hr(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||l||f&&!w||Hr(c,s)&&w||Hr(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!h&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let v=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&v}}function IS({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:l,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(U=>{let L=U[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=gp().extent(()=>f).scaleExtent([t,a]).translateExtent(o),h=Ot(e).call(p);x({x:n.x,y:n.y,zoom:ss(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=h.on("wheel.zoom"),v=h.on("dblclick.zoom");p.wheelDelta(_S);async function g(U,L){return h?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?Un:Ni).transform(Nx(h,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function b({noWheelClassName:U,noPanClassName:L,onPaneContextMenu:N,userSelectionActive:A,panOnScroll:M,panOnDrag:D,panOnScrollMode:H,panOnScrollSpeed:z,preventScrolling:F,zoomOnPinch:I,zoomOnScroll:O,zoomOnDoubleClick:j,panActivationKeyPressed:K=!1,zoomActivationKeyPressed:W,lib:$,onTransformChange:G,connectionInProgress:Z,paneClickDistance:ue,selectionOnDrag:ce}){A&&!u.isZoomingOrPanning&&m();let ae=M&&!W&&!A;p.clickDistance(ce?1/0:!bo(ue)||ue<0?0:ue);let ie=ae?wT({zoomPanValues:u,noWheelClassName:U,d3Selection:h,d3Zoom:p,panOnScrollMode:H,panOnScrollSpeed:z,zoomOnPinch:I,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:l}):vT({noWheelClassName:U,preventScrolling:F,d3ZoomHandler:w});h.on("wheel.zoom",ie,{passive:!1});let we=yT({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:i});p.on("start",we);let Ie=CT({zoomPanValues:u,panOnDrag:D,onPaneContextMenu:!!N,onPanZoom:r,onTransformChange:G});p.on("zoom",Ie);let Oe=ST({zoomPanValues:u,panOnDrag:D,panOnScroll:M,onPaneContextMenu:N,onPanZoomEnd:l,onDraggingChange:s});p.on("end",Oe);let te=LT({panActivationKeyPressed:K,zoomActivationKeyPressed:W,panOnDrag:D,zoomOnScroll:O,panOnScroll:M,zoomOnDoubleClick:j,zoomOnPinch:I,userSelectionActive:A,noPanClassName:L,noWheelClassName:U,lib:$,connectionInProgress:Z});p.filter(te),j?h.on("dblclick.zoom",v):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(U,L,N){let A=Mx(U),M=p?.constrain()(A,L,N);return M&&await g(M),M}async function S(U,L){let N=Mx(U);return await g(N,L),N}function y(U){if(h){let L=Mx(U),N=h.property("__zoom");(N.k!==U.zoom||N.x!==U.x||N.y!==U.y)&&p?.transform(h,L,null,{sync:!0})}}function C(){let U=h?lu(h.node()):{x:0,y:0,k:1};return{x:U.x,y:U.y,zoom:U.k}}async function k(U,L){return h?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?Un:Ni).scaleTo(Nx(h,L?.duration,L?.ease,()=>N(!0)),U)}):!1}async function _(U,L){return h?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?Un:Ni).scaleBy(Nx(h,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function T(U){p?.scaleExtent(U)}function R(U){p?.translateExtent(U)}function B(U){let L=!bo(U)||U<0?0:U;p?.clickDistance(L)}return{update:b,destroy:m,setViewport:S,setViewportConstrained:x,getViewport:C,scaleTo:k,scaleBy:_,setScaleExtent:T,setTranslateExtent:R,syncViewport:y,setClickDistance:B}}var qr;(function(e){e.Line="line",e.Handle="handle"})(qr||(qr={}));function kT({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,l=a-o,s=[i>0?1:i<0?-1:0,l>0?1:l<0?-1:0];return i&&n&&(s[0]=s[0]*-1),l&&r&&(s[1]=s[1]*-1),s}function QC(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function Or(e,t){return Math.max(0,t-e)}function Br(e,t){return Math.max(0,e-t)}function xp(e,t,a){return Math.max(0,t-e,e-a)}function JC(e,t){return e?!t:t}function _T(e,t,a,o,n,r,i,l){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:h}=a,{minWidth:w,maxWidth:v,minHeight:g,maxHeight:b}=o,{x:m,y:x,width:S,height:y,aspectRatio:C}=e,k=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?h-e.pointerY:0),T=S+(s?-k:k),R=y+(u?-_:_),B=-r[0]*S,U=-r[1]*y,L=xp(T,w,v),N=xp(R,g,b);if(i){let D=0,H=0;s&&k<0?D=Or(m+k+B,i[0][0]):!s&&k>0&&(D=Br(m+T+B,i[1][0])),u&&_<0?H=Or(x+_+U,i[0][1]):!u&&_>0&&(H=Br(x+R+U,i[1][1])),L=Math.max(L,D),N=Math.max(N,H)}if(l){let D=0,H=0;s&&k>0?D=Br(m+k,l[0][0]):!s&&k<0&&(D=Or(m+T,l[1][0])),u&&_>0?H=Br(x+_,l[0][1]):!u&&_<0&&(H=Or(x+R,l[1][1])),L=Math.max(L,D),N=Math.max(N,H)}if(n){if(d){let D=xp(T/C,g,b)*C;if(L=Math.max(L,D),i){let H=0;!s&&!u||s&&!u&&c?H=Br(x+U+T/C,i[1][1])*C:H=Or(x+U+(s?k:-k)/C,i[0][1])*C,L=Math.max(L,H)}if(l){let H=0;!s&&!u||s&&!u&&c?H=Or(x+T/C,l[1][1])*C:H=Br(x+(s?k:-k)/C,l[0][1])*C,L=Math.max(L,H)}}if(f){let D=xp(R*C,w,v)/C;if(N=Math.max(N,D),i){let H=0;!s&&!u||u&&!s&&c?H=Br(m+R*C+B,i[1][0])/C:H=Or(m+(u?_:-_)*C+B,i[0][0])/C,N=Math.max(N,H)}if(l){let H=0;!s&&!u||u&&!s&&c?H=Or(m+R*C,l[1][0])/C:H=Br(m+(u?_:-_)*C,l[0][0])/C,N=Math.max(N,H)}}}_=_+(_<0?N:-N),k=k+(k<0?L:-L),n&&(c?T>R*C?_=(JC(s,u)?-k:k)/C:k=(JC(s,u)?-_:_)*C:d?(_=k/C,u=s):(k=_*C,s=u));let A=s?m+k:m,M=u?x+_:x;return{width:S+(s?-k:k),height:y+(u?-_:_),x:r[0]*k*(s?-1:1)+A,y:r[1]*_*(u?-1:1)+M}}var MS={width:0,height:0,x:0,y:0},IT={...MS,pointerX:0,pointerY:0,aspectRatio:1};function MT(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,l=a[0]*r,s=a[1]*i;return[[o-l,n-s],[o+r-l,n+i-s]]}function NS({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=Ot(e),i={controlDirection:QC("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function l({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:h,onResizeEnd:w,shouldResize:v}){let g={...MS},b={...IT};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:QC(u)};let m,x=null,S=[],y,C,k,_=!1,T=Zf().on("start",R=>{let{nodeLookup:B,transform:U,snapGrid:L,snapToGrid:N,nodeOrigin:A,paneDomNode:M}=a();if(m=B.get(t),!m)return;x=M?.getBoundingClientRect()??null;let{xSnapped:D,ySnapped:H}=su(R.sourceEvent,{transform:U,snapGrid:L,snapToGrid:N,containerBounds:x});g={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},b={...g,pointerX:D,pointerY:H,aspectRatio:g.width/g.height},y=void 0,C=zi(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(y=B.get(m.parentId)),y&&m.extent==="parent"&&(C=[[0,0],[y.measured.width,y.measured.height]]),S=[],k=void 0;for(let[z,F]of B)if(F.parentId===t&&(S.push({id:z,position:{...F.position},extent:F.extent}),F.extent==="parent"||F.expandParent)){let I=MT(F,m,F.origin??A);k?k=[[Math.min(I[0][0],k[0][0]),Math.min(I[0][1],k[0][1])],[Math.max(I[1][0],k[1][0]),Math.max(I[1][1],k[1][1])]]:k=I}p?.(R,{...g})}).on("drag",R=>{let{transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:N}=a(),A=su(R.sourceEvent,{transform:B,snapGrid:U,snapToGrid:L,containerBounds:x}),M=[];if(!m)return;let{x:D,y:H,width:z,height:F}=g,I={},O=m.origin??N,{width:j,height:K,x:W,y:$}=_T(b,i.controlDirection,A,i.boundaries,i.keepAspectRatio,O,C,k),G=j!==z,Z=K!==F,ue=W!==D&&G,ce=$!==H&&Z;if(!ue&&!ce&&!G&&!Z)return;if((ue||ce||O[0]===1||O[1]===1)&&(I.x=ue?W:g.x,I.y=ce?$:g.y,g.x=I.x,g.y=I.y,S.length>0)){let Ie=W-D,Oe=$-H;for(let te of S)te.position={x:te.position.x-Ie+O[0]*(j-z),y:te.position.y-Oe+O[1]*(K-F)},M.push(te)}if((G||Z)&&(I.width=G&&(!i.resizeDirection||i.resizeDirection==="horizontal")?j:g.width,I.height=Z&&(!i.resizeDirection||i.resizeDirection==="vertical")?K:g.height,g.width=I.width,g.height=I.height),y&&m.expandParent){let Ie=O[0]*(I.width??0);I.x&&I.x<Ie&&(g.x=Ie,b.x=b.x-(I.x-Ie));let Oe=O[1]*(I.height??0);I.y&&I.y<Oe&&(g.y=Oe,b.y=b.y-(I.y-Oe))}let ae=kT({width:g.width,prevWidth:z,height:g.height,prevHeight:F,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),ie={...g,direction:ae};v?.(R,ie)!==!1&&(_=!0,h?.(R,ie),o(I,M))}).on("end",R=>{_&&(w?.(R,{...g}),n?.({...g}),_=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:l,destroy:s}}var qS=E(Q(),1),VS=E(OS(),1);var HS={},BS=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(h=>h(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(HS.env?HS.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},FS=e=>e?BS(e):BS;var{useDebugValue:jT}=qS.default,{useSyncExternalStoreWithSelector:YT}=VS.default,ZT=e=>e;function a0(e,t=ZT,a){let o=YT(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return jT(o),o}var US=(e,t)=>{let a=FS(e),o=(n,r=t)=>a0(a,n,r);return Object.assign(o,a),o},GS=(e,t)=>e?US(e,t):US;function Ye(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var WT=E(Dt()),zp=(0,V.createContext)(null),KT=zp.Provider,xL=Wa.error001("react");function ye(e,t){let a=(0,V.useContext)(zp);if(a===null)throw new Error(xL);return a0(a,e,t)}function rt(){let e=(0,V.useContext)(zp);if(e===null)throw new Error(xL);return(0,V.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var XS={display:"none"},$T={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},bL="react-flow__node-desc",wL="react-flow__edge-desc",QT="react-flow__aria-live",JT=e=>e.ariaLiveMessage,eA=e=>e.ariaLabelConfig;function tA({rfId:e}){let t=ye(JT);return(0,q.jsx)("div",{id:`${QT}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:$T,children:t})}function aA({rfId:e,disableKeyboardA11y:t}){let a=ye(eA);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{id:`${bL}-${e}`,style:XS,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,q.jsx)("div",{id:`${wL}-${e}`,style:XS,children:a["edge.a11yDescription.default"]}),!t&&(0,q.jsx)(tA,{rfId:e})]})}var Pp=(0,V.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,q.jsx)("div",{className:ft(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Pp.displayName="Panel";var jS="https://reactflow.dev?utm_source=attribution";function oA({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,q.jsx)(Pp,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${jS}`,children:(0,q.jsx)("a",{href:jS,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var nA=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Ap=e=>e.id;function rA(e,t){return Ye(e.selectedNodes.map(Ap),t.selectedNodes.map(Ap))&&Ye(e.selectedEdges.map(Ap),t.selectedEdges.map(Ap))}function iA({onSelectionChange:e}){let t=rt(),{selectedNodes:a,selectedEdges:o}=ye(nA,rA);return(0,V.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var lA=e=>!!e.onSelectionChangeHandlers;function sA({onSelectionChange:e}){let t=ye(lA);return e||t?(0,q.jsx)(iA,{onSelectionChange:e}):null}var vL=[0,0],dA={x:0,y:0,zoom:1},uA=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],YS=[...uA,"rfId"],cA=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),ZS={translateExtent:ds,nodeOrigin:vL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function fA(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:l,setDefaultNodesAndEdges:s}=ye(cA,Ye),u=rt();(0,V.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=ZS,l()}),[]);let d=(0,V.useRef)(ZS);return(0,V.useEffect)(()=>{for(let f of YS){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:lS(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},YS.map(f=>e[f])),null}function WS(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function pA(e){let[t,a]=(0,V.useState)(e==="system"?null:e);return(0,V.useEffect)(()=>{if(e!=="system"){a(e);return}let o=WS(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:WS()?.matches?"dark":"light"}var KS=typeof document<"u"?document:null;function pu(e=null,t={target:KS,actInsideInputWithModifier:!0}){let[a,o]=(0,V.useState)(!1),n=(0,V.useRef)(!1),r=(0,V.useRef)(new Set([])),[i,l]=(0,V.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,V.useEffect)(()=>{let s=t?.target??KS,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&Yx(p))return!1;let w=QS(p.code,l);if(r.current.add(p[w]),$S(i,r.current,!1)){let v=p.composedPath?.()?.[0]||p.target,g=v?.nodeName==="BUTTON"||v?.nodeName==="A";t.preventDefault!==!1&&(n.current||!g)&&p.preventDefault(),o(!0)}},f=p=>{let h=QS(p.code,l);$S(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[h]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function $S(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function QS(e,t){return t.includes(e)?"code":"key"}var mA=()=>{let e=rt();return(0,V.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:l}=e.getState(),s=cu(t,o,n,r,i,a?.padding??.1);return l?(await l.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:l,y:s}=i.getBoundingClientRect(),u={x:t.x-l,y:t.y-s},d=a.snapGrid??n,f=a.snapToGrid??r;return ps(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=Ri(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function yL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let l={...r};for(let s of i)gA(s,l);a.push(l)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function gA(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function i0(e,t){return yL(e,t)}function l0(e,t){return yL(e,t)}function Pi(e,t){return{id:e,type:"select",selected:t}}function xs(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(Pi(r.id,i)))}return o}function JS({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),l=i?.internals?.userNode??i;l!==void 0&&l!==r&&a.push({id:r.id,item:r,type:"replace"}),l===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function eL(e){return{id:e.id,type:"remove"}}var hA=qx("React Flow","https://reactflow.dev/");function xA(e,t,a={}){return uS(e,t,{...a,onError:a.onError??hA})}var tL=e=>eS(e),bA=e=>zx(e);function CL(e){return(0,V.forwardRef)(e)}var SL=typeof window<"u"?V.useLayoutEffect:V.useEffect;function aL(e){let[t,a]=(0,V.useState)(BigInt(0)),[o]=(0,V.useState)(()=>wA(()=>a(n=>n+BigInt(1))));return SL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function wA(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var LL=(0,V.createContext)(null);function vA({children:e}){let t=rt(),a=(0,V.useCallback)(l=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),w=s;for(let g of l)w=typeof g=="function"?g(w):g;let v=JS({items:w,lookup:c});for(let g of h.values())v=g(v);d&&u(w),v.length>0?f?.(v):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:b,setNodes:m}=t.getState();g&&m(b)})},[]),o=aL(a),n=(0,V.useCallback)(l=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let h of l)p=typeof h=="function"?h(p):h;d?u(p):f&&f(JS({items:p,lookup:c}))},[]),r=aL(n),i=(0,V.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,q.jsx)(LL.Provider,{value:i,children:e})}function yA(){let e=(0,V.useContext)(LL);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var CA=e=>!!e.panZoom;function Ka(){let e=mA(),t=rt(),a=yA(),o=ye(CA),n=(0,V.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},l=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),h=tL(f)?f:c.get(f.id),w=h.parentId?Gx(h.position,h.measured,h.parentId,c,p):h.position,v={...h,position:w,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return cs(v)},u=(f,c,p={replace:!1})=>{i(h=>h.map(w=>{if(w.id===f){let v=typeof c=="function"?c(w):c;return p.replace&&tL(v)?v:{...w,...v}}return w}))},d=(f,c,p={replace:!1})=>{l(h=>h.map(w=>{if(w.id===f){let v=typeof c=="function"?c(w):c;return p.replace&&bA(v)?v:{...w,...v}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:l,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[h,w,v]=p;return{nodes:f.map(g=>({...g})),edges:c.map(g=>({...g})),viewport:{x:h,y:w,zoom:v}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:h,onNodesDelete:w,onEdgesDelete:v,triggerNodeChanges:g,triggerEdgeChanges:b,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:S,edges:y}=await oS({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:h,onBeforeDelete:x}),C=y.length>0,k=S.length>0;if(C){let _=y.map(eL);v?.(y),b(_)}if(k){let _=S.map(eL);w?.(S),g(_)}return(k||C)&&m?.({nodes:S,edges:y}),{deletedNodes:S,deletedEdges:y}},getIntersectingNodes:(f,c=!0,p)=>{let h=Ux(f),w=h?f:s(f),v=p!==void 0;return w?(p||t.getState().nodes).filter(g=>{let b=t.getState().nodeLookup.get(g.id);if(b&&!h&&(g.id===f.id||!b.internals.positionAbsolute))return!1;let m=cs(v?g:b),x=uu(m,w);return c&&x>0||x>=m.width*m.height||x>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=Ux(f)?f:s(f);if(!w)return!1;let v=uu(w,c);return p&&v>0||v>=c.width*c.height||v>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,h=>{let w=typeof c=="function"?c(h):c;return p.replace?{...h,data:w}:{...h,data:{...h.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,h=>{let w=typeof c=="function"?c(h):c;return p.replace?{...h,data:w}:{...h,data:{...h.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Bx(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??iS();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,V.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var oL=e=>e.selected,SA=typeof window<"u"?window:void 0;function LA({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=rt(),{deleteElements:o}=Ka(),n=pu(e,{actInsideInputWithModifier:!1}),r=pu(t,{target:SA});(0,V.useEffect)(()=>{if(n){let{edges:i,nodes:l}=a.getState();o({nodes:l.filter(oL),edges:i.filter(oL)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,V.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function kA(e){let t=rt();(0,V.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Sp(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Wa.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Op={position:"absolute",width:"100%",height:"100%",top:0,left:0},_A=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function IA({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=Do.Free,zoomOnDoubleClick:l=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:h=!0,children:w,noWheelClassName:v,noPanClassName:g,onViewportChange:b,isControlledViewport:m,paneClickDistance:x,selectionOnDrag:S}){let y=rt(),C=(0,V.useRef)(null),{userSelectionActive:k,lib:_,connectionInProgress:T}=ye(_A,Ye),R=pu(p),B=(0,V.useRef)();kA(C);let U=(0,V.useCallback)(L=>{b?.({x:L[0],y:L[1],zoom:L[2]}),m||y.setState({transform:L})},[b,m]);return(0,V.useEffect)(()=>{if(C.current){B.current=IS({domNode:C.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:M=>y.setState(D=>D.paneDragging===M?D:{paneDragging:M}),onPanZoomStart:(M,D)=>{let{onViewportChangeStart:H,onMoveStart:z}=y.getState();z?.(M,D),H?.(D)},onPanZoom:(M,D)=>{let{onViewportChange:H,onMove:z}=y.getState();z?.(M,D),H?.(D)},onPanZoomEnd:(M,D)=>{let{onViewportChangeEnd:H,onMoveEnd:z}=y.getState();z?.(M,D),H?.(D)}});let{x:L,y:N,zoom:A}=B.current.getViewport();return y.setState({panZoom:B.current,transform:[L,N,A],domNode:C.current.closest(".react-flow")}),()=>{B.current?.destroy()}}},[]),(0,V.useEffect)(()=>{B.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:l,panOnDrag:s,zoomActivationKeyPressed:R,preventScrolling:h,noPanClassName:g,userSelectionActive:k,noWheelClassName:v,lib:_,onTransformChange:U,connectionInProgress:T,selectionOnDrag:S,paneClickDistance:x})},[e,t,a,o,n,r,i,l,s,R,h,g,k,v,_,U,T,S,x]),(0,q.jsx)("div",{className:"react-flow__renderer",ref:C,style:Op,children:w})}var MA=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function NA(){let{userSelectionActive:e,userSelectionRect:t}=ye(MA,Ye);return e&&t?(0,q.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var o0=(e,t)=>a=>{a.target===t.current&&e?.(a)},EA=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function TA({isSelecting:e,selectionKeyPressed:t,selectionMode:a=Vn.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:l,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:h,children:w}){let v=(0,V.useRef)(0),g=rt(),{userSelectionActive:b,elementsSelectable:m,dragging:x,panBy:S,autoPanSpeed:y}=ye(EA,Ye),C=m&&(e||b),k=(0,V.useRef)(null),_=(0,V.useRef)(),T=(0,V.useRef)(new Set),R=(0,V.useRef)(new Set),B=(0,V.useRef)(!1),U=(0,V.useRef)(!1),L=(0,V.useRef)({x:0,y:0}),N=(0,V.useRef)(!1),A=G=>{if(U.current||B.current||g.getState().connection.inProgress){U.current=!1,B.current=!1;return}u?.(G),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},M=G=>{if(Array.isArray(o)&&o?.includes(2)){G.preventDefault();return}d?.(G)},D=f?G=>f(G):void 0,H=G=>{U.current&&(G.stopPropagation(),U.current=!1)},z=G=>{if(G.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Z,transform:ue}=g.getState();if(_.current=Z?.getBoundingClientRect(),!_.current)return;let ce=G.target===k.current;if(!ce&&!!G.target.closest(".nokey")||!e||!(i&&ce||t)||G.button!==0||!G.isPrimary)return;G.target?.setPointerCapture?.(G.pointerId),U.current=!1;let{x:we,y:Ie}=wo(G.nativeEvent,_.current),Oe=ps({x:we,y:Ie},ue);g.setState({userSelectionRect:{width:0,height:0,startX:Oe.x,startY:Oe.y,x:we,y:Ie}}),ce||(G.stopPropagation(),G.preventDefault())};function F(G,Z){let{userSelectionRect:ue}=g.getState();if(!ue)return;let{transform:ce,nodeLookup:ae,edgeLookup:ie,connectionLookup:we,triggerNodeChanges:Ie,triggerEdgeChanges:Oe,defaultEdgeOptions:te}=g.getState(),Me={x:ue.startX,y:ue.startY},{x:qe,y:ht}=Ri(Me,ce),va={startX:Me.x,startY:Me.y,x:G<qe?G:qe,y:Z<ht?Z:ht,width:Math.abs(G-qe),height:Math.abs(Z-ht)},Zo=T.current,hn=R.current;T.current=new Set(wp(ae,va,ce,a===Vn.Partial,!0).map(Ba=>Ba.id)),R.current=new Set;let xn=te?.selectable??!0;for(let Ba of T.current){let ko=we.get(Ba);if(ko)for(let{edgeId:_o}of ko.values()){let bn=ie.get(_o);bn&&(bn.selectable??xn)&&R.current.add(_o)}}if(!Xx(Zo,T.current)){let Ba=xs(ae,T.current,!0);Ie(Ba)}if(!Xx(hn,R.current)){let Ba=xs(ie,R.current);Oe(Ba)}g.setState({userSelectionRect:va,userSelectionActive:!0,nodesSelectionActive:!1})}function I(){if(!n||!_.current)return;let[G,Z]=vp(L.current,_.current,y);S({x:G,y:Z}).then(ue=>{if(!U.current||!ue){v.current=requestAnimationFrame(I);return}let{x:ce,y:ae}=L.current;F(ce,ae),v.current=requestAnimationFrame(I)})}let O=()=>{cancelAnimationFrame(v.current),v.current=0,N.current=!1};(0,V.useEffect)(()=>()=>O(),[]);let j=G=>{let{userSelectionRect:Z,transform:ue,resetSelectedElements:ce}=g.getState();if(!_.current||!Z)return;let{x:ae,y:ie}=wo(G.nativeEvent,_.current);L.current={x:ae,y:ie};let we=Ri({x:Z.startX,y:Z.startY},ue);if(!U.current){let Ie=t?0:r;if(Math.hypot(ae-we.x,ie-we.y)<=Ie)return;ce(),l?.(G)}U.current=!0,N.current||(I(),N.current=!0),F(ae,ie)},K=G=>{if(!C){G.target===k.current&&g.getState().connection.inProgress&&(B.current=!0);return}G.button===0&&(G.target?.releasePointerCapture?.(G.pointerId),!b&&G.target===k.current&&g.getState().userSelectionRect&&A?.(G),g.setState({userSelectionActive:!1,userSelectionRect:null}),U.current&&(s?.(G),g.setState({nodesSelectionActive:T.current.size>0})),O())},W=G=>{G.target?.releasePointerCapture?.(G.pointerId),O()},$=o===!0||Array.isArray(o)&&o.includes(0);return(0,q.jsxs)("div",{className:ft(["react-flow__pane",{draggable:$,dragging:x,selection:e}]),onClick:C?void 0:o0(A,k),onContextMenu:o0(M,k),onWheel:o0(D,k),onPointerEnter:C?void 0:c,onPointerMove:C?j:p,onPointerUp:K,onPointerCancel:C?W:void 0,onPointerDownCapture:C?z:void 0,onClickCapture:C?H:void 0,onPointerLeave:h,ref:k,style:Op,children:[w,(0,q.jsx)(NA,{})]})}function r0({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:l,onError:s}=t.getState(),u=l.get(e);if(!u){s?.("012",Wa.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function kL({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let l=rt(),[s,u]=(0,V.useState)(!1),d=(0,V.useRef)();return(0,V.useEffect)(()=>{if(!t)return d.current=wS({getStoreItems:()=>l.getState(),onNodeMouseDown:f=>{r0({id:f,store:l,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,l,e]),(0,V.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),s}var AA=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function _L(){let e=rt();return(0,V.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:l,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=AA(i),p=n?r[0]:5,h=n?r[1]:5,w=a.direction.x*p*a.factor,v=a.direction.y*h*a.factor;for(let[,g]of u){if(!c(g))continue;let b={x:g.internals.positionAbsolute.x+w,y:g.internals.positionAbsolute.y+v};n&&(b=fs(b,r));let{position:m,positionAbsolute:x}=Hx({nodeId:g.id,nextPosition:b,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:l});g.position=m,g.internals.positionAbsolute=x,f.set(g.id,g)}s(f)},[])}var s0=(0,V.createContext)(null),DA=s0.Provider;s0.Consumer;var IL=()=>(0,V.useContext)(s0),RA=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),ML=(0,V.createContext)(null);function zA({children:e}){let t=ye(RA,Ye);return(0,q.jsx)(ML.Provider,{value:t,children:e})}function PA(){let e=(0,V.useContext)(ML);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var OA={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},BA=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:l,toHandle:s,isValid:u}=i;if(!l&&!n)return OA;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:l?.nodeId===e&&l?.id===t&&l?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===Fr.Strict?l?.type!==a:e!==l?.nodeId||t!==l?.id,connectionInProcess:!!l,clickConnectionInProcess:!!n,valid:d&&u}};function HA({type:e="source",position:t=oe.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:l,children:s,className:u,onMouseDown:d,onTouchStart:f,...c},p){let h=i||null,w=e==="target",v=rt(),g=IL(),{connectOnClick:b,noPanClassName:m,rfId:x}=PA(),{connectingFrom:S,connectingTo:y,clickConnecting:C,isPossibleEndHandle:k,connectionInProcess:_,clickConnectionInProcess:T,valid:R}=ye(BA(g,h,e),Ye);g||v.getState().onError?.("010",Wa.error010());let B=N=>{let{defaultEdgeOptions:A,onConnect:M,hasDefaultEdges:D}=v.getState(),H={...A,...N};if(D){let{edges:z,setEdges:F,onError:I}=v.getState();F(xA(H,z,{onError:I}))}M?.(H),l?.(H)},U=N=>{if(!g)return;let A=Zx(N.nativeEvent);if(n&&(A&&N.button===0||!A)){let M=v.getState();Np.onPointerDown(N.nativeEvent,{handleDomNode:N.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:w,handleId:h,nodeId:g,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...D)=>v.getState().onConnectEnd?.(...D),updateConnection:M.updateConnection,onConnect:B,isValidConnection:a||((...D)=>v.getState().isValidConnection?.(...D)??!0),getTransform:()=>v.getState().transform,getFromHandle:()=>v.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}A?d?.(N):f?.(N)},L=N=>{let{onClickConnectStart:A,onClickConnectEnd:M,connectionClickStartHandle:D,connectionMode:H,isValidConnection:z,lib:F,rfId:I,nodeLookup:O,connection:j}=v.getState();if(!g||!D&&!n)return;if(!D){A?.(N.nativeEvent,{nodeId:g,handleId:h,handleType:e}),v.setState({connectionClickStartHandle:{nodeId:g,type:e,id:h}});return}let K=jx(N.target),W=a||z,{connection:$,isValid:G}=Np.isValid(N.nativeEvent,{handle:{nodeId:g,id:h,type:e},connectionMode:H,fromNodeId:D.nodeId,fromHandleId:D.id||null,fromType:D.type,isValidConnection:W,flowId:I,doc:K,lib:F,nodeLookup:O});G&&$&&B($);let Z=structuredClone(j);delete Z.inProgress,Z.toPosition=Z.toHandle?Z.toHandle.position:null,M?.(N,Z),v.setState({connectionClickStartHandle:null})};return(0,q.jsx)("div",{"data-handleid":h,"data-nodeid":g,"data-handlepos":t,"data-id":`${x}-${g}-${h}-${e}`,className:ft(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:C,connectingfrom:S,connectingto:y,valid:R,connectionindicator:o&&(!_||k)&&(_||T?r:n)}]),onMouseDown:U,onTouchStart:U,onClick:b?L:void 0,ref:p,...c,children:s})}var bs=(0,V.memo)(CL(HA));function FA({data:e,isConnectable:t,sourcePosition:a=oe.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[e?.label,(0,q.jsx)(bs,{type:"source",position:a,isConnectable:t})]})}function UA({data:e,isConnectable:t,targetPosition:a=oe.Top,sourcePosition:o=oe.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(bs,{type:"target",position:a,isConnectable:t}),e?.label,(0,q.jsx)(bs,{type:"source",position:o,isConnectable:t})]})}function qA(){return null}function VA({data:e,isConnectable:t,targetPosition:a=oe.Top}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(bs,{type:"target",position:a,isConnectable:t}),e?.label]})}var Rp={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},nL={input:FA,default:UA,output:VA,group:qA};function GA(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var XA=e=>{let{width:t,height:a,x:o,y:n}=us(e.nodeLookup,{filter:r=>!!r.selected});return{width:bo(t)?t:null,height:bo(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function jA({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=rt(),{width:n,height:r,transformString:i,userSelectionActive:l}=ye(XA,Ye),s=_L(),u=(0,V.useRef)(null);(0,V.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!l&&n!==null&&r!==null;if(kL({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let h=o.getState().nodes.filter(w=>w.selected);e(p,h)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Rp,p.key)&&(p.preventDefault(),s({direction:Rp[p.key],factor:p.shiftKey?4:1}))};return(0,q.jsx)("div",{className:ft(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,q.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var rL=typeof window<"u"?window:void 0,YA=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function NL({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:l,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:w,zoomActivationKeyCode:v,elementsSelectable:g,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:S,panOnScrollMode:y,zoomOnDoubleClick:C,panOnDrag:k,autoPanOnSelection:_,defaultViewport:T,translateExtent:R,minZoom:B,maxZoom:U,preventScrolling:L,onSelectionContextMenu:N,noWheelClassName:A,noPanClassName:M,disableKeyboardA11y:D,onViewportChange:H,isControlledViewport:z}){let{nodesSelectionActive:F,userSelectionActive:I}=ye(YA,Ye),O=pu(u,{target:rL}),j=pu(w,{target:rL}),K=j||k,W=j||x,$=d&&K!==!0,G=O||I||$;return LA({deleteKeyCode:s,multiSelectionKeyCode:h}),(0,q.jsx)(IA,{onPaneContextMenu:r,elementsSelectable:g,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:W,panActivationKeyPressed:j,panOnScrollSpeed:S,panOnScrollMode:y,zoomOnDoubleClick:C,panOnDrag:!O&&K,defaultViewport:T,translateExtent:R,minZoom:B,maxZoom:U,zoomActivationKeyCode:v,preventScrolling:L,noWheelClassName:A,noPanClassName:M,onViewportChange:H,isControlledViewport:z,paneClickDistance:l,selectionOnDrag:$,children:(0,q.jsxs)(TA,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:K,autoPanOnSelection:_,isSelecting:!!G,selectionMode:f,selectionKeyPressed:O,paneClickDistance:l,selectionOnDrag:$,children:[e,F&&(0,q.jsx)(jA,{onSelectionContextMenu:N,noPanClassName:M,disableKeyboardA11y:D})]})})}NL.displayName="FlowRenderer";var ZA=(0,V.memo)(NL),WA=e=>t=>e?wp(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function KA(e){return ye((0,V.useCallback)(WA(e),[e]),Ye)}var $A=e=>e.updateNodeInternals;function QA(){let e=ye($A),[t]=(0,V.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,V.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function JA({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=rt(),r=(0,V.useRef)(null),i=(0,V.useRef)(null),l=(0,V.useRef)(e.sourcePosition),s=(0,V.useRef)(e.targetPosition),u=(0,V.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,V.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,V.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,V.useEffect)(()=>{if(r.current){let f=u.current!==t,c=l.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(u.current=t,l.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function e8({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:l,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:h,rfId:w,nodeTypes:v,nodeClickDistance:g,onError:b}){let{node:m,internals:x,isParent:S}=ye(G=>{let Z=G.nodeLookup.get(e),ue=G.parentLookup.has(e);return{node:Z,internals:Z.internals,isParent:ue}},Ye),y=m.type||"default",C=v?.[y]||nL[y];C===void 0&&(b?.("003",Wa.error003(y)),y="default",C=v?.default||nL.default);let k=!!(m.draggable||l&&typeof m.draggable>"u"),_=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||d&&typeof m.focusable>"u"),B=rt(),U=Vx(m),L=JA({node:m,nodeType:y,hasDimensions:U,resizeObserver:f}),N=kL({nodeRef:L,disabled:m.hidden||!k,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:g}),A=_L();if(m.hidden)return null;let M=vo(m),D=GA(m),H=_||k||t||a||o||n,z=a?G=>a(G,{...x.userNode}):void 0,F=o?G=>o(G,{...x.userNode}):void 0,I=n?G=>n(G,{...x.userNode}):void 0,O=r?G=>r(G,{...x.userNode}):void 0,j=i?G=>i(G,{...x.userNode}):void 0,K=G=>{let{selectNodesOnDrag:Z,nodeDragThreshold:ue}=B.getState();_&&(!Z||!k||ue>0)&&r0({id:e,store:B,nodeRef:L}),t&&t(G,{...x.userNode})},W=G=>{if(!(Yx(G.nativeEvent)||h)){if(Tx.includes(G.key)&&_){let Z=G.key==="Escape";r0({id:e,store:B,unselect:Z,nodeRef:L})}else if(k&&m.selected&&Object.prototype.hasOwnProperty.call(Rp,G.key)){G.preventDefault();let{ariaLabelConfig:Z}=B.getState();B.setState({ariaLiveMessage:Z["node.a11yDescription.ariaLiveMessage"]({direction:G.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),A({direction:Rp[G.key],factor:G.shiftKey?4:1})}}},$=()=>{if(h||!L.current?.matches(":focus-visible"))return;let{transform:G,width:Z,height:ue,autoPanOnNodeFocus:ce,setCenter:ae}=B.getState();if(!ce)return;wp(new Map([[e,m]]),{x:0,y:0,width:Z,height:ue},G,!0).length>0||ae(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:G[2]})};return(0,q.jsx)("div",{className:ft(["react-flow__node",`react-flow__node-${y}`,{[p]:k},m.className,{selected:m.selected,selectable:_,parent:S,draggable:k,dragging:N}]),ref:L,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:H?"all":"none",visibility:U?"visible":"hidden",...m.style,...D},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:z,onMouseMove:F,onMouseLeave:I,onContextMenu:O,onClick:K,onDoubleClick:j,onKeyDown:R?W:void 0,tabIndex:R?0:void 0,onFocus:R?$:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${bL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,q.jsx)(DA,{value:e,children:(0,q.jsx)(C,{id:e,data:m.data,type:y,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:k,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:N,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...M})})})}var t8=(0,V.memo)(e8),a8=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function EL(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=ye(a8,Ye),r=KA(e.onlyRenderVisibleElements),i=QA();return(0,q.jsx)("div",{className:"react-flow__nodes",style:Op,children:r.map(l=>(0,q.jsx)(t8,{id:l,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},l))})}EL.displayName="NodeRenderer";var o8=(0,V.memo)(EL);function n8(e){return ye((0,V.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&dS({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ye)}var r8=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,q.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},i8=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,q.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},iL={[ls.Arrow]:r8,[ls.ArrowClosed]:i8};function l8(e){let t=rt();return(0,V.useMemo)(()=>Object.prototype.hasOwnProperty.call(iL,e)?iL[e]:(t.getState().onError?.("009",Wa.error009(e)),null),[e])}var s8=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:l="auto-start-reverse"})=>{let s=l8(t);return s?(0,q.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:l,refX:"0",refY:"0",children:(0,q.jsx)(s,{color:a,strokeWidth:i})}):null},TL=({defaultColor:e,rfId:t})=>{let a=ye(r=>r.edges),o=ye(r=>r.defaultEdgeOptions),n=(0,V.useMemo)(()=>fS(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,q.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,q.jsx)("defs",{children:n.map(r=>(0,q.jsx)(s8,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};TL.displayName="MarkerDefinitions";var d8=(0,V.memo)(TL);function AL({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:l=2,children:s,className:u,...d}){let[f,c]=(0,V.useState)({x:1,y:0,width:0,height:0}),p=ft(["react-flow__edge-textwrapper",u]),h=(0,V.useRef)(null);return(0,V.useEffect)(()=>{if(h.current){let w=h.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,q.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,q.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:l,ry:l}),(0,q.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:h,style:o,children:a}),s]}):null}AL.displayName="EdgeText";var u8=(0,V.memo)(AL);function ws({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("path",{...d,d:e,fill:"none",className:ft(["react-flow__edge-path",d.className])}),u?(0,q.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&bo(t)&&bo(a)?(0,q.jsx)(u8,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s}):null]})}function lL({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===oe.Left||e===oe.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function DL({sourceX:e,sourceY:t,sourcePosition:a=oe.Bottom,targetX:o,targetY:n,targetPosition:r=oe.Top}){let[i,l]=lL({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=lL({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=Lp({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:l,targetControlX:s,targetControlY:u});return[`M${e},${t} C${i},${l} ${s},${u} ${o},${n}`,d,f,c,p]}function RL(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:l,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,interactionWidth:g})=>{let[b,m,x]=DL({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l}),S=e.isInternal?void 0:t;return(0,q.jsx)(ws,{id:S,path:b,labelX:m,labelY:x,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,interactionWidth:g})})}var c8=RL({isInternal:!1}),zL=RL({isInternal:!0});c8.displayName="SimpleBezierEdge";zL.displayName="SimpleBezierEdgeInternal";function PL(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=oe.Bottom,targetPosition:h=oe.Top,markerEnd:w,markerStart:v,pathOptions:g,interactionWidth:b})=>{let[m,x,S]=fu({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:h,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),y=e.isInternal?void 0:t;return(0,q.jsx)(ws,{id:y,path:m,labelX:x,labelY:S,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:v,interactionWidth:b})})}var OL=PL({isInternal:!1}),BL=PL({isInternal:!0});OL.displayName="SmoothStepEdge";BL.displayName="SmoothStepEdgeInternal";function HL(e){return(0,V.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,q.jsx)(OL,{...a,id:o,pathOptions:(0,V.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var f8=HL({isInternal:!1}),FL=HL({isInternal:!0});f8.displayName="StepEdge";FL.displayName="StepEdgeInternal";function UL(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:h,interactionWidth:w})=>{let[v,g,b]=kp({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,q.jsx)(ws,{id:m,path:v,labelX:g,labelY:b,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:h,interactionWidth:w})})}var p8=UL({isInternal:!1}),qL=UL({isInternal:!0});p8.displayName="StraightEdge";qL.displayName="StraightEdgeInternal";function VL(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=oe.Bottom,targetPosition:l=oe.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,pathOptions:g,interactionWidth:b})=>{let[m,x,S]=gs({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l,curvature:g?.curvature}),y=e.isInternal?void 0:t;return(0,q.jsx)(ws,{id:y,path:m,labelX:x,labelY:S,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:h,markerEnd:w,markerStart:v,interactionWidth:b})})}var m8=VL({isInternal:!1}),GL=VL({isInternal:!0});m8.displayName="BezierEdge";GL.displayName="BezierEdgeInternal";var sL={default:GL,straight:qL,step:FL,smoothstep:BL,simplebezier:zL},dL={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},g8=(e,t,a)=>a===oe.Left?e-t:a===oe.Right?e+t:e,h8=(e,t,a)=>a===oe.Top?e-t:a===oe.Bottom?e+t:e,uL="react-flow__edgeupdater";function cL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:l}){return(0,q.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:ft([uL,`${uL}-${l}`]),cx:g8(t,o,e),cy:h8(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function x8({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let h=rt(),w=(x,S)=>{if(x.button!==0)return;let{autoPanOnConnect:y,domNode:C,connectionMode:k,connectionRadius:_,lib:T,onConnectStart:R,cancelConnection:B,nodeLookup:U,rfId:L,panBy:N,updateConnection:A}=h.getState(),M=S.type==="target",D=(F,I)=>{c(!1),f?.(F,a,S.type,I)},H=F=>u?.(a,F),z=(F,I)=>{c(!0),d?.(x,a,S.type),R?.(F,I)};Np.onPointerDown(x.nativeEvent,{autoPanOnConnect:y,connectionMode:k,connectionRadius:_,domNode:C,handleId:S.id,nodeId:S.nodeId,nodeLookup:U,isTarget:M,edgeUpdaterType:S.type,lib:T,flowId:L,cancelConnection:B,panBy:N,isValidConnection:(...F)=>h.getState().isValidConnection?.(...F)??!0,onConnect:H,onConnectStart:z,onConnectEnd:(...F)=>h.getState().onConnectEnd?.(...F),onReconnectEnd:D,updateConnection:A,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},v=x=>w(x,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),g=x=>w(x,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),b=()=>p(!0),m=()=>p(!1);return(0,q.jsxs)(q.Fragment,{children:[(e===!0||e==="source")&&(0,q.jsx)(cL,{position:l,centerX:o,centerY:n,radius:t,onMouseDown:v,onMouseEnter:b,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,q.jsx)(cL,{position:s,centerX:r,centerY:i,radius:t,onMouseDown:g,onMouseEnter:b,onMouseOut:m,type:"target"})]})}function b8({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:h,edgeTypes:w,noPanClassName:v,onError:g,disableKeyboardA11y:b}){let m=ye(ae=>ae.edgeLookup.get(e)),x=ye(ae=>ae.defaultEdgeOptions);m=x?{...x,...m}:m;let S=m.type||"default",y=w?.[S]||sL[S];y===void 0&&(g?.("011",Wa.error011(S)),S="default",y=w?.default||sL.default);let C=!!(m.focusable||t&&typeof m.focusable>"u"),k=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,V.useRef)(null),[R,B]=(0,V.useState)(!1),[U,L]=(0,V.useState)(!1),N=rt(),{zIndex:A=m.zIndex,sourceX:M,sourceY:D,targetX:H,targetY:z,sourcePosition:F,targetPosition:I}=ye((0,V.useCallback)(ae=>{let ie=ae.nodeLookup.get(m.source),we=ae.nodeLookup.get(m.target);if(!ie||!we)return dL;let Ie=cS({id:e,sourceNode:ie,targetNode:we,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:ae.connectionMode,onError:g}),Oe=sS({selected:m.selected,zIndex:m.zIndex,sourceNode:ie,targetNode:we,elevateOnSelect:ae.elevateEdgesOnSelect,zIndexMode:ae.zIndexMode});return{...Ie||dL,zIndex:Oe}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,g]),Ye),O=(0,V.useMemo)(()=>m.markerStart?`url('#${_p(m.markerStart,h)}')`:void 0,[m.markerStart,h]),j=(0,V.useMemo)(()=>m.markerEnd?`url('#${_p(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||M===null||D===null||H===null||z===null)return null;let K=ae=>{let{addSelectedEdges:ie,unselectNodesAndEdges:we,multiSelectionActive:Ie}=N.getState();_&&(N.setState({nodesSelectionActive:!1}),m.selected&&Ie?(we({nodes:[],edges:[m]}),T.current?.blur()):ie([e])),n&&n(ae,m)},W=r?ae=>{r(ae,{...m})}:void 0,$=i?ae=>{i(ae,{...m})}:void 0,G=l?ae=>{l(ae,{...m})}:void 0,Z=s?ae=>{s(ae,{...m})}:void 0,ue=u?ae=>{u(ae,{...m})}:void 0,ce=ae=>{if(!b&&Tx.includes(ae.key)&&_){let{unselectNodesAndEdges:ie,addSelectedEdges:we}=N.getState();ae.key==="Escape"?(T.current?.blur(),ie({edges:[m]})):we([e])}};return(0,q.jsx)("svg",{style:{zIndex:A},children:(0,q.jsxs)("g",{className:ft(["react-flow__edge",`react-flow__edge-${S}`,m.className,v,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:R,selectable:_}]),onClick:K,onDoubleClick:W,onContextMenu:$,onMouseEnter:G,onMouseMove:Z,onMouseLeave:ue,onKeyDown:C?ce:void 0,tabIndex:C?0:void 0,role:m.ariaRole??(C?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":C?`${wL}-${h}`:void 0,ref:T,...m.domAttributes,children:[!U&&(0,q.jsx)(y,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:D,targetX:H,targetY:z,sourcePosition:F,targetPosition:I,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:O,markerEnd:j,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),k&&(0,q.jsx)(x8,{edge:m,isReconnectable:k,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:M,sourceY:D,targetX:H,targetY:z,sourcePosition:F,targetPosition:I,setUpdateHover:B,setReconnecting:L})]})})}var w8=(0,V.memo)(b8),v8=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function XL({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:l,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:w}){let{edgesFocusable:v,edgesReconnectable:g,elementsSelectable:b,onError:m}=ye(v8,Ye),x=n8(t);return(0,q.jsxs)("div",{className:"react-flow__edges",children:[(0,q.jsx)(d8,{defaultColor:e,rfId:a}),x.map(S=>(0,q.jsx)(w8,{id:S,edgesFocusable:v,edgesReconnectable:g,elementsSelectable:b,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:h,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},S))]})}XL.displayName="EdgeRenderer";var y8=(0,V.memo)(XL),fL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function C8({children:e}){let t=rt(),a=(0,V.useRef)(null),[o]=(0,V.useState)(()=>t.getState().transform);return SL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=fL(i)))};return r(),t.subscribe(r)},[t]),(0,q.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:fL(o)},children:e})}function S8(e){let t=Ka(),a=(0,V.useRef)(!1);(0,V.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var L8=e=>e.panZoom?.syncViewport;function k8(e){let t=ye(L8),a=rt();return(0,V.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function pL(e){return e.connection.inProgress?{...e.connection,to:ps(e.connection.to,e.transform)}:{...e.connection}}function _8(e){return e?a=>{let o=pL(a);return e(o)}:pL}function d0(e){let t=_8(e);return ye(t,Ye)}var I8=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function M8({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:l,inProgress:s}=ye(I8,Ye);return!(r&&n&&s)?null:(0,q.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,q.jsx)("g",{className:ft(["react-flow__connection",Rx(l)]),children:(0,q.jsx)(jL,{style:t,type:a,CustomComponent:o,isValid:l})})})}var jL=({style:e,type:t=nn.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:l,fromPosition:s,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=d0();if(!n)return;if(a)return(0,q.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:l,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:Rx(o),toNode:d,toHandle:f,pointer:p});let h="",w={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case nn.Bezier:[h]=gs(w);break;case nn.SimpleBezier:[h]=DL(w);break;case nn.Step:[h]=fu({...w,borderRadius:0});break;case nn.SmoothStep:[h]=fu(w);break;default:[h]=kp(w)}return(0,q.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};jL.displayName="ConnectionLine";var N8={};function mL(e=N8){let t=(0,V.useRef)(e),a=rt();(0,V.useEffect)(()=>{},[e])}function E8(){let e=rt(),t=(0,V.useRef)(!1);(0,V.useEffect)(()=>{},[])}function YL({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:w,connectionLineComponent:v,connectionLineContainerStyle:g,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:S,panActivationKeyCode:y,zoomActivationKeyCode:C,deleteKeyCode:k,onlyRenderVisibleElements:_,elementsSelectable:T,defaultViewport:R,translateExtent:B,minZoom:U,maxZoom:L,preventScrolling:N,defaultMarkerColor:A,zoomOnScroll:M,zoomOnPinch:D,panOnScroll:H,panOnScrollSpeed:z,panOnScrollMode:F,zoomOnDoubleClick:I,panOnDrag:O,autoPanOnSelection:j,onPaneClick:K,onPaneMouseEnter:W,onPaneMouseMove:$,onPaneMouseLeave:G,onPaneScroll:Z,onPaneContextMenu:ue,paneClickDistance:ce,nodeClickDistance:ae,onEdgeContextMenu:ie,onEdgeMouseEnter:we,onEdgeMouseMove:Ie,onEdgeMouseLeave:Oe,reconnectRadius:te,onReconnect:Me,onReconnectStart:qe,onReconnectEnd:ht,noDragClassName:va,noWheelClassName:Zo,noPanClassName:hn,disableKeyboardA11y:xn,nodeExtent:Ba,rfId:ko,viewport:_o,onViewportChange:bn,nodesDraggable:ee}){return mL(e),mL(t),E8(),S8(a),k8(_o),(0,q.jsx)(ZA,{onPaneClick:K,onPaneMouseEnter:W,onPaneMouseMove:$,onPaneMouseLeave:G,onPaneContextMenu:ue,onPaneScroll:Z,paneClickDistance:ce,deleteKeyCode:k,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:y,zoomActivationKeyCode:C,elementsSelectable:T,zoomOnScroll:M,zoomOnPinch:D,zoomOnDoubleClick:I,panOnScroll:H,panOnScrollSpeed:z,panOnScrollMode:F,panOnDrag:O,autoPanOnSelection:j,defaultViewport:R,translateExtent:B,minZoom:U,maxZoom:L,onSelectionContextMenu:f,preventScrolling:N,noDragClassName:va,noWheelClassName:Zo,noPanClassName:hn,disableKeyboardA11y:xn,onViewportChange:bn,isControlledViewport:!!_o,children:(0,q.jsxs)(C8,{children:[(0,q.jsx)(y8,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:Me,onReconnectStart:qe,onReconnectEnd:ht,onlyRenderVisibleElements:_,onEdgeContextMenu:ie,onEdgeMouseEnter:we,onEdgeMouseMove:Ie,onEdgeMouseLeave:Oe,reconnectRadius:te,defaultMarkerColor:A,noPanClassName:hn,disableKeyboardA11y:xn,rfId:ko}),(0,q.jsx)(M8,{style:w,type:h,component:v,containerStyle:g}),(0,q.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,q.jsx)(o8,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:ae,onlyRenderVisibleElements:_,noPanClassName:hn,noDragClassName:va,disableKeyboardA11y:xn,nodeExtent:Ba,rfId:ko,nodesDraggable:ee}),(0,q.jsx)("div",{className:"react-flow__viewport-portal"})]})})}YL.displayName="GraphView";var T8=(0,V.memo)(YL),A8=qx("React Flow","https://reactflow.dev/"),gL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,h=new Map,w=new Map,v=new Map,g=o??t??[],b=a??e??[],m=d??[0,0],x=f??ds;e0(w,v,g);let{nodesInitialized:S}=Ip(b,p,h,{nodeOrigin:m,nodeExtent:x,zIndexMode:c}),y=[0,0,1];if(i&&n&&r){let C=us(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:k,y:_,zoom:T}=cu(C,n,r,s,u,l?.padding??.1);y=[k,_,T]}return{rfId:"1",width:n??0,height:r??0,transform:y,nodes:b,nodesInitialized:S,nodeLookup:p,parentLookup:h,edges:g,edgeLookup:v,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:ds,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Fr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:l,fitViewResolver:null,connection:{...Dx},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:A8,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Ax,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},D8=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>GS((p,h)=>{async function w(){let{nodeLookup:v,panZoom:g,fitViewOptions:b,fitViewResolver:m,width:x,height:S,minZoom:y,maxZoom:C}=h();g&&(await aS({nodes:v,width:x,height:S,panZoom:g,minZoom:y,maxZoom:C},b),m?.resolve(!0),p({fitViewResolver:null}))}return{...gL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:v=>{let{nodeLookup:g,parentLookup:b,nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:S,fitViewQueued:y,zIndexMode:C,nodesSelectionActive:k}=h(),{nodesInitialized:_,hasSelectedNodes:T}=Ip(v,g,b,{nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:C}),R=k&&T;y&&_?(w(),p({nodes:v,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:R})):p({nodes:v,nodesInitialized:_,nodesSelectionActive:R})},setEdges:v=>{let{connectionLookup:g,edgeLookup:b}=h();e0(g,b,v),p({edges:v})},setDefaultNodesAndEdges:(v,g)=>{if(v){let{setNodes:b}=h();b(v),p({hasDefaultNodes:!0})}if(g){let{setEdges:b}=h();b(g),p({hasDefaultEdges:!0})}},updateNodeInternals:v=>{let{triggerNodeChanges:g,nodeLookup:b,parentLookup:m,domNode:x,nodeOrigin:S,nodeExtent:y,debug:C,fitViewQueued:k,zIndexMode:_}=h(),{changes:T,updatedInternals:R}=hS(v,b,m,x,S,y,_);R&&(mS(b,m,{nodeOrigin:S,nodeExtent:y,zIndexMode:_}),k?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(C&&console.log("React Flow: trigger node changes",T),g?.(T)))},updateNodePositions:(v,g=!1)=>{let b=[],m=[],{nodeLookup:x,triggerNodeChanges:S,connection:y,updateConnection:C,onNodesChangeMiddlewareMap:k}=h();for(let[_,T]of v){let R=x.get(_),B=!!(R?.expandParent&&R?.parentId&&T?.position),U={id:_,type:"position",position:B?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:g};if(R&&y.inProgress&&y.fromNode.id===R.id){let L=Ur(R,y.fromHandle,oe.Left,!0);C({...y,from:L})}B&&R.parentId&&b.push({id:_,parentId:R.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(U)}if(b.length>0){let{parentLookup:_,nodeOrigin:T}=h(),R=Mp(b,x,_,T);m.push(...R)}for(let _ of k.values())m=_(m);S(m)},triggerNodeChanges:v=>{let{onNodesChange:g,setNodes:b,nodes:m,hasDefaultNodes:x,debug:S}=h();if(v?.length){if(x){let y=i0(v,m);b(y)}S&&console.log("React Flow: trigger node changes",v),g?.(v)}},triggerEdgeChanges:v=>{let{onEdgesChange:g,setEdges:b,edges:m,hasDefaultEdges:x,debug:S}=h();if(v?.length){if(x){let y=l0(v,m);b(y)}S&&console.log("React Flow: trigger edge changes",v),g?.(v)}},addSelectedNodes:v=>{let{multiSelectionActive:g,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=h();if(g){let y=v.map(C=>Pi(C,!0));x(y);return}x(xs(m,new Set([...v]),!0)),S(xs(b))},addSelectedEdges:v=>{let{multiSelectionActive:g,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=h();if(g){let y=v.map(C=>Pi(C,!0));S(y);return}S(xs(b,new Set([...v]))),x(xs(m,new Set,!0))},unselectNodesAndEdges:({nodes:v,edges:g}={})=>{let{edges:b,nodes:m,nodeLookup:x,triggerNodeChanges:S,triggerEdgeChanges:y}=h(),C=v||m,k=g||b,_=[];for(let R of C){if(!R.selected)continue;let B=x.get(R.id);B&&(B.selected=!1),_.push(Pi(R.id,!1))}let T=[];for(let R of k)R.selected&&T.push(Pi(R.id,!1));S(_),y(T)},setMinZoom:v=>{let{panZoom:g,maxZoom:b}=h();g?.setScaleExtent([v,b]),p({minZoom:v})},setMaxZoom:v=>{let{panZoom:g,minZoom:b}=h();g?.setScaleExtent([b,v]),p({maxZoom:v})},setTranslateExtent:v=>{h().panZoom?.setTranslateExtent(v),p({translateExtent:v})},resetSelectedElements:()=>{let{edges:v,nodes:g,triggerNodeChanges:b,triggerEdgeChanges:m,elementsSelectable:x}=h();if(!x)return;let S=g.reduce((C,k)=>k.selected?[...C,Pi(k.id,!1)]:C,[]),y=v.reduce((C,k)=>k.selected?[...C,Pi(k.id,!1)]:C,[]);b(S),m(y)},setNodeExtent:v=>{let{nodes:g,nodeLookup:b,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:S,nodeExtent:y,zIndexMode:C}=h();v[0][0]===y[0][0]&&v[0][1]===y[0][1]&&v[1][0]===y[1][0]&&v[1][1]===y[1][1]||(Ip(g,b,m,{nodeOrigin:x,nodeExtent:v,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:C}),p({nodeExtent:v}))},panBy:v=>{let{transform:g,width:b,height:m,panZoom:x,translateExtent:S}=h();return xS({delta:v,panZoom:x,transform:g,translateExtent:S,width:b,height:m})},setCenter:async(v,g,b)=>{let{width:m,height:x,maxZoom:S,panZoom:y}=h();if(!y)return!1;let C=typeof b?.zoom<"u"?b.zoom:S;return await y.setViewport({x:m/2-v*C,y:x/2-g*C,zoom:C},{duration:b?.duration,ease:b?.ease,interpolate:b?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Dx}})},updateConnection:v=>{p({connection:v})},reset:()=>p({...gL()})}},Object.is);function u0({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:l,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[h]=(0,V.useState)(()=>D8({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:l,fitViewOptions:s,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,q.jsx)(KT,{value:h,children:(0,q.jsx)(vA,{children:(0,q.jsx)(zA,{children:p})})})}function R8({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:l,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,V.useContext)(zp)?(0,q.jsx)(q.Fragment,{children:e}):(0,q.jsx)(u0,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:l,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var z8={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function P8({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:l,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:h,onConnectEnd:w,onClickConnectStart:v,onClickConnectEnd:g,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:y,onNodeDragStart:C,onNodeDrag:k,onNodeDragStop:_,onNodesDelete:T,onEdgesDelete:R,onDelete:B,onSelectionChange:U,onSelectionDragStart:L,onSelectionDrag:N,onSelectionDragStop:A,onSelectionContextMenu:M,onSelectionStart:D,onSelectionEnd:H,onBeforeDelete:z,connectionMode:F,connectionLineType:I=nn.Bezier,connectionLineStyle:O,connectionLineComponent:j,connectionLineContainerStyle:K,deleteKeyCode:W="Backspace",selectionKeyCode:$="Shift",selectionOnDrag:G=!1,selectionMode:Z=Vn.Full,panActivationKeyCode:ue="Space",multiSelectionKeyCode:ce=ms()?"Meta":"Control",zoomActivationKeyCode:ae=ms()?"Meta":"Control",snapToGrid:ie,snapGrid:we,onlyRenderVisibleElements:Ie=!1,selectNodesOnDrag:Oe,nodesDraggable:te,autoPanOnNodeFocus:Me,nodesConnectable:qe,nodesFocusable:ht,nodeOrigin:va=vL,edgesFocusable:Zo,edgesReconnectable:hn,elementsSelectable:xn=!0,defaultViewport:Ba=dA,minZoom:ko=.5,maxZoom:_o=2,translateExtent:bn=ds,preventScrolling:ee=!0,nodeExtent:et,defaultMarkerColor:Mt="#b1b1b7",zoomOnScroll:wt=!0,zoomOnPinch:rr=!0,panOnScroll:ro=!1,panOnScrollSpeed:Wo=.5,panOnScrollMode:Bs=Do.Free,zoomOnDoubleClick:HI=!0,panOnDrag:FI=!0,onPaneClick:UI,onPaneMouseEnter:qI,onPaneMouseMove:VI,onPaneMouseLeave:GI,onPaneScroll:XI,onPaneContextMenu:jI,paneClickDistance:YI=1,nodeClickDistance:ZI=0,children:WI,onReconnect:KI,onReconnectStart:$I,onReconnectEnd:QI,onEdgeContextMenu:JI,onEdgeDoubleClick:eM,onEdgeMouseEnter:tM,onEdgeMouseMove:aM,onEdgeMouseLeave:oM,reconnectRadius:nM=10,onNodesChange:rM,onEdgesChange:iM,noDragClassName:lM="nodrag",noWheelClassName:sM="nowheel",noPanClassName:Z0="nopan",fitView:W0,fitViewOptions:K0,connectOnClick:dM,attributionPosition:uM,proOptions:cM,defaultEdgeOptions:fM,elevateNodesOnSelect:pM=!0,elevateEdgesOnSelect:mM=!1,disableKeyboardA11y:$0=!1,autoPanOnConnect:gM,autoPanOnNodeDrag:hM,autoPanOnSelection:xM=!0,autoPanSpeed:bM,connectionRadius:wM,isValidConnection:vM,onError:yM,style:CM,id:Q0,nodeDragThreshold:SM,connectionDragThreshold:LM,viewport:kM,onViewportChange:_M,width:IM,height:MM,colorMode:NM="light",debug:EM,onScroll:J0,ariaLabelConfig:TM,zIndexMode:eb="basic",...AM},DM){let _m=Q0||"1",RM=pA(NM),zM=(0,V.useCallback)(tb=>{tb.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),J0?.(tb)},[J0]);return(0,q.jsx)("div",{"data-testid":"rf__wrapper",...AM,onScroll:zM,style:{...CM,...z8},ref:DM,className:ft(["react-flow",n,RM]),id:Q0,role:"application",children:(0,q.jsxs)(R8,{nodes:e,edges:t,width:IM,height:MM,fitView:W0,fitViewOptions:K0,minZoom:ko,maxZoom:_o,nodeOrigin:va,nodeExtent:et,zIndexMode:eb,children:[(0,q.jsx)(fA,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:w,onClickConnectStart:v,onClickConnectEnd:g,nodesDraggable:te,autoPanOnNodeFocus:Me,nodesConnectable:qe,nodesFocusable:ht,edgesFocusable:Zo,edgesReconnectable:hn,elementsSelectable:xn,elevateNodesOnSelect:pM,elevateEdgesOnSelect:mM,minZoom:ko,maxZoom:_o,nodeExtent:et,onNodesChange:rM,onEdgesChange:iM,snapToGrid:ie,snapGrid:we,connectionMode:F,translateExtent:bn,connectOnClick:dM,defaultEdgeOptions:fM,fitView:W0,fitViewOptions:K0,onNodesDelete:T,onEdgesDelete:R,onDelete:B,onNodeDragStart:C,onNodeDrag:k,onNodeDragStop:_,onSelectionDrag:N,onSelectionDragStart:L,onSelectionDragStop:A,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:Z0,nodeOrigin:va,rfId:_m,autoPanOnConnect:gM,autoPanOnNodeDrag:hM,autoPanSpeed:bM,onError:yM,connectionRadius:wM,isValidConnection:vM,selectNodesOnDrag:Oe,nodeDragThreshold:SM,connectionDragThreshold:LM,onBeforeDelete:z,debug:EM,ariaLabelConfig:TM,zIndexMode:eb}),(0,q.jsx)(T8,{onInit:u,onNodeClick:l,onEdgeClick:s,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:y,nodeTypes:r,edgeTypes:i,connectionLineType:I,connectionLineStyle:O,connectionLineComponent:j,connectionLineContainerStyle:K,selectionKeyCode:$,selectionOnDrag:G,selectionMode:Z,deleteKeyCode:W,multiSelectionKeyCode:ce,panActivationKeyCode:ue,zoomActivationKeyCode:ae,onlyRenderVisibleElements:Ie,defaultViewport:Ba,translateExtent:bn,minZoom:ko,maxZoom:_o,preventScrolling:ee,zoomOnScroll:wt,zoomOnPinch:rr,zoomOnDoubleClick:HI,panOnScroll:ro,panOnScrollSpeed:Wo,panOnScrollMode:Bs,panOnDrag:FI,autoPanOnSelection:xM,onPaneClick:UI,onPaneMouseEnter:qI,onPaneMouseMove:VI,onPaneMouseLeave:GI,onPaneScroll:XI,onPaneContextMenu:jI,paneClickDistance:YI,nodeClickDistance:ZI,onSelectionContextMenu:M,onSelectionStart:D,onSelectionEnd:H,onReconnect:KI,onReconnectStart:$I,onReconnectEnd:QI,onEdgeContextMenu:JI,onEdgeDoubleClick:eM,onEdgeMouseEnter:tM,onEdgeMouseMove:aM,onEdgeMouseLeave:oM,reconnectRadius:nM,defaultMarkerColor:Mt,noDragClassName:lM,noWheelClassName:sM,noPanClassName:Z0,rfId:_m,disableKeyboardA11y:$0,nodeExtent:et,viewport:kM,onViewportChange:_M,nodesDraggable:te}),(0,q.jsx)(sA,{onSelectionChange:U}),WI,(0,q.jsx)(oA,{proOptions:cM,position:uM}),(0,q.jsx)(aA,{rfId:_m,disableKeyboardA11y:$0})]})})}var ZL=CL(P8);var O8=e=>e.nodes;function WL(){return ye(O8,Ye)}var B8=e=>e.edges;function KL(){return ye(B8,Ye)}var H8=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function yo(){return ye(H8,Ye)}var YU=Wa.error014();function F8({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,q.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:ft(["react-flow__background-pattern",a,o])})}function U8({radius:e,className:t}){return(0,q.jsx)("circle",{cx:e,cy:e,r:e,className:ft(["react-flow__background-pattern","dots",t])})}var rn;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(rn||(rn={}));var q8={[rn.Dots]:1,[rn.Lines]:1,[rn.Cross]:6},V8=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function $L({id:e,variant:t=rn.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:l,style:s,className:u,patternClassName:d}){let f=(0,V.useRef)(null),{transform:c,patternId:p}=ye(V8,Ye),h=o||q8[t],w=t===rn.Dots,v=t===rn.Cross,g=Array.isArray(a)?a:[a,a],b=[g[0]*c[2]||1,g[1]*c[2]||1],m=h*c[2],x=Array.isArray(r)?r:[r,r],S=v?[m,m]:b,y=[x[0]*c[2]+S[0]/2,x[1]*c[2]+S[1]/2],C=`${p}${e||""}`;return(0,q.jsxs)("svg",{className:ft(["react-flow__background",u]),style:{...s,...Op,"--xy-background-color-props":l,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,q.jsx)("pattern",{id:C,x:c[0]%b[0],y:c[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${y[0]},-${y[1]})`,children:w?(0,q.jsx)(U8,{radius:m/2,className:d}):(0,q.jsx)(F8,{dimensions:S,lineWidth:n,variant:t,className:d})}),(0,q.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${C})`})]})}$L.displayName="Background";var QL=(0,V.memo)($L);function G8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,q.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function X8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,q.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function j8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,q.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Y8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Z8(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Dp({children:e,className:t,...a}){return(0,q.jsx)("button",{type:"button",className:ft(["react-flow__controls-button",t]),...a,children:e})}var W8=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function JL({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:l,onInteractiveChange:s,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let h=rt(),{isInteractive:w,minZoomReached:v,maxZoomReached:g,ariaLabelConfig:b}=ye(W8,Ye),{zoomIn:m,zoomOut:x,fitView:S}=Ka(),y=()=>{m(),r?.()},C=()=>{x(),i?.()},k=()=>{S(n),l?.()},_=()=>{h.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),s?.(!w)};return(0,q.jsxs)(Pp,{className:ft(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??b["controls.ariaLabel"],children:[t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Dp,{onClick:y,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:g,children:(0,q.jsx)(G8,{})}),(0,q.jsx)(Dp,{onClick:C,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:v,children:(0,q.jsx)(X8,{})})]}),a&&(0,q.jsx)(Dp,{className:"react-flow__controls-fitview",onClick:k,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:(0,q.jsx)(j8,{})}),o&&(0,q.jsx)(Dp,{className:"react-flow__controls-interactive",onClick:_,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:w?(0,q.jsx)(Z8,{}):(0,q.jsx)(Y8,{})}),d]})}JL.displayName="Controls";var ZU=(0,V.memo)(JL);function K8({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:l,strokeWidth:s,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:h,backgroundColor:w}=r||{},v=i||h||w;return(0,q.jsx)("rect",{className:ft(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:v,stroke:l,strokeWidth:s},shapeRendering:f,onClick:p?g=>p(g,e):void 0})}var $8=(0,V.memo)(K8),Q8=e=>e.nodes.map(t=>t.id),n0=e=>e instanceof Function?e:()=>e;function J8({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=$8,onClick:i}){let l=ye(Q8,Ye),s=n0(t),u=n0(e),d=n0(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,q.jsx)(q.Fragment,{children:l.map(c=>(0,q.jsx)(tD,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function eD({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:l,onClick:s}){let{node:u,x:d,y:f,width:c,height:p}=ye(h=>{let w=h.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let v=w.internals.userNode,{x:g,y:b}=w.internals.positionAbsolute,{width:m,height:x}=vo(v);return{node:v,x:g,y:b,width:m,height:x}},Ye);return!u||u.hidden||!Vx(u)?null:(0,q.jsx)(l,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:s,id:u.id})}var tD=(0,V.memo)(eD),aD=(0,V.memo)(J8),oD=200,nD=150,rD=e=>!e.hidden,iD=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Fx(us(e.nodeLookup,{filter:rD}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},hL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,lD=(e,t)=>hL(e.viewBB,t.viewBB)&&hL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,sD="react-flow__minimap-desc";function ek({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:l,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:h,pannable:w=!1,zoomable:v=!1,ariaLabel:g,inversePan:b,zoomStep:m=1,offsetScale:x=5}){let S=rt(),y=(0,V.useRef)(null),{boundingRect:C,viewBB:k,rfId:_,panZoom:T,translateExtent:R,flowWidth:B,flowHeight:U,ariaLabelConfig:L}=ye(iD,lD),N=e?.width??oD,A=e?.height??nD,M=C.width/N,D=C.height/A,H=Math.max(M,D),z=H*N,F=H*A,I=x*H,O=C.x-(z-C.width)/2-I,j=C.y-(F-C.height)/2-I,K=z+I*2,W=F+I*2,$=`${sD}-${_}`,G=(0,V.useRef)(0),Z=(0,V.useRef)();G.current=H,(0,V.useEffect)(()=>{if(y.current&&T)return Z.current=LS({domNode:y.current,panZoom:T,getTransform:()=>S.getState().transform,getViewScale:()=>G.current}),()=>{Z.current?.destroy()}},[T]),(0,V.useEffect)(()=>{Z.current?.update({translateExtent:R,width:B,height:U,inversePan:b,pannable:w,zoomStep:m,zoomable:v})},[w,v,b,m,R,B,U]);let ue=p?ie=>{let[we,Ie]=Z.current?.pointer(ie)||[0,0];p(ie,{x:we,y:Ie})}:void 0,ce=h?(0,V.useCallback)((ie,we)=>{let Ie=S.getState().nodeLookup.get(we).internals.userNode;h(ie,Ie)},[]):void 0,ae=g??L["minimap.ariaLabel"];return(0,q.jsx)(Pp,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*H:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:ft(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,q.jsxs)("svg",{width:N,height:A,viewBox:`${O} ${j} ${K} ${W}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":$,ref:y,onClick:ue,children:[ae&&(0,q.jsx)("title",{id:$,children:ae}),(0,q.jsx)(aD,{onClick:ce,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:l}),(0,q.jsx)("path",{className:"react-flow__minimap-mask",d:`M${O-I},${j-I}h${K+I*2}v${W+I*2}h${-K-I*2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}ek.displayName="MiniMap";var tk=(0,V.memo)(ek),dD=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,uD={[qr.Line]:"right",[qr.Handle]:"bottom-right"};function cD({nodeId:e,position:t,variant:a=qr.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:l=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:h,onResizeStart:w,onResize:v,onResizeEnd:g}){let b=IL(),m=typeof e=="string"?e:b,x=rt(),S=(0,V.useRef)(null),y=a===qr.Handle,C=ye((0,V.useCallback)(dD(y&&p),[y,p]),Ye),k=(0,V.useRef)(null),_=t??uD[a];(0,V.useEffect)(()=>{if(!(!S.current||!m))return k.current||(k.current=NS({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:N,domNode:A}=x.getState();return{nodeLookup:R,transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:N,paneDomNode:A}},onChange:(R,B)=>{let{triggerNodeChanges:U,nodeLookup:L,parentLookup:N,nodeOrigin:A}=x.getState(),M=[],D={x:R.x,y:R.y},H=L.get(m);if(H&&H.expandParent&&H.parentId){let z=H.origin??A,F=R.width??H.measured.width??0,I=R.height??H.measured.height??0,O={id:H.id,parentId:H.parentId,rect:{width:F,height:I,...Gx({x:R.x??H.position.x,y:R.y??H.position.y},{width:F,height:I},H.parentId,L,z)}},j=Mp([O],L,N,A);M.push(...j),D.x=R.x?Math.max(z[0]*F,R.x):void 0,D.y=R.y?Math.max(z[1]*I,R.y):void 0}if(D.x!==void 0&&D.y!==void 0){let z={id:m,type:"position",position:{...D}};M.push(z)}if(R.width!==void 0&&R.height!==void 0){let F={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};M.push(F)}for(let z of B){let F={...z,type:"position"};M.push(F)}U(M)},onEnd:({width:R,height:B})=>{let U={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:B}};x.getState().triggerNodeChanges([U])}})),k.current.update({controlPosition:_,boundaries:{minWidth:l,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:v,onResizeEnd:g,shouldResize:h}),()=>{k.current?.destroy()}},[_,l,s,u,d,f,w,v,g,h]);let T=_.split("-");return(0,q.jsx)("div",{className:ft(["react-flow__resize-control","nodrag",...T,a,o]),ref:S,style:{...n,scale:C,...i&&{[y?"backgroundColor":"borderColor"]:i}},children:r})}var WU=(0,V.memo)(cD);var Ta=E(Q(),1),lk=E(Dt(),1);var Fp=E(Q(),1);var Bp=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var ak=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var ok=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var c0=e=>{let t=ok(e);return t.charAt(0).toUpperCase()+t.slice(1)};var mu=E(Q(),1);var Hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var nk=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var vs=E(Q(),1);var fD=(0,vs.createContext)({});var rk=()=>(0,vs.useContext)(fD);var ik=(0,mu.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...l},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=rk()??{},h=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,mu.createElement)("svg",{ref:s,...Hp,width:t??u??Hp.width,height:t??u??Hp.height,stroke:e??c,strokeWidth:h,className:Bp("lucide",p,n),...!r&&!nk(l)&&{"aria-hidden":"true"},...l},[...i.map(([w,v])=>(0,mu.createElement)(w,v)),...Array.isArray(r)?r:[r]])});var P=(e,t)=>{let a=(0,Fp.forwardRef)(({className:o,...n},r)=>(0,Fp.createElement)(ik,{ref:r,iconNode:t,className:Bp(`lucide-${ak(c0(e))}`,`lucide-${e}`,o),...n}));return a.displayName=c0(e),a};var pD=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gu=P("arrow-left",pD);var mD=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Oi=P("arrow-up",mD);var gD=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],Bi=P("audio-lines",gD);var hD=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],hu=P("bookmark",hD);var xD=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],xu=P("calendar",xD);var bD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lt=P("check",bD);var wD=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$a=P("chevron-down",wD);var vD=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gn=P("chevron-right",vD);var yD=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],bu=P("chevron-left",yD);var CD=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],wu=P("chevron-up",CD);var SD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Vr=P("circle-alert",SD);var LD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gr=P("circle-check",LD);var kD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ro=P("circle-question-mark",kD);var _D=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],vu=P("clapperboard",_D);var ID=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Xr=P("cloud-upload",ID);var MD=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jr=P("copy",MD);var ND=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Xn=P("crosshair",ND);var ED=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Hi=P("download",ED);var TD=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Yr=P("ellipsis",TD);var AD=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yu=P("external-link",AD);var DD=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Cu=P("eye-off",DD);var RD=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Su=P("eye",RD);var zD=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],ln=P("file-pen",zD);var PD=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Lu=P("file-spreadsheet",PD);var OD=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kt=P("file-text",OD);var BD=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],ku=P("file-up",BD);var HD=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],_u=P("files",HD);var FD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Bt=P("film",FD);var UD=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],Fi=P("folder-input",UD);var qD=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Iu=P("folder-open",qD);var VD=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Mu=P("folder-plus",VD);var GD=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],zo=P("folder",GD);var XD=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Zr=P("funnel",XD);var jD=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Nu=P("grip-vertical",jD);var YD=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],ys=P("hand",YD);var ZD=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],Eu=P("hard-drive",ZD);var WD=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Tu=P("hash",WD);var KD=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],jn=P("image-plus",KD);var $D=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],na=P("image",$D);var QD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Au=P("info",QD);var JD=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Du=P("keyboard",JD);var eR=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],$t=P("layers",eR);var tR=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Po=P("layout-grid",tR);var aR=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],Ru=P("list-tree",aR);var oR=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Yn=P("list",oR);var nR=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Wr=P("loader-circle",nR);var rR=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],zu=P("map",rR);var iR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],sn=P("maximize-2",iR);var lR=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Pu=P("maximize",lR);var sR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Ui=P("message-square",sR);var dR=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],qi=P("mic",dR);var uR=[["path",{d:"M5 12h14",key:"1ays0h"}]],Ou=P("minus",uR);var cR=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Cs=P("mouse-pointer",cR);var fR=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Qt=P("music",fR);var pR=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Bu=P("paperclip",pR);var mR=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Hu=P("pause",mR);var gR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],dn=P("pen-line",gR);var hR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],un=P("pen",hR);var xR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Vi=P("pencil",xR);var bR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Fu=P("person-standing",bR);var wR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ea=P("play",wR);var vR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ze=P("plus",vR);var yR=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],Gi=P("redo-2",yR);var CR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Zn=P("refresh-cw",CR);var SR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Uu=P("rotate-ccw",SR);var LR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Oo=P("search",LR);var kR=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],qu=P("settings-2",kR);var _R=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Xi=P("sliders-horizontal",_R);var IR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],mt=P("sparkles",IR);var MR=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Kr=P("square-split-vertical",MR);var NR=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Qa=P("table",NR);var ER=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Vu=P("tag",ER);var TR=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],$r=P("text-align-justify",TR);var AR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ja=P("trash-2",AR);var DR=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Qr=P("triangle-alert",DR);var RR=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Wn=P("type",RR);var zR=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],ji=P("undo-2",zR);var PR=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],Yi=P("unlink",PR);var OR=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Zi=P("upload",OR);var BR=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Bo=P("video",BR);var HR=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],Gu=P("waypoints",HR);var FR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jt=P("x",FR);var Ht=E(X(),1);function Aa({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:l="pill"}){let[s,u]=(0,Ta.useState)(!1),d=(0,Ta.useRef)(null),f=(0,Ta.useRef)(null),[c,p]=(0,Ta.useState)({top:0,left:0,placement:"bottom"}),h=(0,Ta.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,Ta.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),x=window.innerHeight,S=Math.min(t.length*34+16,260),C=x-m.bottom<S&&m.top>S,k=C?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:k,left:m.left,width:_,placement:C?"top":"bottom"})},[t.length,r]);(0,Ta.useEffect)(()=>{if(!s)return;w();let m=y=>{let C=y.target;d.current?.contains(C)||f.current?.contains(C)||u(!1)},x=y=>{y.key==="Escape"&&u(!1)},S=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",x),window.addEventListener("scroll",S,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",x),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",w)}},[s,w]);let v=(0,Ta.useCallback)(m=>{m.stopPropagation(),!n&&u(x=>!x)},[n]),g=(0,Ta.useCallback)((m,x)=>{x||(a?.(m),u(!1))},[a]),b=["wf-custom-select-trigger",`wf-custom-select-trigger--${l}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsxs)("button",{ref:d,type:"button",className:b,disabled:n,onClick:v,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,Ht.jsx)("span",{className:"wf-custom-select-label",children:h?h.triggerLabel??h.label:i??String(e??"")}),(0,Ht.jsx)($a,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,lk.createPortal)((0,Ht.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,Ht.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let x=m.value===e,S=!!m.subtitle||!!m.badge||!!m.icon;return(0,Ht.jsxs)("button",{type:"button",role:"option","aria-selected":x,disabled:m.disabled,className:`wf-custom-select-option ${S?"wf-custom-select-option--rich":""} ${x?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>g(m.value,m.disabled),children:[m.icon?(0,Ht.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,Ht.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,Ht.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,Ht.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,Ht.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,Ht.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),x?(0,Ht.jsx)(Lt,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var cn=E(Q(),1),sk=E(Dt(),1),Ho=E(X(),1),Xu=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,cn.useState)(!1),l=(0,cn.useRef)(null),s=(0,cn.useRef)(null),[u,d]=(0,cn.useState)({left:0}),f=(0,cn.useCallback)(()=>{if(!l.current)return;let p=l.current.getBoundingClientRect(),h=a.startsWith("top"),w=a.endsWith("Right"),v=h?void 0:p.bottom+6,g=h?window.innerHeight-p.top+6:void 0,b=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:v,bottom:g,left:b})},[a]);(0,cn.useEffect)(()=>{if(!r)return;f();let p=w=>{let v=w.target;l.current?.contains(v)||s.current?.contains(v)||i(!1)},h=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",h),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",h),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(h=>!h)};return(0,Ho.jsxs)(Ho.Fragment,{children:[(0,Ho.jsx)("div",{ref:l,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,sk.createPortal)((0,Ho.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,Ho.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let h=t.includes(p.key);return(0,Ho.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${h?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,Ho.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,Ho.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var dk=E(Q(),1),f0=E(X(),1),p0=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:l=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,dk.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,f0.jsx)("div",{className:`wf-custom-slider ${l}`,style:i,children:(0,f0.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var uk=E(Q(),1),ck=E(Dt(),1);var fn=E(X(),1),Wi=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:l})=>((0,uk.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,ck.createPortal)((0,fn.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,fn.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,fn.jsxs)("div",{className:"wf-modal-header",children:[(0,fn.jsx)("div",{className:"wf-modal-title",children:a}),(0,fn.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,fn.jsx)(Jt,{size:16})})]}),(0,fn.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:l}),o?(0,fn.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var qp=E(Q(),1),fk=E(fx(),1);var Ki=E(X(),1),ju=null,UR=()=>{let[e,t]=(0,qp.useState)([]);return(0,qp.useEffect)(()=>(ju=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{ju=null}),[]),e.length===0?null:(0,Ki.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=Au,n="#60a5fa";return a.type==="success"?(o=Gr,n="#34d399"):a.type==="warning"?(o=Qr,n="#fb923c"):a.type==="error"&&(o=Vr,n="#f87171"),(0,Ki.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Ki.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Ki.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function qR(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,fk.createRoot)(t).render((0,Ki.jsx)(UR,{}))}function Up(e,t,a=2500){qR();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;ju?ju({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{ju?.({id:o,type:e,content:t,durationMs:a})},50)}var ne={success:(e,t)=>Up("success",e,t),warning:(e,t)=>Up("warning",e,t),error:(e,t)=>Up("error",e,t),info:(e,t)=>Up("info",e,t)};var pk=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,l);return l},mk=(e=>e?pk(e):pk);var Yu=E(Q(),1);var VR=e=>e;function GR(e,t=VR){let a=Yu.default.useSyncExternalStore(e.subscribe,Yu.default.useCallback(()=>t(e.getState()),[e,t]),Yu.default.useCallback(()=>t(e.getInitialState()),[e,t]));return Yu.default.useDebugValue(a),a}var gk=e=>{let t=mk(e),a=o=>GR(t,o);return Object.assign(a,t),a},Ss=(e=>e?gk(e):gk);var vk=E(Q(),1);var hk=e=>Symbol.iterator in e,xk=e=>"entries"in e,bk=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},XR=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function wk(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:hk(e)&&hk(t)?xk(e)&&xk(t)?bk(e,t):XR(e,t):bk({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function yk(e){let t=vk.default.useRef(void 0);return a=>{let o=e(a);return wk(t.current,o)?t.current:t.current=o}}var Sk={stroke:"#b1b1b7",strokeWidth:2},Vp={type:"animated",style:Sk,animated:!1};function Ck(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function jR(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function Lk(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:jR(e),...Vp,...e,data:{...t,createdAt:a},animated:e.animated??Vp.animated,style:{...Sk,...e.style??{}},sourceHandle:Ck(e.sourceHandle),targetHandle:Ck(e.targetHandle)}}var kk={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},YR={text:"text-editor",image:"text-to-image",video:"video-generation",audio:"text-to-audio"};var _k={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Zu(e,t){return{label:"",materialType:e,status:"empty",selectedTool:YR[e],params:{},failStrategy:"abort",...t}}function Gp(e){return e.nodeKind==="generate"||e.nodeKind==="import"?e.nodeKind:e.selectedTool==="import"?"import":"generate"}var ZR={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function Ik(e){return ZR[e]??[]}function WR(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,l=a.generatedContent,s=!1;return o==="text"?s=!!(i?.trim()||l):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function KR(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=kk[n];if(i)for(let l of i){let s=_k[l];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function Xp(e,t){let a=WR(e),o=KR(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function jp(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(l=>l.source===e.source&&l.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(l=>l.id===e.source),n=t.find(l=>l.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!Xp(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let l=i.shift();if(!(!l||r.has(l.id))){r.add(l.id);for(let s of Ox(l,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(s)}}}return{valid:!0}}function Yp(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function $R(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function Mk(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return Yp(e,"rejected","duplicate_node");a.add(d.id)}let o=$R([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return Yp(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return Yp(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),l=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=Lk(d),c=jp(f,l,u);if(!c.valid)return Yp(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:l,edges:u,status:"allowed"}}function Nk(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var Zp=!1,Wp=!1;function Kp(){Zp=!0}function Ek(){Wp=!0,Zp=!1}function Tk(){Zp=!1,Wp=!1}function QR(){Wp=!1}function m0(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function g0(e,t){return{nodes:e.slice(),edges:t.slice()}}function Wu(e,t){return t||(Wp&&e===0?"reset":Zp&&e===0?"user-delete":"autosave")}function $p(e){let t=g0(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:m0({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(QR(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var JR=50,ez=300;function Ku(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var ma={current:null,lastPushAt:0},se=Ss()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&Kp(),e({nodes:i0(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:l0(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&Kp();let o=t(),n=Mk({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(l=>l.id===i.id));return Nk(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&Kp(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{Tk(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),ma.current=Ku(a,o),ma.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Ku(t().nodes,t().edges);if(ma.current&&ma.current.sig===a.sig)return;let o=Date.now();if(ma.current&&o-ma.lastPushAt>=ez){let n=ma.current;e(r=>({past:[...r.past,n].slice(-JR),future:[]})),ma.lastPushAt=o}ma.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Ku(o,n);ma.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...l.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Ku(o,n);ma.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:[...l.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),ma.current=Ku(a,o),ma.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{Ek(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),ma.current=null,ma.lastPushAt=0}})),Ak=()=>se(yk(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var Dk=()=>se(e=>e.past.length>0),Rk=()=>se(e=>e.future.length>0);var Wk=E(Q(),1);var zk={total:0,completed:0,running:0,pending:0,percentage:0},Ke=Ss()(e=>({executionId:null,status:"idle",error:null,progress:zk,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:zk,nodeStatuses:{}})}));var Pk=E(Q(),1),Ok="(prefers-reduced-motion: reduce)";function tz(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(Ok);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function az(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(Ok).matches}function Bk(){return(0,Pk.useSyncExternalStore)(tz,az)}var eo=E(Q(),1),ga=E(X(),1),oz=108,qk=64,nz=186,Hk=qk+nz,h0=8,Fk=.9,rz=3,Uk=.16,iz=.98,lz=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let s=(0,eo.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${s}`,d=`beam-flow-${s}`,f=`beam-breathe-${s}`,c=(0,eo.useMemo)(()=>{if(t&&a){let x=a.x-t.x,S=a.y-t.y;return Math.max(250,Math.hypot(x,S)*1.15)}return 250},[t,a]),p=(0,eo.useRef)(null),[h,w]=(0,eo.useState)(c);(0,eo.useEffect)(()=>{if(p.current)try{let x=p.current.getTotalLength();Number.isFinite(x)&&x>0&&w(x)}catch{}},[e]);let{segments:v,calculatedDuration:g,periodPx:b}=(0,eo.useMemo)(()=>{let x=h>0?h:c,S=Math.max(1,Math.round(x/Hk)),y=x/S,k=y*(qk/Hk)/h0,_=o??Math.max(.5,y/oz);return{segments:Array.from({length:h0},(R,B)=>{let U=B/(h0-1),L=U**1.4,N=Fk+(rz-Fk)*L,A=N+1.4,M=Uk+(iz-Uk)*L,D=-(B*(_/y)*k);return{index:B,progress:U,taperedProgress:L,coreWidth:N,haloWidth:A,opacity:M,dashArray:`${k} ${y-k}`,timeDelay:n+D}}),calculatedDuration:_,periodPx:y}},[h,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-b:0}px; }
      to { stroke-dashoffset: ${r?0:-b}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,ga.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,ga.jsxs)("defs",{children:[(0,ga.jsx)("style",{children:m}),(0,ga.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,ga.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,ga.jsxs)("feMerge",{children:[(0,ga.jsx)("feMergeNode",{in:"blur"}),(0,ga.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,ga.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,ga.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:v.map(x=>{let S=x.index>=5;return(0,ga.jsxs)("g",{children:[S&&(0,ga.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:x.haloWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",filter:`url(#${u})`,opacity:x.opacity*.75,style:{animation:`${d} ${g}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,ga.jsx)("path",{d:e,stroke:x.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:x.coreWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",opacity:x.opacity,filter:x.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${g}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},x.index)})})]})},Vk=(0,eo.memo)(lz);var $u=E(Q(),1);var jk=E(Q(),1);var sz={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.type.import_asset":"\u7D20\u6750\u5BFC\u5165","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.import_asset":"\u6DFB\u52A0\u7D20\u6750\u5BFC\u5165\u8282\u70B9","toolbar.add.import_assetDesc":"\u5BFC\u5165\u672C\u5730\u56FE\u7247\u3001\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002"},Gk=sz;var dz={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.type.import_asset":"Asset Import","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.import_asset":"Add Asset Import node","toolbar.add.import_assetDesc":"Import local image, video, or audio files","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker."},Xk=dz;var x0={zh:Gk,en:Xk},Qp="zh",b0=new Set;function uz(e){return b0.add(e),()=>b0.delete(e)}function cz(){return Qp}function Yk(e){let t=e==="en"?"en":"zh";if(t!==Qp){Qp=t;for(let a of b0)a()}}function $i(e){return x0[Qp][e]??x0.zh[e]??x0.en[e]??e}function pe(){return(0,jk.useSyncExternalStore)(uz,cz),$i}var em=E(X(),1),Jp=28,fz=({edgeId:e,x:t,y:a})=>{let o=pe(),n=se(l=>l.applyCanvasInputMutation),r=(0,$u.useCallback)(l=>{l.preventDefault(),l.stopPropagation()},[]),i=(0,$u.useCallback)(l=>{l.preventDefault(),l.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,em.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-Jp/2,y:a-Jp/2,width:Jp,height:Jp,children:(0,em.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,em.jsx)(Yi,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},Zk=(0,$u.memo)(fz);var Ls=E(X(),1),pz=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,selected:u,animated:d,data:f,style:c})=>{let[p,h,w]=gs({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s}),v=se(y=>{let C=y.selectedElement.id;return C&&(C===t||C===a)?!0:y.nodes.some(k=>k.selected&&(k.id===t||k.id===a))}),g=Ke(y=>y.nodeStatuses[a]==="running"),b=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,x=v||b||g||m,S=Bk();return(0,Ls.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Ls.jsx)(ws,{id:e,path:p,style:c}),x&&!S&&(0,Ls.jsx)(Vk,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:g?.8:void 0}),(0,Ls.jsx)(Zk,{edgeId:e,x:h,y:w})]})},w0=(0,Wk.memo)(pz);var ks=E(Q(),1);function Ae(e){e.stopPropagation()}function v0(e){e.preventDefault(),e.stopPropagation()}var me=E(X(),1),mz=[{type:"import_asset",Icon:Xr,color:"#38bdf8",bg:"rgba(56, 189, 248, 0.16)"},{type:"text",Icon:Kt,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:jn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:Bo,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:Qt,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Qa,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:Bt,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],gz=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:i,onOpenAssets:l,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:d,isAssetsOpen:f=!1})=>{let c=pe(),[p,h]=(0,ks.useState)(!1),w=u!==void 0?u:p,v=d||(()=>h(m=>!m)),g=(0,ks.useCallback)(m=>{e(m),d?d():h(!1)},[e,d]),b=[{key:"select",icon:(0,me.jsx)(Cs,{size:15}),label:c("toolbar.selectMode"),onClick:()=>i?.("select")},{key:"pan",icon:(0,me.jsx)(ys,{size:15}),label:c("toolbar.panMode"),onClick:()=>i?.("pan")}];return(0,me.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:Ae,onMouseDown:Ae,children:[(0,me.jsxs)("div",{style:{position:"relative"},children:[(0,me.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:v,onContextMenu:v0,title:c("toolbar.addNode"),children:(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Ze,{size:20})})}),w&&(0,me.jsx)("div",{className:"wf-dock-add-popover",children:mz.map(m=>(0,me.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>g(m.type),onContextMenu:v0,children:[(0,me.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,me.jsx)(m.Icon,{size:18})}),(0,me.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,me.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,me.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,me.jsx)(Xu,{items:b,selectedKeys:[r],placement:"topCenter",children:(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,me.jsx)(Cs,{size:16}):(0,me.jsx)(ys,{size:16})}),(0,me.jsx)(wu,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,me.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:l,title:c("toolbar.assets"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Iu,{size:17})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(ji,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Gi,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,me.jsxs)(me.Fragment,{children:[(0,me.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,me.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,me.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,me.jsx)(Ro,{size:16})}),(0,me.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},Kk=(0,ks.memo)(gz);var _s=E(Q(),1);var be=E(X(),1),hz={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},xz=e=>Math.round(e.transform[2]*100),bz=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:l,onCancelExecution:s,onResetExecution:u})=>{let d=pe(),{zoomIn:f,zoomOut:c,fitView:p}=Ka(),h=ye(xz),w=Ke(T=>T.status),v=Ke(T=>T.progress),g=Ke(T=>T.error),b=w==="pending"||w==="running",m=w==="paused",x=w==="completed"||w==="error"||w==="cancelled",S=v.total>0,y=(0,_s.useCallback)(()=>{p({duration:250,padding:.1})},[p]),C=(0,_s.useCallback)(()=>{f({duration:150})},[f]),k=(0,_s.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,be.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:Ae,onMouseDown:Ae,children:[r&&(b||m||x&&u?(0,be.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${b||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[b||m?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d(hz[w]),S&&` (${v.completed}/${v.total})`]}),b?(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,be.jsx)(Hu,{size:14})}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:l,title:d("exec.resumeTitle"),children:(0,be.jsx)(Ea,{size:14})}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,be.jsx)(Jt,{size:14})})]}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:g||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,be.jsx)(Ea,{size:14,fill:"currentColor",style:{marginLeft:2}})}),x&&u&&(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,be.jsx)(Uu,{size:14})})]}):(0,be.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:g||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,be.jsx)(Ea,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,be.jsxs)("div",{className:"wf-header-capsule",children:[(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:y,title:d("header.fitView"),children:(0,be.jsx)(Pu,{size:15})}),(0,be.jsx)("div",{className:"wf-header-capsule__divider"}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:k,title:d("header.zoomOut"),children:(0,be.jsx)(Ou,{size:15})}),(0,be.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:y,title:d("header.fitView"),children:[h,"%"]}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.zoomIn"),children:(0,be.jsx)(Ze,{size:15})})]}),(0,be.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,be.jsx)(Po,{size:15})}),(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,be.jsx)(Gu,{size:15})}),(0,be.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,be.jsx)(zu,{size:15})}),n&&(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("div",{className:"wf-header-capsule__divider"}),(0,be.jsx)(Xu,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,be.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,be.jsx)(Kr,{size:15})})})]})]})]})},$k=(0,_s.memo)(bz);var Ft=E(Q(),1);function Fo(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function Jk(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function ha(e){return typeof e=="string"?e.trim():""}function e5(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function wz(e){return typeof e=="string"&&e.startsWith("blob:")}function Uo(e){let t=ha(e);if(!(!t||wz(t)))return t}function vz(e){return Jk(e.data)?e.data:{}}function t5(e){return ha(e.realPath)||ha(e.real_path)}function Qk(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function yz(e){if(e)for(let t of e){let a=Uo(t?.url);if(a)return a}}function Cz(e,t){let a=ha(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=ha(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function Sz(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=ha(t.mediaUrl)||void 0,n=a?Fo(a,Qk(t),o):void 0;return Uo(n)||Uo(t.previewUrl)||Uo(t.imageUrl)||Uo(t.outputUrl)||Uo(t.coverUrl)||Uo(t.mediaUrl)||Uo(t.outputVideoUrl)||Uo(t.thumbnailUrl)||yz(Qk(t))}function Lz(e){let t=e5(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=Jk(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function kz(e,t,a){let o=t5(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(ha(t.content)||ha(t.generatedContent)):e==="table"?Lz(t):e==="video_composition"?!!(Uo(t.outputVideoUrl)||Uo(t.thumbnailUrl)):!1}function _z(e,t,a){return ha(a.originalName)||ha(a.label)||ha(a.title)||ha(a.name)||`${e} #${t.slice(-4)}`}function Iz(e){let t=ha(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function Mz(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function Nz(e){let t=ha(e.id);if(!t)return null;let a=vz(e),o=Cz(e,a),n=Sz(o,a);if(!kz(o,a,n))return null;let r=t5(a),i=e5(a.updatedAt)??0,l=ha(a.prompt),s={id:t,name:_z(o,t,a),type:o,status:Iz(a),updatedAt:i};n&&(s.previewUrl=n),r&&(s.real_path=r),l&&(s.prompt=l);let u=Mz(a);return u&&(s.tags=u),s}function a5(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=Nz(a);o&&t.push(o)}return t}var tm=E(Q(),1),o5=E(Dt(),1);var Kn=E(X(),1),y0=["image","video","audio","text","other"],Ez=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],n5=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,tm.useRef)(null);if((0,tm.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-160),s=a.length===0||y0.every(f=>a.includes(f)),u=f=>f==="all"?s:s?!0:a.includes(f),d=f=>{if(f==="all"){o(s?["__none__"]:[]);return}if(s){let p=y0.filter(h=>h!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],y0.every(p=>c.includes(p))?o([]):o(c)};return(0,o5.createPortal)((0,Kn.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"140px",zIndex:9999},onMouseDown:Ae,onPointerDown:Ae,onClick:f=>f.stopPropagation(),children:(0,Kn.jsx)("div",{className:"wf-popover-body",children:Ez.map(f=>{let c=u(f.id);return(0,Kn.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,Kn.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Kn.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,Kn.jsx)(Lt,{size:10,strokeWidth:3})}),(0,Kn.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var am=E(Q(),1),r5=E(Dt(),1);var Jr=E(X(),1),C0=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],i5=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,am.useRef)(null);if((0,am.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-150),s=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,r5.createPortal)((0,Jr.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"136px",zIndex:9999},onMouseDown:Ae,onPointerDown:Ae,onClick:u=>u.stopPropagation(),children:(0,Jr.jsx)("div",{className:"wf-popover-body",children:C0.map(u=>{let d=a.includes(u.id);return(0,Jr.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>s(u.id),children:(0,Jr.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Jr.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,Jr.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var om=E(Q(),1),l5=E(Dt(),1);var xa=E(X(),1),s5=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let l=(0,om.useRef)(null);if((0,om.useEffect)(()=>{if(!e)return;let d=c=>{l.current&&!l.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let s=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,l5.createPortal)((0,xa.jsxs)("div",{ref:l,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:Ae,onPointerDown:Ae,onClick:d=>d.stopPropagation(),children:[(0,xa.jsxs)("div",{className:"wf-popover-body",children:[(0,xa.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,xa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,xa.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]}),(0,xa.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,xa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,xa.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]})]}),(0,xa.jsx)("div",{className:"wf-popover-divider"}),(0,xa.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,xa.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,xa.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,xa.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var nm=E(Q(),1),d5=E(Dt(),1);var Qi=E(X(),1),u5=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,nm.useRef)(null);if((0,nm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-180),s=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,d5.createPortal)((0,Qi.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"160px",zIndex:9999},onMouseDown:Ae,onPointerDown:Ae,onClick:u=>u.stopPropagation(),children:(0,Qi.jsx)("div",{className:"wf-popover-body",children:s.map(u=>{let d=a===u.id;return(0,Qi.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,Qi.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,Qi.jsx)(Lt,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var rm=E(Q(),1),c5=E(Dt(),1);var de=E(X(),1),f5=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,rm.useRef)(null);if((0,rm.useEffect)(()=>{if(!e)return;let c=h=>{i.current&&!i.current.contains(h.target)&&r()},p=h=>{h.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=220,s=440,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,c5.createPortal)((0,de.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Ae,onPointerDown:Ae,onClick:c=>c.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,de.jsx)(Ze,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,de.jsx)(Ui,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,de.jsx)(mt,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,de.jsx)(hu,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,de.jsx)("div",{className:"wf-context-menu-divider"}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,de.jsx)(Xn,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,de.jsx)(yu,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,de.jsx)(zo,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,de.jsx)(jr,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,de.jsx)("div",{className:"wf-context-menu-divider"}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,de.jsx)(jr,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,de.jsx)(_u,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,de.jsx)(Ru,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,de.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,de.jsx)(un,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,de.jsx)("div",{className:"wf-context-menu-divider"}),(0,de.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,de.jsx)(Ja,{size:14,className:"wf-context-menu-icon"}),(0,de.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,de.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var im=E(Q(),1),p5=E(Dt(),1);var At=E(X(),1),m5=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,im.useRef)(null);if((0,im.useEffect)(()=>{if(!e)return;let c=h=>{i.current&&!i.current.contains(h.target)&&r()},p=h=>{h.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=220,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,p5.createPortal)((0,At.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Ae,onPointerDown:Ae,onClick:c=>c.stopPropagation(),children:[(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,At.jsx)(na,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,At.jsx)(Ui,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,At.jsx)(zo,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,At.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,At.jsx)(Fi,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,At.jsx)("div",{className:"wf-context-menu-divider"}),(0,At.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,At.jsx)(Ja,{size:14,className:"wf-context-menu-icon"}),(0,At.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var lm=E(Q(),1),g5=E(Dt(),1);var ra=E(X(),1),h5=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,lm.useRef)(null);if((0,lm.useEffect)(()=>{if(!e)return;let c=h=>{i.current&&!i.current.contains(h.target)&&r()},p=h=>{h.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=180,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,g5.createPortal)((0,ra.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:Ae,onPointerDown:Ae,onClick:c=>c.stopPropagation(),children:[(0,ra.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,ra.jsx)(zo,{size:14,className:"wf-context-menu-icon"}),(0,ra.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,ra.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,ra.jsx)(un,{size:14,className:"wf-context-menu-icon"}),(0,ra.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,ra.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,ra.jsx)(Fi,{size:14,className:"wf-context-menu-icon"}),(0,ra.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,ra.jsx)("div",{className:"wf-context-menu-divider"}),(0,ra.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,ra.jsx)(Ja,{size:14,className:"wf-context-menu-icon"}),(0,ra.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var to=E(Q(),1);var re=E(X(),1),S0=1440*60*1e3;function Tz(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=S0:t==="7d"?a<=7*S0:t==="30d"?a<=30*S0:!0}var Az={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function Dz(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=C0.find(i=>i.id===o);return[...Az[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function Rz(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var x5=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:l,onViewModeChange:s})=>{let[u,d]=(0,to.useState)(""),f=t!==void 0?t:u,c=z=>{d(z),a?.(z)},[p,h]=(0,to.useState)("tree"),w=l??p,v=z=>{h(z),s?.(z)},[g,b]=(0,to.useState)(null),[m,x]=(0,to.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[S,y]=(0,to.useState)(!1),[C,k]=(0,to.useState)(!1),[_,T]=(0,to.useState)(!1),[R,B]=(0,to.useState)(null),[U,L]=(0,to.useState)(null),[N,A]=(0,to.useState)(null),M=z=>{switch(z){case"image":return(0,re.jsx)(na,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,re.jsx)(Bt,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,re.jsx)(Qt,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,re.jsx)(Kt,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,re.jsx)(mt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},D=(0,to.useMemo)(()=>{let z=e.filter(F=>{if(f.trim()){let I=f.toLowerCase();if(!(F.name.toLowerCase().includes(I)||F.prompt&&F.prompt.toLowerCase().includes(I)))return!1}return!(!Rz(F.type,m.types)||!Dz(F,m.tags)||!Tz(F.updatedAt||0,m.timeRange))});return z.sort((F,I)=>m.sortOrder==="desc"?(I.updatedAt||0)-(F.updatedAt||0):(F.updatedAt||0)-(I.updatedAt||0)),z},[e,f,m]),H=z=>F=>{F.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:z})),F.dataTransfer.effectAllowed="copy"};return(0,re.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,re.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,re.jsxs)("div",{className:"wf-search-row-compact",children:[(0,re.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,re.jsx)(Oo,{size:13,className:"wf-search-icon"}),(0,re.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:z=>c(z.target.value)})]}),(0,re.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,re.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>v("tree"),children:(0,re.jsx)(Yn,{size:13})}),(0,re.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>v("grid"),children:(0,re.jsx)(Po,{size:13})})]}),(0,re.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,re.jsx)(Zn,{size:13})})]}),(0,re.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,re.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,re.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:z=>{B(z.currentTarget.getBoundingClientRect()),y(F=>!F),k(!1),T(!1)},children:[(0,re.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,re.jsx)($a,{size:11})]})}),(0,re.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,re.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:z=>{L(z.currentTarget.getBoundingClientRect()),k(F=>!F),y(!1),T(!1)},children:[(0,re.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,re.jsx)($a,{size:11})]})}),(0,re.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,re.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:z=>{A(z.currentTarget.getBoundingClientRect()),T(F=>!F),y(!1),k(!1)},children:[(0,re.jsx)("span",{children:"\u65F6\u95F4"}),(0,re.jsx)($a,{size:11})]})})]})]}),(0,re.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,re.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,re.jsx)($t,{size:24,className:"wf-assets-empty-icon"}),(0,re.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,re.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):D.length===0?(0,re.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,re.jsx)($t,{size:24,className:"wf-assets-empty-icon"}),(0,re.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,re.jsx)("div",{className:"wf-tree-list-container-compact",children:D.map(z=>{let F=g===z.id;return(0,re.jsxs)("div",{"data-id":z.id,className:`wf-tree-item-compact ${F?"selected":""}`,draggable:!0,onDragStart:H(z),onClick:()=>{b(z.id),o(z.id)},onContextMenu:I=>{I.preventDefault(),b(z.id),n(I,z)},onMouseEnter:I=>r(z,I),onMouseLeave:()=>r(null),children:[z.previewUrl?(0,re.jsx)("img",{src:z.previewUrl,alt:z.name,className:"wf-tree-file-thumb-compact"}):(0,re.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:M(z.type)}),(0,re.jsx)("span",{className:"wf-tree-name-compact",title:z.name,children:z.name}),(0,re.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:I=>{I.stopPropagation(),o(z.id)},children:(0,re.jsx)(Xn,{size:12})})]},z.id)})}):(0,re.jsx)("div",{className:"wf-grid-view-container-compact",children:D.map(z=>(0,re.jsxs)("div",{"data-id":z.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:H(z),onClick:()=>{b(z.id),o(z.id)},onContextMenu:F=>{F.preventDefault(),n(F,z)},onMouseEnter:F=>r(z,F),onMouseLeave:()=>r(null),children:[(0,re.jsx)("div",{className:"wf-grid-card-thumb-compact",children:z.previewUrl?(0,re.jsx)("img",{src:z.previewUrl,alt:z.name}):M(z.type)}),(0,re.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,re.jsx)("div",{className:"wf-grid-card-title-compact",title:z.name,children:z.name})})]},z.id))})}),(0,re.jsx)(n5,{isOpen:S,anchorRect:R,selectedTypes:m.types,onChange:z=>x(F=>({...F,types:z})),onClose:()=>y(!1)}),(0,re.jsx)(i5,{isOpen:C,anchorRect:U,selectedTags:m.tags,onChange:z=>x(F=>({...F,tags:z})),onClose:()=>k(!1)}),(0,re.jsx)(s5,{isOpen:_,anchorRect:N,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:z=>x(F=>({...F,sortOrder:z})),onRangeChange:z=>x(F=>({...F,timeRange:z})),onClose:()=>T(!1)})]})};var Qu=E(Q(),1);var le=E(X(),1),b5=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:l})=>{let[s,u]=(0,Qu.useState)("tree"),[d,f]=(0,Qu.useState)(""),[c,p]=(0,Qu.useState)(null),[h,w]=(0,Qu.useState)({}),v=m=>{w(x=>({...x,[m]:!x[m]}))},g=m=>{switch(m){case"image":return(0,le.jsx)(na,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,le.jsx)(Bt,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,le.jsx)(Qt,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,le.jsx)(Kt,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,le.jsx)(zo,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,le.jsx)(mt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},b=e.filter(m=>{if(d.trim()){let x=d.toLowerCase();if(!(m.name.toLowerCase().includes(x)||m.tags&&m.tags.some(y=>y.toLowerCase().includes(x))))return!1}return!0});return(0,le.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,le.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,le.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,le.jsx)(mt,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,le.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,le.jsx)(Gn,{size:14,className:"wf-subject-hero-arrow"})]}),(0,le.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,le.jsxs)("div",{className:"wf-search-row-compact",children:[(0,le.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,le.jsx)(Oo,{size:13,className:"wf-search-icon"}),(0,le.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:m=>f(m.target.value)})]}),(0,le.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,le.jsx)(Yn,{size:13})}),(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,le.jsx)(Po,{size:13})})]}),(0,le.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:l,children:(0,le.jsx)(Zn,{size:13})})]})}),(0,le.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:b.length===0?(0,le.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,le.jsx)($t,{size:24,className:"wf-assets-empty-icon"}),(0,le.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):s==="tree"?(0,le.jsx)("div",{className:"wf-tree-list-container-compact",children:b.map(m=>{let x=m.type==="folder",S=x&&(h[m.id]??!1),y=c===m.id;return(0,le.jsxs)("div",{className:`wf-tree-item-compact ${y?"selected":""}`,draggable:!x,onDragStart:C=>{x||(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:m})),C.dataTransfer.effectAllowed="copy")},onClick:()=>{p(m.id),x&&v(m.id)},onDoubleClick:()=>{x||i(m)},onContextMenu:C=>{C.preventDefault(),p(m.id),a(C,m,x)},onMouseEnter:C=>o(m,C),onMouseLeave:()=>o(null),children:[x?(0,le.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:S?(0,le.jsx)($a,{size:11}):(0,le.jsx)(Gn,{size:11})}):null,m.previewUrl?(0,le.jsx)("img",{src:m.previewUrl,alt:m.name,className:"wf-tree-file-thumb-compact"}):(0,le.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:g(m.type)}),(0,le.jsx)("span",{className:"wf-tree-name-compact",title:m.name,children:m.name}),!x&&(0,le.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:C=>{C.stopPropagation(),i(m)},children:(0,le.jsx)(Xn,{size:12})})]},m.id)})}):(0,le.jsx)("div",{className:"wf-grid-view-container-compact",children:b.map(m=>(0,le.jsxs)("div",{className:"wf-grid-card-compact",draggable:m.type!=="folder",onDragStart:x=>{m.type!=="folder"&&(x.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:m})),x.dataTransfer.effectAllowed="copy")},onClick:()=>p(m.id),onDoubleClick:()=>{m.type!=="folder"&&i(m)},onContextMenu:x=>{x.preventDefault(),p(m.id),a(x,m,m.type==="folder")},onMouseEnter:x=>o(m,x),onMouseLeave:()=>o(null),children:[(0,le.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[m.previewUrl?(0,le.jsx)("img",{src:m.previewUrl,alt:m.name}):g(m.type),m.duration&&(0,le.jsx)("span",{className:"wf-grid-card-duration-compact",children:m.duration})]}),(0,le.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,le.jsx)("div",{className:"wf-grid-card-title-compact",title:m.name,children:m.name})})]},m.id))})}),(0,le.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,le.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,le.jsx)(Mu,{size:13}),(0,le.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,le.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,le.jsx)(Oi,{size:13}),(0,le.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var Is=E(Q(),1);var Ce=E(X(),1),w5=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:"\u89D2\u8272",tag:"\u89D2\u8272"},{id:"scene",label:"\u573A\u666F",tag:"\u573A\u666F"},{id:"prop",label:"\u9053\u5177/\u673A\u7532",tag:"\u673A\u7532"},{id:"style",label:"\u98CE\u683C/Lora",tag:"Lora"}],v5=({subjects:e,onBack:t,onSelectSubject:a,onCreateSubject:o})=>{let[n,r]=(0,Is.useState)(""),[i,l]=(0,Is.useState)("all"),[s,u]=(0,Is.useState)("recent"),[d,f]=(0,Is.useState)(!1),[c,p]=(0,Is.useState)(null),h=g=>{p(g.currentTarget.getBoundingClientRect()),f(b=>!b)},w=e.filter(g=>{if(i!=="all"){let m=w5.find(x=>x.id===i);if(m?.tag&&!g.tags.some(S=>S.toLowerCase().includes(m.tag.toLowerCase())||g.name.includes(m.tag)))return!1}if(!n.trim())return!0;let b=n.toLowerCase();return g.name.toLowerCase().includes(b)||g.tags.some(m=>m.toLowerCase().includes(b))}).sort((g,b)=>s==="recent"?b.updatedAt-g.updatedAt:s==="name"?g.name.localeCompare(b.name):s==="count"?b.itemCount-g.itemCount:0);return(0,Ce.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Ce.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Ce.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:t,children:[(0,Ce.jsx)(gu,{size:13}),(0,Ce.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Ce.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:h,children:[(0,Ce.jsx)(Xi,{size:11}),(0,Ce.jsx)("span",{children:(()=>{switch(s){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Ce.jsx)($a,{size:11})]})]}),(0,Ce.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Ce.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Ce.jsx)(Oo,{size:13,className:"wf-search-icon"}),(0,Ce.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:n,onChange:g=>r(g.target.value)})]}),(0,Ce.jsx)("div",{className:"wf-subject-pills-row-compact",children:w5.map(g=>(0,Ce.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${i===g.id?"active":""}`,onClick:()=>l(g.id),children:g.label},g.id))})]}),(0,Ce.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:w.length===0?(0,Ce.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Ce.jsx)(mt,{size:24,className:"wf-assets-empty-icon"}),(0,Ce.jsx)("div",{className:"wf-assets-empty-title",children:"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Ce.jsx)("div",{className:"wf-subject-grid-compact",children:w.map(g=>(0,Ce.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,onDragStart:b=>{b.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:g.id,name:g.name,type:"image",previewUrl:g.avatar,prompt:g.tags.join(", ")}})),b.dataTransfer.effectAllowed="copy"},onClick:()=>a(g),children:[(0,Ce.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[g.avatar?(0,Ce.jsx)("img",{src:g.avatar,alt:g.name,className:"wf-subject-card-img-compact"}):(0,Ce.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Ce.jsx)(mt,{size:20})}),(0,Ce.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Ce.jsx)($t,{size:10})," ",g.itemCount," \u9879"]})]}),(0,Ce.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Ce.jsx)("div",{className:"wf-subject-card-name-compact",title:g.name,children:g.name}),(0,Ce.jsx)("div",{className:"wf-subject-card-tags-compact",children:g.tags.slice(0,3).map((b,m)=>(0,Ce.jsx)("span",{className:"wf-subject-card-tag-compact",children:b},m))})]})]},g.id))})}),(0,Ce.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Ce.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:o,children:[(0,Ce.jsx)(Ze,{size:13}),(0,Ce.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Ce.jsx)(u5,{isOpen:d,anchorRect:c,sortValue:s,onChange:g=>u(g),onClose:()=>f(!1)})]})};var y5=E(Q(),1),C5=E(Dt(),1);var Fe=E(X(),1),S5=({isOpen:e,x:t,y:a,item:o})=>{let n=(0,y5.useRef)(null);if(!e||!o)return null;let r=260,i=290,l=t+15;l+r>window.innerWidth-10&&(l=t-r-15);let s=a-20;s+i>window.innerHeight-10&&(s=window.innerHeight-i-10),s<10&&(s=10);let u="type"in o&&("fileExt"in o||"real_path"in o||"parentId"in o),d=u?o:null,f=u?null:o,c=o.updatedAt?new Date(o.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,C5.createPortal)((0,Fe.jsxs)("div",{ref:n,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${l}px`,width:`${r}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Fe.jsxs)("div",{className:"wf-hover-inspector-preview",children:[o.previewUrl?(0,Fe.jsx)("img",{src:o.previewUrl,alt:o.name,className:"wf-hover-inspector-img"}):(0,Fe.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Fe.jsx)(mt,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),d?.duration&&(0,Fe.jsx)("span",{className:"wf-hover-inspector-duration",children:d.duration})]}),(0,Fe.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Fe.jsx)("div",{className:"wf-hover-inspector-title",title:o.name,children:o.name}),(0,Fe.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Fe.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Fe.jsx)(xu,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value",children:c})]}),d?.resolution&&(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Fe.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Fe.jsx)(sn,{size:12})," \u5206\u8FA8\u7387"]}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value",children:d.resolution})]}),d?.size&&(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Fe.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Fe.jsx)(Eu,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value",children:d.size})]}),f?.prompt&&(0,Fe.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Fe.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Fe.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:f.prompt})]})]}),d?.tags&&d.tags.length>0&&(0,Fe.jsx)("div",{className:"wf-hover-inspector-tags",children:d.tags.map((p,h)=>(0,Fe.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Fe.jsx)(Vu,{size:10})," ",p]},h))})]})]}),document.body)};var dt=E(X(),1),zz=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n})=>{let[r,i]=(0,Ft.useState)("canvas"),[l,s]=(0,Ft.useState)("normal"),[u,d]=(0,Ft.useState)("tree"),[f,c]=(0,Ft.useState)(320),[p,h]=(0,Ft.useState)(!1),w=(0,Ft.useMemo)(()=>a5(o),[o]),[v,g]=(0,Ft.useState)([]),[b,m]=(0,Ft.useState)([]),[x,S]=(0,Ft.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[y,C]=(0,Ft.useState)({visible:!1,x:0,y:0}),k=(0,Ft.useRef)(null);(0,Ft.useEffect)(()=>()=>{k.current&&(clearTimeout(k.current),k.current=null)},[]);let _=(0,Ft.useCallback)(I=>{I.preventDefault(),h(!0);let O=I.clientX,j=f,K=$=>{let G=Math.max(260,Math.min(500,j-($.clientX-O)));c(G)},W=()=>{h(!1),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",W)};window.addEventListener("mousemove",K),window.addEventListener("mouseup",W)},[f]),T=I=>{if(n)n(I);else{let O=document.getElementById(I)||document.querySelector(`[data-id="${I}"]`);O&&(O.scrollIntoView({behavior:"smooth",block:"center"}),O.classList.add("highlight-pulse"),setTimeout(()=>O.classList.remove("highlight-pulse"),1800))}},R=(I,O)=>{if(k.current&&(clearTimeout(k.current),k.current=null),!I||!O){C({visible:!1,x:0,y:0});return}let{clientX:j,clientY:K}=O;k.current=setTimeout(()=>{C({visible:!0,x:j,y:K,item:I})},300)},B=(I,O)=>{S({visible:!0,x:I.clientX,y:I.clientY,targetType:"canvas-item",targetItem:O})},U=(I,O,j)=>{S({visible:!0,x:I.clientX,y:I.clientY,targetType:j?"asset-folder":"asset-item",targetItem:O})},L=I=>I.real_path||I.name,N=(I,O)=>{let K=`[${O==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${I.name}]`;navigator.clipboard?.writeText(K),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:K,name:I.name,previewUrl:I.previewUrl,path:I.real_path}})),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${I.name}`)},A=I=>{let O=L(I);navigator.clipboard?.writeText(O),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:O,name:I.name}})),ne.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${O}`)},M=(I,O)=>{switch(I){case"add-to-canvas":a?.(O),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${O.name}`);break;case"focus-in-canvas":T(O.id),ne.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":N(O,"canvas");break;case"add-to-subjects":m(j=>[{id:`sub-${Date.now()}`,name:O.name.replace(/\.[^/.]+$/,""),avatar:O.previewUrl||"",itemCount:1,tags:[O.type,"\u6765\u81EA\u753B\u5E03"],updatedAt:Date.now(),previewUrls:O.previewUrl?[O.previewUrl]:[]},...j]),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${O.name}`);break;case"save-to-assets":g(j=>[{id:`asset-${Date.now()}`,name:O.name,type:O.type||"doc",fileExt:O.name.split(".").pop()?.toUpperCase()||"FILE",updatedAt:Date.now(),previewUrl:O.previewUrl,real_path:O.real_path,tags:["\u753B\u5E03\u6C89\u6DC0"]},...j]),ne.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${O.name}`);break;case"open-preview":O.previewUrl?(window.open(O.previewUrl,"_blank","noopener,noreferrer"),ne.success("\u5DF2\u6253\u5F00\u9884\u89C8")):ne.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":A(O);break;case"copy-path":navigator.clipboard?.writeText(L(O)),ne.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${L(O)}`);break;case"copy-file":navigator.clipboard?.writeText(O.name),ne.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${O.name}`);break;case"duplicate":ne.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":d(j=>j==="tree"?"grid":"tree"),ne.success(u==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":ne.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":ne.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:ne.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},D=(I,O)=>{switch(I){case"add-to-canvas":a?.(O),ne.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${O.name}`);break;case"add-to-agent":case"add-to-chat":N(O,"asset");break;case"reveal-in-finder":A(O);break;case"move-to":{let j=v.filter($=>$.type==="folder"),K=j.map($=>$.name).join(" / ")||"\u6839\u76EE\u5F55",W=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${K}\uFF09\uFF1A`,j[0]?.name||"");if(W&&W.trim()){let $=j.find(G=>G.name===W.trim());g(G=>G.map(Z=>Z.id===O.id?{...Z,parentId:$?.id||W.trim()}:Z)),ne.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${W.trim()}`)}break}case"delete":g(j=>j.filter(K=>K.id!==O.id)),ne.success(`\u5DF2\u5220\u9664\uFF1A${O.name}`);break;default:ne.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},H=(I,O)=>{switch(I){case"reveal-in-finder":A(O);break;case"rename":{let j=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",O.name);j&&j.trim()&&(g(K=>K.map(W=>W.id===O.id?{...W,name:j.trim()}:W)),ne.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"));break}case"move-to":{let j=v.filter($=>$.type==="folder"&&$.id!==O.id),K=j.map($=>$.name).join(" / ")||"\u6839\u76EE\u5F55",W=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${K}\uFF09\uFF1A`,j[0]?.name||"");if(W&&W.trim()){let $=j.find(G=>G.name===W.trim());g(G=>G.map(Z=>Z.id===O.id?{...Z,parentId:$?.id||W.trim()}:Z)),ne.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${W.trim()}`)}break}case"delete":g(j=>j.filter(K=>K.id!==O.id&&K.parentId!==O.id)),ne.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${O.name}`);break;default:ne.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},z=()=>{let I=document.createElement("input");I.type="file",I.multiple=!0,I.onchange=O=>{let j=O.target.files;if(j&&j.length>0){let K=Array.from(j).map((W,$)=>({id:`upload-${Date.now()}-${$}`,name:W.name,type:W.type.startsWith("image/")?"image":W.type.startsWith("video/")?"video":"doc",fileExt:W.name.split(".").pop()?.toUpperCase()||"FILE",size:`${(W.size/1048576).toFixed(1)} MB`,updatedAt:Date.now(),tags:["\u6700\u65B0\u5BFC\u5165"]}));g(W=>[...K,...W]),ne.success(`\u5DF2\u5BFC\u5165 ${K.length} \u4E2A\u6587\u4EF6`)}},I.click()},F=()=>{let I=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");if(I&&I.trim()){let O={id:`folder-${Date.now()}`,name:I.trim(),type:"folder",itemCount:0,updatedAt:Date.now()};g(j=>[O,...j]),ne.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${I.trim()}`)}};return e?(0,dt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:`${f}px`},onPointerDown:Ae,onMouseDown:Ae,onClick:I=>I.stopPropagation(),children:[(0,dt.jsx)("div",{className:`wf-drawer-resize-handle ${p?"resizing":""}`,onMouseDown:_}),(0,dt.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,dt.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,dt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${r==="canvas"&&l==="normal"?"active":""}`,onClick:()=>{i("canvas"),s("normal")},children:"\u753B\u5E03"}),(0,dt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${r==="assets"||l==="subject-library"?"active":""}`,onClick:()=>{i("assets")},children:"\u8D44\u4EA7"})]}),(0,dt.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,dt.jsx)(Jt,{size:14})})]}),(0,dt.jsx)("div",{className:"wf-drawer-body",children:l==="subject-library"?(0,dt.jsx)(v5,{subjects:b,onBack:()=>s("normal"),onSelectSubject:I=>{},onCreateSubject:()=>{let I=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");I&&I.trim()&&m(O=>[{id:`sub-${Date.now()}`,name:I.trim(),avatar:"",itemCount:0,tags:["\u81EA\u5B9A\u4E49"],updatedAt:Date.now(),previewUrls:[]},...O])}}):r==="canvas"?(0,dt.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,dt.jsx)(x5,{nodes:w,onFocusNode:T,onContextMenu:B,onHoverItem:R,viewMode:u,onViewModeChange:d,onRefresh:()=>{ne.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,dt.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,dt.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:z,children:[(0,dt.jsx)(Oi,{size:13}),(0,dt.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,dt.jsx)(b5,{assets:v,onOpenSubjects:()=>s("subject-library"),onContextMenu:U,onHoverItem:R,onImportFiles:z,onCreateFolder:F,onInsertToCanvas:I=>a?.(I)})}),(0,dt.jsx)(S5,{isOpen:y.visible,x:y.x,y:y.y,item:y.item||null}),(0,dt.jsx)(f5,{isOpen:x.visible&&x.targetType==="canvas-item",x:x.x,y:x.y,item:x.targetItem||null,onAction:M,onClose:()=>S(I=>({...I,visible:!1}))}),(0,dt.jsx)(m5,{isOpen:x.visible&&x.targetType==="asset-item",x:x.x,y:x.y,item:x.targetItem||null,onAction:D,onClose:()=>S(I=>({...I,visible:!1}))}),(0,dt.jsx)(h5,{isOpen:x.visible&&x.targetType==="asset-folder",x:x.x,y:x.y,item:x.targetItem||null,onAction:H,onClose:()=>S(I=>({...I,visible:!1}))})]}):null},L5=zz;var Ut=E(X(),1),Pz=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],Oz=({isOpen:e,onClose:t})=>e?(0,Ut.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:Ae,onMouseDown:Ae,onClick:t,children:(0,Ut.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,Ut.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,Ut.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,Ut.jsx)(Du,{size:18}),(0,Ut.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,Ut.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,Ut.jsx)(Jt,{size:16})})]}),(0,Ut.jsx)("div",{className:"wf-shortcuts-modal__body",children:Pz.map(a=>(0,Ut.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,Ut.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,Ut.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,Ut.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,Ut.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,Ut.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,Ut.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,k5=Oz;var Co=E(Q(),1),M5=E(Dt(),1);var qt=E(X(),1),_5=278,el=12,Bz=8,L0=160,Ji=18,Hz={AudioLines:(0,qt.jsx)(Bi,{size:Ji}),ImageGen:(0,qt.jsx)(jn,{size:Ji}),Mic:(0,qt.jsx)(qi,{size:Ji}),PersonStanding:(0,qt.jsx)(Fu,{size:Ji}),TextGen:(0,qt.jsx)(Wn,{size:Ji}),VideoGen:(0,qt.jsx)(Bo,{size:Ji})},Fz={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function I5(e){return e?Fz[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function Uz(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-_5:e;return Math.min(Math.max(el,o),Math.max(el,a-_5-el))}var qz=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:l="start"})=>{let s=(0,Co.useRef)(null),[u,d]=(0,Co.useState)({left:t,top:a,maxHeight:L0});(0,Co.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?L0:window.innerHeight,p=Uz(t,l),h=a+Bz,w=Math.max(el,c-el-L0),v=Math.min(Math.max(el,h),w);d({left:p,top:v,maxHeight:Math.max(0,c-v-el)})},[l,e,t,a]),(0,Co.useEffect)(()=>{if(!e)return;let c=h=>{s.current&&!s.current.contains(h.target)&&i()},p=h=>{h.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,Co.useMemo)(()=>n.map(c=>(0,qt.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,qt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,qt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:I5(c.icon).bg,color:I5(c.icon).color},children:Hz[c.icon]??(0,qt.jsx)(mt,{size:Ji})}):null,(0,qt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,qt.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,qt.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,M5.createPortal)((0,qt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,qt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,qt.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},sm=(0,Co.memo)(qz);var So=E(Q(),1),N5=E(Dt(),1);var Ue=E(X(),1),Vz=210,Gz=230,Xz=260,jz=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:l=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,So.useRef)(null),[c,p]=(0,So.useState)("main"),h=pe();(0,So.useEffect)(()=>{a&&p("main")},[a]),(0,So.useEffect)(()=>{if(!a)return;let x=y=>{f.current&&!f.current.contains(y.target)&&n()},S=y=>{y.key==="Escape"&&n()};return document.addEventListener("mousedown",x),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",S)}},[a,n]);let w=(0,So.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:h("panel.runHint")},{action:"copy",label:h("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:h("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:h("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:h("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:h("menu.executeSelection")},{action:"copy",label:h("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:h("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:h("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:h("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:h("menu.addNode"),icon:(0,Ue.jsx)(Ze,{size:15})},{action:"undo",label:h("toolbar.undo"),shortcut:"\u2318Z",disabled:!l},{action:"redo",label:h("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:h("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:h("menu.selectAll"),shortcut:"\u2318A"}],[o,l,s,u,d,h]),v=(0,So.useMemo)(()=>[{key:"text",type:"text",label:h("node.type.text"),icon:(0,Ue.jsx)(Wn,{size:18})},{key:"image",type:"image",label:h("node.type.image"),icon:(0,Ue.jsx)(na,{size:18})},{key:"video",type:"video",label:h("node.type.video"),icon:(0,Ue.jsx)(Bo,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:h("node.type.audio"),icon:(0,Ue.jsx)(Bi,{size:18})},{key:"table",type:"table",label:h("node.type.table"),icon:(0,Ue.jsx)(Qa,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:h("node.type.video_composition"),icon:(0,Ue.jsx)(Bt,{size:18}),badge:{text:"Clip",variant:"new"}}],[h]);if(!a)return null;let g=c==="add-node"?Gz:Vz,b=Math.min(e,window.innerWidth-g-8),m=Math.min(t,window.innerHeight-Xz-8);return(0,N5.createPortal)((0,Ue.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:b,top:m},onContextMenu:x=>x.preventDefault(),children:c==="main"?w.map(x=>(0,Ue.jsxs)(So.default.Fragment,{children:[o.type==="pane"&&x.action==="undo"?(0,Ue.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&x.action==="paste"?(0,Ue.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Ue.jsxs)("button",{type:"button",className:`wf-context-menu__item${x.disabled?" wf-context-menu__item--disabled":""}`,disabled:x.disabled,onClick:S=>{S.stopPropagation(),x.action==="open-add-node"?p("add-node"):r(x.action,o)},children:[x.icon?(0,Ue.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:x.icon}):null,(0,Ue.jsx)("span",{className:"wf-context-menu__label",children:x.label}),x.action==="open-add-node"?(0,Ue.jsx)(Gn,{size:14,className:"wf-add-node-menu__arrow"}):x.shortcut?(0,Ue.jsx)("span",{className:"wf-context-menu__shortcut",children:x.shortcut}):null]})]},x.action)):(0,Ue.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Ue.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Ue.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:x=>{x.stopPropagation(),p("main")},title:h("menu.back"),children:(0,Ue.jsx)(bu,{size:16})}),(0,Ue.jsx)("span",{className:"wf-add-node-menu__title",children:h("menu.addNode")})]}),(0,Ue.jsx)("div",{className:"wf-add-node-menu__list",children:v.map(x=>(0,Ue.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:S=>{S.stopPropagation(),i?.(x.type),n()},children:[(0,Ue.jsx)("div",{className:"wf-add-node-menu__icon-box",children:x.icon}),(0,Ue.jsx)("span",{className:"wf-add-node-menu__label",children:x.label}),x.badge?(0,Ue.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${x.badge.variant}`,children:x.badge.text}):null,x.hasSubmenu?(0,Ue.jsx)(Gn,{size:14,className:"wf-add-node-menu__arrow"}):null]},x.key))})]})}),document.body)},E5=jz;var T5=E(Q(),1),A5=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:l,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:h,onResetZoom:w,onCategoryKey:v,isAssetsOpen:g=!1,enabled:b=!0})=>{(0,T5.useEffect)(()=>{if(!b)return;let m=x=>{let S=x.target;if(["INPUT","TEXTAREA"].includes(S.tagName)||S.isContentEditable)return;let y=x.metaKey||x.ctrlKey,C=x.key.toLowerCase();if(!y&&g&&/^[1-6]$/.test(x.key)){x.preventDefault(),v?.(parseInt(x.key,10));return}if(!y&&C==="a"){x.preventDefault(),u?.();return}if(!y&&C==="v"){x.preventDefault(),p?.("select");return}if(!y&&C==="h"){x.preventDefault(),p?.("pan");return}if(!y&&C==="n"){x.preventDefault(),c?.();return}if(!y&&C==="m"){x.preventDefault(),f?.();return}if(x.key==="?"||x.shiftKey&&x.key==="/"){x.preventDefault(),d?.();return}if(y&&x.key==="1"){x.preventDefault(),h?.();return}if(y&&x.key==="0"){x.preventDefault(),w?.();return}if((x.key==="Delete"||x.key==="Backspace")&&i&&!y){x.preventDefault(),o?.();return}if(x.key==="Escape"){x.preventDefault(),g?u?.():i&&n?.();return}if(y&&C==="d"&&i){x.preventDefault(),r?.();return}if(y&&C==="c"&&!x.shiftKey){x.preventDefault(),e?.();return}if(y&&C==="v"){x.preventDefault(),t?.();return}if(y&&C==="a"){x.preventDefault(),a?.();return}if(y&&C==="z"&&!x.shiftKey){x.preventDefault(),l?.();return}y&&C==="z"&&x.shiftKey&&(x.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[b,e,t,a,o,n,r,i,l,s,u,d,f,c,p,h,w,v,g])};var qo=E(Q(),1);function dm(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function D5(e,t,a){return k0(e,t,a).valid}function k0(e,t,a){let o=jp(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var _0={minZoom:.23,maxZoom:1.29,defaultZoom:1},Yz={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},R5={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},Zz={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},Wz={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},z5={portrait:Yz,square:R5,video_landscape:Zz,audio_compact:Wz};function I0(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function P5(e){return z5[I0(e)]}function O5(e,t){let a=z5[t]||R5;return Math.round(e/a.aspectRatio)}function $n(e){return P5(e).default.width}function B5(e){return P5(e).default.height}function um(e,t,a){let o=Zu(e,{nodeKind:"generate",status:"empty",nodeWidth:$n(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function H5(e="image",t={x:0,y:0},a){let o=Zu(e,{nodeKind:"import",selectedTool:"import",status:"empty",nodeWidth:$n(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function ei(e,t,a){return{nodes:[um(e,t,a)],edges:[]}}function F5(e="image",t={x:0,y:0},a){return{nodes:[H5(e,t,a)],edges:[]}}function cm(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function Kz(e,t){return`${e}-${t}`}function fm(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function pm(e){return Ik(e).map(t=>{let a=String(t.targetTool);return{key:Kz(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function U5(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var $z={visible:!1,x:0,y:0,options:[]};function q5(e){let t=pe(),{screenToFlowPosition:a}=Ka(),o=se(p=>p.applyCanvasInputMutation),n=(0,qo.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,qo.useState)($z),l=(0,qo.useRef)(null),s=(0,qo.useRef)(null),u=(0,qo.useCallback)((p,h)=>{if(!h.nodeId||h.handleType!=="source"){l.current=null;return}let w=se.getState().nodes.find(g=>g.id===h.nodeId),v=w?.data?.materialType;if(!w||!v){l.current=null;return}l.current={nodeId:h.nodeId,materialType:v}},[]),d=(0,qo.useCallback)((p,h)=>{let w=h.fromNode?.id??null,v=h.toNode?.id??null,g=l.current,b=g?pm(g.materialType):[],m=null;if(!h.isValid&&w&&v){let S=se.getState(),y=k0({source:w,target:v,sourceHandle:null,targetHandle:null},S.nodes,S.edges);m=y.valid?null:t(dm(y.reasonCode))}let x=U5({isValid:h.isValid??null,fromNodeId:w,toNodeId:v,startedFromSource:!!g,hasOptions:b.length>0,rejectReason:m});if(x.type==="reject"){n.current?.(x.reason),ne.warning(x.reason),l.current=null;return}if(x.type==="menu"&&g){let S="changedTouches"in p?p.changedTouches[0]:p;if(!S){l.current=null;return}let{clientX:y,clientY:C}=S;s.current=a({x:y,y:C}),i({visible:!0,x:y,y:C,options:b.map(k=>({key:k.key,label:t(k.labelKey),description:t(k.descKey),icon:k.icon}))});return}l.current=null},[a,t]),f=(0,qo.useCallback)(p=>{let h=l.current,w=s.current,v=fm(p);if(h&&w&&v){let g=ei(v.targetMaterialType,w),b=g.nodes[0];b&&o({addNodes:g.nodes,addEdges:[{source:h.nodeId,sourceHandle:"out",target:b.id,targetHandle:"in"}]})}i(g=>({...g,visible:!1})),l.current=null,s.current=null},[o]),c=(0,qo.useCallback)(()=>{i(p=>({...p,visible:!1})),l.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var pn=E(Q(),1);var ea=[];for(let e=0;e<256;++e)ea.push((e+256).toString(16).slice(1));function V5(e,t=0){return(ea[e[t+0]]+ea[e[t+1]]+ea[e[t+2]]+ea[e[t+3]]+"-"+ea[e[t+4]]+ea[e[t+5]]+"-"+ea[e[t+6]]+ea[e[t+7]]+"-"+ea[e[t+8]]+ea[e[t+9]]+"-"+ea[e[t+10]]+ea[e[t+11]]+ea[e[t+12]]+ea[e[t+13]]+ea[e[t+14]]+ea[e[t+15]]).toLowerCase()}var M0,Qz=new Uint8Array(16);function N0(){if(!M0){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");M0=crypto.getRandomValues.bind(crypto)}return M0(Qz)}var Jz=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E0={randomUUID:Jz};function e9(e,t,a){e=e||{};let o=e.random??e.rng?.()??N0();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return V5(o)}function t9(e,t,a){return E0.randomUUID&&!t&&!e?E0.randomUUID():e9(e,t,a)}var mm=t9;function G5(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function a9(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function X5(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=a9(o),i,l;if(t)i=t.x,l=t.y;else{let f=a?50:30;i=r.x+f,l=r.y+f}let s=new Map,u=o.map(f=>{let c=mm();return s.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:l+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:mm(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:l}}}function j5(e,t){let a=(0,pn.useRef)({nodes:[],edges:[]}),o=(0,pn.useRef)(null),n=a.current.nodes.length>0,r=(0,pn.useCallback)(()=>{let f=se.getState(),c=G5(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,pn.useCallback)(f=>{let c=X5(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=se.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(h=>({nodeId:h.id,data:{},node:{selected:!1}}))})},[]),l=(0,pn.useCallback)(()=>{r(),i()},[r,i]),s=(0,pn.useCallback)(()=>{let f=se.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,pn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,pn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:l,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var mn=E(Q(),1);function Y5(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:l,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,h]=(0,mn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,mn.useCallback)((y,C)=>{y.preventDefault();let k={type:"pane"};C?k={type:"node",nodeId:C.id}:se.getState().nodes.filter(T=>T.selected).length>1&&(k={type:"selection"}),h({visible:!0,x:y.clientX,y:y.clientY,context:k})},[]),v=(0,mn.useCallback)((y,C)=>{w(y,C)},[w]),g=(0,mn.useCallback)(y=>{w(y)},[w]),b=(0,mn.useCallback)(y=>{w(y)},[w]),m=(0,mn.useCallback)(()=>{h(y=>({...y,visible:!1}))},[]),x=(0,mn.useCallback)((y,C)=>{let k=t({x:p.x,y:p.y});switch(y){case"copy":{if(C.type==="node"){let T=se.getState().nodes.find(R=>R.id===C.nodeId);T&&!T.selected&&(s(),a(R=>R.map(B=>B.id===C.nodeId?{...B,selected:!0}:B)))}o();break}case"paste":n(k);break;case"duplicate":r();break;case"delete":{if(C.type==="node"){let _=se.getState();_.nodes.find(R=>R.id===C.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[C.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":l();break;case"execute-selection":{let _=se.getState().nodes.filter(T=>T.selected).map(T=>T.id);_.length>0&&f?.(_);break}case"execute-node":{C.type==="node"&&f?.([C.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,i,u,d,l,m,f]),S=(0,mn.useCallback)(y=>{let C=t({x:p.x,y:p.y});c?.(y,C),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:v,handlePaneContextMenu:g,handleSelectionContextMenu:b,closeMenu:m,handleMenuAction:x,handleAddNodeFromMenu:S}}function o9(e,t){if(!t||!Array.isArray(e))return{focused:!1};let a=e.find(o=>o.id===t);return a?{focused:!0,nodeId:a.id,x:a.position.x+100,y:a.position.y+100,zoom:1,duration:800}:{focused:!1}}function Z5(e){let t=o9(e.nodes,e.nodeId);return t.focused?(e.setCenter(t.x,t.y,{zoom:t.zoom,duration:t.duration}),e.setNodes(a=>a.map(o=>({...o,selected:o.id===e.nodeId}))),!0):!1}var n9=E(Q(),1),T0=new Map;function gm(e){T0.set(e.type,e)}function W5(){let e={};for(let[t,a]of T0)e[t]=a.component;return e}function K5(e,t,a){let o=T0.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var st=E(Q(),1);var $e=E(Q(),1);function $5(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var Vo=E(X(),1),r9=4,i9=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=pe(),[i,l]=(0,$e.useState)(!1),[s,u]=(0,$e.useState)(!1),[d,f]=(0,$e.useState)(null),c=(0,$e.useRef)(null),p=(0,$e.useRef)(null),h=(0,$e.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",v=a==="plus"&&!!o&&o.length>0,g=d0(M=>M.inProgress),{screenToFlowPosition:b}=Ka(),m=(0,$e.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,$e.useEffect)(()=>{if(a!=="plus"){m();return}let M=c.current,D=p.current;if(!M||!D)return;let H=z=>{if(s)return;let F=M.getBoundingClientRect(),I=F.left+F.width/2,O=F.top+F.height/2,{x:j,y:K}=$5(e,z.clientX-I,z.clientY-O);D.style.setProperty("--wf-handle-offset-x",`${j}px`),D.style.setProperty("--wf-handle-offset-y",`${K}px`)};return M.addEventListener("pointermove",H),()=>{M.removeEventListener("pointermove",H)}},[s,m,e,a]),(0,$e.useEffect)(()=>{if(!s){m(),f(null);return}let M=()=>{let D=c.current;if(!D)return;let H=D.getBoundingClientRect();f({x:w?H.right:H.left,y:H.bottom})};return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[s,w,m]);let x=(0,$e.useCallback)(()=>{l(!0)},[]),S=(0,$e.useCallback)(()=>{l(!1),m()},[m]),y=(0,$e.useCallback)(M=>{let D=c.current;!D||M===null||typeof D.hasPointerCapture!="function"||typeof D.releasePointerCapture!="function"||!D.hasPointerCapture(M)||D.releasePointerCapture(M)},[]),C=(0,$e.useCallback)(()=>{y(h.current.pointerId),h.current.pointerId=null,h.current.startX=0,h.current.startY=0,h.current.dragIntent=!1},[y]),k=(0,$e.useCallback)(M=>{M.button===0&&(typeof M.currentTarget.setPointerCapture=="function"&&M.currentTarget.setPointerCapture(M.pointerId),h.current.pointerId=M.pointerId,h.current.startX=M.clientX,h.current.startY=M.clientY,h.current.dragIntent=!1,h.current.suppressClick=!1)},[]),_=(0,$e.useCallback)(M=>{if(h.current.pointerId!==M.pointerId)return;Math.hypot(M.clientX-h.current.startX,M.clientY-h.current.startY)>=r9&&(h.current.dragIntent=!0,h.current.suppressClick=!0,s&&u(!1))},[s]),T=(0,$e.useCallback)(M=>{h.current.pointerId===M.pointerId&&(h.current.dragIntent||(h.current.suppressClick=!1),C())},[C]),R=(0,$e.useCallback)(M=>{h.current.pointerId===M.pointerId&&(h.current.suppressClick=!1,C())},[C]),B=(0,$e.useCallback)(M=>{if(M.stopPropagation(),h.current.suppressClick){h.current.suppressClick=!1;return}v&&u(D=>!D)},[v]),U=(0,$e.useCallback)(()=>{let M=d;if(!M){let D=c.current;if(!D)return;let H=D.getBoundingClientRect();M={x:w?H.right:H.left,y:H.bottom}}return{screenPosition:M,flowPosition:b(M)}},[w,d,b]),L=(0,$e.useCallback)(M=>{n?.(M,U()),u(!1)},[n,U]),N=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",g?"wf-handle--connection-active":""].filter(Boolean).join(" "),A={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,Vo.jsxs)(bs,{id:w?"in":"out",type:w?"target":"source",position:w?oe.Left:oe.Right,isConnectable:!0,className:N,style:A,children:[(0,Vo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,Vo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,Vo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,Vo.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:x,onPointerLeave:S,onPointerDown:k,onPointerMove:_,onPointerUp:T,onPointerCancel:R,onClick:B,children:(0,Vo.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,Vo.jsx)("div",{className:"wf-handle__plus-button",children:(0,Vo.jsx)(Ze,{size:24,strokeWidth:2.5})})})}):null,v&&d?(0,Vo.jsx)(sm,{visible:s,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Qn=(0,$e.memo)(i9);var Go=E(Q(),1);var Ms=E(X(),1),Q5=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,Ms.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,Ms.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,Ms.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,Ms.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var ta=E(X(),1);function l9(e){let t=pe();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var s9=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:l=400})=>{let s=pe(),u=(0,Go.useRef)(e),[d,f]=(0,Go.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,Go.useState)(1),[h,w]=(0,Go.useState)(e==="completed"?1:0),[v,g]=(0,Go.useState)(e==="pending"||e==="generating");(0,Go.useEffect)(()=>{let B=u.current;if(u.current=e,(B==="pending"||B==="generating")&&e==="completed"){f("crossfading"),g(!0),requestAnimationFrame(()=>{p(0),w(1)});let U=setTimeout(()=>{f("complete"),g(!1)},l+50);return()=>clearTimeout(U)}B==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),g(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(g(!0),p(1),w(0),f("idle")),e==="failed"&&(g(!1),f("idle")),B===e&&e==="completed"&&(f("complete"),w(1),g(!1))},[e,l]);let b=e==="pending"||e==="generating",m=e==="failed",x=e==="completed",S=s(e==="pending"?"node.preparing":"node.generating"),y=l9(a),C=(0,Go.useCallback)(()=>({transition:`opacity ${l}ms ease-out`}),[l]),k=`wf-gsc__box--${t}`,_=()=>(0,ta.jsx)("div",{className:"wf-gsc__skeleton",style:{...C(),opacity:c},children:(0,ta.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${k}`,children:(0,ta.jsx)(Q5,{borderRadius:"inherit",children:(0,ta.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,ta.jsx)("span",{className:"wf-gsc__progress-text",children:S})})})})}),T=()=>(0,ta.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${k} ${i}`,children:[(0,ta.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,ta.jsx)(Jt,{size:24})}),(0,ta.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),y?(0,ta.jsx)("span",{className:"wf-gsc__failed-message",children:y}):null,o?(0,ta.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,ta.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,ta.jsx)(Zn,{size:14}),s("node.regenerate")]}):null]}),R=B=>(0,ta.jsx)("div",{className:`${i} ${B?"wf-gsc__content--blur":""}`,style:{...C(),opacity:h},children:r});return(0,ta.jsxs)("div",{className:`wf-gsc ${b?k:""} ${i}`,children:[(b||v)&&_(),m&&T(),(x||d==="crossfading")&&R(d==="crossfading")]})},Ju=s9;var kt=E(Q(),1);function Lo(e){return e>0?1/e:1}function J5(e,t,a){return!!e&&!t&&a!=="running"}function e_(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var ti=E(X(),1),t_=24,a_=30,o_={text:Kt,image:jn,video:Bo,audio:Qt,table:Qa,video_composition:Bt},d9=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=pe(),i=t?r(`node.type.${t}`):"\u8282\u70B9",l=e||i,{zoom:s}=yo(),[u,d]=(0,kt.useState)(!1),[f,c]=(0,kt.useState)(l),p=(0,kt.useRef)(null),h=(0,kt.useMemo)(()=>Lo(s),[s]);(0,kt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,kt.useEffect)(()=>{u||c(l)},[l,u]);let w=(0,kt.useCallback)(y=>{y.stopPropagation(),d(!0),c(l)},[l]),v=(0,kt.useCallback)(()=>{let C=f.trim()||i;d(!1),C!==e&&o&&o(C)},[f,i,e,o]),g=(0,kt.useCallback)(()=>{d(!1),c(l)},[l]),b=(0,kt.useCallback)(y=>{y.key==="Enter"?(y.preventDefault(),v()):y.key==="Escape"&&(y.preventDefault(),g())},[v,g]),m=(0,kt.useCallback)(y=>{let C=y.target.value;C.length<=a_&&c(C)},[]),x=()=>{if(a)return kt.default.isValidElement(a)?a:(0,ti.jsx)(a,{size:14});let y=(t in o_?o_[t]:null)||Kt;return(0,ti.jsx)(y,{size:14})};return(0,ti.jsxs)("div",{className:"wf-node-header",style:{top:-(t_+4*h),height:t_,transform:`scale(${h})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,ti.jsx)("span",{className:"wf-node-header__icon",children:x()}),u?(0,ti.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:v,onKeyDown:b,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:a_}):(0,ti.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:l.length>20?l:r("node.renameHint"),children:l}),n]})},Ns=(0,kt.memo)(d9);var hm=E(Q(),1);var gn=E(X(),1),u9=({executionStatus:e,status:t})=>{let a=pe();return(0,hm.useMemo)(()=>{switch(e){case"running":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,gn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},xm=(0,hm.memo)(u9);var tl=E(Q(),1);var ec=E(X(),1);var c9=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let l=(0,tl.useMemo)(()=>Fo(e,t,a),[e,t,a]),s=(0,tl.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,tl.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!l)return null;switch(e){case"image":return(0,ec.jsx)("img",{src:l,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:s});case"video":return(0,ec.jsx)("video",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,ec.jsx)("div",{className:"wf-media-preview__audio",children:(0,ec.jsx)("audio",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},n_=(0,tl.memo)(c9);var r_=E(Q(),1);var Ee=E(X(),1),f9=({materialType:e,nodeKind:t="generate",onApplyPreset:a,onStartEdit:o})=>{let n=pe();return t==="import"?(0,Ee.jsxs)("div",{className:`wf-node-empty wf-node-empty--${e} wf-node-empty--import-kind`,children:[(0,Ee.jsxs)("div",{className:"wf-node-empty__icon-box",children:[e==="image"&&(0,Ee.jsx)(na,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"}),e==="video"&&(0,Ee.jsx)(Ea,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"}),e==="audio"&&(0,Ee.jsx)(Qt,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"}),e==="text"&&(0,Ee.jsx)(Kt,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})]}),(0,Ee.jsx)("div",{className:"wf-node-empty__try-label",children:n("panel.dropToImport")})]}):e==="text"?(0,Ee.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(Kt,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ee.jsx)("div",{className:"wf-node-empty__try-label",children:n("pills.tryLabel")}),(0,Ee.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:r=>r.stopPropagation(),children:[(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:o,children:[(0,Ee.jsx)(dn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:n("pills.writePrompt")})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("script"),children:[(0,Ee.jsx)(vu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:n("pills.scriptGen")})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("planning"),children:[(0,Ee.jsx)(ln,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:n("pills.planningGen")})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("prompt"),children:[(0,Ee.jsx)(mt,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ee.jsx)("span",{children:n("pills.promptExpand")})]})]})]}):e==="image"?(0,Ee.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(na,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ee.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(Ea,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ee.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ee.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ee.jsx)(Qt,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},bm=(0,r_.memo)(f9);var Jn=E(Q(),1);var Vt=E(X(),1),p9=({materialType:e,selected:t,onOpenResourcePicker:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let i=pe(),{zoom:l}=yo(),[s,u]=Jn.default.useState(!1),d=(0,Jn.useMemo)(()=>Lo(l),[l]),f=(0,Jn.useCallback)(()=>{n&&(n(),u(!0),setTimeout(()=>u(!1),1500))},[n]),c=(0,Jn.useMemo)(()=>{switch(e){case"image":return i("pill.importImage");case"video":return i("pill.importVideo");case"audio":return i("pill.importAudio");default:return i("pill.import")}},[e,i]);return(0,Vt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*d),transform:`translate(-50%, -100%) scale(${d})`,transformOrigin:"bottom center"},onClick:h=>h.stopPropagation(),children:e==="text"?(0,Vt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Vt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:i("pill.textEdit"),children:[(0,Vt.jsx)(ln,{size:13,className:"wf-floating-top-pill__icon"}),(0,Vt.jsx)("span",{children:i("pill.textEdit")})]}),(0,Vt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Vt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:f,title:i("pill.copy"),children:s?(0,Vt.jsx)(Lt,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Vt.jsx)(jr,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Vt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Vt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:i("pill.structureSplit"),children:(0,Vt.jsx)($t,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,Vt.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Vt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,children:[(0,Vt.jsx)(Zi,{size:13,className:"wf-floating-top-pill__icon"}),(0,Vt.jsx)("span",{children:c})]})})})},i_=(0,Jn.memo)(p9);var Es=E(Q(),1);var l_=E(Q(),1),s_=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function m9(e,t,a=s_){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function d_({refs:e,excludeSelectors:t=s_,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,l_.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;m9(f,r.map(c=>c.current),t)&&a()},l=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",l)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",l)}},[e,t,a,o,n])}var A0=E(X(),1),g9=480,h9=({children:e,onClose:t,width:a=g9})=>{let{zoom:o}=yo(),n=(0,Es.useRef)(null),r=(0,Es.useMemo)(()=>Lo(o),[o]);return d_({refs:n,onClose:t}),(0,A0.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,A0.jsx)("div",{className:"wf-panel-shell__card",children:e})})},u_=(0,Es.memo)(h9);var ao=E(Q(),1);var c_=E(Q(),1),Ts=E(X(),1),D0={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},x9=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function b9(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(D0[t])return t;for(let a of x9)if(a.regex.test(t))return a.brand;return null}var f_=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,c_.useMemo)(()=>t&&D0[t.toLowerCase()]?t.toLowerCase():b9(e),[t,e]),l=i?D0[i]:null;if(!l){if(r)return(0,Ts.jsx)(Ts.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,Ts.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,Ts.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:l.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var p_=E(Q(),1);function m_(e){let t=WL(),a=KL();return(0,p_.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},l=Fo(i.materialType,i.mediaAssets,i.mediaUrl),s=i.content||i.generatedContent||"",u=!!(l||i.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:l,hasMedia:u,textContent:s}]}),[t,a,e])}var g_=E(Q(),1),h_="wf_capabilities_catalog_v1",w9={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function tc(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(h_);return e?JSON.parse(e):null}catch{return null}}function x_(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(h_,JSON.stringify(e))}catch{}}function b_(e,t,a){return(0,g_.useMemo)(()=>{let n=(a??tc())?.[e]??[],r=n.find(k=>k.id===t)??n[0],i=w9[e]??{},l=r?.parameters??i,s=l.aspectRatio?.options&&l.aspectRatio.options.length>0?l.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=l.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=k=>k?s.some(_=>_.value===k):!1,f=l.duration?.options&&l.duration.options.length>0?l.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=l.duration?.defaultValue??f[0]?.value??5,p=k=>typeof k!="number"?!1:f.some(_=>_.value===k),h=l.resolution?.options??[],w=l.resolution?.defaultValue??h[0]?.value??"",v=l.quality?.options??[],g=l.quality?.defaultValue??v[0]?.value??"",b=!!l.sound?.supported,m=!!l.sound?.defaultValue,x=l.voice?.options??[],S=l.voice?.defaultValue??x[0]?.value??"",y=!!l.instrumental?.supported,C=!!l.instrumental?.defaultValue;return{schema:l,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:h,defaultResolution:w,qualityOptions:v,defaultQuality:g,hasSoundSupport:b,defaultSound:m,voiceOptions:x,defaultVoice:S,hasInstrumentalSupport:y,defaultInstrumental:C}},[e,t,a])}var w_=E(Q(),1);var er=E(X(),1),v9=({onClick:e,disabled:t,isGenerating:a})=>{let o=pe();return(0,er.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,er.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,er.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,er.jsx)(Wr,{size:14,className:"wf-generate-btn__spin"}):(0,er.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,er.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,er.jsx)("path",{d:"M12 19V5"})]})})]})},v_=(0,w_.memo)(v9);var J=E(X(),1);function y9(e){let t=(0,J.jsx)(f_,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var C9=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let l=pe(),{materialType:s,selectedTool:u,params:d,prompt:f}=t,c=Gp(t),[p,h]=(0,ao.useState)(!1),[w,v]=(0,ao.useState)(!1),g=m_(e);if(c==="import")return(0,J.jsx)("div",{className:"wf-config-panel wf-config-panel--import",children:(0,J.jsxs)("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,J.jsx)("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--wb-text-secondary)"},children:l("panel.hintImportNode")}),!!t.realPath&&(0,J.jsx)("span",{style:{fontSize:"11px",color:"var(--wb-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"240px"},title:String(t.realPath),children:String(t.realPath).split("/").pop()})]}),i&&(0,J.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",style:{padding:"4px 10px",height:"28px"},onClick:i,children:(0,J.jsx)("span",{children:l("node.relink")})})]})});let b=u==="text-to-music"?"music":"speech",m=(0,ao.useCallback)(I=>{o({selectedTool:I==="music"?"text-to-music":"text-to-audio"})},[o]),x=(0,ao.useMemo)(()=>{let I=a?.[s]??[];return I.length===0&&(s==="text"?I=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?I=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?I=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(I=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),I.map(O=>{let j=y9(O.id),K=j.icon,W=O.badge??j.badge,$=O.subtitle??j.subtitle;return{value:O.id,label:O.label,triggerLabel:(0,J.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[K?(0,J.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:K}):null,(0,J.jsx)("span",{children:O.label})]}),icon:K,badge:W,subtitle:$}})},[a,s]),S=typeof d.model=="string"?d.model:x[0]?.value,{aspectRatioOptions:y,defaultAspectRatio:C,isAspectRatioValid:k,durationOptions:_,defaultDuration:T,isDurationValid:R,resolutionOptions:B,defaultResolution:U}=b_(s,S,a),L=(0,ao.useCallback)((I,O)=>{o({params:{...d,[I]:O}})},[o,d]),N=(0,ao.useCallback)(I=>{let W=((a??tc())?.[s]??[]).find(G=>G.id===I)?.parameters,$={...d,model:I};d.aspectRatio&&W?.aspectRatio?.options&&(W.aspectRatio.options.some(Z=>Z.value===d.aspectRatio)||($.aspectRatio=W.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&W?.duration?.options&&(W.duration.options.some(Z=>Z.value===d.duration)||($.duration=W.duration.defaultValue||W.duration.options[0]?.value||5)),d.resolution&&W?.resolution?.options?W.resolution.options.some(Z=>Z.value===d.resolution)||($.resolution=W.resolution.defaultValue||W.resolution.options[0]?.value):d.resolution&&W&&!W.resolution?.options&&delete $.resolution,o({params:$})},[a,s,o,d]),A=(0,ao.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),M=(0,ao.useMemo)(()=>{switch(s){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(b==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[s,b,l]),D=typeof d.aspectRatio=="string"&&k(d.aspectRatio)?d.aspectRatio:C,H=typeof d.duration=="number"&&R(d.duration)?d.duration:T,z=I=>!!I&&B.some(O=>O.value===I),F=typeof d.resolution=="string"&&z(d.resolution)?d.resolution:U;return(0,J.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,J.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,J.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,J.jsx)(qi,{size:13}),(0,J.jsx)("span",{children:l("panel.audioGen")})]}),(0,J.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,J.jsx)(Qt,{size:13}),(0,J.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,J.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,J.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[g.length>0||i?(0,J.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[g.map(I=>(0,J.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${I.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${I.label} (${I.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[I.url&&I.materialType==="image"?(0,J.jsx)("img",{src:I.url,alt:I.label,className:"wf-config-panel__ref-thumb-media"}):I.url&&I.materialType==="video"?(0,J.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,J.jsx)("video",{src:I.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,J.jsx)(Ea,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):I.materialType==="audio"?(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,J.jsx)(Qt,{size:13})}):I.materialType==="text"?(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,J.jsx)(Kt,{size:13})}):(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,J.jsx)(na,{size:13})}),I.hasMedia&&(0,J.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},I.nodeId)),i?(0,J.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:l("picker.addRef"),children:(0,J.jsx)(Ze,{size:14})}):null]}):(0,J.jsx)("span",{}),(0,J.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>h(!0),title:l("header.fitView"),children:(0,J.jsx)(sn,{size:13})})]}),(0,J.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:M,rows:3,onChange:I=>o({prompt:I.target.value})}),(0,J.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",A]})]}),(0,J.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,J.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,J.jsx)(Aa,{className:"wf-param-bar__select wf-param-bar__select--model",value:S,options:x,popupMatchSelectWidth:!1,onChange:I=>N(I)}),s==="image"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,J.jsx)(Aa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:D,options:y,popupMatchSelectWidth:!1,onChange:I=>L("aspectRatio",I)})})]}),s==="video"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,J.jsx)(Aa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:D,options:y,popupMatchSelectWidth:!1,onChange:I=>L("aspectRatio",I)}),(0,J.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,J.jsx)(Aa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:H,options:_,popupMatchSelectWidth:!1,onChange:I=>L("duration",I)}),B.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,J.jsx)(Aa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:F,options:B,popupMatchSelectWidth:!1,onChange:I=>L("resolution",I)})]})]})]}),s==="audio"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>v(!w),title:l("panel.advanced"),children:(0,J.jsx)(Xi,{size:13})})]})]}),(0,J.jsx)("div",{className:"wf-config-panel__action-group",children:(0,J.jsx)(v_,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),w&&(0,J.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,J.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,J.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,J.jsx)(p0,{style:{flex:1},min:1,max:s==="video"?20:60,value:H,onChange:I=>L("duration",I)})]})}),(0,J.jsx)(Wi,{title:l("panel.promptPlaceholder"),open:p,onCancel:()=>h(!1),width:680,children:(0,J.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:M,rows:10,onChange:I=>o({prompt:I.target.value})})})]})},y_=(0,ao.memo)(C9);var Ra=E(Q(),1);var ia="/omnimux-workflow";var Da={manifest:`${ia}/api/manifest`,canvasJs:`${ia}/canvas.js`,workspaces:`${ia}/api/workspaces`,workspace:e=>`${ia}/api/workspaces/${e}`,workspaceVersion:e=>`${ia}/api/workspaces/${e}/version`,capabilities:`${ia}/api/capabilities`,media:`${ia}/media`,pick:`${ia}/api/pick`,localFile:`${ia}/api/local-file`,localFileProbe:`${ia}/api/local-file/probe`,executions:e=>`${ia}/api/workspaces/${e}/executions`,execution:(e,t)=>`${ia}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${ia}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${ia}/api/workspaces/${e}/executions/${t}/events`};var S9=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),L9=new Set(["mp4","webm","mov","mkv","avi","m4v"]),k9=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),_9={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function C_(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function ac(e){return _9[C_(e)]}function wm(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=C_(e);return S9.has(o)?"image":L9.has(o)?"video":k9.has(o)?"audio":null}function vm(e){return typeof e=="string"&&e.startsWith("blob:")}function tr(e){return`${ia}/api/local-file?path=${encodeURIComponent(e)}`}function As(e){let t=tr(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||ac(e.name)||ac(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function S_(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=tr(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function L_(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var R0=["image","video","audio"],I9=80,M9=40;function M_(e){return!!e&&typeof e=="object"}function N_(e){return M_(e.data)?e.data:{}}function E_(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function T_(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function N9(e){let t=e.dimensions;if(M_(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function E9(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function T9(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function A_(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function A9(e,t){if(!R0.includes(e))return!1;if(Fo(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function D_(e,t,a){let o=A_(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=N_(r),l=E_(i.materialType);if(!l||!A9(l,i))continue;let s=E9(i,r.id),u=N9(i);n.push({nodeId:r.id,materialType:l,title:s,previewUrl:Fo(l,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:T9(i,s,r.id,u),width:u.width,height:u.height})}return n}function R_(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function k_(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function __(e,t){return Xp(e,t)}function I_(e){return As({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function D9(e,t,a){let o=$n(a),n=B5(a);return{x:e.position.x-o-I9,y:e.position.y+t*(n+M9)}}function R9(e){return E_(N_(e).materialType)}function z_(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=A_(e.edges,e.targetNodeId),l=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||l.has(w)){t.push({id:w,reason:"already_connected"});continue}let v=e.nodes.find(g=>g.id===w);if(!v){t.push({id:w,reason:"missing"});continue}if(!__(v,r)){t.push({id:w,reason:"type_contract"});continue}a.push(k_(w,e.targetNodeId)),l.add(w)}let s=e.localFiles.filter(w=>!w.realPath||!R0.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=R9(r),d=s[0],f=!!u&&R0.includes(u)&&!!d&&d.materialType===u,c=0,p=f?s.slice(1):s;f&&d&&n.push({nodeId:e.targetNodeId,data:I_(d)});for(let w of p){let v=D9(r,c,w.materialType),g=um(w.materialType,v,{...I_(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!__(g,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(g),a.push(k_(g.id,e.targetNodeId)),l.add(g.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}var al=E(Q(),1);var ve=E(X(),1);function ym(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var z9=({items:e,selectedIds:t,onToggle:a})=>{let o=pe(),[n,r]=(0,al.useState)(""),[i,l]=(0,al.useState)("all"),[s,u]=(0,al.useState)("grid"),d=(0,al.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,al.useMemo)(()=>R_(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,ve.jsxs)("div",{className:"wf-picker-pane",children:[(0,ve.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,ve.jsxs)("label",{className:"wf-picker-search",children:[(0,ve.jsx)(Oo,{size:14,className:"wf-picker-search__icon"}),(0,ve.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,ve.jsx)(Aa,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>l(p)}),(0,ve.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,ve.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,ve.jsx)(Po,{size:14})}),(0,ve.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,ve.jsx)(Yn,{size:14})})]})]}),f.length===0?(0,ve.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,ve.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let h=t.includes(p.nodeId);return(0,ve.jsxs)("button",{type:"button",className:`wf-picker-card ${h?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,ve.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,ve.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,ve.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,ve.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(ym(p.materialType))}),p.alreadyConnected?(0,ve.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,ve.jsx)(Lt,{size:11}),o("picker.added")]}):(0,ve.jsx)("span",{className:`wf-picker-check ${h?"wf-picker-check--on":""}`,children:h?(0,ve.jsx)(Lt,{size:11}):null})]}),(0,ve.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,ve.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,ve.jsx)("span",{className:"wf-picker-type-tag",children:o(ym(p.materialType))})]})]},p.nodeId)})}):(0,ve.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let h=t.includes(p.nodeId);return(0,ve.jsxs)("button",{type:"button",className:`wf-picker-row ${h?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,ve.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,ve.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,ve.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,ve.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(ym(p.materialType))})}),(0,ve.jsxs)("div",{className:"wf-picker-row__body",children:[(0,ve.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,ve.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(ym(p.materialType))]})]}),p.alreadyConnected?(0,ve.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,ve.jsx)(Lt,{size:11}),o("picker.added")]}):(0,ve.jsx)("span",{className:`wf-picker-check ${h?"wf-picker-check--on":""}`,children:h?(0,ve.jsx)(Lt,{size:11}):null})]},p.nodeId)})})]})},P_=z9;var ol=E(Q(),1);async function Xo(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function O_(){return Xo(Da.capabilities)}function B_(e,t){return Xo(Da.workspaces,{method:"POST",body:{name:e,id:t}})}function oc(e){return Xo(Da.workspace(encodeURIComponent(e)))}function H_(e){return Xo(Da.workspaceVersion(encodeURIComponent(e)))}function F_(e,t){return Xo(Da.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function U_(e,t={}){return Xo(Da.executions(encodeURIComponent(e)),{method:"POST",body:t})}function q_(e){return Xo(Da.executions(encodeURIComponent(e)))}function V_(e,t){return Xo(Da.execution(encodeURIComponent(e),encodeURIComponent(t)))}function nc(){return Xo(Da.pick,{method:"POST",body:{kind:"file"}})}function G_(e){return Xo(Da.localFileProbe,{method:"POST",body:{paths:e}})}function X_(e,t,a){return Xo(Da.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}function Cm(e){let t=e.path;return typeof t=="string"?t:""}function P9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function z0(e,t={}){if(!e)return null;let a=t.name||P9(e),o=t.mime||ac(a)||ac(e)||"",n=wm(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:tr(e)}:null}function rc(e){let t=[];for(let a of e){let o=z0(a);o&&t.push(o)}return t}var _t=E(X(),1),O9=({files:e,onAddFiles:t,onRemove:a})=>{let o=pe(),[n,r]=(0,ol.useState)(!1),i=(0,ol.useCallback)(d=>{let f=rc(d);f.length>0&&t(f),f.length<d.length&&ne.warning(o("picker.unsupported")),d.length>0&&f.length===0&&ne.warning(o("picker.unsupported"))},[t,o]),l=(0,ol.useCallback)(async()=>{let d=await nc();if(!d.ok){d.body.error==="picker-unsupported"?ne.warning(o("picker.needPath")):ne.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),s=(0,ol.useCallback)(d=>{let f=Array.from(d),c=[],p=0,h=0;for(let w of f){let v=Cm(w);if(!v){p+=1;continue}let g=z0(v,{name:w.name,mime:w.type,size:w.size});g?c.push(g):h+=1}c.length>0&&t(c),p>0&&ne.warning(o("picker.needPath")),h>0&&ne.warning(o("picker.unsupported"))},[t,o]),u=(0,ol.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&s(d.dataTransfer.files)},[s]);return(0,_t.jsxs)("div",{className:"wf-picker-pane",children:[(0,_t.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{l()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,_t.jsx)(Zi,{size:22,className:"wf-picker-dropzone__icon"}),(0,_t.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,_t.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,_t.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,_t.jsx)(ku,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,_t.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||tr(d.realPath);return(0,_t.jsxs)("li",{className:"wf-picker-file-item",children:[(0,_t.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,_t.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,_t.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,_t.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,_t.jsxs)("div",{className:"wf-picker-row__body",children:[(0,_t.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,_t.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${T_(d.size)}`:""]})]}),(0,_t.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,_t.jsx)(Ja,{size:14})})]},d.id)})}):null]})},j_=O9;var jo=E(X(),1),B9=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=pe(),i=se(C=>C.nodes),l=se(C=>C.edges),[s,u]=(0,Ra.useState)(a),[d,f]=(0,Ra.useState)([]),[c,p]=(0,Ra.useState)([]),h=(0,Ra.useMemo)(()=>D_(i,l,t),[i,l,t]);(0,Ra.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,Ra.useCallback)(()=>{p([]),o()},[o]),v=(0,Ra.useCallback)((C,k)=>{k||f(_=>_.includes(C)?_.filter(T=>T!==C):[..._,C])},[]),g=(0,Ra.useCallback)(C=>{p(k=>[...k,...C])},[]),b=(0,Ra.useCallback)(C=>{p(k=>k.filter(_=>_.id!==C))},[]),x=d.filter(C=>{let k=h.find(_=>_.nodeId===C);return k&&!k.alreadyConnected}).length+c.length,S=(0,Ra.useCallback)(()=>{if(x===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,x,d]),y=(0,jo.jsxs)("div",{className:"wf-picker-footer",children:[(0,jo.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,jo.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:x===0,onClick:S,children:[r("picker.use")," ",x," ",r("picker.items")]})]});return(0,jo.jsxs)(Wi,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:y,children:[(0,jo.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,jo.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",h.length,")"]}),(0,jo.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,jo.jsx)(P_,{items:h,selectedIds:d,onToggle:v}):(0,jo.jsx)(j_,{files:c,onAddFiles:g,onRemove:b})]})},Sm=B9;var ar=E(Q(),1);function Y_(e){let t=pe(),[a,o]=(0,ar.useState)(!1),[n,r]=(0,ar.useState)("canvas"),i=(0,ar.useCallback)((f="canvas")=>{r(f),o(!0)},[]),l=(0,ar.useCallback)(()=>{o(!1)},[]),s=(0,ar.useCallback)(f=>{let c=se.getState(),p=z_({nodes:c.nodes,edges:c.edges,targetNodeId:e,selectedCanvasNodeIds:f.selectedCanvasNodeIds,localFiles:f.localFiles});return p.hasWork?c.applyCanvasInputMutation({addNodes:p.addNodes,addEdges:p.addEdges,nodePatches:p.nodePatches}).status!=="allowed"?(ne.error(t("picker.commitFailed")),!1):(p.rejected.length>0?ne.warning(t("picker.commitPartial")):ne.success(t("picker.commitOk")),o(!1),!0):(ne.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,ar.useCallback)(async()=>{let f=await nc();if(!f.ok)return f.body.error==="picker-unsupported"?ne.warning(t("picker.needPath")):ne.error(t("picker.pickFailed")),!1;let c=f.body.paths??[];if(c.length===0)return!1;let p=rc(c);return p.length===0?(ne.warning(t("picker.unsupported")),!1):s({selectedCanvasNodeIds:[],localFiles:p})},[s,t]),d=(0,ar.useCallback)(async f=>{let c=await nc();if(!c.ok)return ne.error(t("picker.pickFailed")),!1;let p=c.body.path;if(!p)return!1;let w=rc([p])[0];if(!w||w.materialType!==f)return ne.warning(t("picker.unsupported")),!1;let v=As({realPath:w.realPath,name:w.name,materialType:w.materialType,mime:w.mime,size:w.size});return se.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:v}]}).status!=="allowed"?(ne.error(t("picker.commitFailed")),!1):(ne.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:l,importLocalFiles:u,relinkLocalFile:d,commit:s}}var Te=E(X(),1),H9=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:l,mediaUrl:s,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,h=t.__catalog??null,[w,v]=(0,st.useState)(!1),[g,b]=(0,st.useState)(!1),[m,x]=(0,st.useState)(!1),[S,y]=(0,st.useState)(!1),[C,k]=(0,st.useState)(null),{setNodes:_}=Ka(),T=Ke(te=>te.status==="pending"||te.status==="running"),R=o.nodeWidth??$n(n),B=I0(n),U=O5(R,B),L=C??o.nodeHeight??U,N=(0,st.useCallback)(te=>{_(Me=>Me.map(qe=>qe.id===e?{...qe,data:{...qe.data,...te}}:qe))},[e,_]),A=(0,st.useCallback)((te,Me)=>{if(te>0&&Me>0){let qe=te/Me,ht=Math.max(80,Math.min(800,Math.round(R/qe)));k(ht),o.nodeHeight!==ht&&N({nodeHeight:ht})}},[o.nodeHeight,R,N]),M=(0,st.useCallback)(()=>{if(Gp(o)==="generate"){let Me=o.selectedTool;(!Me||Me==="text-editor")&&N({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]})}Ke.getState().startNodeExecution?.(e)},[e,n,o,N]),D=pe(),H=se(te=>te.applyCanvasInputMutation),z=Y_(e),F=(0,st.useMemo)(()=>pm(n).map(te=>({key:te.key,label:D(te.labelKey),description:D(te.descKey),icon:te.icon})),[n,D]),I=(0,st.useCallback)((te,Me)=>{let qe=fm(te),ht=Me?.flowPosition;if(!qe||!ht)return;let va=ei(qe.targetMaterialType,ht),Zo=va.nodes[0];Zo&&H({addNodes:va.nodes,addEdges:[{source:e,sourceHandle:"out",target:Zo.id,targetHandle:"in"}]})},[H,e]),O=u||l||"",j=(0,st.useCallback)(te=>{if(n==="text"){let Me="";te==="script"?Me=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:te==="planning"?Me=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:te==="prompt"?Me=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:te==="storyboard"&&(Me=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),N({prompt:Me,selectedTool:"text-to-text"})}},[n,N]),K=(0,st.useCallback)(te=>{let Me=Cm(te);if(!Me){ne.warning(D("picker.needPath"));return}let qe=wm(te.name,te.type)??n;if(qe!=="image"&&qe!=="video"&&qe!=="audio"){ne.warning(D("picker.unsupported"));return}N(As({realPath:Me,name:te.name,materialType:qe,mime:te.type,size:te.size}))},[n,D,N]),W=(0,st.useCallback)(te=>{te.preventDefault(),te.stopPropagation(),b(!0)},[]),$=(0,st.useCallback)(te=>{te.preventDefault(),te.stopPropagation(),b(!1)},[]),G=(0,st.useCallback)(te=>{te.preventDefault(),te.stopPropagation(),b(!1);let Me=te.dataTransfer.files?.[0];Me&&K(Me)},[K]),Z=(0,st.useCallback)(()=>{O&&navigator.clipboard.writeText(O).catch(()=>{})},[O]),ue=(0,st.useCallback)(()=>{if(!O)return;let te=O.split(`

`).filter(Me=>Me.trim().length>0);te.length>1&&N({content:te.join(`
---
`)})},[O,N]);(0,st.useEffect)(()=>{a||(x(!1),y(!1))},[a]);let ce=J5(a,m,f),ae=r==="offline"||o.isMissing===!0,ie=Fo(n,p,s),we=ae?null:e_(f,r,!!ie),Ie=n==="video"?"video":n==="audio"?"audio":"square";return(0,Te.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:R},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[(w||a)&&(0,Te.jsx)(i_,{materialType:n,selected:a,onOpenResourcePicker:()=>{z.importLocalFiles()},onStartTextEdit:()=>y(!0),onCopyText:Z,onSplitText:ue}),(0,Te.jsx)(Qn,{side:"left",nodeHovered:w}),(0,Te.jsx)(Ns,{label:i,materialType:n,onLabelChange:te=>N({label:te}),trailing:(0,Te.jsx)(xm,{executionStatus:f,status:r})}),(0,Te.jsxs)("div",{className:`wf-material-node__card ${g?"wf-material-node__card--dragover":""}`,style:{width:R,height:L},onDragOver:W,onDragLeave:$,onDrop:G,children:[a&&(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Te.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,Te.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:O||S?(0,Te.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${S?" nodrag":""}`,readOnly:!S,value:O,placeholder:D("node.textPlaceholder"),autoFocus:S,onMouseDown:te=>{S||te.preventDefault()},onDoubleClick:te=>{te.stopPropagation(),y(!0),te.currentTarget.focus()},onFocus:()=>y(!0),onBlur:()=>y(!1),onChange:te=>N({content:te.target.value,status:te.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,Te.jsx)(bm,{materialType:"text",onStartEdit:()=>y(!0),onApplyPreset:j})}),n!=="text"&&ae&&(0,Te.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,Te.jsx)(Yi,{size:22,className:"wf-media-offline__icon"}),(0,Te.jsx)("div",{className:"wf-media-offline__title",children:D("node.offline")}),(0,Te.jsx)("div",{className:"wf-media-offline__hint",children:D("node.offlineHint")}),(0,Te.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{z.relinkLocalFile(n)},children:D("node.relink")})]}),n!=="text"&&!ae&&(we?(0,Te.jsx)("div",{className:"wf-material-node__media",children:(0,Te.jsx)(Ju,{status:we,loadingAspectRatio:Ie,errorMessage:c??d,taskId:o.taskId,onRetry:M,children:ie?(0,Te.jsx)(n_,{materialType:n,mediaAssets:p,mediaUrl:s,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:A}):(0,Te.jsx)(bm,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:j})})}):(0,Te.jsx)("div",{className:"wf-material-node__media",children:(0,Te.jsx)(bm,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:j})})),n==="text"&&(d||c)&&(0,Te.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ce&&(0,Te.jsx)(u_,{onClose:()=>x(!0),children:(0,Te.jsx)(y_,{nodeId:e,nodeData:o,catalog:h,onUpdateNodeData:N,onGenerate:M,execBusy:T,onOpenResourcePicker:()=>z.openPicker("canvas")})}),(0,Te.jsx)(Qn,{side:"right",nodeHovered:w,options:F,onSelect:I}),(0,Te.jsx)(Sm,{open:z.open,nodeId:e,initialTab:z.initialTab,onCancel:z.closePicker,onCommit:z.commit})]})},Z_=(0,st.memo)(H9);var W_={type:"material",component:Z_,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Zu("text",{status:"empty",nodeWidth:$n("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var Ds=E(Q(),1);var P0=50;function nl(e){return JSON.parse(JSON.stringify(e))}var F9={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},la=Ss((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,nl(o)].slice(-P0),redoStack:[]}};return{document:F9,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:nl(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:nl(i),undoStack:l,redoStack:[...r,nl(n)].slice(-P0)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:nl(i),redoStack:l,undoStack:[...r,nl(n)].slice(-P0)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),l=i.rows[o];if(!l)return;let s=a(i),u=[...i.rows],d={...l,cells:[...l.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(l=>l.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((l,s)=>s!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),l=a(i),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,s],rows:u},...l})},updateColumn:(o,n,r)=>{let{document:i}=t(),l=i.columns[o];if(!l)return;let s=a(i),u=[...i.columns];u[o]={...l,title:n,type:r},e({document:{...i,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((s,u)=>u!==o),l=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:l},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),l=[...n.columns];l[o]={...r,visible:!r.visible},e({document:{...n,columns:l},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let l=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:d},...l})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:nl(o),undoStack:[],redoStack:[]})}});var ge=E(X(),1),K_=380,U9=280,$_=(0,Ds.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=la(),[i,l]=(0,Ds.useState)(!1),{zoom:s}=yo(),u=(0,Ds.useMemo)(()=>Lo(s),[s]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,ge.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:K_},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(i||a)&&(0,ge.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,ge.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,ge.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:h=>{h.stopPropagation(),r()},children:[(0,ge.jsx)(Ze,{size:14}),(0,ge.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,ge.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:h=>{h.stopPropagation(),n()},children:[(0,ge.jsx)(sn,{size:13}),(0,ge.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,ge.jsx)(Qn,{side:"left",nodeHovered:i}),(0,ge.jsx)(Ns,{label:c,materialType:"table"}),(0,ge.jsxs)("div",{className:"wf-material-node__card",style:{width:K_,height:U9},onDoubleClick:()=>n(),children:[a&&(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ge.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,ge.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,ge.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ge.jsx)(Qa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,ge.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,ge.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:h=>h.stopPropagation(),children:[(0,ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,ge.jsx)(Ze,{size:14,className:"wf-node-empty__pill-icon"}),(0,ge.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,ge.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,ge.jsx)(sn,{size:13,className:"wf-node-empty__pill-icon"}),(0,ge.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,ge.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,ge.jsx)(Lu,{size:14}),(0,ge.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,ge.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,ge.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((h,w)=>{let v=h.cells[0],g=typeof v=="string"&&v?v:typeof v=="number"?String(v):Array.isArray(v)&&v.length>0?`\u{1F4CE} \u9644\u4EF6 (${v.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,ge.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,ge.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:g}),(0,ge.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",w+1]})]},w)}),d.length>3&&(0,ge.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,ge.jsx)(Qn,{side:"right",nodeHovered:i})]})});var Q_={type:"table",component:$_,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var ai=E(Q(),1);var za=E(Q(),1);var oo=E(X(),1),q9=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:l,nodeHeight:s,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:h,leftHandleOptions:w,onLeftHandleSelect:v,onFileDrop:g,onFilesDrop:b,onDragOver:m,onDragLeave:x,onDrop:S,onMouseEnter:y,onMouseLeave:C,onCardClick:k,onCardDoubleClick:_,renderFloatingPill:T,renderHeader:R,children:B,renderConfigPanel:U})=>{let[L,N]=(0,za.useState)(!1),[A,M]=(0,za.useState)(!1),{zoom:D}=yo(),H=(0,za.useMemo)(()=>Lo(D),[D]),z=(0,za.useMemo)(()=>({inverseScale:H,hovered:L,selected:t}),[H,L,t]),F=(0,za.useCallback)(Z=>{N(!0),y?.(Z)},[y]),I=(0,za.useCallback)(Z=>{N(!1),C?.(Z)},[C]),O=(0,za.useCallback)(Z=>{Z.preventDefault(),Z.stopPropagation(),M(!0),m?.(Z)},[m]),j=(0,za.useCallback)(Z=>{Z.preventDefault(),Z.stopPropagation(),M(!1),x?.(Z)},[x]),K=(0,za.useCallback)(Z=>{Z.preventDefault(),Z.stopPropagation(),M(!1);let ue=Z.dataTransfer.files;ue&&ue.length>0&&(b?.(ue),ue[0]&&g?.(ue[0])),S?.(Z)},[S,g,b]),W=typeof T=="function"?T(z):T,$=typeof R=="function"?R(z):R,G=typeof U=="function"?U(z):U;return(0,oo.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:l,...n},onMouseEnter:F,onMouseLeave:I,"data-node-id":e,children:[W,u&&(0,oo.jsx)(Qn,{side:"left",nodeHovered:L,variant:f,options:w,onSelect:v}),$,(0,oo.jsxs)("div",{className:`wf-material-node__card ${A?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:l,height:s,...r},"data-node-type":i,onClick:k,onDoubleClick:_,onDragOver:O,onDragLeave:j,onDrop:K,children:[t&&(0,oo.jsxs)(oo.Fragment,{children:[(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,oo.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),B]}),G,d&&(0,oo.jsx)(Qn,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:h})]})},J_=(0,za.memo)(q9);var rl=E(Q(),1);var or=E(X(),1),V9=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=yo(),l=(0,rl.useMemo)(()=>Lo(i),[i]),s=a??l,u=d=>d?rl.default.isValidElement(d)?d:(0,or.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,or.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,or.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,or.jsxs)(rl.default.Fragment,{children:[f>0&&(0,or.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,or.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,or.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},eI=(0,rl.memo)(V9);var Lm=E(Q(),1);var Pa=E(X(),1),G9=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:l="",style:s})=>{let u=pe(),d=(f,c,p)=>f?Lm.default.isValidElement(f)?f:(0,Pa.jsx)(f,{size:c,className:p}):null;return(0,Pa.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${l}`.trim(),style:s,children:[(e||t)&&(0,Pa.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,Pa.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,Pa.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,Pa.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,Pa.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,Pa.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,Pa.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,Pa.jsxs)("button",{type:"button",className:p,onClick:h=>{h.stopPropagation(),f.onClick?.(h)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,Pa.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,Pa.jsx)("span",{children:f.label})]},f.key)})}),i]})},tI=(0,Lm.memo)(G9);var il=E(Q(),1);function aI(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function oI(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function nI(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function rI(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function iI(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var Qe=E(X(),1),X9=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:i,onDownload:l})=>{let s=pe(),[u,d]=(0,il.useState)(!1),f=(0,il.useCallback)(h=>{h.stopPropagation(),d(w=>!w)},[]),c=(0,il.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,Qe.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,Qe.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,Qe.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":s("clip.openEditorTitle"),children:[t?(0,Qe.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,Qe.jsx)("span",{className:"wf-vc-result__fallback",children:(0,Qe.jsx)(Bt,{size:36,strokeWidth:1.5})}),(0,Qe.jsx)("span",{className:"wf-vc-result__play",children:(0,Qe.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,Qe.jsx)(Ea,{size:22,fill:"currentColor"})})})]});return(0,Qe.jsxs)("div",{className:"wf-vc-result",children:[p,(0,Qe.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,Qe.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Qe.jsx)("dt",{children:s("clip.duration")}),(0,Qe.jsx)("dd",{className:"wf-vc-result__mono",children:nI(a)})]}),(0,Qe.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Qe.jsx)("dt",{children:s("clip.resolution")}),(0,Qe.jsx)("dd",{className:"wf-vc-result__mono",children:rI(o,n)})]})]}),(0,Qe.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,Qe.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:h=>{h.stopPropagation(),i?.()},children:[(0,Qe.jsx)(Vi,{size:14}),(0,Qe.jsx)("span",{children:s("clip.reEdit")})]}),(0,Qe.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:h=>{h.stopPropagation(),l?.()},disabled:!e,title:e?s("clip.downloadTitle"):void 0,children:[(0,Qe.jsx)(Hi,{size:14}),(0,Qe.jsx)("span",{children:s("clip.download")})]})]})]})},lI=(0,il.memo)(X9);var sI="omnimux-clip-open",O0="omnimux-clip-save",B0="omnimux-clip-close",H0="omnimux-clip-progress";function dI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function uI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function cI(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var ba=E(X(),1),fI=350,j9=440;function pI(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function no(e){return typeof e=="string"&&e.trim()?e:void 0}function F0(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function Y9(e){return no(e.mediaUrl)||no(e.outputVideoUrl)||no(e.path)||no(e.url)||no(e.real_path)||no(e.filePath)}function Z9(e){let{nodes:t,edges:a}=se.getState(),o=[],n=[],r=[],i=[];for(let l of a){if(l.target!==e)continue;let s=t.find(h=>h.id===l.source);if(!s)continue;let u=pI(s.data)?s.data:{},d=no(u.materialType)||(s.type==="material"?void 0:s.type),f=no(u.label)||no(u.title)||s.id,c=Y9(u)||"",p=F0(u.duration)??F0(u.outputDurationMs)??F0(u.durationMs);if(d==="video"||s.type==="video_composition"){let h=c||no(u.outputVideoUrl)||"";h&&o.push({path:h,name:f,durationMs:p,url:h})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let h=no(u.content)||no(u.generatedContent)||no(u.prompt);h&&i.push({text:h,startTimeMs:i.reduce((w,v)=>w+v.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function W9(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function K9(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var $9=({id:e,data:t,selected:a})=>{let o=pI(t)?t:{},n=se(w=>w.setNodes),r=se(w=>w.setEdges),i=pe(),l=o.status??"idle",s=!!o.outputVideoUrl,u=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||i("node.type.video_composition"),f=oI(l,s),c=(0,ai.useCallback)(w=>{n(v=>v.map(g=>g.id===e?{...g,data:{...g.data,...w}}:g))},[e,n]);(0,ai.useEffect)(()=>{if(typeof window>"u")return;let w=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!dI(m)||m.nodeId&&m.nodeId!==e)return;let x=m.output;if(c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:x?.videoPath,thumbnailUrl:x?.thumbnailPath,outputThumbnailUrl:x?.thumbnailPath,outputDurationMs:x?.durationMs,outputWidth:x?.width,outputHeight:x?.height,status:x?.videoPath?"completed":"idle",renderProgress:x?.videoPath?100:void 0,errorMessage:void 0}),x?.videoPath&&m.createDownstreamNode){let y=se.getState().nodes,k=y.find(T=>T.id===e)?.position||{x:0,y:0};if(!y.some(T=>T.type==="material"&&T.data?.realPath===x.videoPath)){let T=`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,R={x:k.x+fI+80,y:k.y},B={id:T,type:"material",position:R,selected:!0,data:{materialType:"video",label:`${o.title||o.label||i("node.type.video_composition")}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:x.videoPath,mediaUrl:x.videoPath,thumbnailUrl:x.thumbnailPath,duration:x.durationMs?Math.round(x.durationMs/1e3):void 0,size:{width:x.width||1920,height:x.height||1080}}},L={id:`edge_${e}_${T}`,source:e,target:T,sourceHandle:"output",targetHandle:"input"};n(N=>[...N.map(A=>({...A,selected:!1})),B]),r(N=>[...N,L]),ne.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03")}}},v=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!cI(m)||m.nodeId&&m.nodeId!==e)return;let x=m.status??"rendering";c({status:x,renderProgress:m.renderProgress})},g=b=>{let m=b instanceof CustomEvent?b.detail:void 0;uI(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:s?"completed":"idle"}))};return window.addEventListener(O0,w),window.addEventListener(H0,v),window.addEventListener(B0,g),()=>{window.removeEventListener(O0,w),window.removeEventListener(H0,v),window.removeEventListener(B0,g)}},[s,e,o.projectId,o.status,c]);let p=(0,ai.useCallback)(()=>{if(typeof window>"u")return;let w=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,v={source:"canvas",nodeId:e,nodeTitle:d,projectId:w,draftSchema:o.schema,upstreamInputs:Z9(e)};c({status:"editing",projectId:w}),window.dispatchEvent(new CustomEvent(sI,{detail:v,bubbles:!0})),window.setTimeout(()=>{W9()||ne.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,d,c]),h=(0,ai.useCallback)(()=>{let w=o.outputVideoUrl;if(!w)return;let v=document.createElement("a");v.href=w,v.download=`${iI(d)}.mp4`,v.rel="noopener",document.body.appendChild(v),v.click(),v.remove()},[o.outputVideoUrl,d]);return(0,ba.jsxs)(J_,{id:e,selected:a,nodeWidth:fI,nodeHeight:j9,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:w=>{w.stopPropagation(),p()},renderFloatingPill:({hovered:w,selected:v})=>{if(!w&&!v||!s)return null;let g=[{key:"download_video",label:i("clip.download"),icon:Hi,onClick:h,title:i("clip.downloadTitle")}];return(0,ba.jsx)(eI,{actions:g})},renderHeader:()=>(0,ba.jsx)(Ns,{label:d,materialType:"video_composition",customIcon:(0,ba.jsx)(Bt,{size:14}),onLabelChange:w=>c({label:w,title:w}),trailing:(0,ba.jsx)(xm,{status:aI(l)})}),children:[f==="result"&&(0,ba.jsx)(lI,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:u,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:p,onDownload:h}),f==="rendering"&&(0,ba.jsx)("div",{className:"wf-material-node__media",children:(0,ba.jsx)(Ju,{status:"generating",loadingAspectRatio:"video",children:null})}),f==="error"&&(0,ba.jsx)("div",{className:"wf-material-node__media",children:(0,ba.jsx)(Ju,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:p,children:null})}),f==="launcher"&&(0,ba.jsx)(tI,{mainIcon:(0,ba.jsx)(Bt,{size:36,strokeWidth:1.5}),secondaryIcon:(0,ba.jsx)($t,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:Vi,onClick:()=>p()}]})]})},mI={type:"video_composition",component:(0,ai.memo)($9),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>K9(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var CI=E(Q(),1),SI=E(Dt(),1);var km=E(Q(),1),gI=E(Dt(),1);var Pe=E(X(),1),U0=e=>e==="text"?(0,Pe.jsx)(Wn,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Pe.jsx)(Tu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Pe.jsx)(Bu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Pe.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),hI=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=la(),[i,l]=(0,km.useState)(null);(0,km.useEffect)(()=>{if(o===null){l(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,Pe.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,Pe.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Pe.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,Pe.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Pe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Pe.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Pe.jsx)(Nu,{size:14})}),U0(u.type),(0,Pe.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,Pe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Pe.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,Pe.jsx)(Su,{size:15}):(0,Pe.jsx)(Cu,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Pe.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,h=72,g=window.innerHeight-c.bottom<h+10?c.top-h-4:c.bottom+4,b=Math.max(8,c.right-p);l({top:g,left:b}),n(d)}},children:(0,Pe.jsx)(Yr,{size:15})})]})]},u.id))}),(0,Pe.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Pe.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Pe.jsx)(Ze,{size:14}),(0,Pe.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&i&&typeof document<"u"&&(0,gI.createPortal)((0,Pe.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,Pe.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,Pe.jsx)(dn,{size:13}),(0,Pe.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Pe.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,Pe.jsx)(Ja,{size:13}),(0,Pe.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var aa=E(X(),1),Q9=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],xI=()=>{let{document:e,setFilterConditions:t}=la(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((l,s)=>({value:s,label:l.title||`\u5217 ${s+1}`})),n=(l,s)=>{let u=a.map((d,f)=>f===l?{...d,...s}:d);t(u)},r=()=>{let l=[...a,{columnIndex:0,op:"equals",value:""}];t(l)},i=l=>{let s=a.filter((u,d)=>d!==l);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,aa.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:l=>l.stopPropagation(),children:[(0,aa.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,aa.jsxs)("div",{className:"wf-filter-body",children:[a.map((l,s)=>(0,aa.jsxs)("div",{className:"wf-filter-row",children:[(0,aa.jsx)("div",{style:{width:130,flexShrink:0},children:(0,aa.jsx)(Aa,{value:l.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,aa.jsx)("div",{style:{width:110,flexShrink:0},children:(0,aa.jsx)(Aa,{value:l.op,options:Q9,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,aa.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:l.value??"",disabled:l.op==="empty"||l.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,aa.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(s),children:(0,aa.jsx)(Jt,{size:15})})]},s)),(0,aa.jsx)("div",{style:{paddingTop:4},children:(0,aa.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,aa.jsx)(Ze,{size:14}),(0,aa.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var nr=E(X(),1),J9=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],bI=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=la(),o=e.rowHeight||"low";return(0,nr.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,nr.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,nr.jsx)("div",{style:{padding:"6px"},children:J9.map(n=>{let r=o===n.id;return(0,nr.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,nr.jsx)("span",{children:n.label}),r&&(0,nr.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,nr.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var De=E(X(),1),wI=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:l,closeStage:s}=la(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,De.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,De.jsx)("div",{className:"wf-stage-topbar__left",children:(0,De.jsxs)("div",{className:"wf-stage-title-group",children:[(0,De.jsx)(Qa,{size:16,className:"wf-stage-title-icon"}),(0,De.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,De.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,De.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,De.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,De.jsx)(qu,{size:15}),(0,De.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,De.jsx)(hI,{})]}),(0,De.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,De.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,De.jsx)(Zr,{size:15}),(0,De.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,De.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,De.jsx)(xI,{})]}),(0,De.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,De.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,De.jsx)($r,{size:15}),(0,De.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,De.jsx)(bI,{})]}),(0,De.jsx)("div",{className:"wf-stage-divider"}),(0,De.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,De.jsx)(ji,{size:16})}),(0,De.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,De.jsx)(Gi,{size:16})}),(0,De.jsx)("div",{className:"wf-stage-divider"}),(0,De.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,De.jsx)(Jt,{size:16})})]})]})};var ke=E(X(),1),vI=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=la(),n=e.columns.filter(l=>l.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,ke.jsx)("div",{className:"wf-grid-container",children:(0,ke.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,ke.jsxs)("table",{className:"wf-grid-table",children:[(0,ke.jsxs)("colgroup",{children:[(0,ke.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(l=>(0,ke.jsx)("col",{style:{width:l.width||220,minWidth:120}},l.id)),(0,ke.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,ke.jsx)("col",{style:{width:"auto"}})]}),(0,ke.jsx)("thead",{children:(0,ke.jsxs)("tr",{children:[(0,ke.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,ke.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(l=>(0,ke.jsx)("th",{className:"wf-grid-th",children:(0,ke.jsxs)("div",{className:"wf-grid-th-content",children:[(0,ke.jsx)("span",{className:"wf-grid-th-icon",children:U0(l.type)}),(0,ke.jsx)("span",{className:"wf-grid-th-title",children:l.title})]})},l.id)),(0,ke.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,ke.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,ke.jsx)(Ze,{size:15})})}),(0,ke.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,ke.jsx)("tbody",{children:e.rows.map((l,s)=>(0,ke.jsxs)("tr",{className:i,children:[(0,ke.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,ke.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=l.cells[d];return(0,ke.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let h=Array.isArray(f)?f:[];return(0,ke.jsxs)("div",{className:"wf-grid-cell-attachment",children:[h.map((w,v)=>(0,ke.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},v)),h.length===0&&(0,ke.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,ke.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:h=>t(s,d,h.target.value)})})()},u.id)}),(0,ke.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,ke.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,ke.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,ke.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,ke.jsx)(Ze,{size:14}),(0,ke.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var ll=E(Q(),1);var Oa=E(X(),1),eP=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],yI=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=la(),[n,r]=(0,ll.useState)(e.initialTitle),[i,l]=(0,ll.useState)(e.initialType),s=(0,ll.useRef)(null);(0,ll.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),l(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,Oa.jsx)(Wi,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,Oa.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,Oa.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,Oa.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,Oa.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,Oa.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,Oa.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,Oa.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,Oa.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,Oa.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,Oa.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,Oa.jsx)(Aa,{value:i,options:eP,onChange:d=>l(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var Rs=E(X(),1),LI=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=la();return(0,CI.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,SI.createPortal)((0,Rs.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,Rs.jsx)(wI,{}),(0,Rs.jsx)(vI,{}),(0,Rs.jsx)(yI,{})]}),document.body)};var gt=E(X(),1),q0=class extends Xe.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,gt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,gt.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,gt.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,gt.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};gm(W_);gm(Q_);gm(mI);var tP=W5(),aP={default:w0,animated:w0},kI={maxZoom:1},oP={x:0,y:0,zoom:1},nP=[1,2],rP=96,iP=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:i})=>{let{screenToFlowPosition:l,fitView:s,zoomTo:u,setCenter:d}=Ka(),{nodes:f,edges:c,onNodesChange:p,onEdgesChange:h}=Ak(),w=se(ee=>ee.applyCanvasInputMutation),v=se(ee=>ee.setNodes),g=se(ee=>ee.setSelectedElement),b=se(ee=>ee.pushHistory),m=se(ee=>ee.undo),x=se(ee=>ee.redo),S=Dk(),y=Rk(),[C,k]=(0,Xe.useState)(null),[_,T]=(0,Xe.useState)(!1),[R,B]=(0,Xe.useState)(!1),[U,L]=(0,Xe.useState)(!1),[N,A]=(0,Xe.useState)(!1),[M,D]=(0,Xe.useState)(void 0),[H,z]=(0,Xe.useState)("select"),F=(0,Xe.useRef)(0),I=(0,Xe.useMemo)(()=>f.some(ee=>ee.selected),[f]),O=j5(v,g),j=pe(),K=j("menu.generateFromNode"),{menuState:W,onConnectStart:$,onConnectEnd:G,onMenuSelect:Z,onMenuClose:ue}=q5({onReject:k});(0,Xe.useEffect)(()=>{b()},[f,c,b]);let ce=(0,Xe.useMemo)(()=>e?f.map(ee=>({...ee,data:{...ee.data,__catalog:e}})):f,[f,e]),ae=(0,Xe.useCallback)(ee=>{let et=w({addEdges:[ee]});if(et.status==="rejected"){let Mt=j(dm(et.reasonCode));k(Mt),ne.warning(Mt)}else k(null)},[w,j]),ie=(0,Xe.useCallback)(ee=>{let et=se.getState();return D5(ee,et.nodes,et.edges)},[]),we=(0,Xe.useCallback)((ee,et)=>{let Mt=F.current,wt=et??{x:120+Mt%3*420,y:120+Math.floor(Mt/3)*360};if(ee==="import_asset"){let ro=F5("image",wt);if(ro.nodes.length===0)return;F.current+=1,v(Wo=>cm(Wo,ro.nodes));return}if(ee==="table"||ee==="video_composition"){let ro=K5(ee,wt,`node_${ee}_${Date.now()}`);if(!ro)return;F.current+=1,v(Wo=>cm(Wo,[{...ro,selected:!0}]));return}let rr=ei(ee,wt);rr.nodes.length!==0&&(F.current+=1,v(ro=>cm(ro,rr.nodes)))},[v]),Ie=(0,Xe.useCallback)(ee=>{let et=ee.nodes.map(wt=>wt.id),Mt=ee.edges.map(wt=>wt.id);et.length===0&&Mt.length===0||w({removeNodeIds:et,removeEdgeIds:Mt})},[w]),{menu:Oe,handleNodeContextMenu:te,handlePaneContextMenu:Me,handleSelectionContextMenu:qe,closeMenu:ht,handleMenuAction:va,handleAddNodeFromMenu:Zo}=Y5({screenToFlowPosition:l,setNodes:v,copySelectedNodes:O.copySelectedNodes,pasteNodes:O.pasteNodes,duplicateSelectedNodes:O.duplicateSelectedNodes,deleteSelectedNodes:O.deleteSelectedNodes,selectAllNodes:O.selectAllNodes,clearSelection:O.clearSelection,undo:m,redo:x,onExecuteNodeIds:t,onAddNode:we}),hn=(0,Xe.useCallback)(ee=>{let et=ee.real_path||ee.files?.[0]?.path||"",Mt=ee.type==="video"?"video":ee.type==="image"?"image":"text",wt=F.current++,rr={x:200+wt%4*50,y:200+wt%4*40},Wo=ei(Mt,rr,{title:ee.name,content:et,previewUrl:ee.previewUrl,status:"ready"}).nodes[0];Wo&&(w({addNodes:[Wo]}),g("node",Wo.id),ne.success(j("toolbar.assets")+": "+ee.name))},[w,g,j]);A5({onCopy:O.copySelectedNodes,onPaste:()=>O.pasteNodes(),onSelectAll:O.selectAllNodes,onDeleteSelected:O.deleteSelectedNodes,onClearSelection:O.clearSelection,onDuplicate:O.duplicateSelectedNodes,onUndo:m,onRedo:x,hasSelection:I,onToggleAssets:()=>B(ee=>!ee),onToggleShortcuts:()=>L(ee=>!ee),onToggleMinimap:()=>T(ee=>!ee),onToggleAddMenu:()=>A(ee=>!ee),onSetPointerMode:ee=>z(ee),onFitView:()=>s(kI),onResetZoom:()=>u(1),onCategoryKey:ee=>{B(!0),D(ee)}});let xn=(0,Xe.useCallback)((ee,et)=>{g("node",et.id)},[g]),Ba=(0,Xe.useCallback)(()=>{g("none",null),ht()},[g,ht]),ko=(0,Xe.useCallback)(()=>{v(ee=>ee.map((et,Mt)=>({...et,position:{x:120+Mt%3*440,y:120+Math.floor(Mt/3)*360}})))},[v]),_o=(0,Xe.useCallback)(ee=>{ee.preventDefault(),ee.dataTransfer.dropEffect="copy"},[]),bn=(0,Xe.useCallback)(ee=>{ee.preventDefault();try{let et=ee.dataTransfer.getData("application/json");if(!et)return;let Mt=JSON.parse(et);if(Mt.type==="omnimux-asset"&&Mt.asset){let wt=Mt.asset,rr=l({x:ee.clientX,y:ee.clientY}),ro=wt.type==="video"?"video":wt.type==="image"?"image":"text",Bs=ei(ro,rr,{title:wt.name,content:wt.real_path||wt.prompt||"",previewUrl:wt.previewUrl,status:"ready"}).nodes[0];Bs&&(w({addNodes:[Bs]}),g("node",Bs.id),ne.success(`\u5DF2\u6302\u8F7D\u7D20\u6750\u5230\u753B\u5E03: ${wt.name}`))}}catch(et){console.error("Failed to parse dropped asset",et)}},[l,w,g]);return(0,gt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,gt.jsx)(ZL,{nodes:ce,edges:c,onNodesChange:p,onEdgesChange:h,onConnect:ae,isValidConnection:ie,onConnectStart:$,onConnectEnd:G,onNodeClick:xn,onPaneClick:Ba,onNodeContextMenu:te,onPaneContextMenu:Me,onDragOver:_o,onDrop:bn,onSelectionContextMenu:qe,onDelete:Ie,nodeTypes:tP,edgeTypes:aP,fitView:!0,fitViewOptions:kI,defaultViewport:oP,minZoom:_0.minZoom,maxZoom:_0.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:H==="pan"?!0:nP,panOnScroll:!0,panOnScrollMode:Do.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:H==="select",selectionMode:Vn.Partial,defaultEdgeOptions:Vp,connectOnClick:!1,connectionRadius:rP,onlyRenderVisibleElements:!0,children:(0,gt.jsx)(QL,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:rn.Dots})}),(0,gt.jsx)($k,{isMinimapOpen:_,onToggleMinimap:()=>T(ee=>!ee),onAlignGrid:ko,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:i}),_&&(0,gt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,gt.jsx)(tk,{pannable:!0,zoomable:!0})}),(0,gt.jsx)(Kk,{onAddNode:we,onUndo:m,onRedo:x,canUndo:S,canRedo:y,pointerMode:H,onPointerModeChange:z,onOpenAssets:()=>B(ee=>!ee),onOpenHelp:()=>L(ee=>!ee),isAssetsOpen:R,isAddMenuOpen:N,onToggleAddMenu:()=>A(ee=>!ee)}),R&&(0,gt.jsx)(q0,{onClose:()=>B(!1),children:(0,gt.jsx)(L5,{isOpen:R,onClose:()=>B(!1),onInsertAsset:hn,nodes:ce,onFocusNode:ee=>{Z5({nodes:ce,nodeId:ee,setCenter:d,setNodes:v})}})}),(0,gt.jsx)(k5,{isOpen:U,onClose:()=>L(!1)}),(0,gt.jsx)(E5,{x:Oe.x,y:Oe.y,visible:Oe.visible,context:Oe.context,onClose:ht,onAction:va,onAddNode:Zo,canUndo:S,canRedo:y,hasClipboard:O.hasClipboard,hasSelection:I}),(0,gt.jsx)(sm,{visible:W.visible,x:W.x,y:W.y,title:K,options:W.options,onSelect:Z,onClose:ue}),(0,gt.jsx)(LI,{}),C&&(0,gt.jsx)("div",{className:"wf-rejected-toast",children:C})]})},lP=e=>(0,gt.jsx)(u0,{children:(0,gt.jsx)(iP,{...e})}),_I=lP;var It=E(Q(),1);var II=new Set(["pending","running","paused"]),sP=new Set(["completed","error","cancelled"]);function zs(e,t){let a=se.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function MI(e,t){let a=(0,It.useRef)(null),o=(0,It.useRef)(e);o.current=e;let n=(0,It.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,It.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,It.useCallback)((v,g)=>{Ke.getState().setExecution({status:v,error:g,progress:{...Ke.getState().progress,percentage:v==="completed"?100:Ke.getState().progress.percentage}})},[]),l=(0,It.useCallback)((v,g)=>{let b;try{b=JSON.parse(g)}catch{return}let m=Ke.getState();switch(v){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:b.totalNodes??0,completed:0,running:0,pending:b.totalNodes??0,percentage:0}});break}case"node_start":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),zs(b.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:b.progress??m.progress.percentage}});let x=b.output??{},S={executionStatus:"completed",executionError:void 0};if(x.text&&(S.generatedContent=x.text),x.mediaAssets&&x.mediaAssets.length>0){let y=x.mediaAssets[0];S.mediaAssets=x.mediaAssets,y.type==="image"&&(S.mediaUrl=y.url),S.taskId=`exec-${b.executionId??""}`}zs(b.nodeId,S);break}case"node_error":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),zs(b.nodeId,{executionStatus:"error",executionError:b.error??$i("error.nodeExecutionFailed")});break}case"node_skipped":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"skipped"),zs(b.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",b.error??$i("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),s=(0,It.useCallback)(v=>{r();let g=o.current;if(!g)return;let b=new EventSource(Da.executionEvents(encodeURIComponent(g),encodeURIComponent(v)));a.current=b;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let x of m)b.addEventListener(x,S=>{l(x,S.data)});b.onerror=()=>{let x=Ke.getState().status;sP.has(x)&&r()}},[r,l]),u=(0,It.useCallback)(v=>{let g=Ke.getState();g.setExecution({executionId:v.id,status:v.status,error:v.error,progress:{total:v.progress.total,completed:v.progress.completed,running:v.progress.running,pending:v.progress.pending,percentage:v.progress.percentage}});for(let[b,m]of Object.entries(v.nodeStates??{})){g.setNodeStatus(b,m.status);let x={executionStatus:m.status};m.status==="error"&&m.error&&(x.executionError=m.error);let S=v.nodeOutputs?.[b];S&&(S.text&&(x.generatedContent=S.text),S.mediaAssets&&S.mediaAssets.length>0&&(x.mediaAssets=S.mediaAssets,S.mediaAssets[0]&&S.mediaAssets[0].type==="image"&&(x.mediaUrl=S.mediaAssets[0].url))),zs(b,x)}},[]),d=(0,It.useCallback)(async(v={})=>{let g=o.current;if(!g)return;if(r(),Ke.getState().resetExecution(),Ke.getState().setExecution({status:"pending"}),v.mode==="single"&&v.nodeIds&&v.nodeIds[0]&&(Ke.getState().setNodeStatus(v.nodeIds[0],"pending"),zs(v.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let b=await U_(g,{mode:v.mode??"full",nodeIds:v.nodeIds});if(!b.ok||!b.body.execution){Ke.getState().setExecution({status:"error",error:b.body.message??$i("error.createExecutionFailed")});return}Ke.getState().setExecution({executionId:b.body.execution.id}),s(b.body.execution.id)},[r,s]),f=(0,It.useCallback)(async v=>{let g=o.current,{executionId:b}=Ke.getState();if(!g||!b)return;let m=await X_(g,b,v);!m.ok&&m.body.message&&Ke.getState().setExecution({error:m.body.message})},[]),c=(0,It.useCallback)(()=>f("pause"),[f]),p=(0,It.useCallback)(()=>f("resume"),[f]),h=(0,It.useCallback)(()=>f("cancel"),[f]),w=(0,It.useCallback)(()=>{r(),Ke.getState().resetExecution()},[r]);return(0,It.useEffect)(()=>{if(!e)return;let v=!1;return(async()=>{try{let g=await q_(e);if(v||!g.ok)return;let b=(g.body.executions??[]).find(x=>II.has(x.status));if(!b)return;let m=await V_(e,b.id);if(v||!m.ok||!m.body.execution)return;u(m.body.execution),II.has(m.body.execution.status)&&s(b.id)}catch{}})(),()=>{v=!0}},[e,u,s]),(0,It.useEffect)(()=>(Ke.getState().setStartNodeExecution(g=>{d({mode:"single",nodeIds:[g]})}),()=>{Ke.getState().setStartNodeExecution(null)}),[d]),(0,It.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:h,reset:w}}var sl=E(Q(),1);function NI(e={}){let t=e.workspaceId,[a,o]=(0,sl.useState)({phase:"loading"}),[n,r]=(0,sl.useState)(()=>tc()),i=se(d=>d.hydrateGraph),l=se(d=>d.resetStore),s=se(d=>d.nodes.length),u=(0,sl.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,sl.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=se.getState(),p=L_(c.nodes);if(p.length===0)return;let h=await G_(p);if(d||!h.ok||!Array.isArray(h.body.items))return;let w=S_(c.nodes,h.body.items);!w.some((g,b)=>g!==c.nodes[b])||d||c.setNodes(w)}return(async()=>{try{if(O_().then(h=>{!d&&h.ok&&(r(h.body),x_(h.body))}),!t)return;let c=await oc(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await B_("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??$i("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),l()}},[t,i,l]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var Je=E(Q(),1);function EI(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}function ic(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function TI(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function V0(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)V0(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];vm(o)?delete t[a]:o&&typeof o=="object"&&V0(o)}}function dP(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=tr(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=TI(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(vm(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=TI(o);return n?(vm(n.url)&&(typeof n.path=="string"&&n.path?n.url=tr(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}V0(e)}function G0(e){return e.map(t=>{let a=t,o=ic(a.data);delete o.__catalog,dP(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=ic(a.style)),n})}function uP(e){let t=e,a=ic(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function X0(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=ic(a.data)),a.style&&typeof a.style=="object"&&(o.style=ic(a.style)),o})}function Yo(e,t){return JSON.stringify({nodes:G0(e).map(uP),edges:X0(t)})}var cP=1e3,fP=2500,pP=3e3;function Ps(){let{nodes:e,edges:t}=se.getState(),a=g0(e,t);return{nodes:a.nodes,edges:a.edges}}function AI(e,t={}){let a=t.enabled!==!1,[o,n]=(0,Je.useState)("idle"),[r,i]=(0,Je.useState)(!1),l=(0,Je.useRef)(e),s=(0,Je.useRef)(0),u=(0,Je.useRef)(""),d=(0,Je.useRef)(0),f=(0,Je.useRef)(""),c=(0,Je.useRef)(null),p=(0,Je.useRef)(null),h=(0,Je.useRef)(!1),w=(0,Je.useRef)(a);w.current=a;let v=(0,Je.useRef)(t.onSaved);v.current=t.onSaved,(0,Je.useEffect)(()=>{l.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=Yo(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let g=()=>{p.current&&(clearTimeout(p.current),p.current=null)},b=(0,Je.useCallback)(async k=>{let _=l.current;if(!_){n("error");return}let T=await oc(_.id);if(!T.ok||!T.body.workspace){n("error");return}let R=T.body.workspace,B=EI({localSignature:Yo(k.localNodes,k.localEdges),lastSavedSignature:u.current,remoteSignature:Yo(R.nodes,R.edges)});if(s.current=R.version,B==="conflict"){n("conflict");return}u.current=Yo(R.nodes,R.edges),d.current=R.nodes.length,B==="reload"&&se.getState().hydrateGraph(R.nodes,R.edges),i(!1),n("idle"),v.current?.(R)},[]),m=(0,Je.useCallback)(async(k,_,T=!1)=>{let R=l.current;if(!R||!T&&!w.current||h.current)return;let B=$p({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:_,lastSavedSignature:u.current,nextSignature:Yo(k.nodes,k.edges)});if(!B.persist||!B.snapshot)return;let{nodes:U,edges:L}=B.snapshot,N=R.name;h.current=!0,n("saving");try{let A=await F_(R.id,{name:N,nodes:G0(U),edges:X0(L),expectedVersion:s.current});if(A.status===409){await b({localNodes:U,localEdges:L});return}A.ok&&A.body.workspace?(s.current=A.body.workspace.version,u.current=Yo(U,L),d.current=U.length,i(!1),n("saved"),g(),p.current=setTimeout(()=>{n(M=>M==="saved"?"idle":M)},fP),v.current?.(A.body.workspace)):n("error")}catch{n("error")}finally{h.current=!1}},[b]);(0,Je.useEffect)(()=>{if(!a)return;let k=(T="autosave")=>{if(!l.current||!w.current)return;let B=Ps(),L=Yo(B.nodes,B.edges)!==u.current;if(i(L),!L){c.current&&(clearTimeout(c.current),c.current=null),n(D=>D==="pending"?"idle":D);return}let N=Wu(B.nodes.length,T);if(!m0({lastSavedNodeCount:d.current,nextNodeCount:B.nodes.length,cause:N})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(D=>D==="pending"?"idle":D);return}n(D=>D==="saving"||D==="conflict"?D:"pending"),c.current&&clearTimeout(c.current);let A={nodes:B.nodes,edges:B.edges},M=N;c.current=setTimeout(()=>{c.current=null,m(A,M)},cP)},_=se.subscribe(()=>{k("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,Je.useEffect)(()=>{if(!a)return;let k=()=>{if(!w.current||!l.current)return;let T=Ps(),R=Wu(T.nodes.length,"flush"),B=$p({lastSavedNodeCount:d.current,nextNodes:T.nodes,nextEdges:T.edges,cause:R,lastSavedSignature:u.current,nextSignature:Yo(T.nodes,T.edges)});!B.persist||!B.snapshot||m(B.snapshot,R)};return window.addEventListener("pagehide",k),()=>{window.removeEventListener("pagehide",k),k(),g()}},[m,a]);let x=(0,Je.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let k=Ps();await m(k,Wu(k.nodes.length,"autosave"))},[m]),S=(0,Je.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!l.current)return;let _=Ps(),T="flush",R=$p({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:T,lastSavedSignature:u.current,nextSignature:Yo(_.nodes,_.edges)});!R.persist||!R.snapshot||m(R.snapshot,T,!0)},[m]),y=(0,Je.useCallback)(async()=>{let k=Ps();await m(k,Wu(k.nodes.length,"autosave"))},[m]),C=(0,Je.useCallback)(async()=>{let k=l.current;if(!k)return;let _=await oc(k.id);if(!_.ok||!_.body.workspace){n("error");return}let T=_.body.workspace;s.current=T.version,u.current=Yo(T.nodes,T.edges),d.current=T.nodes.length,se.getState().hydrateGraph(T.nodes,T.edges),i(!1),n("idle"),v.current?.(T)},[]);return(0,Je.useEffect)(()=>{if(!a)return;let k=!1,_=async()=>{if(k||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let R=l.current;if(!(!R||h.current)){k=!0;try{let B=await H_(R.id);if(!B.ok||typeof B.body.version!="number"||B.body.version<=s.current)return;let U=Ps();await b({localNodes:U.nodes,localEdges:U.edges})}catch{}finally{k=!1}}},T=setInterval(()=>{_()},pP);return()=>clearInterval(T)},[a,b]),{status:o,isDirty:r,saveNow:x,flushPendingSave:S,resolveConflict:y,reloadFromServer:C}}var wa=E(X(),1),mP=({locale:e,workspaceId:t})=>{let a=pe(),o=(0,Os.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=NI({workspaceId:t,beforeReset:()=>{o.current()}});(0,Os.useEffect)(()=>{Yk(e)},[e]);let l=n.phase==="ready"?n.workspace:null,s=(0,Os.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=AI(l,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=MI(l?l.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,wa.jsx)("div",{className:"wf-canvas-root",children:(0,wa.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,wa.jsx)("div",{className:"wf-canvas-root",children:(0,wa.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,wa.jsx)("span",{children:n.message}),(0,wa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,wa.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,wa.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,wa.jsx)("span",{children:a("app.conflictBanner")}),(0,wa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,wa.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,wa.jsx)("main",{className:"wf-canvas-main",children:(0,wa.jsx)(_I,{catalog:i,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},j0=mP;var DI=`/* this gets exported as style.css and can be used for the default theming */
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
`;var RI=`/**
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

`;var zI=`/**
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




`;var PI=`/**
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
`;var wP=[{id:"omnimux-workflow-xyflow-base",css:DI},{id:"omnimux-workflow-theme",css:RI},{id:"omnimux-workflow-components",css:zI},{id:"omnimux-workflow-table-node",css:PI}];function OI(){for(let{id:e,css:t}of wP){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Y0=E(X(),1),lc=new WeakMap;function vP(e,t){if(!e||lc.has(e))return;OI();let a=(0,BI.createRoot)(e);lc.set(e,{root:a,lastProps:t}),a.render((0,Y0.jsx)(j0,{...t}))}function yP(e,t){let a=lc.get(e);a&&(a.lastProps=t,a.root.render((0,Y0.jsx)(j0,{...t})))}function CP(e){let t=lc.get(e);t&&(t.root.unmount(),lc.delete(e))}return qM(SP);})();
