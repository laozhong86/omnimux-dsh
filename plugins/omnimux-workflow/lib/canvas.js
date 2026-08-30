var __omnimuxWorkflowCanvas=(()=>{var n3=Object.create;var _d=Object.defineProperty;var r3=Object.getOwnPropertyDescriptor;var i3=Object.getOwnPropertyNames;var s3=Object.getPrototypeOf,l3=Object.prototype.hasOwnProperty;var d3=(e,t,a)=>t in e?_d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var ja=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},u3=(e,t)=>{for(var a in t)_d(e,a,{get:t[a],enumerable:!0})},Mw=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of i3(t))!l3.call(e,n)&&n!==a&&_d(e,n,{get:()=>t[n],enumerable:!(o=r3(t,n))||o.enumerable});return e};var I=(e,t,a)=>(a=e!=null?n3(s3(e)):{},Mw(t||!e||!e.__esModule?_d(a,"default",{value:e,enumerable:!0}):a,e)),c3=e=>Mw(_d({},"__esModule",{value:!0}),e);var Ug=(e,t,a)=>d3(e,typeof t!="symbol"?t+"":t,a);var Bw=ja(mt=>{"use strict";function jg(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<rf(n,t))e[o]=t,e[a]=n,a=o;else break e}}function wn(e){return e.length===0?null:e[0]}function lf(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,s=e[i],l=i+1,u=e[l];if(0>rf(s,a))l<n&&0>rf(u,s)?(e[o]=u,e[l]=a,o=l):(e[o]=s,e[i]=a,o=i);else if(l<n&&0>rf(u,a))e[o]=u,e[l]=a,o=l;else break e}}return t}function rf(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}mt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Nw=performance,mt.unstable_now=function(){return Nw.now()}):(qg=Date,Ew=qg.now(),mt.unstable_now=function(){return qg.now()-Ew});var Nw,qg,Ew,jn=[],Tr=[],f3=1,Do=null,Ca=3,Xg=!1,Id=!1,Md=!1,Wg=!1,Dw=typeof setTimeout=="function"?setTimeout:null,Rw=typeof clearTimeout=="function"?clearTimeout:null,Tw=typeof setImmediate<"u"?setImmediate:null;function sf(e){for(var t=wn(Tr);t!==null;){if(t.callback===null)lf(Tr);else if(t.startTime<=e)lf(Tr),t.sortIndex=t.expirationTime,jg(jn,t);else break;t=wn(Tr)}}function Yg(e){if(Md=!1,sf(e),!Id)if(wn(jn)!==null)Id=!0,Gs||(Gs=!0,Vs());else{var t=wn(Tr);t!==null&&Kg(Yg,t.startTime-e)}}var Gs=!1,Nd=-1,Pw=5,zw=-1;function Ow(){return Wg?!0:!(mt.unstable_now()-zw<Pw)}function Vg(){if(Wg=!1,Gs){var e=mt.unstable_now();zw=e;var t=!0;try{e:{Id=!1,Md&&(Md=!1,Rw(Nd),Nd=-1),Xg=!0;var a=Ca;try{t:{for(sf(e),Do=wn(jn);Do!==null&&!(Do.expirationTime>e&&Ow());){var o=Do.callback;if(typeof o=="function"){Do.callback=null,Ca=Do.priorityLevel;var n=o(Do.expirationTime<=e);if(e=mt.unstable_now(),typeof n=="function"){Do.callback=n,sf(e),t=!0;break t}Do===wn(jn)&&lf(jn),sf(e)}else lf(jn);Do=wn(jn)}if(Do!==null)t=!0;else{var r=wn(Tr);r!==null&&Kg(Yg,r.startTime-e),t=!1}}break e}finally{Do=null,Ca=a,Xg=!1}t=void 0}}finally{t?Vs():Gs=!1}}}var Vs;typeof Tw=="function"?Vs=function(){Tw(Vg)}:typeof MessageChannel<"u"?(Gg=new MessageChannel,Aw=Gg.port2,Gg.port1.onmessage=Vg,Vs=function(){Aw.postMessage(null)}):Vs=function(){Dw(Vg,0)};var Gg,Aw;function Kg(e,t){Nd=Dw(function(){e(mt.unstable_now())},t)}mt.unstable_IdlePriority=5;mt.unstable_ImmediatePriority=1;mt.unstable_LowPriority=4;mt.unstable_NormalPriority=3;mt.unstable_Profiling=null;mt.unstable_UserBlockingPriority=2;mt.unstable_cancelCallback=function(e){e.callback=null};mt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pw=0<e?Math.floor(1e3/e):5};mt.unstable_getCurrentPriorityLevel=function(){return Ca};mt.unstable_next=function(e){switch(Ca){case 1:case 2:case 3:var t=3;break;default:t=Ca}var a=Ca;Ca=t;try{return e()}finally{Ca=a}};mt.unstable_requestPaint=function(){Wg=!0};mt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Ca;Ca=e;try{return t()}finally{Ca=a}};mt.unstable_scheduleCallback=function(e,t,a){var o=mt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:f3++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,jg(Tr,e),wn(jn)===null&&e===wn(Tr)&&(Md?(Rw(Nd),Nd=-1):Md=!0,Kg(Yg,a-o))):(e.sortIndex=n,jg(jn,e),Id||Xg||(Id=!0,Gs||(Gs=!0,Vs()))),e};mt.unstable_shouldYield=Ow;mt.unstable_wrapCallback=function(e){var t=Ca;return function(){var a=Ca;Ca=t;try{return e.apply(this,arguments)}finally{Ca=a}}}});var Fw=ja((L7,Hw)=>{"use strict";Hw.exports=Bw()});var $w=ja(be=>{"use strict";var Qg=Symbol.for("react.transitional.element"),p3=Symbol.for("react.portal"),m3=Symbol.for("react.fragment"),g3=Symbol.for("react.strict_mode"),h3=Symbol.for("react.profiler"),b3=Symbol.for("react.consumer"),x3=Symbol.for("react.context"),w3=Symbol.for("react.forward_ref"),y3=Symbol.for("react.suspense"),v3=Symbol.for("react.memo"),jw=Symbol.for("react.lazy"),C3=Symbol.for("react.activity"),Uw=Symbol.iterator;function S3(e){return e===null||typeof e!="object"?null:(e=Uw&&e[Uw]||e["@@iterator"],typeof e=="function"?e:null)}var Xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ww=Object.assign,Yw={};function Xs(e,t,a){this.props=e,this.context=t,this.refs=Yw,this.updater=a||Xw}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kw(){}Kw.prototype=Xs.prototype;function Jg(e,t,a){this.props=e,this.context=t,this.refs=Yw,this.updater=a||Xw}var eh=Jg.prototype=new Kw;eh.constructor=Jg;Ww(eh,Xs.prototype);eh.isPureReactComponent=!0;var qw=Array.isArray;function $g(){}var st={H:null,A:null,T:null,S:null},Zw=Object.prototype.hasOwnProperty;function th(e,t,a){var o=a.ref;return{$$typeof:Qg,type:e,key:t,ref:o!==void 0?o:null,props:a}}function k3(e,t){return th(e.type,t,e.props)}function ah(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qg}function L3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Vw=/\/+/g;function Zg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L3(""+e.key):t.toString(36)}function _3(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then($g,$g):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function js(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Qg:case p3:i=!0;break;case jw:return i=e._init,js(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+Zg(e,0):o,qw(n)?(a="",i!=null&&(a=i.replace(Vw,"$&/")+"/"),js(n,t,a,"",function(u){return u})):n!=null&&(ah(n)&&(n=k3(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Vw,"$&/")+"/")+i)),t.push(n)),1;i=0;var s=o===""?".":o+":";if(qw(e))for(var l=0;l<e.length;l++)o=e[l],r=s+Zg(o,l),i+=js(o,t,a,r,n);else if(l=S3(e),typeof l=="function")for(e=l.call(e),l=0;!(o=e.next()).done;)o=o.value,r=s+Zg(o,l++),i+=js(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return js(_3(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function df(e,t,a){if(e==null)return e;var o=[],n=0;return js(e,o,"","",function(r){return t.call(a,r,n++)}),o}function I3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Gw=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},M3={map:df,forEach:function(e,t,a){df(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return df(e,function(){t++}),t},toArray:function(e){return df(e,function(t){return t})||[]},only:function(e){if(!ah(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};be.Activity=C3;be.Children=M3;be.Component=Xs;be.Fragment=m3;be.Profiler=h3;be.PureComponent=Jg;be.StrictMode=g3;be.Suspense=y3;be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st;be.__COMPILER_RUNTIME={__proto__:null,c:function(e){return st.H.useMemoCache(e)}};be.cache=function(e){return function(){return e.apply(null,arguments)}};be.cacheSignal=function(){return null};be.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=Ww({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!Zw.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),s=0;s<r;s++)i[s]=arguments[s+2];o.children=i}return th(e.type,n,o)};be.createContext=function(e){return e={$$typeof:x3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:b3,_context:e},e};be.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)Zw.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];n.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return th(e,r,n)};be.createRef=function(){return{current:null}};be.forwardRef=function(e){return{$$typeof:w3,render:e}};be.isValidElement=ah;be.lazy=function(e){return{$$typeof:jw,_payload:{_status:-1,_result:e},_init:I3}};be.memo=function(e,t){return{$$typeof:v3,type:e,compare:t===void 0?null:t}};be.startTransition=function(e){var t=st.T,a={};st.T=a;try{var o=e(),n=st.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then($g,Gw)}catch(r){Gw(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),st.T=t}};be.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()};be.use=function(e){return st.H.use(e)};be.useActionState=function(e,t,a){return st.H.useActionState(e,t,a)};be.useCallback=function(e,t){return st.H.useCallback(e,t)};be.useContext=function(e){return st.H.useContext(e)};be.useDebugValue=function(){};be.useDeferredValue=function(e,t){return st.H.useDeferredValue(e,t)};be.useEffect=function(e,t){return st.H.useEffect(e,t)};be.useEffectEvent=function(e){return st.H.useEffectEvent(e)};be.useId=function(){return st.H.useId()};be.useImperativeHandle=function(e,t,a){return st.H.useImperativeHandle(e,t,a)};be.useInsertionEffect=function(e,t){return st.H.useInsertionEffect(e,t)};be.useLayoutEffect=function(e,t){return st.H.useLayoutEffect(e,t)};be.useMemo=function(e,t){return st.H.useMemo(e,t)};be.useOptimistic=function(e,t){return st.H.useOptimistic(e,t)};be.useReducer=function(e,t,a){return st.H.useReducer(e,t,a)};be.useRef=function(e){return st.H.useRef(e)};be.useState=function(e){return st.H.useState(e)};be.useSyncExternalStore=function(e,t,a){return st.H.useSyncExternalStore(e,t,a)};be.useTransition=function(){return st.H.useTransition()};be.version="19.2.8"});var J=ja((I7,Qw)=>{"use strict";Qw.exports=$w()});var ey=ja(Ta=>{"use strict";var N3=J();function Jw(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ar(){}var Ea={d:{f:Ar,r:function(){throw Error(Jw(522))},D:Ar,C:Ar,L:Ar,m:Ar,X:Ar,S:Ar,M:Ar},p:0,findDOMNode:null},E3=Symbol.for("react.portal");function T3(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E3,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Ed=N3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function uf(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ta.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ea;Ta.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Jw(299));return T3(e,t,null,a)};Ta.flushSync=function(e){var t=Ed.T,a=Ea.p;try{if(Ed.T=null,Ea.p=2,e)return e()}finally{Ed.T=t,Ea.p=a,Ea.d.f()}};Ta.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ea.d.C(e,t))};Ta.prefetchDNS=function(e){typeof e=="string"&&Ea.d.D(e)};Ta.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=uf(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Ea.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Ea.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ta.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=uf(t.as,t.crossOrigin);Ea.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ea.d.M(e)};Ta.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=uf(a,t.crossOrigin);Ea.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ta.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=uf(t.as,t.crossOrigin);Ea.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ea.d.m(e)};Ta.requestFormReset=function(e){Ea.d.r(e)};Ta.unstable_batchedUpdates=function(e,t){return e(t)};Ta.useFormState=function(e,t,a){return Ed.H.useFormState(e,t,a)};Ta.useFormStatus=function(){return Ed.H.useHostTransitionStatus()};Ta.version="19.2.8"});var Qt=ja((N7,ay)=>{"use strict";function ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ty)}catch(e){console.error(e)}}ty(),ay.exports=ey()});var mC=ja(Pp=>{"use strict";var Xt=Fw(),Mv=J(),A3=Qt();function W(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Nv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Ev(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oy(e){if(hu(e)!==e)throw Error(W(188))}function D3(e){var t=e.alternate;if(!t){if(t=hu(e),t===null)throw Error(W(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return oy(n),e;if(r===o)return oy(n),t;r=r.sibling}throw Error(W(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,s=n.child;s;){if(s===a){i=!0,a=n,o=r;break}if(s===o){i=!0,o=n,a=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===a){i=!0,a=r,o=n;break}if(s===o){i=!0,o=r,a=n;break}s=s.sibling}if(!i)throw Error(W(189))}}if(a.alternate!==o)throw Error(W(190))}if(a.tag!==3)throw Error(W(188));return a.stateNode.current===a?e:t}function Av(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Av(e),t!==null)return t;e=e.sibling}return null}var ut=Object.assign,R3=Symbol.for("react.element"),cf=Symbol.for("react.transitional.element"),Bd=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),Dv=Symbol.for("react.strict_mode"),zh=Symbol.for("react.profiler"),Rv=Symbol.for("react.consumer"),Jn=Symbol.for("react.context"),Tb=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),Ab=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),Hh=Symbol.for("react.activity"),P3=Symbol.for("react.memo_cache_sentinel"),ny=Symbol.iterator;function Td(e){return e===null||typeof e!="object"?null:(e=ny&&e[ny]||e["@@iterator"],typeof e=="function"?e:null)}var z3=Symbol.for("react.client.reference");function Fh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qs:return"Fragment";case zh:return"Profiler";case Dv:return"StrictMode";case Oh:return"Suspense";case Bh:return"SuspenseList";case Hh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Bd:return"Portal";case Jn:return e.displayName||"Context";case Rv:return(e._context.displayName||"Context")+".Consumer";case Tb:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ab:return t=e.displayName||null,t!==null?t:Fh(e.type)||"Memo";case Dr:t=e._payload,e=e._init;try{return Fh(e(t))}catch{}}return null}var Hd=Array.isArray,me=Mv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,je=A3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ri={pending:!1,data:null,method:null,action:null},Uh=[],Js=-1;function kn(e){return{current:e}}function ta(e){0>Js||(e.current=Uh[Js],Uh[Js]=null,Js--)}function tt(e,t){Js++,Uh[Js]=e.current,e.current=t}var Sn=kn(null),au=kn(null),Gr=kn(null),Gf=kn(null);function jf(e,t){switch(tt(Gr,t),tt(au,e),tt(Sn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cv(t),e=eC(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ta(Sn),tt(Sn,e)}function bl(){ta(Sn),ta(au),ta(Gr)}function qh(e){e.memoizedState!==null&&tt(Gf,e);var t=Sn.current,a=eC(t,e.type);t!==a&&(tt(au,e),tt(Sn,a))}function Xf(e){au.current===e&&(ta(Sn),ta(au)),Gf.current===e&&(ta(Gf),pu._currentValue=Ri)}var oh,ry;function Ei(e){if(oh===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);oh=t&&t[1]||"",ry=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oh+e+ry}var nh=!1;function rh(e,t){if(!e||nh)return"";nh=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],s=r[1];if(i&&s){var l=i.split(`
`),u=s.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===u.length)for(o=l.length-1,n=u.length-1;1<=o&&0<=n&&l[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==u[n]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{nh=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ei(a):""}function O3(e,t){switch(e.tag){case 26:case 27:case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return e.child!==t&&t!==null?Ei("Suspense Fallback"):Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 15:return rh(e.type,!1);case 11:return rh(e.type.render,!1);case 1:return rh(e.type,!0);case 31:return Ei("Activity");default:return""}}function iy(e){try{var t="",a=null;do t+=O3(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vh=Object.prototype.hasOwnProperty,Db=Xt.unstable_scheduleCallback,ih=Xt.unstable_cancelCallback,B3=Xt.unstable_shouldYield,H3=Xt.unstable_requestPaint,ho=Xt.unstable_now,F3=Xt.unstable_getCurrentPriorityLevel,Pv=Xt.unstable_ImmediatePriority,zv=Xt.unstable_UserBlockingPriority,Wf=Xt.unstable_NormalPriority,U3=Xt.unstable_LowPriority,Ov=Xt.unstable_IdlePriority,q3=Xt.log,V3=Xt.unstable_setDisableYieldValue,bu=null,bo=null;function Hr(e){if(typeof q3=="function"&&V3(e),bo&&typeof bo.setStrictMode=="function")try{bo.setStrictMode(bu,e)}catch{}}var xo=Math.clz32?Math.clz32:X3,G3=Math.log,j3=Math.LN2;function X3(e){return e>>>=0,e===0?32:31-(G3(e)/j3|0)|0}var ff=256,pf=262144,mf=4194304;function Ti(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wp(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=o&134217727;return s!==0?(o=s&~r,o!==0?n=Ti(o):(i&=s,i!==0?n=Ti(i):a||(a=s&~e,a!==0&&(n=Ti(a))))):(s=o&~r,s!==0?n=Ti(s):i!==0?n=Ti(i):a||(a=o&~e,a!==0&&(n=Ti(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function xu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function W3(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(){var e=mf;return mf<<=1,(mf&62914560)===0&&(mf=4194304),e}function sh(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y3(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-xo(a),f=1<<d;s[d]=0,l[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&Hv(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function Hv(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-xo(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Fv(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-xo(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function Uv(e,t){var a=t&-t;return a=(a&42)!==0?1:Rb(a),(a&(e.suspendedLanes|t))!==0?0:a}function Rb(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pb(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qv(){var e=je.p;return e!==0?e:(e=window.event,e===void 0?32:cC(e.type))}function sy(e,t){var a=je.p;try{return je.p=e,t()}finally{je.p=a}}var oi=Math.random().toString(36).slice(2),ua="__reactFiber$"+oi,$a="__reactProps$"+oi,Ml="__reactContainer$"+oi,Gh="__reactEvents$"+oi,K3="__reactListeners$"+oi,Z3="__reactHandles$"+oi,ly="__reactResources$"+oi,yu="__reactMarker$"+oi;function zb(e){delete e[ua],delete e[$a],delete e[Gh],delete e[K3],delete e[Z3]}function el(e){var t=e[ua];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ml]||a[ua]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=hv(e);e!==null;){if(a=e[ua])return a;e=hv(e)}return t}e=a,a=e.parentNode}return null}function Nl(e){if(e=e[ua]||e[Ml]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(W(33))}function ul(e){var t=e[ly];return t||(t=e[ly]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ea(e){e[yu]=!0}var Vv=new Set,Gv={};function Gi(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(Gv[e]=t,e=0;e<t.length;e++)Vv.add(t[e])}var $3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dy={},uy={};function Q3(e){return Vh.call(uy,e)?!0:Vh.call(dy,e)?!1:$3.test(e)?uy[e]=!0:(dy[e]=!0,!1)}function Nf(e,t,a){if(Q3(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function gf(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Po(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J3(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jh(e){if(!e._valueTracker){var t=jv(e)?"checked":"value";e._valueTracker=J3(e,t,""+e[t])}}function Xv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=jv(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Yf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var e4=/[\n"\\]/g;function Bo(e){return e.replace(e4,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xh(e,t,a,o,n,r,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Po(t)):e.value!==""+Po(t)&&(e.value=""+Po(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Wh(e,i,Po(t)):a!=null?Wh(e,i,Po(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Po(s):e.removeAttribute("name")}function Wv(e,t,a,o,n,r,i,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){jh(e);return}a=a!=null?""+Po(a):"",t=t!=null?""+Po(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=s?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),jh(e)}function Wh(e,t,a){t==="number"&&Yf(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Po(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Yv(e,t,a){if(t!=null&&(t=""+Po(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Po(a):""}function Kv(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(W(92));if(Hd(o)){if(1<o.length)throw Error(W(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Po(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),jh(e)}function wl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var t4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cy(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||t4.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Zv(e,t,a){if(t!=null&&typeof t!="object")throw Error(W(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&cy(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&cy(e,r,t[r])}function Ob(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ef(e){return o4.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function er(){}var Yh=null;function Bb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,fl=null;function fy(e){var t=Nl(e);if(t&&(e=t.stateNode)){var a=e[$a]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xh(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bo(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[$a]||null;if(!n)throw Error(W(90));Xh(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Xv(o)}break e;case"textarea":Yv(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var lh=!1;function $v(e,t,a){if(lh)return e(t,a);lh=!0;try{var o=e(t);return o}finally{if(lh=!1,(tl!==null||fl!==null)&&(Tp(),tl&&(t=tl,e=fl,fl=tl=null,fy(t),e)))for(t=0;t<e.length;t++)fy(e[t])}}function ou(e,t){var a=e.stateNode;if(a===null)return null;var o=a[$a]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(W(231,t,typeof a));return a}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kh=!1;if(rr)try{Ws={},Object.defineProperty(Ws,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Kh=!1}var Ws,Fr=null,Hb=null,Tf=null;function Qv(){if(Tf)return Tf;var e,t=Hb,a=t.length,o,n="value"in Fr?Fr.value:Fr.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Tf=n.slice(e,1<o?1-o:void 0)}function Af(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hf(){return!0}function py(){return!1}function Qa(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hf:py,this.isPropagationStopped=py,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hf)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hf)},persist:function(){},isPersistent:hf}),t}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=Qa(ji),vu=ut({},ji,{view:0,detail:0}),n4=Qa(vu),dh,uh,Ad,vp=ut({},vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fb,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ad&&(Ad&&e.type==="mousemove"?(dh=e.screenX-Ad.screenX,uh=e.screenY-Ad.screenY):uh=dh=0,Ad=e),dh)},movementY:function(e){return"movementY"in e?e.movementY:uh}}),my=Qa(vp),r4=ut({},vp,{dataTransfer:0}),i4=Qa(r4),s4=ut({},vu,{relatedTarget:0}),ch=Qa(s4),l4=ut({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),d4=Qa(l4),u4=ut({},ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c4=Qa(u4),f4=ut({},ji,{data:0}),gy=Qa(f4),p4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=g4[e])?!!t[e]:!1}function Fb(){return h4}var b4=ut({},vu,{key:function(e){if(e.key){var t=p4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Af(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fb,charCode:function(e){return e.type==="keypress"?Af(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Af(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),x4=Qa(b4),w4=ut({},vp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hy=Qa(w4),y4=ut({},vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fb}),v4=Qa(y4),C4=ut({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),S4=Qa(C4),k4=ut({},vp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L4=Qa(k4),_4=ut({},ji,{newState:0,oldState:0}),I4=Qa(_4),M4=[9,13,27,32],Ub=rr&&"CompositionEvent"in window,Vd=null;rr&&"documentMode"in document&&(Vd=document.documentMode);var N4=rr&&"TextEvent"in window&&!Vd,Jv=rr&&(!Ub||Vd&&8<Vd&&11>=Vd),by=" ",xy=!1;function e1(e,t){switch(e){case"keyup":return M4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var al=!1;function E4(e,t){switch(e){case"compositionend":return t1(t);case"keypress":return t.which!==32?null:(xy=!0,by);case"textInput":return e=t.data,e===by&&xy?null:e;default:return null}}function T4(e,t){if(al)return e==="compositionend"||!Ub&&e1(e,t)?(e=Qv(),Tf=Hb=Fr=null,al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jv&&t.locale!=="ko"?null:t.data;default:return null}}var A4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A4[e.type]:t==="textarea"}function a1(e,t,a,o){tl?fl?fl.push(o):fl=[o]:tl=o,t=fp(t,"onChange"),0<t.length&&(a=new yp("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Gd=null,nu=null;function D4(e){$2(e,0)}function Cp(e){var t=Fd(e);if(Xv(t))return e}function yy(e,t){if(e==="change")return t}var o1=!1;rr&&(rr?(xf="oninput"in document,xf||(fh=document.createElement("div"),fh.setAttribute("oninput","return;"),xf=typeof fh.oninput=="function"),bf=xf):bf=!1,o1=bf&&(!document.documentMode||9<document.documentMode));var bf,xf,fh;function vy(){Gd&&(Gd.detachEvent("onpropertychange",n1),nu=Gd=null)}function n1(e){if(e.propertyName==="value"&&Cp(nu)){var t=[];a1(t,nu,e,Bb(e)),$v(D4,t)}}function R4(e,t,a){e==="focusin"?(vy(),Gd=t,nu=a,Gd.attachEvent("onpropertychange",n1)):e==="focusout"&&vy()}function P4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cp(nu)}function z4(e,t){if(e==="click")return Cp(t)}function O4(e,t){if(e==="input"||e==="change")return Cp(t)}function B4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yo=typeof Object.is=="function"?Object.is:B4;function ru(e,t){if(yo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Vh.call(t,n)||!yo(e[n],t[n]))return!1}return!0}function Cy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sy(e,t){var a=Cy(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cy(a)}}function r1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?r1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function i1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yf(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Yf(e.document)}return t}function qb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var H4=rr&&"documentMode"in document&&11>=document.documentMode,ol=null,Zh=null,jd=null,$h=!1;function ky(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$h||ol==null||ol!==Yf(o)||(o=ol,"selectionStart"in o&&qb(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jd&&ru(jd,o)||(jd=o,o=fp(Zh,"onSelect"),0<o.length&&(t=new yp("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=ol)))}function Ni(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var nl={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionrun:Ni("Transition","TransitionRun"),transitionstart:Ni("Transition","TransitionStart"),transitioncancel:Ni("Transition","TransitionCancel"),transitionend:Ni("Transition","TransitionEnd")},ph={},s1={};rr&&(s1=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function Xi(e){if(ph[e])return ph[e];if(!nl[e])return e;var t=nl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in s1)return ph[e]=t[a];return e}var l1=Xi("animationend"),d1=Xi("animationiteration"),u1=Xi("animationstart"),F4=Xi("transitionrun"),U4=Xi("transitionstart"),q4=Xi("transitioncancel"),c1=Xi("transitionend"),f1=new Map,Qh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qh.push("scrollEnd");function Qo(e,t){f1.set(e,t),Gi(t,[e])}var Kf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ro=[],rl=0,Vb=0;function Sp(){for(var e=rl,t=Vb=rl=0;t<e;){var a=Ro[t];Ro[t++]=null;var o=Ro[t];Ro[t++]=null;var n=Ro[t];Ro[t++]=null;var r=Ro[t];if(Ro[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&p1(a,n,r)}}function kp(e,t,a,o){Ro[rl++]=e,Ro[rl++]=t,Ro[rl++]=a,Ro[rl++]=o,Vb|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gb(e,t,a,o){return kp(e,t,a,o),Zf(e)}function Wi(e,t){return kp(e,null,null,t),Zf(e)}function p1(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-xo(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function Zf(e){if(50<eu)throw eu=0,wb=null,Error(W(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var il={};function V4(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mo(e,t,a,o){return new V4(e,t,a,o)}function jb(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ar(e,t){var a=e.alternate;return a===null?(a=mo(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function m1(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Df(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")jb(e)&&(i=1);else if(typeof e=="string")i=XE(e,a,Sn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Hh:return e=mo(31,a,t,n),e.elementType=Hh,e.lanes=r,e;case Qs:return Pi(a.children,n,r,t);case Dv:i=8,n|=24;break;case zh:return e=mo(12,a,t,n|2),e.elementType=zh,e.lanes=r,e;case Oh:return e=mo(13,a,t,n),e.elementType=Oh,e.lanes=r,e;case Bh:return e=mo(19,a,t,n),e.elementType=Bh,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jn:i=10;break e;case Rv:i=9;break e;case Tb:i=11;break e;case Ab:i=14;break e;case Dr:i=16,o=null;break e}i=29,a=Error(W(130,e===null?"null":typeof e,"")),o=null}return t=mo(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Pi(e,t,a,o){return e=mo(7,e,o,t),e.lanes=a,e}function mh(e,t,a){return e=mo(6,e,null,t),e.lanes=a,e}function g1(e){var t=mo(18,null,null,0);return t.stateNode=e,t}function gh(e,t,a){return t=mo(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ly=new WeakMap;function Ho(e,t){if(typeof e=="object"&&e!==null){var a=Ly.get(e);return a!==void 0?a:(t={value:e,source:t,stack:iy(t)},Ly.set(e,t),t)}return{value:e,source:t,stack:iy(t)}}var sl=[],ll=0,$f=null,iu=0,zo=[],Oo=0,Jr=null,yn=1,vn="";function $n(e,t){sl[ll++]=iu,sl[ll++]=$f,$f=e,iu=t}function h1(e,t,a){zo[Oo++]=yn,zo[Oo++]=vn,zo[Oo++]=Jr,Jr=e;var o=yn;e=vn;var n=32-xo(o)-1;o&=~(1<<n),a+=1;var r=32-xo(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,yn=1<<32-xo(t)+n|a<<n|o,vn=r+e}else yn=1<<r|a<<n|o,vn=e}function Xb(e){e.return!==null&&($n(e,1),h1(e,1,0))}function Wb(e){for(;e===$f;)$f=sl[--ll],sl[ll]=null,iu=sl[--ll],sl[ll]=null;for(;e===Jr;)Jr=zo[--Oo],zo[Oo]=null,vn=zo[--Oo],zo[Oo]=null,yn=zo[--Oo],zo[Oo]=null}function b1(e,t){zo[Oo++]=yn,zo[Oo++]=vn,zo[Oo++]=Jr,yn=t.id,vn=t.overflow,Jr=e}var ca=null,dt=null,Pe=!1,jr=null,Fo=!1,Jh=Error(W(519));function ei(e){var t=Error(W(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw su(Ho(t,e)),Jh}function _y(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[ua]=e,t[$a]=o,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<cu.length;a++)Ee(cu[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),Wv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Kv(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||J2(t.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),o.onScroll!=null&&Ee("scroll",t),o.onScrollEnd!=null&&Ee("scrollend",t),o.onClick!=null&&(t.onclick=er),t=!0):t=!1,t||ei(e,!0)}function Iy(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:Fo=!1;return;case 27:case 3:Fo=!0;return;default:ca=ca.return}}function Ys(e){if(e!==ca)return!1;if(!Pe)return Iy(e),Pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kb(e.type,e.memoizedProps)),a=!a),a&&dt&&ei(e),Iy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));dt=gv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));dt=gv(e)}else t===27?(t=dt,ni(e.type)?(e=Mb,Mb=null,dt=e):dt=t):dt=ca?qo(e.stateNode.nextSibling):null;return!0}function Hi(){dt=ca=null,Pe=!1}function hh(){var e=jr;return e!==null&&(Ka===null?Ka=e:Ka.push.apply(Ka,e),jr=null),e}function su(e){jr===null?jr=[e]:jr.push(e)}var eb=kn(null),Yi=null,tr=null;function Pr(e,t,a){tt(eb,t._currentValue),t._currentValue=a}function or(e){e._currentValue=eb.current,ta(eb)}function tb(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function ab(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=n;for(var l=0;l<t.length;l++)if(s.context===t[l]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),tb(r.return,a,e),o||(i=null);break e}r=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(W(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),tb(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function El(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(W(387));if(i=i.memoizedProps,i!==null){var s=n.type;yo(n.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(n===Gf.current){if(i=n.alternate,i===null)throw Error(W(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pu):e=[pu])}n=n.return}e!==null&&ab(t,e,a,o),t.flags|=262144}function Qf(e){for(e=e.firstContext;e!==null;){if(!yo(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fi(e){Yi=e,tr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return x1(Yi,e)}function wf(e,t){return Yi===null&&Fi(e),x1(e,t)}function x1(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},tr===null){if(e===null)throw Error(W(308));tr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else tr=tr.next=t;return a}var G4=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},j4=Xt.unstable_scheduleCallback,X4=Xt.unstable_NormalPriority,Ot={$$typeof:Jn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yb(){return{controller:new G4,data:new Map,refCount:0}}function Cu(e){e.refCount--,e.refCount===0&&j4(X4,function(){e.controller.abort()})}var Xd=null,ob=0,yl=0,pl=null;function W4(e,t){if(Xd===null){var a=Xd=[];ob=0,yl=wx(),pl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ob++,t.then(My,My),t}function My(){if(--ob===0&&Xd!==null){pl!==null&&(pl.status="fulfilled");var e=Xd;Xd=null,yl=0,pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Y4(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Ny=me.S;me.S=function(e,t){A2=ho(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&W4(e,t),Ny!==null&&Ny(e,t)};var zi=kn(null);function Kb(){var e=zi.current;return e!==null?e:Qe.pooledCache}function Rf(e,t){t===null?tt(zi,zi.current):tt(zi,t.pool)}function w1(){var e=Kb();return e===null?null:{parent:Ot._currentValue,pool:e}}var Tl=Error(W(460)),Zb=Error(W(474)),Lp=Error(W(542)),Jf={then:function(){}};function Ey(e){return e=e.status,e==="fulfilled"||e==="rejected"}function y1(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(er,er),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ay(e),e;default:if(typeof t.status=="string")t.then(er,er);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(W(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ay(e),e}throw Oi=t,Tl}}function Ai(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Oi=a,Tl):a}}var Oi=null;function Ty(){if(Oi===null)throw Error(W(459));var e=Oi;return Oi=null,e}function Ay(e){if(e===Tl||e===Lp)throw Error(W(483))}var ml=null,lu=0;function yf(e){var t=lu;return lu+=1,ml===null&&(ml=[]),y1(ml,e,t)}function Dd(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vf(e,t){throw t.$$typeof===R3?Error(W(525)):(e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function v1(e){function t(h,b){if(e){var m=h.deletions;m===null?(h.deletions=[b],h.flags|=16):m.push(b)}}function a(h,b){if(!e)return null;for(;b!==null;)t(h,b),b=b.sibling;return null}function o(h){for(var b=new Map;h!==null;)h.key!==null?b.set(h.key,h):b.set(h.index,h),h=h.sibling;return b}function n(h,b){return h=ar(h,b),h.index=0,h.sibling=null,h}function r(h,b,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<b?(h.flags|=67108866,b):m):(h.flags|=67108866,b)):(h.flags|=1048576,b)}function i(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function s(h,b,m,x){return b===null||b.tag!==6?(b=mh(m,h.mode,x),b.return=h,b):(b=n(b,m),b.return=h,b)}function l(h,b,m,x){var v=m.type;return v===Qs?d(h,b,m.props.children,x,m.key):b!==null&&(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Dr&&Ai(v)===b.type)?(b=n(b,m.props),Dd(b,m),b.return=h,b):(b=Df(m.type,m.key,m.props,null,h.mode,x),Dd(b,m),b.return=h,b)}function u(h,b,m,x){return b===null||b.tag!==4||b.stateNode.containerInfo!==m.containerInfo||b.stateNode.implementation!==m.implementation?(b=gh(m,h.mode,x),b.return=h,b):(b=n(b,m.children||[]),b.return=h,b)}function d(h,b,m,x,v){return b===null||b.tag!==7?(b=Pi(m,h.mode,x,v),b.return=h,b):(b=n(b,m),b.return=h,b)}function f(h,b,m){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=mh(""+b,h.mode,m),b.return=h,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case cf:return m=Df(b.type,b.key,b.props,null,h.mode,m),Dd(m,b),m.return=h,m;case Bd:return b=gh(b,h.mode,m),b.return=h,b;case Dr:return b=Ai(b),f(h,b,m)}if(Hd(b)||Td(b))return b=Pi(b,h.mode,m,null),b.return=h,b;if(typeof b.then=="function")return f(h,yf(b),m);if(b.$$typeof===Jn)return f(h,wf(h,b),m);vf(h,b)}return null}function c(h,b,m,x){var v=b!==null?b.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return v!==null?null:s(h,b,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cf:return m.key===v?l(h,b,m,x):null;case Bd:return m.key===v?u(h,b,m,x):null;case Dr:return m=Ai(m),c(h,b,m,x)}if(Hd(m)||Td(m))return v!==null?null:d(h,b,m,x,null);if(typeof m.then=="function")return c(h,b,yf(m),x);if(m.$$typeof===Jn)return c(h,b,wf(h,m),x);vf(h,m)}return null}function p(h,b,m,x,v){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(m)||null,s(b,h,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cf:return h=h.get(x.key===null?m:x.key)||null,l(b,h,x,v);case Bd:return h=h.get(x.key===null?m:x.key)||null,u(b,h,x,v);case Dr:return x=Ai(x),p(h,b,m,x,v)}if(Hd(x)||Td(x))return h=h.get(m)||null,d(b,h,x,v,null);if(typeof x.then=="function")return p(h,b,m,yf(x),v);if(x.$$typeof===Jn)return p(h,b,m,wf(b,x),v);vf(b,x)}return null}function g(h,b,m,x){for(var v=null,C=null,S=b,k=b=0,_=null;S!==null&&k<m.length;k++){S.index>k?(_=S,S=null):_=S.sibling;var T=c(h,S,m[k],x);if(T===null){S===null&&(S=_);break}e&&S&&T.alternate===null&&t(h,S),b=r(T,b,k),C===null?v=T:C.sibling=T,C=T,S=_}if(k===m.length)return a(h,S),Pe&&$n(h,k),v;if(S===null){for(;k<m.length;k++)S=f(h,m[k],x),S!==null&&(b=r(S,b,k),C===null?v=S:C.sibling=S,C=S);return Pe&&$n(h,k),v}for(S=o(S);k<m.length;k++)_=p(S,h,k,m[k],x),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?k:_.key),b=r(_,b,k),C===null?v=_:C.sibling=_,C=_);return e&&S.forEach(function(A){return t(h,A)}),Pe&&$n(h,k),v}function w(h,b,m,x){if(m==null)throw Error(W(151));for(var v=null,C=null,S=b,k=b=0,_=null,T=m.next();S!==null&&!T.done;k++,T=m.next()){S.index>k?(_=S,S=null):_=S.sibling;var A=c(h,S,T.value,x);if(A===null){S===null&&(S=_);break}e&&S&&A.alternate===null&&t(h,S),b=r(A,b,k),C===null?v=A:C.sibling=A,C=A,S=_}if(T.done)return a(h,S),Pe&&$n(h,k),v;if(S===null){for(;!T.done;k++,T=m.next())T=f(h,T.value,x),T!==null&&(b=r(T,b,k),C===null?v=T:C.sibling=T,C=T);return Pe&&$n(h,k),v}for(S=o(S);!T.done;k++,T=m.next())T=p(S,h,k,T.value,x),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?k:T.key),b=r(T,b,k),C===null?v=T:C.sibling=T,C=T);return e&&S.forEach(function(B){return t(h,B)}),Pe&&$n(h,k),v}function y(h,b,m,x){if(typeof m=="object"&&m!==null&&m.type===Qs&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cf:e:{for(var v=m.key;b!==null;){if(b.key===v){if(v=m.type,v===Qs){if(b.tag===7){a(h,b.sibling),x=n(b,m.props.children),x.return=h,h=x;break e}}else if(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Dr&&Ai(v)===b.type){a(h,b.sibling),x=n(b,m.props),Dd(x,m),x.return=h,h=x;break e}a(h,b);break}else t(h,b);b=b.sibling}m.type===Qs?(x=Pi(m.props.children,h.mode,x,m.key),x.return=h,h=x):(x=Df(m.type,m.key,m.props,null,h.mode,x),Dd(x,m),x.return=h,h=x)}return i(h);case Bd:e:{for(v=m.key;b!==null;){if(b.key===v)if(b.tag===4&&b.stateNode.containerInfo===m.containerInfo&&b.stateNode.implementation===m.implementation){a(h,b.sibling),x=n(b,m.children||[]),x.return=h,h=x;break e}else{a(h,b);break}else t(h,b);b=b.sibling}x=gh(m,h.mode,x),x.return=h,h=x}return i(h);case Dr:return m=Ai(m),y(h,b,m,x)}if(Hd(m))return g(h,b,m,x);if(Td(m)){if(v=Td(m),typeof v!="function")throw Error(W(150));return m=v.call(m),w(h,b,m,x)}if(typeof m.then=="function")return y(h,b,yf(m),x);if(m.$$typeof===Jn)return y(h,b,wf(h,m),x);vf(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,b!==null&&b.tag===6?(a(h,b.sibling),x=n(b,m),x.return=h,h=x):(a(h,b),x=mh(m,h.mode,x),x.return=h,h=x),i(h)):a(h,b)}return function(h,b,m,x){try{lu=0;var v=y(h,b,m,x);return ml=null,v}catch(S){if(S===Tl||S===Lp)throw S;var C=mo(29,S,null,h.mode);return C.lanes=x,C.return=h,C}}}var Ui=v1(!0),C1=v1(!1),Rr=!1;function $b(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ge&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=Zf(e),p1(e,null,a),t}return kp(e,o,t,a),Zf(e)}function Wd(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Fv(e,a)}}function bh(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var rb=!1;function Yd(){if(rb){var e=pl;if(e!==null)throw e}}function Kd(e,t,a,o){rb=!1;var n=e.updateQueue;Rr=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?r=u:i.next=u,i=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(r!==null){var f=n.baseState;i=0,d=u=l=null,s=r;do{var c=s.lane&-536870913,p=c!==s.lane;if(p?(Re&c)===c:(o&c)===c){c!==0&&c===yl&&(rb=!0),d!==null&&(d=d.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var g=e,w=s;c=t;var y=a;switch(w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(y,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,c=typeof g=="function"?g.call(y,f,c):g,c==null)break e;f=ut({},f,c);break e;case 2:Rr=!0}}c=s.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,i|=c;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;p=s,s=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),ai|=i,e.lanes=i,e.memoizedState=f}}function S1(e,t){if(typeof e!="function")throw Error(W(191,e));e.call(t)}function k1(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)S1(a[e],t)}var vl=kn(null),ep=kn(0);function Dy(e,t){e=dr,tt(ep,e),tt(vl,t),dr=e|t.baseLanes}function ib(){tt(ep,dr),tt(vl,vl.current)}function Qb(){dr=ep.current,ta(vl),ta(ep)}var vo=kn(null),Uo=null;function zr(e){var t=e.alternate;tt(Tt,Tt.current&1),tt(vo,e),Uo===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(Uo=e)}function sb(e){tt(Tt,Tt.current),tt(vo,e),Uo===null&&(Uo=e)}function L1(e){e.tag===22?(tt(Tt,Tt.current),tt(vo,e),Uo===null&&(Uo=e)):Or(e)}function Or(){tt(Tt,Tt.current),tt(vo,vo.current)}function po(e){ta(vo),Uo===e&&(Uo=null),ta(Tt)}var Tt=kn(0);function tp(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_b(a)||Ib(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ir=0,we=null,$e=null,Pt=null,ap=!1,gl=!1,qi=!1,op=0,du=0,hl=null,K4=0;function kt(){throw Error(W(321))}function Jb(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yo(e[a],t[a]))return!1;return!0}function ex(e,t,a,o,n,r){return ir=r,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,me.H=e===null||e.memoizedState===null?a2:cx,qi=!1,r=a(o,n),qi=!1,gl&&(r=I1(t,a,o,n)),_1(e),r}function _1(e){me.H=uu;var t=$e!==null&&$e.next!==null;if(ir=0,Pt=$e=we=null,ap=!1,du=0,hl=null,t)throw Error(W(300));e===null||Bt||(e=e.dependencies,e!==null&&Qf(e)&&(Bt=!0))}function I1(e,t,a,o){we=e;var n=0;do{if(gl&&(hl=null),du=0,gl=!1,25<=n)throw Error(W(301));if(n+=1,Pt=$e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}me.H=o2,r=t(a,o)}while(gl);return r}function Z4(){var e=me.H,t=e.useState()[0];return t=typeof t.then=="function"?Su(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(we.flags|=1024),t}function tx(){var e=op!==0;return op=0,e}function ax(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ox(e){if(ap){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ap=!1}ir=0,Pt=$e=we=null,gl=!1,du=op=0,hl=null}function Aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?we.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function At(){if($e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Pt===null?we.memoizedState:Pt.next;if(t!==null)Pt=t,$e=e;else{if(e===null)throw we.alternate===null?Error(W(467)):Error(W(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Pt===null?we.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function _p(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Su(e){var t=du;return du+=1,hl===null&&(hl=[]),e=y1(hl,e,t),t=we,(Pt===null?t.memoizedState:Pt.next)===null&&(t=t.alternate,me.H=t===null||t.memoizedState===null?a2:cx),e}function Ip(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Su(e);if(e.$$typeof===Jn)return fa(e)}throw Error(W(438,String(e)))}function nx(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=we.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_p(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=P3;return t.index++,a}function sr(e,t){return typeof t=="function"?t(e):t}function Pf(e){var t=At();return rx(t,$e,e)}function rx(e,t,a){var o=e.queue;if(o===null)throw Error(W(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var s=i=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Re&f)===f:(ir&f)===f){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===yl&&(d=!0);else if((ir&c)===c){u=u.next,c===yl&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=f,i=r):l=l.next=f,we.lanes|=c,ai|=c;f=u.action,qi&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=c,i=r):l=l.next=c,we.lanes|=f,ai|=f;u=u.next}while(u!==null&&u!==t);if(l===null?i=r:l.next=s,!yo(r,e.memoizedState)&&(Bt=!0,d&&(a=pl,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xh(e){var t=At(),a=t.queue;if(a===null)throw Error(W(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);yo(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function M1(e,t,a){var o=we,n=At(),r=Pe;if(r){if(a===void 0)throw Error(W(407));a=a()}else a=t();var i=!yo(($e||n).memoizedState,a);if(i&&(n.memoizedState=a,Bt=!0),n=n.queue,ix(T1.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||Pt!==null&&Pt.memoizedState.tag&1){if(o.flags|=2048,Cl(9,{destroy:void 0},E1.bind(null,o,n,a,t),null),Qe===null)throw Error(W(349));r||(ir&127)!==0||N1(o,t,a)}return a}function N1(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=_p(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function E1(e,t,a,o){t.value=a,t.getSnapshot=o,A1(t)&&D1(e)}function T1(e,t,a){return a(function(){A1(t)&&D1(e)})}function A1(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yo(e,a)}catch{return!0}}function D1(e){var t=Wi(e,2);t!==null&&Za(t,e,2)}function lb(e){var t=Aa();if(typeof e=="function"){var a=e;if(e=a(),qi){Hr(!0);try{a()}finally{Hr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t}function R1(e,t,a,o){return e.baseState=a,rx(e,$e,typeof o=="function"?o:sr)}function $4(e,t,a,o,n){if(Np(e))throw Error(W(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};me.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,P1(t,r)):(r.next=a.next,t.pending=a.next=r)}}function P1(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=me.T,i={};me.T=i;try{var s=a(n,o),l=me.S;l!==null&&l(i,s),Ry(e,t,s)}catch(u){db(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),me.T=r}}else try{r=a(n,o),Ry(e,t,r)}catch(u){db(e,t,u)}}function Ry(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Py(e,t,o)},function(o){return db(e,t,o)}):Py(e,t,a)}function Py(e,t,a){t.status="fulfilled",t.value=a,z1(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,P1(e,a)))}function db(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,z1(t),t=t.next;while(t!==o)}e.action=null}function z1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function O1(e,t){return t}function zy(e,t){if(Pe){var a=Qe.formState;if(a!==null){e:{var o=we;if(Pe){if(dt){t:{for(var n=dt,r=Fo;n.nodeType!==8;){if(!r){n=null;break t}if(n=qo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){dt=qo(n.nextSibling),o=n.data==="F!";break e}}ei(o)}o=!1}o&&(t=a[0])}}return a=Aa(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O1,lastRenderedState:t},a.queue=o,a=J1.bind(null,we,o),o.dispatch=a,o=lb(!1),r=ux.bind(null,we,!1,o.queue),o=Aa(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=$4.bind(null,we,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function Oy(e){var t=At();return B1(t,$e,e)}function B1(e,t,a){if(t=rx(e,t,O1)[0],e=Pf(sr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Su(t)}catch(i){throw i===Tl?Lp:i}else o=t;t=At();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(we.flags|=2048,Cl(9,{destroy:void 0},Q4.bind(null,n,a),null)),[o,r,e]}function Q4(e,t){e.action=t}function By(e){var t=At(),a=$e;if(a!==null)return B1(t,a,e);At(),t=t.memoizedState,a=At();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Cl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=we.updateQueue,t===null&&(t=_p(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function H1(){return At().memoizedState}function zf(e,t,a,o){var n=Aa();we.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,o===void 0?null:o)}function Mp(e,t,a,o){var n=At();o=o===void 0?null:o;var r=n.memoizedState.inst;$e!==null&&o!==null&&Jb(o,$e.memoizedState.deps)?n.memoizedState=Cl(t,r,a,o):(we.flags|=e,n.memoizedState=Cl(1|t,r,a,o))}function Hy(e,t){zf(8390656,8,e,t)}function ix(e,t){Mp(2048,8,e,t)}function J4(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=_p(),we.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function F1(e){var t=At().memoizedState;return J4({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(W(440));return t.impl.apply(void 0,arguments)}}function U1(e,t){return Mp(4,2,e,t)}function q1(e,t){return Mp(4,4,e,t)}function V1(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G1(e,t,a){a=a!=null?a.concat([e]):null,Mp(4,4,V1.bind(null,t,e),a)}function sx(){}function j1(e,t){var a=At();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Jb(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function X1(e,t){var a=At();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Jb(t,o[1]))return o[0];if(o=e(),qi){Hr(!0);try{e()}finally{Hr(!1)}}return a.memoizedState=[o,t],o}function lx(e,t,a){return a===void 0||(ir&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=R2(),we.lanes|=e,ai|=e,a)}function W1(e,t,a,o){return yo(a,t)?a:vl.current!==null?(e=lx(e,a,o),yo(e,t)||(Bt=!0),e):(ir&42)===0||(ir&1073741824)!==0&&(Re&261930)===0?(Bt=!0,e.memoizedState=a):(e=R2(),we.lanes|=e,ai|=e,t)}function Y1(e,t,a,o,n){var r=je.p;je.p=r!==0&&8>r?r:8;var i=me.T,s={};me.T=s,ux(e,!1,t,a);try{var l=n(),u=me.S;if(u!==null&&u(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Y4(l,o);Zd(e,t,d,wo(e))}else Zd(e,t,o,wo(e))}catch(f){Zd(e,t,{then:function(){},status:"rejected",reason:f},wo())}finally{je.p=r,i!==null&&s.types!==null&&(i.types=s.types),me.T=i}}function eE(){}function ub(e,t,a,o){if(e.tag!==5)throw Error(W(476));var n=K1(e).queue;Y1(e,n,t,Ri,a===null?eE:function(){return Z1(e),a(o)})}function K1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ri,baseState:Ri,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:Ri},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Z1(e){var t=K1(e);t.next===null&&(t=e.alternate.memoizedState),Zd(e,t.next.queue,{},wo())}function dx(){return fa(pu)}function $1(){return At().memoizedState}function Q1(){return At().memoizedState}function tE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wo();e=Xr(a);var o=Wr(t,e,a);o!==null&&(Za(o,t,a),Wd(o,t,a)),t={cache:Yb()},e.payload=t;return}t=t.return}}function aE(e,t,a){var o=wo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Np(e)?e2(t,a):(a=Gb(e,t,a,o),a!==null&&(Za(a,e,o),t2(a,t,o)))}function J1(e,t,a){var o=wo();Zd(e,t,a,o)}function Zd(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(e))e2(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,s=r(i,a);if(n.hasEagerState=!0,n.eagerState=s,yo(s,i))return kp(e,t,n,0),Qe===null&&Sp(),!1}catch{}if(a=Gb(e,t,n,o),a!==null)return Za(a,e,o),t2(a,t,o),!0}return!1}function ux(e,t,a,o){if(o={lane:2,revertLane:wx(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Np(e)){if(t)throw Error(W(479))}else t=Gb(e,a,o,2),t!==null&&Za(t,e,2)}function Np(e){var t=e.alternate;return e===we||t!==null&&t===we}function e2(e,t){gl=ap=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function t2(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Fv(e,a)}}var uu={readContext:fa,use:Ip,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};uu.useEffectEvent=kt;var a2={readContext:fa,use:Ip,useCallback:function(e,t){return Aa().memoizedState=[e,t===void 0?null:t],e},useContext:fa,useEffect:Hy,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zf(4194308,4,V1.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zf(4194308,4,e,t)},useInsertionEffect:function(e,t){zf(4,2,e,t)},useMemo:function(e,t){var a=Aa();t=t===void 0?null:t;var o=e();if(qi){Hr(!0);try{e()}finally{Hr(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Aa();if(a!==void 0){var n=a(t);if(qi){Hr(!0);try{a(t)}finally{Hr(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=aE.bind(null,we,e),[o.memoizedState,e]},useRef:function(e){var t=Aa();return e={current:e},t.memoizedState=e},useState:function(e){e=lb(e);var t=e.queue,a=J1.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:sx,useDeferredValue:function(e,t){var a=Aa();return lx(a,e,t)},useTransition:function(){var e=lb(!1);return e=Y1.bind(null,we,e.queue,!0,!1),Aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=we,n=Aa();if(Pe){if(a===void 0)throw Error(W(407));a=a()}else{if(a=t(),Qe===null)throw Error(W(349));(Re&127)!==0||N1(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,Hy(T1.bind(null,o,r,e),[e]),o.flags|=2048,Cl(9,{destroy:void 0},E1.bind(null,o,r,a,t),null),a},useId:function(){var e=Aa(),t=Qe.identifierPrefix;if(Pe){var a=vn,o=yn;a=(o&~(1<<32-xo(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=op++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=K4++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:dx,useFormState:zy,useActionState:zy,useOptimistic:function(e){var t=Aa();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ux.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:nx,useCacheRefresh:function(){return Aa().memoizedState=tE.bind(null,we)},useEffectEvent:function(e){var t=Aa(),a={impl:e};return t.memoizedState=a,function(){if((Ge&2)!==0)throw Error(W(440));return a.impl.apply(void 0,arguments)}}},cx={readContext:fa,use:Ip,useCallback:j1,useContext:fa,useEffect:ix,useImperativeHandle:G1,useInsertionEffect:U1,useLayoutEffect:q1,useMemo:X1,useReducer:Pf,useRef:H1,useState:function(){return Pf(sr)},useDebugValue:sx,useDeferredValue:function(e,t){var a=At();return W1(a,$e.memoizedState,e,t)},useTransition:function(){var e=Pf(sr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:Su(e),t]},useSyncExternalStore:M1,useId:$1,useHostTransitionStatus:dx,useFormState:Oy,useActionState:Oy,useOptimistic:function(e,t){var a=At();return R1(a,$e,e,t)},useMemoCache:nx,useCacheRefresh:Q1};cx.useEffectEvent=F1;var o2={readContext:fa,use:Ip,useCallback:j1,useContext:fa,useEffect:ix,useImperativeHandle:G1,useInsertionEffect:U1,useLayoutEffect:q1,useMemo:X1,useReducer:xh,useRef:H1,useState:function(){return xh(sr)},useDebugValue:sx,useDeferredValue:function(e,t){var a=At();return $e===null?lx(a,e,t):W1(a,$e.memoizedState,e,t)},useTransition:function(){var e=xh(sr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:Su(e),t]},useSyncExternalStore:M1,useId:$1,useHostTransitionStatus:dx,useFormState:By,useActionState:By,useOptimistic:function(e,t){var a=At();return $e!==null?R1(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nx,useCacheRefresh:Q1};o2.useEffectEvent=F1;function wh(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:ut({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cb={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=wo(),n=Xr(o);n.payload=t,a!=null&&(n.callback=a),t=Wr(e,n,o),t!==null&&(Za(t,e,o),Wd(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=wo(),n=Xr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Wr(e,n,o),t!==null&&(Za(t,e,o),Wd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wo(),o=Xr(a);o.tag=2,t!=null&&(o.callback=t),t=Wr(e,o,a),t!==null&&(Za(t,e,a),Wd(t,e,a))}};function Fy(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!ru(a,o)||!ru(n,r):!0}function Uy(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&cb.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=ut({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function n2(e){Kf(e)}function r2(e){console.error(e)}function i2(e){Kf(e)}function np(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function qy(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fb(e,t,a){return a=Xr(a),a.tag=3,a.payload={element:null},a.callback=function(){np(e,t)},a}function s2(e){return e=Xr(e),e.tag=3,e}function l2(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){qy(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){qy(t,a,o),typeof n!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var s=o.stack;this.componentDidCatch(o.value,{componentStack:s!==null?s:""})})}function oE(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&El(t,a,n,!0),a=vo.current,a!==null){switch(a.tag){case 31:case 13:return Uo===null?dp():a.alternate===null&&Lt===0&&(Lt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Jf?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Eh(e,o,n)),!1;case 22:return a.flags|=65536,o===Jf?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Eh(e,o,n)),!1}throw Error(W(435,a.tag))}return Eh(e,o,n),dp(),!1}if(Pe)return t=vo.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Jh&&(e=Error(W(422),{cause:o}),su(Ho(e,a)))):(o!==Jh&&(t=Error(W(423),{cause:o}),su(Ho(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Ho(o,a),n=fb(e.stateNode,o,n),bh(e,n),Lt!==4&&(Lt=2)),!1;var r=Error(W(520),{cause:o});if(r=Ho(r,a),Jd===null?Jd=[r]:Jd.push(r),Lt!==4&&(Lt=2),t===null)return!0;o=Ho(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=fb(a.stateNode,o,e),bh(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=s2(n),l2(n,e,a,o),bh(a,n),!1}a=a.return}while(a!==null);return!1}var fx=Error(W(461)),Bt=!1;function da(e,t,a,o){t.child=e===null?C1(t,null,a,o):Ui(t,e.child,a,o)}function Vy(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var s in o)s!=="ref"&&(i[s]=o[s])}else i=o;return Fi(t),o=ex(e,t,a,i,r,n),s=tx(),e!==null&&!Bt?(ax(e,t,n),lr(e,t,n)):(Pe&&s&&Xb(t),t.flags|=1,da(e,t,o,n),t.child)}function Gy(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!jb(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,d2(e,t,r,o,n)):(e=Df(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!px(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:ru,a(i,o)&&e.ref===t.ref)return lr(e,t,n)}return t.flags|=1,e=ar(r,o),e.ref=t.ref,e.return=t,t.child=e}function d2(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(ru(r,o)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=o=r,px(e,n))(e.flags&131072)!==0&&(Bt=!0);else return t.lanes=e.lanes,lr(e,t,n)}return pb(e,t,a,o,n)}function u2(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return jy(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rf(t,r!==null?r.cachePool:null),r!==null?Dy(t,r):ib(),L1(t);else return o=t.lanes=536870912,jy(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Rf(t,r.cachePool),Dy(t,r),Or(t),t.memoizedState=null):(e!==null&&Rf(t,null),ib(),Or(t));return da(e,t,n,a),t.child}function Ud(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jy(e,t,a,o,n){var r=Kb();return r=r===null?null:{parent:Ot._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Rf(t,null),ib(),L1(t),e!==null&&El(e,t,o,!0),t.childLanes=n,null}function Of(e,t){return t=rp({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xy(e,t,a){return Ui(t,e.child,null,a),e=Of(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function nE(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(o.mode==="hidden")return e=Of(t,o),t.lanes=536870912,Ud(null,e);if(sb(t),(e=dt)?(e=aC(e,Fo),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jr!==null?{id:yn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},a=g1(e),a.return=t,t.child=a,ca=t,dt=null)):e=null,e===null)throw ei(t);return t.lanes=536870912,null}return Of(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(sb(t),n)if(t.flags&256)t.flags&=-257,t=Xy(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(W(558));else if(Bt||El(e,t,a,!1),n=(a&e.childLanes)!==0,Bt||n){if(o=Qe,o!==null&&(i=Uv(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Wi(e,i),Za(o,e,i),fx;dp(),t=Xy(e,t,a)}else e=r.treeContext,dt=qo(i.nextSibling),ca=t,Pe=!0,jr=null,Fo=!1,e!==null&&b1(t,e),t=Of(t,o),t.flags|=4096;return t}return e=ar(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bf(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(W(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function pb(e,t,a,o,n){return Fi(t),a=ex(e,t,a,o,void 0,n),o=tx(),e!==null&&!Bt?(ax(e,t,n),lr(e,t,n)):(Pe&&o&&Xb(t),t.flags|=1,da(e,t,a,n),t.child)}function Wy(e,t,a,o,n,r){return Fi(t),t.updateQueue=null,a=I1(t,o,a,n),_1(e),o=tx(),e!==null&&!Bt?(ax(e,t,r),lr(e,t,r)):(Pe&&o&&Xb(t),t.flags|=1,da(e,t,a,r),t.child)}function Yy(e,t,a,o,n){if(Fi(t),t.stateNode===null){var r=il,i=a.contextType;typeof i=="object"&&i!==null&&(r=fa(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=cb,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},$b(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?fa(i):il,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(wh(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&cb.enqueueReplaceState(r,r.state,null),Kd(t,o,r,n),Yd(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,l=Vi(a,s);r.props=l;var u=r.context,d=a.contextType;i=il,typeof d=="object"&&d!==null&&(i=fa(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||u!==i)&&Uy(t,r,o,i),Rr=!1;var c=t.memoizedState;r.state=c,Kd(t,o,r,n),Yd(),u=t.memoizedState,s||c!==u||Rr?(typeof f=="function"&&(wh(t,a,f,o),u=t.memoizedState),(l=Rr||Fy(t,a,l,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,nb(e,t),i=t.memoizedProps,d=Vi(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,l=il,typeof u=="object"&&u!==null&&(l=fa(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==l)&&Uy(t,r,o,l),Rr=!1,c=t.memoizedState,r.state=c,Kd(t,o,r,n),Yd();var p=t.memoizedState;i!==f||c!==p||Rr||e!==null&&e.dependencies!==null&&Qf(e.dependencies)?(typeof s=="function"&&(wh(t,a,s,o),p=t.memoizedState),(d=Rr||Fy(t,a,d,o,c,p,l)||e!==null&&e.dependencies!==null&&Qf(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=l,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Bf(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Ui(t,e.child,null,n),t.child=Ui(t,null,a,n)):da(e,t,a,n),t.memoizedState=r.state,e=t.child):e=lr(e,t,n),e}function Ky(e,t,a,o){return Hi(),t.flags|=256,da(e,t,a,o),t.child}var yh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(e){return{baseLanes:e,cachePool:w1()}}function Ch(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=go),e}function c2(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(n?zr(t):Or(t),(e=dt)?(e=aC(e,Fo),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jr!==null?{id:yn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},a=g1(e),a.return=t,t.child=a,ca=t,dt=null)):e=null,e===null)throw ei(t);return Ib(e)?t.lanes=32:t.lanes=536870912,null}var s=o.children;return o=o.fallback,n?(Or(t),n=t.mode,s=rp({mode:"hidden",children:s},n),o=Pi(o,n,a,null),s.return=t,o.return=t,s.sibling=o,t.child=s,o=t.child,o.memoizedState=vh(a),o.childLanes=Ch(e,i,a),t.memoizedState=yh,Ud(null,o)):(zr(t),mb(t,s))}var l=e.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(r)t.flags&256?(zr(t),t.flags&=-257,t=Sh(e,t,a)):t.memoizedState!==null?(Or(t),t.child=e.child,t.flags|=128,t=null):(Or(t),s=o.fallback,n=t.mode,o=rp({mode:"visible",children:o.children},n),s=Pi(s,n,a,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,Ui(t,e.child,null,a),o=t.child,o.memoizedState=vh(a),o.childLanes=Ch(e,i,a),t.memoizedState=yh,t=Ud(null,o));else if(zr(t),Ib(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(W(419)),o.stack="",o.digest=i,su({value:o,source:null,stack:null}),t=Sh(e,t,a)}else if(Bt||El(e,t,a,!1),i=(a&e.childLanes)!==0,Bt||i){if(i=Qe,i!==null&&(o=Uv(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Wi(e,o),Za(i,e,o),fx;_b(s)||dp(),t=Sh(e,t,a)}else _b(s)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,dt=qo(s.nextSibling),ca=t,Pe=!0,jr=null,Fo=!1,e!==null&&b1(t,e),t=mb(t,o.children),t.flags|=4096);return t}return n?(Or(t),s=o.fallback,n=t.mode,l=e.child,u=l.sibling,o=ar(l,{mode:"hidden",children:o.children}),o.subtreeFlags=l.subtreeFlags&65011712,u!==null?s=ar(u,s):(s=Pi(s,n,a,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,Ud(null,o),o=t.child,s=e.child.memoizedState,s===null?s=vh(a):(n=s.cachePool,n!==null?(l=Ot._currentValue,n=n.parent!==l?{parent:l,pool:l}:n):n=w1(),s={baseLanes:s.baseLanes|a,cachePool:n}),o.memoizedState=s,o.childLanes=Ch(e,i,a),t.memoizedState=yh,Ud(e.child,o)):(zr(t),a=e.child,e=a.sibling,a=ar(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function mb(e,t){return t=rp({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rp(e,t){return e=mo(22,e,null,t),e.lanes=0,e}function Sh(e,t,a){return Ui(t,e.child,null,a),e=mb(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zy(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),tb(e.return,t,a)}function kh(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function f2(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=Tt.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,tt(Tt,i),da(e,t,o,a),o=Pe?iu:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zy(e,a,t);else if(e.tag===19)Zy(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&tp(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),kh(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&tp(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}kh(t,!0,a,null,r,o);break;case"together":kh(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function lr(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ai|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(El(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,a=ar(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ar(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function px(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qf(e)))}function rE(e,t,a){switch(t.tag){case 3:jf(t,t.stateNode.containerInfo),Pr(t,Ot,e.memoizedState.cache),Hi();break;case 27:case 5:qh(t);break;case 4:jf(t,t.stateNode.containerInfo);break;case 10:Pr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,sb(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(zr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?c2(e,t,a):(zr(t),e=lr(e,t,a),e!==null?e.sibling:null);zr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(El(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return f2(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(Tt,Tt.current),o)break;return null;case 22:return t.lanes=0,u2(e,t,a,t.pendingProps);case 24:Pr(t,Ot,e.memoizedState.cache)}return lr(e,t,a)}function p2(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Bt=!0;else{if(!px(e,a)&&(t.flags&128)===0)return Bt=!1,rE(e,t,a);Bt=(e.flags&131072)!==0}else Bt=!1,Pe&&(t.flags&1048576)!==0&&h1(t,iu,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ai(t.elementType),t.type=e,typeof e=="function")jb(e)?(o=Vi(e,o),t.tag=1,t=Yy(null,t,e,o,a)):(t.tag=0,t=pb(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Tb){t.tag=11,t=Vy(null,t,e,o,a);break e}else if(n===Ab){t.tag=14,t=Gy(null,t,e,o,a);break e}}throw t=Fh(e)||e,Error(W(306,t,""))}}return t;case 0:return pb(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Vi(o,t.pendingProps),Yy(e,t,o,n,a);case 3:e:{if(jf(t,t.stateNode.containerInfo),e===null)throw Error(W(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,nb(e,t),Kd(t,o,null,a);var i=t.memoizedState;if(o=i.cache,Pr(t,Ot,o),o!==r.cache&&ab(t,[Ot],a,!0),Yd(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ky(e,t,o,a);break e}else if(o!==n){n=Ho(Error(W(424)),t),su(n),t=Ky(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,dt=qo(e.firstChild),ca=t,Pe=!0,jr=null,Fo=!0,a=C1(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hi(),o===n){t=lr(e,t,a);break e}da(e,t,o,a)}t=t.child}return t;case 26:return Bf(e,t),e===null?(a=xv(t.type,null,t.pendingProps,null))?t.memoizedState=a:Pe||(a=t.type,e=t.pendingProps,o=pp(Gr.current).createElement(a),o[ua]=t,o[$a]=e,pa(o,a,e),ea(o),t.stateNode=o):t.memoizedState=xv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qh(t),e===null&&Pe&&(o=t.stateNode=oC(t.type,t.pendingProps,Gr.current),ca=t,Fo=!0,n=dt,ni(t.type)?(Mb=n,dt=qo(o.firstChild)):dt=n),da(e,t,t.pendingProps.children,a),Bf(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((n=o=dt)&&(o=DE(o,t.type,t.pendingProps,Fo),o!==null?(t.stateNode=o,ca=t,dt=qo(o.firstChild),Fo=!1,n=!0):n=!1),n||ei(t)),qh(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,kb(n,r)?o=null:i!==null&&kb(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=ex(e,t,Z4,null,null,a),pu._currentValue=n),Bf(e,t),da(e,t,o,a),t.child;case 6:return e===null&&Pe&&((e=a=dt)&&(a=RE(a,t.pendingProps,Fo),a!==null?(t.stateNode=a,ca=t,dt=null,e=!0):e=!1),e||ei(t)),null;case 13:return c2(e,t,a);case 4:return jf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ui(t,null,o,a):da(e,t,o,a),t.child;case 11:return Vy(e,t,t.type,t.pendingProps,a);case 7:return da(e,t,t.pendingProps,a),t.child;case 8:return da(e,t,t.pendingProps.children,a),t.child;case 12:return da(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Pr(t,t.type,o.value),da(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Fi(t),n=fa(n),o=o(n),t.flags|=1,da(e,t,o,a),t.child;case 14:return Gy(e,t,t.type,t.pendingProps,a);case 15:return d2(e,t,t.type,t.pendingProps,a);case 19:return f2(e,t,a);case 31:return nE(e,t,a);case 22:return u2(e,t,a,t.pendingProps);case 24:return Fi(t),o=fa(Ot),e===null?(n=Kb(),n===null&&(n=Qe,r=Yb(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},$b(t),Pr(t,Ot,n)):((e.lanes&a)!==0&&(nb(e,t),Kd(t,null,null,a),Yd()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Pr(t,Ot,o)):(o=r.cache,Pr(t,Ot,o),o!==n.cache&&ab(t,[Ot],a,!0))),da(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(W(156,t.tag))}function Wn(e){e.flags|=4}function Lh(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(O2())e.flags|=8192;else throw Oi=Jf,Zb}else e.flags&=-16777217}function $y(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!iC(t))if(O2())e.flags|=8192;else throw Oi=Jf,Zb}function Cf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bv():536870912,e.lanes|=t,Sl|=t)}function Rd(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function iE(e,t,a){var o=t.pendingProps;switch(Wb(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),or(Ot),bl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ys(t)?Wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hh())),lt(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Wn(t),r!==null?(lt(t),$y(t,r)):(lt(t),Lh(t,n,null,o,a))):r?r!==e.memoizedState?(Wn(t),lt(t),$y(t,r)):(lt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Wn(t),lt(t),Lh(t,n,e,o,a)),null;case 27:if(Xf(t),a=Gr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Wn(t);else{if(!o){if(t.stateNode===null)throw Error(W(166));return lt(t),null}e=Sn.current,Ys(t)?_y(t,e):(e=oC(n,o,a),t.stateNode=e,Wn(t))}return lt(t),null;case 5:if(Xf(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Wn(t);else{if(!o){if(t.stateNode===null)throw Error(W(166));return lt(t),null}if(r=Sn.current,Ys(t))_y(t,r);else{var i=pp(Gr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[ua]=t,r[$a]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(pa(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Wn(t)}}return lt(t),Lh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Wn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(W(166));if(e=Gr.current,Ys(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=ca,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[ua]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||J2(e.nodeValue,a)),e||ei(t,!0)}else e=pp(e).createTextNode(o),e[ua]=t,t.stateNode=e}return lt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Ys(t),a!==null){if(e===null){if(!o)throw Error(W(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(557));e[ua]=t}else Hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),e=!1}else a=hh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if((t.flags&128)!==0)throw Error(W(558))}return lt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ys(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(W(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(W(317));n[ua]=t}else Hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),n=!1}else n=hh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(po(t),t):(po(t),null)}return po(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Cf(t,t.updateQueue),lt(t),null);case 4:return bl(),e===null&&yx(t.stateNode.containerInfo),lt(t),null;case 10:return or(t.type),lt(t),null;case 19:if(ta(Tt),o=t.memoizedState,o===null)return lt(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)Rd(o,!1);else{if(Lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=tp(e),r!==null){for(t.flags|=128,Rd(o,!1),e=r.updateQueue,t.updateQueue=e,Cf(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)m1(a,e),a=a.sibling;return tt(Tt,Tt.current&1|2),Pe&&$n(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ho()>sp&&(t.flags|=128,n=!0,Rd(o,!1),t.lanes=4194304)}else{if(!n)if(e=tp(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Cf(t,e),Rd(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Pe)return lt(t),null}else 2*ho()-o.renderingStartTime>sp&&a!==536870912&&(t.flags|=128,n=!0,Rd(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ho(),e.sibling=null,a=Tt.current,tt(Tt,n?a&1|2:a&1),Pe&&$n(t,o.treeForkCount),e):(lt(t),null);case 22:case 23:return po(t),Qb(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),a=t.updateQueue,a!==null&&Cf(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&ta(zi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),or(Ot),lt(t),null;case 25:return null;case 30:return null}throw Error(W(156,t.tag))}function sE(e,t){switch(Wb(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(Ot),bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xf(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(W(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ta(Tt),null;case 4:return bl(),null;case 10:return or(t.type),null;case 22:case 23:return po(t),Qb(),e!==null&&ta(zi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return or(Ot),null;case 25:return null;default:return null}}function m2(e,t){switch(Wb(t),t.tag){case 3:or(Ot),bl();break;case 26:case 27:case 5:Xf(t);break;case 4:bl();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:ta(Tt);break;case 10:or(t.type);break;case 22:case 23:po(t),Qb(),e!==null&&ta(zi);break;case 24:or(Ot)}}function ku(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(s){Ke(t,t.return,s)}}function ti(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=t;var l=a,u=s;try{u()}catch(d){Ke(n,l,d)}}}o=o.next}while(o!==r)}}catch(d){Ke(t,t.return,d)}}function g2(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{k1(t,a)}catch(o){Ke(e,e.return,o)}}}function h2(e,t,a){a.props=Vi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ke(e,t,o)}}function $d(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ke(e,t,n)}}function Cn(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ke(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ke(e,t,n)}else a.current=null}function b2(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ke(e,e.return,n)}}function _h(e,t,a){try{var o=e.stateNode;IE(o,e.type,a,t),o[$a]=t}catch(n){Ke(e,e.return,n)}}function x2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ni(e.type)||e.tag===4}function Ih(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||x2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ni(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gb(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=er));else if(o!==4&&(o===27&&ni(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(gb(e,t,a),e=e.sibling;e!==null;)gb(e,t,a),e=e.sibling}function ip(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&ni(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ip(e,t,a),e=e.sibling;e!==null;)ip(e,t,a),e=e.sibling}function w2(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);pa(t,o,a),t[ua]=e,t[$a]=a}catch(r){Ke(e,e.return,r)}}var Qn=!1,zt=!1,Mh=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function lE(e,t){if(e=e.containerInfo,Cb=bp,e=i1(e),qb(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,s=-1,l=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(s=i+n),f!==r||o!==0&&f.nodeType!==3||(l=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(s=i),c===r&&++d===o&&(l=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=s===-1||l===-1?null:{start:s,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sb={focusedElem:e,selectionRange:a},bp=!1,Jt=t;Jt!==null;)if(t=Jt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Jt=e;else for(;Jt!==null;){switch(t=Jt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Vi(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){Ke(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Lb(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lb(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(W(163))}if(e=t.sibling,e!==null){e.return=t.return,Jt=e;break}Jt=t.return}}function y2(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Kn(e,a),o&4&&ku(5,a);break;case 1:if(Kn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){Ke(a,a.return,i)}else{var n=Vi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Ke(a,a.return,i)}}o&64&&g2(a),o&512&&$d(a,a.return);break;case 3:if(Kn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{k1(e,t)}catch(i){Ke(a,a.return,i)}}break;case 27:t===null&&o&4&&w2(a);case 26:case 5:Kn(e,a),t===null&&o&4&&b2(a),o&512&&$d(a,a.return);break;case 12:Kn(e,a);break;case 31:Kn(e,a),o&4&&S2(e,a);break;case 13:Kn(e,a),o&4&&k2(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bE.bind(null,a),PE(e,a))));break;case 22:if(o=a.memoizedState!==null||Qn,!o){t=t!==null&&t.memoizedState!==null||zt,n=Qn;var r=zt;Qn=o,(zt=t)&&!r?Zn(e,a,(a.subtreeFlags&8772)!==0):Kn(e,a),Qn=n,zt=r}break;case 30:break;default:Kn(e,a)}}function v2(e){var t=e.alternate;t!==null&&(e.alternate=null,v2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zb(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,Ya=!1;function Yn(e,t,a){for(a=a.child;a!==null;)C2(e,t,a),a=a.sibling}function C2(e,t,a){if(bo&&typeof bo.onCommitFiberUnmount=="function")try{bo.onCommitFiberUnmount(bu,a)}catch{}switch(a.tag){case 26:zt||Cn(a,t),Yn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:zt||Cn(a,t);var o=gt,n=Ya;ni(a.type)&&(gt=a.stateNode,Ya=!1),Yn(e,t,a),tu(a.stateNode),gt=o,Ya=n;break;case 5:zt||Cn(a,t);case 6:if(o=gt,n=Ya,gt=null,Yn(e,t,a),gt=o,Ya=n,gt!==null)if(Ya)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(a.stateNode)}catch(r){Ke(a,t,r)}else try{gt.removeChild(a.stateNode)}catch(r){Ke(a,t,r)}break;case 18:gt!==null&&(Ya?(e=gt,pv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Il(e)):pv(gt,a.stateNode));break;case 4:o=gt,n=Ya,gt=a.stateNode.containerInfo,Ya=!0,Yn(e,t,a),gt=o,Ya=n;break;case 0:case 11:case 14:case 15:ti(2,a,t),zt||ti(4,a,t),Yn(e,t,a);break;case 1:zt||(Cn(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&h2(a,t,o)),Yn(e,t,a);break;case 21:Yn(e,t,a);break;case 22:zt=(o=zt)||a.memoizedState!==null,Yn(e,t,a),zt=o;break;default:Yn(e,t,a)}}function S2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Il(e)}catch(a){Ke(t,t.return,a)}}}function k2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Il(e)}catch(a){Ke(t,t.return,a)}}function dE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qy),t;default:throw Error(W(435,e.tag))}}function Sf(e,t){var a=dE(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=xE.bind(null,e,o);o.then(n,n)}})}function Xa(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 27:if(ni(s.type)){gt=s.stateNode,Ya=!1;break e}break;case 5:gt=s.stateNode,Ya=!1;break e;case 3:case 4:gt=s.stateNode.containerInfo,Ya=!0;break e}s=s.return}if(gt===null)throw Error(W(160));C2(r,i,n),gt=null,Ya=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)L2(t,e),t=t.sibling}var $o=null;function L2(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xa(t,e),Wa(e),o&4&&(ti(3,e,e.return),ku(3,e),ti(5,e,e.return));break;case 1:Xa(t,e),Wa(e),o&512&&(zt||a===null||Cn(a,a.return)),o&64&&Qn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=$o;if(Xa(t,e),Wa(e),o&512&&(zt||a===null||Cn(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[yu]||r[ua]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),pa(r,o,a),r[ua]=e,ea(r),o=r;break e;case"link":var i=yv("link","href",n).get(o+(a.href||""));if(i){for(var s=0;s<i.length;s++)if(r=i[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(s,1);break t}}r=n.createElement(o),pa(r,o,a),n.head.appendChild(r);break;case"meta":if(i=yv("meta","content",n).get(o+(a.content||""))){for(s=0;s<i.length;s++)if(r=i[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(s,1);break t}}r=n.createElement(o),pa(r,o,a),n.head.appendChild(r);break;default:throw Error(W(468,o))}r[ua]=e,ea(r),o=r}e.stateNode=o}else vv(n,e.type,e.stateNode);else e.stateNode=wv(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?vv(n,e.type,e.stateNode):wv(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&_h(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xa(t,e),Wa(e),o&512&&(zt||a===null||Cn(a,a.return)),a!==null&&o&4&&_h(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xa(t,e),Wa(e),o&512&&(zt||a===null||Cn(a,a.return)),e.flags&32){n=e.stateNode;try{wl(n,"")}catch(g){Ke(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,_h(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Mh=!0);break;case 6:if(Xa(t,e),Wa(e),o&4){if(e.stateNode===null)throw Error(W(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ke(e,e.return,g)}}break;case 3:if(Uf=null,n=$o,$o=mp(t.containerInfo),Xa(t,e),$o=n,Wa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Il(t.containerInfo)}catch(g){Ke(e,e.return,g)}Mh&&(Mh=!1,_2(e));break;case 4:o=$o,$o=mp(e.stateNode.containerInfo),Xa(t,e),Wa(e),$o=o;break;case 12:Xa(t,e),Wa(e);break;case 31:Xa(t,e),Wa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 13:Xa(t,e),Wa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ep=ho()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 22:n=e.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=Qn,d=zt;if(Qn=u||n,zt=d||l,Xa(t,e),zt=d,Qn=u,Wa(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||l||Qn||zt||Di(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){l=a=t;try{if(r=l.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=l.stateNode;var f=l.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;s.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){Ke(l,l.return,g)}}}else if(t.tag===6){if(a===null){l=t;try{l.stateNode.nodeValue=n?"":l.memoizedProps}catch(g){Ke(l,l.return,g)}}}else if(t.tag===18){if(a===null){l=t;try{var p=l.stateNode;n?mv(p,!0):mv(l.stateNode,!1)}catch(g){Ke(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sf(e,a))));break;case 19:Xa(t,e),Wa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 30:break;case 21:break;default:Xa(t,e),Wa(e)}}function Wa(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(x2(o)){a=o;break}o=o.return}if(a==null)throw Error(W(160));switch(a.tag){case 27:var n=a.stateNode,r=Ih(e);ip(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(wl(i,""),a.flags&=-33);var s=Ih(e);ip(e,s,i);break;case 3:case 4:var l=a.stateNode.containerInfo,u=Ih(e);gb(e,u,l);break;default:throw Error(W(161))}}catch(d){Ke(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_2(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)y2(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ti(4,t,t.return),Di(t);break;case 1:Cn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&h2(t,t.return,a),Di(t);break;case 27:tu(t.stateNode);case 26:case 5:Cn(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function Zn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Zn(n,r,a),ku(4,r);break;case 1:if(Zn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ke(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var s=o.stateNode;try{var l=n.shared.hiddenCallbacks;if(l!==null)for(n.shared.hiddenCallbacks=null,n=0;n<l.length;n++)S1(l[n],s)}catch(u){Ke(o,o.return,u)}}a&&i&64&&g2(r),$d(r,r.return);break;case 27:w2(r);case 26:case 5:Zn(n,r,a),a&&o===null&&i&4&&b2(r),$d(r,r.return);break;case 12:Zn(n,r,a);break;case 31:Zn(n,r,a),a&&i&4&&S2(n,r);break;case 13:Zn(n,r,a),a&&i&4&&k2(n,r);break;case 22:r.memoizedState===null&&Zn(n,r,a),$d(r,r.return);break;case 30:break;default:Zn(n,r,a)}t=t.sibling}}function mx(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Cu(a))}function gx(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cu(e))}function Zo(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)I2(e,t,a,o),t=t.sibling}function I2(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Zo(e,t,a,o),n&2048&&ku(9,t);break;case 1:Zo(e,t,a,o);break;case 3:Zo(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cu(e)));break;case 12:if(n&2048){Zo(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,s=r.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ke(t,t.return,l)}}else Zo(e,t,a,o);break;case 31:Zo(e,t,a,o);break;case 13:Zo(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Zo(e,t,a,o):Qd(e,t):r._visibility&2?Zo(e,t,a,o):(r._visibility|=2,Zs(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&mx(i,t);break;case 24:Zo(e,t,a,o),n&2048&&gx(t.alternate,t);break;default:Zo(e,t,a,o)}}function Zs(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,s=a,l=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:Zs(r,i,s,l,n),ku(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?Zs(r,i,s,l,n):Qd(r,i):(d._visibility|=2,Zs(r,i,s,l,n)),n&&u&2048&&mx(i.alternate,i);break;case 24:Zs(r,i,s,l,n),n&&u&2048&&gx(i.alternate,i);break;default:Zs(r,i,s,l,n)}t=t.sibling}}function Qd(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:Qd(a,o),n&2048&&mx(o.alternate,o);break;case 24:Qd(a,o),n&2048&&gx(o.alternate,o);break;default:Qd(a,o)}t=t.sibling}}var qd=8192;function Ks(e,t,a){if(e.subtreeFlags&qd)for(e=e.child;e!==null;)M2(e,t,a),e=e.sibling}function M2(e,t,a){switch(e.tag){case 26:Ks(e,t,a),e.flags&qd&&e.memoizedState!==null&&WE(a,$o,e.memoizedState,e.memoizedProps);break;case 5:Ks(e,t,a);break;case 3:case 4:var o=$o;$o=mp(e.stateNode.containerInfo),Ks(e,t,a),$o=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=qd,qd=16777216,Ks(e,t,a),qd=o):Ks(e,t,a));break;default:Ks(e,t,a)}}function N2(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Jt=o,T2(o,e)}N2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E2(e),e=e.sibling}function E2(e){switch(e.tag){case 0:case 11:case 15:Pd(e),e.flags&2048&&ti(9,e,e.return);break;case 3:Pd(e);break;case 12:Pd(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hf(e)):Pd(e);break;default:Pd(e)}}function Hf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Jt=o,T2(o,e)}N2(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ti(8,t,t.return),Hf(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Hf(t));break;default:Hf(t)}e=e.sibling}}function T2(e,t){for(;Jt!==null;){var a=Jt;switch(a.tag){case 0:case 11:case 15:ti(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Cu(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jt=o;else e:for(a=e;Jt!==null;){o=Jt;var n=o.sibling,r=o.return;if(v2(o),o===a){Jt=null;break e}if(n!==null){n.return=r,Jt=n;break e}Jt=r}}}var uE={getCacheForType:function(e){var t=fa(Ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return fa(Ot).controller.signal}},cE=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Qe=null,Te=null,Re=0,Ye=0,fo=null,Ur=!1,Al=!1,hx=!1,dr=0,Lt=0,ai=0,Bi=0,bx=0,go=0,Sl=0,Jd=null,Ka=null,hb=!1,Ep=0,A2=0,sp=1/0,lp=null,Yr=null,jt=0,Kr=null,kl=null,nr=0,bb=0,xb=null,D2=null,eu=0,wb=null;function wo(){return(Ge&2)!==0&&Re!==0?Re&-Re:me.T!==null?wx():qv()}function R2(){if(go===0)if((Re&536870912)===0||Pe){var e=pf;pf<<=1,(pf&3932160)===0&&(pf=262144),go=e}else go=536870912;return e=vo.current,e!==null&&(e.flags|=32),go}function Za(e,t,a){(e===Qe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Ll(e,0),qr(e,Re,go,!1)),wu(e,a),((Ge&2)===0||e!==Qe)&&(e===Qe&&((Ge&2)===0&&(Bi|=a),Lt===4&&qr(e,Re,go,!1)),Ln(e))}function P2(e,t,a){if((Ge&6)!==0)throw Error(W(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||xu(e,t),n=o?mE(e,t):Nh(e,t,!0),r=o;do{if(n===0){Al&&!o&&qr(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!fE(a)){n=Nh(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var s=e;n=Jd;var l=s.current.memoizedState.isDehydrated;if(l&&(Ll(s,i).flags|=256),i=Nh(s,i,!1),i!==2){if(hx&&!l){s.errorRecoveryDisabledLanes|=r,Bi|=r,n=4;break e}r=Ka,Ka=n,r!==null&&(Ka===null?Ka=r:Ka.push.apply(Ka,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){Ll(e,0),qr(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(W(345));case 4:if((t&4194048)!==t)break;case 6:qr(o,t,go,!Ur);break e;case 2:Ka=null;break;case 3:case 5:break;default:throw Error(W(329))}if((t&62914560)===t&&(n=Ep+300-ho(),10<n)){if(qr(o,t,go,!Ur),wp(o,0,!0)!==0)break e;nr=t,o.timeoutHandle=tC(Jy.bind(null,o,a,Ka,lp,hb,t,go,Bi,Sl,Ur,r,"Throttled",-0,0),n);break e}Jy(o,a,Ka,lp,hb,t,go,Bi,Sl,Ur,r,null,-0,0)}}break}while(!0);Ln(e)}function Jy(e,t,a,o,n,r,i,s,l,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:er},M2(t,r,f);var g=(r&62914560)===r?Ep-ho():(r&4194048)===r?A2-ho():0;if(g=YE(f,g),g!==null){nr=r,e.cancelPendingCommit=g(tv.bind(null,e,t,r,a,o,n,i,s,l,d,f,null,c,p)),qr(e,r,i,!u);return}}tv(e,t,r,a,o,n,i,s,l)}function fE(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!yo(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qr(e,t,a,o){t&=~bx,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-xo(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&Hv(e,a,t)}function Tp(){return(Ge&6)===0?(Lu(0,!1),!1):!0}function xx(){if(Te!==null){if(Ye===0)var e=Te.return;else e=Te,tr=Yi=null,ox(e),ml=null,lu=0,e=Te;for(;e!==null;)m2(e.alternate,e),e=e.return;Te=null}}function Ll(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,EE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nr=0,xx(),Qe=e,Te=a=ar(e.current,null),Re=t,Ye=0,fo=null,Ur=!1,Al=xu(e,t),hx=!1,Sl=go=bx=Bi=ai=Lt=0,Ka=Jd=null,hb=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-xo(o),r=1<<n;t|=e[n],o&=~r}return dr=t,Sp(),a}function z2(e,t){we=null,me.H=uu,t===Tl||t===Lp?(t=Ty(),Ye=3):t===Zb?(t=Ty(),Ye=4):Ye=t===fx?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fo=t,Te===null&&(Lt=1,np(e,Ho(t,e.current)))}function O2(){var e=vo.current;return e===null?!0:(Re&4194048)===Re?Uo===null:(Re&62914560)===Re||(Re&536870912)!==0?e===Uo:!1}function B2(){var e=me.H;return me.H=uu,e===null?uu:e}function H2(){var e=me.A;return me.A=uE,e}function dp(){Lt=4,Ur||(Re&4194048)!==Re&&vo.current!==null||(Al=!0),(ai&134217727)===0&&(Bi&134217727)===0||Qe===null||qr(Qe,Re,go,!1)}function Nh(e,t,a){var o=Ge;Ge|=2;var n=B2(),r=H2();(Qe!==e||Re!==t)&&(lp=null,Ll(e,t)),t=!1;var i=Lt;e:do try{if(Ye!==0&&Te!==null){var s=Te,l=fo;switch(Ye){case 8:xx(),i=6;break e;case 3:case 2:case 9:case 6:vo.current===null&&(t=!0);var u=Ye;if(Ye=0,fo=null,dl(e,s,l,u),a&&Al){i=0;break e}break;default:u=Ye,Ye=0,fo=null,dl(e,s,l,u)}}pE(),i=Lt;break}catch(d){z2(e,d)}while(!0);return t&&e.shellSuspendCounter++,tr=Yi=null,Ge=o,me.H=n,me.A=r,Te===null&&(Qe=null,Re=0,Sp()),i}function pE(){for(;Te!==null;)F2(Te)}function mE(e,t){var a=Ge;Ge|=2;var o=B2(),n=H2();Qe!==e||Re!==t?(lp=null,sp=ho()+500,Ll(e,t)):Al=xu(e,t);e:do try{if(Ye!==0&&Te!==null){t=Te;var r=fo;t:switch(Ye){case 1:Ye=0,fo=null,dl(e,t,r,1);break;case 2:case 9:if(Ey(r)){Ye=0,fo=null,ev(t);break}t=function(){Ye!==2&&Ye!==9||Qe!==e||(Ye=7),Ln(e)},r.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Ey(r)?(Ye=0,fo=null,ev(t)):(Ye=0,fo=null,dl(e,t,r,7));break;case 5:var i=null;switch(Te.tag){case 26:i=Te.memoizedState;case 5:case 27:var s=Te;if(i?iC(i):s.stateNode.complete){Ye=0,fo=null;var l=s.sibling;if(l!==null)Te=l;else{var u=s.return;u!==null?(Te=u,Ap(u)):Te=null}break t}}Ye=0,fo=null,dl(e,t,r,5);break;case 6:Ye=0,fo=null,dl(e,t,r,6);break;case 8:xx(),Lt=6;break e;default:throw Error(W(462))}}gE();break}catch(d){z2(e,d)}while(!0);return tr=Yi=null,me.H=o,me.A=n,Ge=a,Te!==null?0:(Qe=null,Re=0,Sp(),Lt)}function gE(){for(;Te!==null&&!B3();)F2(Te)}function F2(e){var t=p2(e.alternate,e,dr);e.memoizedProps=e.pendingProps,t===null?Ap(e):Te=t}function ev(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wy(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Wy(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:ox(t);default:m2(a,t),t=Te=m1(t,dr),t=p2(a,t,dr)}e.memoizedProps=e.pendingProps,t===null?Ap(e):Te=t}function dl(e,t,a,o){tr=Yi=null,ox(t),ml=null,lu=0;var n=t.return;try{if(oE(e,n,t,a,Re)){Lt=1,np(e,Ho(a,e.current)),Te=null;return}}catch(r){if(n!==null)throw Te=n,r;Lt=1,np(e,Ho(a,e.current)),Te=null;return}t.flags&32768?(Pe||o===1?e=!0:Al||(Re&536870912)!==0?e=!1:(Ur=e=!0,(o===2||o===9||o===3||o===6)&&(o=vo.current,o!==null&&o.tag===13&&(o.flags|=16384))),U2(t,e)):Ap(t)}function Ap(e){var t=e;do{if((t.flags&32768)!==0){U2(t,Ur);return}e=t.return;var a=iE(t.alternate,t,dr);if(a!==null){Te=a;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Lt===0&&(Lt=5)}function U2(e,t){do{var a=sE(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);Lt=6,Te=null}function tv(e,t,a,o,n,r,i,s,l){e.cancelPendingCommit=null;do Dp();while(jt!==0);if((Ge&6)!==0)throw Error(W(327));if(t!==null){if(t===e.current)throw Error(W(177));if(r=t.lanes|t.childLanes,r|=Vb,Y3(e,a,r,i,s,l),e===Qe&&(Te=Qe=null,Re=0),kl=t,Kr=e,nr=a,bb=r,xb=n,D2=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wE(Wf,function(){return X2(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=me.T,me.T=null,n=je.p,je.p=2,i=Ge,Ge|=4;try{lE(e,t,a)}finally{Ge=i,je.p=n,me.T=o}}jt=1,q2(),V2(),G2()}}function q2(){if(jt===1){jt=0;var e=Kr,t=kl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=me.T,me.T=null;var o=je.p;je.p=2;var n=Ge;Ge|=4;try{L2(t,e);var r=Sb,i=i1(e.containerInfo),s=r.focusedElem,l=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&r1(s.ownerDocument.documentElement,s)){if(l!==null&&qb(s)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(d,s.value.length);else{var f=s.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=s.textContent.length,w=Math.min(l.start,g),y=l.end===void 0?w:Math.min(l.end,g);!p.extend&&w>y&&(i=y,y=w,w=i);var h=Sy(s,w),b=Sy(s,y);if(h&&b&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),w>y?(p.addRange(m),p.extend(b.node,b.offset)):(m.setEnd(b.node,b.offset),p.addRange(m))}}}}for(f=[],p=s;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<f.length;s++){var x=f[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}bp=!!Cb,Sb=Cb=null}finally{Ge=n,je.p=o,me.T=a}}e.current=t,jt=2}}function V2(){if(jt===2){jt=0;var e=Kr,t=kl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=me.T,me.T=null;var o=je.p;je.p=2;var n=Ge;Ge|=4;try{y2(e,t.alternate,t)}finally{Ge=n,je.p=o,me.T=a}}jt=3}}function G2(){if(jt===4||jt===3){jt=0,H3();var e=Kr,t=kl,a=nr,o=D2;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?jt=5:(jt=0,kl=Kr=null,j2(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Yr=null),Pb(a),t=t.stateNode,bo&&typeof bo.onCommitFiberRoot=="function")try{bo.onCommitFiberRoot(bu,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=me.T,n=je.p,je.p=2,me.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var s=o[i];r(s.value,{componentStack:s.stack})}}finally{me.T=t,je.p=n}}(nr&3)!==0&&Dp(),Ln(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===wb?eu++:(eu=0,wb=e):eu=0,Lu(0,!1)}}function j2(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cu(t)))}function Dp(){return q2(),V2(),G2(),X2()}function X2(){if(jt!==5)return!1;var e=Kr,t=bb;bb=0;var a=Pb(nr),o=me.T,n=je.p;try{je.p=32>a?32:a,me.T=null,a=xb,xb=null;var r=Kr,i=nr;if(jt=0,kl=Kr=null,nr=0,(Ge&6)!==0)throw Error(W(331));var s=Ge;if(Ge|=4,E2(r.current),I2(r,r.current,i,a),Ge=s,Lu(0,!1),bo&&typeof bo.onPostCommitFiberRoot=="function")try{bo.onPostCommitFiberRoot(bu,r)}catch{}return!0}finally{je.p=n,me.T=o,j2(e,t)}}function av(e,t,a){t=Ho(a,t),t=fb(e.stateNode,t,2),e=Wr(e,t,2),e!==null&&(wu(e,2),Ln(e))}function Ke(e,t,a){if(e.tag===3)av(e,e,a);else for(;t!==null;){if(t.tag===3){av(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yr===null||!Yr.has(o))){e=Ho(a,e),a=s2(2),o=Wr(t,a,2),o!==null&&(l2(a,o,t,e),wu(o,2),Ln(o));break}}t=t.return}}function Eh(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new cE;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(hx=!0,n.add(a),e=hE.bind(null,e,t,a),t.then(e,e))}function hE(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Re&a)===a&&(Lt===4||Lt===3&&(Re&62914560)===Re&&300>ho()-Ep?(Ge&2)===0&&Ll(e,0):bx|=a,Sl===Re&&(Sl=0)),Ln(e)}function W2(e,t){t===0&&(t=Bv()),e=Wi(e,t),e!==null&&(wu(e,t),Ln(e))}function bE(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),W2(e,a)}function xE(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(W(314))}o!==null&&o.delete(t),W2(e,a)}function wE(e,t){return Db(e,t)}var up=null,$s=null,yb=!1,cp=!1,Th=!1,Vr=0;function Ln(e){e!==$s&&e.next===null&&($s===null?up=$s=e:$s=$s.next=e),cp=!0,yb||(yb=!0,vE())}function Lu(e,t){if(!Th&&cp){Th=!0;do for(var a=!1,o=up;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,s=o.pingedLanes;r=(1<<31-xo(42|e)+1)-1,r&=n&~(i&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,ov(o,r))}else r=Re,r=wp(o,o===Qe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||xu(o,r)||(a=!0,ov(o,r));o=o.next}while(a);Th=!1}}function yE(){Y2()}function Y2(){cp=yb=!1;var e=0;Vr!==0&&NE()&&(e=Vr);for(var t=ho(),a=null,o=up;o!==null;){var n=o.next,r=K2(o,t);r===0?(o.next=null,a===null?up=n:a.next=n,n===null&&($s=a)):(a=o,(e!==0||(r&3)!==0)&&(cp=!0)),o=n}jt!==0&&jt!==5||Lu(e,!1),Vr!==0&&(Vr=0)}function K2(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-xo(r),s=1<<i,l=n[i];l===-1?((s&a)===0||(s&o)!==0)&&(n[i]=W3(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}if(t=Qe,a=Re,a=wp(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ih(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xu(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&ih(o),Pb(a)){case 2:case 8:a=zv;break;case 32:a=Wf;break;case 268435456:a=Ov;break;default:a=Wf}return o=Z2.bind(null,e),a=Db(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&ih(o),e.callbackPriority=2,e.callbackNode=null,2}function Z2(e,t){if(jt!==0&&jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dp()&&e.callbackNode!==a)return null;var o=Re;return o=wp(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(P2(e,o,t),K2(e,ho()),e.callbackNode!=null&&e.callbackNode===a?Z2.bind(null,e):null)}function ov(e,t){if(Dp())return null;P2(e,t,!0)}function vE(){TE(function(){(Ge&6)!==0?Db(Pv,yE):Y2()})}function wx(){if(Vr===0){var e=yl;e===0&&(e=ff,ff<<=1,(ff&261888)===0&&(ff=256)),Vr=e}return Vr}function nv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ef(""+e)}function rv(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function CE(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=nv((n[$a]||null).action),i=o.submitter;i&&(t=(t=i[$a]||null)?nv(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var s=new yp("action","action",null,o,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Vr!==0){var l=i?rv(n,i):new FormData(n);ub(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(s.preventDefault(),l=i?rv(n,i):new FormData(n),ub(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(kf=0;kf<Qh.length;kf++)Lf=Qh[kf],iv=Lf.toLowerCase(),sv=Lf[0].toUpperCase()+Lf.slice(1),Qo(iv,"on"+sv);var Lf,iv,sv,kf;Qo(l1,"onAnimationEnd");Qo(d1,"onAnimationIteration");Qo(u1,"onAnimationStart");Qo("dblclick","onDoubleClick");Qo("focusin","onFocus");Qo("focusout","onBlur");Qo(F4,"onTransitionRun");Qo(U4,"onTransitionStart");Qo(q4,"onTransitionCancel");Qo(c1,"onTransitionEnd");xl("onMouseEnter",["mouseout","mouseover"]);xl("onMouseLeave",["mouseout","mouseover"]);xl("onPointerEnter",["pointerout","pointerover"]);xl("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cu));function $2(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(d){Kf(d)}n.currentTarget=null,r=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(d){Kf(d)}n.currentTarget=null,r=l}}}}function Ee(e,t){var a=t[Gh];a===void 0&&(a=t[Gh]=new Set);var o=e+"__bubble";a.has(o)||(Q2(t,e,2,!1),a.add(o))}function Ah(e,t,a){var o=0;t&&(o|=4),Q2(a,e,o,t)}var _f="_reactListening"+Math.random().toString(36).slice(2);function yx(e){if(!e[_f]){e[_f]=!0,Vv.forEach(function(a){a!=="selectionchange"&&(SE.has(a)||Ah(a,!1,e),Ah(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_f]||(t[_f]=!0,Ah("selectionchange",!1,t))}}function Q2(e,t,a,o){switch(cC(t)){case 2:var n=$E;break;case 8:n=QE;break;default:n=kx}a=n.bind(null,t,a,e),n=void 0,!Kh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Dh(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=el(s),i===null)return;if(l=i.tag,l===5||l===6||l===26||l===27){o=r=i;continue e}s=s.parentNode}}o=o.return}$v(function(){var u=r,d=Bb(a),f=[];e:{var c=f1.get(e);if(c!==void 0){var p=yp,g=e;switch(e){case"keypress":if(Af(a)===0)break e;case"keydown":case"keyup":p=x4;break;case"focusin":g="focus",p=ch;break;case"focusout":g="blur",p=ch;break;case"beforeblur":case"afterblur":p=ch;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=my;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=i4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=v4;break;case l1:case d1:case u1:p=d4;break;case c1:p=S4;break;case"scroll":case"scrollend":p=n4;break;case"wheel":p=L4;break;case"copy":case"cut":case"paste":p=c4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hy;break;case"toggle":case"beforetoggle":p=I4}var w=(t&4)!==0,y=!w&&(e==="scroll"||e==="scrollend"),h=w?c!==null?c+"Capture":null:c;w=[];for(var b=u,m;b!==null;){var x=b;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||h===null||(x=ou(b,h),x!=null&&w.push(fu(b,x,m))),y)break;b=b.return}0<w.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Yh&&(g=a.relatedTarget||a.fromElement)&&(el(g)||g[Ml]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?el(g):null,g!==null&&(y=hu(g),w=g.tag,g!==y||w!==5&&w!==27&&w!==6)&&(g=null)):(p=null,g=u),p!==g)){if(w=my,x="onMouseLeave",h="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=hy,x="onPointerLeave",h="onPointerEnter",b="pointer"),y=p==null?c:Fd(p),m=g==null?c:Fd(g),c=new w(x,b+"leave",p,a,d),c.target=y,c.relatedTarget=m,x=null,el(d)===u&&(w=new w(h,b+"enter",g,a,d),w.target=m,w.relatedTarget=y,x=w),y=x,p&&g)t:{for(w=kE,h=p,b=g,m=0,x=h;x;x=w(x))m++;x=0;for(var v=b;v;v=w(v))x++;for(;0<m-x;)h=w(h),m--;for(;0<x-m;)b=w(b),x--;for(;m--;){if(h===b||b!==null&&h===b.alternate){w=h;break t}h=w(h),b=w(b)}w=null}else w=null;p!==null&&lv(f,c,p,w,!1),g!==null&&y!==null&&lv(f,y,g,w,!0)}}e:{if(c=u?Fd(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=yy;else if(wy(c))if(o1)C=O4;else{C=P4;var S=R4}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Ob(u.elementType)&&(C=yy):C=z4;if(C&&(C=C(e,u))){a1(f,C,a,d);break e}S&&S(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Wh(c,"number",c.value)}switch(S=u?Fd(u):window,e){case"focusin":(wy(S)||S.contentEditable==="true")&&(ol=S,Zh=u,jd=null);break;case"focusout":jd=Zh=ol=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,ky(f,a,d);break;case"selectionchange":if(H4)break;case"keydown":case"keyup":ky(f,a,d)}var k;if(Ub)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else al?e1(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Jv&&a.locale!=="ko"&&(al||_!=="onCompositionStart"?_==="onCompositionEnd"&&al&&(k=Qv()):(Fr=d,Hb="value"in Fr?Fr.value:Fr.textContent,al=!0)),S=fp(u,_),0<S.length&&(_=new gy(_,e,null,a,d),f.push({event:_,listeners:S}),k?_.data=k:(k=t1(a),k!==null&&(_.data=k)))),(k=N4?E4(e,a):T4(e,a))&&(_=fp(u,"onBeforeInput"),0<_.length&&(S=new gy("onBeforeInput","beforeinput",null,a,d),f.push({event:S,listeners:_}),S.data=k)),CE(f,e,u,a,d)}$2(f,t)})}function fu(e,t,a){return{instance:e,listener:t,currentTarget:a}}function fp(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=ou(e,a),n!=null&&o.unshift(fu(e,n,r)),n=ou(e,t),n!=null&&o.push(fu(e,n,r))),e.tag===3)return o;e=e.return}return[]}function kE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lv(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var s=a,l=s.alternate,u=s.stateNode;if(s=s.tag,l!==null&&l===o)break;s!==5&&s!==26&&s!==27||u===null||(l=u,n?(u=ou(a,r),u!=null&&i.unshift(fu(a,u,l))):n||(u=ou(a,r),u!=null&&i.push(fu(a,u,l)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var LE=/\r\n?/g,_E=/\u0000|\uFFFD/g;function dv(e){return(typeof e=="string"?e:""+e).replace(LE,`
`).replace(_E,"")}function J2(e,t){return t=dv(t),dv(e)===t}function Ze(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||wl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&wl(e,""+o);break;case"className":gf(e,"class",o);break;case"tabIndex":gf(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":gf(e,a,o);break;case"style":Zv(e,o,r);break;case"data":if(t!=="object"){gf(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ef(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ze(e,t,"name",n.name,n,null),Ze(e,t,"formEncType",n.formEncType,n,null),Ze(e,t,"formMethod",n.formMethod,n,null),Ze(e,t,"formTarget",n.formTarget,n,null)):(Ze(e,t,"encType",n.encType,n,null),Ze(e,t,"method",n.method,n,null),Ze(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ef(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=er);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(W(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(W(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ef(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Nf(e,"popover",o);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Nf(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=a4.get(a)||a,Nf(e,a,o))}}function vb(e,t,a,o,n,r){switch(a){case"style":Zv(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(W(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(W(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wl(e,o):(typeof o=="number"||typeof o=="bigint")&&wl(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=er);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[$a]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Nf(e,a,o)}}}function pa(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:Ze(e,t,r,i,a,null)}}n&&Ze(e,t,"srcSet",a.srcSet,a,null),o&&Ze(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var s=r=i=n=null,l=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(W(137,t));break;default:Ze(e,t,o,d,a,null)}}Wv(e,r,s,l,u,i,n,!1);return;case"select":Ee("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":o=s;default:Ze(e,t,n,s,a,null)}t=r,a=i,e.multiple=!!o,t!=null?cl(e,!!o,t,!1):a!=null&&cl(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":o=s;break;case"defaultValue":n=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(W(91));break;default:Ze(e,t,i,s,a,null)}Kv(e,o,n,r);return;case"option":for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null)&&(l==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ze(e,t,l,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<cu.length;o++)Ee(cu[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:Ze(e,t,u,o,a,null)}return;default:if(Ob(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&vb(e,t,d,o,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null&&Ze(e,t,s,o,a,null))}function IE(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,s=null,l=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:o.hasOwnProperty(p)||Ze(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(W(137,t));break;default:p!==f&&Ze(e,t,c,p,o,f)}}Xh(e,i,s,l,u,d,r,n);return;case"select":p=i=s=c=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:o.hasOwnProperty(r)||Ze(e,t,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":c=r;break;case"defaultValue":s=r;break;case"multiple":i=r;default:r!==l&&Ze(e,t,n,r,o,l)}t=s,a=i,o=p,c!=null?cl(e,!!a,c,!1):!!o!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!o.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ze(e,t,s,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(W(91));break;default:n!==r&&Ze(e,t,i,n,o,r)}Yv(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ze(e,t,g,null,o,c));for(l in o)c=o[l],p=a[l],o.hasOwnProperty(l)&&c!==p&&(c!=null||p!=null)&&(l==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Ze(e,t,l,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&Ze(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(W(137,t));break;default:Ze(e,t,u,c,o,p)}return;default:if(Ob(t)){for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!==void 0&&!o.hasOwnProperty(y)&&vb(e,t,y,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||vb(e,t,d,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&Ze(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Ze(e,t,f,c,o,p)}function uv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ME(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,s=n.duration;if(r&&s&&uv(i)){for(i=0,s=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],u=l.startTime;if(u>s)break;var d=l.transferSize,f=l.initiatorType;d&&uv(f)&&(l=l.responseEnd,i+=d*(l<s?1:(s-u)/(l-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cb=null,Sb=null;function pp(e){return e.nodeType===9?e:e.ownerDocument}function cv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eC(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kb(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rh=null;function NE(){var e=window.event;return e&&e.type==="popstate"?e===Rh?!1:(Rh=e,!0):(Rh=null,!1)}var tC=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,TE=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(e){return fv.resolve(null).then(e).catch(AE)}:tC;function AE(e){setTimeout(function(){throw e})}function ni(e){return e==="head"}function pv(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Il(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")tu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,tu(a);for(var r=a.firstChild;r;){var i=r.nextSibling,s=r.nodeName;r[yu]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&tu(e.ownerDocument.body);a=n}while(a);Il(t)}function mv(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Lb(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lb(a),zb(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function DE(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[yu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=qo(e.nextSibling),e===null)break}return null}function RE(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qo(e.nextSibling),e===null))return null;return e}function aC(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qo(e.nextSibling),e===null))return null;return e}function _b(e){return e.data==="$?"||e.data==="$~"}function Ib(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PE(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function qo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mb=null;function gv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return qo(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function hv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function oC(e,t,a){switch(t=pp(a),e){case"html":if(e=t.documentElement,!e)throw Error(W(452));return e;case"head":if(e=t.head,!e)throw Error(W(453));return e;case"body":if(e=t.body,!e)throw Error(W(454));return e;default:throw Error(W(451))}}function tu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zb(e)}var Vo=new Map,bv=new Set;function mp(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ur=je.d;je.d={f:zE,r:OE,D:BE,C:HE,L:FE,m:UE,X:VE,S:qE,M:GE};function zE(){var e=ur.f(),t=Tp();return e||t}function OE(e){var t=Nl(e);t!==null&&t.tag===5&&t.type==="form"?Z1(t):ur.r(e)}var Dl=typeof document>"u"?null:document;function nC(e,t,a){var o=Dl;if(o&&typeof t=="string"&&t){var n=Bo(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),bv.has(n)||(bv.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),pa(t,"link",e),ea(t),o.head.appendChild(t)))}}function BE(e){ur.D(e),nC("dns-prefetch",e,null)}function HE(e,t){ur.C(e,t),nC("preconnect",e,t)}function FE(e,t,a){ur.L(e,t,a);var o=Dl;if(o&&e&&t){var n='link[rel="preload"][as="'+Bo(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Bo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Bo(a.imageSizes)+'"]')):n+='[href="'+Bo(e)+'"]';var r=n;switch(t){case"style":r=_l(e);break;case"script":r=Rl(e)}Vo.has(r)||(e=ut({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Vo.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(_u(r))||t==="script"&&o.querySelector(Iu(r))||(t=o.createElement("link"),pa(t,"link",e),ea(t),o.head.appendChild(t)))}}function UE(e,t){ur.m(e,t);var a=Dl;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Bo(o)+'"][href="'+Bo(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Rl(e)}if(!Vo.has(r)&&(e=ut({rel:"modulepreload",href:e},t),Vo.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Iu(r)))return}o=a.createElement("link"),pa(o,"link",e),ea(o),a.head.appendChild(o)}}}function qE(e,t,a){ur.S(e,t,a);var o=Dl;if(o&&e){var n=ul(o).hoistableStyles,r=_l(e);t=t||"default";var i=n.get(r);if(!i){var s={loading:0,preload:null};if(i=o.querySelector(_u(r)))s.loading=5;else{e=ut({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Vo.get(r))&&vx(e,a);var l=i=o.createElement("link");ea(l),pa(l,"link",e),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ff(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(r,i)}}}function VE(e,t){ur.X(e,t);var a=Dl;if(a&&e){var o=ul(a).hoistableScripts,n=Rl(e),r=o.get(n);r||(r=a.querySelector(Iu(n)),r||(e=ut({src:e,async:!0},t),(t=Vo.get(n))&&Cx(e,t),r=a.createElement("script"),ea(r),pa(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function GE(e,t){ur.M(e,t);var a=Dl;if(a&&e){var o=ul(a).hoistableScripts,n=Rl(e),r=o.get(n);r||(r=a.querySelector(Iu(n)),r||(e=ut({src:e,async:!0,type:"module"},t),(t=Vo.get(n))&&Cx(e,t),r=a.createElement("script"),ea(r),pa(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function xv(e,t,a,o){var n=(n=Gr.current)?mp(n):null;if(!n)throw Error(W(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=ul(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var r=ul(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(_u(e)))&&!r._p&&(i.instance=r,i.state.loading=5),Vo.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vo.set(e,a),r||jE(n,e,a,i.state))),t&&o===null)throw Error(W(528,""));return i}if(t&&o!==null)throw Error(W(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rl(a),a=ul(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(W(444,e))}}function _l(e){return'href="'+Bo(e)+'"'}function _u(e){return'link[rel="stylesheet"]['+e+"]"}function rC(e){return ut({},e,{"data-precedence":e.precedence,precedence:null})}function jE(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),pa(t,"link",a),ea(t),e.head.appendChild(t))}function Rl(e){return'[src="'+Bo(e)+'"]'}function Iu(e){return"script[async]"+e}function wv(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Bo(a.href)+'"]');if(o)return t.instance=o,ea(o),o;var n=ut({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ea(o),pa(o,"style",n),Ff(o,a.precedence,e),t.instance=o;case"stylesheet":n=_l(a.href);var r=e.querySelector(_u(n));if(r)return t.state.loading|=4,t.instance=r,ea(r),r;o=rC(a),(n=Vo.get(n))&&vx(o,n),r=(e.ownerDocument||e).createElement("link"),ea(r);var i=r;return i._p=new Promise(function(s,l){i.onload=s,i.onerror=l}),pa(r,"link",o),t.state.loading|=4,Ff(r,a.precedence,e),t.instance=r;case"script":return r=Rl(a.src),(n=e.querySelector(Iu(r)))?(t.instance=n,ea(n),n):(o=a,(n=Vo.get(r))&&(o=ut({},a),Cx(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),ea(n),pa(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(W(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Ff(o,a.precedence,e));return t.instance}function Ff(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var s=o[i];if(s.dataset.precedence===t)r=s;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function vx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Uf=null;function yv(e,t,a){if(Uf===null){var o=new Map,n=Uf=new Map;n.set(a,o)}else n=Uf,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[yu]||r[ua]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var s=o.get(i);s?s.push(r):o.set(i,[r])}}return o}function vv(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function XE(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function iC(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function WE(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(o.href),r=t.querySelector(_u(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gp.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ea(r);return}r=t.ownerDocument||t,o=rC(o),(n=Vo.get(n))&&vx(o,n),r=r.createElement("link"),ea(r);var i=r;i._p=new Promise(function(s,l){i.onload=s,i.onerror=l}),pa(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gp.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ph=0;function YE(e,t){return e.stylesheets&&e.count===0&&qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ph===0&&(Ph=62500*ME());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ph?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function gp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hp=null;function qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hp=new Map,t.forEach(KE,e),hp=null,gp.call(e))}function KE(e,t){if(!(t.state.loading&4)){var a=hp.get(e);if(a)var o=a.get(null);else{a=new Map,hp.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=gp.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pu={$$typeof:Jn,Provider:null,Consumer:null,_currentValue:Ri,_currentValue2:Ri,_threadCount:0};function ZE(e,t,a,o,n,r,i,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.hiddenUpdates=sh(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function sC(e,t,a,o,n,r,i,s,l,u,d,f){return e=new ZE(e,t,a,i,l,u,d,f,s),t=1,r===!0&&(t|=24),r=mo(3,null,null,t),e.current=r,r.stateNode=e,t=Yb(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},$b(r),e}function lC(e){return e?(e=il,e):il}function dC(e,t,a,o,n,r){n=lC(n),o.context===null?o.context=n:o.pendingContext=n,o=Xr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Wr(e,o,t),a!==null&&(Za(a,e,t),Wd(a,e,t))}function Cv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Sx(e,t){Cv(e,t),(e=e.alternate)&&Cv(e,t)}function uC(e){if(e.tag===13||e.tag===31){var t=Wi(e,67108864);t!==null&&Za(t,e,67108864),Sx(e,67108864)}}function Sv(e){if(e.tag===13||e.tag===31){var t=wo();t=Rb(t);var a=Wi(e,t);a!==null&&Za(a,e,t),Sx(e,t)}}var bp=!0;function $E(e,t,a,o){var n=me.T;me.T=null;var r=je.p;try{je.p=2,kx(e,t,a,o)}finally{je.p=r,me.T=n}}function QE(e,t,a,o){var n=me.T;me.T=null;var r=je.p;try{je.p=8,kx(e,t,a,o)}finally{je.p=r,me.T=n}}function kx(e,t,a,o){if(bp){var n=Nb(o);if(n===null)Dh(e,t,o,xp,a),kv(e,o);else if(eT(n,e,t,a,o))o.stopPropagation();else if(kv(e,o),t&4&&-1<JE.indexOf(e)){for(;n!==null;){var r=Nl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Ti(r.pendingLanes);if(i!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var l=1<<31-xo(i);s.entanglements[1]|=l,i&=~l}Ln(r),(Ge&6)===0&&(sp=ho()+500,Lu(0,!1))}}break;case 31:case 13:s=Wi(r,2),s!==null&&Za(s,r,2),Tp(),Sx(r,2)}if(r=Nb(o),r===null&&Dh(e,t,o,xp,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Dh(e,t,o,null,a)}}function Nb(e){return e=Bb(e),Lx(e)}var xp=null;function Lx(e){if(xp=null,e=el(e),e!==null){var t=hu(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Ev(t),e!==null)return e;e=null}else if(a===31){if(e=Tv(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xp=e,null}function cC(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F3()){case Pv:return 2;case zv:return 8;case Wf:case U3:return 32;case Ov:return 268435456;default:return 32}default:return 32}}var Eb=!1,Zr=null,$r=null,Qr=null,mu=new Map,gu=new Map,Br=[],JE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(e,t){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":mu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gu.delete(t.pointerId)}}function zd(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Nl(t),t!==null&&uC(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function eT(e,t,a,o,n){switch(t){case"focusin":return Zr=zd(Zr,e,t,a,o,n),!0;case"dragenter":return $r=zd($r,e,t,a,o,n),!0;case"mouseover":return Qr=zd(Qr,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return mu.set(r,zd(mu.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,gu.set(r,zd(gu.get(r)||null,e,t,a,o,n)),!0}return!1}function fC(e){var t=el(e.target);if(t!==null){var a=hu(t);if(a!==null){if(t=a.tag,t===13){if(t=Ev(a),t!==null){e.blockedOn=t,sy(e.priority,function(){Sv(a)});return}}else if(t===31){if(t=Tv(a),t!==null){e.blockedOn=t,sy(e.priority,function(){Sv(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Nb(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yh=o,a.target.dispatchEvent(o),Yh=null}else return t=Nl(a),t!==null&&uC(t),e.blockedOn=a,!1;t.shift()}return!0}function Lv(e,t,a){Vf(e)&&a.delete(t)}function tT(){Eb=!1,Zr!==null&&Vf(Zr)&&(Zr=null),$r!==null&&Vf($r)&&($r=null),Qr!==null&&Vf(Qr)&&(Qr=null),mu.forEach(Lv),gu.forEach(Lv)}function If(e,t){e.blockedOn===t&&(e.blockedOn=null,Eb||(Eb=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,tT)))}var Mf=null;function _v(e){Mf!==e&&(Mf=e,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,function(){Mf===e&&(Mf=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(Lx(o||a)===null)continue;break}var r=Nl(a);r!==null&&(e.splice(t,3),t-=3,ub(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Il(e){function t(l){return If(l,e)}Zr!==null&&If(Zr,e),$r!==null&&If($r,e),Qr!==null&&If(Qr,e),mu.forEach(t),gu.forEach(t);for(var a=0;a<Br.length;a++){var o=Br[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Br.length&&(a=Br[0],a.blockedOn===null);)fC(a),a.blockedOn===null&&Br.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[$a]||null;if(typeof r=="function")i||_v(a);else if(i){var s=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[$a]||null)s=i.formAction;else if(Lx(n)!==null)continue}else s=i.action;typeof s=="function"?a[o+1]=s:(a.splice(o,3),o-=3),_v(a)}}}function pC(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function _x(e){this._internalRoot=e}Rp.prototype.render=_x.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));var a=t.current,o=wo();dC(a,o,e,t,null,null)};Rp.prototype.unmount=_x.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dC(e.current,2,null,e,null,null),Tp(),t[Ml]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=qv();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Br.length&&t!==0&&t<Br[a].priority;a++);Br.splice(a,0,e),a===0&&fC(e)}};var Iv=Mv.version;if(Iv!=="19.2.8")throw Error(W(527,Iv,"19.2.8"));je.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=D3(t),e=e!==null?Av(e):null,e=e===null?null:e.stateNode,e};var aT={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:me,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Od=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Od.isDisabled&&Od.supportsFiber))try{bu=Od.inject(aT),bo=Od}catch{}var Od;Pp.createRoot=function(e,t){if(!Nv(e))throw Error(W(299));var a=!1,o="",n=n2,r=r2,i=i2;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sC(e,1,!1,null,null,a,o,null,n,r,i,pC),e[Ml]=t.current,yx(e),new _x(t)};Pp.hydrateRoot=function(e,t,a){if(!Nv(e))throw Error(W(299));var o=!1,n="",r=n2,i=r2,s=i2,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),t=sC(e,1,!0,t,a??null,o,n,l,r,i,s,pC),t.context=lC(null),a=t.current,o=wo(),o=Rb(o),n=Xr(o),n.callback=null,Wr(a,n,o),a=o,t.current.lanes=a,wu(t,a),Ln(t),e[Ml]=t.current,yx(e),new Rp(t)};Pp.version="19.2.8"});var Ix=ja((T7,hC)=>{"use strict";function gC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gC)}catch(e){console.error(e)}}gC(),hC.exports=mC()});var xC=ja(zp=>{"use strict";var oT=Symbol.for("react.transitional.element"),nT=Symbol.for("react.fragment");function bC(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:oT,type:e,key:o,ref:t!==void 0?t:null,props:a}}zp.Fragment=nT;zp.jsx=bC;zp.jsxs=bC});var X=ja((D7,wC)=>{"use strict";wC.exports=xC()});var oL=ja(aL=>{"use strict";var Zl=J();function Q6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var J6=typeof Object.is=="function"?Object.is:Q6,e8=Zl.useState,t8=Zl.useEffect,a8=Zl.useLayoutEffect,o8=Zl.useDebugValue;function n8(e,t){var a=t(),o=e8({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return a8(function(){n.value=a,n.getSnapshot=t,h0(n)&&r({inst:n})},[e,a,t]),t8(function(){return h0(n)&&r({inst:n}),e(function(){h0(n)&&r({inst:n})})},[e]),o8(a),a}function h0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!J6(e,a)}catch{return!0}}function r8(e,t){return t()}var i8=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?r8:n8;aL.useSyncExternalStore=Zl.useSyncExternalStore!==void 0?Zl.useSyncExternalStore:i8});var rL=ja((_V,nL)=>{"use strict";nL.exports=oL()});var sL=ja(iL=>{"use strict";var Im=J(),s8=rL();function l8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d8=typeof Object.is=="function"?Object.is:l8,u8=s8.useSyncExternalStore,c8=Im.useRef,f8=Im.useEffect,p8=Im.useMemo,m8=Im.useDebugValue;iL.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=c8(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=p8(function(){function l(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var g=i.value;if(n(g,p))return f=g}return f=p}if(g=f,d8(d,p))return g;var w=o(p);return n!==void 0&&n(g,w)?(d=p,g):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return l(t())},c===null?void 0:function(){return l(c())}]},[t,a,o,n]);var s=u8(e,r[0],r[1]);return f8(function(){i.hasValue=!0,i.value=s},[s]),m8(s),s}});var dL=ja((MV,lL)=>{"use strict";lL.exports=sL()});var C7={};u3(C7,{mountCanvas:()=>w7,unmountCanvas:()=>v7,updateCanvas:()=>y7});var PN=I(Ix(),1);var vd=I(J(),1);var Ce=I(J(),1);var V=I(X()),G=I(J());function _t(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=_t(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var rT={value:()=>{}};function vC(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new Op(a)}function Op(e){this._=e}function iT(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}Op.prototype=vC.prototype={constructor:Op,on:function(e,t){var a=this._,o=iT(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=sT(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=yC(a[n],e.name,t);else if(t==null)for(n in a)a[n]=yC(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new Op(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function sT(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function yC(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=rT,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Ki=vC;var Bp="http://www.w3.org/1999/xhtml",Mx={svg:"http://www.w3.org/2000/svg",xhtml:Bp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function cr(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),Mx.hasOwnProperty(t)?{space:Mx[t],local:e}:e}function lT(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Bp&&t.documentElement.namespaceURI===Bp?t.createElement(e):t.createElementNS(a,e)}}function dT(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Hp(e){var t=cr(e);return(t.local?dT:lT)(t)}function uT(){}function Zi(e){return e==null?uT:function(){return this.querySelector(e)}}function CC(e){typeof e!="function"&&(e=Zi(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=new Array(i),l,u,d=0;d<i;++d)(l=r[d])&&(u=e.call(l,l.__data__,d,r))&&("__data__"in l&&(u.__data__=l.__data__),s[d]=u);return new It(o,this._parents)}function Nx(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function cT(){return[]}function Mu(e){return e==null?cT:function(){return this.querySelectorAll(e)}}function fT(e){return function(){return Nx(e.apply(this,arguments))}}function SC(e){typeof e=="function"?e=fT(e):e=Mu(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],s=i.length,l,u=0;u<s;++u)(l=i[u])&&(o.push(e.call(l,l.__data__,u,i)),n.push(l));return new It(o,n)}function Nu(e){return function(){return this.matches(e)}}function Fp(e){return function(t){return t.matches(e)}}var pT=Array.prototype.find;function mT(e){return function(){return pT.call(this.children,e)}}function gT(){return this.firstElementChild}function kC(e){return this.select(e==null?gT:mT(typeof e=="function"?e:Fp(e)))}var hT=Array.prototype.filter;function bT(){return Array.from(this.children)}function xT(e){return function(){return hT.call(this.children,e)}}function LC(e){return this.selectAll(e==null?bT:xT(typeof e=="function"?e:Fp(e)))}function _C(e){typeof e!="function"&&(e=Nu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=[],l,u=0;u<i;++u)(l=r[u])&&e.call(l,l.__data__,u,r)&&s.push(l);return new It(o,this._parents)}function Up(e){return new Array(e.length)}function IC(){return new It(this._enter||this._groups.map(Up),this._parents)}function Eu(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Eu.prototype={constructor:Eu,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function MC(e){return function(){return e}}function wT(e,t,a,o,n,r){for(var i=0,s,l=t.length,u=r.length;i<u;++i)(s=t[i])?(s.__data__=r[i],o[i]=s):a[i]=new Eu(e,r[i]);for(;i<l;++i)(s=t[i])&&(n[i]=s)}function yT(e,t,a,o,n,r,i){var s,l,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(s=0;s<d;++s)(l=t[s])&&(c[s]=p=i.call(l,l.__data__,s,t)+"",u.has(p)?n[s]=l:u.set(p,l));for(s=0;s<f;++s)p=i.call(e,r[s],s,r)+"",(l=u.get(p))?(o[s]=l,l.__data__=r[s],u.delete(p)):a[s]=new Eu(e,r[s]);for(s=0;s<d;++s)(l=t[s])&&u.get(c[s])===l&&(n[s]=l)}function vT(e){return e.__data__}function NC(e,t){if(!arguments.length)return Array.from(this,vT);var a=t?yT:wT,o=this._parents,n=this._groups;typeof e!="function"&&(e=MC(e));for(var r=n.length,i=new Array(r),s=new Array(r),l=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=CT(e.call(d,d&&d.__data__,u,o)),g=p.length,w=s[u]=new Array(g),y=i[u]=new Array(g),h=l[u]=new Array(c);a(d,f,w,y,h,p,t);for(var b=0,m=0,x,v;b<g;++b)if(x=w[b]){for(b>=m&&(m=b+1);!(v=y[m])&&++m<g;);x._next=v||null}}return i=new It(i,o),i._enter=s,i._exit=l,i}function CT(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function EC(){return new It(this._exit||this._groups.map(Up),this._parents)}function TC(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function AC(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),s=new Array(n),l=0;l<i;++l)for(var u=a[l],d=o[l],f=u.length,c=s[l]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;l<n;++l)s[l]=a[l];return new It(s,this._parents)}function DC(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function RC(e){e||(e=ST);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],s=i.length,l=n[r]=new Array(s),u,d=0;d<s;++d)(u=i[d])&&(l[d]=u);l.sort(t)}return new It(n,this._parents).order()}function ST(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function PC(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function zC(){return Array.from(this)}function OC(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function BC(){let e=0;for(let t of this)++e;return e}function HC(){return!this.node()}function FC(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,s;r<i;++r)(s=n[r])&&e.call(s,s.__data__,r,n);return this}function kT(e){return function(){this.removeAttribute(e)}}function LT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function _T(e,t){return function(){this.setAttribute(e,t)}}function IT(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function MT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function NT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function UC(e,t){var a=cr(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?LT:kT:typeof t=="function"?a.local?NT:MT:a.local?IT:_T)(a,t))}function qp(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ET(e){return function(){this.style.removeProperty(e)}}function TT(e,t,a){return function(){this.style.setProperty(e,t,a)}}function AT(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function qC(e,t,a){return arguments.length>1?this.each((t==null?ET:typeof t=="function"?AT:TT)(e,t,a??"")):ri(this.node(),e)}function ri(e,t){return e.style.getPropertyValue(t)||qp(e).getComputedStyle(e,null).getPropertyValue(t)}function DT(e){return function(){delete this[e]}}function RT(e,t){return function(){this[e]=t}}function PT(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function VC(e,t){return arguments.length>1?this.each((t==null?DT:typeof t=="function"?PT:RT)(e,t)):this.node()[e]}function GC(e){return e.trim().split(/^|\s+/)}function Ex(e){return e.classList||new jC(e)}function jC(e){this._node=e,this._names=GC(e.getAttribute("class")||"")}jC.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function XC(e,t){for(var a=Ex(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function WC(e,t){for(var a=Ex(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function zT(e){return function(){XC(this,e)}}function OT(e){return function(){WC(this,e)}}function BT(e,t){return function(){(t.apply(this,arguments)?XC:WC)(this,e)}}function YC(e,t){var a=GC(e+"");if(arguments.length<2){for(var o=Ex(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?BT:t?zT:OT)(a,t))}function HT(){this.textContent=""}function FT(e){return function(){this.textContent=e}}function UT(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function KC(e){return arguments.length?this.each(e==null?HT:(typeof e=="function"?UT:FT)(e)):this.node().textContent}function qT(){this.innerHTML=""}function VT(e){return function(){this.innerHTML=e}}function GT(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function ZC(e){return arguments.length?this.each(e==null?qT:(typeof e=="function"?GT:VT)(e)):this.node().innerHTML}function jT(){this.nextSibling&&this.parentNode.appendChild(this)}function $C(){return this.each(jT)}function XT(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function QC(){return this.each(XT)}function JC(e){var t=typeof e=="function"?e:Hp(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function WT(){return null}function eS(e,t){var a=typeof e=="function"?e:Hp(e),o=t==null?WT:typeof t=="function"?t:Zi(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function YT(){var e=this.parentNode;e&&e.removeChild(this)}function tS(){return this.each(YT)}function KT(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ZT(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function aS(e){return this.select(e?ZT:KT)}function oS(e){return arguments.length?this.property("__data__",e):this.node().__data__}function $T(e){return function(t){e.call(this,t,this.__data__)}}function QT(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function JT(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function eA(e,t,a){return function(){var o=this.__on,n,r=$T(t);if(o){for(var i=0,s=o.length;i<s;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function nS(e,t,a){var o=QT(e+""),n,r=o.length,i;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,u=s.length,d;l<u;++l)for(n=0,d=s[l];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(s=t?eA:JT,n=0;n<r;++n)this.each(s(o[n],t,a));return this}function rS(e,t,a){var o=qp(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function tA(e,t){return function(){return rS(this,e,t)}}function aA(e,t){return function(){return rS(this,e,t.apply(this,arguments))}}function iS(e,t){return this.each((typeof t=="function"?aA:tA)(e,t))}function*sS(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var Tx=[null];function It(e,t){this._groups=e,this._parents=t}function lS(){return new It([[document.documentElement]],Tx)}function oA(){return this}It.prototype=lS.prototype={constructor:It,select:CC,selectAll:SC,selectChild:kC,selectChildren:LC,filter:_C,data:NC,enter:IC,exit:EC,join:TC,merge:AC,selection:oA,order:DC,sort:RC,call:PC,nodes:zC,node:OC,size:BC,empty:HC,each:FC,attr:UC,style:qC,property:VC,classed:YC,text:KC,html:ZC,raise:$C,lower:QC,append:JC,insert:eS,remove:tS,clone:aS,datum:oS,on:nS,dispatch:iS,[Symbol.iterator]:sS};var fr=lS;function aa(e){return typeof e=="string"?new It([[document.querySelector(e)]],[document.documentElement]):new It([[e]],Tx)}function dS(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Da(e,t){if(e=dS(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var uS={passive:!1},$i={capture:!0,passive:!1};function Vp(e){e.stopImmediatePropagation()}function ii(e){e.preventDefault(),e.stopImmediatePropagation()}function Tu(e){var t=e.document.documentElement,a=aa(e).on("dragstart.drag",ii,$i);"onselectstart"in t?a.on("selectstart.drag",ii,$i):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Au(e,t){var a=e.document.documentElement,o=aa(e).on("dragstart.drag",null);t&&(o.on("click.drag",ii,$i),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var Du=e=>()=>e;function Ru(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:s,dx:l,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Ru.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function nA(e){return!e.ctrlKey&&!e.button}function rA(){return this.parentNode}function iA(e,t){return t??{x:e.x,y:e.y}}function sA(){return navigator.maxTouchPoints||"ontouchstart"in this}function Gp(){var e=nA,t=rA,a=iA,o=sA,n={},r=Ki("start","drag","end"),i=0,s,l,u,d,f=0;function c(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",h,uS).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,v){if(!(d||!e.call(this,x,v))){var C=m(this,t.call(this,x,v),x,v,"mouse");C&&(aa(x.view).on("mousemove.drag",g,$i).on("mouseup.drag",w,$i),Tu(x.view),Vp(x),u=!1,s=x.clientX,l=x.clientY,C("start",x))}}function g(x){if(ii(x),!u){var v=x.clientX-s,C=x.clientY-l;u=v*v+C*C>f}n.mouse("drag",x)}function w(x){aa(x.view).on("mousemove.drag mouseup.drag",null),Au(x.view,u),ii(x),n.mouse("end",x)}function y(x,v){if(e.call(this,x,v)){var C=x.changedTouches,S=t.call(this,x,v),k=C.length,_,T;for(_=0;_<k;++_)(T=m(this,S,x,v,C[_].identifier,C[_]))&&(Vp(x),T("start",x,C[_]))}}function h(x){var v=x.changedTouches,C=v.length,S,k;for(S=0;S<C;++S)(k=n[v[S].identifier])&&(ii(x),k("drag",x,v[S]))}function b(x){var v=x.changedTouches,C=v.length,S,k;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),S=0;S<C;++S)(k=n[v[S].identifier])&&(Vp(x),k("end",x,v[S]))}function m(x,v,C,S,k,_){var T=r.copy(),A=Da(_||C,v),B,U,L;if((L=a.call(x,new Ru("beforestart",{sourceEvent:C,target:c,identifier:k,active:i,x:A[0],y:A[1],dx:0,dy:0,dispatch:T}),S))!=null)return B=L.x-A[0]||0,U=L.y-A[1]||0,function N(E,M,R){var O=A,D;switch(E){case"start":n[k]=N,D=i++;break;case"end":delete n[k],--i;case"drag":A=Da(R||M,v),D=i;break}T.call(E,x,new Ru(E,{sourceEvent:M,subject:L,target:c,identifier:k,active:D,x:A[0]+B,y:A[1]+U,dx:A[0]-O[0],dy:A[1]-O[1],dispatch:T}),S)}}return c.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Du(!!x),c):e},c.container=function(x){return arguments.length?(t=typeof x=="function"?x:Du(x),c):t},c.subject=function(x){return arguments.length?(a=typeof x=="function"?x:Du(x),c):a},c.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Du(!!x),c):o},c.on=function(){var x=r.on.apply(r,arguments);return x===r?c:x},c.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,c):Math.sqrt(f)},c}function jp(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Ax(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Ou(){}var Pu=.7,Yp=1/Pu,Pl="\\s*([+-]?\\d+)\\s*",zu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_n="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lA=/^#([0-9a-f]{3,8})$/,dA=new RegExp(`^rgb\\(${Pl},${Pl},${Pl}\\)$`),uA=new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),cA=new RegExp(`^rgba\\(${Pl},${Pl},${Pl},${zu}\\)$`),fA=new RegExp(`^rgba\\(${_n},${_n},${_n},${zu}\\)$`),pA=new RegExp(`^hsl\\(${zu},${_n},${_n}\\)$`),mA=new RegExp(`^hsla\\(${zu},${_n},${_n},${zu}\\)$`),cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};jp(Ou,en,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:fS,formatHex:fS,formatHex8:gA,formatHsl:hA,formatRgb:pS,toString:pS});function fS(){return this.rgb().formatHex()}function gA(){return this.rgb().formatHex8()}function hA(){return wS(this).formatHsl()}function pS(){return this.rgb().formatRgb()}function en(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=lA.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?mS(t):a===3?new Ja(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Xp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Xp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=dA.exec(e))?new Ja(t[1],t[2],t[3],1):(t=uA.exec(e))?new Ja(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=cA.exec(e))?Xp(t[1],t[2],t[3],t[4]):(t=fA.exec(e))?Xp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=pA.exec(e))?bS(t[1],t[2]/100,t[3]/100,1):(t=mA.exec(e))?bS(t[1],t[2]/100,t[3]/100,t[4]):cS.hasOwnProperty(e)?mS(cS[e]):e==="transparent"?new Ja(NaN,NaN,NaN,0):null}function mS(e){return new Ja(e>>16&255,e>>8&255,e&255,1)}function Xp(e,t,a,o){return o<=0&&(e=t=a=NaN),new Ja(e,t,a,o)}function bA(e){return e instanceof Ou||(e=en(e)),e?(e=e.rgb(),new Ja(e.r,e.g,e.b,e.opacity)):new Ja}function zl(e,t,a,o){return arguments.length===1?bA(e):new Ja(e,t,a,o??1)}function Ja(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}jp(Ja,zl,Ax(Ou,{brighter(e){return e=e==null?Yp:Math.pow(Yp,e),new Ja(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Pu:Math.pow(Pu,e),new Ja(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ja(Ji(this.r),Ji(this.g),Ji(this.b),Kp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:gS,formatHex:gS,formatHex8:xA,formatRgb:hS,toString:hS}));function gS(){return`#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}`}function xA(){return`#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}${Qi((isNaN(this.opacity)?1:this.opacity)*255)}`}function hS(){let e=Kp(this.opacity);return`${e===1?"rgb(":"rgba("}${Ji(this.r)}, ${Ji(this.g)}, ${Ji(this.b)}${e===1?")":`, ${e})`}`}function Kp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ji(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qi(e){return e=Ji(e),(e<16?"0":"")+e.toString(16)}function bS(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new Jo(e,t,a,o)}function wS(e){if(e instanceof Jo)return new Jo(e.h,e.s,e.l,e.opacity);if(e instanceof Ou||(e=en(e)),!e)return new Jo;if(e instanceof Jo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,s=r-n,l=(r+n)/2;return s?(t===r?i=(a-o)/s+(a<o)*6:a===r?i=(o-t)/s+2:i=(t-a)/s+4,s/=l<.5?r+n:2-r-n,i*=60):s=l>0&&l<1?0:i,new Jo(i,s,l,e.opacity)}function yS(e,t,a,o){return arguments.length===1?wS(e):new Jo(e,t,a,o??1)}function Jo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}jp(Jo,yS,Ax(Ou,{brighter(e){return e=e==null?Yp:Math.pow(Yp,e),new Jo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Pu:Math.pow(Pu,e),new Jo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Ja(Dx(e>=240?e-240:e+120,n,o),Dx(e,n,o),Dx(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Jo(xS(this.h),Wp(this.s),Wp(this.l),Kp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Kp(this.opacity);return`${e===1?"hsl(":"hsla("}${xS(this.h)}, ${Wp(this.s)*100}%, ${Wp(this.l)*100}%${e===1?")":`, ${e})`}`}}));function xS(e){return e=(e||0)%360,e<0?e+360:e}function Wp(e){return Math.max(0,Math.min(1,e||0))}function Dx(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Rx(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function vS(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,s=o<t-1?e[o+2]:2*r-n;return Rx((a-o/t)*t,i,n,r,s)}}function CS(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],s=e[(o+2)%t];return Rx((a-o/t)*t,n,r,i,s)}}var Bu=e=>()=>e;function wA(e,t){return function(a){return e+a*t}}function yA(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function SS(e){return(e=+e)==1?Zp:function(t,a){return a-t?yA(t,a,e):Bu(isNaN(t)?a:t)}}function Zp(e,t){var a=t-e;return a?wA(e,a):Bu(isNaN(e)?t:e)}var es=(function e(t){var a=SS(t);function o(n,r){var i=a((n=zl(n)).r,(r=zl(r)).r),s=a(n.g,r.g),l=a(n.b,r.b),u=Zp(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=s(d),n.b=l(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function kS(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,s;for(i=0;i<a;++i)s=zl(t[i]),o[i]=s.r||0,n[i]=s.g||0,r[i]=s.b||0;return o=e(o),n=e(n),r=e(r),s.opacity=1,function(l){return s.r=o(l),s.g=n(l),s.b=r(l),s+""}}}var vA=kS(vS),CA=kS(CS);function LS(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function _S(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function IS(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=pr(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(s){for(i=0;i<o;++i)r[i]=n[i](s);return r}}function MS(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Ra(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function NS(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=pr(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var zx=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Px=new RegExp(zx.source,"g");function SA(e){return function(){return e}}function kA(e){return function(t){return e(t)+""}}function Hu(e,t){var a=zx.lastIndex=Px.lastIndex=0,o,n,r,i=-1,s=[],l=[];for(e=e+"",t=t+"";(o=zx.exec(e))&&(n=Px.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),s[i]?s[i]+=r:s[++i]=r),(o=o[0])===(n=n[0])?s[i]?s[i]+=n:s[++i]=n:(s[++i]=null,l.push({i,x:Ra(o,n)})),a=Px.lastIndex;return a<t.length&&(r=t.slice(a),s[i]?s[i]+=r:s[++i]=r),s.length<2?l[0]?kA(l[0].x):SA(t):(t=l.length,function(u){for(var d=0,f;d<t;++d)s[(f=l[d]).i]=f.x(u);return s.join("")})}function pr(e,t){var a=typeof t,o;return t==null||a==="boolean"?Bu(t):(a==="number"?Ra:a==="string"?(o=en(t))?(t=o,es):Hu:t instanceof en?es:t instanceof Date?MS:_S(t)?LS:Array.isArray(t)?IS:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?NS:Ra)(e,t)}var ES=180/Math.PI,$p={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ox(e,t,a,o,n,r){var i,s,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*a+t*o)&&(a-=e*l,o-=t*l),(s=Math.sqrt(a*a+o*o))&&(a/=s,o/=s,l/=s),e*o<t*a&&(e=-e,t=-t,l=-l,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*ES,skewX:Math.atan(l)*ES,scaleX:i,scaleY:s}}var Qp;function TS(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?$p:Ox(t.a,t.b,t.c,t.d,t.e,t.f)}function AS(e){return e==null?$p:(Qp||(Qp=document.createElementNS("http://www.w3.org/2000/svg","g")),Qp.setAttribute("transform",e),(e=Qp.transform.baseVal.consolidate())?(e=e.matrix,Ox(e.a,e.b,e.c,e.d,e.e,e.f)):$p)}function DS(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);g.push({i:w-4,x:Ra(u,f)},{i:w-2,x:Ra(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Ra(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function s(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Ra(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function l(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");g.push({i:w-4,x:Ra(u,f)},{i:w-2,x:Ra(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),s(u.skewX,d.skewX,f,c),l(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,w=c.length,y;++g<w;)f[(y=c[g]).i]=y.x(p);return f.join("")}}}var Bx=DS(TS,"px, ","px)","deg)"),Hx=DS(AS,", ",")",")");var LA=1e-12;function RS(e){return((e=Math.exp(e))+1/e)/2}function _A(e){return((e=Math.exp(e))-1/e)/2}function IA(e){return((e=Math.exp(2*e))-1)/(e+1)}var ts=(function e(t,a,o){function n(r,i){var s=r[0],l=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-s,g=f-l,w=p*p+g*g,y,h;if(w<LA)h=Math.log(c/u)/t,y=function(S){return[s+S*p,l+S*g,u*Math.exp(t*S*h)]};else{var b=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*b),x=(c*c-u*u-o*w)/(2*c*a*b),v=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(x*x+1)-x);h=(C-v)/t,y=function(S){var k=S*h,_=RS(v),T=u/(a*b)*(_*IA(t*k+v)-_A(v));return[s+T*p,l+T*g,u*_/RS(t*k+v)]}}return y.duration=h*1e3*t/Math.SQRT2,y}return n.rho=function(r){var i=Math.max(.001,+r),s=i*i,l=s*s;return e(i,s,l)},n})(Math.SQRT2,2,4);var Ol=0,Uu=0,Fu=0,zS=1e3,Jp,qu,em=0,as=0,tm=0,Vu=typeof performance=="object"&&performance.now?performance:Date,OS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ju(){return as||(OS(MA),as=Vu.now()+tm)}function MA(){as=0}function Gu(){this._call=this._time=this._next=null}Gu.prototype=am.prototype={constructor:Gu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?ju():+a)+(t==null?0:+t),!this._next&&qu!==this&&(qu?qu._next=this:Jp=this,qu=this),this._call=e,this._time=a,Fx()},stop:function(){this._call&&(this._call=null,this._time=1/0,Fx())}};function am(e,t,a){var o=new Gu;return o.restart(e,t,a),o}function BS(){ju(),++Ol;for(var e=Jp,t;e;)(t=as-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ol}function PS(){as=(em=Vu.now())+tm,Ol=Uu=0;try{BS()}finally{Ol=0,EA(),as=0}}function NA(){var e=Vu.now(),t=e-em;t>zS&&(tm-=t,em=e)}function EA(){for(var e,t=Jp,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:Jp=a);qu=e,Fx(o)}function Fx(e){if(!Ol){Uu&&(Uu=clearTimeout(Uu));var t=e-as;t>24?(e<1/0&&(Uu=setTimeout(PS,e-Vu.now()-tm)),Fu&&(Fu=clearInterval(Fu))):(Fu||(em=Vu.now(),Fu=setInterval(NA,zS)),Ol=1,OS(PS))}}function om(e,t,a){var o=new Gu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var TA=Ki("start","end","cancel","interrupt"),AA=[],US=0,HS=1,rm=2,nm=3,FS=4,im=5,Xu=6;function si(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;DA(e,a,{name:t,index:o,group:n,on:TA,tween:AA,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:US})}function Wu(e,t){var a=Wt(e,t);if(a.state>US)throw new Error("too late; already scheduled");return a}function ma(e,t){var a=Wt(e,t);if(a.state>nm)throw new Error("too late; already running");return a}function Wt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function DA(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=am(r,0,a.time);function r(u){a.state=HS,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==HS)return l();for(d in o)if(p=o[d],p.name===a.name){if(p.state===nm)return om(i);p.state===FS?(p.state=Xu,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=Xu,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(om(function(){a.state===nm&&(a.state=FS,a.timer.restart(s,a.delay,a.time),s(u))}),a.state=rm,a.on.call("start",e,e.__data__,a.index,a.group),a.state===rm){for(a.state=nm,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function s(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(l),a.state=im,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===im&&(a.on.call("end",e,e.__data__,a.index,a.group),l())}function l(){a.state=Xu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function os(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>rm&&o.state<im,o.state=Xu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function qS(e){return this.each(function(){os(this,e)})}function RA(e,t){var a,o;return function(){var n=ma(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,s=o.length;i<s;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function PA(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=ma(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var s={name:t,value:a},l=0,u=n.length;l<u;++l)if(n[l].name===t){n[l]=s;break}l===u&&n.push(s)}r.tween=n}}function VS(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Wt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?RA:PA)(a,e,t))}function Bl(e,t,a){var o=e._id;return e.each(function(){var n=ma(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Wt(n,o).value[t]}}function sm(e,t){var a;return(typeof t=="number"?Ra:t instanceof en?es:(a=en(t))?(t=a,es):Hu)(e,t)}function zA(e){return function(){this.removeAttribute(e)}}function OA(e){return function(){this.removeAttributeNS(e.space,e.local)}}function BA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function HA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function FA(e,t,a){var o,n,r;return function(){var i,s=a(this),l;return s==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=s+"",i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s)))}}function UA(e,t,a){var o,n,r;return function(){var i,s=a(this),l;return s==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=s+"",i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s)))}}function GS(e,t){var a=cr(e),o=a==="transform"?Hx:sm;return this.attrTween(e,typeof t=="function"?(a.local?UA:FA)(a,o,Bl(this,"attr."+e,t)):t==null?(a.local?OA:zA)(a):(a.local?HA:BA)(a,o,t))}function qA(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function VA(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function GA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&VA(e,r)),a}return n._value=t,n}function jA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&qA(e,r)),a}return n._value=t,n}function jS(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=cr(e);return this.tween(a,(o.local?GA:jA)(o,t))}function XA(e,t){return function(){Wu(this,e).delay=+t.apply(this,arguments)}}function WA(e,t){return t=+t,function(){Wu(this,e).delay=t}}function XS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?XA:WA)(t,e)):Wt(this.node(),t).delay}function YA(e,t){return function(){ma(this,e).duration=+t.apply(this,arguments)}}function KA(e,t){return t=+t,function(){ma(this,e).duration=t}}function WS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?YA:KA)(t,e)):Wt(this.node(),t).duration}function ZA(e,t){if(typeof t!="function")throw new Error;return function(){ma(this,e).ease=t}}function YS(e){var t=this._id;return arguments.length?this.each(ZA(t,e)):Wt(this.node(),t).ease}function $A(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;ma(this,e).ease=a}}function KS(e){if(typeof e!="function")throw new Error;return this.each($A(this._id,e))}function ZS(e){typeof e!="function"&&(e=Nu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=[],l,u=0;u<i;++u)(l=r[u])&&e.call(l,l.__data__,u,r)&&s.push(l);return new Pa(o,this._parents,this._name,this._id)}function $S(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),s=0;s<r;++s)for(var l=t[s],u=a[s],d=l.length,f=i[s]=new Array(d),c,p=0;p<d;++p)(c=l[p]||u[p])&&(f[p]=c);for(;s<o;++s)i[s]=t[s];return new Pa(i,this._parents,this._name,this._id)}function QA(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function JA(e,t,a){var o,n,r=QA(t)?Wu:ma;return function(){var i=r(this,e),s=i.on;s!==o&&(n=(o=s).copy()).on(t,a),i.on=n}}function QS(e,t){var a=this._id;return arguments.length<2?Wt(this.node(),a).on.on(e):this.each(JA(a,e,t))}function e6(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function JS(){return this.on("end.remove",e6(this._id))}function ek(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Zi(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var s=o[i],l=s.length,u=r[i]=new Array(l),d,f,c=0;c<l;++c)(d=s[c])&&(f=e.call(d,d.__data__,c,s))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,si(u[c],t,a,c,u,Wt(d,a)));return new Pa(r,this._parents,t,a)}function tk(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Mu(e));for(var o=this._groups,n=o.length,r=[],i=[],s=0;s<n;++s)for(var l=o[s],u=l.length,d,f=0;f<u;++f)if(d=l[f]){for(var c=e.call(d,d.__data__,f,l),p,g=Wt(d,a),w=0,y=c.length;w<y;++w)(p=c[w])&&si(p,t,a,w,c,g);r.push(c),i.push(d)}return new Pa(r,i,t,a)}var t6=fr.prototype.constructor;function ak(){return new t6(this._groups,this._parents)}function a6(e,t){var a,o,n;return function(){var r=ri(this,e),i=(this.style.removeProperty(e),ri(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function ok(e){return function(){this.style.removeProperty(e)}}function o6(e,t,a){var o,n=a+"",r;return function(){var i=ri(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function n6(e,t,a){var o,n,r;return function(){var i=ri(this,e),s=a(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(e),ri(this,e))),i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s))}}function r6(e,t){var a,o,n,r="style."+t,i="end."+r,s;return function(){var l=ma(this,e),u=l.on,d=l.value[r]==null?s||(s=ok(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),l.on=o}}function nk(e,t,a){var o=(e+="")=="transform"?Bx:sm;return t==null?this.styleTween(e,a6(e,o)).on("end.style."+e,ok(e)):typeof t=="function"?this.styleTween(e,n6(e,o,Bl(this,"style."+e,t))).each(r6(this._id,e)):this.styleTween(e,o6(e,o,t),a).on("end.style."+e,null)}function i6(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function s6(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&i6(e,i,a)),o}return r._value=t,r}function rk(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,s6(e,t,a??""))}function l6(e){return function(){this.textContent=e}}function d6(e){return function(){var t=e(this);this.textContent=t??""}}function ik(e){return this.tween("text",typeof e=="function"?d6(Bl(this,"text",e)):l6(e==null?"":e+""))}function u6(e){return function(t){this.textContent=e.call(this,t)}}function c6(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&u6(n)),t}return o._value=e,o}function sk(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,c6(e))}function lk(){for(var e=this._name,t=this._id,a=lm(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],s=i.length,l,u=0;u<s;++u)if(l=i[u]){var d=Wt(l,t);si(l,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Pa(o,this._parents,e,a)}function dk(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var s={value:i},l={value:function(){--n===0&&r()}};a.each(function(){var u=ma(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),u.on=t}),n===0&&r()})}var f6=0;function Pa(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function uk(e){return fr().transition(e)}function lm(){return++f6}var mr=fr.prototype;Pa.prototype=uk.prototype={constructor:Pa,select:ek,selectAll:tk,selectChild:mr.selectChild,selectChildren:mr.selectChildren,filter:ZS,merge:$S,selection:ak,transition:lk,call:mr.call,nodes:mr.nodes,node:mr.node,size:mr.size,empty:mr.empty,each:mr.each,on:QS,attr:GS,attrTween:jS,style:nk,styleTween:rk,text:ik,textTween:sk,remove:JS,tween:VS,delay:XS,duration:WS,ease:YS,easeVarying:KS,end:dk,[Symbol.iterator]:mr[Symbol.iterator]};function dm(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var p6={time:null,delay:0,duration:250,ease:dm};function m6(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function ck(e){var t,a;e instanceof Pa?(t=e._id,e=e._name):(t=lm(),(a=p6).time=ju(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],s=i.length,l,u=0;u<s;++u)(l=i[u])&&si(l,e,t,u,i,a||m6(l,t));return new Pa(o,this._parents,e,t)}fr.prototype.interrupt=qS;fr.prototype.transition=ck;var Yu=e=>()=>e;function Ux(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function tn(e,t,a){this.k=e,this.x=t,this.y=a}tn.prototype={constructor:tn,scale:function(e){return e===1?this:new tn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new tn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ns=new tn(1,0,0);Ku.prototype=tn.prototype;function Ku(e){for(;!e.__zoom;)if(!(e=e.parentNode))return ns;return e.__zoom}function um(e){e.stopImmediatePropagation()}function Hl(e){e.preventDefault(),e.stopImmediatePropagation()}function g6(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function h6(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function fk(){return this.__zoom||ns}function b6(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function x6(){return navigator.maxTouchPoints||"ontouchstart"in this}function w6(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function cm(){var e=g6,t=h6,a=w6,o=b6,n=x6,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],s=250,l=ts,u=Ki("start","zoom","end"),d,f,c,p=500,g=150,w=0,y=10;function h(L){L.property("__zoom",fk).on("wheel.zoom",k,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",A).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,N,E,M){var R=L.selection?L.selection():L;R.property("__zoom",fk),L!==R?v(L,N,E,M):R.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},h.scaleBy=function(L,N,E,M){h.scaleTo(L,function(){var R=this.__zoom.k,O=typeof N=="function"?N.apply(this,arguments):N;return R*O},E,M)},h.scaleTo=function(L,N,E,M){h.transform(L,function(){var R=t.apply(this,arguments),O=this.__zoom,D=E==null?x(R):typeof E=="function"?E.apply(this,arguments):E,H=O.invert(D),z=typeof N=="function"?N.apply(this,arguments):N;return a(m(b(O,z),D,H),R,i)},E,M)},h.translateBy=function(L,N,E,M){h.transform(L,function(){return a(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),i)},null,M)},h.translateTo=function(L,N,E,M,R){h.transform(L,function(){var O=t.apply(this,arguments),D=this.__zoom,H=M==null?x(O):typeof M=="function"?M.apply(this,arguments):M;return a(ns.translate(H[0],H[1]).scale(D.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof E=="function"?-E.apply(this,arguments):-E),O,i)},M,R)};function b(L,N){return N=Math.max(r[0],Math.min(r[1],N)),N===L.k?L:new tn(N,L.x,L.y)}function m(L,N,E){var M=N[0]-E[0]*L.k,R=N[1]-E[1]*L.k;return M===L.x&&R===L.y?L:new tn(L.k,M,R)}function x(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function v(L,N,E,M){L.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var R=this,O=arguments,D=C(R,O).event(M),H=t.apply(R,O),z=E==null?x(H):typeof E=="function"?E.apply(R,O):E,j=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),F=R.__zoom,Z=typeof N=="function"?N.apply(R,O):N,$=l(F.invert(z).concat(j/F.k),Z.invert(z).concat(j/Z.k));return function(ee){if(ee===1)ee=Z;else{var q=$(ee),Q=j/q[2];ee=new tn(Q,z[0]-q[0]*Q,z[1]-q[1]*Q)}D.zoom(null,ee)}})}function C(L,N,E){return!E&&L.__zooming||new S(L,N)}function S(L,N){this.that=L,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,N),this.taps=0}S.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,N){return this.mouse&&L!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var N=aa(this.that).datum();u.call(L,this.that,new Ux(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),N)}};function k(L,...N){if(!e.apply(this,arguments))return;var E=C(this,N).event(L),M=this.__zoom,R=Math.max(r[0],Math.min(r[1],M.k*Math.pow(2,o.apply(this,arguments)))),O=Da(L);if(E.wheel)(E.mouse[0][0]!==O[0]||E.mouse[0][1]!==O[1])&&(E.mouse[1]=M.invert(E.mouse[0]=O)),clearTimeout(E.wheel);else{if(M.k===R)return;E.mouse=[O,M.invert(O)],os(this),E.start()}Hl(L),E.wheel=setTimeout(D,g),E.zoom("mouse",a(m(b(M,R),E.mouse[0],E.mouse[1]),E.extent,i));function D(){E.wheel=null,E.end()}}function _(L,...N){if(c||!e.apply(this,arguments))return;var E=L.currentTarget,M=C(this,N,!0).event(L),R=aa(L.view).on("mousemove.zoom",z,!0).on("mouseup.zoom",j,!0),O=Da(L,E),D=L.clientX,H=L.clientY;Tu(L.view),um(L),M.mouse=[O,this.__zoom.invert(O)],os(this),M.start();function z(F){if(Hl(F),!M.moved){var Z=F.clientX-D,$=F.clientY-H;M.moved=Z*Z+$*$>w}M.event(F).zoom("mouse",a(m(M.that.__zoom,M.mouse[0]=Da(F,E),M.mouse[1]),M.extent,i))}function j(F){R.on("mousemove.zoom mouseup.zoom",null),Au(F.view,M.moved),Hl(F),M.event(F).end()}}function T(L,...N){if(e.apply(this,arguments)){var E=this.__zoom,M=Da(L.changedTouches?L.changedTouches[0]:L,this),R=E.invert(M),O=E.k*(L.shiftKey?.5:2),D=a(m(b(E,O),M,R),t.apply(this,N),i);Hl(L),s>0?aa(this).transition().duration(s).call(v,D,M,L):aa(this).call(h.transform,D,M,L)}}function A(L,...N){if(e.apply(this,arguments)){var E=L.touches,M=E.length,R=C(this,N,L.changedTouches.length===M).event(L),O,D,H,z;for(um(L),D=0;D<M;++D)H=E[D],z=Da(H,this),z=[z,this.__zoom.invert(z),H.identifier],R.touch0?!R.touch1&&R.touch0[2]!==z[2]&&(R.touch1=z,R.taps=0):(R.touch0=z,O=!0,R.taps=1+!!d);d&&(d=clearTimeout(d)),O&&(R.taps<2&&(f=z[0],d=setTimeout(function(){d=null},p)),os(this),R.start())}}function B(L,...N){if(this.__zooming){var E=C(this,N).event(L),M=L.changedTouches,R=M.length,O,D,H,z;for(Hl(L),O=0;O<R;++O)D=M[O],H=Da(D,this),E.touch0&&E.touch0[2]===D.identifier?E.touch0[0]=H:E.touch1&&E.touch1[2]===D.identifier&&(E.touch1[0]=H);if(D=E.that.__zoom,E.touch1){var j=E.touch0[0],F=E.touch0[1],Z=E.touch1[0],$=E.touch1[1],ee=(ee=Z[0]-j[0])*ee+(ee=Z[1]-j[1])*ee,q=(q=$[0]-F[0])*q+(q=$[1]-F[1])*q;D=b(D,Math.sqrt(ee/q)),H=[(j[0]+Z[0])/2,(j[1]+Z[1])/2],z=[(F[0]+$[0])/2,(F[1]+$[1])/2]}else if(E.touch0)H=E.touch0[0],z=E.touch0[1];else return;E.zoom("touch",a(m(D,H,z),E.extent,i))}}function U(L,...N){if(this.__zooming){var E=C(this,N).event(L),M=L.changedTouches,R=M.length,O,D;for(um(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),O=0;O<R;++O)D=M[O],E.touch0&&E.touch0[2]===D.identifier?delete E.touch0:E.touch1&&E.touch1[2]===D.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(D=Da(D,this),Math.hypot(f[0]-D[0],f[1]-D[1])<y)){var H=aa(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:Yu(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:Yu(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:Yu(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:Yu([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(i[0][0]=+L[0][0],i[1][0]=+L[1][0],i[0][1]=+L[0][1],i[1][1]=+L[1][1],h):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(s=+L,h):s},h.interpolate=function(L){return arguments.length?(l=L,h):l},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(w=(L=+L)*L,h):Math.sqrt(w)},h.tapDistance=function(L){return arguments.length?(y=+L,h):y},h}var Co={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Vl=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Xx=["Enter"," ","Escape"],Wx={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},ci;(function(e){e.Strict="strict",e.Loose="loose"})(ci||(ci={}));var an;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(an||(an={}));var gr;(function(e){e.Partial="partial",e.Full="full"})(gr||(gr={}));var Yx={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},In;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(In||(In={}));var Ul;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ul||(Ul={}));var ie;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ie||(ie={}));var pk={[ie.Left]:ie.Right,[ie.Right]:ie.Left,[ie.Top]:ie.Bottom,[ie.Bottom]:ie.Top};function Kx(e){return e===null?null:e?"valid":"invalid"}var Zx=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,_k=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),$x=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Qx=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var $u=(e,t=[0,0])=>{let{width:a,height:o}=Xo(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Jx=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",s=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(s=i?t.nodeLookup.get(r):$x(r)?r:t.nodeLookup.get(r.id)),s?(a=!0,bm(n,mm(s,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?xm(o):{x:0,y:0,width:0,height:0}},Gl=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=bm(a,mm(n)),o=!0)}),o?xm(a):{x:0,y:0,width:0,height:0}},gm=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let s=(t.x-a)/n,l=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:w=!1}=c;if(i&&!g||w)continue;let y=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x:b,y:m}=c.internals.positionAbsolute,x=Tk(s,l,u,d,b,m,y,h),v=y*h,C=r&&x>0;(!c.internals.handleBounds||C||x>=v||c.dragging)&&f.push(c)}return f},Ik=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function y6(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:s}=Xo(n);r=i>0&&s>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function Mk({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let s=y6(e,i),l=Gl(s),u=Ju(l,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function e0({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),s=i.parentId?a.get(i.parentId):void 0,{x:l,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!s)r?.("005",Co.error005());else{let{width:p,height:g}=Xo(s);p&&g&&(f=[[l,u],[l+p,u+g]])}else s&&ss(i.extent)&&(f=[[i.extent[0][0]+l,i.extent[0][1]+u],[i.extent[1][0]+l,i.extent[1][1]+u]]);let c=ss(f)?rs(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",Co.error015()),{position:{x:c.x-l+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function Nk({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||g)&&i.push(c)}let s=new Set(t.map(c=>c.id)),l=o.filter(c=>c.deletable!==!1),d=Ik(i,l);for(let c of l)s.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var ql=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),rs=(e={x:0,y:0},t,a)=>({x:ql(e.x,t[0][0],t[1][0]-(a?.width??0)),y:ql(e.y,t[0][1],t[1][1]-(a?.height??0))});function Ek(e,t,a){let{width:o,height:n}=Xo(a),{x:r,y:i}=a.internals.positionAbsolute;return rs(e,[[r,i],[r+o,i+n]],t)}var mk=(e,t,a)=>e<t?ql(Math.abs(e-t),1,t)/t:e>a?-ql(Math.abs(e-a),1,t)/t:0,hm=(e,t,a=15,o=40)=>{let n=mk(e.x,o,t.width-o)*a,r=mk(e.y,o,t.height-o)*a;return[n,r]},bm=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),jx=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),xm=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),jl=(e,t=[0,0])=>{let{x:a,y:o}=$x(e)?e.internals.positionAbsolute:$u(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},mm=(e,t=[0,0])=>{let{x:a,y:o}=$x(e)?e.internals.positionAbsolute:$u(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},t0=(e,t)=>xm(bm(jx(e),jx(t))),Tk=(e,t,a,o,n,r,i,s)=>{let l=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+s)-Math.max(t,r));return Math.ceil(l*u)},Qu=(e,t)=>Tk(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),a0=e=>Go(e.width)&&Go(e.height)&&Go(e.x)&&Go(e.y),Go=e=>!isNaN(e)&&isFinite(e),o0=(e,t)=>(a,o)=>{},Xl=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Wl=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let s={x:(e-a)/n,y:(t-o)/n};return r?Xl(s,i):s},is=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Fl(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function v6(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Fl(e,a),n=Fl(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Fl(e.top??e.y??0,a),n=Fl(e.bottom??e.y??0,a),r=Fl(e.left??e.x??0,t),i=Fl(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function C6(e,t,a,o,n,r){let{x:i,y:s}=is(e,[t,a,o]),{x:l,y:u}=is({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-l,f=r-u;return{left:Math.floor(i),top:Math.floor(s),right:Math.floor(d),bottom:Math.floor(f)}}var Ju=(e,t,a,o,n,r)=>{let i=v6(r,t,a),s=(t-i.x)/e.width,l=(a-i.y)/e.height,u=Math.min(s,l),d=ql(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,w=C6(e,p,g,d,t,a),y={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-y.left+y.right,y:g-y.top+y.bottom,zoom:d}},Yl=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function ss(e){return e!=null&&e!=="parent"}function Xo(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function n0(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function r0(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let s=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*s[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*s[1]}return r}function i0(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function Ak(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function Dk(e){return{...Wx,...e||{}}}function Zu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=jo(e),s=Wl({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:l,y:u}=a?Xl(s,t):s;return{xSnapped:l,ySnapped:u,...s}}var wm=e=>({width:e.offsetWidth,height:e.offsetHeight}),s0=e=>e?.getRootNode?.()||window?.document,S6=["INPUT","SELECT","TEXTAREA"];function l0(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:S6.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var d0=e=>"clientX"in e,jo=(e,t)=>{let a=d0(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},gk=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let s=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(s.left-a.left)/o,y:(s.top-a.top)/o,...wm(i)}})};function ym({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:s}){let l=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+s*.375+o*.125,d=Math.abs(l-e),f=Math.abs(u-t);return[l,u,d,f]}function fm(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function hk({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ie.Left:return[t-fm(t-o,r),a];case ie.Right:return[t+fm(o-t,r),a];case ie.Top:return[t,a-fm(a-n,r)];case ie.Bottom:return[t,a+fm(n-a,r)]}}function Kl({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,curvature:i=.25}){let[s,l]=hk({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=hk({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,g]=ym({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:s,sourceControlY:l,targetControlX:u,targetControlY:d});return[`M${e},${t} C${s},${l} ${u},${d} ${o},${n}`,f,c,p,g]}function u0({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,s=o<t?o+i:o-i;return[r,s,n,i]}function Rk({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,s=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+s}function Pk({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=bm(mm(e),mm(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Qu(i,xm(r))>0}var k6=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,L6=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),zk=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Co.error006()),t;let o=a.getEdgeId||k6,n;return Zx(e)?n={...e}:n={...e,id:o(e)},L6(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function vm({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,s]=u0({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,s]}var bk={[ie.Left]:{x:-1,y:0},[ie.Right]:{x:1,y:0},[ie.Top]:{x:0,y:-1},[ie.Bottom]:{x:0,y:1}},_6=({source:e,sourcePosition:t=ie.Bottom,target:a})=>t===ie.Left||t===ie.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},xk=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function I6({source:e,sourcePosition:t=ie.Bottom,target:a,targetPosition:o=ie.Top,center:n,offset:r,stepPosition:i}){let s=bk[t],l=bk[o],u={x:e.x+s.x*r,y:e.y+s.y*r},d={x:a.x+l.x*r,y:a.y+l.y*r},f=_6({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],w,y,h={x:0,y:0},b={x:0,y:0},[,,m,x]=u0({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(s[c]*l[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,y=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,y=n.y??u.y+(d.y-u.y)*i);let k=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y},{x:d.x,y}];s[c]===p?g=c==="x"?k:_:g=c==="x"?_:k}else{let k=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?g=s.x===p?_:k:g=s.y===p?k:_,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let N=Math.min(r-1,r-L);s[c]===p?h[c]=(u[c]>e[c]?-1:1)*N:b[c]=(d[c]>a[c]?-1:1)*N}}if(t!==o){let L=c==="x"?"y":"x",N=s[c]===l[L],E=u[L]>d[L],M=u[L]<d[L];(s[c]===1&&(!N&&E||N&&M)||s[c]!==1&&(!N&&M||N&&E))&&(g=c==="x"?k:_)}let T={x:u.x+h.x,y:u.y+h.y},A={x:d.x+b.x,y:d.y+b.y},B=Math.max(Math.abs(T.x-g[0].x),Math.abs(A.x-g[0].x)),U=Math.max(Math.abs(T.y-g[0].y),Math.abs(A.y-g[0].y));B>=U?(w=(T.x+A.x)/2,y=g[0].y):(w=g[0].x,y=(T.y+A.y)/2)}let v={x:u.x+h.x,y:u.y+h.y},C={x:d.x+b.x,y:d.y+b.y};return[[e,...v.x!==g[0].x||v.y!==g[0].y?[v]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],w,y,m,x]}function M6(e,t,a,o){let n=Math.min(xk(e,t)/2,xk(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let s=e.x<a.x?1:-1,l=e.y<a.y?-1:1;return`L ${r},${i+n*l}Q ${r},${i} ${r+n*s},${i}`}function ec({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,borderRadius:i=5,centerX:s,centerY:l,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,w]=I6({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:s,y:l},offset:u,stepPosition:d}),y=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)y+=M6(f[h-1],f[h],f[h+1],i);return y+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[y,c,p,g,w]}function wk(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Ok(e){let{sourceNode:t,targetNode:a}=e;if(!wk(t)||!wk(a))return null;let o=t.internals.handleBounds||yk(t.handles),n=a.internals.handleBounds||yk(a.handles),r=vk(o?.source??[],e.sourceHandle),i=vk(e.connectionMode===ci.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",Co.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=r?.position||ie.Bottom,l=i?.position||ie.Top,u=fi(t,r,s),d=fi(a,i,l);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:s,targetPosition:l}}function yk(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function fi(e,t,a=ie.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:s}=t??Xo(e);if(o)return{x:n+i/2,y:r+s/2};switch(t?.position??a){case ie.Top:return{x:n+i/2,y:r};case ie.Right:return{x:n+i,y:r+s/2};case ie.Bottom:return{x:n+i/2,y:r+s};case ie.Left:return{x:n,y:r+s/2}}}function vk(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Cm(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Bk(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,s)=>([s.markerStart||o,s.markerEnd||n].forEach(l=>{if(l&&typeof l=="object"){let u=Cm(l,t);r.has(u)||(i.push({id:u,color:l.color||a,...l}),r.add(u))}}),i),[]).sort((i,s)=>i.id.localeCompare(s.id))}var Hk=1e3,N6=10,c0={nodeOrigin:[0,0],nodeExtent:Vl,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},E6={...c0,checkEquality:!0};function f0(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function Fk(e,t,a){let o=f0(c0,a);for(let n of e.values())if(n.parentId)m0(n,e,t,o);else{let r=$u(n,o.nodeOrigin),i=ss(n.extent)?n.extent:o.nodeExtent,s=rs(r,i,Xo(n));n.internals.positionAbsolute=s}}function T6(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function p0(e){return e==="manual"}function Sm(e,t,a,o={}){let n=f0(E6,o),r={i:0},i=new Map(t),s=n?.elevateNodesOnSelect&&!p0(n.zIndexMode)?Hk:0,l=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=$u(d,n.nodeOrigin),p=ss(d.extent)?d.extent:n.nodeExtent,g=rs(c,p,Xo(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:T6(d,f),z:Uk(d,s,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(l=!1),d.parentId&&m0(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:l,hasSelectedNodes:u}}function A6(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function m0(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:s,zIndexMode:l}=f0(c0,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}A6(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&l==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*N6),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!p0(l)?Hk:0,{x:c,y:p,z:g}=D6(e,d,i,s,f,l),{positionAbsolute:w}=e.internals,y=c!==w.x||p!==w.y;(y||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:c,y:p}:w,z:g}})}function Uk(e,t,a){let o=Go(e.zIndex)?e.zIndex:0;return p0(a)?o:o+(e.selected?t:0)}function D6(e,t,a,o,n,r){let{x:i,y:s}=t.internals.positionAbsolute,l=Xo(e),u=$u(e,a),d=ss(e.extent)?rs(u,e.extent,l):u,f=rs({x:i+d.x,y:s+d.y},o,l);e.extent==="parent"&&(f=Ek(f,l,t));let c=Uk(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function km(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let s=t.get(i.parentId);if(!s)continue;let l=r.get(i.parentId)?.expandedRect??jl(s),u=t0(l,i.rect);r.set(i.parentId,{expandedRect:u,parent:s})}return r.size>0&&r.forEach(({expandedRect:i,parent:s},l)=>{let u=s.internals.positionAbsolute,d=Xo(s),f=s.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,g=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),y=(g-d.width)*f[0],h=(w-d.height)*f[1];(c>0||p>0||y||h)&&(n.push({id:l,type:"position",position:{x:s.position.x-c+y,y:s.position.y-p+h}}),a.get(l)?.forEach(b=>{e.some(m=>m.id===b.id)||n.push({id:b.id,type:"position",position:{x:b.position.x+c,y:b.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:l,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-y:0),height:w+(p?f[1]*p-h:0)}})}),n}function qk(e,t,a,o,n,r,i){let s=o?.querySelector(".xyflow__viewport"),l=!1;if(!s)return{changes:[],updatedInternals:l};let u=[],d=window.getComputedStyle(s),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),l=!0;continue}let w=wm(p.nodeElement),y=g.measured.width!==w.width||g.measured.height!==w.height;if(!!(w.width&&w.height&&(y||!g.internals.handleBounds||p.force))){let b=p.nodeElement.getBoundingClientRect(),m=ss(g.extent)?g.extent:r,{positionAbsolute:x}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(x=Ek(x,w,C))}else m&&(x=rs(x,m,w));let v={...g,measured:w,internals:{...g.internals,positionAbsolute:x,handleBounds:{source:gk("source",p.nodeElement,b,f,g.id),target:gk("target",p.nodeElement,b,f,g.id)}}};t.set(g.id,v),g.parentId&&m0(v,t,a,{nodeOrigin:n,zIndexMode:i}),l=!0,y&&(u.push({id:g.id,type:"dimensions",dimensions:w}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:jl(v,n)}))}}if(c.length>0){let p=km(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:l}}async function Vk({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function Ck(e,t,a,o,n,r){let i=n,s=o.get(i)||new Map;o.set(i,s.set(a,t)),i=`${n}-${e}`;let l=o.get(i)||new Map;if(o.set(i,l.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function g0(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:s=null}=o,l={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:s},u=`${n}-${i}--${r}-${s}`,d=`${r}-${s}--${n}-${i}`;Ck("source",l,d,e,n,i),Ck("target",l,u,e,r,s),t.set(o.id,o)}}function Gk(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:Gk(a,t):!1}function Sk(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function R6(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!Gk(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let s=e.get(r);s&&n.set(r,{id:r,position:s.position||{x:0,y:0},distance:{x:a.x-s.internals.positionAbsolute.x,y:a.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return n}function qx({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,s]of t){let l=a.get(i)?.internals.userNode;l&&n.push({...l,position:s.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function P6({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=Xl(r,t);return{x:i.x-r.x,y:i.y-r.y}}function jk({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,s=new Map,l=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,w=null;function y({noDragClassName:b,handleSelector:m,domNode:x,isSelectable:v,nodeId:C,nodeClickDistance:S=0}){c=aa(x);function k({x:B,y:U}){let{nodeLookup:L,nodeExtent:N,snapGrid:E,snapToGrid:M,nodeOrigin:R,onNodeDrag:O,onSelectionDrag:D,onError:H,updateNodePositions:z}=t();r={x:B,y:U};let j=!1,F=s.size>1,Z=F&&N?jx(Gl(s)):null,$=F&&M?P6({dragItems:s,snapGrid:E,x:B,y:U}):null;for(let[ee,q]of s){if(!L.has(ee))continue;let Q={x:B-q.distance.x,y:U-q.distance.y};M&&(Q=$?{x:Math.round(Q.x+$.x),y:Math.round(Q.y+$.y)}:Xl(Q,E));let ne=null;if(F&&N&&!q.extent&&Z){let{positionAbsolute:ce}=q.internals,xe=ce.x-Z.x+N[0][0],Le=ce.x+q.measured.width-Z.x2+N[1][0],Oe=ce.y-Z.y+N[0][1],yt=ce.y+q.measured.height-Z.y2+N[1][1];ne=[[xe,Oe],[Le,yt]]}let{position:de,positionAbsolute:re}=e0({nodeId:ee,nextPosition:Q,nodeLookup:L,nodeExtent:ne||N,nodeOrigin:R,onError:H});j=j||q.position.x!==de.x||q.position.y!==de.y,q.position=de,q.internals.positionAbsolute=re}if(g=g||j,!!j&&(z(s,!0),w&&(o||O||!C&&D))){let[ee,q]=qx({nodeId:C,dragItems:s,nodeLookup:L});o?.(w,s,ee,q),O?.(w,ee,q),C||D?.(w,q)}}async function _(){if(!d)return;let{transform:B,panBy:U,autoPanSpeed:L,autoPanOnNodeDrag:N}=t();if(!N){l=!1,cancelAnimationFrame(i);return}let[E,M]=hm(u,d,L);(E!==0||M!==0)&&(r.x=(r.x??0)-E/B[2],r.y=(r.y??0)-M/B[2],await U({x:E,y:M})&&k(r)),i=requestAnimationFrame(_)}function T(B){let{nodeLookup:U,multiSelectionActive:L,nodesDraggable:N,transform:E,snapGrid:M,snapToGrid:R,selectNodesOnDrag:O,onNodeDragStart:D,onSelectionDragStart:H,unselectNodesAndEdges:z}=t();f=!0,(!O||!v)&&!L&&C&&(U.get(C)?.selected||z()),v&&O&&C&&e?.(C);let j=Zu(B.sourceEvent,{transform:E,snapGrid:M,snapToGrid:R,containerBounds:d});if(r=j,s=R6(U,N,j,C),s.size>0&&(a||D||!C&&H)){let[F,Z]=qx({nodeId:C,dragItems:s,nodeLookup:U});a?.(B.sourceEvent,s,F,Z),D?.(B.sourceEvent,F,Z),C||H?.(B.sourceEvent,Z)}}let A=Gp().clickDistance(S).on("start",B=>{let{domNode:U,nodeDragThreshold:L,transform:N,snapGrid:E,snapToGrid:M}=t();d=U?.getBoundingClientRect()||null,p=!1,g=!1,w=B.sourceEvent,L===0&&T(B),r=Zu(B.sourceEvent,{transform:N,snapGrid:E,snapToGrid:M,containerBounds:d}),u=jo(B.sourceEvent,d)}).on("drag",B=>{let{autoPanOnNodeDrag:U,transform:L,snapGrid:N,snapToGrid:E,nodeDragThreshold:M,nodeLookup:R}=t(),O=Zu(B.sourceEvent,{transform:L,snapGrid:N,snapToGrid:E,containerBounds:d});if(w=B.sourceEvent,(B.sourceEvent.type==="touchmove"&&B.sourceEvent.touches.length>1||C&&!R.has(C))&&(p=!0),!p){if(!l&&U&&f&&(l=!0,_()),!f){let D=jo(B.sourceEvent,d),H=D.x-u.x,z=D.y-u.y;Math.sqrt(H*H+z*z)>M&&T(B)}(r.x!==O.xSnapped||r.y!==O.ySnapped)&&s&&f&&(u=jo(B.sourceEvent,d),k(O))}}).on("end",B=>{if(!f||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(l=!1,f=!1,cancelAnimationFrame(i),s.size>0){let{nodeLookup:U,updateNodePositions:L,onNodeDragStop:N,onSelectionDragStop:E}=t();if(g&&(L(s,!1),g=!1),n||N||!C&&E){let[M,R]=qx({nodeId:C,dragItems:s,nodeLookup:U,dragging:!1});n?.(B.sourceEvent,s,M,R),N?.(B.sourceEvent,M,R),C||E?.(B.sourceEvent,R)}}}).filter(B=>{let U=B.target;return!B.button&&(!b||!Sk(U,`.${b}`,x))&&(!m||Sk(U,m,x))});c.call(A)}function h(){c?.on(".drag",null)}return{update:y,destroy:h}}function z6(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Qu(n,jl(r))>0&&o.push(r);return o}var O6=250;function B6(e,t,a,o){let n=[],r=1/0,i=z6(e,a,t+O6);for(let s of i){let l=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of l){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=fi(s,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let s=o.type==="source"?"target":"source";return n.find(l=>l.type===s)??n[0]}return n[0]}function Xk(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let s=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],l=(a?s?.find(u=>u.id===a):s?.[0])??null;return l&&r?{...l,...fi(i,l,l.position,!0)}:l}function Wk(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function H6(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var Yk=()=>!0;function F6(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:s,nodeLookup:l,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:w,onConnectEnd:y,isValidConnection:h=Yk,onReconnectEnd:b,updateConnection:m,getTransform:x,getFromHandle:v,autoPanSpeed:C,dragThreshold:S=1,handleDomNode:k}){let _=s0(e.target),T=0,A,{x:B,y:U}=jo(e),L=Wk(r,k),N=s?.getBoundingClientRect(),E=!1;if(!N||!L)return;let M=Xk(n,L,o,l,t);if(!M)return;let R=jo(e,N),O=!1,D=null,H=!1,z=null;function j(){if(!d||!N)return;let[de,re]=hm(R,N,C);c({x:de,y:re}),T=requestAnimationFrame(j)}let F={...M,nodeId:n,type:L,position:M.position},Z=l.get(n),ee={inProgress:!0,isValid:null,from:fi(Z,F,ie.Left,!0),fromHandle:F,fromPosition:F.position,fromNode:Z,to:R,toHandle:null,toPosition:pk[F.position],toNode:null,pointer:R};function q(){E=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}S===0&&q();function Q(de){if(!E){let{x:yt,y:vt}=jo(de),uo=yt-B,ae=vt-U;if(!(uo*uo+ae*ae>S*S))return;q()}if(!v()||!F){ne(de);return}let re=x();R=jo(de,N),A=B6(Wl(R,re,!1,[1,1]),a,l,F),O||(j(),O=!0);let ce=Kk(de,{handle:A,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:h,doc:_,lib:u,flowId:f,nodeLookup:l});z=ce.handleDomNode,D=ce.connection,H=H6(!!A,ce.isValid);let xe=l.get(n),Le=xe?fi(xe,F,ie.Left,!0):ee.from,Oe={...ee,from:Le,isValid:H,to:ce.toHandle&&H?is({x:ce.toHandle.x,y:ce.toHandle.y},re):R,toHandle:ce.toHandle,toPosition:H&&ce.toHandle?ce.toHandle.position:pk[F.position],toNode:ce.toHandle?l.get(ce.toHandle.nodeId):null,pointer:R};m(Oe),ee=Oe}function ne(de){if(!("touches"in de&&de.touches.length>0)){if(E){(A||z)&&D&&H&&w?.(D);let{inProgress:re,...ce}=ee,xe={...ce,toPosition:ee.toHandle?ee.toPosition:null};y?.(de,xe),r&&b?.(de,xe)}p(),cancelAnimationFrame(T),O=!1,H=!1,D=null,z=null,_.removeEventListener("mousemove",Q),_.removeEventListener("mouseup",ne),_.removeEventListener("touchmove",Q),_.removeEventListener("touchend",ne)}}_.addEventListener("mousemove",Q),_.addEventListener("mouseup",ne),_.addEventListener("touchmove",Q),_.addEventListener("touchend",ne)}function Kk(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:s,flowId:l,isValidConnection:u=Yk,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${s}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=jo(e),w=i.elementFromPoint(p,g),y=w?.classList.contains(`${s}-flow__handle`)?w:c,h={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let b=Wk(void 0,y),m=y.getAttribute("data-nodeid"),x=y.getAttribute("data-handleid"),v=y.classList.contains("connectable"),C=y.classList.contains("connectableend");if(!m||!b)return h;let S={source:f?m:o,sourceHandle:f?x:n,target:f?o:m,targetHandle:f?n:x};h.connection=S;let _=v&&C&&(a===ci.Strict?f&&b==="source"||!f&&b==="target":m!==o||x!==n);h.isValid=_&&u(S),h.toHandle=Xk(m,b,x,d,a,!0)}return h}var Lm={onPointerDown:F6,isValid:Kk};function Zk({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=aa(e);function r({translateExtent:s,width:l,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=a(),v=m.sourceEvent.ctrlKey&&Yl()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,S=x[2]*Math.pow(2,C*v);t.scaleTo(S)},w=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let x=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let v=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[v[0]-w[0],v[1]-w[1]];w=v;let S=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),k={x:x[0]-C[0]*S,y:x[1]-C[1]*S},_=[[0,0],[l,u]];t.setViewportConstrained({x:k.x,y:k.y,zoom:x[2]},_,s)},b=cm().on("start",y).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(b,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:Da}}var _m=e=>({x:e.x,y:e.y,zoom:e.k}),Vx=({x:e,y:t,zoom:a})=>ns.translate(e,t).scale(a),ui=(e,t)=>e.target.closest(`.${t}`),$k=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),U6=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Gx=(e,t=0,a=U6,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},Qk=e=>{let t=e.ctrlKey&&Yl()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function q6({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:s,onPanZoom:l,onPanZoomEnd:u}){return d=>{if(ui(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let y=Da(d),h=Qk(d),b=f*Math.pow(2,h);o.scaleTo(a,b,y,d);return}let c=d.deltaMode===1?20:1,p=n===an.Vertical?0:d.deltaX*c,g=n===an.Horizontal?0:d.deltaY*c;!Yl()&&d.shiftKey&&n!==an.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let w=_m(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?l?.(d,w):(e.isPanScrolling=!0,s?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function V6({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,s=ui(o,e);if(o.ctrlKey&&r&&s&&o.preventDefault(),i||s)return null;o.preventDefault(),a.call(this,o,n)}}function G6({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=_m(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function j6({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&$k(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,_m(r.transform))}}function X6({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&$k(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let s=_m(i.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,s)},a?150:0)}}}function W6({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:s,noWheelClassName:l,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(ui(c,`${d}-flow__node`)||ui(c,`${d}-flow__edge`)||ui(c,`${d}-flow__selection`)||ui(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||s||f&&!w||ui(c,l)&&w||ui(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let y=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&y}}function Jk({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:s,onDraggingChange:l}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(U=>{let L=U[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=cm().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=aa(e).call(p);x({x:n.x,y:n.y,zoom:ql(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=g.on("wheel.zoom"),y=g.on("dblclick.zoom");p.wheelDelta(Qk);async function h(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?pr:ts).transform(Gx(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function b({noWheelClassName:U,noPanClassName:L,onPaneContextMenu:N,userSelectionActive:E,panOnScroll:M,panOnDrag:R,panOnScrollMode:O,panOnScrollSpeed:D,preventScrolling:H,zoomOnPinch:z,zoomOnScroll:j,zoomOnDoubleClick:F,panActivationKeyPressed:Z=!1,zoomActivationKeyPressed:$,lib:ee,onTransformChange:q,connectionInProgress:Q,paneClickDistance:ne,selectionOnDrag:de}){E&&!u.isZoomingOrPanning&&m();let re=M&&!$&&!E;p.clickDistance(de?1/0:!Go(ne)||ne<0?0:ne);let ce=re?q6({zoomPanValues:u,noWheelClassName:U,d3Selection:g,d3Zoom:p,panOnScrollMode:O,panOnScrollSpeed:D,zoomOnPinch:z,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:s}):V6({noWheelClassName:U,preventScrolling:H,d3ZoomHandler:w});g.on("wheel.zoom",ce,{passive:!1});let xe=G6({zoomPanValues:u,onDraggingChange:l,onPanZoomStart:i});p.on("start",xe);let Le=j6({zoomPanValues:u,panOnDrag:R,onPaneContextMenu:!!N,onPanZoom:r,onTransformChange:q});p.on("zoom",Le);let Oe=X6({zoomPanValues:u,panOnDrag:R,panOnScroll:M,onPaneContextMenu:N,onPanZoomEnd:s,onDraggingChange:l});p.on("end",Oe);let yt=W6({panActivationKeyPressed:Z,zoomActivationKeyPressed:$,panOnDrag:R,zoomOnScroll:j,panOnScroll:M,zoomOnDoubleClick:F,zoomOnPinch:z,userSelectionActive:E,noPanClassName:L,noWheelClassName:U,lib:ee,connectionInProgress:Q});p.filter(yt),F?g.on("dblclick.zoom",y):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(U,L,N){let E=Vx(U),M=p?.constrain()(E,L,N);return M&&await h(M),M}async function v(U,L){let N=Vx(U);return await h(N,L),N}function C(U){if(g){let L=Vx(U),N=g.property("__zoom");(N.k!==U.zoom||N.x!==U.x||N.y!==U.y)&&p?.transform(g,L,null,{sync:!0})}}function S(){let U=g?Ku(g.node()):{x:0,y:0,k:1};return{x:U.x,y:U.y,zoom:U.k}}async function k(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?pr:ts).scaleTo(Gx(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}async function _(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?pr:ts).scaleBy(Gx(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function T(U){p?.scaleExtent(U)}function A(U){p?.translateExtent(U)}function B(U){let L=!Go(U)||U<0?0:U;p?.clickDistance(L)}return{update:b,destroy:m,setViewport:v,setViewportConstrained:x,getViewport:S,scaleTo:k,scaleBy:_,setScaleExtent:T,setTranslateExtent:A,syncViewport:C,setClickDistance:B}}var pi;(function(e){e.Line="line",e.Handle="handle"})(pi||(pi={}));function Y6({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,s=a-o,l=[i>0?1:i<0?-1:0,s>0?1:s<0?-1:0];return i&&n&&(l[0]=l[0]*-1),s&&r&&(l[1]=l[1]*-1),l}function kk(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function li(e,t){return Math.max(0,t-e)}function di(e,t){return Math.max(0,e-t)}function pm(e,t,a){return Math.max(0,t-e,e-a)}function Lk(e,t){return e?!t:t}function K6(e,t,a,o,n,r,i,s){let{affectsX:l,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:w,maxWidth:y,minHeight:h,maxHeight:b}=o,{x:m,y:x,width:v,height:C,aspectRatio:S}=e,k=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?g-e.pointerY:0),T=v+(l?-k:k),A=C+(u?-_:_),B=-r[0]*v,U=-r[1]*C,L=pm(T,w,y),N=pm(A,h,b);if(i){let R=0,O=0;l&&k<0?R=li(m+k+B,i[0][0]):!l&&k>0&&(R=di(m+T+B,i[1][0])),u&&_<0?O=li(x+_+U,i[0][1]):!u&&_>0&&(O=di(x+A+U,i[1][1])),L=Math.max(L,R),N=Math.max(N,O)}if(s){let R=0,O=0;l&&k>0?R=di(m+k,s[0][0]):!l&&k<0&&(R=li(m+T,s[1][0])),u&&_>0?O=di(x+_,s[0][1]):!u&&_<0&&(O=li(x+A,s[1][1])),L=Math.max(L,R),N=Math.max(N,O)}if(n){if(d){let R=pm(T/S,h,b)*S;if(L=Math.max(L,R),i){let O=0;!l&&!u||l&&!u&&c?O=di(x+U+T/S,i[1][1])*S:O=li(x+U+(l?k:-k)/S,i[0][1])*S,L=Math.max(L,O)}if(s){let O=0;!l&&!u||l&&!u&&c?O=li(x+T/S,s[1][1])*S:O=di(x+(l?k:-k)/S,s[0][1])*S,L=Math.max(L,O)}}if(f){let R=pm(A*S,w,y)/S;if(N=Math.max(N,R),i){let O=0;!l&&!u||u&&!l&&c?O=di(m+A*S+B,i[1][0])/S:O=li(m+(u?_:-_)*S+B,i[0][0])/S,N=Math.max(N,O)}if(s){let O=0;!l&&!u||u&&!l&&c?O=li(m+A*S,s[1][0])/S:O=di(m+(u?_:-_)*S,s[0][0])/S,N=Math.max(N,O)}}}_=_+(_<0?N:-N),k=k+(k<0?L:-L),n&&(c?T>A*S?_=(Lk(l,u)?-k:k)/S:k=(Lk(l,u)?-_:_)*S:d?(_=k/S,u=l):(k=_*S,l=u));let E=l?m+k:m,M=u?x+_:x;return{width:v+(l?-k:k),height:C+(u?-_:_),x:r[0]*k*(l?-1:1)+E,y:r[1]*_*(u?-1:1)+M}}var eL={width:0,height:0,x:0,y:0},Z6={...eL,pointerX:0,pointerY:0,aspectRatio:1};function $6(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,s=a[0]*r,l=a[1]*i;return[[o-s,n-l],[o+r-s,n+i-l]]}function tL({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=aa(e),i={controlDirection:kk("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:w,shouldResize:y}){let h={...eL},b={...Z6};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:kk(u)};let m,x=null,v=[],C,S,k,_=!1,T=Gp().on("start",A=>{let{nodeLookup:B,transform:U,snapGrid:L,snapToGrid:N,nodeOrigin:E,paneDomNode:M}=a();if(m=B.get(t),!m)return;x=M?.getBoundingClientRect()??null;let{xSnapped:R,ySnapped:O}=Zu(A.sourceEvent,{transform:U,snapGrid:L,snapToGrid:N,containerBounds:x});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},b={...h,pointerX:R,pointerY:O,aspectRatio:h.width/h.height},C=void 0,S=ss(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=B.get(m.parentId)),C&&m.extent==="parent"&&(S=[[0,0],[C.measured.width,C.measured.height]]),v=[],k=void 0;for(let[D,H]of B)if(H.parentId===t&&(v.push({id:D,position:{...H.position},extent:H.extent}),H.extent==="parent"||H.expandParent)){let z=$6(H,m,H.origin??E);k?k=[[Math.min(z[0][0],k[0][0]),Math.min(z[0][1],k[0][1])],[Math.max(z[1][0],k[1][0]),Math.max(z[1][1],k[1][1])]]:k=z}p?.(A,{...h})}).on("drag",A=>{let{transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:N}=a(),E=Zu(A.sourceEvent,{transform:B,snapGrid:U,snapToGrid:L,containerBounds:x}),M=[];if(!m)return;let{x:R,y:O,width:D,height:H}=h,z={},j=m.origin??N,{width:F,height:Z,x:$,y:ee}=K6(b,i.controlDirection,E,i.boundaries,i.keepAspectRatio,j,S,k),q=F!==D,Q=Z!==H,ne=$!==R&&q,de=ee!==O&&Q;if(!ne&&!de&&!q&&!Q)return;if((ne||de||j[0]===1||j[1]===1)&&(z.x=ne?$:h.x,z.y=de?ee:h.y,h.x=z.x,h.y=z.y,v.length>0)){let Le=$-R,Oe=ee-O;for(let yt of v)yt.position={x:yt.position.x-Le+j[0]*(F-D),y:yt.position.y-Oe+j[1]*(Z-H)},M.push(yt)}if((q||Q)&&(z.width=q&&(!i.resizeDirection||i.resizeDirection==="horizontal")?F:h.width,z.height=Q&&(!i.resizeDirection||i.resizeDirection==="vertical")?Z:h.height,h.width=z.width,h.height=z.height),C&&m.expandParent){let Le=j[0]*(z.width??0);z.x&&z.x<Le&&(h.x=Le,b.x=b.x-(z.x-Le));let Oe=j[1]*(z.height??0);z.y&&z.y<Oe&&(h.y=Oe,b.y=b.y-(z.y-Oe))}let re=Y6({width:h.width,prevWidth:D,height:h.height,prevHeight:H,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),ce={...h,direction:re};y?.(A,ce)!==!1&&(_=!0,g?.(A,ce),o(z,M))}).on("end",A=>{_&&(w?.(A,{...h}),n?.({...h}),_=!1)});r.call(T)}function l(){r.on(".drag",null)}return{update:s,destroy:l}}var mL=I(J(),1),gL=I(dL(),1);var cL={},uL=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(cL.env?cL.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,l);return l},fL=e=>e?uL(e):uL;var{useDebugValue:g8}=mL.default,{useSyncExternalStoreWithSelector:h8}=gL.default,b8=e=>e;function b0(e,t=b8,a){let o=h8(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return g8(o),o}var pL=(e,t)=>{let a=fL(e),o=(n,r=t)=>b0(a,n,r);return Object.assign(o,a),o},hL=(e,t)=>e?pL(e,t):pL;function Je(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var x8=I(Qt()),Tm=(0,G.createContext)(null),w8=Tm.Provider,VL=Co.error001("react");function Me(e,t){let a=(0,G.useContext)(Tm);if(a===null)throw new Error(VL);return b0(a,e,t)}function ct(){let e=(0,G.useContext)(Tm);if(e===null)throw new Error(VL);return(0,G.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var bL={display:"none"},y8={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},GL="react-flow__node-desc",jL="react-flow__edge-desc",v8="react-flow__aria-live",C8=e=>e.ariaLiveMessage,S8=e=>e.ariaLabelConfig;function k8({rfId:e}){let t=Me(C8);return(0,V.jsx)("div",{id:`${v8}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:y8,children:t})}function L8({rfId:e,disableKeyboardA11y:t}){let a=Me(S8);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{id:`${GL}-${e}`,style:bL,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,V.jsx)("div",{id:`${jL}-${e}`,style:bL,children:a["edge.a11yDescription.default"]}),!t&&(0,V.jsx)(k8,{rfId:e})]})}var Am=(0,G.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,V.jsx)("div",{className:_t(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Am.displayName="Panel";var xL="https://reactflow.dev?utm_source=attribution";function _8({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,V.jsx)(Am,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${xL}`,children:(0,V.jsx)("a",{href:xL,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var I8=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Mm=e=>e.id;function M8(e,t){return Je(e.selectedNodes.map(Mm),t.selectedNodes.map(Mm))&&Je(e.selectedEdges.map(Mm),t.selectedEdges.map(Mm))}function N8({onSelectionChange:e}){let t=ct(),{selectedNodes:a,selectedEdges:o}=Me(I8,M8);return(0,G.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var E8=e=>!!e.onSelectionChangeHandlers;function T8({onSelectionChange:e}){let t=Me(E8);return e||t?(0,V.jsx)(N8,{onSelectionChange:e}):null}var XL=[0,0],A8={x:0,y:0,zoom:1},D8=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],wL=[...D8,"rfId"],R8=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),yL={translateExtent:Vl,nodeOrigin:XL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function P8(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:s,setDefaultNodesAndEdges:l}=Me(R8,Je),u=ct();(0,G.useEffect)(()=>(l(e.defaultNodes,e.defaultEdges),()=>{d.current=yL,s()}),[]);let d=(0,G.useRef)(yL);return(0,G.useEffect)(()=>{for(let f of wL){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:Dk(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},wL.map(f=>e[f])),null}function vL(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function z8(e){let[t,a]=(0,G.useState)(e==="system"?null:e);return(0,G.useEffect)(()=>{if(e!=="system"){a(e);return}let o=vL(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:vL()?.matches?"dark":"light"}var CL=typeof document<"u"?document:null;function tc(e=null,t={target:CL,actInsideInputWithModifier:!0}){let[a,o]=(0,G.useState)(!1),n=(0,G.useRef)(!1),r=(0,G.useRef)(new Set([])),[i,s]=(0,G.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,G.useEffect)(()=>{let l=t?.target??CL,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&l0(p))return!1;let w=kL(p.code,s);if(r.current.add(p[w]),SL(i,r.current,!1)){let y=p.composedPath?.()?.[0]||p.target,h=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=kL(p.code,s);SL(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return l?.addEventListener("keydown",d),l?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{l?.removeEventListener("keydown",d),l?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function SL(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function kL(e,t){return t.includes(e)?"code":"key"}var O8=()=>{let e=ct();return(0,G.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:s}=e.getState(),l=Ju(t,o,n,r,i,a?.padding??.1);return s?(await s.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:s,y:l}=i.getBoundingClientRect(),u={x:t.x-s,y:t.y-l},d=a.snapGrid??n,f=a.snapToGrid??r;return Wl(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=is(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function WL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let s={...r};for(let l of i)B8(l,s);a.push(s)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function B8(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function v0(e,t){return WL(e,t)}function C0(e,t){return WL(e,t)}function ls(e,t){return{id:e,type:"select",selected:t}}function $l(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(ls(r.id,i)))}return o}function LL({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),s=i?.internals?.userNode??i;s!==void 0&&s!==r&&a.push({id:r.id,item:r,type:"replace"}),s===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function _L(e){return{id:e.id,type:"remove"}}var H8=o0("React Flow","https://reactflow.dev/");function F8(e,t,a={}){return zk(e,t,{...a,onError:a.onError??H8})}var IL=e=>_k(e),U8=e=>Zx(e);function YL(e){return(0,G.forwardRef)(e)}var KL=typeof window<"u"?G.useLayoutEffect:G.useEffect;function ML(e){let[t,a]=(0,G.useState)(BigInt(0)),[o]=(0,G.useState)(()=>q8(()=>a(n=>n+BigInt(1))));return KL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function q8(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var ZL=(0,G.createContext)(null);function V8({children:e}){let t=ct(),a=(0,G.useCallback)(s=>{let{nodes:l=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),w=l;for(let h of s)w=typeof h=="function"?h(w):h;let y=LL({items:w,lookup:c});for(let h of g.values())y=h(y);d&&u(w),y.length>0?f?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:b,setNodes:m}=t.getState();h&&m(b)})},[]),o=ML(a),n=(0,G.useCallback)(s=>{let{edges:l=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=l;for(let g of s)p=typeof g=="function"?g(p):g;d?u(p):f&&f(LL({items:p,lookup:c}))},[]),r=ML(n),i=(0,G.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,V.jsx)(ZL.Provider,{value:i,children:e})}function G8(){let e=(0,G.useContext)(ZL);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var j8=e=>!!e.panZoom;function Sa(){let e=O8(),t=ct(),a=G8(),o=Me(j8),n=(0,G.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},s=f=>{a.edgeQueue.push(f)},l=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=IL(f)?f:c.get(f.id),w=g.parentId?r0(g.position,g.measured,g.parentId,c,p):g.position,y={...g,position:w,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return jl(y)},u=(f,c,p={replace:!1})=>{i(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&IL(y)?y:{...w,...y}}return w}))},d=(f,c,p={replace:!1})=>{s(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&U8(y)?y:{...w,...y}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:s,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,w,y]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y:w,zoom:y}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:w,onEdgesDelete:y,triggerNodeChanges:h,triggerEdgeChanges:b,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:v,edges:C}=await Nk({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:x}),S=C.length>0,k=v.length>0;if(S){let _=C.map(_L);y?.(C),b(_)}if(k){let _=v.map(_L);w?.(v),h(_)}return(k||S)&&m?.({nodes:v,edges:C}),{deletedNodes:v,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=a0(f),w=g?f:l(f),y=p!==void 0;return w?(p||t.getState().nodes).filter(h=>{let b=t.getState().nodeLookup.get(h.id);if(b&&!g&&(h.id===f.id||!b.internals.positionAbsolute))return!1;let m=jl(y?h:b),x=Qu(m,w);return c&&x>0||x>=m.width*m.height||x>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=a0(f)?f:l(f);if(!w)return!1;let y=Qu(w,c);return p&&y>0||y>=c.width*c.height||y>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Jx(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??Ak();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,G.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var NL=e=>e.selected,X8=typeof window<"u"?window:void 0;function W8({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=ct(),{deleteElements:o}=Sa(),n=tc(e,{actInsideInputWithModifier:!1}),r=tc(t,{target:X8});(0,G.useEffect)(()=>{if(n){let{edges:i,nodes:s}=a.getState();o({nodes:s.filter(NL),edges:i.filter(NL)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,G.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function Y8(e){let t=ct();(0,G.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=wm(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Co.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Dm={position:"absolute",width:"100%",height:"100%",top:0,left:0},K8=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Z8({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=an.Free,zoomOnDoubleClick:s=!0,panOnDrag:l=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:w,noWheelClassName:y,noPanClassName:h,onViewportChange:b,isControlledViewport:m,paneClickDistance:x,selectionOnDrag:v}){let C=ct(),S=(0,G.useRef)(null),{userSelectionActive:k,lib:_,connectionInProgress:T}=Me(K8,Je),A=tc(p),B=(0,G.useRef)();Y8(S);let U=(0,G.useCallback)(L=>{b?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[b,m]);return(0,G.useEffect)(()=>{if(S.current){B.current=Jk({domNode:S.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:M=>C.setState(R=>R.paneDragging===M?R:{paneDragging:M}),onPanZoomStart:(M,R)=>{let{onViewportChangeStart:O,onMoveStart:D}=C.getState();D?.(M,R),O?.(R)},onPanZoom:(M,R)=>{let{onViewportChange:O,onMove:D}=C.getState();D?.(M,R),O?.(R)},onPanZoomEnd:(M,R)=>{let{onViewportChangeEnd:O,onMoveEnd:D}=C.getState();D?.(M,R),O?.(R)}});let{x:L,y:N,zoom:E}=B.current.getViewport();return C.setState({panZoom:B.current,transform:[L,N,E],domNode:S.current.closest(".react-flow")}),()=>{B.current?.destroy()}}},[]),(0,G.useEffect)(()=>{B.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:s,panOnDrag:l,zoomActivationKeyPressed:A,preventScrolling:g,noPanClassName:h,userSelectionActive:k,noWheelClassName:y,lib:_,onTransformChange:U,connectionInProgress:T,selectionOnDrag:v,paneClickDistance:x})},[e,t,a,o,n,r,i,s,l,A,g,h,k,y,_,U,T,v,x]),(0,V.jsx)("div",{className:"react-flow__renderer",ref:S,style:Dm,children:w})}var $8=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Q8(){let{userSelectionActive:e,userSelectionRect:t}=Me($8,Je);return e&&t?(0,V.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var x0=(e,t)=>a=>{a.target===t.current&&e?.(a)},J8=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function eD({isSelecting:e,selectionKeyPressed:t,selectionMode:a=gr.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:s,onSelectionEnd:l,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:w}){let y=(0,G.useRef)(0),h=ct(),{userSelectionActive:b,elementsSelectable:m,dragging:x,panBy:v,autoPanSpeed:C}=Me(J8,Je),S=m&&(e||b),k=(0,G.useRef)(null),_=(0,G.useRef)(),T=(0,G.useRef)(new Set),A=(0,G.useRef)(new Set),B=(0,G.useRef)(!1),U=(0,G.useRef)(!1),L=(0,G.useRef)({x:0,y:0}),N=(0,G.useRef)(!1),E=q=>{if(U.current||B.current||h.getState().connection.inProgress){U.current=!1,B.current=!1;return}u?.(q),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},M=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}d?.(q)},R=f?q=>f(q):void 0,O=q=>{U.current&&(q.stopPropagation(),U.current=!1)},D=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Q,transform:ne}=h.getState();if(_.current=Q?.getBoundingClientRect(),!_.current)return;let de=q.target===k.current;if(!de&&!!q.target.closest(".nokey")||!e||!(i&&de||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),U.current=!1;let{x:xe,y:Le}=jo(q.nativeEvent,_.current),Oe=Wl({x:xe,y:Le},ne);h.setState({userSelectionRect:{width:0,height:0,startX:Oe.x,startY:Oe.y,x:xe,y:Le}}),de||(q.stopPropagation(),q.preventDefault())};function H(q,Q){let{userSelectionRect:ne}=h.getState();if(!ne)return;let{transform:de,nodeLookup:re,edgeLookup:ce,connectionLookup:xe,triggerNodeChanges:Le,triggerEdgeChanges:Oe,defaultEdgeOptions:yt}=h.getState(),vt={x:ne.startX,y:ne.startY},{x:uo,y:ae}=is(vt,de),_e={startX:vt.x,startY:vt.y,x:q<uo?q:uo,y:Q<ae?Q:ae,width:Math.abs(q-uo),height:Math.abs(Q-ae)},it=T.current,Ct=A.current;T.current=new Set(gm(re,_e,de,a===gr.Partial,!0).map($t=>$t.id)),A.current=new Set;let He=yt?.selectable??!0;for(let $t of T.current){let Et=xe.get($t);if(Et)for(let{edgeId:Ga}of Et.values()){let Gn=ce.get(Ga);Gn&&(Gn.selectable??He)&&A.current.add(Ga)}}if(!i0(it,T.current)){let $t=$l(re,T.current,!0);Le($t)}if(!i0(Ct,A.current)){let $t=$l(ce,A.current);Oe($t)}h.setState({userSelectionRect:_e,userSelectionActive:!0,nodesSelectionActive:!1})}function z(){if(!n||!_.current)return;let[q,Q]=hm(L.current,_.current,C);v({x:q,y:Q}).then(ne=>{if(!U.current||!ne){y.current=requestAnimationFrame(z);return}let{x:de,y:re}=L.current;H(de,re),y.current=requestAnimationFrame(z)})}let j=()=>{cancelAnimationFrame(y.current),y.current=0,N.current=!1};(0,G.useEffect)(()=>()=>j(),[]);let F=q=>{let{userSelectionRect:Q,transform:ne,resetSelectedElements:de}=h.getState();if(!_.current||!Q)return;let{x:re,y:ce}=jo(q.nativeEvent,_.current);L.current={x:re,y:ce};let xe=is({x:Q.startX,y:Q.startY},ne);if(!U.current){let Le=t?0:r;if(Math.hypot(re-xe.x,ce-xe.y)<=Le)return;de(),s?.(q)}U.current=!0,N.current||(z(),N.current=!0),H(re,ce)},Z=q=>{if(!S){q.target===k.current&&h.getState().connection.inProgress&&(B.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!b&&q.target===k.current&&h.getState().userSelectionRect&&E?.(q),h.setState({userSelectionActive:!1,userSelectionRect:null}),U.current&&(l?.(q),h.setState({nodesSelectionActive:T.current.size>0})),j())},$=q=>{q.target?.releasePointerCapture?.(q.pointerId),j()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,V.jsxs)("div",{className:_t(["react-flow__pane",{draggable:ee,dragging:x,selection:e}]),onClick:S?void 0:x0(E,k),onContextMenu:x0(M,k),onWheel:x0(R,k),onPointerEnter:S?void 0:c,onPointerMove:S?F:p,onPointerUp:Z,onPointerCancel:S?$:void 0,onPointerDownCapture:S?D:void 0,onClickCapture:S?O:void 0,onPointerLeave:g,ref:k,style:Dm,children:[w,(0,V.jsx)(Q8,{})]})}function y0({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:s,onError:l}=t.getState(),u=s.get(e);if(!u){l?.("012",Co.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function $L({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let s=ct(),[l,u]=(0,G.useState)(!1),d=(0,G.useRef)();return(0,G.useEffect)(()=>{if(!t)return d.current=jk({getStoreItems:()=>s.getState(),onNodeMouseDown:f=>{y0({id:f,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,s,e]),(0,G.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),l}var tD=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function QL(){let e=ct();return(0,G.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:s,updateNodePositions:l,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=tD(i),p=n?r[0]:5,g=n?r[1]:5,w=a.direction.x*p*a.factor,y=a.direction.y*g*a.factor;for(let[,h]of u){if(!c(h))continue;let b={x:h.internals.positionAbsolute.x+w,y:h.internals.positionAbsolute.y+y};n&&(b=Xl(b,r));let{position:m,positionAbsolute:x}=e0({nodeId:h.id,nextPosition:b,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:s});h.position=m,h.internals.positionAbsolute=x,f.set(h.id,h)}l(f)},[])}var S0=(0,G.createContext)(null),aD=S0.Provider;S0.Consumer;var JL=()=>(0,G.useContext)(S0),oD=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),e_=(0,G.createContext)(null);function nD({children:e}){let t=Me(oD,Je);return(0,V.jsx)(e_.Provider,{value:t,children:e})}function rD(){let e=(0,G.useContext)(e_);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var iD={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},sD=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:s,toHandle:l,isValid:u}=i;if(!s&&!n)return iD;let d=l?.nodeId===e&&l?.id===t&&l?.type===a;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===ci.Strict?s?.type!==a:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!n,valid:d&&u}};function lD({type:e="source",position:t=ie.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:s,children:l,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=i||null,w=e==="target",y=ct(),h=JL(),{connectOnClick:b,noPanClassName:m,rfId:x}=rD(),{connectingFrom:v,connectingTo:C,clickConnecting:S,isPossibleEndHandle:k,connectionInProcess:_,clickConnectionInProcess:T,valid:A}=Me(sD(h,g,e),Je);h||y.getState().onError?.("010",Co.error010());let B=N=>{let{defaultEdgeOptions:E,onConnect:M,hasDefaultEdges:R}=y.getState(),O={...E,...N};if(R){let{edges:D,setEdges:H,onError:z}=y.getState();H(F8(O,D,{onError:z}))}M?.(O),s?.(O)},U=N=>{if(!h)return;let E=d0(N.nativeEvent);if(n&&(E&&N.button===0||!E)){let M=y.getState();Lm.onPointerDown(N.nativeEvent,{handleDomNode:N.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:w,handleId:g,nodeId:h,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...R)=>y.getState().onConnectEnd?.(...R),updateConnection:M.updateConnection,onConnect:B,isValidConnection:a||((...R)=>y.getState().isValidConnection?.(...R)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}E?d?.(N):f?.(N)},L=N=>{let{onClickConnectStart:E,onClickConnectEnd:M,connectionClickStartHandle:R,connectionMode:O,isValidConnection:D,lib:H,rfId:z,nodeLookup:j,connection:F}=y.getState();if(!h||!R&&!n)return;if(!R){E?.(N.nativeEvent,{nodeId:h,handleId:g,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let Z=s0(N.target),$=a||D,{connection:ee,isValid:q}=Lm.isValid(N.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:O,fromNodeId:R.nodeId,fromHandleId:R.id||null,fromType:R.type,isValidConnection:$,flowId:z,doc:Z,lib:H,nodeLookup:j});q&&ee&&B(ee);let Q=structuredClone(F);delete Q.inProgress,Q.toPosition=Q.toHandle?Q.toHandle.position:null,M?.(N,Q),y.setState({connectionClickStartHandle:null})};return(0,V.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${x}-${h}-${g}-${e}`,className:_t(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:S,connectingfrom:v,connectingto:C,valid:A,connectionindicator:o&&(!_||k)&&(_||T?r:n)}]),onMouseDown:U,onTouchStart:U,onClick:b?L:void 0,ref:p,...c,children:l})}var Ql=(0,G.memo)(YL(lD));function dD({data:e,isConnectable:t,sourcePosition:a=ie.Bottom}){return(0,V.jsxs)(V.Fragment,{children:[e?.label,(0,V.jsx)(Ql,{type:"source",position:a,isConnectable:t})]})}function uD({data:e,isConnectable:t,targetPosition:a=ie.Top,sourcePosition:o=ie.Bottom}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Ql,{type:"target",position:a,isConnectable:t}),e?.label,(0,V.jsx)(Ql,{type:"source",position:o,isConnectable:t})]})}function cD(){return null}function fD({data:e,isConnectable:t,targetPosition:a=ie.Top}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Ql,{type:"target",position:a,isConnectable:t}),e?.label]})}var Em={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},EL={input:dD,default:uD,output:fD,group:cD};function pD(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var mD=e=>{let{width:t,height:a,x:o,y:n}=Gl(e.nodeLookup,{filter:r=>!!r.selected});return{width:Go(t)?t:null,height:Go(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function gD({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=ct(),{width:n,height:r,transformString:i,userSelectionActive:s}=Me(mD,Je),l=QL(),u=(0,G.useRef)(null);(0,G.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!s&&n!==null&&r!==null;if($L({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(w=>w.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Em,p.key)&&(p.preventDefault(),l({direction:Em[p.key],factor:p.shiftKey?4:1}))};return(0,V.jsx)("div",{className:_t(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,V.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var TL=typeof window<"u"?window:void 0,hD=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function t_({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:s,deleteKeyCode:l,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:w,zoomActivationKeyCode:y,elementsSelectable:h,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:k,autoPanOnSelection:_,defaultViewport:T,translateExtent:A,minZoom:B,maxZoom:U,preventScrolling:L,onSelectionContextMenu:N,noWheelClassName:E,noPanClassName:M,disableKeyboardA11y:R,onViewportChange:O,isControlledViewport:D}){let{nodesSelectionActive:H,userSelectionActive:z}=Me(hD,Je),j=tc(u,{target:TL}),F=tc(w,{target:TL}),Z=F||k,$=F||x,ee=d&&Z!==!0,q=j||z||ee;return W8({deleteKeyCode:l,multiSelectionKeyCode:g}),(0,V.jsx)(Z8,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:b,zoomOnPinch:m,panOnScroll:$,panActivationKeyPressed:F,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:!j&&Z,defaultViewport:T,translateExtent:A,minZoom:B,maxZoom:U,zoomActivationKeyCode:y,preventScrolling:L,noWheelClassName:E,noPanClassName:M,onViewportChange:O,isControlledViewport:D,paneClickDistance:s,selectionOnDrag:ee,children:(0,V.jsxs)(eD,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:Z,autoPanOnSelection:_,isSelecting:!!q,selectionMode:f,selectionKeyPressed:j,paneClickDistance:s,selectionOnDrag:ee,children:[e,H&&(0,V.jsx)(gD,{onSelectionContextMenu:N,noPanClassName:M,disableKeyboardA11y:R})]})})}t_.displayName="FlowRenderer";var bD=(0,G.memo)(t_),xD=e=>t=>e?gm(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function wD(e){return Me((0,G.useCallback)(xD(e),[e]),Je)}var yD=e=>e.updateNodeInternals;function vD(){let e=Me(yD),[t]=(0,G.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,G.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function CD({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=ct(),r=(0,G.useRef)(null),i=(0,G.useRef)(null),s=(0,G.useRef)(e.sourcePosition),l=(0,G.useRef)(e.targetPosition),u=(0,G.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,G.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,G.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,G.useEffect)(()=>{if(r.current){let f=u.current!==t,c=s.current!==e.sourcePosition,p=l.current!==e.targetPosition;(f||c||p)&&(u.current=t,s.current=e.sourcePosition,l.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function SD({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:s,elementsSelectable:l,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:w,nodeTypes:y,nodeClickDistance:h,onError:b}){let{node:m,internals:x,isParent:v}=Me(q=>{let Q=q.nodeLookup.get(e),ne=q.parentLookup.has(e);return{node:Q,internals:Q.internals,isParent:ne}},Je),C=m.type||"default",S=y?.[C]||EL[C];S===void 0&&(b?.("003",Co.error003(C)),C="default",S=y?.default||EL.default);let k=!!(m.draggable||s&&typeof m.draggable>"u"),_=!!(m.selectable||l&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),A=!!(m.focusable||d&&typeof m.focusable>"u"),B=ct(),U=n0(m),L=CD({node:m,nodeType:C,hasDimensions:U,resizeObserver:f}),N=$L({nodeRef:L,disabled:m.hidden||!k,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:h}),E=QL();if(m.hidden)return null;let M=Xo(m),R=pD(m),O=_||k||t||a||o||n,D=a?q=>a(q,{...x.userNode}):void 0,H=o?q=>o(q,{...x.userNode}):void 0,z=n?q=>n(q,{...x.userNode}):void 0,j=r?q=>r(q,{...x.userNode}):void 0,F=i?q=>i(q,{...x.userNode}):void 0,Z=q=>{let{selectNodesOnDrag:Q,nodeDragThreshold:ne}=B.getState();_&&(!Q||!k||ne>0)&&y0({id:e,store:B,nodeRef:L}),t&&t(q,{...x.userNode})},$=q=>{if(!(l0(q.nativeEvent)||g)){if(Xx.includes(q.key)&&_){let Q=q.key==="Escape";y0({id:e,store:B,unselect:Q,nodeRef:L})}else if(k&&m.selected&&Object.prototype.hasOwnProperty.call(Em,q.key)){q.preventDefault();let{ariaLabelConfig:Q}=B.getState();B.setState({ariaLiveMessage:Q["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),E({direction:Em[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:Q,height:ne,autoPanOnNodeFocus:de,setCenter:re}=B.getState();if(!de)return;gm(new Map([[e,m]]),{x:0,y:0,width:Q,height:ne},q,!0).length>0||re(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:q[2]})};return(0,V.jsx)("div",{className:_t(["react-flow__node",`react-flow__node-${C}`,{[p]:k},m.className,{selected:m.selected,selectable:_,parent:v,draggable:k,dragging:N}]),ref:L,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:O?"all":"none",visibility:U?"visible":"hidden",...m.style,...R},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:D,onMouseMove:H,onMouseLeave:z,onContextMenu:j,onClick:Z,onDoubleClick:F,onKeyDown:A?$:void 0,tabIndex:A?0:void 0,onFocus:A?ee:void 0,role:m.ariaRole??(A?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${GL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,V.jsx)(aD,{value:e,children:(0,V.jsx)(S,{id:e,data:m.data,type:C,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:k,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:N,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...M})})})}var kD=(0,G.memo)(SD),LD=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function a_(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=Me(LD,Je),r=wD(e.onlyRenderVisibleElements),i=vD();return(0,V.jsx)("div",{className:"react-flow__nodes",style:Dm,children:r.map(s=>(0,V.jsx)(kD,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},s))})}a_.displayName="NodeRenderer";var _D=(0,G.memo)(a_);function ID(e){return Me((0,G.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&Pk({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Je)}var MD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,V.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},ND=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,V.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},AL={[Ul.Arrow]:MD,[Ul.ArrowClosed]:ND};function ED(e){let t=ct();return(0,G.useMemo)(()=>Object.prototype.hasOwnProperty.call(AL,e)?AL[e]:(t.getState().onError?.("009",Co.error009(e)),null),[e])}var TD=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:s="auto-start-reverse"})=>{let l=ED(t);return l?(0,V.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:s,refX:"0",refY:"0",children:(0,V.jsx)(l,{color:a,strokeWidth:i})}):null},o_=({defaultColor:e,rfId:t})=>{let a=Me(r=>r.edges),o=Me(r=>r.defaultEdgeOptions),n=(0,G.useMemo)(()=>Bk(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,V.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,V.jsx)("defs",{children:n.map(r=>(0,V.jsx)(TD,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};o_.displayName="MarkerDefinitions";var AD=(0,G.memo)(o_);function n_({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:s=2,children:l,className:u,...d}){let[f,c]=(0,G.useState)({x:1,y:0,width:0,height:0}),p=_t(["react-flow__edge-textwrapper",u]),g=(0,G.useRef)(null);return(0,G.useEffect)(()=>{if(g.current){let w=g.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,V.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,V.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:s,ry:s}),(0,V.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),l]}):null}n_.displayName="EdgeText";var DD=(0,G.memo)(n_);function Jl({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:s,labelBgBorderRadius:l,interactionWidth:u=20,...d}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("path",{...d,d:e,fill:"none",className:_t(["react-flow__edge-path",d.className])}),u?(0,V.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Go(t)&&Go(a)?(0,V.jsx)(DD,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:s,labelBgBorderRadius:l}):null]})}function DL({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ie.Left||e===ie.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function r_({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top}){let[i,s]=DL({pos:a,x1:e,y1:t,x2:o,y2:n}),[l,u]=DL({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=ym({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:l,targetControlY:u});return[`M${e},${t} C${i},${s} ${l},${u} ${o},${n}`,d,f,c,p]}function i_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:s,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})=>{let[b,m,x]=r_({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:s}),v=e.isInternal?void 0:t;return(0,V.jsx)(Jl,{id:v,path:b,labelX:m,labelY:x,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})})}var RD=i_({isInternal:!1}),s_=i_({isInternal:!0});RD.displayName="SimpleBezierEdge";s_.displayName="SimpleBezierEdgeInternal";function l_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ie.Bottom,targetPosition:g=ie.Top,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:b})=>{let[m,x,v]=ec({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,V.jsx)(Jl,{id:C,path:m,labelX:x,labelY:v,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:y,interactionWidth:b})})}var d_=l_({isInternal:!1}),u_=l_({isInternal:!0});d_.displayName="SmoothStepEdge";u_.displayName="SmoothStepEdgeInternal";function c_(e){return(0,G.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,V.jsx)(d_,{...a,id:o,pathOptions:(0,G.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var PD=c_({isInternal:!1}),f_=c_({isInternal:!0});PD.displayName="StepEdge";f_.displayName="StepEdgeInternal";function p_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})=>{let[y,h,b]=vm({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,V.jsx)(Jl,{id:m,path:y,labelX:h,labelY:b,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})})}var zD=p_({isInternal:!1}),m_=p_({isInternal:!0});zD.displayName="StraightEdge";m_.displayName="StraightEdgeInternal";function g_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=ie.Bottom,targetPosition:s=ie.Top,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:b})=>{let[m,x,v]=Kl({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:s,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,V.jsx)(Jl,{id:C,path:m,labelX:x,labelY:v,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:b})})}var OD=g_({isInternal:!1}),h_=g_({isInternal:!0});OD.displayName="BezierEdge";h_.displayName="BezierEdgeInternal";var RL={default:h_,straight:m_,step:f_,smoothstep:u_,simplebezier:s_},PL={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},BD=(e,t,a)=>a===ie.Left?e-t:a===ie.Right?e+t:e,HD=(e,t,a)=>a===ie.Top?e-t:a===ie.Bottom?e+t:e,zL="react-flow__edgeupdater";function OL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:s}){return(0,V.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:_t([zL,`${zL}-${s}`]),cx:BD(t,o,e),cy:HD(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function FD({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=ct(),w=(x,v)=>{if(x.button!==0)return;let{autoPanOnConnect:C,domNode:S,connectionMode:k,connectionRadius:_,lib:T,onConnectStart:A,cancelConnection:B,nodeLookup:U,rfId:L,panBy:N,updateConnection:E}=g.getState(),M=v.type==="target",R=(H,z)=>{c(!1),f?.(H,a,v.type,z)},O=H=>u?.(a,H),D=(H,z)=>{c(!0),d?.(x,a,v.type),A?.(H,z)};Lm.onPointerDown(x.nativeEvent,{autoPanOnConnect:C,connectionMode:k,connectionRadius:_,domNode:S,handleId:v.id,nodeId:v.nodeId,nodeLookup:U,isTarget:M,edgeUpdaterType:v.type,lib:T,flowId:L,cancelConnection:B,panBy:N,isValidConnection:(...H)=>g.getState().isValidConnection?.(...H)??!0,onConnect:O,onConnectStart:D,onConnectEnd:(...H)=>g.getState().onConnectEnd?.(...H),onReconnectEnd:R,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},y=x=>w(x,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=x=>w(x,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),b=()=>p(!0),m=()=>p(!1);return(0,V.jsxs)(V.Fragment,{children:[(e===!0||e==="source")&&(0,V.jsx)(OL,{position:s,centerX:o,centerY:n,radius:t,onMouseDown:y,onMouseEnter:b,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,V.jsx)(OL,{position:l,centerX:r,centerY:i,radius:t,onMouseDown:h,onMouseEnter:b,onMouseOut:m,type:"target"})]})}function UD({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:w,noPanClassName:y,onError:h,disableKeyboardA11y:b}){let m=Me(re=>re.edgeLookup.get(e)),x=Me(re=>re.defaultEdgeOptions);m=x?{...x,...m}:m;let v=m.type||"default",C=w?.[v]||RL[v];C===void 0&&(h?.("011",Co.error011(v)),v="default",C=w?.default||RL.default);let S=!!(m.focusable||t&&typeof m.focusable>"u"),k=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,G.useRef)(null),[A,B]=(0,G.useState)(!1),[U,L]=(0,G.useState)(!1),N=ct(),{zIndex:E=m.zIndex,sourceX:M,sourceY:R,targetX:O,targetY:D,sourcePosition:H,targetPosition:z}=Me((0,G.useCallback)(re=>{let ce=re.nodeLookup.get(m.source),xe=re.nodeLookup.get(m.target);if(!ce||!xe)return PL;let Le=Ok({id:e,sourceNode:ce,targetNode:xe,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:re.connectionMode,onError:h}),Oe=Rk({selected:m.selected,zIndex:m.zIndex,sourceNode:ce,targetNode:xe,elevateOnSelect:re.elevateEdgesOnSelect,zIndexMode:re.zIndexMode});return{...Le||PL,zIndex:Oe}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Je),j=(0,G.useMemo)(()=>m.markerStart?`url('#${Cm(m.markerStart,g)}')`:void 0,[m.markerStart,g]),F=(0,G.useMemo)(()=>m.markerEnd?`url('#${Cm(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||M===null||R===null||O===null||D===null)return null;let Z=re=>{let{addSelectedEdges:ce,unselectNodesAndEdges:xe,multiSelectionActive:Le}=N.getState();_&&(N.setState({nodesSelectionActive:!1}),m.selected&&Le?(xe({nodes:[],edges:[m]}),T.current?.blur()):ce([e])),n&&n(re,m)},$=r?re=>{r(re,{...m})}:void 0,ee=i?re=>{i(re,{...m})}:void 0,q=s?re=>{s(re,{...m})}:void 0,Q=l?re=>{l(re,{...m})}:void 0,ne=u?re=>{u(re,{...m})}:void 0,de=re=>{if(!b&&Xx.includes(re.key)&&_){let{unselectNodesAndEdges:ce,addSelectedEdges:xe}=N.getState();re.key==="Escape"?(T.current?.blur(),ce({edges:[m]})):xe([e])}};return(0,V.jsx)("svg",{style:{zIndex:E},children:(0,V.jsxs)("g",{className:_t(["react-flow__edge",`react-flow__edge-${v}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:A,selectable:_}]),onClick:Z,onDoubleClick:$,onContextMenu:ee,onMouseEnter:q,onMouseMove:Q,onMouseLeave:ne,onKeyDown:S?de:void 0,tabIndex:S?0:void 0,role:m.ariaRole??(S?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":S?`${jL}-${g}`:void 0,ref:T,...m.domAttributes,children:[!U&&(0,V.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:R,targetX:O,targetY:D,sourcePosition:H,targetPosition:z,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:j,markerEnd:F,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),k&&(0,V.jsx)(FD,{edge:m,isReconnectable:k,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:M,sourceY:R,targetX:O,targetY:D,sourcePosition:H,targetPosition:z,setUpdateHover:B,setReconnecting:L})]})})}var qD=(0,G.memo)(UD),VD=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function b_({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:s,onEdgeMouseMove:l,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:w}){let{edgesFocusable:y,edgesReconnectable:h,elementsSelectable:b,onError:m}=Me(VD,Je),x=ID(t);return(0,V.jsxs)("div",{className:"react-flow__edges",children:[(0,V.jsx)(AD,{defaultColor:e,rfId:a}),x.map(v=>(0,V.jsx)(qD,{id:v,edgesFocusable:y,edgesReconnectable:h,elementsSelectable:b,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},v))]})}b_.displayName="EdgeRenderer";var GD=(0,G.memo)(b_),BL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function jD({children:e}){let t=ct(),a=(0,G.useRef)(null),[o]=(0,G.useState)(()=>t.getState().transform);return KL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=BL(i)))};return r(),t.subscribe(r)},[t]),(0,V.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:BL(o)},children:e})}function XD(e){let t=Sa(),a=(0,G.useRef)(!1);(0,G.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var WD=e=>e.panZoom?.syncViewport;function YD(e){let t=Me(WD),a=ct();return(0,G.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function HL(e){return e.connection.inProgress?{...e.connection,to:Wl(e.connection.to,e.transform)}:{...e.connection}}function KD(e){return e?a=>{let o=HL(a);return e(o)}:HL}function k0(e){let t=KD(e);return Me(t,Je)}var ZD=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function $D({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:s,inProgress:l}=Me(ZD,Je);return!(r&&n&&l)?null:(0,V.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,V.jsx)("g",{className:_t(["react-flow__connection",Kx(s)]),children:(0,V.jsx)(x_,{style:t,type:a,CustomComponent:o,isValid:s})})})}var x_=({style:e,type:t=In.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:s,fromPosition:l,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=k0();if(!n)return;if(a)return(0,V.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:s,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:l,toPosition:c,connectionStatus:Kx(o),toNode:d,toHandle:f,pointer:p});let g="",w={sourceX:r.x,sourceY:r.y,sourcePosition:l,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case In.Bezier:[g]=Kl(w);break;case In.SimpleBezier:[g]=r_(w);break;case In.Step:[g]=ec({...w,borderRadius:0});break;case In.SmoothStep:[g]=ec(w);break;default:[g]=vm(w)}return(0,V.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};x_.displayName="ConnectionLine";var QD={};function FL(e=QD){let t=(0,G.useRef)(e),a=ct();(0,G.useEffect)(()=>{},[e])}function JD(){let e=ct(),t=(0,G.useRef)(!1);(0,G.useEffect)(()=>{},[])}function w_({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:w,connectionLineComponent:y,connectionLineContainerStyle:h,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,deleteKeyCode:k,onlyRenderVisibleElements:_,elementsSelectable:T,defaultViewport:A,translateExtent:B,minZoom:U,maxZoom:L,preventScrolling:N,defaultMarkerColor:E,zoomOnScroll:M,zoomOnPinch:R,panOnScroll:O,panOnScrollSpeed:D,panOnScrollMode:H,zoomOnDoubleClick:z,panOnDrag:j,autoPanOnSelection:F,onPaneClick:Z,onPaneMouseEnter:$,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:Q,onPaneContextMenu:ne,paneClickDistance:de,nodeClickDistance:re,onEdgeContextMenu:ce,onEdgeMouseEnter:xe,onEdgeMouseMove:Le,onEdgeMouseLeave:Oe,reconnectRadius:yt,onReconnect:vt,onReconnectStart:uo,onReconnectEnd:ae,noDragClassName:_e,noWheelClassName:it,noPanClassName:Ct,disableKeyboardA11y:He,nodeExtent:$t,rfId:Et,viewport:Ga,onViewportChange:Gn,nodesDraggable:Cd}){return FL(e),FL(t),JD(),XD(a),YD(Ga),(0,V.jsx)(bD,{onPaneClick:Z,onPaneMouseEnter:$,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:ne,onPaneScroll:Q,paneClickDistance:de,deleteKeyCode:k,selectionKeyCode:b,selectionOnDrag:m,selectionMode:x,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,elementsSelectable:T,zoomOnScroll:M,zoomOnPinch:R,zoomOnDoubleClick:z,panOnScroll:O,panOnScrollSpeed:D,panOnScrollMode:H,panOnDrag:j,autoPanOnSelection:F,defaultViewport:A,translateExtent:B,minZoom:U,maxZoom:L,onSelectionContextMenu:f,preventScrolling:N,noDragClassName:_e,noWheelClassName:it,noPanClassName:Ct,disableKeyboardA11y:He,onViewportChange:Gn,isControlledViewport:!!Ga,children:(0,V.jsxs)(jD,{children:[(0,V.jsx)(GD,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:vt,onReconnectStart:uo,onReconnectEnd:ae,onlyRenderVisibleElements:_,onEdgeContextMenu:ce,onEdgeMouseEnter:xe,onEdgeMouseMove:Le,onEdgeMouseLeave:Oe,reconnectRadius:yt,defaultMarkerColor:E,noPanClassName:Ct,disableKeyboardA11y:He,rfId:Et}),(0,V.jsx)($D,{style:w,type:g,component:y,containerStyle:h}),(0,V.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,V.jsx)(_D,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:re,onlyRenderVisibleElements:_,noPanClassName:Ct,noDragClassName:_e,disableKeyboardA11y:He,nodeExtent:$t,rfId:Et,nodesDraggable:Cd}),(0,V.jsx)("div",{className:"react-flow__viewport-portal"})]})})}w_.displayName="GraphView";var eR=(0,G.memo)(w_),tR=o0("React Flow","https://reactflow.dev/"),UL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,w=new Map,y=new Map,h=o??t??[],b=a??e??[],m=d??[0,0],x=f??Vl;g0(w,y,h);let{nodesInitialized:v}=Sm(b,p,g,{nodeOrigin:m,nodeExtent:x,zIndexMode:c}),C=[0,0,1];if(i&&n&&r){let S=Gl(p,{filter:A=>!!((A.width||A.initialWidth)&&(A.height||A.initialHeight))}),{x:k,y:_,zoom:T}=Ju(S,n,r,l,u,s?.padding??.1);C=[k,_,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:b,nodesInitialized:v,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:y,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:l,maxZoom:u,translateExtent:Vl,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ci.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Yx},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:tR,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Wx,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},aR=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>hL((p,g)=>{async function w(){let{nodeLookup:y,panZoom:h,fitViewOptions:b,fitViewResolver:m,width:x,height:v,minZoom:C,maxZoom:S}=g();h&&(await Mk({nodes:y,width:x,height:v,panZoom:h,minZoom:C,maxZoom:S},b),m?.resolve(!0),p({fitViewResolver:null}))}return{...UL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:y=>{let{nodeLookup:h,parentLookup:b,nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:v,fitViewQueued:C,zIndexMode:S,nodesSelectionActive:k}=g(),{nodesInitialized:_,hasSelectedNodes:T}=Sm(y,h,b,{nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),A=k&&T;C&&_?(w(),p({nodes:y,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:A})):p({nodes:y,nodesInitialized:_,nodesSelectionActive:A})},setEdges:y=>{let{connectionLookup:h,edgeLookup:b}=g();g0(h,b,y),p({edges:y})},setDefaultNodesAndEdges:(y,h)=>{if(y){let{setNodes:b}=g();b(y),p({hasDefaultNodes:!0})}if(h){let{setEdges:b}=g();b(h),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:h,nodeLookup:b,parentLookup:m,domNode:x,nodeOrigin:v,nodeExtent:C,debug:S,fitViewQueued:k,zIndexMode:_}=g(),{changes:T,updatedInternals:A}=qk(y,b,m,x,v,C,_);A&&(Fk(b,m,{nodeOrigin:v,nodeExtent:C,zIndexMode:_}),k?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(S&&console.log("React Flow: trigger node changes",T),h?.(T)))},updateNodePositions:(y,h=!1)=>{let b=[],m=[],{nodeLookup:x,triggerNodeChanges:v,connection:C,updateConnection:S,onNodesChangeMiddlewareMap:k}=g();for(let[_,T]of y){let A=x.get(_),B=!!(A?.expandParent&&A?.parentId&&T?.position),U={id:_,type:"position",position:B?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:h};if(A&&C.inProgress&&C.fromNode.id===A.id){let L=fi(A,C.fromHandle,ie.Left,!0);S({...C,from:L})}B&&A.parentId&&b.push({id:_,parentId:A.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(U)}if(b.length>0){let{parentLookup:_,nodeOrigin:T}=g(),A=km(b,x,_,T);m.push(...A)}for(let _ of k.values())m=_(m);v(m)},triggerNodeChanges:y=>{let{onNodesChange:h,setNodes:b,nodes:m,hasDefaultNodes:x,debug:v}=g();if(y?.length){if(x){let C=v0(y,m);b(C)}v&&console.log("React Flow: trigger node changes",y),h?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:h,setEdges:b,edges:m,hasDefaultEdges:x,debug:v}=g();if(y?.length){if(x){let C=C0(y,m);b(C)}v&&console.log("React Flow: trigger edge changes",y),h?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:h,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:v}=g();if(h){let C=y.map(S=>ls(S,!0));x(C);return}x($l(m,new Set([...y]),!0)),v($l(b))},addSelectedEdges:y=>{let{multiSelectionActive:h,edgeLookup:b,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:v}=g();if(h){let C=y.map(S=>ls(S,!0));v(C);return}v($l(b,new Set([...y]))),x($l(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:h}={})=>{let{edges:b,nodes:m,nodeLookup:x,triggerNodeChanges:v,triggerEdgeChanges:C}=g(),S=y||m,k=h||b,_=[];for(let A of S){if(!A.selected)continue;let B=x.get(A.id);B&&(B.selected=!1),_.push(ls(A.id,!1))}let T=[];for(let A of k)A.selected&&T.push(ls(A.id,!1));v(_),C(T)},setMinZoom:y=>{let{panZoom:h,maxZoom:b}=g();h?.setScaleExtent([y,b]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:h,minZoom:b}=g();h?.setScaleExtent([b,y]),p({maxZoom:y})},setTranslateExtent:y=>{g().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:h,triggerNodeChanges:b,triggerEdgeChanges:m,elementsSelectable:x}=g();if(!x)return;let v=h.reduce((S,k)=>k.selected?[...S,ls(k.id,!1)]:S,[]),C=y.reduce((S,k)=>k.selected?[...S,ls(k.id,!1)]:S,[]);b(v),m(C)},setNodeExtent:y=>{let{nodes:h,nodeLookup:b,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:v,nodeExtent:C,zIndexMode:S}=g();y[0][0]===C[0][0]&&y[0][1]===C[0][1]&&y[1][0]===C[1][0]&&y[1][1]===C[1][1]||(Sm(h,b,m,{nodeOrigin:x,nodeExtent:y,elevateNodesOnSelect:v,checkEquality:!1,zIndexMode:S}),p({nodeExtent:y}))},panBy:y=>{let{transform:h,width:b,height:m,panZoom:x,translateExtent:v}=g();return Vk({delta:y,panZoom:x,transform:h,translateExtent:v,width:b,height:m})},setCenter:async(y,h,b)=>{let{width:m,height:x,maxZoom:v,panZoom:C}=g();if(!C)return!1;let S=typeof b?.zoom<"u"?b.zoom:v;return await C.setViewport({x:m/2-y*S,y:x/2-h*S,zoom:S},{duration:b?.duration,ease:b?.ease,interpolate:b?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Yx}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...UL()})}},Object.is);function L0({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:s,initialFitViewOptions:l,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,G.useState)(()=>aR({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:s,fitViewOptions:l,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,V.jsx)(w8,{value:g,children:(0,V.jsx)(V8,{children:(0,V.jsx)(nD,{children:p})})})}function oR({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:s,fitViewOptions:l,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,G.useContext)(Tm)?(0,V.jsx)(V.Fragment,{children:e}):(0,V.jsx)(L0,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:s,initialFitViewOptions:l,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var nR={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function rR({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:s,onEdgeClick:l,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:v,onNodeDoubleClick:C,onNodeDragStart:S,onNodeDrag:k,onNodeDragStop:_,onNodesDelete:T,onEdgesDelete:A,onDelete:B,onSelectionChange:U,onSelectionDragStart:L,onSelectionDrag:N,onSelectionDragStop:E,onSelectionContextMenu:M,onSelectionStart:R,onSelectionEnd:O,onBeforeDelete:D,connectionMode:H,connectionLineType:z=In.Bezier,connectionLineStyle:j,connectionLineComponent:F,connectionLineContainerStyle:Z,deleteKeyCode:$="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:Q=gr.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:de=Yl()?"Meta":"Control",zoomActivationKeyCode:re=Yl()?"Meta":"Control",snapToGrid:ce,snapGrid:xe,onlyRenderVisibleElements:Le=!1,selectNodesOnDrag:Oe,nodesDraggable:yt,autoPanOnNodeFocus:vt,nodesConnectable:uo,nodesFocusable:ae,nodeOrigin:_e=XL,edgesFocusable:it,edgesReconnectable:Ct,elementsSelectable:He=!0,defaultViewport:$t=A8,minZoom:Et=.5,maxZoom:Ga=2,translateExtent:Gn=Vl,preventScrolling:Cd=!0,nodeExtent:Sd,defaultMarkerColor:kd="#b1b1b7",zoomOnScroll:Cg=!0,zoomOnPinch:Sg=!0,panOnScroll:nf=!1,panOnScrollSpeed:kg=.5,panOnScrollMode:Fs=an.Free,zoomOnDoubleClick:Lg=!0,panOnDrag:_g=!0,onPaneClick:Ig,onPaneMouseEnter:Ld,onPaneMouseMove:Mg,onPaneMouseLeave:Ng,onPaneScroll:Us,onPaneContextMenu:Eg,paneClickDistance:Tg=1,nodeClickDistance:Ag=0,children:Dg,onReconnect:Rg,onReconnectStart:Pg,onReconnectEnd:K,onEdgeContextMenu:ue,onEdgeDoubleClick:Ie,onEdgeMouseEnter:Se,onEdgeMouseMove:St,onEdgeMouseLeave:Fe,reconnectRadius:Ve=10,onNodesChange:Gt,onEdgesChange:xt,noDragClassName:la="nodrag",noWheelClassName:co="nowheel",noPanClassName:Er="nopan",fitView:Rt,fitViewOptions:xn,connectOnClick:qs,attributionPosition:zg,proOptions:Og,defaultEdgeOptions:Bg,elevateNodesOnSelect:Hg=!0,elevateEdgesOnSelect:zN=!1,disableKeyboardA11y:Sw=!1,autoPanOnConnect:ON,autoPanOnNodeDrag:BN,autoPanOnSelection:HN=!0,autoPanSpeed:FN,connectionRadius:UN,isValidConnection:qN,onError:VN,style:GN,id:kw,nodeDragThreshold:jN,connectionDragThreshold:XN,viewport:WN,onViewportChange:YN,width:KN,height:ZN,colorMode:$N="light",debug:QN,onScroll:Lw,ariaLabelConfig:JN,zIndexMode:_w="basic",...e3},t3){let Fg=kw||"1",a3=z8($N),o3=(0,G.useCallback)(Iw=>{Iw.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Lw?.(Iw)},[Lw]);return(0,V.jsx)("div",{"data-testid":"rf__wrapper",...e3,onScroll:o3,style:{...GN,...nR},ref:t3,className:_t(["react-flow",n,a3]),id:kw,role:"application",children:(0,V.jsxs)(oR,{nodes:e,edges:t,width:KN,height:ZN,fitView:Rt,fitViewOptions:xn,minZoom:Et,maxZoom:Ga,nodeOrigin:_e,nodeExtent:Sd,zIndexMode:_w,children:[(0,V.jsx)(P8,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,nodesDraggable:yt,autoPanOnNodeFocus:vt,nodesConnectable:uo,nodesFocusable:ae,edgesFocusable:it,edgesReconnectable:Ct,elementsSelectable:He,elevateNodesOnSelect:Hg,elevateEdgesOnSelect:zN,minZoom:Et,maxZoom:Ga,nodeExtent:Sd,onNodesChange:Gt,onEdgesChange:xt,snapToGrid:ce,snapGrid:xe,connectionMode:H,translateExtent:Gn,connectOnClick:qs,defaultEdgeOptions:Bg,fitView:Rt,fitViewOptions:xn,onNodesDelete:T,onEdgesDelete:A,onDelete:B,onNodeDragStart:S,onNodeDrag:k,onNodeDragStop:_,onSelectionDrag:N,onSelectionDragStart:L,onSelectionDragStop:E,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:Er,nodeOrigin:_e,rfId:Fg,autoPanOnConnect:ON,autoPanOnNodeDrag:BN,autoPanSpeed:FN,onError:VN,connectionRadius:UN,isValidConnection:qN,selectNodesOnDrag:Oe,nodeDragThreshold:jN,connectionDragThreshold:XN,onBeforeDelete:D,debug:QN,ariaLabelConfig:JN,zIndexMode:_w}),(0,V.jsx)(eR,{onInit:u,onNodeClick:s,onEdgeClick:l,onNodeMouseEnter:b,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:v,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:i,connectionLineType:z,connectionLineStyle:j,connectionLineComponent:F,connectionLineContainerStyle:Z,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:Q,deleteKeyCode:$,multiSelectionKeyCode:de,panActivationKeyCode:ne,zoomActivationKeyCode:re,onlyRenderVisibleElements:Le,defaultViewport:$t,translateExtent:Gn,minZoom:Et,maxZoom:Ga,preventScrolling:Cd,zoomOnScroll:Cg,zoomOnPinch:Sg,zoomOnDoubleClick:Lg,panOnScroll:nf,panOnScrollSpeed:kg,panOnScrollMode:Fs,panOnDrag:_g,autoPanOnSelection:HN,onPaneClick:Ig,onPaneMouseEnter:Ld,onPaneMouseMove:Mg,onPaneMouseLeave:Ng,onPaneScroll:Us,onPaneContextMenu:Eg,paneClickDistance:Tg,nodeClickDistance:Ag,onSelectionContextMenu:M,onSelectionStart:R,onSelectionEnd:O,onReconnect:Rg,onReconnectStart:Pg,onReconnectEnd:K,onEdgeContextMenu:ue,onEdgeDoubleClick:Ie,onEdgeMouseEnter:Se,onEdgeMouseMove:St,onEdgeMouseLeave:Fe,reconnectRadius:Ve,defaultMarkerColor:kd,noDragClassName:la,noWheelClassName:co,noPanClassName:Er,rfId:Fg,disableKeyboardA11y:Sw,nodeExtent:Sd,viewport:WN,onViewportChange:YN,nodesDraggable:yt}),(0,V.jsx)(T8,{onSelectionChange:U}),Dg,(0,V.jsx)(_8,{proOptions:Og,position:zg}),(0,V.jsx)(L8,{rfId:Fg,disableKeyboardA11y:Sw})]})})}var y_=YL(rR);var iR=e=>e.nodes;function v_(){return Me(iR,Je)}var sR=e=>e.edges;function C_(){return Me(sR,Je)}var lR=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function eo(){return Me(lR,Je)}var XV=Co.error014();function dR({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,V.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_t(["react-flow__background-pattern",a,o])})}function uR({radius:e,className:t}){return(0,V.jsx)("circle",{cx:e,cy:e,r:e,className:_t(["react-flow__background-pattern","dots",t])})}var Mn;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Mn||(Mn={}));var cR={[Mn.Dots]:1,[Mn.Lines]:1,[Mn.Cross]:6},fR=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function S_({id:e,variant:t=Mn.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:s,style:l,className:u,patternClassName:d}){let f=(0,G.useRef)(null),{transform:c,patternId:p}=Me(fR,Je),g=o||cR[t],w=t===Mn.Dots,y=t===Mn.Cross,h=Array.isArray(a)?a:[a,a],b=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],x=Array.isArray(r)?r:[r,r],v=y?[m,m]:b,C=[x[0]*c[2]+v[0]/2,x[1]*c[2]+v[1]/2],S=`${p}${e||""}`;return(0,V.jsxs)("svg",{className:_t(["react-flow__background",u]),style:{...l,...Dm,"--xy-background-color-props":s,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,V.jsx)("pattern",{id:S,x:c[0]%b[0],y:c[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:w?(0,V.jsx)(uR,{radius:m/2,className:d}):(0,V.jsx)(dR,{dimensions:v,lineWidth:n,variant:t,className:d})}),(0,V.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${S})`})]})}S_.displayName="Background";var k_=(0,G.memo)(S_);function pR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,V.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function mR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,V.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function gR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,V.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function hR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,V.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function bR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,V.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Nm({children:e,className:t,...a}){return(0,V.jsx)("button",{type:"button",className:_t(["react-flow__controls-button",t]),...a,children:e})}var xR=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function L_({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:s,onInteractiveChange:l,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=ct(),{isInteractive:w,minZoomReached:y,maxZoomReached:h,ariaLabelConfig:b}=Me(xR,Je),{zoomIn:m,zoomOut:x,fitView:v}=Sa(),C=()=>{m(),r?.()},S=()=>{x(),i?.()},k=()=>{v(n),s?.()},_=()=>{g.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),l?.(!w)};return(0,V.jsxs)(Am,{className:_t(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??b["controls.ariaLabel"],children:[t&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Nm,{onClick:C,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:h,children:(0,V.jsx)(pR,{})}),(0,V.jsx)(Nm,{onClick:S,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:y,children:(0,V.jsx)(mR,{})})]}),a&&(0,V.jsx)(Nm,{className:"react-flow__controls-fitview",onClick:k,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:(0,V.jsx)(gR,{})}),o&&(0,V.jsx)(Nm,{className:"react-flow__controls-interactive",onClick:_,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:w?(0,V.jsx)(bR,{}):(0,V.jsx)(hR,{})}),d]})}L_.displayName="Controls";var WV=(0,G.memo)(L_);function wR({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:s,strokeWidth:l,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:w}=r||{},y=i||g||w;return(0,V.jsx)("rect",{className:_t(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:y,stroke:s,strokeWidth:l},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var yR=(0,G.memo)(wR),vR=e=>e.nodes.map(t=>t.id),w0=e=>e instanceof Function?e:()=>e;function CR({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=yR,onClick:i}){let s=Me(vR,Je),l=w0(t),u=w0(e),d=w0(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,V.jsx)(V.Fragment,{children:s.map(c=>(0,V.jsx)(kR,{id:c,nodeColorFunc:l,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function SR({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:s,onClick:l}){let{node:u,x:d,y:f,width:c,height:p}=Me(g=>{let w=g.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let y=w.internals.userNode,{x:h,y:b}=w.internals.positionAbsolute,{width:m,height:x}=Xo(y);return{node:y,x:h,y:b,width:m,height:x}},Je);return!u||u.hidden||!n0(u)?null:(0,V.jsx)(s,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:l,id:u.id})}var kR=(0,G.memo)(SR),LR=(0,G.memo)(CR),_R=200,IR=150,MR=e=>!e.hidden,NR=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?t0(Gl(e.nodeLookup,{filter:MR}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},qL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,ER=(e,t)=>qL(e.viewBB,t.viewBB)&&qL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,TR="react-flow__minimap-desc";function __({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:s,bgColor:l,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:w=!1,zoomable:y=!1,ariaLabel:h,inversePan:b,zoomStep:m=1,offsetScale:x=5}){let v=ct(),C=(0,G.useRef)(null),{boundingRect:S,viewBB:k,rfId:_,panZoom:T,translateExtent:A,flowWidth:B,flowHeight:U,ariaLabelConfig:L}=Me(NR,ER),N=e?.width??_R,E=e?.height??IR,M=S.width/N,R=S.height/E,O=Math.max(M,R),D=O*N,H=O*E,z=x*O,j=S.x-(D-S.width)/2-z,F=S.y-(H-S.height)/2-z,Z=D+z*2,$=H+z*2,ee=`${TR}-${_}`,q=(0,G.useRef)(0),Q=(0,G.useRef)();q.current=O,(0,G.useEffect)(()=>{if(C.current&&T)return Q.current=Zk({domNode:C.current,panZoom:T,getTransform:()=>v.getState().transform,getViewScale:()=>q.current}),()=>{Q.current?.destroy()}},[T]),(0,G.useEffect)(()=>{Q.current?.update({translateExtent:A,width:B,height:U,inversePan:b,pannable:w,zoomStep:m,zoomable:y})},[w,y,b,m,A,B,U]);let ne=p?ce=>{let[xe,Le]=Q.current?.pointer(ce)||[0,0];p(ce,{x:xe,y:Le})}:void 0,de=g?(0,G.useCallback)((ce,xe)=>{let Le=v.getState().nodeLookup.get(xe).internals.userNode;g(ce,Le)},[]):void 0,re=h??L["minimap.ariaLabel"];return(0,V.jsx)(Am,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*O:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:_t(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,V.jsxs)("svg",{width:N,height:E,viewBox:`${j} ${F} ${Z} ${$}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:C,onClick:ne,children:[re&&(0,V.jsx)("title",{id:ee,children:re}),(0,V.jsx)(LR,{onClick:de,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:s}),(0,V.jsx)("path",{className:"react-flow__minimap-mask",d:`M${j-z},${F-z}h${Z+z*2}v${$+z*2}h${-Z-z*2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}__.displayName="MiniMap";var I_=(0,G.memo)(__),AR=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,DR={[pi.Line]:"right",[pi.Handle]:"bottom-right"};function RR({nodeId:e,position:t,variant:a=pi.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:s=10,minHeight:l=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:w,onResize:y,onResizeEnd:h}){let b=JL(),m=typeof e=="string"?e:b,x=ct(),v=(0,G.useRef)(null),C=a===pi.Handle,S=Me((0,G.useCallback)(AR(C&&p),[C,p]),Je),k=(0,G.useRef)(null),_=t??DR[a];(0,G.useEffect)(()=>{if(!(!v.current||!m))return k.current||(k.current=tL({domNode:v.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:A,transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:N,domNode:E}=x.getState();return{nodeLookup:A,transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:N,paneDomNode:E}},onChange:(A,B)=>{let{triggerNodeChanges:U,nodeLookup:L,parentLookup:N,nodeOrigin:E}=x.getState(),M=[],R={x:A.x,y:A.y},O=L.get(m);if(O&&O.expandParent&&O.parentId){let D=O.origin??E,H=A.width??O.measured.width??0,z=A.height??O.measured.height??0,j={id:O.id,parentId:O.parentId,rect:{width:H,height:z,...r0({x:A.x??O.position.x,y:A.y??O.position.y},{width:H,height:z},O.parentId,L,D)}},F=km([j],L,N,E);M.push(...F),R.x=A.x?Math.max(D[0]*H,A.x):void 0,R.y=A.y?Math.max(D[1]*z,A.y):void 0}if(R.x!==void 0&&R.y!==void 0){let D={id:m,type:"position",position:{...R}};M.push(D)}if(A.width!==void 0&&A.height!==void 0){let H={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:A.width,height:A.height}};M.push(H)}for(let D of B){let H={...D,type:"position"};M.push(H)}U(M)},onEnd:({width:A,height:B})=>{let U={id:m,type:"dimensions",resizing:!1,dimensions:{width:A,height:B}};x.getState().triggerNodeChanges([U])}})),k.current.update({controlPosition:_,boundaries:{minWidth:s,minHeight:l,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:y,onResizeEnd:h,shouldResize:g}),()=>{k.current?.destroy()}},[_,s,l,u,d,f,w,y,h,g]);let T=_.split("-");return(0,V.jsx)("div",{className:_t(["react-flow__resize-control","nodrag",...T,a,o]),ref:v,style:{...n,scale:S,...i&&{[C?"backgroundColor":"borderColor"]:i}},children:r})}var YV=(0,G.memo)(RR);var ao=I(J(),1),D_=I(Qt(),1);var zm=I(J(),1);var Rm=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var M_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var N_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var _0=e=>{let t=N_(e);return t.charAt(0).toUpperCase()+t.slice(1)};var ac=I(J(),1);var Pm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var E_=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var ed=I(J(),1);var PR=(0,ed.createContext)({});var T_=()=>(0,ed.useContext)(PR);var A_=(0,ac.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...s},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=T_()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,ac.createElement)("svg",{ref:l,...Pm,width:t??u??Pm.width,height:t??u??Pm.height,stroke:e??c,strokeWidth:g,className:Rm("lucide",p,n),...!r&&!E_(s)&&{"aria-hidden":"true"},...s},[...i.map(([w,y])=>(0,ac.createElement)(w,y)),...Array.isArray(r)?r:[r]])});var P=(e,t)=>{let a=(0,zm.forwardRef)(({className:o,...n},r)=>(0,zm.createElement)(A_,{ref:r,iconNode:t,className:Rm(`lucide-${M_(_0(e))}`,`lucide-${e}`,o),...n}));return a.displayName=_0(e),a};var zR=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],ds=P("align-horizontal-distribute-center",zR);var OR=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],us=P("align-vertical-distribute-center",OR);var BR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],oc=P("arrow-left",BR);var HR=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],cs=P("arrow-up",HR);var FR=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],fs=P("audio-lines",FR);var UR=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],nc=P("bookmark",UR);var qR=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],rc=P("calendar",qR);var VR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ht=P("check",VR);var GR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ga=P("chevron-down",GR);var jR=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hr=P("chevron-right",jR);var XR=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ic=P("chevron-left",XR);var WR=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],sc=P("chevron-up",WR);var YR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],mi=P("circle-alert",YR);var KR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gi=P("circle-check",KR);var ZR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],on=P("circle-question-mark",ZR);var $R=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],lc=P("clapperboard",$R);var QR=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],to=P("cloud-upload",QR);var JR=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],hi=P("copy",JR);var eP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Nn=P("crosshair",eP);var tP=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ps=P("download",tP);var aP=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],bi=P("ellipsis",aP);var oP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],dc=P("external-link",oP);var nP=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],uc=P("eye-off",nP);var rP=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],cc=P("eye",rP);var iP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],br=P("file-code",iP);var sP=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],En=P("file-pen",sP);var lP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],fc=P("file-spreadsheet",lP);var dP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ka=P("file-text",dP);var uP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],pc=P("file-up",uP);var cP=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],mc=P("files",cP);var fP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],oa=P("film",fP);var pP=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],ms=P("folder-input",pP);var mP=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],gc=P("folder-open",mP);var gP=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],gs=P("folder-plus",gP);var hP=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],So=P("folder",hP);var bP=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],xi=P("funnel",bP);var xP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ko=P("grid-3x3",xP);var wP=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],hc=P("grip-vertical",wP);var yP=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],td=P("hand",yP);var vP=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],bc=P("hard-drive",vP);var CP=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],xc=P("hash",CP);var SP=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],xr=P("image-plus",SP);var kP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],za=P("image",kP);var LP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],wc=P("info",LP);var _P=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],yc=P("keyboard",_P);var IP=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ha=P("layers",IP);var MP=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Oa=P("layout-grid",MP);var NP=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],vc=P("list-tree",NP);var EP=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],wr=P("list",EP);var TP=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],wi=P("loader-circle",TP);var AP=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Cc=P("map",AP);var DP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Tn=P("maximize-2",DP);var RP=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Sc=P("maximize",RP);var PP=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],hs=P("message-square",PP);var zP=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],bs=P("mic",zP);var OP=[["path",{d:"M5 12h14",key:"1ays0h"}]],kc=P("minus",OP);var BP=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Lc=P("mouse-pointer-click",BP);var HP=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ad=P("mouse-pointer",HP);var FP=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],La=P("music",FP);var UP=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",key:"28k6lz"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],xs=P("package-plus",UP);var qP=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],_c=P("paperclip",qP);var VP=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Ic=P("pause",VP);var GP=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],An=P("pen-line",GP);var jP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Dn=P("pen",jP);var XP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ws=P("pencil",XP);var WP=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Mc=P("person-standing",WP);var YP=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ba=P("play",YP);var KP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ft=P("plus",KP);var ZP=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],Nc=P("redo-2",ZP);var $P=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],yr=P("refresh-cw",$P);var QP=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ys=P("rotate-ccw",QP);var JP=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],nn=P("search",JP);var ez=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Ec=P("settings-2",ez);var tz=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],vs=P("sliders-horizontal",tz);var az=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mt=P("sparkles",az);var oz=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],yi=P("square-split-vertical",oz);var nz=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Lo=P("table",nz);var rz=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Tc=P("tag",rz);var iz=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],vi=P("text-align-justify",iz);var sz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_o=P("trash-2",sz);var lz=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Rn=P("triangle-alert",lz);var dz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],vr=P("type",dz);var uz=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Ac=P("undo-2",uz);var cz=[["rect",{x:"11",y:"14",width:"10",height:"7",rx:"2",key:"nfm8rk"}],["rect",{x:"3",y:"3",width:"10",height:"7",rx:"2",key:"1ljebb"}]],Dc=P("ungroup",cz);var fz=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],Cs=P("unlink",fz);var pz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ss=P("upload",pz);var mz=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],rn=P("video",mz);var gz=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],Rc=P("waypoints",gz);var hz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ba=P("x",hz);var na=I(X(),1);function oo({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:s="pill"}){let[l,u]=(0,ao.useState)(!1),d=(0,ao.useRef)(null),f=(0,ao.useRef)(null),[c,p]=(0,ao.useState)({top:0,left:0,placement:"bottom"}),g=(0,ao.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,ao.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),x=window.innerHeight,v=Math.min(t.length*34+16,260),S=x-m.bottom<v&&m.top>v,k=S?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:k,left:m.left,width:_,placement:S?"top":"bottom"})},[t.length,r]);(0,ao.useEffect)(()=>{if(!l)return;w();let m=C=>{let S=C.target;d.current?.contains(S)||f.current?.contains(S)||u(!1)},x=C=>{C.key==="Escape"&&u(!1)},v=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",x),window.addEventListener("scroll",v,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",x),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",w)}},[l,w]);let y=(0,ao.useCallback)(m=>{m.stopPropagation(),!n&&u(x=>!x)},[n]),h=(0,ao.useCallback)((m,x)=>{x||(a?.(m),u(!1))},[a]),b=["wf-custom-select-trigger",`wf-custom-select-trigger--${s}`,l?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,na.jsxs)(na.Fragment,{children:[(0,na.jsxs)("button",{ref:d,type:"button",className:b,disabled:n,onClick:y,"aria-haspopup":"listbox","aria-expanded":l,children:[(0,na.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:i??String(e??"")}),(0,na.jsx)(ga,{size:12,className:"wf-custom-select-chevron"})]}),l&&typeof document<"u"?(0,D_.createPortal)((0,na.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,na.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let x=m.value===e,v=!!m.subtitle||!!m.badge||!!m.icon;return(0,na.jsxs)("button",{type:"button",role:"option","aria-selected":x,disabled:m.disabled,className:`wf-custom-select-option ${v?"wf-custom-select-option--rich":""} ${x?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,na.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,na.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,na.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,na.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,na.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,na.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),x?(0,na.jsx)(Ht,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Pn=I(J(),1),R_=I(Qt(),1),sn=I(X(),1),Pc=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,Pn.useState)(!1),s=(0,Pn.useRef)(null),l=(0,Pn.useRef)(null),[u,d]=(0,Pn.useState)({left:0}),f=(0,Pn.useCallback)(()=>{if(!s.current)return;let p=s.current.getBoundingClientRect(),g=a.startsWith("top"),w=a.endsWith("Right"),y=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,b=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:y,bottom:h,left:b})},[a]);(0,Pn.useEffect)(()=>{if(!r)return;f();let p=w=>{let y=w.target;s.current?.contains(y)||l.current?.contains(y)||i(!1)},g=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(g=>!g)};return(0,sn.jsxs)(sn.Fragment,{children:[(0,sn.jsx)("div",{ref:s,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,R_.createPortal)((0,sn.jsx)("div",{ref:l,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,sn.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,sn.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,sn.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,sn.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var P_=I(J(),1),I0=I(X(),1),M0=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:s=""})=>{let l=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,P_.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,I0.jsx)("div",{className:`wf-custom-slider ${s}`,style:i,children:(0,I0.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${l}%, rgba(255,255,255,0.12) ${l}%, rgba(255,255,255,0.12) 100%)`}})})};var z_=I(J(),1),O_=I(Qt(),1);var zn=I(X(),1),ln=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:s})=>((0,z_.useEffect)(()=>{if(!e)return;let l=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]),!e||typeof document>"u"?null:(0,O_.createPortal)((0,zn.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,zn.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:l=>l.stopPropagation(),children:[(0,zn.jsxs)("div",{className:"wf-modal-header",children:[(0,zn.jsx)("div",{className:"wf-modal-title",children:a}),(0,zn.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,zn.jsx)(ba,{size:16})})]}),(0,zn.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:s}),o?(0,zn.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Bm=I(J(),1),B_=I(Ix(),1);var ks=I(X(),1),zc=null,bz=()=>{let[e,t]=(0,Bm.useState)([]);return(0,Bm.useEffect)(()=>(zc=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{zc=null}),[]),e.length===0?null:(0,ks.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=wc,n="#60a5fa";return a.type==="success"?(o=gi,n="#34d399"):a.type==="warning"?(o=Rn,n="#fb923c"):a.type==="error"&&(o=mi,n="#f87171"),(0,ks.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,ks.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,ks.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function xz(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,B_.createRoot)(t).render((0,ks.jsx)(bz,{}))}function Om(e,t,a=2500){xz();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;zc?zc({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{zc?.({id:o,type:e,content:t,durationMs:a})},50)}var Y={success:(e,t)=>Om("success",e,t),warning:(e,t)=>Om("warning",e,t),error:(e,t)=>Om("error",e,t),info:(e,t)=>Om("info",e,t)};var H_=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>l,subscribe:u=>(a.add(u),()=>a.delete(u))},l=t=e(o,n,s);return s},F_=(e=>e?H_(e):H_);var Oc=I(J(),1);var wz=e=>e;function yz(e,t=wz){let a=Oc.default.useSyncExternalStore(e.subscribe,Oc.default.useCallback(()=>t(e.getState()),[e,t]),Oc.default.useCallback(()=>t(e.getInitialState()),[e,t]));return Oc.default.useDebugValue(a),a}var U_=e=>{let t=F_(e),a=o=>yz(t,o);return Object.assign(a,t),a},od=(e=>e?U_(e):U_);var X_=I(J(),1);var q_=e=>Symbol.iterator in e,V_=e=>"entries"in e,G_=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},vz=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function j_(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:q_(e)&&q_(t)?V_(e)&&V_(t)?G_(e,t):vz(e,t):G_({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function W_(e){let t=X_.default.useRef(void 0);return a=>{let o=e(a);return j_(t.current,o)?t.current:t.current=o}}var K_={stroke:"#b1b1b7",strokeWidth:2},Hm={type:"animated",style:K_,animated:!1};function Y_(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function Cz(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function Z_(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:Cz(e),...Hm,...e,data:{...t,createdAt:a},animated:e.animated??Hm.animated,style:{...K_,...e.style??{}},sourceHandle:Y_(e.sourceHandle),targetHandle:Y_(e.targetHandle)}}var $_={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},Sz={text:"text-editor",image:"text-to-image",video:"video-generation",audio:"text-to-audio"};var Q_={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Bc(e,t){return{label:"",materialType:e,status:"empty",selectedTool:Sz[e],params:{},failStrategy:"abort",...t}}function Ls(e){return e.nodeKind==="generate"||e.nodeKind==="import"?e.nodeKind:e.selectedTool==="import"?"import":"generate"}var kz={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function J_(e){return kz[e]??[]}function Lz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,s=a.generatedContent,l=!1;return o==="text"?l=!!(i?.trim()||s):o==="image"?l=!!r:l=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:l}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function _z(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=$_[n];if(i)for(let s of i){let l=Q_[s];l&&l.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function Fm(e,t){let a=Lz(e),o=_z(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function Um(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(s=>s.source===e.source&&s.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(s=>s.id===e.source),n=t.find(s=>s.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!Fm(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let s=i.shift();if(!(!s||r.has(s.id))){r.add(s.id);for(let l of Qx(s,t,a)){if(l.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(l)}}}return{valid:!0}}function qm(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function Iz(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function e5(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return qm(e,"rejected","duplicate_node");a.add(d.id)}let o=Iz([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return qm(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return qm(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),s=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=Z_(d),c=Um(f,s,u);if(!c.valid)return qm(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:s,edges:u,status:"allowed"}}function t5(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var Vm=!1,Gm=!1;function jm(){Vm=!0}function a5(){Gm=!0,Vm=!1}function o5(){Vm=!1,Gm=!1}function Mz(){Gm=!1}function N0(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function E0(e,t){return{nodes:e.slice(),edges:t.slice()}}function Hc(e,t){return t||(Gm&&e===0?"reset":Vm&&e===0?"user-delete":"autosave")}function Xm(e){let t=E0(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:N0({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(Mz(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}function no(e){return e>0?1/e:1}function r5(e,t,a,o,n){return n||o==="import"?!1:!!e&&!t&&a!=="running"}function i5(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var n5=32,Nz=350,Ez=280;function Tz(e){let t=e.data||{},a=t.materialType||(e.type==="material"?"text":void 0),o=Nz,n=Ez,r=0;e.type==="material"||a?(r=28,a==="text"?(o=350,n=500):a==="image"?(o=350,n=350):a==="video"?(o=350,n=280):a==="audio"&&(o=350,n=150)):e.type==="table"?(r=28,o=380,n=280):e.type==="video_composition"?(r=28,o=350,n=440):e.type==="group"&&(o=400,n=300,r=0);let i=typeof e.measured?.width=="number"&&Number.isFinite(e.measured.width)&&e.measured.width>0?e.measured.width:typeof e.width=="number"&&Number.isFinite(e.width)&&e.width>0?e.width:typeof t.nodeWidth=="number"&&Number.isFinite(t.nodeWidth)&&t.nodeWidth>0?t.nodeWidth:o,s=typeof e.measured?.height=="number"&&Number.isFinite(e.measured.height)&&e.measured.height>0?e.measured.height:typeof e.height=="number"&&Number.isFinite(e.height)&&e.height>0?e.height:typeof t.nodeHeight=="number"&&Number.isFinite(t.nodeHeight)&&t.nodeHeight>0?t.nodeHeight:n;return{width:i,height:s,headerOffset:r}}function Fc(e,t=n5,a){if(!e||e.length===0)return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let o=a?.includeHeaderOffset??!0,n=1/0,r=1/0,i=-1/0,s=-1/0;for(let p of e){let g=typeof p?.position?.x=="number"&&Number.isFinite(p.position.x)?p.position.x:0,w=typeof p?.position?.y=="number"&&Number.isFinite(p.position.y)?p.position.y:0,{width:y,height:h,headerOffset:b}=Tz(p),m=o?w-b:w;g<n&&(n=g),m<r&&(r=m),g+y>i&&(i=g+y),w+h>s&&(s=w+h)}if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(s))return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let l=Number.isFinite(t)&&t>=0?t:n5,u=n-l,d=r-l,f=Math.max(120,i-n+l*2),c=Math.max(80,s-r+l*2);return{x:u,y:d,width:f,height:c,minWidth:f,minHeight:c}}function Az(e,t){let a=typeof e?.x=="number"&&Number.isFinite(e.x)?e.x:0,o=typeof e?.y=="number"&&Number.isFinite(e.y)?e.y:0,n=typeof t?.x=="number"&&Number.isFinite(t.x)?t.x:0,r=typeof t?.y=="number"&&Number.isFinite(t.y)?t.y:0;return{x:a-n,y:o-r}}function Dz(e,t){let a=typeof e?.x=="number"&&Number.isFinite(e.x)?e.x:0,o=typeof e?.y=="number"&&Number.isFinite(e.y)?e.y:0,n=typeof t?.x=="number"&&Number.isFinite(t.x)?t.x:0,r=typeof t?.y=="number"&&Number.isFinite(t.y)?t.y:0;return{x:a+n,y:o+r}}function s5(e,t,a,o){let{x:n,y:r,width:i,height:s}=t,{dx:l,dy:u}=a;switch(e){case"se":{i=Math.max(o.minWidth,i+l),s=Math.max(o.minHeight,s+u);break}case"e":{i=Math.max(o.minWidth,i+l);break}case"s":{s=Math.max(o.minHeight,s+u);break}case"nw":{let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);let f=s-u;f>=o.minHeight?(r+=u,s=f):(r+=s-o.minHeight,s=o.minHeight);break}case"w":{let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);break}case"n":{let d=s-u;d>=o.minHeight?(r+=u,s=d):(r+=s-o.minHeight,s=o.minHeight);break}case"ne":{i=Math.max(o.minWidth,i+l);let d=s-u;d>=o.minHeight?(r+=u,s=d):(r+=s-o.minHeight,s=o.minHeight);break}case"sw":{s=Math.max(o.minHeight,s+u);let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);break}}return{x:n,y:r,width:i,height:s}}function l5(e,t,a){let o=a>0?a:1;return{dx:e/o,dy:t/o}}function nd(e,t){return e.filter(a=>a.parentId===t&&a.type!=="group").map(a=>a.id)}function d5(e,t,a="\u65B0\u5EFA\u7EC4",o="#3b82f6"){let n=e.filter(d=>t.includes(d.id)&&d.type!=="group"&&!d.parentId);if(n.length<2)return null;let r=Fc(n,32),i=`group_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,s={id:i,type:"group",position:{x:r.x,y:r.y},width:r.width,height:r.height,selected:!0,style:{width:r.width,height:r.height,zIndex:0},data:{title:a,color:o,minWidth:r.minWidth,minHeight:r.minHeight,padding:32,nodeIds:n.map(d=>d.id)}},l=new Set(n.map(d=>d.id)),u=e.map(d=>{if(!l.has(d.id)||d.type==="group")return d;let f=Az(d.position,{x:r.x,y:r.y});return{...d,parentId:i,position:f,selected:!1,extent:"parent"}});return{groupId:i,nodes:[s,...u]}}function u5(e,t){let a=e.find(n=>n.id===t&&n.type==="group");if(!a)return null;let o=a.position;return e.filter(n=>n.id!==t).map(n=>{if(n.parentId!==t)return n;let r=Dz(n.position,o),{parentId:i,extent:s,...l}=n;return{...l,position:r,selected:!0}})}var Rz=50,Pz=300;function Uc(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Ha={current:null,lastPushAt:0},oe=od()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&jm(),e({nodes:v0(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:C0(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&jm();let o=t(),n=e5({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(s=>s.id===i.id));return t5(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&jm(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},groupNodes:(a,o="\u65B0\u5EFA\u7EC4",n="#3b82f6")=>{let r=d5(t().nodes,a,o,n);return r?(e({nodes:r.nodes,selectedElement:{type:"node",id:r.groupId}}),r.groupId):null},ungroup:a=>{let o=u5(t().nodes,a);o&&e({nodes:o,selectedElement:{type:"none",id:null}})},resizeGroup:(a,o)=>{let n=t().nodes,r=n.find(u=>u.id===a&&u.type==="group");if(!r)return;let i=o.x-r.position.x,s=o.y-r.position.y,l=n.map(u=>u.id===a?{...u,position:{x:o.x,y:o.y},width:o.width,height:o.height,style:{...u.style,width:o.width,height:o.height}}:u.parentId===a&&(i!==0||s!==0)?{...u,position:{x:u.position.x-i,y:u.position.y-s}}:u);e({nodes:l})},hydrateGraph:(a,o)=>{o5(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Ha.current=Uc(a,o),Ha.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Uc(t().nodes,t().edges);if(Ha.current&&Ha.current.sig===a.sig)return;let o=Date.now();if(Ha.current&&o-Ha.lastPushAt>=Pz){let n=Ha.current;e(r=>({past:[...r.past,n].slice(-Rz),future:[]})),Ha.lastPushAt=o}Ha.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Uc(o,n);Ha.current=r,e(s=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...s.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Uc(o,n);Ha.current=r,e(s=>({nodes:r.nodes,edges:r.edges,past:[...s.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Ha.current=Uc(a,o),Ha.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{a5(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Ha.current=null,Ha.lastPushAt=0}})),c5=()=>oe(W_(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var f5=()=>oe(e=>e.past.length>0),p5=()=>oe(e=>e.future.length>0),rd=()=>oe(e=>e.nodes.filter(t=>t.selected&&t.type!=="group").length>=2);var M5=I(J(),1);var m5={total:0,completed:0,running:0,pending:0,percentage:0},at=od()(e=>({executionId:null,status:"idle",error:null,progress:m5,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:m5,nodeStatuses:{}})}));var g5=I(J(),1),h5="(prefers-reduced-motion: reduce)";function zz(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(h5);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function Oz(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(h5).matches}function b5(){return(0,g5.useSyncExternalStore)(zz,Oz)}var Io=I(J(),1),Fa=I(X(),1),Bz=108,v5=64,Hz=186,x5=v5+Hz,T0=8,w5=.9,Fz=3,y5=.16,Uz=.98,qz=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let l=(0,Io.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${l}`,d=`beam-flow-${l}`,f=`beam-breathe-${l}`,c=(0,Io.useMemo)(()=>{if(t&&a){let x=a.x-t.x,v=a.y-t.y;return Math.max(250,Math.hypot(x,v)*1.15)}return 250},[t,a]),p=(0,Io.useRef)(null),[g,w]=(0,Io.useState)(c);(0,Io.useEffect)(()=>{if(p.current)try{let x=p.current.getTotalLength();Number.isFinite(x)&&x>0&&w(x)}catch{}},[e]);let{segments:y,calculatedDuration:h,periodPx:b}=(0,Io.useMemo)(()=>{let x=g>0?g:c,v=Math.max(1,Math.round(x/x5)),C=x/v,k=C*(v5/x5)/T0,_=o??Math.max(.5,C/Bz);return{segments:Array.from({length:T0},(A,B)=>{let U=B/(T0-1),L=U**1.4,N=w5+(Fz-w5)*L,E=N+1.4,M=y5+(Uz-y5)*L,R=-(B*(_/C)*k);return{index:B,progress:U,taperedProgress:L,coreWidth:N,haloWidth:E,opacity:M,dashArray:`${k} ${C-k}`,timeDelay:n+R}}),calculatedDuration:_,periodPx:C}},[g,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-b:0}px; }
      to { stroke-dashoffset: ${r?0:-b}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,Fa.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,Fa.jsxs)("defs",{children:[(0,Fa.jsx)("style",{children:m}),(0,Fa.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,Fa.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,Fa.jsxs)("feMerge",{children:[(0,Fa.jsx)("feMergeNode",{in:"blur"}),(0,Fa.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,Fa.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,Fa.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:y.map(x=>{let v=x.index>=5;return(0,Fa.jsxs)("g",{children:[v&&(0,Fa.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:x.haloWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",filter:`url(#${u})`,opacity:x.opacity*.75,style:{animation:`${d} ${h}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,Fa.jsx)("path",{d:e,stroke:x.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:x.coreWidth,strokeLinecap:"round",strokeDasharray:x.dashArray,fill:"none",opacity:x.opacity,filter:x.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${h}s linear ${x.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},x.index)})})]})},C5=(0,Io.memo)(qz);var qc=I(J(),1);var L5=I(J(),1);var Vz={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.type.import_asset":"\u5BFC\u5165\u7D20\u6750","node.type.group":"\u7EC4","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.replace":"\u66FF\u6362","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165\u7D20\u6750","pill.importImage":"\u5BFC\u5165\u7D20\u6750","pill.importVideo":"\u5BFC\u5165\u7D20\u6750","pill.importAudio":"\u5BFC\u5165\u7D20\u6750","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u652F\u6301\u56FE\u7247 / \u89C6\u9891 / \u97F3\u9891\uFF0C\u62D6\u62FD\u6216\u70B9\u51FB\u5BFC\u5165\u7D20\u6750","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u4EC5\u652F\u6301\u66FF\u6362\u672C\u5730\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u751F\u6210","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.import_asset":"\u5BFC\u5165\u7D20\u6750","toolbar.add.import_assetDesc":"\u5BFC\u5165\u672C\u5730\u56FE\u7247\u3001\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","toolbar.insertTemplate":"\u63D2\u5165\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateLabel":"\u6A21\u677F","toolbar.insertTemplateEmpty":"\u8FD8\u6CA1\u6709\u53EF\u63D2\u5165\u7684\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateNodes":"{count} \u4E2A\u8282\u70B9","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.importOk":"\u5DF2\u5BFC\u5165\u7D20\u6750","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002","group.defaultTitle":"\u65B0\u5EFA\u7EC4","group.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","group.colorTitle":"\u9009\u62E9\u7EC4\u4E3B\u9898\u8272","group.layout":"\u5E03\u5C40","group.layoutTitle":"\u7EC4\u5185\u8282\u70B9\u81EA\u52A8\u5E03\u5C40","group.layoutHorizontal":"\u6C34\u5E73\u6392\u5217","group.layoutVertical":"\u5782\u76F4\u6392\u5217","group.layoutGrid":"\u7F51\u683C\u6392\u5217","group.layoutGridCompact":"\u7F51\u683C\u7D27\u51D1\u6392\u5217","group.execute":"\u6574\u7EC4\u6267\u884C","group.executeTitle":"\u72EC\u7ACB\u8FD0\u884C\u8BE5\u7EC4\u5185\u6240\u6709\u8282\u70B9","group.createWorkflow":"\u521B\u5EFA\u5DE5\u4F5C\u6D41","group.createWorkflowTitle":"\u5BFC\u51FA\u4E3A\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","group.ungroup":"\u89E3\u7EC4","group.ungroupTitle":"\u89E3\u9664\u5F53\u524D\u5206\u7EC4","group.float.createAsset":"\u521B\u5EFA\u8D44\u4EA7","group.float.createAssetTitle":"\u4FDD\u5B58\u9009\u4E2D\u8282\u70B9\u751F\u6210\u7269\u81F3\u8D44\u4EA7\u5E93","group.float.group":"\u6253\u7EC4","group.float.groupTitle":"\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4 (Cmd + G)","group.float.layoutTitle":"\u6392\u5217\u9009\u4E2D\u8282\u70B9","group.toast.grouped":"\u5DF2\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4","group.toast.ungrouped":"\u5DF2\u89E3\u9664\u5206\u7EC4","group.toast.layout":"\u5DF2\u5B8C\u6210\u5E03\u5C40\u6392\u5217","group.toast.execute":"\u5DF2\u5F00\u59CB\u6574\u7EC4\u6267\u884C","template.modal.title":"\u521B\u5EFA\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.name":"\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.namePlaceholder":"\u4F8B\u5982\uFF1A\u591C\u666F\u4EBA\u50CF\u7CBE\u4FEE\u5DE5\u4F5C\u6D41","template.modal.defaultName":"\u65B0\u5EFA\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.description":"\u529F\u80FD\u63CF\u8FF0","template.modal.descriptionPlaceholder":"\u7B80\u8981\u8BF4\u660E\u8BE5\u5DE5\u4F5C\u6D41\u7684\u529F\u80FD\u3001\u8F93\u5165\u8981\u6C42\u4E0E\u8F93\u51FA\u6548\u679C...","template.modal.tags":"\u5206\u7C7B\u6807\u7B7E","template.modal.tagsPlaceholder":"\u7528\u9017\u53F7\u5206\u9694\u6807\u7B7E","template.modal.defaultTags":"\u5B50\u56FE, \u53EF\u590D\u7528","template.modal.hint":"\u5305\u542B {count} \u4E2A\u8282\u70B9\u7684\u62D3\u6251\u4E0E\u53C2\u6570\u5C06\u88AB\u5C01\u88C5\u4E3A JSON \u6A21\u677F\uFF0C\u53EF\u63D2\u5165\u4EFB\u610F\u5F53\u524D\u753B\u5E03\u590D\u7528\u3002","template.modal.cancel":"\u53D6\u6D88","template.modal.submit":"\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.saving":"\u4FDD\u5B58\u4E2D...","template.modal.nameRequired":"\u8BF7\u8F93\u5165\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.saved":"\u5DE5\u4F5C\u6D41\u300C{name}\u300D\u5DF2\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.failed":"\u521B\u5EFA\u5DE5\u4F5C\u6D41\u5931\u8D25","template.missingGroup":"\u7F3A\u5C11\u5206\u7EC4","template.toast.inserted":"\u5DF2\u63D2\u5165\u6A21\u677F\u300C{name}\u300D","template.toast.loadFailed":"\u8BFB\u53D6\u6A21\u677F\u5931\u8D25","asset.modal.title":"\u6279\u91CF\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93","asset.modal.name":"\u8D44\u4EA7\u540D\u79F0","asset.modal.defaultName":"\u753B\u5E03\u4EA7\u7269","asset.modal.category":"\u8D44\u4EA7\u7C7B\u522B","asset.modal.files":"\u5F85\u5165\u5E93\u672C\u5730\u6587\u4EF6\uFF08{count} \u9879\uFF09","asset.modal.empty":"\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u8DEF\u5F84\u3002\u8FDC\u7A0B\u9884\u89C8\u6216 blob \u4E0D\u4F1A\u5199\u5165\u8D44\u4EA7\u5E93\u3002","asset.modal.tags":"\u6807\u7B7E","asset.modal.tagsPlaceholder":"\u9017\u53F7\u5206\u9694\u6807\u7B7E","asset.modal.defaultTags":"AIGC, \u5DE5\u4F5C\u6D41\u751F\u6210","asset.modal.cancel":"\u53D6\u6D88","asset.modal.submit":"\u786E\u8BA4\u5199\u5165\u8D44\u4EA7\u5E93","asset.modal.saving":"\u4FDD\u5B58\u4E2D...","asset.modal.noFiles":"\u6240\u9009\u8282\u70B9\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u6587\u4EF6\u8DEF\u5F84","asset.modal.nameRequired":"\u8BF7\u8F93\u5165\u8D44\u4EA7\u540D\u79F0","asset.modal.saved":"\u5DF2\u5199\u5165\u8D44\u4EA7\u5E93\uFF1A{name}","asset.modal.failed":"\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93\u5931\u8D25","asset.scope.character":"\u89D2\u8272 (Character)","asset.scope.scene":"\u573A\u666F (Scene)","asset.scope.prop":"\u9053\u5177 (Prop)","asset.scope.style":"\u98CE\u683C\u5305 (Style)","asset.scope.knowledge":"\u77E5\u8BC6\u5305 (Knowledge)","asset.scope.custom":"\u81EA\u5B9A\u4E49\u7D20\u6750 (Custom)"},S5=Vz;var Gz={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.type.import_asset":"Import Asset","node.type.group":"Group","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.replace":"Replace","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import Asset","pill.importImage":"Import Asset","pill.importVideo":"Import Asset","pill.importAudio":"Import Asset","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Supports image / video / audio. Drop or click to import asset","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import asset nodes only support replacing local files, not generation","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.import_asset":"Import Asset","toolbar.add.import_assetDesc":"Import local image, video, or audio files","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","toolbar.insertTemplate":"Insert workflow template","toolbar.insertTemplateLabel":"Templates","toolbar.insertTemplateEmpty":"No reusable workflow templates yet","toolbar.insertTemplateNodes":"{count} nodes","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.importOk":"Asset imported","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker.","group.defaultTitle":"New group","group.renameHint":"Double-click to rename","group.colorTitle":"Choose group color","group.layout":"Layout","group.layoutTitle":"Auto-layout nodes in this group","group.layoutHorizontal":"Arrange horizontally","group.layoutVertical":"Arrange vertically","group.layoutGrid":"Arrange as grid","group.layoutGridCompact":"Compact grid","group.execute":"Run group","group.executeTitle":"Run every node in this group","group.createWorkflow":"Create workflow","group.createWorkflowTitle":"Export as a reusable workflow template","group.ungroup":"Ungroup","group.ungroupTitle":"Ungroup the selected nodes","group.float.createAsset":"Create asset","group.float.createAssetTitle":"Save selected outputs to the asset library","group.float.group":"Group","group.float.groupTitle":"Group selected nodes (Cmd + G)","group.float.layoutTitle":"Arrange selected nodes","group.toast.grouped":"Selected nodes grouped","group.toast.ungrouped":"Group removed","group.toast.layout":"Layout applied","group.toast.execute":"Group execution started","template.modal.title":"Create reusable workflow template","template.modal.name":"Workflow name","template.modal.namePlaceholder":"e.g. Night portrait retouch workflow","template.modal.defaultName":"New workflow template","template.modal.description":"Description","template.modal.descriptionPlaceholder":"What this workflow does, expected inputs, and outputs...","template.modal.tags":"Tags","template.modal.tagsPlaceholder":"Comma-separated tags","template.modal.defaultTags":"subgraph, reusable","template.modal.hint":"Topology and params of {count} nodes will be saved as JSON and can be inserted into any canvas.","template.modal.cancel":"Cancel","template.modal.submit":"Save to template library","template.modal.saving":"Saving...","template.modal.nameRequired":"Enter a workflow name","template.modal.saved":"Workflow \u201C{name}\u201D saved to the template library","template.modal.failed":"Failed to create workflow","template.missingGroup":"Missing group","template.toast.inserted":"Inserted template \u201C{name}\u201D","template.toast.loadFailed":"Failed to load template","asset.modal.title":"Save to asset library","asset.modal.name":"Asset name","asset.modal.defaultName":"Canvas output","asset.modal.category":"Asset type","asset.modal.files":"Local files to ingest ({count})","asset.modal.empty":"No local paths to ingest. Remote previews and blobs are skipped.","asset.modal.tags":"Tags","asset.modal.tagsPlaceholder":"Comma-separated tags","asset.modal.defaultTags":"AIGC, workflow","asset.modal.cancel":"Cancel","asset.modal.submit":"Write to asset library","asset.modal.saving":"Saving...","asset.modal.noFiles":"Selected nodes have no ingestible local file path","asset.modal.nameRequired":"Enter an asset name","asset.modal.saved":"Wrote to asset library: {name}","asset.modal.failed":"Failed to save to asset library","asset.scope.character":"Character","asset.scope.scene":"Scene","asset.scope.prop":"Prop","asset.scope.style":"Style pack","asset.scope.knowledge":"Knowledge pack","asset.scope.custom":"Custom"},k5=Gz;var A0={zh:S5,en:k5},Wm="zh",D0=new Set;function jz(e){return D0.add(e),()=>D0.delete(e)}function Xz(){return Wm}function _5(e){let t=e==="en"?"en":"zh";if(t!==Wm){Wm=t;for(let a of D0)a()}}function _s(e){return A0[Wm][e]??A0.zh[e]??A0.en[e]??e}function le(){return(0,L5.useSyncExternalStore)(jz,Xz),_s}var Km=I(X(),1),Ym=28,Wz=({edgeId:e,x:t,y:a})=>{let o=le(),n=oe(s=>s.applyCanvasInputMutation),r=(0,qc.useCallback)(s=>{s.preventDefault(),s.stopPropagation()},[]),i=(0,qc.useCallback)(s=>{s.preventDefault(),s.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,Km.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-Ym/2,y:a-Ym/2,width:Ym,height:Ym,children:(0,Km.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,Km.jsx)(Cs,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},I5=(0,qc.memo)(Wz);var id=I(X(),1),Yz=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l,selected:u,animated:d,data:f,style:c})=>{let[p,g,w]=Kl({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l}),y=oe(C=>{let S=C.selectedElement.id;return S&&(S===t||S===a)?!0:C.nodes.some(k=>k.selected&&(k.id===t||k.id===a))}),h=at(C=>C.nodeStatuses[a]==="running"),b=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,x=y||b||h||m,v=b5();return(0,id.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,id.jsx)(Jl,{id:e,path:p,style:c}),x&&!v&&(0,id.jsx)(C5,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:h?.8:void 0}),(0,id.jsx)(I5,{edgeId:e,x:g,y:w})]})},R0=(0,M5.memo)(Yz);var Is=I(J(),1);function ye(e){e.stopPropagation()}function P0(e){e.preventDefault(),e.stopPropagation()}var ge=I(X(),1),Kz=[{type:"import_asset",Icon:to,color:"#38bdf8",bg:"rgba(56, 189, 248, 0.16)"},{type:"text",Icon:ka,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:xr,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:rn,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:La,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Lo,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:oa,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],Zz=({onAddNode:e,pointerMode:t="select",onPointerModeChange:a,onOpenAssets:o,onOpenHelp:n,isAddMenuOpen:r,onToggleAddMenu:i,isAssetsOpen:s=!1,templates:l=[],onInsertTemplate:u})=>{let d=le(),[f,c]=(0,Is.useState)(!1),[p,g]=(0,Is.useState)(!1),w=r!==void 0?r:f,y=i||(()=>c(m=>!m)),h=(0,Is.useCallback)(m=>{e(m),i?i():c(!1)},[e,i]),b=[{key:"select",icon:(0,ge.jsx)(ad,{size:18}),label:d("toolbar.selectMode"),onClick:()=>a?.("select")},{key:"pan",icon:(0,ge.jsx)(td,{size:18}),label:d("toolbar.panMode"),onClick:()=>a?.("pan")}];return(0,ge.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:ye,onMouseDown:ye,children:[(0,ge.jsxs)("div",{style:{position:"relative"},children:[(0,ge.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:y,onContextMenu:P0,title:d("toolbar.addNode"),children:(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(ft,{size:24})})}),w&&(0,ge.jsx)("div",{className:"wf-dock-add-popover",children:Kz.map(m=>(0,ge.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:P0,children:[(0,ge.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,ge.jsx)(m.Icon,{size:18})}),(0,ge.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,ge.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,ge.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,ge.jsx)("div",{className:"wf-canvas-toolbar__divider"}),u&&(0,ge.jsxs)("div",{style:{position:"relative"},children:[(0,ge.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>g(m=>!m),title:d("toolbar.insertTemplate"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(br,{size:20})}),(0,ge.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.insertTemplateLabel")})]}),p&&(0,ge.jsx)("div",{className:"wf-dock-add-popover wf-template-picker",children:l.length===0?(0,ge.jsx)("div",{className:"wf-template-picker__empty",children:d("toolbar.insertTemplateEmpty")}):l.map(m=>(0,ge.jsxs)("button",{type:"button",className:"wf-template-picker__item",onClick:()=>{u(m.id),g(!1)},children:[(0,ge.jsx)("span",{children:m.name}),(0,ge.jsx)("span",{className:"wf-template-picker__meta",children:d("toolbar.insertTemplateNodes").replace("{count}",String(m.nodeCount))})]},m.id))})]}),(0,ge.jsx)(Pc,{items:b,selectedKeys:[t],placement:"topCenter",children:(0,ge.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(t==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:t==="select"?(0,ge.jsx)(ad,{size:20}):(0,ge.jsx)(td,{size:20})}),(0,ge.jsx)(sc,{size:14,style:{opacity:.6,marginLeft:2}})]})}),(0,ge.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${s?"wf-canvas-toolbar__item--active":""}`,onClick:o,title:d("toolbar.assets"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(gc,{size:20})}),(0,ge.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),n&&(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ge.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:n,title:d("toolbar.help"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(on,{size:20})}),(0,ge.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},N5=(0,Is.memo)(Zz);var sd=I(J(),1);var ve=I(X(),1),$z={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},Qz=e=>Math.round(e.transform[2]*100),Jz=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:s,onCancelExecution:l,onResetExecution:u})=>{let d=le(),{zoomIn:f,zoomOut:c,fitView:p}=Sa(),g=Me(Qz),w=at(T=>T.status),y=at(T=>T.progress),h=at(T=>T.error),b=w==="pending"||w==="running",m=w==="paused",x=w==="completed"||w==="error"||w==="cancelled",v=y.total>0,C=(0,sd.useCallback)(()=>{p({duration:250,padding:.1})},[p]),S=(0,sd.useCallback)(()=>{f({duration:150})},[f]),k=(0,sd.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,ve.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:ye,onMouseDown:ye,children:[r&&(b||m||x&&u?(0,ve.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${b||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[b||m?(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d($z[w]),v&&` (${y.completed}/${y.total})`]}),b?(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,ve.jsx)(Ic,{size:14})}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:s,title:d("exec.resumeTitle"),children:(0,ve.jsx)(Ba,{size:14})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:l,title:d("exec.cancelTitle"),children:(0,ve.jsx)(ba,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(Ba,{size:14,fill:"currentColor",style:{marginLeft:2}})}),x&&u&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,ve.jsx)(ys,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(Ba,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,ve.jsx)(Sc,{size:15})}),(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:k,title:d("header.zoomOut"),children:(0,ve.jsx)(kc,{size:15})}),(0,ve.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:d("header.zoomIn"),children:(0,ve.jsx)(ft,{size:15})})]}),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,ve.jsx)(Oa,{size:15})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,ve.jsx)(Rc,{size:15})}),(0,ve.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,ve.jsx)(Cc,{size:15})}),n&&(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)(Pc,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,ve.jsx)(yi,{size:15})})})]})]})]})},E5=(0,sd.memo)(Jz);var xa=I(J(),1);var Dt="/omnimux-workflow";var Nt={manifest:`${Dt}/api/manifest`,canvasJs:`${Dt}/canvas.js`,workspaces:`${Dt}/api/workspaces`,workspace:e=>`${Dt}/api/workspaces/${e}`,workspaceVersion:e=>`${Dt}/api/workspaces/${e}/version`,workspaceAssets:e=>`${Dt}/api/workspaces/${e}/assets`,workspaceAssetsMkdir:e=>`${Dt}/api/workspaces/${e}/assets/mkdir`,workspaceAssetsIndex:e=>`${Dt}/api/workspaces/${e}/assets/index`,capabilities:`${Dt}/api/capabilities`,media:`${Dt}/media`,pick:`${Dt}/api/pick`,localFile:`${Dt}/api/local-file`,localFileProbe:`${Dt}/api/local-file/probe`,executions:e=>`${Dt}/api/workspaces/${e}/executions`,execution:(e,t)=>`${Dt}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${Dt}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${Dt}/api/workspaces/${e}/executions/${t}/events`,templates:`${Dt}/api/templates`,template:e=>`${Dt}/api/templates/${e}`};async function Yt(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body),signal:t.signal}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function T5(){return Yt(Nt.capabilities)}function A5(e,t){return Yt(Nt.workspaces,{method:"POST",body:{name:e,id:t}})}function Vc(e){return Yt(Nt.workspace(encodeURIComponent(e)))}function D5(e){return Yt(Nt.workspaceVersion(encodeURIComponent(e)))}function R5(e,t){return Yt(Nt.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function P5(e,t={}){return Yt(Nt.executions(encodeURIComponent(e)),{method:"POST",body:t})}function z5(e){return Yt(Nt.executions(encodeURIComponent(e)))}function O5(e,t){return Yt(Nt.execution(encodeURIComponent(e),encodeURIComponent(t)))}function B5(e,t){return Yt(Nt.workspaceAssets(encodeURIComponent(e)),{signal:t})}function H5(e,t){return Yt(Nt.workspaceAssets(encodeURIComponent(e)),{method:"PUT",body:t})}function F5(e,t){return Yt(Nt.workspaceAssetsMkdir(encodeURIComponent(e)),{method:"POST",body:t})}function U5(e,t){return Yt(Nt.workspaceAssetsIndex(encodeURIComponent(e)),{method:"POST",body:t})}function On(){return Yt(Nt.pick,{method:"POST",body:{kind:"file"}})}function q5(e){return Yt(Nt.localFileProbe,{method:"POST",body:{paths:e}})}function V5(e,t,a){return Yt(Nt.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var e9=["character","scene","style","prop","knowledge","custom"],Ms={character:"\u89D2\u8272",scene:"\u573A\u666F",style:"\u98CE\u683C\u5305",prop:"\u9053\u5177",knowledge:"\u77E5\u8BC6\u5305",custom:"\u81EA\u5B9A\u4E49"},z0=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:Ms.character},{id:"scene",label:Ms.scene},{id:"style",label:Ms.style},{id:"prop",label:Ms.prop},{id:"knowledge",label:Ms.knowledge},{id:"custom",label:Ms.custom}];function t9(e){return typeof e=="string"&&e9.includes(e)?e:"custom"}function G5(e,t){let a=new URLSearchParams({id:e});return t&&a.set("file",t),`/omnimux/assets/library/preview?${a.toString()}`}function a9(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.trim()!==""):[]}function O0(e){let t=typeof e.id=="string"&&e.id.trim()!==""?e.id:"",a=typeof e.name=="string"&&e.name.trim()!==""?e.name:"\u672A\u547D\u540D\u4E3B\u4F53",o=t9(e.type),n=Ms[o],r=Array.isArray(e.files)?e.files:[],i=e.cover&&typeof e.cover.id=="string"&&e.cover.id||(typeof e.cover_file_id=="string"?e.cover_file_id:"")||(typeof r[0]?.id=="string"?r[0].id:""),s=t&&i?G5(t,i):"",l=r.map(c=>t&&typeof c.id=="string"?G5(t,c.id):"").filter(c=>c!=="").slice(0,4),u=a9(e.tags).filter(c=>c!==n),d=typeof e.updatedAt=="number"?e.updatedAt:typeof e.updated_at=="string"&&Date.parse(e.updated_at)||0,f=r.map(c=>{let p=typeof c.real_path=="string"?c.real_path.trim():"",g=typeof c.original_name=="string"?c.original_name.trim():"",w=typeof c.id=="string"?c.id:"";return!p&&!w&&!g?null:{...w?{id:w}:{},...p?{real_path:p}:{},...g?{original_name:g}:{}}}).filter(c=>!!c);return{id:t,name:a,avatar:s,itemCount:r.length,tags:[n,...u],updatedAt:d,previewUrls:l.length>0?l:s?[s]:[],type:o,...f.length>0?{files:f}:{}}}function Zm(e){if(!e.ok){let o=e.body?.error;return e.status===501||o==="picker-unsupported"?{kind:"unsupported"}:{kind:"error",message:e.body?.message||e.body?.error||`HTTP ${String(e.status)}`}}let t=e.body?.paths,a=Array.isArray(t)?t.filter(o=>typeof o=="string"&&o.trim()!==""):typeof e.body?.path=="string"&&e.body.path.trim()!==""?[e.body.path]:[];return a.length===0?{kind:"cancel"}:{kind:"ok",paths:a}}function o9(){return globalThis.fetch.bind(globalThis)}async function B0(e){try{let t=await e.json();if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{}return{}}function Gc(e={}){let t=e.fetch??o9();async function a(r={},i){try{let s=new URLSearchParams;r.type&&r.type!=="all"&&s.set("type",r.type),r.q&&s.set("q",r.q);let l=s.toString()?`?${s.toString()}`:"",u=await t(`/omnimux/assets/library${l}`,{method:"GET",signal:i}),d=await B0(u);if(!u.ok)return{ok:!1,status:u.status,subjects:[],error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let c=(Array.isArray(d.assets)?d.assets:[]).filter(p=>!!p&&typeof p=="object").map(p=>O0(p)).filter(p=>p.id!=="");return{ok:!0,status:u.status,subjects:c}}catch(s){return i?.aborted||s instanceof Error&&s.name==="AbortError"?{ok:!1,status:0,subjects:[],error:"aborted"}:{ok:!1,status:0,subjects:[],error:"network"}}}async function o(r,i="custom",s){try{let l={name:r,type:i};Array.isArray(s)&&s.length>0&&(l.files=s);let u=await t("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),d=await B0(u);if(!u.ok)return{ok:!1,status:u.status,subject:null,error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let f=d.asset&&typeof d.asset=="object"?d.asset:{name:r,type:i};return{ok:!0,status:u.status,subject:O0(f)}}catch{return{ok:!1,status:0,subject:null,error:"network"}}}async function n(r){try{let i=await t("/omnimux/assets/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:r})}),s=await B0(i),l=Zm({ok:i.ok,status:i.status,body:{error:typeof s.error=="string"?s.error:void 0,message:typeof s.message=="string"?s.message:void 0,path:typeof s.path=="string"||s.path===null?s.path:null,paths:Array.isArray(s.paths)?s.paths:[]}});return{ok:i.ok,status:i.status,interpretation:l}}catch{return{ok:!1,status:0,interpretation:{kind:"error",message:"network"}}}}return{listLibrary:a,createLibraryAsset:o,pickAssets:n}}var GZ=Gc();function dn(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function X5(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ua(e){return typeof e=="string"?e.trim():""}function W5(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function n9(e){return typeof e=="string"&&e.startsWith("blob:")}function un(e){let t=Ua(e);if(!(!t||n9(t)))return t}function r9(e){return X5(e.data)?e.data:{}}function Y5(e){return Ua(e.realPath)||Ua(e.real_path)}function j5(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function i9(e){if(e)for(let t of e){let a=un(t?.url);if(a)return a}}function s9(e,t){let a=Ua(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=Ua(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function l9(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=Ua(t.mediaUrl)||void 0,n=a?dn(a,j5(t),o):void 0;return un(n)||un(t.previewUrl)||un(t.imageUrl)||un(t.outputUrl)||un(t.coverUrl)||un(t.mediaUrl)||un(t.outputVideoUrl)||un(t.thumbnailUrl)||i9(j5(t))}function d9(e){let t=W5(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=X5(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function u9(e,t,a){let o=Y5(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(Ua(t.content)||Ua(t.generatedContent)):e==="table"?d9(t):e==="video_composition"?!!(un(t.outputVideoUrl)||un(t.thumbnailUrl)):!1}function c9(e,t,a){return Ua(a.originalName)||Ua(a.label)||Ua(a.title)||Ua(a.name)||`${e} #${t.slice(-4)}`}function f9(e){let t=Ua(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function p9(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function m9(e){let t=Ua(e.id);if(!t)return null;let a=r9(e),o=s9(e,a),n=l9(o,a);if(!u9(o,a,n))return null;let r=Y5(a),i=W5(a.updatedAt)??0,s=Ls(a),l=s==="import"?"":Ua(a.prompt),u={id:t,name:c9(o,t,a),type:o,status:f9(a),nodeKind:s,updatedAt:i};n&&(u.previewUrl=n),r&&(u.real_path=r),l&&(u.prompt=l);let d=p9(a);return d&&(u.tags=d),u}function K5(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=m9(a);o&&t.push(o)}return t}var $m=I(J(),1),Z5=I(Qt(),1);var Cr=I(X(),1),H0=["image","video","audio","text","other"],g9=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],$5=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,$m.useRef)(null);if((0,$m.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-160),l=a.length===0||H0.every(f=>a.includes(f)),u=f=>f==="all"?l:l?!0:a.includes(f),d=f=>{if(f==="all"){o(l?["__none__"]:[]);return}if(l){let p=H0.filter(g=>g!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],H0.every(p=>c.includes(p))?o([]):o(c)};return(0,Z5.createPortal)((0,Cr.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"140px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:f=>f.stopPropagation(),children:(0,Cr.jsx)("div",{className:"wf-popover-body",children:g9.map(f=>{let c=u(f.id);return(0,Cr.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,Cr.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Cr.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,Cr.jsx)(Ht,{size:10,strokeWidth:3})}),(0,Cr.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var Qm=I(J(),1),Q5=I(Qt(),1);var Ci=I(X(),1),F0=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],J5=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,Qm.useRef)(null);if((0,Qm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-150),l=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,Q5.createPortal)((0,Ci.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"136px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:u=>u.stopPropagation(),children:(0,Ci.jsx)("div",{className:"wf-popover-body",children:F0.map(u=>{let d=a.includes(u.id);return(0,Ci.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>l(u.id),children:(0,Ci.jsxs)("div",{className:"wf-popover-item-left",children:[(0,Ci.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,Ci.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var Jm=I(J(),1),eI=I(Qt(),1);var qa=I(X(),1),tI=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let s=(0,Jm.useRef)(null);if((0,Jm.useEffect)(()=>{if(!e)return;let d=c=>{s.current&&!s.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let l=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,eI.createPortal)((0,qa.jsxs)("div",{ref:s,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${l}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:d=>d.stopPropagation(),children:[(0,qa.jsxs)("div",{className:"wf-popover-body",children:[(0,qa.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,qa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,qa.jsx)(Ht,{size:14,className:"wf-popover-item-check"})]}),(0,qa.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,qa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,qa.jsx)(Ht,{size:14,className:"wf-popover-item-check"})]})]}),(0,qa.jsx)("div",{className:"wf-popover-divider"}),(0,qa.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,qa.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,qa.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,qa.jsx)(Ht,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var eg=I(J(),1),aI=I(Qt(),1);var Ns=I(X(),1),oI=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,eg.useRef)(null);if((0,eg.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-180),l=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,aI.createPortal)((0,Ns.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"160px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:u=>u.stopPropagation(),children:(0,Ns.jsx)("div",{className:"wf-popover-body",children:l.map(u=>{let d=a===u.id;return(0,Ns.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,Ns.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,Ns.jsx)(Ht,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var tg=I(J(),1),nI=I(Qt(),1);var pe=I(X(),1),rI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,tg.useRef)(null);if((0,tg.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=220,l=440,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,nI.createPortal)((0,pe.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ye,onPointerDown:ye,onClick:c=>c.stopPropagation(),children:[(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,pe.jsx)(Nn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,pe.jsx)(hs,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,pe.jsx)(Mt,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,pe.jsx)(nc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,pe.jsx)(Nn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,pe.jsx)(dc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,pe.jsx)(So,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,pe.jsx)(hi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,pe.jsx)(hi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,pe.jsx)(mc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,pe.jsx)(vc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,pe.jsx)(Dn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,pe.jsx)(_o,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var ag=I(J(),1),iI=I(Qt(),1);var Kt=I(X(),1),sI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,ag.useRef)(null);if((0,ag.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=190,l=220,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,iI.createPortal)((0,Kt.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ye,onPointerDown:ye,onClick:c=>c.stopPropagation(),children:[(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,Kt.jsx)(za,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,Kt.jsx)(hs,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,Kt.jsx)(So,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,Kt.jsx)(ms,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,Kt.jsx)("div",{className:"wf-context-menu-divider"}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,Kt.jsx)(_o,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var og=I(J(),1),lI=I(Qt(),1);var _a=I(X(),1),dI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,og.useRef)(null);if((0,og.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=190,l=180,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,lI.createPortal)((0,_a.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ye,onPointerDown:ye,onClick:c=>c.stopPropagation(),children:[(0,_a.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,_a.jsx)(So,{size:14,className:"wf-context-menu-icon"}),(0,_a.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,_a.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,_a.jsx)(Dn,{size:14,className:"wf-context-menu-icon"}),(0,_a.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,_a.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,_a.jsx)(ms,{size:14,className:"wf-context-menu-icon"}),(0,_a.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,_a.jsx)("div",{className:"wf-context-menu-divider"}),(0,_a.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,_a.jsx)(_o,{size:14,className:"wf-context-menu-icon"}),(0,_a.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var Mo=I(J(),1);var se=I(X(),1),U0=1440*60*1e3;function h9(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=U0:t==="7d"?a<=7*U0:t==="30d"?a<=30*U0:!0}var b9={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function x9(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=F0.find(i=>i.id===o);return[...b9[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function w9(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var uI=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:s,onViewModeChange:l})=>{let[u,d]=(0,Mo.useState)(""),f=t!==void 0?t:u,c=D=>{d(D),a?.(D)},[p,g]=(0,Mo.useState)("tree"),w=s??p,y=D=>{g(D),l?.(D)},[h,b]=(0,Mo.useState)(null),[m,x]=(0,Mo.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[v,C]=(0,Mo.useState)(!1),[S,k]=(0,Mo.useState)(!1),[_,T]=(0,Mo.useState)(!1),[A,B]=(0,Mo.useState)(null),[U,L]=(0,Mo.useState)(null),[N,E]=(0,Mo.useState)(null),M=D=>{switch(D){case"image":return(0,se.jsx)(za,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,se.jsx)(oa,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,se.jsx)(La,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,se.jsx)(ka,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,se.jsx)(Mt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},R=(0,Mo.useMemo)(()=>{let D=e.filter(H=>{if(f.trim()){let z=f.toLowerCase();if(!(H.name.toLowerCase().includes(z)||H.prompt&&H.prompt.toLowerCase().includes(z)))return!1}return!(!w9(H.type,m.types)||!x9(H,m.tags)||!h9(H.updatedAt||0,m.timeRange))});return D.sort((H,z)=>m.sortOrder==="desc"?(z.updatedAt||0)-(H.updatedAt||0):(H.updatedAt||0)-(z.updatedAt||0)),D},[e,f,m]),O=D=>H=>{H.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-canvas-node",nodeId:D.id})),H.dataTransfer.effectAllowed="move"};return(0,se.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,se.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,se.jsxs)("div",{className:"wf-search-row-compact",children:[(0,se.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,se.jsx)(nn,{size:13,className:"wf-search-icon"}),(0,se.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:D=>c(D.target.value)})]}),(0,se.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,se.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>y("tree"),children:(0,se.jsx)(wr,{size:13})}),(0,se.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>y("grid"),children:(0,se.jsx)(Oa,{size:13})})]}),(0,se.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,se.jsx)(yr,{size:13})})]}),(0,se.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,se.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,se.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:D=>{B(D.currentTarget.getBoundingClientRect()),C(H=>!H),k(!1),T(!1)},children:[(0,se.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,se.jsx)(ga,{size:11})]})}),(0,se.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,se.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:D=>{L(D.currentTarget.getBoundingClientRect()),k(H=>!H),C(!1),T(!1)},children:[(0,se.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,se.jsx)(ga,{size:11})]})}),(0,se.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,se.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:D=>{E(D.currentTarget.getBoundingClientRect()),T(H=>!H),C(!1),k(!1)},children:[(0,se.jsx)("span",{children:"\u65F6\u95F4"}),(0,se.jsx)(ga,{size:11})]})})]})]}),(0,se.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,se.jsx)(ha,{size:24,className:"wf-assets-empty-icon"}),(0,se.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,se.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):R.length===0?(0,se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,se.jsx)(ha,{size:24,className:"wf-assets-empty-icon"}),(0,se.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,se.jsx)("div",{className:"wf-tree-list-container-compact",children:R.map(D=>{let H=h===D.id;return(0,se.jsxs)("div",{"data-id":D.id,className:`wf-tree-item-compact ${H?"selected":""}`,draggable:!0,onDragStart:O(D),onClick:()=>{b(D.id),o(D.id)},onContextMenu:z=>{z.preventDefault(),b(D.id),n(z,D)},onMouseEnter:z=>r(D,z),onMouseLeave:()=>r(null),children:[D.previewUrl?(0,se.jsx)("img",{src:D.previewUrl,alt:D.name,className:"wf-tree-file-thumb-compact"}):(0,se.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:M(D.type)}),(0,se.jsx)("span",{className:"wf-tree-name-compact",title:D.name,children:D.name}),D.nodeKind?(0,se.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${D.nodeKind}`,children:D.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null,(0,se.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:z=>{z.stopPropagation(),o(D.id)},children:(0,se.jsx)(Nn,{size:12})})]},D.id)})}):(0,se.jsx)("div",{className:"wf-grid-view-container-compact",children:R.map(D=>(0,se.jsxs)("div",{"data-id":D.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:O(D),onClick:()=>{b(D.id),o(D.id)},onContextMenu:H=>{H.preventDefault(),n(H,D)},onMouseEnter:H=>r(D,H),onMouseLeave:()=>r(null),children:[(0,se.jsx)("div",{className:"wf-grid-card-thumb-compact",children:D.previewUrl?(0,se.jsx)("img",{src:D.previewUrl,alt:D.name}):M(D.type)}),(0,se.jsxs)("div",{className:"wf-grid-card-meta-compact",children:[(0,se.jsx)("div",{className:"wf-grid-card-title-compact",title:D.name,children:D.name}),D.nodeKind?(0,se.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${D.nodeKind}`,children:D.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]})]},D.id))})}),(0,se.jsx)($5,{isOpen:v,anchorRect:A,selectedTypes:m.types,onChange:D=>x(H=>({...H,types:D})),onClose:()=>C(!1)}),(0,se.jsx)(J5,{isOpen:S,anchorRect:U,selectedTags:m.tags,onChange:D=>x(H=>({...H,tags:D})),onClose:()=>k(!1)}),(0,se.jsx)(tI,{isOpen:_,anchorRect:N,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:D=>x(H=>({...H,sortOrder:D})),onRangeChange:D=>x(H=>({...H,timeRange:D})),onClose:()=>T(!1)})]})};var jc=I(J(),1);var fe=I(X(),1),cI=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:s})=>{let[l,u]=(0,jc.useState)("tree"),[d,f]=(0,jc.useState)(""),[c,p]=(0,jc.useState)(null),[g,w]=(0,jc.useState)({}),y=v=>{w(C=>({...C,[v]:!C[v]}))},h=v=>{switch(v){case"image":return(0,fe.jsx)(za,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,fe.jsx)(oa,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,fe.jsx)(La,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,fe.jsx)(ka,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,fe.jsx)(So,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,fe.jsx)(Mt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},b=e.filter(v=>{if(d.trim()){let C=d.toLowerCase();if(!(v.name.toLowerCase().includes(C)||v.tags&&v.tags.some(k=>k.toLowerCase().includes(C))))return!1}return!0}),m=v=>b.filter(C=>(C.parentId??null)===v),x=(v,C)=>{let S=[];for(let k of m(v)){let _=k.type==="folder",T=_&&(g[k.id]??C===0),A=c===k.id;S.push((0,fe.jsxs)("div",{className:`wf-tree-item-compact ${A?"selected":""}`,style:{paddingLeft:`${8+C*14}px`},"data-asset-id":k.id,"data-parent-id":k.parentId??"",draggable:!_,onDragStart:B=>{_||(B.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:k})),B.dataTransfer.effectAllowed="copy")},onClick:()=>{p(k.id),_&&y(k.id)},onDoubleClick:()=>{_||i(k)},onContextMenu:B=>{B.preventDefault(),p(k.id),a(B,k,_)},onMouseEnter:B=>o(k,B),onMouseLeave:()=>o(null),children:[_?(0,fe.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:T?(0,fe.jsx)(ga,{size:11}):(0,fe.jsx)(hr,{size:11})}):null,k.previewUrl?(0,fe.jsx)("img",{src:k.previewUrl,alt:k.name,className:"wf-tree-file-thumb-compact"}):(0,fe.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:h(k.type)}),(0,fe.jsx)("span",{className:"wf-tree-name-compact",title:k.name,children:k.name}),!_&&(0,fe.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:B=>{B.stopPropagation(),i(k)},children:(0,fe.jsx)(Nn,{size:12})})]},k.id)),_&&T&&S.push(...x(k.id,C+1))}return S};return(0,fe.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,fe.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,fe.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,fe.jsx)(Mt,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,fe.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,fe.jsx)(hr,{size:14,className:"wf-subject-hero-arrow"})]}),(0,fe.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,fe.jsxs)("div",{className:"wf-search-row-compact",children:[(0,fe.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,fe.jsx)(nn,{size:13,className:"wf-search-icon"}),(0,fe.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:v=>f(v.target.value)})]}),(0,fe.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,fe.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${l==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,fe.jsx)(wr,{size:13})}),(0,fe.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${l==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,fe.jsx)(Oa,{size:13})})]}),(0,fe.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:s,children:(0,fe.jsx)(yr,{size:13})})]})}),(0,fe.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:b.length===0?(0,fe.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,fe.jsx)(ha,{size:24,className:"wf-assets-empty-icon"}),(0,fe.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):l==="tree"?(0,fe.jsx)("div",{className:"wf-tree-list-container-compact",children:x(null,0)}):(0,fe.jsx)("div",{className:"wf-grid-view-container-compact",children:b.map(v=>(0,fe.jsxs)("div",{className:"wf-grid-card-compact",draggable:v.type!=="folder",onDragStart:C=>{v.type!=="folder"&&(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:v})),C.dataTransfer.effectAllowed="copy")},onClick:()=>p(v.id),onDoubleClick:()=>{v.type!=="folder"&&i(v)},onContextMenu:C=>{C.preventDefault(),p(v.id),a(C,v,v.type==="folder")},onMouseEnter:C=>o(v,C),onMouseLeave:()=>o(null),children:[(0,fe.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[v.previewUrl?(0,fe.jsx)("img",{src:v.previewUrl,alt:v.name}):h(v.type),v.duration&&(0,fe.jsx)("span",{className:"wf-grid-card-duration-compact",children:v.duration})]}),(0,fe.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,fe.jsx)("div",{className:"wf-grid-card-title-compact",title:v.name,children:v.name})})]},v.id))})}),(0,fe.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,fe.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,fe.jsx)(gs,{size:13}),(0,fe.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,fe.jsx)(cs,{size:13}),(0,fe.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var ld=I(J(),1);var Ne=I(X(),1),fI=({subjects:e,error:t,onBack:a,onSelectSubject:o,onCreateSubject:n})=>{let[r,i]=(0,ld.useState)(""),[s,l]=(0,ld.useState)("all"),[u,d]=(0,ld.useState)("recent"),[f,c]=(0,ld.useState)(!1),[p,g]=(0,ld.useState)(null),w=b=>{g(b.currentTarget.getBoundingClientRect()),c(m=>!m)},y=e.filter(b=>{if(s!=="all")if(b.type){if(b.type!==s)return!1}else{let x=z0.find(v=>v.id===s);if(x&&x.id!=="all"&&!b.tags.some(C=>C===x.label))return!1}if(!r.trim())return!0;let m=r.toLowerCase();return b.name.toLowerCase().includes(m)||b.tags.some(x=>x.toLowerCase().includes(m))}).sort((b,m)=>u==="recent"?m.updatedAt-b.updatedAt:u==="name"?b.name.localeCompare(m.name):u==="count"?m.itemCount-b.itemCount:0);return(0,Ne.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Ne.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Ne.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:a,children:[(0,Ne.jsx)(oc,{size:13}),(0,Ne.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Ne.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:w,children:[(0,Ne.jsx)(vs,{size:11}),(0,Ne.jsx)("span",{children:(()=>{switch(u){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Ne.jsx)(ga,{size:11})]})]}),(0,Ne.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Ne.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Ne.jsx)(nn,{size:13,className:"wf-search-icon"}),(0,Ne.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:r,onChange:b=>i(b.target.value)})]}),(0,Ne.jsx)("div",{className:"wf-subject-pills-row-compact",children:z0.map(b=>(0,Ne.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${s===b.id?"active":""}`,onClick:()=>l(b.id),children:b.label},b.id))})]}),(0,Ne.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:y.length===0?(0,Ne.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Ne.jsx)(Mt,{size:24,className:"wf-assets-empty-icon"}),(0,Ne.jsx)("div",{className:"wf-assets-empty-title",children:t?"\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528":e.length===0?"\u6682\u65E0\u4E3B\u4F53":"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Ne.jsx)("div",{className:"wf-subject-grid-compact",children:y.map(b=>(0,Ne.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,title:b.files?.some(m=>m.real_path)?b.name:"\u65E0\u672C\u5730\u6587\u4EF6\uFF0C\u65E0\u6CD5\u5165\u753B\u5E03",onDragStart:m=>{let x=(b.files||[]).find(v=>v.real_path);m.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:b.id,name:x?.original_name||b.name,real_path:x?.real_path,files:b.files}})),m.dataTransfer.effectAllowed="copy"},onClick:()=>o(b),children:[(0,Ne.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[b.avatar?(0,Ne.jsx)("img",{src:b.avatar,alt:b.name,className:"wf-subject-card-img-compact"}):(0,Ne.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Ne.jsx)(Mt,{size:20})}),(0,Ne.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Ne.jsx)(ha,{size:10})," ",b.itemCount," \u9879"]})]}),(0,Ne.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Ne.jsx)("div",{className:"wf-subject-card-name-compact",title:b.name,children:b.name}),(0,Ne.jsx)("div",{className:"wf-subject-card-tags-compact",children:b.tags.slice(0,3).map((m,x)=>(0,Ne.jsx)("span",{className:"wf-subject-card-tag-compact",children:m},x))})]})]},b.id))})}),(0,Ne.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Ne.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:n,children:[(0,Ne.jsx)(ft,{size:13}),(0,Ne.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Ne.jsx)(oI,{isOpen:f,anchorRect:p,sortValue:u,onChange:b=>d(b),onClose:()=>c(!1)})]})};var pI=I(J(),1),mI=I(Qt(),1);var Be=I(X(),1),gI=({isOpen:e,x:t=0,y:a=0,anchorRect:o,drawerLeft:n,item:r})=>{let i=(0,pI.useRef)(null);if(!e||!r)return null;let s=260,l=i.current?.offsetHeight||290,u,d;o?(u=(n??o.left)-s-8,d=o.top):(u=t-s-15,d=a-20),u<10&&(u=10);let f=window.innerHeight-l-12;d>f&&(d=f),d<12&&(d=12);let c="nodeKind"in r?r:null,p=c?null:r,g=r.updatedAt?new Date(r.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,mI.createPortal)((0,Be.jsxs)("div",{ref:i,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${d}px`,left:`${u}px`,width:`${s}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-preview",children:[r.previewUrl?(0,Be.jsx)("img",{src:r.previewUrl,alt:r.name,className:"wf-hover-inspector-img"}):(0,Be.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Be.jsx)(Mt,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),p?.duration&&(0,Be.jsx)("span",{className:"wf-hover-inspector-duration",children:p.duration})]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-title",title:r.name,children:[r.name,c?.nodeKind?(0,Be.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${c.nodeKind}`,children:c.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(rc,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:g})]}),p?.resolution&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(Tn,{size:12})," \u5206\u8FA8\u7387"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:p.resolution})]}),p?.size&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(bc,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:p.size})]}),c?.nodeKind==="import"&&c.real_path?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"\u672C\u5730\u8DEF\u5F84"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",title:c.real_path,children:c.real_path})]}):null,c?.nodeKind!=="import"&&c?.prompt?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:c.prompt})]}):null]}),p?.tags&&p.tags.length>0&&(0,Be.jsx)("div",{className:"wf-hover-inspector-tags",children:p.tags.map((w,y)=>(0,Be.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Be.jsx)(Tc,{size:10})," ",w]},y))})]})]}),document.body)};var Ft=I(J(),1);var y9=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),v9=new Set(["mp4","webm","mov","mkv","avi","m4v"]),C9=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),S9={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function hI(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function Xc(e){return S9[hI(e)]}function bI(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=hI(e);return y9.has(o)?"image":v9.has(o)?"video":C9.has(o)?"audio":null}function dd(e){return typeof e=="string"&&e.startsWith("blob:")}function cn(e){return`${Dt}/api/local-file?path=${encodeURIComponent(e)}`}function xI(e){if(typeof e!="string"||e.length===0)return null;try{let t=new URL(e,"http://127.0.0.1");if(!t.pathname.endsWith("/api/local-file"))return null;let a=t.searchParams.get("path");return a&&a.length>0?a:null}catch{return null}}function q0(e){return!e||e.includes("\0")?!1:e.startsWith("/")?!0:/^[a-zA-Z]:[\\/]/.test(e)}function ng(e){let t=cn(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||Xc(e.name)||Xc(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function wI(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=cn(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function yI(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var k9=1;function Wc(){return{schemaVersion:k9,rev:0,folders:[],items:[]}}function vI(e,t,a){let o=new Set([a]),n=!0;for(;n;){n=!1;for(let r of e){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}for(let r of t){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}}return[...o]}function L9(e,t){return{id:e.id,name:e.name,type:"folder",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,itemCount:t}}function _9(e){return{id:e.id,name:e.name,type:e.type,fileExt:e.name.split(".").pop()?.toUpperCase()||"FILE",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,previewUrl:cn(e.real_path)}}function CI(e){let t=new Map;for(let n of e.folders)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);for(let n of e.items)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);let a=e.folders.map(n=>L9(n,t.get(n.id)??0)),o=e.items.map(_9);return[...a,...o]}function SI(e){let[t,a]=(0,Ft.useState)(Wc),[o,n]=(0,Ft.useState)(!1),[r,i]=(0,Ft.useState)(null),s=(0,Ft.useRef)(t);s.current=t;let l=(0,Ft.useCallback)(async(b,m)=>{n(!0),i(null);try{let x=await B5(b,m);if(m.aborted)return;if(!x.ok||!x.body.assets){i(x.body.error||x.body.message||`HTTP ${String(x.status)}`),a(Wc());return}a(x.body.assets)}catch(x){if(m.aborted)return;i(x instanceof Error?x.message:String(x)),a(Wc())}finally{m.aborted||n(!1)}},[]);(0,Ft.useEffect)(()=>{if(!e){a(Wc()),i(null);return}let b=new AbortController;return l(e,b.signal),()=>b.abort()},[e,l]);let u=(0,Ft.useCallback)(b=>{a(b),i(null)},[]),d=(0,Ft.useCallback)(async(b,m)=>{if(!e)return!1;let x=await F5(e,{name:b,parentId:m??null,expectedRev:s.current.rev});return!x.ok||!x.body.assets?(i(x.body.error||x.body.message||"mkdir failed"),!1):(u(x.body.assets),!0)},[u,e]),f=(0,Ft.useCallback)(async(b,m)=>{if(!e)return!1;let x=await U5(e,{paths:b,parentId:m??null,expectedRev:s.current.rev});return!x.ok||!x.body.assets?(i(x.body.error||x.body.message||"index failed"),!1):(u(x.body.assets),!0)},[u,e]),c=(0,Ft.useCallback)(async b=>{if(!e)return!1;let m=await H5(e,{expectedRev:s.current.rev,folders:b.folders,items:b.items});return!m.ok||!m.body.assets?(i(m.body.error||m.body.message||"save failed"),!1):(u(m.body.assets),!0)},[u,e]),p=(0,Ft.useCallback)(async(b,m)=>{let x=s.current;return c({folders:x.folders.map(v=>v.id===b?{...v,name:m,updatedAt:Date.now()}:v),items:x.items})},[c]),g=(0,Ft.useCallback)(async(b,m)=>{let x=s.current;return c({folders:x.folders.map(v=>v.id===b?{...v,parentId:m,updatedAt:Date.now()}:v),items:x.items.map(v=>v.id===b?{...v,parentId:m,updatedAt:Date.now()}:v)})},[c]),w=(0,Ft.useCallback)(async b=>{let m=s.current,x=new Set(vI(m.folders,m.items,b));return c({folders:m.folders.filter(v=>!x.has(v.id)),items:m.items.filter(v=>!x.has(v.id))})},[c]),y=(0,Ft.useCallback)(async()=>{e&&await l(e,new AbortController().signal)},[l,e]),h=(0,Ft.useMemo)(()=>CI(t),[t]);return{document:t,assets:h,loading:o,error:r,refresh:y,mkdir:d,indexPaths:f,persist:c,renameFolder:p,moveNode:g,deleteNode:w}}var Sr=I(J(),1);var kI=Gc();function LI(e){let[t,a]=(0,Sr.useState)([]),[o,n]=(0,Sr.useState)(!1),[r,i]=(0,Sr.useState)(null),s=(0,Sr.useCallback)(async(u={},d)=>{n(!0);try{let f=await kI.listLibrary(u,d);if(d?.aborted||f.error==="aborted")return;if(!f.ok){i(f.error||"library-unavailable"),a([]);return}i(null),a(f.subjects)}finally{d?.aborted||n(!1)}},[]);(0,Sr.useEffect)(()=>{if(!e)return;let u=new AbortController;return s({},u.signal),()=>u.abort()},[e,s]);let l=(0,Sr.useCallback)(async(u,d)=>{let f=await kI.createLibraryAsset(u,"custom",d);return!f.ok||!f.subject?(i(f.error||"create-failed"),null):(a(c=>[f.subject,...c]),i(null),f.subject)},[]);return{subjects:t,loading:o,error:r,refresh:s,createSubject:l}}var wt=I(X(),1),I9=Gc();function M9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function N9(e){let t=e.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(t)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(t)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(t)?"audio":"doc"}function _I(e){if(e.kind!=="cancel"){if(e.kind==="unsupported"){Y.warning("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668");return}Y.error(e.kind==="error"&&e.message||"\u9009\u62E9\u6587\u4EF6\u5931\u8D25")}}var E9=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n,workspaceId:r})=>{let[i,s]=(0,xa.useState)("canvas"),[l,u]=(0,xa.useState)("normal"),[d,f]=(0,xa.useState)("tree"),[c,p]=(0,xa.useState)(320),[g,w]=(0,xa.useState)(!1),y=(0,xa.useMemo)(()=>K5(o),[o]),h=SI(r??null),b=LI(e&&l==="subject-library"),[m,x]=(0,xa.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[v,C]=(0,xa.useState)({visible:!1,x:0,y:0}),S=(0,xa.useRef)(null),k=(0,xa.useRef)(null);(0,xa.useEffect)(()=>()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]);let _=(0,xa.useCallback)(j=>{j.preventDefault(),w(!0);let F=j.clientX,Z=c,$=q=>{let Q=Math.max(260,Math.min(500,Z-(q.clientX-F)));p(Q)},ee=()=>{w(!1),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",ee)};window.addEventListener("mousemove",$),window.addEventListener("mouseup",ee)},[c]),T=j=>{if(n)n(j);else{let F=document.getElementById(j)||document.querySelector(`[data-id="${j}"]`);F&&(F.scrollIntoView({behavior:"smooth",block:"center"}),F.classList.add("highlight-pulse"),setTimeout(()=>F.classList.remove("highlight-pulse"),1800))}},A=(j,F)=>{if(S.current&&(clearTimeout(S.current),S.current=null),!j||!F){C({visible:!1,x:0,y:0,anchorRect:null,item:null});return}let $=F.currentTarget?.getBoundingClientRect(),ee=$?{top:$.top,bottom:$.bottom,left:$.left,right:$.right,width:$.width,height:$.height}:null,q=k.current?.getBoundingClientRect(),Q=q?q.left:void 0,{clientX:ne,clientY:de}=F;S.current=setTimeout(()=>{C({visible:!0,x:ne,y:de,anchorRect:ee,drawerLeft:Q,item:j})},200)},B=(j,F)=>{x({visible:!0,x:j.clientX,y:j.clientY,targetType:"canvas-item",targetItem:F})},U=(j,F,Z)=>{x({visible:!0,x:j.clientX,y:j.clientY,targetType:Z?"asset-folder":"asset-item",targetItem:F})},L=j=>j.real_path||j.name,N=(j,F)=>{let $=`[${F==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${j.name}]`;navigator.clipboard?.writeText($),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:$,name:j.name,previewUrl:j.previewUrl,path:j.real_path}})),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${j.name}`)},E=j=>{let F=L(j);navigator.clipboard?.writeText(F),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:F,name:j.name}})),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${F}`)},M=(j,F)=>{switch(j){case"add-to-canvas":case"focus-in-canvas":T(F.id),Y.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":N(F,"canvas");break;case"add-to-subjects":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}let Z=F.name.replace(/\.[^/.]+$/,"")||F.name;b.createSubject(Z,[{real_path:F.real_path,original_name:F.name}]).then($=>{$?Y.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${$.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528")});break}case"save-to-assets":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}h.indexPaths([F.real_path]).then(Z=>{Z?Y.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${F.name}`):Y.error("\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")});break}case"open-preview":F.previewUrl?(window.open(F.previewUrl,"_blank","noopener,noreferrer"),Y.success("\u5DF2\u6253\u5F00\u9884\u89C8")):Y.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":E(F);break;case"copy-path":navigator.clipboard?.writeText(L(F)),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${L(F)}`);break;case"copy-file":navigator.clipboard?.writeText(F.name),Y.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${F.name}`);break;case"duplicate":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":f(Z=>Z==="tree"?"grid":"tree"),Y.success(d==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},R=(j,F)=>{switch(j){case"add-to-canvas":a?.(F),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${F.name}`);break;case"add-to-agent":case"add-to-chat":N(F,"asset");break;case"reveal-in-finder":E(F);break;case"move-to":{let Z=h.assets.filter(q=>q.type==="folder"&&q.id!==F.id),$=Z.map(q=>q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${$}\uFF09\uFF1A`,Z[0]?.name||"");if(ee&&ee.trim()){let q=Z.find(Q=>Q.name===ee.trim());h.moveNode(F.id,q?.id??null).then(Q=>{Q?Y.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(Z=>{Z?Y.success(`\u5DF2\u5220\u9664\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},O=(j,F)=>{switch(j){case"reveal-in-finder":E(F);break;case"rename":{let Z=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",F.name);Z&&Z.trim()&&h.renameFolder(F.id,Z.trim()).then($=>{$?Y.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"):Y.error("\u91CD\u547D\u540D\u5931\u8D25")});break}case"move-to":{let Z=h.assets.filter(q=>q.type==="folder"&&q.id!==F.id),$=Z.map(q=>q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${$}\uFF09\uFF1A`,Z[0]?.name||"");if(ee&&ee.trim()){let q=Z.find(Q=>Q.name===ee.trim());h.moveNode(F.id,q?.id??null).then(Q=>{Q?Y.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(Z=>{Z?Y.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},D=async()=>{let j=await On(),F=Zm(j);if(F.kind!=="ok"){_I(F);return}for(let Z of F.paths){let $=M9(Z);a?.({id:Z,name:$,type:N9($),real_path:Z})}Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6\u5230\u753B\u5E03`)},H=async()=>{let F=(await I9.pickAssets("file")).interpretation;if(F.kind!=="ok"){_I(F);return}await h.indexPaths(F.paths)?Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6`):Y.error(h.error||"\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")},z=()=>{let j=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");!j||!j.trim()||h.mkdir(j.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${j.trim()}`):Y.error(h.error||"\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25")})};return e?(0,wt.jsxs)("div",{ref:k,className:"wf-assets-drawer-root nodrag nopan",style:{width:`${c}px`},onPointerDown:ye,onMouseDown:ye,onClick:j=>j.stopPropagation(),children:[(0,wt.jsx)("div",{className:`wf-drawer-resize-handle ${g?"resizing":""}`,onMouseDown:_}),(0,wt.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,wt.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,wt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="canvas"&&l==="normal"?"active":""}`,onClick:()=>{s("canvas"),u("normal")},children:"\u753B\u5E03"}),(0,wt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="assets"||l==="subject-library"?"active":""}`,onClick:()=>{s("assets")},children:"\u8D44\u4EA7"})]}),(0,wt.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,wt.jsx)(ba,{size:14})})]}),(0,wt.jsx)("div",{className:"wf-drawer-body",children:l==="subject-library"?(0,wt.jsx)(fI,{subjects:b.subjects,error:b.error,onBack:()=>u("normal"),onSelectSubject:()=>{},onCreateSubject:()=>{let j=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");!j||!j.trim()||b.createSubject(j.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u4E3B\u4F53\uFF1A${F.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528\uFF0C\u672A\u80FD\u521B\u5EFA")})}}):i==="canvas"?(0,wt.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,wt.jsx)(uI,{nodes:y,onFocusNode:T,onContextMenu:B,onHoverItem:A,viewMode:d,onViewModeChange:f,onRefresh:()=>{Y.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,wt.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,wt.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:()=>{D()},children:[(0,wt.jsx)(cs,{size:13}),(0,wt.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,wt.jsx)(cI,{assets:h.assets,onOpenSubjects:()=>u("subject-library"),onContextMenu:U,onHoverItem:A,onImportFiles:()=>{H()},onCreateFolder:z,onInsertToCanvas:j=>a?.(j),onRefresh:()=>{h.refresh().then(()=>Y.success("\u5DF2\u5237\u65B0\u9879\u76EE\u8D44\u4EA7"))}})}),(0,wt.jsx)(gI,{isOpen:v.visible,x:v.x,y:v.y,anchorRect:v.anchorRect,drawerLeft:v.drawerLeft,item:v.item||null}),(0,wt.jsx)(rI,{isOpen:m.visible&&m.targetType==="canvas-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:M,onClose:()=>x(j=>({...j,visible:!1}))}),(0,wt.jsx)(sI,{isOpen:m.visible&&m.targetType==="asset-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:R,onClose:()=>x(j=>({...j,visible:!1}))}),(0,wt.jsx)(dI,{isOpen:m.visible&&m.targetType==="asset-folder",x:m.x,y:m.y,item:m.targetItem||null,onAction:O,onClose:()=>x(j=>({...j,visible:!1}))})]}):null},II=E9;var ra=I(X(),1),T9=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],A9=({isOpen:e,onClose:t})=>e?(0,ra.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:ye,onMouseDown:ye,onClick:t,children:(0,ra.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,ra.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,ra.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,ra.jsx)(yc,{size:18}),(0,ra.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,ra.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,ra.jsx)(ba,{size:16})})]}),(0,ra.jsx)("div",{className:"wf-shortcuts-modal__body",children:T9.map(a=>(0,ra.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,ra.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,ra.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,ra.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,ra.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,ra.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,ra.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,MI=A9;var Wo=I(J(),1),TI=I(Qt(),1);var ia=I(X(),1),NI=278,Ts=12,D9=8,V0=160,Es=18,R9={AudioLines:(0,ia.jsx)(fs,{size:Es}),ImageGen:(0,ia.jsx)(xr,{size:Es}),Mic:(0,ia.jsx)(bs,{size:Es}),PersonStanding:(0,ia.jsx)(Mc,{size:Es}),TextGen:(0,ia.jsx)(vr,{size:Es}),VideoGen:(0,ia.jsx)(rn,{size:Es})},P9={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function EI(e){return e?P9[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function z9(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-NI:e;return Math.min(Math.max(Ts,o),Math.max(Ts,a-NI-Ts))}var O9=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:s="start"})=>{let l=(0,Wo.useRef)(null),[u,d]=(0,Wo.useState)({left:t,top:a,maxHeight:V0});(0,Wo.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?V0:window.innerHeight,p=z9(t,s),g=a+D9,w=Math.max(Ts,c-Ts-V0),y=Math.min(Math.max(Ts,g),w);d({left:p,top:y,maxHeight:Math.max(0,c-y-Ts)})},[s,e,t,a]),(0,Wo.useEffect)(()=>{if(!e)return;let c=g=>{l.current&&!l.current.contains(g.target)&&i()},p=g=>{g.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,Wo.useMemo)(()=>n.map(c=>(0,ia.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,ia.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,ia.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:EI(c.icon).bg,color:EI(c.icon).color},children:R9[c.icon]??(0,ia.jsx)(Mt,{size:Es})}):null,(0,ia.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,ia.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,ia.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,TI.createPortal)((0,ia.jsxs)("div",{ref:l,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,ia.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,ia.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},rg=(0,Wo.memo)(O9);var Yo=I(J(),1),AI=I(Qt(),1);var We=I(X(),1),B9=210,H9=230,F9=260,U9=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:s=!1,canRedo:l=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,Yo.useRef)(null),[c,p]=(0,Yo.useState)("main"),g=le();(0,Yo.useEffect)(()=>{a&&p("main")},[a]),(0,Yo.useEffect)(()=>{if(!a)return;let x=C=>{f.current&&!f.current.contains(C.target)&&n()},v=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",x),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",v)}},[a,n]);let w=(0,Yo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"import-asset",label:g("toolbar.add.import_asset"),icon:(0,We.jsx)(to,{size:15})},{action:"open-add-node",label:g("menu.addNode"),icon:(0,We.jsx)(ft,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!s},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!l},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,s,l,u,d,g]),y=(0,Yo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,We.jsx)(vr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,We.jsx)(za,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,We.jsx)(rn,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,We.jsx)(fs,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,We.jsx)(Lo,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,We.jsx)(oa,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?H9:B9,b=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-F9-8);return(0,AI.createPortal)((0,We.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:b,top:m},onContextMenu:x=>x.preventDefault(),children:c==="main"?w.map(x=>(0,We.jsxs)(Yo.default.Fragment,{children:[o.type==="pane"&&x.action==="undo"?(0,We.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&x.action==="paste"?(0,We.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,We.jsxs)("button",{type:"button",className:`wf-context-menu__item${x.disabled?" wf-context-menu__item--disabled":""}`,disabled:x.disabled,onClick:v=>{v.stopPropagation(),x.action==="open-add-node"?p("add-node"):r(x.action,o)},children:[x.icon?(0,We.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:x.icon}):null,(0,We.jsx)("span",{className:"wf-context-menu__label",children:x.label}),x.action==="open-add-node"?(0,We.jsx)(hr,{size:14,className:"wf-add-node-menu__arrow"}):x.shortcut?(0,We.jsx)("span",{className:"wf-context-menu__shortcut",children:x.shortcut}):null]})]},x.action)):(0,We.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,We.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,We.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:x=>{x.stopPropagation(),p("main")},title:g("menu.back"),children:(0,We.jsx)(ic,{size:16})}),(0,We.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,We.jsx)("div",{className:"wf-add-node-menu__list",children:y.map(x=>(0,We.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:v=>{v.stopPropagation(),i?.(x.type),n()},children:[(0,We.jsx)("div",{className:"wf-add-node-menu__icon-box",children:x.icon}),(0,We.jsx)("span",{className:"wf-add-node-menu__label",children:x.label}),x.badge?(0,We.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${x.badge.variant}`,children:x.badge.text}):null,x.hasSubmenu?(0,We.jsx)(hr,{size:14,className:"wf-add-node-menu__arrow"}):null]},x.key))})]})}),document.body)},DI=U9;var RI=I(J(),1);function PI(){return typeof navigator>"u"?!0:/Mac|iPhone|iPod|iPad/i.test(navigator.platform)}function q9(e,t=PI()){return t?!!(e.metaKey&&!e.ctrlKey&&!e.altKey):!!(e.ctrlKey&&!e.metaKey&&!e.altKey)}function V9(e,t={},a=PI()){let o=e.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return null;let n=q9(e,a),r=!e.metaKey&&!e.ctrlKey&&!e.altKey,i=e.key.toLowerCase(),{hasSelection:s=!1,isAssetsOpen:l=!1}=t;return r&&!e.shiftKey&&l&&/^[1-6]$/.test(e.key)?{type:"category",index:parseInt(e.key,10)}:r&&i==="a"?"toggleAssets":r&&!e.shiftKey&&i==="v"?"pointerSelect":r&&!e.shiftKey&&i==="h"?"pointerPan":r&&!e.shiftKey&&i==="n"?"toggleAddMenu":r&&!e.shiftKey&&i==="m"?"toggleMinimap":r&&(e.key==="?"||e.shiftKey&&e.key==="/")?"toggleShortcuts":n&&!e.shiftKey&&e.key==="1"?"fitView":n&&!e.shiftKey&&e.key==="0"?"resetZoom":r&&!e.shiftKey&&(e.key==="Delete"||e.key==="Backspace")&&s?"deleteSelected":r&&!e.shiftKey&&e.key==="Escape"?"escape":n&&e.shiftKey&&i==="g"?"ungroup":n&&!e.shiftKey&&i==="g"?"group":n&&!e.shiftKey&&i==="d"&&s?"duplicate":n&&!e.shiftKey&&i==="c"?"copy":n&&!e.shiftKey&&i==="v"?"paste":n&&!e.shiftKey&&i==="a"?"selectAll":n&&!e.shiftKey&&i==="z"?"undo":n&&e.shiftKey&&i==="z"?"redo":null}var zI=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:s,onRedo:l,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:w,onCategoryKey:y,onGroupSelected:h,onUngroupSelected:b,isAssetsOpen:m=!1,enabled:x=!0})=>{(0,RI.useEffect)(()=>{if(!x)return;let v=C=>{let S=V9(C,{hasSelection:i,isAssetsOpen:m});if(S){if(C.preventDefault(),typeof S=="object"&&S.type==="category"){y?.(S.index);return}switch(S){case"toggleAssets":u?.();break;case"pointerSelect":p?.("select");break;case"pointerPan":p?.("pan");break;case"toggleAddMenu":c?.();break;case"toggleMinimap":f?.();break;case"toggleShortcuts":d?.();break;case"fitView":g?.();break;case"resetZoom":w?.();break;case"deleteSelected":o?.();break;case"escape":m?u?.():i&&n?.();break;case"ungroup":b?.();break;case"group":h?.();break;case"duplicate":r?.();break;case"copy":e?.();break;case"paste":t?.();break;case"selectAll":a?.();break;case"undo":s?.();break;case"redo":l?.();break}}};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[x,e,t,a,o,n,r,i,s,l,u,d,f,c,p,g,w,y,h,b,m])};var fn=I(J(),1);function ig(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function OI(e,t,a){return G0(e,t,a).valid}function G0(e,t,a){let o=Um(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var j0={minZoom:.23,maxZoom:1.29,defaultZoom:1},G9={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},BI={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},j9={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},X9={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},HI={portrait:G9,square:BI,video_landscape:j9,audio_compact:X9};function X0(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function FI(e){return HI[X0(e)]}function UI(e,t){let a=HI[t]||BI;return Math.round(e/a.aspectRatio)}function Bn(e){return FI(e).default.width}function ud(e){return FI(e).default.height}function sg(e,t,a){let o=Bc(e,{nodeKind:"generate",status:"empty",nodeWidth:Bn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function W0(e="image",t={x:0,y:0},a){let o=Bc(e,{nodeKind:"import",selectedTool:"import",status:"empty",nodeWidth:Bn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function cd(e,t,a){return{nodes:[sg(e,t,a)],edges:[]}}function Y0(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function W9(e,t){return`${e}-${t}`}function lg(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function dg(e){return J_(e).map(t=>{let a=String(t.targetTool);return{key:W9(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function qI(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var Y9={visible:!1,x:0,y:0,options:[]};function VI(e){let t=le(),{screenToFlowPosition:a}=Sa(),o=oe(p=>p.applyCanvasInputMutation),n=(0,fn.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,fn.useState)(Y9),s=(0,fn.useRef)(null),l=(0,fn.useRef)(null),u=(0,fn.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){s.current=null;return}let w=oe.getState().nodes.find(h=>h.id===g.nodeId),y=w?.data?.materialType;if(!w||!y){s.current=null;return}s.current={nodeId:g.nodeId,materialType:y}},[]),d=(0,fn.useCallback)((p,g)=>{let w=g.fromNode?.id??null,y=g.toNode?.id??null,h=s.current,b=h?dg(h.materialType):[],m=null;if(!g.isValid&&w&&y){let v=oe.getState(),C=G0({source:w,target:y,sourceHandle:null,targetHandle:null},v.nodes,v.edges);m=C.valid?null:t(ig(C.reasonCode))}let x=qI({isValid:g.isValid??null,fromNodeId:w,toNodeId:y,startedFromSource:!!h,hasOptions:b.length>0,rejectReason:m});if(x.type==="reject"){n.current?.(x.reason),Y.warning(x.reason),s.current=null;return}if(x.type==="menu"&&h){let v="changedTouches"in p?p.changedTouches[0]:p;if(!v){s.current=null;return}let{clientX:C,clientY:S}=v;l.current=a({x:C,y:S}),i({visible:!0,x:C,y:S,options:b.map(k=>({key:k.key,label:t(k.labelKey),description:t(k.descKey),icon:k.icon}))});return}s.current=null},[a,t]),f=(0,fn.useCallback)(p=>{let g=s.current,w=l.current,y=lg(p);if(g&&w&&y){let h=cd(y.targetMaterialType,w),b=h.nodes[0];b&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:b.id,targetHandle:"in"}]})}i(h=>({...h,visible:!1})),s.current=null,l.current=null},[o]),c=(0,fn.useCallback)(()=>{i(p=>({...p,visible:!1})),s.current=null,l.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var Hn=I(J(),1);var wa=[];for(let e=0;e<256;++e)wa.push((e+256).toString(16).slice(1));function GI(e,t=0){return(wa[e[t+0]]+wa[e[t+1]]+wa[e[t+2]]+wa[e[t+3]]+"-"+wa[e[t+4]]+wa[e[t+5]]+"-"+wa[e[t+6]]+wa[e[t+7]]+"-"+wa[e[t+8]]+wa[e[t+9]]+"-"+wa[e[t+10]]+wa[e[t+11]]+wa[e[t+12]]+wa[e[t+13]]+wa[e[t+14]]+wa[e[t+15]]).toLowerCase()}var K0,K9=new Uint8Array(16);function Z0(){if(!K0){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");K0=crypto.getRandomValues.bind(crypto)}return K0(K9)}var Z9=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),$0={randomUUID:Z9};function $9(e,t,a){e=e||{};let o=e.random??e.rng?.()??Z0();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return GI(o)}function Q9(e,t,a){return $0.randomUUID&&!t&&!e?$0.randomUUID():$9(e,t,a)}var ug=Q9;function jI(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function J9(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function XI(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=J9(o),i,s;if(t)i=t.x,s=t.y;else{let f=a?50:30;i=r.x+f,s=r.y+f}let l=new Map,u=o.map(f=>{let c=ug();return l.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:s+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:ug(),source:l.get(f.source)||f.source,target:l.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:s}}}function WI(e,t){let a=(0,Hn.useRef)({nodes:[],edges:[]}),o=(0,Hn.useRef)(null),n=a.current.nodes.length>0,r=(0,Hn.useCallback)(()=>{let f=oe.getState(),c=jI(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,Hn.useCallback)(f=>{let c=XI(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=oe.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),s=(0,Hn.useCallback)(()=>{r(),i()},[r,i]),l=(0,Hn.useCallback)(()=>{let f=oe.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,Hn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,Hn.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:s,deleteSelectedNodes:l,selectAllNodes:u,clearSelection:d}}var Fn=I(J(),1);function YI(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:s,clearSelection:l,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,Fn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,Fn.useCallback)((C,S)=>{C.preventDefault();let k={type:"pane"};S?k={type:"node",nodeId:S.id}:oe.getState().nodes.filter(T=>T.selected).length>1&&(k={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:k})},[]),y=(0,Fn.useCallback)((C,S)=>{w(C,S)},[w]),h=(0,Fn.useCallback)(C=>{w(C)},[w]),b=(0,Fn.useCallback)(C=>{w(C)},[w]),m=(0,Fn.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),x=(0,Fn.useCallback)((C,S)=>{let k=t({x:p.x,y:p.y});switch(C){case"import-asset":c?.("import_asset",k);break;case"copy":{if(S.type==="node"){let T=oe.getState().nodes.find(A=>A.id===S.nodeId);T&&!T.selected&&(l(),a(A=>A.map(B=>B.id===S.nodeId?{...B,selected:!0}:B)))}o();break}case"paste":n(k);break;case"duplicate":r();break;case"delete":{if(S.type==="node"){let _=oe.getState();_.nodes.find(A=>A.id===S.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[S.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":s();break;case"execute-selection":{let _=oe.getState().nodes.filter(T=>T.selected).map(T=>T.id);_.length>0&&f?.(_);break}case"execute-node":{S.type==="node"&&f?.([S.nodeId]);break}}m()},[p.x,p.y,t,l,a,o,n,r,i,u,d,s,m,f,c]),v=(0,Fn.useCallback)(C=>{let S=t({x:p.x,y:p.y});c?.(C,S),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:y,handlePaneContextMenu:h,handleSelectionContextMenu:b,closeMenu:m,handleMenuAction:x,handleAddNodeFromMenu:v}}function eO(e,t){if(!t||!Array.isArray(e))return{focused:!1};let a=e.find(o=>o.id===t);return a?{focused:!0,nodeId:a.id,x:a.position.x+100,y:a.position.y+100,zoom:1,duration:800}:{focused:!1}}function Q0(e){let t=eO(e.nodes,e.nodeId);return t.focused?(e.setCenter(t.x,t.y,{zoom:t.zoom,duration:t.duration}),e.setNodes(a=>a.map(o=>({...o,selected:o.id===e.nodeId}))),!0):!1}function Yc(e){let t=e.path;return typeof t=="string"?t:""}function tO(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function Si(e,t={}){if(!e)return null;let a=t.name||tO(e),o=t.mime||Xc(a)||Xc(e)||"",n=bI(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:cn(e)}:null}function ki(e){let t=[];for(let a of e){let o=Si(a);o&&t.push(o)}return t}function J0(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Un(e){return typeof e=="string"?e.trim():""}function KI(e){if(!Array.isArray(e.files)||e.files.length===0)return null;let t=e.files[0];return J0(t)?t:null}function aO(e){if(!J0(e))return"";let t=Un(e.real_path)||Un(e.realPath);if(t)return t;let a=KI(e);return a?Un(a.real_path)||Un(a.realPath)||Un(a.path):""}function oO(e){let t=Un(e.name)||Un(e.originalName)||Un(e.title);if(t)return t;let a=KI(e);return a&&(Un(a.original_name)||Un(a.name))||void 0}function ZI(e){let t=aO(e);if(!t)return{ok:!1,reason:"needPath"};let a=J0(e)?{name:oO(e)}:{},o=Si(t,a);return o?{ok:!0,draft:o}:{ok:!1,reason:"unsupported"}}var cg=["image","video","audio"],nO=80,rO=40,ew=40;function JI(e){return!!e&&typeof e=="object"}function eM(e){return JI(e.data)?e.data:{}}function tM(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function aM(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function iO(e){let t=e.dimensions;if(JI(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function sO(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function lO(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function oM(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function dO(e,t){if(!cg.includes(e))return!1;if(dn(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function nM(e,t,a){let o=oM(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=eM(r),s=tM(i.materialType);if(!s||!dO(s,i))continue;let l=sO(i,r.id),u=iO(i);n.push({nodeId:r.id,materialType:s,title:l,previewUrl:dn(s,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:lO(i,l,r.id,u),width:u.width,height:u.height})}return n}function rM(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function $I(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function QI(e,t){return Fm(e,t)}function fg(e){return ng({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function uO(e,t,a){let o=Bn(a),n=ud(a);return{x:e.position.x-o-nO,y:e.position.y+t*(n+rO)}}function cO(e){return tM(eM(e).materialType)}function iM(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=oM(e.edges,e.targetNodeId),s=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||s.has(w)){t.push({id:w,reason:"already_connected"});continue}let y=e.nodes.find(h=>h.id===w);if(!y){t.push({id:w,reason:"missing"});continue}if(!QI(y,r)){t.push({id:w,reason:"type_contract"});continue}a.push($I(w,e.targetNodeId)),s.add(w)}let l=e.localFiles.filter(w=>!w.realPath||!cg.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=cO(r),d=l[0],f=!!u&&cg.includes(u)&&!!d&&d.materialType===u,c=0,p=f?l.slice(1):l;f&&d&&n.push({nodeId:e.targetNodeId,data:fg(d)});for(let w of p){let y=uO(r,c,w.materialType),h=sg(w.materialType,y,{...fg(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!QI(h,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(h),a.push($I(h.id,e.targetNodeId)),s.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}function sM(e,t){return e.filter(a=>!a.realPath||!cg.includes(a.materialType)?(t.push({id:a.id,reason:"unsupported"}),!1):!0)}function lM(e,t,a=!1){let o=W0(e.materialType,t,{...fg(e),label:e.name.replace(/\.[^.]+$/,"")||e.name});return a?{...o,selected:!0}:o}function tw(e){let t=[],a=sM(e.files,t),o=[],n=e.origin.y;return a.forEach((r,i)=>{let s=ud(r.materialType);o.push(lM(r,{x:e.origin.x,y:n},i===a.length-1)),n+=s+ew}),{hasWork:o.length>0,rejected:t,addNodes:o.length>0?o:void 0}}function Kc(e){let t=[],a=e.nodes.find(l=>l.id===e.targetNodeId);if(!a)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let o=sM(e.files,t),n=o[0];if(!n)return{hasWork:!1,rejected:t};let r=[{nodeId:e.targetNodeId,data:{...fg(n),materialType:n.materialType,nodeKind:"import",selectedTool:"import",nodeWidth:Bn(n.materialType),nodeHeight:ud(n.materialType),label:n.name.replace(/\.[^.]+$/,"")||n.name}}],i=[],s=a.position.y+ud(n.materialType)+ew;return o.slice(1).forEach((l,u,d)=>{let f=ud(l.materialType);i.push(lM(l,{x:a.position.x,y:s},u===d.length-1)),s+=f+ew}),{hasWork:!0,rejected:t,nodePatches:r,addNodes:i.length>0?i:void 0}}var fO=I(J(),1),aw=new Map;function Zc(e){aw.set(e.type,e)}function dM(){let e={};for(let[t,a]of aw)e[t]=a.component;return e}function uM(e,t,a){let o=aw.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var ht=I(J(),1);var ot=I(J(),1);function cM(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var pn=I(X(),1),pO=4,mO=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=le(),[i,s]=(0,ot.useState)(!1),[l,u]=(0,ot.useState)(!1),[d,f]=(0,ot.useState)(null),c=(0,ot.useRef)(null),p=(0,ot.useRef)(null),g=(0,ot.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",y=a==="plus"&&!!o&&o.length>0,h=k0(M=>M.inProgress),{screenToFlowPosition:b}=Sa(),m=(0,ot.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,ot.useEffect)(()=>{if(a!=="plus"){m();return}let M=c.current,R=p.current;if(!M||!R)return;let O=D=>{if(l)return;let H=M.getBoundingClientRect(),z=H.left+H.width/2,j=H.top+H.height/2,{x:F,y:Z}=cM(e,D.clientX-z,D.clientY-j);R.style.setProperty("--wf-handle-offset-x",`${F}px`),R.style.setProperty("--wf-handle-offset-y",`${Z}px`)};return M.addEventListener("pointermove",O),()=>{M.removeEventListener("pointermove",O)}},[l,m,e,a]),(0,ot.useEffect)(()=>{if(!l){m(),f(null);return}let M=()=>{let R=c.current;if(!R)return;let O=R.getBoundingClientRect();f({x:w?O.right:O.left,y:O.bottom})};return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[l,w,m]);let x=(0,ot.useCallback)(()=>{s(!0)},[]),v=(0,ot.useCallback)(()=>{s(!1),m()},[m]),C=(0,ot.useCallback)(M=>{let R=c.current;!R||M===null||typeof R.hasPointerCapture!="function"||typeof R.releasePointerCapture!="function"||!R.hasPointerCapture(M)||R.releasePointerCapture(M)},[]),S=(0,ot.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),k=(0,ot.useCallback)(M=>{M.button===0&&(typeof M.currentTarget.setPointerCapture=="function"&&M.currentTarget.setPointerCapture(M.pointerId),g.current.pointerId=M.pointerId,g.current.startX=M.clientX,g.current.startY=M.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),_=(0,ot.useCallback)(M=>{if(g.current.pointerId!==M.pointerId)return;Math.hypot(M.clientX-g.current.startX,M.clientY-g.current.startY)>=pO&&(g.current.dragIntent=!0,g.current.suppressClick=!0,l&&u(!1))},[l]),T=(0,ot.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),S())},[S]),A=(0,ot.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.suppressClick=!1,S())},[S]),B=(0,ot.useCallback)(M=>{if(M.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}y&&u(R=>!R)},[y]),U=(0,ot.useCallback)(()=>{let M=d;if(!M){let R=c.current;if(!R)return;let O=R.getBoundingClientRect();M={x:w?O.right:O.left,y:O.bottom}}return{screenPosition:M,flowPosition:b(M)}},[w,d,b]),L=(0,ot.useCallback)(M=>{n?.(M,U()),u(!1)},[n,U]),N=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",l?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,pn.jsxs)(Ql,{id:w?"in":"out",type:w?"target":"source",position:w?ie.Left:ie.Right,isConnectable:!0,className:N,style:E,children:[(0,pn.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,pn.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,pn.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,pn.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:x,onPointerLeave:v,onPointerDown:k,onPointerMove:_,onPointerUp:T,onPointerCancel:A,onClick:B,children:(0,pn.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,pn.jsx)("div",{className:"wf-handle__plus-button",children:(0,pn.jsx)(ft,{size:24,strokeWidth:2.5})})})}):null,y&&d?(0,pn.jsx)(rg,{visible:l,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},kr=(0,ot.memo)(mO);var mn=I(J(),1);var fd=I(X(),1),fM=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,fd.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,fd.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,fd.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,fd.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var ya=I(X(),1);function gO(e){let t=le();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var hO=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:s=400})=>{let l=le(),u=(0,mn.useRef)(e),[d,f]=(0,mn.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,mn.useState)(1),[g,w]=(0,mn.useState)(e==="completed"?1:0),[y,h]=(0,mn.useState)(e==="pending"||e==="generating");(0,mn.useEffect)(()=>{let B=u.current;if(u.current=e,(B==="pending"||B==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),w(1)});let U=setTimeout(()=>{f("complete"),h(!1)},s+50);return()=>clearTimeout(U)}B==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),w(0),f("idle")),e==="failed"&&(h(!1),f("idle")),B===e&&e==="completed"&&(f("complete"),w(1),h(!1))},[e,s]);let b=e==="pending"||e==="generating",m=e==="failed",x=e==="completed",v=l(e==="pending"?"node.preparing":"node.generating"),C=gO(a),S=(0,mn.useCallback)(()=>({transition:`opacity ${s}ms ease-out`}),[s]),k=`wf-gsc__box--${t}`,_=()=>(0,ya.jsx)("div",{className:"wf-gsc__skeleton",style:{...S(),opacity:c},children:(0,ya.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${k}`,children:(0,ya.jsx)(fM,{borderRadius:"inherit",children:(0,ya.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,ya.jsx)("span",{className:"wf-gsc__progress-text",children:v})})})})}),T=()=>(0,ya.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${k} ${i}`,children:[(0,ya.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,ya.jsx)(ba,{size:24})}),(0,ya.jsx)("span",{className:"wf-gsc__failed-label",children:l("node.generationFailed")}),C?(0,ya.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,ya.jsxs)("span",{className:"wf-gsc__failed-task",children:[l("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,ya.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,ya.jsx)(yr,{size:14}),l("node.regenerate")]}):null]}),A=B=>(0,ya.jsx)("div",{className:`${i} ${B?"wf-gsc__content--blur":""}`,style:{...S(),opacity:g},children:r});return(0,ya.jsxs)("div",{className:`wf-gsc ${b?k:""} ${i}`,children:[(b||y)&&_(),m&&T(),(x||d==="crossfading")&&A(d==="crossfading")]})},$c=hO;var Ut=I(J(),1);var Li=I(X(),1),pM=24,mM=30,gM={text:ka,image:xr,video:rn,audio:La,table:Lo,video_composition:oa,import_asset:to},bO=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=le(),i=t?r(`node.type.${t}`):"\u8282\u70B9",s=e||i,{zoom:l}=eo(),[u,d]=(0,Ut.useState)(!1),[f,c]=(0,Ut.useState)(s),p=(0,Ut.useRef)(null),g=(0,Ut.useMemo)(()=>no(l),[l]);(0,Ut.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,Ut.useEffect)(()=>{u||c(s)},[s,u]);let w=(0,Ut.useCallback)(C=>{C.stopPropagation(),d(!0),c(s)},[s]),y=(0,Ut.useCallback)(()=>{let S=f.trim()||i;d(!1),S!==e&&o&&o(S)},[f,i,e,o]),h=(0,Ut.useCallback)(()=>{d(!1),c(s)},[s]),b=(0,Ut.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),y()):C.key==="Escape"&&(C.preventDefault(),h())},[y,h]),m=(0,Ut.useCallback)(C=>{let S=C.target.value;S.length<=mM&&c(S)},[]),x=()=>{if(a)return Ut.default.isValidElement(a)?a:(0,Li.jsx)(a,{size:14});let C=(t in gM?gM[t]:null)||ka;return(0,Li.jsx)(C,{size:14})};return(0,Li.jsxs)("div",{className:"wf-node-header",style:{top:-(pM+4*g),height:pM,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Li.jsx)("span",{className:"wf-node-header__icon",children:x()}),u?(0,Li.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:y,onKeyDown:b,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:mM}):(0,Li.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:s.length>20?s:r("node.renameHint"),children:s}),n]})},pd=(0,Ut.memo)(bO);var pg=I(J(),1);var qn=I(X(),1),xO=({executionStatus:e,status:t})=>{let a=le();return(0,pg.useMemo)(()=>{switch(e){case"running":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,qn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},mg=(0,pg.memo)(xO);var As=I(J(),1);var Qc=I(X(),1);var wO=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let s=(0,As.useMemo)(()=>dn(e,t,a),[e,t,a]),l=(0,As.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,As.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!s)return null;switch(e){case"image":return(0,Qc.jsx)("img",{src:s,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,Qc.jsx)("video",{src:s,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,Qc.jsx)("div",{className:"wf-media-preview__audio",children:(0,Qc.jsx)("audio",{src:s,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},hM=(0,As.memo)(wO);var bM=I(J(),1);var Ue=I(X(),1),yO=({materialType:e,nodeKind:t="generate",onApplyPreset:a,onStartEdit:o})=>{let n=le();return t==="import"?(0,Ue.jsxs)("div",{className:"wf-node-empty wf-node-empty--import-kind",children:[(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(to,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})}),(0,Ue.jsx)("div",{className:"wf-node-empty__try-label",children:n("panel.dropToImport")})]}):e==="text"?(0,Ue.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(ka,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ue.jsx)("div",{className:"wf-node-empty__try-label",children:n("pills.tryLabel")}),(0,Ue.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:r=>r.stopPropagation(),children:[(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:o,children:[(0,Ue.jsx)(An,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.writePrompt")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("script"),children:[(0,Ue.jsx)(lc,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.scriptGen")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("planning"),children:[(0,Ue.jsx)(En,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.planningGen")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("prompt"),children:[(0,Ue.jsx)(Mt,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.promptExpand")})]})]})]}):e==="image"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(za,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(Ba,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(La,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},gg=(0,bM.memo)(yO);var _i=I(J(),1);var sa=I(X(),1),vO=({materialType:e,nodeKind:t="generate",selected:a,onOpenResourcePicker:o,onStartTextEdit:n,onCopyText:r,onSplitText:i})=>{let s=le(),{zoom:l}=eo(),[u,d]=_i.default.useState(!1),f=(0,_i.useMemo)(()=>no(l),[l]),c=(0,_i.useCallback)(()=>{r&&(r(),d(!0),setTimeout(()=>d(!1),1500))},[r]),p=30;return t==="generate"&&e!=="text"?null:(0,sa.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(p*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,sa.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,sa.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:n,title:s("pill.textEdit"),children:[(0,sa.jsx)(En,{size:13,className:"wf-floating-top-pill__icon"}),(0,sa.jsx)("span",{children:s("pill.textEdit")})]}),(0,sa.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,sa.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:c,title:s("pill.copy"),children:u?(0,sa.jsx)(Ht,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,sa.jsx)(hi,{size:13,className:"wf-floating-top-pill__icon"})}),(0,sa.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,sa.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:i,title:s("pill.structureSplit"),children:(0,sa.jsx)(ha,{size:13,className:"wf-floating-top-pill__icon"})})]}):t==="import"?(0,sa.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,sa.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,children:[(0,sa.jsx)(Ss,{size:13,className:"wf-floating-top-pill__icon"}),(0,sa.jsx)("span",{children:s("pill.import")})]})}):null})},xM=(0,_i.memo)(vO);var md=I(J(),1);var wM=I(J(),1),yM=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function CO(e,t,a=yM){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function vM({refs:e,excludeSelectors:t=yM,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,wM.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;CO(f,r.map(c=>c.current),t)&&a()},s=d=>{d.key==="Escape"&&a()},l=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",s)},u=null;return n?u=requestAnimationFrame(l):l(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",s)}},[e,t,a,o,n])}var ow=I(X(),1),SO=480,kO=({children:e,onClose:t,width:a=SO})=>{let{zoom:o}=eo(),n=(0,md.useRef)(null),r=(0,md.useMemo)(()=>no(o),[o]);return vM({refs:n,onClose:t}),(0,ow.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,ow.jsx)("div",{className:"wf-panel-shell__card",children:e})})},CM=(0,md.memo)(kO);var No=I(J(),1);var SM=I(J(),1),gd=I(X(),1),nw={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},LO=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function _O(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(nw[t])return t;for(let a of LO)if(a.regex.test(t))return a.brand;return null}var kM=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,SM.useMemo)(()=>t&&nw[t.toLowerCase()]?t.toLowerCase():_O(e),[t,e]),s=i?nw[i]:null;if(!s){if(r)return(0,gd.jsx)(gd.Fragment,{children:r});let l=(e||t||"M").charAt(0).toUpperCase();return(0,gd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:l})}return(0,gd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:s.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var LM=I(J(),1);function _M(e){let t=v_(),a=C_();return(0,LM.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},s=dn(i.materialType,i.mediaAssets,i.mediaUrl),l=i.content||i.generatedContent||"",u=!!(s||i.materialType==="text"&&l.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:s,hasMedia:u,textContent:l}]}),[t,a,e])}var IM=I(J(),1),MM="wf_capabilities_catalog_v1",IO={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function Jc(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(MM);return e?JSON.parse(e):null}catch{return null}}function NM(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(MM,JSON.stringify(e))}catch{}}function EM(e,t,a){return(0,IM.useMemo)(()=>{let o=a??Jc(),n=o&&o[e]?o[e]:[],r=n.find(k=>k.id===t)??n[0],i=IO[e]??{},s=r?.parameters??i,l=s.aspectRatio?.options&&s.aspectRatio.options.length>0?s.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=s.aspectRatio?.defaultValue??l[0]?.value??"16:9",d=k=>k?l.some(_=>_.value===k):!1,f=s.duration?.options&&s.duration.options.length>0?s.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=s.duration?.defaultValue??f[0]?.value??5,p=k=>typeof k!="number"?!1:f.some(_=>_.value===k),g=s.resolution?.options??[],w=s.resolution?.defaultValue??g[0]?.value??"",y=s.quality?.options??[],h=s.quality?.defaultValue??y[0]?.value??"",b=!!s.sound?.supported,m=!!s.sound?.defaultValue,x=s.voice?.options??[],v=s.voice?.defaultValue??x[0]?.value??"",C=!!s.instrumental?.supported,S=!!s.instrumental?.defaultValue;return{schema:s,modelItem:r,aspectRatioOptions:l,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:w,qualityOptions:y,defaultQuality:h,hasSoundSupport:b,defaultSound:m,voiceOptions:x,defaultVoice:v,hasInstrumentalSupport:C,defaultInstrumental:S}},[e,t,a])}var TM=I(J(),1);var Lr=I(X(),1),MO=({onClick:e,disabled:t,isGenerating:a})=>{let o=le();return(0,Lr.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,Lr.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,Lr.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,Lr.jsx)(wi,{size:14,className:"wf-generate-btn__spin"}):(0,Lr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,Lr.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,Lr.jsx)("path",{d:"M12 19V5"})]})})]})},AM=(0,TM.memo)(MO);var te=I(X(),1);function NO(e){let t=(0,te.jsx)(kM,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var EO=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let s=le(),{materialType:l,selectedTool:u,params:d,prompt:f}=t,c=Ls(t),[p,g]=(0,No.useState)(!1),[w,y]=(0,No.useState)(!1),h=_M(e);if(c==="import")return(0,te.jsx)("div",{className:"wf-config-panel wf-config-panel--import",children:(0,te.jsxs)("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[(0,te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,te.jsx)("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--wb-text-secondary)"},children:s("panel.hintImportNode")}),!!t.realPath&&(0,te.jsx)("span",{style:{fontSize:"11px",color:"var(--wb-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"240px"},title:String(t.realPath),children:String(t.realPath).split("/").pop()})]}),i&&(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",style:{padding:"4px 10px",height:"28px"},onClick:i,children:(0,te.jsx)("span",{children:s("node.replace")})})]})});let b=u==="text-to-music"?"music":"speech",m=(0,No.useCallback)(z=>{o({selectedTool:z==="music"?"text-to-music":"text-to-audio"})},[o]),x=(0,No.useMemo)(()=>{let z=a?.[l]??[];return z.length===0&&(l==="text"?z=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:l==="image"?z=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:l==="video"?z=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:l==="audio"&&(z=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),z.map(j=>{let F=NO(j.id),Z=F.icon,$=j.badge??F.badge,ee=j.subtitle??F.subtitle;return{value:j.id,label:j.label,triggerLabel:(0,te.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[Z?(0,te.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:Z}):null,(0,te.jsx)("span",{children:j.label})]}),icon:Z,badge:$,subtitle:ee}})},[a,l]),v=typeof d.model=="string"?d.model:x[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:S,isAspectRatioValid:k,durationOptions:_,defaultDuration:T,isDurationValid:A,resolutionOptions:B,defaultResolution:U}=EM(l,v,a),L=(0,No.useCallback)((z,j)=>{o({params:{...d,[z]:j}})},[o,d]),N=(0,No.useCallback)(z=>{let $=((a??Jc())?.[l]??[]).find(q=>q.id===z)?.parameters,ee={...d,model:z};d.aspectRatio&&$?.aspectRatio?.options&&($.aspectRatio.options.some(Q=>Q.value===d.aspectRatio)||(ee.aspectRatio=$.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&$?.duration?.options&&($.duration.options.some(Q=>Q.value===d.duration)||(ee.duration=$.duration.defaultValue||$.duration.options[0]?.value||5)),d.resolution&&$?.resolution?.options?$.resolution.options.some(Q=>Q.value===d.resolution)||(ee.resolution=$.resolution.defaultValue||$.resolution.options[0]?.value):d.resolution&&$&&!$.resolution?.options&&delete ee.resolution,o({params:ee})},[a,l,o,d]),E=(0,No.useMemo)(()=>{switch(l){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[l]),M=(0,No.useMemo)(()=>{switch(l){case"text":return s("panel.textPromptPlaceholder");case"image":return s("panel.imagePromptPlaceholder");case"video":return s("panel.videoPromptPlaceholder");case"audio":return s(b==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return s("panel.promptPlaceholder")}},[l,b,s]),R=typeof d.aspectRatio=="string"&&k(d.aspectRatio)?d.aspectRatio:S,O=typeof d.duration=="number"&&A(d.duration)?d.duration:T,D=z=>!!z&&B.some(j=>j.value===z),H=typeof d.resolution=="string"&&D(d.resolution)?d.resolution:U;return(0,te.jsxs)("div",{className:"wf-config-panel",children:[l==="audio"&&(0,te.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,te.jsx)(bs,{size:13}),(0,te.jsx)("span",{children:s("panel.audioGen")})]}),(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${b==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,te.jsx)(La,{size:13}),(0,te.jsx)("span",{children:s("panel.musicGen")})]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,te.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[h.length>0||i?(0,te.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[h.map(z=>(0,te.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${z.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${z.label} (${z.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[z.url&&z.materialType==="image"?(0,te.jsx)("img",{src:z.url,alt:z.label,className:"wf-config-panel__ref-thumb-media"}):z.url&&z.materialType==="video"?(0,te.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,te.jsx)("video",{src:z.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,te.jsx)(Ba,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):z.materialType==="audio"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,te.jsx)(La,{size:13})}):z.materialType==="text"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,te.jsx)(ka,{size:13})}):(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,te.jsx)(za,{size:13})}),z.hasMedia&&(0,te.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},z.nodeId)),i?(0,te.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:s("picker.addRef"),children:(0,te.jsx)(ft,{size:14})}):null]}):(0,te.jsx)("span",{}),(0,te.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>g(!0),title:s("header.fitView"),children:(0,te.jsx)(Tn,{size:13})})]}),(0,te.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:M,rows:3,onChange:z=>o({prompt:z.target.value})}),(0,te.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",E]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,te.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,te.jsx)(oo,{className:"wf-param-bar__select wf-param-bar__select--model",value:v,options:x,popupMatchSelectWidth:!1,onChange:z=>N(z)}),l==="image"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,te.jsx)(oo,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:R,options:C,popupMatchSelectWidth:!1,onChange:z=>L("aspectRatio",z)})})]}),l==="video"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,te.jsx)(oo,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:R,options:C,popupMatchSelectWidth:!1,onChange:z=>L("aspectRatio",z)}),(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(oo,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:O,options:_,popupMatchSelectWidth:!1,onChange:z=>L("duration",z)}),B.length>0&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(oo,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:H,options:B,popupMatchSelectWidth:!1,onChange:z=>L("resolution",z)})]})]})]}),l==="audio"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!w),title:s("panel.advanced"),children:(0,te.jsx)(vs,{size:13})})]})]}),(0,te.jsx)("div",{className:"wf-config-panel__action-group",children:(0,te.jsx)(AM,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),w&&(0,te.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,te.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,te.jsx)("span",{className:"wf-config-panel__advanced-label",children:s("panel.duration")}),(0,te.jsx)(M0,{style:{flex:1},min:1,max:l==="video"?20:60,value:O,onChange:z=>L("duration",z)})]})}),(0,te.jsx)(ln,{title:s("panel.promptPlaceholder"),open:p,onCancel:()=>g(!1),width:680,children:(0,te.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:M,rows:10,onChange:z=>o({prompt:z.target.value})})})]})},DM=(0,No.memo)(EO);var ro=I(J(),1);var Ds=I(J(),1);var ke=I(X(),1);function hg(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var TO=({items:e,selectedIds:t,onToggle:a})=>{let o=le(),[n,r]=(0,Ds.useState)(""),[i,s]=(0,Ds.useState)("all"),[l,u]=(0,Ds.useState)("grid"),d=(0,Ds.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,Ds.useMemo)(()=>rM(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,ke.jsxs)("div",{className:"wf-picker-pane",children:[(0,ke.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,ke.jsxs)("label",{className:"wf-picker-search",children:[(0,ke.jsx)(nn,{size:14,className:"wf-picker-search__icon"}),(0,ke.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,ke.jsx)(oo,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>s(p)}),(0,ke.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,ke.jsx)("button",{type:"button",className:`wf-picker-view-btn ${l==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":l==="grid",children:(0,ke.jsx)(Oa,{size:14})}),(0,ke.jsx)("button",{type:"button",className:`wf-picker-view-btn ${l==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":l==="list",children:(0,ke.jsx)(wr,{size:14})})]})]}),f.length===0?(0,ke.jsx)("div",{className:"wf-picker-empty",children:o(c)}):l==="grid"?(0,ke.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,ke.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,ke.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,ke.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,ke.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,ke.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(hg(p.materialType))}),p.alreadyConnected?(0,ke.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,ke.jsx)(Ht,{size:11}),o("picker.added")]}):(0,ke.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,ke.jsx)(Ht,{size:11}):null})]}),(0,ke.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,ke.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,ke.jsx)("span",{className:"wf-picker-type-tag",children:o(hg(p.materialType))})]})]},p.nodeId)})}):(0,ke.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,ke.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,ke.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,ke.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,ke.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,ke.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(hg(p.materialType))})}),(0,ke.jsxs)("div",{className:"wf-picker-row__body",children:[(0,ke.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,ke.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(hg(p.materialType))]})]}),p.alreadyConnected?(0,ke.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,ke.jsx)(Ht,{size:11}),o("picker.added")]}):(0,ke.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,ke.jsx)(Ht,{size:11}):null})]},p.nodeId)})})]})},RM=TO;var Rs=I(J(),1);var qt=I(X(),1),AO=({files:e,onAddFiles:t,onRemove:a})=>{let o=le(),[n,r]=(0,Rs.useState)(!1),i=(0,Rs.useCallback)(d=>{let f=ki(d);f.length>0&&t(f),f.length<d.length&&Y.warning(o("picker.unsupported")),d.length>0&&f.length===0&&Y.warning(o("picker.unsupported"))},[t,o]),s=(0,Rs.useCallback)(async()=>{let d=await On();if(!d.ok){d.body.error==="picker-unsupported"?Y.warning(o("picker.needPath")):Y.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),l=(0,Rs.useCallback)(d=>{let f=Array.from(d),c=[],p=0,g=0;for(let w of f){let y=Yc(w);if(!y){p+=1;continue}let h=Si(y,{name:w.name,mime:w.type,size:w.size});h?c.push(h):g+=1}c.length>0&&t(c),p>0&&Y.warning(o("picker.needPath")),g>0&&Y.warning(o("picker.unsupported"))},[t,o]),u=(0,Rs.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&l(d.dataTransfer.files)},[l]);return(0,qt.jsxs)("div",{className:"wf-picker-pane",children:[(0,qt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{s()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,qt.jsx)(Ss,{size:22,className:"wf-picker-dropzone__icon"}),(0,qt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,qt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,qt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,qt.jsx)(pc,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,qt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||cn(d.realPath);return(0,qt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,qt.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,qt.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,qt.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,qt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,qt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,qt.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,qt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${aM(d.size)}`:""]})]}),(0,qt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,qt.jsx)(_o,{size:14})})]},d.id)})}):null]})},PM=AO;var gn=I(X(),1),DO=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=le(),i=oe(S=>S.nodes),s=oe(S=>S.edges),[l,u]=(0,ro.useState)(a),[d,f]=(0,ro.useState)([]),[c,p]=(0,ro.useState)([]),g=(0,ro.useMemo)(()=>nM(i,s,t),[i,s,t]);(0,ro.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,ro.useCallback)(()=>{p([]),o()},[o]),y=(0,ro.useCallback)((S,k)=>{k||f(_=>_.includes(S)?_.filter(T=>T!==S):[..._,S])},[]),h=(0,ro.useCallback)(S=>{p(k=>[...k,...S])},[]),b=(0,ro.useCallback)(S=>{p(k=>k.filter(_=>_.id!==S))},[]),x=d.filter(S=>{let k=g.find(_=>_.nodeId===S);return k&&!k.alreadyConnected}).length+c.length,v=(0,ro.useCallback)(()=>{if(x===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,x,d]),C=(0,gn.jsxs)("div",{className:"wf-picker-footer",children:[(0,gn.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,gn.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:x===0,onClick:v,children:[r("picker.use")," ",x," ",r("picker.items")]})]});return(0,gn.jsxs)(ln,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,gn.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,gn.jsxs)("button",{type:"button",role:"tab","aria-selected":l==="canvas",className:`wf-picker-tab ${l==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,gn.jsx)("button",{type:"button",role:"tab","aria-selected":l==="local",className:`wf-picker-tab ${l==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),l==="canvas"?(0,gn.jsx)(RM,{items:g,selectedIds:d,onToggle:y}):(0,gn.jsx)(PM,{files:c,onAddFiles:h,onRemove:b})]})},bg=DO;var Vn=I(J(),1);function zM(e){let t=le(),[a,o]=(0,Vn.useState)(!1),[n,r]=(0,Vn.useState)("canvas"),i=(0,Vn.useCallback)((c="canvas")=>{r(c),o(!0)},[]),s=(0,Vn.useCallback)(()=>{o(!1)},[]),l=(0,Vn.useCallback)(c=>{let p=oe.getState(),g=iM({nodes:p.nodes,edges:p.edges,targetNodeId:e,selectedCanvasNodeIds:c.selectedCanvasNodeIds,localFiles:c.localFiles});return g.hasWork?p.applyCanvasInputMutation({addNodes:g.addNodes,addEdges:g.addEdges,nodePatches:g.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(g.rejected.length>0?Y.warning(t("picker.commitPartial")):Y.success(t("picker.commitOk")),o(!1),!0):(Y.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,Vn.useCallback)(async()=>{let c=await On();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=ki(p);if(g.length===0)return Y.warning(t("picker.unsupported")),!1;let w=oe.getState(),y=Kc({nodes:w.nodes,targetNodeId:e,files:g});return y.hasWork?w.applyCanvasInputMutation({addNodes:y.addNodes,nodePatches:y.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("picker.importOk")),!0):(Y.warning(t("picker.unsupported")),!1)},[e,t]),d=(0,Vn.useCallback)(async()=>{let c=await On();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=ki(p);return g.length===0?(Y.warning(t("picker.unsupported")),!1):l({selectedCanvasNodeIds:[],localFiles:g})},[l,t]),f=(0,Vn.useCallback)(async c=>{let p=await On();if(!p.ok)return Y.error(t("picker.pickFailed")),!1;let g=p.body.path;if(!g)return!1;let y=ki([g])[0];if(!y||y.materialType!==c)return Y.warning(t("picker.unsupported")),!1;let h=ng({realPath:y.realPath,name:y.name,materialType:y.materialType,mime:y.mime,size:y.size});return oe.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:h}]}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:s,importLocalFiles:d,fillImportNode:u,relinkLocalFile:f,commit:l}}var ze=I(X(),1),RO=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:s,mediaUrl:l,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[w,y]=(0,ht.useState)(!1),[h,b]=(0,ht.useState)(!1),[m,x]=(0,ht.useState)(!1),[v,C]=(0,ht.useState)(!1),[S,k]=(0,ht.useState)(null),{setNodes:_}=Sa(),T=at(ae=>ae.status==="pending"||ae.status==="running"),A=rd(),B=o.nodeWidth??Bn(n),U=X0(n),L=UI(B,U),N=S??o.nodeHeight??L,E=(0,ht.useCallback)(ae=>{_(_e=>_e.map(it=>it.id===e?{...it,data:{...it.data,...ae}}:it))},[e,_]),M=(0,ht.useCallback)((ae,_e)=>{if(ae>0&&_e>0){let it=ae/_e,Ct=Math.max(80,Math.min(800,Math.round(B/it)));k(Ct),o.nodeHeight!==Ct&&E({nodeHeight:Ct})}},[o.nodeHeight,B,E]),R=(0,ht.useCallback)(()=>{if(Ls(o)==="generate"){let _e=o.selectedTool;(!_e||_e==="text-editor")&&E({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]})}at.getState().startNodeExecution?.(e)},[e,n,o,E]),O=le(),D=oe(ae=>ae.applyCanvasInputMutation),H=zM(e),z=Ls(o),j=(0,ht.useMemo)(()=>dg(n).map(ae=>({key:ae.key,label:O(ae.labelKey),description:O(ae.descKey),icon:ae.icon})),[n,O]),F=(0,ht.useCallback)((ae,_e)=>{let it=lg(ae),Ct=_e?.flowPosition;if(!it||!Ct)return;let He=cd(it.targetMaterialType,Ct),$t=He.nodes[0];$t&&D({addNodes:He.nodes,addEdges:[{source:e,sourceHandle:"out",target:$t.id,targetHandle:"in"}]})},[D,e]),Z=u||s||"",$=(0,ht.useCallback)(ae=>{if(n==="text"){let _e="";ae==="script"?_e=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:ae==="planning"?_e=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:ae==="prompt"?_e=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:ae==="storyboard"&&(_e=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),E({prompt:_e,selectedTool:"text-to-text"})}},[n,E]),ee=(0,ht.useCallback)(ae=>{let _e=Yc(ae);if(!_e){Y.warning(O("picker.needPath"));return}let it=Si(_e,{name:ae.name,mime:ae.type,size:ae.size});if(!it){Y.warning(O("picker.unsupported"));return}let Ct=oe.getState(),He=Kc({nodes:Ct.nodes,targetNodeId:e,files:[it]});if(!He.hasWork){Y.warning(O("picker.unsupported"));return}D({addNodes:He.addNodes,nodePatches:He.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[D,e,O]),q=(0,ht.useCallback)(ae=>{z==="import"&&(ae.preventDefault(),ae.stopPropagation(),b(!0))},[z]),Q=(0,ht.useCallback)(ae=>{z==="import"&&(ae.preventDefault(),ae.stopPropagation(),b(!1))},[z]),ne=(0,ht.useCallback)(ae=>{if(z!=="import")return;ae.preventDefault(),ae.stopPropagation(),b(!1);let _e=Array.from(ae.dataTransfer.files??[]);if(_e.length===1&&_e[0]){ee(_e[0]);return}let it=_e.map(Et=>{let Ga=Yc(Et);return Ga?Si(Ga,{name:Et.name,mime:Et.type,size:Et.size}):null}).filter(Et=>!!Et);if(it.length===0){_e.length>0&&Y.warning(O("picker.needPath"));return}let Ct=oe.getState(),He=Kc({nodes:Ct.nodes,targetNodeId:e,files:it});if(!He.hasWork){Y.warning(O("picker.unsupported"));return}D({addNodes:He.addNodes,nodePatches:He.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[D,ee,e,z,O]),de=(0,ht.useCallback)(()=>{Z&&navigator.clipboard.writeText(Z).catch(()=>{})},[Z]),re=(0,ht.useCallback)(()=>{if(!Z)return;let ae=Z.split(`

`).filter(_e=>_e.trim().length>0);ae.length>1&&E({content:ae.join(`
---
`)})},[Z,E]);(0,ht.useEffect)(()=>{a||(x(!1),C(!1))},[a]);let ce=r5(a,m,f,z,A),xe=r==="offline"||o.isMissing===!0,Le=dn(n,p,l),Oe=xe?null:i5(f,r,!!Le),yt=n==="video"?"video":n==="audio"?"audio":"square";return(0,ze.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:B},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[!A&&(w||a)&&(n==="text"||z==="import"&&!Le&&!xe)&&(0,ze.jsx)(xM,{materialType:n,nodeKind:z,selected:a,onOpenResourcePicker:()=>{H.fillImportNode()},onStartTextEdit:()=>C(!0),onCopyText:de,onSplitText:re}),(0,ze.jsx)(kr,{side:"left",nodeHovered:w}),(0,ze.jsx)(pd,{label:i,materialType:z==="import"?"import_asset":n,onLabelChange:ae=>E({label:ae}),trailing:(0,ze.jsx)(mg,{executionStatus:f,status:r})}),(0,ze.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:B,height:N,position:"relative"},onDragOver:q,onDragLeave:Q,onDrop:ne,children:[z==="import"&&!!Le&&!xe&&(0,ze.jsx)("button",{type:"button",className:"wf-material-node__replace-btn nodrag nopan",onClick:ae=>{ae.stopPropagation(),H.fillImportNode()},title:O("node.replace"),children:O("node.replace")}),a&&(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ze.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:Z||v?(0,ze.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${v?" nodrag":""}`,readOnly:!v,value:Z,placeholder:O("node.textPlaceholder"),autoFocus:v,onMouseDown:ae=>{v||ae.preventDefault()},onDoubleClick:ae=>{ae.stopPropagation(),C(!0),ae.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:ae=>E({content:ae.target.value,status:ae.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ze.jsx)(gg,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:$})}),n!=="text"&&xe&&(0,ze.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,ze.jsx)(Cs,{size:22,className:"wf-media-offline__icon"}),(0,ze.jsx)("div",{className:"wf-media-offline__title",children:O("node.offline")}),(0,ze.jsx)("div",{className:"wf-media-offline__hint",children:O("node.offlineHint")}),(0,ze.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{H.relinkLocalFile(n)},children:O("node.relink")})]}),n!=="text"&&!xe&&(Oe?(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)($c,{status:Oe,loadingAspectRatio:yt,errorMessage:c??d,taskId:o.taskId,onRetry:R,children:Le?(0,ze.jsx)(hM,{materialType:n,mediaAssets:p,mediaUrl:l,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:M}):(0,ze.jsx)(gg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:$})})}):(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(gg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:$})})),n==="text"&&(d||c)&&(0,ze.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ce&&(0,ze.jsx)(CM,{onClose:()=>x(!0),children:(0,ze.jsx)(DM,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:E,onGenerate:R,execBusy:T,onOpenResourcePicker:z==="import"?()=>{H.fillImportNode()}:()=>H.openPicker("canvas")})}),(0,ze.jsx)(kr,{side:"right",nodeHovered:w,options:j,onSelect:F}),(0,ze.jsx)(bg,{open:H.open,nodeId:e,initialTab:H.initialTab,onCancel:H.closePicker,onCommit:H.commit})]})},OM=(0,ht.memo)(RO);var BM={type:"material",component:OM,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Bc("text",{status:"empty",nodeWidth:Bn("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var hd=I(J(),1);var rw=50;function Ps(e){return JSON.parse(JSON.stringify(e))}var PO={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Ia=od((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Ps(o)].slice(-rw),redoStack:[]}};return{document:PO,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Ps(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let s=o.slice(0,-1);e({document:Ps(i),undoStack:s,redoStack:[...r,Ps(n)].slice(-rw)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let s=o.slice(0,-1);e({document:Ps(i),redoStack:s,undoStack:[...r,Ps(n)].slice(-rw)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),s=i.rows[o];if(!s)return;let l=a(i),u=[...i.rows],d={...s,cells:[...s.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...l})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(s=>s.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((s,l)=>l!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),s=a(i),l={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,l],rows:u},...s})},updateColumn:(o,n,r)=>{let{document:i}=t(),s=i.columns[o];if(!s)return;let l=a(i),u=[...i.columns];u[o]={...s,title:n,type:r},e({document:{...i,columns:u},...l})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((l,u)=>u!==o),s=n.rows.map(l=>({...l,cells:l.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:s},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),s=[...n.columns];s[o]={...r,visible:!r.visible},e({document:{...n,columns:s},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let s=a(r),l=[...r.columns],[u]=l.splice(o,1);u&&l.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:l,rows:d},...s})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Ps(o),undoStack:[],redoStack:[]})}});var he=I(X(),1),HM=380,zO=280,FM=(0,hd.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Ia(),[i,s]=(0,hd.useState)(!1),{zoom:l}=eo(),u=(0,hd.useMemo)(()=>no(l),[l]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C",g=!rd()&&(i||a);return(0,he.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:HM},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[g&&(0,he.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,he.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,he.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:w=>{w.stopPropagation(),r()},children:[(0,he.jsx)(ft,{size:14}),(0,he.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,he.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:w=>{w.stopPropagation(),n()},children:[(0,he.jsx)(Tn,{size:13}),(0,he.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,he.jsx)(kr,{side:"left",nodeHovered:i}),(0,he.jsx)(pd,{label:c,materialType:"table"}),(0,he.jsxs)("div",{className:"wf-material-node__card",style:{width:HM,height:zO},onDoubleClick:()=>n(),children:[a&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,he.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,he.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,he.jsx)(Lo,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,he.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,he.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:w=>w.stopPropagation(),children:[(0,he.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,he.jsx)(ft,{size:14,className:"wf-node-empty__pill-icon"}),(0,he.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,he.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,he.jsx)(Tn,{size:13,className:"wf-node-empty__pill-icon"}),(0,he.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,he.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,he.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,he.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,he.jsx)(fc,{size:14}),(0,he.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,he.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,he.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((w,y)=>{let h=w.cells[0],b=typeof h=="string"&&h?h:typeof h=="number"?String(h):Array.isArray(h)&&h.length>0?`\u{1F4CE} \u9644\u4EF6 (${h.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,he.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,he.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:b}),(0,he.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,he.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,he.jsx)(kr,{side:"right",nodeHovered:i})]})});var UM={type:"table",component:FM,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var Ii=I(J(),1);var io=I(J(),1);var Eo=I(X(),1),OO=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:s,nodeHeight:l,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:w,onLeftHandleSelect:y,onFileDrop:h,onFilesDrop:b,onDragOver:m,onDragLeave:x,onDrop:v,onMouseEnter:C,onMouseLeave:S,onCardClick:k,onCardDoubleClick:_,renderFloatingPill:T,renderHeader:A,children:B,renderConfigPanel:U})=>{let[L,N]=(0,io.useState)(!1),[E,M]=(0,io.useState)(!1),R=rd(),{zoom:O}=eo(),D=(0,io.useMemo)(()=>no(O),[O]),H=(0,io.useMemo)(()=>({inverseScale:D,hovered:L,selected:t&&!R,isMultiSelected:R}),[D,L,t,R]),z=(0,io.useCallback)(ne=>{N(!0),C?.(ne)},[C]),j=(0,io.useCallback)(ne=>{N(!1),S?.(ne)},[S]),F=(0,io.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!0),m?.(ne)},[m]),Z=(0,io.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1),x?.(ne)},[x]),$=(0,io.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1);let de=ne.dataTransfer.files;de&&de.length>0&&(b?.(de),de[0]&&h?.(de[0])),v?.(ne)},[v,h,b]),ee=R?null:typeof T=="function"?T(H):T,q=typeof A=="function"?A(H):A,Q=R?null:typeof U=="function"?U(H):U;return(0,Eo.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:s,...n},onMouseEnter:z,onMouseLeave:j,"data-node-id":e,children:[ee,u&&(0,Eo.jsx)(kr,{side:"left",nodeHovered:L,variant:f,options:w,onSelect:y}),q,(0,Eo.jsxs)("div",{className:`wf-material-node__card ${E?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:s,height:l,...r},"data-node-type":i,onClick:k,onDoubleClick:_,onDragOver:F,onDragLeave:Z,onDrop:$,children:[t&&(0,Eo.jsxs)(Eo.Fragment,{children:[(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Eo.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),B]}),Q,d&&(0,Eo.jsx)(kr,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},qM=(0,io.memo)(OO);var zs=I(J(),1);var _r=I(X(),1),BO=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=eo(),s=(0,zs.useMemo)(()=>no(i),[i]),l=a??s,u=d=>d?zs.default.isValidElement(d)?d:(0,_r.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,_r.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*l),transform:`translate(-50%, -100%) scale(${l})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,_r.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,_r.jsxs)(zs.default.Fragment,{children:[f>0&&(0,_r.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,_r.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,_r.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},VM=(0,zs.memo)(BO);var xg=I(J(),1);var so=I(X(),1),HO=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:s="",style:l})=>{let u=le(),d=(f,c,p)=>f?xg.default.isValidElement(f)?f:(0,so.jsx)(f,{size:c,className:p}):null;return(0,so.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${s}`.trim(),style:l,children:[(e||t)&&(0,so.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,so.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,so.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,so.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,so.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,so.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,so.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,so.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,so.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,so.jsx)("span",{children:f.label})]},f.key)})}),i]})},GM=(0,xg.memo)(HO);var Os=I(J(),1);function jM(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function XM(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function WM(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function YM(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function KM(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var nt=I(X(),1),FO=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:i,onDownload:s})=>{let l=le(),[u,d]=(0,Os.useState)(!1),f=(0,Os.useCallback)(g=>{g.stopPropagation(),d(w=>!w)},[]),c=(0,Os.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,nt.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,nt.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,nt.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":l("clip.openEditorTitle"),children:[t?(0,nt.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,nt.jsx)("span",{className:"wf-vc-result__fallback",children:(0,nt.jsx)(oa,{size:36,strokeWidth:1.5})}),(0,nt.jsx)("span",{className:"wf-vc-result__play",children:(0,nt.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,nt.jsx)(Ba,{size:22,fill:"currentColor"})})})]});return(0,nt.jsxs)("div",{className:"wf-vc-result",children:[p,(0,nt.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,nt.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,nt.jsx)("dt",{children:l("clip.duration")}),(0,nt.jsx)("dd",{className:"wf-vc-result__mono",children:WM(a)})]}),(0,nt.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,nt.jsx)("dt",{children:l("clip.resolution")}),(0,nt.jsx)("dd",{className:"wf-vc-result__mono",children:YM(o,n)})]})]}),(0,nt.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,nt.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:g=>{g.stopPropagation(),i?.()},children:[(0,nt.jsx)(ws,{size:14}),(0,nt.jsx)("span",{children:l("clip.reEdit")})]}),(0,nt.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:g=>{g.stopPropagation(),s?.()},disabled:!e,title:e?l("clip.downloadTitle"):void 0,children:[(0,nt.jsx)(ps,{size:14}),(0,nt.jsx)("span",{children:l("clip.download")})]})]})]})},ZM=(0,Os.memo)(FO);var $M="omnimux-clip-open",iw="omnimux-clip-save",sw="omnimux-clip-close",lw="omnimux-clip-progress";function QM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function JM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function eN(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var Va=I(X(),1),tN=350,UO=440;function aN(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function To(e){return typeof e=="string"&&e.trim()?e:void 0}function dw(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function qO(e){return To(e.mediaUrl)||To(e.outputVideoUrl)||To(e.path)||To(e.url)||To(e.real_path)||To(e.filePath)}function VO(e){let{nodes:t,edges:a}=oe.getState(),o=[],n=[],r=[],i=[];for(let s of a){if(s.target!==e)continue;let l=t.find(g=>g.id===s.source);if(!l)continue;let u=aN(l.data)?l.data:{},d=To(u.materialType)||(l.type==="material"?void 0:l.type),f=To(u.label)||To(u.title)||l.id,c=qO(u)||"",p=dw(u.duration)??dw(u.outputDurationMs)??dw(u.durationMs);if(d==="video"||l.type==="video_composition"){let g=c||To(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=To(u.content)||To(u.generatedContent)||To(u.prompt);g&&i.push({text:g,startTimeMs:i.reduce((w,y)=>w+y.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function GO(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function jO(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var XO=({id:e,data:t,selected:a})=>{let o=aN(t)?t:{},n=oe(w=>w.setNodes),r=oe(w=>w.setEdges),i=le(),s=o.status??"idle",l=!!o.outputVideoUrl,u=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||i("node.type.video_composition"),f=XM(s,l),c=(0,Ii.useCallback)(w=>{n(y=>y.map(h=>h.id===e?{...h,data:{...h.data,...w}}:h))},[e,n]);(0,Ii.useEffect)(()=>{if(typeof window>"u")return;let w=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!QM(m)||m.nodeId&&m.nodeId!==e)return;let x=m.output;if(c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:x?.videoPath,thumbnailUrl:x?.thumbnailPath,outputThumbnailUrl:x?.thumbnailPath,outputDurationMs:x?.durationMs,outputWidth:x?.width,outputHeight:x?.height,status:x?.videoPath?"completed":"idle",renderProgress:x?.videoPath?100:void 0,errorMessage:void 0}),x?.videoPath&&m.createDownstreamNode){let C=oe.getState().nodes,k=C.find(T=>T.id===e)?.position||{x:0,y:0};if(!C.some(T=>T.type==="material"&&T.data?.realPath===x.videoPath)){let T=`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,A={x:k.x+tN+80,y:k.y},B={id:T,type:"material",position:A,selected:!0,data:{materialType:"video",label:`${o.title||o.label||i("node.type.video_composition")}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:x.videoPath,mediaUrl:x.videoPath,thumbnailUrl:x.thumbnailPath,duration:x.durationMs?Math.round(x.durationMs/1e3):void 0,size:{width:x.width||1920,height:x.height||1080}}},L={id:`edge_${e}_${T}`,source:e,target:T,sourceHandle:"output",targetHandle:"input"};n(N=>[...N.map(E=>({...E,selected:!1})),B]),r(N=>[...N,L]),Y.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03")}}},y=b=>{let m=b instanceof CustomEvent?b.detail:void 0;if(!eN(m)||m.nodeId&&m.nodeId!==e)return;let x=m.status??"rendering";c({status:x,renderProgress:m.renderProgress})},h=b=>{let m=b instanceof CustomEvent?b.detail:void 0;JM(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:l?"completed":"idle"}))};return window.addEventListener(iw,w),window.addEventListener(lw,y),window.addEventListener(sw,h),()=>{window.removeEventListener(iw,w),window.removeEventListener(lw,y),window.removeEventListener(sw,h)}},[l,e,o.projectId,o.status,c]);let p=(0,Ii.useCallback)(()=>{if(typeof window>"u")return;let w=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,y={source:"canvas",nodeId:e,nodeTitle:d,projectId:w,draftSchema:o.schema,upstreamInputs:VO(e)};c({status:"editing",projectId:w}),window.dispatchEvent(new CustomEvent($M,{detail:y,bubbles:!0})),window.setTimeout(()=>{GO()||Y.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,d,c]),g=(0,Ii.useCallback)(()=>{let w=o.outputVideoUrl;if(!w)return;let y=document.createElement("a");y.href=w,y.download=`${KM(d)}.mp4`,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove()},[o.outputVideoUrl,d]);return(0,Va.jsxs)(qM,{id:e,selected:a,nodeWidth:tN,nodeHeight:UO,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:w=>{w.stopPropagation(),p()},renderFloatingPill:({hovered:w,selected:y})=>{if(!w&&!y||!l)return null;let h=[{key:"download_video",label:i("clip.download"),icon:ps,onClick:g,title:i("clip.downloadTitle")}];return(0,Va.jsx)(VM,{actions:h})},renderHeader:()=>(0,Va.jsx)(pd,{label:d,materialType:"video_composition",customIcon:(0,Va.jsx)(oa,{size:14}),onLabelChange:w=>c({label:w,title:w}),trailing:(0,Va.jsx)(mg,{status:jM(s)})}),children:[f==="result"&&(0,Va.jsx)(ZM,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:u,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:p,onDownload:g}),f==="rendering"&&(0,Va.jsx)("div",{className:"wf-material-node__media",children:(0,Va.jsx)($c,{status:"generating",loadingAspectRatio:"video",children:null})}),f==="error"&&(0,Va.jsx)("div",{className:"wf-material-node__media",children:(0,Va.jsx)($c,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:p,children:null})}),f==="launcher"&&(0,Va.jsx)(GM,{mainIcon:(0,Va.jsx)(oa,{size:36,strokeWidth:1.5}),secondaryIcon:(0,Va.jsx)(ha,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:ws,onClick:()=>p()}]})]})},oN={type:"video_composition",component:(0,Ii.memo)(XO),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>jO(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var Ao=I(J(),1);var Ko=I(J(),1);var Ae=I(X(),1),WO=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#64748b"],uw=(0,Ko.memo)(({groupColor:e,onExecuteGroup:t,onCreateWorkflow:a,onUngroup:o,onLayout:n,onColorChange:r})=>{let i=le(),{zoom:s}=eo(),l=(0,Ko.useMemo)(()=>no(s),[s]),[u,d]=(0,Ko.useState)(!1),[f,c]=(0,Ko.useState)(!1),p=(0,Ko.useRef)(null),g=(0,Ko.useRef)(null);return(0,Ko.useEffect)(()=>{function w(y){p.current&&!p.current.contains(y.target)&&d(!1),g.current&&!g.current.contains(y.target)&&c(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),(0,Ae.jsx)("div",{className:"wf-floating-top-pill wf-group-topbar nodrag nopan nowheel",onPointerDown:ye,onMouseDown:ye,style:{top:-(14*l),transform:`translate(-50%, -100%) scale(${l})`,transformOrigin:"bottom center",left:"50%","--wf-group-accent":e},children:(0,Ae.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Ae.jsxs)("div",{style:{position:"relative"},ref:g,children:[(0,Ae.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>c(w=>!w),title:i("group.colorTitle"),children:(0,Ae.jsx)("div",{className:"wf-group-topbar__swatch",style:{backgroundColor:e}})}),f&&(0,Ae.jsx)("div",{className:"wf-group-topbar__palette",children:WO.map(w=>(0,Ae.jsx)("button",{type:"button",className:`wf-group-topbar__palette-dot ${e===w?"is-active":""}`,style:{backgroundColor:w},onClick:()=>{r(w),c(!1)}},w))})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("div",{style:{position:"relative"},ref:p,children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>d(w=>!w),title:i("group.layoutTitle"),children:[(0,Ae.jsx)(Oa,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.layout")}),(0,Ae.jsx)(ga,{size:12,className:"wf-floating-top-pill__icon"})]}),u&&(0,Ae.jsxs)("div",{className:"wf-group-topbar__menu",style:{left:0,right:"auto"},children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("horizontal"),d(!1)},children:[(0,Ae.jsx)(ds,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("vertical"),d(!1)},children:[(0,Ae.jsx)(us,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutVertical")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("grid"),d(!1)},children:[(0,Ae.jsx)(ko,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutGrid")})]})]})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn wf-floating-top-pill__btn--success",onClick:t,title:i("group.executeTitle"),children:[(0,Ae.jsx)(Ba,{size:12,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}),(0,Ae.jsx)("span",{children:i("group.execute")})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,title:i("group.createWorkflowTitle"),children:[(0,Ae.jsx)(br,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.createWorkflow")})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:i("group.ungroupTitle"),children:[(0,Ae.jsx)(Dc,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.ungroup")})]})]})})});uw.displayName="GroupTopBar";var wg=I(J(),1);var cw=I(X(),1),YO=[{direction:"nw",kind:"corner"},{direction:"ne",kind:"corner"},{direction:"se",kind:"corner"},{direction:"sw",kind:"corner"},{direction:"n",kind:"edge"},{direction:"s",kind:"edge"},{direction:"w",kind:"edge"},{direction:"e",kind:"edge"}],fw=(0,wg.memo)(({bounds:e,minAllowed:t,color:a,zoom:o=1,onResize:n})=>{let r=(0,wg.useCallback)((i,s)=>{s.stopPropagation(),s.preventDefault();let l=s.clientX,u=s.clientY,d={...e},f=o,c=g=>{let w=l5(g.clientX-l,g.clientY-u,f),y=s5(i,d,w,t);n(y)},p=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",p)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",p)},[e,t,n,o]);return(0,cw.jsx)("div",{className:"wf-group-resize-handles nodrag nopan",onPointerDown:ye,onMouseDown:ye,style:{"--wf-group-accent":a||"var(--wb-accent)"},children:YO.map(i=>(0,cw.jsx)("div",{className:`wf-group-handle wf-group-handle--${i.kind} wf-group-handle--${i.direction}`,onPointerDown:s=>r(i.direction,s),title:i.kind==="corner"?"\u7F29\u653E":i.direction==="n"||i.direction==="s"?"\u5782\u76F4\u8C03\u6574":"\u6C34\u5E73\u8C03\u6574"},i.direction))})});fw.displayName="GroupResizeHandles";var Ir=I(X(),1),pw=(0,Ao.memo)(({id:e,data:t,selected:a,width:o,height:n})=>{let r=le(),i=t,s=i.title||r("group.defaultTitle"),l=i.color||"var(--wb-accent)",u=i.minWidth||300,d=i.minHeight||200,f=typeof o=="number"&&o>0?o:400,c=typeof n=="number"&&n>0?n:300,[p,g]=(0,Ao.useState)(!1),[w,y]=(0,Ao.useState)(s),h=oe(N=>N.ungroup),b=oe(N=>N.resizeGroup),m=oe(N=>N.setNodes),x=oe(N=>N.nodes),v=oe(N=>N.nodes.find(E=>E.id===e)?.position||{x:0,y:0}),{getViewport:C}=Sa(),S=C()?.zoom||1,k=(0,Ao.useCallback)(()=>{g(!1);let N=w.trim()||r("group.defaultTitle");m(E=>E.map(M=>M.id===e?{...M,data:{...M.data,title:N}}:M))},[e,w,m,r]),_=(0,Ao.useCallback)(N=>{m(E=>E.map(M=>M.id===e?{...M,data:{...M.data,color:N}}:M))},[e,m]),T=(0,Ao.useCallback)(N=>{b(e,N)},[e,b]),A=(0,Ao.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:execute-group",{detail:{groupId:e,nodeIds:nd(x,e)}}))},[e,x]),B=(0,Ao.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:create-subworkflow",{detail:{groupId:e,groupTitle:s,nodeIds:nd(x,e)}}))},[e,s,x]),U=(0,Ao.useCallback)(()=>{h(e)},[e,h]),L=(0,Ao.useCallback)(N=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:layout-group",{detail:{groupId:e,layoutType:N}}))},[e]);return(0,Ir.jsxs)("div",{className:`wf-group-node ${a?"wf-group-node--selected":""}`,style:{width:`${f}px`,height:`${c}px`,"--wf-group-accent":l},children:[a&&(0,Ir.jsx)(uw,{groupId:e,groupTitle:s,groupColor:l,onExecuteGroup:A,onCreateWorkflow:B,onUngroup:U,onLayout:L,onColorChange:_}),a&&(0,Ir.jsx)(fw,{bounds:{x:v.x,y:v.y,width:f,height:c},minAllowed:{minWidth:u,minHeight:d},color:l,zoom:S,onResize:T}),(0,Ir.jsxs)("div",{className:"wf-group-header",children:[(0,Ir.jsx)("div",{className:"wf-group-header__dot"}),p?(0,Ir.jsx)("input",{type:"text",className:"nodrag nopan wf-group-header__input",value:w,onChange:N=>y(N.target.value),onBlur:k,onKeyDown:N=>{N.key==="Enter"&&k(),N.key==="Escape"&&g(!1)},autoFocus:!0}):(0,Ir.jsx)("span",{className:"wf-group-header__title",onDoubleClick:()=>g(!0),title:r("group.renameHint"),children:s})]})]})});pw.displayName="GroupNode";var nN={type:"group",component:pw,ports:[],defaultData:()=>({title:"",color:"#3b82f6",padding:32,minWidth:300,minHeight:200,nodeIds:[]})};var Mi=I(J(),1);var bt=I(X(),1),mw=(0,Mi.memo)(({visible:e,selectedCount:t,position:a,onGroup:o,onCreateAsset:n,onLayout:r})=>{let i=le(),[s,l]=(0,Mi.useState)(!1),u=(0,Mi.useRef)(null);return(0,Mi.useEffect)(()=>{function d(f){u.current&&!u.current.contains(f.target)&&l(!1)}if(s)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[s]),!e||t<2?null:(0,bt.jsxs)("div",{className:"wf-floating-selection-bar nodrag nopan",onPointerDown:ye,onMouseDown:ye,style:{left:`${a.x}px`,top:`${a.y}px`},children:[(0,bt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:n,title:i("group.float.createAssetTitle"),children:[(0,bt.jsx)(xs,{size:15}),(0,bt.jsx)("span",{children:i("group.float.createAsset")})]}),(0,bt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn wf-floating-selection-bar__btn--accent",onClick:o,title:i("group.float.groupTitle"),children:[(0,bt.jsx)(gs,{size:15}),(0,bt.jsx)("span",{children:i("group.float.group")})]}),(0,bt.jsxs)("div",{style:{position:"relative"},ref:u,children:[(0,bt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:()=>l(d=>!d),title:i("group.float.layoutTitle"),children:[(0,bt.jsx)(Oa,{size:15}),(0,bt.jsx)("span",{children:i("group.layout")}),(0,bt.jsx)(ga,{size:13})]}),s&&(0,bt.jsxs)("div",{className:"wf-floating-selection-bar__menu",children:[(0,bt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("horizontal"),l(!1)},children:[(0,bt.jsx)(ds,{size:14}),(0,bt.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,bt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("vertical"),l(!1)},children:[(0,bt.jsx)(us,{size:14}),(0,bt.jsx)("span",{children:i("group.layoutVertical")})]}),(0,bt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("grid"),l(!1)},children:[(0,bt.jsx)(ko,{size:14}),(0,bt.jsx)("span",{children:i("group.layoutGridCompact")})]})]})]})]})});mw.displayName="FloatingSelectionToolbar";var hn=I(J(),1);function rN(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function bd(e){return typeof e=="string"?e.trim():""}function KO(e){let t=bd(e);if(!t||dd(t))return"";let a=xI(t);return a||(q0(t)&&!t.includes("/api/local-file")?t:"")}function iN(e){let t=[],a=new Set;for(let o of e){let n=bd(o.id),r=rN(o.data),i=[r.realPath,r.real_path,r.outputVideoUrl];if(Array.isArray(r.mediaAssets))for(let u of r.mediaAssets){let d=rN(u);i.push(d.path,d.real_path,d.url)}i.push(r.mediaUrl,r.previewUrl);let s="";for(let u of i)if(s=KO(u),s)break;if(!s||a.has(s))continue;a.add(s);let l=bd(r.originalName)||bd(r.title)||bd(r.label)||bd(r.name);t.push({real_path:s,nodeId:n||s,...l?{original_name:l}:{}})}return t}var et=I(X(),1),ZO=[{value:"character",key:"asset.scope.character"},{value:"scene",key:"asset.scope.scene"},{value:"prop",key:"asset.scope.prop"},{value:"style",key:"asset.scope.style"},{value:"knowledge",key:"asset.scope.knowledge"},{value:"custom",key:"asset.scope.custom"}],gw=(0,hn.memo)(({isOpen:e,onClose:t,items:a})=>{let o=le(),[n,r]=(0,hn.useState)("character"),[i,s]=(0,hn.useState)(""),[l,u]=(0,hn.useState)(o("asset.modal.defaultTags")),[d,f]=(0,hn.useState)(!1),c=(0,hn.useMemo)(()=>iN(a.map(g=>({id:g.nodeId||g.id,data:{title:g.nodeTitle,label:g.nodeTitle,realPath:g.realPath,previewUrl:g.previewUrl,content:g.content,materialType:g.type}}))),[a]);if((0,hn.useEffect)(()=>{if(!e)return;let g=(a[0]?.nodeTitle||o("asset.modal.defaultName")).slice(0,40);s(g),r("character"),u(o("asset.modal.defaultTags")),f(!1)},[e,a,o]),!e)return null;let p=async g=>{if(g.preventDefault(),c.length===0){Y.error(o("asset.modal.noFiles"));return}let w=i.trim().slice(0,40);if(!w){Y.warning(o("asset.modal.nameRequired"));return}f(!0);try{let y=l.split(/[,，]/).map(v=>v.trim()).filter(Boolean),h=await fetch("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w,type:n,tags:y,files:c.map(v=>({real_path:v.real_path,original_name:v.original_name})),source:"workflow-canvas"})}),b=await h.json().catch(()=>({}));if(!h.ok)throw new Error(b.message||b.error||`HTTP ${h.status}`);let x=(b.asset||{}).name||w;Y.success(o("asset.modal.saved").replace("{name}",x)),t()}catch(y){Y.error(y instanceof Error?y.message:o("asset.modal.failed"))}finally{f(!1)}};return(0,et.jsx)(ln,{open:e,onCancel:t,title:o("asset.modal.title"),width:480,children:(0,et.jsxs)("form",{onSubmit:p,className:"wf-group-modal",children:[(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.name")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:i,onChange:g=>s(g.target.value),placeholder:a[0]?.nodeTitle||o("asset.modal.defaultName"),maxLength:40})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.category")}),(0,et.jsx)("div",{className:"wf-group-modal__scopes",children:ZO.map(g=>(0,et.jsxs)("button",{type:"button",className:`wf-group-modal__scope ${n===g.value?"is-active":""}`,onClick:()=>r(g.value),children:[(0,et.jsx)(So,{size:14}),(0,et.jsx)("span",{children:o(g.key)})]},g.value))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.files").replace("{count}",String(c.length))}),(0,et.jsx)("div",{className:"wf-group-modal__list",children:c.length===0?(0,et.jsx)("div",{className:"wf-group-modal__empty",children:o("asset.modal.empty")}):c.map(g=>(0,et.jsx)("div",{className:"wf-group-modal__row",children:(0,et.jsx)("span",{children:g.original_name||g.nodeId})},g.real_path))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.tags")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:l,onChange:g=>u(g.target.value),placeholder:o("asset.modal.tagsPlaceholder")})]}),(0,et.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,et.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:o("asset.modal.cancel")}),(0,et.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:d||c.length===0,children:[(0,et.jsx)(xs,{size:14}),(0,et.jsx)("span",{children:o(d?"asset.modal.saving":"asset.modal.submit")})]})]})]})})});gw.displayName="BatchCreateAssetModal";var Mr=I(J(),1);var Zt=I(X(),1),hw=(0,Mr.memo)(({isOpen:e,onClose:t,defaultTitle:a,nodeCount:o=0,onConfirm:n})=>{let r=le(),i=r("template.modal.defaultName"),[s,l]=(0,Mr.useState)(a||i),[u,d]=(0,Mr.useState)(""),[f,c]=(0,Mr.useState)(r("template.modal.defaultTags")),[p,g]=(0,Mr.useState)(!1);if((0,Mr.useEffect)(()=>{e&&(l((a||i).trim()||i),d(""),c(r("template.modal.defaultTags")),g(!1))},[e,a,i,r]),!e)return null;let w=async y=>{if(y.preventDefault(),!s.trim()){Y.warning(r("template.modal.nameRequired"));return}g(!0);try{let h=f.split(/[,，]/).map(b=>b.trim()).filter(Boolean);await n({name:s.trim(),description:u.trim(),tags:h}),Y.success(r("template.modal.saved").replace("{name}",s.trim())),t()}catch(h){Y.error(h instanceof Error?h.message:r("template.modal.failed"))}finally{g(!1)}};return(0,Zt.jsx)(ln,{open:e,onCancel:t,title:r("template.modal.title"),width:460,children:(0,Zt.jsxs)("form",{onSubmit:w,className:"wf-group-modal",children:[(0,Zt.jsxs)("div",{children:[(0,Zt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.name")}),(0,Zt.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:s,onChange:y=>l(y.target.value),placeholder:r("template.modal.namePlaceholder"),autoFocus:!0})]}),(0,Zt.jsxs)("div",{children:[(0,Zt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.description")}),(0,Zt.jsx)("textarea",{className:"nodrag nopan wf-group-modal__input",value:u,onChange:y=>d(y.target.value),placeholder:r("template.modal.descriptionPlaceholder"),rows:3})]}),(0,Zt.jsxs)("div",{children:[(0,Zt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.tags")}),(0,Zt.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:f,onChange:y=>c(y.target.value),placeholder:r("template.modal.tagsPlaceholder")})]}),(0,Zt.jsx)("div",{className:"wf-group-modal__hint",children:r("template.modal.hint").replace("{count}",String(o))}),(0,Zt.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,Zt.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:r("template.modal.cancel")}),(0,Zt.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:p||!s.trim(),children:[(0,Zt.jsx)(br,{size:14}),(0,Zt.jsx)("span",{children:r(p?"template.modal.saving":"template.modal.submit")})]})]})]})})});hw.displayName="CreateWorkflowModal";function sN(){return Yt(Nt.templates)}function lN(e){return Yt(Nt.templates,{method:"POST",body:e})}function dN(e){return Yt(Nt.template(encodeURIComponent(e)))}function ef(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function uN(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function bw(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)bw(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];dd(o)?delete t[a]:o&&typeof o=="object"&&bw(o)}}function $O(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=cn(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=uN(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(dd(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=uN(o);return n?(dd(n.url)&&(typeof n.path=="string"&&n.path?n.url=cn(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}bw(e)}function tf(e){return e.map(t=>{let a=t,o=ef(a.data);delete o.__catalog,$O(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),a.extent==="parent"&&(n.extent="parent"),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=ef(a.style)),n})}function QO(e){let t=e,a=ef(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function af(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=ef(a.data)),a.style&&typeof a.style=="object"&&(o.style=ef(a.style)),o})}function bn(e,t){return JSON.stringify({nodes:tf(e).map(QO),edges:af(t)})}function xw(e){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function cN(e,t){let a=Array.isArray(e.nodes)?e.nodes:[],o=Array.isArray(e.edges)?e.edges:[],n=Fc(a.map(l=>({position:l.position||{x:0,y:0},width:l.width,height:l.height})),0),r=new Map;for(let l of a)typeof l.id=="string"&&r.set(l.id,xw(l.id));let i=a.map(l=>{let{parentId:u,extent:d,selected:f,...c}=l;return{...c,id:r.get(l.id)||xw(String(l.id||"node")),selected:!1,position:{x:t.x+((l.position?.x??0)-n.x),y:t.y+((l.position?.y??0)-n.y)}}}),s=o.map(l=>{let u=r.get(l.source),d=r.get(l.target);return!u||!d?null:{...l,id:xw(String(l.id||`${u}_${d}`)),source:u,target:d}}).filter(Boolean);return{nodes:i,edges:s}}var wN=I(J(),1),yN=I(Qt(),1);var yg=I(J(),1),fN=I(Qt(),1);var Xe=I(X(),1),ww=e=>e==="text"?(0,Xe.jsx)(vr,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Xe.jsx)(xc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Xe.jsx)(_c,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Xe.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),pN=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Ia(),[i,s]=(0,yg.useState)(null);(0,yg.useEffect)(()=>{if(o===null){s(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let l=o!==null?e.columns[o]:null;return(0,Xe.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,Xe.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Xe.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,Xe.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Xe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Xe.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Xe.jsx)(hc,{size:14})}),ww(u.type),(0,Xe.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,Xe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Xe.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,Xe.jsx)(cc,{size:15}):(0,Xe.jsx)(uc,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Xe.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,b=Math.max(8,c.right-p);s({top:h,left:b}),n(d)}},children:(0,Xe.jsx)(bi,{size:15})})]})]},u.id))}),(0,Xe.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Xe.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Xe.jsx)(ft,{size:14}),(0,Xe.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&l&&i&&typeof document<"u"&&(0,fN.createPortal)((0,Xe.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,Xe.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,Xe.jsx)(An,{size:13}),(0,Xe.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Xe.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=l;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,Xe.jsx)(_o,{size:13}),(0,Xe.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var va=I(X(),1),JO=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],mN=()=>{let{document:e,setFilterConditions:t}=Ia(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((s,l)=>({value:l,label:s.title||`\u5217 ${l+1}`})),n=(s,l)=>{let u=a.map((d,f)=>f===s?{...d,...l}:d);t(u)},r=()=>{let s=[...a,{columnIndex:0,op:"equals",value:""}];t(s)},i=s=>{let l=a.filter((u,d)=>d!==s);t(l.length===0?[{columnIndex:0,op:"equals",value:""}]:l)};return(0,va.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:s=>s.stopPropagation(),children:[(0,va.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,va.jsxs)("div",{className:"wf-filter-body",children:[a.map((s,l)=>(0,va.jsxs)("div",{className:"wf-filter-row",children:[(0,va.jsx)("div",{style:{width:130,flexShrink:0},children:(0,va.jsx)(oo,{value:s.columnIndex,options:o,onChange:u=>n(l,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,va.jsx)("div",{style:{width:110,flexShrink:0},children:(0,va.jsx)(oo,{value:s.op,options:JO,onChange:u=>n(l,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,va.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:s.value??"",disabled:s.op==="empty"||s.op==="notEmpty",onChange:u=>n(l,{value:u.target.value})}),(0,va.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(l),children:(0,va.jsx)(ba,{size:15})})]},l)),(0,va.jsx)("div",{style:{paddingTop:4},children:(0,va.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,va.jsx)(ft,{size:14}),(0,va.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Nr=I(X(),1),e7=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],gN=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Ia(),o=e.rowHeight||"low";return(0,Nr.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Nr.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Nr.jsx)("div",{style:{padding:"6px"},children:e7.map(n=>{let r=o===n.id;return(0,Nr.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Nr.jsx)("span",{children:n.label}),r&&(0,Nr.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Nr.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var qe=I(X(),1),hN=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:s,closeStage:l}=Ia(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,qe.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,qe.jsx)("div",{className:"wf-stage-topbar__left",children:(0,qe.jsxs)("div",{className:"wf-stage-title-group",children:[(0,qe.jsx)(Lo,{size:16,className:"wf-stage-title-icon"}),(0,qe.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,qe.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,qe.jsx)(Ec,{size:15}),(0,qe.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,qe.jsx)(pN,{})]}),(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,qe.jsx)(xi,{size:15}),(0,qe.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,qe.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,qe.jsx)(mN,{})]}),(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,qe.jsx)(vi,{size:15}),(0,qe.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,qe.jsx)(gN,{})]}),(0,qe.jsx)("div",{className:"wf-stage-divider"}),(0,qe.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,qe.jsx)(Ac,{size:16})}),(0,qe.jsx)("button",{type:"button",disabled:!s(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,qe.jsx)(Nc,{size:16})}),(0,qe.jsx)("div",{className:"wf-stage-divider"}),(0,qe.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),l()},children:(0,qe.jsx)(ba,{size:16})})]})]})};var De=I(X(),1),bN=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Ia(),n=e.columns.filter(s=>s.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,De.jsx)("div",{className:"wf-grid-container",children:(0,De.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,De.jsxs)("table",{className:"wf-grid-table",children:[(0,De.jsxs)("colgroup",{children:[(0,De.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(s=>(0,De.jsx)("col",{style:{width:s.width||220,minWidth:120}},s.id)),(0,De.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,De.jsx)("col",{style:{width:"auto"}})]}),(0,De.jsx)("thead",{children:(0,De.jsxs)("tr",{children:[(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,De.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(s=>(0,De.jsx)("th",{className:"wf-grid-th",children:(0,De.jsxs)("div",{className:"wf-grid-th-content",children:[(0,De.jsx)("span",{className:"wf-grid-th-icon",children:ww(s.type)}),(0,De.jsx)("span",{className:"wf-grid-th-title",children:s.title})]})},s.id)),(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,De.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,De.jsx)(ft,{size:15})})}),(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,De.jsx)("tbody",{children:e.rows.map((s,l)=>(0,De.jsxs)("tr",{className:i,children:[(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,De.jsx)("span",{children:l+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=s.cells[d];return(0,De.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,De.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((w,y)=>(0,De.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},y)),g.length===0&&(0,De.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,De.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(l,d,g.target.value)})})()},u.id)}),(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},l))})]}),(0,De.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,De.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,De.jsx)(ft,{size:14}),(0,De.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Bs=I(J(),1);var lo=I(X(),1),t7=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],xN=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Ia(),[n,r]=(0,Bs.useState)(e.initialTitle),[i,s]=(0,Bs.useState)(e.initialType),l=(0,Bs.useRef)(null);(0,Bs.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),s(e.initialType),setTimeout(()=>l.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,lo.jsx)(ln,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,lo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,lo.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,lo.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,lo.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,lo.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,lo.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,lo.jsx)("input",{ref:l,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,lo.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,lo.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,lo.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,lo.jsx)(oo,{value:i,options:t7,onChange:d=>s(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var xd=I(X(),1),vN=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Ia();return(0,wN.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,yN.createPortal)((0,xd.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,xd.jsx)(hN,{}),(0,xd.jsx)(bN,{}),(0,xd.jsx)(xN,{})]}),document.body)};var pt=I(X(),1),yw=class extends Ce.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,pt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,pt.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,pt.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,pt.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};Zc(BM);Zc(UM);Zc(oN);Zc(nN);var a7=dM(),o7={default:R0,animated:R0},CN={maxZoom:1},n7={x:0,y:0,zoom:1},r7=[1,2],i7=96,s7=({catalog:e,workspaceId:t,onExecuteNodeIds:a,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:s})=>{let l=le(),{screenToFlowPosition:u,fitView:d,zoomTo:f,setCenter:c}=Sa(),p=Sa(),{nodes:g,edges:w,onNodesChange:y,onEdgesChange:h}=c5(),b=oe(K=>K.applyCanvasInputMutation),m=oe(K=>K.setNodes),x=oe(K=>K.setSelectedElement),v=oe(K=>K.groupNodes),C=oe(K=>K.ungroup),S=oe(K=>K.pushHistory),k=oe(K=>K.undo),_=oe(K=>K.redo),T=f5(),A=p5(),[B,U]=(0,Ce.useState)(null),[L,N]=(0,Ce.useState)(!1),[E,M]=(0,Ce.useState)(!1),[R,O]=(0,Ce.useState)(!1),[D,H]=(0,Ce.useState)(!1),[z,j]=(0,Ce.useState)(void 0),[F,Z]=(0,Ce.useState)("select"),[$,ee]=(0,Ce.useState)(!1),[q,Q]=(0,Ce.useState)([]),[ne,de]=(0,Ce.useState)(!1),[re,ce]=(0,Ce.useState)(null),[xe,Le]=(0,Ce.useState)([]),Oe=(0,Ce.useRef)(0),yt=(0,Ce.useMemo)(()=>g.some(K=>K.selected),[g]),vt=(0,Ce.useMemo)(()=>g.filter(K=>K.selected&&K.type!=="group"),[g]),uo=(0,Ce.useMemo)(()=>{if(vt.length<2)return{x:0,y:0};let K=Fc(vt,0),ue=K.x+K.width/2,Ie=K.y,Se=typeof p?.getViewport=="function"?p.getViewport():{x:0,y:0,zoom:1},St=typeof Se?.zoom=="number"&&Number.isFinite(Se.zoom)&&Se.zoom>0?Se.zoom:1,Fe=typeof Se?.x=="number"&&Number.isFinite(Se.x)?Se.x:0,Ve=typeof Se?.y=="number"&&Number.isFinite(Se.y)?Se.y:0;return{x:Math.round(Fe+ue*St),y:Math.round(Ve+Ie*St)}},[vt,p]),ae=(0,Ce.useCallback)(async()=>{let K=await sN();K.ok&&Le((K.body.templates||[]).map(ue=>({id:ue.id,name:ue.name,nodeCount:ue.nodeCount})))},[]);(0,Ce.useEffect)(()=>{ae()},[ae]);let _e=(0,Ce.useCallback)(async K=>{let ue=await dN(K);if(!ue.ok||!ue.body.template){Y.error(ue.body.message||ue.body.error||l("template.toast.loadFailed"));return}let Ie=u({x:window.innerWidth/2,y:window.innerHeight/2}),Se=cN(ue.body.template,Ie);b({addNodes:Se.nodes,addEdges:Se.edges}),Y.success(l("template.toast.inserted").replace("{name}",ue.body.template.name))},[b,u,l]),it=(0,Ce.useCallback)(()=>{if(vt.length<2)return;v(vt.map(ue=>ue.id),l("group.defaultTitle"))&&Y.success(l("group.toast.grouped"))},[vt,v,l]),Ct=(0,Ce.useCallback)((K,ue=vt)=>{if(ue.length<2)return;let Se=[...ue].sort((Rt,xn)=>Rt.position.x-xn.position.x)[0];if(!Se)return;let St=Se.position.x,Fe=Se.position.y,Ve=40,Gt=St,xt=Fe,la=Math.ceil(Math.sqrt(ue.length)),co=ue.map((Rt,xn)=>{let qs={...Rt.position},zg=Rt.width||320,Og=Rt.height||200;if(K==="horizontal")qs={x:Gt,y:Fe},Gt+=zg+Ve;else if(K==="vertical")qs={x:St,y:xt},xt+=Og+Ve;else if(K==="grid"){let Bg=xn%la,Hg=Math.floor(xn/la);qs={x:St+Bg*(320+Ve),y:Fe+Hg*(220+Ve)}}return{...Rt,position:qs}}),Er=new Map(co.map(Rt=>[Rt.id,Rt]));m(Rt=>Rt.map(xn=>Er.get(xn.id)||xn)),Y.success(l("group.toast.layout"))},[vt,m,l]);(0,Ce.useEffect)(()=>{let K=St=>{let Fe=St,Ve=Fe.detail?.groupId?nd(g,Fe.detail.groupId):[],Gt=Ve.length>0?Ve:Fe.detail?.nodeIds||[];Gt.length>0&&a&&(a(Gt),Y.success(l("group.toast.execute")))},ue=St=>{let Fe=St,{groupId:Ve,layoutType:Gt}=Fe.detail,xt=g.filter(la=>la.parentId===Ve);xt.length>=2&&Ct(Gt,xt)},Ie=St=>{let Ve=St.detail?.nodeIds||[],xt=g.filter(la=>Ve.includes(la.id)).map(la=>{let co=la.data||{};return{id:la.id,nodeId:la.id,nodeTitle:co.label||co.title||co.name||la.id,type:co.materialType||la.type||"image",previewUrl:co.previewUrl,content:co.content,realPath:co.realPath}});Q(xt),ee(!0)},Se=St=>{let Fe=St,{groupId:Ve,groupTitle:Gt}=Fe.detail,xt=g.filter(la=>la.parentId===Ve);ce({id:Ve,title:Gt||l("template.modal.defaultName"),nodeCount:xt.length}),de(!0)};return window.addEventListener("omnimux:workflow:execute-group",K),window.addEventListener("omnimux:workflow:layout-group",ue),window.addEventListener("omnimux:workflow:batch-create-asset",Ie),window.addEventListener("omnimux:workflow:create-subworkflow",Se),()=>{window.removeEventListener("omnimux:workflow:execute-group",K),window.removeEventListener("omnimux:workflow:layout-group",ue),window.removeEventListener("omnimux:workflow:batch-create-asset",Ie),window.removeEventListener("omnimux:workflow:create-subworkflow",Se)}},[g,a,Ct,l]);let He=WI(m,x),$t=l("menu.generateFromNode"),{menuState:Et,onConnectStart:Ga,onConnectEnd:Gn,onMenuSelect:Cd,onMenuClose:Sd}=VI({onReject:U});(0,Ce.useEffect)(()=>{S()},[g,w,S]);let kd=(0,Ce.useMemo)(()=>e?g.map(K=>({...K,data:{...K.data,__catalog:e}})):g,[g,e]),Cg=(0,Ce.useCallback)(K=>{let ue=b({addEdges:[K]});if(ue.status==="rejected"){let Ie=l(ig(ue.reasonCode));U(Ie),Y.warning(Ie)}else U(null)},[b,l]),Sg=(0,Ce.useCallback)(K=>{let ue=oe.getState();return OI(K,ue.nodes,ue.edges)},[]),nf=(0,Ce.useCallback)(async(K,ue)=>{let Ie=Oe.current,Se=ue??{x:120+Ie%3*420,y:120+Math.floor(Ie/3)*360};if(K==="import_asset"){let Fe=await On();if(!Fe.ok){Fe.body.error==="picker-unsupported"?Y.warning(l("picker.needPath")):Y.error(l("picker.pickFailed"));return}let Ve=Fe.body.paths??[];if(Ve.length===0)return;let Gt=ki(Ve);if(Gt.length===0){Y.warning(l("picker.unsupported"));return}let xt=tw({files:Gt,origin:Se});if(!xt.hasWork||!xt.addNodes?.length)return;if(b({addNodes:xt.addNodes}).status!=="allowed"){Y.error(l("picker.commitFailed"));return}let co=new Set(xt.addNodes.map(Er=>Er.id));m(Er=>Er.map(Rt=>co.has(Rt.id)?Rt:Rt.selected?{...Rt,selected:!1}:Rt)),Oe.current+=xt.addNodes.length,Y.success(l("picker.importOk"));return}if(K==="table"||K==="video_composition"){let Fe=uM(K,Se,`node_${K}_${Date.now()}`);if(!Fe)return;Oe.current+=1,m(Ve=>Y0(Ve,[{...Fe,selected:!0}]));return}let St=cd(K,Se);St.nodes.length!==0&&(Oe.current+=1,m(Fe=>Y0(Fe,St.nodes)))},[m,b,l]),kg=(0,Ce.useCallback)(K=>{let ue=K.nodes.map(Se=>Se.id),Ie=K.edges.map(Se=>Se.id);ue.length===0&&Ie.length===0||b({removeNodeIds:ue,removeEdgeIds:Ie})},[b]),{menu:Fs,handleNodeContextMenu:Lg,handlePaneContextMenu:_g,handleSelectionContextMenu:Ig,closeMenu:Ld,handleMenuAction:Mg,handleAddNodeFromMenu:Ng}=YI({screenToFlowPosition:u,setNodes:m,copySelectedNodes:He.copySelectedNodes,pasteNodes:He.pasteNodes,duplicateSelectedNodes:He.duplicateSelectedNodes,deleteSelectedNodes:He.deleteSelectedNodes,selectAllNodes:He.selectAllNodes,clearSelection:He.clearSelection,undo:k,redo:_,onExecuteNodeIds:a,onAddNode:nf}),Us=(0,Ce.useCallback)((K,ue)=>{let Ie=ZI(K);if(!Ie.ok)return Y.warning(l(Ie.reason==="unsupported"?"picker.unsupported":"picker.needPath")),!1;let Se=tw({files:[Ie.draft],origin:ue});if(!Se.hasWork||!Se.addNodes?.length)return Y.warning(l("picker.unsupported")),!1;if(b({addNodes:Se.addNodes}).status!=="allowed")return Y.error(l("picker.commitFailed")),!1;let Fe=new Set(Se.addNodes.map(Gt=>Gt.id));m(Gt=>Gt.map(xt=>Fe.has(xt.id)?xt:xt.selected?{...xt,selected:!1}:xt)),Oe.current+=Se.addNodes.length;let Ve=Se.addNodes[0];return Ve&&x("node",Ve.id),Y.success(l("picker.importOk")),!0},[b,m,x,l]),Eg=(0,Ce.useCallback)(K=>{let ue=Oe.current,Ie={x:200+ue%4*50,y:200+ue%4*40};Us(K,Ie)},[Us]);zI({onCopy:He.copySelectedNodes,onPaste:()=>He.pasteNodes(),onSelectAll:He.selectAllNodes,onDeleteSelected:He.deleteSelectedNodes,onClearSelection:He.clearSelection,onDuplicate:He.duplicateSelectedNodes,onGroupSelected:it,onUngroupSelected:()=>{let K=g.find(ue=>ue.selected&&ue.type==="group");K&&(C(K.id),Y.success(l("group.toast.ungrouped")))},onUndo:k,onRedo:_,hasSelection:yt,onToggleAssets:()=>M(K=>!K),onToggleShortcuts:()=>O(K=>!K),onToggleMinimap:()=>N(K=>!K),onToggleAddMenu:()=>H(K=>!K),onSetPointerMode:K=>Z(K),onFitView:()=>d(CN),onResetZoom:()=>f(1),onCategoryKey:K=>{M(!0),j(K)}});let Tg=(0,Ce.useCallback)((K,ue)=>{x("node",ue.id)},[x]),Ag=(0,Ce.useCallback)(()=>{x("none",null),Ld()},[x,Ld]),Dg=(0,Ce.useCallback)(()=>{m(K=>K.map((ue,Ie)=>({...ue,position:{x:120+Ie%3*440,y:120+Math.floor(Ie/3)*360}})))},[m]),Rg=(0,Ce.useCallback)(K=>{K.preventDefault(),K.dataTransfer.dropEffect="copy"},[]),Pg=(0,Ce.useCallback)(K=>{K.preventDefault();try{let ue=K.dataTransfer.getData("application/json");if(!ue)return;let Ie=JSON.parse(ue);if(Ie?.type==="omnimux-canvas-node"&&typeof Ie.nodeId=="string"){Q0({nodes:g,nodeId:Ie.nodeId,setCenter:c,setNodes:m});return}if(Ie?.type==="omnimux-asset"&&Ie.asset){let Se=u({x:K.clientX,y:K.clientY});Us(Ie.asset,Se)}}catch(ue){console.error("Failed to parse dropped asset",ue)}},[u,Us,g,c,m]);return(0,pt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,pt.jsx)(y_,{nodes:kd,edges:w,onNodesChange:y,onEdgesChange:h,onConnect:Cg,isValidConnection:Sg,onConnectStart:Ga,onConnectEnd:Gn,onNodeClick:Tg,onPaneClick:Ag,onNodeContextMenu:Lg,onPaneContextMenu:_g,onDragOver:Rg,onDrop:Pg,onSelectionContextMenu:Ig,onDelete:kg,nodeTypes:a7,edgeTypes:o7,fitView:!0,fitViewOptions:CN,defaultViewport:n7,minZoom:j0.minZoom,maxZoom:j0.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:F==="pan"?!0:r7,panOnScroll:!0,panOnScrollMode:an.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:F==="select",selectionMode:gr.Partial,defaultEdgeOptions:Hm,connectOnClick:!1,connectionRadius:i7,onlyRenderVisibleElements:!0,children:(0,pt.jsx)(k_,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:Mn.Dots})}),(0,pt.jsx)(E5,{isMinimapOpen:L,onToggleMinimap:()=>N(K=>!K),onAlignGrid:Dg,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:s}),L&&(0,pt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,pt.jsx)(I_,{pannable:!0,zoomable:!0})}),(0,pt.jsx)(N5,{onAddNode:nf,pointerMode:F,onPointerModeChange:Z,onOpenAssets:()=>M(K=>!K),onOpenHelp:()=>O(K=>!K),isAssetsOpen:E,isAddMenuOpen:D,onToggleAddMenu:()=>H(K=>!K),templates:xe,onInsertTemplate:K=>{_e(K)}}),E&&(0,pt.jsx)(yw,{onClose:()=>M(!1),children:(0,pt.jsx)(II,{isOpen:E,onClose:()=>M(!1),onInsertAsset:Eg,workspaceId:t,nodes:kd,onFocusNode:K=>{Q0({nodes:kd,nodeId:K,setCenter:c,setNodes:m})}})}),(0,pt.jsx)(MI,{isOpen:R,onClose:()=>O(!1)}),(0,pt.jsx)(mw,{visible:vt.length>=2,selectedCount:vt.length,position:uo,onGroup:it,onCreateAsset:()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:batch-create-asset",{detail:{nodeIds:vt.map(K=>K.id)}}))},onLayout:K=>Ct(K)}),(0,pt.jsx)(DI,{x:Fs.x,y:Fs.y,visible:Fs.visible,context:Fs.context,onClose:Ld,onAction:Mg,onAddNode:Ng,canUndo:T,canRedo:A,hasClipboard:He.hasClipboard,hasSelection:yt}),(0,pt.jsx)(rg,{visible:Et.visible,x:Et.x,y:Et.y,title:$t,options:Et.options,onSelect:Cd,onClose:Sd}),(0,pt.jsx)(vN,{}),(0,pt.jsx)(gw,{isOpen:$,onClose:()=>ee(!1),items:q}),(0,pt.jsx)(hw,{isOpen:ne,onClose:()=>{de(!1),ce(null)},groupId:re?.id,defaultTitle:re?.title,nodeCount:re?.nodeCount,onConfirm:async K=>{let ue=re?.id;if(!ue)throw new Error(l("template.missingGroup"));let Ie=new Set(nd(g,ue)),Se=g.filter(Ve=>Ie.has(Ve.id)),St=w.filter(Ve=>Ie.has(Ve.source)&&Ie.has(Ve.target)),Fe=await lN({name:K.name,description:K.description,tags:K.tags,nodes:tf(Se),edges:af(St)});if(!Fe.ok||!Fe.body.template)throw new Error(Fe.body.message||Fe.body.error||l("template.modal.failed"));await ae()}}),B&&(0,pt.jsx)("div",{className:"wf-rejected-toast",children:B})]})},l7=e=>(0,pt.jsx)(L0,{children:(0,pt.jsx)(s7,{...e})}),SN=l7;var kN=I(J(),1);var Ma=I(X(),1),vg=class extends kN.Component{constructor(a){super(a);Ug(this,"handleClearSelectionAndRetry",()=>{try{let a=oe.getState();a.setNodes(o=>o.map(n=>n.selected?{...n,selected:!1}:n)),a.setSelectedElement("none",null)}catch{}this.setState({hasError:!1,error:null,errorInfo:null})});Ug(this,"handleReload",()=>{this.props.onReset?this.props.onReset():typeof window<"u"&&window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a,o){console.error("[OmniMux CanvasErrorBoundary] \u6355\u83B7\u5230\u753B\u5E03\u672A\u5904\u7406\u6E32\u67D3\u5F02\u5E38:",a,o),this.setState({errorInfo:o})}render(){if(this.state.hasError){let a=this.state.error?.message||"\u753B\u5E03\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u5F02\u5E38";return(0,Ma.jsx)("div",{className:"wf-canvas-error-boundary nodrag nopan",children:(0,Ma.jsxs)("div",{className:"wf-canvas-error-boundary__card",children:[(0,Ma.jsx)("div",{className:"wf-canvas-error-boundary__icon",children:(0,Ma.jsx)(Rn,{size:24})}),(0,Ma.jsxs)("div",{className:"wf-canvas-error-boundary__copy",children:[(0,Ma.jsx)("div",{className:"wf-canvas-error-boundary__title",children:"\u753B\u5E03\u5C40\u90E8\u6E32\u67D3\u9047\u5230\u95EE\u9898"}),(0,Ma.jsx)("div",{className:"wf-canvas-error-boundary__message",children:a})]}),(0,Ma.jsxs)("div",{className:"wf-canvas-error-boundary__actions",children:[(0,Ma.jsxs)("button",{type:"button",className:"wf-canvas-error-boundary__btn wf-canvas-error-boundary__btn--ghost",onClick:this.handleClearSelectionAndRetry,children:[(0,Ma.jsx)(Lc,{size:14}),(0,Ma.jsx)("span",{children:"\u6E05\u7A7A\u9009\u62E9\u5E76\u91CD\u8BD5"})]}),(0,Ma.jsxs)("button",{type:"button",className:"wf-canvas-error-boundary__btn wf-canvas-error-boundary__btn--primary",onClick:this.handleReload,children:[(0,Ma.jsx)(ys,{size:14}),(0,Ma.jsx)("span",{children:"\u91CD\u65B0\u52A0\u8F7D"})]})]})]})})}return this.props.children}};var Vt=I(J(),1);var LN=new Set(["pending","running","paused"]),d7=new Set(["completed","error","cancelled"]);function wd(e,t){let a=oe.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function _N(e,t){let a=(0,Vt.useRef)(null),o=(0,Vt.useRef)(e);o.current=e;let n=(0,Vt.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,Vt.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,Vt.useCallback)((y,h)=>{at.getState().setExecution({status:y,error:h,progress:{...at.getState().progress,percentage:y==="completed"?100:at.getState().progress.percentage}})},[]),s=(0,Vt.useCallback)((y,h)=>{let b;try{b=JSON.parse(h)}catch{return}let m=at.getState();switch(y){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:b.totalNodes??0,completed:0,running:0,pending:b.totalNodes??0,percentage:0}});break}case"node_start":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),wd(b.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:b.progress??m.progress.percentage}});let x=b.output??{},v={executionStatus:"completed",executionError:void 0};if(x.text&&(v.generatedContent=x.text),x.mediaAssets&&x.mediaAssets.length>0){let C=x.mediaAssets[0];v.mediaAssets=x.mediaAssets,C.type==="image"&&(v.mediaUrl=C.url),v.taskId=`exec-${b.executionId??""}`}wd(b.nodeId,v);break}case"node_error":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),wd(b.nodeId,{executionStatus:"error",executionError:b.error??_s("error.nodeExecutionFailed")});break}case"node_skipped":{if(!b.nodeId)break;m.setNodeStatus(b.nodeId,"skipped"),wd(b.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",b.error??_s("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),l=(0,Vt.useCallback)(y=>{r();let h=o.current;if(!h)return;let b=new EventSource(Nt.executionEvents(encodeURIComponent(h),encodeURIComponent(y)));a.current=b;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let x of m)b.addEventListener(x,v=>{s(x,v.data)});b.onerror=()=>{let x=at.getState().status;d7.has(x)&&r()}},[r,s]),u=(0,Vt.useCallback)(y=>{let h=at.getState();h.setExecution({executionId:y.id,status:y.status,error:y.error,progress:{total:y.progress.total,completed:y.progress.completed,running:y.progress.running,pending:y.progress.pending,percentage:y.progress.percentage}});for(let[b,m]of Object.entries(y.nodeStates??{})){h.setNodeStatus(b,m.status);let x={executionStatus:m.status};m.status==="error"&&m.error&&(x.executionError=m.error);let v=y.nodeOutputs?.[b];v&&(v.text&&(x.generatedContent=v.text),v.mediaAssets&&v.mediaAssets.length>0&&(x.mediaAssets=v.mediaAssets,v.mediaAssets[0]&&v.mediaAssets[0].type==="image"&&(x.mediaUrl=v.mediaAssets[0].url))),wd(b,x)}},[]),d=(0,Vt.useCallback)(async(y={})=>{let h=o.current;if(!h)return;if(r(),at.getState().resetExecution(),at.getState().setExecution({status:"pending"}),y.mode==="single"&&y.nodeIds&&y.nodeIds[0]&&(at.getState().setNodeStatus(y.nodeIds[0],"pending"),wd(y.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let b=await P5(h,{mode:y.mode??"full",nodeIds:y.nodeIds});if(!b.ok||!b.body.execution){at.getState().setExecution({status:"error",error:b.body.message??_s("error.createExecutionFailed")});return}at.getState().setExecution({executionId:b.body.execution.id}),l(b.body.execution.id)},[r,l]),f=(0,Vt.useCallback)(async y=>{let h=o.current,{executionId:b}=at.getState();if(!h||!b)return;let m=await V5(h,b,y);!m.ok&&m.body.message&&at.getState().setExecution({error:m.body.message})},[]),c=(0,Vt.useCallback)(()=>f("pause"),[f]),p=(0,Vt.useCallback)(()=>f("resume"),[f]),g=(0,Vt.useCallback)(()=>f("cancel"),[f]),w=(0,Vt.useCallback)(()=>{r(),at.getState().resetExecution()},[r]);return(0,Vt.useEffect)(()=>{if(!e)return;let y=!1;return(async()=>{try{let h=await z5(e);if(y||!h.ok)return;let b=(h.body.executions??[]).find(x=>LN.has(x.status));if(!b)return;let m=await O5(e,b.id);if(y||!m.ok||!m.body.execution)return;u(m.body.execution),LN.has(m.body.execution.status)&&l(b.id)}catch{}})(),()=>{y=!0}},[e,u,l]),(0,Vt.useEffect)(()=>(at.getState().setStartNodeExecution(h=>{d({mode:"single",nodeIds:[h]})}),()=>{at.getState().setStartNodeExecution(null)}),[d]),(0,Vt.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:w}}var Hs=I(J(),1);function IN(e={}){let t=e.workspaceId,[a,o]=(0,Hs.useState)({phase:"loading"}),[n,r]=(0,Hs.useState)(()=>Jc()),i=oe(d=>d.hydrateGraph),s=oe(d=>d.resetStore),l=oe(d=>d.nodes.length),u=(0,Hs.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Hs.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=oe.getState(),p=yI(c.nodes);if(p.length===0)return;let g=await q5(p);if(d||!g.ok||!Array.isArray(g.body.items))return;let w=wI(c.nodes,g.body.items);!w.some((h,b)=>h!==c.nodes[b])||d||c.setNodes(w)}return(async()=>{try{if(T5().then(g=>{!d&&g.ok&&(r(g.body),NM(g.body))}),!t)return;let c=await Vc(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await A5("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??_s("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),s()}},[t,i,s]),{boot:a,setBoot:o,catalog:n,nodeCount:l}}var rt=I(J(),1);function MN(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}var u7=1e3,c7=2500,f7=3e3;function yd(){let{nodes:e,edges:t}=oe.getState(),a=E0(e,t);return{nodes:a.nodes,edges:a.edges}}function NN(e,t={}){let a=t.enabled!==!1,[o,n]=(0,rt.useState)("idle"),[r,i]=(0,rt.useState)(!1),s=(0,rt.useRef)(e),l=(0,rt.useRef)(0),u=(0,rt.useRef)(""),d=(0,rt.useRef)(0),f=(0,rt.useRef)(""),c=(0,rt.useRef)(null),p=(0,rt.useRef)(null),g=(0,rt.useRef)(!1),w=(0,rt.useRef)(a);w.current=a;let y=(0,rt.useRef)(t.onSaved);y.current=t.onSaved,(0,rt.useEffect)(()=>{s.current=e,e&&(l.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=bn(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},b=(0,rt.useCallback)(async k=>{let _=s.current;if(!_){n("error");return}let T=await Vc(_.id);if(!T.ok||!T.body.workspace){n("error");return}let A=T.body.workspace,B=MN({localSignature:bn(k.localNodes,k.localEdges),lastSavedSignature:u.current,remoteSignature:bn(A.nodes,A.edges)});if(l.current=A.version,B==="conflict"){n("conflict");return}u.current=bn(A.nodes,A.edges),d.current=A.nodes.length,B==="reload"&&oe.getState().hydrateGraph(A.nodes,A.edges),i(!1),n("idle"),y.current?.(A)},[]),m=(0,rt.useCallback)(async(k,_,T=!1)=>{let A=s.current;if(!A||!T&&!w.current||g.current)return;let B=Xm({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:_,lastSavedSignature:u.current,nextSignature:bn(k.nodes,k.edges)});if(!B.persist||!B.snapshot)return;let{nodes:U,edges:L}=B.snapshot,N=A.name;g.current=!0,n("saving");try{let E=await R5(A.id,{name:N,nodes:tf(U),edges:af(L),expectedVersion:l.current});if(E.status===409){await b({localNodes:U,localEdges:L});return}E.ok&&E.body.workspace?(l.current=E.body.workspace.version,u.current=bn(U,L),d.current=U.length,i(!1),n("saved"),h(),p.current=setTimeout(()=>{n(M=>M==="saved"?"idle":M)},c7),y.current?.(E.body.workspace)):n("error")}catch{n("error")}finally{g.current=!1}},[b]);(0,rt.useEffect)(()=>{if(!a)return;let k=(T="autosave")=>{if(!s.current||!w.current)return;let B=yd(),L=bn(B.nodes,B.edges)!==u.current;if(i(L),!L){c.current&&(clearTimeout(c.current),c.current=null),n(R=>R==="pending"?"idle":R);return}let N=Hc(B.nodes.length,T);if(!N0({lastSavedNodeCount:d.current,nextNodeCount:B.nodes.length,cause:N})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(R=>R==="pending"?"idle":R);return}n(R=>R==="saving"||R==="conflict"?R:"pending"),c.current&&clearTimeout(c.current);let E={nodes:B.nodes,edges:B.edges},M=N;c.current=setTimeout(()=>{c.current=null,m(E,M)},u7)},_=oe.subscribe(()=>{k("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,rt.useEffect)(()=>{if(!a)return;let k=()=>{if(!w.current||!s.current)return;let T=yd(),A=Hc(T.nodes.length,"flush"),B=Xm({lastSavedNodeCount:d.current,nextNodes:T.nodes,nextEdges:T.edges,cause:A,lastSavedSignature:u.current,nextSignature:bn(T.nodes,T.edges)});!B.persist||!B.snapshot||m(B.snapshot,A)};return window.addEventListener("pagehide",k),()=>{window.removeEventListener("pagehide",k),k(),h()}},[m,a]);let x=(0,rt.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let k=yd();await m(k,Hc(k.nodes.length,"autosave"))},[m]),v=(0,rt.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!s.current)return;let _=yd(),T="flush",A=Xm({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:T,lastSavedSignature:u.current,nextSignature:bn(_.nodes,_.edges)});!A.persist||!A.snapshot||m(A.snapshot,T,!0)},[m]),C=(0,rt.useCallback)(async()=>{let k=yd();await m(k,Hc(k.nodes.length,"autosave"))},[m]),S=(0,rt.useCallback)(async()=>{let k=s.current;if(!k)return;let _=await Vc(k.id);if(!_.ok||!_.body.workspace){n("error");return}let T=_.body.workspace;l.current=T.version,u.current=bn(T.nodes,T.edges),d.current=T.nodes.length,oe.getState().hydrateGraph(T.nodes,T.edges),i(!1),n("idle"),y.current?.(T)},[]);return(0,rt.useEffect)(()=>{if(!a)return;let k=!1,_=async()=>{if(k||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let A=s.current;if(!(!A||g.current)){k=!0;try{let B=await D5(A.id);if(!B.ok||typeof B.body.version!="number"||B.body.version<=l.current)return;let U=yd();await b({localNodes:U.nodes,localEdges:U.edges})}catch{}finally{k=!1}}},T=setInterval(()=>{_()},f7);return()=>clearInterval(T)},[a,b]),{status:o,isDirty:r,saveNow:x,flushPendingSave:v,resolveConflict:C,reloadFromServer:S}}var Na=I(X(),1),p7=({locale:e,workspaceId:t})=>{let a=le(),o=(0,vd.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=IN({workspaceId:t,beforeReset:()=>{o.current()}});(0,vd.useEffect)(()=>{_5(e)},[e]);let s=n.phase==="ready"?n.workspace:null,l=(0,vd.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=NN(s,{onSaved:l,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=_N(s?s.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,Na.jsx)("div",{className:"wf-canvas-root",children:(0,Na.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Na.jsx)("div",{className:"wf-canvas-root",children:(0,Na.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Na.jsx)("span",{children:n.message}),(0,Na.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Na.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,Na.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Na.jsx)("span",{children:a("app.conflictBanner")}),(0,Na.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Na.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Na.jsx)("main",{className:"wf-canvas-main",children:(0,Na.jsx)(vg,{children:(0,Na.jsx)(SN,{catalog:i,workspaceId:s?.id??null,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})})]})},vw=p7;var EN=`/* this gets exported as style.css and can be used for the default theming */
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
`;var TN=`/**
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

`;var AN=`/**
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
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.wf-group-node--selected {
  border-color: var(--wf-group-accent, var(--wb-accent));
  box-shadow: 0 0 24px color-mix(in srgb, var(--wf-group-accent, var(--wb-accent)) 14%, transparent);
}

.wf-group-header {
  position: absolute;
  top: 10px;
  left: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
}

.wf-group-header__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--wf-group-accent, var(--wb-accent));
}

.wf-group-header__title {
  color: var(--wb-text-primary);
  font-size: 13px;
  font-weight: 600;
  cursor: text;
  user-select: none;
}

.wf-group-header__input {
  background: var(--wb-surface);
  border: 1px solid var(--wf-group-accent, var(--wb-accent));
  border-radius: 4px;
  color: var(--wb-text-primary);
  font-size: 13px;
  font-weight: 600;
  padding: 2px 6px;
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




`;var DN=`/**
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
`;var x7=[{id:"omnimux-workflow-xyflow-base",css:EN},{id:"omnimux-workflow-theme",css:TN},{id:"omnimux-workflow-components",css:AN},{id:"omnimux-workflow-table-node",css:DN}];function RN(){for(let{id:e,css:t}of x7){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Cw=I(X(),1),of=new WeakMap;function w7(e,t){if(!e||of.has(e))return;RN();let a=(0,PN.createRoot)(e);of.set(e,{root:a,lastProps:t}),a.render((0,Cw.jsx)(vw,{...t}))}function y7(e,t){let a=of.get(e);a&&(a.lastProps=t,a.root.render((0,Cw.jsx)(vw,{...t})))}function v7(e){let t=of.get(e);t&&(t.root.unmount(),of.delete(e))}return c3(C7);})();
